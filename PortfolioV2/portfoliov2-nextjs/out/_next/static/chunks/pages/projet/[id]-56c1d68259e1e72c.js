(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[87],{2683:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projet/[id]",function(){return n(2959)}])},723:function(e,t,n){"use strict";var i=n(5893),s=n(7294),r=n(5247),o=n(8387),a=n(9583),l=n(5675),c=n.n(l),d=n(1645);let h=()=>{let e=(0,s.useRef)(),[t,n]=(0,s.useState)(!1),[l,h]=(0,s.useState)(!1),[u,x]=(0,s.useState)(!1),[m,p]=(0,s.useState)(!1),j=t=>{t.preventDefault(),r.ZP.sendForm("service_4r6hzh5","template_azodpme",e.current,"dZGt70tC40ba2-n71").then(e=>{console.log(e.text),h(!0)},e=>{console.log(e.text),x(!0)}),t.target.reset()},g=()=>{navigator.clipboard.writeText("thomas.viei@hotmail.fr"),p(!0),n(!0)};return(0,s.useEffect)(()=>{let e;return e=setTimeout(()=>n(!1),2e3),()=>clearTimeout(e)},[t]),(0,i.jsx)("div",{className:"footer-global-container",children:(0,i.jsxs)("div",{className:"footer-content-container",children:[(0,i.jsx)("h3",{id:"contact",children:"Me contacter"}),(0,i.jsxs)("div",{className:"content__mailCC",onClick:()=>g(),children:[t?(0,i.jsx)("p",{style:m?{color:"#5ca960"}:{color:"#d9d9d9"},children:"Copi\xe9 dans le presse papier !"}):(0,i.jsx)("p",{style:m?{color:"#5ca960"}:{color:"#d9d9d9"},children:"thomas.viei@hotmail.fr"}),m?(0,i.jsx)(a.Zlo,{id:"content__mailCC--check"}):(0,i.jsx)(a.GON,{id:"content__mailCC--copy"})]}),(0,i.jsxs)("form",{ref:e,onSubmit:e=>j(e),children:[(0,i.jsx)("label",{htmlFor:"mailInput",children:"Email"}),(0,i.jsx)("input",{type:"email",placeholder:"prenom@nom.fr",id:"mailInput",name:"mailInput",required:!0}),(0,i.jsx)("label",{htmlFor:"messageInput",children:"Message"}),(0,i.jsx)("textarea",{name:"messageInput",placeholder:"Votre message",id:"messageInput",required:!0}),l?(0,i.jsx)(o.Z,{style:{transition:"0.4s",margin:"1em 0"},onClose:()=>h(!1),children:"Votre message a \xe9t\xe9 envoy\xe9. Merci !"}):"",u?(0,i.jsx)(o.Z,{style:{transition:"0.4s",margin:"1em 0"},onClose:()=>x(!1),severity:"error",children:"Une erreur est survenue. Merci de v\xe9rifier les informations renseign\xe9es."}):"",(0,i.jsx)("input",{type:"submit",value:"ENVOYER"})]}),(0,i.jsx)("div",{className:"footer-content__like",children:(0,i.jsxs)("p",{children:["Site r\xe9alis\xe9 \xe0 la main, aucune donn\xe9e n","'","est collect\xe9e. L","'","entieret\xe9 du code est disponible sur mon GitHub."]})}),(0,i.jsxs)("div",{className:"footer-content__realisation",children:[(0,i.jsx)("p",{children:"Site r\xe9alis\xe9 avec"}),(0,i.jsx)(c(),{src:d.E+"/img/nextJS-logo-text.png",alt:"logo nextjs",width:62,height:42})]})]})})};t.Z=h},3951:function(e,t,n){"use strict";var i=n(5893),s=n(9008),r=n.n(s);n(7294);let o=e=>{let{title:t,description:n}=e;return(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:t}),(0,i.jsx)("meta",{name:"description",content:n})]})};o.defaultProps={title:"Thomas Vieillecourt d\xe9veloppeur web front-end Javascript et React",description:"Portfolio de Thomas Vieillecourt, d\xe9veloppeur web front-end Javascript sp\xe9cialis\xe9 en React. Autodidacte de 24 ans, je suis passionn\xe9 par le d\xe9veloppement web, le design graphique et l'exp\xe9rience utilisateur. "},t.Z=o},1645:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});let i="http://localhost:5000"},2959:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p}});var i=n(5893),s=n(723),r=n(3951),o=n(1664),a=n.n(o),l=n(9583),c=n(5675),d=n.n(c),h=n(1645),u=n(7285),x=n(7294);let m=e=>{let{projet:t}=e,[n,o]=(0,x.useState)("transparent"),c=()=>{window.scrollY>10?o("rgba(18,18,18, 0.98)"):o("transparent")};return(0,x.useEffect)(()=>(window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}),[]),(0,i.jsxs)("div",{className:"main-container",children:[(0,i.jsx)(r.Z,{title:t.name,description:t.fonction}),(0,i.jsx)("div",{className:"btn-container",style:{backgroundColor:n},children:(0,i.jsxs)(a(),{href:"/",id:"goBack-btn",children:[(0,i.jsx)(l.bUI,{style:{transform:"translateY(2px)"},id:"chevronLeft"}),"Revenir \xe0 l","'","accueil"]})}),(0,i.jsxs)(u.E.div,{className:"projet-container",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.2,ease:[0,.71,.2,1.01]},children:[(0,i.jsx)(d(),{src:h.E+"/img/procyon.png",alt:"gradient background",className:"procyon",width:500,height:500}),(0,i.jsx)("h1",{children:t.name}),(0,i.jsx)("h2",{children:t.concept}),(0,i.jsx)(d(),{src:h.E+t.image,alt:t.name,width:1280,height:580,className:"projet-container__miniature",priority:!0}),(0,i.jsxs)("div",{className:"projet-container__tech-logo",children:[(0,i.jsx)(d(),{src:t.logo1,alt:t.name,width:36,height:36}),(0,i.jsx)(d(),{src:t.logo2,alt:t.name,width:36,height:36}),t.logo3&&(0,i.jsx)(d(),{src:t.logo3,alt:t.name,width:36,height:36})]}),(0,i.jsxs)("div",{className:"projet-container__content",children:[(0,i.jsx)("h3",{children:"Fonctionnalit\xe9s du projet"}),(0,i.jsx)("p",{children:t.fonction}),(0,i.jsx)(d(),{src:t.gif_presentation,alt:t.name,className:"gifPresentation",width:1280,height:580,priority:!0}),(0,i.jsx)("h3",{children:"Challenge du projet"}),(0,i.jsx)("p",{children:t.tools})]})]}),(0,i.jsx)(s.Z,{})]})};var p=!0;t.default=m}},function(e){e.O(0,[445,679,774,888,179],function(){return e(e.s=2683)}),_N_E=e.O()}]);