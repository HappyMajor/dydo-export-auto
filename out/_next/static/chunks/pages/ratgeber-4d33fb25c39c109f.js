(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{2547:function(i,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ratgeber",function(){return n(4923)}])},4260:function(i,e,n){"use strict";n.d(e,{Z:function(){return o}});var t=n(5893),s=n(8821),a=n(8913),r=n(1117),c=n(1225);function o(i){var e=i.viewportAmount,n=void 0===e?.5:e,o=i.children,l=(i.once,i.variant),d=void 0===l?"default":l,u=(0,c.Z)("(max-width:780px)"),m=((0,a.v)().scrollYProgress,(0,r.Y)({margin:"0px 0px 100vh 0px"}),{offscreen:{y:u?.5:0,opacity:u?.5:0,scaleY:0,rotateX:0,rotateY:0,originY:0,zIndex:-9999},onscreen:{y:0,scaleY:1,opacity:1,rotateY:0,rotateX:0,originY:0,transition:{type:"tween",bounce:.2,duration:.4}}});return"default"==d?(0,t.jsx)(s.E.div,{initial:"offscreen",whileInView:"onscreen",viewport:{margin:"200% 0px 0px 0px",once:!1,amount:n},children:(0,t.jsx)(s.E.div,{variants:m,children:o})}):(0,t.jsx)("div",{})}},2655:function(i,e,n){"use strict";n.d(e,{Z:function(){return r}});var t=n(5893),s=n(9814),a=n.n(s);function r(i){var e=i.children,n=i.size;return(0,t.jsxs)("div",{className:a().wrapper,children:[e,(0,t.jsx)("div",{className:a().underscore+" "+a()[n]})]})}},5130:function(i,e,n){"use strict";n.d(e,{I2:function(){return r},OD:function(){return c},tJ:function(){return a}});var t=n(5893),s=n(8821);function a(i){var e=i.children,n=i.viewportAmount,a=void 0===n?.35:n,r=i.offSet,c={inView:{y:0,opacity:1},initial:{y:void 0===r?100:r,opacity:0}};return(0,t.jsx)(s.E.div,{viewport:{once:!1,amount:a},whileInView:"inView",initial:"initial",children:(0,t.jsx)(s.E.div,{variants:c,transition:{type:"spring",bounce:.25,mass:.5},children:e})})}function r(i){var e=i.children,n=i.viewportAmount,a=void 0===n?.35:n,r=i.offSet,c={inView:{x:0,opacity:1},initial:{x:-(void 0===r?100:r),opacity:0}};return(0,t.jsx)(s.E.div,{viewport:{once:!1,amount:a},whileInView:"inView",initial:"initial",children:(0,t.jsx)(s.E.div,{variants:c,transition:{type:"spring",bounce:.25,mass:.5},children:e})})}function c(i){var e=i.children,n=i.viewportAmount,a=void 0===n?.35:n,r=i.offSet,c={inView:{x:0,opacity:1},initial:{x:void 0===r?100:r,opacity:0}};return(0,t.jsx)(s.E.div,{viewport:{once:!1,amount:a},whileInView:"inView",initial:"initial",children:(0,t.jsx)(s.E.div,{variants:c,transition:{type:"spring",bounce:.25,mass:.5},children:e})})}},8252:function(i,e,n){"use strict";n.d(e,{Z:function(){return o}});var t=n(5893),s=n(8495),a=n.n(s),r=n(7294),c=n(1225);function o(i){var e,n=i.disabled,s=(i.type,i.value),o=i.action,l=i.label,d=i.fontSize,u=i.fontSizeMobile,m=i.compact,x=i.variant,h=i.layout,p=i.onClick,v=i.pressed,_=i.scrollToOnClick,f=(0,c.Z)("(max-width:780px)"),j=function(i){var e=document.getElementById("".concat(i));void 0!=e&&e.scrollIntoView({behavior:"smooth"})},g=function(){p&&p(),_&&j(_)};e=f&&void 0!=u?{fontSize:u+"vw"}:{fontSize:f?2.5*d+"vw":d+"vw"};return"text"==x?(0,t.jsx)("div",{className:a().filter+" "+a()[h],onClick:p,children:(0,t.jsx)("button",{type:"button",className:a().button+" "+(m?a().compact:"")+" "+(v?a().pressed:""),onClick:g,children:(0,t.jsx)("h2",{style:e,children:l})})}):(0,t.jsx)(r.Fragment,{children:"outlined"==x?(0,t.jsx)("div",{className:a().outlined+" "+a()[h],onClick:g,children:(0,t.jsx)("button",{disabled:n,inputMode:"email",value:s,formAction:o,type:"button",children:(0,t.jsx)("h2",{style:e,children:l})})}):(0,t.jsx)("div",{className:a().background+" "+a()[h],onClick:p,children:(0,t.jsx)("button",{disabled:n,inputMode:"email",value:s,formAction:o,type:"button",className:a().button+" "+(m?a().compact:"")+" "+(v?a().pressed:""),onClick:g,children:(0,t.jsx)("h2",{style:e,children:l})})})})}},8533:function(i,e,n){"use strict";n.d(e,{Z:function(){return r}});var t=n(5893),s=n(9556),a=n.n(s);function r(i){var e=i.children;return(0,t.jsx)("div",{className:a().container,children:e})}},2643:function(i,e,n){"use strict";n.d(e,{Z:function(){return d}});var t=n(5893),s=n(5809),a=n.n(s),r=n(1058),c=n(4260),o=n(2655),l=n(1225);function d(i){var e=i.id,n=i.revealViewPortAmount,s=i.children,d=i.margin,u=i.imageRight,m=i.withAnimation,x=void 0===m||m,h=i.title,p=(0,l.Z)("(max-width:780px)");return x?void 0==u||p?(0,t.jsx)(c.Z,{viewportAmount:n||.1,once:!1,children:(0,t.jsxs)("section",{style:{margin:d},className:a().section,children:[(0,t.jsx)(o.Z,{size:"medium",children:(0,t.jsx)("h1",{id:e,children:h})}),(0,t.jsx)("div",{className:a().maxContent,children:s})]})}):(0,t.jsx)(c.Z,{viewportAmount:n||.1,once:!1,children:(0,t.jsxs)("section",{style:{margin:d},className:a().section,children:[(0,t.jsx)("div",{className:a().shadow}),(0,t.jsxs)("div",{className:a().split,children:[(0,t.jsxs)("div",{className:a().content,children:[(0,t.jsx)(o.Z,{size:"medium",children:(0,t.jsx)("h1",{id:e,children:h})}),s]}),(0,t.jsx)("div",{className:a().image,children:(0,t.jsx)(r.Z,{layout:"fill",objectFit:"contain",src:u})})]})]})}):void 0==u||p?(0,t.jsxs)("section",{style:{margin:d},className:a().section,children:[(0,t.jsx)(o.Z,{size:"medium",children:(0,t.jsx)("h1",{id:e,children:h})}),(0,t.jsx)("div",{className:a().maxContent,children:s})]}):(0,t.jsxs)("section",{style:{margin:d},className:a().section,children:[(0,t.jsx)("div",{className:a().shadow}),(0,t.jsxs)("div",{className:a().split,children:[(0,t.jsxs)("div",{className:a().content,children:[(0,t.jsx)(o.Z,{size:"medium",children:(0,t.jsx)("h1",{id:e,children:h})}),s]}),(0,t.jsx)("div",{className:a().image,children:(0,t.jsx)(r.Z,{layout:"fill",objectFit:"contain",src:u})})]})]})}},4923:function(i,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var t=n(5893),s=n(2643),a=n(4904),r=n.n(a),c=n(8533),o=n(8252),l=n(5130);function d(){return(0,t.jsx)("div",{className:r().wrapper,children:(0,t.jsx)(c.Z,{children:(0,t.jsx)(s.Z,{title:"Ratgeber",children:(0,t.jsxs)("div",{className:r().ratgeber,children:[(0,t.jsx)(l.I2,{children:(0,t.jsxs)("div",{className:r().bigArticle+" "+r().article,children:[(0,t.jsx)("div",{className:r().imageContainer,children:(0,t.jsx)("img",{src:"https://plus.unsplash.com/premium_photo-1680700221525-c41dc28197f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:r().date,children:"18.07.2023"}),(0,t.jsx)("h2",{className:r().title,children:"Hausverwaltung 2.0"}),(0,t.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quo recusandae placeat fugit eligendi suscipit nemo, veritatis quia dignissimos hic dolore fugiat possimus temporibus ipsum molestiae? Sint veniam quo modi?..."}),(0,t.jsx)(o.Z,{fontSize:1,label:"Mehr erfahren"})]}),(0,t.jsxs)("div",{className:r().tags,children:[(0,t.jsx)("div",{className:r().tag,children:(0,t.jsx)("p",{children:"Digitalisierung"})}),(0,t.jsx)("div",{className:r().tag,children:(0,t.jsx)("p",{children:"Hausverwaltung"})})]})]})}),(0,t.jsx)("div",{className:r().seperator}),(0,t.jsx)(l.OD,{children:(0,t.jsxs)("div",{className:r().bigArticle+" "+r().article,children:[(0,t.jsx)("div",{className:r().imageContainer,children:(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1689317145812-f25d593e2ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:r().date,children:"18.07.2023"}),(0,t.jsx)("h2",{className:r().title,children:"Hausverwaltung 2.0"}),(0,t.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quo recusandae placeat fugit eligendi suscipit nemo, veritatis quia dignissimos hic dolore fugiat possimus temporibus ipsum molestiae? Sint veniam quo modi?..."}),(0,t.jsx)(o.Z,{fontSize:1,label:"Mehr erfahren"})]}),(0,t.jsxs)("div",{className:r().tags,children:[(0,t.jsx)("div",{className:r().tag,children:(0,t.jsx)("p",{children:"Digitalisierung"})}),(0,t.jsx)("div",{className:r().tag,children:(0,t.jsx)("p",{children:"Hausverwaltung"})})]})]})}),(0,t.jsx)("div",{className:r().seperator}),(0,t.jsx)(l.I2,{children:(0,t.jsxs)("div",{className:r().bigArticle+" "+r().article,children:[(0,t.jsx)("div",{className:r().imageContainer,children:(0,t.jsx)("img",{src:"https://images.unsplash.com/photo-1689317145812-f25d593e2ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:r().date,children:"18.07.2023"}),(0,t.jsx)("h2",{className:r().title,children:"Hausverwaltung 2.0"}),(0,t.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad quo recusandae placeat fugit eligendi suscipit nemo, veritatis quia dignissimos hic dolore fugiat possimus temporibus ipsum molestiae? Sint veniam quo modi?..."}),(0,t.jsx)(o.Z,{fontSize:1,label:"Mehr erfahren"})]}),(0,t.jsxs)("div",{className:r().tags,children:[(0,t.jsx)("div",{className:r().tag,children:(0,t.jsx)("p",{children:"Digitalisierung"})}),(0,t.jsx)("div",{className:r().tag,children:(0,t.jsx)("p",{children:"Hausverwaltung"})})]})]})})]})})})})}},4904:function(i){i.exports={ratgeber:"Ratgeber_ratgeber__xqD4Y",title:"Ratgeber_title__KHUfM",smallArticle:"Ratgeber_smallArticle__rA1eR",tags:"Ratgeber_tags__o4yrZ",tag:"Ratgeber_tag___LuON",seperator:"Ratgeber_seperator__Y9oQ9",imageContainer:"Ratgeber_imageContainer__Qxc8D",date:"Ratgeber_date__suesO",wrapper:"Ratgeber_wrapper__qu7JM"}},8495:function(i){i.exports={button:"Button_button__HxzDS",font:"Button_font__iBFap",pressed:"Button_pressed__QpYIp",compact:"Button_compact__Dd_jO",glow:"Button_glow__FTlyq",background:"Button_background___yxcY",filter:"Button_filter__Kswh4",outlined:"Button_outlined__TS_a1"}},5809:function(i){i.exports={section:"Section_section__FwSbd",split:"Section_split__bbUoU",content:"Section_content__16AZB",maxContent:"Section_maxContent__QYyra",image:"Section_image__eqjzD",shadow:"Section_shadow__IcBwi"}},9814:function(i){i.exports={wrapper:"Underscore_wrapper__Ddsg0",underscore:"Underscore_underscore__TRgMO",small:"Underscore_small__Of1NQ",medium:"Underscore_medium__lcNgj",big:"Underscore_big__U9Oea",full:"Underscore_full__tgxwJ"}},9556:function(i){i.exports={container:"Container_container___sAOK"}}},function(i){i.O(0,[328,774,888,179],(function(){return e=2547,i(i.s=e);var e}));var e=i.O();_N_E=e}]);