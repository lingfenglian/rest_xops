(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-bb8d","chunk-19b1"],{"//ZG":function(t,e,n){},"14Xm":function(t,e,n){t.exports=n("cSMa")},"3ADX":function(t,e,n){"use strict";var r=n("14Xm"),i=n.n(r),o=n("4d7F"),a=n.n(o),s=n("D3Ub"),c=n.n(s),l=n("t3Un");function u(t,e){return Object(l.a)({url:t,method:"get",params:e})}e.a={data:function(){return{loading:!0,data:[],page:1,size:10,total:0,url:"",params:{},query:{},time:170}},methods:{init:function(){var t=this;return c()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeInit();case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return e.abrupt("return",new a.a(function(e,n){t.loading=!0,u(t.url,t.params).then(function(n){t.total=n.count,t.data=n.results,setTimeout(function(){t.loading=!1},t.time),e(n)}).catch(function(e){t.loading=!1,n(e)})}));case 5:case"end":return e.stop()}},e,t)}))()},beforeInit:function(){return!0},pageChange:function(t){this.page=t,this.init()},sizeChange:function(t){this.page=1,this.size=t,this.init()}}}},"41Be":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("Q2AE");function i(t){if(t&&t instanceof Array&&t.length>0){var e=t;return!!(r.a.getters&&r.a.getters.roles).some(function(t){return e.includes(t)})}return console.error("need roles! Like v-permission=\"['admin','editor']\""),!1}},"5W6J":function(t,e,n){"use strict";n.r(e);var r=n("4d7F"),i=n.n(r),o=n("41Be"),a=n("3ADX"),s=n("qpgI"),c=n("7Qib"),l={components:{eHeader:n("AgHX").default},mixins:[a.a],data:function(){return{delLoading:!1,sup_this:this,allSelect:!1}},created:function(){var t=this;this.$nextTick(function(){t.init()})},methods:{parseTime:c.b,checkPermission:o.a,beforeInit:function(){this.url="api/devices/";var t=this.query,e=t.value,n=t.status;return this.params={page:this.page,size:this.size,ordering:"id"},""!==n&&null!==n&&(this.params.status=n),e&&(this.params.search=e),!0},subDelete:function(t){var e=this;this.delLoading=!0,Object(s.a)(t).then(function(n){e.delLoading=!1,e.$refs[t].doClose(),e.init(),e.$message({showClose:!0,type:"success",message:"删除成功!",duration:2500})}).catch(function(n){e.delLoading=!1,e.$refs[t].doClose(),console.log(n)})},toggleSelection:function(t){var e=this;t&&(t.forEach(function(t){e.$refs.table.toggleRowSelection(t,!e.allSelect)}),this.allSelect=!this.allSelect)},handleSelectionChange:function(t){this.multipleSelection=t},doSelectionDel:function(){var t=this,e=[];this.multipleSelection.forEach(function(t,n){var r=Object(s.a)(t.id).catch(function(t){console.log(t)});e.push(r)}),i.a.all(e).then(function(e){t.init()})},toDetail:function(t){this.$router.push({path:"devices/detail",query:{id:t}})}}},u=(n("9jKN"),n("KHd+")),h=Object(u.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("eHeader",{attrs:{query:t.query}}),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticStyle:{width:"100%"},attrs:{data:t.data,size:"small",border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"序号",width:"60",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[t._v(t._s(e.$index+1))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"sys_hostname",label:"主机名",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"hostname",label:"IP/域名",width:"120"}}),t._v(" "),n("el-table-column",{attrs:{prop:"auth_type",label:"认证类型",width:"100"}}),t._v(" "),n("el-table-column",{attrs:{prop:"os_version",label:"系统版本"}}),t._v(" "),n("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return["online"==e.row.status?n("span",{staticStyle:{color:"#00CC00"}},[t._v("在线")]):n("span",{staticStyle:{color:"red"}},[t._v("下线")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.checkPermission(["admin","device_all","device_list"])?n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){t.toDetail(e.row.id)}}},[t._v("详情")]):t._e(),t._v(" "),t.checkPermission(["admin","device_all","device_delete"])?n("el-popover",{ref:e.row.id,attrs:{placement:"top",width:"180"}},[n("p",[t._v("确定删除本条数据吗？")]),t._v(" "),n("div",{staticStyle:{"text-align":"right",margin:"0"}},[n("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(n){t.$refs[e.row.id].doClose()}}},[t._v("取消")]),t._v(" "),n("el-button",{attrs:{loading:t.delLoading,type:"primary",size:"mini"},on:{click:function(n){t.subDelete(e.row.id)}}},[t._v("确定")])],1),t._v(" "),n("el-button",{attrs:{slot:"reference",type:"danger",size:"mini"},slot:"reference"},[t._v("删除")])],1):t._e()]}}])})],1),t._v(" "),n("el-pagination",{staticStyle:{"margin-top":"8px"},attrs:{total:t.total,layout:"total, prev, pager, next, sizes"},on:{"size-change":t.sizeChange,"current-change":t.pageChange}})],1)},[],!1,null,"6f308d64",null);h.options.__file="index.vue";e.default=h.exports},"9jKN":function(t,e,n){"use strict";var r=n("//ZG");n.n(r).a},AgHX:function(t,e,n){"use strict";n.r(e);var r=n("41Be"),i={props:{query:{type:Object,required:!0}},data:function(){return{delLoading:!1,inboundLoading:!1,scanLoading:!1,statusOptions:[{key:"online",display_name:"在线"},{key:"offline",display_name:"下线"}],settings:{net_address:"",auth_type:"",ssh_username:"",ssh_password:"",ssh_port:"",ssh_private_key:"",commands:""},status:""}},methods:{checkPermission:r.a,toQuery:function(){this.$parent.page=1,this.$parent.init()},to:function(){var t=this.$refs.form;t.form={net_address:String(this.settings.net_address),auth_type:this.settings.auth_type,ssh_username:this.settings.ssh_username,ssh_password:this.settings.ssh_password,ssh_port:this.settings.ssh_port,ssh_private_key:this.settings.ssh_private_key,commands:this.settings.commands},t.dialog=!0},getPtoggleSelect:function(){this.$parent.toggleSelection(this.$parent.data)},deleteSelect:function(){var t=this;if(this.$parent.multipleSelection){var e=this.$parent.multipleSelection.length;this.$confirm("此操作将删除"+e+"条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$parent.doSelectionDel(),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}else this.$message({type:"info",message:"请先选择数据"})},refresh:function(){this.$parent.init()},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"Succeed"===t?e[t]?"成功":"失败":e[t]})})}}},o=n("KHd+"),a=Object(o.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"输入主机名/IP/域名搜索"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.toQuery(e):null}},model:{value:t.query.value,callback:function(e){t.$set(t.query,"value",e)},expression:"query.value"}}),t._v(" "),n("el-select",{staticClass:"filter-item",staticStyle:{width:"90px"},attrs:{clearable:"",placeholder:"状态"},on:{change:t.toQuery},model:{value:t.query.status,callback:function(e){t.$set(t.query,"status",e)},expression:"query.status"}},t._l(t.statusOptions,function(t){return n("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary",icon:"el-icon-search"},on:{click:t.toQuery}},[t._v("搜索")]),t._v(" "),n("div",{staticStyle:{display:"inline-block",margin:"0px 2px"}},[n("el-button-group",[t.checkPermission(["admin","device_all","device_delete"])?n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:t.getPtoggleSelect}},[t._v("全选")]):t._e(),t._v(" "),t.checkPermission(["admin","device_all","device_delete"])?n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"danger"},on:{click:t.deleteSelect}},[t._v("删除")]):t._e(),t._v(" "),n("el-button",{staticClass:"filter-item",attrs:{size:"mini",type:"primary"},on:{click:t.refresh}},[t._v("刷新")])],1)],1),t._v(" "),n("div",{staticStyle:{display:"inline-block",margin:"0px 0px",float:"right"}},[t.checkPermission(["admin","device_all"])?n("el-button-group",[n("el-button",{staticClass:"filter-item",attrs:{loading:t.scanLoading,size:"mini",type:"warning",icon:"el-icon-plus"}},[t._v("全部更新")])],1):t._e()],1)],1)},[],!1,null,null,null);a.options.__file="header.vue";e.default=a.exports},D3Ub:function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n("4d7F"));e.default=function(t){return function(){var e=t.apply(this,arguments);return new r.default(function(t,n){return function i(o,a){try{var s=e[o](a),c=s.value}catch(t){return void n(t)}if(!s.done)return r.default.resolve(c).then(function(t){i("next",t)},function(t){i("throw",t)});t(c)}("next")})}}},cSMa:function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("u4eC"),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},qpgI:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var r=n("t3Un");function i(t){return t?Object(r.a)({url:"api/device/list/?os_type="+t,method:"get"}):Object(r.a)({url:"api/device/list/",method:"get"})}function o(t){return Object(r.a)({url:"api/devices/"+t+"/",method:"get"})}function a(t){return Object(r.a)({url:"api/devices/"+t+"/",method:"delete"})}function s(t,e){return Object(r.a)({url:"api/devices/"+t+"/",method:"put",data:e})}},u4eC:function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=b;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",m={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(P([])));y&&y!==r&&i.call(y,a)&&(v=y);var _=S.prototype=x.prototype=Object.create(v);k.prototype=_.constructor=S,S.constructor=k,S[c]=k.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},u.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[s]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,n,r){var i=new E(b(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),$(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;$(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}}}function b(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new C(r||[]);return o._invoke=function(t,e,n){var r=h;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return z()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=O(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=w(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function k(){}function S(){}function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,a){var s=w(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},a)}a(s.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=w(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:z}}function z(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())}}]);