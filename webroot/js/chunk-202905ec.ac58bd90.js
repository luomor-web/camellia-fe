(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-202905ec","chunk-65088f60","chunk-26bacd32","chunk-26bacd32","chunk-26bacd32"],{"3d9e":function(e,t,a){"use strict";a("790b")},"72ec":function(e,t,a){},"790b":function(e,t,a){},"79e9":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("a-modal",{staticStyle:{top:"5%",height:"90%","overflow-y":"hidden"},attrs:{width:e.modalWidth,visible:e.visible,title:e.title,wrapClassName:e.wrapClassNameInfo(),cancelText:"关闭(ESC)"},on:{ok:e.handleSubmit,cancel:e.close}},[t("a-row",{staticStyle:{padding:"10px",margin:"-10px"},attrs:{gutter:10}},[t("a-col",{attrs:{md:24,sm:24}},[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSearch.apply(null,arguments)}}},[t("a-row",{attrs:{gutter:24}},[t("a-col",{attrs:{md:6,sm:8}},[t("a-form-item",{attrs:{label:"商品",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[t("a-input",{ref:"material",attrs:{placeholder:"条码、名称、规格、型号、颜色"},model:{value:e.queryParam.q,callback:function(t){e.$set(e.queryParam,"q",t)},expression:"queryParam.q"}})],1)],1),t("a-col",{attrs:{md:6,sm:8}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"类别"}},[t("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},"allow-clear":"",treeData:e.categoryTree,placeholder:"请选择类别"},model:{value:e.queryParam.categoryId,callback:function(t){e.$set(e.queryParam,"categoryId",t)},expression:"queryParam.categoryId"}})],1)],1),t("a-col",{attrs:{md:6,sm:8}},[t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"仓库"}},[t("a-select",{attrs:{placeholder:"选择仓库",dropdownMatchSelectWidth:!1,showSearch:"",optionFilterProp:"children","allow-clear":""},on:{change:e.onDepotChange},model:{value:e.queryParam.depotId,callback:function(t){e.$set(e.queryParam,"depotId",t)},expression:"queryParam.depotId"}},e._l(e.depotList,(function(a,i){return t("a-select-option",{key:i,attrs:{value:a.id}},[e._v("\n                    "+e._s(a.depotName)+"\n                  ")])})),1)],1)],1),t("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[t("a-col",{attrs:{md:6,sm:24}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.loadMaterialData(1)}}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.searchReset(1)}}},[e._v("重置")]),t("a-tooltip",{attrs:{title:"没查询到，决定新增商品！"}},[t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.addMaterial}},[e._v("新增")])],1),t("a",{staticStyle:{"margin-left":"8px"},on:{click:e.handleToggleSearch}},[e._v("\n                  "+e._s(e.toggleSearchStatus?"收起":"展开")+"\n                  "),t("a-icon",{attrs:{type:e.toggleSearchStatus?"up":"down"}})],1)],1)],1),e.toggleSearchStatus?[t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"序列号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{attrs:{placeholder:"有无序列号"},model:{value:e.queryParam.enableSerialNumber,callback:function(t){e.$set(e.queryParam,"enableSerialNumber",t)},expression:"queryParam.enableSerialNumber"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("有")]),t("a-select-option",{attrs:{value:"0"}},[e._v("无")])],1)],1)],1),t("a-col",{attrs:{md:6,sm:24}},[t("a-form-item",{attrs:{label:"批号",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-select",{attrs:{placeholder:"有无批号"},model:{value:e.queryParam.enableBatchNumber,callback:function(t){e.$set(e.queryParam,"enableBatchNumber",t)},expression:"queryParam.enableBatchNumber"}},[t("a-select-option",{attrs:{value:"1"}},[e._v("有")]),t("a-select-option",{attrs:{value:"0"}},[e._v("无")])],1)],1)],1)]:e._e()],2)],1),t("a-table",{ref:"table",attrs:{scroll:e.scrollTrigger,size:"middle",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.getType},loading:e.loading,customRow:e.rowAction},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"customBarCode",fn:function(a,i){return[e._v("\n            "+e._s(i.mBarCode)+"\n            "),t("a-popover",{attrs:{placement:"right",trigger:"click"}},[t("template",{slot:"content"},[t("img",{attrs:{src:e.getImgUrl(i.imgName),width:"500px"}})]),i.imgName?t("a-icon",{staticStyle:{"font-size":"18px"},attrs:{theme:"twoTone",type:"file-image"}}):e._e()],2)]}},{key:"customName",fn:function(a,i){return[e._v("\n            "+e._s(i.name)+"\n            "),1==i.enableSerialNumber?t("a-tag",{attrs:{color:"orange"}},[e._v("序")]):e._e(),1==i.enableBatchNumber?t("a-tag",{attrs:{color:"orange"}},[e._v("批")]):e._e()]}}])})],1)])],1),t("material-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},r=[],s=a("0fea"),n=a("ca00"),o=a("4ec3"),l=a("b65a"),c=a("ac0d"),d=a("1f37"),u={name:"JSelectMaterialModal",mixins:[l["a"],c["b"]],components:{MaterialModal:function(){return Promise.all([a.e("chunk-d004d496"),a.e("chunk-3918dc43"),a.e("chunk-46b63b86")]).then(a.bind(null,"4319"))}},props:["rows","multi","barCode"],data:function(){return{modalWidth:1450,queryParam:{q:"",categoryId:"",depotId:"",enableSerialNumber:"",enableBatchNumber:""},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},categoryTree:[],columns:[{dataIndex:"mBarCode",title:"条码",scopedSlots:{customRender:"customBarCode"}},{dataIndex:"name",title:"名称",scopedSlots:{customRender:"customName"}},{dataIndex:"categoryName",title:"类别"},{dataIndex:"standard",title:"规格"},{dataIndex:"model",title:"型号"},{dataIndex:"color",title:"颜色"},{dataIndex:"unit",title:"单位"},{dataIndex:"sku",title:"多属性"},{dataIndex:"stock",title:"库存"},{dataIndex:"expand",title:"扩展信息"}],scrollTrigger:{},dataSource:[],selectedRowKeys:[],selectMaterialRows:[],selectMaterialIds:[],title:"选择商品",ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},departTree:[],depotList:[],visible:!1,form:this.$form.createForm(this),loading:!1,expandedKeys:[],disableMixinCreated:!0}},computed:{getType:function(){return 1==this.multi?"checkbox":"radio"}},watch:{barCode:{immediate:!0,handler:function(){this.initBarCode()}}},created:function(){this.resetScreenSize()},methods:{initBarCode:function(){this.barCode?this.$emit("initComp",this.barCode):this.$emit("initComp","")},loadMaterialData:function(e){var t=this;1===e&&(this.ipagination.current=1),this.loading=!0;var a=this.getQueryParams();Object(o["lb"])(a).then((function(e){e&&(t.dataSource=e.rows,t.ipagination.total=e.total,1===e.total&&(t.queryParam.q===t.dataSource[0].mBarCode||t.queryParam.q===t.dataSource[0].name||t.queryParam.q===t.dataSource[0].standard||t.queryParam.q===t.dataSource[0].model||t.queryParam.q===t.dataSource[0].color)?(t.title="选择商品【再次回车可以直接选中】",t.$nextTick((function(){return t.$refs.material.focus()}))):t.title="选择商品")})).finally((function(){t.loading=!1}))},loadTreeData:function(){var e=this,t={id:""};Object(o["sb"])(t).then((function(t){if(t){e.categoryTree=[];for(var a=0;a<t.length;a++){var i=t[a];e.categoryTree.push(i)}}}))},resetScreenSize:function(){var e=window.screen.width;this.modalWidth=e<1600?"1200px":"1450px";var t=document.body.clientWidth;this.scrollTrigger=t<500?{x:800}:{}},showModal:function(e){var t=this;this.visible=!0,this.title="选择商品",this.queryParam.q=e,this.$nextTick((function(){return t.$refs.material.focus()})),this.loadTreeData(),this.getDepotList(),this.initDepotSelect(),this.loadMaterialData(),this.form.resetFields()},getQueryParams:function(){var e=Object.assign({},this.queryParam,this.isorter);return e.mpList=Object(n["g"])(d["a"].ls.get("materialPropertyList")),e.page=this.ipagination.current,e.rows=this.ipagination.pageSize,Object(n["d"])(e)},getQueryField:function(){for(var e="id,",t=0;t<this.columns.length;t++)e+=","+this.columns[t].dataIndex;return e},searchReset:function(e){var t=this;0!==e&&(t.queryParam={},t.loadMaterialData(1)),t.selectedRowKeys=[],t.selectMaterialIds=[]},addMaterial:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增商品"},getImgUrl:function(e){return e&&e.split(",")?Object(s["d"])("systemConfig/static/"+e.split(",")[0]):""},close:function(){this.searchReset(0),this.visible=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"===a.order?"asc":"desc"),this.ipagination=e,this.loadMaterialData()},handleSubmit:function(){var e=this;this.getSelectMaterialRows(),e.$emit("ok",e.selectMaterialRows,e.selectMaterialIds),e.searchReset(0),e.close()},getSelectMaterialRows:function(e){var t=this.dataSource,a="";this.selectMaterialRows=[];for(var i=0,r=t.length;i<r;i++)this.selectedRowKeys.includes(t[i].id)&&(this.selectMaterialRows.push(t[i]),a=a+","+t[i].mBarCode);this.selectMaterialIds=a.substring(1)},getDepotList:function(){var e=this;Object(s["c"])("/depot/findDepotByCurrentUser").then((function(t){200===t.code&&(e.depotList=t.data)}))},initDepotSelect:function(){this.rows&&JSON.parse(this.rows).depotId&&(this.queryParam.depotId=JSON.parse(this.rows).depotId-0)},onDepotChange:function(e){this.queryParam.depotId=e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onSearch:function(){if(this.dataSource&&1===this.dataSource.length)if(this.queryParam.q===this.dataSource[0].mBarCode||this.queryParam.q===this.dataSource[0].name||this.queryParam.q===this.dataSource[0].standard||this.queryParam.q===this.dataSource[0].model||this.queryParam.q===this.dataSource[0].color){var e=[];e.push(this.dataSource[0].id),this.selectedRowKeys=e,this.handleSubmit()}else this.loadMaterialData(1);else this.loadMaterialData(1)},modalFormOk:function(){this.loadMaterialData()},rowAction:function(e,t){var a=this;return{on:{click:function(){var t=[];t.push(e.id),a.selectedRowKeys=t},dblclick:function(){var t=[];t.push(e.id),a.selectedRowKeys=t,a.handleSubmit()}}}}}},h=u,m=(a("cc49"),a("e607")),p=Object(m["a"])(h,i,r,!1,null,"499a0298",null);t["default"]=p.exports},cc49:function(e,t,a){"use strict";a("72ec")},cf74:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"relative"},attrs:{id:e.containerId}},[t("div",{staticClass:"movety-container",staticStyle:{padding:"0 8px",position:"absolute","z-index":"91",height:"32px",width:"104px","text-align":"center"},style:{top:e.top+"px",left:e.left+"px",display:e.moveDisplay}},[t("div",{class:e.showMoverTask?"uploadty-mover-mask":"movety-opt",staticStyle:{"margin-top":"12px"},attrs:{id:e.containerId+"-mover"}},[t("a",{staticStyle:{margin:"0 5px"},on:{click:e.moveLast}},[t("a-icon",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{type:"arrow-left"}})],1),t("a",{staticStyle:{margin:"0 5px"},on:{click:e.moveNext}},[t("a-icon",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{type:"arrow-right"}})],1)])]),t("a-upload",{class:{"uploadty-disabled":e.disabled},attrs:{name:"file",multiple:!0,action:e.uploadAction,headers:e.headers,data:{biz:e.bizPath},fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,returnUrl:e.returnUrl,listType:e.complistType},on:{change:e.handleChange,preview:e.handlePreview}},[[e.isImageComp?t("div",[t("a-icon",{attrs:{type:"plus"}}),t("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1):e.buttonVisible?t("a-button",[t("a-icon",{attrs:{type:"upload"}}),e._v(e._s(e.text)+"\n      ")],1):e._e()]],2),t("a-modal",{attrs:{visible:e.previewVisible,width:1e3,footer:null},on:{cancel:e.handleCancel}},[t("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},r=[],s=a("1f37"),n=a("9fb0"),o=a("0fea"),l=a("4ec3"),c="all",d="image",u=function(){return"-"+parseInt(1e4*Math.random()+1,10)},h=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},m={name:"JUpload",data:function(){return{uploadAction:window._CONFIG["domianURL"]+"/systemConfig/upload",headers:{},fileList:[],newFileList:[],uploadGoOn:!0,previewVisible:!1,previewImage:"",containerId:"",top:"",left:"",moveDisplay:"none",showMoverTask:!1,moverHold:!1,currentImg:"",sizeLimit:0}},props:{text:{type:String,required:!1,default:"点击上传"},fileType:{type:String,required:!1,default:c},bizPath:{type:String,required:!1,default:"temp"},value:{type:[String,Array],required:!1},disabled:{type:Boolean,required:!1,default:!1},triggerChange:{type:Boolean,required:!1,default:!1},returnUrl:{type:Boolean,required:!1,default:!0},number:{type:Number,required:!1,default:0},buttonVisible:{type:Boolean,required:!1,default:!0}},watch:{value:{immediate:!0,handler:function(){var e=this.value;e instanceof Array?this.returnUrl?this.initFileList(e.join(",")):this.initFileListArr(e):this.initFileList(e)}}},computed:{isImageComp:function(){return this.fileType===d},complistType:function(){return this.fileType===d?"picture-card":"text"}},created:function(){this.initFileSizeLimit();var e=s["a"].ls.get(n["a"]);this.headers={"X-Access-Token":e},this.containerId="container-ty-"+(new Date).getTime()},methods:{initFileSizeLimit:function(){var e=this;Object(l["T"])().then((function(t){200===t.code&&(e.sizeLimit=t.data)}))},initFileListArr:function(e){if(e&&0!=e.length){for(var t=[],a=0;a<e.length;a++){var i=Object(o["d"])(e[a].filePath);t.push({uid:u(),name:e[a].fileName,status:"done",url:i,response:{code:"history",data:e[a].filePath}})}this.fileList=t}else this.fileList=[]},initFileList:function(e){if(e&&0!=e.length){for(var t=[],a=e.split(","),i=0;i<a.length;i++){var r=Object(o["d"])("systemConfig/static/"+a[i]);t.push({uid:u(),name:h(a[i]),status:"done",url:r,response:{code:"history",data:a[i]}})}this.fileList=t}else this.fileList=[]},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");for(var a=[],i=0;i<e.length;i++)a.push(e[i].response.data);a.length>0&&(t=a.join(",")),this.$emit("change",t)},beforeUpload:function(e){this.uploadGoOn=!0;var t=e.type,a=e.size;if(this.fileType===d&&t.indexOf("image")<0)return this.$message.warning("请上传图片"),this.uploadGoOn=!1,!1;if(a>this.sizeLimit){var i=(this.sizeLimit/1024/1024).toFixed(2);return this.$message.warning("抱歉，文件大小不能超过"+i+"M"),this.uploadGoOn=!1,!1}return!0},handleChange:function(e){e.file.status||!1!==this.uploadGoOn||e.fileList.pop();var t=e.fileList;if("done"===e.file.status?(this.number>0&&(t=t.slice(-this.number)),200===e.file.response.code&&(t=t.map((function(e){if(e.response){var t=e.response.data;e.url=Object(o["d"])(t)}return e})))):"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file),this.fileList=t,"done"===e.file.status||"removed"===e.file.status)if(this.returnUrl)this.handlePathChange();else{this.newFileList=[];for(var a=0;a<t.length;a++){var i={fileName:t[a].name,filePath:t[a].response.data,fileSize:t[a].size};this.newFileList.push(i)}this.$emit("change",this.newFileList)}},handleDelete:function(e){},handlePreview:function(e){var t=e.name.substring(e.name.indexOf("."));".gif"===t||".jpg"===t||".jpeg"===t||".png"===t||".GIF"===t||".JPG"===t||".JPEG"===t||".PNG"===t?(this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0):location.href=e.url},handleCancel:function(){this.previewVisible=!1},moveLast:function(){var e=this.getIndexByUrl();if(0==e)this.$message.warn("未知的操作");else{for(var t=this.fileList[e].url,a=this.fileList[e-1].url,i=[],r=0;r<this.fileList.length;r++)r==e-1?i.push(t):r==e?i.push(a):i.push(this.fileList[r].url);this.currentImg=a,this.$emit("change",i.join(","))}},moveNext:function(){var e=this.getIndexByUrl();if(e==this.fileList.length-1)this.$message.warn("已到最后~");else{for(var t=this.fileList[e].url,a=this.fileList[e+1].url,i=[],r=0;r<this.fileList.length;r++)r==e+1?i.push(t):r==e?i.push(a):i.push(this.fileList[r].url);this.currentImg=a,this.$emit("change",i.join(","))}},getIndexByUrl:function(){for(var e=0;e<this.fileList.length;e++)if(this.fileList[e].url===this.currentImg||encodeURI(this.fileList[e].url)===this.currentImg)return e;return-1}},mounted:function(){var e=this,t=document.getElementById(this.containerId+"-mover");t.addEventListener("mouseover",(function(){e.moverHold=!0,e.moveDisplay="block"})),t.addEventListener("mouseout",(function(){e.moverHold=!1,e.moveDisplay="none"}));var a=document.getElementById(this.containerId)?document.getElementById(this.containerId).getElementsByClassName("ant-upload-list-picture-card"):[];a&&a.length>0&&(a[0].addEventListener("mouseover",(function(t){t=t||window.event;var a=t.target||t.srcElement;if("ant-upload-list-item-info"==a.className){e.showMoverTask=!1;var i=a.parentElement;e.left=i.offsetLeft,e.top=i.offsetTop+i.offsetHeight-50,e.moveDisplay="block",e.currentImg=a.getElementsByTagName("img")[0].src}})),a[0].addEventListener("mouseout",(function(t){t=t||window.event;var a=t.target||t.srcElement;"ant-upload-list-item-info"==a.className&&(e.showMoverTask=!0,setTimeout((function(){!1===e.moverHold&&(e.moveDisplay="none")}),100)),"ant-upload-list-item ant-upload-list-item-done"!=a.className&&"ant-upload-list ant-upload-list-picture-card"!=a.className||(e.moveDisplay="none")})))},model:{prop:"value",event:"change"}},p=m,f=(a("3d9e"),a("e607")),g=Object(f["a"])(p,i,r,!1,null,null,null);t["default"]=g.exports}}]);