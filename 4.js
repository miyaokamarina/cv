(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{66:function(e,t,n){"use strict";n.r(t);var a=n(69),c=n(73);const o=[{key:"no-name startup",company:"no-name startup",location:"Belgorod",position:"“Full-stack developer”",since:new Date("2016-07-01T00:00:00.000Z"),till:new Date("2016-11-01T00:00:00.000Z"),responsibilities:a.createElement(a.Fragment,null,"Planning, prototyping and implementing any crazy ideas. ","Development of a service with NodeJS (Express, MongoDB; experimenting with Koa and RethinkDB), ","design of basic concepts of recommender system, ","planning and basic design of social AR application. ","Epic fail at all.")},{key:"ratengoods",company:a.createElement("a",{key:"ratengoods",href:"https://ratengoods.com/"},"Rate&Goods"),location:"Moscow",position:"Frontend developer",since:new Date("2017-06-01T00:00:00.000Z"),till:new Date("2017-06-01T00:00:00.000Z"),responsibilities:a.createElement(a.Fragment,null,"Website/webapp development, refactoring, fixing bugs, delivering new features. Etc.")},{key:"itsph",company:a.createElement("a",{key:"itsph",href:"https://itsph.ru/"},"IT Sphere"),position:"NodeJS developer",location:"Moscow",since:new Date("2017-07-01T00:00:00.000Z"),till:new Date("2017-10-01T00:00:00.000Z"),responsibilities:a.createElement(a.Fragment,null,"Microservices development (NodeJS), fuckery with poorly documented chinese hardware. ","Sometimes solving React tasks for next door dept's customers.")},{key:"quokka",company:a.createElement("a",{key:"quokka",href:"http://quokka.pub/"},"Quokka"),position:"JavaScript developer",location:"Moscow",since:new Date("2017-10-01T00:00:00.000Z"),till:new Date("2018-02-01T00:00:00.000Z"),responsibilities:a.createElement(a.Fragment,null,"Parser and compiler internals development (for our reactive framework's DSL; also nearly system language for our OS), ","some tasks on the framework core itself and on the our quasi-OS.")}];Object(c.e)(o)},70:function(e,t){},72:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return o});n(70);const a="en",c="en",o=Object.freeze({U:[0,49],S3:[50,199],GteS3:[50,1/0],GtS3:[200,1/0],LteS2:[50,299],S2:[200,299],GteS2:[200,1/0],GtS2:[300,1/0],LteS1:[50,399],S1:[300,399],GteS1:[300,1/0],GtS1:[400,1/0],LteS:[50,599],S:[400,599],GteS:[400,1/0],GtS:[600,1/0],LteM:[50,799],M:[600,799],GteM:[600,1/0],GtM:[800,1/0],LteL:[50,1199],L:[800,1199],GteL:[800,1/0],GtL:[1200,1/0],LteL1:[50,1899],L1:[1200,1899],GteL1:[1200,1/0],GtL1:[1900,1/0],LteL2:[50,2499],L2:[1900,2499],GteL2:[1900,1/0],L3:[2500,1/0]})},73:function(e,t,n){"use strict";var a=n(88),c=n(85),o=n(86),r=n(79),i=n(72);let s=null;const l=e=>s?(e&&s.addListener(t=>{e(t.matches)}),s.matches):(s=matchMedia("print"),l(e));let u=null,b=null;const d=e=>u&&b?(e&&u.addListener(t=>{e(t.matches)}),u.matches||"ontouchstart"in window):(u=matchMedia("(any-pointer: coarse)"),b=matchMedia("(-moz-touch-enabled)"),d(e));let p=!1,m=0;var O=n(0);const j=new Map,f=(e,t)=>{if(!j.has(e))return j.set(e,matchMedia((([e,t])=>t===1/0?`only screen and (min-width: ${e}px)`:`only screen and (min-width: ${e}px) and (max-width: ${t}px)`)(i.c[e]))),f(e,t);const n=j.get(e);return t&&n.addListener(n=>{t(e,n.matches)}),t||O.a.silly(n),n.matches};function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"c",function(){return g}),n.d(t,"d",function(){return S}),n.d(t,"a",function(){return v}),n.d(t,"e",function(){return L}),n.d(t,"b",function(){return z}),n.d(t,"i",function(){return A}),n.d(t,"g",function(){return E}),n.d(t,"h",function(){return M}),n.d(t,"f",function(){return C});const g=Object(o.createAction)("set `lang`"),h=Object(o.createAction)("set `isTouch`"),y=Object(o.createAction)("set `isKeyboard`"),k=Object(o.createAction)("set `isPrint`"),S=Object(o.createAction)("set `theme`"),v=Object(o.createAction)("set `buzzwords`"),L=Object(o.createAction)("set `xp`"),z=Object(o.createAction)("set `categories`"),G=Object(o.createAction)("set `jobsRaw`"),x=Object(o.createAction)("set `sizes`",(e,t)=>[e,t]),A=Object(o.createAction)("toggle `menu`"),E=Object(o.createAction)("toggle `category[x]`"),M=Object(o.createAction)("toggle `level[x]`"),D=Object(o.createAction)("toggle `az`"),T=Object(c.a)("lang"),P=Object(c.a)("isTouch"),R=Object(c.a)("isKeyboard"),Z=Object(c.a)("isPrint"),F=Object(c.a)("theme"),J=Object(c.a)("buzzwords"),q=Object(c.a)("xp"),$=Object(c.a)("categories"),K=Object(c.a)("jobsRaw"),B=Object(c.a)("sizes"),N=Object(c.a)("menu"),I=Object(c.a)("category"),Q=Object(c.a)("level"),U=Object(c.a)("az"),W=Object(o.createReducer)({[g]:(e,t)=>Object(a.a)(T,()=>t,e),[h]:(e,t)=>Object(a.a)(P,()=>t,e),[y]:(e,t)=>Object(a.a)(R,()=>t,e),[k]:(e,t)=>Object(a.a)(Z,()=>t,e),[S]:(e,t)=>Object(a.a)(F,()=>t,e),[v]:(e,t)=>Object(a.a)(J,()=>t,e),[L]:(e,t)=>Object(a.a)(q,()=>t,e),[z]:(e,t)=>Object(a.a)($,()=>t,e),[G]:(e,t)=>Object(a.a)(K,()=>t,e),[A]:e=>Object(a.a)(N,()=>!e.menu,e),[D]:e=>Object(a.a)(U,()=>!e.az,e),[E]:(e,t)=>Object(a.a)(I,e=>Object(a.a)(Object(c.a)(t),e=>!e,e),e),[M]:(e,t)=>Object(a.a)(Q,e=>Object(a.a)(Object(c.a)(t),e=>!e,e),e),[x]:(e,[t,n])=>{const o=Object(c.a)(t);return Object(a.a)(B,e=>Object(a.a)(o,()=>n,e),e)}},{lang:i.a,isTouch:d(h),isKeyboard:(e=>(window.addEventListener("keydown",()=>{null===document.querySelector([...["text","password","date","datetime-local","month","number","search","tel","time","url","week"].map(e=>`input[type=${e}]`),"textarea"].map(e=>`${e}:focus`).join(","))&&(p=!0,m=0,e&&e(!0))}),window.addEventListener("mousedown",()=>{m<2?m++:(p=!1,e&&e(!1))}),p))(y),isPrint:l(k),theme:"dark",buzzwordsRaw:null,buzzwords:[],categories:null,jobsRaw:null,sizes:Object.keys(i.c).reduce((e,t)=>(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){w(e,t,n[t])})}return e})({},e,{[t]:f(t,x)}),{}),menu:!1,category:{frontend:!0,backend:!0,general:!0,bestPractices:!0,personality:!0},level:{ok:!0,info:!0,warning:!0,error:!0,primary:!0,secondary:!0},xp:null,az:!1}),C=Object(r.b)(W);[g,h,y,k,S,v,L,z,G,x,A,E,M,D].forEach(e=>e.assignTo(C))}}]);
//# sourceMappingURL=4.js.map