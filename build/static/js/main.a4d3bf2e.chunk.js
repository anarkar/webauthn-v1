(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(149)},144:function(e,t,a){e.exports=a.p+"static/media/applogo.0bf84363.png"},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),l=a(42),o=a.n(l),i=a(7),c=a(30),s=a.n(c),u=a(46),m=a(50),d=a(51),p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",f=new Uint8Array(256),h=0;h<p.length;h++)f[p.charCodeAt(h)]=h;var g=function(){function e(){Object(m.a)(this,e)}return Object(d.a)(e,null,[{key:"encode",value:function(e){var t,a=new Uint8Array(e),n=a.length,r="";for(t=0;t<n;t+=3)r+=p[a[t]>>2],r+=p[(3&a[t])<<4|a[t+1]>>4],r+=p[(15&a[t+1])<<2|a[t+2]>>6],r+=p[63&a[t+2]];return n%3===2?r=r.substring(0,r.length-1):n%3===1&&(r=r.substring(0,r.length-2)),r}},{key:"decode",value:function(e){var t,a,n,r,l,o=.75*e.length,i=e.length,c=0,s=new Uint8Array(o);for(t=0;t<i;t+=4)a=f[e.charCodeAt(t)],n=f[e.charCodeAt(t+1)],r=f[e.charCodeAt(t+2)],l=f[e.charCodeAt(t+3)],s[c++]=a<<2|n>>4,s[c++]=(15&n)<<4|r>>2,s[c++]=(3&r)<<6|63&l;return s.buffer}}]),e}();window.base64url=g;var E=g;function b(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){i=!0,l=e},f:function(){try{o||null==a.return||a.return()}finally{if(i)throw l}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var y=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(m.a)(this,e);Object.assign(this,{pathPrefix:"/webauthn",credentialEndpoint:"/register",assertionEndpoint:"/login",challengeEndpoint:"/response",logoutEndpoint:"/logout"},t)}return Object(d.a)(e,[{key:"getMakeCredentialsChallenge",value:function(){var e=Object(u.a)(s.a.mark(function e(t){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.pathPrefix).concat(this.credentialEndpoint),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(403!==(a=e.sent).status){e.next=9;break}return e.next=6,a.json();case 6:throw n=e.sent.message,"Registration failed",new Error(n?"".concat("Registration failed",": ").concat(n,"."):"".concat("Registration failed","."));case 9:if(!(a.status<200||a.status>205)){e.next=11;break}throw new Error("Server responded with error.");case 11:return e.next=13,a.json();case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"sendWebAuthnResponse",value:function(){var e=Object(u.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.pathPrefix).concat(this.challengeEndpoint),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(200===(a=e.sent).status){e.next=5;break}throw new Error("Server responded with error.");case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getGetAssertionChallenge",value:function(){var e=Object(u.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.pathPrefix).concat(this.assertionEndpoint),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(200===(a=e.sent).status){e.next=5;break}throw new Error("Server responded with error.");case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"register",value:function(){var t=Object(u.a)(s.a.mark(function t(){var a,n,r,l,o,i=arguments;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:{},t.prev=1,t.next=4,this.getMakeCredentialsChallenge(a);case 4:return n=t.sent,console.log("REGISTER CHALLENGE",n),r=e.preformatMakeCredReq(n),console.log("REGISTER PUBLIC KEY",r),t.next=10,navigator.credentials.create({publicKey:r});case 10:return l=t.sent,console.log("REGISTER CREDENTIAL",l),o=e.publicKeyCredentialToJSON(l),console.log("REGISTER RESPONSE",o),t.next=16,this.sendWebAuthnResponse(o);case 16:return t.abrupt("return",t.sent);case 19:t.prev=19,t.t0=t.catch(1),console.error(t.t0);case 22:case"end":return t.stop()}},t,this,[[1,19]])}));return function(){return t.apply(this,arguments)}}()},{key:"login",value:function(){var t=Object(u.a)(s.a.mark(function t(){var a,n,r,l,o,i=arguments;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:{},t.prev=1,t.next=4,this.getGetAssertionChallenge(a);case 4:return n=t.sent,console.log("LOGIN CHALLENGE",n),r=e.preformatGetAssertReq(n),console.log("LOGIN PUBLIC KEY",r),t.next=10,navigator.credentials.get({publicKey:r});case 10:return l=t.sent,console.log("LOGIN CREDENTIAL",l),o=e.publicKeyCredentialToJSON(l),console.log("LOGIN RESPONSE",o),t.next=16,this.sendWebAuthnResponse(o);case 16:return t.abrupt("return",t.sent);case 19:t.prev=19,t.t0=t.catch(1),console.error(t.t0);case 22:case"end":return t.stop()}},t,this,[[1,19]])}));return function(){return t.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.pathPrefix).concat(this.logoutEndpoint),{method:"GET",credentials:"include"});case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Server responded with error.");case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}],[{key:"publicKeyCredentialToJSON",value:function(t){if(ArrayBuffer.isView(t))return e.publicKeyCredentialToJSON(t.buffer);if(t instanceof Array){var a,n=[],r=b(t);try{for(r.s();!(a=r.n()).done;){var l=a.value;n.push(e.publicKeyCredentialToJSON(l))}}catch(c){r.e(c)}finally{r.f()}return n}if(t instanceof ArrayBuffer)return E.encode(t);if(t instanceof Object){var o={};for(var i in t)o[i]=e.publicKeyCredentialToJSON(t[i]);return o}return t}},{key:"generateRandomBuffer",value:function(e){var t=new Uint8Array(e||32);return window.crypto.getRandomValues(t),t}},{key:"preformatMakeCredReq",value:function(e){return e.challenge=E.decode(e.challenge),e.user.id=E.decode(e.user.id),e}},{key:"preformatGetAssertReq",value:function(e){e.challenge=E.decode(e.challenge);var t,a=b(e.allowCredentials);try{for(a.s();!(t=a.n()).done;){var n=t.value;n.id=E.decode(n.id),n.transports=["internal"]}}catch(r){a.e(r)}finally{a.f()}return e}}]),e}(),x=a(48),w=a(16),S=a(213),O=a(201),k=a(202),N=a(100),C=a(214),j=a(225),R=(a(94),a(33)),A=a(68),T=a.n(A),I=a(212),M=a(223),B=a(224);function P(e){var t=Object(w.f)(),a=r.a.useState(""),l=Object(i.a)(a,2),o=(l[0],l[1]),c=r.a.useState(""),s=Object(i.a)(c,2),u=(s[0],s[1]),m=r.a.useState(!1),d=Object(i.a)(m,2),p=d[0],f=d[1],h=r.a.useState(!1),g=Object(i.a)(h,2),E=(g[0],g[1],r.a.useState(!0)),b=Object(i.a)(E,2),v=(b[0],b[1],function(t){console.log(t),e.auth.login({username:t.username}).then(function(e){"ok"===e.status?y():window.alert("Error occured")})});Object(n.useMemo)(function(){console.log("This is useMemo");var e=localStorage.getItem("userDetails");e&&(e=JSON.parse(e),console.log(e),v(e))},[]);var y=function(){localStorage.setItem("isValid","yes"),t("/dashboard")};return r.a.createElement("div",{style:{marginBottom:"100px"}},r.a.createElement(S.a,{className:"navbar-wrapper"},r.a.createElement(O.a,{className:"container-navbar"},r.a.createElement(S.a.Brand,null,r.a.createElement("img",{src:T.a,height:"42px"})))),r.a.createElement(O.a,null,r.a.createElement(k.a,{style:{paddingTop:100}},r.a.createElement(N.a,null," ",r.a.createElement("h1",{style:{marginBottom:35}},"Sign in"),r.a.createElement(C.a,null,r.a.createElement(C.a.Group,null,r.a.createElement(I.a,{id:"outlined-basic",variant:"outlined",placeholder:"Email",label:"Email",type:"email",onChange:function(e){return o(e.target.value)},InputProps:{className:"text-field-default"},fullWidth:!0}),r.a.createElement(I.a,{id:"outlined-basic",variant:"outlined",placeholder:"Password",label:"Password",type:"password",onChange:function(e){return u(e.target.value)},InputProps:{className:"text-field-default",endAdornment:r.a.createElement(M.a,{position:"end"},r.a.createElement(B.a,{onClick:function(){return f(!p)},edge:"end"},p?r.a.createElement(R.c,null):r.a.createElement(R.b,null)))},fullWidth:!0})),r.a.createElement(j.a,{variant:"primary",onClick:v,size:"lg",style:{width:"100%"}},"Login")),r.a.createElement("div",{className:"highlight-policy central-row",style:{marginTop:20,marginBottom:20}},"Forgot Password?"),r.a.createElement("div",{className:"central-row",style:{marginTop:20,marginBottom:20}},"Don't have an account?"," ",r.a.createElement("span",{className:"highlight-policy",onClick:function(){return t("/")}},"Create One")),r.a.createElement("div",{className:"central-row",style:{marginTop:40,marginBottom:30}},"or continue with"),r.a.createElement("div",{className:"central-row"},r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.a,{fontSize:"30px"})),r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.d,{color:"#004085",fontSize:"30px",marginRight:"12px"})),r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.e,{color:"#004085",fontSize:"30px",marginRight:"12px"})))))))}var G=a(218);function L(e){var t=Object(w.f)(),a=r.a.useState(""),n=Object(i.a)(a,2),l=n[0],o=(n[1],r.a.useState("")),c=Object(i.a)(o,2),s=c[0],u=c[1],m=r.a.useState(""),d=Object(i.a)(m,2),p=(d[0],d[1]),f=r.a.useState(!1),h=Object(i.a)(f,2),g=h[0],E=h[1],b=r.a.useState(!1),v=Object(i.a)(b,2),y=v[0],x=(v[1],r.a.useState(!0)),A=Object(i.a)(x,2),P=A[0];A[1];return r.a.createElement("div",{style:{marginBottom:"100px"}},r.a.createElement(S.a,{className:"navbar-wrapper"},r.a.createElement(O.a,{className:"container-navbar"},r.a.createElement(S.a.Brand,null,r.a.createElement("img",{src:T.a,height:"42px"})))),r.a.createElement(O.a,null,r.a.createElement(k.a,{style:{paddingTop:80}},r.a.createElement(N.a,null," ",r.a.createElement("h1",{style:{marginBottom:35}},"Sign Up"),r.a.createElement(C.a,null,r.a.createElement(C.a.Group,null,r.a.createElement(I.a,{id:"outlined-basic",variant:"outlined",placeholder:"Email",label:"Email",type:"email",onChange:function(e){return u(e.target.value)},InputProps:{className:"text-field-default"},fullWidth:!0}),r.a.createElement(I.a,{id:"outlined-basic",variant:"outlined",placeholder:"Password",label:"Password",type:"password",onChange:function(e){return p(e.target.value)},InputProps:{className:"text-field-default",endAdornment:r.a.createElement(M.a,{position:"end"},r.a.createElement(B.a,{onClick:function(){return E(!g)},edge:"end"},g?r.a.createElement(R.c,null):r.a.createElement(R.b,null)))},fullWidth:!0})),r.a.createElement("div",{className:"checkbox-class"},r.a.createElement("div",null,r.a.createElement(G.a,{size:"md","aria-label":"option 1",checked:y,style:{width:20,height:20}})),r.a.createElement("div",null,"This is a public or shared device")),r.a.createElement("div",{className:"checkbox-class2"},r.a.createElement("div",null,r.a.createElement(G.a,{size:"md","aria-label":"option 1",checked:P,style:{width:20,height:20}})),r.a.createElement("div",null,"Use biometric authentication for Signup.")),r.a.createElement("div",{style:{marginBottom:20}},"By signing in, I agree to Expedia ",r.a.createElement("span",{className:"highlight-policy"},"Terms and Condition's, Privacy Statement"," ")," and ",r.a.createElement("span",{className:"highlight-policy"},"Expedia Rewards terms and Conditions.")),r.a.createElement(j.a,{variant:"primary",onClick:function(){e.auth.register({name:l,username:s}).then(function(e){console.log(e,"......response printing"),e?(localStorage.setItem("userDetails",JSON.stringify({name:l,username:s})),"ok"===e.status?t("/dashboard"):window.alert("Error occured")):window.alert("Error occured")})},size:"lg",style:{width:"100%"}},"Signup")),r.a.createElement("div",{className:"central-row",style:{marginTop:20,marginBottom:20}},"Already have an account? ",r.a.createElement("span",{className:"highlight-policy",onClick:function(){return t("/login")}}," Login")),r.a.createElement("div",{className:"central-row",style:{marginTop:40,marginBottom:30}},"or continue with"),r.a.createElement("div",{className:"central-row"},r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.a,{fontSize:"30px"})),r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.d,{color:"#004085",fontSize:"30px",marginRight:"12px"})),r.a.createElement("div",{style:{marginRight:"12px"}},r.a.createElement(R.e,{color:"#004085",fontSize:"30px",marginRight:"12px"})))))))}var z=a(227),D=a(230),J=(a(144),a(104)),W=a.n(J),U=a(105),K=a.n(U),H=a(229),V=a(226),q=a(108),F=a(102),Y=a.n(F),$=a(228),Q=a(221),X=a(222),Z=a(211),_=a(220),ee=[],te=["Profile","Account","Dashboard","Logout"],ae=function(){var e=n.useState(null),t=Object(i.a)(e,2),a=t[0],r=t[1],l=n.useState(null),o=Object(i.a)(l,2),c=o[0],s=o[1],u=Object(w.f)(),m=function(e){s(e.currentTarget)},d=function(){r(null)},p=function(e){"Logout"===e&&u("/login"),s(null)};return n.createElement(z.a,{position:"static",color:"default"},n.createElement($.a,{maxWidth:"xl"},n.createElement(H.a,{disableGutters:!0},n.createElement(D.a,{sx:{flexGrow:1,display:{xs:"none",md:"none"}}},n.createElement(B.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)},color:"inherit"},n.createElement(Y.a,null)),n.createElement(q.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:Boolean(a),onClose:d,sx:{display:{xs:"block"}}},ee.map(function(e){return n.createElement(_.a,{key:e,onClick:d},n.createElement(V.a,{textAlign:"center"},e))}))),n.createElement(B.a,{onClick:m,sx:{p:1}},n.createElement(Q.a,{alt:"logo",src:"https://logos-world.net/wp-content/uploads/2021/04/Expedia-New-Logo.png"})),n.createElement(V.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"flex",md:"none"}}},"Expedia"),n.createElement(D.a,{sx:{display:{xs:"flex"}}},ee.map(function(e){return n.createElement(X.a,{key:e,onClick:d,sx:{my:2,color:"white",display:"block"}},e)})),n.createElement(B.a,{size:"small","aria-label":"search",color:"inherit"},n.createElement(W.a,null)),n.createElement(B.a,{size:"small","aria-label":"work",color:"inherit",style:{marginRight:"16px",marginLeft:"6px"}},n.createElement(K.a,null)),n.createElement(D.a,{sx:{flexGrow:0}},n.createElement(Z.a,{title:"Open settings"},n.createElement(B.a,{onClick:m,sx:{p:0}},n.createElement(Q.a,{alt:"Remy Sharp",src:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}))),n.createElement(q.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(c),onClose:p},te.map(function(e){return n.createElement(_.a,{key:e,onClick:function(){return p(e)}},n.createElement(V.a,{textAlign:"center"},e))}))))))},ne=a(216),re=a(231);function le(){var e=n.useState(0),t=Object(i.a)(e,2),a=t[0],r=t[1];return n.createElement(D.a,{sx:{maxWidth:{xs:"100vw",sm:"auto"},bgcolor:"background.paper"}},n.createElement(ne.a,{value:a,onChange:function(e,t){r(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},n.createElement(re.a,{label:"Stays"}),n.createElement(re.a,{label:"Flights"}),n.createElement(re.a,{label:"Cars"}),n.createElement(re.a,{label:"Packages"})))}var oe=a(219),ie=a(106),ce=a.n(ie);a(145);function se(){var e=n.useState(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],l=function(e,t){"clickaway"!==t&&r(!1)},o=n.createElement(n.Fragment,null,n.createElement(B.a,{size:"small","aria-label":"close",color:"inherit",onClick:l},n.createElement(ce.a,{fontSize:"small"}))),c=n.createElement(n.Fragment,null,n.createElement("div",{style:{display:"flex",justifyContent:"start"}},n.createElement("img",{style:{width:"40px",height:"40px",borderRadius:"50%"},alt:"img",src:"https://logos-world.net/wp-content/uploads/2021/04/Expedia-New-Logo.png"}),n.createElement("span",null,"save upto 10% on thousands of properties on you book in the app")));return n.createElement("div",null,n.createElement(oe.a,{style:{display:"flex",justifyItems:"start",alignItems:"center",position:"relative",marginTop:"10px",marginLeft:"-10px"},vertical:"top",horizontal:"center",open:a,autoHideDuration:2e4,onClose:l,message:c,action:o}))}a(146);var ue=function(){return r.a.createElement("div",null," ",r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"defaultMargin"},r.a.createElement("select",{name:"cars",id:"cars",className:"customDropdown"},r.a.createElement("option",null,"1 room, 2 travelers"),r.a.createElement("option",null,"1 room, 2 travelers"),r.a.createElement("option",null,"1 room, 2 travelers"),r.a.createElement("option",null,"1 room, 2 travelers"))),r.a.createElement("div",{className:"defaultMargin"},r.a.createElement("input",{type:"text",className:"icon",placeholder:"Going to"})),r.a.createElement("div",{className:"defaultMargin"},r.a.createElement("div",{id:"leftbox",className:"defaultMargin"},r.a.createElement(I.a,{id:"date",label:"Check-in",type:"date",defaultValue:"2017-05-24",sx:{width:122},InputLabelProps:{shrink:!0}})),r.a.createElement("div",{id:"middlebox",className:"defaultMargin"}),r.a.createElement("div",{id:"rightbox",className:"defaultMargin"},r.a.createElement(I.a,{id:"date",label:"Check-out",type:"date",defaultValue:"2017-05-24",sx:{width:122},InputLabelProps:{shrink:!0}}))),r.a.createElement("div",{className:"defaultMargin"},r.a.createElement("div",{id:"leftbox"},r.a.createElement("input",{type:"checkbox",className:"customCheckbox"}),r.a.createElement("label",null,"Add a flight")),r.a.createElement("div",{id:"middlebox"}),r.a.createElement("div",{id:"rightbox"},r.a.createElement("input",{type:"checkbox",className:"customCheckbox"}),r.a.createElement("label",null,"Add a car"))),r.a.createElement("div",{style:{textAlign:"center"},className:"defaultMargin"},r.a.createElement(X.a,{variant:"contained",disableElevation:!0,style:{width:"100%",marginTop:"40px"}},"Search")),r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement("img",{style:{width:"100%",height:"350px"},src:"https://images.unsplash.com/photo-1546552768-2e5b568b0680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",alt:"beachImg"}))),";")},me=(a(147),a(215)),de=a(210),pe={position:"absolute",top:"34%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function fe(e){var t=e.open,a=e.setOpen,n=e.username;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(me.a,{open:t,onClose:function(){a(function(e){return!e})},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.a.createElement(D.a,{sx:pe},r.a.createElement("div",null,r.a.createElement("span",{style:{fontWeight:600}}," ","You could be getting lower prices")),r.a.createElement("div",null,"Save 10% or more on thousands of properties with member prices."),r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(X.a,{variant:"contained",disableElevation:!0,style:{width:"100%",marginTop:"20px"}},"Signing in as ".concat(n||"No user"))),r.a.createElement("div",{style:{textAlign:"center",marginTop:"12px",marginBottom:"20px"}},r.a.createElement("b",{style:{color:"blue"}},"Sign up it's free")),r.a.createElement("div",{className:"defaultMargin"},"List of favorites"),r.a.createElement("div",{className:"defaultMargin"},"Expedia Rewards"),r.a.createElement(de.a,null),r.a.createElement("div",{className:"defaultMargin",style:{marginTop:"20px",color:"#1976D2"}},"Customer Support"),r.a.createElement("div",{className:"defaultMargin"},"Feedback"),r.a.createElement("div",{className:"defaultMargin"},"List your property"),r.a.createElement("div",{className:"defaultMargin"},"English-USD $",r.a.createElement("span",{style:{marginLeft:"8px"}}),r.a.createElement("img",{alt:"United States",height:"30",width:"30",src:"http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"})))))}function he(){var e=Object(w.f)(),t=r.a.useState(!1),a=Object(i.a)(t,2),l=a[0],o=a[1],c=r.a.useState(""),s=Object(i.a)(c,2),u=s[0],m=s[1];return Object(n.useEffect)(function(){null===JSON.parse(localStorage.getItem("userDetails"))?e("/"):m(JSON.parse(localStorage.getItem("userDetails")).username)},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,{open:l,setOpen:o,username:u}),r.a.createElement(se,null),r.a.createElement(ae,null),r.a.createElement(le,null),r.a.createElement(ue,null))}var ge=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),l=Object(i.a)(a,2),o=(l[0],l[1],Object(n.useState)(new y)),c=Object(i.a)(o,1)[0];return Object(n.useEffect)(function(){localStorage.setItem("isValid","yes")},[]),r.a.createElement("div",null," ",r.a.createElement(x.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",element:r.a.createElement(L,{auth:c})}),r.a.createElement(w.a,{exact:!0,path:"/login",element:r.a.createElement(P,{auth:c})}),r.a.createElement(w.a,{exact:!0,path:"/dashboard",element:r.a.createElement(he,null)}))))},Ee=(a(148),a(86));Ee.a.init({applicationId:"bea90ab7-6303-4f59-aba4-3dfbf51a0003",clientToken:"pubfa61bb48e55ce1def2a72a98614fb826",site:"datadoghq.com",service:"webauthn",sampleRate:100,trackInteractions:!0,defaultPrivacyLevel:"mask-user-input"}),Ee.a.startSessionReplayRecording(),o.a.render(r.a.createElement(ge,null),document.getElementById("root"))},68:function(e,t,a){e.exports=a.p+"static/media/logo2.a6c97eac.png"},94:function(e,t,a){}},[[131,1,2]]]);
//# sourceMappingURL=main.a4d3bf2e.chunk.js.map