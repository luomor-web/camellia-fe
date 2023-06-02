(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-264f83bc","chunk-2d21e3e9"],{a192:function(t,e,a){},c8df:function(t,e,a){"use strict";a("a192")},d579:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-tooltip",{attrs:{placement:"topLeft"}},[e("template",{slot:"title"},[e("span",[t._v(t._s(t.value))])]),t._v("\n  "+t._s(t._f("ellipsis")(t.value,t.length))+"\n")],2)},n=[],r={name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}},o=r,s=a("e607"),l=Object(s["a"])(o,i,n,!1,null,"4de15389",null);e["default"]=l.exports},fb74:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:24}},[e("a-card",{style:t.cardStyle,attrs:{bordered:!1}},[e("div",{staticClass:"table-page-search-wrapper"},[e("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchQuery.apply(null,arguments)}}},[e("a-row",{attrs:{gutter:24}},[e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"客户",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-select",{attrs:{placeholder:"选择客户",dropdownMatchSelectWidth:!1,showSearch:"","allow-clear":"",optionFilterProp:"children"},model:{value:t.queryParam.organId,callback:function(e){t.$set(t.queryParam,"organId",e)},expression:"queryParam.organId"}},t._l(t.supList,(function(a,i){return e("a-select-option",{key:i,attrs:{value:a.id}},[t._v("\n                    "+t._s(a.supplier)+"\n                  ")])})),1)],1)],1),e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",{attrs:{label:"账单周期",labelCol:t.labelCol,wrapperCol:t.wrapperCol}},[e("a-range-picker",{staticStyle:{width:"100%"},attrs:{"default-value":t.defaultTimeStr,format:"YYYY-MM-DD",placeholder:["开始时间","结束时间"]},on:{change:t.onDateChange},model:{value:t.queryParam.createTimeRange,callback:function(e){t.$set(t.queryParam,"createTimeRange",e)},expression:"queryParam.createTimeRange"}})],1)],1),e("a-col",{attrs:{md:4,sm:24}},[e("span",{staticClass:"table-page-search-submitButtons"},[e("a-button",{attrs:{type:"primary"},on:{click:t.searchQuery}},[t._v("查询")]),e("a-button",{directives:[{name:"print",rawName:"v-print",value:"#reportPrint",expression:"'#reportPrint'"}],staticStyle:{"margin-left":"8px"},attrs:{icon:"printer"}},[t._v("打印")]),e("a-button",{staticStyle:{"margin-left":"8px"},attrs:{icon:"download"},on:{click:t.exportExcel}},[t._v("导出")])],1)]),e("a-col",{attrs:{md:6,sm:24}},[e("a-form-item",[t._v("\n                "+t._s(t.firstTotal)+" "+t._s(t.lastTotal)+"\n              ")])],1)],1)],1)],1),e("section",{ref:"print",attrs:{id:"reportPrint"}},[e("a-table",{ref:"table",attrs:{bordered:"",size:"middle",rowKey:"id",columns:t.columns,dataSource:t.dataSource,components:t.handleDrag(t.columns),pagination:!1,scroll:t.scroll,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"action",fn:function(a,i){return e("span",{},[e("a",{on:{click:function(e){return t.showDebtAccountList(i)}}},[t._v(t._s(i.id?"详情":""))])])}}])},[e("span",{attrs:{slot:"customTitle"},slot:"customTitle"},[t._v("\n            期末应收\n            "),e("a-tooltip",{attrs:{title:"期末应收=期初应收+本期欠款-本期收款"}},[e("a-icon",{attrs:{type:"question-circle"}})],1)],1)]),e("a-row",{staticStyle:{"margin-top":"8px","text-align":"right"},attrs:{gutter:24}},[e("a-col",{attrs:{md:24,sm:24}},[e("a-pagination",{attrs:{size:"small","show-size-changer":"",showQuickJumper:!0,current:t.ipagination.current,"page-size":t.ipagination.pageSize,"page-size-options":t.ipagination.pageSizeOptions,total:t.ipagination.total,"show-total":function(e,a){return"共 ".concat(e-Math.ceil(e/t.ipagination.pageSize)," 条")}},on:{change:t.paginationChange,showSizeChange:t.paginationShowSizeChange},scopedSlots:t._u([{key:"buildOptionText",fn:function(a){return[e("span",[t._v(t._s(a.value-1)+"条/页")])]}}])})],1)],1)],1),e("debt-account-list",{ref:"debtAccountList"})],1)],1)],1)},n=[],r=a("9c95"),o=a("b65a"),s=a("ca00"),l=a("0fea"),c=a("4ec3"),u=a("d579"),d=a("2f42"),p=a.n(d),m={name:"CustomerAccount",mixins:[o["a"]],components:{DebtAccountList:r["default"],JEllipsis:u["default"]},data:function(){return{labelCol:{span:5},wrapperCol:{span:18,offset:1},queryParam:{supplierType:"客户",organId:"",beginTime:Object(s["j"])()+"-01-01",endTime:p()().format("YYYY-MM-DD")},ipagination:{pageSize:11,pageSizeOptions:["11","21","31","101","201"]},dateFormat:"YYYY-MM-DD",currentDay:p()().format("YYYY-MM-DD"),defaultTimeStr:"",supList:[],firstTotal:"",lastTotal:"",tabKey:"1",columns:[{title:"#",dataIndex:"rowIndex",width:40,align:"center",customRender:function(t,e,a){return"合计"!==t?parseInt(a)+1:t}},{title:"欠款详情",dataIndex:"action",align:"center",width:80,scopedSlots:{customRender:"action"}},{title:"客户",dataIndex:"supplier",width:150,ellipsis:!0},{title:"联系人",dataIndex:"contacts",width:100,ellipsis:!0},{title:"手机号码",dataIndex:"telephone",width:100},{title:"联系电话",dataIndex:"phoneNum",width:100},{title:"电子邮箱",dataIndex:"email",width:100},{title:"期初应收",dataIndex:"preNeed",width:80},{title:"本期欠款",dataIndex:"debtMoney",width:80},{title:"本期收款",dataIndex:"backMoney",width:80},{dataIndex:"allNeed",width:80,slots:{title:"customTitle"}}],url:{list:"/depotHead/getStatementAccount"}}},created:function(){this.initSupplier(),this.defaultTimeStr=[p()(Object(s["j"])()+"-01-01",this.dateFormat),p()(this.currentDay,this.dateFormat)]},mounted:function(){this.scroll.x=1620},methods:{getQueryParams:function(){var t=Object.assign({},this.queryParam,this.isorter);return t.field=this.getQueryField(),t.currentPage=this.ipagination.current,t.pageSize=this.ipagination.pageSize-1,t},initSupplier:function(){var t=this;Object(c["V"])({}).then((function(e){e&&(t.supList=e)}))},onDateChange:function(t,e){this.queryParam.beginTime=e[0],this.queryParam.endTime=e[1]},loadData:function(t){var e=this;1===t&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(l["c"])(this.url.list,a).then((function(t){200===t.code&&(e.dataSource=t.data.rows,e.ipagination.total=t.data.total,e.tableAddTotalRow(e.columns,e.dataSource),e.firstTotal="期初应收："+t.data.firstMoney+"，",e.lastTotal="期末应收："+t.data.lastMoney),510===t.code&&e.$message.warning(t.data),e.loading=!1}))},searchQuery:function(){""===this.queryParam.beginTime||""===this.queryParam.endTime?this.$message.warning("请选择单据日期！"):this.loadData(1)},exportExcel:function(){for(var t=[["客户","联系人","手机号码","联系电话","电子邮箱","期初应收","本期欠款","本期收款","期末应收"]],e=0;e<this.dataSource.length;e++){var a=this.dataSource[e],i=[a.supplier,a.contacts,a.telephone,a.phoneNum,a.email,a.preNeed,a.debtMoney,a.backMoney,a.allNeed];t.push(i)}Object(s["l"])(Object(s["q"])(t),"客户对账")},showDebtAccountList:function(t){this.$refs.debtAccountList.show(t.id,"出库","销售","客户","",this.queryParam.beginTime,this.queryParam.endTime),this.$refs.debtAccountList.title="欠款详情",this.$refs.debtAccountList.disableSubmit=!1}}},h=m,g=(a("c8df"),a("e607")),f=Object(g["a"])(h,i,n,!1,null,"e1d30d50",null);e["default"]=f.exports}}]);