(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{104:function(e,t,n){e.exports={app:"App_app__10dw9"}},109:function(e,t,n){e.exports={users:"User_users__2zBa5",user:"User_user__1zDCz"}},110:function(e,t,n){e.exports={followBtn:"FollowButton_followBtn__Jw8kA",unfollowBtn:"FollowButton_unfollowBtn__2DUDb"}},112:function(e,t,n){e.exports={post:"Post_post__2prcS",postHeader:"Post_postHeader__13KaB"}},115:function(e,t,n){},162:function(e,t,n){e.exports={aboutBlock:"About_aboutBlock__2WwFz"}},163:function(e,t,n){e.exports={myPostsForm:"MyPostsForm_myPostsForm__2-JJU"}},167:function(e,t,n){e.exports={login:"Login_login__ylczG"}},300:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=(n(115),n(89)),s=n(18),i=n.n(s),o=n(27),l=n(5),u=n(7),d=n(333),j=n(51),b=n.n(j),f=b.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1e90b645-3ab8-4f0b-b1bb-01b70c47396d"}}),p=function(e){return f.get("profile/".concat(e))},O=function(e){return f.get("profile/status/".concat(e))},h=function(e){return f.put("profile/status",{status:e})},m={appStatus:"idle",error:null,initialization:!1},x=function(e){return{type:"APP/SET-ERROR",error:e}},v=function(e){return{type:"APP/SET-STATUS",status:e}},g=function(e){return{type:"APP/SET-INITIALIZATION",value:e}},_=function(e,t){e.messages.length?t(x(e.messages[0])):t(x("Some error occurred")),t(v("failed"))},S=function(e,t){t(x(e.message)),t(v("failed"))},w=b.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1e90b645-3ab8-4f0b-b1bb-01b70c47396d"}}),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{term:"",friend:null};return w.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n.term)+(null===n.friend?"":"&friend=".concat(n.friend))).then((function(e){return e.data}))},y=function(e){return w.post("follow/".concat(e))},N=function(e){return w.delete("follow/".concat(e))},P=function(e){return w.get("follow/".concat(e))},F={posts:[{id:Object(d.a)(),post:"Hello!",likesCount:3},{id:Object(d.a)(),post:"JS!",likesCount:9}],profile:null,status:"",followed:!1,isFollowing:"idle"},T=function(e){return{type:"SET-STATUS-PROFILE",status:e}},k=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:r=t.sent,n({type:"PROFILE/SET-FOLLOWED-USER",followed:r.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),S(t.t0,n);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},U={usersList:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:"idle",isFollowing:[],disableButton:"idle",filter:{term:"",friend:null}},L=function(e){return{type:"USERS/SET_FILTER",payload:e}},C=function(e,t){return{type:"USERS/TOGGLE-IS-FOLLOWING",disableButton:e,userID:t}},I=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},R=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},A=function(e,t,n){return function(){var r=Object(o.a)(i.a.mark((function r(a){var c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(I("loading")),a(L(n)),a(R(1)),r.prev=3,r.next=6,E(e,t,n);case 6:c=r.sent,a({type:"SET-USERS",users:c.items}),a({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:c.totalCount}),a(I("succeeded")),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(3),S(r.t0,a);case 15:case"end":return r.stop()}}),r,null,[[3,12]])})));return function(e){return r.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(C("loading",e)),t.next=3,y(e);case 3:if(0!==t.sent.data.resultCode){t.next=9;break}return n({type:"USERS/FOLLOW",id:e}),t.next=8,n(k(e));case 8:n(C("succeeded",e));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},H=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(C("loading",e)),t.next=3,N(e);case 3:if(0!==t.sent.data.resultCode){t.next=9;break}return n({type:"USERS/UNFOLLOW",id:e}),t.next=8,n(k(e));case 8:n(C("succeeded",e));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},z=b.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1e90b645-3ab8-4f0b-b1bb-01b70c47396d"}}),D=function(){return z.get("auth/me")},G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return z.post("auth/login",{email:e,password:t,rememberMe:n})},M=function(){return z.delete("auth/login")},W={data:{id:null,login:null,email:null},messages:[],fieldsErrors:[],resultCode:0,isAuth:!1},J=function(e,t,n,r){return{type:"SET-AUTH-USER-DATA",payload:{id:e,login:t,email:n},isAuth:r}},K=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,a,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v("loading")),e.prev=1,e.next=4,D();case 4:0===(n=e.sent).data.resultCode?(r=n.data.data,a=r.id,c=r.login,s=r.email,t(J(a,c,s,!0)),t(g(!0)),t(v("succeeded"))):_(n.data,t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),S(e.t0,t);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},X=n(150),V=Object(c.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:t.id,post:t.postText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[n].concat(Object(l.a)(e.posts))});case"SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET-STATUS-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"PROFILE/SET-FOLLOWED-USER":return Object(u.a)(Object(u.a)({},e),{},{followed:t.followed});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS/FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{usersList:e.usersList.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case"USERS/UNFOLLOW":return Object(u.a)(Object(u.a)({},e),{},{usersList:e.usersList.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(u.a)(Object(u.a)({},e),{},{usersList:t.users});case"SET-CURRENT-PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"USERS/TOGGLE-IS-FOLLOWING":return Object(u.a)(Object(u.a)({},e),{},{isFollowing:"loading"===t.disableButton?[].concat(Object(l.a)(e.isFollowing),[t.userID]):Object(l.a)(e.isFollowing.filter((function(e){return e!==t.userID})))});case"USERS/SET_FILTER":return Object(u.a)(Object(u.a)({},e),{},{filter:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH-USER-DATA":return Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)(Object(u.a)({},e.data),t.payload),isAuth:t.isAuth});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{appStatus:t.status});case"APP/SET-ERROR":return Object(u.a)(Object(u.a)({},e),{},{error:t.error});case"APP/SET-INITIALIZATION":return Object(u.a)(Object(u.a)({},e),{},{initialization:t.value});default:return e}}}),Y=Object(c.c)(V,Object(c.a)(X.a));console.log(window.store=Y);var q=n(44),Z=n.n(q),Q=n(104),$=n.n(Q),ee=n(11),te=n(56),ne=n.n(te),re=n(151),ae=n.n(re),ce=n(155),se=n.n(ce),ie=n(1),oe=r.memo((function(){var e=Object(ee.b)(),t=Object(ee.c)((function(e){return e.app.appStatus})),n=Object(ee.c)((function(e){return e.auth.isAuth})),r=Object(ee.c)((function(e){return e.auth.data.login})),a=function(){e(function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v("loading")),e.prev=1,e.next=4,M();case 4:0===(n=e.sent).data.resultCode?(t(J(null,null,null,!1)),t(g(!1)),t(v("succeeded"))):_(n.data,t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),S(e.t0,t);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())};return Object(ie.jsx)("header",{className:ne.a.header,children:Object(ie.jsxs)("div",{className:ne.a.container,children:[Object(ie.jsxs)("div",{className:ne.a.title,children:[Object(ie.jsx)(ae.a,{sx:{fontSize:"45px",color:"#64d580"}}),Object(ie.jsx)("h1",{children:"Lumos."})]}),Object(ie.jsx)("div",{children:n?Object(ie.jsxs)("div",{className:ne.a.loginInfo,children:[Object(ie.jsx)("span",{children:r}),Object(ie.jsx)("button",{className:ne.a.logoutBtn,onClick:function(){return a()},disabled:"loading"===t,children:Object(ie.jsx)(se.a,{sx:{fontSize:"35px",color:"#2254f5"}})})]}):Object(ie.jsx)(ie.Fragment,{})})]})})})),le=n(9),ue=n(109),de=n.n(ue),je=n(37),be=n(336),fe=n(334),pe=n(110),Oe=n.n(pe),he=a.a.memo((function(e){var t=e.followUserHandler,n=e.unfollowUserHandler,r=e.followed,a=e.userId,c=Object(ee.c)((function(e){return e.usersPage.isFollowing})).some((function(e){return e===a}));return Object(ie.jsx)("div",{children:r?Object(ie.jsx)("button",{className:Oe.a.unfollowBtn,onClick:function(){return n(a)},disabled:c,children:"UNFOLLOW"}):Object(ie.jsx)("button",{className:Oe.a.followBtn,onClick:function(){return t(a)},disabled:c,children:"FOLLOW"})})})),me=a.a.memo((function(e){var t=e.usersList,n=e.followUserHandler,r=e.unfollowUserHandler,a=t.map((function(e){var t;return Object(ie.jsx)(fe.a,{item:!0,xs:!0,children:Object(ie.jsxs)("div",{className:de.a.user,children:[Object(ie.jsx)("div",{children:Object(ie.jsx)(je.b,{to:"/profile/"+e.id,children:Object(ie.jsx)(be.a,{alt:e.name,src:null===(t=e.photos)||void 0===t?void 0:t.small,sx:{width:65,height:65}})})}),Object(ie.jsx)("h4",{children:e.name}),Object(ie.jsxs)("p",{children:["ID: ",e.id]}),Object(ie.jsx)("div",{children:Object(ie.jsx)(he,{followed:e.followed,userId:e.id,followUserHandler:n,unfollowUserHandler:r})})]})},e.id)}));return Object(ie.jsx)("div",{className:de.a.users,children:Object(ie.jsx)(fe.a,{spacing:2,container:!0,children:a})})})),xe=n(337),ve=n(330),ge=n(23),_e=n(35),Se=n(49),we=n.n(Se),Ee=n(161),ye=n.n(Ee),Ne=_e.a({term:_e.b().max(300,"Must be 300 characters or less")}),Pe=a.a.memo((function(e){var t=e.onFilterChanged;return Object(ie.jsx)("div",{children:Object(ie.jsx)(ge.d,{initialValues:{term:"",friend:"null"},onSubmit:function(e,n){var r=n.setSubmitting,a={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(a),r(!1)},validationSchema:Ne,children:function(e){var t=e.isSubmitting;return Object(ie.jsxs)(ge.c,{className:we.a.searchForm,children:[Object(ie.jsxs)("div",{className:we.a.inputBlock,children:[Object(ie.jsx)(ge.b,{name:"term",type:"text",placeholder:"Search here"}),Object(ie.jsx)("button",{className:we.a.searchBtn,type:"submit",disabled:t,children:Object(ie.jsx)("div",{className:we.a.icon,children:Object(ie.jsx)(ye.a,{sx:{fontSize:"25px",color:"#adb5bd"}})})})]}),Object(ie.jsx)("div",{className:we.a.selectBlock,children:Object(ie.jsxs)(ge.b,{className:we.a.select,name:"friend",as:"select",children:[Object(ie.jsx)("option",{value:"null",children:"All"}),Object(ie.jsx)("option",{value:"true",children:"Only followed"}),Object(ie.jsx)("option",{value:"false",children:"Only unfollowed"})]})})]})}})})})),Fe=n(84),Te=n.n(Fe),ke=a.a.memo((function(){var e=Object(ee.b)(),t=Object(ee.c)((function(e){return e.usersPage}));Object(r.useEffect)((function(){return e(A(t.currentPage,t.pageSize,t.filter)),function(){R(1)}}),[e,t.currentPage,t.pageSize,t.filter]);var n=Object(r.useCallback)((function(n){e(A(n,t.pageSize,t.filter))}),[e,t.pageSize,t.filter]),a=Object(r.useCallback)((function(t){e(B(t))}),[e]),c=Object(r.useCallback)((function(t){e(H(t))}),[e]),s=Math.ceil(t.totalUsersCount/t.pageSize);return Object(ie.jsxs)("div",{className:Te.a.users,children:[Object(ie.jsxs)("div",{className:Te.a.searchBlock,children:[Object(ie.jsx)("div",{children:Object(ie.jsx)("h2",{children:"Users"})}),Object(ie.jsx)("div",{children:Object(ie.jsx)(Pe,{onFilterChanged:function(n){e(A(1,t.pageSize,n))}})})]}),"loading"===t.isFetching?Object(ie.jsx)(xe.a,{style:{marginTop:"30px",marginBottom:"20px"}}):Object(ie.jsx)(me,{usersList:t.usersList,followUserHandler:a,unfollowUserHandler:c}),Object(ie.jsx)("div",{className:Te.a.pagination,children:Object(ie.jsx)(ve.a,{count:s,color:"primary",onChange:function(e,t){return n(t)}})})]})})),Ue=n(85),Le=n.n(Ue);function Ce(){return Object(ie.jsxs)("nav",{className:Le.a.navbar,children:[Object(ie.jsx)(je.b,{to:"/profile",className:function(e){return e.isActive?Le.a.active:""},children:"Profile"}),Object(ie.jsx)(je.b,{to:"/users",className:function(e){return e.isActive?Le.a.active:""},children:"Users"})]})}var Ie=n(31),Re=n(42),Ae=n.n(Re),Be=n(162),He=n.n(Be),ze=Object(r.memo)((function(e){var t=e.aboutMe;return Object(ie.jsxs)("div",{className:He.a.aboutBlock,children:[Object(ie.jsx)("h4",{children:"About"}),t?Object(ie.jsx)("p",{children:t}):Object(ie.jsx)("p",{children:"The user did not tell about himself."})]})})),De=n(112),Ge=n.n(De);var Me,We=function(e){return Object(ie.jsxs)("div",{className:Ge.a.post,children:[Object(ie.jsxs)("div",{className:Ge.a.postHeader,children:[Object(ie.jsx)(be.a,{src:e.avatar,sx:{width:45,height:45}}),Object(ie.jsx)("h4",{children:e.name})]}),Object(ie.jsx)("div",{children:Object(ie.jsx)("p",{children:e.post})}),Object(ie.jsx)("div",{children:Object(ie.jsxs)("span",{children:[e.likesCount," Like"]})})]})},Je=n(86),Ke=n.n(Je),Xe=n(328),Ve=n(338),Ye=n(163),qe=n.n(Ye),Ze=_e.a({postText:_e.b().max(300,"Must be 300 characters or less")}),Qe=a.a.memo((function(e){var t=e.addPostHandler;return Object(ie.jsx)("div",{style:{width:"100%"},children:Object(ie.jsx)(ge.d,{initialValues:{postText:""},onSubmit:function(e,n){var r=n.setSubmitting;t(e.postText),r(!1)},validationSchema:Ze,children:function(e){var t=e.isSubmitting;return Object(ie.jsxs)(ge.c,{className:qe.a.myPostsForm,children:[Object(ie.jsx)(Ve.a,{type:"submit",disabled:t,style:{margin:"0 0 5px 0"},children:Object(ie.jsx)(Xe.a,{color:"primary"})}),Object(ie.jsx)("span",{children:"Create post"}),Object(ie.jsx)(ge.b,{component:"textarea",name:"postText",type:"text",placeholder:"What's on your mind?"}),Object(ie.jsx)(ge.a,{name:"postText"})]})}})})})),$e=a.a.memo((function(e){var t=e.avatar,n=e.name,a=Object(ee.b)(),c=Object(ee.c)((function(e){return e.profilePage.posts})).map((function(e){return Object(ie.jsx)(We,{id:e.id,post:e.post,avatar:t,name:n,likesCount:e.likesCount},e.id)})),s=Object(r.useCallback)((function(e){var t=e.trim();t&&a({type:"ADD-POST",postText:t,id:Object(d.a)()})}),[a]);return Object(ie.jsxs)("div",{className:Ke.a.myPosts,children:[Object(ie.jsx)("div",{className:Ke.a.postForm,children:Object(ie.jsx)(Qe,{addPostHandler:s})}),Object(ie.jsx)("div",{className:Ke.a.allPosts,children:c})]})})),et=n(13),tt=n(66),nt=n.n(tt),rt=a.a.memo((function(e){var t=e.status,n=Object(r.useState)(!1),a=Object(et.a)(n,2),c=a[0],s=a[1],l=Object(r.useState)(t),u=Object(et.a)(l,2),d=u[0],j=u[1],b=Object(ee.b)(),f=Object(ee.c)((function(e){return e.app.appStatus})),p=function(){s(!1),b(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v("loading")),t.prev=1,t.next=4,h(e);case 4:0===(r=t.sent).data.resultCode?(n(T(e)),n(v("succeeded"))):_(r.data,n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),S(t.t0,n);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(d.trim()))};Object(r.useEffect)((function(){j(t)}),[t]);return Object(ie.jsxs)("div",{className:nt.a.profileStatus,children:[c&&Object(ie.jsx)("div",{className:nt.a.input,children:Object(ie.jsx)("input",{type:"text",onChange:function(e){j(e.currentTarget.value)},autoFocus:!0,onFocus:function(e){return e.currentTarget.select()},onBlur:p,value:d,onKeyPress:function(e){"Enter"===e.key&&p()},disabled:"loading"===f})}),!c&&Object(ie.jsx)("div",{className:nt.a.span,onClick:function(){"loading"!==f&&s(!0)},children:t||Object(ie.jsx)("span",{className:nt.a.noStatus,children:"type status"})})]})})),at=n(164),ct=n.p+"static/media/bgnode.225cbf7a.jpg",st=at.a.div(Me||(Me=Object(Ie.a)(["\n        border-radius: 15px;\n        height: 70%;\n        width: 100%;\n        background-image: url(",");\n        background-position: center;\n        background-size: cover;\n        overflow: hidden;\n    "])),(function(e){return e.img})),it=a.a.memo((function(){var e=Object(ee.b)(),t=Object(ee.c)((function(e){return e.profilePage.profile})),n=Object(ee.c)((function(e){return e.profilePage.followed})),a=Object(ee.c)((function(e){return e.profilePage.status})),c=Object(ee.c)((function(e){return e.auth.data.id})),s=Object(le.g)().userId;s||(s=c),Object(r.useEffect)((function(){e(k(s))}),[e,s]),Object(r.useEffect)((function(){var t;e((t=s,function(){var e=Object(o.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(v("loading")),e.prev=1,e.next=4,p(t);case 4:r=e.sent,n({type:"SET-USER-PROFILE",profile:r.data}),n(v("succeeded")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),S(e.t0,n);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),e(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v("loading")),t.prev=1,t.next=4,O(e);case 4:r=t.sent,n(T(r.data)),n(v("succeeded")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),S(t.t0,n);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(s))}),[e,s]);var l=Object(r.useCallback)((function(t){e(B(t))}),[e]),u=Object(r.useCallback)((function(t){e(H(t))}),[e]);return Object(ie.jsxs)("div",{className:Ae.a.profile,children:[Object(ie.jsxs)("div",{className:Ae.a.profileHeader,children:[(null===t||void 0===t?void 0:t.photos.large)?Object(ie.jsx)(st,{img:null===t||void 0===t?void 0:t.photos.large}):Object(ie.jsx)(st,{img:ct}),Object(ie.jsxs)("div",{className:Ae.a.headInfo,children:[Object(ie.jsx)("div",{className:Ae.a.avatar,children:Object(ie.jsx)(be.a,{alt:null===t||void 0===t?void 0:t.fullName,src:null===t||void 0===t?void 0:t.photos.small,sx:{width:100,height:100,border:"4px solid white",position:"absolute",top:"-85px",left:"25px"}})}),Object(ie.jsxs)("div",{className:Ae.a.info,children:[Object(ie.jsxs)("div",{children:[Object(ie.jsx)("h4",{children:null===t||void 0===t?void 0:t.fullName}),Object(ie.jsx)(rt,{status:a})]}),Object(ie.jsx)("div",{children:Object(ie.jsx)(he,{followed:n,followUserHandler:l,unfollowUserHandler:u,userId:s})})]})]})]}),Object(ie.jsxs)("div",{className:Ae.a.profileContent,children:[Object(ie.jsx)("div",{className:Ae.a.about,children:Object(ie.jsx)(ze,{aboutMe:null===t||void 0===t?void 0:t.aboutMe})}),Object(ie.jsx)("div",{className:Ae.a.posts,children:Object(ie.jsx)($e,{avatar:null===t||void 0===t?void 0:t.photos.small,name:null===t||void 0===t?void 0:t.fullName})})]})]})})),ot=n(87),lt=n.n(ot),ut=a.a.memo((function(){return Object(ie.jsxs)("main",{className:lt.a.main,children:[Object(ie.jsx)("div",{className:lt.a.nav,children:Object(ie.jsx)(Ce,{})}),Object(ie.jsx)("div",{className:lt.a.content,children:Object(ie.jsxs)(le.c,{children:[Object(ie.jsx)(le.a,{path:"profile",element:Object(ie.jsx)(it,{}),children:Object(ie.jsx)(le.a,{path:":userId",element:Object(ie.jsx)(it,{})})}),Object(ie.jsx)(le.a,{path:"users",element:Object(ie.jsx)(ke,{})}),Object(ie.jsx)(le.a,{path:"*",element:Object(ie.jsx)("div",{children:"404"})}),Object(ie.jsx)(le.a,{path:"social-network",element:Object(ie.jsx)(ke,{})}),Object(ie.jsx)(le.a,{path:"/",element:Object(ie.jsx)(ke,{})})]})})]})})),dt=n(329),jt=n(332),bt=r.forwardRef((function(e,t){return Object(ie.jsx)(jt.a,Object(u.a)({elevation:6,ref:t,variant:"filled"},e))}));function ft(){var e=Object(ee.b)(),t=Object(ee.c)((function(e){return e.app.error})),n=null!==t,r=function(t,n){"clickaway"!==n&&e(x(null))};return Object(ie.jsx)(dt.a,{open:n,autoHideDuration:6e3,onClose:r,anchorOrigin:{horizontal:"center",vertical:"bottom"},children:Object(ie.jsx)(bt,{onClose:r,severity:"error",sx:{width:"100%"},children:t})})}var pt=n(167),Ot=n.n(pt),ht=n(88),mt=n.n(ht),xt=_e.a({email:_e.b().email("Invalid email address").required("Required"),password:_e.b().required("No password provided").min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),vt=function(){var e=Object(ee.b)(),t=Object(ee.c)((function(e){return e.app.appStatus})),n=function(t,n,r){e(function(e,t,n){return function(){var r=Object(o.a)(i.a.mark((function r(a){var c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(v("loading")),r.prev=1,r.next=4,G(e,t,n);case 4:0===(c=r.sent).data.resultCode?(a(K()),a(v("succeeded"))):_(c.data,a),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),S(r.t0,a);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()}(t,n,r))};return Object(ie.jsx)("div",{children:Object(ie.jsx)(ge.d,{initialValues:{email:"",password:"",rememberMe:!1},validationSchema:xt,onSubmit:function(e,t){var r=t.setSubmitting;n(e.email,e.password,e.rememberMe),r(!1)},children:function(e){e.isSubmitting;return Object(ie.jsxs)(ge.c,{className:mt.a.loginForm,children:[Object(ie.jsx)(ge.b,{name:"email",type:"email",placeholder:"Email"}),Object(ie.jsx)(ge.b,{name:"password",type:"password",placeholder:"Password"}),Object(ie.jsxs)("div",{className:mt.a.remember,children:[Object(ie.jsx)("div",{children:Object(ie.jsx)(ge.b,{name:"rememberMe",type:"checkbox"})}),Object(ie.jsx)("div",{children:Object(ie.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"})})]}),Object(ie.jsx)("button",{className:mt.a.loginBtn,type:"submit",disabled:"loading"===t,children:"Login"})]})}})})},gt=a.a.memo((function(){return"loading"===Object(ee.c)((function(e){return e.app.appStatus}))?Object(ie.jsx)(ie.Fragment,{}):Object(ie.jsxs)("div",{className:Ot.a.login,children:[Object(ie.jsx)("h1",{children:"Login into your account"}),Object(ie.jsx)(vt,{})]})})),_t=function(){var e=Object(ee.b)(),t=Object(ee.c)((function(e){return e.app.initialization}));return Object(r.useEffect)((function(){e(K())}),[e]),Object(ie.jsxs)("div",{className:$.a.app,children:[Object(ie.jsx)(ft,{}),t?Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(oe,{}),Object(ie.jsx)(ut,{})]}):Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsx)(gt,{})})]})},St=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,340)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};Z.a.render(Object(ie.jsx)(je.a,{children:Object(ie.jsx)(ee.a,{store:Y,children:Object(ie.jsx)(_t,{})})}),document.getElementById("root")),St()},42:function(e,t,n){e.exports={profile:"Profile_profile__2bhSD",profileHeader:"Profile_profileHeader__3SFge",headInfo:"Profile_headInfo__S7XWr",avatar:"Profile_avatar__3EgOt",info:"Profile_info__1IsRk",profileContent:"Profile_profileContent__3YG9w",about:"Profile_about__YHcuh",posts:"Profile_posts__34jW_"}},49:function(e,t,n){e.exports={searchForm:"UsersSearchForm_searchForm__14s5Z",inputBlock:"UsersSearchForm_inputBlock__2-Nk8",searchBtn:"UsersSearchForm_searchBtn__10KSX",icon:"UsersSearchForm_icon__2zzXz",selectBlock:"UsersSearchForm_selectBlock__3WXoG",select:"UsersSearchForm_select__36IBy"}},56:function(e,t,n){e.exports={header:"Header_header__22rC9",container:"Header_container__2bcQR",title:"Header_title__2UK3R",loginInfo:"Header_loginInfo__12Qmf",logoutBtn:"Header_logoutBtn__3dOFJ"}},66:function(e,t,n){e.exports={profileStatus:"ProfileStatus_profileStatus__1j3HN",span:"ProfileStatus_span__2LAS-",noStatus:"ProfileStatus_noStatus__3-4mN"}},84:function(e,t,n){e.exports={users:"Users_users__nB4Rk",searchBlock:"Users_searchBlock__1Qm7o",pagination:"Users_pagination__1MrqR"}},85:function(e,t,n){e.exports={navbar:"Navbar_navbar__RW2mG"}},86:function(e,t,n){e.exports={myPosts:"MyPosts_myPosts__2o7U5",postForm:"MyPosts_postForm__amRnx"}},87:function(e,t,n){e.exports={main:"Main_main__1DGW4",nav:"Main_nav__3Omg5",content:"Main_content__3XygP"}},88:function(e,t,n){e.exports={loginForm:"LoginForm_loginForm__3VhNT",remember:"LoginForm_remember__1yzVo",loginBtn:"LoginForm_loginBtn__2jpEX"}}},[[300,1,2]]]);
//# sourceMappingURL=main.018492c9.chunk.js.map