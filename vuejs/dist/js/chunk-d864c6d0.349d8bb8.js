(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d864c6d0","chunk-2d0babe1"],{3905:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"navigation-buttons"},[a("li",{staticClass:"buttons",on:{click:e.homeRoute}},[e._v("Home")]),e.logged?a("li",{staticClass:"buttons",on:{click:e.settingsRoute}},[e._v("My Settings")]):e._e(),e.logged&&e.admin&&!e.superadmin?a("li",{staticClass:"buttons",on:{click:e.adminRoute}},[e._v("Admin Panel")]):e._e(),e.logged&&e.admin&&e.superadmin?a("li",{staticClass:"buttons",on:{click:e.superAdminRoute}},[e._v("Admin Panel")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.contentRoute}},[e._v("View Content")]):e._e(),e.logged?a("li",{staticClass:"buttons",on:{click:e.logoutRoute}},[e._v("Logout")]):e._e(),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.requestRoute}},[e._v("Request Access")]),e.logged?e._e():a("li",{staticClass:"buttons",on:{click:e.loginRoute}},[e._v("Login")])]),a("hr")])},o=[],r={data:function(){return{logged:!1,admin:!1,superadmin:!1}},methods:{homeRoute:function(){this.$router.push("/0:home/")},settingsRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:settings/"}})},adminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:admin/"}})},superAdminRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:superadmin/"}})},contentRoute:function(){this.$router.push({name:"results",params:{data:"You are Redirected Through a Secure Channel. Please Wait!!",redirectUrl:"/0:/"}})},logoutRoute:function(){var e=JSON.parse(localStorage.getItem("tokendata")),t=JSON.parse(localStorage.getItem("userdata"));null!=t&&null!=e&&(localStorage.removeItem("tokendata"),localStorage.removeItem("userdata"),this.$router.push({name:"results",params:{data:"You are Being Logged Out. Please Wait",redirectUrl:"/0:home/"}}))},requestRoute:function(){this.$router.push("/0:register/request")},loginRoute:function(){this.$router.push("/0:login/")}},created:function(){var e=this,t=JSON.parse(localStorage.getItem("tokendata")),a=JSON.parse(localStorage.getItem("userdata"));null!=a&&null!=t?this.axios.post(window.apiRoutes.verifyRoute,{token:t.token}).then((function(t){t.data.auth||t.data.registered||null!=t.data.tokenuser?a.admin&&!a.superadmin?(e.logged=!0,e.admin=!0):a.admin&&a.superadmin?(e.logged=!0,e.admin=!0,e.superadmin=!0):e.logged=!1:e.$router.push({name:"results",params:{data:"I think Your Token Has Expired. Please Login to Regerate Another One",redirectUrl:"/0:login/"}})})):this.logged=!1}},i=r,n=a("2877"),u=Object(n["a"])(i,s,o,!1,null,null,null);t["default"]=u.exports},6187:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content login-page"},[a("TopLinks"),a("p",{staticStyle:{color:"#bac964"}},[e._v(e._s(e.databasemessage))]),a("p",{staticStyle:{color:"#f6f578"}},[e._v(e._s(e.resultmessage))]),a("h4",[e._v("Verify Your Account")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[a("label",{attrs:{for:"email"}},[e._v(" > Your E-Mail Address")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"otp"}},[e._v(" > OTP")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.otp,expression:"otp"}],attrs:{id:"otp",type:"password",required:""},domProps:{value:e.otp},on:{input:function(t){t.target.composing||(e.otp=t.target.value)}}})]),a("label",{staticStyle:{color:"grey","font-size":"14px"}},[e._v(" OTP is Case Sensitive")])]),a("div",[a("label",{attrs:{for:"password"}},[e._v(" > Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),a("div",[a("label",{attrs:{for:"confirm-password"}},[e._v(" > Confirm Password")]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmpassword,expression:"confirmpassword"}],attrs:{id:"confirm-password",type:"password",required:""},domProps:{value:e.confirmpassword},on:{input:function(t){t.target.composing||(e.confirmpassword=t.target.value)}}})])]),e._m(0)])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{staticClass:"login-button",attrs:{type:"submit"}},[e._v(" Login ")])])}],r=a("3905"),i={components:{TopLinks:r["default"]},data:function(){return{email:"",otp:"",password:"",confirmpassword:"",resultmessage:"",databasemessage:""}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.confirmpassword===this.password&&this.password.length>0?this.$http.post(window.apiRoutes.otpRegister,{email:this.email,otp:this.otp,newpassword:this.password}).then((function(e){console.log(e),e.data.auth&&e.data.registered&&e.data.changed?t.$router.push({name:"/0:result/",params:{redirectUrl:"/0:login/",data:e.data.message}}):t.resultmessage="> "+e.data.message})):(this.resultmessage="> Passwords Do Not Match",this.password="",this.confirmpassword="")}},mounted:function(){var e=this;this.$route.params.summa?this.databasemessage=this.$route.params.data:this.$http.post(window.apiRoutes.homeRoute).then((function(t){console.log(t),"200"==t.status?e.databasemessage="🟢 Database is Live. Ping - ".concat(t.data.ping,"ms"):e.databasemessage="🔴 Database Offline / under Maintenance. Please Try Later"}))}},n=i,u=a("2877"),l=Object(u["a"])(n,s,o,!1,null,null,null);t["default"]=l.exports}}]);