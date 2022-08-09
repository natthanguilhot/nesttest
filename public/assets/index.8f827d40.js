const ts=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ts();function Dr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ns="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rs=Dr(ns);function Ii(e){return!!e||e===""}function Br(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?os(r):Br(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(ne(e))return e}}const as=/;(?![^(]*\))/g,is=/:(.+)/;function os(e){const t={};return e.split(as).forEach(n=>{if(n){const r=n.split(is);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function me(e){let t="";if(te(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=me(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const K={},wt=[],Ae=()=>{},ss=()=>!1,ls=/^on[^a-z]/,Mn=e=>ls.test(e),Ur=e=>e.startsWith("onUpdate:"),ie=Object.assign,Hr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fs=Object.prototype.hasOwnProperty,B=(e,t)=>fs.call(e,t),j=Array.isArray,Dt=e=>Ln(e)==="[object Map]",cs=e=>Ln(e)==="[object Set]",R=e=>typeof e=="function",te=e=>typeof e=="string",Wr=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",Oi=e=>ne(e)&&R(e.then)&&R(e.catch),us=Object.prototype.toString,Ln=e=>us.call(e),ds=e=>Ln(e).slice(8,-1),ms=e=>Ln(e)==="[object Object]",Yr=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,pn=Dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$n=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ps=/-(\w)/g,Le=$n(e=>e.replace(ps,(t,n)=>n?n.toUpperCase():"")),gs=/\B([A-Z])/g,Ot=$n(e=>e.replace(gs,"-$1").toLowerCase()),Fn=$n(e=>e.charAt(0).toUpperCase()+e.slice(1)),rr=$n(e=>e?`on${Fn(e)}`:""),qt=(e,t)=>!Object.is(e,t),ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},wn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},hs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Oa;const vs=()=>Oa||(Oa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pe;class bs{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Pe&&(this.parent=Pe,this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ys(e,t=Pe){t&&t.active&&t.effects.push(e)}const Kr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ti=e=>(e.w&et)>0,Ei=e=>(e.n&et)>0,_s=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=et},xs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ti(a)&&!Ei(a)?a.delete(e):t[n++]=a,a.w&=~et,a.n&=~et}t.length=n}},dr=new WeakMap;let Rt=0,et=1;const mr=30;let _e;const ft=Symbol(""),pr=Symbol("");class qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ys(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Qe=!0,et=1<<++Rt,Rt<=mr?_s(this):Ta(this),this.fn()}finally{Rt<=mr&&xs(this),et=1<<--Rt,_e=this.parent,Qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Qe=!0;const Si=[];function Tt(){Si.push(Qe),Qe=!1}function Et(){const e=Si.pop();Qe=e===void 0?!0:e}function ge(e,t,n){if(Qe&&_e){let r=dr.get(e);r||dr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Kr()),Pi(a)}}function Pi(e,t){let n=!1;Rt<=mr?Ei(e)||(e.n|=et,n=!Ti(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function ze(e,t,n,r,a,i){const o=dr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?Yr(n)&&s.push(o.get("length")):(s.push(o.get(ft)),Dt(e)&&s.push(o.get(pr)));break;case"delete":j(e)||(s.push(o.get(ft)),Dt(e)&&s.push(o.get(pr)));break;case"set":Dt(e)&&s.push(o.get(ft));break}if(s.length===1)s[0]&&gr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);gr(Kr(l))}}function gr(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&Ea(r);for(const r of n)r.computed||Ea(r)}function Ea(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ws=Dr("__proto__,__v_isRef,__isVue"),Ni=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wr)),ks=Vr(),Cs=Vr(!1,!0),As=Vr(!0),Sa=Is();function Is(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)ge(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt();const r=H(this)[t].apply(this,n);return Et(),r}}),e}function Vr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Us:Ri:t?Fi:$i).get(r))return r;const o=j(r);if(!e&&o&&B(Sa,a))return Reflect.get(Sa,a,i);const s=Reflect.get(r,a,i);return(Wr(a)?Ni.has(a):ws(a))||(e||ge(r,"get",a),t)?s:ee(s)?o&&Yr(a)?s:s.value:ne(s)?e?ji(s):jn(s):s}}const Os=Mi(),Ts=Mi(!0);function Mi(e=!1){return function(n,r,a,i){let o=n[r];if(Vt(o)&&ee(o)&&!ee(a))return!1;if(!e&&!Vt(a)&&(hr(a)||(a=H(a),o=H(o)),!j(n)&&ee(o)&&!ee(a)))return o.value=a,!0;const s=j(n)&&Yr(r)?Number(r)<n.length:B(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?qt(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Es(e,t){const n=B(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Ss(e,t){const n=Reflect.has(e,t);return(!Wr(t)||!Ni.has(t))&&ge(e,"has",t),n}function Ps(e){return ge(e,"iterate",j(e)?"length":ft),Reflect.ownKeys(e)}const Li={get:ks,set:Os,deleteProperty:Es,has:Ss,ownKeys:Ps},Ns={get:As,set(e,t){return!0},deleteProperty(e,t){return!0}},Ms=ie({},Li,{get:Cs,set:Ts}),Xr=e=>e,Rn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&ge(a,"get",t),ge(a,"get",i));const{has:o}=Rn(a),s=r?Xr:n?Qr:Xt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function fn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&ge(r,"has",e),ge(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function cn(e,t=!1){return e=e.__v_raw,!t&&ge(H(e),"iterate",ft),Reflect.get(e,"size",e)}function Pa(e){e=H(e);const t=H(this);return Rn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Na(e,t){t=H(t);const n=H(this),{has:r,get:a}=Rn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?qt(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Ma(e){const t=H(this),{has:n,get:r}=Rn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function La(){const e=H(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Xr:e?Qr:Xt;return!e&&ge(s,"iterate",ft),o.forEach((c,u)=>r.call(a,l(c),l(u),i))}}function dn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=Dt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),u=n?Xr:t?Qr:Xt;return!t&&ge(i,"iterate",l?pr:ft),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:s?[u(m[0]),u(m[1])]:u(m),done:h}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function Ls(){const e={get(i){return ln(this,i)},get size(){return cn(this)},has:fn,add:Pa,set:Na,delete:Ma,clear:La,forEach:un(!1,!1)},t={get(i){return ln(this,i,!1,!0)},get size(){return cn(this)},has:fn,add:Pa,set:Na,delete:Ma,clear:La,forEach:un(!1,!0)},n={get(i){return ln(this,i,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:un(!0,!1)},r={get(i){return ln(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),t[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[e,n,t,r]}const[$s,Fs,Rs,js]=Ls();function Jr(e,t){const n=t?e?js:Rs:e?Fs:$s;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const zs={get:Jr(!1,!1)},Ds={get:Jr(!1,!0)},Bs={get:Jr(!0,!1)},$i=new WeakMap,Fi=new WeakMap,Ri=new WeakMap,Us=new WeakMap;function Hs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ws(e){return e.__v_skip||!Object.isExtensible(e)?0:Hs(ds(e))}function jn(e){return Vt(e)?e:Gr(e,!1,Li,zs,$i)}function Ys(e){return Gr(e,!1,Ms,Ds,Fi)}function ji(e){return Gr(e,!0,Ns,Bs,Ri)}function Gr(e,t,n,r,a){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ws(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Vt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function hr(e){return!!(e&&e.__v_isShallow)}function zi(e){return kt(e)||Vt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Di(e){return wn(e,"__v_skip",!0),e}const Xt=e=>ne(e)?jn(e):e,Qr=e=>ne(e)?ji(e):e;function Bi(e){Qe&&_e&&(e=H(e),Pi(e.dep||(e.dep=Kr())))}function Ui(e,t){e=H(e),e.dep&&gr(e.dep)}function ee(e){return!!(e&&e.__v_isRef===!0)}function ce(e){return Ks(e,!1)}function Ks(e,t){return ee(e)?e:new qs(e,t)}class qs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H(t),this._value=n?t:Xt(t)}get value(){return Bi(this),this._value}set value(t){t=this.__v_isShallow?t:H(t),qt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Xt(t),Ui(this))}}function Vs(e){return ee(e)?e.value:e}const Xs={get:(e,t,n)=>Vs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ee(a)&&!ee(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Hi(e){return kt(e)?e:new Proxy(e,Xs)}class Js{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new qr(t,()=>{this._dirty||(this._dirty=!0,Ui(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return Bi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Gs(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Js(r,a,i||!a,n)}function Ze(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){zn(i,t,n)}return a}function Ie(e,t,n,r){if(R(e)){const i=Ze(e,t,n,r);return i&&Oi(i)&&i.catch(o=>{zn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function zn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ze(l,null,10,[e,o,s]);return}}Qs(e,n,a,r)}function Qs(e,t,n,r=!0){console.error(e)}let kn=!1,vr=!1;const pe=[];let je=0;const Bt=[];let jt=null,bt=0;const Ut=[];let Ve=null,yt=0;const Wi=Promise.resolve();let Zr=null,br=null;function Zs(e){const t=Zr||Wi;return e?t.then(this?e.bind(this):e):t}function el(e){let t=je+1,n=pe.length;for(;t<n;){const r=t+n>>>1;Jt(pe[r])<e?t=r+1:n=r}return t}function Yi(e){(!pe.length||!pe.includes(e,kn&&e.allowRecurse?je+1:je))&&e!==br&&(e.id==null?pe.push(e):pe.splice(el(e.id),0,e),Ki())}function Ki(){!kn&&!vr&&(vr=!0,Zr=Wi.then(Xi))}function tl(e){const t=pe.indexOf(e);t>je&&pe.splice(t,1)}function qi(e,t,n,r){j(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ki()}function nl(e){qi(e,jt,Bt,bt)}function rl(e){qi(e,Ve,Ut,yt)}function Dn(e,t=null){if(Bt.length){for(br=t,jt=[...new Set(Bt)],Bt.length=0,bt=0;bt<jt.length;bt++)jt[bt]();jt=null,bt=0,br=null,Dn(e,t)}}function Vi(e){if(Dn(),Ut.length){const t=[...new Set(Ut)];if(Ut.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,r)=>Jt(n)-Jt(r)),yt=0;yt<Ve.length;yt++)Ve[yt]();Ve=null,yt=0}}const Jt=e=>e.id==null?1/0:e.id;function Xi(e){vr=!1,kn=!0,Dn(e),pe.sort((n,r)=>Jt(n)-Jt(r));const t=Ae;try{for(je=0;je<pe.length;je++){const n=pe[je];n&&n.active!==!1&&Ze(n,null,14)}}finally{je=0,pe.length=0,Vi(),kn=!1,Zr=null,(pe.length||Bt.length||Ut.length)&&Xi(e)}}function al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:h}=r[u]||K;h&&(a=n.map(I=>I.trim())),m&&(a=n.map(hs))}let s,l=r[s=rr(t)]||r[s=rr(Le(t))];!l&&i&&(l=r[s=rr(Ot(t))]),l&&Ie(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ie(c,e,6,a)}}function Ji(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=c=>{const u=Ji(c,t,!0);u&&(s=!0,ie(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(j(i)?i.forEach(l=>o[l]=null):ie(o,i),r.set(e,o),o)}function Bn(e,t){return!e||!Mn(t)?!1:(t=t.slice(2).replace(/Once$/,""),B(e,t[0].toLowerCase()+t.slice(1))||B(e,Ot(t))||B(e,t))}let we=null,Un=null;function Cn(e){const t=we;return we=e,Un=e&&e.type.__scopeId||null,t}function tn(e){Un=e}function nn(){Un=null}function il(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Wa(-1);const i=Cn(t),o=e(...a);return Cn(i),r._d&&Wa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:u,renderCache:m,data:h,setupState:I,ctx:F,inheritAttrs:z}=e;let M,_;const O=Cn(e);try{if(n.shapeFlag&4){const D=a||r;M=Ne(u.call(D,D,m,i,I,h,F)),_=l}else{const D=t;M=Ne(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),_=t.props?l:ol(l)}}catch(D){Ht.length=0,zn(D,e,1),M=E(ut)}let L=M;if(_&&z!==!1){const D=Object.keys(_),{shapeFlag:q}=L;D.length&&q&7&&(o&&D.some(Ur)&&(_=sl(_,o)),L=At(L,_))}return n.dirs&&(L=At(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),M=L,Cn(O),M}const ol=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mn(n))&&((t||(t={}))[n]=e[n]);return t},sl=(e,t)=>{const n={};for(const r in e)(!Ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ll(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$a(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const h=u[m];if(o[h]!==r[h]&&!Bn(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?$a(r,o,c):!0:!!o;return!1}function $a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Bn(n,i))return!0}return!1}function fl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const cl=e=>e.__isSuspense;function ul(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):rl(e)}function dl(e,t){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[e]=t}}function or(e,t,n=!1){const r=Z||we;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const Fa={};function gn(e,t,n){return Gi(e,t,n)}function Gi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=Z;let l,c=!1,u=!1;if(ee(e)?(l=()=>e.value,c=hr(e)):kt(e)?(l=()=>e,r=!0):j(e)?(u=!0,c=e.some(_=>kt(_)||hr(_)),l=()=>e.map(_=>{if(ee(_))return _.value;if(kt(_))return st(_);if(R(_))return Ze(_,s,2)})):R(e)?t?l=()=>Ze(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ie(e,s,3,[h])}:l=Ae,t&&r){const _=l;l=()=>st(_())}let m,h=_=>{m=M.onStop=()=>{Ze(_,s,4)}};if(Zt)return h=Ae,t?n&&Ie(t,s,3,[l(),u?[]:void 0,h]):l(),Ae;let I=u?[]:Fa;const F=()=>{if(!!M.active)if(t){const _=M.run();(r||c||(u?_.some((O,L)=>qt(O,I[L])):qt(_,I)))&&(m&&m(),Ie(t,s,3,[_,I===Fa?void 0:I,h]),I=_)}else M.run()};F.allowRecurse=!!t;let z;a==="sync"?z=F:a==="post"?z=()=>fe(F,s&&s.suspense):z=()=>nl(F);const M=new qr(l,z);return t?n?F():I=M.run():a==="post"?fe(M.run.bind(M),s&&s.suspense):M.run(),()=>{M.stop(),s&&s.scope&&Hr(s.scope.effects,M)}}function ml(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?Qi(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=Z;It(this);const s=Gi(a,i.bind(r),n);return o?It(o):ct(),s}function Qi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function st(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ee(e))st(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)st(e[n],t);else if(cs(e)||Dt(e))e.forEach(n=>{st(n,t)});else if(ms(e))for(const n in e)st(e[n],t);return e}function ea(e){return R(e)?{setup:e,name:e.name}:e}const hn=e=>!!e.type.__asyncLoader,Zi=e=>e.type.__isKeepAlive;function pl(e,t){eo(e,"a",t)}function gl(e,t){eo(e,"da",t)}function eo(e,t,n=Z){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Hn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Zi(a.parent.vnode)&&hl(r,t,n,a),a=a.parent}}function hl(e,t,n,r){const a=Hn(t,e,r,!0);Wn(()=>{Hr(r[t],a)},n)}function Hn(e,t,n=Z,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Tt(),It(n);const s=Ie(t,n,e,o);return ct(),Et(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=Z)=>(!Zt||e==="sp")&&Hn(e,t,n),vl=He("bm"),ta=He("m"),bl=He("bu"),yl=He("u"),_l=He("bum"),Wn=He("um"),xl=He("sp"),wl=He("rtg"),kl=He("rtc");function Cl(e,t=Z){Hn("ec",e,t)}function Xe(e,t){const n=we;if(n===null)return e;const r=Kn(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=K]=t[i];R(o)&&(o={mounted:o,updated:o}),o.deep&&st(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Tt(),Ie(l,n,8,[e.el,s,e,t]),Et())}}const to="components";function na(e,t){return Il(to,e,!0,t)||e}const Al=Symbol();function Il(e,t,n=!0,r=!1){const a=we||Z;if(a){const i=a.type;if(e===to){const s=nf(i,!1);if(s&&(s===t||s===Le(t)||s===Fn(Le(t))))return i}const o=Ra(a[e]||i[e],t)||Ra(a.appContext[e],t);return!o&&r?i:o}}function Ra(e,t){return e&&(e[t]||e[Le(t)]||e[Fn(Le(t))])}const yr=e=>e?ho(e)?Kn(e)||e.proxy:yr(e.parent):null,An=ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>ro(e),$forceUpdate:e=>e.f||(e.f=()=>Yi(e.update)),$nextTick:e=>e.n||(e.n=Zs.bind(e.proxy)),$watch:e=>ml.bind(e)}),Ol={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const I=o[t];if(I!==void 0)switch(I){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&B(r,t))return o[t]=1,r[t];if(a!==K&&B(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&B(c,t))return o[t]=3,i[t];if(n!==K&&B(n,t))return o[t]=4,n[t];_r&&(o[t]=0)}}const u=An[t];let m,h;if(u)return t==="$attrs"&&ge(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&B(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,B(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&B(a,t)?(a[t]=n,!0):r!==K&&B(r,t)?(r[t]=n,!0):B(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&B(e,o)||t!==K&&B(t,o)||(s=i[0])&&B(s,o)||B(r,o)||B(An,o)||B(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:B(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let _r=!0;function Tl(e){const t=ro(e),n=e.proxy,r=e.ctx;_r=!1,t.beforeCreate&&ja(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:u,beforeMount:m,mounted:h,beforeUpdate:I,updated:F,activated:z,deactivated:M,beforeDestroy:_,beforeUnmount:O,destroyed:L,unmounted:D,render:q,renderTracked:re,renderTriggered:ue,errorCaptured:Te,serverPrefetch:oe,expose:Pt,inheritAttrs:pt,components:Nt,directives:on,filters:xa}=t;if(c&&El(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Q in o){const V=o[Q];R(V)&&(r[Q]=V.bind(n))}if(a){const Q=a.call(n,n);ne(Q)&&(e.data=jn(Q))}if(_r=!0,i)for(const Q in i){const V=i[Q],$e=R(V)?V.bind(n,n):R(V.get)?V.get.bind(n,n):Ae,er=!R(V)&&R(V.set)?V.set.bind(n):Ae,Mt=be({get:$e,set:er});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:gt=>Mt.value=gt})}if(s)for(const Q in s)no(s[Q],r,n,Q);if(l){const Q=R(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(V=>{dl(V,Q[V])})}u&&ja(u,e,"c");function se(Q,V){j(V)?V.forEach($e=>Q($e.bind(n))):V&&Q(V.bind(n))}if(se(vl,m),se(ta,h),se(bl,I),se(yl,F),se(pl,z),se(gl,M),se(Cl,Te),se(kl,re),se(wl,ue),se(_l,O),se(Wn,D),se(xl,oe),j(Pt))if(Pt.length){const Q=e.exposed||(e.exposed={});Pt.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:$e=>n[V]=$e})})}else e.exposed||(e.exposed={});q&&e.render===Ae&&(e.render=q),pt!=null&&(e.inheritAttrs=pt),Nt&&(e.components=Nt),on&&(e.directives=on)}function El(e,t,n=Ae,r=!1){j(e)&&(e=xr(e));for(const a in e){const i=e[a];let o;ne(i)?"default"in i?o=or(i.from||a,i.default,!0):o=or(i.from||a):o=or(i),ee(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ja(e,t,n){Ie(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function no(e,t,n,r){const a=r.includes(".")?Qi(n,r):()=>n[r];if(te(e)){const i=t[e];R(i)&&gn(a,i)}else if(R(e))gn(a,e.bind(n));else if(ne(e))if(j(e))e.forEach(i=>no(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&gn(a,i,e)}}function ro(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>In(l,c,o,!0)),In(l,t,o)),i.set(t,l),l}function In(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&In(e,i,n,!0),a&&a.forEach(o=>In(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Sl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Sl={data:za,props:it,emits:it,methods:it,computed:it,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:it,directives:it,watch:Nl,provide:za,inject:Pl};function za(e,t){return t?e?function(){return ie(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Pl(e,t){return it(xr(e),xr(t))}function xr(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function it(e,t){return e?ie(ie(Object.create(null),e),t):t}function Nl(e,t){if(!e)return t;if(!t)return e;const n=ie(Object.create(null),e);for(const r in t)n[r]=ae(e[r],t[r]);return n}function Ml(e,t,n,r=!1){const a={},i={};wn(i,Yn,1),e.propsDefaults=Object.create(null),ao(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ys(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Ll(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let h=u[m];if(Bn(e.emitsOptions,h))continue;const I=t[h];if(l)if(B(i,h))I!==i[h]&&(i[h]=I,c=!0);else{const F=Le(h);a[F]=wr(l,s,F,I,e,!1)}else I!==i[h]&&(i[h]=I,c=!0)}}}else{ao(e,t,a,i)&&(c=!0);let u;for(const m in s)(!t||!B(t,m)&&((u=Ot(m))===m||!B(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=wr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!B(t,m)&&!0)&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function ao(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(pn(l))continue;const c=t[l];let u;a&&B(a,u=Le(l))?!i||!i.includes(u)?n[u]=c:(s||(s={}))[u]=c:Bn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||K;for(let u=0;u<i.length;u++){const m=i[u];n[m]=wr(a,l,m,c[m],e,!B(c,m))}}return o}function wr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(It(a),r=c[n]=l.call(null,t),ct())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ot(n))&&(r=!0))}return r}function io(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const u=m=>{l=!0;const[h,I]=io(m,t,!0);ie(o,h),I&&s.push(...I)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return r.set(e,wt),wt;if(j(i))for(let u=0;u<i.length;u++){const m=Le(i[u]);Da(m)&&(o[m]=K)}else if(i)for(const u in i){const m=Le(u);if(Da(m)){const h=i[u],I=o[m]=j(h)||R(h)?{type:h}:h;if(I){const F=Ha(Boolean,I.type),z=Ha(String,I.type);I[0]=F>-1,I[1]=z<0||F<z,(F>-1||B(I,"default"))&&s.push(m)}}}const c=[o,s];return r.set(e,c),c}function Da(e){return e[0]!=="$"}function Ba(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ua(e,t){return Ba(e)===Ba(t)}function Ha(e,t){return j(t)?t.findIndex(n=>Ua(n,e)):R(t)&&Ua(t,e)?0:-1}const oo=e=>e[0]==="_"||e==="$stable",ra=e=>j(e)?e.map(Ne):[Ne(e)],$l=(e,t,n)=>{if(t._n)return t;const r=il((...a)=>ra(t(...a)),n);return r._c=!1,r},so=(e,t,n)=>{const r=e._ctx;for(const a in e){if(oo(a))continue;const i=e[a];if(R(i))t[a]=$l(a,i,r);else if(i!=null){const o=ra(i);t[a]=()=>o}}},lo=(e,t)=>{const n=ra(t);e.slots.default=()=>n},Fl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),wn(t,"_",n)):so(t,e.slots={})}else e.slots={},t&&lo(e,t);wn(e.slots,Yn,1)},Rl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ie(a,t),!n&&s===1&&delete a._):(i=!t.$stable,so(t,a)),o=t}else t&&(lo(e,t),o={default:1});if(i)for(const s in a)!oo(s)&&!(s in o)&&delete a[s]};function fo(){return{app:null,config:{isNativeTag:ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jl=0;function zl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!ne(a)&&(a=null);const i=fo(),o=new Set;let s=!1;const l=i.app={_uid:jl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:af,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&R(c.install)?(o.add(c),c.install(l,...u)):R(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,m){if(!s){const h=E(r,a);return h.appContext=i,u&&t?t(h,c):e(h,c,m),s=!0,l._container=c,c.__vue_app__=l,Kn(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l}};return l}}function kr(e,t,n,r,a=!1){if(j(e)){e.forEach((h,I)=>kr(h,t&&(j(t)?t[I]:t),n,r,a));return}if(hn(r)&&!a)return;const i=r.shapeFlag&4?Kn(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(u[c]=null,B(m,c)&&(m[c]=null)):ee(c)&&(c.value=null)),R(l))Ze(l,s,12,[o,u]);else{const h=te(l),I=ee(l);if(h||I){const F=()=>{if(e.f){const z=h?u[l]:l.value;a?j(z)&&Hr(z,i):j(z)?z.includes(i)||z.push(i):h?(u[l]=[i],B(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else h?(u[l]=o,B(m,l)&&(m[l]=o)):I&&(l.value=o,e.k&&(u[e.k]=o))};o?(F.id=-1,fe(F,n)):F()}}}const fe=ul;function Dl(e){return Bl(e)}function Bl(e,t){const n=vs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:u,parentNode:m,nextSibling:h,setScopeId:I=Ae,cloneNode:F,insertStaticContent:z}=e,M=(f,d,p,b=null,v=null,w=null,C=!1,x=null,k=!!d.dynamicChildren)=>{if(f===d)return;f&&!$t(f,d)&&(b=sn(f),Ye(f,v,w,!0),f=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:y,ref:S,shapeFlag:T}=d;switch(y){case aa:_(f,d,p,b);break;case ut:O(f,d,p,b);break;case vn:f==null&&L(d,p,b,C);break;case Re:on(f,d,p,b,v,w,C,x,k);break;default:T&1?re(f,d,p,b,v,w,C,x,k):T&6?xa(f,d,p,b,v,w,C,x,k):(T&64||T&128)&&y.process(f,d,p,b,v,w,C,x,k,ht)}S!=null&&v&&kr(S,f&&f.ref,w,d||f,!d)},_=(f,d,p,b)=>{if(f==null)r(d.el=s(d.children),p,b);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},O=(f,d,p,b)=>{f==null?r(d.el=l(d.children||""),p,b):d.el=f.el},L=(f,d,p,b)=>{[f.el,f.anchor]=z(f.children,d,p,b,f.el,f.anchor)},D=({el:f,anchor:d},p,b)=>{let v;for(;f&&f!==d;)v=h(f),r(f,p,b),f=v;r(d,p,b)},q=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=h(f),a(f),f=p;a(d)},re=(f,d,p,b,v,w,C,x,k)=>{C=C||d.type==="svg",f==null?ue(d,p,b,v,w,C,x,k):Pt(f,d,v,w,C,x,k)},ue=(f,d,p,b,v,w,C,x)=>{let k,y;const{type:S,props:T,shapeFlag:P,transition:$,patchFlag:U,dirs:W}=f;if(f.el&&F!==void 0&&U===-1)k=f.el=F(f.el);else{if(k=f.el=o(f.type,w,T&&T.is,T),P&8?u(k,f.children):P&16&&oe(f.children,k,null,b,v,w&&S!=="foreignObject",C,x),W&&rt(f,null,b,"created"),T){for(const X in T)X!=="value"&&!pn(X)&&i(k,X,null,T[X],w,f.children,b,v,Fe);"value"in T&&i(k,"value",null,T.value),(y=T.onVnodeBeforeMount)&&Se(y,b,f)}Te(k,f,f.scopeId,C,b)}W&&rt(f,null,b,"beforeMount");const Y=(!v||v&&!v.pendingBranch)&&$&&!$.persisted;Y&&$.beforeEnter(k),r(k,d,p),((y=T&&T.onVnodeMounted)||Y||W)&&fe(()=>{y&&Se(y,b,f),Y&&$.enter(k),W&&rt(f,null,b,"mounted")},v)},Te=(f,d,p,b,v)=>{if(p&&I(f,p),b)for(let w=0;w<b.length;w++)I(f,b[w]);if(v){let w=v.subTree;if(d===w){const C=v.vnode;Te(f,C,C.scopeId,C.slotScopeIds,v.parent)}}},oe=(f,d,p,b,v,w,C,x,k=0)=>{for(let y=k;y<f.length;y++){const S=f[y]=x?Ge(f[y]):Ne(f[y]);M(null,S,d,p,b,v,w,C,x)}},Pt=(f,d,p,b,v,w,C)=>{const x=d.el=f.el;let{patchFlag:k,dynamicChildren:y,dirs:S}=d;k|=f.patchFlag&16;const T=f.props||K,P=d.props||K;let $;p&&at(p,!1),($=P.onVnodeBeforeUpdate)&&Se($,p,d,f),S&&rt(d,f,p,"beforeUpdate"),p&&at(p,!0);const U=v&&d.type!=="foreignObject";if(y?pt(f.dynamicChildren,y,x,p,b,U,w):C||$e(f,d,x,null,p,b,U,w,!1),k>0){if(k&16)Nt(x,d,T,P,p,b,v);else if(k&2&&T.class!==P.class&&i(x,"class",null,P.class,v),k&4&&i(x,"style",T.style,P.style,v),k&8){const W=d.dynamicProps;for(let Y=0;Y<W.length;Y++){const X=W[Y],ye=T[X],vt=P[X];(vt!==ye||X==="value")&&i(x,X,ye,vt,v,f.children,p,b,Fe)}}k&1&&f.children!==d.children&&u(x,d.children)}else!C&&y==null&&Nt(x,d,T,P,p,b,v);(($=P.onVnodeUpdated)||S)&&fe(()=>{$&&Se($,p,d,f),S&&rt(d,f,p,"updated")},b)},pt=(f,d,p,b,v,w,C)=>{for(let x=0;x<d.length;x++){const k=f[x],y=d[x],S=k.el&&(k.type===Re||!$t(k,y)||k.shapeFlag&70)?m(k.el):p;M(k,y,S,null,b,v,w,C,!0)}},Nt=(f,d,p,b,v,w,C)=>{if(p!==b){for(const x in b){if(pn(x))continue;const k=b[x],y=p[x];k!==y&&x!=="value"&&i(f,x,y,k,C,d.children,v,w,Fe)}if(p!==K)for(const x in p)!pn(x)&&!(x in b)&&i(f,x,p[x],null,C,d.children,v,w,Fe);"value"in b&&i(f,"value",p.value,b.value)}},on=(f,d,p,b,v,w,C,x,k)=>{const y=d.el=f?f.el:s(""),S=d.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:P,slotScopeIds:$}=d;$&&(x=x?x.concat($):$),f==null?(r(y,p,b),r(S,p,b),oe(d.children,p,S,v,w,C,x,k)):T>0&&T&64&&P&&f.dynamicChildren?(pt(f.dynamicChildren,P,p,v,w,C,x),(d.key!=null||v&&d===v.subTree)&&co(f,d,!0)):$e(f,d,p,S,v,w,C,x,k)},xa=(f,d,p,b,v,w,C,x,k)=>{d.slotScopeIds=x,f==null?d.shapeFlag&512?v.ctx.activate(d,p,b,C,k):Zn(d,p,b,v,w,C,k):se(f,d,k)},Zn=(f,d,p,b,v,w,C)=>{const x=f.component=Gl(f,b,v);if(Zi(f)&&(x.ctx.renderer=ht),Ql(x),x.asyncDep){if(v&&v.registerDep(x,Q),!f.el){const k=x.subTree=E(ut);O(null,k,d,p)}return}Q(x,f,d,p,v,w,C)},se=(f,d,p)=>{const b=d.component=f.component;if(ll(f,d,p))if(b.asyncDep&&!b.asyncResolved){V(b,d,p);return}else b.next=d,tl(b.update),b.update();else d.el=f.el,b.vnode=d},Q=(f,d,p,b,v,w,C)=>{const x=()=>{if(f.isMounted){let{next:S,bu:T,u:P,parent:$,vnode:U}=f,W=S,Y;at(f,!1),S?(S.el=U.el,V(f,S,C)):S=U,T&&ar(T),(Y=S.props&&S.props.onVnodeBeforeUpdate)&&Se(Y,$,S,U),at(f,!0);const X=ir(f),ye=f.subTree;f.subTree=X,M(ye,X,m(ye.el),sn(ye),f,v,w),S.el=X.el,W===null&&fl(f,X.el),P&&fe(P,v),(Y=S.props&&S.props.onVnodeUpdated)&&fe(()=>Se(Y,$,S,U),v)}else{let S;const{el:T,props:P}=d,{bm:$,m:U,parent:W}=f,Y=hn(d);if(at(f,!1),$&&ar($),!Y&&(S=P&&P.onVnodeBeforeMount)&&Se(S,W,d),at(f,!0),T&&nr){const X=()=>{f.subTree=ir(f),nr(T,f.subTree,f,v,null)};Y?d.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=ir(f);M(null,X,p,b,f,v,w),d.el=X.el}if(U&&fe(U,v),!Y&&(S=P&&P.onVnodeMounted)){const X=d;fe(()=>Se(S,W,X),v)}(d.shapeFlag&256||W&&hn(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&fe(f.a,v),f.isMounted=!0,d=p=b=null}},k=f.effect=new qr(x,()=>Yi(y),f.scope),y=f.update=()=>k.run();y.id=f.uid,at(f,!0),y()},V=(f,d,p)=>{d.component=f;const b=f.vnode.props;f.vnode=d,f.next=null,Ll(f,d.props,b,p),Rl(f,d.children,p),Tt(),Dn(void 0,f.update),Et()},$e=(f,d,p,b,v,w,C,x,k=!1)=>{const y=f&&f.children,S=f?f.shapeFlag:0,T=d.children,{patchFlag:P,shapeFlag:$}=d;if(P>0){if(P&128){Mt(y,T,p,b,v,w,C,x,k);return}else if(P&256){er(y,T,p,b,v,w,C,x,k);return}}$&8?(S&16&&Fe(y,v,w),T!==y&&u(p,T)):S&16?$&16?Mt(y,T,p,b,v,w,C,x,k):Fe(y,v,w,!0):(S&8&&u(p,""),$&16&&oe(T,p,b,v,w,C,x,k))},er=(f,d,p,b,v,w,C,x,k)=>{f=f||wt,d=d||wt;const y=f.length,S=d.length,T=Math.min(y,S);let P;for(P=0;P<T;P++){const $=d[P]=k?Ge(d[P]):Ne(d[P]);M(f[P],$,p,null,v,w,C,x,k)}y>S?Fe(f,v,w,!0,!1,T):oe(d,p,b,v,w,C,x,k,T)},Mt=(f,d,p,b,v,w,C,x,k)=>{let y=0;const S=d.length;let T=f.length-1,P=S-1;for(;y<=T&&y<=P;){const $=f[y],U=d[y]=k?Ge(d[y]):Ne(d[y]);if($t($,U))M($,U,p,null,v,w,C,x,k);else break;y++}for(;y<=T&&y<=P;){const $=f[T],U=d[P]=k?Ge(d[P]):Ne(d[P]);if($t($,U))M($,U,p,null,v,w,C,x,k);else break;T--,P--}if(y>T){if(y<=P){const $=P+1,U=$<S?d[$].el:b;for(;y<=P;)M(null,d[y]=k?Ge(d[y]):Ne(d[y]),p,U,v,w,C,x,k),y++}}else if(y>P)for(;y<=T;)Ye(f[y],v,w,!0),y++;else{const $=y,U=y,W=new Map;for(y=U;y<=P;y++){const de=d[y]=k?Ge(d[y]):Ne(d[y]);de.key!=null&&W.set(de.key,y)}let Y,X=0;const ye=P-U+1;let vt=!1,Ca=0;const Lt=new Array(ye);for(y=0;y<ye;y++)Lt[y]=0;for(y=$;y<=T;y++){const de=f[y];if(X>=ye){Ye(de,v,w,!0);continue}let Ee;if(de.key!=null)Ee=W.get(de.key);else for(Y=U;Y<=P;Y++)if(Lt[Y-U]===0&&$t(de,d[Y])){Ee=Y;break}Ee===void 0?Ye(de,v,w,!0):(Lt[Ee-U]=y+1,Ee>=Ca?Ca=Ee:vt=!0,M(de,d[Ee],p,null,v,w,C,x,k),X++)}const Aa=vt?Ul(Lt):wt;for(Y=Aa.length-1,y=ye-1;y>=0;y--){const de=U+y,Ee=d[de],Ia=de+1<S?d[de+1].el:b;Lt[y]===0?M(null,Ee,p,Ia,v,w,C,x,k):vt&&(Y<0||y!==Aa[Y]?gt(Ee,p,Ia,2):Y--)}}},gt=(f,d,p,b,v=null)=>{const{el:w,type:C,transition:x,children:k,shapeFlag:y}=f;if(y&6){gt(f.component.subTree,d,p,b);return}if(y&128){f.suspense.move(d,p,b);return}if(y&64){C.move(f,d,p,ht);return}if(C===Re){r(w,d,p);for(let T=0;T<k.length;T++)gt(k[T],d,p,b);r(f.anchor,d,p);return}if(C===vn){D(f,d,p);return}if(b!==2&&y&1&&x)if(b===0)x.beforeEnter(w),r(w,d,p),fe(()=>x.enter(w),v);else{const{leave:T,delayLeave:P,afterLeave:$}=x,U=()=>r(w,d,p),W=()=>{T(w,()=>{U(),$&&$()})};P?P(w,U,W):W()}else r(w,d,p)},Ye=(f,d,p,b=!1,v=!1)=>{const{type:w,props:C,ref:x,children:k,dynamicChildren:y,shapeFlag:S,patchFlag:T,dirs:P}=f;if(x!=null&&kr(x,null,p,f,!0),S&256){d.ctx.deactivate(f);return}const $=S&1&&P,U=!hn(f);let W;if(U&&(W=C&&C.onVnodeBeforeUnmount)&&Se(W,d,f),S&6)es(f.component,p,b);else{if(S&128){f.suspense.unmount(p,b);return}$&&rt(f,null,d,"beforeUnmount"),S&64?f.type.remove(f,d,p,v,ht,b):y&&(w!==Re||T>0&&T&64)?Fe(y,d,p,!1,!0):(w===Re&&T&384||!v&&S&16)&&Fe(k,d,p),b&&wa(f)}(U&&(W=C&&C.onVnodeUnmounted)||$)&&fe(()=>{W&&Se(W,d,f),$&&rt(f,null,d,"unmounted")},p)},wa=f=>{const{type:d,el:p,anchor:b,transition:v}=f;if(d===Re){Zo(p,b);return}if(d===vn){q(f);return}const w=()=>{a(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:x}=v,k=()=>C(p,w);x?x(f.el,w,k):k()}else w()},Zo=(f,d)=>{let p;for(;f!==d;)p=h(f),a(f),f=p;a(d)},es=(f,d,p)=>{const{bum:b,scope:v,update:w,subTree:C,um:x}=f;b&&ar(b),v.stop(),w&&(w.active=!1,Ye(C,f,d,p)),x&&fe(x,d),fe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Fe=(f,d,p,b=!1,v=!1,w=0)=>{for(let C=w;C<f.length;C++)Ye(f[C],d,p,b,v)},sn=f=>f.shapeFlag&6?sn(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),ka=(f,d,p)=>{f==null?d._vnode&&Ye(d._vnode,null,null,!0):M(d._vnode||null,f,d,null,null,null,p),Vi(),d._vnode=f},ht={p:M,um:Ye,m:gt,r:wa,mt:Zn,mc:oe,pc:$e,pbc:pt,n:sn,o:e};let tr,nr;return t&&([tr,nr]=t(ht)),{render:ka,hydrate:tr,createApp:zl(ka,tr)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function co(e,t,n=!1){const r=e.children,a=t.children;if(j(r)&&j(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ge(a[i]),s.el=o.el),n||co(o,s))}}function Ul(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Hl=e=>e.__isTeleport,Re=Symbol(void 0),aa=Symbol(void 0),ut=Symbol(void 0),vn=Symbol(void 0),Ht=[];let ke=null;function he(e=!1){Ht.push(ke=e?null:[])}function Wl(){Ht.pop(),ke=Ht[Ht.length-1]||null}let Gt=1;function Wa(e){Gt+=e}function uo(e){return e.dynamicChildren=Gt>0?ke||wt:null,Wl(),Gt>0&&ke&&ke.push(e),e}function Oe(e,t,n,r,a,i){return uo(g(e,t,n,r,a,i,!0))}function mo(e,t,n,r,a){return uo(E(e,t,n,r,a,!0))}function Cr(e){return e?e.__v_isVNode===!0:!1}function $t(e,t){return e.type===t.type&&e.key===t.key}const Yn="__vInternal",po=({key:e})=>e!=null?e:null,bn=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||ee(e)||R(e)?{i:we,r:e,k:t,f:!!n}:e:null;function g(e,t=null,n=null,r=0,a=null,i=e===Re?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&po(t),ref:t&&bn(t),scopeId:Un,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(ia(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Gt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const E=Yl;function Yl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Al)&&(e=ut),Cr(e)){const s=At(e,t,!0);return n&&ia(s,n),Gt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(rf(e)&&(e=e.__vccOpts),t){t=Kl(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=me(s)),ne(l)&&(zi(l)&&!j(l)&&(l=ie({},l)),t.style=Br(l))}const o=te(e)?1:cl(e)?128:Hl(e)?64:ne(e)?4:R(e)?2:0;return g(e,t,n,r,a,o,i,!0)}function Kl(e){return e?zi(e)||Yn in e?ie({},e):e:null}function At(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Vl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&po(s),ref:t&&t.ref?n&&a?j(a)?a.concat(bn(t)):[a,bn(t)]:bn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor}}function Qt(e=" ",t=0){return E(aa,null,e,t)}function ql(e,t){const n=E(vn,null,e);return n.staticCount=t,n}function go(e="",t=!1){return t?(he(),mo(ut,null,e)):E(ut,null,e)}function Ne(e){return e==null||typeof e=="boolean"?E(ut):j(e)?E(Re,null,e.slice()):typeof e=="object"?Ge(e):E(aa,null,String(e))}function Ge(e){return e.el===null||e.memo?e:At(e)}function ia(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ia(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Yn in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[Qt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Vl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=me([t.class,r.class]));else if(a==="style")t.style=Br([t.style,r.style]);else if(Mn(a)){const i=t[a],o=r[a];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ie(e,t,7,[n,r])}const Xl=fo();let Jl=0;function Gl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Xl,i={uid:Jl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:io(r,a),emitsOptions:Ji(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=al.bind(null,i),e.ce&&e.ce(i),i}let Z=null;const It=e=>{Z=e,e.scope.on()},ct=()=>{Z&&Z.scope.off(),Z=null};function ho(e){return e.vnode.shapeFlag&4}let Zt=!1;function Ql(e,t=!1){Zt=t;const{props:n,children:r}=e.vnode,a=ho(e);Ml(e,n,a,t),Fl(e,r);const i=a?Zl(e,t):void 0;return Zt=!1,i}function Zl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Di(new Proxy(e.ctx,Ol));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?tf(e):null;It(e),Tt();const i=Ze(r,e,0,[e.props,a]);if(Et(),ct(),Oi(i)){if(i.then(ct,ct),t)return i.then(o=>{Ya(e,o,t)}).catch(o=>{zn(o,e,0)});e.asyncDep=i}else Ya(e,i,t)}else vo(e,t)}function Ya(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=Hi(t)),vo(e,n)}let Ka;function vo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ka&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ie(ie({isCustomElement:i,delimiters:s},o),l);r.render=Ka(a,c)}}e.render=r.render||Ae}It(e),Tt(),Tl(e),Et(),ct()}function ef(e){return new Proxy(e.attrs,{get(t,n){return ge(e,"get","$attrs"),t[n]}})}function tf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ef(e))},slots:e.slots,emit:e.emit,expose:t}}function Kn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Hi(Di(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in An)return An[n](e)}}))}function nf(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function rf(e){return R(e)&&"__vccOpts"in e}const be=(e,t)=>Gs(e,t,Zt);function bo(e,t,n){const r=arguments.length;return r===2?ne(t)&&!j(t)?Cr(t)?E(e,null,[t]):E(e,t):E(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cr(n)&&(n=[n]),E(e,t,n))}const af="3.2.37",of="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,qa=ot&&ot.createElement("template"),sf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(of,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function lf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ff(e,t,n){const r=e.style,a=te(n);if(n&&!a){for(const i in n)Ar(r,i,n[i]);if(t&&!te(t))for(const i in t)n[i]==null&&Ar(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Va=/\s*!important$/;function Ar(e,t,n){if(j(n))n.forEach(r=>Ar(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=cf(e,t);Va.test(n)?e.setProperty(Ot(r),n.replace(Va,""),"important"):e[r]=n}}const Xa=["Webkit","Moz","ms"],sr={};function cf(e,t){const n=sr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return sr[t]=r;r=Fn(r);for(let a=0;a<Xa.length;a++){const i=Xa[a]+r;if(i in e)return sr[t]=i}return t}const Ja="http://www.w3.org/1999/xlink";function uf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ja,t.slice(6,t.length)):e.setAttributeNS(Ja,t,n);else{const i=rs(t);n==null||i&&!Ii(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function df(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ii(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[yo,mf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Ir=0;const pf=Promise.resolve(),gf=()=>{Ir=0},hf=()=>Ir||(pf.then(gf),Ir=yo());function vf(e,t,n,r){e.addEventListener(t,n,r)}function bf(e,t,n,r){e.removeEventListener(t,n,r)}function yf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=_f(t);if(r){const c=i[t]=xf(r,a);vf(e,s,c,l)}else o&&(bf(e,s,o,l),i[t]=void 0)}}const Ga=/(?:Once|Passive|Capture)$/;function _f(e){let t;if(Ga.test(e)){t={};let n;for(;n=e.match(Ga);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Ot(e.slice(2)),t]}function xf(e,t){const n=r=>{const a=r.timeStamp||yo();(mf||a>=n.attached-1)&&Ie(wf(r,n.value),t,5,[r])};return n.value=e,n.attached=hf(),n}function wf(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Qa=/^on[a-z]/,kf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?lf(e,r,a):t==="style"?ff(e,n,r):Mn(t)?Ur(t)||yf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Cf(e,t,r,a))?df(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),uf(e,t,r,a))};function Cf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Qa.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Qa.test(t)&&te(n)?!1:t in e}const Je={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Ft(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ft(e,!0),r.enter(e)):r.leave(e,()=>{Ft(e,!1)}):Ft(e,t))},beforeUnmount(e,{value:t}){Ft(e,t)}};function Ft(e,t){e.style.display=t?e._vod:"none"}const Af=ie({patchProp:kf},sf);let Za;function If(){return Za||(Za=Dl(Af))}const Of=(...e)=>{const t=If().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Tf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Tf(e){return te(e)?document.querySelector(e):e}const Ef="/assets/Agoraverse-Experience.89b7b2f2.mp4";const rn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Sf=e=>(tn("data-v-ceb7bca8"),e=e(),nn(),e),Pf={class:"h-screen w-full absolute top-0 left-0 z-20"},Nf=Sf(()=>g("source",{src:Ef,class:"h-screen w-screen"},null,-1)),Mf=[Nf],Lf={class:"absolute lg:bottom-10 bottom-11 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center text-xl"},$f={class:"cursor-pointer hidden lg:flex"},Ff={class:"h-10 w-10 lg:h-12 lg:w-12 border border-white rounded-full flex justify-center items-center mr-1 sm:mr-3"},Rf=Qt(" PAUSE "),jf={class:"h-10 w-10 lg:h-12 lg:w-12 border border-white rounded-full flex justify-center items-center mr-1 sm:mr-3"},zf=Qt(" PLAY "),Df={id:"chaptersDesktop",class:"w-10/12 lg:justify-around hidden lg:flex"},Bf={id:"chaptersMobile",class:"flex lg:hidden justify-between item-center w-full pl-5 h-auto"},Uf={class:"w-8/12 flex justify-start items-center"},Hf={class:"flex w-4/12 space-x-2"},Wf={__name:"Slides",setup(e){const t=ce(null),n=ce(null),r=ce(null),a=jn({isPlaying:!0,isFinished:!1,videoDuration:0,videoCurrentTime:0});function i(c){n.value.currentTime=c,a.videoCurrentTime=c}function o(){a.isFinished?(a.isPlaying=!0,a.isFinished=!1,n.value.play()):(a.isPlaying=!a.isPlaying,a.isPlaying?n.value.play():n.value.pause())}ta(()=>{n.value.onloadedmetadata=function(){a.videoDuration=n.value.duration}});const s=setInterval(()=>{a.isPlaying&&(t.value.style.width=`${n.value.currentTime*100/n.value.duration}%`,a.videoCurrentTime=n.value.currentTime,a.videoCurrentTime===a.videoDuration&&(a.isFinished=!0,a.isPlaying=!1))},100);Wn(()=>clearInterval(s));function l(){const c=window.innerWidth,m=(event.clientX-r.value.offsetLeft)*100/c;n.value.currentTime=m*n.value.duration/100,a.videoCurrentTime=n.value.currentTime,t.value.style.width=`${n.value.currentTime*100/n.value.duration}%`,n.value.play(),a.isPlaying=!0}return(c,u)=>{const m=na("font-awesome-icon");return he(),Oe("section",Pf,[g("video",{id:"video",preload:"auto",muted:"true",autoplay:"",ref_key:"refVideo",ref:n,class:"h-screen w-screen object-cover",type:"video/mp4"},Mf,512),g("div",Lf,[g("div",$f,[Xe(g("div",{class:"flex justify-center items-center animate__animated animate__fadeIn w-32",onClick:u[0]||(u[0]=h=>o())},[g("div",Ff,[E(m,{icon:"fa-solid fa-pause"})]),Rf],512),[[Je,a.isPlaying===!0&&a.isFinished===!1]]),Xe(g("div",{class:"flex justify-center items-center animate__animated animate__fadeIn w-32",onClick:u[1]||(u[1]=h=>o())},[g("div",jf,[E(m,{icon:"fa-solid fa-play"})]),zf],512),[[Je,a.isPlaying===!1||a.isFinished===!0]])]),g("div",Df,[g("h2",{onClick:u[2]||(u[2]=h=>i(0)),class:me([[a.videoCurrentTime>0&&a.videoCurrentTime<5?"current_part text-main":null],"relative cursor-pointer"])}," A gap in the Metaverse ",2),g("h2",{onClick:u[3]||(u[3]=h=>i(5)),class:me([[a.videoCurrentTime>5&&a.videoCurrentTime<10?"current_part text-main":null],"relative cursor-pointer"])}," Introducing Agoraverse ",2),g("h2",{onClick:u[4]||(u[4]=h=>i(10)),class:me([[a.videoCurrentTime>10&&a.videoCurrentTime<15?"current_part text-main":null],"relative cursor-pointer"])}," Metashops ",2),g("h2",{onClick:u[5]||(u[5]=h=>i(15)),class:me([[a.videoCurrentTime>15&&a.videoCurrentTime<20?"current_part text-main":null],"relative cursor-pointer"])}," Builder tool ",2),g("h2",{onClick:u[6]||(u[6]=h=>i(28)),class:me([[a.videoCurrentTime>20?"current_part text-main":null],"relative cursor-pointer"])}," Book a demo ",2)]),g("div",Bf,[g("div",Uf,[Xe(g("h2",null,"A gap in the Metaverse",512),[[Je,a.videoCurrentTime>0&&a.videoCurrentTime<=5]]),Xe(g("h2",null,"Introducing Agoraverse",512),[[Je,a.videoCurrentTime>=5&&a.videoCurrentTime<=10]]),Xe(g("h2",null,"Metashops",512),[[Je,a.videoCurrentTime>=10&&a.videoCurrentTime<=15]]),Xe(g("h2",null,"Builder tool",512),[[Je,a.videoCurrentTime>=15&&a.videoCurrentTime<=20]]),Xe(g("h2",null,"Book a demo",512),[[Je,a.videoCurrentTime>=20&&a.videoCurrentTime<=25]])]),g("div",Hf,[g("div",{onClick:u[7]||(u[7]=h=>i(a.videoCurrentTime-10)),class:me(["h-10 w-10 border border-white flex justify-center items-center rounded-full",[a.videoCurrentTime==0?"border-gray-400 text-gray-400":null]])},[E(m,{icon:"fa-solid fa-arrow-left-long"})],2),g("div",{onClick:u[8]||(u[8]=h=>i(a.videoCurrentTime+10)),class:me(["h-10 w-10 border border-white flex justify-center items-center rounded-full",[a.videoCurrentTime==30?"border-gray-400 text-gray-400":null]])},[E(m,{icon:"fa-solid fa-arrow-right-long"})],2)])])]),g("div",{id:"loadingBar",ref_key:"refDivProgress",ref:r,onClick:u[9]||(u[9]=h=>l()),class:"absolute bottom-0 left-0 w-full h-4 bg-white cursor-pointer"},null,512),g("div",{id:"loadingProgressBar",ref_key:"refLoadingBar",ref:t,onClick:u[10]||(u[10]=h=>l()),class:"absolute bottom-0 left-0 w-full h-4 bg-white transition-all ease-linear cursor-pointer"},null,512)])}}},Yf=rn(Wf,[["__scopeId","data-v-ceb7bca8"]]),Kf="/assets/arrow.f2995f80.svg",qf="/assets/talked-about-bar-BW.2b870656.png",Vf="/assets/talked-about-bar-BW-mobile.da701865.png";const Xf={},qn=e=>(tn("data-v-8ad58346"),e=e(),nn(),e),Jf={class:"bg-black w-full relative bottom-0 flex flex-col justify-center items-center lg:p-0 mb-8"},Gf={class:"flex flex-col md:flex-row justify-center sm:justify-between lg:justify-around items-start w-full space-x-8 space-y-8"},Qf={class:"md:!w-2/12 sm:!w-4/12 !mb-10 lg:mb-0 aboutus"},Zf=qn(()=>g("h3",null,"ABOUT US",-1)),ec={class:"mt-6"},tc=qn(()=>g("p",{class:"lg:text-xl text-xs"},"Agoraverse is a platform you can use to create amazing 3D online stores in Web 3.0 fashion.",-1)),nc={class:"text-main lg:text-xl mt-12 hidden md:flex"},rc={class:"flex space-x-3"},ac={rel:"noopener",target:"_blank",href:"https://twitter.com/lofts_club"},ic={rel:"noopener",target:"_blank",href:"https://discord.gg/uDhAsNvQ5H"},oc={rel:"noopener",target:"_blank",href:"https://www.youtube.com/channel/UCNiMQSHGVZEGtPzjT7OzbEQ"},sc={rel:"noopener",target:"_blank",href:"https://instagram.com/agoraverse_"},lc=ql('<div class="lg:w-auto !mb-10 lg:mb-0" data-v-8ad58346><h3 data-v-8ad58346>RESOURCES</h3><ul class="space-y-4 text-[#999] lg:text-xl font-bold text-xs mt-6" data-v-8ad58346><li data-v-8ad58346><a rel="noopener" target="_blank" href="https://agoraverse.org/wp-content/uploads/2022/05/Whitepaper-Agoraverse-1.pdf" data-v-8ad58346>Whitepaper</a></li><li data-v-8ad58346><a rel="noopener" target="_blank" href="https://medium.com/@theloftsbusinessclub/tokenomics-b8704d283bca" data-v-8ad58346>Tokenomics</a></li><li data-v-8ad58346><a rel="noopener" target="_blank" href="https://medium.com/@theloftsbusinessclub/frequently-asked-questions-a899c6178ad2" data-v-8ad58346>FAQ</a></li><li data-v-8ad58346><a rel="noopener" target="_blank" href="https://app.agoraverse.org/staking" data-v-8ad58346>Staking</a></li></ul></div>',1),fc=qn(()=>g("div",{id:"newsletteForm",class:"lg:w-auto w-full sm:w-4/12 lg:mb-0"},[g("div",{id:"mlb2-970719",class:"ml-form-embedContainer ml-subscribe-form ml-subscribe-form-970719"},[g("div",{class:"ml-form-align-center"},[g("div",{class:"ml-form-embedWrapper embedForm !w-full max-w-none !bg-black"},[g("div",{class:"ml-form-embedBody ml-form-embedBodyDefault row-form !p-0"},[g("div",{class:"ml-form-embedContent"},[g("h3",{class:"!text-white"},"SUBSCRIBE TO OUR NEWSLETTER")]),g("form",{class:"ml-block-form relative !w-[300px] sm:!w-[245px] lg:!w-[308px]",action:"https://assets.mailerlite.com/jsonp/90605/forms/61611010344092687/subscribe","data-code":"",method:"post",target:"_blank"},[g("div",{class:"ml-form-formContent"},[g("div",{class:"ml-form-fieldRow ml-last-item"},[g("div",{class:"ml-field-group ml-field-email ml-validate-email ml-validate-required"},[g("input",{"aria-label":"email","aria-required":"true",type:"email",class:"form-control !text-[#A8A8A8] !outline-none","data-inputmask":"",name:"fields[email]",placeholder:"Your email address",autocomplete:"email"})])])]),g("input",{type:"hidden",name:"ml-submit",value:"1"}),g("div",{class:"ml-form-embedSubmit absolute top-0 right-0 pl-8 pt-2"},[g("button",{type:"submit",class:"primary transition-all"},[g("img",{src:Kf,alt:"",class:"text-2xl"})]),g("button",{disabled:"disabled",style:{display:"none"},type:"button",class:"loading"},[g("div",{class:"ml-form-embedSubmitLoad"}),g("span",{class:"sr-only"},"Loading...")])]),g("input",{type:"hidden",name:"anticsrf",value:"true"})])]),g("div",{class:"ml-form-successBody row-success !text-white",style:{display:"none"}},[g("div",{class:"ml-form-successContent"},[g("h4",null,"Thank you!"),g("p",null,"You have successfully joined our subscriber list.")])])])])])],-1)),cc={class:"text-main text-3xl mt-12 md:hidden w-full text-left pl-8"},uc={class:"flex justify-start space-x-8 items-center"},dc={rel:"noopener",target:"_blank",href:"https://twitter.com/lofts_club"},mc={rel:"noopener",target:"_blank",href:"https://discord.gg/uDhAsNvQ5H"},pc={rel:"noopener",target:"_blank",href:"https://www.youtube.com/channel/UCNiMQSHGVZEGtPzjT7OzbEQ"},gc={rel:"noopener",target:"_blank",href:"https://instagram.com/agoraverse_"},hc=qn(()=>g("div",{class:"w-full lg:flex flex-col lg:flex-row justify-start lg:justify-around items-start my-8 hidden"},[g("img",{src:qf,alt:"Featured on",class:"hidden lg:contents"}),g("h3",{class:"lg:hidden"},"Featured on"),g("img",{src:Vf,alt:"Featured on",class:"lg:hidden"})],-1));function vc(e,t){const n=na("font-awesome-icon");return he(),Oe("footer",Jf,[g("div",Gf,[g("div",Qf,[Zf,g("div",ec,[tc,g("div",nc,[g("ul",rc,[g("li",null,[g("a",ac,[E(n,{icon:"fa-brands fa-twitter"})])]),g("li",null,[g("a",ic,[E(n,{icon:"fa-brands fa-discord"})])]),g("li",null,[g("a",oc,[E(n,{icon:"fa-brands fa-youtube"})])]),g("li",null,[g("a",sc,[E(n,{icon:"fa-brands fa-instagram"})])])])])])]),lc,fc]),g("div",cc,[g("ul",uc,[g("li",null,[g("a",dc,[E(n,{icon:"fa-brands fa-twitter",class:"h-5"})])]),g("li",null,[g("a",mc,[E(n,{icon:"fa-brands fa-discord",class:"h-5"})])]),g("li",null,[g("a",pc,[E(n,{icon:"fa-brands fa-youtube",class:"h-5"})])]),g("li",null,[g("a",gc,[E(n,{icon:"fa-brands fa-instagram",class:"h-5"})])])])]),hc])}const bc=rn(Xf,[["render",vc],["__scopeId","data-v-8ad58346"]]),yc="/images/metashop-hover-state.png";const _o=e=>(tn("data-v-5a23287c"),e=e(),nn(),e),_c={class:"relative lg:w-52 md:w-36 w-32 lg:h-full h-[137px] cursor-pointer"},xc=["src","alt"],wc=_o(()=>g("img",{src:yc,alt:"shop",class:"xl:w-52 lg:w-40 md:w-36 w-32 absolute inset-0"},null,-1)),kc={class:"anim_build flex"},Cc=_o(()=>g("div",{class:"lg:mr-2 lg:mt-36 mt-16 sm:mt-24"},"build",-1)),Ac={__name:"ShopImage",props:["img","shopCount","limit","indexImg"],emits:["load-image","load-new-image"],setup(e,{emit:t}){const n=e,r=ce(null);function a(){r.value.classList.toggle("animate__zoomIn"),r.value.classList.toggle("animate__zoomOut"),setTimeout(()=>{t("load-new-image",n.indexImg),r.value.classList.toggle("animate__zoomIn"),r.value.classList.toggle("animate__zoomOut")},1e3)}function i(){t("load-image",n.indexImg)}return(o,s)=>{const l=na("font-awesome-icon");return he(),Oe("div",_c,[Xe(g("img",{src:n.img,alt:n.img,onClick:s[0]||(s[0]=c=>a()),ref_key:"image",ref:r,rel:"preload",class:"animate__animated animate__zoomIn xl:w-52 lg:w-40 md:w-36 w-32 lg:cursor-pointer cursor-default z-20"},null,8,xc),[[Je,n.img!=null]]),n.limit<=n.shopCount&&n.img==null?(he(),Oe("div",{key:0,onClick:s[1]||(s[1]=c=>i()),class:"lg:w-52 w-full absolute inset-0 lg:cursor-pointer cursor-default flex justify-center items-center text-2xl z-10 animate__animated animate__zoomIn"},[wc,g("div",kc,[E(l,{icon:"fa-solid fa-hammer",class:"mr-2 lg:mt-36 mt-16 sm:mt-24 anim_hammer"}),Cc])])):go("",!0)])}}},G=rn(Ac,[["__scopeId","data-v-5a23287c"]]),Ic={id:"desktopview",class:"lg:flex w-full lg:w-6/12 h-[680px] hidden flex-col justify-center items-center -mb-20 lg:-mb-0"},Oc={class:"flex -mb-14 lg:-space-x-10 xl:space-x-2 xl:-mb-2 h-[200px]"},Tc={class:"flex -mb-14 lg:-space-x-10 xl:space-x-2 xl:-mb-2 h-[200px]"},Ec={class:"flex -mb-14 lg:-space-x-10 xl:space-x-2 xl:-mb-2 h-[200px]"},Sc={__name:"ShopDesktop",props:["imgSrc"],setup(e){const n=e.imgSrc,r=ce(4),a=ce([]);for(let s=0;s<r.value;s++){const l=n.filter(u=>!a.value.includes(u)),c=l[Math.floor(Math.random()*l.length)];a.value.push(c)}function i(){const s=n.filter(c=>!a.value.includes(c)),l=s[Math.floor(Math.random()*s.length)];a.value.push(l),r.value++}function o(s){const l=n.filter(u=>!a.value.includes(u)),c=l[Math.floor(Math.random()*l.length)];a.value[s]=c}return(s,l)=>(he(),Oe("div",Ic,[g("div",Oc,[E(G,{indexImg:"4",img:a.value[4],shopCount:r.value,limit:4,onLoadImage:i,onLoadNewImage:o},null,8,["img","shopCount"]),E(G,{indexImg:"3",img:a.value[3],shopCount:r.value,limit:3,onLoadImage:i,onLoadNewImage:o},null,8,["img","shopCount"]),E(G,{indexImg:"5",img:a.value[5],shopCount:r.value,limit:5,onLoadImage:i,onLoadNewImage:o},null,8,["img","shopCount"])]),g("div",Tc,[E(G,{indexImg:"0",limit:0,shopCount:r.value,img:a.value[0],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"]),E(G,{indexImg:"1",limit:1,shopCount:r.value,img:a.value[1],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"])]),g("div",Ec,[E(G,{indexImg:"7",img:a.value[7],shopCount:r.value,limit:7,onLoadImage:i,onLoadNewImage:o},null,8,["img","shopCount"]),E(G,{indexImg:"2",limit:2,shopCount:r.value,img:a.value[2],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"]),E(G,{indexImg:"6",img:a.value[6],shopCount:r.value,limit:6,onLoadImage:i,onLoadNewImage:o},null,8,["img","shopCount"])])]))}},Pc={id:"mobileview",class:"w-full sm:hidden lg:w-6/12 h-full flex flex-col justify-center items-center"},Nc={class:"flex -mb-6 space-x-2"},Mc={class:"flex -mb-6 space-x-2"},Lc={class:"flex -mb-6 space-x-2"},$c={__name:"ShopMobile",props:["imgSrc"],setup(e){const t=e,n=ce(1),r=t.imgSrc,a=ce([]);for(let s=0;s<n.value;s++){const l=r.filter(u=>!a.value.includes(u)),c=l[Math.floor(Math.random()*l.length)];a.value.push(c)}function i(){const s=r.filter(c=>!a.value.includes(c)),l=s[Math.floor(Math.random()*s.length)];a.value.push(l),n.value++}function o(s){const l=r.filter(u=>!a.value.includes(u)),c=l[Math.floor(Math.random()*l.length)];a.value[s]=c}return(s,l)=>(he(),Oe("div",Pc,[g("div",Nc,[E(G,{indexImg:"1",shopCount:n.value,limit:1,img:a.value[1],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"]),E(G,{indexImg:"2",shopCount:n.value,limit:2,img:a.value[2],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"])]),g("div",Mc,[E(G,{indexImg:"0",shopCount:n.value,limit:0,img:a.value[0],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"])]),g("div",Lc,[E(G,{indexImg:"3",limit:3,img:a.value[3],shopCount:n.value,onLoadImage:i,onLoadNewImage:o},null,8,["img","shopCount"]),E(G,{indexImg:"4",limit:4,img:a.value[4],shopCount:n.value,onLoadImage:i,onLoadNewImage:o},null,8,["img","shopCount"])])]))}},Fc={id:"mobileview",class:"w-full lg:hidden sm:flex hidden lg:w-6/12 h-full flex-col justify-center items-center space-y-4"},Rc={class:"flex -mb-6 space-x-2"},jc={class:"flex -mb-6 space-x-2"},zc={class:"flex -mb-6 !-mt-2 space-x-2"},Dc={class:"flex -mb-6 !-mt-2 space-x-2"},Bc={__name:"ShopTablet",props:["imgSrc"],setup(e){const t=e,n=ce(3),r=t.imgSrc,a=ce([]);for(let s=0;s<n.value;s++){const l=r.filter(u=>!a.value.includes(u)),c=l[Math.floor(Math.random()*l.length)];a.value.push(c)}function i(){const s=r.filter(c=>!a.value.includes(c)),l=s[Math.floor(Math.random()*s.length)];a.value.push(l),n.value++}function o(s){const l=r.filter(u=>!a.value.includes(u)),c=l[Math.floor(Math.random()*l.length)];a.value[s]=c}return(s,l)=>(he(),Oe("div",Fc,[g("div",Rc,[E(G,{indexImg:"4",shopCount:n.value,limit:4,img:a.value[4],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"]),E(G,{indexImg:"3",shopCount:n.value,limit:3,img:a.value[3],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"]),E(G,{indexImg:"5",shopCount:n.value,limit:5,img:a.value[5],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"])]),g("div",jc,[E(G,{indexImg:"1",shopCount:n.value,limit:1,img:a.value[1],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"]),E(G,{indexImg:"2",shopCount:n.value,limit:2,img:a.value[2],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"])]),g("div",zc,[E(G,{indexImg:"6",shopCount:n.value,limit:6,img:a.value[6],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"]),E(G,{indexImg:"0",shopCount:n.value,limit:0,img:a.value[0],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"]),E(G,{indexImg:"7",shopCount:n.value,limit:7,img:a.value[7],onLoadImage:i,onLoadNewImage:o},null,8,["shopCount","img"])]),g("div",Dc,[E(G,{indexImg:"8",limit:8,img:a.value[8],shopCount:n.value,onLoadImage:i,onLoadNewImage:o},null,8,["img","shopCount"]),E(G,{indexImg:"9",limit:9,img:a.value[9],shopCount:n.value,onLoadImage:i,onLoadNewImage:o},null,8,["img","shopCount"])])]))}};const oa=e=>(tn("data-v-4f9afc27"),e=e(),nn(),e),Uc={class:"relative bg-img"},Hc={class:"maindiv min-h-[650px] max-h-screen sm:min-h-screen flex flex-col-reverse lg:flex-row justify-around items-around lg:justify-center lg:items-center h-full w-full"},Wc={class:"lg:w-6/12 w-full h-full lg:mt-32 lg:ml-10"},Yc=oa(()=>g("h2",{class:"md:text-5xl text-2xl px-6 text-center lg:text-left"},[Qt(" Join the next generation of"),g("br",{class:"hidden xl:block"}),Qt(" storefronts in the Metaverse. ")],-1)),Kc={class:"flex my-8 justify-around sm:justify-center sm:space-x-8 lg:justify-start"},qc=oa(()=>g("button",{class:"w-[190px] lg:w-[250px] h-[40px] lg:h-[60px] bg-main lg:m-6 lg:text-xl text-sm hover:bg-opacity-80"},"BOOK A DEMO",-1)),Vc={class:"h-10 lg:h-12 w-10 lg:w-12 border border-white group-hover:border-main rounded-full flex justify-center items-center mr-1 lg:mr-3"},Xc={width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"!h-4 !w-4 block ml-1 text-white !group-hover:text-main"},Jc=["fill"],Gc=oa(()=>g("span",{class:"lg:text-xl text-xs"}," START EXPERIENCE ",-1)),Qc={__name:"Home",setup(e){const t=ce(null),n=ce("white");ta(()=>{t.value.addEventListener("mouseover",()=>{n.value="#B79955"}),t.value.addEventListener("mouseleave",()=>{n.value="white"})}),Wn(()=>{t.value.removeEventListener("mouseover",()=>{n.value="#B79955"}),t.value.removeEventListener("mouseleave",()=>{n.value="white"})});const r=["images/Agorans.png","images/Arcade.png","images/Barber.png","images/Car.png","images/Clothing.png","images/Darty.png","images/dbdiamonds.png","images/LoftClub.png","images/LuxeClothing.png","images/Meeting.png","images/MenShoes.png","images/Music.png","images/Opticien.png","images/Videogames.png","images/womensshoes.png"],a=()=>{const i=[];for(let o of r){const s=new Image;s.src=o,i.push(s.src)}return i};return(i,o)=>(he(),Oe("main",Uc,[g("div",Hc,[g("div",Wc,[Yc,g("div",Kc,[qc,g("button",{ref_key:"refDivPlay",ref:t,onClick:o[0]||(o[0]=s=>i.$emit("starting-slide")),class:"flex justify-center items-center -ml-4 lg:ml-0 group hover:text-main transition-all w-[150px] lg:w-[250px]"},[g("div",Vc,[(he(),Oe("svg",Xc,[g("path",{ref:"refPathPlay","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 0V20L17.3205 10L0 0Z",fill:n.value,class:"transition-all"},null,8,Jc)]))]),Gc],512)])]),E(Sc,{imgSrc:a()},null,8,["imgSrc"]),E(Bc,{imgSrc:a()},null,8,["imgSrc"]),E($c,{imgSrc:a()},null,8,["imgSrc"])])]))}},Zc=rn(Qc,[["__scopeId","data-v-4f9afc27"]]),eu="/assets/logo.a0bfaa3e.png";const xo=e=>(tn("data-v-81b2c27f"),e=e(),nn(),e),tu={class:"my-4 flex justify-between items-center px-4 bg-transparent absolute top-0 left-0 z-50 w-full h-[75px]"},nu=xo(()=>g("img",{src:eu,alt:"Agora",class:"w-10 transition-all"},null,-1)),ru=[nu],au=xo(()=>g("button",{class:"cta lg:mr-20 hover:bg-main hover:text-white transition-all w-[190px] lg:w-[250px] h-[40px] lg:h-[60px] lg:text-xl"}," BOOK A DEMO ",-1)),iu={__name:"TheHeader",props:["isSlideActivate"],setup(e){return console.log(e.isSlideActivate),(n,r)=>(he(),Oe("header",tu,[g("h1",{onClick:r[0]||(r[0]=a=>n.$emit("starting-slide")),class:"text-4xl cursor-pointer lg:ml-10"},ru),au]))}},ou=rn(iu,[["__scopeId","data-v-81b2c27f"]]);const su={class:"min-h-screen bg-black text-white overflow-hidden"},lu={__name:"App",setup(e){const t=ce(!1),n=ce(!1);function r(){window.scrollTo(0,0),t.value=!t.value,n.value=!0,t.value==!1&&setTimeout(()=>{n.value=!n.value},1e3)}function a(){t.value=!1,n.value&&(n.value=!0,t.value==!1&&setTimeout(()=>{n.value=!n.value},1e3))}return(i,o)=>(he(),Oe("div",su,[E(ou,{onStartingSlide:a,isSlideActivate:t.value},null,8,["isSlideActivate"]),g("div",{class:me(["h-screen w-full relative lg:mt-0 transition-all",{"mt-20":!t.value}])},[E(Zc,{onStartingSlide:r,class:me({isSlideActivate:"animate__slideOutUp"})}),n.value?(he(),mo(Yf,{key:0,class:me([t.value?"anim_slideIn":"anim_slideOut"])},null,8,["class"])):go("",!0)],2),E(bc)]))}};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ei(Object(n),!0).forEach(function(r){uu(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ei(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function On(e){return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(e)}function fu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ti(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cu(e,t,n){return t&&ti(e.prototype,t),n&&ti(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function uu(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sa(e,t){return mu(e)||gu(e,t)||wo(e,t)||vu()}function Vn(e){return du(e)||pu(e)||wo(e)||hu()}function du(e){if(Array.isArray(e))return Or(e)}function mu(e){if(Array.isArray(e))return e}function pu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function wo(e,t){if(!!e){if(typeof e=="string")return Or(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Or(e,t)}}function Or(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ni=function(){},la={},ko={},Co=null,Ao={mark:ni,measure:ni};try{typeof window<"u"&&(la=window),typeof document<"u"&&(ko=document),typeof MutationObserver<"u"&&(Co=MutationObserver),typeof performance<"u"&&(Ao=performance)}catch{}var bu=la.navigator||{},ri=bu.userAgent,ai=ri===void 0?"":ri,tt=la,J=ko,ii=Co,mn=Ao;tt.document;var We=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Io=~ai.indexOf("MSIE")||~ai.indexOf("Trident/"),De="___FONT_AWESOME___",Tr=16,Oo="fa",To="svg-inline--fa",dt="data-fa-i2svg",Er="data-fa-pseudo-element",yu="data-fa-pseudo-element-pending",fa="data-prefix",ca="data-icon",oi="fontawesome-i2svg",_u="async",xu=["HTML","HEAD","STYLE","SCRIPT"],Eo=function(){try{return!0}catch{return!1}}(),ua={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Tn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},So={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},wu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},ku=/fa[srltdbk\-\ ]/,Po="fa-layers-text",Cu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Au={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},No=[1,2,3,4,5,6,7,8,9,10],Iu=No.concat([11,12,13,14,15,16,17,18,19,20]),Ou=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Tu=[].concat(Vn(Object.keys(Tn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY]).concat(No.map(function(e){return"".concat(e,"x")})).concat(Iu.map(function(e){return"w-".concat(e)})),Mo=tt.FontAwesomeConfig||{};function Eu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Su(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Pu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pu.forEach(function(e){var t=sa(e,2),n=t[0],r=t[1],a=Su(Eu(n));a!=null&&(Mo[r]=a)})}var Nu={familyPrefix:Oo,styleDefault:"solid",replacementClass:To,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Wt=A(A({},Nu),Mo);Wt.autoReplaceSvg||(Wt.observeMutations=!1);var N={};Object.keys(Wt).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){Wt[e]=n,yn.forEach(function(r){return r(N)})},get:function(){return Wt[e]}})});tt.FontAwesomeConfig=N;var yn=[];function Mu(e){return yn.push(e),function(){yn.splice(yn.indexOf(e),1)}}var qe=Tr,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lu(e){if(!(!e||!We)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var $u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){for(var e=12,t="";e-- >0;)t+=$u[Math.random()*62|0];return t}function St(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function da(e){return e.classList?St(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Lo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Lo(e[n]),'" ')},"").trim()}function Xn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ma(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function Ru(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function ju(e){var t=e.transform,n=e.width,r=n===void 0?Tr:n,a=e.height,i=a===void 0?Tr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Io?l+="translate(".concat(t.x/qe-r/2,"em, ").concat(t.y/qe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/qe,"em), calc(-50% + ").concat(t.y/qe,"em)) "):l+="translate(".concat(t.x/qe,"em, ").concat(t.y/qe,"em) "),l+="scale(".concat(t.size/qe*(t.flipX?-1:1),", ").concat(t.size/qe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var zu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $o(){var e=Oo,t=To,n=N.familyPrefix,r=N.replacementClass,a=zu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var si=!1;function lr(){N.autoAddCss&&!si&&(Lu($o()),si=!0)}var Du={mixout:function(){return{dom:{css:$o,insertCss:lr}}},hooks:function(){return{beforeDOMElementCreation:function(){lr()},beforeI2svg:function(){lr()}}}},Be=tt||{};Be[De]||(Be[De]={});Be[De].styles||(Be[De].styles={});Be[De].hooks||(Be[De].hooks={});Be[De].shims||(Be[De].shims=[]);var Ce=Be[De],Fo=[],Bu=function e(){J.removeEventListener("DOMContentLoaded",e),En=1,Fo.map(function(t){return t()})},En=!1;We&&(En=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),En||J.addEventListener("DOMContentLoaded",Bu));function Uu(e){!We||(En?setTimeout(e,0):Fo.push(e))}function an(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Lo(e):"<".concat(t," ").concat(Fu(r),">").concat(i.map(an).join(""),"</").concat(t,">")}function li(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Hu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},fr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Hu(n,a):n,l,c,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)c=i[l],u=s(u,t[c],c,t);return u};function Wu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Sr(e){var t=Wu(e);return t.length===1?t[0].toString(16):null}function Yu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function fi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Pr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=fi(t);typeof Ce.hooks.addPack=="function"&&!a?Ce.hooks.addPack(e,fi(t)):Ce.styles[e]=A(A({},Ce.styles[e]||{}),i),e==="fas"&&Pr("fa",t)}var Yt=Ce.styles,Ku=Ce.shims,qu=Object.values(So),pa=null,Ro={},jo={},zo={},Do={},Bo={},Vu=Object.keys(ua);function Xu(e){return~Tu.indexOf(e)}function Ju(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Xu(a)?a:null}var Uo=function(){var t=function(i){return fr(Yt,function(o,s,l){return o[l]=fr(s,i,{}),o},{})};Ro=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),jo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Bo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Yt||N.autoFetchSvg,r=fr(Ku,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});zo=r.names,Do=r.unicodes,pa=Jn(N.styleDefault)};Mu(function(e){pa=Jn(e.styleDefault)});Uo();function ga(e,t){return(Ro[e]||{})[t]}function Gu(e,t){return(jo[e]||{})[t]}function _t(e,t){return(Bo[e]||{})[t]}function Ho(e){return zo[e]||{prefix:null,iconName:null}}function Qu(e){var t=Do[e],n=ga("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function nt(){return pa}var ha=function(){return{prefix:null,iconName:null,rest:[]}};function Jn(e){var t=ua[e],n=Tn[e]||Tn[t],r=e in Ce.styles?e:null;return n||r||null}function Gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Ju(N.familyPrefix,s);if(Yt[s]?(s=qu.includes(s)?wu[s]:s,a=s,o.prefix=s):Vu.indexOf(s)>-1?(a=s,o.prefix=Jn(s)):l?o.iconName=l:s!==N.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?Ho(o.iconName):{},u=_t(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||u||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!Yt.far&&Yt.fas&&!N.autoFetchSvg&&(o.prefix="fas")}return o},ha());return(i.prefix==="fa"||a==="fa")&&(i.prefix=nt()||"fas"),i}var Zu=function(){function e(){fu(this,e),this.definitions={}}return cu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Pr(s,o[s]);var l=So[s];l&&Pr(l,o[s]),Uo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),ci=[],xt={},Ct={},ed=Object.keys(Ct);function td(e,t){var n=t.mixoutsTo;return ci=e,xt={},Object.keys(Ct).forEach(function(r){ed.indexOf(r)===-1&&delete Ct[r]}),ci.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),On(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Ct)}),n}function Nr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ct[e]?Ct[e].apply(null,t):void 0}function Mr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||nt();if(!!t)return t=_t(n,t)||t,li(Wo.definitions,n,t)||li(Ce.styles,n,t)}var Wo=new Zu,nd=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,mt("noAuto")},rd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(mt("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Uu(function(){id({autoReplaceSvgRoot:n}),mt("watch",t)})}},ad={icon:function(t){if(t===null)return null;if(On(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_t(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Jn(t[0]);return{prefix:r,iconName:_t(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(N.familyPrefix,"-"))>-1||t.match(ku))){var a=Gn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||nt(),iconName:_t(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=nt();return{prefix:i,iconName:_t(i,t)||t}}}},ve={noAuto:nd,config:N,dom:rd,parse:ad,library:Wo,findIconDefinition:Mr,toHtml:an},id=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Ce.styles).length>0||N.autoFetchSvg)&&We&&N.autoReplaceSvg&&ve.dom.i2svg({node:r})};function Qn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return an(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!We){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function od(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ma(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Xn(A(A({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function sd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(N.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function va(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,u=e.titleId,m=e.extra,h=e.watchable,I=h===void 0?!1:h,F=r.found?r:n,z=F.width,M=F.height,_=a==="fak",O=[N.replacementClass,i?"".concat(N.familyPrefix,"-").concat(i):""].filter(function(oe){return m.classes.indexOf(oe)===-1}).filter(function(oe){return oe!==""||!!oe}).concat(m.classes).join(" "),L={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(M)})},D=_&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/M*16*.0625,"em")}:{};I&&(L.attributes[dt]=""),l&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(u||en())},children:[l]}),delete L.attributes.title);var q=A(A({},L),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:A(A({},D),m.styles)}),re=r.found&&n.found?Ue("generateAbstractMask",q)||{children:[],attributes:{}}:Ue("generateAbstractIcon",q)||{children:[],attributes:{}},ue=re.children,Te=re.attributes;return q.children=ue,q.attributes=Te,s?sd(q):od(q)}function ui(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[dt]="");var u=A({},o.styles);ma(a)&&(u.transform=ju({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=Xn(u);m.length>0&&(c.style=m);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function ld(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Xn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var cr=Ce.styles;function Lr(e){var t=e[0],n=e[1],r=e.slice(4),a=sa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(N.familyPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(N.familyPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var fd={found:!1,width:512,height:512};function cd(e,t){!Eo&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $r(e,t){var n=t;return t==="fa"&&N.styleDefault!==null&&(t=nt()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=Ho(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&cr[t]&&cr[t][e]){var o=cr[t][e];return r(Lr(o))}cd(e,t),r(A(A({},fd),{},{icon:N.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var di=function(){},Fr=N.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:di,measure:di},zt='FA "6.1.1"',ud=function(t){return Fr.mark("".concat(zt," ").concat(t," begins")),function(){return Yo(t)}},Yo=function(t){Fr.mark("".concat(zt," ").concat(t," ends")),Fr.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},ba={begin:ud,end:Yo},_n=function(){};function mi(e){var t=e.getAttribute?e.getAttribute(dt):null;return typeof t=="string"}function dd(e){var t=e.getAttribute?e.getAttribute(fa):null,n=e.getAttribute?e.getAttribute(ca):null;return t&&n}function md(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function pd(){if(N.autoReplaceSvg===!0)return xn.replace;var e=xn[N.autoReplaceSvg];return e||xn.replace}function gd(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function hd(e){return J.createElement(e)}function Ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?gd:hd:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ko(o,{ceFn:r}))}),a}function vd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var xn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ko(a),n)}),n.getAttribute(dt)===null&&N.keepOriginalSource){var r=J.createComment(vd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~da(n).indexOf(N.replacementClass))return xn.replace(t);var a=new RegExp("".concat(N.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===N.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return an(s)}).join(`
`);n.setAttribute(dt,""),n.innerHTML=o}};function pi(e){e()}function qo(e,t){var n=typeof t=="function"?t:_n;if(e.length===0)n();else{var r=pi;N.mutateApproach===_u&&(r=tt.requestAnimationFrame||pi),r(function(){var a=pd(),i=ba.begin("mutate");e.map(a),i(),n()})}}var ya=!1;function Vo(){ya=!0}function Rr(){ya=!1}var Sn=null;function gi(e){if(!!ii&&!!N.observeMutations){var t=e.treeCallback,n=t===void 0?_n:t,r=e.nodeCallback,a=r===void 0?_n:r,i=e.pseudoElementsCallback,o=i===void 0?_n:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Sn=new ii(function(c){if(!ya){var u=nt();St(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!mi(m.addedNodes[0])&&(N.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&N.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&mi(m.target)&&~Ou.indexOf(m.attributeName))if(m.attributeName==="class"&&dd(m.target)){var h=Gn(da(m.target)),I=h.prefix,F=h.iconName;m.target.setAttribute(fa,I||u),F&&m.target.setAttribute(ca,F)}else md(m.target)&&a(m.target)})}}),We&&Sn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bd(){!Sn||Sn.disconnect()}function yd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function _d(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Gn(da(e));return a.prefix||(a.prefix=nt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=Gu(a.prefix,e.innerText)||ga(a.prefix,Sr(e.innerText))),a}function xd(e){var t=St(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return N.autoA11y&&(n?t["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||en()):(t["aria-hidden"]="true",t.focusable="false")),t}function wd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_d(e),r=n.iconName,a=n.prefix,i=n.rest,o=xd(e),s=Nr("parseNodeAttributes",{},e),l=t.styleParser?yd(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var kd=Ce.styles;function Xo(e){var t=N.autoReplaceSvg==="nest"?hi(e,{styleParser:!1}):hi(e);return~t.extra.classes.indexOf(Po)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}function vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(oi,"-").concat(m))},a=function(m){return n.remove("".concat(oi,"-").concat(m))},i=N.autoFetchSvg?Object.keys(ua):Object.keys(kd),o=[".".concat(Po,":not([").concat(dt,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(dt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=St(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ba.begin("onTree"),c=s.reduce(function(u,m){try{var h=Xo(m);h&&u.push(h)}catch(I){Eo||I.name==="MissingIcon"&&console.error(I)}return u},[]);return new Promise(function(u,m){Promise.all(c).then(function(h){qo(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(h){l(),m(h)})})}function Cd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xo(e).then(function(n){n&&qo([n],t)})}function Ad(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Mr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Mr(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Id=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Me:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,m=n.title,h=m===void 0?null:m,I=n.titleId,F=I===void 0?null:I,z=n.classes,M=z===void 0?[]:z,_=n.attributes,O=_===void 0?{}:_,L=n.styles,D=L===void 0?{}:L;if(!!t){var q=t.prefix,re=t.iconName,ue=t.icon;return Qn(A({type:"icon"},t),function(){return mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),N.autoA11y&&(h?O["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(F||en()):(O["aria-hidden"]="true",O.focusable="false")),va({icons:{main:Lr(ue),mask:l?Lr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:re,transform:A(A({},Me),a),symbol:o,title:h,maskId:u,titleId:F,extra:{attributes:O,styles:D,classes:M}})})}},Od={mixout:function(){return{icon:Ad(Id)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vi,n.nodeCallback=Cd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return vi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,u=r.mask,m=r.maskId,h=r.extra;return new Promise(function(I,F){Promise.all([$r(a,s),u.iconName?$r(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var M=sa(z,2),_=M[0],O=M[1];I([n,va({icons:{main:_,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:h,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Xn(s);l.length>0&&(a.style=l);var c;return ma(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Td={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Qn({type:"layer"},function(){mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.familyPrefix,"-layers")].concat(Vn(i)).join(" ")},children:o}]})}}}},Ed={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return Qn({type:"counter",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),ld({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(N.familyPrefix,"-layers-counter")].concat(Vn(s))}})})}}}},Sd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Me:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,h=r.styles,I=h===void 0?{}:h;return Qn({type:"text",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),ui({content:n,transform:A(A({},Me),i),title:s,extra:{attributes:m,styles:I,classes:["".concat(N.familyPrefix,"-layers-text")].concat(Vn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Io){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return N.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ui({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Pd=new RegExp('"',"ug"),bi=[1105920,1112319];function Nd(e){var t=e.replace(Pd,""),n=Yu(t,0),r=n>=bi[0]&&n<=bi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Sr(a?t[0]:t),isSecondary:r||a}}function yi(e,t){var n="".concat(yu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=St(e.children),o=i.filter(function(re){return re.getAttribute(Er)===t})[0],s=tt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Cu),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Tn[l[2].toLowerCase()]:Au[c],I=Nd(m),F=I.value,z=I.isSecondary,M=l[0].startsWith("FontAwesome"),_=ga(h,F),O=_;if(M){var L=Qu(F);L.iconName&&L.prefix&&(_=L.iconName,h=L.prefix)}if(_&&!z&&(!o||o.getAttribute(fa)!==h||o.getAttribute(ca)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var D=wd(),q=D.extra;q.attributes[Er]=t,$r(_,h).then(function(re){var ue=va(A(A({},D),{},{icons:{main:re,mask:ha()},prefix:h,iconName:O,extra:q,watchable:!0})),Te=J.createElement("svg");t==="::before"?e.insertBefore(Te,e.firstChild):e.appendChild(Te),Te.outerHTML=ue.map(function(oe){return an(oe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Md(e){return Promise.all([yi(e,"::before"),yi(e,"::after")])}function Ld(e){return e.parentNode!==document.head&&!~xu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Er)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _i(e){if(!!We)return new Promise(function(t,n){var r=St(e.querySelectorAll("*")).filter(Ld).map(Md),a=ba.begin("searchPseudoElements");Vo(),Promise.all(r).then(function(){a(),Rr(),t()}).catch(function(){a(),Rr(),n()})})}var $d={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_i,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;N.searchPseudoElements&&_i(a)}}},xi=!1,Fd={mixout:function(){return{dom:{unwatch:function(){Vo(),xi=!0}}}},hooks:function(){return{bootstrap:function(){gi(Nr("mutationObserverCallbacks",{}))},noAuto:function(){bd()},watch:function(n){var r=n.observeMutationsRoot;xi?Rr():gi(Nr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},wi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Rd={mixout:function(){return{parse:{transform:function(n){return wi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=wi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},I={outer:s,inner:m,path:h};return{tag:"g",attributes:A({},I.outer),children:[{tag:"g",attributes:A({},I.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),I.path)}]}]}}}},ur={x:0,y:0,width:"100%",height:"100%"};function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function jd(e){return e.tag==="g"?e.children:[e]}var zd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Gn(a.split(" ").map(function(o){return o.trim()})):ha();return i.prefix||(i.prefix=nt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,u=i.icon,m=o.width,h=o.icon,I=Ru({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:A(A({},ur),{},{fill:"white"})},z=u.children?{children:u.children.map(ki)}:{},M={tag:"g",attributes:A({},I.inner),children:[ki(A({tag:u.tag,attributes:A(A({},u.attributes),I.path)},z))]},_={tag:"g",attributes:A({},I.outer),children:[M]},O="mask-".concat(s||en()),L="clip-".concat(s||en()),D={tag:"mask",attributes:A(A({},ur),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,_]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:L},children:jd(h)},D]};return r.push(q,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(L,")"),mask:"url(#".concat(O,")")},ur)}),{children:r,attributes:a}}}},Dd={provides:function(t){var n=!1;tt.matchMedia&&(n=tt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Bd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ud=[Du,Od,Td,Ed,Sd,$d,Fd,Rd,zd,Dd,Bd];td(Ud,{mixoutsTo:ve});ve.noAuto;var Jo=ve.config,Hd=ve.library;ve.dom;var Pn=ve.parse;ve.findIconDefinition;ve.toHtml;var Wd=ve.icon;ve.layer;var Yd=ve.text;ve.counter;function Ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ci(Object(n),!0).forEach(function(r){le(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Nn(e){return Nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Nn(e)}function le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function qd(e,t){if(e==null)return{};var n=Kd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function jr(e){return Vd(e)||Xd(e)||Jd(e)||Gd()}function Vd(e){if(Array.isArray(e))return zr(e)}function Xd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Jd(e,t){if(!!e){if(typeof e=="string")return zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zr(e,t)}}function zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Gd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Go={exports:{}};(function(e){(function(t){var n=function(_,O,L){if(!c(O)||m(O)||h(O)||I(O)||l(O))return O;var D,q=0,re=0;if(u(O))for(D=[],re=O.length;q<re;q++)D.push(n(_,O[q],L));else{D={};for(var ue in O)Object.prototype.hasOwnProperty.call(O,ue)&&(D[_(ue,L)]=n(_,O[ue],L))}return D},r=function(_,O){O=O||{};var L=O.separator||"_",D=O.split||/(?=[A-Z])/;return _.split(D).join(L)},a=function(_){return F(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(O,L){return L?L.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},i=function(_){var O=a(_);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(_,O){return r(_,O).toLowerCase()},s=Object.prototype.toString,l=function(_){return typeof _=="function"},c=function(_){return _===Object(_)},u=function(_){return s.call(_)=="[object Array]"},m=function(_){return s.call(_)=="[object Date]"},h=function(_){return s.call(_)=="[object RegExp]"},I=function(_){return s.call(_)=="[object Boolean]"},F=function(_){return _=_-0,_===_},z=function(_,O){var L=O&&"process"in O?O.process:O;return typeof L!="function"?_:function(D,q){return L(D,_,q)}},M={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(_,O){return n(z(a,O),_)},decamelizeKeys:function(_,O){return n(z(o,O),_,O)},pascalizeKeys:function(_,O){return n(z(i,O),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(Qd)})(Go);var Zd=Go.exports,em=["class","style"];function tm(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Zd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function nm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function _a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return _a(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=nm(u);break;case"style":l.style=tm(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=qd(n,em);return bo(e.tag,xe(xe(xe({},t),{},{class:a.class,style:xe(xe({},a.style),o)},a.attrs),s),r)}var Qo=!1;try{Qo=!0}catch{}function rm(){if(!Qo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Kt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?le({},e,t):{}}function am(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},le(t,"fa-".concat(e.size),e.size!==null),le(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),le(t,"fa-pull-".concat(e.pull),e.pull!==null),le(t,"fa-swap-opacity",e.swapOpacity),le(t,"fa-bounce",e.bounce),le(t,"fa-shake",e.shake),le(t,"fa-beat",e.beat),le(t,"fa-fade",e.fade),le(t,"fa-beat-fade",e.beatFade),le(t,"fa-flash",e.flash),le(t,"fa-spin-pulse",e.spinPulse),le(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ai(e){if(e&&Nn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Pn.icon)return Pn.icon(e);if(e===null)return null;if(Nn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var im=ea({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=be(function(){return Ai(t.icon)}),i=be(function(){return Kt("classes",am(t))}),o=be(function(){return Kt("transform",typeof t.transform=="string"?Pn.transform(t.transform):t.transform)}),s=be(function(){return Kt("mask",Ai(t.mask))}),l=be(function(){return Wd(a.value,xe(xe(xe(xe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});gn(l,function(u){if(!u)return rm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=be(function(){return l.value?_a(l.value.abstract[0],{},r):null});return function(){return c.value}}});ea({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Jo.familyPrefix,i=be(function(){return["".concat(a,"-layers")].concat(jr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return bo("div",{class:i.value},r.default?r.default():[])}}});ea({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Jo.familyPrefix,i=be(function(){return Kt("classes",[].concat(jr(t.counter?["".concat(a,"-layers-counter")]:[]),jr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=be(function(){return Kt("transform",typeof t.transform=="string"?Pn.transform(t.transform):t.transform)}),s=be(function(){var c=Yd(t.value.toString(),xe(xe({},o.value),i.value)),u=c.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=be(function(){return _a(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var om={prefix:"fas",iconName:"arrow-left-long",icon:[512,512,["long-arrow-left"],"f177","M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"]},sm={prefix:"fas",iconName:"arrow-right-long",icon:[512,512,["long-arrow-right"],"f178","M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"]},lm={prefix:"fas",iconName:"hammer",icon:[576,512,[128296],"f6e3","M568.1 196.3l-22.62-22.62c-4.533-4.533-10.56-7.029-16.97-7.029s-12.44 2.496-16.97 7.029l-5.654 5.656l-20.12-20.12c4.596-23.46-2.652-47.9-19.47-64.73l-45.25-45.25C390.2 17.47 347.1 0 303.1 0C258.2 0 216 17.47 184.3 49.21L176.5 57.05L272.5 105.1v13.81c0 18.95 7.688 37.5 21.09 50.91l49.16 49.14c13.44 13.45 31.39 20.86 50.54 20.86c4.758 0 9.512-.4648 14.18-1.387l20.12 20.12l-5.654 5.654c-9.357 9.357-9.357 24.58-.002 33.94l22.62 22.62c4.535 4.533 10.56 7.031 16.97 7.031s12.44-2.498 16.97-7.031l90.53-90.5C578.3 220.8 578.3 205.6 568.1 196.3zM270.9 192.4c-3.846-3.846-7.197-8.113-10.37-12.49l-239.5 209.2c-28.12 28.12-28.16 73.72-.0371 101.8C35.12 505 53.56 512 71.1 512s36.84-7.031 50.91-21.09l209.1-239.4c-4.141-3.061-8.184-6.289-11.89-9.996L270.9 192.4z"]},fm={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"]},cm={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var um={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"]},dm={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},mm={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]},pm={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"]};Hd.add(cm,fm,mm,um,pm,dm,sm,om,lm);Of(lu).component("font-awesome-icon",im).mount("#app");
