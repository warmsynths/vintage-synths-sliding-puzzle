(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,X=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),K=new WeakMap;let ht=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&K.set(e,t))}return t}toString(){return this.cssText}};const bt=r=>new ht(typeof r=="string"?r:r+"",void 0,F),mt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new ht(e,r,F)},vt=(r,t)=>{if(X)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=N.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Q=X?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return bt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yt,defineProperty:$t,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:_t,getPrototypeOf:At}=Object,$=globalThis,tt=$.trustedTypes,St=tt?tt.emptyScript:"",L=$.reactiveElementPolyfillSupport,z=(r,t)=>r,H={toAttribute(r,t){switch(t){case Boolean:r=r?St:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},G=(r,t)=>!yt(r,t),et={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=et){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&$t(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=xt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){const a=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??et}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const e=this.properties,s=[...wt(e),..._t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Q(i))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){var o;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){var o,n;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const a=s.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:H;this._$Em=i;const d=l.fromAttribute(e,a.type);this[i]=d??((n=this._$Ej)==null?void 0:n.get(i))??d,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){var n;if(t!==void 0){const a=this.constructor;if(i===!1&&(o=this[t]),s??(s=a.getPropertyOptions(t)),!((s.hasChanged??G)(o,e)||s.useDefault&&s.reflect&&o===((n=this._$Ej)==null?void 0:n.get(t))&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[z("elementProperties")]=new Map,S[z("finalized")]=new Map,L==null||L({ReactiveElement:S}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=globalThis,st=r=>r,B=I.trustedTypes,it=B?B.createPolicy("lit-html",{createHTML:r=>r}):void 0,ct="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,pt="?"+y,Et=`<${pt}>`,A=document,T=()=>A.createComment(""),D=r=>r===null||typeof r!="object"&&typeof r!="function",Z=Array.isArray,Pt=r=>Z(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,ot=/>/g,x=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,at=/"/g,ut=/^(?:script|style|textarea|title)$/i,Mt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),R=Mt(1),E=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),lt=new WeakMap,w=A.createTreeWalker(A,129);function gt(r,t){if(!Z(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const kt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=k;for(let a=0;a<e;a++){const l=r[a];let d,c,h=-1,p=0;for(;p<l.length&&(n.lastIndex=p,c=n.exec(l),c!==null);)p=n.lastIndex,n===k?c[1]==="!--"?n=rt:c[1]!==void 0?n=ot:c[2]!==void 0?(ut.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=x):c[3]!==void 0&&(n=x):n===x?c[0]===">"?(n=i??k,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?x:c[3]==='"'?at:nt):n===at||n===nt?n=x:n===rt||n===ot?n=k:(n=x,i=void 0);const u=n===x&&r[a+1].startsWith("/>")?" ":"";o+=n===k?l+Et:h>=0?(s.push(d),l.slice(0,h)+ct+l.slice(h)+y+u):l+y+(h===-2?a:u)}return[gt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[d,c]=kt(t,e);if(this.el=O.createElement(d,s),w.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=w.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ct)){const p=c[n++],u=i.getAttribute(h).split(y),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:u,ctor:v[1]==="."?It:v[1]==="?"?Ct:v[1]==="@"?Tt:j}),i.removeAttribute(h)}else h.startsWith(y)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(ut.test(i.tagName)){const h=i.textContent.split(y),p=h.length-1;if(p>0){i.textContent=B?B.emptyScript:"";for(let u=0;u<p;u++)i.append(h[u],T()),w.nextNode(),l.push({type:2,index:++o});i.append(h[p],T())}}}else if(i.nodeType===8)if(i.data===pt)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(y,h+1))!==-1;)l.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){const s=A.createElement("template");return s.innerHTML=t,s}}function P(r,t,e=r,s){var n,a;if(t===E)return t;let i=s!==void 0?(n=e._$Co)==null?void 0:n[s]:e._$Cl;const o=D(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=P(r,i._$AS(r,t.values),i,s)),t}class zt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??A).importNode(e,!0);w.currentNode=i;let o=w.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new U(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new Dt(o,this,t)),this._$AV.push(d),l=s[++a]}n!==(l==null?void 0:l.index)&&(o=w.nextNode(),n++)}return w.currentNode=A,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),D(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=O.createElement(gt(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{const n=new zt(i,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=lt.get(t.strings);return e===void 0&&lt.set(t.strings,e=new O(t)),e}k(t){Z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new U(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t!==this._$AB;){const i=st(t).nextSibling;st(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==E,n&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=P(this,a[s+l],e,l),d===E&&(d=this._$AH[l]),n||(n=!D(d)||d!==this._$AH[l]),d===g?t=g:t!==g&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class It extends j{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Ct extends j{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class Tt extends j{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??g)===E)return;const s=this._$AH,i=t===g&&s!==g||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Dt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const q=I.litHtmlPolyfillSupport;q==null||q(O,U),(I.litHtmlVersions??(I.litHtmlVersions=[])).push("3.3.3");const Ot=(r,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new U(t.insertBefore(T(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=globalThis;class C extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return E}}var dt;C._$litElement$=!0,C.finalized=!0,(dt=_.litElementHydrateSupport)==null||dt.call(_,{LitElement:C});const V=_.litElementPolyfillSupport;V==null||V({LitElement:C});(_.litElementVersions??(_.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:G},Nt=(r=Rt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,r,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,r,a),a}}}if(s==="setter"){const{name:n}=e;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,r,!0,a)}}throw Error("Unsupported decorator location: "+s)};function Ht(r){return(t,e)=>typeof e=="object"?Nt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
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
 */function jt(r,t){return(e,s,i)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(r))??null};return Bt(e,s,{get(){return o(this)}})}}var Lt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,b=(r,t,e,s)=>{for(var i=s>1?void 0:s?Wt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Lt(t,e,i),i};const Y=[{id:"minimoog",name:"Minimoog",url:"./assets/minimoog.png"},{id:"arpodysseymkiii",name:"ARP Odyssey Mk III",url:"./assets/arpodysseymkiii.png"},{id:"dx7",name:"Yamaha DX7",url:"./assets/dx7.png"},{id:"juno60",name:"Roland Juno-60",url:"./assets/juno60.png"},{id:"tb303",name:"Roland TB-303",url:"./assets/tb303.png"},{id:"tr808",name:"Roland TR-808",url:"./assets/tr808.png"},{id:"tr909",name:"Roland TR-909",url:"./assets/tr909.png"},{id:"cz1",name:"Casio CZ-1",url:"./assets/cz1.png"},{id:"mpc60",name:"Akai MPC60",url:"./assets/mpc60.png"},{id:"sp1200",name:"E-mu SP-1200",url:"./assets/sp1200.png"}];let f=class extends C{constructor(){super(...arguments),this.gridSize=3,this.activeImage=Y[0],this.tiles=[],this.blankIndex=8,this.moves=0,this.secondsElapsed=0,this.isPlaying=!1,this.hasWon=!1,this.showPreview=!1,this.isSolving=!1,this.gameMode="freeplay",this.hasMoved=!1,this.dragTile=null,this.dragElement=null,this.startX=0,this.startY=0,this.allowedDragDirection=null,this.maxDragDistance=0,this._boundPointerMove=r=>this.handlePointerMove(r),this._boundPointerUp=r=>this.handlePointerUp(r)}connectedCallback(){super.connectedCallback(),this.resetPuzzle()}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer()}updated(r){(r.has("gridSize")||r.has("activeImage"))&&this.resetPuzzle()}startTimer(){this.stopTimer(),this.secondsElapsed=0,this.timerInterval=window.setInterval(()=>{this.secondsElapsed++},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=void 0)}formatTime(r){const t=Math.floor(r/60),e=r%60;return`${t}:${e.toString().padStart(2,"0")}`}triggerHaptic(){if("vibrate"in navigator)try{navigator.vibrate(10)}catch{}}setMode(r){this.gameMode!==r&&(this.gameMode=r,this.resetPuzzle())}resetPuzzle(){this.stopTimer(),this.isSolving=!1,this.secondsElapsed=0,this.moves=0,this.isPlaying=!1,this.hasWon=!1,this.showPreview=!1;const r=this.gridSize,t=r*r,e=[];for(let s=0;s<t;s++)e.push({id:s,currentIndex:s});this.tiles=e,this.blankIndex=t-1}shufflePuzzle(){this.resetPuzzle();const r=this.gridSize;let t=r*r-1;const e=[...this.tiles];let s=-1;const i=r*r*25;for(let o=0;o<i;o++){const n=this.getNeighbors(t,r),a=n.filter(h=>{var p;return((p=e.find(u=>u.currentIndex===h))==null?void 0:p.id)!==s}),l=a.length>0?a[Math.floor(Math.random()*a.length)]:n[Math.floor(Math.random()*n.length)],d=e.find(h=>h.currentIndex===l),c=e.find(h=>h.id===r*r-1);s=d.id,d.currentIndex=t,c.currentIndex=l,t=l}this.tiles=e,this.blankIndex=t,this.isPlaying=!0,this.startTimer()}getNeighbors(r,t){const e=Math.floor(r/t),s=r%t,i=[];return e>0&&i.push(r-t),e<t-1&&i.push(r+t),s>0&&i.push(r-1),s<t-1&&i.push(r+1),i}checkWinState(){const r=this.tiles.every(t=>t.id===t.currentIndex);return r&&this.isPlaying&&(this.isPlaying=!1,this.stopTimer(),this.hasWon=!0,this.triggerHaptic()),r}handlePointerDown(r,t){if(!(this.gameMode==="freeplay"||this.gameMode==="play"&&this.isPlaying)||this.isSolving||this.hasWon)return;r.preventDefault();const s=this.gridSize,i=t.currentIndex,o=this.blankIndex,n=Math.floor(i/s),a=i%s,l=Math.floor(o/s),d=o%s;if(!(Math.abs(n-l)===1&&a===d||Math.abs(a-d)===1&&n===l))return;const h=r.currentTarget;this.dragTile=t,this.dragElement=h,this.startX=r.clientX,this.startY=r.clientY,this.hasMoved=!1,n===l?this.allowedDragDirection=d>a?"right":"left":this.allowedDragDirection=l>n?"down":"up";const p=h.getBoundingClientRect(),u=parseFloat(getComputedStyle(this.gridElement).gap||"0");this.allowedDragDirection==="left"||this.allowedDragDirection==="right"?this.maxDragDistance=p.width+u:this.maxDragDistance=p.height+u,window.addEventListener("pointermove",this._boundPointerMove),window.addEventListener("pointerup",this._boundPointerUp),window.addEventListener("pointercancel",this._boundPointerUp),h.style.transition="none",h.style.zIndex="10"}handlePointerMove(r){if(!this.dragTile||!this.dragElement)return;const t=r.clientX-this.startX,e=r.clientY-this.startY;(Math.abs(t)>4||Math.abs(e)>4)&&(this.hasMoved=!0);let s=0,i=0;const o=this.maxDragDistance;this.allowedDragDirection==="right"?s=Math.max(0,Math.min(o,t)):this.allowedDragDirection==="left"?s=Math.min(0,Math.max(-o,t)):this.allowedDragDirection==="down"?i=Math.max(0,Math.min(o,e)):this.allowedDragDirection==="up"&&(i=Math.min(0,Math.max(-o,e))),this.dragElement.style.transform=`translate3d(${s}px, ${i}px, 0)`}handlePointerUp(r){if(!this.dragTile||!this.dragElement)return;const t=this.dragElement,e=this.dragTile,s=this.gridSize;window.removeEventListener("pointermove",this._boundPointerMove),window.removeEventListener("pointerup",this._boundPointerUp),window.removeEventListener("pointercancel",this._boundPointerUp);const o=t.style.transform.match(/translate3d\(([^px]+)px,\s*([^px]+)px/);let n=0;if(o){const d=parseFloat(o[1]),c=parseFloat(o[2]);n=Math.max(Math.abs(d),Math.abs(c))}const a=this.maxDragDistance*.35,l=(n>=a||!this.hasMoved)&&r.type!=="pointercancel";if(t.style.transition="transform 0.15s ease-out",l){const d=this.blankIndex,c=e.currentIndex,h=this.tiles.find(p=>p.id===s*s-1);e.currentIndex=d,h.currentIndex=c,this.blankIndex=c,this.moves++,this.triggerHaptic(),this.tiles=[...this.tiles],t.style.transform="",t.style.zIndex="",this.checkWinState()}else t.style.transform="translate3d(0, 0, 0)",setTimeout(()=>{t.style.zIndex=""},150);this.dragTile=null,this.dragElement=null,this.allowedDragDirection=null}async runSolver(r){var i,o;if(!this.isPlaying||this.hasWon||this.isSolving)return;this.isSolving=!0;const t=this.gridSize,e=this.getBoardArray();if(t>3){const n=this.getGreedyBestMove(e,t);if(n!==null)if(r){let a=[...e];const l=[];let d=new Set;d.add(a.join(","));for(let c=0;c<40;c++){const h=this.getGreedyBestMove(a,t,d);if(h===null)break;const p=a.indexOf(t*t-1);if(a[p]=a[h],a[h]=t*t-1,l.push(h),d.add(a.join(",")),this.isBoardSolved(a))break}l.length>0?await this.animatePath(l):await this.animatePath([n])}else{const a=(i=this.shadowRoot)==null?void 0:i.querySelector(`[data-index="${n}"]`);a&&(a.classList.add("hint-highlight"),setTimeout(()=>{a.classList.remove("hint-highlight")},1500))}this.isSolving=!1;return}const s=this.solveAStar(e);if(s&&s.length>0)if(r)await this.animatePath(s);else{const n=s[0],a=(o=this.shadowRoot)==null?void 0:o.querySelector(`[data-index="${n}"]`);a&&(a.classList.add("hint-highlight"),setTimeout(()=>{a.classList.remove("hint-highlight")},1500))}this.isSolving=!1}getBoardArray(){const r=new Array(this.gridSize*this.gridSize).fill(-1);return this.tiles.forEach(t=>{r[t.currentIndex]=t.id}),r}isBoardSolved(r){return r.every((t,e)=>t===e)}getManhattanDistance(r,t){let e=0;for(let s=0;s<r.length;s++){const i=r[s];if(i===t*t-1)continue;const o=Math.floor(i/t),n=i%t,a=Math.floor(s/t),l=s%t;e+=Math.abs(o-a)+Math.abs(n-l)}return e}getGreedyBestMove(r,t,e){const s=r.indexOf(t*t-1),i=this.getNeighbors(s,t);let o=null,n=1/0;for(const a of i){const l=[...r];if(l[s]=r[a],l[a]=t*t-1,e&&e.has(l.join(",")))continue;const d=this.getManhattanDistance(l,t);d<n&&(n=d,o=a)}return o}solveAStar(r){const e=[],s=new Set,i=this.getManhattanDistance(r,3);e.push({board:r,path:[],g:0,f:i}),s.add(r.join(","));let o=0;for(;e.length>0&&o<5e3;){o++,e.sort((d,c)=>d.f-c.f);const n=e.shift();if(this.isBoardSolved(n.board))return n.path;const a=n.board.indexOf(8),l=this.getNeighbors(a,3);for(const d of l){const c=[...n.board];c[a]=n.board[d],c[d]=8;const h=c.join(",");if(s.has(h))continue;s.add(h);const p=[...n.path,d],u=n.g+1,v=u+this.getManhattanDistance(c,3);e.push({board:c,path:p,g:u,f:v})}}return null}async animatePath(r){var t;for(const e of r){if(!this.isSolving)break;const s=this.tiles.find(o=>o.currentIndex===e),i=(t=this.shadowRoot)==null?void 0:t.querySelector(`[data-index="${e}"]`);if(i){const o=this.gridSize,n=i.getBoundingClientRect(),a=parseFloat(getComputedStyle(this.gridElement).gap||"0"),l=n.width+a,d=n.height+a,c=Math.floor(e/o),h=Math.floor(this.blankIndex/o);let p=0,u=0;c===h?p=this.blankIndex>e?l:-l:u=this.blankIndex>e?d:-d,i.style.transition="transform 0.15s ease-out",i.style.transform=`translate3d(${p}px, ${u}px, 0)`,this.triggerHaptic(),await new Promise(M=>setTimeout(M,150));const v=this.blankIndex,J=s.currentIndex,ft=this.tiles.find(M=>M.id===o*o-1);s.currentIndex=v,ft.currentIndex=J,this.blankIndex=J,this.moves++,this.tiles=[...this.tiles],i.style.transition="none",i.style.transform="",await new Promise(M=>setTimeout(M,80))}}this.checkWinState()}handleImageChange(r){const t=r.target,e=Y.find(s=>s.id===t.value);e&&(this.activeImage=e)}handleGridSizeChange(r){const t=r.target;this.gridSize=parseInt(t.value)}render(){const r=this.gridSize,t=[...this.tiles].sort((e,s)=>e.currentIndex-s.currentIndex);return R`
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
          ${t.map(e=>{const i=e.id===r*r-1&&(this.gameMode==="freeplay"||this.isPlaying),o=Math.floor(e.id/r),a=e.id%r/(r-1)*100,l=o/(r-1)*100,d=`${a}% ${l}%`;return R`
              <div 
                class="tile ${i?"blank":""}" 
                data-index=${e.currentIndex}
                style="background-image: url('${this.activeImage.url}'); background-position: ${d};"
                @pointerdown=${c=>this.handlePointerDown(c,e)}
                @dragstart=${c=>c.preventDefault()}
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
//# sourceMappingURL=index-TgHjPBQf.js.map
