var Rm=e=>{throw TypeError(e)};var Bu=(e,t,n)=>t.has(e)||Rm("Cannot "+n);var _=(e,t,n)=>(Bu(e,t,"read from private field"),n?n.call(e):t.get(e)),te=(e,t,n)=>t.has(e)?Rm("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),V=(e,t,n,s)=>(Bu(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),ue=(e,t,n)=>(Bu(e,t,"access private method"),n);var ul=(e,t,n,s)=>({set _(i){V(e,t,i,n)},get _(){return _(e,t,s)}});function N_(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(s,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Sv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _v={exports:{}},Jc={},Nv={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),C_=Symbol.for("react.portal"),k_=Symbol.for("react.fragment"),E_=Symbol.for("react.strict_mode"),T_=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),I_=Symbol.for("react.context"),P_=Symbol.for("react.forward_ref"),R_=Symbol.for("react.suspense"),M_=Symbol.for("react.memo"),D_=Symbol.for("react.lazy"),Mm=Symbol.iterator;function O_(e){return e===null||typeof e!="object"?null:(e=Mm&&e[Mm]||e["@@iterator"],typeof e=="function"?e:null)}var Cv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kv=Object.assign,Ev={};function co(e,t,n){this.props=e,this.context=t,this.refs=Ev,this.updater=n||Cv}co.prototype.isReactComponent={};co.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};co.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tv(){}Tv.prototype=co.prototype;function bf(e,t,n){this.props=e,this.context=t,this.refs=Ev,this.updater=n||Cv}var jf=bf.prototype=new Tv;jf.constructor=bf;kv(jf,co.prototype);jf.isPureReactComponent=!0;var Dm=Array.isArray,Av=Object.prototype.hasOwnProperty,Sf={current:null},Iv={key:!0,ref:!0,__self:!0,__source:!0};function Pv(e,t,n){var s,i={},o=null,a=null;if(t!=null)for(s in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Av.call(t,s)&&!Iv.hasOwnProperty(s)&&(i[s]=t[s]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(s in l=e.defaultProps,l)i[s]===void 0&&(i[s]=l[s]);return{$$typeof:Da,type:e,key:o,ref:a,props:i,_owner:Sf.current}}function L_(e,t){return{$$typeof:Da,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _f(e){return typeof e=="object"&&e!==null&&e.$$typeof===Da}function F_(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Om=/\/+/g;function Hu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?F_(""+e.key):t.toString(36)}function Ul(e,t,n,s,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Da:case C_:a=!0}}if(a)return a=e,i=i(a),e=s===""?"."+Hu(a,0):s,Dm(i)?(n="",e!=null&&(n=e.replace(Om,"$&/")+"/"),Ul(i,t,n,"",function(u){return u})):i!=null&&(_f(i)&&(i=L_(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Om,"$&/")+"/")+e)),t.push(i)),1;if(a=0,s=s===""?".":s+":",Dm(e))for(var l=0;l<e.length;l++){o=e[l];var c=s+Hu(o,l);a+=Ul(o,t,n,c,i)}else if(c=O_(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=s+Hu(o,l++),a+=Ul(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function dl(e,t,n){if(e==null)return e;var s=[],i=0;return Ul(e,s,"","",function(o){return t.call(n,o,i++)}),s}function U_(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var wt={current:null},$l={transition:null},$_={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:$l,ReactCurrentOwner:Sf};function Rv(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:dl,forEach:function(e,t,n){dl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return dl(e,function(){t++}),t},toArray:function(e){return dl(e,function(t){return t})||[]},only:function(e){if(!_f(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};he.Component=co;he.Fragment=k_;he.Profiler=T_;he.PureComponent=bf;he.StrictMode=E_;he.Suspense=R_;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$_;he.act=Rv;he.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=kv({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Sf.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Av.call(t,c)&&!Iv.hasOwnProperty(c)&&(s[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:Da,type:e.type,key:i,ref:o,props:s,_owner:a}};he.createContext=function(e){return e={$$typeof:I_,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:A_,_context:e},e.Consumer=e};he.createElement=Pv;he.createFactory=function(e){var t=Pv.bind(null,e);return t.type=e,t};he.createRef=function(){return{current:null}};he.forwardRef=function(e){return{$$typeof:P_,render:e}};he.isValidElement=_f;he.lazy=function(e){return{$$typeof:D_,_payload:{_status:-1,_result:e},_init:U_}};he.memo=function(e,t){return{$$typeof:M_,type:e,compare:t===void 0?null:t}};he.startTransition=function(e){var t=$l.transition;$l.transition={};try{e()}finally{$l.transition=t}};he.unstable_act=Rv;he.useCallback=function(e,t){return wt.current.useCallback(e,t)};he.useContext=function(e){return wt.current.useContext(e)};he.useDebugValue=function(){};he.useDeferredValue=function(e){return wt.current.useDeferredValue(e)};he.useEffect=function(e,t){return wt.current.useEffect(e,t)};he.useId=function(){return wt.current.useId()};he.useImperativeHandle=function(e,t,n){return wt.current.useImperativeHandle(e,t,n)};he.useInsertionEffect=function(e,t){return wt.current.useInsertionEffect(e,t)};he.useLayoutEffect=function(e,t){return wt.current.useLayoutEffect(e,t)};he.useMemo=function(e,t){return wt.current.useMemo(e,t)};he.useReducer=function(e,t,n){return wt.current.useReducer(e,t,n)};he.useRef=function(e){return wt.current.useRef(e)};he.useState=function(e){return wt.current.useState(e)};he.useSyncExternalStore=function(e,t,n){return wt.current.useSyncExternalStore(e,t,n)};he.useTransition=function(){return wt.current.useTransition()};he.version="18.3.1";Nv.exports=he;var d=Nv.exports;const vs=Sv(d),Mv=N_({__proto__:null,default:vs},[d]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_=d,B_=Symbol.for("react.element"),H_=Symbol.for("react.fragment"),W_=Object.prototype.hasOwnProperty,V_=z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K_={key:!0,ref:!0,__self:!0,__source:!0};function Dv(e,t,n){var s,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(s in t)W_.call(t,s)&&!K_.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:B_,type:e,key:o,ref:a,props:i,_owner:V_.current}}Jc.Fragment=H_;Jc.jsx=Dv;Jc.jsxs=Dv;_v.exports=Jc;var r=_v.exports,Ov={exports:{}},Bt={},Lv={exports:{}},Fv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var B=T.length;T.push(L);e:for(;0<B;){var ee=B-1>>>1,de=T[ee];if(0<i(de,L))T[ee]=L,T[B]=de,B=ee;else break e}}function n(T){return T.length===0?null:T[0]}function s(T){if(T.length===0)return null;var L=T[0],B=T.pop();if(B!==L){T[0]=B;e:for(var ee=0,de=T.length,ze=de>>>1;ee<ze;){var ke=2*(ee+1)-1,ct=T[ke],De=ke+1,X=T[De];if(0>i(ct,B))De<de&&0>i(X,ct)?(T[ee]=X,T[De]=B,ee=De):(T[ee]=ct,T[ke]=B,ee=ke);else if(De<de&&0>i(X,B))T[ee]=X,T[De]=B,ee=De;else break e}}return L}function i(T,L){var B=T.sortIndex-L.sortIndex;return B!==0?B:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],f=1,p=null,h=3,v=!1,b=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(T){for(var L=n(u);L!==null;){if(L.callback===null)s(u);else if(L.startTime<=T)s(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(u)}}function j(T){if(x=!1,w(T),!b)if(n(c)!==null)b=!0,W(S);else{var L=n(u);L!==null&&P(j,L.startTime-T)}}function S(T,L){b=!1,x&&(x=!1,g(I),I=-1),v=!0;var B=h;try{for(w(L),p=n(c);p!==null&&(!(p.expirationTime>L)||T&&!k());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,h=p.priorityLevel;var de=ee(p.expirationTime<=L);L=e.unstable_now(),typeof de=="function"?p.callback=de:p===n(c)&&s(c),w(L)}else s(c);p=n(c)}if(p!==null)var ze=!0;else{var ke=n(u);ke!==null&&P(j,ke.startTime-L),ze=!1}return ze}finally{p=null,h=B,v=!1}}var N=!1,C=null,I=-1,R=5,M=-1;function k(){return!(e.unstable_now()-M<R)}function F(){if(C!==null){var T=e.unstable_now();M=T;var L=!0;try{L=C(!0,T)}finally{L?A():(N=!1,C=null)}}else N=!1}var A;if(typeof m=="function")A=function(){m(F)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,Z=D.port2;D.port1.onmessage=F,A=function(){Z.postMessage(null)}}else A=function(){y(F,0)};function W(T){C=T,N||(N=!0,A())}function P(T,L){I=y(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){b||v||(b=!0,W(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var L=3;break;default:L=h}var B=h;h=L;try{return T()}finally{h=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var B=h;h=T;try{return L()}finally{h=B}},e.unstable_scheduleCallback=function(T,L,B){var ee=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ee+B:ee):B=ee,T){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=B+de,T={id:f++,callback:L,priorityLevel:T,startTime:B,expirationTime:de,sortIndex:-1},B>ee?(T.sortIndex=B,t(u,T),n(c)===null&&T===n(u)&&(x?(g(I),I=-1):x=!0,P(j,B-ee))):(T.sortIndex=de,t(c,T),b||v||(b=!0,W(S))),T},e.unstable_shouldYield=k,e.unstable_wrapCallback=function(T){var L=h;return function(){var B=h;h=L;try{return T.apply(this,arguments)}finally{h=B}}}})(Fv);Lv.exports=Fv;var G_=Lv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q_=d,zt=G_;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uv=new Set,na={};function Yr(e,t){qi(e,t),qi(e+"Capture",t)}function qi(e,t){for(na[e]=t,e=0;e<t.length;e++)Uv.add(t[e])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fd=Object.prototype.hasOwnProperty,Q_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lm={},Fm={};function J_(e){return Fd.call(Fm,e)?!0:Fd.call(Lm,e)?!1:Q_.test(e)?Fm[e]=!0:(Lm[e]=!0,!1)}function Y_(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function X_(e,t,n,s){if(t===null||typeof t>"u"||Y_(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function bt(e,t,n,s,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){tt[e]=new bt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];tt[t]=new bt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){tt[e]=new bt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){tt[e]=new bt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){tt[e]=new bt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){tt[e]=new bt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){tt[e]=new bt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){tt[e]=new bt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){tt[e]=new bt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Cf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nf,Cf);tt[t]=new bt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nf,Cf);tt[t]=new bt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nf,Cf);tt[t]=new bt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){tt[e]=new bt(e,1,!1,e.toLowerCase(),null,!1,!1)});tt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){tt[e]=new bt(e,1,!1,e.toLowerCase(),null,!0,!0)});function kf(e,t,n,s){var i=tt.hasOwnProperty(t)?tt[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(X_(t,n,i,s)&&(n=null),s||i===null?J_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,s=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var ds=q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),ai=Symbol.for("react.portal"),li=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),$v=Symbol.for("react.provider"),zv=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),$d=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),bs=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),Um=Symbol.iterator;function No(e){return e===null||typeof e!="object"?null:(e=Um&&e[Um]||e["@@iterator"],typeof e=="function"?e:null)}var Fe=Object.assign,Wu;function Do(e){if(Wu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wu=t&&t[1]||""}return`
`+Wu+e}var Vu=!1;function Ku(e,t){if(!e||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var s=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){s=u}e.call(t.prototype)}else{try{throw Error()}catch(u){s=u}e()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=s.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Do(e):""}function Z_(e){switch(e.tag){case 5:return Do(e.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return e=Ku(e.type,!1),e;case 11:return e=Ku(e.type.render,!1),e;case 1:return e=Ku(e.type,!0),e;default:return""}}function Bd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case li:return"Fragment";case ai:return"Portal";case Ud:return"Profiler";case Ef:return"StrictMode";case $d:return"Suspense";case zd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zv:return(e.displayName||"Context")+".Consumer";case $v:return(e._context.displayName||"Context")+".Provider";case Tf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Af:return t=e.displayName||null,t!==null?t:Bd(e.type)||"Memo";case bs:t=e._payload,e=e._init;try{return Bd(e(t))}catch{}}return null}function eN(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bd(t);case 8:return t===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tN(e){var t=Hv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){s=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fl(e){e._valueTracker||(e._valueTracker=tN(e))}function Wv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Hv(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function ac(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hd(e,t){var n=t.checked;return Fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function $m(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=er(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vv(e,t){t=t.checked,t!=null&&kf(e,"checked",t,!1)}function Wd(e,t){Vv(e,t);var n=er(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vd(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vd(e,t.type,er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vd(e,t,n){(t!=="number"||ac(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Oo=Array.isArray;function bi(e,t,n,s){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&s&&(e[n].defaultSelected=!0)}else{for(n=""+er(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Kd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return Fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Oo(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:er(n)}}function Kv(e,t){var n=er(t.value),s=er(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function Hm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gv(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gv(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pl,qv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nN=["Webkit","ms","Moz","O"];Object.keys(Ho).forEach(function(e){nN.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ho[t]=Ho[e]})});function Qv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ho.hasOwnProperty(e)&&Ho[e]?(""+t).trim():t+"px"}function Jv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,i=Qv(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,i):e[n]=i}}var sN=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(e,t){if(t){if(sN[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function Qd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jd=null;function If(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yd=null,ji=null,Si=null;function Wm(e){if(e=Fa(e)){if(typeof Yd!="function")throw Error($(280));var t=e.stateNode;t&&(t=tu(t),Yd(e.stateNode,e.type,t))}}function Yv(e){ji?Si?Si.push(e):Si=[e]:ji=e}function Xv(){if(ji){var e=ji,t=Si;if(Si=ji=null,Wm(e),t)for(e=0;e<t.length;e++)Wm(t[e])}}function Zv(e,t){return e(t)}function ey(){}var Gu=!1;function ty(e,t,n){if(Gu)return e(t,n);Gu=!0;try{return Zv(e,t,n)}finally{Gu=!1,(ji!==null||Si!==null)&&(ey(),Xv())}}function ra(e,t){var n=e.stateNode;if(n===null)return null;var s=tu(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var Xd=!1;if(Zn)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){Xd=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{Xd=!1}function rN(e,t,n,s,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Wo=!1,lc=null,cc=!1,Zd=null,iN={onError:function(e){Wo=!0,lc=e}};function oN(e,t,n,s,i,o,a,l,c){Wo=!1,lc=null,rN.apply(iN,arguments)}function aN(e,t,n,s,i,o,a,l,c){if(oN.apply(this,arguments),Wo){if(Wo){var u=lc;Wo=!1,lc=null}else throw Error($(198));cc||(cc=!0,Zd=u)}}function Xr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ny(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vm(e){if(Xr(e)!==e)throw Error($(188))}function lN(e){var t=e.alternate;if(!t){if(t=Xr(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,s=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(s=i.return,s!==null){n=s;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Vm(i),e;if(o===s)return Vm(i),t;o=o.sibling}throw Error($(188))}if(n.return!==s.return)n=i,s=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,s=o;break}if(l===s){a=!0,s=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,s=i;break}if(l===s){a=!0,s=o,n=i;break}l=l.sibling}if(!a)throw Error($(189))}}if(n.alternate!==s)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function sy(e){return e=lN(e),e!==null?ry(e):null}function ry(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ry(e);if(t!==null)return t;e=e.sibling}return null}var iy=zt.unstable_scheduleCallback,Km=zt.unstable_cancelCallback,cN=zt.unstable_shouldYield,uN=zt.unstable_requestPaint,He=zt.unstable_now,dN=zt.unstable_getCurrentPriorityLevel,Pf=zt.unstable_ImmediatePriority,oy=zt.unstable_UserBlockingPriority,uc=zt.unstable_NormalPriority,hN=zt.unstable_LowPriority,ay=zt.unstable_IdlePriority,Yc=null,Pn=null;function fN(e){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Yc,e,void 0,(e.current.flags&128)===128)}catch{}}var hn=Math.clz32?Math.clz32:gN,pN=Math.log,mN=Math.LN2;function gN(e){return e>>>=0,e===0?32:31-(pN(e)/mN|0)|0}var ml=64,gl=4194304;function Lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dc(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?s=Lo(l):(o&=a,o!==0&&(s=Lo(o)))}else a=n&~i,a!==0?s=Lo(a):o!==0&&(s=Lo(o));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-hn(t),i=1<<n,s|=e[n],t&=~i;return s}function xN(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vN(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-hn(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&s)&&(i[a]=xN(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function eh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ly(){var e=ml;return ml<<=1,!(ml&4194240)&&(ml=64),e}function qu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-hn(t),e[t]=n}function yN(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-hn(n),o=1<<i;t[i]=0,s[i]=-1,e[i]=-1,n&=~o}}function Rf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-hn(n),i=1<<s;i&t|e[s]&t&&(e[s]|=t),n&=~i}}var ye=0;function cy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uy,Mf,dy,hy,fy,th=!1,xl=[],$s=null,zs=null,Bs=null,ia=new Map,oa=new Map,Ss=[],wN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gm(e,t){switch(e){case"focusin":case"focusout":$s=null;break;case"dragenter":case"dragleave":zs=null;break;case"mouseover":case"mouseout":Bs=null;break;case"pointerover":case"pointerout":ia.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(t.pointerId)}}function ko(e,t,n,s,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Fa(t),t!==null&&Mf(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function bN(e,t,n,s,i){switch(t){case"focusin":return $s=ko($s,e,t,n,s,i),!0;case"dragenter":return zs=ko(zs,e,t,n,s,i),!0;case"mouseover":return Bs=ko(Bs,e,t,n,s,i),!0;case"pointerover":var o=i.pointerId;return ia.set(o,ko(ia.get(o)||null,e,t,n,s,i)),!0;case"gotpointercapture":return o=i.pointerId,oa.set(o,ko(oa.get(o)||null,e,t,n,s,i)),!0}return!1}function py(e){var t=vr(e.target);if(t!==null){var n=Xr(t);if(n!==null){if(t=n.tag,t===13){if(t=ny(n),t!==null){e.blockedOn=t,fy(e.priority,function(){dy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Jd=s,n.target.dispatchEvent(s),Jd=null}else return t=Fa(n),t!==null&&Mf(t),e.blockedOn=n,!1;t.shift()}return!0}function qm(e,t,n){zl(e)&&n.delete(t)}function jN(){th=!1,$s!==null&&zl($s)&&($s=null),zs!==null&&zl(zs)&&(zs=null),Bs!==null&&zl(Bs)&&(Bs=null),ia.forEach(qm),oa.forEach(qm)}function Eo(e,t){e.blockedOn===t&&(e.blockedOn=null,th||(th=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,jN)))}function aa(e){function t(i){return Eo(i,e)}if(0<xl.length){Eo(xl[0],e);for(var n=1;n<xl.length;n++){var s=xl[n];s.blockedOn===e&&(s.blockedOn=null)}}for($s!==null&&Eo($s,e),zs!==null&&Eo(zs,e),Bs!==null&&Eo(Bs,e),ia.forEach(t),oa.forEach(t),n=0;n<Ss.length;n++)s=Ss[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<Ss.length&&(n=Ss[0],n.blockedOn===null);)py(n),n.blockedOn===null&&Ss.shift()}var _i=ds.ReactCurrentBatchConfig,hc=!0;function SN(e,t,n,s){var i=ye,o=_i.transition;_i.transition=null;try{ye=1,Df(e,t,n,s)}finally{ye=i,_i.transition=o}}function _N(e,t,n,s){var i=ye,o=_i.transition;_i.transition=null;try{ye=4,Df(e,t,n,s)}finally{ye=i,_i.transition=o}}function Df(e,t,n,s){if(hc){var i=nh(e,t,n,s);if(i===null)rd(e,t,s,fc,n),Gm(e,s);else if(bN(i,e,t,n,s))s.stopPropagation();else if(Gm(e,s),t&4&&-1<wN.indexOf(e)){for(;i!==null;){var o=Fa(i);if(o!==null&&uy(o),o=nh(e,t,n,s),o===null&&rd(e,t,s,fc,n),o===i)break;i=o}i!==null&&s.stopPropagation()}else rd(e,t,s,null,n)}}var fc=null;function nh(e,t,n,s){if(fc=null,e=If(s),e=vr(e),e!==null)if(t=Xr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ny(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fc=e,null}function my(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dN()){case Pf:return 1;case oy:return 4;case uc:case hN:return 16;case ay:return 536870912;default:return 16}default:return 16}}var Fs=null,Of=null,Bl=null;function gy(){if(Bl)return Bl;var e,t=Of,n=t.length,s,i="value"in Fs?Fs.value:Fs.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(s=1;s<=a&&t[n-s]===i[o-s];s++);return Bl=i.slice(e,1<s?1-s:void 0)}function Hl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function Qm(){return!1}function Ht(e){function t(n,s,i,o,a){this._reactName=n,this._targetInst=i,this.type=s,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vl:Qm,this.isPropagationStopped=Qm,this}return Fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),t}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lf=Ht(uo),La=Fe({},uo,{view:0,detail:0}),NN=Ht(La),Qu,Ju,To,Xc=Fe({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(Qu=e.screenX-To.screenX,Ju=e.screenY-To.screenY):Ju=Qu=0,To=e),Qu)},movementY:function(e){return"movementY"in e?e.movementY:Ju}}),Jm=Ht(Xc),CN=Fe({},Xc,{dataTransfer:0}),kN=Ht(CN),EN=Fe({},La,{relatedTarget:0}),Yu=Ht(EN),TN=Fe({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),AN=Ht(TN),IN=Fe({},uo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),PN=Ht(IN),RN=Fe({},uo,{data:0}),Ym=Ht(RN),MN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},DN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ON={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function LN(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ON[e])?!!t[e]:!1}function Ff(){return LN}var FN=Fe({},La,{key:function(e){if(e.key){var t=MN[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?DN[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(e){return e.type==="keypress"?Hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),UN=Ht(FN),$N=Fe({},Xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=Ht($N),zN=Fe({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),BN=Ht(zN),HN=Fe({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),WN=Ht(HN),VN=Fe({},Xc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),KN=Ht(VN),GN=[9,13,27,32],Uf=Zn&&"CompositionEvent"in window,Vo=null;Zn&&"documentMode"in document&&(Vo=document.documentMode);var qN=Zn&&"TextEvent"in window&&!Vo,xy=Zn&&(!Uf||Vo&&8<Vo&&11>=Vo),Zm=" ",eg=!1;function vy(e,t){switch(e){case"keyup":return GN.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function QN(e,t){switch(e){case"compositionend":return yy(t);case"keypress":return t.which!==32?null:(eg=!0,Zm);case"textInput":return e=t.data,e===Zm&&eg?null:e;default:return null}}function JN(e,t){if(ci)return e==="compositionend"||!Uf&&vy(e,t)?(e=gy(),Bl=Of=Fs=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xy&&t.locale!=="ko"?null:t.data;default:return null}}var YN={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!YN[e.type]:t==="textarea"}function wy(e,t,n,s){Yv(s),t=pc(t,"onChange"),0<t.length&&(n=new Lf("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Ko=null,la=null;function XN(e){Iy(e,0)}function Zc(e){var t=hi(e);if(Wv(t))return e}function ZN(e,t){if(e==="change")return t}var by=!1;if(Zn){var Xu;if(Zn){var Zu="oninput"in document;if(!Zu){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),Zu=typeof ng.oninput=="function"}Xu=Zu}else Xu=!1;by=Xu&&(!document.documentMode||9<document.documentMode)}function sg(){Ko&&(Ko.detachEvent("onpropertychange",jy),la=Ko=null)}function jy(e){if(e.propertyName==="value"&&Zc(la)){var t=[];wy(t,la,e,If(e)),ty(XN,t)}}function eC(e,t,n){e==="focusin"?(sg(),Ko=t,la=n,Ko.attachEvent("onpropertychange",jy)):e==="focusout"&&sg()}function tC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zc(la)}function nC(e,t){if(e==="click")return Zc(t)}function sC(e,t){if(e==="input"||e==="change")return Zc(t)}function rC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mn=typeof Object.is=="function"?Object.is:rC;function ca(e,t){if(mn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var i=n[s];if(!Fd.call(t,i)||!mn(e[i],t[i]))return!1}return!0}function rg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ig(e,t){var n=rg(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rg(n)}}function Sy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _y(){for(var e=window,t=ac();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ac(e.document)}return t}function $f(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function iC(e){var t=_y(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sy(n.ownerDocument.documentElement,n)){if(s!==null&&$f(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(s.start,i);s=s.end===void 0?o:Math.min(s.end,i),!e.extend&&o>s&&(i=s,s=o,o=i),i=ig(n,o);var a=ig(n,s);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>s?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var oC=Zn&&"documentMode"in document&&11>=document.documentMode,ui=null,sh=null,Go=null,rh=!1;function og(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||ui==null||ui!==ac(s)||(s=ui,"selectionStart"in s&&$f(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Go&&ca(Go,s)||(Go=s,s=pc(sh,"onSelect"),0<s.length&&(t=new Lf("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=ui)))}function yl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var di={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},ed={},Ny={};Zn&&(Ny=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function eu(e){if(ed[e])return ed[e];if(!di[e])return e;var t=di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ny)return ed[e]=t[n];return e}var Cy=eu("animationend"),ky=eu("animationiteration"),Ey=eu("animationstart"),Ty=eu("transitionend"),Ay=new Map,ag="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(e,t){Ay.set(e,t),Yr(t,[e])}for(var td=0;td<ag.length;td++){var nd=ag[td],aC=nd.toLowerCase(),lC=nd[0].toUpperCase()+nd.slice(1);lr(aC,"on"+lC)}lr(Cy,"onAnimationEnd");lr(ky,"onAnimationIteration");lr(Ey,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Ty,"onTransitionEnd");qi("onMouseEnter",["mouseout","mouseover"]);qi("onMouseLeave",["mouseout","mouseover"]);qi("onPointerEnter",["pointerout","pointerover"]);qi("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function lg(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,aN(s,t,void 0,e),e.currentTarget=null}function Iy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],i=s.event;s=s.listeners;e:{var o=void 0;if(t)for(var a=s.length-1;0<=a;a--){var l=s[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;lg(i,l,u),o=c}else for(a=0;a<s.length;a++){if(l=s[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;lg(i,l,u),o=c}}}if(cc)throw e=Zd,cc=!1,Zd=null,e}function Te(e,t){var n=t[ch];n===void 0&&(n=t[ch]=new Set);var s=e+"__bubble";n.has(s)||(Py(t,e,2,!1),n.add(s))}function sd(e,t,n){var s=0;t&&(s|=4),Py(n,e,s,t)}var wl="_reactListening"+Math.random().toString(36).slice(2);function ua(e){if(!e[wl]){e[wl]=!0,Uv.forEach(function(n){n!=="selectionchange"&&(cC.has(n)||sd(n,!1,e),sd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wl]||(t[wl]=!0,sd("selectionchange",!1,t))}}function Py(e,t,n,s){switch(my(t)){case 1:var i=SN;break;case 4:i=_N;break;default:i=Df}n=i.bind(null,t,n,e),i=void 0,!Xd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function rd(e,t,n,s,i){var o=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var a=s.tag;if(a===3||a===4){var l=s.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=s.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=vr(l),a===null)return;if(c=a.tag,c===5||c===6){s=o=a;continue e}l=l.parentNode}}s=s.return}ty(function(){var u=o,f=If(n),p=[];e:{var h=Ay.get(e);if(h!==void 0){var v=Lf,b=e;switch(e){case"keypress":if(Hl(n)===0)break e;case"keydown":case"keyup":v=UN;break;case"focusin":b="focus",v=Yu;break;case"focusout":b="blur",v=Yu;break;case"beforeblur":case"afterblur":v=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=kN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=BN;break;case Cy:case ky:case Ey:v=AN;break;case Ty:v=WN;break;case"scroll":v=NN;break;case"wheel":v=KN;break;case"copy":case"cut":case"paste":v=PN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Xm}var x=(t&4)!==0,y=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var m=u,w;m!==null;){w=m;var j=w.stateNode;if(w.tag===5&&j!==null&&(w=j,g!==null&&(j=ra(m,g),j!=null&&x.push(da(m,j,w)))),y)break;m=m.return}0<x.length&&(h=new v(h,b,null,n,f),p.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Jd&&(b=n.relatedTarget||n.fromElement)&&(vr(b)||b[es]))break e;if((v||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,v?(b=n.relatedTarget||n.toElement,v=u,b=b?vr(b):null,b!==null&&(y=Xr(b),b!==y||b.tag!==5&&b.tag!==6)&&(b=null)):(v=null,b=u),v!==b)){if(x=Jm,j="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Xm,j="onPointerLeave",g="onPointerEnter",m="pointer"),y=v==null?h:hi(v),w=b==null?h:hi(b),h=new x(j,m+"leave",v,n,f),h.target=y,h.relatedTarget=w,j=null,vr(f)===u&&(x=new x(g,m+"enter",b,n,f),x.target=w,x.relatedTarget=y,j=x),y=j,v&&b)t:{for(x=v,g=b,m=0,w=x;w;w=si(w))m++;for(w=0,j=g;j;j=si(j))w++;for(;0<m-w;)x=si(x),m--;for(;0<w-m;)g=si(g),w--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break t;x=si(x),g=si(g)}x=null}else x=null;v!==null&&cg(p,h,v,x,!1),b!==null&&y!==null&&cg(p,y,b,x,!0)}}e:{if(h=u?hi(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=ZN;else if(tg(h))if(by)S=sC;else{S=tC;var N=eC}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=nC);if(S&&(S=S(e,u))){wy(p,S,n,f);break e}N&&N(e,h,u),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Vd(h,"number",h.value)}switch(N=u?hi(u):window,e){case"focusin":(tg(N)||N.contentEditable==="true")&&(ui=N,sh=u,Go=null);break;case"focusout":Go=sh=ui=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,og(p,n,f);break;case"selectionchange":if(oC)break;case"keydown":case"keyup":og(p,n,f)}var C;if(Uf)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ci?vy(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(xy&&n.locale!=="ko"&&(ci||I!=="onCompositionStart"?I==="onCompositionEnd"&&ci&&(C=gy()):(Fs=f,Of="value"in Fs?Fs.value:Fs.textContent,ci=!0)),N=pc(u,I),0<N.length&&(I=new Ym(I,e,null,n,f),p.push({event:I,listeners:N}),C?I.data=C:(C=yy(n),C!==null&&(I.data=C)))),(C=qN?QN(e,n):JN(e,n))&&(u=pc(u,"onBeforeInput"),0<u.length&&(f=new Ym("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=C))}Iy(p,t)})}function da(e,t,n){return{instance:e,listener:t,currentTarget:n}}function pc(e,t){for(var n=t+"Capture",s=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ra(e,n),o!=null&&s.unshift(da(e,o,i)),o=ra(e,t),o!=null&&s.push(da(e,o,i))),e=e.return}return s}function si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cg(e,t,n,s,i){for(var o=t._reactName,a=[];n!==null&&n!==s;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===s)break;l.tag===5&&u!==null&&(l=u,i?(c=ra(n,o),c!=null&&a.unshift(da(n,c,l))):i||(c=ra(n,o),c!=null&&a.push(da(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var uC=/\r\n?/g,dC=/\u0000|\uFFFD/g;function ug(e){return(typeof e=="string"?e:""+e).replace(uC,`
`).replace(dC,"")}function bl(e,t,n){if(t=ug(t),ug(e)!==t&&n)throw Error($(425))}function mc(){}var ih=null,oh=null;function ah(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lh=typeof setTimeout=="function"?setTimeout:void 0,hC=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,fC=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(e){return dg.resolve(null).then(e).catch(pC)}:lh;function pC(e){setTimeout(function(){throw e})}function id(e,t){var n=t,s=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(s===0){e.removeChild(i),aa(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=i}while(n);aa(t)}function Hs(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ho=Math.random().toString(36).slice(2),Cn="__reactFiber$"+ho,ha="__reactProps$"+ho,es="__reactContainer$"+ho,ch="__reactEvents$"+ho,mC="__reactListeners$"+ho,gC="__reactHandles$"+ho;function vr(e){var t=e[Cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[es]||n[Cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hg(e);e!==null;){if(n=e[Cn])return n;e=hg(e)}return t}e=n,n=e.parentNode}return null}function Fa(e){return e=e[Cn]||e[es],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function tu(e){return e[ha]||null}var uh=[],fi=-1;function cr(e){return{current:e}}function Pe(e){0>fi||(e.current=uh[fi],uh[fi]=null,fi--)}function Ce(e,t){fi++,uh[fi]=e.current,e.current=t}var tr={},ot=cr(tr),It=cr(!1),Or=tr;function Qi(e,t){var n=e.type.contextTypes;if(!n)return tr;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pt(e){return e=e.childContextTypes,e!=null}function gc(){Pe(It),Pe(ot)}function fg(e,t,n){if(ot.current!==tr)throw Error($(168));Ce(ot,t),Ce(It,n)}function Ry(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error($(108,eN(e)||"Unknown",i));return Fe({},n,s)}function xc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tr,Or=ot.current,Ce(ot,e),Ce(It,It.current),!0}function pg(e,t,n){var s=e.stateNode;if(!s)throw Error($(169));n?(e=Ry(e,t,Or),s.__reactInternalMemoizedMergedChildContext=e,Pe(It),Pe(ot),Ce(ot,e)):Pe(It),Ce(It,n)}var Hn=null,nu=!1,od=!1;function My(e){Hn===null?Hn=[e]:Hn.push(e)}function xC(e){nu=!0,My(e)}function ur(){if(!od&&Hn!==null){od=!0;var e=0,t=ye;try{var n=Hn;for(ye=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}Hn=null,nu=!1}catch(i){throw Hn!==null&&(Hn=Hn.slice(e+1)),iy(Pf,ur),i}finally{ye=t,od=!1}}return null}var pi=[],mi=0,vc=null,yc=0,Kt=[],Gt=0,Lr=null,Kn=1,Gn="";function mr(e,t){pi[mi++]=yc,pi[mi++]=vc,vc=e,yc=t}function Dy(e,t,n){Kt[Gt++]=Kn,Kt[Gt++]=Gn,Kt[Gt++]=Lr,Lr=e;var s=Kn;e=Gn;var i=32-hn(s)-1;s&=~(1<<i),n+=1;var o=32-hn(t)+i;if(30<o){var a=i-i%5;o=(s&(1<<a)-1).toString(32),s>>=a,i-=a,Kn=1<<32-hn(t)+i|n<<i|s,Gn=o+e}else Kn=1<<o|n<<i|s,Gn=e}function zf(e){e.return!==null&&(mr(e,1),Dy(e,1,0))}function Bf(e){for(;e===vc;)vc=pi[--mi],pi[mi]=null,yc=pi[--mi],pi[mi]=null;for(;e===Lr;)Lr=Kt[--Gt],Kt[Gt]=null,Gn=Kt[--Gt],Kt[Gt]=null,Kn=Kt[--Gt],Kt[Gt]=null}var Ut=null,Lt=null,Me=!1,cn=null;function Oy(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mg(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ut=e,Lt=Hs(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ut=e,Lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lr!==null?{id:Kn,overflow:Gn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ut=e,Lt=null,!0):!1;default:return!1}}function dh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function hh(e){if(Me){var t=Lt;if(t){var n=t;if(!mg(e,t)){if(dh(e))throw Error($(418));t=Hs(n.nextSibling);var s=Ut;t&&mg(e,t)?Oy(s,n):(e.flags=e.flags&-4097|2,Me=!1,Ut=e)}}else{if(dh(e))throw Error($(418));e.flags=e.flags&-4097|2,Me=!1,Ut=e}}}function gg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ut=e}function jl(e){if(e!==Ut)return!1;if(!Me)return gg(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ah(e.type,e.memoizedProps)),t&&(t=Lt)){if(dh(e))throw Ly(),Error($(418));for(;t;)Oy(e,t),t=Hs(t.nextSibling)}if(gg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Lt=Hs(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Lt=null}}else Lt=Ut?Hs(e.stateNode.nextSibling):null;return!0}function Ly(){for(var e=Lt;e;)e=Hs(e.nextSibling)}function Ji(){Lt=Ut=null,Me=!1}function Hf(e){cn===null?cn=[e]:cn.push(e)}var vC=ds.ReactCurrentBatchConfig;function Ao(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var s=n.stateNode}if(!s)throw Error($(147,e));var i=s,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function Sl(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xg(e){var t=e._init;return t(e._payload)}function Fy(e){function t(g,m){if(e){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function s(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Gs(g,m),g.index=0,g.sibling=null,g}function o(g,m,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,w,j){return m===null||m.tag!==6?(m=fd(w,g.mode,j),m.return=g,m):(m=i(m,w),m.return=g,m)}function c(g,m,w,j){var S=w.type;return S===li?f(g,m,w.props.children,j,w.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bs&&xg(S)===m.type)?(j=i(m,w.props),j.ref=Ao(g,m,w),j.return=g,j):(j=Jl(w.type,w.key,w.props,null,g.mode,j),j.ref=Ao(g,m,w),j.return=g,j)}function u(g,m,w,j){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=pd(w,g.mode,j),m.return=g,m):(m=i(m,w.children||[]),m.return=g,m)}function f(g,m,w,j,S){return m===null||m.tag!==7?(m=Pr(w,g.mode,j,S),m.return=g,m):(m=i(m,w),m.return=g,m)}function p(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=fd(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hl:return w=Jl(m.type,m.key,m.props,null,g.mode,w),w.ref=Ao(g,null,m),w.return=g,w;case ai:return m=pd(m,g.mode,w),m.return=g,m;case bs:var j=m._init;return p(g,j(m._payload),w)}if(Oo(m)||No(m))return m=Pr(m,g.mode,w,null),m.return=g,m;Sl(g,m)}return null}function h(g,m,w,j){var S=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:l(g,m,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case hl:return w.key===S?c(g,m,w,j):null;case ai:return w.key===S?u(g,m,w,j):null;case bs:return S=w._init,h(g,m,S(w._payload),j)}if(Oo(w)||No(w))return S!==null?null:f(g,m,w,j,null);Sl(g,w)}return null}function v(g,m,w,j,S){if(typeof j=="string"&&j!==""||typeof j=="number")return g=g.get(w)||null,l(m,g,""+j,S);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case hl:return g=g.get(j.key===null?w:j.key)||null,c(m,g,j,S);case ai:return g=g.get(j.key===null?w:j.key)||null,u(m,g,j,S);case bs:var N=j._init;return v(g,m,w,N(j._payload),S)}if(Oo(j)||No(j))return g=g.get(w)||null,f(m,g,j,S,null);Sl(m,j)}return null}function b(g,m,w,j){for(var S=null,N=null,C=m,I=m=0,R=null;C!==null&&I<w.length;I++){C.index>I?(R=C,C=null):R=C.sibling;var M=h(g,C,w[I],j);if(M===null){C===null&&(C=R);break}e&&C&&M.alternate===null&&t(g,C),m=o(M,m,I),N===null?S=M:N.sibling=M,N=M,C=R}if(I===w.length)return n(g,C),Me&&mr(g,I),S;if(C===null){for(;I<w.length;I++)C=p(g,w[I],j),C!==null&&(m=o(C,m,I),N===null?S=C:N.sibling=C,N=C);return Me&&mr(g,I),S}for(C=s(g,C);I<w.length;I++)R=v(C,g,I,w[I],j),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?I:R.key),m=o(R,m,I),N===null?S=R:N.sibling=R,N=R);return e&&C.forEach(function(k){return t(g,k)}),Me&&mr(g,I),S}function x(g,m,w,j){var S=No(w);if(typeof S!="function")throw Error($(150));if(w=S.call(w),w==null)throw Error($(151));for(var N=S=null,C=m,I=m=0,R=null,M=w.next();C!==null&&!M.done;I++,M=w.next()){C.index>I?(R=C,C=null):R=C.sibling;var k=h(g,C,M.value,j);if(k===null){C===null&&(C=R);break}e&&C&&k.alternate===null&&t(g,C),m=o(k,m,I),N===null?S=k:N.sibling=k,N=k,C=R}if(M.done)return n(g,C),Me&&mr(g,I),S;if(C===null){for(;!M.done;I++,M=w.next())M=p(g,M.value,j),M!==null&&(m=o(M,m,I),N===null?S=M:N.sibling=M,N=M);return Me&&mr(g,I),S}for(C=s(g,C);!M.done;I++,M=w.next())M=v(C,g,I,M.value,j),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?I:M.key),m=o(M,m,I),N===null?S=M:N.sibling=M,N=M);return e&&C.forEach(function(F){return t(g,F)}),Me&&mr(g,I),S}function y(g,m,w,j){if(typeof w=="object"&&w!==null&&w.type===li&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case hl:e:{for(var S=w.key,N=m;N!==null;){if(N.key===S){if(S=w.type,S===li){if(N.tag===7){n(g,N.sibling),m=i(N,w.props.children),m.return=g,g=m;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bs&&xg(S)===N.type){n(g,N.sibling),m=i(N,w.props),m.ref=Ao(g,N,w),m.return=g,g=m;break e}n(g,N);break}else t(g,N);N=N.sibling}w.type===li?(m=Pr(w.props.children,g.mode,j,w.key),m.return=g,g=m):(j=Jl(w.type,w.key,w.props,null,g.mode,j),j.ref=Ao(g,m,w),j.return=g,g=j)}return a(g);case ai:e:{for(N=w.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){n(g,m.sibling),m=i(m,w.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=pd(w,g.mode,j),m.return=g,g=m}return a(g);case bs:return N=w._init,y(g,m,N(w._payload),j)}if(Oo(w))return b(g,m,w,j);if(No(w))return x(g,m,w,j);Sl(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,w),m.return=g,g=m):(n(g,m),m=fd(w,g.mode,j),m.return=g,g=m),a(g)):n(g,m)}return y}var Yi=Fy(!0),Uy=Fy(!1),wc=cr(null),bc=null,gi=null,Wf=null;function Vf(){Wf=gi=bc=null}function Kf(e){var t=wc.current;Pe(wc),e._currentValue=t}function fh(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Ni(e,t){bc=e,Wf=gi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ct=!0),e.firstContext=null)}function Zt(e){var t=e._currentValue;if(Wf!==e)if(e={context:e,memoizedValue:t,next:null},gi===null){if(bc===null)throw Error($(308));gi=e,bc.dependencies={lanes:0,firstContext:e}}else gi=gi.next=e;return t}var yr=null;function Gf(e){yr===null?yr=[e]:yr.push(e)}function $y(e,t,n,s){var i=t.interleaved;return i===null?(n.next=n,Gf(t)):(n.next=i.next,i.next=n),t.interleaved=n,ts(e,s)}function ts(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var js=!1;function qf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ws(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,ge&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,ts(e,n)}return i=s.interleaved,i===null?(t.next=t,Gf(s)):(t.next=i.next,i.next=t),s.interleaved=t,ts(e,n)}function Wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Rf(e,n)}}function vg(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jc(e,t,n,s){var i=e.updateQueue;js=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;a=0,f=u=c=null,l=o;do{var h=l.lane,v=l.eventTime;if((s&h)===h){f!==null&&(f=f.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var b=e,x=l;switch(h=t,v=n,x.tag){case 1:if(b=x.payload,typeof b=="function"){p=b.call(v,p,h);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=x.payload,h=typeof b=="function"?b.call(v,p,h):b,h==null)break e;p=Fe({},p,h);break e;case 2:js=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=v,c=p):f=f.next=v,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ur|=a,e.lanes=a,e.memoizedState=p}}function yg(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=n,typeof i!="function")throw Error($(191,i));i.call(s)}}}var Ua={},Rn=cr(Ua),fa=cr(Ua),pa=cr(Ua);function wr(e){if(e===Ua)throw Error($(174));return e}function Qf(e,t){switch(Ce(pa,t),Ce(fa,e),Ce(Rn,Ua),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gd(t,e)}Pe(Rn),Ce(Rn,t)}function Xi(){Pe(Rn),Pe(fa),Pe(pa)}function By(e){wr(pa.current);var t=wr(Rn.current),n=Gd(t,e.type);t!==n&&(Ce(fa,e),Ce(Rn,n))}function Jf(e){fa.current===e&&(Pe(Rn),Pe(fa))}var Oe=cr(0);function Sc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ad=[];function Yf(){for(var e=0;e<ad.length;e++)ad[e]._workInProgressVersionPrimary=null;ad.length=0}var Vl=ds.ReactCurrentDispatcher,ld=ds.ReactCurrentBatchConfig,Fr=0,Le=null,Ke=null,Qe=null,_c=!1,qo=!1,ma=0,yC=0;function nt(){throw Error($(321))}function Xf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mn(e[n],t[n]))return!1;return!0}function Zf(e,t,n,s,i,o){if(Fr=o,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Vl.current=e===null||e.memoizedState===null?SC:_C,e=n(s,i),qo){o=0;do{if(qo=!1,ma=0,25<=o)throw Error($(301));o+=1,Qe=Ke=null,t.updateQueue=null,Vl.current=NC,e=n(s,i)}while(qo)}if(Vl.current=Nc,t=Ke!==null&&Ke.next!==null,Fr=0,Qe=Ke=Le=null,_c=!1,t)throw Error($(300));return e}function ep(){var e=ma!==0;return ma=0,e}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Le.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function en(){if(Ke===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var t=Qe===null?Le.memoizedState:Qe.next;if(t!==null)Qe=t,Ke=e;else{if(e===null)throw Error($(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Qe===null?Le.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function ga(e,t){return typeof t=="function"?t(e):t}function cd(e){var t=en(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var s=Ke,i=s.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}s.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,s=s.baseState;var l=a=null,c=null,u=o;do{var f=u.lane;if((Fr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:e(s,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=s):c=c.next=p,Le.lanes|=f,Ur|=f}u=u.next}while(u!==null&&u!==o);c===null?a=s:c.next=l,mn(s,t.memoizedState)||(Ct=!0),t.memoizedState=s,t.baseState=a,t.baseQueue=c,n.lastRenderedState=s}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Le.lanes|=o,Ur|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ud(e){var t=en(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var s=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);mn(o,t.memoizedState)||(Ct=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,s]}function Hy(){}function Wy(e,t){var n=Le,s=en(),i=t(),o=!mn(s.memoizedState,i);if(o&&(s.memoizedState=i,Ct=!0),s=s.queue,tp(Gy.bind(null,n,s,e),[e]),s.getSnapshot!==t||o||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,xa(9,Ky.bind(null,n,s,i,t),void 0,null),Ye===null)throw Error($(349));Fr&30||Vy(n,t,i)}return i}function Vy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ky(e,t,n,s){t.value=n,t.getSnapshot=s,qy(t)&&Qy(e)}function Gy(e,t,n){return n(function(){qy(t)&&Qy(e)})}function qy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mn(e,n)}catch{return!0}}function Qy(e){var t=ts(e,1);t!==null&&fn(t,e,1,-1)}function wg(e){var t=jn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:e},t.queue=e,e=e.dispatch=jC.bind(null,Le,e),[t.memoizedState,e]}function xa(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function Jy(){return en().memoizedState}function Kl(e,t,n,s){var i=jn();Le.flags|=e,i.memoizedState=xa(1|t,n,void 0,s===void 0?null:s)}function su(e,t,n,s){var i=en();s=s===void 0?null:s;var o=void 0;if(Ke!==null){var a=Ke.memoizedState;if(o=a.destroy,s!==null&&Xf(s,a.deps)){i.memoizedState=xa(t,n,o,s);return}}Le.flags|=e,i.memoizedState=xa(1|t,n,o,s)}function bg(e,t){return Kl(8390656,8,e,t)}function tp(e,t){return su(2048,8,e,t)}function Yy(e,t){return su(4,2,e,t)}function Xy(e,t){return su(4,4,e,t)}function Zy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ew(e,t,n){return n=n!=null?n.concat([e]):null,su(4,4,Zy.bind(null,t,e),n)}function np(){}function tw(e,t){var n=en();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Xf(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function nw(e,t){var n=en();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Xf(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function sw(e,t,n){return Fr&21?(mn(n,t)||(n=ly(),Le.lanes|=n,Ur|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ct=!0),e.memoizedState=n)}function wC(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var s=ld.transition;ld.transition={};try{e(!1),t()}finally{ye=n,ld.transition=s}}function rw(){return en().memoizedState}function bC(e,t,n){var s=Ks(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},iw(e))ow(t,n);else if(n=$y(e,t,n,s),n!==null){var i=gt();fn(n,e,s,i),aw(n,t,s)}}function jC(e,t,n){var s=Ks(e),i={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(iw(e))ow(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,mn(l,a)){var c=t.interleaved;c===null?(i.next=i,Gf(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=$y(e,t,i,s),n!==null&&(i=gt(),fn(n,e,s,i),aw(n,t,s))}}function iw(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function ow(e,t){qo=_c=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function aw(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Rf(e,n)}}var Nc={readContext:Zt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},SC={readContext:Zt,useCallback:function(e,t){return jn().memoizedState=[e,t===void 0?null:t],e},useContext:Zt,useEffect:bg,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Kl(4194308,4,Zy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Kl(4,2,e,t)},useMemo:function(e,t){var n=jn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=jn();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=bC.bind(null,Le,e),[s.memoizedState,e]},useRef:function(e){var t=jn();return e={current:e},t.memoizedState=e},useState:wg,useDebugValue:np,useDeferredValue:function(e){return jn().memoizedState=e},useTransition:function(){var e=wg(!1),t=e[0];return e=wC.bind(null,e[1]),jn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=Le,i=jn();if(Me){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Ye===null)throw Error($(349));Fr&30||Vy(s,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bg(Gy.bind(null,s,o,e),[e]),s.flags|=2048,xa(9,Ky.bind(null,s,o,n,t),void 0,null),n},useId:function(){var e=jn(),t=Ye.identifierPrefix;if(Me){var n=Gn,s=Kn;n=(s&~(1<<32-hn(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=ma++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_C={readContext:Zt,useCallback:tw,useContext:Zt,useEffect:tp,useImperativeHandle:ew,useInsertionEffect:Yy,useLayoutEffect:Xy,useMemo:nw,useReducer:cd,useRef:Jy,useState:function(){return cd(ga)},useDebugValue:np,useDeferredValue:function(e){var t=en();return sw(t,Ke.memoizedState,e)},useTransition:function(){var e=cd(ga)[0],t=en().memoizedState;return[e,t]},useMutableSource:Hy,useSyncExternalStore:Wy,useId:rw,unstable_isNewReconciler:!1},NC={readContext:Zt,useCallback:tw,useContext:Zt,useEffect:tp,useImperativeHandle:ew,useInsertionEffect:Yy,useLayoutEffect:Xy,useMemo:nw,useReducer:ud,useRef:Jy,useState:function(){return ud(ga)},useDebugValue:np,useDeferredValue:function(e){var t=en();return Ke===null?t.memoizedState=e:sw(t,Ke.memoizedState,e)},useTransition:function(){var e=ud(ga)[0],t=en().memoizedState;return[e,t]},useMutableSource:Hy,useSyncExternalStore:Wy,useId:rw,unstable_isNewReconciler:!1};function rn(e,t){if(e&&e.defaultProps){t=Fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ph(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:Fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ru={isMounted:function(e){return(e=e._reactInternals)?Xr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=gt(),i=Ks(e),o=Yn(s,i);o.payload=t,n!=null&&(o.callback=n),t=Ws(e,o,i),t!==null&&(fn(t,e,i,s),Wl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=gt(),i=Ks(e),o=Yn(s,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Ws(e,o,i),t!==null&&(fn(t,e,i,s),Wl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),s=Ks(e),i=Yn(n,s);i.tag=2,t!=null&&(i.callback=t),t=Ws(e,i,s),t!==null&&(fn(t,e,s,n),Wl(t,e,s))}};function jg(e,t,n,s,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,o,a):t.prototype&&t.prototype.isPureReactComponent?!ca(n,s)||!ca(i,o):!0}function lw(e,t,n){var s=!1,i=tr,o=t.contextType;return typeof o=="object"&&o!==null?o=Zt(o):(i=Pt(t)?Or:ot.current,s=t.contextTypes,o=(s=s!=null)?Qi(e,i):tr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ru,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sg(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&ru.enqueueReplaceState(t,t.state,null)}function mh(e,t,n,s){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},qf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Zt(o):(o=Pt(t)?Or:ot.current,i.context=Qi(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ph(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ru.enqueueReplaceState(i,i.state,null),jc(e,n,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Zi(e,t){try{var n="",s=t;do n+=Z_(s),s=s.return;while(s);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function dd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var CC=typeof WeakMap=="function"?WeakMap:Map;function cw(e,t,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){kc||(kc=!0,Ch=s),gh(e,t)},n}function uw(e,t,n){n=Yn(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;n.payload=function(){return s(i)},n.callback=function(){gh(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gh(e,t),typeof s!="function"&&(Vs===null?Vs=new Set([this]):Vs.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function _g(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new CC;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(n)||(i.add(n),e=$C.bind(null,e,t,n),t.then(e,e))}function Ng(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Cg(e,t,n,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Yn(-1,1),t.tag=2,Ws(n,t,1))),n.lanes|=1),e)}var kC=ds.ReactCurrentOwner,Ct=!1;function pt(e,t,n,s){t.child=e===null?Uy(t,null,n,s):Yi(t,e.child,n,s)}function kg(e,t,n,s,i){n=n.render;var o=t.ref;return Ni(t,i),s=Zf(e,t,n,s,o,i),n=ep(),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ns(e,t,i)):(Me&&n&&zf(t),t.flags|=1,pt(e,t,s,i),t.child)}function Eg(e,t,n,s,i){if(e===null){var o=n.type;return typeof o=="function"&&!up(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,dw(e,t,o,s,i)):(e=Jl(n.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ca,n(a,s)&&e.ref===t.ref)return ns(e,t,i)}return t.flags|=1,e=Gs(o,s),e.ref=t.ref,e.return=t,t.child=e}function dw(e,t,n,s,i){if(e!==null){var o=e.memoizedProps;if(ca(o,s)&&e.ref===t.ref)if(Ct=!1,t.pendingProps=s=o,(e.lanes&i)!==0)e.flags&131072&&(Ct=!0);else return t.lanes=e.lanes,ns(e,t,i)}return xh(e,t,n,s,i)}function hw(e,t,n){var s=t.pendingProps,i=s.children,o=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(vi,Dt),Dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ce(vi,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=o!==null?o.baseLanes:n,Ce(vi,Dt),Dt|=s}else o!==null?(s=o.baseLanes|n,t.memoizedState=null):s=n,Ce(vi,Dt),Dt|=s;return pt(e,t,i,n),t.child}function fw(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function xh(e,t,n,s,i){var o=Pt(n)?Or:ot.current;return o=Qi(t,o),Ni(t,i),n=Zf(e,t,n,s,o,i),s=ep(),e!==null&&!Ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ns(e,t,i)):(Me&&s&&zf(t),t.flags|=1,pt(e,t,n,i),t.child)}function Tg(e,t,n,s,i){if(Pt(n)){var o=!0;xc(t)}else o=!1;if(Ni(t,i),t.stateNode===null)Gl(e,t),lw(t,n,s),mh(t,n,s,i),s=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Zt(u):(u=Pt(n)?Or:ot.current,u=Qi(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==s||c!==u)&&Sg(t,a,s,u),js=!1;var h=t.memoizedState;a.state=h,jc(t,s,a,i),c=t.memoizedState,l!==s||h!==c||It.current||js?(typeof f=="function"&&(ph(t,n,f,s),c=t.memoizedState),(l=js||jg(t,n,l,s,h,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=c),a.props=s,a.state=c,a.context=u,s=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{a=t.stateNode,zy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:rn(t.type,l),a.props=u,p=t.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Zt(c):(c=Pt(n)?Or:ot.current,c=Qi(t,c));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==c)&&Sg(t,a,s,c),js=!1,h=t.memoizedState,a.state=h,jc(t,s,a,i);var b=t.memoizedState;l!==p||h!==b||It.current||js?(typeof v=="function"&&(ph(t,n,v,s),b=t.memoizedState),(u=js||jg(t,n,u,s,h,b,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(s,b,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(s,b,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=b),a.props=s,a.state=b,a.context=c,s=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),s=!1)}return vh(e,t,n,s,o,i)}function vh(e,t,n,s,i,o){fw(e,t);var a=(t.flags&128)!==0;if(!s&&!a)return i&&pg(t,n,!1),ns(e,t,o);s=t.stateNode,kC.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&a?(t.child=Yi(t,e.child,null,o),t.child=Yi(t,null,l,o)):pt(e,t,l,o),t.memoizedState=s.state,i&&pg(t,n,!0),t.child}function pw(e){var t=e.stateNode;t.pendingContext?fg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fg(e,t.context,!1),Qf(e,t.containerInfo)}function Ag(e,t,n,s,i){return Ji(),Hf(i),t.flags|=256,pt(e,t,n,s),t.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function wh(e){return{baseLanes:e,cachePool:null,transitions:null}}function mw(e,t,n){var s=t.pendingProps,i=Oe.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ce(Oe,i&1),e===null)return hh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=s.children,e=s.fallback,o?(s=t.mode,o=t.child,a={mode:"hidden",children:a},!(s&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=au(a,s,0,null),e=Pr(e,s,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=wh(n),t.memoizedState=yh,e):sp(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return EC(e,t,a,s,l,i,n);if(o){o=s.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:s.children};return!(a&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=c,t.deletions=null):(s=Gs(i,c),s.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Gs(l,o):(o=Pr(o,a,n,null),o.flags|=2),o.return=t,s.return=t,s.sibling=o,t.child=s,s=o,o=t.child,a=e.child.memoizedState,a=a===null?wh(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=yh,s}return o=e.child,e=o.sibling,s=Gs(o,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function sp(e,t){return t=au({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _l(e,t,n,s){return s!==null&&Hf(s),Yi(t,e.child,null,n),e=sp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function EC(e,t,n,s,i,o,a){if(n)return t.flags&256?(t.flags&=-257,s=dd(Error($(422))),_l(e,t,a,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=s.fallback,i=t.mode,s=au({mode:"visible",children:s.children},i,0,null),o=Pr(o,i,a,null),o.flags|=2,s.return=t,o.return=t,s.sibling=o,t.child=s,t.mode&1&&Yi(t,e.child,null,a),t.child.memoizedState=wh(a),t.memoizedState=yh,o);if(!(t.mode&1))return _l(e,t,a,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var l=s.dgst;return s=l,o=Error($(419)),s=dd(o,s,void 0),_l(e,t,a,s)}if(l=(a&e.childLanes)!==0,Ct||l){if(s=Ye,s!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ts(e,i),fn(s,e,i,-1))}return cp(),s=dd(Error($(421))),_l(e,t,a,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zC.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Lt=Hs(i.nextSibling),Ut=t,Me=!0,cn=null,e!==null&&(Kt[Gt++]=Kn,Kt[Gt++]=Gn,Kt[Gt++]=Lr,Kn=e.id,Gn=e.overflow,Lr=t),t=sp(t,s.children),t.flags|=4096,t)}function Ig(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),fh(e.return,t,n)}function hd(e,t,n,s,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=s,o.tail=n,o.tailMode=i)}function gw(e,t,n){var s=t.pendingProps,i=s.revealOrder,o=s.tail;if(pt(e,t,s.children,n),s=Oe.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ig(e,n,t);else if(e.tag===19)Ig(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Ce(Oe,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Sc(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),hd(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Sc(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}hd(t,!0,n,null,o);break;case"together":hd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ns(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ur|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=Gs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function TC(e,t,n){switch(t.tag){case 3:pw(t),Ji();break;case 5:By(t);break;case 1:Pt(t.type)&&xc(t);break;case 4:Qf(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;Ce(wc,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Ce(Oe,Oe.current&1),t.flags|=128,null):n&t.child.childLanes?mw(e,t,n):(Ce(Oe,Oe.current&1),e=ns(e,t,n),e!==null?e.sibling:null);Ce(Oe,Oe.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return gw(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(Oe,Oe.current),s)break;return null;case 22:case 23:return t.lanes=0,hw(e,t,n)}return ns(e,t,n)}var xw,bh,vw,yw;xw=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bh=function(){};vw=function(e,t,n,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,wr(Rn.current);var o=null;switch(n){case"input":i=Hd(e,i),s=Hd(e,s),o=[];break;case"select":i=Fe({},i,{value:void 0}),s=Fe({},s,{value:void 0}),o=[];break;case"textarea":i=Kd(e,i),s=Kd(e,s),o=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=mc)}qd(n,s);var a;n=null;for(u in i)if(!s.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(na.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in s){var c=s[u];if(l=i!=null?i[u]:void 0,s.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(na.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Te("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};yw=function(e,t,n,s){n!==s&&(t.flags|=4)};function Io(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function st(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function AC(e,t,n){var s=t.pendingProps;switch(Bf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(t),null;case 1:return Pt(t.type)&&gc(),st(t),null;case 3:return s=t.stateNode,Xi(),Pe(It),Pe(ot),Yf(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(jl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,cn!==null&&(Th(cn),cn=null))),bh(e,t),st(t),null;case 5:Jf(t);var i=wr(pa.current);if(n=t.type,e!==null&&t.stateNode!=null)vw(e,t,n,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error($(166));return st(t),null}if(e=wr(Rn.current),jl(t)){s=t.stateNode,n=t.type;var o=t.memoizedProps;switch(s[Cn]=t,s[ha]=o,e=(t.mode&1)!==0,n){case"dialog":Te("cancel",s),Te("close",s);break;case"iframe":case"object":case"embed":Te("load",s);break;case"video":case"audio":for(i=0;i<Fo.length;i++)Te(Fo[i],s);break;case"source":Te("error",s);break;case"img":case"image":case"link":Te("error",s),Te("load",s);break;case"details":Te("toggle",s);break;case"input":$m(s,o),Te("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!o.multiple},Te("invalid",s);break;case"textarea":Bm(s,o),Te("invalid",s)}qd(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?s.textContent!==l&&(o.suppressHydrationWarning!==!0&&bl(s.textContent,l,e),i=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&bl(s.textContent,l,e),i=["children",""+l]):na.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Te("scroll",s)}switch(n){case"input":fl(s),zm(s,o,!0);break;case"textarea":fl(s),Hm(s);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(s.onclick=mc)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gv(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=a.createElement(n,{is:s.is}):(e=a.createElement(n),n==="select"&&(a=e,s.multiple?a.multiple=!0:s.size&&(a.size=s.size))):e=a.createElementNS(e,n),e[Cn]=t,e[ha]=s,xw(e,t,!1,!1),t.stateNode=e;e:{switch(a=Qd(n,s),n){case"dialog":Te("cancel",e),Te("close",e),i=s;break;case"iframe":case"object":case"embed":Te("load",e),i=s;break;case"video":case"audio":for(i=0;i<Fo.length;i++)Te(Fo[i],e);i=s;break;case"source":Te("error",e),i=s;break;case"img":case"image":case"link":Te("error",e),Te("load",e),i=s;break;case"details":Te("toggle",e),i=s;break;case"input":$m(e,s),i=Hd(e,s),Te("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=Fe({},s,{value:void 0}),Te("invalid",e);break;case"textarea":Bm(e,s),i=Kd(e,s),Te("invalid",e);break;default:i=s}qd(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Jv(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&qv(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&sa(e,c):typeof c=="number"&&sa(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(na.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Te("scroll",e):c!=null&&kf(e,o,c,a))}switch(n){case"input":fl(e),zm(e,s,!1);break;case"textarea":fl(e),Hm(e);break;case"option":s.value!=null&&e.setAttribute("value",""+er(s.value));break;case"select":e.multiple=!!s.multiple,o=s.value,o!=null?bi(e,!!s.multiple,o,!1):s.defaultValue!=null&&bi(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return st(t),null;case 6:if(e&&t.stateNode!=null)yw(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error($(166));if(n=wr(pa.current),wr(Rn.current),jl(t)){if(s=t.stateNode,n=t.memoizedProps,s[Cn]=t,(o=s.nodeValue!==n)&&(e=Ut,e!==null))switch(e.tag){case 3:bl(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bl(s.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[Cn]=t,t.stateNode=s}return st(t),null;case 13:if(Pe(Oe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&Lt!==null&&t.mode&1&&!(t.flags&128))Ly(),Ji(),t.flags|=98560,o=!1;else if(o=jl(t),s!==null&&s.dehydrated!==null){if(e===null){if(!o)throw Error($(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error($(317));o[Cn]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;st(t),o=!1}else cn!==null&&(Th(cn),cn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?qe===0&&(qe=3):cp())),t.updateQueue!==null&&(t.flags|=4),st(t),null);case 4:return Xi(),bh(e,t),e===null&&ua(t.stateNode.containerInfo),st(t),null;case 10:return Kf(t.type._context),st(t),null;case 17:return Pt(t.type)&&gc(),st(t),null;case 19:if(Pe(Oe),o=t.memoizedState,o===null)return st(t),null;if(s=(t.flags&128)!==0,a=o.rendering,a===null)if(s)Io(o,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Sc(e),a!==null){for(t.flags|=128,Io(o,!1),s=a.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)o=n,e=s,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ce(Oe,Oe.current&1|2),t.child}e=e.sibling}o.tail!==null&&He()>eo&&(t.flags|=128,s=!0,Io(o,!1),t.lanes=4194304)}else{if(!s)if(e=Sc(a),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Me)return st(t),null}else 2*He()-o.renderingStartTime>eo&&n!==1073741824&&(t.flags|=128,s=!0,Io(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=He(),t.sibling=null,n=Oe.current,Ce(Oe,s?n&1|2:n&1),t):(st(t),null);case 22:case 23:return lp(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Dt&1073741824&&(st(t),t.subtreeFlags&6&&(t.flags|=8192)):st(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function IC(e,t){switch(Bf(t),t.tag){case 1:return Pt(t.type)&&gc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xi(),Pe(It),Pe(ot),Yf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Jf(t),null;case 13:if(Pe(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Oe),null;case 4:return Xi(),null;case 10:return Kf(t.type._context),null;case 22:case 23:return lp(),null;case 24:return null;default:return null}}var Nl=!1,it=!1,PC=typeof WeakSet=="function"?WeakSet:Set,q=null;function xi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){$e(e,t,s)}else n.current=null}function jh(e,t,n){try{n()}catch(s){$e(e,t,s)}}var Pg=!1;function RC(e,t){if(ih=hc,e=_y(),$f(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var i=s.anchorOffset,o=s.focusNode;s=s.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,f=0,p=e,h=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==o||s!==0&&p.nodeType!==3||(c=a+s),p.nodeType===3&&(a+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++f===s&&(c=a),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(oh={focusedElem:e,selectionRange:n},hc=!1,q=t;q!==null;)if(t=q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var b=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var x=b.memoizedProps,y=b.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?x:rn(t.type,x),y);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(j){$e(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return b=Pg,Pg=!1,b}function Qo(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&jh(t,n,o)}i=i.next}while(i!==s)}}function iu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function Sh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ww(e){var t=e.alternate;t!==null&&(e.alternate=null,ww(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cn],delete t[ha],delete t[ch],delete t[mC],delete t[gC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bw(e){return e.tag===5||e.tag===3||e.tag===4}function Rg(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _h(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mc));else if(s!==4&&(e=e.child,e!==null))for(_h(e,t,n),e=e.sibling;e!==null;)_h(e,t,n),e=e.sibling}function Nh(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Nh(e,t,n),e=e.sibling;e!==null;)Nh(e,t,n),e=e.sibling}var Xe=null,ln=!1;function ps(e,t,n){for(n=n.child;n!==null;)jw(e,t,n),n=n.sibling}function jw(e,t,n){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Yc,n)}catch{}switch(n.tag){case 5:it||xi(n,t);case 6:var s=Xe,i=ln;Xe=null,ps(e,t,n),Xe=s,ln=i,Xe!==null&&(ln?(e=Xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Xe.removeChild(n.stateNode));break;case 18:Xe!==null&&(ln?(e=Xe,n=n.stateNode,e.nodeType===8?id(e.parentNode,n):e.nodeType===1&&id(e,n),aa(e)):id(Xe,n.stateNode));break;case 4:s=Xe,i=ln,Xe=n.stateNode.containerInfo,ln=!0,ps(e,t,n),Xe=s,ln=i;break;case 0:case 11:case 14:case 15:if(!it&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&jh(n,t,a),i=i.next}while(i!==s)}ps(e,t,n);break;case 1:if(!it&&(xi(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(l){$e(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:n.mode&1?(it=(s=it)||n.memoizedState!==null,ps(e,t,n),it=s):ps(e,t,n);break;default:ps(e,t,n)}}function Mg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new PC),t.forEach(function(s){var i=BC.bind(null,e,s);n.has(s)||(n.add(s),s.then(i,i))})}}function nn(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var i=n[s];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xe=l.stateNode,ln=!1;break e;case 3:Xe=l.stateNode.containerInfo,ln=!0;break e;case 4:Xe=l.stateNode.containerInfo,ln=!0;break e}l=l.return}if(Xe===null)throw Error($(160));jw(o,a,i),Xe=null,ln=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){$e(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sw(t,e),t=t.sibling}function Sw(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nn(t,e),bn(e),s&4){try{Qo(3,e,e.return),iu(3,e)}catch(x){$e(e,e.return,x)}try{Qo(5,e,e.return)}catch(x){$e(e,e.return,x)}}break;case 1:nn(t,e),bn(e),s&512&&n!==null&&xi(n,n.return);break;case 5:if(nn(t,e),bn(e),s&512&&n!==null&&xi(n,n.return),e.flags&32){var i=e.stateNode;try{sa(i,"")}catch(x){$e(e,e.return,x)}}if(s&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Vv(i,o),Qd(l,a);var u=Qd(l,o);for(a=0;a<c.length;a+=2){var f=c[a],p=c[a+1];f==="style"?Jv(i,p):f==="dangerouslySetInnerHTML"?qv(i,p):f==="children"?sa(i,p):kf(i,f,p,u)}switch(l){case"input":Wd(i,o);break;case"textarea":Kv(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?bi(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?bi(i,!!o.multiple,o.defaultValue,!0):bi(i,!!o.multiple,o.multiple?[]:"",!1))}i[ha]=o}catch(x){$e(e,e.return,x)}}break;case 6:if(nn(t,e),bn(e),s&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){$e(e,e.return,x)}}break;case 3:if(nn(t,e),bn(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{aa(t.containerInfo)}catch(x){$e(e,e.return,x)}break;case 4:nn(t,e),bn(e);break;case 13:nn(t,e),bn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(op=He())),s&4&&Mg(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||f,nn(t,e),it=u):nn(t,e),bn(e),s&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(q=e,f=e.child;f!==null;){for(p=q=f;q!==null;){switch(h=q,v=h.child,h.tag){case 0:case 11:case 14:case 15:Qo(4,h,h.return);break;case 1:xi(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){s=h,n=h.return;try{t=s,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(x){$e(s,n,x)}}break;case 5:xi(h,h.return);break;case 22:if(h.memoizedState!==null){Og(p);continue}}v!==null?(v.return=h,q=v):Og(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Qv("display",a))}catch(x){$e(e,e.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){$e(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nn(t,e),bn(e),s&4&&Mg(e);break;case 21:break;default:nn(t,e),bn(e)}}function bn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bw(n)){var s=n;break e}n=n.return}throw Error($(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(sa(i,""),s.flags&=-33);var o=Rg(e);Nh(e,o,i);break;case 3:case 4:var a=s.stateNode.containerInfo,l=Rg(e);_h(e,l,a);break;default:throw Error($(161))}}catch(c){$e(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function MC(e,t,n){q=e,_w(e)}function _w(e,t,n){for(var s=(e.mode&1)!==0;q!==null;){var i=q,o=i.child;if(i.tag===22&&s){var a=i.memoizedState!==null||Nl;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||it;l=Nl;var u=it;if(Nl=a,(it=c)&&!u)for(q=i;q!==null;)a=q,c=a.child,a.tag===22&&a.memoizedState!==null?Lg(i):c!==null?(c.return=a,q=c):Lg(i);for(;o!==null;)q=o,_w(o),o=o.sibling;q=i,Nl=l,it=u}Dg(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,q=o):Dg(e)}}function Dg(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||iu(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!it)if(n===null)s.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:rn(t.type,n.memoizedProps);s.componentDidUpdate(i,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&yg(t,o,s);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yg(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&aa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}it||t.flags&512&&Sh(t)}catch(h){$e(t,t.return,h)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function Og(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Lg(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{iu(4,t)}catch(c){$e(t,n,c)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(c){$e(t,i,c)}}var o=t.return;try{Sh(t)}catch(c){$e(t,o,c)}break;case 5:var a=t.return;try{Sh(t)}catch(c){$e(t,a,c)}}}catch(c){$e(t,t.return,c)}if(t===e){q=null;break}var l=t.sibling;if(l!==null){l.return=t.return,q=l;break}q=t.return}}var DC=Math.ceil,Cc=ds.ReactCurrentDispatcher,rp=ds.ReactCurrentOwner,Yt=ds.ReactCurrentBatchConfig,ge=0,Ye=null,Ve=null,et=0,Dt=0,vi=cr(0),qe=0,va=null,Ur=0,ou=0,ip=0,Jo=null,Nt=null,op=0,eo=1/0,Bn=null,kc=!1,Ch=null,Vs=null,Cl=!1,Us=null,Ec=0,Yo=0,kh=null,ql=-1,Ql=0;function gt(){return ge&6?He():ql!==-1?ql:ql=He()}function Ks(e){return e.mode&1?ge&2&&et!==0?et&-et:vC.transition!==null?(Ql===0&&(Ql=ly()),Ql):(e=ye,e!==0||(e=window.event,e=e===void 0?16:my(e.type)),e):1}function fn(e,t,n,s){if(50<Yo)throw Yo=0,kh=null,Error($(185));Oa(e,n,s),(!(ge&2)||e!==Ye)&&(e===Ye&&(!(ge&2)&&(ou|=n),qe===4&&_s(e,et)),Rt(e,s),n===1&&ge===0&&!(t.mode&1)&&(eo=He()+500,nu&&ur()))}function Rt(e,t){var n=e.callbackNode;vN(e,t);var s=dc(e,e===Ye?et:0);if(s===0)n!==null&&Km(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&Km(n),t===1)e.tag===0?xC(Fg.bind(null,e)):My(Fg.bind(null,e)),fC(function(){!(ge&6)&&ur()}),n=null;else{switch(cy(s)){case 1:n=Pf;break;case 4:n=oy;break;case 16:n=uc;break;case 536870912:n=ay;break;default:n=uc}n=Pw(n,Nw.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nw(e,t){if(ql=-1,Ql=0,ge&6)throw Error($(327));var n=e.callbackNode;if(Ci()&&e.callbackNode!==n)return null;var s=dc(e,e===Ye?et:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Tc(e,s);else{t=s;var i=ge;ge|=2;var o=kw();(Ye!==e||et!==t)&&(Bn=null,eo=He()+500,Ir(e,t));do try{FC();break}catch(l){Cw(e,l)}while(!0);Vf(),Cc.current=o,ge=i,Ve!==null?t=0:(Ye=null,et=0,t=qe)}if(t!==0){if(t===2&&(i=eh(e),i!==0&&(s=i,t=Eh(e,i))),t===1)throw n=va,Ir(e,0),_s(e,s),Rt(e,He()),n;if(t===6)_s(e,s);else{if(i=e.current.alternate,!(s&30)&&!OC(i)&&(t=Tc(e,s),t===2&&(o=eh(e),o!==0&&(s=o,t=Eh(e,o))),t===1))throw n=va,Ir(e,0),_s(e,s),Rt(e,He()),n;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error($(345));case 2:gr(e,Nt,Bn);break;case 3:if(_s(e,s),(s&130023424)===s&&(t=op+500-He(),10<t)){if(dc(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lh(gr.bind(null,e,Nt,Bn),t);break}gr(e,Nt,Bn);break;case 4:if(_s(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var a=31-hn(s);o=1<<a,a=t[a],a>i&&(i=a),s&=~o}if(s=i,s=He()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*DC(s/1960))-s,10<s){e.timeoutHandle=lh(gr.bind(null,e,Nt,Bn),s);break}gr(e,Nt,Bn);break;case 5:gr(e,Nt,Bn);break;default:throw Error($(329))}}}return Rt(e,He()),e.callbackNode===n?Nw.bind(null,e):null}function Eh(e,t){var n=Jo;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=Tc(e,t),e!==2&&(t=Nt,Nt=n,t!==null&&Th(t)),e}function Th(e){Nt===null?Nt=e:Nt.push.apply(Nt,e)}function OC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var i=n[s],o=i.getSnapshot;i=i.value;try{if(!mn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _s(e,t){for(t&=~ip,t&=~ou,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-hn(t),s=1<<n;e[n]=-1,t&=~s}}function Fg(e){if(ge&6)throw Error($(327));Ci();var t=dc(e,0);if(!(t&1))return Rt(e,He()),null;var n=Tc(e,t);if(e.tag!==0&&n===2){var s=eh(e);s!==0&&(t=s,n=Eh(e,s))}if(n===1)throw n=va,Ir(e,0),_s(e,t),Rt(e,He()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,gr(e,Nt,Bn),Rt(e,He()),null}function ap(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(eo=He()+500,nu&&ur())}}function $r(e){Us!==null&&Us.tag===0&&!(ge&6)&&Ci();var t=ge;ge|=1;var n=Yt.transition,s=ye;try{if(Yt.transition=null,ye=1,e)return e()}finally{ye=s,Yt.transition=n,ge=t,!(ge&6)&&ur()}}function lp(){Dt=vi.current,Pe(vi)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hC(n)),Ve!==null)for(n=Ve.return;n!==null;){var s=n;switch(Bf(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&gc();break;case 3:Xi(),Pe(It),Pe(ot),Yf();break;case 5:Jf(s);break;case 4:Xi();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:Kf(s.type._context);break;case 22:case 23:lp()}n=n.return}if(Ye=e,Ve=e=Gs(e.current,null),et=Dt=t,qe=0,va=null,ip=ou=Ur=0,Nt=Jo=null,yr!==null){for(t=0;t<yr.length;t++)if(n=yr[t],s=n.interleaved,s!==null){n.interleaved=null;var i=s.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,s.next=a}n.pending=s}yr=null}return e}function Cw(e,t){do{var n=Ve;try{if(Vf(),Vl.current=Nc,_c){for(var s=Le.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}_c=!1}if(Fr=0,Qe=Ke=Le=null,qo=!1,ma=0,rp.current=null,n===null||n.return===null){qe=1,va=t,Ve=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=et,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Ng(a);if(v!==null){v.flags&=-257,Cg(v,a,l,o,t),v.mode&1&&_g(o,u,t),t=v,c=u;var b=t.updateQueue;if(b===null){var x=new Set;x.add(c),t.updateQueue=x}else b.add(c);break e}else{if(!(t&1)){_g(o,u,t),cp();break e}c=Error($(426))}}else if(Me&&l.mode&1){var y=Ng(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Cg(y,a,l,o,t),Hf(Zi(c,l));break e}}o=c=Zi(c,l),qe!==4&&(qe=2),Jo===null?Jo=[o]:Jo.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=cw(o,c,t);vg(o,g);break e;case 1:l=c;var m=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Vs===null||!Vs.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=uw(o,l,t);vg(o,j);break e}}o=o.return}while(o!==null)}Tw(n)}catch(S){t=S,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function kw(){var e=Cc.current;return Cc.current=Nc,e===null?Nc:e}function cp(){(qe===0||qe===3||qe===2)&&(qe=4),Ye===null||!(Ur&268435455)&&!(ou&268435455)||_s(Ye,et)}function Tc(e,t){var n=ge;ge|=2;var s=kw();(Ye!==e||et!==t)&&(Bn=null,Ir(e,t));do try{LC();break}catch(i){Cw(e,i)}while(!0);if(Vf(),ge=n,Cc.current=s,Ve!==null)throw Error($(261));return Ye=null,et=0,qe}function LC(){for(;Ve!==null;)Ew(Ve)}function FC(){for(;Ve!==null&&!cN();)Ew(Ve)}function Ew(e){var t=Iw(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?Tw(e):Ve=t,rp.current=null}function Tw(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=IC(n,t),n!==null){n.flags&=32767,Ve=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,Ve=null;return}}else if(n=AC(n,t,Dt),n!==null){Ve=n;return}if(t=t.sibling,t!==null){Ve=t;return}Ve=t=e}while(t!==null);qe===0&&(qe=5)}function gr(e,t,n){var s=ye,i=Yt.transition;try{Yt.transition=null,ye=1,UC(e,t,n,s)}finally{Yt.transition=i,ye=s}return null}function UC(e,t,n,s){do Ci();while(Us!==null);if(ge&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(yN(e,o),e===Ye&&(Ve=Ye=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cl||(Cl=!0,Pw(uc,function(){return Ci(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Yt.transition,Yt.transition=null;var a=ye;ye=1;var l=ge;ge|=4,rp.current=null,RC(e,n),Sw(n,e),iC(oh),hc=!!ih,oh=ih=null,e.current=n,MC(n),uN(),ge=l,ye=a,Yt.transition=o}else e.current=n;if(Cl&&(Cl=!1,Us=e,Ec=i),o=e.pendingLanes,o===0&&(Vs=null),fN(n.stateNode),Rt(e,He()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],s(i.value,{componentStack:i.stack,digest:i.digest});if(kc)throw kc=!1,e=Ch,Ch=null,e;return Ec&1&&e.tag!==0&&Ci(),o=e.pendingLanes,o&1?e===kh?Yo++:(Yo=0,kh=e):Yo=0,ur(),null}function Ci(){if(Us!==null){var e=cy(Ec),t=Yt.transition,n=ye;try{if(Yt.transition=null,ye=16>e?16:e,Us===null)var s=!1;else{if(e=Us,Us=null,Ec=0,ge&6)throw Error($(331));var i=ge;for(ge|=4,q=e.current;q!==null;){var o=q,a=o.child;if(q.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(q=u;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Qo(8,f,o)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var h=f.sibling,v=f.return;if(ww(f),f===u){q=null;break}if(h!==null){h.return=v,q=h;break}q=v}}}var b=o.alternate;if(b!==null){var x=b.child;if(x!==null){b.child=null;do{var y=x.sibling;x.sibling=null,x=y}while(x!==null)}}q=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,q=a;else e:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qo(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,q=g;break e}q=o.return}}var m=e.current;for(q=m;q!==null;){a=q;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,q=w;else e:for(a=m;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:iu(9,l)}}catch(S){$e(l,l.return,S)}if(l===a){q=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,q=j;break e}q=l.return}}if(ge=i,ur(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Yc,e)}catch{}s=!0}return s}finally{ye=n,Yt.transition=t}}return!1}function Ug(e,t,n){t=Zi(n,t),t=cw(e,t,1),e=Ws(e,t,1),t=gt(),e!==null&&(Oa(e,1,t),Rt(e,t))}function $e(e,t,n){if(e.tag===3)Ug(e,e,n);else for(;t!==null;){if(t.tag===3){Ug(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Vs===null||!Vs.has(s))){e=Zi(n,e),e=uw(t,e,1),t=Ws(t,e,1),e=gt(),t!==null&&(Oa(t,1,e),Rt(t,e));break}}t=t.return}}function $C(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,Ye===e&&(et&n)===n&&(qe===4||qe===3&&(et&130023424)===et&&500>He()-op?Ir(e,0):ip|=n),Rt(e,t)}function Aw(e,t){t===0&&(e.mode&1?(t=gl,gl<<=1,!(gl&130023424)&&(gl=4194304)):t=1);var n=gt();e=ts(e,t),e!==null&&(Oa(e,t,n),Rt(e,n))}function zC(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Aw(e,n)}function BC(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error($(314))}s!==null&&s.delete(t),Aw(e,n)}var Iw;Iw=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||It.current)Ct=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ct=!1,TC(e,t,n);Ct=!!(e.flags&131072)}else Ct=!1,Me&&t.flags&1048576&&Dy(t,yc,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Gl(e,t),e=t.pendingProps;var i=Qi(t,ot.current);Ni(t,n),i=Zf(null,t,s,e,i,n);var o=ep();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pt(s)?(o=!0,xc(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qf(t),i.updater=ru,t.stateNode=i,i._reactInternals=t,mh(t,s,e,n),t=vh(null,t,s,!0,o,n)):(t.tag=0,Me&&o&&zf(t),pt(null,t,i,n),t=t.child),t;case 16:s=t.elementType;e:{switch(Gl(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=WC(s),e=rn(s,e),i){case 0:t=xh(null,t,s,e,n);break e;case 1:t=Tg(null,t,s,e,n);break e;case 11:t=kg(null,t,s,e,n);break e;case 14:t=Eg(null,t,s,rn(s.type,e),n);break e}throw Error($(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:rn(s,i),xh(e,t,s,i,n);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:rn(s,i),Tg(e,t,s,i,n);case 3:e:{if(pw(t),e===null)throw Error($(387));s=t.pendingProps,o=t.memoizedState,i=o.element,zy(e,t),jc(t,s,null,n);var a=t.memoizedState;if(s=a.element,o.isDehydrated)if(o={element:s,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Zi(Error($(423)),t),t=Ag(e,t,s,n,i);break e}else if(s!==i){i=Zi(Error($(424)),t),t=Ag(e,t,s,n,i);break e}else for(Lt=Hs(t.stateNode.containerInfo.firstChild),Ut=t,Me=!0,cn=null,n=Uy(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ji(),s===i){t=ns(e,t,n);break e}pt(e,t,s,n)}t=t.child}return t;case 5:return By(t),e===null&&hh(t),s=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ah(s,i)?a=null:o!==null&&ah(s,o)&&(t.flags|=32),fw(e,t),pt(e,t,a,n),t.child;case 6:return e===null&&hh(t),null;case 13:return mw(e,t,n);case 4:return Qf(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Yi(t,null,s,n):pt(e,t,s,n),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:rn(s,i),kg(e,t,s,i,n);case 7:return pt(e,t,t.pendingProps,n),t.child;case 8:return pt(e,t,t.pendingProps.children,n),t.child;case 12:return pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Ce(wc,s._currentValue),s._currentValue=a,o!==null)if(mn(o.value,a)){if(o.children===i.children&&!It.current){t=ns(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===s){if(o.tag===1){c=Yn(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),fh(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error($(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),fh(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Ni(t,n),i=Zt(i),s=s(i),t.flags|=1,pt(e,t,s,n),t.child;case 14:return s=t.type,i=rn(s,t.pendingProps),i=rn(s.type,i),Eg(e,t,s,i,n);case 15:return dw(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:rn(s,i),Gl(e,t),t.tag=1,Pt(s)?(e=!0,xc(t)):e=!1,Ni(t,n),lw(t,s,i),mh(t,s,i,n),vh(null,t,s,!0,e,n);case 19:return gw(e,t,n);case 22:return hw(e,t,n)}throw Error($(156,t.tag))};function Pw(e,t){return iy(e,t)}function HC(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,s){return new HC(e,t,n,s)}function up(e){return e=e.prototype,!(!e||!e.isReactComponent)}function WC(e){if(typeof e=="function")return up(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tf)return 11;if(e===Af)return 14}return 2}function Gs(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jl(e,t,n,s,i,o){var a=2;if(s=e,typeof e=="function")up(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case li:return Pr(n.children,i,o,t);case Ef:a=8,i|=8;break;case Ud:return e=qt(12,n,t,i|2),e.elementType=Ud,e.lanes=o,e;case $d:return e=qt(13,n,t,i),e.elementType=$d,e.lanes=o,e;case zd:return e=qt(19,n,t,i),e.elementType=zd,e.lanes=o,e;case Bv:return au(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $v:a=10;break e;case zv:a=9;break e;case Tf:a=11;break e;case Af:a=14;break e;case bs:a=16,s=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=qt(a,n,t,i),t.elementType=e,t.type=s,t.lanes=o,t}function Pr(e,t,n,s){return e=qt(7,e,s,t),e.lanes=n,e}function au(e,t,n,s){return e=qt(22,e,s,t),e.elementType=Bv,e.lanes=n,e.stateNode={isHidden:!1},e}function fd(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function pd(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function VC(e,t,n,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qu(0),this.expirationTimes=qu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dp(e,t,n,s,i,o,a,l,c){return e=new VC(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=qt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(o),e}function KC(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function Rw(e){if(!e)return tr;e=e._reactInternals;e:{if(Xr(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(Pt(n))return Ry(e,n,t)}return t}function Mw(e,t,n,s,i,o,a,l,c){return e=dp(n,s,!0,e,i,o,a,l,c),e.context=Rw(null),n=e.current,s=gt(),i=Ks(n),o=Yn(s,i),o.callback=t??null,Ws(n,o,i),e.current.lanes=i,Oa(e,i,s),Rt(e,s),e}function lu(e,t,n,s){var i=t.current,o=gt(),a=Ks(i);return n=Rw(n),t.context===null?t.context=n:t.pendingContext=n,t=Yn(o,a),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Ws(i,t,a),e!==null&&(fn(e,i,a,o),Wl(e,i,a)),a}function Ac(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $g(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hp(e,t){$g(e,t),(e=e.alternate)&&$g(e,t)}function GC(){return null}var Dw=typeof reportError=="function"?reportError:function(e){console.error(e)};function fp(e){this._internalRoot=e}cu.prototype.render=fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));lu(e,t,null,null)};cu.prototype.unmount=fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){lu(null,e,null,null)}),t[es]=null}};function cu(e){this._internalRoot=e}cu.prototype.unstable_scheduleHydration=function(e){if(e){var t=hy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ss.length&&t!==0&&t<Ss[n].priority;n++);Ss.splice(n,0,e),n===0&&py(e)}};function pp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zg(){}function qC(e,t,n,s,i){if(i){if(typeof s=="function"){var o=s;s=function(){var u=Ac(a);o.call(u)}}var a=Mw(t,s,e,0,null,!1,!1,"",zg);return e._reactRootContainer=a,e[es]=a.current,ua(e.nodeType===8?e.parentNode:e),$r(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var l=s;s=function(){var u=Ac(c);l.call(u)}}var c=dp(e,0,!1,null,null,!1,!1,"",zg);return e._reactRootContainer=c,e[es]=c.current,ua(e.nodeType===8?e.parentNode:e),$r(function(){lu(t,c,n,s)}),c}function du(e,t,n,s,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Ac(a);l.call(c)}}lu(t,a,e,i)}else a=qC(n,t,e,i,s);return Ac(a)}uy=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Lo(t.pendingLanes);n!==0&&(Rf(t,n|1),Rt(t,He()),!(ge&6)&&(eo=He()+500,ur()))}break;case 13:$r(function(){var s=ts(e,1);if(s!==null){var i=gt();fn(s,e,1,i)}}),hp(e,1)}};Mf=function(e){if(e.tag===13){var t=ts(e,134217728);if(t!==null){var n=gt();fn(t,e,134217728,n)}hp(e,134217728)}};dy=function(e){if(e.tag===13){var t=Ks(e),n=ts(e,t);if(n!==null){var s=gt();fn(n,e,t,s)}hp(e,t)}};hy=function(){return ye};fy=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};Yd=function(e,t,n){switch(t){case"input":if(Wd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var i=tu(s);if(!i)throw Error($(90));Wv(s),Wd(s,i)}}}break;case"textarea":Kv(e,n);break;case"select":t=n.value,t!=null&&bi(e,!!n.multiple,t,!1)}};Zv=ap;ey=$r;var QC={usingClientEntryPoint:!1,Events:[Fa,hi,tu,Yv,Xv,ap]},Po={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JC={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ds.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sy(e),e===null?null:e.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||GC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Yc=kl.inject(JC),Pn=kl}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QC;Bt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pp(t))throw Error($(200));return KC(e,t,null,n)};Bt.createRoot=function(e,t){if(!pp(e))throw Error($(299));var n=!1,s="",i=Dw;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=dp(e,1,!1,null,null,n,!1,s,i),e[es]=t.current,ua(e.nodeType===8?e.parentNode:e),new fp(t)};Bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=sy(t),e=e===null?null:e.stateNode,e};Bt.flushSync=function(e){return $r(e)};Bt.hydrate=function(e,t,n){if(!uu(t))throw Error($(200));return du(null,e,t,!0,n)};Bt.hydrateRoot=function(e,t,n){if(!pp(e))throw Error($(405));var s=n!=null&&n.hydratedSources||null,i=!1,o="",a=Dw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Mw(t,null,e,1,n??null,i,!1,o,a),e[es]=t.current,ua(e),s)for(e=0;e<s.length;e++)n=s[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new cu(t)};Bt.render=function(e,t,n){if(!uu(t))throw Error($(200));return du(null,e,t,!1,n)};Bt.unmountComponentAtNode=function(e){if(!uu(e))throw Error($(40));return e._reactRootContainer?($r(function(){du(null,null,e,!1,function(){e._reactRootContainer=null,e[es]=null})}),!0):!1};Bt.unstable_batchedUpdates=ap;Bt.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!uu(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return du(e,t,n,!1,s)};Bt.version="18.3.1-next-f1338f8080-20240426";function Ow(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ow)}catch(e){console.error(e)}}Ow(),Ov.exports=Bt;var Zr=Ov.exports;const YC=Sv(Zr);var Lw,Bg=Zr;Lw=Bg.createRoot,Bg.hydrateRoot;function XC(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var n,s,i,o,a=[],l="",c=e.split("/");for(c[0]||c.shift();i=c.shift();)n=i[0],n==="*"?(a.push(n),l+=i[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(s=i.indexOf("?",1),o=i.indexOf(".",1),a.push(i.substring(1,~s?s:~o?o:i.length)),l+=~s&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(l+=(~s?"?":"")+"\\"+i.substring(o))):l+="/"+i;return{keys:a,pattern:new RegExp("^"+l+(t?"(?=$|/)":"/?$"),"i")}}var Fw={exports:{}},Uw={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=d;function ZC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ek=typeof Object.is=="function"?Object.is:ZC,tk=to.useState,nk=to.useEffect,sk=to.useLayoutEffect,rk=to.useDebugValue;function ik(e,t){var n=t(),s=tk({inst:{value:n,getSnapshot:t}}),i=s[0].inst,o=s[1];return sk(function(){i.value=n,i.getSnapshot=t,md(i)&&o({inst:i})},[e,n,t]),nk(function(){return md(i)&&o({inst:i}),e(function(){md(i)&&o({inst:i})})},[e]),rk(n),n}function md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ek(e,n)}catch{return!0}}function ok(e,t){return t()}var ak=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ok:ik;Uw.useSyncExternalStore=to.useSyncExternalStore!==void 0?to.useSyncExternalStore:ak;Fw.exports=Uw;var lk=Fw.exports;const ck=Mv.useInsertionEffect,uk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dk=uk?d.useLayoutEffect:d.useEffect,hk=ck||dk,$w=e=>{const t=d.useRef([e,(...n)=>t[0](...n)]).current;return hk(()=>{t[0]=e}),t[1]},fk="popstate",mp="pushState",gp="replaceState",pk="hashchange",Hg=[fk,mp,gp,pk],mk=e=>{for(const t of Hg)addEventListener(t,e);return()=>{for(const t of Hg)removeEventListener(t,e)}},zw=(e,t)=>lk.useSyncExternalStore(mk,e,t),gk=()=>location.search,xk=({ssrSearch:e=""}={})=>zw(gk,()=>e),Wg=()=>location.pathname,vk=({ssrPath:e}={})=>zw(Wg,e?()=>e:Wg),yk=(e,{replace:t=!1,state:n=null}={})=>history[t?gp:mp](n,"",e),wk=(e={})=>[vk(e),yk],Vg=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Vg]>"u"){for(const e of[mp,gp]){const t=history[e];history[e]=function(){const n=t.apply(this,arguments),s=new Event(e);return s.arguments=arguments,dispatchEvent(s),n}}Object.defineProperty(window,Vg,{value:!0})}const bk=(e,t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",Bw=(e="")=>e==="/"?"":e,jk=(e,t)=>e[0]==="~"?e.slice(1):Bw(t)+e,Sk=(e="",t)=>bk(Kg(Bw(e)),Kg(t)),Kg=e=>{try{return decodeURI(e)}catch{return e}},Hw={hook:wk,searchHook:xk,parser:XC,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:e=>e},Ww=d.createContext(Hw),$a=()=>d.useContext(Ww),Vw={},Kw=d.createContext(Vw),Gw=()=>d.useContext(Kw),hu=e=>{const[t,n]=e.hook(e);return[Sk(e.base,t),$w((s,i)=>n(jk(s,e.base),i))]},xp=()=>hu($a()),qw=(e,t,n,s)=>{const{pattern:i,keys:o}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",s),a=i.exec(n)||[],[l,...c]=a;return l!==void 0?[!0,(()=>{const u=o!==!1?Object.fromEntries(o.map((p,h)=>[p,c[h]])):a.groups;let f={...c};return u&&Object.assign(f,u),f})(),...s?[l]:[]]:[!1,null]},_k=({children:e,...t})=>{var f,p;const n=$a(),s=t.hook?Hw:n;let i=s;const[o,a]=((f=t.ssrPath)==null?void 0:f.split("?"))??[];a&&(t.ssrSearch=a,t.ssrPath=o),t.hrefs=t.hrefs??((p=t.hook)==null?void 0:p.hrefs);let l=d.useRef({}),c=l.current,u=c;for(let h in s){const v=h==="base"?s[h]+(t[h]||""):t[h]||s[h];c===u&&v!==u[h]&&(l.current=u={...u}),u[h]=v,(v!==s[h]||v!==i[h])&&(i=u)}return d.createElement(Ww.Provider,{value:i,children:e})},Gg=({children:e,component:t},n)=>t?d.createElement(t,{params:n}):typeof e=="function"?e(n):e,Nk=e=>{let t=d.useRef(Vw);const n=t.current;return t.current=Object.keys(e).length!==Object.keys(n).length||Object.entries(e).some(([s,i])=>i!==n[s])?e:n},ut=({path:e,nest:t,match:n,...s})=>{const i=$a(),[o]=hu(i),[a,l,c]=n??qw(i.parser,e,o,t),u=Nk({...Gw(),...l});if(!a)return null;const f=c?d.createElement(_k,{base:c},Gg(s,u)):Gg(s,u);return d.createElement(Kw.Provider,{value:u,children:f})},Re=d.forwardRef((e,t)=>{const n=$a(),[s,i]=hu(n),{to:o="",href:a=o,onClick:l,asChild:c,children:u,className:f,replace:p,state:h,...v}=e,b=$w(y=>{y.ctrlKey||y.metaKey||y.altKey||y.shiftKey||y.button!==0||(l==null||l(y),y.defaultPrevented||(y.preventDefault(),i(a,e)))}),x=n.hrefs(a[0]==="~"?a.slice(1):n.base+a,n);return c&&d.isValidElement(u)?d.cloneElement(u,{onClick:b,href:x}):d.createElement("a",{...v,onClick:b,href:x,className:f!=null&&f.call?f(s===a):f,children:u,ref:t})}),Qw=e=>Array.isArray(e)?e.flatMap(t=>Qw(t&&t.type===d.Fragment?t.props.children:t)):[e],Ck=({children:e,location:t})=>{const n=$a(),[s]=hu(n);for(const i of Qw(e)){let o=0;if(d.isValidElement(i)&&(o=qw(n.parser,i.props.path,t||s,i.props.nest))[0])return d.cloneElement(i,{match:o})}return null};var fo=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},zr=typeof window>"u"||"Deno"in globalThis;function mt(){}function kk(e,t){return typeof e=="function"?e(t):e}function Ah(e){return typeof e=="number"&&e>=0&&e!==1/0}function Jw(e,t){return Math.max(e+(t||0)-Date.now(),0)}function qs(e,t){return typeof e=="function"?e(t):e}function un(e,t){return typeof e=="function"?e(t):e}function qg(e,t){const{type:n="all",exact:s,fetchStatus:i,predicate:o,queryKey:a,stale:l}=e;if(a){if(s){if(t.queryHash!==vp(a,t.options))return!1}else if(!ya(t.queryKey,a))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||i&&i!==t.state.fetchStatus||o&&!o(t))}function Qg(e,t){const{exact:n,status:s,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(Br(t.options.mutationKey)!==Br(o))return!1}else if(!ya(t.options.mutationKey,o))return!1}return!(s&&t.state.status!==s||i&&!i(t))}function vp(e,t){return((t==null?void 0:t.queryKeyHashFn)||Br)(e)}function Br(e){return JSON.stringify(e,(t,n)=>Ih(n)?Object.keys(n).sort().reduce((s,i)=>(s[i]=n[i],s),{}):n)}function ya(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>ya(e[n],t[n])):!1}function Yw(e,t){if(e===t)return e;const n=Jg(e)&&Jg(t);if(n||Ih(e)&&Ih(t)){const s=n?e:Object.keys(e),i=s.length,o=n?t:Object.keys(t),a=o.length,l=n?[]:{},c=new Set(s);let u=0;for(let f=0;f<a;f++){const p=n?f:o[f];(!n&&c.has(p)||n)&&e[p]===void 0&&t[p]===void 0?(l[p]=void 0,u++):(l[p]=Yw(e[p],t[p]),l[p]===e[p]&&e[p]!==void 0&&u++)}return i===a&&u===i?e:l}return t}function Ic(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function Jg(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Ih(e){if(!Yg(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Yg(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Yg(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ek(e){return new Promise(t=>{setTimeout(t,e)})}function Ph(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Yw(e,t):t}function Tk(e,t,n=0){const s=[...e,t];return n&&s.length>n?s.slice(1):s}function Ak(e,t,n=0){const s=[t,...e];return n&&s.length>n?s.slice(0,-1):s}var yp=Symbol();function Xw(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===yp?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function Zw(e,t){return typeof e=="function"?e(...t):!!e}var jr,Es,Oi,fv,Ik=(fv=class extends fo{constructor(){super();te(this,jr);te(this,Es);te(this,Oi);V(this,Oi,t=>{if(!zr&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){_(this,Es)||this.setEventListener(_(this,Oi))}onUnsubscribe(){var t;this.hasListeners()||((t=_(this,Es))==null||t.call(this),V(this,Es,void 0))}setEventListener(t){var n;V(this,Oi,t),(n=_(this,Es))==null||n.call(this),V(this,Es,t(s=>{typeof s=="boolean"?this.setFocused(s):this.onFocus()}))}setFocused(t){_(this,jr)!==t&&(V(this,jr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof _(this,jr)=="boolean"?_(this,jr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},jr=new WeakMap,Es=new WeakMap,Oi=new WeakMap,fv),wp=new Ik,Li,Ts,Fi,pv,Pk=(pv=class extends fo{constructor(){super();te(this,Li,!0);te(this,Ts);te(this,Fi);V(this,Fi,t=>{if(!zr&&window.addEventListener){const n=()=>t(!0),s=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",s,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",s)}}})}onSubscribe(){_(this,Ts)||this.setEventListener(_(this,Fi))}onUnsubscribe(){var t;this.hasListeners()||((t=_(this,Ts))==null||t.call(this),V(this,Ts,void 0))}setEventListener(t){var n;V(this,Fi,t),(n=_(this,Ts))==null||n.call(this),V(this,Ts,t(this.setOnline.bind(this)))}setOnline(t){_(this,Li)!==t&&(V(this,Li,t),this.listeners.forEach(s=>{s(t)}))}isOnline(){return _(this,Li)}},Li=new WeakMap,Ts=new WeakMap,Fi=new WeakMap,pv),Pc=new Pk;function Rh(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});n.status="pending",n.catch(()=>{});function s(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{s({status:"fulfilled",value:i}),e(i)},n.reject=i=>{s({status:"rejected",reason:i}),t(i)},n}function Rk(e){return Math.min(1e3*2**e,3e4)}function e0(e){return(e??"online")==="online"?Pc.isOnline():!0}var t0=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function gd(e){return e instanceof t0}function n0(e){let t=!1,n=0,s=!1,i;const o=Rh(),a=x=>{var y;s||(h(new t0(x)),(y=e.abort)==null||y.call(e))},l=()=>{t=!0},c=()=>{t=!1},u=()=>wp.isFocused()&&(e.networkMode==="always"||Pc.isOnline())&&e.canRun(),f=()=>e0(e.networkMode)&&e.canRun(),p=x=>{var y;s||(s=!0,(y=e.onSuccess)==null||y.call(e,x),i==null||i(),o.resolve(x))},h=x=>{var y;s||(s=!0,(y=e.onError)==null||y.call(e,x),i==null||i(),o.reject(x))},v=()=>new Promise(x=>{var y;i=g=>{(s||u())&&x(g)},(y=e.onPause)==null||y.call(e)}).then(()=>{var x;i=void 0,s||(x=e.onContinue)==null||x.call(e)}),b=()=>{if(s)return;let x;const y=n===0?e.initialPromise:void 0;try{x=y??e.fn()}catch(g){x=Promise.reject(g)}Promise.resolve(x).then(p).catch(g=>{var N;if(s)return;const m=e.retry??(zr?0:3),w=e.retryDelay??Rk,j=typeof w=="function"?w(n,g):w,S=m===!0||typeof m=="number"&&n<m||typeof m=="function"&&m(n,g);if(t||!S){h(g);return}n++,(N=e.onFail)==null||N.call(e,n,g),Ek(j).then(()=>u()?void 0:v()).then(()=>{t?h(g):b()})})};return{promise:o,cancel:a,continue:()=>(i==null||i(),o),cancelRetry:l,continueRetry:c,canStart:f,start:()=>(f()?b():v().then(b),o)}}var Mk=e=>setTimeout(e,0);function Dk(){let e=[],t=0,n=l=>{l()},s=l=>{l()},i=Mk;const o=l=>{t?e.push(l):i(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&i(()=>{s(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||a()}return c},batchCalls:l=>(...c)=>{o(()=>{l(...c)})},schedule:o,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{s=l},setScheduler:l=>{i=l}}}var Ge=Dk(),Sr,mv,s0=(mv=class{constructor(){te(this,Sr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Ah(this.gcTime)&&V(this,Sr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(zr?1/0:5*60*1e3))}clearGcTimeout(){_(this,Sr)&&(clearTimeout(_(this,Sr)),V(this,Sr,void 0))}},Sr=new WeakMap,mv),Ui,_r,Vt,Nr,rt,Ia,Cr,on,zn,gv,Ok=(gv=class extends s0{constructor(t){super();te(this,on);te(this,Ui);te(this,_r);te(this,Vt);te(this,Nr);te(this,rt);te(this,Ia);te(this,Cr);V(this,Cr,!1),V(this,Ia,t.defaultOptions),this.setOptions(t.options),this.observers=[],V(this,Nr,t.client),V(this,Vt,_(this,Nr).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,V(this,Ui,Lk(this.options)),this.state=t.state??_(this,Ui),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=_(this,rt))==null?void 0:t.promise}setOptions(t){this.options={..._(this,Ia),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&_(this,Vt).remove(this)}setData(t,n){const s=Ph(this.state.data,t,this.options);return ue(this,on,zn).call(this,{data:s,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),s}setState(t,n){ue(this,on,zn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var s,i;const n=(s=_(this,rt))==null?void 0:s.promise;return(i=_(this,rt))==null||i.cancel(t),n?n.then(mt).catch(mt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(_(this,Ui))}isActive(){return this.observers.some(t=>un(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===yp||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>qs(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!Jw(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(s=>s.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=_(this,rt))==null||n.continue()}onOnline(){var n;const t=this.observers.find(s=>s.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=_(this,rt))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),_(this,Vt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(_(this,rt)&&(_(this,Cr)?_(this,rt).cancel({revert:!0}):_(this,rt).cancelRetry()),this.scheduleGc()),_(this,Vt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||ue(this,on,zn).call(this,{type:"invalidate"})}fetch(t,n){var u,f,p;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(_(this,rt))return _(this,rt).continueRetry(),_(this,rt).promise}if(t&&this.setOptions(t),!this.options.queryFn){const h=this.observers.find(v=>v.options.queryFn);h&&this.setOptions(h.options)}const s=new AbortController,i=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(V(this,Cr,!0),s.signal)})},o=()=>{const h=Xw(this.options,n),b=(()=>{const x={client:_(this,Nr),queryKey:this.queryKey,meta:this.meta};return i(x),x})();return V(this,Cr,!1),this.options.persister?this.options.persister(h,b,this):h(b)},l=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:_(this,Nr),state:this.state,fetchFn:o};return i(h),h})();(u=this.options.behavior)==null||u.onFetch(l,this),V(this,_r,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=l.fetchOptions)==null?void 0:f.meta))&&ue(this,on,zn).call(this,{type:"fetch",meta:(p=l.fetchOptions)==null?void 0:p.meta});const c=h=>{var v,b,x,y;gd(h)&&h.silent||ue(this,on,zn).call(this,{type:"error",error:h}),gd(h)||((b=(v=_(this,Vt).config).onError)==null||b.call(v,h,this),(y=(x=_(this,Vt).config).onSettled)==null||y.call(x,this.state.data,h,this)),this.scheduleGc()};return V(this,rt,n0({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,abort:s.abort.bind(s),onSuccess:h=>{var v,b,x,y;if(h===void 0){c(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(g){c(g);return}(b=(v=_(this,Vt).config).onSuccess)==null||b.call(v,h,this),(y=(x=_(this,Vt).config).onSettled)==null||y.call(x,h,this.state.error,this),this.scheduleGc()},onError:c,onFail:(h,v)=>{ue(this,on,zn).call(this,{type:"failed",failureCount:h,error:v})},onPause:()=>{ue(this,on,zn).call(this,{type:"pause"})},onContinue:()=>{ue(this,on,zn).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),_(this,rt).start()}},Ui=new WeakMap,_r=new WeakMap,Vt=new WeakMap,Nr=new WeakMap,rt=new WeakMap,Ia=new WeakMap,Cr=new WeakMap,on=new WeakSet,zn=function(t){const n=s=>{switch(t.type){case"failed":return{...s,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...s,fetchStatus:"paused"};case"continue":return{...s,fetchStatus:"fetching"};case"fetch":return{...s,...r0(s.data,this.options),fetchMeta:t.meta??null};case"success":return V(this,_r,void 0),{...s,data:t.data,dataUpdateCount:s.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return gd(i)&&i.revert&&_(this,_r)?{..._(this,_r),fetchStatus:"idle"}:{...s,error:i,errorUpdateCount:s.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:s.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...s,isInvalidated:!0};case"setState":return{...s,...t.state}}};this.state=n(this.state),Ge.batch(()=>{this.observers.forEach(s=>{s.onQueryUpdate()}),_(this,Vt).notify({query:this,type:"updated",action:t})})},gv);function r0(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:e0(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function Lk(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,s=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?s??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Sn,xv,Fk=(xv=class extends fo{constructor(t={}){super();te(this,Sn);this.config=t,V(this,Sn,new Map)}build(t,n,s){const i=n.queryKey,o=n.queryHash??vp(i,n);let a=this.get(o);return a||(a=new Ok({client:t,queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:s,defaultOptions:t.getQueryDefaults(i)}),this.add(a)),a}add(t){_(this,Sn).has(t.queryHash)||(_(this,Sn).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=_(this,Sn).get(t.queryHash);n&&(t.destroy(),n===t&&_(this,Sn).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Ge.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return _(this,Sn).get(t)}getAll(){return[..._(this,Sn).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(s=>qg(n,s))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(s=>qg(t,s)):n}notify(t){Ge.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Ge.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Ge.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Sn=new WeakMap,xv),_n,ht,kr,Nn,ys,vv,Uk=(vv=class extends s0{constructor(t){super();te(this,Nn);te(this,_n);te(this,ht);te(this,kr);this.mutationId=t.mutationId,V(this,ht,t.mutationCache),V(this,_n,[]),this.state=t.state||i0(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){_(this,_n).includes(t)||(_(this,_n).push(t),this.clearGcTimeout(),_(this,ht).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){V(this,_n,_(this,_n).filter(n=>n!==t)),this.scheduleGc(),_(this,ht).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){_(this,_n).length||(this.state.status==="pending"?this.scheduleGc():_(this,ht).remove(this))}continue(){var t;return((t=_(this,kr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,a,l,c,u,f,p,h,v,b,x,y,g,m,w,j,S,N,C,I;const n=()=>{ue(this,Nn,ys).call(this,{type:"continue"})};V(this,kr,n0({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(R,M)=>{ue(this,Nn,ys).call(this,{type:"failed",failureCount:R,error:M})},onPause:()=>{ue(this,Nn,ys).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>_(this,ht).canRun(this)}));const s=this.state.status==="pending",i=!_(this,kr).canStart();try{if(s)n();else{ue(this,Nn,ys).call(this,{type:"pending",variables:t,isPaused:i}),await((a=(o=_(this,ht).config).onMutate)==null?void 0:a.call(o,t,this));const M=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,t));M!==this.state.context&&ue(this,Nn,ys).call(this,{type:"pending",context:M,variables:t,isPaused:i})}const R=await _(this,kr).start();return await((f=(u=_(this,ht).config).onSuccess)==null?void 0:f.call(u,R,t,this.state.context,this)),await((h=(p=this.options).onSuccess)==null?void 0:h.call(p,R,t,this.state.context)),await((b=(v=_(this,ht).config).onSettled)==null?void 0:b.call(v,R,null,this.state.variables,this.state.context,this)),await((y=(x=this.options).onSettled)==null?void 0:y.call(x,R,null,t,this.state.context)),ue(this,Nn,ys).call(this,{type:"success",data:R}),R}catch(R){try{throw await((m=(g=_(this,ht).config).onError)==null?void 0:m.call(g,R,t,this.state.context,this)),await((j=(w=this.options).onError)==null?void 0:j.call(w,R,t,this.state.context)),await((N=(S=_(this,ht).config).onSettled)==null?void 0:N.call(S,void 0,R,this.state.variables,this.state.context,this)),await((I=(C=this.options).onSettled)==null?void 0:I.call(C,void 0,R,t,this.state.context)),R}finally{ue(this,Nn,ys).call(this,{type:"error",error:R})}}finally{_(this,ht).runNext(this)}}},_n=new WeakMap,ht=new WeakMap,kr=new WeakMap,Nn=new WeakSet,ys=function(t){const n=s=>{switch(t.type){case"failed":return{...s,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...s,isPaused:!0};case"continue":return{...s,isPaused:!1};case"pending":return{...s,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...s,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...s,data:void 0,error:t.error,failureCount:s.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Ge.batch(()=>{_(this,_n).forEach(s=>{s.onMutationUpdate(t)}),_(this,ht).notify({mutation:this,type:"updated",action:t})})},vv);function i0(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Wn,an,Pa,yv,$k=(yv=class extends fo{constructor(t={}){super();te(this,Wn);te(this,an);te(this,Pa);this.config=t,V(this,Wn,new Set),V(this,an,new Map),V(this,Pa,0)}build(t,n,s){const i=new Uk({mutationCache:this,mutationId:++ul(this,Pa)._,options:t.defaultMutationOptions(n),state:s});return this.add(i),i}add(t){_(this,Wn).add(t);const n=El(t);if(typeof n=="string"){const s=_(this,an).get(n);s?s.push(t):_(this,an).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(_(this,Wn).delete(t)){const n=El(t);if(typeof n=="string"){const s=_(this,an).get(n);if(s)if(s.length>1){const i=s.indexOf(t);i!==-1&&s.splice(i,1)}else s[0]===t&&_(this,an).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=El(t);if(typeof n=="string"){const s=_(this,an).get(n),i=s==null?void 0:s.find(o=>o.state.status==="pending");return!i||i===t}else return!0}runNext(t){var s;const n=El(t);if(typeof n=="string"){const i=(s=_(this,an).get(n))==null?void 0:s.find(o=>o!==t&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Ge.batch(()=>{_(this,Wn).forEach(t=>{this.notify({type:"removed",mutation:t})}),_(this,Wn).clear(),_(this,an).clear()})}getAll(){return Array.from(_(this,Wn))}find(t){const n={exact:!0,...t};return this.getAll().find(s=>Qg(n,s))}findAll(t={}){return this.getAll().filter(n=>Qg(t,n))}notify(t){Ge.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Ge.batch(()=>Promise.all(t.map(n=>n.continue().catch(mt))))}},Wn=new WeakMap,an=new WeakMap,Pa=new WeakMap,yv);function El(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Xg(e){return{onFetch:(t,n)=>{var f,p,h,v,b;const s=t.options,i=(h=(p=(f=t.fetchOptions)==null?void 0:f.meta)==null?void 0:p.fetchMore)==null?void 0:h.direction,o=((v=t.state.data)==null?void 0:v.pages)||[],a=((b=t.state.data)==null?void 0:b.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let x=!1;const y=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(t.signal.aborted?x=!0:t.signal.addEventListener("abort",()=>{x=!0}),t.signal)})},g=Xw(t.options,t.fetchOptions),m=async(w,j,S)=>{if(x)return Promise.reject();if(j==null&&w.pages.length)return Promise.resolve(w);const C=(()=>{const k={client:t.client,queryKey:t.queryKey,pageParam:j,direction:S?"backward":"forward",meta:t.options.meta};return y(k),k})(),I=await g(C),{maxPages:R}=t.options,M=S?Ak:Tk;return{pages:M(w.pages,I,R),pageParams:M(w.pageParams,j,R)}};if(i&&o.length){const w=i==="backward",j=w?zk:Zg,S={pages:o,pageParams:a},N=j(s,S);l=await m(S,N,w)}else{const w=e??o.length;do{const j=c===0?a[0]??s.initialPageParam:Zg(s,l);if(c>0&&j==null)break;l=await m(l,j),c++}while(c<w)}return l};t.options.persister?t.fetchFn=()=>{var x,y;return(y=(x=t.options).persister)==null?void 0:y.call(x,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Zg(e,{pages:t,pageParams:n}){const s=t.length-1;return t.length>0?e.getNextPageParam(t[s],t,n[s],n):void 0}function zk(e,{pages:t,pageParams:n}){var s;return t.length>0?(s=e.getPreviousPageParam)==null?void 0:s.call(e,t[0],t,n[0],n):void 0}var Ue,As,Is,$i,zi,Ps,Bi,Hi,wv,Bk=(wv=class{constructor(e={}){te(this,Ue);te(this,As);te(this,Is);te(this,$i);te(this,zi);te(this,Ps);te(this,Bi);te(this,Hi);V(this,Ue,e.queryCache||new Fk),V(this,As,e.mutationCache||new $k),V(this,Is,e.defaultOptions||{}),V(this,$i,new Map),V(this,zi,new Map),V(this,Ps,0)}mount(){ul(this,Ps)._++,_(this,Ps)===1&&(V(this,Bi,wp.subscribe(async e=>{e&&(await this.resumePausedMutations(),_(this,Ue).onFocus())})),V(this,Hi,Pc.subscribe(async e=>{e&&(await this.resumePausedMutations(),_(this,Ue).onOnline())})))}unmount(){var e,t;ul(this,Ps)._--,_(this,Ps)===0&&((e=_(this,Bi))==null||e.call(this),V(this,Bi,void 0),(t=_(this,Hi))==null||t.call(this),V(this,Hi,void 0))}isFetching(e){return _(this,Ue).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return _(this,As).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=_(this,Ue).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=_(this,Ue).build(this,t),s=n.state.data;return s===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(qs(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(s))}getQueriesData(e){return _(this,Ue).findAll(e).map(({queryKey:t,state:n})=>{const s=n.data;return[t,s]})}setQueryData(e,t,n){const s=this.defaultQueryOptions({queryKey:e}),i=_(this,Ue).get(s.queryHash),o=i==null?void 0:i.state.data,a=kk(t,o);if(a!==void 0)return _(this,Ue).build(this,s).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return Ge.batch(()=>_(this,Ue).findAll(e).map(({queryKey:s})=>[s,this.setQueryData(s,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=_(this,Ue).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=_(this,Ue);Ge.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=_(this,Ue);return Ge.batch(()=>(n.findAll(e).forEach(s=>{s.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},s=Ge.batch(()=>_(this,Ue).findAll(e).map(i=>i.cancel(n)));return Promise.all(s).then(mt).catch(mt)}invalidateQueries(e,t={}){return Ge.batch(()=>(_(this,Ue).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},s=Ge.batch(()=>_(this,Ue).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(mt)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(s).then(mt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=_(this,Ue).build(this,t);return n.isStaleByTime(qs(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(mt).catch(mt)}fetchInfiniteQuery(e){return e.behavior=Xg(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(mt).catch(mt)}ensureInfiniteQueryData(e){return e.behavior=Xg(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Pc.isOnline()?_(this,As).resumePausedMutations():Promise.resolve()}getQueryCache(){return _(this,Ue)}getMutationCache(){return _(this,As)}getDefaultOptions(){return _(this,Is)}setDefaultOptions(e){V(this,Is,e)}setQueryDefaults(e,t){_(this,$i).set(Br(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[..._(this,$i).values()],n={};return t.forEach(s=>{ya(e,s.queryKey)&&Object.assign(n,s.defaultOptions)}),n}setMutationDefaults(e,t){_(this,zi).set(Br(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[..._(this,zi).values()],n={};return t.forEach(s=>{ya(e,s.mutationKey)&&Object.assign(n,s.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={..._(this,Is).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=vp(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===yp&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{..._(this,Is).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){_(this,Ue).clear(),_(this,As).clear()}},Ue=new WeakMap,As=new WeakMap,Is=new WeakMap,$i=new WeakMap,zi=new WeakMap,Ps=new WeakMap,Bi=new WeakMap,Hi=new WeakMap,wv),St,fe,Ra,ft,Er,Wi,Rs,Ms,Ma,Vi,Ki,Tr,Ar,Ds,Gi,ve,Uo,Mh,Dh,Oh,Lh,Fh,Uh,$h,o0,bv,Hk=(bv=class extends fo{constructor(t,n){super();te(this,ve);te(this,St);te(this,fe);te(this,Ra);te(this,ft);te(this,Er);te(this,Wi);te(this,Rs);te(this,Ms);te(this,Ma);te(this,Vi);te(this,Ki);te(this,Tr);te(this,Ar);te(this,Ds);te(this,Gi,new Set);this.options=n,V(this,St,t),V(this,Ms,null),V(this,Rs,Rh()),this.options.experimental_prefetchInRender||_(this,Rs).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(n)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(_(this,fe).addObserver(this),ex(_(this,fe),this.options)?ue(this,ve,Uo).call(this):this.updateResult(),ue(this,ve,Lh).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return zh(_(this,fe),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return zh(_(this,fe),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,ue(this,ve,Fh).call(this),ue(this,ve,Uh).call(this),_(this,fe).removeObserver(this)}setOptions(t){const n=this.options,s=_(this,fe);if(this.options=_(this,St).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof un(this.options.enabled,_(this,fe))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");ue(this,ve,$h).call(this),_(this,fe).setOptions(this.options),n._defaulted&&!Ic(this.options,n)&&_(this,St).getQueryCache().notify({type:"observerOptionsUpdated",query:_(this,fe),observer:this});const i=this.hasListeners();i&&tx(_(this,fe),s,this.options,n)&&ue(this,ve,Uo).call(this),this.updateResult(),i&&(_(this,fe)!==s||un(this.options.enabled,_(this,fe))!==un(n.enabled,_(this,fe))||qs(this.options.staleTime,_(this,fe))!==qs(n.staleTime,_(this,fe)))&&ue(this,ve,Mh).call(this);const o=ue(this,ve,Dh).call(this);i&&(_(this,fe)!==s||un(this.options.enabled,_(this,fe))!==un(n.enabled,_(this,fe))||o!==_(this,Ds))&&ue(this,ve,Oh).call(this,o)}getOptimisticResult(t){const n=_(this,St).getQueryCache().build(_(this,St),t),s=this.createResult(n,t);return Vk(this,s)&&(V(this,ft,s),V(this,Wi,this.options),V(this,Er,_(this,fe).state)),s}getCurrentResult(){return _(this,ft)}trackResult(t,n){return new Proxy(t,{get:(s,i)=>(this.trackProp(i),n==null||n(i),Reflect.get(s,i))})}trackProp(t){_(this,Gi).add(t)}getCurrentQuery(){return _(this,fe)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const n=_(this,St).defaultQueryOptions(t),s=_(this,St).getQueryCache().build(_(this,St),n);return s.fetch().then(()=>this.createResult(s,n))}fetch(t){return ue(this,ve,Uo).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),_(this,ft)))}createResult(t,n){var R;const s=_(this,fe),i=this.options,o=_(this,ft),a=_(this,Er),l=_(this,Wi),u=t!==s?t.state:_(this,Ra),{state:f}=t;let p={...f},h=!1,v;if(n._optimisticResults){const M=this.hasListeners(),k=!M&&ex(t,n),F=M&&tx(t,s,n,i);(k||F)&&(p={...p,...r0(f.data,t.options)}),n._optimisticResults==="isRestoring"&&(p.fetchStatus="idle")}let{error:b,errorUpdatedAt:x,status:y}=p;v=p.data;let g=!1;if(n.placeholderData!==void 0&&v===void 0&&y==="pending"){let M;o!=null&&o.isPlaceholderData&&n.placeholderData===(l==null?void 0:l.placeholderData)?(M=o.data,g=!0):M=typeof n.placeholderData=="function"?n.placeholderData((R=_(this,Ki))==null?void 0:R.state.data,_(this,Ki)):n.placeholderData,M!==void 0&&(y="success",v=Ph(o==null?void 0:o.data,M,n),h=!0)}if(n.select&&v!==void 0&&!g)if(o&&v===(a==null?void 0:a.data)&&n.select===_(this,Ma))v=_(this,Vi);else try{V(this,Ma,n.select),v=n.select(v),v=Ph(o==null?void 0:o.data,v,n),V(this,Vi,v),V(this,Ms,null)}catch(M){V(this,Ms,M)}_(this,Ms)&&(b=_(this,Ms),v=_(this,Vi),x=Date.now(),y="error");const m=p.fetchStatus==="fetching",w=y==="pending",j=y==="error",S=w&&m,N=v!==void 0,I={status:y,fetchStatus:p.fetchStatus,isPending:w,isSuccess:y==="success",isError:j,isInitialLoading:S,isLoading:S,data:v,dataUpdatedAt:p.dataUpdatedAt,error:b,errorUpdatedAt:x,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>u.dataUpdateCount||p.errorUpdateCount>u.errorUpdateCount,isFetching:m,isRefetching:m&&!w,isLoadingError:j&&!N,isPaused:p.fetchStatus==="paused",isPlaceholderData:h,isRefetchError:j&&N,isStale:bp(t,n),refetch:this.refetch,promise:_(this,Rs)};if(this.options.experimental_prefetchInRender){const M=A=>{I.status==="error"?A.reject(I.error):I.data!==void 0&&A.resolve(I.data)},k=()=>{const A=V(this,Rs,I.promise=Rh());M(A)},F=_(this,Rs);switch(F.status){case"pending":t.queryHash===s.queryHash&&M(F);break;case"fulfilled":(I.status==="error"||I.data!==F.value)&&k();break;case"rejected":(I.status!=="error"||I.error!==F.reason)&&k();break}}return I}updateResult(){const t=_(this,ft),n=this.createResult(_(this,fe),this.options);if(V(this,Er,_(this,fe).state),V(this,Wi,this.options),_(this,Er).data!==void 0&&V(this,Ki,_(this,fe)),Ic(n,t))return;V(this,ft,n);const s=()=>{if(!t)return!0;const{notifyOnChangeProps:i}=this.options,o=typeof i=="function"?i():i;if(o==="all"||!o&&!_(this,Gi).size)return!0;const a=new Set(o??_(this,Gi));return this.options.throwOnError&&a.add("error"),Object.keys(_(this,ft)).some(l=>{const c=l;return _(this,ft)[c]!==t[c]&&a.has(c)})};ue(this,ve,o0).call(this,{listeners:s()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&ue(this,ve,Lh).call(this)}},St=new WeakMap,fe=new WeakMap,Ra=new WeakMap,ft=new WeakMap,Er=new WeakMap,Wi=new WeakMap,Rs=new WeakMap,Ms=new WeakMap,Ma=new WeakMap,Vi=new WeakMap,Ki=new WeakMap,Tr=new WeakMap,Ar=new WeakMap,Ds=new WeakMap,Gi=new WeakMap,ve=new WeakSet,Uo=function(t){ue(this,ve,$h).call(this);let n=_(this,fe).fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(mt)),n},Mh=function(){ue(this,ve,Fh).call(this);const t=qs(this.options.staleTime,_(this,fe));if(zr||_(this,ft).isStale||!Ah(t))return;const s=Jw(_(this,ft).dataUpdatedAt,t)+1;V(this,Tr,setTimeout(()=>{_(this,ft).isStale||this.updateResult()},s))},Dh=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(_(this,fe)):this.options.refetchInterval)??!1},Oh=function(t){ue(this,ve,Uh).call(this),V(this,Ds,t),!(zr||un(this.options.enabled,_(this,fe))===!1||!Ah(_(this,Ds))||_(this,Ds)===0)&&V(this,Ar,setInterval(()=>{(this.options.refetchIntervalInBackground||wp.isFocused())&&ue(this,ve,Uo).call(this)},_(this,Ds)))},Lh=function(){ue(this,ve,Mh).call(this),ue(this,ve,Oh).call(this,ue(this,ve,Dh).call(this))},Fh=function(){_(this,Tr)&&(clearTimeout(_(this,Tr)),V(this,Tr,void 0))},Uh=function(){_(this,Ar)&&(clearInterval(_(this,Ar)),V(this,Ar,void 0))},$h=function(){const t=_(this,St).getQueryCache().build(_(this,St),this.options);if(t===_(this,fe))return;const n=_(this,fe);V(this,fe,t),V(this,Ra,t.state),this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))},o0=function(t){Ge.batch(()=>{t.listeners&&this.listeners.forEach(n=>{n(_(this,ft))}),_(this,St).getQueryCache().notify({query:_(this,fe),type:"observerResultsUpdated"})})},bv);function Wk(e,t){return un(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function ex(e,t){return Wk(e,t)||e.state.data!==void 0&&zh(e,t,t.refetchOnMount)}function zh(e,t,n){if(un(t.enabled,e)!==!1&&qs(t.staleTime,e)!=="static"){const s=typeof n=="function"?n(e):n;return s==="always"||s!==!1&&bp(e,t)}return!1}function tx(e,t,n,s){return(e!==t||un(s.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&bp(e,n)}function bp(e,t){return un(t.enabled,e)!==!1&&e.isStaleByTime(qs(t.staleTime,e))}function Vk(e,t){return!Ic(e.getCurrentResult(),t)}var Os,Ls,_t,Vn,Xn,Yl,Bh,jv,Kk=(jv=class extends fo{constructor(n,s){super();te(this,Xn);te(this,Os);te(this,Ls);te(this,_t);te(this,Vn);V(this,Os,n),this.setOptions(s),this.bindMethods(),ue(this,Xn,Yl).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){var i;const s=this.options;this.options=_(this,Os).defaultMutationOptions(n),Ic(this.options,s)||_(this,Os).getMutationCache().notify({type:"observerOptionsUpdated",mutation:_(this,_t),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&Br(s.mutationKey)!==Br(this.options.mutationKey)?this.reset():((i=_(this,_t))==null?void 0:i.state.status)==="pending"&&_(this,_t).setOptions(this.options)}onUnsubscribe(){var n;this.hasListeners()||(n=_(this,_t))==null||n.removeObserver(this)}onMutationUpdate(n){ue(this,Xn,Yl).call(this),ue(this,Xn,Bh).call(this,n)}getCurrentResult(){return _(this,Ls)}reset(){var n;(n=_(this,_t))==null||n.removeObserver(this),V(this,_t,void 0),ue(this,Xn,Yl).call(this),ue(this,Xn,Bh).call(this)}mutate(n,s){var i;return V(this,Vn,s),(i=_(this,_t))==null||i.removeObserver(this),V(this,_t,_(this,Os).getMutationCache().build(_(this,Os),this.options)),_(this,_t).addObserver(this),_(this,_t).execute(n)}},Os=new WeakMap,Ls=new WeakMap,_t=new WeakMap,Vn=new WeakMap,Xn=new WeakSet,Yl=function(){var s;const n=((s=_(this,_t))==null?void 0:s.state)??i0();V(this,Ls,{...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset})},Bh=function(n){Ge.batch(()=>{var s,i,o,a,l,c,u,f;if(_(this,Vn)&&this.hasListeners()){const p=_(this,Ls).variables,h=_(this,Ls).context;(n==null?void 0:n.type)==="success"?((i=(s=_(this,Vn)).onSuccess)==null||i.call(s,n.data,p,h),(a=(o=_(this,Vn)).onSettled)==null||a.call(o,n.data,null,p,h)):(n==null?void 0:n.type)==="error"&&((c=(l=_(this,Vn)).onError)==null||c.call(l,n.error,p,h),(f=(u=_(this,Vn)).onSettled)==null||f.call(u,void 0,n.error,p,h))}this.listeners.forEach(p=>{p(_(this,Ls))})})},jv),a0=d.createContext(void 0),hs=e=>{const t=d.useContext(a0);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},Gk=({client:e,children:t})=>(d.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),r.jsx(a0.Provider,{value:e,children:t})),l0=d.createContext(!1),qk=()=>d.useContext(l0);l0.Provider;function Qk(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Jk=d.createContext(Qk()),Yk=()=>d.useContext(Jk),Xk=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},Zk=e=>{d.useEffect(()=>{e.clearReset()},[e])},eE=({result:e,errorResetBoundary:t,throwOnError:n,query:s,suspense:i})=>e.isError&&!t.isReset()&&!e.isFetching&&s&&(i&&e.data===void 0||Zw(n,[e.error,s])),tE=e=>{if(e.suspense){const t=s=>s==="static"?s:Math.max(s??1e3,1e3),n=e.staleTime;e.staleTime=typeof n=="function"?(...s)=>t(n(...s)):t(n),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},nE=(e,t)=>e.isLoading&&e.isFetching&&!t,sE=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,nx=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});function rE(e,t,n){var p,h,v,b,x;const s=qk(),i=Yk(),o=hs(),a=o.defaultQueryOptions(e);(h=(p=o.getDefaultOptions().queries)==null?void 0:p._experimental_beforeQuery)==null||h.call(p,a),a._optimisticResults=s?"isRestoring":"optimistic",tE(a),Xk(a,i),Zk(i);const l=!o.getQueryCache().get(a.queryHash),[c]=d.useState(()=>new t(o,a)),u=c.getOptimisticResult(a),f=!s&&e.subscribed!==!1;if(d.useSyncExternalStore(d.useCallback(y=>{const g=f?c.subscribe(Ge.batchCalls(y)):mt;return c.updateResult(),g},[c,f]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),d.useEffect(()=>{c.setOptions(a)},[a,c]),sE(a,u))throw nx(a,c,i);if(eE({result:u,errorResetBoundary:i,throwOnError:a.throwOnError,query:o.getQueryCache().get(a.queryHash),suspense:a.suspense}))throw u.error;if((b=(v=o.getDefaultOptions().queries)==null?void 0:v._experimental_afterQuery)==null||b.call(v,a,u),a.experimental_prefetchInRender&&!zr&&nE(u,s)){const y=l?nx(a,c,i):(x=o.getQueryCache().get(a.queryHash))==null?void 0:x.promise;y==null||y.catch(mt).finally(()=>{c.updateResult()})}return a.notifyOnChangeProps?u:c.trackResult(u)}function Je(e,t){return rE(e,Hk)}function _e(e,t){const n=hs(),[s]=d.useState(()=>new Kk(n,e));d.useEffect(()=>{s.setOptions(e)},[s,e]);const i=d.useSyncExternalStore(d.useCallback(a=>s.subscribe(Ge.batchCalls(a)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),o=d.useCallback((a,l)=>{s.mutate(a,l).catch(mt)},[s]);if(i.error&&Zw(s.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:o,mutateAsync:i.mutate}}async function c0(e){if(!e.ok)try{const t=await e.json();throw new Error(t.message||`${e.status}: ${e.statusText}`)}catch{const n=await e.text().catch(()=>e.statusText);throw new Error(`${e.status}: ${n}`)}}async function Ne(e,t){const n={"Content-Type":"application/json",...t==null?void 0:t.headers},s=localStorage.getItem("account_id");s&&(n["x-account-id"]=s);const i=await fetch(e,{method:(t==null?void 0:t.method)||"GET",headers:n,body:t!=null&&t.body?JSON.stringify(t.body):void 0,credentials:"include"});return await c0(i),i.json()}const iE=({on401:e})=>async({queryKey:t})=>{const n={},s=localStorage.getItem("account_id");s&&(n["x-account-id"]=s);const i=await fetch(t[0],{headers:n,credentials:"include"});return e==="returnNull"&&i.status===401?null:(await c0(i),await i.json())},dt=new Bk({defaultOptions:{queries:{queryFn:iE({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:3e4,retry:1},mutations:{retry:!1}}}),oE=1,aE=1e6;let xd=0;function lE(){return xd=(xd+1)%Number.MAX_SAFE_INTEGER,xd.toString()}const vd=new Map,sx=e=>{if(vd.has(e))return;const t=setTimeout(()=>{vd.delete(e),Xo({type:"REMOVE_TOAST",toastId:e})},aE);vd.set(e,t)},cE=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,oE)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?sx(n):e.toasts.forEach(s=>{sx(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===n||n===void 0?{...s,open:!1}:s)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},Xl=[];let Zl={toasts:[]};function Xo(e){Zl=cE(Zl,e),Xl.forEach(t=>{t(Zl)})}function uE({...e}){const t=lE(),n=i=>Xo({type:"UPDATE_TOAST",toast:{...i,id:t}}),s=()=>Xo({type:"DISMISS_TOAST",toastId:t});return Xo({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||s()}}}),{id:t,dismiss:s,update:n}}function vn(){const[e,t]=d.useState(Zl);return d.useEffect(()=>(Xl.push(t),()=>{const n=Xl.indexOf(t);n>-1&&Xl.splice(n,1)}),[e]),{...e,toast:uE,dismiss:n=>Xo({type:"DISMISS_TOAST",toastId:n})}}function z(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function rx(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function fu(...e){return t=>{let n=!1;const s=e.map(i=>{const o=rx(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<s.length;i++){const o=s[i];typeof o=="function"?o():rx(e[i],null)}}}}function pe(...e){return d.useCallback(fu(...e),e)}function dE(e,t){const n=d.createContext(t),s=o=>{const{children:a,...l}=o,c=d.useMemo(()=>l,Object.values(l));return r.jsx(n.Provider,{value:c,children:a})};s.displayName=e+"Provider";function i(o){const a=d.useContext(n);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${o}\` must be used within \`${e}\``)}return[s,i]}function Wt(e,t=[]){let n=[];function s(o,a){const l=d.createContext(a),c=n.length;n=[...n,a];const u=p=>{var g;const{scope:h,children:v,...b}=p,x=((g=h==null?void 0:h[e])==null?void 0:g[c])||l,y=d.useMemo(()=>b,Object.values(b));return r.jsx(x.Provider,{value:y,children:v})};u.displayName=o+"Provider";function f(p,h){var x;const v=((x=h==null?void 0:h[e])==null?void 0:x[c])||l,b=d.useContext(v);if(b)return b;if(a!==void 0)return a;throw new Error(`\`${p}\` must be used within \`${o}\``)}return[u,f]}const i=()=>{const o=n.map(a=>d.createContext(a));return function(l){const c=(l==null?void 0:l[e])||o;return d.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return i.scopeName=e,[s,hE(i,...t)]}function hE(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const s=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const a=s.reduce((l,{useScope:c,scopeName:u})=>{const p=c(o)[`__scope${u}`];return{...l,...p}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function Hr(e){const t=pE(e),n=d.forwardRef((s,i)=>{const{children:o,...a}=s,l=d.Children.toArray(o),c=l.find(mE);if(c){const u=c.props.children,f=l.map(p=>p===c?d.Children.count(u)>1?d.Children.only(null):d.isValidElement(u)?u.props.children:null:p);return r.jsx(t,{...a,ref:i,children:d.isValidElement(u)?d.cloneElement(u,void 0,f):null})}return r.jsx(t,{...a,ref:i,children:o})});return n.displayName=`${e}.Slot`,n}var fE=Hr("Slot");function pE(e){const t=d.forwardRef((n,s)=>{const{children:i,...o}=n;if(d.isValidElement(i)){const a=xE(i),l=gE(o,i.props);return i.type!==d.Fragment&&(l.ref=s?fu(s,a):a),d.cloneElement(i,l)}return d.Children.count(i)>1?d.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var u0=Symbol("radix.slottable");function d0(e){const t=({children:n})=>r.jsx(r.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=u0,t}function mE(e){return d.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===u0}function gE(e,t){const n={...t};for(const s in t){const i=e[s],o=t[s];/^on[A-Z]/.test(s)?i&&o?n[s]=(...l)=>{o(...l),i(...l)}:i&&(n[s]=i):s==="style"?n[s]={...i,...o}:s==="className"&&(n[s]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function xE(e){var s,i;let t=(s=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function pu(e){const t=e+"CollectionProvider",[n,s]=Wt(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=x=>{const{scope:y,children:g}=x,m=vs.useRef(null),w=vs.useRef(new Map).current;return r.jsx(i,{scope:y,itemMap:w,collectionRef:m,children:g})};a.displayName=t;const l=e+"CollectionSlot",c=Hr(l),u=vs.forwardRef((x,y)=>{const{scope:g,children:m}=x,w=o(l,g),j=pe(y,w.collectionRef);return r.jsx(c,{ref:j,children:m})});u.displayName=l;const f=e+"CollectionItemSlot",p="data-radix-collection-item",h=Hr(f),v=vs.forwardRef((x,y)=>{const{scope:g,children:m,...w}=x,j=vs.useRef(null),S=pe(y,j),N=o(f,g);return vs.useEffect(()=>(N.itemMap.set(j,{ref:j,...w}),()=>void N.itemMap.delete(j))),r.jsx(h,{[p]:"",ref:S,children:m})});v.displayName=f;function b(x){const y=o(e+"CollectionConsumer",x);return vs.useCallback(()=>{const m=y.collectionRef.current;if(!m)return[];const w=Array.from(m.querySelectorAll(`[${p}]`));return Array.from(y.itemMap.values()).sort((N,C)=>w.indexOf(N.ref.current)-w.indexOf(C.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:a,Slot:u,ItemSlot:v},b,s]}var vE=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],oe=vE.reduce((e,t)=>{const n=Hr(`Primitive.${t}`),s=d.forwardRef((i,o)=>{const{asChild:a,...l}=i,c=a?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),r.jsx(c,{...l,ref:o})});return s.displayName=`Primitive.${t}`,{...e,[t]:s}},{});function jp(e,t){e&&Zr.flushSync(()=>e.dispatchEvent(t))}function at(e){const t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...n)=>{var s;return(s=t.current)==null?void 0:s.call(t,...n)},[])}function yE(e,t=globalThis==null?void 0:globalThis.document){const n=at(e);d.useEffect(()=>{const s=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",s,{capture:!0}),()=>t.removeEventListener("keydown",s,{capture:!0})},[n,t])}var wE="DismissableLayer",Hh="dismissableLayer.update",bE="dismissableLayer.pointerDownOutside",jE="dismissableLayer.focusOutside",ix,h0=d.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),po=d.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:a,onDismiss:l,...c}=e,u=d.useContext(h0),[f,p]=d.useState(null),h=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,v]=d.useState({}),b=pe(t,C=>p(C)),x=Array.from(u.layers),[y]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=x.indexOf(y),m=f?x.indexOf(f):-1,w=u.layersWithOutsidePointerEventsDisabled.size>0,j=m>=g,S=_E(C=>{const I=C.target,R=[...u.branches].some(M=>M.contains(I));!j||R||(i==null||i(C),a==null||a(C),C.defaultPrevented||l==null||l())},h),N=NE(C=>{const I=C.target;[...u.branches].some(M=>M.contains(I))||(o==null||o(C),a==null||a(C),C.defaultPrevented||l==null||l())},h);return yE(C=>{m===u.layers.size-1&&(s==null||s(C),!C.defaultPrevented&&l&&(C.preventDefault(),l()))},h),d.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(ix=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),ox(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=ix)}},[f,h,n,u]),d.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),ox())},[f,u]),d.useEffect(()=>{const C=()=>v({});return document.addEventListener(Hh,C),()=>document.removeEventListener(Hh,C)},[]),r.jsx(oe.div,{...c,ref:b,style:{pointerEvents:w?j?"auto":"none":void 0,...e.style},onFocusCapture:z(e.onFocusCapture,N.onFocusCapture),onBlurCapture:z(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:z(e.onPointerDownCapture,S.onPointerDownCapture)})});po.displayName=wE;var SE="DismissableLayerBranch",f0=d.forwardRef((e,t)=>{const n=d.useContext(h0),s=d.useRef(null),i=pe(t,s);return d.useEffect(()=>{const o=s.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),r.jsx(oe.div,{...e,ref:i})});f0.displayName=SE;function _E(e,t=globalThis==null?void 0:globalThis.document){const n=at(e),s=d.useRef(!1),i=d.useRef(()=>{});return d.useEffect(()=>{const o=l=>{if(l.target&&!s.current){let c=function(){p0(bE,n,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=c,t.addEventListener("click",i.current,{once:!0})):c()}else t.removeEventListener("click",i.current);s.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>s.current=!0}}function NE(e,t=globalThis==null?void 0:globalThis.document){const n=at(e),s=d.useRef(!1);return d.useEffect(()=>{const i=o=>{o.target&&!s.current&&p0(jE,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>s.current=!0,onBlurCapture:()=>s.current=!1}}function ox(){const e=new CustomEvent(Hh);document.dispatchEvent(e)}function p0(e,t,n,{discrete:s}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),s?jp(i,o):i.dispatchEvent(o)}var CE=po,kE=f0,lt=globalThis!=null&&globalThis.document?d.useLayoutEffect:()=>{},EE="Portal",za=d.forwardRef((e,t)=>{var l;const{container:n,...s}=e,[i,o]=d.useState(!1);lt(()=>o(!0),[]);const a=n||i&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return a?YC.createPortal(r.jsx(oe.div,{...s,ref:t}),a):null});za.displayName=EE;function TE(e,t){return d.useReducer((n,s)=>t[n][s]??n,e)}var tn=e=>{const{present:t,children:n}=e,s=AE(t),i=typeof n=="function"?n({present:s.isPresent}):d.Children.only(n),o=pe(s.ref,IE(i));return typeof n=="function"||s.isPresent?d.cloneElement(i,{ref:o}):null};tn.displayName="Presence";function AE(e){const[t,n]=d.useState(),s=d.useRef({}),i=d.useRef(e),o=d.useRef("none"),a=e?"mounted":"unmounted",[l,c]=TE(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return d.useEffect(()=>{const u=Tl(s.current);o.current=l==="mounted"?u:"none"},[l]),lt(()=>{const u=s.current,f=i.current;if(f!==e){const h=o.current,v=Tl(u);e?c("MOUNT"):v==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(f&&h!==v?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,c]),lt(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,p=v=>{const x=Tl(s.current).includes(v.animationName);if(v.target===t&&x&&(c("ANIMATION_END"),!i.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},h=v=>{v.target===t&&(o.current=Tl(s.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",p),t.addEventListener("animationend",p),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",p),t.removeEventListener("animationend",p)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:d.useCallback(u=>{u&&(s.current=getComputedStyle(u)),n(u)},[])}}function Tl(e){return(e==null?void 0:e.animationName)||"none"}function IE(e){var s,i;let t=(s=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function ss({prop:e,defaultProp:t,onChange:n=()=>{}}){const[s,i]=PE({defaultProp:t,onChange:n}),o=e!==void 0,a=o?e:s,l=at(n),c=d.useCallback(u=>{if(o){const p=typeof u=="function"?u(e):u;p!==e&&l(p)}else i(u)},[o,e,i,l]);return[a,c]}function PE({defaultProp:e,onChange:t}){const n=d.useState(e),[s]=n,i=d.useRef(s),o=at(t);return d.useEffect(()=>{i.current!==s&&(o(s),i.current=s)},[s,i,o]),n}var RE="VisuallyHidden",Ba=d.forwardRef((e,t)=>r.jsx(oe.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));Ba.displayName=RE;var ME=Ba,Sp="ToastProvider",[_p,DE,OE]=pu("Toast"),[m0,CL]=Wt("Toast",[OE]),[LE,mu]=m0(Sp),g0=e=>{const{__scopeToast:t,label:n="Notification",duration:s=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:a}=e,[l,c]=d.useState(null),[u,f]=d.useState(0),p=d.useRef(!1),h=d.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Sp}\`. Expected non-empty \`string\`.`),r.jsx(_p.Provider,{scope:t,children:r.jsx(LE,{scope:t,label:n,duration:s,swipeDirection:i,swipeThreshold:o,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:d.useCallback(()=>f(v=>v+1),[]),onToastRemove:d.useCallback(()=>f(v=>v-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:h,children:a})})};g0.displayName=Sp;var x0="ToastViewport",FE=["F8"],Wh="toast.viewportPause",Vh="toast.viewportResume",v0=d.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:s=FE,label:i="Notifications ({hotkey})",...o}=e,a=mu(x0,n),l=DE(n),c=d.useRef(null),u=d.useRef(null),f=d.useRef(null),p=d.useRef(null),h=pe(t,p,a.onViewportChange),v=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=a.toastCount>0;d.useEffect(()=>{const y=g=>{var w;s.length!==0&&s.every(j=>g[j]||g.code===j)&&((w=p.current)==null||w.focus())};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[s]),d.useEffect(()=>{const y=c.current,g=p.current;if(b&&y&&g){const m=()=>{if(!a.isClosePausedRef.current){const N=new CustomEvent(Wh);g.dispatchEvent(N),a.isClosePausedRef.current=!0}},w=()=>{if(a.isClosePausedRef.current){const N=new CustomEvent(Vh);g.dispatchEvent(N),a.isClosePausedRef.current=!1}},j=N=>{!y.contains(N.relatedTarget)&&w()},S=()=>{y.contains(document.activeElement)||w()};return y.addEventListener("focusin",m),y.addEventListener("focusout",j),y.addEventListener("pointermove",m),y.addEventListener("pointerleave",S),window.addEventListener("blur",m),window.addEventListener("focus",w),()=>{y.removeEventListener("focusin",m),y.removeEventListener("focusout",j),y.removeEventListener("pointermove",m),y.removeEventListener("pointerleave",S),window.removeEventListener("blur",m),window.removeEventListener("focus",w)}}},[b,a.isClosePausedRef]);const x=d.useCallback(({tabbingDirection:y})=>{const m=l().map(w=>{const j=w.ref.current,S=[j,...YE(j)];return y==="forwards"?S:S.reverse()});return(y==="forwards"?m.reverse():m).flat()},[l]);return d.useEffect(()=>{const y=p.current;if(y){const g=m=>{var S,N,C;const w=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!w){const I=document.activeElement,R=m.shiftKey;if(m.target===y&&R){(S=u.current)==null||S.focus();return}const F=x({tabbingDirection:R?"backwards":"forwards"}),A=F.findIndex(D=>D===I);yd(F.slice(A+1))?m.preventDefault():R?(N=u.current)==null||N.focus():(C=f.current)==null||C.focus()}};return y.addEventListener("keydown",g),()=>y.removeEventListener("keydown",g)}},[l,x]),r.jsxs(kE,{ref:c,role:"region","aria-label":i.replace("{hotkey}",v),tabIndex:-1,style:{pointerEvents:b?void 0:"none"},children:[b&&r.jsx(Kh,{ref:u,onFocusFromOutsideViewport:()=>{const y=x({tabbingDirection:"forwards"});yd(y)}}),r.jsx(_p.Slot,{scope:n,children:r.jsx(oe.ol,{tabIndex:-1,...o,ref:h})}),b&&r.jsx(Kh,{ref:f,onFocusFromOutsideViewport:()=>{const y=x({tabbingDirection:"backwards"});yd(y)}})]})});v0.displayName=x0;var y0="ToastFocusProxy",Kh=d.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:s,...i}=e,o=mu(y0,n);return r.jsx(Ba,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:a=>{var u;const l=a.relatedTarget;!((u=o.viewport)!=null&&u.contains(l))&&s()}})});Kh.displayName=y0;var gu="Toast",UE="toast.swipeStart",$E="toast.swipeMove",zE="toast.swipeCancel",BE="toast.swipeEnd",w0=d.forwardRef((e,t)=>{const{forceMount:n,open:s,defaultOpen:i,onOpenChange:o,...a}=e,[l=!0,c]=ss({prop:s,defaultProp:i,onChange:o});return r.jsx(tn,{present:n||l,children:r.jsx(VE,{open:l,...a,ref:t,onClose:()=>c(!1),onPause:at(e.onPause),onResume:at(e.onResume),onSwipeStart:z(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:z(e.onSwipeMove,u=>{const{x:f,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:z(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:z(e.onSwipeEnd,u=>{const{x:f,y:p}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),c(!1)})})})});w0.displayName=gu;var[HE,WE]=m0(gu,{onClose(){}}),VE=d.forwardRef((e,t)=>{const{__scopeToast:n,type:s="foreground",duration:i,open:o,onClose:a,onEscapeKeyDown:l,onPause:c,onResume:u,onSwipeStart:f,onSwipeMove:p,onSwipeCancel:h,onSwipeEnd:v,...b}=e,x=mu(gu,n),[y,g]=d.useState(null),m=pe(t,D=>g(D)),w=d.useRef(null),j=d.useRef(null),S=i||x.duration,N=d.useRef(0),C=d.useRef(S),I=d.useRef(0),{onToastAdd:R,onToastRemove:M}=x,k=at(()=>{var Z;(y==null?void 0:y.contains(document.activeElement))&&((Z=x.viewport)==null||Z.focus()),a()}),F=d.useCallback(D=>{!D||D===1/0||(window.clearTimeout(I.current),N.current=new Date().getTime(),I.current=window.setTimeout(k,D))},[k]);d.useEffect(()=>{const D=x.viewport;if(D){const Z=()=>{F(C.current),u==null||u()},W=()=>{const P=new Date().getTime()-N.current;C.current=C.current-P,window.clearTimeout(I.current),c==null||c()};return D.addEventListener(Wh,W),D.addEventListener(Vh,Z),()=>{D.removeEventListener(Wh,W),D.removeEventListener(Vh,Z)}}},[x.viewport,S,c,u,F]),d.useEffect(()=>{o&&!x.isClosePausedRef.current&&F(S)},[o,S,x.isClosePausedRef,F]),d.useEffect(()=>(R(),()=>M()),[R,M]);const A=d.useMemo(()=>y?k0(y):null,[y]);return x.viewport?r.jsxs(r.Fragment,{children:[A&&r.jsx(KE,{__scopeToast:n,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:A}),r.jsx(HE,{scope:n,onClose:k,children:Zr.createPortal(r.jsx(_p.ItemSlot,{scope:n,children:r.jsx(CE,{asChild:!0,onEscapeKeyDown:z(l,()=>{x.isFocusedToastEscapeKeyDownRef.current||k(),x.isFocusedToastEscapeKeyDownRef.current=!1}),children:r.jsx(oe.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":x.swipeDirection,...b,ref:m,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:z(e.onKeyDown,D=>{D.key==="Escape"&&(l==null||l(D.nativeEvent),D.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,k()))}),onPointerDown:z(e.onPointerDown,D=>{D.button===0&&(w.current={x:D.clientX,y:D.clientY})}),onPointerMove:z(e.onPointerMove,D=>{if(!w.current)return;const Z=D.clientX-w.current.x,W=D.clientY-w.current.y,P=!!j.current,T=["left","right"].includes(x.swipeDirection),L=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,B=T?L(0,Z):0,ee=T?0:L(0,W),de=D.pointerType==="touch"?10:2,ze={x:B,y:ee},ke={originalEvent:D,delta:ze};P?(j.current=ze,Al($E,p,ke,{discrete:!1})):ax(ze,x.swipeDirection,de)?(j.current=ze,Al(UE,f,ke,{discrete:!1}),D.target.setPointerCapture(D.pointerId)):(Math.abs(Z)>de||Math.abs(W)>de)&&(w.current=null)}),onPointerUp:z(e.onPointerUp,D=>{const Z=j.current,W=D.target;if(W.hasPointerCapture(D.pointerId)&&W.releasePointerCapture(D.pointerId),j.current=null,w.current=null,Z){const P=D.currentTarget,T={originalEvent:D,delta:Z};ax(Z,x.swipeDirection,x.swipeThreshold)?Al(BE,v,T,{discrete:!0}):Al(zE,h,T,{discrete:!0}),P.addEventListener("click",L=>L.preventDefault(),{once:!0})}})})})}),x.viewport)})]}):null}),KE=e=>{const{__scopeToast:t,children:n,...s}=e,i=mu(gu,t),[o,a]=d.useState(!1),[l,c]=d.useState(!1);return QE(()=>a(!0)),d.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),l?null:r.jsx(za,{asChild:!0,children:r.jsx(Ba,{...s,children:o&&r.jsxs(r.Fragment,{children:[i.label," ",n]})})})},GE="ToastTitle",b0=d.forwardRef((e,t)=>{const{__scopeToast:n,...s}=e;return r.jsx(oe.div,{...s,ref:t})});b0.displayName=GE;var qE="ToastDescription",j0=d.forwardRef((e,t)=>{const{__scopeToast:n,...s}=e;return r.jsx(oe.div,{...s,ref:t})});j0.displayName=qE;var S0="ToastAction",_0=d.forwardRef((e,t)=>{const{altText:n,...s}=e;return n.trim()?r.jsx(C0,{altText:n,asChild:!0,children:r.jsx(Np,{...s,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${S0}\`. Expected non-empty \`string\`.`),null)});_0.displayName=S0;var N0="ToastClose",Np=d.forwardRef((e,t)=>{const{__scopeToast:n,...s}=e,i=WE(N0,n);return r.jsx(C0,{asChild:!0,children:r.jsx(oe.button,{type:"button",...s,ref:t,onClick:z(e.onClick,i.onClose)})})});Np.displayName=N0;var C0=d.forwardRef((e,t)=>{const{__scopeToast:n,altText:s,...i}=e;return r.jsx(oe.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...i,ref:t})});function k0(e){const t=[];return Array.from(e.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&t.push(s.textContent),JE(s)){const i=s.ariaHidden||s.hidden||s.style.display==="none",o=s.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const a=s.dataset.radixToastAnnounceAlt;a&&t.push(a)}else t.push(...k0(s))}}),t}function Al(e,t,n,{discrete:s}){const i=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),s?jp(i,o):i.dispatchEvent(o)}var ax=(e,t,n=0)=>{const s=Math.abs(e.x),i=Math.abs(e.y),o=s>i;return t==="left"||t==="right"?o&&s>n:!o&&i>n};function QE(e=()=>{}){const t=at(e);lt(()=>{let n=0,s=0;return n=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(s)}},[t])}function JE(e){return e.nodeType===e.ELEMENT_NODE}function YE(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const i=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||i?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function yd(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var XE=g0,E0=v0,T0=w0,A0=b0,I0=j0,P0=_0,R0=Np;function M0(e){var t,n,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=M0(e[t]))&&(s&&(s+=" "),s+=n)}else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}function D0(){for(var e,t,n=0,s="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=M0(e))&&(s&&(s+=" "),s+=t);return s}const lx=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,cx=D0,Ha=(e,t)=>n=>{var s;if((t==null?void 0:t.variants)==null)return cx(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,a=Object.keys(i).map(u=>{const f=n==null?void 0:n[u],p=o==null?void 0:o[u];if(f===null)return null;const h=lx(f)||lx(p);return i[u][h]}),l=n&&Object.entries(n).reduce((u,f)=>{let[p,h]=f;return h===void 0||(u[p]=h),u},{}),c=t==null||(s=t.compoundVariants)===null||s===void 0?void 0:s.reduce((u,f)=>{let{class:p,className:h,...v}=f;return Object.entries(v).every(b=>{let[x,y]=b;return Array.isArray(y)?y.includes({...o,...l}[x]):{...o,...l}[x]===y})?[...u,p,h]:u},[]);return cx(e,a,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O0=(...e)=>e.filter((t,n,s)=>!!t&&s.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var eT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=d.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:i="",children:o,iconNode:a,...l},c)=>d.createElement("svg",{ref:c,...eT,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:O0("lucide",i),...l},[...a.map(([u,f])=>d.createElement(u,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(e,t)=>{const n=d.forwardRef(({className:s,...i},o)=>d.createElement(tT,{ref:o,iconNode:t,className:O0(`lucide-${ZE(e)}`,s),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=J("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=J("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=J("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=J("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=J("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=J("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=J("Book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=J("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=J("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=J("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=J("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=J("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=J("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=J("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=J("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=J("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=J("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=J("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=J("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=J("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=J("Crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hT=J("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=J("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pT=J("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=J("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=J("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=J("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=J("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=J("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=J("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=J("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=J("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=J("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=J("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xT=J("LockOpen",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=J("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=J("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=J("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=J("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=J("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=J("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=J("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=J("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=J("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=J("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=J("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=J("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=J("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=J("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=J("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=J("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=J("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=J("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=J("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=J("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=J("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=J("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=J("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=J("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ap="-",_T=e=>{const t=CT(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:a=>{const l=a.split(Ap);return l[0]===""&&l.length!==1&&l.shift(),W0(l,t)||NT(a)},getConflictingClassGroupIds:(a,l)=>{const c=n[a]||[];return l&&s[a]?[...c,...s[a]]:c}}},W0=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const n=e[0],s=t.nextPart.get(n),i=s?W0(e.slice(1),s):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(Ap);return(a=t.validators.find(({validator:l})=>l(o)))==null?void 0:a.classGroupId},fx=/^\[(.+)\]$/,NT=e=>{if(fx.test(e)){const t=fx.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},CT=e=>{const{theme:t,prefix:n}=e,s={nextPart:new Map,validators:[]};return ET(Object.entries(e.classGroups),n).forEach(([o,a])=>{Xh(a,s,o,t)}),s},Xh=(e,t,n,s)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:px(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(kT(i)){Xh(i(s),t,n,s);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,a])=>{Xh(a,px(t,o),n,s)})})},px=(e,t)=>{let n=e;return t.split(Ap).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},kT=e=>e.isThemeGetter,ET=(e,t)=>t?e.map(([n,s])=>{const i=s.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([a,l])=>[t+a,l])):o);return[n,i]}):e,TT=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,s=new Map;const i=(o,a)=>{n.set(o,a),t++,t>e&&(t=0,s=n,n=new Map)};return{get(o){let a=n.get(o);if(a!==void 0)return a;if((a=s.get(o))!==void 0)return i(o,a),a},set(o,a){n.has(o)?n.set(o,a):i(o,a)}}},V0="!",AT=e=>{const{separator:t,experimentalParseClassName:n}=e,s=t.length===1,i=t[0],o=t.length,a=l=>{const c=[];let u=0,f=0,p;for(let y=0;y<l.length;y++){let g=l[y];if(u===0){if(g===i&&(s||l.slice(y,y+o)===t)){c.push(l.slice(f,y)),f=y+o;continue}if(g==="/"){p=y;continue}}g==="["?u++:g==="]"&&u--}const h=c.length===0?l:l.substring(f),v=h.startsWith(V0),b=v?h.substring(1):h,x=p&&p>f?p-f:void 0;return{modifiers:c,hasImportantModifier:v,baseClassName:b,maybePostfixModifierPosition:x}};return n?l=>n({className:l,parseClassName:a}):a},IT=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(s=>{s[0]==="["?(t.push(...n.sort(),s),n=[]):n.push(s)}),t.push(...n.sort()),t},PT=e=>({cache:TT(e.cacheSize),parseClassName:AT(e),..._T(e)}),RT=/\s+/,MT=(e,t)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:i}=t,o=[],a=e.trim().split(RT);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{modifiers:f,hasImportantModifier:p,baseClassName:h,maybePostfixModifierPosition:v}=n(u);let b=!!v,x=s(b?h.substring(0,v):h);if(!x){if(!b){l=u+(l.length>0?" "+l:l);continue}if(x=s(h),!x){l=u+(l.length>0?" "+l:l);continue}b=!1}const y=IT(f).join(":"),g=p?y+V0:y,m=g+x;if(o.includes(m))continue;o.push(m);const w=i(x,b);for(let j=0;j<w.length;++j){const S=w[j];o.push(g+S)}l=u+(l.length>0?" "+l:l)}return l};function DT(){let e=0,t,n,s="";for(;e<arguments.length;)(t=arguments[e++])&&(n=K0(t))&&(s&&(s+=" "),s+=n);return s}const K0=e=>{if(typeof e=="string")return e;let t,n="";for(let s=0;s<e.length;s++)e[s]&&(t=K0(e[s]))&&(n&&(n+=" "),n+=t);return n};function OT(e,...t){let n,s,i,o=a;function a(c){const u=t.reduce((f,p)=>p(f),e());return n=PT(u),s=n.cache.get,i=n.cache.set,o=l,l(c)}function l(c){const u=s(c);if(u)return u;const f=MT(c,n);return i(c,f),f}return function(){return o(DT.apply(null,arguments))}}const Ee=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},G0=/^\[(?:([a-z-]+):)?(.+)\]$/i,LT=/^\d+\/\d+$/,FT=new Set(["px","full","screen"]),UT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$T=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,zT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,BT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,HT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$n=e=>Ei(e)||FT.has(e)||LT.test(e),ms=e=>mo(e,"length",YT),Ei=e=>!!e&&!Number.isNaN(Number(e)),wd=e=>mo(e,"number",Ei),Ro=e=>!!e&&Number.isInteger(Number(e)),WT=e=>e.endsWith("%")&&Ei(e.slice(0,-1)),le=e=>G0.test(e),gs=e=>UT.test(e),VT=new Set(["length","size","percentage"]),KT=e=>mo(e,VT,q0),GT=e=>mo(e,"position",q0),qT=new Set(["image","url"]),QT=e=>mo(e,qT,ZT),JT=e=>mo(e,"",XT),Mo=()=>!0,mo=(e,t,n)=>{const s=G0.exec(e);return s?s[1]?typeof t=="string"?s[1]===t:t.has(s[1]):n(s[2]):!1},YT=e=>$T.test(e)&&!zT.test(e),q0=()=>!1,XT=e=>BT.test(e),ZT=e=>HT.test(e),eA=()=>{const e=Ee("colors"),t=Ee("spacing"),n=Ee("blur"),s=Ee("brightness"),i=Ee("borderColor"),o=Ee("borderRadius"),a=Ee("borderSpacing"),l=Ee("borderWidth"),c=Ee("contrast"),u=Ee("grayscale"),f=Ee("hueRotate"),p=Ee("invert"),h=Ee("gap"),v=Ee("gradientColorStops"),b=Ee("gradientColorStopPositions"),x=Ee("inset"),y=Ee("margin"),g=Ee("opacity"),m=Ee("padding"),w=Ee("saturate"),j=Ee("scale"),S=Ee("sepia"),N=Ee("skew"),C=Ee("space"),I=Ee("translate"),R=()=>["auto","contain","none"],M=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto",le,t],F=()=>[le,t],A=()=>["",$n,ms],D=()=>["auto",Ei,le],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],W=()=>["solid","dashed","dotted","double","none"],P=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],L=()=>["","0",le],B=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ee=()=>[Ei,le];return{cacheSize:500,separator:":",theme:{colors:[Mo],spacing:[$n,ms],blur:["none","",gs,le],brightness:ee(),borderColor:[e],borderRadius:["none","","full",gs,le],borderSpacing:F(),borderWidth:A(),contrast:ee(),grayscale:L(),hueRotate:ee(),invert:L(),gap:F(),gradientColorStops:[e],gradientColorStopPositions:[WT,ms],inset:k(),margin:k(),opacity:ee(),padding:F(),saturate:ee(),scale:ee(),sepia:L(),skew:ee(),space:F(),translate:F()},classGroups:{aspect:[{aspect:["auto","square","video",le]}],container:["container"],columns:[{columns:[gs]}],"break-after":[{"break-after":B()}],"break-before":[{"break-before":B()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),le]}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:R()}],"overscroll-x":[{"overscroll-x":R()}],"overscroll-y":[{"overscroll-y":R()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ro,le]}],basis:[{basis:k()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",le]}],grow:[{grow:L()}],shrink:[{shrink:L()}],order:[{order:["first","last","none",Ro,le]}],"grid-cols":[{"grid-cols":[Mo]}],"col-start-end":[{col:["auto",{span:["full",Ro,le]},le]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[Mo]}],"row-start-end":[{row:["auto",{span:[Ro,le]},le]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",le]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",le]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",le,t]}],"min-w":[{"min-w":[le,t,"min","max","fit"]}],"max-w":[{"max-w":[le,t,"none","full","min","max","fit","prose",{screen:[gs]},gs]}],h:[{h:[le,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[le,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[le,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[le,t,"auto","min","max","fit"]}],"font-size":[{text:["base",gs,ms]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",wd]}],"font-family":[{font:[Mo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",le]}],"line-clamp":[{"line-clamp":["none",Ei,wd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",$n,le]}],"list-image":[{"list-image":["none",le]}],"list-style-type":[{list:["none","disc","decimal",le]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...W(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",$n,ms]}],"underline-offset":[{"underline-offset":["auto",$n,le]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:F()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",le]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",le]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),GT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",KT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},QT]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...W(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:W()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...W()]}],"outline-offset":[{"outline-offset":[$n,le]}],"outline-w":[{outline:[$n,ms]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:A()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[$n,ms]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",gs,JT]}],"shadow-color":[{shadow:[Mo]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...P(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":P()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[s]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",gs,le]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[w]}],sepia:[{sepia:[S]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[s]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[S]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",le]}],duration:[{duration:ee()}],ease:[{ease:["linear","in","out","in-out",le]}],delay:[{delay:ee()}],animate:[{animate:["none","spin","ping","pulse","bounce",le]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[j]}],"scale-x":[{"scale-x":[j]}],"scale-y":[{"scale-y":[j]}],rotate:[{rotate:[Ro,le]}],"translate-x":[{"translate-x":[I]}],"translate-y":[{"translate-y":[I]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",le]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",le]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":F()}],"scroll-mx":[{"scroll-mx":F()}],"scroll-my":[{"scroll-my":F()}],"scroll-ms":[{"scroll-ms":F()}],"scroll-me":[{"scroll-me":F()}],"scroll-mt":[{"scroll-mt":F()}],"scroll-mr":[{"scroll-mr":F()}],"scroll-mb":[{"scroll-mb":F()}],"scroll-ml":[{"scroll-ml":F()}],"scroll-p":[{"scroll-p":F()}],"scroll-px":[{"scroll-px":F()}],"scroll-py":[{"scroll-py":F()}],"scroll-ps":[{"scroll-ps":F()}],"scroll-pe":[{"scroll-pe":F()}],"scroll-pt":[{"scroll-pt":F()}],"scroll-pr":[{"scroll-pr":F()}],"scroll-pb":[{"scroll-pb":F()}],"scroll-pl":[{"scroll-pl":F()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",le]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[$n,ms,wd]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},tA=OT(eA);function Q(...e){return tA(D0(e))}const nA=XE,Q0=d.forwardRef(({className:e,...t},n)=>r.jsx(E0,{ref:n,className:Q("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));Q0.displayName=E0.displayName;const sA=Ha("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),J0=d.forwardRef(({className:e,variant:t,...n},s)=>r.jsx(T0,{ref:s,className:Q(sA({variant:t}),e),...n}));J0.displayName=T0.displayName;const rA=d.forwardRef(({className:e,...t},n)=>r.jsx(P0,{ref:n,className:Q("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));rA.displayName=P0.displayName;const Y0=d.forwardRef(({className:e,...t},n)=>r.jsx(R0,{ref:n,className:Q("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:r.jsx(yi,{className:"h-4 w-4"})}));Y0.displayName=R0.displayName;const X0=d.forwardRef(({className:e,...t},n)=>r.jsx(A0,{ref:n,className:Q("text-sm font-semibold",e),...t}));X0.displayName=A0.displayName;const Z0=d.forwardRef(({className:e,...t},n)=>r.jsx(I0,{ref:n,className:Q("text-sm opacity-90",e),...t}));Z0.displayName=I0.displayName;function iA(){const{toasts:e}=vn();return r.jsxs(nA,{children:[e.map(function({id:t,title:n,description:s,action:i,...o}){return r.jsxs(J0,{...o,children:[r.jsxs("div",{className:"grid gap-1",children:[n&&r.jsx(X0,{children:n}),s&&r.jsx(Z0,{children:s})]}),i,r.jsx(Y0,{})]},t)}),r.jsx(Q0,{})]})}var oA=Mv[" useId ".trim().toString()]||(()=>{}),aA=0;function Mn(e){const[t,n]=d.useState(oA());return lt(()=>{e||n(s=>s??String(aA++))},[e]),e||(t?`radix-${t}`:"")}const lA=["top","right","bottom","left"],nr=Math.min,Ot=Math.max,Dc=Math.round,Pl=Math.floor,Dn=e=>({x:e,y:e}),cA={left:"right",right:"left",bottom:"top",top:"bottom"},uA={start:"end",end:"start"};function Zh(e,t,n){return Ot(e,nr(t,n))}function rs(e,t){return typeof e=="function"?e(t):e}function is(e){return e.split("-")[0]}function go(e){return e.split("-")[1]}function Ip(e){return e==="x"?"y":"x"}function Pp(e){return e==="y"?"height":"width"}function sr(e){return["top","bottom"].includes(is(e))?"y":"x"}function Rp(e){return Ip(sr(e))}function dA(e,t,n){n===void 0&&(n=!1);const s=go(e),i=Rp(e),o=Pp(i);let a=i==="x"?s===(n?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=Oc(a)),[a,Oc(a)]}function hA(e){const t=Oc(e);return[ef(e),t,ef(t)]}function ef(e){return e.replace(/start|end/g,t=>uA[t])}function fA(e,t,n){const s=["left","right"],i=["right","left"],o=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:s:t?s:i;case"left":case"right":return t?o:a;default:return[]}}function pA(e,t,n,s){const i=go(e);let o=fA(is(e),n==="start",s);return i&&(o=o.map(a=>a+"-"+i),t&&(o=o.concat(o.map(ef)))),o}function Oc(e){return e.replace(/left|right|bottom|top/g,t=>cA[t])}function mA(e){return{top:0,right:0,bottom:0,left:0,...e}}function eb(e){return typeof e!="number"?mA(e):{top:e,right:e,bottom:e,left:e}}function Lc(e){const{x:t,y:n,width:s,height:i}=e;return{width:s,height:i,top:n,left:t,right:t+s,bottom:n+i,x:t,y:n}}function mx(e,t,n){let{reference:s,floating:i}=e;const o=sr(t),a=Rp(t),l=Pp(a),c=is(t),u=o==="y",f=s.x+s.width/2-i.width/2,p=s.y+s.height/2-i.height/2,h=s[l]/2-i[l]/2;let v;switch(c){case"top":v={x:f,y:s.y-i.height};break;case"bottom":v={x:f,y:s.y+s.height};break;case"right":v={x:s.x+s.width,y:p};break;case"left":v={x:s.x-i.width,y:p};break;default:v={x:s.x,y:s.y}}switch(go(t)){case"start":v[a]-=h*(n&&u?-1:1);break;case"end":v[a]+=h*(n&&u?-1:1);break}return v}const gA=async(e,t,n)=>{const{placement:s="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:f,y:p}=mx(u,s,c),h=s,v={},b=0;for(let x=0;x<l.length;x++){const{name:y,fn:g}=l[x],{x:m,y:w,data:j,reset:S}=await g({x:f,y:p,initialPlacement:s,placement:h,strategy:i,middlewareData:v,rects:u,platform:a,elements:{reference:e,floating:t}});f=m??f,p=w??p,v={...v,[y]:{...v[y],...j}},S&&b<=50&&(b++,typeof S=="object"&&(S.placement&&(h=S.placement),S.rects&&(u=S.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):S.rects),{x:f,y:p}=mx(u,h,c)),x=-1)}return{x:f,y:p,placement:h,strategy:i,middlewareData:v}};async function ba(e,t){var n;t===void 0&&(t={});const{x:s,y:i,platform:o,rects:a,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:h=!1,padding:v=0}=rs(t,e),b=eb(v),y=l[h?p==="floating"?"reference":"floating":p],g=Lc(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(y)))==null||n?y:y.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:u,rootBoundary:f,strategy:c})),m=p==="floating"?{x:s,y:i,width:a.floating.width,height:a.floating.height}:a.reference,w=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),j=await(o.isElement==null?void 0:o.isElement(w))?await(o.getScale==null?void 0:o.getScale(w))||{x:1,y:1}:{x:1,y:1},S=Lc(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:m,offsetParent:w,strategy:c}):m);return{top:(g.top-S.top+b.top)/j.y,bottom:(S.bottom-g.bottom+b.bottom)/j.y,left:(g.left-S.left+b.left)/j.x,right:(S.right-g.right+b.right)/j.x}}const xA=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:s,placement:i,rects:o,platform:a,elements:l,middlewareData:c}=t,{element:u,padding:f=0}=rs(e,t)||{};if(u==null)return{};const p=eb(f),h={x:n,y:s},v=Rp(i),b=Pp(v),x=await a.getDimensions(u),y=v==="y",g=y?"top":"left",m=y?"bottom":"right",w=y?"clientHeight":"clientWidth",j=o.reference[b]+o.reference[v]-h[v]-o.floating[b],S=h[v]-o.reference[v],N=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let C=N?N[w]:0;(!C||!await(a.isElement==null?void 0:a.isElement(N)))&&(C=l.floating[w]||o.floating[b]);const I=j/2-S/2,R=C/2-x[b]/2-1,M=nr(p[g],R),k=nr(p[m],R),F=M,A=C-x[b]-k,D=C/2-x[b]/2+I,Z=Zh(F,D,A),W=!c.arrow&&go(i)!=null&&D!==Z&&o.reference[b]/2-(D<F?M:k)-x[b]/2<0,P=W?D<F?D-F:D-A:0;return{[v]:h[v]+P,data:{[v]:Z,centerOffset:D-Z-P,...W&&{alignmentOffset:P}},reset:W}}}),vA=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,s;const{placement:i,middlewareData:o,rects:a,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:f=!0,crossAxis:p=!0,fallbackPlacements:h,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:x=!0,...y}=rs(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const g=is(i),m=sr(l),w=is(l)===l,j=await(c.isRTL==null?void 0:c.isRTL(u.floating)),S=h||(w||!x?[Oc(l)]:hA(l)),N=b!=="none";!h&&N&&S.push(...pA(l,x,b,j));const C=[l,...S],I=await ba(t,y),R=[];let M=((s=o.flip)==null?void 0:s.overflows)||[];if(f&&R.push(I[g]),p){const D=dA(i,a,j);R.push(I[D[0]],I[D[1]])}if(M=[...M,{placement:i,overflows:R}],!R.every(D=>D<=0)){var k,F;const D=(((k=o.flip)==null?void 0:k.index)||0)+1,Z=C[D];if(Z)return{data:{index:D,overflows:M},reset:{placement:Z}};let W=(F=M.filter(P=>P.overflows[0]<=0).sort((P,T)=>P.overflows[1]-T.overflows[1])[0])==null?void 0:F.placement;if(!W)switch(v){case"bestFit":{var A;const P=(A=M.filter(T=>{if(N){const L=sr(T.placement);return L===m||L==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(L=>L>0).reduce((L,B)=>L+B,0)]).sort((T,L)=>T[1]-L[1])[0])==null?void 0:A[0];P&&(W=P);break}case"initialPlacement":W=l;break}if(i!==W)return{reset:{placement:W}}}return{}}}};function gx(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function xx(e){return lA.some(t=>e[t]>=0)}const yA=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:s="referenceHidden",...i}=rs(e,t);switch(s){case"referenceHidden":{const o=await ba(t,{...i,elementContext:"reference"}),a=gx(o,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:xx(a)}}}case"escaped":{const o=await ba(t,{...i,altBoundary:!0}),a=gx(o,n.floating);return{data:{escapedOffsets:a,escaped:xx(a)}}}default:return{}}}}};async function wA(e,t){const{placement:n,platform:s,elements:i}=e,o=await(s.isRTL==null?void 0:s.isRTL(i.floating)),a=is(n),l=go(n),c=sr(n)==="y",u=["left","top"].includes(a)?-1:1,f=o&&c?-1:1,p=rs(t,e);let{mainAxis:h,crossAxis:v,alignmentAxis:b}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof b=="number"&&(v=l==="end"?b*-1:b),c?{x:v*f,y:h*u}:{x:h*u,y:v*f}}const bA=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,s;const{x:i,y:o,placement:a,middlewareData:l}=t,c=await wA(t,e);return a===((n=l.offset)==null?void 0:n.placement)&&(s=l.arrow)!=null&&s.alignmentOffset?{}:{x:i+c.x,y:o+c.y,data:{...c,placement:a}}}}},jA=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:s,placement:i}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:l={fn:y=>{let{x:g,y:m}=y;return{x:g,y:m}}},...c}=rs(e,t),u={x:n,y:s},f=await ba(t,c),p=sr(is(i)),h=Ip(p);let v=u[h],b=u[p];if(o){const y=h==="y"?"top":"left",g=h==="y"?"bottom":"right",m=v+f[y],w=v-f[g];v=Zh(m,v,w)}if(a){const y=p==="y"?"top":"left",g=p==="y"?"bottom":"right",m=b+f[y],w=b-f[g];b=Zh(m,b,w)}const x=l.fn({...t,[h]:v,[p]:b});return{...x,data:{x:x.x-n,y:x.y-s,enabled:{[h]:o,[p]:a}}}}}},SA=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:s,placement:i,rects:o,middlewareData:a}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=rs(e,t),f={x:n,y:s},p=sr(i),h=Ip(p);let v=f[h],b=f[p];const x=rs(l,t),y=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(c){const w=h==="y"?"height":"width",j=o.reference[h]-o.floating[w]+y.mainAxis,S=o.reference[h]+o.reference[w]-y.mainAxis;v<j?v=j:v>S&&(v=S)}if(u){var g,m;const w=h==="y"?"width":"height",j=["top","left"].includes(is(i)),S=o.reference[p]-o.floating[w]+(j&&((g=a.offset)==null?void 0:g[p])||0)+(j?0:y.crossAxis),N=o.reference[p]+o.reference[w]+(j?0:((m=a.offset)==null?void 0:m[p])||0)-(j?y.crossAxis:0);b<S?b=S:b>N&&(b=N)}return{[h]:v,[p]:b}}}},_A=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,s;const{placement:i,rects:o,platform:a,elements:l}=t,{apply:c=()=>{},...u}=rs(e,t),f=await ba(t,u),p=is(i),h=go(i),v=sr(i)==="y",{width:b,height:x}=o.floating;let y,g;p==="top"||p==="bottom"?(y=p,g=h===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(g=p,y=h==="end"?"top":"bottom");const m=x-f.top-f.bottom,w=b-f.left-f.right,j=nr(x-f[y],m),S=nr(b-f[g],w),N=!t.middlewareData.shift;let C=j,I=S;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(I=w),(s=t.middlewareData.shift)!=null&&s.enabled.y&&(C=m),N&&!h){const M=Ot(f.left,0),k=Ot(f.right,0),F=Ot(f.top,0),A=Ot(f.bottom,0);v?I=b-2*(M!==0||k!==0?M+k:Ot(f.left,f.right)):C=x-2*(F!==0||A!==0?F+A:Ot(f.top,f.bottom))}await c({...t,availableWidth:I,availableHeight:C});const R=await a.getDimensions(l.floating);return b!==R.width||x!==R.height?{reset:{rects:!0}}:{}}}};function yu(){return typeof window<"u"}function xo(e){return tb(e)?(e.nodeName||"").toLowerCase():"#document"}function $t(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Un(e){var t;return(t=(tb(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function tb(e){return yu()?e instanceof Node||e instanceof $t(e).Node:!1}function gn(e){return yu()?e instanceof Element||e instanceof $t(e).Element:!1}function Ln(e){return yu()?e instanceof HTMLElement||e instanceof $t(e).HTMLElement:!1}function vx(e){return!yu()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof $t(e).ShadowRoot}function Va(e){const{overflow:t,overflowX:n,overflowY:s,display:i}=xn(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+n)&&!["inline","contents"].includes(i)}function NA(e){return["table","td","th"].includes(xo(e))}function wu(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Mp(e){const t=Dp(),n=gn(e)?xn(e):e;return["transform","translate","scale","rotate","perspective"].some(s=>n[s]?n[s]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(s=>(n.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(n.contain||"").includes(s))}function CA(e){let t=rr(e);for(;Ln(t)&&!ro(t);){if(Mp(t))return t;if(wu(t))return null;t=rr(t)}return null}function Dp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ro(e){return["html","body","#document"].includes(xo(e))}function xn(e){return $t(e).getComputedStyle(e)}function bu(e){return gn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function rr(e){if(xo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||vx(e)&&e.host||Un(e);return vx(t)?t.host:t}function nb(e){const t=rr(e);return ro(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ln(t)&&Va(t)?t:nb(t)}function ja(e,t,n){var s;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=nb(e),o=i===((s=e.ownerDocument)==null?void 0:s.body),a=$t(i);if(o){const l=tf(a);return t.concat(a,a.visualViewport||[],Va(i)?i:[],l&&n?ja(l):[])}return t.concat(i,ja(i,[],n))}function tf(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function sb(e){const t=xn(e);let n=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const i=Ln(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:s,l=Dc(n)!==o||Dc(s)!==a;return l&&(n=o,s=a),{width:n,height:s,$:l}}function Op(e){return gn(e)?e:e.contextElement}function Ti(e){const t=Op(e);if(!Ln(t))return Dn(1);const n=t.getBoundingClientRect(),{width:s,height:i,$:o}=sb(t);let a=(o?Dc(n.width):n.width)/s,l=(o?Dc(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const kA=Dn(0);function rb(e){const t=$t(e);return!Dp()||!t.visualViewport?kA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function EA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==$t(e)?!1:t}function Vr(e,t,n,s){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Op(e);let a=Dn(1);t&&(s?gn(s)&&(a=Ti(s)):a=Ti(e));const l=EA(o,n,s)?rb(o):Dn(0);let c=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,f=i.width/a.x,p=i.height/a.y;if(o){const h=$t(o),v=s&&gn(s)?$t(s):s;let b=h,x=tf(b);for(;x&&s&&v!==b;){const y=Ti(x),g=x.getBoundingClientRect(),m=xn(x),w=g.left+(x.clientLeft+parseFloat(m.paddingLeft))*y.x,j=g.top+(x.clientTop+parseFloat(m.paddingTop))*y.y;c*=y.x,u*=y.y,f*=y.x,p*=y.y,c+=w,u+=j,b=$t(x),x=tf(b)}}return Lc({width:f,height:p,x:c,y:u})}function Lp(e,t){const n=bu(e).scrollLeft;return t?t.left+n:Vr(Un(e)).left+n}function ib(e,t,n){n===void 0&&(n=!1);const s=e.getBoundingClientRect(),i=s.left+t.scrollLeft-(n?0:Lp(e,s)),o=s.top+t.scrollTop;return{x:i,y:o}}function TA(e){let{elements:t,rect:n,offsetParent:s,strategy:i}=e;const o=i==="fixed",a=Un(s),l=t?wu(t.floating):!1;if(s===a||l&&o)return n;let c={scrollLeft:0,scrollTop:0},u=Dn(1);const f=Dn(0),p=Ln(s);if((p||!p&&!o)&&((xo(s)!=="body"||Va(a))&&(c=bu(s)),Ln(s))){const v=Vr(s);u=Ti(s),f.x=v.x+s.clientLeft,f.y=v.y+s.clientTop}const h=a&&!p&&!o?ib(a,c,!0):Dn(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+f.x+h.x,y:n.y*u.y-c.scrollTop*u.y+f.y+h.y}}function AA(e){return Array.from(e.getClientRects())}function IA(e){const t=Un(e),n=bu(e),s=e.ownerDocument.body,i=Ot(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=Ot(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let a=-n.scrollLeft+Lp(e);const l=-n.scrollTop;return xn(s).direction==="rtl"&&(a+=Ot(t.clientWidth,s.clientWidth)-i),{width:i,height:o,x:a,y:l}}function PA(e,t){const n=$t(e),s=Un(e),i=n.visualViewport;let o=s.clientWidth,a=s.clientHeight,l=0,c=0;if(i){o=i.width,a=i.height;const u=Dp();(!u||u&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:o,height:a,x:l,y:c}}function RA(e,t){const n=Vr(e,!0,t==="fixed"),s=n.top+e.clientTop,i=n.left+e.clientLeft,o=Ln(e)?Ti(e):Dn(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,c=i*o.x,u=s*o.y;return{width:a,height:l,x:c,y:u}}function yx(e,t,n){let s;if(t==="viewport")s=PA(e,n);else if(t==="document")s=IA(Un(e));else if(gn(t))s=RA(t,n);else{const i=rb(e);s={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Lc(s)}function ob(e,t){const n=rr(e);return n===t||!gn(n)||ro(n)?!1:xn(n).position==="fixed"||ob(n,t)}function MA(e,t){const n=t.get(e);if(n)return n;let s=ja(e,[],!1).filter(l=>gn(l)&&xo(l)!=="body"),i=null;const o=xn(e).position==="fixed";let a=o?rr(e):e;for(;gn(a)&&!ro(a);){const l=xn(a),c=Mp(a);!c&&l.position==="fixed"&&(i=null),(o?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Va(a)&&!c&&ob(e,a))?s=s.filter(f=>f!==a):i=l,a=rr(a)}return t.set(e,s),s}function DA(e){let{element:t,boundary:n,rootBoundary:s,strategy:i}=e;const a=[...n==="clippingAncestors"?wu(t)?[]:MA(t,this._c):[].concat(n),s],l=a[0],c=a.reduce((u,f)=>{const p=yx(t,f,i);return u.top=Ot(p.top,u.top),u.right=nr(p.right,u.right),u.bottom=nr(p.bottom,u.bottom),u.left=Ot(p.left,u.left),u},yx(t,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function OA(e){const{width:t,height:n}=sb(e);return{width:t,height:n}}function LA(e,t,n){const s=Ln(t),i=Un(t),o=n==="fixed",a=Vr(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const c=Dn(0);if(s||!s&&!o)if((xo(t)!=="body"||Va(i))&&(l=bu(t)),s){const h=Vr(t,!0,o,t);c.x=h.x+t.clientLeft,c.y=h.y+t.clientTop}else i&&(c.x=Lp(i));const u=i&&!s&&!o?ib(i,l):Dn(0),f=a.left+l.scrollLeft-c.x-u.x,p=a.top+l.scrollTop-c.y-u.y;return{x:f,y:p,width:a.width,height:a.height}}function bd(e){return xn(e).position==="static"}function wx(e,t){if(!Ln(e)||xn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Un(e)===n&&(n=n.ownerDocument.body),n}function ab(e,t){const n=$t(e);if(wu(e))return n;if(!Ln(e)){let i=rr(e);for(;i&&!ro(i);){if(gn(i)&&!bd(i))return i;i=rr(i)}return n}let s=wx(e,t);for(;s&&NA(s)&&bd(s);)s=wx(s,t);return s&&ro(s)&&bd(s)&&!Mp(s)?n:s||CA(e)||n}const FA=async function(e){const t=this.getOffsetParent||ab,n=this.getDimensions,s=await n(e.floating);return{reference:LA(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function UA(e){return xn(e).direction==="rtl"}const $A={convertOffsetParentRelativeRectToViewportRelativeRect:TA,getDocumentElement:Un,getClippingRect:DA,getOffsetParent:ab,getElementRects:FA,getClientRects:AA,getDimensions:OA,getScale:Ti,isElement:gn,isRTL:UA};function lb(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function zA(e,t){let n=null,s;const i=Un(e);function o(){var l;clearTimeout(s),(l=n)==null||l.disconnect(),n=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),o();const u=e.getBoundingClientRect(),{left:f,top:p,width:h,height:v}=u;if(l||t(),!h||!v)return;const b=Pl(p),x=Pl(i.clientWidth-(f+h)),y=Pl(i.clientHeight-(p+v)),g=Pl(f),w={rootMargin:-b+"px "+-x+"px "+-y+"px "+-g+"px",threshold:Ot(0,nr(1,c))||1};let j=!0;function S(N){const C=N[0].intersectionRatio;if(C!==c){if(!j)return a();C?a(!1,C):s=setTimeout(()=>{a(!1,1e-7)},1e3)}C===1&&!lb(u,e.getBoundingClientRect())&&a(),j=!1}try{n=new IntersectionObserver(S,{...w,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,w)}n.observe(e)}return a(!0),o}function BA(e,t,n,s){s===void 0&&(s={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=s,u=Op(e),f=i||o?[...u?ja(u):[],...ja(t)]:[];f.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),o&&g.addEventListener("resize",n)});const p=u&&l?zA(u,n):null;let h=-1,v=null;a&&(v=new ResizeObserver(g=>{let[m]=g;m&&m.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var w;(w=v)==null||w.observe(t)})),n()}),u&&!c&&v.observe(u),v.observe(t));let b,x=c?Vr(e):null;c&&y();function y(){const g=Vr(e);x&&!lb(x,g)&&n(),x=g,b=requestAnimationFrame(y)}return n(),()=>{var g;f.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),p==null||p(),(g=v)==null||g.disconnect(),v=null,c&&cancelAnimationFrame(b)}}const HA=bA,WA=jA,VA=vA,KA=_A,GA=yA,bx=xA,qA=SA,QA=(e,t,n)=>{const s=new Map,i={platform:$A,...n},o={...i.platform,_c:s};return gA(e,t,{...i,platform:o})};var ec=typeof document<"u"?d.useLayoutEffect:d.useEffect;function Fc(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,s,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(s=n;s--!==0;)if(!Fc(e[s],t[s]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(s=n;s--!==0;)if(!{}.hasOwnProperty.call(t,i[s]))return!1;for(s=n;s--!==0;){const o=i[s];if(!(o==="_owner"&&e.$$typeof)&&!Fc(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function cb(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function jx(e,t){const n=cb(e);return Math.round(t*n)/n}function jd(e){const t=d.useRef(e);return ec(()=>{t.current=e}),t}function JA(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:s=[],platform:i,elements:{reference:o,floating:a}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[f,p]=d.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,v]=d.useState(s);Fc(h,s)||v(s);const[b,x]=d.useState(null),[y,g]=d.useState(null),m=d.useCallback(T=>{T!==N.current&&(N.current=T,x(T))},[]),w=d.useCallback(T=>{T!==C.current&&(C.current=T,g(T))},[]),j=o||b,S=a||y,N=d.useRef(null),C=d.useRef(null),I=d.useRef(f),R=c!=null,M=jd(c),k=jd(i),F=jd(u),A=d.useCallback(()=>{if(!N.current||!C.current)return;const T={placement:t,strategy:n,middleware:h};k.current&&(T.platform=k.current),QA(N.current,C.current,T).then(L=>{const B={...L,isPositioned:F.current!==!1};D.current&&!Fc(I.current,B)&&(I.current=B,Zr.flushSync(()=>{p(B)}))})},[h,t,n,k,F]);ec(()=>{u===!1&&I.current.isPositioned&&(I.current.isPositioned=!1,p(T=>({...T,isPositioned:!1})))},[u]);const D=d.useRef(!1);ec(()=>(D.current=!0,()=>{D.current=!1}),[]),ec(()=>{if(j&&(N.current=j),S&&(C.current=S),j&&S){if(M.current)return M.current(j,S,A);A()}},[j,S,A,M,R]);const Z=d.useMemo(()=>({reference:N,floating:C,setReference:m,setFloating:w}),[m,w]),W=d.useMemo(()=>({reference:j,floating:S}),[j,S]),P=d.useMemo(()=>{const T={position:n,left:0,top:0};if(!W.floating)return T;const L=jx(W.floating,f.x),B=jx(W.floating,f.y);return l?{...T,transform:"translate("+L+"px, "+B+"px)",...cb(W.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:L,top:B}},[n,l,W.floating,f.x,f.y]);return d.useMemo(()=>({...f,update:A,refs:Z,elements:W,floatingStyles:P}),[f,A,Z,W,P])}const YA=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:s,padding:i}=typeof e=="function"?e(n):e;return s&&t(s)?s.current!=null?bx({element:s.current,padding:i}).fn(n):{}:s?bx({element:s,padding:i}).fn(n):{}}}},XA=(e,t)=>({...HA(e),options:[e,t]}),ZA=(e,t)=>({...WA(e),options:[e,t]}),eI=(e,t)=>({...qA(e),options:[e,t]}),tI=(e,t)=>({...VA(e),options:[e,t]}),nI=(e,t)=>({...KA(e),options:[e,t]}),sI=(e,t)=>({...GA(e),options:[e,t]}),rI=(e,t)=>({...YA(e),options:[e,t]});var iI="Arrow",ub=d.forwardRef((e,t)=>{const{children:n,width:s=10,height:i=5,...o}=e;return r.jsx(oe.svg,{...o,ref:t,width:s,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:r.jsx("polygon",{points:"0,0 30,0 15,10"})})});ub.displayName=iI;var oI=ub;function Fp(e){const[t,n]=d.useState(void 0);return lt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const s=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let a,l;if("borderBoxSize"in o){const c=o.borderBoxSize,u=Array.isArray(c)?c[0]:c;a=u.inlineSize,l=u.blockSize}else a=e.offsetWidth,l=e.offsetHeight;n({width:a,height:l})});return s.observe(e,{box:"border-box"}),()=>s.unobserve(e)}else n(void 0)},[e]),t}var Up="Popper",[db,vo]=Wt(Up),[aI,hb]=db(Up),fb=e=>{const{__scopePopper:t,children:n}=e,[s,i]=d.useState(null);return r.jsx(aI,{scope:t,anchor:s,onAnchorChange:i,children:n})};fb.displayName=Up;var pb="PopperAnchor",mb=d.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:s,...i}=e,o=hb(pb,n),a=d.useRef(null),l=pe(t,a);return d.useEffect(()=>{o.onAnchorChange((s==null?void 0:s.current)||a.current)}),s?null:r.jsx(oe.div,{...i,ref:l})});mb.displayName=pb;var $p="PopperContent",[lI,cI]=db($p),gb=d.forwardRef((e,t)=>{var X,xe,E,ce,we,be;const{__scopePopper:n,side:s="bottom",sideOffset:i=0,align:o="center",alignOffset:a=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:f=0,sticky:p="partial",hideWhenDetached:h=!1,updatePositionStrategy:v="optimized",onPlaced:b,...x}=e,y=hb($p,n),[g,m]=d.useState(null),w=pe(t,Mt=>m(Mt)),[j,S]=d.useState(null),N=Fp(j),C=(N==null?void 0:N.width)??0,I=(N==null?void 0:N.height)??0,R=s+(o!=="center"?"-"+o:""),M=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},k=Array.isArray(u)?u:[u],F=k.length>0,A={padding:M,boundary:k.filter(dI),altBoundary:F},{refs:D,floatingStyles:Z,placement:W,isPositioned:P,middlewareData:T}=JA({strategy:"fixed",placement:R,whileElementsMounted:(...Mt)=>BA(...Mt,{animationFrame:v==="always"}),elements:{reference:y.anchor},middleware:[XA({mainAxis:i+I,alignmentAxis:a}),c&&ZA({mainAxis:!0,crossAxis:!1,limiter:p==="partial"?eI():void 0,...A}),c&&tI({...A}),nI({...A,apply:({elements:Mt,rects:wn,availableWidth:jo,availableHeight:So})=>{const{width:_o,height:__}=wn.reference,cl=Mt.floating.style;cl.setProperty("--radix-popper-available-width",`${jo}px`),cl.setProperty("--radix-popper-available-height",`${So}px`),cl.setProperty("--radix-popper-anchor-width",`${_o}px`),cl.setProperty("--radix-popper-anchor-height",`${__}px`)}}),j&&rI({element:j,padding:l}),hI({arrowWidth:C,arrowHeight:I}),h&&sI({strategy:"referenceHidden",...A})]}),[L,B]=yb(W),ee=at(b);lt(()=>{P&&(ee==null||ee())},[P,ee]);const de=(X=T.arrow)==null?void 0:X.x,ze=(xe=T.arrow)==null?void 0:xe.y,ke=((E=T.arrow)==null?void 0:E.centerOffset)!==0,[ct,De]=d.useState();return lt(()=>{g&&De(window.getComputedStyle(g).zIndex)},[g]),r.jsx("div",{ref:D.setFloating,"data-radix-popper-content-wrapper":"",style:{...Z,transform:P?Z.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ct,"--radix-popper-transform-origin":[(ce=T.transformOrigin)==null?void 0:ce.x,(we=T.transformOrigin)==null?void 0:we.y].join(" "),...((be=T.hide)==null?void 0:be.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:r.jsx(lI,{scope:n,placedSide:L,onArrowChange:S,arrowX:de,arrowY:ze,shouldHideArrow:ke,children:r.jsx(oe.div,{"data-side":L,"data-align":B,...x,ref:w,style:{...x.style,animation:P?void 0:"none"}})})})});gb.displayName=$p;var xb="PopperArrow",uI={top:"bottom",right:"left",bottom:"top",left:"right"},vb=d.forwardRef(function(t,n){const{__scopePopper:s,...i}=t,o=cI(xb,s),a=uI[o.placedSide];return r.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:r.jsx(oI,{...i,ref:n,style:{...i.style,display:"block"}})})});vb.displayName=xb;function dI(e){return e!==null}var hI=e=>({name:"transformOrigin",options:e,fn(t){var y,g,m;const{placement:n,rects:s,middlewareData:i}=t,a=((y=i.arrow)==null?void 0:y.centerOffset)!==0,l=a?0:e.arrowWidth,c=a?0:e.arrowHeight,[u,f]=yb(n),p={start:"0%",center:"50%",end:"100%"}[f],h=(((g=i.arrow)==null?void 0:g.x)??0)+l/2,v=(((m=i.arrow)==null?void 0:m.y)??0)+c/2;let b="",x="";return u==="bottom"?(b=a?p:`${h}px`,x=`${-c}px`):u==="top"?(b=a?p:`${h}px`,x=`${s.floating.height+c}px`):u==="right"?(b=`${-c}px`,x=a?p:`${v}px`):u==="left"&&(b=`${s.floating.width+c}px`,x=a?p:`${v}px`),{data:{x:b,y:x}}}});function yb(e){const[t,n="center"]=e.split("-");return[t,n]}var wb=fb,zp=mb,Bp=gb,Hp=vb,[ju,kL]=Wt("Tooltip",[vo]),Wp=vo(),bb="TooltipProvider",fI=700,Sx="tooltip.open",[pI,jb]=ju(bb),Sb=e=>{const{__scopeTooltip:t,delayDuration:n=fI,skipDelayDuration:s=300,disableHoverableContent:i=!1,children:o}=e,a=d.useRef(!0),l=d.useRef(!1),c=d.useRef(0);return d.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),r.jsx(pI,{scope:t,isOpenDelayedRef:a,delayDuration:n,onOpen:d.useCallback(()=>{window.clearTimeout(c.current),a.current=!1},[]),onClose:d.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a.current=!0,s)},[s]),isPointerInTransitRef:l,onPointerInTransitChange:d.useCallback(u=>{l.current=u},[]),disableHoverableContent:i,children:o})};Sb.displayName=bb;var _b="Tooltip",[EL,Su]=ju(_b),nf="TooltipTrigger",mI=d.forwardRef((e,t)=>{const{__scopeTooltip:n,...s}=e,i=Su(nf,n),o=jb(nf,n),a=Wp(n),l=d.useRef(null),c=pe(t,l,i.onTriggerChange),u=d.useRef(!1),f=d.useRef(!1),p=d.useCallback(()=>u.current=!1,[]);return d.useEffect(()=>()=>document.removeEventListener("pointerup",p),[p]),r.jsx(zp,{asChild:!0,...a,children:r.jsx(oe.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...s,ref:c,onPointerMove:z(e.onPointerMove,h=>{h.pointerType!=="touch"&&!f.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),f.current=!0)}),onPointerLeave:z(e.onPointerLeave,()=>{i.onTriggerLeave(),f.current=!1}),onPointerDown:z(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",p,{once:!0})}),onFocus:z(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:z(e.onBlur,i.onClose),onClick:z(e.onClick,i.onClose)})})});mI.displayName=nf;var gI="TooltipPortal",[TL,xI]=ju(gI,{forceMount:void 0}),io="TooltipContent",Nb=d.forwardRef((e,t)=>{const n=xI(io,e.__scopeTooltip),{forceMount:s=n.forceMount,side:i="top",...o}=e,a=Su(io,e.__scopeTooltip);return r.jsx(tn,{present:s||a.open,children:a.disableHoverableContent?r.jsx(Cb,{side:i,...o,ref:t}):r.jsx(vI,{side:i,...o,ref:t})})}),vI=d.forwardRef((e,t)=>{const n=Su(io,e.__scopeTooltip),s=jb(io,e.__scopeTooltip),i=d.useRef(null),o=pe(t,i),[a,l]=d.useState(null),{trigger:c,onClose:u}=n,f=i.current,{onPointerInTransitChange:p}=s,h=d.useCallback(()=>{l(null),p(!1)},[p]),v=d.useCallback((b,x)=>{const y=b.currentTarget,g={x:b.clientX,y:b.clientY},m=SI(g,y.getBoundingClientRect()),w=_I(g,m),j=NI(x.getBoundingClientRect()),S=kI([...w,...j]);l(S),p(!0)},[p]);return d.useEffect(()=>()=>h(),[h]),d.useEffect(()=>{if(c&&f){const b=y=>v(y,f),x=y=>v(y,c);return c.addEventListener("pointerleave",b),f.addEventListener("pointerleave",x),()=>{c.removeEventListener("pointerleave",b),f.removeEventListener("pointerleave",x)}}},[c,f,v,h]),d.useEffect(()=>{if(a){const b=x=>{const y=x.target,g={x:x.clientX,y:x.clientY},m=(c==null?void 0:c.contains(y))||(f==null?void 0:f.contains(y)),w=!CI(g,a);m?h():w&&(h(),u())};return document.addEventListener("pointermove",b),()=>document.removeEventListener("pointermove",b)}},[c,f,a,u,h]),r.jsx(Cb,{...e,ref:o})}),[yI,wI]=ju(_b,{isInside:!1}),bI=d0("TooltipContent"),Cb=d.forwardRef((e,t)=>{const{__scopeTooltip:n,children:s,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:a,...l}=e,c=Su(io,n),u=Wp(n),{onClose:f}=c;return d.useEffect(()=>(document.addEventListener(Sx,f),()=>document.removeEventListener(Sx,f)),[f]),d.useEffect(()=>{if(c.trigger){const p=h=>{const v=h.target;v!=null&&v.contains(c.trigger)&&f()};return window.addEventListener("scroll",p,{capture:!0}),()=>window.removeEventListener("scroll",p,{capture:!0})}},[c.trigger,f]),r.jsx(po,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:a,onFocusOutside:p=>p.preventDefault(),onDismiss:f,children:r.jsxs(Bp,{"data-state":c.stateAttribute,...u,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[r.jsx(bI,{children:s}),r.jsx(yI,{scope:n,isInside:!0,children:r.jsx(ME,{id:c.contentId,role:"tooltip",children:i||s})})]})})});Nb.displayName=io;var kb="TooltipArrow",jI=d.forwardRef((e,t)=>{const{__scopeTooltip:n,...s}=e,i=Wp(n);return wI(kb,n).isInside?null:r.jsx(Hp,{...i,...s,ref:t})});jI.displayName=kb;function SI(e,t){const n=Math.abs(t.top-e.y),s=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,s,i,o)){case o:return"left";case i:return"right";case n:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function _I(e,t,n=5){const s=[];switch(t){case"top":s.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":s.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":s.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":s.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return s}function NI(e){const{top:t,right:n,bottom:s,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:s},{x:i,y:s}]}function CI(e,t){const{x:n,y:s}=e;let i=!1;for(let o=0,a=t.length-1;o<t.length;a=o++){const l=t[o].x,c=t[o].y,u=t[a].x,f=t[a].y;c>s!=f>s&&n<(u-l)*(s-c)/(f-c)+l&&(i=!i)}return i}function kI(e){const t=e.slice();return t.sort((n,s)=>n.x<s.x?-1:n.x>s.x?1:n.y<s.y?-1:n.y>s.y?1:0),EI(t)}function EI(e){if(e.length<=1)return e.slice();const t=[];for(let s=0;s<e.length;s++){const i=e[s];for(;t.length>=2;){const o=t[t.length-1],a=t[t.length-2];if((o.x-a.x)*(i.y-a.y)>=(o.y-a.y)*(i.x-a.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let s=e.length-1;s>=0;s--){const i=e[s];for(;n.length>=2;){const o=n[n.length-1],a=n[n.length-2];if((o.x-a.x)*(i.y-a.y)>=(o.y-a.y)*(i.x-a.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var TI=Sb,Eb=Nb;const AI=TI,II=d.forwardRef(({className:e,sideOffset:t=4,...n},s)=>r.jsx(Eb,{ref:s,sideOffset:t,className:Q("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",e),...n}));II.displayName=Eb.displayName;const Tb=d.createContext(void 0);function PI({children:e}){const[t,n]=d.useState(()=>localStorage.getItem("phantom-auth-theme")||"light");d.useEffect(()=>{const i=document.documentElement;t==="dark"?i.classList.add("dark"):i.classList.remove("dark"),localStorage.setItem("phantom-auth-theme",t)},[t]);const s=()=>{n(i=>i==="light"?"dark":"light")};return r.jsx(Tb.Provider,{value:{theme:t,toggleTheme:s},children:e})}function yo(){const e=d.useContext(Tb);if(e===void 0)throw new Error("useTheme must be used within a ThemeProvider");return e}const RI=()=>{};var _x={};/**
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
 */const Ab=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},MI=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],a=e[n++],l=e[n++],c=((i&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],a=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ib={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const o=e[i],a=i+1<e.length,l=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,f=o>>2,p=(o&3)<<4|l>>4;let h=(l&15)<<2|u>>6,v=u&63;c||(v=64,a||(h=64)),s.push(n[f],n[p],n[h],n[v])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ab(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):MI(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||l==null||u==null||p==null)throw new DI;const h=o<<2|l>>4;if(s.push(h),u!==64){const v=l<<4&240|u>>2;if(s.push(v),p!==64){const b=u<<6&192|p;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class DI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OI=function(e){const t=Ab(e);return Ib.encodeByteArray(t,!0)},Pb=function(e){return OI(e).replace(/\./g,"")},Rb=function(e){try{return Ib.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function LI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const FI=()=>LI().__FIREBASE_DEFAULTS__,UI=()=>{if(typeof process>"u"||typeof _x>"u")return;const e=_x.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},$I=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Rb(e[1]);return t&&JSON.parse(t)},Vp=()=>{try{return RI()||FI()||UI()||$I()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},zI=e=>{var t,n;return(n=(t=Vp())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Mb=()=>{var e;return(e=Vp())===null||e===void 0?void 0:e.config},Db=e=>{var t;return(t=Vp())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class BI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
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
 */function _u(e){return e.endsWith(".cloudworkstations.dev")}async function HI(e){return(await fetch(e,{credentials:"include"})).ok}const ea={};function WI(){const e={prod:[],emulator:[]};for(const t of Object.keys(ea))ea[t]?e.emulator.push(t):e.prod.push(t);return e}function VI(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}let Nx=!1;function KI(e,t){if(typeof window>"u"||typeof document>"u"||!_u(window.location.host)||ea[e]===t||ea[e]||Nx)return;ea[e]=t;function n(h){return`__firebase__banner__${h}`}const s="__firebase__banner",o=WI().prod.length>0;function a(){const h=document.getElementById(s);h&&h.remove()}function l(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,v){h.setAttribute("width","24"),h.setAttribute("id",v),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function u(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Nx=!0,a()},h}function f(h,v){h.setAttribute("id",v),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function p(){const h=VI(s),v=n("text"),b=document.getElementById(v)||document.createElement("span"),x=n("learnmore"),y=document.getElementById(x)||document.createElement("a"),g=n("preprendIcon"),m=document.getElementById(g)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const w=h.element;l(w),f(y,x);const j=u();c(m,g),w.append(m,b,y,j),document.body.appendChild(w)}o?(b.innerText="Preview backend disconnected.",m.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(m.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function qI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QI(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function JI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YI(){const e=yt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function XI(){try{return typeof indexedDB=="object"}catch{return!1}}function ZI(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const eP="FirebaseError";class dr extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=eP,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ka.prototype.create)}}class Ka{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],a=o?tP(o,s):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new dr(i,l,s)}}function tP(e,t){return e.replace(nP,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const nP=/\{\$([^}]+)}/g;function sP(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function oo(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const o=e[i],a=t[i];if(Cx(o)&&Cx(a)){if(!oo(o,a))return!1}else if(o!==a)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Cx(e){return e!==null&&typeof e=="object"}/**
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
 */function Ga(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function rP(e,t){const n=new iP(e,t);return n.subscribe.bind(n)}class iP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let i;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");oP(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:s},i.next===void 0&&(i.next=Sd),i.error===void 0&&(i.error=Sd),i.complete===void 0&&(i.complete=Sd);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Sd(){}/**
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
 */function hr(e){return e&&e._delegate?e._delegate:e}class ao{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const xr="[DEFAULT]";/**
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
 */class aP{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new BI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cP(t))try{this.getOrInitializeService({instanceIdentifier:xr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});s.resolve(o)}catch{}}}}clearInstance(t=xr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xr){return this.instances.has(t)}getOptions(t=xr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);s===l&&a.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;o.add(t),this.onInitCallbacks.set(i,o);const a=this.instances.get(i);return a&&t(a,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lP(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=xr){return this.component?this.component.multipleInstances?t:xr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lP(e){return e===xr?void 0:e}function cP(e){return e.instantiationMode==="EAGER"}/**
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
 */class uP{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new aP(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var je;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(je||(je={}));const dP={debug:je.DEBUG,verbose:je.VERBOSE,info:je.INFO,warn:je.WARN,error:je.ERROR,silent:je.SILENT},hP=je.INFO,fP={[je.DEBUG]:"log",[je.VERBOSE]:"log",[je.INFO]:"info",[je.WARN]:"warn",[je.ERROR]:"error"},pP=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=fP[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ob{constructor(t){this.name=t,this._logLevel=hP,this._logHandler=pP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in je))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dP[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,je.DEBUG,...t),this._logHandler(this,je.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,je.VERBOSE,...t),this._logHandler(this,je.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,je.INFO,...t),this._logHandler(this,je.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,je.WARN,...t),this._logHandler(this,je.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,je.ERROR,...t),this._logHandler(this,je.ERROR,...t)}}const mP=(e,t)=>t.some(n=>e instanceof n);let kx,Ex;function gP(){return kx||(kx=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xP(){return Ex||(Ex=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lb=new WeakMap,sf=new WeakMap,Fb=new WeakMap,_d=new WeakMap,Kp=new WeakMap;function vP(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(Qs(e.result)),i()},a=()=>{s(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Lb.set(n,e)}).catch(()=>{}),Kp.set(t,e),t}function yP(e){if(sf.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});sf.set(e,t)}let rf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return sf.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fb.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qs(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wP(e){rf=e(rf)}function bP(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Nd(this),t,...n);return Fb.set(s,t.sort?t.sort():[t]),Qs(s)}:xP().includes(e)?function(...t){return e.apply(Nd(this),t),Qs(Lb.get(this))}:function(...t){return Qs(e.apply(Nd(this),t))}}function jP(e){return typeof e=="function"?bP(e):(e instanceof IDBTransaction&&yP(e),mP(e,gP())?new Proxy(e,rf):e)}function Qs(e){if(e instanceof IDBRequest)return vP(e);if(_d.has(e))return _d.get(e);const t=jP(e);return t!==e&&(_d.set(e,t),Kp.set(t,e)),t}const Nd=e=>Kp.get(e);function SP(e,t,{blocked:n,upgrade:s,blocking:i,terminated:o}={}){const a=indexedDB.open(e,t),l=Qs(a);return s&&a.addEventListener("upgradeneeded",c=>{s(Qs(a.result),c.oldVersion,c.newVersion,Qs(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{o&&c.addEventListener("close",()=>o()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const _P=["get","getKey","getAll","getAllKeys","count"],NP=["put","add","delete","clear"],Cd=new Map;function Tx(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Cd.get(t))return Cd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=NP.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_P.includes(n)))return;const o=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Cd.set(t,o),o}wP(e=>({...e,get:(t,n,s)=>Tx(t,n)||e.get(t,n,s),has:(t,n)=>!!Tx(t,n)||e.has(t,n)}));/**
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
 */class CP{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kP(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function kP(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const of="@firebase/app",Ax="0.13.1";/**
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
 */const os=new Ob("@firebase/app"),EP="@firebase/app-compat",TP="@firebase/analytics-compat",AP="@firebase/analytics",IP="@firebase/app-check-compat",PP="@firebase/app-check",RP="@firebase/auth",MP="@firebase/auth-compat",DP="@firebase/database",OP="@firebase/data-connect",LP="@firebase/database-compat",FP="@firebase/functions",UP="@firebase/functions-compat",$P="@firebase/installations",zP="@firebase/installations-compat",BP="@firebase/messaging",HP="@firebase/messaging-compat",WP="@firebase/performance",VP="@firebase/performance-compat",KP="@firebase/remote-config",GP="@firebase/remote-config-compat",qP="@firebase/storage",QP="@firebase/storage-compat",JP="@firebase/firestore",YP="@firebase/ai",XP="@firebase/firestore-compat",ZP="firebase",e2="11.9.0";/**
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
 */const af="[DEFAULT]",t2={[of]:"fire-core",[EP]:"fire-core-compat",[AP]:"fire-analytics",[TP]:"fire-analytics-compat",[PP]:"fire-app-check",[IP]:"fire-app-check-compat",[RP]:"fire-auth",[MP]:"fire-auth-compat",[DP]:"fire-rtdb",[OP]:"fire-data-connect",[LP]:"fire-rtdb-compat",[FP]:"fire-fn",[UP]:"fire-fn-compat",[$P]:"fire-iid",[zP]:"fire-iid-compat",[BP]:"fire-fcm",[HP]:"fire-fcm-compat",[WP]:"fire-perf",[VP]:"fire-perf-compat",[KP]:"fire-rc",[GP]:"fire-rc-compat",[qP]:"fire-gcs",[QP]:"fire-gcs-compat",[JP]:"fire-fst",[XP]:"fire-fst-compat",[YP]:"fire-vertex","fire-js":"fire-js",[ZP]:"fire-js-all"};/**
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
 */const Uc=new Map,n2=new Map,lf=new Map;function Ix(e,t){try{e.container.addComponent(t)}catch(n){os.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Sa(e){const t=e.name;if(lf.has(t))return os.debug(`There were multiple attempts to register component ${t}.`),!1;lf.set(t,e);for(const n of Uc.values())Ix(n,e);for(const n of n2.values())Ix(n,e);return!0}function Ub(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function kn(e){return e==null?!1:e.settings!==void 0}/**
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
 */const s2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Js=new Ka("app","Firebase",s2);/**
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
 */class r2{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ao("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Js.create("app-deleted",{appName:this._name})}}/**
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
 */const qa=e2;function $b(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:af,automaticDataCollectionEnabled:!0},t),i=s.name;if(typeof i!="string"||!i)throw Js.create("bad-app-name",{appName:String(i)});if(n||(n=Mb()),!n)throw Js.create("no-options");const o=Uc.get(i);if(o){if(oo(n,o.options)&&oo(s,o.config))return o;throw Js.create("duplicate-app",{appName:i})}const a=new uP(i);for(const c of lf.values())a.addComponent(c);const l=new r2(n,s,a);return Uc.set(i,l),l}function i2(e=af){const t=Uc.get(e);if(!t&&e===af&&Mb())return $b();if(!t)throw Js.create("no-app",{appName:e});return t}function Ai(e,t,n){var s;let i=(s=t2[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),os.warn(l.join(" "));return}Sa(new ao(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const o2="firebase-heartbeat-database",a2=1,_a="firebase-heartbeat-store";let kd=null;function zb(){return kd||(kd=SP(o2,a2,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(_a)}catch(n){console.warn(n)}}}}).catch(e=>{throw Js.create("idb-open",{originalErrorMessage:e.message})})),kd}async function l2(e){try{const n=(await zb()).transaction(_a),s=await n.objectStore(_a).get(Bb(e));return await n.done,s}catch(t){if(t instanceof dr)os.warn(t.message);else{const n=Js.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});os.warn(n.message)}}}async function Px(e,t){try{const s=(await zb()).transaction(_a,"readwrite");await s.objectStore(_a).put(t,Bb(e)),await s.done}catch(n){if(n instanceof dr)os.warn(n.message);else{const s=Js.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(s.message)}}}function Bb(e){return`${e.name}!${e.options.appId}`}/**
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
 */const c2=1024,u2=30;class d2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new f2(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Rx();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>u2){const a=p2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){os.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rx(),{heartbeatsToSend:s,unsentEntries:i}=h2(this._heartbeatsCache.heartbeats),o=Pb(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return os.warn(n),""}}}function Rx(){return new Date().toISOString().substring(0,10)}function h2(e,t=c2){const n=[];let s=e.slice();for(const i of e){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Mx(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Mx(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class f2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XI()?ZI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await l2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Px(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Px(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Mx(e){return Pb(JSON.stringify({version:2,heartbeats:e})).length}function p2(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let s=1;s<e.length;s++)e[s].date<n&&(n=e[s].date,t=s);return t}/**
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
 */function m2(e){Sa(new ao("platform-logger",t=>new CP(t),"PRIVATE")),Sa(new ao("heartbeat",t=>new d2(t),"PRIVATE")),Ai(of,Ax,e),Ai(of,Ax,"esm2017"),Ai("fire-js","")}m2("");var g2="firebase",x2="11.9.1";/**
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
 */Ai(g2,x2,"app");var En=function(){return En=Object.assign||function(t){for(var n,s=1,i=arguments.length;s<i;s++){n=arguments[s];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},En.apply(this,arguments)};function Qa(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]]);return n}function v2(e,t,n){if(n||arguments.length===2)for(var s=0,i=t.length,o;s<i;s++)(o||!(s in t))&&(o||(o=Array.prototype.slice.call(t,0,s)),o[s]=t[s]);return e.concat(o||Array.prototype.slice.call(t))}function Hb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y2=Hb,Wb=new Ka("auth","Firebase",Hb());/**
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
 */const $c=new Ob("@firebase/auth");function w2(e,...t){$c.logLevel<=je.WARN&&$c.warn(`Auth (${qa}): ${e}`,...t)}function tc(e,...t){$c.logLevel<=je.ERROR&&$c.error(`Auth (${qa}): ${e}`,...t)}/**
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
 */function Fn(e,...t){throw qp(e,...t)}function pn(e,...t){return qp(e,...t)}function Gp(e,t,n){const s=Object.assign(Object.assign({},y2()),{[t]:n});return new Ka("auth","Firebase",s).create(t,{appName:e.name})}function Mr(e){return Gp(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function b2(e,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&Fn(e,"argument-error"),Gp(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qp(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Wb.create(e,...t)}function ae(e,t,...n){if(!e)throw qp(t,...n)}function Qn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw tc(t),new Error(t)}function as(e,t){e||Qn(t)}/**
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
 */function cf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function j2(){return Dx()==="http:"||Dx()==="https:"}function Dx(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function S2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j2()||QI()||"connection"in navigator)?navigator.onLine:!0}function _2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Ja{constructor(t,n){this.shortDelay=t,this.longDelay=n,as(n>t,"Short delay should be less than long delay!"),this.isMobile=GI()||JI()}get(){return S2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qp(e,t){as(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Vb{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const N2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const C2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],k2=new Ja(3e4,6e4);function Jp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function wo(e,t,n,s,i={}){return Kb(e,i,async()=>{let o={},a={};s&&(t==="GET"?a=s:o={body:JSON.stringify(s)});const l=Ga(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:c},o);return qI()||(u.referrerPolicy="no-referrer"),e.emulatorConfig&&_u(e.emulatorConfig.host)&&(u.credentials="include"),Vb.fetch()(await Gb(e,e.config.apiHost,n,l),u)})}async function Kb(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},N2),t);try{const i=new T2(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Rl(e,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const l=o.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Rl(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw Rl(e,"user-disabled",a);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Gp(e,f,u);Fn(e,f)}}catch(i){if(i instanceof dr)throw i;Fn(e,"network-request-failed",{message:String(i)})}}async function E2(e,t,n,s,i={}){const o=await wo(e,t,n,s,i);return"mfaPendingCredential"in o&&Fn(e,"multi-factor-auth-required",{_serverResponse:o}),o}async function Gb(e,t,n,s){const i=`${t}${n}?${s}`,o=e,a=o.config.emulator?Qp(e.config,i):`${e.config.apiScheme}://${i}`;return C2.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class T2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(pn(this.auth,"network-request-failed")),k2.get())})}}function Rl(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=pn(e,t,s);return i.customData._tokenResponse=n,i}/**
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
 */async function A2(e,t){return wo(e,"POST","/v1/accounts:delete",t)}async function zc(e,t){return wo(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ta(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function I2(e,t=!1){const n=hr(e),s=await n.getIdToken(t),i=Yp(s);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:s,authTime:ta(Ed(i.auth_time)),issuedAtTime:ta(Ed(i.iat)),expirationTime:ta(Ed(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ed(e){return Number(e)*1e3}function Yp(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return tc("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rb(n);return i?JSON.parse(i):(tc("Failed to decode base64 JWT payload"),null)}catch(i){return tc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ox(e){const t=Yp(e);return ae(t,"internal-error"),ae(typeof t.exp<"u","internal-error"),ae(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Na(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof dr&&P2(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function P2({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class R2{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class uf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ta(this.lastLoginAt),this.creationTime=ta(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bc(e){var t;const n=e.auth,s=await e.getIdToken(),i=await Na(e,zc(n,{idToken:s}));ae(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?qb(o.providerUserInfo):[],l=D2(e.providerData,a),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new uf(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}async function M2(e){const t=hr(e);await Bc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function D2(e,t){return[...e.filter(s=>!t.some(i=>i.providerId===s.providerId)),...t]}function qb(e){return e.map(t=>{var{providerId:n}=t,s=Qa(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function O2(e,t){const n=await Kb(e,{},async()=>{const s=Ga({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,a=await Gb(e,i,"/v1/token",`key=${o}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return e.emulatorConfig&&_u(e.emulatorConfig.host)&&(c.credentials="include"),Vb.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function L2(e,t){return wo(e,"POST","/v2/accounts:revokeToken",Jp(e,t))}/**
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
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ae(t.idToken,"internal-error"),ae(typeof t.idToken<"u","internal-error"),ae(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ox(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ae(t.length!==0,"internal-error");const n=Ox(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:i,expiresIn:o}=await O2(t,n);this.updateTokensAndExpiration(s,i,Number(o))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:i,expirationTime:o}=n,a=new Ii;return s&&(ae(typeof s=="string","internal-error",{appName:t}),a.refreshToken=s),i&&(ae(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),o&&(ae(typeof o=="number","internal-error",{appName:t}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
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
 */function xs(e,t){ae(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class dn{constructor(t){var{uid:n,auth:s,stsTokenManager:i}=t,o=Qa(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new uf(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Na(this,this.stsTokenManager.getToken(this.auth,t));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return I2(this,t)}reload(){return M2(this)}_assign(t){this!==t&&(ae(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new dn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Bc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(Mr(this.auth));const t=await this.getIdToken();return await Na(this,A2(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,i,o,a,l,c,u,f;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,b=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:w,emailVerified:j,isAnonymous:S,providerData:N,stsTokenManager:C}=n;ae(w&&C,t,"internal-error");const I=Ii.fromJSON(this.name,C);ae(typeof w=="string",t,"internal-error"),xs(p,t.name),xs(h,t.name),ae(typeof j=="boolean",t,"internal-error"),ae(typeof S=="boolean",t,"internal-error"),xs(v,t.name),xs(b,t.name),xs(x,t.name),xs(y,t.name),xs(g,t.name),xs(m,t.name);const R=new dn({uid:w,auth:t,email:h,emailVerified:j,displayName:p,isAnonymous:S,photoURL:b,phoneNumber:v,tenantId:x,stsTokenManager:I,createdAt:g,lastLoginAt:m});return N&&Array.isArray(N)&&(R.providerData=N.map(M=>Object.assign({},M))),y&&(R._redirectEventId=y),R}static async _fromIdTokenResponse(t,n,s=!1){const i=new Ii;i.updateFromServerResponse(n);const o=new dn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:s});return await Bc(o),o}static async _fromGetAccountInfoResponse(t,n,s){const i=n.users[0];ae(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?qb(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),l=new Ii;l.updateFromIdToken(s);const c=new dn({uid:i.localId,auth:t,stsTokenManager:l,isAnonymous:a}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new uf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(c,u),c}}/**
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
 */const Lx=new Map;function Jn(e){as(e instanceof Function,"Expected a class definition");let t=Lx.get(e);return t?(as(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Lx.set(e,t),t)}/**
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
 */class Qb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Qb.type="NONE";const Fx=Qb;/**
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
 */function nc(e,t,n){return`firebase:${e}:${t}:${n}`}class Pi{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:i,name:o}=this.auth;this.fullUserKey=nc(this.userKey,i.apiKey,o),this.fullPersistenceKey=nc("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await zc(this.auth,{idToken:t}).catch(()=>{});return n?dn._fromGetAccountInfoResponse(this.auth,n,t):null}return dn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Pi(Jn(Fx),t,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Jn(Fx);const a=nc(s,t.config.apiKey,t.name);let l=null;for(const u of n)try{const f=await u._get(a);if(f){let p;if(typeof f=="string"){const h=await zc(t,{idToken:f}).catch(()=>{});if(!h)break;p=await dn._fromGetAccountInfoResponse(t,h,f)}else p=dn._fromJSON(t,f);u!==o&&(l=p),o=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new Pi(o,t,s):(o=c[0],l&&await o._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(a)}catch{}})),new Pi(o,t,s))}}/**
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
 */function Ux(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zb(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jb(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(tj(t))return"Blackberry";if(nj(t))return"Webos";if(Yb(t))return"Safari";if((t.includes("chrome/")||Xb(t))&&!t.includes("edge/"))return"Chrome";if(ej(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Jb(e=yt()){return/firefox\//i.test(e)}function Yb(e=yt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Xb(e=yt()){return/crios\//i.test(e)}function Zb(e=yt()){return/iemobile/i.test(e)}function ej(e=yt()){return/android/i.test(e)}function tj(e=yt()){return/blackberry/i.test(e)}function nj(e=yt()){return/webos/i.test(e)}function Xp(e=yt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function F2(e=yt()){var t;return Xp(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function U2(){return YI()&&document.documentMode===10}function sj(e=yt()){return Xp(e)||ej(e)||nj(e)||tj(e)||/windows phone/i.test(e)||Zb(e)}/**
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
 */function rj(e,t=[]){let n;switch(e){case"Browser":n=Ux(yt());break;case"Worker":n=`${Ux(yt())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qa}/${s}`}/**
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
 */class $2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=o=>new Promise((a,l)=>{try{const c=t(o);a(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function z2(e,t={}){return wo(e,"GET","/v2/passwordPolicy",Jp(e,t))}/**
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
 */const B2=6;class H2{constructor(t){var n,s,i,o;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:B2,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,i,o,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsUppercaseLetter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<t.length;i++)s=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
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
 */class W2{constructor(t,n,s,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $x(this),this.idTokenSubscription=new $x(this),this.beforeStateQueue=new $2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var s,i,o;if(!this._deleted&&(this.persistenceManager=await Pi.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await zc(this,{idToken:t}),s=await dn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(kn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=_2()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(kn(this.app))return Promise.reject(Mr(this));const n=t?hr(t):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ae(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return kn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await z2(this),n=new H2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ka("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await L2(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Jn(t)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Pi.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,s,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=rj(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&w2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nu(e){return hr(e)}class $x{constructor(t){this.auth=t,this.observer=null,this.addObserver=rP(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V2(e){Zp=e}function K2(e){return Zp.loadJS(e)}function G2(){return Zp.gapiScript}function q2(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Q2(e,t){const n=Ub(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(oo(o,t??{}))return i;Fn(i,"already-initialized")}return n.initialize({options:t})}function J2(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Jn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function Y2(e,t,n){const s=Nu(e);ae(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!1,o=ij(t),{host:a,port:l}=X2(t),c=l===null?"":`:${l}`,u={url:`${o}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){ae(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ae(oo(u,s.config.emulator)&&oo(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,_u(a)?(HI(`${o}//${a}${c}`),KI("Auth",!0)):Z2()}function ij(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function X2(e){const t=ij(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const o=i[1];return{host:o,port:zx(s.substr(o.length+1))}}else{const[o,a]=s.split(":");return{host:o,port:zx(a)}}}function zx(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Z2(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class oj{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(t){return Qn("not implemented")}_linkToIdToken(t,n){return Qn("not implemented")}_getReauthenticationResolver(t){return Qn("not implemented")}}/**
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
 */async function Ri(e,t){return E2(e,"POST","/v1/accounts:signInWithIdp",Jp(e,t))}/**
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
 */const eR="http://localhost";class Kr extends oj{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Kr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:i}=n,o=Qa(n,["providerId","signInMethod"]);if(!s||!i)return null;const a=new Kr(s,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return Ri(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ri(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ri(t,n)}buildRequest(){const t={requestUri:eR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ga(n)}return t}}/**
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
 */class em{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ya extends em{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ns extends Ya{constructor(){super("facebook.com")}static credential(t){return Kr._fromParams({providerId:Ns.PROVIDER_ID,signInMethod:Ns.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ns.credentialFromTaggedObject(t)}static credentialFromError(t){return Ns.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ns.credential(t.oauthAccessToken)}catch{return null}}}Ns.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ns.PROVIDER_ID="facebook.com";/**
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
 */class Tn extends Ya{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Kr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Tn.credential(n,s)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
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
 */class Cs extends Ya{constructor(){super("github.com")}static credential(t){return Kr._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Cs.credentialFromTaggedObject(t)}static credentialFromError(t){return Cs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Cs.credential(t.oauthAccessToken)}catch{return null}}}Cs.GITHUB_SIGN_IN_METHOD="github.com";Cs.PROVIDER_ID="github.com";/**
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
 */class ks extends Ya{constructor(){super("twitter.com")}static credential(t,n){return Kr._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ks.credentialFromTaggedObject(t)}static credentialFromError(t){return ks.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return ks.credential(n,s)}catch{return null}}}ks.TWITTER_SIGN_IN_METHOD="twitter.com";ks.PROVIDER_ID="twitter.com";/**
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
 */class lo{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,i=!1){const o=await dn._fromIdTokenResponse(t,s,i),a=Bx(s);return new lo({user:o,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const i=Bx(s);return new lo({user:t,providerId:i,_tokenResponse:s,operationType:n})}}function Bx(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Hc extends dr{constructor(t,n,s,i){var o;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Hc.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,i){return new Hc(t,n,s,i)}}function aj(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Hc._fromErrorAndOperation(e,o,t,s):o})}async function tR(e,t,n=!1){const s=await Na(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return lo._forOperation(e,"link",s)}/**
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
 */async function nR(e,t,n=!1){const{auth:s}=e;if(kn(s.app))return Promise.reject(Mr(s));const i="reauthenticate";try{const o=await Na(e,aj(s,i,t,e),n);ae(o.idToken,s,"internal-error");const a=Yp(o.idToken);ae(a,s,"internal-error");const{sub:l}=a;return ae(e.uid===l,s,"user-mismatch"),lo._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Fn(s,"user-mismatch"),o}}/**
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
 */async function sR(e,t,n=!1){if(kn(e.app))return Promise.reject(Mr(e));const s="signIn",i=await aj(e,s,t),o=await lo._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(o.user),o}function rR(e,t,n,s){return hr(e).onIdTokenChanged(t,n,s)}function iR(e,t,n){return hr(e).beforeAuthStateChanged(t,n)}function oR(e,t,n,s){return hr(e).onAuthStateChanged(t,n,s)}function aR(e){return hr(e).signOut()}const Wc="__sak";/**
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
 */class lj{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lR=1e3,cR=10;class cj extends lj{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sj(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&t(n,i,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const s=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},o=this.storage.getItem(s);U2()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,cR):i()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},lR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}cj.type="LOCAL";const uR=cj;/**
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
 */class uj extends lj{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}uj.type="SESSION";const dj=uj;/**
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
 */function dR(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cu{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const s=new Cu(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(a).map(async u=>u(n.origin,o)),c=await dR(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cu.receivers=[];/**
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
 */function tm(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class hR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((l,c)=>{const u=tm("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(p){const h=p;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(h.data.response);break;default:clearTimeout(f),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function On(){return window}function fR(e){On().location.href=e}/**
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
 */function hj(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function pR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mR(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function gR(){return hj()?self:null}/**
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
 */const fj="firebaseLocalStorageDb",xR=1,Vc="firebaseLocalStorage",pj="fbase_key";class Xa{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(e,t){return e.transaction([Vc],t?"readwrite":"readonly").objectStore(Vc)}function vR(){const e=indexedDB.deleteDatabase(fj);return new Xa(e).toPromise()}function df(){const e=indexedDB.open(fj,xR);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(Vc,{keyPath:pj})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(Vc)?t(s):(s.close(),await vR(),t(await df()))})})}async function Hx(e,t,n){const s=ku(e,!0).put({[pj]:t,value:n});return new Xa(s).toPromise()}async function yR(e,t){const n=ku(e,!1).get(t),s=await new Xa(n).toPromise();return s===void 0?null:s.value}function Wx(e,t){const n=ku(e,!0).delete(t);return new Xa(n).toPromise()}const wR=800,bR=3;class mj{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await df(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>bR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hj()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cu._getInstance(gR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await pR(),!this.activeServiceWorker)return;this.sender=new hR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await df();return await Hx(t,Wc,"1"),await Wx(t,Wc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Hx(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>yR(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wx(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=ku(i,!1).getAll();return new Xa(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mj.type="LOCAL";const jR=mj;new Ja(3e4,6e4);/**
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
 */function gj(e,t){return t?Jn(t):(ae(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class nm extends oj{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ri(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ri(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ri(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function SR(e){return sR(e.auth,new nm(e),e.bypassAuthState)}function _R(e){const{auth:t,user:n}=e;return ae(n,t,"internal-error"),nR(n,new nm(e),e.bypassAuthState)}async function NR(e){const{auth:t,user:n}=e;return ae(n,t,"internal-error"),tR(n,new nm(e),e.bypassAuthState)}/**
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
 */class xj{constructor(t,n,s,i,o=!1){this.auth=t,this.resolver=s,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:i,tenantId:o,error:a,type:l}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return SR;case"linkViaPopup":case"linkViaRedirect":return NR;case"reauthViaPopup":case"reauthViaRedirect":return _R;default:Fn(this.auth,"internal-error")}}resolve(t){as(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){as(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CR=new Ja(2e3,1e4);async function kR(e,t,n){if(kn(e.app))return Promise.reject(pn(e,"operation-not-supported-in-this-environment"));const s=Nu(e);b2(e,t,em);const i=gj(s,n);return new br(s,"signInViaPopup",t,i).executeNotNull()}class br extends xj{constructor(t,n,s,i,o){super(t,n,i,o),this.provider=s,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ae(t,this.auth,"internal-error"),t}async onExecution(){as(this.filter.length===1,"Popup operations only handle one event");const t=tm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,CR.get())};t()}}br.currentPopupAction=null;/**
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
 */const ER="pendingRedirect",sc=new Map;class TR extends xj{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=sc.get(this.auth._key());if(!t){try{const s=await AR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}sc.set(this.auth._key(),t)}return this.bypassAuthState||sc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AR(e,t){const n=RR(t),s=PR(e);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function IR(e,t){sc.set(e._key(),t)}function PR(e){return Jn(e._redirectPersistence)}function RR(e){return nc(ER,e.config.apiKey,e.name)}async function MR(e,t,n=!1){if(kn(e.app))return Promise.reject(Mr(e));const s=Nu(e),i=gj(s,t),a=await new TR(s,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,t)),a}/**
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
 */const DR=10*60*1e3;class OR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!LR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!vj(t)){const i=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=DR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vx(t))}saveEventToCache(t){this.cachedEventUids.add(Vx(t)),this.lastProcessedEventTime=Date.now()}}function Vx(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vj({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function LR(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vj(e);default:return!1}}/**
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
 */async function FR(e,t={}){return wo(e,"GET","/v1/projects",t)}/**
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
 */const UR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$R=/^https?/;async function zR(e){if(e.config.emulator)return;const{authorizedDomains:t}=await FR(e);for(const n of t)try{if(BR(n))return}catch{}Fn(e,"unauthorized-domain")}function BR(e){const t=cf(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!$R.test(n))return!1;if(UR.test(e))return s===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const HR=new Ja(3e4,6e4);function Kx(){const e=On().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function WR(e){return new Promise((t,n)=>{var s,i,o;function a(){Kx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kx(),n(pn(e,"network-request-failed"))},timeout:HR.get()})}if(!((i=(s=On().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=On().gapi)===null||o===void 0)&&o.load)a();else{const l=q2("iframefcb");return On()[l]=()=>{gapi.load?a():n(pn(e,"network-request-failed"))},K2(`${G2()}?onload=${l}`).catch(c=>n(c))}}).catch(t=>{throw rc=null,t})}let rc=null;function VR(e){return rc=rc||WR(e),rc}/**
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
 */const KR=new Ja(5e3,15e3),GR="__/auth/iframe",qR="emulator/auth/iframe",QR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YR(e){const t=e.config;ae(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Qp(t,qR):`https://${e.config.authDomain}/${GR}`,s={apiKey:t.apiKey,appName:e.name,v:qa},i=JR.get(e.config.apiHost);i&&(s.eid=i);const o=e._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${Ga(s).slice(1)}`}async function XR(e){const t=await VR(e),n=On().gapi;return ae(n,e,"internal-error"),t.open({where:document.body,url:YR(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QR,dontclear:!0},s=>new Promise(async(i,o)=>{await s.restyle({setHideOnLeave:!1});const a=pn(e,"network-request-failed"),l=On().setTimeout(()=>{o(a)},KR.get());function c(){On().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{o(a)})}))}/**
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
 */const ZR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eM=500,tM=600,nM="_blank",sM="http://localhost";class Gx{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rM(e,t,n,s=eM,i=tM){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},ZR),{width:s.toString(),height:i.toString(),top:o,left:a}),u=yt().toLowerCase();n&&(l=Xb(u)?nM:n),Jb(u)&&(t=t||sM,c.scrollbars="yes");const f=Object.entries(c).reduce((h,[v,b])=>`${h}${v}=${b},`,"");if(F2(u)&&l!=="_self")return iM(t||"",l),new Gx(null);const p=window.open(t||"",l,f);ae(p,e,"popup-blocked");try{p.focus()}catch{}return new Gx(p)}function iM(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const oM="__/auth/handler",aM="emulator/auth/handler",lM=encodeURIComponent("fac");async function qx(e,t,n,s,i,o){ae(e.config.authDomain,e,"auth-domain-config-required"),ae(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:qa,eventId:i};if(t instanceof em){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",sP(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(t instanceof Ya){const f=t.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await e._getAppCheckToken(),u=c?`#${lM}=${encodeURIComponent(c)}`:"";return`${cM(e)}?${Ga(l).slice(1)}${u}`}function cM({config:e}){return e.emulator?Qp(e,aM):`https://${e.authDomain}/${oM}`}/**
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
 */const Td="webStorageSupport";class uM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dj,this._completeRedirectFn=MR,this._overrideRedirectResult=IR}async _openPopup(t,n,s,i){var o;as((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const a=await qx(t,n,s,cf(),i);return rM(t,a,tm())}async _openRedirect(t,n,s,i){await this._originValidation(t);const o=await qx(t,n,s,cf(),i);return fR(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(as(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await XR(t),s=new OR(t);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Td,{type:Td},i=>{var o;const a=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Td];a!==void 0&&n(!!a),Fn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return sj()||Yb()||Xp()}}const dM=uM;var Qx="@firebase/auth",Jx="1.10.7";/**
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
 */class hM{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fM(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pM(e){Sa(new ao("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=s.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rj(e)},u=new W2(s,i,o,c);return J2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),Sa(new ao("auth-internal",t=>{const n=Nu(t.getProvider("auth").getImmediate());return(s=>new hM(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ai(Qx,Jx,fM(e)),Ai(Qx,Jx,"esm2017")}/**
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
 */const mM=5*60,gM=Db("authIdTokenMaxAge")||mM;let Yx=null;const xM=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gM)return;const i=n==null?void 0:n.token;Yx!==i&&(Yx=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vM(e=i2()){const t=Ub(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Q2(e,{popupRedirectResolver:dM,persistence:[jR,uR,dj]}),s=Db("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(s,location.origin);if(location.origin===o.origin){const a=xM(o.toString());iR(n,a,()=>a(n.currentUser)),rR(n,l=>a(l))}}const i=zI("auth");return i&&Y2(n,`http://${i}`),n}function yM(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}V2({loadJS(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=i=>{const o=pn("internal-error");o.customData=i,n(o)},s.type="text/javascript",s.charset="UTF-8",yM().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pM("Browser");const wM={apiKey:void 0,authDomain:"undefined.firebaseapp.com",projectId:void 0,storageBucket:"undefined.firebasestorage.app",messagingSenderId:"123456789",appId:void 0},bM=$b(wM),sm=vM(bM),rm=new Tn;rm.addScope("email");rm.addScope("profile");rm.setCustomParameters({prompt:"select_account",hd:""});const jM=async()=>{const e=new Tn;e.setCustomParameters({prompt:"select_account"});try{const t=await kR(sm,e),n=t.user;return localStorage.removeItem("user_logged_out"),sessionStorage.removeItem("user_logged_out"),console.log("✅ Signed in as:",n.email),t}catch(t){throw console.error("❌ Sign-in error:",t),t}},SM=async()=>{try{localStorage.setItem("user_logged_out","true"),sessionStorage.setItem("user_logged_out","true"),await fetch("/api/logout",{method:"POST",credentials:"include"}),await aR(sm),console.log("✅ Firebase signout completed");const e=localStorage.getItem("user_logged_out");localStorage.clear(),sessionStorage.clear(),localStorage.setItem("user_logged_out","true"),sessionStorage.setItem("user_logged_out","true"),document.cookie.split(";").forEach(t=>{document.cookie=t.replace(/^ +/,"").replace(/=.*/,"=;expires="+new Date().toUTCString()+";path=/")}),console.log("✅ Complete logout finished")}catch(e){throw console.error("❌ Logout error:",e),localStorage.setItem("user_logged_out","true"),sessionStorage.setItem("user_logged_out","true"),e}},yj=e=>oR(sm,e);function ei(){const[e,t]=d.useState(null),[n,s]=d.useState(!0),i=hs();d.useEffect(()=>{const p=yj(h=>{if(console.log("Firebase auth state changed:",h?"logged in":"logged out"),localStorage.getItem("user_logged_out")==="true"&&h){console.log("User manually logged out - ignoring Firebase auth"),t(null),s(!1);return}t(h),s(!1),h||i.clear()});return()=>p()},[i]);const o=localStorage.getItem("user_logged_out")==="true",{data:a,isLoading:l,error:c}=Je({queryKey:["/api/auth/user"],enabled:!o,retry:1,staleTime:0,gcTime:0});return{firebaseUser:e,user:a,isAuthenticated:(!!e||!!a)&&!c&&!o,isLoading:n||e&&l,error:c}}const H=d.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Q("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));H.displayName="Card";const K=d.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Q("flex flex-col space-y-1.5 p-6",e),...t}));K.displayName="CardHeader";const G=d.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Q("text-2xl font-semibold leading-none tracking-tight",e),...t}));G.displayName="CardTitle";const me=d.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Q("text-sm text-muted-foreground",e),...t}));me.displayName="CardDescription";const Y=d.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Q("p-6 pt-0",e),...t}));Y.displayName="CardContent";const _M=d.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Q("flex items-center p-6 pt-0",e),...t}));_M.displayName="CardFooter";const im=Ha("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),O=d.forwardRef(({className:e,variant:t,size:n,asChild:s=!1,...i},o)=>{const a=s?fE:"button";return r.jsx(a,{className:Q(im({variant:t,size:n,className:e})),ref:o,...i})});O.displayName="Button";const NM=Ha("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ie({className:e,variant:t,...n}){return r.jsx("div",{className:Q(NM({variant:t}),e),...n})}function vt(){const e=d.useRef(null),t=d.useRef(),n=d.useRef([]),s=d.useRef({x:0,y:0}),i=d.useRef(0),{theme:o}=yo(),a=d.useCallback((v,b)=>{const x=o==="dark"?["#dc2626","#ef4444","#f87171","#fca5a5","#fed7d7","#8b5cf6","#a855f7"]:["#dc2626","#ef4444","#f87171","#6366f1","#8b5cf6","#a855f7"];return{x:v??Math.random()*window.innerWidth,y:b??Math.random()*window.innerHeight,vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5,size:Math.random()*2.5+.5,opacity:Math.random()*.6+.3,color:x[Math.floor(Math.random()*x.length)],life:0,maxLife:Math.random()*400+300}},[o]),l=d.useCallback(()=>{n.current=[];for(let v=0;v<60;v++)n.current.push(a())},[a]),c=d.useCallback((v,b)=>{v.save(),v.globalAlpha=b.opacity,v.fillStyle=b.color,v.beginPath(),v.arc(b.x,b.y,b.size,0,Math.PI*2),v.fill(),v.shadowBlur=10,v.shadowColor=b.color,v.fill(),v.restore()},[]),u=d.useCallback((v,b)=>{for(let g=0;g<b.length;g++){let m=0;for(let w=g+1;w<b.length&&m<3;w++){const j=b[g].x-b[w].x,S=b[g].y-b[w].y,N=Math.sqrt(j*j+S*S);if(N<80){const C=(1-N/80)*.15;v.save(),v.globalAlpha=C*b[g].opacity*b[w].opacity,v.strokeStyle=o==="dark"?"#dc2626":"#ef4444",v.lineWidth=.5,v.beginPath(),v.moveTo(b[g].x,b[g].y),v.lineTo(b[w].x,b[w].y),v.stroke(),v.restore(),m++}}}},[o]),f=d.useCallback(v=>{const b=e.current;if(!b)return;const x=b.getContext("2d");if(!x)return;if(v-i.current<16.67){t.current=requestAnimationFrame(f);return}i.current=v,x.clearRect(0,0,b.width,b.height);for(let g=0;g<n.current.length;g++){const m=n.current[g];m.x+=m.vx,m.y+=m.vy,m.life++;const w=s.current.x-m.x,j=s.current.y-m.y,S=w*w+j*j,N=100;if(S<N*N&&S>0){const R=Math.sqrt(S),M=(N-R)/N,k=w/R,F=j/R;m.vx-=k*M*.2,m.vy-=F*M*.2}m.vx+=Math.sin(m.life*.005)*.005,m.vy+=Math.cos(m.life*.007)*.005,m.vx*=.996,m.vy*=.996;const C=50;m.x<-C?m.x=b.width+C:m.x>b.width+C&&(m.x=-C),m.y<-C?m.y=b.height+C:m.y>b.height+C&&(m.y=-C);const I=m.life/m.maxLife;if(I>.8&&(m.opacity=Math.max(.1,1-(I-.8)/.2)),m.life>m.maxLife||m.opacity<=.1){n.current[g]=a();continue}c(x,m)}u(x,n.current),t.current=requestAnimationFrame(f)},[o,a,c,u]),p=d.useCallback(()=>{const v=e.current;v&&(v.width=window.innerWidth,v.height=window.innerHeight)},[]),h=d.useCallback(v=>{s.current={x:v.clientX,y:v.clientY}},[]);return d.useEffect(()=>(p(),l(),f(),window.addEventListener("resize",p),window.addEventListener("mousemove",h),()=>{t.current&&cancelAnimationFrame(t.current),window.removeEventListener("resize",p),window.removeEventListener("mousemove",h)}),[p,l,f,h]),d.useEffect(()=>{l()},[o,l]),r.jsx("canvas",{ref:e,className:"fixed inset-0 pointer-events-none z-0",style:{background:o==="dark"?"radial-gradient(ellipse at top, #0f172a 0%, #020617 50%, #000000 100%)":"radial-gradient(ellipse at top, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)"}})}function CM(){const{user:e}=ei(),{theme:t,toggleTheme:n}=yo();d.useEffect(()=>{const o=new URLSearchParams(window.location.search);(o.get("logged_out")==="true"||o.get("force_logout")==="true")&&(localStorage.removeItem("logout_in_progress"),sessionStorage.removeItem("logout_in_progress"),window.history.replaceState({},document.title,window.location.pathname))},[]);const{data:s}=Je({queryKey:["/api/dashboard/stats"]}),i=()=>{window.location.href="/api/logout"};return r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx("nav",{className:"phantom-nav fixed w-full top-0 z-50",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"flex justify-between h-16",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(Se,{className:"h-8 w-8 phantom-text mr-3"}),r.jsx("span",{className:"text-xl font-bold text-foreground",children:"Phantom Auth"})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(Re,{href:"/dashboard",children:r.jsx(O,{variant:"ghost",size:"sm",children:"Dashboard"})}),r.jsx(O,{variant:"ghost",size:"icon",onClick:n,className:"text-foreground hover:text-primary",children:t==="light"?r.jsx(no,{className:"h-5 w-5"}):r.jsx(so,{className:"h-5 w-5"})}),r.jsxs(O,{variant:"ghost",size:"sm",onClick:i,children:[r.jsx(xu,{className:"h-4 w-4 mr-2"}),"Logout"]})]})]})})}),r.jsx("section",{className:"relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsx("div",{className:"text-center mb-16",children:r.jsxs("div",{className:"mb-8",children:[r.jsx(Se,{className:"h-16 w-16 phantom-text mx-auto mb-6"}),r.jsxs("h1",{className:"text-4xl md:text-5xl font-bold text-foreground mb-6",children:["Welcome back, ",(e==null?void 0:e.firstName)||(e==null?void 0:e.email)||"User"]}),r.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto mb-8",children:"Your Phantom Auth dashboard is ready. Manage your API keys, monitor users, and secure your applications."}),r.jsx(Re,{href:"/dashboard",children:r.jsxs(O,{className:"phantom-button px-8 py-4 text-lg",children:["Go to Dashboard",r.jsx(sT,{className:"h-5 w-5 ml-2"})]})})]})}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-16",children:[r.jsxs(H,{className:"phantom-stats-card",children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Total Users"}),r.jsx(xt,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsxs(Y,{children:[r.jsx("div",{className:"text-2xl font-bold",children:(s==null?void 0:s.totalUsers)||0}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Registered users"})]})]}),r.jsxs(H,{className:"phantom-stats-card",children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"API Keys"}),r.jsx(qn,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsxs(Y,{children:[r.jsx("div",{className:"text-2xl font-bold",children:(s==null?void 0:s.totalApiKeys)||0}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Total generated"})]})]}),r.jsxs(H,{className:"phantom-stats-card",children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Active Keys"}),r.jsx(Se,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsxs(Y,{children:[r.jsx("div",{className:"text-2xl font-bold success-color",children:(s==null?void 0:s.activeApiKeys)||0}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Currently active"})]})]}),r.jsxs(H,{className:"phantom-stats-card",children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Account"}),r.jsx(L0,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsxs(Y,{children:[r.jsx(ie,{variant:"secondary",className:"text-sm font-medium",children:(s==null?void 0:s.accountType)||"Premium"}),r.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Account type"})]})]})]})]})}),r.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-muted/50",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-4",children:"Your Authentication Platform"}),r.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"Everything you need to secure your applications with enterprise-grade authentication"})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[r.jsx(H,{className:"phantom-card",children:r.jsxs(K,{children:[r.jsx(vu,{className:"h-10 w-10 phantom-text mb-4"}),r.jsx(G,{children:"Lightning Fast"}),r.jsx(me,{children:"High-performance authentication with minimal latency and maximum throughput for your applications."})]})}),r.jsx(H,{className:"phantom-card",children:r.jsxs(K,{children:[r.jsx(Se,{className:"h-10 w-10 phantom-text mb-4"}),r.jsx(G,{children:"Enterprise Security"}),r.jsx(me,{children:"Bank-grade security with encryption, hashing, and secure session management built-in."})]})}),r.jsx(H,{className:"phantom-card",children:r.jsxs(K,{children:[r.jsx(qn,{className:"h-10 w-10 phantom-text mb-4"}),r.jsx(G,{children:"API Management"}),r.jsx(me,{children:"Generate, manage, and secure API keys with granular permissions and real-time monitoring."})]})}),r.jsx(H,{className:"phantom-card",children:r.jsxs(K,{children:[r.jsx(xt,{className:"h-10 w-10 phantom-text mb-4"}),r.jsx(G,{children:"User Management"}),r.jsx(me,{children:"Complete user lifecycle management with registration, login, and profile management."})]})}),r.jsx(H,{className:"phantom-card",children:r.jsxs(K,{children:[r.jsx(Wa,{className:"h-10 w-10 phantom-text mb-4"}),r.jsx(G,{children:"Global Scale"}),r.jsx(me,{children:"Built to scale globally with distributed architecture and CDN support worldwide."})]})}),r.jsx(H,{className:"phantom-card",children:r.jsxs(K,{children:[r.jsx(Rr,{className:"h-10 w-10 phantom-text mb-4"}),r.jsx(G,{children:"Secure by Default"}),r.jsx(me,{children:"Best security practices built-in with automatic updates and continuous monitoring."})]})})]})]})}),r.jsx("footer",{className:"bg-background border-t border-border py-12 px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:r.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[r.jsxs("div",{className:"flex items-center mb-4 md:mb-0",children:[r.jsx(Se,{className:"h-6 w-6 phantom-text mr-2"}),r.jsx("span",{className:"text-lg font-semibold text-foreground",children:"Phantom Auth"})]}),r.jsx("div",{className:"text-sm text-muted-foreground",children:"© 2024 Phantom Auth. All rights reserved."})]})})})]})}var kM=d.createContext(void 0);function Eu(e){const t=d.useContext(kM);return e||t||"ltr"}var Ad="rovingFocusGroup.onEntryFocus",EM={bubbles:!1,cancelable:!0},Tu="RovingFocusGroup",[hf,wj,TM]=pu(Tu),[AM,Au]=Wt(Tu,[TM]),[IM,PM]=AM(Tu),bj=d.forwardRef((e,t)=>r.jsx(hf.Provider,{scope:e.__scopeRovingFocusGroup,children:r.jsx(hf.Slot,{scope:e.__scopeRovingFocusGroup,children:r.jsx(RM,{...e,ref:t})})}));bj.displayName=Tu;var RM=d.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:s,loop:i=!1,dir:o,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:c,onEntryFocus:u,preventScrollOnEntryFocus:f=!1,...p}=e,h=d.useRef(null),v=pe(t,h),b=Eu(o),[x=null,y]=ss({prop:a,defaultProp:l,onChange:c}),[g,m]=d.useState(!1),w=at(u),j=wj(n),S=d.useRef(!1),[N,C]=d.useState(0);return d.useEffect(()=>{const I=h.current;if(I)return I.addEventListener(Ad,w),()=>I.removeEventListener(Ad,w)},[w]),r.jsx(IM,{scope:n,orientation:s,dir:b,loop:i,currentTabStopId:x,onItemFocus:d.useCallback(I=>y(I),[y]),onItemShiftTab:d.useCallback(()=>m(!0),[]),onFocusableItemAdd:d.useCallback(()=>C(I=>I+1),[]),onFocusableItemRemove:d.useCallback(()=>C(I=>I-1),[]),children:r.jsx(oe.div,{tabIndex:g||N===0?-1:0,"data-orientation":s,...p,ref:v,style:{outline:"none",...e.style},onMouseDown:z(e.onMouseDown,()=>{S.current=!0}),onFocus:z(e.onFocus,I=>{const R=!S.current;if(I.target===I.currentTarget&&R&&!g){const M=new CustomEvent(Ad,EM);if(I.currentTarget.dispatchEvent(M),!M.defaultPrevented){const k=j().filter(W=>W.focusable),F=k.find(W=>W.active),A=k.find(W=>W.id===x),Z=[F,A,...k].filter(Boolean).map(W=>W.ref.current);_j(Z,f)}}S.current=!1}),onBlur:z(e.onBlur,()=>m(!1))})})}),jj="RovingFocusGroupItem",Sj=d.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:s=!0,active:i=!1,tabStopId:o,...a}=e,l=Mn(),c=o||l,u=PM(jj,n),f=u.currentTabStopId===c,p=wj(n),{onFocusableItemAdd:h,onFocusableItemRemove:v}=u;return d.useEffect(()=>{if(s)return h(),()=>v()},[s,h,v]),r.jsx(hf.ItemSlot,{scope:n,id:c,focusable:s,active:i,children:r.jsx(oe.span,{tabIndex:f?0:-1,"data-orientation":u.orientation,...a,ref:t,onMouseDown:z(e.onMouseDown,b=>{s?u.onItemFocus(c):b.preventDefault()}),onFocus:z(e.onFocus,()=>u.onItemFocus(c)),onKeyDown:z(e.onKeyDown,b=>{if(b.key==="Tab"&&b.shiftKey){u.onItemShiftTab();return}if(b.target!==b.currentTarget)return;const x=OM(b,u.orientation,u.dir);if(x!==void 0){if(b.metaKey||b.ctrlKey||b.altKey||b.shiftKey)return;b.preventDefault();let g=p().filter(m=>m.focusable).map(m=>m.ref.current);if(x==="last")g.reverse();else if(x==="prev"||x==="next"){x==="prev"&&g.reverse();const m=g.indexOf(b.currentTarget);g=u.loop?LM(g,m+1):g.slice(m+1)}setTimeout(()=>_j(g))}})})})});Sj.displayName=jj;var MM={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function DM(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function OM(e,t,n){const s=DM(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(s))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(s)))return MM[s]}function _j(e,t=!1){const n=document.activeElement;for(const s of e)if(s===n||(s.focus({preventScroll:t}),document.activeElement!==n))return}function LM(e,t){return e.map((n,s)=>e[(t+s)%e.length])}var Nj=bj,Cj=Sj,om="Tabs",[FM,AL]=Wt(om,[Au]),kj=Au(),[UM,am]=FM(om),Ej=d.forwardRef((e,t)=>{const{__scopeTabs:n,value:s,onValueChange:i,defaultValue:o,orientation:a="horizontal",dir:l,activationMode:c="automatic",...u}=e,f=Eu(l),[p,h]=ss({prop:s,onChange:i,defaultProp:o});return r.jsx(UM,{scope:n,baseId:Mn(),value:p,onValueChange:h,orientation:a,dir:f,activationMode:c,children:r.jsx(oe.div,{dir:f,"data-orientation":a,...u,ref:t})})});Ej.displayName=om;var Tj="TabsList",Aj=d.forwardRef((e,t)=>{const{__scopeTabs:n,loop:s=!0,...i}=e,o=am(Tj,n),a=kj(n);return r.jsx(Nj,{asChild:!0,...a,orientation:o.orientation,dir:o.dir,loop:s,children:r.jsx(oe.div,{role:"tablist","aria-orientation":o.orientation,...i,ref:t})})});Aj.displayName=Tj;var Ij="TabsTrigger",Pj=d.forwardRef((e,t)=>{const{__scopeTabs:n,value:s,disabled:i=!1,...o}=e,a=am(Ij,n),l=kj(n),c=Dj(a.baseId,s),u=Oj(a.baseId,s),f=s===a.value;return r.jsx(Cj,{asChild:!0,...l,focusable:!i,active:f,children:r.jsx(oe.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":u,"data-state":f?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:c,...o,ref:t,onMouseDown:z(e.onMouseDown,p=>{!i&&p.button===0&&p.ctrlKey===!1?a.onValueChange(s):p.preventDefault()}),onKeyDown:z(e.onKeyDown,p=>{[" ","Enter"].includes(p.key)&&a.onValueChange(s)}),onFocus:z(e.onFocus,()=>{const p=a.activationMode!=="manual";!f&&!i&&p&&a.onValueChange(s)})})})});Pj.displayName=Ij;var Rj="TabsContent",Mj=d.forwardRef((e,t)=>{const{__scopeTabs:n,value:s,forceMount:i,children:o,...a}=e,l=am(Rj,n),c=Dj(l.baseId,s),u=Oj(l.baseId,s),f=s===l.value,p=d.useRef(f);return d.useEffect(()=>{const h=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(h)},[]),r.jsx(tn,{present:i||f,children:({present:h})=>r.jsx(oe.div,{"data-state":f?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!h,id:u,tabIndex:0,...a,ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0},children:h&&o})})});Mj.displayName=Rj;function Dj(e,t){return`${e}-trigger-${t}`}function Oj(e,t){return`${e}-content-${t}`}var $M=Ej,Lj=Aj,Fj=Pj,Uj=Mj;const Dr=$M,Ys=d.forwardRef(({className:e,...t},n)=>r.jsx(Lj,{ref:n,className:Q("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));Ys.displayName=Lj.displayName;const Ae=d.forwardRef(({className:e,...t},n)=>r.jsx(Fj,{ref:n,className:Q("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",e),...t}));Ae.displayName=Fj.displayName;const Ie=d.forwardRef(({className:e,...t},n)=>r.jsx(Uj,{ref:n,className:Q("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));Ie.displayName=Uj.displayName;var Id="focusScope.autoFocusOnMount",Pd="focusScope.autoFocusOnUnmount",Xx={bubbles:!1,cancelable:!0},zM="FocusScope",Iu=d.forwardRef((e,t)=>{const{loop:n=!1,trapped:s=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...a}=e,[l,c]=d.useState(null),u=at(i),f=at(o),p=d.useRef(null),h=pe(t,x=>c(x)),v=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(s){let x=function(w){if(v.paused||!l)return;const j=w.target;l.contains(j)?p.current=j:ws(p.current,{select:!0})},y=function(w){if(v.paused||!l)return;const j=w.relatedTarget;j!==null&&(l.contains(j)||ws(p.current,{select:!0}))},g=function(w){if(document.activeElement===document.body)for(const S of w)S.removedNodes.length>0&&ws(l)};document.addEventListener("focusin",x),document.addEventListener("focusout",y);const m=new MutationObserver(g);return l&&m.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",x),document.removeEventListener("focusout",y),m.disconnect()}}},[s,l,v.paused]),d.useEffect(()=>{if(l){ev.add(v);const x=document.activeElement;if(!l.contains(x)){const g=new CustomEvent(Id,Xx);l.addEventListener(Id,u),l.dispatchEvent(g),g.defaultPrevented||(BM(GM($j(l)),{select:!0}),document.activeElement===x&&ws(l))}return()=>{l.removeEventListener(Id,u),setTimeout(()=>{const g=new CustomEvent(Pd,Xx);l.addEventListener(Pd,f),l.dispatchEvent(g),g.defaultPrevented||ws(x??document.body,{select:!0}),l.removeEventListener(Pd,f),ev.remove(v)},0)}}},[l,u,f,v]);const b=d.useCallback(x=>{if(!n&&!s||v.paused)return;const y=x.key==="Tab"&&!x.altKey&&!x.ctrlKey&&!x.metaKey,g=document.activeElement;if(y&&g){const m=x.currentTarget,[w,j]=HM(m);w&&j?!x.shiftKey&&g===j?(x.preventDefault(),n&&ws(w,{select:!0})):x.shiftKey&&g===w&&(x.preventDefault(),n&&ws(j,{select:!0})):g===m&&x.preventDefault()}},[n,s,v.paused]);return r.jsx(oe.div,{tabIndex:-1,...a,ref:h,onKeyDown:b})});Iu.displayName=zM;function BM(e,{select:t=!1}={}){const n=document.activeElement;for(const s of e)if(ws(s,{select:t}),document.activeElement!==n)return}function HM(e){const t=$j(e),n=Zx(t,e),s=Zx(t.reverse(),e);return[n,s]}function $j(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const i=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||i?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Zx(e,t){for(const n of e)if(!WM(n,{upTo:t}))return n}function WM(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function VM(e){return e instanceof HTMLInputElement&&"select"in e}function ws(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&VM(e)&&t&&e.select()}}var ev=KM();function KM(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=tv(e,t),e.unshift(t)},remove(t){var n;e=tv(e,t),(n=e[0])==null||n.resume()}}}function tv(e,t){const n=[...e],s=n.indexOf(t);return s!==-1&&n.splice(s,1),n}function GM(e){return e.filter(t=>t.tagName!=="A")}var Rd=0;function lm(){d.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??nv()),document.body.insertAdjacentElement("beforeend",e[1]??nv()),Rd++,()=>{Rd===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Rd--}},[])}function nv(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var ic="right-scroll-bar-position",oc="width-before-scroll-bar",qM="with-scroll-bars-hidden",QM="--removed-body-scroll-bar-size";function Md(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function JM(e,t){var n=d.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(s){var i=n.value;i!==s&&(n.value=s,n.callback(s,i))}}}})[0];return n.callback=t,n.facade}var YM=typeof window<"u"?d.useLayoutEffect:d.useEffect,sv=new WeakMap;function XM(e,t){var n=JM(null,function(s){return e.forEach(function(i){return Md(i,s)})});return YM(function(){var s=sv.get(n);if(s){var i=new Set(s),o=new Set(e),a=n.current;i.forEach(function(l){o.has(l)||Md(l,null)}),o.forEach(function(l){i.has(l)||Md(l,a)})}sv.set(n,e)},[e]),n}function ZM(e){return e}function eD(e,t){t===void 0&&(t=ZM);var n=[],s=!1,i={read:function(){if(s)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var a=t(o,s);return n.push(a),function(){n=n.filter(function(l){return l!==a})}},assignSyncMedium:function(o){for(s=!0;n.length;){var a=n;n=[],a.forEach(o)}n={push:function(l){return o(l)},filter:function(){return n}}},assignMedium:function(o){s=!0;var a=[];if(n.length){var l=n;n=[],l.forEach(o),a=n}var c=function(){var f=a;a=[],f.forEach(o)},u=function(){return Promise.resolve().then(c)};u(),n={push:function(f){a.push(f),u()},filter:function(f){return a=a.filter(f),n}}}};return i}function tD(e){e===void 0&&(e={});var t=eD(null);return t.options=En({async:!0,ssr:!1},e),t}var zj=function(e){var t=e.sideCar,n=Qa(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var s=t.read();if(!s)throw new Error("Sidecar medium not found");return d.createElement(s,En({},n))};zj.isSideCarExport=!0;function nD(e,t){return e.useMedium(t),zj}var Bj=tD(),Dd=function(){},Pu=d.forwardRef(function(e,t){var n=d.useRef(null),s=d.useState({onScrollCapture:Dd,onWheelCapture:Dd,onTouchMoveCapture:Dd}),i=s[0],o=s[1],a=e.forwardProps,l=e.children,c=e.className,u=e.removeScrollBar,f=e.enabled,p=e.shards,h=e.sideCar,v=e.noIsolation,b=e.inert,x=e.allowPinchZoom,y=e.as,g=y===void 0?"div":y,m=e.gapMode,w=Qa(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),j=h,S=XM([n,t]),N=En(En({},w),i);return d.createElement(d.Fragment,null,f&&d.createElement(j,{sideCar:Bj,removeScrollBar:u,shards:p,noIsolation:v,inert:b,setCallbacks:o,allowPinchZoom:!!x,lockRef:n,gapMode:m}),a?d.cloneElement(d.Children.only(l),En(En({},N),{ref:S})):d.createElement(g,En({},N,{className:c,ref:S}),l))});Pu.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Pu.classNames={fullWidth:oc,zeroRight:ic};var sD=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function rD(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=sD();return t&&e.setAttribute("nonce",t),e}function iD(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function oD(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var aD=function(){var e=0,t=null;return{add:function(n){e==0&&(t=rD())&&(iD(t,n),oD(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},lD=function(){var e=aD();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Hj=function(){var e=lD(),t=function(n){var s=n.styles,i=n.dynamic;return e(s,i),null};return t},cD={left:0,top:0,right:0,gap:0},Od=function(e){return parseInt(e||"",10)||0},uD=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],s=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[Od(n),Od(s),Od(i)]},dD=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return cD;var t=uD(e),n=document.documentElement.clientWidth,s=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,s-n+t[2]-t[0])}},hD=Hj(),Mi="data-scroll-locked",fD=function(e,t,n,s){var i=e.left,o=e.top,a=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(qM,` {
   overflow: hidden `).concat(s,`;
   padding-right: `).concat(l,"px ").concat(s,`;
  }
  body[`).concat(Mi,`] {
    overflow: hidden `).concat(s,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(s,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(s,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(s,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ic,` {
    right: `).concat(l,"px ").concat(s,`;
  }
  
  .`).concat(oc,` {
    margin-right: `).concat(l,"px ").concat(s,`;
  }
  
  .`).concat(ic," .").concat(ic,` {
    right: 0 `).concat(s,`;
  }
  
  .`).concat(oc," .").concat(oc,` {
    margin-right: 0 `).concat(s,`;
  }
  
  body[`).concat(Mi,`] {
    `).concat(QM,": ").concat(l,`px;
  }
`)},rv=function(){var e=parseInt(document.body.getAttribute(Mi)||"0",10);return isFinite(e)?e:0},pD=function(){d.useEffect(function(){return document.body.setAttribute(Mi,(rv()+1).toString()),function(){var e=rv()-1;e<=0?document.body.removeAttribute(Mi):document.body.setAttribute(Mi,e.toString())}},[])},mD=function(e){var t=e.noRelative,n=e.noImportant,s=e.gapMode,i=s===void 0?"margin":s;pD();var o=d.useMemo(function(){return dD(i)},[i]);return d.createElement(hD,{styles:fD(o,!t,i,n?"":"!important")})},ff=!1;if(typeof window<"u")try{var Ml=Object.defineProperty({},"passive",{get:function(){return ff=!0,!0}});window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{ff=!1}var ri=ff?{passive:!1}:!1,gD=function(e){return e.tagName==="TEXTAREA"},Wj=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!gD(e)&&n[t]==="visible")},xD=function(e){return Wj(e,"overflowY")},vD=function(e){return Wj(e,"overflowX")},iv=function(e,t){var n=t.ownerDocument,s=t;do{typeof ShadowRoot<"u"&&s instanceof ShadowRoot&&(s=s.host);var i=Vj(e,s);if(i){var o=Kj(e,s),a=o[1],l=o[2];if(a>l)return!0}s=s.parentNode}while(s&&s!==n.body);return!1},yD=function(e){var t=e.scrollTop,n=e.scrollHeight,s=e.clientHeight;return[t,n,s]},wD=function(e){var t=e.scrollLeft,n=e.scrollWidth,s=e.clientWidth;return[t,n,s]},Vj=function(e,t){return e==="v"?xD(t):vD(t)},Kj=function(e,t){return e==="v"?yD(t):wD(t)},bD=function(e,t){return e==="h"&&t==="rtl"?-1:1},jD=function(e,t,n,s,i){var o=bD(e,window.getComputedStyle(t).direction),a=o*s,l=n.target,c=t.contains(l),u=!1,f=a>0,p=0,h=0;do{var v=Kj(e,l),b=v[0],x=v[1],y=v[2],g=x-y-o*b;(b||g)&&Vj(e,l)&&(p+=g,h+=b),l instanceof ShadowRoot?l=l.host:l=l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return(f&&(Math.abs(p)<1||!i)||!f&&(Math.abs(h)<1||!i))&&(u=!0),u},Dl=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ov=function(e){return[e.deltaX,e.deltaY]},av=function(e){return e&&"current"in e?e.current:e},SD=function(e,t){return e[0]===t[0]&&e[1]===t[1]},_D=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},ND=0,ii=[];function CD(e){var t=d.useRef([]),n=d.useRef([0,0]),s=d.useRef(),i=d.useState(ND++)[0],o=d.useState(Hj)[0],a=d.useRef(e);d.useEffect(function(){a.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var x=v2([e.lockRef.current],(e.shards||[]).map(av),!0).filter(Boolean);return x.forEach(function(y){return y.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),x.forEach(function(y){return y.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=d.useCallback(function(x,y){if("touches"in x&&x.touches.length===2||x.type==="wheel"&&x.ctrlKey)return!a.current.allowPinchZoom;var g=Dl(x),m=n.current,w="deltaX"in x?x.deltaX:m[0]-g[0],j="deltaY"in x?x.deltaY:m[1]-g[1],S,N=x.target,C=Math.abs(w)>Math.abs(j)?"h":"v";if("touches"in x&&C==="h"&&N.type==="range")return!1;var I=iv(C,N);if(!I)return!0;if(I?S=C:(S=C==="v"?"h":"v",I=iv(C,N)),!I)return!1;if(!s.current&&"changedTouches"in x&&(w||j)&&(s.current=S),!S)return!0;var R=s.current||S;return jD(R,y,x,R==="h"?w:j,!0)},[]),c=d.useCallback(function(x){var y=x;if(!(!ii.length||ii[ii.length-1]!==o)){var g="deltaY"in y?ov(y):Dl(y),m=t.current.filter(function(S){return S.name===y.type&&(S.target===y.target||y.target===S.shadowParent)&&SD(S.delta,g)})[0];if(m&&m.should){y.cancelable&&y.preventDefault();return}if(!m){var w=(a.current.shards||[]).map(av).filter(Boolean).filter(function(S){return S.contains(y.target)}),j=w.length>0?l(y,w[0]):!a.current.noIsolation;j&&y.cancelable&&y.preventDefault()}}},[]),u=d.useCallback(function(x,y,g,m){var w={name:x,delta:y,target:g,should:m,shadowParent:kD(g)};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(j){return j!==w})},1)},[]),f=d.useCallback(function(x){n.current=Dl(x),s.current=void 0},[]),p=d.useCallback(function(x){u(x.type,ov(x),x.target,l(x,e.lockRef.current))},[]),h=d.useCallback(function(x){u(x.type,Dl(x),x.target,l(x,e.lockRef.current))},[]);d.useEffect(function(){return ii.push(o),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:h}),document.addEventListener("wheel",c,ri),document.addEventListener("touchmove",c,ri),document.addEventListener("touchstart",f,ri),function(){ii=ii.filter(function(x){return x!==o}),document.removeEventListener("wheel",c,ri),document.removeEventListener("touchmove",c,ri),document.removeEventListener("touchstart",f,ri)}},[]);var v=e.removeScrollBar,b=e.inert;return d.createElement(d.Fragment,null,b?d.createElement(o,{styles:_D(i)}):null,v?d.createElement(mD,{gapMode:e.gapMode}):null)}function kD(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const ED=nD(Bj,CD);var Ru=d.forwardRef(function(e,t){return d.createElement(Pu,En({},e,{ref:t,sideCar:ED}))});Ru.classNames=Pu.classNames;var TD=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},oi=new WeakMap,Ol=new WeakMap,Ll={},Ld=0,Gj=function(e){return e&&(e.host||Gj(e.parentNode))},AD=function(e,t){return t.map(function(n){if(e.contains(n))return n;var s=Gj(n);return s&&e.contains(s)?s:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},ID=function(e,t,n,s){var i=AD(t,Array.isArray(e)?e:[e]);Ll[n]||(Ll[n]=new WeakMap);var o=Ll[n],a=[],l=new Set,c=new Set(i),u=function(p){!p||l.has(p)||(l.add(p),u(p.parentNode))};i.forEach(u);var f=function(p){!p||c.has(p)||Array.prototype.forEach.call(p.children,function(h){if(l.has(h))f(h);else try{var v=h.getAttribute(s),b=v!==null&&v!=="false",x=(oi.get(h)||0)+1,y=(o.get(h)||0)+1;oi.set(h,x),o.set(h,y),a.push(h),x===1&&b&&Ol.set(h,!0),y===1&&h.setAttribute(n,"true"),b||h.setAttribute(s,"true")}catch(g){console.error("aria-hidden: cannot operate on ",h,g)}})};return f(t),l.clear(),Ld++,function(){a.forEach(function(p){var h=oi.get(p)-1,v=o.get(p)-1;oi.set(p,h),o.set(p,v),h||(Ol.has(p)||p.removeAttribute(s),Ol.delete(p)),v||p.removeAttribute(n)}),Ld--,Ld||(oi=new WeakMap,oi=new WeakMap,Ol=new WeakMap,Ll={})}},cm=function(e,t,n){n===void 0&&(n="data-aria-hidden");var s=Array.from(Array.isArray(e)?e:[e]),i=TD(e);return i?(s.push.apply(s,Array.from(i.querySelectorAll("[aria-live]"))),ID(s,i,n,"aria-hidden")):function(){return null}},um="Dialog",[qj,Qj]=Wt(um),[PD,yn]=qj(um),Jj=e=>{const{__scopeDialog:t,children:n,open:s,defaultOpen:i,onOpenChange:o,modal:a=!0}=e,l=d.useRef(null),c=d.useRef(null),[u=!1,f]=ss({prop:s,defaultProp:i,onChange:o});return r.jsx(PD,{scope:t,triggerRef:l,contentRef:c,contentId:Mn(),titleId:Mn(),descriptionId:Mn(),open:u,onOpenChange:f,onOpenToggle:d.useCallback(()=>f(p=>!p),[f]),modal:a,children:n})};Jj.displayName=um;var Yj="DialogTrigger",Xj=d.forwardRef((e,t)=>{const{__scopeDialog:n,...s}=e,i=yn(Yj,n),o=pe(t,i.triggerRef);return r.jsx(oe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":fm(i.open),...s,ref:o,onClick:z(e.onClick,i.onOpenToggle)})});Xj.displayName=Yj;var dm="DialogPortal",[RD,Zj]=qj(dm,{forceMount:void 0}),e1=e=>{const{__scopeDialog:t,forceMount:n,children:s,container:i}=e,o=yn(dm,t);return r.jsx(RD,{scope:t,forceMount:n,children:d.Children.map(s,a=>r.jsx(tn,{present:n||o.open,children:r.jsx(za,{asChild:!0,container:i,children:a})}))})};e1.displayName=dm;var Kc="DialogOverlay",t1=d.forwardRef((e,t)=>{const n=Zj(Kc,e.__scopeDialog),{forceMount:s=n.forceMount,...i}=e,o=yn(Kc,e.__scopeDialog);return o.modal?r.jsx(tn,{present:s||o.open,children:r.jsx(DD,{...i,ref:t})}):null});t1.displayName=Kc;var MD=Hr("DialogOverlay.RemoveScroll"),DD=d.forwardRef((e,t)=>{const{__scopeDialog:n,...s}=e,i=yn(Kc,n);return r.jsx(Ru,{as:MD,allowPinchZoom:!0,shards:[i.contentRef],children:r.jsx(oe.div,{"data-state":fm(i.open),...s,ref:t,style:{pointerEvents:"auto",...s.style}})})}),Gr="DialogContent",n1=d.forwardRef((e,t)=>{const n=Zj(Gr,e.__scopeDialog),{forceMount:s=n.forceMount,...i}=e,o=yn(Gr,e.__scopeDialog);return r.jsx(tn,{present:s||o.open,children:o.modal?r.jsx(OD,{...i,ref:t}):r.jsx(LD,{...i,ref:t})})});n1.displayName=Gr;var OD=d.forwardRef((e,t)=>{const n=yn(Gr,e.__scopeDialog),s=d.useRef(null),i=pe(t,n.contentRef,s);return d.useEffect(()=>{const o=s.current;if(o)return cm(o)},[]),r.jsx(s1,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:z(e.onCloseAutoFocus,o=>{var a;o.preventDefault(),(a=n.triggerRef.current)==null||a.focus()}),onPointerDownOutside:z(e.onPointerDownOutside,o=>{const a=o.detail.originalEvent,l=a.button===0&&a.ctrlKey===!0;(a.button===2||l)&&o.preventDefault()}),onFocusOutside:z(e.onFocusOutside,o=>o.preventDefault())})}),LD=d.forwardRef((e,t)=>{const n=yn(Gr,e.__scopeDialog),s=d.useRef(!1),i=d.useRef(!1);return r.jsx(s1,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var a,l;(a=e.onCloseAutoFocus)==null||a.call(e,o),o.defaultPrevented||(s.current||(l=n.triggerRef.current)==null||l.focus(),o.preventDefault()),s.current=!1,i.current=!1},onInteractOutside:o=>{var c,u;(c=e.onInteractOutside)==null||c.call(e,o),o.defaultPrevented||(s.current=!0,o.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const a=o.target;((u=n.triggerRef.current)==null?void 0:u.contains(a))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&i.current&&o.preventDefault()}})}),s1=d.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:s,onOpenAutoFocus:i,onCloseAutoFocus:o,...a}=e,l=yn(Gr,n),c=d.useRef(null),u=pe(t,c);return lm(),r.jsxs(r.Fragment,{children:[r.jsx(Iu,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:i,onUnmountAutoFocus:o,children:r.jsx(po,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":fm(l.open),...a,ref:u,onDismiss:()=>l.onOpenChange(!1)})}),r.jsxs(r.Fragment,{children:[r.jsx(UD,{titleId:l.titleId}),r.jsx(zD,{contentRef:c,descriptionId:l.descriptionId})]})]})}),hm="DialogTitle",r1=d.forwardRef((e,t)=>{const{__scopeDialog:n,...s}=e,i=yn(hm,n);return r.jsx(oe.h2,{id:i.titleId,...s,ref:t})});r1.displayName=hm;var i1="DialogDescription",o1=d.forwardRef((e,t)=>{const{__scopeDialog:n,...s}=e,i=yn(i1,n);return r.jsx(oe.p,{id:i.descriptionId,...s,ref:t})});o1.displayName=i1;var a1="DialogClose",l1=d.forwardRef((e,t)=>{const{__scopeDialog:n,...s}=e,i=yn(a1,n);return r.jsx(oe.button,{type:"button",...s,ref:t,onClick:z(e.onClick,()=>i.onOpenChange(!1))})});l1.displayName=a1;function fm(e){return e?"open":"closed"}var c1="DialogTitleWarning",[FD,u1]=dE(c1,{contentName:Gr,titleName:hm,docsSlug:"dialog"}),UD=({titleId:e})=>{const t=u1(c1),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return d.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},$D="DialogDescriptionWarning",zD=({contentRef:e,descriptionId:t})=>{const s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${u1($D).contentName}}.`;return d.useEffect(()=>{var o;const i=(o=e.current)==null?void 0:o.getAttribute("aria-describedby");t&&i&&(document.getElementById(t)||console.warn(s))},[s,e,t]),null},d1=Jj,h1=Xj,f1=e1,pm=t1,mm=n1,gm=r1,xm=o1,vm=l1;const Ft=d1,ir=h1,BD=f1,p1=d.forwardRef(({className:e,...t},n)=>r.jsx(pm,{ref:n,className:Q("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));p1.displayName=pm.displayName;const kt=d.forwardRef(({className:e,children:t,...n},s)=>r.jsxs(BD,{children:[r.jsx(p1,{}),r.jsxs(mm,{ref:s,className:Q("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,r.jsxs(vm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[r.jsx(yi,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));kt.displayName=mm.displayName;const Et=({className:e,...t})=>r.jsx("div",{className:Q("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});Et.displayName="DialogHeader";const wi=({className:e,...t})=>r.jsx("div",{className:Q("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});wi.displayName="DialogFooter";const Tt=d.forwardRef(({className:e,...t},n)=>r.jsx(gm,{ref:n,className:Q("text-lg font-semibold leading-none tracking-tight",e),...t}));Tt.displayName=gm.displayName;const At=d.forwardRef(({className:e,...t},n)=>r.jsx(xm,{ref:n,className:Q("text-sm text-muted-foreground",e),...t}));At.displayName=xm.displayName;const ne=d.forwardRef(({className:e,type:t,...n},s)=>r.jsx("input",{type:t,className:Q("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:s,...n}));ne.displayName="Input";var HD="Label",m1=d.forwardRef((e,t)=>r.jsx(oe.label,{...e,ref:t,onMouseDown:n=>{var i;n.target.closest("button, input, select, textarea")||((i=e.onMouseDown)==null||i.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));m1.displayName=HD;var g1=m1;const WD=Ha("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),U=d.forwardRef(({className:e,...t},n)=>r.jsx(g1,{ref:n,className:Q(WD(),e),...t}));U.displayName=g1.displayName;const In=d.forwardRef(({className:e,...t},n)=>r.jsx("textarea",{className:Q("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:n,...t}));In.displayName="Textarea";const ls=d.forwardRef(({className:e,...t},n)=>r.jsx("div",{className:"relative w-full overflow-auto",children:r.jsx("table",{ref:n,className:Q("w-full caption-bottom text-sm",e),...t})}));ls.displayName="Table";const cs=d.forwardRef(({className:e,...t},n)=>r.jsx("thead",{ref:n,className:Q("[&_tr]:border-b",e),...t}));cs.displayName="TableHeader";const us=d.forwardRef(({className:e,...t},n)=>r.jsx("tbody",{ref:n,className:Q("[&_tr:last-child]:border-0",e),...t}));us.displayName="TableBody";const VD=d.forwardRef(({className:e,...t},n)=>r.jsx("tfoot",{ref:n,className:Q("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t}));VD.displayName="TableFooter";const Ze=d.forwardRef(({className:e,...t},n)=>r.jsx("tr",{ref:n,className:Q("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));Ze.displayName="TableRow";const se=d.forwardRef(({className:e,...t},n)=>r.jsx("th",{ref:n,className:Q("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));se.displayName="TableHead";const re=d.forwardRef(({className:e,...t},n)=>r.jsx("td",{ref:n,className:Q("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));re.displayName="TableCell";const KD=d.forwardRef(({className:e,...t},n)=>r.jsx("caption",{ref:n,className:Q("mt-4 text-sm text-muted-foreground",e),...t}));KD.displayName="TableCaption";function GD(){const[e,t]=d.useState(!1),[n,s]=d.useState(!1),[i,o]=d.useState(null),[a,l]=d.useState(""),[c,u]=d.useState(""),[f,p]=d.useState({username:"",email:"",password:"",expiresAt:"",hwid:""}),[h,v]=d.useState(!1),[b,x]=d.useState(!1),[y,g]=d.useState(null),[m,w]=d.useState(null),[j,S]=d.useState(new Set),{toast:N}=vn(),{user:C}=ei(),{theme:I,toggleTheme:R}=yo(),M=hs(),{data:k}=Je({queryKey:["/api/dashboard/stats"]}),{data:F=[]}=Je({queryKey:["/api/applications"]}),{data:A=[]}=Je({queryKey:["/api/applications",i==null?void 0:i.id,"users"],enabled:!!i}),D=_e({mutationFn:async E=>Ne("/api/applications","POST"),onSuccess:()=>{M.refetchQueries({queryKey:["/api/applications"]}),M.refetchQueries({queryKey:["/api/dashboard/stats"]}),l(""),u(""),t(!1),N({title:"Success",description:"Application created successfully"})},onError:E=>{N({title:"Error",description:E.message||"Failed to create application",variant:"destructive"})}}),Z=_e({mutationFn:async E=>{if(!i)throw new Error("No application selected");return{username:E.username,email:E.email,password:E.password,...E.expiresAt&&{expiresAt:new Date(E.expiresAt).toISOString()},...E.hwid&&{hwid:E.hwid}},Ne(`/api/applications/${i.id}/users`,"POST")},onSuccess:()=>{M.invalidateQueries({queryKey:["/api/applications",i==null?void 0:i.id,"users"]}),M.invalidateQueries({queryKey:["/api/dashboard/stats"]}),p({username:"",email:"",password:"",expiresAt:"",hwid:""}),s(!1),N({title:"Success",description:"User created successfully"})},onError:E=>{N({title:"Error",description:E.message||"Failed to create user",variant:"destructive"})}}),W=_e({mutationFn:async E=>Ne(`/api/applications/${E.id}`,"PUT",E.updates),onSuccess:()=>{M.invalidateQueries({queryKey:["/api/applications"]}),v(!1),g(null),N({title:"Success",description:"Application updated successfully"})},onError:E=>{N({title:"Error",description:E.message||"Failed to update application",variant:"destructive"})}}),P=_e({mutationFn:async E=>Ne(`/api/applications/${E.appId}/users/${E.userId}`,"PUT",E.updates),onSuccess:()=>{M.invalidateQueries({queryKey:["/api/applications",i==null?void 0:i.id,"users"]}),x(!1),w(null),N({title:"Success",description:"User updated successfully"})},onError:E=>{N({title:"Error",description:E.message||"Failed to update user",variant:"destructive"})}}),T=_e({mutationFn:async E=>Ne(`/api/applications/${E.appId}/users/${E.userId}/pause`,"PUT"),onSuccess:()=>{M.invalidateQueries({queryKey:["/api/applications",i==null?void 0:i.id,"users"]}),N({title:"Success",description:"User paused successfully"})},onError:E=>{N({title:"Error",description:E.message||"Failed to pause user",variant:"destructive"})}}),L=_e({mutationFn:async E=>Ne(`/api/applications/${E.appId}/users/${E.userId}/unpause`,"PUT"),onSuccess:()=>{M.invalidateQueries({queryKey:["/api/applications",i==null?void 0:i.id,"users"]}),N({title:"Success",description:"User unpaused successfully"})},onError:E=>{N({title:"Error",description:E.message||"Failed to unpause user",variant:"destructive"})}}),B=_e({mutationFn:async E=>Ne(`/api/applications/${E.appId}/users/${E.userId}`,"DELETE"),onSuccess:()=>{M.invalidateQueries({queryKey:["/api/applications",i==null?void 0:i.id,"users"]}),N({title:"Success",description:"User deleted successfully"})},onError:E=>{N({title:"Error",description:E.message||"Failed to delete user",variant:"destructive"})}}),ee=_e({mutationFn:async E=>Ne(`/api/applications/${E}`,"DELETE"),onSuccess:()=>{M.invalidateQueries({queryKey:["/api/applications"]}),M.invalidateQueries({queryKey:["/api/dashboard/stats"]}),i&&o(null),N({title:"Success",description:"Application deleted successfully"})},onError:E=>{N({title:"Error",description:E.message||"Failed to delete application",variant:"destructive"})}}),de=async()=>{if(!a.trim()){N({title:"Error",description:"Please enter an application name",variant:"destructive"});return}D.mutate({name:a,description:c})},ze=async()=>{if(!f.username.trim()||!f.email.trim()||!f.password.trim()){N({title:"Error",description:"Please fill in all required fields",variant:"destructive"});return}Z.mutate(f)},ke=E=>{navigator.clipboard.writeText(E),N({title:"Copied",description:"API key copied to clipboard"})},ct=E=>{const ce=new Set(j);ce.has(E)?ce.delete(E):ce.add(E),S(ce)},De=(E,ce)=>ce?E:E.substring(0,12)+"•".repeat(20)+E.substring(E.length-8),X=E=>new Date(E).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),xe=()=>{window.location.href="/api/logout"};return r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx("nav",{className:"phantom-nav fixed w-full top-0 z-50",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"flex justify-between h-16",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(Se,{className:"h-8 w-8 phantom-text mr-3"}),r.jsx("span",{className:"text-xl font-bold text-foreground",children:"Phantom Auth"})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(Re,{href:"/",children:r.jsx(O,{variant:"ghost",size:"sm",children:"Home"})}),r.jsx(Re,{href:"/docs",children:r.jsxs(O,{variant:"ghost",size:"sm",children:[r.jsx(iT,{className:"h-4 w-4 mr-2"}),"Docs"]})}),r.jsx(O,{variant:"ghost",size:"icon",onClick:R,className:"text-foreground hover:text-primary",children:I==="light"?r.jsx(no,{className:"h-5 w-5"}):r.jsx(so,{className:"h-5 w-5"})}),r.jsxs(O,{variant:"ghost",size:"sm",onClick:xe,children:[r.jsx(xu,{className:"h-4 w-4 mr-2"}),"Logout"]})]})]})})}),r.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 pt-24",children:[r.jsx("div",{className:"mb-8",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2",children:"Dashboard"}),r.jsxs("p",{className:"text-muted-foreground",children:["Welcome back, ",(C==null?void 0:C.firstName)||(C==null?void 0:C.email)||"User"]})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(Zo,{className:"h-5 w-5 text-yellow-500"}),r.jsx(ie,{variant:"secondary",className:"text-sm font-medium",children:(k==null?void 0:k.accountType)||"Premium"})]})]})}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[r.jsxs(H,{className:"phantom-stats-card",children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Applications"}),r.jsx(Se,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsxs(Y,{children:[r.jsx("div",{className:"text-2xl font-bold",children:(k==null?void 0:k.totalApplications)||0}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Total created"})]})]}),r.jsxs(H,{className:"phantom-stats-card",children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Total Users"}),r.jsx(xt,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsxs(Y,{children:[r.jsx("div",{className:"text-2xl font-bold",children:(k==null?void 0:k.totalUsers)||0}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Across all apps"})]})]}),r.jsxs(H,{className:"phantom-stats-card",children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Active Apps"}),r.jsx(qn,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsxs(Y,{children:[r.jsx("div",{className:"text-2xl font-bold success-color",children:(k==null?void 0:k.activeApplications)||0}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Currently active"})]})]}),r.jsxs(H,{className:"phantom-stats-card",children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Active Sessions"}),r.jsx(L0,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsxs(Y,{children:[r.jsx("div",{className:"text-2xl font-bold",children:(k==null?void 0:k.totalActiveSessions)||0}),r.jsx("p",{className:"text-xs text-muted-foreground",children:"Live connections"})]})]})]}),r.jsxs(Dr,{defaultValue:"applications",className:"space-y-6",children:[r.jsxs(Ys,{className:"grid w-full grid-cols-2",children:[r.jsx(Ae,{value:"applications",children:"Applications"}),r.jsxs(Ae,{value:"users",disabled:!i,children:["Users ",i&&`(${i.name})`]})]}),r.jsx(Ie,{value:"applications",children:r.jsxs(H,{className:"phantom-card",children:[r.jsx(K,{children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx(G,{children:"Applications"}),r.jsx(me,{children:"Create and manage your authentication applications"})]}),r.jsxs(Ft,{open:e,onOpenChange:t,children:[r.jsx(ir,{asChild:!0,children:r.jsxs(O,{className:"phantom-button",children:[r.jsx(An,{className:"h-4 w-4 mr-2"}),"New Application"]})}),r.jsxs(kt,{children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Create New Application"}),r.jsx(At,{children:"Create a new application to get an API key for authentication."})]}),r.jsxs("div",{className:"grid gap-4 py-4",children:[r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"name",className:"text-right",children:"Name"}),r.jsx(ne,{id:"name",value:a,onChange:E=>l(E.target.value),className:"col-span-3",placeholder:"e.g., My Game App"})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"description",className:"text-right",children:"Description"}),r.jsx(In,{id:"description",value:c,onChange:E=>u(E.target.value),className:"col-span-3",placeholder:"Optional description..."})]})]}),r.jsx(wi,{children:r.jsx(O,{onClick:de,className:"phantom-button",disabled:D.isPending,children:D.isPending?"Creating...":"Create Application"})})]})]})]})}),r.jsx(Y,{children:F.length===0?r.jsxs("div",{className:"text-center py-8",children:[r.jsx(Se,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No Applications"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Create your first application to get started"}),r.jsxs(O,{onClick:()=>t(!0),className:"phantom-button",children:[r.jsx(An,{className:"h-4 w-4 mr-2"}),"Create Application"]})]}):r.jsxs(ls,{children:[r.jsx(cs,{children:r.jsxs(Ze,{children:[r.jsx(se,{children:"Name"}),r.jsx(se,{children:"API Key"}),r.jsx(se,{children:"Status"}),r.jsx(se,{children:"Created"}),r.jsx(se,{children:"Actions"})]})}),r.jsx(us,{children:F.map(E=>r.jsxs(Ze,{children:[r.jsx(re,{children:r.jsxs("div",{children:[r.jsx("div",{className:"font-medium",children:E.name}),E.description&&r.jsx("div",{className:"text-sm text-muted-foreground",children:E.description})]})}),r.jsx(re,{className:"font-mono text-sm",children:De(E.apiKey,j.has(E.id))}),r.jsx(re,{children:r.jsx(ie,{variant:E.isActive?"default":"secondary",children:E.isActive?"Active":"Inactive"})}),r.jsx(re,{children:X(E.createdAt)}),r.jsx(re,{children:r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>ct(E.id),children:j.has(E.id)?r.jsx(F0,{className:"h-4 w-4"}):r.jsx(Ep,{className:"h-4 w-4"})}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>ke(E.apiKey),children:r.jsx(We,{className:"h-4 w-4"})}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>{g(E),v(!0)},title:"Edit Application",children:r.jsx(Rc,{className:"h-4 w-4"})}),r.jsx(Re,{href:`/app/${E.id}`,children:r.jsx(O,{variant:"ghost",size:"sm",title:"Manage Application",children:r.jsx(Tp,{className:"h-4 w-4"})})}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>ee.mutate(E.id),className:"text-red-600 hover:text-red-700",title:"Delete Application",children:r.jsx(Wr,{className:"h-4 w-4"})})]})})]},E.id))})]})})]})}),r.jsx(Ie,{value:"users",children:r.jsxs(H,{className:"phantom-card",children:[r.jsx(K,{children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs(G,{children:["Users - ",i==null?void 0:i.name]}),r.jsx(me,{children:"Manage users for this application with time limits"})]}),r.jsxs(Ft,{open:n,onOpenChange:s,children:[r.jsx(ir,{asChild:!0,children:r.jsxs(O,{className:"phantom-button",disabled:!i,children:[r.jsx(An,{className:"h-4 w-4 mr-2"}),"Add User"]})}),r.jsxs(kt,{children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Add New User"}),r.jsxs(At,{children:["Create a new user for ",i==null?void 0:i.name," with optional expiration date."]})]}),r.jsxs("div",{className:"grid gap-4 py-4",children:[r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"username",className:"text-right",children:"Username"}),r.jsx(ne,{id:"username",value:f.username,onChange:E=>p({...f,username:E.target.value}),className:"col-span-3",placeholder:"johndoe"})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"email",className:"text-right",children:"Email"}),r.jsx(ne,{id:"email",type:"email",value:f.email,onChange:E=>p({...f,email:E.target.value}),className:"col-span-3",placeholder:"john@example.com"})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"password",className:"text-right",children:"Password"}),r.jsx(ne,{id:"password",type:"password",value:f.password,onChange:E=>p({...f,password:E.target.value}),className:"col-span-3",placeholder:"••••••••"})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"expiresAt",className:"text-right",children:"Expires At"}),r.jsx(ne,{id:"expiresAt",type:"datetime-local",value:f.expiresAt,onChange:E=>p({...f,expiresAt:E.target.value}),className:"col-span-3"})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"hwid",className:"text-right",children:"Hardware ID"}),r.jsx(ne,{id:"hwid",value:f.hwid,onChange:E=>p({...f,hwid:E.target.value}),className:"col-span-3",placeholder:"Optional - will be set on first login if HWID lock enabled"})]})]}),r.jsx(wi,{children:r.jsx(O,{onClick:ze,className:"phantom-button",disabled:Z.isPending,children:Z.isPending?"Creating...":"Create User"})})]})]})]})}),r.jsx(Y,{children:i?A.length===0?r.jsxs("div",{className:"text-center py-8",children:[r.jsx(xt,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"No Users"}),r.jsxs("p",{className:"text-muted-foreground mb-4",children:["Create your first user for ",i.name]}),r.jsxs(O,{onClick:()=>s(!0),className:"phantom-button",children:[r.jsx(An,{className:"h-4 w-4 mr-2"}),"Add User"]})]}):r.jsxs(ls,{children:[r.jsx(cs,{children:r.jsxs(Ze,{children:[r.jsx(se,{children:"Username"}),r.jsx(se,{children:"Email"}),r.jsx(se,{children:"Status"}),r.jsx(se,{children:"HWID Lock"}),r.jsx(se,{children:"Login Attempts"}),r.jsx(se,{children:"Expires"}),r.jsx(se,{children:"Last Login"}),r.jsx(se,{children:"Actions"})]})}),r.jsx(us,{children:A.map(E=>{const ce=E.expiresAt&&new Date>new Date(E.expiresAt);return r.jsxs(Ze,{children:[r.jsx(re,{className:"font-medium",children:E.username}),r.jsx(re,{children:E.email}),r.jsx(re,{children:r.jsx("div",{className:"flex items-center space-x-2",children:r.jsx(ie,{variant:E.isActive&&!ce&&!E.isPaused?"default":"secondary",className:ce?"text-red-600":E.isPaused?"text-orange-600":"",children:ce?"Expired":E.isPaused?"Paused":E.isActive?"Active":"Inactive"})})}),r.jsx(re,{children:r.jsx("div",{className:"flex items-center space-x-2",children:i!=null&&i.hwidLockEnabled?E.hwid?r.jsxs(ie,{variant:"default",className:"text-xs",children:[r.jsx(Rr,{className:"h-3 w-3 mr-1"}),"Locked"]}):r.jsxs(ie,{variant:"secondary",className:"text-xs",children:[r.jsx(xT,{className:"h-3 w-3 mr-1"}),"Not Set"]}):r.jsx(ie,{variant:"outline",className:"text-xs",children:"Disabled"})})}),r.jsx(re,{children:r.jsxs("div",{className:"flex items-center space-x-1",children:[r.jsx("span",{className:E.loginAttempts>5?"text-red-600 font-medium":"",children:E.loginAttempts}),E.loginAttempts>0&&r.jsx(Mc,{className:"h-3 w-3 text-yellow-500"})]})}),r.jsx(re,{children:E.expiresAt?r.jsxs("div",{className:"flex items-center",children:[r.jsx(qh,{className:"h-4 w-4 mr-1 text-muted-foreground"}),X(E.expiresAt)]}):r.jsx("span",{className:"text-muted-foreground",children:"Never"})}),r.jsx(re,{children:E.lastLogin?X(E.lastLogin):r.jsx("span",{className:"text-muted-foreground",children:"Never"})}),r.jsx(re,{children:r.jsxs("div",{className:"flex items-center space-x-1",children:[r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>{w(E),x(!0)},title:"Edit User",children:r.jsx(Rc,{className:"h-4 w-4"})}),E.isPaused?r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>L.mutate({appId:i.id,userId:E.id}),title:"Unpause User",className:"text-green-600 hover:text-green-700",children:r.jsx($0,{className:"h-4 w-4"})}):r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>T.mutate({appId:i.id,userId:E.id}),title:"Pause User",className:"text-orange-600 hover:text-orange-700",children:r.jsx(U0,{className:"h-4 w-4"})}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>B.mutate({appId:i.id,userId:E.id}),title:"Delete User",className:"text-red-600 hover:text-red-700",children:r.jsx(Wr,{className:"h-4 w-4"})})]})})]},E.id)})})]}):r.jsxs("div",{className:"text-center py-8",children:[r.jsx(xt,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-medium text-foreground mb-2",children:"Select an Application"}),r.jsx("p",{className:"text-muted-foreground",children:"Choose an application from the Applications tab to manage its users"})]})})]})})]}),r.jsx(Ft,{open:h,onOpenChange:v,children:r.jsxs(kt,{className:"max-w-4xl max-h-[90vh] overflow-y-auto",children:[r.jsxs(Et,{children:[r.jsxs(Tt,{children:["Edit Application - ",y==null?void 0:y.name]}),r.jsx(At,{children:"Configure application settings, version control, HWID locking, and custom messages."})]}),y&&r.jsx("div",{className:"grid gap-6 py-4",children:r.jsxs(Dr,{defaultValue:"basic",className:"w-full",children:[r.jsxs(Ys,{className:"grid w-full grid-cols-3",children:[r.jsx(Ae,{value:"basic",children:"Basic Settings"}),r.jsx(Ae,{value:"security",children:"Security & HWID"}),r.jsx(Ae,{value:"messages",children:"Custom Messages"})]}),r.jsxs(Ie,{value:"basic",className:"space-y-4",children:[r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"edit-name",className:"text-right",children:"Name"}),r.jsx(ne,{id:"edit-name",defaultValue:y.name,className:"col-span-3",onChange:E=>g({...y,name:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"edit-description",className:"text-right",children:"Description"}),r.jsx(In,{id:"edit-description",defaultValue:y.description||"",className:"col-span-3",onChange:E=>g({...y,description:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsxs(U,{htmlFor:"edit-version",className:"text-right",children:[r.jsx(dx,{className:"h-4 w-4 mr-1 inline"}),"Version"]}),r.jsx(ne,{id:"edit-version",defaultValue:y.version,placeholder:"1.0.0",className:"col-span-3",onChange:E=>g({...y,version:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"edit-active",className:"text-right",children:"Active Status"}),r.jsxs("div",{className:"col-span-3 flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",id:"edit-active",checked:y.isActive,onChange:E=>g({...y,isActive:E.target.checked}),className:"h-4 w-4"}),r.jsx(U,{htmlFor:"edit-active",className:"text-sm",children:"Application is active"})]})]})]}),r.jsxs(Ie,{value:"security",className:"space-y-4",children:[r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsxs(U,{htmlFor:"edit-hwid-lock",className:"text-right",children:[r.jsx(Jh,{className:"h-4 w-4 mr-1 inline"}),"HWID Lock"]}),r.jsxs("div",{className:"col-span-3 flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",id:"edit-hwid-lock",checked:y.hwidLockEnabled,onChange:E=>g({...y,hwidLockEnabled:E.target.checked}),className:"h-4 w-4"}),r.jsx(U,{htmlFor:"edit-hwid-lock",className:"text-sm",children:"Enable Hardware ID locking"})]})]}),r.jsx("div",{className:"col-span-4 p-4 bg-muted rounded-lg",children:r.jsx("p",{className:"text-sm text-muted-foreground",children:"When HWID lock is enabled, users will be locked to their first login device. This prevents account sharing and unauthorized access from different machines."})})]}),r.jsxs(Ie,{value:"messages",className:"space-y-4",children:[r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsxs(U,{htmlFor:"edit-success-msg",className:"text-right",children:[r.jsx(wa,{className:"h-4 w-4 mr-1 inline text-green-600"}),"Login Success"]}),r.jsx(ne,{id:"edit-success-msg",defaultValue:y.loginSuccessMessage,placeholder:"Login successful!",className:"col-span-3",onChange:E=>g({...y,loginSuccessMessage:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsxs(U,{htmlFor:"edit-failed-msg",className:"text-right",children:[r.jsx(Qh,{className:"h-4 w-4 mr-1 inline text-red-600"}),"Login Failed"]}),r.jsx(ne,{id:"edit-failed-msg",defaultValue:y.loginFailedMessage,placeholder:"Invalid credentials!",className:"col-span-3",onChange:E=>g({...y,loginFailedMessage:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsxs(U,{htmlFor:"edit-disabled-msg",className:"text-right",children:[r.jsx(Mc,{className:"h-4 w-4 mr-1 inline text-orange-600"}),"Account Disabled"]}),r.jsx(ne,{id:"edit-disabled-msg",defaultValue:y.accountDisabledMessage,placeholder:"Account is disabled!",className:"col-span-3",onChange:E=>g({...y,accountDisabledMessage:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsxs(U,{htmlFor:"edit-expired-msg",className:"text-right",children:[r.jsx(qh,{className:"h-4 w-4 mr-1 inline text-red-600"}),"Account Expired"]}),r.jsx(ne,{id:"edit-expired-msg",defaultValue:y.accountExpiredMessage,placeholder:"Account has expired!",className:"col-span-3",onChange:E=>g({...y,accountExpiredMessage:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsxs(U,{htmlFor:"edit-version-msg",className:"text-right",children:[r.jsx(dx,{className:"h-4 w-4 mr-1 inline text-blue-600"}),"Version Mismatch"]}),r.jsx(ne,{id:"edit-version-msg",defaultValue:y.versionMismatchMessage,placeholder:"Please update your application!",className:"col-span-3",onChange:E=>g({...y,versionMismatchMessage:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsxs(U,{htmlFor:"edit-hwid-msg",className:"text-right",children:[r.jsx(Jh,{className:"h-4 w-4 mr-1 inline text-purple-600"}),"HWID Mismatch"]}),r.jsx(ne,{id:"edit-hwid-msg",defaultValue:y.hwidMismatchMessage,placeholder:"Hardware ID mismatch detected!",className:"col-span-3",onChange:E=>g({...y,hwidMismatchMessage:E.target.value})})]})]})]})}),r.jsx(wi,{children:r.jsx(O,{onClick:()=>{y&&W.mutate({id:y.id,updates:{name:y.name,description:y.description,version:y.version,isActive:y.isActive,hwidLockEnabled:y.hwidLockEnabled,loginSuccessMessage:y.loginSuccessMessage,loginFailedMessage:y.loginFailedMessage,accountDisabledMessage:y.accountDisabledMessage,accountExpiredMessage:y.accountExpiredMessage,versionMismatchMessage:y.versionMismatchMessage,hwidMismatchMessage:y.hwidMismatchMessage}})},className:"phantom-button",disabled:W.isPending,children:W.isPending?"Updating...":"Update Application"})})]})}),r.jsx(Ft,{open:b,onOpenChange:x,children:r.jsxs(kt,{children:[r.jsxs(Et,{children:[r.jsxs(Tt,{children:["Edit User - ",m==null?void 0:m.username]}),r.jsx(At,{children:"Update user information, status, and Hardware ID settings."})]}),m&&r.jsxs("div",{className:"grid gap-4 py-4",children:[r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"edit-user-username",className:"text-right",children:"Username"}),r.jsx(ne,{id:"edit-user-username",defaultValue:m.username,className:"col-span-3",onChange:E=>w({...m,username:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"edit-user-email",className:"text-right",children:"Email"}),r.jsx(ne,{id:"edit-user-email",type:"email",defaultValue:m.email,className:"col-span-3",onChange:E=>w({...m,email:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"edit-user-expires",className:"text-right",children:"Expires At"}),r.jsx(ne,{id:"edit-user-expires",type:"datetime-local",defaultValue:m.expiresAt?new Date(m.expiresAt).toISOString().slice(0,16):"",className:"col-span-3",onChange:E=>w({...m,expiresAt:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{htmlFor:"edit-user-hwid",className:"text-right",children:"Hardware ID"}),r.jsx(ne,{id:"edit-user-hwid",defaultValue:m.hwid||"",className:"col-span-3",placeholder:"Hardware ID (leave empty to reset)",onChange:E=>w({...m,hwid:E.target.value})})]}),r.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[r.jsx(U,{className:"text-right",children:"Status"}),r.jsxs("div",{className:"col-span-3 space-y-2",children:[r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",id:"edit-user-active",checked:m.isActive,onChange:E=>w({...m,isActive:E.target.checked}),className:"h-4 w-4"}),r.jsx(U,{htmlFor:"edit-user-active",className:"text-sm",children:"User is active"})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",id:"edit-user-paused",checked:m.isPaused,onChange:E=>w({...m,isPaused:E.target.checked}),className:"h-4 w-4"}),r.jsx(U,{htmlFor:"edit-user-paused",className:"text-sm",children:"User is paused"})]})]})]})]}),r.jsx(wi,{children:r.jsx(O,{onClick:()=>{m&&i&&P.mutate({appId:i.id,userId:m.id,updates:{username:m.username,email:m.email,isActive:m.isActive,isPaused:m.isPaused,hwid:m.hwid||void 0,expiresAt:m.expiresAt?m.expiresAt:void 0}})},className:"phantom-button",disabled:P.isPending,children:P.isPending?"Updating...":"Update User"})})]})})]})]})}function ym(e){const t=d.useRef({value:e,previous:e});return d.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var wm="Switch",[qD,IL]=Wt(wm),[QD,JD]=qD(wm),x1=d.forwardRef((e,t)=>{const{__scopeSwitch:n,name:s,checked:i,defaultChecked:o,required:a,disabled:l,value:c="on",onCheckedChange:u,form:f,...p}=e,[h,v]=d.useState(null),b=pe(t,w=>v(w)),x=d.useRef(!1),y=h?f||!!h.closest("form"):!0,[g=!1,m]=ss({prop:i,defaultProp:o,onChange:u});return r.jsxs(QD,{scope:n,checked:g,disabled:l,children:[r.jsx(oe.button,{type:"button",role:"switch","aria-checked":g,"aria-required":a,"data-state":w1(g),"data-disabled":l?"":void 0,disabled:l,value:c,...p,ref:b,onClick:z(e.onClick,w=>{m(j=>!j),y&&(x.current=w.isPropagationStopped(),x.current||w.stopPropagation())})}),y&&r.jsx(YD,{control:h,bubbles:!x.current,name:s,value:c,checked:g,required:a,disabled:l,form:f,style:{transform:"translateX(-100%)"}})]})});x1.displayName=wm;var v1="SwitchThumb",y1=d.forwardRef((e,t)=>{const{__scopeSwitch:n,...s}=e,i=JD(v1,n);return r.jsx(oe.span,{"data-state":w1(i.checked),"data-disabled":i.disabled?"":void 0,...s,ref:t})});y1.displayName=v1;var YD=e=>{const{control:t,checked:n,bubbles:s=!0,...i}=e,o=d.useRef(null),a=ym(n),l=Fp(t);return d.useEffect(()=>{const c=o.current,u=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(u,"checked").set;if(a!==n&&p){const h=new Event("click",{bubbles:s});p.call(c,n),c.dispatchEvent(h)}},[a,n,s]),r.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...i,tabIndex:-1,ref:o,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function w1(e){return e?"checked":"unchecked"}var b1=x1,XD=y1;const Ca=d.forwardRef(({className:e,...t},n)=>r.jsx(b1,{className:Q("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",e),...t,ref:n,children:r.jsx(XD,{className:Q("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));Ca.displayName=b1.displayName;var pf=["Enter"," "],ZD=["ArrowDown","PageUp","Home"],j1=["ArrowUp","PageDown","End"],e4=[...ZD,...j1],t4={ltr:[...pf,"ArrowRight"],rtl:[...pf,"ArrowLeft"]},n4={ltr:["ArrowLeft"],rtl:["ArrowRight"]},Za="Menu",[ka,s4,r4]=pu(Za),[ti,S1]=Wt(Za,[r4,vo,Au]),Mu=vo(),_1=Au(),[i4,ni]=ti(Za),[o4,el]=ti(Za),N1=e=>{const{__scopeMenu:t,open:n=!1,children:s,dir:i,onOpenChange:o,modal:a=!0}=e,l=Mu(t),[c,u]=d.useState(null),f=d.useRef(!1),p=at(o),h=Eu(i);return d.useEffect(()=>{const v=()=>{f.current=!0,document.addEventListener("pointerdown",b,{capture:!0,once:!0}),document.addEventListener("pointermove",b,{capture:!0,once:!0})},b=()=>f.current=!1;return document.addEventListener("keydown",v,{capture:!0}),()=>{document.removeEventListener("keydown",v,{capture:!0}),document.removeEventListener("pointerdown",b,{capture:!0}),document.removeEventListener("pointermove",b,{capture:!0})}},[]),r.jsx(wb,{...l,children:r.jsx(i4,{scope:t,open:n,onOpenChange:p,content:c,onContentChange:u,children:r.jsx(o4,{scope:t,onClose:d.useCallback(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:h,modal:a,children:s})})})};N1.displayName=Za;var a4="MenuAnchor",bm=d.forwardRef((e,t)=>{const{__scopeMenu:n,...s}=e,i=Mu(n);return r.jsx(zp,{...i,...s,ref:t})});bm.displayName=a4;var jm="MenuPortal",[l4,C1]=ti(jm,{forceMount:void 0}),k1=e=>{const{__scopeMenu:t,forceMount:n,children:s,container:i}=e,o=ni(jm,t);return r.jsx(l4,{scope:t,forceMount:n,children:r.jsx(tn,{present:n||o.open,children:r.jsx(za,{asChild:!0,container:i,children:s})})})};k1.displayName=jm;var Xt="MenuContent",[c4,Sm]=ti(Xt),E1=d.forwardRef((e,t)=>{const n=C1(Xt,e.__scopeMenu),{forceMount:s=n.forceMount,...i}=e,o=ni(Xt,e.__scopeMenu),a=el(Xt,e.__scopeMenu);return r.jsx(ka.Provider,{scope:e.__scopeMenu,children:r.jsx(tn,{present:s||o.open,children:r.jsx(ka.Slot,{scope:e.__scopeMenu,children:a.modal?r.jsx(u4,{...i,ref:t}):r.jsx(d4,{...i,ref:t})})})})}),u4=d.forwardRef((e,t)=>{const n=ni(Xt,e.__scopeMenu),s=d.useRef(null),i=pe(t,s);return d.useEffect(()=>{const o=s.current;if(o)return cm(o)},[]),r.jsx(_m,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:z(e.onFocusOutside,o=>o.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),d4=d.forwardRef((e,t)=>{const n=ni(Xt,e.__scopeMenu);return r.jsx(_m,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),h4=Hr("MenuContent.ScrollLock"),_m=d.forwardRef((e,t)=>{const{__scopeMenu:n,loop:s=!1,trapFocus:i,onOpenAutoFocus:o,onCloseAutoFocus:a,disableOutsidePointerEvents:l,onEntryFocus:c,onEscapeKeyDown:u,onPointerDownOutside:f,onFocusOutside:p,onInteractOutside:h,onDismiss:v,disableOutsideScroll:b,...x}=e,y=ni(Xt,n),g=el(Xt,n),m=Mu(n),w=_1(n),j=s4(n),[S,N]=d.useState(null),C=d.useRef(null),I=pe(t,C,y.onContentChange),R=d.useRef(0),M=d.useRef(""),k=d.useRef(0),F=d.useRef(null),A=d.useRef("right"),D=d.useRef(0),Z=b?Ru:d.Fragment,W=b?{as:h4,allowPinchZoom:!0}:void 0,P=L=>{var X,xe;const B=M.current+L,ee=j().filter(E=>!E.disabled),de=document.activeElement,ze=(X=ee.find(E=>E.ref.current===de))==null?void 0:X.textValue,ke=ee.map(E=>E.textValue),ct=_4(ke,B,ze),De=(xe=ee.find(E=>E.textValue===ct))==null?void 0:xe.ref.current;(function E(ce){M.current=ce,window.clearTimeout(R.current),ce!==""&&(R.current=window.setTimeout(()=>E(""),1e3))})(B),De&&setTimeout(()=>De.focus())};d.useEffect(()=>()=>window.clearTimeout(R.current),[]),lm();const T=d.useCallback(L=>{var ee,de;return A.current===((ee=F.current)==null?void 0:ee.side)&&C4(L,(de=F.current)==null?void 0:de.area)},[]);return r.jsx(c4,{scope:n,searchRef:M,onItemEnter:d.useCallback(L=>{T(L)&&L.preventDefault()},[T]),onItemLeave:d.useCallback(L=>{var B;T(L)||((B=C.current)==null||B.focus(),N(null))},[T]),onTriggerLeave:d.useCallback(L=>{T(L)&&L.preventDefault()},[T]),pointerGraceTimerRef:k,onPointerGraceIntentChange:d.useCallback(L=>{F.current=L},[]),children:r.jsx(Z,{...W,children:r.jsx(Iu,{asChild:!0,trapped:i,onMountAutoFocus:z(o,L=>{var B;L.preventDefault(),(B=C.current)==null||B.focus({preventScroll:!0})}),onUnmountAutoFocus:a,children:r.jsx(po,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:u,onPointerDownOutside:f,onFocusOutside:p,onInteractOutside:h,onDismiss:v,children:r.jsx(Nj,{asChild:!0,...w,dir:g.dir,orientation:"vertical",loop:s,currentTabStopId:S,onCurrentTabStopIdChange:N,onEntryFocus:z(c,L=>{g.isUsingKeyboardRef.current||L.preventDefault()}),preventScrollOnEntryFocus:!0,children:r.jsx(Bp,{role:"menu","aria-orientation":"vertical","data-state":W1(y.open),"data-radix-menu-content":"",dir:g.dir,...m,...x,ref:I,style:{outline:"none",...x.style},onKeyDown:z(x.onKeyDown,L=>{const ee=L.target.closest("[data-radix-menu-content]")===L.currentTarget,de=L.ctrlKey||L.altKey||L.metaKey,ze=L.key.length===1;ee&&(L.key==="Tab"&&L.preventDefault(),!de&&ze&&P(L.key));const ke=C.current;if(L.target!==ke||!e4.includes(L.key))return;L.preventDefault();const De=j().filter(X=>!X.disabled).map(X=>X.ref.current);j1.includes(L.key)&&De.reverse(),j4(De)}),onBlur:z(e.onBlur,L=>{L.currentTarget.contains(L.target)||(window.clearTimeout(R.current),M.current="")}),onPointerMove:z(e.onPointerMove,Ea(L=>{const B=L.target,ee=D.current!==L.clientX;if(L.currentTarget.contains(B)&&ee){const de=L.clientX>D.current?"right":"left";A.current=de,D.current=L.clientX}}))})})})})})})});E1.displayName=Xt;var f4="MenuGroup",Nm=d.forwardRef((e,t)=>{const{__scopeMenu:n,...s}=e;return r.jsx(oe.div,{role:"group",...s,ref:t})});Nm.displayName=f4;var p4="MenuLabel",T1=d.forwardRef((e,t)=>{const{__scopeMenu:n,...s}=e;return r.jsx(oe.div,{...s,ref:t})});T1.displayName=p4;var Gc="MenuItem",lv="menu.itemSelect",Du=d.forwardRef((e,t)=>{const{disabled:n=!1,onSelect:s,...i}=e,o=d.useRef(null),a=el(Gc,e.__scopeMenu),l=Sm(Gc,e.__scopeMenu),c=pe(t,o),u=d.useRef(!1),f=()=>{const p=o.current;if(!n&&p){const h=new CustomEvent(lv,{bubbles:!0,cancelable:!0});p.addEventListener(lv,v=>s==null?void 0:s(v),{once:!0}),jp(p,h),h.defaultPrevented?u.current=!1:a.onClose()}};return r.jsx(A1,{...i,ref:c,disabled:n,onClick:z(e.onClick,f),onPointerDown:p=>{var h;(h=e.onPointerDown)==null||h.call(e,p),u.current=!0},onPointerUp:z(e.onPointerUp,p=>{var h;u.current||(h=p.currentTarget)==null||h.click()}),onKeyDown:z(e.onKeyDown,p=>{const h=l.searchRef.current!=="";n||h&&p.key===" "||pf.includes(p.key)&&(p.currentTarget.click(),p.preventDefault())})})});Du.displayName=Gc;var A1=d.forwardRef((e,t)=>{const{__scopeMenu:n,disabled:s=!1,textValue:i,...o}=e,a=Sm(Gc,n),l=_1(n),c=d.useRef(null),u=pe(t,c),[f,p]=d.useState(!1),[h,v]=d.useState("");return d.useEffect(()=>{const b=c.current;b&&v((b.textContent??"").trim())},[o.children]),r.jsx(ka.ItemSlot,{scope:n,disabled:s,textValue:i??h,children:r.jsx(Cj,{asChild:!0,...l,focusable:!s,children:r.jsx(oe.div,{role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":s||void 0,"data-disabled":s?"":void 0,...o,ref:u,onPointerMove:z(e.onPointerMove,Ea(b=>{s?a.onItemLeave(b):(a.onItemEnter(b),b.defaultPrevented||b.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:z(e.onPointerLeave,Ea(b=>a.onItemLeave(b))),onFocus:z(e.onFocus,()=>p(!0)),onBlur:z(e.onBlur,()=>p(!1))})})})}),m4="MenuCheckboxItem",I1=d.forwardRef((e,t)=>{const{checked:n=!1,onCheckedChange:s,...i}=e;return r.jsx(O1,{scope:e.__scopeMenu,checked:n,children:r.jsx(Du,{role:"menuitemcheckbox","aria-checked":qc(n)?"mixed":n,...i,ref:t,"data-state":km(n),onSelect:z(i.onSelect,()=>s==null?void 0:s(qc(n)?!0:!n),{checkForDefaultPrevented:!1})})})});I1.displayName=m4;var P1="MenuRadioGroup",[g4,x4]=ti(P1,{value:void 0,onValueChange:()=>{}}),R1=d.forwardRef((e,t)=>{const{value:n,onValueChange:s,...i}=e,o=at(s);return r.jsx(g4,{scope:e.__scopeMenu,value:n,onValueChange:o,children:r.jsx(Nm,{...i,ref:t})})});R1.displayName=P1;var M1="MenuRadioItem",D1=d.forwardRef((e,t)=>{const{value:n,...s}=e,i=x4(M1,e.__scopeMenu),o=n===i.value;return r.jsx(O1,{scope:e.__scopeMenu,checked:o,children:r.jsx(Du,{role:"menuitemradio","aria-checked":o,...s,ref:t,"data-state":km(o),onSelect:z(s.onSelect,()=>{var a;return(a=i.onValueChange)==null?void 0:a.call(i,n)},{checkForDefaultPrevented:!1})})})});D1.displayName=M1;var Cm="MenuItemIndicator",[O1,v4]=ti(Cm,{checked:!1}),L1=d.forwardRef((e,t)=>{const{__scopeMenu:n,forceMount:s,...i}=e,o=v4(Cm,n);return r.jsx(tn,{present:s||qc(o.checked)||o.checked===!0,children:r.jsx(oe.span,{...i,ref:t,"data-state":km(o.checked)})})});L1.displayName=Cm;var y4="MenuSeparator",F1=d.forwardRef((e,t)=>{const{__scopeMenu:n,...s}=e;return r.jsx(oe.div,{role:"separator","aria-orientation":"horizontal",...s,ref:t})});F1.displayName=y4;var w4="MenuArrow",U1=d.forwardRef((e,t)=>{const{__scopeMenu:n,...s}=e,i=Mu(n);return r.jsx(Hp,{...i,...s,ref:t})});U1.displayName=w4;var b4="MenuSub",[PL,$1]=ti(b4),zo="MenuSubTrigger",z1=d.forwardRef((e,t)=>{const n=ni(zo,e.__scopeMenu),s=el(zo,e.__scopeMenu),i=$1(zo,e.__scopeMenu),o=Sm(zo,e.__scopeMenu),a=d.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:c}=o,u={__scopeMenu:e.__scopeMenu},f=d.useCallback(()=>{a.current&&window.clearTimeout(a.current),a.current=null},[]);return d.useEffect(()=>f,[f]),d.useEffect(()=>{const p=l.current;return()=>{window.clearTimeout(p),c(null)}},[l,c]),r.jsx(bm,{asChild:!0,...u,children:r.jsx(A1,{id:i.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":i.contentId,"data-state":W1(n.open),...e,ref:fu(t,i.onTriggerChange),onClick:p=>{var h;(h=e.onClick)==null||h.call(e,p),!(e.disabled||p.defaultPrevented)&&(p.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:z(e.onPointerMove,Ea(p=>{o.onItemEnter(p),!p.defaultPrevented&&!e.disabled&&!n.open&&!a.current&&(o.onPointerGraceIntentChange(null),a.current=window.setTimeout(()=>{n.onOpenChange(!0),f()},100))})),onPointerLeave:z(e.onPointerLeave,Ea(p=>{var v,b;f();const h=(v=n.content)==null?void 0:v.getBoundingClientRect();if(h){const x=(b=n.content)==null?void 0:b.dataset.side,y=x==="right",g=y?-5:5,m=h[y?"left":"right"],w=h[y?"right":"left"];o.onPointerGraceIntentChange({area:[{x:p.clientX+g,y:p.clientY},{x:m,y:h.top},{x:w,y:h.top},{x:w,y:h.bottom},{x:m,y:h.bottom}],side:x}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.onPointerGraceIntentChange(null),300)}else{if(o.onTriggerLeave(p),p.defaultPrevented)return;o.onPointerGraceIntentChange(null)}})),onKeyDown:z(e.onKeyDown,p=>{var v;const h=o.searchRef.current!=="";e.disabled||h&&p.key===" "||t4[s.dir].includes(p.key)&&(n.onOpenChange(!0),(v=n.content)==null||v.focus(),p.preventDefault())})})})});z1.displayName=zo;var B1="MenuSubContent",H1=d.forwardRef((e,t)=>{const n=C1(Xt,e.__scopeMenu),{forceMount:s=n.forceMount,...i}=e,o=ni(Xt,e.__scopeMenu),a=el(Xt,e.__scopeMenu),l=$1(B1,e.__scopeMenu),c=d.useRef(null),u=pe(t,c);return r.jsx(ka.Provider,{scope:e.__scopeMenu,children:r.jsx(tn,{present:s||o.open,children:r.jsx(ka.Slot,{scope:e.__scopeMenu,children:r.jsx(_m,{id:l.contentId,"aria-labelledby":l.triggerId,...i,ref:u,align:"start",side:a.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var p;a.isUsingKeyboardRef.current&&((p=c.current)==null||p.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:z(e.onFocusOutside,f=>{f.target!==l.trigger&&o.onOpenChange(!1)}),onEscapeKeyDown:z(e.onEscapeKeyDown,f=>{a.onClose(),f.preventDefault()}),onKeyDown:z(e.onKeyDown,f=>{var v;const p=f.currentTarget.contains(f.target),h=n4[a.dir].includes(f.key);p&&h&&(o.onOpenChange(!1),(v=l.trigger)==null||v.focus(),f.preventDefault())})})})})})});H1.displayName=B1;function W1(e){return e?"open":"closed"}function qc(e){return e==="indeterminate"}function km(e){return qc(e)?"indeterminate":e?"checked":"unchecked"}function j4(e){const t=document.activeElement;for(const n of e)if(n===t||(n.focus(),document.activeElement!==t))return}function S4(e,t){return e.map((n,s)=>e[(t+s)%e.length])}function _4(e,t,n){const i=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,o=n?e.indexOf(n):-1;let a=S4(e,Math.max(o,0));i.length===1&&(a=a.filter(u=>u!==n));const c=a.find(u=>u.toLowerCase().startsWith(i.toLowerCase()));return c!==n?c:void 0}function N4(e,t){const{x:n,y:s}=e;let i=!1;for(let o=0,a=t.length-1;o<t.length;a=o++){const l=t[o].x,c=t[o].y,u=t[a].x,f=t[a].y;c>s!=f>s&&n<(u-l)*(s-c)/(f-c)+l&&(i=!i)}return i}function C4(e,t){if(!t)return!1;const n={x:e.clientX,y:e.clientY};return N4(n,t)}function Ea(e){return t=>t.pointerType==="mouse"?e(t):void 0}var k4=N1,E4=bm,T4=k1,A4=E1,I4=Nm,P4=T1,R4=Du,M4=I1,D4=R1,O4=D1,L4=L1,F4=F1,U4=U1,$4=z1,z4=H1,Em="DropdownMenu",[B4,RL]=Wt(Em,[S1]),jt=S1(),[H4,V1]=B4(Em),K1=e=>{const{__scopeDropdownMenu:t,children:n,dir:s,open:i,defaultOpen:o,onOpenChange:a,modal:l=!0}=e,c=jt(t),u=d.useRef(null),[f=!1,p]=ss({prop:i,defaultProp:o,onChange:a});return r.jsx(H4,{scope:t,triggerId:Mn(),triggerRef:u,contentId:Mn(),open:f,onOpenChange:p,onOpenToggle:d.useCallback(()=>p(h=>!h),[p]),modal:l,children:r.jsx(k4,{...c,open:f,onOpenChange:p,dir:s,modal:l,children:n})})};K1.displayName=Em;var G1="DropdownMenuTrigger",q1=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,disabled:s=!1,...i}=e,o=V1(G1,n),a=jt(n);return r.jsx(E4,{asChild:!0,...a,children:r.jsx(oe.button,{type:"button",id:o.triggerId,"aria-haspopup":"menu","aria-expanded":o.open,"aria-controls":o.open?o.contentId:void 0,"data-state":o.open?"open":"closed","data-disabled":s?"":void 0,disabled:s,...i,ref:fu(t,o.triggerRef),onPointerDown:z(e.onPointerDown,l=>{!s&&l.button===0&&l.ctrlKey===!1&&(o.onOpenToggle(),o.open||l.preventDefault())}),onKeyDown:z(e.onKeyDown,l=>{s||(["Enter"," "].includes(l.key)&&o.onOpenToggle(),l.key==="ArrowDown"&&o.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})})});q1.displayName=G1;var W4="DropdownMenuPortal",Q1=e=>{const{__scopeDropdownMenu:t,...n}=e,s=jt(t);return r.jsx(T4,{...s,...n})};Q1.displayName=W4;var J1="DropdownMenuContent",Y1=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=V1(J1,n),o=jt(n),a=d.useRef(!1);return r.jsx(A4,{id:i.contentId,"aria-labelledby":i.triggerId,...o,...s,ref:t,onCloseAutoFocus:z(e.onCloseAutoFocus,l=>{var c;a.current||(c=i.triggerRef.current)==null||c.focus(),a.current=!1,l.preventDefault()}),onInteractOutside:z(e.onInteractOutside,l=>{const c=l.detail.originalEvent,u=c.button===0&&c.ctrlKey===!0,f=c.button===2||u;(!i.modal||f)&&(a.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});Y1.displayName=J1;var V4="DropdownMenuGroup",K4=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(I4,{...i,...s,ref:t})});K4.displayName=V4;var G4="DropdownMenuLabel",X1=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(P4,{...i,...s,ref:t})});X1.displayName=G4;var q4="DropdownMenuItem",Z1=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(R4,{...i,...s,ref:t})});Z1.displayName=q4;var Q4="DropdownMenuCheckboxItem",eS=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(M4,{...i,...s,ref:t})});eS.displayName=Q4;var J4="DropdownMenuRadioGroup",Y4=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(D4,{...i,...s,ref:t})});Y4.displayName=J4;var X4="DropdownMenuRadioItem",tS=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(O4,{...i,...s,ref:t})});tS.displayName=X4;var Z4="DropdownMenuItemIndicator",nS=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(L4,{...i,...s,ref:t})});nS.displayName=Z4;var eO="DropdownMenuSeparator",sS=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(F4,{...i,...s,ref:t})});sS.displayName=eO;var tO="DropdownMenuArrow",nO=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(U4,{...i,...s,ref:t})});nO.displayName=tO;var sO="DropdownMenuSubTrigger",rS=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx($4,{...i,...s,ref:t})});rS.displayName=sO;var rO="DropdownMenuSubContent",iS=d.forwardRef((e,t)=>{const{__scopeDropdownMenu:n,...s}=e,i=jt(n);return r.jsx(z4,{...i,...s,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});iS.displayName=rO;var iO=K1,oO=q1,aO=Q1,oS=Y1,aS=X1,lS=Z1,cS=eS,uS=tS,dS=nS,hS=sS,fS=rS,pS=iS;const Tm=iO,Am=oO,lO=d.forwardRef(({className:e,inset:t,children:n,...s},i)=>r.jsxs(fS,{ref:i,className:Q("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",t&&"pl-8",e),...s,children:[n,r.jsx(lT,{className:"ml-auto"})]}));lO.displayName=fS.displayName;const cO=d.forwardRef(({className:e,...t},n)=>r.jsx(pS,{ref:n,className:Q("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",e),...t}));cO.displayName=pS.displayName;const Ou=d.forwardRef(({className:e,sideOffset:t=4,...n},s)=>r.jsx(aO,{children:r.jsx(oS,{ref:s,sideOffset:t,className:Q("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",e),...n})}));Ou.displayName=oS.displayName;const Be=d.forwardRef(({className:e,inset:t,...n},s)=>r.jsx(lS,{ref:s,className:Q("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",t&&"pl-8",e),...n}));Be.displayName=lS.displayName;const uO=d.forwardRef(({className:e,children:t,checked:n,...s},i)=>r.jsxs(cS,{ref:i,className:Q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),checked:n,...s,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(dS,{children:r.jsx(Cp,{className:"h-4 w-4"})})}),t]}));uO.displayName=cS.displayName;const dO=d.forwardRef(({className:e,children:t,...n},s)=>r.jsxs(uS,{ref:s,className:Q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(dS,{children:r.jsx(dT,{className:"h-2 w-2 fill-current"})})}),t]}));dO.displayName=uS.displayName;const hO=d.forwardRef(({className:e,inset:t,...n},s)=>r.jsx(aS,{ref:s,className:Q("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...n}));hO.displayName=aS.displayName;const mS=d.forwardRef(({className:e,...t},n)=>r.jsx(hS,{ref:n,className:Q("-mx-1 my-1 h-px bg-muted",e),...t}));mS.displayName=hS.displayName;var gS="AlertDialog",[fO,ML]=Wt(gS,[Qj]),fs=Qj(),xS=e=>{const{__scopeAlertDialog:t,...n}=e,s=fs(t);return r.jsx(d1,{...s,...n,modal:!0})};xS.displayName=gS;var pO="AlertDialogTrigger",vS=d.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...s}=e,i=fs(n);return r.jsx(h1,{...i,...s,ref:t})});vS.displayName=pO;var mO="AlertDialogPortal",yS=e=>{const{__scopeAlertDialog:t,...n}=e,s=fs(t);return r.jsx(f1,{...s,...n})};yS.displayName=mO;var gO="AlertDialogOverlay",wS=d.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...s}=e,i=fs(n);return r.jsx(pm,{...i,...s,ref:t})});wS.displayName=gO;var Di="AlertDialogContent",[xO,vO]=fO(Di),yO=d0("AlertDialogContent"),bS=d.forwardRef((e,t)=>{const{__scopeAlertDialog:n,children:s,...i}=e,o=fs(n),a=d.useRef(null),l=pe(t,a),c=d.useRef(null);return r.jsx(FD,{contentName:Di,titleName:jS,docsSlug:"alert-dialog",children:r.jsx(xO,{scope:n,cancelRef:c,children:r.jsxs(mm,{role:"alertdialog",...o,...i,ref:l,onOpenAutoFocus:z(i.onOpenAutoFocus,u=>{var f;u.preventDefault(),(f=c.current)==null||f.focus({preventScroll:!0})}),onPointerDownOutside:u=>u.preventDefault(),onInteractOutside:u=>u.preventDefault(),children:[r.jsx(yO,{children:s}),r.jsx(bO,{contentRef:a})]})})})});bS.displayName=Di;var jS="AlertDialogTitle",SS=d.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...s}=e,i=fs(n);return r.jsx(gm,{...i,...s,ref:t})});SS.displayName=jS;var _S="AlertDialogDescription",NS=d.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...s}=e,i=fs(n);return r.jsx(xm,{...i,...s,ref:t})});NS.displayName=_S;var wO="AlertDialogAction",CS=d.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...s}=e,i=fs(n);return r.jsx(vm,{...i,...s,ref:t})});CS.displayName=wO;var kS="AlertDialogCancel",ES=d.forwardRef((e,t)=>{const{__scopeAlertDialog:n,...s}=e,{cancelRef:i}=vO(kS,n),o=fs(n),a=pe(t,i);return r.jsx(vm,{...o,...s,ref:a})});ES.displayName=kS;var bO=({contentRef:e})=>{const t=`\`${Di}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Di}\` by passing a \`${_S}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Di}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return d.useEffect(()=>{var s;document.getElementById((s=e.current)==null?void 0:s.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},jO=xS,SO=vS,_O=yS,TS=wS,AS=bS,IS=CS,PS=ES,RS=SS,MS=NS;const Lu=jO,Fu=SO,NO=_O,DS=d.forwardRef(({className:e,...t},n)=>r.jsx(TS,{className:Q("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:n}));DS.displayName=TS.displayName;const tl=d.forwardRef(({className:e,...t},n)=>r.jsxs(NO,{children:[r.jsx(DS,{}),r.jsx(AS,{ref:n,className:Q("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...t})]}));tl.displayName=AS.displayName;const nl=({className:e,...t})=>r.jsx("div",{className:Q("flex flex-col space-y-2 text-center sm:text-left",e),...t});nl.displayName="AlertDialogHeader";const sl=({className:e,...t})=>r.jsx("div",{className:Q("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});sl.displayName="AlertDialogFooter";const rl=d.forwardRef(({className:e,...t},n)=>r.jsx(RS,{ref:n,className:Q("text-lg font-semibold",e),...t}));rl.displayName=RS.displayName;const il=d.forwardRef(({className:e,...t},n)=>r.jsx(MS,{ref:n,className:Q("text-sm text-muted-foreground",e),...t}));il.displayName=MS.displayName;const ol=d.forwardRef(({className:e,...t},n)=>r.jsx(IS,{ref:n,className:Q(im(),e),...t}));ol.displayName=IS.displayName;const al=d.forwardRef(({className:e,...t},n)=>r.jsx(PS,{ref:n,className:Q(im({variant:"outline"}),"mt-2 sm:mt-0",e),...t}));al.displayName=PS.displayName;function cv(e,[t,n]){return Math.min(n,Math.max(t,e))}var CO=[" ","Enter","ArrowUp","ArrowDown"],kO=[" ","Enter"],ll="Select",[Uu,$u,EO]=pu(ll),[bo,DL]=Wt(ll,[EO,vo]),zu=vo(),[TO,fr]=bo(ll),[AO,IO]=bo(ll),OS=e=>{const{__scopeSelect:t,children:n,open:s,defaultOpen:i,onOpenChange:o,value:a,defaultValue:l,onValueChange:c,dir:u,name:f,autoComplete:p,disabled:h,required:v,form:b}=e,x=zu(t),[y,g]=d.useState(null),[m,w]=d.useState(null),[j,S]=d.useState(!1),N=Eu(u),[C=!1,I]=ss({prop:s,defaultProp:i,onChange:o}),[R,M]=ss({prop:a,defaultProp:l,onChange:c}),k=d.useRef(null),F=y?b||!!y.closest("form"):!0,[A,D]=d.useState(new Set),Z=Array.from(A).map(W=>W.props.value).join(";");return r.jsx(wb,{...x,children:r.jsxs(TO,{required:v,scope:t,trigger:y,onTriggerChange:g,valueNode:m,onValueNodeChange:w,valueNodeHasChildren:j,onValueNodeHasChildrenChange:S,contentId:Mn(),value:R,onValueChange:M,open:C,onOpenChange:I,dir:N,triggerPointerDownPosRef:k,disabled:h,children:[r.jsx(Uu.Provider,{scope:t,children:r.jsx(AO,{scope:e.__scopeSelect,onNativeOptionAdd:d.useCallback(W=>{D(P=>new Set(P).add(W))},[]),onNativeOptionRemove:d.useCallback(W=>{D(P=>{const T=new Set(P);return T.delete(W),T})},[]),children:n})}),F?r.jsxs(a_,{"aria-hidden":!0,required:v,tabIndex:-1,name:f,autoComplete:p,value:R,onChange:W=>M(W.target.value),disabled:h,form:b,children:[R===void 0?r.jsx("option",{value:""}):null,Array.from(A)]},Z):null]})})};OS.displayName=ll;var LS="SelectTrigger",FS=d.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:s=!1,...i}=e,o=zu(n),a=fr(LS,n),l=a.disabled||s,c=pe(t,a.onTriggerChange),u=$u(n),f=d.useRef("touch"),[p,h,v]=l_(x=>{const y=u().filter(w=>!w.disabled),g=y.find(w=>w.value===a.value),m=c_(y,x,g);m!==void 0&&a.onValueChange(m.value)}),b=x=>{l||(a.onOpenChange(!0),v()),x&&(a.triggerPointerDownPosRef.current={x:Math.round(x.pageX),y:Math.round(x.pageY)})};return r.jsx(zp,{asChild:!0,...o,children:r.jsx(oe.button,{type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":o_(a.value)?"":void 0,...i,ref:c,onClick:z(i.onClick,x=>{x.currentTarget.focus(),f.current!=="mouse"&&b(x)}),onPointerDown:z(i.onPointerDown,x=>{f.current=x.pointerType;const y=x.target;y.hasPointerCapture(x.pointerId)&&y.releasePointerCapture(x.pointerId),x.button===0&&x.ctrlKey===!1&&x.pointerType==="mouse"&&(b(x),x.preventDefault())}),onKeyDown:z(i.onKeyDown,x=>{const y=p.current!=="";!(x.ctrlKey||x.altKey||x.metaKey)&&x.key.length===1&&h(x.key),!(y&&x.key===" ")&&CO.includes(x.key)&&(b(),x.preventDefault())})})})});FS.displayName=LS;var US="SelectValue",$S=d.forwardRef((e,t)=>{const{__scopeSelect:n,className:s,style:i,children:o,placeholder:a="",...l}=e,c=fr(US,n),{onValueNodeHasChildrenChange:u}=c,f=o!==void 0,p=pe(t,c.onValueNodeChange);return lt(()=>{u(f)},[u,f]),r.jsx(oe.span,{...l,ref:p,style:{pointerEvents:"none"},children:o_(c.value)?r.jsx(r.Fragment,{children:a}):o})});$S.displayName=US;var PO="SelectIcon",zS=d.forwardRef((e,t)=>{const{__scopeSelect:n,children:s,...i}=e;return r.jsx(oe.span,{"aria-hidden":!0,...i,ref:t,children:s||"▼"})});zS.displayName=PO;var RO="SelectPortal",BS=e=>r.jsx(za,{asChild:!0,...e});BS.displayName=RO;var qr="SelectContent",HS=d.forwardRef((e,t)=>{const n=fr(qr,e.__scopeSelect),[s,i]=d.useState();if(lt(()=>{i(new DocumentFragment)},[]),!n.open){const o=s;return o?Zr.createPortal(r.jsx(WS,{scope:e.__scopeSelect,children:r.jsx(Uu.Slot,{scope:e.__scopeSelect,children:r.jsx("div",{children:e.children})})}),o):null}return r.jsx(VS,{...e,ref:t})});HS.displayName=qr;var sn=10,[WS,pr]=bo(qr),MO="SelectContentImpl",DO=Hr("SelectContent.RemoveScroll"),VS=d.forwardRef((e,t)=>{const{__scopeSelect:n,position:s="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:o,onPointerDownOutside:a,side:l,sideOffset:c,align:u,alignOffset:f,arrowPadding:p,collisionBoundary:h,collisionPadding:v,sticky:b,hideWhenDetached:x,avoidCollisions:y,...g}=e,m=fr(qr,n),[w,j]=d.useState(null),[S,N]=d.useState(null),C=pe(t,X=>j(X)),[I,R]=d.useState(null),[M,k]=d.useState(null),F=$u(n),[A,D]=d.useState(!1),Z=d.useRef(!1);d.useEffect(()=>{if(w)return cm(w)},[w]),lm();const W=d.useCallback(X=>{const[xe,...E]=F().map(be=>be.ref.current),[ce]=E.slice(-1),we=document.activeElement;for(const be of X)if(be===we||(be==null||be.scrollIntoView({block:"nearest"}),be===xe&&S&&(S.scrollTop=0),be===ce&&S&&(S.scrollTop=S.scrollHeight),be==null||be.focus(),document.activeElement!==we))return},[F,S]),P=d.useCallback(()=>W([I,w]),[W,I,w]);d.useEffect(()=>{A&&P()},[A,P]);const{onOpenChange:T,triggerPointerDownPosRef:L}=m;d.useEffect(()=>{if(w){let X={x:0,y:0};const xe=ce=>{var we,be;X={x:Math.abs(Math.round(ce.pageX)-(((we=L.current)==null?void 0:we.x)??0)),y:Math.abs(Math.round(ce.pageY)-(((be=L.current)==null?void 0:be.y)??0))}},E=ce=>{X.x<=10&&X.y<=10?ce.preventDefault():w.contains(ce.target)||T(!1),document.removeEventListener("pointermove",xe),L.current=null};return L.current!==null&&(document.addEventListener("pointermove",xe),document.addEventListener("pointerup",E,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",xe),document.removeEventListener("pointerup",E,{capture:!0})}}},[w,T,L]),d.useEffect(()=>{const X=()=>T(!1);return window.addEventListener("blur",X),window.addEventListener("resize",X),()=>{window.removeEventListener("blur",X),window.removeEventListener("resize",X)}},[T]);const[B,ee]=l_(X=>{const xe=F().filter(we=>!we.disabled),E=xe.find(we=>we.ref.current===document.activeElement),ce=c_(xe,X,E);ce&&setTimeout(()=>ce.ref.current.focus())}),de=d.useCallback((X,xe,E)=>{const ce=!Z.current&&!E;(m.value!==void 0&&m.value===xe||ce)&&(R(X),ce&&(Z.current=!0))},[m.value]),ze=d.useCallback(()=>w==null?void 0:w.focus(),[w]),ke=d.useCallback((X,xe,E)=>{const ce=!Z.current&&!E;(m.value!==void 0&&m.value===xe||ce)&&k(X)},[m.value]),ct=s==="popper"?mf:KS,De=ct===mf?{side:l,sideOffset:c,align:u,alignOffset:f,arrowPadding:p,collisionBoundary:h,collisionPadding:v,sticky:b,hideWhenDetached:x,avoidCollisions:y}:{};return r.jsx(WS,{scope:n,content:w,viewport:S,onViewportChange:N,itemRefCallback:de,selectedItem:I,onItemLeave:ze,itemTextRefCallback:ke,focusSelectedItem:P,selectedItemText:M,position:s,isPositioned:A,searchRef:B,children:r.jsx(Ru,{as:DO,allowPinchZoom:!0,children:r.jsx(Iu,{asChild:!0,trapped:m.open,onMountAutoFocus:X=>{X.preventDefault()},onUnmountAutoFocus:z(i,X=>{var xe;(xe=m.trigger)==null||xe.focus({preventScroll:!0}),X.preventDefault()}),children:r.jsx(po,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:a,onFocusOutside:X=>X.preventDefault(),onDismiss:()=>m.onOpenChange(!1),children:r.jsx(ct,{role:"listbox",id:m.contentId,"data-state":m.open?"open":"closed",dir:m.dir,onContextMenu:X=>X.preventDefault(),...g,...De,onPlaced:()=>D(!0),ref:C,style:{display:"flex",flexDirection:"column",outline:"none",...g.style},onKeyDown:z(g.onKeyDown,X=>{const xe=X.ctrlKey||X.altKey||X.metaKey;if(X.key==="Tab"&&X.preventDefault(),!xe&&X.key.length===1&&ee(X.key),["ArrowUp","ArrowDown","Home","End"].includes(X.key)){let ce=F().filter(we=>!we.disabled).map(we=>we.ref.current);if(["ArrowUp","End"].includes(X.key)&&(ce=ce.slice().reverse()),["ArrowUp","ArrowDown"].includes(X.key)){const we=X.target,be=ce.indexOf(we);ce=ce.slice(be+1)}setTimeout(()=>W(ce)),X.preventDefault()}})})})})})})});VS.displayName=MO;var OO="SelectItemAlignedPosition",KS=d.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:s,...i}=e,o=fr(qr,n),a=pr(qr,n),[l,c]=d.useState(null),[u,f]=d.useState(null),p=pe(t,C=>f(C)),h=$u(n),v=d.useRef(!1),b=d.useRef(!0),{viewport:x,selectedItem:y,selectedItemText:g,focusSelectedItem:m}=a,w=d.useCallback(()=>{if(o.trigger&&o.valueNode&&l&&u&&x&&y&&g){const C=o.trigger.getBoundingClientRect(),I=u.getBoundingClientRect(),R=o.valueNode.getBoundingClientRect(),M=g.getBoundingClientRect();if(o.dir!=="rtl"){const we=M.left-I.left,be=R.left-we,Mt=C.left-be,wn=C.width+Mt,jo=Math.max(wn,I.width),So=window.innerWidth-sn,_o=cv(be,[sn,Math.max(sn,So-jo)]);l.style.minWidth=wn+"px",l.style.left=_o+"px"}else{const we=I.right-M.right,be=window.innerWidth-R.right-we,Mt=window.innerWidth-C.right-be,wn=C.width+Mt,jo=Math.max(wn,I.width),So=window.innerWidth-sn,_o=cv(be,[sn,Math.max(sn,So-jo)]);l.style.minWidth=wn+"px",l.style.right=_o+"px"}const k=h(),F=window.innerHeight-sn*2,A=x.scrollHeight,D=window.getComputedStyle(u),Z=parseInt(D.borderTopWidth,10),W=parseInt(D.paddingTop,10),P=parseInt(D.borderBottomWidth,10),T=parseInt(D.paddingBottom,10),L=Z+W+A+T+P,B=Math.min(y.offsetHeight*5,L),ee=window.getComputedStyle(x),de=parseInt(ee.paddingTop,10),ze=parseInt(ee.paddingBottom,10),ke=C.top+C.height/2-sn,ct=F-ke,De=y.offsetHeight/2,X=y.offsetTop+De,xe=Z+W+X,E=L-xe;if(xe<=ke){const we=k.length>0&&y===k[k.length-1].ref.current;l.style.bottom="0px";const be=u.clientHeight-x.offsetTop-x.offsetHeight,Mt=Math.max(ct,De+(we?ze:0)+be+P),wn=xe+Mt;l.style.height=wn+"px"}else{const we=k.length>0&&y===k[0].ref.current;l.style.top="0px";const Mt=Math.max(ke,Z+x.offsetTop+(we?de:0)+De)+E;l.style.height=Mt+"px",x.scrollTop=xe-ke+x.offsetTop}l.style.margin=`${sn}px 0`,l.style.minHeight=B+"px",l.style.maxHeight=F+"px",s==null||s(),requestAnimationFrame(()=>v.current=!0)}},[h,o.trigger,o.valueNode,l,u,x,y,g,o.dir,s]);lt(()=>w(),[w]);const[j,S]=d.useState();lt(()=>{u&&S(window.getComputedStyle(u).zIndex)},[u]);const N=d.useCallback(C=>{C&&b.current===!0&&(w(),m==null||m(),b.current=!1)},[w,m]);return r.jsx(FO,{scope:n,contentWrapper:l,shouldExpandOnScrollRef:v,onScrollButtonChange:N,children:r.jsx("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:j},children:r.jsx(oe.div,{...i,ref:p,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})});KS.displayName=OO;var LO="SelectPopperPosition",mf=d.forwardRef((e,t)=>{const{__scopeSelect:n,align:s="start",collisionPadding:i=sn,...o}=e,a=zu(n);return r.jsx(Bp,{...a,...o,ref:t,align:s,collisionPadding:i,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});mf.displayName=LO;var[FO,Im]=bo(qr,{}),gf="SelectViewport",GS=d.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:s,...i}=e,o=pr(gf,n),a=Im(gf,n),l=pe(t,o.onViewportChange),c=d.useRef(0);return r.jsxs(r.Fragment,{children:[r.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:s}),r.jsx(Uu.Slot,{scope:n,children:r.jsx(oe.div,{"data-radix-select-viewport":"",role:"presentation",...i,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...i.style},onScroll:z(i.onScroll,u=>{const f=u.currentTarget,{contentWrapper:p,shouldExpandOnScrollRef:h}=a;if(h!=null&&h.current&&p){const v=Math.abs(c.current-f.scrollTop);if(v>0){const b=window.innerHeight-sn*2,x=parseFloat(p.style.minHeight),y=parseFloat(p.style.height),g=Math.max(x,y);if(g<b){const m=g+v,w=Math.min(b,m),j=m-w;p.style.height=w+"px",p.style.bottom==="0px"&&(f.scrollTop=j>0?j:0,p.style.justifyContent="flex-end")}}}c.current=f.scrollTop})})})]})});GS.displayName=gf;var qS="SelectGroup",[UO,$O]=bo(qS),zO=d.forwardRef((e,t)=>{const{__scopeSelect:n,...s}=e,i=Mn();return r.jsx(UO,{scope:n,id:i,children:r.jsx(oe.div,{role:"group","aria-labelledby":i,...s,ref:t})})});zO.displayName=qS;var QS="SelectLabel",JS=d.forwardRef((e,t)=>{const{__scopeSelect:n,...s}=e,i=$O(QS,n);return r.jsx(oe.div,{id:i.id,...s,ref:t})});JS.displayName=QS;var Qc="SelectItem",[BO,YS]=bo(Qc),XS=d.forwardRef((e,t)=>{const{__scopeSelect:n,value:s,disabled:i=!1,textValue:o,...a}=e,l=fr(Qc,n),c=pr(Qc,n),u=l.value===s,[f,p]=d.useState(o??""),[h,v]=d.useState(!1),b=pe(t,m=>{var w;return(w=c.itemRefCallback)==null?void 0:w.call(c,m,s,i)}),x=Mn(),y=d.useRef("touch"),g=()=>{i||(l.onValueChange(s),l.onOpenChange(!1))};if(s==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return r.jsx(BO,{scope:n,value:s,disabled:i,textId:x,isSelected:u,onItemTextChange:d.useCallback(m=>{p(w=>w||((m==null?void 0:m.textContent)??"").trim())},[]),children:r.jsx(Uu.ItemSlot,{scope:n,value:s,disabled:i,textValue:f,children:r.jsx(oe.div,{role:"option","aria-labelledby":x,"data-highlighted":h?"":void 0,"aria-selected":u&&h,"data-state":u?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1,...a,ref:b,onFocus:z(a.onFocus,()=>v(!0)),onBlur:z(a.onBlur,()=>v(!1)),onClick:z(a.onClick,()=>{y.current!=="mouse"&&g()}),onPointerUp:z(a.onPointerUp,()=>{y.current==="mouse"&&g()}),onPointerDown:z(a.onPointerDown,m=>{y.current=m.pointerType}),onPointerMove:z(a.onPointerMove,m=>{var w;y.current=m.pointerType,i?(w=c.onItemLeave)==null||w.call(c):y.current==="mouse"&&m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:z(a.onPointerLeave,m=>{var w;m.currentTarget===document.activeElement&&((w=c.onItemLeave)==null||w.call(c))}),onKeyDown:z(a.onKeyDown,m=>{var j;((j=c.searchRef)==null?void 0:j.current)!==""&&m.key===" "||(kO.includes(m.key)&&g(),m.key===" "&&m.preventDefault())})})})})});XS.displayName=Qc;var Bo="SelectItemText",ZS=d.forwardRef((e,t)=>{const{__scopeSelect:n,className:s,style:i,...o}=e,a=fr(Bo,n),l=pr(Bo,n),c=YS(Bo,n),u=IO(Bo,n),[f,p]=d.useState(null),h=pe(t,g=>p(g),c.onItemTextChange,g=>{var m;return(m=l.itemTextRefCallback)==null?void 0:m.call(l,g,c.value,c.disabled)}),v=f==null?void 0:f.textContent,b=d.useMemo(()=>r.jsx("option",{value:c.value,disabled:c.disabled,children:v},c.value),[c.disabled,c.value,v]),{onNativeOptionAdd:x,onNativeOptionRemove:y}=u;return lt(()=>(x(b),()=>y(b)),[x,y,b]),r.jsxs(r.Fragment,{children:[r.jsx(oe.span,{id:c.textId,...o,ref:h}),c.isSelected&&a.valueNode&&!a.valueNodeHasChildren?Zr.createPortal(o.children,a.valueNode):null]})});ZS.displayName=Bo;var e_="SelectItemIndicator",t_=d.forwardRef((e,t)=>{const{__scopeSelect:n,...s}=e;return YS(e_,n).isSelected?r.jsx(oe.span,{"aria-hidden":!0,...s,ref:t}):null});t_.displayName=e_;var xf="SelectScrollUpButton",n_=d.forwardRef((e,t)=>{const n=pr(xf,e.__scopeSelect),s=Im(xf,e.__scopeSelect),[i,o]=d.useState(!1),a=pe(t,s.onScrollButtonChange);return lt(()=>{if(n.viewport&&n.isPositioned){let l=function(){const u=c.scrollTop>0;o(u)};const c=n.viewport;return l(),c.addEventListener("scroll",l),()=>c.removeEventListener("scroll",l)}},[n.viewport,n.isPositioned]),i?r.jsx(r_,{...e,ref:a,onAutoScroll:()=>{const{viewport:l,selectedItem:c}=n;l&&c&&(l.scrollTop=l.scrollTop-c.offsetHeight)}}):null});n_.displayName=xf;var vf="SelectScrollDownButton",s_=d.forwardRef((e,t)=>{const n=pr(vf,e.__scopeSelect),s=Im(vf,e.__scopeSelect),[i,o]=d.useState(!1),a=pe(t,s.onScrollButtonChange);return lt(()=>{if(n.viewport&&n.isPositioned){let l=function(){const u=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<u;o(f)};const c=n.viewport;return l(),c.addEventListener("scroll",l),()=>c.removeEventListener("scroll",l)}},[n.viewport,n.isPositioned]),i?r.jsx(r_,{...e,ref:a,onAutoScroll:()=>{const{viewport:l,selectedItem:c}=n;l&&c&&(l.scrollTop=l.scrollTop+c.offsetHeight)}}):null});s_.displayName=vf;var r_=d.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:s,...i}=e,o=pr("SelectScrollButton",n),a=d.useRef(null),l=$u(n),c=d.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return d.useEffect(()=>()=>c(),[c]),lt(()=>{var f;const u=l().find(p=>p.ref.current===document.activeElement);(f=u==null?void 0:u.ref.current)==null||f.scrollIntoView({block:"nearest"})},[l]),r.jsx(oe.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:z(i.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(s,50))}),onPointerMove:z(i.onPointerMove,()=>{var u;(u=o.onItemLeave)==null||u.call(o),a.current===null&&(a.current=window.setInterval(s,50))}),onPointerLeave:z(i.onPointerLeave,()=>{c()})})}),HO="SelectSeparator",i_=d.forwardRef((e,t)=>{const{__scopeSelect:n,...s}=e;return r.jsx(oe.div,{"aria-hidden":!0,...s,ref:t})});i_.displayName=HO;var yf="SelectArrow",WO=d.forwardRef((e,t)=>{const{__scopeSelect:n,...s}=e,i=zu(n),o=fr(yf,n),a=pr(yf,n);return o.open&&a.position==="popper"?r.jsx(Hp,{...i,...s,ref:t}):null});WO.displayName=yf;function o_(e){return e===""||e===void 0}var a_=d.forwardRef((e,t)=>{const{value:n,...s}=e,i=d.useRef(null),o=pe(t,i),a=ym(n);return d.useEffect(()=>{const l=i.current,c=window.HTMLSelectElement.prototype,f=Object.getOwnPropertyDescriptor(c,"value").set;if(a!==n&&f){const p=new Event("change",{bubbles:!0});f.call(l,n),l.dispatchEvent(p)}},[a,n]),r.jsx(Ba,{asChild:!0,children:r.jsx("select",{...s,ref:o,defaultValue:n})})});a_.displayName="BubbleSelect";function l_(e){const t=at(e),n=d.useRef(""),s=d.useRef(0),i=d.useCallback(a=>{const l=n.current+a;t(l),function c(u){n.current=u,window.clearTimeout(s.current),u!==""&&(s.current=window.setTimeout(()=>c(""),1e3))}(l)},[t]),o=d.useCallback(()=>{n.current="",window.clearTimeout(s.current)},[]);return d.useEffect(()=>()=>window.clearTimeout(s.current),[]),[n,i,o]}function c_(e,t,n){const i=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,o=n?e.indexOf(n):-1;let a=VO(e,Math.max(o,0));i.length===1&&(a=a.filter(u=>u!==n));const c=a.find(u=>u.textValue.toLowerCase().startsWith(i.toLowerCase()));return c!==n?c:void 0}function VO(e,t){return e.map((n,s)=>e[(t+s)%e.length])}var KO=OS,u_=FS,GO=$S,qO=zS,QO=BS,d_=HS,JO=GS,h_=JS,f_=XS,YO=ZS,XO=t_,p_=n_,m_=s_,g_=i_;const Qr=KO,Jr=GO,or=d.forwardRef(({className:e,children:t,...n},s)=>r.jsxs(u_,{ref:s,className:Q("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,r.jsx(qO,{asChild:!0,children:r.jsx(kp,{className:"h-4 w-4 opacity-50"})})]}));or.displayName=u_.displayName;const x_=d.forwardRef(({className:e,...t},n)=>r.jsx(p_,{ref:n,className:Q("flex cursor-default items-center justify-center py-1",e),...t,children:r.jsx(cT,{className:"h-4 w-4"})}));x_.displayName=p_.displayName;const v_=d.forwardRef(({className:e,...t},n)=>r.jsx(m_,{ref:n,className:Q("flex cursor-default items-center justify-center py-1",e),...t,children:r.jsx(kp,{className:"h-4 w-4"})}));v_.displayName=m_.displayName;const ar=d.forwardRef(({className:e,children:t,position:n="popper",...s},i)=>r.jsx(QO,{children:r.jsxs(d_,{ref:i,className:Q("relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...s,children:[r.jsx(x_,{}),r.jsx(JO,{className:Q("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),r.jsx(v_,{})]})}));ar.displayName=d_.displayName;const ZO=d.forwardRef(({className:e,...t},n)=>r.jsx(h_,{ref:n,className:Q("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));ZO.displayName=h_.displayName;const Jt=d.forwardRef(({className:e,children:t,...n},s)=>r.jsxs(f_,{ref:s,className:Q("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[r.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:r.jsx(XO,{children:r.jsx(Cp,{className:"h-4 w-4"})})}),r.jsx(YO,{children:t})]}));Jt.displayName=f_.displayName;const eL=d.forwardRef(({className:e,...t},n)=>r.jsx(g_,{ref:n,className:Q("-mx-1 my-1 h-px bg-muted",e),...t}));eL.displayName=g_.displayName;function Xs(){var p,h,v,b,x;const{isAuthenticated:e,user:t}=ei(),[n,s]=xp(),{theme:i,toggleTheme:o}=yo(),a=((p=t==null?void 0:t.userPermissions)==null?void 0:p.role)==="owner",l=((v=(h=t==null?void 0:t.userPermissions)==null?void 0:h.permissions)==null?void 0:v.includes("edit_code"))||a,c=((x=(b=t==null?void 0:t.userPermissions)==null?void 0:b.permissions)==null?void 0:x.includes("manage_users"))||a,u=y=>{const g=document.getElementById(y);g&&g.scrollIntoView({behavior:"smooth"})},f=async()=>{try{console.log("Logout button clicked"),await SM(),window.location.href="/"}catch(y){console.error("Logout error:",y),window.location.href="/"}};return e?r.jsx("header",{className:"bg-background dark:bg-background border-b border-border sticky top-0 z-50",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"flex justify-between items-center h-16",children:[r.jsx("div",{className:"flex items-center",children:r.jsxs(Re,{href:"/",className:"flex items-center space-x-3",children:[r.jsx(Se,{className:"h-8 w-8 text-primary"}),r.jsxs("div",{children:[r.jsx("span",{className:"text-xl font-bold text-foreground",children:"PHANTOM AUTH"}),r.jsx(ie,{className:"ml-2 bg-primary text-primary-foreground text-xs",children:"Enterprise"})]})]})}),r.jsxs("nav",{className:"hidden md:flex items-center space-x-6",children:[r.jsx(Re,{href:"/",children:r.jsxs(O,{variant:n==="/"?"default":"ghost",size:"sm",children:[r.jsx(hx,{className:"h-4 w-4 mr-2"}),"Home"]})}),r.jsx(Re,{href:"/dashboard",children:r.jsxs(O,{variant:n==="/dashboard"?"default":"ghost",size:"sm",children:[r.jsx(xt,{className:"h-4 w-4 mr-2"}),"Dashboard"]})}),r.jsx(Re,{href:"/webhooks",children:r.jsxs(O,{variant:n==="/webhooks"?"default":"ghost",size:"sm",children:[r.jsx(Yh,{className:"h-4 w-4 mr-2"}),"Webhooks"]})}),r.jsx(Re,{href:"/blacklist",children:r.jsxs(O,{variant:n==="/blacklist"?"default":"ghost",size:"sm",children:[r.jsx(Gh,{className:"h-4 w-4 mr-2"}),"Blacklist"]})}),r.jsx(Re,{href:"/activity-logs",children:r.jsxs(O,{variant:n==="/activity-logs"?"default":"ghost",size:"sm",children:[r.jsx(ki,{className:"h-4 w-4 mr-2"}),"Activity"]})}),r.jsx(Re,{href:"/integration",children:r.jsxs(O,{variant:n==="/integration"?"default":"ghost",size:"sm",children:[r.jsx(Qt,{className:"h-4 w-4 mr-2"}),"Code"]})}),r.jsx(Re,{href:"/docs",children:r.jsxs(O,{variant:n==="/docs"?"default":"ghost",size:"sm",children:[r.jsx(ux,{className:"h-4 w-4 mr-2"}),"Docs"]})}),l&&r.jsx(Re,{href:"/code-editor",children:r.jsxs(O,{variant:n==="/code-editor"?"default":"ghost",size:"sm",children:[r.jsx(Qt,{className:"h-4 w-4 mr-2"}),"Code Editor"]})}),c&&r.jsx(Re,{href:"/user-management",children:r.jsxs(O,{variant:n==="/user-management"?"default":"ghost",size:"sm",children:[r.jsx(ST,{className:"h-4 w-4 mr-2"}),"Users"]})})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(O,{variant:"ghost",size:"sm",onClick:o,children:i==="light"?r.jsx(no,{className:"h-4 w-4"}):r.jsx(so,{className:"h-4 w-4"})}),r.jsxs(Tm,{children:[r.jsx(Am,{asChild:!0,children:r.jsx(O,{variant:"ghost",size:"sm",children:r.jsx(Tp,{className:"h-4 w-4"})})}),r.jsxs(Ou,{align:"end",children:[r.jsxs(Be,{onClick:()=>s("/"),children:[r.jsx(hx,{className:"h-4 w-4 mr-2"}),"Home"]}),r.jsxs(Be,{onClick:()=>s("/dashboard"),children:[r.jsx(xt,{className:"h-4 w-4 mr-2"}),"Dashboard"]}),r.jsxs(Be,{onClick:()=>s("/webhooks"),children:[r.jsx(Yh,{className:"h-4 w-4 mr-2"}),"Webhooks"]}),r.jsxs(Be,{onClick:()=>s("/blacklist"),children:[r.jsx(Gh,{className:"h-4 w-4 mr-2"}),"Blacklist"]}),r.jsxs(Be,{onClick:()=>s("/activity-logs"),children:[r.jsx(ki,{className:"h-4 w-4 mr-2"}),"Activity Logs"]}),r.jsxs(Be,{onClick:()=>s("/integration"),children:[r.jsx(Qt,{className:"h-4 w-4 mr-2"}),"Integration Examples"]}),r.jsx(mS,{}),r.jsxs(Be,{onClick:f,children:[r.jsx(xu,{className:"h-4 w-4 mr-2"}),"Sign Out"]})]})]})]})]})})}):r.jsx("header",{className:"bg-background dark:bg-background border-b border-border sticky top-0 z-50",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"flex justify-between items-center h-16",children:[r.jsx("div",{className:"flex items-center",children:r.jsxs(Re,{href:"/",className:"flex items-center space-x-3",children:[r.jsx(Se,{className:"h-8 w-8 text-primary"}),r.jsxs("div",{children:[r.jsx("span",{className:"text-xl font-bold text-foreground",children:"PHANTOM AUTH"}),r.jsx(ie,{className:"ml-2 bg-primary text-primary-foreground text-xs",children:"Enterprise"})]})]})}),r.jsx("nav",{className:"hidden md:block",children:r.jsxs("div",{className:"ml-10 flex items-baseline space-x-6",children:[r.jsx("button",{onClick:()=>u("features"),className:"text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200",children:"Features"}),r.jsxs("button",{onClick:()=>u("docs"),className:"text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200",children:[r.jsx(ux,{className:"h-4 w-4 inline mr-1"}),"Documentation"]}),r.jsxs("button",{onClick:()=>u("dashboard"),className:"text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200",children:[r.jsx(xt,{className:"h-4 w-4 inline mr-1"}),"Dashboard"]}),r.jsxs("button",{onClick:()=>u("pricing"),className:"text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200",children:[r.jsx(fT,{className:"h-4 w-4 inline mr-1"}),"Pricing"]})]})}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(O,{variant:"ghost",size:"sm",onClick:o,children:i==="light"?r.jsx(no,{className:"h-4 w-4"}):r.jsx(so,{className:"h-4 w-4"})}),r.jsx(Re,{href:"/firebase-login",children:r.jsxs(O,{children:[r.jsx(vT,{className:"h-4 w-4 mr-2"}),"Sign In"]})})]})]})})})}function tL(){const[,e]=xp(),{toast:t}=vn(),[n,s]=d.useState(!1),[i,o]=d.useState(!1),[a,l]=d.useState(!1),[c,u]=d.useState({}),[f,p]=d.useState({username:"",password:"",email:"",licenseKey:"",expiresAt:"",hwid:""}),h=window.location.pathname.split("/")[2],{data:v,isLoading:b,error:x}=Je({queryKey:[`/api/applications/${h}`],enabled:!!h,retry:2,staleTime:0}),{data:y=[],isLoading:g}=Je({queryKey:[`/api/applications/${h}/users`],enabled:!!h}),{data:m}=Je({queryKey:[`/api/applications/${h}/stats`],enabled:!!h}),{data:w=[]}=Je({queryKey:[`/api/applications/${h}/licenses`],enabled:!!h}),j=_e({mutationFn:A=>Ne(`/api/applications/${h}`,{method:"PATCH",body:A}),onSuccess:()=>{dt.invalidateQueries({queryKey:["/api/applications"]}),dt.invalidateQueries({queryKey:[`/api/applications/${h}`]}),dt.invalidateQueries({queryKey:[`/api/applications/${h}/stats`]}),s(!1),t({title:"Application updated successfully"})},onError:A=>{t({title:"Failed to update application",description:A.message,variant:"destructive"})}}),S=_e({mutationFn:A=>Ne(`/api/applications/${h}/users/${A}`,{method:"DELETE"}),onSuccess:()=>{dt.invalidateQueries({queryKey:[`/api/applications/${h}/users`]}),dt.invalidateQueries({queryKey:[`/api/applications/${h}/stats`]}),t({title:"User deleted successfully"})},onError:A=>{t({title:"Failed to delete user",description:A.message,variant:"destructive"})}}),N=_e({mutationFn:A=>Ne(`/api/applications/${h}/users/${A}/pause`,{method:"POST"}),onSuccess:()=>{dt.invalidateQueries({queryKey:[`/api/applications/${h}/users`]}),dt.invalidateQueries({queryKey:[`/api/applications/${h}/stats`]}),t({title:"User paused successfully"})},onError:A=>{t({title:"Failed to pause user",description:A.message,variant:"destructive"})}}),C=_e({mutationFn:A=>Ne(`/api/applications/${h}/users/${A}/unpause`,{method:"POST"}),onSuccess:()=>{dt.invalidateQueries({queryKey:[`/api/applications/${h}/users`]}),dt.invalidateQueries({queryKey:[`/api/applications/${h}/stats`]}),t({title:"User unpaused successfully"})},onError:A=>{t({title:"Failed to unpause user",description:A.message,variant:"destructive"})}}),I=_e({mutationFn:A=>Ne(`/api/applications/${h}/users/${A}/reset-hwid`,{method:"PATCH"}),onSuccess:()=>{dt.invalidateQueries({queryKey:[`/api/applications/${h}/users`]}),dt.invalidateQueries({queryKey:[`/api/applications/${h}/stats`]}),t({title:"HWID reset successfully"})},onError:A=>{t({title:"Failed to reset HWID",description:A.message,variant:"destructive"})}}),R=_e({mutationFn:A=>Ne(`/api/applications/${h}/users`,{method:"POST",body:A}),onSuccess:()=>{dt.invalidateQueries({queryKey:[`/api/applications/${h}/users`]}),dt.invalidateQueries({queryKey:[`/api/applications/${h}/stats`]}),dt.invalidateQueries({queryKey:[`/api/applications/${h}/licenses`]}),o(!1),p({username:"",password:"",email:"",licenseKey:"",expiresAt:"",hwid:""}),t({title:"User created successfully"})},onError:A=>{t({title:"Failed to create user",description:A.message,variant:"destructive"})}});d.useEffect(()=>{v&&(console.log("Application data received:",v),u(v))},[v]),d.useEffect(()=>{console.log("App Management Debug:",{appId:h,application:v,isLoadingApp:b,applicationError:x,appUsers:y,appStats:m})},[h,v,b,x,y,m]);const M=async A=>{try{await navigator.clipboard.writeText(A),t({title:"Copied to clipboard"})}catch{t({title:"Failed to copy",variant:"destructive"})}},k=()=>{j.mutate(c)},F=()=>{if(!f.username.trim()){t({title:"Error",description:"Username is required",variant:"destructive"});return}if(!f.password.trim()){t({title:"Error",description:"Password is required",variant:"destructive"});return}const A={...f};(!A.licenseKey||!A.licenseKey.trim())&&(A.licenseKey=void 0),R.mutate(A)};return b?r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx(Xs,{}),r.jsx("div",{className:"relative z-10 container mx-auto px-4 py-8",children:r.jsx("div",{className:"text-center",children:"Loading application..."})})]}):v?r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx(Xs,{}),r.jsxs("div",{className:"relative z-10 container mx-auto px-4 py-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs(O,{variant:"ghost",onClick:()=>e("/dashboard"),children:[r.jsx(nT,{className:"mr-2 h-4 w-4"}),"Back to Dashboard"]}),r.jsxs("div",{children:[r.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-3",children:[v.name,r.jsx(ie,{variant:v.isActive?"default":"secondary",children:v.isActive?"Active":"Inactive"})]}),r.jsx("p",{className:"text-muted-foreground",children:v.description})]})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs(O,{onClick:()=>e(`/app/${h}/licenses`),variant:"outline",children:[r.jsx(qn,{className:"mr-2 h-4 w-4"}),"License Keys"]}),r.jsxs(Ft,{open:n,onOpenChange:s,children:[r.jsx(ir,{asChild:!0,children:r.jsxs(O,{children:[r.jsx(Tp,{className:"mr-2 h-4 w-4"}),"Settings"]})}),r.jsxs(kt,{className:"max-w-2xl",children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Application Settings"}),r.jsx(At,{children:"Update your application configuration"})]}),r.jsxs("div",{className:"grid gap-4 py-4",children:[r.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx(U,{htmlFor:"name",children:"Application Name"}),r.jsx(ne,{id:"name",value:c.name||"",onChange:A=>u(D=>({...D,name:A.target.value}))})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"version",children:"Version"}),r.jsx(ne,{id:"version",value:c.version||"",onChange:A=>u(D=>({...D,version:A.target.value}))})]})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"description",children:"Description"}),r.jsx(In,{id:"description",value:c.description||"",onChange:A=>u(D=>({...D,description:A.target.value}))})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(Ca,{id:"isActive",checked:c.isActive||!1,onCheckedChange:A=>u(D=>({...D,isActive:A}))}),r.jsx(U,{htmlFor:"isActive",children:"Application Active"})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(Ca,{id:"hwidLockEnabled",checked:c.hwidLockEnabled||!1,onCheckedChange:A=>u(D=>({...D,hwidLockEnabled:A}))}),r.jsx(U,{htmlFor:"hwidLockEnabled",children:"HWID Lock Enabled"})]}),r.jsxs("div",{className:"flex justify-end gap-2",children:[r.jsx(O,{variant:"outline",onClick:()=>s(!1),children:"Cancel"}),r.jsx(O,{onClick:k,disabled:j.isPending,children:j.isPending?"Updating...":"Update Application"})]})]})]})]})]})]}),r.jsxs(Dr,{defaultValue:"overview",className:"space-y-6",children:[r.jsxs(Ys,{children:[r.jsx(Ae,{value:"overview",children:"Overview"}),r.jsxs(Ae,{value:"users",children:["Users (",y.length,")"]}),r.jsx(Ae,{value:"api",children:"API Configuration"}),r.jsx(Ae,{value:"messages",children:"Messages"})]}),r.jsx(Ie,{value:"overview",className:"space-y-6",children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[r.jsxs(H,{children:[r.jsx(K,{children:r.jsx(G,{children:"Application Info"})}),r.jsxs(Y,{className:"space-y-2",children:[r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Name"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:(v==null?void 0:v.name)||"Loading..."})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Version"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:(v==null?void 0:v.version)||"Loading..."})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Description"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:(v==null?void 0:v.description)||"No description"})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Created"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:v!=null&&v.createdAt?new Date(v.createdAt).toLocaleDateString()+" "+new Date(v.createdAt).toLocaleTimeString():"Loading..."})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Last Updated"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:v!=null&&v.updatedAt?new Date(v.updatedAt).toLocaleDateString()+" "+new Date(v.updatedAt).toLocaleTimeString():"Loading..."})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"API Key"}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"font-mono text-xs bg-muted px-2 py-1 rounded",children:v!=null&&v.apiKey?`${v.apiKey.substring(0,8)}...`:"Loading..."}),(v==null?void 0:v.apiKey)&&r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>M(v.apiKey),title:"Copy API Key",children:r.jsx(We,{className:"h-3 w-3"})})]})]})]})]}),r.jsxs(H,{children:[r.jsx(K,{children:r.jsx(G,{children:"Security Settings"})}),r.jsxs(Y,{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(U,{className:"text-sm font-medium",children:"Status"}),r.jsx(ie,{variant:v!=null&&v.isActive?"default":"secondary",children:v!=null&&v.isActive?"Online":"Inactive"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(U,{className:"text-sm font-medium",children:"HWID Lock"}),r.jsx(ie,{variant:v!=null&&v.hwidLockEnabled?"default":"secondary",children:v!=null&&v.hwidLockEnabled?"Enabled":"Disabled"})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(U,{className:"text-sm font-medium",children:"User Count"}),r.jsx("span",{className:"text-sm font-medium",children:(m==null?void 0:m.totalUsers)||y.length})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(U,{className:"text-sm font-medium",children:"Active Users"}),r.jsx("span",{className:"text-sm font-medium",children:(m==null?void 0:m.activeUsers)||0})]})]})]}),r.jsxs(H,{children:[r.jsx(K,{children:r.jsx(G,{children:"Real-time Statistics"})}),r.jsxs(Y,{className:"space-y-2",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(U,{className:"text-sm font-medium",children:"Live Sessions"}),r.jsx("p",{className:"text-lg font-bold text-green-600",children:(m==null?void 0:m.activeSessions)||0})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(U,{className:"text-sm font-medium",children:"API Requests"}),r.jsx("p",{className:"text-lg font-bold",children:(m==null?void 0:m.totalApiRequests)||0})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(U,{className:"text-sm font-medium",children:"Success Rate"}),r.jsxs("p",{className:"text-lg font-bold text-blue-600",children:[(m==null?void 0:m.loginSuccessRate)||0,"%"]})]}),r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsx(U,{className:"text-sm font-medium",children:"Last Activity"}),r.jsx("p",{className:"text-xs text-muted-foreground",children:m!=null&&m.lastActivity?new Date(m.lastActivity).toLocaleString():"No recent activity"})]})]})]})]})}),r.jsx(Ie,{value:"users",className:"space-y-6",children:r.jsxs(H,{children:[r.jsx(K,{children:r.jsxs(G,{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(xt,{className:"h-5 w-5"}),"Application Users (",y.length,")"]}),r.jsxs(Ft,{open:i,onOpenChange:o,children:[r.jsx(ir,{asChild:!0,children:r.jsxs(O,{children:[r.jsx(B0,{className:"mr-2 h-4 w-4"}),"Add User"]})}),r.jsxs(kt,{className:"max-w-md",children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Create New User"}),r.jsx(At,{children:"Add a new user to your application using a license key"})]}),r.jsxs("div",{className:"grid gap-4 py-4",children:[r.jsxs("div",{children:[r.jsx(U,{htmlFor:"username",children:"Username *"}),r.jsx(ne,{id:"username",value:f.username,onChange:A=>p(D=>({...D,username:A.target.value})),placeholder:"Enter username"})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"password",children:"Password *"}),r.jsx(ne,{id:"password",type:"password",value:f.password,onChange:A=>p(D=>({...D,password:A.target.value})),placeholder:"Enter password"})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"email",children:"Email"}),r.jsx(ne,{id:"email",type:"email",value:f.email,onChange:A=>p(D=>({...D,email:A.target.value})),placeholder:"Enter email (optional)"})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"license-key",children:"License Key (Optional)"}),r.jsx("p",{className:"text-xs text-muted-foreground mb-2",children:"Leave empty for direct admin creation or select a license key to assign"}),w.length>0?r.jsxs(Qr,{value:f.licenseKey,onValueChange:A=>p(D=>({...D,licenseKey:A})),children:[r.jsx(or,{children:r.jsx(Jr,{placeholder:"Select a license key (optional)"})}),r.jsxs(ar,{children:[r.jsx(Jt,{value:"",children:"No license key"}),w.filter(A=>A.isActive&&A.currentUsers<A.maxUsers&&new Date(A.expiresAt)>new Date).map(A=>r.jsxs(Jt,{value:A.licenseKey,children:[A.licenseKey.substring(0,16),"... (",A.currentUsers,"/",A.maxUsers," users)"]},A.id))]})]}):r.jsx(ne,{value:f.licenseKey,onChange:A=>p(D=>({...D,licenseKey:A.target.value})),placeholder:"Enter license key (optional)"})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"expires-at",children:"Expires At"}),r.jsx(ne,{id:"expires-at",type:"datetime-local",value:f.expiresAt,onChange:A=>p(D=>({...D,expiresAt:A.target.value}))})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"hwid",children:"Hardware ID"}),r.jsx(ne,{id:"hwid",value:f.hwid,onChange:A=>p(D=>({...D,hwid:A.target.value})),placeholder:"Enter HWID (optional)"})]}),r.jsxs("div",{className:"flex justify-end gap-2",children:[r.jsx(O,{variant:"outline",onClick:()=>o(!1),children:"Cancel"}),r.jsx(O,{onClick:F,disabled:R.isPending,children:R.isPending?"Creating...":"Create User"})]})]})]})]})]})}),r.jsx(Y,{children:g?r.jsx("div",{className:"text-center py-8",children:"Loading users..."}):y.length===0?r.jsx("div",{className:"text-center py-8 text-muted-foreground",children:"No users registered yet"}):r.jsxs(ls,{children:[r.jsx(cs,{children:r.jsxs(Ze,{children:[r.jsx(se,{children:"Username"}),r.jsx(se,{children:"Email"}),r.jsx(se,{children:"Status"}),r.jsx(se,{children:"HWID"}),r.jsx(se,{children:"Expires"}),r.jsx(se,{children:"Last Login"}),r.jsx(se,{children:"Actions"})]})}),r.jsx(us,{children:y.map(A=>r.jsxs(Ze,{children:[r.jsx(re,{className:"font-medium",children:A.username}),r.jsx(re,{children:A.email}),r.jsx(re,{children:r.jsxs("div",{className:"flex gap-1",children:[r.jsx(ie,{variant:A.isActive?"default":"secondary",children:A.isActive?"Active":"Inactive"}),A.isPaused&&r.jsx(ie,{variant:"outline",children:"Paused"})]})}),r.jsx(re,{children:r.jsx("span",{className:"font-mono text-xs",children:A.hwid?`${A.hwid.substring(0,8)}...`:"Not set"})}),r.jsx(re,{children:A.expiresAt?new Date(A.expiresAt).toLocaleDateString():"Never"}),r.jsx(re,{children:A.lastLogin?new Date(A.lastLogin).toLocaleDateString():"Never"}),r.jsx(re,{children:r.jsxs(Tm,{children:[r.jsx(Am,{asChild:!0,children:r.jsx(O,{variant:"ghost",className:"h-8 w-8 p-0",children:r.jsx(pT,{className:"h-4 w-4"})})}),r.jsxs(Ou,{align:"end",children:[r.jsx(Be,{onClick:()=>A.isPaused?C.mutate(A.id):N.mutate(A.id),children:A.isPaused?r.jsxs(r.Fragment,{children:[r.jsx($0,{className:"mr-2 h-4 w-4"}),"Unpause"]}):r.jsxs(r.Fragment,{children:[r.jsx(U0,{className:"mr-2 h-4 w-4"}),"Pause"]})}),A.hwid&&r.jsxs(Be,{onClick:()=>I.mutate(A.id),children:[r.jsx(Se,{className:"mr-2 h-4 w-4"}),"Reset HWID"]}),r.jsxs(Lu,{children:[r.jsx(Fu,{asChild:!0,children:r.jsxs(Be,{onSelect:D=>D.preventDefault(),children:[r.jsx(Wr,{className:"mr-2 h-4 w-4"}),"Delete User"]})}),r.jsxs(tl,{children:[r.jsxs(nl,{children:[r.jsx(rl,{children:"Delete User"}),r.jsxs(il,{children:["Are you sure you want to delete ",A.username,"? This action cannot be undone."]})]}),r.jsxs(sl,{children:[r.jsx(al,{children:"Cancel"}),r.jsx(ol,{onClick:()=>S.mutate(A.id),className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete"})]})]})]})]})]})})]},A.id))})]})})]})}),r.jsx(Ie,{value:"api",className:"space-y-6",children:r.jsxs(H,{children:[r.jsx(K,{children:r.jsx(G,{children:"API Configuration"})}),r.jsxs(Y,{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"API Key"}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(ne,{type:a?"text":"password",value:v.apiKey,readOnly:!0,className:"font-mono"}),r.jsx(O,{variant:"outline",size:"sm",onClick:()=>l(!a),children:a?r.jsx(F0,{className:"h-4 w-4"}):r.jsx(Ep,{className:"h-4 w-4"})}),r.jsx(O,{variant:"outline",size:"sm",onClick:()=>M(v.apiKey),children:r.jsx(We,{className:"h-4 w-4"})})]})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Base URL"}),r.jsx(ne,{value:`${window.location.origin}/api/auth`,readOnly:!0})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Login Endpoint"}),r.jsx(ne,{value:`${window.location.origin}/api/auth/login`,readOnly:!0})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Register Endpoint"}),r.jsx(ne,{value:`${window.location.origin}/api/auth/register`,readOnly:!0})]})]})]})}),r.jsx(Ie,{value:"messages",className:"space-y-6",children:r.jsxs(H,{children:[r.jsx(K,{children:r.jsx(G,{children:"Custom Messages"})}),r.jsxs(Y,{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Login Success Message"}),r.jsx(ne,{value:v.loginSuccessMessage,readOnly:!0})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Login Failed Message"}),r.jsx(ne,{value:v.loginFailedMessage,readOnly:!0})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Account Disabled Message"}),r.jsx(ne,{value:v.accountDisabledMessage,readOnly:!0})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Account Expired Message"}),r.jsx(ne,{value:v.accountExpiredMessage,readOnly:!0})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Version Mismatch Message"}),r.jsx(ne,{value:v.versionMismatchMessage,readOnly:!0})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"HWID Mismatch Message"}),r.jsx(ne,{value:v.hwidMismatchMessage,readOnly:!0})]})]})]})})]})]})]}):r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx(Xs,{}),r.jsx("div",{className:"relative z-10 container mx-auto px-4 py-8",children:r.jsx("div",{className:"text-center",children:"Application not found"})})]})}const nL=Ha("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),Ta=d.forwardRef(({className:e,variant:t,...n},s)=>r.jsx("div",{ref:s,role:"alert",className:Q(nL({variant:t}),e),...n}));Ta.displayName="Alert";const sL=d.forwardRef(({className:e,...t},n)=>r.jsx("h5",{ref:n,className:Q("mb-1 font-medium leading-none tracking-tight",e),...t}));sL.displayName="AlertTitle";const Aa=d.forwardRef(({className:e,...t},n)=>r.jsx("div",{ref:n,className:Q("text-sm [&_p]:leading-relaxed",e),...t}));Aa.displayName="AlertDescription";function rL(){const{theme:e,toggleTheme:t}=yo(),{toast:n}=vn(),s=o=>{navigator.clipboard.writeText(o),n({title:"Copied",description:"Code copied to clipboard"})},i=()=>{window.location.href="/api/logout"};return r.jsxs("div",{className:"min-h-screen bg-background",children:[r.jsx("nav",{className:"phantom-nav fixed w-full top-0 z-50",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"flex justify-between h-16",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(Se,{className:"h-8 w-8 phantom-text mr-3"}),r.jsx("span",{className:"text-xl font-bold text-foreground",children:"Phantom Auth"})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(Re,{href:"/",children:r.jsx(O,{variant:"ghost",size:"sm",children:"Home"})}),r.jsx(Re,{href:"/dashboard",children:r.jsx(O,{variant:"ghost",size:"sm",children:"Dashboard"})}),r.jsx(O,{variant:"ghost",size:"icon",onClick:t,className:"text-foreground hover:text-primary",children:e==="light"?r.jsx(no,{className:"h-5 w-5"}):r.jsx(so,{className:"h-5 w-5"})}),r.jsxs(O,{variant:"ghost",size:"sm",onClick:i,children:[r.jsx(xu,{className:"h-4 w-4 mr-2"}),"Logout"]})]})]})})}),r.jsxs("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 pt-24",children:[r.jsx("div",{className:"mb-8",children:r.jsxs("div",{className:"text-center",children:[r.jsx(oT,{className:"h-16 w-16 phantom-text mx-auto mb-6"}),r.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-foreground mb-4",children:"Documentation"}),r.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto",children:"Complete integration guide for Phantom Auth API. Learn how to implement secure authentication in your C# WinForms applications with HWID locking, version control, and blacklist management."})]})}),r.jsxs(H,{className:"phantom-card mb-8",children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center",children:[r.jsx(vu,{className:"h-5 w-5 phantom-text mr-2"}),"Quick Start Guide"]}),r.jsx(me,{children:"Get up and running with Phantom Auth in 5 minutes"})]}),r.jsx(Y,{children:r.jsxs("div",{className:"space-y-6",children:[r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Step 1: Create an Application"}),r.jsx("p",{className:"text-muted-foreground mb-2",children:"Go to your dashboard and create a new application to get your API key."}),r.jsx(Re,{href:"/dashboard",children:r.jsx(O,{className:"phantom-button",children:"Go to Dashboard"})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Step 2: Get Your API Key"}),r.jsx("p",{className:"text-muted-foreground",children:"After creating an application, copy the API key from your dashboard. You'll need this for all API requests."})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Step 3: Start Making API Calls"}),r.jsx("p",{className:"text-muted-foreground",children:"Use the API endpoints below to register users, authenticate them, and manage sessions."})]})]})})]}),r.jsxs(H,{className:"phantom-card mb-8",children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center",children:[r.jsx(Qt,{className:"h-5 w-5 phantom-text mr-2"}),"API Reference"]}),r.jsx(me,{children:"Complete API documentation with examples"})]}),r.jsxs(Y,{children:[r.jsxs(Ta,{className:"mb-6",children:[r.jsx(Se,{className:"h-4 w-4"}),r.jsxs(Aa,{children:[r.jsx("strong",{children:"Base URL:"})," ",window.location.origin,"/api/v1",r.jsx("br",{}),r.jsx("strong",{children:"Authentication:"})," Include your API key in the ",r.jsx("code",{children:"X-API-Key"})," header or as ",r.jsx("code",{children:"api_key"})," query parameter."]})]}),r.jsxs(Dr,{defaultValue:"register",className:"space-y-6",children:[r.jsxs(Ys,{className:"grid w-full grid-cols-3",children:[r.jsx(Ae,{value:"register",children:"Register User"}),r.jsx(Ae,{value:"login",children:"User Login"}),r.jsx(Ae,{value:"verify",children:"Verify Session"})]}),r.jsx(Ie,{value:"register",children:r.jsx("div",{className:"space-y-4",children:r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"POST /register"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Register a new user in your application"}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Request"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`curl -X POST "${window.location.origin}/api/v1/register" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "securepassword123",
    "expiresAt": "2024-12-31T23:59:59Z"
  }'`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`curl -X POST "${window.location.origin}/api/v1/register" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "username": "johndoe",
    "email": "john@example.com", 
    "password": "securepassword123",
    "expiresAt": "2024-12-31T23:59:59Z"
  }'`})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Response"}),r.jsx(ie,{variant:"secondary",children:"200 OK"})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`{
  "success": true,
  "message": "User registered successfully",
  "user_id": 123
}`})]})]})})}),r.jsx(Ie,{value:"login",children:r.jsx("div",{className:"space-y-4",children:r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"POST /login"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Authenticate a user with username and password"}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Enhanced Request (with version and HWID)"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`curl -X POST "${window.location.origin}/api/v1/login" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "username": "johndoe",
    "password": "securepassword123",
    "version": "1.0.0",
    "hwid": "HWID-12345-ABCDE"
  }'`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`curl -X POST "${window.location.origin}/api/v1/login" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "username": "johndoe",
    "password": "securepassword123",
    "version": "1.0.0",
    "hwid": "HWID-12345-ABCDE"
  }'`})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Response"}),r.jsx(ie,{variant:"secondary",children:"200 OK"})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`{
  "success": true,
  "message": "Login successful!",
  "user_id": 123,
  "username": "johndoe",
  "email": "john@example.com",
  "expires_at": "2024-12-31T23:59:59Z",
  "hwid_locked": true
  "email": "john@example.com"
}`})]})]})})}),r.jsx(Ie,{value:"verify",children:r.jsx("div",{className:"space-y-4",children:r.jsxs("div",{children:[r.jsx("h4",{className:"text-lg font-semibold mb-2",children:"POST /verify"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Verify if a user session is still valid"}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Request"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`curl -X POST "${window.location.origin}/api/v1/verify" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "user_id": 123
  }'`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`curl -X POST "${window.location.origin}/api/v1/verify" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: YOUR_API_KEY" \\
  -d '{
    "user_id": 123
  }'`})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Response"}),r.jsx(ie,{variant:"secondary",children:"200 OK"})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`{
  "success": true,
  "message": "User verified",
  "user_id": 123,
  "username": "johndoe",
  "email": "john@example.com",
  "expires_at": "2024-12-31T23:59:59.000Z"
}`})]})]})})})]})]})]}),r.jsxs(H,{className:"phantom-card mb-8",children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center",children:[r.jsx(xt,{className:"h-5 w-5 phantom-text mr-2"}),"Integration Examples"]}),r.jsx(me,{children:"Ready-to-use code examples for different programming languages"})]}),r.jsx(Y,{children:r.jsxs(Dr,{defaultValue:"javascript",className:"space-y-6",children:[r.jsxs(Ys,{className:"grid w-full grid-cols-4",children:[r.jsx(Ae,{value:"javascript",children:"JavaScript"}),r.jsx(Ae,{value:"python",children:"Python"}),r.jsx(Ae,{value:"csharp",children:"C#"}),r.jsx(Ae,{value:"php",children:"PHP"})]}),r.jsx(Ie,{value:"javascript",children:r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"JavaScript/Node.js Integration"}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Login Form Example"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`class PhantomAuth {
  constructor(apiKey, baseUrl = '${window.location.origin}/api/v1') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async login(username, password) {
    const response = await fetch(\`\${this.baseUrl}/login\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey
      },
      body: JSON.stringify({ username, password })
    });
    
    return await response.json();
  }

  async register(username, email, password, expiresAt = null) {
    const response = await fetch(\`\${this.baseUrl}/register\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey
      },
      body: JSON.stringify({ username, email, password, expiresAt })
    });
    
    return await response.json();
  }

  async verify(userId) {
    const response = await fetch(\`\${this.baseUrl}/verify\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey
      },
      body: JSON.stringify({ user_id: userId })
    });
    
    return await response.json();
  }
}

// Usage example
const auth = new PhantomAuth('your_api_key_here');

// Login button click handler
document.getElementById('loginBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  try {
    const result = await auth.login(username, password);
    if (result.success) {
      localStorage.setItem('user_id', result.user_id);
      alert('Login successful!');
    } else {
      alert('Login failed: ' + result.message);
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
});`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`class PhantomAuth {
  constructor(apiKey, baseUrl = '${window.location.origin}/api/v1') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async login(username, password) {
    const response = await fetch(\`\${this.baseUrl}/login\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey
      },
      body: JSON.stringify({ username, password })
    });
    
    return await response.json();
  }

  async register(username, email, password, expiresAt = null) {
    const response = await fetch(\`\${this.baseUrl}/register\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey
      },
      body: JSON.stringify({ username, email, password, expiresAt })
    });
    
    return await response.json();
  }

  async verify(userId) {
    const response = await fetch(\`\${this.baseUrl}/verify\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': this.apiKey
      },
      body: JSON.stringify({ user_id: userId })
    });
    
    return await response.json();
  }
}

// Usage example
const auth = new PhantomAuth('your_api_key_here');

// Login button click handler
document.getElementById('loginBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  try {
    const result = await auth.login(username, password);
    if (result.success) {
      localStorage.setItem('user_id', result.user_id);
      alert('Login successful!');
    } else {
      alert('Login failed: ' + result.message);
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
});`})]})]})}),r.jsx(Ie,{value:"python",children:r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Python Integration"}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Python Class Example"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`import requests
import json

class PhantomAuth:
    def __init__(self, api_key, base_url="${window.location.origin}/api/v1"):
        self.api_key = api_key
        self.base_url = base_url
        self.headers = {
            'Content-Type': 'application/json',
            'X-API-Key': api_key
        }
    
    def login(self, username, password):
        url = f"{self.base_url}/login"
        data = {
            'username': username,
            'password': password
        }
        
        response = requests.post(url, headers=self.headers, json=data)
        return response.json()
    
    def register(self, username, email, password, expires_at=None):
        url = f"{self.base_url}/register"
        data = {
            'username': username,
            'email': email,
            'password': password
        }
        
        if expires_at:
            data['expiresAt'] = expires_at
            
        response = requests.post(url, headers=self.headers, json=data)
        return response.json()
    
    def verify(self, user_id):
        url = f"{self.base_url}/verify"
        data = {'user_id': user_id}
        
        response = requests.post(url, headers=self.headers, json=data)
        return response.json()

# Usage example
auth = PhantomAuth('your_api_key_here')

# Login example
result = auth.login('johndoe', 'password123')
if result.get('success'):
    print(f"Login successful! User ID: {result.get('user_id')}")
else:
    print(f"Login failed: {result.get('message')}")

# Register example  
result = auth.register('newuser', 'user@example.com', 'password123', '2024-12-31T23:59:59Z')
if result.get('success'):
    print(f"Registration successful! User ID: {result.get('user_id')}")
else:
    print(f"Registration failed: {result.get('message')}")`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`import requests
import json

class PhantomAuth:
    def __init__(self, api_key, base_url="${window.location.origin}/api/v1"):
        self.api_key = api_key
        self.base_url = base_url
        self.headers = {
            'Content-Type': 'application/json',
            'X-API-Key': api_key
        }
    
    def login(self, username, password):
        url = f"{self.base_url}/login"
        data = {
            'username': username,
            'password': password
        }
        
        response = requests.post(url, headers=self.headers, json=data)
        return response.json()
    
    def register(self, username, email, password, expires_at=None):
        url = f"{self.base_url}/register"
        data = {
            'username': username,
            'email': email,
            'password': password
        }
        
        if expires_at:
            data['expiresAt'] = expires_at
            
        response = requests.post(url, headers=self.headers, json=data)
        return response.json()
    
    def verify(self, user_id):
        url = f"{self.base_url}/verify"
        data = {'user_id': user_id}
        
        response = requests.post(url, headers=self.headers, json=data)
        return response.json()

# Usage example
auth = PhantomAuth('your_api_key_here')

# Login example
result = auth.login('johndoe', 'password123')
if result.get('success'):
    print(f"Login successful! User ID: {result.get('user_id')}")
else:
    print(f"Login failed: {result.get('message')}")

# Register example  
result = auth.register('newuser', 'user@example.com', 'password123', '2024-12-31T23:59:59Z')
if result.get('success'):
    print(f"Registration successful! User ID: {result.get('user_id')}")
else:
    print(f"Registration failed: {result.get('message')}")`})]})]})}),r.jsx(Ie,{value:"csharp",children:r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"C# WinForms Integration with HWID & Version Control"}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Complete PhantomAuth Class with HWID Support"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Management;
using System.Security.Cryptography;
using Newtonsoft.Json;

public class PhantomAuth
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;
    private readonly string _baseUrl;
    private readonly string _appVersion;

    public PhantomAuth(string apiKey, string appVersion = "1.0.0", string baseUrl = "${window.location.origin}/api/v1")
    {
        _apiKey = apiKey;
        _baseUrl = baseUrl;
        _appVersion = appVersion;
        _httpClient = new HttpClient();
        _httpClient.DefaultRequestHeaders.Add("X-API-Key", apiKey);
    }

    // Generate Hardware ID
    public static string GetHardwareId()
    {
        try
        {
            string hwid = "";
            
            // Get CPU ID
            ManagementObjectSearcher mos = new ManagementObjectSearcher("SELECT ProcessorId FROM Win32_Processor");
            foreach (ManagementObject mo in mos.Get())
            {
                hwid += mo["ProcessorId"].ToString();
            }
            
            // Get Motherboard Serial
            mos = new ManagementObjectSearcher("SELECT SerialNumber FROM Win32_BaseBoard");
            foreach (ManagementObject mo in mos.Get())
            {
                hwid += mo["SerialNumber"].ToString();
            }
            
            // Get BIOS Serial
            mos = new ManagementObjectSearcher("SELECT SerialNumber FROM Win32_BIOS");
            foreach (ManagementObject mo in mos.Get())
            {
                hwid += mo["SerialNumber"].ToString();
            }
            
            // Create hash of combined hardware info
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] hash = sha256.ComputeHash(Encoding.UTF8.GetBytes(hwid));
                return Convert.ToBase64String(hash).Substring(0, 32);
            }
        }
        catch
        {
            return "HWID-FALLBACK-" + Environment.MachineName;
        }
    }

    public async Task<AuthResponse> LoginAsync(string username, string password, bool includeHwid = true)
    {
        var data = new { 
            username, 
            password, 
            api_key = _apiKey,
            version = _appVersion,
            hwid = includeHwid ? GetHardwareId() : null
        };
        
        var json = JsonConvert.SerializeObject(data);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/login", content);
        var responseJson = await response.Content.ReadAsStringAsync();
        
        return JsonConvert.DeserializeObject<AuthResponse>(responseJson);
    }

    public async Task<AuthResponse> RegisterAsync(string username, string email, string password, DateTime? expiresAt = null)
    {
        var data = new { 
            username, 
            email, 
            password, 
            expiresAt,
            hwid = GetHardwareId()
        };
        
        var json = JsonConvert.SerializeObject(data);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/register", content);
        var responseJson = await response.Content.ReadAsStringAsync();
        
        return JsonConvert.DeserializeObject<AuthResponse>(responseJson);
    }

    public async Task<AuthResponse> VerifySessionAsync(int userId)
    {
        var data = new { user_id = userId };
        var json = JsonConvert.SerializeObject(data);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/verify", content);
        var responseJson = await response.Content.ReadAsStringAsync();
        
        return JsonConvert.DeserializeObject<AuthResponse>(responseJson);
    }
}

public class AuthResponse
{
    [JsonProperty("success")]
    public bool Success { get; set; }
    
    [JsonProperty("message")]
    public string Message { get; set; }
    
    [JsonProperty("user_id")]
    public int? UserId { get; set; }
    
    [JsonProperty("username")]
    public string Username { get; set; }
    
    [JsonProperty("email")]
    public string Email { get; set; }
    
    [JsonProperty("expires_at")]
    public DateTime? ExpiresAt { get; set; }
    
    [JsonProperty("hwid_locked")]
    public bool? HwidLocked { get; set; }
}`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Management;
using System.Security.Cryptography;
using Newtonsoft.Json;

public class PhantomAuth
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;
    private readonly string _baseUrl;
    private readonly string _appVersion;

    public PhantomAuth(string apiKey, string appVersion = "1.0.0", string baseUrl = "${window.location.origin}/api/v1")
    {
        _apiKey = apiKey;
        _baseUrl = baseUrl;
        _appVersion = appVersion;
        _httpClient = new HttpClient();
        _httpClient.DefaultRequestHeaders.Add("X-API-Key", apiKey);
    }

    // Generate Hardware ID
    public static string GetHardwareId()
    {
        try
        {
            string hwid = "";
            
            // Get CPU ID
            ManagementObjectSearcher mos = new ManagementObjectSearcher("SELECT ProcessorId FROM Win32_Processor");
            foreach (ManagementObject mo in mos.Get())
            {
                hwid += mo["ProcessorId"].ToString();
            }
            
            // Get Motherboard Serial
            mos = new ManagementObjectSearcher("SELECT SerialNumber FROM Win32_BaseBoard");
            foreach (ManagementObject mo in mos.Get())
            {
                hwid += mo["SerialNumber"].ToString();
            }
            
            // Get BIOS Serial
            mos = new ManagementObjectSearcher("SELECT SerialNumber FROM Win32_BIOS");
            foreach (ManagementObject mo in mos.Get())
            {
                hwid += mo["SerialNumber"].ToString();
            }
            
            // Create hash of combined hardware info
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] hash = sha256.ComputeHash(Encoding.UTF8.GetBytes(hwid));
                return Convert.ToBase64String(hash).Substring(0, 32);
            }
        }
        catch
        {
            return "HWID-FALLBACK-" + Environment.MachineName;
        }
    }

    public async Task<AuthResponse> LoginAsync(string username, string password, bool includeHwid = true)
    {
        var data = new { 
            username, 
            password, 
            api_key = _apiKey,
            version = _appVersion,
            hwid = includeHwid ? GetHardwareId() : null
        };
        
        var json = JsonConvert.SerializeObject(data);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/login", content);
        var responseJson = await response.Content.ReadAsStringAsync();
        
        return JsonConvert.DeserializeObject<AuthResponse>(responseJson);
    }

    public async Task<AuthResponse> RegisterAsync(string username, string email, string password, DateTime? expiresAt = null)
    {
        var data = new { 
            username, 
            email, 
            password, 
            expiresAt,
            hwid = GetHardwareId()
        };
        
        var json = JsonConvert.SerializeObject(data);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/register", content);
        var responseJson = await response.Content.ReadAsStringAsync();
        
        return JsonConvert.DeserializeObject<AuthResponse>(responseJson);
    }

    public async Task<AuthResponse> VerifySessionAsync(int userId)
    {
        var data = new { user_id = userId };
        var json = JsonConvert.SerializeObject(data);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/verify", content);
        var responseJson = await response.Content.ReadAsStringAsync();
        
        return JsonConvert.DeserializeObject<AuthResponse>(responseJson);
    }
}

public class AuthResponse
{
    [JsonProperty("success")]
    public bool Success { get; set; }
    
    [JsonProperty("message")]
    public string Message { get; set; }
    
    [JsonProperty("user_id")]
    public int? UserId { get; set; }
    
    [JsonProperty("username")]
    public string Username { get; set; }
    
    [JsonProperty("email")]
    public string Email { get; set; }
    
    [JsonProperty("expires_at")]
    public DateTime? ExpiresAt { get; set; }
    
    [JsonProperty("hwid_locked")]
    public bool? HwidLocked { get; set; }
}`})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"WinForms Login Button Implementation"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`// In your WinForms application
public partial class LoginForm : Form
{
    private PhantomAuth _auth;
    private const string API_KEY = "your_api_key_here";
    private const string APP_VERSION = "1.0.0";

    public LoginForm()
    {
        InitializeComponent();
        _auth = new PhantomAuth(API_KEY, APP_VERSION);
    }

    private async void btnLogin_Click(object sender, EventArgs e)
    {
        try
        {
            // Disable login button during request
            btnLogin.Enabled = false;
            btnLogin.Text = "Logging in...";

            string username = txtUsername.Text.Trim();
            string password = txtPassword.Text;

            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                MessageBox.Show("Please enter both username and password.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            // Attempt login with HWID and version checking
            AuthResponse result = await _auth.LoginAsync(username, password, true);

            if (result.Success)
            {
                // Store user session data
                Properties.Settings.Default.UserId = result.UserId ?? 0;
                Properties.Settings.Default.Username = result.Username;
                Properties.Settings.Default.Email = result.Email;
                Properties.Settings.Default.Save();

                MessageBox.Show(result.Message, "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
                
                // Open main application form
                MainForm mainForm = new MainForm();
                mainForm.Show();
                this.Hide();
            }
            else
            {
                // Handle specific error messages
                string errorTitle = "Login Failed";
                MessageBoxIcon icon = MessageBoxIcon.Error;

                if (result.Message.Contains("version"))
                {
                    errorTitle = "Update Required";
                    icon = MessageBoxIcon.Warning;
                }
                else if (result.Message.Contains("hardware") || result.Message.Contains("HWID"))
                {
                    errorTitle = "Hardware Mismatch";
                    icon = MessageBoxIcon.Warning;
                }
                else if (result.Message.Contains("expired"))
                {
                    errorTitle = "Account Expired";
                    icon = MessageBoxIcon.Warning;
                }
                else if (result.Message.Contains("disabled") || result.Message.Contains("paused"))
                {
                    errorTitle = "Account Disabled";
                    icon = MessageBoxIcon.Warning;
                }

                MessageBox.Show(result.Message, errorTitle, MessageBoxButtons.OK, icon);
            }
        }
        catch (HttpRequestException ex)
        {
            MessageBox.Show("Network error: Unable to connect to authentication server.\\n\\nDetails: " + ex.Message, 
                          "Connection Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
        catch (Exception ex)
        {
            MessageBox.Show("An unexpected error occurred:\\n\\n" + ex.Message, 
                          "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
        finally
        {
            // Re-enable login button
            btnLogin.Enabled = true;
            btnLogin.Text = "Login";
        }
    }

    // Session verification on application startup
    private async void LoginForm_Load(object sender, EventArgs e)
    {
        // Check if user has a saved session
        int savedUserId = Properties.Settings.Default.UserId;
        if (savedUserId > 0)
        {
            try
            {
                AuthResponse verifyResult = await _auth.VerifySessionAsync(savedUserId);
                if (verifyResult.Success)
                {
                    // Auto-login successful
                    MainForm mainForm = new MainForm();
                    mainForm.Show();
                    this.Hide();
                    return;
                }
            }
            catch
            {
                // Clear invalid session
                Properties.Settings.Default.UserId = 0;
                Properties.Settings.Default.Save();
            }
        }
        
        // Show current HWID for debugging (optional)
        lblHwid.Text = "HWID: " + PhantomAuth.GetHardwareId();
    }
}

// Required NuGet packages:
// Install-Package Newtonsoft.Json
// Install-Package System.Management`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`// In your WinForms application
public partial class LoginForm : Form
{
    private PhantomAuth _auth;
    private const string API_KEY = "your_api_key_here";
    private const string APP_VERSION = "1.0.0";

    public LoginForm()
    {
        InitializeComponent();
        _auth = new PhantomAuth(API_KEY, APP_VERSION);
    }

    private async void btnLogin_Click(object sender, EventArgs e)
    {
        try
        {
            // Disable login button during request
            btnLogin.Enabled = false;
            btnLogin.Text = "Logging in...";

            string username = txtUsername.Text.Trim();
            string password = txtPassword.Text;

            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                MessageBox.Show("Please enter both username and password.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            // Attempt login with HWID and version checking
            AuthResponse result = await _auth.LoginAsync(username, password, true);

            if (result.Success)
            {
                // Store user session data
                Properties.Settings.Default.UserId = result.UserId ?? 0;
                Properties.Settings.Default.Username = result.Username;
                Properties.Settings.Default.Email = result.Email;
                Properties.Settings.Default.Save();

                MessageBox.Show(result.Message, "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
                
                // Open main application form
                MainForm mainForm = new MainForm();
                mainForm.Show();
                this.Hide();
            }
            else
            {
                // Handle specific error messages
                string errorTitle = "Login Failed";
                MessageBoxIcon icon = MessageBoxIcon.Error;

                if (result.Message.Contains("version"))
                {
                    errorTitle = "Update Required";
                    icon = MessageBoxIcon.Warning;
                }
                else if (result.Message.Contains("hardware") || result.Message.Contains("HWID"))
                {
                    errorTitle = "Hardware Mismatch";
                    icon = MessageBoxIcon.Warning;
                }
                else if (result.Message.Contains("expired"))
                {
                    errorTitle = "Account Expired";
                    icon = MessageBoxIcon.Warning;
                }
                else if (result.Message.Contains("disabled") || result.Message.Contains("paused"))
                {
                    errorTitle = "Account Disabled";
                    icon = MessageBoxIcon.Warning;
                }

                MessageBox.Show(result.Message, errorTitle, MessageBoxButtons.OK, icon);
            }
        }
        catch (HttpRequestException ex)
        {
            MessageBox.Show("Network error: Unable to connect to authentication server.\\n\\nDetails: " + ex.Message, 
                          "Connection Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
        catch (Exception ex)
        {
            MessageBox.Show("An unexpected error occurred:\\n\\n" + ex.Message, 
                          "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
        finally
        {
            // Re-enable login button
            btnLogin.Enabled = true;
            btnLogin.Text = "Login";
        }
    }

    // Session verification on application startup
    private async void LoginForm_Load(object sender, EventArgs e)
    {
        // Check if user has a saved session
        int savedUserId = Properties.Settings.Default.UserId;
        if (savedUserId > 0)
        {
            try
            {
                AuthResponse verifyResult = await _auth.VerifySessionAsync(savedUserId);
                if (verifyResult.Success)
                {
                    // Auto-login successful
                    MainForm mainForm = new MainForm();
                    mainForm.Show();
                    this.Hide();
                    return;
                }
            }
            catch
            {
                // Clear invalid session
                Properties.Settings.Default.UserId = 0;
                Properties.Settings.Default.Save();
            }
        }
        
        // Show current HWID for debugging (optional)
        lblHwid.Text = "HWID: " + PhantomAuth.GetHardwareId();
    }
}

// Required NuGet packages:
// Install-Package Newtonsoft.Json
// Install-Package System.Management`})]})]})}),r.jsx(Ie,{value:"php",children:r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"PHP Integration"}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"PHP Class Example"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`<?php

class PhantomAuth {
    private $apiKey;
    private $baseUrl;

    public function __construct($apiKey, $baseUrl = "${window.location.origin}/api/v1") {
        $this->apiKey = $apiKey;
        $this->baseUrl = $baseUrl;
    }

    public function login($username, $password) {
        $url = $this->baseUrl . '/login';
        $data = [
            'username' => $username,
            'password' => $password
        ];

        return $this->makeRequest($url, $data);
    }

    public function register($username, $email, $password, $expiresAt = null) {
        $url = $this->baseUrl . '/register';
        $data = [
            'username' => $username,
            'email' => $email,
            'password' => $password
        ];

        if ($expiresAt) {
            $data['expiresAt'] = $expiresAt;
        }

        return $this->makeRequest($url, $data);
    }

    public function verify($userId) {
        $url = $this->baseUrl . '/verify';
        $data = ['user_id' => $userId];

        return $this->makeRequest($url, $data);
    }

    private function makeRequest($url, $data) {
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'X-API-Key: ' . $this->apiKey
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return json_decode($response, true);
    }
}

// Usage example
$auth = new PhantomAuth('your_api_key_here');

// Login example
$result = $auth->login('johndoe', 'password123');
if ($result['success']) {
    echo "Login successful! User ID: " . $result['user_id'];
} else {
    echo "Login failed: " . $result['message'];
}

// Register example
$result = $auth->register('newuser', 'user@example.com', 'password123', '2024-12-31T23:59:59Z');
if ($result['success']) {
    echo "Registration successful! User ID: " . $result['user_id'];
} else {
    echo "Registration failed: " . $result['message'];
}

?>`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`<?php

class PhantomAuth {
    private $apiKey;
    private $baseUrl;

    public function __construct($apiKey, $baseUrl = "${window.location.origin}/api/v1") {
        $this->apiKey = $apiKey;
        $this->baseUrl = $baseUrl;
    }

    public function login($username, $password) {
        $url = $this->baseUrl . '/login';
        $data = [
            'username' => $username,
            'password' => $password
        ];

        return $this->makeRequest($url, $data);
    }

    public function register($username, $email, $password, $expiresAt = null) {
        $url = $this->baseUrl . '/register';
        $data = [
            'username' => $username,
            'email' => $email,
            'password' => $password
        ];

        if ($expiresAt) {
            $data['expiresAt'] = $expiresAt;
        }

        return $this->makeRequest($url, $data);
    }

    public function verify($userId) {
        $url = $this->baseUrl . '/verify';
        $data = ['user_id' => $userId];

        return $this->makeRequest($url, $data);
    }

    private function makeRequest($url, $data) {
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'X-API-Key: ' . $this->apiKey
        ]);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return json_decode($response, true);
    }
}

// Usage example
$auth = new PhantomAuth('your_api_key_here');

// Login example
$result = $auth->login('johndoe', 'password123');
if ($result['success']) {
    echo "Login successful! User ID: " . $result['user_id'];
} else {
    echo "Login failed: " . $result['message'];
}

// Register example
$result = $auth->register('newuser', 'user@example.com', 'password123', '2024-12-31T23:59:59Z');
if ($result['success']) {
    echo "Registration successful! User ID: " . $result['user_id'];
} else {
    echo "Registration failed: " . $result['message'];
}

?>`})]})]})})]})})]}),r.jsxs(H,{className:"phantom-card mb-8",children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center",children:[r.jsx(Se,{className:"h-5 w-5 phantom-text mr-2"}),"Advanced Features"]}),r.jsx(me,{children:"HWID locking, version control, blacklist management, and activity logging"})]}),r.jsx(Y,{children:r.jsxs(Dr,{defaultValue:"hwid",className:"space-y-6",children:[r.jsxs(Ys,{className:"grid w-full grid-cols-4",children:[r.jsx(Ae,{value:"hwid",children:"HWID Locking"}),r.jsx(Ae,{value:"version",children:"Version Control"}),r.jsx(Ae,{value:"blacklist",children:"Blacklist System"}),r.jsx(Ae,{value:"activity",children:"Activity Logs"})]}),r.jsx(Ie,{value:"hwid",children:r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Hardware ID (HWID) Locking"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Prevent account sharing by locking user accounts to specific hardware configurations."}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("span",{className:"text-sm font-medium",children:"Enable HWID Locking in Dashboard"})}),r.jsxs("p",{className:"text-sm text-muted-foreground mb-2",children:["1. Go to your application settings in the dashboard",r.jsx("br",{}),'2. Enable "HWID Lock" option',r.jsx("br",{}),"3. Save changes - all new logins will be locked to user's hardware"]})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"C# HWID Implementation"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`// HWID Generation Method (Already included in PhantomAuth class)
public static string GetHardwareId()
{
    try
    {
        string hwid = "";
        
        // Get CPU ID
        ManagementObjectSearcher mos = new ManagementObjectSearcher("SELECT ProcessorId FROM Win32_Processor");
        foreach (ManagementObject mo in mos.Get())
        {
            hwid += mo["ProcessorId"].ToString();
        }
        
        // Get Motherboard Serial
        mos = new ManagementObjectSearcher("SELECT SerialNumber FROM Win32_BaseBoard");
        foreach (ManagementObject mo in mos.Get())
        {
            hwid += mo["SerialNumber"].ToString();
        }
        
        // Get BIOS Serial
        mos = new ManagementObjectSearcher("SELECT SerialNumber FROM Win32_BIOS");
        foreach (ManagementObject mo in mos.Get())
        {
            hwid += mo["SerialNumber"].ToString();
        }
        
        // Create hash of combined hardware info
        using (SHA256 sha256 = SHA256.Create())
        {
            byte[] hash = sha256.ComputeHash(Encoding.UTF8.GetBytes(hwid));
            return Convert.ToBase64String(hash).Substring(0, 32);
        }
    }
    catch
    {
        return "HWID-FALLBACK-" + Environment.MachineName;
    }
}

// Usage in login
AuthResponse result = await _auth.LoginAsync(username, password, true); // true enables HWID
if (!result.Success && result.Message.Contains("HWID"))
{
    MessageBox.Show("This account is locked to a different computer!", "Hardware Mismatch", 
                   MessageBoxButtons.OK, MessageBoxIcon.Warning);
}`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`// HWID Generation Method (Already included in PhantomAuth class)
public static string GetHardwareId()
{
    try
    {
        string hwid = "";
        
        // Get CPU ID
        ManagementObjectSearcher mos = new ManagementObjectSearcher("SELECT ProcessorId FROM Win32_Processor");
        foreach (ManagementObject mo in mos.Get())
        {
            hwid += mo["ProcessorId"].ToString();
        }
        
        // Get Motherboard Serial
        mos = new ManagementObjectSearcher("SELECT SerialNumber FROM Win32_BaseBoard");
        foreach (ManagementObject mo in mos.Get())
        {
            hwid += mo["SerialNumber"].ToString();
        }
        
        // Get BIOS Serial
        mos = new ManagementObjectSearcher("SELECT SerialNumber FROM Win32_BIOS");
        foreach (ManagementObject mo in mos.Get())
        {
            hwid += mo["SerialNumber"].ToString();
        }
        
        // Create hash of combined hardware info
        using (SHA256 sha256 = SHA256.Create())
        {
            byte[] hash = sha256.ComputeHash(Encoding.UTF8.GetBytes(hwid));
            return Convert.ToBase64String(hash).Substring(0, 32);
        }
    }
    catch
    {
        return "HWID-FALLBACK-" + Environment.MachineName;
    }
}

// Usage in login
AuthResponse result = await _auth.LoginAsync(username, password, true); // true enables HWID
if (!result.Success && result.Message.Contains("HWID"))
{
    MessageBox.Show("This account is locked to a different computer!", "Hardware Mismatch", 
                   MessageBoxButtons.OK, MessageBoxIcon.Warning);
}`})]})]})}),r.jsx(Ie,{value:"version",children:r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Application Version Control"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Force users to update to the latest version by rejecting outdated application versions."}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("span",{className:"text-sm font-medium",children:"Set Required Version in Dashboard"})}),r.jsxs("p",{className:"text-sm text-muted-foreground mb-2",children:["1. Go to your application settings",r.jsx("br",{}),'2. Update the "Version" field (e.g., "1.2.0")',r.jsx("br",{}),"3. Save - users with older versions will be rejected"]})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"C# Version Checking Implementation"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`// Set your application version
private const string APP_VERSION = "1.2.0"; // Update this with each release

// Initialize PhantomAuth with version
PhantomAuth _auth = new PhantomAuth(API_KEY, APP_VERSION);

// Handle version mismatch error
private async void btnLogin_Click(object sender, EventArgs e)
{
    AuthResponse result = await _auth.LoginAsync(username, password, true);
    
    if (!result.Success)
    {
        if (result.Message.Contains("version") || result.Message.Contains("update"))
        {
            DialogResult updateResult = MessageBox.Show(
                result.Message + "\\n\\nWould you like to download the latest version?",
                "Update Required",
                MessageBoxButtons.YesNo,
                MessageBoxIcon.Warning);
                
            if (updateResult == DialogResult.Yes)
            {
                // Open download page or auto-updater
                System.Diagnostics.Process.Start("https://yourwebsite.com/download");
            }
            Application.Exit(); // Close the application
        }
    }
}

// Custom messages for version mismatch can be set in the dashboard:
// Default: "Please update your application to the latest version!"
// Custom: "Version 1.2.0 required. Download from https://yoursite.com/download"`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`// Set your application version
private const string APP_VERSION = "1.2.0"; // Update this with each release

// Initialize PhantomAuth with version
PhantomAuth _auth = new PhantomAuth(API_KEY, APP_VERSION);

// Handle version mismatch error
private async void btnLogin_Click(object sender, EventArgs e)
{
    AuthResponse result = await _auth.LoginAsync(username, password, true);
    
    if (!result.Success)
    {
        if (result.Message.Contains("version") || result.Message.Contains("update"))
        {
            DialogResult updateResult = MessageBox.Show(
                result.Message + "\\n\\nWould you like to download the latest version?",
                "Update Required",
                MessageBoxButtons.YesNo,
                MessageBoxIcon.Warning);
                
            if (updateResult == DialogResult.Yes)
            {
                // Open download page or auto-updater
                System.Diagnostics.Process.Start("https://yourwebsite.com/download");
            }
            Application.Exit(); // Close the application
        }
    }
}

// Custom messages for version mismatch can be set in the dashboard:
// Default: "Please update your application to the latest version!"
// Custom: "Version 1.2.0 required. Download from https://yoursite.com/download"`})]})]})}),r.jsx(Ie,{value:"blacklist",children:r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Blacklist Management"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Block specific IPs, HWIDs, usernames, or emails from accessing your application."}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("span",{className:"text-sm font-medium",children:"Manage Blacklist in Dashboard"})}),r.jsxs("p",{className:"text-sm text-muted-foreground mb-2",children:["1. Go to Blacklist section in the dashboard",r.jsx("br",{}),"2. Add entries by type: IP Address, HWID, Username, or Email",r.jsx("br",{}),"3. Specify reason (optional)",r.jsx("br",{}),"4. Blacklisted items will be rejected automatically"]})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsx("span",{className:"text-sm font-medium",children:"Blacklist Error Handling"}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>s(`// Handle blacklist rejections
private async void btnLogin_Click(object sender, EventArgs e)
{
    AuthResponse result = await _auth.LoginAsync(username, password, true);
    
    if (!result.Success)
    {
        if (result.Message.Contains("blacklisted") || result.Message.Contains("blocked"))
        {
            MessageBox.Show(
                "Access denied. Your account or computer has been blocked.\\n\\n" +
                "Contact support if you believe this is an error.",
                "Access Blocked",
                MessageBoxButtons.OK,
                MessageBoxIcon.Stop);
                
            Application.Exit(); // Close application
        }
    }
}

// Types of blacklist entries:
// - IP Address: Blocks specific IP addresses
// - HWID: Blocks specific hardware configurations  
// - Username: Blocks specific usernames
// - Email: Blocks specific email addresses

// Blacklist entries can be:
// - Global: Affects all applications
// - Application-specific: Only affects your application`),children:r.jsx(We,{className:"h-4 w-4"})})]}),r.jsx("pre",{className:"text-sm overflow-x-auto",children:`// Handle blacklist rejections
private async void btnLogin_Click(object sender, EventArgs e)
{
    AuthResponse result = await _auth.LoginAsync(username, password, true);
    
    if (!result.Success)
    {
        if (result.Message.Contains("blacklisted") || result.Message.Contains("blocked"))
        {
            MessageBox.Show(
                "Access denied. Your account or computer has been blocked.\\n\\n" +
                "Contact support if you believe this is an error.",
                "Access Blocked",
                MessageBoxButtons.OK,
                MessageBoxIcon.Stop);
                
            Application.Exit(); // Close application
        }
    }
}

// Types of blacklist entries:
// - IP Address: Blocks specific IP addresses
// - HWID: Blocks specific hardware configurations  
// - Username: Blocks specific usernames
// - Email: Blocks specific email addresses

// Blacklist entries can be:
// - Global: Affects all applications
// - Application-specific: Only affects your application`})]})]})}),r.jsx(Ie,{value:"activity",children:r.jsxs("div",{className:"space-y-4",children:[r.jsx("h4",{className:"text-lg font-semibold",children:"Activity Logging & Monitoring"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Monitor user activities, login attempts, and security events in real-time."}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("span",{className:"text-sm font-medium",children:"View Activity Logs in Dashboard"})}),r.jsxs("p",{className:"text-sm text-muted-foreground mb-2",children:["1. Go to Activity Logs section",r.jsx("br",{}),"2. Filter by application, user, or event type",r.jsx("br",{}),"3. Monitor login attempts, failures, and security events",r.jsx("br",{}),"4. Export logs for security analysis"]})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4 mb-4",children:[r.jsx("div",{className:"flex items-center justify-between mb-2",children:r.jsx("span",{className:"text-sm font-medium",children:"Automatic Activity Tracking"})}),r.jsx("p",{className:"text-sm text-muted-foreground",children:"All authentication events are automatically logged including:"}),r.jsxs("ul",{className:"text-sm text-muted-foreground mt-2 ml-4 list-disc",children:[r.jsx("li",{children:"Successful logins with IP address and HWID"}),r.jsx("li",{children:"Failed login attempts with reasons"}),r.jsx("li",{children:"User registrations"}),r.jsx("li",{children:"Account suspensions and expirations"}),r.jsx("li",{children:"HWID mismatches and version failures"}),r.jsx("li",{children:"Blacklist blocks"})]})]})]})})]})})]}),r.jsxs(H,{className:"phantom-card mb-8",children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center",children:[r.jsx(Qt,{className:"h-5 w-5 phantom-text mr-2"}),"Error Messages Reference"]}),r.jsx(me,{children:"Common error messages and how to handle them in your application"})]}),r.jsx(Y,{children:r.jsx("div",{className:"space-y-4",children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsx("h4",{className:"font-semibold text-red-600 mb-2",children:"Authentication Errors"}),r.jsxs("div",{className:"text-sm space-y-2",children:[r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Invalid credentials!"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"Wrong username/password"})]}),r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Account is disabled!"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"Account was paused/disabled"})]}),r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Account has expired!"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"User's time limit reached"})]})]})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsx("h4",{className:"font-semibold text-orange-600 mb-2",children:"Security Errors"}),r.jsxs("div",{className:"text-sm space-y-2",children:[r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Hardware ID mismatch detected!"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"HWID lock violation"})]}),r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Please update your application!"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"Version mismatch"})]}),r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Access blocked"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"Blacklist block"})]})]})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsx("h4",{className:"font-semibold text-blue-600 mb-2",children:"API Errors"}),r.jsxs("div",{className:"text-sm space-y-2",children:[r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Invalid API key"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"Wrong or missing API key"})]}),r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Application not found"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"API key doesn't match any app"})]}),r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Rate limit exceeded"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"Too many requests"})]})]})]}),r.jsxs("div",{className:"bg-muted/50 rounded-lg p-4",children:[r.jsx("h4",{className:"font-semibold text-green-600 mb-2",children:"Success Messages"}),r.jsxs("div",{className:"text-sm space-y-2",children:[r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"Login successful!"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"Authentication completed"})]}),r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"User registered successfully"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"New user created"})]}),r.jsxs("div",{children:[r.jsx("code",{className:"bg-background px-1",children:"User verified"}),r.jsx("br",{}),r.jsx("span",{className:"text-muted-foreground",children:"Session validation passed"})]})]})]})]})})})]}),r.jsxs(H,{className:"phantom-card",children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center",children:[r.jsx(Rr,{className:"h-5 w-5 phantom-text mr-2"}),"Security Best Practices"]}),r.jsx(me,{children:"Important security considerations when using Phantom Auth"})]}),r.jsx(Y,{children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-2",children:"Keep Your API Key Secure"}),r.jsx("p",{className:"text-muted-foreground",children:"Never expose your API key in client-side code. Store it securely in your application settings."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-2",children:"Set User Expiration Times"}),r.jsx("p",{className:"text-muted-foreground",children:"Use the expiresAt parameter to set time limits on user accounts for enhanced security and subscription management."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-2",children:"Verify User Sessions Regularly"}),r.jsx("p",{className:"text-muted-foreground",children:"Call the /verify endpoint periodically to ensure accounts are still valid and haven't been disabled."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-2",children:"Handle Errors Gracefully"}),r.jsx("p",{className:"text-muted-foreground",children:"Always check the success field in API responses and provide clear error messages to users."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-2",children:"Use HTTPS Only"}),r.jsx("p",{className:"text-muted-foreground",children:"Always use HTTPS when making API requests to protect credentials and session data in transit."})]}),r.jsxs("div",{children:[r.jsx("h4",{className:"font-semibold mb-2",children:"Monitor Activity Logs"}),r.jsx("p",{className:"text-muted-foreground",children:"Regularly review activity logs for suspicious login patterns, failed attempts, and security violations."})]})]})})]})]})]})}const uv=["user_login","user_register","login_failed","account_disabled","account_expired","version_mismatch","hwid_mismatch","login_blocked_ip","login_blocked_username","login_blocked_hwid"];function iL(){const{toast:e}=vn(),t=hs(),[n,s]=d.useState(!1),[i,o]=d.useState(!1),[a,l]=d.useState(null),[c,u]=d.useState(!1),[f,p]=d.useState(null),[h,v]=d.useState(null),[b,x]=d.useState(""),[y,g]=d.useState("basic"),[m,w]=d.useState({url:"",secret:"",events:[],isActive:!0}),{data:j=[],isLoading:S}=Je({queryKey:["/api/webhooks"]}),N=_e({mutationFn:async P=>Ne("/api/webhooks",{method:"POST",body:P}),onSuccess:()=>{t.invalidateQueries({queryKey:["/api/webhooks"]}),w({url:"",secret:"",events:[],isActive:!0}),s(!1),e({title:"Success",description:"Webhook created successfully"})},onError:P=>{e({title:"Error",description:P.message||"Failed to create webhook",variant:"destructive"})}}),C=_e({mutationFn:async({id:P,data:T})=>Ne(`/api/webhooks/${P}`,{method:"PUT",body:T}),onSuccess:()=>{t.invalidateQueries({queryKey:["/api/webhooks"]}),o(!1),l(null),e({title:"Success",description:"Webhook updated successfully"})},onError:P=>{e({title:"Error",description:P.message||"Failed to update webhook",variant:"destructive"})}}),I=_e({mutationFn:async P=>Ne(`/api/webhooks/${P}`,{method:"DELETE"}),onSuccess:()=>{t.invalidateQueries({queryKey:["/api/webhooks"]}),e({title:"Success",description:"Webhook deleted successfully"})},onError:P=>{e({title:"Error",description:P.message||"Failed to delete webhook",variant:"destructive"})}}),R=()=>{if(!m.url.trim()){e({title:"Error",description:"Please provide a webhook URL",variant:"destructive"});return}try{const P=new URL(m.url);if(!["http:","https:"].includes(P.protocol)){e({title:"Error",description:"Webhook URL must use HTTP or HTTPS protocol",variant:"destructive"});return}}catch{e({title:"Error",description:"Please enter a valid URL (e.g., https://your-site.com/webhook)",variant:"destructive"});return}if(m.events.length===0){e({title:"Error",description:"Please select at least one event to trigger the webhook",variant:"destructive"});return}N.mutate(m)},M=P=>{l(P),w({url:P.url,secret:P.secret||"",events:P.events,isActive:P.isActive}),o(!0)},k=()=>{a&&C.mutate({id:a.id,data:m})},F=P=>{navigator.clipboard.writeText(P),e({title:"Copied",description:"Text copied to clipboard"})},A=P=>{w(T=>({...T,events:T.events.includes(P)?T.events.filter(L=>L!==P):[...T.events,P]}))},D=_e({mutationFn:async(P="user_login")=>Ne("/api/test-webhook",{method:"POST",body:{event:P}}),onSuccess:P=>{e({title:"Success",description:"Test webhook sent! Check your webhook endpoint."})},onError:P=>{e({title:"Error",description:P.message||"Failed to send test webhook",variant:"destructive"})}}),Z=_e({mutationFn:async({webhook_url:P,test_type:T})=>Ne("/api/webhook-diagnostics",{method:"POST",body:{webhook_url:P,test_type:T}}),onSuccess:P=>{v(P),e({title:"Diagnostics Complete",description:`Tests completed: ${P.summary.overall_status}`})},onError:P=>{let T=P.message||"Failed to run diagnostics";T.includes("Unexpected token")?T="Webhook endpoint returned HTML instead of JSON. Please verify the URL is correct and accepts POST requests.":T.includes("<!DOCTYPE")&&(T="The webhook URL appears to be a web page, not an API endpoint. Please check the URL."),e({title:"Diagnostics Failed",description:T,variant:"destructive"}),v({success:!1,message:"Diagnostics failed",error:T,summary:{total_tests:0,successful_tests:0,failed_tests:1,overall_status:"FAILED"}})}}),W=P=>{const T=(P==null?void 0:P.url)||b;if(!T.trim()){e({title:"Error",description:"Please provide a webhook URL",variant:"destructive"});return}p(P||null),v(null),u(!0),Z.mutate({webhook_url:T,test_type:y})};return r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx(Xs,{}),r.jsxs("div",{className:"relative z-10 container mx-auto px-4 py-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-3",children:[r.jsx(Yh,{className:"h-8 w-8"}),"Webhooks"]}),r.jsx("p",{className:"text-muted-foreground",children:"Manage webhook endpoints for real-time notifications"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs(Tm,{children:[r.jsx(Am,{asChild:!0,children:r.jsxs(O,{variant:"outline",disabled:D.isPending,children:[D.isPending?"Sending...":"Test Webhook",r.jsx(kp,{className:"ml-2 h-4 w-4"})]})}),r.jsxs(Ou,{children:[r.jsx(Be,{onClick:()=>D.mutate("user_login"),children:"Test Login Success"}),r.jsx(Be,{onClick:()=>D.mutate("login_failed"),children:"Test Login Failed"}),r.jsx(Be,{onClick:()=>D.mutate("user_register"),children:"Test User Register"}),r.jsx(Be,{onClick:()=>D.mutate("account_disabled"),children:"Test Account Disabled"}),r.jsx(Be,{onClick:()=>D.mutate("account_expired"),children:"Test Account Expired"}),r.jsx(Be,{onClick:()=>D.mutate("version_mismatch"),children:"Test Version Mismatch"}),r.jsx(Be,{onClick:()=>D.mutate("hwid_mismatch"),children:"Test HWID Mismatch"}),r.jsx(Be,{onClick:()=>D.mutate("login_blocked_ip"),children:"Test Blocked IP"}),r.jsx(Be,{onClick:()=>D.mutate("login_blocked_username"),children:"Test Blocked Username"}),r.jsx(Be,{onClick:()=>D.mutate("login_blocked_hwid"),children:"Test Blocked HWID"})]})]}),r.jsx(O,{onClick:()=>W(),variant:"secondary",disabled:Z.isPending,children:Z.isPending?"Testing...":"Test Connectivity"}),r.jsxs(Ft,{open:n,onOpenChange:s,children:[r.jsx(ir,{asChild:!0,children:r.jsxs(O,{children:[r.jsx(An,{className:"mr-2 h-4 w-4"}),"Create Webhook"]})}),r.jsxs(kt,{className:"max-w-2xl",children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Create New Webhook"}),r.jsx(At,{children:"Configure a webhook endpoint to receive real-time notifications"})]}),r.jsxs("div",{className:"grid gap-4 py-4",children:[r.jsxs("div",{children:[r.jsx(U,{htmlFor:"url",children:"Webhook URL"}),r.jsx(ne,{id:"url",placeholder:"https://your-domain.com/webhook",value:m.url,onChange:P=>w(T=>({...T,url:P.target.value}))})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"secret",children:"Secret (Optional)"}),r.jsx(ne,{id:"secret",placeholder:"Webhook secret for signature verification",value:m.secret,onChange:P=>w(T=>({...T,secret:P.target.value}))})]}),r.jsxs("div",{children:[r.jsx(U,{children:"Events to Subscribe"}),r.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:uv.map(P=>r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",id:P,checked:m.events.includes(P),onChange:()=>A(P),className:"rounded border-gray-300"}),r.jsx(U,{htmlFor:P,className:"text-sm",children:P})]},P))})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(Ca,{checked:m.isActive,onCheckedChange:P=>w(T=>({...T,isActive:P}))}),r.jsx(U,{children:"Active"})]})]}),r.jsxs("div",{className:"flex justify-end gap-2",children:[r.jsx(O,{variant:"outline",onClick:()=>s(!1),children:"Cancel"}),r.jsx(O,{onClick:R,disabled:N.isPending,children:N.isPending?"Creating...":"Create Webhook"})]})]})]})]})]}),r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsx(G,{children:"Configured Webhooks"}),r.jsx(me,{children:"Webhook endpoints that will receive notifications"})]}),r.jsx(Y,{children:S?r.jsxs("div",{className:"text-center py-8",children:[r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading webhooks..."})]}):j.length===0?r.jsxs("div",{className:"text-center py-8",children:[r.jsx(Wa,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-semibold mb-2",children:"No webhooks configured"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Create your first webhook to start receiving notifications"}),r.jsxs(O,{onClick:()=>s(!0),children:[r.jsx(An,{className:"mr-2 h-4 w-4"}),"Create Webhook"]})]}):r.jsxs(ls,{children:[r.jsx(cs,{children:r.jsxs(Ze,{children:[r.jsx(se,{children:"URL"}),r.jsx(se,{children:"Events"}),r.jsx(se,{children:"Status"}),r.jsx(se,{children:"Created"}),r.jsx(se,{children:"Actions"})]})}),r.jsx(us,{children:j.map(P=>r.jsxs(Ze,{children:[r.jsx(re,{children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("span",{className:"font-mono text-sm",children:P.url}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>F(P.url),children:r.jsx(We,{className:"h-3 w-3"})})]})}),r.jsx(re,{children:r.jsxs("div",{className:"flex flex-wrap gap-1",children:[P.events.slice(0,3).map(T=>r.jsx(ie,{variant:"secondary",className:"text-xs",children:T},T)),P.events.length>3&&r.jsxs(ie,{variant:"outline",className:"text-xs",children:["+",P.events.length-3," more"]})]})}),r.jsx(re,{children:r.jsx(ie,{variant:P.isActive?"default":"secondary",children:P.isActive?"Active":"Inactive"})}),r.jsx(re,{children:new Date(P.createdAt).toLocaleDateString()}),r.jsx(re,{children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>M(P),children:r.jsx(Rc,{className:"h-4 w-4"})}),r.jsxs(Lu,{children:[r.jsx(Fu,{asChild:!0,children:r.jsx(O,{variant:"ghost",size:"sm",children:r.jsx(Wr,{className:"h-4 w-4"})})}),r.jsxs(tl,{children:[r.jsxs(nl,{children:[r.jsx(rl,{children:"Delete Webhook"}),r.jsx(il,{children:"Are you sure you want to delete this webhook? This action cannot be undone."})]}),r.jsxs(sl,{children:[r.jsx(al,{children:"Cancel"}),r.jsx(ol,{onClick:()=>I.mutate(P.id),className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete"})]})]})]})]})})]},P.id))})]})})]}),r.jsx(Ft,{open:i,onOpenChange:o,children:r.jsxs(kt,{className:"max-w-2xl",children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Edit Webhook"}),r.jsx(At,{children:"Update webhook configuration"})]}),r.jsxs("div",{className:"grid gap-4 py-4",children:[r.jsxs("div",{children:[r.jsx(U,{htmlFor:"edit-url",children:"Webhook URL"}),r.jsx(ne,{id:"edit-url",placeholder:"https://your-domain.com/webhook",value:m.url,onChange:P=>w(T=>({...T,url:P.target.value}))})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"edit-secret",children:"Secret (Optional)"}),r.jsx(ne,{id:"edit-secret",placeholder:"Webhook secret for signature verification",value:m.secret,onChange:P=>w(T=>({...T,secret:P.target.value}))})]}),r.jsxs("div",{children:[r.jsx(U,{children:"Events to Subscribe"}),r.jsx("div",{className:"grid grid-cols-2 gap-2 mt-2",children:uv.map(P=>r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx("input",{type:"checkbox",id:`edit-${P}`,checked:m.events.includes(P),onChange:()=>A(P),className:"rounded border-gray-300"}),r.jsx(U,{htmlFor:`edit-${P}`,className:"text-sm",children:P})]},P))})]}),r.jsxs("div",{className:"flex items-center space-x-2",children:[r.jsx(Ca,{checked:m.isActive,onCheckedChange:P=>w(T=>({...T,isActive:P}))}),r.jsx(U,{children:"Active"})]})]}),r.jsxs("div",{className:"flex justify-end gap-2",children:[r.jsx(O,{variant:"outline",onClick:()=>o(!1),children:"Cancel"}),r.jsx(O,{onClick:k,disabled:C.isPending,children:C.isPending?"Updating...":"Update Webhook"})]})]})}),r.jsx(Ft,{open:c,onOpenChange:u,children:r.jsxs(kt,{className:"max-w-4xl max-h-[80vh] overflow-y-auto",children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"🌐 Vietnam Server Webhook Diagnostics"}),r.jsx(At,{children:"Test webhook connectivity and performance from Vietnam server location"})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.jsxs("div",{children:[r.jsx(U,{htmlFor:"test-url",children:"Webhook URL to Test"}),r.jsx(ne,{id:"test-url",placeholder:"https://discord.com/api/webhooks/... or your custom endpoint",value:(f==null?void 0:f.url)||b,onChange:P=>x(P.target.value),disabled:!!f})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"test-type",children:"Test Type"}),r.jsxs("select",{id:"test-type",value:y,onChange:P=>g(P.target.value),className:"w-full p-2 border rounded-md",children:[r.jsx("option",{value:"basic",children:"Basic Test (3 tests)"}),r.jsx("option",{value:"comprehensive",children:"Comprehensive Test (5 tests)"})]})]})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx(O,{onClick:()=>W(f||void 0),disabled:Z.isPending,children:Z.isPending?"Running Tests...":"Run Diagnostics"}),h&&r.jsx(O,{variant:"outline",onClick:()=>v(null),children:"Clear Results"})]}),Z.isPending&&r.jsxs("div",{className:"text-center py-8",children:[r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Testing webhook connectivity from Vietnam server..."}),r.jsx("p",{className:"text-sm text-muted-foreground mt-2",children:"This may take up to 60 seconds for comprehensive testing"})]}),h&&r.jsxs("div",{className:"space-y-4",children:[r.jsxs(H,{children:[r.jsx(K,{children:r.jsxs(G,{className:"flex items-center gap-2",children:[r.jsx("span",{className:`text-2xl ${h.summary.overall_status==="WORKING"?"🟢":"🔴"}`,children:h.summary.overall_status==="WORKING"?"✅":"❌"}),"Test Summary: ",h.summary.overall_status]})}),r.jsx(Y,{children:r.jsxs("div",{className:"grid grid-cols-3 gap-4 text-center",children:[r.jsxs("div",{children:[r.jsx("div",{className:"text-2xl font-bold text-green-600",children:h.summary.successful_tests}),r.jsx("div",{className:"text-sm text-muted-foreground",children:"Successful"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-2xl font-bold text-red-600",children:h.summary.failed_tests}),r.jsx("div",{className:"text-sm text-muted-foreground",children:"Failed"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"text-2xl font-bold",children:h.summary.total_tests}),r.jsx("div",{className:"text-sm text-muted-foreground",children:"Total Tests"})]})]})})]}),h.diagnostics.performance_metrics&&Object.keys(h.diagnostics.performance_metrics).length>0&&r.jsxs(H,{children:[r.jsx(K,{children:r.jsx(G,{children:"📊 Performance Metrics"})}),r.jsx(Y,{children:r.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-xl font-bold",children:[h.diagnostics.performance_metrics.avg_response_time,"ms"]}),r.jsx("div",{className:"text-sm text-muted-foreground",children:"Avg Response"})]}),r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-xl font-bold",children:[h.diagnostics.performance_metrics.min_response_time,"ms"]}),r.jsx("div",{className:"text-sm text-muted-foreground",children:"Min Response"})]}),r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-xl font-bold",children:[h.diagnostics.performance_metrics.max_response_time,"ms"]}),r.jsx("div",{className:"text-sm text-muted-foreground",children:"Max Response"})]}),r.jsxs("div",{className:"text-center",children:[r.jsxs("div",{className:"text-xl font-bold",children:[h.diagnostics.performance_metrics.success_rate,"%"]}),r.jsx("div",{className:"text-sm text-muted-foreground",children:"Success Rate"})]})]})})]}),r.jsxs(H,{children:[r.jsx(K,{children:r.jsx(G,{children:"🖥️ Server Information"})}),r.jsx(Y,{children:r.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"Region:"})," ",h.diagnostics.server_info.region]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Node.js:"})," ",h.diagnostics.server_info.nodejs_version]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Platform:"})," ",h.diagnostics.server_info.platform]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Uptime:"})," ",Math.round(h.diagnostics.server_info.uptime/60)," minutes"]})]})})]}),r.jsxs(H,{children:[r.jsx(K,{children:r.jsx(G,{children:"🔍 Detailed Test Results"})}),r.jsx(Y,{children:r.jsx("div",{className:"space-y-3",children:h.diagnostics.connectivity_tests.map((P,T)=>r.jsxs("div",{className:"border rounded-lg p-3",children:[r.jsxs("div",{className:"flex items-center justify-between mb-2",children:[r.jsxs("h4",{className:"font-semibold flex items-center gap-2",children:[r.jsx("span",{className:P.success?"🟢":"🔴",children:P.success?"✅":"❌"}),P.test_name]}),r.jsxs("div",{className:"text-sm text-muted-foreground",children:[P.response_time_ms,"ms",P.retry_attempts>0&&` (${P.retry_attempts} retries)`]})]}),r.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[r.jsxs("div",{children:[r.jsx("strong",{children:"Status:"})," ",P.status_code||"N/A"]}),r.jsxs("div",{children:[r.jsx("strong",{children:"Success:"})," ",P.success?"Yes":"No"]})]}),P.error&&r.jsxs("div",{className:"mt-2 p-2 bg-red-50 dark:bg-red-900/20 rounded text-sm",children:[r.jsx("strong",{children:"Error:"})," ",P.error]})]},T))})})]}),h.diagnostics.recommendations&&h.diagnostics.recommendations.length>0&&r.jsxs(H,{children:[r.jsx(K,{children:r.jsx(G,{children:"💡 Recommendations"})}),r.jsx(Y,{children:r.jsx("ul",{className:"space-y-2",children:h.diagnostics.recommendations.map((P,T)=>r.jsxs("li",{className:"flex items-start gap-2",children:[r.jsx("span",{className:"text-blue-500 mt-1",children:"•"}),r.jsx("span",{className:"text-sm",children:P})]},T))})})]})]})]})]})}),r.jsxs(H,{className:"mb-6",children:[r.jsxs(K,{children:[r.jsx(G,{className:"flex items-center gap-2",children:"🚀 Quick Vietnam Server Test"}),r.jsx(me,{children:"Test any webhook URL for Vietnam server connectivity without creating a webhook"})]}),r.jsx(Y,{children:r.jsxs("div",{className:"flex gap-2",children:[r.jsx(ne,{placeholder:"https://discord.com/api/webhooks/... or your webhook URL",value:b,onChange:P=>x(P.target.value),className:"flex-1"}),r.jsxs("select",{value:y,onChange:P=>g(P.target.value),className:"px-3 py-2 border rounded-md",children:[r.jsx("option",{value:"basic",children:"Basic"}),r.jsx("option",{value:"comprehensive",children:"Comprehensive"})]}),r.jsx(O,{onClick:()=>W(),disabled:Z.isPending||!b.trim(),children:Z.isPending?"Testing...":"Test Now"})]})})]})]})]})}const Fl=[{value:"ip",label:"IP Address",icon:Wa},{value:"username",label:"Username",icon:H0},{value:"email",label:"Email",icon:yT},{value:"hwid",label:"Hardware ID",icon:Jh}];function oL(){const{toast:e}=vn(),t=hs(),[n,s]=d.useState(!1),[i,o]=d.useState({applicationId:"",type:"",value:"",reason:""}),{data:a=[]}=Je({queryKey:["/api/applications"]}),{data:l=[],isLoading:c}=Je({queryKey:["/api/blacklist"]}),u=_e({mutationFn:async x=>Ne("/api/blacklist",{method:"POST",body:x}),onSuccess:()=>{t.invalidateQueries({queryKey:["/api/blacklist"]}),o({applicationId:"",type:"",value:"",reason:""}),s(!1),e({title:"Success",description:"Blacklist entry created successfully"})},onError:x=>{e({title:"Error",description:x.message||"Failed to create blacklist entry",variant:"destructive"})}}),f=_e({mutationFn:async x=>Ne(`/api/blacklist/${x}`,{method:"DELETE"}),onSuccess:()=>{t.invalidateQueries({queryKey:["/api/blacklist"]}),e({title:"Success",description:"Blacklist entry deleted successfully"})},onError:x=>{e({title:"Error",description:x.message||"Failed to delete blacklist entry",variant:"destructive"})}}),p=()=>{if(!i.type||!i.value){e({title:"Error",description:"Type and value are required",variant:"destructive"});return}const x={type:i.type,value:i.value,reason:i.reason||"",applicationId:i.applicationId&&i.applicationId!=="global"?parseInt(i.applicationId):void 0};u.mutate(x)},h=x=>{const y=Fl.find(g=>g.value===x);return(y==null?void 0:y.icon)||Gh},v=x=>{const y=Fl.find(g=>g.value===x);return(y==null?void 0:y.label)||x},b=x=>new Date(x).toLocaleString();return r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsxs("div",{className:"relative z-10",children:[r.jsx(Xs,{}),r.jsxs("div",{className:"container mx-auto px-4 py-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-3",children:[r.jsx(Se,{className:"h-8 w-8"}),"Blacklist Management"]}),r.jsx("p",{className:"text-muted-foreground",children:"Block IPs, usernames, emails, and hardware IDs"})]}),r.jsxs(Ft,{open:n,onOpenChange:s,children:[r.jsx(ir,{asChild:!0,children:r.jsxs(O,{children:[r.jsx(An,{className:"mr-2 h-4 w-4"}),"Add Blacklist Entry"]})}),r.jsxs(kt,{children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Create Blacklist Entry"}),r.jsx(At,{children:"Block specific values from accessing your applications"})]}),r.jsxs("div",{className:"grid gap-4 py-4",children:[r.jsxs("div",{children:[r.jsx(U,{htmlFor:"application",children:"Application (Optional)"}),r.jsxs(Qr,{value:i.applicationId||"",onValueChange:x=>o(y=>({...y,applicationId:x})),children:[r.jsx(or,{children:r.jsx(Jr,{placeholder:"Select application or leave empty for global"})}),r.jsxs(ar,{children:[r.jsx(Jt,{value:"global",children:"Global (All Applications)"}),a.map(x=>r.jsx(Jt,{value:x.id.toString(),children:x.name},x.id))]})]})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"type",children:"Type"}),r.jsxs(Qr,{value:i.type,onValueChange:x=>o(y=>({...y,type:x})),children:[r.jsx(or,{children:r.jsx(Jr,{placeholder:"Select blacklist type"})}),r.jsx(ar,{children:Fl.map(x=>r.jsx(Jt,{value:x.value,children:x.label},x.value))})]})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"value",children:"Value"}),r.jsx(ne,{id:"value",value:i.value,onChange:x=>o(y=>({...y,value:x.target.value})),placeholder:"Enter value to blacklist"})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"reason",children:"Reason (Optional)"}),r.jsx(In,{id:"reason",value:i.reason,onChange:x=>o(y=>({...y,reason:x.target.value})),placeholder:"Reason for blacklisting"})]})]}),r.jsxs("div",{className:"flex justify-end gap-2",children:[r.jsx(O,{variant:"outline",onClick:()=>s(!1),children:"Cancel"}),r.jsx(O,{onClick:p,disabled:u.isPending,children:u.isPending?"Creating...":"Create Entry"})]})]})]})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:Fl.map(x=>{const y=l.filter(m=>m.type===x.value&&m.isActive).length,g=x.icon;return r.jsxs(H,{children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsxs(G,{className:"text-sm font-medium",children:["Blocked ",x.label,"s"]}),r.jsx(g,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsx(Y,{children:r.jsx("div",{className:"text-2xl font-bold",children:y})})]},x.value)})}),r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsx(G,{children:"Blacklist Entries"}),r.jsx(me,{children:"Active blacklist entries across all applications"})]}),r.jsx(Y,{children:c?r.jsxs("div",{className:"text-center py-8",children:[r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading blacklist..."})]}):l.length===0?r.jsxs("div",{className:"text-center py-8",children:[r.jsx(Mc,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-semibold mb-2",children:"No blacklist entries"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Create blacklist entries to block unwanted access"}),r.jsxs(O,{onClick:()=>s(!0),children:[r.jsx(An,{className:"mr-2 h-4 w-4"}),"Add Entry"]})]}):r.jsxs(ls,{children:[r.jsx(cs,{children:r.jsxs(Ze,{children:[r.jsx(se,{children:"Type"}),r.jsx(se,{children:"Value"}),r.jsx(se,{children:"Application"}),r.jsx(se,{children:"Reason"}),r.jsx(se,{children:"Status"}),r.jsx(se,{children:"Created"}),r.jsx(se,{children:"Actions"})]})}),r.jsx(us,{children:l.map(x=>{var g;const y=h(x.type);return r.jsxs(Ze,{children:[r.jsx(re,{children:r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(y,{className:"h-4 w-4"}),r.jsx(ie,{variant:"outline",children:v(x.type)})]})}),r.jsx(re,{children:r.jsx("span",{className:"font-mono text-sm",children:x.value})}),r.jsx(re,{children:x.applicationId?r.jsx(ie,{variant:"secondary",children:((g=x.application)==null?void 0:g.name)||`App ${x.applicationId}`}):r.jsx(ie,{variant:"default",children:"Global"})}),r.jsx(re,{children:r.jsx("span",{className:"text-sm text-muted-foreground",children:x.reason||"No reason provided"})}),r.jsx(re,{children:r.jsx(ie,{variant:x.isActive?"destructive":"secondary",children:x.isActive?"Active":"Inactive"})}),r.jsx(re,{children:r.jsx("span",{className:"text-sm text-muted-foreground",children:b(x.createdAt)})}),r.jsx(re,{children:r.jsxs(Lu,{children:[r.jsx(Fu,{asChild:!0,children:r.jsx(O,{variant:"outline",size:"sm",children:r.jsx(Wr,{className:"h-4 w-4"})})}),r.jsxs(tl,{children:[r.jsxs(nl,{children:[r.jsx(rl,{children:"Remove Blacklist Entry"}),r.jsx(il,{children:"Are you sure you want to remove this blacklist entry? This action cannot be undone."})]}),r.jsxs(sl,{children:[r.jsx(al,{children:"Cancel"}),r.jsx(ol,{onClick:()=>f.mutate(x.id),className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Remove from Blacklist"})]})]})]})})]},x.id)})})]})})]})]})]})]})}const dv=[{value:"user_login",label:"User Login",color:"blue"},{value:"user_register",label:"User Registration",color:"green"},{value:"login_failed",label:"Login Failed",color:"red"},{value:"account_disabled",label:"Account Disabled",color:"yellow"},{value:"account_expired",label:"Account Expired",color:"orange"},{value:"version_mismatch",label:"Version Mismatch",color:"purple"},{value:"hwid_mismatch",label:"HWID Mismatch",color:"pink"},{value:"login_blocked_ip",label:"IP Blocked",color:"red"},{value:"login_blocked_username",label:"Username Blocked",color:"red"},{value:"login_blocked_hwid",label:"HWID Blocked",color:"red"}];function aL(){const[e,t]=d.useState("all"),[n,s]=d.useState("all"),[i,o]=d.useState(""),{data:a=[]}=Je({queryKey:["/api/applications"]}),{data:l=[],isLoading:c}=Je({queryKey:["/api/activity-logs",e],queryFn:async()=>{const g=e==="all"?"/api/activity-logs":`/api/activity-logs?applicationId=${e}`,m=await fetch(g);if(!m.ok)throw new Error("Failed to fetch activity logs");return m.json()}}),u=l.filter(g=>{var j,S,N;const m=!i||((S=(j=g.appUser)==null?void 0:j.username)==null?void 0:S.toLowerCase().includes(i.toLowerCase()))||((N=g.ipAddress)==null?void 0:N.includes(i))||g.event.toLowerCase().includes(i.toLowerCase()),w=n==="all"||g.event===n;return m&&w}),f=(g,m)=>{const w=dv.find(S=>S.value===g),j=m?"default":"destructive";return r.jsx(ie,{variant:j,className:"text-xs",children:(w==null?void 0:w.label)||g})},p=(g,m)=>{if(!m)return r.jsx(Qh,{className:"h-4 w-4 text-destructive"});switch(g){case"user_login":return r.jsx(wa,{className:"h-4 w-4 text-green-500"});case"user_register":return r.jsx(H0,{className:"h-4 w-4 text-blue-500"});case"login_blocked_ip":case"login_blocked_username":case"login_blocked_hwid":return r.jsx(Se,{className:"h-4 w-4 text-red-500"});default:return r.jsx(Mc,{className:"h-4 w-4 text-yellow-500"})}},h=g=>new Date(g).toLocaleString(),v=u.length,b=u.filter(g=>g.success).length,x=v-b,y=new Set(u.map(g=>g.ipAddress).filter(Boolean)).size;return r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx(Xs,{}),r.jsxs("div",{className:"relative z-10 container mx-auto px-4 py-8",children:[r.jsx("div",{className:"flex items-center justify-between mb-8",children:r.jsxs("div",{children:[r.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-3",children:[r.jsx(ki,{className:"h-8 w-8"}),"Activity Logs"]}),r.jsx("p",{className:"text-muted-foreground",children:"Monitor authentication events and user activities"})]})}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[r.jsxs(H,{children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Total Events"}),r.jsx(ki,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsx(Y,{children:r.jsx("div",{className:"text-2xl font-bold",children:v})})]}),r.jsxs(H,{children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Successful"}),r.jsx(wa,{className:"h-4 w-4 text-green-500"})]}),r.jsx(Y,{children:r.jsx("div",{className:"text-2xl font-bold text-green-600",children:b})})]}),r.jsxs(H,{children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Failed"}),r.jsx(Qh,{className:"h-4 w-4 text-red-500"})]}),r.jsx(Y,{children:r.jsx("div",{className:"text-2xl font-bold text-red-600",children:x})})]}),r.jsxs(H,{children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Unique IPs"}),r.jsx(Wa,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsx(Y,{children:r.jsx("div",{className:"text-2xl font-bold",children:y})})]})]}),r.jsxs(H,{className:"mb-8",children:[r.jsx(K,{children:r.jsx(G,{children:"Filters"})}),r.jsx(Y,{children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[r.jsxs("div",{children:[r.jsx("label",{className:"text-sm font-medium mb-2 block",children:"Application"}),r.jsxs(Qr,{value:e,onValueChange:t,children:[r.jsx(or,{children:r.jsx(Jr,{placeholder:"Select application"})}),r.jsxs(ar,{children:[r.jsx(Jt,{value:"all",children:"All Applications"}),a.map(g=>r.jsx(Jt,{value:g.id.toString(),children:g.name},g.id))]})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-sm font-medium mb-2 block",children:"Event Type"}),r.jsxs(Qr,{value:n,onValueChange:s,children:[r.jsx(or,{children:r.jsx(Jr,{placeholder:"Select event type"})}),r.jsxs(ar,{children:[r.jsx(Jt,{value:"all",children:"All Events"}),dv.map(g=>r.jsx(Jt,{value:g.value,children:g.label},g.value))]})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-sm font-medium mb-2 block",children:"Search"}),r.jsxs("div",{className:"relative",children:[r.jsx(z0,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"}),r.jsx(ne,{placeholder:"Search username, IP, or event...",value:i,onChange:g=>o(g.target.value),className:"pl-10"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"text-sm font-medium mb-2 block",children:"Actions"}),r.jsxs(O,{variant:"outline",onClick:()=>{t("all"),s("all"),o("")},className:"w-full",children:[r.jsx(mT,{className:"h-4 w-4 mr-2"}),"Clear Filters"]})]})]})})]}),r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsx(G,{children:"Activity Events"}),r.jsx(me,{children:"Recent authentication and security events"})]}),r.jsx(Y,{children:c?r.jsxs("div",{className:"text-center py-8",children:[r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading activity logs..."})]}):u.length===0?r.jsxs("div",{className:"text-center py-8",children:[r.jsx(ki,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-semibold mb-2",children:"No activity logs found"}),r.jsx("p",{className:"text-muted-foreground",children:l.length===0?"No authentication events have been recorded yet":"No logs match your current filters"})]}):r.jsxs(ls,{children:[r.jsx(cs,{children:r.jsxs(Ze,{children:[r.jsx(se,{children:"Status"}),r.jsx(se,{children:"Event"}),r.jsx(se,{children:"User"}),r.jsx(se,{children:"Application"}),r.jsx(se,{children:"IP Address"}),r.jsx(se,{children:"Details"}),r.jsx(se,{children:"Time"})]})}),r.jsx(us,{children:u.map(g=>{var m,w;return r.jsxs(Ze,{children:[r.jsx(re,{children:r.jsx("div",{className:"flex items-center gap-2",children:p(g.event,g.success)})}),r.jsx(re,{children:f(g.event,g.success)}),r.jsx(re,{children:r.jsx("div",{className:"font-medium",children:((m=g.appUser)==null?void 0:m.username)||"Unknown"})}),r.jsx(re,{children:r.jsx(ie,{variant:"outline",children:((w=g.application)==null?void 0:w.name)||`App ${g.applicationId}`})}),r.jsx(re,{children:r.jsx("div",{className:"font-mono text-sm",children:g.ipAddress||"Unknown"})}),r.jsx(re,{children:r.jsx("div",{className:"max-w-xs",children:g.errorMessage?r.jsx("span",{className:"text-destructive text-sm",children:g.errorMessage}):g.metadata?r.jsxs("span",{className:"text-muted-foreground text-sm",children:[JSON.stringify(g.metadata).slice(0,50),"..."]}):r.jsx("span",{className:"text-muted-foreground text-sm",children:"Success"})})}),r.jsx(re,{children:r.jsx("div",{className:"text-sm",children:h(g.createdAt)})})]},g.id)})})]})})]})]})]})}function lL(){const{toast:e}=vn(),{user:t}=ei();hs();const[n,s]=d.useState(""),[i,o]=d.useState("csharp"),[a,l]=d.useState(""),[c,u]=d.useState(!1),[f,p]=d.useState(""),{data:h=[]}=Je({queryKey:["/api/applications"]}),[v,b]=d.useState({}),x=(F,A)=>{b(D=>({...D,[F]:A})),e({title:"Success",description:"Code template updated successfully"}),u(!1)},y=h.find(F=>F.id.toString()===n),g=(t==null?void 0:t.role)==="owner",m=F=>{navigator.clipboard.writeText(F),e({title:"Copied",description:"Code copied to clipboard"})},w=(F,A)=>{p(F),l(A),u(!0)},j=()=>{x(f,a)},S=()=>{u(!1),l(""),p("")},N=window.location.origin,C=(y==null?void 0:y.apiKey)||"YOUR_API_KEY",I=`using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Management;
using System.Security.Cryptography;
using System.Linq;

// FIXED AuthResponse Class - No more nullable errors!
public class AuthResponse
{
    [JsonPropertyName("success")]
    public bool Success { get; set; }

    [JsonPropertyName("message")]
    public string Message { get; set; }

    [JsonPropertyName("user_id")]
    public int UserId { get; set; }  // FIXED: No longer nullable

    [JsonPropertyName("username")]
    public string Username { get; set; }

    [JsonPropertyName("email")]
    public string Email { get; set; }

    [JsonPropertyName("expires_at")]
    public DateTime? ExpiresAt { get; set; }

    [JsonPropertyName("hwid_locked")]
    public bool? HwidLocked { get; set; }
}

// Session tracking response
public class SessionResponse
{
    [JsonPropertyName("success")]
    public bool Success { get; set; }

    [JsonPropertyName("message")]
    public string Message { get; set; }

    [JsonPropertyName("session_token")]
    public string SessionToken { get; set; }
}

// User information class
public class UserInfo
{
    public int UserId { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public DateTime LoginTime { get; set; } = DateTime.Now;
    public DateTime? ExpiresAt { get; set; }
}

// Auth API Client
public class AuthApiClient
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;
    private readonly string _baseUrl;

    public AuthApiClient(string apiKey, string baseUrl = "${N}")
    {
        _httpClient = new HttpClient();
        _apiKey = apiKey;
        _baseUrl = baseUrl;
        _httpClient.DefaultRequestHeaders.Add("X-API-Key", _apiKey);
    }

    public async Task<AuthResponse> LoginAsync(string username, string password, string version = null, string hwid = null)
    {
        var loginData = new { username, password, version, hwid };
        var json = JsonSerializer.Serialize(loginData);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/api/v1/login", content);
        var responseJson = await response.Content.ReadAsStringAsync();

        return JsonSerializer.Deserialize<AuthResponse>(responseJson, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });
    }

    public async Task<AuthResponse> RegisterAsync(string username, string password, string email, string licenseKey, string version = null, string hwid = null)
    {
        var registerData = new { username, password, email, license_key = licenseKey, version, hwid };
        var json = JsonSerializer.Serialize(registerData);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/api/v1/register", content);
        var responseJson = await response.Content.ReadAsStringAsync();

        return JsonSerializer.Deserialize<AuthResponse>(responseJson, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });
    }

    public async Task<AuthResponse> VerifyAsync(int userId)
    {
        var verifyData = new { user_id = userId };
        var json = JsonSerializer.Serialize(verifyData);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/api/v1/verify", content);
        var responseJson = await response.Content.ReadAsStringAsync();

        return JsonSerializer.Deserialize<AuthResponse>(responseJson, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });
    }

    public async Task<SessionResponse> StartSessionAsync(int userId, string sessionToken)
    {
        var sessionData = new { user_id = userId, session_token = sessionToken, action = "start" };
        var json = JsonSerializer.Serialize(sessionData);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/api/v1/session/track", content);
        var responseJson = await response.Content.ReadAsStringAsync();

        return JsonSerializer.Deserialize<SessionResponse>(responseJson, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });
    }

    public async Task<SessionResponse> SendHeartbeatAsync(string sessionToken)
    {
        var sessionData = new { session_token = sessionToken, action = "heartbeat" };
        var json = JsonSerializer.Serialize(sessionData);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/api/v1/session/track", content);
        var responseJson = await response.Content.ReadAsStringAsync();

        return JsonSerializer.Deserialize<SessionResponse>(responseJson, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });
    }

    public async Task<SessionResponse> EndSessionAsync(string sessionToken)
    {
        var sessionData = new { session_token = sessionToken, action = "end" };
        var json = JsonSerializer.Serialize(sessionData);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _httpClient.PostAsync($"{_baseUrl}/api/v1/session/track", content);
        var responseJson = await response.Content.ReadAsStringAsync();

        return JsonSerializer.Deserialize<SessionResponse>(responseJson, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        });
    }
}

// Complete Login Form with Enhanced Session Monitoring
public partial class LoginForm : Form
{
    private AuthApiClient _authClient;
    private TextBox txtUsername;
    private TextBox txtPassword;
    private TextBox txtEmail;
    private TextBox txtLicenseKey;
    private Button btnLogin;
    private Button btnRegister;
    private Label lblStatus;

    // Session monitoring variables
    private System.Windows.Forms.Timer sessionTimer;
    private System.Windows.Forms.Timer heartbeatTimer;
    private int currentUserId;
    private string currentSessionToken;
    private int sessionCheckFailures = 0;
    private readonly int maxFailures = 3;

    public LoginForm()
    {
        InitializeComponent();
        _authClient = new AuthApiClient("${C}");
    }

    private void InitializeComponent()
    {
        this.Text = "Application Login";
        this.Size = new System.Drawing.Size(400, 400);
        this.StartPosition = FormStartPosition.CenterScreen;

        var lblUsername = new Label { Text = "Username:", Location = new System.Drawing.Point(50, 50), Size = new System.Drawing.Size(80, 23) };
        txtUsername = new TextBox { Location = new System.Drawing.Point(140, 50), Size = new System.Drawing.Size(200, 23) };

        var lblPassword = new Label { Text = "Password:", Location = new System.Drawing.Point(50, 90), Size = new System.Drawing.Size(80, 23) };
        txtPassword = new TextBox { Location = new System.Drawing.Point(140, 90), Size = new System.Drawing.Size(200, 23), UseSystemPasswordChar = true };

        var lblEmail = new Label { Text = "Email (Optional):", Location = new System.Drawing.Point(50, 130), Size = new System.Drawing.Size(80, 23) };
        txtEmail = new TextBox { Location = new System.Drawing.Point(140, 130), Size = new System.Drawing.Size(200, 23), PlaceholderText = "Optional" };

        var lblLicenseKey = new Label { Text = "License Key:", Location = new System.Drawing.Point(50, 170), Size = new System.Drawing.Size(80, 23) };
        txtLicenseKey = new TextBox { Location = new System.Drawing.Point(140, 170), Size = new System.Drawing.Size(200, 23), PlaceholderText = "Required for registration" };

        btnLogin = new Button { Text = "Login", Location = new System.Drawing.Point(140, 210), Size = new System.Drawing.Size(95, 30) };
        btnLogin.Click += async (s, e) => await LoginAsync();

        btnRegister = new Button { Text = "Register", Location = new System.Drawing.Point(245, 210), Size = new System.Drawing.Size(95, 30) };
        btnRegister.Click += async (s, e) => await RegisterAsync();

        lblStatus = new Label { Location = new System.Drawing.Point(50, 260), Size = new System.Drawing.Size(300, 60), ForeColor = System.Drawing.Color.Red };

        this.Controls.AddRange(new Control[] { lblUsername, txtUsername, lblPassword, txtPassword, lblEmail, txtEmail, lblLicenseKey, txtLicenseKey, btnLogin, btnRegister, lblStatus });
    }

    private async Task LoginAsync()
    {
        try
        {
            btnLogin.Enabled = false;
            lblStatus.Text = "Authenticating...";
            lblStatus.ForeColor = System.Drawing.Color.Blue;

            string hwid = GetHardwareId();

            var loginResult = await _authClient.LoginAsync(txtUsername.Text, txtPassword.Text, "${(y==null?void 0:y.version)||"1.0.0"}", hwid);

            if (loginResult.Success)
            {
                lblStatus.Text = loginResult.Message;
                lblStatus.ForeColor = System.Drawing.Color.Green;

                MessageBox.Show(loginResult.Message, "Login Successful", MessageBoxButtons.OK, MessageBoxIcon.Information);

                // FIXED: No more .Value needed since UserId is now int, not int?
                var verifyResult = await _authClient.VerifyAsync(loginResult.UserId);
                if (verifyResult.Success)
                {
                    Console.WriteLine("User session verified successfully!");

                    this.Hide();

                    // Create UserInfo first
                    var userInfo = new UserInfo
                    {
                        UserId = loginResult.UserId,  // FIXED: No .Value needed
                        Username = loginResult.Username,
                        Email = loginResult.Email,
                        ExpiresAt = loginResult.ExpiresAt
                    };

                    // Pass UserInfo to MainForm constructor
                    var mainForm = new MainForm(userInfo);
                    mainForm.Show();

                    // Start enhanced session monitoring
                    StartSessionMonitoring(loginResult.UserId);  // FIXED: No .Value needed
                }
                else
                {
                    MessageBox.Show("Session verification failed. Please try logging in again.", 
                                  "Security Warning", MessageBoxButtons.OK, MessageBoxIcon.Warning);

                    txtUsername.Clear();
                    txtPassword.Clear();
                    txtUsername.Focus();
                }
            }
            else
            {
                lblStatus.Text = loginResult.Message;
                lblStatus.ForeColor = System.Drawing.Color.Red;

                MessageBox.Show(loginResult.Message, "Login Failed", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
        catch (Exception ex)
        {
            lblStatus.Text = $"Connection error: {ex.Message}";
            lblStatus.ForeColor = System.Drawing.Color.Red;
            MessageBox.Show($"Network error: {ex.Message}", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
        finally
        {
            btnLogin.Enabled = true;
        }
    }

    private async Task RegisterAsync()
    {
        try
        {
            // Validate input fields (email is optional)
            if (string.IsNullOrWhiteSpace(txtUsername.Text) || 
                string.IsNullOrWhiteSpace(txtPassword.Text) || 
                string.IsNullOrWhiteSpace(txtLicenseKey.Text))
            {
                MessageBox.Show("Please fill in all required fields (Username, Password, License Key)", "Validation Error", 
                              MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            btnRegister.Enabled = false;
            lblStatus.Text = "Creating account...";
            lblStatus.ForeColor = System.Drawing.Color.Blue;

            string hwid = GetHardwareId();

            var registerResult = await _authClient.RegisterAsync(
                txtUsername.Text, 
                txtPassword.Text, 
                txtEmail.Text, 
                txtLicenseKey.Text,
                "${(y==null?void 0:y.version)||"1.0.0"}", 
                hwid
            );

            if (registerResult.Success)
            {
                lblStatus.Text = registerResult.Message;
                lblStatus.ForeColor = System.Drawing.Color.Green;

                MessageBox.Show(registerResult.Message + "\\n\\nYou can now login with your credentials.", 
                              "Registration Successful", MessageBoxButtons.OK, MessageBoxIcon.Information);

                // Clear password, email and license key fields, keep username for login
                txtPassword.Clear();
                txtEmail.Clear();
                txtLicenseKey.Clear();
                txtPassword.Focus();
            }
            else
            {
                lblStatus.Text = registerResult.Message;
                lblStatus.ForeColor = System.Drawing.Color.Red;

                MessageBox.Show(registerResult.Message, "Registration Failed", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
        catch (Exception ex)
        {
            lblStatus.Text = $"Registration error: {ex.Message}";
            lblStatus.ForeColor = System.Drawing.Color.Red;
            MessageBox.Show($"Network error during registration: {ex.Message}", "Error", 
                          MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
        finally
        {
            btnRegister.Enabled = true;
        }
    }

    private void StartSessionMonitoring(int userId)
    {
        currentUserId = userId;
        sessionCheckFailures = 0;
        currentSessionToken = GenerateSessionToken();

        // Start session tracking on server
        Task.Run(async () => {
            try 
            {
                var sessionResult = await _authClient.StartSessionAsync(userId, currentSessionToken);
                if (sessionResult.Success)
                {
                    Console.WriteLine($"Session started: {currentSessionToken.Substring(0, 8)}...");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to start session: {ex.Message}");
            }
        });

        // Session verification every 5 minutes
        sessionTimer = new System.Windows.Forms.Timer();
        sessionTimer.Interval = 300000; // 5 minutes
        sessionTimer.Tick += async (s, e) => await VerifySessionPeriodically();
        sessionTimer.Start();

        // Heartbeat every 30 seconds
        heartbeatTimer = new System.Windows.Forms.Timer();
        heartbeatTimer.Interval = 30000; // 30 seconds
        heartbeatTimer.Tick += async (s, e) => await SendHeartbeat();
        heartbeatTimer.Start();

        Console.WriteLine("Session monitoring started successfully");
    }

    private string GenerateSessionToken()
    {
        var guid = Guid.NewGuid().ToString("N");
        var timestamp = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
        return $"sess_{guid}_{timestamp}";
    }

    private async Task VerifySessionPeriodically()
    {
        try
        {
            var verifyResult = await _authClient.VerifyAsync(currentUserId);
            if (!verifyResult.Success)
            {
                sessionCheckFailures++;
                Console.WriteLine($"Session verification failed ({sessionCheckFailures}/{maxFailures})");

                if (sessionCheckFailures >= maxFailures)
                {
                    await ForceLogout("Your session has expired. Please login again.");
                }
            }
            else
            {
                sessionCheckFailures = 0;
                Console.WriteLine($"Session verified at {DateTime.Now:HH:mm:ss}");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Session verification error: {ex.Message}");
        }
    }

    private async Task SendHeartbeat()
    {
        try
        {
            if (!string.IsNullOrEmpty(currentSessionToken))
            {
                var heartbeatResult = await _authClient.SendHeartbeatAsync(currentSessionToken);
                if (!heartbeatResult.Success)
                {
                    Console.WriteLine($"Heartbeat failed: {heartbeatResult.Message}");
                }
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Heartbeat error: {ex.Message}");
        }
    }

    private async Task ForceLogout(string reason)
    {
        // End session on server
        if (!string.IsNullOrEmpty(currentSessionToken))
        {
            try
            {
                await _authClient.EndSessionAsync(currentSessionToken);
                Console.WriteLine("Session ended on server");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Failed to end session: {ex.Message}");
            }
        }

        // Stop timers
        sessionTimer?.Stop();
        sessionTimer?.Dispose();
        heartbeatTimer?.Stop();
        heartbeatTimer?.Dispose();

        // Show message and return to login
        MessageBox.Show(reason, "Session Expired", MessageBoxButtons.OK, MessageBoxIcon.Warning);

        if (this.InvokeRequired)
        {
            this.Invoke(new Action(() => {
                CloseMainFormsAndShowLogin();
            }));
        }
        else
        {
            CloseMainFormsAndShowLogin();
        }
    }

    private void CloseMainFormsAndShowLogin()
    {
        // Convert FormCollection to array without LINQ Cast
        Form[] openForms = new Form[Application.OpenForms.Count];
        Application.OpenForms.CopyTo(openForms, 0);

        foreach (Form form in openForms)
        {
            if (form.Name == "MainForm" || form.GetType().Name == "MainForm")
            {
                form.Hide();
                form.Close();
            }
        }

        this.Show();
        this.WindowState = FormWindowState.Normal;
        this.BringToFront();
        txtUsername.Clear();
        txtPassword.Clear();
        txtUsername.Focus();

        // Clear session data
        currentSessionToken = null;
        currentUserId = 0;
        sessionCheckFailures = 0;
    }

    public void StopSessionMonitoring()
    {
        sessionTimer?.Stop();
        sessionTimer?.Dispose();
        heartbeatTimer?.Stop();
        heartbeatTimer?.Dispose();
        Console.WriteLine("Session monitoring stopped");
    }

    protected override void OnFormClosing(FormClosingEventArgs e)
    {
        StopSessionMonitoring();
        base.OnFormClosing(e);
    }

    private string GetHardwareId()
    {
        try
        {
            var mc = new ManagementClass("win32_processor");
            var moc = mc.GetInstances();
            string cpuId = "";
            foreach (ManagementObject mo in moc)
            {
                cpuId = mo.Properties["processorID"].Value.ToString();
                break;
            }

            var drive = new ManagementObject(@"win32_logicaldisk.deviceid=""C:""");
            drive.Get();
            string volumeSerial = drive["VolumeSerialNumber"].ToString();

            string combined = cpuId + volumeSerial;
            using (var sha256 = SHA256.Create())
            {
                byte[] hash = sha256.ComputeHash(Encoding.UTF8.GetBytes(combined));
                return Convert.ToBase64String(hash);
            }
        }
        catch
        {
            return Environment.MachineName + Environment.UserName;
        }
    }
}

// Sample MainForm class
public class MainForm : Form
{
    public UserInfo UserData { get; set; }

    public MainForm(UserInfo userInfo)
    {
        UserData = userInfo;
        this.Text = "Main Application - User: " + (UserData?.Username ?? "Unknown");
        this.Size = new System.Drawing.Size(600, 400);
        this.StartPosition = FormStartPosition.CenterScreen;

        var welcomeLabel = new Label
        {
            Text = $"Welcome to the application!\\n\\nUser ID: {UserData?.UserId}\\nUsername: {UserData?.Username}\\nLogin Time: {UserData?.LoginTime:yyyy-MM-dd HH:mm:ss}\\nExpires At: {UserData?.ExpiresAt:yyyy-MM-dd HH:mm:ss}",
            Location = new System.Drawing.Point(50, 50),
            Size = new System.Drawing.Size(500, 200),
            Font = new System.Drawing.Font("Arial", 12)
        };
        this.Controls.Add(welcomeLabel);
    }
}

// Program Entry Point
class Program
{
    [STAThread]
    static void Main()
    {
        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);
        Application.Run(new LoginForm());
    }
}

/*
SETUP INSTRUCTIONS:
1. Install NuGet Package: System.Text.Json
2. Add all using statements shown above
3. Replace YOUR_API_KEY with your actual API key: ${C}
4. Replace YOUR_BASE_URL with: ${N}
5. Build and run the application

FIXED ISSUES:
- Changed int? UserId to int UserId (no more nullable errors)
- Proper JSON property mapping with [JsonPropertyName] attributes
- Complete session monitoring with heartbeat functionality
- Enhanced error handling for network issues
- Automatic session cleanup on application exit

FEATURES INCLUDED:
- Login with HWID verification
- Session verification every 5 minutes
- Heartbeat every 30 seconds
- Automatic logout on session expiry
- Complete error handling for all scenarios
- Session tracking on server
*/`,R=`import requests
import json
import time
import threading
import hashlib
import platform
import subprocess
import uuid
from datetime import datetime, timedelta
from typing import Optional, Dict, Any
import tkinter as tk
from tkinter import messagebox, ttk

class AuthResponse:
    def __init__(self, data: Dict[str, Any]):
        self.success = data.get('success', False)
        self.message = data.get('message', '')
        self.user_id = data.get('user_id')
        self.username = data.get('username', '')
        self.email = data.get('email', '')
        self.expires_at = data.get('expires_at')
        self.hwid_locked = data.get('hwid_locked')

class SessionResponse:
    def __init__(self, data: Dict[str, Any]):
        self.success = data.get('success', False)
        self.message = data.get('message', '')
        self.session_token = data.get('session_token', '')

class UserInfo:
    def __init__(self, user_id: int, username: str, email: str, expires_at=None):
        self.user_id = user_id
        self.username = username
        self.email = email
        self.login_time = datetime.now()
        self.expires_at = expires_at

class AuthApiClient:
    def __init__(self, api_key: str, base_url: str = "${N}"):
        self.api_key = api_key
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({'X-API-Key': api_key})

    def login(self, username: str, password: str, version: str = None, hwid: str = None) -> AuthResponse:
        """Login with username and password"""
        try:
            login_data = {
                'username': username,
                'password': password,
                'version': version,
                'hwid': hwid
            }
            
            response = self.session.post(
                f"{self.base_url}/api/v1/login",
                json=login_data,
                timeout=30
            )
            
            return AuthResponse(response.json())
        except Exception as e:
            return AuthResponse({'success': False, 'message': f'Connection error: {str(e)}'})

    def register(self, username: str, password: str, email: str, license_key: str, version: str = None, hwid: str = None) -> AuthResponse:
        """Register a new user account with license key validation"""
        try:
            register_data = {
                'username': username,
                'password': password,
                'email': email,
                'license_key': license_key,
                'version': version,
                'hwid': hwid
            }
            
            response = self.session.post(
                f"{self.base_url}/api/v1/register",
                json=register_data,
                timeout=30
            )
            
            return AuthResponse(response.json())
        except Exception as e:
            return AuthResponse({'success': False, 'message': f'Registration error: {str(e)}'})

    def verify(self, user_id: int) -> AuthResponse:
        """Verify user session"""
        try:
            verify_data = {'user_id': user_id}
            
            response = self.session.post(
                f"{self.base_url}/api/v1/verify",
                json=verify_data,
                timeout=30
            )
            
            return AuthResponse(response.json())
        except Exception as e:
            return AuthResponse({'success': False, 'message': f'Verification error: {str(e)}'})

    def start_session(self, user_id: int, session_token: str) -> SessionResponse:
        """Start session tracking"""
        try:
            session_data = {
                'user_id': user_id,
                'session_token': session_token,
                'action': 'start'
            }
            
            response = self.session.post(
                f"{self.base_url}/api/v1/session/track",
                json=session_data,
                timeout=30
            )
            
            return SessionResponse(response.json())
        except Exception as e:
            return SessionResponse({'success': False, 'message': f'Session start error: {str(e)}'})

    def send_heartbeat(self, session_token: str) -> SessionResponse:
        """Send session heartbeat"""
        try:
            session_data = {
                'session_token': session_token,
                'action': 'heartbeat'
            }
            
            response = self.session.post(
                f"{self.base_url}/api/v1/session/track",
                json=session_data,
                timeout=30
            )
            
            return SessionResponse(response.json())
        except Exception as e:
            return SessionResponse({'success': False, 'message': f'Heartbeat error: {str(e)}'})

    def end_session(self, session_token: str) -> SessionResponse:
        """End session tracking"""
        try:
            session_data = {
                'session_token': session_token,
                'action': 'end'
            }
            
            response = self.session.post(
                f"{self.base_url}/api/v1/session/track",
                json=session_data,
                timeout=30
            )
            
            return SessionResponse(response.json())
        except Exception as e:
            return SessionResponse({'success': False, 'message': f'Session end error: {str(e)}'})

class LoginWindow:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Application Login")
        self.root.geometry("400x300")
        self.root.resizable(False, False)
        
        # Center the window
        self.root.eval('tk::PlaceWindow . center')
        
        self.auth_client = AuthApiClient("${C}")
        
        # Session monitoring variables
        self.current_user_id = None
        self.current_session_token = None
        self.session_check_failures = 0
        self.max_failures = 3
        self.session_timer = None
        self.heartbeat_timer = None
        self.monitoring_active = False
        
        self.setup_ui()

    def setup_ui(self):
        # Increase window height for license key field
        self.root.geometry("400x400")
        
        # Username
        tk.Label(self.root, text="Username:", font=("Arial", 10)).place(x=50, y=50)
        self.username_entry = tk.Entry(self.root, font=("Arial", 10), width=25)
        self.username_entry.place(x=140, y=50)
        
        # Password
        tk.Label(self.root, text="Password:", font=("Arial", 10)).place(x=50, y=90)
        self.password_entry = tk.Entry(self.root, font=("Arial", 10), width=25, show="*")
        self.password_entry.place(x=140, y=90)
        
        # Email (Optional)
        tk.Label(self.root, text="Email (Optional):", font=("Arial", 10)).place(x=50, y=130)
        self.email_entry = tk.Entry(self.root, font=("Arial", 10), width=25)
        self.email_entry.place(x=140, y=130)
        self.email_entry.insert(0, "Optional")
        
        # License Key
        tk.Label(self.root, text="License Key:", font=("Arial", 10)).place(x=50, y=170)
        self.license_key_entry = tk.Entry(self.root, font=("Arial", 10), width=25)
        self.license_key_entry.place(x=140, y=170)
        
        # Login button
        self.login_btn = tk.Button(
            self.root, 
            text="Login", 
            font=("Arial", 10), 
            command=self.login,
            bg="#007acc",
            fg="white",
            width=12
        )
        self.login_btn.place(x=140, y=210)
        
        # Register button
        self.register_btn = tk.Button(
            self.root, 
            text="Register", 
            font=("Arial", 10), 
            command=self.register,
            bg="#28a745",
            fg="white",
            width=12
        )
        self.register_btn.place(x=260, y=210)
        
        # Status label
        self.status_label = tk.Label(
            self.root, 
            text="", 
            font=("Arial", 9), 
            fg="red",
            wraplength=300
        )
        self.status_label.place(x=50, y=260)
        
        # Bind Enter key to login
        self.root.bind('<Return>', lambda event: self.login())
        self.username_entry.focus()

    def login(self):
        try:
            self.login_btn.config(state='disabled')
            self.status_label.config(text="Authenticating...", fg="blue")
            self.root.update()
            
            username = self.username_entry.get().strip()
            password = self.password_entry.get().strip()
            
            if not username or not password:
                self.status_label.config(text="Please enter both username and password", fg="red")
                return
            
            # Get hardware ID
            hwid = self.get_hardware_id()
            
            # Attempt login
            login_result = self.auth_client.login(username, password, "${(y==null?void 0:y.version)||"1.0.0"}", hwid)
            
            if login_result.success:
                self.status_label.config(text=login_result.message, fg="green")
                messagebox.showinfo("Login Successful", login_result.message)
                
                # Verify session
                verify_result = self.auth_client.verify(login_result.user_id)
                if verify_result.success:
                    print("User session verified successfully!")
                    
                    # Hide login window
                    self.root.withdraw()
                    
                    # Create user info
                    user_info = UserInfo(
                        login_result.user_id,
                        login_result.username,
                        login_result.email,
                        login_result.expires_at
                    )
                    
                    # Show main window
                    main_window = MainWindow(user_info, self)
                    
                    # Start session monitoring
                    self.start_session_monitoring(login_result.user_id)
                    
                else:
                    messagebox.showwarning(
                        "Security Warning", 
                        "Session verification failed. Please try logging in again."
                    )
                    self.clear_form()
                    
            else:
                self.status_label.config(text=login_result.message, fg="red")
                messagebox.showerror("Login Failed", login_result.message)
                
        except Exception as e:
            error_msg = f"Connection error: {str(e)}"
            self.status_label.config(text=error_msg, fg="red")
            messagebox.showerror("Error", f"Network error: {str(e)}")
            
        finally:
            self.login_btn.config(state='normal')

    def register(self):
        """Register a new user account with license key validation"""
        try:
            # Validate input fields
            username = self.username_entry.get().strip()
            password = self.password_entry.get().strip()
            email = self.email_entry.get().strip()
            license_key = self.license_key_entry.get().strip()
            
            # Clean up email field - if it's the placeholder text or empty, set to None
            if email == "Optional" or not email:
                email = None
            
            if not username or not password or not license_key:
                messagebox.showwarning("Validation Error", "Please fill in all required fields (Username, Password, License Key)")
                return
                
            self.register_btn.config(state='disabled')
            self.status_label.config(text="Creating account...", fg="blue")
            self.root.update()
            
            hwid = self.get_hardware_id()
            
            register_result = self.auth_client.register(
                username, 
                password, 
                email, 
                license_key,
                "${(y==null?void 0:y.version)||"1.0.0"}", 
                hwid
            )
            
            if register_result.success:
                self.status_label.config(text=register_result.message, fg="green")
                messagebox.showinfo(
                    "Registration Successful", 
                    register_result.message + "\\n\\nYou can now login with your credentials."
                )
                
                # Clear password, email and license key fields, keep username for login
                self.password_entry.delete(0, tk.END)
                self.email_entry.delete(0, tk.END)
                self.license_key_entry.delete(0, tk.END)
                self.password_entry.focus()
                
            else:
                self.status_label.config(text=register_result.message, fg="red")
                messagebox.showerror("Registration Failed", register_result.message)
                
        except Exception as e:
            error_msg = f"Registration error: {str(e)}"
            self.status_label.config(text=error_msg, fg="red")
            messagebox.showerror("Error", f"Network error during registration: {str(e)}")
            
        finally:
            self.register_btn.config(state='normal')

    def start_session_monitoring(self, user_id: int):
        """Start enhanced session monitoring"""
        self.current_user_id = user_id
        self.session_check_failures = 0
        self.current_session_token = self.generate_session_token()
        self.monitoring_active = True
        
        # Start session on server
        def start_session_thread():
            try:
                session_result = self.auth_client.start_session(user_id, self.current_session_token)
                if session_result.success:
                    print(f"Session started: {self.current_session_token[:8]}...")
            except Exception as e:
                print(f"Failed to start session: {e}")
        
        threading.Thread(target=start_session_thread, daemon=True).start()
        
        # Start periodic verification (every 5 minutes)
        self.session_timer = threading.Timer(300.0, self.verify_session_periodically)
        self.session_timer.daemon = True
        self.session_timer.start()
        
        # Start heartbeat (every 30 seconds)
        self.heartbeat_timer = threading.Timer(30.0, self.send_heartbeat)
        self.heartbeat_timer.daemon = True
        self.heartbeat_timer.start()
        
        print("Session monitoring started successfully")

    def generate_session_token(self) -> str:
        """Generate unique session token"""
        guid = str(uuid.uuid4()).replace('-', '')
        timestamp = int(time.time())
        return f"sess_{guid}_{timestamp}"

    def verify_session_periodically(self):
        """Verify session periodically"""
        if not self.monitoring_active:
            return
            
        try:
            verify_result = self.auth_client.verify(self.current_user_id)
            if not verify_result.success:
                self.session_check_failures += 1
                print(f"Session verification failed ({self.session_check_failures}/{self.max_failures})")
                
                if self.session_check_failures >= self.max_failures:
                    self.force_logout("Your session has expired. Please login again.")
                    return
            else:
                self.session_check_failures = 0
                print(f"Session verified at {datetime.now().strftime('%H:%M:%S')}")
                
        except Exception as e:
            print(f"Session verification error: {e}")
        
        # Schedule next verification
        if self.monitoring_active:
            self.session_timer = threading.Timer(300.0, self.verify_session_periodically)
            self.session_timer.daemon = True
            self.session_timer.start()

    def send_heartbeat(self):
        """Send heartbeat to server"""
        if not self.monitoring_active:
            return
            
        try:
            if self.current_session_token:
                heartbeat_result = self.auth_client.send_heartbeat(self.current_session_token)
                if not heartbeat_result.success:
                    print(f"Heartbeat failed: {heartbeat_result.message}")
        except Exception as e:
            print(f"Heartbeat error: {e}")
        
        # Schedule next heartbeat
        if self.monitoring_active:
            self.heartbeat_timer = threading.Timer(30.0, self.send_heartbeat)
            self.heartbeat_timer.daemon = True
            self.heartbeat_timer.start()

    def force_logout(self, reason: str):
        """Force logout and return to login screen"""
        # End session on server
        if self.current_session_token:
            try:
                self.auth_client.end_session(self.current_session_token)
                print("Session ended on server")
            except Exception as e:
                print(f"Failed to end session: {e}")
        
        # Stop monitoring
        self.stop_session_monitoring()
        
        # Show message and return to login
        def show_logout_message():
            messagebox.showwarning("Session Expired", reason)
            self.show_login_window()
        
        # Schedule on main thread
        self.root.after(0, show_logout_message)

    def show_login_window(self):
        """Show login window and clear form"""
        self.root.deiconify()
        self.root.lift()
        self.clear_form()
        
        # Clear session data
        self.current_session_token = None
        self.current_user_id = None
        self.session_check_failures = 0

    def stop_session_monitoring(self):
        """Stop session monitoring"""
        self.monitoring_active = False
        
        if self.session_timer:
            self.session_timer.cancel()
        if self.heartbeat_timer:
            self.heartbeat_timer.cancel()
            
        print("Session monitoring stopped")

    def clear_form(self):
        """Clear login form"""
        self.username_entry.delete(0, tk.END)
        self.password_entry.delete(0, tk.END)
        self.status_label.config(text="")
        self.username_entry.focus()

    def get_hardware_id(self) -> str:
        """Get hardware ID for HWID locking"""
        try:
            # Get system info
            system_info = platform.uname()
            machine_id = system_info.machine + system_info.processor
            
            # Try to get additional hardware info based on platform
            if platform.system() == "Windows":
                try:
                    import winreg
                    key = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, 
                                       "SOFTWARE\\Microsoft\\Cryptography")
                    guid = winreg.QueryValueEx(key, "MachineGuid")[0]
                    machine_id += guid
                    winreg.CloseKey(key)
                except:
                    pass
            elif platform.system() == "Linux":
                try:
                    with open("/etc/machine-id", "r") as f:
                        machine_id += f.read().strip()
                except:
                    pass
            elif platform.system() == "Darwin":  # macOS
                try:
                    result = subprocess.run(
                        ["system_profiler", "SPHardwareDataType"],
                        capture_output=True, text=True
                    )
                    machine_id += result.stdout
                except:
                    pass
            
            # Create hash
            combined = machine_id + platform.node()
            return hashlib.sha256(combined.encode()).hexdigest()
            
        except Exception as e:
            # Fallback to basic info
            return hashlib.sha256(
                (platform.node() + platform.system()).encode()
            ).hexdigest()

    def on_closing(self):
        """Handle window closing"""
        self.stop_session_monitoring()
        self.root.destroy()

    def run(self):
        """Start the application"""
        self.root.protocol("WM_DELETE_WINDOW", self.on_closing)
        self.root.mainloop()

class MainWindow:
    def __init__(self, user_info: UserInfo, login_window: LoginWindow):
        self.user_info = user_info
        self.login_window = login_window
        
        self.window = tk.Toplevel()
        self.window.title(f"Main Application - User: {user_info.username}")
        self.window.geometry("600x400")
        self.window.resizable(True, True)
        
        # Center the window
        self.window.eval('tk::PlaceWindow . center')
        
        self.setup_ui()
        
        # Handle window close
        self.window.protocol("WM_DELETE_WINDOW", self.on_closing)

    def setup_ui(self):
        # Welcome message
        welcome_text = f"""Welcome to the application!

User ID: {self.user_info.user_id}
Username: {self.user_info.username}
Email: {self.user_info.email or 'Not provided'}
Login Time: {self.user_info.login_time.strftime('%Y-%m-%d %H:%M:%S')}
Expires At: {self.user_info.expires_at or 'Never'}

Session monitoring is active.
The application will automatically verify your session every 5 minutes.
"""
        
        welcome_label = tk.Label(
            self.window,
            text=welcome_text,
            font=("Arial", 12),
            justify=tk.LEFT,
            anchor="nw"
        )
        welcome_label.pack(padx=50, pady=50, fill=tk.BOTH, expand=True)
        
        # Logout button
        logout_btn = tk.Button(
            self.window,
            text="Logout",
            font=("Arial", 10),
            command=self.logout,
            bg="#dc3545",
            fg="white",
            width=15
        )
        logout_btn.pack(pady=20)

    def logout(self):
        """Manual logout"""
        self.login_window.force_logout("You have been logged out.")
        self.window.destroy()

    def on_closing(self):
        """Handle window closing"""
        self.login_window.stop_session_monitoring()
        self.login_window.show_login_window()
        self.window.destroy()

# Example usage
if __name__ == "__main__":
    app = LoginWindow()
    app.run()

"""
SETUP INSTRUCTIONS:
1. Install required packages:
   pip install requests

2. Replace YOUR_API_KEY with your actual API key: ${C}
3. Replace YOUR_BASE_URL with: ${N}
4. Run the script: python auth_client.py

FEATURES INCLUDED:
- Login with HWID verification
- Session verification every 5 minutes  
- Heartbeat every 30 seconds
- Automatic logout on session expiry
- Complete error handling for all scenarios
- Session tracking on server
- Cross-platform HWID generation
- GUI application with Tkinter

REQUIREMENTS:
- Python 3.7+
- requests library
- tkinter (usually included with Python)
"""`,M=`const axios = require('axios');
const crypto = require('crypto');
const os = require('os');
const { execSync } = require('child_process');

class AuthResponse {
    constructor(data) {
        this.success = data.success || false;
        this.message = data.message || '';
        this.user_id = data.user_id;
        this.username = data.username || '';
        this.email = data.email || '';
        this.expires_at = data.expires_at;
        this.hwid_locked = data.hwid_locked;
    }
}

class SessionResponse {
    constructor(data) {
        this.success = data.success || false;
        this.message = data.message || '';
        this.session_token = data.session_token || '';
    }
}

class UserInfo {
    constructor(userId, username, email, expiresAt = null) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.loginTime = new Date();
        this.expiresAt = expiresAt;
    }
}

class AuthApiClient {
    constructor(apiKey, baseUrl = '${N}') {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this.axios = axios.create({
            timeout: 30000,
            headers: {
                'X-API-Key': apiKey,
                'Content-Type': 'application/json'
            }
        });
    }

    async login(username, password, version = null, hwid = null) {
        try {
            const loginData = { username, password, version, hwid };
            const response = await this.axios.post(\`\${this.baseUrl}/api/v1/login\`, loginData);
            return new AuthResponse(response.data);
        } catch (error) {
            const message = error.response?.data?.message || \`Connection error: \${error.message}\`;
            return new AuthResponse({ success: false, message });
        }
    }

    async verify(userId) {
        try {
            const verifyData = { user_id: userId };
            const response = await this.axios.post(\`\${this.baseUrl}/api/v1/verify\`, verifyData);
            return new AuthResponse(response.data);
        } catch (error) {
            const message = error.response?.data?.message || \`Verification error: \${error.message}\`;
            return new AuthResponse({ success: false, message });
        }
    }

    async startSession(userId, sessionToken) {
        try {
            const sessionData = { user_id: userId, session_token: sessionToken, action: 'start' };
            const response = await this.axios.post(\`\${this.baseUrl}/api/v1/session/track\`, sessionData);
            return new SessionResponse(response.data);
        } catch (error) {
            const message = error.response?.data?.message || \`Session start error: \${error.message}\`;
            return new SessionResponse({ success: false, message });
        }
    }

    async sendHeartbeat(sessionToken) {
        try {
            const sessionData = { session_token: sessionToken, action: 'heartbeat' };
            const response = await this.axios.post(\`\${this.baseUrl}/api/v1/session/track\`, sessionData);
            return new SessionResponse(response.data);
        } catch (error) {
            const message = error.response?.data?.message || \`Heartbeat error: \${error.message}\`;
            return new SessionResponse({ success: false, message });
        }
    }

    async endSession(sessionToken) {
        try {
            const sessionData = { session_token: sessionToken, action: 'end' };
            const response = await this.axios.post(\`\${this.baseUrl}/api/v1/session/track\`, sessionData);
            return new SessionResponse(response.data);
        } catch (error) {
            const message = error.response?.data?.message || \`Session end error: \${error.message}\`;
            return new SessionResponse({ success: false, message });
        }
    }
}

class AuthApp {
    constructor() {
        this.authClient = new AuthApiClient('${C}');
        this.currentUserId = null;
        this.currentSessionToken = null;
        this.sessionCheckFailures = 0;
        this.maxFailures = 3;
        this.sessionTimer = null;
        this.heartbeatTimer = null;
        this.monitoringActive = false;
    }

    async login(username, password) {
        try {
            console.log('Authenticating...');
            
            if (!username || !password) {
                throw new Error('Please provide both username and password');
            }

            // Get hardware ID
            const hwid = this.getHardwareId();
            
            // Attempt login
            const loginResult = await this.authClient.login(username, password, '${(y==null?void 0:y.version)||"1.0.0"}', hwid);
            
            if (loginResult.success) {
                console.log(\`✅ \${loginResult.message}\`);
                
                // Verify session
                const verifyResult = await this.authClient.verify(loginResult.user_id);
                if (verifyResult.success) {
                    console.log('✅ User session verified successfully!');
                    
                    // Create user info
                    const userInfo = new UserInfo(
                        loginResult.user_id,
                        loginResult.username,
                        loginResult.email,
                        loginResult.expires_at
                    );
                    
                    // Start session monitoring
                    this.startSessionMonitoring(loginResult.user_id);
                    
                    // Show main application
                    this.showMainApplication(userInfo);
                    
                    return { success: true, userInfo };
                } else {
                    console.log('⚠️ Session verification failed. Please try logging in again.');
                    return { success: false, message: 'Session verification failed' };
                }
            } else {
                console.log(\`❌ \${loginResult.message}\`);
                return { success: false, message: loginResult.message };
            }
        } catch (error) {
            const errorMsg = \`Connection error: \${error.message}\`;
            console.log(\`❌ \${errorMsg}\`);
            return { success: false, message: errorMsg };
        }
    }

    startSessionMonitoring(userId) {
        this.currentUserId = userId;
        this.sessionCheckFailures = 0;
        this.currentSessionToken = this.generateSessionToken();
        this.monitoringActive = true;
        
        // Start session on server
        this.authClient.startSession(userId, this.currentSessionToken)
            .then(result => {
                if (result.success) {
                    console.log(\`📡 Session started: \${this.currentSessionToken.substring(0, 8)}...\`);
                }
            })
            .catch(error => {
                console.log(\`❌ Failed to start session: \${error.message}\`);
            });
        
        // Start periodic verification (every 5 minutes)
        this.sessionTimer = setInterval(() => {
            this.verifySessionPeriodically();
        }, 5 * 60 * 1000);
        
        // Start heartbeat (every 30 seconds)
        this.heartbeatTimer = setInterval(() => {
            this.sendHeartbeat();
        }, 30 * 1000);
        
        console.log('🔄 Session monitoring started successfully');
    }

    async verifySessionPeriodically() {
        if (!this.monitoringActive) return;
        
        try {
            const verifyResult = await this.authClient.verify(this.currentUserId);
            if (!verifyResult.success) {
                this.sessionCheckFailures++;
                console.log(\`⚠️ Session verification failed (\${this.sessionCheckFailures}/\${this.maxFailures})\`);
                
                if (this.sessionCheckFailures >= this.maxFailures) {
                    this.forceLogout('Your session has expired. Please login again.');
                    return;
                }
            } else {
                this.sessionCheckFailures = 0;
                console.log(\`✅ Session verified at \${new Date().toLocaleTimeString()}\`);
            }
        } catch (error) {
            console.log(\`❌ Session verification error: \${error.message}\`);
        }
    }

    async sendHeartbeat() {
        if (!this.monitoringActive) return;
        
        try {
            if (this.currentSessionToken) {
                const heartbeatResult = await this.authClient.sendHeartbeat(this.currentSessionToken);
                if (!heartbeatResult.success) {
                    console.log(\`💔 Heartbeat failed: \${heartbeatResult.message}\`);
                }
            }
        } catch (error) {
            console.log(\`❌ Heartbeat error: \${error.message}\`);
        }
    }

    async forceLogout(reason) {
        // End session on server
        if (this.currentSessionToken) {
            try {
                await this.authClient.endSession(this.currentSessionToken);
                console.log('📡 Session ended on server');
            } catch (error) {
                console.log(\`❌ Failed to end session: \${error.message}\`);
            }
        }
        
        // Stop monitoring
        this.stopSessionMonitoring();
        
        // Show logout message
        console.log(\`🚪 \${reason}\`);
        
        // Return to login prompt
        this.showLoginPrompt();
    }

    stopSessionMonitoring() {
        this.monitoringActive = false;
        
        if (this.sessionTimer) {
            clearInterval(this.sessionTimer);
            this.sessionTimer = null;
        }
        
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
        
        console.log('🛑 Session monitoring stopped');
    }

    generateSessionToken() {
        const guid = crypto.randomUUID().replace(/-/g, '');
        const timestamp = Math.floor(Date.now() / 1000);
        return \`sess_\${guid}_\${timestamp}\`;
    }

    showMainApplication(userInfo) {
        console.log('\\n' + '='.repeat(50));
        console.log('🎉 WELCOME TO THE APPLICATION! 🎉');
        console.log('='.repeat(50));
        console.log(\`👤 User ID: \${userInfo.userId}\`);
        console.log(\`📝 Username: \${userInfo.username}\`);
        console.log(\`📧 Email: \${userInfo.email || 'Not provided'}\`);
        console.log(\`⏰ Login Time: \${userInfo.loginTime.toLocaleString()}\`);
        console.log(\`📅 Expires At: \${userInfo.expiresAt || 'Never'}\`);
        console.log('\\n🔄 Session monitoring is active.');
        console.log('📡 The application will automatically verify your session every 5 minutes.');
        console.log('💓 Heartbeat is sent every 30 seconds.');
        console.log('\\nType "logout" to manually logout or Ctrl+C to exit.');
        console.log('='.repeat(50));
        
        // Start command line interface
        this.startCLI();
    }

    startCLI() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: '> '
        });

        rl.prompt();

        rl.on('line', (input) => {
            const command = input.trim().toLowerCase();
            
            switch (command) {
                case 'logout':
                    this.forceLogout('You have been logged out.');
                    rl.close();
                    break;
                case 'status':
                    console.log(\`📊 Status: Active | User ID: \${this.currentUserId} | Failures: \${this.sessionCheckFailures}\`);
                    break;
                case 'help':
                    console.log('Available commands: logout, status, help');
                    break;
                default:
                    console.log('Unknown command. Type "help" for available commands.');
            }
            
            rl.prompt();
        });

        rl.on('close', () => {
            this.stopSessionMonitoring();
            console.log('\\n👋 Goodbye!');
            process.exit(0);
        });
    }

    showLoginPrompt() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        console.log('\\n' + '='.repeat(50));
        console.log('🔐 APPLICATION LOGIN');
        console.log('='.repeat(50));

        rl.question('👤 Username: ', (username) => {
            rl.question('🔒 Password: ', (password) => {
                rl.close();
                
                this.login(username, password).then(result => {
                    if (!result.success) {
                        console.log(\`\\n❌ Login failed: \${result.message}\\n\`);
                        setTimeout(() => this.showLoginPrompt(), 1000);
                    }
                });
            });
        });
    }

    getHardwareId() {
        try {
            // Get system information
            const systemInfo = {
                platform: os.platform(),
                arch: os.arch(),
                hostname: os.hostname(),
                cpus: os.cpus()[0]?.model || '',
                totalmem: os.totalmem()
            };

            let hardwareInfo = JSON.stringify(systemInfo);

            // Try to get additional hardware info based on platform
            try {
                if (os.platform() === 'win32') {
                    // Windows: Get machine GUID
                    const machineGuid = execSync('powershell -command "(Get-ItemProperty -Path HKLM:\\\\SOFTWARE\\\\Microsoft\\\\Cryptography -Name MachineGuid).MachineGuid"', { encoding: 'utf8' }).trim();
                    hardwareInfo += machineGuid;
                } else if (os.platform() === 'linux') {
                    // Linux: Get machine ID
                    const machineId = execSync('cat /etc/machine-id', { encoding: 'utf8' }).trim();
                    hardwareInfo += machineId;
                } else if (os.platform() === 'darwin') {
                    // macOS: Get hardware UUID
                    const hardwareUuid = execSync('system_profiler SPHardwareDataType | grep "Hardware UUID"', { encoding: 'utf8' }).trim();
                    hardwareInfo += hardwareUuid;
                }
            } catch (error) {
                // Fallback to basic info if specific commands fail
                console.log('Using fallback hardware ID generation');
            }

            // Create hash
            return crypto.createHash('sha256').update(hardwareInfo).digest('hex');
            
        } catch (error) {
            // Ultimate fallback
            const fallback = os.hostname() + os.platform() + os.arch();
            return crypto.createHash('sha256').update(fallback).digest('hex');
        }
    }

    start() {
        console.log('🚀 Starting Application...');
        this.showLoginPrompt();
    }
}

// Example usage
if (require.main === module) {
    const app = new AuthApp();
    app.start();
}

// Export for use as module
module.exports = {
    AuthApiClient,
    AuthApp,
    AuthResponse,
    SessionResponse,
    UserInfo
};

/*
SETUP INSTRUCTIONS:
1. Install required packages:
   npm install axios

2. Replace YOUR_API_KEY with your actual API key: ${C}
3. Replace YOUR_BASE_URL with: ${N}
4. Run the script: node auth_client.js

FEATURES INCLUDED:
- Login with HWID verification
- Session verification every 5 minutes
- Heartbeat every 30 seconds
- Automatic logout on session expiry
- Complete error handling for all scenarios
- Session tracking on server
- Cross-platform HWID generation
- Command line interface
- Can be used as a module in other Node.js applications

REQUIREMENTS:
- Node.js 14+
- axios package
*/`,k=`#include <iostream>
#include <string>
#include <memory>
#include <thread>
#include <chrono>
#include <atomic>
#include <json/json.h>
#include <curl/curl.h>
#include <openssl/sha.h>
#include <iomanip>
#include <sstream>
#include <ctime>

#ifdef _WIN32
    #include <windows.h>
    #include <comdef.h>
    #include <Wbemidl.h>
    #pragma comment(lib, "wbemuuid.lib")
#elif __linux__
    #include <fstream>
    #include <sys/utsname.h>
#elif __APPLE__
    #include <sys/sysctl.h>
    #include <sys/utsname.h>
#endif

// HTTP Response structure
struct HttpResponse {
    std::string data;
    long response_code;
    
    HttpResponse() : response_code(0) {}
};

// Callback function for CURL to write response data
static size_t WriteCallback(void* contents, size_t size, size_t nmemb, HttpResponse* response) {
    size_t totalSize = size * nmemb;
    response->data.append((char*)contents, totalSize);
    return totalSize;
}

// Auth Response class
class AuthResponse {
public:
    bool success;
    std::string message;
    int user_id;
    std::string username;
    std::string email;
    std::string expires_at;
    bool hwid_locked;

    AuthResponse() : success(false), user_id(0), hwid_locked(false) {}
    
    AuthResponse(const Json::Value& json) {
        success = json.get("success", false).asBool();
        message = json.get("message", "").asString();
        user_id = json.get("user_id", 0).asInt();
        username = json.get("username", "").asString();
        email = json.get("email", "").asString();
        expires_at = json.get("expires_at", "").asString();
        hwid_locked = json.get("hwid_locked", false).asBool();
    }
};

// Session Response class
class SessionResponse {
public:
    bool success;
    std::string message;
    std::string session_token;

    SessionResponse() : success(false) {}
    
    SessionResponse(const Json::Value& json) {
        success = json.get("success", false).asBool();
        message = json.get("message", "").asString();
        session_token = json.get("session_token", "").asString();
    }
};

// User Info class
class UserInfo {
public:
    int user_id;
    std::string username;
    std::string email;
    std::time_t login_time;
    std::string expires_at;

    UserInfo(int id, const std::string& uname, const std::string& mail, const std::string& expires = "")
        : user_id(id), username(uname), email(mail), expires_at(expires) {
        login_time = std::time(nullptr);
    }
};

// Auth API Client class
class AuthApiClient {
private:
    std::string api_key;
    std::string base_url;
    CURL* curl;

    HttpResponse makeRequest(const std::string& url, const std::string& json_data, const std::string& method = "POST") {
        HttpResponse response;
        
        if (!curl) {
            response.response_code = -1;
            return response;
        }

        curl_easy_reset(curl);
        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
        curl_easy_setopt(curl, CURLOPT_TIMEOUT, 30L);

        // Set headers
        struct curl_slist* headers = nullptr;
        std::string auth_header = "X-API-Key: " + api_key;
        headers = curl_slist_append(headers, "Content-Type: application/json");
        headers = curl_slist_append(headers, auth_header.c_str());
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

        if (method == "POST") {
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, json_data.c_str());
        }

        CURLcode res = curl_easy_perform(curl);
        curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response.response_code);
        
        curl_slist_free_all(headers);

        if (res != CURLE_OK) {
            response.response_code = -1;
            response.data = "Connection error: " + std::string(curl_easy_strerror(res));
        }

        return response;
    }

public:
    AuthApiClient(const std::string& key, const std::string& url = "${N}")
        : api_key(key), base_url(url) {
        curl = curl_easy_init();
    }

    ~AuthApiClient() {
        if (curl) {
            curl_easy_cleanup(curl);
        }
    }

    AuthResponse login(const std::string& username, const std::string& password, 
                      const std::string& version = "", const std::string& hwid = "") {
        Json::Value login_data;
        login_data["username"] = username;
        login_data["password"] = password;
        if (!version.empty()) login_data["version"] = version;
        if (!hwid.empty()) login_data["hwid"] = hwid;

        Json::StreamWriterBuilder builder;
        std::string json_string = Json::writeString(builder, login_data);

        HttpResponse response = makeRequest(base_url + "/api/v1/login", json_string);
        
        if (response.response_code == -1) {
            AuthResponse auth_resp;
            auth_resp.message = response.data;
            return auth_resp;
        }

        Json::Value json_response;
        Json::Reader reader;
        if (reader.parse(response.data, json_response)) {
            return AuthResponse(json_response);
        } else {
            AuthResponse auth_resp;
            auth_resp.message = "Failed to parse response";
            return auth_resp;
        }
    }

    AuthResponse verify(int user_id) {
        Json::Value verify_data;
        verify_data["user_id"] = user_id;

        Json::StreamWriterBuilder builder;
        std::string json_string = Json::writeString(builder, verify_data);

        HttpResponse response = makeRequest(base_url + "/api/v1/verify", json_string);
        
        if (response.response_code == -1) {
            AuthResponse auth_resp;
            auth_resp.message = response.data;
            return auth_resp;
        }

        Json::Value json_response;
        Json::Reader reader;
        if (reader.parse(response.data, json_response)) {
            return AuthResponse(json_response);
        } else {
            AuthResponse auth_resp;
            auth_resp.message = "Failed to parse response";
            return auth_resp;
        }
    }

    SessionResponse startSession(int user_id, const std::string& session_token) {
        Json::Value session_data;
        session_data["user_id"] = user_id;
        session_data["session_token"] = session_token;
        session_data["action"] = "start";

        Json::StreamWriterBuilder builder;
        std::string json_string = Json::writeString(builder, session_data);

        HttpResponse response = makeRequest(base_url + "/api/v1/session/track", json_string);
        
        if (response.response_code == -1) {
            SessionResponse sess_resp;
            sess_resp.message = response.data;
            return sess_resp;
        }

        Json::Value json_response;
        Json::Reader reader;
        if (reader.parse(response.data, json_response)) {
            return SessionResponse(json_response);
        } else {
            SessionResponse sess_resp;
            sess_resp.message = "Failed to parse response";
            return sess_resp;
        }
    }

    SessionResponse sendHeartbeat(const std::string& session_token) {
        Json::Value session_data;
        session_data["session_token"] = session_token;
        session_data["action"] = "heartbeat";

        Json::StreamWriterBuilder builder;
        std::string json_string = Json::writeString(builder, session_data);

        HttpResponse response = makeRequest(base_url + "/api/v1/session/track", json_string);
        
        if (response.response_code == -1) {
            SessionResponse sess_resp;
            sess_resp.message = response.data;
            return sess_resp;
        }

        Json::Value json_response;
        Json::Reader reader;
        if (reader.parse(response.data, json_response)) {
            return SessionResponse(json_response);
        } else {
            SessionResponse sess_resp;
            sess_resp.message = "Failed to parse response";
            return sess_resp;
        }
    }

    SessionResponse endSession(const std::string& session_token) {
        Json::Value session_data;
        session_data["session_token"] = session_token;
        session_data["action"] = "end";

        Json::StreamWriterBuilder builder;
        std::string json_string = Json::writeString(builder, session_data);

        HttpResponse response = makeRequest(base_url + "/api/v1/session/track", json_string);
        
        if (response.response_code == -1) {
            SessionResponse sess_resp;
            sess_resp.message = response.data;
            return sess_resp;
        }

        Json::Value json_response;
        Json::Reader reader;
        if (reader.parse(response.data, json_response)) {
            return SessionResponse(json_response);
        } else {
            SessionResponse sess_resp;
            sess_resp.message = "Failed to parse response";
            return sess_resp;
        }
    }
};

// Auth Application class
class AuthApp {
private:
    std::unique_ptr<AuthApiClient> auth_client;
    int current_user_id;
    std::string current_session_token;
    int session_check_failures;
    const int max_failures;
    std::atomic<bool> monitoring_active;
    std::thread session_thread;
    std::thread heartbeat_thread;

    std::string generateSessionToken() {
        std::time_t now = std::time(nullptr);
        std::stringstream ss;
        ss << "sess_" << std::hex << now << "_" << std::hex << std::hash<std::string>{}(std::to_string(now));
        return ss.str();
    }

    std::string getHardwareId() {
        std::string hardware_info;
        
#ifdef _WIN32
        // Windows implementation
        try {
            HKEY hKey;
            if (RegOpenKeyEx(HKEY_LOCAL_MACHINE, 
                           TEXT("SOFTWARE\\\\Microsoft\\\\Cryptography"), 
                           0, KEY_READ, &hKey) == ERROR_SUCCESS) {
                
                TCHAR szBuffer[512];
                DWORD dwBufferSize = sizeof(szBuffer);
                if (RegQueryValueEx(hKey, TEXT("MachineGuid"), 0, NULL, 
                                  (LPBYTE)szBuffer, &dwBufferSize) == ERROR_SUCCESS) {
                    hardware_info = szBuffer;
                }
                RegCloseKey(hKey);
            }
        } catch (...) {
            hardware_info = "windows_fallback";
        }
#elif __linux__
        // Linux implementation
        try {
            std::ifstream file("/etc/machine-id");
            if (file.is_open()) {
                std::getline(file, hardware_info);
                file.close();
            }
        } catch (...) {
            hardware_info = "linux_fallback";
        }
#elif __APPLE__
        // macOS implementation
        try {
            size_t size = 0;
            sysctlbyname("kern.uuid", nullptr, &size, nullptr, 0);
            char* uuid = new char[size];
            sysctlbyname("kern.uuid", uuid, &size, nullptr, 0);
            hardware_info = std::string(uuid);
            delete[] uuid;
        } catch (...) {
            hardware_info = "macos_fallback";
        }
#endif

        // Add additional system info
        hardware_info += std::to_string(std::hash<std::string>{}("additional_entropy"));

        // Create SHA256 hash
        unsigned char hash[SHA256_DIGEST_LENGTH];
        SHA256_CTX sha256;
        SHA256_Init(&sha256);
        SHA256_Update(&sha256, hardware_info.c_str(), hardware_info.length());
        SHA256_Final(hash, &sha256);

        std::stringstream ss;
        for (int i = 0; i < SHA256_DIGEST_LENGTH; i++) {
            ss << std::hex << std::setw(2) << std::setfill('0') << (int)hash[i];
        }

        return ss.str();
    }

    void sessionMonitoringLoop() {
        while (monitoring_active.load()) {
            std::this_thread::sleep_for(std::chrono::minutes(5));
            
            if (!monitoring_active.load()) break;
            
            try {
                AuthResponse verify_result = auth_client->verify(current_user_id);
                if (!verify_result.success) {
                    session_check_failures++;
                    std::cout << "⚠️ Session verification failed (" 
                             << session_check_failures << "/" << max_failures << ")" << std::endl;
                    
                    if (session_check_failures >= max_failures) {
                        forceLogout("Your session has expired. Please login again.");
                        break;
                    }
                } else {
                    session_check_failures = 0;
                    std::time_t now = std::time(nullptr);
                    std::cout << "✅ Session verified at " << std::ctime(&now);
                }
            } catch (const std::exception& e) {
                std::cout << "❌ Session verification error: " << e.what() << std::endl;
            }
        }
    }

    void heartbeatLoop() {
        while (monitoring_active.load()) {
            std::this_thread::sleep_for(std::chrono::seconds(30));
            
            if (!monitoring_active.load()) break;
            
            try {
                if (!current_session_token.empty()) {
                    SessionResponse heartbeat_result = auth_client->sendHeartbeat(current_session_token);
                    if (!heartbeat_result.success) {
                        std::cout << "💔 Heartbeat failed: " << heartbeat_result.message << std::endl;
                    }
                }
            } catch (const std::exception& e) {
                std::cout << "❌ Heartbeat error: " << e.what() << std::endl;
            }
        }
    }

    void forceLogout(const std::string& reason) {
        // End session on server
        if (!current_session_token.empty()) {
            try {
                auth_client->endSession(current_session_token);
                std::cout << "📡 Session ended on server" << std::endl;
            } catch (const std::exception& e) {
                std::cout << "❌ Failed to end session: " << e.what() << std::endl;
            }
        }
        
        // Stop monitoring
        stopSessionMonitoring();
        
        // Show logout message
        std::cout << "🚪 " << reason << std::endl;
        
        // Return to login prompt
        showLoginPrompt();
    }

    void stopSessionMonitoring() {
        monitoring_active.store(false);
        
        if (session_thread.joinable()) {
            session_thread.join();
        }
        
        if (heartbeat_thread.joinable()) {
            heartbeat_thread.join();
        }
        
        std::cout << "🛑 Session monitoring stopped" << std::endl;
    }

    void startSessionMonitoring(int user_id) {
        current_user_id = user_id;
        session_check_failures = 0;
        current_session_token = generateSessionToken();
        monitoring_active.store(true);
        
        // Start session on server
        try {
            SessionResponse session_result = auth_client->startSession(user_id, current_session_token);
            if (session_result.success) {
                std::cout << "📡 Session started: " << current_session_token.substr(0, 8) << "..." << std::endl;
            }
        } catch (const std::exception& e) {
            std::cout << "❌ Failed to start session: " << e.what() << std::endl;
        }
        
        // Start monitoring threads
        session_thread = std::thread(&AuthApp::sessionMonitoringLoop, this);
        heartbeat_thread = std::thread(&AuthApp::heartbeatLoop, this);
        
        std::cout << "🔄 Session monitoring started successfully" << std::endl;
    }

    void showMainApplication(const UserInfo& user_info) {
        std::cout << "\\n" << std::string(50, '=') << std::endl;
        std::cout << "🎉 WELCOME TO THE APPLICATION! 🎉" << std::endl;
        std::cout << std::string(50, '=') << std::endl;
        std::cout << "👤 User ID: " << user_info.user_id << std::endl;
        std::cout << "📝 Username: " << user_info.username << std::endl;
        std::cout << "📧 Email: " << (user_info.email.empty() ? "Not provided" : user_info.email) << std::endl;
        std::cout << "⏰ Login Time: " << std::ctime(&user_info.login_time);
        std::cout << "📅 Expires At: " << (user_info.expires_at.empty() ? "Never" : user_info.expires_at) << std::endl;
        std::cout << "\\n🔄 Session monitoring is active." << std::endl;
        std::cout << "📡 The application will automatically verify your session every 5 minutes." << std::endl;
        std::cout << "💓 Heartbeat is sent every 30 seconds." << std::endl;
        std::cout << "\\nType 'logout' to manually logout or 'quit' to exit." << std::endl;
        std::cout << std::string(50, '=') << std::endl;
        
        // Start command line interface
        startCLI();
    }

    void startCLI() {
        std::string input;
        std::cout << "> ";
        
        while (std::getline(std::cin, input)) {
            if (input == "logout") {
                forceLogout("You have been logged out.");
                break;
            } else if (input == "quit" || input == "exit") {
                stopSessionMonitoring();
                std::cout << "\\n👋 Goodbye!" << std::endl;
                break;
            } else if (input == "status") {
                std::cout << "📊 Status: Active | User ID: " << current_user_id 
                         << " | Failures: " << session_check_failures << std::endl;
            } else if (input == "help") {
                std::cout << "Available commands: logout, status, help, quit" << std::endl;
            } else if (!input.empty()) {
                std::cout << "Unknown command. Type 'help' for available commands." << std::endl;
            }
            
            std::cout << "> ";
        }
    }

    void showLoginPrompt() {
        std::cout << "\\n" << std::string(50, '=') << std::endl;
        std::cout << "🔐 APPLICATION LOGIN" << std::endl;
        std::cout << std::string(50, '=') << std::endl;
        
        std::string username, password;
        
        std::cout << "👤 Username: ";
        std::getline(std::cin, username);
        
        std::cout << "🔒 Password: ";
        std::getline(std::cin, password);
        
        login(username, password);
    }

public:
    AuthApp() : auth_client(std::make_unique<AuthApiClient>("${C}")), 
                current_user_id(0), session_check_failures(0), max_failures(3),
                monitoring_active(false) {}

    ~AuthApp() {
        stopSessionMonitoring();
    }

    void login(const std::string& username, const std::string& password) {
        try {
            std::cout << "Authenticating..." << std::endl;
            
            if (username.empty() || password.empty()) {
                std::cout << "❌ Please provide both username and password" << std::endl;
                showLoginPrompt();
                return;
            }

            // Get hardware ID
            std::string hwid = getHardwareId();
            
            // Attempt login
            AuthResponse login_result = auth_client->login(username, password, "${(y==null?void 0:y.version)||"1.0.0"}", hwid);
            
            if (login_result.success) {
                std::cout << "✅ " << login_result.message << std::endl;
                
                // Verify session
                AuthResponse verify_result = auth_client->verify(login_result.user_id);
                if (verify_result.success) {
                    std::cout << "✅ User session verified successfully!" << std::endl;
                    
                    // Create user info
                    UserInfo user_info(login_result.user_id, login_result.username, 
                                     login_result.email, login_result.expires_at);
                    
                    // Start session monitoring
                    startSessionMonitoring(login_result.user_id);
                    
                    // Show main application
                    showMainApplication(user_info);
                } else {
                    std::cout << "⚠️ Session verification failed. Please try logging in again." << std::endl;
                    showLoginPrompt();
                }
            } else {
                std::cout << "❌ " << login_result.message << std::endl;
                showLoginPrompt();
            }
        } catch (const std::exception& e) {
            std::cout << "❌ Connection error: " << e.what() << std::endl;
            showLoginPrompt();
        }
    }

    void start() {
        std::cout << "🚀 Starting Application..." << std::endl;
        showLoginPrompt();
    }
};

// Main function
int main() {
    // Initialize CURL
    curl_global_init(CURL_GLOBAL_DEFAULT);
    
    try {
        AuthApp app;
        app.start();
    } catch (const std::exception& e) {
        std::cout << "Fatal error: " << e.what() << std::endl;
        return 1;
    }
    
    // Cleanup CURL
    curl_global_cleanup();
    
    return 0;
}

/*
SETUP INSTRUCTIONS:

1. Install required libraries:
   
   Ubuntu/Debian:
   sudo apt-get install libcurl4-openssl-dev libjsoncpp-dev libssl-dev

   CentOS/RHEL:
   sudo yum install libcurl-devel jsoncpp-devel openssl-devel

   macOS (with Homebrew):
   brew install curl jsoncpp openssl

   Windows (with vcpkg):
   vcpkg install curl jsoncpp openssl

2. Compile the program:
   g++ -std=c++11 auth_client.cpp -lcurl -ljsoncpp -lssl -lcrypto -pthread -o auth_client

3. Replace YOUR_API_KEY with your actual API key: ${C}
4. Replace YOUR_BASE_URL with: ${N}
5. Run the program: ./auth_client

FEATURES INCLUDED:
- Login with HWID verification
- Session verification every 5 minutes
- Heartbeat every 30 seconds
- Automatic logout on session expiry
- Complete error handling for all scenarios
- Session tracking on server
- Cross-platform HWID generation (Windows, Linux, macOS)
- Command line interface
- Multi-threaded session monitoring

REQUIREMENTS:
- C++11 or later
- libcurl
- jsoncpp
- OpenSSL
- pthread support
*/`;return r.jsxs("div",{className:"flex flex-col min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx(Xs,{}),r.jsx("main",{className:"relative z-10 flex-1 container py-8",children:r.jsxs("div",{className:"max-w-6xl mx-auto",children:[r.jsxs("div",{className:"mb-8",children:[r.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Integration Examples"}),r.jsx("p",{className:"text-muted-foreground",children:"Complete code examples for integrating with your authentication API."})]}),r.jsx("div",{className:"grid gap-6 mb-8",children:r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsx(G,{children:"Configuration"}),r.jsx(me,{children:"Select your application to get customized integration code"})]}),r.jsxs(Y,{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx(U,{htmlFor:"app-select",children:"Select Application"}),r.jsxs(Qr,{value:n,onValueChange:s,children:[r.jsx(or,{children:r.jsx(Jr,{placeholder:"Choose an application"})}),r.jsx(ar,{children:h.map(F=>r.jsx(Jt,{value:F.id.toString(),children:F.name},F.id))})]})]}),y&&r.jsxs("div",{className:"grid grid-cols-2 gap-4 p-4 border rounded-lg bg-muted/50",children:[r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"API Key"}),r.jsx("p",{className:"text-sm font-mono text-muted-foreground break-all",children:y.apiKey})]}),r.jsxs("div",{children:[r.jsx(U,{className:"text-sm font-medium",children:"Base URL"}),r.jsx("p",{className:"text-sm font-mono text-muted-foreground",children:N})]})]})]})]})}),r.jsxs(Dr,{value:i,onValueChange:o,className:"w-full",children:[r.jsxs(Ys,{className:"grid w-full grid-cols-4",children:[r.jsx(Ae,{value:"csharp",children:"C# WinForms"}),r.jsx(Ae,{value:"python",children:"Python"}),r.jsx(Ae,{value:"nodejs",children:"Node.js"}),r.jsx(Ae,{value:"cpp",children:"C++"})]}),r.jsx(Ie,{value:"csharp",className:"space-y-4",children:r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center gap-2",children:[r.jsx(Qt,{className:"h-5 w-5"}),"C# WinForms Login Implementation"]}),r.jsx(me,{children:"Complete C# WinForms application with enhanced session monitoring and all authentication features."})]}),r.jsx(Y,{children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(ie,{variant:"secondary",children:"Fixed Nullable Error"}),r.jsx(ie,{variant:"secondary",children:"Session Monitoring"}),r.jsx(ie,{variant:"secondary",children:"HWID Support"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[g&&r.jsx(r.Fragment,{children:c&&f==="csharp"?r.jsxs(r.Fragment,{children:[r.jsxs(O,{variant:"outline",size:"sm",onClick:j,children:[r.jsx($o,{className:"h-4 w-4 mr-2"}),"Save"]}),r.jsxs(O,{variant:"outline",size:"sm",onClick:S,children:[r.jsx(yi,{className:"h-4 w-4 mr-2"}),"Cancel"]})]}):r.jsxs(O,{variant:"outline",size:"sm",onClick:()=>w("csharp",v.csharp||I),children:[r.jsx(Il,{className:"h-4 w-4 mr-2"}),"Edit Code"]})}),r.jsxs(O,{variant:"outline",size:"sm",onClick:()=>m(c&&f==="csharp"?a:v.csharp||I),children:[r.jsx(We,{className:"h-4 w-4 mr-2"}),"Copy Code"]})]})]}),r.jsx("div",{className:"relative",children:r.jsx(In,{value:c&&f==="csharp"?a:v.csharp||I,readOnly:!c||f!=="csharp",onChange:F=>l(F.target.value),className:"min-h-[400px] font-mono text-sm"})})]})})]})}),r.jsx(Ie,{value:"python",className:"space-y-4",children:r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center gap-2",children:[r.jsx(Qt,{className:"h-5 w-5"}),"Python Tkinter Login Implementation"]}),r.jsx(me,{children:"Complete Python GUI application with enhanced session monitoring and all authentication features."})]}),r.jsx(Y,{children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(ie,{variant:"secondary",children:"GUI Application"}),r.jsx(ie,{variant:"secondary",children:"Session Monitoring"}),r.jsx(ie,{variant:"secondary",children:"Cross-Platform"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[g&&r.jsx(r.Fragment,{children:c&&f==="python"?r.jsxs(r.Fragment,{children:[r.jsxs(O,{variant:"outline",size:"sm",onClick:j,children:[r.jsx($o,{className:"h-4 w-4 mr-2"}),"Save"]}),r.jsxs(O,{variant:"outline",size:"sm",onClick:S,children:[r.jsx(yi,{className:"h-4 w-4 mr-2"}),"Cancel"]})]}):r.jsxs(O,{variant:"outline",size:"sm",onClick:()=>w("python",v.python||R),children:[r.jsx(Il,{className:"h-4 w-4 mr-2"}),"Edit Code"]})}),r.jsxs(O,{variant:"outline",size:"sm",onClick:()=>m(c&&f==="python"?a:v.python||R),children:[r.jsx(We,{className:"h-4 w-4 mr-2"}),"Copy Code"]})]})]}),r.jsx("div",{className:"relative",children:r.jsx(In,{value:c&&f==="python"?a:v.python||R,readOnly:!c||f!=="python",onChange:F=>l(F.target.value),className:"min-h-[400px] font-mono text-sm"})})]})})]})}),r.jsx(Ie,{value:"nodejs",className:"space-y-4",children:r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center gap-2",children:[r.jsx(Qt,{className:"h-5 w-5"}),"Node.js Console Login Implementation"]}),r.jsx(me,{children:"Complete Node.js application with enhanced session monitoring and all authentication features."})]}),r.jsx(Y,{children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(ie,{variant:"secondary",children:"Console Application"}),r.jsx(ie,{variant:"secondary",children:"Session Monitoring"}),r.jsx(ie,{variant:"secondary",children:"ES6 Support"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[g&&r.jsx(r.Fragment,{children:c&&f==="nodejs"?r.jsxs(r.Fragment,{children:[r.jsxs(O,{variant:"outline",size:"sm",onClick:j,children:[r.jsx($o,{className:"h-4 w-4 mr-2"}),"Save"]}),r.jsxs(O,{variant:"outline",size:"sm",onClick:S,children:[r.jsx(yi,{className:"h-4 w-4 mr-2"}),"Cancel"]})]}):r.jsxs(O,{variant:"outline",size:"sm",onClick:()=>w("nodejs",v.nodejs||M),children:[r.jsx(Il,{className:"h-4 w-4 mr-2"}),"Edit Code"]})}),r.jsxs(O,{variant:"outline",size:"sm",onClick:()=>m(c&&f==="nodejs"?a:v.nodejs||M),children:[r.jsx(We,{className:"h-4 w-4 mr-2"}),"Copy Code"]})]})]}),r.jsx("div",{className:"relative",children:r.jsx(In,{value:c&&f==="nodejs"?a:v.nodejs||M,readOnly:!c||f!=="nodejs",onChange:F=>l(F.target.value),className:"min-h-[400px] font-mono text-sm"})})]})})]})}),r.jsx(Ie,{value:"cpp",className:"space-y-4",children:r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center gap-2",children:[r.jsx(Qt,{className:"h-5 w-5"}),"C++ Console Login Implementation"]}),r.jsx(me,{children:"Complete C++ application with enhanced session monitoring and all authentication features."})]}),r.jsx(Y,{children:r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(ie,{variant:"secondary",children:"Native Application"}),r.jsx(ie,{variant:"secondary",children:"Multi-threaded"}),r.jsx(ie,{variant:"secondary",children:"Cross-Platform"})]}),r.jsxs("div",{className:"flex items-center gap-2",children:[g&&r.jsx(r.Fragment,{children:c&&f==="cpp"?r.jsxs(r.Fragment,{children:[r.jsxs(O,{variant:"outline",size:"sm",onClick:j,children:[r.jsx($o,{className:"h-4 w-4 mr-2"}),"Save"]}),r.jsxs(O,{variant:"outline",size:"sm",onClick:S,children:[r.jsx(yi,{className:"h-4 w-4 mr-2"}),"Cancel"]})]}):r.jsxs(O,{variant:"outline",size:"sm",onClick:()=>w("cpp",v.cpp||k),children:[r.jsx(Il,{className:"h-4 w-4 mr-2"}),"Edit Code"]})}),r.jsxs(O,{variant:"outline",size:"sm",onClick:()=>m(c&&f==="cpp"?a:v.cpp||k),children:[r.jsx(We,{className:"h-4 w-4 mr-2"}),"Copy Code"]})]})]}),r.jsx("div",{className:"relative",children:r.jsx(In,{value:c&&f==="cpp"?a:v.cpp||k,readOnly:!c||f!=="cpp",onChange:F=>l(F.target.value),className:"min-h-[400px] font-mono text-sm"})})]})})]})})]})]})})]})}function cL(){var x,y,g,m,w,j,S,N,C,I;const{user:e,isLoading:t}=ei(),{toast:n}=vn(),[s,i]=d.useState([]),[o,a]=d.useState(null),[l,c]=d.useState(""),[u,f]=d.useState(!1),p=((x=e==null?void 0:e.userPermissions)==null?void 0:x.role)==="owner",h=((g=(y=e==null?void 0:e.userPermissions)==null?void 0:y.permissions)==null?void 0:g.includes("edit_code"))||p;d.useEffect(()=>{i([{id:"1",name:"authentication.ts",content:`// Authentication Service
export class AuthService {
  private apiKey: string;
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  
  async login(username: string, password: string) {
    // Login implementation
    return { success: true };
  }
}`,language:"typescript",lastModified:new Date,canEdit:h},{id:"2",name:"permissions.ts",content:`// Permission System
export const PERMISSIONS = {
  EDIT_CODE: 'edit_code',
  MANAGE_USERS: 'manage_users',
  MANAGE_APPLICATIONS: 'manage_applications'
};

export function hasPermission(user: User, permission: string): boolean {
  if (user.role === 'owner') return true;
  return user.permissions.includes(permission);
}`,language:"typescript",lastModified:new Date,canEdit:h},{id:"3",name:"api-routes.ts",content:`// API Routes Configuration
import { Router } from 'express';

const router = Router();

router.post('/login', async (req, res) => {
  // Login endpoint
  res.json({ success: true });
});

router.get('/users', requirePermission('manage_users'), async (req, res) => {
  // Get users with permission check
  res.json({ users: [] });
});

export default router;`,language:"typescript",lastModified:new Date,canEdit:h}])},[h]);const v=R=>{a(R),c(R.content)},b=async()=>{if(!(!o||!h)){f(!0);try{await new Promise(R=>setTimeout(R,1e3)),i(R=>R.map(M=>M.id===o.id?{...M,content:l,lastModified:new Date}:M)),n({title:"File Saved",description:`${o.name} has been updated successfully.`})}catch{n({title:"Save Failed",description:"There was an error saving the file.",variant:"destructive"})}finally{f(!1)}}};return t?r.jsx("div",{className:"flex items-center justify-center h-64",children:r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary"})}):h?r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx("div",{className:"relative z-10",children:r.jsxs("div",{className:"container mx-auto px-4 py-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-3xl font-bold",children:"Code Editor"}),r.jsx("p",{className:"text-muted-foreground mt-2",children:"Edit system files and manage code configuration"})]}),p&&r.jsxs(ie,{variant:"secondary",className:"flex items-center gap-2",children:[r.jsx(Zo,{className:"h-4 w-4"}),"Site Owner"]})]}),r.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center gap-2",children:[r.jsx(Qt,{className:"h-5 w-5"}),"System Files"]}),r.jsx(me,{children:"Select a file to edit"})]}),r.jsx(Y,{children:r.jsx("div",{className:"space-y-2",children:s.map(R=>r.jsx("div",{className:`p-3 rounded-lg border cursor-pointer transition-colors ${(o==null?void 0:o.id)===R.id?"bg-primary/10 border-primary":"hover:bg-muted/50"}`,onClick:()=>v(R),children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"font-medium",children:R.name}),r.jsx("p",{className:"text-xs text-muted-foreground",children:R.language})]}),R.canEdit?r.jsx(Se,{className:"h-4 w-4 text-green-500"}):r.jsx(Rr,{className:"h-4 w-4 text-muted-foreground"})]})},R.id))})})]}),r.jsx("div",{className:"lg:col-span-2",children:r.jsxs(H,{children:[r.jsx(K,{children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsxs(G,{className:"flex items-center gap-2",children:[r.jsx(Ep,{className:"h-5 w-5"}),o?o.name:"Select a file"]}),o&&r.jsxs(me,{children:["Last modified: ",o.lastModified.toLocaleString()]})]}),o&&r.jsxs(O,{onClick:b,disabled:u||!h,className:"flex items-center gap-2",children:[r.jsx($o,{className:"h-4 w-4"}),u?"Saving...":"Save"]})]})}),r.jsx(Y,{children:o?r.jsxs("div",{className:"space-y-4",children:[r.jsx(U,{htmlFor:"code-content",children:"File Content"}),r.jsx(In,{id:"code-content",value:l,onChange:R=>c(R.target.value),className:"min-h-[400px] font-mono text-sm",placeholder:"No file selected",disabled:!h}),!h&&r.jsxs(Ta,{children:[r.jsx(Rr,{className:"h-4 w-4"}),r.jsx(Aa,{children:"Read-only mode. You need code editing permissions to modify this file."})]})]}):r.jsx("div",{className:"flex items-center justify-center h-64 text-muted-foreground",children:r.jsxs("div",{className:"text-center",children:[r.jsx(Qt,{className:"h-12 w-12 mx-auto mb-4 opacity-50"}),r.jsx("p",{children:"Select a file from the left panel to start editing"})]})})})]})})]}),r.jsxs(H,{className:"mt-6",children:[r.jsx(K,{children:r.jsxs(G,{className:"flex items-center gap-2",children:[r.jsx(Se,{className:"h-5 w-5"}),"Your Permissions"]})}),r.jsxs(Y,{children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[r.jsx("div",{className:"flex items-center gap-2",children:r.jsxs(ie,{variant:((m=e==null?void 0:e.userPermissions)==null?void 0:m.role)==="owner"?"default":"secondary",children:["Role: ",((w=e==null?void 0:e.userPermissions)==null?void 0:w.role)||"user"]})}),r.jsx("div",{className:"flex items-center gap-2",children:r.jsxs(ie,{variant:h?"default":"secondary",children:["Code Editing: ",h?"Enabled":"Disabled"]})}),r.jsx("div",{className:"flex items-center gap-2",children:r.jsxs(ie,{variant:(S=(j=e==null?void 0:e.userPermissions)==null?void 0:j.permissions)!=null&&S.includes("manage_users")?"default":"secondary",children:["User Management: ",(C=(N=e==null?void 0:e.userPermissions)==null?void 0:N.permissions)!=null&&C.includes("manage_users")?"Enabled":"Disabled"]})})]}),((I=e==null?void 0:e.userPermissions)==null?void 0:I.permissions)&&e.userPermissions.permissions.length>0&&r.jsxs("div",{className:"mt-4",children:[r.jsx(U,{className:"text-sm font-medium",children:"All Permissions:"}),r.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:e.userPermissions.permissions.map(R=>r.jsx(ie,{variant:"outline",children:R.replace("_"," ")},R))})]})]})]})]})})]}):r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx("div",{className:"relative z-10",children:r.jsx("div",{className:"container mx-auto px-4 py-8",children:r.jsxs(Ta,{children:[r.jsx(Rr,{className:"h-4 w-4"}),r.jsx(Aa,{children:"You don't have permission to access the code editor. This feature is restricted to users with code editing privileges."})]})})})]})}var Pm="Checkbox",[uL,OL]=Wt(Pm),[dL,hL]=uL(Pm),y_=d.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:s,checked:i,defaultChecked:o,required:a,disabled:l,value:c="on",onCheckedChange:u,form:f,...p}=e,[h,v]=d.useState(null),b=pe(t,j=>v(j)),x=d.useRef(!1),y=h?f||!!h.closest("form"):!0,[g=!1,m]=ss({prop:i,defaultProp:o,onChange:u}),w=d.useRef(g);return d.useEffect(()=>{const j=h==null?void 0:h.form;if(j){const S=()=>m(w.current);return j.addEventListener("reset",S),()=>j.removeEventListener("reset",S)}},[h,m]),r.jsxs(dL,{scope:n,state:g,disabled:l,children:[r.jsx(oe.button,{type:"button",role:"checkbox","aria-checked":Zs(g)?"mixed":g,"aria-required":a,"data-state":j_(g),"data-disabled":l?"":void 0,disabled:l,value:c,...p,ref:b,onKeyDown:z(e.onKeyDown,j=>{j.key==="Enter"&&j.preventDefault()}),onClick:z(e.onClick,j=>{m(S=>Zs(S)?!0:!S),y&&(x.current=j.isPropagationStopped(),x.current||j.stopPropagation())})}),y&&r.jsx(fL,{control:h,bubbles:!x.current,name:s,value:c,checked:g,required:a,disabled:l,form:f,style:{transform:"translateX(-100%)"},defaultChecked:Zs(o)?!1:o})]})});y_.displayName=Pm;var w_="CheckboxIndicator",b_=d.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:s,...i}=e,o=hL(w_,n);return r.jsx(tn,{present:s||Zs(o.state)||o.state===!0,children:r.jsx(oe.span,{"data-state":j_(o.state),"data-disabled":o.disabled?"":void 0,...i,ref:t,style:{pointerEvents:"none",...e.style}})})});b_.displayName=w_;var fL=e=>{const{control:t,checked:n,bubbles:s=!0,defaultChecked:i,...o}=e,a=d.useRef(null),l=ym(n),c=Fp(t);d.useEffect(()=>{const f=a.current,p=window.HTMLInputElement.prototype,v=Object.getOwnPropertyDescriptor(p,"checked").set;if(l!==n&&v){const b=new Event("click",{bubbles:s});f.indeterminate=Zs(n),v.call(f,Zs(n)?!1:n),f.dispatchEvent(b)}},[l,n,s]);const u=d.useRef(Zs(n)?!1:n);return r.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:i??u.current,...o,tabIndex:-1,ref:a,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function Zs(e){return e==="indeterminate"}function j_(e){return Zs(e)?"indeterminate":e?"checked":"unchecked"}var S_=y_,pL=b_;const wf=d.forwardRef(({className:e,...t},n)=>r.jsx(S_,{ref:n,className:Q("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:r.jsx(pL,{className:Q("flex items-center justify-center text-current"),children:r.jsx(Cp,{className:"h-4 w-4"})})}));wf.displayName=S_.displayName;const mL=[{id:"edit_code",label:"Edit Code",description:"Access to code editor and system files"},{id:"manage_users",label:"Manage Users",description:"Create, edit, and manage user accounts"},{id:"manage_applications",label:"Manage Applications",description:"Create and configure applications"},{id:"view_all_data",label:"View All Data",description:"Access to all system data and analytics"},{id:"delete_applications",label:"Delete Applications",description:"Permission to delete applications"},{id:"manage_permissions",label:"Manage Permissions",description:"Modify user roles and permissions"},{id:"access_admin_panel",label:"Access Admin Panel",description:"Access to administrative interface"}],gL=[{value:"owner",label:"Owner",description:"Full system access and control"},{value:"admin",label:"Admin",description:"Administrative privileges"},{value:"moderator",label:"Moderator",description:"Limited administrative access"},{value:"user",label:"User",description:"Standard user access"}];function hv(){var M;const{user:e,isLoading:t}=ei(),{toast:n}=vn(),s=hs(),[i,o]=d.useState(""),[a,l]=d.useState(null),[c,u]=d.useState({role:"user",permissions:[],isActive:!0}),[f,p]=d.useState(!1),h=!0,{data:v,isLoading:b,error:x,refetch:y}=Je({queryKey:["/api/admin/users"],enabled:!0,staleTime:3e4,refetchOnWindowFocus:!1}),g=Array.isArray(v)?v:[];console.log("User Management Debug:",{authLoading:t,user:e?"Present":"Null",canManageUsers:h,usersData:v,users:g.length,isLoading:b,error:x});const m=_e({mutationFn:async({userId:k,updates:F})=>await Ne(`/api/admin/users/${k}`,{method:"PATCH",body:F}),onSuccess:()=>{s.invalidateQueries({queryKey:["/api/admin/users"]}),p(!1),l(null),n({title:"User Updated",description:"User permissions and role have been updated successfully."})},onError:k=>{n({title:"Update Failed",description:k.message||"Failed to update user permissions.",variant:"destructive"})}}),w=_e({mutationFn:async k=>await Ne(`/api/admin/users/${k}`,{method:"DELETE"}),onSuccess:()=>{s.invalidateQueries({queryKey:["/api/admin/users"]}),n({title:"User Deleted",description:"User has been removed from the system."})},onError:k=>{n({title:"Delete Failed",description:k.message||"Failed to delete user.",variant:"destructive"})}}),j=g.filter(k=>k.email.toLowerCase().includes(i.toLowerCase())||k.firstName&&k.firstName.toLowerCase().includes(i.toLowerCase())||k.lastName&&k.lastName.toLowerCase().includes(i.toLowerCase())),S=k=>{console.log("Editing user:",{email:k.email,role:k.role,permissions:k.permissions,isActive:k.isActive}),l(k),u({role:k.role,permissions:k.permissions||[],isActive:k.isActive}),p(!0)},N=()=>{a&&m.mutate({userId:a.id,updates:c})},C=k=>{if(k===(e==null?void 0:e.id)){n({title:"Cannot Delete",description:"You cannot delete your own account.",variant:"destructive"});return}w.mutate(k)},I=k=>{u(F=>({...F,permissions:F.permissions.includes(k)?F.permissions.filter(A=>A!==k):[...F.permissions,k]}))},R=k=>new Date(k).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"});return t?r.jsxs("div",{className:"min-h-screen bg-background relative flex items-center justify-center",children:[r.jsx(vt,{}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading authentication..."})]})]}):r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsxs("div",{className:"container mx-auto px-4 py-8 relative z-10",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{children:[r.jsx("h1",{className:"text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent",children:"User Management"}),r.jsx("p",{className:"text-muted-foreground mt-2 text-lg",children:"Manage user roles, permissions, and access control for your platform"})]}),((M=e==null?void 0:e.userPermissions)==null?void 0:M.role)==="owner"&&r.jsxs(ie,{variant:"secondary",className:"flex items-center gap-2 px-4 py-2",children:[r.jsx(Zo,{className:"h-4 w-4"}),"Site Owner"]})]}),r.jsxs("div",{className:"grid md:grid-cols-4 gap-6 mb-8",children:[r.jsx(H,{className:"bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800",children:r.jsx(Y,{className:"p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-blue-600 dark:text-blue-400 text-sm font-medium",children:"Total Users"}),r.jsx("p",{className:"text-3xl font-bold text-blue-900 dark:text-blue-100",children:g.length})]}),r.jsx(xt,{className:"h-8 w-8 text-blue-500"})]})})}),r.jsx(H,{className:"bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800",children:r.jsx(Y,{className:"p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-green-600 dark:text-green-400 text-sm font-medium",children:"Active Users"}),r.jsx("p",{className:"text-3xl font-bold text-green-900 dark:text-green-100",children:g.filter(k=>k.isActive).length})]}),r.jsx(Se,{className:"h-8 w-8 text-green-500"})]})})}),r.jsx(H,{className:"bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800",children:r.jsx(Y,{className:"p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-purple-600 dark:text-purple-400 text-sm font-medium",children:"Admins"}),r.jsx("p",{className:"text-3xl font-bold text-purple-900 dark:text-purple-100",children:g.filter(k=>["admin","owner"].includes(k.role)).length})]}),r.jsx(Zo,{className:"h-8 w-8 text-purple-500"})]})})}),r.jsx(H,{className:"bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800",children:r.jsx(Y,{className:"p-6",children:r.jsxs("div",{className:"flex items-center justify-between",children:[r.jsxs("div",{children:[r.jsx("p",{className:"text-orange-600 dark:text-orange-400 text-sm font-medium",children:"New Today"}),r.jsx("p",{className:"text-3xl font-bold text-orange-900 dark:text-orange-100",children:g.filter(k=>{const F=new Date;return new Date(k.createdAt).toDateString()===F.toDateString()}).length})]}),r.jsx(B0,{className:"h-8 w-8 text-orange-500"})]})})})]}),r.jsx(H,{className:"mb-6",children:r.jsx(Y,{className:"pt-6",children:r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx(U,{htmlFor:"search",children:"Search Users"}),r.jsxs("div",{className:"relative mt-2",children:[r.jsx(z0,{className:"absolute left-3 top-3 h-4 w-4 text-muted-foreground"}),r.jsx(ne,{id:"search",placeholder:"Search by email, name...",value:i,onChange:k=>o(k.target.value),className:"pl-10"})]})]}),r.jsx("div",{className:"flex gap-2",children:r.jsx(O,{variant:"outline",onClick:()=>y(),disabled:b,children:b?"Loading...":"Refresh"})})]})})}),r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsxs(G,{className:"flex items-center gap-2",children:[r.jsx(xt,{className:"h-5 w-5"}),"All Users (",j.length,")"]}),r.jsx(me,{children:"Manage user accounts, roles, and permissions"})]}),r.jsx(Y,{children:b?r.jsxs("div",{className:"text-center py-12",children:[r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading users..."})]}):x?r.jsx(Ta,{className:"my-4",children:r.jsxs(Aa,{children:["Failed to load users: ",(x==null?void 0:x.message)||"Unknown error"]})}):j.length===0?r.jsxs("div",{className:"text-center py-12",children:[r.jsx(xt,{className:"h-12 w-12 mx-auto mb-4 opacity-50"}),r.jsx("p",{className:"text-muted-foreground text-lg mb-2",children:"No users found"}),r.jsx("p",{className:"text-sm text-muted-foreground",children:i?"Try adjusting your search criteria.":"No users are registered yet."})]}):r.jsx("div",{className:"overflow-x-auto",children:r.jsxs(ls,{children:[r.jsx(cs,{children:r.jsxs(Ze,{children:[r.jsx(se,{children:"User"}),r.jsx(se,{children:"Role"}),r.jsx(se,{children:"Status"}),r.jsx(se,{children:"Permissions"}),r.jsx(se,{children:"Joined"}),r.jsx(se,{children:"Last Login"}),r.jsx(se,{className:"text-right",children:"Actions"})]})}),r.jsx(us,{children:j.map(k=>{var F;return r.jsxs(Ze,{children:[r.jsx(re,{children:r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("div",{className:"w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center",children:r.jsx("span",{className:"text-primary font-medium text-sm",children:k.firstName&&k.lastName?`${k.firstName[0]}${k.lastName[0]}`:k.email[0].toUpperCase()})}),r.jsxs("div",{children:[r.jsxs("div",{className:"font-medium flex items-center gap-2",children:[k.firstName&&k.lastName?`${k.firstName} ${k.lastName}`:k.email,k.id===(e==null?void 0:e.id)&&r.jsx(ie,{variant:"outline",className:"text-xs",children:"You"}),k.role==="owner"&&r.jsx(Zo,{className:"h-4 w-4 text-yellow-500"})]}),r.jsx("div",{className:"text-sm text-muted-foreground",children:k.email})]})]})}),r.jsx(re,{children:r.jsx(ie,{variant:k.role==="owner"?"default":"secondary",children:k.role})}),r.jsx(re,{children:r.jsx(ie,{variant:k.isActive?"default":"destructive",children:k.isActive?"Active":"Inactive"})}),r.jsx(re,{children:r.jsxs("div",{className:"flex flex-wrap gap-1 max-w-xs",children:[k.permissions&&k.permissions.length>0?k.permissions.slice(0,3).map(A=>r.jsx(ie,{variant:"outline",className:"text-xs",children:A.replace("_"," ")},A)):r.jsx("span",{className:"text-xs text-muted-foreground",children:"No permissions"}),k.permissions&&k.permissions.length>3&&r.jsxs(ie,{variant:"secondary",className:"text-xs",children:["+",k.permissions.length-3," more"]})]})}),r.jsx(re,{children:r.jsx("span",{className:"text-sm text-muted-foreground",children:R(k.createdAt)})}),r.jsx(re,{children:r.jsx("span",{className:"text-sm text-muted-foreground",children:k.lastLogin?R(k.lastLogin):"Never"})}),r.jsx(re,{className:"text-right",children:r.jsxs("div",{className:"flex items-center justify-end gap-2",children:[r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>S(k),disabled:k.role==="owner"&&((F=e==null?void 0:e.userPermissions)==null?void 0:F.role)!=="owner",children:r.jsx(Rc,{className:"h-4 w-4"})}),k.id!==(e==null?void 0:e.id)&&k.role!=="owner"&&r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>C(k.id),disabled:w.isPending,className:"text-red-600 hover:text-red-700 hover:bg-red-50",children:r.jsx(Wr,{className:"h-4 w-4"})})]})})]},k.id)})})]})})})]}),r.jsx(Ft,{open:f,onOpenChange:p,children:r.jsxs(kt,{className:"max-w-md",children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Edit User Permissions"}),r.jsxs(At,{children:["Modify ",a==null?void 0:a.email,"'s role and permissions"]})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx(U,{children:"Role"}),r.jsxs(Qr,{value:c.role,onValueChange:k=>u(F=>({...F,role:k})),children:[r.jsx(or,{children:r.jsx(Jr,{})}),r.jsx(ar,{children:gL.map(k=>r.jsx(Jt,{value:k.value,children:k.label},k.value))})]})]}),r.jsxs("div",{children:[r.jsx(U,{children:"Status"}),r.jsxs("div",{className:"flex items-center space-x-2 mt-2",children:[r.jsx(wf,{id:"active",checked:c.isActive,onCheckedChange:k=>u(F=>({...F,isActive:!!k}))}),r.jsx(U,{htmlFor:"active",children:"Active User"})]})]}),r.jsxs("div",{children:[r.jsx(U,{children:"Permissions"}),r.jsx("div",{className:"space-y-2 mt-2 max-h-48 overflow-y-auto",children:mL.map(k=>r.jsxs("div",{className:"flex items-start space-x-2",children:[r.jsx(wf,{id:k.id,checked:c.permissions.includes(k.id),onCheckedChange:()=>I(k.id)}),r.jsxs("div",{className:"grid gap-1.5 leading-none",children:[r.jsx(U,{htmlFor:k.id,className:"text-sm font-medium",children:k.label}),r.jsx("p",{className:"text-xs text-muted-foreground",children:k.description})]})]},k.id))})]})]}),r.jsxs(wi,{children:[r.jsx(O,{variant:"outline",onClick:()=>p(!1),children:"Cancel"}),r.jsx(O,{onClick:N,disabled:m.isPending,children:m.isPending?"Saving...":"Save Changes"})]})]})})]})]})}function xL(){const{id:e}=Gw(),{toast:t}=vn(),n=hs(),[s,i]=d.useState(!1),[o,a]=d.useState(!1),[l,c]=d.useState({licenseKey:"",maxUsers:1,validityDays:30,description:""}),{data:u}=Je({queryKey:[`/api/applications/${e}`]}),{data:f=[],isLoading:p}=Je({queryKey:[`/api/applications/${e}/licenses`],enabled:!!e}),h=_e({mutationFn:async j=>Ne(`/api/applications/${e}/licenses`,{method:"POST",body:j}),onSuccess:()=>{n.invalidateQueries({queryKey:[`/api/applications/${e}/licenses`]}),c({licenseKey:"",maxUsers:1,validityDays:30,description:""}),i(!1),t({title:"Success",description:"License key created successfully"})},onError:j=>{t({title:"Error",description:j.message||"Failed to create license key",variant:"destructive"})}}),v=_e({mutationFn:async j=>Ne(`/api/applications/${e}/licenses/generate`,{method:"POST",body:j}),onSuccess:()=>{n.invalidateQueries({queryKey:[`/api/applications/${e}/licenses`]}),c({licenseKey:"",maxUsers:1,validityDays:30,description:""}),a(!1),t({title:"Success",description:"License key generated successfully"})},onError:j=>{t({title:"Error",description:j.message||"Failed to generate license key",variant:"destructive"})}}),b=_e({mutationFn:async j=>Ne(`/api/applications/${e}/licenses/${j}`,{method:"DELETE"}),onSuccess:()=>{n.invalidateQueries({queryKey:[`/api/applications/${e}/licenses`]}),t({title:"Success",description:"License key deleted successfully"})},onError:j=>{t({title:"Error",description:j.message||"Failed to delete license key",variant:"destructive"})}}),x=()=>{if(!l.licenseKey.trim()){t({title:"Error",description:"Please provide a license key",variant:"destructive"});return}h.mutate(l)},y=()=>{if(l.validityDays<1){t({title:"Error",description:"Validity days must be at least 1",variant:"destructive"});return}v.mutate({maxUsers:l.maxUsers,validityDays:l.validityDays,description:l.description})},g=j=>{navigator.clipboard.writeText(j),t({title:"Copied",description:"License key copied to clipboard"})},m=j=>new Date(j)<new Date,w=j=>{const S=new Date,C=new Date(j).getTime()-S.getTime();return Math.ceil(C/(1e3*60*60*24))};return r.jsxs("div",{className:"min-h-screen bg-background relative",children:[r.jsx(vt,{}),r.jsx(Xs,{}),r.jsxs("div",{className:"relative z-10 container mx-auto px-4 py-8",children:[r.jsxs("div",{className:"flex items-center justify-between mb-8",children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"text-3xl font-bold flex items-center gap-3",children:[r.jsx(qn,{className:"h-8 w-8"}),"License Keys - ",(u==null?void 0:u.name)||"Application"]}),r.jsx("p",{className:"text-muted-foreground",children:"Manage license keys for user registration"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs(Ft,{open:o,onOpenChange:a,children:[r.jsx(ir,{asChild:!0,children:r.jsxs(O,{variant:"outline",children:[r.jsx(vu,{className:"mr-2 h-4 w-4"}),"Generate Key"]})}),r.jsxs(kt,{children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Generate New License Key"}),r.jsx(At,{children:"Automatically generate a secure license key with your specifications"})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx(U,{htmlFor:"gen-max-users",children:"Maximum Users"}),r.jsx(ne,{id:"gen-max-users",type:"number",min:"1",value:l.maxUsers,onChange:j=>c(S=>({...S,maxUsers:parseInt(j.target.value)||1}))})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"gen-validity",children:"Validity Days"}),r.jsx(ne,{id:"gen-validity",type:"number",min:"1",value:l.validityDays,onChange:j=>c(S=>({...S,validityDays:parseInt(j.target.value)||1}))})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"gen-description",children:"Description (Optional)"}),r.jsx(ne,{id:"gen-description",placeholder:"License description...",value:l.description,onChange:j=>c(S=>({...S,description:j.target.value}))})]})]}),r.jsxs("div",{className:"flex justify-end gap-2",children:[r.jsx(O,{variant:"outline",onClick:()=>a(!1),children:"Cancel"}),r.jsx(O,{onClick:y,disabled:v.isPending,children:v.isPending?"Generating...":"Generate"})]})]})]}),r.jsxs(Ft,{open:s,onOpenChange:i,children:[r.jsx(ir,{asChild:!0,children:r.jsxs(O,{children:[r.jsx(An,{className:"mr-2 h-4 w-4"}),"Create Custom Key"]})}),r.jsxs(kt,{children:[r.jsxs(Et,{children:[r.jsx(Tt,{children:"Create Custom License Key"}),r.jsx(At,{children:"Create a license key with your own custom key string"})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{children:[r.jsx(U,{htmlFor:"license-key",children:"License Key"}),r.jsx(ne,{id:"license-key",placeholder:"YOUR-CUSTOM-LICENSE-KEY",value:l.licenseKey,onChange:j=>c(S=>({...S,licenseKey:j.target.value}))})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"max-users",children:"Maximum Users"}),r.jsx(ne,{id:"max-users",type:"number",min:"1",value:l.maxUsers,onChange:j=>c(S=>({...S,maxUsers:parseInt(j.target.value)||1}))})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"validity",children:"Validity Days"}),r.jsx(ne,{id:"validity",type:"number",min:"1",value:l.validityDays,onChange:j=>c(S=>({...S,validityDays:parseInt(j.target.value)||1}))})]}),r.jsxs("div",{children:[r.jsx(U,{htmlFor:"description",children:"Description (Optional)"}),r.jsx(ne,{id:"description",placeholder:"License description...",value:l.description,onChange:j=>c(S=>({...S,description:j.target.value}))})]})]}),r.jsxs("div",{className:"flex justify-end gap-2",children:[r.jsx(O,{variant:"outline",onClick:()=>i(!1),children:"Cancel"}),r.jsx(O,{onClick:x,disabled:h.isPending,children:h.isPending?"Creating...":"Create"})]})]})]})]})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[r.jsxs(H,{children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Total Keys"}),r.jsx(qn,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsx(Y,{children:r.jsx("div",{className:"text-2xl font-bold",children:f.length})})]}),r.jsxs(H,{children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Active Keys"}),r.jsx(qn,{className:"h-4 w-4 text-green-600"})]}),r.jsx(Y,{children:r.jsx("div",{className:"text-2xl font-bold",children:f.filter(j=>j.isActive&&!m(j.expiresAt)).length})})]}),r.jsxs(H,{children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Total Users"}),r.jsx(xt,{className:"h-4 w-4 text-muted-foreground"})]}),r.jsx(Y,{children:r.jsx("div",{className:"text-2xl font-bold",children:f.reduce((j,S)=>j+S.currentUsers,0)})})]}),r.jsxs(H,{children:[r.jsxs(K,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[r.jsx(G,{className:"text-sm font-medium",children:"Expired Keys"}),r.jsx(qh,{className:"h-4 w-4 text-red-600"})]}),r.jsx(Y,{children:r.jsx("div",{className:"text-2xl font-bold",children:f.filter(j=>m(j.expiresAt)).length})})]})]}),r.jsxs(H,{children:[r.jsxs(K,{children:[r.jsx(G,{children:"License Keys"}),r.jsx(me,{children:"Manage license keys for user registration and access control"})]}),r.jsx(Y,{children:p?r.jsxs("div",{className:"text-center py-8",children:[r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading license keys..."})]}):f.length===0?r.jsxs("div",{className:"text-center py-8",children:[r.jsx(qn,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),r.jsx("h3",{className:"text-lg font-semibold mb-2",children:"No license keys created"}),r.jsx("p",{className:"text-muted-foreground mb-4",children:"Create your first license key to enable user registration"}),r.jsxs(O,{onClick:()=>a(!0),children:[r.jsx(An,{className:"mr-2 h-4 w-4"}),"Generate License Key"]})]}):r.jsxs(ls,{children:[r.jsx(cs,{children:r.jsxs(Ze,{children:[r.jsx(se,{children:"License Key"}),r.jsx(se,{children:"Users"}),r.jsx(se,{children:"Validity"}),r.jsx(se,{children:"Status"}),r.jsx(se,{children:"Expires"}),r.jsx(se,{children:"Actions"})]})}),r.jsx(us,{children:f.map(j=>{const S=m(j.expiresAt),N=w(j.expiresAt);return r.jsxs(Ze,{children:[r.jsxs(re,{children:[r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("code",{className:"bg-muted px-2 py-1 rounded text-sm",children:j.licenseKey}),r.jsx(O,{variant:"ghost",size:"sm",onClick:()=>g(j.licenseKey),children:r.jsx(We,{className:"h-4 w-4"})})]}),j.description&&r.jsx("p",{className:"text-sm text-muted-foreground mt-1",children:j.description})]}),r.jsx(re,{children:r.jsxs("div",{className:"flex flex-col",children:[r.jsxs("span",{className:"font-medium",children:[j.currentUsers,"/",j.maxUsers]}),r.jsxs("span",{className:"text-sm text-muted-foreground",children:[j.maxUsers-j.currentUsers," remaining"]})]})}),r.jsx(re,{children:r.jsxs("span",{className:"text-sm",children:[j.validityDays," days"]})}),r.jsx(re,{children:r.jsx(ie,{variant:S?"destructive":j.isActive?j.currentUsers>=j.maxUsers?"outline":"default":"secondary",children:S?"Expired":j.isActive?j.currentUsers>=j.maxUsers?"Full":"Active":"Inactive"})}),r.jsx(re,{children:r.jsxs("div",{className:"flex flex-col",children:[r.jsx("span",{className:"text-sm",children:new Date(j.expiresAt).toLocaleDateString()}),!S&&r.jsxs("span",{className:`text-xs ${N<=7?"text-red-600":"text-muted-foreground"}`,children:[N," days left"]})]})}),r.jsx(re,{children:r.jsxs(Lu,{children:[r.jsx(Fu,{asChild:!0,children:r.jsx(O,{variant:"ghost",size:"sm",children:r.jsx(Wr,{className:"h-4 w-4"})})}),r.jsxs(tl,{children:[r.jsxs(nl,{children:[r.jsx(rl,{children:"Delete License Key"}),r.jsx(il,{children:"Are you sure you want to delete this license key? This action cannot be undone. Any users currently using this license will lose access."})]}),r.jsxs(sl,{children:[r.jsx(al,{children:"Cancel"}),r.jsx(ol,{onClick:()=>b.mutate(j.id),className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",children:"Delete"})]})]})]})})]},j.id)})})]})})]})]})]})}function vL(){var c,u;const[e,t]=d.useState(null),[n,s]=d.useState(!1),[,i]=xp(),{toast:o}=vn();d.useEffect(()=>{const f=yj(p=>{p?(t(p),a(p)):t(null)});return()=>f()},[]);const a=async f=>{if(!n){s(!0);try{const p=await f.getIdToken(),v=await(await fetch("/api/auth/firebase-login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({firebase_token:p,firebase_uid:f.uid,email:f.email,display_name:f.displayName})})).json();v.success?(o({title:"Success",description:"Login successful! Redirecting to dashboard...",variant:"default"}),localStorage.setItem("account_id",v.account_id),localStorage.setItem("account_email",f.email),localStorage.setItem("firebase_uid",f.uid),setTimeout(()=>{i("/")},1500)):o({title:"Error",description:v.message,variant:"destructive"})}catch(p){console.error("Backend authentication error:",p),o({title:"Error",description:"Failed to authenticate with backend",variant:"destructive"})}finally{s(!1)}}},l=async()=>{s(!0);try{await jM()}catch(f){console.error("Google login error:",f),o({title:"Error",description:"Failed to initiate Google login",variant:"destructive"}),s(!1)}};return e?r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"max-w-md w-full space-y-8",children:r.jsxs(H,{className:"border-green-200 shadow-lg",children:[r.jsxs(K,{className:"text-center",children:[r.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:r.jsx(wa,{className:"h-8 w-8 text-green-600"})}),r.jsx(G,{className:"text-2xl font-bold text-slate-800",children:"Welcome to AuthAPI!"})]}),r.jsxs(Y,{className:"space-y-4",children:[r.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[r.jsxs("div",{className:"flex items-center mb-2",children:[r.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3",children:r.jsx("span",{className:"text-blue-600 font-medium text-sm",children:((c=e.displayName)==null?void 0:c.charAt(0))||((u=e.email)==null?void 0:u.charAt(0))})}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-medium text-blue-900",children:e.displayName||"User"}),r.jsx("p",{className:"text-sm text-blue-700",children:e.email})]})]}),r.jsx("p",{className:"text-sm text-blue-800",children:"You are now logged in with Firebase authentication."})]}),r.jsxs("div",{className:"space-y-3",children:[r.jsx(Re,{href:"/dashboard",children:r.jsx(O,{className:"w-full bg-primary text-white hover:bg-primary/90",children:"Go to Your Dashboard"})}),r.jsx(Re,{href:"/",children:r.jsx(O,{variant:"outline",className:"w-full",children:"Back to Home"})})]})]})]})})}):r.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"max-w-md w-full space-y-8",children:[r.jsxs("div",{className:"text-center",children:[r.jsxs(Re,{href:"/",className:"flex items-center justify-center mb-6",children:[r.jsx(Se,{className:"h-10 w-10 primary-color mr-3"}),r.jsx("span",{className:"text-2xl font-bold text-gray-900",children:"Phantom Auth"})]}),r.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Create Your Account"}),r.jsx("p",{className:"text-gray-600",children:"Sign in with Google to access your authentication environment"})]}),r.jsxs(H,{className:"professional-card shadow-lg",children:[r.jsx(K,{className:"text-center",children:r.jsxs(G,{className:"flex items-center justify-center text-xl font-semibold",children:[r.jsx(aT,{className:"h-5 w-5 mr-2 primary-color"}),"Multi-Tenant Authentication"]})}),r.jsx(Y,{children:r.jsxs("div",{className:"space-y-6",children:[r.jsx("div",{className:"professional-card bg-blue-50 border border-blue-200 rounded-lg p-4",children:r.jsxs("div",{className:"flex items-start",children:[r.jsx(gT,{className:"h-5 w-5 text-blue-600 mr-3 mt-1"}),r.jsxs("div",{children:[r.jsx("p",{className:"text-sm font-semibold text-blue-800 mb-1",children:"Enterprise Authentication System"}),r.jsx("p",{className:"text-sm text-gray-700",children:"Each Google account creates its own isolated authentication environment with unique API keys and user management."})]})]})}),r.jsx(O,{onClick:l,disabled:n,className:"w-full professional-button py-3 px-4 rounded-lg font-semibold text-lg transition-all duration-200",children:n?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"}),r.jsx("span",{children:"Authenticating..."})]}):r.jsxs(r.Fragment,{children:[r.jsxs("svg",{className:"w-5 h-5 mr-3",viewBox:"0 0 24 24",children:[r.jsx("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),r.jsx("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),r.jsx("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),r.jsx("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),r.jsx("span",{children:"Continue with Google"})]})}),r.jsx("div",{className:"text-center mt-6",children:r.jsxs("div",{className:"professional-card bg-green-50 border border-green-200 rounded-lg p-4",children:[r.jsx("p",{className:"text-sm text-green-800 font-semibold mb-2",children:"Development Testing"}),r.jsx(Re,{href:"/test-login",className:"text-primary hover:text-primary/80 transition-colors duration-200 font-medium",children:"Access Demo Environment →"})]})})]})})]})]})})}function yL({onComplete:e}){const[t,n]=d.useState(0),[s,i]=d.useState("Initializing Phantom Auth"),[o,a]=d.useState(!0),l=["Initializing Phantom Auth","Loading Security Protocols","Establishing Secure Connection","Authenticating Systems","Finalizing Setup"];return d.useEffect(()=>{let p=0;const h=setInterval(()=>{p++;const b=(1-Math.pow(1-p/100,3))*100;n(b);const x=Math.min(Math.floor(b/100*l.length),l.length-1);i(l[x]),p>=100&&(clearInterval(h),setTimeout(()=>{a(!1),setTimeout(e,300)},300))},28);return()=>clearInterval(h)},[e]),o?r.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/98 to-background backdrop-blur-md",children:[r.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[[...Array(15)].map((c,u)=>r.jsx("div",{className:"absolute rounded-full bg-gradient-to-r from-primary/20 to-primary/5 animate-float",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,width:`${20+Math.random()*40}px`,height:`${20+Math.random()*40}px`,animationDelay:`${Math.random()*3}s`,animationDuration:`${4+Math.random()*3}s`}},u)),[...Array(30)].map((c,u)=>r.jsx("div",{className:"absolute w-1 h-1 bg-primary rounded-full animate-ping",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*4}s`,animationDuration:`${1+Math.random()*2}s`}},`sparkle-${u}`))]}),r.jsxs("div",{className:"relative z-10 text-center max-w-md mx-auto px-6",children:[r.jsxs("div",{className:"mb-8 relative",children:[r.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:r.jsx("div",{className:"w-32 h-32 bg-primary/10 rounded-full animate-ping",style:{animationDuration:"2s"}})}),r.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:r.jsx("div",{className:"w-24 h-24 bg-primary/20 rounded-full animate-ping",style:{animationDuration:"1.5s",animationDelay:"0.5s"}})}),r.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:r.jsx("div",{className:"w-16 h-16 bg-primary/30 rounded-full animate-ping",style:{animationDuration:"1s",animationDelay:"1s"}})}),r.jsx("div",{className:"relative flex items-center justify-center animate-spin-slow",children:r.jsx(Se,{className:"w-20 h-20 text-primary drop-shadow-lg",style:{filter:"drop-shadow(0 0 10px rgba(220, 38, 38, 0.5))"}})})]}),r.jsx("h1",{className:"text-3xl font-bold text-foreground mb-2 animate-fade-in",children:"Phantom Auth"}),r.jsx("p",{className:"text-muted-foreground mb-8 animate-fade-in",style:{animationDelay:"0.5s"},children:"Enterprise Authentication Platform"}),r.jsxs("div",{className:"mb-6",children:[r.jsx("div",{className:"w-full bg-muted/50 rounded-full h-3 overflow-hidden border border-border/30 shadow-inner",children:r.jsxs("div",{className:"h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full transition-all duration-500 ease-out relative shadow-lg",style:{width:`${t}%`,boxShadow:"0 0 15px rgba(220, 38, 38, 0.6)"},children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse opacity-75",style:{animation:"shimmer 1.5s infinite",transform:"translateX(-100%)",animationFillMode:"forwards"}}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 rounded-full blur-sm"})]})}),r.jsxs("div",{className:"flex justify-between text-xs text-muted-foreground mt-3 font-medium",children:[r.jsx("span",{className:"text-primary/70",children:"0%"}),r.jsxs("span",{className:"font-bold text-primary animate-pulse",children:[Math.round(t),"%"]}),r.jsx("span",{className:"text-primary/70",children:"100%"})]})]}),r.jsx("p",{className:"text-sm text-muted-foreground animate-pulse",children:s}),r.jsx("div",{className:"flex justify-center space-x-1 mt-4",children:[...Array(3)].map((c,u)=>r.jsx("div",{className:"w-2 h-2 bg-primary rounded-full animate-bounce",style:{animationDelay:`${u*.2}s`}},u))})]})]}):null}function wL(){const{theme:e,toggleTheme:t}=yo(),[n,s]=d.useState(!0),[i,o]=d.useState(!1),a=()=>{window.location.href="/firebase-login"},l=()=>{s(!1),setTimeout(()=>o(!0),300)};if(n)return r.jsx(yL,{onComplete:l});const c=[{title:"🔐 Core Authentication Features",icon:r.jsx(Se,{className:"h-6 w-6"}),features:["User Registration & Login – Full user management system","API Key Authentication – Secure access control for API usage","Session Management – Real-time session tracking and verification","Password Hashing – Industry-standard encryption for secure password storage"]},{title:"🛡️ Advanced Security Features",icon:r.jsx(bT,{className:"h-6 w-6"}),features:["Hardware ID (HWID) Locking – Prevent account sharing across multiple devices","Application Version Control – Force updates to the latest version","Account Expiration System – Set expiry durations for user accounts","User Pause/Disable System – Temporarily or permanently deactivate users","Blacklist System – Block users by IP Address, Username, Email, HWID"]},{title:"📊 Management & Monitoring",icon:r.jsx(ki,{className:"h-6 w-6"}),features:["Real-Time Dashboard – Complete admin control panel","User Management Interface – Add, edit, or remove users","Application Settings – Modify and configure app behavior","Activity Logging – Track all user actions and events","Live Statistics – View login stats, user activity, and more","Rate Limiting – Prevent abuse and bot attacks"]},{title:"🔔 Notification System",icon:r.jsx(rT,{className:"h-6 w-6"}),features:["Webhook Support – Get notified instantly on user events","Discord Integration – Get alerts directly in your Discord server","Custom Webhooks – Connect with any URL for external integrations","Real-time notifications for login/logout, failed attempts, violations"]},{title:"🔧 Developer Features",icon:r.jsx(Qt,{className:"h-6 w-6"}),features:["RESTful API – Clean, well-structured JSON responses","C# Integration – Full WinForms support with working examples","Multi-Language Support – Integrate easily with multiple coding languages","Comprehensive Documentation – Detailed API docs with examples","Ready-to-Use Code Samples – Fast and easy implementation","Smart Error Handling – Clear and informative error messages"]},{title:"📱 User Interface",icon:r.jsx(jT,{className:"h-6 w-6"}),features:["Modern Dashboard – Sleek, responsive UI","Dark/Light Theme – Easy theme switching","Mobile Responsive – Works seamlessly on all screen sizes","Live Updates – Instant data refresh without reloading"]},{title:"🚀 Performance Features",icon:r.jsx(wT,{className:"h-6 w-6"}),features:["High-Speed Authentication – Ultra-low latency responses","Scalable Architecture – Built to support multiple applications","Optimized Database – Fast and efficient queries","Efficient Session Handling – Robust and secure session flow"]},{title:"🔒 Enterprise-Level Security",icon:r.jsx(hT,{className:"h-6 w-6"}),features:["Bank-Grade Encryption – Industry-standard security practices","HTTPS-Only API Communication – Ensures data integrity and protection","Token-Based Authentication – Secure session management","Multi-Level Access Control – Role-based permission system"]}];return r.jsxs("div",{className:"min-h-screen relative overflow-hidden",children:[r.jsx(vt,{}),r.jsxs("div",{className:`relative z-10 transition-all duration-1000 ${i?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[r.jsx("nav",{className:"phantom-nav fixed w-full top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"flex justify-between items-center h-16",children:[r.jsxs("div",{className:"flex items-center",children:[r.jsx(Se,{className:"h-8 w-8 phantom-text mr-3"}),r.jsx("span",{className:"text-2xl font-bold text-foreground",children:"Phantom Auth"})]}),r.jsxs("div",{className:"flex items-center space-x-4",children:[r.jsx(O,{variant:"ghost",size:"icon",onClick:t,className:"text-foreground hover:text-primary",children:e==="light"?r.jsx(no,{className:"h-5 w-5"}):r.jsx(so,{className:"h-5 w-5"})}),r.jsx(O,{onClick:a,className:"phantom-button px-6 py-2",children:"Sign In"})]})]})})}),r.jsx("section",{className:"pt-32 pb-20 px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"max-w-7xl mx-auto text-center",children:r.jsxs("div",{className:"mb-8",children:[r.jsxs("div",{className:"relative inline-block mb-6",children:[r.jsx("div",{className:"absolute inset-0 animate-ping",children:r.jsx(Se,{className:"h-16 w-16 phantom-text opacity-30"})}),r.jsx(Se,{className:"h-16 w-16 phantom-text animate-float gpu-accelerated"})]}),r.jsx("h1",{className:"text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in gpu-accelerated",children:r.jsx("span",{className:"bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient",children:"Phantom Auth"})}),r.jsx("p",{className:"text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in-delay",children:"Secure, scalable authentication API for your applications. Create users, manage API keys, and authenticate with ease."}),r.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2",children:[r.jsxs(O,{onClick:a,className:"phantom-button px-8 py-4 text-lg gpu-accelerated group relative overflow-hidden",children:[r.jsx("span",{className:"relative z-10",children:"Get Started"}),r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"})]}),r.jsxs(O,{variant:"outline",className:"px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white gpu-accelerated group relative overflow-hidden",children:[r.jsx("span",{className:"relative z-10",children:"View Documentation"}),r.jsx("div",{className:"absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"})]})]})]})})}),r.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 backdrop-blur-sm",children:r.jsxs("div",{className:"max-w-7xl mx-auto",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-4",children:"Powerful Authentication Features"}),r.jsx("p",{className:"text-xl text-muted-foreground max-w-2xl mx-auto",children:"Everything you need to secure your applications with enterprise-grade authentication"})]}),r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[r.jsxs(H,{className:"phantom-card gpu-accelerated group relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),r.jsxs(K,{className:"relative z-10",children:[r.jsxs("div",{className:"relative",children:[r.jsx(vu,{className:"h-10 w-10 phantom-text mb-4 group-hover:animate-smooth-bounce transition-all duration-300"}),r.jsx("div",{className:"absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"})]}),r.jsx(G,{className:"group-hover:text-primary transition-colors duration-300",children:"Lightning Fast"}),r.jsx(me,{children:"High-performance authentication with minimal latency and maximum throughput"})]})]}),r.jsxs(H,{className:"phantom-card gpu-accelerated group relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),r.jsxs(K,{className:"relative z-10",children:[r.jsxs("div",{className:"relative",children:[r.jsx(Se,{className:"h-10 w-10 phantom-text mb-4 group-hover:animate-smooth-bounce transition-all duration-300"}),r.jsx("div",{className:"absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"})]}),r.jsx(G,{className:"group-hover:text-primary transition-colors duration-300",children:"Enterprise Security"}),r.jsx(me,{children:"Bank-grade security with encryption, hashing, and secure session management"})]})]}),r.jsxs(H,{className:"phantom-card gpu-accelerated group relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),r.jsxs(K,{className:"relative z-10",children:[r.jsxs("div",{className:"relative",children:[r.jsx(qn,{className:"h-10 w-10 phantom-text mb-4 group-hover:animate-smooth-bounce transition-all duration-300"}),r.jsx("div",{className:"absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"})]}),r.jsx(G,{className:"group-hover:text-primary transition-colors duration-300",children:"API Key Management"}),r.jsx(me,{children:"Generate, manage, and secure API keys with granular permissions"})]})]}),r.jsxs(H,{className:"phantom-card gpu-accelerated group relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),r.jsxs(K,{className:"relative z-10",children:[r.jsxs("div",{className:"relative",children:[r.jsx(xt,{className:"h-10 w-10 phantom-text mb-4 group-hover:animate-smooth-bounce transition-all duration-300"}),r.jsx("div",{className:"absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"})]}),r.jsx(G,{className:"group-hover:text-primary transition-colors duration-300",children:"User Management"}),r.jsx(me,{children:"Complete user lifecycle management with registration, login, and profiles"})]})]}),r.jsxs(H,{className:"phantom-card gpu-accelerated group relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),r.jsxs(K,{className:"relative z-10",children:[r.jsxs("div",{className:"relative",children:[r.jsx(Wa,{className:"h-10 w-10 phantom-text mb-4 group-hover:animate-smooth-bounce transition-all duration-300"}),r.jsx("div",{className:"absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"})]}),r.jsx(G,{className:"group-hover:text-primary transition-colors duration-300",children:"Global Scale"}),r.jsx(me,{children:"Built to scale globally with distributed architecture and CDN support"})]})]}),r.jsxs(H,{className:"phantom-card gpu-accelerated group relative overflow-hidden",children:[r.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),r.jsxs(K,{className:"relative z-10",children:[r.jsxs("div",{className:"relative",children:[r.jsx(Rr,{className:"h-10 w-10 phantom-text mb-4 group-hover:animate-smooth-bounce transition-all duration-300"}),r.jsx("div",{className:"absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"})]}),r.jsx(G,{className:"group-hover:text-primary transition-colors duration-300",children:"Secure by Default"}),r.jsx(me,{children:"Best security practices built-in with automatic updates and monitoring"})]})]})]})]})}),r.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-4xl md:text-5xl font-bold phantom-text mb-2 animate-pulse",children:"99.9%"}),r.jsx("div",{className:"text-lg text-muted-foreground",children:"Uptime Guarantee"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-4xl md:text-5xl font-bold phantom-text mb-2 animate-pulse",children:"<50ms"}),r.jsx("div",{className:"text-lg text-muted-foreground",children:"Average Response"})]}),r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"text-4xl md:text-5xl font-bold phantom-text mb-2 animate-pulse",children:"24/7"}),r.jsx("div",{className:"text-lg text-muted-foreground",children:"Support Available"})]})]})})}),r.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 backdrop-blur-sm",children:r.jsxs("div",{className:"max-w-6xl mx-auto",children:[r.jsxs("div",{className:"text-center mb-16",children:[r.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-6",children:"Complete Feature Overview"}),r.jsx("p",{className:"text-xl text-muted-foreground mb-12",children:"Join thousands of developers who trust Phantom Auth for their authentication needs"})]}),r.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:c.map((u,f)=>r.jsxs(H,{className:"phantom-card hover:scale-105 transition-all duration-300",children:[r.jsx(K,{className:"pb-4",children:r.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[r.jsx("div",{className:"phantom-text",children:u.icon}),r.jsx(G,{className:"text-lg",children:u.title})]})}),r.jsx(Y,{children:r.jsx("ul",{className:"space-y-3",children:u.features.map((p,h)=>r.jsxs("li",{className:"flex items-start gap-3 text-sm",children:[r.jsx(wa,{className:"h-4 w-4 phantom-text mt-0.5 flex-shrink-0"}),r.jsx("span",{className:"text-muted-foreground leading-relaxed",children:p})]},h))})})]},f))}),r.jsx("div",{className:"text-center mt-12",children:r.jsx(O,{onClick:a,className:"phantom-button px-8 py-4 text-lg hover:scale-105 transition-transform",children:"Start Building Now"})})]})}),r.jsx("footer",{className:"bg-background/80 backdrop-blur-md border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8",children:r.jsx("div",{className:"max-w-7xl mx-auto",children:r.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[r.jsxs("div",{className:"flex items-center mb-4 md:mb-0",children:[r.jsx(Se,{className:"h-6 w-6 phantom-text mr-2"}),r.jsx("span",{className:"text-lg font-semibold text-foreground",children:"Phantom Auth"})]}),r.jsx("div",{className:"text-sm text-muted-foreground",children:"© 2024 Phantom Auth. All rights reserved."})]})})})]})]})}function bL(){return r.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50",children:r.jsx(H,{className:"w-full max-w-md mx-4",children:r.jsxs(Y,{className:"pt-6",children:[r.jsxs("div",{className:"flex mb-4 gap-2",children:[r.jsx(uT,{className:"h-8 w-8 text-red-500"}),r.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"404 Page Not Found"})]}),r.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Did you forget to add the page to the router?"})]})})})}function jL(){const{isAuthenticated:e,isLoading:t}=ei();return t?r.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"}),r.jsx("p",{className:"text-muted-foreground",children:"Loading..."})]})}):r.jsxs(Ck,{children:[e?r.jsxs(r.Fragment,{children:[r.jsx(ut,{path:"/",component:CM}),r.jsx(ut,{path:"/dashboard",component:GD}),r.jsx(ut,{path:"/app/:id",component:tL}),r.jsx(ut,{path:"/app/:id/licenses",component:xL}),r.jsx(ut,{path:"/webhooks",component:iL}),r.jsx(ut,{path:"/blacklist",component:oL}),r.jsx(ut,{path:"/activity-logs",component:aL}),r.jsx(ut,{path:"/integration",component:lL}),r.jsx(ut,{path:"/docs",component:rL}),r.jsx(ut,{path:"/code-editor",component:cL}),r.jsx(ut,{path:"/user-management",component:hv})]}):r.jsxs(r.Fragment,{children:[r.jsx(ut,{path:"/",component:wL}),r.jsx(ut,{path:"/firebase-login",component:vL}),r.jsx(ut,{path:"/user-management",component:hv})]}),r.jsx(ut,{component:bL})]})}function SL(){return r.jsx(Gk,{client:dt,children:r.jsx(PI,{children:r.jsxs(AI,{children:[r.jsx(iA,{}),r.jsx(jL,{})]})})})}Lw(document.getElementById("root")).render(r.jsx(SL,{}));
