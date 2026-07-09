(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=globalThis,F=j.ShadowRoot&&(j.ShadyCSS===void 0||j.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),K=new WeakMap;let ce=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(F&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(t,e))}return e}toString(){return this.cssText}};const be=s=>new ce(typeof s=="string"?s:s+"",void 0,V),me=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new ce(t,s,V)},ve=(s,e)=>{if(F)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=j.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,s.appendChild(i)}},Q=F?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return be(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xe,defineProperty:ye,getOwnPropertyDescriptor:we,getOwnPropertyNames:$e,getOwnPropertySymbols:_e,getPrototypeOf:Pe}=Object,y=globalThis,ee=y.trustedTypes,Se=ee?ee.emptyScript:"",B=y.reactiveElementPolyfillSupport,T=(s,e)=>s,N={toAttribute(s,e){switch(e){case Boolean:s=s?Se:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},G=(s,e)=>!xe(s,e),te={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=te){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&ye(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:o}=we(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){const a=r==null?void 0:r.call(this);o==null||o.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??te}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const e=Pe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const t=this.properties,i=[...$e(t),..._e(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Q(r))}else e!==void 0&&t.push(Q(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ve(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var o;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:N).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,t){var o,n;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const a=i.getPropertyOptions(r),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:N;this._$Em=r;const c=l.fromAttribute(t,a.type);this[r]=c??((n=this._$Ej)==null?void 0:n.get(r))??c,this._$Em=null}}requestUpdate(e,t,i,r=!1,o){var n;if(e!==void 0){const a=this.constructor;if(r===!1&&(o=this[e]),i??(i=a.getPropertyOptions(e)),!((i.hasChanged??G)(o,t)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[T("elementProperties")]=new Map,k[T("finalized")]=new Map,B==null||B({ReactiveElement:k}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,ie=s=>s,H=C.trustedTypes,se=H?H.createPolicy("lit-html",{createHTML:s=>s}):void 0,he="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,pe="?"+x,ke=`<${pe}>`,P=document,O=()=>P.createComment(""),D=s=>s===null||typeof s!="object"&&typeof s!="function",J=Array.isArray,Ae=s=>J(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",W=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,oe=/>/g,w=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,ae=/"/g,ge=/^(?:script|style|textarea|title)$/i,Ee=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),S=Ee(1),A=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),le=new WeakMap,$=P.createTreeWalker(P,129);function fe(s,e){if(!J(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return se!==void 0?se.createHTML(e):e}const Me=(s,e)=>{const t=s.length-1,i=[];let r,o=e===2?"<svg>":e===3?"<math>":"",n=z;for(let a=0;a<t;a++){const l=s[a];let c,h,d=-1,p=0;for(;p<l.length&&(n.lastIndex=p,h=n.exec(l),h!==null);)p=n.lastIndex,n===z?h[1]==="!--"?n=re:h[1]!==void 0?n=oe:h[2]!==void 0?(ge.test(h[2])&&(r=RegExp("</"+h[2],"g")),n=w):h[3]!==void 0&&(n=w):n===w?h[0]===">"?(n=r??z,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,c=h[1],n=h[3]===void 0?w:h[3]==='"'?ae:ne):n===ae||n===ne?n=w:n===re||n===oe?n=z:(n=w,r=void 0);const g=n===w&&s[a+1].startsWith("/>")?" ":"";o+=n===z?l+ke:d>=0?(i.push(c),l.slice(0,d)+he+l.slice(d)+x+g):l+x+(d===-2?a:g)}return[fe(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class R{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let o=0,n=0;const a=e.length-1,l=this.parts,[c,h]=Me(e,t);if(this.el=R.createElement(c,i),$.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=$.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(he)){const p=h[n++],g=r.getAttribute(d).split(x),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:v[2],strings:g,ctor:v[1]==="."?Te:v[1]==="?"?Ce:v[1]==="@"?Ie:L}),r.removeAttribute(d)}else d.startsWith(x)&&(l.push({type:6,index:o}),r.removeAttribute(d));if(ge.test(r.tagName)){const d=r.textContent.split(x),p=d.length-1;if(p>0){r.textContent=H?H.emptyScript:"";for(let g=0;g<p;g++)r.append(d[g],O()),$.nextNode(),l.push({type:2,index:++o});r.append(d[p],O())}}}else if(r.nodeType===8)if(r.data===pe)l.push({type:2,index:o});else{let d=-1;for(;(d=r.data.indexOf(x,d+1))!==-1;)l.push({type:7,index:o}),d+=x.length-1}o++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function E(s,e,t=s,i){var n,a;if(e===A)return e;let r=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=D(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=E(s,r._$AS(s,e.values),r,i)),e}class ze{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??P).importNode(t,!0);$.currentNode=r;let o=$.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new U(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Oe(o,this,e)),this._$AV.push(c),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=$.nextNode(),n++)}return $.currentNode=P,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class U{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),D(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ae(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=R.createElement(fe(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{const n=new ze(r,this),a=n.u(this.options);n.p(t),this.T(a),this._$AH=n}}_$AC(e){let t=le.get(e.strings);return t===void 0&&le.set(e.strings,t=new R(e)),t}k(e){J(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const o of e)r===t.length?t.push(i=new U(this.O(O()),this.O(O()),this,this.options)):i=t[r],i._$AI(o),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const r=ie(e).nextSibling;ie(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(e,t=this,i,r){const o=this.strings;let n=!1;if(o===void 0)e=E(this,e,t,0),n=!D(e)||e!==this._$AH&&e!==A,n&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=E(this,a[i+l],t,l),c===A&&(c=this._$AH[l]),n||(n=!D(c)||c!==this._$AH[l]),c===f?e=f:e!==f&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!r&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Te extends L{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Ce extends L{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class Ie extends L{constructor(e,t,i,r,o){super(e,t,i,r,o),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??f)===A)return;const i=this._$AH,r=e===f&&i!==f||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==f&&(i===f||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const Y=C.litHtmlPolyfillSupport;Y==null||Y(R,U),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.3.3");const De=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new U(e.insertBefore(O(),o),o,void 0,t??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=globalThis;class I extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=De(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return A}}var de;I._$litElement$=!0,I.finalized=!0,(de=_.litElementHydrateSupport)==null||de.call(_,{LitElement:I});const X=_.litElementPolyfillSupport;X==null||X({LitElement:I});(_.litElementVersions??(_.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:G},je=(s=Ue,e,t)=>{const{kind:i,metadata:r}=t;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(t.name,s),i==="accessor"){const{name:n}=t;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,s,!0,a)},init(a){return a!==void 0&&this.C(n,void 0,s,a),a}}}if(i==="setter"){const{name:n}=t;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,s,!0,a)}}throw Error("Unsupported decorator location: "+i)};function Ne(s){return(e,t)=>typeof t=="object"?je(s,e,t):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(s){return Ne({...s,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Le(s,e){return(t,i,r)=>{const o=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(s))??null};return He(t,i,{get(){return o(this)}})}}var Be=Object.defineProperty,We=Object.getOwnPropertyDescriptor,b=(s,e,t,i)=>{for(var r=i>1?void 0:i?We(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(e,t,r):n(r))||r);return i&&r&&Be(e,t,r),r};const q=[{id:"minimoog",name:"Minimoog",url:"./assets/minimoog.png"},{id:"arpodysseymkiii",name:"ARP Odyssey Mk III",url:"./assets/arpodysseymkiii.png"},{id:"dx7",name:"Yamaha DX7",url:"./assets/dx7.png"},{id:"juno60",name:"Roland Juno-60",url:"./assets/juno60.png"},{id:"tb303",name:"Roland TB-303",url:"./assets/tb303.png"},{id:"tr808",name:"Roland TR-808",url:"./assets/tr808.png"},{id:"tr909",name:"Roland TR-909",url:"./assets/tr909.png"},{id:"cz1",name:"Casio CZ-1",url:"./assets/cz1.png"},{id:"mpc60",name:"Akai MPC60",url:"./assets/mpc60.png"},{id:"sp1200",name:"E-mu SP-1200",url:"./assets/sp1200.png"}];let u=class extends I{constructor(){super(...arguments),this.gridSize=3,this.activeImage=q[0],this.tiles=[],this.blankIndex=8,this.moves=0,this.secondsElapsed=0,this.isPlaying=!1,this.hasWon=!1,this.showPreview=!1,this.isSolving=!1,this.gameMode="freeplay",this.hasMoved=!1,this.dragTile=null,this.dragElement=null,this.startX=0,this.startY=0,this.allowedDragDirection=null,this.maxDragDistance=0,this.peelTile=null,this.peelStartX=0,this.peelStartY=0,this.peelStartProgress=0,this.peelMaxDistance=100,this._boundPointerMove=s=>this.handlePointerMove(s),this._boundPointerUp=s=>this.handlePointerUp(s),this._boundPeelPointerMove=s=>this.handlePeelPointerMove(s),this._boundPeelPointerUp=s=>this.handlePeelPointerUp()}connectedCallback(){super.connectedCallback(),this.resetPuzzle()}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer()}updated(s){(s.has("gridSize")||s.has("activeImage"))&&this.resetPuzzle()}startTimer(){this.stopTimer(),this.secondsElapsed=0,this.timerInterval=window.setInterval(()=>{this.secondsElapsed++},1e3)}stopTimer(){this.timerInterval&&(clearInterval(this.timerInterval),this.timerInterval=void 0)}formatTime(s){const e=Math.floor(s/60),t=s%60;return`${e}:${t.toString().padStart(2,"0")}`}triggerHaptic(){if("vibrate"in navigator)try{navigator.vibrate(10)}catch{}}setMode(s){this.gameMode!==s&&(this.gameMode=s,this.resetPuzzle())}resetPuzzle(){this.stopTimer(),this.isSolving=!1,this.secondsElapsed=0,this.moves=0,this.isPlaying=!1,this.hasWon=!1,this.showPreview=!1;const s=this.gridSize,e=s*s,t=[];for(let i=0;i<e;i++){let r,o=0;i===1?(r="tr",o=.12):i===3?(r="tl",o=.08):i===5?(r="br",o=.1):(s===3&&i===6||s>3&&i===8)&&(r="bl",o=.06),t.push({id:i,currentIndex:i,peelProgress:o,isPeeledOff:!1,peelCorner:r})}this.tiles=t,this.blankIndex=e-1}shufflePuzzle(){this.resetPuzzle();const s=this.gridSize;let e=s*s-1;const t=[...this.tiles];let i=-1;const r=s*s*25;for(let o=0;o<r;o++){const n=this.getNeighbors(e,s),a=n.filter(d=>{var p;return((p=t.find(g=>g.currentIndex===d))==null?void 0:p.id)!==i}),l=a.length>0?a[Math.floor(Math.random()*a.length)]:n[Math.floor(Math.random()*n.length)],c=t.find(d=>d.currentIndex===l),h=t.find(d=>d.id===s*s-1);i=c.id,c.currentIndex=e,h.currentIndex=l,e=l}this.tiles=t,this.blankIndex=e,this.isPlaying=!0,this.startTimer()}getNeighbors(s,e){const t=Math.floor(s/e),i=s%e,r=[];return t>0&&r.push(s-e),t<e-1&&r.push(s+e),i>0&&r.push(s-1),i<e-1&&r.push(s+1),r}checkWinState(){const s=this.tiles.every(e=>e.id===e.currentIndex);return s&&this.isPlaying&&(this.isPlaying=!1,this.stopTimer(),this.hasWon=!0,this.triggerHaptic()),s}handlePointerDown(s,e){if(!(this.gameMode==="freeplay"||this.gameMode==="play"&&this.isPlaying)||this.isSolving||this.hasWon)return;s.preventDefault();const i=this.gridSize,r=e.currentIndex,o=this.blankIndex,n=Math.floor(r/i),a=r%i,l=Math.floor(o/i),c=o%i;if(!(Math.abs(n-l)===1&&a===c||Math.abs(a-c)===1&&n===l))return;const d=s.currentTarget;this.dragTile=e,this.dragElement=d,this.startX=s.clientX,this.startY=s.clientY,this.hasMoved=!1,n===l?this.allowedDragDirection=c>a?"right":"left":this.allowedDragDirection=l>n?"down":"up";const p=d.getBoundingClientRect(),g=parseFloat(getComputedStyle(this.gridElement).gap||"0");this.allowedDragDirection==="left"||this.allowedDragDirection==="right"?this.maxDragDistance=p.width+g:this.maxDragDistance=p.height+g,window.addEventListener("pointermove",this._boundPointerMove),window.addEventListener("pointerup",this._boundPointerUp),window.addEventListener("pointercancel",this._boundPointerUp),d.style.transition="none",d.style.zIndex="10"}handlePointerMove(s){if(!this.dragTile||!this.dragElement)return;const e=s.clientX-this.startX,t=s.clientY-this.startY;(Math.abs(e)>4||Math.abs(t)>4)&&(this.hasMoved=!0);let i=0,r=0;const o=this.maxDragDistance;this.allowedDragDirection==="right"?i=Math.max(0,Math.min(o,e)):this.allowedDragDirection==="left"?i=Math.min(0,Math.max(-o,e)):this.allowedDragDirection==="down"?r=Math.max(0,Math.min(o,t)):this.allowedDragDirection==="up"&&(r=Math.min(0,Math.max(-o,t))),this.dragElement.style.transform=`translate3d(${i}px, ${r}px, 0)`}handlePointerUp(s){if(!this.dragTile||!this.dragElement)return;const e=this.dragElement,t=this.dragTile,i=this.gridSize;window.removeEventListener("pointermove",this._boundPointerMove),window.removeEventListener("pointerup",this._boundPointerUp),window.removeEventListener("pointercancel",this._boundPointerUp);const o=e.style.transform.match(/translate3d\(([^px]+)px,\s*([^px]+)px/);let n=0;if(o){const c=parseFloat(o[1]),h=parseFloat(o[2]);n=Math.max(Math.abs(c),Math.abs(h))}const a=this.maxDragDistance*.35,l=(n>=a||!this.hasMoved)&&s.type!=="pointercancel";if(e.style.transition="transform 0.15s ease-out",l){const c=this.blankIndex,h=t.currentIndex,d=this.tiles.find(p=>p.id===i*i-1);t.currentIndex=c,d.currentIndex=h,this.blankIndex=h,this.moves++,this.triggerHaptic(),this.tiles=[...this.tiles],e.style.transform="",e.style.zIndex="",this.checkWinState()}else e.style.transform="translate3d(0, 0, 0)",setTimeout(()=>{e.style.zIndex=""},150);this.dragTile=null,this.dragElement=null,this.allowedDragDirection=null}handlePeelPointerDown(s,e){var i;if(e.isPeeledOff)return;s.stopPropagation(),s.preventDefault(),this.peelTile=e,this.peelStartX=s.clientX,this.peelStartY=s.clientY,this.peelStartProgress=e.peelProgress||0;const t=(i=s.currentTarget.closest(".tile"))==null?void 0:i.getBoundingClientRect();this.peelMaxDistance=t?Math.max(t.width,t.height):100,window.addEventListener("pointermove",this._boundPeelPointerMove),window.addEventListener("pointerup",this._boundPeelPointerUp),window.addEventListener("pointercancel",this._boundPeelPointerUp)}handlePeelPointerMove(s){if(!this.peelTile)return;const e=s.clientX-this.peelStartX,t=s.clientY-this.peelStartY;let i=0;this.peelTile.peelCorner==="tr"?i=-e+t:this.peelTile.peelCorner==="tl"?i=e+t:this.peelTile.peelCorner==="br"?i=-e-t:this.peelTile.peelCorner==="bl"&&(i=e-t);const r=i/this.peelMaxDistance;let o=this.peelStartProgress+r;o=Math.max(0,Math.min(1.2,o)),this.peelTile.peelProgress=o,this.tiles=[...this.tiles]}handlePeelPointerUp(){if(this.peelTile){if(window.removeEventListener("pointermove",this._boundPeelPointerMove),window.removeEventListener("pointerup",this._boundPeelPointerUp),window.removeEventListener("pointercancel",this._boundPeelPointerUp),this.peelTile.peelProgress&&this.peelTile.peelProgress>.75)this.peelTile.isPeeledOff=!0,this.triggerHaptic();else{let s=0;this.peelTile.id===1?s=.12:this.peelTile.id===3?s=.08:this.peelTile.id===5?s=.1:(this.gridSize===3&&this.peelTile.id===6||this.gridSize>3&&this.peelTile.id===8)&&(s=.06),this.peelTile.peelProgress=s}this.peelTile=null,this.tiles=[...this.tiles]}}async runSolver(s){var r,o;if(!this.isPlaying||this.hasWon||this.isSolving)return;this.isSolving=!0;const e=this.gridSize,t=this.getBoardArray();if(e>3){const n=this.getGreedyBestMove(t,e);if(n!==null)if(s){let a=[...t];const l=[];let c=new Set;c.add(a.join(","));for(let h=0;h<40;h++){const d=this.getGreedyBestMove(a,e,c);if(d===null)break;const p=a.indexOf(e*e-1);if(a[p]=a[d],a[d]=e*e-1,l.push(d),c.add(a.join(",")),this.isBoardSolved(a))break}l.length>0?await this.animatePath(l):await this.animatePath([n])}else{const a=(r=this.shadowRoot)==null?void 0:r.querySelector(`[data-index="${n}"]`);a&&(a.classList.add("hint-highlight"),setTimeout(()=>{a.classList.remove("hint-highlight")},1500))}this.isSolving=!1;return}const i=this.solveAStar(t);if(i&&i.length>0)if(s)await this.animatePath(i);else{const n=i[0],a=(o=this.shadowRoot)==null?void 0:o.querySelector(`[data-index="${n}"]`);a&&(a.classList.add("hint-highlight"),setTimeout(()=>{a.classList.remove("hint-highlight")},1500))}this.isSolving=!1}getBoardArray(){const s=new Array(this.gridSize*this.gridSize).fill(-1);return this.tiles.forEach(e=>{s[e.currentIndex]=e.id}),s}isBoardSolved(s){return s.every((e,t)=>e===t)}getManhattanDistance(s,e){let t=0;for(let i=0;i<s.length;i++){const r=s[i];if(r===e*e-1)continue;const o=Math.floor(r/e),n=r%e,a=Math.floor(i/e),l=i%e;t+=Math.abs(o-a)+Math.abs(n-l)}return t}getGreedyBestMove(s,e,t){const i=s.indexOf(e*e-1),r=this.getNeighbors(i,e);let o=null,n=1/0;for(const a of r){const l=[...s];if(l[i]=s[a],l[a]=e*e-1,t&&t.has(l.join(",")))continue;const c=this.getManhattanDistance(l,e);c<n&&(n=c,o=a)}return o}solveAStar(s){const t=[],i=new Set,r=this.getManhattanDistance(s,3);t.push({board:s,path:[],g:0,f:r}),i.add(s.join(","));let o=0;for(;t.length>0&&o<5e3;){o++,t.sort((c,h)=>c.f-h.f);const n=t.shift();if(this.isBoardSolved(n.board))return n.path;const a=n.board.indexOf(8),l=this.getNeighbors(a,3);for(const c of l){const h=[...n.board];h[a]=n.board[c],h[c]=8;const d=h.join(",");if(i.has(d))continue;i.add(d);const p=[...n.path,c],g=n.g+1,v=g+this.getManhattanDistance(h,3);t.push({board:h,path:p,g,f:v})}}return null}async animatePath(s){var e;for(const t of s){if(!this.isSolving)break;const i=this.tiles.find(o=>o.currentIndex===t),r=(e=this.shadowRoot)==null?void 0:e.querySelector(`[data-index="${t}"]`);if(r){const o=this.gridSize,n=r.getBoundingClientRect(),a=parseFloat(getComputedStyle(this.gridElement).gap||"0"),l=n.width+a,c=n.height+a,h=Math.floor(t/o),d=Math.floor(this.blankIndex/o);let p=0,g=0;h===d?p=this.blankIndex>t?l:-l:g=this.blankIndex>t?c:-c,r.style.transition="transform 0.15s ease-out",r.style.transform=`translate3d(${p}px, ${g}px, 0)`,this.triggerHaptic(),await new Promise(M=>setTimeout(M,150));const v=this.blankIndex,Z=i.currentIndex,ue=this.tiles.find(M=>M.id===o*o-1);i.currentIndex=v,ue.currentIndex=Z,this.blankIndex=Z,this.moves++,this.tiles=[...this.tiles],r.style.transition="none",r.style.transform="",await new Promise(M=>setTimeout(M,80))}}this.checkWinState()}handleImageChange(s){const e=s.target,t=q.find(i=>i.id===e.value);t&&(this.activeImage=t)}handleGridSizeChange(s){const e=s.target;this.gridSize=parseInt(e.value)}render(){const s=this.gridSize,e=[...this.tiles].sort((t,i)=>t.currentIndex-i.currentIndex);return S`
      <div class="header-panel">
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <div class="active-synth-name ${this.activeImage.id}">${this.activeImage.name}</div>
          <div class="order-btn-wrapper" title="Posters coming soon!">
            <span class="btn-order-poster" style="cursor: default;">
              Posters Coming Soon
            </span>
            <span class="led-indicator"></span>
          </div>
        </div>
        <div class="stats desktop-only">
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

      <div class="bento-dashboard">
        
        <div class="stats mobile-only">
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
          <select class="synth-select" @change=${this.handleImageChange} .value=${this.activeImage.id} ?disabled=${this.isSolving}>
            ${q.map(t=>S`<option value=${t.id}>${t.name}</option>`)}
          </select>

          <select class="size-select" @change=${this.handleGridSizeChange} .value=${String(this.gridSize)} ?disabled=${this.isSolving}>
            <option value="3">3 x 3 (Beginner)</option>
            <option value="4">4 x 4 (Classic)</option>
            <option value="5">5 x 5 (Expert)</option>
          </select>
        </div>
      </div>

      <div class="board-wrapper">
        <div 
          class="puzzle-grid ${this.gameMode==="play"&&!this.isPlaying?"locked":""}" 
          style="
            grid-template-columns: repeat(${s}, 1fr); 
            grid-template-rows: repeat(${s}, 1fr); 
            --bg-size: calc(${s} * 100% + (${s} - 1) * var(--grid-gap)) calc(${s} * 100% + (${s} - 1) * var(--grid-gap));
            --tile-hover-border: ${this.gameMode==="freeplay"?"rgba(0, 229, 255, 0.5)":"rgba(255, 94, 0, 0.4)"};
            --tile-hover-glow: ${this.gameMode==="freeplay"?"rgba(0, 229, 255, 0.4)":"rgba(255, 94, 0, 0.3)"};
          "
        >
          ${e.map(t=>{const i=t.id===s*s-1,r=i&&(this.gameMode==="freeplay"||this.isPlaying),o=Math.floor(t.id/s),a=t.id%s/(s-1)*100,l=o/(s-1)*100,c=`${a}% ${l}%`;let h="",d="";return!i&&t.peelCorner&&!t.isPeeledOff&&(h=`peel-${t.peelCorner}`,d=`calc(${t.peelProgress||0} * 100px)`),S`
              <div 
                class="tile ${r?"blank":""}" 
                data-index=${t.currentIndex}
                @pointerdown=${p=>this.handlePointerDown(p,t)}
                @dragstart=${p=>p.preventDefault()}
              >
                ${t.isPeeledOff?"":S`
                  <div class="sticker-layer ${h}" style="background-image: url('${this.activeImage.url}'); background-position: ${c}; ${d?`--peel-size: ${d};`:""}"></div>
                  ${t.peelCorner?S`
                    <div class="peel-hitbox peel-${t.peelCorner}" @pointerdown=${p=>this.handlePeelPointerDown(p,t)}></div>
                  `:""}
                `}
              </div>
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
          
          <div class="win-promo">
            <div class="win-promo-text" style="margin-bottom: 0;">Like these prints? Posters coming soon!</div>
          </div>

          <button class="primary" style="margin-top: 0.5rem;" @click=${this.shufflePuzzle}>Play Again</button>
        </div>

        ${this.gameMode==="play"&&!this.isPlaying&&!this.hasWon?S`
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

      <!-- Synth Console Footer -->
      <footer class="synth-footer">
        <div class="footer-jack-group">
          <span class="jack-label">POSTER OUT</span>
          <span class="jack-port" title="Like these prints? Posters coming soon!" style="cursor: default;"></span>
          <span class="jack-label" style="color: var(--accent-orange)">POSTERS COMING SOON</span>
        </div>
        <div class="footer-serial">MOD-808 // SERIAL: WS-2026</div>
      </footer>
    `}};u.styles=me`
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

    .mobile-only {
      display: none !important;
    }

    .bento-dashboard {
      display: flex; 
      flex-direction: column; 
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
      transition: all var(--transition-speed) ease;
    }

    .active-synth-name.minimoog {
      font-family: 'BioRhyme', serif;
      font-weight: 800;
      color: #f5a623;
      text-shadow: 0 0 12px rgba(245, 166, 35, 0.4);
      text-transform: capitalize;
    }

    .active-synth-name.arpodysseymkiii {
      font-family: 'Syncopate', sans-serif;
      font-weight: 700;
      color: #ff5200;
      text-shadow: 0 0 12px rgba(255, 82, 0, 0.5);
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .active-synth-name.dx7 {
      font-family: 'Orbitron', sans-serif;
      font-weight: 900;
      color: #00f5d4;
      text-shadow: 0 0 12px rgba(0, 245, 212, 0.5);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .active-synth-name.juno60 {
      font-family: 'Syncopate', sans-serif;
      font-weight: 700;
      font-style: italic;
      color: #ff2a4b;
      text-shadow: 0 0 12px rgba(255, 42, 75, 0.5);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .active-synth-name.tb303 {
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      font-style: italic;
      color: #39ff14;
      text-shadow: 0 0 12px rgba(57, 255, 20, 0.5);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .active-synth-name.tr808 {
      font-family: 'Rubik', sans-serif;
      font-weight: 900;
      color: #ff6b00;
      text-shadow: 0 0 12px rgba(255, 107, 0, 0.5);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .active-synth-name.tr909 {
      font-family: 'Syncopate', sans-serif;
      font-weight: 700;
      color: #e2e2e8;
      text-shadow: 0 0 12px rgba(226, 226, 232, 0.3);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .active-synth-name.cz1 {
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      font-style: italic;
      color: #00bcff;
      text-shadow: 0 0 12px rgba(0, 188, 255, 0.5);
      text-transform: uppercase;
    }

    .active-synth-name.mpc60 {
      font-family: 'Rubik', sans-serif;
      font-weight: 800;
      color: #ded6c5;
      text-shadow: 0 0 12px rgba(222, 214, 197, 0.3);
      letter-spacing: -0.02em;
      text-transform: uppercase;
    }

    .active-synth-name.sp1200 {
      font-family: 'Rubik', sans-serif;
      font-weight: 900;
      font-style: italic;
      color: #4b7bec;
      text-shadow: 0 0 12px rgba(75, 123, 236, 0.5);
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
      background-color: #1a1a1a;
      background-image: 
        radial-gradient(circle at 30% 70%, rgba(255,255,255,0.05) 0%, transparent 20%),
        radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 30%);
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

    .sticker-layer {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background-size: var(--bg-size);
      background-repeat: no-repeat;
      pointer-events: none;
      border-radius: 4px;
    }

    /* Subtle sticker peel effects */
    .sticker-layer.peel-tr {
      clip-path: polygon(0 0, calc(100% - var(--peel-size, 12px)) 0, 100% var(--peel-size, 12px), 100% 100%, 0 100%);
    }
    .sticker-layer.peel-tr::after {
      content: '';
      position: absolute;
      top: -0.5px;
      right: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(225deg, transparent 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 0 0 0 2px;
      pointer-events: none;
      z-index: 5;
    }

    .sticker-layer.peel-tl {
      clip-path: polygon(var(--peel-size, 12px) 0, 100% 0, 100% 100%, 0 100%, 0 var(--peel-size, 12px));
    }
    .sticker-layer.peel-tl::after {
      content: '';
      position: absolute;
      top: -0.5px;
      left: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(135deg, transparent 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 0 0 2px 0;
      pointer-events: none;
      z-index: 5;
    }

    .sticker-layer.peel-br {
      clip-path: polygon(0 0, 100% 0, 100% calc(100% - var(--peel-size, 12px)), calc(100% - var(--peel-size, 12px)) 100%, 0 100%);
    }
    .sticker-layer.peel-br::after {
      content: '';
      position: absolute;
      bottom: -0.5px;
      right: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(315deg, transparent 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 2px 0 0 0;
      pointer-events: none;
      z-index: 5;
    }

    .sticker-layer.peel-bl {
      clip-path: polygon(0 0, 100% 0, 100% 100%, var(--peel-size, 12px) 100%, 0 calc(100% - var(--peel-size, 12px)));
    }
    .sticker-layer.peel-bl::after {
      content: '';
      position: absolute;
      bottom: -0.5px;
      left: -0.5px;
      width: var(--peel-size, 12px);
      height: var(--peel-size, 12px);
      background: linear-gradient(45deg, transparent 41%, rgba(0,0,0,0.15) 45%, #d8d3c9 47%, #faf8f5 55%, #ffffff 80%);
      box-shadow: 1px -1px 2px rgba(0, 0, 0, 0.4);
      border-radius: 0 2px 0 0;
      pointer-events: none;
      z-index: 5;
    }

    .peel-hitbox {
      position: absolute;
      width: 40px;
      height: 40px;
      z-index: 10;
      cursor: grabbing;
      touch-action: none;
    }
    .peel-hitbox.peel-tr { top: 0; right: 0; }
    .peel-hitbox.peel-tl { top: 0; left: 0; }
    .peel-hitbox.peel-br { bottom: 0; right: 0; }
    .peel-hitbox.peel-bl { bottom: 0; left: 0; }

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

    /* Synth Print Shop Footer & Patch Jack */
    .synth-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px dashed var(--border-color);
    }

    .footer-serial {
      font-family: var(--font-digital);
      font-size: 0.75rem;
      color: var(--text-muted);
      letter-spacing: 0.05em;
    }

    .footer-jack-group {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .jack-label {
      font-family: var(--font-digital);
      font-size: 0.7rem;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .jack-port {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: radial-gradient(circle, #3a3d46 0%, #1c1d22 70%, #0c0d10 100%);
      border: 2px solid #111;
      box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.8),
        0 1px 1px rgba(255, 255, 255, 0.05);
      cursor: pointer;
      position: relative;
      transition: all var(--transition-speed) ease;
      text-decoration: none;
    }

    .jack-port::after {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #000;
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.9);
      transition: background-color var(--transition-speed) ease;
    }

    .jack-port:hover {
      border-color: var(--accent-orange);
      box-shadow: 
        inset 0 2px 4px rgba(0, 0, 0, 0.8),
        0 0 8px rgba(255, 94, 0, 0.4);
    }

    .jack-port:hover::after {
      background-color: #ff5e00;
      box-shadow: 0 0 6px var(--accent-orange);
    }

    /* Backlit LED Buy Button */
    .order-btn-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .led-indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #2c0b00;
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.8);
      transition: background-color 0.3s, box-shadow 0.3s;
    }

    .btn-order-poster:hover + .led-indicator,
    .order-btn-wrapper:hover .led-indicator {
      background-color: #ff3c00;
      box-shadow: 
        0 0 8px #ff3c00,
        inset 0 1px 1px rgba(255,255,255,0.5);
    }

    .btn-order-poster {
      font-family: var(--font-family);
      font-size: 0.7rem;
      padding: 0.35rem 0.7rem;
      border-radius: 4px;
      border: 1px solid #111;
      background: linear-gradient(180deg, #2a2d36 0%, #1e2026 100%);
      color: var(--text-secondary);
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.05em;
      transition: all var(--transition-speed) cubic-bezier(0.16, 1, 0.3, 1);
      display: inline-flex;
      align-items: center;
      text-decoration: none;
    }

    .btn-order-poster:hover {
      color: var(--text-primary);
      background: linear-gradient(180deg, #323642 0%, #22252c 100%);
      border-color: var(--accent-orange);
      box-shadow: 0 0 6px rgba(255, 94, 0, 0.2);
    }

    /* Solved Promo CSS */
    .win-promo {
      margin-top: 0.5rem;
      padding: 0.6rem 1rem;
      background-color: rgba(255, 94, 0, 0.03);
      border: 1px dashed rgba(255, 94, 0, 0.2);
      border-radius: 6px;
      max-width: 320px;
      text-align: center;
    }

    .win-promo-text {
      font-size: 0.75rem;
      color: var(--text-secondary);
      line-height: 1.4;
      margin-bottom: 0.4rem;
    }

    .win-promo-link {
      display: inline-block;
      font-family: var(--font-digital);
      font-size: 0.8rem;
      color: var(--accent-orange);
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 0.05em;
      transition: color 0.2s;
    }

    .win-promo-link:hover {
      color: #ff9e66;
      text-shadow: var(--shadow-glow-orange);
    }

    @media (max-width: 480px) {
      :host {
        gap: 0.75rem;
      }
      .header-panel {
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;
        padding-bottom: 0.25rem;
        border-bottom: none;
      }
      .active-synth-name {
        text-align: center;
        font-size: 1rem;
      }
      .order-btn-wrapper {
        justify-content: center;
      }
      .desktop-only {
        display: none !important;
      }
      .mobile-only {
        display: flex !important;
      }
      
      .bento-dashboard {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
          "synth stats"
          "size mode";
        gap: 0.4rem;
        width: 100%;
        background-color: #0b0c0f;
        padding: 0.5rem;
        border-radius: var(--border-radius);
        border: 1px solid #20222a;
      }

      .bento-dashboard .controls {
        display: contents;
      }
      
      .synth-select { grid-area: synth; height: 100%; }
      .size-select { grid-area: size; height: 100%; }
      .bento-dashboard .stats { 
        grid-area: stats; 
        display: flex; 
        gap: 0.25rem;
        width: 100%;
      }
      .bento-dashboard .mode-selector { 
        grid-area: mode; 
        border: none;
        box-shadow: none;
        padding: 0;
        background: transparent;
        height: 100%;
      }
      
      .stat-display {
        flex: 1;
        min-width: 0;
        padding: 0.15rem 0;
      }
      .stat-label {
        font-size: 0.55rem;
      }
      .stat-value {
        font-size: 1rem;
      }
      
      .mode-btn {
        padding: 0.25rem 0;
        font-size: 0.7rem;
      }
      
      select {
        height: 100%;
        padding: 0.25rem 1.5rem 0.25rem 0.5rem;
        font-size: 0.7rem;
      }

      .game-actions {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.5rem;
      }
      .game-actions button {
        padding-top: 1rem;
        padding-bottom: 0.45rem;
        font-size: 0.75rem;
      }
      .board-wrapper {
        border-width: 4px;
      }
      .synth-footer {
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;
        text-align: center;
      }
      .footer-jack-group {
        justify-content: center;
        flex-wrap: wrap;
      }
    }
  `;b([m()],u.prototype,"gridSize",2);b([m()],u.prototype,"activeImage",2);b([m()],u.prototype,"tiles",2);b([m()],u.prototype,"blankIndex",2);b([m()],u.prototype,"moves",2);b([m()],u.prototype,"secondsElapsed",2);b([m()],u.prototype,"isPlaying",2);b([m()],u.prototype,"hasWon",2);b([m()],u.prototype,"showPreview",2);b([m()],u.prototype,"isSolving",2);b([m()],u.prototype,"gameMode",2);b([Le(".puzzle-grid")],u.prototype,"gridElement",2);u=b([Re("sliding-puzzle")],u);
//# sourceMappingURL=index-B0kvw96T.js.map
