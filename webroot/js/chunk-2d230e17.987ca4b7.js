(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230e17"],{edbd:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{ref:"container"},[t("a-modal",{staticStyle:{top:"20px",height:"95%"},attrs:{title:e.title,width:1300,visible:e.visible,getContainer:function(){return e.$refs.container},maskStyle:{top:"93px",left:"154px"},wrapClassName:e.wrapClassNameInfo(),mask:e.isDesktop(),maskClosable:!1,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"单据编号",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[t("a-input",{attrs:{placeholder:"请输入单据编号查询"},model:{value:e.queryParam.number,callback:function(t){e.$set(e.queryParam,"number",t)},expression:"queryParam.number"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"商品信息",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[t("a-input",{attrs:{placeholder:"请输入名称、规格、型号"},model:{value:e.queryParam.materialParam,callback:function(t){e.$set(e.queryParam,"materialParam",t)},expression:"queryParam.materialParam"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"单据日期",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-range-picker",{staticStyle:{width:"100%"},attrs:{format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:e.onDateChange,ok:e.onDateOk},model:{value:e.queryParam.createTimeRange,callback:function(t){e.$set(e.queryParam,"createTimeRange",t)},expression:"queryParam.createTimeRange"}})],1)],1),t("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[t("a-col",{attrs:{md:6,sm:24}},[t("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),t("a-table",{ref:"table",attrs:{bordered:"",size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.getType},customRow:e.rowAction},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"numberCustomRender",fn:function(a,i){return t("span",{},[t("a",{on:{click:function(t){return e.myHandleDetail(i)}}},[e._v(e._s(i.number))])])}}])}),t("bill-detail",{ref:"modalDetail"})],1)],1)},s=[],l=a("9be9"),n=a("b65a"),r=a("ac0d"),o=a("4ec3"),c=a("1f37"),u={name:"DebtBillList",mixins:[n["a"],r["b"]],components:{BillDetail:l["default"]},data:function(){return{title:"操作",visible:!1,disableMixinCreated:!0,selectedRowKeys:[],selectionRows:[],selectBillRows:[],selectBillIds:"",queryParam:{organId:"",materialParam:"",number:"",type:"",subType:"",roleType:c["a"].ls.get("roleType"),status:""},labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}},columns:[{title:"",dataIndex:"organName",width:120,ellipsis:!0},{title:"单据编号",dataIndex:"number",width:120,scopedSlots:{customRender:"numberCustomRender"}},{title:"商品信息",dataIndex:"materialsList",width:200,ellipsis:!0,customRender:function(e,t,a){if(e)return e.replace(",","，")}},{title:"单据日期",dataIndex:"operTimeStr",width:130},{title:"操作员",dataIndex:"userName",width:70,ellipsis:!0},{title:"本单欠款",dataIndex:"needDebt",width:70},{title:"已收欠款",dataIndex:"finishDebt",width:70},{title:"待收欠款",dataIndex:"debt",width:70}],url:{list:"/depotHead/debtList"}}},computed:{getType:function(){return"checkbox"}},created:function(){},methods:{show:function(e,t,a,i,s){this.queryParam.organId=e,this.queryParam.type=t,this.queryParam.subType=a,this.queryParam.status=s,this.columns[0].title=i,"入库"===t?(this.columns[6].title="已付欠款",this.columns[7].title="待付欠款"):"出库"===t&&(this.columns[6].title="已收欠款",this.columns[7].title="待收欠款"),this.model=Object.assign({},{}),this.visible=!0,this.ipagination.pageSize=100,this.ipagination.pageSizeOptions=["100","200","300"],this.loadData(1)},myHandleDetail:function(e){var t=this;Object(o["U"])({number:e.number}).then((function(e){if(e&&200===e.code){var a=e.data.depotHeadType;a=a.replace("其它",""),t.handleDetail(e.data,a)}}))},close:function(){this.$emit("close"),this.visible=!1},handleCancel:function(){this.close()},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},handleOk:function(){this.getSelectBillRows(),this.$emit("ok",this.selectBillRows),this.selectedRowKeys=[],this.selectBillRows=[],this.close()},onDateChange:function(e,t){this.queryParam.beginTime=t[0],this.queryParam.endTime=t[1]},onDateOk:function(e){},searchReset:function(){this.queryParam={type:this.queryParam.type,subType:this.queryParam.subType},this.loadData(1)},getSelectBillRows:function(){var e=this.dataSource,t="";this.selectBillRows=[];for(var a=0,i=e.length;a<i;a++)this.selectedRowKeys.includes(e[a].id)&&(this.selectBillRows.push(e[a]),t=t+","+e[a].id);this.selectBillIds=t.substring(1)},rowAction:function(e,t){var a=this;return{on:{click:function(){var t=[];t.push(e.id),a.selectedRowKeys=t},dblclick:function(){var t=[];t.push(e.id),a.selectedRowKeys=t,a.handleOk()}}}}}},d=u,m=a("e607"),p=Object(m["a"])(d,i,s,!1,null,"76231cf0",null);t["default"]=p.exports}}]);