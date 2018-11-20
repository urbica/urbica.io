export default (form) => {
  const inputs = [
    ...Array.from(form.getElementsByTagName('input')),
    ...Array.from(form.getElementsByTagName('textarea')),
  ];

  return inputs.reduce((acc, input) => {
    const { id, type, value } = input;
    if (type !== 'submit') {
      acc[id] = value;
    }

    return acc;
  }, {});
};
