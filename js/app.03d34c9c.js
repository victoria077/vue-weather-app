(function(t){function e(e){for(var i,r,s=e[0],o=e[1],u=e[2],d=0,f=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],i=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(i=!1)}i&&(c.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},c=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-weather-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=o;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";a("85ec")},"1f5f":function(t,e,a){},"2d34":function(t,e,a){"use strict";a("8bf4")},"85ec":function(t,e,a){},"8bf4":function(t,e,a){},a457:function(t,e,a){"use strict";a("1f5f")},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],r=(a("034f"),a("2877")),s={},o=Object(r["a"])(s,n,c,!1,null,null,null),u=o.exports,l=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main",[a("div",{staticClass:"toggle",on:{click:function(e){return t.toSettings()}}},[a("i",{staticClass:"material-icons custom-icon"},[t._v("settings")])]),t._l(t.cards,(function(e){return a("div",{key:e.id,staticClass:"weather-wrap"},[a("div",{staticClass:"location-box"},[a("div",{staticClass:"location"},[t._v(t._s(e.name)+", "+t._s(e.sys.country))])]),a("div",{staticClass:"weather-box"},[a("div",{staticClass:"temp"},[t._v(t._s(Math.round(e.main.temp))+"°c")]),a("div",{staticClass:"weather"},[t._v(t._s(e.weather[0].main))])])])}))],2)])},f=[],p=(a("99af"),a("b0c0"),a("b680"),a("d4ec")),h=a("bee2"),g=a("262e"),m=a("2caf"),v=a("9ab4"),b=a("1b40"),y=a("bc3a"),O=a.n(y),C=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){return Object(p["a"])(this,a),e.apply(this,arguments)}return Object(h["a"])(a,[{key:"toSettings",value:function(){"/settings"!=this.$route.path&&this.$router.push("/settings")}},{key:"cards",get:function(){return this.$store.getters.cards}}]),a}(b["b"]);C=Object(v["a"])([Object(b["a"])({created:function(){var t=this;null===localStorage.getItem("cards")&&this.$getLocation({}).then((function(e){O.a.get("https://api.openweathermap.org/data/2.5/find?lat=".concat(e.lat.toFixed(1),"&lon=").concat(e.lng.toFixed(1),"&cnt=1&appid=07b1b55e77723024c22b03a635c3c661&units=metric")).then((function(e){var a={name:e.data.list[0].name,sys:{country:e.data.list[0].sys.country},main:{temp:e.data.list[0].main.temp},weather:[{main:e.data.list[0].weather[0].main}]};t.$store.dispatch("getWeather",a),t.$store.dispatch("addCity",e.data.list[0].name)}))}))}})],C);var _=C,w=_,j=(a("2d34"),Object(r["a"])(w,d,f,!1,null,"b8da0dbe",null)),S=j.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings"},[a("div",[a("div",[a("div",{staticClass:"toggle",on:{click:function(e){return t.toHome()}}},[a("i",{staticClass:"material-icons toggle-icon"},[t._v("clear")])]),t.cities.length?a("table",[a("tbody",[a("draggable",t._l(t.cities,(function(e){return a("tr",{key:e},[a("td",{staticClass:"col1"},[a("i",{staticClass:"material-icons drag custom-icon"},[t._v("drag_handle")])]),a("td",{staticClass:"left col2"},[t._v(t._s(t._f("capitalize")(e)))]),a("td",{staticClass:"col3",on:{click:function(a){return t.deleteCity(e)}}},[a("i",{staticClass:"material-icons custom-icon delete-icon"},[t._v("delete")])])])})),0)],1)]):t._e(),a("form",{on:{submit:function(e){return e.preventDefault(),t.getWeather()}}},[a("div",{staticClass:"search-box"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"search-bar",attrs:{type:"text",placeholder:"Add location..."},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})])])])])])},$=[],k=a("b76a"),J=a.n(k),P=function(t){Object(g["a"])(a,t);var e=Object(m["a"])(a);function a(){var t;return Object(p["a"])(this,a),t=e.apply(this,arguments),t.city="",t}return Object(h["a"])(a,[{key:"toHome",value:function(){this.$router.push("/")}},{key:"getWeather",value:function(){this.$store.dispatch("addCity",this.city),this.$store.dispatch("getWeather",this.city),this.city=""}},{key:"deleteCity",value:function(t){this.$store.dispatch("deleteCity",t)}},{key:"cities",get:function(){return this.$store.getters.cities}}]),a}(b["b"]);P=Object(v["a"])([Object(b["a"])({components:{draggable:J.a},filters:{capitalize:function(t){return t.toUpperCase()}}})],P);var W=P,I=W,N=(a("a457"),Object(r["a"])(I,x,$,!1,null,"53d3cd02",null)),M=N.exports;i["a"].use(l["a"]);var E=[{path:"/",name:"Home",component:S},{path:"/settings",name:"Settings",component:M}],H=new l["a"]({routes:E}),T=H,z=(a("caad"),a("c975"),a("45fc"),a("a434"),a("2532"),a("2f62"));i["a"].use(z["a"]);var F=new z["a"].Store({state:{cities:JSON.parse(localStorage.getItem("cities")||"[]"),cards:JSON.parse(localStorage.getItem("cards")||"[]")},mutations:{addCity:function(t,e){t.cities.includes(e)||(t.cities.push(e),localStorage.setItem("cities",JSON.stringify(t.cities)))},getWeather:function(t,e){t.cards.some((function(t){t.id,e.id}))||(t.cards.push(e),localStorage.setItem("cards",JSON.stringify(t.cards)))},deleteCity:function(t,e){var a=t.cities.indexOf(e);t.cities.splice(a,1),t.cards.splice(a,1),localStorage.setItem("cities",JSON.stringify(t.cities)),localStorage.setItem("cards",JSON.stringify(t.cards))}},actions:{addCity:function(t,e){var a=t.commit;a("addCity",e)},getWeather:function(t,e){var a=t.commit;"string"!=typeof e?a("getWeather",e):O.a.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=07b1b55e77723024c22b03a635c3c661&units=metric")).then((function(t){a("getWeather",t.data)})).catch((function(t){return console.log(t)}))},deleteCity:function(t,e){var a=t.commit;a("deleteCity",e)}},getters:{cities:function(t){return t.cities},cards:function(t){return t.cards}},modules:{}}),q=a("ebfd"),A=a.n(q);i["a"].config.productionTip=!1,i["a"].use(A.a),new i["a"]({router:T,store:F,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.03d34c9c.js.map