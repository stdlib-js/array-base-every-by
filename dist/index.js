"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=s(function(j,u){
var f=require('@stdlib/array-base-arraylike2object/dist');function i(r,e){return typeof r[e]=="function"}function l(r,e,n){var t;for(t=0;t<r.length;t++)if(!e.call(n,r[t],t,r))return!1;return!0}function v(r,e,n){var t,o,a;for(t=r.data,o=r.accessors[0],a=0;a<t.length;a++)if(!e.call(n,o(t,a),a,t))return!1;return!0}function y(r,e,n){var t;return i(r,"every")?r.every(e,n):(t=f(r),t.accessorProtocol?v(t,e,n):l(r,e,n))}u.exports=y
});var b=c();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
