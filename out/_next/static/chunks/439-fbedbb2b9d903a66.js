(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[439],{1120:function(e,n,t){"use strict";t.d(n,{I2:function(){return o},OD:function(){return u},fY:function(){return a},tJ:function(){return s},zf:function(){return l}});var r=t(5893),i=t(8821);function a(e){var n=e.children,t=e.amount,a=void 0===t?.3:t,s=e.delay,l=e.duration;return(0,r.jsx)(i.E.div,{viewport:{once:!1,amount:a},whileInView:"whileInView",initial:"initial",children:(0,r.jsx)(i.E.div,{transition:{delay:s,duration:l,ease:"easeInOut"},variants:{whileInView:{y:0,opacity:1},initial:{y:-100,opacity:0}},children:n})})}function s(e){var n=e.children,t=e.delay,a=e.amount,s=e.duration,l=e.offset,o={whileInView:{y:0,opacity:1},initial:{y:void 0===l?100:l,opacity:0}};return(0,r.jsx)(i.E.div,{viewport:{once:!1,amount:a},whileInView:"whileInView",initial:"initial",children:(0,r.jsx)(i.E.div,{transition:{delay:t,duration:s,ease:"easeInOut"},variants:o,children:n})})}function l(e){var n=e.children,t=e.delay,a=e.duration;return(0,r.jsx)(i.E.div,{viewport:{once:!1,amount:.3},whileInView:"whileInView",initial:"initial",children:(0,r.jsx)(i.E.div,{transition:{delay:t,duration:a,ease:"easeInOut"},variants:{whileInView:{opacity:1},initial:{opacity:0}},children:n})})}function o(e){var n=e.children,t=e.delay,a=e.duration;return(0,r.jsx)(i.E.div,{viewport:{once:!1,amount:.3},whileInView:"whileInView",initial:"initial",children:(0,r.jsx)(i.E.div,{transition:{delay:t,duration:a,ease:"easeInOut"},variants:{whileInView:{x:0,opacity:1},initial:{x:-100,opacity:0}},children:n})})}function u(e){var n=e.children,t=e.delay,a=e.duration,s=e.amount,l=void 0===s?.3:s,o=e.parentCssClass;return(0,r.jsx)(i.E.div,{className:o,viewport:{once:!1,amount:l},whileInView:"whileInView",initial:"initial",children:(0,r.jsx)(i.E.div,{transition:{delay:t,duration:a,ease:"easeInOut"},variants:{whileInView:{x:0,opacity:1},initial:{x:100,opacity:0}},children:n})})}},8252:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),i=t(8495),a=t.n(i),s=t(7294),l=t(1225);function o(e){var n,t=e.disabled,i=(e.type,e.value),o=e.action,u=e.label,c=e.fontSize,h=e.fontSizeMobile,d=e.compact,v=e.variant,x=e.layout,m=e.onClick,f=e.pressed,p=e.scrollToOnClick,w=(0,l.Z)("(max-width:780px)"),g=function(e){var n=document.getElementById("".concat(e));void 0!=n&&n.scrollIntoView({behavior:"smooth"})},j=function(){m&&m(),p&&g(p)};n=w&&void 0!=h?{fontSize:h+"vw"}:{fontSize:w?2.5*c+"vw":c+"vw"};return"text"==v?(0,r.jsx)("div",{className:a().filter+" "+a()[x],onClick:m,children:(0,r.jsx)("button",{type:"button",className:a().button+" "+(d?a().compact:"")+" "+(f?a().pressed:""),onClick:j,children:(0,r.jsx)("h2",{style:n,children:u})})}):(0,r.jsx)(s.Fragment,{children:"outlined"==v?(0,r.jsx)("div",{className:a().outlined+" "+a()[x],onClick:j,children:(0,r.jsx)("button",{disabled:t,inputMode:"email",value:i,formAction:o,type:"button",children:(0,r.jsx)("h2",{style:n,children:u})})}):(0,r.jsx)("div",{className:a().background+" "+a()[x],onClick:m,children:(0,r.jsx)("button",{disabled:t,inputMode:"email",value:i,formAction:o,type:"button",className:a().button+" "+(d?a().compact:"")+" "+(f?a().pressed:""),onClick:j,children:(0,r.jsx)("h2",{style:n,children:u})})})})}},1790:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=(t(7294),t(7248)),a=t.n(i);function s(e){var n=e.label,t=(e.helperText,e.error),i=e.onChange,s=e.checked;return(0,r.jsx)("div",{className:a().wrapper,children:(0,r.jsxs)("label",{children:[(0,r.jsx)("span",{className:a().label,children:n}),(0,r.jsx)("input",{className:t?a().error:"",checked:s,onChange:i,type:"checkbox"})]})})}},1887:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(1799),i=t(9396),a=t(828),s=t(5893),l=t(4349),o=t(1790);var u=t(1759),c=t.n(u),h=t(8252),d=t(7294),v=t(3380),x=t.n(v),m=t(5820),f=t(8821),p=t(9243),w=t(9771),g=d.forwardRef((function(e,n){return(0,s.jsx)(w.Z,(0,r.Z)({elevation:6,ref:n,variant:"filled"},e))}));function j(){var e=function(e){return(0,r.Z)({},Se[e])},n=(0,a.Z)(d.useState(""),2),t=n[0],u=n[1],v=(0,a.Z)(d.useState(""),2),w=v[0],j=v[1],Z=(0,a.Z)(d.useState(""),2),b=Z[0],_=Z[1],y=(0,a.Z)(d.useState(""),2),S=y[0],C=y[1],k=(0,a.Z)(d.useState(""),2),N=k[0],E=k[1],I=(0,a.Z)(d.useState(""),2),T=I[0],V=I[1],z=(0,a.Z)(d.useState(""),2),H=z[0],O=z[1],B=(0,a.Z)(d.useState(""),2),A=B[0],P=B[1],R=(0,a.Z)(d.useState(""),2),D=R[0],q=R[1],W=(0,a.Z)(d.useState(""),2),Y=W[0],M=W[1],F=(0,a.Z)(d.useState(""),2),G=F[0],X=F[1],J=(0,a.Z)(d.useState(""),2),K=J[0],L=J[1],U=(0,a.Z)(d.useState(""),2),Q=U[0],$=U[1],ee=(0,a.Z)(d.useState(""),2),ne=ee[0],te=ee[1],re=(0,a.Z)(d.useState(""),2),ie=re[0],ae=re[1],se=(0,a.Z)(d.useState(""),2),le=se[0],oe=se[1],ue=(0,a.Z)(d.useState(0),2),ce=ue[0],he=ue[1],de=(0,a.Z)(d.useState(!1),2),ve=de[0],xe=de[1],me=(0,a.Z)(d.useState(!1),2),fe=me[0],pe=me[1],we=(0,a.Z)(d.useState(!1),2),ge=we[0],je=we[1],Ze=(0,a.Z)(d.useState(""),2),be=Ze[0],_e=Ze[1],ye=(0,a.Z)(d.useState([]),2),Se=ye[0],Ce=ye[1],ke=[(0,s.jsxs)("form",{id:"#angebotsformular-hausverwaltung",style:{backgroundColor:"white"},className:c().form,children:[(0,s.jsx)("h4",{children:"Welche Immobilie soll verwaltet werden?"}),(0,s.jsxs)("div",{className:c().verwaltungsArt,children:[(0,s.jsx)("h6",{children:"Verwaltungsart*"}),(0,s.jsx)(o.Z,(0,i.Z)((0,r.Z)({},e("verwaltungsart")),{checked:"WEG-Verwaltung"==w,onChange:function(e){j("WEG-Verwaltung"==w?"":"WEG-Verwaltung")},label:"WEG-Hausverwaltung"})),(0,s.jsx)(o.Z,(0,i.Z)((0,r.Z)({},e("verwaltungsart")),{checked:"Miethausverwaltung"==w,onChange:function(e){j("Miethausverwaltung"==w?"":"Miethausverwaltung")},label:"Gewerbe-Verwaltung"})),(0,s.jsx)(o.Z,(0,i.Z)((0,r.Z)({},e("verwaltungsart")),{checked:"SE-Verwaltung"==w,onChange:function(e){j("SE-Verwaltung"==w?"":"SE-Verwaltung")},label:"Sondereigentums-Verwaltung"}))]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:"Anzahl der Verwaltungseinheiten*"}),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},Se.verwaltungseinheiten),{className:c().wohneinheitenInput,value:b,onChange:function(e){_(e.target.value)},label:"Wohneinheiten",type:"number"})),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e("verwaltungseinheiten")),{className:c().gewerbeEinheiten,value:S,onChange:function(e){C(e.target.value)},label:"Gewerbeeinheiten (z.B B\xfcro)",type:"number"}))]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:"Baujahr"}),(0,s.jsx)(l.Z,{value:t,onChange:function(e){u(e.target.value)},type:"number",min:"1900",max:"2099",step:1,label:"Baujahr"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:"Verwaltungsbeginn"}),(0,s.jsx)(l.Z,{value:N,onChange:function(e){E(e.target.value)},type:"date"})]}),(0,s.jsxs)("div",{className:c().anschrift,children:[(0,s.jsx)("h6",{children:"Anschrift des Objektes*"}),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e("strasseHausnummer")),{value:T,onChange:function(e){V(e.target.value)},label:"Stra\xdfe und Hausnummer*"})),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e("plz")),{width:"small",value:H,onChange:function(e){O(e.target.value)},label:"PLZ*"})),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e("ort")),{width:"small",value:A,onChange:function(e){P(e.target.value)},label:"Ort*"}))]}),(0,s.jsx)("h6",{className:c().invisible}),(0,s.jsxs)("div",{className:c().buttonArea,children:[(0,s.jsx)("span",{className:c().info,children:"* Pflichtfelder"}),(0,s.jsx)(h.Z,{onClick:function(){return he(1)},fontSize:1,label:"Zum letzten Schritt"})]})]},1),(0,s.jsxs)("form",{style:{backgroundColor:"white"},className:c().form,children:[(0,s.jsx)("h4",{children:"Fast geschafft!"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:"Anrede*"}),(0,s.jsx)(o.Z,(0,i.Z)((0,r.Z)({},e("anrede")),{checked:"Frau"==Y,onChange:function(e){M("Frau"==Y?"":"Frau")},label:"Frau"})),(0,s.jsx)(o.Z,(0,i.Z)((0,r.Z)({},e("anrede")),{checked:"Herr"==Y,onChange:function(e){M("Herr"==Y?"":"Herr")},label:"Herr"})),(0,s.jsx)(o.Z,(0,i.Z)((0,r.Z)({},e("anrede")),{checked:"Divers"==Y,onChange:function(e){M("Divers"==Y?"":"Divers")},label:"Divers"}))]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:"Name*"}),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e("vorname")),{value:G,onChange:function(e){X(e.target.value)},label:"Vorname*"})),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e("nachname")),{value:K,onChange:function(e){L(e.target.value)},label:"Nachname*"}))]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:"E-Mail*"}),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({type:"email"},e("mail")),{value:le,onChange:function(e){oe(e.target.value)},label:"E-Mail*"}))]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:"Telefonnummer"}),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({type:"tel"},e("phoneNumber")),{value:D,onChange:function(e){q(e.target.value)},label:"Telefonnummer*"}))]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:"Anschrift*"}),(0,s.jsxs)("div",{className:c().anschrift,children:[(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e("personStrasseHausnummer")),{value:Q,onChange:function(e){$(e.target.value)},label:"Stra\xdfe und Hausnummer*"})),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e("personPlz")),{width:"small",value:ne,onChange:function(e){te(e.target.value)},label:"PLZ*"})),(0,s.jsx)(l.Z,(0,i.Z)((0,r.Z)({},e("personOrt")),{width:"small",value:ie,onChange:function(e){ae(e.target.value)},label:"Ort*"}))]})]}),(0,s.jsx)("h6",{className:c().invisible}),(0,s.jsx)("h6",{className:c().invisible}),(0,s.jsx)("h6",{className:c().invisible}),(0,s.jsx)("h6",{className:c().invisible}),(0,s.jsx)("span",{className:c().info,children:"* Pflichtfelder"}),(0,s.jsxs)("div",{className:c().buttons,children:[(0,s.jsx)(h.Z,{fontSize:1,label:"Zur\xfcck",onClick:function(){return he(0)}}),(0,s.jsx)(h.Z,{disabled:ve,onClick:function(){ve||(!function(){var e=[],n={baujahr:t,verwaltungsart:w,anzahlWohneinheiten:b,anzahlGewerbeeinheiten:S,verwaltungsbeginn:N,strasseHausnummer:T,plz:H,ort:A,anrede:Y,vorname:G,nachname:K,personPlz:ne,personOrt:ie,phoneNumber:D,personStrasseHausnummer:Q,mail:le,to:"hv"};""==b&&""==S&&(e.verwaltungseinheiten={helperText:"",error:!0}),""==w&&(e.verwaltungsart={helperText:"",error:!0}),""==T&&(e.strasseHausnummer={helperText:"",error:!0}),""==H&&(e.plz={helperText:"",error:!0}),""==A&&(e.ort={helperText:"",error:!0}),""==Y&&(e.anrede={helperText:"",error:!0}),""==ie&&(e.personOrt={helperText:"",error:!0}),""==ne&&(e.personPlz={helperText:"",error:!0}),""==Q&&(e.personStrasseHausnummer={helperText:"",error:!0}),""==le&&(e.mail={helperText:"",error:!0}),""==D&&(e.phoneNumber={helperText:"",error:!0}),""!=le&&(le.includes("@")?le.includes(".")||(e.mail={helperText:"Domain fehlt! Beispiel: mustermann@domainname.de",error:!0}):e.mail={helperText:"@ Zeichen fehlt!",error:!0}),""==G&&(e.vorname={helperText:"",error:!0}),""==K&&(e.nachname={helperText:"",error:!0}),0!=Object.keys(e).length?(Ce(e),xe(!1),je(!0),setTimeout((function(){xe(!1)}),1),_e("Angaben sind nicht vollst\xe4ndig.")):(Ce([]),_e("Nachricht erfolgreich verschickt!"),je(!1),pe(!1),fetch("https://hausverwaltung.dydo-contact.workers.dev/",{method:"POST",mode:"no-cors",contentType:"application/json",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return console.log("RESPONSE: "+JSON.stringify(e)),console.log("RESPONSE: "+e),console.log("RESPONSE OK: "+e.ok),{status:200}})).then((function(e){xe(!1),200==e.status?(console.log("Success:",e),pe(!0)):(_e("Es gab ein Problem, bitte kontaktieren Sie info@dydo.de"),je(!0))})).catch((function(e){console.error("Error:",e),xe(!1),_e("Es gab ein Problem, bitte kontaktieren Sie info@dydo.de"),je(!0)})))}(),xe(!0))},action:"https://hausverwaltung.dydo-contact.workers.dev",value:"Send",type:"post",fontSize:1,label:ve?"wird verschickt...":"Anfrage Abschicken"}),ve&&(0,s.jsxs)("div",{className:"sweet-loading",children:["  ",(0,s.jsx)(x(),{loading:ve,size:50})]})]})]},1)];return(0,s.jsxs)("div",{children:[(0,s.jsx)(p.Z,{anchorOrigin:{horizontal:"center",vertical:"bottom"},severity:"success",open:fe,autoHideDuration:6e3,onClose:function(){pe(!1)},children:(0,s.jsx)(g,{onClose:function(){pe(!1)},severity:"success",sx:{width:"100%"},children:be})}),(0,s.jsx)(p.Z,{anchorOrigin:{horizontal:"center",vertical:"bottom"},onClose:function(){je(!1)},severity:"error",open:ge,autoHideDuration:6e3,children:(0,s.jsx)(g,{onClose:function(){je(!1)},severity:"error",sx:{width:"100%"},children:be})}),(0,s.jsx)(m.M,{exitBeforeEnter:!0,children:(0,s.jsx)(f.E.div,{initial:{rotateY:-90,rotateX:0,originX:"50%"},animate:{rotateY:0,rotateX:0,originX:"50%",x:0,transition:{duration:.4,type:"linear"}},exit:{rotateY:-90,rotateX:0,originX:"50%",transition:{duration:.4,type:"linear"}},children:ke[ce]},ce)})]})}},4349:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),i=t(385),a=t.n(i),s=t(1443);function l(e){var n=e.helperText,t=e.error,i=e.width,l=void 0===i?"medium":i,o=e.size,u=void 0===o?"small":o,c=e.rows,h=e.multiline,d=e.label,v=e.type,x=void 0===v?"text":v,m=e.onChange,f=e.min,p=e.max,w=e.variant,g=void 0===w?"outlined":w,j=(e.step,e.value);return(0,r.jsx)("div",{className:a().wrapper+" "+a()[l],children:(0,r.jsx)(s.Z,{helperText:n,error:t,fullWidth:!0,size:u,variant:g,rows:c,multiline:h,onChange:m,min:f,max:p,value:j,type:x,label:d})})}},8533:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),i=t(9556),a=t.n(i);function s(e){var n=e.children;return(0,r.jsx)("div",{className:a().container,children:n})}},8495:function(e){e.exports={button:"Button_button__HxzDS",font:"Button_font__iBFap",pressed:"Button_pressed__QpYIp",compact:"Button_compact__Dd_jO",glow:"Button_glow__FTlyq",background:"Button_background___yxcY",filter:"Button_filter__Kswh4",outlined:"Button_outlined__TS_a1"}},7248:function(e){e.exports={wrapper:"CheckBox_wrapper__2D0Rn",error:"CheckBox_error__eHwJv"}},1759:function(e){e.exports={form:"HausverwaltungRequest_form__fk2vD",invisible:"HausverwaltungRequest_invisible__yYjep",anschrift:"HausverwaltungRequest_anschrift__W5E7v",buttonArea:"HausverwaltungRequest_buttonArea__vWg26",anrede:"HausverwaltungRequest_anrede__UBAi_",verwaltungsArt:"HausverwaltungRequest_verwaltungsArt__UjgSP",wohneinheitenInput:"HausverwaltungRequest_wohneinheitenInput__ecmza",buttons:"HausverwaltungRequest_buttons__eXIho",info:"HausverwaltungRequest_info__i41cK"}},385:function(e){e.exports={wrapper:"TextInput_wrapper__YJLYP",medium:"TextInput_medium__T8aon",small:"TextInput_small__kqWR5",big:"TextInput_big__BY4wn"}},9556:function(e){e.exports={container:"Container_container___sAOK"}}}]);