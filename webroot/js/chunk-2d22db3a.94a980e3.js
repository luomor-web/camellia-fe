(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22db3a"],{f92c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t._self._c;return e("a-switch",{attrs:{disabled:t.disabled},on:{change:t.handleChange},model:{value:t.checkStatus,callback:function(e){t.checkStatus=e},expression:"checkStatus"}})},i=[],s={name:"JSwitch",props:{value:{type:String,required:!1},disabled:{type:Boolean,required:!1,default:!1},options:{type:Array,required:!1,default:function(){return["Y","N"]}}},data:function(){return{checkStatus:!1}},watch:{value:{immediate:!0,handler:function(t){t?this.options[0]==t?this.checkStatus=!0:this.checkStatus=!1:(this.checkStatus=!1,this.$emit("change",this.options[1]))}}},methods:{handleChange:function(t){var e=!1===t?this.options[1]:this.options[0];this.$emit("change",e)}},model:{prop:"value",event:"change"}},c=s,u=n("e607"),h=Object(u["a"])(c,a,i,!1,null,null,null);e["default"]=h.exports}}]);