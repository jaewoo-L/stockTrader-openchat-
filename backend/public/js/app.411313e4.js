(function(t){function e(e){for(var a,o,s=e[0],i=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r={app:0},c=[];function s(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-05b3ec1c":"4120b18b","chunk-1e53c818":"a264570b","chunk-3dc94aed":"6287b06f","chunk-76ec5ff2":"87853a97","chunk-7d54272a":"fa688ad8"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-05b3ec1c":1,"chunk-1e53c818":1,"chunk-3dc94aed":1,"chunk-76ec5ff2":1,"chunk-7d54272a":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-05b3ec1c":"58b9cff0","chunk-1e53c818":"0999d61a","chunk-3dc94aed":"683d279a","chunk-76ec5ff2":"c92e5c08","chunk-7d54272a":"c57311d3"}[t]+".css",r=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[t],d.parentNode.removeChild(d),n(c)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"header"}}),n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1)],1)},r=[],c={created:function(){this.$store.dispatch("initSocket")}},s=c,i=(n("034f"),n("2877")),u=Object(i["a"])(s,o,r,!1,null,null,null),l=u.exports,f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("nav",{staticClass:"navbar navbar-default"},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"navbar-header"},[t._m(0),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/home"}},[t._v("Stock Trader")])],1),n("div",{staticClass:"collapse navbar-collapse"},[n("ul",{staticClass:"nav navbar-nav"},[n("router-link",{attrs:{to:"/portfolio",activeClass:"active",tag:"li"}},[n("a",[t._v("Portfolio")])]),n("router-link",{attrs:{to:"/stocks",activeClass:"active",tag:"li"}},[n("a",[t._v("Stocks")])]),n("router-link",{attrs:{to:"/chat",activeClass:"active",tag:"li"}},[n("a",[t._v("OpenChat")])])],1),n("strong",{staticClass:"navbar-text navbar-right"},[t._v("Funds: "+t._s(t._f("currency")(t.funds)))]),n("ul",{staticClass:"nav navbar-nav navbar-right"},[n("li",[n("a",{attrs:{href:"#"},on:{click:t.endDay}},[t._v("End Day")])])])])])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1","aria-expanded":"false"}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})])}],h=(n("7514"),{data:function(){return{dropDownOpen:!1,username:""}},computed:{funds:function(){return this.$store.getters.funds}},methods:{endDay:function(){this.$store.dispatch("randomizeStocks"),this.$router.push("/home")}},mounted:function(){$((function(){var t=$(".navbar-header");t.find("button").click((function(){t.siblings().toggleClass("in")})),t.siblings().find("li").click((function(){t.siblings().removeClass("in")}))}))},created:function(){this.username=localStorage.getItem("username")}}),m=h,v=(n("8baf"),Object(i["a"])(m,d,p,!1,null,null,null)),g=v.exports,k=function(t){n.e("chunk-76ec5ff2").then(function(){t(n("8b9e"))}.bind(null,n)).catch(n.oe)},b=function(t){n.e("chunk-3dc94aed").then(function(){t(n("578a"))}.bind(null,n)).catch(n.oe)},S=function(t){n.e("chunk-7d54272a").then(function(){t(n("57da"))}.bind(null,n)).catch(n.oe)},y=function(t){n.e("chunk-05b3ec1c").then(function(){t(n("7572"))}.bind(null,n)).catch(n.oe)},_=function(t){n.e("chunk-1e53c818").then(function(){t(n("8f2b"))}.bind(null,n)).catch(n.oe)};a["a"].use(f["a"]);var C=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:b},{path:"/chat",name:"chat",components:{header:g,default:k}},{path:"/home",name:"home",components:{header:g,default:S}},{path:"/portfolio",name:"portfolio",components:{header:g,default:y}},{path:"/stocks",name:"stocks",components:{header:g,default:_}}]}),E=n("2f62"),O=n("bc3a"),T=n.n(O),w=[{id:1,name:"BMW",price:110},{id:2,name:"Apple",price:210},{id:3,name:"NAVER",price:170},{id:4,name:"Google",price:300}],P={stocks:[]},I={SET_STOCKS:function(t,e){T.a.get("/api/users/stocksLoad/"+localStorage.getItem("username")).then((function(e){t.stocks=e.data.stocks}))},RANDOM_STOCKS:function(t){T.a.get("/api/users/endDay/"+localStorage.getItem("username")).then((function(t){}))}},j={buyStock:function(t,e){var n=t.commit;n("BUY_STOCK",e)},initStocks:function(t){var e=t.commit;e("SET_STOCKS",w)},randomizeStocks:function(t){var e=t.commit;t.dispatch;e("RANDOM_STOCKS")}},A={stocks:function(t){return t.stocks}},N={state:P,mutations:I,actions:j,getters:A},L={socket:null,user:null,messages:[]},M={INIT_SOCKET:function(t){t.socket=io()},SEND_MESSAGE:function(t,e){t.socket.emit("message",e)},SET_USERNAME:function(t,e){return new Promise((function(n,a){t.socket.emit("join",e),localStorage.setItem("username",e),t.user=e,T.a.post("/api/users/login",{username:e}).then((function(t){console.log(t.data)})),n()}))}},x={initSocket:function(t){var e=t.commit;e("INIT_SOCKET")},sendMessage:function(t,e){var n=t.commit;n("SEND_MESSAGE",e)},setUsername:function(t,e){var n=t.commit;n("SET_USERNAME",e)},showMessage:function(t){var e=t.state;e.socket.on("message1",(function(t){return new Promise((function(n,a){e.messages.push(t),n()}))}))}},D={messages:function(t){return t.messages},getsocket:function(t){return t.socket},user:function(t){return t.user}},K={state:L,getters:D,mutations:M,actions:x},q=(n("7f7f"),{funds:1e4,stocks:[]}),B={BUY_STOCK:function(t,e){var n=e.stockId,a=e.stockPrice,o=e.quantity;T.a.post("/api/users/buy/"+localStorage.getItem("username"),{stockId:n,stockPrice:a,quantity:o}).then((function(e){t.funds=e.data}))},SELL_STOCK:function(t,e){var n=e.stockId,a=e.stockPrice,o=e.quantity;T.a.post("/api/users/sell/"+localStorage.getItem("username"),{stockId:n,stockPrice:a,quantity:o}).then((function(e){t.funds=e.data}))}},U={sellStock:function(t,e){var n=t.commit;n("SELL_STOCK",e)}},R={stockPortfolio:function(t,e){return T.a.get("/api/users/stocksLoad/"+localStorage.getItem("username")).then((function(e){t.stocks=e.data.portfolio})),t.stocks.map((function(t){var n=e.stocks.find((function(e){return e.id==t.id}));return{id:t.id,quantity:t.quantity,price:n.price,name:n.name}}))},funds:function(t){return T.a.get("/api/users/stocksLoad/"+localStorage.getItem("username")).then((function(e){t.funds=e.data.funds})),t.funds}},G={state:q,getters:R,mutations:B,actions:U};a["a"].use(E["a"]);var z=new E["a"].Store({actions:{},modules:{stocks:N,portfolio:G,chat:K}});a["a"].prototype.$http=T.a,a["a"].filter("currency",(function(t){return"$"+t.toLocaleString()})),a["a"].config.productionTip=!1;new a["a"]({});new a["a"]({router:C,store:z,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},"782e":function(t,e,n){},"8baf":function(t,e,n){"use strict";var a=n("782e"),o=n.n(a);o.a}});
//# sourceMappingURL=app.411313e4.js.map