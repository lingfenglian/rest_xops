(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1987","chunk-6f95","chunk-4c0e"],{"3UNL":function(t,e,a){},"99or":function(t,e,a){"use strict";a.r(e);var i=a("QbLZ"),n=a.n(i),r=a("L2JU"),o=a("7Qib"),s=a("dUbn"),l=a("q4Ke"),c=a("X4fA"),u=a("Q2AE"),d={name:"Center",components:{updatePass:s.default,updateEmail:l.default},data:function(){return{headers:{Authorization:"Bearer "+Object(c.a)()}}},computed:n()({},Object(r.b)(["avatar","name","email","createTime","updateAvatarApi"])),methods:{formatEmail:function(t){return Object(o.c)(t)},handleSuccess:function(t,e,a){this.$notify({title:"头像修改成功",type:"success",duration:2500}),u.a.dispatch("GetInfo").then(function(){})},handleError:function(t,e,a){var i=JSON.parse(t.message);this.$notify({title:i.message,type:"error",duration:2500})}}},f=(a("fnfW"),a("KHd+")),m=Object(f.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticStyle:{width:"600px"},attrs:{id:"content-main"}},[a("el-card",{staticClass:"box-card user-info",attrs:{shadow:"never"}},[a("div",{staticClass:"avatar-content"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":t.handleSuccess,"on-error":t.handleError,headers:t.headers,action:t.updateAvatarApi}},[t.avatar?a("img",{staticClass:"avatar",attrs:{src:t.avatar,title:"点击上传头像"}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),a("div",{staticClass:"user-info-content"},[a("div",[t._v("登录账号："+t._s(t.name))]),t._v(" "),a("div",[t._v("注册时间："+t._s(t.createTime))]),t._v(" "),a("div",[t._v("账号状态："),a("span",{staticStyle:{color:"#909399"}},[t._v("正常")])])])]),t._v(" "),a("el-card",{staticClass:"box-card reset-pass",attrs:{shadow:"never"}},[a("h4",{staticClass:"account-label-icon"},[t._v("登录密码：")]),t._v(" "),a("updatePass"),t._v(" "),a("p",[t._v("安全性高的密码可使账号更安全，建议设置同时包含字母，数字，符号的密码。")])],1),t._v(" "),a("el-card",{staticClass:"box-card reset-email",attrs:{shadow:"never"}},[a("h4",{staticClass:"account-label-icon"},[t._v("邮箱验证：")]),t._v(" "),a("updateEmail",{attrs:{email:t.email}}),t._v(" "),a("p",[t._v("你的邮箱："+t._s(t.formatEmail(t.email))+" ")]),t._v(" "),a("h4",[t._v("绑定邮箱可用于")]),t._v(" "),a("ul",[a("li",[t._v("安全管理，密码重置与修改")]),t._v(" "),a("li",[t._v("账号使用，使用邮箱登录系统")])])],1)],1)])},[],!1,null,null,null);m.options.__file="center.vue";e.default=m.exports},Gedb:function(t,e,a){"use strict";function i(t){function e(t,e){return t<<e|t>>>32-e}function a(t,e){var a,i,n,r,o;return n=2147483648&t,r=2147483648&e,o=(1073741823&t)+(1073741823&e),(a=1073741824&t)&(i=1073741824&e)?2147483648^o^n^r:a|i?1073741824&o?3221225472^o^n^r:1073741824^o^n^r:o^n^r}function i(t,i,n,r,o,s,l){return a(e(t=a(t,a(a(function(t,e,a){return t&e|~t&a}(i,n,r),o),l)),s),i)}function n(t,i,n,r,o,s,l){return a(e(t=a(t,a(a(function(t,e,a){return t&a|e&~a}(i,n,r),o),l)),s),i)}function r(t,i,n,r,o,s,l){return a(e(t=a(t,a(a(function(t,e,a){return t^e^a}(i,n,r),o),l)),s),i)}function o(t,i,n,r,o,s,l){return a(e(t=a(t,a(a(function(t,e,a){return e^(t|~a)}(i,n,r),o),l)),s),i)}function s(t){var e,a="",i="";for(e=0;e<=3;e++)a+=(i="0"+(t>>>8*e&255).toString(16)).substr(i.length-2,2);return a}var l,c,u,d,f,m,p,v,b,h;for(l=function(t){for(var e,a=t.length,i=a+8,n=16*((i-i%64)/64+1),r=Array(n-1),o=0,s=0;s<a;)o=s%4*8,r[e=(s-s%4)/4]=r[e]|t.charCodeAt(s)<<o,s++;return o=s%4*8,r[e=(s-s%4)/4]=r[e]|128<<o,r[n-2]=a<<3,r[n-1]=a>>>29,r}(t),p=1732584193,v=4023233417,b=2562383102,h=271733878,c=0;c<l.length;c+=16)u=p,d=v,f=b,m=h,v=o(v=o(v=o(v=o(v=r(v=r(v=r(v=r(v=n(v=n(v=n(v=n(v=i(v=i(v=i(v=i(v,b=i(b,h=i(h,p=i(p,v,b,h,l[c+0],7,3614090360),v,b,l[c+1],12,3905402710),p,v,l[c+2],17,606105819),h,p,l[c+3],22,3250441966),b=i(b,h=i(h,p=i(p,v,b,h,l[c+4],7,4118548399),v,b,l[c+5],12,1200080426),p,v,l[c+6],17,2821735955),h,p,l[c+7],22,4249261313),b=i(b,h=i(h,p=i(p,v,b,h,l[c+8],7,1770035416),v,b,l[c+9],12,2336552879),p,v,l[c+10],17,4294925233),h,p,l[c+11],22,2304563134),b=i(b,h=i(h,p=i(p,v,b,h,l[c+12],7,1804603682),v,b,l[c+13],12,4254626195),p,v,l[c+14],17,2792965006),h,p,l[c+15],22,1236535329),b=n(b,h=n(h,p=n(p,v,b,h,l[c+1],5,4129170786),v,b,l[c+6],9,3225465664),p,v,l[c+11],14,643717713),h,p,l[c+0],20,3921069994),b=n(b,h=n(h,p=n(p,v,b,h,l[c+5],5,3593408605),v,b,l[c+10],9,38016083),p,v,l[c+15],14,3634488961),h,p,l[c+4],20,3889429448),b=n(b,h=n(h,p=n(p,v,b,h,l[c+9],5,568446438),v,b,l[c+14],9,3275163606),p,v,l[c+3],14,4107603335),h,p,l[c+8],20,1163531501),b=n(b,h=n(h,p=n(p,v,b,h,l[c+13],5,2850285829),v,b,l[c+2],9,4243563512),p,v,l[c+7],14,1735328473),h,p,l[c+12],20,2368359562),b=r(b,h=r(h,p=r(p,v,b,h,l[c+5],4,4294588738),v,b,l[c+8],11,2272392833),p,v,l[c+11],16,1839030562),h,p,l[c+14],23,4259657740),b=r(b,h=r(h,p=r(p,v,b,h,l[c+1],4,2763975236),v,b,l[c+4],11,1272893353),p,v,l[c+7],16,4139469664),h,p,l[c+10],23,3200236656),b=r(b,h=r(h,p=r(p,v,b,h,l[c+13],4,681279174),v,b,l[c+0],11,3936430074),p,v,l[c+3],16,3572445317),h,p,l[c+6],23,76029189),b=r(b,h=r(h,p=r(p,v,b,h,l[c+9],4,3654602809),v,b,l[c+12],11,3873151461),p,v,l[c+15],16,530742520),h,p,l[c+2],23,3299628645),b=o(b,h=o(h,p=o(p,v,b,h,l[c+0],6,4096336452),v,b,l[c+7],10,1126891415),p,v,l[c+14],15,2878612391),h,p,l[c+5],21,4237533241),b=o(b,h=o(h,p=o(p,v,b,h,l[c+12],6,1700485571),v,b,l[c+3],10,2399980690),p,v,l[c+10],15,4293915773),h,p,l[c+1],21,2240044497),b=o(b,h=o(h,p=o(p,v,b,h,l[c+8],6,1873313359),v,b,l[c+15],10,4264355552),p,v,l[c+6],15,2734768916),h,p,l[c+13],21,1309151649),b=o(b,h=o(h,p=o(p,v,b,h,l[c+4],6,4149444226),v,b,l[c+11],10,3174756917),p,v,l[c+2],15,718787259),h,p,l[c+9],21,3951481745),p=a(p,u),v=a(v,d),b=a(b,f),h=a(h,m);return(s(p)+s(v)+s(b)+s(h)).toLowerCase()}a.d(e,"a",function(){return i})},HZIk:function(t,e,a){},VVgF:function(t,e,a){},YFrO:function(t,e,a){"use strict";var i=a("3UNL");a.n(i).a},Yfch:function(t,e,a){"use strict";function i(t){return/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(t)}function n(t){return/^1[3|4|5|7|8][0-9]\d{8}$/.test(t)}function r(t){return/^[a-zA-Z0-9_]+$/g.test(t)}a.d(e,"c",function(){return i}),a.d(e,"b",function(){return n}),a.d(e,"a",function(){return r})},dUbn:function(t,e,a){"use strict";a.r(e);var i=a("Q2AE"),n=a("Gedb"),r=a("wk8/"),o={data:function(){var t=this;return{loading:!1,dialog:!1,title:"修改密码",form:{oldPass:"",newPass:"",confirmPass:""},rules:{oldPass:[{required:!0,validator:function(t,e,a){Object(r.f)(Object(n.a)(e)).then(function(t){200===t.status?a():a(new Error("旧密码错误，请检查"))})},trigger:"blur"}],newPass:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPass:[{required:!0,validator:function(e,a,i){t.form.newPass!==a?i(new Error("两次输入的密码不一致")):i()},trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,Object(r.e)(Object(n.a)(t.form.confirmPass)).then(function(e){t.resetForm(),t.$notify({title:"密码修改成功，请重新登录",type:"success",duration:1500}),setTimeout(function(){i.a.dispatch("LogOut").then(function(){location.reload()})},1500)}).catch(function(e){t.loading=!1,console.log(e)})})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),this.form={oldPass:"",newPass:"",confirmPass:""}}}},s=(a("YFrO"),a("KHd+")),l=Object(s.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"inline-block"}},[a("el-button",{staticClass:"button",attrs:{size:"mini",type:"info"},on:{click:function(e){t.dialog=!0}}},[t._v("修改")]),t._v(" "),a("el-dialog",{attrs:{visible:t.dialog,title:t.title,width:"500px"},on:{"update:visible":function(e){t.dialog=e},close:t.cancel}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"88px"}},[a("el-form-item",{attrs:{label:"旧密码",prop:"oldPass"}},[a("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.oldPass,callback:function(e){t.$set(t.form,"oldPass",e)},expression:"form.oldPass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"新密码",prop:"newPass"}},[a("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.newPass,callback:function(e){t.$set(t.form,"newPass",e)},expression:"form.newPass"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"确认密码",prop:"confirmPass"}},[a("el-input",{staticStyle:{width:"370px"},attrs:{type:"password","auto-complete":"on"},model:{value:t.form.confirmPass,callback:function(e){t.$set(t.form,"confirmPass",e)},expression:"form.confirmPass"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)],1)},[],!1,null,"3eb79d95",null);l.options.__file="updatePass.vue";e.default=l.exports},fXEF:function(t,e,a){"use strict";var i=a("VVgF");a.n(i).a},fnfW:function(t,e,a){"use strict";var i=a("HZIk");a.n(i).a},q4Ke:function(t,e,a){"use strict";a.r(e);var i=a("Q2AE"),n=a("Gedb"),r=a("Yfch"),o=a("wk8/"),s=a("t3Un");var l={props:{email:{type:String,required:!0}},data:function(){var t=this;return{loading:!1,dialog:!1,title:"修改邮箱",form:{pass:"",email:"",code:""},user:{email:"",password:""},codeLoading:!1,codeData:{type:"email",value:""},buttonName:"获取验证码",isDisabled:!1,time:60,rules:{pass:[{required:!0,validator:function(t,e,a){Object(o.f)(Object(n.a)(e)).then(function(t){200===t.status?a():a(new Error("密码错误，请重新输入"))})},trigger:"blur"}],email:[{required:!0,validator:function(e,a,i){""===a?i(new Error("新邮箱不能为空")):a===t.email?i(new Error("新邮箱不能与旧邮箱相同")):Object(r.c)(a)?i():i(new Error("邮箱格式错误"))},trigger:"blur"}],code:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},methods:{cancel:function(){this.resetForm()},sendCode:function(){var t=this;if(this.form.email&&this.form.email!==this.email){this.codeLoading=!0,this.buttonName="验证码发送中",this.codeData.value=this.form.email;var e=this;(function(t){return Object(s.a)({url:"api/code/resetEmail",method:"post",data:t})})(this.codeData).then(function(a){t.$message({showClose:!0,message:"发送成功，验证码有效期5分钟",type:"success"}),t.codeLoading=!1,t.isDisabled=!0,t.buttonName=t.time--+"秒后重新发送",t.timer=window.setInterval(function(){e.buttonName=e.time+"秒后重新发送",--e.time,e.time<0&&(e.buttonName="重新发送",e.time=60,e.isDisabled=!1,window.clearInterval(e.timer))},1e3)}).catch(function(e){t.resetForm(),t.codeLoading=!1,console.log(e)})}},doSubmit:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.loading=!0,t.user={email:t.form.email,password:Object(n.a)(t.form.pass)},Object(o.d)(t.form.code,t.user).then(function(e){t.loading=!1,t.resetForm(),t.$notify({title:"邮箱修改成功",type:"success",duration:1500}),i.a.dispatch("GetInfo").then(function(){})}).catch(function(e){t.loading=!1,console.log(e)})})},resetForm:function(){this.dialog=!1,this.$refs.form.resetFields(),window.clearInterval(this.timer),this.time=60,this.buttonName="获取验证码",this.isDisabled=!1,this.form={pass:"",email:"",code:""}}}},c=(a("fXEF"),a("KHd+")),u=Object(c.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{display:"inline-block"}},[a("el-button",{staticClass:"button",attrs:{size:"mini",type:"info"},on:{click:function(e){t.dialog=!0}}},[t._v("修改")]),t._v(" "),a("el-dialog",{attrs:{visible:t.dialog,title:t.title,width:"475px"},on:{"update:visible":function(e){t.dialog=e},close:t.cancel}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,size:"small","label-width":"88px"}},[a("el-form-item",{attrs:{label:"新邮箱",prop:"email"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{"auto-complete":"on"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),a("el-button",{attrs:{loading:t.codeLoading,disabled:t.isDisabled,size:"small"},on:{click:t.sendCode}},[t._v(t._s(t.buttonName))])],1),t._v(" "),a("el-form-item",{attrs:{label:"验证码",prop:"code"}},[a("el-input",{staticStyle:{width:"320px"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"当前密码",prop:"pass"}},[a("el-input",{staticStyle:{width:"320px"},attrs:{type:"password"},model:{value:t.form.pass,callback:function(e){t.$set(t.form,"pass",e)},expression:"form.pass"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"text"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)],1)},[],!1,null,"2ef9b4e5",null);u.options.__file="updateEmail.vue";e.default=u.exports},"wk8/":function(t,e,a){"use strict";a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r}),a.d(e,"c",function(){return o}),a.d(e,"f",function(){return s}),a.d(e,"e",function(){return l}),a.d(e,"d",function(){return c});var i=a("t3Un");function n(t){return Object(i.a)({url:"api/users/",method:"post",data:t})}function r(t){return Object(i.a)({url:"api/users/"+t+"/",method:"delete"})}function o(t,e){return Object(i.a)({url:"api/users/"+t+"/",method:"put",data:e})}function s(t){return Object(i.a)({url:"api/users/validPass/"+t,method:"get"})}function l(t){return Object(i.a)({url:"api/users/updatePass/"+t,method:"get"})}function c(t,e){return Object(i.a)({url:"api/users/updateEmail/"+t,method:"post",data:e})}}}]);