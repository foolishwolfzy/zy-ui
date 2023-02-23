!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["zy-ui"]=n(require("vue")):e["zy-ui"]=n(e.Vue)}(self,(e=>(()=>{"use strict";var n={744:(e,n)=>{n.Z=(e,n)=>{const o=e.__vccOpts||e;for(const[e,t]of n)o[e]=t;return o}},789:n=>{n.exports=e}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var l=o[e]={exports:{}};return n[e](l,l.exports,t),l.exports}t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{t.r(r),t.d(r,{default:()=>f});var e=t(789),n=["disabled"],o={key:0,class:"zy-icon-loading"},l={key:2};const i=(0,e.defineComponent)({name:"ZButton",props:{type:{type:String,default:"primary",validator:function(e){return["default","primary","success","warning","danger","info"].includes(e)}},size:{type:String},icon:{type:String,default:""},loading:Boolean,disabled:Boolean,round:Boolean},emits:["click"],setup:function(n,o){return console.log("setup-button---=="),{classs:(0,e.computed)((function(){return["zy-button","zy-button--"+n.type,n.size?"zy-button--"+n.size:"",{"is-disabled":n.disabled,"is-loading":n.loading,"is-round":n.round}]})),handleClick:function(e){console.log("click inner"),o.emit("click",e)}}}});var c=t(744);const a=(0,c.Z)(i,[["render",function(t,r,i,c,a,s){return(0,e.openBlock)(),(0,e.createElementBlock)("button",{class:(0,e.normalizeClass)(t.classs),disabled:t.disabled,onClick:r[0]||(r[0]=function(){return t.handleClick&&t.handleClick.apply(t,arguments)})},[t.loading?((0,e.openBlock)(),(0,e.createElementBlock)("i",o)):(0,e.createCommentVNode)("v-if",!0),t.icon&&!t.loading?((0,e.openBlock)(),(0,e.createElementBlock)("i",{key:1,class:(0,e.normalizeClass)(t.icon)},null,2)):(0,e.createCommentVNode)("v-if",!0),t.$slots.default?((0,e.openBlock)(),(0,e.createElementBlock)("span",l,[(0,e.renderSlot)(t.$slots,"default")])):(0,e.createCommentVNode)("v-if",!0)],10,n)}]]);a.install=function(e){e.component(a.name,a)};const s=a,u=(0,e.defineComponent)({name:"ZIcon",props:{name:{type:String,default:""}}}),d=(0,c.Z)(u,[["render",function(n,o,t,r,l,i){return(0,e.openBlock)(),(0,e.createElementBlock)("i",{class:(0,e.normalizeClass)("zy-ui-icon-".concat(n.name))},null,2)}]]);d.install=function(e){e.component(d.name,d)};var p=[s,d];const f={install:function(e){p.forEach((function(n){e.component(n.name,n)}))}}})(),r})()));