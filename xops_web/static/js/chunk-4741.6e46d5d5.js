(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4741"],{Yfch:function(e,t,r){"use strict";function o(e){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(e)}function i(e){return/^1[3|4|5|7|8][0-9]\d{8}$/.test(e)}function s(e){return/^[a-zA-Z0-9_]+$/g.test(e)}r.d(t,"c",function(){return o}),r.d(t,"b",function(){return i}),r.d(t,"a",function(){return s})},fIwS:function(e,t,r){"use strict";r.r(t);var o=r("wk8/"),i=r("cCY5"),s=r.n(i),a=(r("VCwm"),r("Yfch")),l=function(e,t,r){t?Object(a.b)(t)?r():r(new Error("请输入正确的11位手机号码")):r(new Error("请输入手机号码"))},n={name:"Form",components:{Treeselect:s.a},props:{organizations:{type:Array,required:!0},orgusers:{type:Array,required:!0},roles:{type:Array,required:!0},isAdd:{type:Boolean,required:!0},sup_this:{type:Object,default:null}},data:function(){return{dialog:!1,loading:!1,form:{username:"",name:"",mobile:"",department:null,superior:null,position:"",email:"",is_active:"false",roles:[]},roleIds:[],rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],email:[{message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],mobile:[{trigger:"blur",validator:l}],is_active:[{required:!0,message:"状态不能为空",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return!1;e.loading=!0,e.form.roles=[];var r=e;e.roleIds.forEach(function(e,t){r.form.roles.push(e)}),e.isAdd?e.doAdd():e.doEdit()})},doAdd:function(){var e=this;Object(o.a)(this.form).then(function(t){e.resetForm(),e.$message({showClose:!0,type:"success",message:"添加成功!默认密码123456!",duration:2500}),e.loading=!1,e.$parent.$parent.init()}).catch(function(t){e.loading=!1,console.log(t)})},doEdit:function(){var e=this;Object(o.c)(this.form.id,this.form).then(function(t){e.resetForm(),e.$message({showClose:!0,type:"success",message:"修改成功!",duration:2500}),e.loading=!1,e.sup_this.init()}).catch(function(t){e.loading=!1,console.log(t)})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.roleIds=[],this.form={username:"",name:"",mobile:"",department:null,superior:null,position:"",email:"",is_active:"false",roles:[]}}}},u=(r("zfZW"),r("KHd+")),c=Object(u.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{"append-to-body":!0,visible:e.dialog,title:e.isAdd?"新增用户":"编辑用户",width:"850px"},on:{"update:visible":function(t){e.dialog=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,size:"small","label-width":"80px"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{disabled:!1===e.isAdd},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"姓名",prop:"name"}},[r("el-input",{staticStyle:{width:"300px"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{staticStyle:{width:"300px"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{staticStyle:{width:"300px"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"部门"}},[r("treeselect",{staticStyle:{width:"300px"},attrs:{options:e.organizations,placeholder:"请选择部门"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"职位",prop:"position"}},[r("el-input",{staticStyle:{width:"300px"},model:{value:e.form.position,callback:function(t){e.$set(e.form,"position",t)},expression:"form.position"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"状态",prop:"is_active"}},[r("el-radio",{attrs:{label:"true"},model:{value:e.form.is_active,callback:function(t){e.$set(e.form,"is_active",t)},expression:"form.is_active"}},[e._v("激活")]),e._v(" "),r("el-radio",{attrs:{label:"false"},model:{value:e.form.is_active,callback:function(t){e.$set(e.form,"is_active",t)},expression:"form.is_active"}},[e._v("锁定")])],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"上级主管"}},[r("treeselect",{staticStyle:{width:"300px"},attrs:{options:e.orgusers,"disable-branch-nodes":!0,placeholder:"请选择上级主管"},model:{value:e.form.superior,callback:function(t){e.$set(e.form,"superior",t)},expression:"form.superior"}})],1)],1)],1),e._v(" "),r("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"角色"}},[r("treeselect",{staticStyle:{width:"360px"},attrs:{multiple:!0,options:e.roles,placeholder:"请选择角色"},model:{value:e.roleIds,callback:function(t){e.roleIds=t},expression:"roleIds"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"text"},on:{click:e.cancel}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.doSubmit}},[e._v("确认")])],1)],1)},[],!1,null,"51c3511e",null);c.options.__file="form.vue";t.default=c.exports},ptMx:function(e,t,r){},"wk8/":function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return a}),r.d(t,"f",function(){return l}),r.d(t,"e",function(){return n}),r.d(t,"d",function(){return u});var o=r("t3Un");function i(e){return Object(o.a)({url:"api/users/",method:"post",data:e})}function s(e){return Object(o.a)({url:"api/users/"+e+"/",method:"delete"})}function a(e,t){return Object(o.a)({url:"api/users/"+e+"/",method:"put",data:t})}function l(e){return Object(o.a)({url:"api/users/validPass/"+e,method:"get"})}function n(e){return Object(o.a)({url:"api/users/updatePass/"+e,method:"get"})}function u(e,t){return Object(o.a)({url:"api/users/updateEmail/"+e,method:"post",data:t})}},zfZW:function(e,t,r){"use strict";var o=r("ptMx");r.n(o).a}}]);