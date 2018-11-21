(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{128:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(141),a=n(129),c=a.b.div.withConfig({displayName:"Container",componentId:"sc-1x520qe-0"})(["display:flex;flex-direction:column;width:100%;padding-top:80px;box-sizing:border-box;align-items:center;@media (max-width:850px){padding-top:200px;}"]),l=n(4),s=n.n(l),u=n(134),p=a.b.div.withConfig({displayName:"Content",componentId:"sc-1wnteqb-0"})(["display:flex;position:relative;justify-content:space-between;flex-wrap:wrap;padding-bottom:60px;"]),d=n(131),g=n(195),m=n.n(g),f=a.b.a.withConfig({displayName:"Container",componentId:"sc-3t7sc0-0"})(['display:block;position:relative;width:calc(33% - 15px);height:auto;margin-bottom:30px;cursor:pointer;overflow:hidden;text-decoration:none;&::before{content:"";display:block;padding-top:100%;transition:background-color 0.3s;background-color:rgba(12,16,25,1);background-image:url(',");background-position:center;background-repeat:no-repeat;filter:blur(",");background-blend-mode:luminosity;background-size:cover;cursor:pointer;opacity:",";}&:hover{:before{background-color:rgba(255,255,255,0);}}@media (max-width:1100px){width:calc(50% - 15px);}@media (max-width:850px){width:100%;:before{background-blend-mode:normal;}}"],function(e){return e.img},function(e){return e.loading?"4px":"0px"},function(e){return e.loading?.5:1}),b=a.b.div.withConfig({displayName:"Title__Container",componentId:"sc-7sokue-0"})(["display:flex;position:relative;font-size:30px;line-height:37px;text-transform:uppercase;padding-top:25px;align-items:center;color:#cccccc;cursor:pointer;&:hover{opacity:0.5;}"]),y=a.b.div.withConfig({displayName:"Text",componentId:"bityaw-0"})(["font-size:30px;line-height:37px;color:#aaaaaa;"]),h=n(146),M=n.n(h),x=a.b.div.withConfig({displayName:"Arrow__Container",componentId:"sc-14ovgqt-0"})(["display:block;height:25px;width:25px;margin:0 10px 3px;background:url(",") no-repeat center;background-size:contain;transform:rotate(-90deg);"],M.a),w=(n(73),function(e){var t=e.title,n=e.description,i=e.img,r=e.url;return o.a.createElement(m.a,{src:Object(d.withPrefix)(i),placeholder:Object(d.withPrefix)(function(e){var t=e.split("/"),n="thumb."+t.pop();return t.concat([n]).join("/")}(i))},function(e,i){return o.a.createElement(f,{href:r,img:e,loading:i,target:"_blank"},o.a.createElement(b,null,t,o.a.createElement(x,null)),o.a.createElement(y,null,n))})});w.propTypes={title:s.a.string.isRequired,description:s.a.string.isRequired,img:s.a.string.isRequired,url:s.a.string.isRequired};var j=w,I=n(140),v=n(147),C=function(e){var t=e.title,n=e.content,i=e.disableBorder,r=e.footer;return o.a.createElement(I.a,{style:{paddingTop:30},disableBorder:i},o.a.createElement(u.a,null,t),o.a.createElement(p,null,n.map(function(e){return o.a.createElement(j,{key:e.title,title:e.title,description:e.description,img:e.img,url:e.url})})),r&&o.a.createElement(v.a,null))};C.propTypes={title:s.a.string.isRequired,content:s.a.arrayOf(s.a.object).isRequired,disableBorder:s.a.bool,footer:s.a.bool},C.defaultProps={disableBorder:!1,footer:!1};var z=C,D=[{title:"Map of GULAG History",description:"Сhronology of the Soviet labour camps system",url:"https://v3.urbica.co/gulag",img:"/images/projects/gulag.jpg"},{title:"AReal",description:"St Petersburg in augmented reality",url:"https://areal.urbica.co/",img:"/images/projects/arial.jpeg"},{title:"Agglomerations.org",description:"How major cities are organised",url:"https://v3.urbica.co/agglomerations",img:"/images/projects/agglom.jpg"},{title:"MAPS.ME",description:"Redesigning a world map for 100M users",url:"https://v3.urbica.co/maps_me",img:"/images/projects/mapsme.jpg"},{title:"Magistral",description:"Planning surface transit network with data",url:"https://v3.urbica.co/magistral",img:"/images/projects/magistral.jpg"},{title:"Velobike",description:"A dispatching system for Moscow bikesharing",url:"https://v3.urbica.co/velobike",img:"/images/projects/velobike.jpg"},{title:"Walkstreets",description:"Мost comfortable walking routes",url:"https://v3.urbica.co/walkstreets",img:"/images/projects/ws.jpg"}],N=[{title:"galton",description:"Lightweight Node.js isochrone map server",url:"https://github.com/urbica/galton",img:"/images/technologies/galton.jpg"},{title:"martin",description:"PostGIS vector tiles server",url:"https://martin.urbica.co/",img:"/images/technologies/martin.jpg"},{title:"REACT-MAP-GL",description:"React Component for Mapbox GL JS",url:"https://github.com/urbica/react-map-gl",img:"/images/technologies/react.jpg"}],E=function(){return o.a.createElement(c,null,o.a.createElement(z,{title:"Selected projects",content:D,disableBorder:!0}),o.a.createElement(z,{title:"Our technologies",content:N,footer:!0}))};t.default=function(){return o.a.createElement(r.a,null,o.a.createElement(E,null))}},131:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return g});var i=n(0),o=n.n(i),r=n(4),a=n.n(r),c=n(130),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(133),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(29);n.d(t,"parsePath",function(){return p.a});var d=o.a.createContext({}),g=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},133:function(e,t,n){var i;e.exports=(i=n(136))&&i.default||i},134:function(e,t,n){"use strict";var i=n(129);t.a=i.b.div.withConfig({displayName:"Title",componentId:"sc-1e5zev3-0"})(["line-height:40px;font-size:30px;text-transform:uppercase;color:#cccccc;mix-blend-mode:normal;margin-bottom:30px;"])},135:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5LjYyNDkgMS4zMjIzM0MxOS42MjQ5IDAuNzcwMDQ2IDE5LjE3NzIgMC4zMjIzMyAxOC42MjQ5IDAuMzIyMzNMOS42MjQ5MyAwLjMyMjMzMUM5LjA3MjY1IDAuMzIyMzMgOC42MjQ5MyAwLjc3MDA0NiA4LjYyNDkzIDEuMzIyMzNDOC42MjQ5MyAxLjg3NDYyIDkuMDcyNjUgMi4zMjIzMyA5LjYyNDkzIDIuMzIyMzNMMTcuNjI0OSAyLjMyMjMzTDE3LjYyNDkgMTAuMzIyM0MxNy42MjQ5IDEwLjg3NDYgMTguMDcyNyAxMS4zMjIzIDE4LjYyNDkgMTEuMzIyM0MxOS4xNzcyIDExLjMyMjMgMTkuNjI0OSAxMC44NzQ2IDE5LjYyNDkgMTAuMzIyM0wxOS42MjQ5IDEuMzIyMzNaTTEuNjU0MzcgMTkuNzA3MUwxOS4zMzIgMi4wMjk0NEwxNy45MTc4IDAuNjE1MjI0TDAuMjQwMTU5IDE4LjI5MjlMMS42NTQzNyAxOS43MDcxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="},136:function(e,t,n){"use strict";n.r(t);n(30);var i=n(0),o=n.n(i),r=n(4),a=n.n(r),c=n(47),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},137:function(e,t,n){e.exports=n.p+"static/DecimaMonoPro-f13ada9920d83899bb351f55e031daf5.otf"},138:function(e,t,n){e.exports=n.p+"static/DecimaMonoPro-6b05bbe173f4739f765923e07aa028c7.woff"},139:function(e,t,n){e.exports=n.p+"static/DecimaMonoPro-3d9b2d874d6aec77dd8e19b2a9d71a78.woff2"},140:function(e,t,n){"use strict";var i=n(129).b.div.withConfig({displayName:"Wrap",componentId:"sc-1sskv6m-0"})(["display:flex;flex-direction:column;position:relative;justify-content:space-between;width:calc(100vw - 60px);min-height:",";border-top:"," solid #CCCCCC;box-sizing:border-box;padding:50px 0;@media (max-width:850px){min-height:",";}"],function(e){return e.disableMinHeight?"inherit":"calc(100vh - 80px)"},function(e){return e.disableBorder?"0":"1px"},function(e){return e.disableMinHeight?"inherit":"calc(100vh - 170px)"});t.a=i},141:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(4),a=n.n(r),c=n(142),l=(n(143),n(129)),s=l.b.div.withConfig({displayName:"Container",componentId:"p9pg8l-0"})(["position:fixed;top:0;left:0;width:100%;padding:0 30px;box-sizing:border-box;align-items:center;background:rgb(23,31,42);z-index:1;div{display:flex;}"]),u=l.b.div.withConfig({displayName:"Navigation__Container",componentId:"sc-15ggpvq-0"})(["margin-left:auto;@media (max-width:850px){width:100%;border-top:1px solid #CCCCCC;margin-left:0;}"]),p=n(131),d=Object(l.b)(p.Link).withConfig({displayName:"NavigationLink",componentId:"sc-15bkgit-0"})(["font-size:30px;line-height:73px;padding-top:5px;text-transform:uppercase;margin-left:25px;text-decoration:none;border-bottom:3px solid transparent;color:rgba(204,204,204,1);transition:color 0.3s;@media (min-width:850px){&:hover{color:rgba(204,204,204,0.5);}}@media (max-width:850px){margin-left:0;margin-right:25px;}"]),g=l.b.div.withConfig({displayName:"HeaderWrap__Wrap",componentId:"sc-1rf5zdy-0"})(["display:flex;justify-content:space-between;align-items:center;width:100%;height:80px;border-bottom:1px solid #CCCCCC;@media (max-width:850px){flex-direction:column;align-items:flex-start;margin-top:20px;height:auto;}"]),m=Object(l.b)(p.Link).withConfig({displayName:"Container",componentId:"cec8d-0"})(["padding-top:20px;padding-bottom:30px;transition:opacity 0.3s;font-size:30px;line-height:33px;text-transform:uppercase;text-decoration:none;color:#E4E4E4;@media (min-width:850px){padding-top:0;padding-bottom:0;&:hover{opacity:0.5;}}"]),f=function(){return o.a.createElement(m,{to:"/"},"Urbica")},b=function(){return o.a.createElement(s,null,o.a.createElement(g,null,o.a.createElement(f,null),o.a.createElement(u,null,o.a.createElement(d,{to:"/projects",activeStyle:{borderBottom:"3px solid #ccc"}},"projects"),o.a.createElement(d,{to:"/contacts",activeStyle:{borderBottom:"3px solid #ccc"}},"contacts"))))},y=l.b.div.withConfig({displayName:"Container",componentId:"myo0r5-0"})(["width:100%;min-height:100vh;background:#171F2A;"]),h=n(144),M=n.n(h),x=n(137),w=n.n(x),j=n(138),I=n.n(j),v=n(139),C=n.n(v);function z(){var e=M()(["\n  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono');\n\n  @font-face {\n    font-family: 'DecimaMonoPro';\n    font-style: normal;\n    font-weight: normal;\n    src: url(",") format('opentype'),\n    url(",") format('woff'),\n    url(",") format('woff2');\n  }\n\n  html {\n    font-family: 'DecimaMonoPro', monospace;\n    background: rgb(23,31,42);\n  }\n"]);return z=function(){return e},e}var D=Object(l.a)(z(),w.a,I.a,C.a),N=function(e){var t=e.title,n=e.children;return o.a.createElement(y,null,o.a.createElement(D,null),o.a.createElement(c.Helmet,null,o.a.createElement("title",null,t)),o.a.createElement(b,null),n)};N.propTypes={title:a.a.string,children:a.a.node.isRequired},N.defaultProps={title:"Urbica"};t.a=N},146:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAxNiAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjkyODkgMzAuNzA3MUM3LjY4MzQyIDMxLjA5NzYgOC4zMTY1OCAzMS4wOTc2IDguNzA3MTEgMzAuNzA3MUwxNS4wNzExIDI0LjM0MzFDMTUuNDYxNiAyMy45NTI2IDE1LjQ2MTYgMjMuMzE5NSAxNS4wNzExIDIyLjkyODlDMTQuNjgwNSAyMi41Mzg0IDE0LjA0NzQgMjIuNTM4NCAxMy42NTY5IDIyLjkyODlMOCAyOC41ODU4TDIuMzQzMTQgMjIuOTI4OUMxLjk1MjYyIDIyLjUzODQgMS4zMTk0NiAyMi41Mzg0IDAuOTI4OTMxIDIyLjkyODlDMC41Mzg0MDcgMjMuMzE5NSAwLjUzODQwNyAyMy45NTI2IDAuOTI4OTMxIDI0LjM0MzFMNy4yOTI4OSAzMC43MDcxWk03IC00LjM3MTE0ZS0wOEw3IDMwTDkgMzBMOSA0LjM3MTE0ZS0wOEw3IC00LjM3MTE0ZS0wOFoiIGZpbGw9IiNDQ0NDQ0MiLz4KPC9zdmc+Cg=="},147:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(129),a=r.b.div.withConfig({displayName:"Container",componentId:"dkcqum-0"})(["display:flex;flex-direction:column;width:100%;height:180px;border:1px solid #CCCCCC;justify-content:center;align-items:center;text-decoration:none;color:#CCCCCC;"]),c=n(134),l=n(131),s=n(135),u=n.n(s),p=Object(r.b)(l.Link).withConfig({displayName:"LinkWithArrow",componentId:"wf0akh-0"})(["position:relative;font-family:'IBM Plex Mono',monospace;font-style:normal;font-weight:normal;font-size:20px;text-decoration-line:underline;color:#CCCCCC;transition:opacity 0.3s;&:after{position:absolute;content:'';right:-35px;top:5px;width:20px;height:25px;background:url(",") no-repeat;background-size:contain;}&:hover{opacity:0.5;}"],u.a);t.a=function(){return o.a.createElement(a,null,o.a.createElement(c.a,null,"Let’s get in touch"),o.a.createElement(p,{to:"/contacts"},"Work with us"))}},195:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(0));function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e){function t(e){var n,i,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,r=a(t).call(this,e),n=!r||"object"!==o(r)&&"function"!=typeof r?l(i):r,s(l(l(n)),"image",void 0),s(l(l(n)),"loadImage",function(e,t){n.image&&(n.image.onload=null,n.image.onerror=null);var i=new Image;n.image=i,i.onload=n.onLoad,i.onerror=n.onError,i.src=e,t&&(i.srcset=t.srcSet,i.sizes=t.sizes)}),s(l(l(n)),"onLoad",function(){n.props.delay?n.setImageWithDelay():n.setImage()}),s(l(l(n)),"setImageWithDelay",function(){setTimeout(function(){n.setImage()},n.props.delay)}),s(l(l(n)),"setImage",function(){n.setState({image:n.image.src,loading:!1,srcSetData:{srcSet:n.image.srcset||"",sizes:n.image.sizes||""}})}),s(l(l(n)),"onError",function(e){var t=n.props.onError;t&&t(e)}),n.state={image:e.placeholder,loading:!0,srcSetData:{srcSet:"",sizes:""}},n}var n,u,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,i.Component),n=t,(u=[{key:"componentDidMount",value:function(){var e=this.props,t=e.src,n=e.srcSetData;this.loadImage(t,n)}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,i=n.src,o=n.placeholder,r=n.srcSetData;i!==e.src&&this.setState({image:o,loading:!0},function(){t.loadImage(i,r)})}},{key:"componentWillUnmount",value:function(){this.image&&(this.image.onload=null,this.image.onerror=null)}},{key:"render",value:function(){var e=this.state,t=e.image,n=e.loading,i=e.srcSetData,o=this.props.children;if(!o||"function"!=typeof o)throw new Error("ProgressiveImage requires a function as its only child");return o(t,n,i)}}])&&r(n.prototype,u),p&&r(n,p),t}();t.default=u}}]);
//# sourceMappingURL=component---src-pages-projects-js-028771947ff0b4c79aed.js.map