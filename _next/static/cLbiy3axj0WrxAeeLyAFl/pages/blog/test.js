(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3K3x":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("9Jkg"),r=n.n(o),i=n("q1tI"),a=n.n(i).a.createElement,s="https://iobnm1te67.execute-api.eu-central-1.amazonaws.com/default/mailchimp-subscribe";function l(){var e=Object(i.useState)(""),t=e[0],n=e[1],o=Object(i.useState)(!1),l=o[0],c=o[1];if(l)return a("div",{className:"h-20 mb-10 text-center"},"Done! Thank you.");return a("form",{onSubmit:function(e){e.preventDefault(),console.log("email",t),fetch(s,{method:"post",body:r()({email:t})}),c(!0)},className:"h-20 w-88 mx-auto mb-8 text-center"},a("span",{className:"block text-lg mb-2"},"Get latest posts and extra content"),a("div",{className:"h-8 flex"},a("input",{type:"email",value:t,placeholder:"Email",onChange:function(e){return n(e.target.value)},className:"w-3/4 px-2 border border-primary mr-2 outline-none"}),a("input",{type:"submit",value:"Subscribe",className:"w-1/4 bg-primary text-back border border-primary cursor-pointer placeholder-faded hover:text-primary hover:bg-back"})))}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var o,r=n("q1tI");var i=new(((o=n("SevZ"))&&o.__esModule?o:{default:o}).default),a=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var r=o.prototype;return r.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},r.componentWillUnmount=function(){i.remove(this.props)},r.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},o}(r.Component);t.default=a},"4NV/":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("q1tI"),r=n.n(o).a.createElement;function i(){return r("hr",{className:"mx-auto w-3/4 h-1px border-t-1 border-faded mt-4 mb-10"})}},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f}));var o=n("q1tI"),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):s({},t,{},e)),n},h=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(a,".").concat(d)]||h[d]||p[d]||i;return n?r.a.createElement(m,s({ref:t},c,{components:n})):r.a.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"===typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"===typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},"8oxB":function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"===typeof clearTimeout?clearTimeout:a}catch(e){o=a}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&p())}function p(){if(!u){var e=s(d);u=!0;for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run();h=-1,t=c.length}l=null,u=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||u||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"9Jkg":function(e,t,n){e.exports=n("oh+g")},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},AveK:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("q1tI"),r=n.n(o),i=n("gRv6"),a=n("4NV/"),s=n("fVN/"),l=n("3K3x"),c=r.a.createElement,u=function(e){return c("div",{className:"fade-in font-serif mx-auto",style:{maxWidth:"90%",width:"44rem"}},c("header",null,c(i.a,{href:"/"},c("h1",{className:"text-center block mt-12 mb-1 text-5xl"},"Kirill Rogovoy")),c("div",{className:"mx-auto text-lg text-center"},"Code \xb7 Design \xb7 Workout \xb7 Travel \xb7 Beer"),c("div",{className:"text-center"},c(i.a,{style:1,href:"/"},"About")," \xb7 ",c(i.a,{style:1,href:"https://twitter.com/krogovoy"},"Twitter")," \xb7 ",c(i.a,{style:1,href:"/blog"},"Blog"))),c(a.a,null),c(l.a,null),c("main",null,e.children),c(s.a,null))}},MX0m:function(e,t,n){e.exports=n("3niX")},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var o=i(n("9kyW")),r=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,o=void 0===n?null:n,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,l=void 0===s?"undefined"!==typeof window:s;this._sheet=o||new r.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),o&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),o=n.styleId,r=n.rules;if(o in this._instancesCounts)this._instancesCounts[o]+=1;else{var i=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[o]=i,this._instancesCounts[o]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var o=this._fromServer&&this._fromServer[n];o?(o.parentNode.removeChild(o),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),i=t+r;return e[i]||(e[i]="jsx-"+(0,o.default)(t+"-"+r)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,o){this._isBrowser||(o=o.replace(/\/style/gi,"\\/style"));var r=n+o;return t[r]||(t[r]=o.replace(e,n)),t[r]}},t.getIdAndRules=function(e){var t=this,n=e.children,o=e.dynamic,r=e.id;if(o){var i=this.computeId(r,o);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(r),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},XmLi:function(e,t,n){"use strict";var o=n("p0XB"),r=n.n(o);var i=n("d04V"),a=n.n(i),s=n("yLu3"),l=n.n(s);function c(e){return function(e){if(r()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return a()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u=n("q1tI"),h=n.n(u),d=n("MX0m"),p=n.n(d),m=n("8Kt/"),f=n.n(m),g=n("AveK"),y=n("cBT1"),b=n("4NV/"),v=n("3K3x"),w=n("gRv6"),j=h.a.createElement;function _(e){var t=e.article,n=e.children;return j(g.a,null,j(f.a,null,j("title",{className:"jsx-4219571853"},t.title+" \u2014 Kirill Rogovoy"),j("meta",{name:"og:title",content:t.title,className:"jsx-4219571853"}),j("meta",{name:"og:image",content:"/".concat(t.id,".jpg"),className:"jsx-4219571853"}),j("meta",{name:"description",content:t.description,className:"jsx-4219571853"}),j("meta",{name:"og:description",content:t.description,className:"jsx-4219571853"}),j("meta",{name:"keywords",content:t.tags.join(","),className:"jsx-4219571853"})),t.tweetId&&j(x,{tweetId:t.tweetId}),j(w.a,{style:1,href:"/blog"},"<-"," Back to the list"),j("div",{className:"jsx-4219571853 mb-12"},j("h1",{className:"jsx-4219571853 text-link2 text-5xl leading-tight"},t.title),j("div",{className:"jsx-4219571853 italic"},"Published ",t.date)),j("div",{className:"jsx-4219571853 markdown mb-10"},n),j(b.a,null),j("div",{className:"jsx-4219571853"},j("div",{className:"jsx-4219571853 text-center mb-2"},t.tweetId?j(h.a.Fragment,null,"Discuss on"," ",j(w.a,{style:2,href:"https://twitter.com/krogovoy/status/".concat(t.tweetId)},"Twitter")):j(h.a.Fragment,null,"Follow me on"," ",j(w.a,{style:2,href:"https://twitter.com/krogovoy"},"Twitter")," ","or check out my"," ",j(w.a,{style:2,href:"https://github.com/kirillrogovoy"},"Github"))),j(v.a,null)),j(O,{currentArticleId:t.id}),j(p.a,{id:"4219571853"},[".markdown{font-size:21px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;line-height:30px;text-align:start;}",".markdown img{width:100%;margin-top:15px;}",".markdown h2{font-size:34px;line-height:39px;margin:56px 0 0 0;}",".markdown h2+p{margin-top:13px;}",".markdown p{margin:29px 0 0 0;}",".markdown ul,.markdown ol{margin-top:5px;}",".markdown li{list-style-type:square;}"]))}function O(e){var t=R(3,e.currentArticleId);return 0===t.length?null:j("div",null,j("h3",{className:"text-xl"},"Other articles:"),j(y.a,{articles:t}))}function x(e){var t=e.tweetId,n=new URL("https://twitter.com/intent/retweet");return n.searchParams.append("tweet_id",t),j("a",{style:{position:"fixed",top:0,left:"80%",width:"50px"},target:"_blank",rel:"noreferrer noopener",href:n.toString()},j("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 455.731 455.731",xmlSpace:"preserve"}," ",j("g",null," ",j("rect",{x:0,y:0,style:{fill:"#333"},width:"455.731",height:"455.731"})," ",j("path",{style:{fill:"#FFFFFF"},d:"M60.377,337.822c30.33,19.236,66.308,30.368,104.875,30.368c108.349,0,196.18-87.841,196.18-196.18 c0-2.705-0.057-5.39-0.161-8.067c3.919-3.084,28.157-22.511,34.098-35c0,0-19.683,8.18-38.947,10.107 c-0.038,0-0.085,0.009-0.123,0.009c0,0,0.038-0.019,0.104-0.066c1.775-1.186,26.591-18.079,29.951-38.207 c0,0-13.922,7.431-33.415,13.932c-3.227,1.072-6.605,2.126-10.088,3.103c-12.565-13.41-30.425-21.78-50.25-21.78 c-38.027,0-68.841,30.805-68.841,68.803c0,5.362,0.617,10.581,1.784,15.592c-5.314-0.218-86.237-4.755-141.289-71.423 c0,0-32.902,44.917,19.607,91.105c0,0-15.962-0.636-29.733-8.864c0,0-5.058,54.416,54.407,68.329c0,0-11.701,4.432-30.368,1.272 c0,0,10.439,43.968,63.271,48.077c0,0-41.777,37.74-101.081,28.885L60.377,337.822z"})," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," ",j("g",null," ")," "))}var k=n("7ljp");n.d(t,"c",(function(){return T})),n.d(t,"a",(function(){return G})),n.d(t,"b",(function(){return R}));var S=h.a.createElement,I=[{id:"here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about",date:"01.02.2018",title:"Here are some amazing advantages of Go that you don\u2019t hear much about",description:"I discuss why you should give Go a chance and where to start.",tags:["golang"],origin:"https://freecodecamp.org/news/here-are-some-amazing-advantages-of-go-that-you-dont-hear-much-about-1af99de3b23a/"},{id:"test",date:"01.02.2018",title:"Here are some amazing advantages of go that you dont hear much about",description:"test description",tags:["test"],hidden:!0,tweetId:"1162459837910978561"}];function T(e,t){var n=I.find((function(t){return t.id===e})),o={a:function(e){return S(w.a,{href:e.href,style:2},e.children)}};return S(_,{article:n},S(k.a,{components:o},S(t,null)))}function G(){return I.filter((function(e){return!e.hidden}))}function R(e,t){return function(e){for(var t=c(e),n=t.length-1;n>0;n--){var o=Math.floor(Math.random()*(n+1)),r=[t[o],t[n]];t[n]=r[0],t[o]=r[1]}return t}(G().filter((function(e){return e.id!==t}))).slice(0,e)}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t.__esModule=!0,t.default=void 0;var o="undefined"!==typeof e&&e.env&&!0,r=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,l=void 0===s?o:s,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;a(r(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,i,s,l=e.prototype;return l.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},l.isOptimizeForSpeed=function(){return this._optimizeForSpeed},l.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},l.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},l.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},l.insertRule=function(e,t){if(a(r(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},l.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];a(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},l.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},l.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},l.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},l.makeStyleTag=function(e,t,n){t&&a(r(t),"makeStyleTag acceps only strings as second parameter");var o=document.createElement("style");this._nonce&&o.setAttribute("nonce",this._nonce),o.type="text/css",o.setAttribute("data-"+e,""),t&&o.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(o,n):i.appendChild(o),o},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),s&&n(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cBT1:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("q1tI"),r=n.n(o),i=n("gRv6"),a=r.a.createElement,s=function(e){var t=e.articles;return a("div",{className:"mx-auto"},a("ul",null,t.map((function(e){return a("li",{key:e.id,className:"text-xl mb-8 list-square"},e.origin?a(i.a,{style:2,href:e.origin,newTab:!0},"".concat(e.title,", ").concat(new URL(e.origin).hostname)):a(i.a,{style:2,href:"/blog/".concat(e.id)},e.title),a("span",{className:"text-sm"},a("span",null," \u2014 "),e.date),a("span",{className:"block text-sm"},e.description))}))))}},lt68:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/test",function(){return n("nQAT")}])},nQAT:function(e,t,n){"use strict";n.r(t);var o=n("XmLi"),r=n("kOwS"),i=n("4mXO"),a=n.n(i),s=n("pLtp"),l=n.n(s);function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=l()(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(a.a){var i=a()(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=n("q1tI"),h=n.n(u),d=n("7ljp"),p=(h.a.createElement,{}),m="wrapper";function f(e){var t=e.components,n=c(e,["components"]);return Object(d.b)(m,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(d.b)("h1",null,"In this article, I discuss why you should give Go a chance and where to start."),Object(d.b)("p",null,"Golang is a programming language you might have heard about a lot during the last couple years. Even though it was created back in 2009, it has started to gain popularity only in recent years."),Object(d.b)("p",null,"Golang popularity according to Google Trends\nThis article is not about the main selling points of Go that you usually see."),Object(d.b)("p",null,"Instead, I would like to present to you some rather small but still significant features that you only get to know after you\u2019ve decided to give Go a try."),Object(d.b)("p",null,"These are amazing features that are not laid out on the surface, but they can save you weeks or months of work. They can also make software development more enjoyable."),Object(d.b)("p",null,"Don\u2019t worry if Go is something new for you. This article does not require any prior experience with the language. I have included a few extra links at the bottom, in case you would like to learn a bit more."),Object(d.b)("p",null,"We will go through such topics as:"),Object(d.b)("p",null,"GoDoc\nStatic code analysis\nBuilt-in testing and profiling framework\nRace condition detection\nLearning curve\nReflection\nOpinionatedness\nCulture\nPlease, note that the list doesn\u2019t follow any particular order. It is also opinionated as hell."),Object(d.b)("p",null,"GoDoc\nDocumentation in code is taken very seriously in Go. So is simplicity."),Object(d.b)("p",null,"GoDoc is a static code analyzing tool that creates beautiful documentation pages straight out of your code. A remarkable thing about GoDoc is that it doesn\u2019t use any extra languages, like JavaDoc, PHPDoc, or JSDoc to annotate constructions in your code. Just English."),Object(d.b)("p",null,"It uses as much information as it can get from the code to outline, structure, and format the documentation. And it has all the bells and whistles, such as cross-references, code samples, and direct links to your version control system repository."),Object(d.b)("p",null,"All you can do is to add a good old // MyFunc transforms Foo into Bar kind of comment which would be reflected in the documentation, too. You can even add code examples which are actually runnable via the web interface or locally."),Object(d.b)("p",null,"GoDoc is the only documentation engine for Go that is used by the whole community. This means that every library or application written in Go has the same format of documentation. In the long run, it saves you tons of time while browsing those docs."),Object(d.b)("p",null,"Here, for example, is the GoDoc page for my recent pet project: pullkee \u2014 GoDoc."),Object(d.b)("p",null,"Static code analysis\nGo heavily relies on static code analysis. Examples include godoc for documentation, gofmt for code formatting, golint for code style linting, and many others."),Object(d.b)("p",null,"There are so many of them that there\u2019s even an everything-included-kind-of project called gometalinter to compose them all into a single utility."),Object(d.b)("p",null,"Those tools are commonly implemented as stand-alone command line applications and integrate easily with any coding environment."),Object(d.b)("p",null,"Static code analysis isn\u2019t actually something new to modern programming, but Go sort of brings it to the absolute. I can\u2019t overestimate how much time it saved me. Also, it gives you a feeling of safety, as though someone is covering your back."),Object(d.b)("p",null,"It\u2019s very easy to create your own analyzers, as Go has dedicated built-in packages for parsing and working with Go sources."),Object(d.b)("p",null,"You can learn more from this talk: GothamGo Kickoff Meetup: Go Static Analysis Tools by Alan Donovan."),Object(d.b)("p",null,"Built-in testing and profiling framework\nHave you ever tried to pick a testing framework for a Javascript project you are starting from scratch? If so, you might understand that struggle of going through such an analysis paralysis. You might have also realized that you were not using like 80% of the framework you have chosen."),Object(d.b)("p",null,"The issue repeats over again once you need to do some reliable profiling."),Object(d.b)("p",null,"Go comes with a built-in testing tool designed for simplicity and efficiency. It provides you the simplest API possible, and makes minimum assumptions. You can use it for different kinds of testing, profiling, and even to provide executable code examples."),Object(d.b)("p",null,"It produces CI-friendly output out-of-box, and the usage is usually as easy as running go test. Of course, it also supports advanced features like running tests in parallel, marking them skipped, and many more."),Object(d.b)("p",null,"Race condition detection\nYou might already know about Goroutines, which are used in Go to achieve concurrent code execution. If you don\u2019t, here\u2019s a really brief explanation."),Object(d.b)("p",null,"Concurrent programming in complex applications is never easy regardless of the specific technique, partly due to the possibility of race conditions."),Object(d.b)("p",null,"Simply put, race conditions happen when several concurrent operations finish in an unpredicted order. It might lead to a huge number of bugs, which are particularly hard to chase down. Ever spent a day debugging an integration test which only worked in about 80% of executions? It probably was a race condition."),Object(d.b)("p",null,"All that said, concurrent programming is taken very seriously in Go and, luckily, we have quite a powerful tool to hunt those race conditions down. It is fully integrated into Go\u2019s toolchain."),Object(d.b)("p",null,"You can read more about it and learn how to use it here: Introducing the Go Race Detector \u2014 The Go Blog."),Object(d.b)("p",null,"Learning curve\nYou can learn ALL Go\u2019s language features in one evening. I mean it. Of course, there are also the standard library, and the best practices in different, more specific areas. But two hours would totally be enough time to get you confidently writing a simple HTTP server, or a command-line app."),Object(d.b)("p",null,"The project has marvelous documentation, and most of the advanced topics have already been covered on their blog: The Go Programming Language Blog."),Object(d.b)("p",null,"Go is much easier to bring to your team than Java (and the family), Javascript, Ruby, Python, or even PHP. The environment is easy to setup, and the investment your team needs to make is much smaller before they can complete your first production code."),Object(d.b)("p",null,"Reflection\nCode reflection is essentially an ability to sneak under the hood and access different kinds of meta-information about your language constructs, such as variables or functions."),Object(d.b)("p",null,"Given that Go is a statically typed language, it\u2019s exposed to a number of various limitations when it comes to more loosely typed abstract programming. Especially compared to languages like Javascript or Python."),Object(d.b)("p",null,"Moreover, Go doesn\u2019t implement a concept called Generics which makes it even more challenging to work with multiple types in an abstract way. Nevertheless, many people think it\u2019s actually beneficial for the language because of the amount of complexity Generics bring along. And I totally agree."),Object(d.b)("p",null,"According to Go\u2019s philosophy (which is a separate topic itself), you should try hard to not over-engineer your solutions. And this also applies to dynamically-typed programming. Stick to static types as much as possible, and use interfaces when you know exactly what sort of types you\u2019re dealing with. Interfaces are very powerful and ubiquitous in Go."),Object(d.b)("p",null,"However, there are still cases in which you can\u2019t possibly know what sort of data you are facing. A great example is JSON. You convert all the kinds of data back and forth in your applications. Strings, buffers, all sorts of numbers, nested structs and more."),Object(d.b)("p",null,"In order to pull that off, you need a tool to examine all the data in runtime that acts differently depending on its type and structure. Reflection to rescue! Go has a first-class reflect package to enable your code to be as dynamic as it would be in a language like Javascript."),Object(d.b)("p",null,"An important caveat is to know what price you pay for using it \u2014 and only use it when there is no simpler way."),Object(d.b)("p",null,"You can read more about it here: The Laws of Reflection \u2014 The Go Blog."),Object(d.b)("p",null,"You can also read some real code from the JSON package sources here: src/encoding/json/encode.go \u2014 Source Code"),Object(d.b)("p",null,"Opinionatedness\nIs there such a word, by the way?"),Object(d.b)("p",null,"Coming from the Javascript world, one of the most daunting processes I faced was deciding which conventions and tools I needed to use. How should I style my code? What testing library should I use? How should I go about structure? What programming paradigms and approaches should I rely on?"),Object(d.b)("p",null,"Which sometimes basically got me stuck. I was doing this instead of writing the code and satisfying the users."),Object(d.b)("p",null,"To begin with, I should note that I totally get where those conventions should come from. It\u2019s always you and your team. Anyway, even a group of experienced Javascript developers can easily find themselves having most of the experience with entirely different tools and paradigms to achieve kind of the same results."),Object(d.b)("p",null,"This makes the analysis paralysis cloud explode over the whole team, and also makes it harder for the individuals to integrate with each other."),Object(d.b)("p",null,"Well, Go is different. You have only one style guide that everyone follows. You have only one testing framework which is built into the basic toolchain. You have a lot of strong opinions on how to structure and maintain your code. How to pick names. What structuring patterns to follow. How to do concurrency better."),Object(d.b)("p",null,"While this might seem too restrictive, it saves tons of time for you and your team. Being somewhat limited is actually a great thing when you are coding. It gives you a more straightforward way to go when architecting new code, and makes it easier to reason about the existing one."),Object(d.b)("p",null,"As a result, most of the Go projects look pretty alike code-wise."),Object(d.b)("p",null,"Culture\nPeople say that every time you learn a new spoken language, you also soak in some part of the culture of the people who speak that language. Thus, the more languages you learn, more personal changes you might experience."),Object(d.b)("p",null,"It\u2019s the same with programming languages. Regardless of how you are going to apply a new programming language in the future, it always gives you a new perspective on programming in general, or on some specific techniques."),Object(d.b)("p",null,"Be it functional programming, pattern matching, or prototypal inheritance. Once you\u2019ve learned it, you carry these approaches with you which broadens the problem-solving toolset that you have as a software developer. It also changes the way you see high-quality programming in general."),Object(d.b)("p",null,"And Go is a terrific investment here. The main pillar of Go\u2019s culture is keeping simple, down-to-earth code without creating many redundant abstractions and putting the maintainability at the top. It\u2019s also a part of the culture to spend the most time actually working on the codebase, instead of tinkering with the tools and the environment. Or choosing between different variations of those."),Object(d.b)("p",null,"Go is also all about \u201cthere should be only one way of doing a thing.\u201d"),Object(d.b)("p",null,"A little side note. It\u2019s also partially true that Go usually gets in your way when you need to build relatively complex abstractions. Well, I\u2019d say that\u2019s the tradeoff for its simplicity."),Object(d.b)("p",null,"If you really need to write a lot of abstract code with complex relationships, you\u2019d be better off using languages like Java or Python. However, even when it\u2019s not obvious, it\u2019s very rarely the case."),Object(d.b)("p",null,"Always use the best tool for the job!"),Object(d.b)("p",null,"Conclusion\nYou might have heard of Go before. Or maybe it\u2019s something that has been staying out of your radar for a while. Either way, chances are, Go can be a very decent choice for you or your team when starting a new project or improving the existing one."),Object(d.b)("p",null,"This is not a complete list of all the amazing things about Go. Just the undervalued ones."),Object(d.b)("p",null,"Please, give Go a try with A Tour of Go which is an incredible place to start."),Object(d.b)("p",null,"If you wish to learn more about Go\u2019s benefits, you can check out these links:"),Object(d.b)("p",null,"Why should you learn Go? \u2014 Keval Patel \u2014 Medium\nFarewell Node.js \u2014 TJ Holowaychuk \u2014 Medium\nShare your observations down in the comments!"),Object(d.b)("p",null,"Even if you are not specifically looking for a new language to use, it\u2019s worth it to spend an hour or two getting the feel of it. And maybe it can become quite useful for you in the future."),Object(d.b)("p",null,"Always be looking for the best tools for your craft!"),Object(d.b)("p",null,"If you like this article, please consider following me for more, and clicking on those funny green little hands right below this text for sharing. ???"),Object(d.b)("p",null,"Check out my Github and follow me on ",Object(d.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com"}),"Twitter"),"!"))}f.isMDXComponent=!0;t.default=function(){return Object(o.c)("test",f)}},"oh+g":function(e,t,n){var o=n("WEpk"),r=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}}},[["lt68",0,1]]]);