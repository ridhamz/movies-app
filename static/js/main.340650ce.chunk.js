(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{47:function(e,t,a){e.exports=a(84)},52:function(e,t,a){},81:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),s=a(8),i=(a(52),a(3)),l=a(4),u=a(6),m=a(5),p=a(16),d=a(31),v=a(2),h=a.n(v),f=a(11),b=function(e){var t=e.items,a=e.textProperty,n=e.valueProperty,o=e.selectedItem,c=e.onItemSelect;return r.a.createElement("ul",{className:"pagination"},t.map((function(e){return r.a.createElement("li",{key:e[n],className:e===o?"page-item  active":"page-item "},r.a.createElement("a",{onClick:function(){return c(e)},className:"page-link"},e[a]))})))},g=a(17),y=a.n(g),k=a(1),E=a.n(k),w=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,o=e.onPageChange,c=Math.ceil(t/a);if(1===c)return null;var s=y.a.range(1,c+1);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},s.map((function(e){return r.a.createElement("li",{key:e,className:e===n?"page-item active":"page-item"},r.a.createElement("a",{onClick:function(){return o(e)},className:"page-link"},e))}))))};w.prototype={itemsCount:E.a.number.isRequired,pageSize:E.a.number.isRequired,currentPage:E.a.number.isRequired,onPageChange:E.a.func.isRequired};var j=w,O=a(19),S=a.n(O);var C={init:function(){},log:function(e){console.error(e)}},x=a(9);S.a.defaults.baseURL="https://cors-anywhere.herokuapp.com/https://mz-movies-node-api.herokuapp.com/api",S.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(C.log(e),x.b.error("An unexpected error occurrred.")),Promise.reject(e)}));var N={get:S.a.get,post:S.a.post,put:S.a.put,delete:S.a.delete,setJwt:function(e){S.a.defaults.headers.common["x-auth-token"]=e}};function I(e){return"".concat("/movies","/").concat(e)}function P(e){return N.get(I(e))}function R(e){return N.delete(I(e))}function _(e){if(e._id){var t=Object(p.a)({},e);return delete t._id,N.put(I(e._id),t)}return N.post("/movies",e)}function A(){return N.get("/genres")}function M(e,t,a){var n=(t-1)*a;return y()(e).slice(n).take(a).value()}var q=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),r.a.createElement("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).raiseSort=function(t){var a=Object(p.a)({},e.props.sortColumn);a.path===t?a.order="asc"===a.order?"desc":"asc":(a.path=t,a.order="asc"),e.props.onSort(a)},e.renderSortIcon=function(t){var a=e.props.sortColumn;return t.path!==a.path?null:"asc"===a.order?r.a.createElement("i",{className:"fa fa-sort-asc"}):r.a.createElement("i",{className:"fa fa-sort-desc"})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("thead",null,r.a.createElement("tr",null,this.props.columns.map((function(t,a){return r.a.createElement("th",{style:{cursor:"pointer"},key:a,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.renderSortIcon(t))})),r.a.createElement("th",null)))}}]),a}(n.Component),L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).renderCell=function(e,t){return t.content?t.content(e):y.a.get(e,t.path)},e.createKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,n=t.columns;return r.a.createElement("tbody",null,a.map((function(t){return r.a.createElement("tr",{key:t._id},n.map((function(a){return r.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))})))})))}}]),a}(n.Component),G=function(e){var t=e.columns,a=e.sortColumn,n=e.onSort,o=e.movies;return r.a.createElement("table",{className:"table"},r.a.createElement(D,{columns:t,sortColumn:a,onSort:n}),r.a.createElement(L,{columns:t,data:o}))},T=a(43),B=a.n(T);function z(e,t){return F.apply(this,arguments)}function F(){return(F=Object(f.a)(h.a.mark((function e(t,a){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post("/auth",{email:t,password:a});case 2:n=e.sent,r=n.data,localStorage.setItem("token",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){try{var e=localStorage.getItem("token");return B()(e)}catch(t){return null}}function Q(e){localStorage.setItem("token",e)}N.setJwt(localStorage.getItem("token"));var W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return r.a.createElement(s.b,{to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{key:"like",content:function(t){return r.a.createElement(q,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}];var n=U();return n&&n.isAdmin&&e.columns.push({key:"delete",content:function(t){return r.a.createElement("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm"},"delete")}}),e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.sortColumn,n=e.onSort;return r.a.createElement(G,{movies:t,sortColumn:a,onSort:n,columns:this.columns})}}]),a}(n.Component),J=function(e){var t=e.value,a=e.onChange;return r.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})},K=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],genres:[],currentPage:1,pageSize:4,selectedGenre:null,searchQuery:"",sortColumn:{path:"title",order:"asc"}},e.handleDelete=function(){var t=Object(f.a)(h.a.mark((function t(a){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.movies,r=n.filter((function(e){return e._id!==a._id})),e.setState({movies:r}),t.prev=3,t.next=6,R(a._id);case 6:Object(x.b)("Movie deleted successfully"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&x.b.error("This movie has already been deleted"),e.setState({movies:n});case 13:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}(),e.handleLike=function(t){var a=Object(d.a)(e.state.movies),n=a.indexOf(t);a[n]=Object(p.a)({},a[n]),a[n].liked=!a[n].liked,e.setState({movies:a})},e.handlePageChange=function(t){e.setState({currentPage:t})},e.handleGenreSelect=function(t){e.setState({selectedGenre:t,currentPage:1,searchQuery:""})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedGenre:null,currentPage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPageData=function(){var t=e.state,a=t.pageSize,n=t.currentPage,r=t.movies,o=t.selectedGenre,c=t.searchQuery,s=t.sortColumn,i=r;c?i=r.filter((function(e){return e.title.toLowerCase().startsWith(c.toLowerCase())})):o&&o._id&&(i=r.filter((function(e){return e.genre._id===o._id})));var l=M(y.a.orderBy(i,[s.path],[s.order]),n,a);return{totalCount:i.length,data:l}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return t=e.sent,a=t.data,n=[{name:"All",_id:""}].concat(Object(d.a)(a)),e.next=7,N.get("/movies");case 7:r=e.sent,o=r.data,this.setState({genres:n,movies:o});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.user,t=this.state.movies.length,a=this.state,n=a.pageSize,o=a.currentPage,c=a.sortColumn,i=a.searchQuery;if(0===t)return r.a.createElement("p",null,"There are no movies in the database.");var l=this.getPageData(),u=l.totalCount,m=l.data;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(b,{items:this.state.genres,textProperty:"name",valueProperty:"_id",selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect}),e&&r.a.createElement(s.b,{to:"/movies/new",className:"btn btn-primary btn-sm",style:{marginBottom:20}},"New Movie"),r.a.createElement("p",null,"Showing ",u," movies in the database."),r.a.createElement(J,{value:i,onChange:this.handleSearch}),r.a.createElement(W,{movies:m,sortColumn:c,onDelete:this.handleDelete,onLike:this.handleLike,onSort:this.handleSort}),r.a.createElement(j,{itemsCount:u,pageSize:n,currentPage:o,onPageChange:this.handlePageChange})))}}]),a}(n.Component),V=a(18),$=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Rentals")}}]),a}(n.Component),H=function(){return r.a.createElement("h1",null,"Customers")},X=function(){return r.a.createElement("h1",null,"Not Found...")},Y=a(10),Z=a.n(Y),ee=a(24),te=a(46),ae=a(22),ne=function(e){var t=e.name,a=e.label,n=e.error,o=Object(ae.a)(e,["name","label","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",Object.assign({},o,{id:t,name:t,className:"form-control"})),n&&r.a.createElement("div",{className:"alert alert-danger"},n))},re=function(e){var t=e.name,a=e.label,n=e.options,o=e.error,c=Object(ae.a)(e,["name","label","options","error"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("select",Object.assign({name:t,id:t},c,{className:"form-control"}),r.a.createElement("option",{value:""}),n.map((function(e){return r.a.createElement("option",{key:e._id,value:e._id},e.name)}))),o&&r.a.createElement("div",{className:"aler alert-danger"},o))},oe=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{},errors:{}},e.validate=function(){var t=Z.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,n={},r=Object(te.a)(t.details);try{for(r.s();!(a=r.n()).done;){var o=a.value;n[o.path[0]]=o.message}}catch(c){r.e(c)}finally{r.f()}return n},e.validateProperty=function(t){var a=t.name,n=t.value,r=Object(ee.a)({},a,n),o=Object(ee.a)({},a,e.schema[a]),c=Z.a.validate(r,o).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,n=Object(p.a)({},e.state.errors),r=e.validateProperty(a);r?n[a.name]=r:delete n[a.name];var o=Object(p.a)({},e.state.data);o[a.name]=a.value,e.setState({data:o,errors:n})},e}return Object(l.a)(a,[{key:"renderButton",value:function(e){return r.a.createElement("button",{disabled:this.validate(),className:"btn btn-primary"},e)}},{key:"renderSelect",value:function(e,t,a){var n=this.state,o=n.data,c=n.errors;return r.a.createElement(re,{name:e,value:o[e],label:t,options:a,onChange:this.handleChange,error:c[e]})}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=this.state,o=n.data,c=n.errors;return r.a.createElement(ne,{type:a,name:e,value:o[e],label:t,onChange:this.handleChange,error:c[e]})}}]),a}(n.Component),ce=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:Z.a.string(),title:Z.a.string().required().label("Title"),genreId:Z.a.string().required().label("Genre"),numberInStock:Z.a.number().required().min(0).max(100).label("Number in stock"),dailyRentalRate:Z.a.number().required().min(0).max(10).label("Daily Rental Rate")},e.doSubmit=Object(f.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.data,t.prev=1,t.next=4,_(a);case 4:Object(x.b)("Done with successfully"),e.props.history.push("/movies"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),x.b.error(t.t0.response.data);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e}return Object(l.a)(a,[{key:"populateGenre",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,a=t.data,this.setState({genres:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"populateMovie",value:function(){var e=Object(f.a)(h.a.mark((function e(){var t,a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,P(t);case 6:a=e.sent,n=a.data,this.setState({data:this.mapTopViewModel(n)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenre();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapTopViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Movie Form"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("title","Title","text"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate","number"),this.renderButton("Save")))}}]),a}(oe),se=function(e){var t=e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement(s.b,{className:"navbar-brand btn  btn-sm m-0",to:"/"},"MoviesApp"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,{className:"nav-item nav-link",to:"/movies"},"Movies")),t&&r.a.createElement(s.c,{className:"nav-item nav-link",to:"/logout"},"Logout"),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.c,{className:"nav-item nav-link",to:"/login"},"Login"),r.a.createElement(s.c,{className:"nav-item nav-link",to:"/register"},"Register")))))},ie=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:""},errors:{}},e.schema={username:Z.a.string().required().label("Username"),password:Z.a.string().required().label("Password")},e.doSubmit=Object(f.a)(h.a.mark((function t(){var a,n,r,o,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.data,n=a.username,r=a.password,t.prev=1,t.next=4,z(n,r);case 4:e.setState({data:{username:"",password:""}}),Object(x.b)("welcome!"),o=e.props.location.state,window.location=o?o.from.pathname:"/",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),t.t0.response&&400===t.t0.response.status&&(c=t.t0.response.data,x.b.error(c));case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),e}return Object(l.a)(a,[{key:"render",value:function(){return U()?r.a.createElement(V.a,{ro:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username","text"),this.renderInput("password","Password","password"),this.renderButton("Login")))}}]),a}(oe);function le(e){return N.post("/users",{email:e.username,name:e.name,password:e.password})}var ue=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:Z.a.string().required().email().label("Username"),password:Z.a.string().required().min(5).label("Password"),name:Z.a.string().required().label("Name")},e.doSubmit=Object(f.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,le(e.state.data);case 3:a=t.sent,e.setState({data:{username:"",name:"",password:""}}),Q(a.headers["x-auth-token"]),Object(x.b)("User added successfully ."),window.location="/",t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(0),!t.t0.response||400!==t.t0.response.status){t.next=15;break}return n=t.t0.response.data,t.abrupt("return",x.b.error(n));case 15:case"end":return t.stop()}}),t,null,[[0,10]])}))),e}return Object(l.a)(a,[{key:"render",value:function(){return U()?r.a.createElement(V.a,{ro:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Registre"),r.a.createElement("form",{onSubmit:this.handleSubmit},this.renderInput("username","Username","text"),this.renderInput("name","Name","text"),this.renderInput("password","Password","password"),this.renderButton("Register")))}}]),a}(oe),me=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){localStorage.removeItem("token"),window.location="/login"}},{key:"render",value:function(){return null}}]),a}(n.Component),pe=(a(80),a(81),function(e){var t=e.path,a=e.component,n=e.render,o=Object(ae.a)(e,["path","component","render"]);return r.a.createElement(V.b,Object.assign({path:t},o,{render:function(e){return U()?a?r.a.createElement(a,e):n(e):r.a.createElement(V.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),de=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=U();console.log(e),this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null),r.a.createElement(se,{user:this.state.user}),r.a.createElement("main",{className:"container"},r.a.createElement(V.d,null,r.a.createElement(V.b,{path:"/movies-app",exact:!0,component:K}),r.a.createElement(V.b,{path:"/register",component:ue}),r.a.createElement(V.b,{path:"/login",component:ie}),r.a.createElement(pe,{path:"/movies/:id",component:ce}),r.a.createElement(V.b,{path:"/movies",render:function(t){return r.a.createElement(K,Object.assign({},t,{user:e}))}}),r.a.createElement(V.b,{path:"/customers",component:H}),r.a.createElement(V.b,{path:"/rentals",component:$}),r.a.createElement(V.b,{path:"/logout",component:me}),r.a.createElement(V.b,{path:"/not-found",component:X}),r.a.createElement(V.a,{from:"/",exact:!0,to:"/movies"}),r.a.createElement(V.a,{to:"/movies"}))))}}]),a}(n.Component),ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(82),a(83);c.a.render(r.a.createElement(s.a,null,r.a.createElement(de,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/movies-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/movies-app","/service-worker.js");ve?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):he(e)}))}}()}},[[47,1,2]]]);
//# sourceMappingURL=main.340650ce.chunk.js.map