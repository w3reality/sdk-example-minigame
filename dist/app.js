!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.App=t():e.App=t()}(window,(function(){return function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var r=function e(t,o,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,o);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,o,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0},n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}();var a=window.requirejs("w3reality-sdk"),i=window.THREE,u=[4,2,4,0,0],c=function(e){function t(e,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));r.gameStats={reached:!1,startTime:null};var n=new i.Scene;r.setScene(n);var a=new i.Mesh(new i.BoxGeometry(1,1,1),new i.MeshBasicMaterial({color:65280,wireframe:!0}));a.position.set(5,13,9),r.cube=a,n.add(a);var u=new i.FontLoader;return r.showRecord=function(){},u.load("/media/w3reality/fonts/helvetiker_bold.typeface.json",(function(e){r.showRecord=function(t){var o=new i.Mesh(new i.TextGeometry(t,{font:e,size:.5,height:.05}),new i.MeshBasicMaterial({color:13369548}));o.position.set(5.5,4.5,26.5),o.rotation.set(Math.PI/2,Math.PI,0),n.add(o)}})),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,null,[{key:"createWorld",value:function(){var e=new World(8,16,32);e.setSpawnPose(u),e.setChunkSize(4),e.name="minigame";var t=function(t,o,r,n){for(var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=0;u<t;u++)for(var c=0;c<o;c++)e.blocks[a+u][i+c][r]=n};return t(8,16,0,BLOCK.SAND),e.addBlock(2,5,2,BLOCK.MODEL_ANCHOR,{href:"",text:"Moves: w a s d"}),e.addBlock(5,7,2,BLOCK.MODEL_ANCHOR,{href:"",text:"Angles: < ^ v >"}),e.addBlock(5,8,2,BLOCK.MODEL_ANCHOR,{href:"",text:"or, Mouse Drag"}),t(2,2,0,BLOCK.MODEL_TEST,4,12),e.addBlock(2,13,2,BLOCK.MODEL_ANCHOR,{href:"",text:"💡 Click rocket to F2"}),t(8,16,8,BLOCK.CONCRETE),e.addBlock(2,4,10,BLOCK.MODEL_ANCHOR,{href:"",text:"💡 SPACE key to jump"}),e.addBlock(7,7,10,BLOCK.MODEL_ANCHOR,{href:"/visit?v=_proto_plane",text:"Hmm, try sth else 😂"}),t(2,2,8,BLOCK.AIR,4,12),t(2,1,15,BLOCK.WOOD,2,2),t(2,1,14,BLOCK.WOOD,2,3),t(2,1,13,BLOCK.WOOD,2,4),t(4,2,12,BLOCK.WOOD,2,5),t(2,1,11,BLOCK.WOOD,4,4),t(2,1,10,BLOCK.WOOD,4,3),t(2,1,9,BLOCK.WOOD,4,2),t(8,16,16,BLOCK.GLASS),t(2,3,16,BLOCK.AIR,2,2),t(8,3,16,BLOCK.AIR,0,8),e.addBlock(6,7,17,BLOCK.MODEL_ANCHOR,{href:"",text:"💡 Dash and jump!!"}),e.addBlock(6,5,17,BLOCK.MODEL_ANCHOR,{href:"",text:"💡 Use SHIFT to dash"}),e.addBlock(4,12,17,BLOCK.MODEL_TEST),t(8,16,24,BLOCK.DIRT),t(2,2,24,BLOCK.AIR,4,12),t(8,1,25,BLOCK.GLASS,0,7),t(8,1,26,BLOCK.GLASS,0,7),e.addBlock(2,7,25,BLOCK.AIR),e.addBlock(2,7,26,BLOCK.AIR),t(6,1,25,BLOCK.WOOD,0,3),t(6,1,26,BLOCK.WOOD,0,3),t(6,1,27,BLOCK.WOOD,0,3),t(6,1,28,BLOCK.GLASS,0,3),e.addBlock(7,2,26,BLOCK.MODEL_ANCHOR,{href:"",text:"🎉 You Win!!  🎁 ➡️"}),e.addBlock(1,1,26,BLOCK.MODEL_ANCHOR,{href:"/visit?v=_proto_geo&insitu=1&lat=36.3785&lng=-112.6527",text:"Trip to Grand Canyon"}),e}}]),n(t,[{key:"update",value:function(e,o){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"update",this).call(this,e,o),this.cube.position.z=9+6*Math.sin(e/1e3),this.cube.rotation.x=-Math.PI/2*e/1e3,this.cube.rotation.y=-Math.PI/4*e/1e3;var n=this.player.pos,a=this.player.angles;if(n.z<-8&&(n.x=u[0],n.y=u[1],n.z=u[2],a[0]=u[3],a[1]=u[4]),this.gameStats.startTime||(this.gameStats.startTime=e),!this.gameStats.reached&&n.z>24&&n.y<7.5&&n.x>0&&n.x<8){this.gameStats.reached=!0;var i=(e-this.gameStats.startTime)/1e3;this.showRecord(i.toFixed(2)+" s !!")}}},{key:"free",value:function(){r(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"free",this).call(this)}}]),t}(a.App);t.default=c}]).default}));