(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},"33yf":function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var o=e[r];"."===o?e.splice(r,1):".."===o?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var a=i>=0?arguments[i]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,o="/"===a.charAt(0))}return(o?"/":"")+(t=n(r(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var i=t.isAbsolute(e),a="/"===o(e,-1);return(e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"))||i||(e="."),e&&a&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var o=r(e.split("/")),i=r(n.split("/")),a=Math.min(o.length,i.length),c=a,u=0;u<a;u++)if(o[u]!==i[u]){c=u;break}var s=[];for(u=c;u<o.length;u++)s.push("..");return(s=s.concat(i.slice(c))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,r=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){r=i;break}}else o=!1;return-1===r?n?"/":".":n&&1===r?"/":e.slice(0,r)},t.basename=function(e,t){var n=function(e){"string"!==typeof e&&(e+="");var t,n=0,r=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){n=t+1;break}}else-1===r&&(o=!1,r=t+1);return-1===r?"":e.slice(n,r)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,r=-1,o=!0,i=0,a=e.length-1;a>=0;--a){var c=e.charCodeAt(a);if(47!==c)-1===r&&(o=!1,r=a+1),46===c?-1===t?t=a:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){n=a+1;break}}return-1===t||-1===r||0===i||1===i&&t===r-1&&t===n+1?"":e.slice(t,r)};var o="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("8oxB"))},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var l=o.props[s],p=r[s]||new Set;p.has(l)?i=!1:(p.add(l),r[s]=p)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var h=i.default();function d(e){var t=e.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}d.rewind=h.rewind,t.default=d},SEF9:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),i=n("q1tI"),a=n.n(i),c=n("YFqc"),u=n.n(c),s=n("33yf"),l=n("qKvR");a.a.createElement;t.a=function(e){var t=e.href,n=e.as,i=void 0===n?t:n,a=e.linkPrefix,c=void 0===a?"/github_sql_pwa":a,f=Object(o.a)(e,["href","as","linkPrefix"]);return Object(l.b)(u.a,Object(r.a)({href:t,as:Object(s.join)(c,i.toString())},f))}},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("qXWd"),i=n("i2R6"),a=n("48fX"),c=n("tCBg"),u=n("T0f4"),s=n("mPvQ");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(c){a(s,c);var u=l(s);function s(e){var i;return r(this,s),i=u.call(this,e),p&&(t.add(o(i)),n(o(i))),i}return i(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),i=n("48fX"),a=n("tCBg"),c=n("T0f4");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var s=n("AroE"),l=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=s(n("nOHt")),m=n("elyg");function b(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,g=window.IntersectionObserver,k={};function w(){return f||(g?f=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){i(n,e);var t=u(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:(0,m.addBasePath)(b(e)),as:t?(0,m.addBasePath)(b(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,h.resolve)(u,a),c=c?(0,h.resolve)(u,c):a,e.preventDefault();var s=o.props.scroll;null==s&&(s=c.indexOf("#")<0),v.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),k[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var i=p.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),p.default.cloneElement(i,a)}}]),n}(p.Component);t.default=j},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),i=n("KckH"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},qGsq:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("8Kt/"),a=n.n(i),c=n("33yf"),u=n("qKvR");o.a.createElement;t.a=function(e){var t=e.title,n=void 0===t?"":t,r=e.description,o=void 0===r?n:r,i=e.charset,s=void 0===i?"utf-8":i,l=e.linkPrefix,f=void 0===l?"/github_sql_pwa":l,p=e.hrefCanonical,h=e.hrefManifest,d=void 0===h?"/manifest.json":h,v=e.themeColor,m=void 0===v?"#FFFFFF":v,b=e.favIconPath,y=void 0===b?"/icons/favicon.ico":b,g=e.keywords,k=void 0===g?n:g,w=e.refresh,j=e.appleIconPath,O=void 0===j?"/icons/icon192x192.png":j,C=e.appleIconSize,A=void 0===C?"192x192":C,S=e.isAmp,_=e.children;return Object(u.b)(a.a,null,Object(u.b)("title",{key:"title"},n),Object(u.b)("meta",{charSet:s,key:"charSet"}),Object(u.b)("meta",{name:"description",key:"description",content:o}),m&&Object(u.b)("meta",{name:"theme-color",key:"theme-color",content:m}),Object(u.b)("meta",{name:"keywords",key:"keywords",content:k}),Object(u.b)("meta",{httpEquiv:"X-UA-Compatible",key:"ua-compatible",content:"ie=edge"}),!S&&p&&Object(u.b)("link",{rel:"canonical",href:Object(c.join)(f,p)}),d&&Object(u.b)("link",{rel:"manifest",href:Object(c.join)(f,d)}),w&&Object(u.b)("meta",{httpEquiv:"refresh",key:"refresh",content:"".concat(w)}),y&&Object(u.b)("link",{rel:"shortcut icon",href:Object(c.join)(f,y)}),Object(u.b)("meta",{name:"apple-mobile-web-app-capable",key:"apple-mobile-web-app-capable",content:"yes"}),Object(u.b)("meta",{name:"apple-mobile-web-app-status-bar-style",key:"apple-mobile-web-app-status-bar-style",content:"blue"}),Object(u.b)("meta",{name:"apple-mobile-web-app-title",key:"apple-mobile-web-app-title",content:"With Manifest"}),O&&A&&Object(u.b)("link",{rel:"apple-touch-icon",sizes:A,href:Object(c.join)(f,O)}),O&&Object(u.b)("meta",{name:"msapplication-TitleImage",key:"msapplication-TitleImage",content:Object(c.join)(f,O)}),m&&Object(u.b)("meta",{name:"msapplication-TitleColor",key:"msapplication-TitleColor",content:m}),_)}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}}}]);