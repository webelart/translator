!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e){function n(t){var e=o.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)}t.exports=n;var o=Object.prototype.toString},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=(n.n(o),n(3)),s=(n.n(r),n(4)),i=n(17);({initialize:function(){document.addEventListener("deviceready",this.onDeviceReady.bind(this),!1)},onDeviceReady:function(){window.modal=new i.a,new s.a({parentNode:".translator",iconNode:".translator--icon",btnNode:".translator--btn",loaderNode:".translator--loader",classes:{activeIcon:"translator--icon-active",text:"answer--text",error:"answer--error",buttonWrapper:"answer--btn",button:"btn",answer:"answer"}}).init()}}).initialize()},function(t,e){},function(t,e){},function(t,e,n){"use strict";function o(t){this.parentNode=document.querySelector(t.parentNode),this.iconNode=this.parentNode.querySelector(t.iconNode),this.btnNode=this.parentNode.querySelector(t.btnNode),this.loaderNode=this.parentNode.querySelector(t.loaderNode),this.classes=t.classes}e.a=o;var r=n(5),s=n(6),i=n(14),a=n(15),c=n(16),d=(n.n(c),"iOS"===Object(i.a)());o.prototype=Object.assign(o.prototype,{init:function(){this.parentNode.dataset.initedTranslator||(this.parentNode.dataset.initedTranslator=!0,this.stop=this.stop.bind(this),this.start=this.start.bind(this),this.speak=this.speak.bind(this),this.startIOS=this.startIOS.bind(this),this.showAnswerInModal=this.showAnswerInModal.bind(this),this.showErrorInModal=this.showErrorInModal.bind(this),this.isSpeechStarted=!1,this.events())},events:function(){r.a.requestPermission();var t=d?this.startIOS:this.start;this.btnNode.addEventListener("click",t)},startIOS:function(){this.isSpeechStarted?(r.a.stopListening(),this.isSpeechStarted=!1):(this.isSpeechStarted=!0,this.btnNode.innerHTML="Остановить",this.start())},start:function(){d||(this.btnNode.disabled=!0),this.iconNode.classList.add(this.classes.activeIcon),r.a.hasPermission().then(r.a.startListening).then(this.stop).catch(this.showErrorInModal.bind(this,"Фраза не распознана."))},stop:function(t){this.clearStyles(),this.loaderNode.style.display="block",Object(s.a)({method:"POST",url:"https://translate.yandex.net/api/v1.5/tr.json/translate?key="+encodeURIComponent("trnsl.1.1.20170723T140206Z.abdacee94ec6046d.4da303836a8864d67d556ed472a2a1328ffc486e")+"&lang=ru-en&text="+encodeURIComponent(t[0])}).then(this.showAnswerInModal).catch(this.showErrorInModal)},speak:function(t){var e=this.btnSpeakNode;e.disabled=!0,a.a.start(t).then(function(){e.disabled=!1}).catch(function(){e.disabled=!1})},showAnswerInModal:function(t){this.loaderNode.style.display="none";var e=t.text[0];modal.open(this.createAnswerHtml(e))},showErrorInModal:function(t){this.clearStyles(),this.loaderNode.style.display="none";var e=t instanceof Object&&t.message?t.message:t;modal.open(this.createErrorHtml(e))},clearStyles:function(){d?this.btnNode.innerHTML="Начать":this.btnNode.disabled=!1,this.iconNode.classList.remove(this.classes.activeIcon)},createAnswerHtml:function(t){var e=this.classes,n=document.createElement("div");return n.className=e.answer,n.innerHTML='<p class="'+e.text+'">'+t+'</p><div class="'+e.buttonWrapper+'"><button class="'+e.button+'">Воспроизвести</button></div>',this.btnSpeakNode=n.querySelector(".btn"),this.btnSpeakNode.addEventListener("click",this.speak.bind(this,t)),n},createErrorHtml:function(t){var e=this.classes,n=document.createElement("p");return n.className=e.text+" "+e.error,n.innerHTML=t,n}})},function(t,e,n){"use strict";var o={requestPermission:function(){return new Promise(function(t,e){window.plugins.speechRecognition.requestPermission(t,e)})},hasPermission:function(){return new Promise(function(t,e){window.plugins.speechRecognition.hasPermission(t,e)})},startListening:function(t){var e=Object.assign({language:"ru-RU",matches:5,showPopup:!1},t||{});return new Promise(function(t,n){window.plugins.speechRecognition.startListening(t,n,e)})},stopListening:function(){return new Promise(function(t,e){window.plugins.speechRecognition.stopListening(t,e)})}};e.a=o},function(t,e,n){"use strict";function o(t){const e={body:t.data?JSON.stringify(t.data):"",method:t.method||"GET",url:t.url,headers:{"Content-Type":t.contentType||"application/json"}};return new Promise(function(t,n){s()(e,function(e,o,r){const s=JSON.parse(r);return e||200!==o.statusCode&&201!==o.statusCode?n("Ошибка запроса."):t(s)})})}e.a=o;var r=n(7),s=n.n(r)},function(t,e,n){"use strict";function o(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function r(t,e,n){var o=t;return u(e)?(n=e,"string"==typeof t&&(o={uri:t})):o=p(e,{uri:t}),o.callback=n,o}function s(t,e,n){return e=r(t,e,n),i(e)}function i(t){function e(){4===u.readyState&&setTimeout(i,0)}function n(){var t=void 0;if(t=u.response?u.response:u.responseText||a(u),g)try{t=JSON.parse(t)}catch(t){}return t}function r(t){return clearTimeout(f),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,d(t,N)}function i(){if(!h){var e;clearTimeout(f),e=t.useXDR&&void 0===u.status?200:1223===u.status?204:u.status;var o=N,r=null;return 0!==e?(o={body:n(),statusCode:e,method:w,headers:{},url:m,rawRequest:u},u.getAllResponseHeaders&&(o.headers=l(u.getAllResponseHeaders()))):r=new Error("Internal XMLHttpRequest Error"),d(r,o,o.body)}}if(void 0===t.callback)throw new Error("callback argument missing");var c=!1,d=function(e,n,o){c||(c=!0,t.callback(e,n,o))},u=t.xhr||null;u||(u=t.cors||t.useXDR?new s.XDomainRequest:new s.XMLHttpRequest);var p,h,f,m=u.url=t.uri||t.url,w=u.method=t.method||"GET",v=t.body||t.data,y=u.headers=t.headers||{},b=!!t.sync,g=!1,N={body:void 0,headers:{},statusCode:0,method:w,url:m,rawRequest:u};if("json"in t&&!1!==t.json&&(g=!0,y.accept||y.Accept||(y.Accept="application/json"),"GET"!==w&&"HEAD"!==w&&(y["content-type"]||y["Content-Type"]||(y["Content-Type"]="application/json"),v=JSON.stringify(!0===t.json?v:t.json))),u.onreadystatechange=e,u.onload=i,u.onerror=r,u.onprogress=function(){},u.onabort=function(){h=!0},u.ontimeout=r,u.open(w,m,!b,t.username,t.password),b||(u.withCredentials=!!t.withCredentials),!b&&t.timeout>0&&(f=setTimeout(function(){if(!h){h=!0,u.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",r(t)}},t.timeout)),u.setRequestHeader)for(p in y)y.hasOwnProperty(p)&&u.setRequestHeader(p,y[p]);else if(t.headers&&!o(t.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in t&&(u.responseType=t.responseType),"beforeSend"in t&&"function"==typeof t.beforeSend&&t.beforeSend(u),u.send(v||null),u}function a(t){if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;return""!==t.responseType||e?null:t.responseXML}function c(){}var d=n(8),u=n(0),l=n(10),p=n(13);t.exports=s,s.XMLHttpRequest=d.XMLHttpRequest||c,s.XDomainRequest="withCredentials"in new s.XMLHttpRequest?s.XMLHttpRequest:d.XDomainRequest,function(t,e){for(var n=0;n<t.length;n++)e(t[n])}(["get","put","post","patch","head","delete"],function(t){s["delete"===t?"del":t]=function(e,n,o){return n=r(e,n,o),n.method=t.toUpperCase(),i(n)}})},function(t,e,n){(function(e){var n;n="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},t.exports=n}).call(e,n(9))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(11),r=n(12),s=function(t){return"[object Array]"===Object.prototype.toString.call(t)};t.exports=function(t){if(!t)return{};var e={};return r(o(t).split("\n"),function(t){var n=t.indexOf(":"),r=o(t.slice(0,n)).toLowerCase(),i=o(t.slice(n+1));void 0===e[r]?e[r]=i:s(e[r])?e[r].push(i):e[r]=[e[r],i]}),e}},function(t,e){function n(t){return t.replace(/^\s*|\s*$/g,"")}e=t.exports=n,e.left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}},function(t,e,n){function o(t,e,n){if(!a(e))throw new TypeError("iterator must be a function");arguments.length<3&&(n=this),"[object Array]"===c.call(t)?r(t,e,n):"string"==typeof t?s(t,e,n):i(t,e,n)}function r(t,e,n){for(var o=0,r=t.length;o<r;o++)d.call(t,o)&&e.call(n,t[o],o,t)}function s(t,e,n){for(var o=0,r=t.length;o<r;o++)e.call(n,t.charAt(o),o,t)}function i(t,e,n){for(var o in t)d.call(t,o)&&e.call(n,t[o],o,t)}var a=n(0);t.exports=o;var c=Object.prototype.toString,d=Object.prototype.hasOwnProperty},function(t,e){function n(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];for(var r in n)o.call(n,r)&&(t[r]=n[r])}return t}t.exports=n;var o=Object.prototype.hasOwnProperty},function(t,e,n){"use strict";function o(){var t=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(t)?"Android":/iPad|iPhone|iPod/.test(t)&&!window.MSStream?"iOS":"unknown"}e.a=o},function(t,e,n){"use strict";var o={start:function(t){return new Promise(function(e,n){TTS.speak(t,e,n)})}};e.a=o},function(t,e){},function(t,e,n){"use strict";function o(){document.querySelector(".modal")||(this.addModalToHTML(),this.initVarsModal(),this.events())}e.a=o;var r=n(18);n.n(r);o.prototype=Object.assign(o.prototype,{addModalToHTML:function(){if(!document.querySelector(".modal")){var t=document.createElement("div");t.className="modal",t.innerHTML='<div class="modal--wrapper"><div class="modal--close"></div><div class="modal--container"></div></div>',document.body.appendChild(t)}},initVarsModal:function(){this.modalNode=document.querySelector(".modal"),this.modalContentNode=document.querySelector(".modal--container"),this.modalCloseNode=document.querySelector(".modal--close"),this.close=this.close.bind(this)},events:function(){this.modalCloseNode.addEventListener("click",this.close)},open:function(t){this.modalNode.style.display="block",this.modalContentNode.append(t)},close:function(){this.modalContentNode.innerHTML="",this.modalNode.style.display="none"}})},function(t,e){}]);