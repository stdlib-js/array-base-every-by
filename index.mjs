// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function e(e,t,n){var o;return function(r,e){return"function"==typeof r[e]}(e,"every")?e.every(t,n):(o=r(e)).accessorProtocol?function(r,e,t){var n,o,a;for(n=r.data,o=r.accessors[0],a=0;a<n.length;a++)if(!e.call(t,o(n,a),a,n))return!1;return!0}(o,t,n):function(r,e,t){var n;for(n=0;n<r.length;n++)if(!e.call(t,r[n],n,r))return!1;return!0}(e,t,n)}export{e as default};
//# sourceMappingURL=index.mjs.map
