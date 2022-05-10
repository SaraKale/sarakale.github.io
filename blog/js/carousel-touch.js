"use strict";function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var radius=240,autoRotate=!0,rotateSpeed=-60,imgWidth=120,imgHeight=170;function carouselinit(t){setTimeout(i,1e3);var a=document.getElementById(t+"-drag-container");console.log(a);var e=document.getElementById(t+"-spin-container"),r=e.getElementsByTagName("img"),n=e.getElementsByTagName("video"),o=[].concat(_toConsumableArray(r),_toConsumableArray(n));e.style.width=imgWidth+"px",e.style.height=imgHeight+"px";n=document.getElementById(t+"-carousel-ground");function i(t){for(var e=0;e<o.length;e++)o[e].style.transform="rotateY("+e*(360/o.length)+"deg) translateZ("+radius+"px)",o[e].style.transition="transform 1s",o[e].style.transitionDelay=t||(o.length-e)/4+"s"}function l(t){(d=180<d?180:d)<0&&(d=0),t.style.transform="rotateX("+-d+"deg) rotateY("+c+"deg)"}function s(t){e.style.animationPlayState=t?"running":"paused"}n.style.width=3*radius+"px",n.style.height=3*radius+"px";var u=0,y=0,c=0,d=10;autoRotate&&(e.style.animation="".concat(0<rotateSpeed?"spin":"spinRevert"," ").concat(Math.abs(rotateSpeed),"s infinite linear")),document.getElementById(t).onpointerdown=function(t){clearInterval(a.timer);var r=(t=t||window.event).clientX,n=t.clientY;return this.onpointermove=function(t){var e=(t=t||window.event).clientX,t=t.clientY;c+=.1*(u=e-r),d+=.1*(y=t-n),l(a),r=e,n=t},!(this.onpointerup=function(t){a.timer=setInterval(function(){c+=.1*(u*=.95),d+=.1*(y*=.95),l(a),s(!1),Math.abs(u)<.5&&Math.abs(y)<.5&&(clearInterval(a.timer),s(!0))},17),this.onpointermove=this.onpointerup=null})},document.getElementById(t).onmousewheel=function(t){t=(t=t||window.event).wheelDelta/20||-t.detail;return radius+=t,i(1),!1}}