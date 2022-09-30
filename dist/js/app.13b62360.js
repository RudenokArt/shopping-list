(function(){"use strict";var t=[function(t,e,s){var i=s(963),n=s(252),o=s(577);const r={class:"container pt-5"},c={class:"row justify-content-between mt-1 border"},a={class:"col-1 p-0"},l={class:"col-1 p-0"},m={class:"col-1 p-0"},u={class:"col-1 p-0"},p={class:"row justify-content-around pt-2"};function d(t,e,s,i,d,f){const h=(0,n.up)("CompleteButton"),v=(0,n.up)("DeleteItemButton"),b=(0,n.up)("SortItemAsc"),I=(0,n.up)("SortItemDesc"),g=(0,n.up)("AddItemFrom"),w=(0,n.up)("Preloader");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",r,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.$store.state.itemsList,((t,e)=>((0,n.wg)(),(0,n.iD)("div",c,[(0,n._)("div",{class:"col-7 p-0",style:(0,o.j5)(f.VievItemComplete(t.complete))},(0,o.zw)(e)+"~"+(0,o.zw)(t.product),5),(0,n._)("div",a,[(0,n.Wm)(h,{index:e,complete:t.complete},null,8,["index","complete"])]),(0,n._)("div",l,[(0,n.Wm)(v,{index:e},null,8,["index"])]),(0,n._)("div",m,[(0,n.Wm)(b,{index:e},null,8,["index"])]),(0,n._)("div",u,[(0,n.Wm)(I,{index:e},null,8,["index"])])])))),256)),(0,n._)("div",p,[(0,n.Wm)(g)])]),(0,n.Wm)(w)],64)}const f=(0,n._)("div",{class:"preloader"},[(0,n._)("i",{class:"fa fa-cog fa-spin fa-3x fa-fw"})],-1),h=[f];function v(t,e){return(0,n.wg)(),(0,n.iD)("div",{class:"preloader-wrapper",style:(0,o.j5)(t.$store.state.preloaderVisible)},h,4)}var b=s(744);const I={},g=(0,b.Z)(I,[["render",v]]);var w=g;const y=(0,n._)("i",{class:"fa fa-check","aria-hidden":"true"},null,-1),L=[y];function _(t,e,s,i,r,c){return(0,n.wg)(),(0,n.iD)("button",{class:(0,o.C_)(c.VievButtonComplete(s.complete)),onClick:e[0]||(e[0]=t=>c.setItemComplete(s.index))},L,2)}var x={props:{complete:{type:String},index:{type:Number}},methods:{setItemComplete:function(t){this.$store.commit("setItemComplete",t)},VievButtonComplete:function(t){return"true"==t?"btn btn-sm btn-outline-secondary":"btn btn-sm btn-outline-success"}}};const S=(0,b.Z)(x,[["render",_]]);var D=S;const C=(0,n._)("i",{class:"fa fa-trash-o","aria-hidden":"true"},null,-1),A=[C];function O(t,e,s,i,o,r){return(0,n.wg)(),(0,n.iD)("button",{onClick:e[0]||(e[0]=t=>r.DeleteItem(s.index)),class:"btn btn-outline-danger btn-sm"},A)}var k={props:{index:{type:Number}},methods:{DeleteItem:function(t){this.$store.commit("DeleteItem",t)}}};const N=(0,b.Z)(k,[["render",O]]);var j=N;const V={class:"col-9 p-0"},$={class:"col-2 p-0"},Z=(0,n._)("i",{class:"fa fa-floppy-o","aria-hidden":"true"},null,-1),B=[Z];function W(t,e,s,o,r,c){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",V,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>r.itemNew=t)},null,512),[[i.nr,r.itemNew]])]),(0,n._)("div",$,[(0,n._)("button",{class:"btn btn-outline-primary",onClick:e[1]||(e[1]=(...t)=>c.AddItem&&c.AddItem(...t))},B)])],64)}var P={data(){return{itemNew:""}},methods:{AddItem:function(){var t={};t.product=this.itemNew,t.complete="false",console.log(t),this.$store.commit("AddItem",t),this.itemNew=""}}};const U=(0,b.Z)(P,[["render",W]]);var Y=U;const F=(0,n._)("i",{class:"fa fa-sort-asc","aria-hidden":"true"},null,-1),H=[F];function T(t,e,s,i,o,r){return(0,n.wg)(),(0,n.iD)("button",{class:"btn btn-sm btn-outline-info",onClick:e[0]||(e[0]=(...t)=>r.SortItemAsc&&r.SortItemAsc(...t))},H)}var z={props:{index:{type:Number}},methods:{SortItemAsc:function(){this.$store.commit("SortItemAsc",this.index)}}};const G=(0,b.Z)(z,[["render",T]]);var J=G;const E=(0,n._)("i",{class:"fa fa-sort-desc","aria-hidden":"true"},null,-1),K=[E];function M(t,e,s,i,o,r){return(0,n.wg)(),(0,n.iD)("button",{class:"btn btn-sm btn-outline-info",onClick:e[0]||(e[0]=(...t)=>r.SortItemDesc&&r.SortItemDesc(...t))},K)}var q={props:{index:{type:Number}},methods:{SortItemDesc:function(){this.$store.commit("SortItemDesc",this.index)}}};const Q=(0,b.Z)(q,[["render",M]]);var R=Q,X={components:{Preloader:w,CompleteButton:D,DeleteItemButton:j,AddItemFrom:Y,SortItemAsc:J,SortItemDesc:R},methods:{VievItemComplete:function(t){return"true"==t?"text-decoration: line-through; color: grey":"text-decoration: none; color: balck"}},mounted:function(){this.$store.commit("GetItemsList")}};const tt=(0,b.Z)(X,[["render",d],["__scopeId","data-v-16567e4a"]]);var et=tt,st=s(907),it=(0,st.MT)({state:{apiUrl:"http://e25532i4.beget.tech/shopping-list/api/?",itemsList:[],preloaderVisible:"display: flex"},mutations:{GetItemsList:async function(t){var e=await fetch(this.state.apiUrl+"get_shopping_list=Y").then((function(t){return t.text()})).then((function(t){return JSON.parse(t)}));this.state.itemsList=e,this.state.preloaderVisible="display: none"},setItemComplete(t,e){"true"==this.state.itemsList[e].complete?this.state.itemsList[e].complete="false":this.state.itemsList[e].complete="true",this.commit("SaveItemsList")},DeleteItem(t,e){this.state.itemsList.splice(e,1),this.commit("SaveItemsList")},AddItem(t,e){this.state.itemsList.push(e),this.commit("SaveItemsList")},SortItemAsc(t,e){if(!(e<1)){var s=this.state.itemsList[e],i=this.state.itemsList[e-1];this.state.itemsList[e]=i,this.state.itemsList[e-1]=s,this.commit("SaveItemsList")}},SortItemDesc(t,e){if(!(e>=this.state.itemsList.length-1)){var s=this.state.itemsList[e],i=this.state.itemsList[e+1];this.state.itemsList[e]=i,this.state.itemsList[e+1]=s,this.commit("SaveItemsList")}},SaveItemsList:async function(){for(var t=0;t<this.state.itemsList.length;t++)this.state.itemsList[t].sort=t;var e=JSON.stringify(this.state.itemsList);try{fetch(this.state.apiUrl+"save_shopping_list="+e)}catch(s){console.log(s)}}},getters:{},actions:{},modules:{}});(0,i.ri)(et).use(it).mount("#app")}],e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,i,n,o){if(!i){var r=1/0;for(m=0;m<t.length;m++){i=t[m][0],n=t[m][1],o=t[m][2];for(var c=!0,a=0;a<i.length;a++)(!1&o||r>=o)&&Object.keys(s.O).every((function(t){return s.O[t](i[a])}))?i.splice(a--,1):(c=!1,o<r&&(r=o));if(c){t.splice(m--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var m=t.length;m>0&&t[m-1][2]>o;m--)t[m]=t[m-1];t[m]=[i,n,o]}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,o,r=i[0],c=i[1],a=i[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(n in c)s.o(c,n)&&(s.m[n]=c[n]);if(a)var m=a(s)}for(e&&e(i);l<r.length;l++)o=r[l],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(m)},i=self["webpackChunkshopping_list"]=self["webpackChunkshopping_list"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(0)}));i=s.O(i)})();
//# sourceMappingURL=app.13b62360.js.map