(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,X=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),K=new WeakMap;let ht=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(e,t))}return t}toString(){return this.cssText}};const bt=r=>new ht(typeof r=="string"?r:r+"",void 0,F),mt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ht(e,r,F)},vt=(r,t)=>{if(X)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},Q=X?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return bt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xt,defineProperty:yt,getOwnPropertyDescriptor:$t,getOwnPropertyNames:wt,getOwnPropertySymbols:_t,getPrototypeOf:At}=Object,y=globalThis,tt=y.trustedTypes,St=tt?tt.emptyScript:"",L=y.reactiveElementPolyfillSupport,z=(r,t)=>r,H={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},G=(r,t)=>!xt(r,t),et={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&yt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=$t(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:s,set(n){const a=s==null?void 0:s.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const e=this.properties,i=[...wt(e),..._t(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Q(s))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:H).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o,n;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:H;this._$Em=s;const h=l.fromAttribute(e,a.type);this[s]=h??((n=this._$Ej)==null?void 0:n.get(s))??h,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){var n;if(t!==void 0){const a=this.constructor;if(s===!1&&(o=this[t]),i??(i=a.getPropertyOptions(t)),!((i.hasChanged??G)(o,e)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[z("elementProperties")]=new Map,S[z("finalized")]=new Map,L==null||L({ReactiveElement:S}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,it=r=>r,B=C.trustedTypes,st=B?B.createPolicy("lit-html",{createHTML:r=>r}):void 0,ct="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+x,Et=`<${pt}>`,A=document,T=()=>A.createComment(""),D=r=>r===null||typeof r!="object"&&typeof r!="function",Z=Array.isArray,Pt=r=>Z(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,$=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,ut=/^(?:script|style|textarea|title)$/i,Mt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),R=Mt(1),E=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),lt=new WeakMap,w=A.createTreeWalker(A,129);function gt(r,t){if(!Z(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return st!==void 0?st.createHTML(t):t}const kt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=k;for(let a=0;a<e;a++){const l=r[a];let h,c,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===k?c[1]==="!--"?n=rt:c[1]!==void 0?n=ot:c[2]!==void 0?(ut.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=$):c[3]!==void 0&&(n=$):n===$?c[0]===">"?(n=s??k,d=-1):c[1]===void 0?d=-2:(d=n.lastIndex-c[2].length,h=c[1],n=c[3]===void 0?$:c[3]==='"'?at:nt):n===at||n===nt?n=$:n===rt||n===ot?n=k:(n=$,s=void 0);const u=n===$&&r[a+1].startsWith("/>")?" ":"";o+=n===k?l+Et:d>=0?(i.push(h),l.slice(0,d)+ct+l.slice(d)+x+u):l+x+(d===-2?a:u)}return[gt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[h,c]=kt(t,e);if(this.el=O.createElement(h,i),w.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=w.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(ct)){const p=c[n++],u=s.getAttribute(d).split(x),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:u,ctor:v[1]==="."?Ct:v[1]==="?"?It:v[1]==="@"?Tt:j}),s.removeAttribute(d)}else d.startsWith(x)&&(l.push({type:6,index:o}),s.removeAttribute(d));if(ut.test(s.tagName)){const d=s.textContent.split(x),p=d.length-1;if(p>0){s.textContent=B?B.emptyScript:"";for(let u=0;u<p;u++)s.append(d[u],T()),w.nextNode(),l.push({type:2,index:++o});s.append(d[p],T())}}}else if(s.nodeType===8)if(s.data===pt)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(x,d+1))!==-1;)l.push({type:7,index:o}),d+=x.length-1}o++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function P(r,t,e=r,i){var n,a;if(t===E)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=D(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=P(r,s._$AS(r,t.values),s,i)),t}class zt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);w.currentNode=s;let o=w.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new U(o,o.nextSibling,this,t):l.type===1?h=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(h=new Dt(o,this,t)),this._$AV.push(h),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=w.nextNode(),n++)}return w.currentNode=A,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),D(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(gt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new zt(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new O(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new U(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=it(t).nextSibling;it(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const a=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,a[i+l],e,l),h===E&&(h=this._$AH[l]),n||(n=!D(h)||h!==this._$AH[l]),h===g?t=g:t!==g&&(t+=(h??"")+o[l+1]),this._$AH[l]=h}n&&!s&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class It extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class Tt extends j{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??g)===E)return;const i=this._$AH,s=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==g&&(i===g||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Dt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const q=C.litHtmlPolyfillSupport;q==null||q(O,U),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.3.3");const Ot=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new U(t.insertBefore(T(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=globalThis;class I extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}var dt;I._$litElement$=!0,I.finalized=!0,(dt=_.litElementHydrateSupport)==null||dt.call(_,{LitElement:I});const V=_.litElementPolyfillSupport;V==null||V({LitElement:I});(_.litElementVersions??(_.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:G},Nt=(r=Rt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(i==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,r,!0,a)}}throw Error("Unsupported decorator location: "+i)};function Ht(r){return(t,e)=>typeof e=="object"?Nt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(r){return Ht({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jt(r,t){return(e,i,s)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(r))??null};return Bt(e,i,{get(){return o(this)}})}}var Lt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,b=(r,t,e,i)=>{for(var s=i>1?void 0:i?Wt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Lt(t,e,s),s};const Y=[{id:"minimoog",name:"Minimoog",url:"./assets/minimoog.png"},{id:"arpodysseymkiii",name:"ARP Odyssey Mk III",url:"./assets/arpodysseymkiii.png"},{id:"dx7",name:"Yamaha DX7",url:"./assets/dx7.png"},{id:"juno60",name:"Roland Juno-60",url:"./assets/juno60.png"},{id:"tb303",name:"Roland TB-303",url:"./assets/tb303.png"},{id:"tr808",name:"Roland TR-808",url:"./assets/tr808.png"},{id:"tr909",name:"Roland TR-909",url:"./assets/tr909.png"},{id:"cz1",name:"Casio CZ-1",url:"./assets/cz1.png"},{id:"mpc60",name:"Akai MPC60",url:"./assets/mpc60.png"},{id:"sp1200",name:"E-mu SP-1200",url:"./assets/sp1200.png"}];let f=class extends I{constructor(){super(...arguments),this.gridSize=3,this.activeImage=Y[0],this.tiles=[],this.blankIndex=8,this.moves=0,this.secondsElapsed=0,this.isPlaying=!1,this.hasWon=!1,this.showPreview=!1,this.isSolving=!1,this.gameMode="freeplay",this.hasMoved=!1,this.dragTile=null,this.dragElement=null,this.startX=0,this.startY=0,this.allowedDragDirection=null,this.maxDragDistance=0,this._boundPointerMove=r=>this.handlePointerMove(r),this._boundPointerUp=r=>this.handlePointerUp(r)}connectedCallback(){super.connectedCallback(),this.resetPuzzle()}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer()}updated(r){(r.has("gridSize")||r.has("activeImage"))&&this.resetPuzzle()}startTimer(){this.stopTimer(),this.secondsElapsed=0,this.timerInterval=window.setInterval(()=>{this.secondsElapsed++},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=void 0)}formatTime(r){const t=Math.floor(r/60),e=r%60;return`${t}:${e.toString().padStart(2,"0")}`}triggerHaptic(){if("vibrate"in navigator)try{navigator.vibrate(10)}catch{}}setMode(r){this.gameMode!==r&&(this.gameMode=r,this.resetPuzzle())}resetPuzzle(){this.stopTimer(),this.isSolving=!1,this.secondsElapsed=0,this.moves=0,this.isPlaying=!1,this.hasWon=!1,this.showPreview=!1;const r=this.gridSize,t=r*r,e=[];for(let i=0;i<t;i++)e.push({id:i,currentIndex:i});this.tiles=e,this.blankIndex=t-1}shufflePuzzle(){this.resetPuzzle();const r=this.gridSize;let t=r*r-1;const e=[...this.tiles];let i=-1;const s=r*r*25;for(let o=0;o<s;o++){const n=this.getNeighbors(t,r),a=n.filter(d=>{var p;return((p=e.find(u=>u.currentIndex===d))==null?void 0:p.id)!==i}),l=a.length>0?a[Math.floor(Math.random()*a.length)]:n[Math.floor(Math.random()*n.length)],h=e.find(d=>d.currentIndex===l),c=e.find(d=>d.id===r*r-1);i=h.id,h.currentIndex=t,c.currentIndex=l,t=l}this.tiles=e,this.blankIndex=t,this.isPlaying=!0,this.startTimer()}getNeighbors(r,t){const e=Math.floor(r/t),i=r%t,s=[];return e>0&&s.push(r-t),e<t-1&&s.push(r+t),i>0&&s.push(r-1),i<t-1&&s.push(r+1),s}checkWinState(){const r=this.tiles.every(t=>t.id===t.currentIndex);return r&&this.isPlaying&&(this.isPlaying=!1,this.stopTimer(),this.hasWon=!0,this.triggerHaptic()),r}handlePointerDown(r,t){if(!(this.gameMode==="freeplay"||this.gameMode==="play"&&this.isPlaying)||this.isSolving||this.hasWon)return;r.preventDefault();const i=this.gridSize,s=t.currentIndex,o=this.blankIndex,n=Math.floor(s/i),a=s%i,l=Math.floor(o/i),h=o%i;if(!(Math.abs(n-l)===1&&a===h||Math.abs(a-h)===1&&n===l))return;const d=r.currentTarget;this.dragTile=t,this.dragElement=d,this.startX=r.clientX,this.startY=r.clientY,this.hasMoved=!1,n===l?this.allowedDragDirection=h>a?"right":"left":this.allowedDragDirection=l>n?"down":"up";const p=d.getBoundingClientRect(),u=parseFloat(getComputedStyle(this.gridElement).gap||"0");this.allowedDragDirection==="left"||this.allowedDragDirection==="right"?this.maxDragDistance=p.width+u:this.maxDragDistance=p.height+u,window.addEventListener("pointermove",this._boundPointerMove),window.addEventListener("pointerup",this._boundPointerUp),window.addEventListener("pointercancel",this._boundPointerUp),d.style.transition="none",d.style.zIndex="10"}handlePointerMove(r){if(!this.dragTile||!this.dragElement)return;const t=r.clientX-this.startX,e=r.clientY-this.startY;(Math.abs(t)>4||Math.abs(e)>4)&&(this.hasMoved=!0);let i=0,s=0;const o=this.maxDragDistance;this.allowedDragDirection==="right"?i=Math.max(0,Math.min(o,t)):this.allowedDragDirection==="left"?i=Math.min(0,Math.max(-o,t)):this.allowedDragDirection==="down"?s=Math.max(0,Math.min(o,e)):this.allowedDragDirection==="up"&&(s=Math.min(0,Math.max(-o,e))),this.dragElement.style.transform=`translate3d(${i}px, ${s}px, 0)`}handlePointerUp(r){if(!this.dragTile||!this.dragElement)return;const t=this.dragElement,e=this.dragTile,i=this.gridSize;window.removeEventListener("pointermove",this._boundPointerMove),window.removeEventListener("pointerup",this._boundPointerUp),window.removeEventListener("pointercancel",this._boundPointerUp);const o=t.style.transform.match(/translate3d\(([^px]+)px,\s*([^px]+)px/);let n=0;if(o){const h=parseFloat(o[1]),c=parseFloat(o[2]);n=Math.max(Math.abs(h),Math.abs(c))}const a=this.maxDragDistance*.35,l=(n>=a||!this.hasMoved)&&r.type!=="pointercancel";if(t.style.transition="transform 0.15s ease-out",l){const h=this.blankIndex,c=e.currentIndex,d=this.tiles.find(p=>p.id===i*i-1);e.currentIndex=h,d.currentIndex=c,this.blankIndex=c,this.moves++,this.triggerHaptic(),this.tiles=[...this.tiles],t.style.transform="",t.style.zIndex="",this.checkWinState()}else t.style.transform="translate3d(0, 0, 0)",setTimeout(()=>{t.style.zIndex=""},150);this.dragTile=null,this.dragElement=null,this.allowedDragDirection=null}async runSolver(r){var s,o;if(!this.isPlaying||this.hasWon||this.isSolving)return;this.isSolving=!0;const t=this.gridSize,e=this.getBoardArray();if(t>3){const n=this.getGreedyBestMove(e,t);if(n!==null)if(r){let a=[...e];const l=[];let h=new Set;h.add(a.join(","));for(let c=0;c<40;c++){const d=this.getGreedyBestMove(a,t,h);if(d===null)break;const p=a.indexOf(t*t-1);if(a[p]=a[d],a[d]=t*t-1,l.push(d),h.add(a.join(",")),this.isBoardSolved(a))break}l.length>0?await this.animatePath(l):await this.animatePath([n])}else{const a=(s=this.shadowRoot)==null?void 0:s.querySelector(`[data-index="${n}"]`);a&&(a.classList.add("hint-highlight"),setTimeout(()=>{a.classList.remove("hint-highlight")},1500))}this.isSolving=!1;return}const i=this.solveAStar(e);if(i&&i.length>0)if(r)await this.animatePath(i);else{const n=i[0],a=(o=this.shadowRoot)==null?void 0:o.querySelector(`[data-index="${n}"]`);a&&(a.classList.add("hint-highlight"),setTimeout(()=>{a.classList.remove("hint-highlight")},1500))}this.isSolving=!1}getBoardArray(){const r=new Array(this.gridSize*this.gridSize).fill(-1);return this.tiles.forEach(t=>{r[t.currentIndex]=t.id}),r}isBoardSolved(r){return r.every((t,e)=>t===e)}getManhattanDistance(r,t){let e=0;for(let i=0;i<r.length;i++){const s=r[i];if(s===t*t-1)continue;const o=Math.floor(s/t),n=s%t,a=Math.floor(i/t),l=i%t;e+=Math.abs(o-a)+Math.abs(n-l)}return e}getGreedyBestMove(r,t,e){const i=r.indexOf(t*t-1),s=this.getNeighbors(i,t);let o=null,n=1/0;for(const a of s){const l=[...r];if(l[i]=r[a],l[a]=t*t-1,e&&e.has(l.join(",")))continue;const h=this.getManhattanDistance(l,t);h<n&&(n=h,o=a)}return o}solveAStar(r){const e=[],i=new Set,s=this.getManhattanDistance(r,3);e.push({board:r,path:[],g:0,f:s}),i.add(r.join(","));let o=0;for(;e.length>0&&o<5e3;){o++,e.sort((h,c)=>h.f-c.f);const n=e.shift();if(this.isBoardSolved(n.board))return n.path;const a=n.board.indexOf(8),l=this.getNeighbors(a,3);for(const h of l){const c=[...n.board];c[a]=n.board[h],c[h]=8;const d=c.join(",");if(i.has(d))continue;i.add(d);const p=[...n.path,h],u=n.g+1,v=u+this.getManhattanDistance(c,3);e.push({board:c,path:p,g:u,f:v})}}return null}async animatePath(r){var t;for(const e of r){if(!this.isSolving)break;const i=this.tiles.find(o=>o.currentIndex===e),s=(t=this.shadowRoot)==null?void 0:t.querySelector(`[data-index="${e}"]`);if(s){const o=this.gridSize,n=s.getBoundingClientRect(),a=parseFloat(getComputedStyle(this.gridElement).gap||"0"),l=n.width+a,h=n.height+a,c=Math.floor(e/o),d=Math.floor(this.blankIndex/o);let p=0,u=0;c===d?p=this.blankIndex>e?l:-l:u=this.blankIndex>e?h:-h,s.style.transition="transform 0.15s ease-out",s.style.transform=`translate3d(${p}px, ${u}px, 0)`,this.triggerHaptic(),await new Promise(M=>setTimeout(M,150));const v=this.blankIndex,J=i.currentIndex,ft=this.tiles.find(M=>M.id===o*o-1);i.currentIndex=v,ft.currentIndex=J,this.blankIndex=J,this.moves++,this.tiles=[...this.tiles],s.style.transition="none",s.style.transform="",await new Promise(M=>setTimeout(M,80))}}this.checkWinState()}handleImageChange(r){const t=r.target,e=Y.find(i=>i.id===t.value);e&&(this.activeImage=e)}handleGridSizeChange(r){const t=r.target;this.gridSize=parseInt(t.value)}render(){const r=this.gridSize,t=[...this.tiles].sort((e,i)=>e.currentIndex-i.currentIndex);return R`
      <div class="header-panel">
        <div class="active-synth-name">${this.activeImage.name}</div>
        <div class="stats">
          <div class="stat-display">
            <span class="stat-label">Moves</span>
            <span class="stat-value ${this.gameMode==="freeplay"?"cyan":""}">${String(this.moves).padStart(3,"0")}</span>
          </div>
          <div class="stat-display">
            <span class="stat-label">Time</span>
            <span class="stat-value ${this.gameMode==="freeplay"?"cyan":""}">
              ${this.gameMode==="freeplay"?"FREE":this.formatTime(this.secondsElapsed)}
            </span>
          </div>
        </div>
      </div>

      <!-- Mode Selector Segmented Toggle -->
      <div class="mode-selector">
        <button 
          class="mode-btn ${this.gameMode==="freeplay"?"active cyan":""}" 
          @click=${()=>this.setMode("freeplay")}
          ?disabled=${this.isSolving}
        >
          Freeplay
        </button>
        <button 
          class="mode-btn ${this.gameMode==="play"?"active orange":""}" 
          @click=${()=>this.setMode("play")}
          ?disabled=${this.isSolving}
        >
          Play Mode
        </button>
      </div>

      <div class="controls">
        <select @change=${this.handleImageChange} .value=${this.activeImage.id} ?disabled=${this.isSolving}>
          ${Y.map(e=>R`<option value=${e.id}>${e.name}</option>`)}
        </select>

        <select @change=${this.handleGridSizeChange} .value=${String(this.gridSize)} ?disabled=${this.isSolving}>
          <option value="3">3 x 3 (Beginner)</option>
          <option value="4">4 x 4 (Classic)</option>
          <option value="5">5 x 5 (Expert)</option>
        </select>
      </div>

      <div class="board-wrapper">
        <div 
          class="puzzle-grid ${this.gameMode==="play"&&!this.isPlaying?"locked":""}" 
          style="
            grid-template-columns: repeat(${r}, 1fr); 
            grid-template-rows: repeat(${r}, 1fr); 
            --bg-size: calc(${r} * 100% + (${r} - 1) * var(--grid-gap)) calc(${r} * 100% + (${r} - 1) * var(--grid-gap));
            --tile-hover-border: ${this.gameMode==="freeplay"?"rgba(0, 229, 255, 0.5)":"rgba(255, 94, 0, 0.4)"};
            --tile-hover-glow: ${this.gameMode==="freeplay"?"rgba(0, 229, 255, 0.4)":"rgba(255, 94, 0, 0.3)"};
          "
        >
          ${t.map(e=>{const i=e.id===r*r-1,s=i&&(this.gameMode==="freeplay"||this.isPlaying),o=Math.floor(e.id/r),a=e.id%r/(r-1)*100,l=o/(r-1)*100,h=`${a}% ${l}%`;let c="",d="";return i||(e.id===1?(c="peel-tr",d="12px"):e.id===3?(c="peel-tl",d="8px"):e.id===5?(c="peel-br",d="10px"):(r===3&&e.id===6||r>3&&e.id===8)&&(c="peel-bl",d="6px")),R`
              <div 
                class="tile ${s?"blank":""} ${c}" 
                data-index=${e.currentIndex}
                style="background-image: url('${this.activeImage.url}'); background-position: ${h};${d?` --peel-size: ${d};`:""}"
                @pointerdown=${p=>this.handlePointerDown(p,e)}
                @dragstart=${p=>p.preventDefault()}
              ></div>
            `})}
        </div>

        <div 
          class="preview-overlay ${this.showPreview?"visible":""}" 
          style="background-image: url('${this.activeImage.url}');"
        ></div>

        <div class="win-overlay ${this.hasWon?"visible":""}">
          <div class="win-title">SOLVED</div>
          <div style="color: var(--text-secondary); text-align: center;">
            <div>COMPLETED IN ${this.moves} MOVES</div>
            <div>TIME ELAPSED: ${this.formatTime(this.secondsElapsed)}</div>
          </div>
          <button class="primary" style="margin-top: 0.5rem;" @click=${this.shufflePuzzle}>Play Again</button>
        </div>

        ${this.gameMode==="play"&&!this.isPlaying&&!this.hasWon?R`
          <div class="start-overlay">
            <button class="primary start-btn" @click=${this.shufflePuzzle}>START GAME</button>
            <div class="start-hint">Click to Shuffle & Play</div>
          </div>
        `:""}
      </div>

      <div class="game-actions">
        <button 
          @click=${this.gameMode==="freeplay"?this.resetPuzzle:this.shufflePuzzle} 
          ?disabled=${this.isSolving||this.gameMode==="play"&&!this.isPlaying}
        >
          ${this.gameMode==="freeplay"?"Reset":"Reshuffle"}
        </button>
        <button 
          @click=${()=>{this.showPreview=!this.showPreview}} 
          ?disabled=${this.hasWon||this.isSolving}
        >
          Preview
        </button>
        <button 
          @click=${()=>this.runSolver(!1)} 
          ?disabled=${this.gameMode!=="play"||!this.isPlaying||this.hasWon||this.isSolving}
        >
          Get Hint
        </button>
        <button 
          @click=${()=>this.runSolver(!0)} 
          ?disabled=${this.gameMode!=="play"||!this.isPlaying||this.hasWon||this.isSolving}
        >
          Auto-Solve
        </button>
      </div>
    `}};f.styles=mt`
    *, *::before, *::after {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 1.5rem;
    }

    .header-panel {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.25rem 0 0.75rem 0;
      border-bottom: 1px dashed var(--border-color);
    }

    .active-synth-name {
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--accent-cyan);
      text-shadow: var(--shadow-glow-cyan);
      text-transform: uppercase;
    }

    .stats {
      display: flex;
      gap: 0.75rem;
    }

    .stat-display {
      background-color: #0b0c0f;
      border: 1px solid #20222a;
      border-radius: 4px;
      padding: 0.35rem 0.75rem;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8);
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 75px;
    }

    .stat-label {
      font-size: 0.6rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--text-muted);
      margin-bottom: 0.15rem;
    }

    .stat-value {
      font-family: var(--font-digital);
      font-size: 1.3rem;
      color: var(--accent-orange);
      text-shadow: var(--shadow-glow-orange);
      line-height: 1.2;
    }

    .stat-value.cyan {
      color: var(--accent-cyan);
      text-shadow: var(--shadow-glow-cyan);
    }

    button {
      font-family: var(--font-family);
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.03em;
      cursor: pointer;
      border: 1px solid #111;
      background: linear-gradient(180deg, #373a44 0%, #252830 100%);
      color: var(--text-secondary);
      padding: 0.6rem 1.2rem;
      border-radius: var(--border-radius);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.05),
        0 1px 3px rgba(0, 0, 0, 0.4);
      transition: all var(--transition-speed) cubic-bezier(0.16, 1, 0.3, 1);
      outline: none;
      text-transform: uppercase;
    }

    button:hover:not([disabled]) {
      color: var(--text-primary);
      background: linear-gradient(180deg, #444855 0%, #2f333d 100%);
      border-color: #222;
    }

    button:active:not([disabled]) {
      background: linear-gradient(180deg, #1d1e24 0%, #272931 100%);
      box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.6),
        0 1px 0 rgba(255, 255, 255, 0.05);
      transform: translateY(1px);
    }

    button.primary {
      background: linear-gradient(180deg, #ff7c33 0%, var(--accent-orange) 100%);
      color: #fff;
      border-color: #cc4b00;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 2px 8px rgba(255, 94, 0, 0.3);
    }

    button.primary:hover:not([disabled]) {
      background: linear-gradient(180deg, #ff9255 0%, #ff6f1a 100%);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        var(--shadow-glow-orange);
    }

    button.primary:active:not([disabled]) {
      background: linear-gradient(180deg, #d64f00 0%, #ff5e00 100%);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    button[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    select {
      font-family: var(--font-family);
      font-size: 0.85rem;
      font-weight: 500;
      padding: 0.6rem 2.2rem 0.6rem 1rem;
      border: 1px solid #111;
      border-radius: var(--border-radius);
      background-color: #1c1d22;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff5e00' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 10px center;
      background-size: 14px;
      color: var(--text-primary);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      transition: all var(--transition-speed) ease;
      appearance: none;
      outline: none;
      text-transform: uppercase;
    }

    select:hover {
      border-color: var(--accent-orange);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5), 0 0 4px rgba(255, 94, 0, 0.2);
    }

    select:focus {
      border-color: var(--accent-orange);
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5), var(--shadow-glow-orange);
    }

    .controls {
      display: flex;
      gap: 0.75rem;
      width: 100%;
      flex-wrap: wrap;
    }

    .controls select,
    .controls button {
      flex: 1;
      min-width: 120px;
      text-align: center;
    }

    .game-actions {
      display: flex;
      gap: 0.75rem;
      width: 100%;
    }

    .game-actions button {
      flex: 1;
      font-size: 0.8rem;
      border: 1px solid #111;
      background: linear-gradient(180deg, #2e303a 0%, #1c1d24 100%);
      color: var(--text-secondary);
      position: relative;
      overflow: hidden;
      padding-top: 1.1rem;
      padding-bottom: 0.5rem;
    }

    .game-actions button::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 50%;
      transform: translateX(-50%);
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #3e4250;
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.5);
      transition: background-color var(--transition-speed), box-shadow var(--transition-speed);
    }

    .game-actions button:not([disabled]):hover {
      background: linear-gradient(180deg, #373a46 0%, #20222a 100%);
      color: var(--text-primary);
    }

    .game-actions button:not([disabled]):hover::before {
      background-color: var(--accent-cyan);
      box-shadow: var(--shadow-glow-cyan);
    }

    /* Outer wrapper containing preview / grid */
    .board-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 2464 / 1728;
      background-color: #0b0c0f;
      border: 6px solid #1d1f26;
      box-shadow: 
        inset 0 4px 12px rgba(0, 0, 0, 0.85),
        0 10px 25px rgba(0, 0, 0, 0.6);
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      touch-action: none; /* Prevents default scroll behaviors when dragging */
    }

    .puzzle-grid {
      display: grid;
      width: 100%;
      height: 100%;
      gap: var(--grid-gap);
      padding: var(--grid-gap);
      background-color: #08080b;
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 0.3s ease;
    }

    .tile {
      position: relative;
      width: 100%;
      height: 100%;
      background-size: var(--bg-size);
      background-repeat: no-repeat;
      cursor: grab;
      user-select: none;
      touch-action: none;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.06);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.12),
        0 4px 8px rgba(0, 0, 0, 0.4);
      transition: border-color 0.2s, box-shadow 0.2s;
      overflow: visible;
    }

    /* Subtle sticker peel effects */
    .tile.peel-tr::after {
      content: '';
      position: absolute;
      top: -0.5px;
      right: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(225deg, #08080b 38%, rgba(0,0,0,0.6) 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 0 0 0 2px;
      pointer-events: none;
      z-index: 5;
    }

    .tile.peel-tl::after {
      content: '';
      position: absolute;
      top: -0.5px;
      left: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(135deg, #08080b 38%, rgba(0,0,0,0.6) 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 0 0 2px 0;
      pointer-events: none;
      z-index: 5;
    }

    .tile.peel-br::after {
      content: '';
      position: absolute;
      bottom: -0.5px;
      right: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(315deg, #08080b 38%, rgba(0,0,0,0.6) 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 2px 0 0 0;
      pointer-events: none;
      z-index: 5;
    }

    .tile.peel-bl::after {
      content: '';
      position: absolute;
      bottom: -0.5px;
      left: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(45deg, #08080b 38%, rgba(0,0,0,0.6) 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: 1px -1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 0 2px 0 0;
      pointer-events: none;
      z-index: 5;
    }

    .tile:hover {
      border-color: var(--tile-hover-border, rgba(255, 94, 0, 0.4));
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.18),
        0 0 10px var(--tile-hover-glow, rgba(255, 94, 0, 0.3)),
        0 6px 12px rgba(0, 0, 0, 0.5);
    }

    .puzzle-grid.locked .tile {
      cursor: default;
      pointer-events: none;
    }

    .puzzle-grid.locked .tile:hover {
      border-color: rgba(255, 255, 255, 0.06);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.12),
        0 4px 8px rgba(0, 0, 0, 0.4);
    }

    .mode-selector {
      display: flex;
      width: 100%;
      background-color: #0b0c0f;
      border: 1px solid #20222a;
      border-radius: var(--border-radius);
      padding: 2px;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8);
    }

    .mode-btn {
      flex: 1;
      background: transparent;
      border: none;
      color: var(--text-muted);
      font-size: 0.8rem;
      padding: 0.5rem 0;
      border-radius: calc(var(--border-radius) - 2px);
      box-shadow: none;
      transition: all var(--transition-speed) ease;
    }

    .mode-btn:hover:not(.active) {
      color: var(--text-secondary);
      background: rgba(255, 255, 255, 0.02);
    }

    .mode-btn.active.cyan {
      color: #fff;
      background: linear-gradient(180deg, #00f0ff 0%, #00b0cc 100%);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        0 2px 8px rgba(0, 229, 255, 0.3);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    .mode-btn.active.orange {
      color: #fff;
      background: linear-gradient(180deg, #ff7c33 0%, var(--accent-orange) 100%);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        0 2px 8px rgba(255, 94, 0, 0.3);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    .start-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(10, 11, 14, 0.75);
      backdrop-filter: blur(2px);
      z-index: 25;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
    }

    .start-overlay .start-btn {
      font-size: 1.1rem;
      padding: 0.8rem 2rem;
      background: linear-gradient(180deg, #ff7c33 0%, var(--accent-orange) 100%);
      box-shadow: 0 0 20px rgba(255, 94, 0, 0.4);
      animation: pulse-start 2s infinite;
    }

    .start-hint {
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    @keyframes pulse-start {
      0% { box-shadow: 0 0 15px rgba(255, 94, 0, 0.3); transform: scale(1); }
      50% { box-shadow: 0 0 25px rgba(255, 94, 0, 0.6); transform: scale(1.03); }
      100% { box-shadow: 0 0 15px rgba(255, 94, 0, 0.3); transform: scale(1); }
    }

    .tile:active {
      cursor: grabbing;
    }

    .tile.blank {
      opacity: 0;
      pointer-events: none;
    }

    .preview-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      z-index: 20;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .preview-overlay.visible {
      opacity: 1;
      pointer-events: auto;
    }

    .win-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(10, 11, 14, 0.95);
      backdrop-filter: blur(4px);
      z-index: 30;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.25rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border: 2px solid var(--accent-green);
    }

    .win-overlay.visible {
      opacity: 1;
      pointer-events: auto;
    }

    .win-title {
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: var(--accent-green);
      text-shadow: 0 0 15px rgba(57, 255, 20, 0.5);
      text-transform: uppercase;
    }

    .hint-highlight {
      outline: 3px solid var(--accent-cyan);
      outline-offset: -3px;
      box-shadow: 0 0 15px rgba(0, 229, 255, 0.6);
      animation: pulse-hint 1s infinite alternate;
    }

    @keyframes pulse-hint {
      0% { outline-color: rgba(0, 229, 255, 0.4); }
      100% { outline-color: rgba(0, 229, 255, 1); }
    }
  `;b([m()],f.prototype,"gridSize",2);b([m()],f.prototype,"activeImage",2);b([m()],f.prototype,"tiles",2);b([m()],f.prototype,"blankIndex",2);b([m()],f.prototype,"moves",2);b([m()],f.prototype,"secondsElapsed",2);b([m()],f.prototype,"isPlaying",2);b([m()],f.prototype,"hasWon",2);b([m()],f.prototype,"showPreview",2);b([m()],f.prototype,"isSolving",2);b([m()],f.prototype,"gameMode",2);b([jt(".puzzle-grid")],f.prototype,"gridElement",2);f=b([Ut("sliding-puzzle")],f);
//# sourceMappingURL=index-CT5IRnVs.js.map
