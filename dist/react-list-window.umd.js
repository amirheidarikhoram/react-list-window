(function(B,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],g):(B=typeof globalThis<"u"?globalThis:B||self,g(B["react-list-window"]={},B.require$$0))})(this,function(B,g){"use strict";var oe={exports:{}},X={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge;function He(){if(ge)return X;ge=1;var a=g,s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,p=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function f(T,m,c){var y,R={},x=null,C=null;c!==void 0&&(x=""+c),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(C=m.ref);for(y in m)h.call(m,y)&&!w.hasOwnProperty(y)&&(R[y]=m[y]);if(T&&T.defaultProps)for(y in m=T.defaultProps,m)R[y]===void 0&&(R[y]=m[y]);return{$$typeof:s,type:T,key:x,ref:C,props:R,_owner:p.current}}return X.Fragment=l,X.jsx=f,X.jsxs=f,X}var Z={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me;function Je(){return me||(me=1,process.env.NODE_ENV!=="production"&&function(){var a=g,s=Symbol.for("react.element"),l=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),T=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),k=Symbol.iterator,L="@@iterator";function N(e){if(e===null||typeof e!="object")return null;var n=k&&e[k]||e[L];return typeof n=="function"?n:null}var F=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function S(e){{for(var n=arguments.length,o=new Array(n>1?n-1:0),v=1;v<n;v++)o[v-1]=arguments[v];t("error",e,o)}}function t(e,n,o){{var v=F.ReactDebugCurrentFrame,E=v.getStackAddendum();E!==""&&(n+="%s",o=o.concat([E]));var O=o.map(function(_){return String(_)});O.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,O)}}var r=!1,i=!1,u=!1,d=!1,P=!1,D;D=Symbol.for("react.module.reference");function j(e){return!!(typeof e=="string"||typeof e=="function"||e===h||e===w||P||e===p||e===c||e===y||d||e===C||r||i||u||typeof e=="object"&&e!==null&&(e.$$typeof===x||e.$$typeof===R||e.$$typeof===f||e.$$typeof===T||e.$$typeof===m||e.$$typeof===D||e.getModuleId!==void 0))}function W(e,n,o){var v=e.displayName;if(v)return v;var E=n.displayName||n.name||"";return E!==""?o+"("+E+")":o}function z(e){return e.displayName||"Context"}function U(e){if(e==null)return null;if(typeof e.tag=="number"&&S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case h:return"Fragment";case l:return"Portal";case w:return"Profiler";case p:return"StrictMode";case c:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case T:var n=e;return z(n)+".Consumer";case f:var o=e;return z(o._context)+".Provider";case m:return W(e,e.render,"ForwardRef");case R:var v=e.displayName||null;return v!==null?v:U(e.type)||"Memo";case x:{var E=e,O=E._payload,_=E._init;try{return U(_(O))}catch{return null}}}return null}var H=Object.assign,Q=0,Re,Te,Se,Oe,xe,De,Ce;function Ie(){}Ie.__reactDisabledLog=!0;function dt(){{if(Q===0){Re=console.log,Te=console.info,Se=console.warn,Oe=console.error,xe=console.group,De=console.groupCollapsed,Ce=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ie,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Q++}}function ht(){{if(Q--,Q===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:H({},e,{value:Re}),info:H({},e,{value:Te}),warn:H({},e,{value:Se}),error:H({},e,{value:Oe}),group:H({},e,{value:xe}),groupCollapsed:H({},e,{value:De}),groupEnd:H({},e,{value:Ce})})}Q<0&&S("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ue=F.ReactCurrentDispatcher,le;function ee(e,n,o){{if(le===void 0)try{throw Error()}catch(E){var v=E.stack.trim().match(/\n( *(at )?)/);le=v&&v[1]||""}return`
`+le+e}}var fe=!1,te;{var vt=typeof WeakMap=="function"?WeakMap:Map;te=new vt}function Pe(e,n){if(!e||fe)return"";{var o=te.get(e);if(o!==void 0)return o}var v;fe=!0;var E=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var O;O=ue.current,ue.current=null,dt();try{if(n){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(J){v=J}Reflect.construct(e,[],_)}else{try{_.call()}catch(J){v=J}e.call(_.prototype)}}else{try{throw Error()}catch(J){v=J}e()}}catch(J){if(J&&v&&typeof J.stack=="string"){for(var b=J.stack.split(`
`),M=v.stack.split(`
`),I=b.length-1,A=M.length-1;I>=1&&A>=0&&b[I]!==M[A];)A--;for(;I>=1&&A>=0;I--,A--)if(b[I]!==M[A]){if(I!==1||A!==1)do if(I--,A--,A<0||b[I]!==M[A]){var V=`
`+b[I].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),typeof e=="function"&&te.set(e,V),V}while(I>=1&&A>=0);break}}}finally{fe=!1,ue.current=O,ht(),Error.prepareStackTrace=E}var K=e?e.displayName||e.name:"",Be=K?ee(K):"";return typeof e=="function"&&te.set(e,Be),Be}function pt(e,n,o){return Pe(e,!1)}function gt(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function re(e,n,o){if(e==null)return"";if(typeof e=="function")return Pe(e,gt(e));if(typeof e=="string")return ee(e);switch(e){case c:return ee("Suspense");case y:return ee("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case m:return pt(e.render);case R:return re(e.type,n,o);case x:{var v=e,E=v._payload,O=v._init;try{return re(O(E),n,o)}catch{}}}return""}var ne=Object.prototype.hasOwnProperty,je={},Ae=F.ReactDebugCurrentFrame;function ie(e){if(e){var n=e._owner,o=re(e.type,e._source,n?n.type:null);Ae.setExtraStackFrame(o)}else Ae.setExtraStackFrame(null)}function mt(e,n,o,v,E){{var O=Function.call.bind(ne);for(var _ in e)if(O(e,_)){var b=void 0;try{if(typeof e[_]!="function"){var M=Error((v||"React class")+": "+o+" type `"+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[_]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw M.name="Invariant Violation",M}b=e[_](n,_,v,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(I){b=I}b&&!(b instanceof Error)&&(ie(E),S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",v||"React class",o,_,typeof b),ie(null)),b instanceof Error&&!(b.message in je)&&(je[b.message]=!0,ie(E),S("Failed %s type: %s",o,b.message),ie(null))}}}var bt=Array.isArray;function ce(e){return bt(e)}function _t(e){{var n=typeof Symbol=="function"&&Symbol.toStringTag,o=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o}}function yt(e){try{return ke(e),!1}catch{return!0}}function ke(e){return""+e}function Le(e){if(yt(e))return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",_t(e)),ke(e)}var q=F.ReactCurrentOwner,Et={key:!0,ref:!0,__self:!0,__source:!0},Fe,Me,de;de={};function wt(e){if(ne.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return e.ref!==void 0}function Rt(e){if(ne.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function Tt(e,n){if(typeof e.ref=="string"&&q.current&&n&&q.current.stateNode!==n){var o=U(q.current.type);de[o]||(S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',U(q.current.type),e.ref),de[o]=!0)}}function St(e,n){{var o=function(){Fe||(Fe=!0,S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}}function Ot(e,n){{var o=function(){Me||(Me=!0,S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};o.isReactWarning=!0,Object.defineProperty(e,"ref",{get:o,configurable:!0})}}var xt=function(e,n,o,v,E,O,_){var b={$$typeof:s,type:e,key:n,ref:o,props:_,_owner:O};return b._store={},Object.defineProperty(b._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(b,"_self",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.defineProperty(b,"_source",{configurable:!1,enumerable:!1,writable:!1,value:E}),Object.freeze&&(Object.freeze(b.props),Object.freeze(b)),b};function Dt(e,n,o,v,E){{var O,_={},b=null,M=null;o!==void 0&&(Le(o),b=""+o),Rt(n)&&(Le(n.key),b=""+n.key),wt(n)&&(M=n.ref,Tt(n,E));for(O in n)ne.call(n,O)&&!Et.hasOwnProperty(O)&&(_[O]=n[O]);if(e&&e.defaultProps){var I=e.defaultProps;for(O in I)_[O]===void 0&&(_[O]=I[O])}if(b||M){var A=typeof e=="function"?e.displayName||e.name||"Unknown":e;b&&St(_,A),M&&Ot(_,A)}return xt(e,b,M,E,v,q.current,_)}}var he=F.ReactCurrentOwner,We=F.ReactDebugCurrentFrame;function G(e){if(e){var n=e._owner,o=re(e.type,e._source,n?n.type:null);We.setExtraStackFrame(o)}else We.setExtraStackFrame(null)}var ve;ve=!1;function pe(e){return typeof e=="object"&&e!==null&&e.$$typeof===s}function Ne(){{if(he.current){var e=U(he.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Ct(e){{if(e!==void 0){var n=e.fileName.replace(/^.*[\\\/]/,""),o=e.lineNumber;return`

Check your code at `+n+":"+o+"."}return""}}var Ue={};function It(e){{var n=Ne();if(!n){var o=typeof e=="string"?e:e.displayName||e.name;o&&(n=`

Check the top-level render call using <`+o+">.")}return n}}function Ve(e,n){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var o=It(n);if(Ue[o])return;Ue[o]=!0;var v="";e&&e._owner&&e._owner!==he.current&&(v=" It was passed a child from "+U(e._owner.type)+"."),G(e),S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,v),G(null)}}function Ye(e,n){{if(typeof e!="object")return;if(ce(e))for(var o=0;o<e.length;o++){var v=e[o];pe(v)&&Ve(v,n)}else if(pe(e))e._store&&(e._store.validated=!0);else if(e){var E=N(e);if(typeof E=="function"&&E!==e.entries)for(var O=E.call(e),_;!(_=O.next()).done;)pe(_.value)&&Ve(_.value,n)}}}function Pt(e){{var n=e.type;if(n==null||typeof n=="string")return;var o;if(typeof n=="function")o=n.propTypes;else if(typeof n=="object"&&(n.$$typeof===m||n.$$typeof===R))o=n.propTypes;else return;if(o){var v=U(n);mt(o,e.props,"prop",v,e)}else if(n.PropTypes!==void 0&&!ve){ve=!0;var E=U(n);S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",E||"Unknown")}typeof n.getDefaultProps=="function"&&!n.getDefaultProps.isReactClassApproved&&S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function jt(e){{for(var n=Object.keys(e.props),o=0;o<n.length;o++){var v=n[o];if(v!=="children"&&v!=="key"){G(e),S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",v),G(null);break}}e.ref!==null&&(G(e),S("Invalid attribute `ref` supplied to `React.Fragment`."),G(null))}}function ze(e,n,o,v,E,O){{var _=j(e);if(!_){var b="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(b+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var M=Ct(E);M?b+=M:b+=Ne();var I;e===null?I="null":ce(e)?I="array":e!==void 0&&e.$$typeof===s?(I="<"+(U(e.type)||"Unknown")+" />",b=" Did you accidentally export a JSX literal instead of a component?"):I=typeof e,S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",I,b)}var A=Dt(e,n,o,E,O);if(A==null)return A;if(_){var V=n.children;if(V!==void 0)if(v)if(ce(V)){for(var K=0;K<V.length;K++)Ye(V[K],e);Object.freeze&&Object.freeze(V)}else S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ye(V,e)}return e===h?jt(A):Pt(A),A}}function At(e,n,o){return ze(e,n,o,!0)}function kt(e,n,o){return ze(e,n,o,!1)}var Lt=kt,Ft=At;Z.Fragment=h,Z.jsx=Lt,Z.jsxs=Ft}()),Z}process.env.NODE_ENV==="production"?oe.exports=He():oe.exports=Je();var Y=oe.exports;const Ge={data:[],page:0,pageSize:0,error:null,loading:!1,lastUpdateAt:0,hasNextPage:!1,initialLoadDone:!1,handleLoadMore:()=>{},handleReset:()=>{}},ae=g.createContext(Ge),Ke={defaultHeight:0,defaultWidth:0,fixedSize:!1,root:void 0,orientation:"vertical",isSet:!1,setDefaultHeight:()=>{},setDefaultWidth:()=>{},setRoot:()=>{}},be=g.createContext(Ke),Xe=({children:a,fixedSize:s,orientation:l="vertical"})=>{const h=g.useRef(),[p,w]=g.useState({defaultHeight:0,defaultWidth:0,isSet:!1}),f=c=>{w(y=>({...y,defaultHeight:c,isSet:!0}))},T=c=>{w(y=>({...y,defaultWidth:c,isSet:!0}))},m=c=>{h.current=c};return Y.jsx(be.Provider,{value:{...p,fixedSize:s,orientation:l,setDefaultHeight:f,setDefaultWidth:T,setRoot:m},children:a})};function Ze({children:a}){const s=g.useContext(ae),l=g.useMemo(()=>a==null?void 0:a(s),[s,a]);return Y.jsx(Y.Fragment,{children:l})}function Qe({apiFn:a,pageSize:s=10,overridePageSize:l=!1,children:h,orientation:p="vertical",fixedSize:w=!0,autoLoad:f=!1},T){const m=g.useRef(!0),[c,y]=g.useState({data:[],loading:!0,error:null,page:1,pageSize:s,lastUpdateAt:Date.now(),hasNextPage:!0,initialLoadDone:!1}),R=g.useRef(),x=g.useCallback((L,N=c.pageSize)=>{R.current&&R.current.abort();const F=new AbortController;R.current=F,y(S=>({...S,loading:!0})),a(L,N,F.signal).then(S=>{y(t=>({...t,page:L,pageSize:N,error:null,data:[...t.data,...S.data],loading:!1,lastUpdateAt:Date.now(),hasNextPage:S.hasNextPage,initialLoadDone:!0}))}).catch(S=>{y(t=>({...t,pageSize:N,error:S,loading:!1,lastUpdateAt:Date.now(),initialLoadDone:!1}))}).finally(()=>{R.current=null})},[]),C=g.useCallback(()=>{x(c.page+1,c.pageSize)},[c.page,c.pageSize]),k=g.useCallback(L=>{y({data:[],loading:!1,error:null,page:1,pageSize:L??c.pageSize,hasNextPage:!1,lastUpdateAt:Date.now(),initialLoadDone:!1}),x(1,L??c.pageSize)},[c.page,c.pageSize]);return g.useEffect(()=>{!m.current&&l&&c.pageSize!==s&&k(s)},[s,c.pageSize,l]),g.useEffect(()=>{f&&x(0,c.pageSize)},[]),g.useImperativeHandle(T,()=>({reset:k,setPageSize:L=>k(L),getData:()=>c})),Y.jsx(ae.Provider,{value:{...c,handleLoadMore:C,handleReset:k},children:Y.jsx(Xe,{orientation:p,fixedSize:w,children:Y.jsx("div",{style:{display:"flex",flexDirection:p==="vertical"?"column":"row"},children:h})})})}const qe=g.forwardRef(Qe);var $=function(){return $=Object.assign||function(s){for(var l,h=1,p=arguments.length;h<p;h++){l=arguments[h];for(var w in l)Object.prototype.hasOwnProperty.call(l,w)&&(s[w]=l[w])}return s},$.apply(this,arguments)};function $e(a){var s=typeof Symbol=="function"&&Symbol.iterator,l=s&&a[s],h=0;if(l)return l.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&h>=a.length&&(a=void 0),{value:a&&a[h++],done:!a}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")}function _e(a,s){var l=typeof Symbol=="function"&&a[Symbol.iterator];if(!l)return a;var h=l.call(a),p,w=[],f;try{for(;(s===void 0||s-- >0)&&!(p=h.next()).done;)w.push(p.value)}catch(T){f={error:T}}finally{try{p&&!p.done&&(l=h.return)&&l.call(h)}finally{if(f)throw f.error}}return w}typeof SuppressedError=="function"&&SuppressedError;var ye=function(a){return typeof a=="function"},et=process.env.NODE_ENV==="development"||process.env.NODE_ENV==="test";const tt=et;function Ee(a,s){if(a===s)return!0;for(var l=0;l<a.length;l++)if(!Object.is(a[l],s[l]))return!1;return!0}function rt(a){var s=g.useRef(a);return s.current=a,s}var nt=function(a){tt&&(ye(a)||console.error("useUnmount expected parameter is a function, got ".concat(typeof a)));var s=rt(a);g.useEffect(function(){return function(){s.current()}},[])};const it=nt;var ot=!!(typeof window<"u"&&window.document&&window.document.createElement);const at=ot;function se(a,s){if(at){if(!a)return s;var l;return ye(a)?l=a():"current"in a?l=a.current:l=a,l}}var st=function(a){var s=function(l,h,p){var w=g.useRef(!1),f=g.useRef([]),T=g.useRef([]),m=g.useRef();a(function(){var c,y=Array.isArray(p)?p:[p],R=y.map(function(x){return se(x)});if(!w.current){w.current=!0,f.current=R,T.current=h,m.current=l();return}(R.length!==f.current.length||!Ee(R,f.current)||!Ee(h,T.current))&&((c=m.current)===null||c===void 0||c.call(m),f.current=R,T.current=h,m.current=l())}),it(function(){var c;(c=m.current)===null||c===void 0||c.call(m),w.current=!1})};return s},ut=st(g.useEffect);const lt=ut;(function(){if(typeof window!="object")return;if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});return}function a(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch{return null}}var s=function(t){for(var r=t,i=a(r);i;)r=i.ownerDocument,i=a(r);return r}(window.document),l=[],h=null,p=null;function w(t){this.time=t.time,this.target=t.target,this.rootBounds=k(t.rootBounds),this.boundingClientRect=k(t.boundingClientRect),this.intersectionRect=k(t.intersectionRect||C()),this.isIntersecting=!!t.intersectionRect;var r=this.boundingClientRect,i=r.width*r.height,u=this.intersectionRect,d=u.width*u.height;i?this.intersectionRatio=Number((d/i).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0}function f(t,r){var i=r||{};if(typeof t!="function")throw new Error("callback must be a function");if(i.root&&i.root.nodeType!=1&&i.root.nodeType!=9)throw new Error("root must be a Document or Element");this._checkForIntersections=m(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(u){return u.value+u.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}f.prototype.THROTTLE_TIMEOUT=100,f.prototype.POLL_INTERVAL=null,f.prototype.USE_MUTATION_OBSERVER=!0,f._setupCrossOriginUpdater=function(){return h||(h=function(t,r){!t||!r?p=C():p=L(t,r),l.forEach(function(i){i._checkForIntersections()})}),h},f._resetCrossOriginUpdater=function(){h=null,p=null},f.prototype.observe=function(t){var r=this._observationTargets.some(function(i){return i.element==t});if(!r){if(!(t&&t.nodeType==1))throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(t.ownerDocument),this._checkForIntersections()}},f.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(r){return r.element!=t}),this._unmonitorIntersections(t.ownerDocument),this._observationTargets.length==0&&this._unregisterInstance()},f.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},f.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},f.prototype._initThresholds=function(t){var r=t||[0];return Array.isArray(r)||(r=[r]),r.sort().filter(function(i,u,d){if(typeof i!="number"||isNaN(i)||i<0||i>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return i!==d[u-1]})},f.prototype._parseRootMargin=function(t){var r=t||"0px",i=r.split(/\s+/).map(function(u){var d=/^(-?\d*\.?\d+)(px|%)$/.exec(u);if(!d)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(d[1]),unit:d[2]}});return i[1]=i[1]||i[0],i[2]=i[2]||i[0],i[3]=i[3]||i[1],i},f.prototype._monitorIntersections=function(t){var r=t.defaultView;if(r&&this._monitoringDocuments.indexOf(t)==-1){var i=this._checkForIntersections,u=null,d=null;this.POLL_INTERVAL?u=r.setInterval(i,this.POLL_INTERVAL):(c(r,"resize",i,!0),c(t,"scroll",i,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in r&&(d=new r.MutationObserver(i),d.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))),this._monitoringDocuments.push(t),this._monitoringUnsubscribes.push(function(){var j=t.defaultView;j&&(u&&j.clearInterval(u),y(j,"resize",i,!0)),y(t,"scroll",i,!0),d&&d.disconnect()});var P=this.root&&(this.root.ownerDocument||this.root)||s;if(t!=P){var D=a(t);D&&this._monitorIntersections(D.ownerDocument)}}},f.prototype._unmonitorIntersections=function(t){var r=this._monitoringDocuments.indexOf(t);if(r!=-1){var i=this.root&&(this.root.ownerDocument||this.root)||s,u=this._observationTargets.some(function(D){var j=D.element.ownerDocument;if(j==t)return!0;for(;j&&j!=i;){var W=a(j);if(j=W&&W.ownerDocument,j==t)return!0}return!1});if(!u){var d=this._monitoringUnsubscribes[r];if(this._monitoringDocuments.splice(r,1),this._monitoringUnsubscribes.splice(r,1),d(),t!=i){var P=a(t);P&&this._unmonitorIntersections(P.ownerDocument)}}}},f.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var r=0;r<t.length;r++)t[r]()},f.prototype._checkForIntersections=function(){if(!(!this.root&&h&&!p)){var t=this._rootIsInDom(),r=t?this._getRootRect():C();this._observationTargets.forEach(function(i){var u=i.element,d=x(u),P=this._rootContainsTarget(u),D=i.entry,j=t&&P&&this._computeTargetAndRootIntersection(u,d,r),W=null;this._rootContainsTarget(u)?(!h||this.root)&&(W=r):W=C();var z=i.entry=new w({time:T(),target:u,boundingClientRect:d,rootBounds:W,intersectionRect:j});D?t&&P?this._hasCrossedThreshold(D,z)&&this._queuedEntries.push(z):D&&D.isIntersecting&&this._queuedEntries.push(z):this._queuedEntries.push(z)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},f.prototype._computeTargetAndRootIntersection=function(t,r,i){if(window.getComputedStyle(t).display!="none"){for(var u=r,d=F(t),P=!1;!P&&d;){var D=null,j=d.nodeType==1?window.getComputedStyle(d):{};if(j.display=="none")return null;if(d==this.root||d.nodeType==9)if(P=!0,d==this.root||d==s)h&&!this.root?!p||p.width==0&&p.height==0?(d=null,D=null,u=null):D=p:D=i;else{var W=F(d),z=W&&x(W),U=W&&this._computeTargetAndRootIntersection(W,z,i);z&&U?(d=W,D=L(z,U)):(d=null,u=null)}else{var H=d.ownerDocument;d!=H.body&&d!=H.documentElement&&j.overflow!="visible"&&(D=x(d))}if(D&&(u=R(D,u)),!u)break;d=d&&F(d)}return u}},f.prototype._getRootRect=function(){var t;if(this.root&&!S(this.root))t=x(this.root);else{var r=S(this.root)?this.root:s,i=r.documentElement,u=r.body;t={top:0,left:0,right:i.clientWidth||u.clientWidth,width:i.clientWidth||u.clientWidth,bottom:i.clientHeight||u.clientHeight,height:i.clientHeight||u.clientHeight}}return this._expandRectByRootMargin(t)},f.prototype._expandRectByRootMargin=function(t){var r=this._rootMarginValues.map(function(u,d){return u.unit=="px"?u.value:u.value*(d%2?t.width:t.height)/100}),i={top:t.top-r[0],right:t.right+r[1],bottom:t.bottom+r[2],left:t.left-r[3]};return i.width=i.right-i.left,i.height=i.bottom-i.top,i},f.prototype._hasCrossedThreshold=function(t,r){var i=t&&t.isIntersecting?t.intersectionRatio||0:-1,u=r.isIntersecting?r.intersectionRatio||0:-1;if(i!==u)for(var d=0;d<this.thresholds.length;d++){var P=this.thresholds[d];if(P==i||P==u||P<i!=P<u)return!0}},f.prototype._rootIsInDom=function(){return!this.root||N(s,this.root)},f.prototype._rootContainsTarget=function(t){var r=this.root&&(this.root.ownerDocument||this.root)||s;return N(r,t)&&(!this.root||r==t.ownerDocument)},f.prototype._registerInstance=function(){l.indexOf(this)<0&&l.push(this)},f.prototype._unregisterInstance=function(){var t=l.indexOf(this);t!=-1&&l.splice(t,1)};function T(){return window.performance&&performance.now&&performance.now()}function m(t,r){var i=null;return function(){i||(i=setTimeout(function(){t(),i=null},r))}}function c(t,r,i,u){typeof t.addEventListener=="function"?t.addEventListener(r,i,u||!1):typeof t.attachEvent=="function"&&t.attachEvent("on"+r,i)}function y(t,r,i,u){typeof t.removeEventListener=="function"?t.removeEventListener(r,i,u||!1):typeof t.detachEvent=="function"&&t.detachEvent("on"+r,i)}function R(t,r){var i=Math.max(t.top,r.top),u=Math.min(t.bottom,r.bottom),d=Math.max(t.left,r.left),P=Math.min(t.right,r.right),D=P-d,j=u-i;return D>=0&&j>=0&&{top:i,bottom:u,left:d,right:P,width:D,height:j}||null}function x(t){var r;try{r=t.getBoundingClientRect()}catch{}return r?(r.width&&r.height||(r={top:r.top,right:r.right,bottom:r.bottom,left:r.left,width:r.right-r.left,height:r.bottom-r.top}),r):C()}function C(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function k(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function L(t,r){var i=r.top-t.top,u=r.left-t.left;return{top:i,left:u,height:r.height,width:r.width,bottom:i+r.height,right:u+r.width}}function N(t,r){for(var i=r;i;){if(i==t)return!0;i=F(i)}return!1}function F(t){var r=t.parentNode;return t.nodeType==9&&t!=s?a(t):(r&&r.assignedSlot&&(r=r.assignedSlot.parentNode),r&&r.nodeType==11&&r.host?r.host:r)}function S(t){return t&&t.nodeType===9}window.IntersectionObserver=f,window.IntersectionObserverEntry=w})();function we(a,s){var l=_e(g.useState(),2),h=l[0],p=l[1],w=_e(g.useState(),2),f=w[0],T=w[1];return lt(function(){var m=se(a);if(m){var c=new IntersectionObserver(function(y){var R,x;try{for(var C=$e(y),k=C.next();!k.done;k=C.next()){var L=k.value;T(L.intersectionRatio),p(L.isIntersecting)}}catch(N){R={error:N}}finally{try{k&&!k.done&&(x=C.return)&&x.call(C)}finally{if(R)throw R.error}}},$($({},s),{root:se(s==null?void 0:s.root)}));return c.observe(m),function(){c.disconnect()}}},[s==null?void 0:s.rootMargin,s==null?void 0:s.threshold],a),[h,f]}function ft({countEnters:a,onLoadMore:s,loadMore:l=!0,children:h}){const p=g.useRef(null),[w,f]=g.useState(0),[T]=we(p.current),{handleLoadMore:m,loading:c,initialLoadDone:y,hasNextPage:R}=g.useContext(ae);return g.useEffect(()=>{a&&T&&f(x=>x+1),y&&T&&l&&R&&(s??m)()},[T]),Y.jsx("div",{ref:p,children:h({handleLoadMore:m,loading:c,hasNextPage:R,enterCount:w})})}function ct({children:a,isReference:s}){const l=g.useRef(null),h=g.useRef(null),[p,w]=g.useState({width:0,height:0,isSet:!1}),{defaultHeight:f,defaultWidth:T,fixedSize:m,orientation:c,setDefaultWidth:y,setDefaultHeight:R,root:x,isSet:C}=g.useContext(be),[k]=we(l.current,{root:x,rootMargin:"100px"}),{width:L,height:N}=g.useMemo(()=>({width:c==="vertical"?void 0:m?T:p.width,height:c==="horizontal"?void 0:m?f:p.height}),[c,m,T,f,p]);g.useEffect(()=>{if(h.current){const{height:S,width:t}=h.current.getBoundingClientRect();w({width:t,height:S,isSet:!0})}},[]),g.useEffect(()=>{p.isSet&&s&&!C&&(y(p.width),R(p.height))},[p,C]);const F=g.useMemo(()=>m&&s&&!p.isSet&&!C||!m&&!p.isSet,[m,s,p,C]);return Y.jsx("div",{ref:l,style:{width:L,height:N},children:Y.jsxs(Y.Fragment,{children:[F&&Y.jsx("div",{ref:h,style:{visibility:"hidden",zIndex:-1e3,display:"flex"},children:a}),k&&a]})})}B.Data=Ze,B.List=qe,B.Trigger=ft,B.Windowed=ct,Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});