(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fef9d5ca","chunk-2d0c976a"],{"58f7":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return""!==t.tips?e("tooltip",[e("template",{slot:"title"},[t._v(t._s(t.tips))]),e("avatar",{attrs:{size:t.avatarSize,src:t.src}})],2):e("avatar",{attrs:{size:t.avatarSize,src:t.src}})},a=[],i=r("5888"),s=r("2cc8"),o={name:"AvatarItem",components:{Avatar:i["a"],Tooltip:s["a"]},props:{tips:{type:String,default:"",required:!1},src:{type:String,default:""}},data:function(){return{size:this.$parent.size}},computed:{avatarSize:function(){return"mini"!==this.size&&this.size||20}},watch:{"$parent.size":function(t){this.size=t}}},u=o,c=r("e607"),l=Object(c["a"])(u,n,a,!1,null,null,null);e["default"]=l.exports},a40c:function(t,e,r){"use strict";r.r(e);var n=r("5888"),a=r("58f7");function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(t,e,r){return e=o(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){var e=u(t,"string");return"symbol"===i(e)?e:String(e)}function u(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var c,l,f={AvatarItem:a["default"],name:"AvatarList",components:{Avatar:n["a"],AvatarItem:a["default"]},props:{prefixCls:{type:String,default:"ant-pro-avatar-list"},size:{type:[String,Number],default:"default"},maxLength:{type:Number,default:0},excessItemsStyle:{type:Object,default:function(){return{color:"#f56a00",backgroundColor:"#fde3cf"}}}},data:function(){return{}},methods:{getItems:function(t){var e,r=this.$createElement,a=(e={},s(e,"".concat(this.prefixCls,"-item"),!0),s(e,"".concat(this.size),!0),e);this.maxLength>0&&(t=t.slice(0,this.maxLength),t.push(r(n["a"],{attrs:{size:this.size},style:this.excessItemsStyle},["+".concat(this.maxLength)])));var i=t.map((function(t){return r("li",{class:a},[t])}));return i}},render:function(){var t,e=this.$props,r=e.prefixCls,n=e.size;t={},s(t,"".concat(r),!0),s(t,"".concat(n),!0)}},p=f,m=r("e607"),v=Object(m["a"])(p,c,l,!1,null,null,null);e["default"]=v.exports}}]);