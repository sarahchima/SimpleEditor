(this["webpackJsonpchaeban-project-app"]=this["webpackJsonpchaeban-project-app"]||[]).push([[0],{152:function(e,t,c){},153:function(e,t,c){},314:function(e,t,c){"use strict";c.r(t);var n=c(4),a=c(2),s=c.n(a),r=c(39),i=c.n(r),l=(c(152),c(146)),j=(c(153),c(52)),d=c(29),o=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("nav",{className:"header-nav",children:Object(n.jsx)(d.b,{to:"/",className:"header-title",children:"Chaeban Editor"})})})},b=c(142),h=c.n(b),u=c(141),O=c.n(u);c(94),c(95);var x=function(e){var t=e.date,c=e.theme,a=e.setTheme,s=e.setDate;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Settings "}),Object(n.jsxs)("div",{className:"date-container",children:[Object(n.jsx)("label",{className:"label",children:"Date"}),Object(n.jsx)(h.a,{selected:t,onChange:function(e){return s(e)}})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{className:"label",children:"Theme"}),Object(n.jsx)(O.a,{options:["default","dark","pink","purple","yellow"],value:c,onChange:function(e){return a(e.value)},placeholder:"Select a theme"})]})]})},v=c(51),m=c(145),p=c.n(m);c(312);var f=function(){var e=Object(a.useState)(new Date),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)("default"),l=Object(j.a)(i,2),b=l[0],h=l[1],u=s.a.useState((function(){return v.EditorState.createEmpty()})),O=Object(j.a)(u,2),m=O[0],f=O[1],N=Object(a.useState)(""),g=Object(j.a)(N,2),w=g[0],S=g[1];return Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"editor-body",children:[Object(n.jsx)(o,{}),Object(n.jsx)("main",{children:Object(n.jsxs)("div",{className:"editor-container",children:[Object(n.jsx)("input",{className:"title",value:w,onChange:function(e){return S(e.target.value)},placeholder:"Add a Title"}),Object(n.jsx)(v.Editor,{className:"editorStyle",editorState:m,placeholder:"Let the thoughts flow",onChange:function(e){return f(e)},spellCheck:!0})]})}),Object(n.jsxs)("aside",{className:"side-menu",children:[Object(n.jsx)(x,{date:c,theme:b,setDate:r,setTheme:h}),Object(n.jsx)(d.b,{className:"link",to:{pathname:"/preview",state:{date:c,theme:b,text:p()(Object(v.convertToRaw)(m.getCurrentContent())),title:w}},children:"Preview"})]})]})})})};c(313);var N=function(e){var t=e.location.state;Object(a.useEffect)((function(){return console.log(t)}));var c=t.date.toLocaleDateString(),s=t.text,r=t.theme,i=t.title;return Object(n.jsxs)("div",{className:"preview ".concat(r),children:[Object(n.jsx)(o,{}),Object(n.jsx)("div",{className:"preview-body",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"preview-title",children:""!==i?i:"Untitled"}),Object(n.jsx)("p",{className:"preview-date",children:c}),Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:s},className:"preview-text"})]})}),Object(n.jsx)("div",{className:"preview-links",children:Object(n.jsxs)("div",{children:[Object(n.jsx)(d.b,{to:"/",className:"link",children:"Back to Editor"}),Object(n.jsx)(d.b,{to:"/",className:"link undecorated-link",children:"View on Github"})]})})]})},g=c(10);var w=function(){return Object(n.jsx)(d.a,{children:Object(n.jsxs)(g.c,{children:[Object(n.jsx)(g.a,{path:"/preview",render:function(e){return Object(n.jsx)(N,Object(l.a)({},e))}}),Object(n.jsx)(g.a,{path:"/",children:Object(n.jsx)(f,{})})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,319)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),S()}},[[314,1,2]]]);
//# sourceMappingURL=main.ae29a57f.chunk.js.map