(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,t,a){e.exports=a(148)},136:function(e,t,a){},144:function(e,t,a){e.exports=a.p+"static/media/applogo.0bf84363.png"},145:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),l=a(43),i=a.n(l),o=a(7),c=a(27),s=a.n(c),u=a(38),m=a(50),d=a(51),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",f=new Uint8Array(256),g=0;g<p.length;g++)f[p.charCodeAt(g)]=g;var h=function(){function e(){Object(m.a)(this,e)}return Object(d.a)(e,null,[{key:"encode",value:function(e){var t,a=new Uint8Array(e),n=a.length,r="";for(t=0;t<n;t+=3)r+=p[a[t]>>2],r+=p[(3&a[t])<<4|a[t+1]>>4],r+=p[(15&a[t+1])<<2|a[t+2]>>6],r+=p[63&a[t+2]];return n%3===2?r=r.substring(0,r.length-1):n%3===1&&(r=r.substring(0,r.length-2)),r}},{key:"decode",value:function(e){var t,a,n,r,l,i=.75*e.length,o=e.length,c=0,s=new Uint8Array(i);for(t=0;t<o;t+=4)a=f[e.charCodeAt(t)],n=f[e.charCodeAt(t+1)],r=f[e.charCodeAt(t+2)],l=f[e.charCodeAt(t+3)],s[c++]=a<<2|n>>4,s[c++]=(15&n)<<4|r>>2,s[c++]=(3&r)<<6|63&l;return s.buffer}}]),e}();window.base64url=h;var E=h;function b(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){o=!0,l=e},f:function(){try{i||null==a.return||a.return()}finally{if(o)throw l}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(m.a)(this,e);Object.assign(this,{pathPrefix:"/webauthn",credentialEndpoint:"/register",assertionEndpoint:"/login",challengeEndpoint:"/response",logoutEndpoint:"/logout"},t)}return Object(d.a)(e,[{key:"getMakeCredentialsChallenge",value:function(){var e=Object(u.a)(s.a.mark(function e(t){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.pathPrefix).concat(this.credentialEndpoint),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(403!==(a=e.sent).status){e.next=9;break}return e.next=6,a.json();case 6:throw n=e.sent.message,"Registration failed",new Error(n?"".concat("Registration failed",": ").concat(n,"."):"".concat("Registration failed","."));case 9:if(!(a.status<200||a.status>205)){e.next=11;break}throw new Error("Server responded with error.");case 11:return e.next=13,a.json();case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"sendWebAuthnResponse",value:function(){var e=Object(u.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.pathPrefix).concat(this.challengeEndpoint),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(200===(a=e.sent).status){e.next=5;break}throw new Error("Server responded with error.");case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getGetAssertionChallenge",value:function(){var e=Object(u.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.pathPrefix).concat(this.assertionEndpoint),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(200===(a=e.sent).status){e.next=5;break}throw new Error("Server responded with error.");case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(u.a)(s.a.mark(function t(){var a,n,r,l,i,o=arguments;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:{},t.prev=1,t.next=4,this.getMakeCredentialsChallenge(a);case 4:return n=t.sent,console.log("REGISTER CHALLENGE",n),r=e.preformatMakeCredReq(n),console.log("REGISTER PUBLIC KEY",r),t.next=10,navigator.credentials.create({publicKey:r});case 10:return l=t.sent,console.log("REGISTER CREDENTIAL",l),i=e.publicKeyCredentialToJSON(l),console.log("REGISTER RESPONSE",i),t.next=16,this.sendWebAuthnResponse(i);case 16:return t.abrupt("return",t.sent);case 19:t.prev=19,t.t0=t.catch(1),console.error(t.t0);case 22:case"end":return t.stop()}},t,this,[[1,19]])}));return function(){return t.apply(this,arguments)}}()},{key:"login",value:function(){var t=Object(u.a)(s.a.mark(function t(){var a,n,r,l,i,o=arguments;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=o.length>0&&void 0!==o[0]?o[0]:{},t.prev=1,t.next=4,this.getGetAssertionChallenge(a);case 4:return n=t.sent,console.log("LOGIN CHALLENGE",n),r=e.preformatGetAssertReq(n),console.log("LOGIN PUBLIC KEY",r),t.next=10,navigator.credentials.get({publicKey:r});case 10:return l=t.sent,console.log("LOGIN CREDENTIAL",l),i=e.publicKeyCredentialToJSON(l),console.log("LOGIN RESPONSE",i),t.next=16,this.sendWebAuthnResponse(i);case 16:return t.abrupt("return",t.sent);case 19:t.prev=19,t.t0=t.catch(1),console.error(t.t0);case 22:case"end":return t.stop()}},t,this,[[1,19]])}));return function(){return t.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.pathPrefix).concat(this.logoutEndpoint),{method:"GET",credentials:"include"});case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Server responded with error.");case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}],[{key:"publicKeyCredentialToJSON",value:function(t){if(ArrayBuffer.isView(t))return e.publicKeyCredentialToJSON(t.buffer);if(t instanceof Array){var a,n=[],r=b(t);try{for(r.s();!(a=r.n()).done;){var l=a.value;n.push(e.publicKeyCredentialToJSON(l))}}catch(c){r.e(c)}finally{r.f()}return n}if(t instanceof ArrayBuffer)return E.encode(t);if(t instanceof Object){var i={};for(var o in t)i[o]=e.publicKeyCredentialToJSON(t[o]);return i}return t}},{key:"generateRandomBuffer",value:function(e){var t=new Uint8Array(e||32);return window.crypto.getRandomValues(t),t}},{key:"preformatMakeCredReq",value:function(e){return e.challenge=E.decode(e.challenge),e.user.id=E.decode(e.user.id),e}},{key:"preformatGetAssertReq",value:function(e){e.challenge=E.decode(e.challenge);var t,a=b(e.allowCredentials);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.id=E.decode(n.id)}}catch(r){a.e(r)}finally{a.f()}return e}}]),e}(),x=a(48),w=a(16),S=a(213),k=a(208),O=a(209),N=a(102),C=a(214),j=a(225),R=(a(94),a(33)),A=a(52),T=a.n(A),I=a(212),B=a(223),L=a(224),M=(a(136),a(221)),P=a(215),G=a(226),z=a(207),D={position:"absolute",top:"34%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,marginTop:"10%"};function J(e){var t=e.open,a=e.setOpen,n=e.username,l=e.isLogin;return r.a.createElement("div",{className:"wrapper",style:{zIndex:9999}},r.a.createElement(P.a,{open:t,onClose:function(){a(function(e){return!e})},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.a.createElement(G.a,{sx:D},r.a.createElement("div",null,r.a.createElement("span",{style:{fontWeight:600}}," ","You could be getting lower prices")),r.a.createElement("div",null,"Save 10% or more on thousands of properties with member prices."),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(M.a,{variant:"contained",disableElevation:!0,style:{width:"100%",marginTop:"20px"},onClick:l},"Signing in as ".concat(n||"No user"))),r.a.createElement("div",{style:{textAlign:"center",marginTop:"12px",marginBottom:"20px"}},r.a.createElement(M.a,{variant:"contained",disableElevation:!0,style:{width:"100%",marginTop:"20px"},onClick:function(){return a(function(e){return!e})}},"Sign up it's free")),r.a.createElement("div",{className:"defaultMargin"},"List of favorites"),r.a.createElement("div",{className:"defaultMargin"},"Expedia Rewards"),r.a.createElement(z.a,null),r.a.createElement("div",{className:"defaultMargin",style:{marginTop:"20px",color:"#1976D2"}},"Customer Support"),r.a.createElement("div",{className:"defaultMargin"},"Feedback"),r.a.createElement("div",{className:"defaultMargin"},"List your property"),r.a.createElement("div",{className:"defaultMargin"},"English-USD $",r.a.createElement("span",{style:{marginLeft:"8px"}}),r.a.createElement("img",{alt:"United States",height:"30",width:"30",src:"http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"})))))}function U(e){var t=Object(w.f)(),a=r.a.useState(""),l=Object(o.a)(a,2),i=(l[0],l[1]),c=r.a.useState(""),s=Object(o.a)(c,2),u=(s[0],s[1]),m=r.a.useState(!1),d=Object(o.a)(m,2),p=d[0],f=d[1],g=r.a.useState(!1),h=Object(o.a)(g,2),E=h[0],b=h[1],v=r.a.useState(""),y=Object(o.a)(v,2),x=y[0],A=y[1],M=function(){var t=JSON.parse(localStorage.getItem("userDetails"));console.log(t),e.auth.login({username:t.username}).then(function(e){"ok"===e.status?P():window.alert("Error occured")})};Object(n.useEffect)(function(){var e=localStorage.getItem("userDetails");e?(e=JSON.parse(e),A(JSON.parse(localStorage.getItem("userDetails")).username),b(!0)):b(!1)},[]);var P=function(){localStorage.setItem("isValid","yes"),t("/dashboard")};return r.a.createElement("div",{style:{marginBottom:"100px"}},r.a.createElement(S.a,{className:"navbar-wrapper"},r.a.createElement(k.a,{className:"container-navbar"},r.a.createElement(S.a.Brand,null,r.a.createElement("img",{src:T.a,height:"42px"})))),r.a.createElement(k.a,null,r.a.createElement(O.a,{style:{paddingTop:100}},r.a.createElement(N.a,null," ",r.a.createElement("h1",{style:{marginBottom:35}},"Sign in"),r.a.createElement(C.a,null,r.a.createElement(C.a.Group,null,r.a.createElement(I.a,{id:"outlined-basic",variant:"outlined",placeholder:"Email",label:"Email",type:"email",onChange:function(e){return i(e.target.value)},InputProps:{className:"text-field-default"},fullWidth:!0}),r.a.createElement(I.a,{id:"outlined-basic",variant:"outlined",placeholder:"Password",label:"Password",type:"password",onChange:function(e){return u(e.target.value)},InputProps:{className:"text-field-default",endAdornment:r.a.createElement(B.a,{position:"end"},r.a.createElement(L.a,{onClick:function(){return f(!p)},edge:"end"},p?r.a.createElement(R.c,null):r.a.createElement(R.b,null)))},fullWidth:!0})),r.a.createElement(j.a,{variant:"primary",onClick:M,size:"lg",style:{width:"100%"}},"Login")),r.a.createElement("div",{className:"highlight-policy central-row",style:{marginTop:20,marginBottom:20}},"Forgot Password?"),r.a.createElement("div",{className:"central-row",style:{marginTop:20,marginBottom:20}},"Don't have an account?"," ",r.a.createElement("span",{className:"highlight-policy",onClick:function(){return t("/")}},"Create One")),r.a.createElement("div",{className:"central-row",style:{marginTop:40,marginBottom:30}},"or continue with"),r.a.createElement("div",{className:"central-row"},r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.a,{fontSize:"30px"})),r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.d,{color:"#004085",fontSize:"30px",marginRight:"12px"})),r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.e,{color:"#004085",fontSize:"30px",marginRight:"12px"}))))),r.a.createElement(J,{open:E,setOpen:b,username:x,isLogin:function(){return M()}})))}var W=a(218);function K(e){var t=Object(w.f)(),a=r.a.useState(""),n=Object(o.a)(a,2),l=n[0],i=(n[1],r.a.useState("")),c=Object(o.a)(i,2),m=c[0],d=c[1],p=r.a.useState(""),f=Object(o.a)(p,2),g=(f[0],f[1]),h=r.a.useState(!1),E=Object(o.a)(h,2),b=E[0],v=E[1],y=r.a.useState(!1),x=Object(o.a)(y,2),A=x[0],M=(x[1],r.a.useState(!0)),P=Object(o.a)(M,2),G=P[0],z=(P[1],function(){var a=Object(u.a)(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.auth.register({name:l,username:m}).then(function(e){e?(localStorage.setItem("userDetails",JSON.stringify({name:l,username:m})),"ok"===e.status?t("/dashboard"):window.alert("Error occured")):window.alert("Error occured")});case 1:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}());return r.a.createElement("div",{style:{marginBottom:"100px"}},r.a.createElement(S.a,{className:"navbar-wrapper"},r.a.createElement(k.a,{className:"container-navbar"},r.a.createElement(S.a.Brand,null,r.a.createElement("img",{src:T.a,height:"42px"})))),r.a.createElement(k.a,null,r.a.createElement(O.a,{style:{paddingTop:80}},r.a.createElement(N.a,null," ",r.a.createElement("h1",{style:{marginBottom:35}},"Sign Up"),r.a.createElement(C.a,null,r.a.createElement(C.a.Group,null,r.a.createElement(I.a,{id:"outlined-basic",variant:"outlined",placeholder:"Email",label:"Email",type:"email",onChange:function(e){return d(e.target.value)},InputProps:{className:"text-field-default"},fullWidth:!0}),r.a.createElement(I.a,{id:"outlined-basic",variant:"outlined",placeholder:"Password",label:"Password",type:"password",onChange:function(e){return g(e.target.value)},InputProps:{className:"text-field-default",endAdornment:r.a.createElement(B.a,{position:"end"},r.a.createElement(L.a,{onClick:function(){return v(!b)},edge:"end"},b?r.a.createElement(R.c,null):r.a.createElement(R.b,null)))},fullWidth:!0})),r.a.createElement("div",{className:"checkbox-class"},r.a.createElement("div",null,r.a.createElement(W.a,{size:"md","aria-label":"option 1",checked:A,style:{width:20,height:20}})),r.a.createElement("div",null,"This is a public or shared device")),r.a.createElement("div",{className:"checkbox-class2"},r.a.createElement("div",null,r.a.createElement(W.a,{size:"md","aria-label":"option 1",checked:G,style:{width:20,height:20}})),r.a.createElement("div",null,"Use biometric authentication for Signup.")),r.a.createElement("div",{style:{marginBottom:20}},"By signing in, I agree to Expedia ",r.a.createElement("span",{className:"highlight-policy"},"Terms and Condition's, Privacy Statement"," ")," and ",r.a.createElement("span",{className:"highlight-policy"},"Expedia Rewards terms and Conditions.")),r.a.createElement(j.a,{variant:"primary",onClick:z,size:"lg",style:{width:"100%"}},"Signup")),r.a.createElement("div",{className:"central-row",style:{marginTop:20,marginBottom:20}},"Already have an account? ",r.a.createElement("span",{className:"highlight-policy",onClick:function(){return t("/login")}}," Login")),r.a.createElement("div",{className:"central-row",style:{marginTop:40,marginBottom:30}},"or continue with"),r.a.createElement("div",{className:"central-row"},r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.a,{fontSize:"30px"})),r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.d,{color:"#004085",fontSize:"30px",marginRight:"12px"})),r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.e,{color:"#004085",fontSize:"30px",marginRight:"12px"})))))))}var H=a(228),V=(a(144),a(104)),q=a.n(V),F=a(105),Y=a.n(F),$=a(230),Q=a(227),X=a(108),Z=a(103),_=a.n(Z),ee=a(229),te=a(222),ae=a(211),ne=a(220),re=[],le=["Profile","Account","Dashboard","Logout"],ie=function(e){var t=e.logout,a=n.useState(null),r=Object(o.a)(a,2),l=r[0],i=r[1],c=n.useState(null),s=Object(o.a)(c,2),u=s[0],m=s[1],d=Object(w.f)(),p=function(e){m(e.currentTarget)},f=function(){i(null)},g=function(e){"Logout"===e&&(d("/login"),t()),m(null)};return n.createElement(H.a,{position:"static",color:"default"},n.createElement(ee.a,{maxWidth:"xl"},n.createElement($.a,{disableGutters:!0},n.createElement(G.a,{sx:{flexGrow:1,display:{xs:"none",md:"none"}}},n.createElement(L.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},color:"inherit"},n.createElement(_.a,null)),n.createElement(X.a,{id:"menu-appbar",anchorEl:l,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(l),onClose:f,sx:{display:{xs:"block"}}},re.map(function(e){return n.createElement(ne.a,{key:e,onClick:f},n.createElement(Q.a,{textAlign:"center"},e))}))),n.createElement("div",{onClick:p,sx:{p:1},style:{width:"90%"}},n.createElement("img",{alt:"logo",src:T.a,style:{width:150}})),n.createElement(G.a,{sx:{display:{xs:"flex"}}},re.map(function(e){return n.createElement(M.a,{key:e,onClick:f,sx:{my:2,color:"white",display:"block"}},e)})),n.createElement(L.a,{size:"small","aria-label":"search",color:"inherit"},n.createElement(q.a,null)),n.createElement(L.a,{size:"small","aria-label":"work",color:"inherit",style:{marginRight:"16px",marginLeft:"6px"}},n.createElement(Y.a,null)),n.createElement(G.a,{sx:{flexGrow:0}},n.createElement(ae.a,{title:"Open settings"},n.createElement(L.a,{onClick:p,sx:{p:0}},n.createElement(te.a,{alt:"Remy Sharp",src:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}))),n.createElement(X.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(u),onClose:g},le.map(function(e){return n.createElement(ne.a,{key:e,onClick:function(){return g(e)}},n.createElement(Q.a,{textAlign:"center"},e))}))))))},oe=a(216),ce=a(231);function se(){var e=n.useState(0),t=Object(o.a)(e,2),a=t[0],r=t[1];return n.createElement(G.a,{sx:{maxWidth:{xs:"100vw",sm:"auto"},bgcolor:"background.paper"}},n.createElement(oe.a,{value:a,onChange:function(e,t){r(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},n.createElement(ce.a,{label:"Stays"}),n.createElement(ce.a,{label:"Flights"}),n.createElement(ce.a,{label:"Cars"}),n.createElement(ce.a,{label:"Packages"})))}var ue=a(219),me=a(106),de=a.n(me);a(145);function pe(){var e=n.useState(!0),t=Object(o.a)(e,2),a=t[0],r=t[1],l=function(e,t){"clickaway"!==t&&r(!1)},i=n.createElement(n.Fragment,null,n.createElement(L.a,{size:"small","aria-label":"close",color:"inherit",onClick:l},n.createElement(de.a,{fontSize:"small"}))),c=n.createElement(n.Fragment,null,n.createElement("div",{style:{display:"flex",justifyContent:"start",alignItems:"center",padding:"10px 0px 0px 0px"}},n.createElement("img",{style:{width:"60px",height:"40px",borderRadius:"50%"},alt:"img",src:"https://logos-world.net/wp-content/uploads/2021/04/Expedia-New-Logo.png"}),n.createElement("span",null,"Save upto 10% on thousands of properties on you book in the app.")));return n.createElement("div",{style:{width:"100%"}},n.createElement(ue.a,{style:{display:"flex",justifyItems:"start",alignItems:"center",position:"relative",marginTop:"10px",marginLeft:"0px !important",left:"0px !important",right:"0px !important"},vertical:"top",horizontal:"center",open:a,autoHideDuration:2e8,onClose:l,message:c,action:i}))}a(146);var fe=function(){return r.a.createElement("div",null," ",r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"defaultMargin"},r.a.createElement("select",{name:"cars",id:"cars",className:"customDropdown"},r.a.createElement("option",null,"1 room, 2 travelers"),r.a.createElement("option",null,"1 room, 2 travelers"),r.a.createElement("option",null,"1 room, 2 travelers"),r.a.createElement("option",null,"1 room, 2 travelers"))),r.a.createElement("div",{className:"defaultMargin"},r.a.createElement("input",{type:"text",className:"icon",placeholder:"Going to"})),r.a.createElement("div",{className:"defaultMargin"},r.a.createElement("div",{id:"leftbox",className:"defaultMargin"},r.a.createElement(I.a,{id:"date",label:"Check-in",type:"date",defaultValue:"2017-05-24",sx:{width:"90%"},InputLabelProps:{shrink:!0}})),r.a.createElement("div",{id:"middlebox",className:"defaultMargin"}),r.a.createElement("div",{id:"rightbox",className:"defaultMargin"},r.a.createElement(I.a,{id:"date",label:"Check-out",type:"date",defaultValue:"2017-05-25",sx:{width:"100%"},InputLabelProps:{shrink:!0}}))),r.a.createElement("div",{className:"defaultMargin"},r.a.createElement("div",{id:"leftbox"},r.a.createElement("input",{type:"checkbox",className:"customCheckbox"}),r.a.createElement("label",null,"Add a flight")),r.a.createElement("div",{id:"middlebox"}),r.a.createElement("div",{id:"rightbox"},r.a.createElement("input",{type:"checkbox",className:"customCheckbox"}),r.a.createElement("label",null,"Add a car"))),r.a.createElement("div",{style:{textAlign:"center"},className:"defaultMargin"},r.a.createElement(M.a,{variant:"contained",disableElevation:!0,style:{width:"100%",marginTop:"40px"}},"Search")),r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement("img",{style:{width:"100%",height:"350px"},src:"https://images.unsplash.com/photo-1546552768-2e5b568b0680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",alt:"beachImg"}))),";")};function ge(e){var t=e.logout,a=Object(w.f)();return Object(n.useEffect)(function(){null===JSON.parse(localStorage.getItem("userDetails"))&&a("/")},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null),r.a.createElement(ie,{logout:t}),r.a.createElement(se,null),r.a.createElement(fe,null))}var he=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),l=Object(o.a)(a,2),i=(l[0],l[1],Object(n.useState)(new y)),c=Object(o.a)(i,1)[0];return Object(n.useEffect)(function(){localStorage.setItem("isValid","yes")},[]),r.a.createElement("div",null," ",r.a.createElement(x.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",element:r.a.createElement(K,{auth:c})}),r.a.createElement(w.a,{exact:!0,path:"/login",element:r.a.createElement(U,{auth:c})}),r.a.createElement(w.a,{exact:!0,path:"/dashboard",element:r.a.createElement(ge,{logout:function(){c.logout()}})}))))},Ee=(a(147),a(86));Ee.a.init({applicationId:"bea90ab7-6303-4f59-aba4-3dfbf51a0003",clientToken:"pubfa61bb48e55ce1def2a72a98614fb826",site:"datadoghq.com",service:"webauthn",sampleRate:100,trackInteractions:!0,defaultPrivacyLevel:"mask-user-input"}),Ee.a.startSessionReplayRecording(),i.a.render(r.a.createElement(he,null),document.getElementById("root"))},52:function(e,t,a){e.exports=a.p+"static/media/logo2.a6c97eac.png"},94:function(e,t,a){}},[[130,1,2]]]);
//# sourceMappingURL=main.e3b16afb.chunk.js.map