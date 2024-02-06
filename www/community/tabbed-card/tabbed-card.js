/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=window,F=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),Y=new WeakMap;let vt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Y.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Y.set(e,t))}return t}toString(){return this.cssText}};const ft=r=>new vt(typeof r=="string"?r:r+"",void 0,dt),yt=(r,t)=>{F?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},G=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ft(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const I=window,Q=I.trustedTypes,mt=Q?Q.emptyScript:"",X=I.reactiveElementPolyfillSupport,K={toAttribute(r,t){switch(t){case Boolean:r=r?mt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ct=(r,t)=>t!==r&&(t==t||r==r),B={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:ct};let A=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=B){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||B}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(G(i))}else t!==void 0&&e.push(G(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return yt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=B){var i;const n=this.constructor._$Ep(t,s);if(n!==void 0&&s.reflect===!0){const o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:K).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,n=i._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=i.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:K;this._$El=n,this[n]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,n)=>this[n]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};A.finalized=!0,A.elementProperties=new Map,A.elementStyles=[],A.shadowRootOptions={mode:"open"},X==null||X({ReactiveElement:A}),((j=I.reactiveElementVersions)!==null&&j!==void 0?j:I.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const k=window,b=k.trustedTypes,tt=b?b.createPolicy("lit-html",{createHTML:r=>r}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,ut="?"+_,At=`<${ut}>`,w=document,x=(r="")=>w.createComment(r),P=r=>r===null||typeof r!="object"&&typeof r!="function",pt=Array.isArray,gt=r=>pt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,st=/>/g,f=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,rt=/"/g,$t=/^(?:script|style|textarea|title)$/i,Et=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),T=Et(1),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),nt=new WeakMap,g=w.createTreeWalker(w,129,null,!1),bt=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":"",o=S;for(let l=0;l<e;l++){const h=r[l];let p,a,c=-1,$=0;for(;$<h.length&&(o.lastIndex=$,a=o.exec(h),a!==null);)$=o.lastIndex,o===S?a[1]==="!--"?o=et:a[1]!==void 0?o=st:a[2]!==void 0?($t.test(a[2])&&(i=RegExp("</"+a[2],"g")),o=f):a[3]!==void 0&&(o=f):o===f?a[0]===">"?(o=i??S,c=-1):a[1]===void 0?c=-2:(c=o.lastIndex-a[2].length,p=a[1],o=a[3]===void 0?f:a[3]==='"'?rt:it):o===rt||o===it?o=f:o===et||o===st?o=S:(o=f,i=void 0);const N=o===f&&r[l+1].startsWith("/>")?" ":"";n+=o===S?h+At:c>=0?(s.push(p),h.slice(0,c)+"$lit$"+h.slice(c)+_+N):h+_+(c===-2?(s.push(void 0),l):N)}const d=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[tt!==void 0?tt.createHTML(d):d,s]};class O{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const d=t.length-1,l=this.parts,[h,p]=bt(t,e);if(this.el=O.createElement(h,s),g.currentNode=this.el.content,e===2){const a=this.el.content,c=a.firstChild;c.remove(),a.append(...c.childNodes)}for(;(i=g.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const a=[];for(const c of i.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(_)){const $=p[o++];if(a.push(c),$!==void 0){const N=i.getAttribute($.toLowerCase()+"$lit$").split(_),M=/([.?@])?(.*)/.exec($);l.push({type:1,index:n,name:M[2],strings:N,ctor:M[1]==="."?Ct:M[1]==="?"?Tt:M[1]==="@"?xt:z})}else l.push({type:6,index:n})}for(const c of a)i.removeAttribute(c)}if($t.test(i.tagName)){const a=i.textContent.split(_),c=a.length-1;if(c>0){i.textContent=b?b.emptyScript:"";for(let $=0;$<c;$++)i.append(a[$],x()),g.nextNode(),l.push({type:2,index:++n});i.append(a[c],x())}}}else if(i.nodeType===8)if(i.data===ut)l.push({type:2,index:n});else{let a=-1;for(;(a=i.data.indexOf(_,a+1))!==-1;)l.push({type:7,index:n}),a+=_.length-1}n++}}static createElement(t,e){const s=w.createElement("template");return s.innerHTML=t,s}}function C(r,t,e=r,s){var i,n,o,d;if(t===y)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const h=P(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,s)),s!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=C(r,l._$AS(r,t.values),l,s)),t}class wt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:w).importNode(s,!0);g.currentNode=n;let o=g.nextNode(),d=0,l=0,h=i[0];for(;h!==void 0;){if(d===h.index){let p;h.type===2?p=new U(o,o.nextSibling,this,t):h.type===1?p=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(p=new Pt(o,this,t)),this.u.push(p),h=i[++l]}d!==(h==null?void 0:h.index)&&(o=g.nextNode(),d++)}return n}p(t){let e=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{constructor(t,e,s,i){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),P(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==y&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gt(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(w.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(s);else{const o=new wt(n,this),d=o.v(this.options);o.p(s),this.T(d),this._$AH=o}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new O(t)),e}k(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new U(this.O(x()),this.O(x()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class z{constructor(t,e,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=C(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==y,o&&(this._$AH=t);else{const d=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=C(this,d[s+l],e,l),h===y&&(h=this._$AH[l]),o||(o=!P(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ct extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const St=b?b.emptyScript:"";class Tt extends z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,St):this.element.removeAttribute(this.name)}}class xt extends z{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=(s=C(this,t,e,0))!==null&&s!==void 0?s:u)===y)return;const i=this._$AH,n=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const ot=k.litHtmlPolyfillSupport;ot==null||ot(O,U),((W=k.litHtmlVersions)!==null&&W!==void 0?W:k.litHtmlVersions=[]).push("2.6.1");const Ot=(r,t,e)=>{var s,i;const n=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let o=n._$litPart$;if(o===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new U(t.insertBefore(x(),d),d,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,Z;class E extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return y}}E.finalized=!0,E._$litElement$=!0,(V=globalThis.litElementHydrateSupport)===null||V===void 0||V.call(globalThis,{LitElement:E});const lt=globalThis.litElementPolyfillSupport;lt==null||lt({LitElement:E});((Z=globalThis.litElementVersions)!==null&&Z!==void 0?Z:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=r=>t=>typeof t=="function"?((e,s)=>(customElements.define(e,s),s))(r,t):((e,s)=>{const{kind:i,elements:n}=s;return{kind:i,elements:n,finisher(o){customElements.define(e,o)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function H(r){return(t,e)=>e!==void 0?((s,i,n)=>{i.constructor.createProperty(n,s)})(r,t,e):Ut(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(r){return H({...r,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;((q=window.HTMLSlotElement)===null||q===void 0?void 0:q.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Nt=r=>(...t)=>({_$litDirective$:r,values:t});let Mt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=Nt(class extends Mt{constructor(r){var t;if(super(r),r.type!==Ht.ATTRIBUTE||r.name!=="style"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{const s=r[e];return s==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(r,[t]){const{style:e}=r.element;if(this.vt===void 0){this.vt=new Set;for(const s in t)this.vt.add(s);return this.render(t)}this.vt.forEach(s=>{t[s]==null&&(this.vt.delete(s),s.includes("-")?e.removeProperty(s):e[s]="")});for(const s in t){const i=t[s];i!=null&&(this.vt.add(s),s.includes("-")?e.setProperty(s,i):e[s]=i)}return y}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=r=>r??u;var Rt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,J=(r,t,e,s)=>{for(var i=s>1?void 0:s?It(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Rt(t,e,i),i};let L=class extends E{setConfig(r){this._config=r,this.loadCardHelpers()}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}};J([D()],L.prototype,"_config",2);J([D()],L.prototype,"_helpers",2);L=J([_t("tabbed-card-editor")],L);var kt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,m=(r,t,e,s)=>{for(var i=s>1?void 0:s?Lt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&kt(t,e,i),i};let v=class extends E{constructor(){super(...arguments),this.selectedTabIndex=0,this._styles={"--mdc-theme-primary":"var(--primary-text-color)","--mdc-tab-text-label-color-default":"rgba(var(--rgb-primary-text-color), 0.8)","--mdc-tab-color-default":"rgba(var(--rgb-primary-text-color), 0.7)","--mdc-typography-button-font-size":"14px"}}async loadCardHelpers(){this._helpers=await window.loadCardHelpers(),customElements.get("mwc-tab-bar")||this._helpers.importMoreInfoControl("weather")}static async getConfigElement(){return document.createElement("tabbed-card-editor")}static getStubConfig(){return{options:{},tabs:[{card:{type:"entity",entity:"sun.sun"},attributes:{label:"Sun"}}]}}setConfig(r){if(!r)throw new Error("No configuration.");this._config=r,this._styles={...this._styles,...this._config.styles},this.loadCardHelpers()}willUpdate(r){var t;r.has("_helpers")&&this._createTabs(this._config),r.has("hass")&&((t=this._tabs)!=null&&t.length)&&this._tabs.forEach(e=>e.card.hass=this.hass)}async _createTabs(r){const t=await Promise.all(r.tabs.map(async e=>({styles:e==null?void 0:e.styles,attributes:{...r==null?void 0:r.attributes,...e==null?void 0:e.attributes},card:await this._createCard(e.card)})));this._tabs=t}async _createCard(r){const t=await this._helpers.createCardElement(r);return t.hass=this.hass,t.addEventListener("ll-rebuild",e=>{e.stopPropagation(),this._rebuildCard(t,r)},{once:!0}),t}async _rebuildCard(r,t){console.log("_rebuildCard: ",r,t);const e=await this._helpers.createCardElement(t);r.replaceWith(e)}render(){var r,t,e,s;return!this.hass||!this._config||!this._helpers||!((r=this._tabs)!=null&&r.length)?T``:T`
      <mwc-tab-bar
        @MDCTabBar:activated=${i=>this.selectedTabIndex=i.detail.index}
        style=${ht(this._styles)}
        activeIndex=${at((e=(t=this._config)==null?void 0:t.options)==null?void 0:e.defaultTabIndex)}
      >
        <!-- no horizontal scrollbar shown when tabs overflow in chrome -->
        ${this._tabs.map(i=>{var n,o,d,l,h,p,a,c;return T`
              <mwc-tab
                style=${at(ht((i==null?void 0:i.styles)||{}))}
                label="${((n=i==null?void 0:i.attributes)==null?void 0:n.label)||u}"
                ?hasImageIcon=${(o=i==null?void 0:i.attributes)==null?void 0:o.icon}
                ?isFadingIndicator=${(d=i==null?void 0:i.attributes)==null?void 0:d.isFadingIndicator}
                ?minWidth=${(l=i==null?void 0:i.attributes)==null?void 0:l.minWidth}
                ?isMinWidthIndicator=${(h=i==null?void 0:i.attributes)==null?void 0:h.isMinWidthIndicator}
                ?stacked=${(p=i==null?void 0:i.attributes)==null?void 0:p.stacked}
              >
                ${(a=i==null?void 0:i.attributes)!=null&&a.icon?T`<ha-icon
                      slot="icon"
                      icon="${(c=i==null?void 0:i.attributes)==null?void 0:c.icon}"
                    ></ha-icon>`:T``}
              </mwc-tab>
            `})}
      </mwc-tab-bar>
      <section>
        <article>
          ${(s=this._tabs.find((i,n)=>n==this.selectedTabIndex))==null?void 0:s.card}
        </article>
      </section>
    `}};m([H({attribute:!1})],v.prototype,"hass",2);m([H()],v.prototype,"selectedTabIndex",2);m([H()],v.prototype,"_helpers",2);m([D()],v.prototype,"_config",2);m([D()],v.prototype,"_tabs",2);m([H()],v.prototype,"_styles",2);v=m([_t("tabbed-card")],v);window.customCards=window.customCards||[];window.customCards.push({type:"tabbed-card",name:"Tabbed Card",description:"A tabbed card of cards."});