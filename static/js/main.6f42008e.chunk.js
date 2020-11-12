(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{11:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),c=a.n(r),l=(a(16),a(10)),s=a(2),m=(a(17),a(18),a(19),function(e){var t=e.title,a=e.description,n=void 0===a?"":a,r=e.imgUrl,c=e.imdbUrl;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("figure",{className:"image is-4by3"},i.a.createElement("img",{src:r,alt:"Film logo"}))),i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"media"},i.a.createElement("div",{className:"media-left"},i.a.createElement("figure",{className:"image is-48x48"},i.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),i.a.createElement("div",{className:"media-content"},i.a.createElement("p",{className:"title is-8"},t))),i.a.createElement("div",{className:"content"},n,i.a.createElement("br",null),i.a.createElement("a",{href:c},"IMDB"))))}),o=function(e){var t=e.movies,a=void 0===t?[]:t;return i.a.createElement("div",{className:"movies"},a.map((function(e){return i.a.createElement(m,Object.assign({key:e.imdbId},e))})))},u=(a(20),a(8)),d=a.n(u),v=a(5),f=a.n(v),p=a(9),E="https://www.omdbapi.com/?apikey=2141f404";function b(){return(b=Object(p.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E,"&t=[").concat(t,"]"));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=a(1),h=a.n(g),N=(h.a.func.isRequired,h.a.arrayOf(h.a.shape({title:h.a.string.isRequired,description:h.a.string.isRequired,imgUrl:h.a.string.isRequired,imdbUrl:h.a.string.isRequired}).isRequired).isRequired,function(e){var t=e.addMovie,a=e.movies,r=Object(n.useState)(null),c=Object(s.a)(r,2),l=c[0],o=c[1],u=Object(n.useState)(""),v=Object(s.a)(u,2),f=v[0],p=v[1],E=Object(n.useState)(null),g=Object(s.a)(E,2),h=g[0],N=g[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),a.some((function(e){return e.imdbId===l.imdbId}))?N("This film is already exist in your list"):(t(l),o(null),p(""))}},i.a.createElement("div",{className:"field"},i.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),i.a.createElement("div",{className:"control"},i.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:d()("input",{"is-danger":h}),value:f,onChange:function(e){e.target.value!==f&&N(null),p(e.target.value)},autoComplete:"off"})),h&&i.a.createElement("p",{className:"help is-danger"},h)),i.a.createElement("div",{className:"field is-grouped"},i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){(function(e){return b.apply(this,arguments)})(f).then((function(e){if("False"===e.Response)return N("Can't find a movie with such a title"),void o(null);o({title:e.Title,description:e.Plot,imgUrl:e.Poster,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbId),imdbId:e.imdbID})}))}},"Find a movie")),i.a.createElement("div",{className:"control"},i.a.createElement("button",{type:"submit",className:"button is-primary"},"Add to the list")))),i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"title"},"Preview"),l&&i.a.createElement(m,l)))}),y=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"page-content"},a.length?i.a.createElement(o,{movies:a}):i.a.createElement("h2",null,"Add movies to your list")),i.a.createElement("div",{className:"sidebar"},i.a.createElement(N,{movies:a,addMovie:function(e){r((function(t){return[].concat(Object(l.a)(t),[e])}))}})))};c.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.6f42008e.chunk.js.map