(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(26)},17:function(e,t,a){},19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(17),a(19),a(1)),l=Object(o.b)(function(e){return{snake:e.snake}})(function(e){var t=e.snake;return r.a.createElement("div",{id:"snake"},t.map(function(e){return r.a.createElement("div",{key:e.x+"_"+e.y,className:"snakepart",style:{left:10*e.x+"px",top:10*e.y+"px"}})}))}),u=Object(o.b)(function(e){return{x:e.apple.x,y:e.apple.y}})(function(e){var t=e.x,a=e.y;return r.a.createElement("div",{id:"apple",style:{left:10*t+"px",top:10*a+"px"}})}),p=Object(o.b)(function(e){return{score:e.score}})(function(e){var t=e.score;return r.a.createElement("div",{id:"score"},"SCORE: ",r.a.createElement("span",null,t))}),s=Object(o.b)(function(e){return{gameState:e.gameState}})(function(e){switch(e.gameState){case"paused":return r.a.createElement("div",{id:"overlay"},r.a.createElement("span",null,"Game Paused"),"press space to ",r.a.createElement("br",null)," continue playing");case"over":return r.a.createElement("div",{id:"overlay"},r.a.createElement("span",null,"Game Over"),"press space to ",r.a.createElement("br",null)," start a new game");default:return null}}),d=Object(o.b)(function(e){return{gameState:e.gameState}})(function(){return r.a.createElement("div",{id:"App"},r.a.createElement("h1",null,"Snaek"),r.a.createElement("div",{id:"field"},r.a.createElement(u,null),r.a.createElement(l,null),r.a.createElement(s,null)),r.a.createElement("div",{id:"meta"},r.a.createElement(p,null)))}),m=a(3),y=a(4);function f(e,t){return e.x===t.x&&e.y===t.y}var E=function(e){var t,a,n=(t=e.snake[e.snake.length-1],"right"===(a=e.direction)?{x:t.x+1,y:t.y}:"left"===a?{x:t.x-1,y:t.y}:"up"===a?{x:t.x,y:t.y-1}:"down"===a?{x:t.x,y:t.y+1}:void 0);if(f(n,e.apple)){for(var r;!r||f(e.apple,r)||e.snake.includes(r);)r={x:Math.floor(40*Math.random()),y:Math.floor(40*Math.random())};return Object(m.a)({},e,{score:e.score+1,apple:r,snake:e.snake.concat(n)})}return e.snake.some(function(e){return f(e,n)})?Object(m.a)({},e,{gameState:"over"}):n.x>=40||n.y>=40||n.x<0||n.y<0?Object(m.a)({},e,{gameState:"over"}):Object(m.a)({},e,{snake:e.snake.concat(n).slice(1)})},h={score:0,snake:[{x:1,y:25},{x:2,y:25},{x:3,y:25}],apple:{x:10,y:25},direction:"right",gameState:"paused"};function g(e){return{type:"CHANGE_DIRECTION",payload:e}}var v=Object(y.b)(function(e,t){if("CHANGE_DIRECTION"===t.type){var a="left"===e.direction&&"right"===t.payload||"right"===e.direction&&"left"===t.payload||"down"===e.direction&&"up"===t.payload||"up"===e.direction&&"down"===t.payload;return Object(m.a)({},e,{direction:"playing"!==e.gameState||a?e.direction:t.payload})}if("TOGGLE_GAMESTATE"===t.type)switch(e.gameState){case"over":return E(Object(m.a)({},h,{gameState:"playing"}));case"playing":return Object(m.a)({},e,{gameState:"paused"});default:return E(Object(m.a)({},e,{gameState:"playing"}))}return"GAME_OVER"===t.type?Object(m.a)({},e,{gameState:"over"}):"TICK_TICK"===t.type?E(e):e},h);i.a.render(r.a.createElement(o.a,{store:v},r.a.createElement(d,null)),document.getElementById("root"));document.onkeydown=function(e){return 38===(e=e||window.event).which?v.dispatch(g("up")):40===e.which?v.dispatch(g("down")):37===e.which?v.dispatch(g("left")):39===e.which?v.dispatch(g("right")):32===e.which?v.dispatch({type:"TOGGLE_GAMESTATE"}):void 0},function e(){var t=v.getState(),a=200-10*Math.floor(t.score/10);setTimeout(e,a),"playing"===t.gameState&&v.dispatch({type:"TICK_TICK"})}()}},[[12,2,1]]]);
//# sourceMappingURL=main.815f2509.chunk.js.map