(this["webpackJsonpcchdo-submit"]=this["webpackJsonpcchdo-submit"]||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(16),s=n.n(i),r=(n(73),n(43)),o=n.n(r),l=n(61),d=n(25),u=n(9),j=(n(75),n(76),n(129)),b=n(128),h=n(126),p=n(131),x=n(130),m=n(132),O=n(64),f=n(127),v=n(44),y=n(45),g=n(62),C=n.n(g),_=n(63),w=n.n(_),S=n(1),k="https://cchdo.ucsd.edu/api/v1/cruise/all",D=function(e){e.preventDefault();var t=e.nativeEvent.target,n=new FormData(t);console.log(Array.from(n.entries()))},F=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(S.jsxs)(j.a.Group,{className:"mb-3",controlId:"submitter_email",children:[Object(S.jsx)(j.a.Label,{children:"Select FIles"}),Object(S.jsx)(j.a.Control,{onChange:function(e){var t=e.target;null!==t.files&&c(Array.from(t.files).map((function(e){return e.name})))},name:"file",type:"file",multiple:!0}),Object(S.jsxs)(j.a.Text,{children:["You can select multiple files using your system dialog box. (see how:"," ",Object(S.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://support.apple.com/en-lamr/guide/mac-help/mchlp1378/mac",children:"mac"}),","," ",Object(S.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://nerdschalk.com/how-to-select-multiple-files-on-windows-10-in-2021-7-ways/",children:"windows"}),")"]}),n.length>1&&Object(S.jsx)("ul",{children:n.map((function(e){return Object(S.jsx)("li",{children:e},e)}))})]})},N={preset:"match",tokenize:"full",document:{id:"id",index:["expocode","participants[]:name","collections:woce_lines","collections:groups","collections:programs","collections:oceans","country","ship","startDate","endDate","start_port","end_port","references[]:value"]}},I=function(){var e=Object(a.useState)("notYet"),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)([]),s=Object(u.a)(i,2),r=s[0],f=s[1],g=Object(a.useState)([]),_=Object(u.a)(g,2),D=_[0],F=_[1],I=Object(a.useState)(!1),E=Object(u.a)(I,2),L=E[0],T=E[1],A=Object(a.useState)(new v.Document(N)),G=Object(u.a)(A,2),P=G[0],Y=G[1],B=Object(a.useState)(""),H=Object(u.a)(B,2),J=H[0],R=H[1],U=Object(a.useState)(),q=Object(u.a)(U,2),z=q[0],K=q[1],M=Object(a.useState)(null),Q=Object(u.a)(M,2),V=Q[0],W=Q[1],X=function e(t,n){var a=t.split(/(\s+)/).filter((function(e){return e.trim().length>0}));if(a.length>1)return y.intersection.apply(void 0,Object(d.a)(a.map((function(t){return e(t,n)}))));var c=n.search(t).map((function(e){return e.result}));return y.union.apply(void 0,Object(d.a)(c))},Z=z?r.filter((function(e){return e.id===z}))[0]:void 0;Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams(window.location.search).get("for"),W(t),e.prev=2,e.next=5,fetch(k);case 5:return n=e.sent,e.next=8,n.json();case 8:a=(a=e.sent).sort((function(e,t){return e.startDate>t.startDate?e.startDate===t.startDate?0:-1:-0})),f(a),i=new v.Document(N),a.forEach((function(e){i.add(e)})),Y(i),null!==t&&1===(s=a.filter((function(e){return e.expocode===t}))).length&&K(s[0].id),c("loaded"),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(2),console.error(e.t0),c("loadError");case 22:case"end":return e.stop()}}),e,null,[[2,18]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var $=Object(S.jsxs)(b.a,{variant:"danger",children:["This was a page for ",V,", but no cruise with that Expocode could be found, use the Select Cruise button to select an existing cruise or Clear Cruise to not select anything."]}),ee=Object(S.jsxs)(b.a,{variant:"success",children:["This is a page for ",V,", if you didn't want this, use the Select Cruise button to select a different cruise."]}),te=[{dataField:"df1",isDummyField:!0,text:"Select",formatter:function(e,t,n){return Object(S.jsx)(h.a,{onClick:function(){K(t.id),T(!1),W(null)},children:"Select"})}},{dataField:"expocode",text:"Expocode"},{dataField:"collections.woce_lines",text:"Line",formatter:function(e,t){return 0===e.length?Object(S.jsx)("span",{children:"-"}):Object(S.jsx)("ul",{children:e.map((function(e){return Object(S.jsx)("li",{children:e},e)}))})}},{dataField:"ship",text:"Ship"},{dataField:"country",text:"Country"},{dataField:"startDate",text:"Start Date"},{dataField:"endDate",text:"End Date"},{dataField:"participants",text:"Chi Sci",formatter:function(e,t){var n=e.filter((function(e){return"Chief Scientist"===e.role}));return 0===n.length?Object(S.jsx)("span",{children:"-"}):Object(S.jsx)("ul",{children:n.map((function(e){return Object(S.jsx)("li",{children:e.name},e.name)}))})}}];return Object(S.jsxs)("div",{children:[V&&"loaded"===n&&!z&&$,V&&"loaded"===n&&z&&ee,Object(S.jsxs)("p",{children:["Selected Cruise:"," ",z?"".concat(null===Z||void 0===Z?void 0:Z.expocode," (").concat(null===Z||void 0===Z?void 0:Z.startDate," to ").concat(null===Z||void 0===Z?void 0:Z.endDate," on the ").concat(null===Z||void 0===Z?void 0:Z.ship,")"):"None (this is OK)"]}),Object(S.jsx)("input",{type:"hidden",name:"cruise_id",id:"cruise_id",value:z}),Object(S.jsx)(h.a,{onClick:function(){return T(!L)},variant:"outline-secondary",disabled:"loaded"!==n,children:z?"Change Cruise":{notYet:"Loading cruises...",loadError:"Could not load cruise list",loaded:"Select Cruise"}[n]}),z&&Object(S.jsx)(h.a,{onClick:function(){K(void 0),W(null)},variant:"outline-secondary",children:"Clear Cruise"}),Object(S.jsx)(p.a,{in:L,children:Object(S.jsx)(x.a,{children:Object(S.jsx)(x.a.Body,{children:Object(S.jsxs)(m.a,{gap:1,children:[Object(S.jsx)(O.a,{md:4,children:Object(S.jsx)(j.a.Control,{type:"search",placeholder:"search...",value:J,onChange:function(e){var t,n;R(e.target.value),t=r,n=X(e.target.value,P),F(t.filter((function(e){return n.includes(e.id)})))}})}),Object(S.jsx)("div",{className:"table-responsive-lg",children:Object(S.jsx)(C.a,{keyField:"expocode",data:""===J.trim()?r:D,columns:te,pagination:w()({}),noDataIndication:"No Cruises Found"})})]})})})})]})},E=function(){return Object(S.jsx)("div",{children:Object(S.jsxs)(j.a.Group,{className:"mb-3",controlId:"submission_notes_private",children:[Object(S.jsx)(j.a.Check,{id:"submission_data_type_btl",name:"submission_data_type",value:"bottle",type:"checkbox",label:"bottle data"}),Object(S.jsx)(j.a.Check,{id:"submission_data_type_ctd",name:"submission_data_type",value:"ctd",type:"checkbox",label:"CTD data"}),Object(S.jsx)(j.a.Check,{id:"submission_data_type_raw",name:"submission_data_type",value:"raw",type:"checkbox",label:"raw ctd data"}),Object(S.jsx)(j.a.Check,{id:"submission_data_type_other",name:"submission_data_type",value:"other",type:"checkbox",label:"other"}),Object(S.jsx)(j.a.Text,{children:"select all that apply"})]})})};var L=function(){return Object(S.jsxs)(f.a,{children:[Object(S.jsx)("h1",{children:"CCHDO Submit Page"}),Object(S.jsx)("h2",{children:"Required Information"}),Object(S.jsxs)(j.a,{onSubmit:D,children:[Object(S.jsxs)(j.a.Group,{className:"mb-3",controlId:"submitter_name",children:[Object(S.jsx)(j.a.Label,{children:"Your Name"}),Object(S.jsx)(j.a.Control,{name:"submitter_name",type:"text",placeholder:"Your Name"})]}),Object(S.jsxs)(j.a.Group,{className:"mb-3",controlId:"submitter_email",children:[Object(S.jsx)(j.a.Label,{children:"Your Email"}),Object(S.jsx)(j.a.Control,{name:"submitter_email",type:"email",placeholder:"example@example.edu"})]}),Object(S.jsx)("h2",{children:"Files to Upload"}),Object(S.jsx)(F,{}),Object(S.jsx)("h2",{children:"Optional Questions about uploaded data"}),Object(S.jsx)("h3",{children:"Associate with a cruise?"}),Object(S.jsx)(I,{}),Object(S.jsx)("h3",{children:"Associate with data type?"}),Object(S.jsx)(E,{}),Object(S.jsx)("h3",{children:"Any Notes?"}),Object(S.jsxs)(j.a.Group,{className:"mb-3",controlId:"submission_notes",children:[Object(S.jsx)(j.a.Label,{children:"Public Submission Notes"}),Object(S.jsx)(j.a.Control,{as:"textarea",rows:3}),Object(S.jsxs)(j.a.Text,{children:[" ","Anything else users of the data should know? These notes will appear on cruise pages."]})]}),Object(S.jsxs)(j.a.Group,{className:"mb-3",controlId:"submission_notes_private",children:[Object(S.jsx)(j.a.Label,{children:"Private Submission Notes"}),Object(S.jsx)(j.a.Control,{as:"textarea",rows:3}),Object(S.jsx)(j.a.Text,{children:"Anything else you would like CCHDO staff to know? If data are not intended for public access, please note why here"})]}),Object(S.jsx)("hr",{}),Object(S.jsx)(h.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.getElementById("root")),T()},73:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.ccc03b59.chunk.js.map