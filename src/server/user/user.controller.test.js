// @flow

const request = require('supertest');
const db = require('../db');
const server = require('../app');
const Team = require('../team/team.model');

let app;
beforeAll(() => {
  app = server.listen();
});

afterAll(() => {
  db.end();
  app.close();
});

describe('User Controller', () => {
  let team;
  beforeEach(async () => (team = await Team.create({ name: 'Team' })));

  describe('#index', () => {
    test('returns array', async () =>
      request(app)
        .get(`/teams/${team.id}/users`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body).toBeInstanceOf(Array);
        }));
  });

  describe('#create', () => {
    test('returns User', async () => {
      const user = { name: 'User' };
      const newUser = await request(app)
        .post(`/teams/${team.id}/users`)
        .send(user)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => res.body);

      expect(newUser).toEqual(expect.objectContaining(user));
    });
  });

  describe('#get', () => {
    test('returns User', async () => {
      const user = { name: 'User' };

      const expectedUser = await request(app)
        .post(`/teams/${team.id}/users`)
        .send(user)
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => res.body);

      const actualUser = await request(app)
        .get(`/teams/${team.id}/users/${expectedUser.id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => res.body);

      expect(actualUser).toEqual(expectedUser);
    });

    test('returns 404 for nonexistent User', async () => {
      const response = await request(app)
        .get(`/teams/${team.id}/users/nonexistent`)
        .expect('Content-Type', /text\/plain/)
        .expect(404)
        .then(res => res.text);

      expect(response).toEqual(expect.stringMatching(/Not Found/));
    });
  });

  describe('#update', () => {
    test('updates User', async () => {
      const user = await request(app)
        .post(`/teams/${team.id}/users`)
        .send({ name: 'User' })
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => res.body);

      const newUser = { ...user, name: 'New User' };
      const expectedUser = await request(app)
        .put(`/teams/${team.id}/users/${user.id}`)
        .send(newUser)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => res.body);

      const actualUser = await request(app)
        .get(`/teams/${team.id}/users/${expectedUser.id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => res.body);

      expect(actualUser).toEqual(expectedUser);
    });
  });

  describe('#delete', () => {
    test('deletes User', async () => {
      const user = await request(app)
        .post(`/teams/${team.id}/users`)
        .send({ name: 'User' })
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => res.body);

      await request(app)
        .delete(`/teams/${team.id}/users/${user.id}`)
        .expect(204)
        .then(res => res.body);

      const response = await request(app)
        .get(`/teams/${team.id}/users/${user.id}`)
        .expect('Content-Type', /text\/plain/)
        .expect(404)
        .then(res => res.text);

      expect(response).toEqual(expect.stringMatching(/Couldn't find User/));
    });
  });
});
