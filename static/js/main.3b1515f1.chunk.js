(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{42:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var i=c(2),n=c(0),a=c.n(n),s=c(20),r=c.n(s),l=(c(42),c(8)),o=c(13),j=c(11),d=c(10),b=c(23),h=c(6),u=c(54),m=c(58),x=c(59),O=c(55),f=c(56);var p=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("footer",{className:"mt-5",children:Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsxs)(O.a,{className:"border-top justify-content-between p-3",children:[Object(i.jsx)(f.a,{className:"p-0",md:3,sm:12,children:"Pritesh K"}),Object(i.jsx)(f.a,{className:"p-0 d-flex justify-content-end",md:3,children:"This site was made by Pritesh"})]})})})})},g=c(57);var y=function(e){return Object(i.jsx)(g.a,{className:"bg-transparent jumbotron-fluid p-0",children:Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(O.a,{className:"justify-content-center py-5",children:Object(i.jsxs)(f.a,{md:8,sm:12,children:[e.title&&Object(i.jsx)("h1",{className:"display-1 font-weight-bolder",children:e.title}),e.subTitle&&Object(i.jsx)("h3",{className:"display-4 font-weight-light",children:e.subTitle}),e.text&&Object(i.jsx)("h3",{className:"lead font-weight-light",children:e.text}),Object(i.jsx)("hr",{})]})})})})},v=c(18),k=c(32);var N=function(e){var t=Object(k.b)({opacity:1,from:{opacity:0}});return Object(i.jsxs)(k.a.div,{className:"art-card-info",style:t,children:[Object(i.jsx)("p",{className:"art-card-title",children:e.title}),Object(i.jsx)("p",{className:"art-card-sub-title",children:e.subTitle})]})};var T=function(e){return Object(i.jsxs)("div",{className:"d-inline-block art-card",onClick:function(t){return e.click(e.item)},children:[Object(i.jsx)("img",{className:"art-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&Object(i.jsx)(N,{title:e.item.title,subTitle:e.item.subTitle})]})},C=c.p+"static/media/fox.10f97450.jpg",S=c.p+"static/media/tomjerry.c181d129.jpg",w=c.p+"static/media/eye.84ece0f5.jpg",A=c.p+"static/media/batman.80f58e3e.jpg",B=c.p+"static/media/scoobydoo.14c461b6.jpg",P=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var c=Object(v.a)(n.state.items);c[e].selected=!c[e].selected,c.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:c})},n.makeCards=function(e){return e.map((function(e){return Object(i.jsx)(T,{item:e,click:function(t){return n.handleCardClick(e.id,t)}},e.id)}))},n.state={items:[{id:0,title:"Tom & Jerry",subTitle:"Art",imgSrc:S,selected:!1},{id:1,title:"Batman",subTitle:"Art",imgSrc:A,selected:!1},{id:2,title:"Scooby Doo",subTitle:"Art",imgSrc:B,selected:!1},{id:3,title:"Fox",subTitle:"Art",imgSrc:C,selected:!1},{id:4,title:"Eye",subTitle:"Art",imgSrc:w,selected:!1}]},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(u.a,{fluid:!0,children:Object(i.jsx)(O.a,{className:"justify-content-around",children:this.makeCards(this.state.items)})})})}}]),c}(n.Component);var I=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(y,{title:e.title,subTitle:e.subTitle,text:e.text}),Object(i.jsx)(P,{})]})};var D=function(e){return Object(i.jsx)(u.a,{fluid:!0,style:{fontSize:25,color:"black"},children:Object(i.jsx)(O.a,{className:"justify-content-center",children:Object(i.jsx)(f.a,{md:8,children:e.children})})})};var F=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)(y,{title:e.title}),Object(i.jsxs)(D,{children:[Object(i.jsx)("p",{children:"Hello, my name is Pritesh. I'm a Computer Engineer with experience in MongoDB, React JS & Spring Boot"}),Object(i.jsx)("p",{children:"I'm constantly learning new things. currently those things include gaining more experience with APIs, MongoDB, React"}),Object(i.jsxs)("p",{children:["For My latest projects, you can checkout ",Object(i.jsx)("a",{href:"https://github.com/Priteshkamde",target:"_blank",rel:"noopener noreferrer",children:"here"})]}),Object(i.jsx)("p",{children:"When I'm not learning something, chances are that I'm Sketching, Swimming or playing Squash :)"})]})]})};var E=function(e){return Object(i.jsxs)(u.a,{fluid:!0,children:[Object(i.jsx)(y,{title:e.title}),Object(i.jsx)(O.a,{className:"justify-content-center",children:Object(i.jsx)(f.a,{md:8,children:Object(i.jsx)("a",{href:"mailto:priteshrocks.pr@gmail.com?subject=Query&body=%3CText%20here%3E",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("p",{className:"lead",children:"Drop a mail "})})})})]})},M=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var i;return Object(l.a)(this,c),(i=t.call(this,e)).state={headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Be Relentless",subTitle:"Arts that make a Difference",text:"Checkout below"},about:{title:"About Me"},contact:{title:"Let's Talk"}},i}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(i.jsx)(b.a,{children:Object(i.jsxs)(u.a,{className:"p-0",fluid:!0,children:[Object(i.jsxs)(m.a,{className:"border-bottom",bg:"transparent",expand:"lg",children:[Object(i.jsx)(m.a.Brand,{className:"",children:"Pritesh K"}),Object(i.jsx)(m.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),Object(i.jsx)(m.a.Collapse,{id:"navbar-toggle",children:Object(i.jsxs)(x.a,{className:"ml-auto",children:[Object(i.jsx)(b.b,{className:"nav-link",to:"/portfolio",children:" Home "}),Object(i.jsx)(b.b,{className:"nav-link",to:"/about",children:" About"}),Object(i.jsx)(b.b,{className:"nav-link",to:"/contact",children:" Contact "})]})})]}),Object(i.jsx)(h.a,{path:"/portfolio",exact:!0,render:function(){return Object(i.jsx)(I,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),Object(i.jsx)(h.a,{path:"/about",render:function(){return Object(i.jsx)(F,{title:e.state.about.title})}}),Object(i.jsx)(h.a,{path:"/contact",render:function(){return Object(i.jsx)(E,{title:e.state.contact.title})}}),Object(i.jsx)(p,{})]})})}}]),c}(n.Component),J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))};c(51);r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root")),J()}},[[52,1,2]]]);
//# sourceMappingURL=main.3b1515f1.chunk.js.map