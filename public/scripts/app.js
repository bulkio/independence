/*! @license Firebase v4.1.3
Build: rev-1234895
Terms: https://firebase.google.com/terms/

---

typedarray.js
Copyright (c) 2010, Linden Research, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

var firebase=function(){var e=void 0===e?self:e;return function(t){function n(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var r=e.webpackJsonpFirebase;e.webpackJsonpFirebase=function(e,o,a){for(var c,s,u,f=0,l=[];f<e.length;f++)s=e[f],i[s]&&l.push(i[s][0]),i[s]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c]);for(r&&r(e,o,a);l.length;)l.shift()();if(a)for(f=0;f<a.length;f++)u=n(n.s=a[f]);return u};var o={},i={2:0};return n.e=function(e){function t(){a.onerror=a.onload=null,clearTimeout(c);var t=i[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),i[e]=void 0)}if(0===i[e])return Promise.resolve();if(i[e])return i[e][2];var r=new Promise(function(t,n){i[e]=[t,n]});i[e][2]=r;var o=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,n.nc&&a.setAttribute("nonce",n.nc),a.src=n.p+""+e+".js";var c=setTimeout(t,12e4);return a.onerror=a.onload=t,o.appendChild(a),r},n.m=t,n.c=o,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.oe=function(e){throw console.error(e),e},n(n.s=4)}({10:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=void 0;if(void 0!==e)r=e;else if("undefined"!=typeof self)r=self;else try{r=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var o=r.Promise||n(52);t.local={Promise:o,GoogPromise:o}}).call(t,n(26))},17:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){var n=new p(e,t);return n.subscribe.bind(n)}function i(e,t){return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];l.resolve(!0).then(function(){e.apply(void 0,r)}).catch(function(e){t&&t(e)})}}function a(e,t){if("object"!==(void 0===e?"undefined":s(e))||null===e)return!1;var n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value;if(c in e&&"function"==typeof e[c])return!0}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return!1}function c(){}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.createSubscribe=o,t.async=i;var f=n(10),l=f.local.Promise,p=function(){function e(t,n){var o=this;r(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=l.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(function(){t(o)}).catch(function(e){o.error(e)})}return u(e,[{key:"next",value:function(e){this.forEachObserver(function(t){t.next(e)})}},{key:"error",value:function(e){this.forEachObserver(function(t){t.error(e)}),this.close(e)}},{key:"complete",value:function(){this.forEachObserver(function(e){e.complete()}),this.close()}},{key:"subscribe",value:function(e,t,n){var r=this,o=void 0;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");o=a(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===o.next&&(o.next=c),void 0===o.error&&(o.error=c),void 0===o.complete&&(o.complete=c);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(function(){try{r.finalError?o.error(r.finalError):o.complete()}catch(e){}}),this.observers.push(o),i}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then(function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(function(){t.observers=void 0,t.onNoObservers=void 0}))}}]),e}()},26:function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof e&&(r=e)}t.exports=r},27:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){function e(e){return e=e||d,l(a,e)||i("no-app",{name:e}),a[e]}function t(){return Object.keys(a).map(function(e){return a[e]})}function n(e,t){Object.keys(h).forEach(function(n){var o=r(e,n);null!==o&&m[o]&&m[o](t,e)})}function r(e,t){return"serverAuth"===t?null:(e.options,t)}var a={},h={},m={},y={__esModule:!0,initializeApp:function(e,t){void 0===t?t=d:"string"==typeof t&&""!==t||i("bad-app-name",{name:t+""}),l(a,t)&&i("duplicate-app",{name:t});var r=new v(e,t,y);return a[t]=r,n(r,"create"),r},app:e,apps:null,Promise:p,SDK_VERSION:"4.1.3",INTERNAL:{registerService:function(n,r,o,a,c){h[n]&&i("duplicate-service",{name:n}),h[n]=r,a&&(m[n]=a,t().forEach(function(e){a("create",e)}));var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e();return"function"!=typeof t[n]&&i("invalid-app-argument",{name:n}),t[n]()};return void 0!==o&&(0,f.deepExtend)(s,o),y[n]=s,v.prototype[n]=function(){for(var e=this._getService.bind(this,n),t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.apply(this,c?r:[])},s},createFirebaseNamespace:o,extendNamespace:function(e){(0,f.deepExtend)(y,e)},createSubscribe:c.createSubscribe,ErrorFactory:s.ErrorFactory,removeApp:function(e){n(a[e],"delete"),delete a[e]},factories:h,useAsService:r,Promise:u.local.GoogPromise,deepExtend:f.deepExtend}};return(0,f.patchProperty)(y,"default",y),Object.defineProperty(y,"apps",{get:t}),(0,f.patchProperty)(e,"App",v),y}function i(e,t){throw y.create(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.createFirebaseNamespace=o;var c=n(17),s=n(9),u=n(10),f=n(32),l=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p=u.local.Promise,d="[DEFAULT]",h=[],v=function(){function e(t,n,o){r(this,e),this.firebase_=o,this.isDeleted_=!1,this.services_={},this.name_=n,this.options_=(0,f.deepCopy)(t),this.INTERNAL={getUid:function(){return null},getToken:function(){return p.resolve(null)},addAuthTokenListener:function(e){h.push(e),setTimeout(function(){return e(null)},0)},removeAuthTokenListener:function(e){h=h.filter(function(t){return t!==e})}}}return a(e,[{key:"delete",value:function(){var e=this;return new p(function(t){e.checkDestroyed_(),t()}).then(function(){e.firebase_.INTERNAL.removeApp(e.name_);var t=[];return Object.keys(e.services_).forEach(function(n){Object.keys(e.services_[n]).forEach(function(r){t.push(e.services_[n][r])})}),p.all(t.map(function(e){return e.INTERNAL.delete()}))}).then(function(){e.isDeleted_=!0,e.services_={}})}},{key:"_getService",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;if(this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),!this.services_[e][t]){var n=t!==d?t:void 0,r=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),n);this.services_[e][t]=r}return this.services_[e][t]}},{key:"extendApp",value:function(e){var t=this;(0,f.deepExtend)(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(h.forEach(function(e){t.INTERNAL.addAuthTokenListener(e)}),h=[])}},{key:"checkDestroyed_",value:function(){this.isDeleted_&&i("app-deleted",{name:this.name_})}},{key:"name",get:function(){return this.checkDestroyed_(),this.name_}},{key:"options",get:function(){return this.checkDestroyed_(),this.options_}}]),e}();v.prototype.name&&v.prototype.options||v.prototype.delete||console.log("dc");var m={"no-app":"No Firebase App '{$name}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$name}","duplicate-app":"Firebase App named '{$name}' already exists","app-deleted":"Firebase App named '{$name}' already deleted","duplicate-service":"Firebase service named '{$name}' already registered","sa-not-supported":"Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain","invalid-app-argument":"firebase.{$name}() takes either no argument or a Firebase App instance."},y=new s.ErrorFactory("app","Firebase",m)},32:function(e,t,n){"use strict";function r(e){return o(void 0,e)}function o(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&(e[n]=o(e[n],t[n]));return e}function i(e,t,n){e[t]=n}Object.defineProperty(t,"__esModule",{value:!0}),t.deepCopy=r,t.deepExtend=o,t.patchProperty=i},4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),o=(0,r.createFirebaseNamespace)();t.default=o,e.exports=t.default},51:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function a(){v&&d&&(v=!1,d.length?h=d.concat(h):m=-1,h.length&&c())}function c(){if(!v){var e=o(a);v=!0;for(var t=h.length;t;){for(d=h,h=[];++m<t;)d&&d[m].run();m=-1,t=h.length}d=null,v=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function u(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,h=[],v=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||v||o(c)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},52:function(e,t,n){(function(t){!function(n){function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?c:s)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)})}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void l(o(n,t),e)}e._state=1,e._value=t,u(e)}catch(t){s(e,t)}}function s(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}var p=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return a(this,new f(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(e){r(i,e)},n)}t[i]=a,0==--o&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){p(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(54).setImmediate)},53:function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return u[s]=r,c(s),s++}function o(e){delete u[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(f)setTimeout(a,0,e);else{var t=u[e];if(t){f=!0;try{i(t)}finally{o(e),f=!1}}}}if(!e.setImmediate){var c,s=1,u={},f=!1,l=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?function(){c=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),c=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},c=function(t){e.port2.postMessage(t)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;c=function(t){var n=l.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){c=function(e){setTimeout(a,0,e)}}(),p.setImmediate=r,p.clearImmediate=o}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(26),n(51))},54:function(t,n,r){function o(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;n.setTimeout=function(){return new o(i.call(setTimeout,e,arguments),clearTimeout)},n.setInterval=function(){return new o(i.call(setInterval,e,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(e,this._id)},n.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},r(53),n.setImmediate=setImmediate,n.clearImmediate=clearImmediate},9:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){var t=a;return a=e,t}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.patchCapture=o;var a=Error.captureStackTrace,c=t.FirebaseError=function e(t,n){if(r(this,e),this.code=t,this.message=n,a)a(this,s.prototype.create);else{var o=Error.apply(this,arguments);this.name="FirebaseError",Object.defineProperty(this,"stack",{get:function(){return o.stack}})}};c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,c.prototype.name="FirebaseError";var s=t.ErrorFactory=function(){function e(t,n,o){r(this,e),this.service=t,this.serviceName=n,this.errors=o,this.pattern=/\{\$([^}]+)}/g}return i(e,[{key:"create",value:function(e,t){void 0===t&&(t={});var n=this.errors[e],r=this.service+"/"+e,o=void 0;o=void 0===n?"Error":n.replace(this.pattern,function(e,n){var r=t[n];return void 0!==r?r.toString():"<"+n+"?>"}),o=this.serviceName+": "+o+" ("+r+").";var i=new c(r,o);for(var a in t)t.hasOwnProperty(a)&&"_"!==a.slice(-1)&&(i[a]=t[a]);return i}}]),e}()}})}();

(function(){var h,aa=aa||{},k=this,m=function(a){return void 0!==a},p=function(a){return"string"==typeof a},ba=function(a){return"boolean"==typeof a},ca=function(a){return"number"==typeof a},da=function(){},ea=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},fa=function(a){return null===a},ga=function(a){return"array"==ea(a)},ha=function(a){var b=ea(a);return"array"==b||"object"==b&&"number"==typeof a.length},q=function(a){return"function"==ea(a)},r=function(a){var b=
typeof a;return"object"==b&&null!=a||"function"==b},ia=function(a,b,c){return a.call.apply(a.bind,arguments)},ja=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},t=function(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return t.apply(null,
arguments)},ka=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},la=Date.now||function(){return+new Date},u=function(a,b){function c(){}c.prototype=b.prototype;a.Nc=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.dg=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var v=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,v);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(v,Error);v.prototype.name="CustomError";var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},na=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},va=function(a){if(!oa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ra,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sa,"&quot;"));-1!=a.indexOf("'")&&
(a=a.replace(ta,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ua,"&#0;"));return a},pa=/&/g,qa=/</g,ra=/>/g,sa=/"/g,ta=/'/g,ua=/\x00/g,oa=/[\x00&<>"']/,w=function(a,b){return-1!=a.indexOf(b)},wa=function(a,b){return a<b?-1:a>b?1:0};var xa=function(a,b){b.unshift(a);v.call(this,ma.apply(null,b));b.shift()};u(xa,v);xa.prototype.name="AssertionError";
var ya=function(a,b,c,d){var e="Assertion failed";if(c){e+=": "+c;var f=d}else a&&(e+=": "+a,f=b);throw new xa(""+e,f||[]);},x=function(a,b,c){a||ya("",null,b,Array.prototype.slice.call(arguments,2))},za=function(a,b){throw new xa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},Aa=function(a,b,c){ca(a)||ya("Expected number but got %s: %s.",[ea(a),a],b,Array.prototype.slice.call(arguments,2));return a},Ba=function(a,b,c){p(a)||ya("Expected string but got %s: %s.",[ea(a),a],b,Array.prototype.slice.call(arguments,
2))},Ca=function(a,b,c){q(a)||ya("Expected function but got %s: %s.",[ea(a),a],b,Array.prototype.slice.call(arguments,2))};var Ea=function(){this.Mc="";this.He=Da};Ea.prototype.Jb=!0;Ea.prototype.Gb=function(){return this.Mc};Ea.prototype.toString=function(){return"Const{"+this.Mc+"}"};var Fa=function(a){if(a instanceof Ea&&a.constructor===Ea&&a.He===Da)return a.Mc;za("expected object of type Const, got '"+a+"'");return"type_error:Const"},Da={},Ga=function(a){var b=new Ea;b.Mc=a;return b};Ga("");var Ia=function(){this.Fc="";this.Ie=Ha};Ia.prototype.Jb=!0;Ia.prototype.Gb=function(){return this.Fc};Ia.prototype.toString=function(){return"TrustedResourceUrl{"+this.Fc+"}"};
var Ja=function(a){if(a instanceof Ia&&a.constructor===Ia&&a.Ie===Ha)return a.Fc;za("expected object of type TrustedResourceUrl, got '"+a+"' of type "+ea(a));return"type_error:TrustedResourceUrl"},La=function(a,b){a=Ka(a,b);b=new Ia;b.Fc=a;return b},Ka=function(a,b){var c=Fa(a);if(!Ma.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);return c.replace(Na,function(a,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+
JSON.stringify(b));a=b[e];return a instanceof Ea?Fa(a):encodeURIComponent(String(a))})},Na=/%{(\w+)}/g,Ma=/^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,Ha={};var Oa=Array.prototype.indexOf?function(a,b,c){x(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b,c){x(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=function(a,b){for(var c=p(a)?
a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)},Qa=Array.prototype.map?function(a,b,c){x(null!=a.length);return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},Ra=Array.prototype.some?function(a,b,c){x(null!=a.length);return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},
Ta=function(a){a:{var b=Sa;for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]},Ua=function(a,b){return 0<=Oa(a,b)},Wa=function(a,b){b=Oa(a,b);var c;(c=0<=b)&&Va(a,b);return c},Va=function(a,b){x(null!=a.length);return 1==Array.prototype.splice.call(a,b,1).length},Xa=function(a,b){var c=0;Pa(a,function(d,e){b.call(void 0,d,e,a)&&Va(a,e)&&c++})},Ya=function(a){return Array.prototype.concat.apply([],arguments)},
Za=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var $a=function(a){return Qa(a,function(a){a=a.toString(16);return 1<a.length?a:"0"+a}).join("")};var ab;a:{var bb=k.navigator;if(bb){var cb=bb.userAgent;if(cb){ab=cb;break a}}ab=""}var z=function(a){return w(ab,a)};var db=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},eb=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1},fb=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},gb=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b},hb=function(a){for(var b in a)return!1;return!0},ib=function(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0},jb=function(a){var b={},c;for(c in a)b[c]=a[c];return b},kb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
lb=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<kb.length;f++)c=kb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var mb=function(a){mb[" "](a);return a};mb[" "]=da;var ob=function(a,b){var c=nb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var qb=z("Opera"),A=z("Trident")||z("MSIE"),rb=z("Edge"),sb=rb||A,tb=z("Gecko")&&!(w(ab.toLowerCase(),"webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),ub=w(ab.toLowerCase(),"webkit")&&!z("Edge"),vb=function(){var a=k.document;return a?a.documentMode:void 0},wb;
a:{var xb="",yb=function(){var a=ab;if(tb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(rb)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ub)return/WebKit\/(\S+)/.exec(a);if(qb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();yb&&(xb=yb?yb[1]:"");if(A){var zb=vb();if(null!=zb&&zb>parseFloat(xb)){wb=String(zb);break a}}wb=xb}
var Ab=wb,nb={},B=function(a){return ob(a,function(){for(var b=0,c=na(String(Ab)).split("."),d=na(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==g[0].length&&0==l[0].length)break;b=wa(0==g[1].length?0:parseInt(g[1],10),0==l[1].length?0:parseInt(l[1],10))||wa(0==g[2].length,0==l[2].length)||wa(g[2],l[2]);g=g[3];l=l[3]}while(0==b)}return 0<=b})},Bb;var Cb=k.document;
Bb=Cb&&A?vb()||("CSS1Compat"==Cb.compatMode?parseInt(Ab,10):5):void 0;var Db=null,Eb=null,Gb=function(a){var b="";Fb(a,function(a){b+=String.fromCharCode(a)});return b},Fb=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Eb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Hb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),l=c(64);if(64===l&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=l&&b(g<<6&192|l))}},Hb=function(){if(!Db){Db={};Eb={};for(var a=0;65>a;a++)Db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),
Eb[Db[a]]=a,62<=a&&(Eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var Ib=function(){this.Fa=-1};var Lb=function(a,b){this.Fa=64;this.lc=k.Uint8Array?new Uint8Array(this.Fa):Array(this.Fa);this.Rc=this.kb=0;this.i=[];this.wf=a;this.ge=b;this.Xf=k.Int32Array?new Int32Array(64):Array(64);m(Jb)||(Jb=k.Int32Array?new Int32Array(Kb):Kb);this.reset()},Jb;u(Lb,Ib);for(var Mb=[],Nb=0;63>Nb;Nb++)Mb[Nb]=0;var Ob=Ya(128,Mb);Lb.prototype.reset=function(){this.Rc=this.kb=0;this.i=k.Int32Array?new Int32Array(this.ge):Za(this.ge)};
var Pb=function(a){var b=a.lc;x(b.length==a.Fa);for(var c=a.Xf,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){d=c[b-15]|0;e=c[b-2]|0;e=(e>>>17|e<<15)^(e>>>19|e<<13)^e>>>10;var f=(c[b-16]|0)+((d>>>7|d<<25)^(d>>>18|d<<14)^d>>>3)|0;var g=(c[b-7]|0)+e|0;c[b]=f+g|0}var d=a.i[0]|0,e=a.i[1]|0,l=a.i[2]|0,n=a.i[3]|0,C=a.i[4]|0,pb=a.i[5]|0,Xb=a.i[6]|0;f=a.i[7]|0;for(b=0;64>b;b++){var Wh=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&l^e&l)|0;g=C&pb^~C&Xb;f=f+
((C>>>6|C<<26)^(C>>>11|C<<21)^(C>>>25|C<<7))|0;g=g+(Jb[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=Xb;Xb=pb;pb=C;C=n+g|0;n=l;l=e;e=d;d=g+Wh|0}a.i[0]=a.i[0]+d|0;a.i[1]=a.i[1]+e|0;a.i[2]=a.i[2]+l|0;a.i[3]=a.i[3]+n|0;a.i[4]=a.i[4]+C|0;a.i[5]=a.i[5]+pb|0;a.i[6]=a.i[6]+Xb|0;a.i[7]=a.i[7]+f|0};
Lb.prototype.update=function(a,b){m(b)||(b=a.length);var c=0,d=this.kb;if(p(a))for(;c<b;)this.lc[d++]=a.charCodeAt(c++),d==this.Fa&&(Pb(this),d=0);else if(ha(a))for(;c<b;){var e=a[c++];if(!("number"==typeof e&&0<=e&&255>=e&&e==(e|0)))throw Error("message must be a byte array");this.lc[d++]=e;d==this.Fa&&(Pb(this),d=0)}else throw Error("message must be string or array");this.kb=d;this.Rc+=b};
Lb.prototype.digest=function(){var a=[],b=8*this.Rc;56>this.kb?this.update(Ob,56-this.kb):this.update(Ob,this.Fa-(this.kb-56));for(var c=63;56<=c;c--)this.lc[c]=b&255,b/=256;Pb(this);for(c=b=0;c<this.wf;c++)for(var d=24;0<=d;d-=8)a[b++]=this.i[c]>>d&255;return a};
var Kb=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];var Rb=function(){Lb.call(this,8,Qb)};u(Rb,Lb);var Qb=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];var Sb=function(){this.Ia=this.Ia;this.Cc=this.Cc};Sb.prototype.Ia=!1;Sb.prototype.isDisposed=function(){return this.Ia};Sb.prototype.hb=function(){if(this.Cc)for(;this.Cc.length;)this.Cc.shift()()};var Tb=!A||9<=Number(Bb),Ub=A&&!B("9");!ub||B("528");tb&&B("1.9b")||A&&B("8")||qb&&B("9.5")||ub&&B("528");tb&&!B("8")||A&&B("9");var Vb=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});k.addEventListener("test",null,b);k.removeEventListener("test",null,b);return a}();var Wb=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.Ta=!1;this.re=!0};Wb.prototype.stopPropagation=function(){this.Ta=!0};Wb.prototype.preventDefault=function(){this.defaultPrevented=!0;this.re=!1};var Yb=function(a,b){Wb.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.la=this.state=null;a&&this.init(a,b)};u(Yb,Wb);
Yb.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;if(b=a.relatedTarget){if(tb){a:{try{mb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.offsetX=ub||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=ub||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,
this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.la=a;a.defaultPrevented&&
this.preventDefault()};Yb.prototype.stopPropagation=function(){Yb.Nc.stopPropagation.call(this);this.la.stopPropagation?this.la.stopPropagation():this.la.cancelBubble=!0};Yb.prototype.preventDefault=function(){Yb.Nc.preventDefault.call(this);var a=this.la;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ub)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Yb.prototype.af=function(){return this.la};var Zb="closure_listenable_"+(1E6*Math.random()|0),$b=0;var ac=function(a,b,c,d,e){this.listener=a;this.Gc=null;this.src=b;this.type=c;this.capture=!!d;this.qc=e;this.key=++$b;this.tb=this.kc=!1},bc=function(a){a.tb=!0;a.listener=null;a.Gc=null;a.src=null;a.qc=null};var cc=function(a){this.src=a;this.I={};this.fc=0};cc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.I[f];a||(a=this.I[f]=[],this.fc++);var g=dc(a,b,d,e);-1<g?(b=a[g],c||(b.kc=!1)):(b=new ac(b,this.src,f,!!d,e),b.kc=c,a.push(b));return b};cc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.I))return!1;var e=this.I[a];b=dc(e,b,c,d);return-1<b?(bc(e[b]),Va(e,b),0==e.length&&(delete this.I[a],this.fc--),!0):!1};
var ec=function(a,b){var c=b.type;c in a.I&&Wa(a.I[c],b)&&(bc(b),0==a.I[c].length&&(delete a.I[c],a.fc--))};cc.prototype.gd=function(a,b,c,d){a=this.I[a.toString()];var e=-1;a&&(e=dc(a,b,c,d));return-1<e?a[e]:null};cc.prototype.hasListener=function(a,b){var c=m(a),d=c?a.toString():"",e=m(b);return eb(this.I,function(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};
var dc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.tb&&f.listener==b&&f.capture==!!c&&f.qc==d)return e}return-1};var fc="closure_lm_"+(1E6*Math.random()|0),gc={},hc=0,jc=function(a,b,c,d,e){if(d&&d.once)ic(a,b,c,d,e);else if(ga(b))for(var f=0;f<b.length;f++)jc(a,b[f],c,d,e);else c=kc(c),a&&a[Zb]?a.listen(b,c,r(d)?!!d.capture:!!d,e):lc(a,b,c,!1,d,e)},lc=function(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=r(e)?!!e.capture:!!e,l=mc(a);l||(a[fc]=l=new cc(a));c=l.add(b,c,d,g,f);if(!c.Gc){d=nc();c.Gc=d;d.src=a;d.listener=c;if(a.addEventListener)Vb||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),
d,e);else if(a.attachEvent)a.attachEvent(oc(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");hc++}},nc=function(){var a=pc,b=Tb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b},ic=function(a,b,c,d,e){if(ga(b))for(var f=0;f<b.length;f++)ic(a,b[f],c,d,e);else c=kc(c),a&&a[Zb]?qc(a,b,c,r(d)?!!d.capture:!!d,e):lc(a,b,c,!0,d,e)},rc=function(a,b,c,d,e){if(ga(b))for(var f=0;f<b.length;f++)rc(a,b[f],c,d,
e);else d=r(d)?!!d.capture:!!d,c=kc(c),a&&a[Zb]?a.da.remove(String(b),c,d,e):a&&(a=mc(a))&&(b=a.gd(b,c,d,e))&&sc(b)},sc=function(a){if(!ca(a)&&a&&!a.tb){var b=a.src;if(b&&b[Zb])ec(b.da,a);else{var c=a.type,d=a.Gc;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(oc(c),d);hc--;(c=mc(b))?(ec(c,a),0==c.fc&&(c.src=null,b[fc]=null)):bc(a)}}},oc=function(a){return a in gc?gc[a]:gc[a]="on"+a},uc=function(a,b,c,d){var e=!0;if(a=mc(a))if(b=a.I[b.toString()])for(b=b.concat(),
a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.tb&&(f=tc(f,d),e=e&&!1!==f)}return e},tc=function(a,b){var c=a.listener,d=a.qc||a.src;a.kc&&sc(a);return c.call(d,b)},pc=function(a,b){if(a.tb)return!0;if(!Tb){if(!b)a:{b=["window","event"];for(var c=k,d;d=b.shift();)if(null!=c[d])c=c[d];else{b=null;break a}b=c}d=b;b=new Yb(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=
b.currentTarget;e;e=e.parentNode)d.push(e);for(var e=a.type,f=d.length-1;!b.Ta&&0<=f;f--)b.currentTarget=d[f],a=uc(d[f],e,!0,b),c=c&&a;for(f=0;!b.Ta&&f<d.length;f++)b.currentTarget=d[f],a=uc(d[f],e,!1,b),c=c&&a}return c}return tc(a,new Yb(b,this))},mc=function(a){a=a[fc];return a instanceof cc?a:null},vc="__closure_events_fn_"+(1E9*Math.random()>>>0),kc=function(a){x(a,"Listener can not be null.");if(q(a))return a;x(a.handleEvent,"An object listener must have handleEvent method.");a[vc]||(a[vc]=function(b){return a.handleEvent(b)});
return a[vc]};var wc=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;var yc=function(){this.ta="";this.Ge=xc};yc.prototype.Jb=!0;yc.prototype.Gb=function(){return this.ta};yc.prototype.toString=function(){return"SafeUrl{"+this.ta+"}"};
var zc=function(a){if(a instanceof yc&&a.constructor===yc&&a.Ge===xc)return a.ta;za("expected object of type SafeUrl, got '"+a+"' of type "+ea(a));return"type_error:SafeUrl"},Ac=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Cc=function(a){if(a instanceof yc)return a;a=a.Jb?a.Gb():String(a);Ac.test(a)||(a="about:invalid#zClosurez");return Bc(a)},xc={},Bc=function(a){var b=new yc;b.ta=a;return b};Bc("about:blank");var Fc=function(a){var b=[];Dc(new Ec,a,b);return b.join("")},Ec=function(){this.Hc=void 0},Dc=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ga(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),e=d[f],Dc(a,a.Hc?a.Hc.call(d,String(f),e):e,c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");f="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(e=b[d],"function"!=typeof e&&(c.push(f),
Gc(d,c),c.push(":"),Dc(a,a.Hc?a.Hc.call(b,d,e):e,c),f=","));c.push("}");return}}switch(typeof b){case "string":Gc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}},Hc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ic=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,
Gc=function(a,b){b.push('"',a.replace(Ic,function(a){var b=Hc[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Hc[a]=b);return b}),'"')};var Jc=function(){};Jc.prototype.Nd=null;var Kc=function(a){return a.Nd||(a.Nd=a.nd())};var Lc,Mc=function(){};u(Mc,Jc);Mc.prototype.mc=function(){var a=Nc(this);return a?new ActiveXObject(a):new XMLHttpRequest};Mc.prototype.nd=function(){var a={};Nc(this)&&(a[0]=!0,a[1]=!0);return a};
var Nc=function(a){if(!a.fe&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.fe=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.fe};Lc=new Mc;var Oc=function(){};u(Oc,Jc);Oc.prototype.mc=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Pc;throw Error("Unsupported browser");};Oc.prototype.nd=function(){return{}};
var Pc=function(){this.ja=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseText="";this.status=-1;this.statusText=this.responseXML=null;this.ja.onload=t(this.df,this);this.ja.onerror=t(this.be,this);this.ja.onprogress=t(this.ef,this);this.ja.ontimeout=t(this.ff,this)};h=Pc.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.ja.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.ja.send(a);else throw Error("Only string data is supported");else this.ja.send()};h.abort=function(){this.ja.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.ja.contentType:""};h.df=function(){this.status=200;this.responseText=this.ja.responseText;Qc(this,4)};h.be=function(){this.status=500;this.responseText="";Qc(this,4)};h.ff=function(){this.be()};
h.ef=function(){this.status=200;Qc(this,1)};var Qc=function(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()};Pc.prototype.getAllResponseHeaders=function(){return"content-type: "+this.ja.contentType};var Rc=function(a,b,c){this.sf=c;this.Qe=a;this.Hf=b;this.Bc=0;this.rc=null};Rc.prototype.get=function(){if(0<this.Bc){this.Bc--;var a=this.rc;this.rc=a.next;a.next=null}else a=this.Qe();return a};Rc.prototype.put=function(a){this.Hf(a);this.Bc<this.sf&&(this.Bc++,a.next=this.rc,this.rc=a)};var Sc=function(a){k.setTimeout(function(){throw a;},0)},Tc,Uc=function(){var a=k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,
a=t(function(a){if(("*"==d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(m(c.next)){c=c.next;var a=c.Qd;c.Qd=null;a()}};return function(a){d.next={Qd:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?
function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){k.setTimeout(a,0)}};var Vc=function(){this.Wc=this.cb=null},Xc=new Rc(function(){return new Wc},function(a){a.reset()},100);Vc.prototype.add=function(a,b){var c=Xc.get();c.set(a,b);this.Wc?this.Wc.next=c:(x(!this.cb),this.cb=c);this.Wc=c};Vc.prototype.remove=function(){var a=null;this.cb&&(a=this.cb,this.cb=this.cb.next,this.cb||(this.Wc=null),a.next=null);return a};var Wc=function(){this.next=this.scope=this.fd=null};Wc.prototype.set=function(a,b){this.fd=a;this.scope=b;this.next=null};
Wc.prototype.reset=function(){this.next=this.scope=this.fd=null};var bd=function(a,b){Yc||Zc();$c||(Yc(),$c=!0);ad.add(a,b)},Yc,Zc=function(){if(-1!=String(k.Promise).indexOf("[native code]")){var a=k.Promise.resolve(void 0);Yc=function(){a.then(cd)}}else Yc=function(){var a=cd;!q(k.setImmediate)||k.Window&&k.Window.prototype&&!z("Edge")&&k.Window.prototype.setImmediate==k.setImmediate?(Tc||(Tc=Uc()),Tc(a)):k.setImmediate(a)}},$c=!1,ad=new Vc,cd=function(){for(var a;a=ad.remove();){try{a.fd.call(a.scope)}catch(b){Sc(b)}Xc.put(a)}$c=!1};var dd=function(a){return r(a)?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):void 0===a?"undefined":null===a?"null":typeof a},ed=function(a){return(a=a&&a.ownerDocument)&&(a.defaultView||a.parentWindow)||window};var fd=!A||9<=Number(Bb);!tb&&!A||A&&9<=Number(Bb)||tb&&B("1.9.1");A&&B("9");var hd=function(){this.ta="";this.Fe=gd};hd.prototype.Jb=!0;hd.prototype.Gb=function(){return this.ta};hd.prototype.toString=function(){return"SafeHtml{"+this.ta+"}"};var id=function(a){if(a instanceof hd&&a.constructor===hd&&a.Fe===gd)return a.ta;za("expected object of type SafeHtml, got '"+a+"' of type "+ea(a));return"type_error:SafeHtml"},gd={};hd.prototype.mf=function(a){this.ta=a;return this};var jd=function(a,b){var c=ed(a);"undefined"!=typeof c.HTMLScriptElement&&"undefined"!=typeof c.Element&&x(a&&(a instanceof c.HTMLScriptElement||!(a instanceof c.Element)),"Argument is not a HTMLScriptElement (or a non-Element mock); got: %s",dd(a));a.src=Ja(b)};var kd=function(a){var b=document;return p(a)?b.getElementById(a):a},md=function(a,b){db(b,function(b,d){b&&b.Jb&&(b=b.Gb());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:ld.hasOwnProperty(d)?a.setAttribute(ld[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})},ld={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",
type:"type",usemap:"useMap",valign:"vAlign",width:"width"},od=function(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!fd&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',va(g.name),'"');if(g.type){f.push(' type="',va(g.type),'"');var l={};lb(l,g);delete l.type;g=l}f.push(">");f=f.join("")}f=e.createElement(f);g&&(p(g)?f.className=g:ga(g)?f.className=g.join(" "):md(f,g));2<d.length&&nd(e,f,d);return f},nd=function(a,b,c){function d(c){c&&b.appendChild(p(c)?a.createTextNode(c):
c)}for(var e=2;e<c.length;e++){var f=c[e];!ha(f)||r(f)&&0<f.nodeType?d(f):y(pd(f)?Za(f):f,d)}},pd=function(a){if(a&&"number"==typeof a.length){if(r(a))return"function"==typeof a.item||"string"==typeof a.item;if(q(a))return"function"==typeof a.item}return!1};var qd=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0},rd=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var D=function(a,b){this.X=0;this.va=void 0;this.gb=this.qa=this.u=null;this.pc=this.ed=!1;if(a!=da)try{var c=this;a.call(b,function(a){sd(c,2,a)},function(a){if(!(a instanceof td))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(e){}sd(c,3,a)})}catch(d){sd(this,3,d)}},ud=function(){this.next=this.context=this.mb=this.Qa=this.child=null;this.yb=!1};ud.prototype.reset=function(){this.context=this.mb=this.Qa=this.child=null;this.yb=!1};
var vd=new Rc(function(){return new ud},function(a){a.reset()},100),wd=function(a,b,c){var d=vd.get();d.Qa=a;d.mb=b;d.context=c;return d},E=function(a){if(a instanceof D)return a;var b=new D(da);sd(b,2,a);return b},F=function(a){return new D(function(b,c){c(a)})},yd=function(a,b,c){xd(a,b,c,null)||bd(ka(b,a))},zd=function(a){return new D(function(b){var c=a.length,d=[];if(c)for(var e=function(a,e,f){c--;d[a]=e?{Ze:!0,value:f}:{Ze:!1,reason:f};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],yd(g,ka(e,f,!0),
ka(e,f,!1));else b(d)})};D.prototype.then=function(a,b,c){null!=a&&Ca(a,"opt_onFulfilled should be a function.");null!=b&&Ca(b,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");return Ad(this,q(a)?a:null,q(b)?b:null,c)};qd(D);var Cd=function(a,b){b=wd(b,b,void 0);b.yb=!0;Bd(a,b);return a};D.prototype.f=function(a,b){return Ad(this,null,a,b)};D.prototype.cancel=function(a){0==this.X&&bd(function(){var b=new td(a);Dd(this,b)},this)};
var Dd=function(a,b){if(0==a.X)if(a.u){var c=a.u;if(c.qa){for(var d=0,e=null,f=null,g=c.qa;g&&(g.yb||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.X&&1==d?Dd(c,b):(f?(d=f,x(c.qa),x(null!=d),d.next==c.gb&&(c.gb=d),d.next=d.next.next):Ed(c),Fd(c,e,3,b)))}a.u=null}else sd(a,3,b)},Bd=function(a,b){a.qa||2!=a.X&&3!=a.X||Gd(a);x(null!=b.Qa);a.gb?a.gb.next=b:a.qa=b;a.gb=b},Ad=function(a,b,c,d){var e=wd(null,null,null);e.child=new D(function(a,g){e.Qa=b?function(c){try{var e=b.call(d,c);a(e)}catch(C){g(C)}}:
a;e.mb=c?function(b){try{var e=c.call(d,b);!m(e)&&b instanceof td?g(b):a(e)}catch(C){g(C)}}:g});e.child.u=a;Bd(a,e);return e.child};D.prototype.Uf=function(a){x(1==this.X);this.X=0;sd(this,2,a)};D.prototype.Vf=function(a){x(1==this.X);this.X=0;sd(this,3,a)};
var sd=function(a,b,c){0==a.X&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.X=1,xd(c,a.Uf,a.Vf,a)||(a.va=c,a.X=b,a.u=null,Gd(a),3!=b||c instanceof td||Hd(a,c)))},xd=function(a,b,c,d){if(a instanceof D)return null!=b&&Ca(b,"opt_onFulfilled should be a function."),null!=c&&Ca(c,"opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"),Bd(a,wd(b||da,c||null,d)),!0;if(rd(a))return a.then(b,c,d),!0;if(r(a))try{var e=a.then;if(q(e))return Id(a,
e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1},Id=function(a,b,c,d,e){var f=!1,g=function(a){f||(f=!0,c.call(e,a))},l=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,g,l)}catch(n){l(n)}},Gd=function(a){a.ed||(a.ed=!0,bd(a.Ve,a))},Ed=function(a){var b=null;a.qa&&(b=a.qa,a.qa=b.next,b.next=null);a.qa||(a.gb=null);null!=b&&x(null!=b.Qa);return b};D.prototype.Ve=function(){for(var a;a=Ed(this);)Fd(this,a,this.X,this.va);this.ed=!1};
var Fd=function(a,b,c,d){if(3==c&&b.mb&&!b.yb)for(;a&&a.pc;a=a.u)a.pc=!1;if(b.child)b.child.u=null,Jd(b,c,d);else try{b.yb?b.Qa.call(b.context):Jd(b,c,d)}catch(e){Kd.call(null,e)}vd.put(b)},Jd=function(a,b,c){2==b?a.Qa.call(a.context,c):a.mb&&a.mb.call(a.context,c)},Hd=function(a,b){a.pc=!0;bd(function(){a.pc&&Kd.call(null,b)})},Kd=Sc,td=function(a){v.call(this,a)};u(td,v);td.prototype.name="cancel";
var Ld=function(a,b){this.Jc=[];this.me=a;this.Ud=b||null;this.Hb=this.ib=!1;this.va=void 0;this.Gd=this.Ld=this.$c=!1;this.Sc=0;this.u=null;this.ad=0};Ld.prototype.cancel=function(a){if(this.ib)this.va instanceof Ld&&this.va.cancel();else{if(this.u){var b=this.u;delete this.u;a?b.cancel(a):(b.ad--,0>=b.ad&&b.cancel())}this.me?this.me.call(this.Ud,this):this.Gd=!0;this.ib||Md(this,new Nd)}};Ld.prototype.Sd=function(a,b){this.$c=!1;Od(this,a,b)};
var Od=function(a,b,c){a.ib=!0;a.va=c;a.Hb=!b;Pd(a)},Rd=function(a){if(a.ib){if(!a.Gd)throw new Qd;a.Gd=!1}};Ld.prototype.callback=function(a){Rd(this);Sd(a);Od(this,!0,a)};var Md=function(a,b){Rd(a);Sd(b);Od(a,!1,b)},Sd=function(a){x(!(a instanceof Ld),"An execution sequence may not be initiated with a blocking Deferred.")},Ud=function(a,b){Td(a,null,b,void 0)},Td=function(a,b,c,d){x(!a.Ld,"Blocking Deferreds can not be re-used");a.Jc.push([b,c,d]);a.ib&&Pd(a)};
Ld.prototype.then=function(a,b,c){var d,e,f=new D(function(a,b){d=a;e=b});Td(this,d,function(a){a instanceof Nd?f.cancel():e(a)});return f.then(a,b,c)};qd(Ld);
var Vd=function(a){return Ra(a.Jc,function(a){return q(a[1])})},Pd=function(a){if(a.Sc&&a.ib&&Vd(a)){var b=a.Sc,c=Wd[b];c&&(k.clearTimeout(c.Ib),delete Wd[b]);a.Sc=0}a.u&&(a.u.ad--,delete a.u);for(var b=a.va,d=c=!1;a.Jc.length&&!a.$c;){var e=a.Jc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.Hb?g:f)try{var l=f.call(e||a.Ud,b);m(l)&&(a.Hb=a.Hb&&(l==b||l instanceof Error),a.va=b=l);if(rd(b)||"function"===typeof k.Promise&&b instanceof k.Promise)d=!0,a.$c=!0}catch(n){b=n,a.Hb=!0,Vd(a)||(c=!0)}}a.va=b;d&&(l=t(a.Sd,
a,!0),d=t(a.Sd,a,!1),b instanceof Ld?(Td(b,l,d),b.Ld=!0):b.then(l,d));c&&(b=new Xd(b),Wd[b.Ib]=b,a.Sc=b.Ib)},Qd=function(){v.call(this)};u(Qd,v);Qd.prototype.message="Deferred has already fired";Qd.prototype.name="AlreadyCalledError";var Nd=function(){v.call(this)};u(Nd,v);Nd.prototype.message="Deferred was canceled";Nd.prototype.name="CanceledError";var Xd=function(a){this.Ib=k.setTimeout(t(this.Tf,this),0);this.Y=a};
Xd.prototype.Tf=function(){x(Wd[this.Ib],"Cannot throw an error that is not scheduled.");delete Wd[this.Ib];throw this.Y;};var Wd={};var be=function(a){var b={},c=b.document||document,d=Ja(a),e=document.createElement("SCRIPT"),f={se:e,ec:void 0},g=new Ld(Yd,f),l=null,n=null!=b.timeout?b.timeout:5E3;0<n&&(l=window.setTimeout(function(){Zd(e,!0);Md(g,new $d(1,"Timeout reached for loading script "+d))},n),f.ec=l);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Zd(e,b.eg||!1,l),g.callback(null))};e.onerror=function(){Zd(e,!0,l);Md(g,new $d(0,"Error while loading script "+d))};
f=b.attributes||{};lb(f,{type:"text/javascript",charset:"UTF-8"});md(e,f);jd(e,a);ae(c).appendChild(e);return g},ae=function(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement},Yd=function(){if(this&&this.se){var a=this.se;a&&"SCRIPT"==a.tagName&&Zd(a,!0,this.ec)}},Zd=function(a,b,c){null!=c&&k.clearTimeout(c);a.onload=da;a.onerror=da;a.onreadystatechange=da;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)},$d=function(a,
b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);v.call(this,c);this.code=a};u($d,v);var ce=function(a,b,c,d,e){this.reset(a,b,c,d,e)};ce.prototype.Wd=null;var de=0;ce.prototype.reset=function(a,b,c,d,e){"number"==typeof e||de++;d||la();this.Ob=a;this.vf=b;delete this.Wd};ce.prototype.ue=function(a){this.Ob=a};var ee=function(a){this.ke=a;this.ce=this.bd=this.Ob=this.u=null},fe=function(a,b){this.name=a;this.value=b};fe.prototype.toString=function(){return this.name};var ge=new fe("SEVERE",1E3),he=new fe("INFO",800),ie=new fe("CONFIG",700),je=new fe("FINE",500);ee.prototype.getName=function(){return this.ke};ee.prototype.getParent=function(){return this.u};ee.prototype.ue=function(a){this.Ob=a};var ke=function(a){if(a.Ob)return a.Ob;if(a.u)return ke(a.u);za("Root logger has no level set.");return null};
ee.prototype.log=function(a,b,c){if(a.value>=ke(this).value)for(q(b)&&(b=b()),a=new ce(a,String(b),this.ke),c&&(a.Wd=c),c="log:"+a.vf,k.console&&(k.console.timeStamp?k.console.timeStamp(c):k.console.markTimeline&&k.console.markTimeline(c)),k.msWriteProfilerMark&&k.msWriteProfilerMark(c),c=this;c;){var d=c,e=a;if(d.ce)for(var f=0;b=d.ce[f];f++)b(e);c=c.getParent()}};ee.prototype.info=function(a,b){this.log(he,a,b)};ee.prototype.config=function(a,b){this.log(ie,a,b)};
var le={},me=null,ne=function(a){me||(me=new ee(""),le[""]=me,me.ue(ie));var b;if(!(b=le[a])){b=new ee(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=ne(a.substr(0,c));c.bd||(c.bd={});c.bd[d]=b;b.u=c;le[a]=b}return b};var oe=function(){Sb.call(this);this.da=new cc(this);this.Ke=this;this.sd=null};u(oe,Sb);oe.prototype[Zb]=!0;h=oe.prototype;h.addEventListener=function(a,b,c,d){jc(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){rc(this,a,b,c,d)};
h.dispatchEvent=function(a){pe(this);var b=this.sd;if(b){var c=[];for(var d=1;b;b=b.sd)c.push(b),x(1E3>++d,"infinite loop")}b=this.Ke;d=a.type||a;if(p(a))a=new Wb(a,b);else if(a instanceof Wb)a.target=a.target||b;else{var e=a;a=new Wb(d,b);lb(a,e)}var e=!0;if(c)for(var f=c.length-1;!a.Ta&&0<=f;f--){var g=a.currentTarget=c[f];e=qe(g,d,!0,a)&&e}a.Ta||(g=a.currentTarget=b,e=qe(g,d,!0,a)&&e,a.Ta||(e=qe(g,d,!1,a)&&e));if(c)for(f=0;!a.Ta&&f<c.length;f++)g=a.currentTarget=c[f],e=qe(g,d,!1,a)&&e;return e};
h.hb=function(){oe.Nc.hb.call(this);if(this.da){var a=this.da,b=0,c;for(c in a.I){for(var d=a.I[c],e=0;e<d.length;e++)++b,bc(d[e]);delete a.I[c];a.fc--}}this.sd=null};h.listen=function(a,b,c,d){pe(this);return this.da.add(String(a),b,!1,c,d)};
var qc=function(a,b,c,d,e){a.da.add(String(b),c,!0,d,e)},qe=function(a,b,c,d){b=a.da.I[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.tb&&g.capture==c){var l=g.listener,n=g.qc||g.src;g.kc&&ec(a.da,g);e=!1!==l.call(n,d)&&e}}return e&&0!=d.re};oe.prototype.gd=function(a,b,c,d){return this.da.gd(String(a),b,c,d)};oe.prototype.hasListener=function(a,b){return this.da.hasListener(m(a)?String(a):void 0,b)};var pe=function(a){x(a.da,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var re="StopIteration"in k?k.StopIteration:{message:"StopIteration",stack:""},se=function(){};se.prototype.next=function(){throw re;};se.prototype.Je=function(){return this};var G=function(a,b){a&&a.log(je,b,void 0)};var te=function(a,b){this.fa={};this.A=[];this.bb=this.o=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};h=te.prototype;h.ea=function(){ue(this);for(var a=[],b=0;b<this.A.length;b++)a.push(this.fa[this.A[b]]);return a};h.ra=function(){ue(this);return this.A.concat()};h.Ab=function(a){return ve(this.fa,a)};h.clear=function(){this.fa={};this.bb=this.o=this.A.length=0};
h.remove=function(a){return ve(this.fa,a)?(delete this.fa[a],this.o--,this.bb++,this.A.length>2*this.o&&ue(this),!0):!1};var ue=function(a){var b,c;if(a.o!=a.A.length){for(b=c=0;c<a.A.length;){var d=a.A[c];ve(a.fa,d)&&(a.A[b++]=d);c++}a.A.length=b}if(a.o!=a.A.length){var e={};for(b=c=0;c<a.A.length;)d=a.A[c],ve(e,d)||(a.A[b++]=d,e[d]=1),c++;a.A.length=b}};h=te.prototype;h.get=function(a,b){return ve(this.fa,a)?this.fa[a]:b};
h.set=function(a,b){ve(this.fa,a)||(this.o++,this.A.push(a),this.bb++);this.fa[a]=b};h.addAll=function(a){if(a instanceof te){var b=a.ra();a=a.ea()}else b=gb(a),a=fb(a);for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.ra(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new te(this)};
h.Je=function(a){ue(this);var b=0,c=this.bb,d=this,e=new se;e.next=function(){if(c!=d.bb)throw Error("The map has changed since the iterator was created");if(b>=d.A.length)throw re;var e=d.A[b++];return a?e:d.fa[e]};return e};var ve=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var we=function(a){if(a.ea&&"function"==typeof a.ea)return a.ea();if(p(a))return a.split("");if(ha(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return fb(a)},xe=function(a){if(a.ra&&"function"==typeof a.ra)return a.ra();if(!a.ea||"function"!=typeof a.ea){if(ha(a)||p(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return gb(a)}},ye=function(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ha(a)||p(a))y(a,b,c);else for(var d=xe(a),e=we(a),f=e.length,
g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)};var ze=function(a,b,c){if(q(a))c&&(a=t(a,c));else if(a&&"function"==typeof a.handleEvent)a=t(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:k.setTimeout(a,b||0)},Ae=function(a){var b=null;return(new D(function(c,d){b=ze(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).f(function(a){k.clearTimeout(b);throw a;})};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,Ce=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var H=function(a){oe.call(this);this.headers=new te;this.Yc=a||null;this.ya=!1;this.Xc=this.b=null;this.Nb=this.je=this.yc="";this.Ma=this.ld=this.uc=this.dd=!1;this.ub=0;this.Pc=null;this.Ic="";this.Tc=this.Cf=this.Ee=!1};u(H,oe);var De=H.prototype,Ee=ne("goog.net.XhrIo");De.M=Ee;var Fe=/^https?$/i,Ge=["POST","PUT"];
H.prototype.send=function(a,b,c,d){if(this.b)throw Error("[goog.net.XhrIo] Object is active with another request="+this.yc+"; newUri="+a);b=b?b.toUpperCase():"GET";this.yc=a;this.Nb="";this.je=b;this.dd=!1;this.ya=!0;this.b=this.Yc?this.Yc.mc():Lc.mc();this.Xc=this.Yc?Kc(this.Yc):Kc(Lc);this.b.onreadystatechange=t(this.oe,this);this.Cf&&"onprogress"in this.b&&(this.b.onprogress=t(function(a){this.ne(a,!0)},this),this.b.upload&&(this.b.upload.onprogress=t(this.ne,this)));try{G(this.M,He(this,"Opening Xhr")),
this.ld=!0,this.b.open(b,String(a),!0),this.ld=!1}catch(f){G(this.M,He(this,"Error opening Xhr: "+f.message));this.Y(5,f);return}a=c||"";var e=this.headers.clone();d&&ye(d,function(a,b){e.set(b,a)});d=Ta(e.ra());c=k.FormData&&a instanceof k.FormData;!Ua(Ge,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.b.setRequestHeader(b,a)},this);this.Ic&&(this.b.responseType=this.Ic);"withCredentials"in this.b&&this.b.withCredentials!==this.Ee&&(this.b.withCredentials=
this.Ee);try{Ie(this),0<this.ub&&(this.Tc=Je(this.b),G(this.M,He(this,"Will abort after "+this.ub+"ms if incomplete, xhr2 "+this.Tc)),this.Tc?(this.b.timeout=this.ub,this.b.ontimeout=t(this.ec,this)):this.Pc=ze(this.ec,this.ub,this)),G(this.M,He(this,"Sending request")),this.uc=!0,this.b.send(a),this.uc=!1}catch(f){G(this.M,He(this,"Send error: "+f.message)),this.Y(5,f)}};var Je=function(a){return A&&B(9)&&ca(a.timeout)&&m(a.ontimeout)},Sa=function(a){return"content-type"==a.toLowerCase()};
H.prototype.ec=function(){"undefined"!=typeof aa&&this.b&&(this.Nb="Timed out after "+this.ub+"ms, aborting",G(this.M,He(this,this.Nb)),this.dispatchEvent("timeout"),this.abort(8))};H.prototype.Y=function(a,b){this.ya=!1;this.b&&(this.Ma=!0,this.b.abort(),this.Ma=!1);this.Nb=b;Ke(this);Le(this)};var Ke=function(a){a.dd||(a.dd=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))};
H.prototype.abort=function(){this.b&&this.ya&&(G(this.M,He(this,"Aborting")),this.ya=!1,this.Ma=!0,this.b.abort(),this.Ma=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Le(this))};H.prototype.hb=function(){this.b&&(this.ya&&(this.ya=!1,this.Ma=!0,this.b.abort(),this.Ma=!1),Le(this,!0));H.Nc.hb.call(this)};H.prototype.oe=function(){this.isDisposed()||(this.ld||this.uc||this.Ma?Me(this):this.yf())};H.prototype.yf=function(){Me(this)};
var Me=function(a){if(a.ya&&"undefined"!=typeof aa)if(a.Xc[1]&&4==Ne(a)&&2==Oe(a))G(a.M,He(a,"Local request error detected and ignored"));else if(a.uc&&4==Ne(a))ze(a.oe,0,a);else if(a.dispatchEvent("readystatechange"),4==Ne(a)){G(a.M,He(a,"Request complete"));a.ya=!1;try{var b=Oe(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.yc).match(Be)[1]||null;if(!f&&k.self&&k.self.location)var g=k.self.location.protocol,
f=g.substr(0,g.length-1);e=!Fe.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var l=2<Ne(a)?a.b.statusText:""}catch(n){G(a.M,"Can not get status: "+n.message),l=""}a.Nb=l+" ["+Oe(a)+"]";Ke(a)}}finally{Le(a)}}};H.prototype.ne=function(a,b){x("progress"===a.type,"goog.net.EventType.PROGRESS is of the same type as raw XHR progress.");this.dispatchEvent(Pe(a,"progress"));this.dispatchEvent(Pe(a,b?"downloadprogress":"uploadprogress"))};
var Pe=function(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}},Le=function(a,b){if(a.b){Ie(a);var c=a.b,d=a.Xc[0]?da:null;a.b=null;a.Xc=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.M)&&a.log(ge,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}},Ie=function(a){a.b&&a.Tc&&(a.b.ontimeout=null);ca(a.Pc)&&(k.clearTimeout(a.Pc),a.Pc=null)},Ne=function(a){return a.b?a.b.readyState:0},Oe=function(a){try{return 2<Ne(a)?
a.b.status:-1}catch(b){return-1}},Qe=function(a){try{return a.b?a.b.responseText:""}catch(b){return G(a.M,"Can not get responseText: "+b.message),""}};
H.prototype.getResponse=function(){try{if(!this.b)return null;if("response"in this.b)return this.b.response;switch(this.Ic){case "":case "text":return this.b.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.b)return this.b.mozResponseArrayBuffer}var a=this.M;a&&a.log(ge,"Response type "+this.Ic+" is not supported on this browser",void 0);return null}catch(b){return G(this.M,"Can not get response: "+b.message),null}};
H.prototype.getResponseHeader=function(a){if(this.b&&4==Ne(this))return a=this.b.getResponseHeader(a),null===a?void 0:a};H.prototype.getAllResponseHeaders=function(){return this.b&&4==Ne(this)?this.b.getAllResponseHeaders():""};var He=function(a,b){return b+" ["+a.je+" "+a.yc+" "+Oe(a)+"]"};var Re=function(a,b){this.ka=this.$a=this.ma="";this.ob=null;this.La=this.Aa="";this.$=this.rf=!1;if(a instanceof Re){this.$=m(b)?b:a.$;Se(this,a.ma);var c=a.$a;I(this);this.$a=c;Te(this,a.ka);Ue(this,a.ob);Ve(this,a.Aa);We(this,a.ba.clone());a=a.La;I(this);this.La=a}else a&&(c=String(a).match(Be))?(this.$=!!b,Se(this,c[1]||"",!0),a=c[2]||"",I(this),this.$a=Xe(a),Te(this,c[3]||"",!0),Ue(this,c[4]),Ve(this,c[5]||"",!0),We(this,c[6]||"",!0),a=c[7]||"",I(this),this.La=Xe(a)):(this.$=!!b,this.ba=new Ye(null,
0,this.$))};Re.prototype.toString=function(){var a=[],b=this.ma;b&&a.push(Ze(b,$e,!0),":");var c=this.ka;if(c||"file"==b)a.push("//"),(b=this.$a)&&a.push(Ze(b,$e,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.ob,null!=c&&a.push(":",String(c));if(c=this.Aa)this.ka&&"/"!=c.charAt(0)&&a.push("/"),a.push(Ze(c,"/"==c.charAt(0)?af:bf,!0));(c=this.ba.toString())&&a.push("?",c);(c=this.La)&&a.push("#",Ze(c,cf));return a.join("")};
Re.prototype.resolve=function(a){var b=this.clone(),c=!!a.ma;c?Se(b,a.ma):c=!!a.$a;if(c){var d=a.$a;I(b);b.$a=d}else c=!!a.ka;c?Te(b,a.ka):c=null!=a.ob;d=a.Aa;if(c)Ue(b,a.ob);else if(c=!!a.Aa){if("/"!=d.charAt(0))if(this.ka&&!this.Aa)d="/"+d;else{var e=b.Aa.lastIndexOf("/");-1!=e&&(d=b.Aa.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(w(e,"./")||w(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var l=e[g++];"."==l?d&&g==e.length&&f.push(""):".."==l?((1<f.length||
1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(l),d=!0)}d=f.join("/")}else d=e}c?Ve(b,d):c=""!==a.ba.toString();c?We(b,a.ba.clone()):c=!!a.La;c&&(a=a.La,I(b),b.La=a);return b};Re.prototype.clone=function(){return new Re(this)};
var Se=function(a,b,c){I(a);a.ma=c?Xe(b,!0):b;a.ma&&(a.ma=a.ma.replace(/:$/,""))},Te=function(a,b,c){I(a);a.ka=c?Xe(b,!0):b},Ue=function(a,b){I(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.ob=b}else a.ob=null},Ve=function(a,b,c){I(a);a.Aa=c?Xe(b,!0):b},We=function(a,b,c){I(a);b instanceof Ye?(a.ba=b,a.ba.Ed(a.$)):(c||(b=Ze(b,df)),a.ba=new Ye(b,0,a.$))},J=function(a,b,c){I(a);a.ba.set(b,c)},ef=function(a,b){return a.ba.get(b)};
Re.prototype.removeParameter=function(a){I(this);this.ba.remove(a);return this};var I=function(a){if(a.rf)throw Error("Tried to modify a read-only Uri");};Re.prototype.Ed=function(a){this.$=a;this.ba&&this.ba.Ed(a);return this};
var ff=function(a){return a instanceof Re?a.clone():new Re(a,void 0)},gf=function(a,b){var c=new Re(null,void 0);Se(c,"https");a&&Te(c,a);b&&Ve(c,b);return c},Xe=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Ze=function(a,b,c){return p(a)?(a=encodeURI(a).replace(b,hf),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},hf=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},$e=/[#\/\?@]/g,bf=/[\#\?:]/g,af=/[\#\?]/g,df=/[\#\?@]/g,
cf=/#/g,Ye=function(a,b,c){this.o=this.j=null;this.R=a||null;this.$=!!c},jf=function(a){a.j||(a.j=new te,a.o=0,a.R&&Ce(a.R,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))},lf=function(a){var b=xe(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Ye(null,0,void 0);a=we(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];ga(f)?kf(c,e,f):c.add(e,f)}return c};h=Ye.prototype;
h.add=function(a,b){jf(this);this.R=null;a=this.Z(a);var c=this.j.get(a);c||this.j.set(a,c=[]);c.push(b);this.o=Aa(this.o)+1;return this};h.remove=function(a){jf(this);a=this.Z(a);return this.j.Ab(a)?(this.R=null,this.o=Aa(this.o)-this.j.get(a).length,this.j.remove(a)):!1};h.clear=function(){this.j=this.R=null;this.o=0};h.Ab=function(a){jf(this);a=this.Z(a);return this.j.Ab(a)};h.forEach=function(a,b){jf(this);this.j.forEach(function(c,d){y(c,function(c){a.call(b,c,d,this)},this)},this)};
h.ra=function(){jf(this);for(var a=this.j.ea(),b=this.j.ra(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.ea=function(a){jf(this);var b=[];if(p(a))this.Ab(a)&&(b=Ya(b,this.j.get(this.Z(a))));else{a=this.j.ea();for(var c=0;c<a.length;c++)b=Ya(b,a[c])}return b};h.set=function(a,b){jf(this);this.R=null;a=this.Z(a);this.Ab(a)&&(this.o=Aa(this.o)-this.j.get(a).length);this.j.set(a,[b]);this.o=Aa(this.o)+1;return this};
h.get=function(a,b){a=a?this.ea(a):[];return 0<a.length?String(a[0]):b};var kf=function(a,b,c){a.remove(b);0<c.length&&(a.R=null,a.j.set(a.Z(b),Za(c)),a.o=Aa(a.o)+c.length)};h=Ye.prototype;h.toString=function(){if(this.R)return this.R;if(!this.j)return"";for(var a=[],b=this.j.ra(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.ea(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}return this.R=a.join("&")};
h.clone=function(){var a=new Ye;a.R=this.R;this.j&&(a.j=this.j.clone(),a.o=this.o);return a};h.Z=function(a){a=String(a);this.$&&(a=a.toLowerCase());return a};h.Ed=function(a){a&&!this.$&&(jf(this),this.R=null,this.j.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),kf(this,b,a))},this));this.$=a};h.extend=function(a){for(var b=0;b<arguments.length;b++)ye(arguments[b],function(a,b){this.add(b,a)},this)};var mf=function(){var a=K();return A&&!!Bb&&11==Bb||/Edge\/\d+/.test(a)},nf=function(){return k.window&&k.window.location.href||""},of=function(a,b){b=b||k.window;var c="about:blank";a&&(c=zc(Cc(a)));b.location.href=c},pf=function(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):ga(a[d])?ib(a[d],b[d])||c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<pf(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c},rf=function(){var a=
K();a="Chrome"!=qf(a)?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!A||!Bb||9<Bb},sf=function(a){a=(a||K()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1},tf=function(a){a=a||k.window;try{a.close()}catch(b){}},uf=function(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-
b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=K().toLowerCase();d&&(b.target=d,w(c,"crios/")&&(b.target="_blank"));"Firefox"==qf(K())&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"about:blank";(d=b)||(d={});a=window;b=c instanceof yc?c:Cc("undefined"!=typeof c.href?c.href:String(c));c=d.target||c.target;e=[];for(g in d)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+d[g]);break;case "target":case "noreferrer":break;
default:e.push(g+"="+(d[g]?1:0))}var g=e.join(",");(z("iPhone")&&!z("iPod")&&!z("iPad")||z("iPad")||z("iPod"))&&a.navigator&&a.navigator.standalone&&c&&"_self"!=c?(g=a.document.createElement("A"),e=ed(g),"undefined"!=typeof e.HTMLAnchorElement&&"undefined"!=typeof e.Location&&"undefined"!=typeof e.Element&&x(g&&(g instanceof e.HTMLAnchorElement||!(g instanceof e.Location||g instanceof e.Element)),"Argument is not a HTMLAnchorElement (or a non-Element mock); got: %s",dd(g)),b=b instanceof yc?b:Cc(b),
g.href=zc(b),g.setAttribute("target",c),d.noreferrer&&g.setAttribute("rel","noreferrer"),d=document.createEvent("MouseEvent"),d.initMouseEvent("click",!0,!0,a,1),g.dispatchEvent(d),g={}):d.noreferrer?(g=a.open("",c,g),d=zc(b),g&&(sb&&w(d,";")&&(d="'"+d.replace(/'/g,"%27")+"'"),g.opener=null,a=Ga("b/12014412, meta tag with sanitized URL"),d='<META HTTP-EQUIV="refresh" content="0; url='+va(d)+'">',Ba(Fa(a),"must provide justification"),x(!/^[\s\xa0]*$/.test(Fa(a)),"must provide non-empty justification"),
g.document.write(id((new hd).mf(d))),g.document.close())):g=a.open(zc(b),c,g);if(g)try{g.focus()}catch(l){}return g},vf=function(a){return new D(function(b){var c=function(){Ae(2E3).then(function(){if(!a||a.closed)b();else return c()})};return c()})},wf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xf=function(){var a=null;return(new D(function(b){"complete"==k.document.readyState?b():(a=function(){b()},ic(window,"load",a))})).f(function(b){rc(window,"load",a);throw b;})},zf=function(){return yf(void 0)?
xf().then(function(){return new D(function(a,b){var c=k.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):F(Error("Cordova must run in an Android or iOS file scheme."))},yf=function(a){a=a||K();return!("file:"!==Af()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))},Bf=function(){var a=k.window;try{return!(!a||a==a.top)}catch(b){return!1}},Cf=function(){return firebase.INTERNAL.hasOwnProperty("reactNative")?
"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":"Browser"},Df=function(){var a=Cf();return"ReactNative"===a||"Node"===a},qf=function(a){var b=a.toLowerCase();if(w(b,"opera/")||w(b,"opr/")||w(b,"opios/"))return"Opera";if(w(b,"iemobile"))return"IEMobile";if(w(b,"msie")||w(b,"trident/"))return"IE";if(w(b,"edge/"))return"Edge";if(w(b,"firefox/"))return"Firefox";if(w(b,"silk/"))return"Silk";if(w(b,"blackberry"))return"Blackberry";if(w(b,"webos"))return"Webos";if(!w(b,"safari/")||w(b,"chrome/")||
w(b,"crios/")||w(b,"android"))if(!w(b,"chrome/")&&!w(b,"crios/")||w(b,"edge/")){if(w(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==a.length)return a[1]}else return"Chrome";else return"Safari";return"Other"},Ef=function(a){var b=Cf();return("Browser"===b?qf(K()):b)+"/JsCore/"+a},K=function(){return k.navigator&&k.navigator.userAgent||""},L=function(a,b){a=a.split(".");b=b||k;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);
return b},Hf=function(){var a;if(a=(Ff()||"chrome-extension:"===Af()||yf())&&!Df())a:{try{var b=k.localStorage,c=Gf();if(b){b.setItem(c,"1");b.removeItem(c);a=mf()?!!k.indexedDB:!0;break a}}catch(d){}a=!1}return a},Ff=function(){return"http:"===Af()||"https:"===Af()},Af=function(){return k.location&&k.location.protocol||null},If=function(a){a=a||K();return sf(a)||"Firefox"==qf(a)?!1:!0},Jf=function(a){return"undefined"===typeof a?null:Fc(a)},Kf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&
null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b},Lf=function(a){if(null!==a)return JSON.parse(a)},Gf=function(a){return a?a:""+Math.floor(1E9*Math.random()).toString()},Mf=function(a){a=a||K();return"Safari"==qf(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0},Nf=function(){var a=k.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null},Of=function(){return k.navigator&&"boolean"===typeof k.navigator.onLine?
k.navigator.onLine:!0},Pf=function(a,b,c,d){if(a>b)throw Error("Short delay should be less than long delay!");this.Qf=a;this.uf=b;a=c||K();d=d||Cf();this.qf=sf(a)||"ReactNative"===d};Pf.prototype.get=function(){return this.qf?this.uf:this.Qf};
var Qf=function(){var a=k.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0},Rf=function(){var a=k.document,b=null;return Qf()||!a?E():(new D(function(c){b=function(){Qf()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).f(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})};var Sf={};var Tf;try{var Uf={};Object.defineProperty(Uf,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(Uf,"abcd",{configurable:!0,enumerable:!0,value:2});Tf=2==Uf.abcd}catch(a){Tf=!1}
var M=function(a,b,c){Tf?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c},Vf=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&M(a,c,b[c])},Wf=function(a){var b={};Vf(b,a);return b},Xf=function(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},Yf=function(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0},Zf=function(a){var b=a;if("object"==typeof a&&null!=a){var b=
"length"in a?[]:{},c;for(c in a)M(b,c,Zf(a[c]))}return b};var $f="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),ag=["client_id","response_type","scope","redirect_uri","state"],bg={$f:{Sb:500,Rb:600,providerId:"facebook.com",Ad:ag},ag:{Sb:500,Rb:620,providerId:"github.com",Ad:ag},bg:{Sb:515,Rb:680,providerId:"google.com",Ad:ag},cg:{Sb:485,Rb:705,providerId:"twitter.com",Ad:$f}},cg=function(a){for(var b in bg)if(bg[b].providerId==a)return bg[b];return null};var N=function(a,b){this.code="auth/"+a;this.message=b||dg[a]||""};u(N,Error);N.prototype.G=function(){return{code:this.code,message:this.message}};N.prototype.toJSON=function(){return this.G()};
var eg=function(a){var b=a&&a.code;return b?new N(b.substring(5),a.message):null},dg={"argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
"code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
"dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
"invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"The user's credential is no longer valid. The user must sign in again.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
"invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.",
"invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
"invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","missing-iframe-start":"An internal error has occurred.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.",
"missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
"no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The SMS quota for this project has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","user-cancelled":"User did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.",
"user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var O=function(a,b,c,d,e){this.ia=a;this.S=b||null;this.vb=c||null;this.Dd=d||null;this.Y=e||null;if(this.vb||this.Y){if(this.vb&&this.Y)throw new N("invalid-auth-event");if(this.vb&&!this.Dd)throw new N("invalid-auth-event");}else throw new N("invalid-auth-event");};O.prototype.oc=function(){return this.Dd};O.prototype.getError=function(){return this.Y};O.prototype.G=function(){return{type:this.ia,eventId:this.S,urlResponse:this.vb,sessionId:this.Dd,error:this.Y&&this.Y.G()}};
var fg=function(a){a=a||{};return a.type?new O(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&eg(a.error)):null};var gg=function(a){var b="unauthorized-domain",c=void 0,d=ff(a);a=d.ka;d=d.ma;"chrome-extension"==d?c=ma("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=ma("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b=
"operation-not-supported-in-this-environment";N.call(this,b,c)};u(gg,N);var hg=function(a){this.tf=a.sub;la();this.Db=a.email||null;this.Df=a.provider_id||null;this.Me=!!a.is_anonymous||"anonymous"==this.Df};hg.prototype.getEmail=function(){return this.Db};hg.prototype.isAnonymous=function(){return this.Me};var ig=function(a,b){return a.then(function(a){if(a.idToken){a:{var c=a.idToken.split(".");if(3==c.length){for(var c=c[1],e=(4-c.length%4)%4,f=0;f<e;f++)c+=".";try{var g=JSON.parse(Gb(c));if(g.sub&&g.iss&&g.aud&&g.exp){var l=new hg(g);break a}}catch(n){}}l=null}if(!l||b!=l.tf)throw new N("user-mismatch");return a}throw new N("user-mismatch");}).f(function(a){throw a&&a.code&&"auth/user-not-found"==a.code?new N("user-mismatch"):a;})},jg=function(a,b){if(b.idToken||b.accessToken)b.idToken&&M(this,"idToken",
b.idToken),b.accessToken&&M(this,"accessToken",b.accessToken);else if(b.oauthToken&&b.oauthTokenSecret)M(this,"accessToken",b.oauthToken),M(this,"secret",b.oauthTokenSecret);else throw new N("internal-error","failed to construct a credential");M(this,"providerId",a)};jg.prototype.Fb=function(a){return kg(a,lg(this))};jg.prototype.zc=function(a,b){var c=lg(this);c.idToken=b;return mg(a,c)};jg.prototype.pd=function(a,b){var c=lg(this);return ig(ng(a,c),b)};
var lg=function(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;return{postBody:lf(b).toString(),requestUri:"http://localhost"}};jg.prototype.G=function(){var a={providerId:this.providerId};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);return a};
var og=function(a,b){this.Gf=b||[];Vf(this,{providerId:a,isOAuthProvider:!0});this.Td={}};og.prototype.setCustomParameters=function(a){this.Td=jb(a);return this};var P=function(a){og.call(this,a,ag);this.Bd=[]};u(P,og);P.prototype.addScope=function(a){Ua(this.Bd,a)||this.Bd.push(a);return this};P.prototype.ae=function(){return Za(this.Bd)};
P.prototype.credential=function(a,b){if(!a&&!b)throw new N("argument-error","credential failed: must provide the ID token and/or the access token.");return new jg(this.providerId,{idToken:a||null,accessToken:b||null})};var pg=function(){P.call(this,"facebook.com")};u(pg,P);M(pg,"PROVIDER_ID","facebook.com");
var qg=function(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;r(a)&&(b=a.accessToken);return(new pg).credential(null,b)},rg=function(){P.call(this,"github.com")};u(rg,P);M(rg,"PROVIDER_ID","github.com");var sg=function(a){if(!a)throw new N("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;r(a)&&(b=a.accessToken);return(new rg).credential(null,b)},tg=function(){P.call(this,"google.com");this.addScope("profile")};
u(tg,P);M(tg,"PROVIDER_ID","google.com");var ug=function(a,b){var c=a;r(a)&&(c=a.idToken,b=a.accessToken);return(new tg).credential(c,b)},vg=function(){og.call(this,"twitter.com",$f)};u(vg,og);M(vg,"PROVIDER_ID","twitter.com");
var wg=function(a,b){var c=a;r(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new N("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new jg("twitter.com",c)},xg=function(a,b){this.Db=a;this.td=b;M(this,"providerId","password")};xg.prototype.Fb=function(a){return Q(a,yg,{email:this.Db,password:this.td})};xg.prototype.zc=function(a,b){return Q(a,zg,{idToken:b,email:this.Db,password:this.td})};
xg.prototype.pd=function(a,b){return ig(this.Fb(a),b)};xg.prototype.G=function(){return{email:this.Db,password:this.td}};var Ag=function(){Vf(this,{providerId:"password",isOAuthProvider:!1})};Vf(Ag,{PROVIDER_ID:"password"});var Bg=function(a){if(!(a.verificationId&&a.Uc||a.dc&&a.phoneNumber))throw new N("internal-error");this.N=a;M(this,"providerId","phone")};Bg.prototype.Fb=function(a){return a.verifyPhoneNumber(Cg(this))};Bg.prototype.zc=function(a,b){var c=Cg(this);c.idToken=b;return Q(a,Dg,c)};
Bg.prototype.pd=function(a,b){var c=Cg(this);c.operation="REAUTH";a=Q(a,Eg,c);return ig(a,b)};Bg.prototype.G=function(){var a={providerId:"phone"};this.N.verificationId&&(a.verificationId=this.N.verificationId);this.N.Uc&&(a.verificationCode=this.N.Uc);this.N.dc&&(a.temporaryProof=this.N.dc);this.N.phoneNumber&&(a.phoneNumber=this.N.phoneNumber);return a};
var Cg=function(a){return a.N.dc&&a.N.phoneNumber?{temporaryProof:a.N.dc,phoneNumber:a.N.phoneNumber}:{sessionInfo:a.N.verificationId,code:a.N.Uc}},Fg=function(a){try{this.Oe=a||firebase.auth()}catch(b){throw new N("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}Vf(this,{providerId:"phone",isOAuthProvider:!1})};
Fg.prototype.verifyPhoneNumber=function(a,b){var c=this.Oe.g;return E(b.verify()).then(function(d){if(!p(d))throw new N("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":return Q(c,Gg,{phoneNumber:a,recaptchaToken:d});default:throw new N("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
var Hg=function(a,b){if(!a)throw new N("missing-verification-id");if(!b)throw new N("missing-verification-code");return new Bg({verificationId:a,Uc:b})};Vf(Fg,{PROVIDER_ID:"phone"});
var Ig=function(a){if(a.temporaryProof&&a.phoneNumber)return new Bg({dc:a.temporaryProof,phoneNumber:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret;a=a&&a.oauthIdToken;try{switch(b){case "google.com":return ug(a,c);case "facebook.com":return qg(c);case "github.com":return sg(c);case "twitter.com":return wg(c,d);default:return(new P(b)).credential(a,c)}}catch(e){return null}},Jg=function(a){if(!a.isOAuthProvider)throw new N("invalid-oauth-provider");
};var Kg=function(a,b,c){N.call(this,a,c);a=b||{};a.email&&M(this,"email",a.email);a.phoneNumber&&M(this,"phoneNumber",a.phoneNumber);a.credential&&M(this,"credential",a.credential)};u(Kg,N);Kg.prototype.G=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);var b=this.credential&&this.credential.G();b&&lb(a,b);return a};Kg.prototype.toJSON=function(){return this.G()};
var Lg=function(a){if(a.code){var b=a.code||"";0==b.indexOf("auth/")&&(b=b.substring(5));var c={credential:Ig(a)};if(a.email)c.email=a.email;else if(a.phoneNumber)c.phoneNumber=a.phoneNumber;else return new N(b,a.message||void 0);return new Kg(b,c,a.message)}return null};var Mg=function(a){this.Zf=a};u(Mg,Jc);Mg.prototype.mc=function(){return new this.Zf};Mg.prototype.nd=function(){return{}};
var R=function(a,b,c){var d="Node"==Cf();d=k.XMLHttpRequest||d&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!d)throw new N("internal-error","The XMLHttpRequest compatibility library was not found.");this.m=a;a=b||{};this.Mf=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.Nf=a.secureTokenTimeout||Ng;this.te=jb(a.secureTokenHeaders||Og);this.Xe=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.Ye=a.firebaseTimeout||
Pg;this.Zd=jb(a.firebaseHeaders||Qg);c&&(this.Zd["X-Client-Version"]=c,this.te["X-Client-Version"]=c);this.Pe=new Oc;this.Yf=new Mg(d)},Rg,Ng=new Pf(3E4,6E4),Og={"Content-Type":"application/x-www-form-urlencoded"},Pg=new Pf(3E4,6E4),Qg={"Content-Type":"application/json"},Tg=function(a,b,c,d,e,f,g){Of()?(rf()?a=t(a.Pf,a):(Rg||(Rg=new D(function(a,b){Sg(a,b)})),a=t(a.Of,a)),a(b,c,d,e,f,g)):c&&c(null)};
R.prototype.Pf=function(a,b,c,d,e,f){var g="Node"==Cf(),l=Df()?g?new H(this.Yf):new H:new H(this.Pe);if(f){l.ub=Math.max(0,f);var n=setTimeout(function(){l.dispatchEvent("timeout")},f)}l.listen("complete",function(){n&&clearTimeout(n);var a=null;try{a=JSON.parse(Qe(this))||null}catch(pb){a=null}b&&b(a)});qc(l,"ready",function(){n&&clearTimeout(n);this.Ia||(this.Ia=!0,this.hb())});qc(l,"timeout",function(){n&&clearTimeout(n);this.Ia||(this.Ia=!0,this.hb());b&&b(null)});l.send(a,c,d,e)};
var Ug=Ga("https://apis.google.com/js/client.js?onload=%{onload}"),Vg="__fcb"+Math.floor(1E6*Math.random()).toString(),Sg=function(a,b){if(((window.gapi||{}).client||{}).request)a();else{k[Vg]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=La(Ug,{onload:Vg});Ud(be(c),function(){b(Error("CORS_UNSUPPORTED"))})}};
R.prototype.Of=function(a,b,c,d,e){var f=this;Rg.then(function(){window.gapi.client.setApiKey(f.m);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(a){window.gapi.auth.setToken(g);b&&b(a)}})}).f(function(a){b&&b({error:{message:a&&a.message||"CORS_UNSUPPORTED"}})})};
var Xg=function(a,b){return new D(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Tg(a,a.Mf+"?key="+encodeURIComponent(a.m),function(a){a?a.error?d(Wg(a)):a.access_token&&a.refresh_token?c(a):d(new N("internal-error")):d(new N("network-request-failed"))},"POST",lf(b).toString(),a.te,a.Nf.get()):d(new N("internal-error"))})},Yg=function(a,b,c,d,e,f){var g=ff(a.Xe+b);J(g,"key",a.m);f&&J(g,"cb",la().toString());var l="GET"==c;if(l)for(var n in d)d.hasOwnProperty(n)&&
J(g,n,d[n]);return new D(function(b,f){Tg(a,g.toString(),function(a){a?a.error?f(Wg(a,e||{})):b(a):f(new N("network-request-failed"))},c,l?void 0:Fc(Kf(d)),a.Zd,a.Ye.get())})},Zg=function(a){if(!wc.test(a.email))throw new N("invalid-email");},$g=function(a){"email"in a&&Zg(a)},bh=function(a,b){return Q(a,ah,{identifier:b,continueUri:Ff()?nf():"http://localhost"}).then(function(a){return a.allProviders||[]})},dh=function(a){return Q(a,ch,{}).then(function(a){return a.authorizedDomains||[]})},eh=function(a){if(!a.idToken)throw new N("internal-error");
},fh=function(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new N("internal-error");}else{if(!a.sessionInfo)throw new N("missing-verification-id");if(!a.code)throw new N("missing-verification-code");}};R.prototype.signInAnonymously=function(){return Q(this,gh,{})};R.prototype.updateEmail=function(a,b){return Q(this,hh,{idToken:a,email:b})};R.prototype.updatePassword=function(a,b){return Q(this,zg,{idToken:a,password:b})};var ih={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};
R.prototype.updateProfile=function(a,b){var c={idToken:a},d=[];db(ih,function(a,f){var e=b[f];null===e?d.push(a):f in b&&(c[f]=e)});d.length&&(c.deleteAttribute=d);return Q(this,hh,c)};R.prototype.sendPasswordResetEmail=function(a){return Q(this,jh,{requestType:"PASSWORD_RESET",email:a})};R.prototype.sendEmailVerification=function(a){return Q(this,kh,{requestType:"VERIFY_EMAIL",idToken:a})};R.prototype.verifyPhoneNumber=function(a){return Q(this,lh,a)};
var nh=function(a,b,c){return Q(a,mh,{idToken:b,deleteProvider:c})},oh=function(a){if(!a.requestUri||!a.sessionId&&!a.postBody)throw new N("internal-error");},ph=function(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=Lg(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=Lg(a)):"EMAIL_EXISTS"==a.errorMessage&&(a.code="email-already-in-use",b=Lg(a));if(b)throw b;if(!a.idToken)throw new N("internal-error");},kg=function(a,
b){b.returnIdpCredential=!0;return Q(a,qh,b)},mg=function(a,b){b.returnIdpCredential=!0;return Q(a,rh,b)},ng=function(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return Q(a,sh,b)},th=function(a){if(!a.oobCode)throw new N("invalid-action-code");};R.prototype.confirmPasswordReset=function(a,b){return Q(this,uh,{oobCode:a,newPassword:b})};R.prototype.checkActionCode=function(a){return Q(this,vh,{oobCode:a})};R.prototype.applyActionCode=function(a){return Q(this,wh,{oobCode:a})};
var wh={endpoint:"setAccountInfo",D:th,Za:"email"},vh={endpoint:"resetPassword",D:th,W:function(a){if(!a.email||!a.requestType)throw new N("internal-error");}},xh={endpoint:"signupNewUser",D:function(a){Zg(a);if(!a.password)throw new N("weak-password");},W:eh,wa:!0},ah={endpoint:"createAuthUri"},yh={endpoint:"deleteAccount",Xa:["idToken"]},mh={endpoint:"setAccountInfo",Xa:["idToken","deleteProvider"],D:function(a){if(!ga(a.deleteProvider))throw new N("internal-error");}},zh={endpoint:"getAccountInfo"},
kh={endpoint:"getOobConfirmationCode",Xa:["idToken","requestType"],D:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new N("internal-error");},Za:"email"},jh={endpoint:"getOobConfirmationCode",Xa:["requestType"],D:function(a){if("PASSWORD_RESET"!=a.requestType)throw new N("internal-error");Zg(a)},Za:"email"},ch={Md:!0,endpoint:"getProjectConfig",ee:"GET"},Ah={Md:!0,endpoint:"getRecaptchaParam",ee:"GET",W:function(a){if(!a.recaptchaSiteKey)throw new N("internal-error");}},uh={endpoint:"resetPassword",
D:th,Za:"email"},Gg={endpoint:"sendVerificationCode",Xa:["phoneNumber","recaptchaToken"],Za:"sessionInfo"},hh={endpoint:"setAccountInfo",Xa:["idToken"],D:$g,wa:!0},zg={endpoint:"setAccountInfo",Xa:["idToken"],D:function(a){$g(a);if(!a.password)throw new N("weak-password");},W:eh,wa:!0},gh={endpoint:"signupNewUser",W:eh,wa:!0},qh={endpoint:"verifyAssertion",D:oh,W:ph,wa:!0},sh={endpoint:"verifyAssertion",D:oh,W:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new N("user-not-found");
if(!a.idToken)throw new N("internal-error");},wa:!0},rh={endpoint:"verifyAssertion",D:function(a){oh(a);if(!a.idToken)throw new N("internal-error");},W:ph,wa:!0},Bh={endpoint:"verifyCustomToken",D:function(a){if(!a.token)throw new N("invalid-custom-token");},W:eh,wa:!0},yg={endpoint:"verifyPassword",D:function(a){Zg(a);if(!a.password)throw new N("wrong-password");},W:eh,wa:!0},lh={endpoint:"verifyPhoneNumber",D:fh,W:eh},Dg={endpoint:"verifyPhoneNumber",D:function(a){if(!a.idToken)throw new N("internal-error");
fh(a)},W:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",Lg(a);eh(a)}},Eg={Se:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",D:fh,W:eh},Q=function(a,b,c){if(!Yf(c,b.Xa))return F(new N("internal-error"));var d=b.ee||"POST",e;return E(c).then(b.D).then(function(){b.wa&&(c.returnSecureToken=!0);return Yg(a,b.endpoint,d,c,b.Se,b.Md||!1)}).then(function(a){return e=a}).then(b.W).then(function(){if(!b.Za)return e;if(!(b.Za in e))throw new N("internal-error");return e[b.Za]})},
Wg=function(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new N(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",
INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",
INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired"};lb(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*(.*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new N(d[e],
b);!b&&a&&(b=Jf(a));return new N("internal-error",b)};var Ch=function(a){this.C=a};Ch.prototype.value=function(){return this.C};Ch.prototype.ve=function(a){this.C.style=a;return this};Ch.prototype.getStyle=function(){return this.C.style};var Dh=function(a){this.C=a||{}};h=Dh.prototype;h.value=function(){return this.C};h.getUrl=function(){return this.C.url};h.ve=function(a){this.C.style=a;return this};h.getStyle=function(){return this.C.style};h.getId=function(){return this.C.id};h.getContext=function(){return this.C.context};var Fh=function(a){this.Wf=a;this.tc=null;this.rd=Eh(this)},Gh=function(a){var b=new Dh;b.C.where=document.body;b.C.url=a.Wf;b.C.messageHandlersFilter=L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");b.C.attributes=b.C.attributes||{};(new Ch(b.C.attributes)).ve({position:"absolute",top:"-100px",width:"1px",height:"1px"});b.C.dontclear=!0;return b},Eh=function(a){return Hh().then(function(){return new D(function(b,c){L("gapi.iframes.getContext")().open(Gh(a).value(),function(d){a.tc=d;a.tc.restyle({setHideOnLeave:!1});
var e=setTimeout(function(){c(Error("Network Error"))},Ih.get()),f=function(){clearTimeout(e);b()};d.ping(f).then(f,function(){c(Error("Network Error"))})})})})};Fh.prototype.sendMessage=function(a){var b=this;return this.rd.then(function(){return new D(function(c){b.tc.send(a.type,a,c,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})};
var Jh=function(a,b){a.rd.then(function(){a.tc.register("authEvent",b,L("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})},Kh=Ga("https://apis.google.com/js/api.js?onload=%{onload}"),Lh=new Pf(3E4,6E4),Ih=new Pf(5E3,15E3),Mh=null,Hh=function(){return Mh?Mh:Mh=(new D(function(a,b){if(Of()){var c=function(){Nf();L("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Nf();b(Error("Network Error"))},timeout:Lh.get()})};if(L("gapi.iframes.Iframe"))a();else if(L("gapi.load"))c();else{var d="__iframefcb"+
Math.floor(1E6*Math.random()).toString();k[d]=function(){L("gapi.load")?c():b(Error("Network Error"))};d=La(Kh,{onload:d});E(be(d)).f(function(){b(Error("Network Error"))})}}else b(Error("Network Error"))})).f(function(a){Mh=null;throw a;})};var Nh=function(a,b,c){this.B=a;this.m=b;this.w=c;this.ab=null;this.gc=gf(this.B,"/__/auth/iframe");J(this.gc,"apiKey",this.m);J(this.gc,"appName",this.w)};Nh.prototype.Fd=function(a){this.ab=a;return this};Nh.prototype.toString=function(){this.ab?J(this.gc,"v",this.ab):this.gc.removeParameter("v");return this.gc.toString()};var Oh=function(a,b,c,d,e){this.B=a;this.m=b;this.w=c;this.Ne=d;this.ab=this.S=this.zd=null;this.Vb=e};Oh.prototype.Fd=function(a){this.ab=a;return this};
Oh.prototype.toString=function(){var a=gf(this.B,"/__/auth/handler");J(a,"apiKey",this.m);J(a,"appName",this.w);J(a,"authType",this.Ne);if(this.Vb.isOAuthProvider){J(a,"providerId",this.Vb.providerId);var b=this.Vb,c=Kf(b.Td),d;for(d in c)c[d]=c[d].toString();b=b.Gf;c=jb(c);for(d=0;d<b.length;d++){var e=b[d];e in c&&delete c[e]}hb(c)||J(a,"customParameters",Jf(c))}"function"===typeof this.Vb.ae&&(b=this.Vb.ae(),b.length&&J(a,"scopes",b.join(",")));this.zd?J(a,"redirectUrl",this.zd):a.removeParameter("redirectUrl");
this.S?J(a,"eventId",this.S):a.removeParameter("eventId");this.ab?J(a,"v",this.ab):a.removeParameter("v");if(this.ic)for(var f in this.ic)this.ic.hasOwnProperty(f)&&!ef(a,f)&&J(a,f,this.ic[f]);return a.toString()};
var Ph=function(a,b,c,d){this.B=a;this.m=b;this.w=c;this.$e=(this.Ga=d||null)?Ef(this.Ga):null;d=this.Ga;this.jf=(new Nh(a,b,c)).Fd(d).toString();this.pa=[];this.g=new R(b,null,this.$e);this.vc=this.sa=null},Qh=function(a){var b=nf();return dh(a).then(function(a){a:{for(var c=ff(b),e=c.ma,c=c.ka,f=0;f<a.length;f++){var g=a[f];var l=c;var n=e;0==g.indexOf("chrome-extension://")?l=ff(g).ka==l&&"chrome-extension"==n:"http"!=n&&"https"!=n?l=!1:wf.test(g)?l=l==g:(g=g.split(".").join("\\."),l=(new RegExp("^(.+\\."+
g+"|"+g+")$","i")).test(l));if(l){a=!0;break a}}a=!1}if(!a)throw new gg(nf());})};h=Ph.prototype;h.Lb=function(){if(this.vc)return this.vc;var a=this;return this.vc=xf().then(function(){a.sc=new Fh(a.jf);Rh(a)})};h.ac=function(a,b,c){var d=new N("popup-closed-by-user"),e=new N("web-storage-unsupported"),f=this,g=!1;return this.Na().then(function(){Sh(f).then(function(c){c||(a&&tf(a),b(e),g=!0)})}).f(function(){}).then(function(){if(!g)return vf(a)}).then(function(){if(!g)return Ae(c).then(function(){b(d)})})};
h.we=function(){var a=K();return!If(a)&&!Mf(a)};h.de=function(){return!1};h.Tb=function(a,b,c,d,e,f,g){if(!a)return F(new N("popup-blocked"));if(g&&!If())return this.Na().f(function(b){tf(a);e(b)}),d(),E();this.sa||(this.sa=Qh(this.g));var l=this;return this.sa.then(function(){var b=l.Na().f(function(b){tf(a);e(b);throw b;});d();return b}).then(function(){Jg(c);if(!g){var d=Th(l.B,l.m,l.w,b,c,null,f,l.Ga);of(d,a)}}).f(function(a){"auth/network-request-failed"==a.code&&(l.sa=null);throw a;})};
h.Ub=function(a,b,c){this.sa||(this.sa=Qh(this.g));var d=this;return this.sa.then(function(){Jg(b);var e=Th(d.B,d.m,d.w,a,b,nf(),c,d.Ga);of(e)}).f(function(a){"auth/network-request-failed"==a.code&&(d.sa=null);throw a;})};h.Na=function(){var a=this;return this.Lb().then(function(){return a.sc.rd}).f(function(){a.sa=null;throw new N("network-request-failed");})};h.ze=function(){return!0};
var Th=function(a,b,c,d,e,f,g,l,n){a=new Oh(a,b,c,d,e);a.zd=f;a.S=g;f=a.Fd(l);f.ic=jb(n||null);return f.toString()},Rh=function(a){if(!a.sc)throw Error("IfcHandler must be initialized!");Jh(a.sc,function(b){var c={};if(b&&b.authEvent){var d=!1;b=fg(b.authEvent);for(c=0;c<a.pa.length;c++)d=a.pa[c](b)||d;c={};c.status=d?"ACK":"ERROR";return E(c)}c.status="ERROR";return E(c)})},Sh=function(a){var b={type:"webStorageSupport"};return a.Lb().then(function(){return a.sc.sendMessage(b)}).then(function(a){if(a&&
a.length&&"undefined"!==typeof a[0].webStorageSupport)return a[0].webStorageSupport;throw Error();})};Ph.prototype.eb=function(a){this.pa.push(a)};Ph.prototype.Zb=function(a){Xa(this.pa,function(b){return b==a})};var Uh=function(a,b,c){M(this,"type","recaptcha");this.Vc=this.zb=null;this.Bb=!1;this.Rd=a;this.za=b||{theme:"light",type:"image"};this.J=[];if(this.za.sitekey)throw new N("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.wc="invisible"===this.za.size;if(!kd(a)||!this.wc&&kd(a).hasChildNodes())throw new N("argument-error","reCAPTCHA container is either not found or already contains inner elements!");try{this.h=c||firebase.app()}catch(g){throw new N("argument-error",
"No firebase.app.App instance is currently initialized.");}if(this.h.options&&this.h.options.apiKey)a=firebase.SDK_VERSION?Ef(firebase.SDK_VERSION):null,this.g=new R(this.h.options&&this.h.options.apiKey,null,a);else throw new N("invalid-api-key");var d=this;this.Qc=[];var e=this.za.callback;this.za.callback=function(a){d.Cb(a);if("function"===typeof e)e(a);else if("string"===typeof e){var b=L(e,k);"function"===typeof b&&b(a)}};var f=this.za["expired-callback"];this.za["expired-callback"]=function(){d.Cb(null);
if("function"===typeof f)f();else if("string"===typeof f){var a=L(f,k);"function"===typeof a&&a()}}};Uh.prototype.Cb=function(a){for(var b=0;b<this.Qc.length;b++)try{this.Qc[b](a)}catch(c){}};var Vh=function(a,b){Xa(a.Qc,function(a){return a==b})};Uh.prototype.c=function(a){var b=this;this.J.push(a);Cd(a,function(){Wa(b.J,a)});return a};
Uh.prototype.Mb=function(){var a=this;return this.zb?this.zb:this.zb=this.c(E().then(function(){if(Ff())return xf();throw new N("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return Xh()}).then(function(){return Q(a.g,Ah,{})}).then(function(b){a.za.sitekey=b.recaptchaSiteKey}).f(function(b){a.zb=null;throw b;}))};
Uh.prototype.render=function(){Yh(this);var a=this;return this.c(this.Mb().then(function(){if(null===a.Vc){var b=a.Rd;if(!a.wc){var c=kd(b),b=od("DIV");c.appendChild(b)}a.Vc=grecaptcha.render(b,a.za)}return a.Vc}))};Uh.prototype.verify=function(){Yh(this);var a=this;return this.c(this.render().then(function(b){return new D(function(c){var d=grecaptcha.getResponse(b);if(d)c(d);else{var e=function(b){b&&(Vh(a,e),c(b))};a.Qc.push(e);a.wc&&grecaptcha.execute(a.Vc)}})}))};
var Yh=function(a){if(a.Bb)throw new N("internal-error","RecaptchaVerifier instance has been destroyed.");};Uh.prototype.clear=function(){Yh(this);this.Bb=!0;for(var a=0;a<this.J.length;a++)this.J[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.wc)for(var a=kd(this.Rd),b;b=a.firstChild;)a.removeChild(b)};
var Zh=Ga("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit"),Xh=function(){return new D(function(a,b){if(Of())if(k.grecaptcha)a();else{var c="__rcb"+Math.floor(1E6*Math.random()).toString();k[c]=function(){k.grecaptcha?a():b(new N("internal-error"));delete k[c]};var d=La(Zh,{onload:c});E(be(d)).f(function(){b(new N("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else b(new N("network-request-failed"))})};var $h=function(a){this.F=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.F)throw new N("internal-error","The React Native compatibility library was not found.");};h=$h.prototype;h.get=function(a){return E(this.F.getItem(a)).then(function(a){return a&&Lf(a)})};h.set=function(a,b){return E(this.F.setItem(a,Jf(b)))};h.remove=function(a){return E(this.F.removeItem(a))};h.fb=function(){};h.Wa=function(){};var ai=function(){this.F={}};h=ai.prototype;h.get=function(a){return E(this.F[a])};h.set=function(a,b){this.F[a]=b;return E()};h.remove=function(a){delete this.F[a];return E()};h.fb=function(){};h.Wa=function(){};var ci=function(){if(!bi()){if("Node"==Cf())throw new N("internal-error","The LocalStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.F=k.localStorage||firebase.INTERNAL.node.localStorage},bi=function(){var a="Node"==Cf(),a=k.localStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=ci.prototype;
h.get=function(a){var b=this;return E().then(function(){var c=b.F.getItem(a);return Lf(c)})};h.set=function(a,b){var c=this;return E().then(function(){var d=Jf(b);null===d?c.remove(a):c.F.setItem(a,d)})};h.remove=function(a){var b=this;return E().then(function(){b.F.removeItem(a)})};h.fb=function(a){k.window&&jc(k.window,"storage",a)};h.Wa=function(a){k.window&&rc(k.window,"storage",a)};var di=function(){this.F={}};h=di.prototype;h.get=function(){return E(null)};h.set=function(){return E()};h.remove=function(){return E()};h.fb=function(){};h.Wa=function(){};var fi=function(){if(!ei()){if("Node"==Cf())throw new N("internal-error","The SessionStorage compatibility library was not found.");throw new N("web-storage-unsupported");}this.F=k.sessionStorage||firebase.INTERNAL.node.sessionStorage},ei=function(){var a="Node"==Cf(),a=k.sessionStorage||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}};h=fi.prototype;
h.get=function(a){var b=this;return E().then(function(){var c=b.F.getItem(a);return Lf(c)})};h.set=function(a,b){var c=this;return E().then(function(){var d=Jf(b);null===d?c.remove(a):c.F.setItem(a,d)})};h.remove=function(a){var b=this;return E().then(function(){b.F.removeItem(a)})};h.fb=function(){};h.Wa=function(){};var gi=function(a,b,c,d,e,f){if(!window.indexedDB)throw new N("web-storage-unsupported");this.Te=a;this.qd=b;this.cd=c;this.De=d;this.bb=e;this.aa={};this.bc=[];this.Pb=0;this.kf=f||k.indexedDB},hi,ii=function(a){return new D(function(b,c){var d=a.kf.open(a.Te,a.bb);d.onerror=function(a){c(Error(a.target.errorCode))};d.onupgradeneeded=function(b){b=b.target.result;try{b.createObjectStore(a.qd,{keyPath:a.cd})}catch(f){c(f)}};d.onsuccess=function(a){b(a.target.result)}})},ji=function(a){a.he||(a.he=
ii(a));return a.he},ki=function(a,b){return b.objectStore(a.qd)},li=function(a,b,c){return b.transaction([a.qd],c?"readwrite":"readonly")},mi=function(a){return new D(function(b,c){a.onsuccess=function(a){a&&a.target?b(a.target.result):b()};a.onerror=function(a){c(Error(a.target.errorCode))}})};h=gi.prototype;
h.set=function(a,b){var c=!1,d,e=this;return Cd(ji(this).then(function(b){d=b;b=ki(e,li(e,d,!0));return mi(b.get(a))}).then(function(f){var g=ki(e,li(e,d,!0));if(f)return f.value=b,mi(g.put(f));e.Pb++;c=!0;f={};f[e.cd]=a;f[e.De]=b;return mi(g.add(f))}).then(function(){e.aa[a]=b}),function(){c&&e.Pb--})};h.get=function(a){var b=this;return ji(this).then(function(c){return mi(ki(b,li(b,c,!1)).get(a))}).then(function(a){return a&&a.value})};
h.remove=function(a){var b=!1,c=this;return Cd(ji(this).then(function(d){b=!0;c.Pb++;return mi(ki(c,li(c,d,!0))["delete"](a))}).then(function(){delete c.aa[a]}),function(){b&&c.Pb--})};
h.Sf=function(){var a=this;return ji(this).then(function(b){var c=ki(a,li(a,b,!1));return c.getAll?mi(c.getAll()):new D(function(a,b){var d=[],e=c.openCursor();e.onsuccess=function(b){(b=b.target.result)?(d.push(b.value),b["continue"]()):a(d)};e.onerror=function(a){b(Error(a.target.errorCode))}})}).then(function(b){var c={},d=[];if(0==a.Pb){for(d=0;d<b.length;d++)c[b[d][a.cd]]=b[d][a.De];d=pf(a.aa,c);a.aa=c}return d})};h.fb=function(a){0==this.bc.length&&this.Hd();this.bc.push(a)};
h.Wa=function(a){Xa(this.bc,function(b){return b==a});0==this.bc.length&&this.Lc()};h.Hd=function(){var a=this;this.Lc();var b=function(){a.ud=Ae(800).then(t(a.Sf,a)).then(function(b){0<b.length&&y(a.bc,function(a){a(b)})}).then(b).f(function(a){"STOP_EVENT"!=a.message&&b()});return a.ud};b()};h.Lc=function(){this.ud&&this.ud.cancel("STOP_EVENT")};var qi=function(){this.Vd={Browser:ni,Node:oi,ReactNative:pi}[Cf()]},ri,ni={V:ci,Jd:fi},oi={V:ci,Jd:fi},pi={V:$h,Jd:di};var si=function(a,b){this.Re=b;M(this,"verificationId",a)};si.prototype.confirm=function(a){a=Hg(this.verificationId,a);return this.Re(a)};var ti=function(a,b,c,d){return(new Fg(a)).verifyPhoneNumber(b,c).then(function(a){return new si(a,d)})};var ui=function(a){var b={},c=a.email,d=a.newEmail;a=a.requestType;if(!c||!a)throw Error("Invalid provider user info!");b.fromEmail=d||null;b.email=c;M(this,"operation",a);M(this,"data",Zf(b))};var vi=function(a,b,c,d,e,f){this.Af=a;this.If=b;this.cf=c;this.Ac=d;this.Kd=e;this.Jf=!!f;this.nb=null;this.Oa=this.Ac;if(this.Kd<this.Ac)throw Error("Proactive refresh lower bound greater than upper bound!");};vi.prototype.start=function(){this.Oa=this.Ac;wi(this,!0)};
var xi=function(a,b){if(b)return a.Oa=a.Ac,a.cf();b=a.Oa;a.Oa*=2;a.Oa>a.Kd&&(a.Oa=a.Kd);return b},wi=function(a,b){a.stop();a.nb=Ae(xi(a,b)).then(function(){return a.Jf?E():Rf()}).then(function(){return a.Af()}).then(function(){wi(a,!0)}).f(function(b){a.If(b)&&wi(a,!1)})};vi.prototype.stop=function(){this.nb&&(this.nb.cancel(),this.nb=null)};var Di=function(a){var b={};b["facebook.com"]=yi;b["google.com"]=zi;b["github.com"]=Ai;b["twitter.com"]=Bi;var c=a&&a.providerId;return c?b[c]?new b[c](a):new Ci(a):null},Ci=function(a){var b=Lf(a.rawUserInfo||"{}");a=a.providerId;if(!a)throw Error("Invalid additional user info!");M(this,"profile",Zf(b||{}));M(this,"providerId",a)},yi=function(a){Ci.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider id!");};u(yi,Ci);
var Ai=function(a){Ci.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider id!");M(this,"username",this.profile&&this.profile.login||null)};u(Ai,Ci);var zi=function(a){Ci.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider id!");};u(zi,Ci);var Bi=function(a){Ci.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider id!");M(this,"username",a.screenName||null)};u(Bi,Ci);var Ei=function(a,b,c,d){this.le=a;this.Cd=b;this.Kf=c;this.$b=d;this.T={};ri||(ri=new qi);a=ri;try{if(mf()){hi||(hi=new gi("firebaseLocalStorageDb","firebaseLocalStorage","fbase_key","value",1));var e=hi}else e=new a.Vd.V;this.Sa=e}catch(f){this.Sa=new ai,this.$b=!0}try{this.Oc=new a.Vd.Jd}catch(f){this.Oc=new ai}this.Id=t(this.xe,this);this.aa={}},Fi,Gi=function(){Fi||(Fi=new Ei("firebase",":",!Mf(K())&&Bf()?!0:!1,If()));return Fi};h=Ei.prototype;
h.Z=function(a,b){return this.le+this.Cd+a.name+(b?this.Cd+b:"")};h.get=function(a,b){return(a.V?this.Sa:this.Oc).get(this.Z(a,b))};h.remove=function(a,b){b=this.Z(a,b);a.V&&!this.$b&&(this.aa[b]=null);return(a.V?this.Sa:this.Oc).remove(b)};h.set=function(a,b,c){var d=this.Z(a,c),e=this,f=a.V?this.Sa:this.Oc;return f.set(d,b).then(function(){return f.get(d)}).then(function(b){a.V&&!this.$b&&(e.aa[d]=b)})};
h.addListener=function(a,b,c){a=this.Z(a,b);this.$b||(this.aa[a]=k.localStorage.getItem(a));hb(this.T)&&this.Hd();this.T[a]||(this.T[a]=[]);this.T[a].push(c)};h.removeListener=function(a,b,c){a=this.Z(a,b);this.T[a]&&(Xa(this.T[a],function(a){return a==c}),0==this.T[a].length&&delete this.T[a]);hb(this.T)&&this.Lc()};h.Hd=function(){this.Sa.fb(this.Id);this.$b||mf()||Hi(this)};
var Hi=function(a){Ii(a);a.od=setInterval(function(){for(var b in a.T){var c=k.localStorage.getItem(b),d=a.aa[b];c!=d&&(a.aa[b]=c,c=new Yb({type:"storage",key:b,target:window,oldValue:d,newValue:c,pe:!0}),a.xe(c))}},1E3)},Ii=function(a){a.od&&(clearInterval(a.od),a.od=null)};Ei.prototype.Lc=function(){this.Sa.Wa(this.Id);Ii(this)};
Ei.prototype.xe=function(a){if(a&&a.af){var b=a.la.key;if(0==b.indexOf(this.le+this.Cd)&&this.T[b]){"undefined"!==typeof a.la.pe?this.Sa.Wa(this.Id):Ii(this);if(this.Kf){var c=k.localStorage.getItem(b),d=a.la.newValue;if(d!==c)null!==d?k.localStorage.setItem(b,d):k.localStorage.removeItem(b);else if(this.aa[b]===d&&"undefined"===typeof a.la.pe)return}this.aa[b]=k.localStorage.getItem(b);this.Od(b)}}else y(a,t(this.Od,this))};Ei.prototype.Od=function(a){this.T[a]&&y(this.T[a],function(a){a()})};var Ji=function(a,b){this.v=a;this.l=b||Gi()},Ki={name:"authEvent",V:!0},Li=function(a){return a.l.get(Ki,a.v).then(function(a){return fg(a)})};Ji.prototype.eb=function(a){this.l.addListener(Ki,this.v,a)};Ji.prototype.Zb=function(a){this.l.removeListener(Ki,this.v,a)};var Mi=function(a){this.l=a||Gi()},Ni={name:"sessionId",V:!1};Mi.prototype.oc=function(a){return this.l.get(Ni,a)};var Oi=function(a,b,c,d,e,f){this.B=a;this.m=b;this.w=c;this.Ga=d||null;this.ye=b+":"+c;this.Lf=new Mi;this.$d=new Ji(this.ye);this.md=null;this.pa=[];this.pf=e||500;this.Ef=f||2E3;this.Kb=this.Dc=null},Pi=function(a){return new N("invalid-cordova-configuration",a)};
Oi.prototype.Na=function(){return this.Mb?this.Mb:this.Mb=zf().then(function(){if("function"!==typeof L("universalLinks.subscribe",k))throw Pi("cordova-universal-links-plugin is not installed");if("undefined"===typeof L("BuildInfo.packageName",k))throw Pi("cordova-plugin-buildinfo is not installed");if("function"!==typeof L("cordova.plugins.browsertab.openUrl",k))throw Pi("cordova-plugin-browsertab is not installed");if("function"!==typeof L("cordova.InAppBrowser.open",k))throw Pi("cordova-plugin-inappbrowser is not installed");
},function(){throw new N("cordova-not-ready");})};var Qi=function(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")},Ri=function(a){var b=new Rb;b.update(a);return $a(b.digest())};h=Oi.prototype;h.ac=function(a,b){b(new N("operation-not-supported-in-this-environment"));return E()};h.Tb=function(){return F(new N("operation-not-supported-in-this-environment"))};h.ze=function(){return!1};h.we=function(){return!0};
h.de=function(){return!0};
h.Ub=function(a,b,c){if(this.Dc)return F(new N("redirect-operation-pending"));var d=this,e=k.document,f=null,g=null,l=null,n=null;return this.Dc=Cd(E().then(function(){Jg(b);return Si(d)}).then(function(){return Ti(d,a,b,c)}).then(function(){return(new D(function(a,b){g=function(){var b=L("cordova.plugins.browsertab.close",k);a();"function"===typeof b&&b();d.Kb&&"function"===typeof d.Kb.close&&(d.Kb.close(),d.Kb=null);return!1};d.eb(g);l=function(){f||(f=Ae(d.Ef).then(function(){b(new N("redirect-cancelled-by-user"))}))};n=
function(){Qf()&&l()};e.addEventListener("resume",l,!1);K().toLowerCase().match(/android/)||e.addEventListener("visibilitychange",n,!1)})).f(function(a){return Ui(d).then(function(){throw a;})})}),function(){l&&e.removeEventListener("resume",l,!1);n&&e.removeEventListener("visibilitychange",n,!1);f&&f.cancel();g&&d.Zb(g);d.Dc=null})};
var Ti=function(a,b,c,d){var e=Qi(),f=new O(b,d,null,e,new N("no-auth-event")),g=L("BuildInfo.packageName",k);if("string"!==typeof g)throw new N("invalid-cordova-configuration");var l=L("BuildInfo.displayName",k),n={};if(K().toLowerCase().match(/iphone|ipad|ipod/))n.ibi=g;else if(K().toLowerCase().match(/android/))n.apn=g;else return F(new N("operation-not-supported-in-this-environment"));l&&(n.appDisplayName=l);e=Ri(e);n.sessionId=e;var C=Th(a.B,a.m,a.w,b,c,null,d,a.Ga,n);return a.Na().then(function(){var b=
a.ye;return a.Lf.l.set(Ki,f.G(),b)}).then(function(){var b=L("cordova.plugins.browsertab.isAvailable",k);if("function"!==typeof b)throw new N("invalid-cordova-configuration");var c=null;b(function(b){if(b){c=L("cordova.plugins.browsertab.openUrl",k);if("function"!==typeof c)throw new N("invalid-cordova-configuration");c(C)}else{c=L("cordova.InAppBrowser.open",k);if("function"!==typeof c)throw new N("invalid-cordova-configuration");b=c;var d=K();d=!(!d.match(/(iPad|iPhone|iPod).*OS 7_\d/i)&&!d.match(/(iPad|iPhone|iPod).*OS 8_\d/i));
a.Kb=b(C,d?"_blank":"_system","location=yes")}})})};Oi.prototype.Cb=function(a){for(var b=0;b<this.pa.length;b++)try{this.pa[b](a)}catch(c){}};
var Si=function(a){a.md||(a.md=a.Na().then(function(){return new D(function(b){var c=function(d){b(d);a.Zb(c);return!1};a.eb(c);Vi(a)})}));return a.md},Ui=function(a){var b=null;return Li(a.$d).then(function(c){b=c;c=a.$d;return c.l.remove(Ki,c.v)}).then(function(){return b})},Vi=function(a){var b=L("universalLinks.subscribe",k);if("function"!==typeof b)throw new N("invalid-cordova-configuration");var c=new O("unknown",null,null,null,new N("no-auth-event")),d=!1,e=Ae(a.pf).then(function(){return Ui(a).then(function(){d||
a.Cb(c)})}),f=function(b){d=!0;e&&e.cancel();Ui(a).then(function(d){var e=c;if(d&&b&&b.url){var e=null;var f=b.url;var g=ff(f),l=ef(g,"link"),n=ef(ff(l),"link"),g=ef(g,"deep_link_id");f=ef(ff(g),"link")||g||n||l||f;-1!=f.indexOf("/__/auth/callback")&&(e=ff(f),e=Lf(ef(e,"firebaseError")||null),e=(e="object"===typeof e?eg(e):null)?new O(d.ia,d.S,null,null,e):new O(d.ia,d.S,f,d.oc()));e=e||c}a.Cb(e)})},g=k.handleOpenURL;k.handleOpenURL=function(a){0==a.toLowerCase().indexOf(L("BuildInfo.packageName",
k).toLowerCase()+"://")&&f({url:a});if("function"===typeof g)try{g(a)}catch(n){console.error(n)}};b(null,f)};Oi.prototype.eb=function(a){this.pa.push(a);Si(this).f(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new O("unknown",null,null,null,new N("no-auth-event")),a(b))})};Oi.prototype.Zb=function(a){Xa(this.pa,function(b){return b==a})};var Wi=function(a){this.v=a;this.l=Gi()},Xi={name:"pendingRedirect",V:!1},Yi=function(a){return a.l.set(Xi,"pending",a.v)},Zi=function(a){return a.l.remove(Xi,a.v)},$i=function(a){return a.l.get(Xi,a.v).then(function(a){return"pending"==a})};var dj=function(a,b,c){this.B=a;this.m=b;this.w=c;this.cc=[];this.lb=!1;this.Zc=t(this.jd,this);this.Ua=new aj(this);this.vd=new bj(this);this.Qb=new Wi(this.m+":"+this.w);this.Ca={};this.Ca.unknown=this.Ua;this.Ca.signInViaRedirect=this.Ua;this.Ca.linkViaRedirect=this.Ua;this.Ca.reauthViaRedirect=this.Ua;this.Ca.signInViaPopup=this.vd;this.Ca.linkViaPopup=this.vd;this.Ca.reauthViaPopup=this.vd;this.U=cj(this.B,this.m,this.w)},cj=function(a,b,c){var d=firebase.SDK_VERSION||null;return yf()?new Oi(a,
b,c,d):new Ph(a,b,c,d)};dj.prototype.reset=function(){this.lb=!1;this.U.Zb(this.Zc);this.U=cj(this.B,this.m,this.w)};dj.prototype.Lb=function(){var a=this;this.lb||(this.lb=!0,this.U.eb(this.Zc));var b=this.U;return this.U.Na().f(function(c){a.U==b&&a.reset();throw c;})};var gj=function(a){a.U.we()&&a.Lb().f(function(b){var c=new O("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));ej(b)&&a.jd(c)});a.U.de()||fj(a.Ua)};
dj.prototype.subscribe=function(a){Ua(this.cc,a)||this.cc.push(a);if(!this.lb){var b=this;$i(this.Qb).then(function(a){a?Zi(b.Qb).then(function(){b.Lb().f(function(a){var c=new O("unknown",null,null,null,new N("operation-not-supported-in-this-environment"));ej(a)&&b.jd(c)})}):gj(b)}).f(function(){gj(b)})}};dj.prototype.unsubscribe=function(a){Xa(this.cc,function(b){return b==a})};
dj.prototype.jd=function(a){if(!a)throw new N("invalid-auth-event");for(var b=!1,c=0;c<this.cc.length;c++){var d=this.cc[c];if(d.Pd(a.ia,a.S)){(b=this.Ca[a.ia])&&b.qe(a,d);b=!0;break}}fj(this.Ua);return b};var hj=new Pf(2E3,1E4),ij=new Pf(3E4,6E4);dj.prototype.getRedirectResult=function(){return this.Ua.getRedirectResult()};dj.prototype.Tb=function(a,b,c,d,e){var f=this;return this.U.Tb(a,b,c,function(){f.lb||(f.lb=!0,f.U.eb(f.Zc))},function(){f.reset()},d,e)};
var ej=function(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1};dj.prototype.Ub=function(a,b,c){var d=this,e;return Yi(this.Qb).then(function(){return d.U.Ub(a,b,c).f(function(a){if(ej(a))throw new N("operation-not-supported-in-this-environment");e=a;return Zi(d.Qb).then(function(){throw e;})}).then(function(){return d.U.ze()?new D(function(){}):Zi(d.Qb).then(function(){return d.getRedirectResult()}).then(function(){}).f(function(){})})})};
dj.prototype.ac=function(a,b,c,d){return this.U.ac(c,function(c){a.Ya(b,null,c,d)},hj.get())};var jj={},kj=function(a,b,c){var d=b+":"+c;jj[d]||(jj[d]=new dj(a,b,c));return jj[d]},aj=function(a){this.l=a;this.sb=null;this.Xb=[];this.Wb=[];this.qb=null;this.yd=!1};aj.prototype.reset=function(){this.sb=null;this.qb&&(this.qb.cancel(),this.qb=null)};
aj.prototype.qe=function(a,b){if(!a)return F(new N("invalid-auth-event"));this.reset();this.yd=!0;var c=a.ia,d=a.S,e=a.getError()&&"auth/web-storage-unsupported"==a.getError().code,f=a.getError()&&"auth/operation-not-supported-in-this-environment"==a.getError().code;"unknown"!=c||e||f?a=a.Y?this.wd(a,b):b.Eb(c,d)?this.xd(a,b):F(new N("invalid-auth-event")):(lj(this,!1,null,null),a=E());return a};var fj=function(a){a.yd||(a.yd=!0,lj(a,!1,null,null))};
aj.prototype.wd=function(a){lj(this,!0,null,a.getError());return E()};aj.prototype.xd=function(a,b){var c=this;b=b.Eb(a.ia,a.S);var d=a.vb,e=a.oc(),f=!!a.ia.match(/Redirect$/);return b(d,e).then(function(a){lj(c,f,a,null)}).f(function(a){lj(c,f,null,a)})};
var mj=function(a,b){a.sb=function(){return F(b)};if(a.Wb.length)for(var c=0;c<a.Wb.length;c++)a.Wb[c](b)},nj=function(a,b){a.sb=function(){return E(b)};if(a.Xb.length)for(var c=0;c<a.Xb.length;c++)a.Xb[c](b)},lj=function(a,b,c,d){b?d?mj(a,d):nj(a,c):nj(a,{user:null});a.Xb=[];a.Wb=[]};aj.prototype.getRedirectResult=function(){var a=this;return new D(function(b,c){a.sb?a.sb().then(b,c):(a.Xb.push(b),a.Wb.push(c),oj(a))})};
var oj=function(a){var b=new N("timeout");a.qb&&a.qb.cancel();a.qb=Ae(ij.get()).then(function(){a.sb||lj(a,!0,null,b)})},bj=function(a){this.l=a};bj.prototype.qe=function(a,b){if(!a)return F(new N("invalid-auth-event"));var c=a.ia,d=a.S;return a.Y?this.wd(a,b):b.Eb(c,d)?this.xd(a,b):F(new N("invalid-auth-event"))};bj.prototype.wd=function(a,b){b.Ya(a.ia,null,a.getError(),a.S);return E()};
bj.prototype.xd=function(a,b){var c=a.S,d=a.ia,e=b.Eb(d,c),f=a.vb;a=a.oc();return e(f,a).then(function(a){b.Ya(d,a,null,c)}).f(function(a){b.Ya(d,null,a,c)})};var pj=function(a){this.g=a;this.Da=this.ca=null;this.Ja=0};pj.prototype.G=function(){return{apiKey:this.g.m,refreshToken:this.ca,accessToken:this.Da,expirationTime:this.Ja}};
var rj=function(a,b){var c=b.idToken,d=b.refreshToken;b=qj(b.expiresIn);a.Da=c;a.Ja=b;a.ca=d},qj=function(a){return la()+1E3*parseInt(a,10)},sj=function(a,b){return Xg(a.g,b).then(function(b){a.Da=b.access_token;a.Ja=qj(b.expires_in);a.ca=b.refresh_token;return{accessToken:a.Da,expirationTime:a.Ja,refreshToken:a.ca}}).f(function(b){"auth/user-token-expired"==b.code&&(a.ca=null);throw b;})};
pj.prototype.getToken=function(a){a=!!a;return this.Da&&!this.ca?F(new N("user-token-expired")):a||!this.Da||la()>this.Ja-3E4?this.ca?sj(this,{grant_type:"refresh_token",refresh_token:this.ca}):E(null):E({accessToken:this.Da,expirationTime:this.Ja,refreshToken:this.ca})};var tj=function(a,b,c,d,e){Vf(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,providerId:b})},uj=function(a,b){Wb.call(this,a);for(var c in b)this[c]=b[c]};u(uj,Wb);
var S=function(a,b,c){this.J=[];this.m=a.apiKey;this.w=a.appName;this.B=a.authDomain||null;a=firebase.SDK_VERSION?Ef(firebase.SDK_VERSION):null;this.g=new R(this.m,null,a);this.na=new pj(this.g);vj(this,b.idToken);rj(this.na,b);M(this,"refreshToken",this.na.ca);wj(this,c||{});oe.call(this);this.Ec=!1;this.B&&Hf()&&(this.s=kj(this.B,this.m,this.w));this.Kc=[];this.oa=null;this.pb=xj(this);this.xb=t(this.kd,this)};u(S,oe);S.prototype.kd=function(){this.pb.nb&&(this.pb.stop(),this.pb.start())};
var yj=function(a){try{return firebase.app(a.w).auth()}catch(b){throw new N("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.w+"'!");}},xj=function(a){return new vi(function(){return a.getIdToken(!0)},function(a){return a&&"auth/network-request-failed"==a.code?!0:!1},function(){var b=a.na.Ja-la()-3E5;return 0<b?b:0},3E4,96E4,!1)},zj=function(a){a.Bb||a.pb.nb||(a.pb.start(),rc(a,"tokenChanged",a.xb),jc(a,"tokenChanged",a.xb))},Aj=function(a){rc(a,"tokenChanged",
a.xb);a.pb.stop()},vj=function(a,b){a.ie=b;M(a,"_lat",b)},Bj=function(a,b){Xa(a.Kc,function(a){return a==b})},Cj=function(a){for(var b=[],c=0;c<a.Kc.length;c++)b.push(a.Kc[c](a));return zd(b).then(function(){return a})},Dj=function(a){a.s&&!a.Ec&&(a.Ec=!0,a.s.subscribe(a))},wj=function(a,b){Vf(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,providerData:[]})};
M(S.prototype,"providerId","firebase");var Ej=function(){},Fj=function(a){return E().then(function(){if(a.Bb)throw new N("app-deleted");})},Gj=function(a){return Qa(a.providerData,function(a){return a.providerId})},Ij=function(a,b){b&&(Hj(a,b.providerId),a.providerData.push(b))},Hj=function(a,b){Xa(a.providerData,function(a){return a.providerId==b})},Jj=function(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&M(a,b,c)};
S.prototype.copy=function(a){var b=this;b!=a&&(Vf(this,{uid:a.uid,displayName:a.displayName,photoURL:a.photoURL,email:a.email,emailVerified:a.emailVerified,phoneNumber:a.phoneNumber,isAnonymous:a.isAnonymous,providerData:[]}),y(a.providerData,function(a){Ij(b,a)}),this.na=a.na,M(this,"refreshToken",this.na.ca))};S.prototype.reload=function(){var a=this;return this.c(Fj(this).then(function(){return Kj(a).then(function(){return Cj(a)}).then(Ej)}))};
var Kj=function(a){return a.getIdToken().then(function(b){var c=a.isAnonymous;return Lj(a,b).then(function(){c||Jj(a,"isAnonymous",!1);return b})})};S.prototype.getIdToken=function(a){var b=this;return this.c(Fj(this).then(function(){return b.na.getToken(a)}).then(function(a){if(!a)throw new N("internal-error");a.accessToken!=b.ie&&(vj(b,a.accessToken),b.Pa());Jj(b,"refreshToken",a.refreshToken);return a.accessToken}))};
S.prototype.getToken=function(a){Sf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]||(Sf["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."));return this.getIdToken(a)};
var Mj=function(a,b){b.idToken&&a.ie!=b.idToken&&(rj(a.na,b),a.Pa(),vj(a,b.idToken),Jj(a,"refreshToken",a.na.ca))};S.prototype.Pa=function(){this.dispatchEvent(new uj("tokenChanged"))};var Lj=function(a,b){return Q(a.g,zh,{idToken:b}).then(t(a.Bf,a))};
S.prototype.Bf=function(a){a=a.users;if(!a||!a.length)throw new N("internal-error");a=a[0];wj(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber});for(var b=Nj(a),c=0;c<b.length;c++)Ij(this,b[c]);Jj(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length))};
var Nj=function(a){return(a=a.providerUserInfo)&&a.length?Qa(a,function(a){return new tj(a.rawId,a.providerId,a.email,a.displayName,a.photoUrl)}):[]};S.prototype.reauthenticateAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(a.pd(this.g,this.uid).then(function(a){Mj(b,a);c=Oj(b,a,"reauthenticate");b.oa=null;return b.reload()}).then(function(){return c}),!0)};S.prototype.reauthenticateWithCredential=function(a){return this.reauthenticateAndRetrieveDataWithCredential(a).then(function(){})};
var Pj=function(a,b){return Kj(a).then(function(){if(Ua(Gj(a),b))return Cj(a).then(function(){throw new N("provider-already-linked");})})};S.prototype.linkAndRetrieveDataWithCredential=function(a){var b=this,c=null;return this.c(Pj(this,a.providerId).then(function(){return b.getIdToken()}).then(function(c){return a.zc(b.g,c)}).then(function(a){c=Oj(b,a,"link");return Qj(b,a)}).then(function(){return c}))};S.prototype.linkWithCredential=function(a){return this.linkAndRetrieveDataWithCredential(a).then(function(a){return a.user})};
S.prototype.linkWithPhoneNumber=function(a,b){var c=this;return this.c(Pj(this,"phone").then(function(){return ti(yj(c),a,b,t(c.linkAndRetrieveDataWithCredential,c))}))};S.prototype.reauthenticateWithPhoneNumber=function(a,b){var c=this;return this.c(E().then(function(){return ti(yj(c),a,b,t(c.reauthenticateAndRetrieveDataWithCredential,c))}),!0)};var Oj=function(a,b,c){var d=Ig(b);b=Di(b);return Wf({user:a,credential:d,additionalUserInfo:b,operationType:c})},Qj=function(a,b){Mj(a,b);return a.reload().then(function(){return a})};
h=S.prototype;h.updateEmail=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updateEmail(c,a)}).then(function(a){Mj(b,a);return b.reload()}))};h.updatePhoneNumber=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return a.zc(b.g,c)}).then(function(a){Mj(b,a);return b.reload()}))};h.updatePassword=function(a){var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updatePassword(c,a)}).then(function(a){Mj(b,a);return b.reload()}))};
h.updateProfile=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Fj(this);var b=this;return this.c(this.getIdToken().then(function(c){return b.g.updateProfile(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(a){Mj(b,a);Jj(b,"displayName",a.displayName||null);Jj(b,"photoURL",a.photoUrl||null);y(b.providerData,function(a){"password"===a.providerId&&(M(a,"displayName",b.displayName),M(a,"photoURL",b.photoURL))});return Cj(b)}).then(Ej))};
h.unlink=function(a){var b=this;return this.c(Kj(this).then(function(c){return Ua(Gj(b),a)?nh(b.g,c,[a]).then(function(a){var c={};y(a.providerUserInfo||[],function(a){c[a.providerId]=!0});y(Gj(b),function(a){c[a]||Hj(b,a)});c[Fg.PROVIDER_ID]||M(b,"phoneNumber",null);return Cj(b)}):Cj(b).then(function(){throw new N("no-such-provider");})}))};
h["delete"]=function(){var a=this;return this.c(this.getIdToken().then(function(b){return Q(a.g,yh,{idToken:b})}).then(function(){a.dispatchEvent(new uj("userDeleted"))})).then(function(){for(var b=0;b<a.J.length;b++)a.J[b].cancel("app-deleted");a.J=[];a.Bb=!0;Aj(a);M(a,"refreshToken",null);a.s&&a.s.unsubscribe(a)})};
h.Pd=function(a,b){return"linkViaPopup"==a&&(this.ha||null)==b&&this.ga||"reauthViaPopup"==a&&(this.ha||null)==b&&this.ga||"linkViaRedirect"==a&&(this.Ba||null)==b||"reauthViaRedirect"==a&&(this.Ba||null)==b?!0:!1};h.Ya=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.ha||null)||(c&&this.Ra?this.Ra(c):b&&!c&&this.ga&&this.ga(b),this.K&&(this.K.cancel(),this.K=null),delete this.ga,delete this.Ra)};
h.Eb=function(a,b){return"linkViaPopup"==a&&b==(this.ha||null)?t(this.Xd,this):"reauthViaPopup"==a&&b==(this.ha||null)?t(this.Yd,this):"linkViaRedirect"==a&&(this.Ba||null)==b?t(this.Xd,this):"reauthViaRedirect"==a&&(this.Ba||null)==b?t(this.Yd,this):null};h.nc=function(){return Gf(this.uid+":::")};h.linkWithPopup=function(a){var b=this;return Rj(this,"linkViaPopup",a,function(){return Pj(b,a.providerId).then(function(){return Cj(b)})},!1)};
h.reauthenticateWithPopup=function(a){return Rj(this,"reauthViaPopup",a,function(){return E()},!0)};
var Rj=function(a,b,c,d,e){if(!Hf())return F(new N("operation-not-supported-in-this-environment"));if(a.oa&&!e)return F(a.oa);var f=cg(c.providerId),g=a.nc(),l=null;(!If()||Bf())&&a.B&&c.isOAuthProvider&&(l=Th(a.B,a.m,a.w,b,c,null,g,firebase.SDK_VERSION||null));var n=uf(l,f&&f.Sb,f&&f.Rb);d=d().then(function(){Sj(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){return a.s.Tb(n,b,c,g,!!l)}).then(function(){return new D(function(c,d){a.Ya(b,null,new N("cancelled-popup-request"),a.ha||
null);a.ga=c;a.Ra=d;a.ha=g;a.K=a.s.ac(a,b,n,g)})}).then(function(a){n&&tf(n);return a?Wf(a):null}).f(function(a){n&&tf(n);throw a;});return a.c(d,e)};S.prototype.linkWithRedirect=function(a){var b=this;return Tj(this,"linkViaRedirect",a,function(){return Pj(b,a.providerId)},!1)};S.prototype.reauthenticateWithRedirect=function(a){return Tj(this,"reauthViaRedirect",a,function(){return E()},!0)};
var Tj=function(a,b,c,d,e){if(!Hf())return F(new N("operation-not-supported-in-this-environment"));if(a.oa&&!e)return F(a.oa);var f=null,g=a.nc();d=d().then(function(){Sj(a);if(!e)return a.getIdToken().then(function(){})}).then(function(){a.Ba=g;return Cj(a)}).then(function(b){a.Va&&(b=a.Va,b=b.l.set(Uj,a.G(),b.v));return b}).then(function(){return a.s.Ub(b,c,g)}).f(function(b){f=b;if(a.Va)return Vj(a.Va);throw f;}).then(function(){if(f)throw f;});return a.c(d,e)},Sj=function(a){if(!a.s||!a.Ec){if(a.s&&
!a.Ec)throw new N("internal-error");throw new N("auth-domain-config-required");}};S.prototype.Xd=function(a,b){var c=this;this.K&&(this.K.cancel(),this.K=null);var d=null,e=this.getIdToken().then(function(d){return mg(c.g,{requestUri:a,sessionId:b,idToken:d})}).then(function(a){d=Oj(c,a,"link");return Qj(c,a)}).then(function(){return d});return this.c(e)};
S.prototype.Yd=function(a,b){var c=this;this.K&&(this.K.cancel(),this.K=null);var d=null,e=E().then(function(){return ig(ng(c.g,{requestUri:a,sessionId:b}),c.uid)}).then(function(a){d=Oj(c,a,"reauthenticate");Mj(c,a);c.oa=null;return c.reload()}).then(function(){return d});return this.c(e,!0)};S.prototype.sendEmailVerification=function(){var a=this;return this.c(this.getIdToken().then(function(b){return a.g.sendEmailVerification(b)}).then(function(b){if(a.email!=b)return a.reload()}).then(function(){}))};
S.prototype.c=function(a,b){var c=this,d=Wj(this,a,b);this.J.push(d);Cd(d,function(){Wa(c.J,d)});return d};var Wj=function(a,b,c){return a.oa&&!c?(b.cancel(),F(a.oa)):b.f(function(b){!b||"auth/user-disabled"!=b.code&&"auth/user-token-expired"!=b.code||(a.oa||a.dispatchEvent(new uj("userInvalidated")),a.oa=b);throw b;})};S.prototype.toJSON=function(){return this.G()};
S.prototype.G=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,providerData:[],apiKey:this.m,appName:this.w,authDomain:this.B,stsTokenManager:this.na.G(),redirectEventId:this.Ba||null};y(this.providerData,function(b){a.providerData.push(Xf(b))});return a};
var Xj=function(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken&&a.stsTokenManager.expirationTime)c.idToken=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null,c.expiresIn=(a.stsTokenManager.expirationTime-la())/1E3;else return null;var d=new S(b,c,a);a.providerData&&y(a.providerData,function(a){a&&Ij(d,Wf(a))});a.redirectEventId&&(d.Ba=a.redirectEventId);return d},
Yj=function(a,b,c){var d=new S(a,b);c&&(d.Va=c);return d.reload().then(function(){return d})};var Zj=function(a){this.v=a;this.l=Gi()},Uj={name:"redirectUser",V:!1},Vj=function(a){return a.l.remove(Uj,a.v)},ak=function(a,b){return a.l.get(Uj,a.v).then(function(a){a&&b&&(a.authDomain=b);return Xj(a||{})})};var bk=function(a){this.v=a;this.l=Gi()},ck={name:"authUser",V:!0},dk=function(a,b){return a.l.set(ck,b.G(),a.v)},ek=function(a){return a.l.remove(ck,a.v)},fk=function(a,b){return a.l.get(ck,a.v).then(function(a){a&&b&&(a.authDomain=b);return Xj(a||{})})};var T=function(a){this.Ha=!1;M(this,"app",a);if(this.h().options&&this.h().options.apiKey)a=firebase.SDK_VERSION?Ef(firebase.SDK_VERSION):null,this.g=new R(this.h().options&&this.h().options.apiKey,null,a);else throw new N("invalid-api-key");this.J=[];this.Ea=[];this.wb=[];this.xf=firebase.INTERNAL.createSubscribe(t(this.lf,this));this.hc=void 0;this.zf=firebase.INTERNAL.createSubscribe(t(this.nf,this));gk(this,null);a=this.h().options.apiKey;var b=this.h().name;this.xa=new bk(a+":"+b);a=this.h().options.apiKey;
b=this.h().name;this.rb=new Zj(a+":"+b);this.jc=this.c(hk(this));this.ua=this.c(ik(this));this.xc=!1;this.hd=t(this.Rf,this);this.Ce=t(this.jb,this);this.xb=t(this.kd,this);this.Ae=t(this.gf,this);this.Be=t(this.hf,this);jk(this);this.INTERNAL={};this.INTERNAL["delete"]=t(this["delete"],this);this.Ka=0};T.prototype.toJSON=function(){return{apiKey:this.h().options.apiKey,authDomain:this.h().options.authDomain,appName:this.h().name,currentUser:U(this)&&U(this).G()}};
var kk=function(a){return a.Ue||F(new N("auth-domain-config-required"))},jk=function(a){var b=a.h().options.authDomain,c=a.h().options.apiKey;b&&Hf()&&(a.Ue=a.jc.then(function(){if(!a.Ha)return a.s=kj(b,c,a.h().name),a.s.subscribe(a),U(a)&&Dj(U(a)),a.Yb&&(Dj(a.Yb),a.Yb=null),a.s}))};h=T.prototype;h.Pd=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.ha==b&&!!this.ga;default:return!1}};
h.Ya=function(a,b,c,d){"signInViaPopup"==a&&this.ha==d&&(c&&this.Ra?this.Ra(c):b&&!c&&this.ga&&this.ga(b),this.K&&(this.K.cancel(),this.K=null),delete this.ga,delete this.Ra)};h.Eb=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.ha==b&&this.ga?t(this.We,this):null};
h.We=function(a,b){var c=this;a={requestUri:a,sessionId:b};this.K&&(this.K.cancel(),this.K=null);var d=null,e=null,f=kg(c.g,a).then(function(a){d=Ig(a);e=Di(a);return a});a=c.jc.then(function(){return f}).then(function(a){return lk(c,a)}).then(function(){return Wf({user:U(c),credential:d,additionalUserInfo:e,operationType:"signIn"})});return this.c(a)};h.nc=function(){return Gf()};
h.signInWithPopup=function(a){if(!Hf())return F(new N("operation-not-supported-in-this-environment"));var b=this,c=cg(a.providerId),d=this.nc(),e=null;(!If()||Bf())&&this.h().options.authDomain&&a.isOAuthProvider&&(e=Th(this.h().options.authDomain,this.h().options.apiKey,this.h().name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null));var f=uf(e,c&&c.Sb,c&&c.Rb),c=kk(this).then(function(b){return b.Tb(f,"signInViaPopup",a,d,!!e)}).then(function(){return new D(function(a,c){b.Ya("signInViaPopup",
null,new N("cancelled-popup-request"),b.ha);b.ga=a;b.Ra=c;b.ha=d;b.K=b.s.ac(b,"signInViaPopup",f,d)})}).then(function(a){f&&tf(f);return a?Wf(a):null}).f(function(a){f&&tf(f);throw a;});return this.c(c)};h.signInWithRedirect=function(a){if(!Hf())return F(new N("operation-not-supported-in-this-environment"));var b=this,c=kk(this).then(function(){return b.s.Ub("signInViaRedirect",a)});return this.c(c)};
h.getRedirectResult=function(){if(!Hf())return F(new N("operation-not-supported-in-this-environment"));var a=this,b=kk(this).then(function(){return a.s.getRedirectResult()}).then(function(a){return a?Wf(a):null});return this.c(b)};
var lk=function(a,b){var c={};c.apiKey=a.h().options.apiKey;c.authDomain=a.h().options.authDomain;c.appName=a.h().name;return a.jc.then(function(){return Yj(c,b,a.rb)}).then(function(b){if(U(a)&&b.uid==U(a).uid)return U(a).copy(b),a.jb(b);gk(a,b);Dj(b);return a.jb(b)}).then(function(){a.Pa()})},gk=function(a,b){U(a)&&(Bj(U(a),a.Ce),rc(U(a),"tokenChanged",a.xb),rc(U(a),"userDeleted",a.Ae),rc(U(a),"userInvalidated",a.Be),Aj(U(a)));b&&(b.Kc.push(a.Ce),jc(b,"tokenChanged",a.xb),jc(b,"userDeleted",a.Ae),
jc(b,"userInvalidated",a.Be),0<a.Ka&&zj(b));M(a,"currentUser",b)};T.prototype.signOut=function(){var a=this,b=this.ua.then(function(){if(!U(a))return E();gk(a,null);return ek(a.xa).then(function(){a.Pa()})});return this.c(b)};
var mk=function(a){var b=a.h().options.authDomain,b=ak(a.rb,b).then(function(b){if(a.Yb=b)b.Va=a.rb;return Vj(a.rb)});return a.c(b)},hk=function(a){var b=a.h().options.authDomain,c=mk(a).then(function(){return fk(a.xa,b)}).then(function(b){return b?(b.Va=a.rb,a.Yb&&(a.Yb.Ba||null)==(b.Ba||null)?b:b.reload().then(function(){return dk(a.xa,b).then(function(){return b})}).f(function(c){return"auth/network-request-failed"==c.code?b:ek(a.xa)})):null}).then(function(b){gk(a,b||null)});return a.c(c)},ik=
function(a){return a.jc.then(function(){return a.getRedirectResult()}).f(function(){}).then(function(){if(!a.Ha)return a.hd()}).f(function(){}).then(function(){if(!a.Ha){a.xc=!0;var b=a.xa;b.l.addListener(ck,b.v,a.hd)}})};h=T.prototype;
h.Rf=function(){var a=this,b=this.h().options.authDomain;return fk(this.xa,b).then(function(b){if(!a.Ha){var c;if(c=U(a)&&b){c=U(a).uid;var e=b.uid;c=void 0===c||null===c||""===c||void 0===e||null===e||""===e?!1:c==e}if(c)return U(a).copy(b),U(a).getIdToken();if(U(a)||b)gk(a,b),b&&(Dj(b),b.Va=a.rb),a.s&&a.s.subscribe(a),a.Pa()}})};h.jb=function(a){return dk(this.xa,a)};h.kd=function(){this.Pa();this.jb(U(this))};h.gf=function(){this.signOut()};h.hf=function(){this.signOut()};
var nk=function(a,b){var c=null,d=null;return a.c(b.then(function(b){c=Ig(b);d=Di(b);return lk(a,b)}).then(function(){return Wf({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))};h=T.prototype;h.lf=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};h.nf=function(a){var b=this;ok(this,function(){a.next(U(b))})};
h.onIdTokenChanged=function(a,b,c){var d=this;this.xc&&firebase.Promise.resolve().then(function(){q(a)?a(U(d)):q(a.next)&&a.next(U(d))});return this.xf(a,b,c)};h.onAuthStateChanged=function(a,b,c){var d=this;this.xc&&firebase.Promise.resolve().then(function(){d.hc=d.getUid();q(a)?a(U(d)):q(a.next)&&a.next(U(d))});return this.zf(a,b,c)};h.bf=function(a){var b=this,c=this.ua.then(function(){return U(b)?U(b).getIdToken(a).then(function(a){return{accessToken:a}}):null});return this.c(c)};
h.signInWithCustomToken=function(a){var b=this;return this.ua.then(function(){return nk(b,Q(b.g,Bh,{token:a}))}).then(function(a){a=a.user;Jj(a,"isAnonymous",!1);return b.jb(a)}).then(function(){return U(b)})};h.signInWithEmailAndPassword=function(a,b){var c=this;return this.ua.then(function(){return nk(c,Q(c.g,yg,{email:a,password:b}))}).then(function(a){return a.user})};h.createUserWithEmailAndPassword=function(a,b){var c=this;return this.ua.then(function(){return nk(c,Q(c.g,xh,{email:a,password:b}))}).then(function(a){return a.user})};
h.signInWithCredential=function(a){return this.signInAndRetrieveDataWithCredential(a).then(function(a){return a.user})};h.signInAndRetrieveDataWithCredential=function(a){var b=this;return this.ua.then(function(){return nk(b,a.Fb(b.g))})};h.signInAnonymously=function(){var a=this;return this.ua.then(function(){var b=U(a);return b&&b.isAnonymous?b:nk(a,a.g.signInAnonymously()).then(function(b){b=b.user;Jj(b,"isAnonymous",!0);return a.jb(b)}).then(function(){return U(a)})})};h.h=function(){return this.app};
var U=function(a){return a.currentUser};T.prototype.getUid=function(){return U(this)&&U(this).uid||null};var pk=function(a){return U(a)&&U(a)._lat||null};h=T.prototype;h.Pa=function(){if(this.xc){for(var a=0;a<this.Ea.length;a++)if(this.Ea[a])this.Ea[a](pk(this));if(this.hc!==this.getUid()&&this.wb.length)for(this.hc=this.getUid(),a=0;a<this.wb.length;a++)if(this.wb[a])this.wb[a](pk(this))}};h.Le=function(a){this.addAuthTokenListener(a);this.Ka++;0<this.Ka&&U(this)&&zj(U(this))};
h.Ff=function(a){var b=this;y(this.Ea,function(c){c==a&&b.Ka--});0>this.Ka&&(this.Ka=0);0==this.Ka&&U(this)&&Aj(U(this));this.removeAuthTokenListener(a)};h.addAuthTokenListener=function(a){var b=this;this.Ea.push(a);this.c(this.ua.then(function(){b.Ha||Ua(b.Ea,a)&&a(pk(b))}))};h.removeAuthTokenListener=function(a){Xa(this.Ea,function(b){return b==a})};var ok=function(a,b){a.wb.push(b);a.c(a.ua.then(function(){!a.Ha&&Ua(a.wb,b)&&a.hc!==a.getUid()&&(a.hc=a.getUid(),b(pk(a)))}))};h=T.prototype;
h["delete"]=function(){this.Ha=!0;for(var a=0;a<this.J.length;a++)this.J[a].cancel("app-deleted");this.J=[];this.xa&&(a=this.xa,a.l.removeListener(ck,a.v,this.hd));this.s&&this.s.unsubscribe(this);return firebase.Promise.resolve()};h.c=function(a){var b=this;this.J.push(a);Cd(a,function(){Wa(b.J,a)});return a};h.fetchProvidersForEmail=function(a){return this.c(bh(this.g,a))};h.verifyPasswordResetCode=function(a){return this.checkActionCode(a).then(function(a){return a.data.email})};
h.confirmPasswordReset=function(a,b){return this.c(this.g.confirmPasswordReset(a,b).then(function(){}))};h.checkActionCode=function(a){return this.c(this.g.checkActionCode(a).then(function(a){return new ui(a)}))};h.applyActionCode=function(a){return this.c(this.g.applyActionCode(a).then(function(){}))};h.sendPasswordResetEmail=function(a){return this.c(this.g.sendPasswordResetEmail(a).then(function(){}))};
h.signInWithPhoneNumber=function(a,b){return this.c(ti(this,a,b,t(this.signInAndRetrieveDataWithCredential,this)))};var qk="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),V=function(a,b){return{name:a||"",O:"a valid string",optional:!!b,P:p}},rk=function(){return{name:"opt_forceRefresh",O:"a boolean",optional:!0,P:ba}},W=function(a,b){return{name:a||"",O:"a valid object",optional:!!b,P:r}},sk=function(a,b){return{name:a||"",O:"a function",optional:!!b,P:q}},tk=function(){return{name:"",O:"null",optional:!1,P:fa}},uk=function(){return{name:"",O:"an HTML element",optional:!1,P:function(a){return!!(a&&
a instanceof Element)}}},vk=function(){return{name:"auth",O:"an instance of Firebase Auth",optional:!0,P:function(a){return!!(a&&a instanceof T)}}},wk=function(){return{name:"app",O:"an instance of Firebase App",optional:!0,P:function(a){return!!(a&&a instanceof firebase.app.App)}}},xk=function(a){return{name:a?a+"Credential":"credential",O:a?"a valid "+a+" credential":"a valid credential",optional:!1,P:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.Fb||!c)}}},yk=function(){return{name:"authProvider",
O:"a valid Auth provider",optional:!1,P:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}},zk=function(){return{name:"applicationVerifier",O:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,P:function(a){return!!(a&&p(a.type)&&q(a.verify))}}},X=function(a,b,c,d){return{name:c||"",O:a.O+" or "+b.O,optional:!!d,P:function(c){return a.P(c)||b.P(c)}}};var Y=function(a,b){for(var c in b){var d=b[c].name;a[d]=Ak(d,a[c],b[c].a)}},Z=function(a,b,c,d){a[b]=Ak(b,c,d)},Ak=function(a,b,c){if(!c)return b;var d=Bk(a);a=function(){var a=Array.prototype.slice.call(arguments);a:{var e=Array.prototype.slice.call(a);var l=0;for(var n=!1,C=0;C<c.length;C++)if(c[C].optional)n=!0;else{if(n)throw new N("internal-error","Argument validator encountered a required argument after an optional argument.");l++}n=c.length;if(e.length<l||n<e.length)e="Expected "+(l==n?1==
l?"1 argument":l+" arguments":l+"-"+n+" arguments")+" but got "+e.length+".";else{for(l=0;l<e.length;l++)if(n=c[l].optional&&void 0===e[l],!c[l].P(e[l])&&!n){e=c[l];if(0>l||l>=qk.length)throw new N("internal-error","Argument validator received an unsupported number of arguments.");e=qk[l]+" argument "+(e.name?'"'+e.name+'" ':"")+"must be "+e.O+".";break a}e=null}}if(e)throw new N("argument-error",d+" failed: "+e);return b.apply(this,a)};for(var e in b)a[e]=b[e];for(e in b.prototype)a.prototype[e]=
b.prototype[e];return a},Bk=function(a){a=a.split(".");return a[a.length-1]};Y(T.prototype,{applyActionCode:{name:"applyActionCode",a:[V("code")]},checkActionCode:{name:"checkActionCode",a:[V("code")]},confirmPasswordReset:{name:"confirmPasswordReset",a:[V("code"),V("newPassword")]},createUserWithEmailAndPassword:{name:"createUserWithEmailAndPassword",a:[V("email"),V("password")]},fetchProvidersForEmail:{name:"fetchProvidersForEmail",a:[V("email")]},getRedirectResult:{name:"getRedirectResult",a:[]},onAuthStateChanged:{name:"onAuthStateChanged",a:[X(W(),sk(),"nextOrObserver"),
sk("opt_error",!0),sk("opt_completed",!0)]},onIdTokenChanged:{name:"onIdTokenChanged",a:[X(W(),sk(),"nextOrObserver"),sk("opt_error",!0),sk("opt_completed",!0)]},sendPasswordResetEmail:{name:"sendPasswordResetEmail",a:[V("email")]},signInAndRetrieveDataWithCredential:{name:"signInAndRetrieveDataWithCredential",a:[xk()]},signInAnonymously:{name:"signInAnonymously",a:[]},signInWithCredential:{name:"signInWithCredential",a:[xk()]},signInWithCustomToken:{name:"signInWithCustomToken",a:[V("token")]},signInWithEmailAndPassword:{name:"signInWithEmailAndPassword",
a:[V("email"),V("password")]},signInWithPhoneNumber:{name:"signInWithPhoneNumber",a:[V("phoneNumber"),zk()]},signInWithPopup:{name:"signInWithPopup",a:[yk()]},signInWithRedirect:{name:"signInWithRedirect",a:[yk()]},signOut:{name:"signOut",a:[]},toJSON:{name:"toJSON",a:[V(null,!0)]},verifyPasswordResetCode:{name:"verifyPasswordResetCode",a:[V("code")]}});
Y(S.prototype,{"delete":{name:"delete",a:[]},getIdToken:{name:"getIdToken",a:[rk()]},getToken:{name:"getToken",a:[rk()]},linkAndRetrieveDataWithCredential:{name:"linkAndRetrieveDataWithCredential",a:[xk()]},linkWithCredential:{name:"linkWithCredential",a:[xk()]},linkWithPhoneNumber:{name:"linkWithPhoneNumber",a:[V("phoneNumber"),zk()]},linkWithPopup:{name:"linkWithPopup",a:[yk()]},linkWithRedirect:{name:"linkWithRedirect",a:[yk()]},reauthenticateAndRetrieveDataWithCredential:{name:"reauthenticateAndRetrieveDataWithCredential",
a:[xk()]},reauthenticateWithCredential:{name:"reauthenticateWithCredential",a:[xk()]},reauthenticateWithPhoneNumber:{name:"reauthenticateWithPhoneNumber",a:[V("phoneNumber"),zk()]},reauthenticateWithPopup:{name:"reauthenticateWithPopup",a:[yk()]},reauthenticateWithRedirect:{name:"reauthenticateWithRedirect",a:[yk()]},reload:{name:"reload",a:[]},sendEmailVerification:{name:"sendEmailVerification",a:[]},toJSON:{name:"toJSON",a:[V(null,!0)]},unlink:{name:"unlink",a:[V("provider")]},updateEmail:{name:"updateEmail",
a:[V("email")]},updatePassword:{name:"updatePassword",a:[V("password")]},updatePhoneNumber:{name:"updatePhoneNumber",a:[xk("phone")]},updateProfile:{name:"updateProfile",a:[W("profile")]}});Y(D.prototype,{f:{name:"catch"},then:{name:"then"}});Y(si.prototype,{confirm:{name:"confirm",a:[V("verificationCode")]}});Z(Ag,"credential",function(a,b){return new xg(a,b)},[V("email"),V("password")]);Y(pg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});
Z(pg,"credential",qg,[X(V(),W(),"token")]);Y(rg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(rg,"credential",sg,[X(V(),W(),"token")]);Y(tg.prototype,{addScope:{name:"addScope",a:[V("scope")]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(tg,"credential",ug,[X(V(),X(W(),tk()),"idToken"),X(V(),tk(),"accessToken",!0)]);
Y(vg.prototype,{setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(vg,"credential",wg,[X(V(),W(),"token"),V("secret",!0)]);Y(P.prototype,{addScope:{name:"addScope",a:[V("scope")]},credential:{name:"credential",a:[X(V(),tk(),"idToken",!0),X(V(),tk(),"accessToken",!0)]},setCustomParameters:{name:"setCustomParameters",a:[W("customOAuthParameters")]}});Z(Fg,"credential",Hg,[V("verificationId"),V("verificationCode")]);
Y(Fg.prototype,{verifyPhoneNumber:{name:"verifyPhoneNumber",a:[V("phoneNumber"),zk()]}});Y(N.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(Kg.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(gg.prototype,{toJSON:{name:"toJSON",a:[V(null,!0)]}});Y(Uh.prototype,{clear:{name:"clear",a:[]},render:{name:"render",a:[]},verify:{name:"verify",a:[]}});
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerService){var a={Auth:T,Error:N};Z(a,"EmailAuthProvider",Ag,[]);Z(a,"FacebookAuthProvider",pg,[]);Z(a,"GithubAuthProvider",rg,[]);Z(a,"GoogleAuthProvider",tg,[]);Z(a,"TwitterAuthProvider",vg,[]);Z(a,"OAuthProvider",P,[V("providerId")]);Z(a,"PhoneAuthProvider",Fg,[vk()]);Z(a,"RecaptchaVerifier",Uh,[X(V(),uk(),"recaptchaContainer"),W("recaptchaParameters",!0),wk()]);firebase.INTERNAL.registerService("auth",function(a,
c){a=new T(a);c({INTERNAL:{getUid:t(a.getUid,a),getToken:t(a.bf,a),addAuthTokenListener:t(a.Le,a),removeAuthTokenListener:t(a.Ff,a)}});return a},a,function(a,c){if("create"===a)try{c.auth()}catch(d){}});firebase.INTERNAL.extendNamespace({User:S})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).call(this);

(function() {var g,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Vb=function(){return a.Ye?a.Ye:a.Ye=new a}}
function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return q.apply(null,arguments)}
function la(a,b){function c(){}c.prototype=b.prototype;a.wg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.sg=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};function ma(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function na(){this.Fd=void 0}
function oa(a,b,c){switch(typeof b){case "string":pa(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(ea(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],oa(a,a.Fd?a.Fd.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),pa(f,c),
c.push(":"),oa(a,a.Fd?a.Fd.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var qa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ra=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function pa(a,b){b.push('"',a.replace(ra,function(a){if(a in qa)return qa[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return qa[a]=e+b.toString(16)}),'"')};function sa(){this.Wa=-1};function ta(){this.Wa=-1;this.Wa=64;this.M=[];this.Wd=[];this.Af=[];this.zd=[];this.zd[0]=128;for(var a=1;a<this.Wa;++a)this.zd[a]=0;this.Pd=this.$b=0;this.reset()}la(ta,sa);ta.prototype.reset=function(){this.M[0]=1732584193;this.M[1]=4023233417;this.M[2]=2562383102;this.M[3]=271733878;this.M[4]=3285377520;this.Pd=this.$b=0};
function ua(a,b,c){c||(c=0);var d=a.Af;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.M[0];c=a.M[1];for(var h=a.M[2],k=a.M[3],m=a.M[4],l,e=0;80>e;e++)40>e?20>e?(f=k^c&(h^k),l=1518500249):(f=c^h^k,l=1859775393):60>e?(f=c&h|k&(c|h),l=2400959708):(f=c^h^k,l=3395469782),f=(b<<
5|b>>>27)+f+m+l+d[e]&4294967295,m=k,k=h,h=(c<<30|c>>>2)&4294967295,c=b,b=f;a.M[0]=a.M[0]+b&4294967295;a.M[1]=a.M[1]+c&4294967295;a.M[2]=a.M[2]+h&4294967295;a.M[3]=a.M[3]+k&4294967295;a.M[4]=a.M[4]+m&4294967295}
ta.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.Wa,d=0,e=this.Wd,f=this.$b;d<b;){if(0==f)for(;d<=c;)ua(this,a,d),d+=this.Wa;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){ua(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.Wa){ua(this,e);f=0;break}}this.$b=f;this.Pd+=b}};var r;a:{var va=aa.navigator;if(va){var wa=va.userAgent;if(wa){r=wa;break a}}r=""};var t=Array.prototype,xa=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ya=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},za=t.filter?function(a,b,c){return t.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=p(a)?
a.split(""):a,k=0;k<d;k++)if(k in h){var m=h[k];b.call(c,m,k,a)&&(e[f++]=m)}return e},Aa=t.map?function(a,b,c){return t.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e},Ba=t.reduce?function(a,b,c,d){for(var e=[],f=1,h=arguments.length;f<h;f++)e.push(arguments[f]);d&&(e[0]=q(b,d));return t.reduce.apply(a,e)}:function(a,b,c,d){var e=c;ya(a,function(c,h){e=b.call(d,e,c,h,a)});return e},Ca=t.every?function(a,b,
c){return t.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function Da(a,b){var c=Ea(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function Ea(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function Fa(a,b){var c=xa(a,b);0<=c&&t.splice.call(a,c,1)}function Ga(a,b,c){return 2>=arguments.length?t.slice.call(a,b):t.slice.call(a,b,c)}
function Ha(a,b){a.sort(b||Ia)}function Ia(a,b){return a>b?1:a<b?-1:0};function v(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ja(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function Ka(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function La(a){var b=0,c;for(c in a)b++;return b}function Ma(a){for(var b in a)return b}function Na(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Oa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function Pa(a,b){for(var c in a)if(a[c]==b)return!0;return!1}
function Qa(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function Ra(a,b){var c=Qa(a,b,void 0);return c&&a[c]}function Sa(a){for(var b in a)return!1;return!0}function Ta(a){var b={},c;for(c in a)b[c]=a[c];return b};var Ua=-1!=r.indexOf("Opera")||-1!=r.indexOf("OPR"),Va=-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE"),Wa=-1!=r.indexOf("Gecko")&&-1==r.toLowerCase().indexOf("webkit")&&!(-1!=r.indexOf("Trident")||-1!=r.indexOf("MSIE")),Xa=-1!=r.toLowerCase().indexOf("webkit");
(function(){var a="",b;if(Ua&&aa.opera)return a=aa.opera.version,ha(a)?a():a;Wa?b=/rv\:([^\);]+)(\)|;)/:Va?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:Xa&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(r))?a[1]:"");return Va&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var Ya=null,Za=null,$a=null;function ab(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter");bb();for(var c=b?Za:Ya,d=[],e=0;e<a.length;e+=3){var f=a[e],h=e+1<a.length,k=h?a[e+1]:0,m=e+2<a.length,l=m?a[e+2]:0,u=f>>2,f=(f&3)<<4|k>>4,k=(k&15)<<2|l>>6,l=l&63;m||(l=64,h||(k=64));d.push(c[u],c[f],c[k],c[l])}return d.join("")}
function bb(){if(!Ya){Ya={};Za={};$a={};for(var a=0;65>a;a++)Ya[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Za[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),$a[Za[a]]=a,62<=a&&($a["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}};function cb(a,b){if(!a)throw db(b);}function db(a){return Error("Firebase Database ("+firebase.SDK_VERSION+") INTERNAL ASSERT FAILED: "+a)};function eb(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function fb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])};function gb(a){var b=[];fb(a,function(a,d){ea(d)?ya(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""};var hb=firebase.Promise;function ib(){var a=this;this.reject=this.resolve=null;this.ra=new hb(function(b,c){a.resolve=b;a.reject=c})}function jb(a,b){return function(c,d){c?a.reject(c):a.resolve(d);ha(b)&&(kb(a.ra),1===b.length?b(c):b(c,d))}}function kb(a){a.then(void 0,ba)};function lb(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):ma(a)}function x(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];oa(new na,a,b);a=b.join("")}return a};function mb(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e-=55296,d++,cb(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}function nb(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};function y(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function A(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
function B(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(A(a,b,d)+"must be a valid function.");}function ob(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(A(a,b,!0)+"must be a valid context object.");};function pb(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!==typeof navigator&&"string"===typeof navigator.userAgent?navigator.userAgent:"")};function C(a,b){this.name=a;this.R=b}function qb(a,b){return new C(a,b)};function rb(a,b){return sb(a.name,b.name)}function tb(a,b){return sb(a,b)};function ub(a){this.uc=a;this.Cd="firebase:"}g=ub.prototype;g.set=function(a,b){null==b?this.uc.removeItem(this.Cd+a):this.uc.setItem(this.Cd+a,x(b))};g.get=function(a){a=this.uc.getItem(this.Cd+a);return null==a?null:lb(a)};g.remove=function(a){this.uc.removeItem(this.Cd+a)};g.Ze=!1;g.toString=function(){return this.uc.toString()};function vb(){this.pc={}}vb.prototype.set=function(a,b){null==b?delete this.pc[a]:this.pc[a]=b};vb.prototype.get=function(a){return eb(this.pc,a)?this.pc[a]:null};vb.prototype.remove=function(a){delete this.pc[a]};vb.prototype.Ze=!0;function wb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("firebase:sentinel","cache");b.removeItem("firebase:sentinel");return new ub(b)}}catch(c){}return new vb}var xb=wb("localStorage"),yb=wb("sessionStorage");function zb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.Sc=b;this.pe=c;this.qg=d;this.gf=e||"";this.$a=xb.get("host:"+a)||this.host}function Ab(a,b){b!==a.$a&&(a.$a=b,"s-"===a.$a.substr(0,2)&&xb.set("host:"+a.host,a.$a))}
function Bb(a,b,c){D("string"===typeof b,"typeof type must == string");D("object"===typeof c,"typeof params must == object");if(b===Cb)b=(a.Sc?"wss://":"ws://")+a.$a+"/.ws?";else if(b===Db)b=(a.Sc?"https://":"http://")+a.$a+"/.lp?";else throw Error("Unknown connection type: "+b);a.host!==a.$a&&(c.ns=a.pe);var d=[];v(c,function(a,b){d.push(b+"="+a)});return b+d.join("&")}zb.prototype.toString=function(){var a=(this.Sc?"https://":"http://")+this.host;this.gf&&(a+="<"+this.gf+">");return a};function Eb(a,b){return a&&"object"===typeof a?(D(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Fb(a,b){var c=new Gb;Hb(a,new E(""),function(a,e){Ib(c,a,Jb(e,b))});return c}function Jb(a,b){var c=a.C().H(),c=Eb(c,b),d;if(a.J()){var e=Eb(a.Ca(),b);return e!==a.Ca()||c!==a.C().H()?new Kb(e,G(c)):a}d=a;c!==a.C().H()&&(d=d.fa(new Kb(c)));a.O(H,function(a,c){var e=Jb(c,b);e!==c&&(d=d.T(a,e))});return d};var Lb=function(){var a=1;return function(){return a++}}(),D=cb,Mb=db;
function Nb(a){try{var b;bb();for(var c=$a,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],h=e<a.length?c[a.charAt(e)]:0;++e;var k=e<a.length?c[a.charAt(e)]:64;++e;var m=e<a.length?c[a.charAt(e)]:64;++e;if(null==f||null==h||null==k||null==m)throw Error();d.push(f<<2|h>>4);64!=k&&(d.push(h<<4&240|k>>2),64!=m&&d.push(k<<6&192|m))}if(8192>d.length)b=String.fromCharCode.apply(null,d);else{a="";for(c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Ga(d,c,c+8192));b=a}return b}catch(l){I("base64Decode failed: ",
l)}return null}function Ob(a){var b=mb(a);a=new ta;a.update(b);var b=[],c=8*a.Pd;56>a.$b?a.update(a.zd,56-a.$b):a.update(a.zd,a.Wa-(a.$b-56));for(var d=a.Wa-1;56<=d;d--)a.Wd[d]=c&255,c/=256;ua(a,a.Wd);for(d=c=0;5>d;d++)for(var e=24;0<=e;e-=8)b[c]=a.M[d]>>e&255,++c;return ab(b)}function Pb(a){for(var b="",c=0;c<arguments.length;c++)b=fa(arguments[c])?b+Pb.apply(null,arguments[c]):"object"===typeof arguments[c]?b+x(arguments[c]):b+arguments[c],b+=" ";return b}var Qb=null,Rb=!0;
function Sb(a,b){cb(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?Qb=q(console.log,console):"object"===typeof console.log&&(Qb=function(a){console.log(a)})),b&&yb.set("logging_enabled",!0)):ha(a)?Qb=a:(Qb=null,yb.remove("logging_enabled"))}function I(a){!0===Rb&&(Rb=!1,null===Qb&&!0===yb.get("logging_enabled")&&Sb(!0));if(Qb){var b=Pb.apply(null,arguments);Qb(b)}}
function Tb(a){return function(){I(a,arguments)}}function Ub(a){if("undefined"!==typeof console){var b="FIREBASE INTERNAL ERROR: "+Pb.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function Vb(a){var b=Pb.apply(null,arguments);throw Error("FIREBASE FATAL ERROR: "+b);}function J(a){if("undefined"!==typeof console){var b="FIREBASE WARNING: "+Pb.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
function Wb(a){var b,c,d,e,f,h=a;f=c=a=b="";d=!0;e="https";if(p(h)){var k=h.indexOf("//");0<=k&&(e=h.substring(0,k-1),h=h.substring(k+2));k=h.indexOf("/");-1===k&&(k=h.length);b=h.substring(0,k);f="";h=h.substring(k).split("/");for(k=0;k<h.length;k++)if(0<h[k].length){var m=h[k];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(l){}f+="/"+m}h=b.split(".");3===h.length?(a=h[1],c=h[0].toLowerCase()):2===h.length&&(a=h[0]);k=b.indexOf(":");0<=k&&(d="https"===e||"wss"===e)}"firebase"===a&&Vb(b+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead");
c&&"undefined"!=c||Vb("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com");d||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&J("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");return{jc:new zb(b,d,c,"ws"===e||"wss"===e),path:new E(f)}}function Xb(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}
function Yb(a){if("complete"===document.readyState)a();else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}
function sb(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=Zb(a),d=Zb(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}function $b(a,b){if(b&&a in b)return b[a];throw Error("Missing required key ("+a+") in object: "+x(b));}
function ac(a){if("object"!==typeof a||null===a)return x(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=x(b[d]),c+=":",c+=ac(a[b[d]]);return c+"}"}function bc(a,b){if(a.length<=b)return[a];for(var c=[],d=0;d<a.length;d+=b)d+b>a?c.push(a.substring(d,a.length)):c.push(a.substring(d,d+b));return c}function cc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else v(a,b)}
function dc(a){D(!Xb(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
(d="0"+d),c+=d;return c.toLowerCase()}var ec=/^-?\d{1,10}$/;function Zb(a){return ec.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function fc(a){try{a()}catch(b){setTimeout(function(){J("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function gc(a,b,c){Object.defineProperty(a,b,{get:c})}function hc(a,b){var c=setTimeout(a,b);"object"===typeof c&&c.unref&&c.unref();return c};function ic(a){var b={},c={},d={},e="";try{var f=a.split("."),b=lb(Nb(f[0])||""),c=lb(Nb(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(h){}return{tg:b,Je:c,data:d,mg:e}}function jc(a){a=ic(a);var b=a.Je;return!!a.mg&&!!b&&"object"===typeof b&&b.hasOwnProperty("iat")}function kc(a){a=ic(a).Je;return"object"===typeof a&&!0===w(a,"admin")};function lc(){}var mc={};function nc(a){return q(a.compare,a)}lc.prototype.nd=function(a,b){return 0!==this.compare(new C("[MIN_NAME]",a),new C("[MIN_NAME]",b))};lc.prototype.Hc=function(){return oc};function pc(a){D(!a.e()&&".priority"!==K(a),"Can't create PathIndex with empty path or .priority key");this.bc=a}la(pc,lc);g=pc.prototype;g.xc=function(a){return!a.P(this.bc).e()};g.compare=function(a,b){var c=a.R.P(this.bc),d=b.R.P(this.bc),c=c.sc(d);return 0===c?sb(a.name,b.name):c};
g.Ec=function(a,b){var c=G(a),c=L.F(this.bc,c);return new C(b,c)};g.Fc=function(){var a=L.F(this.bc,qc);return new C("[MAX_NAME]",a)};g.toString=function(){return this.bc.slice().join("/")};function rc(){}la(rc,lc);g=rc.prototype;g.compare=function(a,b){var c=a.R.C(),d=b.R.C(),c=c.sc(d);return 0===c?sb(a.name,b.name):c};g.xc=function(a){return!a.C().e()};g.nd=function(a,b){return!a.C().Z(b.C())};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",new Kb("[PRIORITY-POST]",qc))};
g.Ec=function(a,b){var c=G(a);return new C(b,new Kb("[PRIORITY-POST]",c))};g.toString=function(){return".priority"};var H=new rc;function sc(){}la(sc,lc);g=sc.prototype;g.compare=function(a,b){return sb(a.name,b.name)};g.xc=function(){throw Mb("KeyIndex.isDefinedOn not expected to be called.");};g.nd=function(){return!1};g.Hc=function(){return oc};g.Fc=function(){return new C("[MAX_NAME]",L)};g.Ec=function(a){D(p(a),"KeyIndex indexValue must always be a string.");return new C(a,L)};g.toString=function(){return".key"};
var tc=new sc;function uc(){}la(uc,lc);g=uc.prototype;g.compare=function(a,b){var c=a.R.sc(b.R);return 0===c?sb(a.name,b.name):c};g.xc=function(){return!0};g.nd=function(a,b){return!a.Z(b)};g.Hc=function(){return oc};g.Fc=function(){return vc};g.Ec=function(a,b){var c=G(a);return new C(b,c)};g.toString=function(){return".value"};var wc=new uc;function xc(a,b){this.od=a;this.cc=b}xc.prototype.get=function(a){var b=w(this.od,a);if(!b)throw Error("No index defined for "+a);return b===mc?null:b};function yc(a,b,c){var d=Ja(a.od,function(d,f){var h=w(a.cc,f);D(h,"Missing index implementation for "+f);if(d===mc){if(h.xc(b.R)){for(var k=[],m=c.Wb(qb),l=M(m);l;)l.name!=b.name&&k.push(l),l=M(m);k.push(b);return zc(k,nc(h))}return mc}h=c.get(b.name);k=d;h&&(k=k.remove(new C(b.name,h)));return k.Oa(b,b.R)});return new xc(d,a.cc)}
function Ac(a,b,c){var d=Ja(a.od,function(a){if(a===mc)return a;var d=c.get(b.name);return d?a.remove(new C(b.name,d)):a});return new xc(d,a.cc)}var Bc=new xc({".priority":mc},{".priority":H});function Kb(a,b){this.B=a;D(n(this.B)&&null!==this.B,"LeafNode shouldn't be created with null/undefined value.");this.aa=b||L;Cc(this.aa);this.Db=null}var Dc=["object","boolean","number","string"];g=Kb.prototype;g.J=function(){return!0};g.C=function(){return this.aa};g.fa=function(a){return new Kb(this.B,a)};g.Q=function(a){return".priority"===a?this.aa:L};g.P=function(a){return a.e()?this:".priority"===K(a)?this.aa:L};g.Da=function(){return!1};g.Ve=function(){return null};
g.T=function(a,b){return".priority"===a?this.fa(b):b.e()&&".priority"!==a?this:L.T(a,b).fa(this.aa)};g.F=function(a,b){var c=K(a);if(null===c)return b;if(b.e()&&".priority"!==c)return this;D(".priority"!==c||1===Ec(a),".priority must be the last token in a path");return this.T(c,L.F(N(a),b))};g.e=function(){return!1};g.Eb=function(){return 0};g.O=function(){return!1};g.H=function(a){return a&&!this.C().e()?{".value":this.Ca(),".priority":this.C().H()}:this.Ca()};
g.hash=function(){if(null===this.Db){var a="";this.aa.e()||(a+="priority:"+Fc(this.aa.H())+":");var b=typeof this.B,a=a+(b+":"),a="number"===b?a+dc(this.B):a+this.B;this.Db=Ob(a)}return this.Db};g.Ca=function(){return this.B};g.sc=function(a){if(a===L)return 1;if(a instanceof O)return-1;D(a.J(),"Unknown node type");var b=typeof a.B,c=typeof this.B,d=xa(Dc,b),e=xa(Dc,c);D(0<=d,"Unknown leaf type: "+b);D(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.B<a.B?-1:this.B===a.B?0:1:e-d};
g.nb=function(){return this};g.yc=function(){return!0};g.Z=function(a){return a===this?!0:a.J()?this.B===a.B&&this.aa.Z(a.aa):!1};g.toString=function(){return x(this.H(!0))};function Gc(){this.set={}}g=Gc.prototype;g.add=function(a,b){this.set[a]=null!==b?b:!0};g.contains=function(a){return eb(this.set,a)};g.get=function(a){return this.contains(a)?this.set[a]:void 0};g.remove=function(a){delete this.set[a]};g.clear=function(){this.set={}};g.e=function(){return Sa(this.set)};g.count=function(){return La(this.set)};function Hc(a,b){v(a.set,function(a,d){b(d,a)})}g.keys=function(){var a=[];v(this.set,function(b,c){a.push(c)});return a};function Ic(a){D(ea(a)&&0<a.length,"Requires a non-empty array");this.Bf=a;this.Dc={}}Ic.prototype.Ge=function(a,b){var c;c=this.Dc[a]||[];var d=c.length;if(0<d){for(var e=Array(d),f=0;f<d;f++)e[f]=c[f];c=e}else c=[];for(d=0;d<c.length;d++)c[d].Ie.apply(c[d].Ma,Array.prototype.slice.call(arguments,1))};Ic.prototype.gc=function(a,b,c){Jc(this,a);this.Dc[a]=this.Dc[a]||[];this.Dc[a].push({Ie:b,Ma:c});(a=this.Ue(a))&&b.apply(c,a)};
Ic.prototype.Ic=function(a,b,c){Jc(this,a);a=this.Dc[a]||[];for(var d=0;d<a.length;d++)if(a[d].Ie===b&&(!c||c===a[d].Ma)){a.splice(d,1);break}};function Jc(a,b){D(Da(a.Bf,function(a){return a===b}),"Unknown event: "+b)};var Kc=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);D(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);D(20===c.length,"nextPushId: Length should be 20.");
return c}}();function Lc(){Ic.call(this,["online"]);this.hc=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener&&!pb()){var a=this;window.addEventListener("online",function(){a.hc||(a.hc=!0,a.Ge("online",!0))},!1);window.addEventListener("offline",function(){a.hc&&(a.hc=!1,a.Ge("online",!1))},!1)}}la(Lc,Ic);Lc.prototype.Ue=function(a){D("online"===a,"Unknown event type: "+a);return[this.hc]};ca(Lc);function Mc(){Ic.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Mb=!0;if(b){var c=this;document.addEventListener(b,
function(){var b=!document[a];b!==c.Mb&&(c.Mb=b,c.Ge("visible",b))},!1)}}la(Mc,Ic);Mc.prototype.Ue=function(a){D("visible"===a,"Unknown event type: "+a);return[this.Mb]};ca(Mc);function E(a,b){if(1==arguments.length){this.o=a.split("/");for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++);this.o.length=c;this.Y=0}else this.o=a,this.Y=b}function P(a,b){var c=K(a);if(null===c)return b;if(c===K(b))return P(N(a),N(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}
function Nc(a,b){for(var c=a.slice(),d=b.slice(),e=0;e<c.length&&e<d.length;e++){var f=sb(c[e],d[e]);if(0!==f)return f}return c.length===d.length?0:c.length<d.length?-1:1}function K(a){return a.Y>=a.o.length?null:a.o[a.Y]}function Ec(a){return a.o.length-a.Y}function N(a){var b=a.Y;b<a.o.length&&b++;return new E(a.o,b)}function Oc(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}g=E.prototype;
g.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b]);return a||"/"};g.slice=function(a){return this.o.slice(this.Y+(a||0))};g.parent=function(){if(this.Y>=this.o.length)return null;for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b]);return new E(a,0)};
g.n=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c]);if(a instanceof E)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new E(b,0)};g.e=function(){return this.Y>=this.o.length};g.Z=function(a){if(Ec(this)!==Ec(a))return!1;for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1;return!0};
g.contains=function(a){var b=this.Y,c=a.Y;if(Ec(this)>Ec(a))return!1;for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b;++c}return!0};var Q=new E("");function Pc(a,b){this.Qa=a.slice();this.Ha=Math.max(1,this.Qa.length);this.Qe=b;for(var c=0;c<this.Qa.length;c++)this.Ha+=nb(this.Qa[c]);Qc(this)}Pc.prototype.push=function(a){0<this.Qa.length&&(this.Ha+=1);this.Qa.push(a);this.Ha+=nb(a);Qc(this)};Pc.prototype.pop=function(){var a=this.Qa.pop();this.Ha-=nb(a);0<this.Qa.length&&--this.Ha};
function Qc(a){if(768<a.Ha)throw Error(a.Qe+"has a key path longer than 768 bytes ("+a.Ha+").");if(32<a.Qa.length)throw Error(a.Qe+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Rc(a));}function Rc(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"};function Sc(){this.children={};this.bd=0;this.value=null}function Tc(a,b,c){this.ud=a?a:"";this.Pc=b?b:null;this.A=c?c:new Sc}function Uc(a,b){for(var c=b instanceof E?b:new E(b),d=a,e;null!==(e=K(c));)d=new Tc(e,d,w(d.A.children,e)||new Sc),c=N(c);return d}g=Tc.prototype;g.Ca=function(){return this.A.value};function Vc(a,b){D("undefined"!==typeof b,"Cannot set value to undefined");a.A.value=b;Wc(a)}g.clear=function(){this.A.value=null;this.A.children={};this.A.bd=0;Wc(this)};
g.kd=function(){return 0<this.A.bd};g.e=function(){return null===this.Ca()&&!this.kd()};g.O=function(a){var b=this;v(this.A.children,function(c,d){a(new Tc(d,b,c))})};function Xc(a,b,c,d){c&&!d&&b(a);a.O(function(a){Xc(a,b,!0,d)});c&&d&&b(a)}function Yc(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}g.path=function(){return new E(null===this.Pc?this.ud:this.Pc.path()+"/"+this.ud)};g.name=function(){return this.ud};g.parent=function(){return this.Pc};
function Wc(a){if(null!==a.Pc){var b=a.Pc,c=a.ud,d=a.e(),e=eb(b.A.children,c);d&&e?(delete b.A.children[c],b.A.bd--,Wc(b)):d||e||(b.A.children[c]=a.A,b.A.bd++,Wc(b))}};function Zc(a,b){this.La=a;this.ba=b?b:$c}g=Zc.prototype;g.Oa=function(a,b){return new Zc(this.La,this.ba.Oa(a,b,this.La).X(null,null,!1,null,null))};g.remove=function(a){return new Zc(this.La,this.ba.remove(a,this.La).X(null,null,!1,null,null))};g.get=function(a){for(var b,c=this.ba;!c.e();){b=this.La(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
function ad(a,b){for(var c,d=a.ba,e=null;!d.e();){c=a.La(b,d.key);if(0===c){if(d.left.e())return e?e.key:null;for(d=d.left;!d.right.e();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}g.e=function(){return this.ba.e()};g.count=function(){return this.ba.count()};g.Gc=function(){return this.ba.Gc()};g.ec=function(){return this.ba.ec()};g.ha=function(a){return this.ba.ha(a)};
g.Wb=function(a){return new bd(this.ba,null,this.La,!1,a)};g.Xb=function(a,b){return new bd(this.ba,a,this.La,!1,b)};g.Zb=function(a,b){return new bd(this.ba,a,this.La,!0,b)};g.We=function(a){return new bd(this.ba,null,this.La,!0,a)};function bd(a,b,c,d,e){this.Hd=e||null;this.le=d;this.Pa=[];for(e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.le?a.left:a.right;else if(0===e){this.Pa.push(a);break}else this.Pa.push(a),a=this.le?a.right:a.left}
function M(a){if(0===a.Pa.length)return null;var b=a.Pa.pop(),c;c=a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value};if(a.le)for(b=b.left;!b.e();)a.Pa.push(b),b=b.right;else for(b=b.right;!b.e();)a.Pa.push(b),b=b.left;return c}function cd(a){if(0===a.Pa.length)return null;var b;b=a.Pa;b=b[b.length-1];return a.Hd?a.Hd(b.key,b.value):{key:b.key,value:b.value}}function dd(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:!0;this.left=null!=d?d:$c;this.right=null!=e?e:$c}g=dd.prototype;
g.X=function(a,b,c,d,e){return new dd(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};g.count=function(){return this.left.count()+1+this.right.count()};g.e=function(){return!1};g.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)};function ed(a){return a.left.e()?a:ed(a.left)}g.Gc=function(){return ed(this).key};g.ec=function(){return this.right.e()?this.key:this.right.ec()};
g.Oa=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.X(null,null,null,e.left.Oa(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Oa(a,b,c));return gd(e)};function hd(a){if(a.left.e())return $c;a.left.ea()||a.left.left.ea()||(a=id(a));a=a.X(null,null,null,hd(a.left),null);return gd(a)}
g.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.e()||c.left.ea()||c.left.left.ea()||(c=id(c)),c=c.X(null,null,null,c.left.remove(a,b),null);else{c.left.ea()&&(c=jd(c));c.right.e()||c.right.ea()||c.right.left.ea()||(c=kd(c),c.left.left.ea()&&(c=jd(c),c=kd(c)));if(0===b(a,c.key)){if(c.right.e())return $c;d=ed(c.right);c=c.X(d.key,d.value,null,null,hd(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return gd(c)};g.ea=function(){return this.color};
function gd(a){a.right.ea()&&!a.left.ea()&&(a=ld(a));a.left.ea()&&a.left.left.ea()&&(a=jd(a));a.left.ea()&&a.right.ea()&&(a=kd(a));return a}function id(a){a=kd(a);a.right.left.ea()&&(a=a.X(null,null,null,null,jd(a.right)),a=ld(a),a=kd(a));return a}function ld(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function jd(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}
function kd(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function md(){}g=md.prototype;g.X=function(){return this};g.Oa=function(a,b){return new dd(a,b,null)};g.remove=function(){return this};g.count=function(){return 0};g.e=function(){return!0};g.ha=function(){return!1};g.Gc=function(){return null};g.ec=function(){return null};g.ea=function(){return!1};var $c=new md;function O(a,b,c){this.k=a;(this.aa=b)&&Cc(this.aa);a.e()&&D(!this.aa||this.aa.e(),"An empty node cannot have a priority");this.yb=c;this.Db=null}g=O.prototype;g.J=function(){return!1};g.C=function(){return this.aa||L};g.fa=function(a){return this.k.e()?this:new O(this.k,a,this.yb)};g.Q=function(a){if(".priority"===a)return this.C();a=this.k.get(a);return null===a?L:a};g.P=function(a){var b=K(a);return null===b?this:this.Q(b).P(N(a))};g.Da=function(a){return null!==this.k.get(a)};
g.T=function(a,b){D(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.fa(b);var c=new C(a,b),d,e;b.e()?(d=this.k.remove(a),c=Ac(this.yb,c,this.k)):(d=this.k.Oa(a,b),c=yc(this.yb,c,this.k));e=d.e()?L:this.aa;return new O(d,e,c)};g.F=function(a,b){var c=K(a);if(null===c)return b;D(".priority"!==K(a)||1===Ec(a),".priority must be the last token in a path");var d=this.Q(c).F(N(a),b);return this.T(c,d)};g.e=function(){return this.k.e()};g.Eb=function(){return this.k.count()};
var nd=/^(0|[1-9]\d*)$/;g=O.prototype;g.H=function(a){if(this.e())return null;var b={},c=0,d=0,e=!0;this.O(H,function(f,h){b[f]=h.H(a);c++;e&&nd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],h;for(h in b)f[h]=b[h];return f}a&&!this.C().e()&&(b[".priority"]=this.C().H());return b};g.hash=function(){if(null===this.Db){var a="";this.C().e()||(a+="priority:"+Fc(this.C().H())+":");this.O(H,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.Db=""===a?"":Ob(a)}return this.Db};
g.Ve=function(a,b,c){return(c=od(this,c))?(a=ad(c,new C(a,b)))?a.name:null:ad(this.k,a)};function pd(a,b){var c;c=(c=od(a,b))?(c=c.Gc())&&c.name:a.k.Gc();return c?new C(c,a.k.get(c)):null}function qd(a,b){var c;c=(c=od(a,b))?(c=c.ec())&&c.name:a.k.ec();return c?new C(c,a.k.get(c)):null}g.O=function(a,b){var c=od(this,a);return c?c.ha(function(a){return b(a.name,a.R)}):this.k.ha(b)};g.Wb=function(a){return this.Xb(a.Hc(),a)};
g.Xb=function(a,b){var c=od(this,b);if(c)return c.Xb(a,function(a){return a});for(var c=this.k.Xb(a.name,qb),d=cd(c);null!=d&&0>b.compare(d,a);)M(c),d=cd(c);return c};g.We=function(a){return this.Zb(a.Fc(),a)};g.Zb=function(a,b){var c=od(this,b);if(c)return c.Zb(a,function(a){return a});for(var c=this.k.Zb(a.name,qb),d=cd(c);null!=d&&0<b.compare(d,a);)M(c),d=cd(c);return c};g.sc=function(a){return this.e()?a.e()?0:-1:a.J()||a.e()?1:a===qc?-1:0};
g.nb=function(a){if(a===tc||Pa(this.yb.cc,a.toString()))return this;var b=this.yb,c=this.k;D(a!==tc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.Wb(qb),f=M(c);f;)e=e||a.xc(f.R),d.push(f),f=M(c);d=e?zc(d,nc(a)):mc;e=a.toString();c=Ta(b.cc);c[e]=a;a=Ta(b.od);a[e]=d;return new O(this.k,this.aa,new xc(a,c))};g.yc=function(a){return a===tc||Pa(this.yb.cc,a.toString())};
g.Z=function(a){if(a===this)return!0;if(a.J())return!1;if(this.C().Z(a.C())&&this.k.count()===a.k.count()){var b=this.Wb(H);a=a.Wb(H);for(var c=M(b),d=M(a);c&&d;){if(c.name!==d.name||!c.R.Z(d.R))return!1;c=M(b);d=M(a)}return null===c&&null===d}return!1};function od(a,b){return b===tc?null:a.yb.get(b.toString())}g.toString=function(){return x(this.H(!0))};function G(a,b){if(null===a)return L;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);D(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Kb(a,G(c));if(a instanceof Array){var d=L,e=a;v(e,function(a,b){if(eb(e,b)&&"."!==b.substring(0,1)){var c=G(a);if(c.J()||!c.e())d=
d.T(b,c)}});return d.fa(G(c))}var f=[],h=!1,k=a;fb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=G(k[a]);b.e()||(h=h||!b.C().e(),f.push(new C(a,b)))}});if(0==f.length)return L;var m=zc(f,rb,function(a){return a.name},tb);if(h){var l=zc(f,nc(H));return new O(m,G(c),new xc({".priority":l},{".priority":H}))}return new O(m,G(c),Bc)}var rd=Math.log(2);
function sd(a){this.count=parseInt(Math.log(a+1)/rd,10);this.Oe=this.count-1;this.Cf=a+1&parseInt(Array(this.count+1).join("1"),2)}function td(a){var b=!(a.Cf&1<<a.Oe);a.Oe--;return b}
function zc(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var l=a[b],u=c?c(l):l;return new dd(u,l.R,!1,null,null)}var l=parseInt(f/2,10)+b,f=e(b,l),z=e(l+1,d),l=a[l],u=c?c(l):l;return new dd(u,l.R,!1,f,z)}a.sort(b);var f=function(b){function d(b,h){var k=u-b,z=u;u-=b;var z=e(k+1,z),k=a[k],F=c?c(k):k,z=new dd(F,k.R,h,null,z);f?f.left=z:l=z;f=z}for(var f=null,l=null,u=a.length,z=0;z<b.count;++z){var F=td(b),fd=Math.pow(2,b.count-(z+1));F?d(fd,!1):(d(fd,!1),d(fd,!0))}return l}(new sd(a.length));
return null!==f?new Zc(d||b,f):new Zc(d||b)}function Fc(a){return"number"===typeof a?"number:"+dc(a):"string:"+a}function Cc(a){if(a.J()){var b=a.H();D("string"===typeof b||"number"===typeof b||"object"===typeof b&&eb(b,".sv"),"Priority must be a string or number.")}else D(a===qc||a.e(),"priority of unexpected type.");D(a===qc||a.C().e(),"Priority nodes can't have a priority of their own.")}var L=new O(new Zc(tb),null,Bc);function ud(){O.call(this,new Zc(tb),L,Bc)}la(ud,O);g=ud.prototype;
g.sc=function(a){return a===this?0:1};g.Z=function(a){return a===this};g.C=function(){return this};g.Q=function(){return L};g.e=function(){return!1};var qc=new ud,oc=new C("[MIN_NAME]",L),vc=new C("[MAX_NAME]",qc);function vd(a,b){this.value=a;this.children=b||wd}var wd=new Zc(function(a,b){return a===b?0:a<b?-1:1});function xd(a){var b=R;v(a,function(a,d){b=b.set(new E(d),a)});return b}g=vd.prototype;g.e=function(){return null===this.value&&this.children.e()};function yd(a,b,c){if(null!=a.value&&c(a.value))return{path:Q,value:a.value};if(b.e())return null;var d=K(b);a=a.children.get(d);return null!==a?(b=yd(a,N(b),c),null!=b?{path:(new E(d)).n(b.path),value:b.value}:null):null}
function zd(a,b){return yd(a,b,function(){return!0})}g.subtree=function(a){if(a.e())return this;var b=this.children.get(K(a));return null!==b?b.subtree(N(a)):R};g.set=function(a,b){if(a.e())return new vd(b,this.children);var c=K(a),d=(this.children.get(c)||R).set(N(a),b),c=this.children.Oa(c,d);return new vd(this.value,c)};
g.remove=function(a){if(a.e())return this.children.e()?R:new vd(null,this.children);var b=K(a),c=this.children.get(b);return c?(a=c.remove(N(a)),b=a.e()?this.children.remove(b):this.children.Oa(b,a),null===this.value&&b.e()?R:new vd(this.value,b)):this};g.get=function(a){if(a.e())return this.value;var b=this.children.get(K(a));return b?b.get(N(a)):null};
function Ad(a,b,c){if(b.e())return c;var d=K(b);b=Ad(a.children.get(d)||R,N(b),c);d=b.e()?a.children.remove(d):a.children.Oa(d,b);return new vd(a.value,d)}function Bd(a,b){return Cd(a,Q,b)}function Cd(a,b,c){var d={};a.children.ha(function(a,f){d[a]=Cd(f,b.n(a),c)});return c(b,a.value,d)}function Dd(a,b,c){return Ed(a,b,Q,c)}function Ed(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.e())return null;e=K(b);return(a=a.children.get(e))?Ed(a,N(b),c.n(e),d):null}
function Fd(a,b,c){Gd(a,b,Q,c)}function Gd(a,b,c,d){if(b.e())return a;a.value&&d(c,a.value);var e=K(b);return(a=a.children.get(e))?Gd(a,N(b),c.n(e),d):R}function Hd(a,b){Id(a,Q,b)}function Id(a,b,c){a.children.ha(function(a,e){Id(e,b.n(a),c)});a.value&&c(b,a.value)}function Jd(a,b){a.children.ha(function(a,d){d.value&&b(a,d.value)})}var R=new vd(null);vd.prototype.toString=function(){var a={};Hd(this,function(b,c){a[b.toString()]=c.toString()});return x(a)};var Kd=/[\[\].#$\/\u0000-\u001F\u007F]/,Ld=/[\[\].#$\u0000-\u001F\u007F]/;function Md(a){return p(a)&&0!==a.length&&!Kd.test(a)}function Nd(a){return null===a||p(a)||ga(a)&&!Xb(a)||ia(a)&&eb(a,".sv")}function Od(a,b,c,d){d&&!n(b)||Pd(A(a,1,d),b,c)}
function Pd(a,b,c){c instanceof E&&(c=new Pc(c,a));if(!n(b))throw Error(a+"contains undefined "+Rc(c));if(ha(b))throw Error(a+"contains a function "+Rc(c)+" with contents: "+b.toString());if(Xb(b))throw Error(a+"contains "+b.toString()+" "+Rc(c));if(p(b)&&b.length>10485760/3&&10485760<nb(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Rc(c)+" ('"+b.substring(0,50)+"...')");if(ia(b)){var d=!1,e=!1;fb(b,function(b,h){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
!0,!Md(b)))throw Error(a+" contains an invalid key ("+b+") "+Rc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Pd(a,h,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Rc(c)+" in addition to actual children.");}}
function Qd(a,b){var c,d;for(c=0;c<b.length;c++){d=b[c];for(var e=d.slice(),f=0;f<e.length;f++)if((".priority"!==e[f]||f!==e.length-1)&&!Md(e[f]))throw Error(a+"contains an invalid key ("+e[f]+") in path "+d.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');}b.sort(Nc);e=null;for(c=0;c<b.length;c++){d=b[c];if(null!==e&&e.contains(d))throw Error(a+"contains a path "+e.toString()+" that is ancestor of another path "+d.toString());e=d}}
function Rd(a,b,c){var d=A(a,1,!1);if(!ia(b)||ea(b))throw Error(d+" must be an object containing the children to replace.");var e=[];fb(b,function(a,b){var k=new E(a);Pd(d,b,c.n(k));if(".priority"===Oc(k)&&!Nd(b))throw Error(d+"contains an invalid value for '"+k.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");e.push(k)});Qd(d,e)}
function Sd(a,b,c){if(Xb(c))throw Error(A(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Nd(c))throw Error(A(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).");}
function Td(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(A(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Ud(a,b){if(n(b)&&!Md(b))throw Error(A(a,2,!0)+'was an invalid key: "'+b+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
function Vd(a,b){if(!p(b)||0===b.length||Ld.test(b))throw Error(A(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Wd(a,b){if(".info"===K(b))throw Error(a+" failed: Can't modify data under /.info/");}
function Xd(a,b){var c=b.path.toString(),d;!(d=!p(b.jc.host)||0===b.jc.host.length||!Md(b.jc.pe))&&(d=0!==c.length)&&(c&&(c=c.replace(/^\/*\.info(\/|$)/,"/")),d=!(p(c)&&0!==c.length&&!Ld.test(c)));if(d)throw Error(A(a,1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".');};function Gb(){this.k=this.B=null}Gb.prototype.find=function(a){if(null!=this.B)return this.B.P(a);if(a.e()||null==this.k)return null;var b=K(a);a=N(a);return this.k.contains(b)?this.k.get(b).find(a):null};function Ib(a,b,c){if(b.e())a.B=c,a.k=null;else if(null!==a.B)a.B=a.B.F(b,c);else{null==a.k&&(a.k=new Gc);var d=K(b);a.k.contains(d)||a.k.add(d,new Gb);a=a.k.get(d);b=N(b);Ib(a,b,c)}}
function Yd(a,b){if(b.e())return a.B=null,a.k=null,!0;if(null!==a.B){if(a.B.J())return!1;var c=a.B;a.B=null;c.O(H,function(b,c){Ib(a,new E(b),c)});return Yd(a,b)}return null!==a.k?(c=K(b),b=N(b),a.k.contains(c)&&Yd(a.k.get(c),b)&&a.k.remove(c),a.k.e()?(a.k=null,!0):!1):!0}function Hb(a,b,c){null!==a.B?c(b,a.B):a.O(function(a,e){var f=new E(b.toString()+"/"+a);Hb(e,f,c)})}Gb.prototype.O=function(a){null!==this.k&&Hc(this.k,function(b,c){a(b,c)})};function Zd(a,b){this.type=$d;this.source=a;this.path=b}Zd.prototype.Mc=function(){return this.path.e()?new Zd(this.source,Q):new Zd(this.source,N(this.path))};Zd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function ae(a,b,c){this.type=be;this.source=a;this.path=b;this.children=c}ae.prototype.Mc=function(a){if(this.path.e())return a=this.children.subtree(new E(a)),a.e()?null:a.value?new ce(this.source,Q,a.value):new ae(this.source,Q,a);D(K(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new ae(this.source,N(this.path),this.children)};ae.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};function de(a,b,c){this.type=ee;this.source=fe;this.path=a;this.Ob=b;this.Id=c}de.prototype.Mc=function(a){if(this.path.e()){if(null!=this.Ob.value)return D(this.Ob.children.e(),"affectedTree should not have overlapping affected paths."),this;a=this.Ob.subtree(new E(a));return new de(Q,a,this.Id)}D(K(this.path)===a,"operationForChild called for unrelated child.");return new de(N(this.path),this.Ob,this.Id)};
de.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Id+" affectedTree="+this.Ob+")"};function ce(a,b,c){this.type=ge;this.source=a;this.path=b;this.Ga=c}ce.prototype.Mc=function(a){return this.path.e()?new ce(this.source,Q,this.Ga.Q(a)):new ce(this.source,N(this.path),this.Ga)};ce.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ga.toString()+")"};var ge=0,be=1,ee=2,$d=3;function he(a,b,c,d){this.ee=a;this.Se=b;this.Hb=c;this.Ee=d;D(!d||b,"Tagged queries must be from server.")}var fe=new he(!0,!1,null,!1),ie=new he(!1,!0,null,!1);he.prototype.toString=function(){return this.ee?"user":this.Ee?"server(queryID="+this.Hb+")":"server"};function je(a,b,c){this.A=a;this.da=b;this.Sb=c}function ke(a){return a.da}function le(a){return a.Sb}function me(a,b){return b.e()?a.da&&!a.Sb:ne(a,K(b))}function ne(a,b){return a.da&&!a.Sb||a.A.Da(b)}je.prototype.j=function(){return this.A};function oe(a,b){this.N=a;this.Ld=b}function pe(a,b,c,d){return new oe(new je(b,c,d),a.Ld)}function qe(a){return a.N.da?a.N.j():null}oe.prototype.w=function(){return this.Ld};function re(a){return a.Ld.da?a.Ld.j():null};function se(){}se.prototype.Te=function(){return null};se.prototype.fe=function(){return null};var te=new se;function ue(a,b,c){this.xf=a;this.Ka=b;this.yd=c}ue.prototype.Te=function(a){var b=this.Ka.N;if(ne(b,a))return b.j().Q(a);b=null!=this.yd?new je(this.yd,!0,!1):this.Ka.w();return this.xf.qc(a,b)};ue.prototype.fe=function(a,b,c){var d=null!=this.yd?this.yd:re(this.Ka);a=this.xf.Xd(d,b,1,c,a);return 0===a.length?null:a[0]};function ve(a,b){this.Sd=a;this.Df=b}function we(a){this.U=a}
we.prototype.eb=function(a,b,c,d){var e=new xe,f;if(b.type===ge)b.source.ee?c=ye(this,a,b.path,b.Ga,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w())&&!b.path.e(),c=ze(this,a,b.path,b.Ga,c,d,f,e));else if(b.type===be)b.source.ee?c=Ae(this,a,b.path,b.children,c,d,e):(D(b.source.Se,"Unknown source."),f=b.source.Ee||le(a.w()),c=Be(this,a,b.path,b.children,c,d,f,e));else if(b.type===ee)if(b.Id)if(b=b.path,null!=c.lc(b))c=a;else{f=new ue(c,a,d);d=a.N.j();if(b.e()||".priority"===K(b))ke(a.w())?
b=c.Aa(re(a)):(b=a.w().j(),D(b instanceof O,"serverChildren would be complete if leaf node"),b=c.rc(b)),b=this.U.ya(d,b,e);else{var h=K(b),k=c.qc(h,a.w());null==k&&ne(a.w(),h)&&(k=d.Q(h));b=null!=k?this.U.F(d,h,k,N(b),f,e):a.N.j().Da(h)?this.U.F(d,h,L,N(b),f,e):d;b.e()&&ke(a.w())&&(d=c.Aa(re(a)),d.J()&&(b=this.U.ya(b,d,e)))}d=ke(a.w())||null!=c.lc(Q);c=pe(a,b,d,this.U.Na())}else c=Ce(this,a,b.path,b.Ob,c,d,e);else if(b.type===$d)d=b.path,b=a.w(),f=b.j(),h=b.da||d.e(),c=De(this,new oe(a.N,new je(f,
h,b.Sb)),d,c,te,e);else throw Mb("Unknown operation type: "+b.type);e=Na(e.fb);d=c;b=d.N;b.da&&(f=b.j().J()||b.j().e(),h=qe(a),(0<e.length||!a.N.da||f&&!b.j().Z(h)||!b.j().C().Z(h.C()))&&e.push(Ee(qe(d))));return new ve(c,e)};
function De(a,b,c,d,e,f){var h=b.N;if(null!=d.lc(c))return b;var k;if(c.e())D(ke(b.w()),"If change path is empty, we must have complete server data"),le(b.w())?(e=re(b),d=d.rc(e instanceof O?e:L)):d=d.Aa(re(b)),f=a.U.ya(b.N.j(),d,f);else{var m=K(c);if(".priority"==m)D(1==Ec(c),"Can't have a priority with additional path components"),f=h.j(),k=b.w().j(),d=d.ad(c,f,k),f=null!=d?a.U.fa(f,d):h.j();else{var l=N(c);ne(h,m)?(k=b.w().j(),d=d.ad(c,h.j(),k),d=null!=d?h.j().Q(m).F(l,d):h.j().Q(m)):d=d.qc(m,
b.w());f=null!=d?a.U.F(h.j(),m,d,l,e,f):h.j()}}return pe(b,f,h.da||c.e(),a.U.Na())}function ze(a,b,c,d,e,f,h,k){var m=b.w();h=h?a.U:a.U.Ub();if(c.e())d=h.ya(m.j(),d,null);else if(h.Na()&&!m.Sb)d=m.j().F(c,d),d=h.ya(m.j(),d,null);else{var l=K(c);if(!me(m,c)&&1<Ec(c))return b;var u=N(c);d=m.j().Q(l).F(u,d);d=".priority"==l?h.fa(m.j(),d):h.F(m.j(),l,d,u,te,null)}m=m.da||c.e();b=new oe(b.N,new je(d,m,h.Na()));return De(a,b,c,e,new ue(e,b,f),k)}
function ye(a,b,c,d,e,f,h){var k=b.N;e=new ue(e,b,f);if(c.e())h=a.U.ya(b.N.j(),d,h),a=pe(b,h,!0,a.U.Na());else if(f=K(c),".priority"===f)h=a.U.fa(b.N.j(),d),a=pe(b,h,k.da,k.Sb);else{c=N(c);var m=k.j().Q(f);if(!c.e()){var l=e.Te(f);d=null!=l?".priority"===Oc(c)&&l.P(c.parent()).e()?l:l.F(c,d):L}m.Z(d)?a=b:(h=a.U.F(k.j(),f,d,c,e,h),a=pe(b,h,k.da,a.U.Na()))}return a}
function Ae(a,b,c,d,e,f,h){var k=b;Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))&&(k=ye(a,k,u,l,e,f,h))});Hd(d,function(d,l){var u=c.n(d);ne(b.N,K(u))||(k=ye(a,k,u,l,e,f,h))});return k}function Fe(a,b){Hd(b,function(b,d){a=a.F(b,d)});return a}
function Be(a,b,c,d,e,f,h,k){if(b.w().j().e()&&!ke(b.w()))return b;var m=b;c=c.e()?d:Ad(R,c,d);var l=b.w().j();c.children.ha(function(c,d){if(l.Da(c)){var F=b.w().j().Q(c),F=Fe(F,d);m=ze(a,m,new E(c),F,e,f,h,k)}});c.children.ha(function(c,d){var F=!ne(b.w(),c)&&null==d.value;l.Da(c)||F||(F=b.w().j().Q(c),F=Fe(F,d),m=ze(a,m,new E(c),F,e,f,h,k))});return m}
function Ce(a,b,c,d,e,f,h){if(null!=e.lc(c))return b;var k=le(b.w()),m=b.w();if(null!=d.value){if(c.e()&&m.da||me(m,c))return ze(a,b,c,m.j().P(c),e,f,k,h);if(c.e()){var l=R;m.j().O(tc,function(a,b){l=l.set(new E(a),b)});return Be(a,b,c,l,e,f,k,h)}return b}l=R;Hd(d,function(a){var b=c.n(a);me(m,b)&&(l=l.set(a,m.j().P(b)))});return Be(a,b,c,l,e,f,k,h)};function Ge(a){this.V=a;this.g=a.m.g}function He(a,b,c,d){var e=[],f=[];ya(b,function(b){b.type===Ie&&a.g.nd(b.qe,b.Ja)&&f.push(new S(Je,b.Ja,b.Xa))});Ke(a,e,Le,b,d,c);Ke(a,e,Me,b,d,c);Ke(a,e,Je,f,d,c);Ke(a,e,Ie,b,d,c);Ke(a,e,Ne,b,d,c);return e}function Ke(a,b,c,d,e,f){d=za(d,function(a){return a.type===c});Ha(d,q(a.Ff,a));ya(d,function(c){var d=Oe(a,c,f);ya(e,function(e){e.nf(c.type)&&b.push(e.createEvent(d,a.V))})})}
function Oe(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.Dd=c.Ve(b.Xa,b.Ja,a.g));return b}Ge.prototype.Ff=function(a,b){if(null==a.Xa||null==b.Xa)throw Mb("Should only compare child_ events.");return this.g.compare(new C(a.Xa,a.Ja),new C(b.Xa,b.Ja))};function Pe(a,b){this.V=a;var c=a.m,d=new Qe(c.g),c=T(c)?new Qe(c.g):c.xa?new Re(c):new Se(c);this.hf=new we(c);var e=b.w(),f=b.N,h=d.ya(L,e.j(),null),k=c.ya(L,f.j(),null);this.Ka=new oe(new je(k,f.da,c.Na()),new je(h,e.da,d.Na()));this.Za=[];this.Jf=new Ge(a)}function Te(a){return a.V}g=Pe.prototype;g.w=function(){return this.Ka.w().j()};g.hb=function(a){var b=re(this.Ka);return b&&(T(this.V.m)||!a.e()&&!b.Q(K(a)).e())?b.P(a):null};g.e=function(){return 0===this.Za.length};g.Nb=function(a){this.Za.push(a)};
g.kb=function(a,b){var c=[];if(b){D(null==a,"A cancel should cancel all event registrations.");var d=this.V.path;ya(this.Za,function(a){(a=a.Me(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var h=this.Za[f];if(!h.matches(a))e.push(h);else if(a.Xe()){e=e.concat(this.Za.slice(f+1));break}}this.Za=e}else this.Za=[];return c};
g.eb=function(a,b,c){a.type===be&&null!==a.source.Hb&&(D(re(this.Ka),"We should always have a full cache before handling merges"),D(qe(this.Ka),"Missing event cache, even though we have a server cache"));var d=this.Ka;a=this.hf.eb(d,a,b,c);b=this.hf;c=a.Sd;D(c.N.j().yc(b.U.g),"Event snap not indexed");D(c.w().j().yc(b.U.g),"Server snap not indexed");D(ke(a.Sd.w())||!ke(d.w()),"Once a server snap is complete, it should never go back");this.Ka=a.Sd;return Ue(this,a.Df,a.Sd.N.j(),null)};
function Ve(a,b){var c=a.Ka.N,d=[];c.j().J()||c.j().O(H,function(a,b){d.push(new S(Me,b,a))});c.da&&d.push(Ee(c.j()));return Ue(a,d,c.j(),b)}function Ue(a,b,c,d){return He(a.Jf,b,c,d?[d]:a.Za)};function We(a,b,c,d){this.ae=b;this.Md=c;this.Dd=d;this.hd=a}We.prototype.Yb=function(){var a=this.Md.wb();return"value"===this.hd?a.path:a.getParent().path};We.prototype.ge=function(){return this.hd};We.prototype.Tb=function(){return this.ae.Tb(this)};We.prototype.toString=function(){return this.Yb().toString()+":"+this.hd+":"+x(this.Md.be())};function Xe(a,b,c){this.ae=a;this.error=b;this.path=c}Xe.prototype.Yb=function(){return this.path};Xe.prototype.ge=function(){return"cancel"};
Xe.prototype.Tb=function(){return this.ae.Tb(this)};Xe.prototype.toString=function(){return this.path.toString()+":cancel"};function Ye(){this.vb=[]}function Ze(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Yb();null===c||f.Z(c.Yb())||(a.vb.push(c),c=null);null===c&&(c=new $e(f));c.add(e)}c&&a.vb.push(c)}function af(a,b,c){Ze(a,c);bf(a,function(a){return a.Z(b)})}function cf(a,b,c){Ze(a,c);bf(a,function(a){return a.contains(b)||b.contains(a)})}
function bf(a,b){for(var c=!0,d=0;d<a.vb.length;d++){var e=a.vb[d];if(e)if(e=e.Yb(),b(e)){for(var e=a.vb[d],f=0;f<e.jd.length;f++){var h=e.jd[f];if(null!==h){e.jd[f]=null;var k=h.Tb();Qb&&I("event: "+h.toString());fc(k)}}a.vb[d]=null}else c=!1}c&&(a.vb=[])}function $e(a){this.qa=a;this.jd=[]}$e.prototype.add=function(a){this.jd.push(a)};$e.prototype.Yb=function(){return this.qa};function Qe(a){this.g=a}g=Qe.prototype;g.F=function(a,b,c,d,e,f){D(a.yc(this.g),"A node must be indexed if only a child is updated");e=a.Q(b);if(e.P(d).Z(c.P(d))&&e.e()==c.e())return a;null!=f&&(c.e()?a.Da(b)?df(f,new S(Le,e,b)):D(a.J(),"A child remove without an old child only makes sense on a leaf node"):e.e()?df(f,new S(Me,c,b)):df(f,new S(Ie,c,b,e)));return a.J()&&c.e()?a:a.T(b,c).nb(this.g)};
g.ya=function(a,b,c){null!=c&&(a.J()||a.O(H,function(a,e){b.Da(a)||df(c,new S(Le,e,a))}),b.J()||b.O(H,function(b,e){if(a.Da(b)){var f=a.Q(b);f.Z(e)||df(c,new S(Ie,e,b,f))}else df(c,new S(Me,e,b))}));return b.nb(this.g)};g.fa=function(a,b){return a.e()?L:a.fa(b)};g.Na=function(){return!1};g.Ub=function(){return this};function Se(a){this.he=new Qe(a.g);this.g=a.g;var b;a.ka?(b=ef(a),b=a.g.Ec(ff(a),b)):b=a.g.Hc();this.Uc=b;a.na?(b=gf(a),a=a.g.Ec(hf(a),b)):a=a.g.Fc();this.vc=a}g=Se.prototype;g.matches=function(a){return 0>=this.g.compare(this.Uc,a)&&0>=this.g.compare(a,this.vc)};g.F=function(a,b,c,d,e,f){this.matches(new C(b,c))||(c=L);return this.he.F(a,b,c,d,e,f)};
g.ya=function(a,b,c){b.J()&&(b=L);var d=b.nb(this.g),d=d.fa(L),e=this;b.O(H,function(a,b){e.matches(new C(a,b))||(d=d.T(a,L))});return this.he.ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.he};function Re(a){this.sa=new Se(a);this.g=a.g;D(a.xa,"Only valid if limit has been set");this.oa=a.oa;this.Ib=!jf(a)}g=Re.prototype;g.F=function(a,b,c,d,e,f){this.sa.matches(new C(b,c))||(c=L);return a.Q(b).Z(c)?a:a.Eb()<this.oa?this.sa.Ub().F(a,b,c,d,e,f):kf(this,a,b,c,e,f)};
g.ya=function(a,b,c){var d;if(b.J()||b.e())d=L.nb(this.g);else if(2*this.oa<b.Eb()&&b.yc(this.g)){d=L.nb(this.g);b=this.Ib?b.Zb(this.sa.vc,this.g):b.Xb(this.sa.Uc,this.g);for(var e=0;0<b.Pa.length&&e<this.oa;){var f=M(b),h;if(h=this.Ib?0>=this.g.compare(this.sa.Uc,f):0>=this.g.compare(f,this.sa.vc))d=d.T(f.name,f.R),e++;else break}}else{d=b.nb(this.g);d=d.fa(L);var k,m,l;if(this.Ib){b=d.We(this.g);k=this.sa.vc;m=this.sa.Uc;var u=nc(this.g);l=function(a,b){return u(b,a)}}else b=d.Wb(this.g),k=this.sa.Uc,
m=this.sa.vc,l=nc(this.g);for(var e=0,z=!1;0<b.Pa.length;)f=M(b),!z&&0>=l(k,f)&&(z=!0),(h=z&&e<this.oa&&0>=l(f,m))?e++:d=d.T(f.name,L)}return this.sa.Ub().ya(a,d,c)};g.fa=function(a){return a};g.Na=function(){return!0};g.Ub=function(){return this.sa.Ub()};
function kf(a,b,c,d,e,f){var h;if(a.Ib){var k=nc(a.g);h=function(a,b){return k(b,a)}}else h=nc(a.g);D(b.Eb()==a.oa,"");var m=new C(c,d),l=a.Ib?pd(b,a.g):qd(b,a.g),u=a.sa.matches(m);if(b.Da(c)){for(var z=b.Q(c),l=e.fe(a.g,l,a.Ib);null!=l&&(l.name==c||b.Da(l.name));)l=e.fe(a.g,l,a.Ib);e=null==l?1:h(l,m);if(u&&!d.e()&&0<=e)return null!=f&&df(f,new S(Ie,d,c,z)),b.T(c,d);null!=f&&df(f,new S(Le,z,c));b=b.T(c,L);return null!=l&&a.sa.matches(l)?(null!=f&&df(f,new S(Me,l.R,l.name)),b.T(l.name,l.R)):b}return d.e()?
b:u&&0<=h(l,m)?(null!=f&&(df(f,new S(Le,l.R,l.name)),df(f,new S(Me,d,c))),b.T(c,d).T(l.name,L)):b};function S(a,b,c,d){this.type=a;this.Ja=b;this.Xa=c;this.qe=d;this.Dd=void 0}function Ee(a){return new S(Ne,a)}var Me="child_added",Le="child_removed",Ie="child_changed",Je="child_moved",Ne="value";function xe(){this.fb={}}
function df(a,b){var c=b.type,d=b.Xa;D(c==Me||c==Ie||c==Le,"Only child changes supported for tracking");D(".priority"!==d,"Only non-priority child changes can be tracked.");var e=w(a.fb,d);if(e){var f=e.type;if(c==Me&&f==Le)a.fb[d]=new S(Ie,b.Ja,d,e.Ja);else if(c==Le&&f==Me)delete a.fb[d];else if(c==Le&&f==Ie)a.fb[d]=new S(Le,e.qe,d);else if(c==Ie&&f==Me)a.fb[d]=new S(Me,b.Ja,d);else if(c==Ie&&f==Ie)a.fb[d]=new S(Ie,b.Ja,d,e.qe);else throw Mb("Illegal combination of changes: "+b+" occurred after "+
e);}else a.fb[d]=b};function lf(){this.Rb=this.na=this.Kb=this.ka=this.xa=!1;this.oa=0;this.mb="";this.dc=null;this.zb="";this.ac=null;this.xb="";this.g=H}var mf=new lf;function jf(a){return""===a.mb?a.ka:"l"===a.mb}function ff(a){D(a.ka,"Only valid if start has been set");return a.dc}function ef(a){D(a.ka,"Only valid if start has been set");return a.Kb?a.zb:"[MIN_NAME]"}function hf(a){D(a.na,"Only valid if end has been set");return a.ac}
function gf(a){D(a.na,"Only valid if end has been set");return a.Rb?a.xb:"[MAX_NAME]"}function nf(a){var b=new lf;b.xa=a.xa;b.oa=a.oa;b.ka=a.ka;b.dc=a.dc;b.Kb=a.Kb;b.zb=a.zb;b.na=a.na;b.ac=a.ac;b.Rb=a.Rb;b.xb=a.xb;b.g=a.g;b.mb=a.mb;return b}g=lf.prototype;g.ne=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="l";return b};g.oe=function(a){var b=nf(this);b.xa=!0;b.oa=a;b.mb="r";return b};g.Nd=function(a,b){var c=nf(this);c.ka=!0;n(a)||(a=null);c.dc=a;null!=b?(c.Kb=!0,c.zb=b):(c.Kb=!1,c.zb="");return c};
g.gd=function(a,b){var c=nf(this);c.na=!0;n(a)||(a=null);c.ac=a;n(b)?(c.Rb=!0,c.xb=b):(c.vg=!1,c.xb="");return c};function of(a,b){var c=nf(a);c.g=b;return c}function pf(a){var b={};a.ka&&(b.sp=a.dc,a.Kb&&(b.sn=a.zb));a.na&&(b.ep=a.ac,a.Rb&&(b.en=a.xb));if(a.xa){b.l=a.oa;var c=a.mb;""===c&&(c=jf(a)?"l":"r");b.vf=c}a.g!==H&&(b.i=a.g.toString());return b}function T(a){return!(a.ka||a.na||a.xa)}function qf(a){return T(a)&&a.g==H}
function rf(a){var b={};if(qf(a))return b;var c;a.g===H?c="$priority":a.g===wc?c="$value":a.g===tc?c="$key":(D(a.g instanceof pc,"Unrecognized index type!"),c=a.g.toString());b.orderBy=x(c);a.ka&&(b.startAt=x(a.dc),a.Kb&&(b.startAt+=","+x(a.zb)));a.na&&(b.endAt=x(a.ac),a.Rb&&(b.endAt+=","+x(a.xb)));a.xa&&(jf(a)?b.limitToFirst=a.oa:b.limitToLast=a.oa);return b}g.toString=function(){return x(pf(this))};function sf(a){this.W=a}var tf=new sf(new vd(null));function uf(a,b,c){if(b.e())return new sf(new vd(c));var d=zd(a.W,b);if(null!=d){var e=d.path,d=d.value;b=P(e,b);d=d.F(b,c);return new sf(a.W.set(e,d))}a=Ad(a.W,b,new vd(c));return new sf(a)}function vf(a,b,c){var d=a;fb(c,function(a,c){d=uf(d,b.n(a),c)});return d}sf.prototype.Ed=function(a){if(a.e())return tf;a=Ad(this.W,a,R);return new sf(a)};function wf(a,b){var c=zd(a.W,b);return null!=c?a.W.get(c.path).P(P(c.path,b)):null}
function xf(a){var b=[],c=a.W.value;null!=c?c.J()||c.O(H,function(a,c){b.push(new C(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new C(a,c.value))});return b}function yf(a,b){if(b.e())return a;var c=wf(a,b);return null!=c?new sf(new vd(c)):new sf(a.W.subtree(b))}sf.prototype.e=function(){return this.W.e()};sf.prototype.apply=function(a){return zf(Q,this.W,a)};
function zf(a,b,c){if(null!=b.value)return c.F(a,b.value);var d=null;b.children.ha(function(b,f){".priority"===b?(D(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=zf(a.n(b),f,c)});c.P(a).e()||null===d||(c=c.F(a.n(".priority"),d));return c};function Af(){this.Jd=L}Af.prototype.j=function(a){return this.Jd.P(a)};Af.prototype.toString=function(){return this.Jd.toString()};function Bf(a){this.oc=a}Bf.prototype.getToken=function(a){return this.oc.INTERNAL.getToken(a).then(null,function(a){return a&&"auth/token-not-initialized"===a.code?(I("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(a)})};function Cf(a,b){a.oc.INTERNAL.addAuthTokenListener(b)};function Df(){this.S=tf;this.la=[];this.Bc=-1}function Ef(a,b){for(var c=0;c<a.la.length;c++){var d=a.la[c];if(d.Zc===b)return d}return null}g=Df.prototype;
g.Ed=function(a){var b=Ea(this.la,function(b){return b.Zc===a});D(0<=b,"removeWrite called with nonexistent writeId.");var c=this.la[b];this.la.splice(b,1);for(var d=c.visible,e=!1,f=this.la.length-1;d&&0<=f;){var h=this.la[f];h.visible&&(f>=b&&Ff(h,c.path)?d=!1:c.path.contains(h.path)&&(e=!0));f--}if(d){if(e)this.S=Gf(this.la,Hf,Q),this.Bc=0<this.la.length?this.la[this.la.length-1].Zc:-1;else if(c.Ga)this.S=this.S.Ed(c.path);else{var k=this;v(c.children,function(a,b){k.S=k.S.Ed(c.path.n(b))})}return!0}return!1};
g.Aa=function(a,b,c,d){if(c||d){var e=yf(this.S,a);return!d&&e.e()?b:d||null!=b||null!=wf(e,Q)?(e=Gf(this.la,function(b){return(b.visible||d)&&(!c||!(0<=xa(c,b.Zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||L,e.apply(b)):null}e=wf(this.S,a);if(null!=e)return e;e=yf(this.S,a);return e.e()?b:null!=b||null!=wf(e,Q)?(b=b||L,e.apply(b)):null};
g.rc=function(a,b){var c=L,d=wf(this.S,a);if(d)d.J()||d.O(H,function(a,b){c=c.T(a,b)});else if(b){var e=yf(this.S,a);b.O(H,function(a,b){var d=yf(e,new E(a)).apply(b);c=c.T(a,d)});ya(xf(e),function(a){c=c.T(a.name,a.R)})}else e=yf(this.S,a),ya(xf(e),function(a){c=c.T(a.name,a.R)});return c};g.ad=function(a,b,c,d){D(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.n(b);if(null!=wf(this.S,a))return null;a=yf(this.S,a);return a.e()?d.P(b):a.apply(d.P(b))};
g.qc=function(a,b,c){a=a.n(b);var d=wf(this.S,a);return null!=d?d:ne(c,b)?yf(this.S,a).apply(c.j().Q(b)):null};g.lc=function(a){return wf(this.S,a)};g.Xd=function(a,b,c,d,e,f){var h;a=yf(this.S,a);h=wf(a,Q);if(null==h)if(null!=b)h=a.apply(b);else return[];h=h.nb(f);if(h.e()||h.J())return[];b=[];a=nc(f);e=e?h.Zb(c,f):h.Xb(c,f);for(f=M(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=M(e);return b};
function Ff(a,b){return a.Ga?a.path.contains(b):!!Qa(a.children,function(c,d){return a.path.n(d).contains(b)})}function Hf(a){return a.visible}
function Gf(a,b,c){for(var d=tf,e=0;e<a.length;++e){var f=a[e];if(b(f)){var h=f.path;if(f.Ga)c.contains(h)?(h=P(c,h),d=uf(d,h,f.Ga)):h.contains(c)&&(h=P(h,c),d=uf(d,Q,f.Ga.P(h)));else if(f.children)if(c.contains(h))h=P(c,h),d=vf(d,h,f.children);else{if(h.contains(c))if(h=P(h,c),h.e())d=vf(d,Q,f.children);else if(f=w(f.children,K(h)))f=f.P(N(h)),d=uf(d,Q,f)}else throw Mb("WriteRecord should have .snap or .children");}}return d}function If(a,b){this.Lb=a;this.W=b}g=If.prototype;
g.Aa=function(a,b,c){return this.W.Aa(this.Lb,a,b,c)};g.rc=function(a){return this.W.rc(this.Lb,a)};g.ad=function(a,b,c){return this.W.ad(this.Lb,a,b,c)};g.lc=function(a){return this.W.lc(this.Lb.n(a))};g.Xd=function(a,b,c,d,e){return this.W.Xd(this.Lb,a,b,c,d,e)};g.qc=function(a,b){return this.W.qc(this.Lb,a,b)};g.n=function(a){return new If(this.Lb.n(a),this.W)};function Jf(a,b){this.rf={};this.Vc=new Kf(a);this.va=b;var c=1E4+2E4*Math.random();hc(q(this.lf,this),Math.floor(c))}Jf.prototype.lf=function(){var a=this.Vc.get(),b={},c=!1,d;for(d in a)0<a[d]&&eb(this.rf,d)&&(b[d]=a[d],c=!0);c&&this.va.ye(b);hc(q(this.lf,this),Math.floor(6E5*Math.random()))};function Lf(){this.tc={}}function Mf(a,b,c){n(c)||(c=1);eb(a.tc,b)||(a.tc[b]=0);a.tc[b]+=c}Lf.prototype.get=function(){return Ta(this.tc)};function Kf(a){this.Ef=a;this.rd=null}Kf.prototype.get=function(){var a=this.Ef.get(),b=Ta(a);if(this.rd)for(var c in this.rd)b[c]-=this.rd[c];this.rd=a;return b};var Nf={},Of={};function Pf(a){a=a.toString();Nf[a]||(Nf[a]=new Lf);return Nf[a]}function Qf(a,b){var c=a.toString();Of[c]||(Of[c]=b());return Of[c]};function Rf(a,b,c){this.f=Tb("p:rest:");this.L=a;this.Gb=b;this.$c=c;this.$={}}function Sf(a,b){if(n(b))return"tag$"+b;D(qf(a.m),"should have a tag if it's not a default query.");return a.path.toString()}g=Rf.prototype;
g.$e=function(a,b,c,d){var e=a.path.toString();this.f("Listen called for "+e+" "+a.ja());var f=Sf(a,c),h={};this.$[f]=h;a=rf(a.m);var k=this;Tf(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.Gb(e,u,!1,c);w(k.$,f)===h&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};g.uf=function(a,b){var c=Sf(a,b);delete this.$[c]};g.kf=function(){};g.re=function(){};g.cf=function(){};g.xd=function(){};g.put=function(){};g.af=function(){};g.ye=function(){};
function Tf(a,b,c,d){c=c||{};c.format="export";a.$c.getToken(!1).then(function(e){(e=e&&e.accessToken)&&(c.auth=e);var f=(a.L.Sc?"https://":"http://")+a.L.host+b+"?"+gb(c);a.f("Sending REST request for "+f);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(d&&4===h.readyState){a.f("REST Response for "+f+" received. status:",h.status,"response:",h.responseText);var b=null;if(200<=h.status&&300>h.status){try{b=lb(h.responseText)}catch(c){J("Failed to parse JSON response for "+f+": "+h.responseText)}d(null,
b)}else 401!==h.status&&404!==h.status&&J("Got unsuccessful REST response for "+f+" Status: "+h.status),d(h.status);d=null}};h.open("GET",f,!0);h.send()})};function Uf(a){this.te=a;this.Bd=[];this.Qb=0;this.Yd=-1;this.Fb=null}function Vf(a,b,c){a.Yd=b;a.Fb=c;a.Yd<a.Qb&&(a.Fb(),a.Fb=null)}function Wf(a,b,c){for(a.Bd[b]=c;a.Bd[a.Qb];){var d=a.Bd[a.Qb];delete a.Bd[a.Qb];for(var e=0;e<d.length;++e)if(d[e]){var f=a;fc(function(){f.te(d[e])})}if(a.Qb===a.Yd){a.Fb&&(clearTimeout(a.Fb),a.Fb(),a.Fb=null);break}a.Qb++}};var Cb="websocket",Db="long_polling";var Xf=null;"undefined"!==typeof MozWebSocket?Xf=MozWebSocket:"undefined"!==typeof WebSocket&&(Xf=WebSocket);function Yf(a,b,c,d){this.Zd=a;this.f=Tb(this.Zd);this.frames=this.zc=null;this.pb=this.qb=this.Fe=0;this.Va=Pf(b);a={v:"5"};"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");c&&(a.s=c);d&&(a.ls=d);this.Ke=Bb(b,Cb,a)}var Zf;
Yf.prototype.open=function(a,b){this.ib=b;this.Xf=a;this.f("Websocket connecting to "+this.Ke);this.wc=!1;xb.set("previous_websocket_failure",!0);try{this.Ia=new Xf(this.Ke)}catch(c){this.f("Error instantiating WebSocket.");var d=c.message||c.data;d&&this.f(d);this.bb();return}var e=this;this.Ia.onopen=function(){e.f("Websocket connected.");e.wc=!0};this.Ia.onclose=function(){e.f("Websocket connection was disconnected.");e.Ia=null;e.bb()};this.Ia.onmessage=function(a){if(null!==e.Ia)if(a=a.data,e.pb+=
a.length,Mf(e.Va,"bytes_received",a.length),$f(e),null!==e.frames)ag(e,a);else{a:{D(null===e.frames,"We already have a frame buffer");if(6>=a.length){var b=Number(a);if(!isNaN(b)){e.Fe=b;e.frames=[];a=null;break a}}e.Fe=1;e.frames=[]}null!==a&&ag(e,a)}};this.Ia.onerror=function(a){e.f("WebSocket error.  Closing connection.");(a=a.message||a.data)&&e.f(a);e.bb()}};Yf.prototype.start=function(){};
Yf.isAvailable=function(){var a=!1;if("undefined"!==typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==Xf&&!Zf};Yf.responsesRequiredToBeHealthy=2;Yf.healthyTimeout=3E4;g=Yf.prototype;g.sd=function(){xb.remove("previous_websocket_failure")};function ag(a,b){a.frames.push(b);if(a.frames.length==a.Fe){var c=a.frames.join("");a.frames=null;c=lb(c);a.Xf(c)}}
g.send=function(a){$f(this);a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=bc(a,16384);1<a.length&&bg(this,String(a.length));for(var b=0;b<a.length;b++)bg(this,a[b])};g.Tc=function(){this.Ab=!0;this.zc&&(clearInterval(this.zc),this.zc=null);this.Ia&&(this.Ia.close(),this.Ia=null)};g.bb=function(){this.Ab||(this.f("WebSocket is closing itself"),this.Tc(),this.ib&&(this.ib(this.wc),this.ib=null))};g.close=function(){this.Ab||(this.f("WebSocket is being closed"),this.Tc())};
function $f(a){clearInterval(a.zc);a.zc=setInterval(function(){a.Ia&&bg(a,"0");$f(a)},Math.floor(45E3))}function bg(a,b){try{a.Ia.send(b)}catch(c){a.f("Exception thrown from WebSocket.send():",c.message||c.data,"Closing connection."),setTimeout(q(a.bb,a),0)}};function cg(a,b,c,d){this.Zd=a;this.f=Tb(a);this.jc=b;this.pb=this.qb=0;this.Va=Pf(b);this.tf=c;this.wc=!1;this.Cb=d;this.Yc=function(a){return Bb(b,Db,a)}}var dg,eg;
cg.prototype.open=function(a,b){this.Ne=0;this.ia=b;this.bf=new Uf(a);this.Ab=!1;var c=this;this.sb=setTimeout(function(){c.f("Timed out trying to connect.");c.bb();c.sb=null},Math.floor(3E4));Yb(function(){if(!c.Ab){c.Ta=new fg(function(a,b,d,k,m){gg(c,arguments);if(c.Ta)if(c.sb&&(clearTimeout(c.sb),c.sb=null),c.wc=!0,"start"==a)c.id=b,c.ff=d;else if("close"===a)b?(c.Ta.Kd=!1,Vf(c.bf,b,function(){c.bb()})):c.bb();else throw Error("Unrecognized command received: "+a);},function(a,b){gg(c,arguments);
Wf(c.bf,a,b)},function(){c.bb()},c.Yc);var a={start:"t"};a.ser=Math.floor(1E8*Math.random());c.Ta.Qd&&(a.cb=c.Ta.Qd);a.v="5";c.tf&&(a.s=c.tf);c.Cb&&(a.ls=c.Cb);"undefined"!==typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f");a=c.Yc(a);c.f("Connecting via long-poll to "+a);hg(c.Ta,a,function(){})}})};
cg.prototype.start=function(){var a=this.Ta,b=this.ff;a.Vf=this.id;a.Wf=b;for(a.Ud=!0;ig(a););a=this.id;b=this.ff;this.fc=document.createElement("iframe");var c={dframe:"t"};c.id=a;c.pw=b;this.fc.src=this.Yc(c);this.fc.style.display="none";document.body.appendChild(this.fc)};
cg.isAvailable=function(){return dg||!eg&&"undefined"!==typeof document&&null!=document.createElement&&!("object"===typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"===typeof Windows&&"object"===typeof Windows.rg)&&!0};g=cg.prototype;g.sd=function(){};g.Tc=function(){this.Ab=!0;this.Ta&&(this.Ta.close(),this.Ta=null);this.fc&&(document.body.removeChild(this.fc),this.fc=null);this.sb&&(clearTimeout(this.sb),this.sb=null)};
g.bb=function(){this.Ab||(this.f("Longpoll is closing itself"),this.Tc(),this.ia&&(this.ia(this.wc),this.ia=null))};g.close=function(){this.Ab||(this.f("Longpoll is being closed."),this.Tc())};g.send=function(a){a=x(a);this.qb+=a.length;Mf(this.Va,"bytes_sent",a.length);a=mb(a);a=ab(a,!0);a=bc(a,1840);for(var b=0;b<a.length;b++){var c=this.Ta;c.Qc.push({jg:this.Ne,pg:a.length,Pe:a[b]});c.Ud&&ig(c);this.Ne++}};function gg(a,b){var c=x(b).length;a.pb+=c;Mf(a.Va,"bytes_received",c)}
function fg(a,b,c,d){this.Yc=d;this.ib=c;this.ve=new Gc;this.Qc=[];this.$d=Math.floor(1E8*Math.random());this.Kd=!0;this.Qd=Lb();window["pLPCommand"+this.Qd]=a;window["pRTLPCB"+this.Qd]=b;a=document.createElement("iframe");a.style.display="none";if(document.body){document.body.appendChild(a);try{a.contentWindow.document||I("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document);this.Ea=a;a="";this.Ea.src&&"javascript:"===this.Ea.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";\x3c/script>');a="<html><body>"+a+"</body></html>";try{this.Ea.gb.open(),this.Ea.gb.write(a),this.Ea.gb.close()}catch(f){I("frame writing exception"),f.stack&&I(f.stack),I(f)}}
fg.prototype.close=function(){this.Ud=!1;if(this.Ea){this.Ea.gb.body.innerHTML="";var a=this;setTimeout(function(){null!==a.Ea&&(document.body.removeChild(a.Ea),a.Ea=null)},Math.floor(0))}var b=this.ib;b&&(this.ib=null,b())};
function ig(a){if(a.Ud&&a.Kd&&a.ve.count()<(0<a.Qc.length?2:1)){a.$d++;var b={};b.id=a.Vf;b.pw=a.Wf;b.ser=a.$d;for(var b=a.Yc(b),c="",d=0;0<a.Qc.length;)if(1870>=a.Qc[0].Pe.length+30+c.length){var e=a.Qc.shift(),c=c+"&seg"+d+"="+e.jg+"&ts"+d+"="+e.pg+"&d"+d+"="+e.Pe;d++}else break;jg(a,b+c,a.$d);return!0}return!1}function jg(a,b,c){function d(){a.ve.remove(c);ig(a)}a.ve.add(c,1);var e=setTimeout(d,Math.floor(25E3));hg(a,b,function(){clearTimeout(e);d()})}
function hg(a,b,c){setTimeout(function(){try{if(a.Kd){var d=a.Ea.gb.createElement("script");d.type="text/javascript";d.async=!0;d.src=b;d.onload=d.onreadystatechange=function(){var a=d.readyState;a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())};d.onerror=function(){I("Long-poll script failed to load: "+b);a.Kd=!1;a.close()};a.Ea.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))};function kg(a){lg(this,a)}var mg=[cg,Yf];function lg(a,b){var c=Yf&&Yf.isAvailable(),d=c&&!(xb.Ze||!0===xb.get("previous_websocket_failure"));b.qg&&(c||J("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0);if(d)a.Wc=[Yf];else{var e=a.Wc=[];cc(mg,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ng(a){if(0<a.Wc.length)return a.Wc[0];throw Error("No transports available");};function og(a,b,c,d,e,f,h){this.id=a;this.f=Tb("c:"+this.id+":");this.te=c;this.Lc=d;this.ia=e;this.se=f;this.L=b;this.Ad=[];this.Le=0;this.sf=new kg(b);this.Ua=0;this.Cb=h;this.f("Connection created");pg(this)}
function pg(a){var b=ng(a.sf);a.I=new b("c:"+a.id+":"+a.Le++,a.L,void 0,a.Cb);a.xe=b.responsesRequiredToBeHealthy||0;var c=qg(a,a.I),d=rg(a,a.I);a.Xc=a.I;a.Rc=a.I;a.D=null;a.Bb=!1;setTimeout(function(){a.I&&a.I.open(c,d)},Math.floor(0));b=b.healthyTimeout||0;0<b&&(a.md=hc(function(){a.md=null;a.Bb||(a.I&&102400<a.I.pb?(a.f("Connection exceeded healthy timeout but has received "+a.I.pb+" bytes.  Marking connection healthy."),a.Bb=!0,a.I.sd()):a.I&&10240<a.I.qb?a.f("Connection exceeded healthy timeout but has sent "+
a.I.qb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function rg(a,b){return function(c){b===a.I?(a.I=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.L.$a.substr(0,2)&&(xb.remove("host:"+a.L.host),a.L.$a=a.L.host)),a.close()):b===a.D?(a.f("Secondary connection lost."),c=a.D,a.D=null,a.Xc!==c&&a.Rc!==c||a.close()):a.f("closing an old connection")}}
function qg(a,b){return function(c){if(2!=a.Ua)if(b===a.Rc){var d=$b("t",c);c=$b("d",c);if("c"==d){if(d=$b("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h;a.qf=c.s;Ab(a.L,f);0==a.Ua&&(a.I.start(),sg(a,a.I,d),"5"!==e&&J("Protocol version mismatch detected"),c=a.sf,(c=1<c.Wc.length?c.Wc[1]:null)&&tg(a,c))}else if("n"===d){a.f("recvd end transmission on primary");a.Rc=a.D;for(c=0;c<a.Ad.length;++c)a.wd(a.Ad[c]);a.Ad=[];ug(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),
a.se&&(a.se(c),a.se=null),a.ia=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Ab(a.L,c),1===a.Ua?a.close():(vg(a),pg(a))):"e"===d?Ub("Server Error: "+c):"o"===d?(a.f("got pong on primary."),wg(a),xg(a)):Ub("Unknown control packet command: "+d)}else"d"==d&&a.wd(c)}else if(b===a.D)if(d=$b("t",c),c=$b("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?yg(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.D.close(),a.Xc!==a.D&&a.Rc!==a.D||a.close()):"o"===c&&(a.f("got pong on secondary."),
a.pf--,yg(a)));else if("d"==d)a.Ad.push(c);else throw Error("Unknown protocol layer: "+d);else a.f("message on old connection")}}og.prototype.ua=function(a){zg(this,{t:"d",d:a})};function ug(a){a.Xc===a.D&&a.Rc===a.D&&(a.f("cleaning up and promoting a connection: "+a.D.Zd),a.I=a.D,a.D=null)}
function yg(a){0>=a.pf?(a.f("Secondary connection is healthy."),a.Bb=!0,a.D.sd(),a.D.start(),a.f("sending client ack on secondary"),a.D.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.I.send({t:"c",d:{t:"n",d:{}}}),a.Xc=a.D,ug(a)):(a.f("sending ping on secondary."),a.D.send({t:"c",d:{t:"p",d:{}}}))}og.prototype.wd=function(a){wg(this);this.te(a)};function wg(a){a.Bb||(a.xe--,0>=a.xe&&(a.f("Primary connection is healthy."),a.Bb=!0,a.I.sd()))}
function tg(a,b){a.D=new b("c:"+a.id+":"+a.Le++,a.L,a.qf);a.pf=b.responsesRequiredToBeHealthy||0;a.D.open(qg(a,a.D),rg(a,a.D));hc(function(){a.D&&(a.f("Timed out trying to upgrade."),a.D.close())},Math.floor(6E4))}function sg(a,b,c){a.f("Realtime connection established.");a.I=b;a.Ua=1;a.Lc&&(a.Lc(c,a.qf),a.Lc=null);0===a.xe?(a.f("Primary connection is healthy."),a.Bb=!0):hc(function(){xg(a)},Math.floor(5E3))}
function xg(a){a.Bb||1!==a.Ua||(a.f("sending ping on primary."),zg(a,{t:"c",d:{t:"p",d:{}}}))}function zg(a,b){if(1!==a.Ua)throw"Connection is not connected";a.Xc.send(b)}og.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,vg(this),this.ia&&(this.ia(),this.ia=null))};function vg(a){a.f("Shutting down all connections");a.I&&(a.I.close(),a.I=null);a.D&&(a.D.close(),a.D=null);a.md&&(clearTimeout(a.md),a.md=null)};function Ag(a,b,c,d,e,f){this.id=Bg++;this.f=Tb("p:"+this.id+":");this.qd={};this.$={};this.pa=[];this.Oc=0;this.Kc=[];this.ma=!1;this.Sa=1E3;this.td=3E5;this.Gb=b;this.Jc=c;this.ue=d;this.L=a;this.ob=this.Fa=this.Cb=this.ze=null;this.$c=e;this.de=!1;this.ke=0;if(f)throw Error("Auth override specified in options, but not supported on non Node.js platforms");this.Vd=f;this.ub=null;this.Mb=!1;this.Gd={};this.ig=0;this.Re=!0;this.Ac=this.me=null;Cg(this,0);Mc.Vb().gc("visible",this.Zf,this);-1===a.host.indexOf("fblocal")&&
Lc.Vb().gc("online",this.Yf,this)}var Bg=0,Dg=0;g=Ag.prototype;g.ua=function(a,b,c){var d=++this.ig;a={r:d,a:a,b:b};this.f(x(a));D(this.ma,"sendRequest call when we're not connected not allowed.");this.Fa.ua(a);c&&(this.Gd[d]=c)};
g.$e=function(a,b,c,d){var e=a.ja(),f=a.path.toString();this.f("Listen called for "+f+" "+e);this.$[f]=this.$[f]||{};D(qf(a.m)||!T(a.m),"listen() called for non-default but complete query");D(!this.$[f][e],"listen() called twice for same path/queryId.");a={G:d,ld:b,eg:a,tag:c};this.$[f][e]=a;this.ma&&Eg(this,a)};
function Eg(a,b){var c=b.eg,d=c.path.toString(),e=c.ja();a.f("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=pf(c.m),f.t=b.tag);f.h=b.ld();a.ua("q",f,function(f){var k=f.d,m=f.s;if(k&&"object"===typeof k&&eb(k,"w")){var l=w(k,"w");ea(l)&&0<=xa(l,"no_index")&&J("Using an unspecified index. Consider adding "+('".indexOn": "'+c.m.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.$[d]&&a.$[d][e])===b&&(a.f("listen response",f),"ok"!==m&&Fg(a,d,e),b.G&&b.G(m,
k))})}g.kf=function(a){this.ob=a;this.f("Auth token refreshed");this.ob?Gg(this):this.ma&&this.ua("unauth",{},function(){});if(a&&40===a.length||kc(a))this.f("Admin auth credential detected.  Reducing max reconnect time."),this.td=3E4};function Gg(a){if(a.ma&&a.ob){var b=a.ob,c=jc(b)?"auth":"gauth",d={cred:b};null===a.Vd?d.noauth=!0:"object"===typeof a.Vd&&(d.authvar=a.Vd);a.ua(c,d,function(c){var d=c.s;c=c.d||"error";a.ob===b&&("ok"===d?a.ke=0:Hg(a,d,c))})}}
g.uf=function(a,b){var c=a.path.toString(),d=a.ja();this.f("Unlisten called for "+c+" "+d);D(qf(a.m)||!T(a.m),"unlisten() called for non-default but complete query");if(Fg(this,c,d)&&this.ma){var e=pf(a.m);this.f("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ua("n",c)}};g.re=function(a,b,c){this.ma?Ig(this,"o",a,b,c):this.Kc.push({we:a,action:"o",data:b,G:c})};g.cf=function(a,b,c){this.ma?Ig(this,"om",a,b,c):this.Kc.push({we:a,action:"om",data:b,G:c})};
g.xd=function(a,b){this.ma?Ig(this,"oc",a,null,b):this.Kc.push({we:a,action:"oc",data:null,G:b})};function Ig(a,b,c,d,e){c={p:c,d:d};a.f("onDisconnect "+b,c);a.ua(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}g.put=function(a,b,c,d){Jg(this,"p",a,b,c,d)};g.af=function(a,b,c,d){Jg(this,"m",a,b,c,d)};function Jg(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.pa.push({action:b,mf:d,G:e});a.Oc++;b=a.pa.length-1;a.ma?Kg(a,b):a.f("Buffering put: "+c)}
function Kg(a,b){var c=a.pa[b].action,d=a.pa[b].mf,e=a.pa[b].G;a.pa[b].fg=a.ma;a.ua(c,d,function(d){a.f(c+" response",d);delete a.pa[b];a.Oc--;0===a.Oc&&(a.pa=[]);e&&e(d.s,d.d)})}g.ye=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.ua("s",a,function(a){"ok"!==a.s&&this.f("reportStats","Error sending stats: "+a.d)}))};
g.wd=function(a){if("r"in a){this.f("from server: "+x(a));var b=a.r,c=this.Gd[b];c&&(delete this.Gd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,a=a.b,this.f("handleServerMessage",b,a),"d"===b?this.Gb(a.p,a.d,!1,a.t):"m"===b?this.Gb(a.p,a.d,!0,a.t):"c"===b?Lg(this,a.p,a.q):"ac"===b?Hg(this,a.s,a.d):"sd"===b?this.ze?this.ze(a):"msg"in a&&"undefined"!==typeof console&&console.log("FIREBASE: "+a.msg.replace("\n","\nFIREBASE: ")):Ub("Unrecognized action received from server: "+
x(b)+"\nAre you using the latest client?"))}};g.Lc=function(a,b){this.f("connection ready");this.ma=!0;this.Ac=(new Date).getTime();this.ue({serverTimeOffset:a-(new Date).getTime()});this.Cb=b;if(this.Re){var c={};c["sdk.js."+firebase.SDK_VERSION.replace(/\./g,"-")]=1;pb()?c["framework.cordova"]=1:"object"===typeof navigator&&"ReactNative"===navigator.product&&(c["framework.reactnative"]=1);this.ye(c)}Mg(this);this.Re=!1;this.Jc(!0)};
function Cg(a,b){D(!a.Fa,"Scheduling a connect when we're already connected/ing?");a.ub&&clearTimeout(a.ub);a.ub=setTimeout(function(){a.ub=null;Ng(a)},Math.floor(b))}g.Zf=function(a){a&&!this.Mb&&this.Sa===this.td&&(this.f("Window became visible.  Reducing delay."),this.Sa=1E3,this.Fa||Cg(this,0));this.Mb=a};g.Yf=function(a){a?(this.f("Browser went online."),this.Sa=1E3,this.Fa||Cg(this,0)):(this.f("Browser went offline.  Killing connection."),this.Fa&&this.Fa.close())};
g.df=function(){this.f("data client disconnected");this.ma=!1;this.Fa=null;for(var a=0;a<this.pa.length;a++){var b=this.pa[a];b&&"h"in b.mf&&b.fg&&(b.G&&b.G("disconnect"),delete this.pa[a],this.Oc--)}0===this.Oc&&(this.pa=[]);this.Gd={};Og(this)&&(this.Mb?this.Ac&&(3E4<(new Date).getTime()-this.Ac&&(this.Sa=1E3),this.Ac=null):(this.f("Window isn't visible.  Delaying reconnect."),this.Sa=this.td,this.me=(new Date).getTime()),a=Math.max(0,this.Sa-((new Date).getTime()-this.me)),a*=Math.random(),this.f("Trying to reconnect in "+
a+"ms"),Cg(this,a),this.Sa=Math.min(this.td,1.3*this.Sa));this.Jc(!1)};
function Ng(a){if(Og(a)){a.f("Making a connection attempt");a.me=(new Date).getTime();a.Ac=null;var b=q(a.wd,a),c=q(a.Lc,a),d=q(a.df,a),e=a.id+":"+Dg++,f=a.Cb,h=!1,k=null,m=function(){k?k.close():(h=!0,d())};a.Fa={close:m,ua:function(a){D(k,"sendRequest call when we're not connected not allowed.");k.ua(a)}};var l=a.de;a.de=!1;a.$c.getToken(l).then(function(l){h?I("getToken() completed but was canceled"):(I("getToken() completed. Creating connection."),a.ob=l&&l.accessToken,k=new og(e,a.L,b,c,d,function(b){J(b+
" ("+a.L.toString()+")");a.ab("server_kill")},f))}).then(null,function(b){a.f("Failed to get token: "+b);h||m()})}}g.ab=function(a){I("Interrupting connection for reason: "+a);this.qd[a]=!0;this.Fa?this.Fa.close():(this.ub&&(clearTimeout(this.ub),this.ub=null),this.ma&&this.df())};g.kc=function(a){I("Resuming connection for reason: "+a);delete this.qd[a];Sa(this.qd)&&(this.Sa=1E3,this.Fa||Cg(this,0))};
function Lg(a,b,c){c=c?Aa(c,function(a){return ac(a)}).join("$"):"default";(a=Fg(a,b,c))&&a.G&&a.G("permission_denied")}function Fg(a,b,c){b=(new E(b)).toString();var d;n(a.$[b])?(d=a.$[b][c],delete a.$[b][c],0===La(a.$[b])&&delete a.$[b]):d=void 0;return d}
function Hg(a,b,c){I("Auth token revoked: "+b+"/"+c);a.ob=null;a.de=!0;a.Fa.close();if("invalid_token"===b||"permission_denied"===b)a.ke++,3<=a.ke&&(a.Sa=3E4,a=a.$c,b='Provided authentication credentials for the app named "'+a.oc.name+'" are invalid. This usually indicates your app was not initialized correctly. ',b="credential"in a.oc.options?b+'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in
a.oc.options?b+'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':b+'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',J(b))}
function Mg(a){Gg(a);v(a.$,function(b){v(b,function(b){Eg(a,b)})});for(var b=0;b<a.pa.length;b++)a.pa[b]&&Kg(a,b);for(;a.Kc.length;)b=a.Kc.shift(),Ig(a,b.action,b.we,b.data,b.G)}function Og(a){var b;b=Lc.Vb().hc;return Sa(a.qd)&&b};function Pg(a){a instanceof Qg||Vb("Don't call new Database() directly - please use firebase.database().");this.ta=a;this.ba=new U(a,Q);this.INTERNAL=new Rg(this)}var Sg={TIMESTAMP:{".sv":"timestamp"}};g=Pg.prototype;g.app=null;g.jf=function(a){Tg(this,"ref");y("database.ref",0,1,arguments.length);return n(a)?this.ba.n(a):this.ba};
g.gg=function(a){Tg(this,"database.refFromURL");y("database.refFromURL",1,1,arguments.length);var b=Wb(a);Xd("database.refFromURL",b);var c=b.jc;c.host!==this.ta.L.host&&Vb("database.refFromURL: Host name does not match the current database: (found "+c.host+" but expected "+this.ta.L.host+")");return this.jf(b.path.toString())};function Tg(a,b){null===a.ta&&Vb("Cannot call "+b+" on a deleted database.")}g.Pf=function(){y("database.goOffline",0,0,arguments.length);Tg(this,"goOffline");this.ta.ab()};
g.Qf=function(){y("database.goOnline",0,0,arguments.length);Tg(this,"goOnline");this.ta.kc()};Object.defineProperty(Pg.prototype,"app",{get:function(){return this.ta.app}});function Rg(a){this.Ya=a}Rg.prototype.delete=function(){Tg(this.Ya,"delete");var a=Ug.Vb(),b=this.Ya.ta;w(a.lb,b.app.name)!==b&&Vb("Database "+b.app.name+" has already been deleted.");b.ab();delete a.lb[b.app.name];this.Ya.ta=null;this.Ya.ba=null;this.Ya=this.Ya.INTERNAL=null;return firebase.Promise.resolve()};
Pg.prototype.ref=Pg.prototype.jf;Pg.prototype.refFromURL=Pg.prototype.gg;Pg.prototype.goOnline=Pg.prototype.Qf;Pg.prototype.goOffline=Pg.prototype.Pf;Rg.prototype["delete"]=Rg.prototype.delete;function V(a,b,c){this.A=a;this.V=b;this.g=c}V.prototype.H=function(){y("Firebase.DataSnapshot.val",0,0,arguments.length);return this.A.H()};V.prototype.val=V.prototype.H;V.prototype.be=function(){y("Firebase.DataSnapshot.exportVal",0,0,arguments.length);return this.A.H(!0)};V.prototype.exportVal=V.prototype.be;V.prototype.toJSON=function(){y("Firebase.DataSnapshot.toJSON",0,1,arguments.length);return this.be()};V.prototype.toJSON=V.prototype.toJSON;
V.prototype.Lf=function(){y("Firebase.DataSnapshot.exists",0,0,arguments.length);return!this.A.e()};V.prototype.exists=V.prototype.Lf;V.prototype.n=function(a){y("Firebase.DataSnapshot.child",0,1,arguments.length);ga(a)&&(a=String(a));Vd("Firebase.DataSnapshot.child",a);var b=new E(a),c=this.V.n(b);return new V(this.A.P(b),c,H)};V.prototype.child=V.prototype.n;
V.prototype.Da=function(a){y("Firebase.DataSnapshot.hasChild",1,1,arguments.length);Vd("Firebase.DataSnapshot.hasChild",a);var b=new E(a);return!this.A.P(b).e()};V.prototype.hasChild=V.prototype.Da;V.prototype.C=function(){y("Firebase.DataSnapshot.getPriority",0,0,arguments.length);return this.A.C().H()};V.prototype.getPriority=V.prototype.C;
V.prototype.forEach=function(a){y("Firebase.DataSnapshot.forEach",1,1,arguments.length);B("Firebase.DataSnapshot.forEach",1,a,!1);if(this.A.J())return!1;var b=this;return!!this.A.O(this.g,function(c,d){return a(new V(d,b.V.n(c),H))})};V.prototype.forEach=V.prototype.forEach;V.prototype.kd=function(){y("Firebase.DataSnapshot.hasChildren",0,0,arguments.length);return this.A.J()?!1:!this.A.e()};V.prototype.hasChildren=V.prototype.kd;
V.prototype.getKey=function(){y("Firebase.DataSnapshot.key",0,0,arguments.length);return this.V.getKey()};gc(V.prototype,"key",V.prototype.getKey);V.prototype.Eb=function(){y("Firebase.DataSnapshot.numChildren",0,0,arguments.length);return this.A.Eb()};V.prototype.numChildren=V.prototype.Eb;V.prototype.wb=function(){y("Firebase.DataSnapshot.ref",0,0,arguments.length);return this.V};gc(V.prototype,"ref",V.prototype.wb);function Vg(a,b,c){this.Pb=a;this.rb=b;this.tb=c||null}g=Vg.prototype;g.nf=function(a){return"value"===a};g.createEvent=function(a,b){var c=b.m.g;return new We("value",this,new V(a.Ja,b.wb(),c))};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.Pb;return function(){d.call(b,a.Md)}};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
g.matches=function(a){return a instanceof Vg?a.Pb&&this.Pb?a.Pb===this.Pb&&a.tb===this.tb:!0:!1};g.Xe=function(){return null!==this.Pb};function Wg(a,b,c){this.ga=a;this.rb=b;this.tb=c}g=Wg.prototype;g.nf=function(a){a="children_added"===a?"child_added":a;return("children_removed"===a?"child_removed":a)in this.ga};g.Me=function(a,b){return this.rb?new Xe(this,a,b):null};
g.createEvent=function(a,b){D(null!=a.Xa,"Child events should have a childName.");var c=b.wb().n(a.Xa);return new We(a.type,this,new V(a.Ja,c,b.m.g),a.Dd)};g.Tb=function(a){var b=this.tb;if("cancel"===a.ge()){D(this.rb,"Raising a cancel event on a listener with no cancel callback");var c=this.rb;return function(){c.call(b,a.error)}}var d=this.ga[a.hd];return function(){d.call(b,a.Md,a.Dd)}};
g.matches=function(a){if(a instanceof Wg){if(!this.ga||!a.ga)return!0;if(this.tb===a.tb){var b=La(a.ga);if(b===La(this.ga)){if(1===b){var b=Ma(a.ga),c=Ma(this.ga);return c===b&&(!a.ga[b]||!this.ga[c]||a.ga[b]===this.ga[c])}return Ka(this.ga,function(b,c){return a.ga[c]===b})}}}return!1};g.Xe=function(){return null!==this.ga};function Xg(){this.za={}}g=Xg.prototype;g.e=function(){return Sa(this.za)};g.eb=function(a,b,c){var d=a.source.Hb;if(null!==d)return d=w(this.za,d),D(null!=d,"SyncTree gave us an op for an invalid query."),d.eb(a,b,c);var e=[];v(this.za,function(d){e=e.concat(d.eb(a,b,c))});return e};g.Nb=function(a,b,c,d,e){var f=a.ja(),h=w(this.za,f);if(!h){var h=c.Aa(e?d:null),k=!1;h?k=!0:(h=d instanceof O?c.rc(d):L,k=!1);h=new Pe(a,new oe(new je(h,k,!1),new je(d,e,!1)));this.za[f]=h}h.Nb(b);return Ve(h,b)};
g.kb=function(a,b,c){var d=a.ja(),e=[],f=[],h=null!=Yg(this);if("default"===d){var k=this;v(this.za,function(a,d){f=f.concat(a.kb(b,c));a.e()&&(delete k.za[d],T(a.V.m)||e.push(a.V))})}else{var m=w(this.za,d);m&&(f=f.concat(m.kb(b,c)),m.e()&&(delete this.za[d],T(m.V.m)||e.push(m.V)))}h&&null==Yg(this)&&e.push(new U(a.u,a.path));return{hg:e,Kf:f}};function Zg(a){return za(Na(a.za),function(a){return!T(a.V.m)})}g.hb=function(a){var b=null;v(this.za,function(c){b=b||c.hb(a)});return b};
function $g(a,b){if(T(b.m))return Yg(a);var c=b.ja();return w(a.za,c)}function Yg(a){return Ra(a.za,function(a){return T(a.V.m)})||null};function ah(a){this.wa=R;this.jb=new Df;this.De={};this.ic={};this.Cc=a}function bh(a,b,c,d,e){var f=a.jb,h=e;D(d>f.Bc,"Stacking an older write on top of newer ones");n(h)||(h=!0);f.la.push({path:b,Ga:c,Zc:d,visible:h});h&&(f.S=uf(f.S,b,c));f.Bc=d;return e?ch(a,new ce(fe,b,c)):[]}function dh(a,b,c,d){var e=a.jb;D(d>e.Bc,"Stacking an older merge on top of newer ones");e.la.push({path:b,children:c,Zc:d,visible:!0});e.S=vf(e.S,b,c);e.Bc=d;c=xd(c);return ch(a,new ae(fe,b,c))}
function eh(a,b,c){c=c||!1;var d=Ef(a.jb,b);if(a.jb.Ed(b)){var e=R;null!=d.Ga?e=e.set(Q,!0):fb(d.children,function(a,b){e=e.set(new E(a),b)});return ch(a,new de(d.path,e,c))}return[]}function fh(a,b,c){c=xd(c);return ch(a,new ae(ie,b,c))}function gh(a,b,c,d){d=hh(a,d);if(null!=d){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=new ce(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
function kh(a,b,c,d){if(d=hh(a,d)){var e=ih(d);d=e.path;e=e.Hb;b=P(d,b);c=xd(c);c=new ae(new he(!1,!0,e,!0),b,c);return jh(a,d,c)}return[]}
ah.prototype.Nb=function(a,b){var c=a.path,d=null,e=!1;Fd(this.wa,c,function(a,b){var f=P(a,c);d=d||b.hb(f);e=e||null!=Yg(b)});var f=this.wa.get(c);f?(e=e||null!=Yg(f),d=d||f.hb(Q)):(f=new Xg,this.wa=this.wa.set(c,f));var h;null!=d?h=!0:(h=!1,d=L,Jd(this.wa.subtree(c),function(a,b){var c=b.hb(Q);c&&(d=d.T(a,c))}));var k=null!=$g(f,a);if(!k&&!T(a.m)){var m=lh(a);D(!(m in this.ic),"View does not exist, but we have a tag");var l=mh++;this.ic[m]=l;this.De["_"+l]=m}h=f.Nb(a,b,new If(c,this.jb),d,h);k||
e||(f=$g(f,a),h=h.concat(nh(this,a,f)));return h};
ah.prototype.kb=function(a,b,c){var d=a.path,e=this.wa.get(d),f=[];if(e&&("default"===a.ja()||null!=$g(e,a))){f=e.kb(a,b,c);e.e()&&(this.wa=this.wa.remove(d));e=f.hg;f=f.Kf;b=-1!==Ea(e,function(a){return T(a.m)});var h=Dd(this.wa,d,function(a,b){return null!=Yg(b)});if(b&&!h&&(d=this.wa.subtree(d),!d.e()))for(var d=oh(d),k=0;k<d.length;++k){var m=d[k],l=m.V,m=ph(this,m);this.Cc.Ae(qh(l),rh(this,l),m.ld,m.G)}if(!h&&0<e.length&&!c)if(b)this.Cc.Od(qh(a),null);else{var u=this;ya(e,function(a){a.ja();
var b=u.ic[lh(a)];u.Cc.Od(qh(a),b)})}sh(this,e)}return f};ah.prototype.Aa=function(a,b){var c=this.jb,d=Dd(this.wa,a,function(b,c){var d=P(b,a);if(d=c.hb(d))return d});return c.Aa(a,d,b,!0)};function oh(a){return Bd(a,function(a,c,d){if(c&&null!=Yg(c))return[Yg(c)];var e=[];c&&(e=Zg(c));v(d,function(a){e=e.concat(a)});return e})}function sh(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!T(d.m)){var d=lh(d),e=a.ic[d];delete a.ic[d];delete a.De["_"+e]}}}
function qh(a){return T(a.m)&&!qf(a.m)?a.wb():a}function nh(a,b,c){var d=b.path,e=rh(a,b);c=ph(a,c);b=a.Cc.Ae(qh(b),e,c.ld,c.G);d=a.wa.subtree(d);if(e)D(null==Yg(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=Bd(d,function(a,b,c){if(!a.e()&&b&&null!=Yg(b))return[Te(Yg(b))];var d=[];b&&(d=d.concat(Aa(Zg(b),function(a){return a.V})));v(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.Cc.Od(qh(c),rh(a,c));return b}
function ph(a,b){var c=b.V,d=rh(a,c);return{ld:function(){return(b.w()||L).hash()},G:function(b){if("ok"===b){if(d){var f=c.path;if(b=hh(a,d)){var h=ih(b);b=h.path;h=h.Hb;f=P(b,f);f=new Zd(new he(!1,!0,h,!0),f);b=jh(a,b,f)}else b=[]}else b=ch(a,new Zd(ie,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
(f="The service is unavailable");f=Error(b+" at "+c.path.toString()+": "+f);f.code=b.toUpperCase();return a.kb(c,null,f)}}}function lh(a){return a.path.toString()+"$"+a.ja()}function ih(a){var b=a.indexOf("$");D(-1!==b&&b<a.length-1,"Bad queryKey.");return{Hb:a.substr(b+1),path:new E(a.substr(0,b))}}function hh(a,b){var c=a.De,d="_"+b;return d in c?c[d]:void 0}function rh(a,b){var c=lh(b);return w(a.ic,c)}var mh=1;
function jh(a,b,c){var d=a.wa.get(b);D(d,"Missing sync point for query tag that we're tracking");return d.eb(c,new If(b,a.jb),null)}function ch(a,b){return th(a,b,a.wa,null,new If(Q,a.jb))}function th(a,b,c,d,e){if(b.path.e())return uh(a,b,c,d,e);var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[],k=K(b.path),m=b.Mc(k);if((c=c.children.get(k))&&m)var l=d?d.Q(k):null,k=e.n(k),h=h.concat(th(a,m,c,l,k));f&&(h=h.concat(f.eb(b,e,d)));return h}
function uh(a,b,c,d,e){var f=c.get(Q);null==d&&null!=f&&(d=f.hb(Q));var h=[];c.children.ha(function(c,f){var l=d?d.Q(c):null,u=e.n(c),z=b.Mc(c);z&&(h=h.concat(uh(a,z,f,l,u)))});f&&(h=h.concat(f.eb(b,e,d)));return h};function Qg(a,b,c){this.app=c;var d=new Bf(c);this.L=a;this.Va=Pf(a);this.Vc=null;this.ca=new Ye;this.vd=1;this.Ra=null;if(b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i))this.va=new Rf(this.L,q(this.Gb,this),d),setTimeout(q(this.Jc,this,!0),0);else{b=c.options.databaseAuthVariableOverride;if("undefined"!==da(b)&&null!==b){if("object"!==da(b))throw Error("Only objects are supported for option databaseAuthVariableOverride");
try{x(b)}catch(e){throw Error("Invalid authOverride provided: "+e);}}this.va=this.Ra=new Ag(this.L,q(this.Gb,this),q(this.Jc,this),q(this.ue,this),d,b)}var f=this;Cf(d,function(a){f.va.kf(a)});this.og=Qf(a,q(function(){return new Jf(this.Va,this.va)},this));this.mc=new Tc;this.ie=new Af;this.pd=new ah({Ae:function(a,b,c,d){b=[];c=f.ie.j(a.path);c.e()||(b=ch(f.pd,new ce(ie,a.path,c)),setTimeout(function(){d("ok")},0));return b},Od:ba});vh(this,"connected",!1);this.ia=new Gb;this.Ya=new Pg(this);this.fd=
0;this.je=null;this.K=new ah({Ae:function(a,b,c,d){f.va.$e(a,c,b,function(b,c){var e=d(b,c);cf(f.ca,a.path,e)});return[]},Od:function(a,b){f.va.uf(a,b)}})}g=Qg.prototype;g.toString=function(){return(this.L.Sc?"https://":"http://")+this.L.host};g.name=function(){return this.L.pe};function wh(a){a=a.ie.j(new E(".info/serverTimeOffset")).H()||0;return(new Date).getTime()+a}function xh(a){a=a={timestamp:wh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
g.Gb=function(a,b,c,d){this.fd++;var e=new E(a);b=this.je?this.je(a,b):b;a=[];d?c?(b=Ja(b,function(a){return G(a)}),a=kh(this.K,e,b,d)):(b=G(b),a=gh(this.K,e,b,d)):c?(d=Ja(b,function(a){return G(a)}),a=fh(this.K,e,d)):(d=G(b),a=ch(this.K,new ce(ie,e,d)));d=e;0<a.length&&(d=yh(this,e));cf(this.ca,d,a)};g.Jc=function(a){vh(this,"connected",a);!1===a&&zh(this)};g.ue=function(a){var b=this;cc(a,function(a,d){vh(b,d,a)})};
function vh(a,b,c){b=new E("/.info/"+b);c=G(c);var d=a.ie;d.Jd=d.Jd.F(b,c);c=ch(a.pd,new ce(ie,b,c));cf(a.ca,b,c)}g.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,ug:c});var e=xh(this);b=G(b,c);var e=Jb(b,e),f=this.vd++,e=bh(this.K,a,e,f,!0);Ze(this.ca,e);var h=this;this.va.put(a.toString(),b.H(!0),function(b,c){var e="ok"===b;e||J("set at "+a+" failed: "+b);e=eh(h.K,f,!e);cf(h.ca,a,e);Ah(d,b,c)});e=Bh(this,a);yh(this,e);cf(this.ca,e,[])};
g.update=function(a,b,c){this.f("update",{path:a.toString(),value:b});var d=!0,e=xh(this),f={};v(b,function(a,b){d=!1;var c=G(a);f[b]=Jb(c,e)});if(d)I("update() called with empty data.  Don't do anything."),Ah(c,"ok");else{var h=this.vd++,k=dh(this.K,a,f,h);Ze(this.ca,k);var m=this;this.va.af(a.toString(),b,function(b,d){var e="ok"===b;e||J("update at "+a+" failed: "+b);var e=eh(m.K,h,!e),f=a;0<e.length&&(f=yh(m,a));cf(m.ca,f,e);Ah(c,b,d)});v(b,function(b,c){var d=Bh(m,a.n(c));yh(m,d)});cf(this.ca,
a,[])}};function zh(a){a.f("onDisconnectEvents");var b=xh(a),c=[];Hb(Fb(a.ia,b),Q,function(b,e){c=c.concat(ch(a.K,new ce(ie,b,e)));var f=Bh(a,b);yh(a,f)});a.ia=new Gb;cf(a.ca,Q,c)}g.xd=function(a,b){var c=this;this.va.xd(a.toString(),function(d,e){"ok"===d&&Yd(c.ia,a);Ah(b,d,e)})};function Ch(a,b,c,d){var e=G(c);a.va.re(b.toString(),e.H(!0),function(c,h){"ok"===c&&Ib(a.ia,b,e);Ah(d,c,h)})}
function Dh(a,b,c,d,e){var f=G(c,d);a.va.re(b.toString(),f.H(!0),function(c,d){"ok"===c&&Ib(a.ia,b,f);Ah(e,c,d)})}function Eh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(I("onDisconnect().update() called with empty data.  Don't do anything."),Ah(d,"ok")):a.va.cf(b.toString(),c,function(e,f){if("ok"===e)for(var m in c){var l=G(c[m]);Ib(a.ia,b.n(m),l)}Ah(d,e,f)})}function Fh(a,b,c){c=".info"===K(b.path)?a.pd.Nb(b,c):a.K.Nb(b,c);af(a.ca,b.path,c)}g.ab=function(){this.Ra&&this.Ra.ab("repo_interrupt")};
g.kc=function(){this.Ra&&this.Ra.kc("repo_interrupt")};g.Be=function(a){if("undefined"!==typeof console){a?(this.Vc||(this.Vc=new Kf(this.Va)),a=this.Vc.get()):a=this.Va.get();var b=Ba(Oa(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};g.Ce=function(a){Mf(this.Va,a);this.og.rf[a]=!0};g.f=function(a){var b="";this.Ra&&(b=this.Ra.id+":");I(b,arguments)};
function Ah(a,b,c){a&&fc(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};function Gh(a,b,c,d,e){function f(){}a.f("transaction on "+b);var h=new U(a,b);h.gc("value",f);c={path:b,update:c,G:d,status:null,ef:Lb(),He:e,of:0,Rd:function(){h.Ic("value",f)},Td:null,Ba:null,cd:null,dd:null,ed:null};d=a.K.Aa(b,void 0)||L;c.cd=d;d=c.update(d.H());if(n(d)){Pd("transaction failed: Data returned ",d,c.path);c.status=1;e=Uc(a.mc,b);var k=e.Ca()||[];k.push(c);Vc(e,k);"object"===typeof d&&null!==d&&eb(d,".priority")?(k=w(d,".priority"),D(Nd(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):
k=(a.K.Aa(b)||L).C().H();e=xh(a);d=G(d,k);e=Jb(d,e);c.dd=d;c.ed=e;c.Ba=a.vd++;c=bh(a.K,b,e,c.Ba,c.He);cf(a.ca,b,c);Hh(a)}else c.Rd(),c.dd=null,c.ed=null,c.G&&(a=new V(c.cd,new U(a,c.path),H),c.G(null,!1,a))}function Hh(a,b){var c=b||a.mc;b||Ih(a,c);if(null!==c.Ca()){var d=Jh(a,c);D(0<d.length,"Sending zero length transaction queue");Ca(d,function(a){return 1===a.status})&&Kh(a,c.path(),d)}else c.kd()&&c.O(function(b){Hh(a,b)})}
function Kh(a,b,c){for(var d=Aa(c,function(a){return a.Ba}),e=a.K.Aa(b,d)||L,d=e,e=e.hash(),f=0;f<c.length;f++){var h=c[f];D(1===h.status,"tryToSendTransactionQueue_: items in queue should all be run.");h.status=2;h.of++;var k=P(b,h.path),d=d.F(k,h.dd)}d=d.H(!0);a.va.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(eh(a.K,c[f].Ba));if(c[f].G){var h=c[f].ed,k=new U(a,c[f].path);d.push(q(c[f].G,
null,null,!0,new V(h,k,H)))}c[f].Rd()}Ih(a,Uc(a.mc,b));Hh(a);cf(a.ca,b,e);for(f=0;f<d.length;f++)fc(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(J("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Td=d;yh(a,b)}},e)}function yh(a,b){var c=Lh(a,b),d=c.path(),c=Jh(a,c);Mh(a,c,d);return d}
function Mh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=za(b,function(a){return 1===a.status}),f=Aa(f,function(a){return a.Ba}),h=0;h<b.length;h++){var k=b[h],m=P(c,k.path),l=!1,u;D(null!==m,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)l=!0,u=k.Td,e=e.concat(eh(a.K,k.Ba,!0));else if(1===k.status)if(25<=k.of)l=!0,u="maxretry",e=e.concat(eh(a.K,k.Ba,!0));else{var z=a.K.Aa(k.path,f)||L;k.cd=z;var F=b[h].update(z.H());n(F)?(Pd("transaction failed: Data returned ",F,
k.path),m=G(F),"object"===typeof F&&null!=F&&eb(F,".priority")||(m=m.fa(z.C())),z=k.Ba,F=xh(a),F=Jb(m,F),k.dd=m,k.ed=F,k.Ba=a.vd++,Fa(f,z),e=e.concat(bh(a.K,k.path,F,k.Ba,k.He)),e=e.concat(eh(a.K,z,!0))):(l=!0,u="nodata",e=e.concat(eh(a.K,k.Ba,!0)))}cf(a.ca,c,e);e=[];l&&(b[h].status=3,setTimeout(b[h].Rd,Math.floor(0)),b[h].G&&("nodata"===u?(k=new U(a,b[h].path),d.push(q(b[h].G,null,null,!1,new V(b[h].cd,k,H)))):d.push(q(b[h].G,null,Error(u),!1,null))))}Ih(a,a.mc);for(h=0;h<d.length;h++)fc(d[h]);Hh(a)}}
function Lh(a,b){for(var c,d=a.mc;null!==(c=K(b))&&null===d.Ca();)d=Uc(d,c),b=N(b);return d}function Jh(a,b){var c=[];Nh(a,b,c);c.sort(function(a,b){return a.ef-b.ef});return c}function Nh(a,b,c){var d=b.Ca();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.O(function(b){Nh(a,b,c)})}function Ih(a,b){var c=b.Ca();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Vc(b,0<c.length?c:null)}b.O(function(b){Ih(a,b)})}
function Bh(a,b){var c=Lh(a,b).path(),d=Uc(a.mc,b);Yc(d,function(b){Oh(a,b)});Oh(a,d);Xc(d,function(b){Oh(a,b)});return c}
function Oh(a,b){var c=b.Ca();if(null!==c){for(var d=[],e=[],f=-1,h=0;h<c.length;h++)4!==c[h].status&&(2===c[h].status?(D(f===h-1,"All SENT items should be at beginning of queue."),f=h,c[h].status=4,c[h].Td="set"):(D(1===c[h].status,"Unexpected transaction status in abort"),c[h].Rd(),e=e.concat(eh(a.K,c[h].Ba,!0)),c[h].G&&d.push(q(c[h].G,null,Error("set"),!1,null))));-1===f?Vc(b,null):c.length=f+1;cf(a.ca,b.path(),e);for(h=0;h<d.length;h++)fc(d[h])}};function Ug(){this.lb={};this.wf=!1}Ug.prototype.ab=function(){for(var a in this.lb)this.lb[a].ab()};Ug.prototype.kc=function(){for(var a in this.lb)this.lb[a].kc()};Ug.prototype.ce=function(a){this.wf=a};ca(Ug);Ug.prototype.interrupt=Ug.prototype.ab;Ug.prototype.resume=Ug.prototype.kc;var W={};W.nc=Ag;W.DataConnection=W.nc;Ag.prototype.ng=function(a,b){this.ua("q",{p:a},b)};W.nc.prototype.simpleListen=W.nc.prototype.ng;Ag.prototype.Hf=function(a,b){this.ua("echo",{d:a},b)};W.nc.prototype.echo=W.nc.prototype.Hf;Ag.prototype.interrupt=Ag.prototype.ab;W.zf=og;W.RealTimeConnection=W.zf;og.prototype.sendRequest=og.prototype.ua;og.prototype.close=og.prototype.close;
W.Rf=function(a){var b=Ag.prototype.put;Ag.prototype.put=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){Ag.prototype.put=b}};W.hijackHash=W.Rf;W.yf=zb;W.ConnectionTarget=W.yf;W.ja=function(a){return a.ja()};W.queryIdentifier=W.ja;W.Uf=function(a){return a.u.Ra.$};W.listens=W.Uf;W.ce=function(a){Ug.Vb().ce(a)};W.forceRestClient=W.ce;W.Context=Ug;function Ph(a,b){this.committed=a;this.snapshot=b};function X(a,b,c,d){this.u=a;this.path=b;this.m=c;this.Nc=d}
function Qh(a){var b=null,c=null;a.ka&&(b=ff(a));a.na&&(c=hf(a));if(a.g===tc){if(a.ka){if("[MIN_NAME]"!=ef(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.na){if("[MAX_NAME]"!=gf(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.g===H){if(null!=b&&!Nd(b)||null!=c&&!Nd(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(D(a.g instanceof pc||a.g===wc,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
}function Rh(a){if(a.ka&&a.na&&a.xa&&(!a.xa||""===a.mb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Sh(a,b){if(!0===a.Nc)throw Error(b+": You can't combine multiple orderBy calls.");}g=X.prototype;g.wb=function(){y("Query.ref",0,0,arguments.length);return new U(this.u,this.path)};
g.gc=function(a,b,c,d){y("Query.on",2,4,arguments.length);Td("Query.on",a,!1);B("Query.on",2,b,!1);var e=Th("Query.on",c,d);if("value"===a)Fh(this.u,this,new Vg(b,e.cancel||null,e.Ma||null));else{var f={};f[a]=b;Fh(this.u,this,new Wg(f,e.cancel,e.Ma))}return b};
g.Ic=function(a,b,c){y("Query.off",0,3,arguments.length);Td("Query.off",a,!0);B("Query.off",2,b,!0);ob("Query.off",3,c);var d=null,e=null;"value"===a?d=new Vg(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new Wg(e,null,c||null));e=this.u;d=".info"===K(this.path)?e.pd.kb(this,d):e.K.kb(this,d);af(e.ca,this.path,d)};
g.$f=function(a,b){function c(k){f&&(f=!1,e.Ic(a,c),b&&b.call(d.Ma,k),h.resolve(k))}y("Query.once",1,4,arguments.length);Td("Query.once",a,!1);B("Query.once",2,b,!0);var d=Th("Query.once",arguments[2],arguments[3]),e=this,f=!0,h=new ib;kb(h.ra);this.gc(a,c,function(b){e.Ic(a,c);d.cancel&&d.cancel.call(d.Ma,b);h.reject(b)});return h.ra};
g.ne=function(a){y("Query.limitToFirst",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.ne(a),this.Nc)};
g.oe=function(a){y("Query.limitToLast",1,1,arguments.length);if(!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.m.xa)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new X(this.u,this.path,this.m.oe(a),this.Nc)};
g.ag=function(a){y("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Vd("Query.orderByChild",a);Sh(this,"Query.orderByChild");var b=new E(a);if(b.e())throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
b=new pc(b);b=of(this.m,b);Qh(b);return new X(this.u,this.path,b,!0)};g.bg=function(){y("Query.orderByKey",0,0,arguments.length);Sh(this,"Query.orderByKey");var a=of(this.m,tc);Qh(a);return new X(this.u,this.path,a,!0)};g.cg=function(){y("Query.orderByPriority",0,0,arguments.length);Sh(this,"Query.orderByPriority");var a=of(this.m,H);Qh(a);return new X(this.u,this.path,a,!0)};
g.dg=function(){y("Query.orderByValue",0,0,arguments.length);Sh(this,"Query.orderByValue");var a=of(this.m,wc);Qh(a);return new X(this.u,this.path,a,!0)};g.Nd=function(a,b){y("Query.startAt",0,2,arguments.length);Od("Query.startAt",a,this.path,!0);Ud("Query.startAt",b);var c=this.m.Nd(a,b);Rh(c);Qh(c);if(this.m.ka)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new X(this.u,this.path,c,this.Nc)};
g.gd=function(a,b){y("Query.endAt",0,2,arguments.length);Od("Query.endAt",a,this.path,!0);Ud("Query.endAt",b);var c=this.m.gd(a,b);Rh(c);Qh(c);if(this.m.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new X(this.u,this.path,c,this.Nc)};
g.If=function(a,b){y("Query.equalTo",1,2,arguments.length);Od("Query.equalTo",a,this.path,!1);Ud("Query.equalTo",b);if(this.m.ka)throw Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");if(this.m.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.Nd(a,b).gd(a,b)};
g.toString=function(){y("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])));return this.u.toString()+(b||"/")};g.toJSON=function(){y("Query.toJSON",0,1,arguments.length);return this.toString()};g.ja=function(){var a=ac(pf(this.m));return"{}"===a?"default":a};
g.isEqual=function(a){y("Query.isEqual",1,1,arguments.length);if(!(a instanceof X))throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");var b=this.u===a.u,c=this.path.Z(a.path),d=this.ja()===a.ja();return b&&c&&d};
function Th(a,b,c){var d={cancel:null,Ma:null};if(b&&c)d.cancel=b,B(a,3,d.cancel,!0),d.Ma=c,ob(a,4,d.Ma);else if(b)if("object"===typeof b&&null!==b)d.Ma=b;else if("function"===typeof b)d.cancel=b;else throw Error(A(a,3,!0)+" must either be a cancel callback or a context object.");return d}X.prototype.on=X.prototype.gc;X.prototype.off=X.prototype.Ic;X.prototype.once=X.prototype.$f;X.prototype.limitToFirst=X.prototype.ne;X.prototype.limitToLast=X.prototype.oe;X.prototype.orderByChild=X.prototype.ag;
X.prototype.orderByKey=X.prototype.bg;X.prototype.orderByPriority=X.prototype.cg;X.prototype.orderByValue=X.prototype.dg;X.prototype.startAt=X.prototype.Nd;X.prototype.endAt=X.prototype.gd;X.prototype.equalTo=X.prototype.If;X.prototype.toString=X.prototype.toString;X.prototype.isEqual=X.prototype.isEqual;gc(X.prototype,"ref",X.prototype.wb);function Y(a,b){this.ta=a;this.qa=b}Y.prototype.cancel=function(a){y("Firebase.onDisconnect().cancel",0,1,arguments.length);B("Firebase.onDisconnect().cancel",1,a,!0);var b=new ib;this.ta.xd(this.qa,jb(b,a));return b.ra};Y.prototype.cancel=Y.prototype.cancel;Y.prototype.remove=function(a){y("Firebase.onDisconnect().remove",0,1,arguments.length);Wd("Firebase.onDisconnect().remove",this.qa);B("Firebase.onDisconnect().remove",1,a,!0);var b=new ib;Ch(this.ta,this.qa,null,jb(b,a));return b.ra};
Y.prototype.remove=Y.prototype.remove;Y.prototype.set=function(a,b){y("Firebase.onDisconnect().set",1,2,arguments.length);Wd("Firebase.onDisconnect().set",this.qa);Od("Firebase.onDisconnect().set",a,this.qa,!1);B("Firebase.onDisconnect().set",2,b,!0);var c=new ib;Ch(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.set=Y.prototype.set;
Y.prototype.Jb=function(a,b,c){y("Firebase.onDisconnect().setWithPriority",2,3,arguments.length);Wd("Firebase.onDisconnect().setWithPriority",this.qa);Od("Firebase.onDisconnect().setWithPriority",a,this.qa,!1);Sd("Firebase.onDisconnect().setWithPriority",2,b);B("Firebase.onDisconnect().setWithPriority",3,c,!0);var d=new ib;Dh(this.ta,this.qa,a,b,jb(d,c));return d.ra};Y.prototype.setWithPriority=Y.prototype.Jb;
Y.prototype.update=function(a,b){y("Firebase.onDisconnect().update",1,2,arguments.length);Wd("Firebase.onDisconnect().update",this.qa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.onDisconnect().update",a,this.qa);B("Firebase.onDisconnect().update",2,b,!0);
c=new ib;Eh(this.ta,this.qa,a,jb(c,b));return c.ra};Y.prototype.update=Y.prototype.update;var Z={Mf:function(){dg=Zf=!0}};Z.forceLongPolling=Z.Mf;Z.Nf=function(){eg=!0};Z.forceWebSockets=Z.Nf;Z.Tf=function(){return Yf.isAvailable()};Z.isWebSocketsAvailable=Z.Tf;Z.lg=function(a,b){a.u.Ra.ze=b};Z.setSecurityDebugCallback=Z.lg;Z.Be=function(a,b){a.u.Be(b)};Z.stats=Z.Be;Z.Ce=function(a,b){a.u.Ce(b)};Z.statsIncrementCounter=Z.Ce;Z.fd=function(a){return a.u.fd};Z.dataUpdateCount=Z.fd;Z.Sf=function(a,b){a.u.je=b};Z.interceptServerData=Z.Sf;function U(a,b){if(!(a instanceof Qg))throw Error("new Firebase() no longer supported - use app.database().");X.call(this,a,b,mf,!1);this.then=void 0;this["catch"]=void 0}la(U,X);g=U.prototype;g.getKey=function(){y("Firebase.key",0,0,arguments.length);return this.path.e()?null:Oc(this.path)};
g.n=function(a){y("Firebase.child",1,1,arguments.length);if(ga(a))a=String(a);else if(!(a instanceof E))if(null===K(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Vd("Firebase.child",b)}else Vd("Firebase.child",a);return new U(this.u,this.path.n(a))};g.getParent=function(){y("Firebase.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new U(this.u,a)};
g.Of=function(){y("Firebase.ref",0,0,arguments.length);for(var a=this;null!==a.getParent();)a=a.getParent();return a};g.Gf=function(){return this.u.Ya};g.set=function(a,b){y("Firebase.set",1,2,arguments.length);Wd("Firebase.set",this.path);Od("Firebase.set",a,this.path,!1);B("Firebase.set",2,b,!0);var c=new ib;this.u.Jb(this.path,a,null,jb(c,b));return c.ra};
g.update=function(a,b){y("Firebase.update",1,2,arguments.length);Wd("Firebase.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;J("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Rd("Firebase.update",a,this.path);B("Firebase.update",2,b,!0);c=new ib;this.u.update(this.path,a,jb(c,b));return c.ra};
g.Jb=function(a,b,c){y("Firebase.setWithPriority",2,3,arguments.length);Wd("Firebase.setWithPriority",this.path);Od("Firebase.setWithPriority",a,this.path,!1);Sd("Firebase.setWithPriority",2,b);B("Firebase.setWithPriority",3,c,!0);if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.setWithPriority failed: "+this.getKey()+" is a read-only object.";var d=new ib;this.u.Jb(this.path,a,b,jb(d,c));return d.ra};
g.remove=function(a){y("Firebase.remove",0,1,arguments.length);Wd("Firebase.remove",this.path);B("Firebase.remove",1,a,!0);return this.set(null,a)};
g.transaction=function(a,b,c){y("Firebase.transaction",1,3,arguments.length);Wd("Firebase.transaction",this.path);B("Firebase.transaction",1,a,!1);B("Firebase.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(A("Firebase.transaction",3,!0)+"must be a boolean.");if(".length"===this.getKey()||".keys"===this.getKey())throw"Firebase.transaction failed: "+this.getKey()+" is a read-only object.";"undefined"===typeof c&&(c=!0);var d=new ib;ha(b)&&kb(d.ra);Gh(this.u,this.path,a,function(a,c,h){a?
d.reject(a):d.resolve(new Ph(c,h));ha(b)&&b(a,c,h)},c);return d.ra};g.kg=function(a,b){y("Firebase.setPriority",1,2,arguments.length);Wd("Firebase.setPriority",this.path);Sd("Firebase.setPriority",1,a);B("Firebase.setPriority",2,b,!0);var c=new ib;this.u.Jb(this.path.n(".priority"),a,null,jb(c,b));return c.ra};
g.push=function(a,b){y("Firebase.push",0,2,arguments.length);Wd("Firebase.push",this.path);Od("Firebase.push",a,this.path,!0);B("Firebase.push",2,b,!0);var c=wh(this.u),d=Kc(c),c=this.n(d),e=this.n(d),d=null!=a?c.set(a,b).then(function(){return e}):hb.resolve(e);c.then=q(d.then,d);c["catch"]=q(d.then,d,void 0);ha(b)&&kb(d);return c};g.ib=function(){Wd("Firebase.onDisconnect",this.path);return new Y(this.u,this.path)};U.prototype.child=U.prototype.n;U.prototype.set=U.prototype.set;
U.prototype.update=U.prototype.update;U.prototype.setWithPriority=U.prototype.Jb;U.prototype.remove=U.prototype.remove;U.prototype.transaction=U.prototype.transaction;U.prototype.setPriority=U.prototype.kg;U.prototype.push=U.prototype.push;U.prototype.onDisconnect=U.prototype.ib;gc(U.prototype,"database",U.prototype.Gf);gc(U.prototype,"key",U.prototype.getKey);gc(U.prototype,"parent",U.prototype.getParent);gc(U.prototype,"root",U.prototype.Of);if("undefined"===typeof firebase)throw Error("Cannot install Firebase Database - be sure to load firebase-app.js first.");
try{firebase.INTERNAL.registerService("database",function(a){var b=Ug.Vb(),c=a.options.databaseURL;n(c)||Vb("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");var d=Wb(c),c=d.jc;Xd("Invalid Firebase Database URL",d);d.path.e()||Vb("Database URL must point to the root of a Firebase Database (not including a child path).");(d=w(b.lb,a.name))&&Vb("FIREBASE INTERNAL ERROR: Database initialized multiple times.");d=new Qg(c,b.wf,a);b.lb[a.name]=
d;return d.Ya},{Reference:U,Query:X,Database:Pg,enableLogging:Sb,INTERNAL:Z,TEST_ACCESS:W,ServerValue:Sg})}catch(Uh){Vb("Failed to register the Firebase Database Service ("+Uh+")")};})();
          

try{webpackJsonpFirebase([1],[,,,,,function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var o,i={AVAILABLE_IN_WINDOW:"only-available-in-window",AVAILABLE_IN_SW:"only-available-in-sw",SHOULD_BE_INHERITED:"should-be-overriden",BAD_SENDER_ID:"bad-sender-id",INCORRECT_GCM_SENDER_ID:"incorrect-gcm-sender-id",PERMISSION_DEFAULT:"permission-default",PERMISSION_BLOCKED:"permission-blocked",UNSUPPORTED_BROWSER:"unsupported-browser",NOTIFICATIONS_BLOCKED:"notifications-blocked",FAILED_DEFAULT_REGISTRATION:"failed-serviceworker-registration",SW_REGISTRATION_EXPECTED:"sw-registration-expected",GET_SUBSCRIPTION_FAILED:"get-subscription-failed",INVALID_SAVED_TOKEN:"invalid-saved-token",SW_REG_REDUNDANT:"sw-reg-redundant",TOKEN_SUBSCRIBE_FAILED:"token-subscribe-failed",TOKEN_SUBSCRIBE_NO_TOKEN:"token-subscribe-no-token",TOKEN_SUBSCRIBE_NO_PUSH_SET:"token-subscribe-no-push-set",USE_SW_BEFORE_GET_TOKEN:"use-sw-before-get-token",INVALID_DELETE_TOKEN:"invalid-delete-token",DELETE_TOKEN_NOT_FOUND:"delete-token-not-found",DELETE_SCOPE_NOT_FOUND:"delete-scope-not-found",BG_HANDLER_FUNCTION_EXPECTED:"bg-handler-function-expected",NO_WINDOW_CLIENT_TO_MSG:"no-window-client-to-msg",UNABLE_TO_RESUBSCRIBE:"unable-to-resubscribe",NO_FCM_TOKEN_FOR_RESUBSCRIBE:"no-fcm-token-for-resubscribe",FAILED_TO_DELETE_TOKEN:"failed-to-delete-token",NO_SW_IN_REG:"no-sw-in-reg",BAD_SCOPE:"bad-scope",BAD_VAPID_KEY:"bad-vapid-key",BAD_SUBSCRIPTION:"bad-subscription",BAD_TOKEN:"bad-token",BAD_PUSH_SET:"bad-push-set",FAILED_DELETE_VAPID_KEY:"failed-delete-vapid-key"},a=(o={},n(o,i.AVAILABLE_IN_WINDOW,"This method is available in a Window context."),n(o,i.AVAILABLE_IN_SW,"This method is available in a service worker context."),n(o,i.SHOULD_BE_INHERITED,"This method should be overriden by extended classes."),n(o,i.BAD_SENDER_ID,"Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp()."),n(o,i.PERMISSION_DEFAULT,"The required permissions were not granted and dismissed instead."),n(o,i.PERMISSION_BLOCKED,"The required permissions were not granted and blocked instead."),n(o,i.UNSUPPORTED_BROWSER,"This browser doesn't support the API's required to use the firebase SDK."),n(o,i.NOTIFICATIONS_BLOCKED,"Notifications have been blocked."),n(o,i.FAILED_DEFAULT_REGISTRATION,"We are unable to register the default service worker. {$browserErrorMessage}"),n(o,i.SW_REGISTRATION_EXPECTED,"A service worker registration was the expected input."),n(o,i.GET_SUBSCRIPTION_FAILED,"There was an error when trying to get any existing Push Subscriptions."),n(o,i.INVALID_SAVED_TOKEN,"Unable to access details of the saved token."),n(o,i.SW_REG_REDUNDANT,"The service worker being used for push was made redundant."),n(o,i.TOKEN_SUBSCRIBE_FAILED,"A problem occured while subscribing the user to FCM: {$message}"),n(o,i.TOKEN_SUBSCRIBE_NO_TOKEN,"FCM returned no token when subscribing the user to push."),n(o,i.TOKEN_SUBSCRIBE_NO_PUSH_SET,"FCM returned an invalid response when getting an FCM token."),n(o,i.USE_SW_BEFORE_GET_TOKEN,"You must call useServiceWorker() before calling getToken() to ensure your service worker is used."),n(o,i.INVALID_DELETE_TOKEN,"You must pass a valid token into deleteToken(), i.e. the token from getToken()."),n(o,i.DELETE_TOKEN_NOT_FOUND,"The deletion attempt for token could not be performed as the token was not found."),n(o,i.DELETE_SCOPE_NOT_FOUND,"The deletion attempt for service worker scope could not be performed as the scope was not found."),n(o,i.BG_HANDLER_FUNCTION_EXPECTED,"The input to setBackgroundMessageHandler() must be a function."),n(o,i.NO_WINDOW_CLIENT_TO_MSG,"An attempt was made to message a non-existant window client."),n(o,i.UNABLE_TO_RESUBSCRIBE,"There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}"),n(o,i.NO_FCM_TOKEN_FOR_RESUBSCRIBE,"Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit."),n(o,i.FAILED_TO_DELETE_TOKEN,"Unable to delete the currently saved token."),n(o,i.NO_SW_IN_REG,"Even though the service worker registration was successful, there was a problem accessing the service worker itself."),n(o,i.INCORRECT_GCM_SENDER_ID,"Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging."),n(o,i.BAD_SCOPE,"The service worker scope must be a string with at least one character."),n(o,i.BAD_VAPID_KEY,"The public VAPID key must be a string with at least one character."),n(o,i.BAD_SUBSCRIPTION,"The subscription must be a valid PushSubscription."),n(o,i.BAD_TOKEN,"The FCM Token used for storage / lookup was not a valid token string."),n(o,i.BAD_PUSH_SET,"The FCM push set used for storage / lookup was not not a valid push set string."),n(o,i.FAILED_DELETE_VAPID_KEY,"The VAPID key could not be deleted."),o);t.default={codes:i,map:a},e.exports=t.default},,,,,,,,,,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(9),s=r(5),u=n(s),c=r(36),f=n(c),l=r(20),_=n(l),d="messagingSenderId",h=function(){function e(t){var r=this;if(o(this,e),this.errorFactory_=new a.ErrorFactory("messaging","Messaging",u.default.map),!t.options[d]||"string"!=typeof t.options[d])throw this.errorFactory_.create(u.default.codes.BAD_SENDER_ID);this.messagingSenderId_=t.options[d],this.tokenManager_=new f.default,this.app=t,this.INTERNAL={},this.INTERNAL.delete=function(){return r.delete}}return i(e,[{key:"getToken",value:function(){var e=this,t=this.getNotificationPermission_();return t!==_.default.granted?t===_.default.denied?Promise.reject(this.errorFactory_.create(u.default.codes.NOTIFICATIONS_BLOCKED)):Promise.resolve(null):this.getSWRegistration_().then(function(t){return e.tokenManager_.getSavedToken(e.messagingSenderId_,t).then(function(r){return r||e.tokenManager_.createToken(e.messagingSenderId_,t)})})}},{key:"deleteToken",value:function(e){var t=this;return this.tokenManager_.deleteToken(e).then(function(){return t.getSWRegistration_().then(function(e){if(e)return e.pushManager.getSubscription()}).then(function(e){if(e)return e.unsubscribe()})})}},{key:"getSWRegistration_",value:function(){throw this.errorFactory_.create(u.default.codes.SHOULD_BE_INHERITED)}},{key:"requestPermission",value:function(){throw this.errorFactory_.create(u.default.codes.AVAILABLE_IN_WINDOW)}},{key:"useServiceWorker",value:function(){throw this.errorFactory_.create(u.default.codes.AVAILABLE_IN_WINDOW)}},{key:"onMessage",value:function(){throw this.errorFactory_.create(u.default.codes.AVAILABLE_IN_WINDOW)}},{key:"onTokenRefresh",value:function(){throw this.errorFactory_.create(u.default.codes.AVAILABLE_IN_WINDOW)}},{key:"setBackgroundMessageHandler",value:function(){throw this.errorFactory_.create(u.default.codes.AVAILABLE_IN_SW)}},{key:"delete",value:function(){this.tokenManager_.closeDatabase()}},{key:"getNotificationPermission_",value:function(){return Notification.permission}},{key:"getTokenManager",value:function(){return this.tokenManager_}}]),e}();t.default=h,e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110],o={userVisibleOnly:!0,applicationServerKey:new Uint8Array(n)};t.default={ENDPOINT:"https://fcm.googleapis.com",APPLICATION_SERVER_KEY:n,SUBSCRIPTION_OPTIONS:o},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={granted:"granted",default:"default",denied:"denied"},e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var o={TYPE_OF_MSG:"firebase-messaging-msg-type",DATA:"firebase-messaging-msg-data"},i={PUSH_MSG_RECEIVED:"push-msg-received",NOTIFICATION_CLICKED:"notification-clicked"},a=function(e,t){var r;return r={},n(r,o.TYPE_OF_MSG,e),n(r,o.DATA,t),r};t.default={PARAMS:o,TYPES_OF_MSG:i,createNewMsg:a},e.exports=t.default},,,,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(18),l=n(f),_=r(5),d=n(_),h=r(21),E=n(h),p=r(19),g=n(p),T=function(e){function t(e){i(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return self.addEventListener("push",function(e){return r.onPush_(e)},!1),self.addEventListener("pushsubscriptionchange",function(e){return r.onSubChange_(e)},!1),self.addEventListener("notificationclick",function(e){return r.onNotificationClick_(e)},!1),r.bgMessageHandler_=null,r}return s(t,e),c(t,[{key:"onPush_",value:function(e){var t=this,r=void 0;try{r=e.data.json()}catch(e){return}var n=this.hasVisibleClients_().then(function(e){if(e){if(r.notification||t.bgMessageHandler_)return t.sendMessageToWindowClients_(r)}else{var n=t.getNotificationData_(r);if(n){var o=n.title||"";return self.registration.showNotification(o,n)}if(t.bgMessageHandler_)return t.bgMessageHandler_(r)}});e.waitUntil(n)}},{key:"onSubChange_",value:function(e){var t=this,r=this.getToken().then(function(e){if(!e)throw t.errorFactory_.create(d.default.codes.NO_FCM_TOKEN_FOR_RESUBSCRIBE);var r=null,n=t.getTokenManager();return n.getTokenDetailsFromToken(e).then(function(e){if(!(r=e))throw t.errorFactory_.create(d.default.codes.INVALID_SAVED_TOKEN);return self.registration.pushManager.subscribe(g.default.SUBSCRIPTION_OPTIONS)}).then(function(e){return n.subscribeToFCM(r.fcmSenderId,e,r.fcmPushSet)}).catch(function(e){return n.deleteToken(r.fcmToken).then(function(){throw t.errorFactory_.create(d.default.codes.UNABLE_TO_RESUBSCRIBE,{message:e})})})});e.waitUntil(r)}},{key:"onNotificationClick_",value:function(e){var t=this;if(e.notification&&e.notification.data&&e.notification.data.FCM_MSG){e.stopImmediatePropagation(),e.notification.close();var r=e.notification.data.FCM_MSG,n=r.notification.click_action;if(n){var o=this.getWindowClient_(n).then(function(e){return e||self.clients.openWindow(n)}).then(function(e){if(e){r.notification,delete r.notification;var n=E.default.createNewMsg(E.default.TYPES_OF_MSG.NOTIFICATION_CLICKED,r);return t.attemptToMessageClient_(e,n)}});e.waitUntil(o)}}}},{key:"getNotificationData_",value:function(e){if(e&&"object"===u(e.notification)){var t=Object.assign({},e.notification);return t.data=o({},"FCM_MSG",e),t}}},{key:"setBackgroundMessageHandler",value:function(e){if(e&&"function"!=typeof e)throw this.errorFactory_.create(d.default.codes.BG_HANDLER_FUNCTION_EXPECTED);this.bgMessageHandler_=e}},{key:"getWindowClient_",value:function(e){var t=new URL(e).href;return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(e){for(var r=null,n=0;n<e.length;n++){if(new URL(e[n].url).href===t){r=e[n];break}}if(r)return r.focus(),r})}},{key:"attemptToMessageClient_",value:function(e,t){var r=this;return new Promise(function(n,o){if(!e)return o(r.errorFactory_.create(d.default.codes.NO_WINDOW_CLIENT_TO_MSG));e.postMessage(t),n()})}},{key:"hasVisibleClients_",value:function(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(e){return e.some(function(e){return"visible"===e.visibilityState})})}},{key:"sendMessageToWindowClients_",value:function(e){var t=this;return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(function(r){var n=E.default.createNewMsg(E.default.TYPES_OF_MSG.PUSH_MSG_RECEIVED,e);return Promise.all(r.map(function(e){return t.attemptToMessageClient_(e,n)}))})}},{key:"getSWRegistration_",value:function(){return Promise.resolve(self.registration)}}]),t}(l.default);t.default=T,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},c=r(18),f=n(c),l=r(5),_=n(l),d=r(21),h=n(d),E=r(35),p=n(E),g=r(20),T=n(g),S=r(17),v=function(e){function t(e){o(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.registrationToUse_,r.manifestCheckPromise_,r.messageObserver_=null,r.onMessage_=(0,S.createSubscribe)(function(e){r.messageObserver_=e}),r.tokenRefreshObserver_=null,r.onTokenRefresh_=(0,S.createSubscribe)(function(e){r.tokenRefreshObserver_=e}),r.setupSWMessageListener_(),r}return a(t,e),s(t,[{key:"getToken",value:function(){var e=this;return this.isSupported_()?this.manifestCheck_().then(function(){return u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getToken",e).call(e)}):Promise.reject(this.errorFactory_.create(_.default.codes.UNSUPPORTED_BROWSER))}},{key:"manifestCheck_",value:function(){var e=this;if(this.manifestCheckPromise_)return this.manifestCheckPromise_;var t=document.querySelector('link[rel="manifest"]');return this.manifestCheckPromise_=t?fetch(t.href).then(function(e){return e.json()}).catch(function(){return Promise.resolve()}).then(function(t){if(t&&t.gcm_sender_id&&"103953800507"!==t.gcm_sender_id)throw e.errorFactory_.create(_.default.codes.INCORRECT_GCM_SENDER_ID)}):Promise.resolve(),this.manifestCheckPromise_}},{key:"requestPermission",value:function(){var e=this;return Notification.permission===T.default.granted?Promise.resolve():new Promise(function(t,r){var n=function(n){return n===T.default.granted?t():r(n===T.default.denied?e.errorFactory_.create(_.default.codes.PERMISSION_BLOCKED):e.errorFactory_.create(_.default.codes.PERMISSION_DEFAULT))},o=Notification.requestPermission(function(e){o||n(e)});o&&o.then(n)})}},{key:"useServiceWorker",value:function(e){if(!(e instanceof ServiceWorkerRegistration))throw this.errorFactory_.create(_.default.codes.SW_REGISTRATION_EXPECTED);if(void 0!==this.registrationToUse_)throw this.errorFactory_.create(_.default.codes.USE_SW_BEFORE_GET_TOKEN);this.registrationToUse_=e}},{key:"onMessage",value:function(e,t,r){return this.onMessage_(e,t,r)}},{key:"onTokenRefresh",value:function(e,t,r){return this.onTokenRefresh_(e,t,r)}},{key:"waitForRegistrationToActivate_",value:function(e){var t=this,r=e.installing||e.waiting||e.active;return new Promise(function(n,o){if(!r)return void o(t.errorFactory_.create(_.default.codes.NO_SW_IN_REG));if("activated"===r.state)return void n(e);if("redundant"===r.state)return void o(t.errorFactory_.create(_.default.codes.SW_REG_REDUNDANT));var i=function(){if("activated"===r.state)n(e);else{if("redundant"!==r.state)return;o(t.errorFactory_.create(_.default.codes.SW_REG_REDUNDANT))}r.removeEventListener("statechange",i)};r.addEventListener("statechange",i)})}},{key:"getSWRegistration_",value:function(){var e=this;return this.registrationToUse_?this.waitForRegistrationToActivate_(this.registrationToUse_):(this.registrationToUse_=null,navigator.serviceWorker.register(p.default.path,{scope:p.default.scope}).catch(function(t){throw e.errorFactory_.create(_.default.codes.FAILED_DEFAULT_REGISTRATION,{browserErrorMessage:t.message})}).then(function(t){return e.waitForRegistrationToActivate_(t).then(function(){return e.registrationToUse_=t,t.update(),t})}))}},{key:"setupSWMessageListener_",value:function(){var e=this;"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data[h.default.PARAMS.TYPE_OF_MSG]){var r=t.data;switch(r[h.default.PARAMS.TYPE_OF_MSG]){case h.default.TYPES_OF_MSG.PUSH_MSG_RECEIVED:case h.default.TYPES_OF_MSG.NOTIFICATION_CLICKED:var n=r[h.default.PARAMS.DATA];e.messageObserver_.next(n)}}},!1)}},{key:"isSupported_",value:function(){return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}}]),t}(f.default);t.default=v,e.exports=t.default},,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){e.INTERNAL.registerService("messaging",function(e){return self&&"ServiceWorkerGlobalScope"in self?new u.default(e):new a.default(e)},{Messaging:a.default})}Object.defineProperty(t,"__esModule",{value:!0}),t.registerMessaging=o;var i=r(29),a=n(i),s=r(28),u=n(s);o(n(r(4)).default)},function(e,t,r){"use strict";function n(e){var t=new Uint8Array(e);return window.btoa(String.fromCharCode.apply(null,t))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return n(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={path:"/firebase-messaging-sw.js",scope:"/firebase-cloud-messaging-push-scope"},e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(9),s=r(5),u=n(s),c=r(34),f=n(c),l=r(19),_=n(l),d="fcm_token_object_Store",h=function(){function e(){o(this,e),this.errorFactory_=new a.ErrorFactory("messaging","Messaging",u.default.map),this.openDbPromise_=null}return i(e,[{key:"openDatabase_",value:function(){return this.openDbPromise_?this.openDbPromise_:(this.openDbPromise_=new Promise(function(e,t){var r=indexedDB.open("fcm_token_details_db",1);r.onerror=function(e){t(e.target.error)},r.onsuccess=function(t){e(t.target.result)},r.onupgradeneeded=function(e){var t=e.target.result,r=t.createObjectStore(d,{keyPath:"swScope"});r.createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0})}}),this.openDbPromise_)}},{key:"closeDatabase",value:function(){var e=this;return this.openDbPromise_?this.openDbPromise_.then(function(t){t.close(),e.openDbPromise_=null}):Promise.resolve()}},{key:"getTokenDetailsFromToken",value:function(e){return this.openDatabase_().then(function(t){return new Promise(function(r,n){var o=t.transaction([d]),i=o.objectStore(d),a=i.index("fcmToken"),s=a.get(e);s.onerror=function(e){n(e.target.error)},s.onsuccess=function(e){r(e.target.result)}})})}},{key:"getTokenDetailsFromSWScope_",value:function(e){return this.openDatabase_().then(function(t){return new Promise(function(r,n){var o=t.transaction([d]),i=o.objectStore(d),a=i.get(e);a.onerror=function(e){n(e.target.error)},a.onsuccess=function(e){r(e.target.result)}})})}},{key:"getAllTokenDetailsForSenderId_",value:function(e){return this.openDatabase_().then(function(t){return new Promise(function(r,n){var o=t.transaction([d]),i=o.objectStore(d),a=[],s=i.openCursor();s.onerror=function(e){n(e.target.error)},s.onsuccess=function(t){var n=t.target.result;n?(n.value.fcmSenderId===e&&a.push(n.value),n.continue()):r(a)}})})}},{key:"subscribeToFCM",value:function(e,t,r){var n=this,o=(0,f.default)(t.getKey("p256dh")),i=(0,f.default)(t.getKey("auth")),a="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+o+"&encryption_auth="+i;r&&(a+="&pushSet="+r);var s=new Headers;s.append("Content-Type","application/x-www-form-urlencoded");var c={method:"POST",headers:s,body:a};return fetch(_.default.ENDPOINT+"/fcm/connect/subscribe",c).then(function(e){return e.json()}).then(function(e){var t=e;if(t.error){var r=t.error.message;throw n.errorFactory_.create(u.default.codes.TOKEN_SUBSCRIBE_FAILED,{message:r})}if(!t.token)throw n.errorFactory_.create(u.default.codes.TOKEN_SUBSCRIBE_NO_TOKEN);if(!t.pushSet)throw n.errorFactory_.create(u.default.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);return{token:t.token,pushSet:t.pushSet}})}},{key:"isSameSubscription_",value:function(e,t){return e.endpoint===t.endpoint&&(0,f.default)(e.getKey("auth"))===t.auth&&(0,f.default)(e.getKey("p256dh"))===t.p256dh}},{key:"saveTokenDetails_",value:function(e,t,r,n,o){var i={swScope:t.scope,endpoint:r.endpoint,auth:(0,f.default)(r.getKey("auth")),p256dh:(0,f.default)(r.getKey("p256dh")),fcmToken:n,fcmPushSet:o,fcmSenderId:e};return this.openDatabase_().then(function(e){return new Promise(function(t,r){var n=e.transaction([d],"readwrite"),o=n.objectStore(d),a=o.put(i);a.onerror=function(e){r(e.target.error)},a.onsuccess=function(){t()}})})}},{key:"getSavedToken",value:function(e,t){var r=this;return t instanceof ServiceWorkerRegistration?"string"!=typeof e||0===e.length?Promise.reject(this.errorFactory_.create(u.default.codes.BAD_SENDER_ID)):this.getAllTokenDetailsForSenderId_(e).then(function(r){if(0!==r.length){var n=r.findIndex(function(r){return t.scope===r.swScope&&e===r.fcmSenderId});if(-1!==n)return r[n]}}).then(function(e){if(e)return t.pushManager.getSubscription().catch(function(){throw r.errorFactory_.create(u.default.codes.GET_SUBSCRIPTION_FAILED)}).then(function(t){if(t&&r.isSameSubscription_(t,e))return e.fcmToken})}):Promise.reject(this.errorFactory_.create(u.default.codes.SW_REGISTRATION_EXPECTED))}},{key:"createToken",value:function(e,t){var r=this;if("string"!=typeof e||0===e.length)return Promise.reject(this.errorFactory_.create(u.default.codes.BAD_SENDER_ID));if(!(t instanceof ServiceWorkerRegistration))return Promise.reject(this.errorFactory_.create(u.default.codes.SW_REGISTRATION_EXPECTED));var n=void 0,o=void 0;return t.pushManager.getSubscription().then(function(e){return e||t.pushManager.subscribe(_.default.SUBSCRIPTION_OPTIONS)}).then(function(t){return n=t,r.subscribeToFCM(e,n)}).then(function(i){return o=i,r.saveTokenDetails_(e,t,n,o.token,o.pushSet)}).then(function(){return o.token})}},{key:"deleteToken",value:function(e){var t=this;return"string"!=typeof e||0===e.length?Promise.reject(this.errorFactory_.create(u.default.codes.INVALID_DELETE_TOKEN)):this.getTokenDetailsFromToken(e).then(function(e){if(!e)throw t.errorFactory_.create(u.default.codes.DELETE_TOKEN_NOT_FOUND);return t.openDatabase_().then(function(r){return new Promise(function(n,o){var i=r.transaction([d],"readwrite"),a=i.objectStore(d),s=a.delete(e.swScope);s.onerror=function(e){o(e.target.error)},s.onsuccess=function(r){if(0===r.target.result)return void o(t.errorFactory_.create(u.default.codes.FAILED_TO_DELETE_TOKEN));n(e)}})})})}}]),e}();t.default=h,e.exports=t.default}],[33])}catch(e){throw new Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.")}

try{webpackJsonpFirebase([0],[function(e,t,n){"use strict";function r(e){return null!=e}function a(e){return void 0!==e}function o(e){return"function"==typeof e}function i(e){return"object"===(void 0===e?"undefined":h(e))}function u(e){return i(e)&&null!==e}function s(e){return i(e)&&!Array.isArray(e)}function l(e){return"string"==typeof e||e instanceof String}function c(e){return"number"==typeof e||e instanceof Number}function f(e){return d()&&e instanceof Blob}function d(){return"undefined"!=typeof Blob}Object.defineProperty(t,"__esModule",{value:!0});var h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.isDef=r,t.isJustDef=a,t.isFunction=o,t.isObject=i,t.isNonNullObject=u,t.isNonArrayObject=s,t.isString=l,t.isNumber=c,t.isNativeBlob=f,t.isNativeBlobDefined=d},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){return"storage/"+e}function o(){return new C(A.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function i(e){return new C(A.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function u(e){return new C(A.BUCKET_NOT_FOUND,"Bucket '"+e+"' does not exist.")}function s(e){return new C(A.PROJECT_NOT_FOUND,"Project '"+e+"' does not exist.")}function l(e){return new C(A.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function c(){return new C(A.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again.")}function f(e){return new C(A.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function d(){return new C(A.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function h(e,t,n){return new C(A.INVALID_CHECKSUM,"Uploaded/downloaded object '"+e+"' has checksum '"+t+"' which does not match '"+n+"'. Please retry the upload/download.")}function p(){return new C(A.CANCELED,"User canceled the upload/download.")}function v(e){return new C(A.INVALID_EVENT_NAME,"Invalid event name '"+e+"'.")}function _(e){return new C(A.INVALID_URL,"Invalid URL '"+e+"'.")}function y(e){return new C(A.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function b(){return new C(A.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+N.configOption+"' property when initializing the app?")}function m(){return new C(A.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function k(){return new C(A.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function g(){return new C(A.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function R(e,t,n){return new C(A.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+n)}function w(e,t,n,r){var a=void 0,o=void 0;return e===t?(a=e,o=1===e?"argument":"arguments"):(a="between "+e+" and "+t,o="arguments"),new C(A.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+n+"`: Expected "+a+" "+o+", received "+r+".")}function S(){return new C(A.APP_DELETED,"The Firebase app was deleted.")}function E(e){return new C(A.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function T(e,t){return new C(A.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function O(e){throw new C(A.INTERNAL_ERROR,"Internal error: "+e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Code=t.errors=t.FirebaseStorageError=void 0;var U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.prependCode=a,t.unknown=o,t.objectNotFound=i,t.bucketNotFound=u,t.projectNotFound=s,t.quotaExceeded=l,t.unauthenticated=c,t.unauthorized=f,t.retryLimitExceeded=d,t.invalidChecksum=h,t.canceled=p,t.invalidEventName=v,t.invalidUrl=_,t.invalidDefaultBucket=y,t.noDefaultBucket=b,t.cannotSliceBlob=m,t.serverFileWrongSize=k,t.noDownloadURL=g,t.invalidArgument=R,t.invalidArgumentCount=w,t.appDeleted=S,t.invalidRootOperation=E,t.invalidFormat=T,t.internalError=O;var N=n(6),C=t.FirebaseStorageError=function(){function e(t,n){r(this,e),this.code_=a(t),this.message_="Firebase Storage: "+n,this.serverResponse_=null,this.name_="FirebaseError"}return U(e,[{key:"codeProp",value:function(){return this.code}},{key:"codeEquals",value:function(e){return a(e)===this.codeProp()}},{key:"serverResponseProp",value:function(){return this.serverResponse_}},{key:"setServerResponseProp",value:function(e){this.serverResponse_=e}},{key:"name",get:function(){return this.name_}},{key:"code",get:function(){return this.code_}},{key:"message",get:function(){return this.message_}},{key:"serverResponse",get:function(){return this.serverResponse_}}]),e}(),A=(t.errors={},t.Code={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"})},function(e,t,n){"use strict";function r(e){return new i.local.Promise(e)}function a(e){return i.local.Promise.resolve(e)}function o(e){return i.local.Promise.reject(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.make=r,t.resolve=a,t.reject=o;var i=n(10)},function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function a(e,t){for(var n in e)r(e,n)&&t(n,e[n])}function o(e){if(null==e)return{};var t={};return a(e,function(e,n){t[e]=n}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.contains=r,t.forEach=a,t.clone=o},,,function(e,t,n){"use strict";function r(e){e=e}Object.defineProperty(t,"__esModule",{value:!0}),t.setDomainBase=r;t.domainBase="https://firebasestorage.googleapis.com",t.downloadBase="https://firebasestorage.googleapis.com",t.apiBaseUrl="/v0",t.apiUploadBaseUrl="/v0",t.configOption="storageBucket",t.shortMaxOperationRetryTime=6e4,t.defaultMaxOperationRetryTime=12e4,t.defaultMaxUploadRetryTime=6e4,t.minSafeInteger=-9007199254740991},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Location=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.Location=function(){function e(t,n){r(this,e),this.bucket=t,this.path_=n}return a(e,[{key:"fullServerUrl",value:function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}},{key:"bucketOnlyServerUrl",value:function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}},{key:"path",get:function(){return this.path_}}],[{key:"makeFromBucketSpec",value:function(t){var n=void 0;try{n=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===n.path)return n;throw i.invalidDefaultBucket(t)}},{key:"makeFromUrl",value:function(t){for(var n=null,r=new RegExp("^gs://([A-Za-z0-9.\\-]+)(/(.*))?$","i"),a=new RegExp("^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-]+)/o(/([^?#]*).*)?$","i"),o=[{regex:r,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:a,indices:{bucket:1,path:3},postModify:function(e){e.path_=decodeURIComponent(e.path)}}],u=0;u<o.length;u++){var s=o[u],l=s.regex.exec(t);if(l){var c=l[s.indices.bucket],f=l[s.indices.path];f||(f=""),n=new e(c,f),s.postModify(n);break}}if(null==n)throw i.invalidUrl(t);return n}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e){switch(e){case p.RAW:case p.BASE64:case p.BASE64URL:case p.DATA_URL:return;default:throw"Expected one of the event types: ["+p.RAW+", "+p.BASE64+", "+p.BASE64URL+", "+p.DATA_URL+"]."}}function o(e,t){switch(e){case p.RAW:return new v(i(t));case p.BASE64:case p.BASE64URL:return new v(s(e,t));case p.DATA_URL:return new v(l(t),c(t))}throw h.unknown()}function i(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){var a=n<e.length-1&&56320==(64512&e.charCodeAt(n+1));if(a){var o=r,i=e.charCodeAt(++n);r=65536|(1023&o)<<10|1023&i,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function u(e){var t=void 0;try{t=decodeURIComponent(e)}catch(e){throw h.invalidFormat(p.DATA_URL,"Malformed data URL.")}return i(t)}function s(e,t){switch(e){case p.BASE64:var n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){var a=n?"-":"_";throw h.invalidFormat(e,"Invalid character '"+a+"' found: is it base64url encoded?")}break;case p.BASE64URL:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i){var u=o?"+":"/";throw h.invalidFormat(e,"Invalid character '"+u+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/")}var s=void 0;try{s=atob(t)}catch(t){throw h.invalidFormat(e,"Invalid character found")}for(var l=new Uint8Array(s.length),c=0;c<s.length;c++)l[c]=s.charCodeAt(c);return l}function l(e){var t=new _(e);return t.base64?s(p.BASE64,t.rest):u(t.rest)}function c(e){return new _(e).contentType}function f(e,t){return!!(e.length>=t.length)&&e.substring(e.length-t.length)===t}Object.defineProperty(t,"__esModule",{value:!0}),t.StringData=t.StringFormat=void 0,t.formatValidator=a,t.dataFromString=o,t.utf8Bytes_=i,t.percentEncodedBytes_=u,t.base64Bytes_=s,t.dataURLBytes_=l,t.dataURLContentType_=c;var d=n(1),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d),p=t.StringFormat={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},v=t.StringData=function e(t,n){r(this,e),this.data=t,this.contentType=n||null},_=function e(t){r(this,e),this.base64=!1,this.contentType=null;var n=t.match(/^data:([^,]+)?,/);if(null===n)throw h.invalidFormat(p.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var a=n[1]||null;null!=a&&(this.base64=f(a,";base64"),this.contentType=this.base64?a.substring(0,a.length-";base64".length):a),this.rest=t.substring(t.indexOf(",")+1)}},,,function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,n){for(var r=t.length,a=t.length,o=0;o<t.length;o++)if(t[o].optional){r=o;break}if(!(r<=n.length&&n.length<=a))throw p.invalidArgumentCount(r,a,e,n.length);for(var i=0;i<n.length;i++)try{t[i].validator(n[i])}catch(t){throw t instanceof Error?p.invalidArgument(i,e,t.message):p.invalidArgument(i,e,t)}}function i(e,t){return function(n){e(n),t(n)}}function u(e,t){function n(e){if(!b.isString(e))throw"Expected string."}var r=void 0;return r=e?i(n,e):n,new m(r,t)}function s(){return new m(function(e){if(!(e instanceof Uint8Array||e instanceof ArrayBuffer||b.isNativeBlobDefined()&&e instanceof Blob))throw"Expected Blob or File."})}function l(e){return new m(_.metadataValidator,e)}function c(){return new m(function(e){if(!(b.isNumber(e)&&e>=0))throw"Expected a number 0 or greater."})}function f(e,t){return new m(function(t){if(!(null===t||b.isDef(t)&&t instanceof Object))throw"Expected an Object.";void 0!==e&&null!==e&&e(t)},t)}function d(e){return new m(function(e){if(null!==e&&!b.isFunction(e))throw"Expected a Function."},e)}Object.defineProperty(t,"__esModule",{value:!0}),t.ArgSpec=void 0,t.validate=o,t.and_=i,t.stringSpec=u,t.uploadDataSpec=s,t.metadataSpec=l,t.nonNegativeNumberSpec=c,t.looseObjectSpec=f,t.nullFunctionSpec=d;var h=n(1),p=r(h),v=n(13),_=r(v),y=n(0),b=r(y),m=t.ArgSpec=function e(t,n){a(this,e);var r=this;this.validator=function(e){r.optional&&!b.isJustDef(e)||t(e)},this.optional=!!n}},function(e,t,n){"use strict";function r(e,t){return-1!==e.indexOf(t)}function a(e){return Array.prototype.slice.call(e)}function o(e,t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}Object.defineProperty(t,"__esModule",{value:!0}),t.contains=r,t.clone=a,t.remove=o},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){return t}function i(e){return!m.isString(e)||e.length<2?e:(e=e,y.lastComponent(e))}function u(){if(w)return w;var e=[];e.push(new R("bucket")),e.push(new R("generation")),e.push(new R("metageneration")),e.push(new R("name","fullPath",!0));var t=new R("name");t.xform=function(e,t){return i(t)},e.push(t);var n=new R("size");return n.xform=function(e,t){return m.isDef(t)?+t:t},e.push(n),e.push(new R("timeCreated")),e.push(new R("updated")),e.push(new R("md5Hash",null,!0)),e.push(new R("cacheControl",null,!0)),e.push(new R("contentDisposition",null,!0)),e.push(new R("contentEncoding",null,!0)),e.push(new R("contentLanguage",null,!0)),e.push(new R("contentType",null,!0)),e.push(new R("metadata","customMetadata",!0)),e.push(new R("downloadTokens","downloadURLs",!1,function(e,t){if(!(m.isString(t)&&t.length>0))return[];var n=encodeURIComponent;return t.split(",").map(function(t){var r=e.bucket,a=e.fullPath,o="/b/"+n(r)+"/o/"+n(a);return g.makeDownloadUrl(o)+g.makeQueryString({alt:"media",token:t})})})),w=e}function s(e,t){Object.defineProperty(e,"ref",{get:function(){var n=e.bucket,r=e.fullPath,a=new v.Location(n,r);return t.makeStorageReference(a)}})}function l(e,t,n){var r={};r.type="file";for(var a=n.length,o=0;o<a;o++){var i=n[o];r[i.local]=i.xform(r,t[i.server])}return s(r,e),r}function c(e,t,n){var r=p.jsonObjectOrNull(t);return null===r?null:l(e,r,n)}function f(e,t){for(var n={},r=t.length,a=0;a<r;a++){var o=t[a];o.writable&&(n[o.server]=e[o.local])}return JSON.stringify(n)}function d(e){if(!e||!m.isObject(e))throw"Expected Metadata object.";for(var t in e){var n=e[t];if("customMetadata"===t){if(!m.isObject(n))throw"Expected object for 'customMetadata' mapping."}else if(m.isNonNullObject(n))throw"Mapping for '"+t+"' cannot be an object."}}Object.defineProperty(t,"__esModule",{value:!0}),t.Mapping=void 0,t.noXform_=o,t.xformPath=i,t.getMappings=u,t.addRef=s,t.fromResource=l,t.fromResourceString=c,t.toResourceString=f,t.metadataValidator=d;var h=n(43),p=r(h),v=n(7),_=n(23),y=r(_),b=n(0),m=r(b),k=n(14),g=r(k),R=t.Mapping=function e(t,n,r,i){a(this,e),this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||o},w=null},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e){return l.domainBase+l.apiBaseUrl+e}function o(e){return l.downloadBase+l.apiBaseUrl+e}function i(e){return l.domainBase+l.apiUploadBaseUrl+e}function u(e){var t=encodeURIComponent,n="?";return f.forEach(e,function(e,r){var a=t(e)+"="+t(r);n=n+a+"&"}),n=n.slice(0,-1)}Object.defineProperty(t,"__esModule",{value:!0}),t.makeNormalUrl=a,t.makeDownloadUrl=o,t.makeUploadUrl=i,t.makeQueryString=u;var s=n(6),l=r(s),c=n(3),f=r(c)},function(e,t,n){"use strict";function r(e){switch(e){case a.RUNNING:case a.PAUSING:case a.CANCELING:return o.RUNNING;case a.PAUSED:return o.PAUSED;case a.SUCCESS:return o.SUCCESS;case a.CANCELED:return o.CANCELED;case a.ERROR:default:return o.ERROR}}Object.defineProperty(t,"__esModule",{value:!0}),t.taskStateFromInternalTaskState=r;var a=(t.TaskEvent={STATE_CHANGED:"state_changed"},t.InternalTaskState={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"}),o=t.TaskState={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Reference=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(11),u=r(i),s=n(22),l=n(1),c=r(l),f=n(7),d=n(13),h=r(d),p=n(3),v=r(p),_=n(23),y=r(_),b=n(24),m=r(b),k=n(8),g=r(k),R=n(0),w=r(R),S=n(49);t.Reference=function(){function e(t,n){a(this,e),this.authWrapper=t,n instanceof f.Location?this.location=n:this.location=f.Location.makeFromUrl(n)}return o(e,[{key:"toString",value:function(){return u.validate("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path}},{key:"newRef",value:function(t,n){return new e(t,n)}},{key:"mappings",value:function(){return h.getMappings()}},{key:"child",value:function(e){u.validate("child",[u.stringSpec()],arguments);var t=y.child(this.location.path,e),n=new f.Location(this.location.bucket,t);return this.newRef(this.authWrapper,n)}},{key:"put",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return u.validate("put",[u.uploadDataSpec(),u.metadataSpec(!0)],arguments),this.throwIfRoot_("put"),new S.UploadTask(this,this.authWrapper,this.location,this.mappings(),new s.FbsBlob(e),t)}},{key:"putString",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.StringFormat.RAW,n=arguments[2];u.validate("putString",[u.stringSpec(),u.stringSpec(g.formatValidator,!0),u.metadataSpec(!0)],arguments),this.throwIfRoot_("putString");var r=g.dataFromString(t,e),a=v.clone(n);return!w.isDef(a.contentType)&&w.isDef(r.contentType)&&(a.contentType=r.contentType),new S.UploadTask(this,this.authWrapper,this.location,this.mappings(),new s.FbsBlob(r.data,!0),a)}},{key:"delete",value:function(){u.validate("delete",[],arguments),this.throwIfRoot_("delete");var e=this;return this.authWrapper.getAuthToken().then(function(t){var n=m.deleteObject(e.authWrapper,e.location);return e.authWrapper.makeRequest(n,t).getPromise()})}},{key:"getMetadata",value:function(){u.validate("getMetadata",[],arguments),this.throwIfRoot_("getMetadata");var e=this;return this.authWrapper.getAuthToken().then(function(t){var n=m.getMetadata(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(n,t).getPromise()})}},{key:"updateMetadata",value:function(e){u.validate("updateMetadata",[u.metadataSpec()],arguments),this.throwIfRoot_("updateMetadata");var t=this;return this.authWrapper.getAuthToken().then(function(n){var r=m.updateMetadata(t.authWrapper,t.location,e,t.mappings());return t.authWrapper.makeRequest(r,n).getPromise()})}},{key:"getDownloadURL",value:function(){return u.validate("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.getMetadata().then(function(e){var t=e.downloadURLs[0];if(w.isDef(t))return t;throw c.noDownloadURL()})}},{key:"throwIfRoot_",value:function(e){if(""===this.location.path)throw c.invalidRootOperation(e)}},{key:"parent",get:function(){var e=y.parent(this.location.path);if(null===e)return null;var t=new f.Location(this.location.bucket,e);return this.newRef(this.authWrapper,t)}},{key:"root",get:function(){var e=new f.Location(this.location.bucket,"");return this.newRef(this.authWrapper,e)}},{key:"bucket",get:function(){return this.location.bucket}},{key:"fullPath",get:function(){return this.location.path}},{key:"name",get:function(){return y.lastComponent(this.location.path)}},{key:"storage",get:function(){return this.authWrapper.service()}}]),e}()},,,,,,function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.FbsBlob=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(42),u=r(i),s=n(8),l=r(s),c=n(0),f=r(c);t.FbsBlob=function(){function e(t,n){a(this,e);var r=0,o="";f.isNativeBlob(t)?(this.data_=t,r=t.size,o=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=o}return o(e,[{key:"size",value:function(){return this.size_}},{key:"type",value:function(){return this.type_}},{key:"slice",value:function(t,n){if(f.isNativeBlob(this.data_)){var r=this.data_,a=u.sliceBlob(r,t,n);return null===a?null:new e(a)}return new e(new Uint8Array(this.data_.buffer,t,n-t),!0)}},{key:"uploadData",value:function(){return this.data_}}],[{key:"getBlob",value:function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];if(f.isNativeBlobDefined()){var a=n.map(function(t){return t instanceof e?t.data_:t});return new e(u.getBlob.apply(null,a))}var o=n.map(function(e){return f.isString(e)?l.dataFromString(s.StringFormat.RAW,e).data:e.data_}),i=0;o.forEach(function(e){i+=e.byteLength});var c=new Uint8Array(i),d=0;return o.forEach(function(e){for(var t=0;t<e.length;t++)c[d++]=e[t]}),new e(c,!0)}}]),e}()},function(e,t,n){"use strict";function r(e){if(0==e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}function a(e,t){var n=t.split("/").filter(function(e){return e.length>0}).join("/");return 0===e.length?n:e+"/"+n}function o(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}Object.defineProperty(t,"__esModule",{value:!0}),t.parent=r,t.child=a,t.lastComponent=o},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e){if(!e)throw w.unknown()}function i(e,t){return function(n,r){var a=E.fromResourceString(e,r,t);return o(null!==a),a}}function u(e){return function(t,n){var r=void 0;return r=401===t.getStatus()?w.unauthenticated():402===t.getStatus()?w.quotaExceeded(e.bucket):403===t.getStatus()?w.unauthorized(e.path):n,r.setServerResponseProp(n.serverResponseProp()),r}}function s(e){var t=u(e);return function(n,r){var a=t(n,r);return 404===n.getStatus()&&(a=w.objectNotFound(e.path)),a.setServerResponseProp(r.serverResponseProp()),a}}function l(e,t,n){var r=t.fullServerUrl(),a=I.makeNormalUrl(r),o=e.maxOperationRetryTime(),u=new U.RequestInfo(a,"GET",i(e,n),o);return u.errorHandler=s(t),u}function c(e,t,n,r){var a=t.fullServerUrl(),o=I.makeNormalUrl(a),u=E.toResourceString(n,r),l=e.maxOperationRetryTime(),c=new U.RequestInfo(o,"PATCH",i(e,r),l);return c.headers={"Content-Type":"application/json; charset=utf-8"},c.body=u,c.errorHandler=s(t),c}function f(e,t){var n=t.fullServerUrl(),r=I.makeNormalUrl(n),a=e.maxOperationRetryTime(),o=new U.RequestInfo(r,"DELETE",function(){},a);return o.successCodes=[200,204],o.errorHandler=s(t),o}function d(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function h(e,t,n){var r=O.clone(n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=d(null,t)),r}function p(e,t,n,r,a){var o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"},l=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();s["Content-Type"]="multipart/related; boundary="+l;var c=h(t,r,a),f=E.toResourceString(c,n),d="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+f+"\r\n--"+l+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",p=g.FbsBlob.getBlob(d,r,"\r\n--"+l+"--");if(null===p)throw w.cannotSliceBlob();var v={name:c.fullPath},_=I.makeUploadUrl(o),y=e.maxUploadRetryTime(),b=new U.RequestInfo(_,"POST",i(e,n),y);return b.urlParams=v,b.headers=s,b.body=p.uploadData(),b.errorHandler=u(t),b}function v(e,t){var n=void 0;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){o(!1)}return o(k.contains(t||["active"],n)),n}function _(e,t,n,r,a){var i=t.bucketOnlyServerUrl(),s=h(t,r,a),l={name:s.fullPath},c=I.makeUploadUrl(i),f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":r.size(),"X-Goog-Upload-Header-Content-Type":s.contentType,"Content-Type":"application/json; charset=utf-8"},d=E.toResourceString(s,n),p=e.maxUploadRetryTime(),_=new U.RequestInfo(c,"POST",function(e){v(e);var t=void 0;try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){o(!1)}return o(C.isString(t)),t},p);return _.urlParams=l,_.headers=f,_.body=d,_.errorHandler=u(t),_}function y(e,t,n,r){var a=e.maxUploadRetryTime(),i=new U.RequestInfo(n,"POST",function(e){var t=v(e,["active","final"]),n=void 0;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){o(!1)}var a=parseInt(n,10);return o(!isNaN(a)),new P(a,r.size(),"final"===t)},a);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=u(t),i}function b(e,t,n,r,a,o,s,l){var c=new P(0,0);if(s?(c.current=s.current,c.total=s.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw w.serverFileWrongSize();var f=c.total-c.current,d=f;a>0&&(d=Math.min(d,a));var h=c.current,p=h+d,_=d===f?"upload, finalize":"upload",y={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":c.current},b=r.slice(h,p);if(null===b)throw w.cannotSliceBlob();var m=t.maxUploadRetryTime(),k=new U.RequestInfo(n,"POST",function(e,n){var a=v(e,["active","final"]),u=c.current+d,s=r.size(),l=void 0;return l="final"===a?i(t,o)(e,n):null,new P(u,s,"final"===a,l)},m);return k.headers=y,k.body=b.uploadData(),k.progressCallback=l||null,k.errorHandler=u(e),k}Object.defineProperty(t,"__esModule",{value:!0}),t.resumableUploadChunkSize=t.ResumableUploadStatus=void 0,t.handlerCheck=o,t.metadataHandler=i,t.sharedErrorHandler=u,t.objectErrorHandler=s,t.getMetadata=l,t.updateMetadata=c,t.deleteObject=f,t.determineContentType_=d,t.metadataForUpload_=h,t.multipartUpload=p,t.checkResumeHeader_=v,t.createResumableUpload=_,t.getResumableUploadStatus=y,t.continueResumableUpload=b;var m=n(12),k=r(m),g=n(22),R=n(1),w=r(R),S=n(13),E=r(S),T=n(3),O=r(T),U=n(46),N=n(0),C=r(N),A=n(14),I=r(A),P=t.ResumableUploadStatus=function e(t,n,r,o){a(this,e),this.current=t,this.total=n,this.finalized=!!r,this.metadata=o||null};t.resumableUploadChunkSize=262144},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.ErrorCode=void 0;!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(r||(t.ErrorCode=r={}))},,,,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.XhrIoPool=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(48);t.XhrIoPool=function(){function e(){r(this,e)}return a(e,[{key:"createXhrIo",value:function(){return new o.NetworkXhrIo}}]),e}()},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ServiceInternals=t.Service=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(11),u=r(i),s=n(39),l=n(7),c=n(2),f=r(c),d=n(45),h=r(d),p=n(16),v=(t.Service=function(){function e(t,n,r){if(a(this,e),this.bucket_=null,this.authWrapper_=new s.AuthWrapper(t,function(e,t){return new p.Reference(e,t)},h.makeRequest,this,n),this.app_=t,null!=r)this.bucket_=l.Location.makeFromBucketSpec(r);else{var o=this.authWrapper_.bucket();null!=o&&(this.bucket_=new l.Location(o,""))}this.internals_=new v(this)}return o(e,[{key:"ref",value:function(e){if(u.validate("ref",[u.stringSpec(function(e){if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."},!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var t=new p.Reference(this.authWrapper_,this.bucket_);return null!=e?t.child(e):t}},{key:"refFromURL",value:function(e){return u.validate("refFromURL",[u.stringSpec(function(e){if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{l.Location.makeFromUrl(e)}catch(e){throw"Expected valid full URL but got an invalid one."}},!1)],arguments),new p.Reference(this.authWrapper_,e)}},{key:"setMaxUploadRetryTime",value:function(e){u.validate("setMaxUploadRetryTime",[u.nonNegativeNumberSpec()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)}},{key:"setMaxOperationRetryTime",value:function(e){u.validate("setMaxOperationRetryTime",[u.nonNegativeNumberSpec()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)}},{key:"maxUploadRetryTime",get:function(){return this.authWrapper_.maxUploadRetryTime()}},{key:"maxOperationRetryTime",get:function(){return this.authWrapper_.maxOperationRetryTime()}},{key:"app",get:function(){return this.app_}},{key:"INTERNAL",get:function(){return this.internals_}}]),e}(),t.ServiceInternals=function(){function e(t){a(this,e),this.service_=t}return o(e,[{key:"delete",value:function(){return this.service_.authWrapper_.deleteApp(),f.resolve(void 0)}}]),e}())},,,,,,function(e,t,n){"use strict";function r(e,t,n){return new l.Service(e,new u.XhrIoPool,n)}function a(e){e.INTERNAL.registerService(f,r,{TaskState:i.TaskState,TaskEvent:i.TaskEvent,StringFormat:o.StringFormat,Storage:l.Service,Reference:s.Reference},void 0,!0)}Object.defineProperty(t,"__esModule",{value:!0}),t.registerStorage=a;var o=n(8),i=n(15),u=n(30),s=n(16),l=n(31),c=n(4),f="storage";a(function(e){return e&&e.__esModule?e:{default:e}}(c).default)},function(e,t,n){"use strict";function r(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];o.resolve(!0).then(function(){e.apply(null,n)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.async=r;var a=n(2),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.AuthWrapper=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),u=r(i),s=n(1),l=r(s),c=n(41),f=n(7),d=n(2),h=r(d),p=n(47),v=n(0),_=r(v);t.AuthWrapper=function(){function e(t,n,r,o,i){if(a(this,e),this.bucket_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var s=this.app_.options;_.isDef(s)&&(this.bucket_=e.extractBucket_(s))}this.storageRefMaker_=n,this.requestMaker_=r,this.pool_=i,this.service_=o,this.maxOperationRetryTime_=u.defaultMaxOperationRetryTime,this.maxUploadRetryTime_=u.defaultMaxUploadRetryTime,this.requestMap_=new p.RequestMap}return o(e,[{key:"getAuthToken",value:function(){return null!==this.app_&&_.isDef(this.app_.INTERNAL)&&_.isDef(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then(function(e){return null!==e?e.accessToken:null},function(){return null}):h.resolve(null)}},{key:"bucket",value:function(){if(this.deleted_)throw l.appDeleted();return this.bucket_}},{key:"service",value:function(){return this.service_}},{key:"makeStorageReference",value:function(e){return this.storageRefMaker_(this,e)}},{key:"makeRequest",value:function(e,t){if(this.deleted_)return new c.FailRequest(l.appDeleted());var n=this.requestMaker_(e,t,this.pool_);return this.requestMap_.addRequest(n),n}},{key:"deleteApp",value:function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()}},{key:"maxUploadRetryTime",value:function(){return this.maxUploadRetryTime_}},{key:"setMaxUploadRetryTime",value:function(e){this.maxUploadRetryTime_=e}},{key:"maxOperationRetryTime",value:function(){return this.maxOperationRetryTime_}},{key:"setMaxOperationRetryTime",value:function(e){this.maxOperationRetryTime_=e}}],[{key:"extractBucket_",value:function(e){var t=e[u.configOption]||null;return null==t?null:f.Location.makeFromBucketSpec(t).bucket}}]),e}()},function(e,t,n){"use strict";function r(e,t,n){function r(){return 2===f}function a(){d||(d=!0,t.apply(null,arguments))}function o(t){l=setTimeout(function(){l=null,e(i,r())},t)}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!d){if(e)return void a.apply(null,arguments);if(r()||c)return void a.apply(null,arguments);s<64&&(s*=2);var u=void 0;1===f?(f=2,u=0):u=1e3*(s+Math.random()),o(u)}}function u(e){h||(h=!0,d||(null!==l?(e||(f=2),clearTimeout(l),o(0)):e||(f=1)))}var s=1,l=null,c=!1,f=0,d=!1,h=!1;return o(0),setTimeout(function(){c=!0,u(!0)},n),u}function a(e){e(!1)}Object.defineProperty(t,"__esModule",{value:!0}),t.start=r,t.stop=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.FailRequest=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(2),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o);t.FailRequest=function(){function e(t){r(this,e),this.promise_=i.reject(t)}return a(e,[{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}]),e}()},function(e,t,n){"use strict";function r(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function a(){for(var e=r(),t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];if(void 0!==e){for(var o=new e,i=0;i<n.length;i++)o.append(n[i]);return o.getBlob()}if(u.isNativeBlobDefined())return new Blob(n);throw Error("This browser doesn't seem to support creating Blobs")}function o(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}Object.defineProperty(t,"__esModule",{value:!0}),t.getBlob=a,t.sliceBlob=o;var i=n(0),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(i)},function(e,t,n){"use strict";function r(e){var t=void 0;try{t=JSON.parse(e)}catch(e){return null}return o.isNonArrayObject(t)?t:null}Object.defineProperty(t,"__esModule",{value:!0}),t.jsonObjectOrNull=r;var a=n(0),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a)},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.Observer=void 0;var a=n(0),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(a);t.Observer=function e(t,n,a){if(r(this,e),o.isFunction(t)||o.isDef(n)||o.isDef(a))this.next=t,this.error=n||null,this.complete=a||null;else{var i=t;this.next=i.next||null,this.error=i.error||null,this.complete=i.complete||null}}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}function i(e){var t="undefined"!=typeof firebase?firebase.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function u(e,t,n){var r=R.makeQueryString(e.urlParams),a=e.url+r,u=_.clone(e.headers);return o(u,t),i(u),new E(a,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.RequestEndStatus=void 0;var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.addAuthHeader_=o,t.addVersionHeader_=i,t.makeRequest=u;var l=n(12),c=r(l),f=n(40),d=r(f),h=n(1),p=r(h),v=n(3),_=r(v),y=n(2),b=r(y),m=n(0),k=r(m),g=n(14),R=r(g),w=n(25),S=r(w),E=function(){function e(t,n,r,o,i,u,s,l,c,f,d){a(this,e),this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=i.slice(),this.additionalRetryCodes_=u.slice(),this.callback_=s,this.errorCallback_=l,this.progressCallback_=f,this.timeout_=c,this.pool_=d;var h=this;this.promise_=b.make(function(e,t){h.resolve_=e,h.reject_=t,h.start_()})}return s(e,[{key:"start_",value:function(){function e(e,t){function r(e){var t=e.loaded,r=e.lengthComputable?e.total:-1;null!==n.progressCallback_&&n.progressCallback_(t,r)}if(t)return void e(!1,new T(!1,null,!0));var a=n.pool_.createXhrIo();n.pendingXhr_=a,null!==n.progressCallback_&&a.addUploadProgressListener(r),a.send(n.url_,n.method_,n.body_,n.headers_).then(function(t){null!==n.progressCallback_&&t.removeUploadProgressListener(r),n.pendingXhr_=null,t=t;var a=t.getErrorCode()===S.ErrorCode.NO_ERROR,o=t.getStatus();if(!a||n.isRetryStatusCode_(o)){var i=t.getErrorCode()===S.ErrorCode.ABORT;return void e(!1,new T(!1,null,i))}var u=c.contains(n.successCodes_,o);e(!0,new T(u,t))})}function t(e,t){var r=n.resolve_,a=n.reject_,o=t.xhr;if(t.wasSuccessCode)try{var i=n.callback_(o,o.getResponseText());k.isJustDef(i)?r(i):r()}catch(e){a(e)}else if(null!==o){var u=p.unknown();u.setServerResponseProp(o.getResponseText()),a(n.errorCallback_?n.errorCallback_(o,u):u)}else if(t.canceled){var s=n.appDelete_?p.appDeleted():p.canceled();a(s)}else{var l=p.retryLimitExceeded();a(l)}}var n=this;this.canceled_?t(!1,new T(!1,null,!0)):this.backoffId_=d.start(e,t,this.timeout_)}},{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&d.stop(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()}},{key:"isRetryStatusCode_",value:function(e){var t=c.contains([408,429],e),n=c.contains(this.additionalRetryCodes_,e);return e>=500&&e<600||t||n}}]),e}(),T=t.RequestEndStatus=function e(t,n,r){a(this,e),this.wasSuccessCode=t,this.xhr=n,this.canceled=!!r}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});t.RequestInfo=function e(t,n,a,o){r(this,e),this.url=t,this.method=n,this.handler=a,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.RequestMap=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),u=r(i),s=n(6),l=r(s);t.RequestMap=function(){function e(){a(this,e),this.map_={},this.id_=l.minSafeInteger}return o(e,[{key:"addRequest",value:function(e){function t(){delete r.map_[n]}var n=this.id_;this.id_++,this.map_[n]=e;var r=this;e.getPromise().then(t,t)}},{key:"clear",value:function(){u.forEach(this.map_,function(e,t){t&&t.cancel(!0)}),this.map_={}}}]),e}()},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.NetworkXhrIo=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),u=r(i),s=n(3),l=r(s),c=n(2),f=r(c),d=n(0),h=r(d),p=n(25),v=r(p);t.NetworkXhrIo=function(){function e(){var t=this;a(this,e),this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=v.ErrorCode.NO_ERROR,this.sendPromise_=f.make(function(e){t.xhr_.addEventListener("abort",function(){t.errorCode_=v.ErrorCode.ABORT,e(t)}),t.xhr_.addEventListener("error",function(){t.errorCode_=v.ErrorCode.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(){e(t)})})}return o(e,[{key:"send",value:function(e,t,n,r){var a=this;if(this.sent_)throw u.internalError("cannot .send() more than once");return this.sent_=!0,this.xhr_.open(t,e,!0),h.isDef(r)&&l.forEach(r,function(e,t){a.xhr_.setRequestHeader(e,t.toString())}),h.isDef(n)?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}},{key:"getErrorCode",value:function(){if(!this.sent_)throw u.internalError("cannot .getErrorCode() before sending");return this.errorCode_}},{key:"getStatus",value:function(){if(!this.sent_)throw u.internalError("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}},{key:"getResponseText",value:function(){if(!this.sent_)throw u.internalError("cannot .getResponseText() before sending");return this.xhr_.responseText}},{key:"abort",value:function(){this.xhr_.abort()}},{key:"getResponseHeader",value:function(e){return this.xhr_.getResponseHeader(e)}},{key:"addUploadProgressListener",value:function(e){h.isDef(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)}},{key:"removeUploadProgressListener",value:function(e){h.isDef(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)}}]),e}()},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.UploadTask=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(15),u=r(i),s=n(44),l=n(50),c=n(11),f=r(c),d=n(12),h=r(d),p=n(38),v=n(1),_=r(v),y=n(2),b=r(y),m=n(24),k=r(m),g=n(0),R=r(g);t.UploadTask=function(){function e(t,n,r,o,u){var s=this,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;a(this,e),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=t,this.authWrapper_=n,this.location_=r,this.blob_=u,this.metadata_=l,this.mappings_=o,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=i.InternalTaskState.RUNNING,this.errorHandler_=function(e){s.request_=null,s.chunkMultiplier_=1,e.codeEquals(_.Code.CANCELED)?(s.needToFetchStatus_=!0,s.completeTransitions_()):(s.error_=e,s.transition_(i.InternalTaskState.ERROR))},this.metadataErrorHandler_=function(e){s.request_=null,e.codeEquals(_.Code.CANCELED)?s.completeTransitions_():(s.error_=e,s.transition_(i.InternalTaskState.ERROR))},this.promise_=b.make(function(e,t){s.resolve_=e,s.reject_=t,s.start_()}),this.promise_.then(null,function(){})}return o(e,[{key:"makeProgressCallback_",value:function(){var e=this,t=this.transferred_;return function(n){e.updateProgress_(t+n)}}},{key:"shouldDoResumable_",value:function(e){return e.size()>262144}},{key:"start_",value:function(){this.state_===i.InternalTaskState.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())}},{key:"resolveToken_",value:function(e){var t=this;this.authWrapper_.getAuthToken().then(function(n){switch(t.state_){case i.InternalTaskState.RUNNING:e(n);break;case i.InternalTaskState.CANCELING:t.transition_(i.InternalTaskState.CANCELED);break;case i.InternalTaskState.PAUSING:t.transition_(i.InternalTaskState.PAUSED)}})}},{key:"createResumable_",value:function(){var e=this;this.resolveToken_(function(t){var n=k.createResumableUpload(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),r=e.authWrapper_.makeRequest(n,t);e.request_=r,r.getPromise().then(function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()},e.errorHandler_)})}},{key:"fetchStatus_",value:function(){var e=this,t=this.uploadUrl_;this.resolveToken_(function(n){var r=k.getResumableUploadStatus(e.authWrapper_,e.location_,t,e.blob_),a=e.authWrapper_.makeRequest(r,n);e.request_=a,a.getPromise().then(function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()},e.errorHandler_)})}},{key:"continueUpload_",value:function(){var e=this,t=k.resumableUploadChunkSize*this.chunkMultiplier_,n=new k.ResumableUploadStatus(this.transferred_,this.blob_.size()),r=this.uploadUrl_;this.resolveToken_(function(a){var o=void 0;try{o=k.continueResumableUpload(e.location_,e.authWrapper_,r,e.blob_,t,e.mappings_,n,e.makeProgressCallback_())}catch(t){return e.error_=t,void e.transition_(i.InternalTaskState.ERROR)}var u=e.authWrapper_.makeRequest(o,a);e.request_=u,u.getPromise().then(function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(i.InternalTaskState.SUCCESS)):e.completeTransitions_()},e.errorHandler_)})}},{key:"increaseMultiplier_",value:function(){k.resumableUploadChunkSize*this.chunkMultiplier_<33554432&&(this.chunkMultiplier_*=2)}},{key:"fetchMetadata_",value:function(){var e=this;this.resolveToken_(function(t){var n=k.getMetadata(e.authWrapper_,e.location_,e.mappings_),r=e.authWrapper_.makeRequest(n,t);e.request_=r,r.getPromise().then(function(t){e.request_=null,e.metadata_=t,e.transition_(i.InternalTaskState.SUCCESS)},e.metadataErrorHandler_)})}},{key:"oneShotUpload_",value:function(){var e=this;this.resolveToken_(function(t){var n=k.multipartUpload(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),r=e.authWrapper_.makeRequest(n,t);e.request_=r,r.getPromise().then(function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(i.InternalTaskState.SUCCESS)},e.errorHandler_)})}},{key:"updateProgress_",value:function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()}},{key:"transition_",value:function(e){if(this.state_!==e)switch(e){case i.InternalTaskState.CANCELING:case i.InternalTaskState.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case i.InternalTaskState.RUNNING:var t=this.state_===i.InternalTaskState.PAUSED;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case i.InternalTaskState.PAUSED:this.state_=e,this.notifyObservers_();break;case i.InternalTaskState.CANCELED:this.error_=_.canceled(),this.state_=e,this.notifyObservers_();break;case i.InternalTaskState.ERROR:case i.InternalTaskState.SUCCESS:this.state_=e,this.notifyObservers_()}}},{key:"completeTransitions_",value:function(){switch(this.state_){case i.InternalTaskState.PAUSING:this.transition_(i.InternalTaskState.PAUSED);break;case i.InternalTaskState.CANCELING:this.transition_(i.InternalTaskState.CANCELED);break;case i.InternalTaskState.RUNNING:this.start_()}}},{key:"on",value:function(e){function t(e){try{return void l(e)}catch(e){}try{c(e);if(!(R.isJustDef(e.next)||R.isJustDef(e.error)||R.isJustDef(e.complete)))throw""}catch(e){throw u}}function n(e){return function(t,n){null!==e&&f.validate("on",e,arguments);var r=new s.Observer(t,n,o);return h.addObserver_(r),function(){h.removeObserver_(r)}}}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,u="Expected a function or an Object with one of `next`, `error`, `complete` properties.",l=f.nullFunctionSpec(!0).validator,c=f.looseObjectSpec(null,!0).validator,d=[f.stringSpec(function(){if(e!==i.TaskEvent.STATE_CHANGED)throw"Expected one of the event types: ["+i.TaskEvent.STATE_CHANGED+"]."}),f.looseObjectSpec(t,!0),f.nullFunctionSpec(!0),f.nullFunctionSpec(!0)];f.validate("on",d,arguments);var h=this,p=[f.looseObjectSpec(function(e){if(null===e)throw u;t(e)}),f.nullFunctionSpec(!0),f.nullFunctionSpec(!0)];return R.isJustDef(r)||R.isJustDef(a)||R.isJustDef(o)?n(null)(r,a,o):n(p)}},{key:"then",value:function(e,t){return this.promise_.then(e,t)}},{key:"catch",value:function(e){return this.then(null,e)}},{key:"addObserver_",value:function(e){this.observers_.push(e),this.notifyObserver_(e)}},{key:"removeObserver_",value:function(e){h.remove(this.observers_,e)}},{key:"notifyObservers_",value:function(){var e=this;this.finishPromise_(),h.clone(this.observers_).forEach(function(t){e.notifyObserver_(t)})}},{key:"finishPromise_",value:function(){if(null!==this.resolve_){var e=!0;switch(u.taskStateFromInternalTaskState(this.state_)){case i.TaskState.SUCCESS:(0,p.async)(this.resolve_.bind(null,this.snapshot))();break;case i.TaskState.CANCELED:case i.TaskState.ERROR:var t=this.reject_;(0,p.async)(t.bind(null,this.error_))();break;default:e=!1}e&&(this.resolve_=null,this.reject_=null)}}},{key:"notifyObserver_",value:function(e){switch(u.taskStateFromInternalTaskState(this.state_)){case i.TaskState.RUNNING:case i.TaskState.PAUSED:null!==e.next&&(0,p.async)(e.next.bind(e,this.snapshot))();break;case i.TaskState.SUCCESS:null!==e.complete&&(0,p.async)(e.complete.bind(e))();break;case i.TaskState.CANCELED:case i.TaskState.ERROR:null!==e.error&&(0,p.async)(e.error.bind(e,this.error_))();break;default:null!==e.error&&(0,p.async)(e.error.bind(e,this.error_))()}}},{key:"resume",value:function(){f.validate("resume",[],arguments);var e=this.state_===i.InternalTaskState.PAUSED||this.state_===i.InternalTaskState.PAUSING;return e&&this.transition_(i.InternalTaskState.RUNNING),e}},{key:"pause",value:function(){f.validate("pause",[],arguments);var e=this.state_===i.InternalTaskState.RUNNING;return e&&this.transition_(i.InternalTaskState.PAUSING),e}},{key:"cancel",value:function(){f.validate("cancel",[],arguments);var e=this.state_===i.InternalTaskState.RUNNING||this.state_===i.InternalTaskState.PAUSING;return e&&this.transition_(i.InternalTaskState.CANCELING),e}},{key:"snapshot",get:function(){var e=u.taskStateFromInternalTaskState(this.state_);return new l.UploadTaskSnapshot(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.UploadTaskSnapshot=function(){function e(t,n,a,o,i,u){r(this,e),this.bytesTransferred=t,this.totalBytes=n,this.state=a,this.metadata=o,this.task=i,this.ref=u}return a(e,[{key:"downloadURL",get:function(){if(null!==this.metadata){var e=this.metadata.downloadURLs;return null!=e&&null!=e[0]?e[0]:null}return null}}]),e}()}],[37])}catch(e){throw new Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.")}

//# sourceMappingURL=firebase.js.map

var config = {
    apiKey: "AIzaSyCkEY4ZfttWUY6BUkRuwsoHBltdDFbExRI",
    authDomain: "independence-429a5.firebaseapp.com",
    databaseURL: "https://independence-429a5.firebaseio.com",
    projectId: "independence-429a5",
    storageBucket: "",
    messagingSenderId: "1031200532634"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();

(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.records.redeems',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.records.redeems', {
                abstract: true,
                url     : '/redeems'
            })
            .state('app.records.redeems.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/records/redeems/views/list-view/redeems.html',
                        controller : 'RedeemsController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }],
                    customers: ["adminService", function(adminService) {
                        return adminService.getCurrentCustomers();
                    }],
                    beers: ["adminService", function(adminService) {
                        return adminService.getBeers();
                    }],
                    offers: ["adminService", function(adminService) {
                        return adminService.getCurrentOffers();
                    }]
                },
                bodyClass: 'redeems'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/records/redeems');

        // Api
        msApiProvider.register('redeems.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('redeems.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('redeems.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('redeems.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('redeems.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('redeems.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('hopheads.redeems', {
            title: 'Offer Redemption History',
            state: 'app.records.redeems.list',
            weight: 4,
            icon: 'icon-history'
        });
    }
})();
(function ()
{
    'use strict';

    RedeemsController.$inject = ["$state", "$scope", "$mdDialog", "$document", "redeemService", "customers", "beers", "offers"];
    angular
        .module('app.records.redeems')
        .controller('RedeemsController', RedeemsController);

    /** @ngInject */
    function RedeemsController($state, $scope, $mdDialog, $document, redeemService, customers, beers, offers)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.redeemGridOptions = redeemService.gridOptions('vm.redeems', customers, beers, offers);
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.records.offers',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.records.offers', {
                abstract: true,
                url     : '/offers'
            })
            .state('app.records.offers.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/records/offers/views/list-view/offers.html',
                        controller : 'OffersController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }]
                },
                bodyClass: 'offers'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/records/offers');

        // Api
        msApiProvider.register('offers.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('offers.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('offers.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('offers.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('offers.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('offers.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('hopheads.offers', {
            title: 'Offers',
            state: 'app.records.offers.list',
            weight: 3,
            icon: 'icon-barcode'
        });
    }
})();
(function () {
    'use strict';

    OffersController.$inject = ["$state", "$scope", "msUtils", "$mdDialog", "$document", "$q", "$compile", "OfferService", "dxUtils", "authService", "firebaseUtils"];
    angular
        .module('app.records.offers')
        .controller('OffersController', OffersController);

    /** @ngInject */
    function OffersController($state, $scope, msUtils, $mdDialog, $document, $q, $compile, OfferService, dxUtils, authService, firebaseUtils) {
        var vm = this,
            tenantId = authService.getCurrentTenant();;

        // Methods
        vm.addDialog = addDialog;
        vm.editDialog = editDialog;
        init();
        //////////

        vm.deleteRow = function deleteRow(key) {
            var ref = rootRef.child('tenant-offer-record-records').child(tenantId).child(key).child('records').orderByChild(key).equalTo(null);
            firebaseUtils.fetchList(ref).then(function (data) {
                if (data.length > 0) {
                    DevExpress.ui.notify("Can not delete the record");
                }
            })
        };

        vm.offerDataSource = new DevExpress.data.CustomStore();

        function init() {
            var gridOptions = dxUtils.createGrid(),
                offerGridOptions = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            OfferService.fetchOfferList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (offerObj) {
                            OfferService.saveOffer(offerObj);
                        },
                        update: function (key, offerObj) {
                            OfferService.updateOffer(key, offerObj);
                        },
                        remove: function (key) {
                            OfferService.deleteOffer(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    },
                    columns: [{
                        dataField: 'date',
                        dataType: 'date',
                        caption: 'Date',
                        validationRules: [{
                            type: 'required',
                            message: 'Date is required'
                        }]
                    }, {
                        dataField: 'description',
                        caption: 'Description',
                        dataType: 'string',
                        validationRules: [{
                            type: 'required',
                            message: 'Description is required'
                        }],
                        editorType: 'dxNumberBox'
                    }, {
                        dataField: 'expiryDate',
                        caption: 'Expires on',
                        dataType: 'date'
                    }],
                    export: {
                        enabled: true,
                        fileName: 'HopHeads Offers',
                        allowExportSelectedData: true
                    },
                    editing: {
                        allowAdding: true,
                        allowUpdating: false,
                        allowDeleting: true,
                        mode: 'row'
                    },
                    onRowRemoving: function (e) {
                        var d = $.Deferred();

                        if (e.data.customers) {
                            d.reject("Can not delete the record");
                        } else {
                            d.resolve();
                        }

                        e.cancel = d.promise();
                    },
                    onRowPrepared: function (info) {
                        if (info.rowType == 'data' && new Date(info.data.expiryDate).getTime() < new Date().getTime())
                            info.rowElement.addClass("md-red-50-bg");
                    }
                };

            vm.offerGridOptions = angular.extend(gridOptions, offerGridOptions);
        }

        /**
        * Add New Row
        */
        function addDialog(ev) {
            $mdDialog.show({
                controller: 'OfferDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/admin/offers/views/dialogs/offer-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    dialogData: {
                        dialogType: 'add'
                    }
                }
            });
        }

        /**
         * Edit Dialog
         */
        function editDialog(ev, formView, formData) {
            $mdDialog.show({
                controller: 'OfferDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/apps/offers/views/dialogs/add-edit/edit-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    dialogData: {
                        chartData: vm.data,
                        dialogType: 'edit',
                        formView: formView,
                        formData: formData
                    }
                }
            });
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.bulkbuys.customers',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.bulkbuys.customers', {
                abstract: true,
                url     : '/customers'
            })
            .state('app.bulkbuys.customers.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/bulkbuys/customers/views/list-view/customers.html',
                        controller : 'BulkbuyCustomersController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }]
                },
                bodyClass: 'customers'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/bulkbuys/customers');

        // Api
        msApiProvider.register('customers.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('customers.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('customers.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('customers.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('customers.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('customers.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('bulkbuys.customers', {
            title: 'Registrations',
            state: 'app.bulkbuys.customers.list',
            icon: 'icon-person-plus'
        });
    }
})();
(function () {
    'use strict';

    CustomersController.$inject = ["$state", "$scope", "msUtils", "$mdDialog", "$document", "$q", "$compile", "BulkbuyCustomerService", "dxUtils", "authService", "firebaseUtils"];
    angular
        .module('app.bulkbuys.customers')
        .controller('BulkbuyCustomersController', CustomersController);

    /** @ngInject */
    function CustomersController($state, $scope, msUtils, $mdDialog, $document, $q, $compile, BulkbuyCustomerService, dxUtils, authService, firebaseUtils) {
        var vm = this,
            tenantId = authService.getCurrentTenant();;
        
        // Methods
        vm.addDialog = addDialog;
        vm.editDialog = editDialog;
        init();
        //////////

        vm.deleteRow = function deleteRow(key) {
            var ref = rootRef.child('tenant-customer-bulkbuy-records').child(tenantId).child(key).child('records').orderByChild(key).equalTo(null);
            firebaseUtils.fetchList(ref).then(function (data) {
                if (data.length > 0) {
                    DevExpress.ui.notify("Can not delete the record");
                }
            })
        };

        vm.customerDataSource = new DevExpress.data.CustomStore();

        function init() {
            var gridOptions = dxUtils.createGrid(),
                customerGridOptions = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            BulkbuyCustomerService.fetchCustomerList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (customerObj) {
                            BulkbuyCustomerService.saveCustomer(customerObj);
                        },
                        update: function (key, customerObj) {
                            BulkbuyCustomerService.updateCustomer(key, customerObj);
                        },
                        remove: function (key) {
                            BulkbuyCustomerService.deleteCustomer(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    },
                    columns: [{
                        dataField: 'name',
                        caption: 'Name',
                        validationRules: [{
                            type: 'required',
                            message: 'Name is required'
                        }],
                    }, {
                        dataField: 'phone',
                        caption: 'Phone',
                        dataType: 'number',
                        validationRules: [{
                            type: 'required',
                            message: 'Phone number is required'
                        }],
                        editorType: 'dxNumberBox'
                    }, {
                        dataField: 'email',
                        caption: 'Email',
                        validationRules: [{
                            type: 'email',
                            message: 'Please enter valid e-mail address'
                        }]
                    }, {
                        dataField: 'source',
                        caption: 'Source'
                    }, {
                        dataField: 'date',
                        caption: 'Date',
                        dataType: 'date',
                        validationRules: [{
                            type: 'required',
                            message: 'Field is required'
                        }]

                    }],
                    export: {
                        enabled: true,
                        fileName: 'Bulkbuy Customers',
                        allowExportSelectedData: true
                    },
                    editing: {
                        allowAdding: true,
                        allowUpdating: true,
                        allowDeleting: true,
                        mode: 'row'
                    },
                    onRowRemoving: function(e) {
                        var d = $.Deferred();
                        var ref = rootRef.child('tenant-customer-bulkbuy-records').child(tenantId).child(e.data.$id).child('records').orderByChild('deactivated').equalTo(null);
                        firebaseUtils.fetchList(ref).then(function (data) {
                            if (data.length > 0) {
                                d.reject("Can not delete the record");
                            } else {
                                d.resolve();
                            }
                        });
                        e.cancel = d.promise();
                    }, 
                    onRowValidating: function(e) {
                        var d = $.Deferred(),
                            ref = rootRef.child('tenant-bulkbuy-customers').child(tenantId).orderByChild('deactivated').equalTo(null);

                        firebaseUtils.fetchList(ref).then(function(data) {
                            var phoneIndex = msUtils.getIndexByArray(data, 'phone', e.newData.phone),
                                emailIndex = msUtils.getIndexByArray(data, 'email', e.newData.email);
                            
                            if(phoneIndex > -1) {
                                e.isValid = false;
                                e.errorText = "Phone number already registered!"
                            } else if(e.newData.email && emailIndex > -1) {
                                e.isValid = false;
                                e.errorText = "Email address already registered!"
                            }
                        });
                    }
                };

            vm.customerGridOptions = angular.extend(gridOptions, customerGridOptions);
        }

        /**
        * Add New Row
        */
        function addDialog(ev) {
            $mdDialog.show({
                controller: 'CustomerDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/admin/customers/views/dialogs/customer-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    dialogData: {
                        dialogType: 'add'
                    }
                }
            });
        }

        /**
         * Edit Dialog
         */
        function editDialog(ev, formView, formData) {
            $mdDialog.show({
                controller: 'CustomerDialogController',
                controllerAs: 'vm',
                templateUrl: 'app/main/apps/customers/views/dialogs/add-edit/edit-dialog.html',
                parent: angular.element($document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {
                    dialogData: {
                        chartData: vm.data,
                        dialogType: 'edit',
                        formView: formView,
                        formData: formData
                    }
                }
            });
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.admin.customers',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.customers', {
                abstract: true,
                url     : '/customers'
            })
            .state('app.customers.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/admin/customers/views/list-view/customers.html',
                        controller : 'CustomersController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }]
                },
                bodyClass: 'customers'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/admin/customers');

        // Api
        msApiProvider.register('customers.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('customers.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('customers.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('customers.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('customers.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('customers.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('hopheads.customers', {
            title: 'Registrations',
            state: 'app.customers.list',
            weight: 1,
            icon: 'icon-person-plus'
        });
    }
})();
(function () {
    'use strict';

    CustomerDialogController.$inject = ["$mdDialog", "dialogData", "customerService"];
    angular
        .module('app.admin.customers')
        .controller('CustomerDialogController', CustomerDialogController);

    /** @ngInject */
    function CustomerDialogController($mdDialog, dialogData, customerService) {
        var vm = this,
            dxFormInstance;

        // Data
        vm.form = {
            from: 'johndoe@creapond.com'
        };

        vm.hiddenCC = true;
        vm.hiddenBCC = true;

        vm.customers = {};

        vm.formOptions = customerService.formOptions();

        // Methods
        vm.closeDialog = closeDialog;

        //////////

        function closeDialog() {
            dxFormInstance = $('#customer-form').dxForm('instance');
            if(dxFormInstance.validate().isValid === true) {
                customerService.saveData(dxFormInstance.option('formData')).then(function(data) {
                    $mdDialog.hide();
                });
            }
            //$mdDialog.hide();
        }
    }
})();

(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.bulkbuys.bookings',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.bulkbuys.bookings', {
                abstract: true,
                url     : '/bookings'
            })
            .state('app.bulkbuys.bookings.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/bulkbuys/bookings/views/list-view/bookings.html',
                        controller : 'BulkBuyBookingsController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }],
                    customers: ["adminService", function(adminService) {
                        return adminService.getCurrentBulkCustomers();
                    }],
                    beers: ["adminService", function(adminService) {
                        return adminService.getBeers();
                    }]
                },
                bodyClass: 'bookings'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/bulkbuys/bookings');

        
    }
})();
(function ()
{
    'use strict';

    BookingsController.$inject = ["$state", "$scope", "$mdDialog", "$document", "BulkBuysBookingService", "customers", "beers"];
    angular
        .module('app.bulkbuys.bookings')
        .controller('BulkBuyBookingsController', BookingsController);

    /** @ngInject */
    function BookingsController($state, $scope, $mdDialog, $document, BulkBuysBookingService, customers, beers)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.bookingGridOptions = BulkBuysBookingService.gridOptions('vm.bookings', customers, beers);
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.settings.taxgroups',
            [
                // 3rd Party Dependencies
                'app.settings.taxes',
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.taxgroups', {
                abstract: true,
                url     : '/taxgroups'
            })
            .state('app.taxgroups.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/settings/taxgroups/views/list-view/taxgroups.html',
                        controller : 'TaxgroupsController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["settingsService", function(settingsService) {
                        return settingsService.getCurrentSettings();
                    }]
                },
                bodyClass: 'taxgroups'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/settings/taxgroups');

        // Api
        msApiProvider.register('taxgroups.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('taxgroups.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('taxgroups.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('taxgroups.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('taxgroups.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('taxgroups.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('settings.taxgroups', {
            title: 'Taxgroups',
            state: 'app.taxgroups.list'
        });
    }
})();
(function ()
{
    'use strict';

    TaxgroupsController.$inject = ["$state", "$scope", "$mdDialog", "$document", "$q", "taxService", "taxgroupService"];
    angular
        .module('app.settings.taxgroups')
        .controller('TaxgroupsController', TaxgroupsController);

    /** @ngInject */
    function TaxgroupsController($state, $scope, $mdDialog, $document, $q, taxService, taxgroupService)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
           var defer = $q.defer();
            taxService.fetchTaxList().then(function (data) {
                vm.taxData = data;
                var orders = new DevExpress.data.DataSource({
                    key: "defaultRate",
                    load: function (loadOptions) {
                        var deferred = $.Deferred();
                        deferred.resolve(vm.taxData);
                        return deferred.promise();
                    }
                });
                vm.taxgroupGridOptions = taxgroupService.gridOptions('vm.taxgroups');
                vm.taxDataGridOptions = taxgroupService.taxGrid(orders);
            });
            return defer.promise;
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.settings.taxes',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.taxes', {
                abstract: true,
                url     : '/taxes'
            })
            .state('app.taxes.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/settings/taxes/views/list-view/taxes.html',
                        controller : 'TaxesController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["settingsService", function(settingsService) {
                        return settingsService.getCurrentSettings();
                    }]
                },
                bodyClass: 'taxes'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/settings/taxes');

        // Api
        msApiProvider.register('taxes.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('taxes.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('taxes.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('taxes.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('taxes.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('taxes.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('settings.taxes', {
            title: 'Taxes',
            state: 'app.taxes.list'
        });
    }
})();
(function ()
{
    'use strict';

    TaxesController.$inject = ["$state", "$scope", "$mdDialog", "$document", "taxService"];
    angular
        .module('app.settings.taxes')
        .controller('TaxesController', TaxesController);

    /** @ngInject */
    function TaxesController($state, $scope, $mdDialog, $document, taxService)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.taxGridOptions = taxService.gridOptions('vm.taxes');
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.vendings',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.vendings', {
                abstract: true,
                url     : '/vendings'
            })
            .state('app.vendings.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/vendings/views/list-view/vendings.html',
                        controller : 'VendingsController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }],
                    customers: ["adminService", function(adminService) {
                        return adminService.getCurrentCustomers();
                    }],
                    beers: ["adminService", function(adminService) {
                        return adminService.getBeers();
                    }]
                },
                bodyClass: 'vendings'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/vendings');

        // // Navigation
        // msNavigationServiceProvider.saveItem('apps', {
        //     title : 'Applications',
        //     group : true,
        //     weight: 1
        // });

        msNavigationServiceProvider.saveItem('vendings', {
            title: 'Vendings',
            state: 'app.vendings.list'
        });
    }
})();
(function () {
    'use strict';

    VendingsController.$inject = ["$state", "$scope", "$q", "$mdDialog", "$document", "firebaseUtils", "authService", "vendingService", "config", "customers", "beers", "dxUtils"];
    angular
        .module('app.vendings')
        .controller('VendingsController', VendingsController);

    /** @ngInject */
    function VendingsController($state, $scope, $q, $mdDialog, $document, firebaseUtils, authService, vendingService, config, customers, beers, dxUtils) {
        var vm = this,
            brewGridInstance,
            vendorGridInstance,
            tenantId = authService.getCurrentTenant();

        // Data

        // Methods
        init();
        //////////

        function init() {
            //vm.vendingGridOptions = vendingService.gridOptions('vm.vendings', customers, beers);
            //vm.brewDataGridOptions = vendingService.brewGrid(beers);
            vm.brewDataSource = [];
        }

        $scope.$on('VendorFormInitialized', function (event, data) {
        });

        /**
         * Sub Grid
         */
        vm.brewDataGridOptions = dxUtils.createGrid();
        var otherConfig = {
            dataSource: {
                load: function (options) {
                    var defer = $q.defer();
                    vendingService.fetchInvoiceVendingList(vm.currentRowKey).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                insert: function (vendingObj) {
                    vendingObj.invoice = vm.currentRowKey;
                    vendingService.saveInvoiceVending(vendingObj);
                },
                update: function (key, vendingObj) {
                    vendingObj.invoice = vm.currentRowKey;
                    vendingService.updateInvoiceVending(key, vendingObj);
                },
                remove: function (key) {
                    vendingService.deleteInvoiceVending(key, vm.currentRowKey);
                }
            },
            columns: [{
                dataField: 'beerSelected',
                label: {
                    text: 'Brew'
                },
                lookup: {
                    dataSource: beers,
                    displayExpr: "name",
                    valueExpr: "$id"
                },
                validationRules: [{
                    type: 'required',
                    message: 'Please select a brew'
                }]
            }, {
                dataField: 'quantity',
                caption: 'Units (Per unit 0.5 Ltr)',
                dataType: 'number',
                validationRules: [{
                    type: 'required',
                    message: 'Please select a quantity'
                }]
            }],
            searchPanel: {
                visible: false
            },
            columnChooser: {
                enabled: false
            },
            editing: {
                allowAdding: true,
                allowUpdating: true,
                allowDeleting: true,
                mode: 'batch'
            },
            onContentReady: function (e) {
                brewGridInstance = e.component;
            },
            showBorders: true
        };
        angular.extend(vm.brewDataGridOptions, otherConfig);


        /**
         * Main Grid
         */
        vm.vendingGridOptions = {
            dataSource: {
                load: function (options) {
                    var defer = $q.defer();
                    vendingService.fetchVendingList().then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                insert: function (vendingObj) {
                    vendingService.saveVending(vendingObj);
                },
                update: function (key, vendingObj) {
                    vendingService.updateVending(key, vendingObj);
                },
                remove: function (key) {
                    vendingService.deleteVending(key);
                }
            },
            summary: {
                totalItems: [{
                    column: 'name',
                    summaryType: 'count'
                }]
            },
            editing: {
                allowAdding: true,
                allowUpdating: true,
                allowDeleting: true,
                mode: 'form',
                form: vendingService.vendingForm(customers, beers)
            },
            columns: config.vendingGridCols(tenantId, customers, beers),
            export: {
                enabled: true,
                fileName: 'Vendings',
                allowExportSelectedData: true
            },
            onEditorPrepared: function (e) {
                if (e.row && e.row.data && e.row.data.$id) {
                    vm.brewDataSource = e.row.data.brews;
                    vm.editMode = true;
                } else {
                    vm.brewDataSource = [];
                    vm.editMode = false;
                }
            }, loadPanel: {
                enabled: true
            },
            onRowExpanded: function(e) {
                if(e.key) {
                    vm.currentRowKey = e.key.$id;
                }
            },
            scrolling: {
                mode: 'virtual'
            },
            headerFilter: {
                visible: false
            },
            searchPanel: {
                visible: true,
                width: 240,
                placeholder: 'Search...'
            },
            columnChooser: {
                enabled: true
            },
            onContentReady: function (e) {
                vendorGridInstance = e.component;
                e.component.option('loadPanel.enabled', false);
            },
            showColumnLines: false,
            showRowLines: true,
            showBorders: false,
            rowAlternationEnabled: true,
            columnAutoWidth: true,
            sorting: {
                mode: 'none'
            },
            masterDetail: {
                enabled: true,
                template: "brewTemplate"
            }
        };

        vm.brewDataSource = new DevExpress.data.CustomStore();
    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.shipments',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.shipments', {
                abstract: true,
                url     : '/shipments'
            })
            .state('app.shipments.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/shipments/views/list-view/shipments.html',
                        controller : 'ShipmentsController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }]
                },
                bodyClass: 'shipments'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/shipments');

      
        msNavigationServiceProvider.saveItem('shipments', {
            title: 'Shipments',
            state: 'app.shipments.list'
        });
    }
})();
(function ()
{
    'use strict';

    ShipmentsController.$inject = ["$state", "$scope", "$mdDialog", "$document", "shipmentService"];
    angular
        .module('app.shipments')
        .controller('ShipmentsController', ShipmentsController);

    /** @ngInject */
    function ShipmentsController($state, $scope, $mdDialog, $document, shipmentService)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.shipmentGridOptions = shipmentService.gridOptions('vm.shipments');
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.records',
            [   
                'app.records.offers',
                'app.records.redeems',
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.records', {
                abstract: true,
                url     : '/records'
            })
            .state('app.records.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/records/views/list-view/records.html',
                        controller : 'RecordsController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }],
                    customers: ["adminService", function(adminService) {
                        return adminService.getCurrentCustomers();
                    }],
                    beers: ["adminService", function(adminService) {
                        return adminService.getBeers();
                    }]
                },
                bodyClass: 'records'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/records');

        // // Navigation
        // msNavigationServiceProvider.saveItem('apps', {
        //     title : 'Applications',
        //     group : true,
        //     weight: 1
        // });

        // Navigation
        msNavigationServiceProvider.saveItem('hopheads', {
            title : 'HopHeads',
            group : true,
            weight: 2
        });

        msNavigationServiceProvider.saveItem('hopheads.records', {
            weight: 2,
            title: 'Sales',
            state: 'app.records.list',
            icon: 'icon-sale'
        });
    }
})();
(function ()
{
    'use strict';

    RecordsController.$inject = ["$state", "$scope", "$mdDialog", "$document", "recordService", "customers", "beers"];
    angular
        .module('app.records')
        .controller('RecordsController', RecordsController);

    /** @ngInject */
    function RecordsController($state, $scope, $mdDialog, $document, recordService, customers, beers)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.recordGridOptions = recordService.gridOptions('vm.records', customers, beers);
        }

    }
})();
(function () {
    'use strict';

    redeemService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.records.redeems')
        .factory('redeemService', redeemService);

    /** @ngInject */
    function redeemService($firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant(),
            formInstance;
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveRedeem: saveRedeem,
            updateRedeem: updateRedeem,
            fetchRedeemList: fetchRedeemList,
            redeemForm: redeemForm
        };

        return service;

        //////////

        function redeemForm(customerList, beerList) {
            var redeemForm = {
                onInitialized: function (e) {
                    formInstance = e.component;
                },
                items: [{
                    itemType: "group",
                    caption: "Information",
                    colSpan: 2,
                    colCount: 2,
                    items: [
                        {
                            dataField: 'date',
                            label: {
                                text: 'Date'
                            },
                            editorType: 'dxDateBox',
                            editorOptions: {
                                width: '100%',
                                onInitialized: function (e) {
                                    e.component.option('value', new Date());
                                }
                            },
                            validationRules: [{
                                type: 'required',
                                message: 'Date is required'
                            }]
                        }, {
                            dataField: 'invoice',
                            label: {
                                text: 'Invoice'
                            },
                            validationRules: [{
                                type: 'required',
                                message: 'Invoice number is required'
                            }]
                        }, {
                            dataField: 'customerSelected',
                            label: {
                                text: 'Customer'
                            },
                            editorType: 'dxSelectBox',
                            editorOptions: {
                                dataSource: customerList,
                                displayExpr: "name",
                                valueExpr: "$id",
                                searchExpr: ["name", "phone", "HHID"],
                                itemTemplate: function (itemData, itemIndex, itemElement) {
                                    var rightBlock = $("<div style='display:inline-block;'>");
                                    rightBlock.append("<p style='font-size:larger;'><b>" + itemData.name + "</b></p>");
                                    rightBlock.append("<p>Phone: <span>" + itemData.phone + "</span></p>");
                                    rightBlock.append("<p>HopHead ID: <span>" + itemData.HHID + "</span></p>");
                                    itemElement.append(rightBlock);
                                }, onSelectionChanged: function (customer) {
                                    if (customer.selectedItem && customer.selectedItem.$id) {
                                        formInstance.getEditor('offers').option('items', '');
                                        var ref = rootRef.child('tenant-redeem-offers').child(tenantId).orderByChild('deactivated').equalTo(null);
                                        firebaseUtils.fetchList(ref).then(function (data) {
                                            var selectedList = [];
                                            for (var item = 0; item < data.length; item++) {
                                                if (data[item].customers && (!data[item].customers.hasOwnProperty(customer.selectedItem.$id) || data[item].customers[customer.selectedItem.$id] === false)) {
                                                    selectedList.push(data[item]);
                                                } else if (!data[item].customers) {
                                                    selectedList.push(data[item]);
                                                }
                                            }
                                            formInstance.getEditor('offers').option('items', selectedList);
                                        });
                                    }
                                }
                            },
                            validationRules: [{
                                type: 'required',
                                message: 'Please select a customer'
                            }]
                        }, 'amountOnBeer', 'amountOnLiquor', 'amountOnFood'
                    ]
                },
                {
                    itemType: "group",
                    caption: "Redeem Offers",
                    colSpan: 2,
                    colCount: 2,
                    items: [{
                        dataField: 'offers',
                        label: {
                            text: 'Select Offers'
                        },
                        name: 'offers',
                        editorOptions: {
                            displayExpr: "description",
                            valueExpr: "$id",
                            noDataText: 'No offers available',
                            showSelectionControls: true,
                            applyValueMode: "useButtons"
                        },
                        editorType: 'dxTagBox'
                    }]
                }]
            };
            return redeemForm;
        }
        /**
         * Grid Options for redeem list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource, customers, beers, offers) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchRedeemList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (redeemObj) {
                            var data = formInstance.option('formData');
                            if (data.offers) {
                                redeemObj.offers = data.offers;
                            }
                            saveRedeem(redeemObj);
                        },
                        update: function (key, redeemObj) {
                            var data = formInstance.option('formData');
                            if (data.offers) {
                                redeemObj.offers = data.offers;
                            }
                            updateRedeem(key, redeemObj);
                        },
                        remove: function (key) {
                            deleteRedeem(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'amountOnLiquor',
                            summaryType: 'sum'
                        }, {
                            column: 'amountOnBeer',
                            summaryType: 'sum'
                        }, {
                            column: 'amountOnFood',
                            summaryType: 'sum'
                        }, {
                            column: 'total',
                            summaryType: 'sum',
                            customizeText: function (data) {
                                return 'Total ' + data.value;
                            }
                        }]
                    },
                    editing: {
                        allowAdding: false,
                        allowUpdating: false,
                        allowDeleting: false,
                        mode: 'form',
                        form: redeemForm(customers, beers)
                    },
                    columns: config.redeemGridCols(tenantId, customers, beers, offers),
                    export: {
                        enabled: true,
                        fileName: 'Redeems',
                        allowExportSelectedData: true
                    }

                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Redeem Form data
         */
        function saveRedeem(redeemObj) {
            var ref = rootRef.child('tenant-redeems').child(tenantId);
            if (!redeemObj.date) {
                redeemObj.date = new Date();
            }
            redeemObj.date = redeemObj.date.toString();
            redeemObj.user = auth.$getAuth().uid;
            firebaseUtils.addData(ref, redeemObj).then(function (key) {
                var mergeObj = {};
                mergeObj['tenant-customer-redeems/' + tenantId + '/' + redeemObj.customerSelected + '/redeems/' + key] = redeemObj;
                if (redeemObj.offers) {
                    mergeObj['tenant-customer-redeems/' + tenantId + '/' + redeemObj.customerSelected + '/offers/' + key] = redeemObj.offers;
                }
                firebaseUtils.updateData(rootRef, mergeObj).then(function (data) {
                    if (!redeemObj.offers) {
                        return;
                    }
                    var ref = rootRef.child('tenant-redeem-offers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (offers) {
                        var mergeObj = {};
                        for (var i = 0; i < redeemObj.offers.length; i++) {
                            if (config.getIndexByArray(offers, '$id', redeemObj.offers[i]) > -1) {
                                mergeObj['tenant-redeem-offers/' + tenantId + '/' + redeemObj.offers[i] + '/customers/' + redeemObj.customerSelected] = true;
                            }
                        }
                        return firebaseUtils.updateData(rootRef, mergeObj);
                    });
                });
            });
        }

        /**
         * Fetch redeem list
         * @returns {Object} Redeem data
         */
        function fetchRedeemList() {
            var ref = rootRef.child('tenant-redeems').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch redeem list
         * @returns {Object} Redeem data
         */
        function updateRedeem(key, redeemData) {
            var ref = rootRef.child('tenant-redeems').child(tenantId).child(key['$id']);
            firebaseUtils.updateData(ref, redeemData).then(function (key) {
                var mergeObj = {};
                mergeObj['tenant-customer-redeems/' + tenantId + '/' + key.customerSelected + '/redeems/' + key['$id']] = redeemData;
                firebaseUtils.updateData(rootRef, mergeObj);
            });;
        }

        /**
         * Delete Redeem
         * @returns {Object} redeem data
         */
        function deleteRedeem(key) {
            var mergeObj = {};
            mergeObj['tenant-redeems/' + tenantId + '/' + key['$id'] + '/deactivated'] = false;
            mergeObj['tenant-customer-redeems/' + tenantId + '/' + key.customerSelected + '/redeems/' + key['$id'] + '/deactivated'] = false;
            //mergeObj['tenant-bulkbuy-redeems-deactivated/'+ tenantId + '/' + key['$id']] = key;
            mergeObj['tenant-customer-redeems/' + tenantId + '/' + key.customerSelected + '/offers/' + key['$id'] + '/deactivated'] = false;
            firebaseUtils.updateData(rootRef, mergeObj).then(function (redeems) {
                var mergeObj = {};
                if (key.offers) {
                    var ref = rootRef.child('tenant-record-offers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (offers) {
                        var mergeObj = {};
                        for (var i = 0; i < key.offers.length; i++) {
                            if (config.getIndexByArray(offers, '$id', key.offers[i]) > -1) {
                                mergeObj['tenant-redeem-offers/' + tenantId + '/' + key.offers[i] + '/customers/' + key.customerSelected] = false;
                            }
                        }
                        return firebaseUtils.updateData(rootRef, mergeObj);
                    });
                }
            });
        }

    }
}());
(function () {
    'use strict';

    OfferService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "msUtils", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.records.offers')
        .factory('OfferService', OfferService);

    /** @ngInject */
    function OfferService($firebaseArray, $firebaseObject, $q, authService, auth, msUtils, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant();
        // Private variables

        var service = {
            formOptions: formOptions,
            saveOffer: saveOffer,
            updateOffer: updateOffer,
            deleteOffer: deleteOffer,
            fetchOfferList: fetchOfferList
        };

        var quantityList = [{
            id: 0,
            quantity: 6
        }, {
            id: 1,
            quantity: 10
        }, {
            id: 2,
            quantity: 20
        }];

        return service;

        //////////

        /**
         * Return form Item Configuration
         * @returns {Object} Item configuration
         */
        function formOptions() {
            var formOptionsItems = {
                minColWidth: 233,
                colCount: "auto",
                labelLocation: "top",
                validationGroup: "offerData",
                items: [{
                    dataField: 'name',
                    caption: 'Name',
                    validationRules: [{
                        type: 'required',
                        message: 'Name is required'
                    }],
                }, {
                    dataField: 'phone',
                    caption: 'Phone',
                    validationRules: [{
                        type: 'required',
                        message: 'Phone number is required'
                    }],
                    editorType: 'dxNumberBox'
                }, {
                    dataField: 'email',
                    caption: 'Email',
                    validationRules: [{
                        type: 'email',
                        message: 'Please enter valid e-mail address'
                    }]
                }, {
                    dataField: 'source',
                    caption: 'Source'
                }, {
                    dataField: 'date',
                    caption: 'Date',
                    editorType: 'dxDateBox',
                    validationRules: [{
                        type: 'required',
                        message: 'Field is required'
                    }],
                    editorOptions: {
                        width: '100%',
                        onInitialized: function (e) {
                            e.component.option('value', new Date());
                        }
                    }

                }]
            };
            return formOptionsItems;
        }


        /**
         * Save form data
         * @returns {Object} Offer Form data
         */
        function saveOffer(offerObj) {
            var ref = rootRef.child('tenant-record-offers').child(tenantId);
            offerObj.user = auth.$getAuth().uid;
            if (!offerObj.date) {
                offerObj.date = new Date();
            }

            if(offerObj.expiryDate) {
                offerObj.expiryDate = offerObj.expiryDate.toString();
            }
            offerObj.date = offerObj.date.toString();
            return firebaseUtils.addData(ref, offerObj);
        }

        /**
         * Fetch offer list
         * @returns {Object} Offer data
         */
        function fetchOfferList() {
            var ref = rootRef.child('tenant-record-offers').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch offer list
         * @returns {Object} Offer data
         */
        function updateOffer(key, offerData) {
            var ref = rootRef.child('tenant-record-offers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, offerData);
        }

        /**
         * Delete Offer
         * @returns {Object} offer data
         */
        function deleteOffer(key) {
            var ref = rootRef.child('tenant-record-offers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, { deactivated: false });
        }

    }
}());
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.bulkbuys',
            [   
                'app.bulkbuys.customers',
                'app.bulkbuys.bookings',
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.bulkbuys', {
                abstract: true,
                url     : '/bulkbuys'
            })
            .state('app.bulkbuys.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/bulkbuys/views/list-view/bulkbuys.html',
                        controller : 'BulkbuysController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }],
                    customers: ["adminService", function(adminService) {
                        return adminService.getCurrentBulkCustomers();
                    }],
                    beers: ["adminService", function(adminService) {
                        return adminService.getBeers();
                    }]
                },
                bodyClass: 'bulkbuys'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/bulkbuys');

        // Navigation
        // msNavigationServiceProvider.saveItem('apps', {
        //     title : 'Applications',
        //     group : true,
        //     weight: 1
        // });

        // Navigation
        msNavigationServiceProvider.saveItem('bulkbuys', {
            title : 'Bulk Buy',
            group : true,
            weight: 2
        });

        msNavigationServiceProvider.saveItem('bulkbuys.customers', {
            title: 'Registrations',
            state: 'app.bulkbuys.customers.list',
            weight: 0
            
        });

        msNavigationServiceProvider.saveItem('bulkbuys.activation', {
            title: 'Assign Quantity',
            state: 'app.bulkbuys.list',
            weight: 1,
            icon: 'icon-plus'
        });

        msNavigationServiceProvider.saveItem('bulkbuys.bookings', {
            title: 'Redemption',
            state: 'app.bulkbuys.bookings.list',
            weight: 2,
            icon: 'icon-beer'
        });

    }
})();
(function () {
    'use strict';

    BulkbuysController.$inject = ["$state", "$scope", "$mdDialog", "$q", "$document", "authService", "firebaseUtils", "config", "msUtils", "dxUtils", "bulkbuyService", "customers", "beers", "BulkbuyCustomerService"];
    angular
        .module('app.bulkbuys')
        .controller('BulkbuysController', BulkbuysController);

    /** @ngInject */
    function BulkbuysController($state, $scope, $mdDialog, $q, $document, authService, firebaseUtils, config, msUtils, dxUtils, bulkbuyService, customers, beers, BulkbuyCustomerService) {
        var vm = this,
            tenantId = authService.getCurrentTenant(),
            customerFormInstance,
            formInstance,
            dataGridInstance,
            quantityList = [{
                id: 0,
                quantity: 6
            }, {
                id: 1,
                quantity: 10
            }, {
                id: 2,
                quantity: 20
            }];

        // Data
        $scope.customers = customers;
        // Methods
        init();
        //////////

        function init() {
            vm.bulkbuyGridOptions = gridOptions('vm.bulkbuys', $scope.customers, beers);
        }

        $scope.popupOptions = {
            contentTemplate: "info",
            showTitle: true,
            width: '70%',
            height: 'auto',
            title: "Add Quantity",
            dragEnabled: false,
            closeOnOutsideClick: true,
            bindingOptions: {
                visible: "visiblePopup"
            },
            onHidden: function () {
                resetValues();
            }
        };

        function resetValues() {
            formInstance.resetValues();
            formInstance.getEditor('date').option('value', new Date());
            formInstance.getEditor('invoice').focus();
        }
        
        $scope.buttonOptions = {
            text: "Save and Exit",
            type: "success",
            useSubmitBehavior: true,
            validationGroup: "customerData",
            onClick: function (e) {
                submitForm(e).then(function() {
                    $scope.visiblePopup = false;   
                });
            } 
        };

        $scope.saveNewBttonOptions = {
            text: "Save and New",
            type: "info",
            useSubmitBehavior: true,
            validationGroup: "customerData",
            onClick: function (e) {
                submitForm(e);
            }
        };

        function submitForm(e) {
            var defer = $q.defer();
            var result = e.validationGroup.validate();
            if (result.isValid == true) {
                var formData = formInstance.option('formData');
                var ref = rootRef.child('tenant-bulkbuy-customers').child(tenantId).orderByChild('deactivated').equalTo(null);
                firebaseUtils.fetchList(ref).then(function (data) {
                    var phoneIndex = msUtils.getIndexByArray(data, 'phone', formData.phone),
                        emailIndex = msUtils.getIndexByArray(data, 'email', formData.email);

                    if (phoneIndex > -1 || emailIndex > -1) {
                        var bookingData = angular.copy(formData);
                        bookingData.bookingName = bookingData.customerSelected;
                        if(phoneIndex > -1) {
                            bookingData.customerSelected = data[phoneIndex].$id;
                        } else if(phoneIndex < 0 && emailIndex > -1) {
                            bookingData.customerSelected = data[emailIndex].$id;
                        }
                        bulkbuyService.saveBulkbuy(bookingData).then(function () {
                            init();
                            dataGridInstance.refresh();
                            resetValues();
                            defer.resolve();
                        });
                    } else {
                        var customerObj = {
                            name: formData.customerSelected,
                            phone: formData.phone,
                            date: formData.date
                        };

                        if (formData.email) {
                            customerObj.email = formData.email;
                        }

                        BulkbuyCustomerService.saveCustomer(customerObj).then(function (key) {
                            var bookingData = angular.copy(formData);
                            bookingData.bookingName = bookingData.customerSelected;
                            bookingData.customerSelected = key;
                            BulkbuyCustomerService.fetchCustomerList().then(function (data) {
                                $scope.customers = data;
                                if (formInstance) {
                                    formInstance.repaint();
                                }

                            });

                            bulkbuyService.saveBulkbuy(bookingData).then(function () {
                                init();
                                dataGridInstance.refresh();
                                resetValues();
                                defer.resolve();
                            });
                        });
                    }
                });
            }
            return defer.promise;
        }

        /**
         * Bulk buy form
         * @param {*} customerList 
         * @param {*} beerList 
         */
        vm.bulkgridForm = {
            colCount: 2,
            onInitialized: function (e) {
                formInstance = e.component;
            },
            validationGroup: "customerData",
            items: [{
                dataField: 'date',
                label: {
                    text: 'Date'
                },
                editorType: 'dxDateBox',
                editorOptions: {
                    width: '100%',
                    onInitialized: function (e) {
                        e.component.option('value', new Date());
                    }
                },
                validationRules: [{
                    type: 'required',
                    message: 'Date is required'
                }]
            }, {
                dataField: 'invoice',
                caption: 'Invoice',
                dataType: 'string',
                validationRules: [{
                    type: 'required',
                    message: 'Invoice number is required'
                }]
            }, {
                dataField: 'customerSelected',
                label: {
                    text: 'Customer'
                },
                name: 'customerSelected',
                editorType: 'dxAutocomplete',
                editorOptions: {
                    dataSource: $scope.customers,
                    displayExpr: "name",
                    valueExpr: "$id",
                    searchExpr: ["name"],
                    onSelectionChanged: function (data) {
                        if (data.selectedItem && data.selectedItem.$id) {
                            formInstance.getEditor('phone').option('value', data.selectedItem.phone);
                            formInstance.getEditor('email').option('value', data.selectedItem.email);
                        }
                    }
                },
                validationRules: [{
                    type: 'required',
                    message: 'Please select a customer'
                }]
            }, {
                dataField: "phone",
                label: {
                    text: "Phone"
                },
                name: 'phone',
                validationRules: [{
                    type: 'required',
                    message: 'Phone number is required!'
                }],
                editorType: 'dxNumberBox'
            }, {
                dataField: "email",
                label: {
                    text: "Email"
                },
                name: 'email',
                editorType: 'dxTextBox',
                validationRules: [{
                    type: 'email',
                    message: 'Please enter valid e-mail address'
                }]
            }, {
                dataField: "quantity",
                label: {
                    text: "Units (0.5 Ltrs per unit)"
                },
                editorType: 'dxSelectBox',
                editorOptions: {
                    dataSource: quantityList,
                    displayExpr: "quantity",
                    valueExpr: "id"
                },
                validationRules: [{
                    type: 'required',
                    message: 'Please select a quantity'
                }]
            }]
        };
        /**
         * Grid Options for bulkbuy list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource, customers, beers) {
            $scope.gridCols = config.bulkbuyGridCols(tenantId, customers, beers);
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            bulkbuyService.fetchBulkbuyList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (bulkbuyObj) {
                            //var data = formInstance.option('formData');
                            bulkbuyService.saveBulkbuy(bulkbuyObj);
                        },
                        update: function (key, bulkbuyObj) {
                            bulkbuyService.updateBulkbuy(key, bulkbuyObj);
                        },
                        remove: function (key) {
                            bulkbuyService.deleteBulkbuy(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'balancedQuantity',
                            summaryType: 'sum',
                            texts: {
                                sum: 'Total Balanced'
                            }
                        }]
                    },
                    editing: {
                        allowAdding: false,
                        allowUpdating: false,
                        allowDeleting: true,
                        mode: 'form'
                    },
                    bindingOptions: {
                        columns: 'gridCols'
                    },
                    export: {
                        enabled: true,
                        fileName: 'Bulkbuys',
                        allowExportSelectedData: true
                    },
                    onRowRemoving: function (e) {
                        var d = $.Deferred();

                        if (quantityList[e.data.quantity].quantity > e.data.balancedQuantity || new Date(e.data.expiryDate) < new Date()) {
                            d.reject("Can not delete the record");
                        } else {
                            d.resolve();
                        }
                        e.cancel = d.promise();
                    },
                    onRowInserted: function (e) {
                        init();
                        dataGridInstance.repaint();
                        dataGridInstance.refresh();
                    }, onToolbarPreparing: function (e) {
                        e.toolbarOptions.items.unshift({
                            location: "before",
                            widget: "dxButton",
                            options: {
                                text: "Add Quantity",
                                type: "success",
                                onClick: function (e) {
                                    $scope.visiblePopup = true;
                                }
                            }
                        });
                    },
                    onContentReady: function (e) {
                        dataGridInstance = e.component;
                    },
                    onRowPrepared: function (info) {
                        if (info.rowType == 'data' && new Date(info.data.expiryDate).getTime() < new Date().getTime())
                            info.rowElement.addClass("md-red-50-bg");
                    }
                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

    }
})();
(function () {
    'use strict';

    customerService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "msUtils", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.bulkbuys.customers')
        .factory('BulkbuyCustomerService', customerService);

    /** @ngInject */
    function customerService($firebaseArray, $firebaseObject, $q, authService, auth, msUtils, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant();
        // Private variables

        var service = {
            formOptions: formOptions,
            saveCustomer: saveCustomer,
            updateCustomer: updateCustomer,
            deleteCustomer: deleteCustomer,
            fetchCustomerList: fetchCustomerList
        };

        var quantityList = [{
            id: 0,
            quantity: 6
        }, {
            id: 1,
            quantity: 10
        }, {
            id: 2,
            quantity: 20
        }];

        return service;

        //////////

        /**
         * Return form Item Configuration
         * @returns {Object} Item configuration
         */
        function formOptions() {
            var formOptionsItems = {
                minColWidth: 233,
                colCount: "auto",
                labelLocation: "top",
                validationGroup: "customerData",
                items: [{
                    dataField: 'name',
                    caption: 'Name',
                    validationRules: [{
                        type: 'required',
                        message: 'Name is required'
                    }],
                }, {
                    dataField: 'phone',
                    caption: 'Phone',
                    validationRules: [{
                        type: 'required',
                        message: 'Phone number is required'
                    }],
                    editorType: 'dxNumberBox'
                }, {
                    dataField: 'email',
                    caption: 'Email',
                    validationRules: [{
                        type: 'email',
                        message: 'Please enter valid e-mail address'
                    }]
                }, {
                    dataField: 'source',
                    caption: 'Source'
                }, {
                    dataField: 'date',
                    caption: 'Date',
                    editorType: 'dxDateBox',
                    validationRules: [{
                        type: 'required',
                        message: 'Field is required'
                    }],
                    editorOptions: {
                        width: '100%',
                        onInitialized: function (e) {
                            e.component.option('value', new Date());
                        }
                    }

                }]
            };
            return formOptionsItems;
        }


        /**
         * Save form data
         * @returns {Object} Customer Form data
         */
        function saveCustomer(customerObj) {
            var ref = rootRef.child('tenant-bulkbuy-customers').child(tenantId);
            customerObj.user = auth.$getAuth().uid;
            if (!customerObj.date) {
                customerObj.date = new Date();
            }
            customerObj.date = customerObj.date.toString();
            return firebaseUtils.addData(ref, customerObj);
        }

        /**
         * Fetch customer list
         * @returns {Object} Customer data
         */
        function fetchCustomerList() {
            var ref = rootRef.child('tenant-bulkbuy-customers').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch customer list
         * @returns {Object} Customer data
         */
        function updateCustomer(key, customerData) {
            var ref = rootRef.child('tenant-bulkbuy-customers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, customerData);
        }

        /**
         * Delete Customer
         * @returns {Object} customer data
         */
        function deleteCustomer(key) {
            var ref = rootRef.child('tenant-bulkbuy-customers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, { deactivated: false });
        }

    }
}());
(function () {
    'use strict';

    bookingService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.bulkbuys.bookings')
        .factory('BulkBuysBookingService', bookingService);

    /** @ngInject */
    function bookingService($firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant(),
            formInstance,
            customerList,
            statusList,
            chargesList,
            formData,
            tenantBulkBuyTable = 'tenant-bulkbuy-bookings';
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveBooking: saveBooking,
            updateBooking: updateBooking,
            fetchBookingList: fetchBookingList,
            bookingForm: bookingForm
        };

        var quantityList = [{
            id: 0,
            quantity: 6
        }, {
            id: 1,
            quantity: 10
        }, {
            id: 2,
            quantity: 20
        }];

        return service;

        //////////

        function bookingForm(customerList, beerList) {
            var bookingForm = {
                colCount: 2,
                dataSource: {
                    load: function () {
                        var defer = $q.defer();
                        fetchBookingList().then(function (data) {
                            defer.resolve(data);
                        });
                        return defer.promise;
                    },
                    insert: function (bookingObj) {
                        var data = formInstance.option('formData');
                        saveBooking(bookingObj);
                    },
                    update: function (key, bookingObj) {
                        updateBooking(key, bookingObj);
                    },
                    remove: function (key) {
                        deleteBooking(key);
                    }
                },
                onInitialized: function (e) {
                    formInstance = e.component;
                },
                items: [{
                    dataField: 'date',
                    name: 'redeemdate',
                    label: {
                        text: 'Date'
                    },
                    editorType: 'dxDateBox',
                    width: '100%',
                    editorOptions: {
                        onInitialized: function (e) {
                            e.component.option('value', new Date());
                        }
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Date is required'
                    }]
                }, {
                    dataField: 'customerSelected',
                    label: {
                        text: 'Customer'
                    },
                    name: 'customer',
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        dataSource: customerList,
                        displayExpr: "name",
                        valueExpr: "$id",
                        searchExpr: ["name", "phone", "email"],
                        itemTemplate: function (itemData, itemIndex, itemElement) {
                            var rightBlock = $("<div style='display:inline-block;'>");
                            rightBlock.append("<p style='font-size:larger;'><b>" + itemData.name + "</b></p>");
                            rightBlock.append("<p>Phone: <span>" + itemData.phone + "</span></p>");
                            rightBlock.append("<p>Email Id: <span>" + itemData.email ? itemData.email : '' + "</span></p>");
                            itemElement.append(rightBlock);
                        },
                        onValueChanged: function (e) {
                            if (e.value) {
                                var ref = rootRef.child('tenant-customer-bulkbuy-records').child(tenantId).child(e.value).child('records').orderByChild('deactivated').equalTo(null);
                                firebaseUtils.fetchList(ref).then(function (data) {
                                    var sum = 0;
                                    data.forEach(function (record) {
                                        if (new Date(record.expiryDate).getTime() > new Date().getTime()) {
                                            sum += record['balancedQuantity'];
                                        }
                                    });
                                    formInstance.getEditor('quantity').option('max', sum);
                                    formInstance.getEditor('balancedUnits').option('value', sum);
                                });
                            } else {
                                formInstance.itemOption('balancedUnits', 'visible', false);
                            }
                        }
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Please select a customer'
                    }]
                }, {
                    dataField: "quantity",
                    name: 'redeemQuantity',
                    label: {
                        text: 'Units (0.5 Ltrs per unit)'
                    },
                    width: 125,
                    editorType: 'dxNumberBox',
                    validationRules: [{
                        type: 'required',
                        message: 'Please select a quantity'
                    }, {
                        type: 'pattern',
                        pattern: '^[1-9][0-9]*$',
                        message: 'Value must be more then 0'
                    }
                    ]
                }, {
                    label: {
                        text: 'Balance Units'
                    },
                    dataField: 'balancedUnits',
                    name: 'units',
                    visible: true,
                    editorType: 'dxTextBox',
                    editorOptions: {
                        disabled: true,
                        fieldEditDisabled: true
                    }
                }]
            };
            return bookingForm;
        }
        /**
         * Grid Options for booking list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource, customers, beers) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchBookingList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (bookingObj) {
                            var data = formInstance.option('formData');
                            saveBooking(data);
                        },
                        update: function (key, bookingObj) {
                            updateBooking(key, bookingObj);
                        },
                        remove: function (key) {
                            deleteBooking(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'quantity',
                            summaryType: 'sum',
                            texts: {
                                sum: 'Total'
                            }
                        }]
                    },
                    editing: {
                        allowAdding: true,
                        allowUpdating: false,
                        allowDeleting: true,
                        mode: 'form',
                        form: bookingForm(customers, beers)
                    },
                    columns: config.bulkBookingGridCols(tenantId, customers, beers),
                    export: {
                        enabled: true,
                        fileName: 'Bookings',
                        allowExportSelectedData: true
                    }

                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Booking Form data
         */
        function saveBooking(bookingObj) {
            var ref = rootRef.child(tenantBulkBuyTable).child(tenantId);
            if (!bookingObj.date) {
                bookingObj.date = new Date();
            }
            bookingObj.date = bookingObj.date.toString();
            bookingObj.balancedUnits = bookingObj.balancedUnits - bookingObj.quantity;
            firebaseUtils.addData(ref, bookingObj).then(function (key) {
                var mergeObj = {};
                mergeObj['tenant-bulkbuy-bookings-records/' + tenantId + '/' + bookingObj.customerSelected + '/records/' + key] = bookingObj;
                mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + bookingObj.customerSelected + '/balancedQuantity'] = bookingObj.balancedUnits;
                firebaseUtils.updateData(rootRef, mergeObj).then(function () {
                    updateBalanceQuantity(bookingObj);
                });
            });
        }

        function updateBalanceQuantity(bookingObj) {
            var ref = rootRef.child('tenant-customer-bulkbuy-records').child(tenantId).child(bookingObj.customerSelected).child('records').orderByChild('deactivated').equalTo(null);
            firebaseUtils.fetchList(ref).then(function (data) {
                var sortedArray = data.sort(function (a, b) { return new Date(a.date) - new Date(b.date) }),
                    filteredArray = [];

                sortedArray.forEach(function (value) {
                    if(new Date(value.expiryDate).getTime() > new Date().getTime()) {
                        filteredArray.push(value);
                    }
                });
                var allowedSum = bookingObj.quantity;
                var mergeObj = {};
                filteredArray.forEach(function (elem, index) {
                    if (elem.balancedQuantity !== 0 && allowedSum !== 0) {
                        if (elem.balancedQuantity > allowedSum) {
                            elem.balancedQuantity = elem.balancedQuantity - allowedSum;
                            allowedSum = 0;
                        } else if (elem.balancedQuantity === allowedSum) {
                            elem.balancedQuantity = 0;
                            allowedSum = 0;
                        } else if (elem.balancedQuantity < allowedSum) {
                            allowedSum = allowedSum - elem.balancedQuantity;
                            elem.balancedQuantity = 0;
                        }
                        mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + bookingObj.customerSelected + '/records/' + elem['$id'] + '/balancedQuantity/'] = elem.balancedQuantity;
                        mergeObj['tenant-bulkbuys/' + tenantId + '/' + elem['$id'] + '/balancedQuantity/'] = elem.balancedQuantity;
                    }
                });

                firebaseUtils.updateData(rootRef, mergeObj);
            });
        }


        function getIndexByArray(data, key, value) {
            for (var i = 0; i < data.length; i++) {
                if (data[i][key] == value) {
                    return i;
                }
            }
            return -1;
        }

        /**
         * Fetch booking list
         * @returns {Object} Booking data
         */
        function fetchBookingList() {
            var ref = rootRef.child(tenantBulkBuyTable).child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch booking list
         * @returns {Object} Booking data
         */
        function updateBooking(key, bookingData) {
            var ref = rootRef.child().child(tenantId).child(key['$id']);
            firebaseUtils.updateData(ref, bookingData);
            updateKegQuantity();
        }

        /**
         * Delete Booking
         * @returns {Object} booking data
         */
        function deleteBooking(key) {
            var mergeObj = {};
            mergeObj[tenantBulkBuyTable + '/' + tenantId + '/' + key['$id'] + '/deactivated'] = false;
            mergeObj['tenant-bulkbuy-bookings-records/' + tenantId + '/' + key.customerSelected + '/records/' + key['$id'] + '/deactivated'] = false;
            //mergeObj['tenant-bulkbuy-records-deactivated/'+ tenantId + '/' + key['$id']] = key;

            firebaseUtils.updateData(rootRef, mergeObj).then(function () {
                var ref = rootRef.child('tenant-customer-bulkbuy-records').child(tenantId).child(key.customerSelected).child('records').orderByChild('deactivated').equalTo(null);
                firebaseUtils.fetchList(ref).then(function (data) {
                    var sortedArray = data.sort(function (a, b) { return new Date(a.date) - new Date(b.date) });
                    var allowedSum = key.quantity;
                    var mergeObj = {};
                    sortedArray.forEach(function (elem, index) {
                        if (allowedSum !== 0) {
                            if (elem.balancedQuantity < quantityList[elem.quantity].quantity) {
                                var diff = quantityList[elem.quantity].quantity - elem.balancedQuantity;
                                if (allowedSum > diff) {
                                    elem.balancedQuantity = elem.balancedQuantity + diff;
                                    allowedSum = allowedSum - diff;
                                } else if (allowedSum === diff) {
                                    elem.balancedQuantity = elem.balancedQuantity + allowedSum;
                                    allowedSum = 0;
                                } else if (allowedSum < diff) {
                                    elem.balancedQuantity = elem.balancedQuantity + allowedSum;
                                    allowedSum = 0;
                                }

                                mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + key.customerSelected + '/records/' + elem['$id'] + '/balancedQuantity/'] = elem.balancedQuantity;
                                mergeObj['tenant-bulkbuys/' + tenantId + '/' + elem['$id'] + '/balancedQuantity/'] = elem.balancedQuantity;

                            }
                        }
                    });

                    firebaseUtils.updateData(rootRef, mergeObj).then(function () {

                        var ref = rootRef.child('tenant-customer-bulkbuy-records').child(tenantId).child(key.customerSelected).child('records').orderByChild('deactivated').equalTo(null);
                        firebaseUtils.getListSum(ref, 'balancedQuantity').then(function (data) {
                            var mergeObj = {};
                            mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + key.customerSelected + '/balancedQuantity'] = data;
                            firebaseUtils.updateData(rootRef, mergeObj);
                        });
                    });
                });

            });
        }
    }
}());
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.bookings',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.bookings', {
                abstract: true,
                url     : '/bookings'
            })
            .state('app.bookings.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/apps/bookings/views/list-view/bookings.html',
                        controller : 'BookingsController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }],
                    customers: ["adminService", function(adminService) {
                        return adminService.getCurrentCustomers();
                    }],
                    beers: ["adminService", function(adminService) {
                        return adminService.getBeers();
                    }]
                },
                bodyClass: 'bookings'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/bookings');

        
        msNavigationServiceProvider.saveItem('bookings', {
            title: 'Bookings',
            state: 'app.bookings.list'
        });
    }
})();
(function ()
{
    'use strict';

    BookingsController.$inject = ["$state", "$scope", "$mdDialog", "$document", "bookingService", "customers", "beers"];
    angular
        .module('app.bookings')
        .controller('BookingsController', BookingsController);

    /** @ngInject */
    function BookingsController($state, $scope, $mdDialog, $document, bookingService, customers, beers)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.bookingGridOptions = bookingService.gridOptions('vm.bookings', customers, beers);
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.admin.locations',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.locations', {
                abstract: true,
                url     : '/locations'
            })
            .state('app.locations.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/admin/locations/views/list-view/locations.html',
                        controller : 'LocationsController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }]
                },
                bodyClass: 'locations'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/admin/locations');

        // Api
        msApiProvider.register('locations.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('locations.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('locations.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('locations.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('locations.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('locations.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('admin.locations', {
            title: 'Locations',
            state: 'app.locations.list'
        });
    }
})();
(function ()
{
    'use strict';

    LocationsController.$inject = ["$state", "$scope", "$mdDialog", "$document", "locationService"];
    angular
        .module('app.admin.locations')
        .controller('LocationsController', LocationsController);

    /** @ngInject */
    function LocationsController($state, $scope, $mdDialog, $document, locationService)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.locationGridOptions = locationService.gridOptions('vm.locations');
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.admin.kegs',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.kegs', {
                abstract: true,
                url     : '/kegs'
            })
            .state('app.kegs.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/admin/kegs/views/list-view/kegs.html',
                        controller : 'KegsController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }]
                },
                bodyClass: 'kegs'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/admin/kegs');

        // Api
        msApiProvider.register('kegs.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('kegs.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('kegs.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('kegs.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('kegs.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('kegs.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('admin.kegs', {
            title: 'Kegs',
            state: 'app.kegs.list'
        });
    }
})();
(function ()
{
    'use strict';

    KegsController.$inject = ["$state", "$scope", "$mdDialog", "$document", "kegService"];
    angular
        .module('app.admin.kegs')
        .controller('KegsController', KegsController);

    /** @ngInject */
    function KegsController($state, $scope, $mdDialog, $document, kegService)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.kegGridOptions = kegService.gridOptions('vm.kegs');
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.admin.drivers',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.drivers', {
                abstract: true,
                url     : '/drivers'
            })
            .state('app.drivers.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/admin/drivers/views/list-view/drivers.html',
                        controller : 'DriversController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }]
                },
                bodyClass: 'drivers'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/admin/drivers');

        // Api
        msApiProvider.register('drivers.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('drivers.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('drivers.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('drivers.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('drivers.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('drivers.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('admin.drivers', {
            title: 'Drivers',
            state: 'app.drivers.list'
        });
    }
})();
(function ()
{
    'use strict';

    DriversController.$inject = ["$state", "$scope", "$mdDialog", "$document", "driverService"];
    angular
        .module('app.admin.drivers')
        .controller('DriversController', DriversController);

    /** @ngInject */
    function DriversController($state, $scope, $mdDialog, $document, driverService)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.driverGridOptions = driverService.gridOptions('vm.drivers');
        }

    }
})();
(function ()
{
    'use strict';

    CustomersController.$inject = ["$state", "$scope", "$mdDialog", "$document", "customerService"];
    angular
        .module('app.admin.customers')
        .controller('CustomersController', CustomersController);

    /** @ngInject */
    function CustomersController($state, $scope, $mdDialog, $document, customerService)
    {
        var vm = this;

        // Data
        
        // Methods
        vm.addDialog = addDialog;
        vm.editDialog = editDialog;
        init();
        //////////

        function init() {
            vm.customerGridOptions = customerService.gridOptions('vm.customers');
        }

         /**
         * Add New Row
         */
        function addDialog(ev)
        {
            $mdDialog.show({
                controller         : 'CustomerDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/admin/customers/views/dialogs/customer-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    dialogData: {
                        dialogType: 'add'
                    }
                }
            });
        }

        /**
         * Edit Dialog
         */
        function editDialog(ev, formView, formData)
        {
            $mdDialog.show({
                controller         : 'CustomerDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/customers/views/dialogs/add-edit/edit-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    dialogData: {
                        chartData : vm.data,
                        dialogType: 'edit',
                        formView  : formView,
                        formData  : formData
                    }
                }
            });
        }

    }
})();
(function () {
    'use strict';

    CustomerDialogController.$inject = ["$mdDialog", "dialogData", "customerService"];
    angular
        .module('app.admin.customers')
        .controller('CustomerDialogController', CustomerDialogController);

    /** @ngInject */
    function CustomerDialogController($mdDialog, dialogData, customerService) {
        var vm = this,
            dxFormInstance;

        // Data
        vm.form = {
            from: 'johndoe@creapond.com'
        };

        vm.hiddenCC = true;
        vm.hiddenBCC = true;

        vm.customers = {};

        vm.formOptions = customerService.formOptions();

        // Methods
        vm.closeDialog = closeDialog;

        //////////

        function closeDialog() {
            dxFormInstance = $('#customer-form').dxForm('instance');
            if(dxFormInstance.validate().isValid === true) {
                customerService.saveData(dxFormInstance.option('formData')).then(function(data) {
                    $mdDialog.hide();
                });
            }
            //$mdDialog.hide();
        }
    }
})();

(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.admin.containers',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.containers', {
                abstract: true,
                url     : '/containers'
            })
            .state('app.containers.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/admin/containers/views/list-view/containers.html',
                        controller : 'ContainersController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }]
                },
                bodyClass: 'containers'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/admin/containers');

        // Api
        msApiProvider.register('containers.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('containers.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('containers.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('containers.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('containers.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('containers.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('admin.containers', {
            title: 'Containers',
            state: 'app.containers.list'
        });
    }
})();
(function ()
{
    'use strict';

    ContainersController.$inject = ["$state", "$scope", "$mdDialog", "$document", "containerService"];
    angular
        .module('app.admin.containers')
        .controller('ContainersController', ContainersController);

    /** @ngInject */
    function ContainersController($state, $scope, $mdDialog, $document, containerService)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.containerGridOptions = containerService.gridOptions('vm.containers');
        }

    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msApiProvider", "msNavigationServiceProvider"];
    angular
        .module('app.admin.beers',
            [
                // 3rd Party Dependencies
                'dx'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.beers', {
                abstract: true,
                url     : '/beers'
            })
            .state('app.beers.list', {
                url      : '/list',
                views    : {
                    'content@app': {
                        templateUrl: 'app/main/admin/beers/views/list-view/beers.html',
                        controller : 'BeersController as vm'
                    }
                },
                 resolve : {
                    currentAuth: ["auth", function (auth) {
                        // returns a promisse so the resolve waits for it to complete
                        return auth.$requireSignIn();
                    }],
                    tenantInfo: ["auth", "authService", function(auth, authService){
                        return authService.retrieveTenant();
                    }],
                    settings: ["adminService", function(adminService) {
                        return adminService.getCurrentSettings();
                    }]
                },
                bodyClass: 'beers'
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/admin/beers');

        // Api
        msApiProvider.register('beers.dashboard', ['app/data/e-commerce/dashboard.json']);
        msApiProvider.register('beers.products', ['app/data/e-commerce/products.json']);
        msApiProvider.register('beers.product', ['app/data/e-commerce/product.json']);
        msApiProvider.register('beers.orders', ['app/data/e-commerce/orders.json']);
        msApiProvider.register('beers.statuses', ['app/data/e-commerce/statuses.json']);
        msApiProvider.register('beers.order', ['app/data/e-commerce/order.json']);

        // Navigation

        msNavigationServiceProvider.saveItem('admin.beers', {
            title: 'Brews',
            state: 'app.beers.list'
        });
    }
})();
(function ()
{
    'use strict';

    BeersController.$inject = ["$state", "$scope", "$mdDialog", "$document", "beerService"];
    angular
        .module('app.admin.beers')
        .controller('BeersController', BeersController);

    /** @ngInject */
    function BeersController($state, $scope, $mdDialog, $document, beerService)
    {
        var vm = this;

        // Data
        
        // Methods
        init();
        //////////

        function init() {
            vm.beerGridOptions = beerService.gridOptions('vm.beers');
        }

    }
})();
(function () {
    'use strict';

    taxgroupService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.settings.taxgroups')
        .factory('taxgroupService', taxgroupService);

    /** @ngInject */
    function taxgroupService($firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant(),
            taxGridInstance,
            dxTaxForm;
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveTaxgroup: saveTaxgroup,
            updateTaxgroup: updateTaxgroup,
            fetchTaxgroupList: fetchTaxgroupList,
            taxGrid: taxGrid
        };

        return service;

        //////////

        /**
         * Grid Options for taxgroup list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchTaxgroupList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (taxObj) {
                            taxObj.selectedTaxes = taxGridInstance.getSelectedRowKeys();
                            saveTaxgroup(taxObj);
                        },
                        update: function (key, taxObj) {
                            updateTaxgroup(key, taxObj);
                        },
                        remove: function (key) {
                            deleteTaxgroup(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'description',
                            summaryType: 'count'
                        }]
                    },
                    columns: config.taxGroupGridCols(),
                    export: {
                        enabled: true,
                        fileName: 'Taxgroups',
                        allowExportSelectedData: true
                    },
                    onEditingStart: function (e) {

                    },
                    editing: {
                        allowAdding: true,
                        allowUpdating: true,
                        allowDeleting: true,
                        mode: 'form',
                        form: {
                            colCount: 2,
                            items: [{
                                dataField: 'description',
                                label: {
                                    text: 'Description',
                                    location: 'top'
                                },
                                validationRules: [{
                                    type: 'required',
                                    message: 'Description is required'
                                }]
                            },{
                                itemType: 'empty'
                            },{
                                label: {
                                    text: 'Select the Taxes that are included in this group',
                                    location: 'top'
                                },
                                template: 'taxgroupTemplate'
                            }],
                            onInitialized: function (e) {
                                dxTaxForm = e.component;
                            }
                        }
                    },
                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Taxes grid
         */
        function taxGrid(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: dataSource,
                    columns: [{
                        dataField: 'description',
                        caption: 'Description'
                    }, {
                        dataField: 'defaultRate',
                        caption: 'Tax Rate(%)',
                        dataType: 'number'
                    }],
                    searchPanel: {
                        visible: false
                    },
                    columnChooser: {
                        enabled: false
                    },
                    editing: {
                        allowAdding: false,
                        allowUpdating: false,
                        allowDeleting: false
                    },
                    onContentReady: function (e) {
                        taxGridInstance = e.component;
                        taxGridInstance.selectRows(dxTaxForm.option('formData').selectedTaxes);
                    },
                    showBorders: true
                };
            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        }

        /**
         * Save form data
         * @returns {Object} Taxgroup Form data
         */
        function saveTaxgroup(taxObj) {
            var ref = rootRef.child('tenant-taxgroups').child(tenantId);
            taxObj.user = auth.$getAuth().uid;
            return firebaseUtils.addData(ref, taxObj);
        }

        /**
         * Fetch taxgroup list
         * @returns {Object} Taxgroup data
         */
        function fetchTaxgroupList() {
            var ref = rootRef.child('tenant-taxgroups').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch taxgroup list
         * @returns {Object} Taxgroup data
         */
        function updateTaxgroup(key, taxData) {
            var ref = rootRef.child('tenant-taxgroups').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, TaxgroupsData);
        }

        /**
         * Delete Taxgroup
         * @returns {Object} taxgroup data
         */
        function deleteTaxgroup(key) {
            var ref = rootRef.child('tenant-taxgroups').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, { deactivated: false });
        }

    }
}());
(function () {
    'use strict';

    taxService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.settings.taxes')
        .factory('taxService', taxService);

    /** @ngInject */
    function taxService($firebaseArray, $firebaseObject, $q, authService, auth,firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant();
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveTax: saveTax,
            updateTax: updateTax,
            fetchTaxList: fetchTaxList
        };

        return service;

        //////////

        /**
         * Grid Options for tax list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchTaxList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (taxObj) {
                            saveTax(taxObj);
                        },
                        update: function (key, taxObj) {
                            updateTax(key, taxObj);
                        },
                        remove: function (key) {
                            deleteTax(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    }, 
                    columns: config.taxGridCols(),
                    export: {
                        enabled: true,
                        fileName: 'Taxes',
                        allowExportSelectedData: true
                    }
                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Tax Form data
         */
        function saveTax(taxObj) {
            var ref = rootRef.child('tenant-taxes').child(tenantId);
            taxObj.user = auth.$getAuth().uid;
            return firebaseUtils.addData(ref, taxObj);
        }

        /**
         * Fetch tax list
         * @returns {Object} Tax data
         */
        function fetchTaxList() {
            var ref = rootRef.child('tenant-taxes').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch tax list
         * @returns {Object} Tax data
         */
        function updateTax(key, taxData) {
            var ref = rootRef.child('tenant-taxes').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, taxData);
        }

        /**
         * Delete Tax
         * @returns {Object} tax data
         */
        function deleteTax(key) {
            var ref = rootRef.child('tenant-taxes').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, {deactivated: false});
        }

    }
}());
(function () {
    'use strict';

    vendingService.$inject = ["$rootScope", "$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.vendings')
        .factory('vendingService', vendingService);

    /** @ngInject */
    function vendingService($rootScope,$firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant(),
            formInstance,
            customerList,
            statusList,
            chargesList,
            formData,
            brewGridInstance,
            currentTxn,
            brewDataSource = [];
        // Private variables

        var service = {
            saveVending: saveVending,
            updateVending: updateVending,
            fetchVendingList: fetchVendingList,
            vendingForm: vendingForm,
            deleteVending: deleteVending,
            fetchInvoiceVendingList: fetchInvoiceVendingList,
            saveInvoiceVending: saveInvoiceVending,
            updateInvoiceVending: updateInvoiceVending,
            deleteInvoiceVending: deleteInvoiceVending
        };

        return service;

        //////////

        function vendingForm(customerList, beerList) {
            var vendingForm = {
                colCount: 2,
                onInitialized: function (e) {
                    formInstance = e.component;
                },
                items: [{
                    dataField: 'date',
                    label:{
                        text: 'Date'
                    }, 
                    editorType: 'dxDateBox',
                    editorOptions: {
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Date is required'
                    }]
                }, {
                    dataField: 'invoice',
                    label: {
                        text: 'Invoice #'
                    }
                }, {
                    dataField: 'customerSelected',
                    label: {
                        text: 'Customer'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        dataSource: customerList,
                        displayExpr: "name",
                        valueExpr: "$id",
                        searchExpr: ["name", "phone", "HHID"],
                        itemTemplate: function(itemData, itemIndex, itemElement) {
                            var rightBlock = $("<div style='display:inline-block;'>");
                            rightBlock.append("<p style='font-size:larger;'><b>" + itemData.name + "</b></p>");
                            rightBlock.append("<p>Phone: <span>" + itemData.phone + "</span></p>");
                            rightBlock.append("<p>HopHead ID: <span>" + itemData.HHID + "</span></p>");
                            itemElement.append(rightBlock);
                        }
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Please select a customer'
                    }]
                }]
            };
            return vendingForm;
        }

        /**
         * Save form data
         * @returns {Object} Vending Form data
         */
        function saveVending(vendingObj) {
            var ref = rootRef.child('tenant-vendings').child(tenantId);
            vendingObj.user = auth.$getAuth().uid;
            vendingObj.date = vendingObj.date.toString();
            return firebaseUtils.addData(ref, vendingObj);
        }

        /**
         * Fetch vending list
         * @returns {Object} Vending data
         */
        function fetchVendingList() {
            var ref = rootRef.child('tenant-vendings').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        function saveInvoiceVending(vendingObj) {
            var ref = rootRef.child('tenant-vendings-info').child(tenantId);
            vendingObj.user = auth.$getAuth().uid;
            firebaseUtils.addData(ref, vendingObj);
            updateQuantity(vendingObj.invoice);
        }

        function fetchInvoiceVendingList(key) {
            var ref = rootRef.child('tenant-vendings-info').child(tenantId).orderByChild('invoice').equalTo(key);
            return firebaseUtils.fetchList(ref);
        }

        function updateInvoiceVending(key, vendingObj) {
            var ref = rootRef.child('tenant-vendings-info').child(tenantId).child(key['$id']);
            firebaseUtils.updateData(ref, vendingObj);
            updateQuantity(vendingObj.invoice);
        }

        function deleteInvoiceVending(key, vendingObj) {
            var ref = rootRef.child('tenant-vendings-info').child(tenantId).child(key['$id']);
            firebaseUtils.updateData(ref, { invoice: false });
            updateQuantity(vendingObj);
        }
        
        function updateQuantity(key) {
            fetchInvoiceVendingList(key).then(function(data) {
                var sum = 0;
                data.forEach(function(info){
                    sum+= info.quantity;
                });
                var ref = rootRef.child('tenant-vendings').child(tenantId).child(key);
                firebaseUtils.updateData(ref, {quantity: sum});
            });
        }

        /**
         * Fetch vending list
         * @returns {Object} Vending data
         */
        function updateVending(key, vendingData) {
            var ref = rootRef.child('tenant-vendings').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, vendingData);
        }

        /**
         * Delete Vending
         * @returns {Object} vending data
         */
        function deleteVending(key) {
            var ref = rootRef.child('tenant-vendings').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, { deactivated: false });
        }

    }
}());
(function () {
    'use strict';

    shipmentService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.shipments')
        .factory('shipmentService', shipmentService);

    /** @ngInject */
    function shipmentService($firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant(),
            formInstance,
            customerList,
            statusList,
            chargesList,
            formData;
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveShipment: saveShipment,
            updateShipment: updateShipment,
            fetchShipmentList: fetchShipmentList,
            shipmentForm: shipmentForm
        };

        return service;

        //////////

        function shipmentForm() {
            var infiniteListSource = new DevExpress.data.DataSource({
                load: function(loadOptions) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-customers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                byKey: function(key) {
                    var defer = $q.defer(),
                    ref = rootRef.child('tenant-customers').child(tenantId).child(key);
                    firebaseUtils.getItemByRef(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                }
            });
            var shipmentForm = {
                colCount: 2,
                onInitialized: function (e) {
                    formInstance = e.component;
                },
                items: [{
                    itemType: "group",
                    caption: "Booking Information",
                    colSpan: 2,
                    colCount: 2,
                    items: [{
                        dataField: 'status',
                        label: {
                            text: 'Shipment Status'
                        },
                        editorType: 'dxSelectBox',
                        editorOptions: {
                            dataSource: infiniteListSource,
                            displayExpr: "name",
                            valueExpr: "$id",
                            onValueChanged: function (e) {
                                formInstance.updateData(
                                    {'contactRef': 'Adarsh',
                                     'bookingDate': e.value
                                    }
                                );
                            },
                            value: '-KhuU-0RamOA4LMLnCAF'
                        }
                    }, {
                        dataField: 'bookingDate',
                        label: {
                            text: 'Booking Date'
                        }
                    }, {
                        dataField: 'contactRef',
                        label: {
                            text: 'Contact'
                        },
                        editorType: 'dxTextBox'
                    },
                     {
                        dataField: 'formatID',
                        label: {
                            text: 'formatID'
                        },
                        editorType: 'dxTextBox'
                    }, {
                        dataField: 'chargeTo',
                        label: {
                            text: 'Charge To'
                        },
                        editorType: 'dxSelectBox'
                    }, {
                        dataField: 'shipper',
                        label: {
                            text: 'Shipper'
                        },
                        editorType: 'dxSelectBox'
                    }, {
                        dataField: 'requestedPickupDate',
                        label: {
                            text: 'Required Pickup'
                        },
                        editorType: 'dxDateBox'
                    }, {
                        dataField: 'requestedDeliveryDate',
                        label: {
                            text: 'Required Delivery'
                        },
                        editorType: 'dxDateBox'
                    }]
                }, {
                    itemType: "group",
                    caption: "Consignor",
                    items: [{
                        dataField: 'consignor',
                        label: {
                            text: 'Select Consignor'
                        },
                        editorType: 'dxSelectBox'
                    }, "Phone", "Address", "City", "State", "Zipcode"]
                }, {
                    itemType: "group",
                    caption: "Consignee",
                    items: [{
                        dataField: 'consignee',
                        label: {
                            text: 'Select Consignee'
                        },
                        editorType: 'dxSelectBox'
                    },
                        "Phone", "Address", "City", "State", "Zipcode"]
                }, {
                    itemType: "group",
                    caption: "Contact Information",
                    colSpan: 2,
                    items: [{
                        itemType: "tabbed",
                        tabPanelOptions: {
                            deferRendering: false
                        },
                        tabs: [{
                            title: "Items",
                            items: ["Phone"]
                        }, {
                            title: "Charges",
                            items: ["Skype"]
                        }, {
                            title: "Documents",
                            items: ["Email"]
                        }]
                    }]
                }]
            };
            return shipmentForm;
        }
        /**
         * Grid Options for shipment list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchShipmentList().then(function (data) {
                                console.log(data);
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (shipmentObj) {
                            saveShipment(formInstance.option('formData'));
                        },
                        update: function (key, shipmentObj) {
                            updateShipment(key, shipmentObj);
                        },
                        remove: function (key) {
                            deleteShipment(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    },
                    editing: {
                        allowAdding: true,
                        allowUpdating: true,
                        allowDeleting: true,
                        mode: 'form',
                        form: shipmentForm()
                    },
                    columns: config.shipmentGridCols(),
                    export: {
                        enabled: true,
                        fileName: 'Shipments',
                        allowExportSelectedData: true
                    },
                    onToolbarPreparing: function (e) {
                        var dataGrid = e.component;

                        e.toolbarOptions.items.unshift({
                            location: "before",
                            widget: "dxSelectBox",
                            options: {
                                width: 200,
                                items: [{
                                    value: "CustomerStoreState",
                                    text: "Grouping by State"
                                }, {
                                    value: "Employee",
                                    text: "Grouping by Employee"
                                }],
                                displayExpr: "text",
                                valueExpr: "value",
                                value: "CustomerStoreState",
                                onValueChanged: function (e) {
                                    dataGrid.clearGrouping();
                                    dataGrid.columnOption(e.value, "groupIndex", 0);
                                }
                            }
                        }, {
                                location: "before",
                                widget: "dxButton",
                                options: {
                                    hint: "Collapse All",
                                    icon: "chevrondown",
                                    onClick: function (e) {
                                        var expanding = e.component.option("icon") === "chevronnext";
                                        dataGrid.option("grouping.autoExpandAll", expanding);
                                        e.component.option({
                                            icon: expanding ? "chevrondown" : "chevronnext",
                                            hint: expanding ? "Collapse All" : "Expand All"
                                        });
                                    }
                                }
                            }, {
                                location: "after",
                                widget: "dxButton",
                                options: {
                                    icon: "refresh",
                                    onClick: function () {
                                        dataGrid.refresh();
                                    }
                                }
                            });
                    }

                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Shipment Form data
         */
        function saveShipment(shipmentObj) {
            var ref = rootRef.child('tenant-shipments').child(tenantId);
            shipmentObj.user = auth.$getAuth().uid;
            return firebaseUtils.addData(ref, shipmentObj);
        }

        /**
         * Fetch shipment list
         * @returns {Object} Shipment data
         */
        function fetchShipmentList() {
            var ref = rootRef.child('tenant-shipments').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch shipment list
         * @returns {Object} Shipment data
         */
        function updateShipment(key, shipmentData) {
            var ref = rootRef.child('tenant-shipments').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, shipmentData);
        }

        /**
         * Delete Shipment
         * @returns {Object} shipment data
         */
        function deleteShipment(key) {
            var ref = rootRef.child('tenant-shipments').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, { deactivated: false });
        }

    }
}());
(function () {
    'use strict';

    recordService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.records')
        .factory('recordService', recordService);

    /** @ngInject */
    function recordService($firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant(),
            formInstance,
            customerList,
            statusList,
            chargesList,
            formData;
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveRecord: saveRecord,
            updateRecord: updateRecord,
            fetchRecordList: fetchRecordList,
            recordForm: recordForm
        };

        return service;

        //////////

        function recordForm(customerList, beerList) {
            var recordForm = {
                onInitialized: function (e) {
                    formInstance = e.component;
                },
                items: [{
                    itemType: "group",
                    caption: "Information",
                    colSpan: 2,
                    colCount: 2,
                    items: [
                        {
                            dataField: 'date',
                            label: {
                                text: 'Date'
                            },
                            editorType: 'dxDateBox',
                            editorOptions: {
                                width: '100%',
                                onInitialized: function (e) {
                                    e.component.option('value', new Date());
                                }
                            },
                            validationRules: [{
                                type: 'required',
                                message: 'Date is required'
                            }]
                        }, {
                            dataField: 'invoice',
                            label: {
                                text: 'Invoice'
                            },
                            validationRules: [{
                                type: 'required',
                                message: 'Invoice number is required'
                            }]
                        }, {
                            dataField: 'customerSelected',
                            label: {
                                text: 'Customer'
                            },
                            editorType: 'dxSelectBox',
                            editorOptions: {
                                dataSource: customerList,
                                displayExpr: "name",
                                valueExpr: "$id",
                                searchExpr: ["name", "phone", "HHID"],
                                itemTemplate: function (itemData, itemIndex, itemElement) {
                                    var rightBlock = $("<div style='display:inline-block;'>");
                                    rightBlock.append("<p style='font-size:larger;'><b>" + itemData.name + "</b></p>");
                                    rightBlock.append("<p>Phone: <span>" + itemData.phone + "</span></p>");
                                    rightBlock.append("<p>HopHead ID: <span>" + itemData.HHID + "</span></p>");
                                    itemElement.append(rightBlock);
                                }, onSelectionChanged: function (customer) {
                                    if (customer.selectedItem && customer.selectedItem.$id) {
                                        formInstance.getEditor('offers').option('items', '');
                                        var ref = rootRef.child('tenant-record-offers').child(tenantId).orderByChild('deactivated').equalTo(null);
                                        firebaseUtils.fetchList(ref).then(function (data) {
                                            var selectedList = [];
                                            for (var item = 0; item < data.length; item++) {
                                                if (data[item].customers && (!data[item].customers.hasOwnProperty(customer.selectedItem.$id) || data[item].customers[customer.selectedItem.$id] === false)) {
                                                    if(!data[item].expiryDate || (data[item].expiryDate && (new Date(data[item].expiryDate) > new Date()))) {
                                                        selectedList.push(data[item]);
                                                    }
                                                } else if (!data[item].customers) {
                                                    if(!data[item].expiryDate || (data[item].expiryDate && (new Date(data[item].expiryDate) > new Date()))) {
                                                        selectedList.push(data[item]);
                                                    }
                                                }
                                            }
                                            formInstance.getEditor('offers').option('items', selectedList);
                                        });
                                    }
                                }
                            },
                            validationRules: [{
                                type: 'required',
                                message: 'Please select a customer'
                            }]
                        }, 'amountOnBeer', 'amountOnLiquor', 'amountOnFood'
                    ]
                },
                {
                    itemType: "group",
                    caption: "Redeem Offers",
                    colSpan: 2,
                    colCount: 2,
                    items: [{
                        dataField: 'offers',
                        label: {
                            text: 'Select Offers'
                        },
                        name: 'offers',
                        editorOptions: {
                            displayExpr: "description",
                            valueExpr: "$id",
                            noDataText: 'No offers available',
                            showSelectionControls: true,
                            applyValueMode: "useButtons"
                        },
                        editorType: 'dxTagBox'
                    }]
                }]
            };
            return recordForm;
        }
        /**
         * Grid Options for record list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource, customers, beers) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchRecordList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (recordObj) {
                            var data = formInstance.option('formData');
                            if (data.offers) {
                                recordObj.offers = data.offers;
                            }
                            saveRecord(recordObj);
                        },
                        update: function (key, recordObj) {
                            var data = formInstance.option('formData');
                            if (data.offers) {
                                recordObj.offers = data.offers;
                            }
                            updateRecord(key, recordObj);
                        },
                        remove: function (key) {
                            deleteRecord(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'amountOnLiquor',
                            summaryType: 'sum'
                        }, {
                            column: 'amountOnBeer',
                            summaryType: 'sum'
                        }, {
                            column: 'amountOnFood',
                            summaryType: 'sum'
                        }, {
                            column: 'total',
                            summaryType: 'sum',
                            customizeText: function (data) {
                                return 'Total ' + data.value;
                            }
                        }]
                    },
                    editing: {
                        allowAdding: true,
                        allowUpdating: false,
                        allowDeleting: true,
                        mode: 'form',
                        form: recordForm(customers, beers)
                    },
                    columns: config.recordGridCols(tenantId, customers, beers),
                    export: {
                        enabled: true,
                        fileName: 'Records',
                        allowExportSelectedData: true
                    }

                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Record Form data
         */
        function saveRecord(recordObj) {
            var ref = rootRef.child('tenant-records').child(tenantId);
            if (!recordObj.date) {
                recordObj.date = new Date();
            }
            recordObj.date = recordObj.date.toString();
            recordObj.user = auth.$getAuth().uid;
            firebaseUtils.addData(ref, recordObj).then(function (key) {
                var mergeObj = {};
                mergeObj['tenant-customer-records/' + tenantId + '/' + recordObj.customerSelected + '/records/' + key] = recordObj;
                if (recordObj.offers) {
                    mergeObj['tenant-customer-records/' + tenantId + '/' + recordObj.customerSelected + '/offers/' + key] = recordObj.offers;
                }
                firebaseUtils.updateData(rootRef, mergeObj).then(function (data) {
                    if (!recordObj.offers) {
                        return;
                    }
                    var ref = rootRef.child('tenant-record-offers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (offers) {
                        var mergeObj = {};
                        for (var i = 0; i < recordObj.offers.length; i++) {
                            if (config.getIndexByArray(offers, '$id', recordObj.offers[i]) > -1) {
                                mergeObj['tenant-record-offers/' + tenantId + '/' + recordObj.offers[i] + '/customers/' + recordObj.customerSelected] = true;
                            }
                        }
                        firebaseUtils.updateData(rootRef, mergeObj).then(function (data) {
                            var ref = rootRef.child('tenant-redeems').child(tenantId);
                            for (var i = 0; i < recordObj.offers.length; i++) {
                                var redeemObj = {
                                    customerSelected: recordObj.customerSelected,
                                    offerId: recordObj.offers[i],
                                    invoice: recordObj.invoice,
                                    key: key,
                                    date: recordObj.date
                                };
                                
                                firebaseUtils.addData(ref, redeemObj);
                            }
                        });
                    });
                });
            });
        }

        /**
         * Fetch record list
         * @returns {Object} Record data
         */
        function fetchRecordList() {
            var ref = rootRef.child('tenant-records').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch record list
         * @returns {Object} Record data
         */
        function updateRecord(key, recordData) {
            var ref = rootRef.child('tenant-records').child(tenantId).child(key['$id']);
            firebaseUtils.updateData(ref, recordData).then(function (key) {
                var mergeObj = {};
                mergeObj['tenant-customer-records/' + tenantId + '/' + key.customerSelected + '/records/' + key['$id']] = recordData;
                firebaseUtils.updateData(rootRef, mergeObj);
            });;
        }

        /**
         * Delete Record
         * @returns {Object} record data
         */
        function deleteRecord(key) {
            var mergeObj = {};
            mergeObj['tenant-records/' + tenantId + '/' + key['$id'] + '/deactivated'] = false;
            mergeObj['tenant-customer-records/' + tenantId + '/' + key.customerSelected + '/records/' + key['$id'] + '/deactivated'] = false;
            //mergeObj['tenant-bulkbuy-records-deactivated/'+ tenantId + '/' + key['$id']] = key;
            mergeObj['tenant-customer-records/' + tenantId + '/' + key.customerSelected + '/offers/' + key['$id'] + '/deactivated'] = false;
            firebaseUtils.updateData(rootRef, mergeObj).then(function (records) {
                var mergeObj = {};
                if (key.offers) {
                    var ref = rootRef.child('tenant-record-offers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (offers) {
                        var mergeObj = {};
                        for (var i = 0; i < key.offers.length; i++) {
                            if (config.getIndexByArray(offers, '$id', key.offers[i]) > -1) {
                                mergeObj['tenant-record-offers/' + tenantId + '/' + key.offers[i] + '/customers/' + key.customerSelected] = false;
                            }
                        }
                        firebaseUtils.updateData(rootRef, mergeObj).then(function() {
                            var ref = rootRef.child('tenant-redeems').child(tenantId).orderByChild('key').equalTo(key['$id']);
                            firebaseUtils.fetchList(ref).then(function (data) {                                
                                var mergeObj = {};
                                for(var i = 0; i<data.length; i++) {
                                    mergeObj['tenant-redeems/' + tenantId + '/' + data[i]['$id'] + '/deactivated'] = false;
                                }                                
                                firebaseUtils.updateData(rootRef, mergeObj);
                            });  
                        });
                    });
                }
            });
        }

    }
}());
(function () {
    'use strict';

    bulkbuyService.$inject = ["$rootScope", "$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.bulkbuys')
        .factory('bulkbuyService', bulkbuyService);

    /** @ngInject */
    function bulkbuyService($rootScope, $firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant(),
            quantityList = [{
                id: 0,
                quantity: 6
            }, {
                id: 1,
                quantity: 10
            }, {
                id: 2,
                quantity: 20
            }];
        // Private variables

        var service = {
            saveBulkbuy: saveBulkbuy,
            updateBulkbuy: updateBulkbuy,
            fetchBulkbuyList: fetchBulkbuyList,
            deleteBulkbuy: deleteBulkbuy
        };

        return service;
        /**
         * Save form data
         * @returns {Object} Bulkbuy Form data
         */
        function saveBulkbuy(bulkbuyObj) {
            var ref = rootRef.child('tenant-bulkbuys').child(tenantId);
            if (!bulkbuyObj.date) {
                bulkbuyObj.date = new Date();
            }
            bulkbuyObj.date = bulkbuyObj.date.toString();
            bulkbuyObj.expiryDate = new Date(new Date(bulkbuyObj.date).getTime() + 60 * 24 * 60 * 60 * 1000).toString();
            bulkbuyObj.balancedQuantity = quantityList[bulkbuyObj.quantity].quantity;
            return firebaseUtils.addData(ref, bulkbuyObj).then(function (key) {
                var mergeObj = {};
                mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + bulkbuyObj.customerSelected + '/records/' + key] = bulkbuyObj;
                firebaseUtils.updateData(rootRef, mergeObj).then(function (key) {
                    var ref = rootRef.child('tenant-customer-bulkbuy-records').child(tenantId).child(bulkbuyObj.customerSelected).child('records').orderByChild('deactivated').equalTo(null);
                    firebaseUtils.getListSum(ref, 'balancedQuantity').then(function (data) {
                        var mergeObj = {};
                        mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + bulkbuyObj.customerSelected + '/balancedQuantity'] = data;
                        firebaseUtils.updateData(rootRef, mergeObj);
                    });
                });
            });
            //updateKegQuantity();
        }

        function updateKegQuantity() {
            fetchBulkbuyList().then(function (data) {
                data.forEach(function (bulkbuy) {
                    var ref = rootRef.child('tenant-kegs').child(tenantId).orderByChild('beerSelected').equalTo(bulkbuy.beerSelected);
                    firebaseUtils.fetchList(ref).then(function (data) {
                        updateDb(data, quantityList[bulkbuy.quantity].quantity);
                    });
                });
            });

        }


        function hasMin(data, attrib) {
            return data.reduce(function (prev, curr) {
                return prev[attrib] < curr[attrib] ? prev : curr;
            });
        }
        function updateDb(data, quantity) {
            var smallestBrew = hasMin(data, 'LtrsBalanced');
            var ref = rootRef.child('tenant-kegs').child(tenantId).child(smallestBrew['$id']);
            if (smallestBrew.LtrsBalanced < quantity) {
                firebaseUtils.updateData(ref, { 'LtrsBalanced': 0 });
                var index = getIndexByArray(data, 'LtrsBalanced', smallestBrew.LtrsBalanced);
                data.splice(index, 1);
                updateDb(data, quantity - smallestBrew.LtrsBalanced);
            } else {
                var balance = smallestBrew.LtrsBalanced - quantity;
                firebaseUtils.updateData(ref, { 'LtrsBalanced': balance });
            }

        }

        function getIndexByArray(data, key, value) {
            for (var i = 0; i < data.length; i++) {
                if (data[i][key] == value) {
                    return i;
                }
            }
            return -1;
        }

        /**
         * Fetch bulkbuy list
         * @returns {Object} Bulkbuy data
         */
        function fetchBulkbuyList() {
            var ref = rootRef.child('tenant-bulkbuys').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch bulkbuy list
         * @returns {Object} Bulkbuy data
         */
        function updateBulkbuy(key, bulkbuyData) {
            var mergeObj = {};
            mergeObj['tenant-bulkbuys/' + tenantId + '/' + key['$id']] = bulkbuyData;
            mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + bulkbuyData.customerSelected + '/records/' + key['$id']] = bulkbuyData;
            firebaseUtils.updateData(rootRef, mergeObj).then(function (key) {
                var ref = rootRef.child('tenant-customer-bulkbuy-records').child(tenantId).child(bulkbuyData.customerSelected).child('records').orderByChild('deactivated').equalTo(null);
                firebaseUtils.getListSum(ref, 'balancedQuantity').then(function (data) {
                    var mergeObj = {};
                    mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + bulkbuyData.customerSelected + '/balancedQuantity'] = data;
                    firebaseUtils.updateData(rootRef, mergeObj);
                });
            });
            //updateKegQuantity();
        }

        /**
         * Delete Bulkbuy
         * @returns {Object} bulkbuy data
         */
        function deleteBulkbuy(key) {
            var mergeObj = {};
            mergeObj['tenant-bulkbuys/' + tenantId + '/' + key['$id'] + '/deactivated'] = false;
            mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + key.customerSelected + '/records/' + key['$id'] + '/deactivated'] = false;
            //mergeObj['tenant-bulkbuy-records-deactivated/'+ tenantId + '/' + key['$id']] = key;
            firebaseUtils.updateData(rootRef, mergeObj).then(function () {
                var ref = rootRef.child('tenant-customer-bulkbuy-records').child(tenantId).child(key.customerSelected).child('records').orderByChild('deactivated').equalTo(null);
                firebaseUtils.getListSum(ref, 'balancedQuantity').then(function (data) {
                    var mergeObj = {};
                    mergeObj['tenant-customer-bulkbuy-records/' + tenantId + '/' + key.customerSelected + '/balancedQuantity'] = data;
                    firebaseUtils.updateData(rootRef, mergeObj);
                });
            });
            //updateKegQuantity();
        }

    }
}());
(function () {
    'use strict';

    bookingService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.bookings')
        .factory('bookingService', bookingService);

    /** @ngInject */
    function bookingService($firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant(),
            formInstance,
            customerList,
            statusList,
            chargesList,
            formData;
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveBooking: saveBooking,
            updateBooking: updateBooking,
            fetchBookingList: fetchBookingList,
            bookingForm: bookingForm
        };

        var quantityList = [{
                            id: 0,
                            quantity: 3
                        }, {
                            id: 1,
                            quantity: 5
                        }, {
                            id: 2,
                            quantity: 10
                        }, {
                            id: 3,
                            quantity: 15
                        }];
        return service;

        //////////

        function bookingForm(customerList, beerList) {
            var bookingForm = {
                colCount: 2,
                onInitialized: function (e) {
                    formInstance = e.component;
                },
                items: [{
                    dataField: 'date',
                    label:{
                        text: 'Date'
                    }, 
                    editorType: 'dxDateBox',
                    editorOptions: {
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Date is required'
                    }]
                }, {
                    dataField: 'beerSelected',
                    label: { 
                        text: 'Brew'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        dataSource: beerList,
                        displayExpr: "name",
                        valueExpr: "$id"
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Please select a brew'
                    }]
                }, {
                    dataField: 'customerSelected',
                    label: {
                        text: 'Customer'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        dataSource: customerList,
                        displayExpr: "name",
                        valueExpr: "$id",
                        searchExpr: ["name", "phone", "HHID"],
                        itemTemplate: function(itemData, itemIndex, itemElement) {
                            var rightBlock = $("<div style='display:inline-block;'>");
                            rightBlock.append("<p style='font-size:larger;'><b>" + itemData.name + "</b></p>");
                            rightBlock.append("<p>Phone: <span>" + itemData.phone + "</span></p>");
                            rightBlock.append("<p>HopHead ID: <span>" + itemData.HHID + "</span></p>");
                            itemElement.append(rightBlock);
                        }
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Please select a customer'
                    }]
                }, {
                    dataField: "quantity",
                    label: {
                        text: "quantity (Ltrs)"
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        dataSource: quantityList,
                        displayExpr: "quantity",
                        valueExpr: "id"
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Please select a quantity'
                    }]
                }]
            };
            return bookingForm;
        }
        /**
         * Grid Options for booking list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource, customers, beers) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchBookingList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (bookingObj) {
                            var data = formInstance.option('formData');
                            saveBooking(bookingObj);
                        },
                        update: function (key, bookingObj) {
                            updateBooking(key, bookingObj);
                        },
                        remove: function (key) {
                            deleteBooking(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    },
                    editing: {
                        allowAdding: true,
                        allowUpdating: true,
                        allowDeleting: true,
                        mode: 'form',
                        form: bookingForm(customers, beers)
                    },
                    columns: config.bookingGridCols(tenantId, customers, beers),
                    export: {
                        enabled: true,
                        fileName: 'Bookings',
                        allowExportSelectedData: true
                    }

                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Booking Form data
         */
        function saveBooking(bookingObj) {
            var ref = rootRef.child('tenant-bookings').child(tenantId);
            bookingObj.date = bookingObj.date.toString();
            bookingObj.user = auth.$getAuth().uid;
            firebaseUtils.addData(ref, bookingObj);
            updateKegQuantity();
        }

        function updateKegQuantity() {
            fetchBookingList().then(function(data){
                data.forEach(function(booking){
                    var ref = rootRef.child('tenant-kegs').child(tenantId).orderByChild('beerSelected').equalTo(booking.beerSelected);
                    firebaseUtils.fetchList(ref).then(function(data) {
                    updateDb(data, quantityList[booking.quantity].quantity);
                    });
                });
            });
            
        }

        
        function hasMin(data, attrib) {
                return data.reduce(function(prev, curr){ 
                    return prev[attrib] < curr[attrib] ? prev : curr; 
                });
            }
        function updateDb(data, quantity) {
            var smallestBrew = hasMin(data,'LtrsBalanced');  
            var ref = rootRef.child('tenant-kegs').child(tenantId).child(smallestBrew['$id']);
            if(smallestBrew.LtrsBalanced < quantity) {
                firebaseUtils.updateData(ref, {'LtrsBalanced': 0});
                var index = getIndexByArray(data, 'LtrsBalanced', smallestBrew.LtrsBalanced);
                data.splice(index,1);
                updateDb(data, quantity - smallestBrew.LtrsBalanced);
            } else {
                var balance = smallestBrew.LtrsBalanced - quantity;
                firebaseUtils.updateData(ref, {'LtrsBalanced': balance });
            }            
            
        }

        function getIndexByArray(data, key, value) {
            for(var i = 0; i< data.length; i++) {
                if(data[i][key] == value) {
                    return i;
                }
            }
            return -1;
        }
        
        /**
         * Fetch booking list
         * @returns {Object} Booking data
         */
        function fetchBookingList() {
            var ref = rootRef.child('tenant-bookings').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch booking list
         * @returns {Object} Booking data
         */
        function updateBooking(key, bookingData) {
            var ref = rootRef.child('tenant-bookings').child(tenantId).child(key['$id']);
            firebaseUtils.updateData(ref, bookingData);
            updateKegQuantity();
        }

        /**
         * Delete Booking
         * @returns {Object} booking data
         */
        function deleteBooking(key) {
            var ref = rootRef.child('tenant-bookings').child(tenantId).child(key['$id']);
            firebaseUtils.updateData(ref, { deactivated: false });
            updateKegQuantity();
        }

    }
}());
(function () {
    'use strict';

    locationService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.admin.locations')
        .factory('locationService', locationService);

    /** @ngInject */
    function locationService($firebaseArray, $firebaseObject, $q, authService, auth,firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant();
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveLocation: saveLocation,
            updateLocation: updateLocation,
            fetchLocationList: fetchLocationList
        };

        return service;

        //////////

        /**
         * Grid Options for location list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchLocationList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (locationObj) {
                            saveLocation(locationObj);
                        },
                        update: function (key, locationObj) {
                            updateLocation(key, locationObj);
                        },
                        remove: function (key) {
                            deleteLocation(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    }, 
                    columns: config.locationGridCols(),
                    export: {
                        enabled: true,
                        fileName: 'Locations',
                        allowExportSelectedData: true
                    }
                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Location Form data
         */
        function saveLocation(locationObj) {
            var ref = rootRef.child('tenant-locations').child(tenantId);
            locationObj.user = auth.$getAuth().uid;
            return firebaseUtils.addData(ref, locationObj);
        }

        /**
         * Fetch location list
         * @returns {Object} Location data
         */
        function fetchLocationList() {
            var ref = rootRef.child('tenant-locations').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch location list
         * @returns {Object} Location data
         */
        function updateLocation(key, locationData) {
            var ref = rootRef.child('tenant-locations').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, locationData);
        }

        /**
         * Delete Location
         * @returns {Object} location data
         */
        function deleteLocation(key) {
            var ref = rootRef.child('tenant-locations').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, {deactivated: false});
        }

    }
}());
(function () {
    'use strict';

    kegService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.admin.kegs')
        .factory('kegService', kegService);

    /** @ngInject */
    function kegService($firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant(),
            formInstance;
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveKeg: saveKeg,
            updateKeg: updateKeg,
            fetchKegList: fetchKegList
        };

        return service;

        //////////

        /**
         * Grid Options for keg list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchKegList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (kegObj) {
                            saveKeg(kegObj);
                        },
                        update: function (key, kegObj) {
                            updateKeg(key, kegObj);
                        },
                        remove: function (key) {
                            deleteKeg(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    },
                    columns: config.kegGridCols(tenantId),
                    export: {
                        enabled: true,
                        fileName: 'Kegs',
                        allowExportSelectedData: true
                    },
                    editing: {
                        mode: 'row',
                        allowAdding: true,
                        allowUpdating: false,
                        allowDeleting: true
                    }
                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * 
         */
        function keyMasterForm() {
            var beerListSource = new DevExpress.data.DataSource({
                load: function(loadOptions) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-beers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                byKey: function(key) {
                    var defer = $q.defer(),
                    ref = rootRef.child('tenant-beers').child(tenantId).child(key);
                    firebaseUtils.getItemByRef(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                }
            });

            var keyDataSource = new DevExpress.data.DataSource({
                load: function(loadOptions) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-kegs').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                byKey: function(key) {
                    var defer = $q.defer(),
                    ref = rootRef.child('tenant-kegs').child(tenantId).child(key);
                    firebaseUtils.getItemByRef(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                }
            });

            var keyGenForm = {
                colCount: 2,
                onInitialized: function (e) {
                    formInstance = e.component;
                },
                items: [{
                    dataField: 'batchDate',
                    label: {
                        text: 'Batch Date'
                    },
                    dataType: "date",
                    validationRules: [{
                        type: 'required',
                        message: 'Date is required'
                    }]
                }, {
                    dataField: 'beer',
                    label: {
                        text: 'Select Brew'
                    },
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        dataSource: beerListSource,
                        displayExpr: "name",
                        valueExpr: "$id",
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Field is required'
                    }]
                }, {
                    dataField: 'isBSelected',
                    label: {
                        text: 'Is Brew Selected'
                    },
                    editorType: 'dxCheckBox',
                    editorOptions: {
                        value: false
                    }
                }, {
                    dataField: 'LtrsProduced',
                    label: {
                        text: 'Produced (Ltrs.)'
                    },
                    editorType: 'dxNumberBox',
                    validationRules: [{
                        type: 'required',
                        message: 'Field is required'
                    }]
                }]
            };
            return keyGenForm;
        }
        /**
         * Save form data
         * @returns {Object} Keg Form data
         */
        function saveKeg(kegObj) {
            var ref = rootRef.child('tenant-kegs').child(tenantId);
            kegObj.user = auth.$getAuth().uid;
            kegObj.LtrsBalanced = kegObj.ProducedLtrs;
            return firebaseUtils.addData(ref, kegObj);
        }

        /**
         * Fetch keg list
         * @returns {Object} Keg data
         */
        function fetchKegList() {
            var ref = rootRef.child('tenant-kegs').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch keg list
         * @returns {Object} Keg data
         */
        function updateKeg(key, kegData) {
            var ref = rootRef.child('tenant-kegs').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, kegData);
        }

        /**
         * Delete Keg
         * @returns {Object} keg data
         */
        function deleteKeg(key) {
            var ref = rootRef.child('tenant-kegs').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, { deactivated: false });
        }

    }
}());
(function () {
    'use strict';

    driverService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.admin.drivers')
        .factory('driverService', driverService);

    /** @ngInject */
    function driverService($firebaseArray, $firebaseObject, $q, authService, auth,firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant();
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveDriver: saveDriver,
            updateDriver: updateDriver,
            fetchDriverList: fetchDriverList
        };

        return service;

        //////////

        /**
         * Grid Options for driver list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchDriverList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (driverObj) {
                            saveDriver(driverObj);
                        },
                        update: function (key, driverObj) {
                            updateDriver(key, driverObj);
                        },
                        remove: function (key) {
                            deleteDriver(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    }, 
                    columns: config.driverGridCols(),
                    export: {
                        enabled: true,
                        fileName: 'Drivers',
                        allowExportSelectedData: true
                    }
                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Driver Form data
         */
        function saveDriver(driverObj) {
            var ref = rootRef.child('tenant-drivers').child(tenantId);
            driverObj.user = auth.$getAuth().uid;
            return firebaseUtils.addData(ref, driverObj);
        }

        /**
         * Fetch driver list
         * @returns {Object} Driver data
         */
        function fetchDriverList() {
            var ref = rootRef.child('tenant-drivers').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch driver list
         * @returns {Object} Driver data
         */
        function updateDriver(key, driverData) {
            var ref = rootRef.child('tenant-drivers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, driverData);
        }

        /**
         * Delete Driver
         * @returns {Object} driver data
         */
        function deleteDriver(key) {
            var ref = rootRef.child('tenant-drivers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, {deactivated: false});
        }

    }
}());
(function () {
    'use strict';

    customerService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.admin.customers')
        .factory('customerService', customerService);

    /** @ngInject */
    function customerService($firebaseArray, $firebaseObject, $q, authService, auth, firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant();
        // Private variables

        var service = {
            formOptions: formOptions,
            gridOptions: gridOptions,
            saveCustomer: saveCustomer,
            updateCustomer: updateCustomer,
            fetchCustomerList: fetchCustomerList
        };

        return service;

        //////////

        /**
         * Return form Item Configuration
         * @returns {Object} Item configuration
         */
        function formOptions() {
            var formOptionsItems = {

                bindingOptions: {
                    formData: 'vm.customers'
                },
                colCount: 2,
                items: [{
                    dataField: 'name',
                    label: {
                        text: 'Name'
                    },
                    validationRules: [{
                        type: 'required',
                        message: 'Name is required'
                    }]
                }, {
                    dataField: 'phone',
                    label: {
                        text: 'Phone'
                    },
                    editorType: 'dxNumberBox',
                    validationRules: [{
                        type: 'required',
                        message: 'Phone number is required'
                    }]
                }, {
                    dataField: 'email',
                    label: {
                        text: 'Email'
                    },
                    validationRules: [{
                        type: 'email',
                        message: 'Please enter valid e-mail address'
                    }]
                }, {
                    dataField: 'alias',
                    label: {
                        text: 'Short Name'
                    }
                }, {
                    dataField: 'gstno',
                    label: {
                        text: 'GST No'
                    },
                    editorOptions: {
                        mask: '00AAAAAAAAAA0A0'
                    }
                }, {
                    dataField: 'adress',
                    label: {
                        text: 'Address'
                    }
                }, {
                    dataField: 'city',
                    label: {
                        text: 'City'
                    }
                }, {
                    dataField: 'state',
                    label: {
                        text: 'State'
                    }
                }, {
                    dataField: 'zipcode',
                    label: {
                        text: 'ZIP/Pincode'
                    },
                    editorOptions: {
                        mask: '000000'
                    }
                }],
                onContentReady: function () {
                    var dxFormInstance = $('#customer-form').dxForm('instance');
                }
            };
            return formOptionsItems;
        }

        /**
         * Grid Options for customer list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchCustomerList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (customerObj) {
                            saveCustomer(customerObj);
                        },
                        update: function (key, customerObj) {
                            updateCustomer(key, customerObj);
                        },
                        remove: function (key) {
                            deleteCustomer(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    },
                    columns: config.customerGridCols(),
                    export: {
                        enabled: true,
                        fileName: 'Customers',
                        allowExportSelectedData: true
                    },
                    editing: {
                        allowAdding: true,
                        allowUpdating: true,
                        allowDeleting: true,
                        mode: 'row',
                        form: formOptions()
                    }, onRowRemoving: function (e) {
                        var d = $.Deferred();
                        var ref = rootRef.child('tenant-customer-records').child(tenantId).child(e.data.$id).child('records').orderByChild('deactivated').equalTo(null);
                        firebaseUtils.fetchList(ref).then(function (data) {
                            if (data.length > 0) {
                                d.reject("Can not delete the record");
                            } else {
                                d.resolve();
                            }
                        });
                        e.cancel = d.promise();
                    }
                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Customer Form data
         */
        function saveCustomer(customerObj) {
            var ref = rootRef.child('tenant-customers').child(tenantId);
            customerObj.membersSince = customerObj.membersSince.toString();
            if(customerObj.anniversary) {
                customerObj.anniversary = customerObj.anniversary.toString();
            }
             if (!customerObj.date) {
                customerObj.date = new Date();
            }
            customerObj.date = customerObj.date.toString();
            customerObj.user = auth.$getAuth().uid;
            return firebaseUtils.addData(ref, customerObj);
        }

        /**
         * Fetch customer list
         * @returns {Object} Customer data
         */
        function fetchCustomerList() {
            var ref = rootRef.child('tenant-customers').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch customer list
         * @returns {Object} Customer data
         */
        function updateCustomer(key, customerData) {
            var ref = rootRef.child('tenant-customers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, customerData);
        }

        /**
         * Delete Customer
         * @returns {Object} customer data
         */
        function deleteCustomer(key) {
            var ref = rootRef.child('tenant-customers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, { deactivated: false });
        }

    }
}());
(function () {
    'use strict';

    containerService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.admin.containers')
        .factory('containerService', containerService);

    /** @ngInject */
    function containerService($firebaseArray, $firebaseObject, $q, authService, auth,firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant();
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveContainer: saveContainer,
            updateContainer: updateContainer,
            fetchContainerList: fetchContainerList
        };

        return service;

        //////////

        /**
         * Grid Options for container list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchContainerList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (containerObj) {
                            saveContainer(containerObj);
                        },
                        update: function (key, containerObj) {
                            updateContainer(key, containerObj);
                        },
                        remove: function (key) {
                            deleteContainer(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    }, 
                    columns: config.containerGridCols(),
                    export: {
                        enabled: true,
                        fileName: 'Containers',
                        allowExportSelectedData: true
                    }
                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Container Form data
         */
        function saveContainer(containerObj) {
            var ref = rootRef.child('tenant-containers').child(tenantId);
            containerObj.user = auth.$getAuth().uid;
            return firebaseUtils.addData(ref, containerObj);
        }

        /**
         * Fetch container list
         * @returns {Object} Container data
         */
        function fetchContainerList() {
            var ref = rootRef.child('tenant-containers').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch container list
         * @returns {Object} Container data
         */
        function updateContainer(key, containerData) {
            var ref = rootRef.child('tenant-containers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, containerData);
        }

        /**
         * Delete Container
         * @returns {Object} container data
         */
        function deleteContainer(key) {
            var ref = rootRef.child('tenant-containers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, {deactivated: false});
        }

    }
}());
(function () {
    'use strict';

    beerService.$inject = ["$firebaseArray", "$firebaseObject", "$q", "authService", "auth", "firebaseUtils", "dxUtils", "config"];
    angular
        .module('app.admin.beers')
        .factory('beerService', beerService);

    /** @ngInject */
    function beerService($firebaseArray, $firebaseObject, $q, authService, auth,firebaseUtils, dxUtils, config) {
        var tenantId = authService.getCurrentTenant();
        // Private variables

        var service = {
            gridOptions: gridOptions,
            saveBeer: saveBeer,
            updateBeer: updateBeer,
            fetchBeerList: fetchBeerList
        };

        return service;

        //////////

        /**
         * Grid Options for beer list
         * @param {Object} dataSource 
         */
        function gridOptions(dataSource) {
            var gridOptions = dxUtils.createGrid(),
                otherConfig = {
                    dataSource: {
                        load: function () {
                            var defer = $q.defer();
                            fetchBeerList().then(function (data) {
                                defer.resolve(data);
                            });
                            return defer.promise;
                        },
                        insert: function (beerObj) {
                            saveBeer(beerObj);
                        },
                        update: function (key, beerObj) {
                            updateBeer(key, beerObj);
                        },
                        remove: function (key) {
                            deleteBeer(key);
                        }
                    },
                    summary: {
                        totalItems: [{
                            column: 'name',
                            summaryType: 'count'
                        }]
                    }, 
                    columns: config.beerGridCols(),
                    export: {
                        enabled: true,
                        fileName: 'Brews',
                        allowExportSelectedData: true
                    }
                };

            angular.extend(gridOptions, otherConfig);
            return gridOptions;
        };

        /**
         * Save form data
         * @returns {Object} Beer Form data
         */
        function saveBeer(beerObj) {
            var ref = rootRef.child('tenant-beers').child(tenantId);
            beerObj.user = auth.$getAuth().uid;
            return firebaseUtils.addData(ref, beerObj);
        }

        /**
         * Fetch beer list
         * @returns {Object} Beer data
         */
        function fetchBeerList() {
            var ref = rootRef.child('tenant-beers').child(tenantId).orderByChild('deactivated').equalTo(null);
            return firebaseUtils.fetchList(ref);
        }

        /**
         * Fetch beer list
         * @returns {Object} Beer data
         */
        function updateBeer(key, beerData) {
            var ref = rootRef.child('tenant-beers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, beerData);
        }

        /**
         * Delete Beer
         * @returns {Object} beer data
         */
        function deleteBeer(key) {
            var ref = rootRef.child('tenant-beers').child(tenantId).child(key['$id']);
            return firebaseUtils.updateData(ref, {deactivated: false});
        }

    }
}());
(function ()
{
    'use strict';

    config.$inject = ["$translatePartialLoaderProvider", "msApiProvider"];
    angular
        .module('app.quick-panel', [])
        .config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider, msApiProvider)
    {
        // Translation
        $translatePartialLoaderProvider.addPart('app/quick-panel');

        // Api
        msApiProvider.register('quickPanel.activities', ['app/data/quick-panel/activities.json']);
        msApiProvider.register('quickPanel.contacts', ['app/data/quick-panel/contacts.json']);
        msApiProvider.register('quickPanel.events', ['app/data/quick-panel/events.json']);
        msApiProvider.register('quickPanel.notes', ['app/data/quick-panel/notes.json']);
    }
})();

(function ()
{
    'use strict';

    ChatTabController.$inject = ["msApi", "$timeout"];
    angular
        .module('app.quick-panel')
        .controller('ChatTabController', ChatTabController);

    /** @ngInject */
    function ChatTabController(msApi, $timeout)
    {
        var vm = this;

        // Data
        vm.chat = {};
        vm.chatActive = false;
        vm.replyMessage = '';

        msApi.request('quickPanel.contacts@get', {},
            // Success
            function (response)
            {
                vm.contacts = response.data;
            }
        );

        // Methods
        vm.toggleChat = toggleChat;
        vm.reply = reply;

        //////////

        function toggleChat(contact)
        {
            vm.chatActive = !vm.chatActive;

            if ( vm.chatActive )
            {
                vm.replyMessage = '';
                vm.chat.contact = contact;
                scrollToBottomOfChat(0);
            }
        }

        function reply()
        {
            if ( vm.replyMessage === '' )
            {
                return;
            }

            if ( !vm.chat.contact.dialog )
            {
                vm.chat.contact.dialog = [];
            }

            vm.chat.contact.dialog.push({
                who    : 'user',
                message: vm.replyMessage,
                time   : 'Just now'
            });

            vm.replyMessage = '';

            scrollToBottomOfChat(400);
        }

        function scrollToBottomOfChat(speed)
        {
            var chatDialog = angular.element('#chat-dialog');

            $timeout(function ()
            {
                chatDialog.animate({
                    scrollTop: chatDialog[0].scrollHeight
                }, speed);
            }, 0);

        }
    }

})();
(function ()
{
    'use strict';

    config.$inject = ["msNavigationServiceProvider"];
    angular
        .module('app.settings', [
            'app.settings.taxes',
            'app.settings.taxgroups'
            // 'app.settings.itemtaxtypes',
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('settings', {
            title : 'Settings',
            group : true,
            weight: 2
        });

    }
})();
(function() {
    'use strict';

    settingsService.$inject = ["$firebaseArray", "$firebaseObject", "auth", "$q", "$timeout"];
    angular
        .module('app.settings')
        .factory('settingsService', settingsService);

    /** @ngInject */
    function settingsService($firebaseArray, $firebaseObject, auth, $q, $timeout) {
        var currentUser;
        var service = {
            setCurrentSettings: setCurrentSettings,
            getCurrentSettings: getCurrentSettings
        };

        return service;

        //////////
        /**
         * Set Current User
         * @param {Object} User information object
         */
        function setCurrentSettings(data) {
            localStorage.setItem('userObj', JSON.stringify(data));
        }

        /**
         * Get Current Settings
         * @param {String} Current Tenant Id
         */
        function getCurrentSettings() {
            var def = $q.defer(),
                ref = rootRef.child('settings'),
                obj = $firebaseObject(ref);

            obj.$loaded().then(function(data) {
                def.resolve(data);
            }).catch(function(err) {
                def.reject(err);
            });

            return def.promise;
        }

 
    }

})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msNavigationServiceProvider"];
    angular
        .module('app.auth.tenant', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.auth_tenant', {
            url      : '/auth/tenant',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/auth/tenant/tenant.html',
                    controller : 'TenantController as vm', 
                    resolve : {
                        currentAuth: ["auth", function (auth) {
                            // returns a promisse so the resolve waits for it to complete
                            return auth.$requireSignIn();
                        }]
                    }
                }
            },
            bodyClass: 'tenant'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/auth/tenant');

        // Navigation
        msNavigationServiceProvider.saveItem('admin', {
            title : 'Admin',
            group : true,
            weight: 1
        });
        msNavigationServiceProvider.saveItem('admin.tenant', {
            title : 'Profile',
            icon  : 'icon-account',
            state : 'app.auth_tenant',
            weight: 5
        });
    }

})();
(function ()
{
    'use strict';

    TenantController.$inject = ["authService", "currentAuth"];
    angular
        .module('app.auth.tenant')
        .controller('TenantController', TenantController);

    /** @ngInject */
    function TenantController(authService, currentAuth)
    {
        var vm = this;
        // Data
        vm.tenant = [];
        vm.tenantIdExist = false;
        vm.editMode = false;
        // Methods
        vm.addTenant = addTenant;
        vm.editTenant = editTenant;
        init();

        /**
         * Init function 
         */
        function init() {
            authService.getCurrentUser(currentAuth.uid).then(function(data) {
                vm.userInfo = data;
                if('tenantId' in vm.userInfo || vm.userInfo.hasOwnProperty('tenantId') === true) {
                    vm.editMode = true;
                    vm.tenantIdExist = true;
                    authService.retrieveTenant(vm.userInfo.tenantId).then(function(tenantData){
                        vm.tenant = tenantData;
                        vm.tenantId = vm.userInfo.tenantId;
                    });
                } else {
                    vm.tenant.email = currentAuth.email;
                }
            });
        }

        /**
         * Add new tenant
         * @param tenant Information object
         */
        function addTenant(tenant) {
           if(vm.editMode === true) {
             vm.editTenant(tenant);
           } else {
               authService.addTenant(tenant).then(function(key){
                    authService.updateUserTenantId(currentAuth.uid, key, vm.userInfo).then(function(){
                        authService.setCurrentTenant(key);
                    });
                  return key;
               }).catch(function(err){

               });
           }
        }

        /**
         * Edit Existing tenant
         * @param tenant Information object
         */
        function editTenant(tenant) {
           authService.updateTenantInfo(tenant, vm.tenantId).then(function(data){
                //authService.updateUserInfo(currentAuth.uid, data);
           }).catch(function(err){

           });
        }
    }
})();
(function ()
{
    'use strict';

    config.$inject = ["msNavigationServiceProvider"];
    angular
        .module('app.auth', [
            'app.auth.login',
            'app.auth.register',
            'app.auth.forgot-password',
            'app.auth.reset-password',
            'app.auth.lock'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        
    }
})();
(function () {
    'use strict';

    authService.$inject = ["$firebaseArray", "$firebaseObject", "auth", "$q", "$timeout", "$state", "firebaseUtils"];
    angular
        .module('app.auth')
        .factory('authService', authService);

    /** @ngInject */
    function authService($firebaseArray, $firebaseObject, auth, $q, $timeout, $state, firebaseUtils) {
        var service = {
            setCurrentTenant: setCurrentTenant,
            getCurrentTenant: getCurrentTenant,
            updateUserInfo: updateUserInfo,
            getCurrentUser: getCurrentUser,
            removeCurrentUser: removeCurrentUser,
            registerUser: registerUser,
            createProfile: createProfile,
            addTenant: addTenant,
            updateUserTenantId: updateUserTenantId,
            retrieveTenant: retrieveTenant,
            updateTenantInfo: updateTenantInfo,
            addUserToTenant: addUserToTenant,
            updatePassword: updatePassword,
            forgotPassword: forgotPassword,
            redirect: redirect
        };

        return service;

        //////////
        /**
         * Set Current Tenant
         * @param {Object} User information object
         */
        function setCurrentTenant(data) {
            var defer = $q.defer();
            defer.resolve(localStorage.setItem('tenantId', JSON.stringify(data)));
            return defer.promise;
        }

        /**
        * get Current Tenant Id
        */
        function getCurrentTenant(data) {
            return localStorage.getItem('tenantId') ? localStorage.getItem('tenantId').replace(/["']/g, "") : null;
        }

        /**
         * update User Information
         * @param {Object} user Update User information object
         */
        function updateUserInfo(user) {
            var ref = rootRef.child('users').child(uid);
            return firebaseUtils.updateData(ref, user);
        }

        /**
         * Get Current User
         * @param {String} Current User Id
         */
        function getCurrentUser(uid) {
            var ref = rootRef.child('users').child(uid);
            return firebaseUtils.getItemByRef(ref);
        }

        /**
         * Remove Current User
         * @param data
         */
        function removeCurrentUser() {
            localStorage.removeItem('userObj')
        }

        /**
         * Register a tenant
         * @param {Object} user User information Object
         */
        function registerUser(user) {
            var def = $q.defer();

            auth.$createUserWithEmailAndPassword(user.email, user.password).then(function (data) {
                def.resolve(data);
            }).catch(function (err) {
                def.reject(err);
            });
            return def.promise;
        }

        /**
         * Create a Profile
         * @param {Object} user user information object
         * @param {Object} authData current User authentication information
         * @param {String} tenantId current Tenant Id
         */
        function createProfile(user, authData, tenantId) {
            var userObj = rootRef.child('users'),
                userData = {
                    email: user.email,
                    name: user.username,
                    role: user.role,
                    uid: authData.uid
                };

            if (getCurrentTenant()) {
                userData.tenantId = getCurrentTenant();
            }
            return firebaseUtils.addData(userObj, userData);
        }

        /**
         * Create a Tenant
         * @param {Object} tenant Tenant Information object
         */
        function addTenant(tenant) {
            var tenantObj = rootRef.child('tenants'),
                def = $q.defer();

            delete tenant.password;
            if (getCurrentTenant()) {
                def.resolve(getCurrentTenant());
                return def.promise;
            } else {
                return firebaseUtils.addData(tenantObj, tenant);
            }
        }

        /**
         * Add new tenantId
         * @param {String} tenant Id 
         */
        function updateUserTenantId(uid, tenantId, user, authData) {
            var mergeObj = {},
                userObj = {
                    name: user.username,
                    email: user.email,
                    role: user.role
                };
            mergeObj['users/' + uid + '/tenantId'] = tenantId;
            mergeObj['tenant-users/' + tenantId + '/' + uid] = userObj;
            mergeObj['users-uid/' + authData.uid + '/tenantId'] = tenantId;
            return firebaseUtils.updateData(rootRef, mergeObj);
        }
        /**
         * Retrieve a tenant
         * @param {String} tenant Id
         */
        function retrieveTenant(tenantId) {
            if (!tenantId) {
                tenantId = this.getCurrentTenant();
            }
            var ref = rootRef.child('tenants').child(tenantId);
            return firebaseUtils.getItemByRef(ref);
        }

        /**
         * Update Tenant Information
         * @param {Object} tenant Information object
         */
        function updateTenantInfo(tenant, tenantId) {
            if (!tenantId) {
                tenantId = this.getCurrentTenant();
            }
            var ref = rootRef.child('tenants').child(tenantId);
            return firebaseUtils.updateData(ref, tenant);
        }

        /**
         * Add User to a tenant
         * @param {String} tenant ID
         * @param {Object} user Information object
         */
        function addUserToTenant(tenantId, user) {
            var tenantObj = rootRef.child('tenants').child(tenantId);
            return firebaseUtils.addData(tenantObj, user);
        }

        /**
         * Update user's password
         */
        function updatePassword(passwordObj) {
            var def = $q.defer();
            auth.$updatePassword(passwordObj.password, function (response) {
                def.resolve(response);
            }, function (error) {
                def.reject(errot);
            });

            return def.promise;
        }

        /**
         * Forgot Password
         */
        function forgotPassword(email) {
            var def = $q.defer();

            auth.$sendPasswordResetEmail(email).then(function () {
                alert("Password reset email sent successfully!");
            }).catch(function (error) {
                console.error("Error: ", error);
            });
        }

        /**
         * Create tenant
         */
        function redirect(user, profile, authData) {
            addTenant(user).then(function (key) {
                updateUserTenantId(profile, key, user, authData).then(function () {
                    setCurrentTenant(key).then(function () {
                        $state.go('app.records.list');
                    });
                });
            }).catch(function (err) {

            });
        }
    }

})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msNavigationServiceProvider"];
    angular
        .module('app.auth.reset-password', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.auth_reset-password', {
            url      : '/auth/reset-password',
            views    : {
                'main@'                                : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.auth_reset-password': {
                    templateUrl: 'app/main/auth/reset-password/reset-password.html',
                    controller : 'ResetPasswordController as vm'
                }
            },
            bodyClass: 'reset-password'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/auth/reset-password');

    }

})();
(function ()
{
    'use strict';

    angular
        .module('app.auth.reset-password')
        .controller('ResetPasswordController', ResetPasswordController);

    /** @ngInject */
    function ResetPasswordController()
    {
        // Data

        // Methods

        //////////
    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msNavigationServiceProvider"];
    angular
        .module('app.auth.register', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.auth_register', {
            url      : '/auth/register',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.auth_register': {
                    templateUrl: 'app/main/auth/register/register.html',
                    controller : 'RegisterController as vm'
                }
            },
            bodyClass: 'register'
        });

        // Translate
        $translatePartialLoaderProvider.addPart('app/main/auth/register');

    }

})();
(function ()
{
    'use strict';

    RegisterController.$inject = ["authService", "$state"];
    angular
        .module('app.auth.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController(authService, $state)
    {
        var vm = this;
        // Data

        // Methods
        vm.register = register;
        //vm.redirect = redirect;

        //////////
        function register() {
            var user = {
              username: vm.form.username,
              email: vm.form.email,
              password: vm.form.password,
              role: 'superuser'
            };
            authService.registerUser(user).then(function(authData) {
              authService.createProfile(user, authData).then(function(profile) {
                authService.redirect(user, profile, authData);
              });
            });
        }

       
    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msNavigationServiceProvider"];
    angular
        .module('app.auth.login', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.auth_login', {
            url      : '/auth/login',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.auth_login': {
                    templateUrl: 'app/main/auth/login/login.html',
                    controller : 'LoginController as vm'
                }
            },
            bodyClass: 'login'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/auth/login');

      
    }

})();
(function ()
{
    'use strict';

    LoginController.$inject = ["auth", "$state", "$firebaseObject", "authService", "$scope", "$timeout"];
    angular
        .module('app.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController(auth, $state, $firebaseObject, authService, $scope, $timeout)
    {
        // Data
        var vm = this;
        // Methods
        vm.login = login;
        vm.retrieveTenantId = retrieveTenantId;
        //////////

        auth.$onAuthStateChanged(function (authData) {
          if (authData) {
            if(!authService.getCurrentTenant()) {
              var userData = rootRef.child('users-uid').child(authData.uid);
              var obj = $firebaseObject(userData);
              obj.$loaded().then(function(data) {
                $timeout(function() {
                  $scope.userObj = data;
                  authService.setCurrentTenant($scope.userObj.tenantId);
                  $state.go('app.records.list');
                });
              });
            } else {
              $state.go('app.records.list');
            }
          } else {
            $state.go('app.auth_login');
            localStorage.clear();
          }
        });
        
        function login(loginForm) {
             auth.$signInWithEmailAndPassword(vm.form.email, vm.form.password)
              .then(function (authData) {
                //vm.retrieveTenantId(authData);
                //$state.go('app.records.list');
              })
              .catch(function (error) {
               // showError(error);
                console.log("error: " + error);
              });
        }

        function retrieveTenantId(authData) {
            var tenantObj = rootRef.child('users-uid').child(authData.uid);
            var obj = $firebaseObject(tenantObj);
            obj.$loaded().then(function(data) {
                authService.setCurrentTenant(data.tenantId);
            });
        }
    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msNavigationServiceProvider"];
    angular
        .module('app.auth.lock', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.auth_lock', {
            url      : '/auth/lock',
            views    : {
                'main@'                      : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.auth_lock': {
                    templateUrl: 'app/main/auth/lock/lock.html',
                    controller : 'LockController as vm'
                }
            },
            bodyClass: 'lock'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/auth/lock');

       
    }

})();
(function ()
{
    'use strict';

    angular
        .module('app.auth.lock')
        .controller('LockController', LockController);

    /** @ngInject */
    function LockController()
    {
        var vm = this;

        // Data
        vm.form = {
            username: 'Jane Doe'
        };

        // Methods

        //////////
    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$stateProvider", "$translatePartialLoaderProvider", "msNavigationServiceProvider"];
    angular
        .module('app.auth.forgot-password', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.auth_forgot-password', {
            url      : '/auth/forgot-password',
            views    : {
                'main@'                                 : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.auth_forgot-password': {
                    templateUrl: 'app/main/auth/forgot-password/forgot-password.html',
                    controller : 'ForgotPasswordController as vm'
                }
            },
            bodyClass: 'forgot-password'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/auth/forgot-password');

        // Navigation
    }

})();
(function ()
{
    'use strict';

    ForgotPasswordController.$inject = ["authService"];
    angular
        .module('app.auth.forgot-password')
        .controller('ForgotPasswordController', ForgotPasswordController);

    /** @ngInject */
    function ForgotPasswordController(authService)
    {
        // Data
        var vm = this;
        // Methods
        vm.forgotPassword = forgotPassword;
        //////////
        
        /**
         * Forgot Password Email
         */
        function forgotPassword(form) {
            authService.forgotPassword(form.email);
        }
    }
})();
(function ()
{
    'use strict';

    config.$inject = ["msNavigationServiceProvider"];
    angular
        .module('app.admin', [
            'app.admin.customers',
            //'app.admin.beers',
            //'app.admin.kegs'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        // msNavigationServiceProvider.saveItem('admin', {
        //     title : 'Admin',
        //     group : true,
        //     weight: 2
        // });

    }
})();
(function() {
    'use strict';

    adminService.$inject = ["$firebaseArray", "$firebaseObject", "auth", "$q", "$timeout", "authService", "firebaseUtils"];
    angular
        .module('app.admin')
        .factory('adminService', adminService);

    /** @ngInject */
    function adminService($firebaseArray, $firebaseObject, auth, $q, $timeout, authService, firebaseUtils) {
        var currentUser,
            tenantId = authService.getCurrentTenant(),
            service = {
                setCurrentSettings: setCurrentSettings,
                getCurrentSettings: getCurrentSettings,
                getCurrentCustomers: getCurrentCustomers,
                getBeers: getBeers,
                getCurrentBulkCustomers: getCurrentBulkCustomers,
                getCurrentOffers: getCurrentOffers
            };

        return service;

        //////////
        /**
         * Set Current User
         * @param {Object} User information object
         */
        function setCurrentSettings(data) {
            localStorage.setItem('userObj', JSON.stringify(data));
        }

        /**
         * Get Current Settings
         * @param {String} Current Tenant Id
         */
        function getCurrentSettings() {
            var def = $q.defer(),
                ref = rootRef.child('settings'),
                obj = $firebaseObject(ref);

            obj.$loaded().then(function(data) {
                def.resolve(data);
            }).catch(function(err) {
                def.reject(err);
            });

            return def.promise;
        }

        /**
         * get Current Customers
         */
        function getCurrentCustomers() {
            var defer = $q.defer(),
                ref = rootRef.child('tenant-customers').child(tenantId).orderByChild('deactivated').equalTo(null);
            firebaseUtils.fetchList(ref).then(function (data) {
                defer.resolve(data);
            });
            return defer.promise;
        }

        /**
         * Get current brews
         */
        function getBeers() {
             var defer = $q.defer(),
                ref = rootRef.child('tenant-beers').child(tenantId).orderByChild('deactivated').equalTo(null);
            firebaseUtils.fetchList(ref).then(function (data) {
                defer.resolve(data);
            });
            return defer.promise;
        }

        function getCurrentBulkCustomers() {
            var defer = $q.defer(),
                ref = rootRef.child('tenant-bulkbuy-customers').child(tenantId).orderByChild('deactivated').equalTo(null);
            firebaseUtils.fetchList(ref).then(function (data) {
                defer.resolve(data);
            });
            return defer.promise;
        }

        function getCurrentOffers() {
            var defer = $q.defer(),
                ref = rootRef.child('tenant-record-offers').child(tenantId);
            firebaseUtils.fetchList(ref).then(function (data) {
                defer.resolve(data);
            });
            return defer.promise;
        }
    }

})();
(function ()
{
    'use strict';

    angular
        .module('app.core',
            [
                'ngAnimate',
                'ngAria',
                'ngCookies',
                'ngMessages',
                'ngResource',
                'ngSanitize',
                'ngMaterial',
                'pascalprecht.translate',
                'ui.router'
            ]);
})();
(function ()
{
    'use strict';

    MsWidgetController.$inject = ["$scope", "$element"];
    angular
        .module('app.core')
        .controller('MsWidgetController', MsWidgetController)
        .directive('msWidget', msWidgetDirective)
        .directive('msWidgetFront', msWidgetFrontDirective)
        .directive('msWidgetBack', msWidgetBackDirective);

    /** @ngInject */
    function MsWidgetController($scope, $element)
    {
        var vm = this;

        // Data
        vm.flipped = false;

        // Methods
        vm.flip = flip;

        //////////

        /**
         * Flip the widget
         */
        function flip()
        {
            if ( !isFlippable() )
            {
                return;
            }

            // Toggle flipped status
            vm.flipped = !vm.flipped;

            // Toggle the 'flipped' class
            $element.toggleClass('flipped', vm.flipped);
        }

        /**
         * Check if widget is flippable
         *
         * @returns {boolean}
         */
        function isFlippable()
        {
            return (angular.isDefined($scope.flippable) && $scope.flippable === true);
        }
    }

    /** @ngInject */
    function msWidgetDirective()
    {
        return {
            restrict  : 'E',
            scope     : {
                flippable: '=?'
            },
            controller: 'MsWidgetController',
            transclude: true,
            compile   : function (tElement)
            {
                tElement.addClass('ms-widget');

                return function postLink(scope, iElement, iAttrs, MsWidgetCtrl, transcludeFn)
                {
                    // Custom transclusion
                    transcludeFn(function (clone)
                    {
                        iElement.empty();
                        iElement.append(clone);
                    });

                    //////////
                };
            }
        };
    }

    /** @ngInject */
    function msWidgetFrontDirective()
    {
        return {
            restrict  : 'E',
            require   : '^msWidget',
            transclude: true,
            compile   : function (tElement)
            {
                tElement.addClass('ms-widget-front');

                return function postLink(scope, iElement, iAttrs, MsWidgetCtrl, transcludeFn)
                {
                    // Custom transclusion
                    transcludeFn(function (clone)
                    {
                        iElement.empty();
                        iElement.append(clone);
                    });

                    // Methods
                    scope.flipWidget = MsWidgetCtrl.flip;
                };
            }
        };
    }

    /** @ngInject */
    function msWidgetBackDirective()
    {
        return {
            restrict  : 'E',
            require   : '^msWidget',
            transclude: true,
            compile   : function (tElement)
            {
                tElement.addClass('ms-widget-back');

                return function postLink(scope, iElement, iAttrs, MsWidgetCtrl, transcludeFn)
                {
                    // Custom transclusion
                    transcludeFn(function (clone)
                    {
                        iElement.empty();
                        iElement.append(clone);
                    });

                    // Methods
                    scope.flipWidget = MsWidgetCtrl.flip;
                };
            }
        };
    }

})();
(function ()
{
    'use strict';

    msTimelineItemDirective.$inject = ["$timeout", "$q"];
    angular
        .module('app.core')
        .controller('MsTimelineController', MsTimelineController)
        .directive('msTimeline', msTimelineDirective)
        .directive('msTimelineItem', msTimelineItemDirective);

    /** @ngInject */
    function MsTimelineController()
    {
        var vm = this;

        // Data
        vm.scrollEl = undefined;

        // Methods
        vm.setScrollEl = setScrollEl;
        vm.getScrollEl = getScrollEl;

        //////////

        /**
         * Set scroll element
         *
         * @param scrollEl
         */
        function setScrollEl(scrollEl)
        {
            vm.scrollEl = scrollEl;
        }

        /**
         * Get scroll element
         *
         * @returns {undefined|*}
         */
        function getScrollEl()
        {
            return vm.scrollEl;
        }
    }

    /** @ngInject */
    function msTimelineDirective()
    {
        return {
            scope     : {
                msTimeline: '=?',
                loadMore  : '&?msTimelineLoadMore'
            },
            controller: 'MsTimelineController',
            compile   : function (tElement)
            {
                tElement.addClass('ms-timeline');

                return function postLink(scope, iElement, iAttrs, MsTimelineCtrl)
                {
                    // Create an element for triggering the load more action and append it
                    var loadMoreEl = angular.element('<div class="ms-timeline-loader md-accent-bg md-whiteframe-4dp"><span class="spinner animate-rotate"></span></div>');
                    iElement.append(loadMoreEl);

                    // Default config
                    var config = {
                        scrollEl: '#content'
                    };

                    // Extend the configuration
                    config = angular.extend(config, scope.msTimeline, {});
                    
                    // Grab the scrollable element and store it in the controller for general use
                    var scrollEl = angular.element(config.scrollEl);
                    MsTimelineCtrl.setScrollEl(scrollEl);

                    // Threshold
                    var threshold = 144;

                    // Register onScroll event for the first time
                    registerOnScroll();

                    /**
                     * onScroll Event
                     */
                    function onScroll()
                    {
                        if ( scrollEl.scrollTop() + scrollEl.height() + threshold > loadMoreEl.position().top )
                        {
                            // Show the loader
                            loadMoreEl.addClass('show');

                            // Unregister scroll event to prevent triggering the function over and over again
                            unregisterOnScroll();

                            // Trigger load more event
                            scope.loadMore().then(
                                // Success
                                function ()
                                {
                                    // Hide the loader
                                    loadMoreEl.removeClass('show');

                                    // Register the onScroll event again
                                    registerOnScroll();
                                },

                                // Error
                                function ()
                                {
                                    // Remove the loader completely
                                    loadMoreEl.remove();
                                }
                            );
                        }
                    }

                    /**
                     * onScroll event registerer
                     */
                    function registerOnScroll()
                    {
                        scrollEl.on('scroll', onScroll);
                    }

                    /**
                     * onScroll event unregisterer
                     */
                    function unregisterOnScroll()
                    {
                        scrollEl.off('scroll', onScroll);
                    }

                    // Cleanup
                    scope.$on('$destroy', function ()
                    {
                        unregisterOnScroll();
                    });
                };
            }
        };
    }

    /** @ngInject */
    function msTimelineItemDirective($timeout, $q)
    {
        return {
            scope  : true,
            require: '^msTimeline',
            compile: function (tElement)
            {
                tElement.addClass('ms-timeline-item').addClass('hidden');

                return function postLink(scope, iElement, iAttrs, MsTimelineCtrl)
                {
                    var threshold = 72,
                        itemLoaded = false,
                        itemInViewport = false,
                        scrollEl = MsTimelineCtrl.getScrollEl();

                    //////////

                    init();

                    /**
                     * Initialize
                     */
                    function init()
                    {
                        // Check if the timeline item has ms-card
                        if ( iElement.find('ms-card') )
                        {
                            // If the ms-card template loaded...
                            scope.$on('msCard::cardTemplateLoaded', function (event, args)
                            {
                                var cardEl = angular.element(args[0]);

                                // Test the card to see if there is any image on it
                                testForImage(cardEl).then(function ()
                                {
                                    $timeout(function ()
                                    {
                                        itemLoaded = true;
                                    });
                                });
                            });
                        }
                        else
                        {
                            // Test the element to see if there is any image on it
                            testForImage(iElement).then(function ()
                            {
                                $timeout(function ()
                                {
                                    itemLoaded = true;
                                });
                            });
                        }

                        // Check if the loaded element also in the viewport
                        scrollEl.on('scroll', testForVisibility);

                        // Test for visibility for the first time without waiting for the scroll event
                        testForVisibility();
                    }

                    // Item ready watcher
                    var itemReadyWatcher = scope.$watch(
                        function ()
                        {
                            return itemLoaded && itemInViewport;
                        },
                        function (current, old)
                        {
                            if ( angular.equals(current, old) )
                            {
                                return;
                            }

                            if ( current )
                            {
                                iElement.removeClass('hidden').addClass('animate');

                                // Unbind itemReadyWatcher
                                itemReadyWatcher();
                            }
                        }, true);

                    /**
                     * Test the given element for image
                     *
                     * @param element
                     * @returns promise
                     */
                    function testForImage(element)
                    {
                        var deferred = $q.defer(),
                            imgEl = element.find('img');

                        if ( imgEl.length > 0 )
                        {
                            imgEl.on('load', function ()
                            {
                                deferred.resolve('Image is loaded');
                            });
                        }
                        else
                        {
                            deferred.resolve('No images');
                        }

                        return deferred.promise;
                    }

                    /**
                     * Test the element for visibility
                     */
                    function testForVisibility()
                    {
                        if ( scrollEl.scrollTop() + scrollEl.height() > iElement.position().top + threshold )
                        {
                            $timeout(function ()
                            {
                                itemInViewport = true;
                            });

                            // Unbind the scroll event
                            scrollEl.off('scroll', testForVisibility);
                        }
                    }
                };
            }
        };
    }
})();
(function ()
{
    'use strict';

    MsStepperController.$inject = ["$timeout"];
    msVerticalStepperDirective.$inject = ["$timeout"];
    angular
        .module('app.core')
        .controller('MsStepperController', MsStepperController)
        .directive('msHorizontalStepper', msHorizontalStepperDirective)
        .directive('msHorizontalStepperStep', msHorizontalStepperStepDirective)
        .directive('msVerticalStepper', msVerticalStepperDirective)
        .directive('msVerticalStepperStep', msVerticalStepperStepDirective);

    /** @ngInject */
    function MsStepperController($timeout)
    {
        var vm = this;

        // Data
        vm.mainForm = undefined;

        vm.orientation = 'horizontal';
        vm.steps = [];
        vm.currentStep = undefined;
        vm.currentStepNumber = 1;

        // Methods
        vm.setOrientation = setOrientation;
        vm.registerMainForm = registerMainForm;
        vm.registerStep = registerStep;
        vm.setupSteps = setupSteps;
        vm.resetForm = resetForm;

        vm.setCurrentStep = setCurrentStep;

        vm.gotoStep = gotoStep;
        vm.gotoPreviousStep = gotoPreviousStep;
        vm.gotoNextStep = gotoNextStep;
        vm.gotoFirstStep = gotoFirstStep;
        vm.gotoLastStep = gotoLastStep;

        vm.isFirstStep = isFirstStep;
        vm.isLastStep = isLastStep;

        vm.isStepCurrent = isStepCurrent;
        vm.isStepDisabled = isStepDisabled;
        vm.isStepOptional = isStepOptional;
        vm.isStepHidden = isStepHidden;
        vm.filterHiddenStep = filterHiddenStep;
        vm.isStepValid = isStepValid;
        vm.isStepNumberValid = isStepNumberValid;

        vm.isFormValid = isFormValid;

        //////////

        /**
         * Set the orientation of the stepper
         *
         * @param orientation
         */
        function setOrientation(orientation)
        {
            vm.orientation = orientation || 'horizontal';
        }

        /**
         * Register the main form
         *
         * @param form
         */
        function registerMainForm(form)
        {
            vm.mainForm = form;
        }

        /**
         * Register a step
         *
         * @param element
         * @param scope
         * @param form
         */
        function registerStep(element, scope, form)
        {
            var step = {
                element           : element,
                scope             : scope,
                form              : form,
                stepNumber        : scope.step || (vm.steps.length + 1),
                stepTitle         : scope.stepTitle,
                stepTitleTranslate: scope.stepTitleTranslate
            };

            // Push the step into steps array
            vm.steps.push(step);

            // Sort steps by stepNumber
            vm.steps.sort(function (a, b)
            {
                return a.stepNumber - b.stepNumber;
            });

            return step;
        }

        /**
         * Setup steps for the first time
         */
        function setupSteps()
        {
            vm.setCurrentStep(vm.currentStepNumber);
        }

        /**
         * Reset steps and the main form
         */
        function resetForm()
        {
            // Timeout is required here because we need to
            // let form model to reset before setting the
            // statuses
            $timeout(function ()
            {
                // Reset all the steps
                for ( var x = 0; x < vm.steps.length; x++ )
                {
                    vm.steps[x].form.$setPristine();
                    vm.steps[x].form.$setUntouched();
                }

                // Reset the main form
                vm.mainForm.$setPristine();
                vm.mainForm.$setUntouched();

                // Go to first step
                gotoFirstStep();
            });
        }

        /**
         * Set current step
         *
         * @param stepNumber
         */
        function setCurrentStep(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( !isStepNumberValid(stepNumber) )
            {
                return;
            }

            // Update the current step number
            vm.currentStepNumber = stepNumber;

            if ( vm.orientation === 'horizontal' )
            {
                // Hide all steps
                for ( var i = 0; i < vm.steps.length; i++ )
                {
                    vm.steps[i].element.hide();
                }

                // Show the current step
                vm.steps[vm.currentStepNumber - 1].element.show();
            }
            else if ( vm.orientation === 'vertical' )
            {
                // Hide all step content
                for ( var j = 0; j < vm.steps.length; j++ )
                {
                    vm.steps[j].element.find('.ms-stepper-step-content').hide();
                }

                // Show the current step content
                vm.steps[vm.currentStepNumber - 1].element.find('.ms-stepper-step-content').show();
            }
        }

        /**
         * Go to a step
         *
         * @param stepNumber
         */
        function gotoStep(stepNumber)
        {
            // If the step we are about to go
            // is hidden, bail...
            if ( isStepHidden(stepNumber) )
            {
                return;
            }

            vm.setCurrentStep(stepNumber);
        }

        /**
         * Go to the previous step
         */
        function gotoPreviousStep()
        {
            var stepNumber = vm.currentStepNumber - 1;

            // Test the previous steps and make sure we
            // will land to the one that is not hidden
            for ( var s = stepNumber; s >= 1; s-- )
            {
                if ( !isStepHidden(s) )
                {
                    stepNumber = s;
                    break;
                }
            }

            vm.setCurrentStep(stepNumber);
        }

        /**
         * Go to the next step
         */
        function gotoNextStep()
        {
            var stepNumber = vm.currentStepNumber + 1;

            // Test the following steps and make sure we
            // will land to the one that is not hidden
            for ( var s = stepNumber; s <= vm.steps.length; s++ )
            {
                if ( !isStepHidden(s) )
                {
                    stepNumber = s;
                    break;
                }
            }

            vm.setCurrentStep(stepNumber);
        }

        /**
         * Go to the first step
         */
        function gotoFirstStep()
        {
            vm.setCurrentStep(1);
        }

        /**
         * Go to the last step
         */
        function gotoLastStep()
        {
            vm.setCurrentStep(vm.steps.length);
        }

        /**
         * Check if the current step is the first step
         *
         * @returns {boolean}
         */
        function isFirstStep()
        {
            return vm.currentStepNumber === 1;
        }

        /**
         * Check if the current step is the last step
         *
         * @returns {boolean}
         */
        function isLastStep()
        {
            return vm.currentStepNumber === vm.steps.length;
        }

        /**
         * Check if the given step is the current one
         *
         * @param stepNumber
         * @returns {null|boolean}
         */
        function isStepCurrent(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( !isStepNumberValid(stepNumber) )
            {
                return null;
            }

            return vm.currentStepNumber === stepNumber;
        }

        /**
         * Check if the given step should be disabled
         *
         * @param stepNumber
         * @returns {null|boolean}
         */
        function isStepDisabled(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( !isStepNumberValid(stepNumber) )
            {
                return null;
            }

            var disabled = false;

            for ( var i = 1; i < stepNumber; i++ )
            {
                if ( !isStepValid(i) )
                {
                    disabled = true;
                    break;
                }
            }

            return disabled;
        }

        /**
         * Check if the given step is optional
         *
         * @param stepNumber
         * @returns {null|boolean}
         */
        function isStepOptional(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( !isStepNumberValid(stepNumber) )
            {
                return null;
            }

            return vm.steps[stepNumber - 1].scope.optionalStep;
        }

        /**
         * Check if the given step is hidden
         *
         * @param stepNumber
         * @returns {null|boolean}
         */
        function isStepHidden(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( !isStepNumberValid(stepNumber) )
            {
                return null;
            }

            return !!vm.steps[stepNumber - 1].scope.hideStep;
        }

        /**
         * Check if the given step is hidden as a filter
         *
         * @param step
         * @returns {boolean}
         */
        function filterHiddenStep(step)
        {
            return !isStepHidden(step.stepNumber);
        }

        /**
         * Check if the given step is valid
         *
         * @param stepNumber
         * @returns {null|boolean}
         */
        function isStepValid(stepNumber)
        {
            // If the stepNumber is not a valid step number, bail...
            if ( !isStepNumberValid(stepNumber) )
            {
                return null;
            }

            // If the step is optional, always return true
            if ( isStepOptional(stepNumber) )
            {
                return true;
            }

            return vm.steps[stepNumber - 1].form.$valid;
        }

        /**
         * Check if the given step number is a valid step number
         *
         * @param stepNumber
         * @returns {boolean}
         */
        function isStepNumberValid(stepNumber)
        {
            return !(angular.isUndefined(stepNumber) || stepNumber < 1 || stepNumber > vm.steps.length);
        }

        /**
         * Check if the entire form is valid
         *
         * @returns {boolean}
         */
        function isFormValid()
        {
            return vm.mainForm.$valid;
        }
    }

    /** @ngInject */
    function msHorizontalStepperDirective()
    {
        return {
            restrict        : 'A',
            scope           : {},
            require         : ['form', 'msHorizontalStepper'],
            priority        : 1001,
            controller      : 'MsStepperController as MsStepper',
            bindToController: {
                model: '=ngModel'
            },
            transclude      : true,
            templateUrl     : 'app/core/directives/ms-stepper/templates/horizontal/horizontal.html',
            compile         : function (tElement)
            {
                tElement.addClass('ms-stepper');

                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];

                    // Register the main form and setup
                    // the steps for the first time
                    MsStepperCtrl.setOrientation('horizontal');
                    MsStepperCtrl.registerMainForm(FormCtrl);
                    MsStepperCtrl.setupSteps();
                };
            }
        };
    }

    /** @ngInject */
    function msHorizontalStepperStepDirective()
    {
        return {
            restrict: 'E',
            require : ['form', '^msHorizontalStepper'],
            priority: 1000,
            scope   : {
                step              : '=?',
                stepTitle         : '=?',
                stepTitleTranslate: '=?',
                optionalStep      : '=?',
                hideStep          : '=?'
            },
            compile : function (tElement)
            {
                tElement.addClass('ms-stepper-step');

                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];

                    // Is it an optional step?
                    scope.optionalStep = angular.isDefined(iAttrs.optionalStep);

                    // Register the step
                    MsStepperCtrl.registerStep(iElement, scope, FormCtrl);

                    // Hide the step by default
                    iElement.hide();
                };
            }
        };
    }

    /** @ngInject */
    function msVerticalStepperDirective($timeout)
    {
        return {
            restrict        : 'A',
            scope           : {},
            require         : ['form', 'msVerticalStepper'],
            priority        : 1001,
            controller      : 'MsStepperController as MsStepper',
            bindToController: {
                model: '=ngModel'
            },
            transclude      : true,
            templateUrl     : 'app/core/directives/ms-stepper/templates/vertical/vertical.html',
            compile         : function (tElement)
            {
                tElement.addClass('ms-stepper');

                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];

                    // Register the main form and setup
                    // the steps for the first time

                    // Timeout is required in vertical stepper
                    // as we are using transclusion in steps.
                    // We have to wait for them to be transcluded
                    // and registered to the controller
                    $timeout(function ()
                    {
                        MsStepperCtrl.setOrientation('vertical');
                        MsStepperCtrl.registerMainForm(FormCtrl);
                        MsStepperCtrl.setupSteps();
                    });
                };
            }
        };
    }

    /** @ngInject */
    function msVerticalStepperStepDirective()
    {
        return {
            restrict   : 'E',
            require    : ['form', '^msVerticalStepper'],
            priority   : 1000,
            scope      : {
                step              : '=?',
                stepTitle         : '=?',
                stepTitleTranslate: '=?',
                optionalStep      : '=?',
                hideStep          : '=?'
            },
            transclude : true,
            templateUrl: 'app/core/directives/ms-stepper/templates/vertical/step/vertical-step.html',
            compile    : function (tElement)
            {
                tElement.addClass('ms-stepper-step');

                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var FormCtrl = ctrls[0],
                        MsStepperCtrl = ctrls[1];

                    // Is it an optional step?
                    scope.optionalStep = angular.isDefined(iAttrs.optionalStep);

                    // Register the step
                    scope.stepInfo = MsStepperCtrl.registerStep(iElement, scope, FormCtrl);

                    // Expose the controller to the scope
                    scope.MsStepper = MsStepperCtrl;

                    // Hide the step content by default
                    iElement.find('.ms-stepper-step-content').hide();
                };
            }
        };
    }
})();
(function ()
{
    'use strict';

    msSplashScreenDirective.$inject = ["$animate"];
    angular
        .module('app.core')
        .directive('msSplashScreen', msSplashScreenDirective);

    /** @ngInject */
    function msSplashScreenDirective($animate)
    {
        return {
            restrict: 'E',
            link    : function (scope, iElement)
            {
                var splashScreenRemoveEvent = scope.$on('msSplashScreen::remove', function ()
                {
                    $animate.leave(iElement).then(function ()
                    {
                        // De-register scope event
                        splashScreenRemoveEvent();

                        // Null-ify everything else
                        scope = iElement = null;
                    });
                });
            }
        };
    }
})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .directive('msSidenavHelper', msSidenavHelperDirective);

    /** @ngInject */
    function msSidenavHelperDirective()
    {
        return {
            restrict: 'A',
            require : '^mdSidenav',
            link    : function (scope, iElement, iAttrs, MdSidenavCtrl)
            {
                // Watch md-sidenav open & locked open statuses
                // and add class to the ".page-layout" if only
                // the sidenav open and NOT locked open
                scope.$watch(function ()
                {
                    return MdSidenavCtrl.isOpen() && !MdSidenavCtrl.isLockedOpen();
                }, function (current)
                {
                    if ( angular.isUndefined(current) )
                    {
                        return;
                    }

                    iElement.parent().toggleClass('full-height', current);
                    angular.element('html').toggleClass('sidenav-open', current);
                });
            }
        };
    }
})();
(function ()
{
    'use strict';

    MsShortcutsController.$inject = ["$scope", "$cookies", "$document", "$timeout", "$q", "msNavigationService"];
    angular
        .module('app.core')
        .controller('MsShortcutsController', MsShortcutsController)
        .directive('msShortcuts', msShortcutsDirective);

    /** @ngInject */
    function MsShortcutsController($scope, $cookies, $document, $timeout, $q, msNavigationService)
    {
        var vm = this;

        // Data
        vm.query = '';
        vm.queryOptions = {
            debounce: 300
        };
        vm.resultsLoading = false;
        vm.selectedResultIndex = 0;
        vm.ignoreMouseEvents = false;
        vm.mobileBarActive = false;

        vm.results = null;
        vm.shortcuts = [];

        vm.sortableOptions = {
            ghostClass   : 'ghost',
            forceFallback: true,
            fallbackClass: 'dragging',
            onSort       : function ()
            {
                vm.saveShortcuts();
            }
        };

        // Methods
        vm.populateResults = populateResults;
        vm.loadShortcuts = loadShortcuts;
        vm.saveShortcuts = saveShortcuts;
        vm.addShortcut = addShortcut;
        vm.removeShortcut = removeShortcut;
        vm.handleResultClick = handleResultClick;

        vm.absorbEvent = absorbEvent;
        vm.handleKeydown = handleKeydown;
        vm.handleMouseenter = handleMouseenter;
        vm.temporarilyIgnoreMouseEvents = temporarilyIgnoreMouseEvents;
        vm.ensureSelectedResultIsVisible = ensureSelectedResultIsVisible;
        vm.toggleMobileBar = toggleMobileBar;

        //////////

        init();

        function init()
        {
            // Load the shortcuts
            vm.loadShortcuts().then(
                // Success
                function (response)
                {
                    vm.shortcuts = response;

                    // Add shortcuts as results by default
                    if ( vm.shortcuts.length > 0 )
                    {
                        vm.results = response;
                    }
                }
            );

            // Watch the model changes to trigger the search
            $scope.$watch('MsShortcuts.query', function (current, old)
            {
                if ( angular.isUndefined(current) )
                {
                    return;
                }

                if ( angular.equals(current, old) )
                {
                    return;
                }

                // Show the loader
                vm.resultsLoading = true;

                // Populate the results
                vm.populateResults().then(
                    // Success
                    function (response)
                    {
                        vm.results = response;
                    },
                    // Error
                    function ()
                    {
                        vm.results = [];
                    }
                ).finally(
                    function ()
                    {
                        // Hide the loader
                        vm.resultsLoading = false;
                    }
                );
            });
        }

        /**
         * Populate the results
         */
        function populateResults()
        {
            var results = [],
                flatNavigation = msNavigationService.getFlatNavigation(),
                deferred = $q.defer();

            // Iterate through the navigation array and
            // make sure it doesn't have any groups or
            // none ui-sref items
            for ( var x = 0; x < flatNavigation.length; x++ )
            {
                if ( flatNavigation[x].uisref )
                {
                    results.push(flatNavigation[x]);
                }
            }

            // If there is a query, filter the results
            if ( vm.query )
            {
                results = results.filter(function (item)
                {
                    if ( angular.lowercase(item.title).search(angular.lowercase(vm.query)) > -1 )
                    {
                        return true;
                    }
                });

                // Iterate through one last time and
                // add required properties to items
                for ( var i = 0; i < results.length; i++ )
                {
                    // Add false to hasShortcut by default
                    results[i].hasShortcut = false;

                    // Test if the item is in the shortcuts list
                    for ( var y = 0; y < vm.shortcuts.length; y++ )
                    {
                        if ( vm.shortcuts[y]._id === results[i]._id )
                        {
                            results[i].hasShortcut = true;
                            break;
                        }
                    }
                }
            }
            else
            {
                // If the query is empty, that means
                // there is nothing to search for so
                // we will populate the results with
                // current shortcuts if there is any
                if ( vm.shortcuts.length > 0 )
                {
                    results = vm.shortcuts;
                }
            }

            // Reset the selected result
            vm.selectedResultIndex = 0;

            // Fake the service delay
            $timeout(function ()
            {
                // Resolve the promise
                deferred.resolve(results);
            }, 250);

            // Return a promise
            return deferred.promise;
        }

        /**
         * Load shortcuts
         */
        function loadShortcuts()
        {
            var deferred = $q.defer();

            // For the demo purposes, we will
            // load the shortcuts from the cookies.
            // But here you can make an API call
            // to load them from the DB.
            var shortcuts = angular.fromJson($cookies.get('FUSE.shortcuts'));

            // No cookie available. Generate one
            // for the demo purposes...
            if ( angular.isUndefined(shortcuts) )
            {
                shortcuts = [];

                $cookies.put('FUSE.shortcuts', angular.toJson(shortcuts));
            }

            // Resolve the promise
            deferred.resolve(shortcuts);

            return deferred.promise;
        }

        /**
         * Save the shortcuts
         */
        function saveShortcuts()
        {
            var deferred = $q.defer();

            // For the demo purposes, we will
            // keep the shortcuts in the cookies.
            // But here you can make an API call
            // to save them to the DB.
            $cookies.put('FUSE.shortcuts', angular.toJson(vm.shortcuts));

            // Fake the service delay
            $timeout(function ()
            {
                deferred.resolve({'success': true});
            }, 250);

            return deferred.promise;
        }

        /**
         * Add item as shortcut
         *
         * @param item
         */
        function addShortcut(item)
        {
            // Update the hasShortcut status
            item.hasShortcut = true;

            // Add as a shortcut
            vm.shortcuts.push(item);

            // Save the shortcuts
            vm.saveShortcuts();
        }

        /**
         * Remove item from shortcuts
         *
         * @param item
         */
        function removeShortcut(item)
        {
            // Update the hasShortcut status
            item.hasShortcut = false;

            // Remove the shortcut
            for ( var x = 0; x < vm.shortcuts.length; x++ )
            {
                if ( vm.shortcuts[x]._id === item._id )
                {
                    // Remove the x-th item from the array
                    vm.shortcuts.splice(x, 1);

                    // If we aren't searching for anything...
                    if ( !vm.query )
                    {
                        // If all the shortcuts have been removed,
                        // null-ify the results
                        if ( vm.shortcuts.length === 0 )
                        {
                            vm.results = null;
                        }
                        // Otherwise update the selected index
                        else
                        {
                            if ( x >= vm.shortcuts.length )
                            {
                                vm.selectedResultIndex = vm.shortcuts.length - 1;
                            }
                        }
                    }
                }
            }

            // Save the shortcuts
            vm.saveShortcuts();
        }

        /**
         * Handle the result click
         *
         * @param item
         */
        function handleResultClick(item)
        {
            // Add or remove the shortcut
            if ( item.hasShortcut )
            {
                vm.removeShortcut(item);
            }
            else
            {
                vm.addShortcut(item);
            }
        }

        /**
         * Absorb the given event
         *
         * @param event
         */
        function absorbEvent(event)
        {
            event.preventDefault();
        }

        /**
         * Handle keydown
         *
         * @param event
         */
        function handleKeydown(event)
        {
            var keyCode = event.keyCode,
                keys = [38, 40];

            // Prevent the default action if
            // one of the keys are pressed that
            // we are listening
            if ( keys.indexOf(keyCode) > -1 )
            {
                event.preventDefault();
            }

            switch ( keyCode )
            {
                // Enter
                case 13:

                    // Trigger result click
                    vm.handleResultClick(vm.results[vm.selectedResultIndex]);

                    break;

                // Up Arrow
                case 38:

                    // Decrease the selected result index
                    if ( vm.selectedResultIndex - 1 >= 0 )
                    {
                        // Decrease the selected index
                        vm.selectedResultIndex--;

                        // Make sure the selected result is in the view
                        vm.ensureSelectedResultIsVisible();
                    }

                    break;

                // Down Arrow
                case 40:

                    // Increase the selected result index
                    if ( vm.selectedResultIndex + 1 < vm.results.length )
                    {
                        // Increase the selected index
                        vm.selectedResultIndex++;

                        // Make sure the selected result is in the view
                        vm.ensureSelectedResultIsVisible();
                    }

                    break;

                default:
                    break;
            }
        }

        /**
         * Handle mouseenter
         *
         * @param index
         */
        function handleMouseenter(index)
        {
            if ( vm.ignoreMouseEvents )
            {
                return;
            }

            // Update the selected result index
            // with the given index
            vm.selectedResultIndex = index;
        }

        /**
         * Set a variable for a limited time
         * to make other functions to ignore
         * the mouse events
         */
        function temporarilyIgnoreMouseEvents()
        {
            // Set the variable
            vm.ignoreMouseEvents = true;

            // Cancel the previous timeout
            $timeout.cancel(vm.mouseEventIgnoreTimeout);

            // Set the timeout
            vm.mouseEventIgnoreTimeout = $timeout(function ()
            {
                vm.ignoreMouseEvents = false;
            }, 250);
        }

        /**
         * Ensure the selected result will
         * always be visible on the results
         * area
         */
        function ensureSelectedResultIsVisible()
        {
            var resultsEl = $document.find('#ms-shortcut-add-menu').find('.results'),
                selectedItemEl = angular.element(resultsEl.find('.result')[vm.selectedResultIndex]);

            if ( resultsEl && selectedItemEl )
            {
                var top = selectedItemEl.position().top - 8,
                    bottom = selectedItemEl.position().top + selectedItemEl.outerHeight() + 8;

                // Start ignoring mouse events
                vm.temporarilyIgnoreMouseEvents();

                if ( resultsEl.scrollTop() > top )
                {
                    resultsEl.scrollTop(top);
                }

                if ( bottom > (resultsEl.height() + resultsEl.scrollTop()) )
                {
                    resultsEl.scrollTop(bottom - resultsEl.height());
                }
            }
        }

        /**
         * Toggle mobile bar
         */
        function toggleMobileBar()
        {
            vm.mobileBarActive = !vm.mobileBarActive;
        }
    }

    /** @ngInject */
    function msShortcutsDirective()
    {
        return {
            restrict        : 'E',
            scope           : {},
            require         : 'msShortcuts',
            controller      : 'MsShortcutsController as MsShortcuts',
            bindToController: {},
            templateUrl     : 'app/core/directives/ms-shortcuts/ms-shortcuts.html',
            compile         : function (tElement)
            {
                // Add class
                tElement.addClass('ms-shortcuts');

                return function postLink(scope, iElement)
                {
                    // Data

                };
            }
        };
    }
})();
(function ()
{
    'use strict';

    MsSearchBarController.$inject = ["$scope", "$element", "$timeout"];
    msSearchBarDirective.$inject = ["$document"];
    angular
        .module('app.core')
        .controller('MsSearchBarController', MsSearchBarController)
        .directive('msSearchBar', msSearchBarDirective);

    /** @ngInject */
    function MsSearchBarController($scope, $element, $timeout)
    {
        var vm = this;

        // Data
        vm.collapsed = true;
        vm.query = '';
        vm.queryOptions = {
            debounce: vm.debounce || 0
        };
        vm.resultsLoading = false;
        vm.results = null;
        vm.selectedResultIndex = 0;
        vm.ignoreMouseEvents = false;

        // Methods
        vm.populateResults = populateResults;

        vm.expand = expand;
        vm.collapse = collapse;

        vm.absorbEvent = absorbEvent;
        vm.handleKeydown = handleKeydown;
        vm.handleMouseenter = handleMouseenter;
        vm.temporarilyIgnoreMouseEvents = temporarilyIgnoreMouseEvents;
        vm.handleResultClick = handleResultClick;
        vm.ensureSelectedResultIsVisible = ensureSelectedResultIsVisible;

        //////////

        init();

        function init()
        {
            // Watch the model changes to trigger the search
            $scope.$watch('MsSearchBar.query', function (current, old)
            {
                if ( angular.isUndefined(current) )
                {
                    return;
                }

                if ( angular.equals(current, old) )
                {
                    return;
                }

                if ( vm.collapsed )
                {
                    return;
                }

                // Evaluate the onSearch function to access the
                // function itself
                var onSearchEvaluated = $scope.$parent.$eval(vm.onSearch, {query: current}),
                    isArray = angular.isArray(onSearchEvaluated),
                    isPromise = (onSearchEvaluated && !!onSearchEvaluated.then);

                if ( isArray )
                {
                    // Populate the results
                    vm.populateResults(onSearchEvaluated);
                }

                if ( isPromise )
                {
                    // Show the loader
                    vm.resultsLoading = true;

                    onSearchEvaluated.then(
                        // Success
                        function (response)
                        {
                            // Populate the results
                            vm.populateResults(response);
                        },
                        // Error
                        function ()
                        {
                            // Assign an empty array to show
                            // the no-results screen
                            vm.populateResults([]);
                        }
                    ).finally(function ()
                        {
                            // Hide the loader
                            vm.resultsLoading = false;
                        }
                    );
                }
            });
        }

        /**
         * Populate the results
         *
         * @param results
         */
        function populateResults(results)
        {
            // Before doing anything,
            // make sure the search bar is expanded
            if ( vm.collapsed )
            {
                return;
            }

            var isArray = angular.isArray(results),
                isNull = results === null;

            // Only accept arrays and null values
            if ( !isArray && !isNull )
            {
                return;
            }

            // Reset the selected result
            vm.selectedResultIndex = 0;

            // Populate the results
            vm.results = results;
        }

        /**
         * Expand
         */
        function expand()
        {
            // Set collapsed status
            vm.collapsed = false;

            // Call expand on scope
            $scope.expand();

            // Callback
            if ( vm.onExpand && angular.isFunction(vm.onExpand) )
            {
                vm.onExpand();
            }
        }

        /**
         * Collapse
         */
        function collapse()
        {
            // Empty the query
            vm.query = '';

            // Empty results to hide the results view
            vm.populateResults(null);

            // Set collapsed status
            vm.collapsed = true;

            // Call collapse on scope
            $scope.collapse();

            // Callback
            if ( vm.onCollapse && angular.isFunction(vm.onCollapse) )
            {
                vm.onCollapse();
            }
        }

        /**
         * Absorb the given event
         *
         * @param event
         */
        function absorbEvent(event)
        {
            event.preventDefault();
        }

        /**
         * Handle keydown
         *
         * @param event
         */
        function handleKeydown(event)
        {
            var keyCode = event.keyCode,
                keys = [27, 38, 40];

            // Prevent the default action if
            // one of the keys are pressed that
            // we are listening
            if ( keys.indexOf(keyCode) > -1 )
            {
                event.preventDefault();
            }

            switch ( keyCode )
            {
                // Enter
                case 13:

                    // Trigger result click
                    vm.handleResultClick(vm.results[vm.selectedResultIndex]);

                    break;

                // Escape
                case 27:

                    // Collapse the search bar
                    vm.collapse();

                    break;

                // Up Arrow
                case 38:

                    // Decrease the selected result index
                    if ( vm.selectedResultIndex - 1 >= 0 )
                    {
                        // Decrease the selected index
                        vm.selectedResultIndex--;

                        // Make sure the selected result is in the view
                        vm.ensureSelectedResultIsVisible();
                    }

                    break;

                // Down Arrow
                case 40:

                    if ( !vm.results )
                    {
                        return;
                    }

                    // Increase the selected result index
                    if ( vm.selectedResultIndex + 1 < vm.results.length )
                    {
                        // Increase the selected index
                        vm.selectedResultIndex++;

                        // Make sure the selected result is in the view
                        vm.ensureSelectedResultIsVisible();
                    }

                    break;

                default:
                    break;
            }
        }

        /**
         * Handle mouseenter
         *
         * @param index
         */
        function handleMouseenter(index)
        {
            if ( vm.ignoreMouseEvents )
            {
                return;
            }

            // Update the selected result index
            // with the given index
            vm.selectedResultIndex = index;
        }

        /**
         * Set a variable for a limited time
         * to make other functions to ignore
         * the mouse events
         */
        function temporarilyIgnoreMouseEvents()
        {
            // Set the variable
            vm.ignoreMouseEvents = true;

            // Cancel the previous timeout
            $timeout.cancel(vm.mouseEventIgnoreTimeout);

            // Set the timeout
            vm.mouseEventIgnoreTimeout = $timeout(function ()
            {
                vm.ignoreMouseEvents = false;
            }, 250);
        }

        /**
         * Handle the result click
         *
         * @param item
         */
        function handleResultClick(item)
        {
            if ( vm.onResultClick )
            {
                vm.onResultClick({item: item});
            }

            // Collapse the search bar
            vm.collapse();
        }

        /**
         * Ensure the selected result will
         * always be visible on the results
         * area
         */
        function ensureSelectedResultIsVisible()
        {
            var resultsEl = $element.find('.ms-search-bar-results'),
                selectedItemEl = angular.element(resultsEl.find('.result')[vm.selectedResultIndex]);

            if ( resultsEl && selectedItemEl )
            {
                var top = selectedItemEl.position().top - 8,
                    bottom = selectedItemEl.position().top + selectedItemEl.outerHeight() + 8;

                // Start ignoring mouse events
                vm.temporarilyIgnoreMouseEvents();

                if ( resultsEl.scrollTop() > top )
                {
                    resultsEl.scrollTop(top);
                }

                if ( bottom > (resultsEl.height() + resultsEl.scrollTop()) )
                {
                    resultsEl.scrollTop(bottom - resultsEl.height());
                }
            }
        }
    }

    /** @ngInject */
    function msSearchBarDirective($document)
    {
        return {
            restrict        : 'E',
            scope           : {},
            require         : 'msSearchBar',
            controller      : 'MsSearchBarController as MsSearchBar',
            bindToController: {
                debounce     : '=?',
                onSearch     : '@',
                onResultClick: '&?',
                onExpand     : '&?',
                onCollapse   : '&?'
            },
            templateUrl     : 'app/core/directives/ms-search-bar/ms-search-bar.html',
            compile         : function (tElement)
            {
                // Add class
                tElement.addClass('ms-search-bar');

                return function postLink(scope, iElement)
                {
                    // Data
                    var inputEl,
                        bodyEl = $document.find('body');

                    // Methods
                    scope.collapse = collapse;
                    scope.expand = expand;

                    //////////

                    // Initialize
                    init();

                    /**
                     * Initialize
                     */
                    function init()
                    {
                        // Grab the input element
                        inputEl = iElement.find('#ms-search-bar-input');
                    }

                    /**
                     * Expand action
                     */
                    function expand()
                    {
                        // Add expanded class
                        iElement.addClass('expanded');

                        // Add helper class to the body
                        bodyEl.addClass('ms-search-bar-expanded');

                        // Focus on the input
                        inputEl.focus();
                    }

                    /**
                     * Collapse action
                     */
                    function collapse()
                    {
                        // Remove expanded class
                        iElement.removeClass('expanded');

                        // Remove helper class from the body
                        bodyEl.removeClass('ms-search-bar-expanded');
                    }
                };
            }
        };
    }
})();
(function ()
{
    'use strict';

    msScrollDirective.$inject = ["$timeout", "msScrollConfig", "msUtils", "fuseConfig"];
    angular
        .module('app.core')
        .provider('msScrollConfig', msScrollConfigProvider)
        .directive('msScroll', msScrollDirective);

    /** @ngInject */
    function msScrollConfigProvider()
    {
        // Default configuration
        var defaultConfiguration = {
            wheelSpeed            : 1,
            wheelPropagation      : false,
            swipePropagation      : true,
            minScrollbarLength    : null,
            maxScrollbarLength    : null,
            useBothWheelAxes      : false,
            useKeyboard           : true,
            suppressScrollX       : false,
            suppressScrollY       : false,
            scrollXMarginOffset   : 0,
            scrollYMarginOffset   : 0,
            stopPropagationOnClick: true
        };

        // Methods
        this.config = config;

        //////////

        /**
         * Extend default configuration with the given one
         *
         * @param configuration
         */
        function config(configuration)
        {
            defaultConfiguration = angular.extend({}, defaultConfiguration, configuration);
        }

        /**
         * Service
         */
        this.$get = function ()
        {
            var service = {
                getConfig: getConfig
            };

            return service;

            //////////

            /**
             * Return the config
             */
            function getConfig()
            {
                return defaultConfiguration;
            }
        };
    }

    /** @ngInject */
    function msScrollDirective($timeout, msScrollConfig, msUtils, fuseConfig)
    {
        return {
            restrict: 'AE',
            compile : function (tElement)
            {
                // Do not replace scrollbars if
                // 'disableCustomScrollbars' config enabled
                if ( fuseConfig.getConfig('disableCustomScrollbars') )
                {
                    return;
                }

                // Do not replace scrollbars on mobile devices
                // if 'disableCustomScrollbarsOnMobile' config enabled
                if ( fuseConfig.getConfig('disableCustomScrollbarsOnMobile') && msUtils.isMobile() )
                {
                    return;
                }

                // Add class
                tElement.addClass('ms-scroll');

                return function postLink(scope, iElement, iAttrs)
                {
                    var options = {};

                    // If options supplied, evaluate the given
                    // value. This is because we don't want to
                    // have an isolated scope but still be able
                    // to use scope variables.
                    // We don't want an isolated scope because
                    // we should be able to use this everywhere
                    // especially with other directives
                    if ( iAttrs.msScroll )
                    {
                        options = scope.$eval(iAttrs.msScroll);
                    }

                    // Extend the given config with the ones from provider
                    options = angular.extend({}, msScrollConfig.getConfig(), options);

                    // Initialize the scrollbar
                    $timeout(function ()
                    {
                        PerfectScrollbar.initialize(iElement[0], options);
                    }, 0);

                    // Update the scrollbar on element mouseenter
                    iElement.on('mouseenter', updateScrollbar);

                    // Watch scrollHeight and update
                    // the scrollbar if it changes
                    scope.$watch(function ()
                    {
                        return iElement.prop('scrollHeight');
                    }, function (current, old)
                    {
                        if ( angular.isUndefined(current) || angular.equals(current, old) )
                        {
                            return;
                        }

                        updateScrollbar();
                    });

                    // Watch scrollWidth and update
                    // the scrollbar if it changes
                    scope.$watch(function ()
                    {
                        return iElement.prop('scrollWidth');
                    }, function (current, old)
                    {
                        if ( angular.isUndefined(current) || angular.equals(current, old) )
                        {
                            return;
                        }

                        updateScrollbar();
                    });

                    /**
                     * Update the scrollbar
                     */
                    function updateScrollbar()
                    {
                        PerfectScrollbar.update(iElement[0]);
                    }

                    // Cleanup on destroy
                    scope.$on('$destroy', function ()
                    {
                        iElement.off('mouseenter');
                        PerfectScrollbar.destroy(iElement[0]);
                    });
                };
            }
        };
    }
})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .directive('msResponsiveTable', msResponsiveTableDirective);

    /** @ngInject */
    function msResponsiveTableDirective()
    {
        return {
            restrict: 'A',
            link    : function (scope, iElement)
            {
                // Wrap the table
                var wrapper = angular.element('<div class="ms-responsive-table-wrapper"></div>');
                iElement.after(wrapper);
                wrapper.append(iElement);

                //////////
            }
        };
    }
})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .directive('msRandomClass', msRandomClassDirective);

    /** @ngInject */
    function msRandomClassDirective()
    {
        return {
            restrict: 'A',
            scope   : {
                msRandomClass: '='
            },
            link    : function (scope, iElement)
            {
                var randomClass = scope.msRandomClass[Math.floor(Math.random() * (scope.msRandomClass.length))];
                iElement.addClass(randomClass);
            }
        };
    }
})();
(function ()
{
    'use strict';

    MsNavigationController.$inject = ["$scope", "msNavigationService"];
    msNavigationDirective.$inject = ["$rootScope", "$timeout", "$mdSidenav", "msNavigationService"];
    MsNavigationNodeController.$inject = ["$scope", "$element", "$rootScope", "$animate", "$state", "msNavigationService"];
    msNavigationHorizontalDirective.$inject = ["msNavigationService"];
    MsNavigationHorizontalNodeController.$inject = ["$scope", "$element", "$rootScope", "$state", "msNavigationService"];
    msNavigationHorizontalItemDirective.$inject = ["$mdMedia"];
    angular
        .module('app.core')
        .provider('msNavigationService', msNavigationServiceProvider)
        .controller('MsNavigationController', MsNavigationController)
        // Vertical
        .directive('msNavigation', msNavigationDirective)
        .controller('MsNavigationNodeController', MsNavigationNodeController)
        .directive('msNavigationNode', msNavigationNodeDirective)
        .directive('msNavigationItem', msNavigationItemDirective)
        //Horizontal
        .directive('msNavigationHorizontal', msNavigationHorizontalDirective)
        .controller('MsNavigationHorizontalNodeController', MsNavigationHorizontalNodeController)
        .directive('msNavigationHorizontalNode', msNavigationHorizontalNodeDirective)
        .directive('msNavigationHorizontalItem', msNavigationHorizontalItemDirective);

    /** @ngInject */
    function msNavigationServiceProvider()
    {
        // Inject $log service
        var $log = angular.injector(['ng']).get('$log');

        // Navigation array
        var navigation = [];

        var service = this;

        // Methods
        service.saveItem = saveItem;
        service.deleteItem = deleteItem;
        service.sortByWeight = sortByWeight;

        //////////

        /**
         * Create or update the navigation item
         *
         * @param path
         * @param item
         */
        function saveItem(path, item)
        {
            if ( !angular.isString(path) )
            {
                $log.error('path must be a string (eg. `dashboard.project`)');
                return;
            }

            var parts = path.split('.');

            // Generate the object id from the parts
            var id = parts[parts.length - 1];

            // Get the parent item from the parts
            var parent = _findOrCreateParent(parts);

            // Decide if we are going to update or create
            var updateItem = false;

            for ( var i = 0; i < parent.length; i++ )
            {
                if ( parent[i]._id === id )
                {
                    updateItem = parent[i];

                    break;
                }
            }

            // Update
            if ( updateItem )
            {
                angular.extend(updateItem, item);

                // Add proper ui-sref
                updateItem.uisref = _getUiSref(updateItem);
            }
            // Create
            else
            {
                // Create an empty children array in the item
                item.children = [];

                // Add the default weight if not provided or if it's not a number
                if ( angular.isUndefined(item.weight) || !angular.isNumber(item.weight) )
                {
                    item.weight = 1;
                }

                // Add the item id
                item._id = id;

                // Add the item path
                item._path = path;

                // Add proper ui-sref
                item.uisref = _getUiSref(item);

                // Push the item into the array
                parent.push(item);
            }
        }

        /**
         * Delete navigation item
         *
         * @param path
         */
        function deleteItem(path)
        {
            if ( !angular.isString(path) )
            {
                $log.error('path must be a string (eg. `dashboard.project`)');
                return;
            }

            // Locate the item by using given path
            var item = navigation,
                parts = path.split('.');

            for ( var p = 0; p < parts.length; p++ )
            {
                var id = parts[p];

                for ( var i = 0; i < item.length; i++ )
                {
                    if ( item[i]._id === id )
                    {
                        // If we have a matching path,
                        // we have found our object:
                        // remove it.
                        if ( item[i]._path === path )
                        {
                            item.splice(i, 1);
                            return true;
                        }

                        // Otherwise grab the children of
                        // the current item and continue
                        item = item[i].children;
                        break;
                    }
                }
            }

            return false;
        }

        /**
         * Sort the navigation items by their weights
         *
         * @param parent
         */
        function sortByWeight(parent)
        {
            // If parent not provided, sort the root items
            if ( !parent )
            {
                parent = navigation;
                parent.sort(_byWeight);
            }

            // Sort the children
            for ( var i = 0; i < parent.length; i++ )
            {
                var children = parent[i].children;

                if ( children.length > 1 )
                {
                    children.sort(_byWeight);
                }

                if ( children.length > 0 )
                {
                    sortByWeight(children);
                }
            }
        }

        /* ----------------- */
        /* Private Functions */
        /* ----------------- */

        /**
         * Find or create parent
         *
         * @param parts
         * @returns {Array|Boolean}
         * @private
         */
        function _findOrCreateParent(parts)
        {
            // Store the main navigation
            var parent = navigation;

            // If it's going to be a root item
            // return the navigation itself
            if ( parts.length === 1 )
            {
                return parent;
            }

            // Remove the last element from the parts as
            // we don't need that to figure out the parent
            parts.pop();

            // Find and return the parent
            for ( var i = 0; i < parts.length; i++ )
            {
                var _id = parts[i],
                    createParent = true;

                for ( var p = 0; p < parent.length; p++ )
                {
                    if ( parent[p]._id === _id )
                    {
                        parent = parent[p].children;
                        createParent = false;

                        break;
                    }
                }

                // If there is no parent found, create one, push
                // it into the current parent and assign it as a
                // new parent
                if ( createParent )
                {
                    var item = {
                        _id     : _id,
                        _path   : parts.join('.'),
                        title   : _id,
                        weight  : 1,
                        children: []
                    };

                    parent.push(item);
                    parent = item.children;
                }
            }

            return parent;
        }

        /**
         * Sort by weight
         *
         * @param x
         * @param y
         * @returns {number}
         * @private
         */
        function _byWeight(x, y)
        {
            return parseInt(x.weight) - parseInt(y.weight);
        }

        /**
         * Setup the ui-sref using state & state parameters
         *
         * @param item
         * @returns {string}
         * @private
         */
        function _getUiSref(item)
        {
            var uisref = '';

            if ( angular.isDefined(item.state) )
            {
                uisref = item.state;

                if ( angular.isDefined(item.stateParams) && angular.isObject(item.stateParams) )
                {
                    uisref = uisref + '(' + angular.toJson(item.stateParams) + ')';
                }
            }

            return uisref;
        }

        /* ----------------- */
        /* Service           */
        /* ----------------- */

        this.$get = function ()
        {
            var activeItem = null,
                navigationScope = null,
                folded = null,
                foldedOpen = null;

            var service = {
                saveItem          : saveItem,
                deleteItem        : deleteItem,
                sort              : sortByWeight,
                clearNavigation   : clearNavigation,
                setActiveItem     : setActiveItem,
                getActiveItem     : getActiveItem,
                getNavigation     : getNavigation,
                getFlatNavigation : getFlatNavigation,
                setNavigationScope: setNavigationScope,
                setFolded         : setFolded,
                getFolded         : getFolded,
                setFoldedOpen     : setFoldedOpen,
                getFoldedOpen     : getFoldedOpen,
                toggleFolded      : toggleFolded
            };

            return service;

            //////////

            /**
             * Clear the entire navigation
             */
            function clearNavigation()
            {
                // Clear the navigation array
                navigation = [];

                // Clear the vm.navigation from main controller
                if ( navigationScope )
                {
                    navigationScope.vm.navigation = navigation;
                }
            }

            /**
             * Set active item
             *
             * @param node
             * @param scope
             */
            function setActiveItem(node, scope)
            {
                activeItem = {
                    node : node,
                    scope: scope
                };
            }

            /**
             * Return active item
             */
            function getActiveItem()
            {
                return activeItem;
            }

            /**
             * Return navigation array
             *
             * @param root
             * @returns Array
             */
            function getNavigation(root)
            {
                if ( root )
                {
                    for ( var i = 0; i < navigation.length; i++ )
                    {
                        if ( navigation[i]._id === root )
                        {
                            return [navigation[i]];
                        }
                    }

                    return null;
                }

                return navigation;
            }

            /**
             * Return flat navigation array
             *
             * @param root
             * @returns Array
             */
            function getFlatNavigation(root)
            {
                // Get the correct navigation array
                var navigation = getNavigation(root);

                // Flatten the navigation object
                return _flattenNavigation(navigation);
            }

            /**
             * Store navigation's scope for later use
             *
             * @param scope
             */
            function setNavigationScope(scope)
            {
                navigationScope = scope;
            }

            /**
             * Set folded status
             *
             * @param status
             */
            function setFolded(status)
            {
                folded = status;
            }

            /**
             * Return folded status
             *
             * @returns {*}
             */
            function getFolded()
            {
                return folded;
            }

            /**
             * Set folded open status
             *
             * @param status
             */
            function setFoldedOpen(status)
            {
                foldedOpen = status;
            }

            /**
             * Return folded open status
             *
             * @returns {*}
             */
            function getFoldedOpen()
            {
                return foldedOpen;
            }


            /**
             * Toggle fold on stored navigation's scope
             */
            function toggleFolded()
            {
                navigationScope.toggleFolded();
            }

            /**
             * Flatten the given navigation
             *
             * @param navigation
             * @private
             */
            function _flattenNavigation(navigation)
            {
                var flatNav = [];

                for ( var x = 0; x < navigation.length; x++ )
                {
                    // Copy and clear the children of the
                    // navigation that we want to push
                    var navToPush = angular.copy(navigation[x]);
                    navToPush.children = [];

                    // Push the item
                    flatNav.push(navToPush);

                    // If there are child items in this navigation,
                    // do some nested function magic
                    if ( navigation[x].children.length > 0 )
                    {
                        flatNav = flatNav.concat(_flattenNavigation(navigation[x].children));
                    }
                }

                return flatNav;
            }
        };
    }

    /** @ngInject */
    function MsNavigationController($scope, msNavigationService)
    {
        var vm = this;

        // Data
        if ( $scope.root )
        {
            vm.navigation = msNavigationService.getNavigation($scope.root);
        }
        else
        {
            vm.navigation = msNavigationService.getNavigation();
        }

        // Methods
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;

        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            // Sort the navigation before doing anything else
            msNavigationService.sort();
        }

        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu()
        {
            angular.element('body').toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }
    }

    /** @ngInject */
    function msNavigationDirective($rootScope, $timeout, $mdSidenav, msNavigationService)
    {
        return {
            restrict   : 'E',
            scope      : {
                folded: '=',
                root  : '@'
            },
            controller : 'MsNavigationController as vm',
            templateUrl: 'app/core/directives/ms-navigation/templates/vertical.html',
            transclude : true,
            compile    : function (tElement)
            {
                tElement.addClass('ms-navigation');

                return function postLink(scope, iElement)
                {
                    var bodyEl = angular.element('body'),
                        foldExpanderEl = angular.element('<div id="ms-navigation-fold-expander"></div>'),
                        foldCollapserEl = angular.element('<div id="ms-navigation-fold-collapser"></div>'),
                        sidenav = $mdSidenav('navigation');

                    // Store the navigation in the service for public access
                    msNavigationService.setNavigationScope(scope);

                    // Initialize
                    init();

                    /**
                     * Initialize
                     */
                    function init()
                    {
                        // Set the folded status for the first time.
                        // First, we have to check if we have a folded
                        // status available in the service already. This
                        // will prevent navigation to act weird if we already
                        // set the fold status, remove the navigation and
                        // then re-initialize it, which happens if we
                        // change to a view without a navigation and then
                        // come back with history.back() function.

                        // If the service didn't initialize before, set
                        // the folded status from scope, otherwise we
                        // won't touch anything because the folded status
                        // already set in the service...
                        if ( msNavigationService.getFolded() === null )
                        {
                            msNavigationService.setFolded(scope.folded);
                        }

                        if ( msNavigationService.getFolded() )
                        {
                            // Collapse everything.
                            // This must be inside a $timeout because by the
                            // time we call this, the 'msNavigation::collapse'
                            // event listener is not registered yet. $timeout
                            // will ensure that it will be called after it is
                            // registered.
                            $timeout(function ()
                            {
                                $rootScope.$broadcast('msNavigation::collapse');
                            });

                            // Add class to the body
                            bodyEl.addClass('ms-navigation-folded');

                            // Set fold expander
                            setFoldExpander();
                        }
                    }

                    // Sidenav locked open status watcher
                    scope.$watch(function ()
                    {
                        return sidenav.isLockedOpen();
                    }, function (current, old)
                    {
                        if ( angular.isUndefined(current) || angular.equals(current, old) )
                        {
                            return;
                        }

                        var folded = msNavigationService.getFolded();

                        if ( folded )
                        {
                            if ( current )
                            {
                                // Collapse everything
                                $rootScope.$broadcast('msNavigation::collapse');
                            }
                            else
                            {
                                // Expand the active one and its parents
                                var activeItem = msNavigationService.getActiveItem();
                                if ( activeItem )
                                {
                                    activeItem.scope.$emit('msNavigation::stateMatched');
                                }
                            }
                        }
                    });

                    // Folded status watcher
                    scope.$watch('folded', function (current, old)
                    {
                        if ( angular.isUndefined(current) || angular.equals(current, old) )
                        {
                            return;
                        }

                        setFolded(current);
                    });

                    /**
                     * Set folded status
                     *
                     * @param folded
                     */
                    function setFolded(folded)
                    {
                        // Store folded status on the service for global access
                        msNavigationService.setFolded(folded);

                        if ( folded )
                        {
                            // Collapse everything
                            $rootScope.$broadcast('msNavigation::collapse');

                            // Add class to the body
                            bodyEl.addClass('ms-navigation-folded');

                            // Set fold expander
                            setFoldExpander();
                        }
                        else
                        {
                            // Expand the active one and its parents
                            var activeItem = msNavigationService.getActiveItem();
                            if ( activeItem )
                            {
                                activeItem.scope.$emit('msNavigation::stateMatched');
                            }

                            // Remove body class
                            bodyEl.removeClass('ms-navigation-folded ms-navigation-folded-open');

                            // Remove fold collapser
                            removeFoldCollapser();
                        }
                    }

                    /**
                     * Set fold expander
                     */
                    function setFoldExpander()
                    {
                        iElement.parent().append(foldExpanderEl);

                        // Let everything settle for a moment
                        // before registering the event listener
                        $timeout(function ()
                        {
                            foldExpanderEl.on('mouseenter touchstart', onFoldExpanderHover);
                        });
                    }

                    /**
                     * Set fold collapser
                     */
                    function setFoldCollapser()
                    {
                        bodyEl.find('#main').append(foldCollapserEl);
                        foldCollapserEl.on('mouseenter touchstart', onFoldCollapserHover);
                    }

                    /**
                     * Remove fold collapser
                     */
                    function removeFoldCollapser()
                    {
                        foldCollapserEl.remove();
                    }

                    /**
                     * onHover event of foldExpander
                     */
                    function onFoldExpanderHover(event)
                    {
                        if ( event )
                        {
                            event.preventDefault();
                        }

                        // Set folded open status
                        msNavigationService.setFoldedOpen(true);

                        // Expand the active one and its parents
                        var activeItem = msNavigationService.getActiveItem();
                        if ( activeItem )
                        {
                            activeItem.scope.$emit('msNavigation::stateMatched');
                        }

                        // Add class to the body
                        bodyEl.addClass('ms-navigation-folded-open');

                        // Remove the fold opener
                        foldExpanderEl.remove();

                        // Set fold collapser
                        setFoldCollapser();
                    }

                    /**
                     * onHover event of foldCollapser
                     */
                    function onFoldCollapserHover(event)
                    {
                        if ( event )
                        {
                            event.preventDefault();
                        }

                        // Set folded open status
                        msNavigationService.setFoldedOpen(false);

                        // Collapse everything
                        $rootScope.$broadcast('msNavigation::collapse');

                        // Remove body class
                        bodyEl.removeClass('ms-navigation-folded-open');

                        // Remove the fold collapser
                        foldCollapserEl.remove();

                        // Set fold expander
                        setFoldExpander();
                    }

                    /**
                     * Public access for toggling folded status externally
                     */
                    scope.toggleFolded = function ()
                    {
                        var folded = msNavigationService.getFolded();

                        setFolded(!folded);
                    };

                    /**
                     * On $stateChangeStart
                     */
                    scope.$on('$stateChangeStart', function ()
                    {
                        // Close the sidenav
                        sidenav.close();
                    });

                    // Cleanup
                    scope.$on('$destroy', function ()
                    {
                        foldCollapserEl.off('mouseenter touchstart');
                        foldExpanderEl.off('mouseenter touchstart');
                    });
                };
            }
        };
    }

    /** @ngInject */
    function MsNavigationNodeController($scope, $element, $rootScope, $animate, $state, msNavigationService)
    {
        var vm = this;

        // Data
        vm.element = $element;
        vm.node = $scope.node;
        vm.hasChildren = undefined;
        vm.collapsed = undefined;
        vm.collapsable = undefined;
        vm.group = undefined;
        vm.animateHeightClass = 'animate-height';

        // Methods
        vm.toggleCollapsed = toggleCollapsed;
        vm.collapse = collapse;
        vm.expand = expand;
        vm.getClass = getClass;
        vm.isHidden = isHidden;

        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            // Setup the initial values

            // Has children?
            vm.hasChildren = vm.node.children.length > 0;

            // Is group?
            vm.group = !!(angular.isDefined(vm.node.group) && vm.node.group === true);

            // Is collapsable?
            if ( !vm.hasChildren || vm.group )
            {
                vm.collapsable = false;
            }
            else
            {
                vm.collapsable = !!(angular.isUndefined(vm.node.collapsable) || typeof vm.node.collapsable !== 'boolean' || vm.node.collapsable === true);
            }

            // Is collapsed?
            if ( !vm.collapsable )
            {
                vm.collapsed = false;
            }
            else
            {
                vm.collapsed = !!(angular.isUndefined(vm.node.collapsed) || typeof vm.node.collapsed !== 'boolean' || vm.node.collapsed === true);
            }

            // Expand all parents if we have a matching state or
            // the current state is a child of the node's state
            if ( vm.node.state === $state.current.name || $state.includes(vm.node.state) )
            {
                // If state params are defined, make sure they are
                // equal, otherwise do not set the active item
                if ( angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params) )
                {
                    return;
                }

                $scope.$emit('msNavigation::stateMatched');

                // Also store the current active menu item
                msNavigationService.setActiveItem(vm.node, $scope);
            }

            $scope.$on('msNavigation::stateMatched', function ()
            {
                // Expand if the current scope is collapsable and is collapsed
                if ( vm.collapsable && vm.collapsed )
                {
                    $scope.$evalAsync(function ()
                    {
                        vm.collapsed = false;
                    });
                }
            });

            // Listen for collapse event
            $scope.$on('msNavigation::collapse', function (event, path)
            {
                if ( vm.collapsed || !vm.collapsable )
                {
                    return;
                }

                // If there is no path defined, collapse
                if ( angular.isUndefined(path) )
                {
                    vm.collapse();
                }
                // If there is a path defined, do not collapse
                // the items that are inside that path. This will
                // prevent parent items from collapsing
                else
                {
                    var givenPathParts = path.split('.'),
                        activePathParts = [];

                    var activeItem = msNavigationService.getActiveItem();
                    if ( activeItem )
                    {
                        activePathParts = activeItem.node._path.split('.');
                    }

                    // Test for given path
                    if ( givenPathParts.indexOf(vm.node._id) > -1 )
                    {
                        return;
                    }

                    // Test for active path
                    if ( activePathParts.indexOf(vm.node._id) > -1 )
                    {
                        return;
                    }

                    vm.collapse();
                }
            });

            // Listen for $stateChangeSuccess event
            $scope.$on('$stateChangeSuccess', function ()
            {
                if ( vm.node.state === $state.current.name )
                {
                    // If state params are defined, make sure they are
                    // equal, otherwise do not set the active item
                    if ( angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params) )
                    {
                        return;
                    }

                    // Update active item on state change
                    msNavigationService.setActiveItem(vm.node, $scope);

                    // Collapse everything except the one we're using
                    $rootScope.$broadcast('msNavigation::collapse', vm.node._path);
                }

                // Expand the parents if we the current
                // state is a child of the node's state
                if ( $state.includes(vm.node.state) )
                {
                    // If state params are defined, make sure they are
                    // equal, otherwise do not set the active item
                    if ( angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params) )
                    {
                        return;
                    }

                    // Emit the stateMatched
                    $scope.$emit('msNavigation::stateMatched');
                }
            });
        }

        /**
         * Toggle collapsed
         */
        function toggleCollapsed()
        {
            if ( vm.collapsed )
            {
                vm.expand();
            }
            else
            {
                vm.collapse();
            }
        }

        /**
         * Collapse
         */
        function collapse()
        {
            // Grab the element that we are going to collapse
            var collapseEl = vm.element.children('ul');

            // Grab the height
            var height = collapseEl[0].offsetHeight;

            $scope.$evalAsync(function ()
            {
                // Set collapsed status
                vm.collapsed = true;

                // Add collapsing class to the node
                vm.element.addClass('collapsing');

                // Animate the height
                $animate.animate(collapseEl,
                    {
                        'display': 'block',
                        'height' : height + 'px'
                    },
                    {
                        'height': '0px'
                    },
                    vm.animateHeightClass
                ).then(
                    function ()
                    {
                        // Clear the inline styles after animation done
                        collapseEl.css({
                            'display': '',
                            'height' : ''
                        });

                        // Clear collapsing class from the node
                        vm.element.removeClass('collapsing');
                    }
                );

                // Broadcast the collapse event so child items can also be collapsed
                $scope.$broadcast('msNavigation::collapse');
            });
        }

        /**
         * Expand
         */
        function expand()
        {
            // Grab the element that we are going to expand
            var expandEl = vm.element.children('ul');

            // Move the element out of the dom flow and
            // make it block so we can get its height
            expandEl.css({
                'position'  : 'absolute',
                'visibility': 'hidden',
                'display'   : 'block',
                'height'    : 'auto'
            });

            // Grab the height
            var height = expandEl[0].offsetHeight;

            // Reset the style modifications
            expandEl.css({
                'position'  : '',
                'visibility': '',
                'display'   : '',
                'height'    : ''
            });

            $scope.$evalAsync(function ()
            {
                // Set collapsed status
                vm.collapsed = false;

                // Add expanding class to the node
                vm.element.addClass('expanding');

                // Animate the height
                $animate.animate(expandEl,
                    {
                        'display': 'block',
                        'height' : '0px'
                    },
                    {
                        'height': height + 'px'
                    },
                    vm.animateHeightClass
                ).then(
                    function ()
                    {
                        // Clear the inline styles after animation done
                        expandEl.css({
                            'height': ''
                        });

                        // Clear expanding class from the node
                        vm.element.removeClass('expanding');
                    }
                );

                // If item expanded, broadcast the collapse event from rootScope so that the other expanded items
                // can be collapsed. This is necessary for keeping only one parent expanded at any time
                $rootScope.$broadcast('msNavigation::collapse', vm.node._path);
            });
        }

        /**
         * Return the class
         *
         * @returns {*}
         */
        function getClass()
        {
            return vm.node.class;
        }

        /**
         * Check if node should be hidden
         *
         * @returns {boolean}
         */
        function isHidden()
        {
            if ( angular.isDefined(vm.node.hidden) && angular.isFunction(vm.node.hidden) )
            {
                return vm.node.hidden();
            }

            return false;
        }
    }

    /** @ngInject */
    function msNavigationNodeDirective()
    {
        return {
            restrict        : 'A',
            bindToController: {
                node: '=msNavigationNode'
            },
            controller      : 'MsNavigationNodeController as vm',
            compile         : function (tElement)
            {
                tElement.addClass('ms-navigation-node');

                return function postLink(scope, iElement, iAttrs, MsNavigationNodeCtrl)
                {
                    // Add custom classes
                    iElement.addClass(MsNavigationNodeCtrl.getClass());

                    // Add group class if it's a group
                    if ( MsNavigationNodeCtrl.group )
                    {
                        iElement.addClass('group');
                    }
                };
            }
        };
    }

    /** @ngInject */
    function msNavigationItemDirective()
    {
        return {
            restrict: 'A',
            require : '^msNavigationNode',
            compile : function (tElement)
            {
                tElement.addClass('ms-navigation-item');

                return function postLink(scope, iElement, iAttrs, MsNavigationNodeCtrl)
                {
                    // If the item is collapsable...
                    if ( MsNavigationNodeCtrl.collapsable )
                    {
                        iElement.on('click', MsNavigationNodeCtrl.toggleCollapsed);
                    }

                    // Cleanup
                    scope.$on('$destroy', function ()
                    {
                        iElement.off('click');
                    });
                };
            }
        };
    }

    /** @ngInject */
    function msNavigationHorizontalDirective(msNavigationService)
    {
        return {
            restrict   : 'E',
            scope      : {
                root: '@'
            },
            controller : 'MsNavigationController as vm',
            templateUrl: 'app/core/directives/ms-navigation/templates/horizontal.html',
            transclude : true,
            compile    : function (tElement)
            {
                tElement.addClass('ms-navigation-horizontal');

                return function postLink(scope)
                {
                    // Store the navigation in the service for public access
                    msNavigationService.setNavigationScope(scope);
                };
            }
        };
    }

    /** @ngInject */
    function MsNavigationHorizontalNodeController($scope, $element, $rootScope, $state, msNavigationService)
    {
        var vm = this;

        // Data
        vm.element = $element;
        vm.node = $scope.node;
        vm.hasChildren = undefined;
        vm.group = undefined;

        // Methods
        vm.getClass = getClass;

        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            // Setup the initial values

            // Is active
            vm.isActive = false;

            // Has children?
            vm.hasChildren = vm.node.children.length > 0;

            // Is group?
            vm.group = !!(angular.isDefined(vm.node.group) && vm.node.group === true);

            // Mark all parents as active if we have a matching state
            // or the current state is a child of the node's state
            if ( vm.node.state === $state.current.name || $state.includes(vm.node.state) )
            {
                // If state params are defined, make sure they are
                // equal, otherwise do not set the active item
                if ( angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params) )
                {
                    return;
                }

                $scope.$emit('msNavigation::stateMatched');

                // Also store the current active menu item
                msNavigationService.setActiveItem(vm.node, $scope);
            }

            $scope.$on('msNavigation::stateMatched', function ()
            {
                // Mark as active if has children
                if ( vm.hasChildren )
                {
                    $scope.$evalAsync(function ()
                    {
                        vm.isActive = true;
                    });
                }
            });

            // Listen for clearActive event
            $scope.$on('msNavigation::clearActive', function ()
            {
                if ( !vm.hasChildren )
                {
                    return;
                }

                var activePathParts = [];

                var activeItem = msNavigationService.getActiveItem();
                if ( activeItem )
                {
                    activePathParts = activeItem.node._path.split('.');
                }

                // Test for active path
                if ( activePathParts.indexOf(vm.node._id) > -1 )
                {
                    $scope.$evalAsync(function ()
                    {
                        vm.isActive = true;
                    });
                }
                else
                {
                    $scope.$evalAsync(function ()
                    {
                        vm.isActive = false;
                    });
                }

            });

            // Listen for $stateChangeSuccess event
            $scope.$on('$stateChangeSuccess', function ()
            {
                if ( vm.node.state === $state.current.name || $state.includes(vm.node.state) )
                {
                    // If state params are defined, make sure they are
                    // equal, otherwise do not set the active item
                    if ( angular.isDefined(vm.node.stateParams) && angular.isDefined($state.params) && !angular.equals(vm.node.stateParams, $state.params) )
                    {
                        return;
                    }

                    // Update active item on state change
                    msNavigationService.setActiveItem(vm.node, $scope);

                    // Clear all active states except the one we're using
                    $rootScope.$broadcast('msNavigation::clearActive');
                }
            });
        }

        /**
         * Return the class
         *
         * @returns {*}
         */
        function getClass()
        {
            return vm.node.class;
        }
    }

    /** @ngInject */
    function msNavigationHorizontalNodeDirective()
    {
        return {
            restrict        : 'A',
            bindToController: {
                node: '=msNavigationHorizontalNode'
            },
            controller      : 'MsNavigationHorizontalNodeController as vm',
            compile         : function (tElement)
            {
                tElement.addClass('ms-navigation-horizontal-node');

                return function postLink(scope, iElement, iAttrs, MsNavigationHorizontalNodeCtrl)
                {
                    // Add custom classes
                    iElement.addClass(MsNavigationHorizontalNodeCtrl.getClass());

                    // Add group class if it's a group
                    if ( MsNavigationHorizontalNodeCtrl.group )
                    {
                        iElement.addClass('group');
                    }
                };
            }
        };
    }

    /** @ngInject */
    function msNavigationHorizontalItemDirective($mdMedia)
    {
        return {
            restrict: 'A',
            require : '^msNavigationHorizontalNode',
            compile : function (tElement)
            {
                tElement.addClass('ms-navigation-horizontal-item');

                return function postLink(scope, iElement, iAttrs, MsNavigationHorizontalNodeCtrl)
                {
                    iElement.on('click', onClick);

                    function onClick()
                    {
                        if ( !MsNavigationHorizontalNodeCtrl.hasChildren || $mdMedia('gt-md') )
                        {
                            return;
                        }

                        iElement.toggleClass('expanded');
                    }

                    // Cleanup
                    scope.$on('$destroy', function ()
                    {
                        iElement.off('click');
                    });
                };
            }
        };
    }

})();
(function ()
{
    'use strict';

    msNavIsFoldedDirective.$inject = ["$document", "$rootScope", "msNavFoldService"];
    msNavDirective.$inject = ["$rootScope", "$mdComponentRegistry", "msNavFoldService"];
    msNavToggleDirective.$inject = ["$rootScope", "$q", "$animate", "$state"];
    angular
        .module('app.core')
        .factory('msNavFoldService', msNavFoldService)
        .directive('msNavIsFolded', msNavIsFoldedDirective)
        .controller('MsNavController', MsNavController)
        .directive('msNav', msNavDirective)
        .directive('msNavTitle', msNavTitleDirective)
        .directive('msNavButton', msNavButtonDirective)
        .directive('msNavToggle', msNavToggleDirective);

    /** @ngInject */
    function msNavFoldService()
    {
        var foldable = {};

        var service = {
            setFoldable    : setFoldable,
            isNavFoldedOpen: isNavFoldedOpen,
            toggleFold     : toggleFold,
            openFolded     : openFolded,
            closeFolded    : closeFolded
        };

        return service;

        //////////

        /**
         * Set the foldable
         *
         * @param scope
         * @param element
         */
        function setFoldable(scope, element)
        {
            foldable = {
                'scope'  : scope,
                'element': element
            };
        }

        /**
         * Is folded open
         */
        function isNavFoldedOpen()
        {
            return foldable.scope.isNavFoldedOpen();
        }

        /**
         * Toggle fold
         */
        function toggleFold()
        {
            foldable.scope.toggleFold();
        }

        /**
         * Open folded navigation
         */
        function openFolded()
        {
            foldable.scope.openFolded();
        }

        /**
         * Close folded navigation
         */
        function closeFolded()
        {
            foldable.scope.closeFolded();
        }
    }

    /** @ngInject */
    function msNavIsFoldedDirective($document, $rootScope, msNavFoldService)
    {
        return {
            restrict: 'A',
            link    : function (scope, iElement, iAttrs)
            {
                var isFolded = (iAttrs.msNavIsFolded === 'true'),
                    isFoldedOpen = false,
                    body = angular.element($document[0].body),
                    openOverlay = angular.element('<div id="ms-nav-fold-open-overlay"></div>'),
                    closeOverlay = angular.element('<div id="ms-nav-fold-close-overlay"></div>'),
                    sidenavEl = iElement.parent();

                // Initialize the service
                msNavFoldService.setFoldable(scope, iElement, isFolded);

                // Set the fold status for the first time
                if ( isFolded )
                {
                    fold();
                }
                else
                {
                    unfold();
                }

                /**
                 * Is nav folded open
                 */
                function isNavFoldedOpen()
                {
                    return isFoldedOpen;
                }

                /**
                 * Toggle fold
                 */
                function toggleFold()
                {
                    isFolded = !isFolded;

                    if ( isFolded )
                    {
                        fold();
                    }
                    else
                    {
                        unfold();
                    }
                }

                /**
                 * Fold the navigation
                 */
                function fold()
                {
                    // Add classes
                    body.addClass('ms-nav-folded');

                    // Collapse everything and scroll to the top
                    $rootScope.$broadcast('msNav::forceCollapse');
                    iElement.scrollTop(0);

                    // Append the openOverlay to the element
                    sidenavEl.append(openOverlay);

                    // Event listeners
                    openOverlay.on('mouseenter touchstart', function (event)
                    {
                        openFolded(event);
                        isFoldedOpen = true;
                    });
                }

                /**
                 * Open folded navigation
                 */
                function openFolded(event)
                {
                    if ( angular.isDefined(event) )
                    {
                        event.preventDefault();
                    }

                    body.addClass('ms-nav-folded-open');

                    // Update the location
                    $rootScope.$broadcast('msNav::expandMatchingToggles');

                    // Remove open overlay
                    sidenavEl.find(openOverlay).remove();

                    // Append close overlay and bind its events
                    sidenavEl.parent().append(closeOverlay);
                    closeOverlay.on('mouseenter touchstart', function (event)
                    {
                        closeFolded(event);
                        isFoldedOpen = false;
                    });
                }

                /**
                 * Close folded navigation
                 */
                function closeFolded(event)
                {
                    if ( angular.isDefined(event) )
                    {
                        event.preventDefault();
                    }

                    // Collapse everything and scroll to the top
                    $rootScope.$broadcast('msNav::forceCollapse');
                    iElement.scrollTop(0);

                    body.removeClass('ms-nav-folded-open');

                    // Remove close overlay
                    sidenavEl.parent().find(closeOverlay).remove();

                    // Append open overlay and bind its events
                    sidenavEl.append(openOverlay);
                    openOverlay.on('mouseenter touchstart', function (event)
                    {
                        openFolded(event);
                        isFoldedOpen = true;
                    });
                }

                /**
                 * Unfold the navigation
                 */
                function unfold()
                {
                    body.removeClass('ms-nav-folded ms-nav-folded-open');

                    // Update the location
                    $rootScope.$broadcast('msNav::expandMatchingToggles');

                    iElement.off('mouseenter mouseleave');
                }

                // Expose functions to the scope
                scope.toggleFold = toggleFold;
                scope.openFolded = openFolded;
                scope.closeFolded = closeFolded;
                scope.isNavFoldedOpen = isNavFoldedOpen;

                // Cleanup
                scope.$on('$destroy', function ()
                {
                    openOverlay.off('mouseenter touchstart');
                    closeOverlay.off('mouseenter touchstart');
                    iElement.off('mouseenter mouseleave');
                });
            }
        };
    }


    /** @ngInject */
    function MsNavController()
    {
        var vm = this,
            disabled = false,
            toggleItems = [],
            lockedItems = [];

        // Data

        // Methods
        vm.isDisabled = isDisabled;
        vm.enable = enable;
        vm.disable = disable;
        vm.setToggleItem = setToggleItem;
        vm.getLockedItems = getLockedItems;
        vm.setLockedItem = setLockedItem;
        vm.clearLockedItems = clearLockedItems;

        //////////

        /**
         * Is navigation disabled
         *
         * @returns {boolean}
         */
        function isDisabled()
        {
            return disabled;
        }

        /**
         * Disable the navigation
         */
        function disable()
        {
            disabled = true;
        }

        /**
         * Enable the navigation
         */
        function enable()
        {
            disabled = false;
        }

        /**
         * Set toggle item
         *
         * @param element
         * @param scope
         */
        function setToggleItem(element, scope)
        {
            toggleItems.push({
                'element': element,
                'scope'  : scope
            });
        }

        /**
         * Get locked items
         *
         * @returns {Array}
         */
        function getLockedItems()
        {
            return lockedItems;
        }

        /**
         * Set locked item
         *
         * @param element
         * @param scope
         */
        function setLockedItem(element, scope)
        {
            lockedItems.push({
                'element': element,
                'scope'  : scope
            });
        }

        /**
         * Clear locked items list
         */
        function clearLockedItems()
        {
            lockedItems = [];
        }
    }

    /** @ngInject */
    function msNavDirective($rootScope, $mdComponentRegistry, msNavFoldService)
    {
        return {
            restrict  : 'E',
            scope     : {},
            controller: 'MsNavController',
            compile   : function (tElement)
            {
                tElement.addClass('ms-nav');

                return function postLink(scope)
                {
                    // Update toggle status according to the ui-router current state
                    $rootScope.$broadcast('msNav::expandMatchingToggles');

                    // Update toggles on state changes
                    var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
                    {
                        $rootScope.$broadcast('msNav::expandMatchingToggles');

                        // Close navigation sidenav on stateChangeSuccess
                        $mdComponentRegistry.when('navigation').then(function (navigation)
                        {
                            navigation.close();

                            if ( msNavFoldService.isNavFoldedOpen() )
                            {
                                msNavFoldService.closeFolded();
                            }
                        });
                    });

                    // Cleanup
                    scope.$on('$destroy', function ()
                    {
                        stateChangeSuccessEvent();
                    });
                };
            }
        };
    }

    /** @ngInject */
    function msNavTitleDirective()
    {
        return {
            restrict: 'A',
            compile : function (tElement)
            {
                tElement.addClass('ms-nav-title');

                return function postLink()
                {

                };
            }
        };
    }

    /** @ngInject */
    function msNavButtonDirective()
    {
        return {
            restrict: 'AE',
            compile : function (tElement)
            {
                tElement.addClass('ms-nav-button');

                return function postLink()
                {

                };
            }
        };
    }

    /** @ngInject */
    function msNavToggleDirective($rootScope, $q, $animate, $state)
    {
        return {
            restrict: 'A',
            require : '^msNav',
            scope   : true,
            compile : function (tElement, tAttrs)
            {
                tElement.addClass('ms-nav-toggle');

                // Add collapsed attr
                if ( angular.isUndefined(tAttrs.collapsed) )
                {
                    tAttrs.collapsed = true;
                }

                tElement.attr('collapsed', tAttrs.collapsed);

                return function postLink(scope, iElement, iAttrs, MsNavCtrl)
                {
                    var classes = {
                        expanded         : 'expanded',
                        expandAnimation  : 'expand-animation',
                        collapseAnimation: 'collapse-animation'
                    };

                    // Store all related states
                    var links = iElement.find('a');
                    var states = [];
                    var regExp = /\(.*\)/g;

                    angular.forEach(links, function (link)
                    {
                        var state = angular.element(link).attr('ui-sref');

                        if ( angular.isUndefined(state) )
                        {
                            return;
                        }

                        // Remove any parameter definition from the state name before storing it
                        state = state.replace(regExp, '');

                        states.push(state);
                    });

                    // Store toggle-able element and its scope in the main nav controller
                    MsNavCtrl.setToggleItem(iElement, scope);

                    // Click handler
                    iElement.children('.ms-nav-button').on('click', toggle);

                    // Toggle function
                    function toggle()
                    {
                        // If navigation is disabled, do nothing...
                        if ( MsNavCtrl.isDisabled() )
                        {
                            return;
                        }

                        // Disable the entire navigation to prevent spamming
                        MsNavCtrl.disable();

                        if ( isCollapsed() )
                        {
                            // Clear the locked items list
                            MsNavCtrl.clearLockedItems();

                            // Emit pushToLockedList event
                            scope.$emit('msNav::pushToLockedList');

                            // Collapse everything but locked items
                            $rootScope.$broadcast('msNav::collapse');

                            // Expand and then...
                            expand().then(function ()
                            {
                                // Enable the entire navigation after animations completed
                                MsNavCtrl.enable();
                            });
                        }
                        else
                        {
                            // Collapse with all children
                            scope.$broadcast('msNav::forceCollapse');
                        }
                    }

                    // Cleanup
                    scope.$on('$destroy', function ()
                    {
                        iElement.children('.ms-nav-button').off('click');
                    });

                    /*---------------------*/
                    /* Scope Events        */
                    /*---------------------*/

                    /**
                     * Collapse everything but locked items
                     */
                    scope.$on('msNav::collapse', function ()
                    {
                        // Only collapse toggles that are not locked
                        var lockedItems = MsNavCtrl.getLockedItems();
                        var locked = false;

                        angular.forEach(lockedItems, function (lockedItem)
                        {
                            if ( angular.equals(lockedItem.scope, scope) )
                            {
                                locked = true;
                            }
                        });

                        if ( locked )
                        {
                            return;
                        }

                        // Collapse and then...
                        collapse().then(function ()
                        {
                            // Enable the entire navigation after animations completed
                            MsNavCtrl.enable();
                        });
                    });

                    /**
                     * Collapse everything
                     */
                    scope.$on('msNav::forceCollapse', function ()
                    {
                        // Collapse and then...
                        collapse().then(function ()
                        {
                            // Enable the entire navigation after animations completed
                            MsNavCtrl.enable();
                        });
                    });

                    /**
                     * Expand toggles that match with the current states
                     */
                    scope.$on('msNav::expandMatchingToggles', function ()
                    {
                        var currentState = $state.current.name;
                        var shouldExpand = false;

                        angular.forEach(states, function (state)
                        {
                            if ( currentState === state )
                            {
                                shouldExpand = true;
                            }
                        });

                        if ( shouldExpand )
                        {
                            expand();
                        }
                        else
                        {
                            collapse();
                        }
                    });

                    /**
                     * Add toggle to the locked list
                     */
                    scope.$on('msNav::pushToLockedList', function ()
                    {
                        // Set expanded item on main nav controller
                        MsNavCtrl.setLockedItem(iElement, scope);
                    });

                    /*---------------------*/
                    /* Internal functions  */
                    /*---------------------*/

                    /**
                     * Is element collapsed
                     *
                     * @returns {bool}
                     */
                    function isCollapsed()
                    {
                        return iElement.attr('collapsed') === 'true';
                    }

                    /**
                     * Is element expanded
                     *
                     * @returns {bool}
                     */
                    function isExpanded()
                    {
                        return !isCollapsed();
                    }

                    /**
                     * Expand the toggle
                     *
                     * @returns $promise
                     */
                    function expand()
                    {
                        // Create a new deferred object
                        var deferred = $q.defer();

                        // If the menu item is already expanded, do nothing..
                        if ( isExpanded() )
                        {
                            // Reject the deferred object
                            deferred.reject({'error': true});

                            // Return the promise
                            return deferred.promise;
                        }

                        // Set element attr
                        iElement.attr('collapsed', false);

                        // Grab the element to expand
                        var elementToExpand = angular.element(iElement.find('ms-nav-toggle-items')[0]);

                        // Move the element out of the dom flow and
                        // make it block so we can get its height
                        elementToExpand.css({
                            'position'  : 'absolute',
                            'visibility': 'hidden',
                            'display'   : 'block',
                            'height'    : 'auto'
                        });

                        // Grab the height
                        var height = elementToExpand[0].offsetHeight;

                        // Reset the style modifications
                        elementToExpand.css({
                            'position'  : '',
                            'visibility': '',
                            'display'   : '',
                            'height'    : ''
                        });

                        // Animate the height
                        scope.$evalAsync(function ()
                        {
                            $animate.animate(elementToExpand,
                                {
                                    'display': 'block',
                                    'height' : '0px'
                                },
                                {
                                    'height': height + 'px'
                                },
                                classes.expandAnimation
                            ).then(
                                function ()
                                {
                                    // Add expanded class
                                    elementToExpand.addClass(classes.expanded);

                                    // Clear the inline styles after animation done
                                    elementToExpand.css({'height': ''});

                                    // Resolve the deferred object
                                    deferred.resolve({'success': true});
                                }
                            );
                        });

                        // Return the promise
                        return deferred.promise;
                    }

                    /**
                     * Collapse the toggle
                     *
                     * @returns $promise
                     */
                    function collapse()
                    {
                        // Create a new deferred object
                        var deferred = $q.defer();

                        // If the menu item is already collapsed, do nothing..
                        if ( isCollapsed() )
                        {
                            // Reject the deferred object
                            deferred.reject({'error': true});

                            // Return the promise
                            return deferred.promise;
                        }

                        // Set element attr
                        iElement.attr('collapsed', true);

                        // Grab the element to collapse
                        var elementToCollapse = angular.element(iElement.find('ms-nav-toggle-items')[0]);

                        // Grab the height
                        var height = elementToCollapse[0].offsetHeight;

                        // Animate the height
                        scope.$evalAsync(function ()
                        {
                            $animate.animate(elementToCollapse,
                                {
                                    'height': height + 'px'
                                },
                                {
                                    'height': '0px'
                                },
                                classes.collapseAnimation
                            ).then(
                                function ()
                                {
                                    // Remove expanded class
                                    elementToCollapse.removeClass(classes.expanded);

                                    // Clear the inline styles after animation done
                                    elementToCollapse.css({
                                        'display': '',
                                        'height' : ''
                                    });

                                    // Resolve the deferred object
                                    deferred.resolve({'success': true});
                                }
                            );
                        });

                        // Return the promise
                        return deferred.promise;
                    }
                };
            }
        };
    }
})();
(function ()
{
    'use strict';

    msMaterialColorPickerController.$inject = ["$scope", "$mdColorPalette", "$mdMenu", "fuseGenerator"];
    angular
        .module('app.core')
        .controller('msMaterialColorPickerController', msMaterialColorPickerController)
        .directive('msMaterialColorPicker', msMaterialColorPicker);

    /** @ngInject */
    function msMaterialColorPickerController($scope, $mdColorPalette, $mdMenu, fuseGenerator)
    {
        var vm = this;
        vm.palettes = $mdColorPalette; // Material Color Palette
        vm.selectedPalette = false;
        vm.selectedHues = false;
        $scope.$selectedColor = {};

        // Methods
        vm.activateHueSelection = activateHueSelection;
        vm.selectColor = selectColor;
        vm.removeColor = removeColor;

        /**
         * Initialize / Watch model changes
         */
        $scope.$watch('ngModel', setSelectedColor);

        /**
         * Activate Hue Selection
         * @param palette
         * @param hues
         */
        function activateHueSelection(palette, hues)
        {
            vm.selectedPalette = palette;
            vm.selectedHues = hues;
        }

        /**
         * Select Color
         * @type {selectColor}
         */
        function selectColor(palette, hue)
        {
            // Update Selected Color
            updateSelectedColor(palette, hue);

            // Update Model Value
            updateModel();

            // Hide The picker
            $mdMenu.hide();
        }

        function removeColor()
        {
            vm.selectedColor = {
                palette: '',
                hue    : '',
                class  : ''
            };

            activateHueSelection(false, false);

            updateModel();
        }

        /**
         * Set SelectedColor by model type
         */
        function setSelectedColor()
        {
            if ( !vm.modelCtrl.$viewValue || vm.modelCtrl.$viewValue === '' )
            {
                removeColor();
                return;
            }

            var palette, hue;

            // If ModelType Class
            if ( vm.msModelType === 'class' )
            {
                var color = vm.modelCtrl.$viewValue.split('-');
                if ( color.length >= 5 )
                {
                    palette = color[1] + '-' + color[2];
                    hue = color[3];
                }
                else
                {
                    palette = color[1];
                    hue = color[2];
                }
            }

            // If ModelType Object
            else if ( vm.msModelType === 'obj' )
            {
                palette = vm.modelCtrl.$viewValue.palette;
                hue = vm.modelCtrl.$viewValue.hue || 500;
            }

            // Update Selected Color
            updateSelectedColor(palette, hue);
        }

        /**
         * Update Selected Color
         * @param palette
         * @param hue
         */
        function updateSelectedColor(palette, hue)
        {
            vm.selectedColor = {
                palette     : palette,
                hue         : hue,
                class       : 'md-' + palette + '-' + hue + '-bg',
                bgColorValue: fuseGenerator.rgba(vm.palettes[palette][hue].value),
                fgColorValue: fuseGenerator.rgba(vm.palettes[palette][hue].contrast)
            };

            // If Model object not Equals the selectedColor update it
            // it can be happen when the model only have pallete and hue values
            if ( vm.msModelType === 'obj' && !angular.equals(vm.selectedColor, vm.modelCtrl.$viewValue) )
            {
                // Update Model Value
                updateModel();
            }

            activateHueSelection(palette, vm.palettes[palette]);

            $scope.$selectedColor = vm.selectedColor;
        }

        /**
         * Update Model Value by model type
         */
        function updateModel()
        {
            if ( vm.msModelType === 'class' )
            {
                vm.modelCtrl.$setViewValue(vm.selectedColor.class);
            }
            else if ( vm.msModelType === 'obj' )
            {
                vm.modelCtrl.$setViewValue(vm.selectedColor);
            }
        }
    }

    /** @ngInject */
    function msMaterialColorPicker()
    {
        return {
            require    : ['msMaterialColorPicker', 'ngModel'],
            restrict   : 'E',
            scope      : {
                ngModel    : '=',
                msModelType: '@?'
            },
            controller : 'msMaterialColorPickerController as vm',
            transclude : true,
            templateUrl: 'app/core/directives/ms-material-color-picker/ms-material-color-picker.html',
            link       : function (scope, element, attrs, controllers, transclude)
            {
                var ctrl = controllers[0];

                /**
                 *  Pass model controller to directive controller
                 */
                ctrl.modelCtrl = controllers[1];

                /**
                 * ModelType: 'obj', 'class'(default)
                 * @type {string|string}
                 */
                ctrl.msModelType = scope.msModelType || 'class';

                transclude(scope, function (clone)
                {
                    clone = clone.filter(function (i, el)
                    {
                        return ( el.nodeType === 1 ) ? true : false;
                    });

                    if ( clone.length )
                    {
                        element.find('ms-color-picker-button').replaceWith(clone);
                    }
                });
            }
        };
    }
})();
(function ()
{
    'use strict';

    msMasonryController.$inject = ["$scope", "$window", "$mdMedia", "$timeout"];
    msMasonry.$inject = ["$timeout"];
    angular
        .module('app.core')
        .controller('msMasonryController', msMasonryController)
        .directive('msMasonry', msMasonry)
        .directive('msMasonryItem', msMasonryItem);

    /** @ngInject */
    function msMasonryController($scope, $window, $mdMedia, $timeout)
    {
        var vm = this,
            defaultOpts = {
                columnCount     : 5,
                respectItemOrder: false,
                reLayoutDebounce: 400,
                responsive      : {
                    md: 3,
                    sm: 2,
                    xs: 1
                }
            },
            reLayoutTimeout = true;

        vm.options = null;
        vm.container = [];
        vm.containerPos = '';
        vm.columnWidth = '';
        vm.items = [];

        // Methods
        vm.reLayout = reLayout;
        vm.initialize = initialize;
        vm.waitImagesLoaded = waitImagesLoaded;

        function initialize()
        {
            vm.options = !vm.options ? defaultOpts : angular.extend(defaultOpts, vm.options);


            watchContainerResize();
        }

        $scope.$on('msMasonry:relayout', function ()
        {
            reLayout();
        });

        function waitImagesLoaded(element, callback)
        {
            if ( typeof imagesLoaded !== 'undefined' )
            {
                var imgLoad = $window.imagesLoaded(element);

                imgLoad.on('done', function ()
                {
                    callback();
                });
            }
            else
            {
                callback();
            }
        }

        function watchContainerResize()
        {
            $scope.$watch(
                function ()
                {
                    return vm.container.width();
                },
                function (newValue, oldValue)
                {
                    if ( newValue !== oldValue )
                    {
                        reLayout();
                    }
                }
            );
        }

        function reLayout()
        {
            // Debounce for relayout
            if ( reLayoutTimeout )
            {
                $timeout.cancel(reLayoutTimeout);
            }

            reLayoutTimeout = $timeout(function ()
            {
                start();

                $scope.$broadcast('msMasonry:relayoutFinished');

            }, vm.options.reLayoutDebounce);

            // Start relayout
            function start()
            {
                vm.containerPos = vm.container[0].getBoundingClientRect();

                updateColumnOptions();

                $scope.$broadcast('msMasonry:relayoutStarted');

                vm.items = vm.container.find('ms-masonry-item');

                //initialize lastRowBottomArr
                var referenceArr = Array.apply(null, new Array(vm.columnCount)).map(function ()
                {
                    return 0;
                });

                // set item positions
                for ( var i = 0; i < vm.items.length; i++ )
                {
                    var item = vm.items[i],
                        xPos, yPos, column, refTop;

                    item = angular.element(item);

                    if ( item.scope() )
                    {
                        item.scope().$broadcast('msMasonryItem:startReLayout');
                    }

                    item.css({'width': vm.columnWidth});

                    if ( vm.options.respectItemOrder )
                    {
                        column = i % vm.columnCount;
                        refTop = referenceArr[column];
                    }
                    else
                    {
                        refTop = Math.min.apply(Math, referenceArr);
                        column = referenceArr.indexOf(refTop);
                    }

                    referenceArr[column] = refTop + item[0].getBoundingClientRect().height;

                    xPos = Math.round(column * vm.columnWidth);
                    yPos = refTop;

                    item.css({'transform': 'translate3d(' + xPos + 'px,' + yPos + 'px,0px)'});
                    item.addClass('placed');

                    if ( item.scope() )
                    {
                        item.scope().$broadcast('msMasonryItem:finishReLayout');
                    }
                }
            }
        }

        function updateColumnOptions()
        {
            vm.columnCount = vm.options.columnCount;

            if ( $mdMedia('gt-md') )
            {
                vm.columnCount = vm.options.columnCount;
            }
            else if ( $mdMedia('md') )
            {
                vm.columnCount = (vm.columnCount > vm.options.responsive.md ? vm.options.responsive.md : vm.columnCount);
            }
            else if ( $mdMedia('sm') )
            {
                vm.columnCount = (vm.columnCount > vm.options.responsive.sm ? vm.options.responsive.sm : vm.columnCount);
            }
            else
            {
                vm.columnCount = vm.options.responsive.xs;
            }

            vm.columnWidth = vm.containerPos.width / vm.columnCount;

        }
    }

    /** @ngInject */
    function msMasonry($timeout)
    {
        return {
            restrict  : 'AEC',
            controller: 'msMasonryController',
            compile   : compile
        };
        function compile(element, attributes)
        {
            return {
                pre : function preLink(scope, iElement, iAttrs, controller)
                {
                    controller.options = angular.fromJson(attributes.options || '{}');
                    controller.container = element;
                },
                post: function postLink(scope, iElement, iAttrs, controller)
                {
                    $timeout(function ()
                    {
                        controller.initialize();
                    });
                }
            };
        }
    }

    /** @ngInject */
    function msMasonryItem()
    {
        return {
            restrict: 'AEC',
            require : '^msMasonry',
            priority: 1,
            link    : link
        };

        function link(scope, element, attributes, controller)
        {
            controller.waitImagesLoaded(element, function ()
            {
                controller.reLayout();

            });

            scope.$on('msMasonryItem:finishReLayout', function ()
            {
                scope.$watch(function ()
                {
                    return element.height();
                }, function (newVal, oldVal)
                {
                    if ( newVal !== oldVal )
                    {
                        controller.reLayout();
                    }
                });
            });

            element.on('$destroy', function ()
            {
                controller.reLayout();
            });
        }
    }
})();
(function ()
{
    'use strict';

    msInfoBarDirective.$inject = ["$document"];
    angular
        .module('app.core')
        .directive('msInfoBar', msInfoBarDirective);

    /** @ngInject */
    function msInfoBarDirective($document)
    {
        return {
            restrict   : 'E',
            scope      : {},
            transclude : true,
            templateUrl: 'app/core/directives/ms-info-bar/ms-info-bar.html',
            link       : function (scope, iElement)
            {
                var body = $document.find('body'),
                    bodyClass = 'ms-info-bar-active';

                // Add body class
                body.addClass(bodyClass);

                /**
                 * Remove the info bar
                 */
                function removeInfoBar()
                {
                    body.removeClass(bodyClass);
                    iElement.remove();
                    scope.$destroy();
                }

                // Expose functions
                scope.removeInfoBar = removeInfoBar;
            }
        };
    }
})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .controller('MsFormWizardController', MsFormWizardController)
        .directive('msFormWizard', msFormWizardDirective)
        .directive('msFormWizardForm', msFormWizardFormDirective);

    /** @ngInject */
    function MsFormWizardController()
    {
        var vm = this;

        // Data
        vm.forms = [];
        vm.selectedIndex = 0;

        // Methods
        vm.registerForm = registerForm;

        vm.previousStep = previousStep;
        vm.nextStep = nextStep;
        vm.firstStep = firstStep;
        vm.lastStep = lastStep;

        vm.totalSteps = totalSteps;
        vm.isFirstStep = isFirstStep;
        vm.isLastStep = isLastStep;

        vm.currentStepInvalid = currentStepInvalid;
        vm.previousStepInvalid = previousStepInvalid;
        vm.formsIncomplete = formsIncomplete;
        vm.resetForm = resetForm;

        //////////

        /**
         * Register form
         *
         * @param form
         */
        function registerForm(form)
        {
            vm.forms.push(form);
        }

        /**
         * Go to previous step
         */
        function previousStep()
        {
            if ( isFirstStep() )
            {
                return;
            }

            vm.selectedIndex--;
        }

        /**
         * Go to next step
         */
        function nextStep()
        {
            if ( isLastStep() )
            {
                return;
            }

            vm.selectedIndex++;
        }

        /**
         * Go to first step
         */
        function firstStep()
        {
            vm.selectedIndex = 0;
        }

        /**
         * Go to last step
         */
        function lastStep()
        {
            vm.selectedIndex = totalSteps() - 1;
        }

        /**
         * Return total steps
         *
         * @returns {int}
         */
        function totalSteps()
        {
            return vm.forms.length;
        }

        /**
         * Is first step?
         *
         * @returns {boolean}
         */
        function isFirstStep()
        {
            return vm.selectedIndex === 0;
        }

        /**
         * Is last step?
         *
         * @returns {boolean}
         */
        function isLastStep()
        {
            return vm.selectedIndex === totalSteps() - 1;
        }

        /**
         * Is current step invalid?
         *
         * @returns {boolean}
         */
        function currentStepInvalid()
        {
            return angular.isDefined(vm.forms[vm.selectedIndex]) && vm.forms[vm.selectedIndex].$invalid;
        }

        /**
         * Is previous step invalid?
         *
         * @returns {boolean}
         */
        function previousStepInvalid()
        {
            return vm.selectedIndex > 0 && angular.isDefined(vm.forms[vm.selectedIndex - 1]) && vm.forms[vm.selectedIndex - 1].$invalid;
        }

        /**
         * Check if there is any incomplete forms
         *
         * @returns {boolean}
         */
        function formsIncomplete()
        {
            for ( var x = 0; x < vm.forms.length; x++ )
            {
                if ( vm.forms[x].$invalid )
                {
                    return true;
                }
            }

            return false;
        }

        /**
         * Reset form
         */
        function resetForm()
        {
            // Go back to the first step
            vm.selectedIndex = 0;

            // Make sure all the forms are back in the $pristine & $untouched status
            for ( var x = 0; x < vm.forms.length; x++ )
            {
                vm.forms[x].$setPristine();
                vm.forms[x].$setUntouched();
            }
        }
    }

    /** @ngInject */
    function msFormWizardDirective()
    {
        return {
            restrict  : 'E',
            scope     : true,
            controller: 'MsFormWizardController as msWizard',
            compile   : function (tElement)
            {
                tElement.addClass('ms-form-wizard');

                return function postLink()
                {

                };
            }
        };
    }

    /** @ngInject */
    function msFormWizardFormDirective()
    {
        return {
            restrict: 'A',
            require : ['form', '^msFormWizard'],
            compile : function (tElement)
            {
                tElement.addClass('ms-form-wizard-form');

                return function postLink(scope, iElement, iAttrs, ctrls)
                {
                    var formCtrl = ctrls[0],
                        MsFormWizardCtrl = ctrls[1];

                    MsFormWizardCtrl.registerForm(formCtrl);
                };
            }
        };
    }

})();
(function ()
{
    'use strict';

    msDatepickerFix.$inject = ["msDatepickerFixConfig"];
    angular
        .module('app.core')
        .provider('msDatepickerFixConfig', msDatepickerFixConfigProvider)
        .directive('msDatepickerFix', msDatepickerFix);

    /** @ngInject */
    function msDatepickerFixConfigProvider()
    {
        var service = this;

        // Default configuration
        var defaultConfig = {
            // To view
            formatter: function (val)
            {
                if ( !val )
                {
                    return '';
                }

                return val === '' ? val : new Date(val);
            },
            // To model
            parser   : function (val)
            {
                if ( !val )
                {
                    return '';
                }

                return moment(val).add(moment(val).utcOffset(), 'm').toDate();
            }
        };

        // Methods
        service.config = config;

        //////////

        /**
         * Extend default configuration with the given one
         *
         * @param configuration
         */
        function config(configuration)
        {
            defaultConfig = angular.extend({}, defaultConfig, configuration);
        }

        /**
         * Service
         */
        service.$get = function ()
        {
            return defaultConfig;
        };
    }

    /** @ngInject */
    function msDatepickerFix(msDatepickerFixConfig)
    {
        return {
            require : 'ngModel',
            priority: 1,
            link    : function (scope, elem, attrs, ngModel)
            {
                ngModel.$formatters.push(msDatepickerFixConfig.formatter); // to view
                ngModel.$parsers.push(msDatepickerFixConfig.parser); // to model
            }
        };
    }
})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .directive('msCard', msCardDirective);

    /** @ngInject */
    function msCardDirective()
    {
        return {
            restrict: 'E',
            scope   : {
                templatePath: '=template',
                card        : '=ngModel',
                vm          : '=viewModel'
            },
            template: '<div class="ms-card-content-wrapper" ng-include="templatePath" onload="cardTemplateLoaded()"></div>',
            compile : function (tElement)
            {
                // Add class
                tElement.addClass('ms-card');

                return function postLink(scope, iElement)
                {
                    // Methods
                    scope.cardTemplateLoaded = cardTemplateLoaded;

                    //////////

                    /**
                     * Emit cardTemplateLoaded event
                     */
                    function cardTemplateLoaded()
                    {
                        scope.$emit('msCard::cardTemplateLoaded', iElement);
                    }
                };
            }
        };
    }
})();
(function ()
{
    'use strict';

    fuseThemingService.$inject = ["$cookies", "$log", "$mdTheming"];
    angular
        .module('app.core')
        .service('fuseTheming', fuseThemingService);

    /** @ngInject */
    function fuseThemingService($cookies, $log, $mdTheming)
    {
        var service = {
            getRegisteredPalettes: getRegisteredPalettes,
            getRegisteredThemes  : getRegisteredThemes,
            setActiveTheme       : setActiveTheme,
            setThemesList        : setThemesList,
            themes               : {
                list  : {},
                active: {
                    'name' : '',
                    'theme': {}
                }
            }
        };

        return service;

        //////////

        /**
         * Get registered palettes
         *
         * @returns {*}
         */
        function getRegisteredPalettes()
        {
            return $mdTheming.PALETTES;
        }

        /**
         * Get registered themes
         *
         * @returns {*}
         */
        function getRegisteredThemes()
        {
            return $mdTheming.THEMES;
        }

        /**
         * Set active theme
         *
         * @param themeName
         */
        function setActiveTheme(themeName)
        {
            // If theme does not exist, fallback to the default theme
            if ( angular.isUndefined(service.themes.list[themeName]) )
            {
                // If there is no theme called "default"...
                if ( angular.isUndefined(service.themes.list.default) )
                {
                    $log.error('You must have at least one theme named "default"');
                    return;
                }

                $log.warn('The theme "' + themeName + '" does not exist! Falling back to the "default" theme.');

                // Otherwise set theme to default theme
                service.themes.active.name = 'default';
                service.themes.active.theme = service.themes.list.default;
                $cookies.put('selectedTheme', service.themes.active.name);

                return;
            }

            service.themes.active.name = themeName;
            service.themes.active.theme = service.themes.list[themeName];
            $cookies.put('selectedTheme', themeName);
        }

        /**
         * Set available themes list
         *
         * @param themeList
         */
        function setThemesList(themeList)
        {
            service.themes.list = themeList;
        }
    }
})();

(function ()
{
    'use strict';

    config.$inject = ["$mdThemingProvider", "fusePalettes", "fuseThemes"];
    angular
        .module('app.core')
        .config(config);

    /** @ngInject */
    function config($mdThemingProvider, fusePalettes, fuseThemes)
    {
        // Inject Cookies Service
        var $cookies;
        angular.injector(['ngCookies']).invoke([
            '$cookies', function (_$cookies)
            {
                $cookies = _$cookies;
            }
        ]);

        // Check if custom theme exist in cookies
        var customTheme = $cookies.getObject('customTheme');
        if ( customTheme )
        {
            fuseThemes['custom'] = customTheme;
        }

        $mdThemingProvider.alwaysWatchTheme(true);

        // Define custom palettes
        angular.forEach(fusePalettes, function (palette)
        {
            $mdThemingProvider.definePalette(palette.name, palette.options);
        });

        // Register custom themes
        angular.forEach(fuseThemes, function (theme, themeName)
        {
            $mdThemingProvider.theme(themeName)
                .primaryPalette(theme.primary.name, theme.primary.hues)
                .accentPalette(theme.accent.name, theme.accent.hues)
                .warnPalette(theme.warn.name, theme.warn.hues)
                .backgroundPalette(theme.background.name, theme.background.hues);
        });
    }

})();
(function ()
{
    'use strict';

    var fuseThemes = {
        default  : {
            primary   : {
                name: 'independence-paleblue',
                hues: {
                    'default': '700',
                    'hue-1'  : '500',
                    'hue-2'  : '600',
                    'hue-3'  : '400'
                }
            },
            accent    : {
                name: 'light-blue',
                hues: {
                    'default': '600',
                    'hue-1'  : '400',
                    'hue-2'  : '700',
                    'hue-3'  : 'A100'
                }
            },
            warn      : {
                name: 'red'
            },
            background: {
                name: 'grey',
                hues: {
                    'default': 'A100',
                    'hue-1'  : 'A100',
                    'hue-2'  : '100',
                    'hue-3'  : '300'
                }
            }
        },
        'pinkTheme': {
            primary   : {
                name: 'blue-grey',
                hues: {
                    'default': '800',
                    'hue-1'  : '600',
                    'hue-2'  : '400',
                    'hue-3'  : 'A100'
                }
            },
            accent    : {
                name: 'pink',
                hues: {
                    'default': '400',
                    'hue-1'  : '300',
                    'hue-2'  : '600',
                    'hue-3'  : 'A100'
                }
            },
            warn      : {
                name: 'blue'
            },
            background: {
                name: 'grey',
                hues: {
                    'default': 'A100',
                    'hue-1'  : 'A100',
                    'hue-2'  : '100',
                    'hue-3'  : '300'
                }
            }
        },
        'tealTheme': {
            primary   : {
                name: 'independence-blue',
                hues: {
                    'default': '900',
                    'hue-1'  : '600',
                    'hue-2'  : '500',
                    'hue-3'  : 'A100'
                }
            },
            accent    : {
                name: 'teal',
                hues: {
                    'default': '500',
                    'hue-1'  : '400',
                    'hue-2'  : '600',
                    'hue-3'  : 'A100'
                }
            },
            warn      : {
                name: 'deep-orange'
            },
            background: {
                name: 'grey',
                hues: {
                    'default': 'A100',
                    'hue-1'  : 'A100',
                    'hue-2'  : '100',
                    'hue-3'  : '300'
                }
            }
        }
    };

    angular
        .module('app.core')
        .constant('fuseThemes', fuseThemes);
})();
(function () {
    'use strict';

    var fusePalettes = [
        {
            name: 'independence-blue',
            options: {
                '50': '#ebf1fa',
                '100': '#c2d4ef',
                '200': '#9ab8e5',
                '300': '#78a0dc',
                '400': '#5688d3',
                '500': '#3470ca',
                '600': '#2e62b1',
                '700': '#275498',
                '800': '#21467e',
                '900': '#1a3865',
                'A100': '#c2d4ef',
                'A200': '#9ab8e5',
                'A400': '#5688d3',
                'A700': '#275498',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': '50 100 200 A100',
                'contrastStrongLightColors': '300 400'
            }
        },
        {
            name: 'independence-paleblue',
            options: {
                '50': '#ececee',
                '100': '#c5c6cb',
                '200': '#9ea1a9',
                '300': '#7d818c',
                '400': '#5c616f',
                '500': '#3c4252',
                '600': '#353a48',
                '700': '#2d323e',
                '800': '#262933',
                '900': '#1e2129',
                'A100': '#c5c6cb',
                'A200': '#9ea1a9',
                'A400': '#5c616f',
                'A700': '#2d323e',
                'contrastDefaultColor': 'light',
                'contrastDarkColors': '50 100 200 A100',
                'contrastStrongLightColors': '300 400'
            }
        }
    ];

    angular
        .module('app.core')
        .constant('fusePalettes', fusePalettes);
})();
(function ()
{
    'use strict';

    fuseGeneratorService.$inject = ["$cookies", "$log", "fuseTheming"];
    angular
        .module('app.core')
        .factory('fuseGenerator', fuseGeneratorService);

    /** @ngInject */
    function fuseGeneratorService($cookies, $log, fuseTheming)
    {
        // Storage for simplified themes object
        var themes = {};

        var service = {
            generate: generate,
            rgba    : rgba
        };

        return service;

        //////////

        /**
         * Generate less variables for each theme from theme's
         * palette by using material color naming conventions
         */
        function generate()
        {
            // Get registered themes and palettes and copy
            // them so we don't modify the original objects
            var registeredThemes = angular.copy(fuseTheming.getRegisteredThemes());
            var registeredPalettes = angular.copy(fuseTheming.getRegisteredPalettes());

            // First, create a simplified object that stores
            // all registered themes and their colors

            // Iterate through registered themes
            angular.forEach(registeredThemes, function (registeredTheme)
            {
                themes[registeredTheme.name] = {};

                // Iterate through color types (primary, accent, warn & background)
                angular.forEach(registeredTheme.colors, function (colorType, colorTypeName)
                {
                    themes[registeredTheme.name][colorTypeName] = {
                        'name'  : colorType.name,
                        'levels': {
                            'default': {
                                'color'    : rgba(registeredPalettes[colorType.name][colorType.hues.default].value),
                                'contrast1': rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 1),
                                'contrast2': rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 2),
                                'contrast3': rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 3),
                                'contrast4': rgba(registeredPalettes[colorType.name][colorType.hues.default].contrast, 4)
                            },
                            'hue1'   : {
                                'color'    : rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].value),
                                'contrast1': rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].contrast, 1),
                                'contrast2': rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].contrast, 2),
                                'contrast3': rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].contrast, 3),
                                'contrast4': rgba(registeredPalettes[colorType.name][colorType.hues['hue-1']].contrast, 4)
                            },
                            'hue2'   : {
                                'color'    : rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].value),
                                'contrast1': rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].contrast, 1),
                                'contrast2': rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].contrast, 2),
                                'contrast3': rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].contrast, 3),
                                'contrast4': rgba(registeredPalettes[colorType.name][colorType.hues['hue-2']].contrast, 4)
                            },
                            'hue3'   : {
                                'color'    : rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].value),
                                'contrast1': rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].contrast, 1),
                                'contrast2': rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].contrast, 2),
                                'contrast3': rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].contrast, 3),
                                'contrast4': rgba(registeredPalettes[colorType.name][colorType.hues['hue-3']].contrast, 4)
                            }
                        }
                    };
                });
            });

            // Process themes one more time and then store them in the service for external use
            processAndStoreThemes(themes);

            // Iterate through simplified themes
            // object and create style variables
            var styleVars = {};

            // Iterate through registered themes
            angular.forEach(themes, function (theme, themeName)
            {
                styleVars = {};
                styleVars['@themeName'] = themeName;

                // Iterate through color types (primary, accent, warn & background)
                angular.forEach(theme, function (colorTypes, colorTypeName)
                {
                    // Iterate through color levels (default, hue1, hue2 & hue3)
                    angular.forEach(colorTypes.levels, function (colors, colorLevelName)
                    {
                        // Iterate through color name (color, contrast1, contrast2, contrast3 & contrast4)
                        angular.forEach(colors, function (color, colorName)
                        {
                            styleVars['@' + colorTypeName + ucfirst(colorLevelName) + ucfirst(colorName)] = color;
                        });
                    });
                });

                // Render styles
                render(styleVars);
            });
        }

        // ---------------------------
        //  INTERNAL HELPER FUNCTIONS
        // ---------------------------

        /**
         * Process and store themes for global use
         *
         * @param _themes
         */
        function processAndStoreThemes(_themes)
        {
            // Here we will go through every registered theme one more time
            // and try to simplify their objects as much as possible for
            // easier access to their properties.
            var themes = angular.copy(_themes);

            // Iterate through themes
            angular.forEach(themes, function (theme)
            {
                // Iterate through color types (primary, accent, warn & background)
                angular.forEach(theme, function (colorType, colorTypeName)
                {
                    theme[colorTypeName] = colorType.levels;
                    theme[colorTypeName].color = colorType.levels.default.color;
                    theme[colorTypeName].contrast1 = colorType.levels.default.contrast1;
                    theme[colorTypeName].contrast2 = colorType.levels.default.contrast2;
                    theme[colorTypeName].contrast3 = colorType.levels.default.contrast3;
                    theme[colorTypeName].contrast4 = colorType.levels.default.contrast4;
                    delete theme[colorTypeName].default;
                });
            });

            // Store themes and set selected theme for the first time
            fuseTheming.setThemesList(themes);

            // Remember selected theme.
            var selectedTheme = $cookies.get('selectedTheme');

            if ( selectedTheme )
            {
                fuseTheming.setActiveTheme(selectedTheme);
            }
            else
            {
                fuseTheming.setActiveTheme('default');
            }
        }


        /**
         * Render css files
         *
         * @param styleVars
         */
        function render(styleVars)
        {
            var cssTemplate = '/* Content hack because they wont fix */\n/* https://github.com/angular/material/pull/8067 */\n[md-theme="@themeName"] md-content.md-hue-1,\nmd-content.md-@themeName-theme.md-hue-1 {\n    color: @backgroundHue1Contrast1;\n    background-color: @backgroundHue1Color;\n}\n\n[md-theme="@themeName"] md-content.md-hue-2,\nmd-content.md-@themeName-theme.md-hue-2 {\n    color: @backgroundHue2Contrast1;\n    background-color: @backgroundHue2Color;\n}\n\n[md-theme="@themeName"] md-content.md-hue-3,\n md-content.md-@themeName-theme.md-hue-3 {\n    color: @backgroundHue3Contrast1;\n    background-color: @backgroundHue3Color;\n}\n\n/* Text Colors */\n[md-theme="@themeName"] a {\n    color: @accentDefaultColor;\n}\n\n[md-theme="@themeName"] .secondary-text,\n[md-theme="@themeName"] .icon {\n    color: @backgroundDefaultContrast2;\n}\n\n[md-theme="@themeName"] .hint-text,\n[md-theme="@themeName"] .disabled-text {\n    color: @backgroundDefaultContrast3;\n}\n\n[md-theme="@themeName"] .fade-text,\n[md-theme="@themeName"] .divider {\n    color: @backgroundDefaultContrast4;\n}\n\n/* Primary */\n[md-theme="@themeName"] .md-primary-bg {\n    background-color: @primaryDefaultColor;\n    color: @primaryDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg .secondary-text,\n[md-theme="@themeName"] .md-primary-bg .icon {\n    color: @primaryDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg .hint-text,\n[md-theme="@themeName"] .md-primary-bg .disabled-text {\n    color: @primaryDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg .fade-text,\n[md-theme="@themeName"] .md-primary-bg .divider {\n    color: @primaryDefaultContrast4;\n}\n\n/* Primary, Hue-1 */\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 {\n    background-color: @primaryHue1Color;\n    color: @primaryHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .icon {\n    color: @primaryHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .disabled-text {\n    color: @primaryHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .divider {\n    color: @primaryHue1Contrast4;\n}\n\n/* Primary, Hue-2 */\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 {\n    background-color: @primaryHue2Color;\n    color: @primaryHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .icon {\n    color: @primaryHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .disabled-text {\n    color: @primaryHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .divider {\n    color: @primaryHue2Contrast4;\n}\n\n/* Primary, Hue-3 */\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 {\n    background-color: @primaryHue3Color;\n    color: @primaryHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .icon {\n    color: @primaryHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .disabled-text {\n    color: @primaryHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .divider {\n    color: @primaryHue3Contrast4;\n}\n\n/* Primary foreground */\n[md-theme="@themeName"] .md-primary-fg {\n    color: @primaryDefaultColor !important;\n}\n\n/* Primary foreground, Hue-1 */\n[md-theme="@themeName"] .md-primary-fg.md-hue-1 {\n    color: @primaryHue1Color !important;\n}\n\n/* Primary foreground, Hue-2 */\n[md-theme="@themeName"] .md-primary-fg.md-hue-2 {\n    color: @primaryHue2Color !important;\n}\n\n/* Primary foreground, Hue-3 */\n[md-theme="@themeName"] .md-primary-fg.md-hue-3 {\n    color: @primaryHue3Color !important;\n}\n\n/* Accent */\n[md-theme="@themeName"] .md-accent-bg {\n    background-color: @accentDefaultColor;\n    color: @accentDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg .secondary-text,\n[md-theme="@themeName"] .md-accent-bg .icon {\n    color: @accentDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-accent-bg .hint-text,\n[md-theme="@themeName"] .md-accent-bg .disabled-text {\n    color: @accentDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg .fade-text,\n[md-theme="@themeName"] .md-accent-bg .divider {\n    color: @accentDefaultContrast4;\n}\n\n/* Accent, Hue-1 */\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 {\n    background-color: @accentHue1Color;\n    color: @accentHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .icon {\n    color: @accentHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .disabled-text {\n    color: @accentHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .divider {\n    color: @accentHue1Contrast4;\n}\n\n/* Accent, Hue-2 */\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 {\n    background-color: @accentHue2Color;\n    color: @accentHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .icon {\n    color: @accentHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .disabled-text {\n    color: @accentHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .divider {\n    color: @accentHue2Contrast4;\n}\n\n/* Accent, Hue-3 */\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 {\n    background-color: @accentHue3Color;\n    color: @accentHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .icon {\n    color: @accentHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .disabled-text {\n    color: @accentHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .divider {\n    color: @accentHue3Contrast4;\n}\n\n/* Accent foreground */\n[md-theme="@themeName"] .md-accent-fg {\n    color: @accentDefaultColor !important;\n}\n\n/* Accent foreground, Hue-1 */\n[md-theme="@themeName"] .md-accent-fg.md-hue-1 {\n    color: @accentHue1Color !important;\n}\n\n/* Accent foreground, Hue-2 */\n[md-theme="@themeName"] .md-accent-fg.md-hue-2 {\n    color: @accentHue2Color !important;\n}\n\n/* Accent foreground, Hue-3 */\n[md-theme="@themeName"] .md-accent-fg.md-hue-3 {\n    color: @accentHue3Color !important;\n}\n\n/* Warn */\n[md-theme="@themeName"] .md-warn-bg {\n    background-color: @warnDefaultColor;\n    color: @warnDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg .secondary-text,\n[md-theme="@themeName"] .md-warn-bg .icon {\n    color: @warnDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-warn-bg .hint-text,\n[md-theme="@themeName"] .md-warn-bg .disabled-text {\n    color: @warnDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg .fade-text,\n[md-theme="@themeName"] .md-warn-bg .divider {\n    color: @warnDefaultContrast4;\n}\n\n/* Warn, Hue-1 */\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 {\n    background-color: @warnHue1Color;\n    color: @warnHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .icon {\n    color: @warnHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .disabled-text {\n    color: @warnHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .divider {\n    color: @warnHue1Contrast4;\n}\n\n/* Warn, Hue-2 */\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 {\n    background-color: @warnHue2Color;\n    color: @warnHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .icon {\n    color: @warnHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .disabled-text {\n    color: @warnHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .divider {\n    color: @warnHue2Contrast4;\n}\n\n/* Warn, Hue-3 */\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 {\n    background-color: @warnHue3Color;\n    color: @warnHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .icon {\n    color: @warnHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .disabled-text {\n    color: @warnHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .divider {\n    color: @warnHue3Contrast4;\n}\n\n/* Warn foreground */\n[md-theme="@themeName"] .md-warn-fg {\n    color: @warnDefaultColor !important;\n}\n\n/* Warn foreground, Hue-1 */\n[md-theme="@themeName"] .md-warn-fg.md-hue-1 {\n    color: @warnHue1Color !important;\n}\n\n/* Warn foreground, Hue-2 */\n[md-theme="@themeName"] .md-warn-fg.md-hue-2 {\n    color: @warnHue2Color !important;\n}\n\n/* Warn foreground, Hue-3 */\n[md-theme="@themeName"] .md-warn-fg.md-hue-3 {\n    color: @warnHue3Color !important;\n}\n\n/* Background */\n[md-theme="@themeName"] .md-background-bg {\n    background-color: @backgroundDefaultColor;\n    color: @backgroundDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg .secondary-text,\n[md-theme="@themeName"] .md-background-bg .icon {\n    color: @backgroundDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-background-bg .hint-text,\n[md-theme="@themeName"] .md-background-bg .disabled-text {\n    color: @backgroundDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg .fade-text,\n[md-theme="@themeName"] .md-background-bg .divider {\n    color: @backgroundDefaultContrast4;\n}\n\n/* Background, Hue-1 */\n[md-theme="@themeName"] .md-background-bg.md-hue-1 {\n    background-color: @backgroundHue1Color;\n    color: @backgroundHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .icon {\n    color: @backgroundHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .disabled-text {\n    color: @backgroundHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .divider {\n    color: @backgroundHue1Contrast4;\n}\n\n/* Background, Hue-2 */\n[md-theme="@themeName"] .md-background-bg.md-hue-2 {\n    background-color: @backgroundHue2Color;\n    color: @backgroundHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .icon {\n    color: @backgroundHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .disabled-text {\n    color: @backgroundHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .divider {\n    color: @backgroundHue2Contrast4;\n}\n\n/* Background, Hue-3 */\n[md-theme="@themeName"] .md-background-bg.md-hue-3 {\n    background-color: @backgroundHue3Color;\n    color: @backgroundHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .icon {\n    color: @backgroundHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .disabled-text {\n    color: @backgroundHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .divider {\n    color: @backgroundHue3Contrast4;\n}\n\n/* Background foreground */\n[md-theme="@themeName"] .md-background-fg {\n    color: @backgroundDefaultColor !important;\n}\n\n/* Background foreground, Hue-1 */\n[md-theme="@themeName"] .md-background-fg.md-hue-1 {\n    color: @backgroundHue1Color !important;\n}\n\n/* Background foreground, Hue-2 */\n[md-theme="@themeName"] .md-background-fg.md-hue-2 {\n    color: @backgroundHue2Color !important;\n}\n\n/* Background foreground, Hue-3 */\n[md-theme="@themeName"] .md-background-fg.md-hue-3 {\n    color: @backgroundHue3Color !important;\n}';

            var regex = new RegExp(Object.keys(styleVars).join('|'), 'gi');
            var css = cssTemplate.replace(regex, function (matched)
            {
                return styleVars[matched];
            });

            var headEl = angular.element('head');
            var styleEl = angular.element('<style type="text/css"></style>');
            styleEl.html(css);
            headEl.append(styleEl);
        }

        /**
         * Convert color array to rgb/rgba
         * Also apply contrasts if needed
         *
         * @param color
         * @param _contrastLevel
         * @returns {string}
         */
        function rgba(color, _contrastLevel)
        {
            var contrastLevel = _contrastLevel || false;

            // Convert 255,255,255,0.XX to 255,255,255
            // According to Google's Material design specs, white primary
            // text must have opacity of 1 and we will fix that here
            // because Angular Material doesn't care about that spec
            if ( color.length === 4 && color[0] === 255 && color[1] === 255 && color[2] === 255 )
            {
                color.splice(3, 4);
            }

            // If contrast level provided, apply it to the current color
            if ( contrastLevel )
            {
                color = applyContrast(color, contrastLevel);
            }

            // Convert color array to color string (rgb/rgba)
            if ( color.length === 3 )
            {
                return 'rgb(' + color.join(',') + ')';
            }
            else if ( color.length === 4 )
            {
                return 'rgba(' + color.join(',') + ')';
            }
            else
            {
                $log.error('Invalid number of arguments supplied in the color array: ' + color.length + '\n' + 'The array must have 3 or 4 colors.');
            }
        }

        /**
         * Apply given contrast level to the given color
         *
         * @param color
         * @param contrastLevel
         */
        function applyContrast(color, contrastLevel)
        {
            var contrastLevels = {
                'white': {
                    '1': '1',
                    '2': '0.7',
                    '3': '0.3',
                    '4': '0.12'
                },
                'black': {
                    '1': '0.87',
                    '2': '0.54',
                    '3': '0.26',
                    '4': '0.12'
                }
            };

            // If white
            if ( color[0] === 255 && color[1] === 255 && color[2] === 255 )
            {
                color[3] = contrastLevels.white[contrastLevel];
            }
            // If black
            else if ( color[0] === 0 && color[1] === 0 && color[2] === 0 )
            {
                color[3] = contrastLevels.black[contrastLevel];
            }

            return color;
        }

        /**
         * Uppercase first
         */
        function ucfirst(string)
        {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }

})();
(function ()
{
    'use strict';

    MsThemeOptionsController.$inject = ["$cookies", "fuseTheming"];
    msThemeOptions.$inject = ["$mdSidenav"];
    angular
        .module('app.core')
        .controller('MsThemeOptionsController', MsThemeOptionsController)
        .directive('msThemeOptions', msThemeOptions);

    /** @ngInject */
    function MsThemeOptionsController($cookies, fuseTheming)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;

        vm.layoutModes = [
            {
                label: 'Boxed',
                value: 'boxed'
            },
            {
                label: 'Wide',
                value: 'wide'
            }
        ];
        vm.layoutStyles = [
            {
                label : 'Vertical Navigation',
                value : 'verticalNavigation',
                figure: '/assets/images/theme-options/vertical-nav.jpg'
            },
            {
                label : 'Vertical Navigation with Fullwidth Toolbar',
                value : 'verticalNavigationFullwidthToolbar',
                figure: '/assets/images/theme-options/vertical-nav-with-full-toolbar.jpg'
            },
            {
                label : 'Vertical Navigation with Fullwidth Toolbar 2',
                value : 'verticalNavigationFullwidthToolbar2',
                figure: '/assets/images/theme-options/vertical-nav-with-full-toolbar-2.jpg'
            },
            {
                label : 'Horizontal Navigation',
                value : 'horizontalNavigation',
                figure: '/assets/images/theme-options/horizontal-nav.jpg'
            },
            {
                label : 'Content with Toolbar',
                value : 'contentWithToolbar',
                figure: '/assets/images/theme-options/content-with-toolbar.jpg'
            },
            {
                label : 'Content Only',
                value : 'contentOnly',
                figure: '/assets/images/theme-options/content-only.jpg'
            },
        ];

        vm.layoutMode = 'wide';
        vm.layoutStyle = $cookies.get('layoutStyle') || 'verticalNavigation';

        // Methods
        vm.setActiveTheme = setActiveTheme;
        vm.getActiveTheme = getActiveTheme;
        vm.updateLayoutMode = updateLayoutMode;
        vm.updateLayoutStyle = updateLayoutStyle;

        //////////

        /**
         * Set active theme
         *
         * @param themeName
         */
        function setActiveTheme(themeName)
        {
            fuseTheming.setActiveTheme(themeName);
        }

        /**
         * Get active theme
         *
         * @returns {service.themes.active|{name, theme}}
         */
        function getActiveTheme()
        {
            return fuseTheming.themes.active;
        }

        /**
         * Update layout mode
         */
        function updateLayoutMode()
        {
            var bodyEl = angular.element('body');

            // Update class on body element
            bodyEl.toggleClass('boxed', (vm.layoutMode === 'boxed'));
        }

        /**
         * Update layout style
         */
        function updateLayoutStyle()
        {
            // Update the cookie
            $cookies.put('layoutStyle', vm.layoutStyle);

            // Reload the page to apply the changes
            location.reload();
        }
    }

    /** @ngInject */
    function msThemeOptions($mdSidenav)
    {
        return {
            restrict   : 'E',
            scope      : {},
            controller : 'MsThemeOptionsController as vm',
            templateUrl: 'app/core/theme-options/theme-options.html',
            compile    : function (tElement)
            {
                tElement.addClass('ms-theme-options');

                return function postLink(scope)
                {
                    /**
                     * Toggle options sidenav
                     */
                    function toggleOptionsSidenav()
                    {
                        // Toggle the independence theme options panel
                        $mdSidenav('independence-theme-options').toggle();
                    }

                    // Expose the toggle function
                    scope.toggleOptionsSidenav = toggleOptionsSidenav;
                };
            }
        };
    }
})();
(function ()
{
    'use strict';

    msUtils.$inject = ["$window"];
    angular
        .module('app.core')
        .factory('msUtils', msUtils);

    /** @ngInject */
    function msUtils($window)
    {
        // Private variables
        var mobileDetect = new MobileDetect($window.navigator.userAgent),
            browserInfo = null;

        var service = {
            exists       : exists,
            detectBrowser: detectBrowser,
            guidGenerator: guidGenerator,
            isMobile     : isMobile,
            toggleInArray: toggleInArray,
            getIndexByArray: getIndexByArray
        };

        return service;

        //////////

        /**
         * Check if item exists in a list
         *
         * @param item
         * @param list
         * @returns {boolean}
         */
        function exists(item, list)
        {
            return list.indexOf(item) > -1;
        }

        /**
         * Get Index of key in object array
         * @param {*} data 
         * @param {*} key 
         * @param {*} value 
         */
        function getIndexByArray(data, key, value) {
            for (var i = 0; i < data.length; i++) {
                if (data[i][key] == value) {
                    return i;
                }
            }
            return -1;
        }

        /**
         * Returns browser information
         * from user agent data
         *
         * Found at http://www.quirksmode.org/js/detect.html
         * but modified and updated to fit for our needs
         */
        function detectBrowser()
        {
            // If we already tested, do not test again
            if ( browserInfo )
            {
                return browserInfo;
            }

            var browserData = [
                {
                    string       : $window.navigator.userAgent,
                    subString    : 'Edge',
                    versionSearch: 'Edge',
                    identity     : 'Edge'
                },
                {
                    string   : $window.navigator.userAgent,
                    subString: 'Chrome',
                    identity : 'Chrome'
                },
                {
                    string       : $window.navigator.userAgent,
                    subString    : 'OmniWeb',
                    versionSearch: 'OmniWeb/',
                    identity     : 'OmniWeb'
                },
                {
                    string       : $window.navigator.vendor,
                    subString    : 'Apple',
                    versionSearch: 'Version',
                    identity     : 'Safari'
                },
                {
                    prop    : $window.opera,
                    identity: 'Opera'
                },
                {
                    string   : $window.navigator.vendor,
                    subString: 'iCab',
                    identity : 'iCab'
                },
                {
                    string   : $window.navigator.vendor,
                    subString: 'KDE',
                    identity : 'Konqueror'
                },
                {
                    string   : $window.navigator.userAgent,
                    subString: 'Firefox',
                    identity : 'Firefox'
                },
                {
                    string   : $window.navigator.vendor,
                    subString: 'Camino',
                    identity : 'Camino'
                },
                {
                    string   : $window.navigator.userAgent,
                    subString: 'Netscape',
                    identity : 'Netscape'
                },
                {
                    string       : $window.navigator.userAgent,
                    subString    : 'MSIE',
                    identity     : 'Explorer',
                    versionSearch: 'MSIE'
                },
                {
                    string       : $window.navigator.userAgent,
                    subString    : 'Trident/7',
                    identity     : 'Explorer',
                    versionSearch: 'rv'
                },
                {
                    string       : $window.navigator.userAgent,
                    subString    : 'Gecko',
                    identity     : 'Mozilla',
                    versionSearch: 'rv'
                },
                {
                    string       : $window.navigator.userAgent,
                    subString    : 'Mozilla',
                    identity     : 'Netscape',
                    versionSearch: 'Mozilla'
                }
            ];

            var osData = [
                {
                    string   : $window.navigator.platform,
                    subString: 'Win',
                    identity : 'Windows'
                },
                {
                    string   : $window.navigator.platform,
                    subString: 'Mac',
                    identity : 'Mac'
                },
                {
                    string   : $window.navigator.platform,
                    subString: 'Linux',
                    identity : 'Linux'
                },
                {
                    string   : $window.navigator.platform,
                    subString: 'iPhone',
                    identity : 'iPhone'
                },
                {
                    string   : $window.navigator.platform,
                    subString: 'iPod',
                    identity : 'iPod'
                },
                {
                    string   : $window.navigator.platform,
                    subString: 'iPad',
                    identity : 'iPad'
                },
                {
                    string   : $window.navigator.platform,
                    subString: 'Android',
                    identity : 'Android'
                }
            ];

            var versionSearchString = '';

            function searchString(data)
            {
                for ( var i = 0; i < data.length; i++ )
                {
                    var dataString = data[i].string;
                    var dataProp = data[i].prop;

                    versionSearchString = data[i].versionSearch || data[i].identity;

                    if ( dataString )
                    {
                        if ( dataString.indexOf(data[i].subString) !== -1 )
                        {
                            return data[i].identity;

                        }
                    }
                    else if ( dataProp )
                    {
                        return data[i].identity;
                    }
                }
            }

            function searchVersion(dataString)
            {
                var index = dataString.indexOf(versionSearchString);

                if ( index === -1 )
                {
                    return;
                }

                return parseInt(dataString.substring(index + versionSearchString.length + 1));
            }

            var browser = searchString(browserData) || 'unknown-browser';
            var version = searchVersion($window.navigator.userAgent) || searchVersion($window.navigator.appVersion) || 'unknown-version';
            var os = searchString(osData) || 'unknown-os';

            // Prepare and store the object
            browser = browser.toLowerCase();
            version = browser + '-' + version;
            os = os.toLowerCase();

            browserInfo = {
                browser: browser,
                version: version,
                os     : os
            };

            return browserInfo;
        }

        /**
         * Generates a globally unique id
         *
         * @returns {*}
         */
        function guidGenerator()
        {
            var S4 = function ()
            {
                return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
            };
            return (S4() + S4() + S4() + S4() + S4() + S4());
        }

        /**
         * Return if current device is a
         * mobile device or not
         */
        function isMobile()
        {
            return mobileDetect.mobile();
        }

        /**
         * Toggle in array (push or splice)
         *
         * @param item
         * @param array
         */
        function toggleInArray(item, array)
        {
            if ( array.indexOf(item) === -1 )
            {
                array.push(item);
            }
            else
            {
                array.splice(array.indexOf(item), 1);
            }
        }
    }
}());
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .provider('msApi', msApiProvider);

    /** @ngInject **/
    function msApiProvider()
    {
        /* ----------------- */
        /* Provider          */
        /* ----------------- */
        var provider = this;

        // Inject the $log service
        var $log = angular.injector(['ng']).get('$log');

        // Data
        var baseUrl = '';
        var api = [];

        // Methods
        provider.setBaseUrl = setBaseUrl;
        provider.getBaseUrl = getBaseUrl;
        provider.getApiObject = getApiObject;
        provider.register = register;

        //////////

        /**
         * Set base url for API endpoints
         *
         * @param url {string}
         */
        function setBaseUrl(url)
        {
            baseUrl = url;
        }

        /**
         * Return the base url
         *
         * @returns {string}
         */
        function getBaseUrl()
        {
            return baseUrl;
        }

        /**
         * Return the api object
         *
         * @returns {object}
         */
        function getApiObject()
        {
            return api;
        }

        /**
         * Register API endpoint
         *
         * @param key
         * @param resource
         */
        function register(key, resource)
        {
            if ( !angular.isString(key) )
            {
                $log.error('"path" must be a string (eg. `dashboard.project`)');
                return;
            }

            if ( !angular.isArray(resource) )
            {
                $log.error('"resource" must be an array and it must follow $resource definition');
                return;
            }

            // Store the API object
            api[key] = {
                url          : baseUrl + (resource[0] || ''),
                paramDefaults: resource[1] || [],
                actions      : resource[2] || [],
                options      : resource[3] || {}
            };
        }

        /* ----------------- */
        /* Service           */
        /* ----------------- */
        this.$get = ["$log", "$q", "$resource", "$rootScope", function ($log, $q, $resource, $rootScope)
        {
            // Data

            // Methods
            var service = {
                setBaseUrl: setBaseUrl,
                getBaseUrl: getBaseUrl,
                register  : register,
                resolve   : resolve,
                request   : request
            };

            return service;

            //////////

            /**
             * Resolve an API endpoint
             *
             * @param action {string}
             * @param parameters {object}
             * @returns {promise|boolean}
             */
            function resolve(action, parameters)
            {
                // Emit an event
                $rootScope.$broadcast('msApi::resolveStart');
                
                var actionParts = action.split('@'),
                    resource = actionParts[0],
                    method = actionParts[1],
                    params = parameters || {};

                if ( !resource || !method )
                {
                    $log.error('msApi.resolve requires correct action parameter (resourceName@methodName)');
                    return false;
                }

                // Create a new deferred object
                var deferred = $q.defer();

                // Get the correct resource definition from api object
                var apiObject = api[resource];

                if ( !apiObject )
                {
                    $log.error('Resource "' + resource + '" is not defined in the api service!');
                    deferred.reject('Resource "' + resource + '" is not defined in the api service!');
                }
                else
                {
                    // Generate the $resource object based on the stored API object
                    var resourceObject = $resource(apiObject.url, apiObject.paramDefaults, apiObject.actions, apiObject.options);

                    // Make the call...
                    resourceObject[method](params,

                        // Success
                        function (response)
                        {
                            deferred.resolve(response);

                            // Emit an event
                            $rootScope.$broadcast('msApi::resolveSuccess');
                        },

                        // Error
                        function (response)
                        {
                            deferred.reject(response);

                            // Emit an event
                            $rootScope.$broadcast('msApi::resolveError');
                        }
                    );
                }

                // Return the promise
                return deferred.promise;
            }

            /**
             * Make a request to an API endpoint
             *
             * @param action {string}
             * @param [parameters] {object}
             * @param [success] {function}
             * @param [error] {function}
             *
             * @returns {promise|boolean}
             */
            function request(action, parameters, success, error)
            {
                // Emit an event
                $rootScope.$broadcast('msApi::requestStart');
                
                var actionParts = action.split('@'),
                    resource = actionParts[0],
                    method = actionParts[1],
                    params = parameters || {};

                if ( !resource || !method )
                {
                    $log.error('msApi.resolve requires correct action parameter (resourceName@methodName)');
                    return false;
                }

                // Create a new deferred object
                var deferred = $q.defer();

                // Get the correct resource definition from api object
                var apiObject = api[resource];

                if ( !apiObject )
                {
                    $log.error('Resource "' + resource + '" is not defined in the api service!');
                    deferred.reject('Resource "' + resource + '" is not defined in the api service!');
                }
                else
                {
                    // Generate the $resource object based on the stored API object
                    var resourceObject = $resource(apiObject.url, apiObject.paramDefaults, apiObject.actions, apiObject.options);

                    // Make the call...
                    resourceObject[method](params,

                        // SUCCESS
                        function (response)
                        {
                            // Emit an event
                            $rootScope.$broadcast('msApi::requestSuccess');
                            
                            // Resolve the promise
                            deferred.resolve(response);

                            // Call the success function if there is one
                            if ( angular.isDefined(success) && angular.isFunction(success) )
                            {
                                success(response);
                            }
                        },

                        // ERROR
                        function (response)
                        {
                            // Emit an event
                            $rootScope.$broadcast('msApi::requestError');
                            
                            // Reject the promise
                            deferred.reject(response);

                            // Call the error function if there is one
                            if ( angular.isDefined(error) && angular.isFunction(error) )
                            {
                                error(response);
                            }
                        }
                    );
                }

                // Return the promise
                return deferred.promise;
            }
        }];
    }
})();
(function ()
{
    'use strict';

    firebaseUtils.$inject = ["$window", "$q", "$firebaseArray", "$firebaseObject", "auth"];
    angular
        .module('app.core')
        .factory('firebaseUtils', firebaseUtils);

    /** @ngInject */
    function firebaseUtils($window, $q, $firebaseArray, $firebaseObject, auth)
    {
        // Private variables
        var mobileDetect = new MobileDetect($window.navigator.userAgent),
            browserInfo = null;

        var service = {
            fetchList: fetchList,
            updateData: updateData,
            getItemByRef: getItemByRef,
            addData     : addData,
            getListSum: getListSum
        };

        return service;

        //////////

        /**
         * Return list based on firebase ref
         *
         * @param item
         * @param list
         * @returns {boolean}
         */
        function fetchList(ref)
        {
            var defer = $q.defer(),
                list = $firebaseArray(ref);
            
            list.$loaded().then(function (data) {
                defer.resolve(data);
            }).catch(function (err) {
                defer.reject(err);
            });

            return defer.promise;
        }

        /**
         * Update firebase ref
         */
        function updateData(ref, updateData)
        {   
            var defer = $q.defer();
            //updateData.updateId = auth.$getAuth().uid;
            //updateData.updateDate = (new Date()).toString();
            ref.update(updateData, function(err) { 
                if(err) {
                    defer.reject(err);
                } else {
                    defer.resolve(updateData);
                }
            });

            return defer.promise;
        }   

        /**
         * get firebase item by id
         */
        function getItemByRef(ref)
        {   
            var defer = $q.defer(),
                obj = $firebaseObject(ref);

            obj.$loaded().then(function(data) {
                defer.resolve(data);
            }).catch(function(err) {
                defer.reject(err);
            });

            return defer.promise;
        }   

        /**
         * Add data
         *
         */
        function addData(ref, saveData)
        {
            var def = $q.defer();
            //saveData.addId = auth.$getAuth().uid;
            //saveData.addDate = (new Date()).toString();
            $firebaseArray(ref).$add(saveData).then(function(ref) {
                if (ref.key) {
                    def.resolve(ref.key);
                }
            }).catch(function(err) {
                def.reject(err);
            });

            return def.promise;
        }

        /**
         * Delete data
         */
        function deleteData(ref, key) {
            var def = $q.defer();

            var list = $firebaseArray(ref),
                item = list[key];

             list.$remove(item).then(function(ref) {
                if (ref.key) {
                    def.resolve(ref.key);
                }
            }).catch(function(err) {
                def.reject(err);
            });

            return def.promise;
        }

        /**
         * Get sum of records
         * @param {*} ref 
         * @param {*} key 
         */
        function getListSum(ref, key) {
            var defer = $q.defer();
            fetchList(ref).then(function(data) {
                var sum = 0;
                data.forEach(function(record) {
                    sum += record[key];
                });
                defer.resolve(sum);
            });
            return defer.promise;
        }
    }
}());
(function () {
    'use strict';

    dxUtils.$inject = ["$window", "$q"];
    angular
        .module('app.core')
        .factory('dxUtils', dxUtils);

    /** @ngInject */
    function dxUtils($window, $q) {
        // Private variables

        var service = {
            createGrid: createGrid
        };

        return service;

        //////////

        /**
         * Return default grid Configuration
         */
        function createGrid(datasource) {
            var gridOptions = {
                loadPanel: {
                    enabled: true
                },
                scrolling: {
                    mode: 'virtual'
                },
                headerFilter: {
                    visible: false
                },
                searchPanel: {
                    visible: true,
                    width: 240,
                    placeholder: 'Search...'
                },
                columnChooser: {
                    enabled: true
                },
                editing: {
                    allowAdding: true,
                    allowUpdating: true,
                    allowDeleting: true,
                    mode: 'batch'
                },
                selection: {
                    mode: 'multiple',
                    showCheckBoxesMode: 'always'
                },
                onContentReady: function (e) {
                    e.component.option('loadPanel.enabled', false);
                },
                showColumnLines: false,
                showRowLines: true,
                showBorders: false,
                rowAlternationEnabled: false,
                columnAutoWidth: true,
                sorting: {
                    mode: 'none'
                },
                height: 520
            };
            return gridOptions;

        }


    }
}());
(function () {
    'use strict';

    config.$inject = ["$rootScope", "$window", "$q", "firebaseUtils", "authService", "$compile"];
    angular
        .module('app.core')
        .factory('config', config);

    /** @ngInject */
    function config($rootScope, $window, $q, firebaseUtils, authService, $compile) {
        // Private variables
        var tenantId = authService.getCurrentTenant(),
            scope = $rootScope.$new();

        var service = {
            customerGridCols: customerGridCols,
            bulkbuyCustomerGridCols: bulkbuyCustomerGridCols,
            bookingGridCols: bookingGridCols,
            beerGridCols: beerGridCols,
            kegGridCols: kegGridCols,
            vendingGridCols: vendingGridCols,
            recordGridCols: recordGridCols,
            bulkbuyGridCols: bulkbuyGridCols,
            bulkBookingGridCols: bulkBookingGridCols,
            getIndexByArray: getIndexByArray,
            redeemGridCols: offerRedeemGridCols
        };

        return service;

        //////////

        function bulkbuyCustomerGridCols() {


        }

        function offerRedeemGridCols(tenantId, customers, beers, offers) {
            var gridCols = [{
                dataField: 'date',
                caption: 'Date',
                dataType: 'date',
                validationRules: [{
                    type: 'required',
                    message: 'Date is required'
                }]
            }, {
                dataField: 'customerSelected',
                caption: 'Name',
                allowUpdating: false,
                lookup: {
                    dataSource: customers,
                    displayExpr: "name",
                    valueExpr: "$id",
                    searchExpr: ["name", "phone", "HHID"]
                },
                groupIndex: 0
            }, {
                dataField: 'HHID',
                caption: 'HopHead ID',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].HHID;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'description',
                caption: 'Offer',
                calculateCellValue: function (data) {
                    var index = getIndexByArray(offers, '$id', data.offerId);
                    if (index > -1) {
                        return offers[index].description;
                    } else {
                        return '';
                    }
                }
            },{
                dataField: 'phone',
                caption: 'Phone',
                dataType: 'number',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].phone;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'invoice',
                caption: 'Invoice'
            }];
            return gridCols;
        }



        /**
         * Return customer columns Configuration
         */
        function customerGridCols() {
            var gridCols = [{
                dataField: 'name',
                caption: 'Name',
                validationRules: [{
                    type: 'required',
                    message: 'Name is required'
                }],
            }, {
                dataField: 'phone',
                caption: 'Phone',
                dataType: 'number',
                validationRules: [{
                    type: 'required',
                    message: 'Phone number is required'
                }]
            }, {
                dataField: 'HHID',
                caption: 'HopHead ID',
                validationRules: [{
                    type: 'required',
                    message: 'HHID is required'
                }]
            }, {
                dataField: 'dob',
                caption: 'Date of Birth',
                dataType: 'date'
            }, {
                dataField: 'anniversary',
                caption: 'Date of Anniversary',
                dataType: 'date'
            }, {
                dataField: 'email',
                caption: 'Email',
                validationRules: [{
                    type: 'email',
                    message: 'Please enter valid e-mail address'
                }]
            }, {
                dataField: 'adress',
                caption: 'Address'
            }, {
                dataField: 'city',
                caption: 'City'
            }, {
                dataField: 'state',
                caption: 'State'
            }, {
                dataField: 'zipcode',
                caption: 'ZIP/Pincode',
                editorOptions: {
                    mask: '000000'
                }
            }, {
                dataField: 'membersSince',
                caption: 'Member since',
                dataType: 'date',
                validationRules: [{
                    type: 'required',
                    message: 'Field is required'
                }]

            }];
            return gridCols;
        }

        function bulkBookingGridCols(tenantId, customers, beers) {

            var gridCols = [{
                dataField: 'date',
                caption: 'Date',
                dataType: 'date',
                validationRules: [{
                    type: 'required',
                    message: 'Date is required'
                }]
            }, {
                dataField: 'customerSelected',
                caption: 'Customer',
                groupIndex: 0,
                lookup: {
                    dataSource: customers,
                    displayExpr: "name",
                    valueExpr: "$id",
                    searchExpr: ["name", "phone", "HHID"],
                    itemTemplate: function (itemData) {
                        console.log(itemData);
                    }
                },
                allowUpdating: false
            }, {
                dataField: 'phone',
                caption: 'Phone',
                allowEditing: false,
                dataType: 'number',
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].phone;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'email',
                caption: 'Email',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].email;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: "quantity",
                caption: "Units (0.5 Ltrs per unit)",
                width: 125,
                dataType: 'number'
            }];
            return gridCols;
        }

        function bookingGridCols(tenantId, customers, beers) {
            var beerListSource = new DevExpress.data.CustomStore({
                load: function (loadOptions) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-beers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                byKey: function (key) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-beers').child(tenantId).child(key);
                    firebaseUtils.getItemByRef(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                }
            });

            var customerListSource = new DevExpress.data.CustomStore({
                load: function (loadOptions) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-customers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                byKey: function (key) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-customers').child(tenantId).child(key);
                    firebaseUtils.getItemByRef(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                }
            });
            var gridCols = [{
                dataField: 'date',
                caption: 'Date',
                dataType: 'date',
                validationRules: [{
                    type: 'required',
                    message: 'Date is required'
                }]
            }, {
                dataField: 'beerSelected',
                caption: 'Beer',
                lookup: {
                    dataSource: beers,
                    displayExpr: "name",
                    valueExpr: "$id",
                }
            }, {
                dataField: 'customerSelected',
                caption: 'Name',
                lookup: {
                    dataSource: customers,
                    displayExpr: "name",
                    valueExpr: "$id",
                    searchExpr: ["name", "phone", "HHID"],
                    itemTemplate: function (itemData) {
                        console.log(itemData);
                    }
                }
            }, {
                dataField: 'HHID',
                caption: 'HopHead ID',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].HHID;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'phone',
                caption: 'Phone',
                dataType: 'number',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].phone;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: "quantity",
                caption: "quantity (Ltrs)",
                width: 125,
                lookup: {
                    dataSource: [{
                        id: 0,
                        quantity: 3
                    }, {
                        id: 1,
                        quantity: 5
                    }, {
                        id: 2,
                        quantity: 10
                    }, {
                        id: 3,
                        quantity: 15
                    }],
                    displayExpr: "quantity",
                    valueExpr: "id"
                }
            },];
            return gridCols;
        }

        function bulkbuyGridCols(tenantId, customers, beers) {
            var gridCols = [{
                dataField: 'date',
                caption: 'Date',
                dataType: 'date',
                validationRules: [{
                    type: 'required',
                    message: 'Date is required'
                }]
            },
            {
                dataField: 'invoice',
                caption: 'Invoice',
                dataType: 'string',
                validationRules: [{
                    type: 'required',
                    message: 'Invoice number is required'
                }]
            }, {
                dataField: 'customerSelected',
                caption: 'Name',
                lookup: {
                    dataSource: customers,
                    displayExpr: "name",
                    valueExpr: "$id",
                    searchExpr: ["name", "phone", "email"],
                    itemTemplate: function (itemData) {
                        console.log(itemData);
                    }
                },
                allowUpdating: false,
                groupIndex: 0
            }, {
                dataField: 'phone',
                caption: 'Phone',
                allowEditing: false,
                dataType: 'number',
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].phone;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'email',
                caption: 'Email',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].email;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'bookingName',
                caption: 'Booked By'
            }, {
                dataField: "quantity",
                caption: "Units (0.5 Ltrs per unit)",
                width: 125,
                lookup: {
                    dataSource: [{
                        id: 0,
                        quantity: 6
                    }, {
                        id: 1,
                        quantity: 10
                    }, {
                        id: 2,
                        quantity: 20
                    }],
                    displayExpr: "quantity",
                    valueExpr: "id"
                }
            }, {
                dataField: "balancedQuantity",
                caption: "Balance Units (0.5 Ltrs per unit)",
                width: 125,
                allowEditing: false
            }, {
                dataField: "expiryDate",
                caption: "Expiry Date",
                allowEditing: false,
                dataType: 'date'
            }];
            return gridCols;
        }

        function recordGridCols(tenantId, customers, beers) {
            var gridCols = [{
                dataField: 'date',
                caption: 'Date',
                dataType: 'date',
                validationRules: [{
                    type: 'required',
                    message: 'Date is required'
                }]
            }, {
                dataField: 'customerSelected',
                caption: 'Name',
                allowUpdating: false,
                lookup: {
                    dataSource: customers,
                    displayExpr: "name",
                    valueExpr: "$id",
                    searchExpr: ["name", "phone", "HHID"]
                }
            }, {
                dataField: 'HHID',
                caption: 'HopHead ID',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].HHID;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'phone',
                caption: 'Phone',
                dataType: 'number',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].phone;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'invoice',
                caption: 'Invoice'
            }, {
                dataField: 'numberOfOffers',
                caption: 'Redeemed Offers',
                calculateCellValue: function(data) {
                    if(data.offers && data.offers.length>0) {
                        return data.offers.length;
                    } else {
                        return 0;
                    }
                }
            },{
                dataField: 'amountOnBeer',
                dataType: 'number',
                caption: 'Amount on Beer',
                calculateCellValue: function (data) {
                    return data.amountOnBeer ? data.amountOnBeer : 0
                }
            }, {
                dataField: 'amountOnFood',
                dataType: 'number',
                caption: 'Amount on Food',
                calculateCellValue: function (data) {
                    return data.amountOnFood ? data.amountOnFood : 0
                }
            }, {
                dataField: 'amountOnLiquor',
                caption: 'Amount On Liquor',
                dataType: 'number',
                calculateCellValue: function (data) {
                    return data.amountOnLiquor ? data.amountOnLiquor : 0
                }
            }, {
                dataField: 'total',
                caption: 'Total',
                calculateCellValue: function (data) {
                    var count = 0;
                    if (data.amountOnBeer) {
                        count = count + data.amountOnBeer;
                    }
                    if (data.amountOnFood) {
                        count = count + data.amountOnFood;
                    }
                    if (data.amountOnLiquor) {
                        count = count + data.amountOnLiquor
                    }
                    return count;
                }
            }];
            return gridCols;
        }

        function vendingGridCols(tenantId, customers, beers) {
            var beerListSource = new DevExpress.data.CustomStore({
                load: function (loadOptions) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-beers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                byKey: function (key) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-beers').child(tenantId).child(key);
                    firebaseUtils.getItemByRef(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                }
            });

            var customerListSource = new DevExpress.data.CustomStore({
                load: function (loadOptions) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-customers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                byKey: function (key) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-customers').child(tenantId).child(key);
                    firebaseUtils.getItemByRef(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                }
            });
            var gridCols = [{
                dataField: 'date',
                caption: 'Date',
                dataType: 'date',
                validationRules: [{
                    type: 'required',
                    message: 'Date is required'
                }]
            }, {
                dataField: 'invoice',
                caption: 'Invoice #'
            }, {
                dataField: 'customerSelected',
                caption: 'Name',
                lookup: {
                    dataSource: customers,
                    displayExpr: "name",
                    valueExpr: "$id",
                    searchExpr: ["name", "phone", "HHID"]
                }
            }, {
                dataField: 'HHID',
                caption: 'HopHead ID',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].HHID;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'phone',
                caption: 'Phone',
                dataType: 'number',
                allowEditing: false,
                calculateCellValue: function (data) {
                    var index = getIndexByArray(customers, '$id', data.customerSelected);
                    if (index > -1) {
                        return customers[index].phone;
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: "quantity",
                caption: "quantity (Ltrs)",
                width: 125
            }];
            return gridCols;
        }


        function beerGridCols() {
            var beerGridCols = [{
                dataField: 'name',
                caption: 'Name',
                validationRules: [{
                    type: 'required',
                    message: 'Name is required'
                }]
            }, {
                dataField: 'category',
                caption: 'Category',
                validationRules: [{
                    type: 'required',
                    message: 'Category is required'
                }],
                lookup: {
                    dataSource: [{
                        id: 1,
                        name: 'Regular'
                    }, {
                        id: 2,
                        name: 'Brewers Select'
                    }],
                    displayExpr: 'name',
                    valueExpr: 'id'
                }
            },
            {
                dataField: 'code',
                caption: 'CODE',
                validationRules: [{
                    type: 'required',
                    message: 'Code is required'
                }]
            }];

            return beerGridCols;
        }

        function kegGridCols(tenantId) {
            var beerListSource = new DevExpress.data.CustomStore({
                load: function (loadOptions) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-beers').child(tenantId).orderByChild('deactivated').equalTo(null);
                    firebaseUtils.fetchList(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                },
                byKey: function (key) {
                    var defer = $q.defer(),
                        ref = rootRef.child('tenant-beers').child(tenantId).child(key);
                    firebaseUtils.getItemByRef(ref).then(function (data) {
                        defer.resolve(data);
                    });
                    return defer.promise;
                }
            });

            var kegGridCols = [{
                dataField: 'BrewBatchDate',
                caption: 'Date',
                dataType: 'date'
            }, {
                dataField: 'isBrewSelected',
                caption: 'Is Brew Selected',
                dataType: 'boolean'
            },
            {
                dataField: 'beerSelected',
                caption: 'Beer',
                lookup: {
                    dataSource: beerListSource,
                    displayExpr: "name",
                    valueExpr: "$id",
                }
            },
            {
                dataField: 'ProducedLtrs',
                caption: 'Produced (Ltrs.)',
                dataType: 'number'
            },
            {
                dataField: 'LtrsOrdered',
                caption: 'Ordered (Ltrs.)',
                allowEditing: false,
                calculateCellValue: function (data) {
                    if (data.ProducedLtrs && data.LtrsBalanced) {
                        return data.ProducedLtrs - data.LtrsBalanced
                    } else {
                        return '';
                    }
                }
            }, {
                dataField: 'LtrsBalanced',
                captions: 'Balanced (Ltrs.)',
                allowEditing: false
            }]

            return kegGridCols;
        }

        function getIndexByArray(data, key, value) {
            for (var i = 0; i < data.length; i++) {
                if (data[i][key] == value) {
                    return i;
                }
            }
            return -1;
        }
    }
}());
(function ()
{
    'use strict';

    apiResolverService.$inject = ["$q", "$log", "api"];
    angular
        .module('app.core')
        .factory('apiResolver', apiResolverService);

    /** @ngInject */
    function apiResolverService($q, $log, api)
    {
        var service = {
            resolve: resolve
        };

        return service;

        //////////
        /**
         * Resolve api
         * @param action
         * @param parameters
         */
        function resolve(action, parameters)
        {
            var actionParts = action.split('@'),
                resource = actionParts[0],
                method = actionParts[1],
                params = parameters || {};

            if ( !resource || !method )
            {
                $log.error('apiResolver.resolve requires correct action parameter (ResourceName@methodName)');
                return false;
            }

            // Create a new deferred object
            var deferred = $q.defer();

            // Get the correct api object from api service
            var apiObject = getApiObject(resource);

            if ( !apiObject )
            {
                $log.error('Resource "' + resource + '" is not defined in the api service!');
                deferred.reject('Resource "' + resource + '" is not defined in the api service!');
            }
            else
            {
                apiObject[method](params,

                    // Success
                    function (response)
                    {
                        deferred.resolve(response);
                    },

                    // Error
                    function (response)
                    {
                        deferred.reject(response);
                    }
                );
            }

            // Return the promise
            return deferred.promise;
        }

        /**
         * Get correct api object
         *
         * @param resource
         * @returns {*}
         */
        function getApiObject(resource)
        {
            // Split the resource in case if we have a dot notated object
            var resourceParts = resource.split('.'),
                apiObject = api;

            // Loop through the resource parts and go all the way through
            // the api object and return the correct one
            for ( var l = 0; l < resourceParts.length; l++ )
            {
                if ( angular.isUndefined(apiObject[resourceParts[l]]) )
                {
                    $log.error('Resource part "' + resourceParts[l] + '" is not defined!');
                    apiObject = false;
                    break;
                }

                apiObject = apiObject[resourceParts[l]];
            }

            if ( !apiObject )
            {
                return false;
            }

            return apiObject;
        }
    }

})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .filter('filterByTags', filterByTags)
        .filter('filterSingleByTags', filterSingleByTags);

    /** @ngInject */
    function filterByTags()
    {
        return function (items, tags)
        {
            if ( items.length === 0 || tags.length === 0 )
            {
                return items;
            }

            var filtered = [];

            items.forEach(function (item)
            {
                var match = tags.every(function (tag)
                {
                    var tagExists = false;

                    item.tags.forEach(function (itemTag)
                    {
                        if ( itemTag.name === tag.name )
                        {
                            tagExists = true;
                            return;
                        }
                    });

                    return tagExists;
                });

                if ( match )
                {
                    filtered.push(item);
                }
            });

            return filtered;
        };
    }

    /** @ngInject */
    function filterSingleByTags()
    {
        return function (itemTags, tags)
        {
            if ( itemTags.length === 0 || tags.length === 0 )
            {
                return;
            }

            if ( itemTags.length < tags.length )
            {
                return [];
            }

            var filtered = [];

            var match = tags.every(function (tag)
            {
                var tagExists = false;

                itemTags.forEach(function (itemTag)
                {
                    if ( itemTag.name === tag.name )
                    {
                        tagExists = true;
                        return;
                    }
                });

                return tagExists;
            });

            if ( match )
            {
                filtered.push(itemTags);
            }

            return filtered;
        };
    }

})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .filter('filterByPropIds', filterByPropIds);

    /** @ngInject */
    function filterByPropIds()
    {
        return function (items, parameter, ids)
        {
            if ( items.length === 0 || !ids || ids.length === 0 )
            {
                return items;
            }

            var filtered = [];

            for ( var i = 0; i < items.length; i++ )
            {
                var item = items[i];
                var match = false;

                for ( var j = 0; j < ids.length; j++ )
                {
                    var id = ids[j];
                    if ( item[parameter].indexOf(id) > -1 )
                    {
                        match = true;
                        break;
                    }
                }

                if ( match )
                {
                    filtered.push(item);
                }

            }

            return filtered;

        };
    }

})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .filter('filterByIds', filterByIds);

    /** @ngInject */
    function filterByIds()
    {
        return function (items, ids)
        {

            if ( items.length === 0 || !ids )
            {
                return items;
            }

            if ( ids.length === 0 )
            {
                return [];
            }

            var filtered = [];

            for ( var i = 0; i < items.length; i++ )
            {
                var item = items[i];
                var match = false;

                for ( var j = 0; j < ids.length; j++ )
                {
                    var id = ids[j];
                    if ( item.id === id )
                    {
                        match = true;
                        break;
                    }
                }

                if ( match )
                {
                    filtered.push(item);
                }

            }

            return filtered;

        };
    }

})();
(function ()
{
    'use strict';

    toTrustedFilter.$inject = ["$sce"];
    angular
        .module('app.core')
        .filter('toTrusted', toTrustedFilter)
        .filter('htmlToPlaintext', htmlToPlainTextFilter)
        .filter('nospace', nospaceFilter)
        .filter('humanizeDoc', humanizeDocFilter);

    /** @ngInject */
    function toTrustedFilter($sce)
    {
        return function (value)
        {
            return $sce.trustAsHtml(value);
        };
    }

    /** @ngInject */
    function htmlToPlainTextFilter()
    {
        return function (text)
        {
            return String(text).replace(/<[^>]+>/gm, '');
        };
    }

    /** @ngInject */
    function nospaceFilter()
    {
        return function (value)
        {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    }

    /** @ngInject */
    function humanizeDocFilter()
    {
        return function (doc)
        {
            if ( !doc )
            {
                return;
            }
            if ( doc.type === 'directive' )
            {
                return doc.name.replace(/([A-Z])/g, function ($1)
                {
                    return '-' + $1.toLowerCase();
                });
            }
            return doc.label || doc.name;
        };
    }

})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .filter('altDate', altDate);

    /** @ngInject */
    function altDate()
    {
        return function (value)
        {
            var diff = Date.now() - new Date(value);

            /**
             * If in a hour
             * e.g. "2 minutes ago"
             */
            if ( diff < (60 * 60 * 1000) )
            {
                return moment(value).fromNow();
            }
            /*
             * If in the day
             * e.g. "11:23"
             */
            else if ( diff < (60 * 60 * 24 * 1000) )
            {
                return moment(value).format('HH:mm');
            }
            /*
             * If in week
             * e.g "Tuesday"
             */
            else if ( diff < (60 * 60 * 24 * 7 * 1000) )
            {
                return moment(value).format('dddd');
            }
            /*
             * If more than a week
             * e.g. 03/29/2016
             */
            else
            {
                return moment(value).calendar();
            }

        };
    }

})();
(function () {
    'use strict';

    hljsDirective.$inject = ["$timeout", "$q", "$interpolate"];
    angular
        .module('app.core')
        .directive('hljs', hljsDirective);

    /** @ngInject */
    function hljsDirective($timeout, $q, $interpolate) {
        return {
            restrict: 'E',
            compile : function (element, attr) {
                var code;
                //No attribute? code is the content
                if (!attr.code) {
                    code = element.html();
                    element.empty();
                }

                return function (scope, element, attr) {

                    if (attr.code) {
                        // Attribute? code is the evaluation
                        code = scope.$eval(attr.code);
                    }
                    var shouldInterpolate = scope.$eval(attr.shouldInterpolate);

                    $q.when(code).then(function (code) {
                        if (code) {
                            if (shouldInterpolate) {
                                code = $interpolate(code)(scope);
                            }
                            var contentParent = angular.element(
                                '<pre><code class="highlight" ng-non-bindable></code></pre>'
                            );
                            element.append(contentParent);
                            // Defer highlighting 1-frame to prevent GA interference...
                            $timeout(function () {
                                render(code, contentParent);
                            }, 34, false);
                        }
                    });

                    function render(contents, parent) {

                        var codeElement = parent.find('code');
                        var lines = contents.split('\n');

                        // Remove empty lines
                        lines = lines.filter(function (line) {
                            return line.trim().length;
                        });

                        // Make it so each line starts at 0 whitespace
                        var firstLineWhitespace = lines[0].match(/^\s*/)[0];
                        var startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
                        lines = lines.map(function (line) {
                            return line
                                .replace(startingWhitespaceRegex, '')
                                .replace(/\s+$/, '');
                        });

                        var highlightedCode = hljs.highlight(attr.language || attr.lang, lines.join('\n'), true);
                        highlightedCode.value = highlightedCode.value
                            .replace(/=<span class="hljs-value">""<\/span>/gi, '')
                            .replace('<head>', '')
                            .replace('<head/>', '');
                        codeElement.append(highlightedCode.value).addClass('highlight');
                    }
                };
            }
        };
    }
})();
(function ()
{
    'use strict';

    angular
        .module('app.core')
        .provider('fuseConfig', fuseConfigProvider);

    /** @ngInject */
    function fuseConfigProvider()
    {
        // Default configuration
        var fuseConfiguration = {
            'disableCustomScrollbars'        : false,
            'disableMdInkRippleOnMobile'     : true,
            'disableCustomScrollbarsOnMobile': true
        };

        // Methods
        this.config = config;

        //////////

        /**
         * Extend default configuration with the given one
         *
         * @param configuration
         */
        function config(configuration)
        {
            fuseConfiguration = angular.extend({}, fuseConfiguration, configuration);
        }

        /**
         * Service
         */
        this.$get = function ()
        {
            var service = {
                getConfig: getConfig,
                setConfig: setConfig
            };

            return service;

            //////////

            /**
             * Returns a config value
             */
            function getConfig(configName)
            {
                if ( angular.isUndefined(fuseConfiguration[configName]) )
                {
                    return false;
                }

                return fuseConfiguration[configName];
            }

            /**
             * Creates or updates config object
             *
             * @param configName
             * @param configValue
             */
            function setConfig(configName, configValue)
            {
                fuseConfiguration[configName] = configValue;
            }
        };
    }

})();
(function ()
{
    'use strict';

    config.$inject = ["$translatePartialLoaderProvider"];
    angular
        .module('app.toolbar', [])
        .config(config);

    /** @ngInject */
    function config($translatePartialLoaderProvider)
    {
        $translatePartialLoaderProvider.addPart('app/toolbar');
    }
})();

(function ()
{
    'use strict';

    ToolbarController.$inject = ["$rootScope", "$q", "$state", "$timeout", "$mdSidenav", "$translate", "$mdToast", "msNavigationService", "auth", "loginRedirectPath", "authService"];
    angular
        .module('app.toolbar')
        .controller('ToolbarController', ToolbarController);

    /** @ngInject */
    function ToolbarController($rootScope, $q, $state, $timeout, $mdSidenav, $translate, $mdToast, msNavigationService, auth, loginRedirectPath, authService)
    {
        var vm = this;

        // Data
        $rootScope.global = {
            search: ''
        };

        vm.bodyEl = angular.element('body');
        vm.userStatusOptions = [
            {
                'title': 'Online',
                'icon' : 'icon-checkbox-marked-circle',
                'color': '#4CAF50'
            },
            {
                'title': 'Away',
                'icon' : 'icon-clock',
                'color': '#FFC107'
            },
            {
                'title': 'Do not Disturb',
                'icon' : 'icon-minus-circle',
                'color': '#F44336'
            },
            {
                'title': 'Invisible',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#BDBDBD'
            },
            {
                'title': 'Offline',
                'icon' : 'icon-checkbox-blank-circle-outline',
                'color': '#616161'
            }
        ];
        vm.languages = {
            en: {
                'title'      : 'English',
                'translation': 'TOOLBAR.ENGLISH',
                'code'       : 'en',
                'flag'       : 'us'
            },
            es: {
                'title'      : 'Spanish',
                'translation': 'TOOLBAR.SPANISH',
                'code'       : 'es',
                'flag'       : 'es'
            },
            tr: {
                'title'      : 'Turkish',
                'translation': 'TOOLBAR.TURKISH',
                'code'       : 'tr',
                'flag'       : 'tr'
            }
        };

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.logout = logout;
        vm.changeLanguage = changeLanguage;
        vm.setUserStatus = setUserStatus;
        vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
        vm.toggleMsNavigationFolded = toggleMsNavigationFolded;
        vm.search = search;
        vm.searchResultClick = searchResultClick;

        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            // Select the first status as a default
            vm.userStatus = vm.userStatusOptions[0];

            // Get the selected language directly from angular-translate module setting
            vm.selectedLanguage = vm.languages[$translate.preferredLanguage()];
        }


        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Sets User Status
         * @param status
         */
        function setUserStatus(status)
        {
            vm.userStatus = status;
        }

        /**
         * Logout Function
         */
        function logout()
        {
            // Do logout here..        
            authService.removeCurrentUser();
            auth.$signOut();
            $state.go(loginRedirectPath);
            vm.authData = null;
            localStorage.clear();
        }

        /**
         * Change Language
         */
        function changeLanguage(lang)
        {
            vm.selectedLanguage = lang;

            /**
             * Show temporary message if user selects a language other than English
             *
             * angular-translate module will try to load language specific json files
             * as soon as you change the language. And because we don't have them, there
             * will be a lot of errors in the page potentially breaking couple functions
             * of the template.
             *
             * To prevent that from happening, we added a simple "return;" statement at the
             * end of this if block. If you have all the translation files, remove this if
             * block and the translations should work without any problems.
             */
            if ( lang.code !== 'en' )
            {
                var message = 'Fuse supports translations through angular-translate module, but currently we do not have any translations other than English language. If you want to help us, send us a message through ThemeForest profile page.';

                $mdToast.show({
                    template : '<md-toast id="language-message" layout="column" layout-align="center start"><div class="md-toast-content">' + message + '</div></md-toast>',
                    hideDelay: 7000,
                    position : 'top right',
                    parent   : '#content'
                });

                return;
            }

            // Change the language
            $translate.use(lang.code);
        }

        /**
         * Toggle horizontal mobile menu
         */
        function toggleHorizontalMobileMenu()
        {
            vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
        }

        /**
         * Toggle msNavigation folded
         */
        function toggleMsNavigationFolded()
        {
            msNavigationService.toggleFolded();
        }

        /**
         * Search action
         *
         * @param query
         * @returns {Promise}
         */
        function search(query)
        {
            var navigation = [],
                flatNavigation = msNavigationService.getFlatNavigation(),
                deferred = $q.defer();

            // Iterate through the navigation array and
            // make sure it doesn't have any groups or
            // none ui-sref items
            for ( var x = 0; x < flatNavigation.length; x++ )
            {
                if ( flatNavigation[x].uisref )
                {
                    navigation.push(flatNavigation[x]);
                }
            }

            // If there is a query, filter the navigation;
            // otherwise we will return the entire navigation
            // list. Not exactly a good thing to do but it's
            // for demo purposes.
            if ( query )
            {
                navigation = navigation.filter(function (item)
                {
                    if ( angular.lowercase(item.title).search(angular.lowercase(query)) > -1 )
                    {
                        return true;
                    }
                });
            }

            // Fake service delay
            $timeout(function ()
            {
                deferred.resolve(navigation);
            }, 1000);

            return deferred.promise;
        }

        /**
         * Search result click action
         *
         * @param item
         */
        function searchResultClick(item)
        {
            // If item has a link
            if ( item.uisref )
            {
                // If there are state params,
                // use them...
                if ( item.stateParams )
                {
                    $state.go(item.state, item.stateParams);
                }
                else
                {
                    $state.go(item.state);
                }
            }
        }
    }

})();
(function ()
{
    'use strict';

    QuickPanelController.$inject = ["msApi"];
    angular
        .module('app.quick-panel')
        .controller('QuickPanelController', QuickPanelController);

    /** @ngInject */
    function QuickPanelController(msApi)
    {
        var vm = this;

        // Data
        vm.date = new Date();
        vm.settings = {
            notify: true,
            cloud : false,
            retro : true
        };

        msApi.request('quickPanel.activities@get', {},
            // Success
            function (response)
            {
                vm.activities = response.data;
            }
        );

        msApi.request('quickPanel.events@get', {},
            // Success
            function (response)
            {
                vm.events = response.data;
            }
        );

        msApi.request('quickPanel.notes@get', {},
            // Success
            function (response)
            {
                vm.notes = response.data;
            }
        );

        // Methods

        //////////
    }

})();
(function ()
{
    'use strict';

    angular
        .module('app.navigation', [])
        .config(config);

    /** @ngInject */
    function config()
    {
        
    }

})();
(function ()
{
    'use strict';

    NavigationController.$inject = ["$scope"];
    angular
        .module('app.navigation')
        .controller('NavigationController', NavigationController);

    /** @ngInject */
    function NavigationController($scope)
    {
        var vm = this;

        // Data
        vm.bodyEl = angular.element('body');
        vm.folded = false;
        vm.msScrollOptions = {
            suppressScrollX: true
        };

        // Methods
        vm.toggleMsNavigationFolded = toggleMsNavigationFolded;

        //////////

        /**
         * Toggle folded status
         */
        function toggleMsNavigationFolded()
        {
            vm.folded = !vm.folded;
        }

        // Close the mobile menu on $stateChangeSuccess
        $scope.$on('$stateChangeSuccess', function ()
        {
            vm.bodyEl.removeClass('ms-navigation-horizontal-mobile-menu-active');
        });
    }

})();
(function ()
{
    'use strict';

    /**
     * Main module of the independence
     */
    angular
        .module('independence', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick Panel
            'app.quick-panel',

            // Authentication
            'app.auth',

            //Firebase
            'firebase',

            //Email
            //'app.mail',

            //Admin
            'app.admin',

            //'app.bookings',
            //'app.vendings',
            'app.records',
            'app.bulkbuys'
        ]);
})();
(function ()
{
    'use strict';

    MainController.$inject = ["$scope", "$rootScope"];
    angular
        .module('independence')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $rootScope)
    {
        // Data

        //////////

        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event)
        {
            if ( event.targetScope.$id === $scope.$id )
            {
                $rootScope.$broadcast('msSplashScreen::remove');
            }
        });
    }
})();
(function ()
{
    'use strict';

    runBlock.$inject = ["msUtils", "fuseGenerator", "fuseConfig"];
    angular
        .module('app.core')
        .run(runBlock);

    /** @ngInject */
    function runBlock(msUtils, fuseGenerator, fuseConfig)
    {
        /**
         * Generate extra classes based on registered themes so we
         * can use same colors with non-angular-material elements
         */
        fuseGenerator.generate();

        /**
         * Disable md-ink-ripple effects on mobile
         * if 'disableMdInkRippleOnMobile' config enabled
         */
        if ( fuseConfig.getConfig('disableMdInkRippleOnMobile') && msUtils.isMobile() )
        {
            var bodyEl = angular.element('body');
            bodyEl.attr('md-no-ink', true);
        }

        /**
         * Put isMobile() to the html as a class
         */
        if ( msUtils.isMobile() )
        {
            angular.element('html').addClass('is-mobile');
        }

        /**
         * Put browser information to the html as a class
         */
        var browserInfo = msUtils.detectBrowser();
        if ( browserInfo )
        {
            var htmlClass = browserInfo.browser + ' ' + browserInfo.version + ' ' + browserInfo.os;
            angular.element('html').addClass(htmlClass);
        }
    }
})();
(function ()
{
    'use strict';

    config.$inject = ["$ariaProvider", "$logProvider", "msScrollConfigProvider", "fuseConfigProvider"];
    angular
        .module('app.core')
        .config(config);

    /** @ngInject */
    function config($ariaProvider, $logProvider, msScrollConfigProvider, fuseConfigProvider)
    {
        // Enable debug logging
        $logProvider.debugEnabled(true);

        /*eslint-disable */

        // ng-aria configuration
        $ariaProvider.config({
            tabindex: false
        });

        // Fuse theme configurations
        fuseConfigProvider.config({
            'disableCustomScrollbars'        : false,
            'disableCustomScrollbarsOnMobile': true,
            'disableMdInkRippleOnMobile'     : true
        });

        // msScroll configuration
        msScrollConfigProvider.config({
            wheelPropagation: true
        });

        /*eslint-enable */
    }
})();
(function ()
{
    'use strict';

    runBlock.$inject = ["$rootScope", "$timeout", "$state"];
    angular
        .module('independence')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state)
    {
        // Activate loading indicator
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function ()
        {
            $rootScope.loadingProgress = true;
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
        {
            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });
    }
})();
(function ()
{
    'use strict';

    routeRun.$inject = ["$rootScope", "$state", "loginRedirectPath"];
    routeConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
    angular
        .module('independence')
        .config(routeConfig)
        .run(routeRun);

    /** @ngInject */
    function routeRun($rootScope, $state, loginRedirectPath) {
        // watch for login status changes and redirect if appropriate
        // auth.$onAuthStateChanged(check);

        // some of our routes may reject resolve promises with the special {authRequired: true} error
        // this redirects to the login page whenever that is encountered
        $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
            if (error === "AUTH_REQUIRED") {
                localStorage.clear();
                $state.go(loginRedirectPath);
            }
        });
    }

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
    {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/auth/login');

        /**
         * Layout Style Switcher
         *
         * This code is here for demonstration purposes.
         * If you don't need to switch between the layout
         * styles like in the demo, you can set one manually by
         * typing the template urls into the `State definitions`
         * area and remove this code
         */
        // Inject $cookies
        var $cookies;

        angular.injector(['ngCookies']).invoke([
            '$cookies', function (_$cookies)
            {
                $cookies = _$cookies;
            }
        ]);

        // Get active layout
        var layoutStyle = $cookies.get('layoutStyle') || 'verticalNavigationFullwidthToolbar2';

        var layouts = {
            verticalNavigation  : {
                main      : 'app/core/layouts/vertical-navigation.html',
                toolbar   : 'app/toolbar/layouts/vertical-navigation/toolbar.html',
                navigation: 'app/navigation/layouts/vertical-navigation/navigation.html'
            },
            verticalNavigationFullwidthToolbar  : {
                main      : 'app/core/layouts/vertical-navigation-fullwidth-toolbar.html',
                toolbar   : 'app/toolbar/layouts/vertical-navigation-fullwidth-toolbar/toolbar.html',
                navigation: 'app/navigation/layouts/vertical-navigation/navigation.html'
            },
            verticalNavigationFullwidthToolbar2  : {
                main      : 'app/core/layouts/vertical-navigation-fullwidth-toolbar-2.html',
                toolbar   : 'app/toolbar/layouts/vertical-navigation-fullwidth-toolbar-2/toolbar.html',
                navigation: 'app/navigation/layouts/vertical-navigation-fullwidth-toolbar-2/navigation.html'
            },
            horizontalNavigation: {
                main      : 'app/core/layouts/horizontal-navigation.html',
                toolbar   : 'app/toolbar/layouts/horizontal-navigation/toolbar.html',
                navigation: 'app/navigation/layouts/horizontal-navigation/navigation.html'
            },
            contentOnly         : {
                main      : 'app/core/layouts/content-only.html',
                toolbar   : '',
                navigation: ''
            },
            contentWithToolbar  : {
                main      : 'app/core/layouts/content-with-toolbar.html',
                toolbar   : 'app/toolbar/layouts/content-with-toolbar/toolbar.html',
                navigation: ''
            }
        };
        // END - Layout Style Switcher

        // State definitions
        $stateProvider
            .state('app', {
                abstract: true,
                views   : {
                    'main@'         : {
                        templateUrl: layouts[layoutStyle].main,
                        controller : 'MainController as vm'
                    },
                    'toolbar@app'   : {
                        templateUrl: layouts[layoutStyle].toolbar,
                        controller : 'ToolbarController as vm'
                    },
                    'navigation@app': {
                        templateUrl: layouts[layoutStyle].navigation,
                        controller : 'NavigationController as vm'
                    },
                    'quickPanel@app': {
                        templateUrl: 'app/quick-panel/quick-panel.html',
                        controller : 'QuickPanelController as vm'
                    }
                }
            });
    }

})();

(function ()
{
    'use strict';

    IndexController.$inject = ["fuseTheming"];
    angular
        .module('independence')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(fuseTheming)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;

        //////////
    }
})();
(function ()
{
    'use strict';

    angular
        .module('independence')
    .constant('loginRedirectPath', 'app.auth_login')
    .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook','google'])
    .factory('auth', ["$firebaseAuth", function ($firebaseAuth) {
      return $firebaseAuth();
    }]);
})();

(function ()
{
    'use strict';

    config.$inject = ["$translateProvider", "$provide"];
    angular
        .module('independence')
        .config(config);

    /** @ngInject */
    function config($translateProvider, $provide)
    {
        // Put your common app configurations here

        // angular-translate configuration
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/i18n/{lang}.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');
          // Text Angular options
    }

})();
(function ()
{
    'use strict';

    apiService.$inject = ["$resource"];
    angular
        .module('independence')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {
        /**
         * You can use this service to define your API urls. The "api" service
         * is designed to work in parallel with "apiResolver" service which you can
         * find in the "app/core/services/api-resolver.service.js" file.
         *
         * You can structure your API urls whatever the way you want to structure them.
         * You can either use very simple definitions, or you can use multi-dimensional
         * objects.
         *
         * Here's a very simple API url definition example:
         *
         *      api.getBlogList = $resource('http://api.example.com/getBlogList');
         *
         * While this is a perfectly valid $resource definition, most of the time you will
         * find yourself in a more complex situation where you want url parameters:
         *
         *      api.getBlogById = $resource('http://api.example.com/blog/:id', {id: '@id'});
         *
         * You can also define your custom methods. Custom method definitions allow you to
         * add hardcoded parameters to your API calls that you want to sent every time you
         * make that API call:
         *
         *      api.getBlogById = $resource('http://api.example.com/blog/:id', {id: '@id'}, {
         *         'getFromHomeCategory' : {method: 'GET', params: {blogCategory: 'home'}}
         *      });
         *
         * In addition to these definitions, you can also create multi-dimensional objects.
         * They are nothing to do with the $resource object, it's just a more convenient
         * way that we have created for you to packing your related API urls together:
         *
         *      api.blog = {
         *                   list     : $resource('http://api.example.com/blog'),
         *                   getById  : $resource('http://api.example.com/blog/:id', {id: '@id'}),
         *                   getByDate: $resource('http://api.example.com/blog/:date', {id: '@date'}, {
         *                       get: {
         *                            method: 'GET',
         *                            params: {
         *                                getByDate: true
         *                            }
         *                       }
         *                   })
         *       }
         *
         * If you look at the last example from above, we overrode the 'get' method to put a
         * hardcoded parameter. Now every time we make the "getByDate" call, the {getByDate: true}
         * object will also be sent along with whatever data we are sending.
         *
         * All the above methods are using standard $resource service. You can learn more about
         * it at: https://docs.angularjs.org/api/ngResource/service/$resource
         *
         * -----
         *
         * After you defined your API urls, you can use them in Controllers, Services and even
         * in the UIRouter state definitions.
         *
         * If we use the last example from above, you can do an API call in your Controllers and
         * Services like this:
         *
         *      function MyController (api)
         *      {
         *          // Get the blog list
         *          api.blog.list.get({},
         *
         *              // Success
         *              function (response)
         *              {
         *                  console.log(response);
         *              },
         *
         *              // Error
         *              function (response)
         *              {
         *                  console.error(response);
         *              }
         *          );
         *
         *          // Get the blog with the id of 3
         *          var id = 3;
         *          api.blog.getById.get({'id': id},
         *
         *              // Success
         *              function (response)
         *              {
         *                  console.log(response);
         *              },
         *
         *              // Error
         *              function (response)
         *              {
         *                  console.error(response);
         *              }
         *          );
         *
         *          // Get the blog with the date by using custom defined method
         *          var date = 112314232132;
         *          api.blog.getByDate.get({'date': date},
         *
         *              // Success
         *              function (response)
         *              {
         *                  console.log(response);
         *              },
         *
         *              // Error
         *              function (response)
         *              {
         *                  console.error(response);
         *              }
         *          );
         *      }
         *
         * Because we are directly using $resource service, all your API calls will return a
         * $promise object.
         *
         * --
         *
         * If you want to do the same calls in your UI Router state definitions, you need to use
         * "apiResolver" service we have prepared for you:
         *
         *      $stateProvider.state('app.blog', {
         *          url      : '/blog',
         *          views    : {
         *               'content@app': {
         *                   templateUrl: 'app/main/apps/blog/blog.html',
         *                   controller : 'BlogController as vm'
         *               }
         *          },
         *          resolve  : {
         *              Blog: function (apiResolver)
         *              {
         *                  return apiResolver.resolve('blog.list@get');
         *              }
         *          }
         *      });
         *
         *  You can even use parameters with apiResolver service:
         *
         *      $stateProvider.state('app.blog.show', {
         *          url      : '/blog/:id',
         *          views    : {
         *               'content@app': {
         *                   templateUrl: 'app/main/apps/blog/blog.html',
         *                   controller : 'BlogController as vm'
         *               }
         *          },
         *          resolve  : {
         *              Blog: function (apiResolver, $stateParams)
         *              {
         *                  return apiResolver.resolve('blog.getById@get', {'id': $stateParams.id);
         *              }
         *          }
         *      });
         *
         *  And the "Blog" object will be available in your BlogController:
         *
         *      function BlogController(Blog)
         *      {
         *          var vm = this;
         *
         *          // Data
         *          vm.blog = Blog;
         *
         *          ...
         *      }
         */

        var api = {};

        // Base Url
        api.baseUrl = 'app/data/';

        // api.sample = $resource(api.baseUrl + 'sample/sample.json');

        return api;
    }

})();