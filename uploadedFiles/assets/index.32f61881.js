const Jo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Jo();function $r(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Go="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qo=$r(Go);function wi(e){return!!e||e===""}function jr(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?ts(r):jr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(te(e))return e}}const Zo=/;(?![^(]*\))/g,es=/:(.+)/;function ts(e){const t={};return e.split(Zo).forEach(n=>{if(n){const r=n.split(es);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function gt(e){let t="";if(ee(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=gt(e[n]);r&&(t+=r+" ")}else if(te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const K={},vt=[],we=()=>{},ns=()=>!1,rs=/^on[^a-z]/,En=e=>rs.test(e),zr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Dr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},as=Object.prototype.hasOwnProperty,U=(e,t)=>as.call(e,t),$=Array.isArray,$t=e=>Tn(e)==="[object Map]",is=e=>Tn(e)==="[object Set]",R=e=>typeof e=="function",ee=e=>typeof e=="string",Ur=e=>typeof e=="symbol",te=e=>e!==null&&typeof e=="object",ki=e=>te(e)&&R(e.then)&&R(e.catch),os=Object.prototype.toString,Tn=e=>os.call(e),ss=e=>Tn(e).slice(8,-1),ls=e=>Tn(e)==="[object Object]",Br=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=$r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fs=/-(\w)/g,Pe=Pn(e=>e.replace(fs,(t,n)=>n?n.toUpperCase():"")),cs=/\B([A-Z])/g,wt=Pn(e=>e.replace(cs,"-$1").toLowerCase()),Sn=Pn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qn=Pn(e=>e?`on${Sn(e)}`:""),Wt=(e,t)=>!Object.is(e,t),Zn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},vn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},us=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ka;const ds=()=>ka||(ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class ms{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ie&&(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ps(e,t=Ie){t&&t.active&&t.effects.push(e)}const Hr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ai=e=>(e.w&Xe)>0,Ci=e=>(e.n&Xe)>0,hs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Xe},gs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ai(a)&&!Ci(a)?a.delete(e):t[n++]=a,a.w&=~Xe,a.n&=~Xe}t.length=n}},sr=new WeakMap;let Lt=0,Xe=1;const lr=30;let ve;const at=Symbol(""),fr=Symbol("");class Wr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ps(this,r)}run(){if(!this.active)return this.fn();let t=ve,n=Ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ve,ve=this,Ke=!0,Xe=1<<++Lt,Lt<=lr?hs(this):Aa(this),this.fn()}finally{Lt<=lr&&gs(this),Xe=1<<--Lt,ve=this.parent,Ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ve===this?this.deferStop=!0:this.active&&(Aa(this),this.onStop&&this.onStop(),this.active=!1)}}function Aa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ke=!0;const Oi=[];function kt(){Oi.push(Ke),Ke=!1}function At(){const e=Oi.pop();Ke=e===void 0?!0:e}function me(e,t,n){if(Ke&&ve){let r=sr.get(e);r||sr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Hr()),Ii(a)}}function Ii(e,t){let n=!1;Lt<=lr?Ci(e)||(e.n|=Xe,n=!Ai(e)):n=!e.has(ve),n&&(e.add(ve),ve.deps.push(e))}function Fe(e,t,n,r,a,i){const o=sr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?Br(n)&&s.push(o.get("length")):(s.push(o.get(at)),$t(e)&&s.push(o.get(fr)));break;case"delete":$(e)||(s.push(o.get(at)),$t(e)&&s.push(o.get(fr)));break;case"set":$t(e)&&s.push(o.get(at));break}if(s.length===1)s[0]&&cr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);cr(Hr(l))}}function cr(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&Ca(r);for(const r of n)r.computed||Ca(r)}function Ca(e,t){(e!==ve||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const vs=$r("__proto__,__v_isRef,__isVue"),Ei=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ur)),bs=Yr(),ys=Yr(!1,!0),xs=Yr(!0),Oa=_s();function _s(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){kt();const r=H(this)[t].apply(this,n);return At(),r}}),e}function Yr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?$s:Mi:t?Ni:Si).get(r))return r;const o=$(r);if(!e&&o&&U(Oa,a))return Reflect.get(Oa,a,i);const s=Reflect.get(r,a,i);return(Ur(a)?Ei.has(a):vs(a))||(e||me(r,"get",a),t)?s:Z(s)?o&&Br(a)?s:s.value:te(s)?e?Li(s):Xr(s):s}}const ws=Ti(),ks=Ti(!0);function Ti(e=!1){return function(n,r,a,i){let o=n[r];if(Yt(o)&&Z(o)&&!Z(a))return!1;if(!e&&!Yt(a)&&(ur(a)||(a=H(a),o=H(o)),!$(n)&&Z(o)&&!Z(a)))return o.value=a,!0;const s=$(n)&&Br(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===H(i)&&(s?Wt(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function As(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function Cs(e,t){const n=Reflect.has(e,t);return(!Ur(t)||!Ei.has(t))&&me(e,"has",t),n}function Os(e){return me(e,"iterate",$(e)?"length":at),Reflect.ownKeys(e)}const Pi={get:bs,set:ws,deleteProperty:As,has:Cs,ownKeys:Os},Is={get:xs,set(e,t){return!0},deleteProperty(e,t){return!0}},Es=ae({},Pi,{get:ys,set:ks}),Kr=e=>e,Nn=e=>Reflect.getPrototypeOf(e);function nn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Nn(a),s=r?Kr:n?Jr:Kt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function rn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function an(e,t=!1){return e=e.__v_raw,!t&&me(H(e),"iterate",at),Reflect.get(e,"size",e)}function Ia(e){e=H(e);const t=H(this);return Nn(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function Ea(e,t){t=H(t);const n=H(this),{has:r,get:a}=Nn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Wt(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function Ta(e){const t=H(this),{has:n,get:r}=Nn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function Pa(){const e=H(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function on(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?Kr:e?Jr:Kt;return!e&&me(s,"iterate",at),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function sn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=$t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Kr:t?Jr:Kt;return!t&&me(i,"iterate",l?fr:at),{next(){const{value:m,done:b}=c.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Be(e){return function(...t){return e==="delete"?!1:this}}function Ts(){const e={get(i){return nn(this,i)},get size(){return an(this)},has:rn,add:Ia,set:Ea,delete:Ta,clear:Pa,forEach:on(!1,!1)},t={get(i){return nn(this,i,!1,!0)},get size(){return an(this)},has:rn,add:Ia,set:Ea,delete:Ta,clear:Pa,forEach:on(!1,!0)},n={get(i){return nn(this,i,!0)},get size(){return an(this,!0)},has(i){return rn.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:on(!0,!1)},r={get(i){return nn(this,i,!0,!0)},get size(){return an(this,!0)},has(i){return rn.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:on(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=sn(i,!1,!1),n[i]=sn(i,!0,!1),t[i]=sn(i,!1,!0),r[i]=sn(i,!0,!0)}),[e,n,t,r]}const[Ps,Ss,Ns,Ms]=Ts();function qr(e,t){const n=t?e?Ms:Ns:e?Ss:Ps;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Ls={get:qr(!1,!1)},Fs={get:qr(!1,!0)},Rs={get:qr(!0,!1)},Si=new WeakMap,Ni=new WeakMap,Mi=new WeakMap,$s=new WeakMap;function js(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zs(e){return e.__v_skip||!Object.isExtensible(e)?0:js(ss(e))}function Xr(e){return Yt(e)?e:Vr(e,!1,Pi,Ls,Si)}function Ds(e){return Vr(e,!1,Es,Fs,Ni)}function Li(e){return Vr(e,!0,Is,Rs,Mi)}function Vr(e,t,n,r,a){if(!te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=zs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function bt(e){return Yt(e)?bt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function ur(e){return!!(e&&e.__v_isShallow)}function Fi(e){return bt(e)||Yt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function Ri(e){return vn(e,"__v_skip",!0),e}const Kt=e=>te(e)?Xr(e):e,Jr=e=>te(e)?Li(e):e;function $i(e){Ke&&ve&&(e=H(e),Ii(e.dep||(e.dep=Hr())))}function ji(e,t){e=H(e),e.dep&&cr(e.dep)}function Z(e){return!!(e&&e.__v_isRef===!0)}function tt(e){return Us(e,!1)}function Us(e,t){return Z(e)?e:new Bs(e,t)}class Bs{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H(t),this._value=n?t:Kt(t)}get value(){return $i(this),this._value}set value(t){t=this.__v_isShallow?t:H(t),Wt(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Kt(t),ji(this))}}function Hs(e){return Z(e)?e.value:e}const Ws={get:(e,t,n)=>Hs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return Z(a)&&!Z(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function zi(e){return bt(e)?e:new Proxy(e,Ws)}class Ys{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Wr(t,()=>{this._dirty||(this._dirty=!0,ji(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return $i(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ks(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=we):(r=e.get,a=e.set),new Ys(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Mn(i,t,n)}return a}function ke(e,t,n,r){if(R(e)){const i=qe(e,t,n,r);return i&&ki(i)&&i.catch(o=>{Mn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ke(e[i],t,n,r));return a}function Mn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}qs(e,n,a,r)}function qs(e,t,n,r=!0){console.error(e)}let bn=!1,dr=!1;const de=[];let Le=0;const jt=[];let Ft=null,dt=0;const zt=[];let We=null,mt=0;const Di=Promise.resolve();let Gr=null,mr=null;function Xs(e){const t=Gr||Di;return e?t.then(this?e.bind(this):e):t}function Vs(e){let t=Le+1,n=de.length;for(;t<n;){const r=t+n>>>1;qt(de[r])<e?t=r+1:n=r}return t}function Ui(e){(!de.length||!de.includes(e,bn&&e.allowRecurse?Le+1:Le))&&e!==mr&&(e.id==null?de.push(e):de.splice(Vs(e.id),0,e),Bi())}function Bi(){!bn&&!dr&&(dr=!0,Gr=Di.then(Yi))}function Js(e){const t=de.indexOf(e);t>Le&&de.splice(t,1)}function Hi(e,t,n,r){$(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Bi()}function Gs(e){Hi(e,Ft,jt,dt)}function Qs(e){Hi(e,We,zt,mt)}function Ln(e,t=null){if(jt.length){for(mr=t,Ft=[...new Set(jt)],jt.length=0,dt=0;dt<Ft.length;dt++)Ft[dt]();Ft=null,dt=0,mr=null,Ln(e,t)}}function Wi(e){if(Ln(),zt.length){const t=[...new Set(zt)];if(zt.length=0,We){We.push(...t);return}for(We=t,We.sort((n,r)=>qt(n)-qt(r)),mt=0;mt<We.length;mt++)We[mt]();We=null,mt=0}}const qt=e=>e.id==null?1/0:e.id;function Yi(e){dr=!1,bn=!0,Ln(e),de.sort((n,r)=>qt(n)-qt(r));const t=we;try{for(Le=0;Le<de.length;Le++){const n=de[Le];n&&n.active!==!1&&qe(n,null,14)}}finally{Le=0,de.length=0,Wi(),bn=!1,Gr=null,(de.length||jt.length||zt.length)&&Yi(e)}}function Zs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||K;b&&(a=n.map(O=>O.trim())),m&&(a=n.map(us))}let s,l=r[s=Qn(t)]||r[s=Qn(Pe(t))];!l&&i&&(l=r[s=Qn(wt(t))]),l&&ke(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ke(c,e,6,a)}}function Ki(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=c=>{const d=Ki(c,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):ae(o,i),r.set(e,o),o)}function Fn(e,t){return!e||!En(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,wt(t))||U(e,t))}let ye=null,Rn=null;function yn(e){const t=ye;return ye=e,Rn=e&&e.type.__scopeId||null,t}function $n(e){Rn=e}function jn(){Rn=null}function el(e,t=ye,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Da(-1);const i=yn(t),o=e(...a);return yn(i),r._d&&Da(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function er(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:b,setupState:O,ctx:F,inheritAttrs:j}=e;let N,y;const I=yn(e);try{if(n.shapeFlag&4){const D=a||r;N=Ee(d.call(D,D,m,i,O,b,F)),y=l}else{const D=t;N=Ee(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),y=t.props?l:tl(l)}}catch(D){Dt.length=0,Mn(D,e,1),N=z(Xt)}let M=N;if(y&&j!==!1){const D=Object.keys(y),{shapeFlag:q}=M;D.length&&q&7&&(o&&D.some(zr)&&(y=nl(y,o)),M=xt(M,y))}return n.dirs&&(M=xt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),N=M,yn(I),N}const tl=e=>{let t;for(const n in e)(n==="class"||n==="style"||En(n))&&((t||(t={}))[n]=e[n]);return t},nl=(e,t)=>{const n={};for(const r in e)(!zr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function rl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sa(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Fn(c,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Sa(r,o,c):!0:!!o;return!1}function Sa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Fn(n,i))return!0}return!1}function al({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const il=e=>e.__isSuspense;function ol(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):Qs(e)}function sl(e,t){if(Q){let n=Q.provides;const r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function tr(e,t,n=!1){const r=Q||ye;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}const Na={};function cn(e,t,n){return qi(e,t,n)}function qi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=Q;let l,c=!1,d=!1;if(Z(e)?(l=()=>e.value,c=ur(e)):bt(e)?(l=()=>e,r=!0):$(e)?(d=!0,c=e.some(y=>bt(y)||ur(y)),l=()=>e.map(y=>{if(Z(y))return y.value;if(bt(y))return nt(y);if(R(y))return qe(y,s,2)})):R(e)?t?l=()=>qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),ke(e,s,3,[b])}:l=we,t&&r){const y=l;l=()=>nt(y())}let m,b=y=>{m=N.onStop=()=>{qe(y,s,4)}};if(Jt)return b=we,t?n&&ke(t,s,3,[l(),d?[]:void 0,b]):l(),we;let O=d?[]:Na;const F=()=>{if(!!N.active)if(t){const y=N.run();(r||c||(d?y.some((I,M)=>Wt(I,O[M])):Wt(y,O)))&&(m&&m(),ke(t,s,3,[y,O===Na?void 0:O,b]),O=y)}else N.run()};F.allowRecurse=!!t;let j;a==="sync"?j=F:a==="post"?j=()=>le(F,s&&s.suspense):j=()=>Gs(F);const N=new Wr(l,j);return t?n?F():O=N.run():a==="post"?le(N.run.bind(N),s&&s.suspense):N.run(),()=>{N.stop(),s&&s.scope&&Dr(s.scope.effects,N)}}function ll(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?Xi(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=Q;_t(this);const s=qi(a,i.bind(r),n);return o?_t(o):it(),s}function Xi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function nt(e,t){if(!te(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Z(e))nt(e.value,t);else if($(e))for(let n=0;n<e.length;n++)nt(e[n],t);else if(is(e)||$t(e))e.forEach(n=>{nt(n,t)});else if(ls(e))for(const n in e)nt(e[n],t);return e}function Qr(e){return R(e)?{setup:e,name:e.name}:e}const un=e=>!!e.type.__asyncLoader,Vi=e=>e.type.__isKeepAlive;function fl(e,t){Ji(e,"a",t)}function cl(e,t){Ji(e,"da",t)}function Ji(e,t,n=Q){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(zn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Vi(a.parent.vnode)&&ul(r,t,n,a),a=a.parent}}function ul(e,t,n,r){const a=zn(t,e,r,!0);Gi(()=>{Dr(r[t],a)},n)}function zn(e,t,n=Q,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;kt(),_t(n);const s=ke(t,n,e,o);return it(),At(),s});return r?a.unshift(i):a.push(i),i}}const ze=e=>(t,n=Q)=>(!Jt||e==="sp")&&zn(e,t,n),dl=ze("bm"),ml=ze("m"),pl=ze("bu"),hl=ze("u"),gl=ze("bum"),Gi=ze("um"),vl=ze("sp"),bl=ze("rtg"),yl=ze("rtc");function xl(e,t=Q){zn("ec",e,t)}function pr(e,t){const n=ye;if(n===null)return e;const r=Un(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=K]=t[i];R(o)&&(o={mounted:o,updated:o}),o.deep&&nt(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function Ge(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(kt(),ke(l,n,8,[e.el,s,e,t]),At())}}const Qi="components";function Zr(e,t){return wl(Qi,e,!0,t)||e}const _l=Symbol();function wl(e,t,n=!0,r=!1){const a=ye||Q;if(a){const i=a.type;if(e===Qi){const s=Zl(i,!1);if(s&&(s===t||s===Pe(t)||s===Sn(Pe(t))))return i}const o=Ma(a[e]||i[e],t)||Ma(a.appContext[e],t);return!o&&r?i:o}}function Ma(e,t){return e&&(e[t]||e[Pe(t)]||e[Sn(Pe(t))])}const hr=e=>e?co(e)?Un(e)||e.proxy:hr(e.parent):null,xn=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>hr(e.parent),$root:e=>hr(e.root),$emit:e=>e.emit,$options:e=>eo(e),$forceUpdate:e=>e.f||(e.f=()=>Ui(e.update)),$nextTick:e=>e.n||(e.n=Xs.bind(e.proxy)),$watch:e=>ll.bind(e)}),kl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&U(r,t))return o[t]=1,r[t];if(a!==K&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==K&&U(n,t))return o[t]=4,n[t];gr&&(o[t]=0)}}const d=xn[t];let m,b;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&U(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,U(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&U(a,t)?(a[t]=n,!0):r!==K&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&U(e,o)||t!==K&&U(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(xn,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let gr=!0;function Al(e){const t=eo(e),n=e.proxy,r=e.ctx;gr=!1,t.beforeCreate&&La(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:F,activated:j,deactivated:N,beforeDestroy:y,beforeUnmount:I,destroyed:M,unmounted:D,render:q,renderTracked:ne,renderTriggered:fe,errorCaptured:Ae,serverPrefetch:ie,expose:Et,inheritAttrs:lt,components:Tt,directives:en,filters:va}=t;if(c&&Cl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const X=o[G];R(X)&&(r[G]=X.bind(n))}if(a){const G=a.call(n,n);te(G)&&(e.data=Xr(G))}if(gr=!0,i)for(const G in i){const X=i[G],Se=R(X)?X.bind(n,n):R(X.get)?X.get.bind(n,n):we,Vn=!R(X)&&R(X.set)?X.set.bind(n):we,Pt=he({get:Se,set:Vn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:ft=>Pt.value=ft})}if(s)for(const G in s)Zi(s[G],r,n,G);if(l){const G=R(l)?l.call(n):l;Reflect.ownKeys(G).forEach(X=>{sl(X,G[X])})}d&&La(d,e,"c");function oe(G,X){$(X)?X.forEach(Se=>G(Se.bind(n))):X&&G(X.bind(n))}if(oe(dl,m),oe(ml,b),oe(pl,O),oe(hl,F),oe(fl,j),oe(cl,N),oe(xl,Ae),oe(yl,ne),oe(bl,fe),oe(gl,I),oe(Gi,D),oe(vl,ie),$(Et))if(Et.length){const G=e.exposed||(e.exposed={});Et.forEach(X=>{Object.defineProperty(G,X,{get:()=>n[X],set:Se=>n[X]=Se})})}else e.exposed||(e.exposed={});q&&e.render===we&&(e.render=q),lt!=null&&(e.inheritAttrs=lt),Tt&&(e.components=Tt),en&&(e.directives=en)}function Cl(e,t,n=we,r=!1){$(e)&&(e=vr(e));for(const a in e){const i=e[a];let o;te(i)?"default"in i?o=tr(i.from||a,i.default,!0):o=tr(i.from||a):o=tr(i),Z(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function La(e,t,n){ke($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zi(e,t,n,r){const a=r.includes(".")?Xi(n,r):()=>n[r];if(ee(e)){const i=t[e];R(i)&&cn(a,i)}else if(R(e))cn(a,e.bind(n));else if(te(e))if($(e))e.forEach(i=>Zi(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&cn(a,i,e)}}function eo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>_n(l,c,o,!0)),_n(l,t,o)),i.set(t,l),l}function _n(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&_n(e,i,n,!0),a&&a.forEach(o=>_n(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ol[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ol={data:Fa,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:Ze,directives:Ze,watch:El,provide:Fa,inject:Il};function Fa(e,t){return t?e?function(){return ae(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Il(e,t){return Ze(vr(e),vr(t))}function vr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function re(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?ae(ae(Object.create(null),e),t):t}function El(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=re(e[r],t[r]);return n}function Tl(e,t,n,r=!1){const a={},i={};vn(i,Dn,1),e.propsDefaults=Object.create(null),to(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ds(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Pl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Fn(e.emitsOptions,b))continue;const O=t[b];if(l)if(U(i,b))O!==i[b]&&(i[b]=O,c=!0);else{const F=Pe(b);a[F]=br(l,s,F,O,e,!1)}else O!==i[b]&&(i[b]=O,c=!0)}}}else{to(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!U(t,m)&&((d=wt(m))===m||!U(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=br(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m)&&!0)&&(delete i[m],c=!0)}c&&Fe(e,"set","$attrs")}function to(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(fn(l))continue;const c=t[l];let d;a&&U(a,d=Pe(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Fn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=br(a,l,m,c[m],e,!U(c,m))}}return o}function br(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(_t(a),r=c[n]=l.call(null,t),it())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===wt(n))&&(r=!0))}return r}function no(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[b,O]=no(m,t,!0);ae(o,b),O&&s.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,vt),vt;if($(i))for(let d=0;d<i.length;d++){const m=Pe(i[d]);Ra(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Pe(d);if(Ra(m)){const b=i[d],O=o[m]=$(b)||R(b)?{type:b}:b;if(O){const F=za(Boolean,O.type),j=za(String,O.type);O[0]=F>-1,O[1]=j<0||F<j,(F>-1||U(O,"default"))&&s.push(m)}}}const c=[o,s];return r.set(e,c),c}function Ra(e){return e[0]!=="$"}function $a(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ja(e,t){return $a(e)===$a(t)}function za(e,t){return $(t)?t.findIndex(n=>ja(n,e)):R(t)&&ja(t,e)?0:-1}const ro=e=>e[0]==="_"||e==="$stable",ea=e=>$(e)?e.map(Ee):[Ee(e)],Sl=(e,t,n)=>{if(t._n)return t;const r=el((...a)=>ea(t(...a)),n);return r._c=!1,r},ao=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ro(a))continue;const i=e[a];if(R(i))t[a]=Sl(a,i,r);else if(i!=null){const o=ea(i);t[a]=()=>o}}},io=(e,t)=>{const n=ea(t);e.slots.default=()=>n},Nl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),vn(t,"_",n)):ao(t,e.slots={})}else e.slots={},t&&io(e,t);vn(e.slots,Dn,1)},Ml=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ao(t,a)),o=t}else t&&(io(e,t),o={default:1});if(i)for(const s in a)!ro(s)&&!(s in o)&&delete a[s]};function oo(){return{app:null,config:{isNativeTag:ns,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ll=0;function Fl(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!te(a)&&(a=null);const i=oo(),o=new Set;let s=!1;const l=i.app={_uid:Ll++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:tf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&R(c.install)?(o.add(c),c.install(l,...d)):R(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const b=z(r,a);return b.appContext=i,d&&t?t(b,c):e(b,c,m),s=!0,l._container=c,c.__vue_app__=l,Un(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function yr(e,t,n,r,a=!1){if($(e)){e.forEach((b,O)=>yr(b,t&&($(t)?t[O]:t),n,r,a));return}if(un(r)&&!a)return;const i=r.shapeFlag&4?Un(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ee(c)?(d[c]=null,U(m,c)&&(m[c]=null)):Z(c)&&(c.value=null)),R(l))qe(l,s,12,[o,d]);else{const b=ee(l),O=Z(l);if(b||O){const F=()=>{if(e.f){const j=b?d[l]:l.value;a?$(j)&&Dr(j,i):$(j)?j.includes(i)||j.push(i):b?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,U(m,l)&&(m[l]=o)):O&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,le(F,n)):F()}}}const le=ol;function Rl(e){return $l(e)}function $l(e,t){const n=ds();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=we,cloneNode:F,insertStaticContent:j}=e,N=(f,u,p,g=null,h=null,_=null,A=!1,x=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Nt(f,u)&&(g=tn(f),Ue(f,h,_,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:v,ref:T,shapeFlag:E}=u;switch(v){case ta:y(f,u,p,g);break;case Xt:I(f,u,p,g);break;case dn:f==null&&M(u,p,g,A);break;case Me:en(f,u,p,g,h,_,A,x,w);break;default:E&1?ne(f,u,p,g,h,_,A,x,w):E&6?va(f,u,p,g,h,_,A,x,w):(E&64||E&128)&&v.process(f,u,p,g,h,_,A,x,w,ct)}T!=null&&h&&yr(T,f&&f.ref,_,u||f,!u)},y=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},I=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},M=(f,u,p,g)=>{[f.el,f.anchor]=j(f.children,u,p,g,f.el,f.anchor)},D=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=b(f),r(f,p,g),f=h;r(u,p,g)},q=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=b(f),a(f),f=p;a(u)},ne=(f,u,p,g,h,_,A,x,w)=>{A=A||u.type==="svg",f==null?fe(u,p,g,h,_,A,x,w):Et(f,u,h,_,A,x,w)},fe=(f,u,p,g,h,_,A,x)=>{let w,v;const{type:T,props:E,shapeFlag:P,transition:L,patchFlag:B,dirs:W}=f;if(f.el&&F!==void 0&&B===-1)w=f.el=F(f.el);else{if(w=f.el=o(f.type,_,E&&E.is,E),P&8?d(w,f.children):P&16&&ie(f.children,w,null,g,h,_&&T!=="foreignObject",A,x),W&&Ge(f,null,g,"created"),E){for(const V in E)V!=="value"&&!fn(V)&&i(w,V,null,E[V],_,f.children,g,h,Ne);"value"in E&&i(w,"value",null,E.value),(v=E.onVnodeBeforeMount)&&Oe(v,g,f)}Ae(w,f,f.scopeId,A,g)}W&&Ge(f,null,g,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&L&&!L.persisted;Y&&L.beforeEnter(w),r(w,u,p),((v=E&&E.onVnodeMounted)||Y||W)&&le(()=>{v&&Oe(v,g,f),Y&&L.enter(w),W&&Ge(f,null,g,"mounted")},h)},Ae=(f,u,p,g,h)=>{if(p&&O(f,p),g)for(let _=0;_<g.length;_++)O(f,g[_]);if(h){let _=h.subTree;if(u===_){const A=h.vnode;Ae(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ie=(f,u,p,g,h,_,A,x,w=0)=>{for(let v=w;v<f.length;v++){const T=f[v]=x?Ye(f[v]):Ee(f[v]);N(null,T,u,p,g,h,_,A,x)}},Et=(f,u,p,g,h,_,A)=>{const x=u.el=f.el;let{patchFlag:w,dynamicChildren:v,dirs:T}=u;w|=f.patchFlag&16;const E=f.props||K,P=u.props||K;let L;p&&Qe(p,!1),(L=P.onVnodeBeforeUpdate)&&Oe(L,p,u,f),T&&Ge(u,f,p,"beforeUpdate"),p&&Qe(p,!0);const B=h&&u.type!=="foreignObject";if(v?lt(f.dynamicChildren,v,x,p,g,B,_):A||Se(f,u,x,null,p,g,B,_,!1),w>0){if(w&16)Tt(x,u,E,P,p,g,h);else if(w&2&&E.class!==P.class&&i(x,"class",null,P.class,h),w&4&&i(x,"style",E.style,P.style,h),w&8){const W=u.dynamicProps;for(let Y=0;Y<W.length;Y++){const V=W[Y],ge=E[V],ut=P[V];(ut!==ge||V==="value")&&i(x,V,ge,ut,h,f.children,p,g,Ne)}}w&1&&f.children!==u.children&&d(x,u.children)}else!A&&v==null&&Tt(x,u,E,P,p,g,h);((L=P.onVnodeUpdated)||T)&&le(()=>{L&&Oe(L,p,u,f),T&&Ge(u,f,p,"updated")},g)},lt=(f,u,p,g,h,_,A)=>{for(let x=0;x<u.length;x++){const w=f[x],v=u[x],T=w.el&&(w.type===Me||!Nt(w,v)||w.shapeFlag&70)?m(w.el):p;N(w,v,T,null,g,h,_,A,!0)}},Tt=(f,u,p,g,h,_,A)=>{if(p!==g){for(const x in g){if(fn(x))continue;const w=g[x],v=p[x];w!==v&&x!=="value"&&i(f,x,v,w,A,u.children,h,_,Ne)}if(p!==K)for(const x in p)!fn(x)&&!(x in g)&&i(f,x,p[x],null,A,u.children,h,_,Ne);"value"in g&&i(f,"value",p.value,g.value)}},en=(f,u,p,g,h,_,A,x,w)=>{const v=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:E,dynamicChildren:P,slotScopeIds:L}=u;L&&(x=x?x.concat(L):L),f==null?(r(v,p,g),r(T,p,g),ie(u.children,p,T,h,_,A,x,w)):E>0&&E&64&&P&&f.dynamicChildren?(lt(f.dynamicChildren,P,p,h,_,A,x),(u.key!=null||h&&u===h.subTree)&&so(f,u,!0)):Se(f,u,p,T,h,_,A,x,w)},va=(f,u,p,g,h,_,A,x,w)=>{u.slotScopeIds=x,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,w):Xn(u,p,g,h,_,A,w):oe(f,u,w)},Xn=(f,u,p,g,h,_,A)=>{const x=f.component=Xl(f,g,h);if(Vi(f)&&(x.ctx.renderer=ct),Vl(x),x.asyncDep){if(h&&h.registerDep(x,G),!f.el){const w=x.subTree=z(Xt);I(null,w,u,p)}return}G(x,f,u,p,h,_,A)},oe=(f,u,p)=>{const g=u.component=f.component;if(rl(f,u,p))if(g.asyncDep&&!g.asyncResolved){X(g,u,p);return}else g.next=u,Js(g.update),g.update();else u.el=f.el,g.vnode=u},G=(f,u,p,g,h,_,A)=>{const x=()=>{if(f.isMounted){let{next:T,bu:E,u:P,parent:L,vnode:B}=f,W=T,Y;Qe(f,!1),T?(T.el=B.el,X(f,T,A)):T=B,E&&Zn(E),(Y=T.props&&T.props.onVnodeBeforeUpdate)&&Oe(Y,L,T,B),Qe(f,!0);const V=er(f),ge=f.subTree;f.subTree=V,N(ge,V,m(ge.el),tn(ge),f,h,_),T.el=V.el,W===null&&al(f,V.el),P&&le(P,h),(Y=T.props&&T.props.onVnodeUpdated)&&le(()=>Oe(Y,L,T,B),h)}else{let T;const{el:E,props:P}=u,{bm:L,m:B,parent:W}=f,Y=un(u);if(Qe(f,!1),L&&Zn(L),!Y&&(T=P&&P.onVnodeBeforeMount)&&Oe(T,W,u),Qe(f,!0),E&&Gn){const V=()=>{f.subTree=er(f),Gn(E,f.subTree,f,h,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&V()):V()}else{const V=f.subTree=er(f);N(null,V,p,g,f,h,_),u.el=V.el}if(B&&le(B,h),!Y&&(T=P&&P.onVnodeMounted)){const V=u;le(()=>Oe(T,W,V),h)}(u.shapeFlag&256||W&&un(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&le(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new Wr(x,()=>Ui(v),f.scope),v=f.update=()=>w.run();v.id=f.uid,Qe(f,!0),v()},X=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Pl(f,u.props,g,p),Ml(f,u.children,p),kt(),Ln(void 0,f.update),At()},Se=(f,u,p,g,h,_,A,x,w=!1)=>{const v=f&&f.children,T=f?f.shapeFlag:0,E=u.children,{patchFlag:P,shapeFlag:L}=u;if(P>0){if(P&128){Pt(v,E,p,g,h,_,A,x,w);return}else if(P&256){Vn(v,E,p,g,h,_,A,x,w);return}}L&8?(T&16&&Ne(v,h,_),E!==v&&d(p,E)):T&16?L&16?Pt(v,E,p,g,h,_,A,x,w):Ne(v,h,_,!0):(T&8&&d(p,""),L&16&&ie(E,p,g,h,_,A,x,w))},Vn=(f,u,p,g,h,_,A,x,w)=>{f=f||vt,u=u||vt;const v=f.length,T=u.length,E=Math.min(v,T);let P;for(P=0;P<E;P++){const L=u[P]=w?Ye(u[P]):Ee(u[P]);N(f[P],L,p,null,h,_,A,x,w)}v>T?Ne(f,h,_,!0,!1,E):ie(u,p,g,h,_,A,x,w,E)},Pt=(f,u,p,g,h,_,A,x,w)=>{let v=0;const T=u.length;let E=f.length-1,P=T-1;for(;v<=E&&v<=P;){const L=f[v],B=u[v]=w?Ye(u[v]):Ee(u[v]);if(Nt(L,B))N(L,B,p,null,h,_,A,x,w);else break;v++}for(;v<=E&&v<=P;){const L=f[E],B=u[P]=w?Ye(u[P]):Ee(u[P]);if(Nt(L,B))N(L,B,p,null,h,_,A,x,w);else break;E--,P--}if(v>E){if(v<=P){const L=P+1,B=L<T?u[L].el:g;for(;v<=P;)N(null,u[v]=w?Ye(u[v]):Ee(u[v]),p,B,h,_,A,x,w),v++}}else if(v>P)for(;v<=E;)Ue(f[v],h,_,!0),v++;else{const L=v,B=v,W=new Map;for(v=B;v<=P;v++){const ce=u[v]=w?Ye(u[v]):Ee(u[v]);ce.key!=null&&W.set(ce.key,v)}let Y,V=0;const ge=P-B+1;let ut=!1,xa=0;const St=new Array(ge);for(v=0;v<ge;v++)St[v]=0;for(v=L;v<=E;v++){const ce=f[v];if(V>=ge){Ue(ce,h,_,!0);continue}let Ce;if(ce.key!=null)Ce=W.get(ce.key);else for(Y=B;Y<=P;Y++)if(St[Y-B]===0&&Nt(ce,u[Y])){Ce=Y;break}Ce===void 0?Ue(ce,h,_,!0):(St[Ce-B]=v+1,Ce>=xa?xa=Ce:ut=!0,N(ce,u[Ce],p,null,h,_,A,x,w),V++)}const _a=ut?jl(St):vt;for(Y=_a.length-1,v=ge-1;v>=0;v--){const ce=B+v,Ce=u[ce],wa=ce+1<T?u[ce+1].el:g;St[v]===0?N(null,Ce,p,wa,h,_,A,x,w):ut&&(Y<0||v!==_a[Y]?ft(Ce,p,wa,2):Y--)}}},ft=(f,u,p,g,h=null)=>{const{el:_,type:A,transition:x,children:w,shapeFlag:v}=f;if(v&6){ft(f.component.subTree,u,p,g);return}if(v&128){f.suspense.move(u,p,g);return}if(v&64){A.move(f,u,p,ct);return}if(A===Me){r(_,u,p);for(let E=0;E<w.length;E++)ft(w[E],u,p,g);r(f.anchor,u,p);return}if(A===dn){D(f,u,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(_),r(_,u,p),le(()=>x.enter(_),h);else{const{leave:E,delayLeave:P,afterLeave:L}=x,B=()=>r(_,u,p),W=()=>{E(_,()=>{B(),L&&L()})};P?P(_,B,W):W()}else r(_,u,p)},Ue=(f,u,p,g=!1,h=!1)=>{const{type:_,props:A,ref:x,children:w,dynamicChildren:v,shapeFlag:T,patchFlag:E,dirs:P}=f;if(x!=null&&yr(x,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const L=T&1&&P,B=!un(f);let W;if(B&&(W=A&&A.onVnodeBeforeUnmount)&&Oe(W,u,f),T&6)Vo(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}L&&Ge(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,h,ct,g):v&&(_!==Me||E>0&&E&64)?Ne(v,u,p,!1,!0):(_===Me&&E&384||!h&&T&16)&&Ne(w,u,p),g&&ba(f)}(B&&(W=A&&A.onVnodeUnmounted)||L)&&le(()=>{W&&Oe(W,u,f),L&&Ge(f,null,u,"unmounted")},p)},ba=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===Me){Xo(p,g);return}if(u===dn){q(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:x}=h,w=()=>A(p,_);x?x(f.el,_,w):w()}else _()},Xo=(f,u)=>{let p;for(;f!==u;)p=b(f),a(f),f=p;a(u)},Vo=(f,u,p)=>{const{bum:g,scope:h,update:_,subTree:A,um:x}=f;g&&Zn(g),h.stop(),_&&(_.active=!1,Ue(A,f,u,p)),x&&le(x,u),le(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ne=(f,u,p,g=!1,h=!1,_=0)=>{for(let A=_;A<f.length;A++)Ue(f[A],u,p,g,h)},tn=f=>f.shapeFlag&6?tn(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ya=(f,u,p)=>{f==null?u._vnode&&Ue(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Wi(),u._vnode=f},ct={p:N,um:Ue,m:ft,r:ba,mt:Xn,mc:ie,pc:Se,pbc:lt,n:tn,o:e};let Jn,Gn;return t&&([Jn,Gn]=t(ct)),{render:ya,hydrate:Jn,createApp:Fl(ya,Jn)}}function Qe({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function so(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ye(a[i]),s.el=o.el),n||so(o,s))}}function jl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const zl=e=>e.__isTeleport,Me=Symbol(void 0),ta=Symbol(void 0),Xt=Symbol(void 0),dn=Symbol(void 0),Dt=[];let xe=null;function Ct(e=!1){Dt.push(xe=e?null:[])}function Dl(){Dt.pop(),xe=Dt[Dt.length-1]||null}let Vt=1;function Da(e){Vt+=e}function Ul(e){return e.dynamicChildren=Vt>0?xe||vt:null,Dl(),Vt>0&&xe&&xe.push(e),e}function Ot(e,t,n,r,a,i){return Ul(k(e,t,n,r,a,i,!0))}function xr(e){return e?e.__v_isVNode===!0:!1}function Nt(e,t){return e.type===t.type&&e.key===t.key}const Dn="__vInternal",lo=({key:e})=>e!=null?e:null,mn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ee(e)||Z(e)||R(e)?{i:ye,r:e,k:t,f:!!n}:e:null;function k(e,t=null,n=null,r=0,a=null,i=e===Me?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lo(t),ref:t&&mn(t),scopeId:Rn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(na(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Vt>0&&!o&&xe&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xe.push(l),l}const z=Bl;function Bl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===_l)&&(e=Xt),xr(e)){const s=xt(e,t,!0);return n&&na(s,n),Vt>0&&!i&&xe&&(s.shapeFlag&6?xe[xe.indexOf(e)]=s:xe.push(s)),s.patchFlag|=-2,s}if(ef(e)&&(e=e.__vccOpts),t){t=Hl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=gt(s)),te(l)&&(Fi(l)&&!$(l)&&(l=ae({},l)),t.style=jr(l))}const o=ee(e)?1:il(e)?128:zl(e)?64:te(e)?4:R(e)?2:0;return k(e,t,n,r,a,o,i,!0)}function Hl(e){return e?Fi(e)||Dn in e?ae({},e):e:null}function xt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Yl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&lo(s),ref:t&&t.ref?n&&a?$(a)?a.concat(mn(t)):[a,mn(t)]:mn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xt(e.ssContent),ssFallback:e.ssFallback&&xt(e.ssFallback),el:e.el,anchor:e.anchor}}function fo(e=" ",t=0){return z(ta,null,e,t)}function Wl(e,t){const n=z(dn,null,e);return n.staticCount=t,n}function Ee(e){return e==null||typeof e=="boolean"?z(Xt):$(e)?z(Me,null,e.slice()):typeof e=="object"?Ye(e):z(ta,null,String(e))}function Ye(e){return e.el===null||e.memo?e:xt(e)}function na(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),na(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Dn in t)?t._ctx=ye:a===3&&ye&&(ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:ye},n=32):(t=String(t),r&64?(n=16,t=[fo(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=gt([t.class,r.class]));else if(a==="style")t.style=jr([t.style,r.style]);else if(En(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Oe(e,t,n,r=null){ke(e,t,7,[n,r])}const Kl=oo();let ql=0;function Xl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Kl,i={uid:ql++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:no(r,a),emitsOptions:Ki(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Zs.bind(null,i),e.ce&&e.ce(i),i}let Q=null;const _t=e=>{Q=e,e.scope.on()},it=()=>{Q&&Q.scope.off(),Q=null};function co(e){return e.vnode.shapeFlag&4}let Jt=!1;function Vl(e,t=!1){Jt=t;const{props:n,children:r}=e.vnode,a=co(e);Tl(e,n,a,t),Nl(e,r);const i=a?Jl(e,t):void 0;return Jt=!1,i}function Jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ri(new Proxy(e.ctx,kl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ql(e):null;_t(e),kt();const i=qe(r,e,0,[e.props,a]);if(At(),it(),ki(i)){if(i.then(it,it),t)return i.then(o=>{Ua(e,o,t)}).catch(o=>{Mn(o,e,0)});e.asyncDep=i}else Ua(e,i,t)}else uo(e,t)}function Ua(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:te(t)&&(e.setupState=zi(t)),uo(e,n)}let Ba;function uo(e,t,n){const r=e.type;if(!e.render){if(!t&&Ba&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=Ba(a,c)}}e.render=r.render||we}_t(e),kt(),Al(e),At(),it()}function Gl(e){return new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}})}function Ql(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Gl(e))},slots:e.slots,emit:e.emit,expose:t}}function Un(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(zi(Ri(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xn)return xn[n](e)}}))}function Zl(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function ef(e){return R(e)&&"__vccOpts"in e}const he=(e,t)=>Ks(e,t,Jt);function mo(e,t,n){const r=arguments.length;return r===2?te(t)&&!$(t)?xr(t)?z(e,null,[t]):z(e,t):z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xr(n)&&(n=[n]),z(e,t,n))}const tf="3.2.37",nf="http://www.w3.org/2000/svg",et=typeof document<"u"?document:null,Ha=et&&et.createElement("template"),rf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?et.createElementNS(nf,e):et.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ha.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ha.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function af(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function of(e,t,n){const r=e.style,a=ee(n);if(n&&!a){for(const i in n)_r(r,i,n[i]);if(t&&!ee(t))for(const i in t)n[i]==null&&_r(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Wa=/\s*!important$/;function _r(e,t,n){if($(n))n.forEach(r=>_r(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=sf(e,t);Wa.test(n)?e.setProperty(wt(r),n.replace(Wa,""),"important"):e[r]=n}}const Ya=["Webkit","Moz","ms"],nr={};function sf(e,t){const n=nr[t];if(n)return n;let r=Pe(t);if(r!=="filter"&&r in e)return nr[t]=r;r=Sn(r);for(let a=0;a<Ya.length;a++){const i=Ya[a]+r;if(i in e)return nr[t]=i}return t}const Ka="http://www.w3.org/1999/xlink";function lf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ka,t.slice(6,t.length)):e.setAttributeNS(Ka,t,n);else{const i=Qo(t);n==null||i&&!wi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function ff(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=wi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[po,cf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let wr=0;const uf=Promise.resolve(),df=()=>{wr=0},mf=()=>wr||(uf.then(df),wr=po());function pf(e,t,n,r){e.addEventListener(t,n,r)}function hf(e,t,n,r){e.removeEventListener(t,n,r)}function gf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=vf(t);if(r){const c=i[t]=bf(r,a);pf(e,s,c,l)}else o&&(hf(e,s,o,l),i[t]=void 0)}}const qa=/(?:Once|Passive|Capture)$/;function vf(e){let t;if(qa.test(e)){t={};let n;for(;n=e.match(qa);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[wt(e.slice(2)),t]}function bf(e,t){const n=r=>{const a=r.timeStamp||po();(cf||a>=n.attached-1)&&ke(yf(r,n.value),t,5,[r])};return n.value=e,n.attached=mf(),n}function yf(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Xa=/^on[a-z]/,xf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?af(e,r,a):t==="style"?of(e,n,r):En(t)?zr(t)||gf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_f(e,t,r,a))?ff(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),lf(e,t,r,a))};function _f(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Xa.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Xa.test(t)&&ee(n)?!1:t in e}const kr={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Mt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Mt(e,!0),r.enter(e)):r.leave(e,()=>{Mt(e,!1)}):Mt(e,t))},beforeUnmount(e,{value:t}){Mt(e,t)}};function Mt(e,t){e.style.display=t?e._vod:"none"}const wf=ae({patchProp:xf},rf);let Va;function kf(){return Va||(Va=Rl(wf))}const Af=(...e)=>{const t=kf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Cf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Cf(e){return ee(e)?document.querySelector(e):e}const Bn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Of={},If=e=>($n("data-v-6fa1d8f1"),e=e(),jn(),e),Ef={class:"h-screen w-full absolute top-0 left-0 z-20"},Tf=If(()=>k("div",{class:"h-full w-full text-3xl text-white bg-gray-900 flex flex-col justify-center items-center"},[k("h2",{class:"text-center"},"Ecommerse in the metaverse"),k("p",{class:"anim_block w-[950px] h-16 flex justify-center items-center"},"is just getting started")],-1)),Pf=[Tf];function Sf(e,t){return Ct(),Ot("section",Ef,Pf)}const Nf=Bn(Of,[["render",Sf],["__scopeId","data-v-6fa1d8f1"]]),Mf="/assets/logo-full-grey.89b2a593.png",Lf="/assets/talked-about-bar-BW.2b870656.png",Ff="/assets/talked-about-bar-BW-mobile.da701865.png";const Rf={},Qt=e=>($n("data-v-664360bf"),e=e(),jn(),e),$f={class:"bg-black w-full relative bottom-0 flex flex-col justify-center items-center p-8 lg:p-0 mb-8"},jf={class:"flex flex-col lg:flex-row justify-center lg:justify-around items-start w-full lg:space-x-8 space-y-8"},zf=Qt(()=>k("div",{class:"lg:w-3/12 lg:p-10 hidden lg:contents"},[k("img",{src:Mf,alt:"Agoraverse",class:"w-32 mt-auto mb-3"})],-1)),Df={class:"lg:w-2/12"},Uf=Qt(()=>k("h3",null,"ABOUT US",-1)),Bf={class:"mt-6"},Hf=Qt(()=>k("p",null,"Agoraverse is a platform you can use to create amazing 3D online stores in Web 3.0 fashion.",-1)),Wf={class:"text-main text-xl mt-12"},Yf={class:"flex space-x-3"},Kf={rel:"noopener",target:"_blank",href:"https://twitter.com/lofts_club"},qf={rel:"noopener",target:"_blank",href:"https://discord.gg/uDhAsNvQ5H"},Xf={rel:"noopener",target:"_blank",href:"https://www.youtube.com/channel/UCNiMQSHGVZEGtPzjT7OzbEQ"},Vf={rel:"noopener",target:"_blank",href:"https://instagram.com/agoraverse_"},Jf=Wl('<div class="lg:w-3/12 lg:pl-20 xl:pl-40" data-v-664360bf><h3 data-v-664360bf>RESOURCES</h3><ul class="space-y-4 text-[#999] mt-6" data-v-664360bf><li data-v-664360bf><a rel="noopener" target="_blank" href="https://agoraverse.org/wp-content/uploads/2022/05/Whitepaper-Agoraverse-1.pdf" data-v-664360bf>Whitepaper</a></li><li data-v-664360bf><a rel="noopener" target="_blank" href="https://medium.com/@theloftsbusinessclub/tokenomics-b8704d283bca" data-v-664360bf>Tokenomics</a></li><li data-v-664360bf><a rel="noopener" target="_blank" href="https://medium.com/@theloftsbusinessclub/frequently-asked-questions-a899c6178ad2" data-v-664360bf>FAQ</a></li><li data-v-664360bf><a rel="noopener" target="_blank" href="https://app.agoraverse.org/staking" data-v-664360bf>Staking</a></li></ul></div>',1),Gf=Qt(()=>k("div",{class:"lg:w-3/12"},[k("div",{id:"mlb2-970719",class:"ml-form-embedContainer ml-subscribe-form ml-subscribe-form-970719"},[k("div",{class:"ml-form-align-center"},[k("div",{class:"ml-form-embedWrapper embedForm"},[k("div",{class:"ml-form-embedBody ml-form-embedBodyDefault row-form"},[k("div",{class:"ml-form-embedContent",style:{}},[k("h4",null,"Newsletter"),k("p",null,"Signup for news and special offers!")]),k("form",{class:"ml-block-form",action:"https://assets.mailerlite.com/jsonp/90605/forms/61611010344092687/subscribe","data-code":"",method:"post",target:"_blank"},[k("div",{class:"ml-form-formContent"},[k("div",{class:"ml-form-fieldRow ml-last-item"},[k("div",{class:"ml-field-group ml-field-email ml-validate-email ml-validate-required"},[k("input",{"aria-label":"email","aria-required":"true",type:"email",class:"form-control","data-inputmask":"",name:"fields[email]",placeholder:"Email",autocomplete:"email"})])])]),k("input",{type:"hidden",name:"ml-submit",value:"1"}),k("div",{class:"ml-form-embedSubmit"},[k("button",{type:"submit",class:"primary"},"Subscribe"),k("button",{disabled:"disabled",style:{display:"none"},type:"button",class:"loading"},[k("div",{class:"ml-form-embedSubmitLoad"}),k("span",{class:"sr-only"},"Loading...")])]),k("input",{type:"hidden",name:"anticsrf",value:"true"})])]),k("div",{class:"ml-form-successBody row-success",style:{display:"none"}},[k("div",{class:"ml-form-successContent"},[k("h4",null,"Thank you!"),k("p",null,"You have successfully joined our subscriber list.")])])])])])],-1)),Qf=Qt(()=>k("div",{class:"w-full flex flex-col lg:flex-row justify-start lg:justify-around items-start my-8 hidden"},[k("img",{src:Lf,alt:"Featured on",class:"hidden lg:contents"}),k("h3",{class:"lg:hidden"},"Featured on"),k("img",{src:Ff,alt:"Featured on",class:"lg:hidden"})],-1));function Zf(e,t){const n=Zr("font-awesome-icon");return Ct(),Ot("footer",$f,[k("div",jf,[zf,k("div",Df,[Uf,k("div",Bf,[Hf,k("div",Wf,[k("ul",Yf,[k("li",null,[k("a",Kf,[z(n,{icon:"fa-brands fa-twitter"})])]),k("li",null,[k("a",qf,[z(n,{icon:"fa-brands fa-discord"})])]),k("li",null,[k("a",Xf,[z(n,{icon:"fa-brands fa-youtube"})])]),k("li",null,[k("a",Vf,[z(n,{icon:"fa-brands fa-instagram"})])])])])])]),Jf,Gf]),Qf])}const ec=Bn(Rf,[["render",Zf],["__scopeId","data-v-664360bf"]]),tc={class:"relative lg:w-52 w-32 lg:h-full h-[137px] cursor-pointer"},nc=["src","alt"],ue={__name:"ShopImage",props:["img","shopCount","limit","indexImg"],emits:["load-image","load-new-image"],setup(e,{emit:t}){const n=e,r=tt(null);function a(){r.value.classList.toggle("animate__zoomIn"),r.value.classList.toggle("animate__zoomOut"),setTimeout(()=>{t("load-new-image",n.indexImg),r.value.classList.toggle("animate__zoomIn"),r.value.classList.toggle("animate__zoomOut")},1e3)}function i(){t("load-image",n.indexImg)}return(o,s)=>{const l=Zr("font-awesome-icon");return Ct(),Ot("div",tc,[pr(k("img",{src:n.img,alt:n.img,onClick:s[0]||(s[0]=c=>a()),ref_key:"image",ref:r,rel:"preload",class:"animate__animated animate__zoomIn lg:w-40 w-32 lg:cursor-pointer cursor-default z-20"},null,8,nc),[[kr,n.img!=null]]),pr(k("div",{onClick:s[1]||(s[1]=c=>i()),class:"lg:w-52 w-full absolute inset-0 lg:cursor-pointer cursor-default flex justify-center items-center text-2xl z-10"},[z(l,{icon:"fa-solid fa-hammer"})],512),[[kr,n.limit<=n.shopCount&&n.img==null]])])}}};const ho=e=>($n("data-v-4cf3ae1a"),e=e(),jn(),e),rc={class:"relative bg-img"},ac={class:"maindiv min-h-[680px] lg:min-h-screen flex flex-col-reverse lg:flex-row justify-around items-around lg:justify-center lg:items-center h-full w-full"},ic={class:"lg:w-6/12 w-full h-full lg:mt-32 lg:ml-10"},oc=ho(()=>k("h2",{class:"lg:text-7xl text-2xl px-6"},"Join the next generation of storefronts in the Metaverse.",-1)),sc={class:"flex my-8"},lc=ho(()=>k("button",{class:"px-4 py-2 bg-main border border-main m-6 rounded"},"BOOK A DEMO",-1)),fc={class:"h-8 w-8 border border-white rounded-full flex justify-center items-center mr-1"},cc=fo(" START EXPERIENCE "),uc={id:"desktopview",class:"lg:flex w-full lg:w-6/12 h-[680px] hidden flex-col justify-center items-center -mb-20 lg:-mb-0"},dc={class:"flex -mb-14 -space-x-10 h-[200px]"},mc={class:"flex -mb-14 -space-x-10 h-[200px]"},pc={class:"flex -mb-14 -space-x-10 h-[200px]"},hc={id:"mobileview",class:"w-full lg:hidden lg:w-6/12 h-full flex flex-col justify-center items-center"},gc={class:"flex -mb-6 -space-x-10"},vc={class:"flex -mb-6 -space-x-10"},bc={class:"flex -mb-6 -space-x-10"},yc={__name:"Home",setup(e){const t=tt(3),n=tt(1),r=tt(["images/Agorans.png","images/Arcaderoom.png","images/Carshop.png"]),a=tt(["images/Agorans.png"]),i=["images/Agorans.png","images/Arcaderoom.png","images/Carshop.png","images/dbdiamonds.png","images/RoomClothingshop.png","images/LoftClub.png","images/LuxeClothingshop.png","images/Menshoes.png","images/Musicshop.png","images/womensshoes.png"];function o(){const l=i.filter(d=>!r.value.includes(d)),c=l[Math.floor(Math.random()*l.length)];r.value.push(c),a.value.push(c)}function s(l){console.log(l);const c=i.filter(m=>!r.value.includes(m)),d=c[Math.floor(Math.random()*c.length)];r.value[l]=d,a.value[l]=d}return(l,c)=>{const d=Zr("font-awesome-icon");return Ct(),Ot("main",rc,[k("div",ac,[k("div",ic,[oc,k("div",sc,[lc,k("button",{onClick:c[0]||(c[0]=m=>l.$emit("starting-slide")),class:"flex justify-center items-center -ml-4 lg:ml-0"},[k("div",fc,[z(d,{icon:"fa-solid fa-play"})]),cc])])]),k("div",uc,[k("div",dc,[z(ue,{indexImg:"3",img:r.value[3],shopCount:t.value,limit:3,onClick:c[1]||(c[1]=m=>{t.value++,n.value++}),onLoadImage:o,onLoadNewImage:s},null,8,["img","shopCount"]),z(ue,{indexImg:"4",img:r.value[4],shopCount:t.value,limit:4,onClick:c[2]||(c[2]=m=>{t.value++,n.value++}),onLoadImage:o,onLoadNewImage:s},null,8,["img","shopCount"]),z(ue,{indexImg:"5",img:r.value[5],shopCount:t.value,limit:5,onClick:c[3]||(c[3]=m=>{t.value++,n.value++}),onLoadImage:o,onLoadNewImage:s},null,8,["img","shopCount"])]),k("div",mc,[z(ue,{indexImg:"0",limit:0,shopCount:t.value,img:r.value[0],onLoadImage:o,onLoadNewImage:s},null,8,["shopCount","img"]),z(ue,{indexImg:"1",limit:1,shopCount:t.value,img:r.value[1],onLoadImage:o,onLoadNewImage:s},null,8,["shopCount","img"])]),k("div",pc,[z(ue,{indexImg:"7",img:r.value[7],shopCount:t.value,limit:7,onClick:c[4]||(c[4]=m=>{t.value++,n.value++}),onLoadImage:o,onLoadNewImage:s},null,8,["img","shopCount"]),z(ue,{indexImg:"2",limit:2,shopCount:t.value,img:r.value[2],onLoadImage:o,onLoadNewImage:s},null,8,["shopCount","img"]),z(ue,{indexImg:"6",img:r.value[6],shopCount:t.value,limit:6,onClick:c[5]||(c[5]=m=>{t.value++,n.value++}),onLoadImage:o,onLoadNewImage:s},null,8,["img","shopCount"])])]),k("div",hc,[k("div",gc,[z(ue,{indexImg:"1",shopCount:n.value,limit:1,img:a.value[1],onClick:c[6]||(c[6]=m=>{n.value++,t.value++}),onLoadImage:o,onLoadNewImage:s},null,8,["shopCount","img"]),z(ue,{indexImg:"2",shopCount:n.value,limit:2,img:a.value[2],onClick:c[7]||(c[7]=m=>{n.value++,t.value++}),onLoadImage:o,onLoadNewImage:s},null,8,["shopCount","img"])]),k("div",vc,[z(ue,{indexImg:"0",shopCount:n.value,limit:0,img:a.value[0],onClick:c[8]||(c[8]=m=>{n.value++,t.value++}),onLoadImage:o,onLoadNewImage:s},null,8,["shopCount","img"])]),k("div",bc,[z(ue,{indexImg:"3",limit:3,img:a.value[3],onClick:c[9]||(c[9]=m=>{n.value++,t.value++}),shopCount:n.value,onLoadImage:o,onLoadNewImage:s},null,8,["img","shopCount"]),z(ue,{indexImg:"4",limit:4,img:a.value[4],onClick:c[10]||(c[10]=m=>{n.value++,t.value++}),shopCount:n.value,onLoadImage:o,onLoadNewImage:s},null,8,["img","shopCount"])])])])])}}},xc=Bn(yc,[["__scopeId","data-v-4cf3ae1a"]]),_c="/assets/logo.da11cf05.png";const wc={},go=e=>($n("data-v-82f58a7b"),e=e(),jn(),e),kc={class:"my-4 flex justify-between items-center px-4 bg-transparent absolute top-0 left-0 z-50 w-full h-[75px]"},Ac=go(()=>k("img",{src:_c,alt:"Agora",class:"w-10"},null,-1)),Cc=[Ac],Oc=go(()=>k("button",{class:"cta"},"BOOK A DEMO",-1));function Ic(e,t){return Ct(),Ot("header",kc,[k("h1",{onClick:t[0]||(t[0]=n=>e.$emit("starting-slide")),class:"text-4xl cursor-pointer ml-10"},Cc),Oc])}const Ec=Bn(wc,[["render",Ic],["__scopeId","data-v-82f58a7b"]]);const Tc={class:"min-h-screen bg-black text-white overflow-hidden"},Pc={__name:"App",setup(e){const t=tt(!1),n=tt(!1);function r(){window.scrollTo(0,0),t.value=!t.value,n.value=!0,t.value==!1&&setTimeout(()=>{n.value=!n.value},1e3)}function a(){t.value=!1,n.value&&(n.value=!0,t.value==!1&&setTimeout(()=>{n.value=!n.value},1e3))}return(i,o)=>(Ct(),Ot("div",Tc,[z(Ec,{onStartingSlide:a}),k("div",{class:gt(["h-screen w-full relative lg:mt-0 transition-all",{"mt-20":!t.value}])},[z(xc,{onStartingSlide:r,class:gt({isSlideActivate:"animate__slideOutUp"})}),pr(z(Nf,{class:gt([t.value?"anim_slideIn":"anim_slideOut"])},null,8,["class"]),[[kr,n.value]])],2),z(ec)]))}};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ja(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ja(Object(n),!0).forEach(function(r){Mc(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ja(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wn(e){return wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wn(e)}function Sc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ga(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nc(e,t,n){return t&&Ga(e.prototype,t),n&&Ga(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mc(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ra(e,t){return Fc(e)||$c(e,t)||vo(e,t)||zc()}function Hn(e){return Lc(e)||Rc(e)||vo(e)||jc()}function Lc(e){if(Array.isArray(e))return Ar(e)}function Fc(e){if(Array.isArray(e))return e}function Rc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $c(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function vo(e,t){if(!!e){if(typeof e=="string")return Ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ar(e,t)}}function Ar(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qa=function(){},aa={},bo={},yo=null,xo={mark:Qa,measure:Qa};try{typeof window<"u"&&(aa=window),typeof document<"u"&&(bo=document),typeof MutationObserver<"u"&&(yo=MutationObserver),typeof performance<"u"&&(xo=performance)}catch{}var Dc=aa.navigator||{},Za=Dc.userAgent,ei=Za===void 0?"":Za,Ve=aa,J=bo,ti=yo,ln=xo;Ve.document;var De=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",_o=~ei.indexOf("MSIE")||~ei.indexOf("Trident/"),Re="___FONT_AWESOME___",Cr=16,wo="fa",ko="svg-inline--fa",ot="data-fa-i2svg",Or="data-fa-pseudo-element",Uc="data-fa-pseudo-element-pending",ia="data-prefix",oa="data-icon",ni="fontawesome-i2svg",Bc="async",Hc=["HTML","HEAD","STYLE","SCRIPT"],Ao=function(){try{return!0}catch{return!1}}(),sa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},kn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Co={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Wc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Yc=/fa[srltdbk\-\ ]/,Oo="fa-layers-text",Kc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,qc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Io=[1,2,3,4,5,6,7,8,9,10],Xc=Io.concat([11,12,13,14,15,16,17,18,19,20]),Vc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jc=[].concat(Hn(Object.keys(kn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY]).concat(Io.map(function(e){return"".concat(e,"x")})).concat(Xc.map(function(e){return"w-".concat(e)})),Eo=Ve.FontAwesomeConfig||{};function Gc(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var Zc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zc.forEach(function(e){var t=ra(e,2),n=t[0],r=t[1],a=Qc(Gc(n));a!=null&&(Eo[r]=a)})}var eu={familyPrefix:wo,styleDefault:"solid",replacementClass:ko,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ut=C(C({},eu),Eo);Ut.autoReplaceSvg||(Ut.observeMutations=!1);var S={};Object.keys(Ut).forEach(function(e){Object.defineProperty(S,e,{enumerable:!0,set:function(n){Ut[e]=n,pn.forEach(function(r){return r(S)})},get:function(){return Ut[e]}})});Ve.FontAwesomeConfig=S;var pn=[];function tu(e){return pn.push(e),function(){pn.splice(pn.indexOf(e),1)}}var He=Cr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nu(e){if(!(!e||!De)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var ru="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gt(){for(var e=12,t="";e-- >0;)t+=ru[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function la(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function To(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function au(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(To(e[n]),'" ')},"").trim()}function Wn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function fa(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function iu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function ou(e){var t=e.transform,n=e.width,r=n===void 0?Cr:n,a=e.height,i=a===void 0?Cr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&_o?l+="translate(".concat(t.x/He-r/2,"em, ").concat(t.y/He-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/He,"em), calc(-50% + ").concat(t.y/He,"em)) "):l+="translate(".concat(t.x/He,"em, ").concat(t.y/He,"em) "),l+="scale(".concat(t.size/He*(t.flipX?-1:1),", ").concat(t.size/He*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var su=`:root, :host {
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
}`;function Po(){var e=wo,t=ko,n=S.familyPrefix,r=S.replacementClass,a=su;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ri=!1;function rr(){S.autoAddCss&&!ri&&(nu(Po()),ri=!0)}var lu={mixout:function(){return{dom:{css:Po,insertCss:rr}}},hooks:function(){return{beforeDOMElementCreation:function(){rr()},beforeI2svg:function(){rr()}}}},$e=Ve||{};$e[Re]||($e[Re]={});$e[Re].styles||($e[Re].styles={});$e[Re].hooks||($e[Re].hooks={});$e[Re].shims||($e[Re].shims=[]);var _e=$e[Re],So=[],fu=function e(){J.removeEventListener("DOMContentLoaded",e),An=1,So.map(function(t){return t()})},An=!1;De&&(An=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),An||J.addEventListener("DOMContentLoaded",fu));function cu(e){!De||(An?setTimeout(e,0):So.push(e))}function Zt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?To(e):"<".concat(t," ").concat(au(r),">").concat(i.map(Zt).join(""),"</").concat(t,">")}function ai(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var uu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},ar=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?uu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function du(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ir(e){var t=du(e);return t.length===1?t[0].toString(16):null}function mu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ii(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Er(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ii(t);typeof _e.hooks.addPack=="function"&&!a?_e.hooks.addPack(e,ii(t)):_e.styles[e]=C(C({},_e.styles[e]||{}),i),e==="fas"&&Er("fa",t)}var Bt=_e.styles,pu=_e.shims,hu=Object.values(Co),ca=null,No={},Mo={},Lo={},Fo={},Ro={},gu=Object.keys(sa);function vu(e){return~Jc.indexOf(e)}function bu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!vu(a)?a:null}var $o=function(){var t=function(i){return ar(Bt,function(o,s,l){return o[l]=ar(s,i,{}),o},{})};No=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Mo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ro=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Bt||S.autoFetchSvg,r=ar(pu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Lo=r.names,Fo=r.unicodes,ca=Yn(S.styleDefault)};tu(function(e){ca=Yn(e.styleDefault)});$o();function ua(e,t){return(No[e]||{})[t]}function yu(e,t){return(Mo[e]||{})[t]}function pt(e,t){return(Ro[e]||{})[t]}function jo(e){return Lo[e]||{prefix:null,iconName:null}}function xu(e){var t=Fo[e],n=ua("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return ca}var da=function(){return{prefix:null,iconName:null,rest:[]}};function Yn(e){var t=sa[e],n=kn[e]||kn[t],r=e in _e.styles?e:null;return n||r||null}function Kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=bu(S.familyPrefix,s);if(Bt[s]?(s=hu.includes(s)?Wc[s]:s,a=s,o.prefix=s):gu.indexOf(s)>-1?(a=s,o.prefix=Yn(s)):l?o.iconName=l:s!==S.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?jo(o.iconName):{},d=pt(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||d||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!Bt.far&&Bt.fas&&!S.autoFetchSvg&&(o.prefix="fas")}return o},da());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Je()||"fas"),i}var _u=function(){function e(){Sc(this,e),this.definitions={}}return Nc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=C(C({},n.definitions[s]||{}),o[s]),Er(s,o[s]);var l=Co[s];l&&Er(l,o[s]),$o()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),oi=[],ht={},yt={},wu=Object.keys(yt);function ku(e,t){var n=t.mixoutsTo;return oi=e,ht={},Object.keys(yt).forEach(function(r){wu.indexOf(r)===-1&&delete yt[r]}),oi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),wn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ht[o]||(ht[o]=[]),ht[o].push(i[o])})}r.provides&&r.provides(yt)}),n}function Tr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ht[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function st(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ht[e]||[];a.forEach(function(i){i.apply(null,n)})}function je(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return yt[e]?yt[e].apply(null,t):void 0}function Pr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(!!t)return t=pt(n,t)||t,ai(zo.definitions,n,t)||ai(_e.styles,n,t)}var zo=new _u,Au=function(){S.autoReplaceSvg=!1,S.observeMutations=!1,st("noAuto")},Cu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return De?(st("beforeI2svg",t),je("pseudoElements2svg",t),je("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;S.autoReplaceSvg===!1&&(S.autoReplaceSvg=!0),S.observeMutations=!0,cu(function(){Iu({autoReplaceSvgRoot:n}),st("watch",t)})}},Ou={icon:function(t){if(t===null)return null;if(wn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Yn(t[0]);return{prefix:r,iconName:pt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(S.familyPrefix,"-"))>-1||t.match(Yc))){var a=Kn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:pt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:pt(i,t)||t}}}},pe={noAuto:Au,config:S,dom:Cu,parse:Ou,library:zo,findIconDefinition:Pr,toHtml:Zt},Iu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(_e.styles).length>0||S.autoFetchSvg)&&De&&S.autoReplaceSvg&&pe.dom.i2svg({node:r})};function qn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Zt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!De){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Eu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Wn(C(C({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Tu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(S.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},a),{},{id:o}),children:r}]}]}function ma(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,O=b===void 0?!1:b,F=r.found?r:n,j=F.width,N=F.height,y=a==="fak",I=[S.replacementClass,i?"".concat(S.familyPrefix,"-").concat(i):""].filter(function(ie){return m.classes.indexOf(ie)===-1}).filter(function(ie){return ie!==""||!!ie}).concat(m.classes).join(" "),M={children:[],attributes:C(C({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:I,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(N)})},D=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/N*16*.0625,"em")}:{};O&&(M.attributes[ot]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||Gt())},children:[l]}),delete M.attributes.title);var q=C(C({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:C(C({},D),m.styles)}),ne=r.found&&n.found?je("generateAbstractMask",q)||{children:[],attributes:{}}:je("generateAbstractIcon",q)||{children:[],attributes:{}},fe=ne.children,Ae=ne.attributes;return q.children=fe,q.attributes=Ae,s?Tu(q):Eu(q)}function si(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=C(C(C({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ot]="");var d=C({},o.styles);fa(a)&&(d.transform=ou({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Wn(d);m.length>0&&(c.style=m);var b=[];return b.push({tag:"span",attributes:c,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Pu(e){var t=e.content,n=e.title,r=e.extra,a=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Wn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ir=_e.styles;function Sr(e){var t=e[0],n=e[1],r=e.slice(4),a=ra(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(S.familyPrefix,"-").concat(rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(S.familyPrefix,"-").concat(rt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(S.familyPrefix,"-").concat(rt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Su={found:!1,width:512,height:512};function Nu(e,t){!Ao&&!S.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Nr(e,t){var n=t;return t==="fa"&&S.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if(je("missingIconAbstract"),n==="fa"){var i=jo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ir[t]&&ir[t][e]){var o=ir[t][e];return r(Sr(o))}Nu(e,t),r(C(C({},Su),{},{icon:S.showMissingIcons&&e?je("missingIconAbstract")||{}:{}}))})}var li=function(){},Mr=S.measurePerformance&&ln&&ln.mark&&ln.measure?ln:{mark:li,measure:li},Rt='FA "6.1.1"',Mu=function(t){return Mr.mark("".concat(Rt," ").concat(t," begins")),function(){return Do(t)}},Do=function(t){Mr.mark("".concat(Rt," ").concat(t," ends")),Mr.measure("".concat(Rt," ").concat(t),"".concat(Rt," ").concat(t," begins"),"".concat(Rt," ").concat(t," ends"))},pa={begin:Mu,end:Do},hn=function(){};function fi(e){var t=e.getAttribute?e.getAttribute(ot):null;return typeof t=="string"}function Lu(e){var t=e.getAttribute?e.getAttribute(ia):null,n=e.getAttribute?e.getAttribute(oa):null;return t&&n}function Fu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(S.replacementClass)}function Ru(){if(S.autoReplaceSvg===!0)return gn.replace;var e=gn[S.autoReplaceSvg];return e||gn.replace}function $u(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function ju(e){return J.createElement(e)}function Uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?$u:ju:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Uo(o,{ceFn:r}))}),a}function zu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var gn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Uo(a),n)}),n.getAttribute(ot)===null&&S.keepOriginalSource){var r=J.createComment(zu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~la(n).indexOf(S.replacementClass))return gn.replace(t);var a=new RegExp("".concat(S.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===S.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Zt(s)}).join(`
`);n.setAttribute(ot,""),n.innerHTML=o}};function ci(e){e()}function Bo(e,t){var n=typeof t=="function"?t:hn;if(e.length===0)n();else{var r=ci;S.mutateApproach===Bc&&(r=Ve.requestAnimationFrame||ci),r(function(){var a=Ru(),i=pa.begin("mutate");e.map(a),i(),n()})}}var ha=!1;function Ho(){ha=!0}function Lr(){ha=!1}var Cn=null;function ui(e){if(!!ti&&!!S.observeMutations){var t=e.treeCallback,n=t===void 0?hn:t,r=e.nodeCallback,a=r===void 0?hn:r,i=e.pseudoElementsCallback,o=i===void 0?hn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Cn=new ti(function(c){if(!ha){var d=Je();It(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!fi(m.addedNodes[0])&&(S.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&S.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&fi(m.target)&&~Vc.indexOf(m.attributeName))if(m.attributeName==="class"&&Lu(m.target)){var b=Kn(la(m.target)),O=b.prefix,F=b.iconName;m.target.setAttribute(ia,O||d),F&&m.target.setAttribute(oa,F)}else Fu(m.target)&&a(m.target)})}}),De&&Cn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Du(){!Cn||Cn.disconnect()}function Uu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Bu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Kn(la(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=yu(a.prefix,e.innerText)||ua(a.prefix,Ir(e.innerText))),a}function Hu(e){var t=It(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return S.autoA11y&&(n?t["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(r||Gt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function di(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Bu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Hu(e),s=Tr("parseNodeAttributes",{},e),l=t.styleParser?Uu(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Yu=_e.styles;function Wo(e){var t=S.autoReplaceSvg==="nest"?di(e,{styleParser:!1}):di(e);return~t.extra.classes.indexOf(Oo)?je("generateLayersText",e,t):je("generateSvgReplacementMutation",e,t)}function mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!De)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(ni,"-").concat(m))},a=function(m){return n.remove("".concat(ni,"-").concat(m))},i=S.autoFetchSvg?Object.keys(sa):Object.keys(Yu),o=[".".concat(Oo,":not([").concat(ot,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=It(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=pa.begin("onTree"),c=s.reduce(function(d,m){try{var b=Wo(m);b&&d.push(b)}catch(O){Ao||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(b){Bo(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wo(e).then(function(n){n&&Bo([n],t)})}function qu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Pr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Pr(a||{})),e(r,C(C({},n),{},{mask:a}))}}var Xu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,b=m===void 0?null:m,O=n.titleId,F=O===void 0?null:O,j=n.classes,N=j===void 0?[]:j,y=n.attributes,I=y===void 0?{}:y,M=n.styles,D=M===void 0?{}:M;if(!!t){var q=t.prefix,ne=t.iconName,fe=t.icon;return qn(C({type:"icon"},t),function(){return st("beforeDOMElementCreation",{iconDefinition:t,params:n}),S.autoA11y&&(b?I["aria-labelledby"]="".concat(S.replacementClass,"-title-").concat(F||Gt()):(I["aria-hidden"]="true",I.focusable="false")),ma({icons:{main:Sr(fe),mask:l?Sr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:q,iconName:ne,transform:C(C({},Te),a),symbol:o,title:b,maskId:d,titleId:F,extra:{attributes:I,styles:D,classes:N}})})}},Vu={mixout:function(){return{icon:qu(Xu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=mi,n.nodeCallback=Ku,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return mi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,F){Promise.all([Nr(a,s),d.iconName?Nr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var N=ra(j,2),y=N[0],I=N[1];O([n,ma({icons:{main:y,mask:I},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Wn(s);l.length>0&&(a.style=l);var c;return fa(o)&&(c=je("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Ju={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return qn({type:"layer"},function(){st("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(S.familyPrefix,"-layers")].concat(Hn(i)).join(" ")},children:o}]})}}}},Gu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return qn({type:"counter",content:n},function(){return st("beforeDOMElementCreation",{content:n,params:r}),Pu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(S.familyPrefix,"-layers-counter")].concat(Hn(s))}})})}}}},Qu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return qn({type:"text",content:n},function(){return st("beforeDOMElementCreation",{content:n,params:r}),si({content:n,transform:C(C({},Te),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(S.familyPrefix,"-layers-text")].concat(Hn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(_o){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return S.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,si({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Zu=new RegExp('"',"ug"),pi=[1105920,1112319];function ed(e){var t=e.replace(Zu,""),n=mu(t,0),r=n>=pi[0]&&n<=pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ir(a?t[0]:t),isSecondary:r||a}}function hi(e,t){var n="".concat(Uc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=It(e.children),o=i.filter(function(ne){return ne.getAttribute(Or)===t})[0],s=Ve.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Kc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?kn[l[2].toLowerCase()]:qc[c],O=ed(m),F=O.value,j=O.isSecondary,N=l[0].startsWith("FontAwesome"),y=ua(b,F),I=y;if(N){var M=xu(F);M.iconName&&M.prefix&&(y=M.iconName,b=M.prefix)}if(y&&!j&&(!o||o.getAttribute(ia)!==b||o.getAttribute(oa)!==I)){e.setAttribute(n,I),o&&e.removeChild(o);var D=Wu(),q=D.extra;q.attributes[Or]=t,Nr(y,b).then(function(ne){var fe=ma(C(C({},D),{},{icons:{main:ne,mask:da()},prefix:b,iconName:I,extra:q,watchable:!0})),Ae=J.createElement("svg");t==="::before"?e.insertBefore(Ae,e.firstChild):e.appendChild(Ae),Ae.outerHTML=fe.map(function(ie){return Zt(ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function td(e){return Promise.all([hi(e,"::before"),hi(e,"::after")])}function nd(e){return e.parentNode!==document.head&&!~Hc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Or)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gi(e){if(!!De)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(nd).map(td),a=pa.begin("searchPseudoElements");Ho(),Promise.all(r).then(function(){a(),Lr(),t()}).catch(function(){a(),Lr(),n()})})}var rd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;S.searchPseudoElements&&gi(a)}}},vi=!1,ad={mixout:function(){return{dom:{unwatch:function(){Ho(),vi=!0}}}},hooks:function(){return{bootstrap:function(){ui(Tr("mutationObserverCallbacks",{}))},noAuto:function(){Du()},watch:function(n){var r=n.observeMutationsRoot;vi?Lr():ui(Tr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},bi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},id={mixout:function(){return{parse:{transform:function(n){return bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=bi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:C({},O.outer),children:[{tag:"g",attributes:C({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),O.path)}]}]}}}},or={x:0,y:0,width:"100%",height:"100%"};function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function od(e){return e.tag==="g"?e.children:[e]}var sd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Kn(a.split(" ").map(function(o){return o.trim()})):da();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,b=o.icon,O=iu({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:C(C({},or),{},{fill:"white"})},j=d.children?{children:d.children.map(yi)}:{},N={tag:"g",attributes:C({},O.inner),children:[yi(C({tag:d.tag,attributes:C(C({},d.attributes),O.path)},j))]},y={tag:"g",attributes:C({},O.outer),children:[N]},I="mask-".concat(s||Gt()),M="clip-".concat(s||Gt()),D={tag:"mask",attributes:C(C({},or),{},{id:I,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},q={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:od(b)},D]};return r.push(q,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(I,")")},or)}),{children:r,attributes:a}}}},ld={provides:function(t){var n=!1;Ve.matchMedia&&(n=Ve.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:C(C({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:C(C({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:C(C({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},fd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},cd=[lu,Vu,Ju,Gu,Qu,rd,ad,id,sd,ld,fd];ku(cd,{mixoutsTo:pe});pe.noAuto;var Yo=pe.config,ud=pe.library;pe.dom;var On=pe.parse;pe.findIconDefinition;pe.toHtml;var dd=pe.icon;pe.layer;var md=pe.text;pe.counter;function xi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?xi(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function In(e){return In=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},In(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function hd(e,t){if(e==null)return{};var n=pd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Fr(e){return gd(e)||vd(e)||bd(e)||yd()}function gd(e){if(Array.isArray(e))return Rr(e)}function vd(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bd(e,t){if(!!e){if(typeof e=="string")return Rr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rr(e,t)}}function Rr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ko={exports:{}};(function(e){(function(t){var n=function(y,I,M){if(!c(I)||m(I)||b(I)||O(I)||l(I))return I;var D,q=0,ne=0;if(d(I))for(D=[],ne=I.length;q<ne;q++)D.push(n(y,I[q],M));else{D={};for(var fe in I)Object.prototype.hasOwnProperty.call(I,fe)&&(D[y(fe,M)]=n(y,I[fe],M))}return D},r=function(y,I){I=I||{};var M=I.separator||"_",D=I.split||/(?=[A-Z])/;return y.split(D).join(M)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(I,M){return M?M.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var I=a(y);return I.substr(0,1).toUpperCase()+I.substr(1)},o=function(y,I){return r(y,I).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},O=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},j=function(y,I){var M=I&&"process"in I?I.process:I;return typeof M!="function"?y:function(D,q){return M(D,y,q)}},N={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,I){return n(j(a,I),y)},decamelizeKeys:function(y,I){return n(j(o,I),y,I)},pascalizeKeys:function(y,I){return n(j(i,I),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(xd)})(Ko);var _d=Ko.exports,wd=["class","style"];function kd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=_d.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ad(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ga(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Ad(d);break;case"style":l.style=kd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=hd(n,wd);return mo(e.tag,be(be(be({},t),{},{class:a.class,style:be(be({},a.style),o)},a.attrs),s),r)}var qo=!1;try{qo=!0}catch{}function Cd(){if(!qo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function Od(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),se(t,"fa-swap-opacity",e.swapOpacity),se(t,"fa-bounce",e.bounce),se(t,"fa-shake",e.shake),se(t,"fa-beat",e.beat),se(t,"fa-fade",e.fade),se(t,"fa-beat-fade",e.beatFade),se(t,"fa-flash",e.flash),se(t,"fa-spin-pulse",e.spinPulse),se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function _i(e){if(e&&In(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(On.icon)return On.icon(e);if(e===null)return null;if(In(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Id=Qr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=he(function(){return _i(t.icon)}),i=he(function(){return Ht("classes",Od(t))}),o=he(function(){return Ht("transform",typeof t.transform=="string"?On.transform(t.transform):t.transform)}),s=he(function(){return Ht("mask",_i(t.mask))}),l=he(function(){return dd(a.value,be(be(be(be({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});cn(l,function(d){if(!d)return Cd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=he(function(){return l.value?ga(l.value.abstract[0],{},r):null});return function(){return c.value}}});Qr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Yo.familyPrefix,i=he(function(){return["".concat(a,"-layers")].concat(Fr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return mo("div",{class:i.value},r.default?r.default():[])}}});Qr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Yo.familyPrefix,i=he(function(){return Ht("classes",[].concat(Fr(t.counter?["".concat(a,"-layers-counter")]:[]),Fr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=he(function(){return Ht("transform",typeof t.transform=="string"?On.transform(t.transform):t.transform)}),s=he(function(){var c=md(t.value.toString(),be(be({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=he(function(){return ga(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ed={prefix:"fas",iconName:"arrow-right-long",icon:[512,512,["long-arrow-right"],"f178","M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"]},Td={prefix:"fas",iconName:"hammer",icon:[576,512,[128296],"f6e3","M568.1 196.3l-22.62-22.62c-4.533-4.533-10.56-7.029-16.97-7.029s-12.44 2.496-16.97 7.029l-5.654 5.656l-20.12-20.12c4.596-23.46-2.652-47.9-19.47-64.73l-45.25-45.25C390.2 17.47 347.1 0 303.1 0C258.2 0 216 17.47 184.3 49.21L176.5 57.05L272.5 105.1v13.81c0 18.95 7.688 37.5 21.09 50.91l49.16 49.14c13.44 13.45 31.39 20.86 50.54 20.86c4.758 0 9.512-.4648 14.18-1.387l20.12 20.12l-5.654 5.654c-9.357 9.357-9.357 24.58-.002 33.94l22.62 22.62c4.535 4.533 10.56 7.031 16.97 7.031s12.44-2.498 16.97-7.031l90.53-90.5C578.3 220.8 578.3 205.6 568.1 196.3zM270.9 192.4c-3.846-3.846-7.197-8.113-10.37-12.49l-239.5 209.2c-28.12 28.12-28.16 73.72-.0371 101.8C35.12 505 53.56 512 71.1 512s36.84-7.031 50.91-21.09l209.1-239.4c-4.141-3.061-8.184-6.289-11.89-9.996L270.9 192.4z"]},Pd={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Sd={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.5 69.84a1.5 1.5 0 0 0 -.764-.7A485.1 485.1 0 0 0 404.1 32.03a1.816 1.816 0 0 0 -1.923 .91 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.14-30.6 1.89 1.89 0 0 0 -1.924-.91A483.7 483.7 0 0 0 116.1 69.14a1.712 1.712 0 0 0 -.788 .676C39.07 183.7 18.19 294.7 28.43 404.4a2.016 2.016 0 0 0 .765 1.375A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.1 430.4a1.86 1.86 0 0 0 -1.019-2.588 321.2 321.2 0 0 1 -45.87-21.85 1.885 1.885 0 0 1 -.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.23 43.92 200.4 43.92 295.5 0a1.812 1.812 0 0 1 1.924 .233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1 -.162 3.126 301.4 301.4 0 0 1 -45.89 21.83 1.875 1.875 0 0 0 -1 2.611 391.1 391.1 0 0 0 30.01 48.81 1.864 1.864 0 0 0 2.063 .7A486 486 0 0 0 610.7 405.7a1.882 1.882 0 0 0 .765-1.352C623.7 277.6 590.9 167.5 524.5 69.84zM222.5 337.6c-28.97 0-52.84-26.59-52.84-59.24S193.1 219.1 222.5 219.1c29.67 0 53.31 26.82 52.84 59.24C275.3 310.1 251.9 337.6 222.5 337.6zm195.4 0c-28.97 0-52.84-26.59-52.84-59.24S388.4 219.1 417.9 219.1c29.67 0 53.31 26.82 52.84 59.24C470.7 310.1 447.5 337.6 417.9 337.6z"]},Nd={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Md={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]},Ld={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1c-6.281-23.65-24.79-42.28-48.28-48.6C458.8 64 288 64 288 64S117.2 64 74.63 75.49c-23.5 6.322-42 24.95-48.28 48.6-11.41 42.87-11.41 132.3-11.41 132.3s0 89.44 11.41 132.3c6.281 23.65 24.79 41.5 48.28 47.82C117.2 448 288 448 288 448s170.8 0 213.4-11.49c23.5-6.321 42-24.17 48.28-47.82 11.41-42.87 11.41-132.3 11.41-132.3s0-89.44-11.41-132.3zm-317.5 213.5V175.2l142.7 81.21-142.7 81.2z"]};ud.add(Pd,Md,Sd,Ld,Nd,Ed,Td);Af(Pc).component("font-awesome-icon",Id).mount("#app");
