(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,a,t){e.exports=t(141)},137:function(e,a,t){e.exports=t.p+"static/media/applogo.0bf84363.png"},138:function(e,a,t){},139:function(e,a,t){},141:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(40),i=t.n(r),c=t(7),o=t(103),s=t(45),m=t(15),u=t(204),d=t(191),p=t(192),E=t(95),g=t(205),h=t(215),f=(t(89),t(29)),b=t(65),x=t.n(b),v=t(203),y=t(213),w=t(214);function k(e){var a=Object(m.f)(),t=l.a.useState(""),r=Object(c.a)(t,2),i=(r[0],r[1]),o=l.a.useState(""),s=Object(c.a)(o,2),b=(s[0],s[1]),k=l.a.useState(!1),S=Object(c.a)(k,2),N=S[0],O=S[1],C=l.a.useState(!1),j=Object(c.a)(C,2),B=(j[0],j[1],l.a.useState(!0)),z=Object(c.a)(B,2),M=(z[0],z[1],function(a){console.log(a),e.auth.login({username:a.username}).then(function(e){"ok"===e.status?I():window.alert("Error occured")})});Object(n.useMemo)(function(){console.log("This is useMemo");var e=localStorage.getItem("userDetails");e&&(e=JSON.parse(e),console.log(e),M(e))},[]);var I=function(){localStorage.setItem("isValid","yes"),a("/dashboard")};return l.a.createElement("div",{style:{marginBottom:"100px"}},l.a.createElement(u.a,{className:"navbar-wrapper"},l.a.createElement(d.a,{className:"container-navbar"},l.a.createElement(u.a.Brand,null,l.a.createElement("img",{src:x.a,height:"42px"})))),l.a.createElement(d.a,null,l.a.createElement(p.a,{style:{paddingTop:100}},l.a.createElement(E.a,null," ",l.a.createElement("h1",{style:{marginBottom:35}},"Sign in"),l.a.createElement(g.a,null,l.a.createElement(g.a.Group,null,l.a.createElement(v.a,{id:"outlined-basic",variant:"outlined",placeholder:"Email",label:"Email",type:"email",onChange:function(e){return i(e.target.value)},InputProps:{className:"text-field-default"},fullWidth:!0}),l.a.createElement(v.a,{id:"outlined-basic",variant:"outlined",placeholder:"Password",label:"Password",type:"password",onChange:function(e){return b(e.target.value)},InputProps:{className:"text-field-default",endAdornment:l.a.createElement(y.a,{position:"end"},l.a.createElement(w.a,{onClick:function(){return O(!N)},edge:"end"},N?l.a.createElement(f.c,null):l.a.createElement(f.b,null)))},fullWidth:!0})),l.a.createElement(h.a,{variant:"primary",onClick:M,size:"lg",style:{width:"100%"}},"Login")),l.a.createElement("div",{className:"highlight-policy central-row",style:{marginTop:20,marginBottom:20}},"Forgot Password?"),l.a.createElement("div",{className:"central-row",style:{marginTop:20,marginBottom:20}},"Don't have an account?"," ",l.a.createElement("span",{className:"highlight-policy",onClick:function(){return a("/")}},"Create One")),l.a.createElement("div",{className:"central-row",style:{marginTop:40,marginBottom:30}},"or continue with"),l.a.createElement("div",{className:"central-row"},l.a.createElement("div",{style:{marginRight:"12px"}},l.a.createElement(f.a,{fontSize:"30px"})),l.a.createElement("div",{style:{marginRight:"12px"}},l.a.createElement(f.d,{color:"#004085",fontSize:"30px",marginRight:"12px"})),l.a.createElement("div",{style:{marginRight:"12px"}},l.a.createElement(f.e,{color:"#004085",fontSize:"30px",marginRight:"12px"})))))))}var S=t(208);function N(e){var a=Object(m.f)(),t=l.a.useState(""),n=Object(c.a)(t,2),r=n[0],i=(n[1],l.a.useState("")),o=Object(c.a)(i,2),s=o[0],b=o[1],k=l.a.useState(""),N=Object(c.a)(k,2),O=(N[0],N[1]),C=l.a.useState(!1),j=Object(c.a)(C,2),B=j[0],z=j[1],M=l.a.useState(!1),I=Object(c.a)(M,2),P=I[0],R=(I[1],l.a.useState(!0)),T=Object(c.a)(R,2),A=T[0],G=(T[1],l.a.useState("")),D=Object(c.a)(G,2),L=(D[0],D[1]);return l.a.createElement("div",{style:{marginBottom:"100px"}},l.a.createElement(u.a,{className:"navbar-wrapper"},l.a.createElement(d.a,{className:"container-navbar"},l.a.createElement(u.a.Brand,null,l.a.createElement("img",{src:x.a,height:"42px"})))),l.a.createElement(d.a,null,l.a.createElement(p.a,{style:{paddingTop:80}},l.a.createElement(E.a,null," ",l.a.createElement("h1",{style:{marginBottom:35}},"Sign Up"),l.a.createElement(g.a,null,l.a.createElement(g.a.Group,null,l.a.createElement(v.a,{id:"outlined-basic",variant:"outlined",placeholder:"Email",label:"Email",type:"email",onChange:function(e){return b(e.target.value)},InputProps:{className:"text-field-default"},fullWidth:!0}),l.a.createElement(v.a,{id:"outlined-basic",variant:"outlined",placeholder:"Password",label:"Password",type:"password",onChange:function(e){return O(e.target.value)},InputProps:{className:"text-field-default",endAdornment:l.a.createElement(y.a,{position:"end"},l.a.createElement(w.a,{onClick:function(){return z(!B)},edge:"end"},B?l.a.createElement(f.c,null):l.a.createElement(f.b,null)))},fullWidth:!0}),l.a.createElement(v.a,{id:"outlined-basic",variant:"outlined",placeholder:"Confirm password",label:"Confirm password",type:"password",onChange:function(e){return L(e.target.value)},InputProps:{className:"text-field-default",endAdornment:l.a.createElement(y.a,{position:"end"},l.a.createElement(w.a,{onClick:function(){return z(!B)},edge:"end"},B?l.a.createElement(f.c,null):l.a.createElement(f.b,null)))},fullWidth:!0})),l.a.createElement("div",{className:"checkbox-class"},l.a.createElement("div",null,l.a.createElement(S.a,{size:"md","aria-label":"option 1",checked:P,style:{width:20,height:20}})),l.a.createElement("div",null,"This is a public or shared device")),l.a.createElement("div",{className:"checkbox-class2"},l.a.createElement("div",null,l.a.createElement(S.a,{size:"md","aria-label":"option 1",checked:A,style:{width:20,height:20}})),l.a.createElement("div",null,"Use biometric authentication for Signup.")),l.a.createElement("div",{style:{marginBottom:20}},"By signing in, I agree to Expedia ",l.a.createElement("span",{className:"highlight-policy"},"Terms and Condition's, Privacy Statement"," ")," and ",l.a.createElement("span",{className:"highlight-policy"},"Expedia Rewards terms and Conditions.")),l.a.createElement(h.a,{variant:"primary",onClick:function(){e.auth.register({name:r,username:s}).then(function(e){console.log(e,"......response printing"),e?(localStorage.setItem("userDetails",JSON.stringify({name:r,username:s})),"ok"===e.status?a("/dashboard"):window.alert("Error occured")):window.alert("Error occured")})},size:"lg",style:{width:"100%"}},"Signup")),l.a.createElement("div",{className:"central-row",style:{marginTop:20,marginBottom:20}},"Already have an account? ",l.a.createElement("span",{className:"highlight-policy",onClick:function(){return a("/login")}}," Login")),l.a.createElement("div",{className:"central-row",style:{marginTop:40,marginBottom:30}},"or continue with"),l.a.createElement("div",{className:"central-row"},l.a.createElement("div",{style:{marginRight:"12px"}},l.a.createElement(f.a,{fontSize:"30px"})),l.a.createElement("div",{style:{marginRight:"12px"}},l.a.createElement(f.d,{color:"#004085",fontSize:"30px",marginRight:"12px"})),l.a.createElement("div",{style:{marginRight:"12px"}},l.a.createElement(f.e,{color:"#004085",fontSize:"30px",marginRight:"12px"})))))))}var O=t(217),C=t(220),j=(t(137),t(98)),B=t.n(j),z=t(99),M=t.n(z),I=t(219),P=t(216),R=t(101),T=t(97),A=t.n(T),G=t(218),D=t(211),L=t(212),W=t(202),H=t(209),V=[],F=["Profile","Account","Dashboard","Logout"],J=function(){var e=n.useState(null),a=Object(c.a)(e,2),t=a[0],l=a[1],r=n.useState(null),i=Object(c.a)(r,2),o=i[0],s=i[1],u=Object(m.f)(),d=function(e){s(e.currentTarget)},p=function(){l(null)},E=function(e){"Logout"===e&&u("/login"),s(null)};return n.createElement(O.a,{position:"static",color:"default"},n.createElement(G.a,{maxWidth:"xl"},n.createElement(I.a,{disableGutters:!0},n.createElement(C.a,{sx:{flexGrow:1,display:{xs:"none",md:"none"}}},n.createElement(w.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},n.createElement(A.a,null)),n.createElement(R.a,{id:"menu-appbar",anchorEl:t,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(t),onClose:p,sx:{display:{xs:"block"}}},V.map(function(e){return n.createElement(H.a,{key:e,onClick:p},n.createElement(P.a,{textAlign:"center"},e))}))),n.createElement(w.a,{onClick:d,sx:{p:1}},n.createElement(D.a,{alt:"logo",src:"https://logos-world.net/wp-content/uploads/2021/04/Expedia-New-Logo.png"})),n.createElement(P.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},"Expedia"),n.createElement(C.a,{sx:{display:{xs:"flex"}}},V.map(function(e){return n.createElement(L.a,{key:e,onClick:p,sx:{my:2,color:"white",display:"block"}},e)})),n.createElement(w.a,{size:"small","aria-label":"search",color:"inherit"},n.createElement(B.a,null)),n.createElement(w.a,{size:"small","aria-label":"work",color:"inherit",style:{marginRight:"16px",marginLeft:"6px"}},n.createElement(M.a,null)),n.createElement(C.a,{sx:{flexGrow:0}},n.createElement(W.a,{title:"Open settings"},n.createElement(w.a,{onClick:d,sx:{p:0}},n.createElement(D.a,{alt:"Remy Sharp",src:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}))),n.createElement(R.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(o),onClose:E},F.map(function(e){return n.createElement(H.a,{key:e,onClick:function(){return E(e)}},n.createElement(P.a,{textAlign:"center"},e))}))))))},q=t(206),U=t(221);function Y(){var e=n.useState(0),a=Object(c.a)(e,2),t=a[0],l=a[1];return n.createElement(C.a,{sx:{maxWidth:{xs:"100vw",sm:"auto"},bgcolor:"background.paper"}},n.createElement(q.a,{value:t,onChange:function(e,a){l(a)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},n.createElement(U.a,{label:"Stays"}),n.createElement(U.a,{label:"Flights"}),n.createElement(U.a,{label:"Cars"}),n.createElement(U.a,{label:"Packages"})))}var K=t(210),Q=t(100),X=t.n(Q);t(138);function Z(){var e=n.useState(!0),a=Object(c.a)(e,2),t=a[0],l=a[1],r=function(e,a){"clickaway"!==a&&l(!1)},i=n.createElement(n.Fragment,null,n.createElement(w.a,{size:"small","aria-label":"close",color:"inherit",onClick:r},n.createElement(X.a,{fontSize:"small"}))),o=n.createElement(n.Fragment,null,n.createElement("div",{style:{display:"flex",justifyContent:"start"}},n.createElement("img",{style:{width:"40px",height:"40px",borderRadius:"50%"},alt:"img",src:"https://logos-world.net/wp-content/uploads/2021/04/Expedia-New-Logo.png"}),n.createElement("span",null,"save upto 10% on thousands of properties on you book in the app")));return n.createElement("div",null,n.createElement(K.a,{style:{display:"flex",justifyItems:"start",alignItems:"center",position:"relative",marginTop:"10px",marginLeft:"-10px"},vertical:"top",horizontal:"center",open:t,autoHideDuration:2e4,onClose:r,message:o,action:i}))}t(139);var $=function(){return l.a.createElement("div",null," ",l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"defaultMargin"},l.a.createElement("select",{name:"cars",id:"cars",className:"customDropdown"},l.a.createElement("option",null,"1 room, 2 travelers"),l.a.createElement("option",null,"1 room, 2 travelers"),l.a.createElement("option",null,"1 room, 2 travelers"),l.a.createElement("option",null,"1 room, 2 travelers"))),l.a.createElement("div",{className:"defaultMargin"},l.a.createElement("input",{type:"text",className:"icon",placeholder:"Going to"})),l.a.createElement("div",{className:"defaultMargin"},l.a.createElement("div",{id:"leftbox",className:"defaultMargin"},l.a.createElement(v.a,{id:"date",label:"Check-in",type:"date",defaultValue:"2017-05-24",sx:{width:122},InputLabelProps:{shrink:!0}})),l.a.createElement("div",{id:"middlebox",className:"defaultMargin"}),l.a.createElement("div",{id:"rightbox",className:"defaultMargin"},l.a.createElement(v.a,{id:"date",label:"Check-out",type:"date",defaultValue:"2017-05-24",sx:{width:122},InputLabelProps:{shrink:!0}}))),l.a.createElement("div",{className:"defaultMargin"},l.a.createElement("div",{id:"leftbox"},l.a.createElement("input",{type:"checkbox",className:"customCheckbox"}),l.a.createElement("label",null,"Add a flight")),l.a.createElement("div",{id:"middlebox"}),l.a.createElement("div",{id:"rightbox"},l.a.createElement("input",{type:"checkbox",className:"customCheckbox"}),l.a.createElement("label",null,"Add a car"))),l.a.createElement("div",{style:{textAlign:"center"},className:"defaultMargin"},l.a.createElement(L.a,{variant:"contained",disableElevation:!0,style:{width:"100%",marginTop:"40px"}},"Search")),l.a.createElement("div",{style:{margin:"auto"}},l.a.createElement("img",{style:{width:"100%",height:"350px"},src:"https://images.unsplash.com/photo-1546552768-2e5b568b0680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",alt:"beachImg"}))),";")};function _(){return l.a.createElement(l.a.Fragment,null," ",l.a.createElement(Z,null),l.a.createElement(J,null),l.a.createElement(Y,null),l.a.createElement($,null))}var ee=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=(a[0],a[1],Object(n.useState)("")),r=Object(c.a)(t,2),i=(r[0],r[1],Object(n.useState)(new o.a)),u=Object(c.a)(i,1)[0];return Object(n.useEffect)(function(){localStorage.setItem("isValid","yes")},[]),l.a.createElement("div",null," ",l.a.createElement(s.a,null,l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/",element:l.a.createElement(N,{auth:u})}),l.a.createElement(m.a,{exact:!0,path:"/login",element:l.a.createElement(k,{auth:u})}),l.a.createElement(m.a,{exact:!0,path:"/dashboard",element:l.a.createElement(_,null)}))))};t(140);i.a.render(l.a.createElement(ee,null),document.getElementById("root"))},65:function(e,a,t){e.exports=t.p+"static/media/logo2.a6c97eac.png"},89:function(e,a,t){}},[[124,1,2]]]);
//# sourceMappingURL=main.4033220f.chunk.js.map