!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=10},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(31));var u=function(){var e=void 0,t=function(){return e=void 0!==e&&!e};return{setModel:function(e){t(),r.default.set(e)},getModel:function(){return r.default.get()},updateModel:function(n,u){!1===e&&t();var o=n.split(/-/)[1];r.default.update(o,u)}}}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return Array.prototype.reduce.call(t,function(e,t){return t(e)},e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return Array.prototype.reduceRight.call(t,function(e,t){return t(e)},e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(34);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.currentColor="light-brown";t.default=function(){var e=window.event.target.getAttribute("class").split(" ")[0],n=document.querySelector(".js-shade7 polygon");t.currentColor=e,n.setAttribute("class",""+e)}},function(e,t,n){"use strict";n(7),n(9),n(11);var r=a(n(13)),u=a(n(45)),o=a(n(47)),i=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}(0,r.default)(i.default),(0,u.default)(),(0,o.default)()},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(2)),u=c(n(15)),o=c(n(17)),i=c(n(19)),a=c(n(21)),l=c(n(29)),f=c(n(32));function c(e){return e&&e.__esModule?e:{default:e}}var d=(0,r.default)(u.default,o.default,i.default,a.default,l.default,f.default);t.default=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(16);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return function(t){return t in e?e[t]:1}}({10:32,20:16,40:8});t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(18);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[0];return n>t?r:e(t,n+1,[-n].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(r),[n]))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(20);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(e,t){return[].concat(r(e),r(t))};t.default=function(e){return function(e){return e.map(function(e){return function(t){return e.map(function(e){return function(t){return[e,t]}}(t))}}(e))}(e).reduce(u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(22);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(2)),u=a(n(23)),o=a(n(25)),i=a(n(27));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return(0,r.default)(u.default,o.default,i.default)(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(24);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var o=function(e){var t=r(e,2),n=t[0],o=t[1];return[u.default*(n+o/2)*Math.sqrt(3),3*u.default/2*o]};t.default=function(e){return e.map(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(26);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){var t=r(e,2),n=t[0],u=t[1];return Math.abs(n)<=208&&Math.abs(u)<=480};t.default=function(e){return e.filter(u)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(28);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){return e&&e.__esModule?e:{default:e}}(n(0));var o=function(e){var t=r(e,2),n=t[0],o=t[1],i=Math.round((n*Math.sqrt(3)/3-o/3)/u.default),a=Math.round(2*o/3/u.default);return[i,a,-i-a]};t.default=function(e){return e.map(o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(30);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));t.default=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return n>t.length?r.default.setModel(u):e(t,n+1,[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(u),["framework"])),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=void 0;return{set:function(t){return e=t},get:function(){return e},update:function(t,n){return e[t]=n}}}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(33);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(3)),u=i(n(4)),o=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}var a=(0,r.default)(function(e){return document.querySelector(".js-viewport").innerHTML+=""+e},function(e){return(0,u.default)({diameter:o.default,coordinates:e})});t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(3)),u=i(n(35)),o=i(n(43));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.appearance,n=void 0===t?"framework":t,i=e.diameter,a=void 0===i?20:i,l=e.coordinates,f=void 0===l?[[0,0,0]]:l;return function(e){return function(t){return(0,r.default)(o.default,(0,u.default)(e)(t))}}(n)(a)(f)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(36);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(2)),u=a(n(37)),o=a(n(39)),i=a(n(41));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){return function(n){return n.map(function(n,a){return function(e,t,n){return(0,r.default)(i.default,(0,u.default)(t),(0,o.default)(e)(n))}(e,t,a)(n)}).join("")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(38);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(e){return function(t){return t.map(function(e){return function(t){var n=r(t,3),u=n[0],o=n[1],i=n[2];return e*(.5*(u+i)-o)+","+e*(u-i)*Math.sqrt(3)/2}}(e)).join(" ")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(40);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return function(t){return function(n){return"\n<polygon class='"+e+"' id="+("framework"===e?"poly-"+t:"picker")+" points='"+n+"'></polygon>\n"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(42);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return function(t){return e.map(function(e){return function(t){return[e[0]+t[0],e[1]+t[1],e[2]+t[2]]}}(t))}}([[0,0,1],[0,1,1],[0,1,0],[1,1,0],[1,0,0],[1,0,1]]);t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(44);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){return"<g>"+e+"</g>"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(46);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(3)),u=o(n(4));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return(0,u.default)({appearance:e})},a=function(e){return(0,r.default)(function(e){return function(t){return document.querySelector(".js-shade"+e).innerHTML=""+t}}(e),i)},l=function e(t){var n=function(e){return Array.isArray(e)?e:Array.from(e)}(t),r=n[0],u=n.slice(1),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return void 0===r?[]:[a(o)(r)].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e(u,o+1)))};t.default=function(){return l(["light-blue","blue","light-green","green","light-brown","brown","current"])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(48);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(49)),u=i(n(59)),o=i(n(69));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){(0,r.default)(),(0,u.default)(),(0,o.default)()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(50);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=l(n(51)),o=l(n(53)),i=l(n(55)),a=l(n(57));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e){var t=r(e,2),n=t[0],u=t[1];document.querySelector(".js-viewport g").addEventListener(n,u)};t.default=function(){return function(e){return e.map(f)}([["mouseout",u.default],["mouseover",o.default],["mousedown",i.default],["mouseup",a.default]])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(52);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){window.event.target.removeAttribute("filter")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(54);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){window.event.target.setAttribute("filter","url(#highlight)")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(56);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),u=function(e){return e&&e.__esModule?e:{default:e}}(n(1));var o=function(){var e=window.event.target,t=e.id,n=document.querySelector(".js-new-file");n.hasAttribute("disabled")&&n.removeAttribute("disabled"),e.setAttribute("class",""+r.currentColor),u.default.updateModel(t,r.currentColor)};t.default=function(){o(),document.querySelector(".js-viewport g").onmousemove=function(){return o()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(58);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){document.querySelector(".js-viewport g").onmousemove=null}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(60);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){return e&&e.__esModule?e:{default:e}}(n(61));var o=function(e){document.querySelectorAll(".menu-list-file-label").forEach(function(e){var t=r(e,2),n=t[0],u=t[1];return function(e){return e.addEventListener(n,u)}}(e))};t.default=function(){return o(["click",u.default])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(63));t.default=function(){var e=window.event.target.getAttribute("class").split(" ")[2];r.default.open(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(64);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),u=i(n(65)),o=i(n(67));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){var e=window.localStorage,t=function(){return JSON.parse(e.getItem("hexography:user-saved-data"))},n=function(t){return e.setItem("hexography:user-saved-data",JSON.stringify(t))},i=document.querySelector(".editor-modal"),a=function(){return i.classList.toggle("visible")},l=function(){return document.querySelector(".button-confirm")},f=function(){return document.querySelector(".button-save")},c=function(){return document.querySelector(".button-cancel")},d=function(){return document.querySelector(".button-return")},s=function(){return document.querySelector(".button-unused-block")},v=!1,b=function e(i){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("new"===i&&(l().onclick=function(){(0,u.default)("save",t()).then(function(){return v=!0}).then(function(){return e("save")})},c().onclick=function(){o.default.newFile(),a()}),"load"===i){var _=document.querySelectorAll('button[class*="map-"]');0!==_.length&&_.forEach(function(e){e.onclick=function(){return y()}}),d().onclick=function(){return a()}}if("confirmLoad"===i&&(l().onclick=function(){var e=t().filter(function(e){return e.name===b});o.default.loadFile(e[0].data),a()},c().onclick=function(){(0,u.default)("load",t()).then(function(){return e("load")})}),"overwrite"===i&&(l().onclick=function(){var e=void 0;t().filter(function(t,n){t.name===b&&(e=n)}),m(e)},c().onclick=function(){(0,u.default)("save",t()).then(function(){return e("save")})}),"save"===i){var M=document.querySelectorAll('.button[class*="map-"]');0!==M.length&&M.forEach(function(e){e.onclick=function(){return p()}}),s()&&(s().onclick=function(){return m()}),d().onclick=function(){v&&(v=!1),a()}}if("newSave"===i){var h=document.querySelector("#save-form"),j=document.querySelector("input");j.oninput=function(){j.value.length>0?f().removeAttribute("disabled"):f().setAttribute("disabled","")},h.onsubmit=function(e){e.preventDefault();var u=h.filename.value,i=b,l=u.replace(/\s/g,"-").toLowerCase(),f=t(),c={name:"map:"+l,data:r.default.getModel()};null===i?n([].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(f),[c])):(f.splice(i,1,c),n(f)),v&&(o.default.newFile(),v=!1),a()},c().onclick=function(){(0,u.default)("save",t()).then(function(){return e("save")})}}},_=function(){return"map:"+window.event.target.classList[1].split(/^(map-)/)[2]},y=function(){var e=_();(0,u.default)("confirmLoad",[e]).then(function(){return b("confirmLoad",e)})},p=function(){var e=_();(0,u.default)("overwrite",[e]).then(function(){return b("overwrite",e)})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;(0,u.default)("newSave").then(function(){return b("newSave",e)})};return{open:function(e){var r=t();r||(r=n([]));var o=e.split(/-/)[1];(0,u.default)(o,r).then(function(){return b(o)}).then(function(){return a()})}}}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(66);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return new Promise(function(n){var r=void 0,u=void 0,o=void 0,i=void 0,a=void 0,l=void 0,f=void 0,c=document.querySelector(".js-modal-title h3"),d=document.querySelector(".js-modal-list"),s=document.createDocumentFragment(),v=s.appendChild(document.createElement("ul"));["modal-list","js-modal-list"].forEach(function(e){return v.classList.add(""+e)});var b=function(){(u=v.appendChild(document.createElement("li"))).classList.add("modal-list-item-wrapper")},_=function(){(r=u.appendChild(document.createElement("div"))).classList.add("modal-list-item")},y=function(e){return e.split(/^(map:)/)},p=function(e){var t=!1!==e[0],n="cancel"!==e[0];b(),t&&n||_(),e.forEach(function(e){t&&n&&_(),function(e){var t="back",n="button-return";if("unused block"===e)return a={name:t="unused-block",className:n="button-"+t};if("cancel"===e||"save"===e)return a={name:t=e,className:n="button-"+e};if("boolean"==typeof e)return a={name:t=e?"yes":"no",className:n="button-"+(e?"confirm":"cancel")};var r=y(e);if(r.length>1)return t=r[2],n="map-"+r[2],a={name:t,className:n};a={name:t,className:n}}(e),function(e){i=r.appendChild(document.createElement("button")),"save"===e.name?(i.setAttribute("type","submit"),i.setAttribute("form","save-form"),i.setAttribute("disabled","")):i.setAttribute("type","button"),["button",""+e.className].forEach(function(e){return i.classList.add(""+e)}),i.textContent=""+e.name}(a)})},m=function(e){c.innerHTML=e+" map...",d.parentNode.replaceChild(s,d)},M=function(e){var t=e.heading,u=void 0===t?"load":t,i=e.label,a=e.options;b(),_(),function(e){(o=r.appendChild(document.createElement("span"))).classList.add("modal-list-label"),o.textContent=e}(i),p(a),m(u),n()},h=[!1,!0],j=["unused block"],g=["back"];if("new"===e&&M({heading:"Save",label:"Would you like to save current map?",options:h}),"confirmLoad"===e&&M({label:"Load '"+y(t[0])[2]+"' file?",options:h}),"overwrite"===e&&M({heading:"Overwrite",label:"Overwrite '"+y(t[0])[2]+"' file?",options:h}),"newSave"===e&&function(e){var t=e.heading,r=e.placeholder,o=e.options;b(),(l=u.appendChild(document.createElement("form"))).classList.add("modal-list-item"),l.setAttribute("id","save-form"),function(e){(f=l.appendChild(document.createElement("input"))).setAttribute("type","text"),f.setAttribute("name","filename"),f.setAttribute("autocomplete","off"),f.setAttribute("maxlength",12),f.setAttribute("placeholder",""+e),f.classList.add("modal-list-label")}(r),p(o),m(t),n()}({heading:"Save",placeholder:"Enter file name",options:["cancel","save"]}),"load"===e&&0===t.length&&M({label:"There is no saved data",options:g}),"save"===e&&0===t.length){var O=j.slice();O.push(g[0]),M({heading:"Save",label:"Choose a block to save",options:O})}var P=t.map(function(e){return e.name});if(P.push(g[0]),"load"===e&&t.length>0&&M({label:"Choose a file to load",options:P}),"save"===e&&t.length>0){var w=P.slice();P.length<4&&w.splice(w.length-1,0,j[0]),M({heading:"Save",label:"Choose a block to save",options:w})}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(68);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));var u=function(){var e=function(){return document.querySelectorAll(".js-viewport polygon")},t=document.querySelector(".js-new-file"),n=function(e){var t=void 0,n=r.default.getModel();t=Array.isArray(e)?n.map(function(t,n){return e[n]}):n.map(function(t){return e}),r.default.setModel(t)};return{newFile:function(){n("framework"),e().forEach(function(e){return e.setAttribute("class","framework")}),t.setAttribute("disabled","")},loadFile:function(r){n(r),e().forEach(function(e,t){return e.setAttribute("class",r[t])}),t.hasAttribute("disabled")&&t.removeAttribute("disabled")}}}();t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(70);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){u=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=a(n(71)),o=a(n(72)),i=a(n(74));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){document.querySelectorAll(".menu-list-color-picker-item polygon").forEach(function(e){var t=r(e,2),n=t[0],u=t[1];return function(e){return e.addEventListener(n,u)}}(e))};t.default=function(){return function(e){return e.map(l)}([["click",u.default],["mouseout",o.default],["mouseover",i.default]])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(73);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return window.event.target.classList.remove("shadow")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(75);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return window.event.target.classList.add("shadow")}}]);