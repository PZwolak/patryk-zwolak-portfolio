(this["webpackJsonppatryk-zwolak-portfolio"]=this["webpackJsonppatryk-zwolak-portfolio"]||[]).push([[0],{21:function(e,a,t){},22:function(e,a,t){},29:function(e,a,t){e.exports=t(45)},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(24),o=t.n(r),l=(t(34),t(35),t(36),t(7)),c=t(8),m=t(10),s=t(9),d=t(11),u=t(13),h=t(4),_=t(25),p=t.n(_),b=t(26),g=t.n(b),E=(t(37),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){new g.a(document.querySelector(".parallax-background"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"parallax-background"},i.a.createElement("div",{className:"parallax-background__elements","data-depth":"1","data-invert-x":!0,"data-invert-y":!0},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--first"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.9"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--second"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.8"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--third"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.7"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--fourth"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.6"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--fifth"})),i.a.createElement("div",{className:"parallax-background__elements","data-depth":"0.5"},i.a.createElement("div",{className:"parallax-background__element parallax-background__element--sixth"})))}}]),a}(n.Component)),v=(t(38),function(e){var a=["header__hamburger-icon"];return e.hamburgerActive&&a.push("header__hamburger-active"),i.a.createElement("div",{className:"header__hamburger"},i.a.createElement("div",{className:a.join(" "),onClick:e.handleHamburger},i.a.createElement("svg",{width:"1000px",height:"1000px"},i.a.createElement("path",{className:"header__hamburger-path1",d:"M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"}),i.a.createElement("path",{className:"header__hamburger-path2",d:"M 300 500 L 700 500"}),i.a.createElement("path",{className:"header__hamburger-path3",d:"M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"})),i.a.createElement("button",{className:"header__hamburger-icon-button"})))}),f=function(e){var a=["header__info"];return e.hamburgerActive&&a.push("header__info--active"),i.a.createElement("div",{className:a.join(" ")},i.a.createElement("div",{className:"header__info-inner"}))},y=function(e){var a=["header__empty"];return e.firstElement&&a.push("header__empty--first-element"),e.hamburgerActive&&a.push("header__empty--active"),i.a.createElement("div",{className:a.join(" ")},i.a.createElement("div",{className:"header__empty-inner"}))},x=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={hamburgerActive:!1},t.handleHamburger=function(e){e.preventDefault(),t.setState({hamburgerActive:!t.state.hamburgerActive})},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=["header"];return this.state.hamburgerActive?e.push("header--active"):(e.push("header--deactive"),setTimeout((function(){document.querySelector("header.header").classList.remove("header--deactive")}),700)),i.a.createElement("header",{className:e.join(" ")},i.a.createElement(y,{hamburgerActive:this.state.hamburgerActive,firstElement:!0}),i.a.createElement(v,{handleHamburger:this.handleHamburger,hamburgerActive:this.state.hamburgerActive}),i.a.createElement(f,{hamburgerActive:this.state.hamburgerActive}),i.a.createElement(y,{hamburgerActive:this.state.hamburgerActive}))}}]),a}(n.Component),k=function(e){var a=e.sideData;return i.a.createElement("div",{className:"main-section__left-side"},i.a.createElement("div",{className:"main-section__header"},0===a.id?i.a.createElement("h1",{className:"fs-45 fw-600 ls-05"},a.header):i.a.createElement("h2",{className:"fs-45 fw-600 ls-05"},a.header)),i.a.createElement("div",{className:"main-section__geometry-elements"},i.a.createElement("div",{className:"main-section__geometry-element main-section__geometry-element--first"}),i.a.createElement("div",{className:"main-section__geometry-element main-section__geometry-element--second"}),i.a.createElement("div",{className:"main-section__geometry-element main-section__geometry-element--third"})),i.a.createElement("div",{className:"main-section__subheader"},a.subheader?i.a.createElement("p",{className:"subheader fw-200"},a.subheader):i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{className:"fw-200",href:"mailto:".concat(a.email)},i.a.createElement("span",null,a.email)),i.a.createElement("a",{className:"fw-200",href:"tel:".concat(a.phone)},i.a.createElement("span",null,a.phone)),i.a.createElement("a",{className:"socials socials--linkedin",href:a.linkedin,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",null)),i.a.createElement("a",{className:"socials socials--facebook ",href:a.facebook,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",null)))))},N=function(e){var a,t=e.sideData;return t.textOnBanner&&(a=t.textOnBanner.map((function(e,a){return i.a.createElement("div",{key:e.line,className:"main-section__right-side-inner-description-element"},i.a.createElement("h3",{className:"main-section__right-side-inner-description-element--number-".concat(a," fw-500")},e.line))}))),i.a.createElement("div",{className:"main-section__right-side"},i.a.createElement("div",{className:"main-section__right-side-inner"},i.a.createElement("div",{className:"main-section__right-side-inner-background-img"},i.a.createElement("div",{className:"main-section__right-side-inner-background-mask main-section__right-side-inner-background-mask--color-11"}),i.a.createElement("div",{className:"main-section__right-side-inner-background-mask main-section__right-side-inner-background-mask--color-5"}),i.a.createElement("div",{className:"main-section__right-side-inner-background-mask"}),i.a.createElement("div",{className:"main-section__right-side-inner-background-img main-section__right-side-inner-background-img--".concat(t.id)})),i.a.createElement("div",{className:"main-section__right-side-inner-number"},i.a.createElement("span",{className:"numbers"},"0"+(t.id+1))),i.a.createElement("div",{className:"main-section__right-side-inner-description"},a)))},w=Object(h.f)((function(e){var a=e.handleRightSide,t=e.sideData;return i.a.createElement("div",{className:"main-section__element-button primary-button"},i.a.createElement("span",null),i.a.createElement("div",{className:"mask"},i.a.createElement("div",{className:"ring"},i.a.createElement(u.b,{to:t.url,onClick:a}))))})),T=function(e){var a=e.sectionData,t=e.handleRightSide,n="section main-section__element main-section__".concat(a.sectionClass);return i.a.createElement("div",{className:n},i.a.createElement(k,{sideData:a.sectionLeftData}),i.a.createElement(N,{sideData:a.sectionRightData}),i.a.createElement(w,{handleRightSide:t,sideData:a.sectionLeftData}))},D=(t(21),t(22),t(23),function(e){var a=e.displaySections,t=e.section,n=a.filter((function(e){return"section main-section__element main-section__".concat(a.sectionClass),e.key===t}));return console.log(n[0]),i.a.createElement("div",null,i.a.createElement("div",{className:"main-section main-section-subpage"},n),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),"v",i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"),i.a.createElement("h1",null,"Elo"))}),A=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={rightSideActive:!1},t.sectionsData={},t.handleRightSide=function(){setTimeout((function(){window.location.reload(!1)}),10)},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){new p.a(".main-section:not(.main-section-subpage)",{navigation:!0})}},{key:"render",value:function(){var e=this,a=this.props.data.map((function(a){return i.a.createElement(T,{key:a.sectionClass,sectionData:a,handleRightSide:e.handleRightSide})}));return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,null,i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/",exact:!0,component:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,null),i.a.createElement(x,null),i.a.createElement("div",{className:"main-section"},a))}}),i.a.createElement(h.a,{path:"/about-me"},i.a.createElement(D,{displaySections:a,section:"about-me"})))))}}]),a}(n.Component);A.defaultProps={data:[{sectionClass:"start-page",sectionLeftData:{id:0,header:"Patryk Zwolak",subheader:"Front-end Developer",url:"/about-me"},sectionRightData:{id:0,textOnBanner:[{line:"I am person who:"},{line:"1. Belive that everything is possible"},{line:"2. Learns and develops constantly"},{line:"3. Never give up because... (read point no 1)"}]}},{sectionClass:"about-me",sectionLeftData:{id:1,header:"About me",subheader:"Some words about me",url:"/about-me"},sectionRightData:{id:1}},{sectionClass:"resume",sectionLeftData:{id:2,header:"Curiculum Vitae",subheader:"Check my CV and e-CV in 2 language version"},sectionRightData:{id:2}},{sectionClass:"projects",sectionLeftData:{id:3,header:"Best Projects",subheader:"Greatest and best projects in many technologies"},sectionRightData:{id:3}},{sectionClass:"get-in-touch",sectionLeftData:{id:4,header:"Get In Touch",email:"p.zwolak.93@gmail.com",phone:"+48798630903",linkedin:"https://www.linkedin.com/in/patryk-zwolak-5960a8164/",facebook:"https://www.facebook.com/patryk.zwolak.58"},sectionRightData:{id:4}}]};var j=A,C=(t(14),t(47));document.onreadystatechange=function(){if("complete"===document.readyState&&document.querySelectorAll(".main-section:not(.main-section-subpage)").length>0){var e=!0;C.b.fromTo(".active .main-section__header",{x:-1e3},{x:0,duration:1,delay:.5,ease:"expo.out"}),C.b.fromTo(".active .main-section__geometry-element--first",{x:-1e3},{x:0,duration:1,delay:.6,ease:"expo.out"}),C.b.fromTo(".active .main-section__geometry-element--second",{x:-1e3},{x:0,duration:1,delay:.7,ease:"expo.out"}),C.b.fromTo(".active .main-section__geometry-element--third",{x:-1e3},{x:0,duration:1,delay:.8,ease:"expo.out"}),C.b.fromTo(".active .main-section__subheader",{x:-1e3},{x:0,duration:1,delay:1,ease:"expo.out"}),C.b.fromTo(".active .main-section__right-side-inner-number",{y:500},{y:0,duration:1,delay:1.2,ease:"expo.out"}),C.b.fromTo(".active .main-section__element-button.primary-button",{x:500},{x:0,duration:1,delay:1.4,ease:"expo.out"}),C.b.fromTo(".active .main-section__right-side-inner-background-img",{y:-2e3},{y:0,duration:.5,delay:.4,ease:"expo.out"}),C.b.fromTo(".active .main-section__right-side-inner-description",{opacity:0},{duration:.5,delay:1.5,opacity:1}),C.b.fromTo(".active .main-section__right-side-inner-background-mask--color-5",{x:0},{x:1e3,duration:2,delay:1,ease:"expo.out"}),C.b.fromTo(".active .main-section__right-side-inner-background-mask--color-11",{x:0},{x:1e3,duration:1.2,delay:1.2,ease:"expo.out"});setTimeout((function(){}),1400),window.addEventListener("wheel",(function(){!0===e&&(document.querySelector(".main-section__element.active:not(.fp-completely)")&&(C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__header",{x:-1e3},{x:0,duration:1,delay:.5,ease:"expo.out"}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__geometry-element--first",{x:-1e3},{x:0,duration:1,delay:.6,ease:"expo.out"}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__geometry-element--second",{x:-1e3},{x:0,duration:1,delay:.7,ease:"expo.out"}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__geometry-element--third",{x:-1e3},{x:0,duration:1,delay:.8,ease:"expo.out"}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__subheader",{x:-1e3},{x:0,duration:1,delay:1,ease:"expo.out"}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-number",{y:500},{y:0,duration:1,delay:1.2,ease:"expo.out"}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__element-button.primary-button",{x:500},{x:0,duration:1,delay:1.4,ease:"expo.out"}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-background-img",{y:-2e3},{y:0,duration:.5,delay:.4,ease:"expo.out"}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-description",{opacity:0},{duration:.5,delay:1.5,opacity:1}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-background-mask--color-5",{x:0},{x:1e3,duration:2,delay:1,ease:"expo.out"}),C.b.fromTo(".main-section__element.active:not(.fp-completely) .main-section__right-side-inner-background-mask--color-11",{x:0},{x:1e3,duration:1.2,delay:1.2,ease:"expo.out"})),e=!e,setTimeout((function(){e=!0}),1e3))}))}},o.a.render(i.a.createElement(j,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.e53c9055.chunk.js.map