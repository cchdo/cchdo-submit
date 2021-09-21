(this["webpackJsonpcchdo-submit"]=this["webpackJsonpcchdo-submit"]||[]).push([[0],{20:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(13),r=c.n(a),i=(c(20),c(10)),o=c.n(i),l=c(14),j=c(6),b=(c(22),c(29)),d=c(30),u=c(28),h=c(0),x="https://cchdo.ucsd.edu/api/v1/cruise/all",p=function(e){e.preventDefault();var t=e.nativeEvent.target,c=new FormData(t);console.log(Array.from(c.entries()))},m=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(h.jsxs)(b.a.Group,{className:"mb-3",controlId:"submitter_email",children:[Object(h.jsx)(b.a.Label,{children:"Select FIles"}),Object(h.jsx)(b.a.Control,{onChange:function(e){var t=e.target;null!==t.files&&s(Array.from(t.files).map((function(e){return e.name})))},name:"file",type:"file",multiple:!0}),Object(h.jsxs)(b.a.Text,{children:["You can select multiple files using your system dialog box. (see how:"," ",Object(h.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://support.apple.com/en-lamr/guide/mac-help/mchlp1378/mac",children:"mac"}),","," ",Object(h.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://nerdschalk.com/how-to-select-multiple-files-on-windows-10-in-2021-7-ways/",children:"windows"}),")"]}),c.length>1&&Object(h.jsx)("ul",{children:c.map((function(e){return Object(h.jsx)("li",{children:e},e)}))})]})},O=function(e){var t=e.cruise,c=t.collections.woce_lines;return 0===c.length?Object(h.jsx)("span",{}):Object(h.jsx)("ul",{children:c.map((function(e){return Object(h.jsx)("li",{children:e},"".concat(t.expocode,"_").concat(e))}))})},f=function(e){var t=e.cruise,c=new Set(["Chief Scientist","Co-Chief Scientist"]),n=t.participants;return 0===(n=n.filter((function(e){return c.has(e.role)}))).length?Object(h.jsx)("span",{}):Object(h.jsx)("ul",{children:n.map((function(e){return Object(h.jsx)("li",{children:e.name},"".concat(t.expocode,"_").concat(e.name))}))})},y=function(){var e=Object(n.useState)("notYet"),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(j.a)(a,2),i=r[0],b=r[1],p=Object(n.useState)(!1),m=Object(j.a)(p,2),y=m[0],_=m[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(x);case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,b(c),s("loaded"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),s("loadError");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var v={notYet:"Loading cruises...",loadError:"Could not load cruise list",loaded:"Select Cruise: (".concat(i.length," cruises)")};return Object(h.jsxs)("div",{children:[Object(h.jsx)(d.a,{onClick:function(){return _(!y)},variant:"outline-secondary",disabled:"loaded"!==c,children:v[c]}),!0===y&&Object(h.jsx)(u.a,{children:Object(h.jsx)("tbody",{children:i.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.expocode}),Object(h.jsx)("td",{children:Object(h.jsx)(O,{cruise:e})}),Object(h.jsx)("td",{children:e.ship}),Object(h.jsx)("td",{children:e.country}),Object(h.jsx)("td",{children:e.startDate}),Object(h.jsx)("td",{children:e.endDate}),Object(h.jsx)("td",{children:Object(h.jsx)(f,{cruise:e})})]})}))})})]})},_=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(b.a.Group,{className:"mb-3",controlId:"submission_notes_private",children:[Object(h.jsx)(b.a.Check,{id:"submission_data_type_btl",name:"submission_data_type",value:"bottle",type:"checkbox",label:"bottle data"}),Object(h.jsx)(b.a.Check,{id:"submission_data_type_ctd",name:"submission_data_type",value:"ctd",type:"checkbox",label:"CTD data"}),Object(h.jsx)(b.a.Check,{id:"submission_data_type_raw",name:"submission_data_type",value:"raw",type:"checkbox",label:"raw ctd data"}),Object(h.jsx)(b.a.Check,{id:"submission_data_type_other",name:"submission_data_type",value:"other",type:"checkbox",label:"other"}),Object(h.jsx)(b.a.Text,{children:"select all that apply"})]})})};var v=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"CCHDO Submit Page"}),Object(h.jsx)("h2",{children:"Required Information"}),Object(h.jsxs)(b.a,{onSubmit:p,children:[Object(h.jsxs)(b.a.Group,{className:"mb-3",controlId:"submitter_name",children:[Object(h.jsx)(b.a.Label,{children:"Your Name"}),Object(h.jsx)(b.a.Control,{name:"submitter_name",type:"text",placeholder:"Your Name"})]}),Object(h.jsxs)(b.a.Group,{className:"mb-3",controlId:"submitter_email",children:[Object(h.jsx)(b.a.Label,{children:"Your Email"}),Object(h.jsx)(b.a.Control,{name:"submitter_email",type:"email",placeholder:"example@example.edu"})]}),Object(h.jsx)("h2",{children:"Files to Upload"}),Object(h.jsx)(m,{}),Object(h.jsx)("h2",{children:"Optional Questions about uploaded data"}),Object(h.jsx)("h3",{children:"Associate with a cruise?"}),Object(h.jsx)(y,{}),Object(h.jsx)("h3",{children:"Associate with data type?"}),Object(h.jsx)(_,{}),Object(h.jsx)("h3",{children:"Any Notes?"}),Object(h.jsxs)(b.a.Group,{className:"mb-3",controlId:"submission_notes",children:[Object(h.jsx)(b.a.Label,{children:"Public Submission Notes"}),Object(h.jsx)(b.a.Control,{as:"textarea",rows:3}),Object(h.jsxs)(b.a.Text,{children:[" ","Anything else users of the data should know? These notes will appear on cruise pages."]})]}),Object(h.jsxs)(b.a.Group,{className:"mb-3",controlId:"submission_notes_private",children:[Object(h.jsx)(b.a.Label,{children:"Private Submission Notes"}),Object(h.jsx)(b.a.Control,{as:"textarea",rows:3}),Object(h.jsx)(b.a.Text,{children:"Anything else you would like CCHDO staff to know? If data are not intended for public access, please note why here"})]}),Object(h.jsx)("hr",{}),Object(h.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"})]})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),w()}},[[26,1,2]]]);
//# sourceMappingURL=main.eca83be7.chunk.js.map