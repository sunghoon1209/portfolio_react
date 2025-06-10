(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function e(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=e(o);fetch(o.href,u)}})();function OR(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var sm={exports:{}},su={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function xR(){if(V0)return su;V0=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(s,o,u){var h=null;if(u!==void 0&&(h=""+u),o.key!==void 0&&(h=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:n,type:s,key:h,ref:o!==void 0?o:null,props:u}}return su.Fragment=t,su.jsx=e,su.jsxs=e,su}var L0;function NR(){return L0||(L0=1,sm.exports=xR()),sm.exports}var nt=NR(),am={exports:{}},Ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function kR(){if(U0)return Ct;U0=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=A&&N[A]||N["@@iterator"],typeof N=="function"?N:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,q={};function U(N,et,ot){this.props=N,this.context=et,this.refs=q,this.updater=ot||I}U.prototype.isReactComponent={},U.prototype.setState=function(N,et){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,et,"setState")},U.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function G(){}G.prototype=U.prototype;function Z(N,et,ot){this.props=N,this.context=et,this.refs=q,this.updater=ot||I}var $=Z.prototype=new G;$.constructor=Z,x($,U.prototype),$.isPureReactComponent=!0;var rt=Array.isArray,at={H:null,A:null,T:null,S:null,V:null},ct=Object.prototype.hasOwnProperty;function C(N,et,ot,st,pt,Rt){return ot=Rt.ref,{$$typeof:n,type:N,key:et,ref:ot!==void 0?ot:null,props:Rt}}function b(N,et){return C(N.type,et,void 0,void 0,void 0,N.props)}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function k(N){var et={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ot){return et[ot]})}var P=/\/+/g;function L(N,et){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):et.toString(36)}function O(){}function Ie(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(et){N.status==="pending"&&(N.status="fulfilled",N.value=et)},function(et){N.status==="pending"&&(N.status="rejected",N.reason=et)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function re(N,et,ot,st,pt){var Rt=typeof N;(Rt==="undefined"||Rt==="boolean")&&(N=null);var yt=!1;if(N===null)yt=!0;else switch(Rt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(N.$$typeof){case n:case t:yt=!0;break;case E:return yt=N._init,re(yt(N._payload),et,ot,st,pt)}}if(yt)return pt=pt(N),yt=st===""?"."+L(N,0):st,rt(pt)?(ot="",yt!=null&&(ot=yt.replace(P,"$&/")+"/"),re(pt,et,ot,"",function(Ve){return Ve})):pt!=null&&(R(pt)&&(pt=b(pt,ot+(pt.key==null||N&&N.key===pt.key?"":(""+pt.key).replace(P,"$&/")+"/")+yt)),et.push(pt)),1;yt=0;var le=st===""?".":st+":";if(rt(N))for(var Ht=0;Ht<N.length;Ht++)st=N[Ht],Rt=le+L(st,Ht),yt+=re(st,et,ot,Rt,pt);else if(Ht=w(N),typeof Ht=="function")for(N=Ht.call(N),Ht=0;!(st=N.next()).done;)st=st.value,Rt=le+L(st,Ht++),yt+=re(st,et,ot,Rt,pt);else if(Rt==="object"){if(typeof N.then=="function")return re(Ie(N),et,ot,st,pt);throw et=String(N),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return yt}function Y(N,et,ot){if(N==null)return N;var st=[],pt=0;return re(N,st,"","",function(Rt){return et.call(ot,Rt,pt++)}),st}function ut(N){if(N._status===-1){var et=N._result;et=et(),et.then(function(ot){(N._status===0||N._status===-1)&&(N._status=1,N._result=ot)},function(ot){(N._status===0||N._status===-1)&&(N._status=2,N._result=ot)}),N._status===-1&&(N._status=0,N._result=et)}if(N._status===1)return N._result.default;throw N._result}var dt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function It(){}return Ct.Children={map:Y,forEach:function(N,et,ot){Y(N,function(){et.apply(this,arguments)},ot)},count:function(N){var et=0;return Y(N,function(){et++}),et},toArray:function(N){return Y(N,function(et){return et})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ct.Component=U,Ct.Fragment=e,Ct.Profiler=o,Ct.PureComponent=Z,Ct.StrictMode=s,Ct.Suspense=m,Ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=at,Ct.__COMPILER_RUNTIME={__proto__:null,c:function(N){return at.H.useMemoCache(N)}},Ct.cache=function(N){return function(){return N.apply(null,arguments)}},Ct.cloneElement=function(N,et,ot){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var st=x({},N.props),pt=N.key,Rt=void 0;if(et!=null)for(yt in et.ref!==void 0&&(Rt=void 0),et.key!==void 0&&(pt=""+et.key),et)!ct.call(et,yt)||yt==="key"||yt==="__self"||yt==="__source"||yt==="ref"&&et.ref===void 0||(st[yt]=et[yt]);var yt=arguments.length-2;if(yt===1)st.children=ot;else if(1<yt){for(var le=Array(yt),Ht=0;Ht<yt;Ht++)le[Ht]=arguments[Ht+2];st.children=le}return C(N.type,pt,void 0,void 0,Rt,st)},Ct.createContext=function(N){return N={$$typeof:h,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},Ct.createElement=function(N,et,ot){var st,pt={},Rt=null;if(et!=null)for(st in et.key!==void 0&&(Rt=""+et.key),et)ct.call(et,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(pt[st]=et[st]);var yt=arguments.length-2;if(yt===1)pt.children=ot;else if(1<yt){for(var le=Array(yt),Ht=0;Ht<yt;Ht++)le[Ht]=arguments[Ht+2];pt.children=le}if(N&&N.defaultProps)for(st in yt=N.defaultProps,yt)pt[st]===void 0&&(pt[st]=yt[st]);return C(N,Rt,void 0,void 0,null,pt)},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(N){return{$$typeof:p,render:N}},Ct.isValidElement=R,Ct.lazy=function(N){return{$$typeof:E,_payload:{_status:-1,_result:N},_init:ut}},Ct.memo=function(N,et){return{$$typeof:g,type:N,compare:et===void 0?null:et}},Ct.startTransition=function(N){var et=at.T,ot={};at.T=ot;try{var st=N(),pt=at.S;pt!==null&&pt(ot,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(It,dt)}catch(Rt){dt(Rt)}finally{at.T=et}},Ct.unstable_useCacheRefresh=function(){return at.H.useCacheRefresh()},Ct.use=function(N){return at.H.use(N)},Ct.useActionState=function(N,et,ot){return at.H.useActionState(N,et,ot)},Ct.useCallback=function(N,et){return at.H.useCallback(N,et)},Ct.useContext=function(N){return at.H.useContext(N)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(N,et){return at.H.useDeferredValue(N,et)},Ct.useEffect=function(N,et,ot){var st=at.H;if(typeof ot=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return st.useEffect(N,et)},Ct.useId=function(){return at.H.useId()},Ct.useImperativeHandle=function(N,et,ot){return at.H.useImperativeHandle(N,et,ot)},Ct.useInsertionEffect=function(N,et){return at.H.useInsertionEffect(N,et)},Ct.useLayoutEffect=function(N,et){return at.H.useLayoutEffect(N,et)},Ct.useMemo=function(N,et){return at.H.useMemo(N,et)},Ct.useOptimistic=function(N,et){return at.H.useOptimistic(N,et)},Ct.useReducer=function(N,et,ot){return at.H.useReducer(N,et,ot)},Ct.useRef=function(N){return at.H.useRef(N)},Ct.useState=function(N){return at.H.useState(N)},Ct.useSyncExternalStore=function(N,et,ot){return at.H.useSyncExternalStore(N,et,ot)},Ct.useTransition=function(){return at.H.useTransition()},Ct.version="19.1.0",Ct}var z0;function gg(){return z0||(z0=1,am.exports=kR()),am.exports}var X=gg();const ri=OR(X);var om={exports:{}},au={},lm={exports:{}},um={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function MR(){return B0||(B0=1,function(n){function t(Y,ut){var dt=Y.length;Y.push(ut);t:for(;0<dt;){var It=dt-1>>>1,N=Y[It];if(0<o(N,ut))Y[It]=ut,Y[dt]=N,dt=It;else break t}}function e(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ut=Y[0],dt=Y.pop();if(dt!==ut){Y[0]=dt;t:for(var It=0,N=Y.length,et=N>>>1;It<et;){var ot=2*(It+1)-1,st=Y[ot],pt=ot+1,Rt=Y[pt];if(0>o(st,dt))pt<N&&0>o(Rt,st)?(Y[It]=Rt,Y[pt]=dt,It=pt):(Y[It]=st,Y[ot]=dt,It=ot);else if(pt<N&&0>o(Rt,dt))Y[It]=Rt,Y[pt]=dt,It=pt;else break t}}return ut}function o(Y,ut){var dt=Y.sortIndex-ut.sortIndex;return dt!==0?dt:Y.id-ut.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();n.unstable_now=function(){return h.now()-p}}var m=[],g=[],E=1,A=null,w=3,I=!1,x=!1,q=!1,U=!1,G=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function rt(Y){for(var ut=e(g);ut!==null;){if(ut.callback===null)s(g);else if(ut.startTime<=Y)s(g),ut.sortIndex=ut.expirationTime,t(m,ut);else break;ut=e(g)}}function at(Y){if(q=!1,rt(Y),!x)if(e(m)!==null)x=!0,ct||(ct=!0,L());else{var ut=e(g);ut!==null&&re(at,ut.startTime-Y)}}var ct=!1,C=-1,b=5,R=-1;function k(){return U?!0:!(n.unstable_now()-R<b)}function P(){if(U=!1,ct){var Y=n.unstable_now();R=Y;var ut=!0;try{t:{x=!1,q&&(q=!1,Z(C),C=-1),I=!0;var dt=w;try{e:{for(rt(Y),A=e(m);A!==null&&!(A.expirationTime>Y&&k());){var It=A.callback;if(typeof It=="function"){A.callback=null,w=A.priorityLevel;var N=It(A.expirationTime<=Y);if(Y=n.unstable_now(),typeof N=="function"){A.callback=N,rt(Y),ut=!0;break e}A===e(m)&&s(m),rt(Y)}else s(m);A=e(m)}if(A!==null)ut=!0;else{var et=e(g);et!==null&&re(at,et.startTime-Y),ut=!1}}break t}finally{A=null,w=dt,I=!1}ut=void 0}}finally{ut?L():ct=!1}}}var L;if(typeof $=="function")L=function(){$(P)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,Ie=O.port2;O.port1.onmessage=P,L=function(){Ie.postMessage(null)}}else L=function(){G(P,0)};function re(Y,ut){C=G(function(){Y(n.unstable_now())},ut)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var ut=3;break;default:ut=w}var dt=w;w=ut;try{return Y()}finally{w=dt}},n.unstable_requestPaint=function(){U=!0},n.unstable_runWithPriority=function(Y,ut){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var dt=w;w=Y;try{return ut()}finally{w=dt}},n.unstable_scheduleCallback=function(Y,ut,dt){var It=n.unstable_now();switch(typeof dt=="object"&&dt!==null?(dt=dt.delay,dt=typeof dt=="number"&&0<dt?It+dt:It):dt=It,Y){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=dt+N,Y={id:E++,callback:ut,priorityLevel:Y,startTime:dt,expirationTime:N,sortIndex:-1},dt>It?(Y.sortIndex=dt,t(g,Y),e(m)===null&&Y===e(g)&&(q?(Z(C),C=-1):q=!0,re(at,dt-It))):(Y.sortIndex=N,t(m,Y),x||I||(x=!0,ct||(ct=!0,L()))),Y},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(Y){var ut=w;return function(){var dt=w;w=ut;try{return Y.apply(this,arguments)}finally{w=dt}}}}(um)),um}var j0;function PR(){return j0||(j0=1,lm.exports=MR()),lm.exports}var cm={exports:{}},nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function VR(){if(H0)return nn;H0=1;var n=gg();function t(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var s={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,g,E){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:A==null?null:""+A,children:m,containerInfo:g,implementation:E}}var h=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,nn.createPortal=function(m,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return u(m,g,null,E)},nn.flushSync=function(m){var g=h.T,E=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=g,s.p=E,s.d.f()}},nn.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},nn.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var E=g.as,A=p(E,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,I=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:A,integrity:w,fetchPriority:I}):E==="script"&&s.d.X(m,{crossOrigin:A,integrity:w,fetchPriority:I,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},nn.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=p(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},nn.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,A=p(E,g.crossOrigin);s.d.L(m,E,{crossOrigin:A,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},nn.preloadModule=function(m,g){if(typeof m=="string")if(g){var E=p(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},nn.requestFormReset=function(m){s.d.r(m)},nn.unstable_batchedUpdates=function(m,g){return m(g)},nn.useFormState=function(m,g,E){return h.H.useFormState(m,g,E)},nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},nn.version="19.1.0",nn}var q0;function LR(){if(q0)return cm.exports;q0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),cm.exports=VR(),cm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function UR(){if(F0)return au;F0=1;var n=PR(),t=gg(),e=LR();function s(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function u(i){var r=i,a=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(a=r.return),i=r.return;while(i)}return r.tag===3?a:null}function h(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function p(i){if(u(i)!==i)throw Error(s(188))}function m(i){var r=i.alternate;if(!r){if(r=u(i),r===null)throw Error(s(188));return r!==i?null:i}for(var a=i,l=r;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return p(f),i;if(d===l)return p(f),r;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=f,l=d;else{for(var v=!1,T=f.child;T;){if(T===a){v=!0,a=f,l=d;break}if(T===l){v=!0,l=f,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=f;break}if(T===l){v=!0,l=d,a=f;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?i:r}function g(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=g(i),r!==null)return r;i=i.sibling}return null}var E=Object.assign,A=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),$=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),ct=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function L(i){return i===null||typeof i!="object"?null:(i=P&&i[P]||i["@@iterator"],typeof i=="function"?i:null)}var O=Symbol.for("react.client.reference");function Ie(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===O?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case x:return"Fragment";case U:return"Profiler";case q:return"StrictMode";case at:return"Suspense";case ct:return"SuspenseList";case R:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case I:return"Portal";case $:return(i.displayName||"Context")+".Provider";case Z:return(i._context.displayName||"Context")+".Consumer";case rt:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case C:return r=i.displayName||null,r!==null?r:Ie(i.type)||"Memo";case b:r=i._payload,i=i._init;try{return Ie(i(r))}catch{}}return null}var re=Array.isArray,Y=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},It=[],N=-1;function et(i){return{current:i}}function ot(i){0>N||(i.current=It[N],It[N]=null,N--)}function st(i,r){N++,It[N]=i.current,i.current=r}var pt=et(null),Rt=et(null),yt=et(null),le=et(null);function Ht(i,r){switch(st(yt,r),st(Rt,i),st(pt,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?c0(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=c0(r),i=h0(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}ot(pt),st(pt,i)}function Ve(){ot(pt),ot(Rt),ot(yt)}function kn(i){i.memoizedState!==null&&st(le,i);var r=pt.current,a=h0(r,i.type);r!==a&&(st(Rt,i),st(pt,a))}function pn(i){Rt.current===i&&(ot(pt),ot(Rt)),le.current===i&&(ot(le),tu._currentValue=dt)}var Je=Object.prototype.hasOwnProperty,vs=n.unstable_scheduleCallback,Es=n.unstable_cancelCallback,Wo=n.unstable_shouldYield,Xu=n.unstable_requestPaint,Mn=n.unstable_now,sd=n.unstable_getCurrentPriorityLevel,Zo=n.unstable_ImmediatePriority,Sa=n.unstable_UserBlockingPriority,Ts=n.unstable_NormalPriority,ad=n.unstable_LowPriority,ba=n.unstable_IdlePriority,Jo=n.log,Wu=n.unstable_setDisableYieldValue,fe=null,Yt=null;function Tn(i){if(typeof Jo=="function"&&Wu(i),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(fe,i)}catch{}}var tn=Math.clz32?Math.clz32:As,Zu=Math.log,od=Math.LN2;function As(i){return i>>>=0,i===0?32:31-(Zu(i)/od|0)|0}var ws=256,Ss=4194304;function Zn(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Ra(i,r,a){var l=i.pendingLanes;if(l===0)return 0;var f=0,d=i.suspendedLanes,v=i.pingedLanes;i=i.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?f=Zn(l):(v&=T,v!==0?f=Zn(v):a||(a=T&~i,a!==0&&(f=Zn(a))))):(T=l&~d,T!==0?f=Zn(T):v!==0?f=Zn(v):a||(a=l&~i,a!==0&&(f=Zn(a)))),f===0?0:r!==0&&r!==f&&(r&d)===0&&(d=f&-f,a=r&-r,d>=a||d===32&&(a&4194048)!==0)?r:f}function bs(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function tl(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function el(){var i=ws;return ws<<=1,(ws&4194048)===0&&(ws=256),i}function nl(){var i=Ss;return Ss<<=1,(Ss&62914560)===0&&(Ss=4194304),i}function Bi(i){for(var r=[],a=0;31>a;a++)r.push(i);return r}function ji(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function il(i,r,a,l,f,d){var v=i.pendingLanes;i.pendingLanes=a,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=a,i.entangledLanes&=a,i.errorRecoveryDisabledLanes&=a,i.shellSuspendCounter=0;var T=i.entanglements,D=i.expirationTimes,j=i.hiddenUpdates;for(a=v&~a;0<a;){var Q=31-tn(a),J=1<<Q;T[Q]=0,D[Q]=-1;var H=j[Q];if(H!==null)for(j[Q]=null,Q=0;Q<H.length;Q++){var F=H[Q];F!==null&&(F.lane&=-536870913)}a&=~J}l!==0&&fi(i,l,0),d!==0&&f===0&&i.tag!==0&&(i.suspendedLanes|=d&~(v&~r))}function fi(i,r,a){i.pendingLanes|=r,i.suspendedLanes&=~r;var l=31-tn(r);i.entangledLanes|=r,i.entanglements[l]=i.entanglements[l]|1073741824|a&4194090}function rl(i,r){var a=i.entangledLanes|=r;for(i=i.entanglements;a;){var l=31-tn(a),f=1<<l;f&r|i[l]&r&&(i[l]|=r),a&=~f}}function Tr(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Ia(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Ar(){var i=ut.p;return i!==0?i:(i=window.event,i===void 0?32:O0(i.type))}function Ju(i,r){var a=ut.p;try{return ut.p=i,r()}finally{ut.p=a}}var se=Math.random().toString(36).slice(2),Ce="__reactFiber$"+se,Te="__reactProps$"+se,Pn="__reactContainer$"+se,sl="__reactEvents$"+se,ld="__reactListeners$"+se,wr="__reactHandles$"+se,tc="__reactResources$"+se,Rs="__reactMarker$"+se;function Sr(i){delete i[Ce],delete i[Te],delete i[sl],delete i[ld],delete i[wr]}function Hi(i){var r=i[Ce];if(r)return r;for(var a=i.parentNode;a;){if(r=a[Pn]||a[Ce]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(i=m0(i);i!==null;){if(a=i[Ce])return a;i=m0(i)}return r}i=a,a=i.parentNode}return null}function di(i){if(i=i[Ce]||i[Pn]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function pi(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(s(33))}function un(i){var r=i[tc];return r||(r=i[tc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function ye(i){i[Rs]=!0}var al=new Set,Ca={};function Jn(i,r){qi(i,r),qi(i+"Capture",r)}function qi(i,r){for(Ca[i]=r,i=0;i<r.length;i++)al.add(r[i])}var ec=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nc={},Is={};function ic(i){return Je.call(Is,i)?!0:Je.call(nc,i)?!1:ec.test(i)?Is[i]=!0:(nc[i]=!0,!1)}function br(i,r,a){if(ic(r))if(a===null)i.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+a)}}function mi(i,r,a){if(a===null)i.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+a)}}function Ge(i,r,a,l){if(l===null)i.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(a);return}i.setAttributeNS(r,a,""+l)}}var Cs,rc;function Fi(i){if(Cs===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);Cs=r&&r[1]||"",rc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Cs+i+rc}var Da=!1;function Oa(i,r){if(!i||Da)return"";Da=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(F){var H=F}Reflect.construct(i,[],J)}else{try{J.call()}catch(F){H=F}i.call(J.prototype)}}else{try{throw Error()}catch(F){H=F}(J=i())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(F){if(F&&H&&typeof F.stack=="string")return[F.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var D=v.split(`
`),j=T.split(`
`);for(f=l=0;l<D.length&&!D[l].includes("DetermineComponentFrameRoot");)l++;for(;f<j.length&&!j[f].includes("DetermineComponentFrameRoot");)f++;if(l===D.length||f===j.length)for(l=D.length-1,f=j.length-1;1<=l&&0<=f&&D[l]!==j[f];)f--;for(;1<=l&&0<=f;l--,f--)if(D[l]!==j[f]){if(l!==1||f!==1)do if(l--,f--,0>f||D[l]!==j[f]){var Q=`
`+D[l].replace(" at new "," at ");return i.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",i.displayName)),Q}while(1<=l&&0<=f);break}}}finally{Da=!1,Error.prepareStackTrace=a}return(a=i?i.displayName||i.name:"")?Fi(a):""}function ol(i){switch(i.tag){case 26:case 27:case 5:return Fi(i.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 15:return Oa(i.type,!1);case 11:return Oa(i.type.render,!1);case 1:return Oa(i.type,!0);case 31:return Fi("Activity");default:return""}}function xa(i){try{var r="";do r+=ol(i),i=i.return;while(i);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function cn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ll(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ud(i){var r=ll(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),l=""+i[r];if(!i.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(i,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Na(i){i._valueTracker||(i._valueTracker=ud(i))}function ul(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return i&&(l=ll(i)?i.checked?"true":"false":i.value),i=l,i!==a?(r.setValue(i),!0):!1}function Ds(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var cd=/[\n"\\]/g;function Ae(i){return i.replace(cd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function An(i,r,a,l,f,d,v,T){i.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?i.type=v:i.removeAttribute("type"),r!=null?v==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+cn(r)):i.value!==""+cn(r)&&(i.value=""+cn(r)):v!=="submit"&&v!=="reset"||i.removeAttribute("value"),r!=null?Rr(i,v,cn(r)):a!=null?Rr(i,v,cn(a)):l!=null&&i.removeAttribute("value"),f==null&&d!=null&&(i.defaultChecked=!!d),f!=null&&(i.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.name=""+cn(T):i.removeAttribute("name")}function Os(i,r,a,l,f,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(i.type=d),r!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||r!=null))return;a=a!=null?""+cn(a):"",r=r!=null?""+cn(r):a,T||r===i.value||(i.value=r),i.defaultValue=r}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,i.checked=T?i.checked:!!l,i.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(i.name=v)}function Rr(i,r,a){r==="number"&&Ds(i.ownerDocument)===i||i.defaultValue===""+a||(i.defaultValue=""+a)}function Gi(i,r,a,l){if(i=i.options,r){r={};for(var f=0;f<a.length;f++)r["$"+a[f]]=!0;for(a=0;a<i.length;a++)f=r.hasOwnProperty("$"+i[a].value),i[a].selected!==f&&(i[a].selected=f),f&&l&&(i[a].defaultSelected=!0)}else{for(a=""+cn(a),r=null,f=0;f<i.length;f++){if(i[f].value===a){i[f].selected=!0,l&&(i[f].defaultSelected=!0);return}r!==null||i[f].disabled||(r=i[f])}r!==null&&(r.selected=!0)}}function Wt(i,r,a){if(r!=null&&(r=""+cn(r),r!==i.value&&(i.value=r),a==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=a!=null?""+cn(a):""}function xs(i,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(s(92));if(re(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=cn(r),i.defaultValue=a,l=i.textContent,l===a&&l!==""&&l!==null&&(i.value=l)}function Vn(i,r){if(r){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=r;return}}i.textContent=r}var Ns=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sc(i,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":l?i.setProperty(r,a):typeof a!="number"||a===0||Ns.has(r)?r==="float"?i.cssFloat=a:i[r]=(""+a).trim():i[r]=a+"px"}function cl(i,r,a){if(r!=null&&typeof r!="object")throw Error(s(62));if(i=i.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?i.setProperty(l,""):l==="float"?i.cssFloat="":i[l]="");for(var f in r)l=r[f],r.hasOwnProperty(f)&&a[f]!==l&&sc(i,f,l)}else for(var d in r)r.hasOwnProperty(d)&&sc(i,d,r[d])}function hl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ka(i){return fd.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var $i=null;function Ln(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ki=null,Yi=null;function fl(i){var r=di(i);if(r&&(i=r.stateNode)){var a=i[Te]||null;t:switch(i=r.stateNode,r.type){case"input":if(An(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ae(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==i&&l.form===i.form){var f=l[Te]||null;if(!f)throw Error(s(90));An(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===i.form&&ul(l)}break t;case"textarea":Wt(i,a.value,a.defaultValue);break t;case"select":r=a.value,r!=null&&Gi(i,!!a.multiple,r,!1)}}}var gi=!1;function ac(i,r,a){if(gi)return i(r,a);gi=!0;try{var l=i(r);return l}finally{if(gi=!1,(Ki!==null||Yi!==null)&&(Jc(),Ki&&(r=Ki,i=Yi,Yi=Ki=null,fl(r),i)))for(r=0;r<i.length;r++)fl(i[r])}}function ks(i,r){var a=i.stateNode;if(a===null)return null;var l=a[Te]||null;if(l===null)return null;a=l[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(i=i.type,l=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!l;break t;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(s(231,r,typeof a));return a}var ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Un=!1;if(ti)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){Un=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{Un=!1}var yi=null,Ir=null,Qi=null;function dl(){if(Qi)return Qi;var i,r=Ir,a=r.length,l,f="value"in yi?yi.value:yi.textContent,d=f.length;for(i=0;i<a&&r[i]===f[i];i++);var v=a-i;for(l=1;l<=v&&r[a-l]===f[d-l];l++);return Qi=f.slice(i,1<l?1-l:void 0)}function _i(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function vi(){return!0}function pl(){return!1}function Le(i){function r(a,l,f,d,v){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in i)i.hasOwnProperty(T)&&(a=i[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?vi:pl,this.isPropagationStopped=pl,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),r}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ma=Le(Gt),Ps=E({},Gt,{view:0,detail:0}),oc=Le(Ps),Pa,Va,Ei,Vs=E({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ei&&(Ei&&i.type==="mousemove"?(Pa=i.screenX-Ei.screenX,Va=i.screenY-Ei.screenY):Va=Pa=0,Ei=i),Pa)},movementY:function(i){return"movementY"in i?i.movementY:Va}}),zn=Le(Vs),lc=E({},Vs,{dataTransfer:0}),dd=Le(lc),Ls=E({},Ps,{relatedTarget:0}),La=Le(Ls),ml=E({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),Ua=Le(ml),uc=E({},Gt,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),za=Le(uc),pd=E({},Gt,{data:0}),gl=Le(pd),Us={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=hc[i])?!!r[i]:!1}function zs(){return yl}var fc=E({},Ps,{key:function(i){if(i.key){var r=Us[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=_i(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?cc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(i){return i.type==="keypress"?_i(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?_i(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Ba=Le(fc),dc=E({},Vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_l=Le(dc),Xi=E({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),pc=Le(Xi),mc=E({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),gc=Le(mc),yc=E({},Vs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),ja=Le(yc),hn=E({},Gt,{newState:0,oldState:0}),_c=Le(hn),vc=[9,13,27,32],Ti=ti&&"CompositionEvent"in window,c=null;ti&&"documentMode"in document&&(c=document.documentMode);var y=ti&&"TextEvent"in window&&!c,_=ti&&(!Ti||c&&8<c&&11>=c),S=" ",z=!1;function K(i,r){switch(i){case"keyup":return vc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lt(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ut=!1;function De(i,r){switch(i){case"compositionend":return lt(r);case"keypress":return r.which!==32?null:(z=!0,S);case"textInput":return i=r.data,i===S&&z?null:i;default:return null}}function zt(i,r){if(Ut)return i==="compositionend"||!Ti&&K(i,r)?(i=dl(),Qi=Ir=yi=null,Ut=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _&&r.locale!=="ko"?null:r.data;default:return null}}var Ue={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oe(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Ue[i.type]:r==="textarea"}function Wi(i,r,a,l){Ki?Yi?Yi.push(l):Yi=[l]:Ki=l,r=sh(r,"onChange"),0<r.length&&(a=new Ma("onChange","change",null,a,l),i.push({event:a,listeners:r}))}var $e=null,Ai=null;function vl(i){s0(i,0)}function Ec(i){var r=pi(i);if(ul(r))return i}function Ry(i,r){if(i==="change")return r}var Iy=!1;if(ti){var md;if(ti){var gd="oninput"in document;if(!gd){var Cy=document.createElement("div");Cy.setAttribute("oninput","return;"),gd=typeof Cy.oninput=="function"}md=gd}else md=!1;Iy=md&&(!document.documentMode||9<document.documentMode)}function Dy(){$e&&($e.detachEvent("onpropertychange",Oy),Ai=$e=null)}function Oy(i){if(i.propertyName==="value"&&Ec(Ai)){var r=[];Wi(r,Ai,i,Ln(i)),ac(vl,r)}}function a1(i,r,a){i==="focusin"?(Dy(),$e=r,Ai=a,$e.attachEvent("onpropertychange",Oy)):i==="focusout"&&Dy()}function o1(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ec(Ai)}function l1(i,r){if(i==="click")return Ec(r)}function u1(i,r){if(i==="input"||i==="change")return Ec(r)}function c1(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var wn=typeof Object.is=="function"?Object.is:c1;function El(i,r){if(wn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var a=Object.keys(i),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!Je.call(r,f)||!wn(i[f],r[f]))return!1}return!0}function xy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Ny(i,r){var a=xy(i);i=0;for(var l;a;){if(a.nodeType===3){if(l=i+a.textContent.length,i<=r&&l>=r)return{node:a,offset:r-i};i=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xy(a)}}function ky(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?ky(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function My(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Ds(i.document);r instanceof i.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)i=r.contentWindow;else break;r=Ds(i.document)}return r}function yd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var h1=ti&&"documentMode"in document&&11>=document.documentMode,Ha=null,_d=null,Tl=null,vd=!1;function Py(i,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vd||Ha==null||Ha!==Ds(l)||(l=Ha,"selectionStart"in l&&yd(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Tl&&El(Tl,l)||(Tl=l,l=sh(_d,"onSelect"),0<l.length&&(r=new Ma("onSelect","select",null,r,a),i.push({event:r,listeners:l}),r.target=Ha)))}function Bs(i,r){var a={};return a[i.toLowerCase()]=r.toLowerCase(),a["Webkit"+i]="webkit"+r,a["Moz"+i]="moz"+r,a}var qa={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionrun:Bs("Transition","TransitionRun"),transitionstart:Bs("Transition","TransitionStart"),transitioncancel:Bs("Transition","TransitionCancel"),transitionend:Bs("Transition","TransitionEnd")},Ed={},Vy={};ti&&(Vy=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function js(i){if(Ed[i])return Ed[i];if(!qa[i])return i;var r=qa[i],a;for(a in r)if(r.hasOwnProperty(a)&&a in Vy)return Ed[i]=r[a];return i}var Ly=js("animationend"),Uy=js("animationiteration"),zy=js("animationstart"),f1=js("transitionrun"),d1=js("transitionstart"),p1=js("transitioncancel"),By=js("transitionend"),jy=new Map,Td="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Td.push("scrollEnd");function ei(i,r){jy.set(i,r),Jn(r,[i])}var Hy=new WeakMap;function Bn(i,r){if(typeof i=="object"&&i!==null){var a=Hy.get(i);return a!==void 0?a:(r={value:i,source:r,stack:xa(r)},Hy.set(i,r),r)}return{value:i,source:r,stack:xa(r)}}var jn=[],Fa=0,Ad=0;function Tc(){for(var i=Fa,r=Ad=Fa=0;r<i;){var a=jn[r];jn[r++]=null;var l=jn[r];jn[r++]=null;var f=jn[r];jn[r++]=null;var d=jn[r];if(jn[r++]=null,l!==null&&f!==null){var v=l.pending;v===null?f.next=f:(f.next=v.next,v.next=f),l.pending=f}d!==0&&qy(a,f,d)}}function Ac(i,r,a,l){jn[Fa++]=i,jn[Fa++]=r,jn[Fa++]=a,jn[Fa++]=l,Ad|=l,i.lanes|=l,i=i.alternate,i!==null&&(i.lanes|=l)}function wd(i,r,a,l){return Ac(i,r,a,l),wc(i)}function Ga(i,r){return Ac(i,null,null,r),wc(i)}function qy(i,r,a){i.lanes|=a;var l=i.alternate;l!==null&&(l.lanes|=a);for(var f=!1,d=i.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(i=d.stateNode,i===null||i._visibility&1||(f=!0)),i=d,d=d.return;return i.tag===3?(d=i.stateNode,f&&r!==null&&(f=31-tn(a),i=d.hiddenUpdates,l=i[f],l===null?i[f]=[r]:l.push(r),r.lane=a|536870912),d):null}function wc(i){if(50<$l)throw $l=0,Dp=null,Error(s(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var $a={};function m1(i,r,a,l){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sn(i,r,a,l){return new m1(i,r,a,l)}function Sd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Zi(i,r){var a=i.alternate;return a===null?(a=Sn(i.tag,r,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=r,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&65011712,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,r=i.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a.refCleanup=i.refCleanup,a}function Fy(i,r){i.flags&=65011714;var a=i.alternate;return a===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,r=a.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function Sc(i,r,a,l,f,d){var v=0;if(l=i,typeof i=="function")Sd(i)&&(v=1);else if(typeof i=="string")v=yR(i,a,pt.current)?26:i==="html"||i==="head"||i==="body"?27:5;else t:switch(i){case R:return i=Sn(31,a,r,f),i.elementType=R,i.lanes=d,i;case x:return Hs(a.children,f,d,r);case q:v=8,f|=24;break;case U:return i=Sn(12,a,r,f|2),i.elementType=U,i.lanes=d,i;case at:return i=Sn(13,a,r,f),i.elementType=at,i.lanes=d,i;case ct:return i=Sn(19,a,r,f),i.elementType=ct,i.lanes=d,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case G:case $:v=10;break t;case Z:v=9;break t;case rt:v=11;break t;case C:v=14;break t;case b:v=16,l=null;break t}v=29,a=Error(s(130,i===null?"null":typeof i,"")),l=null}return r=Sn(v,a,r,f),r.elementType=i,r.type=l,r.lanes=d,r}function Hs(i,r,a,l){return i=Sn(7,i,l,r),i.lanes=a,i}function bd(i,r,a){return i=Sn(6,i,null,r),i.lanes=a,i}function Rd(i,r,a){return r=Sn(4,i.children!==null?i.children:[],i.key,r),r.lanes=a,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var Ka=[],Ya=0,bc=null,Rc=0,Hn=[],qn=0,qs=null,Ji=1,tr="";function Fs(i,r){Ka[Ya++]=Rc,Ka[Ya++]=bc,bc=i,Rc=r}function Gy(i,r,a){Hn[qn++]=Ji,Hn[qn++]=tr,Hn[qn++]=qs,qs=i;var l=Ji;i=tr;var f=32-tn(l)-1;l&=~(1<<f),a+=1;var d=32-tn(r)+f;if(30<d){var v=f-f%5;d=(l&(1<<v)-1).toString(32),l>>=v,f-=v,Ji=1<<32-tn(r)+f|a<<f|l,tr=d+i}else Ji=1<<d|a<<f|l,tr=i}function Id(i){i.return!==null&&(Fs(i,1),Gy(i,1,0))}function Cd(i){for(;i===bc;)bc=Ka[--Ya],Ka[Ya]=null,Rc=Ka[--Ya],Ka[Ya]=null;for(;i===qs;)qs=Hn[--qn],Hn[qn]=null,tr=Hn[--qn],Hn[qn]=null,Ji=Hn[--qn],Hn[qn]=null}var fn=null,de=null,Ft=!1,Gs=null,wi=!1,Dd=Error(s(519));function $s(i){var r=Error(s(418,""));throw Sl(Bn(r,i)),Dd}function $y(i){var r=i.stateNode,a=i.type,l=i.memoizedProps;switch(r[Ce]=i,r[Te]=l,a){case"dialog":Mt("cancel",r),Mt("close",r);break;case"iframe":case"object":case"embed":Mt("load",r);break;case"video":case"audio":for(a=0;a<Yl.length;a++)Mt(Yl[a],r);break;case"source":Mt("error",r);break;case"img":case"image":case"link":Mt("error",r),Mt("load",r);break;case"details":Mt("toggle",r);break;case"input":Mt("invalid",r),Os(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Na(r);break;case"select":Mt("invalid",r);break;case"textarea":Mt("invalid",r),xs(r,l.value,l.defaultValue,l.children),Na(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||u0(r.textContent,a)?(l.popover!=null&&(Mt("beforetoggle",r),Mt("toggle",r)),l.onScroll!=null&&Mt("scroll",r),l.onScrollEnd!=null&&Mt("scrollend",r),l.onClick!=null&&(r.onclick=ah),r=!0):r=!1,r||$s(i)}function Ky(i){for(fn=i.return;fn;)switch(fn.tag){case 5:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:fn=fn.return}}function Al(i){if(i!==fn)return!1;if(!Ft)return Ky(i),Ft=!0,!1;var r=i.tag,a;if((a=r!==3&&r!==27)&&((a=r===5)&&(a=i.type,a=!(a!=="form"&&a!=="button")||Gp(i.type,i.memoizedProps)),a=!a),a&&de&&$s(i),Ky(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));t:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(a=i.data,a==="/$"){if(r===0){de=ii(i.nextSibling);break t}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;i=i.nextSibling}de=null}}else r===27?(r=de,qr(i.type)?(i=Qp,Qp=null,de=i):de=r):de=fn?ii(i.stateNode.nextSibling):null;return!0}function wl(){de=fn=null,Ft=!1}function Yy(){var i=Gs;return i!==null&&(yn===null?yn=i:yn.push.apply(yn,i),Gs=null),i}function Sl(i){Gs===null?Gs=[i]:Gs.push(i)}var Od=et(null),Ks=null,er=null;function Cr(i,r,a){st(Od,r._currentValue),r._currentValue=a}function nr(i){i._currentValue=Od.current,ot(Od)}function xd(i,r,a){for(;i!==null;){var l=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),i===a)break;i=i.return}}function Nd(i,r,a,l){var f=i.child;for(f!==null&&(f.return=i);f!==null;){var d=f.dependencies;if(d!==null){var v=f.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=f;for(var D=0;D<r.length;D++)if(T.context===r[D]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),xd(d.return,a,i),l||(v=null);break t}d=T.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),xd(v,a,i),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function bl(i,r,a,l){i=null;for(var f=r,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=f.type;wn(f.pendingProps.value,v.value)||(i!==null?i.push(T):i=[T])}}else if(f===le.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(i!==null?i.push(tu):i=[tu])}f=f.return}i!==null&&Nd(r,i,a,l),r.flags|=262144}function Ic(i){for(i=i.firstContext;i!==null;){if(!wn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function Ys(i){Ks=i,er=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function en(i){return Qy(Ks,i)}function Cc(i,r){return Ks===null&&Ys(i),Qy(i,r)}function Qy(i,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},er===null){if(i===null)throw Error(s(308));er=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else er=er.next=r;return a}var g1=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(a,l){i.push(l)}};this.abort=function(){r.aborted=!0,i.forEach(function(a){return a()})}},y1=n.unstable_scheduleCallback,_1=n.unstable_NormalPriority,xe={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kd(){return{controller:new g1,data:new Map,refCount:0}}function Rl(i){i.refCount--,i.refCount===0&&y1(_1,function(){i.controller.abort()})}var Il=null,Md=0,Qa=0,Xa=null;function v1(i,r){if(Il===null){var a=Il=[];Md=0,Qa=Vp(),Xa={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Md++,r.then(Xy,Xy),r}function Xy(){if(--Md===0&&Il!==null){Xa!==null&&(Xa.status="fulfilled");var i=Il;Il=null,Qa=0,Xa=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function E1(i,r){var a=[],l={status:"pending",value:null,reason:null,then:function(f){a.push(f)}};return i.then(function(){l.status="fulfilled",l.value=r;for(var f=0;f<a.length;f++)(0,a[f])(r)},function(f){for(l.status="rejected",l.reason=f,f=0;f<a.length;f++)(0,a[f])(void 0)}),l}var Wy=Y.S;Y.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&v1(i,r),Wy!==null&&Wy(i,r)};var Qs=et(null);function Pd(){var i=Qs.current;return i!==null?i:ne.pooledCache}function Dc(i,r){r===null?st(Qs,Qs.current):st(Qs,r.pool)}function Zy(){var i=Pd();return i===null?null:{parent:xe._currentValue,pool:i}}var Cl=Error(s(460)),Jy=Error(s(474)),Oc=Error(s(542)),Vd={then:function(){}};function t_(i){return i=i.status,i==="fulfilled"||i==="rejected"}function xc(){}function e_(i,r,a){switch(a=i[a],a===void 0?i.push(r):a!==r&&(r.then(xc,xc),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,i_(i),i;default:if(typeof r.status=="string")r.then(xc,xc);else{if(i=ne,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=r,i.status="pending",i.then(function(l){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=l}},function(l){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,i_(i),i}throw Dl=r,Cl}}var Dl=null;function n_(){if(Dl===null)throw Error(s(459));var i=Dl;return Dl=null,i}function i_(i){if(i===Cl||i===Oc)throw Error(s(483))}var Dr=!1;function Ld(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ud(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Or(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function xr(i,r,a){var l=i.updateQueue;if(l===null)return null;if(l=l.shared,(Qt&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,r=wc(i),qy(i,null,a),r}return Ac(i,l,r,a),wc(i)}function Ol(i,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194048)!==0)){var l=r.lanes;l&=i.pendingLanes,a|=l,r.lanes=a,rl(i,a)}}function zd(i,r){var a=i.updateQueue,l=i.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?f=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?f=d=r:d=d.next=r}else f=d=r;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=r:i.next=r,a.lastBaseUpdate=r}var Bd=!1;function xl(){if(Bd){var i=Xa;if(i!==null)throw i}}function Nl(i,r,a,l){Bd=!1;var f=i.updateQueue;Dr=!1;var d=f.firstBaseUpdate,v=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var D=T,j=D.next;D.next=null,v===null?d=j:v.next=j,v=D;var Q=i.alternate;Q!==null&&(Q=Q.updateQueue,T=Q.lastBaseUpdate,T!==v&&(T===null?Q.firstBaseUpdate=j:T.next=j,Q.lastBaseUpdate=D))}if(d!==null){var J=f.baseState;v=0,Q=j=D=null,T=d;do{var H=T.lane&-536870913,F=H!==T.lane;if(F?(Bt&H)===H:(l&H)===H){H!==0&&H===Qa&&(Bd=!0),Q!==null&&(Q=Q.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var wt=i,vt=T;H=r;var te=a;switch(vt.tag){case 1:if(wt=vt.payload,typeof wt=="function"){J=wt.call(te,J,H);break t}J=wt;break t;case 3:wt.flags=wt.flags&-65537|128;case 0:if(wt=vt.payload,H=typeof wt=="function"?wt.call(te,J,H):wt,H==null)break t;J=E({},J,H);break t;case 2:Dr=!0}}H=T.callback,H!==null&&(i.flags|=64,F&&(i.flags|=8192),F=f.callbacks,F===null?f.callbacks=[H]:F.push(H))}else F={lane:H,tag:T.tag,payload:T.payload,callback:T.callback,next:null},Q===null?(j=Q=F,D=J):Q=Q.next=F,v|=H;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;F=T,T=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);Q===null&&(D=J),f.baseState=D,f.firstBaseUpdate=j,f.lastBaseUpdate=Q,d===null&&(f.shared.lanes=0),zr|=v,i.lanes=v,i.memoizedState=J}}function r_(i,r){if(typeof i!="function")throw Error(s(191,i));i.call(r)}function s_(i,r){var a=i.callbacks;if(a!==null)for(i.callbacks=null,i=0;i<a.length;i++)r_(a[i],r)}var Wa=et(null),Nc=et(0);function a_(i,r){i=ur,st(Nc,i),st(Wa,r),ur=i|r.baseLanes}function jd(){st(Nc,ur),st(Wa,Wa.current)}function Hd(){ur=Nc.current,ot(Wa),ot(Nc)}var Nr=0,Ot=null,Zt=null,we=null,kc=!1,Za=!1,Xs=!1,Mc=0,kl=0,Ja=null,T1=0;function _e(){throw Error(s(321))}function qd(i,r){if(r===null)return!1;for(var a=0;a<r.length&&a<i.length;a++)if(!wn(i[a],r[a]))return!1;return!0}function Fd(i,r,a,l,f,d){return Nr=d,Ot=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Y.H=i===null||i.memoizedState===null?q_:F_,Xs=!1,d=a(l,f),Xs=!1,Za&&(d=l_(r,a,l,f)),o_(i),d}function o_(i){Y.H=Bc;var r=Zt!==null&&Zt.next!==null;if(Nr=0,we=Zt=Ot=null,kc=!1,kl=0,Ja=null,r)throw Error(s(300));i===null||ze||(i=i.dependencies,i!==null&&Ic(i)&&(ze=!0))}function l_(i,r,a,l){Ot=i;var f=0;do{if(Za&&(Ja=null),kl=0,Za=!1,25<=f)throw Error(s(301));if(f+=1,we=Zt=null,i.updateQueue!=null){var d=i.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Y.H=C1,d=r(a,l)}while(Za);return d}function A1(){var i=Y.H,r=i.useState()[0];return r=typeof r.then=="function"?Ml(r):r,i=i.useState()[0],(Zt!==null?Zt.memoizedState:null)!==i&&(Ot.flags|=1024),r}function Gd(){var i=Mc!==0;return Mc=0,i}function $d(i,r,a){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~a}function Kd(i){if(kc){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kc=!1}Nr=0,we=Zt=Ot=null,Za=!1,kl=Mc=0,Ja=null}function mn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?Ot.memoizedState=we=i:we=we.next=i,we}function Se(){if(Zt===null){var i=Ot.alternate;i=i!==null?i.memoizedState:null}else i=Zt.next;var r=we===null?Ot.memoizedState:we.next;if(r!==null)we=r,Zt=i;else{if(i===null)throw Ot.alternate===null?Error(s(467)):Error(s(310));Zt=i,i={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},we===null?Ot.memoizedState=we=i:we=we.next=i}return we}function Yd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ml(i){var r=kl;return kl+=1,Ja===null&&(Ja=[]),i=e_(Ja,i,r),r=Ot,(we===null?r.memoizedState:we.next)===null&&(r=r.alternate,Y.H=r===null||r.memoizedState===null?q_:F_),i}function Pc(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Ml(i);if(i.$$typeof===$)return en(i)}throw Error(s(438,String(i)))}function Qd(i){var r=null,a=Ot.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=Ot.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=Yd(),Ot.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(i),l=0;l<i;l++)a[l]=k;return r.index++,a}function ir(i,r){return typeof r=="function"?r(i):r}function Vc(i){var r=Se();return Xd(r,Zt,i)}function Xd(i,r,a){var l=i.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var f=i.baseQueue,d=l.pending;if(d!==null){if(f!==null){var v=f.next;f.next=d.next,d.next=v}r.baseQueue=f=d,l.pending=null}if(d=i.baseState,f===null)i.memoizedState=d;else{r=f.next;var T=v=null,D=null,j=r,Q=!1;do{var J=j.lane&-536870913;if(J!==j.lane?(Bt&J)===J:(Nr&J)===J){var H=j.revertLane;if(H===0)D!==null&&(D=D.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),J===Qa&&(Q=!0);else if((Nr&H)===H){j=j.next,H===Qa&&(Q=!0);continue}else J={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},D===null?(T=D=J,v=d):D=D.next=J,Ot.lanes|=H,zr|=H;J=j.action,Xs&&a(d,J),d=j.hasEagerState?j.eagerState:a(d,J)}else H={lane:J,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},D===null?(T=D=H,v=d):D=D.next=H,Ot.lanes|=J,zr|=J;j=j.next}while(j!==null&&j!==r);if(D===null?v=d:D.next=T,!wn(d,i.memoizedState)&&(ze=!0,Q&&(a=Xa,a!==null)))throw a;i.memoizedState=d,i.baseState=v,i.baseQueue=D,l.lastRenderedState=d}return f===null&&(l.lanes=0),[i.memoizedState,l.dispatch]}function Wd(i){var r=Se(),a=r.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=i;var l=a.dispatch,f=a.pending,d=r.memoizedState;if(f!==null){a.pending=null;var v=f=f.next;do d=i(d,v.action),v=v.next;while(v!==f);wn(d,r.memoizedState)||(ze=!0),r.memoizedState=d,r.baseQueue===null&&(r.baseState=d),a.lastRenderedState=d}return[d,l]}function u_(i,r,a){var l=Ot,f=Se(),d=Ft;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=r();var v=!wn((Zt||f).memoizedState,a);v&&(f.memoizedState=a,ze=!0),f=f.queue;var T=f_.bind(null,l,f,i);if(Pl(2048,8,T,[i]),f.getSnapshot!==r||v||we!==null&&we.memoizedState.tag&1){if(l.flags|=2048,to(9,Lc(),h_.bind(null,l,f,a,r),null),ne===null)throw Error(s(349));d||(Nr&124)!==0||c_(l,r,a)}return a}function c_(i,r,a){i.flags|=16384,i={getSnapshot:r,value:a},r=Ot.updateQueue,r===null?(r=Yd(),Ot.updateQueue=r,r.stores=[i]):(a=r.stores,a===null?r.stores=[i]:a.push(i))}function h_(i,r,a,l){r.value=a,r.getSnapshot=l,d_(r)&&p_(i)}function f_(i,r,a){return a(function(){d_(r)&&p_(i)})}function d_(i){var r=i.getSnapshot;i=i.value;try{var a=r();return!wn(i,a)}catch{return!0}}function p_(i){var r=Ga(i,2);r!==null&&Dn(r,i,2)}function Zd(i){var r=mn();if(typeof i=="function"){var a=i;if(i=a(),Xs){Tn(!0);try{a()}finally{Tn(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:i},r}function m_(i,r,a,l){return i.baseState=a,Xd(i,Zt,typeof l=="function"?l:ir)}function w1(i,r,a,l,f){if(zc(i))throw Error(s(485));if(i=r.action,i!==null){var d={payload:f,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};Y.T!==null?a(!0):d.isTransition=!1,l(d),a=r.pending,a===null?(d.next=r.pending=d,g_(r,d)):(d.next=a.next,r.pending=a.next=d)}}function g_(i,r){var a=r.action,l=r.payload,f=i.state;if(r.isTransition){var d=Y.T,v={};Y.T=v;try{var T=a(f,l),D=Y.S;D!==null&&D(v,T),y_(i,r,T)}catch(j){Jd(i,r,j)}finally{Y.T=d}}else try{d=a(f,l),y_(i,r,d)}catch(j){Jd(i,r,j)}}function y_(i,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){__(i,r,l)},function(l){return Jd(i,r,l)}):__(i,r,a)}function __(i,r,a){r.status="fulfilled",r.value=a,v_(r),i.state=a,r=i.pending,r!==null&&(a=r.next,a===r?i.pending=null:(a=a.next,r.next=a,g_(i,a)))}function Jd(i,r,a){var l=i.pending;if(i.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,v_(r),r=r.next;while(r!==l)}i.action=null}function v_(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function E_(i,r){return r}function T_(i,r){if(Ft){var a=ne.formState;if(a!==null){t:{var l=Ot;if(Ft){if(de){e:{for(var f=de,d=wi;f.nodeType!==8;){if(!d){f=null;break e}if(f=ii(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){de=ii(f.nextSibling),l=f.data==="F!";break t}}$s(l)}l=!1}l&&(r=a[0])}}return a=mn(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:E_,lastRenderedState:r},a.queue=l,a=B_.bind(null,Ot,l),l.dispatch=a,l=Zd(!1),d=rp.bind(null,Ot,!1,l.queue),l=mn(),f={state:r,dispatch:null,action:i,pending:null},l.queue=f,a=w1.bind(null,Ot,f,d,a),f.dispatch=a,l.memoizedState=i,[r,a,!1]}function A_(i){var r=Se();return w_(r,Zt,i)}function w_(i,r,a){if(r=Xd(i,r,E_)[0],i=Vc(ir)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=Ml(r)}catch(v){throw v===Cl?Oc:v}else l=r;r=Se();var f=r.queue,d=f.dispatch;return a!==r.memoizedState&&(Ot.flags|=2048,to(9,Lc(),S1.bind(null,f,a),null)),[l,d,i]}function S1(i,r){i.action=r}function S_(i){var r=Se(),a=Zt;if(a!==null)return w_(r,a,i);Se(),r=r.memoizedState,a=Se();var l=a.queue.dispatch;return a.memoizedState=i,[r,l,!1]}function to(i,r,a,l){return i={tag:i,create:a,deps:l,inst:r,next:null},r=Ot.updateQueue,r===null&&(r=Yd(),Ot.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=i.next=i:(l=a.next,a.next=i,i.next=l,r.lastEffect=i),i}function Lc(){return{destroy:void 0,resource:void 0}}function b_(){return Se().memoizedState}function Uc(i,r,a,l){var f=mn();l=l===void 0?null:l,Ot.flags|=i,f.memoizedState=to(1|r,Lc(),a,l)}function Pl(i,r,a,l){var f=Se();l=l===void 0?null:l;var d=f.memoizedState.inst;Zt!==null&&l!==null&&qd(l,Zt.memoizedState.deps)?f.memoizedState=to(r,d,a,l):(Ot.flags|=i,f.memoizedState=to(1|r,d,a,l))}function R_(i,r){Uc(8390656,8,i,r)}function I_(i,r){Pl(2048,8,i,r)}function C_(i,r){return Pl(4,2,i,r)}function D_(i,r){return Pl(4,4,i,r)}function O_(i,r){if(typeof r=="function"){i=i();var a=r(i);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function x_(i,r,a){a=a!=null?a.concat([i]):null,Pl(4,4,O_.bind(null,r,i),a)}function tp(){}function N_(i,r){var a=Se();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&qd(r,l[1])?l[0]:(a.memoizedState=[i,r],i)}function k_(i,r){var a=Se();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&qd(r,l[1]))return l[0];if(l=i(),Xs){Tn(!0);try{i()}finally{Tn(!1)}}return a.memoizedState=[l,r],l}function ep(i,r,a){return a===void 0||(Nr&1073741824)!==0?i.memoizedState=r:(i.memoizedState=a,i=Vv(),Ot.lanes|=i,zr|=i,a)}function M_(i,r,a,l){return wn(a,r)?a:Wa.current!==null?(i=ep(i,a,l),wn(i,r)||(ze=!0),i):(Nr&42)===0?(ze=!0,i.memoizedState=a):(i=Vv(),Ot.lanes|=i,zr|=i,r)}function P_(i,r,a,l,f){var d=ut.p;ut.p=d!==0&&8>d?d:8;var v=Y.T,T={};Y.T=T,rp(i,!1,r,a);try{var D=f(),j=Y.S;if(j!==null&&j(T,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var Q=E1(D,l);Vl(i,r,Q,Cn(i))}else Vl(i,r,l,Cn(i))}catch(J){Vl(i,r,{then:function(){},status:"rejected",reason:J},Cn())}finally{ut.p=d,Y.T=v}}function b1(){}function np(i,r,a,l){if(i.tag!==5)throw Error(s(476));var f=V_(i).queue;P_(i,f,r,dt,a===null?b1:function(){return L_(i),a(l)})}function V_(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:dt},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:a},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function L_(i){var r=V_(i).next.queue;Vl(i,r,{},Cn())}function ip(){return en(tu)}function U_(){return Se().memoizedState}function z_(){return Se().memoizedState}function R1(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var a=Cn();i=Or(a);var l=xr(r,i,a);l!==null&&(Dn(l,r,a),Ol(l,r,a)),r={cache:kd()},i.payload=r;return}r=r.return}}function I1(i,r,a){var l=Cn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},zc(i)?j_(r,a):(a=wd(i,r,a,l),a!==null&&(Dn(a,i,l),H_(a,r,l)))}function B_(i,r,a){var l=Cn();Vl(i,r,a,l)}function Vl(i,r,a,l){var f={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(zc(i))j_(r,f);else{var d=i.alternate;if(i.lanes===0&&(d===null||d.lanes===0)&&(d=r.lastRenderedReducer,d!==null))try{var v=r.lastRenderedState,T=d(v,a);if(f.hasEagerState=!0,f.eagerState=T,wn(T,v))return Ac(i,r,f,0),ne===null&&Tc(),!1}catch{}finally{}if(a=wd(i,r,f,l),a!==null)return Dn(a,i,l),H_(a,r,l),!0}return!1}function rp(i,r,a,l){if(l={lane:2,revertLane:Vp(),action:l,hasEagerState:!1,eagerState:null,next:null},zc(i)){if(r)throw Error(s(479))}else r=wd(i,a,l,2),r!==null&&Dn(r,i,2)}function zc(i){var r=i.alternate;return i===Ot||r!==null&&r===Ot}function j_(i,r){Za=kc=!0;var a=i.pending;a===null?r.next=r:(r.next=a.next,a.next=r),i.pending=r}function H_(i,r,a){if((a&4194048)!==0){var l=r.lanes;l&=i.pendingLanes,a|=l,r.lanes=a,rl(i,a)}}var Bc={readContext:en,use:Pc,useCallback:_e,useContext:_e,useEffect:_e,useImperativeHandle:_e,useLayoutEffect:_e,useInsertionEffect:_e,useMemo:_e,useReducer:_e,useRef:_e,useState:_e,useDebugValue:_e,useDeferredValue:_e,useTransition:_e,useSyncExternalStore:_e,useId:_e,useHostTransitionStatus:_e,useFormState:_e,useActionState:_e,useOptimistic:_e,useMemoCache:_e,useCacheRefresh:_e},q_={readContext:en,use:Pc,useCallback:function(i,r){return mn().memoizedState=[i,r===void 0?null:r],i},useContext:en,useEffect:R_,useImperativeHandle:function(i,r,a){a=a!=null?a.concat([i]):null,Uc(4194308,4,O_.bind(null,r,i),a)},useLayoutEffect:function(i,r){return Uc(4194308,4,i,r)},useInsertionEffect:function(i,r){Uc(4,2,i,r)},useMemo:function(i,r){var a=mn();r=r===void 0?null:r;var l=i();if(Xs){Tn(!0);try{i()}finally{Tn(!1)}}return a.memoizedState=[l,r],l},useReducer:function(i,r,a){var l=mn();if(a!==void 0){var f=a(r);if(Xs){Tn(!0);try{a(r)}finally{Tn(!1)}}}else f=r;return l.memoizedState=l.baseState=f,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:f},l.queue=i,i=i.dispatch=I1.bind(null,Ot,i),[l.memoizedState,i]},useRef:function(i){var r=mn();return i={current:i},r.memoizedState=i},useState:function(i){i=Zd(i);var r=i.queue,a=B_.bind(null,Ot,r);return r.dispatch=a,[i.memoizedState,a]},useDebugValue:tp,useDeferredValue:function(i,r){var a=mn();return ep(a,i,r)},useTransition:function(){var i=Zd(!1);return i=P_.bind(null,Ot,i.queue,!0,!1),mn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,a){var l=Ot,f=mn();if(Ft){if(a===void 0)throw Error(s(407));a=a()}else{if(a=r(),ne===null)throw Error(s(349));(Bt&124)!==0||c_(l,r,a)}f.memoizedState=a;var d={value:a,getSnapshot:r};return f.queue=d,R_(f_.bind(null,l,d,i),[i]),l.flags|=2048,to(9,Lc(),h_.bind(null,l,d,a,r),null),a},useId:function(){var i=mn(),r=ne.identifierPrefix;if(Ft){var a=tr,l=Ji;a=(l&~(1<<32-tn(l)-1)).toString(32)+a,r="«"+r+"R"+a,a=Mc++,0<a&&(r+="H"+a.toString(32)),r+="»"}else a=T1++,r="«"+r+"r"+a.toString(32)+"»";return i.memoizedState=r},useHostTransitionStatus:ip,useFormState:T_,useActionState:T_,useOptimistic:function(i){var r=mn();r.memoizedState=r.baseState=i;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=rp.bind(null,Ot,!0,a),a.dispatch=r,[i,r]},useMemoCache:Qd,useCacheRefresh:function(){return mn().memoizedState=R1.bind(null,Ot)}},F_={readContext:en,use:Pc,useCallback:N_,useContext:en,useEffect:I_,useImperativeHandle:x_,useInsertionEffect:C_,useLayoutEffect:D_,useMemo:k_,useReducer:Vc,useRef:b_,useState:function(){return Vc(ir)},useDebugValue:tp,useDeferredValue:function(i,r){var a=Se();return M_(a,Zt.memoizedState,i,r)},useTransition:function(){var i=Vc(ir)[0],r=Se().memoizedState;return[typeof i=="boolean"?i:Ml(i),r]},useSyncExternalStore:u_,useId:U_,useHostTransitionStatus:ip,useFormState:A_,useActionState:A_,useOptimistic:function(i,r){var a=Se();return m_(a,Zt,i,r)},useMemoCache:Qd,useCacheRefresh:z_},C1={readContext:en,use:Pc,useCallback:N_,useContext:en,useEffect:I_,useImperativeHandle:x_,useInsertionEffect:C_,useLayoutEffect:D_,useMemo:k_,useReducer:Wd,useRef:b_,useState:function(){return Wd(ir)},useDebugValue:tp,useDeferredValue:function(i,r){var a=Se();return Zt===null?ep(a,i,r):M_(a,Zt.memoizedState,i,r)},useTransition:function(){var i=Wd(ir)[0],r=Se().memoizedState;return[typeof i=="boolean"?i:Ml(i),r]},useSyncExternalStore:u_,useId:U_,useHostTransitionStatus:ip,useFormState:S_,useActionState:S_,useOptimistic:function(i,r){var a=Se();return Zt!==null?m_(a,Zt,i,r):(a.baseState=i,[i,a.queue.dispatch])},useMemoCache:Qd,useCacheRefresh:z_},eo=null,Ll=0;function jc(i){var r=Ll;return Ll+=1,eo===null&&(eo=[]),e_(eo,i,r)}function Ul(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Hc(i,r){throw r.$$typeof===A?Error(s(525)):(i=Object.prototype.toString.call(r),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function G_(i){var r=i._init;return r(i._payload)}function $_(i){function r(V,M){if(i){var B=V.deletions;B===null?(V.deletions=[M],V.flags|=16):B.push(M)}}function a(V,M){if(!i)return null;for(;M!==null;)r(V,M),M=M.sibling;return null}function l(V){for(var M=new Map;V!==null;)V.key!==null?M.set(V.key,V):M.set(V.index,V),V=V.sibling;return M}function f(V,M){return V=Zi(V,M),V.index=0,V.sibling=null,V}function d(V,M,B){return V.index=B,i?(B=V.alternate,B!==null?(B=B.index,B<M?(V.flags|=67108866,M):B):(V.flags|=67108866,M)):(V.flags|=1048576,M)}function v(V){return i&&V.alternate===null&&(V.flags|=67108866),V}function T(V,M,B,W){return M===null||M.tag!==6?(M=bd(B,V.mode,W),M.return=V,M):(M=f(M,B),M.return=V,M)}function D(V,M,B,W){var ft=B.type;return ft===x?Q(V,M,B.props.children,W,B.key):M!==null&&(M.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===b&&G_(ft)===M.type)?(M=f(M,B.props),Ul(M,B),M.return=V,M):(M=Sc(B.type,B.key,B.props,null,V.mode,W),Ul(M,B),M.return=V,M)}function j(V,M,B,W){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=Rd(B,V.mode,W),M.return=V,M):(M=f(M,B.children||[]),M.return=V,M)}function Q(V,M,B,W,ft){return M===null||M.tag!==7?(M=Hs(B,V.mode,W,ft),M.return=V,M):(M=f(M,B),M.return=V,M)}function J(V,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=bd(""+M,V.mode,B),M.return=V,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return B=Sc(M.type,M.key,M.props,null,V.mode,B),Ul(B,M),B.return=V,B;case I:return M=Rd(M,V.mode,B),M.return=V,M;case b:var W=M._init;return M=W(M._payload),J(V,M,B)}if(re(M)||L(M))return M=Hs(M,V.mode,B,null),M.return=V,M;if(typeof M.then=="function")return J(V,jc(M),B);if(M.$$typeof===$)return J(V,Cc(V,M),B);Hc(V,M)}return null}function H(V,M,B,W){var ft=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ft!==null?null:T(V,M,""+B,W);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===ft?D(V,M,B,W):null;case I:return B.key===ft?j(V,M,B,W):null;case b:return ft=B._init,B=ft(B._payload),H(V,M,B,W)}if(re(B)||L(B))return ft!==null?null:Q(V,M,B,W,null);if(typeof B.then=="function")return H(V,M,jc(B),W);if(B.$$typeof===$)return H(V,M,Cc(V,B),W);Hc(V,B)}return null}function F(V,M,B,W,ft){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return V=V.get(B)||null,T(M,V,""+W,ft);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case w:return V=V.get(W.key===null?B:W.key)||null,D(M,V,W,ft);case I:return V=V.get(W.key===null?B:W.key)||null,j(M,V,W,ft);case b:var Nt=W._init;return W=Nt(W._payload),F(V,M,B,W,ft)}if(re(W)||L(W))return V=V.get(B)||null,Q(M,V,W,ft,null);if(typeof W.then=="function")return F(V,M,B,jc(W),ft);if(W.$$typeof===$)return F(V,M,B,Cc(M,W),ft);Hc(M,W)}return null}function wt(V,M,B,W){for(var ft=null,Nt=null,mt=M,Et=M=0,je=null;mt!==null&&Et<B.length;Et++){mt.index>Et?(je=mt,mt=null):je=mt.sibling;var qt=H(V,mt,B[Et],W);if(qt===null){mt===null&&(mt=je);break}i&&mt&&qt.alternate===null&&r(V,mt),M=d(qt,M,Et),Nt===null?ft=qt:Nt.sibling=qt,Nt=qt,mt=je}if(Et===B.length)return a(V,mt),Ft&&Fs(V,Et),ft;if(mt===null){for(;Et<B.length;Et++)mt=J(V,B[Et],W),mt!==null&&(M=d(mt,M,Et),Nt===null?ft=mt:Nt.sibling=mt,Nt=mt);return Ft&&Fs(V,Et),ft}for(mt=l(mt);Et<B.length;Et++)je=F(mt,V,Et,B[Et],W),je!==null&&(i&&je.alternate!==null&&mt.delete(je.key===null?Et:je.key),M=d(je,M,Et),Nt===null?ft=je:Nt.sibling=je,Nt=je);return i&&mt.forEach(function(Yr){return r(V,Yr)}),Ft&&Fs(V,Et),ft}function vt(V,M,B,W){if(B==null)throw Error(s(151));for(var ft=null,Nt=null,mt=M,Et=M=0,je=null,qt=B.next();mt!==null&&!qt.done;Et++,qt=B.next()){mt.index>Et?(je=mt,mt=null):je=mt.sibling;var Yr=H(V,mt,qt.value,W);if(Yr===null){mt===null&&(mt=je);break}i&&mt&&Yr.alternate===null&&r(V,mt),M=d(Yr,M,Et),Nt===null?ft=Yr:Nt.sibling=Yr,Nt=Yr,mt=je}if(qt.done)return a(V,mt),Ft&&Fs(V,Et),ft;if(mt===null){for(;!qt.done;Et++,qt=B.next())qt=J(V,qt.value,W),qt!==null&&(M=d(qt,M,Et),Nt===null?ft=qt:Nt.sibling=qt,Nt=qt);return Ft&&Fs(V,Et),ft}for(mt=l(mt);!qt.done;Et++,qt=B.next())qt=F(mt,V,Et,qt.value,W),qt!==null&&(i&&qt.alternate!==null&&mt.delete(qt.key===null?Et:qt.key),M=d(qt,M,Et),Nt===null?ft=qt:Nt.sibling=qt,Nt=qt);return i&&mt.forEach(function(DR){return r(V,DR)}),Ft&&Fs(V,Et),ft}function te(V,M,B,W){if(typeof B=="object"&&B!==null&&B.type===x&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:t:{for(var ft=B.key;M!==null;){if(M.key===ft){if(ft=B.type,ft===x){if(M.tag===7){a(V,M.sibling),W=f(M,B.props.children),W.return=V,V=W;break t}}else if(M.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===b&&G_(ft)===M.type){a(V,M.sibling),W=f(M,B.props),Ul(W,B),W.return=V,V=W;break t}a(V,M);break}else r(V,M);M=M.sibling}B.type===x?(W=Hs(B.props.children,V.mode,W,B.key),W.return=V,V=W):(W=Sc(B.type,B.key,B.props,null,V.mode,W),Ul(W,B),W.return=V,V=W)}return v(V);case I:t:{for(ft=B.key;M!==null;){if(M.key===ft)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){a(V,M.sibling),W=f(M,B.children||[]),W.return=V,V=W;break t}else{a(V,M);break}else r(V,M);M=M.sibling}W=Rd(B,V.mode,W),W.return=V,V=W}return v(V);case b:return ft=B._init,B=ft(B._payload),te(V,M,B,W)}if(re(B))return wt(V,M,B,W);if(L(B)){if(ft=L(B),typeof ft!="function")throw Error(s(150));return B=ft.call(B),vt(V,M,B,W)}if(typeof B.then=="function")return te(V,M,jc(B),W);if(B.$$typeof===$)return te(V,M,Cc(V,B),W);Hc(V,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(a(V,M.sibling),W=f(M,B),W.return=V,V=W):(a(V,M),W=bd(B,V.mode,W),W.return=V,V=W),v(V)):a(V,M)}return function(V,M,B,W){try{Ll=0;var ft=te(V,M,B,W);return eo=null,ft}catch(mt){if(mt===Cl||mt===Oc)throw mt;var Nt=Sn(29,mt,null,V.mode);return Nt.lanes=W,Nt.return=V,Nt}finally{}}}var no=$_(!0),K_=$_(!1),Fn=et(null),Si=null;function kr(i){var r=i.alternate;st(Ne,Ne.current&1),st(Fn,i),Si===null&&(r===null||Wa.current!==null||r.memoizedState!==null)&&(Si=i)}function Y_(i){if(i.tag===22){if(st(Ne,Ne.current),st(Fn,i),Si===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(Si=i)}}else Mr()}function Mr(){st(Ne,Ne.current),st(Fn,Fn.current)}function rr(i){ot(Fn),Si===i&&(Si=null),ot(Ne)}var Ne=et(0);function qc(i){for(var r=i;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Yp(a)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function sp(i,r,a,l){r=i.memoizedState,a=a(l,r),a=a==null?r:E({},r,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var ap={enqueueSetState:function(i,r,a){i=i._reactInternals;var l=Cn(),f=Or(l);f.payload=r,a!=null&&(f.callback=a),r=xr(i,f,l),r!==null&&(Dn(r,i,l),Ol(r,i,l))},enqueueReplaceState:function(i,r,a){i=i._reactInternals;var l=Cn(),f=Or(l);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=xr(i,f,l),r!==null&&(Dn(r,i,l),Ol(r,i,l))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var a=Cn(),l=Or(a);l.tag=2,r!=null&&(l.callback=r),r=xr(i,l,a),r!==null&&(Dn(r,i,a),Ol(r,i,a))}};function Q_(i,r,a,l,f,d,v){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(l,d,v):r.prototype&&r.prototype.isPureReactComponent?!El(a,l)||!El(f,d):!0}function X_(i,r,a,l){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==i&&ap.enqueueReplaceState(r,r.state,null)}function Ws(i,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(i=i.defaultProps){a===r&&(a=E({},a));for(var f in i)a[f]===void 0&&(a[f]=i[f])}return a}var Fc=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function W_(i){Fc(i)}function Z_(i){console.error(i)}function J_(i){Fc(i)}function Gc(i,r){try{var a=i.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function tv(i,r,a){try{var l=i.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function op(i,r,a){return a=Or(a),a.tag=3,a.payload={element:null},a.callback=function(){Gc(i,r)},a}function ev(i){return i=Or(i),i.tag=3,i}function nv(i,r,a,l){var f=a.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;i.payload=function(){return f(d)},i.callback=function(){tv(r,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(i.callback=function(){tv(r,a,l),typeof f!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function D1(i,r,a,l,f){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&bl(r,a,f,!0),a=Fn.current,a!==null){switch(a.tag){case 13:return Si===null?xp():a.alternate===null&&pe===0&&(pe=3),a.flags&=-257,a.flags|=65536,a.lanes=f,l===Vd?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),kp(i,l,f)),!1;case 22:return a.flags|=65536,l===Vd?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),kp(i,l,f)),!1}throw Error(s(435,a.tag))}return kp(i,l,f),xp(),!1}if(Ft)return r=Fn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,l!==Dd&&(i=Error(s(422),{cause:l}),Sl(Bn(i,a)))):(l!==Dd&&(r=Error(s(423),{cause:l}),Sl(Bn(r,a))),i=i.current.alternate,i.flags|=65536,f&=-f,i.lanes|=f,l=Bn(l,a),f=op(i.stateNode,l,f),zd(i,f),pe!==4&&(pe=2)),!1;var d=Error(s(520),{cause:l});if(d=Bn(d,a),Gl===null?Gl=[d]:Gl.push(d),pe!==4&&(pe=2),r===null)return!0;l=Bn(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,i=f&-f,a.lanes|=i,i=op(a.stateNode,l,i),zd(a,i),!1;case 1:if(r=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Br===null||!Br.has(d))))return a.flags|=65536,f&=-f,a.lanes|=f,f=ev(f),nv(f,i,a,l),zd(a,f),!1}a=a.return}while(a!==null);return!1}var iv=Error(s(461)),ze=!1;function Ke(i,r,a,l){r.child=i===null?K_(r,null,a,l):no(r,i.child,a,l)}function rv(i,r,a,l,f){a=a.render;var d=r.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return Ys(r),l=Fd(i,r,a,v,d,f),T=Gd(),i!==null&&!ze?($d(i,r,f),sr(i,r,f)):(Ft&&T&&Id(r),r.flags|=1,Ke(i,r,l,f),r.child)}function sv(i,r,a,l,f){if(i===null){var d=a.type;return typeof d=="function"&&!Sd(d)&&d.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=d,av(i,r,d,l,f)):(i=Sc(a.type,null,l,r,r.mode,f),i.ref=r.ref,i.return=r,r.child=i)}if(d=i.child,!mp(i,f)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:El,a(v,l)&&i.ref===r.ref)return sr(i,r,f)}return r.flags|=1,i=Zi(d,l),i.ref=r.ref,i.return=r,r.child=i}function av(i,r,a,l,f){if(i!==null){var d=i.memoizedProps;if(El(d,l)&&i.ref===r.ref)if(ze=!1,r.pendingProps=l=d,mp(i,f))(i.flags&131072)!==0&&(ze=!0);else return r.lanes=i.lanes,sr(i,r,f)}return lp(i,r,a,l,f)}function ov(i,r,a){var l=r.pendingProps,f=l.children,d=i!==null?i.memoizedState:null;if(l.mode==="hidden"){if((r.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,i!==null){for(f=r.child=i.child,d=0;f!==null;)d=d|f.lanes|f.childLanes,f=f.sibling;r.childLanes=d&~l}else r.childLanes=0,r.child=null;return lv(i,r,l,a)}if((a&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Dc(r,d!==null?d.cachePool:null),d!==null?a_(r,d):jd(),Y_(r);else return r.lanes=r.childLanes=536870912,lv(i,r,d!==null?d.baseLanes|a:a,a)}else d!==null?(Dc(r,d.cachePool),a_(r,d),Mr(),r.memoizedState=null):(i!==null&&Dc(r,null),jd(),Mr());return Ke(i,r,f,a),r.child}function lv(i,r,a,l){var f=Pd();return f=f===null?null:{parent:xe._currentValue,pool:f},r.memoizedState={baseLanes:a,cachePool:f},i!==null&&Dc(r,null),jd(),Y_(r),i!==null&&bl(i,r,l,!0),null}function $c(i,r){var a=r.ref;if(a===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(i===null||i.ref!==a)&&(r.flags|=4194816)}}function lp(i,r,a,l,f){return Ys(r),a=Fd(i,r,a,l,void 0,f),l=Gd(),i!==null&&!ze?($d(i,r,f),sr(i,r,f)):(Ft&&l&&Id(r),r.flags|=1,Ke(i,r,a,f),r.child)}function uv(i,r,a,l,f,d){return Ys(r),r.updateQueue=null,a=l_(r,l,a,f),o_(i),l=Gd(),i!==null&&!ze?($d(i,r,d),sr(i,r,d)):(Ft&&l&&Id(r),r.flags|=1,Ke(i,r,a,d),r.child)}function cv(i,r,a,l,f){if(Ys(r),r.stateNode===null){var d=$a,v=a.contextType;typeof v=="object"&&v!==null&&(d=en(v)),d=new a(l,d),r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ap,r.stateNode=d,d._reactInternals=r,d=r.stateNode,d.props=l,d.state=r.memoizedState,d.refs={},Ld(r),v=a.contextType,d.context=typeof v=="object"&&v!==null?en(v):$a,d.state=r.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(sp(r,a,v,l),d.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&ap.enqueueReplaceState(d,d.state,null),Nl(r,l,d,f),xl(),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(i===null){d=r.stateNode;var T=r.memoizedProps,D=Ws(a,T);d.props=D;var j=d.context,Q=a.contextType;v=$a,typeof Q=="object"&&Q!==null&&(v=en(Q));var J=a.getDerivedStateFromProps;Q=typeof J=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=r.pendingProps!==T,Q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||j!==v)&&X_(r,d,l,v),Dr=!1;var H=r.memoizedState;d.state=H,Nl(r,l,d,f),xl(),j=r.memoizedState,T||H!==j||Dr?(typeof J=="function"&&(sp(r,a,J,l),j=r.memoizedState),(D=Dr||Q_(r,a,D,l,H,j,v))?(Q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=j),d.props=l,d.state=j,d.context=v,l=D):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{d=r.stateNode,Ud(i,r),v=r.memoizedProps,Q=Ws(a,v),d.props=Q,J=r.pendingProps,H=d.context,j=a.contextType,D=$a,typeof j=="object"&&j!==null&&(D=en(j)),T=a.getDerivedStateFromProps,(j=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==J||H!==D)&&X_(r,d,l,D),Dr=!1,H=r.memoizedState,d.state=H,Nl(r,l,d,f),xl();var F=r.memoizedState;v!==J||H!==F||Dr||i!==null&&i.dependencies!==null&&Ic(i.dependencies)?(typeof T=="function"&&(sp(r,a,T,l),F=r.memoizedState),(Q=Dr||Q_(r,a,Q,l,H,F,D)||i!==null&&i.dependencies!==null&&Ic(i.dependencies))?(j||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,F,D),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,F,D)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=F),d.props=l,d.state=F,d.context=D,l=Q):(typeof d.componentDidUpdate!="function"||v===i.memoizedProps&&H===i.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===i.memoizedProps&&H===i.memoizedState||(r.flags|=1024),l=!1)}return d=l,$c(i,r),l=(r.flags&128)!==0,d||l?(d=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),r.flags|=1,i!==null&&l?(r.child=no(r,i.child,null,f),r.child=no(r,null,a,f)):Ke(i,r,a,f),r.memoizedState=d.state,i=r.child):i=sr(i,r,f),i}function hv(i,r,a,l){return wl(),r.flags|=256,Ke(i,r,a,l),r.child}var up={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cp(i){return{baseLanes:i,cachePool:Zy()}}function hp(i,r,a){return i=i!==null?i.childLanes&~a:0,r&&(i|=Gn),i}function fv(i,r,a){var l=r.pendingProps,f=!1,d=(r.flags&128)!==0,v;if((v=d)||(v=i!==null&&i.memoizedState===null?!1:(Ne.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ft){if(f?kr(r):Mr(),Ft){var T=de,D;if(D=T){t:{for(D=T,T=wi;D.nodeType!==8;){if(!T){T=null;break t}if(D=ii(D.nextSibling),D===null){T=null;break t}}T=D}T!==null?(r.memoizedState={dehydrated:T,treeContext:qs!==null?{id:Ji,overflow:tr}:null,retryLane:536870912,hydrationErrors:null},D=Sn(18,null,null,0),D.stateNode=T,D.return=r,r.child=D,fn=r,de=null,D=!0):D=!1}D||$s(r)}if(T=r.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Yp(T)?r.lanes=32:r.lanes=536870912,null;rr(r)}return T=l.children,l=l.fallback,f?(Mr(),f=r.mode,T=Kc({mode:"hidden",children:T},f),l=Hs(l,f,a,null),T.return=r,l.return=r,T.sibling=l,r.child=T,f=r.child,f.memoizedState=cp(a),f.childLanes=hp(i,v,a),r.memoizedState=up,l):(kr(r),fp(r,T))}if(D=i.memoizedState,D!==null&&(T=D.dehydrated,T!==null)){if(d)r.flags&256?(kr(r),r.flags&=-257,r=dp(i,r,a)):r.memoizedState!==null?(Mr(),r.child=i.child,r.flags|=128,r=null):(Mr(),f=l.fallback,T=r.mode,l=Kc({mode:"visible",children:l.children},T),f=Hs(f,T,a,null),f.flags|=2,l.return=r,f.return=r,l.sibling=f,r.child=l,no(r,i.child,null,a),l=r.child,l.memoizedState=cp(a),l.childLanes=hp(i,v,a),r.memoizedState=up,r=f);else if(kr(r),Yp(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var j=v.dgst;v=j,l=Error(s(419)),l.stack="",l.digest=v,Sl({value:l,source:null,stack:null}),r=dp(i,r,a)}else if(ze||bl(i,r,a,!1),v=(a&i.childLanes)!==0,ze||v){if(v=ne,v!==null&&(l=a&-a,l=(l&42)!==0?1:Tr(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==D.retryLane))throw D.retryLane=l,Ga(i,l),Dn(v,i,l),iv;T.data==="$?"||xp(),r=dp(i,r,a)}else T.data==="$?"?(r.flags|=192,r.child=i.child,r=null):(i=D.treeContext,de=ii(T.nextSibling),fn=r,Ft=!0,Gs=null,wi=!1,i!==null&&(Hn[qn++]=Ji,Hn[qn++]=tr,Hn[qn++]=qs,Ji=i.id,tr=i.overflow,qs=r),r=fp(r,l.children),r.flags|=4096);return r}return f?(Mr(),f=l.fallback,T=r.mode,D=i.child,j=D.sibling,l=Zi(D,{mode:"hidden",children:l.children}),l.subtreeFlags=D.subtreeFlags&65011712,j!==null?f=Zi(j,f):(f=Hs(f,T,a,null),f.flags|=2),f.return=r,l.return=r,l.sibling=f,r.child=l,l=f,f=r.child,T=i.child.memoizedState,T===null?T=cp(a):(D=T.cachePool,D!==null?(j=xe._currentValue,D=D.parent!==j?{parent:j,pool:j}:D):D=Zy(),T={baseLanes:T.baseLanes|a,cachePool:D}),f.memoizedState=T,f.childLanes=hp(i,v,a),r.memoizedState=up,l):(kr(r),a=i.child,i=a.sibling,a=Zi(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,i!==null&&(v=r.deletions,v===null?(r.deletions=[i],r.flags|=16):v.push(i)),r.child=a,r.memoizedState=null,a)}function fp(i,r){return r=Kc({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Kc(i,r){return i=Sn(22,i,null,r),i.lanes=0,i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},i}function dp(i,r,a){return no(r,i.child,null,a),i=fp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function dv(i,r,a){i.lanes|=r;var l=i.alternate;l!==null&&(l.lanes|=r),xd(i.return,r,a)}function pp(i,r,a,l,f){var d=i.memoizedState;d===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=r,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function pv(i,r,a){var l=r.pendingProps,f=l.revealOrder,d=l.tail;if(Ke(i,r,l.children,a),l=Ne.current,(l&2)!==0)l=l&1|2,r.flags|=128;else{if(i!==null&&(i.flags&128)!==0)t:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&dv(i,a,r);else if(i.tag===19)dv(i,a,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break t;for(;i.sibling===null;){if(i.return===null||i.return===r)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}l&=1}switch(st(Ne,l),f){case"forwards":for(a=r.child,f=null;a!==null;)i=a.alternate,i!==null&&qc(i)===null&&(f=a),a=a.sibling;a=f,a===null?(f=r.child,r.child=null):(f=a.sibling,a.sibling=null),pp(r,!1,f,a,d);break;case"backwards":for(a=null,f=r.child,r.child=null;f!==null;){if(i=f.alternate,i!==null&&qc(i)===null){r.child=f;break}i=f.sibling,f.sibling=a,a=f,f=i}pp(r,!0,a,null,d);break;case"together":pp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function sr(i,r,a){if(i!==null&&(r.dependencies=i.dependencies),zr|=r.lanes,(a&r.childLanes)===0)if(i!==null){if(bl(i,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(s(153));if(r.child!==null){for(i=r.child,a=Zi(i,i.pendingProps),r.child=a,a.return=r;i.sibling!==null;)i=i.sibling,a=a.sibling=Zi(i,i.pendingProps),a.return=r;a.sibling=null}return r.child}function mp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Ic(i)))}function O1(i,r,a){switch(r.tag){case 3:Ht(r,r.stateNode.containerInfo),Cr(r,xe,i.memoizedState.cache),wl();break;case 27:case 5:kn(r);break;case 4:Ht(r,r.stateNode.containerInfo);break;case 10:Cr(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(kr(r),r.flags|=128,null):(a&r.child.childLanes)!==0?fv(i,r,a):(kr(r),i=sr(i,r,a),i!==null?i.sibling:null);kr(r);break;case 19:var f=(i.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(bl(i,r,a,!1),l=(a&r.childLanes)!==0),f){if(l)return pv(i,r,a);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),st(Ne,Ne.current),l)break;return null;case 22:case 23:return r.lanes=0,ov(i,r,a);case 24:Cr(r,xe,i.memoizedState.cache)}return sr(i,r,a)}function mv(i,r,a){if(i!==null)if(i.memoizedProps!==r.pendingProps)ze=!0;else{if(!mp(i,a)&&(r.flags&128)===0)return ze=!1,O1(i,r,a);ze=(i.flags&131072)!==0}else ze=!1,Ft&&(r.flags&1048576)!==0&&Gy(r,Rc,r.index);switch(r.lanes=0,r.tag){case 16:t:{i=r.pendingProps;var l=r.elementType,f=l._init;if(l=f(l._payload),r.type=l,typeof l=="function")Sd(l)?(i=Ws(l,i),r.tag=1,r=cv(null,r,l,i,a)):(r.tag=0,r=lp(null,r,l,i,a));else{if(l!=null){if(f=l.$$typeof,f===rt){r.tag=11,r=rv(null,r,l,i,a);break t}else if(f===C){r.tag=14,r=sv(null,r,l,i,a);break t}}throw r=Ie(l)||l,Error(s(306,r,""))}}return r;case 0:return lp(i,r,r.type,r.pendingProps,a);case 1:return l=r.type,f=Ws(l,r.pendingProps),cv(i,r,l,f,a);case 3:t:{if(Ht(r,r.stateNode.containerInfo),i===null)throw Error(s(387));l=r.pendingProps;var d=r.memoizedState;f=d.element,Ud(i,r),Nl(r,l,null,a);var v=r.memoizedState;if(l=v.cache,Cr(r,xe,l),l!==d.cache&&Nd(r,[xe],a,!0),xl(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=d,r.memoizedState=d,r.flags&256){r=hv(i,r,l,a);break t}else if(l!==f){f=Bn(Error(s(424)),r),Sl(f),r=hv(i,r,l,a);break t}else{switch(i=r.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(de=ii(i.firstChild),fn=r,Ft=!0,Gs=null,wi=!0,a=K_(r,null,l,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wl(),l===f){r=sr(i,r,a);break t}Ke(i,r,l,a)}r=r.child}return r;case 26:return $c(i,r),i===null?(a=v0(r.type,null,r.pendingProps,null))?r.memoizedState=a:Ft||(a=r.type,i=r.pendingProps,l=oh(yt.current).createElement(a),l[Ce]=r,l[Te]=i,Qe(l,a,i),ye(l),r.stateNode=l):r.memoizedState=v0(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return kn(r),i===null&&Ft&&(l=r.stateNode=g0(r.type,r.pendingProps,yt.current),fn=r,wi=!0,f=de,qr(r.type)?(Qp=f,de=ii(l.firstChild)):de=f),Ke(i,r,r.pendingProps.children,a),$c(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ft&&((f=l=de)&&(l=rR(l,r.type,r.pendingProps,wi),l!==null?(r.stateNode=l,fn=r,de=ii(l.firstChild),wi=!1,f=!0):f=!1),f||$s(r)),kn(r),f=r.type,d=r.pendingProps,v=i!==null?i.memoizedProps:null,l=d.children,Gp(f,d)?l=null:v!==null&&Gp(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=Fd(i,r,A1,null,null,a),tu._currentValue=f),$c(i,r),Ke(i,r,l,a),r.child;case 6:return i===null&&Ft&&((i=a=de)&&(a=sR(a,r.pendingProps,wi),a!==null?(r.stateNode=a,fn=r,de=null,i=!0):i=!1),i||$s(r)),null;case 13:return fv(i,r,a);case 4:return Ht(r,r.stateNode.containerInfo),l=r.pendingProps,i===null?r.child=no(r,null,l,a):Ke(i,r,l,a),r.child;case 11:return rv(i,r,r.type,r.pendingProps,a);case 7:return Ke(i,r,r.pendingProps,a),r.child;case 8:return Ke(i,r,r.pendingProps.children,a),r.child;case 12:return Ke(i,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Cr(r,r.type,l.value),Ke(i,r,l.children,a),r.child;case 9:return f=r.type._context,l=r.pendingProps.children,Ys(r),f=en(f),l=l(f),r.flags|=1,Ke(i,r,l,a),r.child;case 14:return sv(i,r,r.type,r.pendingProps,a);case 15:return av(i,r,r.type,r.pendingProps,a);case 19:return pv(i,r,a);case 31:return l=r.pendingProps,a=r.mode,l={mode:l.mode,children:l.children},i===null?(a=Kc(l,a),a.ref=r.ref,r.child=a,a.return=r,r=a):(a=Zi(i.child,l),a.ref=r.ref,r.child=a,a.return=r,r=a),r;case 22:return ov(i,r,a);case 24:return Ys(r),l=en(xe),i===null?(f=Pd(),f===null&&(f=ne,d=kd(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=a),f=d),r.memoizedState={parent:l,cache:f},Ld(r),Cr(r,xe,f)):((i.lanes&a)!==0&&(Ud(i,r),Nl(r,null,null,a),xl()),f=i.memoizedState,d=r.memoizedState,f.parent!==l?(f={parent:l,cache:l},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Cr(r,xe,l)):(l=d.cache,Cr(r,xe,l),l!==f.cache&&Nd(r,[xe],a,!0))),Ke(i,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function ar(i){i.flags|=4}function gv(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!S0(r)){if(r=Fn.current,r!==null&&((Bt&4194048)===Bt?Si!==null:(Bt&62914560)!==Bt&&(Bt&536870912)===0||r!==Si))throw Dl=Vd,Jy;i.flags|=8192}}function Yc(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?nl():536870912,i.lanes|=r,ao|=r)}function zl(i,r){if(!Ft)switch(i.tailMode){case"hidden":r=i.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:l.sibling=null}}function ue(i){var r=i.alternate!==null&&i.alternate.child===i.child,a=0,l=0;if(r)for(var f=i.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=i,f=f.sibling;else for(f=i.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=i,f=f.sibling;return i.subtreeFlags|=l,i.childLanes=a,r}function x1(i,r,a){var l=r.pendingProps;switch(Cd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(r),null;case 1:return ue(r),null;case 3:return a=r.stateNode,l=null,i!==null&&(l=i.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),nr(xe),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(i===null||i.child===null)&&(Al(r)?ar(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Yy())),ue(r),null;case 26:return a=r.memoizedState,i===null?(ar(r),a!==null?(ue(r),gv(r,a)):(ue(r),r.flags&=-16777217)):a?a!==i.memoizedState?(ar(r),ue(r),gv(r,a)):(ue(r),r.flags&=-16777217):(i.memoizedProps!==l&&ar(r),ue(r),r.flags&=-16777217),null;case 27:pn(r),a=yt.current;var f=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==l&&ar(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return ue(r),null}i=pt.current,Al(r)?$y(r):(i=g0(f,l,a),r.stateNode=i,ar(r))}return ue(r),null;case 5:if(pn(r),a=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==l&&ar(r);else{if(!l){if(r.stateNode===null)throw Error(s(166));return ue(r),null}if(i=pt.current,Al(r))$y(r);else{switch(f=oh(yt.current),i){case 1:i=f.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=f.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=f.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=f.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?f.createElement(a,{is:l.is}):f.createElement(a)}}i[Ce]=r,i[Te]=l;t:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)i.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break t;for(;f.sibling===null;){if(f.return===null||f.return===r)break t;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=i;t:switch(Qe(i,a,l),a){case"button":case"input":case"select":case"textarea":i=!!l.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ar(r)}}return ue(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==l&&ar(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(s(166));if(i=yt.current,Al(r)){if(i=r.stateNode,a=r.memoizedProps,l=null,f=fn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}i[Ce]=r,i=!!(i.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||u0(i.nodeValue,a)),i||$s(r)}else i=oh(i).createTextNode(l),i[Ce]=r,r.stateNode=i}return ue(r),null;case 13:if(l=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(f=Al(r),l!==null&&l.dehydrated!==null){if(i===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Ce]=r}else wl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;ue(r),f=!1}else f=Yy(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(rr(r),r):(rr(r),null)}if(rr(r),(r.flags&128)!==0)return r.lanes=a,r;if(a=l!==null,i=i!==null&&i.memoizedState!==null,a){l=r.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)}return a!==i&&a&&(r.child.flags|=8192),Yc(r,r.updateQueue),ue(r),null;case 4:return Ve(),i===null&&Bp(r.stateNode.containerInfo),ue(r),null;case 10:return nr(r.type),ue(r),null;case 19:if(ot(Ne),f=r.memoizedState,f===null)return ue(r),null;if(l=(r.flags&128)!==0,d=f.rendering,d===null)if(l)zl(f,!1);else{if(pe!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(d=qc(i),d!==null){for(r.flags|=128,zl(f,!1),i=d.updateQueue,r.updateQueue=i,Yc(r,i),r.subtreeFlags=0,i=a,a=r.child;a!==null;)Fy(a,i),a=a.sibling;return st(Ne,Ne.current&1|2),r.child}i=i.sibling}f.tail!==null&&Mn()>Wc&&(r.flags|=128,l=!0,zl(f,!1),r.lanes=4194304)}else{if(!l)if(i=qc(d),i!==null){if(r.flags|=128,l=!0,i=i.updateQueue,r.updateQueue=i,Yc(r,i),zl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!d.alternate&&!Ft)return ue(r),null}else 2*Mn()-f.renderingStartTime>Wc&&a!==536870912&&(r.flags|=128,l=!0,zl(f,!1),r.lanes=4194304);f.isBackwards?(d.sibling=r.child,r.child=d):(i=f.last,i!==null?i.sibling=d:r.child=d,f.last=d)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Mn(),r.sibling=null,i=Ne.current,st(Ne,l?i&1|2:i&1),r):(ue(r),null);case 22:case 23:return rr(r),Hd(),l=r.memoizedState!==null,i!==null?i.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(a&536870912)!==0&&(r.flags&128)===0&&(ue(r),r.subtreeFlags&6&&(r.flags|=8192)):ue(r),a=r.updateQueue,a!==null&&Yc(r,a.retryQueue),a=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),i!==null&&ot(Qs),null;case 24:return a=null,i!==null&&(a=i.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),nr(xe),ue(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function N1(i,r){switch(Cd(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return nr(xe),Ve(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return pn(r),null;case 13:if(rr(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(s(340));wl()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return ot(Ne),null;case 4:return Ve(),null;case 10:return nr(r.type),null;case 22:case 23:return rr(r),Hd(),i!==null&&ot(Qs),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return nr(xe),null;case 25:return null;default:return null}}function yv(i,r){switch(Cd(r),r.tag){case 3:nr(xe),Ve();break;case 26:case 27:case 5:pn(r);break;case 4:Ve();break;case 13:rr(r);break;case 19:ot(Ne);break;case 10:nr(r.type);break;case 22:case 23:rr(r),Hd(),i!==null&&ot(Qs);break;case 24:nr(xe)}}function Bl(i,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var f=l.next;a=f;do{if((a.tag&i)===i){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==f)}}catch(T){ee(r,r.return,T)}}function Pr(i,r,a){try{var l=r.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&i)===i){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,f=r;var D=a,j=T;try{j()}catch(Q){ee(f,D,Q)}}}l=l.next}while(l!==d)}}catch(Q){ee(r,r.return,Q)}}function _v(i){var r=i.updateQueue;if(r!==null){var a=i.stateNode;try{s_(r,a)}catch(l){ee(i,i.return,l)}}}function vv(i,r,a){a.props=Ws(i.type,i.memoizedProps),a.state=i.memoizedState;try{a.componentWillUnmount()}catch(l){ee(i,r,l)}}function jl(i,r){try{var a=i.ref;if(a!==null){switch(i.tag){case 26:case 27:case 5:var l=i.stateNode;break;case 30:l=i.stateNode;break;default:l=i.stateNode}typeof a=="function"?i.refCleanup=a(l):a.current=l}}catch(f){ee(i,r,f)}}function bi(i,r){var a=i.ref,l=i.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(f){ee(i,r,f)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(f){ee(i,r,f)}else a.current=null}function Ev(i){var r=i.type,a=i.memoizedProps,l=i.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(f){ee(i,i.return,f)}}function gp(i,r,a){try{var l=i.stateNode;J1(l,i.type,a,r),l[Te]=r}catch(f){ee(i,i.return,f)}}function Tv(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&qr(i.type)||i.tag===4}function yp(i){t:for(;;){for(;i.sibling===null;){if(i.return===null||Tv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&qr(i.type)||i.flags&2||i.child===null||i.tag===4)continue t;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function _p(i,r,a){var l=i.tag;if(l===5||l===6)i=i.stateNode,r?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(i,r):(r=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,r.appendChild(i),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=ah));else if(l!==4&&(l===27&&qr(i.type)&&(a=i.stateNode,r=null),i=i.child,i!==null))for(_p(i,r,a),i=i.sibling;i!==null;)_p(i,r,a),i=i.sibling}function Qc(i,r,a){var l=i.tag;if(l===5||l===6)i=i.stateNode,r?a.insertBefore(i,r):a.appendChild(i);else if(l!==4&&(l===27&&qr(i.type)&&(a=i.stateNode),i=i.child,i!==null))for(Qc(i,r,a),i=i.sibling;i!==null;)Qc(i,r,a),i=i.sibling}function Av(i){var r=i.stateNode,a=i.memoizedProps;try{for(var l=i.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Qe(r,l,a),r[Ce]=i,r[Te]=a}catch(d){ee(i,i.return,d)}}var or=!1,ve=!1,vp=!1,wv=typeof WeakSet=="function"?WeakSet:Set,Be=null;function k1(i,r){if(i=i.containerInfo,qp=dh,i=My(i),yd(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else t:{a=(a=i.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,D=-1,j=0,Q=0,J=i,H=null;e:for(;;){for(var F;J!==a||f!==0&&J.nodeType!==3||(T=v+f),J!==d||l!==0&&J.nodeType!==3||(D=v+l),J.nodeType===3&&(v+=J.nodeValue.length),(F=J.firstChild)!==null;)H=J,J=F;for(;;){if(J===i)break e;if(H===a&&++j===f&&(T=v),H===d&&++Q===l&&(D=v),(F=J.nextSibling)!==null)break;J=H,H=J.parentNode}J=F}a=T===-1||D===-1?null:{start:T,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fp={focusedElem:i,selectionRange:a},dh=!1,Be=r;Be!==null;)if(r=Be,i=r.child,(r.subtreeFlags&1024)!==0&&i!==null)i.return=r,Be=i;else for(;Be!==null;){switch(r=Be,d=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((i&1024)!==0&&d!==null){i=void 0,a=r,f=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var wt=Ws(a.type,f,a.elementType===a.type);i=l.getSnapshotBeforeUpdate(wt,d),l.__reactInternalSnapshotBeforeUpdate=i}catch(vt){ee(a,a.return,vt)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,a=i.nodeType,a===9)Kp(i);else if(a===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Kp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=r.sibling,i!==null){i.return=r.return,Be=i;break}Be=r.return}}function Sv(i,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Vr(i,a),l&4&&Bl(5,a);break;case 1:if(Vr(i,a),l&4)if(i=a.stateNode,r===null)try{i.componentDidMount()}catch(v){ee(a,a.return,v)}else{var f=Ws(a.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(f,r,i.__reactInternalSnapshotBeforeUpdate)}catch(v){ee(a,a.return,v)}}l&64&&_v(a),l&512&&jl(a,a.return);break;case 3:if(Vr(i,a),l&64&&(i=a.updateQueue,i!==null)){if(r=null,a.child!==null)switch(a.child.tag){case 27:case 5:r=a.child.stateNode;break;case 1:r=a.child.stateNode}try{s_(i,r)}catch(v){ee(a,a.return,v)}}break;case 27:r===null&&l&4&&Av(a);case 26:case 5:Vr(i,a),r===null&&l&4&&Ev(a),l&512&&jl(a,a.return);break;case 12:Vr(i,a);break;case 13:Vr(i,a),l&4&&Iv(i,a),l&64&&(i=a.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(a=H1.bind(null,a),aR(i,a))));break;case 22:if(l=a.memoizedState!==null||or,!l){r=r!==null&&r.memoizedState!==null||ve,f=or;var d=ve;or=l,(ve=r)&&!d?Lr(i,a,(a.subtreeFlags&8772)!==0):Vr(i,a),or=f,ve=d}break;case 30:break;default:Vr(i,a)}}function bv(i){var r=i.alternate;r!==null&&(i.alternate=null,bv(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Sr(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var ae=null,gn=!1;function lr(i,r,a){for(a=a.child;a!==null;)Rv(i,r,a),a=a.sibling}function Rv(i,r,a){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:ve||bi(a,r),lr(i,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ve||bi(a,r);var l=ae,f=gn;qr(a.type)&&(ae=a.stateNode,gn=!1),lr(i,r,a),Xl(a.stateNode),ae=l,gn=f;break;case 5:ve||bi(a,r);case 6:if(l=ae,f=gn,ae=null,lr(i,r,a),ae=l,gn=f,ae!==null)if(gn)try{(ae.nodeType===9?ae.body:ae.nodeName==="HTML"?ae.ownerDocument.body:ae).removeChild(a.stateNode)}catch(d){ee(a,r,d)}else try{ae.removeChild(a.stateNode)}catch(d){ee(a,r,d)}break;case 18:ae!==null&&(gn?(i=ae,p0(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,a.stateNode),ru(i)):p0(ae,a.stateNode));break;case 4:l=ae,f=gn,ae=a.stateNode.containerInfo,gn=!0,lr(i,r,a),ae=l,gn=f;break;case 0:case 11:case 14:case 15:ve||Pr(2,a,r),ve||Pr(4,a,r),lr(i,r,a);break;case 1:ve||(bi(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&vv(a,r,l)),lr(i,r,a);break;case 21:lr(i,r,a);break;case 22:ve=(l=ve)||a.memoizedState!==null,lr(i,r,a),ve=l;break;default:lr(i,r,a)}}function Iv(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{ru(i)}catch(a){ee(r,r.return,a)}}function M1(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new wv),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new wv),r;default:throw Error(s(435,i.tag))}}function Ep(i,r){var a=M1(i);r.forEach(function(l){var f=q1.bind(null,i,l);a.has(l)||(a.add(l),l.then(f,f))})}function bn(i,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l],d=i,v=r,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(qr(T.type)){ae=T.stateNode,gn=!1;break t}break;case 5:ae=T.stateNode,gn=!1;break t;case 3:case 4:ae=T.stateNode.containerInfo,gn=!0;break t}T=T.return}if(ae===null)throw Error(s(160));Rv(d,v,f),ae=null,gn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Cv(r,i),r=r.sibling}var ni=null;function Cv(i,r){var a=i.alternate,l=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:bn(r,i),Rn(i),l&4&&(Pr(3,i,i.return),Bl(3,i),Pr(5,i,i.return));break;case 1:bn(r,i),Rn(i),l&512&&(ve||a===null||bi(a,a.return)),l&64&&or&&(i=i.updateQueue,i!==null&&(l=i.callbacks,l!==null&&(a=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var f=ni;if(bn(r,i),Rn(i),l&512&&(ve||a===null||bi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=i.memoizedState,a===null)if(l===null)if(i.stateNode===null){t:{l=i.type,a=i.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Rs]||d[Ce]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Qe(d,l,a),d[Ce]=i,ye(d),l=d;break t;case"link":var v=A0("link","href",f).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=f.createElement(l),Qe(d,l,a),f.head.appendChild(d);break;case"meta":if(v=A0("meta","content",f).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=f.createElement(l),Qe(d,l,a),f.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ce]=i,ye(d),l=d}i.stateNode=l}else w0(f,i.type,i.stateNode);else i.stateNode=T0(f,l,i.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?w0(f,i.type,i.stateNode):T0(f,l,i.memoizedProps)):l===null&&i.stateNode!==null&&gp(i,i.memoizedProps,a.memoizedProps)}break;case 27:bn(r,i),Rn(i),l&512&&(ve||a===null||bi(a,a.return)),a!==null&&l&4&&gp(i,i.memoizedProps,a.memoizedProps);break;case 5:if(bn(r,i),Rn(i),l&512&&(ve||a===null||bi(a,a.return)),i.flags&32){f=i.stateNode;try{Vn(f,"")}catch(F){ee(i,i.return,F)}}l&4&&i.stateNode!=null&&(f=i.memoizedProps,gp(i,f,a!==null?a.memoizedProps:f)),l&1024&&(vp=!0);break;case 6:if(bn(r,i),Rn(i),l&4){if(i.stateNode===null)throw Error(s(162));l=i.memoizedProps,a=i.stateNode;try{a.nodeValue=l}catch(F){ee(i,i.return,F)}}break;case 3:if(ch=null,f=ni,ni=lh(r.containerInfo),bn(r,i),ni=f,Rn(i),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ru(r.containerInfo)}catch(F){ee(i,i.return,F)}vp&&(vp=!1,Dv(i));break;case 4:l=ni,ni=lh(i.stateNode.containerInfo),bn(r,i),Rn(i),ni=l;break;case 12:bn(r,i),Rn(i);break;case 13:bn(r,i),Rn(i),i.child.flags&8192&&i.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rp=Mn()),l&4&&(l=i.updateQueue,l!==null&&(i.updateQueue=null,Ep(i,l)));break;case 22:f=i.memoizedState!==null;var D=a!==null&&a.memoizedState!==null,j=or,Q=ve;if(or=j||f,ve=Q||D,bn(r,i),ve=Q,or=j,Rn(i),l&8192)t:for(r=i.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(a===null||D||or||ve||Zs(i)),a=null,r=i;;){if(r.tag===5||r.tag===26){if(a===null){D=a=r;try{if(d=D.stateNode,f)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=D.stateNode;var J=D.memoizedProps.style,H=J!=null&&J.hasOwnProperty("display")?J.display:null;T.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(F){ee(D,D.return,F)}}}else if(r.tag===6){if(a===null){D=r;try{D.stateNode.nodeValue=f?"":D.memoizedProps}catch(F){ee(D,D.return,F)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break t;for(;r.sibling===null;){if(r.return===null||r.return===i)break t;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=i.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Ep(i,a))));break;case 19:bn(r,i),Rn(i),l&4&&(l=i.updateQueue,l!==null&&(i.updateQueue=null,Ep(i,l)));break;case 30:break;case 21:break;default:bn(r,i),Rn(i)}}function Rn(i){var r=i.flags;if(r&2){try{for(var a,l=i.return;l!==null;){if(Tv(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var f=a.stateNode,d=yp(i);Qc(i,d,f);break;case 5:var v=a.stateNode;a.flags&32&&(Vn(v,""),a.flags&=-33);var T=yp(i);Qc(i,T,v);break;case 3:case 4:var D=a.stateNode.containerInfo,j=yp(i);_p(i,j,D);break;default:throw Error(s(161))}}catch(Q){ee(i,i.return,Q)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function Dv(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;Dv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Vr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Sv(i,r.alternate,r),r=r.sibling}function Zs(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Pr(4,r,r.return),Zs(r);break;case 1:bi(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&vv(r,r.return,a),Zs(r);break;case 27:Xl(r.stateNode);case 26:case 5:bi(r,r.return),Zs(r);break;case 22:r.memoizedState===null&&Zs(r);break;case 30:Zs(r);break;default:Zs(r)}i=i.sibling}}function Lr(i,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,f=i,d=r,v=d.flags;switch(d.tag){case 0:case 11:case 15:Lr(f,d,a),Bl(4,d);break;case 1:if(Lr(f,d,a),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(j){ee(l,l.return,j)}if(l=d,f=l.updateQueue,f!==null){var T=l.stateNode;try{var D=f.shared.hiddenCallbacks;if(D!==null)for(f.shared.hiddenCallbacks=null,f=0;f<D.length;f++)r_(D[f],T)}catch(j){ee(l,l.return,j)}}a&&v&64&&_v(d),jl(d,d.return);break;case 27:Av(d);case 26:case 5:Lr(f,d,a),a&&l===null&&v&4&&Ev(d),jl(d,d.return);break;case 12:Lr(f,d,a);break;case 13:Lr(f,d,a),a&&v&4&&Iv(f,d);break;case 22:d.memoizedState===null&&Lr(f,d,a),jl(d,d.return);break;case 30:break;default:Lr(f,d,a)}r=r.sibling}}function Tp(i,r){var a=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==a&&(i!=null&&i.refCount++,a!=null&&Rl(a))}function Ap(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Rl(i))}function Ri(i,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Ov(i,r,a,l),r=r.sibling}function Ov(i,r,a,l){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ri(i,r,a,l),f&2048&&Bl(9,r);break;case 1:Ri(i,r,a,l);break;case 3:Ri(i,r,a,l),f&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Rl(i)));break;case 12:if(f&2048){Ri(i,r,a,l),i=r.stateNode;try{var d=r.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(D){ee(r,r.return,D)}}else Ri(i,r,a,l);break;case 13:Ri(i,r,a,l);break;case 23:break;case 22:d=r.stateNode,v=r.alternate,r.memoizedState!==null?d._visibility&2?Ri(i,r,a,l):Hl(i,r):d._visibility&2?Ri(i,r,a,l):(d._visibility|=2,io(i,r,a,l,(r.subtreeFlags&10256)!==0)),f&2048&&Tp(v,r);break;case 24:Ri(i,r,a,l),f&2048&&Ap(r.alternate,r);break;default:Ri(i,r,a,l)}}function io(i,r,a,l,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var d=i,v=r,T=a,D=l,j=v.flags;switch(v.tag){case 0:case 11:case 15:io(d,v,T,D,f),Bl(8,v);break;case 23:break;case 22:var Q=v.stateNode;v.memoizedState!==null?Q._visibility&2?io(d,v,T,D,f):Hl(d,v):(Q._visibility|=2,io(d,v,T,D,f)),f&&j&2048&&Tp(v.alternate,v);break;case 24:io(d,v,T,D,f),f&&j&2048&&Ap(v.alternate,v);break;default:io(d,v,T,D,f)}r=r.sibling}}function Hl(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=i,l=r,f=l.flags;switch(l.tag){case 22:Hl(a,l),f&2048&&Tp(l.alternate,l);break;case 24:Hl(a,l),f&2048&&Ap(l.alternate,l);break;default:Hl(a,l)}r=r.sibling}}var ql=8192;function ro(i){if(i.subtreeFlags&ql)for(i=i.child;i!==null;)xv(i),i=i.sibling}function xv(i){switch(i.tag){case 26:ro(i),i.flags&ql&&i.memoizedState!==null&&vR(ni,i.memoizedState,i.memoizedProps);break;case 5:ro(i);break;case 3:case 4:var r=ni;ni=lh(i.stateNode.containerInfo),ro(i),ni=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=ql,ql=16777216,ro(i),ql=r):ro(i));break;default:ro(i)}}function Nv(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Fl(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Be=l,Mv(l,i)}Nv(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)kv(i),i=i.sibling}function kv(i){switch(i.tag){case 0:case 11:case 15:Fl(i),i.flags&2048&&Pr(9,i,i.return);break;case 3:Fl(i);break;case 12:Fl(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Xc(i)):Fl(i);break;default:Fl(i)}}function Xc(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Be=l,Mv(l,i)}Nv(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Pr(8,r,r.return),Xc(r);break;case 22:a=r.stateNode,a._visibility&2&&(a._visibility&=-3,Xc(r));break;default:Xc(r)}i=i.sibling}}function Mv(i,r){for(;Be!==null;){var a=Be;switch(a.tag){case 0:case 11:case 15:Pr(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Rl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Be=l;else t:for(a=i;Be!==null;){l=Be;var f=l.sibling,d=l.return;if(bv(l),l===a){Be=null;break t}if(f!==null){f.return=d,Be=f;break t}Be=d}}}var P1={getCacheForType:function(i){var r=en(xe),a=r.data.get(i);return a===void 0&&(a=i(),r.data.set(i,a)),a}},V1=typeof WeakMap=="function"?WeakMap:Map,Qt=0,ne=null,kt=null,Bt=0,Xt=0,In=null,Ur=!1,so=!1,wp=!1,ur=0,pe=0,zr=0,Js=0,Sp=0,Gn=0,ao=0,Gl=null,yn=null,bp=!1,Rp=0,Wc=1/0,Zc=null,Br=null,Ye=0,jr=null,oo=null,lo=0,Ip=0,Cp=null,Pv=null,$l=0,Dp=null;function Cn(){if((Qt&2)!==0&&Bt!==0)return Bt&-Bt;if(Y.T!==null){var i=Qa;return i!==0?i:Vp()}return Ar()}function Vv(){Gn===0&&(Gn=(Bt&536870912)===0||Ft?el():536870912);var i=Fn.current;return i!==null&&(i.flags|=32),Gn}function Dn(i,r,a){(i===ne&&(Xt===2||Xt===9)||i.cancelPendingCommit!==null)&&(uo(i,0),Hr(i,Bt,Gn,!1)),ji(i,a),((Qt&2)===0||i!==ne)&&(i===ne&&((Qt&2)===0&&(Js|=a),pe===4&&Hr(i,Bt,Gn,!1)),Ii(i))}function Lv(i,r,a){if((Qt&6)!==0)throw Error(s(327));var l=!a&&(r&124)===0&&(r&i.expiredLanes)===0||bs(i,r),f=l?z1(i,r):Np(i,r,!0),d=l;do{if(f===0){so&&!l&&Hr(i,r,0,!1);break}else{if(a=i.current.alternate,d&&!L1(a)){f=Np(i,r,!1),d=!1;continue}if(f===2){if(d=r,i.errorRecoveryDisabledLanes&d)var v=0;else v=i.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;t:{var T=i;f=Gl;var D=T.current.memoizedState.isDehydrated;if(D&&(uo(T,v).flags|=256),v=Np(T,v,!1),v!==2){if(wp&&!D){T.errorRecoveryDisabledLanes|=d,Js|=d,f=4;break t}d=yn,yn=f,d!==null&&(yn===null?yn=d:yn.push.apply(yn,d))}f=v}if(d=!1,f!==2)continue}}if(f===1){uo(i,0),Hr(i,r,0,!0);break}t:{switch(l=i,d=f,d){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Hr(l,r,Gn,!Ur);break t;case 2:yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Rp+300-Mn(),10<f)){if(Hr(l,r,Gn,!Ur),Ra(l,0,!0)!==0)break t;l.timeoutHandle=f0(Uv.bind(null,l,a,yn,Zc,bp,r,Gn,Js,ao,Ur,d,2,-0,0),f);break t}Uv(l,a,yn,Zc,bp,r,Gn,Js,ao,Ur,d,0,-0,0)}}break}while(!0);Ii(i)}function Uv(i,r,a,l,f,d,v,T,D,j,Q,J,H,F){if(i.timeoutHandle=-1,J=r.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Jl={stylesheets:null,count:0,unsuspend:_R},xv(r),J=ER(),J!==null)){i.cancelPendingCommit=J(Gv.bind(null,i,r,d,a,l,f,v,T,D,Q,1,H,F)),Hr(i,d,v,!j);return}Gv(i,r,d,a,l,f,v,T,D)}function L1(i){for(var r=i;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!wn(d(),f))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Hr(i,r,a,l){r&=~Sp,r&=~Js,i.suspendedLanes|=r,i.pingedLanes&=~r,l&&(i.warmLanes|=r),l=i.expirationTimes;for(var f=r;0<f;){var d=31-tn(f),v=1<<d;l[d]=-1,f&=~v}a!==0&&fi(i,a,r)}function Jc(){return(Qt&6)===0?(Kl(0),!1):!0}function Op(){if(kt!==null){if(Xt===0)var i=kt.return;else i=kt,er=Ks=null,Kd(i),eo=null,Ll=0,i=kt;for(;i!==null;)yv(i.alternate,i),i=i.return;kt=null}}function uo(i,r){var a=i.timeoutHandle;a!==-1&&(i.timeoutHandle=-1,eR(a)),a=i.cancelPendingCommit,a!==null&&(i.cancelPendingCommit=null,a()),Op(),ne=i,kt=a=Zi(i.current,null),Bt=r,Xt=0,In=null,Ur=!1,so=bs(i,r),wp=!1,ao=Gn=Sp=Js=zr=pe=0,yn=Gl=null,bp=!1,(r&8)!==0&&(r|=r&32);var l=i.entangledLanes;if(l!==0)for(i=i.entanglements,l&=r;0<l;){var f=31-tn(l),d=1<<f;r|=i[f],l&=~d}return ur=r,Tc(),a}function zv(i,r){Ot=null,Y.H=Bc,r===Cl||r===Oc?(r=n_(),Xt=3):r===Jy?(r=n_(),Xt=4):Xt=r===iv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,In=r,kt===null&&(pe=1,Gc(i,Bn(r,i.current)))}function Bv(){var i=Y.H;return Y.H=Bc,i===null?Bc:i}function jv(){var i=Y.A;return Y.A=P1,i}function xp(){pe=4,Ur||(Bt&4194048)!==Bt&&Fn.current!==null||(so=!0),(zr&134217727)===0&&(Js&134217727)===0||ne===null||Hr(ne,Bt,Gn,!1)}function Np(i,r,a){var l=Qt;Qt|=2;var f=Bv(),d=jv();(ne!==i||Bt!==r)&&(Zc=null,uo(i,r)),r=!1;var v=pe;t:do try{if(Xt!==0&&kt!==null){var T=kt,D=In;switch(Xt){case 8:Op(),v=6;break t;case 3:case 2:case 9:case 6:Fn.current===null&&(r=!0);var j=Xt;if(Xt=0,In=null,co(i,T,D,j),a&&so){v=0;break t}break;default:j=Xt,Xt=0,In=null,co(i,T,D,j)}}U1(),v=pe;break}catch(Q){zv(i,Q)}while(!0);return r&&i.shellSuspendCounter++,er=Ks=null,Qt=l,Y.H=f,Y.A=d,kt===null&&(ne=null,Bt=0,Tc()),v}function U1(){for(;kt!==null;)Hv(kt)}function z1(i,r){var a=Qt;Qt|=2;var l=Bv(),f=jv();ne!==i||Bt!==r?(Zc=null,Wc=Mn()+500,uo(i,r)):so=bs(i,r);t:do try{if(Xt!==0&&kt!==null){r=kt;var d=In;e:switch(Xt){case 1:Xt=0,In=null,co(i,r,d,1);break;case 2:case 9:if(t_(d)){Xt=0,In=null,qv(r);break}r=function(){Xt!==2&&Xt!==9||ne!==i||(Xt=7),Ii(i)},d.then(r,r);break t;case 3:Xt=7;break t;case 4:Xt=5;break t;case 7:t_(d)?(Xt=0,In=null,qv(r)):(Xt=0,In=null,co(i,r,d,7));break;case 5:var v=null;switch(kt.tag){case 26:v=kt.memoizedState;case 5:case 27:var T=kt;if(!v||S0(v)){Xt=0,In=null;var D=T.sibling;if(D!==null)kt=D;else{var j=T.return;j!==null?(kt=j,th(j)):kt=null}break e}}Xt=0,In=null,co(i,r,d,5);break;case 6:Xt=0,In=null,co(i,r,d,6);break;case 8:Op(),pe=6;break t;default:throw Error(s(462))}}B1();break}catch(Q){zv(i,Q)}while(!0);return er=Ks=null,Y.H=l,Y.A=f,Qt=a,kt!==null?0:(ne=null,Bt=0,Tc(),pe)}function B1(){for(;kt!==null&&!Wo();)Hv(kt)}function Hv(i){var r=mv(i.alternate,i,ur);i.memoizedProps=i.pendingProps,r===null?th(i):kt=r}function qv(i){var r=i,a=r.alternate;switch(r.tag){case 15:case 0:r=uv(a,r,r.pendingProps,r.type,void 0,Bt);break;case 11:r=uv(a,r,r.pendingProps,r.type.render,r.ref,Bt);break;case 5:Kd(r);default:yv(a,r),r=kt=Fy(r,ur),r=mv(a,r,ur)}i.memoizedProps=i.pendingProps,r===null?th(i):kt=r}function co(i,r,a,l){er=Ks=null,Kd(r),eo=null,Ll=0;var f=r.return;try{if(D1(i,f,r,a,Bt)){pe=1,Gc(i,Bn(a,i.current)),kt=null;return}}catch(d){if(f!==null)throw kt=f,d;pe=1,Gc(i,Bn(a,i.current)),kt=null;return}r.flags&32768?(Ft||l===1?i=!0:so||(Bt&536870912)!==0?i=!1:(Ur=i=!0,(l===2||l===9||l===3||l===6)&&(l=Fn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Fv(r,i)):th(r)}function th(i){var r=i;do{if((r.flags&32768)!==0){Fv(r,Ur);return}i=r.return;var a=x1(r.alternate,r,ur);if(a!==null){kt=a;return}if(r=r.sibling,r!==null){kt=r;return}kt=r=i}while(r!==null);pe===0&&(pe=5)}function Fv(i,r){do{var a=N1(i.alternate,i);if(a!==null){a.flags&=32767,kt=a;return}if(a=i.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(i=i.sibling,i!==null)){kt=i;return}kt=i=a}while(i!==null);pe=6,kt=null}function Gv(i,r,a,l,f,d,v,T,D){i.cancelPendingCommit=null;do eh();while(Ye!==0);if((Qt&6)!==0)throw Error(s(327));if(r!==null){if(r===i.current)throw Error(s(177));if(d=r.lanes|r.childLanes,d|=Ad,il(i,a,d,v,T,D),i===ne&&(kt=ne=null,Bt=0),oo=r,jr=i,lo=a,Ip=d,Cp=f,Pv=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,F1(Ts,function(){return Xv(),null})):(i.callbackNode=null,i.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=Y.T,Y.T=null,f=ut.p,ut.p=2,v=Qt,Qt|=4;try{k1(i,r,a)}finally{Qt=v,ut.p=f,Y.T=l}}Ye=1,$v(),Kv(),Yv()}}function $v(){if(Ye===1){Ye=0;var i=jr,r=oo,a=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||a){a=Y.T,Y.T=null;var l=ut.p;ut.p=2;var f=Qt;Qt|=4;try{Cv(r,i);var d=Fp,v=My(i.containerInfo),T=d.focusedElem,D=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&ky(T.ownerDocument.documentElement,T)){if(D!==null&&yd(T)){var j=D.start,Q=D.end;if(Q===void 0&&(Q=j),"selectionStart"in T)T.selectionStart=j,T.selectionEnd=Math.min(Q,T.value.length);else{var J=T.ownerDocument||document,H=J&&J.defaultView||window;if(H.getSelection){var F=H.getSelection(),wt=T.textContent.length,vt=Math.min(D.start,wt),te=D.end===void 0?vt:Math.min(D.end,wt);!F.extend&&vt>te&&(v=te,te=vt,vt=v);var V=Ny(T,vt),M=Ny(T,te);if(V&&M&&(F.rangeCount!==1||F.anchorNode!==V.node||F.anchorOffset!==V.offset||F.focusNode!==M.node||F.focusOffset!==M.offset)){var B=J.createRange();B.setStart(V.node,V.offset),F.removeAllRanges(),vt>te?(F.addRange(B),F.extend(M.node,M.offset)):(B.setEnd(M.node,M.offset),F.addRange(B))}}}}for(J=[],F=T;F=F.parentNode;)F.nodeType===1&&J.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<J.length;T++){var W=J[T];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}dh=!!qp,Fp=qp=null}finally{Qt=f,ut.p=l,Y.T=a}}i.current=r,Ye=2}}function Kv(){if(Ye===2){Ye=0;var i=jr,r=oo,a=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||a){a=Y.T,Y.T=null;var l=ut.p;ut.p=2;var f=Qt;Qt|=4;try{Sv(i,r.alternate,r)}finally{Qt=f,ut.p=l,Y.T=a}}Ye=3}}function Yv(){if(Ye===4||Ye===3){Ye=0,Xu();var i=jr,r=oo,a=lo,l=Pv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Ye=5:(Ye=0,oo=jr=null,Qv(i,i.pendingLanes));var f=i.pendingLanes;if(f===0&&(Br=null),Ia(a),r=r.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(fe,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=Y.T,f=ut.p,ut.p=2,Y.T=null;try{for(var d=i.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{Y.T=r,ut.p=f}}(lo&3)!==0&&eh(),Ii(i),f=i.pendingLanes,(a&4194090)!==0&&(f&42)!==0?i===Dp?$l++:($l=0,Dp=i):$l=0,Kl(0)}}function Qv(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Rl(r)))}function eh(i){return $v(),Kv(),Yv(),Xv()}function Xv(){if(Ye!==5)return!1;var i=jr,r=Ip;Ip=0;var a=Ia(lo),l=Y.T,f=ut.p;try{ut.p=32>a?32:a,Y.T=null,a=Cp,Cp=null;var d=jr,v=lo;if(Ye=0,oo=jr=null,lo=0,(Qt&6)!==0)throw Error(s(331));var T=Qt;if(Qt|=4,kv(d.current),Ov(d,d.current,v,a),Qt=T,Kl(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(fe,d)}catch{}return!0}finally{ut.p=f,Y.T=l,Qv(i,r)}}function Wv(i,r,a){r=Bn(a,r),r=op(i.stateNode,r,2),i=xr(i,r,2),i!==null&&(ji(i,2),Ii(i))}function ee(i,r,a){if(i.tag===3)Wv(i,i,a);else for(;r!==null;){if(r.tag===3){Wv(r,i,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Br===null||!Br.has(l))){i=Bn(a,i),a=ev(2),l=xr(r,a,2),l!==null&&(nv(a,l,r,i),ji(l,2),Ii(l));break}}r=r.return}}function kp(i,r,a){var l=i.pingCache;if(l===null){l=i.pingCache=new V1;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(a)||(wp=!0,f.add(a),i=j1.bind(null,i,r,a),r.then(i,i))}function j1(i,r,a){var l=i.pingCache;l!==null&&l.delete(r),i.pingedLanes|=i.suspendedLanes&a,i.warmLanes&=~a,ne===i&&(Bt&a)===a&&(pe===4||pe===3&&(Bt&62914560)===Bt&&300>Mn()-Rp?(Qt&2)===0&&uo(i,0):Sp|=a,ao===Bt&&(ao=0)),Ii(i)}function Zv(i,r){r===0&&(r=nl()),i=Ga(i,r),i!==null&&(ji(i,r),Ii(i))}function H1(i){var r=i.memoizedState,a=0;r!==null&&(a=r.retryLane),Zv(i,a)}function q1(i,r){var a=0;switch(i.tag){case 13:var l=i.stateNode,f=i.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=i.stateNode;break;case 22:l=i.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(r),Zv(i,a)}function F1(i,r){return vs(i,r)}var nh=null,ho=null,Mp=!1,ih=!1,Pp=!1,ta=0;function Ii(i){i!==ho&&i.next===null&&(ho===null?nh=ho=i:ho=ho.next=i),ih=!0,Mp||(Mp=!0,$1())}function Kl(i,r){if(!Pp&&ih){Pp=!0;do for(var a=!1,l=nh;l!==null;){if(i!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-tn(42|i)+1)-1,d&=f&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,n0(l,d))}else d=Bt,d=Ra(l,l===ne?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||bs(l,d)||(a=!0,n0(l,d));l=l.next}while(a);Pp=!1}}function G1(){Jv()}function Jv(){ih=Mp=!1;var i=0;ta!==0&&(tR()&&(i=ta),ta=0);for(var r=Mn(),a=null,l=nh;l!==null;){var f=l.next,d=t0(l,r);d===0?(l.next=null,a===null?nh=f:a.next=f,f===null&&(ho=a)):(a=l,(i!==0||(d&3)!==0)&&(ih=!0)),l=f}Kl(i)}function t0(i,r){for(var a=i.suspendedLanes,l=i.pingedLanes,f=i.expirationTimes,d=i.pendingLanes&-62914561;0<d;){var v=31-tn(d),T=1<<v,D=f[v];D===-1?((T&a)===0||(T&l)!==0)&&(f[v]=tl(T,r)):D<=r&&(i.expiredLanes|=T),d&=~T}if(r=ne,a=Bt,a=Ra(i,i===r?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),l=i.callbackNode,a===0||i===r&&(Xt===2||Xt===9)||i.cancelPendingCommit!==null)return l!==null&&l!==null&&Es(l),i.callbackNode=null,i.callbackPriority=0;if((a&3)===0||bs(i,a)){if(r=a&-a,r===i.callbackPriority)return r;switch(l!==null&&Es(l),Ia(a)){case 2:case 8:a=Sa;break;case 32:a=Ts;break;case 268435456:a=ba;break;default:a=Ts}return l=e0.bind(null,i),a=vs(a,l),i.callbackPriority=r,i.callbackNode=a,r}return l!==null&&l!==null&&Es(l),i.callbackPriority=2,i.callbackNode=null,2}function e0(i,r){if(Ye!==0&&Ye!==5)return i.callbackNode=null,i.callbackPriority=0,null;var a=i.callbackNode;if(eh()&&i.callbackNode!==a)return null;var l=Bt;return l=Ra(i,i===ne?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),l===0?null:(Lv(i,l,r),t0(i,Mn()),i.callbackNode!=null&&i.callbackNode===a?e0.bind(null,i):null)}function n0(i,r){if(eh())return null;Lv(i,r,!0)}function $1(){nR(function(){(Qt&6)!==0?vs(Zo,G1):Jv()})}function Vp(){return ta===0&&(ta=el()),ta}function i0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:ka(""+i)}function r0(i,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,i.id&&a.setAttribute("form",i.id),r.parentNode.insertBefore(a,r),i=new FormData(i),a.parentNode.removeChild(a),i}function K1(i,r,a,l,f){if(r==="submit"&&a&&a.stateNode===f){var d=i0((f[Te]||null).action),v=l.submitter;v&&(r=(r=v[Te]||null)?i0(r.formAction):v.getAttribute("formAction"),r!==null&&(d=r,v=null));var T=new Ma("action","action",null,l,f);i.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ta!==0){var D=v?r0(f,v):new FormData(f);np(a,{pending:!0,data:D,method:f.method,action:d},null,D)}}else typeof d=="function"&&(T.preventDefault(),D=v?r0(f,v):new FormData(f),np(a,{pending:!0,data:D,method:f.method,action:d},d,D))},currentTarget:f}]})}}for(var Lp=0;Lp<Td.length;Lp++){var Up=Td[Lp],Y1=Up.toLowerCase(),Q1=Up[0].toUpperCase()+Up.slice(1);ei(Y1,"on"+Q1)}ei(Ly,"onAnimationEnd"),ei(Uy,"onAnimationIteration"),ei(zy,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(f1,"onTransitionRun"),ei(d1,"onTransitionStart"),ei(p1,"onTransitionCancel"),ei(By,"onTransitionEnd"),qi("onMouseEnter",["mouseout","mouseover"]),qi("onMouseLeave",["mouseout","mouseover"]),qi("onPointerEnter",["pointerout","pointerover"]),qi("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function s0(i,r){r=(r&4)!==0;for(var a=0;a<i.length;a++){var l=i[a],f=l.event;l=l.listeners;t:{var d=void 0;if(r)for(var v=l.length-1;0<=v;v--){var T=l[v],D=T.instance,j=T.currentTarget;if(T=T.listener,D!==d&&f.isPropagationStopped())break t;d=T,f.currentTarget=j;try{d(f)}catch(Q){Fc(Q)}f.currentTarget=null,d=D}else for(v=0;v<l.length;v++){if(T=l[v],D=T.instance,j=T.currentTarget,T=T.listener,D!==d&&f.isPropagationStopped())break t;d=T,f.currentTarget=j;try{d(f)}catch(Q){Fc(Q)}f.currentTarget=null,d=D}}}}function Mt(i,r){var a=r[sl];a===void 0&&(a=r[sl]=new Set);var l=i+"__bubble";a.has(l)||(a0(r,i,2,!1),a.add(l))}function zp(i,r,a){var l=0;r&&(l|=4),a0(a,i,l,r)}var rh="_reactListening"+Math.random().toString(36).slice(2);function Bp(i){if(!i[rh]){i[rh]=!0,al.forEach(function(a){a!=="selectionchange"&&(X1.has(a)||zp(a,!1,i),zp(a,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[rh]||(r[rh]=!0,zp("selectionchange",!1,r))}}function a0(i,r,a,l){switch(O0(r)){case 2:var f=wR;break;case 8:f=SR;break;default:f=tm}a=f.bind(null,r,a,i),f=void 0,!Un||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?i.addEventListener(r,a,{capture:!0,passive:f}):i.addEventListener(r,a,!0):f!==void 0?i.addEventListener(r,a,{passive:f}):i.addEventListener(r,a,!1)}function jp(i,r,a,l,f){var d=l;if((r&1)===0&&(r&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===f)break;if(v===4)for(v=l.return;v!==null;){var D=v.tag;if((D===3||D===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;T!==null;){if(v=Hi(T),v===null)return;if(D=v.tag,D===5||D===6||D===26||D===27){l=d=v;continue t}T=T.parentNode}}l=l.return}ac(function(){var j=d,Q=Ln(a),J=[];t:{var H=jy.get(i);if(H!==void 0){var F=Ma,wt=i;switch(i){case"keypress":if(_i(a)===0)break t;case"keydown":case"keyup":F=Ba;break;case"focusin":wt="focus",F=La;break;case"focusout":wt="blur",F=La;break;case"beforeblur":case"afterblur":F=La;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=dd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=pc;break;case Ly:case Uy:case zy:F=Ua;break;case By:F=gc;break;case"scroll":case"scrollend":F=oc;break;case"wheel":F=ja;break;case"copy":case"cut":case"paste":F=za;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=_l;break;case"toggle":case"beforetoggle":F=_c}var vt=(r&4)!==0,te=!vt&&(i==="scroll"||i==="scrollend"),V=vt?H!==null?H+"Capture":null:H;vt=[];for(var M=j,B;M!==null;){var W=M;if(B=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||B===null||V===null||(W=ks(M,V),W!=null&&vt.push(Ql(M,W,B))),te)break;M=M.return}0<vt.length&&(H=new F(H,wt,null,a,Q),J.push({event:H,listeners:vt}))}}if((r&7)===0){t:{if(H=i==="mouseover"||i==="pointerover",F=i==="mouseout"||i==="pointerout",H&&a!==$i&&(wt=a.relatedTarget||a.fromElement)&&(Hi(wt)||wt[Pn]))break t;if((F||H)&&(H=Q.window===Q?Q:(H=Q.ownerDocument)?H.defaultView||H.parentWindow:window,F?(wt=a.relatedTarget||a.toElement,F=j,wt=wt?Hi(wt):null,wt!==null&&(te=u(wt),vt=wt.tag,wt!==te||vt!==5&&vt!==27&&vt!==6)&&(wt=null)):(F=null,wt=j),F!==wt)){if(vt=zn,W="onMouseLeave",V="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(vt=_l,W="onPointerLeave",V="onPointerEnter",M="pointer"),te=F==null?H:pi(F),B=wt==null?H:pi(wt),H=new vt(W,M+"leave",F,a,Q),H.target=te,H.relatedTarget=B,W=null,Hi(Q)===j&&(vt=new vt(V,M+"enter",wt,a,Q),vt.target=B,vt.relatedTarget=te,W=vt),te=W,F&&wt)e:{for(vt=F,V=wt,M=0,B=vt;B;B=fo(B))M++;for(B=0,W=V;W;W=fo(W))B++;for(;0<M-B;)vt=fo(vt),M--;for(;0<B-M;)V=fo(V),B--;for(;M--;){if(vt===V||V!==null&&vt===V.alternate)break e;vt=fo(vt),V=fo(V)}vt=null}else vt=null;F!==null&&o0(J,H,F,vt,!1),wt!==null&&te!==null&&o0(J,te,wt,vt,!0)}}t:{if(H=j?pi(j):window,F=H.nodeName&&H.nodeName.toLowerCase(),F==="select"||F==="input"&&H.type==="file")var ft=Ry;else if(Oe(H))if(Iy)ft=u1;else{ft=o1;var Nt=a1}else F=H.nodeName,!F||F.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?j&&hl(j.elementType)&&(ft=Ry):ft=l1;if(ft&&(ft=ft(i,j))){Wi(J,ft,a,Q);break t}Nt&&Nt(i,H,j),i==="focusout"&&j&&H.type==="number"&&j.memoizedProps.value!=null&&Rr(H,"number",H.value)}switch(Nt=j?pi(j):window,i){case"focusin":(Oe(Nt)||Nt.contentEditable==="true")&&(Ha=Nt,_d=j,Tl=null);break;case"focusout":Tl=_d=Ha=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,Py(J,a,Q);break;case"selectionchange":if(h1)break;case"keydown":case"keyup":Py(J,a,Q)}var mt;if(Ti)t:{switch(i){case"compositionstart":var Et="onCompositionStart";break t;case"compositionend":Et="onCompositionEnd";break t;case"compositionupdate":Et="onCompositionUpdate";break t}Et=void 0}else Ut?K(i,a)&&(Et="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(Et="onCompositionStart");Et&&(_&&a.locale!=="ko"&&(Ut||Et!=="onCompositionStart"?Et==="onCompositionEnd"&&Ut&&(mt=dl()):(yi=Q,Ir="value"in yi?yi.value:yi.textContent,Ut=!0)),Nt=sh(j,Et),0<Nt.length&&(Et=new gl(Et,i,null,a,Q),J.push({event:Et,listeners:Nt}),mt?Et.data=mt:(mt=lt(a),mt!==null&&(Et.data=mt)))),(mt=y?De(i,a):zt(i,a))&&(Et=sh(j,"onBeforeInput"),0<Et.length&&(Nt=new gl("onBeforeInput","beforeinput",null,a,Q),J.push({event:Nt,listeners:Et}),Nt.data=mt)),K1(J,i,j,a,Q)}s0(J,r)})}function Ql(i,r,a){return{instance:i,listener:r,currentTarget:a}}function sh(i,r){for(var a=r+"Capture",l=[];i!==null;){var f=i,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=ks(i,a),f!=null&&l.unshift(Ql(i,f,d)),f=ks(i,r),f!=null&&l.push(Ql(i,f,d))),i.tag===3)return l;i=i.return}return[]}function fo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function o0(i,r,a,l,f){for(var d=r._reactName,v=[];a!==null&&a!==l;){var T=a,D=T.alternate,j=T.stateNode;if(T=T.tag,D!==null&&D===l)break;T!==5&&T!==26&&T!==27||j===null||(D=j,f?(j=ks(a,d),j!=null&&v.unshift(Ql(a,j,D))):f||(j=ks(a,d),j!=null&&v.push(Ql(a,j,D)))),a=a.return}v.length!==0&&i.push({event:r,listeners:v})}var W1=/\r\n?/g,Z1=/\u0000|\uFFFD/g;function l0(i){return(typeof i=="string"?i:""+i).replace(W1,`
`).replace(Z1,"")}function u0(i,r){return r=l0(r),l0(i)===r}function ah(){}function Jt(i,r,a,l,f,d){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Vn(i,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Vn(i,""+l);break;case"className":mi(i,"class",l);break;case"tabIndex":mi(i,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":mi(i,a,l);break;case"style":cl(i,l,d);break;case"data":if(r!=="object"){mi(i,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){i.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){i.removeAttribute(a);break}l=ka(""+l),i.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){i.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(r!=="input"&&Jt(i,r,"name",f.name,f,null),Jt(i,r,"formEncType",f.formEncType,f,null),Jt(i,r,"formMethod",f.formMethod,f,null),Jt(i,r,"formTarget",f.formTarget,f,null)):(Jt(i,r,"encType",f.encType,f,null),Jt(i,r,"method",f.method,f,null),Jt(i,r,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){i.removeAttribute(a);break}l=ka(""+l),i.setAttribute(a,l);break;case"onClick":l!=null&&(i.onclick=ah);break;case"onScroll":l!=null&&Mt("scroll",i);break;case"onScrollEnd":l!=null&&Mt("scrollend",i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=a}}break;case"multiple":i.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":i.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){i.removeAttribute("xlink:href");break}a=ka(""+l),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?i.setAttribute(a,""+l):i.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?i.setAttribute(a,""):i.removeAttribute(a);break;case"capture":case"download":l===!0?i.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?i.setAttribute(a,l):i.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?i.setAttribute(a,l):i.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?i.removeAttribute(a):i.setAttribute(a,l);break;case"popover":Mt("beforetoggle",i),Mt("toggle",i),br(i,"popover",l);break;case"xlinkActuate":Ge(i,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ge(i,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ge(i,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ge(i,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ge(i,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ge(i,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ge(i,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ge(i,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ge(i,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":br(i,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=hd.get(a)||a,br(i,a,l))}}function Hp(i,r,a,l,f,d){switch(a){case"style":cl(i,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(f.children!=null)throw Error(s(60));i.innerHTML=a}}break;case"children":typeof l=="string"?Vn(i,l):(typeof l=="number"||typeof l=="bigint")&&Vn(i,""+l);break;case"onScroll":l!=null&&Mt("scroll",i);break;case"onScrollEnd":l!=null&&Mt("scrollend",i);break;case"onClick":l!=null&&(i.onclick=ah);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ca.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(f=a.endsWith("Capture"),r=a.slice(2,f?a.length-7:void 0),d=i[Te]||null,d=d!=null?d[a]:null,typeof d=="function"&&i.removeEventListener(r,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(a in i?i[a]=null:i.hasAttribute(a)&&i.removeAttribute(a)),i.addEventListener(r,l,f);break t}a in i?i[a]=l:l===!0?i.setAttribute(a,""):br(i,a,l)}}}function Qe(i,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",i),Mt("load",i);var l=!1,f=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Jt(i,r,d,v,a,null)}}f&&Jt(i,r,"srcSet",a.srcSet,a,null),l&&Jt(i,r,"src",a.src,a,null);return;case"input":Mt("invalid",i);var T=d=v=f=null,D=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var Q=a[l];if(Q!=null)switch(l){case"name":f=Q;break;case"type":v=Q;break;case"checked":D=Q;break;case"defaultChecked":j=Q;break;case"value":d=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(s(137,r));break;default:Jt(i,r,l,Q,a,null)}}Os(i,d,T,D,j,v,f,!1),Na(i);return;case"select":Mt("invalid",i),l=v=d=null;for(f in a)if(a.hasOwnProperty(f)&&(T=a[f],T!=null))switch(f){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Jt(i,r,f,T,a,null)}r=d,a=v,i.multiple=!!l,r!=null?Gi(i,!!l,r,!1):a!=null&&Gi(i,!!l,a,!0);return;case"textarea":Mt("invalid",i),d=f=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":f=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Jt(i,r,v,T,a,null)}xs(i,l,f,d),Na(i);return;case"option":for(D in a)if(a.hasOwnProperty(D)&&(l=a[D],l!=null))switch(D){case"selected":i.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(i,r,D,l,a,null)}return;case"dialog":Mt("beforetoggle",i),Mt("toggle",i),Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":Mt("load",i);break;case"video":case"audio":for(l=0;l<Yl.length;l++)Mt(Yl[l],i);break;case"image":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"embed":case"source":case"link":Mt("error",i),Mt("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:Jt(i,r,j,l,a,null)}return;default:if(hl(r)){for(Q in a)a.hasOwnProperty(Q)&&(l=a[Q],l!==void 0&&Hp(i,r,Q,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Jt(i,r,T,l,a,null))}function J1(i,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,v=null,T=null,D=null,j=null,Q=null;for(F in a){var J=a[F];if(a.hasOwnProperty(F)&&J!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":D=J;default:l.hasOwnProperty(F)||Jt(i,r,F,null,l,J)}}for(var H in l){var F=l[H];if(J=a[H],l.hasOwnProperty(H)&&(F!=null||J!=null))switch(H){case"type":d=F;break;case"name":f=F;break;case"checked":j=F;break;case"defaultChecked":Q=F;break;case"value":v=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:F!==J&&Jt(i,r,H,F,l,J)}}An(i,v,T,D,j,Q,d,f);return;case"select":F=v=T=H=null;for(d in a)if(D=a[d],a.hasOwnProperty(d)&&D!=null)switch(d){case"value":break;case"multiple":F=D;default:l.hasOwnProperty(d)||Jt(i,r,d,null,l,D)}for(f in l)if(d=l[f],D=a[f],l.hasOwnProperty(f)&&(d!=null||D!=null))switch(f){case"value":H=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==D&&Jt(i,r,f,d,l,D)}r=T,a=v,l=F,H!=null?Gi(i,!!a,H,!1):!!l!=!!a&&(r!=null?Gi(i,!!a,r,!0):Gi(i,!!a,a?[]:"",!1));return;case"textarea":F=H=null;for(T in a)if(f=a[T],a.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Jt(i,r,T,null,l,f)}for(v in l)if(f=l[v],d=a[v],l.hasOwnProperty(v)&&(f!=null||d!=null))switch(v){case"value":H=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==d&&Jt(i,r,v,f,l,d)}Wt(i,H,F);return;case"option":for(var wt in a)if(H=a[wt],a.hasOwnProperty(wt)&&H!=null&&!l.hasOwnProperty(wt))switch(wt){case"selected":i.selected=!1;break;default:Jt(i,r,wt,null,l,H)}for(D in l)if(H=l[D],F=a[D],l.hasOwnProperty(D)&&H!==F&&(H!=null||F!=null))switch(D){case"selected":i.selected=H&&typeof H!="function"&&typeof H!="symbol";break;default:Jt(i,r,D,H,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var vt in a)H=a[vt],a.hasOwnProperty(vt)&&H!=null&&!l.hasOwnProperty(vt)&&Jt(i,r,vt,null,l,H);for(j in l)if(H=l[j],F=a[j],l.hasOwnProperty(j)&&H!==F&&(H!=null||F!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,r));break;default:Jt(i,r,j,H,l,F)}return;default:if(hl(r)){for(var te in a)H=a[te],a.hasOwnProperty(te)&&H!==void 0&&!l.hasOwnProperty(te)&&Hp(i,r,te,void 0,l,H);for(Q in l)H=l[Q],F=a[Q],!l.hasOwnProperty(Q)||H===F||H===void 0&&F===void 0||Hp(i,r,Q,H,l,F);return}}for(var V in a)H=a[V],a.hasOwnProperty(V)&&H!=null&&!l.hasOwnProperty(V)&&Jt(i,r,V,null,l,H);for(J in l)H=l[J],F=a[J],!l.hasOwnProperty(J)||H===F||H==null&&F==null||Jt(i,r,J,H,l,F)}var qp=null,Fp=null;function oh(i){return i.nodeType===9?i:i.ownerDocument}function c0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function h0(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Gp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var $p=null;function tR(){var i=window.event;return i&&i.type==="popstate"?i===$p?!1:($p=i,!0):($p=null,!1)}var f0=typeof setTimeout=="function"?setTimeout:void 0,eR=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,nR=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(i){return d0.resolve(null).then(i).catch(iR)}:f0;function iR(i){setTimeout(function(){throw i})}function qr(i){return i==="head"}function p0(i,r){var a=r,l=0,f=0;do{var d=a.nextSibling;if(i.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=i.ownerDocument;if(a&1&&Xl(v.documentElement),a&2&&Xl(v.body),a&4)for(a=v.head,Xl(a),v=a.firstChild;v;){var T=v.nextSibling,D=v.nodeName;v[Rs]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(f===0){i.removeChild(d),ru(r);return}f--}else a==="$"||a==="$?"||a==="$!"?f++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);ru(r)}function Kp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kp(a),Sr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}i.removeChild(a)}}function rR(i,r,a,l){for(;i.nodeType===1;){var f=a;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(l){if(!i[Rs])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(d=i.getAttribute("rel"),d==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(d!==f.rel||i.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||i.getAttribute("title")!==(f.title==null?null:f.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(d=i.getAttribute("src"),(d!==(f.src==null?null:f.src)||i.getAttribute("type")!==(f.type==null?null:f.type)||i.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&i.getAttribute("name")===d)return i}else return i;if(i=ii(i.nextSibling),i===null)break}return null}function sR(i,r,a){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!a||(i=ii(i.nextSibling),i===null))return null;return i}function Yp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState==="complete"}function aR(i,r){var a=i.ownerDocument;if(i.data!=="$?"||a.readyState==="complete")r();else{var l=function(){r(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),i._reactRetry=l}}function ii(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}var Qp=null;function m0(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return i;r--}else a==="/$"&&r++}i=i.previousSibling}return null}function g0(i,r,a){switch(r=oh(a),i){case"html":if(i=r.documentElement,!i)throw Error(s(452));return i;case"head":if(i=r.head,!i)throw Error(s(453));return i;case"body":if(i=r.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function Xl(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Sr(i)}var $n=new Map,y0=new Set;function lh(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var cr=ut.d;ut.d={f:oR,r:lR,D:uR,C:cR,L:hR,m:fR,X:pR,S:dR,M:mR};function oR(){var i=cr.f(),r=Jc();return i||r}function lR(i){var r=di(i);r!==null&&r.tag===5&&r.type==="form"?L_(r):cr.r(i)}var po=typeof document>"u"?null:document;function _0(i,r,a){var l=po;if(l&&typeof r=="string"&&r){var f=Ae(r);f='link[rel="'+i+'"][href="'+f+'"]',typeof a=="string"&&(f+='[crossorigin="'+a+'"]'),y0.has(f)||(y0.add(f),i={rel:i,crossOrigin:a,href:r},l.querySelector(f)===null&&(r=l.createElement("link"),Qe(r,"link",i),ye(r),l.head.appendChild(r)))}}function uR(i){cr.D(i),_0("dns-prefetch",i,null)}function cR(i,r){cr.C(i,r),_0("preconnect",i,r)}function hR(i,r,a){cr.L(i,r,a);var l=po;if(l&&i&&r){var f='link[rel="preload"][as="'+Ae(r)+'"]';r==="image"&&a&&a.imageSrcSet?(f+='[imagesrcset="'+Ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(f+='[imagesizes="'+Ae(a.imageSizes)+'"]')):f+='[href="'+Ae(i)+'"]';var d=f;switch(r){case"style":d=mo(i);break;case"script":d=go(i)}$n.has(d)||(i=E({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:i,as:r},a),$n.set(d,i),l.querySelector(f)!==null||r==="style"&&l.querySelector(Wl(d))||r==="script"&&l.querySelector(Zl(d))||(r=l.createElement("link"),Qe(r,"link",i),ye(r),l.head.appendChild(r)))}}function fR(i,r){cr.m(i,r);var a=po;if(a&&i){var l=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+Ae(l)+'"][href="'+Ae(i)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=go(i)}if(!$n.has(d)&&(i=E({rel:"modulepreload",href:i},r),$n.set(d,i),a.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zl(d)))return}l=a.createElement("link"),Qe(l,"link",i),ye(l),a.head.appendChild(l)}}}function dR(i,r,a){cr.S(i,r,a);var l=po;if(l&&i){var f=un(l).hoistableStyles,d=mo(i);r=r||"default";var v=f.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(Wl(d)))T.loading=5;else{i=E({rel:"stylesheet",href:i,"data-precedence":r},a),(a=$n.get(d))&&Xp(i,a);var D=v=l.createElement("link");ye(D),Qe(D,"link",i),D._p=new Promise(function(j,Q){D.onload=j,D.onerror=Q}),D.addEventListener("load",function(){T.loading|=1}),D.addEventListener("error",function(){T.loading|=2}),T.loading|=4,uh(v,r,l)}v={type:"stylesheet",instance:v,count:1,state:T},f.set(d,v)}}}function pR(i,r){cr.X(i,r);var a=po;if(a&&i){var l=un(a).hoistableScripts,f=go(i),d=l.get(f);d||(d=a.querySelector(Zl(f)),d||(i=E({src:i,async:!0},r),(r=$n.get(f))&&Wp(i,r),d=a.createElement("script"),ye(d),Qe(d,"link",i),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function mR(i,r){cr.M(i,r);var a=po;if(a&&i){var l=un(a).hoistableScripts,f=go(i),d=l.get(f);d||(d=a.querySelector(Zl(f)),d||(i=E({src:i,async:!0,type:"module"},r),(r=$n.get(f))&&Wp(i,r),d=a.createElement("script"),ye(d),Qe(d,"link",i),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function v0(i,r,a,l){var f=(f=yt.current)?lh(f):null;if(!f)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=mo(a.href),a=un(f).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){i=mo(a.href);var d=un(f).hoistableStyles,v=d.get(i);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(i,v),(d=f.querySelector(Wl(i)))&&!d._p&&(v.instance=d,v.state.loading=5),$n.has(i)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},$n.set(i,a),d||gR(f,i,a,v.state))),r&&l===null)throw Error(s(528,""));return v}if(r&&l!==null)throw Error(s(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=go(a),a=un(f).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function mo(i){return'href="'+Ae(i)+'"'}function Wl(i){return'link[rel="stylesheet"]['+i+"]"}function E0(i){return E({},i,{"data-precedence":i.precedence,precedence:null})}function gR(i,r,a,l){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=i.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Qe(r,"link",a),ye(r),i.head.appendChild(r))}function go(i){return'[src="'+Ae(i)+'"]'}function Zl(i){return"script[async]"+i}function T0(i,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=i.querySelector('style[data-href~="'+Ae(a.href)+'"]');if(l)return r.instance=l,ye(l),l;var f=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(i.ownerDocument||i).createElement("style"),ye(l),Qe(l,"style",f),uh(l,a.precedence,i),r.instance=l;case"stylesheet":f=mo(a.href);var d=i.querySelector(Wl(f));if(d)return r.state.loading|=4,r.instance=d,ye(d),d;l=E0(a),(f=$n.get(f))&&Xp(l,f),d=(i.ownerDocument||i).createElement("link"),ye(d);var v=d;return v._p=new Promise(function(T,D){v.onload=T,v.onerror=D}),Qe(d,"link",l),r.state.loading|=4,uh(d,a.precedence,i),r.instance=d;case"script":return d=go(a.src),(f=i.querySelector(Zl(d)))?(r.instance=f,ye(f),f):(l=a,(f=$n.get(d))&&(l=E({},a),Wp(l,f)),i=i.ownerDocument||i,f=i.createElement("script"),ye(f),Qe(f,"link",l),i.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,uh(l,a.precedence,i));return r.instance}function uh(i,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===r)d=T;else if(d!==f)break}d?d.parentNode.insertBefore(i,d.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(i,r.firstChild))}function Xp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Wp(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var ch=null;function A0(i,r,a){if(ch===null){var l=new Map,f=ch=new Map;f.set(a,l)}else f=ch,l=f.get(a),l||(l=new Map,f.set(a,l));if(l.has(i))return l;for(l.set(i,null),a=a.getElementsByTagName(i),f=0;f<a.length;f++){var d=a[f];if(!(d[Rs]||d[Ce]||i==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(r)||"";v=i+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function w0(i,r,a){i=i.ownerDocument||i,i.head.insertBefore(a,r==="title"?i.querySelector("head > title"):null)}function yR(i,r,a){if(a===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function S0(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}var Jl=null;function _R(){}function vR(i,r,a){if(Jl===null)throw Error(s(475));var l=Jl;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=mo(a.href),d=i.querySelector(Wl(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(l.count++,l=hh.bind(l),i.then(l,l)),r.state.loading|=4,r.instance=d,ye(d);return}d=i.ownerDocument||i,a=E0(a),(f=$n.get(f))&&Xp(a,f),d=d.createElement("link"),ye(d);var v=d;v._p=new Promise(function(T,D){v.onload=T,v.onerror=D}),Qe(d,"link",a),r.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(l.count++,r=hh.bind(l),i.addEventListener("load",r),i.addEventListener("error",r))}}function ER(){if(Jl===null)throw Error(s(475));var i=Jl;return i.stylesheets&&i.count===0&&Zp(i,i.stylesheets),0<i.count?function(r){var a=setTimeout(function(){if(i.stylesheets&&Zp(i,i.stylesheets),i.unsuspend){var l=i.unsuspend;i.unsuspend=null,l()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(a)}}:null}function hh(){if(this.count--,this.count===0){if(this.stylesheets)Zp(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var fh=null;function Zp(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,fh=new Map,r.forEach(TR,i),fh=null,hh.call(i))}function TR(i,r){if(!(r.state.loading&4)){var a=fh.get(i);if(a)var l=a.get(null);else{a=new Map,fh.set(i,a);for(var f=i.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var v=f[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}f=r.instance,v=f.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,f),a.set(v,f),this.count++,l=hh.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(f,i.firstChild)),r.state.loading|=4}}var tu={$$typeof:$,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function AR(i,r,a,l,f,d,v,T){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Bi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bi(0),this.hiddenUpdates=Bi(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function b0(i,r,a,l,f,d,v,T,D,j,Q,J){return i=new AR(i,r,a,v,T,D,j,J),r=1,d===!0&&(r|=24),d=Sn(3,null,null,r),i.current=d,d.stateNode=i,r=kd(),r.refCount++,i.pooledCache=r,r.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:r},Ld(d),i}function R0(i){return i?(i=$a,i):$a}function I0(i,r,a,l,f,d){f=R0(f),l.context===null?l.context=f:l.pendingContext=f,l=Or(r),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=xr(i,l,r),a!==null&&(Dn(a,i,r),Ol(a,i,r))}function C0(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<r?a:r}}function Jp(i,r){C0(i,r),(i=i.alternate)&&C0(i,r)}function D0(i){if(i.tag===13){var r=Ga(i,67108864);r!==null&&Dn(r,i,67108864),Jp(i,67108864)}}var dh=!0;function wR(i,r,a,l){var f=Y.T;Y.T=null;var d=ut.p;try{ut.p=2,tm(i,r,a,l)}finally{ut.p=d,Y.T=f}}function SR(i,r,a,l){var f=Y.T;Y.T=null;var d=ut.p;try{ut.p=8,tm(i,r,a,l)}finally{ut.p=d,Y.T=f}}function tm(i,r,a,l){if(dh){var f=em(l);if(f===null)jp(i,r,l,ph,a),x0(i,l);else if(RR(f,i,r,a,l))l.stopPropagation();else if(x0(i,l),r&4&&-1<bR.indexOf(i)){for(;f!==null;){var d=di(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Zn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var D=1<<31-tn(v);T.entanglements[1]|=D,v&=~D}Ii(d),(Qt&6)===0&&(Wc=Mn()+500,Kl(0))}}break;case 13:T=Ga(d,2),T!==null&&Dn(T,d,2),Jc(),Jp(d,2)}if(d=em(l),d===null&&jp(i,r,l,ph,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else jp(i,r,l,null,a)}}function em(i){return i=Ln(i),nm(i)}var ph=null;function nm(i){if(ph=null,i=Hi(i),i!==null){var r=u(i);if(r===null)i=null;else{var a=r.tag;if(a===13){if(i=h(r),i!==null)return i;i=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return ph=i,null}function O0(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sd()){case Zo:return 2;case Sa:return 8;case Ts:case ad:return 32;case ba:return 268435456;default:return 32}default:return 32}}var im=!1,Fr=null,Gr=null,$r=null,eu=new Map,nu=new Map,Kr=[],bR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x0(i,r){switch(i){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Gr=null;break;case"mouseover":case"mouseout":$r=null;break;case"pointerover":case"pointerout":eu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":nu.delete(r.pointerId)}}function iu(i,r,a,l,f,d){return i===null||i.nativeEvent!==d?(i={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},r!==null&&(r=di(r),r!==null&&D0(r)),i):(i.eventSystemFlags|=l,r=i.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),i)}function RR(i,r,a,l,f){switch(r){case"focusin":return Fr=iu(Fr,i,r,a,l,f),!0;case"dragenter":return Gr=iu(Gr,i,r,a,l,f),!0;case"mouseover":return $r=iu($r,i,r,a,l,f),!0;case"pointerover":var d=f.pointerId;return eu.set(d,iu(eu.get(d)||null,i,r,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,nu.set(d,iu(nu.get(d)||null,i,r,a,l,f)),!0}return!1}function N0(i){var r=Hi(i.target);if(r!==null){var a=u(r);if(a!==null){if(r=a.tag,r===13){if(r=h(a),r!==null){i.blockedOn=r,Ju(i.priority,function(){if(a.tag===13){var l=Cn();l=Tr(l);var f=Ga(a,l);f!==null&&Dn(f,a,l),Jp(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function mh(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var a=em(i.nativeEvent);if(a===null){a=i.nativeEvent;var l=new a.constructor(a.type,a);$i=l,a.target.dispatchEvent(l),$i=null}else return r=di(a),r!==null&&D0(r),i.blockedOn=a,!1;r.shift()}return!0}function k0(i,r,a){mh(i)&&a.delete(r)}function IR(){im=!1,Fr!==null&&mh(Fr)&&(Fr=null),Gr!==null&&mh(Gr)&&(Gr=null),$r!==null&&mh($r)&&($r=null),eu.forEach(k0),nu.forEach(k0)}function gh(i,r){i.blockedOn===r&&(i.blockedOn=null,im||(im=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,IR)))}var yh=null;function M0(i){yh!==i&&(yh=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){yh===i&&(yh=null);for(var r=0;r<i.length;r+=3){var a=i[r],l=i[r+1],f=i[r+2];if(typeof l!="function"){if(nm(l||a)===null)continue;break}var d=di(a);d!==null&&(i.splice(r,3),r-=3,np(d,{pending:!0,data:f,method:a.method,action:l},l,f))}}))}function ru(i){function r(D){return gh(D,i)}Fr!==null&&gh(Fr,i),Gr!==null&&gh(Gr,i),$r!==null&&gh($r,i),eu.forEach(r),nu.forEach(r);for(var a=0;a<Kr.length;a++){var l=Kr[a];l.blockedOn===i&&(l.blockedOn=null)}for(;0<Kr.length&&(a=Kr[0],a.blockedOn===null);)N0(a),a.blockedOn===null&&Kr.shift();if(a=(i.ownerDocument||i).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var f=a[l],d=a[l+1],v=f[Te]||null;if(typeof d=="function")v||M0(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(f=d,v=d[Te]||null)T=v.formAction;else if(nm(f)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),M0(a)}}}function rm(i){this._internalRoot=i}_h.prototype.render=rm.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(s(409));var a=r.current,l=Cn();I0(a,l,i,r,null,null)},_h.prototype.unmount=rm.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;I0(i.current,2,null,i,null,null),Jc(),r[Pn]=null}};function _h(i){this._internalRoot=i}_h.prototype.unstable_scheduleHydration=function(i){if(i){var r=Ar();i={blockedOn:null,target:i,priority:r};for(var a=0;a<Kr.length&&r!==0&&r<Kr[a].priority;a++);Kr.splice(a,0,i),a===0&&N0(i)}};var P0=t.version;if(P0!=="19.1.0")throw Error(s(527,P0,"19.1.0"));ut.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=m(r),i=i!==null?g(i):null,i=i===null?null:i.stateNode,i};var CR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vh.isDisabled&&vh.supportsFiber)try{fe=vh.inject(CR),Yt=vh}catch{}}return au.createRoot=function(i,r){if(!o(i))throw Error(s(299));var a=!1,l="",f=W_,d=Z_,v=J_,T=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(d=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(T=r.unstable_transitionCallbacks)),r=b0(i,1,!1,null,null,a,l,f,d,v,T,null),i[Pn]=r.current,Bp(i),new rm(r)},au.hydrateRoot=function(i,r,a){if(!o(i))throw Error(s(299));var l=!1,f="",d=W_,v=Z_,T=J_,D=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(D=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),r=b0(i,1,!0,r,a??null,l,f,d,v,T,D,j),r.context=R0(null),a=r.current,l=Cn(),l=Tr(l),f=Or(l),f.callback=null,xr(a,f,l),a=l,r.current.lanes=a,ji(r,a),Ii(r),i[Pn]=r.current,Bp(i),new _h(r)},au.version="19.1.0",au}var G0;function zR(){if(G0)return om.exports;G0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),om.exports=UR(),om.exports}var BR=zR(),ou={},$0;function jR(){if($0)return ou;$0=1,Object.defineProperty(ou,"__esModule",{value:!0}),ou.parse=h,ou.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,e=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function h(w,I){const x=new u,q=w.length;if(q<2)return x;const U=(I==null?void 0:I.decode)||E;let G=0;do{const Z=w.indexOf("=",G);if(Z===-1)break;const $=w.indexOf(";",G),rt=$===-1?q:$;if(Z>rt){G=w.lastIndexOf(";",Z-1)+1;continue}const at=p(w,G,Z),ct=m(w,Z,at),C=w.slice(at,ct);if(x[C]===void 0){let b=p(w,Z+1,rt),R=m(w,rt,b);const k=U(w.slice(b,R));x[C]=k}G=rt+1}while(G<q);return x}function p(w,I,x){do{const q=w.charCodeAt(I);if(q!==32&&q!==9)return I}while(++I<x);return x}function m(w,I,x){for(;I>x;){const q=w.charCodeAt(--I);if(q!==32&&q!==9)return I+1}return x}function g(w,I,x){const q=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const U=q(I);if(!t.test(U))throw new TypeError(`argument val is invalid: ${I}`);let G=w+"="+U;if(!x)return G;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);G+="; Max-Age="+x.maxAge}if(x.domain){if(!e.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);G+="; Domain="+x.domain}if(x.path){if(!s.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);G+="; Path="+x.path}if(x.expires){if(!A(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);G+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(G+="; HttpOnly"),x.secure&&(G+="; Secure"),x.partitioned&&(G+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":G+="; Priority=Low";break;case"medium":G+="; Priority=Medium";break;case"high":G+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":G+="; SameSite=Strict";break;case"lax":G+="; SameSite=Lax";break;case"none":G+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return G}function E(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function A(w){return o.call(w)==="[object Date]"}return ou}jR();var K0="popstate";function HR(n={}){function t(s,o){let{pathname:u,search:h,hash:p}=s.location;return km("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function e(s,o){return typeof o=="string"?o:bu(o)}return FR(t,e,null,n)}function ce(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function Vi(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function qR(){return Math.random().toString(36).substring(2,10)}function Y0(n,t){return{usr:n.state,key:n.key,idx:t}}function km(n,t,e=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof t=="string"?jo(t):t,state:e,key:t&&t.key||s||qR()}}function bu({pathname:n="/",search:t="",hash:e=""}){return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),e&&e!=="#"&&(n+=e.charAt(0)==="#"?e:"#"+e),n}function jo(n){let t={};if(n){let e=n.indexOf("#");e>=0&&(t.hash=n.substring(e),n=n.substring(0,e));let s=n.indexOf("?");s>=0&&(t.search=n.substring(s),n=n.substring(0,s)),n&&(t.pathname=n)}return t}function FR(n,t,e,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",m=null,g=E();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function E(){return(h.state||{idx:null}).idx}function A(){p="POP";let U=E(),G=U==null?null:U-g;g=U,m&&m({action:p,location:q.location,delta:G})}function w(U,G){p="PUSH";let Z=km(q.location,U,G);g=E()+1;let $=Y0(Z,g),rt=q.createHref(Z);try{h.pushState($,"",rt)}catch(at){if(at instanceof DOMException&&at.name==="DataCloneError")throw at;o.location.assign(rt)}u&&m&&m({action:p,location:q.location,delta:1})}function I(U,G){p="REPLACE";let Z=km(q.location,U,G);g=E();let $=Y0(Z,g),rt=q.createHref(Z);h.replaceState($,"",rt),u&&m&&m({action:p,location:q.location,delta:0})}function x(U){return GR(U)}let q={get action(){return p},get location(){return n(o,h)},listen(U){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(K0,A),m=U,()=>{o.removeEventListener(K0,A),m=null}},createHref(U){return t(o,U)},createURL:x,encodeLocation(U){let G=x(U);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:w,replace:I,go(U){return h.go(U)}};return q}function GR(n,t=!1){let e="http://localhost";typeof window<"u"&&(e=window.location.origin!=="null"?window.location.origin:window.location.href),ce(e,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:bu(n);return s=s.replace(/ $/,"%20"),!t&&s.startsWith("//")&&(s=e+s),new URL(s,e)}function nA(n,t,e="/"){return $R(n,t,e,!1)}function $R(n,t,e,s){let o=typeof t=="string"?jo(t):t,u=mr(o.pathname||"/",e);if(u==null)return null;let h=iA(n);KR(h);let p=null;for(let m=0;p==null&&m<h.length;++m){let g=rI(u);p=nI(h[m],g,s)}return p}function iA(n,t=[],e=[],s=""){let o=(u,h,p)=>{let m={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};m.relativePath.startsWith("/")&&(ce(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=pr([s,m.relativePath]),E=e.concat(m);u.children&&u.children.length>0&&(ce(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),iA(u.children,t,E,g)),!(u.path==null&&!u.index)&&t.push({path:g,score:tI(g,u.index),routesMeta:E})};return n.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let m of rA(u.path))o(u,h,m)}),t}function rA(n){let t=n.split("/");if(t.length===0)return[];let[e,...s]=t,o=e.endsWith("?"),u=e.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=rA(s.join("/")),p=[];return p.push(...h.map(m=>m===""?u:[u,m].join("/"))),o&&p.push(...h),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function KR(n){n.sort((t,e)=>t.score!==e.score?e.score-t.score:eI(t.routesMeta.map(s=>s.childrenIndex),e.routesMeta.map(s=>s.childrenIndex)))}var YR=/^:[\w-]+$/,QR=3,XR=2,WR=1,ZR=10,JR=-2,Q0=n=>n==="*";function tI(n,t){let e=n.split("/"),s=e.length;return e.some(Q0)&&(s+=JR),t&&(s+=XR),e.filter(o=>!Q0(o)).reduce((o,u)=>o+(YR.test(u)?QR:u===""?WR:ZR),s)}function eI(n,t){return n.length===t.length&&n.slice(0,-1).every((s,o)=>s===t[o])?n[n.length-1]-t[t.length-1]:0}function nI(n,t,e=!1){let{routesMeta:s}=n,o={},u="/",h=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,E=u==="/"?t:t.slice(u.length)||"/",A=Xh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},E),w=m.route;if(!A&&g&&e&&!s[s.length-1].route.index&&(A=Xh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},E)),!A)return null;Object.assign(o,A.params),h.push({params:o,pathname:pr([u,A.pathname]),pathnameBase:lI(pr([u,A.pathnameBase])),route:w}),A.pathnameBase!=="/"&&(u=pr([u,A.pathnameBase]))}return h}function Xh(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[e,s]=iI(n.path,n.caseSensitive,n.end),o=t.match(e);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((g,{paramName:E,isOptional:A},w)=>{if(E==="*"){let x=p[w]||"";h=u.slice(0,u.length-x.length).replace(/(.)\/+$/,"$1")}const I=p[w];return A&&!I?g[E]=void 0:g[E]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:h,pattern:n}}function iI(n,t=!1,e=!0){Vi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):e?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),s]}function rI(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),n}}function mr(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let e=t.endsWith("/")?t.length-1:t.length,s=n.charAt(e);return s&&s!=="/"?null:n.slice(e)||"/"}function sI(n,t="/"){let{pathname:e,search:s="",hash:o=""}=typeof n=="string"?jo(n):n;return{pathname:e?e.startsWith("/")?e:aI(e,t):t,search:uI(s),hash:cI(o)}}function aI(n,t){let e=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?e.length>1&&e.pop():o!=="."&&e.push(o)}),e.length>1?e.join("/"):"/"}function hm(n,t,e,s){return`Cannot include a '${n}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${e}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oI(n){return n.filter((t,e)=>e===0||t.route.path&&t.route.path.length>0)}function sA(n){let t=oI(n);return t.map((e,s)=>s===t.length-1?e.pathname:e.pathnameBase)}function aA(n,t,e,s=!1){let o;typeof n=="string"?o=jo(n):(o={...n},ce(!o.pathname||!o.pathname.includes("?"),hm("?","pathname","search",o)),ce(!o.pathname||!o.pathname.includes("#"),hm("#","pathname","hash",o)),ce(!o.search||!o.search.includes("#"),hm("#","search","hash",o)));let u=n===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=e;else{let A=t.length-1;if(!s&&h.startsWith("..")){let w=h.split("/");for(;w[0]==="..";)w.shift(),A-=1;o.pathname=w.join("/")}p=A>=0?t[A]:"/"}let m=sI(o,p),g=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&e.endsWith("/");return!m.pathname.endsWith("/")&&(g||E)&&(m.pathname+="/"),m}var pr=n=>n.join("/").replace(/\/\/+/g,"/"),lI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),uI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,cI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function hI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var oA=["POST","PUT","PATCH","DELETE"];new Set(oA);var fI=["GET",...oA];new Set(fI);var Ho=X.createContext(null);Ho.displayName="DataRouter";var bf=X.createContext(null);bf.displayName="DataRouterState";var lA=X.createContext({isTransitioning:!1});lA.displayName="ViewTransition";var dI=X.createContext(new Map);dI.displayName="Fetchers";var pI=X.createContext(null);pI.displayName="Await";var zi=X.createContext(null);zi.displayName="Navigation";var Uu=X.createContext(null);Uu.displayName="Location";var Er=X.createContext({outlet:null,matches:[],isDataRoute:!1});Er.displayName="Route";var yg=X.createContext(null);yg.displayName="RouteError";function mI(n,{relative:t}={}){ce(zu(),"useHref() may be used only in the context of a <Router> component.");let{basename:e,navigator:s}=X.useContext(zi),{hash:o,pathname:u,search:h}=Bu(n,{relative:t}),p=u;return e!=="/"&&(p=u==="/"?e:pr([e,u])),s.createHref({pathname:p,search:h,hash:o})}function zu(){return X.useContext(Uu)!=null}function ma(){return ce(zu(),"useLocation() may be used only in the context of a <Router> component."),X.useContext(Uu).location}var uA="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cA(n){X.useContext(zi).static||X.useLayoutEffect(n)}function qo(){let{isDataRoute:n}=X.useContext(Er);return n?CI():gI()}function gI(){ce(zu(),"useNavigate() may be used only in the context of a <Router> component.");let n=X.useContext(Ho),{basename:t,navigator:e}=X.useContext(zi),{matches:s}=X.useContext(Er),{pathname:o}=ma(),u=JSON.stringify(sA(s)),h=X.useRef(!1);return cA(()=>{h.current=!0}),X.useCallback((m,g={})=>{if(Vi(h.current,uA),!h.current)return;if(typeof m=="number"){e.go(m);return}let E=aA(m,JSON.parse(u),o,g.relative==="path");n==null&&t!=="/"&&(E.pathname=E.pathname==="/"?t:pr([t,E.pathname])),(g.replace?e.replace:e.push)(E,g.state,g)},[t,e,u,o,n])}X.createContext(null);function Bu(n,{relative:t}={}){let{matches:e}=X.useContext(Er),{pathname:s}=ma(),o=JSON.stringify(sA(e));return X.useMemo(()=>aA(n,JSON.parse(o),s,t==="path"),[n,o,s,t])}function yI(n,t){return hA(n,t)}function hA(n,t,e,s){var Z;ce(zu(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:u}=X.useContext(zi),{matches:h}=X.useContext(Er),p=h[h.length-1],m=p?p.params:{},g=p?p.pathname:"/",E=p?p.pathnameBase:"/",A=p&&p.route;{let $=A&&A.path||"";fA(g,!A||$.endsWith("*")||$.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${$}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${$}"> to <Route path="${$==="/"?"*":`${$}/*`}">.`)}let w=ma(),I;if(t){let $=typeof t=="string"?jo(t):t;ce(E==="/"||((Z=$.pathname)==null?void 0:Z.startsWith(E)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${$.pathname}" was given in the \`location\` prop.`),I=$}else I=w;let x=I.pathname||"/",q=x;if(E!=="/"){let $=E.replace(/^\//,"").split("/");q="/"+x.replace(/^\//,"").split("/").slice($.length).join("/")}let U=!u&&e&&e.matches&&e.matches.length>0?e.matches:nA(n,{pathname:q});Vi(A||U!=null,`No routes matched location "${I.pathname}${I.search}${I.hash}" `),Vi(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${I.pathname}${I.search}${I.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=AI(U&&U.map($=>Object.assign({},$,{params:Object.assign({},m,$.params),pathname:pr([E,o.encodeLocation?o.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?E:pr([E,o.encodeLocation?o.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),h,e,s);return t&&G?X.createElement(Uu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...I},navigationType:"POP"}},G):G}function _I(){let n=II(),t=hI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),e=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=X.createElement(X.Fragment,null,X.createElement("p",null,"💿 Hey developer 👋"),X.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",X.createElement("code",{style:u},"ErrorBoundary")," or"," ",X.createElement("code",{style:u},"errorElement")," prop on your route.")),X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},t),e?X.createElement("pre",{style:o},e):null,h)}var vI=X.createElement(_I,null),EI=class extends X.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?X.createElement(Er.Provider,{value:this.props.routeContext},X.createElement(yg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function TI({routeContext:n,match:t,children:e}){let s=X.useContext(Ho);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),X.createElement(Er.Provider,{value:n},e)}function AI(n,t=[],e=null,s=null){if(n==null){if(!e)return null;if(e.errors)n=e.matches;else if(t.length===0&&!e.initialized&&e.matches.length>0)n=e.matches;else return null}let o=n,u=e==null?void 0:e.errors;if(u!=null){let m=o.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);ce(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let h=!1,p=-1;if(e)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:E,errors:A}=e,w=g.route.loader&&!E.hasOwnProperty(g.route.id)&&(!A||A[g.route.id]===void 0);if(g.route.lazy||w){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,g,E)=>{let A,w=!1,I=null,x=null;e&&(A=u&&g.route.id?u[g.route.id]:void 0,I=g.route.errorElement||vI,h&&(p<0&&E===0?(fA("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):p===E&&(w=!0,x=g.route.hydrateFallbackElement||null)));let q=t.concat(o.slice(0,E+1)),U=()=>{let G;return A?G=I:w?G=x:g.route.Component?G=X.createElement(g.route.Component,null):g.route.element?G=g.route.element:G=m,X.createElement(TI,{match:g,routeContext:{outlet:m,matches:q,isDataRoute:e!=null},children:G})};return e&&(g.route.ErrorBoundary||g.route.errorElement||E===0)?X.createElement(EI,{location:e.location,revalidation:e.revalidation,component:I,error:A,children:U(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):U()},null)}function _g(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wI(n){let t=X.useContext(Ho);return ce(t,_g(n)),t}function SI(n){let t=X.useContext(bf);return ce(t,_g(n)),t}function bI(n){let t=X.useContext(Er);return ce(t,_g(n)),t}function vg(n){let t=bI(n),e=t.matches[t.matches.length-1];return ce(e.route.id,`${n} can only be used on routes that contain a unique "id"`),e.route.id}function RI(){return vg("useRouteId")}function II(){var s;let n=X.useContext(yg),t=SI("useRouteError"),e=vg("useRouteError");return n!==void 0?n:(s=t.errors)==null?void 0:s[e]}function CI(){let{router:n}=wI("useNavigate"),t=vg("useNavigate"),e=X.useRef(!1);return cA(()=>{e.current=!0}),X.useCallback(async(o,u={})=>{Vi(e.current,uA),e.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:t,...u}))},[n,t])}var X0={};function fA(n,t,e){!t&&!X0[n]&&(X0[n]=!0,Vi(!1,e))}X.memo(DI);function DI({routes:n,future:t,state:e}){return hA(n,void 0,e,t)}function oi(n){ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function OI({basename:n="/",children:t=null,location:e,navigationType:s="POP",navigator:o,static:u=!1}){ce(!zu(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),p=X.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof e=="string"&&(e=jo(e));let{pathname:m="/",search:g="",hash:E="",state:A=null,key:w="default"}=e,I=X.useMemo(()=>{let x=mr(m,h);return x==null?null:{location:{pathname:x,search:g,hash:E,state:A,key:w},navigationType:s}},[h,m,g,E,A,w,s]);return Vi(I!=null,`<Router basename="${h}"> is not able to match the URL "${m}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:X.createElement(zi.Provider,{value:p},X.createElement(Uu.Provider,{children:t,value:I}))}function Rf({children:n,location:t}){return yI(Mm(n),t)}function Mm(n,t=[]){let e=[];return X.Children.forEach(n,(s,o)=>{if(!X.isValidElement(s))return;let u=[...t,o];if(s.type===X.Fragment){e.push.apply(e,Mm(s.props.children,u));return}ce(s.type===oi,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ce(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Mm(s.props.children,u)),e.push(h)}),e}var kh="get",Mh="application/x-www-form-urlencoded";function If(n){return n!=null&&typeof n.tagName=="string"}function xI(n){return If(n)&&n.tagName.toLowerCase()==="button"}function NI(n){return If(n)&&n.tagName.toLowerCase()==="form"}function kI(n){return If(n)&&n.tagName.toLowerCase()==="input"}function MI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function PI(n,t){return n.button===0&&(!t||t==="_self")&&!MI(n)}var Eh=null;function VI(){if(Eh===null)try{new FormData(document.createElement("form"),0),Eh=!1}catch{Eh=!0}return Eh}var LI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fm(n){return n!=null&&!LI.has(n)?(Vi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mh}"`),null):n}function UI(n,t){let e,s,o,u,h;if(NI(n)){let p=n.getAttribute("action");s=p?mr(p,t):null,e=n.getAttribute("method")||kh,o=fm(n.getAttribute("enctype"))||Mh,u=new FormData(n)}else if(xI(n)||kI(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(s=m?mr(m,t):null,e=n.getAttribute("formmethod")||p.getAttribute("method")||kh,o=fm(n.getAttribute("formenctype"))||fm(p.getAttribute("enctype"))||Mh,u=new FormData(p,n),!VI()){let{name:g,type:E,value:A}=n;if(E==="image"){let w=g?`${g}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else g&&u.append(g,A)}}else{if(If(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');e=kh,s=null,o=Mh,h=n}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:e.toLowerCase(),encType:o,formData:u,body:h}}function Eg(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}async function zI(n,t){if(n.id in t)return t[n.id];try{let e=await import(n.module);return t[n.id]=e,e}catch(e){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(e),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function jI(n,t,e){let s=await Promise.all(n.map(async o=>{let u=t.routes[o.route.id];if(u){let h=await zI(u,e);return h.links?h.links():[]}return[]}));return GI(s.flat(1).filter(BI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function W0(n,t,e,s,o,u){let h=(m,g)=>e[g]?m.route.id!==e[g].route.id:!0,p=(m,g)=>{var E;return e[g].pathname!==m.pathname||((E=e[g].route.path)==null?void 0:E.endsWith("*"))&&e[g].params["*"]!==m.params["*"]};return u==="assets"?t.filter((m,g)=>h(m,g)||p(m,g)):u==="data"?t.filter((m,g)=>{var A;let E=s.routes[m.route.id];if(!E||!E.hasLoader)return!1;if(h(m,g)||p(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((A=e[0])==null?void 0:A.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function HI(n,t,{includeHydrateFallback:e}={}){return qI(n.map(s=>{let o=t.routes[s.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),e&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function qI(n){return[...new Set(n)]}function FI(n){let t={},e=Object.keys(n).sort();for(let s of e)t[s]=n[s];return t}function GI(n,t){let e=new Set;return new Set(t),n.reduce((s,o)=>{let u=JSON.stringify(FI(o));return e.has(u)||(e.add(u),s.push({key:u,link:o})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $I=new Set([100,101,204,205]);function KI(n,t){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":t&&mr(e.pathname,t)==="/"?e.pathname=`${t.replace(/\/$/,"")}/_root.data`:e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function dA(){let n=X.useContext(Ho);return Eg(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function YI(){let n=X.useContext(bf);return Eg(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Tg=X.createContext(void 0);Tg.displayName="FrameworkContext";function pA(){let n=X.useContext(Tg);return Eg(n,"You must render this element inside a <HydratedRouter> element"),n}function QI(n,t){let e=X.useContext(Tg),[s,o]=X.useState(!1),[u,h]=X.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:g,onMouseLeave:E,onTouchStart:A}=t,w=X.useRef(null);X.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let q=G=>{G.forEach(Z=>{h(Z.isIntersecting)})},U=new IntersectionObserver(q,{threshold:.5});return w.current&&U.observe(w.current),()=>{U.disconnect()}}},[n]),X.useEffect(()=>{if(s){let q=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(q)}}},[s]);let I=()=>{o(!0)},x=()=>{o(!1),h(!1)};return e?n!=="intent"?[u,w,{}]:[u,w,{onFocus:lu(p,I),onBlur:lu(m,x),onMouseEnter:lu(g,I),onMouseLeave:lu(E,x),onTouchStart:lu(A,I)}]:[!1,w,{}]}function lu(n,t){return e=>{n&&n(e),e.defaultPrevented||t(e)}}function XI({page:n,...t}){let{router:e}=dA(),s=X.useMemo(()=>nA(e.routes,n,e.basename),[e.routes,n,e.basename]);return s?X.createElement(ZI,{page:n,matches:s,...t}):null}function WI(n){let{manifest:t,routeModules:e}=pA(),[s,o]=X.useState([]);return X.useEffect(()=>{let u=!1;return jI(n,t,e).then(h=>{u||o(h)}),()=>{u=!0}},[n,t,e]),s}function ZI({page:n,matches:t,...e}){let s=ma(),{manifest:o,routeModules:u}=pA(),{basename:h}=dA(),{loaderData:p,matches:m}=YI(),g=X.useMemo(()=>W0(n,t,m,o,s,"data"),[n,t,m,o,s]),E=X.useMemo(()=>W0(n,t,m,o,s,"assets"),[n,t,m,o,s]),A=X.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let x=new Set,q=!1;if(t.forEach(G=>{var $;let Z=o.routes[G.route.id];!Z||!Z.hasLoader||(!g.some(rt=>rt.route.id===G.route.id)&&G.route.id in p&&(($=u[G.route.id])!=null&&$.shouldRevalidate)||Z.hasClientLoader?q=!0:x.add(G.route.id))}),x.size===0)return[];let U=KI(n,h);return q&&x.size>0&&U.searchParams.set("_routes",t.filter(G=>x.has(G.route.id)).map(G=>G.route.id).join(",")),[U.pathname+U.search]},[h,p,s,o,g,t,n,u]),w=X.useMemo(()=>HI(E,o),[E,o]),I=WI(E);return X.createElement(X.Fragment,null,A.map(x=>X.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...e})),w.map(x=>X.createElement("link",{key:x,rel:"modulepreload",href:x,...e})),I.map(({key:x,link:q})=>X.createElement("link",{key:x,...q})))}function JI(...n){return t=>{n.forEach(e=>{typeof e=="function"?e(t):e!=null&&(e.current=t)})}}var mA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mA&&(window.__reactRouterVersion="7.6.0")}catch{}function tC({basename:n,children:t,window:e}){let s=X.useRef();s.current==null&&(s.current=HR({window:e,v5Compat:!0}));let o=s.current,[u,h]=X.useState({action:o.action,location:o.location}),p=X.useCallback(m=>{X.startTransition(()=>h(m))},[h]);return X.useLayoutEffect(()=>o.listen(p),[o,p]),X.createElement(OI,{basename:n,children:t,location:u.location,navigationType:u.action,navigator:o})}var gA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yA=X.forwardRef(function({onClick:t,discover:e="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:m,to:g,preventScrollReset:E,viewTransition:A,...w},I){let{basename:x}=X.useContext(zi),q=typeof g=="string"&&gA.test(g),U,G=!1;if(typeof g=="string"&&q&&(U=g,mA))try{let R=new URL(window.location.href),k=g.startsWith("//")?new URL(R.protocol+g):new URL(g),P=mr(k.pathname,x);k.origin===R.origin&&P!=null?g=P+k.search+k.hash:G=!0}catch{Vi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=mI(g,{relative:o}),[$,rt,at]=QI(s,w),ct=rC(g,{replace:h,state:p,target:m,preventScrollReset:E,relative:o,viewTransition:A});function C(R){t&&t(R),R.defaultPrevented||ct(R)}let b=X.createElement("a",{...w,...at,href:U||Z,onClick:G||u?t:C,ref:JI(I,rt),target:m,"data-discover":!q&&e==="render"?"true":void 0});return $&&!q?X.createElement(X.Fragment,null,b,X.createElement(XI,{page:Z})):b});yA.displayName="Link";var eC=X.forwardRef(function({"aria-current":t="page",caseSensitive:e=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:m,...g},E){let A=Bu(h,{relative:g.relative}),w=ma(),I=X.useContext(bf),{navigator:x,basename:q}=X.useContext(zi),U=I!=null&&uC(A)&&p===!0,G=x.encodeLocation?x.encodeLocation(A).pathname:A.pathname,Z=w.pathname,$=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;e||(Z=Z.toLowerCase(),$=$?$.toLowerCase():null,G=G.toLowerCase()),$&&q&&($=mr($,q)||$);const rt=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let at=Z===G||!o&&Z.startsWith(G)&&Z.charAt(rt)==="/",ct=$!=null&&($===G||!o&&$.startsWith(G)&&$.charAt(G.length)==="/"),C={isActive:at,isPending:ct,isTransitioning:U},b=at?t:void 0,R;typeof s=="function"?R=s(C):R=[s,at?"active":null,ct?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let k=typeof u=="function"?u(C):u;return X.createElement(yA,{...g,"aria-current":b,className:R,ref:E,style:k,to:h,viewTransition:p},typeof m=="function"?m(C):m)});eC.displayName="NavLink";var nC=X.forwardRef(({discover:n="render",fetcherKey:t,navigate:e,reloadDocument:s,replace:o,state:u,method:h=kh,action:p,onSubmit:m,relative:g,preventScrollReset:E,viewTransition:A,...w},I)=>{let x=oC(),q=lC(p,{relative:g}),U=h.toLowerCase()==="get"?"get":"post",G=typeof p=="string"&&gA.test(p),Z=$=>{if(m&&m($),$.defaultPrevented)return;$.preventDefault();let rt=$.nativeEvent.submitter,at=(rt==null?void 0:rt.getAttribute("formmethod"))||h;x(rt||$.currentTarget,{fetcherKey:t,method:at,navigate:e,replace:o,state:u,relative:g,preventScrollReset:E,viewTransition:A})};return X.createElement("form",{ref:I,method:U,action:q,onSubmit:s?m:Z,...w,"data-discover":!G&&n==="render"?"true":void 0})});nC.displayName="Form";function iC(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _A(n){let t=X.useContext(Ho);return ce(t,iC(n)),t}function rC(n,{target:t,replace:e,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=qo(),m=ma(),g=Bu(n,{relative:u});return X.useCallback(E=>{if(PI(E,t)){E.preventDefault();let A=e!==void 0?e:bu(m)===bu(g);p(n,{replace:A,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[m,p,g,e,s,t,n,o,u,h])}var sC=0,aC=()=>`__${String(++sC)}__`;function oC(){let{router:n}=_A("useSubmit"),{basename:t}=X.useContext(zi),e=RI();return X.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:m,body:g}=UI(s,t);if(o.navigate===!1){let E=o.fetcherKey||aC();await n.fetch(E,e,o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await n.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:m,body:g,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:e,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,t,e])}function lC(n,{relative:t}={}){let{basename:e}=X.useContext(zi),s=X.useContext(Er);ce(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Bu(n||".",{relative:t})},h=ma();if(n==null){u.search=h.search;let p=new URLSearchParams(u.search),m=p.getAll("index");if(m.some(E=>E==="")){p.delete("index"),m.filter(A=>A).forEach(A=>p.append("index",A));let E=p.toString();u.search=E?`?${E}`:""}}return(!n||n===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),e!=="/"&&(u.pathname=u.pathname==="/"?e:pr([e,u.pathname])),bu(u)}function uC(n,t={}){let e=X.useContext(lA);ce(e!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=_A("useViewTransitionState"),o=Bu(n,{relative:t.relative});if(!e.isTransitioning)return!1;let u=mr(e.currentLocation.pathname,s)||e.currentLocation.pathname,h=mr(e.nextLocation.pathname,s)||e.nextLocation.pathname;return Xh(o.pathname,h)!=null||Xh(o.pathname,u)!=null}[...$I];const cC=()=>nt.jsx(nt.Fragment,{children:"홈"});var on=function(){return on=Object.assign||function(t){for(var e,s=1,o=arguments.length;s<o;s++){e=arguments[s];for(var u in e)Object.prototype.hasOwnProperty.call(e,u)&&(t[u]=e[u])}return t},on.apply(this,arguments)};function Ag(n,t){var e={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(e[s[o]]=n[s[o]]);return e}function Ru(n,t,e){if(e||arguments.length===2)for(var s=0,o=t.length,u;s<o;s++)(u||!(s in t))&&(u||(u=Array.prototype.slice.call(t,0,s)),u[s]=t[s]);return n.concat(u||Array.prototype.slice.call(t))}var ie="-ms-",gu="-moz-",$t="-webkit-",vA="comm",Cf="rule",wg="decl",hC="@import",EA="@keyframes",fC="@layer",TA=Math.abs,Sg=String.fromCharCode,Pm=Object.assign;function dC(n,t){return qe(n,0)^45?(((t<<2^qe(n,0))<<2^qe(n,1))<<2^qe(n,2))<<2^qe(n,3):0}function AA(n){return n.trim()}function hr(n,t){return(n=t.exec(n))?n[0]:n}function Dt(n,t,e){return n.replace(t,e)}function Ph(n,t,e){return n.indexOf(t,e)}function qe(n,t){return n.charCodeAt(t)|0}function Co(n,t,e){return n.slice(t,e)}function Di(n){return n.length}function wA(n){return n.length}function cu(n,t){return t.push(n),n}function pC(n,t){return n.map(t).join("")}function Z0(n,t){return n.filter(function(e){return!hr(e,t)})}var Df=1,Do=1,SA=0,Qn=0,Re=0,Fo="";function Of(n,t,e,s,o,u,h,p){return{value:n,root:t,parent:e,type:s,props:o,children:u,line:Df,column:Do,length:h,return:"",siblings:p}}function Xr(n,t){return Pm(Of("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function yo(n){for(;n.root;)n=Xr(n.root,{children:[n]});cu(n,n.siblings)}function mC(){return Re}function gC(){return Re=Qn>0?qe(Fo,--Qn):0,Do--,Re===10&&(Do=1,Df--),Re}function li(){return Re=Qn<SA?qe(Fo,Qn++):0,Do++,Re===10&&(Do=1,Df++),Re}function oa(){return qe(Fo,Qn)}function Vh(){return Qn}function xf(n,t){return Co(Fo,n,t)}function Vm(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yC(n){return Df=Do=1,SA=Di(Fo=n),Qn=0,[]}function _C(n){return Fo="",n}function dm(n){return AA(xf(Qn-1,Lm(n===91?n+2:n===40?n+1:n)))}function vC(n){for(;(Re=oa())&&Re<33;)li();return Vm(n)>2||Vm(Re)>3?"":" "}function EC(n,t){for(;--t&&li()&&!(Re<48||Re>102||Re>57&&Re<65||Re>70&&Re<97););return xf(n,Vh()+(t<6&&oa()==32&&li()==32))}function Lm(n){for(;li();)switch(Re){case n:return Qn;case 34:case 39:n!==34&&n!==39&&Lm(Re);break;case 40:n===41&&Lm(n);break;case 92:li();break}return Qn}function TC(n,t){for(;li()&&n+Re!==57;)if(n+Re===84&&oa()===47)break;return"/*"+xf(t,Qn-1)+"*"+Sg(n===47?n:li())}function AC(n){for(;!Vm(oa());)li();return xf(n,Qn)}function wC(n){return _C(Lh("",null,null,null,[""],n=yC(n),0,[0],n))}function Lh(n,t,e,s,o,u,h,p,m){for(var g=0,E=0,A=h,w=0,I=0,x=0,q=1,U=1,G=1,Z=0,$="",rt=o,at=u,ct=s,C=$;U;)switch(x=Z,Z=li()){case 40:if(x!=108&&qe(C,A-1)==58){Ph(C+=Dt(dm(Z),"&","&\f"),"&\f",TA(g?p[g-1]:0))!=-1&&(G=-1);break}case 34:case 39:case 91:C+=dm(Z);break;case 9:case 10:case 13:case 32:C+=vC(x);break;case 92:C+=EC(Vh()-1,7);continue;case 47:switch(oa()){case 42:case 47:cu(SC(TC(li(),Vh()),t,e,m),m);break;default:C+="/"}break;case 123*q:p[g++]=Di(C)*G;case 125*q:case 59:case 0:switch(Z){case 0:case 125:U=0;case 59+E:G==-1&&(C=Dt(C,/\f/g,"")),I>0&&Di(C)-A&&cu(I>32?tE(C+";",s,e,A-1,m):tE(Dt(C," ","")+";",s,e,A-2,m),m);break;case 59:C+=";";default:if(cu(ct=J0(C,t,e,g,E,o,p,$,rt=[],at=[],A,u),u),Z===123)if(E===0)Lh(C,t,ct,ct,rt,u,A,p,at);else switch(w===99&&qe(C,3)===110?100:w){case 100:case 108:case 109:case 115:Lh(n,ct,ct,s&&cu(J0(n,ct,ct,0,0,o,p,$,o,rt=[],A,at),at),o,at,A,p,s?rt:at);break;default:Lh(C,ct,ct,ct,[""],at,0,p,at)}}g=E=I=0,q=G=1,$=C="",A=h;break;case 58:A=1+Di(C),I=x;default:if(q<1){if(Z==123)--q;else if(Z==125&&q++==0&&gC()==125)continue}switch(C+=Sg(Z),Z*q){case 38:G=E>0?1:(C+="\f",-1);break;case 44:p[g++]=(Di(C)-1)*G,G=1;break;case 64:oa()===45&&(C+=dm(li())),w=oa(),E=A=Di($=C+=AC(Vh())),Z++;break;case 45:x===45&&Di(C)==2&&(q=0)}}return u}function J0(n,t,e,s,o,u,h,p,m,g,E,A){for(var w=o-1,I=o===0?u:[""],x=wA(I),q=0,U=0,G=0;q<s;++q)for(var Z=0,$=Co(n,w+1,w=TA(U=h[q])),rt=n;Z<x;++Z)(rt=AA(U>0?I[Z]+" "+$:Dt($,/&\f/g,I[Z])))&&(m[G++]=rt);return Of(n,t,e,o===0?Cf:p,m,g,E,A)}function SC(n,t,e,s){return Of(n,t,e,vA,Sg(mC()),Co(n,2,-2),0,s)}function tE(n,t,e,s,o){return Of(n,t,e,wg,Co(n,0,s),Co(n,s+1,-1),s,o)}function bA(n,t,e){switch(dC(n,t)){case 5103:return $t+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $t+n+n;case 4789:return gu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return $t+n+gu+n+ie+n+n;case 5936:switch(qe(n,t+11)){case 114:return $t+n+ie+Dt(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return $t+n+ie+Dt(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return $t+n+ie+Dt(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return $t+n+ie+n+n;case 6165:return $t+n+ie+"flex-"+n+n;case 5187:return $t+n+Dt(n,/(\w+).+(:[^]+)/,$t+"box-$1$2"+ie+"flex-$1$2")+n;case 5443:return $t+n+ie+"flex-item-"+Dt(n,/flex-|-self/g,"")+(hr(n,/flex-|baseline/)?"":ie+"grid-row-"+Dt(n,/flex-|-self/g,""))+n;case 4675:return $t+n+ie+"flex-line-pack"+Dt(n,/align-content|flex-|-self/g,"")+n;case 5548:return $t+n+ie+Dt(n,"shrink","negative")+n;case 5292:return $t+n+ie+Dt(n,"basis","preferred-size")+n;case 6060:return $t+"box-"+Dt(n,"-grow","")+$t+n+ie+Dt(n,"grow","positive")+n;case 4554:return $t+Dt(n,/([^-])(transform)/g,"$1"+$t+"$2")+n;case 6187:return Dt(Dt(Dt(n,/(zoom-|grab)/,$t+"$1"),/(image-set)/,$t+"$1"),n,"")+n;case 5495:case 3959:return Dt(n,/(image-set\([^]*)/,$t+"$1$`$1");case 4968:return Dt(Dt(n,/(.+:)(flex-)?(.*)/,$t+"box-pack:$3"+ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$t+n+n;case 4200:if(!hr(n,/flex-|baseline/))return ie+"grid-column-align"+Co(n,t)+n;break;case 2592:case 3360:return ie+Dt(n,"template-","")+n;case 4384:case 3616:return e&&e.some(function(s,o){return t=o,hr(s.props,/grid-\w+-end/)})?~Ph(n+(e=e[t].value),"span",0)?n:ie+Dt(n,"-start","")+n+ie+"grid-row-span:"+(~Ph(e,"span",0)?hr(e,/\d+/):+hr(e,/\d+/)-+hr(n,/\d+/))+";":ie+Dt(n,"-start","")+n;case 4896:case 4128:return e&&e.some(function(s){return hr(s.props,/grid-\w+-start/)})?n:ie+Dt(Dt(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Dt(n,/(.+)-inline(.+)/,$t+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Di(n)-1-t>6)switch(qe(n,t+1)){case 109:if(qe(n,t+4)!==45)break;case 102:return Dt(n,/(.+:)(.+)-([^]+)/,"$1"+$t+"$2-$3$1"+gu+(qe(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~Ph(n,"stretch",0)?bA(Dt(n,"stretch","fill-available"),t,e)+n:n}break;case 5152:case 5920:return Dt(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,o,u,h,p,m,g){return ie+o+":"+u+g+(h?ie+o+"-span:"+(p?m:+m-+u)+g:"")+n});case 4949:if(qe(n,t+6)===121)return Dt(n,":",":"+$t)+n;break;case 6444:switch(qe(n,qe(n,14)===45?18:11)){case 120:return Dt(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$t+(qe(n,14)===45?"inline-":"")+"box$3$1"+$t+"$2$3$1"+ie+"$2box$3")+n;case 100:return Dt(n,":",":"+ie)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Dt(n,"scroll-","scroll-snap-")+n}return n}function Wh(n,t){for(var e="",s=0;s<n.length;s++)e+=t(n[s],s,n,t)||"";return e}function bC(n,t,e,s){switch(n.type){case fC:if(n.children.length)break;case hC:case wg:return n.return=n.return||n.value;case vA:return"";case EA:return n.return=n.value+"{"+Wh(n.children,s)+"}";case Cf:if(!Di(n.value=n.props.join(",")))return""}return Di(e=Wh(n.children,s))?n.return=n.value+"{"+e+"}":""}function RC(n){var t=wA(n);return function(e,s,o,u){for(var h="",p=0;p<t;p++)h+=n[p](e,s,o,u)||"";return h}}function IC(n){return function(t){t.root||(t=t.return)&&n(t)}}function CC(n,t,e,s){if(n.length>-1&&!n.return)switch(n.type){case wg:n.return=bA(n.value,n.length,e);return;case EA:return Wh([Xr(n,{value:Dt(n.value,"@","@"+$t)})],s);case Cf:if(n.length)return pC(e=n.props,function(o){switch(hr(o,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yo(Xr(n,{props:[Dt(o,/:(read-\w+)/,":"+gu+"$1")]})),yo(Xr(n,{props:[o]})),Pm(n,{props:Z0(e,s)});break;case"::placeholder":yo(Xr(n,{props:[Dt(o,/:(plac\w+)/,":"+$t+"input-$1")]})),yo(Xr(n,{props:[Dt(o,/:(plac\w+)/,":"+gu+"$1")]})),yo(Xr(n,{props:[Dt(o,/:(plac\w+)/,ie+"input-$1")]})),yo(Xr(n,{props:[o]})),Pm(n,{props:Z0(e,s)});break}return""})}}var DC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},On={},Oo=typeof process<"u"&&On!==void 0&&(On.REACT_APP_SC_ATTR||On.SC_ATTR)||"data-styled",RA="active",IA="data-styled-version",Nf="6.1.18",bg=`/*!sc*/
`,Zh=typeof window<"u"&&typeof document<"u",OC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&On.REACT_APP_SC_DISABLE_SPEEDY!==""?On.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&On.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&On!==void 0&&On.SC_DISABLE_SPEEDY!==void 0&&On.SC_DISABLE_SPEEDY!==""&&On.SC_DISABLE_SPEEDY!=="false"&&On.SC_DISABLE_SPEEDY),xC={},kf=Object.freeze([]),xo=Object.freeze({});function CA(n,t,e){return e===void 0&&(e=xo),n.theme!==e.theme&&n.theme||t||e.theme}var DA=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),NC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kC=/(^-|-$)/g;function eE(n){return n.replace(NC,"-").replace(kC,"")}var MC=/(a)(d)/gi,Th=52,nE=function(n){return String.fromCharCode(n+(n>25?39:97))};function Um(n){var t,e="";for(t=Math.abs(n);t>Th;t=t/Th|0)e=nE(t%Th)+e;return(nE(t%Th)+e).replace(MC,"$1-$2")}var pm,OA=5381,Ao=function(n,t){for(var e=t.length;e;)n=33*n^t.charCodeAt(--e);return n},xA=function(n){return Ao(OA,n)};function NA(n){return Um(xA(n)>>>0)}function PC(n){return n.displayName||n.name||"Component"}function mm(n){return typeof n=="string"&&!0}var kA=typeof Symbol=="function"&&Symbol.for,MA=kA?Symbol.for("react.memo"):60115,VC=kA?Symbol.for("react.forward_ref"):60112,LC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},UC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},PA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zC=((pm={})[VC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},pm[MA]=PA,pm);function iE(n){return("type"in(t=n)&&t.type.$$typeof)===MA?PA:"$$typeof"in n?zC[n.$$typeof]:LC;var t}var BC=Object.defineProperty,jC=Object.getOwnPropertyNames,rE=Object.getOwnPropertySymbols,HC=Object.getOwnPropertyDescriptor,qC=Object.getPrototypeOf,sE=Object.prototype;function VA(n,t,e){if(typeof t!="string"){if(sE){var s=qC(t);s&&s!==sE&&VA(n,s,e)}var o=jC(t);rE&&(o=o.concat(rE(t)));for(var u=iE(n),h=iE(t),p=0;p<o.length;++p){var m=o[p];if(!(m in UC||e&&e[m]||h&&m in h||u&&m in u)){var g=HC(t,m);try{BC(n,m,g)}catch{}}}}return n}function No(n){return typeof n=="function"}function Rg(n){return typeof n=="object"&&"styledComponentId"in n}function ra(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function zm(n,t){if(n.length===0)return"";for(var e=n[0],s=1;s<n.length;s++)e+=n[s];return e}function Iu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Bm(n,t,e){if(e===void 0&&(e=!1),!e&&!Iu(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var s=0;s<t.length;s++)n[s]=Bm(n[s],t[s]);else if(Iu(t))for(var s in t)n[s]=Bm(n[s],t[s]);return n}function Ig(n,t){Object.defineProperty(n,"toString",{value:t})}function ju(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var FC=function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var e=0,s=0;s<t;s++)e+=this.groupSizes[s];return e},n.prototype.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var s=this.groupSizes,o=s.length,u=o;t>=u;)if((u<<=1)<0)throw ju(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=o;h<u;h++)this.groupSizes[h]=0}for(var p=this.indexOfGroup(t+1),m=(h=0,e.length);h<m;h++)this.tag.insertRule(p,e[h])&&(this.groupSizes[t]++,p++)},n.prototype.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],s=this.indexOfGroup(t),o=s+e;this.groupSizes[t]=0;for(var u=s;u<o;u++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(t){var e="";if(t>=this.length||this.groupSizes[t]===0)return e;for(var s=this.groupSizes[t],o=this.indexOfGroup(t),u=o+s,h=o;h<u;h++)e+="".concat(this.tag.getRule(h)).concat(bg);return e},n}(),Uh=new Map,Jh=new Map,zh=1,Ah=function(n){if(Uh.has(n))return Uh.get(n);for(;Jh.has(zh);)zh++;var t=zh++;return Uh.set(n,t),Jh.set(t,n),t},GC=function(n,t){zh=t+1,Uh.set(n,t),Jh.set(t,n)},$C="style[".concat(Oo,"][").concat(IA,'="').concat(Nf,'"]'),KC=new RegExp("^".concat(Oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),YC=function(n,t,e){for(var s,o=e.split(","),u=0,h=o.length;u<h;u++)(s=o[u])&&n.registerName(t,s)},QC=function(n,t){for(var e,s=((e=t.textContent)!==null&&e!==void 0?e:"").split(bg),o=[],u=0,h=s.length;u<h;u++){var p=s[u].trim();if(p){var m=p.match(KC);if(m){var g=0|parseInt(m[1],10),E=m[2];g!==0&&(GC(E,g),YC(n,E,m[3]),n.getTag().insertRules(g,o)),o.length=0}else o.push(p)}}},aE=function(n){for(var t=document.querySelectorAll($C),e=0,s=t.length;e<s;e++){var o=t[e];o&&o.getAttribute(Oo)!==RA&&(QC(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function XC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var LA=function(n){var t=document.head,e=n||t,s=document.createElement("style"),o=function(p){var m=Array.from(p.querySelectorAll("style[".concat(Oo,"]")));return m[m.length-1]}(e),u=o!==void 0?o.nextSibling:null;s.setAttribute(Oo,RA),s.setAttribute(IA,Nf);var h=XC();return h&&s.setAttribute("nonce",h),e.insertBefore(s,u),s},WC=function(){function n(t){this.element=LA(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var s=document.styleSheets,o=0,u=s.length;o<u;o++){var h=s[o];if(h.ownerNode===e)return h}throw ju(17)}(this.element),this.length=0}return n.prototype.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""},n}(),ZC=function(){function n(t){this.element=LA(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,e){if(t<=this.length&&t>=0){var s=document.createTextNode(e);return this.element.insertBefore(s,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n}(),JC=function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n}(),oE=Zh,tD={isServer:!Zh,useCSSOMInjection:!OC},tf=function(){function n(t,e,s){t===void 0&&(t=xo),e===void 0&&(e={});var o=this;this.options=on(on({},tD),t),this.gs=e,this.names=new Map(s),this.server=!!t.isServer,!this.server&&Zh&&oE&&(oE=!1,aE(this)),Ig(this,function(){return function(u){for(var h=u.getTag(),p=h.length,m="",g=function(A){var w=function(G){return Jh.get(G)}(A);if(w===void 0)return"continue";var I=u.names.get(w),x=h.getGroup(A);if(I===void 0||!I.size||x.length===0)return"continue";var q="".concat(Oo,".g").concat(A,'[id="').concat(w,'"]'),U="";I!==void 0&&I.forEach(function(G){G.length>0&&(U+="".concat(G,","))}),m+="".concat(x).concat(q,'{content:"').concat(U,'"}').concat(bg)},E=0;E<p;E++)g(E);return m}(o)})}return n.registerId=function(t){return Ah(t)},n.prototype.rehydrate=function(){!this.server&&Zh&&aE(this)},n.prototype.reconstructWithOptions=function(t,e){return e===void 0&&(e=!0),new n(on(on({},this.options),t),this.gs,e&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=function(e){var s=e.useCSSOMInjection,o=e.target;return e.isServer?new JC(o):s?new WC(o):new ZC(o)}(this.options),new FC(t)));var t},n.prototype.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},n.prototype.registerName=function(t,e){if(Ah(t),this.names.has(t))this.names.get(t).add(e);else{var s=new Set;s.add(e),this.names.set(t,s)}},n.prototype.insertRules=function(t,e,s){this.registerName(t,e),this.getTag().insertRules(Ah(t),s)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(Ah(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n}(),eD=/&/g,nD=/^\s*\/\/.*$/gm;function UA(n,t){return n.map(function(e){return e.type==="rule"&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(s){return"".concat(t," ").concat(s)})),Array.isArray(e.children)&&e.type!=="@keyframes"&&(e.children=UA(e.children,t)),e})}function iD(n){var t,e,s,o=xo,u=o.options,h=u===void 0?xo:u,p=o.plugins,m=p===void 0?kf:p,g=function(w,I,x){return x.startsWith(e)&&x.endsWith(e)&&x.replaceAll(e,"").length>0?".".concat(t):w},E=m.slice();E.push(function(w){w.type===Cf&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(eD,e).replace(s,g))}),h.prefix&&E.push(CC),E.push(bC);var A=function(w,I,x,q){I===void 0&&(I=""),x===void 0&&(x=""),q===void 0&&(q="&"),t=q,e=I,s=new RegExp("\\".concat(e,"\\b"),"g");var U=w.replace(nD,""),G=wC(x||I?"".concat(x," ").concat(I," { ").concat(U," }"):U);h.namespace&&(G=UA(G,h.namespace));var Z=[];return Wh(G,RC(E.concat(IC(function($){return Z.push($)})))),Z};return A.hash=m.length?m.reduce(function(w,I){return I.name||ju(15),Ao(w,I.name)},OA).toString():"",A}var rD=new tf,jm=iD(),zA=ri.createContext({shouldForwardProp:void 0,styleSheet:rD,stylis:jm});zA.Consumer;ri.createContext(void 0);function Hm(){return X.useContext(zA)}var sD=function(){function n(t,e){var s=this;this.inject=function(o,u){u===void 0&&(u=jm);var h=s.name+u.hash;o.hasNameForId(s.id,h)||o.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=e,Ig(this,function(){throw ju(12,String(s.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=jm),this.name+t.hash},n}(),aD=function(n){return n>="A"&&n<="Z"};function lE(n){for(var t="",e=0;e<n.length;e++){var s=n[e];if(e===1&&s==="-"&&n[0]==="-")return n;aD(s)?t+="-"+s.toLowerCase():t+=s}return t.startsWith("ms-")?"-"+t:t}var BA=function(n){return n==null||n===!1||n===""},jA=function(n){var t,e,s=[];for(var o in n){var u=n[o];n.hasOwnProperty(o)&&!BA(u)&&(Array.isArray(u)&&u.isCss||No(u)?s.push("".concat(lE(o),":"),u,";"):Iu(u)?s.push.apply(s,Ru(Ru(["".concat(o," {")],jA(u),!1),["}"],!1)):s.push("".concat(lE(o),": ").concat((t=o,(e=u)==null||typeof e=="boolean"||e===""?"":typeof e!="number"||e===0||t in DC||t.startsWith("--")?String(e).trim():"".concat(e,"px")),";")))}return s};function is(n,t,e,s){if(BA(n))return[];if(Rg(n))return[".".concat(n.styledComponentId)];if(No(n)){if(!No(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var o=n(t);return is(o,t,e,s)}var u;return n instanceof sD?e?(n.inject(e,s),[n.getName(s)]):[n]:Iu(n)?jA(n):Array.isArray(n)?Array.prototype.concat.apply(kf,n.map(function(h){return is(h,t,e,s)})):[n.toString()]}function HA(n){for(var t=0;t<n.length;t+=1){var e=n[t];if(No(e)&&!Rg(e))return!1}return!0}var oD=xA(Nf),lD=function(){function n(t,e,s){this.rules=t,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&HA(t),this.componentId=e,this.baseHash=Ao(oD,e),this.baseStyle=s,tf.registerId(e)}return n.prototype.generateAndInjectStyles=function(t,e,s){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,e,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&e.hasNameForId(this.componentId,this.staticRulesId))o=ra(o,this.staticRulesId);else{var u=zm(is(this.rules,t,e,s)),h=Um(Ao(this.baseHash,u)>>>0);if(!e.hasNameForId(this.componentId,h)){var p=s(u,".".concat(h),void 0,this.componentId);e.insertRules(this.componentId,h,p)}o=ra(o,h),this.staticRulesId=h}else{for(var m=Ao(this.baseHash,s.hash),g="",E=0;E<this.rules.length;E++){var A=this.rules[E];if(typeof A=="string")g+=A;else if(A){var w=zm(is(A,t,e,s));m=Ao(m,w+E),g+=w}}if(g){var I=Um(m>>>0);e.hasNameForId(this.componentId,I)||e.insertRules(this.componentId,I,s(g,".".concat(I),void 0,this.componentId)),o=ra(o,I)}}return o},n}(),Cg=ri.createContext(void 0);Cg.Consumer;var gm={};function uD(n,t,e){var s=Rg(n),o=n,u=!mm(n),h=t.attrs,p=h===void 0?kf:h,m=t.componentId,g=m===void 0?function(rt,at){var ct=typeof rt!="string"?"sc":eE(rt);gm[ct]=(gm[ct]||0)+1;var C="".concat(ct,"-").concat(NA(Nf+ct+gm[ct]));return at?"".concat(at,"-").concat(C):C}(t.displayName,t.parentComponentId):m,E=t.displayName,A=E===void 0?function(rt){return mm(rt)?"styled.".concat(rt):"Styled(".concat(PC(rt),")")}(n):E,w=t.displayName&&t.componentId?"".concat(eE(t.displayName),"-").concat(t.componentId):t.componentId||g,I=s&&o.attrs?o.attrs.concat(p).filter(Boolean):p,x=t.shouldForwardProp;if(s&&o.shouldForwardProp){var q=o.shouldForwardProp;if(t.shouldForwardProp){var U=t.shouldForwardProp;x=function(rt,at){return q(rt,at)&&U(rt,at)}}else x=q}var G=new lD(e,w,s?o.componentStyle:void 0);function Z(rt,at){return function(ct,C,b){var R=ct.attrs,k=ct.componentStyle,P=ct.defaultProps,L=ct.foldedComponentIds,O=ct.styledComponentId,Ie=ct.target,re=ri.useContext(Cg),Y=Hm(),ut=ct.shouldForwardProp||Y.shouldForwardProp,dt=CA(C,re,P)||xo,It=function(Rt,yt,le){for(var Ht,Ve=on(on({},yt),{className:void 0,theme:le}),kn=0;kn<Rt.length;kn+=1){var pn=No(Ht=Rt[kn])?Ht(Ve):Ht;for(var Je in pn)Ve[Je]=Je==="className"?ra(Ve[Je],pn[Je]):Je==="style"?on(on({},Ve[Je]),pn[Je]):pn[Je]}return yt.className&&(Ve.className=ra(Ve.className,yt.className)),Ve}(R,C,dt),N=It.as||Ie,et={};for(var ot in It)It[ot]===void 0||ot[0]==="$"||ot==="as"||ot==="theme"&&It.theme===dt||(ot==="forwardedAs"?et.as=It.forwardedAs:ut&&!ut(ot,N)||(et[ot]=It[ot]));var st=function(Rt,yt){var le=Hm(),Ht=Rt.generateAndInjectStyles(yt,le.styleSheet,le.stylis);return Ht}(k,It),pt=ra(L,O);return st&&(pt+=" "+st),It.className&&(pt+=" "+It.className),et[mm(N)&&!DA.has(N)?"class":"className"]=pt,b&&(et.ref=b),X.createElement(N,et)}($,rt,at)}Z.displayName=A;var $=ri.forwardRef(Z);return $.attrs=I,$.componentStyle=G,$.displayName=A,$.shouldForwardProp=x,$.foldedComponentIds=s?ra(o.foldedComponentIds,o.styledComponentId):"",$.styledComponentId=w,$.target=s?o.target:n,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(rt){this._foldedDefaultProps=s?function(at){for(var ct=[],C=1;C<arguments.length;C++)ct[C-1]=arguments[C];for(var b=0,R=ct;b<R.length;b++)Bm(at,R[b],!0);return at}({},o.defaultProps,rt):rt}}),Ig($,function(){return".".concat($.styledComponentId)}),u&&VA($,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function uE(n,t){for(var e=[n[0]],s=0,o=t.length;s<o;s+=1)e.push(t[s],n[s+1]);return e}var cE=function(n){return Object.assign(n,{isCss:!0})};function qA(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];if(No(n)||Iu(n))return cE(is(uE(kf,Ru([n],t,!0))));var s=n;return t.length===0&&s.length===1&&typeof s[0]=="string"?is(s):cE(is(uE(s,t)))}function qm(n,t,e){if(e===void 0&&(e=xo),!t)throw ju(1,t);var s=function(o){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return n(t,e,qA.apply(void 0,Ru([o],u,!1)))};return s.attrs=function(o){return qm(n,t,on(on({},e),{attrs:Array.prototype.concat(e.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return qm(n,t,on(on({},e),o))},s}var FA=function(n){return qm(uD,n)},Lt=FA;DA.forEach(function(n){Lt[n]=FA(n)});var cD=function(){function n(t,e){this.rules=t,this.componentId=e,this.isStatic=HA(t),tf.registerId(this.componentId+1)}return n.prototype.createStyles=function(t,e,s,o){var u=o(zm(is(this.rules,e,s,o)),""),h=this.componentId+t;s.insertRules(h,h,u)},n.prototype.removeStyles=function(t,e){e.clearRules(this.componentId+t)},n.prototype.renderStyles=function(t,e,s,o){t>2&&tf.registerId(this.componentId+t),this.removeStyles(t,s),this.createStyles(t,e,s,o)},n}();function hD(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];var s=qA.apply(void 0,Ru([n],t,!1)),o="sc-global-".concat(NA(JSON.stringify(s))),u=new cD(s,o),h=function(m){var g=Hm(),E=ri.useContext(Cg),A=ri.useRef(g.styleSheet.allocateGSInstance(o)).current;return g.styleSheet.server&&p(A,m,g.styleSheet,E,g.stylis),ri.useLayoutEffect(function(){if(!g.styleSheet.server)return p(A,m,g.styleSheet,E,g.stylis),function(){return u.removeStyles(A,g.styleSheet)}},[A,m,g.styleSheet,E,g.stylis]),null};function p(m,g,E,A,w){if(u.isStatic)u.renderStyles(m,xC,E,w);else{var I=on(on({},g),{theme:CA(g,A,h.defaultProps)});u.renderStyles(m,I,E,w)}}return ri.memo(h)}const fD=()=>{};var hE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?t[e++]=o:o<2048?(t[e++]=o>>6|192,t[e++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=o>>18|240,t[e++]=o>>12&63|128,t[e++]=o>>6&63|128,t[e++]=o&63|128):(t[e++]=o>>12|224,t[e++]=o>>6&63|128,t[e++]=o&63|128)}return t},dD=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const o=n[e++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=n[e++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=n[e++],h=n[e++],p=n[e++],m=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(m>>10)),t[s++]=String.fromCharCode(56320+(m&1023))}else{const u=n[e++],h=n[e++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return t.join("")},$A={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const u=n[o],h=o+1<n.length,p=h?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,E=u>>2,A=(u&3)<<4|p>>4;let w=(p&15)<<2|g>>6,I=g&63;m||(I=64,h||(w=64)),s.push(e[E],e[A],e[w],e[I])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(GA(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):dD(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const u=e[n.charAt(o++)],p=o<n.length?e[n.charAt(o)]:0;++o;const g=o<n.length?e[n.charAt(o)]:64;++o;const A=o<n.length?e[n.charAt(o)]:64;if(++o,u==null||p==null||g==null||A==null)throw new pD;const w=u<<2|p>>4;if(s.push(w),g!==64){const I=p<<4&240|g>>2;if(s.push(I),A!==64){const x=g<<6&192|A;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mD=function(n){const t=GA(n);return $A.encodeByteArray(t,!0)},ef=function(n){return mD(n).replace(/\./g,"")},KA=function(n){try{return $A.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=()=>gD().__FIREBASE_DEFAULTS__,_D=()=>{if(typeof process>"u"||typeof hE>"u")return;const n=hE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vD=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&KA(n[1]);return t&&JSON.parse(t)},Mf=()=>{try{return fD()||yD()||_D()||vD()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},YA=n=>{var t,e;return(e=(t=Mf())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},QA=n=>{const t=YA(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},XA=()=>{var n;return(n=Mf())===null||n===void 0?void 0:n.config},WA=n=>{var t;return(t=Mf())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n){return n.endsWith(".cloudworkstations.dev")}async function Dg(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",o=n.iat||0,u=n.sub||n.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ef(JSON.stringify(e)),ef(JSON.stringify(h)),""].join(".")}const yu={};function TD(){const n={prod:[],emulator:[]};for(const t of Object.keys(yu))yu[t]?n.emulator.push(t):n.prod.push(t);return n}function AD(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let fE=!1;function Og(n,t){if(typeof window>"u"||typeof document>"u"||!ga(window.location.host)||yu[n]===t||yu[n]||fE)return;yu[n]=t;function e(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=TD().prod.length>0;function h(){const w=document.getElementById(s);w&&w.remove()}function p(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,I){w.setAttribute("width","24"),w.setAttribute("id",I),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{fE=!0,h()},w}function E(w,I){w.setAttribute("id",I),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function A(){const w=AD(s),I=e("text"),x=document.getElementById(I)||document.createElement("span"),q=e("learnmore"),U=document.getElementById(q)||document.createElement("a"),G=e("preprendIcon"),Z=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const $=w.element;p($),E(U,q);const rt=g();m(Z,G),$.append(Z,x,U,rt),document.body.appendChild($)}u?(x.innerText="Preview backend disconnected.",Z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ln())}function SD(){var n;const t=(n=Mf())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function JA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function RD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ID(){const n=ln();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CD(){return!SD()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tw(){try{return typeof indexedDB=="object"}catch{return!1}}function ew(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(e){t(e)}})}function DD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="FirebaseError";class Wn extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=OD,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ya.prototype.create)}}class ya{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},o=`${this.service}/${t}`,u=this.errors[t],h=u?xD(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Wn(o,p,s)}}function xD(n,t){return n.replace(ND,(e,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const ND=/\{\$([^}]+)}/g;function kD(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function cs(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const o of e){if(!s.includes(o))return!1;const u=n[o],h=t[o];if(dE(u)&&dE(h)){if(!cs(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!e.includes(o))return!1;return!0}function dE(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function hu(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function fu(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function MD(n,t){const e=new PD(n,t);return e.subscribe.bind(e)}class PD{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let o;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");VD(t,["next","error","complete"])?o=t:o={next:t,error:e,complete:s},o.next===void 0&&(o.next=ym),o.error===void 0&&(o.error=ym),o.complete===void 0&&(o.complete=ym);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VD(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function ym(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=1e3,UD=2,zD=4*60*60*1e3,BD=.5;function pE(n,t=LD,e=UD){const s=t*Math.pow(e,n),o=Math.round(BD*s*(Math.random()-.5)*2);return Math.min(zD,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(n){return n&&n._delegate?n._delegate:n}class Xn{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new ED;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:e});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qD(t))try{this.getOrInitializeService({instanceIdentifier:ia})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(e);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=ia){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ia){return this.instances.has(t)}getOptions(t=ia){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(t,e){var s;const o=this.normalizeInstanceIdentifier(e),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&t(h,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const o of s)try{o(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:HD(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=ia){return this.component?this.component.multipleInstances?t:ia:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HD(n){return n===ia?void 0:n}function qD(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new jD(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pt||(Pt={}));const GD={debug:Pt.DEBUG,verbose:Pt.VERBOSE,info:Pt.INFO,warn:Pt.WARN,error:Pt.ERROR,silent:Pt.SILENT},$D=Pt.INFO,KD={[Pt.DEBUG]:"log",[Pt.VERBOSE]:"log",[Pt.INFO]:"info",[Pt.WARN]:"warn",[Pt.ERROR]:"error"},YD=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),o=KD[t];if(o)console[o](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Pf{constructor(t){this.name=t,this._logLevel=$D,this._logHandler=YD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Pt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?GD[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Pt.DEBUG,...t),this._logHandler(this,Pt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Pt.VERBOSE,...t),this._logHandler(this,Pt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Pt.INFO,...t),this._logHandler(this,Pt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Pt.WARN,...t),this._logHandler(this,Pt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Pt.ERROR,...t),this._logHandler(this,Pt.ERROR,...t)}}const QD=(n,t)=>t.some(e=>n instanceof e);let mE,gE;function XD(){return mE||(mE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WD(){return gE||(gE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nw=new WeakMap,Fm=new WeakMap,iw=new WeakMap,_m=new WeakMap,xg=new WeakMap;function ZD(n){const t=new Promise((e,s)=>{const o=()=>{n.removeEventListener("success",u),n.removeEventListener("error",h)},u=()=>{e(rs(n.result)),o()},h=()=>{s(n.error),o()};n.addEventListener("success",u),n.addEventListener("error",h)});return t.then(e=>{e instanceof IDBCursor&&nw.set(e,n)}).catch(()=>{}),xg.set(t,n),t}function JD(n){if(Fm.has(n))return;const t=new Promise((e,s)=>{const o=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",h),n.removeEventListener("abort",h)},u=()=>{e(),o()},h=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",u),n.addEventListener("error",h),n.addEventListener("abort",h)});Fm.set(n,t)}let Gm={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Fm.get(n);if(t==="objectStoreNames")return n.objectStoreNames||iw.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return rs(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function tO(n){Gm=n(Gm)}function eO(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(vm(this),t,...e);return iw.set(s,t.sort?t.sort():[t]),rs(s)}:WD().includes(n)?function(...t){return n.apply(vm(this),t),rs(nw.get(this))}:function(...t){return rs(n.apply(vm(this),t))}}function nO(n){return typeof n=="function"?eO(n):(n instanceof IDBTransaction&&JD(n),QD(n,XD())?new Proxy(n,Gm):n)}function rs(n){if(n instanceof IDBRequest)return ZD(n);if(_m.has(n))return _m.get(n);const t=nO(n);return t!==n&&(_m.set(n,t),xg.set(t,n)),t}const vm=n=>xg.get(n);function rw(n,t,{blocked:e,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(n,t),p=rs(h);return s&&h.addEventListener("upgradeneeded",m=>{s(rs(h.result),m.oldVersion,m.newVersion,rs(h.transaction),m)}),e&&h.addEventListener("blocked",m=>e(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const iO=["get","getKey","getAll","getAllKeys","count"],rO=["put","add","delete","clear"],Em=new Map;function yE(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Em.get(t))return Em.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,o=rO.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(o||iO.includes(e)))return;const u=async function(h,...p){const m=this.transaction(h,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[e](...p),o&&m.done]))[0]};return Em.set(t,u),u}tO(n=>({...n,get:(t,e,s)=>yE(t,e)||n.get(t,e,s),has:(t,e)=>!!yE(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(aO(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function aO(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $m="@firebase/app",_E="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Pf("@firebase/app"),oO="@firebase/app-compat",lO="@firebase/analytics-compat",uO="@firebase/analytics",cO="@firebase/app-check-compat",hO="@firebase/app-check",fO="@firebase/auth",dO="@firebase/auth-compat",pO="@firebase/database",mO="@firebase/data-connect",gO="@firebase/database-compat",yO="@firebase/functions",_O="@firebase/functions-compat",vO="@firebase/installations",EO="@firebase/installations-compat",TO="@firebase/messaging",AO="@firebase/messaging-compat",wO="@firebase/performance",SO="@firebase/performance-compat",bO="@firebase/remote-config",RO="@firebase/remote-config-compat",IO="@firebase/storage",CO="@firebase/storage-compat",DO="@firebase/firestore",OO="@firebase/ai",xO="@firebase/firestore-compat",NO="firebase",kO="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="[DEFAULT]",MO={[$m]:"fire-core",[oO]:"fire-core-compat",[uO]:"fire-analytics",[lO]:"fire-analytics-compat",[hO]:"fire-app-check",[cO]:"fire-app-check-compat",[fO]:"fire-auth",[dO]:"fire-auth-compat",[pO]:"fire-rtdb",[mO]:"fire-data-connect",[gO]:"fire-rtdb-compat",[yO]:"fire-fn",[_O]:"fire-fn-compat",[vO]:"fire-iid",[EO]:"fire-iid-compat",[TO]:"fire-fcm",[AO]:"fire-fcm-compat",[wO]:"fire-perf",[SO]:"fire-perf-compat",[bO]:"fire-rc",[RO]:"fire-rc-compat",[IO]:"fire-gcs",[CO]:"fire-gcs-compat",[DO]:"fire-fst",[xO]:"fire-fst-compat",[OO]:"fire-vertex","fire-js":"fire-js",[NO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=new Map,PO=new Map,Ym=new Map;function vE(n,t){try{n.container.addComponent(t)}catch(e){gr.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ci(n){const t=n.name;if(Ym.has(t))return gr.debug(`There were multiple attempts to register component ${t}.`),!1;Ym.set(t,n);for(const e of nf.values())vE(e,n);for(const e of PO.values())vE(e,n);return!0}function ys(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Kn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ss=new ya("app","Firebase",VO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(t,e,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ss.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=kO;function sw(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Km,automaticDataCollectionEnabled:!0},t),o=s.name;if(typeof o!="string"||!o)throw ss.create("bad-app-name",{appName:String(o)});if(e||(e=XA()),!e)throw ss.create("no-options");const u=nf.get(o);if(u){if(cs(e,u.options)&&cs(s,u.config))return u;throw ss.create("duplicate-app",{appName:o})}const h=new FD(o);for(const m of Ym.values())h.addComponent(m);const p=new LO(e,s,h);return nf.set(o,p),p}function Vf(n=Km){const t=nf.get(n);if(!t&&n===Km&&XA())return sw();if(!t)throw ss.create("no-app",{appName:n});return t}function vn(n,t,e){var s;let o=(s=MO[n])!==null&&s!==void 0?s:n;e&&(o+=`-${e}`);const u=o.match(/\s|\//),h=t.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${t}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gr.warn(p.join(" "));return}ci(new Xn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO="firebase-heartbeat-database",zO=1,Cu="firebase-heartbeat-store";let Tm=null;function aw(){return Tm||(Tm=rw(UO,zO,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Cu)}catch(e){console.warn(e)}}}}).catch(n=>{throw ss.create("idb-open",{originalErrorMessage:n.message})})),Tm}async function BO(n){try{const e=(await aw()).transaction(Cu),s=await e.objectStore(Cu).get(ow(n));return await e.done,s}catch(t){if(t instanceof Wn)gr.warn(t.message);else{const e=ss.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});gr.warn(e.message)}}}async function EE(n,t){try{const s=(await aw()).transaction(Cu,"readwrite");await s.objectStore(Cu).put(t,ow(n)),await s.done}catch(e){if(e instanceof Wn)gr.warn(e.message);else{const s=ss.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});gr.warn(s.message)}}}function ow(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jO=1024,HO=30;class qO{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new GO(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,e;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=TE();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>HO){const h=$O(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){gr.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=TE(),{heartbeatsToSend:s,unsentEntries:o}=FO(this._heartbeatsCache.heartbeats),u=ef(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=e,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(e){return gr.warn(e),""}}}function TE(){return new Date().toISOString().substring(0,10)}function FO(n,t=jO){const e=[];let s=n.slice();for(const o of n){const u=e.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),AE(e)>t){u.dates.pop();break}}else if(e.push({agent:o.agent,dates:[o.date]}),AE(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class GO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tw()?ew().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await BO(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return EE(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const o=await this.read();return EE(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function AE(n){return ef(JSON.stringify({version:2,heartbeats:n})).length}function $O(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(n){ci(new Xn("platform-logger",t=>new sO(t),"PRIVATE")),ci(new Xn("heartbeat",t=>new qO(t),"PRIVATE")),vn($m,_E,n),vn($m,_E,"esm2017"),vn("fire-js","")}KO("");var wE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as,lw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,b){function R(){}R.prototype=b.prototype,C.D=b.prototype,C.prototype=new R,C.prototype.constructor=C,C.C=function(k,P,L){for(var O=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)O[Ie-2]=arguments[Ie];return b.prototype[P].apply(k,O)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,e),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,b,R){R||(R=0);var k=Array(16);if(typeof b=="string")for(var P=0;16>P;++P)k[P]=b.charCodeAt(R++)|b.charCodeAt(R++)<<8|b.charCodeAt(R++)<<16|b.charCodeAt(R++)<<24;else for(P=0;16>P;++P)k[P]=b[R++]|b[R++]<<8|b[R++]<<16|b[R++]<<24;b=C.g[0],R=C.g[1],P=C.g[2];var L=C.g[3],O=b+(L^R&(P^L))+k[0]+3614090360&4294967295;b=R+(O<<7&4294967295|O>>>25),O=L+(P^b&(R^P))+k[1]+3905402710&4294967295,L=b+(O<<12&4294967295|O>>>20),O=P+(R^L&(b^R))+k[2]+606105819&4294967295,P=L+(O<<17&4294967295|O>>>15),O=R+(b^P&(L^b))+k[3]+3250441966&4294967295,R=P+(O<<22&4294967295|O>>>10),O=b+(L^R&(P^L))+k[4]+4118548399&4294967295,b=R+(O<<7&4294967295|O>>>25),O=L+(P^b&(R^P))+k[5]+1200080426&4294967295,L=b+(O<<12&4294967295|O>>>20),O=P+(R^L&(b^R))+k[6]+2821735955&4294967295,P=L+(O<<17&4294967295|O>>>15),O=R+(b^P&(L^b))+k[7]+4249261313&4294967295,R=P+(O<<22&4294967295|O>>>10),O=b+(L^R&(P^L))+k[8]+1770035416&4294967295,b=R+(O<<7&4294967295|O>>>25),O=L+(P^b&(R^P))+k[9]+2336552879&4294967295,L=b+(O<<12&4294967295|O>>>20),O=P+(R^L&(b^R))+k[10]+4294925233&4294967295,P=L+(O<<17&4294967295|O>>>15),O=R+(b^P&(L^b))+k[11]+2304563134&4294967295,R=P+(O<<22&4294967295|O>>>10),O=b+(L^R&(P^L))+k[12]+1804603682&4294967295,b=R+(O<<7&4294967295|O>>>25),O=L+(P^b&(R^P))+k[13]+4254626195&4294967295,L=b+(O<<12&4294967295|O>>>20),O=P+(R^L&(b^R))+k[14]+2792965006&4294967295,P=L+(O<<17&4294967295|O>>>15),O=R+(b^P&(L^b))+k[15]+1236535329&4294967295,R=P+(O<<22&4294967295|O>>>10),O=b+(P^L&(R^P))+k[1]+4129170786&4294967295,b=R+(O<<5&4294967295|O>>>27),O=L+(R^P&(b^R))+k[6]+3225465664&4294967295,L=b+(O<<9&4294967295|O>>>23),O=P+(b^R&(L^b))+k[11]+643717713&4294967295,P=L+(O<<14&4294967295|O>>>18),O=R+(L^b&(P^L))+k[0]+3921069994&4294967295,R=P+(O<<20&4294967295|O>>>12),O=b+(P^L&(R^P))+k[5]+3593408605&4294967295,b=R+(O<<5&4294967295|O>>>27),O=L+(R^P&(b^R))+k[10]+38016083&4294967295,L=b+(O<<9&4294967295|O>>>23),O=P+(b^R&(L^b))+k[15]+3634488961&4294967295,P=L+(O<<14&4294967295|O>>>18),O=R+(L^b&(P^L))+k[4]+3889429448&4294967295,R=P+(O<<20&4294967295|O>>>12),O=b+(P^L&(R^P))+k[9]+568446438&4294967295,b=R+(O<<5&4294967295|O>>>27),O=L+(R^P&(b^R))+k[14]+3275163606&4294967295,L=b+(O<<9&4294967295|O>>>23),O=P+(b^R&(L^b))+k[3]+4107603335&4294967295,P=L+(O<<14&4294967295|O>>>18),O=R+(L^b&(P^L))+k[8]+1163531501&4294967295,R=P+(O<<20&4294967295|O>>>12),O=b+(P^L&(R^P))+k[13]+2850285829&4294967295,b=R+(O<<5&4294967295|O>>>27),O=L+(R^P&(b^R))+k[2]+4243563512&4294967295,L=b+(O<<9&4294967295|O>>>23),O=P+(b^R&(L^b))+k[7]+1735328473&4294967295,P=L+(O<<14&4294967295|O>>>18),O=R+(L^b&(P^L))+k[12]+2368359562&4294967295,R=P+(O<<20&4294967295|O>>>12),O=b+(R^P^L)+k[5]+4294588738&4294967295,b=R+(O<<4&4294967295|O>>>28),O=L+(b^R^P)+k[8]+2272392833&4294967295,L=b+(O<<11&4294967295|O>>>21),O=P+(L^b^R)+k[11]+1839030562&4294967295,P=L+(O<<16&4294967295|O>>>16),O=R+(P^L^b)+k[14]+4259657740&4294967295,R=P+(O<<23&4294967295|O>>>9),O=b+(R^P^L)+k[1]+2763975236&4294967295,b=R+(O<<4&4294967295|O>>>28),O=L+(b^R^P)+k[4]+1272893353&4294967295,L=b+(O<<11&4294967295|O>>>21),O=P+(L^b^R)+k[7]+4139469664&4294967295,P=L+(O<<16&4294967295|O>>>16),O=R+(P^L^b)+k[10]+3200236656&4294967295,R=P+(O<<23&4294967295|O>>>9),O=b+(R^P^L)+k[13]+681279174&4294967295,b=R+(O<<4&4294967295|O>>>28),O=L+(b^R^P)+k[0]+3936430074&4294967295,L=b+(O<<11&4294967295|O>>>21),O=P+(L^b^R)+k[3]+3572445317&4294967295,P=L+(O<<16&4294967295|O>>>16),O=R+(P^L^b)+k[6]+76029189&4294967295,R=P+(O<<23&4294967295|O>>>9),O=b+(R^P^L)+k[9]+3654602809&4294967295,b=R+(O<<4&4294967295|O>>>28),O=L+(b^R^P)+k[12]+3873151461&4294967295,L=b+(O<<11&4294967295|O>>>21),O=P+(L^b^R)+k[15]+530742520&4294967295,P=L+(O<<16&4294967295|O>>>16),O=R+(P^L^b)+k[2]+3299628645&4294967295,R=P+(O<<23&4294967295|O>>>9),O=b+(P^(R|~L))+k[0]+4096336452&4294967295,b=R+(O<<6&4294967295|O>>>26),O=L+(R^(b|~P))+k[7]+1126891415&4294967295,L=b+(O<<10&4294967295|O>>>22),O=P+(b^(L|~R))+k[14]+2878612391&4294967295,P=L+(O<<15&4294967295|O>>>17),O=R+(L^(P|~b))+k[5]+4237533241&4294967295,R=P+(O<<21&4294967295|O>>>11),O=b+(P^(R|~L))+k[12]+1700485571&4294967295,b=R+(O<<6&4294967295|O>>>26),O=L+(R^(b|~P))+k[3]+2399980690&4294967295,L=b+(O<<10&4294967295|O>>>22),O=P+(b^(L|~R))+k[10]+4293915773&4294967295,P=L+(O<<15&4294967295|O>>>17),O=R+(L^(P|~b))+k[1]+2240044497&4294967295,R=P+(O<<21&4294967295|O>>>11),O=b+(P^(R|~L))+k[8]+1873313359&4294967295,b=R+(O<<6&4294967295|O>>>26),O=L+(R^(b|~P))+k[15]+4264355552&4294967295,L=b+(O<<10&4294967295|O>>>22),O=P+(b^(L|~R))+k[6]+2734768916&4294967295,P=L+(O<<15&4294967295|O>>>17),O=R+(L^(P|~b))+k[13]+1309151649&4294967295,R=P+(O<<21&4294967295|O>>>11),O=b+(P^(R|~L))+k[4]+4149444226&4294967295,b=R+(O<<6&4294967295|O>>>26),O=L+(R^(b|~P))+k[11]+3174756917&4294967295,L=b+(O<<10&4294967295|O>>>22),O=P+(b^(L|~R))+k[2]+718787259&4294967295,P=L+(O<<15&4294967295|O>>>17),O=R+(L^(P|~b))+k[9]+3951481745&4294967295,C.g[0]=C.g[0]+b&4294967295,C.g[1]=C.g[1]+(P+(O<<21&4294967295|O>>>11))&4294967295,C.g[2]=C.g[2]+P&4294967295,C.g[3]=C.g[3]+L&4294967295}s.prototype.u=function(C,b){b===void 0&&(b=C.length);for(var R=b-this.blockSize,k=this.B,P=this.h,L=0;L<b;){if(P==0)for(;L<=R;)o(this,C,L),L+=this.blockSize;if(typeof C=="string"){for(;L<b;)if(k[P++]=C.charCodeAt(L++),P==this.blockSize){o(this,k),P=0;break}}else for(;L<b;)if(k[P++]=C[L++],P==this.blockSize){o(this,k),P=0;break}}this.h=P,this.o+=b},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var b=1;b<C.length-8;++b)C[b]=0;var R=8*this.o;for(b=C.length-8;b<C.length;++b)C[b]=R&255,R/=256;for(this.u(C),C=Array(16),b=R=0;4>b;++b)for(var k=0;32>k;k+=8)C[R++]=this.g[b]>>>k&255;return C};function u(C,b){var R=p;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=b(C)}function h(C,b){this.h=b;for(var R=[],k=!0,P=C.length-1;0<=P;P--){var L=C[P]|0;k&&L==b||(R[P]=L,k=!1)}this.g=R}var p={};function m(C){return-128<=C&&128>C?u(C,function(b){return new h([b|0],0>b?-1:0)}):new h([C|0],0>C?-1:0)}function g(C){if(isNaN(C)||!isFinite(C))return A;if(0>C)return U(g(-C));for(var b=[],R=1,k=0;C>=R;k++)b[k]=C/R|0,R*=4294967296;return new h(b,0)}function E(C,b){if(C.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C.charAt(0)=="-")return U(E(C.substring(1),b));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(b,8)),k=A,P=0;P<C.length;P+=8){var L=Math.min(8,C.length-P),O=parseInt(C.substring(P,P+L),b);8>L?(L=g(Math.pow(b,L)),k=k.j(L).add(g(O))):(k=k.j(R),k=k.add(g(O)))}return k}var A=m(0),w=m(1),I=m(16777216);n=h.prototype,n.m=function(){if(q(this))return-U(this).m();for(var C=0,b=1,R=0;R<this.g.length;R++){var k=this.i(R);C+=(0<=k?k:4294967296+k)*b,b*=4294967296}return C},n.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(x(this))return"0";if(q(this))return"-"+U(this).toString(C);for(var b=g(Math.pow(C,6)),R=this,k="";;){var P=rt(R,b).g;R=G(R,P.j(b));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(C);if(R=P,x(R))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},n.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function x(C){if(C.h!=0)return!1;for(var b=0;b<C.g.length;b++)if(C.g[b]!=0)return!1;return!0}function q(C){return C.h==-1}n.l=function(C){return C=G(this,C),q(C)?-1:x(C)?0:1};function U(C){for(var b=C.g.length,R=[],k=0;k<b;k++)R[k]=~C.g[k];return new h(R,~C.h).add(w)}n.abs=function(){return q(this)?U(this):this},n.add=function(C){for(var b=Math.max(this.g.length,C.g.length),R=[],k=0,P=0;P<=b;P++){var L=k+(this.i(P)&65535)+(C.i(P)&65535),O=(L>>>16)+(this.i(P)>>>16)+(C.i(P)>>>16);k=O>>>16,L&=65535,O&=65535,R[P]=O<<16|L}return new h(R,R[R.length-1]&-2147483648?-1:0)};function G(C,b){return C.add(U(b))}n.j=function(C){if(x(this)||x(C))return A;if(q(this))return q(C)?U(this).j(U(C)):U(U(this).j(C));if(q(C))return U(this.j(U(C)));if(0>this.l(I)&&0>C.l(I))return g(this.m()*C.m());for(var b=this.g.length+C.g.length,R=[],k=0;k<2*b;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var P=0;P<C.g.length;P++){var L=this.i(k)>>>16,O=this.i(k)&65535,Ie=C.i(P)>>>16,re=C.i(P)&65535;R[2*k+2*P]+=O*re,Z(R,2*k+2*P),R[2*k+2*P+1]+=L*re,Z(R,2*k+2*P+1),R[2*k+2*P+1]+=O*Ie,Z(R,2*k+2*P+1),R[2*k+2*P+2]+=L*Ie,Z(R,2*k+2*P+2)}for(k=0;k<b;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=b;k<2*b;k++)R[k]=0;return new h(R,0)};function Z(C,b){for(;(C[b]&65535)!=C[b];)C[b+1]+=C[b]>>>16,C[b]&=65535,b++}function $(C,b){this.g=C,this.h=b}function rt(C,b){if(x(b))throw Error("division by zero");if(x(C))return new $(A,A);if(q(C))return b=rt(U(C),b),new $(U(b.g),U(b.h));if(q(b))return b=rt(C,U(b)),new $(U(b.g),b.h);if(30<C.g.length){if(q(C)||q(b))throw Error("slowDivide_ only works with positive integers.");for(var R=w,k=b;0>=k.l(C);)R=at(R),k=at(k);var P=ct(R,1),L=ct(k,1);for(k=ct(k,2),R=ct(R,2);!x(k);){var O=L.add(k);0>=O.l(C)&&(P=P.add(R),L=O),k=ct(k,1),R=ct(R,1)}return b=G(C,P.j(b)),new $(P,b)}for(P=A;0<=C.l(b);){for(R=Math.max(1,Math.floor(C.m()/b.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=g(R),O=L.j(b);q(O)||0<O.l(C);)R-=k,L=g(R),O=L.j(b);x(L)&&(L=w),P=P.add(L),C=G(C,O)}return new $(P,C)}n.A=function(C){return rt(this,C).h},n.and=function(C){for(var b=Math.max(this.g.length,C.g.length),R=[],k=0;k<b;k++)R[k]=this.i(k)&C.i(k);return new h(R,this.h&C.h)},n.or=function(C){for(var b=Math.max(this.g.length,C.g.length),R=[],k=0;k<b;k++)R[k]=this.i(k)|C.i(k);return new h(R,this.h|C.h)},n.xor=function(C){for(var b=Math.max(this.g.length,C.g.length),R=[],k=0;k<b;k++)R[k]=this.i(k)^C.i(k);return new h(R,this.h^C.h)};function at(C){for(var b=C.g.length+1,R=[],k=0;k<b;k++)R[k]=C.i(k)<<1|C.i(k-1)>>>31;return new h(R,C.h)}function ct(C,b){var R=b>>5;b%=32;for(var k=C.g.length-R,P=[],L=0;L<k;L++)P[L]=0<b?C.i(L+R)>>>b|C.i(L+R+1)<<32-b:C.i(L+R);return new h(P,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,lw=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=g,h.fromString=E,as=h}).apply(typeof wE<"u"?wE:typeof self<"u"?self:typeof window<"u"?window:{});var wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uw,du,cw,Bh,Qm,hw,fw,dw;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,y,_){return c==Array.prototype||c==Object.prototype||(c[y]=_.value),c};function e(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof wh=="object"&&wh];for(var y=0;y<c.length;++y){var _=c[y];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=e(this);function o(c,y){if(y)t:{var _=s;c=c.split(".");for(var S=0;S<c.length-1;S++){var z=c[S];if(!(z in _))break t;_=_[z]}c=c[c.length-1],S=_[c],y=y(S),y!=S&&y!=null&&t(_,c,{configurable:!0,writable:!0,value:y})}}function u(c,y){c instanceof String&&(c+="");var _=0,S=!1,z={next:function(){if(!S&&_<c.length){var K=_++;return{value:y(K,c[K]),done:!1}}return S=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}o("Array.prototype.values",function(c){return c||function(){return u(this,function(y,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function m(c){var y=typeof c;return y=y!="object"?y:c?Array.isArray(c)?"array":y:"null",y=="array"||y=="object"&&typeof c.length=="number"}function g(c){var y=typeof c;return y=="object"&&c!=null||y=="function"}function E(c,y,_){return c.call.apply(c.bind,arguments)}function A(c,y,_){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,S),c.apply(y,z)}}return function(){return c.apply(y,arguments)}}function w(c,y,_){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,w.apply(null,arguments)}function I(c,y){var _=Array.prototype.slice.call(arguments,1);return function(){var S=_.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function x(c,y){function _(){}_.prototype=y.prototype,c.aa=y.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(S,z,K){for(var lt=Array(arguments.length-2),Ut=2;Ut<arguments.length;Ut++)lt[Ut-2]=arguments[Ut];return y.prototype[z].apply(S,lt)}}function q(c){const y=c.length;if(0<y){const _=Array(y);for(let S=0;S<y;S++)_[S]=c[S];return _}return[]}function U(c,y){for(let _=1;_<arguments.length;_++){const S=arguments[_];if(m(S)){const z=c.length||0,K=S.length||0;c.length=z+K;for(let lt=0;lt<K;lt++)c[z+lt]=S[lt]}else c.push(S)}}class G{constructor(y,_){this.i=y,this.j=_,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function Z(c){return/^[\s\xa0]*$/.test(c)}function $(){var c=p.navigator;return c&&(c=c.userAgent)?c:""}function rt(c){return rt[" "](c),c}rt[" "]=function(){};var at=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ct(c,y,_){for(const S in c)y.call(_,c[S],S,c)}function C(c,y){for(const _ in c)y.call(void 0,c[_],_,c)}function b(c){const y={};for(const _ in c)y[_]=c[_];return y}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,y){let _,S;for(let z=1;z<arguments.length;z++){S=arguments[z];for(_ in S)c[_]=S[_];for(let K=0;K<R.length;K++)_=R[K],Object.prototype.hasOwnProperty.call(S,_)&&(c[_]=S[_])}}function P(c){var y=1;c=c.split(":");const _=[];for(;0<y&&c.length;)_.push(c.shift()),y--;return c.length&&_.push(c.join(":")),_}function L(c){p.setTimeout(()=>{throw c},0)}function O(){var c=It;let y=null;return c.g&&(y=c.g,c.g=c.g.next,c.g||(c.h=null),y.next=null),y}class Ie{constructor(){this.h=this.g=null}add(y,_){const S=re.get();S.set(y,_),this.h?this.h.next=S:this.g=S,this.h=S}}var re=new G(()=>new Y,c=>c.reset());class Y{constructor(){this.next=this.g=this.h=null}set(y,_){this.h=y,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ut,dt=!1,It=new Ie,N=()=>{const c=p.Promise.resolve(void 0);ut=()=>{c.then(et)}};var et=()=>{for(var c;c=O();){try{c.h.call(c.g)}catch(_){L(_)}var y=re;y.j(c),100>y.h&&(y.h++,c.next=y.g,y.g=c)}dt=!1};function ot(){this.s=this.s,this.C=this.C}ot.prototype.s=!1,ot.prototype.ma=function(){this.s||(this.s=!0,this.N())},ot.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(c,y){this.type=c,this.g=this.target=y,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var pt=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var c=!1,y=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};p.addEventListener("test",_,y),p.removeEventListener("test",_,y)}catch{}return c}();function Rt(c,y){if(st.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=y,y=c.relatedTarget){if(at){t:{try{rt(y.nodeName);var z=!0;break t}catch{}z=!1}z||(y=null)}}else _=="mouseover"?y=c.fromElement:_=="mouseout"&&(y=c.toElement);this.relatedTarget=y,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:yt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Rt.aa.h.call(this)}}x(Rt,st);var yt={2:"touch",3:"pen",4:"mouse"};Rt.prototype.h=function(){Rt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var le="closure_listenable_"+(1e6*Math.random()|0),Ht=0;function Ve(c,y,_,S,z){this.listener=c,this.proxy=null,this.src=y,this.type=_,this.capture=!!S,this.ha=z,this.key=++Ht,this.da=this.fa=!1}function kn(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function pn(c){this.src=c,this.g={},this.h=0}pn.prototype.add=function(c,y,_,S,z){var K=c.toString();c=this.g[K],c||(c=this.g[K]=[],this.h++);var lt=vs(c,y,S,z);return-1<lt?(y=c[lt],_||(y.fa=!1)):(y=new Ve(y,this.src,K,!!S,z),y.fa=_,c.push(y)),y};function Je(c,y){var _=y.type;if(_ in c.g){var S=c.g[_],z=Array.prototype.indexOf.call(S,y,void 0),K;(K=0<=z)&&Array.prototype.splice.call(S,z,1),K&&(kn(y),c.g[_].length==0&&(delete c.g[_],c.h--))}}function vs(c,y,_,S){for(var z=0;z<c.length;++z){var K=c[z];if(!K.da&&K.listener==y&&K.capture==!!_&&K.ha==S)return z}return-1}var Es="closure_lm_"+(1e6*Math.random()|0),Wo={};function Xu(c,y,_,S,z){if(Array.isArray(y)){for(var K=0;K<y.length;K++)Xu(c,y[K],_,S,z);return null}return _=Wu(_),c&&c[le]?c.K(y,_,g(S)?!!S.capture:!1,z):Mn(c,y,_,!1,S,z)}function Mn(c,y,_,S,z,K){if(!y)throw Error("Invalid event type");var lt=g(z)?!!z.capture:!!z,Ut=ba(c);if(Ut||(c[Es]=Ut=new pn(c)),_=Ut.add(y,_,S,lt,K),_.proxy)return _;if(S=sd(),_.proxy=S,S.src=c,S.listener=_,c.addEventListener)pt||(z=lt),z===void 0&&(z=!1),c.addEventListener(y.toString(),S,z);else if(c.attachEvent)c.attachEvent(Ts(y.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return _}function sd(){function c(_){return y.call(c.src,c.listener,_)}const y=ad;return c}function Zo(c,y,_,S,z){if(Array.isArray(y))for(var K=0;K<y.length;K++)Zo(c,y[K],_,S,z);else S=g(S)?!!S.capture:!!S,_=Wu(_),c&&c[le]?(c=c.i,y=String(y).toString(),y in c.g&&(K=c.g[y],_=vs(K,_,S,z),-1<_&&(kn(K[_]),Array.prototype.splice.call(K,_,1),K.length==0&&(delete c.g[y],c.h--)))):c&&(c=ba(c))&&(y=c.g[y.toString()],c=-1,y&&(c=vs(y,_,S,z)),(_=-1<c?y[c]:null)&&Sa(_))}function Sa(c){if(typeof c!="number"&&c&&!c.da){var y=c.src;if(y&&y[le])Je(y.i,c);else{var _=c.type,S=c.proxy;y.removeEventListener?y.removeEventListener(_,S,c.capture):y.detachEvent?y.detachEvent(Ts(_),S):y.addListener&&y.removeListener&&y.removeListener(S),(_=ba(y))?(Je(_,c),_.h==0&&(_.src=null,y[Es]=null)):kn(c)}}}function Ts(c){return c in Wo?Wo[c]:Wo[c]="on"+c}function ad(c,y){if(c.da)c=!0;else{y=new Rt(y,this);var _=c.listener,S=c.ha||c.src;c.fa&&Sa(c),c=_.call(S,y)}return c}function ba(c){return c=c[Es],c instanceof pn?c:null}var Jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wu(c){return typeof c=="function"?c:(c[Jo]||(c[Jo]=function(y){return c.handleEvent(y)}),c[Jo])}function fe(){ot.call(this),this.i=new pn(this),this.M=this,this.F=null}x(fe,ot),fe.prototype[le]=!0,fe.prototype.removeEventListener=function(c,y,_,S){Zo(this,c,y,_,S)};function Yt(c,y){var _,S=c.F;if(S)for(_=[];S;S=S.F)_.push(S);if(c=c.M,S=y.type||y,typeof y=="string")y=new st(y,c);else if(y instanceof st)y.target=y.target||c;else{var z=y;y=new st(S,c),k(y,z)}if(z=!0,_)for(var K=_.length-1;0<=K;K--){var lt=y.g=_[K];z=Tn(lt,S,!0,y)&&z}if(lt=y.g=c,z=Tn(lt,S,!0,y)&&z,z=Tn(lt,S,!1,y)&&z,_)for(K=0;K<_.length;K++)lt=y.g=_[K],z=Tn(lt,S,!1,y)&&z}fe.prototype.N=function(){if(fe.aa.N.call(this),this.i){var c=this.i,y;for(y in c.g){for(var _=c.g[y],S=0;S<_.length;S++)kn(_[S]);delete c.g[y],c.h--}}this.F=null},fe.prototype.K=function(c,y,_,S){return this.i.add(String(c),y,!1,_,S)},fe.prototype.L=function(c,y,_,S){return this.i.add(String(c),y,!0,_,S)};function Tn(c,y,_,S){if(y=c.i.g[String(y)],!y)return!0;y=y.concat();for(var z=!0,K=0;K<y.length;++K){var lt=y[K];if(lt&&!lt.da&&lt.capture==_){var Ut=lt.listener,De=lt.ha||lt.src;lt.fa&&Je(c.i,lt),z=Ut.call(De,S)!==!1&&z}}return z&&!S.defaultPrevented}function tn(c,y,_){if(typeof c=="function")_&&(c=w(c,_));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:p.setTimeout(c,y||0)}function Zu(c){c.g=tn(()=>{c.g=null,c.i&&(c.i=!1,Zu(c))},c.l);const y=c.h;c.h=null,c.m.apply(null,y)}class od extends ot{constructor(y,_){super(),this.m=y,this.l=_,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:Zu(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function As(c){ot.call(this),this.h=c,this.g={}}x(As,ot);var ws=[];function Ss(c){ct(c.g,function(y,_){this.g.hasOwnProperty(_)&&Sa(y)},c),c.g={}}As.prototype.N=function(){As.aa.N.call(this),Ss(this)},As.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zn=p.JSON.stringify,Ra=p.JSON.parse,bs=class{stringify(c){return p.JSON.stringify(c,void 0)}parse(c){return p.JSON.parse(c,void 0)}};function tl(){}tl.prototype.h=null;function el(c){return c.h||(c.h=c.i())}function nl(){}var Bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ji(){st.call(this,"d")}x(ji,st);function il(){st.call(this,"c")}x(il,st);var fi={},rl=null;function Tr(){return rl=rl||new fe}fi.La="serverreachability";function Ia(c){st.call(this,fi.La,c)}x(Ia,st);function Ar(c){const y=Tr();Yt(y,new Ia(y))}fi.STAT_EVENT="statevent";function Ju(c,y){st.call(this,fi.STAT_EVENT,c),this.stat=y}x(Ju,st);function se(c){const y=Tr();Yt(y,new Ju(y,c))}fi.Ma="timingevent";function Ce(c,y){st.call(this,fi.Ma,c),this.size=y}x(Ce,st);function Te(c,y){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){c()},y)}function Pn(){this.g=!0}Pn.prototype.xa=function(){this.g=!1};function sl(c,y,_,S,z,K){c.info(function(){if(c.g)if(K)for(var lt="",Ut=K.split("&"),De=0;De<Ut.length;De++){var zt=Ut[De].split("=");if(1<zt.length){var Ue=zt[0];zt=zt[1];var Oe=Ue.split("_");lt=2<=Oe.length&&Oe[1]=="type"?lt+(Ue+"="+zt+"&"):lt+(Ue+"=redacted&")}}else lt=null;else lt=K;return"XMLHTTP REQ ("+S+") [attempt "+z+"]: "+y+`
`+_+`
`+lt})}function ld(c,y,_,S,z,K,lt){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+z+"]: "+y+`
`+_+`
`+K+" "+lt})}function wr(c,y,_,S){c.info(function(){return"XMLHTTP TEXT ("+y+"): "+Rs(c,_)+(S?" "+S:"")})}function tc(c,y){c.info(function(){return"TIMEOUT: "+y})}Pn.prototype.info=function(){};function Rs(c,y){if(!c.g)return y;if(!y)return null;try{var _=JSON.parse(y);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var S=_[c];if(!(2>S.length)){var z=S[1];if(Array.isArray(z)&&!(1>z.length)){var K=z[0];if(K!="noop"&&K!="stop"&&K!="close")for(var lt=1;lt<z.length;lt++)z[lt]=""}}}}return Zn(_)}catch{return y}}var Sr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Hi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},di;function pi(){}x(pi,tl),pi.prototype.g=function(){return new XMLHttpRequest},pi.prototype.i=function(){return{}},di=new pi;function un(c,y,_,S){this.j=c,this.i=y,this.l=_,this.R=S||1,this.U=new As(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ye}function ye(){this.i=null,this.g="",this.h=!1}var al={},Ca={};function Jn(c,y,_){c.L=1,c.v=xs(An(y)),c.m=_,c.P=!0,qi(c,null)}function qi(c,y){c.F=Date.now(),Is(c),c.A=An(c.v);var _=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),fl(_.i,"t",S),c.C=0,_=c.j.J,c.h=new ye,c.g=gc(c.j,_?y:null,!c.m),0<c.O&&(c.M=new od(w(c.Y,c,c.g),c.O)),y=c.U,_=c.g,S=c.ca;var z="readystatechange";Array.isArray(z)||(z&&(ws[0]=z.toString()),z=ws);for(var K=0;K<z.length;K++){var lt=Xu(_,z[K],S||y.handleEvent,!1,y.h||y);if(!lt)break;y.g[lt.key]=lt}y=c.H?b(c.H):{},c.m?(c.u||(c.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,y)):(c.u="GET",c.g.ea(c.A,c.u,null,y)),Ar(),sl(c.i,c.u,c.A,c.l,c.R,c.m)}un.prototype.ca=function(c){c=c.target;const y=this.M;y&&zn(c)==3?y.j():this.Y(c)},un.prototype.Y=function(c){try{if(c==this.g)t:{const Oe=zn(this.g);var y=this.g.Ba();const Wi=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||lc(this.g)))){this.J||Oe!=4||y==7||(y==8||0>=Wi?Ar(3):Ar(2)),br(this);var _=this.g.Z();this.X=_;e:if(ec(this)){var S=lc(this.g);c="";var z=S.length,K=zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ge(this),mi(this);var lt="";break e}this.h.i=new p.TextDecoder}for(y=0;y<z;y++)this.h.h=!0,c+=this.h.i.decode(S[y],{stream:!(K&&y==z-1)});S.length=0,this.h.g+=c,this.C=0,lt=this.h.g}else lt=this.g.oa();if(this.o=_==200,ld(this.i,this.u,this.A,this.l,this.R,Oe,_),this.o){if(this.T&&!this.K){e:{if(this.g){var Ut,De=this.g;if((Ut=De.g?De.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(Ut)){var zt=Ut;break e}}zt=null}if(_=zt)wr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cs(this,_);else{this.o=!1,this.s=3,se(12),Ge(this),mi(this);break t}}if(this.P){_=!0;let $e;for(;!this.J&&this.C<lt.length;)if($e=nc(this,lt),$e==Ca){Oe==4&&(this.s=4,se(14),_=!1),wr(this.i,this.l,null,"[Incomplete Response]");break}else if($e==al){this.s=4,se(15),wr(this.i,this.l,lt,"[Invalid Chunk]"),_=!1;break}else wr(this.i,this.l,$e,null),Cs(this,$e);if(ec(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||lt.length!=0||this.h.h||(this.s=1,se(16),_=!1),this.o=this.o&&_,!_)wr(this.i,this.l,lt,"[Invalid Chunked Response]"),Ge(this),mi(this);else if(0<lt.length&&!this.W){this.W=!0;var Ue=this.j;Ue.g==this&&Ue.ba&&!Ue.M&&(Ue.j.info("Great, no buffering proxy detected. Bytes received: "+lt.length),zs(Ue),Ue.M=!0,se(11))}}else wr(this.i,this.l,lt,null),Cs(this,lt);Oe==4&&Ge(this),this.o&&!this.J&&(Oe==4?dc(this.j,this):(this.o=!1,Is(this)))}else dd(this.g),_==400&&0<lt.indexOf("Unknown SID")?(this.s=3,se(12)):(this.s=0,se(13)),Ge(this),mi(this)}}}catch{}finally{}};function ec(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function nc(c,y){var _=c.C,S=y.indexOf(`
`,_);return S==-1?Ca:(_=Number(y.substring(_,S)),isNaN(_)?al:(S+=1,S+_>y.length?Ca:(y=y.slice(S,S+_),c.C=S+_,y)))}un.prototype.cancel=function(){this.J=!0,Ge(this)};function Is(c){c.S=Date.now()+c.I,ic(c,c.I)}function ic(c,y){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Te(w(c.ba,c),y)}function br(c){c.B&&(p.clearTimeout(c.B),c.B=null)}un.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(tc(this.i,this.A),this.L!=2&&(Ar(),se(17)),Ge(this),this.s=2,mi(this)):ic(this,this.S-c)};function mi(c){c.j.G==0||c.J||dc(c.j,c)}function Ge(c){br(c);var y=c.M;y&&typeof y.ma=="function"&&y.ma(),c.M=null,Ss(c.U),c.g&&(y=c.g,c.g=null,y.abort(),y.ma())}function Cs(c,y){try{var _=c.j;if(_.G!=0&&(_.g==c||ol(_.h,c))){if(!c.K&&ol(_.h,c)&&_.G==3){try{var S=_.Da.g.parse(y)}catch{S=null}if(Array.isArray(S)&&S.length==3){var z=S;if(z[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)Ba(_),Ua(_);else break t;yl(_),se(18)}}else _.za=z[1],0<_.za-_.T&&37500>z[2]&&_.F&&_.v==0&&!_.C&&(_.C=Te(w(_.Za,_),6e3));if(1>=Oa(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Xi(_,11)}else if((c.K||_.g==c)&&Ba(_),!Z(y))for(z=_.Da.g.parse(y),y=0;y<z.length;y++){let zt=z[y];if(_.T=zt[0],zt=zt[1],_.G==2)if(zt[0]=="c"){_.K=zt[1],_.ia=zt[2];const Ue=zt[3];Ue!=null&&(_.la=Ue,_.j.info("VER="+_.la));const Oe=zt[4];Oe!=null&&(_.Aa=Oe,_.j.info("SVER="+_.Aa));const Wi=zt[5];Wi!=null&&typeof Wi=="number"&&0<Wi&&(S=1.5*Wi,_.L=S,_.j.info("backChannelRequestTimeoutMs_="+S)),S=_;const $e=c.g;if($e){const Ai=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var K=S.h;K.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(xa(K,K.h),K.h=null))}if(S.D){const vl=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;vl&&(S.ya=vl,Wt(S.I,S.D,vl))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),S=_;var lt=c;if(S.qa=mc(S,S.J?S.ia:null,S.W),lt.K){cn(S.h,lt);var Ut=lt,De=S.L;De&&(Ut.I=De),Ut.B&&(br(Ut),Is(Ut)),S.g=lt}else hc(S);0<_.i.length&&za(_)}else zt[0]!="stop"&&zt[0]!="close"||Xi(_,7);else _.G==3&&(zt[0]=="stop"||zt[0]=="close"?zt[0]=="stop"?Xi(_,7):ml(_):zt[0]!="noop"&&_.l&&_.l.ta(zt),_.v=0)}}Ar(4)}catch{}}var rc=class{constructor(c,y){this.g=c,this.map=y}};function Fi(c){this.l=c||10,p.PerformanceNavigationTiming?(c=p.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Da(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Oa(c){return c.h?1:c.g?c.g.size:0}function ol(c,y){return c.h?c.h==y:c.g?c.g.has(y):!1}function xa(c,y){c.g?c.g.add(y):c.h=y}function cn(c,y){c.h&&c.h==y?c.h=null:c.g&&c.g.has(y)&&c.g.delete(y)}Fi.prototype.cancel=function(){if(this.i=ll(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ll(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let y=c.i;for(const _ of c.g.values())y=y.concat(_.D);return y}return q(c.i)}function ud(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(m(c)){for(var y=[],_=c.length,S=0;S<_;S++)y.push(c[S]);return y}y=[],_=0;for(S in c)y[_++]=c[S];return y}function Na(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(m(c)||typeof c=="string"){var y=[];c=c.length;for(var _=0;_<c;_++)y.push(_);return y}y=[],_=0;for(const S in c)y[_++]=S;return y}}}function ul(c,y){if(c.forEach&&typeof c.forEach=="function")c.forEach(y,void 0);else if(m(c)||typeof c=="string")Array.prototype.forEach.call(c,y,void 0);else for(var _=Na(c),S=ud(c),z=S.length,K=0;K<z;K++)y.call(void 0,S[K],_&&_[K],c)}var Ds=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cd(c,y){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var S=c[_].indexOf("="),z=null;if(0<=S){var K=c[_].substring(0,S);z=c[_].substring(S+1)}else K=c[_];y(K,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Ae(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Ae){this.h=c.h,Os(this,c.j),this.o=c.o,this.g=c.g,Rr(this,c.s),this.l=c.l;var y=c.i,_=new $i;_.i=y.i,y.g&&(_.g=new Map(y.g),_.h=y.h),Gi(this,_),this.m=c.m}else c&&(y=String(c).match(Ds))?(this.h=!1,Os(this,y[1]||"",!0),this.o=Vn(y[2]||""),this.g=Vn(y[3]||"",!0),Rr(this,y[4]),this.l=Vn(y[5]||"",!0),Gi(this,y[6]||"",!0),this.m=Vn(y[7]||"")):(this.h=!1,this.i=new $i(null,this.h))}Ae.prototype.toString=function(){var c=[],y=this.j;y&&c.push(Ns(y,cl,!0),":");var _=this.g;return(_||y=="file")&&(c.push("//"),(y=this.o)&&c.push(Ns(y,cl,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(Ns(_,_.charAt(0)=="/"?hd:hl,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",Ns(_,ka)),c.join("")};function An(c){return new Ae(c)}function Os(c,y,_){c.j=_?Vn(y,!0):y,c.j&&(c.j=c.j.replace(/:$/,""))}function Rr(c,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);c.s=y}else c.s=null}function Gi(c,y,_){y instanceof $i?(c.i=y,ac(c.i,c.h)):(_||(y=Ns(y,fd)),c.i=new $i(y,c.h))}function Wt(c,y,_){c.i.set(y,_)}function xs(c){return Wt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Vn(c,y){return c?y?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Ns(c,y,_){return typeof c=="string"?(c=encodeURI(c).replace(y,sc),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function sc(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var cl=/[#\/\?@]/g,hl=/[#\?:]/g,hd=/[#\?]/g,fd=/[#\?@]/g,ka=/#/g;function $i(c,y){this.h=this.g=null,this.i=c||null,this.j=!!y}function Ln(c){c.g||(c.g=new Map,c.h=0,c.i&&cd(c.i,function(y,_){c.add(decodeURIComponent(y.replace(/\+/g," ")),_)}))}n=$i.prototype,n.add=function(c,y){Ln(this),this.i=null,c=gi(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(y),this.h+=1,this};function Ki(c,y){Ln(c),y=gi(c,y),c.g.has(y)&&(c.i=null,c.h-=c.g.get(y).length,c.g.delete(y))}function Yi(c,y){return Ln(c),y=gi(c,y),c.g.has(y)}n.forEach=function(c,y){Ln(this),this.g.forEach(function(_,S){_.forEach(function(z){c.call(y,z,S,this)},this)},this)},n.na=function(){Ln(this);const c=Array.from(this.g.values()),y=Array.from(this.g.keys()),_=[];for(let S=0;S<y.length;S++){const z=c[S];for(let K=0;K<z.length;K++)_.push(y[S])}return _},n.V=function(c){Ln(this);let y=[];if(typeof c=="string")Yi(this,c)&&(y=y.concat(this.g.get(gi(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)y=y.concat(c[_])}return y},n.set=function(c,y){return Ln(this),this.i=null,c=gi(this,c),Yi(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[y]),this.h+=1,this},n.get=function(c,y){return c?(c=this.V(c),0<c.length?String(c[0]):y):y};function fl(c,y,_){Ki(c,y),0<_.length&&(c.i=null,c.g.set(gi(c,y),q(_)),c.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],y=Array.from(this.g.keys());for(var _=0;_<y.length;_++){var S=y[_];const K=encodeURIComponent(String(S)),lt=this.V(S);for(S=0;S<lt.length;S++){var z=K;lt[S]!==""&&(z+="="+encodeURIComponent(String(lt[S]))),c.push(z)}}return this.i=c.join("&")};function gi(c,y){return y=String(y),c.j&&(y=y.toLowerCase()),y}function ac(c,y){y&&!c.j&&(Ln(c),c.i=null,c.g.forEach(function(_,S){var z=S.toLowerCase();S!=z&&(Ki(this,S),fl(this,z,_))},c)),c.j=y}function ks(c,y){const _=new Pn;if(p.Image){const S=new Image;S.onload=I(Un,_,"TestLoadImage: loaded",!0,y,S),S.onerror=I(Un,_,"TestLoadImage: error",!1,y,S),S.onabort=I(Un,_,"TestLoadImage: abort",!1,y,S),S.ontimeout=I(Un,_,"TestLoadImage: timeout",!1,y,S),p.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else y(!1)}function ti(c,y){const _=new Pn,S=new AbortController,z=setTimeout(()=>{S.abort(),Un(_,"TestPingServer: timeout",!1,y)},1e4);fetch(c,{signal:S.signal}).then(K=>{clearTimeout(z),K.ok?Un(_,"TestPingServer: ok",!0,y):Un(_,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(z),Un(_,"TestPingServer: error",!1,y)})}function Un(c,y,_,S,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),S(_)}catch{}}function Ms(){this.g=new bs}function yi(c,y,_){const S=_||"";try{ul(c,function(z,K){let lt=z;g(z)&&(lt=Zn(z)),y.push(S+K+"="+encodeURIComponent(lt))})}catch(z){throw y.push(S+"type="+encodeURIComponent("_badmap")),z}}function Ir(c){this.l=c.Ub||null,this.j=c.eb||!1}x(Ir,tl),Ir.prototype.g=function(){return new Qi(this.l,this.j)},Ir.prototype.i=function(c){return function(){return c}}({});function Qi(c,y){fe.call(this),this.D=c,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Qi,fe),n=Qi.prototype,n.open=function(c,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=y,this.readyState=1,vi(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(y.body=c),(this.D||p).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dl(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function dl(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var y=c.value?c.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!c.done}))&&(this.response=this.responseText+=y)}c.done?_i(this):vi(this),this.readyState==3&&dl(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,_i(this))},n.Qa=function(c){this.g&&(this.response=c,_i(this))},n.ga=function(){this.g&&_i(this)};function _i(c){c.readyState=4,c.l=null,c.j=null,c.v=null,vi(c)}n.setRequestHeader=function(c,y){this.u.append(c,y)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],y=this.h.entries();for(var _=y.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=y.next();return c.join(`\r
`)};function vi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function pl(c){let y="";return ct(c,function(_,S){y+=S,y+=":",y+=_,y+=`\r
`}),y}function Le(c,y,_){t:{for(S in _){var S=!1;break t}S=!0}S||(_=pl(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Wt(c,y,_))}function Gt(c){fe.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Gt,fe);var Ma=/^https?$/i,Ps=["POST","PUT"];n=Gt.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,y,_,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);y=y?y.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():di.g(),this.v=this.o?el(this.o):el(di),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(c),!0),this.B=!1}catch(K){oc(this,K);return}if(c=_||"",_=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var z in S)_.set(z,S[z]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const K of S.keys())_.set(K,S.get(K));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(_.keys()).find(K=>K.toLowerCase()=="content-type"),z=p.FormData&&c instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Ps,y,void 0))||S||z||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,lt]of _)this.g.setRequestHeader(K,lt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vs(this),this.u=!0,this.g.send(c),this.u=!1}catch(K){oc(this,K)}};function oc(c,y){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=y,c.m=5,Pa(c),Ei(c)}function Pa(c){c.A||(c.A=!0,Yt(c,"complete"),Yt(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Yt(this,"complete"),Yt(this,"abort"),Ei(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),Gt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Va(this):this.bb())},n.bb=function(){Va(this)};function Va(c){if(c.h&&typeof h<"u"&&(!c.v[1]||zn(c)!=4||c.Z()!=2)){if(c.u&&zn(c)==4)tn(c.Ea,0,c);else if(Yt(c,"readystatechange"),zn(c)==4){c.h=!1;try{const lt=c.Z();t:switch(lt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break t;default:y=!1}var _;if(!(_=y)){var S;if(S=lt===0){var z=String(c.D).match(Ds)[1]||null;!z&&p.self&&p.self.location&&(z=p.self.location.protocol.slice(0,-1)),S=!Ma.test(z?z.toLowerCase():"")}_=S}if(_)Yt(c,"complete"),Yt(c,"success");else{c.m=6;try{var K=2<zn(c)?c.g.statusText:""}catch{K=""}c.l=K+" ["+c.Z()+"]",Pa(c)}}finally{Ei(c)}}}}function Ei(c,y){if(c.g){Vs(c);const _=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,y||Yt(c,"ready");try{_.onreadystatechange=S}catch{}}}function Vs(c){c.I&&(p.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function zn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<zn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var y=this.g.responseText;return c&&y.indexOf(c)==0&&(y=y.substring(c.length)),Ra(y)}};function lc(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function dd(c){const y={};c=(c.g&&2<=zn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(Z(c[S]))continue;var _=P(c[S]);const z=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const K=y[z]||[];y[z]=K,K.push(_)}C(y,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(c,y,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||y}function La(c){this.Aa=0,this.i=[],this.j=new Pn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,c),this.cb=Ls("retryDelaySeedMs",1e4,c),this.Wa=Ls("forwardChannelMaxRetries",2,c),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Fi(c&&c.concurrentRequestLimit),this.Da=new Ms,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=La.prototype,n.la=8,n.G=1,n.connect=function(c,y,_,S){se(0),this.W=c,this.H=y||{},_&&S!==void 0&&(this.H.OSID=_,this.H.OAID=S),this.F=this.X,this.I=mc(this,null,this.W),za(this)};function ml(c){if(uc(c),c.G==3){var y=c.U++,_=An(c.I);if(Wt(_,"SID",c.K),Wt(_,"RID",y),Wt(_,"TYPE","terminate"),Us(c,_),y=new un(c,c.j,y),y.L=2,y.v=xs(An(_)),_=!1,p.navigator&&p.navigator.sendBeacon)try{_=p.navigator.sendBeacon(y.v.toString(),"")}catch{}!_&&p.Image&&(new Image().src=y.v,_=!0),_||(y.g=gc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Is(y)}pc(c)}function Ua(c){c.g&&(zs(c),c.g.cancel(),c.g=null)}function uc(c){Ua(c),c.u&&(p.clearTimeout(c.u),c.u=null),Ba(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&p.clearTimeout(c.s),c.s=null)}function za(c){if(!Da(c.h)&&!c.s){c.s=!0;var y=c.Ga;ut||N(),dt||(ut(),dt=!0),It.add(y,c),c.B=0}}function pd(c,y){return Oa(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=y.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Te(w(c.Ga,c,y),_l(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const z=new un(this,this.j,c);let K=this.o;if(this.S&&(K?(K=b(K),k(K,this.S)):K=this.S),this.m!==null||this.O||(z.H=K,K=null),this.P)t:{for(var y=0,_=0;_<this.i.length;_++){e:{var S=this.i[_];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break e}S=void 0}if(S===void 0)break;if(y+=S,4096<y){y=_;break t}if(y===4096||_===this.i.length-1){y=_+1;break t}}y=1e3}else y=1e3;y=cc(this,z,y),_=An(this.I),Wt(_,"RID",c),Wt(_,"CVER",22),this.D&&Wt(_,"X-HTTP-Session-Id",this.D),Us(this,_),K&&(this.O?y="headers="+encodeURIComponent(String(pl(K)))+"&"+y:this.m&&Le(_,this.m,K)),xa(this.h,z),this.Ua&&Wt(_,"TYPE","init"),this.P?(Wt(_,"$req",y),Wt(_,"SID","null"),z.T=!0,Jn(z,_,null)):Jn(z,_,y),this.G=2}}else this.G==3&&(c?gl(this,c):this.i.length==0||Da(this.h)||gl(this))};function gl(c,y){var _;y?_=y.l:_=c.U++;const S=An(c.I);Wt(S,"SID",c.K),Wt(S,"RID",_),Wt(S,"AID",c.T),Us(c,S),c.m&&c.o&&Le(S,c.m,c.o),_=new un(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),y&&(c.i=y.D.concat(c.i)),y=cc(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),xa(c.h,_),Jn(_,S,y)}function Us(c,y){c.H&&ct(c.H,function(_,S){Wt(y,S,_)}),c.l&&ul({},function(_,S){Wt(y,S,_)})}function cc(c,y,_){_=Math.min(c.i.length,_);var S=c.l?w(c.l.Na,c.l,c):null;t:{var z=c.i;let K=-1;for(;;){const lt=["count="+_];K==-1?0<_?(K=z[0].g,lt.push("ofs="+K)):K=0:lt.push("ofs="+K);let Ut=!0;for(let De=0;De<_;De++){let zt=z[De].g;const Ue=z[De].map;if(zt-=K,0>zt)K=Math.max(0,z[De].g-100),Ut=!1;else try{yi(Ue,lt,"req"+zt+"_")}catch{S&&S(Ue)}}if(Ut){S=lt.join("&");break t}}}return c=c.i.splice(0,_),y.D=c,S}function hc(c){if(!c.g&&!c.u){c.Y=1;var y=c.Fa;ut||N(),dt||(ut(),dt=!0),It.add(y,c),c.v=0}}function yl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Te(w(c.Fa,c),_l(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,fc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Te(w(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,se(10),Ua(this),fc(this))};function zs(c){c.A!=null&&(p.clearTimeout(c.A),c.A=null)}function fc(c){c.g=new un(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var y=An(c.qa);Wt(y,"RID","rpc"),Wt(y,"SID",c.K),Wt(y,"AID",c.T),Wt(y,"CI",c.F?"0":"1"),!c.F&&c.ja&&Wt(y,"TO",c.ja),Wt(y,"TYPE","xmlhttp"),Us(c,y),c.m&&c.o&&Le(y,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=xs(An(y)),_.m=null,_.P=!0,qi(_,c)}n.Za=function(){this.C!=null&&(this.C=null,Ua(this),yl(this),se(19))};function Ba(c){c.C!=null&&(p.clearTimeout(c.C),c.C=null)}function dc(c,y){var _=null;if(c.g==y){Ba(c),zs(c),c.g=null;var S=2}else if(ol(c.h,y))_=y.D,cn(c.h,y),S=1;else return;if(c.G!=0){if(y.o)if(S==1){_=y.m?y.m.length:0,y=Date.now()-y.F;var z=c.B;S=Tr(),Yt(S,new Ce(S,_)),za(c)}else hc(c);else if(z=y.s,z==3||z==0&&0<y.X||!(S==1&&pd(c,y)||S==2&&yl(c)))switch(_&&0<_.length&&(y=c.h,y.i=y.i.concat(_)),z){case 1:Xi(c,5);break;case 4:Xi(c,10);break;case 3:Xi(c,6);break;default:Xi(c,2)}}}function _l(c,y){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*y}function Xi(c,y){if(c.j.info("Error code "+y),y==2){var _=w(c.fb,c),S=c.Xa;const z=!S;S=new Ae(S||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Os(S,"https"),xs(S),z?ks(S.toString(),_):ti(S.toString(),_)}else se(2);c.G=0,c.l&&c.l.sa(y),pc(c),uc(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),se(2)):(this.j.info("Failed to ping google.com"),se(1))};function pc(c){if(c.G=0,c.ka=[],c.l){const y=ll(c.h);(y.length!=0||c.i.length!=0)&&(U(c.ka,y),U(c.ka,c.i),c.h.i.length=0,q(c.i),c.i.length=0),c.l.ra()}}function mc(c,y,_){var S=_ instanceof Ae?An(_):new Ae(_);if(S.g!="")y&&(S.g=y+"."+S.g),Rr(S,S.s);else{var z=p.location;S=z.protocol,y=y?y+"."+z.hostname:z.hostname,z=+z.port;var K=new Ae(null);S&&Os(K,S),y&&(K.g=y),z&&Rr(K,z),_&&(K.l=_),S=K}return _=c.D,y=c.ya,_&&y&&Wt(S,_,y),Wt(S,"VER",c.la),Us(c,S),S}function gc(c,y,_){if(y&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=c.Ca&&!c.pa?new Gt(new Ir({eb:_})):new Gt(c.pa),y.Ha(c.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function yc(){}n=yc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ja(){}ja.prototype.g=function(c,y){return new hn(c,y)};function hn(c,y){fe.call(this),this.g=new La(y),this.l=c,this.h=y&&y.messageUrlParams||null,c=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(c?c["X-WebChannel-Content-Type"]=y.messageContentType:c={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(c?c["X-WebChannel-Client-Profile"]=y.va:c={"X-WebChannel-Client-Profile":y.va}),this.g.S=c,(c=y&&y.Sb)&&!Z(c)&&(this.g.m=c),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!Z(y)&&(this.g.D=y,c=this.h,c!==null&&y in c&&(c=this.h,y in c&&delete c[y])),this.j=new Ti(this)}x(hn,fe),hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){ml(this.g)},hn.prototype.o=function(c){var y=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Zn(c),c=_);y.i.push(new rc(y.Ya++,c)),y.G==3&&za(y)},hn.prototype.N=function(){this.g.l=null,delete this.j,ml(this.g),delete this.g,hn.aa.N.call(this)};function _c(c){ji.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var y=c.__sm__;if(y){t:{for(const _ in y){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,y=y!==null&&c in y?y[c]:void 0),this.data=y}else this.data=c}x(_c,ji);function vc(){il.call(this),this.status=1}x(vc,il);function Ti(c){this.g=c}x(Ti,yc),Ti.prototype.ua=function(){Yt(this.g,"a")},Ti.prototype.ta=function(c){Yt(this.g,new _c(c))},Ti.prototype.sa=function(c){Yt(this.g,new vc)},Ti.prototype.ra=function(){Yt(this.g,"b")},ja.prototype.createWebChannel=ja.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,dw=function(){return new ja},fw=function(){return Tr()},hw=fi,Qm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sr.NO_ERROR=0,Sr.TIMEOUT=8,Sr.HTTP_ERROR=6,Bh=Sr,Hi.COMPLETE="complete",cw=Hi,nl.EventType=Bi,Bi.OPEN="a",Bi.CLOSE="b",Bi.ERROR="c",Bi.MESSAGE="d",fe.prototype.listen=fe.prototype.K,du=nl,Gt.prototype.listenOnce=Gt.prototype.L,Gt.prototype.getLastError=Gt.prototype.Ka,Gt.prototype.getLastErrorCode=Gt.prototype.Ba,Gt.prototype.getStatus=Gt.prototype.Z,Gt.prototype.getResponseJson=Gt.prototype.Oa,Gt.prototype.getResponseText=Gt.prototype.oa,Gt.prototype.send=Gt.prototype.ea,Gt.prototype.setWithCredentials=Gt.prototype.Ha,uw=Gt}).apply(typeof wh<"u"?wh:typeof self<"u"?self:typeof window<"u"?window:{});const SE="@firebase/firestore",bE="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}sn.UNAUTHENTICATED=new sn(null),sn.GOOGLE_CREDENTIALS=new sn("google-credentials-uid"),sn.FIRST_PARTY=new sn("first-party-uid"),sn.MOCK_USER=new sn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Pf("@firebase/firestore");function _o(){return ua.logLevel}function ht(n,...t){if(ua.logLevel<=Pt.DEBUG){const e=t.map(Ng);ua.debug(`Firestore (${Go}): ${n}`,...e)}}function yr(n,...t){if(ua.logLevel<=Pt.ERROR){const e=t.map(Ng);ua.error(`Firestore (${Go}): ${n}`,...e)}}function ko(n,...t){if(ua.logLevel<=Pt.WARN){const e=t.map(Ng);ua.warn(`Firestore (${Go}): ${n}`,...e)}}function Ng(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n,t,e){let s="Unexpected state";typeof t=="string"?s=t:e=t,pw(n,s,e)}function pw(n,t,e){let s=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{s+=" CONTEXT: "+JSON.stringify(e)}catch{s+=" CONTEXT: "+e}throw yr(s),new Error(s)}function Kt(n,t,e,s){let o="Unexpected state";typeof e=="string"?o=e:s=e,n||pw(t,o,s)}function bt(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class gt extends Wn{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class YO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(sn.UNAUTHENTICATED))}shutdown(){}}class QO{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class XO{constructor(t){this.t=t,this.currentUser=sn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Kt(this.o===void 0,42304);let s=this.i;const o=m=>this.i!==s?(s=this.i,e(m)):Promise.resolve();let u=new os;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new os,t.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=u;t.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},p=m=>{ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):(ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new os)}},0),h()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Kt(typeof s.accessToken=="string",31837,{l:s}),new mw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Kt(t===null||typeof t=="string",2055,{h:t}),new sn(t)}}class WO{constructor(t,e,s){this.P=t,this.T=e,this.I=s,this.type="FirstParty",this.user=sn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ZO{constructor(t,e,s){this.P=t,this.T=e,this.I=s}getToken(){return Promise.resolve(new WO(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(sn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RE{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JO{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Kt(this.o===void 0,3512);const s=u=>{u.error!=null&&ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ht("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?e(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new RE(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Kt(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new RE(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tx(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=tx(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<e&&(s+=t.charAt(o[u]%62))}return s}}function xt(n,t){return n<t?-1:n>t?1:0}function Xm(n,t){let e=0;for(;e<n.length&&e<t.length;){const s=n.codePointAt(e),o=t.codePointAt(e);if(s!==o){if(s<128&&o<128)return xt(s,o);{const u=gw(),h=ex(u.encode(IE(n,e)),u.encode(IE(t,e)));return h!==0?h:xt(s,o)}}e+=s>65535?2:1}return xt(n.length,t.length)}function IE(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function ex(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return xt(n[e],t[e]);return xt(n.length,t.length)}function Mo(n,t,e){return n.length===t.length&&n.every((s,o)=>e(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=-62135596800,DE=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(t){return Me.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor((t-1e3*e)*DE);return new Me(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new gt(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new gt(it.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<CE)throw new gt(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new gt(it.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/DE}_compareTo(t){return this.seconds===t.seconds?xt(this.nanoseconds,t.nanoseconds):xt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-CE;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{static fromTimestamp(t){return new St(t)}static min(){return new St(new Me(0,0))}static max(){return new St(new Me(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="__name__";class Ci{constructor(t,e,s){e===void 0?e=0:e>t.length&&At(637,{offset:e,range:t.length}),s===void 0?s=t.length-e:s>t.length-e&&At(1746,{length:s,range:t.length-e}),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Ci.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ci?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let o=0;o<s;o++){const u=Ci.compareSegments(t.get(o),e.get(o));if(u!==0)return u}return xt(t.length,e.length)}static compareSegments(t,e){const s=Ci.isNumericId(t),o=Ci.isNumericId(e);return s&&!o?-1:!s&&o?1:s&&o?Ci.extractNumericId(t).compare(Ci.extractNumericId(e)):Xm(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return as.fromString(t.substring(4,t.length-2))}}class oe extends Ci{construct(t,e,s){return new oe(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new gt(it.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(o=>o.length>0))}return new oe(e)}static emptyPath(){return new oe([])}}const nx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends Ci{construct(t,e,s){return new We(t,e,s)}static isValidIdentifier(t){return nx.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===OE}static keyField(){return new We([OE])}static fromServerFormat(t){const e=[];let s="",o=0;const u=()=>{if(s.length===0)throw new gt(it.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let h=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new gt(it.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const m=t[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new gt(it.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=m,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new gt(it.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new We(e)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.path=t}static fromPath(t){return new _t(oe.fromString(t))}static fromName(t){return new _t(oe.fromString(t).popFirst(5))}static empty(){return new _t(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&oe.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return oe.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _t(new oe(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=-1;function ix(n,t){const e=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=St.fromTimestamp(s===1e9?new Me(e+1,0):new Me(e,s));return new hs(o,_t.empty(),t)}function rx(n){return new hs(n.readTime,n.key,Du)}class hs{constructor(t,e,s){this.readTime=t,this.documentKey=e,this.largestBatchId=s}static min(){return new hs(St.min(),_t.empty(),Du)}static max(){return new hs(St.max(),_t.empty(),Du)}}function sx(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=_t.comparator(n.documentKey,t.documentKey),e!==0?e:xt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ox{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(n){if(n.code!==it.FAILED_PRECONDITION||n.message!==ax)throw n;ht("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&At(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new tt((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(e,u).next(s,o)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof tt?e:tt.resolve(e)}catch(e){return tt.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):tt.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):tt.reject(e)}static resolve(t){return new tt((e,s)=>{e(t)})}static reject(t){return new tt((e,s)=>{s(t)})}static waitFor(t){return new tt((e,s)=>{let o=0,u=0,h=!1;t.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&e()},m=>s(m))}),h=!0,u===o&&e()})}static or(t){let e=tt.resolve(!1);for(const s of t)e=e.next(o=>o?tt.resolve(o):s());return e}static forEach(t,e){const s=[];return t.forEach((o,u)=>{s.push(e.call(this,o,u))}),this.waitFor(s)}static mapArray(t,e){return new tt((s,o)=>{const u=t.length,h=new Array(u);let p=0;for(let m=0;m<u;m++){const g=m;e(t[g]).next(E=>{h[g]=E,++p,p===u&&s(h)},E=>o(E))}})}static doWhile(t,e){return new tt((s,o)=>{const u=()=>{t()===!0?e().next(()=>{u()},o):s()};u()})}}function lx(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ko(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>e.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}Lf.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=-1;function Uf(n){return n==null}function rf(n){return n===0&&1/n==-1/0}function ux(n){return typeof n=="number"&&Number.isInteger(n)&&!rf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w="";function cx(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=xE(t)),t=hx(n.get(e),t);return xE(t)}function hx(n,t){let e=t;const s=n.length;for(let o=0;o<s;o++){const u=n.charAt(o);switch(u){case"\0":e+="";break;case _w:e+="";break;default:e+=u}}return e}function xE(n){return n+_w+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function va(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function vw(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.comparator=t,this.root=e||Xe.EMPTY}insert(t,e){return new he(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new he(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const s=this.comparator(t,e.key);if(s===0)return e.value;s<0?e=e.left:s>0&&(e=e.right)}return null}indexOf(t){let e=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return e+s.left.size;o<0?s=s.left:(e+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,s)=>(t(e,s),!1))}toString(){const t=[];return this.inorderTraversal((e,s)=>(t.push(`${e}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sh(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sh(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sh(this.root,t,this.comparator,!0)}}class Sh{constructor(t,e,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=e?s(t.key,e):1,e&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,e,s,o,u){this.key=t,this.value=e,this.color=s??Xe.RED,this.left=o??Xe.EMPTY,this.right=u??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,s,o,u){return new Xe(t??this.key,e??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,e,s),null):u===0?o.copy(null,e,null,null,null):o.copy(null,null,null,null,o.right.insert(t,e,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let s,o=this;if(e(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,e),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),e(t,o.key)===0){if(o.right.isEmpty())return Xe.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,e))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw At(43730,{key:this.key,value:this.value});if(this.right.isRed())throw At(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw At(27949);return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw At(57766)}get value(){throw At(16141)}get color(){throw At(16727)}get left(){throw At(29726)}get right(){throw At(36894)}copy(t,e,s,o,u){return this}insert(t,e,s){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.comparator=t,this.data=new he(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,s)=>(t(e),!1))}forEachInRange(t,e){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;e(o.key)}}forEachWhile(t,e){let s;for(s=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new kE(this.data.getIterator())}getIteratorFrom(t){return new kE(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(s=>{e=e.add(s)}),e}isEqual(t){if(!(t instanceof Pe)||this.size!==t.size)return!1;const e=this.data.getIterator(),s=t.data.getIterator();for(;e.hasNext();){const o=e.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Pe(this.comparator);return e.data=t,e}}class kE{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t){this.fields=t,t.sort(We.comparator)}static empty(){return new si([])}unionWith(t){let e=new Pe(We.comparator);for(const s of this.fields)e=e.add(s);for(const s of t)e=e.add(s);return new si(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Mo(this.fields,t.fields,(e,s)=>e.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Ew("Invalid base64 string: "+u):u}}(t);return new Ze(e)}static fromUint8Array(t){const e=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(t);return new Ze(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let o=0;o<e.length;o++)s[o]=e.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return xt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const fx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fs(n){if(Kt(!!n,39018),typeof n=="string"){let t=0;const e=fx.exec(n);if(Kt(!!e,46558,{timestamp:n}),e[1]){let o=e[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ds(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="server_timestamp",Aw="__type__",ww="__previous_value__",Sw="__local_write_time__";function Mg(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Aw])===null||e===void 0?void 0:e.stringValue)===Tw}function zf(n){const t=n.mapValue.fields[ww];return Mg(t)?zf(t):t}function Ou(n){const t=fs(n.mapValue.fields[Sw].timestampValue);return new Me(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(t,e,s,o,u,h,p,m,g,E){this.databaseId=t,this.appId=e,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=E}}const sf="(default)";class xu{constructor(t,e){this.projectId=t,this.database=e||sf}static empty(){return new xu("","")}get isDefaultDatabase(){return this.database===sf}isEqual(t){return t instanceof xu&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="__type__",px="__max__",bh={mapValue:{}},Rw="__vector__",af="value";function ps(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mg(n)?4:gx(n)?9007199254740991:mx(n)?10:11:At(28295,{value:n})}function Li(n,t){if(n===t)return!0;const e=ps(n);if(e!==ps(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ou(n).isEqual(Ou(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=fs(o.timestampValue),p=fs(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(o,u){return ds(o.bytesValue).isEqual(ds(u.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(o,u){return Ee(o.geoPointValue.latitude)===Ee(u.geoPointValue.latitude)&&Ee(o.geoPointValue.longitude)===Ee(u.geoPointValue.longitude)}(n,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Ee(o.integerValue)===Ee(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Ee(o.doubleValue),p=Ee(u.doubleValue);return h===p?rf(h)===rf(p):isNaN(h)&&isNaN(p)}return!1}(n,t);case 9:return Mo(n.arrayValue.values||[],t.arrayValue.values||[],Li);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(NE(h)!==NE(p))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(p[m]===void 0||!Li(h[m],p[m])))return!1;return!0}(n,t);default:return At(52216,{left:n})}}function Nu(n,t){return(n.values||[]).find(e=>Li(e,t))!==void 0}function Po(n,t){if(n===t)return 0;const e=ps(n),s=ps(t);if(e!==s)return xt(e,s);switch(e){case 0:case 9007199254740991:return 0;case 1:return xt(n.booleanValue,t.booleanValue);case 2:return function(u,h){const p=Ee(u.integerValue||u.doubleValue),m=Ee(h.integerValue||h.doubleValue);return p<m?-1:p>m?1:p===m?0:isNaN(p)?isNaN(m)?0:-1:1}(n,t);case 3:return ME(n.timestampValue,t.timestampValue);case 4:return ME(Ou(n),Ou(t));case 5:return Xm(n.stringValue,t.stringValue);case 6:return function(u,h){const p=ds(u),m=ds(h);return p.compareTo(m)}(n.bytesValue,t.bytesValue);case 7:return function(u,h){const p=u.split("/"),m=h.split("/");for(let g=0;g<p.length&&g<m.length;g++){const E=xt(p[g],m[g]);if(E!==0)return E}return xt(p.length,m.length)}(n.referenceValue,t.referenceValue);case 8:return function(u,h){const p=xt(Ee(u.latitude),Ee(h.latitude));return p!==0?p:xt(Ee(u.longitude),Ee(h.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return PE(n.arrayValue,t.arrayValue);case 10:return function(u,h){var p,m,g,E;const A=u.fields||{},w=h.fields||{},I=(p=A[af])===null||p===void 0?void 0:p.arrayValue,x=(m=w[af])===null||m===void 0?void 0:m.arrayValue,q=xt(((g=I==null?void 0:I.values)===null||g===void 0?void 0:g.length)||0,((E=x==null?void 0:x.values)===null||E===void 0?void 0:E.length)||0);return q!==0?q:PE(I,x)}(n.mapValue,t.mapValue);case 11:return function(u,h){if(u===bh.mapValue&&h===bh.mapValue)return 0;if(u===bh.mapValue)return 1;if(h===bh.mapValue)return-1;const p=u.fields||{},m=Object.keys(p),g=h.fields||{},E=Object.keys(g);m.sort(),E.sort();for(let A=0;A<m.length&&A<E.length;++A){const w=Xm(m[A],E[A]);if(w!==0)return w;const I=Po(p[m[A]],g[E[A]]);if(I!==0)return I}return xt(m.length,E.length)}(n.mapValue,t.mapValue);default:throw At(23264,{Pe:e})}}function ME(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return xt(n,t);const e=fs(n),s=fs(t),o=xt(e.seconds,s.seconds);return o!==0?o:xt(e.nanos,s.nanos)}function PE(n,t){const e=n.values||[],s=t.values||[];for(let o=0;o<e.length&&o<s.length;++o){const u=Po(e[o],s[o]);if(u)return u}return xt(e.length,s.length)}function Vo(n){return Wm(n)}function Wm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const s=fs(e);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ds(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return _t.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let s="[",o=!0;for(const u of e.values||[])o?o=!1:s+=",",s+=Wm(u);return s+"]"}(n.arrayValue):"mapValue"in n?function(e){const s=Object.keys(e.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Wm(e.fields[h])}`;return o+"}"}(n.mapValue):At(61005,{value:n})}function jh(n){switch(ps(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=zf(n);return t?16+jh(t):16;case 5:return 2*n.stringValue.length;case 6:return ds(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+jh(u),0)}(n.arrayValue);case 10:case 11:return function(s){let o=0;return va(s.fields,(u,h)=>{o+=u.length+jh(h)}),o}(n.mapValue);default:throw At(13486,{value:n})}}function Zm(n){return!!n&&"integerValue"in n}function Pg(n){return!!n&&"arrayValue"in n}function VE(n){return!!n&&"nullValue"in n}function LE(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hh(n){return!!n&&"mapValue"in n}function mx(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[bw])===null||e===void 0?void 0:e.stringValue)===Rw}function _u(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return va(n.mapValue.fields,(e,s)=>t.mapValue.fields[e]=_u(s)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=_u(n.arrayValue.values[e]);return t}return Object.assign({},n)}function gx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===px}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t){this.value=t}static empty(){return new Yn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let s=0;s<t.length-1;++s)if(e=(e.mapValue.fields||{})[t.get(s)],!Hh(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_u(e)}setAll(t){let e=We.emptyPath(),s={},o=[];t.forEach((h,p)=>{if(!e.isImmediateParentOf(p)){const m=this.getFieldsMap(e);this.applyChanges(m,s,o),s={},o=[],e=p.popLast()}h?s[p.lastSegment()]=_u(h):o.push(p.lastSegment())});const u=this.getFieldsMap(e);this.applyChanges(u,s,o)}delete(t){const e=this.field(t.popLast());Hh(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Li(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=e.mapValue.fields[t.get(s)];Hh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},e.mapValue.fields[t.get(s)]=o),e=o}return e.mapValue.fields}applyChanges(t,e,s){va(e,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new Yn(_u(this.value))}}function Iw(n){const t=[];return va(n.fields,(e,s)=>{const o=new We([e]);if(Hh(s)){const u=Iw(s.mapValue).fields;if(u.length===0)t.push(o);else for(const h of u)t.push(o.child(h))}else t.push(o)}),new si(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t,e,s,o,u,h,p){this.key=t,this.documentType=e,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(t){return new an(t,0,St.min(),St.min(),St.min(),Yn.empty(),0)}static newFoundDocument(t,e,s,o){return new an(t,1,e,St.min(),s,o,0)}static newNoDocument(t,e){return new an(t,2,e,St.min(),St.min(),Yn.empty(),0)}static newUnknownDocument(t,e){return new an(t,3,e,St.min(),St.min(),Yn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(St.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Yn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=St.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof an&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,e){this.position=t,this.inclusive=e}}function UE(n,t,e){let s=0;for(let o=0;o<n.position.length;o++){const u=t[o],h=n.position[o];if(u.field.isKeyField()?s=_t.comparator(_t.fromName(h.referenceValue),e.key):s=Po(h,e.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function zE(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Li(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,e="asc"){this.field=t,this.dir=e}}function yx(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{}class ke extends Cw{constructor(t,e,s){super(),this.field=t,this.op=e,this.value=s}static create(t,e,s){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,s):new vx(t,e,s):e==="array-contains"?new Ax(t,s):e==="in"?new wx(t,s):e==="not-in"?new Sx(t,s):e==="array-contains-any"?new bx(t,s):new ke(t,e,s)}static createKeyFieldInFilter(t,e,s){return e==="in"?new Ex(t,s):new Tx(t,s)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Po(e,this.value)):e!==null&&ps(this.value)===ps(e)&&this.matchesComparison(Po(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return At(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ui extends Cw{constructor(t,e){super(),this.filters=t,this.op=e,this.Te=null}static create(t,e){return new Ui(t,e)}matches(t){return Dw(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Dw(n){return n.op==="and"}function Ow(n){return _x(n)&&Dw(n)}function _x(n){for(const t of n.filters)if(t instanceof Ui)return!1;return!0}function Jm(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+Vo(n.value);if(Ow(n))return n.filters.map(t=>Jm(t)).join(",");{const t=n.filters.map(e=>Jm(e)).join(",");return`${n.op}(${t})`}}function xw(n,t){return n instanceof ke?function(s,o){return o instanceof ke&&s.op===o.op&&s.field.isEqual(o.field)&&Li(s.value,o.value)}(n,t):n instanceof Ui?function(s,o){return o instanceof Ui&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&xw(h,o.filters[p]),!0):!1}(n,t):void At(19439)}function Nw(n){return n instanceof ke?function(e){return`${e.field.canonicalString()} ${e.op} ${Vo(e.value)}`}(n):n instanceof Ui?function(e){return e.op.toString()+" {"+e.getFilters().map(Nw).join(" ,")+"}"}(n):"Filter"}class vx extends ke{constructor(t,e,s){super(t,e,s),this.key=_t.fromName(s.referenceValue)}matches(t){const e=_t.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ex extends ke{constructor(t,e){super(t,"in",e),this.keys=kw("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Tx extends ke{constructor(t,e){super(t,"not-in",e),this.keys=kw("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function kw(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(s=>_t.fromName(s.referenceValue))}class Ax extends ke{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Pg(e)&&Nu(e.arrayValue,this.value)}}class wx extends ke{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Nu(this.value.arrayValue,e)}}class Sx extends ke{constructor(t,e){super(t,"not-in",e)}matches(t){if(Nu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Nu(this.value.arrayValue,e)}}class bx extends ke{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Pg(e)||!e.arrayValue.values)&&e.arrayValue.values.some(s=>Nu(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(t,e=null,s=[],o=[],u=null,h=null,p=null){this.path=t,this.collectionGroup=e,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.Ie=null}}function BE(n,t=null,e=[],s=[],o=null,u=null,h=null){return new Rx(n,t,e,s,o,u,h)}function Vg(n){const t=bt(n);if(t.Ie===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(s=>Jm(s)).join(","),e+="|ob:",e+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Uf(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(s=>Vo(s)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(s=>Vo(s)).join(",")),t.Ie=e}return t.Ie}function Lg(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!yx(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!xw(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!zE(n.startAt,t.startAt)&&zE(n.endAt,t.endAt)}function tg(n){return _t.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(t,e=null,s=[],o=[],u=null,h="F",p=null,m=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=m,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Ix(n,t,e,s,o,u,h,p){return new Bf(n,t,e,s,o,u,h,p)}function Mw(n){return new Bf(n)}function jE(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Cx(n){return n.collectionGroup!==null}function vu(n){const t=bt(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),e.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new Pe(We.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(p=p.add(g.field))})}),p})(t).forEach(u=>{e.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new lf(u,s))}),e.has(We.keyField().canonicalString())||t.Ee.push(new lf(We.keyField(),s))}return t.Ee}function xi(n){const t=bt(n);return t.de||(t.de=Dx(t,vu(n))),t.de}function Dx(n,t){if(n.limitType==="F")return BE(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new lf(o.field,u)});const e=n.endAt?new of(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new of(n.startAt.position,n.startAt.inclusive):null;return BE(n.path,n.collectionGroup,t,n.filters,n.limit,e,s)}}function eg(n,t,e){return new Bf(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function jf(n,t){return Lg(xi(n),xi(t))&&n.limitType===t.limitType}function Pw(n){return`${Vg(xi(n))}|lt:${n.limitType}`}function vo(n){return`Query(target=${function(e){let s=e.path.canonicalString();return e.collectionGroup!==null&&(s+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(s+=`, filters: [${e.filters.map(o=>Nw(o)).join(", ")}]`),Uf(e.limit)||(s+=", limit: "+e.limit),e.orderBy.length>0&&(s+=`, orderBy: [${e.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),e.startAt&&(s+=", startAt: ",s+=e.startAt.inclusive?"b:":"a:",s+=e.startAt.position.map(o=>Vo(o)).join(",")),e.endAt&&(s+=", endAt: ",s+=e.endAt.inclusive?"a:":"b:",s+=e.endAt.position.map(o=>Vo(o)).join(",")),`Target(${s})`}(xi(n))}; limitType=${n.limitType})`}function Hf(n,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):_t.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(n,t)&&function(s,o){for(const u of vu(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(n,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(n,t)&&function(s,o){return!(s.startAt&&!function(h,p,m){const g=UE(h,p,m);return h.inclusive?g<=0:g<0}(s.startAt,vu(s),o)||s.endAt&&!function(h,p,m){const g=UE(h,p,m);return h.inclusive?g>=0:g>0}(s.endAt,vu(s),o))}(n,t)}function Ox(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vw(n){return(t,e)=>{let s=!1;for(const o of vu(n)){const u=xx(o,t,e);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function xx(n,t,e){const s=n.field.isKeyField()?_t.comparator(t.key,e.key):function(u,h,p){const m=h.data.field(u),g=p.data.field(u);return m!==null&&g!==null?Po(m,g):At(42886)}(n.field,t,e);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return At(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,e){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,e]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,e]);o.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),s=this.inner[e];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[e]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){va(this.inner,(e,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return vw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=new he(_t.comparator);function _r(){return Nx}const Lw=new he(_t.comparator);function pu(...n){let t=Lw;for(const e of n)t=t.insert(e.key,e);return t}function Uw(n){let t=Lw;return n.forEach((e,s)=>t=t.insert(e,s.overlayedDocument)),t}function sa(){return Eu()}function zw(){return Eu()}function Eu(){return new Ea(n=>n.toString(),(n,t)=>n.isEqual(t))}const kx=new he(_t.comparator),Mx=new Pe(_t.comparator);function Vt(...n){let t=Mx;for(const e of n)t=t.add(e);return t}const Px=new Pe(xt);function Vx(){return Px}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rf(t)?"-0":t}}function Bw(n){return{integerValue:""+n}}function Lx(n,t){return ux(t)?Bw(t):Ug(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(){this._=void 0}}function Ux(n,t,e){return n instanceof uf?function(o,u){const h={fields:{[Aw]:{stringValue:Tw},[Sw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Mg(u)&&(u=zf(u)),u&&(h.fields[ww]=u),{mapValue:h}}(e,t):n instanceof ku?Hw(n,t):n instanceof Mu?qw(n,t):function(o,u){const h=jw(o,u),p=HE(h)+HE(o.Re);return Zm(h)&&Zm(o.Re)?Bw(p):Ug(o.serializer,p)}(n,t)}function zx(n,t,e){return n instanceof ku?Hw(n,t):n instanceof Mu?qw(n,t):e}function jw(n,t){return n instanceof cf?function(s){return Zm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class uf extends qf{}class ku extends qf{constructor(t){super(),this.elements=t}}function Hw(n,t){const e=Fw(t);for(const s of n.elements)e.some(o=>Li(o,s))||e.push(s);return{arrayValue:{values:e}}}class Mu extends qf{constructor(t){super(),this.elements=t}}function qw(n,t){let e=Fw(t);for(const s of n.elements)e=e.filter(o=>!Li(o,s));return{arrayValue:{values:e}}}class cf extends qf{constructor(t,e){super(),this.serializer=t,this.Re=e}}function HE(n){return Ee(n.integerValue||n.doubleValue)}function Fw(n){return Pg(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Bx(n,t){return n.field.isEqual(t.field)&&function(s,o){return s instanceof ku&&o instanceof ku||s instanceof Mu&&o instanceof Mu?Mo(s.elements,o.elements,Li):s instanceof cf&&o instanceof cf?Li(s.Re,o.Re):s instanceof uf&&o instanceof uf}(n.transform,t.transform)}class jx{constructor(t,e){this.version=t,this.transformResults=e}}class Ni{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ni}static exists(t){return new Ni(void 0,t)}static updateTime(t){return new Ni(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qh(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ff{}function Gw(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new zg(n.key,Ni.none()):new qu(n.key,n.data,Ni.none());{const e=n.data,s=Yn.empty();let o=new Pe(We.comparator);for(let u of t.fields)if(!o.has(u)){let h=e.field(u);h===null&&u.length>1&&(u=u.popLast(),h=e.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new Ta(n.key,s,new si(o.toArray()),Ni.none())}}function Hx(n,t,e){n instanceof qu?function(o,u,h){const p=o.value.clone(),m=FE(o.fieldTransforms,u,h.transformResults);p.setAll(m),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,t,e):n instanceof Ta?function(o,u,h){if(!qh(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=FE(o.fieldTransforms,u,h.transformResults),m=u.data;m.setAll($w(o)),m.setAll(p),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(n,t,e):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,t,e)}function Tu(n,t,e,s){return n instanceof qu?function(u,h,p,m){if(!qh(u.precondition,h))return p;const g=u.value.clone(),E=GE(u.fieldTransforms,m,h);return g.setAll(E),h.convertToFoundDocument(h.version,g).setHasLocalMutations(),null}(n,t,e,s):n instanceof Ta?function(u,h,p,m){if(!qh(u.precondition,h))return p;const g=GE(u.fieldTransforms,m,h),E=h.data;return E.setAll($w(u)),E.setAll(g),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(n,t,e,s):function(u,h,p){return qh(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(n,t,e)}function qx(n,t){let e=null;for(const s of n.fieldTransforms){const o=t.data.field(s.field),u=jw(s.transform,o||null);u!=null&&(e===null&&(e=Yn.empty()),e.set(s.field,u))}return e||null}function qE(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&Mo(s,o,(u,h)=>Bx(u,h))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class qu extends Ff{constructor(t,e,s,o=[]){super(),this.key=t,this.value=e,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ta extends Ff{constructor(t,e,s,o,u=[]){super(),this.key=t,this.data=e,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function $w(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const s=n.data.field(e);t.set(e,s)}}),t}function FE(n,t,e){const s=new Map;Kt(n.length===e.length,32656,{Ve:e.length,me:n.length});for(let o=0;o<e.length;o++){const u=n[o],h=u.transform,p=t.data.field(u.field);s.set(u.field,zx(h,p,e[o]))}return s}function GE(n,t,e){const s=new Map;for(const o of n){const u=o.transform,h=e.data.field(o.field);s.set(o.field,Ux(u,h,t))}return s}class zg extends Ff{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fx extends Ff{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(t,e,s,o){this.batchId=t,this.localWriteTime=e,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,e){const s=e.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&Hx(u,t,s[o])}}applyToLocalView(t,e){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(e=Tu(s,t,e,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(e=Tu(s,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const s=zw();return this.mutations.forEach(o=>{const u=t.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=e.has(o.key)?null:p;const m=Gw(h,p);m!==null&&s.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(St.min())}),s}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Vt())}isEqual(t){return this.batchId===t.batchId&&Mo(this.mutations,t.mutations,(e,s)=>qE(e,s))&&Mo(this.baseMutations,t.baseMutations,(e,s)=>qE(e,s))}}class Bg{constructor(t,e,s,o){this.batch=t,this.commitVersion=e,this.mutationResults=s,this.docVersions=o}static from(t,e,s){Kt(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return kx}();const u=t.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Bg(t,e,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,jt;function Yx(n){switch(n){case it.OK:return At(64938);case it.CANCELLED:case it.UNKNOWN:case it.DEADLINE_EXCEEDED:case it.RESOURCE_EXHAUSTED:case it.INTERNAL:case it.UNAVAILABLE:case it.UNAUTHENTICATED:return!1;case it.INVALID_ARGUMENT:case it.NOT_FOUND:case it.ALREADY_EXISTS:case it.PERMISSION_DENIED:case it.FAILED_PRECONDITION:case it.ABORTED:case it.OUT_OF_RANGE:case it.UNIMPLEMENTED:case it.DATA_LOSS:return!0;default:return At(15467,{code:n})}}function Kw(n){if(n===void 0)return yr("GRPC error has no .code"),it.UNKNOWN;switch(n){case be.OK:return it.OK;case be.CANCELLED:return it.CANCELLED;case be.UNKNOWN:return it.UNKNOWN;case be.DEADLINE_EXCEEDED:return it.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return it.RESOURCE_EXHAUSTED;case be.INTERNAL:return it.INTERNAL;case be.UNAVAILABLE:return it.UNAVAILABLE;case be.UNAUTHENTICATED:return it.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return it.INVALID_ARGUMENT;case be.NOT_FOUND:return it.NOT_FOUND;case be.ALREADY_EXISTS:return it.ALREADY_EXISTS;case be.PERMISSION_DENIED:return it.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return it.FAILED_PRECONDITION;case be.ABORTED:return it.ABORTED;case be.OUT_OF_RANGE:return it.OUT_OF_RANGE;case be.UNIMPLEMENTED:return it.UNIMPLEMENTED;case be.DATA_LOSS:return it.DATA_LOSS;default:return At(39323,{code:n})}}(jt=be||(be={}))[jt.OK=0]="OK",jt[jt.CANCELLED=1]="CANCELLED",jt[jt.UNKNOWN=2]="UNKNOWN",jt[jt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",jt[jt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",jt[jt.NOT_FOUND=5]="NOT_FOUND",jt[jt.ALREADY_EXISTS=6]="ALREADY_EXISTS",jt[jt.PERMISSION_DENIED=7]="PERMISSION_DENIED",jt[jt.UNAUTHENTICATED=16]="UNAUTHENTICATED",jt[jt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",jt[jt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",jt[jt.ABORTED=10]="ABORTED",jt[jt.OUT_OF_RANGE=11]="OUT_OF_RANGE",jt[jt.UNIMPLEMENTED=12]="UNIMPLEMENTED",jt[jt.INTERNAL=13]="INTERNAL",jt[jt.UNAVAILABLE=14]="UNAVAILABLE",jt[jt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=new as([4294967295,4294967295],0);function $E(n){const t=gw().encode(n),e=new lw;return e.update(t),new Uint8Array(e.digest())}function KE(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new as([e,s],0),new as([o,u],0)]}class jg{constructor(t,e,s){if(this.bitmap=t,this.padding=e,this.hashCount=s,e<0||e>=8)throw new mu(`Invalid padding: ${e}`);if(s<0)throw new mu(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new mu(`Invalid hash count: ${s}`);if(t.length===0&&e!==0)throw new mu(`Invalid padding when bitmap length is 0: ${e}`);this.pe=8*t.length-e,this.ye=as.fromNumber(this.pe)}we(t,e,s){let o=t.add(e.multiply(as.fromNumber(s)));return o.compare(Qx)===1&&(o=new as([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}Se(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const e=$E(t),[s,o]=KE(e);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);if(!this.Se(h))return!1}return!0}static create(t,e,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),h=new jg(u,o,e);return s.forEach(p=>h.insert(p)),h}insert(t){if(this.pe===0)return;const e=$E(t),[s,o]=KE(e);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);this.be(h)}}be(t){const e=Math.floor(t/8),s=t%8;this.bitmap[e]|=1<<s}}class mu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,e,s,o,u){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,e,s){const o=new Map;return o.set(t,Fu.createSynthesizedTargetChangeForCurrentChange(t,e,s)),new Gf(St.min(),o,new he(xt),_r(),Vt())}}class Fu{constructor(t,e,s,o,u){this.resumeToken=t,this.current=e,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,e,s){return new Fu(s,e,Vt(),Vt(),Vt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e,s,o){this.De=t,this.removedTargetIds=e,this.key=s,this.ve=o}}class Yw{constructor(t,e){this.targetId=t,this.Ce=e}}class Qw{constructor(t,e,s=Ze.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=e,this.resumeToken=s,this.cause=o}}class YE{constructor(){this.Fe=0,this.Me=QE(),this.xe=Ze.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Vt(),e=Vt(),s=Vt();return this.Me.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:e=e.add(o);break;case 1:s=s.add(o);break;default:At(38017,{changeType:u})}}),new Fu(this.xe,this.Oe,t,e,s)}Qe(){this.Ne=!1,this.Me=QE()}$e(t,e){this.Ne=!0,this.Me=this.Me.insert(t,e)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Kt(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Xx{constructor(t){this.ze=t,this.je=new Map,this.He=_r(),this.Je=Rh(),this.Ye=Rh(),this.Ze=new he(xt)}Xe(t){for(const e of t.De)t.ve&&t.ve.isFoundDocument()?this.et(e,t.ve):this.tt(e,t.key,t.ve);for(const e of t.removedTargetIds)this.tt(e,t.key,t.ve)}nt(t){this.forEachTarget(t,e=>{const s=this.rt(e);switch(t.state){case 0:this.it(e)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(e);break;case 3:this.it(e)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(e)&&(this.st(e),s.ke(t.resumeToken));break;default:At(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.je.forEach((s,o)=>{this.it(o)&&e(o)})}ot(t){const e=t.targetId,s=t.Ce.count,o=this._t(e);if(o){const u=o.target;if(tg(u))if(s===0){const h=new _t(u.path);this.tt(e,h,an.newNoDocument(h,St.min()))}else Kt(s===1,20013,{expectedCount:s});else{const h=this.ut(e);if(h!==s){const p=this.ct(t),m=p?this.lt(p,t,h):1;if(m!==0){this.st(e);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,g)}}}}}ct(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=e;let h,p;try{h=ds(s).toUint8Array()}catch(m){if(m instanceof Ew)return ko("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{p=new jg(h,o,u)}catch(m){return ko(m instanceof mu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return p.pe===0?null:p}lt(t,e,s){return e.Ce.count===s-this.Tt(t,e.targetId)?0:2}Tt(t,e){const s=this.ze.getRemoteKeysForTarget(e);let o=0;return s.forEach(u=>{const h=this.ze.Pt(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.tt(e,u,null),o++)}),o}It(t){const e=new Map;this.je.forEach((u,h)=>{const p=this._t(h);if(p){if(u.current&&tg(p.target)){const m=new _t(p.target.path);this.Et(m).has(h)||this.dt(h,m)||this.tt(h,m,an.newNoDocument(m,t))}u.Le&&(e.set(h,u.qe()),u.Qe())}});let s=Vt();this.Ye.forEach((u,h)=>{let p=!0;h.forEachWhile(m=>{const g=this._t(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.He.forEach((u,h)=>h.setReadTime(t));const o=new Gf(t,e,this.Ze,this.He,s);return this.He=_r(),this.Je=Rh(),this.Ye=Rh(),this.Ze=new he(xt),o}et(t,e){if(!this.it(t))return;const s=this.dt(t,e.key)?2:0;this.rt(t).$e(e.key,s),this.He=this.He.insert(e.key,e),this.Je=this.Je.insert(e.key,this.Et(e.key).add(t)),this.Ye=this.Ye.insert(e.key,this.At(e.key).add(t))}tt(t,e,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,e)?o.$e(e,1):o.Ue(e),this.Ye=this.Ye.insert(e,this.At(e).delete(t)),this.Ye=this.Ye.insert(e,this.At(e).add(t)),s&&(this.He=this.He.insert(e,s))}removeTarget(t){this.je.delete(t)}ut(t){const e=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let e=this.je.get(t);return e||(e=new YE,this.je.set(t,e)),e}At(t){let e=this.Ye.get(t);return e||(e=new Pe(xt),this.Ye=this.Ye.insert(t,e)),e}Et(t){let e=this.Je.get(t);return e||(e=new Pe(xt),this.Je=this.Je.insert(t,e)),e}it(t){const e=this._t(t)!==null;return e||ht("WatchChangeAggregator","Detected inactive target",t),e}_t(t){const e=this.je.get(t);return e&&e.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new YE),this.ze.getRemoteKeysForTarget(t).forEach(e=>{this.tt(t,e,null)})}dt(t,e){return this.ze.getRemoteKeysForTarget(t).has(e)}}function Rh(){return new he(_t.comparator)}function QE(){return new he(_t.comparator)}const Wx={asc:"ASCENDING",desc:"DESCENDING"},Zx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jx={and:"AND",or:"OR"};class tN{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ng(n,t){return n.useProto3Json||Uf(t)?t:{value:t}}function hf(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xw(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function eN(n,t){return hf(n,t.toTimestamp())}function ki(n){return Kt(!!n,49232),St.fromTimestamp(function(e){const s=fs(e);return new Me(s.seconds,s.nanos)}(n))}function Hg(n,t){return ig(n,t).canonicalString()}function ig(n,t){const e=function(o){return new oe(["projects",o.projectId,"databases",o.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ww(n){const t=oe.fromString(n);return Kt(nS(t),10190,{key:t.toString()}),t}function rg(n,t){return Hg(n.databaseId,t.path)}function Am(n,t){const e=Ww(t);if(e.get(1)!==n.databaseId.projectId)throw new gt(it.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new gt(it.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new _t(Jw(e))}function Zw(n,t){return Hg(n.databaseId,t)}function nN(n){const t=Ww(n);return t.length===4?oe.emptyPath():Jw(t)}function sg(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Jw(n){return Kt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function XE(n,t,e){return{name:rg(n,t),fields:e.value.mapValue.fields}}function iN(n,t){let e;if("targetChange"in t){t.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:At(39313,{state:g})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(g,E){return g.useProto3Json?(Kt(E===void 0||typeof E=="string",58123),Ze.fromBase64String(E||"")):(Kt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Ze.fromUint8Array(E||new Uint8Array))}(n,t.targetChange.resumeToken),h=t.targetChange.cause,p=h&&function(g){const E=g.code===void 0?it.UNKNOWN:Kw(g.code);return new gt(E,g.message||"")}(h);e=new Qw(s,o,u,p||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Am(n,s.document.name),u=ki(s.document.updateTime),h=s.document.createTime?ki(s.document.createTime):St.min(),p=new Yn({mapValue:{fields:s.document.fields}}),m=an.newFoundDocument(o,u,h,p),g=s.targetIds||[],E=s.removedTargetIds||[];e=new Fh(g,E,m.key,m)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Am(n,s.document),u=s.readTime?ki(s.readTime):St.min(),h=an.newNoDocument(o,u),p=s.removedTargetIds||[];e=new Fh([],p,h.key,h)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Am(n,s.document),u=s.removedTargetIds||[];e=new Fh([],u,o,null)}else{if(!("filter"in t))return At(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new Kx(o,u),p=s.targetId;e=new Yw(p,h)}}return e}function rN(n,t){let e;if(t instanceof qu)e={update:XE(n,t.key,t.value)};else if(t instanceof zg)e={delete:rg(n,t.key)};else if(t instanceof Ta)e={update:XE(n,t.key,t.data),updateMask:dN(t.fieldMask)};else{if(!(t instanceof Fx))return At(16599,{ft:t.type});e={verify:rg(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof uf)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ku)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Mu)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof cf)return{fieldPath:h.field.canonicalString(),increment:p.Re};throw At(20930,{transform:h.transform})}(0,s))),t.precondition.isNone||(e.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:eN(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:At(27497)}(n,t.precondition)),e}function sN(n,t){return n&&n.length>0?(Kt(t!==void 0,14353),n.map(e=>function(o,u){let h=o.updateTime?ki(o.updateTime):ki(u);return h.isEqual(St.min())&&(h=ki(u)),new jx(h,o.transformResults||[])}(e,t))):[]}function aN(n,t){return{documents:[Zw(n,t.path)]}}function oN(n,t){const e={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),e.structuredQuery.from=[{collectionId:s.lastSegment()}]),e.parent=Zw(n,o);const u=function(g){if(g.length!==0)return eS(Ui.create(g,"and"))}(t.filters);u&&(e.structuredQuery.where=u);const h=function(g){if(g.length!==0)return g.map(E=>function(w){return{field:Eo(w.field),direction:cN(w.dir)}}(E))}(t.orderBy);h&&(e.structuredQuery.orderBy=h);const p=ng(n,t.limit);return p!==null&&(e.structuredQuery.limit=p),t.startAt&&(e.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(t.endAt)),{gt:e,parent:o}}function lN(n){let t=nN(n.parent);const e=n.structuredQuery,s=e.from?e.from.length:0;let o=null;if(s>0){Kt(s===1,65062);const E=e.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];e.where&&(u=function(A){const w=tS(A);return w instanceof Ui&&Ow(w)?w.getFilters():[w]}(e.where));let h=[];e.orderBy&&(h=function(A){return A.map(w=>function(x){return new lf(To(x.field),function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(e.orderBy));let p=null;e.limit&&(p=function(A){let w;return w=typeof A=="object"?A.value:A,Uf(w)?null:w}(e.limit));let m=null;e.startAt&&(m=function(A){const w=!!A.before,I=A.values||[];return new of(I,w)}(e.startAt));let g=null;return e.endAt&&(g=function(A){const w=!A.before,I=A.values||[];return new of(I,w)}(e.endAt)),Ix(t,o,h,u,p,"F",m,g)}function uN(n,t){const e=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return At(28987,{purpose:o})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function tS(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const s=To(e.unaryFilter.field);return ke.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=To(e.unaryFilter.field);return ke.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=To(e.unaryFilter.field);return ke.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=To(e.unaryFilter.field);return ke.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return At(61313);default:return At(60726)}}(n):n.fieldFilter!==void 0?function(e){return ke.create(To(e.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return At(58110);default:return At(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ui.create(e.compositeFilter.filters.map(s=>tS(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return At(1026)}}(e.compositeFilter.op))}(n):At(30097,{filter:n})}function cN(n){return Wx[n]}function hN(n){return Zx[n]}function fN(n){return Jx[n]}function Eo(n){return{fieldPath:n.canonicalString()}}function To(n){return We.fromServerFormat(n.fieldPath)}function eS(n){return n instanceof ke?function(e){if(e.op==="=="){if(LE(e.value))return{unaryFilter:{field:Eo(e.field),op:"IS_NAN"}};if(VE(e.value))return{unaryFilter:{field:Eo(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(LE(e.value))return{unaryFilter:{field:Eo(e.field),op:"IS_NOT_NAN"}};if(VE(e.value))return{unaryFilter:{field:Eo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(e.field),op:hN(e.op),value:e.value}}}(n):n instanceof Ui?function(e){const s=e.getFilters().map(o=>eS(o));return s.length===1?s[0]:{compositeFilter:{op:fN(e.op),filters:s}}}(n):At(54877,{filter:n})}function dN(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function nS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,s,o,u=St.min(),h=St.min(),p=Ze.EMPTY_BYTE_STRING,m=null){this.target=t,this.targetId=e,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=m}withSequenceNumber(t){return new ns(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(t){this.wt=t}}function mN(n){const t=lN({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?eg(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.Cn=new yN}addToCollectionParentIndex(t,e){return this.Cn.add(e),tt.resolve()}getCollectionParents(t,e){return tt.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return tt.resolve()}deleteFieldIndex(t,e){return tt.resolve()}deleteAllFieldIndexes(t){return tt.resolve()}createTargetIndexes(t,e){return tt.resolve()}getDocumentsMatchingTarget(t,e){return tt.resolve(null)}getIndexType(t,e){return tt.resolve(0)}getFieldIndexes(t,e){return tt.resolve([])}getNextCollectionGroupToUpdate(t){return tt.resolve(null)}getMinOffset(t,e){return tt.resolve(hs.min())}getMinOffsetFromCollectionGroup(t,e){return tt.resolve(hs.min())}updateCollectionGroup(t,e,s){return tt.resolve()}updateIndexEntries(t,e){return tt.resolve()}}class yN{constructor(){this.index={}}add(t){const e=t.lastSegment(),s=t.popLast(),o=this.index[e]||new Pe(oe.comparator),u=!o.has(s);return this.index[e]=o.add(s),u}has(t){const e=t.lastSegment(),s=t.popLast(),o=this.index[e];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Pe(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iS=41943040;class _n{static withCacheSize(t){return new _n(t,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(iS,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){this.ur=t}next(){return this.ur+=2,this.ur}static cr(){return new Lo(0)}static lr(){return new Lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="LruGarbageCollector",_N=1048576;function JE([n,t],[e,s]){const o=xt(n,e);return o===0?xt(t,s):o}class vN{constructor(t){this.Er=t,this.buffer=new Pe(JE),this.dr=0}Ar(){return++this.dr}Rr(t){const e=[t,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(e);else{const s=this.buffer.last();JE(e,s)<0&&(this.buffer=this.buffer.delete(s).add(e))}}get maxValue(){return this.buffer.last()[0]}}class EN{constructor(t,e,s){this.garbageCollector=t,this.asyncQueue=e,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(t){ht(ZE,`Garbage collection scheduled in ${t}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ko(e)?ht(ZE,"Ignoring IndexedDB error during garbage collection: ",e):await $o(e)}await this.mr(3e5)})}}class TN{constructor(t,e){this.gr=t,this.params=e}calculateTargetCount(t,e){return this.gr.pr(t).next(s=>Math.floor(e/100*s))}nthSequenceNumber(t,e){if(e===0)return tt.resolve(Lf.le);const s=new vN(e);return this.gr.forEachTarget(t,o=>s.Rr(o.sequenceNumber)).next(()=>this.gr.yr(t,o=>s.Rr(o))).next(()=>s.maxValue)}removeTargets(t,e,s){return this.gr.removeTargets(t,e,s)}removeOrphanedDocuments(t,e){return this.gr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(ht("LruGarbageCollector","Garbage collection skipped; disabled"),tt.resolve(WE)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(ht("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),WE):this.wr(t,e))}getCacheSize(t){return this.gr.getCacheSize(t)}wr(t,e){let s,o,u,h,p,m,g;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(ht("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(t,o))).next(A=>(s=A,p=Date.now(),this.removeTargets(t,s,e))).next(A=>(u=A,m=Date.now(),this.removeOrphanedDocuments(t,s))).next(A=>(g=Date.now(),_o()<=Pt.DEBUG&&ht("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(m-p)+`ms
	Removed ${A} documents in `+(g-m)+`ms
Total Duration: ${g-E}ms`),tt.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function AN(n,t){return new TN(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.changes=new Ea(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,an.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const s=this.changes.get(e);return s!==void 0?tt.resolve(s):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(t,e,s,o){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,e){let s=null;return this.documentOverlayCache.getOverlay(t,e).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,e))).next(o=>(s!==null&&Tu(s.mutation,o,si.empty(),Me.now()),o))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.getLocalViewOfDocuments(t,s,Vt()).next(()=>s))}getLocalViewOfDocuments(t,e,s=Vt()){const o=sa();return this.populateOverlays(t,o,e).next(()=>this.computeViews(t,e,o,s).next(u=>{let h=pu();return u.forEach((p,m)=>{h=h.insert(p,m.overlayedDocument)}),h}))}getOverlayedDocuments(t,e){const s=sa();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,Vt()))}populateOverlays(t,e,s){const o=[];return s.forEach(u=>{e.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((h,p)=>{e.set(h,p)})})}computeViews(t,e,s,o){let u=_r();const h=Eu(),p=function(){return Eu()}();return e.forEach((m,g)=>{const E=s.get(g.key);o.has(g.key)&&(E===void 0||E.mutation instanceof Ta)?u=u.insert(g.key,g):E!==void 0?(h.set(g.key,E.mutation.getFieldMask()),Tu(E.mutation,g,E.mutation.getFieldMask(),Me.now())):h.set(g.key,si.empty())}),this.recalculateAndSaveOverlays(t,u).next(m=>(m.forEach((g,E)=>h.set(g,E)),e.forEach((g,E)=>{var A;return p.set(g,new SN(E,(A=h.get(g))!==null&&A!==void 0?A:null))}),p))}recalculateAndSaveOverlays(t,e){const s=Eu();let o=new he((h,p)=>h-p),u=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(h=>{for(const p of h)p.keys().forEach(m=>{const g=e.get(m);if(g===null)return;let E=s.get(m)||si.empty();E=p.applyToLocalView(g,E),s.set(m,E);const A=(o.get(p.batchId)||Vt()).add(m);o=o.insert(p.batchId,A)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const m=p.getNext(),g=m.key,E=m.value,A=zw();E.forEach(w=>{if(!u.has(w)){const I=Gw(e.get(w),s.get(w));I!==null&&A.set(w,I),u=u.add(w)}}),h.push(this.documentOverlayCache.saveOverlays(t,g,A))}return tt.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,e,s,o){return function(h){return _t.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Cx(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,s,o):this.getDocumentsMatchingCollectionQuery(t,e,s,o)}getNextDocuments(t,e,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,s.largestBatchId,o-u.size):tt.resolve(sa());let p=Du,m=u;return h.next(g=>tt.forEach(g,(E,A)=>(p<A.largestBatchId&&(p=A.largestBatchId),u.get(E)?tt.resolve():this.remoteDocumentCache.getEntry(t,E).next(w=>{m=m.insert(E,w)}))).next(()=>this.populateOverlays(t,g,u)).next(()=>this.computeViews(t,m,g,Vt())).next(E=>({batchId:p,changes:Uw(E)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new _t(e)).next(s=>{let o=pu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,e,s,o){const u=e.collectionGroup;let h=pu();return this.indexManager.getCollectionParents(t,u).next(p=>tt.forEach(p,m=>{const g=function(A,w){return new Bf(w,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,m.child(u));return this.getDocumentsMatchingCollectionQuery(t,g,s,o).next(E=>{E.forEach((A,w)=>{h=h.insert(A,w)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(t,e,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,s,u,o))).next(h=>{u.forEach((m,g)=>{const E=g.getKey();h.get(E)===null&&(h=h.insert(E,an.newInvalidDocument(E)))});let p=pu();return h.forEach((m,g)=>{const E=u.get(m);E!==void 0&&Tu(E.mutation,g,si.empty(),Me.now()),Hf(e,g)&&(p=p.insert(m,g))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(t){this.serializer=t,this.kr=new Map,this.qr=new Map}getBundleMetadata(t,e){return tt.resolve(this.kr.get(e))}saveBundleMetadata(t,e){return this.kr.set(e.id,function(o){return{id:o.id,version:o.version,createTime:ki(o.createTime)}}(e)),tt.resolve()}getNamedQuery(t,e){return tt.resolve(this.qr.get(e))}saveNamedQuery(t,e){return this.qr.set(e.name,function(o){return{name:o.name,query:mN(o.bundledQuery),readTime:ki(o.readTime)}}(e)),tt.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this.overlays=new he(_t.comparator),this.Qr=new Map}getOverlay(t,e){return tt.resolve(this.overlays.get(e))}getOverlays(t,e){const s=sa();return tt.forEach(e,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,e,s){return s.forEach((o,u)=>{this.bt(t,e,u)}),tt.resolve()}removeOverlaysForBatchId(t,e,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Qr.delete(s)),tt.resolve()}getOverlaysForCollection(t,e,s){const o=sa(),u=e.length+1,h=new _t(e.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const m=p.getNext().value,g=m.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===u&&m.largestBatchId>s&&o.set(m.getKey(),m)}return tt.resolve(o)}getOverlaysForCollectionGroup(t,e,s,o){let u=new he((g,E)=>g-E);const h=this.overlays.getIterator();for(;h.hasNext();){const g=h.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>s){let E=u.get(g.largestBatchId);E===null&&(E=sa(),u=u.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const p=sa(),m=u.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,E)=>p.set(g,E)),!(p.size()>=o)););return tt.resolve(p)}bt(t,e,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new $x(e,s));let u=this.Qr.get(e);u===void 0&&(u=Vt(),this.Qr.set(e,u)),this.Qr.set(e,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(t){return tt.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,tt.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.$r=new Pe(He.Ur),this.Kr=new Pe(He.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(t,e){const s=new He(t,e);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(t,e){t.forEach(s=>this.addReference(s,e))}removeReference(t,e){this.zr(new He(t,e))}jr(t,e){t.forEach(s=>this.removeReference(s,e))}Hr(t){const e=new _t(new oe([])),s=new He(e,t),o=new He(e,t+1),u=[];return this.Kr.forEachInRange([s,o],h=>{this.zr(h),u.push(h.key)}),u}Jr(){this.$r.forEach(t=>this.zr(t))}zr(t){this.$r=this.$r.delete(t),this.Kr=this.Kr.delete(t)}Yr(t){const e=new _t(new oe([])),s=new He(e,t),o=new He(e,t+1);let u=Vt();return this.Kr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(t){const e=new He(t,0),s=this.$r.firstAfterOrEqual(e);return s!==null&&t.isEqual(s.key)}}class He{constructor(t,e){this.key=t,this.Zr=e}static Ur(t,e){return _t.comparator(t.key,e.key)||xt(t.Zr,e.Zr)}static Wr(t,e){return xt(t.Zr,e.Zr)||_t.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.nr=1,this.Xr=new Pe(He.Ur)}checkEmpty(t){return tt.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new Gx(u,e,s,o);this.mutationQueue.push(h);for(const p of o)this.Xr=this.Xr.add(new He(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return tt.resolve(h)}lookupMutationBatch(t,e){return tt.resolve(this.ei(e))}getNextMutationBatchAfterBatchId(t,e){const s=e+1,o=this.ti(s),u=o<0?0:o;return tt.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return tt.resolve(this.mutationQueue.length===0?kg:this.nr-1)}getAllMutationBatches(t){return tt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const s=new He(e,0),o=new He(e,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],h=>{const p=this.ei(h.Zr);u.push(p)}),tt.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,e){let s=new Pe(xt);return e.forEach(o=>{const u=new He(o,0),h=new He(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,h],p=>{s=s.add(p.Zr)})}),tt.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(t,e){const s=e.path,o=s.length+1;let u=s;_t.isDocumentKey(u)||(u=u.child(""));const h=new He(new _t(u),0);let p=new Pe(xt);return this.Xr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===o&&(p=p.add(m.Zr)),!0)},h),tt.resolve(this.ni(p))}ni(t){const e=[];return t.forEach(s=>{const o=this.ei(s);o!==null&&e.push(o)}),e}removeMutationBatch(t,e){Kt(this.ri(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return tt.forEach(e.mutations,o=>{const u=new He(o.key,e.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.Xr=s})}sr(t){}containsKey(t,e){const s=new He(e,0),o=this.Xr.firstAfterOrEqual(s);return tt.resolve(e.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,tt.resolve()}ri(t,e){return this.ti(t)}ti(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}ei(t){const e=this.ti(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(t){this.ii=t,this.docs=function(){return new he(_t.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const s=e.key,o=this.docs.get(s),u=o?o.size:0,h=this.ii(e);return this.docs=this.docs.insert(s,{document:e.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const s=this.docs.get(e);return tt.resolve(s?s.document.mutableCopy():an.newInvalidDocument(e))}getEntries(t,e){let s=_r();return e.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():an.newInvalidDocument(o))}),tt.resolve(s)}getDocumentsMatchingQuery(t,e,s,o){let u=_r();const h=e.path,p=new _t(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(p);for(;m.hasNext();){const{key:g,value:{document:E}}=m.getNext();if(!h.isPrefixOf(g.path))break;g.path.length>h.length+1||sx(rx(E),s)<=0||(o.has(E.key)||Hf(e,E))&&(u=u.insert(E.key,E.mutableCopy()))}return tt.resolve(u)}getAllFromCollectionGroup(t,e,s,o){At(9500)}si(t,e){return tt.forEach(this.docs,s=>e(s))}newChangeBuffer(t){return new xN(this)}getSize(t){return tt.resolve(this.size)}}class xN extends wN{constructor(t){super(),this.Br=t}applyChanges(t){const e=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?e.push(this.Br.addEntry(t,o)):this.Br.removeEntry(s)}),tt.waitFor(e)}getFromCache(t,e){return this.Br.getEntry(t,e)}getAllFromCache(t,e){return this.Br.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(t){this.persistence=t,this.oi=new Ea(e=>Vg(e),Lg),this.lastRemoteSnapshotVersion=St.min(),this.highestTargetId=0,this._i=0,this.ai=new qg,this.targetCount=0,this.ui=Lo.cr()}forEachTarget(t,e){return this.oi.forEach((s,o)=>e(o)),tt.resolve()}getLastRemoteSnapshotVersion(t){return tt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return tt.resolve(this._i)}allocateTargetId(t){return this.highestTargetId=this.ui.next(),tt.resolve(this.highestTargetId)}setTargetsMetadata(t,e,s){return s&&(this.lastRemoteSnapshotVersion=s),e>this._i&&(this._i=e),tt.resolve()}Tr(t){this.oi.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ui=new Lo(e),this.highestTargetId=e),t.sequenceNumber>this._i&&(this._i=t.sequenceNumber)}addTargetData(t,e){return this.Tr(e),this.targetCount+=1,tt.resolve()}updateTargetData(t,e){return this.Tr(e),tt.resolve()}removeTargetData(t,e){return this.oi.delete(e.target),this.ai.Hr(e.targetId),this.targetCount-=1,tt.resolve()}removeTargets(t,e,s){let o=0;const u=[];return this.oi.forEach((h,p)=>{p.sequenceNumber<=e&&s.get(p.targetId)===null&&(this.oi.delete(h),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)}),tt.waitFor(u).next(()=>o)}getTargetCount(t){return tt.resolve(this.targetCount)}getTargetData(t,e){const s=this.oi.get(e)||null;return tt.resolve(s)}addMatchingKeys(t,e,s){return this.ai.Gr(e,s),tt.resolve()}removeMatchingKeys(t,e,s){this.ai.jr(e,s);const o=this.persistence.referenceDelegate,u=[];return o&&e.forEach(h=>{u.push(o.markPotentiallyOrphaned(t,h))}),tt.waitFor(u)}removeMatchingKeysForTargetId(t,e){return this.ai.Hr(e),tt.resolve()}getMatchingKeysForTargetId(t,e){const s=this.ai.Yr(e);return tt.resolve(s)}containsKey(t,e){return tt.resolve(this.ai.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(t,e){this.ci={},this.overlays={},this.li=new Lf(0),this.hi=!1,this.hi=!0,this.Pi=new CN,this.referenceDelegate=t(this),this.Ti=new NN(this),this.indexManager=new gN,this.remoteDocumentCache=function(o){return new ON(o)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new pN(e),this.Ei=new RN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new IN,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let s=this.ci[t.toKey()];return s||(s=new DN(e,this.referenceDelegate),this.ci[t.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(t,e,s){ht("MemoryPersistence","Starting transaction:",t);const o=new kN(this.li.next());return this.referenceDelegate.di(),s(o).next(u=>this.referenceDelegate.Ai(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Ri(t,e){return tt.or(Object.values(this.ci).map(s=>()=>s.containsKey(t,e)))}}class kN extends ox{constructor(t){super(),this.currentSequenceNumber=t}}class Fg{constructor(t){this.persistence=t,this.Vi=new qg,this.mi=null}static fi(t){return new Fg(t)}get gi(){if(this.mi)return this.mi;throw At(60996)}addReference(t,e,s){return this.Vi.addReference(s,e),this.gi.delete(s.toString()),tt.resolve()}removeReference(t,e,s){return this.Vi.removeReference(s,e),this.gi.add(s.toString()),tt.resolve()}markPotentiallyOrphaned(t,e){return this.gi.add(e.toString()),tt.resolve()}removeTarget(t,e){this.Vi.Hr(e.targetId).forEach(o=>this.gi.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,e.targetId).next(o=>{o.forEach(u=>this.gi.add(u.toString()))}).next(()=>s.removeTargetData(t,e))}di(){this.mi=new Set}Ai(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return tt.forEach(this.gi,s=>{const o=_t.fromPath(s);return this.pi(t,o).next(u=>{u||e.removeEntry(o,St.min())})}).next(()=>(this.mi=null,e.apply(t)))}updateLimboDocument(t,e){return this.pi(t,e).next(s=>{s?this.gi.delete(e.toString()):this.gi.add(e.toString())})}Ii(t){return 0}pi(t,e){return tt.or([()=>tt.resolve(this.Vi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ri(t,e)])}}class ff{constructor(t,e){this.persistence=t,this.yi=new Ea(s=>cx(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=AN(this,e)}static fi(t,e){return new ff(t,e)}di(){}Ai(t){return tt.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}pr(t){const e=this.Sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>e.next(o=>s+o))}Sr(t){let e=0;return this.yr(t,s=>{e++}).next(()=>e)}yr(t,e){return tt.forEach(this.yi,(s,o)=>this.Dr(t,s,o).next(u=>u?tt.resolve():e(o)))}removeTargets(t,e,s){return this.persistence.getTargetCache().removeTargets(t,e,s)}removeOrphanedDocuments(t,e){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(t,h=>this.Dr(t,h,e).next(p=>{p||(s++,u.removeEntry(h,St.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,e){return this.yi.set(e,t.currentSequenceNumber),tt.resolve()}removeTarget(t,e){const s=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,e,s){return this.yi.set(s,t.currentSequenceNumber),tt.resolve()}removeReference(t,e,s){return this.yi.set(s,t.currentSequenceNumber),tt.resolve()}updateLimboDocument(t,e){return this.yi.set(e,t.currentSequenceNumber),tt.resolve()}Ii(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=jh(t.data.value)),e}Dr(t,e,s){return tt.or([()=>this.persistence.Ri(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const o=this.yi.get(e);return tt.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(t,e,s,o){this.targetId=t,this.fromCache=e,this.ds=s,this.As=o}static Rs(t,e){let s=Vt(),o=Vt();for(const u of e.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Gg(t,e.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return CD()?8:lx(ln())>0?6:4}()}initialize(t,e){this.ys=t,this.indexManager=e,this.Vs=!0}getDocumentsMatchingQuery(t,e,s,o){const u={result:null};return this.ws(t,e).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.Ss(t,e,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new MN;return this.bs(t,e,h).next(p=>{if(u.result=p,this.fs)return this.Ds(t,e,h,p.size)})}).next(()=>u.result)}Ds(t,e,s,o){return s.documentReadCount<this.gs?(_o()<=Pt.DEBUG&&ht("QueryEngine","SDK will not create cache indexes for query:",vo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),tt.resolve()):(_o()<=Pt.DEBUG&&ht("QueryEngine","Query:",vo(e),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(_o()<=Pt.DEBUG&&ht("QueryEngine","The SDK decides to create cache indexes for query:",vo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,xi(e))):tt.resolve())}ws(t,e){if(jE(e))return tt.resolve(null);let s=xi(e);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(e.limit!==null&&o===1&&(e=eg(e,null,"F"),s=xi(e)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const h=Vt(...u);return this.ys.getDocuments(t,h).next(p=>this.indexManager.getMinOffset(t,s).next(m=>{const g=this.vs(e,p);return this.Cs(e,g,h,m.readTime)?this.ws(t,eg(e,null,"F")):this.Fs(t,g,e,m)}))})))}Ss(t,e,s,o){return jE(e)||o.isEqual(St.min())?tt.resolve(null):this.ys.getDocuments(t,s).next(u=>{const h=this.vs(e,u);return this.Cs(e,h,s,o)?tt.resolve(null):(_o()<=Pt.DEBUG&&ht("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),vo(e)),this.Fs(t,h,e,ix(o,Du)).next(p=>p))})}vs(t,e){let s=new Pe(Vw(t));return e.forEach((o,u)=>{Hf(t,u)&&(s=s.add(u))}),s}Cs(t,e,s,o){if(t.limit===null)return!1;if(s.size!==e.size)return!0;const u=t.limitType==="F"?e.last():e.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}bs(t,e,s){return _o()<=Pt.DEBUG&&ht("QueryEngine","Using full collection scan to execute query:",vo(e)),this.ys.getDocumentsMatchingQuery(t,e,hs.min(),s)}Fs(t,e,s,o){return this.ys.getDocumentsMatchingQuery(t,s,o).next(u=>(e.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="LocalStore",VN=3e8;class LN{constructor(t,e,s,o){this.persistence=t,this.Ms=e,this.serializer=o,this.xs=new he(xt),this.Os=new Ea(u=>Vg(u),Lg),this.Ns=new Map,this.Bs=t.getRemoteDocumentCache(),this.Ti=t.getTargetCache(),this.Ei=t.getBundleCache(),this.Ls(s)}Ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new bN(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.xs))}}function UN(n,t,e,s){return new LN(n,t,e,s)}async function sS(n,t){const e=bt(n);return await e.persistence.runTransaction("Handle user change","readonly",s=>{let o;return e.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,e.Ls(t),e.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let m=Vt();for(const g of o){h.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}for(const g of u){p.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}return e.localDocuments.getDocuments(s,m).next(g=>({ks:g,removedBatchIds:h,addedBatchIds:p}))})})}function zN(n,t){const e=bt(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=e.Bs.newChangeBuffer({trackRemovals:!0});return function(p,m,g,E){const A=g.batch,w=A.keys();let I=tt.resolve();return w.forEach(x=>{I=I.next(()=>E.getEntry(m,x)).next(q=>{const U=g.docVersions.get(x);Kt(U!==null,48541),q.version.compareTo(U)<0&&(A.applyToRemoteDocument(q,g),q.isValidDocument()&&(q.setReadTime(g.commitVersion),E.addEntry(q)))})}),I.next(()=>p.mutationQueue.removeMutationBatch(m,A))}(e,s,t,u).next(()=>u.apply(s)).next(()=>e.mutationQueue.performConsistencyCheck(s)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let m=Vt();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(m=m.add(p.batch.mutations[g].key));return m}(t))).next(()=>e.localDocuments.getDocuments(s,o))})}function aS(n){const t=bt(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ti.getLastRemoteSnapshotVersion(e))}function BN(n,t){const e=bt(n),s=t.snapshotVersion;let o=e.xs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=e.Bs.newChangeBuffer({trackRemovals:!0});o=e.xs;const p=[];t.targetChanges.forEach((E,A)=>{const w=o.get(A);if(!w)return;p.push(e.Ti.removeMatchingKeys(u,E.removedDocuments,A).next(()=>e.Ti.addMatchingKeys(u,E.addedDocuments,A)));let I=w.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(A)!==null?I=I.withResumeToken(Ze.EMPTY_BYTE_STRING,St.min()).withLastLimboFreeSnapshotVersion(St.min()):E.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(E.resumeToken,s)),o=o.insert(A,I),function(q,U,G){return q.resumeToken.approximateByteSize()===0||U.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=VN?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(w,I,E)&&p.push(e.Ti.updateTargetData(u,I))});let m=_r(),g=Vt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&p.push(e.persistence.referenceDelegate.updateLimboDocument(u,E))}),p.push(jN(u,h,t.documentUpdates).next(E=>{m=E.qs,g=E.Qs})),!s.isEqual(St.min())){const E=e.Ti.getLastRemoteSnapshotVersion(u).next(A=>e.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(E)}return tt.waitFor(p).next(()=>h.apply(u)).next(()=>e.localDocuments.getLocalViewOfDocuments(u,m,g)).next(()=>m)}).then(u=>(e.xs=o,u))}function jN(n,t,e){let s=Vt(),o=Vt();return e.forEach(u=>s=s.add(u)),t.getEntries(n,s).next(u=>{let h=_r();return e.forEach((p,m)=>{const g=u.get(p);m.isFoundDocument()!==g.isFoundDocument()&&(o=o.add(p)),m.isNoDocument()&&m.version.isEqual(St.min())?(t.removeEntry(p,m.readTime),h=h.insert(p,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(t.addEntry(m),h=h.insert(p,m)):ht($g,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",m.version)}),{qs:h,Qs:o}})}function HN(n,t){const e=bt(n);return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=kg),e.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function qN(n,t){const e=bt(n);return e.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return e.Ti.getTargetData(s,t).next(u=>u?(o=u,tt.resolve(o)):e.Ti.allocateTargetId(s).next(h=>(o=new ns(t,h,"TargetPurposeListen",s.currentSequenceNumber),e.Ti.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=e.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(e.xs=e.xs.insert(s.targetId,s),e.Os.set(t,s.targetId)),s})}async function ag(n,t,e){const s=bt(n),o=s.xs.get(t),u=e?"readwrite":"readwrite-primary";try{e||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Ko(h))throw h;ht($g,`Failed to update sequence numbers for target ${t}: ${h}`)}s.xs=s.xs.remove(t),s.Os.delete(o.target)}function tT(n,t,e){const s=bt(n);let o=St.min(),u=Vt();return s.persistence.runTransaction("Execute query","readwrite",h=>function(m,g,E){const A=bt(m),w=A.Os.get(E);return w!==void 0?tt.resolve(A.xs.get(w)):A.Ti.getTargetData(g,E)}(s,h,xi(t)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(h,p.targetId).next(m=>{u=m})}).next(()=>s.Ms.getDocumentsMatchingQuery(h,t,e?o:St.min(),e?u:Vt())).next(p=>(FN(s,Ox(t),p),{documents:p,$s:u})))}function FN(n,t,e){let s=n.Ns.get(t)||St.min();e.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),n.Ns.set(t,s)}class eT{constructor(){this.activeTargetIds=Vx()}js(t){this.activeTargetIds=this.activeTargetIds.add(t)}Hs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}zs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class GN{constructor(){this.xo=new eT,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,s){}addLocalQueryTarget(t,e=!0){return e&&this.xo.js(t),this.Oo[t]||"not-current"}updateQueryState(t,e,s){this.Oo[t]=e}removeLocalQueryTarget(t){this.xo.Hs(t)}isLocalQueryTarget(t){return this.xo.activeTargetIds.has(t)}clearQueryState(t){delete this.Oo[t]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(t){return this.xo.activeTargetIds.has(t)}start(){return this.xo=new eT,Promise.resolve()}handleUserChange(t,e,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{No(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="ConnectivityMonitor";class iT{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(t){this.Qo.push(t)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ht(nT,"Network connectivity changed: AVAILABLE");for(const t of this.Qo)t(0)}qo(){ht(nT,"Network connectivity changed: UNAVAILABLE");for(const t of this.Qo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih=null;function og(){return Ih===null?Ih=function(){return 268435456+Math.round(2147483648*Math.random())}():Ih++,"0x"+Ih.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="RestConnection",KN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YN{get Uo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===sf?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(t,e,s,o,u){const h=og(),p=this.jo(t,e.toUriEncodedString());ht(wm,`Sending RPC '${t}' ${h}:`,p,s);const m={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(m,o,u);const{host:g}=new URL(p),E=ga(g);return this.Jo(t,p,m,s,E).then(A=>(ht(wm,`Received RPC '${t}' ${h}: `,A),A),A=>{throw ko(wm,`RPC '${t}' ${h} failed with error: `,A,"url: ",p,"request:",s),A})}Yo(t,e,s,o,u,h){return this.zo(t,e,s,o,u)}Ho(t,e,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Go}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}jo(t,e){const s=KN[t];return`${this.Ko}/v1/${e}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(t){this.Zo=t.Zo,this.Xo=t.Xo}e_(t){this.t_=t}n_(t){this.r_=t}i_(t){this.s_=t}onMessage(t){this.o_=t}close(){this.Xo()}send(t){this.Zo(t)}__(){this.t_()}a_(){this.r_()}u_(t){this.s_(t)}c_(t){this.o_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="WebChannelConnection";class XN extends YN{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,s,o,u){const h=og();return new Promise((p,m)=>{const g=new uw;g.setWithCredentials(!0),g.listenOnce(cw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Bh.NO_ERROR:const A=g.getResponseJson();ht(rn,`XHR for RPC '${t}' ${h} received:`,JSON.stringify(A)),p(A);break;case Bh.TIMEOUT:ht(rn,`RPC '${t}' ${h} timed out`),m(new gt(it.DEADLINE_EXCEEDED,"Request time out"));break;case Bh.HTTP_ERROR:const w=g.getStatus();if(ht(rn,`RPC '${t}' ${h} failed with status:`,w,"response text:",g.getResponseText()),w>0){let I=g.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const q=function(G){const Z=G.toLowerCase().replace(/_/g,"-");return Object.values(it).indexOf(Z)>=0?Z:it.UNKNOWN}(x.status);m(new gt(q,x.message))}else m(new gt(it.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new gt(it.UNAVAILABLE,"Connection failed."));break;default:At(9055,{l_:t,streamId:h,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{ht(rn,`RPC '${t}' ${h} completed.`)}});const E=JSON.stringify(o);ht(rn,`RPC '${t}' ${h} sending request:`,o),g.send(e,"POST",E,s,15)})}T_(t,e,s){const o=og(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],h=dw(),p=fw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Ho(m.initMessageHeaders,e,s),m.encodeInitMessageHeaders=!0;const E=u.join("");ht(rn,`Creating RPC '${t}' stream ${o}: ${E}`,m);const A=h.createWebChannel(E,m);let w=!1,I=!1;const x=new QN({Zo:U=>{I?ht(rn,`Not sending because RPC '${t}' stream ${o} is closed:`,U):(w||(ht(rn,`Opening RPC '${t}' stream ${o} transport.`),A.open(),w=!0),ht(rn,`RPC '${t}' stream ${o} sending:`,U),A.send(U))},Xo:()=>A.close()}),q=(U,G,Z)=>{U.listen(G,$=>{try{Z($)}catch(rt){setTimeout(()=>{throw rt},0)}})};return q(A,du.EventType.OPEN,()=>{I||(ht(rn,`RPC '${t}' stream ${o} transport opened.`),x.__())}),q(A,du.EventType.CLOSE,()=>{I||(I=!0,ht(rn,`RPC '${t}' stream ${o} transport closed`),x.u_())}),q(A,du.EventType.ERROR,U=>{I||(I=!0,ko(rn,`RPC '${t}' stream ${o} transport errored. Name:`,U.name,"Message:",U.message),x.u_(new gt(it.UNAVAILABLE,"The operation could not be completed")))}),q(A,du.EventType.MESSAGE,U=>{var G;if(!I){const Z=U.data[0];Kt(!!Z,16349);const $=Z,rt=($==null?void 0:$.error)||((G=$[0])===null||G===void 0?void 0:G.error);if(rt){ht(rn,`RPC '${t}' stream ${o} received error:`,rt);const at=rt.status;let ct=function(R){const k=be[R];if(k!==void 0)return Kw(k)}(at),C=rt.message;ct===void 0&&(ct=it.INTERNAL,C="Unknown error status: "+at+" with message "+rt.message),I=!0,x.u_(new gt(ct,C)),A.close()}else ht(rn,`RPC '${t}' stream ${o} received:`,Z),x.c_(Z)}}),q(p,hw.STAT_EVENT,U=>{U.stat===Qm.PROXY?ht(rn,`RPC '${t}' stream ${o} detected buffering proxy`):U.stat===Qm.NOPROXY&&ht(rn,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{x.a_()},0),x}}function Sm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n){return new tN(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(t,e,s=1e3,o=1.5,u=6e4){this.xi=t,this.timerId=e,this.I_=s,this.E_=o,this.d_=u,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(t){this.cancel();const e=Math.floor(this.A_+this.g_()),s=Math.max(0,Date.now()-this.V_),o=Math.max(0,e-s);o>0&&ht("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.A_} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,o,()=>(this.V_=Date.now(),t())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="PersistentStream";class lS{constructor(t,e,s,o,u,h,p,m){this.xi=t,this.y_=s,this.w_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=m,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new oS(t,e)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(t){this.k_(),this.stream.send(t)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(t,e){this.k_(),this.q_(),this.C_.cancel(),this.S_++,t!==4?this.C_.reset():e&&e.code===it.RESOURCE_EXHAUSTED?(yr(e.toString()),yr("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):e&&e.code===it.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.i_(e)}Q_(){}auth(){this.state=1;const t=this.U_(this.S_),e=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.S_===e&&this.K_(s,o)},s=>{t(()=>{const o=new gt(it.UNKNOWN,"Fetching auth token failed: "+s.message);return this.W_(o)})})}K_(t,e){const s=this.U_(this.S_);this.stream=this.G_(t,e),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(o=>{s(()=>this.W_(o))}),this.stream.onMessage(o=>{s(()=>++this.v_==1?this.z_(o):this.onNext(o))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(t){return ht(rT,`close with error: ${t}`),this.stream=null,this.close(4,t)}U_(t){return e=>{this.xi.enqueueAndForget(()=>this.S_===t?e():(ht(rT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WN extends lS{constructor(t,e,s,o,u,h){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,s,o,h),this.serializer=u}G_(t,e){return this.connection.T_("Listen",t,e)}z_(t){return this.onNext(t)}onNext(t){this.C_.reset();const e=iN(this.serializer,t),s=function(u){if(!("targetChange"in u))return St.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?St.min():h.readTime?ki(h.readTime):St.min()}(t);return this.listener.j_(e,s)}H_(t){const e={};e.database=sg(this.serializer),e.addTarget=function(u,h){let p;const m=h.target;if(p=tg(m)?{documents:aN(u,m)}:{query:oN(u,m).gt},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=Xw(u,h.resumeToken);const g=ng(u,h.expectedCount);g!==null&&(p.expectedCount=g)}else if(h.snapshotVersion.compareTo(St.min())>0){p.readTime=hf(u,h.snapshotVersion.toTimestamp());const g=ng(u,h.expectedCount);g!==null&&(p.expectedCount=g)}return p}(this.serializer,t);const s=uN(this.serializer,t);s&&(e.labels=s),this.L_(e)}J_(t){const e={};e.database=sg(this.serializer),e.removeTarget=t,this.L_(e)}}class ZN extends lS{constructor(t,e,s,o,u,h){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,s,o,h),this.serializer=u}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(t,e){return this.connection.T_("Write",t,e)}z_(t){return Kt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Kt(!t.writeResults||t.writeResults.length===0,55816),this.listener.X_()}onNext(t){Kt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.C_.reset();const e=sN(t.writeResults,t.commitTime),s=ki(t.commitTime);return this.listener.ea(s,e)}ta(){const t={};t.database=sg(this.serializer),this.L_(t)}Z_(t){const e={streamToken:this.lastStreamToken,writes:t.map(s=>rN(this.serializer,s))};this.L_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{}class t2 extends JN{constructor(t,e,s,o){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=s,this.serializer=o,this.na=!1}ra(){if(this.na)throw new gt(it.FAILED_PRECONDITION,"The client has already been terminated.")}zo(t,e,s,o){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.zo(t,ig(e,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new gt(it.UNKNOWN,u.toString())})}Yo(t,e,s,o,u){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Yo(t,ig(e,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===it.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new gt(it.UNKNOWN,h.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class e2{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(t){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.aa("Offline")))}set(t){this.la(),this.ia=0,t==="Online"&&(this.oa=!1),this.aa(t)}aa(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ua(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(yr(e),this.oa=!1):ht("OnlineStateTracker",e)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="RemoteStore";class n2{constructor(t,e,s,o,u){this.localStore=t,this.datastore=e,this.asyncQueue=s,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=u,this.Ea.No(h=>{s.enqueueAndForget(async()=>{Aa(this)&&(ht(ca,"Restarting streams for network reachability change."),await async function(m){const g=bt(m);g.Ta.add(4),await Gu(g),g.da.set("Unknown"),g.Ta.delete(4),await Kf(g)}(this))})}),this.da=new e2(s,o)}}async function Kf(n){if(Aa(n))for(const t of n.Ia)await t(!0)}async function Gu(n){for(const t of n.Ia)await t(!1)}function uS(n,t){const e=bt(n);e.Pa.has(t.targetId)||(e.Pa.set(t.targetId,t),Xg(e)?Qg(e):Yo(e).M_()&&Yg(e,t))}function Kg(n,t){const e=bt(n),s=Yo(e);e.Pa.delete(t),s.M_()&&cS(e,t),e.Pa.size===0&&(s.M_()?s.N_():Aa(e)&&e.da.set("Unknown"))}function Yg(n,t){if(n.Aa.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(St.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Yo(n).H_(t)}function cS(n,t){n.Aa.Ke(t),Yo(n).J_(t)}function Qg(n){n.Aa=new Xx({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>n.Pa.get(t)||null,Pt:()=>n.datastore.serializer.databaseId}),Yo(n).start(),n.da._a()}function Xg(n){return Aa(n)&&!Yo(n).F_()&&n.Pa.size>0}function Aa(n){return bt(n).Ta.size===0}function hS(n){n.Aa=void 0}async function i2(n){n.da.set("Online")}async function r2(n){n.Pa.forEach((t,e)=>{Yg(n,t)})}async function s2(n,t){hS(n),Xg(n)?(n.da.ca(t),Qg(n)):n.da.set("Unknown")}async function a2(n,t,e){if(n.da.set("Online"),t instanceof Qw&&t.state===2&&t.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.Pa.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.Pa.delete(p),o.Aa.removeTarget(p))}(n,t)}catch(s){ht(ca,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await df(n,s)}else if(t instanceof Fh?n.Aa.Xe(t):t instanceof Yw?n.Aa.ot(t):n.Aa.nt(t),!e.isEqual(St.min()))try{const s=await aS(n.localStore);e.compareTo(s)>=0&&await function(u,h){const p=u.Aa.It(h);return p.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const E=u.Pa.get(g);E&&u.Pa.set(g,E.withResumeToken(m.resumeToken,h))}}),p.targetMismatches.forEach((m,g)=>{const E=u.Pa.get(m);if(!E)return;u.Pa.set(m,E.withResumeToken(Ze.EMPTY_BYTE_STRING,E.snapshotVersion)),cS(u,m);const A=new ns(E.target,m,g,E.sequenceNumber);Yg(u,A)}),u.remoteSyncer.applyRemoteEvent(p)}(n,e)}catch(s){ht(ca,"Failed to raise snapshot:",s),await df(n,s)}}async function df(n,t,e){if(!Ko(t))throw t;n.Ta.add(1),await Gu(n),n.da.set("Offline"),e||(e=()=>aS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ht(ca,"Retrying IndexedDB access"),await e(),n.Ta.delete(1),await Kf(n)})}function fS(n,t){return t().catch(e=>df(n,e,t))}async function Yf(n){const t=bt(n),e=ms(t);let s=t.ha.length>0?t.ha[t.ha.length-1].batchId:kg;for(;o2(t);)try{const o=await HN(t.localStore,s);if(o===null){t.ha.length===0&&e.N_();break}s=o.batchId,l2(t,o)}catch(o){await df(t,o)}dS(t)&&pS(t)}function o2(n){return Aa(n)&&n.ha.length<10}function l2(n,t){n.ha.push(t);const e=ms(n);e.M_()&&e.Y_&&e.Z_(t.mutations)}function dS(n){return Aa(n)&&!ms(n).F_()&&n.ha.length>0}function pS(n){ms(n).start()}async function u2(n){ms(n).ta()}async function c2(n){const t=ms(n);for(const e of n.ha)t.Z_(e.mutations)}async function h2(n,t,e){const s=n.ha.shift(),o=Bg.from(s,t,e);await fS(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Yf(n)}async function f2(n,t){t&&ms(n).Y_&&await async function(s,o){if(function(h){return Yx(h)&&h!==it.ABORTED}(o.code)){const u=s.ha.shift();ms(s).O_(),await fS(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await Yf(s)}}(n,t),dS(n)&&pS(n)}async function sT(n,t){const e=bt(n);e.asyncQueue.verifyOperationInProgress(),ht(ca,"RemoteStore received new credentials");const s=Aa(e);e.Ta.add(3),await Gu(e),s&&e.da.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ta.delete(3),await Kf(e)}async function d2(n,t){const e=bt(n);t?(e.Ta.delete(2),await Kf(e)):t||(e.Ta.add(2),await Gu(e),e.da.set("Unknown"))}function Yo(n){return n.Ra||(n.Ra=function(e,s,o){const u=bt(e);return u.ra(),new WN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(n.datastore,n.asyncQueue,{e_:i2.bind(null,n),n_:r2.bind(null,n),i_:s2.bind(null,n),j_:a2.bind(null,n)}),n.Ia.push(async t=>{t?(n.Ra.O_(),Xg(n)?Qg(n):n.da.set("Unknown")):(await n.Ra.stop(),hS(n))})),n.Ra}function ms(n){return n.Va||(n.Va=function(e,s,o){const u=bt(e);return u.ra(),new ZN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:u2.bind(null,n),i_:f2.bind(null,n),X_:c2.bind(null,n),ea:h2.bind(null,n)}),n.Ia.push(async t=>{t?(n.Va.O_(),await Yf(n)):(await n.Va.stop(),n.ha.length>0&&(ht(ca,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(t,e,s,o,u){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new os,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,o,u){const h=Date.now()+s,p=new Wg(t,e,h,o,u);return p.start(s),p}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new gt(it.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zg(n,t){if(yr("AsyncQueue",`${t}: ${n}`),Ko(n))return new gt(it.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{static emptySet(t){return new So(t.comparator)}constructor(t){this.comparator=t?(e,s)=>t(e,s)||_t.comparator(e.key,s.key):(e,s)=>_t.comparator(e.key,s.key),this.keyedMap=pu(),this.sortedSet=new he(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,s)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof So)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;e.hasNext();){const o=e.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const s=new So;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=e,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(){this.ma=new he(_t.comparator)}track(t){const e=t.doc.key,s=this.ma.get(e);s?t.type!==0&&s.type===3?this.ma=this.ma.insert(e,t):t.type===3&&s.type!==1?this.ma=this.ma.insert(e,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ma=this.ma.insert(e,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ma=this.ma.insert(e,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ma=this.ma.remove(e):t.type===1&&s.type===2?this.ma=this.ma.insert(e,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ma=this.ma.insert(e,{type:2,doc:t.doc}):At(63341,{Vt:t,fa:s}):this.ma=this.ma.insert(e,t)}ga(){const t=[];return this.ma.inorderTraversal((e,s)=>{t.push(s)}),t}}class Uo{constructor(t,e,s,o,u,h,p,m,g){this.query=t,this.docs=e,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(t,e,s,o,u){const h=[];return e.forEach(p=>{h.push({type:0,doc:p})}),new Uo(t,e,So.emptySet(e),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jf(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,s=t.docChanges;if(e.length!==s.length)return!1;for(let o=0;o<e.length;o++)if(e[o].type!==s[o].type||!e[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(t=>t.Sa())}}class m2{constructor(){this.queries=oT(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(e,s){const o=bt(e),u=o.queries;o.queries=oT(),u.forEach((h,p)=>{for(const m of p.ya)m.onError(s)})})(this,new gt(it.ABORTED,"Firestore shutting down"))}}function oT(){return new Ea(n=>Pw(n),jf)}async function g2(n,t){const e=bt(n);let s=3;const o=t.query;let u=e.queries.get(o);u?!u.wa()&&t.Sa()&&(s=2):(u=new p2,s=t.Sa()?0:1);try{switch(s){case 0:u.pa=await e.onListen(o,!0);break;case 1:u.pa=await e.onListen(o,!1);break;case 2:await e.onFirstRemoteStoreListen(o)}}catch(h){const p=Zg(h,`Initialization of query '${vo(t.query)}' failed`);return void t.onError(p)}e.queries.set(o,u),u.ya.push(t),t.Da(e.onlineState),u.pa&&t.va(u.pa)&&Jg(e)}async function y2(n,t){const e=bt(n),s=t.query;let o=3;const u=e.queries.get(s);if(u){const h=u.ya.indexOf(t);h>=0&&(u.ya.splice(h,1),u.ya.length===0?o=t.Sa()?0:1:!u.wa()&&t.Sa()&&(o=2))}switch(o){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function _2(n,t){const e=bt(n);let s=!1;for(const o of t){const u=o.query,h=e.queries.get(u);if(h){for(const p of h.ya)p.va(o)&&(s=!0);h.pa=o}}s&&Jg(e)}function v2(n,t,e){const s=bt(n),o=s.queries.get(t);if(o)for(const u of o.ya)u.onError(e);s.queries.delete(t)}function Jg(n){n.ba.forEach(t=>{t.next()})}var lg,lT;(lT=lg||(lg={})).Ca="default",lT.Cache="cache";class E2{constructor(t,e,s){this.query=t,this.Fa=e,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=s||{}}va(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new Uo(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Ma?this.Oa(t)&&(this.Fa.next(t),e=!0):this.Na(t,this.onlineState)&&(this.Ba(t),e=!0),this.xa=t,e}onError(t){this.Fa.error(t)}Da(t){this.onlineState=t;let e=!1;return this.xa&&!this.Ma&&this.Na(this.xa,t)&&(this.Ba(this.xa),e=!0),e}Na(t,e){if(!t.fromCache||!this.Sa())return!0;const s=e!=="Offline";return(!this.options.La||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Oa(t){if(t.docChanges.length>0)return!0;const e=this.xa&&this.xa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Ba(t){t=Uo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Ma=!0,this.Fa.next(t)}Sa(){return this.options.source!==lg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(t){this.key=t}}class gS{constructor(t){this.key=t}}class T2{constructor(t,e){this.query=t,this.Ga=e,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Vt(),this.mutatedKeys=Vt(),this.Ha=Vw(t),this.Ja=new So(this.Ha)}get Ya(){return this.Ga}Za(t,e){const s=e?e.Xa:new aT,o=e?e.Ja:this.Ja;let u=e?e.mutatedKeys:this.mutatedKeys,h=o,p=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,g=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,A)=>{const w=o.get(E),I=Hf(this.query,A)?A:null,x=!!w&&this.mutatedKeys.has(w.key),q=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let U=!1;w&&I?w.data.isEqual(I.data)?x!==q&&(s.track({type:3,doc:I}),U=!0):this.eu(w,I)||(s.track({type:2,doc:I}),U=!0,(m&&this.Ha(I,m)>0||g&&this.Ha(I,g)<0)&&(p=!0)):!w&&I?(s.track({type:0,doc:I}),U=!0):w&&!I&&(s.track({type:1,doc:w}),U=!0,(m||g)&&(p=!0)),U&&(I?(h=h.add(I),u=q?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{Ja:h,Xa:s,Cs:p,mutatedKeys:u}}eu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,s,o){const u=this.Ja;this.Ja=t.Ja,this.mutatedKeys=t.mutatedKeys;const h=t.Xa.ga();h.sort((E,A)=>function(I,x){const q=U=>{switch(U){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return At(20277,{Vt:U})}};return q(I)-q(x)}(E.type,A.type)||this.Ha(E.doc,A.doc)),this.tu(s),o=o!=null&&o;const p=e&&!o?this.nu():[],m=this.ja.size===0&&this.current&&!o?1:0,g=m!==this.za;return this.za=m,h.length!==0||g?{snapshot:new Uo(this.query,t.Ja,u,h,t.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),ru:p}:{ru:p}}Da(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new aT,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(t){return!this.Ga.has(t)&&!!this.Ja.has(t)&&!this.Ja.get(t).hasLocalMutations}tu(t){t&&(t.addedDocuments.forEach(e=>this.Ga=this.Ga.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ga=this.Ga.delete(e)),this.current=t.current)}nu(){if(!this.current)return[];const t=this.ja;this.ja=Vt(),this.Ja.forEach(s=>{this.iu(s.key)&&(this.ja=this.ja.add(s.key))});const e=[];return t.forEach(s=>{this.ja.has(s)||e.push(new gS(s))}),this.ja.forEach(s=>{t.has(s)||e.push(new mS(s))}),e}su(t){this.Ga=t.$s,this.ja=Vt();const e=this.Za(t.documents);return this.applyChanges(e,!0)}ou(){return Uo.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const ty="SyncEngine";class A2{constructor(t,e,s){this.query=t,this.targetId=e,this.view=s}}class w2{constructor(t){this.key=t,this._u=!1}}class S2{constructor(t,e,s,o,u,h){this.localStore=t,this.remoteStore=e,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.au={},this.uu=new Ea(p=>Pw(p),jf),this.cu=new Map,this.lu=new Set,this.hu=new he(_t.comparator),this.Pu=new Map,this.Tu=new qg,this.Iu={},this.Eu=new Map,this.du=Lo.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function b2(n,t,e=!0){const s=AS(n);let o;const u=s.uu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.ou()):o=await yS(s,t,e,!0),o}async function R2(n,t){const e=AS(n);await yS(e,t,!0,!1)}async function yS(n,t,e,s){const o=await qN(n.localStore,xi(t)),u=o.targetId,h=n.sharedClientState.addLocalQueryTarget(u,e);let p;return s&&(p=await I2(n,t,u,h==="current",o.resumeToken)),n.isPrimaryClient&&e&&uS(n.remoteStore,o),p}async function I2(n,t,e,s,o){n.Ru=(A,w,I)=>async function(q,U,G,Z){let $=U.view.Za(G);$.Cs&&($=await tT(q.localStore,U.query,!1).then(({documents:C})=>U.view.Za(C,$)));const rt=Z&&Z.targetChanges.get(U.targetId),at=Z&&Z.targetMismatches.get(U.targetId)!=null,ct=U.view.applyChanges($,q.isPrimaryClient,rt,at);return cT(q,U.targetId,ct.ru),ct.snapshot}(n,A,w,I);const u=await tT(n.localStore,t,!0),h=new T2(t,u.$s),p=h.Za(u.documents),m=Fu.createSynthesizedTargetChangeForCurrentChange(e,s&&n.onlineState!=="Offline",o),g=h.applyChanges(p,n.isPrimaryClient,m);cT(n,e,g.ru);const E=new A2(t,e,h);return n.uu.set(t,E),n.cu.has(e)?n.cu.get(e).push(t):n.cu.set(e,[t]),g.snapshot}async function C2(n,t,e){const s=bt(n),o=s.uu.get(t),u=s.cu.get(o.targetId);if(u.length>1)return s.cu.set(o.targetId,u.filter(h=>!jf(h,t))),void s.uu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await ag(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),e&&Kg(s.remoteStore,o.targetId),ug(s,o.targetId)}).catch($o)):(ug(s,o.targetId),await ag(s.localStore,o.targetId,!0))}async function D2(n,t){const e=bt(n),s=e.uu.get(t),o=e.cu.get(s.targetId);e.isPrimaryClient&&o.length===1&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),Kg(e.remoteStore,s.targetId))}async function O2(n,t,e){const s=L2(n);try{const o=await function(h,p){const m=bt(h),g=Me.now(),E=p.reduce((I,x)=>I.add(x.key),Vt());let A,w;return m.persistence.runTransaction("Locally write mutations","readwrite",I=>{let x=_r(),q=Vt();return m.Bs.getEntries(I,E).next(U=>{x=U,x.forEach((G,Z)=>{Z.isValidDocument()||(q=q.add(G))})}).next(()=>m.localDocuments.getOverlayedDocuments(I,x)).next(U=>{A=U;const G=[];for(const Z of p){const $=qx(Z,A.get(Z.key).overlayedDocument);$!=null&&G.push(new Ta(Z.key,$,Iw($.value.mapValue),Ni.exists(!0)))}return m.mutationQueue.addMutationBatch(I,g,G,p)}).next(U=>{w=U;const G=U.applyToLocalDocumentSet(A,q);return m.documentOverlayCache.saveOverlays(I,U.batchId,G)})}).then(()=>({batchId:w.batchId,changes:Uw(A)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,m){let g=h.Iu[h.currentUser.toKey()];g||(g=new he(xt)),g=g.insert(p,m),h.Iu[h.currentUser.toKey()]=g}(s,o.batchId,e),await $u(s,o.changes),await Yf(s.remoteStore)}catch(o){const u=Zg(o,"Failed to persist write");e.reject(u)}}async function _S(n,t){const e=bt(n);try{const s=await BN(e.localStore,t);t.targetChanges.forEach((o,u)=>{const h=e.Pu.get(u);h&&(Kt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h._u=!0:o.modifiedDocuments.size>0?Kt(h._u,14607):o.removedDocuments.size>0&&(Kt(h._u,42227),h._u=!1))}),await $u(e,s,t)}catch(s){await $o(s)}}function uT(n,t,e){const s=bt(n);if(s.isPrimaryClient&&e===0||!s.isPrimaryClient&&e===1){const o=[];s.uu.forEach((u,h)=>{const p=h.view.Da(t);p.snapshot&&o.push(p.snapshot)}),function(h,p){const m=bt(h);m.onlineState=p;let g=!1;m.queries.forEach((E,A)=>{for(const w of A.ya)w.Da(p)&&(g=!0)}),g&&Jg(m)}(s.eventManager,t),o.length&&s.au.j_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function x2(n,t,e){const s=bt(n);s.sharedClientState.updateQueryState(t,"rejected",e);const o=s.Pu.get(t),u=o&&o.key;if(u){let h=new he(_t.comparator);h=h.insert(u,an.newNoDocument(u,St.min()));const p=Vt().add(u),m=new Gf(St.min(),new Map,new he(xt),h,p);await _S(s,m),s.hu=s.hu.remove(u),s.Pu.delete(t),ey(s)}else await ag(s.localStore,t,!1).then(()=>ug(s,t,e)).catch($o)}async function N2(n,t){const e=bt(n),s=t.batch.batchId;try{const o=await zN(e.localStore,t);ES(e,s,null),vS(e,s),e.sharedClientState.updateMutationState(s,"acknowledged"),await $u(e,o)}catch(o){await $o(o)}}async function k2(n,t,e){const s=bt(n);try{const o=await function(h,p){const m=bt(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return m.mutationQueue.lookupMutationBatch(g,p).next(A=>(Kt(A!==null,37113),E=A.keys(),m.mutationQueue.removeMutationBatch(g,A))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,E,p)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>m.localDocuments.getDocuments(g,E))})}(s.localStore,t);ES(s,t,e),vS(s,t),s.sharedClientState.updateMutationState(t,"rejected",e),await $u(s,o)}catch(o){await $o(o)}}function vS(n,t){(n.Eu.get(t)||[]).forEach(e=>{e.resolve()}),n.Eu.delete(t)}function ES(n,t,e){const s=bt(n);let o=s.Iu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(e?u.reject(e):u.resolve(),o=o.remove(t)),s.Iu[s.currentUser.toKey()]=o}}function ug(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const s of n.cu.get(t))n.uu.delete(s),e&&n.au.Vu(s,e);n.cu.delete(t),n.isPrimaryClient&&n.Tu.Hr(t).forEach(s=>{n.Tu.containsKey(s)||TS(n,s)})}function TS(n,t){n.lu.delete(t.path.canonicalString());const e=n.hu.get(t);e!==null&&(Kg(n.remoteStore,e),n.hu=n.hu.remove(t),n.Pu.delete(e),ey(n))}function cT(n,t,e){for(const s of e)s instanceof mS?(n.Tu.addReference(s.key,t),M2(n,s)):s instanceof gS?(ht(ty,"Document no longer in limbo: "+s.key),n.Tu.removeReference(s.key,t),n.Tu.containsKey(s.key)||TS(n,s.key)):At(19791,{mu:s})}function M2(n,t){const e=t.key,s=e.path.canonicalString();n.hu.get(e)||n.lu.has(s)||(ht(ty,"New document in limbo: "+e),n.lu.add(s),ey(n))}function ey(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const t=n.lu.values().next().value;n.lu.delete(t);const e=new _t(oe.fromString(t)),s=n.du.next();n.Pu.set(s,new w2(e)),n.hu=n.hu.insert(e,s),uS(n.remoteStore,new ns(xi(Mw(e.path)),s,"TargetPurposeLimboResolution",Lf.le))}}async function $u(n,t,e){const s=bt(n),o=[],u=[],h=[];s.uu.isEmpty()||(s.uu.forEach((p,m)=>{h.push(s.Ru(m,t,e).then(g=>{var E;if((g||e)&&s.isPrimaryClient){const A=g?!g.fromCache:(E=e==null?void 0:e.targetChanges.get(m.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(m.targetId,A?"current":"not-current")}if(g){o.push(g);const A=Gg.Rs(m.targetId,g);u.push(A)}}))}),await Promise.all(h),s.au.j_(o),await async function(m,g){const E=bt(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>tt.forEach(g,w=>tt.forEach(w.ds,I=>E.persistence.referenceDelegate.addReference(A,w.targetId,I)).next(()=>tt.forEach(w.As,I=>E.persistence.referenceDelegate.removeReference(A,w.targetId,I)))))}catch(A){if(!Ko(A))throw A;ht($g,"Failed to update sequence numbers: "+A)}for(const A of g){const w=A.targetId;if(!A.fromCache){const I=E.xs.get(w),x=I.snapshotVersion,q=I.withLastLimboFreeSnapshotVersion(x);E.xs=E.xs.insert(w,q)}}}(s.localStore,u))}async function P2(n,t){const e=bt(n);if(!e.currentUser.isEqual(t)){ht(ty,"User change. New user:",t.toKey());const s=await sS(e.localStore,t);e.currentUser=t,function(u,h){u.Eu.forEach(p=>{p.forEach(m=>{m.reject(new gt(it.CANCELLED,h))})}),u.Eu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await $u(e,s.ks)}}function V2(n,t){const e=bt(n),s=e.Pu.get(t);if(s&&s._u)return Vt().add(s.key);{let o=Vt();const u=e.cu.get(t);if(!u)return o;for(const h of u){const p=e.uu.get(h);o=o.unionWith(p.view.Ya)}return o}}function AS(n){const t=bt(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=_S.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=V2.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=x2.bind(null,t),t.au.j_=_2.bind(null,t.eventManager),t.au.Vu=v2.bind(null,t.eventManager),t}function L2(n){const t=bt(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=N2.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=k2.bind(null,t),t}class pf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=$f(t.databaseInfo.databaseId),this.sharedClientState=this.pu(t),this.persistence=this.yu(t),await this.persistence.start(),this.localStore=this.wu(t),this.gcScheduler=this.Su(t,this.localStore),this.indexBackfillerScheduler=this.bu(t,this.localStore)}Su(t,e){return null}bu(t,e){return null}wu(t){return UN(this.persistence,new PN,t.initialUser,this.serializer)}yu(t){return new rS(Fg.fi,this.serializer)}pu(t){return new GN}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pf.provider={build:()=>new pf};class U2 extends pf{constructor(t){super(),this.cacheSizeBytes=t}Su(t,e){Kt(this.persistence.referenceDelegate instanceof ff,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new EN(s,t.asyncQueue,e)}yu(t){const e=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new rS(s=>ff.fi(s,e),this.serializer)}}class cg{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uT(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=P2.bind(null,this.syncEngine),await d2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new m2}()}createDatastore(t){const e=$f(t.databaseInfo.databaseId),s=function(u){return new XN(u)}(t.databaseInfo);return function(u,h,p,m){return new t2(u,h,p,m)}(t.authCredentials,t.appCheckCredentials,s,e)}createRemoteStore(t){return function(s,o,u,h,p){return new n2(s,o,u,h,p)}(this.localStore,this.datastore,t.asyncQueue,e=>uT(this.syncEngine,e,0),function(){return iT.C()?new iT:new $N}())}createSyncEngine(t,e){return function(o,u,h,p,m,g,E){const A=new S2(o,u,h,p,m,g);return E&&(A.Au=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(o){const u=bt(o);ht(ca,"RemoteStore shutting down."),u.Ta.add(5),await Gu(u),u.Ea.shutdown(),u.da.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}cg.provider={build:()=>new cg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.vu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.vu(this.observer.error,t):yr("Uncaught Error in snapshot listener:",t.toString()))}Cu(){this.muted=!0}vu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="FirestoreClient";class B2{constructor(t,e,s,o,u){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=s,this.databaseInfo=o,this.user=sn.UNAUTHENTICATED,this.clientId=yw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ht(gs,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ht(gs,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new os;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const s=Zg(e,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function bm(n,t){n.asyncQueue.verifyOperationInProgress(),ht(gs,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let s=e.initialUser;n.setCredentialChangeListener(async o=>{s.isEqual(o)||(await sS(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function hT(n,t){n.asyncQueue.verifyOperationInProgress();const e=await j2(n);ht(gs,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(s=>sT(t.remoteStore,s)),n.setAppCheckTokenChangeListener((s,o)=>sT(t.remoteStore,o)),n._onlineComponents=t}async function j2(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ht(gs,"Using user provided OfflineComponentProvider");try{await bm(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(o){return o.name==="FirebaseError"?o.code===it.FAILED_PRECONDITION||o.code===it.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(e))throw e;ko("Error using user provided cache. Falling back to memory cache: "+e),await bm(n,new pf)}}else ht(gs,"Using default OfflineComponentProvider"),await bm(n,new U2(void 0));return n._offlineComponents}async function wS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ht(gs,"Using user provided OnlineComponentProvider"),await hT(n,n._uninitializedComponentsProvider._online)):(ht(gs,"Using default OnlineComponentProvider"),await hT(n,new cg))),n._onlineComponents}function H2(n){return wS(n).then(t=>t.syncEngine)}async function q2(n){const t=await wS(n),e=t.eventManager;return e.onListen=b2.bind(null,t.syncEngine),e.onUnlisten=C2.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=R2.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=D2.bind(null,t.syncEngine),e}function F2(n,t,e={}){const s=new os;return n.asyncQueue.enqueueAndForget(async()=>function(u,h,p,m,g){const E=new z2({next:w=>{E.Cu(),h.enqueueAndForget(()=>y2(u,A)),w.fromCache&&m.source==="server"?g.reject(new gt(it.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),A=new E2(p,E,{includeMetadataChanges:!0,La:!0});return g2(u,A)}(await q2(n),n.asyncQueue,t,e,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(n,t,e){if(!e)throw new gt(it.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function G2(n,t,e,s){if(t===!0&&s===!0)throw new gt(it.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function dT(n){if(!_t.isDocumentKey(n))throw new gt(it.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pT(n){if(_t.isDocumentKey(n))throw new gt(it.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ny(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":At(12329,{type:typeof n})}function Pu(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new gt(it.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ny(n);throw new gt(it.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="firestore.googleapis.com",mT=!0;class gT{constructor(t){var e,s;if(t.host===void 0){if(t.ssl!==void 0)throw new gt(it.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=RS,this.ssl=mT}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:mT;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=iS;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<_N)throw new gt(it.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}G2("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=SS((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new gt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new gt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new gt(it.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qf{constructor(t,e,s,o){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gT({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new gt(it.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new gt(it.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gT(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new YO;switch(s.type){case"firstParty":return new ZO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new gt(it.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=fT.get(e);s&&(ht("ComponentProvider","Removing Datastore"),fT.delete(e),s.terminate())}(this),Promise.resolve()}}function $2(n,t,e,s={}){var o;n=Pu(n,Qf);const u=ga(t),h=n._getSettings(),p=Object.assign(Object.assign({},h),{emulatorOptions:n._getEmulatorOptions()}),m=`${t}:${e}`;u&&(Dg(`https://${m}`),Og("Firestore",!0)),h.host!==RS&&h.host!==m&&ko("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},h),{host:m,ssl:u,emulatorOptions:s});if(!cs(g,p)&&(n._setSettings(g),s.mockUserToken)){let E,A;if(typeof s.mockUserToken=="string")E=s.mockUserToken,A=sn.MOCK_USER;else{E=ZA(s.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new gt(it.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new sn(w)}n._authCredentials=new QO(new mw(E,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Xf(this.firestore,t,this._query)}}class ui{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ui(this.firestore,t,this._key)}}class ls extends Xf{constructor(t,e,s){super(t,e,Mw(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ui(this.firestore,null,new _t(t))}withConverter(t){return new ls(this.firestore,t,this._path)}}function iy(n,t,...e){if(n=Fe(n),bS("collection","path",t),n instanceof Qf){const s=oe.fromString(t,...e);return pT(s),new ls(n,null,s)}{if(!(n instanceof ui||n instanceof ls))throw new gt(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(t,...e));return pT(s),new ls(n.firestore,null,s)}}function IS(n,t,...e){if(n=Fe(n),arguments.length===1&&(t=yw.newId()),bS("doc","path",t),n instanceof Qf){const s=oe.fromString(t,...e);return dT(s),new ui(n,null,new _t(s))}{if(!(n instanceof ui||n instanceof ls))throw new gt(it.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(oe.fromString(t,...e));return dT(s),new ui(n.firestore,n instanceof ls?n.converter:null,new _t(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT="AsyncQueue";class _T{constructor(t=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new oS(this,"async_queue_retry"),this.ec=()=>{const s=Sm();s&&ht(yT,"Visibility state changed to "+s.visibilityState),this.C_.p_()},this.tc=t;const e=Sm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.nc(),this.rc(t)}enterRestrictedMode(t){if(!this.ju){this.ju=!0,this.Zu=t||!1;const e=Sm();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.ec)}}enqueue(t){if(this.nc(),this.ju)return new Promise(()=>{});const e=new os;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.zu.push(t),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(t){if(!Ko(t))throw t;ht(yT,"Operation failed with retryable error: "+t)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(t){const e=this.tc.then(()=>(this.Yu=!0,t().catch(s=>{throw this.Ju=s,this.Yu=!1,yr("INTERNAL UNHANDLED ERROR: ",vT(s)),s}).then(s=>(this.Yu=!1,s))));return this.tc=e,e}enqueueAfterDelay(t,e,s){this.nc(),this.Xu.indexOf(t)>-1&&(e=0);const o=Wg.createAndSchedule(this,t,e,s,u=>this.oc(u));return this.Hu.push(o),o}nc(){this.Ju&&At(47125,{_c:vT(this.Ju)})}verifyOperationInProgress(){}async ac(){let t;do t=this.tc,await t;while(t!==this.tc)}uc(t){for(const e of this.Hu)if(e.timerId===t)return!0;return!1}cc(t){return this.ac().then(()=>{this.Hu.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.Hu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.ac()})}lc(t){this.Xu.push(t)}oc(t){const e=this.Hu.indexOf(t);this.Hu.splice(e,1)}}function vT(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Wf extends Qf{constructor(t,e,s,o){super(t,e,s,o),this.type="firestore",this._queue=new _T,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new _T(t),this._firestoreClient=void 0,await t}}}function K2(n,t){const e=typeof n=="object"?n:Vf(),s=typeof n=="string"?n:sf,o=ys(e,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=QA("firestore");u&&$2(o,...u)}return o}function CS(n){if(n._terminated)throw new gt(it.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Y2(n),n._firestoreClient}function Y2(n){var t,e,s;const o=n._freezeSettings(),u=function(p,m,g,E){return new dx(p,m,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,SS(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((e=o.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new B2(n._authCredentials,n._appCheckCredentials,n._queue,u,n._componentsProvider&&function(p){const m=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(m),_online:m}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zo(Ze.fromBase64String(t))}catch(e){throw new gt(it.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new zo(Ze.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new gt(it.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new gt(it.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new gt(it.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return xt(this._lat,t._lat)||xt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2=/^__.*__$/;class X2{constructor(t,e,s){this.data=t,this.fieldMask=e,this.fieldTransforms=s}toMutation(t,e){return this.fieldMask!==null?new Ta(t,this.data,this.fieldMask,e,this.fieldTransforms):new qu(t,this.data,e,this.fieldTransforms)}}function OS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw At(40011,{hc:n})}}class oy{constructor(t,e,s,o,u,h){this.settings=t,this.databaseId=e,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Pc(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(t){return new oy(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Tc({path:s,Ec:!1});return o.dc(t),o}Ac(t){var e;const s=(e=this.path)===null||e===void 0?void 0:e.child(t),o=this.Tc({path:s,Ec:!1});return o.Pc(),o}Rc(t){return this.Tc({path:void 0,Ec:!0})}Vc(t){return mf(t,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pc(){if(this.path)for(let t=0;t<this.path.length;t++)this.dc(this.path.get(t))}dc(t){if(t.length===0)throw this.Vc("Document fields must not be empty");if(OS(this.hc)&&Q2.test(t))throw this.Vc('Document fields cannot begin and end with "__"')}}class W2{constructor(t,e,s){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=s||$f(t)}gc(t,e,s,o=!1){return new oy({hc:t,methodName:e,fc:s,path:We.emptyPath(),Ec:!1,mc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Z2(n){const t=n._freezeSettings(),e=$f(n._databaseId);return new W2(n._databaseId,!!t.ignoreUndefinedProperties,e)}function J2(n,t,e,s,o,u={}){const h=n.gc(u.merge||u.mergeFields?2:0,t,e,o);MS("Data must be an object, but it was:",h,s);const p=NS(s,h);let m,g;if(u.merge)m=new si(h.fieldMask),g=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const w=tk(t,A,e);if(!h.contains(w))throw new gt(it.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);nk(E,w)||E.push(w)}m=new si(E),g=h.fieldTransforms.filter(A=>m.covers(A.field))}else m=null,g=h.fieldTransforms;return new X2(new Yn(p),m,g)}function xS(n,t){if(kS(n=Fe(n)))return MS("Unsupported field value:",t,n),NS(n,t);if(n instanceof DS)return function(s,o){if(!OS(o.hc))throw o.Vc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Vc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Ec&&t.hc!==4)throw t.Vc("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let m=xS(p,o.Rc(h));m==null&&(m={nullValue:"NULL_VALUE"}),u.push(m),h++}return{arrayValue:{values:u}}}(n,t)}return function(s,o){if((s=Fe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Lx(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=Me.fromDate(s);return{timestampValue:hf(o.serializer,u)}}if(s instanceof Me){const u=new Me(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:hf(o.serializer,u)}}if(s instanceof sy)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof zo)return{bytesValue:Xw(o.serializer,s._byteString)};if(s instanceof ui){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Vc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Hg(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof ay)return function(h,p){return{mapValue:{fields:{[bw]:{stringValue:Rw},[af]:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.Vc("VectorValues must only contain numeric values.");return Ug(p.serializer,g)})}}}}}}(s,o);throw o.Vc(`Unsupported field value: ${ny(s)}`)}(n,t)}function NS(n,t){const e={};return vw(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):va(n,(s,o)=>{const u=xS(o,t.Ic(s));u!=null&&(e[s]=u)}),{mapValue:{fields:e}}}function kS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Me||n instanceof sy||n instanceof zo||n instanceof ui||n instanceof DS||n instanceof ay)}function MS(n,t,e){if(!kS(e)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(e)){const s=ny(e);throw s==="an object"?t.Vc(n+" a custom object"):t.Vc(n+" "+s)}}function tk(n,t,e){if((t=Fe(t))instanceof ry)return t._internalPath;if(typeof t=="string")return PS(n,t);throw mf("Field path arguments must be of type string or ",n,!1,void 0,e)}const ek=new RegExp("[~\\*/\\[\\]]");function PS(n,t,e){if(t.search(ek)>=0)throw mf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ry(...t.split("."))._internalPath}catch{throw mf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function mf(n,t,e,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${t}() called with invalid data`;e&&(p+=" (via `toFirestore()`)"),p+=". ";let m="";return(u||h)&&(m+=" (found",u&&(m+=` in field ${s}`),h&&(m+=` in document ${o}`),m+=")"),new gt(it.INVALID_ARGUMENT,p+n+m)}function nk(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(t,e,s,o,u){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ui(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ik(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(LS("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ik extends VS{data(){return super.data()}}function LS(n,t){return typeof t=="string"?PS(n,t):t instanceof ry?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new gt(it.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sk{convertValue(t,e="none"){switch(ps(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ee(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ds(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw At(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const s={};return va(t,(o,u)=>{s[o]=this.convertValue(u,e)}),s}convertVectorValue(t){var e,s,o;const u=(o=(s=(e=t.fields)===null||e===void 0?void 0:e[af].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>Ee(h.doubleValue));return new ay(u)}convertGeoPoint(t){return new sy(Ee(t.latitude),Ee(t.longitude))}convertArray(t,e){return(t.values||[]).map(s=>this.convertValue(s,e))}convertServerTimestamp(t,e){switch(e){case"previous":const s=zf(t);return s==null?null:this.convertValue(s,e);case"estimate":return this.convertTimestamp(Ou(t));default:return null}}convertTimestamp(t){const e=fs(t);return new Me(e.seconds,e.nanos)}convertDocumentKey(t,e){const s=oe.fromString(t);Kt(nS(s),9688,{name:t});const o=new xu(s.get(1),s.get(3)),u=new _t(s.popFirst(5));return o.isEqual(e)||yr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(n,t,e){let s;return s=n?n.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ok extends VS{constructor(t,e,s,o,u,h){super(t,e,s,o,h),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Gh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(LS("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}}class Gh extends ok{data(t={}){return super.data(t)}}class lk{constructor(t,e,s,o){this._firestore=t,this._userDataWriter=e,this._snapshot=o,this.metadata=new Ch(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new Gh(this._firestore,this._userDataWriter,s.key,s,new Ch(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new gt(it.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const m=new Gh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ch(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const m=new Gh(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Ch(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let g=-1,E=-1;return p.type!==0&&(g=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),E=h.indexOf(p.doc.key)),{type:uk(p.type),doc:m,oldIndex:g,newIndex:E}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function uk(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return At(61501,{type:n})}}class ck extends sk{constructor(t){super(),this.firestore=t}convertBytes(t){return new zo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ui(this.firestore,null,e)}}function US(n){n=Pu(n,Xf);const t=Pu(n.firestore,Wf),e=CS(t),s=new ck(t);return rk(n._query),F2(e,n._query).then(o=>new lk(t,s,n,o))}function hk(n){return zS(Pu(n.firestore,Wf),[new zg(n._key,Ni.none())])}function fk(n,t){const e=Pu(n.firestore,Wf),s=IS(n),o=ak(n.converter,t);return zS(e,[J2(Z2(n.firestore),"addDoc",s._key,o,n.converter!==null,{}).toMutation(s._key,Ni.exists(!1))]).then(()=>s)}function zS(n,t){return function(s,o){const u=new os;return s.asyncQueue.enqueueAndForget(async()=>O2(await H2(s),o,u)),u.promise}(CS(n),t)}(function(t,e=!0){(function(o){Go=o})(_a),ci(new Xn("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new Wf(new XO(s.getProvider("auth-internal")),new JO(h,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new gt(it.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xu(g.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:e},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),vn(SE,bE,t),vn(SE,bE,"esm2017")})();var dk="firebase",pk="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(dk,pk,"app");function BS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mk=BS,jS=new ya("auth","Firebase",BS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=new Pf("@firebase/auth");function gk(n,...t){gf.logLevel<=Pt.WARN&&gf.warn(`Auth (${_a}): ${n}`,...t)}function $h(n,...t){gf.logLevel<=Pt.ERROR&&gf.error(`Auth (${_a}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n,...t){throw ly(n,...t)}function Mi(n,...t){return ly(n,...t)}function HS(n,t,e){const s=Object.assign(Object.assign({},mk()),{[t]:e});return new ya("auth","Firebase",s).create(t,{appName:n.name})}function us(n){return HS(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ly(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return jS.create(n,...t)}function Tt(n,t,...e){if(!n)throw ly(t,...e)}function fr(n){const t="INTERNAL ASSERTION FAILED: "+n;throw $h(t),new Error(t)}function vr(n,t){n||fr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function yk(){return ET()==="http:"||ET()==="https:"}function ET(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yk()||JA()||"connection"in navigator)?navigator.onLine:!0}function vk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,e){this.shortDelay=t,this.longDelay=e,vr(e>t,"Short delay should be less than long delay!"),this.isMobile=wD()||RD()}get(){return _k()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(n,t){vr(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ak=new Ku(3e4,6e4);function wa(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function _s(n,t,e,s,o={}){return FS(n,o,async()=>{let u={},h={};s&&(t==="GET"?h=s:u={body:JSON.stringify(s)});const p=Hu(Object.assign({key:n.config.apiKey},h)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:t,headers:m},u);return bD()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&ga(n.emulatorConfig.host)&&(g.credentials="include"),qS.fetch()(await GS(n,n.config.apiHost,e,p),g)})}async function FS(n,t,e){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ek),t);try{const o=new Sk(n),u=await Promise.race([e(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw Dh(n,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dh(n,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Dh(n,"email-already-in-use",h);if(m==="USER_DISABLED")throw Dh(n,"user-disabled",h);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw HS(n,E,g);hi(n,E)}}catch(o){if(o instanceof Wn)throw o;hi(n,"network-request-failed",{message:String(o)})}}async function Zf(n,t,e,s,o={}){const u=await _s(n,t,e,s,o);return"mfaPendingCredential"in u&&hi(n,"multi-factor-auth-required",{_serverResponse:u}),u}async function GS(n,t,e,s){const o=`${t}${e}?${s}`,u=n,h=u.config.emulator?uy(n.config,o):`${n.config.apiScheme}://${o}`;return Tk.includes(e)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}function wk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Sk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(Mi(this.auth,"network-request-failed")),Ak.get())})}}function Dh(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const o=Mi(n,t,s);return o.customData._tokenResponse=e,o}function TT(n){return n!==void 0&&n.enterprise!==void 0}class bk{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return wk(e.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Rk(n,t){return _s(n,"GET","/v2/recaptchaConfig",wa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(n,t){return _s(n,"POST","/v1/accounts:delete",t)}async function yf(n,t){return _s(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Ck(n,t=!1){const e=Fe(n),s=await e.getIdToken(t),o=cy(s);Tt(o&&o.exp&&o.auth_time&&o.iat,e.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Au(Rm(o.auth_time)),issuedAtTime:Au(Rm(o.iat)),expirationTime:Au(Rm(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Rm(n){return Number(n)*1e3}function cy(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return $h("JWT malformed, contained fewer than 3 sections"),null;try{const o=KA(e);return o?JSON.parse(o):($h("Failed to decode base64 JWT payload"),null)}catch(o){return $h("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function AT(n){const t=cy(n);return Tt(t,"internal-error"),Tt(typeof t.exp<"u","internal-error"),Tt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof Wn&&Dk(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Dk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Au(this.lastLoginAt),this.creationTime=Au(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(n){var t;const e=n.auth,s=await n.getIdToken(),o=await Vu(n,yf(e,{idToken:s}));Tt(o==null?void 0:o.users.length,e,"internal-error");const u=o.users[0];n._notifyReloadListener(u);const h=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?$S(u.providerUserInfo):[],p=Nk(n.providerData,h),m=n.isAnonymous,g=!(n.email&&u.passwordHash)&&!(p!=null&&p.length),E=m?g:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new fg(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(n,A)}async function xk(n){const t=Fe(n);await _f(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Nk(n,t){return[...n.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function $S(n){return n.map(t=>{var{providerId:e}=t,s=Ag(t,["providerId"]);return{providerId:e,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(n,t){const e=await FS(n,{},async()=>{const s=Hu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=n.config,h=await GS(n,o,"/v1/token",`key=${u}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",qS.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Mk(n,t){return _s(n,"POST","/v2/accounts:revokeToken",wa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Tt(t.idToken,"internal-error"),Tt(typeof t.idToken<"u","internal-error"),Tt(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):AT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Tt(t.length!==0,"internal-error");const e=AT(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(Tt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:o,expiresIn:u}=await kk(t,e);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:o,expirationTime:u}=e,h=new bo;return s&&(Tt(typeof s=="string","internal-error",{appName:t}),h.refreshToken=s),o&&(Tt(typeof o=="string","internal-error",{appName:t}),h.accessToken=o),u&&(Tt(typeof u=="number","internal-error",{appName:t}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n,t){Tt(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ai{constructor(t){var{uid:e,auth:s,stsTokenManager:o}=t,u=Ag(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new fg(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const e=await Vu(this,this.stsTokenManager.getToken(this.auth,t));return Tt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Ck(this,t)}reload(){return xk(this)}_assign(t){this!==t&&(Tt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ai(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await _f(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(us(this.auth));const t=await this.getIdToken();return await Vu(this,Ik(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var s,o,u,h,p,m,g,E;const A=(s=e.displayName)!==null&&s!==void 0?s:void 0,w=(o=e.email)!==null&&o!==void 0?o:void 0,I=(u=e.phoneNumber)!==null&&u!==void 0?u:void 0,x=(h=e.photoURL)!==null&&h!==void 0?h:void 0,q=(p=e.tenantId)!==null&&p!==void 0?p:void 0,U=(m=e._redirectEventId)!==null&&m!==void 0?m:void 0,G=(g=e.createdAt)!==null&&g!==void 0?g:void 0,Z=(E=e.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:$,emailVerified:rt,isAnonymous:at,providerData:ct,stsTokenManager:C}=e;Tt($&&C,t,"internal-error");const b=bo.fromJSON(this.name,C);Tt(typeof $=="string",t,"internal-error"),Qr(A,t.name),Qr(w,t.name),Tt(typeof rt=="boolean",t,"internal-error"),Tt(typeof at=="boolean",t,"internal-error"),Qr(I,t.name),Qr(x,t.name),Qr(q,t.name),Qr(U,t.name),Qr(G,t.name),Qr(Z,t.name);const R=new ai({uid:$,auth:t,email:w,emailVerified:rt,displayName:A,isAnonymous:at,photoURL:x,phoneNumber:I,tenantId:q,stsTokenManager:b,createdAt:G,lastLoginAt:Z});return ct&&Array.isArray(ct)&&(R.providerData=ct.map(k=>Object.assign({},k))),U&&(R._redirectEventId=U),R}static async _fromIdTokenResponse(t,e,s=!1){const o=new bo;o.updateFromServerResponse(e);const u=new ai({uid:e.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await _f(u),u}static async _fromGetAccountInfoResponse(t,e,s){const o=e.users[0];Tt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?$S(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new bo;p.updateFromIdToken(s);const m=new ai({uid:o.localId,auth:t,stsTokenManager:p,isAnonymous:h}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new fg(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=new Map;function dr(n){vr(n instanceof Function,"Expected a class definition");let t=wT.get(n);return t?(vr(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,wT.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}KS.type="NONE";const ST=KS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n,t,e){return`firebase:${n}:${t}:${e}`}class Ro{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Kh(this.userKey,o.apiKey,u),this.fullPersistenceKey=Kh("persistence",o.apiKey,u),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await yf(this.auth,{idToken:t}).catch(()=>{});return e?ai._fromGetAccountInfoResponse(this.auth,e,t):null}return ai._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new Ro(dr(ST),t,s);const o=(await Promise.all(e.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=o[0]||dr(ST);const h=Kh(s,t.config.apiKey,t.name);let p=null;for(const g of e)try{const E=await g._get(h);if(E){let A;if(typeof E=="string"){const w=await yf(t,{idToken:E}).catch(()=>{});if(!w)break;A=await ai._fromGetAccountInfoResponse(t,w,E)}else A=ai._fromJSON(t,E);g!==u&&(p=A),u=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new Ro(u,t,s):(u=m[0],p&&await u._set(h,p.toJSON()),await Promise.all(e.map(async g=>{if(g!==u)try{await g._remove(h)}catch{}})),new Ro(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(WS(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(YS(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(JS(t))return"Blackberry";if(tb(t))return"Webos";if(QS(t))return"Safari";if((t.includes("chrome/")||XS(t))&&!t.includes("edge/"))return"Chrome";if(ZS(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function YS(n=ln()){return/firefox\//i.test(n)}function QS(n=ln()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function XS(n=ln()){return/crios\//i.test(n)}function WS(n=ln()){return/iemobile/i.test(n)}function ZS(n=ln()){return/android/i.test(n)}function JS(n=ln()){return/blackberry/i.test(n)}function tb(n=ln()){return/webos/i.test(n)}function hy(n=ln()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pk(n=ln()){var t;return hy(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Vk(){return ID()&&document.documentMode===10}function eb(n=ln()){return hy(n)||ZS(n)||tb(n)||JS(n)||/windows phone/i.test(n)||WS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(n,t=[]){let e;switch(n){case"Browser":e=bT(ln());break;case"Worker":e=`${bT(ln())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${_a}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=u=>new Promise((h,p)=>{try{const m=t(u);h(m)}catch(m){p(m)}});s.onAbort=e,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const o of e)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(n,t={}){return _s(n,"GET","/v2/passwordPolicy",wa(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=6;class Bk{constructor(t){var e,s,o,u;const h=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=h.minPasswordLength)!==null&&e!==void 0?e:zk,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,s,o,u,h,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,m),this.validatePasswordCharacterOptions(t,m),m.isValid&&(m.isValid=(e=m.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),o&&(e.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(t,e,s,o){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new RT(this),this.idTokenSubscription=new RT(this),this.beforeStateQueue=new Lk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=dr(e)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ro.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await yf(this,{idToken:t}),s=await ai._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(Kn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,p=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(t);(!h||h===p)&&(m!=null&&m.user)&&(o=m.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await _f(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=vk()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Kn(this.app))return Promise.reject(us(this));const e=t?Fe(t):null;return e&&Tt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Tt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(us(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Kn(this.app)?Promise.reject(us(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Uk(this),e=new Bk(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ya("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await Mk(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&dr(t)||this._popupRedirectResolver;Tt(e,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[dr(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,s;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,o){if(this._deleted)return()=>{};const u=typeof e=="function"?e:e.next.bind(e);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(Tt(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof e=="function"){const m=t.addObserver(e,s,o);return()=>{h=!0,m()}}else{const m=t.addObserver(e);return()=>{h=!0,m()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=nb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(e["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(e["X-Firebase-AppCheck"]=o),e}async _getAppCheckToken(){var t;if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&gk(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Qo(n){return Fe(n)}class RT{constructor(t){this.auth=t,this.observer=null,this.addObserver=MD(e=>this.observer=e)}get next(){return Tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hk(n){Jf=n}function ib(n){return Jf.loadJS(n)}function qk(){return Jf.recaptchaEnterpriseScript}function Fk(){return Jf.gapiScript}function Gk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $k{constructor(){this.enterprise=new Kk}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class Kk{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const Yk="recaptcha-enterprise",rb="NO_RECAPTCHA";class Qk{constructor(t){this.type=Yk,this.auth=Qo(t)}async verify(t="verify",e=!1){async function s(u){if(!e){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{Rk(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new bk(m);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,h(g.siteKey)}}).catch(m=>{p(m)})})}function o(u,h,p){const m=window.grecaptcha;TT(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:t}).then(g=>{h(g)}).catch(()=>{h(rb)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $k().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!e&&TT(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=qk();m.length!==0&&(m+=p),ib(m).then(()=>{o(p,u,h)}).catch(g=>{h(g)})}}).catch(p=>{h(p)})})}}async function IT(n,t,e,s=!1,o=!1){const u=new Qk(n);let h;if(o)h=rb;else try{h=await u.verify(e)}catch{h=await u.verify(e,!0)}const p=Object.assign({},t);if(e==="mfaSmsEnrollment"||e==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function CT(n,t,e,s,o){var u;if(!((u=n._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await IT(n,t,e,e==="getOobCode");return s(n,h)}else return s(n,t).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${e} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await IT(n,t,e,e==="getOobCode");return s(n,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(n,t){const e=ys(n,"auth");if(e.isInitialized()){const o=e.getImmediate(),u=e.getOptions();if(cs(u,t??{}))return o;hi(o,"already-initialized")}return e.initialize({options:t})}function Wk(n,t){const e=(t==null?void 0:t.persistence)||[],s=(Array.isArray(e)?e:[e]).map(dr);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function Zk(n,t,e){const s=Qo(n);Tt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=sb(t),{host:h,port:p}=Jk(t),m=p===null?"":`:${p}`,g={url:`${u}//${h}${m}/`},E=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){Tt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Tt(cs(g,s.config.emulator)&&cs(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,ga(h)?(Dg(`${u}//${h}${m}`),Og("Auth",!0)):tM()}function sb(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Jk(n){const t=sb(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:DT(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:DT(h)}}}function DT(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function tM(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return fr("not implemented")}_getIdTokenResponse(t){return fr("not implemented")}_linkToIdToken(t,e){return fr("not implemented")}_getReauthenticationResolver(t){return fr("not implemented")}}async function eM(n,t){return _s(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM(n,t){return Zf(n,"POST","/v1/accounts:signInWithPassword",wa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(n,t){return Zf(n,"POST","/v1/accounts:signInWithEmailLink",wa(n,t))}async function rM(n,t){return Zf(n,"POST","/v1/accounts:signInWithEmailLink",wa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends fy{constructor(t,e,s,o=null){super("password",s),this._email=t,this._password=e,this._tenantId=o}static _fromEmailAndPassword(t,e){return new Lu(t,e,"password")}static _fromEmailAndCode(t,e,s=null){return new Lu(t,e,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return CT(t,e,"signInWithPassword",nM);case"emailLink":return iM(t,{email:this._email,oobCode:this._password});default:hi(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const s={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return CT(t,s,"signUpPassword",eM);case"emailLink":return rM(t,{idToken:e,email:this._email,oobCode:this._password});default:hi(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(n,t){return Zf(n,"POST","/v1/accounts:signInWithIdp",wa(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sM="http://localhost";class ha extends fy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ha(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):hi("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=e,u=Ag(e,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ha(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(t){const e=this.buildRequest();return Io(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,Io(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Io(t,e)}buildRequest(){const t={requestUri:sM,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Hu(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oM(n){const t=hu(fu(n)).link,e=t?hu(fu(t)).deep_link_id:null,s=hu(fu(n)).deep_link_id;return(s?hu(fu(s)).link:null)||s||e||t||n}class dy{constructor(t){var e,s,o,u,h,p;const m=hu(fu(t)),g=(e=m.apiKey)!==null&&e!==void 0?e:null,E=(s=m.oobCode)!==null&&s!==void 0?s:null,A=aM((o=m.mode)!==null&&o!==void 0?o:null);Tt(g&&E&&A,"argument-error"),this.apiKey=g,this.operation=A,this.code=E,this.continueUrl=(u=m.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=m.lang)!==null&&h!==void 0?h:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(t){const e=oM(t);try{return new dy(e)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.providerId=Xo.PROVIDER_ID}static credential(t,e){return Lu._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const s=dy.parseLink(e);return Tt(s,"argument-error"),Lu._fromEmailAndCode(t,s.code,s.tenantId)}}Xo.PROVIDER_ID="password";Xo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends ab{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Yu{constructor(){super("facebook.com")}static credential(t){return ha._fromParams({providerId:Wr.PROVIDER_ID,signInMethod:Wr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wr.credentialFromTaggedObject(t)}static credentialFromError(t){return Wr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wr.credential(t.oauthAccessToken)}catch{return null}}}Wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Yu{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ha._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Zr.credentialFromTaggedObject(t)}static credentialFromError(t){return Zr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return Zr.credential(e,s)}catch{return null}}}Zr.GOOGLE_SIGN_IN_METHOD="google.com";Zr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Yu{constructor(){super("github.com")}static credential(t){return ha._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jr.credentialFromTaggedObject(t)}static credentialFromError(t){return Jr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jr.credential(t.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Yu{constructor(){super("twitter.com")}static credential(t,e){return ha._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return ts.credentialFromTaggedObject(t)}static credentialFromError(t){return ts.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return ts.credential(e,s)}catch{return null}}}ts.TWITTER_SIGN_IN_METHOD="twitter.com";ts.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,o=!1){const u=await ai._fromIdTokenResponse(t,s,o),h=OT(s);return new Bo({user:u,providerId:h,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const o=OT(s);return new Bo({user:t,providerId:o,_tokenResponse:s,operationType:e})}}function OT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends Wn{constructor(t,e,s,o){var u;super(e.code,e.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,vf.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,o){return new vf(t,e,s,o)}}function ob(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?vf._fromErrorAndOperation(n,u,t,s):u})}async function lM(n,t,e=!1){const s=await Vu(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return Bo._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uM(n,t,e=!1){const{auth:s}=n;if(Kn(s.app))return Promise.reject(us(s));const o="reauthenticate";try{const u=await Vu(n,ob(s,o,t,n),e);Tt(u.idToken,s,"internal-error");const h=cy(u.idToken);Tt(h,s,"internal-error");const{sub:p}=h;return Tt(n.uid===p,s,"user-mismatch"),Bo._forOperation(n,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&hi(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(n,t,e=!1){if(Kn(n.app))return Promise.reject(us(n));const s="signIn",o=await ob(n,s,t),u=await Bo._fromIdTokenResponse(n,s,o);return e||await n._updateCurrentUser(u.user),u}async function cM(n,t){return lb(Qo(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hM(n){const t=Qo(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function fM(n,t,e){return Kn(n.app)?Promise.reject(us(n)):cM(Fe(n),Xo.credential(t,e)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&hM(n),s})}function dM(n,t,e,s){return Fe(n).onIdTokenChanged(t,e,s)}function pM(n,t,e){return Fe(n).beforeAuthStateChanged(t,e)}const Ef="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ef,"1"),this.storage.removeItem(Ef),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=1e3,gM=10;class cb extends ub{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eb(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),o=this.localCache[e];s!==o&&t(e,o,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((h,p,m)=>{this.notifyListeners(h,m)});return}const s=t.key;e?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!e&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);Vk()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,gM):o()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},mM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}cb.type="LOCAL";const yM=cb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb extends ub{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}hb.type="SESSION";const fb=hb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(o=>o.isListeningto(t));if(e)return e;const s=new td(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:o,data:u}=e.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async g=>g(e.origin,u)),m=await _M(p);e.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}td.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,m)=>{const g=py("",20);o.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const w=A;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(w.data.response);break;default:clearTimeout(E),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:t,eventId:g,data:e},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(){return window}function EM(n){Pi().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(){return typeof Pi().WorkerGlobalScope<"u"&&typeof Pi().importScripts=="function"}async function TM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function AM(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wM(){return db()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="firebaseLocalStorageDb",SM=1,Tf="firebaseLocalStorage",mb="fbase_key";class Qu{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function ed(n,t){return n.transaction([Tf],t?"readwrite":"readonly").objectStore(Tf)}function bM(){const n=indexedDB.deleteDatabase(pb);return new Qu(n).toPromise()}function dg(){const n=indexedDB.open(pb,SM);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Tf,{keyPath:mb})}catch(o){e(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Tf)?t(s):(s.close(),await bM(),t(await dg()))})})}async function xT(n,t,e){const s=ed(n,!0).put({[mb]:t,value:e});return new Qu(s).toPromise()}async function RM(n,t){const e=ed(n,!1).get(t),s=await new Qu(e).toPromise();return s===void 0?null:s.value}function NT(n,t){const e=ed(n,!0).delete(t);return new Qu(e).toPromise()}const IM=800,CM=3;class gb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dg(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>CM)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return db()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=td._getInstance(wM()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await TM(),!this.activeServiceWorker)return;this.sender=new vM(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((e=s[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||AM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await dg();return await xT(t,Ef,"1"),await NT(t,Ef),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>xT(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>RM(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>NT(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=ed(o,!1).getAll();return new Qu(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),e.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),e.push(o));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gb.type="LOCAL";const DM=gb;new Ku(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(n,t){return t?dr(t):(Tt(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends fy{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Io(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Io(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Io(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function xM(n){return lb(n.auth,new my(n),n.bypassAuthState)}function NM(n){const{auth:t,user:e}=n;return Tt(e,t,"internal-error"),uM(e,new my(n),n.bypassAuthState)}async function kM(n){const{auth:t,user:e}=n;return Tt(e,t,"internal-error"),lM(e,new my(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(t,e,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=t;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:e,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xM;case"linkViaPopup":case"linkViaRedirect":return kM;case"reauthViaPopup":case"reauthViaRedirect":return NM;default:hi(this.auth,"internal-error")}}resolve(t){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=new Ku(2e3,1e4);class wo extends yb{constructor(t,e,s,o,u){super(t,e,o,u),this.provider=s,this.authWindow=null,this.pollId=null,wo.currentPopupAction&&wo.currentPopupAction.cancel(),wo.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Tt(t,this.auth,"internal-error"),t}async onExecution(){vr(this.filter.length===1,"Popup operations only handle one event");const t=py();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(Mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wo.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,s;if(!((s=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,MM.get())};t()}}wo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PM="pendingRedirect",Yh=new Map;class VM extends yb{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Yh.get(this.auth._key());if(!t){try{const s=await LM(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Yh.set(this.auth._key(),t)}return this.bypassAuthState||Yh.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LM(n,t){const e=BM(t),s=zM(n);if(!await s._isAvailable())return!1;const o=await s._get(e)==="true";return await s._remove(e),o}function UM(n,t){Yh.set(n._key(),t)}function zM(n){return dr(n._redirectPersistence)}function BM(n){return Kh(PM,n.config.apiKey,n.name)}async function jM(n,t,e=!1){if(Kn(n.app))return Promise.reject(us(n));const s=Qo(n),o=OM(s,t),h=await new VM(s,o,e).execute();return h&&!e&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,t)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM=10*60*1e3;class qM{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!FM(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var s;if(t.error&&!_b(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";e.onError(Mi(this.auth,o))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=HM&&this.cachedEventUids.clear(),this.cachedEventUids.has(kT(t))}saveEventToCache(t){this.cachedEventUids.add(kT(t)),this.lastProcessedEventTime=Date.now()}}function kT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function _b({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function FM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _b(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GM(n,t={}){return _s(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KM=/^https?/;async function YM(n){if(n.config.emulator)return;const{authorizedDomains:t}=await GM(n);for(const e of t)try{if(QM(e))return}catch{}hi(n,"unauthorized-domain")}function QM(n){const t=hg(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&h.hostname===s}if(!KM.test(e))return!1;if($M.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=new Ku(3e4,6e4);function MT(){const n=Pi().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function WM(n){return new Promise((t,e)=>{var s,o,u;function h(){MT(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{MT(),e(Mi(n,"network-request-failed"))},timeout:XM.get()})}if(!((o=(s=Pi().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=Pi().gapi)===null||u===void 0)&&u.load)h();else{const p=Gk("iframefcb");return Pi()[p]=()=>{gapi.load?h():e(Mi(n,"network-request-failed"))},ib(`${Fk()}?onload=${p}`).catch(m=>e(m))}}).catch(t=>{throw Qh=null,t})}let Qh=null;function ZM(n){return Qh=Qh||WM(n),Qh}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=new Ku(5e3,15e3),tP="__/auth/iframe",eP="emulator/auth/iframe",nP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rP(n){const t=n.config;Tt(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?uy(t,eP):`https://${n.config.authDomain}/${tP}`,s={apiKey:t.apiKey,appName:n.name,v:_a},o=iP.get(n.config.apiHost);o&&(s.eid=o);const u=n._getFrameworks();return u.length&&(s.fw=u.join(",")),`${e}?${Hu(s).slice(1)}`}async function sP(n){const t=await ZM(n),e=Pi().gapi;return Tt(e,n,"internal-error"),t.open({where:document.body,url:rP(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nP,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Mi(n,"network-request-failed"),p=Pi().setTimeout(()=>{u(h)},JM.get());function m(){Pi().clearTimeout(p),o(s)}s.ping(m).then(m,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oP=500,lP=600,uP="_blank",cP="http://localhost";class PT{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hP(n,t,e,s=oP,o=lP){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m=Object.assign(Object.assign({},aP),{width:s.toString(),height:o.toString(),top:u,left:h}),g=ln().toLowerCase();e&&(p=XS(g)?uP:e),YS(g)&&(t=t||cP,m.scrollbars="yes");const E=Object.entries(m).reduce((w,[I,x])=>`${w}${I}=${x},`,"");if(Pk(g)&&p!=="_self")return fP(t||"",p),new PT(null);const A=window.open(t||"",p,E);Tt(A,n,"popup-blocked");try{A.focus()}catch{}return new PT(A)}function fP(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="__/auth/handler",pP="emulator/auth/handler",mP=encodeURIComponent("fac");async function VT(n,t,e,s,o,u){Tt(n.config.authDomain,n,"auth-domain-config-required"),Tt(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:_a,eventId:o};if(t instanceof ab){t.setDefaultLanguage(n.languageCode),h.providerId=t.providerId||"",kD(t.getCustomParameters())||(h.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,A]of Object.entries({}))h[E]=A}if(t instanceof Yu){const E=t.getScopes().filter(A=>A!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const m=await n._getAppCheckToken(),g=m?`#${mP}=${encodeURIComponent(m)}`:"";return`${gP(n)}?${Hu(p).slice(1)}${g}`}function gP({config:n}){return n.emulator?uy(n,pP):`https://${n.authDomain}/${dP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="webStorageSupport";class yP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fb,this._completeRedirectFn=jM,this._overrideRedirectResult=UM}async _openPopup(t,e,s,o){var u;vr((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await VT(t,e,s,hg(),o);return hP(t,h,py())}async _openRedirect(t,e,s,o){await this._originValidation(t);const u=await VT(t,e,s,hg(),o);return EM(u),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:o,promise:u}=this.eventManagers[e];return o?Promise.resolve(o):(vr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await sP(t),s=new qM(t);return e.register("authEvent",o=>(Tt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Im,{type:Im},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Im];h!==void 0&&e(!!h),hi(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=YM(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return eb()||QS()||hy()}}const _P=yP;var LT="@firebase/auth",UT="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TP(n){ci(new Xn("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;Tt(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:h,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nb(n)},g=new jk(s,o,u,m);return Wk(g,e),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),ci(new Xn("auth-internal",t=>{const e=Qo(t.getProvider("auth").getImmediate());return(s=>new vP(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(LT,UT,EP(n)),vn(LT,UT,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=5*60,wP=WA("authIdTokenMaxAge")||AP;let zT=null;const SP=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>wP)return;const o=e==null?void 0:e.token;zT!==o&&(zT=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function bP(n=Vf()){const t=ys(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Xk(n,{popupRedirectResolver:_P,persistence:[DM,yM,fb]}),s=WA("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=SP(u.toString());pM(e,h,()=>h(e.currentUser)),dM(e,p=>h(p))}}const o=YA("auth");return o&&Zk(e,`http://${o}`),e}function RP(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}Hk({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=o=>{const u=Mi("internal-error");u.customData=o,e(u)},s.type="text/javascript",s.charset="UTF-8",RP().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TP("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb="firebasestorage.googleapis.com",Eb="storageBucket",IP=2*60*1e3,CP=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends Wn{constructor(t,e,s=0){super(Cm(t),`Firebase Storage: ${e} (${Cm(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ge.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Cm(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var me;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(me||(me={}));function Cm(n){return"storage/"+n}function gy(){const n="An unknown error occurred, please check the error payload for server response.";return new ge(me.UNKNOWN,n)}function DP(n){return new ge(me.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function OP(n){return new ge(me.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function xP(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ge(me.UNAUTHENTICATED,n)}function NP(){return new ge(me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kP(n){return new ge(me.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function MP(){return new ge(me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function PP(){return new ge(me.CANCELED,"User canceled the upload/download.")}function VP(n){return new ge(me.INVALID_URL,"Invalid URL '"+n+"'.")}function LP(n){return new ge(me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function UP(){return new ge(me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Eb+"' property when initializing the app?")}function zP(){return new ge(me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BP(){return new ge(me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function jP(n){return new ge(me.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pg(n){return new ge(me.INVALID_ARGUMENT,n)}function Tb(){return new ge(me.APP_DELETED,"The Firebase app was deleted.")}function HP(n){return new ge(me.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wu(n,t){return new ge(me.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function uu(n){throw new ge(me.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=xn.makeFromUrl(t,e)}catch{return new xn(t,"")}if(s.path==="")return s;throw LP(t)}static makeFromUrl(t,e){let s=null;const o="([A-Za-z0-9.\\-_]+)";function u(rt){rt.path.charAt(rt.path.length-1)==="/"&&(rt.path_=rt.path_.slice(0,-1))}const h="(/(.*))?$",p=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function g(rt){rt.path_=decodeURIComponent(rt.path)}const E="v[A-Za-z0-9_]+",A=e.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",I=new RegExp(`^https?://${A}/${E}/b/${o}/o${w}`,"i"),x={bucket:1,path:3},q=e===vb?"(?:storage.googleapis.com|storage.cloud.google.com)":e,U="([^?#]*)",G=new RegExp(`^https?://${q}/${o}/${U}`,"i"),$=[{regex:p,indices:m,postModify:u},{regex:I,indices:x,postModify:g},{regex:G,indices:{bucket:1,path:2},postModify:g}];for(let rt=0;rt<$.length;rt++){const at=$[rt],ct=at.regex.exec(t);if(ct){const C=ct[at.indices.bucket];let b=ct[at.indices.path];b||(b=""),s=new xn(C,b),at.postModify(s);break}}if(s==null)throw VP(t);return s}}class qP{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(n,t,e){let s=1,o=null,u=null,h=!1,p=0;function m(){return p===2}let g=!1;function E(...U){g||(g=!0,t.apply(null,U))}function A(U){o=setTimeout(()=>{o=null,n(I,m())},U)}function w(){u&&clearTimeout(u)}function I(U,...G){if(g){w();return}if(U){w(),E.call(null,U,...G);return}if(m()||h){w(),E.call(null,U,...G);return}s<64&&(s*=2);let $;p===1?(p=2,$=0):$=(s+Math.random())*1e3,A($)}let x=!1;function q(U){x||(x=!0,w(),!g&&(o!==null?(U||(p=2),clearTimeout(o),A(0)):U||(p=1)))}return A(0),u=setTimeout(()=>{h=!0,q(!0)},e),q}function GP(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(n){return n!==void 0}function KP(n){return typeof n=="object"&&!Array.isArray(n)}function yy(n){return typeof n=="string"||n instanceof String}function BT(n){return _y()&&n instanceof Blob}function _y(){return typeof Blob<"u"}function jT(n,t,e,s){if(s<t)throw pg(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw pg(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n,t,e){let s=t;return e==null&&(s=`https://${t}`),`${e}://${s}/v0${n}`}function Ab(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const o=t(s)+"="+t(n[s]);e=e+o+"&"}return e=e.slice(0,-1),e}var la;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(la||(la={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(n,t){const e=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,u=t.indexOf(n)!==-1;return e||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(t,e,s,o,u,h,p,m,g,E,A,w=!0,I=!1){this.url_=t,this.method_=e,this.headers_=s,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=h,this.callback_=p,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=E,this.connectionFactory_=A,this.retry=w,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,q)=>{this.resolve_=x,this.reject_=q,this.start_()})}start_(){const t=(s,o)=>{if(o){s(!1,new Oh(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const h=p=>{const m=p.loaded,g=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&u.addUploadProgressListener(h),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(h),this.pendingConnection_=null;const p=u.getErrorCode()===la.NO_ERROR,m=u.getStatus();if(!p||YP(m,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===la.ABORT;s(!1,new Oh(!1,null,E));return}const g=this.successCodes_.indexOf(m)!==-1;s(!0,new Oh(g,u))})},e=(s,o)=>{const u=this.resolve_,h=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(p,p.getResponse());$P(m)?u(m):u()}catch(m){h(m)}else if(p!==null){const m=gy();m.serverResponse=p.getErrorText(),this.errorCallback_?h(this.errorCallback_(p,m)):h(m)}else if(o.canceled){const m=this.appDelete_?Tb():PP();h(m)}else{const m=MP();h(m)}};this.canceled_?e(!1,new Oh(!1,null,!0)):this.backoffId_=FP(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&GP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Oh{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function XP(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function WP(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function ZP(n,t){t&&(n["X-Firebase-GMPID"]=t)}function JP(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function t4(n,t,e,s,o,u,h=!0,p=!1){const m=Ab(n.urlParams),g=n.url+m,E=Object.assign({},n.headers);return ZP(E,t),XP(E,e),WP(E,u),JP(E,s),new QP(g,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function n4(...n){const t=e4();if(t!==void 0){const e=new t;for(let s=0;s<n.length;s++)e.append(n[s]);return e.getBlob()}else{if(_y())return new Blob(n);throw new ge(me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function i4(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r4(n){if(typeof atob>"u")throw jP("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dm{constructor(t,e){this.data=t,this.contentType=e||null}}function s4(n,t){switch(n){case Oi.RAW:return new Dm(wb(t));case Oi.BASE64:case Oi.BASE64URL:return new Dm(Sb(n,t));case Oi.DATA_URL:return new Dm(o4(t),l4(t))}throw gy()}function wb(n){const t=[];for(let e=0;e<n.length;e++){let s=n.charCodeAt(e);if(s<=127)t.push(s);else if(s<=2047)t.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const u=s,h=n.charCodeAt(++e);s=65536|(u&1023)<<10|h&1023,t.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?t.push(239,191,189):t.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(t)}function a4(n){let t;try{t=decodeURIComponent(n)}catch{throw wu(Oi.DATA_URL,"Malformed data URL.")}return wb(t)}function Sb(n,t){switch(n){case Oi.BASE64:{const o=t.indexOf("-")!==-1,u=t.indexOf("_")!==-1;if(o||u)throw wu(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case Oi.BASE64URL:{const o=t.indexOf("+")!==-1,u=t.indexOf("/")!==-1;if(o||u)throw wu(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=r4(t)}catch(o){throw o.message.includes("polyfill")?o:wu(n,"Invalid character found")}const s=new Uint8Array(e.length);for(let o=0;o<e.length;o++)s[o]=e.charCodeAt(o);return s}class bb{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw wu(Oi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=e[1]||null;s!=null&&(this.base64=u4(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=t.substring(t.indexOf(",")+1)}}function o4(n){const t=new bb(n);return t.base64?Sb(Oi.BASE64,t.rest):a4(t.rest)}function l4(n){return new bb(n).contentType}function u4(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e){let s=0,o="";BT(t)?(this.data_=t,s=t.size,o=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),s=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),s=t.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,e){if(BT(this.data_)){const s=this.data_,o=i4(s,t,e);return o===null?null:new es(o)}else{const s=new Uint8Array(this.data_.buffer,t,e-t);return new es(s,!0)}}static getBlob(...t){if(_y()){const e=t.map(s=>s instanceof es?s.data_:s);return new es(n4.apply(null,e))}else{const e=t.map(h=>yy(h)?s4(Oi.RAW,h).data:h.data_);let s=0;e.forEach(h=>{s+=h.byteLength});const o=new Uint8Array(s);let u=0;return e.forEach(h=>{for(let p=0;p<h.length;p++)o[u++]=h[p]}),new es(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(n){let t;try{t=JSON.parse(n)}catch{return null}return KP(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function h4(n,t){const e=t.split("/").filter(s=>s.length>0).join("/");return n.length===0?e:n+"/"+e}function Ib(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f4(n,t){return t}class dn{constructor(t,e,s,o){this.server=t,this.local=e||t,this.writable=!!s,this.xform=o||f4}}let xh=null;function d4(n){return!yy(n)||n.length<2?n:Ib(n)}function Cb(){if(xh)return xh;const n=[];n.push(new dn("bucket")),n.push(new dn("generation")),n.push(new dn("metageneration")),n.push(new dn("name","fullPath",!0));function t(u,h){return d4(h)}const e=new dn("name");e.xform=t,n.push(e);function s(u,h){return h!==void 0?Number(h):h}const o=new dn("size");return o.xform=s,n.push(o),n.push(new dn("timeCreated")),n.push(new dn("updated")),n.push(new dn("md5Hash",null,!0)),n.push(new dn("cacheControl",null,!0)),n.push(new dn("contentDisposition",null,!0)),n.push(new dn("contentEncoding",null,!0)),n.push(new dn("contentLanguage",null,!0)),n.push(new dn("contentType",null,!0)),n.push(new dn("metadata","customMetadata",!0)),xh=n,xh}function p4(n,t){function e(){const s=n.bucket,o=n.fullPath,u=new xn(s,o);return t._makeStorageReference(u)}Object.defineProperty(n,"ref",{get:e})}function m4(n,t,e){const s={};s.type="file";const o=e.length;for(let u=0;u<o;u++){const h=e[u];s[h.local]=h.xform(s,t[h.server])}return p4(s,n),s}function Db(n,t,e){const s=Rb(t);return s===null?null:m4(n,s,e)}function g4(n,t,e,s){const o=Rb(t);if(o===null||!yy(o.downloadTokens))return null;const u=o.downloadTokens;if(u.length===0)return null;const h=encodeURIComponent;return u.split(",").map(g=>{const E=n.bucket,A=n.fullPath,w="/b/"+h(E)+"/o/"+h(A),I=vy(w,e,s),x=Ab({alt:"media",token:g});return I+x})[0]}function y4(n,t){const e={},s=t.length;for(let o=0;o<s;o++){const u=t[o];u.writable&&(e[u.server]=n[u.local])}return JSON.stringify(e)}class Ob{constructor(t,e,s,o){this.url=t,this.method=e,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(n){if(!n)throw gy()}function _4(n,t){function e(s,o){const u=Db(n,o,t);return xb(u!==null),u}return e}function v4(n,t){function e(s,o){const u=Db(n,o,t);return xb(u!==null),g4(u,o,n.host,n._protocol)}return e}function Nb(n){function t(e,s){let o;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?o=NP():o=xP():e.getStatus()===402?o=OP(n.bucket):e.getStatus()===403?o=kP(n.path):o=s,o.status=e.getStatus(),o.serverResponse=s.serverResponse,o}return t}function E4(n){const t=Nb(n);function e(s,o){let u=t(s,o);return s.getStatus()===404&&(u=DP(n.path)),u.serverResponse=o.serverResponse,u}return e}function T4(n,t,e){const s=t.fullServerUrl(),o=vy(s,n.host,n._protocol),u="GET",h=n.maxOperationRetryTime,p=new Ob(o,u,v4(n,e),h);return p.errorHandler=E4(t),p}function A4(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function w4(n,t,e){const s=Object.assign({},e);return s.fullPath=n.path,s.size=t.size(),s.contentType||(s.contentType=A4(null,t)),s}function S4(n,t,e,s,o){const u=t.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function p(){let $="";for(let rt=0;rt<2;rt++)$=$+Math.random().toString().slice(2);return $}const m=p();h["Content-Type"]="multipart/related; boundary="+m;const g=w4(t,s,o),E=y4(g,e),A="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+m+`\r
Content-Type: `+g.contentType+`\r
\r
`,w=`\r
--`+m+"--",I=es.getBlob(A,s,w);if(I===null)throw zP();const x={name:g.fullPath},q=vy(u,n.host,n._protocol),U="POST",G=n.maxUploadRetryTime,Z=new Ob(q,U,_4(n,e),G);return Z.urlParams=x,Z.headers=h,Z.body=I.uploadData(),Z.errorHandler=Nb(t),Z}class b4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=la.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=la.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=la.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,s,o,u){if(this.sent_)throw uu("cannot .send() more than once");if(ga(t)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(e,t,!0),u!==void 0)for(const h in u)u.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,u[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw uu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw uu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw uu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw uu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class R4 extends b4{initXhr(){this.xhr_.responseType="text"}}function kb(){return new R4}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e){this._service=t,e instanceof xn?this._location=e:this._location=xn.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new fa(t,e)}get root(){const t=new xn(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ib(this._location.path)}get storage(){return this._service}get parent(){const t=c4(this._location.path);if(t===null)return null;const e=new xn(this._location.bucket,t);return new fa(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw HP(t)}}function I4(n,t,e){n._throwIfRoot("uploadBytes");const s=S4(n.storage,n._location,Cb(),new es(t,!0),e);return n.storage.makeRequestWithTokens(s,kb).then(o=>({metadata:o,ref:n}))}function C4(n){n._throwIfRoot("getDownloadURL");const t=T4(n.storage,n._location,Cb());return n.storage.makeRequestWithTokens(t,kb).then(e=>{if(e===null)throw BP();return e})}function D4(n,t){const e=h4(n._location.path,t),s=new xn(n._location.bucket,e);return new fa(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O4(n){return/^[A-Za-z]+:\/\//.test(n)}function x4(n,t){return new fa(n,t)}function Mb(n,t){if(n instanceof Ey){const e=n;if(e._bucket==null)throw UP();const s=new fa(e,e._bucket);return t!=null?Mb(s,t):s}else return t!==void 0?D4(n,t):n}function N4(n,t){if(t&&O4(t)){if(n instanceof Ey)return x4(n,t);throw pg("To use ref(service, url), the first argument must be a Storage instance.")}else return Mb(n,t)}function HT(n,t){const e=t==null?void 0:t[Eb];return e==null?null:xn.makeFromBucketSpec(e,n)}function k4(n,t,e,s={}){n.host=`${t}:${e}`;const o=ga(t);o&&(Dg(`https://${n.host}`),Og("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:u}=s;u&&(n._overrideAuthToken=typeof u=="string"?u:ZA(u,n.app.options.projectId))}class Ey{constructor(t,e,s,o,u,h=!1){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=h,this._bucket=null,this._host=vb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=IP,this._maxUploadRetryTime=CP,this._requests=new Set,o!=null?this._bucket=xn.makeFromBucketSpec(o,this._host):this._bucket=HT(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=xn.makeFromBucketSpec(this._url,t):this._bucket=HT(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){jT("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){jT("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new fa(this,t)}_makeRequest(t,e,s,o,u=!0){if(this._deleted)return new qP(Tb());{const h=t4(t,this._appId,s,o,e,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(t,e){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,o).getPromise()}}const qT="@firebase/storage",FT="0.13.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="storage";function M4(n,t,e){return n=Fe(n),I4(n,t,e)}function P4(n){return n=Fe(n),C4(n)}function V4(n,t){return n=Fe(n),N4(n,t)}function L4(n=Vf(),t){n=Fe(n);const s=ys(n,Pb).getImmediate({identifier:t}),o=QA("storage");return o&&U4(s,...o),s}function U4(n,t,e,s={}){k4(n,t,e,s)}function z4(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Ey(e,s,o,t,_a)}function B4(){ci(new Xn(Pb,z4,"PUBLIC").setMultipleInstances(!0)),vn(qT,FT,""),vn(qT,FT,"esm2017")}B4();const Vb="@firebase/installations",Ty="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb=1e4,Ub=`w:${Ty}`,zb="FIS_v2",j4="https://firebaseinstallations.googleapis.com/v1",H4=60*60*1e3,q4="installations",F4="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},da=new ya(q4,F4,G4);function Bb(n){return n instanceof Wn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb({projectId:n}){return`${j4}/projects/${n}/installations`}function Hb(n){return{token:n.token,requestStatus:2,expiresIn:K4(n.expiresIn),creationTime:Date.now()}}async function qb(n,t){const s=(await t.json()).error;return da.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Fb({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function $4(n,{refreshToken:t}){const e=Fb(n);return e.append("Authorization",Y4(t)),e}async function Gb(n){const t=await n();return t.status>=500&&t.status<600?n():t}function K4(n){return Number(n.replace("s","000"))}function Y4(n){return`${zb} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q4({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const s=jb(n),o=Fb(n),u=t.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={fid:e,authVersion:zb,appId:n.appId,sdkVersion:Ub},p={method:"POST",headers:o,body:JSON.stringify(h)},m=await Gb(()=>fetch(s,p));if(m.ok){const g=await m.json();return{fid:g.fid||e,registrationStatus:2,refreshToken:g.refreshToken,authToken:Hb(g.authToken)}}else throw await qb("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X4(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4=/^[cdef][\w-]{21}$/,mg="";function Z4(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=J4(n);return W4.test(e)?e:mg}catch{return mg}}function J4(n){return X4(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=new Map;function Yb(n,t){const e=nd(n);Qb(e,t),tV(e,t)}function Qb(n,t){const e=Kb.get(n);if(e)for(const s of e)s(t)}function tV(n,t){const e=eV();e&&e.postMessage({key:n,fid:t}),nV()}let aa=null;function eV(){return!aa&&"BroadcastChannel"in self&&(aa=new BroadcastChannel("[Firebase] FID Change"),aa.onmessage=n=>{Qb(n.data.key,n.data.fid)}),aa}function nV(){Kb.size===0&&aa&&(aa.close(),aa=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV="firebase-installations-database",rV=1,pa="firebase-installations-store";let Om=null;function Ay(){return Om||(Om=rw(iV,rV,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(pa)}}})),Om}async function Af(n,t){const e=nd(n),o=(await Ay()).transaction(pa,"readwrite"),u=o.objectStore(pa),h=await u.get(e);return await u.put(t,e),await o.done,(!h||h.fid!==t.fid)&&Yb(n,t.fid),t}async function Xb(n){const t=nd(n),s=(await Ay()).transaction(pa,"readwrite");await s.objectStore(pa).delete(t),await s.done}async function id(n,t){const e=nd(n),o=(await Ay()).transaction(pa,"readwrite"),u=o.objectStore(pa),h=await u.get(e),p=t(h);return p===void 0?await u.delete(e):await u.put(p,e),await o.done,p&&(!h||h.fid!==p.fid)&&Yb(n,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(n){let t;const e=await id(n.appConfig,s=>{const o=sV(s),u=aV(n,o);return t=u.registrationPromise,u.installationEntry});return e.fid===mg?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function sV(n){const t=n||{fid:Z4(),registrationStatus:0};return Wb(t)}function aV(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(da.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=oV(n,e);return{installationEntry:e,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:lV(n)}:{installationEntry:t}}async function oV(n,t){try{const e=await Q4(n,t);return Af(n.appConfig,e)}catch(e){throw Bb(e)&&e.customData.serverCode===409?await Xb(n.appConfig):await Af(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function lV(n){let t=await GT(n.appConfig);for(;t.registrationStatus===1;)await $b(100),t=await GT(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:s}=await wy(n);return s||e}return t}function GT(n){return id(n,t=>{if(!t)throw da.create("installation-not-found");return Wb(t)})}function Wb(n){return uV(n)?{fid:n.fid,registrationStatus:0}:n}function uV(n){return n.registrationStatus===1&&n.registrationTime+Lb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cV({appConfig:n,heartbeatServiceProvider:t},e){const s=hV(n,e),o=$4(n,e),u=t.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&o.append("x-firebase-client",g)}const h={installation:{sdkVersion:Ub,appId:n.appId}},p={method:"POST",headers:o,body:JSON.stringify(h)},m=await Gb(()=>fetch(s,p));if(m.ok){const g=await m.json();return Hb(g)}else throw await qb("Generate Auth Token",m)}function hV(n,{fid:t}){return`${jb(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy(n,t=!1){let e;const s=await id(n.appConfig,u=>{if(!Zb(u))throw da.create("not-registered");const h=u.authToken;if(!t&&pV(h))return u;if(h.requestStatus===1)return e=fV(n,t),u;{if(!navigator.onLine)throw da.create("app-offline");const p=gV(u);return e=dV(n,p),p}});return e?await e:s.authToken}async function fV(n,t){let e=await $T(n.appConfig);for(;e.authToken.requestStatus===1;)await $b(100),e=await $T(n.appConfig);const s=e.authToken;return s.requestStatus===0?Sy(n,t):s}function $T(n){return id(n,t=>{if(!Zb(t))throw da.create("not-registered");const e=t.authToken;return yV(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function dV(n,t){try{const e=await cV(n,t),s=Object.assign(Object.assign({},t),{authToken:e});return await Af(n.appConfig,s),e}catch(e){if(Bb(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await Xb(n.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Af(n.appConfig,s)}throw e}}function Zb(n){return n!==void 0&&n.registrationStatus===2}function pV(n){return n.requestStatus===2&&!mV(n)}function mV(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+H4}function gV(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function yV(n){return n.requestStatus===1&&n.requestTime+Lb<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _V(n){const t=n,{installationEntry:e,registrationPromise:s}=await wy(t);return s?s.catch(console.error):Sy(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vV(n,t=!1){const e=n;return await EV(e),(await Sy(e,t)).token}async function EV(n){const{registrationPromise:t}=await wy(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TV(n){if(!n||!n.options)throw xm("App Configuration");if(!n.name)throw xm("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw xm(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function xm(n){return da.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="installations",AV="installations-internal",wV=n=>{const t=n.getProvider("app").getImmediate(),e=TV(t),s=ys(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},SV=n=>{const t=n.getProvider("app").getImmediate(),e=ys(t,Jb).getImmediate();return{getId:()=>_V(e),getToken:o=>vV(e,o)}};function bV(){ci(new Xn(Jb,wV,"PUBLIC")),ci(new Xn(AV,SV,"PRIVATE"))}bV();vn(Vb,Ty);vn(Vb,Ty,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="analytics",RV="firebase_id",IV="origin",CV=60*1e3,DV="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",by="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Pf("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OV={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nn=new ya("analytics","Analytics",OV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xV(n){if(!n.startsWith(by)){const t=Nn.create("invalid-gtag-resource",{gtagURL:n});return En.warn(t.message),""}return n}function t1(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function NV(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function kV(n,t){const e=NV("firebase-js-sdk-policy",{createScriptURL:xV}),s=document.createElement("script"),o=`${by}?l=${n}&id=${t}`;s.src=e?e==null?void 0:e.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function MV(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function PV(n,t,e,s,o,u){const h=s[o];try{if(h)await t[h];else{const m=(await t1(e)).find(g=>g.measurementId===o);m&&await t[m.appId]}}catch(p){En.error(p)}n("config",o,u)}async function VV(n,t,e,s,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const p=await t1(e);for(const m of h){const g=p.find(A=>A.measurementId===m),E=g&&t[g.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),n("event",s,o||{})}catch(u){En.error(u)}}function LV(n,t,e,s){async function o(u,...h){try{if(u==="event"){const[p,m]=h;await VV(n,t,e,p,m)}else if(u==="config"){const[p,m]=h;await PV(n,t,e,s,p,m)}else if(u==="consent"){const[p,m]=h;n("consent",p,m)}else if(u==="get"){const[p,m,g]=h;n("get",p,m,g)}else if(u==="set"){const[p]=h;n("set",p)}else n(u,...h)}catch(p){En.error(p)}}return o}function UV(n,t,e,s,o){let u=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=LV(u,n,t,e),{gtagCore:u,wrappedGtag:window[o]}}function zV(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(by)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BV=30,jV=1e3;class HV{constructor(t={},e=jV){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const e1=new HV;function qV(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function FV(n){var t;const{appId:e,apiKey:s}=n,o={method:"GET",headers:qV(s)},u=DV.replace("{app-id}",e),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let p="";try{const m=await h.json();!((t=m.error)===null||t===void 0)&&t.message&&(p=m.error.message)}catch{}throw Nn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:p})}return h.json()}async function GV(n,t=e1,e){const{appId:s,apiKey:o,measurementId:u}=n.options;if(!s)throw Nn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw Nn.create("no-api-key")}const h=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new YV;return setTimeout(async()=>{p.abort()},CV),n1({appId:s,apiKey:o,measurementId:u},h,p,t)}async function n1(n,{throttleEndTimeMillis:t,backoffCount:e},s,o=e1){var u;const{appId:h,measurementId:p}=n;try{await $V(s,t)}catch(m){if(p)return En.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:h,measurementId:p};throw m}try{const m=await FV(n);return o.deleteThrottleMetadata(h),m}catch(m){const g=m;if(!KV(g)){if(o.deleteThrottleMetadata(h),p)return En.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:p};throw m}const E=Number((u=g==null?void 0:g.customData)===null||u===void 0?void 0:u.httpStatus)===503?pE(e,o.intervalMillis,BV):pE(e,o.intervalMillis),A={throttleEndTimeMillis:Date.now()+E,backoffCount:e+1};return o.setThrottleMetadata(h,A),En.debug(`Calling attemptFetch again in ${E} millis`),n1(n,A,s,o)}}function $V(n,t){return new Promise((e,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(e,o);n.addEventListener(()=>{clearTimeout(u),s(Nn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function KV(n){if(!(n instanceof Wn)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class YV{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function QV(n,t,e,s,o){if(o&&o.global){n("event",e,s);return}else{const u=await t,h=Object.assign(Object.assign({},s),{send_to:u});n("event",e,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XV(){if(tw())try{await ew()}catch(n){return En.warn(Nn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return En.warn(Nn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WV(n,t,e,s,o,u,h){var p;const m=GV(n);m.then(I=>{e[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&En.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>En.error(I)),t.push(m);const g=XV().then(I=>{if(I)return s.getId()}),[E,A]=await Promise.all([m,g]);zV(u)||kV(u,E.measurementId),o("js",new Date);const w=(p=h==null?void 0:h.config)!==null&&p!==void 0?p:{};return w[IV]="firebase",w.update=!0,A!=null&&(w[RV]=A),o("config",E.measurementId,w),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(t){this.app=t}_delete(){return delete Su[this.app.options.appId],Promise.resolve()}}let Su={},KT=[];const YT={};let Nm="dataLayer",JV="gtag",QT,i1,XT=!1;function t6(){const n=[];if(JA()&&n.push("This is a browser extension environment."),DD()||n.push("Cookies are not available."),n.length>0){const t=n.map((s,o)=>`(${o+1}) ${s}`).join(" "),e=Nn.create("invalid-analytics-context",{errorInfo:t});En.warn(e.message)}}function e6(n,t,e){t6();const s=n.options.appId;if(!s)throw Nn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)En.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nn.create("no-api-key");if(Su[s]!=null)throw Nn.create("already-exists",{id:s});if(!XT){MV(Nm);const{wrappedGtag:u,gtagCore:h}=UV(Su,KT,YT,Nm,JV);i1=u,QT=h,XT=!0}return Su[s]=WV(n,KT,YT,t,QT,Nm,e),new ZV(n)}function n6(n=Vf()){n=Fe(n);const t=ys(n,wf);return t.isInitialized()?t.getImmediate():i6(n)}function i6(n,t={}){const e=ys(n,wf);if(e.isInitialized()){const o=e.getImmediate();if(cs(t,e.getOptions()))return o;throw Nn.create("already-initialized")}return e.initialize({options:t})}function r6(n,t,e,s){n=Fe(n),QV(i1,Su[n.app.options.appId],t,e,s).catch(o=>En.error(o))}const WT="@firebase/analytics",ZT="0.10.16";function s6(){ci(new Xn(wf,(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return e6(s,o,e)},"PUBLIC")),ci(new Xn("analytics-internal",n,"PRIVATE")),vn(WT,ZT),vn(WT,ZT,"esm2017");function n(t){try{const e=t.getProvider(wf).getImmediate();return{logEvent:(s,o,u)=>r6(e,s,o,u)}}catch(e){throw Nn.create("interop-component-reg-failed",{reason:e})}}}s6();const a6={apiKey:"AIzaSyBK3jRKtR2hIm68NNTnOJsiavqzznPjTVU",authDomain:"portfolio-f4c5f.firebaseapp.com",projectId:"portfolio-f4c5f",storageBucket:"portfolio-f4c5f.firebasestorage.app",messagingSenderId:"591232008686",appId:"1:591232008686:web:557a3ae1876cb6f69f4eff",measurementId:"G-6L2QNEMFN7"},rd=sw(a6);n6(rd);const o6=bP(rd),Sf=K2(rd),l6=L4(rd),u6=Lt.section`
    padding:36px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:  18px;
`,r1=Lt.p`
    position: absolute;
    bottom: -20px;
    color:#fff;
    width: 100%;    
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(128, 128, 128, 0.3);
    padding: 10px 0;
    height: 0;
    transition: bottom 0.7s;
`,c6=Lt.div`
    width: calc((100% - 36px)/3);
    aspect-ratio: 16/9;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;
    cursor: pointer;

    &:hover ${r1} {
        bottom: 0;
        height: 40px; /* 예시로 높이 변경 */
        background-color: rgba(0, 0, 0, 0.5); /* 배경색 진하게 */
    }    

`,h6=Lt.img`
    width: 100%;    

`,f6=({image:n,name:t})=>nt.jsxs(c6,{children:[nt.jsx(h6,{src:n||"기본이미지.png",alt:t}),nt.jsx(r1,{children:t})]}),d6=()=>{const[n,t]=X.useState([]);return X.useEffect(()=>{(async()=>{try{const o=(await US(iy(Sf,"works"))).docs.map(u=>({id:u.id,...u.data()}));t(o)}catch(s){console.error("Error fetching works:",s)}})()},[]),nt.jsx(nt.Fragment,{children:nt.jsx(u6,{children:n.map(e=>nt.jsx(f6,{image:e.image,name:e.name},e.id))})})},p6=()=>nt.jsx(nt.Fragment,{children:"상세페이지"}),m6=Lt.header`
    width: 100%;
    height: 100px;    
    background-color: #7d9fc8   ;
`,g6=Lt.div`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`,y6=Lt.h1`
    color:#fff;
    font-size: 24px;
    font-weight: 600;
`,_6=Lt.nav`
   ul{
    display: flex;
    gap: 20px;
    font-size: 20px;
    color:#fff;
    font-weight: 600;
   }

   li{
    cursor: pointer;
   }
`,v6=()=>{const n=qo();return nt.jsx(m6,{children:nt.jsxs(g6,{children:[nt.jsx(y6,{children:"Sunghoon's Portfolio"}),nt.jsx(_6,{children:nt.jsxs("ul",{children:[nt.jsx("li",{onClick:()=>{n("/")},children:"Home"}),nt.jsx("li",{onClick:()=>{n("/works")},children:"Works"}),nt.jsx("li",{onClick:()=>{n("/admin/login")},children:"Admin"})]})})]})})},E6=Lt.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`,JT=n=>{let t;const e=new Set,s=(g,E)=>{const A=typeof g=="function"?g(t):g;if(!Object.is(A,t)){const w=t;t=E??(typeof A!="object"||A===null)?A:Object.assign({},t,A),e.forEach(I=>I(t,w))}},o=()=>t,p={setState:s,getState:o,getInitialState:()=>m,subscribe:g=>(e.add(g),()=>e.delete(g))},m=t=n(s,o,p);return p},T6=n=>n?JT(n):JT,A6=n=>n;function w6(n,t=A6){const e=ri.useSyncExternalStore(n.subscribe,()=>t(n.getState()),()=>t(n.getInitialState()));return ri.useDebugValue(e),e}const tA=n=>{const t=T6(n),e=s=>w6(t,s);return Object.assign(e,t),e},S6=n=>n?tA(n):tA,b6=S6(n=>({use:null,setUser:t=>n({user:t}),clearUser:()=>n({user:null}),get isLoggedIn(){return!!this.user}})),R6=Lt.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;    
`,I6=Lt.div`
    width: 400px;
    padding: 72px 36px;
    background-color: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 40px auto;

    p{
        text-align: center;
        font-size:28px;
    }
`,C6=Lt.input`
    width: 100%;
    border: none;
    outline: none;
    font-size:16px;
    border-bottom: 1px solid #ccc;
    transition: 1s;
    
    padding:10px;

    &:hover{
        border-bottom: 1px solid #000;
    }
    &::placeholder{
        font-size:16px;
    }
`,eA=Lt.button`
  width: 100%;
  height: 40px;
  background-color: ${({bgColor:n})=>n||"red"};
  color: ${({textColor:n})=>n||"white"};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`,s1=()=>{const[n,t]=X.useState("sunghoon.developer@gmail.com"),[e,s]=X.useState(""),o=qo(),u=p=>{s(p.target.value)},h=async()=>{try{const m=(await fM(o6,n,e)).user;b6.getState().setUser(m),alert("로그인 성공"),o("/admin")}catch{alert("관리자가 아니면 둘러보기 버튼을 눌러주세요.")}};return nt.jsx(R6,{children:nt.jsxs(I6,{children:[nt.jsx("p",{children:"관리자페이지"}),nt.jsx(C6,{type:"password",placeholder:"비밀번호",value:e,onChange:u}),nt.jsx(eA,{bgColor:"#333",textColor:"white",onClick:h,children:"로그인"}),nt.jsx(eA,{bgColor:"#f5a623",textColor:"#000",onClick:()=>o("/admin"),children:"둘러보기"})]})})},D6=Lt.aside`
    width: 380px;
    color:#fff;
    background-color: #101010;    
    height:100%;
    min-height: 100vh;
    padding:70px 80px;

    ul{
        display: flex;
        flex-direction: column;
        align-items:center;
        li{
            width: 50%;
            font-size:24px;
            cursor: pointer;
        }
    }
`,O6=()=>{const n=qo();return nt.jsx(D6,{children:nt.jsxs("ul",{children:[nt.jsx("li",{onClick:()=>{n("/admin/")},children:"Main"}),nt.jsx("li",{onClick:()=>{n("/admin/design")},children:"Design"}),nt.jsx("li",{onClick:()=>{n("/admin/works")},children:"Works"})]})})},x6=()=>nt.jsx(nt.Fragment,{children:"디자인 설정페이지"}),N6=Lt.section`
    background:#fff;
    padding: 20px;
    display: flex;
    gap:0 2%;
    flex-wrap: wrap;
    position: relative;
`,k6=Lt.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;

`,M6=Lt.button`
    position: absolute;
    bottom: 40px;
    right: 40px;
    border: 1px solid #111;
    padding:10px 20px;
    border-radius: 10px;
    font-size:18px;
    transition: background-color 0.7s;

    &:hover{
        background-color: #000;
        color:#fff;
    }
    

`,ea=Lt.label`
    display: flex;
    align-items: center;
    gap: 10px;
    width:100%;    
`,na=Lt.span`
    width: 20%;
`,Nh=Lt.input`
    outline:none;
    height: 28px;
    width: 80%;
    text-align: right;
`,P6=Lt.textarea`
    outline:none;
    height: 120px;
    width: 80%;
    text-align: right;
    resize: none;
    padding:10px;
`,V6=Lt.div`
    width: 80%;
    aspect-ratio: 1/0.4;
    border:1px solid #ddd;
    padding:10px;

`,L6=()=>{const[n,t]=X.useState(null),[e,s]=X.useState(""),o=qo(),u=()=>{o(-1)},[h,p]=X.useState({title:"",skills:"",desc:"",image:"",link:"",github:"",year:""}),m=A=>{const{name:w,value:I}=A.target;p(x=>({...x,[w]:I}))},g=A=>{const w=A.target.files[0];w&&t(w)},E=async()=>{try{let A="";if(n){const w=`${Date.now()}_${n.name}`,I=V4(l6,`images/${w}`);await M4(I,n),A=await P4(I)}await fk(iy(Sf,"works"),{...h,image:A}),alert("저장되었습니다!"),u()}catch(A){console.error("저장 오류:",A),alert("저장 중 오류가 발생했습니다.")}};return nt.jsxs(N6,{children:[nt.jsxs(k6,{children:[nt.jsxs(ea,{children:[nt.jsx(na,{children:"제목"}),nt.jsx(Nh,{type:"text",name:"name",onChange:m})]}),nt.jsxs(ea,{children:[nt.jsx(na,{children:"사용기술"}),nt.jsx(Nh,{type:"text",name:"skills",onChange:m})]}),nt.jsxs(ea,{children:[nt.jsx(na,{children:"설명"}),nt.jsx(P6,{type:"text",name:"desc",onChange:m})]}),nt.jsxs(ea,{children:[nt.jsx(na,{children:"이미지"}),nt.jsx("input",{type:"file",onChange:g})]}),nt.jsxs(ea,{children:[nt.jsx(na,{children:"이미지 미리보기"}),nt.jsx(V6,{children:e&&nt.jsx("img",{src:e,alt:"미리보기",style:{width:"100%"}})})]}),nt.jsxs(ea,{children:[nt.jsx(na,{children:"링크"}),nt.jsx(Nh,{type:"text",name:"link",onChange:m})]}),nt.jsxs(ea,{children:[nt.jsx(na,{children:"제작연도"}),nt.jsx(Nh,{type:"number",name:"year",onChange:m})]})]}),nt.jsx(M6,{type:"button",onClick:E,children:"추가"})]})},U6=()=>{const[n,t]=X.useState([]);X.useEffect(()=>{(async()=>{try{const I=(await US(iy(Sf,"works"))).docs.map(x=>({id:x.id,...x.data()}));t(I)}catch(w){console.error("작업물 가져오기 실패:",w)}})()},[]),Lt.div`
      width: 100%;
      display: flex;
      justify-content: end;
      height: 32px;
      gap:20px;
    `,Lt.input`
      padding: 6px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      width: 200px;
      outline: none;
    `;const e=Lt.ul`
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding:20px 0;
    `,s=Lt.li`
    width: 300px;
    height:170px;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
    position: relative;

    &:hover{
      transform: translateY(-4px);
    }
`,o=Lt.div`
      position: absolute;
      display: flex;
      gap:10px;
      top: 50px;
      right:50px; 
    `,u=Lt.button`
  padding: 0.5rem 1rem;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: black;
    color: white;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`,h=Lt.div`
  display: flex;
  position: absolute;
  gap:10px;
  top:5px;
  right:5px;
`,p=Lt.button`
  padding:8px 16px;
  background: red;
  color:#fff;
  border-radius: 5px;
`;Lt.button`
  padding:8px 16px;
  background: green;
  color:#fff; 
  border-radius: 5px;

`;const m=Lt.h3`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`,g=async A=>{if(window.confirm("정말 삭제하시겠습니까?"))try{await hk(IS(Sf,"works",A)),console.log("삭제 성공"),t(I=>I.filter(x=>x.id!==A))}catch(I){console.error("삭제 실패:",I),alert("삭제에 실패했습니다.")}},E=qo();return nt.jsxs("section",{children:[nt.jsx("h2",{children:"작업물 목록"}),nt.jsx(o,{children:nt.jsx(u,{onClick:()=>{E("/admin/works/add")},children:"추가"})}),nt.jsx(e,{children:n.map(A=>nt.jsxs(s,{children:[nt.jsx(h,{children:nt.jsx(p,{onClick:()=>g(A.id),children:"삭제"})}),nt.jsx(m,{children:A.name})]},A.id))})]})},z6=()=>nt.jsx(nt.Fragment,{children:nt.jsx(U6,{})}),B6=Lt.div`
    display:flex;
`,j6=Lt.div`
    background-color: #101010;
    flex-grow: 1;
    height: 100vh;    
    display: flex;
    padding:20px;
    
    

    section{
        width: 100%;
        background-color: #fff;
        border-radius: 30px;
        min-height: 860px;
        padding:80px 100px;
        position: relative;
    }
`,H6=()=>nt.jsxs(B6,{children:[nt.jsx(O6,{}),nt.jsx(j6,{children:nt.jsxs(Rf,{children:[nt.jsx(oi,{path:"design",element:nt.jsx(x6,{})}),nt.jsx(oi,{path:"works",element:nt.jsx(z6,{})}),nt.jsx(oi,{path:"works/add",element:nt.jsx(L6,{})})]})})]}),q6=()=>{const[n,t]=X.useState(!0);return nt.jsx(nt.Fragment,{children:n?nt.jsx(H6,{}):nt.jsx(s1,{})})},F6=()=>nt.jsxs(nt.Fragment,{children:[nt.jsx(v6,{}),nt.jsx("main",{children:nt.jsx(E6,{children:nt.jsxs(Rf,{children:[nt.jsx(oi,{path:"home",element:nt.jsx(cC,{})}),nt.jsx(oi,{path:"works",element:nt.jsx(d6,{})}),nt.jsx(oi,{path:"details",element:nt.jsx(p6,{})})]})})})]}),G6=()=>nt.jsxs(Rf,{children:[nt.jsx(oi,{path:"/*",element:nt.jsx(q6,{})}),nt.jsx(oi,{path:"/login",element:nt.jsx(s1,{})})]}),$6=()=>nt.jsxs(Rf,{children:[nt.jsx(oi,{path:"/*",element:nt.jsx(F6,{})}),nt.jsx(oi,{path:"/admin/*",element:nt.jsx(G6,{})})]}),K6=hD`
    /* 리셋 및 전역 css 설정 */
    *{margin: 0; padding:0;box-sizing:border-box}

    @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    
    body {
        font-family: 'NEXON Lv1 Gothic OTF', 'Pretendard', sans-serif;
        background-color: #f0f4f8;
        color: #333;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
    }    
    a {
        color: inherit;
        text-decoration: none;
    }    
    ul,li{list-style:none;}
    button {
        font-family: inherit;
        background: none;
        border: none;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        display: block;
    }    
`;function Y6(){return nt.jsxs(tC,{children:[nt.jsx(K6,{}),nt.jsx($6,{})]})}BR.createRoot(document.getElementById("root")).render(nt.jsx(X.StrictMode,{children:nt.jsx(Y6,{})}));
