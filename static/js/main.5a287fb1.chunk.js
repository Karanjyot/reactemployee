(this.webpackJsonpreactemployee=this.webpackJsonpreactemployee||[]).push([[0],{20:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a.n(n),l=a(0),c=a.n(l),o=a(14),s=a(15),u=a(18),m=a(19);a(2),a(16),a(3),a(17);var i=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"row"},e.id),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.age))))};var h=function(e){var t=e.filteredEmployees.map((function(e,t){return c.a.createElement(i,{key:t,id:e.id,name:e.name,age:e.age})}));return c.a.createElement("div",null,c.a.createElement("table",{class:"table"},c.a.createElement("thead",{class:"thead-dark"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Name"),c.a.createElement("th",{scope:"col"},"Age"))),t))};var p=function(e){return c.a.createElement("div",null,c.a.createElement("input",{onChange:e.handleInput,type:"text",placeholder:"search"}))},d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:[{id:1,name:"Lebron",age:"40"},{id:2,name:"Jordan",age:"50"},{id:3,name:"Kawhi",age:"200"}],searchUser:""},e.handleInput=function(t){e.setState({searchUser:t.target.value})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.state.employees.filter((function(t){return t.name.toLowerCase().includes(e.state.searchUser.toLowerCase())}));return c.a.createElement("div",null,c.a.createElement("h1",null,"Employees"),c.a.createElement(p,{handleInput:this.handleInput}),c.a.createElement(h,{filteredEmployees:t,sortBy:this.sortBy}))}}]),a}(l.Component);r.a.render(c.a.createElement(d,null),document.querySelector("#root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5a287fb1.chunk.js.map