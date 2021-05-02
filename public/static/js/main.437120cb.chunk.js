(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{78:function(e,c,n){},91:function(e,c,n){},92:function(e,c,n){"use strict";n.r(c);var s,t=n(2),a=n.n(t),l=n(63),r=n.n(l),i=(n(78),n(64)),j=n(65),u=n(73),h=n(72),o=n(35),b=n(25),m=n(28),d=n(9),O=n(41),x=n(42),p=n.n(x),g=n(70),_=n.n(g),f=n(4);function N(e){var c=e.launch,n=c.flight_number,s=c.mission_name,t=c.launch_date_local,a=c.launch_success;return Object(f.jsx)("div",{className:"card card-body mb-3",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-md-9",children:[Object(f.jsxs)("h4",{children:["Mission:"," ",Object(f.jsx)("span",{className:p()({"text-success":a,"text-danger":!a}),children:s})]}),Object(f.jsxs)("p",{children:["Date: ",Object(f.jsx)(_.a,{format:"YYYY-MM-DD HH:mm",children:t})]})]}),Object(f.jsx)("div",{className:"col-md-3",children:Object(f.jsx)(m.b,{to:"/launch/".concat(n),className:"btn btn-primary",children:"Launch Details"})})]})})}function y(){return Object(f.jsxs)("div",{className:"my-3",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Success"]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Fail"]})]})}var v,k=Object(b.gql)(s||(s=Object(O.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]))),L=function(){var e=Object(b.useQuery)(k),c=e.loading,n=e.error,s=e.data;return c?Object(f.jsx)("p",{children:"Loading..."}):n?(console.log(n),Object(f.jsx)("p",{children:"Error :("})):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"display-4 my-3",children:"Launches"}),Object(f.jsx)(y,{}),Object(f.jsx)(t.Fragment,{children:s.launches.map((function(e){return Object(f.jsx)(N,{launch:e},e.flight_number)}))})]})},D=Object(b.gql)(v||(v=Object(O.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"])));function F(e){var c=e.match.params.flight_number;c=parseInt(c);var n=Object(b.useQuery)(D,{variables:{flight_number:c}}),s=n.loading,t=n.error,a=n.data;if(s)return Object(f.jsx)("p",{children:"Loading..."});if(t)return console.log(t),Object(f.jsx)("p",{children:"Error :("});var l=a.launch,r=l.mission_name,i=l.launch_year,j=l.launch_success,u=(l.launch_date_local,l.rocket),h=u.rocket_id,o=u.rocket_name,d=u.rocket_type;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h1",{className:"display-4 my-3",children:[Object(f.jsx)("span",{className:"text-dark",children:"Mission"}),": ",r]}),Object(f.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(f.jsxs)("ul",{className:"list-group",children:[Object(f.jsxs)("li",{className:"list-group-item",children:["Flight Number: ",c]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Launch Year: ",i]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Launch Successful:"," ",Object(f.jsx)("span",{className:p()({"text-success":j,"text-danger":!j}),children:j?"Yes":"No"})]})]}),Object(f.jsx)("h4",{className:"my-3",children:"Rocket Details"}),Object(f.jsxs)("ul",{className:"list-group",children:[Object(f.jsxs)("li",{className:"list-group-item",children:["Rocket ID: ",h]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Rocket Name: ",o]}),Object(f.jsxs)("li",{className:"list-group-item",children:["Rocket Type: ",d]})]}),Object(f.jsx)("hr",{}),Object(f.jsx)(m.b,{to:"/",className:"btn btn-secondary",children:"Back"})]})}n(91);var w=n.p+"static/media/logo.9bf807c0.png",C=new b.ApolloClient({uri:"/graphql",cache:new b.InMemoryCache}),I=function(e){Object(u.a)(n,e);var c=Object(h.a)(n);function n(){return Object(i.a)(this,n),c.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsx)(o.ApolloProvider,{client:C,children:Object(f.jsx)(m.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("img",{src:w,alt:"SpaceX",style:{width:200,display:"block",margin:"auto"}}),Object(f.jsx)(d.a,{exact:!0,path:"/",component:L}),Object(f.jsx)(d.a,{exact:!0,path:"/launch/:flight_number",component:F})]})})})}}]),n}(t.Component),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(c){var n=c.getCLS,s=c.getFID,t=c.getFCP,a=c.getLCP,l=c.getTTFB;n(e),s(e),t(e),a(e),l(e)}))};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(I,{})}),document.getElementById("root")),M()}},[[92,1,2]]]);
//# sourceMappingURL=main.437120cb.chunk.js.map