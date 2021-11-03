(this["webpackJsonpcchdo-submit"]=this["webpackJsonpcchdo-submit"]||[]).push([[0],{125:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(16),i=n.n(s),r=(n(74),n(9)),o=(n(75),n(129)),l=n(127),u=n(126),d=n(25),j=n(43),b=n.n(j),h=n(61),p=(n(77),n(128)),x=n(131),m=n(130),O=n(132),f=n(67),v=n(44),y=n(45),g=n(62),C=n.n(g),_=n(63),w=n.n(_),S=n(1),k="https://cchdo.ucsd.edu/api/v1/cruise/all",D={preset:"match",tokenize:"full",document:{id:"id",index:["expocode","participants[]:name","collections:woce_lines","collections:groups","collections:programs","collections:oceans","country","ship","startDate","endDate","start_port","end_port","references[]:value","references[]:organization"]}},F=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(r.a)(s,2),l=i[0],j=i[1],g=Object(a.useState)("notYet"),_=Object(r.a)(g,2),F=_[0],N=_[1],I=Object(a.useState)([]),E=Object(r.a)(I,2),L=E[0],T=E[1],A=Object(a.useState)(new v.Document(D)),G=Object(r.a)(A,2),P=G[0],Y=G[1],B=Object(a.useState)(""),z=Object(r.a)(B,2),H=z[0],J=z[1],R=Object(a.useState)([]),U=Object(r.a)(R,2),q=U[0],K=U[1],M=Object(a.useState)(),Q=Object(r.a)(M,2),V=Q[0],W=Q[1];Object(a.useEffect)((function(){function e(){return(e=Object(h.a)(b.a.mark((function e(){var t,n,a,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams(window.location.search).get("for"),c(t),e.prev=2,e.next=5,fetch(k);case 5:return n=e.sent,e.next=8,n.json();case 8:a=(a=e.sent).sort((function(e,t){return e.startDate>t.startDate?e.startDate===t.startDate?0:-1:-0})),T(a),s=new v.Document(D),a.forEach((function(e){s.add(e)})),Y(s),null!==t&&1===(i=a.filter((function(e){return e.expocode===t}))).length&&W(i[0].id),N("loaded"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),console.error(e.t0),N("loadError");case 22:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var X=function e(t,n){var a=t.split(/(\s+)/).filter((function(e){return e.trim().length>0}));if(a.length>1)return y.intersection.apply(void 0,Object(d.a)(a.map((function(t){return e(t,n)}))));var c=n.search(t).map((function(e){return e.result}));return y.union.apply(void 0,Object(d.a)(c))},Z=V?L.filter((function(e){return e.id===V}))[0]:void 0,$=Object(S.jsxs)(p.a,{variant:"danger",children:["This was a page for ",n,", but no cruise with that Expocode could be found, use the Select Cruise button to select an existing cruise. Or ignore this message to not select a cruise."]}),ee=Object(S.jsxs)(p.a,{variant:"success",children:["This is a page for ",n,", if you didn't want this, use the Select Cruise button to select a different cruise or Clear Cruise to not select anything."]}),te=[{dataField:"df1",isDummyField:!0,text:"Select",formatter:function(e,t,n){return Object(S.jsx)(u.a,{onClick:function(){W(t.id),j(!1),c(null)},children:"Select"})}},{dataField:"expocode",text:"Expocode"},{dataField:"collections.woce_lines",text:"Line",formatter:function(e,t){return 0===e.length?Object(S.jsx)("span",{children:"-"}):Object(S.jsx)("ul",{children:e.map((function(e){return Object(S.jsx)("li",{children:e},e)}))})}},{dataField:"ship",text:"Ship"},{dataField:"country",text:"Country"},{dataField:"startDate",text:"Start Date"},{dataField:"endDate",text:"End Date"},{dataField:"participants",text:"Chi Sci",formatter:function(e,t){var n=e.filter((function(e){return"Chief Scientist"===e.role}));return 0===n.length?Object(S.jsx)("span",{children:"-"}):Object(S.jsx)("ul",{children:n.map((function(e){return Object(S.jsx)("li",{children:e.name},e.name)}))})}}];return Object(S.jsxs)("div",{children:[Object(S.jsx)("input",{type:"hidden",name:"cruise_id",id:"cruise_id",value:V}),n&&"loaded"===F&&!V&&$,n&&"loaded"===F&&V&&ee,Object(S.jsxs)("p",{children:["Selected Cruise:"," ",V?"".concat(null===Z||void 0===Z?void 0:Z.expocode," (").concat(null===Z||void 0===Z?void 0:Z.startDate," to ").concat(null===Z||void 0===Z?void 0:Z.endDate," on the ").concat(null===Z||void 0===Z?void 0:Z.ship,")"):"None (this is OK)"]}),Object(S.jsx)(u.a,{onClick:function(){return j(!l)},variant:"outline-secondary",disabled:"loaded"!==F,children:V?"Change Cruise":{notYet:"Loading cruises...",loadError:"Could not load cruise list",loaded:"Select Cruise"}[F]}),V&&Object(S.jsx)(u.a,{onClick:function(){W(void 0),c(null)},variant:"outline-secondary",children:"Clear Cruise"}),Object(S.jsx)(x.a,{in:l,children:Object(S.jsx)(m.a,{children:Object(S.jsx)(m.a.Body,{children:Object(S.jsxs)(O.a,{gap:1,children:[Object(S.jsx)(f.a,{md:4,children:Object(S.jsx)(o.a.Control,{type:"search",placeholder:"search...",value:H,onChange:function(e){var t,n;J(e.target.value),t=L,n=X(e.target.value,P),K(t.filter((function(e){return n.includes(e.id)})))}})}),Object(S.jsx)("div",{className:"table-responsive-lg",children:Object(S.jsx)(C.a,{keyField:"expocode",data:""===H.trim()?L:q,columns:te,pagination:w()({}),noDataIndication:"No Cruises Found"})})]})})})})]})},N=function(e){e.preventDefault();var t=e.nativeEvent.target,n=new FormData(t);console.log(Array.from(n.entries()))},I=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(S.jsxs)(o.a.Group,{className:"mb-3",controlId:"submitter_email",children:[Object(S.jsx)(o.a.Label,{children:"Select FIles"}),Object(S.jsx)(o.a.Control,{onChange:function(e){var t=e.target;null!==t.files&&c(Array.from(t.files).map((function(e){return e.name})))},name:"file",type:"file",multiple:!0}),Object(S.jsxs)(o.a.Text,{children:["You can select multiple files using your system dialog box. (see how:"," ",Object(S.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://support.apple.com/en-lamr/guide/mac-help/mchlp1378/mac",children:"mac"}),","," ",Object(S.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://nerdschalk.com/how-to-select-multiple-files-on-windows-10-in-2021-7-ways/",children:"windows"}),")"]}),n.length>1&&Object(S.jsx)("ul",{children:n.map((function(e){return Object(S.jsx)("li",{children:e},e)}))})]})},E=function(){return Object(S.jsx)("div",{children:Object(S.jsxs)(o.a.Group,{className:"mb-3",controlId:"submission_notes_private",children:[Object(S.jsx)(o.a.Check,{id:"submission_data_type_btl",name:"submission_data_type",value:"bottle",type:"checkbox",label:"bottle data"}),Object(S.jsx)(o.a.Check,{id:"submission_data_type_ctd",name:"submission_data_type",value:"ctd",type:"checkbox",label:"CTD data"}),Object(S.jsx)(o.a.Check,{id:"submission_data_type_raw",name:"submission_data_type",value:"raw",type:"checkbox",label:"raw ctd data"}),Object(S.jsx)(o.a.Check,{id:"submission_data_type_other",name:"submission_data_type",value:"other",type:"checkbox",label:"other"}),Object(S.jsx)(o.a.Text,{children:"select all that apply"})]})})};var L=function(){return Object(S.jsxs)(l.a,{children:[Object(S.jsx)("h1",{children:"CCHDO Submit Page"}),Object(S.jsx)("h2",{children:"Required Information"}),Object(S.jsxs)(o.a,{onSubmit:N,children:[Object(S.jsxs)(o.a.Group,{className:"mb-3",controlId:"submitter_name",children:[Object(S.jsx)(o.a.Label,{children:"Your Name"}),Object(S.jsx)(o.a.Control,{name:"submitter_name",type:"text",placeholder:"Your Name"})]}),Object(S.jsxs)(o.a.Group,{className:"mb-3",controlId:"submitter_email",children:[Object(S.jsx)(o.a.Label,{children:"Your Email"}),Object(S.jsx)(o.a.Control,{name:"submitter_email",type:"email",placeholder:"example@example.edu"})]}),Object(S.jsx)("h2",{children:"Files to Upload"}),Object(S.jsx)(I,{}),Object(S.jsx)("h2",{children:"Optional Questions about uploaded data"}),Object(S.jsx)("h3",{children:"Associate with a cruise?"}),Object(S.jsx)(F,{}),Object(S.jsx)("h3",{children:"Associate with data type?"}),Object(S.jsx)(E,{}),Object(S.jsx)("h3",{children:"Any Notes?"}),Object(S.jsxs)(o.a.Group,{className:"mb-3",controlId:"submission_notes",children:[Object(S.jsx)(o.a.Label,{children:"Public Submission Notes"}),Object(S.jsx)(o.a.Control,{as:"textarea",rows:3}),Object(S.jsxs)(o.a.Text,{children:[" ","Anything else users of the data should know? These notes will appear on cruise pages."]})]}),Object(S.jsxs)(o.a.Group,{className:"mb-3",controlId:"submission_notes_private",children:[Object(S.jsx)(o.a.Label,{children:"Private Submission Notes"}),Object(S.jsx)(o.a.Control,{as:"textarea",rows:3}),Object(S.jsx)(o.a.Text,{children:"Anything else you would like CCHDO staff to know? If data are not intended for public access, please note why here"})]}),Object(S.jsx)("hr",{}),Object(S.jsx)(u.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.getElementById("root")),T()},74:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.5323c6aa.chunk.js.map