(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{47:function(t,e,c){},76:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),s=c(19),a=c.n(s),r=(c(47),c(13)),o=c.n(r),l=c(1);var d=function(t){var e=t.onClick,c=t.className,n=t.outline,i=t.children;return Object(l.jsx)("button",{onClick:e,className:o()("button",c,{"button-outline":n}),children:i})},j=c(7),b=c(8),u=c.p+"static/media/pizza-logo.56ac8703.svg";var h=function(){var t=Object(j.c)((function(t){return t.cart})),e=t.totalPrice,c=t.totalCount;return Object(l.jsx)("div",{className:"header",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b.b,{to:"/",children:Object(l.jsxs)("div",{className:"header__logo",children:[Object(l.jsx)("img",{width:"38",src:u,alt:"Pizza logo"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"React Pizza"}),Object(l.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(l.jsx)("div",{className:"header__cart",children:Object(l.jsx)(b.b,{to:"/cart",children:Object(l.jsxs)(d,{className:"button--cart",outline:!0,children:[Object(l.jsxs)("span",{children:[e,"\u20bd"]}),Object(l.jsx)("div",{className:"button__delimiter"}),Object(l.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(l.jsx)("span",{children:c})]})})})]})})},O=i.a.memo((function(t){var e=t.activeCategory,c=t.items,n=t.onClickCategory;return Object(l.jsx)("div",{className:"categories",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:null===e?"active":"",onClick:function(){return n(null)},children:"\u0412\u0441\u0435"}),null===c||void 0===c?void 0:c.map((function(t,c){return Object(l.jsx)("li",{className:e===c?"active":"",onClick:function(){return n(c)},children:t},"".concat(t,"_").concat(c))}))]})})}));O.defaultProps={activeCategory:null,items:[]};var m=O,p=c(16),x=i.a.memo((function(t){var e=t.items,c=t.activeSortType,n=t.onClickSortType,s=i.a.useState(!1),a=Object(p.a)(s,2),r=a[0],o=a[1],d=i.a.useRef(),j=e.find((function(t){return t.type===c})).name,b=function(t){(t.path||t.composedPath&&t.composedPath()).includes(d.current)||o(!1)};i.a.useEffect((function(){document.body.addEventListener("click",b)}),[]);return Object(l.jsxs)("div",{ref:d,className:"sort",children:[Object(l.jsxs)("div",{className:"sort__label",children:[Object(l.jsx)("svg",{className:r?"rotated":"",width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(l.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(l.jsx)("span",{onClick:function(){o(!r)},children:j})]}),r&&Object(l.jsx)("div",{className:"sort__popup",children:Object(l.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(t,e){return Object(l.jsx)("li",{onClick:function(){return function(t){n&&n(t),o(!1)}(t)},className:c===t.type?"active":"",children:t.name},"".concat(t.type,"_").concat(e))}))})})]})}));x.defaultProps={items:[]};var C=x;var v=function(t){var e=t.name,c=t.type,n=t.size,i=t.totalCount,s=t.totalPrice,a=t.onRemove,r=t.id,o=t.onMinus,j=t.onPlus;return Object(l.jsxs)("div",{className:"cart__item",children:[Object(l.jsx)("div",{className:"cart__item-img",children:Object(l.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(l.jsxs)("div",{className:"cart__item-info",children:[Object(l.jsx)("h3",{children:e}),Object(l.jsxs)("p",{children:[c," \u0442\u0435\u0441\u0442\u043e, ",n," \u0441\u043c."]})]}),Object(l.jsxs)("div",{className:"cart__item-count",children:[Object(l.jsx)("div",{onClick:function(){o(r)},className:"button button--outline button--circle cart__item-count-minus",children:Object(l.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(l.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(l.jsx)("b",{children:i}),Object(l.jsx)("div",{onClick:function(){j(r)},className:"button button--outline button--circle cart__item-count-plus",children:Object(l.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(l.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(l.jsx)("div",{className:"cart__item-price",children:Object(l.jsxs)("b",{children:[s," \u20bd"]})}),Object(l.jsx)("div",{className:"cart__item-remove",children:Object(l.jsx)(d,{onClick:function(){a(r)},className:"button button--outline button--circle",children:Object(l.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(l.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})};function f(t){var e=t.id,c=t.name,n=t.imageUrl,s=t.sizes,a=t.price,r=t.types,j=t.onClickAddPizza,b=t.addedCount,u=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],h=[26,30,40],O=i.a.useState(r[0]),m=Object(p.a)(O,2),x=m[0],C=m[1],v=i.a.useState(0),f=Object(p.a)(v,2),y=f[0],g=f[1];return Object(l.jsxs)("div",{className:"pizza-block",children:[Object(l.jsx)("img",{className:"pizza-block__image",src:n,alt:"Pizza"}),Object(l.jsx)("h4",{className:"pizza-block__title",children:c}),Object(l.jsxs)("div",{className:"pizza-block__selector",children:[Object(l.jsx)("ul",{children:u.map((function(t,e){return Object(l.jsx)("li",{onClick:function(){return function(t){C(t)}(e)},className:o()({active:x===e,disable:!r.includes(e)}),children:t},"".concat(t,"_").concat(e))}))}),Object(l.jsx)("ul",{children:h.map((function(t,e){return Object(l.jsxs)("li",{className:o()({active:y===e,disable:!s.includes(t)}),onClick:function(){return function(t){g(t)}(e)},children:[t," \u0441\u043c."]},"".concat(t,"_").concat(e))}))})]}),Object(l.jsxs)("div",{className:"pizza-block__bottom",children:[Object(l.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",a," \u20bd"]}),Object(l.jsxs)(d,{onClick:function(){var t={id:e,name:c,imageUrl:n,price:a,size:h[y],type:u[x]};j(t)},className:"button--add",outline:!0,children:[Object(l.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(l.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),b&&Object(l.jsx)("i",{children:b})]})]})]})}f.defaultProps={name:"---",price:0,types:[],sizes:[]};var y=f,g=c(38);var _=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(g.a,{className:"pizza-block",speed:2,width:280,height:460,viewBox:"0 0 280 460",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(l.jsx)("circle",{cx:"132",cy:"142",r:"115"}),Object(l.jsx)("rect",{x:"0",y:"273",rx:"6",ry:"6",width:"280",height:"26"}),Object(l.jsx)("rect",{x:"0",y:"310",rx:"6",ry:"6",width:"280",height:"84"}),Object(l.jsx)("rect",{x:"0",y:"418",rx:"6",ry:"6",width:"91",height:"31"}),Object(l.jsx)("rect",{x:"137",y:"408",rx:"25",ry:"25",width:"140",height:"46"})]})})},k=c(2),w="REACT_PIZZA/PIZZAS/SET_SORT_BY",L="REACT_PIZZA/PIZZAS/SET_CATEGORY",N={category:null,sortBy:{type:"rating",order:"desc"}},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case w:return Object(k.a)(Object(k.a)({},t),{},{sortBy:e.payload});case L:return Object(k.a)(Object(k.a)({},t),{},{category:e.payload});default:return t}},z=c(39),A=c.n(z),Z="REACT_PIZZA/PIZZAS/SET_PIZZAS",E="REACT_PIZZA/PIZZAS/SET_LOADED",B={items:[],isLoaded:!1},T=function(t,e){return function(c){c({type:E,payload:!1}),A.a.get("/pizzas?".concat(null!==t?"category=".concat(t):"","&_sort=").concat(e.type,"&_order=").concat(e.order)).then((function(t){var e=t.data;c({type:Z,payload:e})}))}},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Z:return Object(k.a)(Object(k.a)({},t),{},{items:e.payload,isLoaded:!0});case E:return Object(k.a)(Object(k.a)({},t),{},{isLoaded:e.payload});default:return t}},M=c(12),V=c(27),I=c(40),S="REACT_PIZZA/CART/ADD_PIZZA_CART",H="REACT_PIZZA/CART/CLEAR_PIZZA_CART",W="REACT_PIZZA/CART/REMOVE_CART_ITEM",D="REACT_PIZZA/CART/PLUS_CART_ITEM",U="REACT_PIZZA/CART/MINUS_CART_ITEM",J={items:{},totalPrice:0,totalCount:0},Y=function(t){return t.reduce((function(t,e){return e.price+t}),0)},G=function(t,e){return Object.values(t).reduce((function(t,c){var n=function(t,e){var c=e.split("."),n=Object(I.a)(c),i=n[0];return n.slice(1).reduce((function(t,e){return t[e]}),t[i])}(c,e);return t+n}),0)},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:var c=t.items[e.payload.id]?[].concat(Object(V.a)(t.items[e.payload.id].items),[e.payload]):[e.payload],n=Object(k.a)(Object(k.a)({},t.items),{},Object(M.a)({},e.payload.id,{items:c,totalPrice:Y(c)})),i=G(n,"items.length"),s=G(n,"totalPrice");return Object(k.a)(Object(k.a)({},t),{},{items:n,totalCount:i,totalPrice:s});case W:var a=Object(k.a)({},t.items),r=a[e.payload].totalPrice,o=a[e.payload].items.length;return delete a[e.payload],Object(k.a)(Object(k.a)({},t),{},{items:a,totalPrice:t.totalPrice-r,totalCount:t.totalCount-o});case D:var l=[].concat(Object(V.a)(t.items[e.payload].items),[t.items[e.payload].items[0]]),d=Object(k.a)(Object(k.a)({},t.items),{},Object(M.a)({},e.payload,{items:l,totalPrice:Y(l)})),j=G(d,"items.length"),b=G(d,"totalPrice");return Object(k.a)(Object(k.a)({},t),{},{items:d,totalCount:j,totalPrice:b});case U:var u=t.items[e.payload].items,h=u.length>1?t.items[e.payload].items.slice(1):u,O=Object(k.a)(Object(k.a)({},t.items),{},Object(M.a)({},e.payload,{items:h,totalPrice:Y(h)})),m=G(O,"items.length"),p=G(O,"totalPrice");return Object(k.a)(Object(k.a)({},t),{},{items:O,totalCount:m,totalPrice:p});case H:return{totalPrice:0,totalCount:0,items:{}};default:return t}};var F=function(){var t=Object(j.b)(),e=Object(j.c)((function(t){return t.pizzas})),c=e.items,n=e.isLoaded,s=Object(j.c)((function(t){return t.filters})),a=s.category,r=s.sortBy,o=Object(j.c)((function(t){return t.cart.items}));i.a.useEffect((function(){t(T(a,r))}),[a,r,t]);var d=i.a.useCallback((function(e){t({type:L,payload:e})}),[t]),b=i.a.useCallback((function(e){t(function(t){var e=t.type,c=t.order;return{type:w,payload:{type:e,order:c}}}(e))}),[t]),u=function(e){t({type:S,payload:e})};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"content__top",children:[Object(l.jsx)(m,{activeCategory:a,onClickCategory:d,items:["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0430\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"]}),Object(l.jsx)(C,{activeSortType:r.type,items:[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"rating",order:"desc"},{name:"\u0446\u0435\u043d\u0435",type:"price",order:"desc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"name",order:"asc"}],onClickSortType:b})]}),Object(l.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(l.jsx)("div",{className:"content__items",children:n?c.map((function(t){return Object(l.jsx)(y,Object(k.a)({onClickAddPizza:u,addedCount:o[t.id]&&o[t.id].items.length},t),t.id)})):Array(10).fill(0).map((function(t,e){return Object(l.jsx)(_,{},e)}))})]})},K=c.p+"static/media/empty-cart.db905d1f.png";function Q(){return Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("div",{className:"container container--cart",children:Object(l.jsxs)("div",{className:"cart cart--empty",children:[Object(l.jsxs)("h2",{children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f ",Object(l.jsx)("i",{children:"\ud83d\ude15"})]}),Object(l.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(l.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(l.jsx)("img",{src:K,alt:"Empty cart"}),Object(l.jsx)(b.c,{to:"/",className:"button button--black",children:Object(l.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})})}var X=function(){var t=Object(j.b)(),e=Object(j.c)((function(t){return t.cart})),c=e.items,n=e.totalPrice,i=e.totalCount,s=Object.keys(c).map((function(t){return c[t].items[0]})),a=function(e){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u044d\u0442\u0438 \u043f\u0438\u0446\u0446\u044b?")&&t(function(t){return{type:W,payload:t}}(e))},r=function(e){t(function(t){return{type:D,payload:t}}(e))},o=function(e){t(function(t){return{type:U,payload:t}}(e))};return Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("div",{className:"container container--cart",children:0===n?Object(l.jsx)(Q,{}):Object(l.jsxs)("div",{className:"cart",children:[Object(l.jsxs)("div",{className:"cart__top",children:[Object(l.jsxs)("h2",{className:"content__title",children:[Object(l.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(l.jsxs)("div",{className:"cart__clear",children:[Object(l.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(l.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(l.jsx)("span",{onClick:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&t({type:H})},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(l.jsx)("div",{className:"content__items",children:s.map((function(t){return Object(l.jsx)(v,{name:t.name,type:t.type,size:t.size,id:t.id,totalCount:c[t.id].items.length,totalPrice:c[t.id].totalPrice,onRemove:a,onMinus:o,onPlus:r},t.id)}))}),Object(l.jsxs)("div",{className:"cart__bottom",children:[Object(l.jsxs)("div",{className:"cart__bottom-details",children:[Object(l.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(l.jsxs)("b",{children:[i," \u0448\u0442."]})]}),Object(l.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(l.jsxs)("b",{children:[n," \u20bd"]})]})]}),Object(l.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(l.jsxs)(b.c,{to:"/",className:"button button--outline button--add go-back-btn",children:[Object(l.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(l.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),Object(l.jsx)(d,{onClick:function(){alert("\u0417\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442!"),console.log("\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437",c)},className:"pay-btn",children:Object(l.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]})})})},$=c(3);var tt=function(){return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)($.a,{exact:!0,path:"/",children:Object(l.jsx)(F,{})}),Object(l.jsx)($.a,{exact:!0,path:"/cart",children:Object(l.jsx)(X,{})})]})]})},et=c(11),ct=c(41),nt=c(42),it=Object(et.combineReducers)({filters:P,pizzas:R,cart:q}),st=Object(et.createStore)(it,Object(ct.composeWithDevTools)(Object(et.applyMiddleware)(nt.a)));a.a.render(Object(l.jsx)(b.a,{children:Object(l.jsx)(j.a,{store:st,children:Object(l.jsx)(tt,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.c79fe067.chunk.js.map