(function(t){function e(e){for(var r,i,c=e[0],o=e[1],u=e[2],p=0,f=[];p<c.length;p++)i=c[p],s[i]&&f.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==s[o]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2e88":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("header",[n("div",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-content"},[n("div",{staticClass:"logo"},[t._v("Users CRM")]),n("ul",{staticClass:"navbar-list"},t._l(t.links,function(e){return n("li",{key:e.title,staticClass:"navbar-item"},[n("router-link",{staticClass:"navbar-link",attrs:{title:e.title,to:e.url}},[t._v(t._s(e.title))])],1)}),0)])])])]),n("router-view"),n("footer")],1)},a=[],i={data:function(){return{links:[{title:"Home",url:"/"},{title:"Users",url:"/users"}]}}},c=i,o=(n("5c0b"),n("2877")),u=Object(o["a"])(c,s,a,!1,null,null,null),l=u.exports,p=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("h1",[t._v("Home Page")]),n("p",[t._v(t._s(t.getMessage))])])])])},d=[],v={computed:{getMessage:function(){return this.$store.getters.getMessage}}},g=v,h=Object(o["a"])(g,f,d,!1,null,null,null),m=h.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("PAGE NOT FOUND!")]),n("p",[t._v("Go to "),n("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("main page")])],1)])])])},b=[],y=(n("d6ea"),{}),C=Object(o["a"])(y,_,b,!1,null,"1999e36a",null),S=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper-content wrapper-content--fixed"},[n("section",[n("div",{staticClass:"container"},[n("table",[n("thead",[n("tr",[n("th",{on:{click:function(e){return t.sort("name")}}},[t._v("Name ↓")]),n("th",{on:{click:function(e){return t.sort("age")}}},[t._v("Age ↓")]),n("th",{on:{click:function(e){return t.sort("gender")}}},[t._v("Gender ↓")])])]),n("tbody",t._l(t.usersSort,function(e){return n("tr",{key:e.id},[n("td",[n("img",{attrs:{src:e.img,alt:e.name}}),n("span",[t._v(t._s(e.name))])]),n("td",[t._v(t._s(e.age))]),n("td",[t._v(t._s(e.gender))])])}),0)]),n("p",[t._v("debug: sort: "+t._s(t.currentSort)+", dir: "+t._s(t.currentSortDir))]),n("p",[t._v("page: "+t._s(t.page.current)+", length: "+t._s(t.page.length))])])]),n("section",[n("div",{staticClass:"container"},[n("div",{staticClass:"button-list"},[n("div",{staticClass:"btn btnPrimary",on:{click:t.prevPage}},[t._v("←")]),n("div",{staticClass:"btn btnPrimary",on:{click:t.nextPage}},[t._v("→")])])])])])},k=[],x=(n("55dd"),n("bc3a")),O=n.n(x),P={data:function(){return{users:[],currentSort:"name",currentSortDir:"asc",page:{current:1,length:4}}},created:function(){var t=this;O.a.get("https://api.myjson.com/bins/rzgya").then(function(e){t.users=e.data}).catch(function(t){console.log(t)})},computed:{usersSort:function(){var t=this;return this.users.sort(function(e,n){var r=1;return"desc"===t.currentSortDir&&(r=-1),e[t.currentSort]<n[t.currentSort]?-1*r:e[t.currentSort]>n[t.currentSort]?1*r:0}).filter(function(e,n){var r=(t.page.current-1)*t.page.length,s=t.page.current*t.page.length;if(n>=r&&n<s)return!0})}},methods:{sort:function(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t},prevPage:function(){this.page.current>1&&(this.page.current-=1)},nextPage:function(){this.page.current*this.page.length<this.users.length&&(this.page.current+=1)}}},j=P,M=(n("83b3"),Object(o["a"])(j,w,k,!1,null,"933e05f6",null)),D=M.exports;r["a"].use(p["a"]);var $=new p["a"]({routes:[{path:"/",name:"home",component:m},{path:"/users",name:"users",component:D},{path:"*",name:"notFound",component:S}]}),E=n("2f62");r["a"].use(E["a"]);var T=new E["a"].Store({state:{message:"hello vuex"},mutations:{setMessage:function(t,e){t.message=e}},actions:{setMessage:function(t,e){var n=t.commit;n("setMessage",e)}},getters:{getMessage:function(t){return t.message}}});n("c1c3");r["a"].config.productionTip=!1,new r["a"]({router:$,store:T,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(t,e,n){},"83b3":function(t,e,n){"use strict";var r=n("dc28"),s=n.n(r);s.a},c1c3:function(t,e,n){},d6ea:function(t,e,n){"use strict";var r=n("2e88"),s=n.n(r);s.a},dc28:function(t,e,n){}});