"use strict";var q=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(t){throw (a=0, t)}};};var c=q(function(D,m){
var n=5;function b(i,a,t,o,r,f,O){var u,e,v,s;if(i<=0)return r;if(u=o,e=O,t===1&&f===1){if(v=i%n,v>0)for(s=0;s<v;s++)r[e]=a[u]-r[e],u+=t,e+=f;if(i<n)return r;for(s=v;s<i;s+=n)r[e]=a[u]-r[e],r[e+1]=a[u+1]-r[e+1],r[e+2]=a[u+2]-r[e+2],r[e+3]=a[u+3]-r[e+3],r[e+4]=a[u+4]-r[e+4],u+=n,e+=n;return r}for(s=0;s<i;s++)r[e]=a[u]-r[e],u+=t,e+=f;return r}m.exports=b
});var l=q(function(F,x){
var j=require('@stdlib/strided-base-stride2offset/dist'),d=c();function g(i,a,t,o,r){return d(i,a,t,j(i,t),o,r,j(i,r))}x.exports=g
});var E=q(function(G,_){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=l(),k=c();h(R,"ndarray",k);_.exports=R
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=E(),p,M=z(w(__dirname,"./native.js"));A(M)?p=B:p=M;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
