(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1edec004","chunk-26bacd32","chunk-26bacd32","chunk-26bacd32","chunk-2d21e3e9","chunk-2d0c5788","chunk-2d0d09f7"],{"031a":function(e,t,a){"use strict";a("dfdd")},"3edd":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{ref:"container"},[t("a-modal",{staticStyle:{top:"20%",height:"55%"},attrs:{title:e.title,width:500,visible:e.visible,"confirm-loading":e.confirmLoading,getContainer:function(){return e.$refs.container},maskStyle:{top:"93px",left:"154px"},wrapClassName:e.wrapClassNameInfo(),mask:e.isDesktop(),maskClosable:!1},on:{cancel:e.handleCancel}},[t("template",{slot:"footer"},[t("a-button",{key:"back",on:{click:e.handleCancel}},[e._v("取消")])],1),t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-row",{staticClass:"form-row",attrs:{gutter:24}},[t("a-col",{attrs:{md:24,sm:24}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"第一步："}},[t("a",{attrs:{target:"_blank",href:e.templateUrl}},[t("b",[e._v(e._s(e.templateName))])]),t("p",[e._v("提示：模板中的第一行请勿删除")])])],1)],1),t("a-row",{staticClass:"form-row",attrs:{gutter:24}},[t("a-col",{attrs:{md:24,sm:24}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"第二步："}},[t("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[t("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1)],1)],1)],1)],1)],2)],1)},l=[],o=a("b65a"),i=a("ac0d"),n={name:"ImportFileModal",mixins:[o["a"],i["b"]],data:function(){return{title:"",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:18}},confirmLoading:!1,disableMixinCreated:!0,templateUrl:"",templateName:"",url:{importExcelUrl:""}}},created:function(){},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"]).concat(this.url.importExcelUrl)}},methods:{initModal:function(e,t,a){this.url.importExcelUrl=e,this.templateUrl=t,this.templateName=a,this.visible=!0},close:function(){this.$emit("close"),this.visible=!1},handleCancel:function(){this.close()}}},s=n,c=a("e607"),d=Object(c["a"])(s,r,l,!1,null,"7cb4f334",null);t["default"]=d.exports},6986:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{ref:"container"},[t("a-modal",{staticStyle:{top:"20%",height:"45%"},attrs:{title:e.title,width:1e3,visible:e.visible,"confirm-loading":e.confirmLoading,getContainer:function(){return e.$refs.container},maskStyle:{top:"93px",left:"154px"},wrapClassName:e.wrapClassNameInfo(),mask:e.isDesktop(),maskClosable:!1},on:{ok:e.handleOk,cancel:e.handleCancel}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-row",{staticClass:"form-row",attrs:{gutter:24}},[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"颜色"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["color"],expression:"[ 'color' ]",modifiers:{trim:!0}}],attrs:{placeholder:"请输入颜色"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"基础重量"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["weight"],expression:"[ 'weight' ]",modifiers:{trim:!0}}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入基础重量(kg)"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"保质期"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator.trim",value:["expiryNum"],expression:"[ 'expiryNum' ]",modifiers:{trim:!0}}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入保质期(天)"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"类别"}},[t("a-tree-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["categoryId"],expression:"[ 'categoryId' ]"}],staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},"allow-clear":"",treeData:e.categoryTree,placeholder:"请选择类别"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"序列号"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["enableSerialNumber"],expression:"[ 'enableSerialNumber' ]"}],attrs:{placeholder:"有无序列号"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("有")]),t("a-select-option",{attrs:{value:"0"}},[e._v("无")])],1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"批号"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["enableBatchNumber"],expression:"[ 'enableBatchNumber' ]"}],attrs:{placeholder:"有无批号"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("有")]),t("a-select-option",{attrs:{value:"0"}},[e._v("无")])],1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark"],expression:"[ 'remark' ]"}],staticStyle:{"margin-top":"8px"},attrs:{rows:1,placeholder:"请输入备注"}})],1)],1)],1)],1)],1)],1)],1)},l=[],o=a("4ec3"),i=a("ac0d"),n={name:"BatchSetInfoModal",mixins:[i["b"]],data:function(){return{title:"批量编辑",visible:!1,categoryTree:[],materialIds:"",model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this)}},created:function(){},methods:{loadTreeData:function(){var e=this,t={id:""};Object(o["sb"])(t).then((function(t){if(t){e.categoryTree=[];for(var a=0;a<t.length;a++){var r=t[a];e.categoryTree.push(r)}}}))},edit:function(e){this.materialIds=e,this.form.resetFields(),this.model=Object.assign({},""),this.loadTreeData(),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var l=Object.assign(e.model,r);if("{}"===JSON.stringify(l))return t.$message.warning("抱歉，请输入要批量编辑的内容！"),void(t.confirmLoading=!1);if("1"===l.enableSerialNumber&&"1"===l.enableBatchNumber)return t.$message.warning("抱歉，序列号和批号只能选择一项！"),void(t.confirmLoading=!1);var i={ids:e.materialIds,material:JSON.stringify(l)};Object(o["n"])(i).then((function(e){200===e.code?t.$emit("ok"):t.$message.warning(e.data.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},s=n,c=a("e607"),d=Object(c["a"])(s,r,l,!1,null,"4a6f4fc1",null);t["default"]=d.exports},"72ec":function(e,t,a){},"79e9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-modal",{staticStyle:{top:"5%",height:"90%","overflow-y":"hidden"},attrs:{width:e.modalWidth,visible:e.visible,title:e.title,wrapClassName:e.wrapClassNameInfo(),cancelText:"关闭(ESC)"},on:{ok:e.handleSubmit,cancel:e.close}},[t("a-row",{staticStyle:{padding:"10px",margin:"-10px"},attrs:{gutter:10}},[t("a-col",{attrs:{md:24,sm:24}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}}},[t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{md:6,sm:8}},[t("a-form-item",{attrs:{label:"商品",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[t("a-input",{ref:"material",attrs:{placeholder:"条码、名称、规格、型号、颜色"},model:{value:e.queryParam.q,callback:function(t){e.$set(e.queryParam,"q",t)},expression:"queryParam.q"}})],1)],1),t("a-col",{attrs:{md:6,sm:8}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"类别"}},[t("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},"allow-clear":"",treeData:e.categoryTree,placeholder:"请选择类别"},model:{value:e.queryParam.categoryId,callback:function(t){e.$set(e.queryParam,"categoryId",t)},expression:"queryParam.categoryId"}})],1)],1),t("a-col",{attrs:{md:6,sm:8}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"仓库"}},[t("a-select",{attrs:{placeholder:"选择仓库",dropdownMatchSelectWidth:!1,showSearch:"",optionFilterProp:"children","allow-clear":""},on:{change:e.onDepotChange},model:{value:e.queryParam.depotId,callback:function(t){e.$set(e.queryParam,"depotId",t)},expression:"queryParam.depotId"}},e._l(e.depotList,(function(a,r){return t("a-select-option",{key:r,attrs:{value:a.id}},[e._v("\n                    "+e._s(a.depotName)+"\n                  ")])})),1)],1)],1),t("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[t("a-col",{attrs:{md:6,sm:24}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.loadMaterialData(1)}}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.searchReset(1)}}},[e._v("重置")]),t("a-tooltip",{attrs:{title:"没查询到，决定新增商品！"}},[t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.addMaterial}},[e._v("新增")])],1),t("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n                  "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n                  "),t("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)],1),e.toggleSearchStatus?[t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"序列号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{attrs:{placeholder:"有无序列号"},model:{value:e.queryParam.enableSerialNumber,callback:function(t){e.$set(e.queryParam,"enableSerialNumber",t)},expression:"queryParam.enableSerialNumber"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("有")]),t("a-select-option",{attrs:{value:"0"}},[e._v("无")])],1)],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"批号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{attrs:{placeholder:"有无批号"},model:{value:e.queryParam.enableBatchNumber,callback:function(t){e.$set(e.queryParam,"enableBatchNumber",t)},expression:"queryParam.enableBatchNumber"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("有")]),t("a-select-option",{attrs:{value:"0"}},[e._v("无")])],1)],1)],1)]:e._e()],2)],1),t("a-table",{ref:"table",attrs:{scroll:e.scrollTrigger,size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.getType},loading:e.loading,customRow:e.rowAction},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"customBarCode",fn:function(a,r){return[e._v("\n            "+e._s(r.mBarCode)+"\n            "),t("a-popover",{attrs:{placement:"right",trigger:"click"}},[t("template",{slot:"content"},[t("img",{attrs:{src:e.getImgUrl(r.imgName),width:"500px"}})]),r.imgName?t("a-icon",{staticStyle:{"font-size":"18px"},attrs:{theme:"twoTone",type:"file-image"}}):e._e()],2)]}},{key:"customName",fn:function(a,r){return[e._v("\n            "+e._s(r.name)+"\n            "),1==r.enableSerialNumber?t("a-tag",{attrs:{color:"orange"}},[e._v("序")]):e._e(),1==r.enableBatchNumber?t("a-tag",{attrs:{color:"orange"}},[e._v("批")]):e._e()]}}])})],1)])],1),t("material-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},l=[],o=a("0fea"),i=a("ca00"),n=a("4ec3"),s=a("b65a"),c=a("ac0d"),d=a("1f37"),m={name:"JSelectMaterialModal",mixins:[s["a"],c["b"]],components:{MaterialModal:function(){return Promise.all([a.e("chunk-d004d496"),a.e("chunk-3918dc43"),a.e("chunk-46b63b86")]).then(a.bind(null,"4319"))}},props:["rows","multi","barCode"],data:function(){return{modalWidth:1450,queryParam:{q:"",categoryId:"",depotId:"",enableSerialNumber:"",enableBatchNumber:""},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},categoryTree:[],columns:[{dataIndex:"mBarCode",title:"条码",scopedSlots:{customRender:"customBarCode"}},{dataIndex:"name",title:"名称",scopedSlots:{customRender:"customName"}},{dataIndex:"categoryName",title:"类别"},{dataIndex:"standard",title:"规格"},{dataIndex:"model",title:"型号"},{dataIndex:"color",title:"颜色"},{dataIndex:"unit",title:"单位"},{dataIndex:"sku",title:"多属性"},{dataIndex:"stock",title:"库存"},{dataIndex:"expand",title:"扩展信息"}],scrollTrigger:{},dataSource:[],selectedRowKeys:[],selectMaterialRows:[],selectMaterialIds:[],title:"选择商品",ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},departTree:[],depotList:[],visible:!1,form:this.$form.createForm(this),loading:!1,expandedKeys:[],disableMixinCreated:!0}},computed:{getType:function(){return 1==this.multi?"checkbox":"radio"}},watch:{barCode:{immediate:!0,handler:function(){this.initBarCode()}}},created:function(){this.resetScreenSize()},methods:{initBarCode:function(){this.barCode?this.$emit("initComp",this.barCode):this.$emit("initComp","")},loadMaterialData:function(e){var t=this;1===e&&(this.ipagination.current=1),this.loading=!0;var a=this.getQueryParams();Object(n["lb"])(a).then((function(e){e&&(t.dataSource=e.rows,t.ipagination.total=e.total,1===e.total&&(t.queryParam.q===t.dataSource[0].mBarCode||t.queryParam.q===t.dataSource[0].name||t.queryParam.q===t.dataSource[0].standard||t.queryParam.q===t.dataSource[0].model||t.queryParam.q===t.dataSource[0].color)?(t.title="选择商品【再次回车可以直接选中】",t.$nextTick((function(){return t.$refs.material.focus()}))):t.title="选择商品")})).finally((function(){t.loading=!1}))},loadTreeData:function(){var e=this,t={id:""};Object(n["sb"])(t).then((function(t){if(t){e.categoryTree=[];for(var a=0;a<t.length;a++){var r=t[a];e.categoryTree.push(r)}}}))},resetScreenSize:function(){var e=window.screen.width;this.modalWidth=e<1600?"1200px":"1450px";var t=document.body.clientWidth;this.scrollTrigger=t<500?{x:800}:{}},showModal:function(e){var t=this;this.visible=!0,this.title="选择商品",this.queryParam.q=e,this.$nextTick((function(){return t.$refs.material.focus()})),this.loadTreeData(),this.getDepotList(),this.initDepotSelect(),this.loadMaterialData(),this.form.resetFields()},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.mpList=Object(i["g"])(d["a"].ls.get("materialPropertyList")),e.page=this.ipagination.current,e.rows=this.ipagination.pageSize,Object(i["d"])(e)},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},searchReset:function(e){var t=this;0!==e&&(t.queryParam={},t.loadMaterialData(1)),t.selectedRowKeys=[],t.selectMaterialIds=[]},addMaterial:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增商品"},getImgUrl:function(e){return e&&e.split(",")?Object(o["d"])("systemConfig/static/"+e.split(",")[0]):""},close:function(){this.searchReset(0),this.visible=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"===a.order?"asc":"desc"),this.ipagination=e,this.loadMaterialData()},handleSubmit:function(){var e=this;this.getSelectMaterialRows(),e.$emit("ok",e.selectMaterialRows,e.selectMaterialIds),e.searchReset(0),e.close()},getSelectMaterialRows:function(e){var t=this.dataSource,a="";this.selectMaterialRows=[];for(var r=0,l=t.length;r<l;r++)this.selectedRowKeys.includes(t[r].id)&&(this.selectMaterialRows.push(t[r]),a=a+","+t[r].mBarCode);this.selectMaterialIds=a.substring(1)},getDepotList:function(){var e=this;Object(o["c"])("/depot/findDepotByCurrentUser").then((function(t){200===t.code&&(e.depotList=t.data)}))},initDepotSelect:function(){this.rows&&JSON.parse(this.rows).depotId&&(this.queryParam.depotId=JSON.parse(this.rows).depotId-0)},onDepotChange:function(e){this.queryParam.depotId=e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onSearch:function(){if(this.dataSource&&1===this.dataSource.length)if(this.queryParam.q===this.dataSource[0].mBarCode||this.queryParam.q===this.dataSource[0].name||this.queryParam.q===this.dataSource[0].standard||this.queryParam.q===this.dataSource[0].model||this.queryParam.q===this.dataSource[0].color){var e=[];e.push(this.dataSource[0].id),this.selectedRowKeys=e,this.handleSubmit()}else this.loadMaterialData(1);else this.loadMaterialData(1)},modalFormOk:function(){this.loadMaterialData()},rowAction:function(e,t){var a=this;return{on:{click:function(){var t=[];t.push(e.id),a.selectedRowKeys=t},dblclick:function(){var t=[];t.push(e.id),a.selectedRowKeys=t,a.handleSubmit()}}}}}},u=m,p=(a("cc49"),a("e607")),h=Object(p["a"])(u,r,l,!1,null,"499a0298",null);t["default"]=h.exports},cc49:function(e,t,a){"use strict";a("72ec")},d579:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-tooltip",{attrs:{placement:"topLeft"}},[t("template",{slot:"title"},[t("span",[e._v(e._s(e.value))])]),e._v("\n  "+e._s(e._f("ellipsis")(e.value,e.length))+"\n")],2)},l=[],o={name:"JEllipsis",props:{value:{type:String,required:!1},length:{type:Number,required:!1,default:25}}},i=o,n=a("e607"),s=Object(n["a"])(i,r,l,!1,null,"4de15389",null);t["default"]=s.exports},dfdd:function(e,t,a){},ff24:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{md:24}},[t("a-card",{style:e.cardStyle,attrs:{bordered:!1}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery.apply(null,arguments)}}},[t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"类别",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},"allow-clear":"",treeData:e.categoryTree,placeholder:"请选择类别"},model:{value:e.queryParam.categoryId,callback:function(t){e.$set(e.queryParam,"categoryId",t)},expression:"queryParam.categoryId"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"关键词",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{attrs:{placeholder:"请输入条码、名称、规格、型号查询"},model:{value:e.queryParam.materialParam,callback:function(t){e.$set(e.queryParam,"materialParam",t)},expression:"queryParam.materialParam"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"颜色",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{attrs:{placeholder:"请输入颜色查询"},model:{value:e.queryParam.color,callback:function(t){e.$set(e.queryParam,"color",t)},expression:"queryParam.color"}})],1)],1),t("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[t("a-col",{attrs:{md:6,sm:24}},[t("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")]),t("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n                  "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n                  "),t("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)],1),e.toggleSearchStatus?[t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"状态",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{attrs:{placeholder:"请选择状态"},model:{value:e.queryParam.enabled,callback:function(t){e.$set(e.queryParam,"enabled",t)},expression:"queryParam.enabled"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("启用")]),t("a-select-option",{attrs:{value:"0"}},[e._v("禁用")])],1)],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"序列号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{attrs:{placeholder:"有无序列号"},model:{value:e.queryParam.enableSerialNumber,callback:function(t){e.$set(e.queryParam,"enableSerialNumber",t)},expression:"queryParam.enableSerialNumber"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("有")]),t("a-select-option",{attrs:{value:"0"}},[e._v("无")])],1)],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"批号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{attrs:{placeholder:"有无批号"},model:{value:e.queryParam.enableBatchNumber,callback:function(t){e.$set(e.queryParam,"enableBatchNumber",t)},expression:"queryParam.enableBatchNumber"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("有")]),t("a-select-option",{attrs:{value:"0"}},[e._v("无")])],1)],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"仓位货架",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入仓位货架查询"},model:{value:e.queryParam.position,callback:function(t){e.$set(e.queryParam,"position",t)},expression:"queryParam.position"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"扩展信息",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入扩展信息查询"},model:{value:e.queryParam.materialOther,callback:function(t){e.$set(e.queryParam,"materialOther",t)},expression:"queryParam.materialOther"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"基础重量",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入基础重量查询"},model:{value:e.queryParam.weight,callback:function(t){e.$set(e.queryParam,"weight",t)},expression:"queryParam.weight"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"保质期",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input-number",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入保质期查询"},model:{value:e.queryParam.expiryNum,callback:function(t){e.$set(e.queryParam,"expiryNum",t)},expression:"queryParam.expiryNum"}})],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"备注",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-input",{attrs:{placeholder:"请输入备注查询"},model:{value:e.queryParam.remark,callback:function(t){e.$set(e.queryParam,"remark",t)},expression:"queryParam.remark"}})],1)],1)]:e._e()],2)],1)],1),t("div",{staticClass:"table-operator",staticStyle:{"margin-top":"5px"}},[e.btnEnableList.indexOf(1)>-1?t("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]):e._e(),e.btnEnableList.indexOf(1)>-1?t("a-button",{attrs:{type:"primary",icon:"import"},on:{click:function(t){return e.handleImportXls()}}},[e._v("导入")]):e._e(),t("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("商品信息")}}},[e._v("导出")]),t("a-dropdown",[t("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e.btnEnableList.indexOf(1)>-1?t("a-menu-item",{key:"1",on:{click:e.batchDel}},[t("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1):e._e(),e.btnEnableList.indexOf(1)>-1?t("a-menu-item",{key:"2",on:{click:function(t){return e.batchSetStatus(!0)}}},[t("a-icon",{attrs:{type:"check-square"}}),e._v("启用")],1):e._e(),e.btnEnableList.indexOf(1)>-1?t("a-menu-item",{key:"3",on:{click:function(t){return e.batchSetStatus(!1)}}},[t("a-icon",{attrs:{type:"close-square"}}),e._v("禁用")],1):e._e(),e.btnEnableList.indexOf(1)>-1?t("a-menu-item",{key:"4",on:{click:function(t){return e.batchEdit()}}},[t("a-icon",{attrs:{type:"edit"}}),e._v("批量编辑")],1):e._e(),e.btnEnableList.indexOf(1)>-1?t("a-menu-item",{key:"5",on:{click:function(t){return e.batchSetMaterialCurrentStock()}}},[t("a-icon",{attrs:{type:"stock"}}),e._v("修正库存")],1):e._e()],1),t("a-button",[e._v("\n            批量操作 "),t("a-icon",{attrs:{type:"down"}})],1)],1),t("a-popover",{attrs:{trigger:"click",placement:"right"}},[t("template",{slot:"content"},[t("a-checkbox-group",{attrs:{defaultValue:e.settingColumns},on:{change:e.onColChange},model:{value:e.settingColumns,callback:function(t){e.settingColumns=t},expression:"settingColumns"}},[t("a-row",{staticStyle:{width:"500px"}},[e._l(e.defColumns,(function(e,a){return[[t("a-col",{attrs:{span:8}},[t("a-checkbox",{attrs:{value:e.dataIndex}},[t("j-ellipsis",{attrs:{value:e.title,length:10}})],1)],1)]]}))],2)],1)],1),t("a-button",{attrs:{icon:"setting"}},[e._v("列设置")])],2)],1),t("div",[t("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,components:e.handleDrag(e.columns),pagination:e.ipagination,scroll:e.scroll,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,columnWidth:"40px"}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(a,r){return t("span",{},[t("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),e.btnEnableList.indexOf(1)>-1?t("a-divider",{attrs:{type:"vertical"}}):e._e(),e.btnEnableList.indexOf(1)>-1?t("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[t("a",[e._v("删除")])]):e._e()],1)}},{key:"customBarCode",fn:function(a,r){return[e._v("\n            "+e._s(r.mBarCode)+"\n            "),t("a-popover",{attrs:{placement:"right",trigger:"click"}},[t("template",{slot:"content"},[t("img",{attrs:{src:e.getImgUrl(r.imgName),width:"500px"}})]),r.imgName?t("a-icon",{staticStyle:{"font-size":"18px"},attrs:{theme:"twoTone",type:"file-image"}}):e._e()],2)]}},{key:"customName",fn:function(a,r){return[e._v("\n            "+e._s(r.name)+"\n            "),1==r.enableSerialNumber?t("a-tag",{attrs:{color:"orange"}},[e._v("序")]):e._e(),1==r.enableBatchNumber?t("a-tag",{attrs:{color:"orange"}},[e._v("批")]):e._e()]}},{key:"customRenderStock",fn:function(a,r){return[t("a-tooltip",{attrs:{title:r.bigUnitStock}},[e._v("\n              "+e._s(a)+"\n            ")])]}},{key:"customRenderEnabled",fn:function(a){return[a?t("a-tag",{attrs:{color:"green"}},[e._v("启用")]):e._e(),a?e._e():t("a-tag",{attrs:{color:"orange"}},[e._v("禁用")])]}}])})],1),t("material-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),t("import-file-modal",{ref:"modalImportForm",on:{ok:e.modalFormOk}}),t("batch-set-info-modal",{ref:"batchSetInfoModalForm",on:{ok:e.modalFormOk}})],1)],1)],1)},l=[],o=a("4319"),i=a("3edd"),n=a("6986"),s=a("4ec3"),c=a("0fea"),d=a("ca00"),m=a("b65a"),u=a("d579"),p=a("2dab"),h=a("1f37"),f={name:"MaterialList",mixins:[m["a"]],components:{MaterialModal:o["default"],ImportFileModal:i["default"],BatchSetInfoModal:n["default"],JEllipsis:u["default"],JDate:p["default"]},data:function(){return{categoryTree:[],mPropertyListShort:"",model:{},labelCol:{span:5},wrapperCol:{span:18,offset:1},queryParam:{categoryId:"",materialParam:"",color:"",materialOther:"",weight:"",expiryNum:"",enabled:"",enableSerialNumber:"",enableBatchNumber:"",position:"",remark:"",mpList:Object(d["g"])(h["a"].ls.get("materialPropertyList"))},ipagination:{pageSizeOptions:["10","20","30","50","100","200"]},columns:[],settingColumns:["mBarCode","name","standard","model","color","categoryName","materialOther","unit","stock","purchaseDecimal","commodityDecimal","wholesaleDecimal","lowDecimal","enabled","enableSerialNumber","enableBatchNumber","action"],defColumns:[{title:"操作",dataIndex:"action",align:"center",width:100,scopedSlots:{customRender:"action"}},{title:"条码",dataIndex:"mBarCode",width:160,scopedSlots:{customRender:"customBarCode"}},{title:"名称",dataIndex:"name",width:160,scopedSlots:{customRender:"customName"}},{title:"规格",dataIndex:"standard",width:120},{title:"型号",dataIndex:"model",width:120},{title:"颜色",dataIndex:"color",width:70,ellipsis:!0},{title:"类别",dataIndex:"categoryName",width:100,ellipsis:!0},{title:"扩展信息",dataIndex:"materialOther",width:100,ellipsis:!0},{title:"单位",dataIndex:"unit",width:100,ellipsis:!0,customRender:function(e,t,a){if(t){var r=e||t.unitName;return t.sku?r+"[SKU]":r}}},{title:"基础重量",dataIndex:"weight",width:80},{title:"保质期",dataIndex:"expiryNum",width:60},{title:"库存",dataIndex:"stock",width:80,scopedSlots:{customRender:"customRenderStock"}},{title:"采购价",dataIndex:"purchaseDecimal",width:80},{title:"零售价",dataIndex:"commodityDecimal",width:80},{title:"销售价",dataIndex:"wholesaleDecimal",width:80},{title:"最低售价",dataIndex:"lowDecimal",width:80},{title:"仓位货架",dataIndex:"position",width:80},{title:"备注",dataIndex:"remark",width:80},{title:"状态",dataIndex:"enabled",align:"center",width:60,scopedSlots:{customRender:"customRenderEnabled"}}],url:{list:"/material/list",delete:"/material/delete",deleteBatch:"/material/deleteBatch",importExcelUrl:"/material/importExcel",exportXlsUrl:"/material/exportExcel",batchSetStatusUrl:"/material/batchSetStatus",batchSetMaterialCurrentStockUrl:"/material/batchSetMaterialCurrentStock"}}},created:function(){this.model=Object.assign({},{}),this.initColumnsSetting(),this.loadTreeData()},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"]).concat(this.url.importExcelUrl)}},methods:{initColumnsSetting:function(){var e=this,t=h["a"].ls.get("materialColumns");t&&t.indexOf(",")>-1&&(this.settingColumns=t.split(",")),this.columns=this.defColumns.filter((function(t){return!!e.settingColumns.includes(t.dataIndex)}))},onColChange:function(e){this.columns=this.defColumns.filter((function(t){return!!e.includes(t.dataIndex)}));var t=e.join();h["a"].ls.set("materialColumns",t)},loadTreeData:function(){var e=this,t={id:""};Object(s["sb"])(t).then((function(t){if(t){e.categoryTree=[];for(var a=0;a<t.length;a++){var r=t[a];e.categoryTree.push(r)}}}))},batchSetMaterialCurrentStock:function(){if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认操作",content:"是否操作选中数据?",onOk:function(){a.loading=!0,Object(c["f"])(a.url.batchSetMaterialCurrentStockUrl,{ids:e}).then((function(e){200===e.code?(a.$message.info("修正库存成功！"),a.loadData(),a.onClearSelected()):a.$message.warning(e.data.message)})).finally((function(){a.loading=!1}))}})}},batchEdit:function(){if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";this.$refs.batchSetInfoModalForm.edit(e),this.$refs.batchSetInfoModalForm.title="批量编辑"}},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1,-1===this.btnEnableList.indexOf(1)&&(this.$refs.modalForm.isReadOnly=!0)},getImgUrl:function(e){return e&&e.split(",")?Object(c["d"])("systemConfig/static/"+e.split(",")[0]):""},handleImportXls:function(){var e=this.url.importExcelUrl,t="/doc/goods_template.xls",a="商品Excel模板[下载]";this.$refs.modalImportForm.initModal(e,t,a),this.$refs.modalImportForm.title="商品导入"},searchReset:function(){this.queryParam={mpList:Object(d["g"])(h["a"].ls.get("materialPropertyList"))},this.loadData(1)}}},b=f,g=(a("031a"),a("e607")),y=Object(g["a"])(b,r,l,!1,null,"17efcb6c",null);t["default"]=y.exports}}]);