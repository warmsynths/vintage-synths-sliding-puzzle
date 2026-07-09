(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,X=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),K=new WeakMap;let dt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(e,t))}return t}toString(){return this.cssText}};const mt=n=>new dt(typeof n=="string"?n:n+"",void 0,G),vt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new dt(e,n,G)},bt=(n,t)=>{if(X)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},Q=X?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return mt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$t,defineProperty:yt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:_t,getPrototypeOf:At}=Object,y=globalThis,tt=y.trustedTypes,St=tt?tt.emptyScript:"",L=y.reactiveElementPolyfillSupport,I=(n,t)=>n,N={toAttribute(n,t){switch(t){case Boolean:n=n?St:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},F=(n,t)=>!$t(n,t),et={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:F};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&yt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=xt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const a=i==null?void 0:i.call(this);r==null||r.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const e=this.properties,s=[...wt(e),..._t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Q(i))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var r;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:N).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r,o;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:N;this._$Em=i;const h=l.fromAttribute(e,a.type);this[i]=h??((o=this._$Ej)==null?void 0:o.get(i))??h,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){var o;if(t!==void 0){const a=this.constructor;if(i===!1&&(r=this[t]),s??(s=a.getPropertyOptions(t)),!((s.hasChanged??F)(r,e)||s.useDefault&&s.reflect&&r===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i){const{wrapped:a}=o,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[I("elementProperties")]=new Map,S[I("finalized")]=new Map,L==null||L({ReactiveElement:S}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,st=n=>n,H=C.trustedTypes,it=H?H.createPolicy("lit-html",{createHTML:n=>n}):void 0,ct="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+$,Et=`<${pt}>`,A=document,T=()=>A.createComment(""),D=n=>n===null||typeof n!="object"&&typeof n!="function",Z=Array.isArray,Pt=n=>Z(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",j=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,x=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ot=/'/g,at=/"/g,ut=/^(?:script|style|textarea|title)$/i,Mt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),W=Mt(1),E=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),lt=new WeakMap,w=A.createTreeWalker(A,129);function gt(n,t){if(!Z(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const kt=(n,t)=>{const e=n.length-1,s=[];let i,r=t===2?"<svg>":t===3?"<math>":"",o=k;for(let a=0;a<e;a++){const l=n[a];let h,d,c=-1,p=0;for(;p<l.length&&(o.lastIndex=p,d=o.exec(l),d!==null);)p=o.lastIndex,o===k?d[1]==="!--"?o=nt:d[1]!==void 0?o=rt:d[2]!==void 0?(ut.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=x):d[3]!==void 0&&(o=x):o===x?d[0]===">"?(o=i??k,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?x:d[3]==='"'?at:ot):o===at||o===ot?o=x:o===nt||o===rt?o=k:(o=x,i=void 0);const g=o===x&&n[a+1].startsWith("/>")?" ":"";r+=o===k?l+Et:c>=0?(s.push(h),l.slice(0,c)+ct+l.slice(c)+$+g):l+$+(c===-2?a:g)}return[gt(n,r+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const a=t.length-1,l=this.parts,[h,d]=kt(t,e);if(this.el=O.createElement(h,s),w.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=w.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(ct)){const p=d[o++],g=i.getAttribute(c).split($),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:b[2],strings:g,ctor:b[1]==="."?Ct:b[1]==="?"?zt:b[1]==="@"?Tt:B}),i.removeAttribute(c)}else c.startsWith($)&&(l.push({type:6,index:r}),i.removeAttribute(c));if(ut.test(i.tagName)){const c=i.textContent.split($),p=c.length-1;if(p>0){i.textContent=H?H.emptyScript:"";for(let g=0;g<p;g++)i.append(c[g],T()),w.nextNode(),l.push({type:2,index:++r});i.append(c[p],T())}}}else if(i.nodeType===8)if(i.data===pt)l.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf($,c+1))!==-1;)l.push({type:7,index:r}),c+=$.length-1}r++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function P(n,t,e=n,s){var o,a;if(t===E)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl;const r=D(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=P(n,i._$AS(n,t.values),i,s)),t}class It{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??A).importNode(e,!0);w.currentNode=i;let r=w.nextNode(),o=0,a=0,l=s[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new U(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Dt(r,this,t)),this._$AV.push(h),l=s[++a]}o!==(l==null?void 0:l.index)&&(r=w.nextNode(),o++)}return w.currentNode=A,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),D(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(gt(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{const o=new It(i,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new O(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new U(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=st(t).nextSibling;st(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=P(this,t,e,0),o=!D(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=P(this,a[s+l],e,l),h===E&&(h=this._$AH[l]),o||(o=!D(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class zt extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Tt extends B{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??u)===E)return;const s=this._$AH,i=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Dt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const q=C.litHtmlPolyfillSupport;q==null||q(O,U),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.3.3");const Ot=(n,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new U(t.insertBefore(T(),r),r,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=globalThis;class z extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}var ht;z._$litElement$=!0,z.finalized=!0,(ht=_.litElementHydrateSupport)==null||ht.call(_,{LitElement:z});const V=_.litElementPolyfillSupport;V==null||V({LitElement:z});(_.litElementVersions??(_.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:F},Nt=(n=Rt,t,e)=>{const{kind:s,metadata:i}=e;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(e.name,n),s==="accessor"){const{name:o}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,n,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,n,a),a}}}if(s==="setter"){const{name:o}=e;return function(a){const l=this[o];t.call(this,a),this.requestUpdate(o,l,n,!0,a)}}throw Error("Unsupported decorator location: "+s)};function Ht(n){return(t,e)=>typeof e=="object"?Nt(n,t,e):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(n){return Ht({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lt(n,t){return(e,s,i)=>{const r=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(n))??null};return Bt(e,s,{get(){return r(this)}})}}var jt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,m=(n,t,e,s)=>{for(var i=s>1?void 0:s?Wt(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&jt(t,e,i),i};const Y=[{id:"minimoog",name:"Minimoog",url:"/assets/minimoog.png"},{id:"arpodysseymkiii",name:"ARP Odyssey Mk III",url:"/assets/arpodysseymkiii.png"},{id:"dx7",name:"Yamaha DX7",url:"/assets/dx7.png"},{id:"juno60",name:"Roland Juno-60",url:"/assets/juno60.png"},{id:"tb303",name:"Roland TB-303",url:"/assets/tb303.png"},{id:"tr808",name:"Roland TR-808",url:"/assets/tr808.png"},{id:"tr909",name:"Roland TR-909",url:"/assets/tr909.png"},{id:"cz1",name:"Casio CZ-1",url:"/assets/cz1.png"},{id:"mpc60",name:"Akai MPC60",url:"/assets/mpc60.png"},{id:"sp1200",name:"E-mu SP-1200",url:"/assets/sp1200.png"}];let f=class extends z{constructor(){super(...arguments),this.gridSize=3,this.activeImage=Y[0],this.tiles=[],this.blankIndex=8,this.moves=0,this.secondsElapsed=0,this.isPlaying=!1,this.hasWon=!1,this.showPreview=!1,this.isSolving=!1,this.hasMoved=!1,this.dragTile=null,this.dragElement=null,this.startX=0,this.startY=0,this.allowedDragDirection=null,this.maxDragDistance=0,this._boundPointerMove=n=>this.handlePointerMove(n),this._boundPointerUp=n=>this.handlePointerUp(n)}connectedCallback(){super.connectedCallback(),this.resetPuzzle()}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer()}updated(n){(n.has("gridSize")||n.has("activeImage"))&&this.resetPuzzle()}startTimer(){this.stopTimer(),this.secondsElapsed=0,this.timerInterval=window.setInterval(()=>{this.secondsElapsed++},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=void 0)}formatTime(n){const t=Math.floor(n/60),e=n%60;return`${t}:${e.toString().padStart(2,"0")}`}triggerHaptic(){if("vibrate"in navigator)try{navigator.vibrate(10)}catch{}}resetPuzzle(){this.stopTimer(),this.isSolving=!1,this.secondsElapsed=0,this.moves=0,this.isPlaying=!1,this.hasWon=!1,this.showPreview=!1;const n=this.gridSize,t=n*n,e=[];for(let s=0;s<t;s++)e.push({id:s,currentIndex:s});this.tiles=e,this.blankIndex=t-1}shufflePuzzle(){this.resetPuzzle();const n=this.gridSize;let t=n*n-1;const e=[...this.tiles];let s=-1;const i=n*n*25;for(let r=0;r<i;r++){const o=this.getNeighbors(t,n),a=o.filter(c=>{var p;return((p=e.find(g=>g.currentIndex===c))==null?void 0:p.id)!==s}),l=a.length>0?a[Math.floor(Math.random()*a.length)]:o[Math.floor(Math.random()*o.length)],h=e.find(c=>c.currentIndex===l),d=e.find(c=>c.id===n*n-1);s=h.id,h.currentIndex=t,d.currentIndex=l,t=l}this.tiles=e,this.blankIndex=t,this.isPlaying=!0,this.startTimer()}getNeighbors(n,t){const e=Math.floor(n/t),s=n%t,i=[];return e>0&&i.push(n-t),e<t-1&&i.push(n+t),s>0&&i.push(n-1),s<t-1&&i.push(n+1),i}checkWinState(){const n=this.tiles.every(t=>t.id===t.currentIndex);return n&&this.isPlaying&&(this.isPlaying=!1,this.stopTimer(),this.hasWon=!0,this.triggerHaptic()),n}handlePointerDown(n,t){if(!this.isPlaying||this.isSolving||this.hasWon)return;n.preventDefault();const e=this.gridSize,s=t.currentIndex,i=this.blankIndex,r=Math.floor(s/e),o=s%e,a=Math.floor(i/e),l=i%e;if(!(Math.abs(r-a)===1&&o===l||Math.abs(o-l)===1&&r===a))return;const d=n.currentTarget;this.dragTile=t,this.dragElement=d,this.startX=n.clientX,this.startY=n.clientY,this.hasMoved=!1,r===a?this.allowedDragDirection=l>o?"right":"left":this.allowedDragDirection=a>r?"down":"up";const c=d.getBoundingClientRect(),p=parseFloat(getComputedStyle(this.gridElement).gap||"0");this.allowedDragDirection==="left"||this.allowedDragDirection==="right"?this.maxDragDistance=c.width+p:this.maxDragDistance=c.height+p,window.addEventListener("pointermove",this._boundPointerMove),window.addEventListener("pointerup",this._boundPointerUp),window.addEventListener("pointercancel",this._boundPointerUp),d.style.transition="none",d.style.zIndex="10"}handlePointerMove(n){if(!this.dragTile||!this.dragElement)return;const t=n.clientX-this.startX,e=n.clientY-this.startY;(Math.abs(t)>4||Math.abs(e)>4)&&(this.hasMoved=!0);let s=0,i=0;const r=this.maxDragDistance;this.allowedDragDirection==="right"?s=Math.max(0,Math.min(r,t)):this.allowedDragDirection==="left"?s=Math.min(0,Math.max(-r,t)):this.allowedDragDirection==="down"?i=Math.max(0,Math.min(r,e)):this.allowedDragDirection==="up"&&(i=Math.min(0,Math.max(-r,e))),this.dragElement.style.transform=`translate3d(${s}px, ${i}px, 0)`}handlePointerUp(n){if(!this.dragTile||!this.dragElement)return;const t=this.dragElement,e=this.dragTile,s=this.gridSize;window.removeEventListener("pointermove",this._boundPointerMove),window.removeEventListener("pointerup",this._boundPointerUp),window.removeEventListener("pointercancel",this._boundPointerUp);const r=t.style.transform.match(/translate3d\(([^px]+)px,\s*([^px]+)px/);let o=0;if(r){const h=parseFloat(r[1]),d=parseFloat(r[2]);o=Math.max(Math.abs(h),Math.abs(d))}const a=this.maxDragDistance*.35,l=(o>=a||!this.hasMoved)&&n.type!=="pointercancel";if(t.style.transition="transform 0.15s ease-out",l){const h=this.blankIndex,d=e.currentIndex,c=this.tiles.find(p=>p.id===s*s-1);e.currentIndex=h,c.currentIndex=d,this.blankIndex=d,this.moves++,this.triggerHaptic(),this.tiles=[...this.tiles],t.style.transform="",t.style.zIndex="",this.checkWinState()}else t.style.transform="translate3d(0, 0, 0)",setTimeout(()=>{t.style.zIndex=""},150);this.dragTile=null,this.dragElement=null,this.allowedDragDirection=null}async runSolver(n){var i,r;if(!this.isPlaying||this.hasWon||this.isSolving)return;this.isSolving=!0;const t=this.gridSize,e=this.getBoardArray();if(t>3){const o=this.getGreedyBestMove(e,t);if(o!==null)if(n){let a=[...e];const l=[];let h=new Set;h.add(a.join(","));for(let d=0;d<40;d++){const c=this.getGreedyBestMove(a,t,h);if(c===null)break;const p=a.indexOf(t*t-1);if(a[p]=a[c],a[c]=t*t-1,l.push(c),h.add(a.join(",")),this.isBoardSolved(a))break}l.length>0?await this.animatePath(l):await this.animatePath([o])}else{const a=(i=this.shadowRoot)==null?void 0:i.querySelector(`[data-index="${o}"]`);a&&(a.classList.add("hint-highlight"),setTimeout(()=>{a.classList.remove("hint-highlight")},1500))}this.isSolving=!1;return}const s=this.solveAStar(e);if(s&&s.length>0)if(n)await this.animatePath(s);else{const o=s[0],a=(r=this.shadowRoot)==null?void 0:r.querySelector(`[data-index="${o}"]`);a&&(a.classList.add("hint-highlight"),setTimeout(()=>{a.classList.remove("hint-highlight")},1500))}this.isSolving=!1}getBoardArray(){const n=new Array(this.gridSize*this.gridSize).fill(-1);return this.tiles.forEach(t=>{n[t.currentIndex]=t.id}),n}isBoardSolved(n){return n.every((t,e)=>t===e)}getManhattanDistance(n,t){let e=0;for(let s=0;s<n.length;s++){const i=n[s];if(i===t*t-1)continue;const r=Math.floor(i/t),o=i%t,a=Math.floor(s/t),l=s%t;e+=Math.abs(r-a)+Math.abs(o-l)}return e}getGreedyBestMove(n,t,e){const s=n.indexOf(t*t-1),i=this.getNeighbors(s,t);let r=null,o=1/0;for(const a of i){const l=[...n];if(l[s]=n[a],l[a]=t*t-1,e&&e.has(l.join(",")))continue;const h=this.getManhattanDistance(l,t);h<o&&(o=h,r=a)}return r}solveAStar(n){const e=[],s=new Set,i=this.getManhattanDistance(n,3);e.push({board:n,path:[],g:0,f:i}),s.add(n.join(","));let r=0;for(;e.length>0&&r<5e3;){r++,e.sort((h,d)=>h.f-d.f);const o=e.shift();if(this.isBoardSolved(o.board))return o.path;const a=o.board.indexOf(8),l=this.getNeighbors(a,3);for(const h of l){const d=[...o.board];d[a]=o.board[h],d[h]=8;const c=d.join(",");if(s.has(c))continue;s.add(c);const p=[...o.path,h],g=o.g+1,b=g+this.getManhattanDistance(d,3);e.push({board:d,path:p,g,f:b})}}return null}async animatePath(n){var t;for(const e of n){if(!this.isSolving)break;const s=this.tiles.find(r=>r.currentIndex===e),i=(t=this.shadowRoot)==null?void 0:t.querySelector(`[data-index="${e}"]`);if(i){const r=this.gridSize,o=i.getBoundingClientRect(),a=parseFloat(getComputedStyle(this.gridElement).gap||"0"),l=o.width+a,h=o.height+a,d=Math.floor(e/r),c=Math.floor(this.blankIndex/r);let p=0,g=0;d===c?p=this.blankIndex>e?l:-l:g=this.blankIndex>e?h:-h,i.style.transition="transform 0.15s ease-out",i.style.transform=`translate3d(${p}px, ${g}px, 0)`,this.triggerHaptic(),await new Promise(M=>setTimeout(M,150));const b=this.blankIndex,J=s.currentIndex,ft=this.tiles.find(M=>M.id===r*r-1);s.currentIndex=b,ft.currentIndex=J,this.blankIndex=J,this.moves++,this.tiles=[...this.tiles],i.style.transition="none",i.style.transform="",await new Promise(M=>setTimeout(M,80))}}this.checkWinState()}handleImageChange(n){const t=n.target,e=Y.find(s=>s.id===t.value);e&&(this.activeImage=e)}handleGridSizeChange(n){const t=n.target;this.gridSize=parseInt(t.value)}render(){const n=this.gridSize,t=100*n,e=[...this.tiles].sort((s,i)=>s.currentIndex-i.currentIndex);return W`
      <div class="header-panel">
        <div class="active-synth-name">${this.activeImage.name}</div>
        <div class="stats">
          <div class="stat-display">
            <span class="stat-label">Moves</span>
            <span class="stat-value">${String(this.moves).padStart(3,"0")}</span>
          </div>
          <div class="stat-display">
            <span class="stat-label">Time</span>
            <span class="stat-value">${this.formatTime(this.secondsElapsed)}</span>
          </div>
        </div>
      </div>

      <div class="controls">
        <select @change=${this.handleImageChange} .value=${this.activeImage.id} ?disabled=${this.isSolving}>
          ${Y.map(s=>W`<option value=${s.id}>${s.name}</option>`)}
        </select>

        <select @change=${this.handleGridSizeChange} .value=${String(this.gridSize)} ?disabled=${this.isSolving}>
          <option value="3">3 x 3 (Beginner)</option>
          <option value="4">4 x 4 (Classic)</option>
          <option value="5">5 x 5 (Expert)</option>
        </select>
        
        <button class="primary" @click=${this.shufflePuzzle} ?disabled=${this.isSolving}>
          ${this.isPlaying?"Restart":"Shuffle & Play"}
        </button>
      </div>

      <div class="board-wrapper">
        <div 
          class="puzzle-grid" 
          style="grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr); --bg-size: ${t}% ${t}%;"
        >
          ${e.map(s=>{const i=s.id===n*n-1,r=Math.floor(s.id/n),a=s.id%n/(n-1)*100,l=r/(n-1)*100,h=`${a}% ${l}%`;return W`
              <div 
                class="tile ${i?"blank":""}" 
                data-index=${s.currentIndex}
                style="background-image: url('${this.activeImage.url}'); background-position: ${h};"
                @pointerdown=${d=>this.handlePointerDown(d,s)}
                @dragstart=${d=>d.preventDefault()}
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
      </div>

      <div class="game-actions">
        <button 
          @click=${()=>{this.showPreview=!this.showPreview}} 
          ?disabled=${this.hasWon||this.isSolving}
        >
          Preview
        </button>
        <button 
          @click=${()=>this.runSolver(!1)} 
          ?disabled=${!this.isPlaying||this.hasWon||this.isSolving}
        >
          Get Hint
        </button>
        <button 
          @click=${()=>this.runSolver(!0)} 
          ?disabled=${!this.isPlaying||this.hasWon||this.isSolving}
        >
          Auto-Solve
        </button>
      </div>
    `}};f.styles=vt`
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
    }

    .tile:hover {
      border-color: rgba(255, 94, 0, 0.4);
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.18),
        0 0 10px rgba(255, 94, 0, 0.3),
        0 6px 12px rgba(0, 0, 0, 0.5);
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
  `;m([v()],f.prototype,"gridSize",2);m([v()],f.prototype,"activeImage",2);m([v()],f.prototype,"tiles",2);m([v()],f.prototype,"blankIndex",2);m([v()],f.prototype,"moves",2);m([v()],f.prototype,"secondsElapsed",2);m([v()],f.prototype,"isPlaying",2);m([v()],f.prototype,"hasWon",2);m([v()],f.prototype,"showPreview",2);m([v()],f.prototype,"isSolving",2);m([Lt(".puzzle-grid")],f.prototype,"gridElement",2);f=m([Ut("sliding-puzzle")],f);
//# sourceMappingURL=index-OFu7tcDc.js.map
