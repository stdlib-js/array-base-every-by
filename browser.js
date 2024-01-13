// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function",r={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function t(e){var t=r[e];return"function"==typeof t?t:r.default}var n={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function i(e){var r=n[e];return"function"==typeof r?r:n.default}var o={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function a(e){var r=o[e];return"function"==typeof r?r:o.default}var u={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function f(e){var r=u[e];return"function"==typeof r?r:u.default}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,c=Object.defineProperty;function s(e){return"number"==typeof e}function y(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function p(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+y(i):y(i)+e,n&&(e="-"+e)),e}var h=String.prototype.toLowerCase,g=String.prototype.toUpperCase;function m(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=p(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=p(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===g.call(e.specifier)?g.call(t):h.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function w(e){return"string"==typeof e}var b=Math.abs,v=String.prototype.toLowerCase,d=String.prototype.toUpperCase,E=String.prototype.replace,A=/e\+(\d)$/,T=/e-(\d)$/,_=/^(\d+)$/,x=/^(\d+)e/,j=/\.0$/,V=/\.0*e/,k=/(\..*[^0])0*e/;function S(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":b(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=E.call(t,k,"$1e"),t=E.call(t,V,"e"),t=E.call(t,j,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=E.call(t,A,"e+0$1"),t=E.call(t,T,"e-0$1"),e.alternate&&(t=E.call(t,_,"$1."),t=E.call(t,x,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):v.call(t)}function I(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function L(e,r,t){var n=r-e.length;return n<0?e:e=t?e+I(n):I(n)+e}var B=String.fromCharCode,R=isNaN,O=Array.isArray;function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,n,i,o,a,u,f,l;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,f=0;f<e.length;f++)if(w(n=e[f]))a+=n;else{if(r=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,R(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!R(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(o)?String(n.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=S(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=p(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(M(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function U(e){return"string"==typeof e}function Y(e){var r,t,n;if(!U(e))throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=N(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var W,$=Object.prototype,G=$.toString,Z=$.__defineGetter__,X=$.__defineSetter__,J=$.__lookupGetter__,z=$.__lookupSetter__;W=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?c:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=$,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Z&&Z.call(e,r,t.get),a&&X&&X.call(e,r,t.set),e};var q=W;function D(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return H&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString,ee=Object.prototype.hasOwnProperty;function re(e,r){return null!=e&&ee.call(e,r)}var te="function"==typeof Symbol?Symbol:void 0,ne="function"==typeof te?te.toStringTag:"",ie=K()?function(e){var r,t,n;if(null==e)return Q.call(e);t=e[ne],r=re(e,ne);try{e[ne]=void 0}catch(r){return Q.call(e)}return n=Q.call(e),r?e[ne]=t:delete e[ne],n}:function(e){return Q.call(e)},oe=Array.isArray?Array.isArray:function(e){return"[object Array]"===ie(e)};function ae(e){return null!==e&&"object"==typeof e}function ue(e){return ae(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function fe(){return/^\s*function\s*([^(]*)/i}D(ae,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!oe(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ae));var le=/^\s*function\s*([^(]*)/i;function ce(e){var r,t,n;if(("Object"===(t=ie(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=le.exec(n.toString()))return r[1]}return ue(e)?"Buffer":t}D(fe,"REGEXP",le);var se={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},ye=Object.prototype.toString,pe=Object.prototype.hasOwnProperty,he="function"==typeof te?te.toStringTag:"",ge=K()?function(e){var r,t,n,i,o;if(null==e)return ye.call(e);t=e[he],o=he,r=null!=(i=e)&&pe.call(i,o);try{e[he]=void 0}catch(r){return ye.call(e)}return n=ye.call(e),r?e[he]=t:delete e[he],n}:function(e){return ye.call(e)},me="function"==typeof Float64Array,we="function"==typeof Float64Array?Float64Array:null,be="function"==typeof Float64Array?Float64Array:void 0,ve=function(){var e,r,t;if("function"!=typeof we)return!1;try{r=new we([1,3.14,-3.14,NaN]),t=r,e=(me&&t instanceof Float64Array||"[object Float64Array]"===ge(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?be:function(){throw new Error("not implemented")},de="function"==typeof Float32Array,Ee=Number.POSITIVE_INFINITY,Ae="function"==typeof Float32Array?Float32Array:null,Te="function"==typeof Float32Array?Float32Array:void 0,_e=function(){var e,r,t;if("function"!=typeof Ae)return!1;try{r=new Ae([1,3.14,-3.14,5e40]),t=r,e=(de&&t instanceof Float32Array||"[object Float32Array]"===ie(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Ee}catch(r){e=!1}return e}()?Te:function(){throw new Error("not implemented")},xe="function"==typeof Uint32Array,je="function"==typeof Uint32Array?Uint32Array:null,Ve="function"==typeof Uint32Array?Uint32Array:void 0,ke=function(){var e,r,t;if("function"!=typeof je)return!1;try{r=new je(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(xe&&t instanceof Uint32Array||"[object Uint32Array]"===ie(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ve:function(){throw new Error("not implemented")},Se="function"==typeof Int32Array,Ie="function"==typeof Int32Array?Int32Array:null,Le="function"==typeof Int32Array?Int32Array:void 0,Be=function(){var e,r,t;if("function"!=typeof Ie)return!1;try{r=new Ie([1,3.14,-3.14,2147483648]),t=r,e=(Se&&t instanceof Int32Array||"[object Int32Array]"===ie(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Le:function(){throw new Error("not implemented")},Re="function"==typeof Uint16Array,Oe="function"==typeof Uint16Array?Uint16Array:null,Ce="function"==typeof Uint16Array?Uint16Array:void 0,Fe=function(){var e,r,t;if("function"!=typeof Oe)return!1;try{r=new Oe(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Re&&t instanceof Uint16Array||"[object Uint16Array]"===ie(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Ce:function(){throw new Error("not implemented")},Pe="function"==typeof Int16Array,Me="function"==typeof Int16Array?Int16Array:null,Ne="function"==typeof Int16Array?Int16Array:void 0,Ue=function(){var e,r,t;if("function"!=typeof Me)return!1;try{r=new Me([1,3.14,-3.14,32768]),t=r,e=(Pe&&t instanceof Int16Array||"[object Int16Array]"===ie(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Ne:function(){throw new Error("not implemented")},Ye="function"==typeof Uint8Array,We="function"==typeof Uint8Array?Uint8Array:null,$e="function"==typeof Uint8Array?Uint8Array:void 0,Ge=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We(r=[1,3.14,-3.14,256,257]),t=r,e=(Ye&&t instanceof Uint8Array||"[object Uint8Array]"===ie(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?$e:function(){throw new Error("not implemented")},Ze="function"==typeof Uint8ClampedArray,Xe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Je="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,ze=function(){var e,r,t;if("function"!=typeof Xe)return!1;try{r=new Xe([-1,0,1,3.14,4.99,255,256]),t=r,e=(Ze&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===ie(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Je:function(){throw new Error("not implemented")},qe="function"==typeof Int8Array,De="function"==typeof Int8Array?Int8Array:null,He="function"==typeof Int8Array?Int8Array:void 0,Ke=function(){var e,r,t;if("function"!=typeof De)return!1;try{r=new De([1,3.14,-3.14,128]),t=r,e=(qe&&t instanceof Int8Array||"[object Int8Array]"===ie(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?He:function(){throw new Error("not implemented")};function Qe(e){return"number"==typeof e}var er=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,tr="function"==typeof te?te.toStringTag:"",nr=K()?function(e){var r,t,n,i,o;if(null==e)return er.call(e);t=e[tr],o=tr,r=null!=(i=e)&&rr.call(i,o);try{e[tr]=void 0}catch(r){return er.call(e)}return n=er.call(e),r?e[tr]=t:delete e[tr],n}:function(e){return er.call(e)},ir=Number,or=ir.prototype.toString,ar=K();function ur(e){return"object"==typeof e&&(e instanceof ir||(ar?function(e){try{return or.call(e),!0}catch(e){return!1}}(e):"[object Number]"===nr(e)))}function fr(e){return Qe(e)||ur(e)}D(fr,"isPrimitive",Qe),D(fr,"isObject",ur);var lr=Number.POSITIVE_INFINITY,cr=ir.NEGATIVE_INFINITY,sr=Math.floor;function yr(e){return e<lr&&e>cr&&sr(r=e)===r;var r}function pr(e){return Qe(e)&&yr(e)}function hr(e){return ur(e)&&yr(e.valueOf())}function gr(e){return pr(e)||hr(e)}function mr(e){return pr(e)&&e>=0}function wr(e){return hr(e)&&e.valueOf()>=0}function br(e){return mr(e)||wr(e)}D(gr,"isPrimitive",pr),D(gr,"isObject",hr),D(br,"isPrimitive",mr),D(br,"isObject",wr);var vr=Math.floor;function dr(e){return vr(e)===e}function Er(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&dr(e.length)&&e.length>=0&&e.length<=4294967295}var Ar=Math.floor;function Tr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&(r=e.length,Ar(r)===r)&&e.length>=0&&e.length<=9007199254740991;var r}var _r="function"==typeof ArrayBuffer;function xr(e){return _r&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===ie(e)}function jr(e){return"object"==typeof e&&null!==e&&!oe(e)}var Vr=/./;function kr(e){return"boolean"==typeof e}var Sr=Object.prototype.toString,Ir=Object.prototype.hasOwnProperty,Lr="function"==typeof te?te.toStringTag:"",Br=K()?function(e){var r,t,n,i,o;if(null==e)return Sr.call(e);t=e[Lr],o=Lr,r=null!=(i=e)&&Ir.call(i,o);try{e[Lr]=void 0}catch(r){return Sr.call(e)}return n=Sr.call(e),r?e[Lr]=t:delete e[Lr],n}:function(e){return Sr.call(e)},Rr=Boolean,Or=Boolean.prototype.toString,Cr=K();function Fr(e){return"object"==typeof e&&(e instanceof Rr||(Cr?function(e){try{return Or.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Br(e)))}function Pr(e){return kr(e)||Fr(e)}function Mr(){return new Function("return this;")()}D(Pr,"isPrimitive",kr),D(Pr,"isObject",Fr);var Nr="object"==typeof self?self:null,Ur="object"==typeof window?window:null,Yr="object"==typeof globalThis?globalThis:null,Wr=function(e){if(arguments.length){if(!kr(e))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Mr()}if(Yr)return Yr;if(Nr)return Nr;if(Ur)return Ur;throw new Error("unexpected error. Unable to resolve global object.")}(),$r=Wr.document&&Wr.document.childNodes,Gr=Int8Array,Zr="function"==typeof Vr||"object"==typeof Gr||"function"==typeof $r?function(e){return ce(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ce(e).toLowerCase():r};function Xr(e){return"function"===Zr(e)}function Jr(e,r){if(!(this instanceof Jr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Qe(e))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Qe(r))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}D(Jr,"BYTES_PER_ELEMENT",8),D(Jr.prototype,"BYTES_PER_ELEMENT",8),D(Jr.prototype,"byteLength",16),D(Jr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),D(Jr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var zr="function"==typeof Math.fround?Math.fround:null,qr=new _e(1),Dr="function"==typeof zr?zr:function(e){return qr[0]=e,qr[0]};function Hr(e,r){if(!(this instanceof Hr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Qe(e))throw new TypeError(Y("invalid argument. Real component must be a number. Value: `%s`.",e));if(!Qe(r))throw new TypeError(Y("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return q(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Dr(e)}),q(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Dr(r)}),this}function Kr(e){return e instanceof Jr||e instanceof Hr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Qr(e){return dr(e/2)}function et(){return"function"==typeof te&&"symbol"==typeof te("foo")&&re(te,"iterator")&&"symbol"==typeof te.iterator}D(Hr,"BYTES_PER_ELEMENT",4),D(Hr.prototype,"BYTES_PER_ELEMENT",4),D(Hr.prototype,"byteLength",8),D(Hr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),D(Hr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var rt=et()?Symbol.iterator:null;function tt(e,r,t){q(e,r,{configurable:!1,enumerable:!1,get:t})}function nt(e){return e.re}function it(e){return e.im}function ot(e,r){return new _e(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function at(e,r){return new ve(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function ut(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Er(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Kr(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(nt(n),it(n))}return r}function ft(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Er(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Kr(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(nt(o),it(o))}return n}function lt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Kr(n=r[i]))return null;e[o]=nt(n),e[o+1]=it(n),o+=2}return e}var ct=2*_e.BYTES_PER_ELEMENT,st=et();function yt(e){return e instanceof mt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function pt(e){return e===mt||"Complex128Array"===e.name}function ht(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ct}function gt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*ct}function mt(){var e,r,t,n;if(r=arguments.length,!(this instanceof mt))return 0===r?new mt:1===r?new mt(arguments[0]):2===r?new mt(arguments[0],arguments[1]):new mt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new _e(0);else if(1===r)if(mr(arguments[0]))t=new _e(2*arguments[0]);else if(Tr(arguments[0]))if((n=(t=arguments[0]).length)&&oe(t)&&Kr(t[0])){if(null===(t=lt(new _e(2*n),t))){if(!Qr(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new _e(arguments[0])}}else{if(ht(t))t=ot(t,0);else if(gt(t))t=at(t,0);else if(!Qr(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new _e(t)}else if(xr(arguments[0])){if(!dr((t=arguments[0]).byteLength/ct))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ct,t.byteLength));t=new _e(t)}else{if(!jr(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===st)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Xr(t[rt]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Xr((t=t[rt]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ut(t))instanceof Error)throw t;t=new _e(t)}else{if(!xr(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!mr(e=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!dr(e/ct))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ct,e));if(2===r){if(!dr((n=t.byteLength-e)/ct))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ct,n));t=new _e(t,e)}else{if(!mr(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ct>t.byteLength-e)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ct));t=new _e(t,e,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}function wt(e){return e.re}function bt(e){return e.im}function vt(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Er(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Kr(n))return new TypeError(Y("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(wt(n),bt(n))}return r}function dt(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Er(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Kr(o))return new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(wt(o),bt(o))}return n}function Et(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Kr(n=r[i]))return null;e[o]=wt(n),e[o+1]=bt(n),o+=2}return e}D(mt,"BYTES_PER_ELEMENT",ct),D(mt,"name","Complex64Array"),D(mt,"from",(function(e){var r,n,i,o,u,f,l,c,s,y,p,h;if(!Xr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Xr(i=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(r=arguments[2])}if(yt(e)){if(c=e.length,i){for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Kr(y=i.call(r,e.get(p),p)))u[h]=nt(y),u[h+1]=it(y);else{if(!(Er(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(e)}if(Tr(e)){if(i){for(c=e.length,l=e.get&&e.set?a("default"):t("default"),p=0;p<c;p++)if(!Kr(l(e,p))){s=!0;break}if(s){if(!Qr(c))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,c));for(u=(o=new this(c/2))._buffer,p=0;p<c;p++)u[p]=i.call(r,l(e,p),p);return o}for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Kr(y=i.call(r,l(e,p),p)))u[h]=nt(y),u[h+1]=it(y);else{if(!(Er(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(e)}if(jr(e)&&st&&Xr(e[rt])){if(!Xr((u=e[rt]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((f=i?ft(u,i,r):ut(u))instanceof Error)throw f;for(u=(o=new this(c=f.length/2))._buffer,p=0;p<c;p++)u[p]=f[p];return o}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),D(mt,"of",(function(){var e,r;if(!Xr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),tt(mt.prototype,"buffer",(function(){return this._buffer.buffer})),tt(mt.prototype,"byteLength",(function(){return this._buffer.byteLength})),tt(mt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(mt.prototype,"BYTES_PER_ELEMENT",mt.BYTES_PER_ELEMENT),D(mt.prototype,"copyWithin",(function(e,r){if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),D(mt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Hr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),D(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),rt&&D(t,rt,(function(){return r.entries()})),t})),D(mt.prototype,"get",(function(e){var r;if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!mr(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Hr((r=this._buffer)[e*=2],r[e+1])})),tt(mt.prototype,"length",(function(){return this._length})),D(mt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!mr(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Kr(e)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=nt(e),void(n[t+1]=it(e))}if(yt(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*ct,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new _e(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Tr(e))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Kr(e[f])){o=!0;break}if(o){if(!Qr(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*ct,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new _e(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=nt(u),n[t+1]=it(u),t+=2}}));var At=2*ve.BYTES_PER_ELEMENT,Tt=et();function _t(e){return e instanceof kt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function xt(e){return e===kt||"Complex64Array"===e.name}function jt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===At/2}function Vt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===At}function kt(){var e,r,t,n;if(r=arguments.length,!(this instanceof kt))return 0===r?new kt:1===r?new kt(arguments[0]):2===r?new kt(arguments[0],arguments[1]):new kt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ve(0);else if(1===r)if(mr(arguments[0]))t=new ve(2*arguments[0]);else if(Tr(arguments[0]))if((n=(t=arguments[0]).length)&&oe(t)&&Kr(t[0])){if(null===(t=Et(new ve(2*n),t))){if(!Qr(n))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ve(arguments[0])}}else{if(jt(t))t=ot(t,0);else if(Vt(t))t=at(t,0);else if(!Qr(n))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ve(t)}else if(xr(arguments[0])){if(!dr((t=arguments[0]).byteLength/At))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",At,t.byteLength));t=new ve(t)}else{if(!jr(arguments[0]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Tt)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Xr(t[rt]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Xr((t=t[rt]()).next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=vt(t))instanceof Error)throw t;t=new ve(t)}else{if(!xr(t=arguments[0]))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!mr(e=arguments[1]))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!dr(e/At))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",At,e));if(2===r){if(!dr((n=t.byteLength-e)/At))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",At,n));t=new ve(t,e)}else{if(!mr(n=arguments[2]))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*At>t.byteLength-e)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*At));t=new ve(t,e,2*n)}}return D(this,"_buffer",t),D(this,"_length",t.length/2),this}D(kt,"BYTES_PER_ELEMENT",At),D(kt,"name","Complex128Array"),D(kt,"from",(function(e){var r,n,i,o,u,f,l,c,s,y,p,h;if(!Xr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((n=arguments.length)>1){if(!Xr(i=arguments[1]))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",i));n>2&&(r=arguments[2])}if(_t(e)){if(c=e.length,i){for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Kr(y=i.call(r,e.get(p),p)))u[h]=wt(y),u[h+1]=bt(y);else{if(!(Er(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(e)}if(Tr(e)){if(i){for(c=e.length,l=e.get&&e.set?a("default"):t("default"),p=0;p<c;p++)if(!Kr(l(e,p))){s=!0;break}if(s){if(!Qr(c))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",c));for(u=(o=new this(c/2))._buffer,p=0;p<c;p++)u[p]=i.call(r,l(e,p),p);return o}for(u=(o=new this(c))._buffer,h=0,p=0;p<c;p++){if(Kr(y=i.call(r,l(e,p),p)))u[h]=wt(y),u[h+1]=bt(y);else{if(!(Er(y)&&y.length>=2))throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",y));u[h]=y[0],u[h+1]=y[1]}h+=2}return o}return new this(e)}if(jr(e)&&Tt&&Xr(e[rt])){if(!Xr((u=e[rt]()).next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((f=i?dt(u,i,r):vt(u))instanceof Error)throw f;for(u=(o=new this(c=f.length/2))._buffer,p=0;p<c;p++)u[p]=f[p];return o}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),D(kt,"of",(function(){var e,r;if(!Xr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),tt(kt.prototype,"buffer",(function(){return this._buffer.buffer})),tt(kt.prototype,"byteLength",(function(){return this._buffer.byteLength})),tt(kt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),D(kt.prototype,"BYTES_PER_ELEMENT",kt.BYTES_PER_ELEMENT),D(kt.prototype,"copyWithin",(function(e,r){if(!_t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),D(kt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!_t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,D(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Jr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),D(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),rt&&D(t,rt,(function(){return r.entries()})),t})),D(kt.prototype,"get",(function(e){var r;if(!_t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!mr(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Jr((r=this._buffer)[e*=2],r[e+1])})),tt(kt.prototype,"length",(function(){return this._length})),D(kt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!_t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!mr(t=arguments[1]))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Kr(e)){if(t>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=wt(e),void(n[t+1]=bt(e))}if(_t(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*At,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ve(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Tr(e))throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Kr(e[f])){o=!0;break}if(o){if(!Qr(a))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*At,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ve(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=wt(u),n[t+1]=bt(u),t+=2}}));var St=[ve,_e,Be,ke,Ue,Fe,Ke,Ge,ze,mt,kt],It=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Lt=It.length;function Bt(r){var n,o=function(e){var r;if(oe(e))return"generic";if(ue(e))return null;for(r=0;r<Lt;r++)if(e instanceof St[r])return It[r];return se[ce(e)]||null}(r);return typeof(n=r).get===e&&typeof n.set===e?{accessorProtocol:!0,accessors:[a(o),f(o)]}:{accessorProtocol:!1,accessors:[t(o),i(o)]}}return function(e,r,t){var n;return function(e,r){return"function"==typeof e[r]}(e,"every")?e.every(r,t):(n=function(e){var r=Bt(e);return{data:e,accessorProtocol:r.accessorProtocol,accessors:r.accessors}}(e),n.accessorProtocol?function(e,r,t){var n,i,o;for(n=e.data,i=e.accessors[0],o=0;o<n.length;o++)if(!r.call(t,i(n,o),o,n))return!1;return!0}(n,r,t):function(e,r,t){var n;for(n=0;n<e.length;n++)if(!r.call(t,e[n],n,e))return!1;return!0}(e,r,t))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).everyBy=r();
//# sourceMappingURL=browser.js.map