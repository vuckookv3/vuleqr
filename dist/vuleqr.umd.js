(function(D,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],y):(D=typeof globalThis<"u"?globalThis:D||self,y(D.VuleQR={},D.require$$0))})(this,function(D,y){"use strict";var H={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce;function Ie(){if(ce)return M;ce=1;var _=y,l=Symbol.for("react.element"),S=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,h=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function C(b,c,m){var d,w={},T=null,P=null;m!==void 0&&(T=""+m),c.key!==void 0&&(T=""+c.key),c.ref!==void 0&&(P=c.ref);for(d in c)f.call(c,d)&&!u.hasOwnProperty(d)&&(w[d]=c[d]);if(b&&b.defaultProps)for(d in c=b.defaultProps,c)w[d]===void 0&&(w[d]=c[d]);return{$$typeof:l,type:b,key:T,ref:P,props:w,_owner:h.current}}return M.Fragment=S,M.jsx=C,M.jsxs=C,M}var W={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le;function Me(){return le||(le=1,process.env.NODE_ENV!=="production"&&function(){var _=y,l=Symbol.for("react.element"),S=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),b=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.offscreen"),F=Symbol.iterator,K="@@iterator";function X(e){if(e===null||typeof e!="object")return null;var r=F&&e[F]||e[K];return typeof r=="function"?r:null}var E=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Y("error",e,t)}}function Y(e,r,t){{var n=E.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var s=t.map(function(i){return String(i)});s.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,s)}}var x=!1,q=!1,$=!1,ee=!1,Ze=!1,de;de=Symbol.for("react.module.reference");function Ge(e){return!!(typeof e=="string"||typeof e=="function"||e===f||e===u||Ze||e===h||e===m||e===d||ee||e===P||x||q||$||typeof e=="object"&&e!==null&&(e.$$typeof===T||e.$$typeof===w||e.$$typeof===C||e.$$typeof===b||e.$$typeof===c||e.$$typeof===de||e.getModuleId!==void 0))}function Je(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function ve(e){return e.displayName||"Context"}function j(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case f:return"Fragment";case S:return"Portal";case u:return"Profiler";case h:return"StrictMode";case m:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case b:var r=e;return ve(r)+".Consumer";case C:var t=e;return ve(t._context)+".Provider";case c:return Je(e,e.render,"ForwardRef");case w:var n=e.displayName||null;return n!==null?n:j(e.type)||"Memo";case T:{var o=e,s=o._payload,i=o._init;try{return j(i(s))}catch{return null}}}return null}var L=Object.assign,U=0,pe,he,ge,me,ye,be,Ee;function Re(){}Re.__reactDisabledLog=!0;function Qe(){{if(U===0){pe=console.log,he=console.info,ge=console.warn,me=console.error,ye=console.group,be=console.groupCollapsed,Ee=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Re,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function ze(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:L({},e,{value:pe}),info:L({},e,{value:he}),warn:L({},e,{value:ge}),error:L({},e,{value:me}),group:L({},e,{value:ye}),groupCollapsed:L({},e,{value:be}),groupEnd:L({},e,{value:Ee})})}U<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var re=E.ReactCurrentDispatcher,te;function Z(e,r,t){{if(te===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||""}return`
`+te+e}}var ne=!1,G;{var He=typeof WeakMap=="function"?WeakMap:Map;G=new He}function _e(e,r){if(!e||ne)return"";{var t=G.get(e);if(t!==void 0)return t}var n;ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var s;s=re.current,re.current=null,Qe();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(k){n=k}Reflect.construct(e,[],i)}else{try{i.call()}catch(k){n=k}e.call(i.prototype)}}else{try{throw Error()}catch(k){n=k}e()}}catch(k){if(k&&n&&typeof k.stack=="string"){for(var a=k.stack.split(`
`),R=n.stack.split(`
`),p=a.length-1,g=R.length-1;p>=1&&g>=0&&a[p]!==R[g];)g--;for(;p>=1&&g>=0;p--,g--)if(a[p]!==R[g]){if(p!==1||g!==1)do if(p--,g--,g<0||a[p]!==R[g]){var O=`
`+a[p].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&G.set(e,O),O}while(p>=1&&g>=0);break}}}finally{ne=!1,re.current=s,ze(),Error.prepareStackTrace=o}var I=e?e.displayName||e.name:"",Ae=I?Z(I):"";return typeof e=="function"&&G.set(e,Ae),Ae}function Ke(e,r,t){return _e(e,!1)}function Xe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function J(e,r,t){if(e==null)return"";if(typeof e=="function")return _e(e,Xe(e));if(typeof e=="string")return Z(e);switch(e){case m:return Z("Suspense");case d:return Z("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Ke(e.render);case w:return J(e.type,r,t);case T:{var n=e,o=n._payload,s=n._init;try{return J(s(o),r,t)}catch{}}}return""}var Q=Object.prototype.hasOwnProperty,we={},Se=E.ReactDebugCurrentFrame;function z(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);Se.setExtraStackFrame(t)}else Se.setExtraStackFrame(null)}function $e(e,r,t,n,o){{var s=Function.call.bind(Q);for(var i in e)if(s(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var R=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw R.name="Invariant Violation",R}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(p){a=p}a&&!(a instanceof Error)&&(z(o),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),z(null)),a instanceof Error&&!(a.message in we)&&(we[a.message]=!0,z(o),v("Failed %s type: %s",t,a.message),z(null))}}}var er=Array.isArray;function ae(e){return er(e)}function rr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function tr(e){try{return Te(e),!1}catch{return!0}}function Te(e){return""+e}function Ce(e){if(tr(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",rr(e)),Te(e)}var V=E.ReactCurrentOwner,nr={key:!0,ref:!0,__self:!0,__source:!0},Oe,xe,ie;ie={};function ar(e){if(Q.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ir(e){if(Q.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function or(e,r){if(typeof e.ref=="string"&&V.current&&r&&V.current.stateNode!==r){var t=j(V.current.type);ie[t]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',j(V.current.type),e.ref),ie[t]=!0)}}function ur(e,r){{var t=function(){Oe||(Oe=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function sr(e,r){{var t=function(){xe||(xe=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var cr=function(e,r,t,n,o,s,i){var a={$$typeof:l,type:e,key:r,ref:t,props:i,_owner:s};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function lr(e,r,t,n,o){{var s,i={},a=null,R=null;t!==void 0&&(Ce(t),a=""+t),ir(r)&&(Ce(r.key),a=""+r.key),ar(r)&&(R=r.ref,or(r,o));for(s in r)Q.call(r,s)&&!nr.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps){var p=e.defaultProps;for(s in p)i[s]===void 0&&(i[s]=p[s])}if(a||R){var g=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&ur(i,g),R&&sr(i,g)}return cr(e,a,R,o,n,V.current,i)}}var oe=E.ReactCurrentOwner,Pe=E.ReactDebugCurrentFrame;function A(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);Pe.setExtraStackFrame(t)}else Pe.setExtraStackFrame(null)}var ue;ue=!1;function se(e){return typeof e=="object"&&e!==null&&e.$$typeof===l}function je(){{if(oe.current){var e=j(oe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var ke={};function dr(e){{var r=je();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function De(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=dr(r);if(ke[t])return;ke[t]=!0;var n="";e&&e._owner&&e._owner!==oe.current&&(n=" It was passed a child from "+j(e._owner.type)+"."),A(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),A(null)}}function Le(e,r){{if(typeof e!="object")return;if(ae(e))for(var t=0;t<e.length;t++){var n=e[t];se(n)&&De(n,r)}else if(se(e))e._store&&(e._store.validated=!0);else if(e){var o=X(e);if(typeof o=="function"&&o!==e.entries)for(var s=o.call(e),i;!(i=s.next()).done;)se(i.value)&&De(i.value,r)}}}function vr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===w))t=r.propTypes;else return;if(t){var n=j(r);$e(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ue){ue=!0;var o=j(r);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function pr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){A(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),A(null);break}}e.ref!==null&&(A(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),A(null))}}function Fe(e,r,t,n,o,s){{var i=Ge(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var R=fr(o);R?a+=R:a+=je();var p;e===null?p="null":ae(e)?p="array":e!==void 0&&e.$$typeof===l?(p="<"+(j(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):p=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",p,a)}var g=lr(e,r,t,o,s);if(g==null)return g;if(i){var O=r.children;if(O!==void 0)if(n)if(ae(O)){for(var I=0;I<O.length;I++)Le(O[I],e);Object.freeze&&Object.freeze(O)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Le(O,e)}return e===f?pr(g):vr(g),g}}function hr(e,r,t){return Fe(e,r,t,!0)}function gr(e,r,t){return Fe(e,r,t,!1)}var mr=gr,yr=hr;W.Fragment=f,W.jsx=mr,W.jsxs=yr}()),W}process.env.NODE_ENV==="production"?H.exports=Ie():H.exports=Me();var B=H.exports;const br="";function We(_=750,l=150,S=5){try{const f=new window.AudioContext,h=f.createOscillator(),u=f.createGain();h.connect(u),h.frequency.value=_,h.type="square",u.connect(f.destination),u.gain.value=S*.01,h.start(f.currentTime),h.stop(f.currentTime+l*.001)}catch{console.warn("Sorry, Web Audio API is not supported by your browser")}}function Ne(_){const[l,S]=y.useState(null),[f,h]=y.useState(null);return y.useEffect(()=>{function u(){try{const C=new Worker("vuleqr/zbarWorker.js"),b=new Worker("vuleqr/zxingWorker.js"),c=m=>async d=>{if(d.data!==null){const w=d.data,T=w.data,P=w.type,F=d.data.ms;_({rawcode:T,milliseconds:F,alg:m,type:P})}};C.onmessage=c("zbar"),b.onmessage=c("zxing"),S(C),h(b)}catch{return null}}u()},[]),y.useEffect(()=>()=>{l&&l.terminate(),f&&f.terminate()},[l,f]),[l,f]}function Ye(_){const[l,S]=y.useState(null);return y.useEffect(()=>{if(Ue())return;async function h(){try{const u=await navigator.mediaDevices.getUserMedia(_);S(u)}catch{return null}}h()},[_]),y.useEffect(()=>()=>{l&&l.getTracks().forEach(f=>f.stop())},[]),l}function Ue(){return!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia?new Error("Browser API navigator.mediaDevices.getUserMedia not available"):null}const N={svg:"M288,298 L288,326 C288,335.388841 280.388841,343 271,343 L243.328859,343 L243.328,319 L249,319 C257.284271,319 264,312.284271 264,304 L264,298 L288,298 Z M56,298 L56,304 C56,312.284271 62.7157288,319 71,319 L76.671,319 L76.6711409,343 L49,343 C39.6111593,343 32,335.388841 32,326 L32,298 L56,298 Z M271,87 C280.388841,87 288,94.6111593 288,104 L288,133 L264,133 L264,126 C264,117.715729 257.284271,111 249,111 L243.328,111 L243.328859,87 L271,87 Z M32,104 C32,94.6111593 39.6111593,87 49,87 L76.6711409,87 L76.671,111 L71,111 C62.7157288,111 56,117.715729 56,126 L56,133 L32,133 L32,104 Z",width:256,height:256,x0:32,y0:87},Ve={audio:!1,video:{facingMode:"environment"}},fe={width:320,height:430};function Be({onCapture:_,crosshair:l=!0,beepOn:S=!0,scanRate:f=250}){const h=y.useRef(null),u=y.useRef(null),C=y.useRef(0),[b,c]=Ne(X),m={width:fe.width,height:fe.height},[d,w]=y.useState(null);y.useEffect(()=>{d&&(S&&We(),_(d))},[d]);const T=Ye(Ve);T&&u.current&&!u.current.srcObject&&(u.current.srcObject=T);function P(E){if(u.current&&u.current.readyState===4&&h.current){const v=h.current.getContext("2d",{willReadFrequently:!0});if(!v)return;v.drawImage(u.current,(u.current.videoWidth-m.width)/2,(u.current.videoHeight-m.height)/2,m.width,m.height,0,0,m.width,m.height),l&&qe(h.current),requestAnimationFrame(P),u.current&&K(E)}}function F(){var E;(E=u==null?void 0:u.current)==null||E.play(),requestAnimationFrame(P)}function K(E){var v;if(E-C.current>f){C.current=E;const Y=(v=h.current)==null?void 0:v.getContext("2d",{willReadFrequently:!0});if(!Y)return;let x;l?x=Y.getImageData(N.x0,N.y0,N.width,N.height):x=Y.getImageData(0,0,m.width,m.height);const q={width:x.width,height:x.height},$=x.data.buffer.slice(0),ee=x.data.buffer.slice(0);b==null||b.postMessage(q),c==null||c.postMessage(q),b==null||b.postMessage(x,[$]),c==null||c.postMessage(x,[ee])}}function X(E){u.current&&(u.current.pause(),d||w(E))}return T?B.jsx("div",{className:"vuleqr__wrapper",children:B.jsxs("div",{className:"vuleqr__container",children:[B.jsx("video",{className:"vuleqr__video",ref:u,onCanPlay:F,autoPlay:!0,playsInline:!0,muted:!0}),B.jsx("canvas",{className:"vuleqr__canvas",ref:h,width:m.width,height:m.height})]})}):null}function qe(_){const l=_.getContext("2d",{willReadFrequently:!0});if(!l)return;l.fillStyle="rgba(255,255,255,0.4)";const S=new Path2D(N.svg);l.fill(S)}D.QRScanner=Be,Object.defineProperty(D,Symbol.toStringTag,{value:"Module"})});