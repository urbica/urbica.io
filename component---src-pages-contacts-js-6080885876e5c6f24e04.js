(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{134:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(155),r=n(137),c=r.b.div.withConfig({displayName:"Container",componentId:"sc-1hpjxk7-0"})(["display:flex;flex-direction:column;width:100%;min-height:100vh;padding:110px 30px 0;background:#171F2A;color:#cccccc;box-sizing:border-box;@media (max-width:850px){padding-top:230px;}"]),l=r.b.div.withConfig({displayName:"Main__Container",componentId:"sc-1o8fpet-0"})(["display:flex;flex-grow:1;width:100%;justify-content:space-between;padding-bottom:50px;@media (max-width:1200px){flex-direction:column;}"]),d=r.b.div.withConfig({displayName:"Content",componentId:"t89atq-0"})(["width:33%;@media (max-width:1200px){width:50%;padding-bottom:30px;}@media (max-width:850px){width:100%;padding-bottom:30px;}"]),p=n(6),m=n.n(p),u=n(48),s=n.n(u),h=n(215),f=n.n(h),x=r.b.div.withConfig({displayName:"Container",componentId:"z75enk-0"})(["width:66%;padding-top:70px;@media (max-width:1200px){width:100%;padding-top:0;padding-bottom:50px;}"]),g=r.b.input.withConfig({displayName:"Input",componentId:"x4imno-0"})(["width:100%;height:60px;color:#cccccc;background:transparent;border:1px solid #cccccc;box-sizing:border-box;outline:none;border-radius:0;font-size:20px;padding-left:20px;margin-bottom:30px;&::placeholder{color:#aaaaaa;}"]),b=r.b.textarea.withConfig({displayName:"InputText",componentId:"jtr9bx-0"})(["width:100%;height:180px;color:#cccccc;background:transparent;border:1px solid #cccccc;box-sizing:border-box;outline:none;border-radius:0;font-size:20px;padding-left:20px;padding-top:20px;margin-bottom:30px;resize:none;&::placeholder{color:#aaaaaa;}"]),y=r.b.input.withConfig({displayName:"Submit__Container",componentId:"sc-3lqr40-0"})(["font-size:30px;color:#cccccc;text-decoration:",";background:none;border:none;outline:none;cursor:pointer;padding:0;@media (max-width:850px){display:block;width:100%;text-align:left;}"],function(e){return e.disable?"none":"underline"}),w=(n(74),n(234),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={submitted:!1},n.handleSubmit=n.handleSubmit.bind(s()(s()(n))),n}m()(t,e);var n=t.prototype;return n.handleSubmit=function(e){var t=this,n=this.state.submitted;e.preventDefault();var a,i={fields:(a=e.target,Array.from(a.getElementsByTagName("input")).concat(Array.from(a.getElementsByTagName("textarea"))).reduce(function(e,t){var n=t.id,a=t.type,i=t.value;return"submit"!==a&&(e[n]=i),e},{}))};n||f.a.post("https://api.airtable.com/v0/app4VuYkBklQRr1Or/mail",i,{headers:{Authorization:"Bearer keyml20MIWE5ZQGhA"}}).then(function(e){"OK"===e.statusText&&t.setState({submitted:!0})})},n.render=function(){var e=this.state.submitted;return i.a.createElement(x,null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement(g,{id:"name",type:"text",placeholder:"Name"}),i.a.createElement(g,{id:"phone",type:"text",placeholder:"Email or phone number"}),i.a.createElement(b,{id:"text",placeholder:"Ask us a question or tell us about your project"}),e?i.a.createElement("div",null,"Your message is sucсesfully sent"):i.a.createElement(y,{type:"submit",value:"Submit"})))},t}(a.Component)),M=r.b.div.withConfig({displayName:"Title",componentId:"sc-6bdbfi-0"})(["line-height:40px;font-size:30px;text-transform:uppercase;color:#cccccc;mix-blend-mode:normal;margin-bottom:30px;@media (max-width:1200px){width:100%;}"]),E=r.b.div.withConfig({displayName:"Text",componentId:"sc-1q2vebt-0"})(["width:320px;line-height:40px;font-size:30px;color:#CCCCCC;mix-blend-mode:normal;@media (max-width:1200px){width:100%;}"]),v=n(148),I=n.n(v),C=r.b.a.withConfig({displayName:"Link",componentId:"fuhku6-0"})(["position:relative;font-style:normal;font-weight:normal;font-size:30px;text-decoration-line:underline;color:#cccccc;transition:opacity 0.3s;&:after{position:absolute;content:'';right:-35px;top:5px;width:20px;height:25px;background:url(",") no-repeat;background-size:contain;}&:hover{opacity:0.5;}"],I.a),z=n(167),j=n(145),N=r.b.div.withConfig({displayName:"Container",componentId:"sc-13ju8kf-0"})(["border-top:1px solid #cccccc;padding:30px 0;"]),k=r.b.div.withConfig({displayName:"Content",componentId:"sc-153a0qg-0"})(["display:flex;justify-content:space-between;flex-wrap:wrap;"]),D=r.b.div.withConfig({displayName:"Block",componentId:"sc-1x07m16-0"})(["display:flex;flex-direction:column;line-height:40px;font-size:30px;flex-grow:0;padding-right:20px;color:#cccccc;opacity:0.8;width:",";@media (max-width:1200px){width:calc(50% - 30px);padding-bottom:50px;flex-shrink:0;}@media (max-width:850px){width:100%;padding-bottom:0;flex-shrink:0;div{padding:20px 0;}}"],function(e){return e.address?"33%":"auto"}),A=r.b.a.withConfig({displayName:"Link",componentId:"zu8zp2-0"})(["position:relative;font-style:normal;font-weight:normal;font-size:30px;text-decoration-line:none;color:#cccccc;transition:opacity 0.3s;&:after{display:",";position:absolute;content:'';right:-35px;top:5px;width:20px;height:25px;background:url(",") no-repeat;background-size:contain;}&:hover{opacity:0.5;}"],function(e){return e.disableArrow?"none":"block"},I.a),S=function(){return i.a.createElement(N,null,i.a.createElement(j.a,null,"Drop us a line"),i.a.createElement(k,null,i.a.createElement(z.a,{query:{maxWidth:850}},function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{address:!0},"Russia, Moscow, 3rd  Monetchikovsky lane, 11/1"),e&&i.a.createElement(D,null,i.a.createElement("div",null,i.a.createElement(A,{href:"tel:+79166271646",disableArrow:!0},"+7 916 627 16 46")),i.a.createElement("div",null,i.a.createElement(A,{href:"mailto:hello@urbica.co"},"hello@urbica.co"))))}),i.a.createElement(D,null,i.a.createElement("div",null,i.a.createElement(A,{href:"https://twitter.com/UrbicaDesign",target:"_blank"},"twitter")),i.a.createElement("div",null,i.a.createElement(A,{href:"https://medium.com/@urbica.co",target:"_blank"},"medium"))),i.a.createElement(D,null,i.a.createElement("div",null,i.a.createElement(A,{href:"https://www.facebook.com/urbica.co/",target:"_blank"},"facebook")),i.a.createElement("div",null,i.a.createElement(A,{href:"https://www.instagram.com/urbica_design/",target:"_blank"},"instagram"))),i.a.createElement(z.a,{query:{minWidth:850}},function(e){return i.a.createElement(i.a.Fragment,null,e&&i.a.createElement(D,null,i.a.createElement("div",null,i.a.createElement(A,{href:"mailto:hello@urbica.co"},"hello@urbica.co")),i.a.createElement("div",null,i.a.createElement(A,{href:"tel:+79166271646",disableArrow:!0},"+7 916 627 16 46"))))})))},L=function(){return i.a.createElement(c,null,i.a.createElement(l,null,i.a.createElement(d,null,i.a.createElement(M,null,"Let’s get in touch"),i.a.createElement(E,null,"Fill the form or contact us on"),i.a.createElement(C,{href:"mailto:hello@urbica.co"},"hello@urbica.co")),i.a.createElement(w,null)),i.a.createElement(S,null))};t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(L,null))}},140:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return s});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),c=n(138),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var d=n(144),p=n.n(d);n.d(t,"PageRenderer",function(){return p.a});var m=n(28);n.d(t,"parsePath",function(){return m.a});var u=i.a.createContext({}),s=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}s.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},144:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},145:function(e,t,n){"use strict";var a=n(137);t.a=a.b.div.withConfig({displayName:"Title",componentId:"sc-1e5zev3-0"})(["line-height:40px;font-size:30px;text-transform:uppercase;color:#cccccc;mix-blend-mode:normal;margin-bottom:30px;"])},148:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjYyNDkgMS4zMjIzM0MxOS42MjQ5IDAuNzcwMDQ2IDE5LjE3NzIgMC4zMjIzMyAxOC42MjQ5IDAuMzIyMzNMOS42MjQ5MyAwLjMyMjMzMUM5LjA3MjY1IDAuMzIyMzMgOC42MjQ5MyAwLjc3MDA0NiA4LjYyNDkzIDEuMzIyMzNDOC42MjQ5MyAxLjg3NDYyIDkuMDcyNjUgMi4zMjIzMyA5LjYyNDkzIDIuMzIyMzNMMTcuNjI0OSAyLjMyMjMzTDE3LjYyNDkgMTAuMzIyM0MxNy42MjQ5IDEwLjg3NDYgMTguMDcyNyAxMS4zMjIzIDE4LjYyNDkgMTEuMzIyM0MxOS4xNzcyIDExLjMyMjMgMTkuNjI0OSAxMC44NzQ2IDE5LjYyNDkgMTAuMzIyM0wxOS42MjQ5IDEuMzIyMzNaTTEuNjU0MzcgMTkuNzA3MUwxOS4zMzIgMi4wMjk0NEwxNy45MTc4IDAuNjE1MjI0TDAuMjQwMTU5IDE4LjI5MjlMMS42NTQzNyAxOS43MDcxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},150:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),c=n(49),l=n(2),d=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=d},151:function(e,t,n){e.exports=n.p+"static/DecimaMonoPro-bbe1a4a1023d74856aded9845c89fb60.otf"},152:function(e,t,n){e.exports=n.p+"static/DecimaMonoPro-6b05bbe173f4739f765923e07aa028c7.woff"},153:function(e,t,n){e.exports=n.p+"static/DecimaMonoPro-3d9b2d874d6aec77dd8e19b2a9d71a78.woff2"},155:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(4),r=n.n(o),c=n(159),l=(n(160),n(137)),d=l.b.div.withConfig({displayName:"Container",componentId:"p9pg8l-0"})(["position:fixed;top:0;left:0;width:100%;padding:0 30px;box-sizing:border-box;align-items:center;background:rgb(23,31,42);z-index:1;div{display:flex;}"]),p=l.b.div.withConfig({displayName:"Navigation__Container",componentId:"sc-15ggpvq-0"})(["margin-left:auto;@media (max-width:850px){width:100%;border-top:1px solid #CCCCCC;margin-left:0;}"]),m=n(140),u=Object(l.b)(m.Link).withConfig({displayName:"NavigationLink",componentId:"sc-15bkgit-0"})(["font-size:30px;line-height:71px;padding-top:5px;text-transform:uppercase;margin-left:25px;text-decoration:none;border-bottom:3px solid transparent;color:rgba(204,204,204,1);transition:color 0.3s;@media (min-width:850px){&:hover{color:rgba(204,204,204,0.5);}}@media (max-width:850px){margin-left:0;margin-right:25px;}"]),s=l.b.a.withConfig({displayName:"NavigationA__NavigationLink",componentId:"sc-1p9nyia-0"})(["font-size:30px;line-height:71px;padding-top:5px;text-transform:uppercase;margin-left:25px;text-decoration:none;border-bottom:3px solid transparent;color:rgba(204,204,204,1);transition:color 0.3s;@media (min-width:850px){&:hover{color:rgba(204,204,204,0.5);}}@media (max-width:850px){margin-left:0;margin-right:25px;}"]),h=l.b.div.withConfig({displayName:"HeaderWrap__Wrap",componentId:"sc-1rf5zdy-0"})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:80px;border-bottom:1px solid #CCCCCC;@media (max-width:850px){flex-direction:column;align-items:flex-start;margin-top:20px;height:auto;}"]),f=Object(l.b)(m.Link).withConfig({displayName:"Container",componentId:"cec8d-0"})(["padding-top:20px;padding-bottom:30px;transition:opacity 0.3s;font-size:30px;letter-spacing:3px;line-height:33px;text-transform:uppercase;text-decoration:none;color:#E4E4E4;@media (min-width:850px){padding-top:0;padding-bottom:0;&:hover{opacity:0.5;}}"]),x=function(){return i.a.createElement(f,{to:"/"},"Urbica")},g=function(){return i.a.createElement(d,null,i.a.createElement(h,null,i.a.createElement(x,null),i.a.createElement(p,null,i.a.createElement(u,{to:"/projects",activeStyle:{borderBottom:"3px solid #ccc"}},"projects"),i.a.createElement(u,{to:"/contacts",activeStyle:{borderBottom:"3px solid #ccc"}},"contacts"),i.a.createElement(s,{href:"https://medium.com/@Urbica.co",target:"_blank",activeStyle:{borderBottom:"3px solid #ccc"}},"BLOG"))))},b=l.b.div.withConfig({displayName:"Container",componentId:"myo0r5-0"})(["width:100%;min-height:100vh;background:#171F2A;"]),y=n(161),w=n.n(y),M=n(151),E=n.n(M),v=n(152),I=n.n(v),C=n(153),z=n.n(C);function j(){var e=w()(["\n  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');\n\n  @font-face {\n    font-family: 'DecimaMonoPro';\n    font-display: auto;\n    font-style: normal;\n    font-weight: normal;\n    src: url(",") format('opentype'),\n    url(",") format('woff'),\n    url(",") format('woff2');\n  }\n\n  html {\n    font-family: 'DecimaMonoPro', monospace;\n    background: rgb(23,31,42);\n    font-size: 30px;\n  }\n"]);return j=function(){return e},e}var N=Object(l.a)(j(),E.a,I.a,z.a),k=(n(47),n(162),n(69),n(6)),D=n.n(k),A=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={error:null},n}D()(t,e);var n=t.prototype;return n.componentDidCatch=function(e,t){this.setState({error:e}),Sentry.configureScope(function(e){Object.keys(t).forEach(function(n){e.setExtra(n,t[n])})}),Sentry.captureException(e)},n.render=function(){return this.state.error?i.a.createElement("h1",null,"Something went wrong!"):this.props.children},t}(i.a.Component),S=function(e){var t=e.title,n=e.children;return i.a.createElement(A,null,i.a.createElement(b,null,i.a.createElement(N,null),i.a.createElement(c.Helmet,null,i.a.createElement("title",null,t)),i.a.createElement(g,null),n))};S.propTypes={title:r.a.string,children:r.a.node.isRequired},S.defaultProps={title:"Urbica"};t.a=S}}]);
//# sourceMappingURL=component---src-pages-contacts-js-6080885876e5c6f24e04.js.map