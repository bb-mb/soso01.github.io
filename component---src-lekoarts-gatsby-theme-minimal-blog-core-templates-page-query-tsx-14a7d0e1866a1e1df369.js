(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[4],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},69100:function(e,t,r){var n=r(99489),o=r(57067);function a(t,r,i){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},57067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(23646),o=r(46860),a=r(60379),i=r(98206);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},60379:function(e,t,r){var n=r(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},42418:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(67294),o=r(70977),a=r(9983),i=r(46725),l=r(98691),c=r(90335),s=function(e){var t=e.data.page;return(0,o.tZ)(l.Z,null,(0,o.tZ)(c.Z,{title:t.title,description:t.excerpt}),(0,o.tZ)(a.X6,{as:"h1",variant:"styles.title"},t.title),(0,o.tZ)("section",{sx:{my:5,variant:"layout.content"}},(0,o.tZ)(i.MDXRenderer,null,t.body)))};var p=function(e){var t=Object.assign({},e);return n.createElement(s,t)}},98691:function(e,t,r){"use strict";r.d(t,{Z:function(){return I}});var n=r(4942),o=r(67294),a=r(23431),i=r(70977),l=r(9983),c=r(90335),s=r(92403),p=r(8974),u=function(e){var t=e.isDark,r=e.toggle;return(0,i.tZ)("button",{onClick:r,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},(0,i.tZ)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+e.colors.toggleIcon:"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+e.colors.toggleIcon},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+e.colors.toggleIcon:"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+e.colors.toggleIcon+", 0 23px 0 "+e.colors.toggleIcon+", 23px 0 0 "+e.colors.toggleIcon+", -23px 0 0 "+e.colors.toggleIcon+", 15px 15px 0 "+e.colors.toggleIcon+", -15px 15px 0 "+e.colors.toggleIcon+", 15px -15px 0 "+e.colors.toggleIcon+", -15px -15px 0 "+e.colors.toggleIcon},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},g=r(25444),f=r(9797);function d(e){return(0,i.tZ)(g.Link,Object.assign({activeClassName:"active"},e))}var b=function(e){var t=e.nav,r=(0,p.Z)().basePath;return(0,i.tZ)(o.Fragment,null,t&&t.length>0&&(0,i.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return(0,i.tZ)(l.rU,{key:e.slug,as:d,to:(0,f.Z)("/"+r+"/"+e.slug)},e.title)}))))},m=r(97173),h=function(){var e=(0,m.Z)().siteTitle,t=(0,p.Z)().basePath;return(0,i.tZ)(g.Link,{to:(0,f.Z)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,i.tZ)("div",{sx:{my:0,fontWeight:"bold",fontSize:[3,4]}},e))},x=function(){var e=(0,p.Z)().externalLinks;return(0,i.tZ)(o.Fragment,null,e&&e.length>0&&(0,i.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((function(e){return(0,i.tZ)(l.rU,{key:e.url,href:e.url},e.name)}))))},y=function(){var e=(0,p.Z)().navigation,t=(0,s.If)(),r=t[0],n=t[1],o="dark"===r;return(0,i.tZ)("header",{sx:{mb:[3,3]}},(0,i.tZ)(l.kC,{sx:{alignItems:"center",justifyContent:"space-between"}},(0,i.tZ)(h,null),(0,i.tZ)(u,{isDark:o,toggle:function(e){e.preventDefault(),n(o?"light":"dark")}})),(0,i.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,i.tZ)(b,{nav:e}),(0,i.tZ)(x,null)))},v=function(){var e=(0,m.Z)().siteTitle;return(0,i.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,i.tZ)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."),(0,i.tZ)("div",null,(0,i.tZ)(l.rU,{"aria-label":"Link to the theme's GitHub repository",href:"https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"},"Theme")," ","by"," ",(0,i.tZ)(l.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de?utm_source=minimal-blog&utm_medium=Theme"},"LekoArts")))},k=r(66795),w={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:(0,k.nV)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:(0,k.nV)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]},".homeBanner":{objectFit:"cover",maxHeight:300,width:"100%",borderRadius:12}},O=r(63366),Z=["children"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},P=function(e){var t=e.children,r=(0,O.Z)(e,Z);return(0,i.tZ)("a",Object.assign({},r,{sx:S({},E),href:"#skip-nav","data-skip-link":"true"}),t)};function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(e){var t=e.children,r=e.className,n=void 0===r?"":r;return(0,i.tZ)(o.Fragment,null,(0,i.tZ)(a.xB,{styles:function(e){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:e.colors.text,color:e.colors.background},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),(0,i.tZ)(c.Z,null),(0,i.tZ)(P,null,"Skip to content"),(0,i.tZ)(l.W2,null,(0,i.tZ)(y,null),(0,i.tZ)(l.xu,{id:"skip-nav",sx:D({},w),className:n},t),(0,i.tZ)(v,null)))}},90335:function(e,t,r){"use strict";var n=r(67294),o=r(35414),a=r(25444),i=r(97173);t.Z=function(e){var t=e.title,r=void 0===t?"":t,l=e.description,c=void 0===l?"":l,s=e.pathname,p=void 0===s?"":s,u=e.image,g=void 0===u?"":u,f=e.children,d=void 0===f?null:f,b=e.canonicalUrl,m=void 0===b?"":b,h=(0,i.Z)(),x=h.siteTitle,y=h.siteTitleAlt,v=h.siteUrl,k=h.siteDescription,w=h.siteLanguage,O=h.siteImage,Z=h.author,j={title:r||y,description:c||k,url:""+v+(p||""),image:""+v+(g||O)};return n.createElement(o.q,{title:r,defaultTitle:y,titleTemplate:"%s | "+x},n.createElement("html",{lang:w}),n.createElement("meta",{name:"description",content:j.description}),n.createElement("meta",{name:"image",content:j.image}),n.createElement("meta",{property:"og:title",content:j.title}),n.createElement("meta",{property:"og:url",content:j.url}),n.createElement("meta",{property:"og:description",content:j.description}),n.createElement("meta",{property:"og:image",content:j.image}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:image:alt",content:j.description}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:j.title}),n.createElement("meta",{name:"twitter:url",content:j.url}),n.createElement("meta",{name:"twitter:description",content:j.description}),n.createElement("meta",{name:"twitter:image",content:j.image}),n.createElement("meta",{name:"twitter:image:alt",content:j.description}),n.createElement("meta",{name:"twitter:creator",content:Z}),n.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),n.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?n.createElement("link",{rel:"canonical",href:m}):null,d)}},97173:function(e,t,r){"use strict";var n=r(25444);t.Z=function(){return(0,n.useStaticQuery)("318001574").site.siteMetadata}},9797:function(e,t){"use strict";t.Z=function(e){return e.replace(/\/\/+/g,"/")}},46725:function(e,t,r){var n=r(93395);e.exports={MDXRenderer:n}},93395:function(e,t,r){var n=r(69100),o=r(319),a=r(59713),i=r(37316),l=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(67294),u=r(64983).mdx,g=r(89480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,l),c=g(t),f=p.useMemo((function(){if(!r)return null;var e=s({React:p,mdx:u},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return p.createElement(f,s({},a))}}}]);
//# sourceMappingURL=component---src-lekoarts-gatsby-theme-minimal-blog-core-templates-page-query-tsx-14a7d0e1866a1e1df369.js.map