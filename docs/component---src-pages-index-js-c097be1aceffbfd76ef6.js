(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(178),s=a(184),l=a(202),o=a(203),c=a.n(o),d=function(){return r.a.createElement(i.b,{query:"2011440971",render:function(e){return r.a.createElement(c.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:l})},u=a(182);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(u.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(d,null)),r.a.createElement(i.a,{to:"/page-2/"},"Go to page 2"))}},178:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),i=a(58),s=a.n(i);a.d(t,"a",function(){return s.a});a(179);var l=r.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,s=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,s&&i(s),!s&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(o,{data:t,query:a,render:n||i,staticQueryData:e})})}},179:function(e,t,a){var n;e.exports=(n=a(181))&&n.default||n},181:function(e,t,a){"use strict";a.r(t);a(24);var n=a(0),r=a.n(n),i=a(84);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},182:function(e,t,a){"use strict";var n=a(183),r=a(0),i=a.n(r),s=a(180),l=a.n(s),o=a(178);function c(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title;return i.a.createElement(o.b,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}c.defaultProps={lang:"en",meta:[],keywords:[]},t.a=c;var d="1025518380"},183:function(e){e.exports={data:{site:{siteMetadata:{title:"Umami: a Gatsby-Drupal-GraphQL demo",description:"This demo uses the default Gatsby starter and Drupal with the GraphQL 3.x module.",author:"@johnalbin"}}}}},184:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(180),s=a(178),l=function(e){e.language;return r.a.createElement("header",{className:"layout-header",role:"banner"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"region region-pre-header"},r.a.createElement("nav",{role:"navigation"},r.a.createElement(s.a,{to:"/en"},"English")," | ",r.a.createElement(s.a,{to:"/en"},"Deutsche"))),r.a.createElement("div",{className:"region region-header"},r.a.createElement("div",{id:"block-umami-branding",className:"block block-system block-system-branding-block"},r.a.createElement(s.a,{to:"/en",title:"Home",rel:"home",className:"site-logo"},r.a.createElement("img",{src:"/core/profiles/demo_umami/themes/umami/logo.svg",alt:"Home"})),r.a.createElement("div",{className:"site-name visually-hidden"},r.a.createElement(s.a,{to:"/en",title:"Home",rel:"home"},"Umami Food Magazine"))),r.a.createElement("div",{className:"menu-main-togglewrap"},r.a.createElement("button",{type:"button",name:"menu_toggle",className:"menu-main-toggle","data-drupal-selector":"menu-main-toggle","aria-label":"Toggle the menu"})),r.a.createElement("nav",{role:"navigation","aria-labelledby":"block-umami-main-menu-menu",id:"block-umami-main-menu",className:"contextual-region block block-menu navigation menu-main__wrapper"},r.a.createElement("h2",{className:"block__title visually-hidden",id:"block-umami-main-menu-menu"},"Main navigation"),r.a.createElement("ul",{className:"menu-main","data-drupal-selector":"menu-main"},r.a.createElement("li",{className:"menu-main__item"},r.a.createElement(s.a,{to:"/en",className:"menu-main__link is-active","data-drupal-link-system-path":"<front>"},"Home")),r.a.createElement("li",{className:"menu-main__item"},r.a.createElement(s.a,{to:"/en/articles",className:"menu-main__link","data-drupal-link-system-path":"articles"},"Articles")),r.a.createElement("li",{className:"menu-main__item"},r.a.createElement(s.a,{to:"/en/recipes",className:"menu-main__link","data-drupal-link-system-path":"recipes"},"Recipes")))))))};a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(192),a(193),a(194),t.a=function(e){var t=e.children,a=e.title,n=e.language;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Helmet,null,r.a.createElement("title",null,a)),r.a.createElement(l,{language:n}),r.a.createElement("main",null,t),r.a.createElement("footer",null,r.a.createElement("p",null,"Umami Magazine & Umami Publications is a fictional magazine and publisher for illustrative purposes only."),r.a.createElement("p",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},202:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},203:function(e,t,a){"use strict";a(28),a(23),a(12),a(62),a(124),a(204);var n=a(15);t.__esModule=!0,t.default=void 0;var r,i=n(a(63)),s=n(a(64)),l=n(a(126)),o=n(a(127)),c=n(a(0)),d=n(a(59)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),c.default.createElement("source",{media:r,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})})}function N(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)}).join("")+"<img "+c+s+l+a+n+t+i+r+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=c.default.createElement(R,(0,o.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,n(a),i):i},R=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:n,src:r},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&b&&!t.critical&&!a.seenBefore;var n=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,N=e.loading,L=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,A=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,o.default)({opacity:k?1:0,transition:A?"opacity "+b+"ms":"none"},l),V="boolean"==typeof h?"lightgray":h,x={transitionDelay:b+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},A&&x,l,f),T={title:t,alt:this.state.isVisible?"":a,style:C,className:m};if(g){var q=g,M=q[0];return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),V&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},A&&x)}),M.base64&&c.default.createElement(z,{src:M.base64,spreadProps:T,imageVariants:q,generateSources:w}),M.tracedSVG&&c.default.createElement(z,{src:M.tracedSVG,spreadProps:T,imageVariants:q,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(q),c.default.createElement(R,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:N,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:N},M,{imageVariants:q}))}}))}if(p){var W=p,j=W[0],H=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete H.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},V&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:V,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},A&&x)}),j.base64&&c.default.createElement(z,{src:j.base64,spreadProps:T,imageVariants:W,generateSources:w}),j.tracedSVG&&c.default.createElement(z,{src:j.tracedSVG,spreadProps:T,imageVariants:W,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(W),c.default.createElement(R,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:N,draggable:L})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:N},j,{imageVariants:W}))}}))}return null},t}(c.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var A=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),O=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});k.propTypes={resolutions:A,sizes:O,fixed:d.default.oneOfType([A,d.default.arrayOf(A)]),fluid:d.default.oneOfType([O,d.default.arrayOf(O)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=k;t.default=V},204:function(e,t,a){"use strict";a(205)("fixed",function(e){return function(){return e(this,"tt","","")}})},205:function(e,t,a){var n=a(5),r=a(8),i=a(34),s=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-index-js-c097be1aceffbfd76ef6.js.map