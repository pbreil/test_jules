var nb=Object.defineProperty,ib=Object.defineProperties;var ob=Object.getOwnPropertyDescriptors;var Op=Object.getOwnPropertySymbols;var rb=Object.prototype.hasOwnProperty,sb=Object.prototype.propertyIsEnumerable;var Rp=(t,i,e)=>i in t?nb(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,H=(t,i)=>{for(var e in i||={})rb.call(i,e)&&Rp(t,e,i[e]);if(Op)for(var e of Op(i))sb.call(i,e)&&Rp(t,e,i[e]);return t},ge=(t,i)=>ib(t,ob(i));var Ml;function cs(){return Ml}function mn(t){let i=Ml;return Ml=t,i}var Fp=Symbol("NotFound");function $i(t){return t===Fp||t?.name==="\u0275NotFound"}function hs(t,i){return Object.is(t,i)}var pt=null,ds=!1,kl=1,ab=null,ft=Symbol("SIGNAL");function oe(t){let i=pt;return pt=t,i}function ms(){return pt}var ci={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Ui(t){if(ds)throw new Error("");if(pt===null)return;pt.consumerOnSignalRead(t);let i=pt.producersTail;if(i!==void 0&&i.producer===t)return;let e,n=pt.recomputing;if(n&&(e=i!==void 0?i.nextProducer:pt.producers,e!==void 0&&e.producer===t)){pt.producersTail=e,e.lastReadVersion=t.version;return}let o=t.consumersTail;if(o!==void 0&&o.consumer===pt&&(!n||cb(o,pt)))return;let r=qi(pt),s={producer:t,consumer:pt,nextProducer:e,prevConsumer:o,lastReadVersion:t.version,nextConsumer:void 0};pt.producersTail=s,i!==void 0?i.nextProducer=s:pt.producers=s,r&&Np(t,s)}function Ap(){kl++}function gs(t){if(!(qi(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===kl)){if(!t.producerMustRecompute(t)&&!Wi(t)){fs(t);return}t.producerRecomputeValue(t),fs(t)}}function Ol(t){if(t.consumers===void 0)return;let i=ds;ds=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let n=e.consumer;n.dirty||lb(n)}}finally{ds=i}}function Rl(){return pt?.consumerAllowSignalWrites!==!1}function lb(t){t.dirty=!0,Ol(t),t.consumerMarkedDirty?.(t)}function fs(t){t.dirty=!1,t.lastCleanEpoch=kl}function di(t){return t&&(t.producersTail=void 0,t.recomputing=!0),oe(t)}function Gi(t,i){if(oe(i),!t)return;t.recomputing=!1;let e=t.producersTail,n=e!==void 0?e.nextProducer:t.producers;if(n!==void 0){if(qi(t))do n=Fl(n);while(n!==void 0);e!==void 0?e.nextProducer=void 0:t.producers=void 0}}function Wi(t){for(let i=t.producers;i!==void 0;i=i.nextProducer){let e=i.producer,n=i.lastReadVersion;if(n!==e.version||(gs(e),n!==e.version))return!0}return!1}function ui(t){if(qi(t)){let i=t.producers;for(;i!==void 0;)i=Fl(i)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function Np(t,i){let e=t.consumersTail,n=qi(t);if(e!==void 0?(i.nextConsumer=e.nextConsumer,e.nextConsumer=i):(i.nextConsumer=void 0,t.consumers=i),i.prevConsumer=e,t.consumersTail=i,!n)for(let o=t.producers;o!==void 0;o=o.nextProducer)Np(o.producer,o)}function Fl(t){let i=t.producer,e=t.nextProducer,n=t.nextConsumer,o=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,n!==void 0?n.prevConsumer=o:i.consumersTail=o,o!==void 0)o.nextConsumer=n;else if(i.consumers=n,!qi(i)){let r=i.producers;for(;r!==void 0;)r=Fl(r)}return e}function qi(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function _s(t){ab?.(t)}function cb(t,i){let e=i.producersTail;if(e!==void 0){let n=i.producers;do{if(n===t)return!0;if(n===e)break;n=n.nextProducer}while(n!==void 0)}return!1}function ys(t,i){let e=Object.create(db);e.computation=t,i!==void 0&&(e.equal=i);let n=()=>{if(gs(e),Ui(e),e.value===Go)throw e.error;return e.value};return n[ft]=e,_s(e),n}var us=Symbol("UNSET"),ps=Symbol("COMPUTING"),Go=Symbol("ERRORED"),db=ge(H({},ci),{value:us,dirty:!0,error:null,equal:hs,kind:"computed",producerMustRecompute(t){return t.value===us||t.value===ps},producerRecomputeValue(t){if(t.value===ps)throw new Error("");let i=t.value;t.value=ps;let e=di(t),n,o=!1;try{n=t.computation(),oe(null),o=i!==us&&i!==Go&&n!==Go&&t.equal(i,n)}catch(r){n=Go,t.error=r}finally{Gi(t,e)}if(o){t.value=i;return}t.value=n,t.version++}});function ub(){throw new Error}var Lp=ub;function Pp(t){Lp(t)}function Al(t){Lp=t}var pb=null;function Nl(t,i){let e=Object.create(bs);e.value=t,i!==void 0&&(e.equal=i);let n=()=>Vp(e);return n[ft]=e,_s(e),[n,s=>Ki(e,s),s=>Ll(e,s)]}function Vp(t){return Ui(t),t.value}function Ki(t,i){Rl()||Pp(t),t.equal(t.value,i)||(t.value=i,fb(t))}function Ll(t,i){Rl()||Pp(t),Ki(t,i(t.value))}var bs=ge(H({},ci),{equal:hs,value:void 0,kind:"signal"});function fb(t){t.version++,Ap(),Ol(t),pb?.(t)}function Te(t){return typeof t=="function"}function vs(t){let e=t(n=>{Error.call(n),n.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Cs=vs(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((n,o)=>`${o+1}) ${n.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Wo(t,i){if(t){let e=t.indexOf(i);0<=e&&t.splice(e,1)}}var wt=class t{constructor(i){this.initialTeardown=i,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let i;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let r of e)r.remove(this);else e.remove(this);let{initialTeardown:n}=this;if(Te(n))try{n()}catch(r){i=r instanceof Cs?r.errors:[r]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let r of o)try{Bp(r)}catch(s){i=i??[],s instanceof Cs?i=[...i,...s.errors]:i.push(s)}}if(i)throw new Cs(i)}}add(i){var e;if(i&&i!==this)if(this.closed)Bp(i);else{if(i instanceof t){if(i.closed||i._hasParent(this))return;i._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(i)}}_hasParent(i){let{_parentage:e}=this;return e===i||Array.isArray(e)&&e.includes(i)}_addParent(i){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(i),e):e?[e,i]:i}_removeParent(i){let{_parentage:e}=this;e===i?this._parentage=null:Array.isArray(e)&&Wo(e,i)}remove(i){let{_finalizers:e}=this;e&&Wo(e,i),i instanceof t&&i._removeParent(this)}};wt.EMPTY=(()=>{let t=new wt;return t.closed=!0,t})();var Pl=wt.EMPTY;function ws(t){return t instanceof wt||t&&"closed"in t&&Te(t.remove)&&Te(t.add)&&Te(t.unsubscribe)}function Bp(t){Te(t)?t():t.unsubscribe()}var qt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Qi={setTimeout(t,i,...e){let{delegate:n}=Qi;return n?.setTimeout?n.setTimeout(t,i,...e):setTimeout(t,i,...e)},clearTimeout(t){let{delegate:i}=Qi;return(i?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Ds(t){Qi.setTimeout(()=>{let{onUnhandledError:i}=qt;if(i)i(t);else throw t})}function Vl(){}var Hp=Bl("C",void 0,void 0);function jp(t){return Bl("E",void 0,t)}function zp(t){return Bl("N",t,void 0)}function Bl(t,i,e){return{kind:t,value:i,error:e}}var pi=null;function Yi(t){if(qt.useDeprecatedSynchronousErrorHandling){let i=!pi;if(i&&(pi={errorThrown:!1,error:null}),t(),i){let{errorThrown:e,error:n}=pi;if(pi=null,e)throw n}}else t()}function $p(t){qt.useDeprecatedSynchronousErrorHandling&&pi&&(pi.errorThrown=!0,pi.error=t)}var fi=class extends wt{constructor(i){super(),this.isStopped=!1,i?(this.destination=i,ws(i)&&i.add(this)):this.destination=gb}static create(i,e,n){return new Zi(i,e,n)}next(i){this.isStopped?jl(zp(i),this):this._next(i)}error(i){this.isStopped?jl(jp(i),this):(this.isStopped=!0,this._error(i))}complete(){this.isStopped?jl(Hp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(i){this.destination.next(i)}_error(i){try{this.destination.error(i)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},hb=Function.prototype.bind;function Hl(t,i){return hb.call(t,i)}var zl=class{constructor(i){this.partialObserver=i}next(i){let{partialObserver:e}=this;if(e.next)try{e.next(i)}catch(n){Is(n)}}error(i){let{partialObserver:e}=this;if(e.error)try{e.error(i)}catch(n){Is(n)}else Is(i)}complete(){let{partialObserver:i}=this;if(i.complete)try{i.complete()}catch(e){Is(e)}}},Zi=class extends fi{constructor(i,e,n){super();let o;if(Te(i)||!i)o={next:i??void 0,error:e??void 0,complete:n??void 0};else{let r;this&&qt.useDeprecatedNextContext?(r=Object.create(i),r.unsubscribe=()=>this.unsubscribe(),o={next:i.next&&Hl(i.next,r),error:i.error&&Hl(i.error,r),complete:i.complete&&Hl(i.complete,r)}):o=i}this.destination=new zl(o)}};function Is(t){qt.useDeprecatedSynchronousErrorHandling?$p(t):Ds(t)}function mb(t){throw t}function jl(t,i){let{onStoppedNotification:e}=qt;e&&Qi.setTimeout(()=>e(t,i))}var gb={closed:!0,next:Vl,error:mb,complete:Vl};var Ji=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Up(t){return t}function Gp(t){return t.length===0?Up:t.length===1?t[0]:function(e){return t.reduce((n,o)=>o(n),e)}}var Ue=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let n=new t;return n.source=this,n.operator=e,n}subscribe(e,n,o){let r=yb(e)?e:new Zi(e,n,o);return Yi(()=>{let{operator:s,source:a}=this;r.add(s?s.call(r,a):a?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(e){try{return this._subscribe(e)}catch(n){e.error(n)}}forEach(e,n){return n=Wp(n),new n((o,r)=>{let s=new Zi({next:a=>{try{e(a)}catch(l){r(l),s.unsubscribe()}},error:r,complete:o});this.subscribe(s)})}_subscribe(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)}[Ji](){return this}pipe(...e){return Gp(e)(this)}toPromise(e){return e=Wp(e),new e((n,o)=>{let r;this.subscribe(s=>r=s,s=>o(s),()=>n(r))})}}return t.create=i=>new t(i),t})();function Wp(t){var i;return(i=t??qt.Promise)!==null&&i!==void 0?i:Promise}function _b(t){return t&&Te(t.next)&&Te(t.error)&&Te(t.complete)}function yb(t){return t&&t instanceof fi||_b(t)&&ws(t)}function bb(t){return Te(t?.lift)}function Xi(t){return i=>{if(bb(i))return i.lift(function(e){try{return t(e,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function eo(t,i,e,n,o){return new $l(t,i,e,n,o)}var $l=class extends fi{constructor(i,e,n,o,r,s){super(i),this.onFinalize=r,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){i.error(l)}}:super._next,this._error=o?function(a){try{o(a)}catch(l){i.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=n?function(){try{n()}catch(a){i.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((i=this.onFinalize)===null||i===void 0||i.call(this))}}};var qp=vs(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Ke=(()=>{class t extends Ue{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let n=new xs(this,this);return n.operator=e,n}_throwIfClosed(){if(this.closed)throw new qp}next(e){Yi(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(e)}})}error(e){Yi(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:n}=this;for(;n.length;)n.shift().error(e)}})}complete(){Yi(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:n,isStopped:o,observers:r}=this;return n||o?Pl:(this.currentObservers=null,r.push(e),new wt(()=>{this.currentObservers=null,Wo(r,e)}))}_checkFinalizedStatuses(e){let{hasError:n,thrownError:o,isStopped:r}=this;n?e.error(o):r&&e.complete()}asObservable(){let e=new Ue;return e.source=this,e}}return t.create=(i,e)=>new xs(i,e),t})(),xs=class extends Ke{constructor(i,e){super(),this.destination=i,this.source=e}next(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.next)===null||n===void 0||n.call(e,i)}error(i){var e,n;(n=(e=this.destination)===null||e===void 0?void 0:e.error)===null||n===void 0||n.call(e,i)}complete(){var i,e;(e=(i=this.destination)===null||i===void 0?void 0:i.complete)===null||e===void 0||e.call(i)}_subscribe(i){var e,n;return(n=(e=this.source)===null||e===void 0?void 0:e.subscribe(i))!==null&&n!==void 0?n:Pl}};var qo=class extends Ke{constructor(i){super(),this._value=i}get value(){return this.getValue()}_subscribe(i){let e=super._subscribe(i);return!e.closed&&i.next(this._value),e}getValue(){let{hasError:i,thrownError:e,_value:n}=this;if(i)throw e;return this._throwIfClosed(),n}next(i){super.next(this._value=i)}};function vb(t){return t[t.length-1]}function Kp(t){return Te(vb(t))?t.pop():void 0}function Yp(t,i,e,n){function o(r){return r instanceof e?r:new e(function(s){s(r)})}return new(e||(e=Promise))(function(r,s){function a(d){try{c(n.next(d))}catch(h){s(h)}}function l(d){try{c(n.throw(d))}catch(h){s(h)}}function c(d){d.done?r(d.value):o(d.value).then(a,l)}c((n=n.apply(t,i||[])).next())})}function Qp(t){var i=typeof Symbol=="function"&&Symbol.iterator,e=i&&t[i],n=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}function hi(t){return this instanceof hi?(this.v=t,this):new hi(t)}function Zp(t,i,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e.apply(t,i||[]),o,r=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(m){return function(y){return Promise.resolve(y).then(m,h)}}function a(m,y){n[m]&&(o[m]=function(I){return new Promise(function(O,P){r.push([m,I,O,P])>1||l(m,I)})},y&&(o[m]=y(o[m])))}function l(m,y){try{c(n[m](y))}catch(I){g(r[0][3],I)}}function c(m){m.value instanceof hi?Promise.resolve(m.value.v).then(d,h):g(r[0][2],m)}function d(m){l("next",m)}function h(m){l("throw",m)}function g(m,y){m(y),r.shift(),r.length&&l(r[0][0],r[0][1])}}function Jp(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t[Symbol.asyncIterator],e;return i?i.call(t):(t=typeof Qp=="function"?Qp(t):t[Symbol.iterator](),e={},n("next"),n("throw"),n("return"),e[Symbol.asyncIterator]=function(){return this},e);function n(r){e[r]=t[r]&&function(s){return new Promise(function(a,l){s=t[r](s),o(a,l,s.done,s.value)})}}function o(r,s,a,l){Promise.resolve(l).then(function(c){r({value:c,done:a})},s)}}var Es=t=>t&&typeof t.length=="number"&&typeof t!="function";function Ts(t){return Te(t?.then)}function Ss(t){return Te(t[Ji])}function Ms(t){return Symbol.asyncIterator&&Te(t?.[Symbol.asyncIterator])}function ks(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Cb(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Os=Cb();function Rs(t){return Te(t?.[Os])}function Fs(t){return Zp(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:n,done:o}=yield hi(e.read());if(o)return yield hi(void 0);yield yield hi(n)}}finally{e.releaseLock()}})}function As(t){return Te(t?.getReader)}function Zn(t){if(t instanceof Ue)return t;if(t!=null){if(Ss(t))return wb(t);if(Es(t))return Db(t);if(Ts(t))return Ib(t);if(Ms(t))return Xp(t);if(Rs(t))return xb(t);if(As(t))return Eb(t)}throw ks(t)}function wb(t){return new Ue(i=>{let e=t[Ji]();if(Te(e.subscribe))return e.subscribe(i);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Db(t){return new Ue(i=>{for(let e=0;e<t.length&&!i.closed;e++)i.next(t[e]);i.complete()})}function Ib(t){return new Ue(i=>{t.then(e=>{i.closed||(i.next(e),i.complete())},e=>i.error(e)).then(null,Ds)})}function xb(t){return new Ue(i=>{for(let e of t)if(i.next(e),i.closed)return;i.complete()})}function Xp(t){return new Ue(i=>{Tb(t,i).catch(e=>i.error(e))})}function Eb(t){return Xp(Fs(t))}function Tb(t,i){var e,n,o,r;return Yp(this,void 0,void 0,function*(){try{for(e=Jp(t);n=yield e.next(),!n.done;){let s=n.value;if(i.next(s),i.closed)return}}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=e.return)&&(yield r.call(e))}finally{if(o)throw o.error}}i.complete()})}function gn(t,i,e,n=0,o=!1){let r=i.schedule(function(){e(),o?t.add(this.schedule(null,n)):this.unsubscribe()},n);if(t.add(r),!o)return r}function Ns(t,i=0){return Xi((e,n)=>{e.subscribe(eo(n,o=>gn(n,t,()=>n.next(o),i),()=>gn(n,t,()=>n.complete(),i),o=>gn(n,t,()=>n.error(o),i)))})}function Ls(t,i=0){return Xi((e,n)=>{n.add(t.schedule(()=>e.subscribe(n),i))})}function ef(t,i){return Zn(t).pipe(Ls(i),Ns(i))}function tf(t,i){return Zn(t).pipe(Ls(i),Ns(i))}function nf(t,i){return new Ue(e=>{let n=0;return i.schedule(function(){n===t.length?e.complete():(e.next(t[n++]),e.closed||this.schedule())})})}function of(t,i){return new Ue(e=>{let n;return gn(e,i,()=>{n=t[Os](),gn(e,i,()=>{let o,r;try{({value:o,done:r}=n.next())}catch(s){e.error(s);return}r?e.complete():e.next(o)},0,!0)}),()=>Te(n?.return)&&n.return()})}function Ps(t,i){if(!t)throw new Error("Iterable cannot be null");return new Ue(e=>{gn(e,i,()=>{let n=t[Symbol.asyncIterator]();gn(e,i,()=>{n.next().then(o=>{o.done?e.complete():e.next(o.value)})},0,!0)})})}function rf(t,i){return Ps(Fs(t),i)}function sf(t,i){if(t!=null){if(Ss(t))return ef(t,i);if(Es(t))return nf(t,i);if(Ts(t))return tf(t,i);if(Ms(t))return Ps(t,i);if(Rs(t))return of(t,i);if(As(t))return rf(t,i)}throw ks(t)}function Ul(t,i){return i?sf(t,i):Zn(t)}function mi(t,i){return Xi((e,n)=>{let o=0;e.subscribe(eo(n,r=>{n.next(t.call(i,r,o++))}))})}var{isArray:Sb}=Array;function Mb(t,i){return Sb(i)?t(...i):t(i)}function af(t){return mi(i=>Mb(t,i))}var{isArray:kb}=Array,{getPrototypeOf:Ob,prototype:Rb,keys:Fb}=Object;function lf(t){if(t.length===1){let i=t[0];if(kb(i))return{args:i,keys:null};if(Ab(i)){let e=Fb(i);return{args:e.map(n=>i[n]),keys:e}}}return{args:t,keys:null}}function Ab(t){return t&&typeof t=="object"&&Ob(t)===Rb}function cf(t,i){return t.reduce((e,n,o)=>(e[n]=i[o],e),{})}function Gl(...t){let i=Kp(t),{args:e,keys:n}=lf(t),o=new Ue(r=>{let{length:s}=e;if(!s){r.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let h=!1;Zn(e[d]).subscribe(eo(r,g=>{h||(h=!0,c--),a[d]=g},()=>l--,void 0,()=>{(!l||!h)&&(c||r.next(n?cf(n,a):a),r.complete())}))}});return i?o.pipe(af(i)):o}function df(t){let i=oe(null);try{return t()}finally{oe(i)}}var uf=ge(H({},ci),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,hasRun:!1,kind:"effect"});function pf(t){if(t.dirty=!1,t.hasRun&&!Wi(t))return;t.hasRun=!0;let i=di(t);try{t.cleanup(),t.fn()}finally{Gi(t,i)}}var nc="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",ce=class extends Error{code;constructor(i,e){super(no(i,e)),this.code=i}};function Nb(t){return`NG0${Math.abs(t)}`}function no(t,i){return`${Nb(t)}${i?": "+i:""}`}function Re(t){for(let i in t)if(t[i]===Re)return i;throw Error("")}function mf(t,i){for(let e in i)i.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=i[e])}function Jn(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Jn).join(", ")}]`;if(t==null)return""+t;let i=t.overriddenName||t.name;if(i)return`${i}`;let e=t.toString();if(e==null)return""+e;let n=e.indexOf(`
`);return n>=0?e.slice(0,n):e}function zs(t,i){return t?i?`${t} ${i}`:t:i||""}var Lb=Re({__forward_ref__:Re});function je(t){return t.__forward_ref__=je,t.toString=function(){return Jn(this())},t}function Ze(t){return ic(t)?t():t}function ic(t){return typeof t=="function"&&t.hasOwnProperty(Lb)&&t.__forward_ref__===je}function gf(t,i){t==null&&oc(i,t,null,"!=")}function oc(t,i,e,n){throw new Error(`ASSERTION ERROR: ${t}`+(n==null?"":` [Expected=> ${e} ${n} ${i} <=Actual]`))}function V(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function ue(t){return{providers:t.providers||[],imports:t.imports||[]}}function $s(t){return Pb(t,Us)}function Pb(t,i){return t.hasOwnProperty(i)&&t[i]||null}function Vb(t){let i=t?.[Us]??null;return i||null}function ql(t){return t&&t.hasOwnProperty(Bs)?t[Bs]:null}var Us=Re({\u0275prov:Re}),Bs=Re({\u0275inj:Re}),de=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(i,e){this._desc=i,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=V({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function rc(t){return t&&!!t.\u0275providers}var sc=Re({\u0275cmp:Re}),ac=Re({\u0275dir:Re}),lc=Re({\u0275pipe:Re});var Yo=Re({\u0275fac:Re}),Ci=Re({__NG_ELEMENT_ID__:Re}),ff=Re({__NG_ENV_ID__:Re});function io(t){return typeof t=="string"?t:t==null?"":String(t)}function Hs(t){return typeof t=="function"?t.name||t.toString():typeof t=="object"&&t!=null&&typeof t.type=="function"?t.type.name||t.type.toString():io(t)}var cc=Re({ngErrorCode:Re}),_f=Re({ngErrorMessage:Re}),Qo=Re({ngTokenPath:Re});function dc(t,i){return yf("",-200,i)}function Gs(t,i){throw new ce(-201,!1)}function Bb(t,i){t[Qo]??=[];let e=t[Qo],n;typeof i=="object"&&"multi"in i&&i?.multi===!0?(gf(i.provide,"Token with multi: true should have a provide property"),n=Hs(i.provide)):n=Hs(i),e[0]!==n&&t[Qo].unshift(n)}function Hb(t,i){let e=t[Qo],n=t[cc],o=t[_f]||t.message;return t.message=zb(o,n,e,i),t}function yf(t,i,e){let n=new ce(i,t);return n[cc]=i,n[_f]=t,e&&(n[Qo]=e),n}function jb(t){return t[cc]}function zb(t,i,e=[],n=null){let o="";e&&e.length>1&&(o=` Path: ${e.join(" -> ")}.`);let r=n?` Source: ${n}.`:"";return no(i,`${t}${r}${o}`)}var Kl;function bf(){return Kl}function Rt(t){let i=Kl;return Kl=t,i}function uc(t,i,e){let n=$s(t);if(n&&n.providedIn=="root")return n.value===void 0?n.value=n.factory():n.value;if(e&8)return null;if(i!==void 0)return i;Gs(t,"Injector")}var $b={},gi=$b,Ub="__NG_DI_FLAG__",Ql=class{injector;constructor(i){this.injector=i}retrieve(i,e){let n=_i(e)||0;try{return this.injector.get(i,n&8?null:gi,n)}catch(o){if($i(o))return o;throw o}}};function Gb(t,i=0){let e=cs();if(e===void 0)throw new ce(-203,!1);if(e===null)return uc(t,void 0,i);{let n=Wb(i),o=e.retrieve(t,n);if($i(o)){if(n.optional)return null;throw o}return o}}function Ie(t,i=0){return(bf()||Gb)(Ze(t),i)}function M(t,i){return Ie(t,_i(i))}function _i(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function Wb(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function Yl(t){let i=[];for(let e=0;e<t.length;e++){let n=Ze(t[e]);if(Array.isArray(n)){if(n.length===0)throw new ce(900,!1);let o,r=0;for(let s=0;s<n.length;s++){let a=n[s],l=qb(a);typeof l=="number"?l===-1?o=a.token:r|=l:o=a}i.push(Ie(o,r))}else i.push(Ie(n))}return i}function qb(t){return t[Ub]}function yi(t,i){let e=t.hasOwnProperty(Yo);return e?t[Yo]:null}function vf(t,i,e){if(t.length!==i.length)return!1;for(let n=0;n<t.length;n++){let o=t[n],r=i[n];if(e&&(o=e(o),r=e(r)),r!==o)return!1}return!0}function Cf(t){return t.flat(Number.POSITIVE_INFINITY)}function Ws(t,i){t.forEach(e=>Array.isArray(e)?Ws(e,i):i(e))}function pc(t,i,e){i>=t.length?t.push(e):t.splice(i,0,e)}function Xo(t,i){return i>=t.length-1?t.pop():t.splice(i,1)[0]}function wf(t,i){let e=[];for(let n=0;n<t;n++)e.push(i);return e}function Df(t,i,e,n){let o=t.length;if(o==i)t.push(e,n);else if(o===1)t.push(n,t[0]),t[0]=e;else{for(o--,t.push(t[o-1],t[o]);o>i;){let r=o-2;t[o]=t[r],o--}t[i]=e,t[i+1]=n}}function er(t,i,e){let n=oo(t,i);return n>=0?t[n|1]=e:(n=~n,Df(t,n,i,e)),n}function qs(t,i){let e=oo(t,i);if(e>=0)return t[e|1]}function oo(t,i){return Kb(t,i,1)}function Kb(t,i,e){let n=0,o=t.length>>e;for(;o!==n;){let r=n+(o-n>>1),s=t[r<<e];if(i===s)return r<<e;s>i?o=r:n=r+1}return~(o<<e)}var Qt={},Dt=[],ei=new de(""),fc=new de("",-1),hc=new de(""),Zo=class{get(i,e=gi){if(e===gi){let o=yf("",-201);throw o.name="\u0275NotFound",o}return e}};function wi(t){return t[sc]||null}function Ks(t){return t[ac]||null}function If(t){return t[lc]||null}function ro(t){return{\u0275providers:t}}function xf(t){return ro([{provide:ei,multi:!0,useValue:t}])}function Ef(...t){return{\u0275providers:mc(!0,t),\u0275fromNgModule:!0}}function mc(t,...i){let e=[],n=new Set,o,r=s=>{e.push(s)};return Ws(i,s=>{let a=s;js(a,r,[],n)&&(o||=[],o.push(a))}),o!==void 0&&Tf(o,r),e}function Tf(t,i){for(let e=0;e<t.length;e++){let{ngModule:n,providers:o}=t[e];gc(o,r=>{i(r,n)})}}function js(t,i,e,n){if(t=Ze(t),!t)return!1;let o=null,r=ql(t),s=!r&&wi(t);if(!r&&!s){let l=t.ngModule;if(r=ql(l),r)o=l;else return!1}else{if(s&&!s.standalone)return!1;o=t}let a=n.has(o);if(s){if(a)return!1;if(n.add(o),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)js(c,i,e,n)}}else if(r){if(r.imports!=null&&!a){n.add(o);let c;try{Ws(r.imports,d=>{js(d,i,e,n)&&(c||=[],c.push(d))})}finally{}c!==void 0&&Tf(c,i)}if(!a){let c=yi(o)||(()=>new o);i({provide:o,useFactory:c,deps:Dt},o),i({provide:hc,useValue:o,multi:!0},o),i({provide:ei,useValue:()=>Ie(o),multi:!0},o)}let l=r.providers;if(l!=null&&!a){let c=t;gc(l,d=>{i(d,c)})}}else return!1;return o!==t&&t.providers!==void 0}function gc(t,i){for(let e of t)rc(e)&&(e=e.\u0275providers),Array.isArray(e)?gc(e,i):i(e)}var Qb=Re({provide:String,useValue:Re});function Sf(t){return t!==null&&typeof t=="object"&&Qb in t}function Yb(t){return!!(t&&t.useExisting)}function Zb(t){return!!(t&&t.useFactory)}function bi(t){return typeof t=="function"}function Mf(t){return!!t.useClass}var tr=new de(""),Vs={},hf={},Wl;function nr(){return Wl===void 0&&(Wl=new Zo),Wl}var Pt=class{},vi=class extends Pt{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(i,e,n,o){super(),this.parent=e,this.source=n,this.scopes=o,Jl(i,s=>this.processProvider(s)),this.records.set(fc,to(void 0,this)),o.has("environment")&&this.records.set(Pt,to(void 0,this));let r=this.records.get(tr);r!=null&&typeof r.value=="string"&&this.scopes.add(r.value),this.injectorDefTypes=new Set(this.get(hc,Dt,{self:!0}))}retrieve(i,e){let n=_i(e)||0;try{return this.get(i,gi,n)}catch(o){if($i(o))return o;throw o}}destroy(){Ko(this),this._destroyed=!0;let i=oe(null);try{for(let n of this._ngOnDestroyHooks)n.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let n of e)n()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),oe(i)}}onDestroy(i){return Ko(this),this._onDestroyHooks.push(i),()=>this.removeOnDestroy(i)}runInContext(i){Ko(this);let e=mn(this),n=Rt(void 0),o;try{return i()}finally{mn(e),Rt(n)}}get(i,e=gi,n){if(Ko(this),i.hasOwnProperty(ff))return i[ff](this);let o=_i(n),r,s=mn(this),a=Rt(void 0);try{if(!(o&4)){let c=this.records.get(i);if(c===void 0){let d=nv(i)&&$s(i);d&&this.injectableDefInScope(d)?c=to(Zl(i),Vs):c=null,this.records.set(i,c)}if(c!=null)return this.hydrate(i,c,o)}let l=o&2?nr():this.parent;return e=o&8&&e===gi?null:e,l.get(i,e)}catch(l){let c=jb(l);throw c===-200||c===-201?new ce(c,null):l}finally{Rt(a),mn(s)}}resolveInjectorInitializers(){let i=oe(null),e=mn(this),n=Rt(void 0),o;try{let r=this.get(ei,Dt,{self:!0});for(let s of r)s()}finally{mn(e),Rt(n),oe(i)}}toString(){let i=[],e=this.records;for(let n of e.keys())i.push(Jn(n));return`R3Injector[${i.join(", ")}]`}processProvider(i){i=Ze(i);let e=bi(i)?i:Ze(i&&i.provide),n=Xb(i);if(!bi(i)&&i.multi===!0){let o=this.records.get(e);o||(o=to(void 0,Vs,!0),o.factory=()=>Yl(o.multi),this.records.set(e,o)),e=i,o.multi.push(i)}this.records.set(e,n)}hydrate(i,e,n){let o=oe(null);try{if(e.value===hf)throw dc(Jn(i));return e.value===Vs&&(e.value=hf,e.value=e.factory(void 0,n)),typeof e.value=="object"&&e.value&&tv(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{oe(o)}}injectableDefInScope(i){if(!i.providedIn)return!1;let e=Ze(i.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(i){let e=this._onDestroyHooks.indexOf(i);e!==-1&&this._onDestroyHooks.splice(e,1)}};function Zl(t){let i=$s(t),e=i!==null?i.factory:yi(t);if(e!==null)return e;if(t instanceof de)throw new ce(204,!1);if(t instanceof Function)return Jb(t);throw new ce(204,!1)}function Jb(t){if(t.length>0)throw new ce(204,!1);let e=Vb(t);return e!==null?()=>e.factory(t):()=>new t}function Xb(t){if(Sf(t))return to(void 0,t.useValue);{let i=_c(t);return to(i,Vs)}}function _c(t,i,e){let n;if(bi(t)){let o=Ze(t);return yi(o)||Zl(o)}else if(Sf(t))n=()=>Ze(t.useValue);else if(Zb(t))n=()=>t.useFactory(...Yl(t.deps||[]));else if(Yb(t))n=(o,r)=>Ie(Ze(t.useExisting),r!==void 0&&r&8?8:void 0);else{let o=Ze(t&&(t.useClass||t.provide));if(ev(t))n=()=>new o(...Yl(t.deps));else return yi(o)||Zl(o)}return n}function Ko(t){if(t.destroyed)throw new ce(205,!1)}function to(t,i,e=!1){return{factory:t,value:i,multi:e?[]:void 0}}function ev(t){return!!t.deps}function tv(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function nv(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function Jl(t,i){for(let e of t)Array.isArray(e)?Jl(e,i):e&&rc(e)?Jl(e.\u0275providers,i):i(e)}function Qs(t,i){let e;t instanceof vi?(Ko(t),e=t):e=new Ql(t);let n,o=mn(e),r=Rt(void 0);try{return i()}finally{mn(o),Rt(r)}}function kf(){return bf()!==void 0||cs()!=null}var Yt=0,J=1,ae=2,Je=3,Vt=4,It=5,Di=6,so=7,Ge=8,Ii=9,Pn=10,Fe=11,ao=12,yc=13,xi=14,xt=15,ti=16,Ei=17,_n=18,ir=19,bc=20,Nn=21,Ys=22,Vn=23,Ft=24,Zs=25,ze=26,Of=1,vc=6,ni=7,or=8,Ti=9,nt=10;function yn(t){return Array.isArray(t)&&typeof t[Of]=="object"}function Zt(t){return Array.isArray(t)&&t[Of]===!0}function Cc(t){return(t.flags&4)!==0}function Bn(t){return t.componentOffset>-1}function lo(t){return(t.flags&1)===1}function Jt(t){return!!t.template}function co(t){return(t[ae]&512)!==0}function Si(t){return(t[ae]&256)===256}var wc="svg",Rf="math";function Bt(t){for(;Array.isArray(t);)t=t[Yt];return t}function Dc(t,i){return Bt(i[t])}function Ht(t,i){return Bt(i[t.index])}function rr(t,i){return t.data[i]}function Ff(t,i){return t[i]}function jt(t,i){let e=i[t];return yn(e)?e:e[Yt]}function Af(t){return(t[ae]&4)===4}function Js(t){return(t[ae]&128)===128}function Nf(t){return Zt(t[Je])}function zt(t,i){return i==null?null:t[i]}function Ic(t){t[Ei]=0}function xc(t){t[ae]&1024||(t[ae]|=1024,Js(t)&&Mi(t))}function Lf(t,i){for(;t>0;)i=i[xi],t--;return i}function sr(t){return!!(t[ae]&9216||t[Ft]?.dirty)}function Xs(t){t[Pn].changeDetectionScheduler?.notify(8),t[ae]&64&&(t[ae]|=1024),sr(t)&&Mi(t)}function Mi(t){t[Pn].changeDetectionScheduler?.notify(0);let i=Xn(t);for(;i!==null&&!(i[ae]&8192||(i[ae]|=8192,!Js(i)));)i=Xn(i)}function Ec(t,i){if(Si(t))throw new ce(911,!1);t[Nn]===null&&(t[Nn]=[]),t[Nn].push(i)}function Pf(t,i){if(t[Nn]===null)return;let e=t[Nn].indexOf(i);e!==-1&&t[Nn].splice(e,1)}function Xn(t){let i=t[Je];return Zt(i)?i[Je]:i}function Tc(t){return t[so]??=[]}function Sc(t){return t.cleanup??=[]}function Vf(t,i,e,n){let o=Tc(i);o.push(e),t.firstCreatePass&&Sc(t).push(n,o.length-1)}var fe={lFrame:Yf(null),bindingsEnabled:!0,skipHydrationRootTNode:null},ar=(function(t){return t[t.Off=0]="Off",t[t.Exhaustive=1]="Exhaustive",t[t.OnlyDirtyViews=2]="OnlyDirtyViews",t})(ar||{}),iv=0,Xl=!1;function Bf(){return fe.lFrame.elementDepthCount}function Hf(){fe.lFrame.elementDepthCount++}function Mc(){fe.lFrame.elementDepthCount--}function ea(){return fe.bindingsEnabled}function kc(){return fe.skipHydrationRootTNode!==null}function Oc(t){return fe.skipHydrationRootTNode===t}function Rc(){fe.skipHydrationRootTNode=null}function Y(){return fe.lFrame.lView}function He(){return fe.lFrame.tView}function b(t){return fe.lFrame.contextLView=t,t[Ge]}function v(t){return fe.lFrame.contextLView=null,t}function it(){let t=Fc();for(;t!==null&&t.type===64;)t=t.parent;return t}function Fc(){return fe.lFrame.currentTNode}function jf(){let t=fe.lFrame,i=t.currentTNode;return t.isParent?i:i.parent}function uo(t,i){let e=fe.lFrame;e.currentTNode=t,e.isParent=i}function Ac(){return fe.lFrame.isParent}function Nc(){fe.lFrame.isParent=!1}function zf(){return fe.lFrame.contextLView}function Lc(t){oc("Must never be called in production mode"),iv=t}function Pc(){return Xl}function po(t){let i=Xl;return Xl=t,i}function bn(){let t=fe.lFrame,i=t.bindingRootIndex;return i===-1&&(i=t.bindingRootIndex=t.tView.bindingStartIndex),i}function $f(){return fe.lFrame.bindingIndex}function Uf(t){return fe.lFrame.bindingIndex=t}function Hn(){return fe.lFrame.bindingIndex++}function ta(t){let i=fe.lFrame,e=i.bindingIndex;return i.bindingIndex=i.bindingIndex+t,e}function Gf(){return fe.lFrame.inI18n}function Wf(t,i){let e=fe.lFrame;e.bindingIndex=e.bindingRootIndex=t,na(i)}function qf(){return fe.lFrame.currentDirectiveIndex}function na(t){fe.lFrame.currentDirectiveIndex=t}function Kf(t){let i=fe.lFrame.currentDirectiveIndex;return i===-1?null:t[i]}function Vc(){return fe.lFrame.currentQueryIndex}function ia(t){fe.lFrame.currentQueryIndex=t}function ov(t){let i=t[J];return i.type===2?i.declTNode:i.type===1?t[It]:null}function Bc(t,i,e){if(e&4){let o=i,r=t;for(;o=o.parent,o===null&&!(e&1);)if(o=ov(r),o===null||(r=r[xi],o.type&10))break;if(o===null)return!1;i=o,t=r}let n=fe.lFrame=Qf();return n.currentTNode=i,n.lView=t,!0}function oa(t){let i=Qf(),e=t[J];fe.lFrame=i,i.currentTNode=e.firstChild,i.lView=t,i.tView=e,i.contextLView=t,i.bindingIndex=e.bindingStartIndex,i.inI18n=!1}function Qf(){let t=fe.lFrame,i=t===null?null:t.child;return i===null?Yf(t):i}function Yf(t){let i={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=i),i}function Zf(){let t=fe.lFrame;return fe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Hc=Zf;function ra(){let t=Zf();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function Jf(t){return(fe.lFrame.contextLView=Lf(t,fe.lFrame.contextLView))[Ge]}function vn(){return fe.lFrame.selectedIndex}function ii(t){fe.lFrame.selectedIndex=t}function fo(){let t=fe.lFrame;return rr(t.tView,t.selectedIndex)}function N(){fe.lFrame.currentNamespace=wc}function Xf(){return fe.lFrame.currentNamespace}var eh=!0;function sa(){return eh}function lr(t){eh=t}var rv={elements:void 0};function aa(){return rv}function ec(t,i=null,e=null,n){let o=th(t,i,e,n);return o.resolveInjectorInitializers(),o}function th(t,i=null,e=null,n,o=new Set){let r=[e||Dt,Ef(t)];return n=n||(typeof t=="object"?void 0:Jn(t)),new vi(r,i||nr(),n||null,o)}var ht=class t{static THROW_IF_NOT_FOUND=gi;static NULL=new Zo;static create(i,e){if(Array.isArray(i))return ec({name:""},e,i,"");{let n=i.name??"";return ec({name:n},i.parent,i.providers,n)}}static \u0275prov=V({token:t,providedIn:"any",factory:()=>Ie(fc)});static __NG_ELEMENT_ID__=-1},Qe=new de(""),oi=(()=>{class t{static __NG_ELEMENT_ID__=sv;static __NG_ENV_ID__=e=>e}return t})(),Jo=class extends oi{_lView;constructor(i){super(),this._lView=i}get destroyed(){return Si(this._lView)}onDestroy(i){let e=this._lView;return Ec(e,i),()=>Pf(e,i)}};function sv(){return new Jo(Y())}var Kt=class{_console=console;handleError(i){this._console.error("ERROR",i)}},Cn=new de("",{providedIn:"root",factory:()=>{let t=M(Pt),i;return e=>{t.destroyed&&!i?setTimeout(()=>{throw e}):(i??=t.get(Kt),i.handleError(e))}}}),nh={provide:ei,useValue:()=>void M(Kt),multi:!0},av=new de("",{providedIn:"root",factory:()=>{let t=M(Qe).defaultView;if(!t)return;let i=M(Cn),e=r=>{i(r.reason),r.preventDefault()},n=r=>{r.error?i(r.error):i(new Error(r.message,{cause:r})),r.preventDefault()},o=()=>{t.addEventListener("unhandledrejection",e),t.addEventListener("error",n)};typeof Zone<"u"?Zone.root.run(o):o(),M(oi).onDestroy(()=>{t.removeEventListener("error",n),t.removeEventListener("unhandledrejection",e)})}});function jc(){return ro([xf(()=>void M(av))])}function zc(t){return typeof t=="function"&&t[ft]!==void 0}function Le(t,i){let[e,n,o]=Nl(t,i?.equal),r=e,s=r[ft];return r.set=n,r.update=o,r.asReadonly=$c.bind(r),r}function $c(){let t=this[ft];if(t.readonlyFn===void 0){let i=()=>this();i[ft]=t,t.readonlyFn=i}return t.readonlyFn}function Uc(t){return zc(t)&&typeof t.set=="function"}var Ln=class{},cr=new de("",{providedIn:"root",factory:()=>!1});var Gc=new de(""),Wc=new de("");var dr=(()=>{class t{view;node;constructor(e,n){this.view=e,this.node=n}static __NG_ELEMENT_ID__=lv}return t})();function lv(){return new dr(Y(),it())}var ki=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new qo(!1);get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new Ue(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=V({token:t,providedIn:"root",factory:()=>new t})}return t})();function Oi(...t){}var ur=(()=>{class t{static \u0275prov=V({token:t,providedIn:"root",factory:()=>new tc})}return t})(),tc=class{dirtyEffectCount=0;queues=new Map;add(i){this.enqueue(i),this.schedule(i)}schedule(i){i.dirty&&this.dirtyEffectCount++}remove(i){let e=i.zone,n=this.queues.get(e);n.has(i)&&(n.delete(i),i.dirty&&this.dirtyEffectCount--)}enqueue(i){let e=i.zone;this.queues.has(e)||this.queues.set(e,new Set);let n=this.queues.get(e);n.has(i)||n.add(i)}flush(){for(;this.dirtyEffectCount>0;){let i=!1;for(let[e,n]of this.queues)e===null?i||=this.flushQueue(n):i||=e.run(()=>this.flushQueue(n));i||(this.dirtyEffectCount=0)}}flushQueue(i){let e=!1;for(let n of i)n.dirty&&(this.dirtyEffectCount--,e=!0,n.run());return e}};function wr(t){return{toString:t}.toString()}function yv(t){return typeof t=="function"}var fa=class{previousValue;currentValue;firstChange;constructor(i,e,n){this.previousValue=i,this.currentValue=e,this.firstChange=n}isFirstChange(){return this.firstChange}};function Ph(t,i,e,n){i!==null?i.applyValueToInputSignal(i,n):t[e]=n}var Ye=(()=>{let t=()=>Vh;return t.ngInherit=!0,t})();function Vh(t){return t.type.prototype.ngOnChanges&&(t.setInput=vv),bv}function bv(){let t=Hh(this),i=t?.current;if(i){let e=t.previous;if(e===Qt)t.previous=i;else for(let n in i)e[n]=i[n];t.current=null,this.ngOnChanges(i)}}function vv(t,i,e,n,o){let r=this.declaredInputs[n],s=Hh(t)||Cv(t,{previous:Qt,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[r];a[r]=new fa(c&&c.currentValue,e,l===Qt),Ph(t,i,o,e)}var Bh="__ngSimpleChanges__";function Hh(t){return t[Bh]||null}function Cv(t,i){return t[Bh]=i}var ih=[];var Pe=function(t,i=null,e){for(let n=0;n<ih.length;n++){let o=ih[n];o(t,i,e)}};function wv(t,i,e){let{ngOnChanges:n,ngOnInit:o,ngDoCheck:r}=i.type.prototype;if(n){let s=Vh(i);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}o&&(e.preOrderHooks??=[]).push(0-t,o),r&&((e.preOrderHooks??=[]).push(t,r),(e.preOrderCheckHooks??=[]).push(t,r))}function jh(t,i){for(let e=i.directiveStart,n=i.directiveEnd;e<n;e++){let r=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=r;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function ca(t,i,e){zh(t,i,3,e)}function da(t,i,e,n){(t[ae]&3)===e&&zh(t,i,e,n)}function qc(t,i){let e=t[ae];(e&3)===i&&(e&=16383,e+=1,t[ae]=e)}function zh(t,i,e,n){let o=n!==void 0?t[Ei]&65535:0,r=n??-1,s=i.length-1,a=0;for(let l=o;l<s;l++)if(typeof i[l+1]=="number"){if(a=i[l],n!=null&&a>=n)break}else i[l]<0&&(t[Ei]+=65536),(a<r||r==-1)&&(Dv(t,e,i,l),t[Ei]=(t[Ei]&4294901760)+l+2),l++}function oh(t,i){Pe(4,t,i);let e=oe(null);try{i.call(t)}finally{oe(e),Pe(5,t,i)}}function Dv(t,i,e,n){let o=e[n]<0,r=e[n+1],s=o?-e[n]:e[n],a=t[s];o?t[ae]>>14<t[Ei]>>16&&(t[ae]&3)===i&&(t[ae]+=16384,oh(a,r)):oh(a,r)}var mo=-1,Fi=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(i,e,n,o){this.factory=i,this.name=o,this.canSeeViewProviders=e,this.injectImpl=n}};function Iv(t){return(t.flags&8)!==0}function xv(t){return(t.flags&16)!==0}function Ev(t,i,e){let n=0;for(;n<e.length;){let o=e[n];if(typeof o=="number"){if(o!==0)break;n++;let r=e[n++],s=e[n++],a=e[n++];t.setAttribute(i,s,a,r)}else{let r=o,s=e[++n];Sv(r)?t.setProperty(i,r,s):t.setAttribute(i,r,s),n++}}return n}function Tv(t){return t===3||t===4||t===6}function Sv(t){return t.charCodeAt(0)===64}function go(t,i){if(!(i===null||i.length===0))if(t===null||t.length===0)t=i.slice();else{let e=-1;for(let n=0;n<i.length;n++){let o=i[n];typeof o=="number"?e=o:e===0||(e===-1||e===2?rh(t,e,o,null,i[++n]):rh(t,e,o,null,null))}}return t}function rh(t,i,e,n,o){let r=0,s=t.length;if(i===-1)s=-1;else for(;r<t.length;){let a=t[r++];if(typeof a=="number"){if(a===i){s=-1;break}else if(a>i){s=r-1;break}}}for(;r<t.length;){let a=t[r];if(typeof a=="number")break;if(a===e){o!==null&&(t[r+1]=o);return}r++,o!==null&&r++}s!==-1&&(t.splice(s,0,i),r=s+1),t.splice(r++,0,e),o!==null&&t.splice(r++,0,o)}function $h(t){return t!==mo}function ha(t){return t&32767}function Mv(t){return t>>16}function ma(t,i){let e=Mv(t),n=i;for(;e>0;)n=n[xi],e--;return n}var rd=!0;function sh(t){let i=rd;return rd=t,i}var kv=256,Uh=kv-1,Gh=5,Ov=0,wn={};function Rv(t,i,e){let n;typeof e=="string"?n=e.charCodeAt(0)||0:e.hasOwnProperty(Ci)&&(n=e[Ci]),n==null&&(n=e[Ci]=Ov++);let o=n&Uh,r=1<<o;i.data[t+(o>>Gh)]|=r}function ga(t,i){let e=Wh(t,i);if(e!==-1)return e;let n=i[J];n.firstCreatePass&&(t.injectorIndex=i.length,Kc(n.data,t),Kc(i,null),Kc(n.blueprint,null));let o=Vd(t,i),r=t.injectorIndex;if($h(o)){let s=ha(o),a=ma(o,i),l=a[J].data;for(let c=0;c<8;c++)i[r+c]=a[s+c]|l[s+c]}return i[r+8]=o,r}function Kc(t,i){t.push(0,0,0,0,0,0,0,0,i)}function Wh(t,i){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||i[t.injectorIndex+8]===null?-1:t.injectorIndex}function Vd(t,i){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,n=null,o=i;for(;o!==null;){if(n=Zh(o),n===null)return mo;if(e++,o=o[xi],n.injectorIndex!==-1)return n.injectorIndex|e<<16}return mo}function sd(t,i,e){Rv(t,i,e)}function qh(t,i,e){if(e&8||t!==void 0)return t;Gs(i,"NodeInjector")}function Kh(t,i,e,n){if(e&8&&n===void 0&&(n=null),(e&3)===0){let o=t[Ii],r=Rt(void 0);try{return o?o.get(i,n,e&8):uc(i,n,e&8)}finally{Rt(r)}}return qh(n,i,e)}function Qh(t,i,e,n=0,o){if(t!==null){if(i[ae]&2048&&!(n&2)){let s=Lv(t,i,e,n,wn);if(s!==wn)return s}let r=Yh(t,i,e,n,wn);if(r!==wn)return r}return Kh(i,e,n,o)}function Yh(t,i,e,n,o){let r=Av(e);if(typeof r=="function"){if(!Bc(i,t,n))return n&1?qh(o,e,n):Kh(i,e,n,o);try{let s;if(s=r(n),s==null&&!(n&8))Gs(e);else return s}finally{Hc()}}else if(typeof r=="number"){let s=null,a=Wh(t,i),l=mo,c=n&1?i[xt][It]:null;for((a===-1||n&4)&&(l=a===-1?Vd(t,i):i[a+8],l===mo||!lh(n,!1)?a=-1:(s=i[J],a=ha(l),i=ma(l,i)));a!==-1;){let d=i[J];if(ah(r,a,d.data)){let h=Fv(a,i,e,s,n,c);if(h!==wn)return h}l=i[a+8],l!==mo&&lh(n,i[J].data[a+8]===c)&&ah(r,a,i)?(s=d,a=ha(l),i=ma(l,i)):a=-1}}return o}function Fv(t,i,e,n,o,r){let s=i[J],a=s.data[t+8],l=n==null?Bn(a)&&rd:n!=s&&(a.type&3)!==0,c=o&1&&r===a,d=ua(a,s,e,l,c);return d!==null?hr(i,s,d,a,o):wn}function ua(t,i,e,n,o){let r=t.providerIndexes,s=i.data,a=r&1048575,l=t.directiveStart,c=t.directiveEnd,d=r>>20,h=n?a:a+d,g=o?a+d:c;for(let m=h;m<g;m++){let y=s[m];if(m<l&&e===y||m>=l&&y.type===e)return m}if(o){let m=s[l];if(m&&Jt(m)&&m.type===e)return l}return null}function hr(t,i,e,n,o){let r=t[e],s=i.data;if(r instanceof Fi){let a=r;if(a.resolving){let m=Hs(s[e]);throw dc(m)}let l=sh(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,h=a.injectImpl?Rt(a.injectImpl):null,g=Bc(t,n,0);try{r=t[e]=a.factory(void 0,o,s,t,n),i.firstCreatePass&&e>=n.directiveStart&&wv(e,s[e],i)}finally{h!==null&&Rt(h),sh(l),a.resolving=!1,Hc()}}return r}function Av(t){if(typeof t=="string")return t.charCodeAt(0)||0;let i=t.hasOwnProperty(Ci)?t[Ci]:void 0;return typeof i=="number"?i>=0?i&Uh:Nv:i}function ah(t,i,e){let n=1<<t;return!!(e[i+(t>>Gh)]&n)}function lh(t,i){return!(t&2)&&!(t&1&&i)}var Ri=class{_tNode;_lView;constructor(i,e){this._tNode=i,this._lView=e}get(i,e,n){return Qh(this._tNode,this._lView,i,_i(n),e)}};function Nv(){return new Ri(it(),Y())}function S(t){return wr(()=>{let i=t.prototype.constructor,e=i[Yo]||ad(i),n=Object.prototype,o=Object.getPrototypeOf(t.prototype).constructor;for(;o&&o!==n;){let r=o[Yo]||ad(o);if(r&&r!==e)return r;o=Object.getPrototypeOf(o)}return r=>new r})}function ad(t){return ic(t)?()=>{let i=ad(Ze(t));return i&&i()}:yi(t)}function Lv(t,i,e,n,o){let r=t,s=i;for(;r!==null&&s!==null&&s[ae]&2048&&!co(s);){let a=Yh(r,s,e,n|2,wn);if(a!==wn)return a;let l=r.parent;if(!l){let c=s[bc];if(c){let d=c.get(e,wn,n);if(d!==wn)return d}l=Zh(s),s=s[xi]}r=l}return o}function Zh(t){let i=t[J],e=i.type;return e===2?i.declTNode:e===1?t[It]:null}function Pv(){return wo(it(),Y())}function wo(t,i){return new ot(Ht(t,i))}var ot=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=Pv}return t})();function Vv(t){return t instanceof ot?t.nativeElement:t}function Bv(){return this._results[Symbol.iterator]()}var _a=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Ke}constructor(i=!1){this._emitDistinctChangesOnly=i}get(i){return this._results[i]}map(i){return this._results.map(i)}filter(i){return this._results.filter(i)}find(i){return this._results.find(i)}reduce(i,e){return this._results.reduce(i,e)}forEach(i){this._results.forEach(i)}some(i){return this._results.some(i)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(i,e){this.dirty=!1;let n=Cf(i);(this._changesDetected=!vf(this._results,n,e))&&(this._results=n,this.length=n.length,this.last=n[this.length-1],this.first=n[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(i){this._onDirty=i}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Bv};function Jh(t){return(t.flags&128)===128}var Bd=(function(t){return t[t.OnPush=0]="OnPush",t[t.Default=1]="Default",t})(Bd||{}),Xh=new Map,Hv=0;function jv(){return Hv++}function zv(t){Xh.set(t[ir],t)}function ld(t){Xh.delete(t[ir])}var ch="__ngContext__";function _o(t,i){yn(i)?(t[ch]=i[ir],zv(i)):t[ch]=i}function em(t){return nm(t[ao])}function tm(t){return nm(t[Vt])}function nm(t){for(;t!==null&&!Zt(t);)t=t[Vt];return t}var cd;function Hd(t){cd=t}function im(){if(cd!==void 0)return cd;if(typeof document<"u")return document;throw new ce(210,!1)}var Sa=new de("",{providedIn:"root",factory:()=>$v}),$v="ng",Ma=new de(""),Ut=new de("",{providedIn:"platform",factory:()=>"unknown"});var ka=new de("",{providedIn:"root",factory:()=>im().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Uv="h",Gv="b";var om="r";var rm="di";var sm=!1,am=new de("",{providedIn:"root",factory:()=>sm});var Wv=(t,i,e,n)=>{};function qv(t,i,e,n){Wv(t,i,e,n)}function Oa(t){return(t.flags&32)===32}var Kv=()=>null;function lm(t,i,e=!1){return Kv(t,i,e)}function cm(t,i){let e=t.contentQueries;if(e!==null){let n=oe(null);try{for(let o=0;o<e.length;o+=2){let r=e[o],s=e[o+1];if(s!==-1){let a=t.data[s];ia(r),a.contentQueries(2,i[s],s)}}}finally{oe(n)}}}function dd(t,i,e){ia(0);let n=oe(null);try{i(t,e)}finally{oe(n)}}function jd(t,i,e){if(Cc(i)){let n=oe(null);try{let o=i.directiveStart,r=i.directiveEnd;for(let s=o;s<r;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{oe(n)}}}var jn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t})(jn||{});var ud=class{changingThisBreaksApplicationSecurity;constructor(i){this.changingThisBreaksApplicationSecurity=i}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${nc})`}};function Ra(t){return t instanceof ud?t.changingThisBreaksApplicationSecurity:t}var Qv=/^>|^->|<!--|-->|--!>|<!-$/g,Yv=/(<|>)/g,Zv="\u200B$1\u200B";function Jv(t){return t.replace(Qv,i=>i.replace(Yv,Zv))}function Xv(t,i,e){let n=t.length;for(;;){let o=t.indexOf(i,e);if(o===-1)return o;if(o===0||t.charCodeAt(o-1)<=32){let r=i.length;if(o+r===n||t.charCodeAt(o+r)<=32)return o}e=o+1}}var dm="ng-template";function e1(t,i,e,n){let o=0;if(n){for(;o<i.length&&typeof i[o]=="string";o+=2)if(i[o]==="class"&&Xv(i[o+1].toLowerCase(),e,0)!==-1)return!0}else if(zd(t))return!1;if(o=i.indexOf(1,o),o>-1){let r;for(;++o<i.length&&typeof(r=i[o])=="string";)if(r.toLowerCase()===e)return!0}return!1}function zd(t){return t.type===4&&t.value!==dm}function t1(t,i,e){let n=t.type===4&&!e?dm:t.value;return i===n}function n1(t,i,e){let n=4,o=t.attrs,r=o!==null?r1(o):0,s=!1;for(let a=0;a<i.length;a++){let l=i[a];if(typeof l=="number"){if(!s&&!Xt(n)&&!Xt(l))return!1;if(s&&Xt(l))continue;s=!1,n=l|n&1;continue}if(!s)if(n&4){if(n=2|n&1,l!==""&&!t1(t,l,e)||l===""&&i.length===1){if(Xt(n))return!1;s=!0}}else if(n&8){if(o===null||!e1(t,o,l,e)){if(Xt(n))return!1;s=!0}}else{let c=i[++a],d=i1(l,o,zd(t),e);if(d===-1){if(Xt(n))return!1;s=!0;continue}if(c!==""){let h;if(d>r?h="":h=o[d+1].toLowerCase(),n&2&&c!==h){if(Xt(n))return!1;s=!0}}}}return Xt(n)||s}function Xt(t){return(t&1)===0}function i1(t,i,e,n){if(i===null)return-1;let o=0;if(n||!e){let r=!1;for(;o<i.length;){let s=i[o];if(s===t)return o;if(s===3||s===6)r=!0;else if(s===1||s===2){let a=i[++o];for(;typeof a=="string";)a=i[++o];continue}else{if(s===4)break;if(s===0){o+=4;continue}}o+=r?1:2}return-1}else return s1(i,t)}function um(t,i,e=!1){for(let n=0;n<i.length;n++)if(n1(t,i[n],e))return!0;return!1}function o1(t){let i=t.attrs;if(i!=null){let e=i.indexOf(5);if((e&1)===0)return i[e+1]}return null}function r1(t){for(let i=0;i<t.length;i++){let e=t[i];if(Tv(e))return i}return t.length}function s1(t,i){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let n=t[e];if(typeof n=="number")return-1;if(n===i)return e;e++}return-1}function a1(t,i){e:for(let e=0;e<i.length;e++){let n=i[e];if(t.length===n.length){for(let o=0;o<t.length;o++)if(t[o]!==n[o])continue e;return!0}}return!1}function dh(t,i){return t?":not("+i.trim()+")":i}function l1(t){let i=t[0],e=1,n=2,o="",r=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(n&2){let a=t[++e];o+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else n&8?o+="."+s:n&4&&(o+=" "+s);else o!==""&&!Xt(s)&&(i+=dh(r,o),o=""),n=s,r=r||!Xt(n);e++}return o!==""&&(i+=dh(r,o)),i}function c1(t){return t.map(l1).join(",")}function d1(t){let i=[],e=[],n=1,o=2;for(;n<t.length;){let r=t[n];if(typeof r=="string")o===2?r!==""&&i.push(r,t[++n]):o===8&&e.push(r);else{if(!Xt(o))break;o=r}n++}return e.length&&i.push(1,...e),i}var Et={};function u1(t,i){return t.createText(i)}function p1(t,i,e){t.setValue(i,e)}function f1(t,i){return t.createComment(Jv(i))}function pm(t,i,e){return t.createElement(i,e)}function ya(t,i,e,n,o){t.insertBefore(i,e,n,o)}function fm(t,i,e){t.appendChild(i,e)}function uh(t,i,e,n,o){n!==null?ya(t,i,e,n,o):fm(t,i,e)}function hm(t,i,e){t.removeChild(null,i,e)}function h1(t,i,e){t.setAttribute(i,"style",e)}function m1(t,i,e){e===""?t.removeAttribute(i,"class"):t.setAttribute(i,"class",e)}function mm(t,i,e){let{mergedAttrs:n,classes:o,styles:r}=e;n!==null&&Ev(t,i,n),o!==null&&m1(t,i,o),r!==null&&h1(t,i,r)}function $d(t,i,e,n,o,r,s,a,l,c,d){let h=ze+n,g=h+o,m=g1(h,g),y=typeof c=="function"?c():c;return m[J]={type:t,blueprint:m,template:e,queries:null,viewQuery:a,declTNode:i,data:m.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:g,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof r=="function"?r():r,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:y,incompleteFirstPass:!1,ssrId:d}}function g1(t,i){let e=[];for(let n=0;n<i;n++)e.push(n<t?null:Et);return e}function _1(t){let i=t.tView;return i===null||i.incompleteFirstPass?t.tView=$d(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):i}function Ud(t,i,e,n,o,r,s,a,l,c,d){let h=i.blueprint.slice();return h[Yt]=o,h[ae]=n|4|128|8|64|1024,(c!==null||t&&t[ae]&2048)&&(h[ae]|=2048),Ic(h),h[Je]=h[xi]=t,h[Ge]=e,h[Pn]=s||t&&t[Pn],h[Fe]=a||t&&t[Fe],h[Ii]=l||t&&t[Ii]||null,h[It]=r,h[ir]=jv(),h[Di]=d,h[bc]=c,h[xt]=i.type==2?t[xt]:h,h}function y1(t,i,e){let n=Ht(i,t),o=_1(e),r=t[Pn].rendererFactory,s=Gd(t,Ud(t,o,null,gm(e),n,i,null,r.createRenderer(n,e),null,null,null));return t[i.index]=s}function gm(t){let i=16;return t.signals?i=4096:t.onPush&&(i=64),i}function _m(t,i,e,n){if(e===0)return-1;let o=i.length;for(let r=0;r<e;r++)i.push(n),t.blueprint.push(n),t.data.push(null);return o}function Gd(t,i){return t[ao]?t[yc][Vt]=i:t[ao]=i,t[yc]=i,i}function f(t=1){ym(He(),Y(),vn()+t,!1)}function ym(t,i,e,n){if(!n)if((i[ae]&3)===3){let r=t.preOrderCheckHooks;r!==null&&ca(i,r,e)}else{let r=t.preOrderHooks;r!==null&&da(i,r,0,e)}ii(e)}var Fa=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Fa||{});function pd(t,i,e,n){let o=oe(null);try{let[r,s,a]=t.inputs[e],l=null;(s&Fa.SignalBased)!==0&&(l=i[r][ft]),l!==null&&l.transformFn!==void 0?n=l.transformFn(n):a!==null&&(n=a.call(i,n)),t.setInput!==null?t.setInput(i,l,n,e,r):Ph(i,l,r,n)}finally{oe(o)}}var en=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(en||{}),b1;function Wd(t,i){return b1(t,i)}function ho(t,i,e,n,o){if(n!=null){let r,s=!1;Zt(n)?r=n:yn(n)&&(s=!0,n=n[Yt]);let a=Bt(n);t===0&&e!==null?o==null?fm(i,e,a):ya(i,e,a,o||null,!0):t===1&&e!==null?ya(i,e,a,o||null,!0):t===2?hm(i,a,s):t===3&&i.destroyNode(a),r!=null&&M1(i,t,r,e,o)}}function v1(t,i){bm(t,i),i[Yt]=null,i[It]=null}function C1(t,i,e,n,o,r){n[Yt]=o,n[It]=i,Na(t,n,e,1,o,r)}function bm(t,i){i[Pn].changeDetectionScheduler?.notify(9),Na(t,i,i[Fe],2,null,null)}function w1(t){let i=t[ao];if(!i)return Qc(t[J],t);for(;i;){let e=null;if(yn(i))e=i[ao];else{let n=i[nt];n&&(e=n)}if(!e){for(;i&&!i[Vt]&&i!==t;)yn(i)&&Qc(i[J],i),i=i[Je];i===null&&(i=t),yn(i)&&Qc(i[J],i),e=i&&i[Vt]}i=e}}function qd(t,i){let e=t[Ti],n=e.indexOf(i);e.splice(n,1)}function Aa(t,i){if(Si(i))return;let e=i[Fe];e.destroyNode&&Na(t,i,e,3,null,null),w1(i)}function Qc(t,i){if(Si(i))return;let e=oe(null);try{i[ae]&=-129,i[ae]|=256,i[Ft]&&ui(i[Ft]),I1(t,i),D1(t,i),i[J].type===1&&i[Fe].destroy();let n=i[ti];if(n!==null&&Zt(i[Je])){n!==i[Je]&&qd(n,i);let o=i[_n];o!==null&&o.detachView(t)}ld(i)}finally{oe(e)}}function D1(t,i){let e=t.cleanup,n=i[so];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?n[a]():n[-a].unsubscribe(),s+=2}else{let a=n[e[s+1]];e[s].call(a)}n!==null&&(i[so]=null);let o=i[Nn];if(o!==null){i[Nn]=null;for(let s=0;s<o.length;s++){let a=o[s];a()}}let r=i[Vn];if(r!==null){i[Vn]=null;for(let s of r)s.destroy()}}function I1(t,i){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let n=0;n<e.length;n+=2){let o=i[e[n]];if(!(o instanceof Fi)){let r=e[n+1];if(Array.isArray(r))for(let s=0;s<r.length;s+=2){let a=o[r[s]],l=r[s+1];Pe(4,a,l);try{l.call(a)}finally{Pe(5,a,l)}}else{Pe(4,o,r);try{r.call(o)}finally{Pe(5,o,r)}}}}}function vm(t,i,e){return x1(t,i.parent,e)}function x1(t,i,e){let n=i;for(;n!==null&&n.type&168;)i=n,n=i.parent;if(n===null)return e[Yt];if(Bn(n)){let{encapsulation:o}=t.data[n.directiveStart+n.componentOffset];if(o===jn.None||o===jn.Emulated)return null}return Ht(n,e)}function Cm(t,i,e){return T1(t,i,e)}function E1(t,i,e){return t.type&40?Ht(t,e):null}var T1=E1,ph;function Kd(t,i,e,n){let o=vm(t,n,i),r=i[Fe],s=n.parent||i[It],a=Cm(s,n,i);if(o!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)uh(r,o,e[l],a,!1);else uh(r,o,e,a,!1);ph!==void 0&&ph(r,n,i,e,o)}function pr(t,i){if(i!==null){let e=i.type;if(e&3)return Ht(i,t);if(e&4)return fd(-1,t[i.index]);if(e&8){let n=i.child;if(n!==null)return pr(t,n);{let o=t[i.index];return Zt(o)?fd(-1,o):Bt(o)}}else{if(e&128)return pr(t,i.next);if(e&32)return Wd(i,t)()||Bt(t[i.index]);{let n=wm(t,i);if(n!==null){if(Array.isArray(n))return n[0];let o=Xn(t[xt]);return pr(o,n)}else return pr(t,i.next)}}}return null}function wm(t,i){if(i!==null){let n=t[xt][It],o=i.projection;return n.projection[o]}return null}function fd(t,i){let e=nt+t+1;if(e<i.length){let n=i[e],o=n[J].firstChild;if(o!==null)return pr(n,o)}return i[ni]}function Qd(t,i,e,n,o,r,s){for(;e!=null;){if(e.type===128){e=e.next;continue}let a=n[e.index],l=e.type;if(s&&i===0&&(a&&_o(Bt(a),n),e.flags|=2),!Oa(e))if(l&8)Qd(t,i,e.child,n,o,r,!1),ho(i,t,o,a,r);else if(l&32){let c=Wd(e,n),d;for(;d=c();)ho(i,t,o,d,r);ho(i,t,o,a,r)}else l&16?Dm(t,i,n,e,o,r):ho(i,t,o,a,r);e=s?e.projectionNext:e.next}}function Na(t,i,e,n,o,r){Qd(e,n,t.firstChild,i,o,r,!1)}function S1(t,i,e){let n=i[Fe],o=vm(t,e,i),r=e.parent||i[It],s=Cm(r,e,i);Dm(n,0,i,e,o,s)}function Dm(t,i,e,n,o,r){let s=e[xt],l=s[It].projection[n.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];ho(i,t,o,d,r)}else{let c=l,d=s[Je];Jh(n)&&(c.flags|=128),Qd(t,i,c,d,o,r,!0)}}function M1(t,i,e,n,o){let r=e[ni],s=Bt(e);r!==s&&ho(i,t,n,r,o);for(let a=nt;a<e.length;a++){let l=e[a];Na(l[J],l,t,i,n,r)}}function k1(t,i,e,n,o){if(i)o?t.addClass(e,n):t.removeClass(e,n);else{let r=n.indexOf("-")===-1?void 0:en.DashCase;o==null?t.removeStyle(e,n,r):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),r|=en.Important),t.setStyle(e,n,o,r))}}function Im(t,i,e,n,o){let r=vn(),s=n&2;try{ii(-1),s&&i.length>ze&&ym(t,i,ze,!1),Pe(s?2:0,o,e),e(n,o)}finally{ii(r),Pe(s?3:1,o,e)}}function La(t,i,e){N1(t,i,e),(e.flags&64)===64&&L1(t,i,e)}function Dr(t,i,e=Ht){let n=i.localNames;if(n!==null){let o=i.index+1;for(let r=0;r<n.length;r+=2){let s=n[r+1],a=s===-1?e(i,t):t[s];t[o++]=a}}}function O1(t,i,e,n){let r=n.get(am,sm)||e===jn.ShadowDom,s=t.selectRootElement(i,r);return R1(s),s}function R1(t){F1(t)}var F1=()=>null;function A1(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function xm(t,i,e,n,o,r){let s=i[J];if(Pa(t,s,i,e,n)){Bn(t)&&Tm(i,t.index);return}t.type&3&&(e=A1(e)),Em(t,i,e,n,o,r)}function Em(t,i,e,n,o,r){if(t.type&3){let s=Ht(t,i);n=r!=null?r(n,t.value||"",e):n,o.setProperty(s,e,n)}else t.type&12}function Tm(t,i){let e=jt(i,t);e[ae]&16||(e[ae]|=64)}function N1(t,i,e){let n=e.directiveStart,o=e.directiveEnd;Bn(e)&&y1(i,e,t.data[n+e.componentOffset]),t.firstCreatePass||ga(e,i);let r=e.initialInputs;for(let s=n;s<o;s++){let a=t.data[s],l=hr(i,t,s,e);if(_o(l,i),r!==null&&B1(i,s-n,l,a,e,r),Jt(a)){let c=jt(e.index,i);c[Ge]=hr(i,t,s,e)}}}function L1(t,i,e){let n=e.directiveStart,o=e.directiveEnd,r=e.index,s=qf();try{ii(r);for(let a=n;a<o;a++){let l=t.data[a],c=i[a];na(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&P1(l,c)}}finally{ii(-1),na(s)}}function P1(t,i){t.hostBindings!==null&&t.hostBindings(1,i)}function Yd(t,i){let e=t.directiveRegistry,n=null;if(e)for(let o=0;o<e.length;o++){let r=e[o];um(i,r.selectors,!1)&&(n??=[],Jt(r)?n.unshift(r):n.push(r))}return n}function V1(t,i,e,n,o,r){let s=Ht(t,i);Sm(i[Fe],s,r,t.value,e,n,o)}function Sm(t,i,e,n,o,r,s){if(r==null)t.removeAttribute(i,o,e);else{let a=s==null?io(r):s(r,n||"",o);t.setAttribute(i,o,a,e)}}function B1(t,i,e,n,o,r){let s=r[i];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];pd(n,e,l,c)}}function Zd(t,i,e,n,o){let r=ze+e,s=i[J],a=o(s,i,t,n,e);i[r]=a,uo(t,!0);let l=t.type===2;return l?(mm(i[Fe],a,t),(Bf()===0||lo(t))&&_o(a,i),Hf()):_o(a,i),sa()&&(!l||!Oa(t))&&Kd(s,i,a,t),t}function Jd(t){let i=t;return Ac()?Nc():(i=i.parent,uo(i,!1)),i}function H1(t,i){let e=t[Ii];if(!e)return;let n;try{n=e.get(Cn,null)}catch{n=null}n?.(i)}function Pa(t,i,e,n,o){let r=t.inputs?.[n],s=t.hostDirectiveInputs?.[n],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],h=i.data[c];pd(h,e[c],d,o),a=!0}if(r)for(let l of r){let c=e[l],d=i.data[l];pd(d,c,n,o),a=!0}return a}function j1(t,i){let e=jt(i,t),n=e[J];z1(n,e);let o=e[Yt];o!==null&&e[Di]===null&&(e[Di]=lm(o,e[Ii])),Pe(18),Xd(n,e,e[Ge]),Pe(19,e[Ge])}function z1(t,i){for(let e=i.length;e<t.blueprint.length;e++)i.push(t.blueprint[e])}function Xd(t,i,e){oa(i);try{let n=t.viewQuery;n!==null&&dd(1,n,e);let o=t.template;o!==null&&Im(t,i,o,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),i[_n]?.finishViewCreation(t),t.staticContentQueries&&cm(t,i),t.staticViewQueries&&dd(2,t.viewQuery,e);let r=t.components;r!==null&&$1(i,r)}catch(n){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),n}finally{i[ae]&=-5,ra()}}function $1(t,i){for(let e=0;e<i.length;e++)j1(t,i[e])}function Ir(t,i,e,n){let o=oe(null);try{let r=i.tView,a=t[ae]&4096?4096:16,l=Ud(t,r,e,a,null,i,null,null,n?.injector??null,n?.embeddedViewInjector??null,n?.dehydratedView??null),c=t[i.index];l[ti]=c;let d=t[_n];return d!==null&&(l[_n]=d.createEmbeddedView(r)),Xd(r,l,e),l}finally{oe(o)}}function yo(t,i){return!i||i.firstChild===null||Jh(t)}var fh=!1,U1=new de("");function mr(t,i,e,n,o=!1){for(;e!==null;){if(e.type===128){e=o?e.projectionNext:e.next;continue}let r=i[e.index];r!==null&&n.push(Bt(r)),Zt(r)&&Mm(r,n);let s=e.type;if(s&8)mr(t,i,e.child,n);else if(s&32){let a=Wd(e,i),l;for(;l=a();)n.push(l)}else if(s&16){let a=wm(i,e);if(Array.isArray(a))n.push(...a);else{let l=Xn(i[xt]);mr(l[J],l,a,n,!0)}}e=o?e.projectionNext:e.next}return n}function Mm(t,i){for(let e=nt;e<t.length;e++){let n=t[e],o=n[J].firstChild;o!==null&&mr(n[J],n,o,i)}t[ni]!==t[Yt]&&i.push(t[ni])}function km(t){if(t[Zs]!==null){for(let i of t[Zs])i.impl.addSequence(i);t[Zs].length=0}}var Om=[];function G1(t){return t[Ft]??W1(t)}function W1(t){let i=Om.pop()??Object.create(K1);return i.lView=t,i}function q1(t){t.lView[Ft]!==t&&(t.lView=null,Om.push(t))}var K1=ge(H({},ci),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{Mi(t.lView)},consumerOnSignalRead(){this.lView[Ft]=this}});function Q1(t){let i=t[Ft]??Object.create(Y1);return i.lView=t,i}var Y1=ge(H({},ci),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let i=Xn(t.lView);for(;i&&!Rm(i[J]);)i=Xn(i);i&&xc(i)},consumerOnSignalRead(){this.lView[Ft]=this}});function Rm(t){return t.type!==2}function Fm(t){if(t[Vn]===null)return;let i=!0;for(;i;){let e=!1;for(let n of t[Vn])n.dirty&&(e=!0,n.zone===null||Zone.current===n.zone?n.run():n.zone.run(()=>n.run()));i=e&&!!(t[ae]&8192)}}var Z1=100;function eu(t,i=0){let n=t[Pn].rendererFactory,o=!1;o||n.begin?.();try{J1(t,i)}finally{o||n.end?.()}}function J1(t,i){let e=Pc();try{po(!0),hd(t,i);let n=0;for(;sr(t);){if(n===Z1)throw new ce(103,!1);n++,hd(t,1)}}finally{po(e)}}function Am(t,i){Lc(i?ar.Exhaustive:ar.OnlyDirtyViews);try{eu(t)}finally{Lc(ar.Off)}}function X1(t,i,e,n){if(Si(i))return;let o=i[ae],r=!1,s=!1;oa(i);let a=!0,l=null,c=null;r||(Rm(t)?(c=G1(i),l=di(c)):ms()===null?(a=!1,c=Q1(i),l=di(c)):i[Ft]&&(ui(i[Ft]),i[Ft]=null));try{Ic(i),Uf(t.bindingStartIndex),e!==null&&Im(t,i,e,2,n);let d=(o&3)===3;if(!r)if(d){let m=t.preOrderCheckHooks;m!==null&&ca(i,m,null)}else{let m=t.preOrderHooks;m!==null&&da(i,m,0,null),qc(i,0)}if(s||eC(i),Fm(i),Nm(i,0),t.contentQueries!==null&&cm(t,i),!r)if(d){let m=t.contentCheckHooks;m!==null&&ca(i,m)}else{let m=t.contentHooks;m!==null&&da(i,m,1),qc(i,1)}nC(t,i);let h=t.components;h!==null&&Pm(i,h,0);let g=t.viewQuery;if(g!==null&&dd(2,g,n),!r)if(d){let m=t.viewCheckHooks;m!==null&&ca(i,m)}else{let m=t.viewHooks;m!==null&&da(i,m,2),qc(i,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),i[Ys]){for(let m of i[Ys])m();i[Ys]=null}r||(km(i),i[ae]&=-73)}catch(d){throw r||Mi(i),d}finally{c!==null&&(Gi(c,l),a&&q1(c)),ra()}}function Nm(t,i){for(let e=em(t);e!==null;e=tm(e))for(let n=nt;n<e.length;n++){let o=e[n];Lm(o,i)}}function eC(t){for(let i=em(t);i!==null;i=tm(i)){if(!(i[ae]&2))continue;let e=i[Ti];for(let n=0;n<e.length;n++){let o=e[n];xc(o)}}}function tC(t,i,e){Pe(18);let n=jt(i,t);Lm(n,e),Pe(19,n[Ge])}function Lm(t,i){Js(t)&&hd(t,i)}function hd(t,i){let n=t[J],o=t[ae],r=t[Ft],s=!!(i===0&&o&16);if(s||=!!(o&64&&i===0),s||=!!(o&1024),s||=!!(r?.dirty&&Wi(r)),s||=!1,r&&(r.dirty=!1),t[ae]&=-9217,s)X1(n,t,n.template,t[Ge]);else if(o&8192){let a=oe(null);try{Fm(t),Nm(t,1);let l=n.components;l!==null&&Pm(t,l,1),km(t)}finally{oe(a)}}}function Pm(t,i,e){for(let n=0;n<i.length;n++)tC(t,i[n],e)}function nC(t,i){let e=t.hostBindingOpCodes;if(e!==null)try{for(let n=0;n<e.length;n++){let o=e[n];if(o<0)ii(~o);else{let r=o,s=e[++n],a=e[++n];Wf(s,r);let l=i[r];Pe(24,l),a(2,l),Pe(25,l)}}}finally{ii(-1)}}function tu(t,i){let e=Pc()?64:1088;for(t[Pn].changeDetectionScheduler?.notify(i);t;){t[ae]|=e;let n=Xn(t);if(co(t)&&!n)return t;t=n}return null}function Vm(t,i,e,n){return[t,!0,0,i,null,n,null,e,null,null]}function Bm(t,i){let e=nt+i;if(e<t.length)return t[e]}function xr(t,i,e,n=!0){let o=i[J];if(iC(o,i,t,e),n){let s=fd(e,t),a=i[Fe],l=a.parentNode(t[ni]);l!==null&&C1(o,t[It],a,i,l,s)}let r=i[Di];r!==null&&r.firstChild!==null&&(r.firstChild=null)}function Hm(t,i){let e=gr(t,i);return e!==void 0&&Aa(e[J],e),e}function gr(t,i){if(t.length<=nt)return;let e=nt+i,n=t[e];if(n){let o=n[ti];o!==null&&o!==t&&qd(o,n),i>0&&(t[e-1][Vt]=n[Vt]);let r=Xo(t,nt+i);v1(n[J],n);let s=r[_n];s!==null&&s.detachView(r[J]),n[Je]=null,n[Vt]=null,n[ae]&=-129}return n}function iC(t,i,e,n){let o=nt+n,r=e.length;n>0&&(e[o-1][Vt]=i),n<r-nt?(i[Vt]=e[o],pc(e,nt+n,i)):(e.push(i),i[Vt]=null),i[Je]=e;let s=i[ti];s!==null&&e!==s&&jm(s,i);let a=i[_n];a!==null&&a.insertView(t),Xs(i),i[ae]|=128}function jm(t,i){let e=t[Ti],n=i[Je];if(yn(n))t[ae]|=2;else{let o=n[Je][xt];i[xt]!==o&&(t[ae]|=2)}e===null?t[Ti]=[i]:e.push(i)}var ri=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let i=this._lView,e=i[J];return mr(e,i,e.firstChild,[])}constructor(i,e){this._lView=i,this._cdRefInjectingView=e}get context(){return this._lView[Ge]}set context(i){this._lView[Ge]=i}get destroyed(){return Si(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let i=this._lView[Je];if(Zt(i)){let e=i[or],n=e?e.indexOf(this):-1;n>-1&&(gr(i,n),Xo(e,n))}this._attachedToViewContainer=!1}Aa(this._lView[J],this._lView)}onDestroy(i){Ec(this._lView,i)}markForCheck(){tu(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ae]&=-129}reattach(){Xs(this._lView),this._lView[ae]|=128}detectChanges(){this._lView[ae]|=1024,eu(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ce(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let i=co(this._lView),e=this._lView[ti];e!==null&&!i&&qd(e,this._lView),bm(this._lView[J],this._lView)}attachToAppRef(i){if(this._attachedToViewContainer)throw new ce(902,!1);this._appRef=i;let e=co(this._lView),n=this._lView[ti];n!==null&&!e&&jm(n,this._lView),Xs(this._lView)}};var $t=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=oC;constructor(e,n,o){this._declarationLView=e,this._declarationTContainer=n,this.elementRef=o}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,n){return this.createEmbeddedViewImpl(e,n)}createEmbeddedViewImpl(e,n,o){let r=Ir(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:n,dehydratedView:o});return new ri(r)}}return t})();function oC(){return Va(it(),Y())}function Va(t,i){return t.type&4?new $t(i,t,wo(t,i)):null}function Do(t,i,e,n,o){let r=t.data[i];if(r===null)r=rC(t,i,e,n,o),Gf()&&(r.flags|=32);else if(r.type&64){r.type=e,r.value=n,r.attrs=o;let s=jf();r.injectorIndex=s===null?-1:s.injectorIndex}return uo(r,!0),r}function rC(t,i,e,n,o){let r=Fc(),s=Ac(),a=s?r:r&&r.parent,l=t.data[i]=aC(t,a,e,i,n,o);return sC(t,l,r,s),l}function sC(t,i,e,n){t.firstChild===null&&(t.firstChild=i),e!==null&&(n?e.child==null&&i.parent!==null&&(e.child=i):e.next===null&&(e.next=i,i.prev=e))}function aC(t,i,e,n,o,r){let s=i?i.injectorIndex:-1,a=0;return kc()&&(a|=128),{type:e,index:n,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:o,attrs:r,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:i,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var b4=new RegExp(`^(\\d+)*(${Gv}|${Uv})*(.*)`);function lC(t){let i=t[vc]??[],n=t[Je][Fe],o=[];for(let r of i)r.data[rm]!==void 0?o.push(r):cC(r,n);t[vc]=o}function cC(t,i){let e=0,n=t.firstChild;if(n){let o=t.data[om];for(;e<o;){let r=n.nextSibling;hm(i,n,!1),n=r,e++}}}var dC=()=>null,uC=()=>null;function ba(t,i){return dC(t,i)}function zm(t,i,e){return uC(t,i,e)}var $m=class{},Ba=class{},md=class{resolveComponentFactory(i){throw new ce(917,!1)}},Ha=class{static NULL=new md},Ai=class{},Dn=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>pC()}return t})();function pC(){let t=Y(),i=it(),e=jt(i.index,t);return(yn(e)?e:t)[Fe]}var Um=(()=>{class t{static \u0275prov=V({token:t,providedIn:"root",factory:()=>null})}return t})();var pa={},gd=class{injector;parentInjector;constructor(i,e){this.injector=i,this.parentInjector=e}get(i,e,n){let o=this.injector.get(i,pa,n);return o!==pa||e===pa?o:this.parentInjector.get(i,e,n)}};function va(t,i,e){let n=e?t.styles:null,o=e?t.classes:null,r=0;if(i!==null)for(let s=0;s<i.length;s++){let a=i[s];if(typeof a=="number")r=a;else if(r==1)o=zs(o,a);else if(r==2){let l=a,c=i[++s];n=zs(n,l+": "+c+";")}}e?t.styles=n:t.stylesWithoutHost=n,e?t.classes=o:t.classesWithoutHost=o}function K(t,i=0){let e=Y();if(e===null)return Ie(t,i);let n=it();return Qh(n,e,Ze(t),i)}function Gm(t,i,e,n,o){let r=n===null?null:{"":-1},s=o(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}mC(t,i,e,a,r,l,c)}r!==null&&n!==null&&fC(e,n,r)}function fC(t,i,e){let n=t.localNames=[];for(let o=0;o<i.length;o+=2){let r=e[i[o+1]];if(r==null)throw new ce(-301,!1);n.push(i[o],r)}}function hC(t,i,e){i.componentOffset=e,(t.components??=[]).push(i.index)}function mC(t,i,e,n,o,r,s){let a=n.length,l=!1;for(let g=0;g<a;g++){let m=n[g];!l&&Jt(m)&&(l=!0,hC(t,e,g)),sd(ga(e,i),t,m.type)}CC(e,t.data.length,a);for(let g=0;g<a;g++){let m=n[g];m.providersResolver&&m.providersResolver(m)}let c=!1,d=!1,h=_m(t,i,a,null);a>0&&(e.directiveToIndex=new Map);for(let g=0;g<a;g++){let m=n[g];if(e.mergedAttrs=go(e.mergedAttrs,m.hostAttrs),_C(t,e,i,h,m),vC(h,m,o),s!==null&&s.has(m)){let[I,O]=s.get(m);e.directiveToIndex.set(m.type,[h,I+e.directiveStart,O+e.directiveStart])}else(r===null||!r.has(m))&&e.directiveToIndex.set(m.type,h);m.contentQueries!==null&&(e.flags|=4),(m.hostBindings!==null||m.hostAttrs!==null||m.hostVars!==0)&&(e.flags|=64);let y=m.type.prototype;!c&&(y.ngOnChanges||y.ngOnInit||y.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(y.ngOnChanges||y.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),h++}gC(t,e,r)}function gC(t,i,e){for(let n=i.directiveStart;n<i.directiveEnd;n++){let o=t.data[n];if(e===null||!e.has(o))hh(0,i,o,n),hh(1,i,o,n),gh(i,n,!1);else{let r=e.get(o);mh(0,i,r,n),mh(1,i,r,n),gh(i,n,!0)}}}function hh(t,i,e,n){let o=t===0?e.inputs:e.outputs;for(let r in o)if(o.hasOwnProperty(r)){let s;t===0?s=i.inputs??={}:s=i.outputs??={},s[r]??=[],s[r].push(n),Wm(i,r)}}function mh(t,i,e,n){let o=t===0?e.inputs:e.outputs;for(let r in o)if(o.hasOwnProperty(r)){let s=o[r],a;t===0?a=i.hostDirectiveInputs??={}:a=i.hostDirectiveOutputs??={},a[s]??=[],a[s].push(n,r),Wm(i,s)}}function Wm(t,i){i==="class"?t.flags|=8:i==="style"&&(t.flags|=16)}function gh(t,i,e){let{attrs:n,inputs:o,hostDirectiveInputs:r}=t;if(n===null||!e&&o===null||e&&r===null||zd(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<n.length;){let l=n[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&o.hasOwnProperty(l)){let c=o[l];for(let d of c)if(d===i){s??=[],s.push(l,n[a+1]);break}}else if(e&&r.hasOwnProperty(l)){let c=r[l];for(let d=0;d<c.length;d+=2)if(c[d]===i){s??=[],s.push(c[d+1],n[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function _C(t,i,e,n,o){t.data[n]=o;let r=o.factory||(o.factory=yi(o.type,!0)),s=new Fi(r,Jt(o),K,null);t.blueprint[n]=s,e[n]=s,yC(t,i,n,_m(t,e,o.hostVars,Et),o)}function yC(t,i,e,n,o){let r=o.hostBindings;if(r){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~i.index;bC(s)!=a&&s.push(a),s.push(e,n,r)}}function bC(t){let i=t.length;for(;i>0;){let e=t[--i];if(typeof e=="number"&&e<0)return e}return 0}function vC(t,i,e){if(e){if(i.exportAs)for(let n=0;n<i.exportAs.length;n++)e[i.exportAs[n]]=t;Jt(i)&&(e[""]=t)}}function CC(t,i,e){t.flags|=1,t.directiveStart=i,t.directiveEnd=i+e,t.providerIndexes=i}function nu(t,i,e,n,o,r,s,a){let l=i[J],c=l.consts,d=zt(c,s),h=Do(l,t,e,n,d);return r&&Gm(l,i,h,zt(c,a),o),h.mergedAttrs=go(h.mergedAttrs,h.attrs),h.attrs!==null&&va(h,h.attrs,!1),h.mergedAttrs!==null&&va(h,h.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,h),h}function iu(t,i){jh(t,i),Cc(i)&&t.queries.elementEnd(i)}function wC(t,i,e,n,o,r){let s=i.consts,a=zt(s,o),l=Do(i,t,e,n,a);if(l.mergedAttrs=go(l.mergedAttrs,l.attrs),r!=null){let c=zt(s,r);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&va(l,l.attrs,!1),l.mergedAttrs!==null&&va(l,l.mergedAttrs,!0),i.queries!==null&&i.queries.elementStart(i,l),l}function ou(t){return ja(t)?Array.isArray(t)||!(t instanceof Map)&&Symbol.iterator in t:!1}function qm(t,i){if(Array.isArray(t))for(let e=0;e<t.length;e++)i(t[e]);else{let e=t[Symbol.iterator](),n;for(;!(n=e.next()).done;)i(n.value)}}function ja(t){return t!==null&&(typeof t=="function"||typeof t=="object")}function zn(t,i,e){return t[i]=e}function za(t,i){return t[i]}function mt(t,i,e){if(e===Et)return!1;let n=t[i];return Object.is(n,e)?!1:(t[i]=e,!0)}function bo(t,i,e,n){let o=mt(t,i,e);return mt(t,i+1,n)||o}function Km(t,i,e,n,o){let r=bo(t,i,e,n);return mt(t,i+2,o)||r}function $a(t,i,e,n,o,r){let s=bo(t,i,e,n);return bo(t,i+2,o,r)||s}function Yc(t,i,e){return function n(o){let r=Bn(t)?jt(t.index,i):i;tu(r,5);let s=i[Ge],a=_h(i,s,e,o),l=n.__ngNextListenerFn__;for(;l;)a=_h(i,s,l,o)&&a,l=l.__ngNextListenerFn__;return a}}function _h(t,i,e,n){let o=oe(null);try{return Pe(6,i,e),e(n)!==!1}catch(r){return H1(t,r),!1}finally{Pe(7,i,e),oe(o)}}function DC(t,i,e,n,o,r,s,a){let l=lo(t),c=!1,d=null;if(!n&&l&&(d=IC(i,e,r,t.index)),d!==null){let h=d.__ngLastListenerFn__||d;h.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let h=Ht(t,e),g=n?n(h):h;qv(e,g,r,a);let m=o.listen(g,r,a),y=n?I=>n(Bt(I[t.index])):t.index;Qm(y,i,e,r,a,m,!1)}return c}function IC(t,i,e,n){let o=t.cleanup;if(o!=null)for(let r=0;r<o.length-1;r+=2){let s=o[r];if(s===e&&o[r+1]===n){let a=i[so],l=o[r+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(r+=2)}return null}function Qm(t,i,e,n,o,r,s){let a=i.firstCreatePass?Sc(i):null,l=Tc(e),c=l.length;l.push(o,r),a&&a.push(n,t,c,(c+1)*(s?-1:1))}function yh(t,i,e,n,o,r){let s=i[e],a=i[J],c=a.data[e].outputs[n],h=s[c].subscribe(r);Qm(t.index,a,i,o,r,h,!0)}var _d=Symbol("BINDING");var yd=class extends Ha{ngModule;constructor(i){super(),this.ngModule=i}resolveComponentFactory(i){let e=wi(i);return new _r(e,this.ngModule)}};function xC(t){return Object.keys(t).map(i=>{let[e,n,o]=t[i],r={propName:e,templateName:i,isSignal:(n&Fa.SignalBased)!==0};return o&&(r.transform=o),r})}function EC(t){return Object.keys(t).map(i=>({propName:t[i],templateName:i}))}function TC(t,i,e){let n=i instanceof Pt?i:i?.injector;return n&&t.getStandaloneInjector!==null&&(n=t.getStandaloneInjector(n)||n),n?new gd(e,n):e}function SC(t){let i=t.get(Ai,null);if(i===null)throw new ce(407,!1);let e=t.get(Um,null),n=t.get(Ln,null);return{rendererFactory:i,sanitizer:e,changeDetectionScheduler:n,ngReflect:!1}}function MC(t,i){let e=Ym(t);return pm(i,e,e==="svg"?wc:e==="math"?Rf:null)}function Ym(t){return(t.selectors[0][0]||"div").toLowerCase()}var _r=class extends Ba{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=xC(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=EC(this.componentDef.outputs),this.cachedOutputs}constructor(i,e){super(),this.componentDef=i,this.ngModule=e,this.componentType=i.type,this.selector=c1(i.selectors),this.ngContentSelectors=i.ngContentSelectors??[],this.isBoundToModule=!!e}create(i,e,n,o,r,s){Pe(22);let a=oe(null);try{let l=this.componentDef,c=kC(n,l,s,r),d=TC(l,o||this.ngModule,i),h=SC(d),g=h.rendererFactory.createRenderer(null,l),m=n?O1(g,n,l.encapsulation,d):MC(l,g),y=s?.some(bh)||r?.some(P=>typeof P!="function"&&P.bindings.some(bh)),I=Ud(null,c,null,512|gm(l),null,null,h,g,d,null,lm(m,d,!0));I[ze]=m,oa(I);let O=null;try{let P=nu(ze,I,2,"#host",()=>c.directiveRegistry,!0,0);m&&(mm(g,m,P),_o(m,I)),La(c,I,P),jd(c,P,I),iu(c,P),e!==void 0&&RC(P,this.ngContentSelectors,e),O=jt(P.index,I),I[Ge]=O[Ge],Xd(c,I,null)}catch(P){throw O!==null&&ld(O),ld(I),P}finally{Pe(23),ra()}return new Ca(this.componentType,I,!!y)}finally{oe(a)}}};function kC(t,i,e,n){let o=t?["ng-version","20.2.4"]:d1(i.selectors[0]),r=null,s=null,a=0;if(e)for(let d of e)a+=d[_d].requiredVars,d.create&&(d.targetIdx=0,(r??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(n)for(let d=0;d<n.length;d++){let h=n[d];if(typeof h!="function")for(let g of h.bindings){a+=g[_d].requiredVars;let m=d+1;g.create&&(g.targetIdx=m,(r??=[]).push(g)),g.update&&(g.targetIdx=m,(s??=[]).push(g))}}let l=[i];if(n)for(let d of n){let h=typeof d=="function"?d:d.type,g=Ks(h);l.push(g)}return $d(0,null,OC(r,s),1,a,l,null,null,null,[o],null)}function OC(t,i){return!t&&!i?null:e=>{if(e&1&&t)for(let n of t)n.create();if(e&2&&i)for(let n of i)n.update()}}function bh(t){let i=t[_d].kind;return i==="input"||i==="twoWay"}var Ca=class extends $m{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(i,e,n){super(),this._rootLView=e,this._hasInputBindings=n,this._tNode=rr(e[J],ze),this.location=wo(this._tNode,e),this.instance=jt(this._tNode.index,e)[Ge],this.hostView=this.changeDetectorRef=new ri(e,void 0),this.componentType=i}setInput(i,e){this._hasInputBindings;let n=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(i)&&Object.is(this.previousInputValues.get(i),e))return;let o=this._rootLView,r=Pa(n,o[J],o,i,e);this.previousInputValues.set(i,e);let s=jt(n.index,o);tu(s,1)}get injector(){return new Ri(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(i){this.hostView.onDestroy(i)}};function RC(t,i,e){let n=t.projection=[];for(let o=0;o<i.length;o++){let r=e[o];n.push(r!=null&&r.length?Array.from(r):null)}}var In=(()=>{class t{static __NG_ELEMENT_ID__=FC}return t})();function FC(){let t=it();return Jm(t,Y())}var AC=In,Zm=class extends AC{_lContainer;_hostTNode;_hostLView;constructor(i,e,n){super(),this._lContainer=i,this._hostTNode=e,this._hostLView=n}get element(){return wo(this._hostTNode,this._hostLView)}get injector(){return new Ri(this._hostTNode,this._hostLView)}get parentInjector(){let i=Vd(this._hostTNode,this._hostLView);if($h(i)){let e=ma(i,this._hostLView),n=ha(i),o=e[J].data[n+8];return new Ri(o,e)}else return new Ri(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(i){let e=vh(this._lContainer);return e!==null&&e[i]||null}get length(){return this._lContainer.length-nt}createEmbeddedView(i,e,n){let o,r;typeof n=="number"?o=n:n!=null&&(o=n.index,r=n.injector);let s=ba(this._lContainer,i.ssrId),a=i.createEmbeddedViewImpl(e||{},r,s);return this.insertImpl(a,o,yo(this._hostTNode,s)),a}createComponent(i,e,n,o,r,s,a){let l=i&&!yv(i),c;if(l)c=e;else{let O=e||{};c=O.index,n=O.injector,o=O.projectableNodes,r=O.environmentInjector||O.ngModuleRef,s=O.directives,a=O.bindings}let d=l?i:new _r(wi(i)),h=n||this.parentInjector;if(!r&&d.ngModule==null){let P=(l?h:this.parentInjector).get(Pt,null);P&&(r=P)}let g=wi(d.componentType??{}),m=ba(this._lContainer,g?.id??null),y=m?.firstChild??null,I=d.create(h,o,y,r,s,a);return this.insertImpl(I.hostView,c,yo(this._hostTNode,m)),I}insert(i,e){return this.insertImpl(i,e,!0)}insertImpl(i,e,n){let o=i._lView;if(Nf(o)){let a=this.indexOf(i);if(a!==-1)this.detach(a);else{let l=o[Je],c=new Zm(l,l[It],l[Je]);c.detach(c.indexOf(i))}}let r=this._adjustIndex(e),s=this._lContainer;return xr(s,o,r,n),i.attachToViewContainerRef(),pc(Zc(s),r,i),i}move(i,e){return this.insert(i,e)}indexOf(i){let e=vh(this._lContainer);return e!==null?e.indexOf(i):-1}remove(i){let e=this._adjustIndex(i,-1),n=gr(this._lContainer,e);n&&(Xo(Zc(this._lContainer),e),Aa(n[J],n))}detach(i){let e=this._adjustIndex(i,-1),n=gr(this._lContainer,e);return n&&Xo(Zc(this._lContainer),e)!=null?new ri(n):null}_adjustIndex(i,e=0){return i??this.length+e}};function vh(t){return t[or]}function Zc(t){return t[or]||(t[or]=[])}function Jm(t,i){let e,n=i[t.index];return Zt(n)?e=n:(e=Vm(n,i,null,t),i[t.index]=e,Gd(i,e)),LC(e,i,t,n),new Zm(e,t,i)}function NC(t,i){let e=t[Fe],n=e.createComment(""),o=Ht(i,t),r=e.parentNode(o);return ya(e,r,n,e.nextSibling(o),!1),n}var LC=BC,PC=()=>!1;function VC(t,i,e){return PC(t,i,e)}function BC(t,i,e,n){if(t[ni])return;let o;e.type&8?o=Bt(n):o=NC(i,e),t[ni]=o}var bd=class t{queryList;matches=null;constructor(i){this.queryList=i}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},vd=class t{queries;constructor(i=[]){this.queries=i}createEmbeddedView(i){let e=i.queries;if(e!==null){let n=i.contentQueries!==null?i.contentQueries[0]:e.length,o=[];for(let r=0;r<n;r++){let s=e.getByIndex(r),a=this.queries[s.indexInDeclarationView];o.push(a.clone())}return new t(o)}return null}insertView(i){this.dirtyQueriesWithMatches(i)}detachView(i){this.dirtyQueriesWithMatches(i)}finishViewCreation(i){this.dirtyQueriesWithMatches(i)}dirtyQueriesWithMatches(i){for(let e=0;e<this.queries.length;e++)ru(i,e).matches!==null&&this.queries[e].setDirty()}},wa=class{flags;read;predicate;constructor(i,e,n=null){this.flags=e,this.read=n,typeof i=="string"?this.predicate=qC(i):this.predicate=i}},Cd=class t{queries;constructor(i=[]){this.queries=i}elementStart(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(i,e)}elementEnd(i){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(i)}embeddedTView(i){let e=null;for(let n=0;n<this.length;n++){let o=e!==null?e.length:0,r=this.getByIndex(n).embeddedTView(i,o);r&&(r.indexInDeclarationView=n,e!==null?e.push(r):e=[r])}return e!==null?new t(e):null}template(i,e){for(let n=0;n<this.queries.length;n++)this.queries[n].template(i,e)}getByIndex(i){return this.queries[i]}get length(){return this.queries.length}track(i){this.queries.push(i)}},wd=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(i,e=-1){this.metadata=i,this._declarationNodeIndex=e}elementStart(i,e){this.isApplyingToNode(e)&&this.matchTNode(i,e)}elementEnd(i){this._declarationNodeIndex===i.index&&(this._appliesToNextNode=!1)}template(i,e){this.elementStart(i,e)}embeddedTView(i,e){return this.isApplyingToNode(i)?(this.crossesNgTemplate=!0,this.addMatch(-i.index,e),new t(this.metadata)):null}isApplyingToNode(i){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,n=i.parent;for(;n!==null&&n.type&8&&n.index!==e;)n=n.parent;return e===(n!==null?n.index:-1)}return this._appliesToNextNode}matchTNode(i,e){let n=this.metadata.predicate;if(Array.isArray(n))for(let o=0;o<n.length;o++){let r=n[o];this.matchTNodeWithReadOption(i,e,HC(e,r)),this.matchTNodeWithReadOption(i,e,ua(e,i,r,!1,!1))}else n===$t?e.type&4&&this.matchTNodeWithReadOption(i,e,-1):this.matchTNodeWithReadOption(i,e,ua(e,i,n,!1,!1))}matchTNodeWithReadOption(i,e,n){if(n!==null){let o=this.metadata.read;if(o!==null)if(o===ot||o===In||o===$t&&e.type&4)this.addMatch(e.index,-2);else{let r=ua(e,i,o,!1,!1);r!==null&&this.addMatch(e.index,r)}else this.addMatch(e.index,n)}}addMatch(i,e){this.matches===null?this.matches=[i,e]:this.matches.push(i,e)}};function HC(t,i){let e=t.localNames;if(e!==null){for(let n=0;n<e.length;n+=2)if(e[n]===i)return e[n+1]}return null}function jC(t,i){return t.type&11?wo(t,i):t.type&4?Va(t,i):null}function zC(t,i,e,n){return e===-1?jC(i,t):e===-2?$C(t,i,n):hr(t,t[J],e,i)}function $C(t,i,e){if(e===ot)return wo(i,t);if(e===$t)return Va(i,t);if(e===In)return Jm(i,t)}function Xm(t,i,e,n){let o=i[_n].queries[n];if(o.matches===null){let r=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=r[c];a.push(zC(i,d,s[l+1],e.metadata.read))}}o.matches=a}return o.matches}function Dd(t,i,e,n){let o=t.queries.getByIndex(e),r=o.matches;if(r!==null){let s=Xm(t,i,o,e);for(let a=0;a<r.length;a+=2){let l=r[a];if(l>0)n.push(s[a/2]);else{let c=r[a+1],d=i[-l];for(let h=nt;h<d.length;h++){let g=d[h];g[ti]===g[Je]&&Dd(g[J],g,c,n)}if(d[Ti]!==null){let h=d[Ti];for(let g=0;g<h.length;g++){let m=h[g];Dd(m[J],m,c,n)}}}}}return n}function UC(t,i){return t[_n].queries[i].queryList}function eg(t,i,e){let n=new _a((e&4)===4);return Vf(t,i,n,n.destroy),(i[_n]??=new vd).queries.push(new bd(n))-1}function GC(t,i,e){let n=He();return n.firstCreatePass&&(tg(n,new wa(t,i,e),-1),(i&2)===2&&(n.staticViewQueries=!0)),eg(n,Y(),i)}function WC(t,i,e,n){let o=He();if(o.firstCreatePass){let r=it();tg(o,new wa(i,e,n),r.index),KC(o,t),(e&2)===2&&(o.staticContentQueries=!0)}return eg(o,Y(),e)}function qC(t){return t.split(",").map(i=>i.trim())}function tg(t,i,e){t.queries===null&&(t.queries=new Cd),t.queries.track(new wd(i,e))}function KC(t,i){let e=t.contentQueries||(t.contentQueries=[]),n=e.length?e[e.length-1]:-1;i!==n&&e.push(t.queries.length-1,i)}function ru(t,i){return t.queries.getByIndex(i)}function QC(t,i){let e=t[J],n=ru(e,i);return n.crossesNgTemplate?Dd(e,t,i,[]):Xm(e,t,n,i)}var Ch=new Set;function Li(t){Ch.has(t)||(Ch.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var yr=class{};var br=class extends yr{injector;componentFactoryResolver=new yd(this);instance=null;constructor(i){super();let e=new vi([...i.providers,{provide:yr,useValue:this},{provide:Ha,useValue:this.componentFactoryResolver}],i.parent||nr(),i.debugName,new Set(["environment"]));this.injector=e,i.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(i){this.injector.onDestroy(i)}};function ng(t,i,e=null){return new br({providers:t,parent:i,debugName:e,runEnvironmentInitializers:!0}).injector}var YC=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let n=mc(!1,e.type),o=n.length>0?ng([n],this._injector,`Standalone[${e.type.name}]`):null;this.cachedInjectors.set(e,o)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=V({token:t,providedIn:"environment",factory:()=>new t(Ie(Pt))})}return t})();function L(t){return wr(()=>{let i=ig(t),e=ge(H({},i),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Bd.OnPush,directiveDefs:null,pipeDefs:null,dependencies:i.standalone&&t.dependencies||null,getStandaloneInjector:i.standalone?o=>o.get(YC).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||jn.Emulated,styles:t.styles||Dt,_:null,schemas:t.schemas||null,tView:null,id:""});i.standalone&&Li("NgStandalone"),og(e);let n=t.dependencies;return e.directiveDefs=wh(n,ZC),e.pipeDefs=wh(n,If),e.id=ew(e),e})}function ZC(t){return wi(t)||Ks(t)}function he(t){return wr(()=>({type:t.type,bootstrap:t.bootstrap||Dt,declarations:t.declarations||Dt,imports:t.imports||Dt,exports:t.exports||Dt,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function JC(t,i){if(t==null)return Qt;let e={};for(let n in t)if(t.hasOwnProperty(n)){let o=t[n],r,s,a,l;Array.isArray(o)?(a=o[0],r=o[1],s=o[2]??r,l=o[3]||null):(r=o,s=o,a=Fa.None,l=null),e[r]=[n,a,l],i[r]=s}return e}function XC(t){if(t==null)return Qt;let i={};for(let e in t)t.hasOwnProperty(e)&&(i[t[e]]=e);return i}function ve(t){return wr(()=>{let i=ig(t);return og(i),i})}function ig(t){let i={};return{type:t.type,providersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:i,inputConfig:t.inputs||Qt,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Dt,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:JC(t.inputs,i),outputs:XC(t.outputs),debugInfo:null}}function og(t){t.features?.forEach(i=>i(t))}function wh(t,i){return t?()=>{let e=typeof t=="function"?t():t,n=[];for(let o of e){let r=i(o);r!==null&&n.push(r)}return n}:null}function ew(t){let i=0,e=typeof t.consts=="function"?"":t.consts,n=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let r of n.join("|"))i=Math.imul(31,i)+r.charCodeAt(0)<<0;return i+=2147483648,"c"+i}function tw(t){return Object.getPrototypeOf(t.prototype).constructor}function R(t){let i=tw(t.type),e=!0,n=[t];for(;i;){let o;if(Jt(t))o=i.\u0275cmp||i.\u0275dir;else{if(i.\u0275cmp)throw new ce(903,!1);o=i.\u0275dir}if(o){if(e){n.push(o);let s=t;s.inputs=Jc(t.inputs),s.declaredInputs=Jc(t.declaredInputs),s.outputs=Jc(t.outputs);let a=o.hostBindings;a&&sw(t,a);let l=o.viewQuery,c=o.contentQueries;if(l&&ow(t,l),c&&rw(t,c),nw(t,o),mf(t.outputs,o.outputs),Jt(o)&&o.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(o.data.animation)}}let r=o.features;if(r)for(let s=0;s<r.length;s++){let a=r[s];a&&a.ngInherit&&a(t),a===R&&(e=!1)}}i=Object.getPrototypeOf(i)}iw(n)}function nw(t,i){for(let e in i.inputs){if(!i.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let n=i.inputs[e];n!==void 0&&(t.inputs[e]=n,t.declaredInputs[e]=i.declaredInputs[e])}}function iw(t){let i=0,e=null;for(let n=t.length-1;n>=0;n--){let o=t[n];o.hostVars=i+=o.hostVars,o.hostAttrs=go(o.hostAttrs,e=go(e,o.hostAttrs))}}function Jc(t){return t===Qt?{}:t===Dt?[]:t}function ow(t,i){let e=t.viewQuery;e?t.viewQuery=(n,o)=>{i(n,o),e(n,o)}:t.viewQuery=i}function rw(t,i){let e=t.contentQueries;e?t.contentQueries=(n,o,r)=>{i(n,o,r),e(n,o,r)}:t.contentQueries=i}function sw(t,i){let e=t.hostBindings;e?t.hostBindings=(n,o)=>{i(n,o),e(n,o)}:t.hostBindings=i}function su(t){let i=e=>{let n=Array.isArray(t);e.hostDirectives===null?(e.resolveHostDirectives=aw,e.hostDirectives=n?t.map(Id):[t]):n?e.hostDirectives.unshift(...t.map(Id)):e.hostDirectives.unshift(t)};return i.ngInherit=!0,i}function aw(t){let i=[],e=!1,n=null,o=null;for(let r=0;r<t.length;r++){let s=t[r];if(s.hostDirectives!==null){let a=i.length;n??=new Map,o??=new Map,rg(s,i,n),o.set(s,[a,i.length-1])}r===0&&Jt(s)&&(e=!0,i.push(s))}for(let r=e?1:0;r<t.length;r++)i.push(t[r]);return[i,n,o]}function rg(t,i,e){if(t.hostDirectives!==null)for(let n of t.hostDirectives)if(typeof n=="function"){let o=n();for(let r of o)Dh(Id(r),i,e)}else Dh(n,i,e)}function Dh(t,i,e){let n=Ks(t.directive);lw(n.declaredInputs,t.inputs),rg(n,i,e),e.set(n,t),i.push(n)}function Id(t){return typeof t=="function"?{directive:Ze(t),inputs:Qt,outputs:Qt}:{directive:Ze(t.directive),inputs:Ih(t.inputs),outputs:Ih(t.outputs)}}function Ih(t){if(t===void 0||t.length===0)return Qt;let i={};for(let e=0;e<t.length;e+=2)i[t[e]]=t[e+1];return i}function lw(t,i){for(let e in i)if(i.hasOwnProperty(e)){let n=i[e],o=t[e];t[n]=o}}function sg(t,i,e,n,o,r,s,a){if(e.firstCreatePass){t.mergedAttrs=go(t.mergedAttrs,t.attrs);let d=t.tView=$d(2,t,o,r,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),uo(t,!1);let l=dw(e,i,t,n);sa()&&Kd(e,i,l,t),_o(l,i);let c=Vm(l,i,l,t);i[n+ze]=c,Gd(i,c),VC(c,t,i)}function cw(t,i,e,n,o,r,s,a,l,c,d){let h=e+ze,g;return i.firstCreatePass?(g=Do(i,h,4,s||null,a||null),ea()&&Gm(i,t,g,zt(i.consts,c),Yd),jh(i,g)):g=i.data[h],sg(g,t,i,e,n,o,r,l),lo(g)&&La(i,t,g),c!=null&&Dr(t,g,d),g}function vr(t,i,e,n,o,r,s,a,l,c,d){let h=e+ze,g;if(i.firstCreatePass){if(g=Do(i,h,4,s||null,a||null),c!=null){let m=zt(i.consts,c);g.localNames=[];for(let y=0;y<m.length;y+=2)g.localNames.push(m[y],-1)}}else g=i.data[h];return sg(g,t,i,e,n,o,r,l),c!=null&&Dr(t,g,d),g}function _(t,i,e,n,o,r,s,a){let l=Y(),c=He(),d=zt(c.consts,r);return cw(l,c,t,i,e,n,o,d,void 0,s,a),_}var dw=uw;function uw(t,i,e,n){return lr(!0),i[Fe].createComment("")}var au=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(au||{}),Er=new de(""),ag=!1,xd=class extends Ke{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(i=!1){super(),this.__isAsync=i,kf()&&(this.destroyRef=M(oi,{optional:!0})??void 0,this.pendingTasks=M(ki,{optional:!0})??void 0)}emit(i){let e=oe(null);try{super.next(i)}finally{oe(e)}}subscribe(i,e,n){let o=i,r=e||(()=>null),s=n;if(i&&typeof i=="object"){let l=i;o=l.next?.bind(l),r=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(r=this.wrapInTimeout(r),o&&(o=this.wrapInTimeout(o)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:o,error:r,complete:s});return i instanceof wt&&i.add(a),a}wrapInTimeout(i){return e=>{let n=this.pendingTasks?.add();setTimeout(()=>{try{i(e)}finally{n!==void 0&&this.pendingTasks?.remove(n)}})}}},A=xd;function lg(t){let i,e;function n(){t=Oi;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),i!==void 0&&clearTimeout(i)}catch{}}return i=setTimeout(()=>{t(),n()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),n()})),()=>n()}function xh(t){return queueMicrotask(()=>t()),()=>{t=Oi}}var lu="isAngularZone",Da=lu+"_ID",pw=0,we=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new A(!1);onMicrotaskEmpty=new A(!1);onStable=new A(!1);onError=new A(!1);constructor(i){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:r=ag}=i;if(typeof Zone>"u")throw new ce(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!o&&n,s.shouldCoalesceRunChangeDetection=o,s.callbackScheduled=!1,s.scheduleInRootZone=r,mw(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(lu)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new ce(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new ce(909,!1)}run(i,e,n){return this._inner.run(i,e,n)}runTask(i,e,n,o){let r=this._inner,s=r.scheduleEventTask("NgZoneEvent: "+o,i,fw,Oi,Oi);try{return r.runTask(s,e,n)}finally{r.cancelTask(s)}}runGuarded(i,e,n){return this._inner.runGuarded(i,e,n)}runOutsideAngular(i){return this._outer.run(i)}},fw={};function cu(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function hw(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function i(){lg(()=>{t.callbackScheduled=!1,Ed(t),t.isCheckStableRunning=!0,cu(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{i()}):t._outer.run(()=>{i()}),Ed(t)}function mw(t){let i=()=>{hw(t)},e=pw++;t._inner=t._inner.fork({name:"angular",properties:{[lu]:!0,[Da]:e,[Da+e]:!0},onInvokeTask:(n,o,r,s,a,l)=>{if(gw(l))return n.invokeTask(r,s,a,l);try{return Eh(t),n.invokeTask(r,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&i(),Th(t)}},onInvoke:(n,o,r,s,a,l,c)=>{try{return Eh(t),n.invoke(r,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!_w(l)&&i(),Th(t)}},onHasTask:(n,o,r,s)=>{n.hasTask(r,s),o===r&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,Ed(t),cu(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(n,o,r,s)=>(n.handleError(r,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function Ed(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function Eh(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Th(t){t._nesting--,cu(t)}var Ia=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new A;onMicrotaskEmpty=new A;onStable=new A;onError=new A;run(i,e,n){return i.apply(e,n)}runGuarded(i,e,n){return i.apply(e,n)}runOutsideAngular(i){return i()}runTask(i,e,n,o){return i.apply(e,n)}};function gw(t){return cg(t,"__ignore_ng_zone__")}function _w(t){return cg(t,"__scheduler_tick__")}function cg(t,i){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[i]===!0}var dg=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=V({token:t,providedIn:"root",factory:()=>new t})}return t})();var du=new de("");function Io(t){return!!t&&typeof t.then=="function"}function uu(t){return!!t&&typeof t.subscribe=="function"}var ug=new de("");var pu=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,n)=>{this.resolve=e,this.reject=n});appInits=M(ug,{optional:!0})??[];injector=M(ht);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let o of this.appInits){let r=Qs(this.injector,o);if(Io(r))e.push(r);else if(uu(r)){let s=new Promise((a,l)=>{r.subscribe({complete:a,error:l})});e.push(s)}}let n=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{n()}).catch(o=>{this.reject(o)}),e.length===0&&n(),this.initialized=!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pg=new de("");function fg(){Al(()=>{let t="";throw new ce(600,t)})}function hg(t){return t.isBoundToModule}var yw=10;var xo=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=M(Cn);afterRenderManager=M(dg);zonelessEnabled=M(cr);rootEffectScheduler=M(ur);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new Ke;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=M(ki);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(mi(e=>!e))}constructor(){M(Er,{optional:!0})}whenStable(){let e;return new Promise(n=>{e=this.isStable.subscribe({next:o=>{o&&n()}})}).finally(()=>{e.unsubscribe()})}_injector=M(Pt);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,n){return this.bootstrapImpl(e,n)}bootstrapImpl(e,n,o=ht.NULL){return this._injector.get(we).run(()=>{Pe(10);let s=e instanceof Ba;if(!this._injector.get(pu).done){let y="";throw new ce(405,y)}let l;s?l=e:l=this._injector.get(Ha).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=hg(l)?void 0:this._injector.get(yr),d=n||l.selector,h=l.create(o,[],d,c),g=h.location.nativeElement,m=h.injector.get(du,null);return m?.registerApplication(g),h.onDestroy(()=>{this.detachView(h.hostView),fr(this.components,h),m?.unregisterApplication(g)}),this._loadComponent(h),Pe(11,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Pe(12),this.tracingSnapshot!==null?this.tracingSnapshot.run(au.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw new ce(101,!1);let e=oe(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,oe(e),this.afterTick.next(),Pe(13)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ai,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<yw;)Pe(14),this.synchronizeOnce(),Pe(15)}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let n=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!n&&!sr(o))continue;let r=n&&!this.zonelessEnabled?0:1;eu(o,r),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>sr(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let n=e;this._views.push(n),n.attachToAppRef(this)}detachView(e){let n=e;fr(this._views,n),n.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(e),this._injector.get(pg,[]).forEach(o=>o(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>fr(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new ce(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fr(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var Xc="aria";function xn(t,i){let e=Y(),n=Hn();if(mt(e,n,i)){let o=He(),r=fo();if(Pa(r,o,e,t,i))Bn(r)&&Tm(e,r.index);else{let a=Ht(r,e),l=bw(t);Sm(e[Fe],a,null,r.value,l,i,null)}}return xn}function bw(t){return t.charAt(Xc.length)!=="-"?Xc+"-"+t.slice(Xc.length).toLowerCase():t}function k(t,i,e,n){let o=Y(),r=Hn();if(mt(o,r,i)){let s=He(),a=fo();V1(a,o,t,i,e,n)}return k}var fu=new de("",{providedIn:"root",factory:()=>!1}),hu=new de("",{providedIn:"root",factory:()=>vw}),vw=4e3;var x4=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Td=class{destroy(i){}updateValue(i,e){}swap(i,e){let n=Math.min(i,e),o=Math.max(i,e),r=this.detach(o);if(o-n>1){let s=this.detach(n);this.attach(n,r),this.attach(o,s)}else this.attach(n,r)}move(i,e){this.attach(e,this.detach(i))}};function ed(t,i,e,n,o){return t===e&&Object.is(i,n)?1:Object.is(o(t,i),o(e,n))?-1:0}function Cw(t,i,e){let n,o,r=0,s=t.length-1,a=void 0;if(Array.isArray(i)){let l=i.length-1;for(;r<=s&&r<=l;){let c=t.at(r),d=i[r],h=ed(r,c,r,d,e);if(h!==0){h<0&&t.updateValue(r,d),r++;continue}let g=t.at(s),m=i[l],y=ed(s,g,l,m,e);if(y!==0){y<0&&t.updateValue(s,m),s--,l--;continue}let I=e(r,c),O=e(s,g),P=e(r,d);if(Object.is(P,O)){let Z=e(l,m);Object.is(Z,I)?(t.swap(r,s),t.updateValue(s,m),l--,s--):t.move(s,r),t.updateValue(r,d),r++;continue}if(n??=new xa,o??=Mh(t,r,s,e),Sd(t,n,r,P))t.updateValue(r,d),r++,s++;else if(o.has(P))n.set(I,t.detach(r)),s--;else{let Z=t.create(r,i[r]);t.attach(r,Z),r++,s++}}for(;r<=l;)Sh(t,n,e,r,i[r]),r++}else if(i!=null){let l=i[Symbol.iterator](),c=l.next();for(;!c.done&&r<=s;){let d=t.at(r),h=c.value,g=ed(r,d,r,h,e);if(g!==0)g<0&&t.updateValue(r,h),r++,c=l.next();else{n??=new xa,o??=Mh(t,r,s,e);let m=e(r,h);if(Sd(t,n,r,m))t.updateValue(r,h),r++,s++,c=l.next();else if(!o.has(m))t.attach(r,t.create(r,h)),r++,s++,c=l.next();else{let y=e(r,d);n.set(y,t.detach(r)),s--}}}for(;!c.done;)Sh(t,n,e,t.length,c.value),c=l.next()}for(;r<=s;)t.destroy(t.detach(s--));n?.forEach(l=>{t.destroy(l)})}function Sd(t,i,e,n){return i!==void 0&&i.has(n)?(t.attach(e,i.get(n)),i.delete(n),!0):!1}function Sh(t,i,e,n,o){if(Sd(t,i,n,e(n,o)))t.updateValue(n,o);else{let r=t.create(n,o);t.attach(n,r)}}function Mh(t,i,e,n){let o=new Set;for(let r=i;r<=e;r++)o.add(n(r,t.at(r)));return o}var xa=class{kvMap=new Map;_vMap=void 0;has(i){return this.kvMap.has(i)}delete(i){if(!this.has(i))return!1;let e=this.kvMap.get(i);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(i,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(i),!0}get(i){return this.kvMap.get(i)}set(i,e){if(this.kvMap.has(i)){let n=this.kvMap.get(i);this._vMap===void 0&&(this._vMap=new Map);let o=this._vMap;for(;o.has(n);)n=o.get(n);o.set(n,e)}else this.kvMap.set(i,e)}forEach(i){for(let[e,n]of this.kvMap)if(i(n,e),this._vMap!==void 0){let o=this._vMap;for(;o.has(n);)n=o.get(n),i(n,e)}}};function tn(t,i,e,n,o,r,s,a){Li("NgControlFlow");let l=Y(),c=He(),d=zt(c.consts,r);return vr(l,c,t,i,e,n,o,d,256,s,a),mu}function mu(t,i,e,n,o,r,s,a){Li("NgControlFlow");let l=Y(),c=He(),d=zt(c.consts,r);return vr(l,c,t,i,e,n,o,d,512,s,a),mu}function nn(t,i){Li("NgControlFlow");let e=Y(),n=Hn(),o=e[n]!==Et?e[n]:-1,r=o!==-1?Ea(e,ze+o):void 0,s=0;if(mt(e,n,t)){let a=oe(null);try{if(r!==void 0&&Hm(r,s),t!==-1){let l=ze+t,c=Ea(e,l),d=Rd(e[J],l),h=zm(c,d,e),g=Ir(e,d,i,{dehydratedView:h});xr(c,g,s,yo(d,h))}}finally{oe(a)}}else if(r!==void 0){let a=Bm(r,s);a!==void 0&&(a[Ge]=i)}}var Md=class{lContainer;$implicit;$index;constructor(i,e,n){this.lContainer=i,this.$implicit=e,this.$index=n}get $count(){return this.lContainer.length-nt}};var kd=class{hasEmptyBlock;trackByFn;liveCollection;constructor(i,e,n){this.hasEmptyBlock=i,this.trackByFn=e,this.liveCollection=n}};function gu(t,i,e,n,o,r,s,a,l,c,d,h,g){Li("NgControlFlow");let m=Y(),y=He(),I=l!==void 0,O=Y(),P=a?s.bind(O[xt][Ge]):s,Z=new kd(I,P);O[ze+t]=Z,vr(m,y,t+1,i,e,n,o,zt(y.consts,r),256),I&&vr(m,y,t+2,l,c,d,h,zt(y.consts,g),512)}var Od=class extends Td{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(i,e,n){super(),this.lContainer=i,this.hostLView=e,this.templateTNode=n}get length(){return this.lContainer.length-nt}at(i){return this.getLView(i)[Ge].$implicit}attach(i,e){let n=e[Di];this.needsIndexUpdate||=i!==this.length,xr(this.lContainer,e,i,yo(this.templateTNode,n))}detach(i){return this.needsIndexUpdate||=i!==this.length-1,ww(this.lContainer,i)}create(i,e){let n=ba(this.lContainer,this.templateTNode.tView.ssrId),o=Ir(this.hostLView,this.templateTNode,new Md(this.lContainer,e,i),{dehydratedView:n});return this.operationsCounter?.recordCreate(),o}destroy(i){Aa(i[J],i),this.operationsCounter?.recordDestroy()}updateValue(i,e){this.getLView(i)[Ge].$implicit=e}reset(){this.needsIndexUpdate=!1,this.operationsCounter?.reset()}updateIndexes(){if(this.needsIndexUpdate)for(let i=0;i<this.length;i++)this.getLView(i)[Ge].$index=i}getLView(i){return Dw(this.lContainer,i)}};function _u(t){let i=oe(null),e=vn();try{let n=Y(),o=n[J],r=n[e],s=e+1,a=Ea(n,s);if(r.liveCollection===void 0){let c=Rd(o,s);r.liveCollection=new Od(a,n,c)}else r.liveCollection.reset();let l=r.liveCollection;if(Cw(l,t,r.trackByFn),l.updateIndexes(),r.hasEmptyBlock){let c=Hn(),d=l.length===0;if(mt(n,c,d)){let h=e+2,g=Ea(n,h);if(d){let m=Rd(o,h),y=zm(g,m,n),I=Ir(n,m,void 0,{dehydratedView:y});xr(g,I,0,yo(m,y))}else o.firstUpdatePass&&lC(g),Hm(g,0)}}}finally{oe(i)}}function Ea(t,i){return t[i]}function ww(t,i){return gr(t,i)}function Dw(t,i){return Bm(t,i)}function Rd(t,i){return rr(t,i)}function p(t,i,e){let n=Y(),o=Hn();if(mt(n,o,i)){let r=He(),s=fo();xm(s,n,t,i,n[Fe],e)}return p}function Fd(t,i,e,n,o){Pa(i,t,e,o?"class":"style",n)}function D(t,i,e,n){let o=Y(),r=o[J],s=t+ze,a=r.firstCreatePass?nu(s,o,2,i,Yd,ea(),e,n):r.data[s];if(Zd(a,o,t,i,mg),lo(a)){let l=o[J];La(l,o,a),jd(l,a,o)}return n!=null&&Dr(o,a),D}function C(){let t=He(),i=it(),e=Jd(i);return t.firstCreatePass&&iu(t,e),Oc(e)&&Rc(),Mc(),e.classesWithoutHost!=null&&Iv(e)&&Fd(t,e,Y(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&xv(e)&&Fd(t,e,Y(),e.stylesWithoutHost,!1),C}function G(t,i,e,n){return D(t,i,e,n),C(),G}function ye(t,i,e,n){let o=Y(),r=o[J],s=t+ze,a=r.firstCreatePass?wC(s,r,2,i,e,n):r.data[s];return Zd(a,o,t,i,mg),n!=null&&Dr(o,a),ye}function be(){let t=it(),i=Jd(t);return Oc(i)&&Rc(),Mc(),be}function U(t,i,e,n){return ye(t,i,e,n),be(),U}var mg=(t,i,e,n,o)=>(lr(!0),pm(i[Fe],n,Xf()));function z(t,i,e){let n=Y(),o=n[J],r=t+ze,s=o.firstCreatePass?nu(r,n,8,"ng-container",Yd,ea(),i,e):o.data[r];if(Zd(s,n,t,"ng-container",Iw),lo(s)){let a=n[J];La(a,n,s),jd(a,s,n)}return e!=null&&Dr(n,s),z}function $(){let t=He(),i=it(),e=Jd(i);return t.firstCreatePass&&iu(t,e),$}function j(t,i,e){return z(t,i,e),$(),j}var Iw=(t,i,e,n,o)=>(lr(!0),f1(i[Fe],""));function q(){return Y()}function Ve(t,i,e){let n=Y(),o=Hn();if(mt(n,o,i)){let r=He(),s=fo();Em(s,n,t,i,n[Fe],e)}return Ve}var Tr="en-US";var xw=Tr;function gg(t){typeof t=="string"&&(xw=t.toLowerCase().replace(/_/g,"-"))}function B(t,i,e){let n=Y(),o=He(),r=it();return _g(o,n,n[Fe],r,t,i,e),B}function _g(t,i,e,n,o,r,s){let a=!0,l=null;if((n.type&3||s)&&(l??=Yc(n,i,r),DC(n,t,i,s,e,o,r,l)&&(a=!1)),a){let c=n.outputs?.[o],d=n.hostDirectiveOutputs?.[o];if(d&&d.length)for(let h=0;h<d.length;h+=2){let g=d[h],m=d[h+1];l??=Yc(n,i,r),yh(n,i,g,m,o,l)}if(c&&c.length)for(let h of c)l??=Yc(n,i,r),yh(n,i,h,o,o,l)}}function u(t=1){return Jf(t)}function Ew(t,i){let e=null,n=o1(t);for(let o=0;o<i.length;o++){let r=i[o];if(r==="*"){e=o;continue}if(n===null?um(t,r,!0):a1(n,r))return o}return e}function rt(t){let i=Y()[xt][It];if(!i.projection){let e=t?t.length:1,n=i.projection=wf(e,null),o=n.slice(),r=i.child;for(;r!==null;){if(r.type!==128){let s=t?Ew(r,t):0;s!==null&&(o[s]?o[s].projectionNext=r:n[s]=r,o[s]=r)}r=r.next}}}function et(t,i=0,e,n,o,r){let s=Y(),a=He(),l=n?t+1:null;l!==null&&vr(s,a,l,n,o,r,null,e);let c=Do(a,ze+t,16,null,e||null);c.projection===null&&(c.projection=i),Nc();let h=!s[Di]||kc();s[xt][It].projection[c.projection]===null&&l!==null?Tw(s,a,l):h&&!Oa(c)&&S1(a,s,c)}function Tw(t,i,e){let n=ze+e,o=i.data[n],r=t[n],s=ba(r,o.tView.ssrId),a=Ir(t,o,void 0,{dehydratedView:s});xr(r,a,0,yo(o,s))}function F(t,i,e,n){WC(t,i,e,n)}function Ce(t,i,e){GC(t,i,e)}function x(t){let i=Y(),e=He(),n=Vc();ia(n+1);let o=ru(e,n);if(t.dirty&&Af(i)===((o.metadata.flags&2)===2)){if(o.matches===null)t.reset([]);else{let r=QC(i,n);t.reset(r,Vv),t.notifyOnChanges()}return!0}return!1}function E(){return UC(Y(),Vc())}function ct(t){let i=zf();return Ff(i,ze+t)}function la(t,i){return t<<17|i<<2}function Ni(t){return t>>17&32767}function Sw(t){return(t&2)==2}function Mw(t,i){return t&131071|i<<17}function Ad(t){return t|2}function vo(t){return(t&131068)>>2}function td(t,i){return t&-131069|i<<2}function kw(t){return(t&1)===1}function Nd(t){return t|1}function Ow(t,i,e,n,o,r){let s=r?i.classBindings:i.styleBindings,a=Ni(s),l=vo(s);t[n]=e;let c=!1,d;if(Array.isArray(e)){let h=e;d=h[1],(d===null||oo(h,d)>0)&&(c=!0)}else d=e;if(o)if(l!==0){let g=Ni(t[a+1]);t[n+1]=la(g,a),g!==0&&(t[g+1]=td(t[g+1],n)),t[a+1]=Mw(t[a+1],n)}else t[n+1]=la(a,0),a!==0&&(t[a+1]=td(t[a+1],n)),a=n;else t[n+1]=la(l,0),a===0?a=n:t[l+1]=td(t[l+1],n),l=n;c&&(t[n+1]=Ad(t[n+1])),kh(t,d,n,!0),kh(t,d,n,!1),Rw(i,d,t,n,r),s=la(a,l),r?i.classBindings=s:i.styleBindings=s}function Rw(t,i,e,n,o){let r=o?t.residualClasses:t.residualStyles;r!=null&&typeof i=="string"&&oo(r,i)>=0&&(e[n+1]=Nd(e[n+1]))}function kh(t,i,e,n){let o=t[e+1],r=i===null,s=n?Ni(o):vo(o),a=!1;for(;s!==0&&(a===!1||r);){let l=t[s],c=t[s+1];Fw(l,i)&&(a=!0,t[s+1]=n?Nd(c):Ad(c)),s=n?Ni(c):vo(c)}a&&(t[e+1]=n?Ad(o):Nd(o))}function Fw(t,i){return t===null||i==null||(Array.isArray(t)?t[1]:t)===i?!0:Array.isArray(t)&&typeof i=="string"?oo(t,i)>=0:!1}var Xe={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function yg(t){return t.substring(Xe.key,Xe.keyEnd)}function Aw(t){return t.substring(Xe.value,Xe.valueEnd)}function Nw(t){return Cg(t),bg(t,Co(t,0,Xe.textEnd))}function bg(t,i){let e=Xe.textEnd;return e===i?-1:(i=Xe.keyEnd=Pw(t,Xe.key=i,e),Co(t,i,e))}function Lw(t){return Cg(t),vg(t,Co(t,0,Xe.textEnd))}function vg(t,i){let e=Xe.textEnd,n=Xe.key=Co(t,i,e);return e===n?-1:(n=Xe.keyEnd=Vw(t,n,e),n=Oh(t,n,e,58),n=Xe.value=Co(t,n,e),n=Xe.valueEnd=Bw(t,n,e),Oh(t,n,e,59))}function Cg(t){Xe.key=0,Xe.keyEnd=0,Xe.value=0,Xe.valueEnd=0,Xe.textEnd=t.length}function Co(t,i,e){for(;i<e&&t.charCodeAt(i)<=32;)i++;return i}function Pw(t,i,e){for(;i<e&&t.charCodeAt(i)>32;)i++;return i}function Vw(t,i,e){let n;for(;i<e&&((n=t.charCodeAt(i))===45||n===95||(n&-33)>=65&&(n&-33)<=90||n>=48&&n<=57);)i++;return i}function Oh(t,i,e,n){return i=Co(t,i,e),i<e&&i++,i}function Bw(t,i,e){let n=-1,o=-1,r=-1,s=i,a=s;for(;s<e;){let l=t.charCodeAt(s++);if(l===59)return a;l===34||l===39?a=s=Rh(t,l,s,e):i===s-4&&r===85&&o===82&&n===76&&l===40?a=s=Rh(t,41,s,e):l>32&&(a=s),r=o,o=n,n=l&-33}return a}function Rh(t,i,e,n){let o=-1,r=e;for(;r<n;){let s=t.charCodeAt(r++);if(s==i&&o!==92)return r;s==92&&o===92?o=0:o=s}throw new Error}function St(t,i,e){return wg(t,i,e,!1),St}function Eo(t,i){return wg(t,i,null,!0),Eo}function Tt(t){Dg(Eg,Hw,t,!1)}function Hw(t,i){for(let e=Lw(i);e>=0;e=vg(i,e))Eg(t,yg(i),Aw(i))}function w(t){Dg(qw,jw,t,!0)}function jw(t,i){for(let e=Nw(i);e>=0;e=bg(i,e))er(t,yg(i),!0)}function wg(t,i,e,n){let o=Y(),r=He(),s=ta(2);if(r.firstUpdatePass&&xg(r,t,s,n),i!==Et&&mt(o,s,i)){let a=r.data[vn()];Tg(r,a,o,o[Fe],t,o[s+1]=Qw(i,e),n,s)}}function Dg(t,i,e,n){let o=He(),r=ta(2);o.firstUpdatePass&&xg(o,null,r,n);let s=Y();if(e!==Et&&mt(s,r,e)){let a=o.data[vn()];if(Sg(a,n)&&!Ig(o,r)){let l=n?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=zs(l,e||"")),Fd(o,a,s,e,n)}else Kw(o,a,s,s[Fe],s[r+1],s[r+1]=Ww(t,i,e),n,r)}}function Ig(t,i){return i>=t.expandoStartIndex}function xg(t,i,e,n){let o=t.data;if(o[e+1]===null){let r=o[vn()],s=Ig(t,e);Sg(r,n)&&i===null&&!s&&(i=!1),i=zw(o,r,i,n),Ow(o,r,i,e,s,n)}}function zw(t,i,e,n){let o=Kf(t),r=n?i.residualClasses:i.residualStyles;if(o===null)(n?i.classBindings:i.styleBindings)===0&&(e=nd(null,t,i,e,n),e=Cr(e,i.attrs,n),r=null);else{let s=i.directiveStylingLast;if(s===-1||t[s]!==o)if(e=nd(o,t,i,e,n),r===null){let l=$w(t,i,n);l!==void 0&&Array.isArray(l)&&(l=nd(null,t,i,l[1],n),l=Cr(l,i.attrs,n),Uw(t,i,n,l))}else r=Gw(t,i,n)}return r!==void 0&&(n?i.residualClasses=r:i.residualStyles=r),e}function $w(t,i,e){let n=e?i.classBindings:i.styleBindings;if(vo(n)!==0)return t[Ni(n)]}function Uw(t,i,e,n){let o=e?i.classBindings:i.styleBindings;t[Ni(o)]=n}function Gw(t,i,e){let n,o=i.directiveEnd;for(let r=1+i.directiveStylingLast;r<o;r++){let s=t[r].hostAttrs;n=Cr(n,s,e)}return Cr(n,i.attrs,e)}function nd(t,i,e,n,o){let r=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(r=i[a],n=Cr(n,r.hostAttrs,o),r!==t);)a++;return t!==null&&(e.directiveStylingLast=a),n}function Cr(t,i,e){let n=e?1:2,o=-1;if(i!==null)for(let r=0;r<i.length;r++){let s=i[r];typeof s=="number"?o=s:o===n&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),er(t,s,e?!0:i[++r]))}return t===void 0?null:t}function Ww(t,i,e){if(e==null||e==="")return Dt;let n=[],o=Ra(e);if(Array.isArray(o))for(let r=0;r<o.length;r++)t(n,o[r],!0);else if(typeof o=="object")for(let r in o)o.hasOwnProperty(r)&&t(n,r,o[r]);else typeof o=="string"&&i(n,o);return n}function Eg(t,i,e){er(t,i,Ra(e))}function qw(t,i,e){let n=String(i);n!==""&&!n.includes(" ")&&er(t,n,e)}function Kw(t,i,e,n,o,r,s,a){o===Et&&(o=Dt);let l=0,c=0,d=0<o.length?o[0]:null,h=0<r.length?r[0]:null;for(;d!==null||h!==null;){let g=l<o.length?o[l+1]:void 0,m=c<r.length?r[c+1]:void 0,y=null,I;d===h?(l+=2,c+=2,g!==m&&(y=h,I=m)):h===null||d!==null&&d<h?(l+=2,y=d):(c+=2,y=h,I=m),y!==null&&Tg(t,i,e,n,y,I,s,a),d=l<o.length?o[l]:null,h=c<r.length?r[c]:null}}function Tg(t,i,e,n,o,r,s,a){if(!(i.type&3))return;let l=t.data,c=l[a+1],d=kw(c)?Fh(l,i,e,o,vo(c),s):void 0;if(!Ta(d)){Ta(r)||Sw(c)&&(r=Fh(l,null,e,o,a,s));let h=Dc(vn(),e);k1(n,s,h,o,r)}}function Fh(t,i,e,n,o,r){let s=i===null,a;for(;o>0;){let l=t[o],c=Array.isArray(l),d=c?l[1]:l,h=d===null,g=e[o+1];g===Et&&(g=h?Dt:void 0);let m=h?qs(g,n):d===n?g:void 0;if(c&&!Ta(m)&&(m=qs(l,n)),Ta(m)&&(a=m,s))return a;let y=t[o+1];o=s?Ni(y):vo(y)}if(i!==null){let l=r?i.residualClasses:i.residualStyles;l!=null&&(a=qs(l,n))}return a}function Ta(t){return t!==void 0}function Qw(t,i){return t==null||t===""||(typeof i=="string"?t=t+i:typeof t=="object"&&(t=Jn(Ra(t)))),t}function Sg(t,i){return(t.flags&(i?8:16))!==0}function ee(t,i=""){let e=Y(),n=He(),o=t+ze,r=n.firstCreatePass?Do(n,o,1,i,null):n.data[o],s=Yw(n,e,r,i,t);e[o]=s,sa()&&Kd(n,e,s,r),uo(r,!1)}var Yw=(t,i,e,n,o)=>(lr(!0),u1(i[Fe],n));function Zw(t,i,e,n=""){return mt(t,Hn(),e)?i+io(e)+n:Et}function Jw(t,i,e,n,o,r=""){let s=$f(),a=bo(t,s,e,o);return ta(2),a?i+io(e)+n+io(o)+r:Et}function xe(t){return st("",t),xe}function st(t,i,e){let n=Y(),o=Zw(n,t,i,e);return o!==Et&&Mg(n,vn(),o),st}function Ua(t,i,e,n,o){let r=Y(),s=Jw(r,t,i,e,n,o);return s!==Et&&Mg(r,vn(),s),Ua}function Mg(t,i,e){let n=Dc(i,t);p1(t[Fe],n,e)}function Pi(t,i,e){Uc(i)&&(i=i());let n=Y(),o=Hn();if(mt(n,o,i)){let r=He(),s=fo();xm(s,n,t,i,n[Fe],e)}return Pi}function To(t,i){let e=Uc(t);return e&&t.set(i),e}function Vi(t,i){let e=Y(),n=He(),o=it();return _g(n,e,e[Fe],o,t,i),Vi}function Xw(t,i,e){let n=He();if(n.firstCreatePass){let o=Jt(t);Ld(e,n.data,n.blueprint,o,!0),Ld(i,n.data,n.blueprint,o,!1)}}function Ld(t,i,e,n,o){if(t=Ze(t),Array.isArray(t))for(let r=0;r<t.length;r++)Ld(t[r],i,e,n,o);else{let r=He(),s=Y(),a=it(),l=bi(t)?t:Ze(t.provide),c=_c(t),d=a.providerIndexes&1048575,h=a.directiveStart,g=a.providerIndexes>>20;if(bi(t)||!t.multi){let m=new Fi(c,o,K,null),y=od(l,i,o?d:d+g,h);y===-1?(sd(ga(a,s),r,l),id(r,t,i.length),i.push(l),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),e.push(m),s.push(m)):(e[y]=m,s[y]=m)}else{let m=od(l,i,d+g,h),y=od(l,i,d,d+g),I=m>=0&&e[m],O=y>=0&&e[y];if(o&&!O||!o&&!I){sd(ga(a,s),r,l);let P=nD(o?tD:eD,e.length,o,n,c,t);!o&&O&&(e[y].providerFactory=P),id(r,t,i.length,0),i.push(l),a.directiveStart++,a.directiveEnd++,o&&(a.providerIndexes+=1048576),e.push(P),s.push(P)}else{let P=kg(e[o?y:m],c,!o&&n);id(r,t,m>-1?m:y,P)}!o&&n&&O&&e[y].componentProviders++}}}function id(t,i,e,n){let o=bi(i),r=Mf(i);if(o||r){let l=(r?Ze(i.useClass):i).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!o&&i.multi){let d=c.indexOf(e);d===-1?c.push(e,[n,l]):c[d+1].push(n,l)}else c.push(e,l)}}}function kg(t,i,e){return e&&t.componentProviders++,t.multi.push(i)-1}function od(t,i,e,n){for(let o=e;o<n;o++)if(i[o]===t)return o;return-1}function eD(t,i,e,n,o){return Pd(this.multi,[])}function tD(t,i,e,n,o){let r=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=hr(n,n[J],this.providerFactory.index,o);s=l.slice(0,a),Pd(r,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Pd(r,s);return s}function Pd(t,i){for(let e=0;e<t.length;e++){let n=t[e];i.push(n())}return i}function nD(t,i,e,n,o,r){let s=new Fi(t,e,K,null);return s.multi=[],s.index=i,s.componentProviders=0,kg(s,o,n&&!e),s}function re(t,i=[]){return e=>{e.providersResolver=(n,o)=>Xw(n,o?o(t):t,i)}}function Sr(t,i,e){let n=bn()+t,o=Y();return o[n]===Et?zn(o,n,e?i.call(e):i()):za(o,n)}function te(t,i,e,n){return iD(Y(),bn(),t,i,e,n)}function We(t,i,e,n,o){return oD(Y(),bn(),t,i,e,n,o)}function yu(t,i,e,n,o,r){return rD(Y(),bn(),t,i,e,n,o,r)}function Ga(t,i,e,n,o,r,s){return sD(Y(),bn(),t,i,e,n,o,r,s)}function Mr(t,i,e,n,o,r,s,a){let l=bn()+t,c=Y(),d=$a(c,l,e,n,o,r);return mt(c,l+4,s)||d?zn(c,l+5,a?i.call(a,e,n,o,r,s):i(e,n,o,r,s)):za(c,l+5)}function So(t,i,e,n,o,r,s,a,l){let c=bn()+t,d=Y(),h=$a(d,c,e,n,o,r);return bo(d,c+4,s,a)||h?zn(d,c+6,l?i.call(l,e,n,o,r,s,a):i(e,n,o,r,s,a)):za(d,c+6)}function bu(t,i,e,n,o,r,s,a,l,c){let d=bn()+t,h=Y(),g=$a(h,d,e,n,o,r);return Km(h,d+4,s,a,l)||g?zn(h,d+7,c?i.call(c,e,n,o,r,s,a,l):i(e,n,o,r,s,a,l)):za(h,d+7)}function Wa(t,i,e,n){return aD(Y(),bn(),t,i,e,n)}function kr(t,i){let e=t[i];return e===Et?void 0:e}function iD(t,i,e,n,o,r){let s=i+e;return mt(t,s,o)?zn(t,s+1,r?n.call(r,o):n(o)):kr(t,s+1)}function oD(t,i,e,n,o,r,s){let a=i+e;return bo(t,a,o,r)?zn(t,a+2,s?n.call(s,o,r):n(o,r)):kr(t,a+2)}function rD(t,i,e,n,o,r,s,a){let l=i+e;return Km(t,l,o,r,s)?zn(t,l+3,a?n.call(a,o,r,s):n(o,r,s)):kr(t,l+3)}function sD(t,i,e,n,o,r,s,a,l){let c=i+e;return $a(t,c,o,r,s,a)?zn(t,c+4,l?n.call(l,o,r,s,a):n(o,r,s,a)):kr(t,c+4)}function aD(t,i,e,n,o,r){let s=i+e,a=!1;for(let l=0;l<o.length;l++)mt(t,s++,o[l])&&(a=!0);return a?zn(t,s,n.apply(r,o)):kr(t,s)}function Se(t,i){return Va(t,i)}var lD=(()=>{class t{zone=M(we);changeDetectionScheduler=M(Ln);applicationRef=M(xo);applicationErrorHandler=M(Cn);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(e){this.applicationErrorHandler(e)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Og=new de("",{factory:()=>!1});function vu({ngZoneFactory:t,ignoreChangesOutsideZone:i,scheduleInRootZone:e}){return t??=()=>new we(ge(H({},wu()),{scheduleInRootZone:e})),[{provide:we,useFactory:t},{provide:ei,multi:!0,useFactory:()=>{let n=M(lD,{optional:!0});return()=>n.initialize()}},{provide:ei,multi:!0,useFactory:()=>{let n=M(cD);return()=>{n.initialize()}}},i===!0?{provide:Gc,useValue:!0}:[],{provide:Wc,useValue:e??ag},{provide:Cn,useFactory:()=>{let n=M(we),o=M(Pt),r;return s=>{n.runOutsideAngular(()=>{o.destroyed&&!r?setTimeout(()=>{throw s}):(r??=o.get(Kt),r.handleError(s))})}}}]}function Cu(t){let i=t?.ignoreChangesOutsideZone,e=t?.scheduleInRootZone,n=vu({ngZoneFactory:()=>{let o=wu(t);return o.scheduleInRootZone=e,o.shouldCoalesceEventChangeDetection&&Li("NgZone_CoalesceEvent"),new we(o)},ignoreChangesOutsideZone:i,scheduleInRootZone:e});return ro([{provide:Og,useValue:!0},{provide:cr,useValue:!1},n])}function wu(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var cD=(()=>{class t{subscription=new wt;initialized=!1;zone=M(we);pendingTasks=M(ki);initialize(){if(this.initialized)return;this.initialized=!0;let e=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(e=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{we.assertNotInAngularZone(),queueMicrotask(()=>{e!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(e),e=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{we.assertInAngularZone(),e??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Rg=(()=>{class t{applicationErrorHandler=M(Cn);appRef=M(xo);taskService=M(ki);ngZone=M(we);zonelessEnabled=M(cr);tracing=M(Er,{optional:!0});disableScheduling=M(Gc,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new wt;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Da):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(M(Wc,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Ia||!this.zoneIsDefined)}notify(e){if(!this.zonelessEnabled&&e===5)return;let n=!1;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2,n=!0;break}case 12:{this.appRef.dirtyFlags|=16,n=!0;break}case 13:{this.appRef.dirtyFlags|=2,n=!0;break}case 11:{n=!0;break}case 9:case 8:case 7:case 10:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(n))return;let o=this.useMicrotaskScheduler?xh:lg;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>o(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>o(()=>this.tick()))}shouldScheduleTick(e){return!(this.disableScheduling&&!e||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Da+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(n){this.taskService.remove(e),this.applicationErrorHandler(n)}finally{this.cleanup()}this.useMicrotaskScheduler=!0,xh(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function dD(){return typeof $localize<"u"&&$localize.locale||Tr}var qa=new de("",{providedIn:"root",factory:()=>M(qa,{optional:!0,skipSelf:!0})||dD()});function on(t){return df(t)}function Me(t,i){return ys(t,i?.equal)}var Du=class{[ft];constructor(i){this[ft]=i}destroy(){this[ft].destroy()}};function si(t,i){let e=i?.injector??M(ht),n=i?.manualCleanup!==!0?e.get(oi):null,o,r=e.get(dr,null,{optional:!0}),s=e.get(Ln);return r!==null?(o=fD(r.view,s,t),n instanceof Jo&&n._lView===r.view&&(n=null)):o=hD(t,e.get(ur),s),o.injector=e,n!==null&&(o.onDestroyFn=n.onDestroy(()=>o.destroy())),new Du(o)}var Fg=ge(H({},uf),{cleanupFns:void 0,zone:null,onDestroyFn:Oi,run(){let t=po(!1);try{pf(this)}finally{po(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=oe(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],oe(t)}}}),uD=ge(H({},Fg),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){ui(this),this.onDestroyFn(),this.cleanup(),this.scheduler.remove(this)}}),pD=ge(H({},Fg),{consumerMarkedDirty(){this.view[ae]|=8192,Mi(this.view),this.notifier.notify(13)},destroy(){ui(this),this.onDestroyFn(),this.cleanup(),this.view[Vn]?.delete(this)}});function fD(t,i,e){let n=Object.create(pD);return n.view=t,n.zone=typeof Zone<"u"?Zone.current:null,n.notifier=i,n.fn=Ag(n,e),t[Vn]??=new Set,t[Vn].add(n),n.consumerMarkedDirty(n),n}function hD(t,i,e){let n=Object.create(uD);return n.fn=Ag(n,t),n.scheduler=i,n.notifier=e,n.zone=typeof Zone<"u"?Zone.current:null,n.scheduler.add(n),n.notifier.notify(12),n}function Ag(t,i){return()=>{i(e=>(t.cleanupFns??=[]).push(e))}}var Hg=Symbol("InputSignalNode#UNSET"),FD=ge(H({},bs),{transformFn:void 0,applyValueToInputSignal(t,i){Ki(t,i)}});function jg(t,i){let e=Object.create(FD);e.value=t,e.transformFn=i?.transform;function n(){if(Ui(e),e.value===Hg){let o=null;throw new ce(-950,o)}return e.value}return n[ft]=e,n}var AD=new de("");AD.__NG_ELEMENT_ID__=t=>{let i=it();if(i===null)throw new ce(204,!1);if(i.type&2)return i.value;if(t&8)return null;throw new ce(204,!1)};function Ng(t,i){return jg(t,i)}function ND(t){return jg(Hg,t)}var X=(Ng.required=ND,Ng);var Iu=new de(""),LD=new de("");function Or(t){return!t.moduleRef}function PD(t){let i=Or(t)?t.r3Injector:t.moduleRef.injector,e=i.get(we);return e.run(()=>{Or(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let n=i.get(Cn),o;if(e.runOutsideAngular(()=>{o=e.onError.subscribe({next:n})}),Or(t)){let r=()=>i.destroy(),s=t.platformInjector.get(Iu);s.add(r),i.onDestroy(()=>{o.unsubscribe(),s.delete(r)})}else{let r=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Iu);s.add(r),t.moduleRef.onDestroy(()=>{fr(t.allPlatformModules,t.moduleRef),o.unsubscribe(),s.delete(r)})}return BD(n,e,()=>{let r=i.get(ki),s=r.add(),a=i.get(pu);return a.runInitializers(),a.donePromise.then(()=>{let l=i.get(qa,Tr);if(gg(l||Tr),!i.get(LD,!0))return Or(t)?i.get(xo):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(Or(t)){let d=i.get(xo);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return VD?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>void r.remove(s))})})}var VD;function BD(t,i,e){try{let n=e();return Io(n)?n.catch(o=>{throw i.runOutsideAngular(()=>t(o)),o}):n}catch(n){throw i.runOutsideAngular(()=>t(n)),n}}var Ka=null;function HD(t=[],i){return ht.create({name:i,providers:[{provide:tr,useValue:"platform"},{provide:Iu,useValue:new Set([()=>Ka=null])},...t]})}function jD(t=[]){if(Ka)return Ka;let i=HD(t);return Ka=i,fg(),zD(i),i}function zD(t){let i=t.get(Ma,null);Qs(t,()=>{i?.forEach(e=>e())})}var Bi=(()=>{class t{static __NG_ELEMENT_ID__=$D}return t})();function $D(t){return UD(it(),Y(),(t&16)===16)}function UD(t,i,e){if(Bn(t)&&!e){let n=jt(t.index,i);return new ri(n,n)}else if(t.type&175){let n=i[xt];return new ri(n,i)}return null}var xu=class{constructor(){}supports(i){return ou(i)}create(i){return new Eu(i)}},GD=(t,i)=>i,Eu=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(i){this._trackByFn=i||GD}forEachItem(i){let e;for(e=this._itHead;e!==null;e=e._next)i(e)}forEachOperation(i){let e=this._itHead,n=this._removalsHead,o=0,r=null;for(;e||n;){let s=!n||e&&e.currentIndex<Lg(n,o,r)?e:n,a=Lg(s,o,r),l=s.currentIndex;if(s===n)o--,n=n._nextRemoved;else if(e=e._next,s.previousIndex==null)o++;else{r||(r=[]);let c=a-o,d=l-o;if(c!=d){for(let g=0;g<c;g++){let m=g<r.length?r[g]:r[g]=0,y=m+g;d<=y&&y<c&&(r[g]=m+1)}let h=s.previousIndex;r[h]=d-c}}a!==l&&i(s,a,l)}}forEachPreviousItem(i){let e;for(e=this._previousItHead;e!==null;e=e._nextPrevious)i(e)}forEachAddedItem(i){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)i(e)}forEachMovedItem(i){let e;for(e=this._movesHead;e!==null;e=e._nextMoved)i(e)}forEachRemovedItem(i){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)i(e)}forEachIdentityChange(i){let e;for(e=this._identityChangesHead;e!==null;e=e._nextIdentityChange)i(e)}diff(i){if(i==null&&(i=[]),!ou(i))throw new ce(900,!1);return this.check(i)?this:null}onDestroy(){}check(i){this._reset();let e=this._itHead,n=!1,o,r,s;if(Array.isArray(i)){this.length=i.length;for(let a=0;a<this.length;a++)r=i[a],s=this._trackByFn(a,r),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,r,s,a),n=!0):(n&&(e=this._verifyReinsertion(e,r,s,a)),Object.is(e.item,r)||this._addIdentityChange(e,r)),e=e._next}else o=0,qm(i,a=>{s=this._trackByFn(o,a),e===null||!Object.is(e.trackById,s)?(e=this._mismatch(e,a,s,o),n=!0):(n&&(e=this._verifyReinsertion(e,a,s,o)),Object.is(e.item,a)||this._addIdentityChange(e,a)),e=e._next,o++}),this.length=o;return this._truncate(e),this.collection=i,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let i;for(i=this._previousItHead=this._itHead;i!==null;i=i._next)i._nextPrevious=i._next;for(i=this._additionsHead;i!==null;i=i._nextAdded)i.previousIndex=i.currentIndex;for(this._additionsHead=this._additionsTail=null,i=this._movesHead;i!==null;i=i._nextMoved)i.previousIndex=i.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(i,e,n,o){let r;return i===null?r=this._itTail:(r=i._prev,this._remove(i)),i=this._unlinkedRecords===null?null:this._unlinkedRecords.get(n,null),i!==null?(Object.is(i.item,e)||this._addIdentityChange(i,e),this._reinsertAfter(i,r,o)):(i=this._linkedRecords===null?null:this._linkedRecords.get(n,o),i!==null?(Object.is(i.item,e)||this._addIdentityChange(i,e),this._moveAfter(i,r,o)):i=this._addAfter(new Tu(e,n),r,o)),i}_verifyReinsertion(i,e,n,o){let r=this._unlinkedRecords===null?null:this._unlinkedRecords.get(n,null);return r!==null?i=this._reinsertAfter(r,i._prev,o):i.currentIndex!=o&&(i.currentIndex=o,this._addToMoves(i,o)),i}_truncate(i){for(;i!==null;){let e=i._next;this._addToRemovals(this._unlink(i)),i=e}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(i,e,n){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(i);let o=i._prevRemoved,r=i._nextRemoved;return o===null?this._removalsHead=r:o._nextRemoved=r,r===null?this._removalsTail=o:r._prevRemoved=o,this._insertAfter(i,e,n),this._addToMoves(i,n),i}_moveAfter(i,e,n){return this._unlink(i),this._insertAfter(i,e,n),this._addToMoves(i,n),i}_addAfter(i,e,n){return this._insertAfter(i,e,n),this._additionsTail===null?this._additionsTail=this._additionsHead=i:this._additionsTail=this._additionsTail._nextAdded=i,i}_insertAfter(i,e,n){let o=e===null?this._itHead:e._next;return i._next=o,i._prev=e,o===null?this._itTail=i:o._prev=i,e===null?this._itHead=i:e._next=i,this._linkedRecords===null&&(this._linkedRecords=new Qa),this._linkedRecords.put(i),i.currentIndex=n,i}_remove(i){return this._addToRemovals(this._unlink(i))}_unlink(i){this._linkedRecords!==null&&this._linkedRecords.remove(i);let e=i._prev,n=i._next;return e===null?this._itHead=n:e._next=n,n===null?this._itTail=e:n._prev=e,i}_addToMoves(i,e){return i.previousIndex===e||(this._movesTail===null?this._movesTail=this._movesHead=i:this._movesTail=this._movesTail._nextMoved=i),i}_addToRemovals(i){return this._unlinkedRecords===null&&(this._unlinkedRecords=new Qa),this._unlinkedRecords.put(i),i.currentIndex=null,i._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=i,i._prevRemoved=null):(i._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=i),i}_addIdentityChange(i,e){return i.item=e,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=i:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=i,i}},Tu=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(i,e){this.item=i,this.trackById=e}},Su=class{_head=null;_tail=null;add(i){this._head===null?(this._head=this._tail=i,i._nextDup=null,i._prevDup=null):(this._tail._nextDup=i,i._prevDup=this._tail,i._nextDup=null,this._tail=i)}get(i,e){let n;for(n=this._head;n!==null;n=n._nextDup)if((e===null||e<=n.currentIndex)&&Object.is(n.trackById,i))return n;return null}remove(i){let e=i._prevDup,n=i._nextDup;return e===null?this._head=n:e._nextDup=n,n===null?this._tail=e:n._prevDup=e,this._head===null}},Qa=class{map=new Map;put(i){let e=i.trackById,n=this.map.get(e);n||(n=new Su,this.map.set(e,n)),n.add(i)}get(i,e){let n=i,o=this.map.get(n);return o?o.get(i,e):null}remove(i){let e=i.trackById;return this.map.get(e).remove(i)&&this.map.delete(e),i}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function Lg(t,i,e){let n=t.previousIndex;if(n===null)return n;let o=0;return e&&n<e.length&&(o=e[n]),n+i+o}var Mu=class{constructor(){}supports(i){return i instanceof Map||ja(i)}create(){return new ku}},ku=class{_records=new Map;_mapHead=null;_appendAfter=null;_previousMapHead=null;_changesHead=null;_changesTail=null;_additionsHead=null;_additionsTail=null;_removalsHead=null;_removalsTail=null;get isDirty(){return this._additionsHead!==null||this._changesHead!==null||this._removalsHead!==null}forEachItem(i){let e;for(e=this._mapHead;e!==null;e=e._next)i(e)}forEachPreviousItem(i){let e;for(e=this._previousMapHead;e!==null;e=e._nextPrevious)i(e)}forEachChangedItem(i){let e;for(e=this._changesHead;e!==null;e=e._nextChanged)i(e)}forEachAddedItem(i){let e;for(e=this._additionsHead;e!==null;e=e._nextAdded)i(e)}forEachRemovedItem(i){let e;for(e=this._removalsHead;e!==null;e=e._nextRemoved)i(e)}diff(i){if(!i)i=new Map;else if(!(i instanceof Map||ja(i)))throw new ce(900,!1);return this.check(i)?this:null}onDestroy(){}check(i){this._reset();let e=this._mapHead;if(this._appendAfter=null,this._forEach(i,(n,o)=>{if(e&&e.key===o)this._maybeAddToChanges(e,n),this._appendAfter=e,e=e._next;else{let r=this._getOrCreateRecordForKey(o,n);e=this._insertBeforeOrAppend(e,r)}}),e){e._prev&&(e._prev._next=null),this._removalsHead=e;for(let n=e;n!==null;n=n._nextRemoved)n===this._mapHead&&(this._mapHead=null),this._records.delete(n.key),n._nextRemoved=n._next,n.previousValue=n.currentValue,n.currentValue=null,n._prev=null,n._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(i,e){if(i){let n=i._prev;return e._next=i,e._prev=n,i._prev=e,n&&(n._next=e),i===this._mapHead&&(this._mapHead=e),this._appendAfter=i,i}return this._appendAfter?(this._appendAfter._next=e,e._prev=this._appendAfter):this._mapHead=e,this._appendAfter=e,null}_getOrCreateRecordForKey(i,e){if(this._records.has(i)){let o=this._records.get(i);this._maybeAddToChanges(o,e);let r=o._prev,s=o._next;return r&&(r._next=s),s&&(s._prev=r),o._next=null,o._prev=null,o}let n=new Ou(i);return this._records.set(i,n),n.currentValue=e,this._addToAdditions(n),n}_reset(){if(this.isDirty){let i;for(this._previousMapHead=this._mapHead,i=this._previousMapHead;i!==null;i=i._next)i._nextPrevious=i._next;for(i=this._changesHead;i!==null;i=i._nextChanged)i.previousValue=i.currentValue;for(i=this._additionsHead;i!=null;i=i._nextAdded)i.previousValue=i.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(i,e){Object.is(e,i.currentValue)||(i.previousValue=i.currentValue,i.currentValue=e,this._addToChanges(i))}_addToAdditions(i){this._additionsHead===null?this._additionsHead=this._additionsTail=i:(this._additionsTail._nextAdded=i,this._additionsTail=i)}_addToChanges(i){this._changesHead===null?this._changesHead=this._changesTail=i:(this._changesTail._nextChanged=i,this._changesTail=i)}_forEach(i,e){i instanceof Map?i.forEach(e):Object.keys(i).forEach(n=>e(i[n],n))}},Ou=class{key;previousValue=null;currentValue=null;_nextPrevious=null;_next=null;_prev=null;_nextAdded=null;_nextRemoved=null;_nextChanged=null;constructor(i){this.key=i}};function Pg(){return new Ru([new xu])}var Ru=(()=>{class t{factories;static \u0275prov=V({token:t,providedIn:"root",factory:Pg});constructor(e){this.factories=e}static create(e,n){if(n!=null){let o=n.factories.slice();e=e.concat(o)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let n=M(t,{optional:!0,skipSelf:!0});return t.create(e,n||Pg())}}}find(e){let n=this.factories.find(o=>o.supports(e));if(n!=null)return n;throw new ce(901,!1)}}return t})();function Vg(){return new Fu([new Mu])}var Fu=(()=>{class t{static \u0275prov=V({token:t,providedIn:"root",factory:Vg});factories;constructor(e){this.factories=e}static create(e,n){if(n){let o=n.factories.slice();e=e.concat(o)}return new t(e)}static extend(e){return{provide:t,useFactory:()=>{let n=M(t,{optional:!0,skipSelf:!0});return t.create(e,n||Vg())}}}find(e){let n=this.factories.find(o=>o.supports(e));if(n)return n;throw new ce(901,!1)}}return t})();function zg(t){Pe(8);try{let{rootComponent:i,appProviders:e,platformProviders:n}=t,o=jD(n),r=[vu({}),{provide:Ln,useExisting:Rg},nh,...e||[]],s=new br({providers:r,parent:o,debugName:"",runEnvironmentInitializers:!1});return PD({r3Injector:s.injector,platformInjector:o,rootComponent:i})}catch(i){return Promise.reject(i)}finally{Pe(9)}}function T(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function pe(t,i=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):i}var $g=null;function ai(){return $g}function Au(t){$g??=t}var Rr=class{};var Nu=/\s+/,Ug=[],rn=(()=>{class t{_ngEl;_renderer;initialClasses=Ug;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Nu):Ug}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Nu):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Nu).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(K(ot),K(Dn))};static \u0275dir=ve({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Ya=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Gt=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new Ya(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),Gg(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);Gg(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(K(In),K($t),K(Ru))};static \u0275dir=ve({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Gg(t,i){t.context.$implicit=i.item}var qe=(()=>{class t{_viewContainer;_context=new Za;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Wg(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Wg(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(K(In),K($t))};static \u0275dir=ve({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Za=class{$implicit=null;ngIf=null};function Wg(t,i){if(t&&!t.createEmbeddedView)throw new ce(2020,!1)}var gt=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:en.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(K(ot),K(Fu),K(Dn))};static \u0275dir=ve({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Be=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(K(In))};static \u0275dir=ve({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ye]})}return t})();var me=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({})}return t})();function Lu(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var Fr=class{};var Pu="browser",KD="server";function _t(t){return t===Pu}function qg(t){return t===KD}var Xa=new de(""),zu=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,o,r){return this._findPluginFor(n).addEventListener(e,n,o,r)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(r=>r.supports(e)),!n)throw new ce(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(Ie(Xa),Ie(we))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Ar=class{_doc;constructor(i){this._doc=i}manager},Vu="ng-app-id";function Kg(t){for(let i of t)i.remove()}function Qg(t,i){let e=i.createElement("style");return e.textContent=t,e}function QD(t,i,e,n){let o=t.head?.querySelectorAll(`style[${Vu}="${i}"],link[${Vu}="${i}"]`);if(o)for(let r of o)r.removeAttribute(Vu),r instanceof HTMLLinkElement?n.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]})}function Hu(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var $u=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,o,r={}){this.doc=e,this.appId=n,this.nonce=o,QD(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let o of e)this.addUsage(o,this.inline,Qg);n?.forEach(o=>this.addUsage(o,this.external,Hu))}removeStyles(e,n){for(let o of e)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,n,o){let r=n.get(e);r?r.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(e,this.doc)))})}removeUsage(e,n){let o=n.get(e);o&&(o.usage--,o.usage<=0&&(Kg(o.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Kg(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(e,Qg(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(e,Hu(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(Ie(Qe),Ie(Sa),Ie(ka,8),Ie(Ut))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Bu={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Uu=/%COMP%/g;var Zg="%COMP%",YD=`_nghost-${Zg}`,ZD=`_ngcontent-${Zg}`,JD=!0,XD=new de("",{providedIn:"root",factory:()=>JD});function eI(t){return ZD.replace(Uu,t)}function tI(t){return YD.replace(Uu,t)}function Jg(t,i){return i.map(e=>e.replace(Uu,t))}var Gu=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;animationDisabled;maxAnimationTimeout;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;registry;constructor(e,n,o,r,s,a,l,c=null,d,h,g=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=r,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.animationDisabled=d,this.maxAnimationTimeout=h,this.tracingService=g,this.platformIsServer=!1,this.defaultRenderer=new Nr(e,s,l,this.platformIsServer,this.tracingService,this.registry=aa(),this.maxAnimationTimeout)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,n);return o instanceof Ja?o.applyToHost(e):o instanceof Lr&&o.applyStyles(),o}getOrCreateRenderer(e,n){let o=this.rendererByCompId,r=o.get(n.id);if(!r){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer,g=this.tracingService;switch(n.encapsulation){case jn.Emulated:r=new Ja(l,c,n,this.appId,d,s,a,h,g,this.registry,this.animationDisabled,this.maxAnimationTimeout);break;case jn.ShadowDom:return new ju(l,c,e,n,s,a,this.nonce,h,g,this.registry,this.maxAnimationTimeout);default:r=new Lr(l,c,n,d,s,a,h,g,this.registry,this.animationDisabled,this.maxAnimationTimeout);break}o.set(n.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(Ie(zu),Ie($u),Ie(Sa),Ie(XD),Ie(Qe),Ie(Ut),Ie(we),Ie(ka),Ie(fu),Ie(hu),Ie(Er,8))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Nr=class{eventManager;doc;ngZone;platformIsServer;tracingService;registry;maxAnimationTimeout;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,o,r,s,a){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=o,this.tracingService=r,this.registry=s,this.maxAnimationTimeout=a}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Bu[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Yg(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(Yg(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){let{elements:n}=this.registry;if(n){n.animate(e,()=>e.remove(),this.maxAnimationTimeout);return}e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new ce(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,o){if(o){e=o+":"+e;let r=Bu[o];r?i.setAttributeNS(r,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let o=Bu[n];o?i.removeAttributeNS(o,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,o){o&(en.DashCase|en.Important)?i.style.setProperty(e,n,o&en.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&en.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,o){if(typeof i=="string"&&(i=ai().getGlobalEventTarget(this.doc,i),!i))throw new ce(5102,!1);let r=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(i,e,r)),this.eventManager.addEventListener(i,e,r,o)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function Yg(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var ju=class extends Nr{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,o,r,s,a,l,c,d,h){super(i,r,s,l,c,d,h),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let g=o.styles;g=Jg(o.id,g);for(let y of g){let I=document.createElement("style");a&&I.setAttribute("nonce",a),I.textContent=y,this.shadowRoot.appendChild(I)}let m=o.getExternalStyles?.();if(m)for(let y of m){let I=Hu(y,r);a&&I.setAttribute("nonce",a),this.shadowRoot.appendChild(I)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Lr=class extends Nr{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;_animationDisabled;constructor(i,e,n,o,r,s,a,l,c,d,h,g){super(i,r,s,a,l,c,h),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this._animationDisabled=d;let m=n.styles;this.styles=g?Jg(g,m):m,this.styleUrls=n.getExternalStyles?.(g)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){if(this.removeStylesOnCompDestroy){if(!this._animationDisabled&&this.registry.elements){this.ngZone.runOutsideAngular(()=>{setTimeout(()=>{this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)},this.maxAnimationTimeout)});return}this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}}},Ja=class extends Lr{contentAttr;hostAttr;constructor(i,e,n,o,r,s,a,l,c,d,h,g){let m=o+"-"+n.id;super(i,e,n,r,s,a,l,c,d,h,g,m),this.contentAttr=eI(m),this.hostAttr=tI(m)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var el=class t extends Rr{supportsDOMEvents=!0;static makeCurrent(){Au(new t)}onAndCancel(i,e,n,o){return i.addEventListener(e,n,o),()=>{i.removeEventListener(e,n,o)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=nI();return e==null?null:iI(e)}resetBaseElement(){Pr=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Lu(document.cookie,i)}},Pr=null;function nI(){return Pr=Pr||document.head.querySelector("base"),Pr?Pr.getAttribute("href"):null}function iI(t){return new URL(t,document.baseURI).pathname}var oI=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),e0=(()=>{class t extends Ar{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,o,r){return e.addEventListener(n,o,r),()=>this.removeEventListener(e,n,o,r)}removeEventListener(e,n,o,r){return e.removeEventListener(n,o,r)}static \u0275fac=function(n){return new(n||t)(Ie(Qe))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Xg=["alt","control","meta","shift"],rI={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},sI={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},t0=(()=>{class t extends Ar{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,o,r){let s=t.parseEventName(n),a=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ai().onAndCancel(e,s.domEventName,a,r))}static parseEventName(e){let n=e.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let r=t._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),Xg.forEach(c=>{let d=n.indexOf(c);d>-1&&(n.splice(d,1),s+=c+".")}),s+=r,n.length!=0||r.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(e,n){let o=rI[e.key]||e.key,r="";return n.indexOf("code.")>-1&&(o=e.code,r="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Xg.forEach(s=>{if(s!==o){let a=sI[s];a(e)&&(r+=s+".")}}),r+=o,r===n)}static eventCallback(e,n,o){return r=>{t.matchEventFullKeyCode(r,e)&&o.runGuarded(()=>n(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(Ie(Qe))};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();function Wu(t,i){let e=H({rootComponent:t},aI(i));return zg(e)}function aI(t){return{appProviders:[...pI,...t?.providers??[]],platformProviders:uI}}function lI(){el.makeCurrent()}function cI(){return new Kt}function dI(){return Hd(document),document}var uI=[{provide:Ut,useValue:Pu},{provide:Ma,useValue:lI,multi:!0},{provide:Qe,useFactory:dI}];var pI=[{provide:tr,useValue:"root"},{provide:Kt,useFactory:cI},{provide:Xa,useClass:e0,multi:!0,deps:[Qe]},{provide:Xa,useClass:t0,multi:!0,deps:[Qe]},Gu,$u,zu,{provide:Ai,useExisting:Gu},{provide:Fr,useClass:oI},[]];var n0={providers:[jc(),Cu({eventCoalescing:!0})]};var $n=(function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t})($n||{});function Vr(t,i){return{type:$n.Trigger,name:t,definitions:i,options:{}}}function Un(t,i=null){return{type:$n.Animate,styles:i,timings:t}}function an(t){return{type:$n.Style,styles:t,offset:null}}function qu(t,i,e){return{type:$n.State,name:t,styles:i,options:e}}function Gn(t,i,e=null){return{type:$n.Transition,expr:t,animation:i,options:e}}function tl(t,i=null){return{type:$n.Reference,animation:t,options:i}}function nl(t,i=null){return{type:$n.AnimateRef,animation:t,options:i}}var d0=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(K(Dn),K(ot))};static \u0275dir=ve({type:t})}return t})(),fI=(()=>{class t extends d0{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275dir=ve({type:t,features:[R]})}return t})(),yt=new de("");var hI={provide:yt,useExisting:je(()=>u0),multi:!0};function mI(){let t=ai()?ai().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var gI=new de(""),u0=(()=>{class t extends d0{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!mI())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(K(Dn),K(ot),K(gI,8))};static \u0275dir=ve({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&B("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[re([hI]),R]})}return t})();var _I=new de(""),yI=new de("");function p0(t){return t!=null}function f0(t){return Io(t)?Ul(t):t}function h0(t){let i={};return t.forEach(e=>{i=e!=null?H(H({},i),e):i}),Object.keys(i).length===0?null:i}function m0(t,i){return i.map(e=>e(t))}function bI(t){return!t.validate}function g0(t){return t.map(i=>bI(i)?i:e=>i.validate(e))}function vI(t){if(!t)return null;let i=t.filter(p0);return i.length==0?null:function(e){return h0(m0(e,i))}}function _0(t){return t!=null?vI(g0(t)):null}function CI(t){if(!t)return null;let i=t.filter(p0);return i.length==0?null:function(e){let n=m0(e,i).map(f0);return Gl(n).pipe(mi(h0))}}function y0(t){return t!=null?CI(g0(t)):null}function i0(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function wI(t){return t._rawValidators}function DI(t){return t._rawAsyncValidators}function Ku(t){return t?Array.isArray(t)?t:[t]:[]}function ol(t,i){return Array.isArray(t)?t.includes(i):t===i}function o0(t,i){let e=Ku(i);return Ku(t).forEach(o=>{ol(e,o)||e.push(o)}),e}function r0(t,i){return Ku(i).filter(e=>!ol(t,e))}var rl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=_0(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=y0(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Qu=class extends rl{name;get formDirective(){return null}get path(){return null}},At=class extends rl{_parent=null;name=null;valueAccessor=null},Yu=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},II={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},bj=ge(H({},II),{"[class.ng-submitted]":"isSubmitted"}),al=(()=>{class t extends Yu{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(K(At,2))};static \u0275dir=ve({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&Eo("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[R]})}return t})();var Br="VALID",il="INVALID",Mo="PENDING",Hr="DISABLED",Oo=class{},sl=class extends Oo{value;source;constructor(i,e){super(),this.value=i,this.source=e}},jr=class extends Oo{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},zr=class extends Oo{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},ko=class extends Oo{status;source;constructor(i,e){super(),this.status=i,this.source=e}};function xI(t){return(ll(t)?t.validators:t)||null}function EI(t){return Array.isArray(t)?_0(t):t||null}function TI(t,i){return(ll(i)?i.asyncValidators:t)||null}function SI(t){return Array.isArray(t)?y0(t):t||null}function ll(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var Zu=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return on(this.statusReactive)}set status(i){on(()=>this.statusReactive.set(i))}_status=Me(()=>this.statusReactive());statusReactive=Le(void 0);get valid(){return this.status===Br}get invalid(){return this.status===il}get pending(){return this.status==Mo}get disabled(){return this.status===Hr}get enabled(){return this.status!==Hr}errors;get pristine(){return on(this.pristineReactive)}set pristine(i){on(()=>this.pristineReactive.set(i))}_pristine=Me(()=>this.pristineReactive());pristineReactive=Le(!0);get dirty(){return!this.pristine}get touched(){return on(this.touchedReactive)}set touched(i){on(()=>this.touchedReactive.set(i))}_touched=Me(()=>this.touchedReactive());touchedReactive=Le(!1);get untouched(){return!this.touched}_events=new Ke;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(o0(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(o0(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(r0(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(r0(i,this._rawAsyncValidators))}hasValidator(i){return ol(this._rawValidators,i)}hasAsyncValidator(i){return ol(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(ge(H({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new zr(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new zr(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(ge(H({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new jr(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new jr(!0,n))}markAsPending(i={}){this.status=Mo;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new ko(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(ge(H({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Hr,this.errors=null,this._forEachChild(o=>{o.disable(ge(H({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new sl(this.value,n)),this._events.next(new ko(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ge(H({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Br,this._forEachChild(n=>{n.enable(ge(H({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ge(H({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Br||this.status===Mo)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new sl(this.value,e)),this._events.next(new ko(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(ge(H({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Hr:Br}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Mo,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=f0(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new ko(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new A,this.statusChanges=new A}_calculateStatus(){return this._allControlsDisabled()?Hr:this.errors?il:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Mo)?Mo:this._anyControlsHaveStatus(il)?il:Br}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new jr(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new zr(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){ll(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=EI(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=SI(this._rawAsyncValidators)}};var b0=new de("",{providedIn:"root",factory:()=>Ju}),Ju="always";function MI(t,i){return[...i.path,t]}function kI(t,i,e=Ju){RI(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),FI(t,i),NI(t,i),AI(t,i),OI(t,i)}function s0(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function OI(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function RI(t,i){let e=wI(t);i.validator!==null?t.setValidators(i0(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=DI(t);i.asyncValidator!==null?t.setAsyncValidators(i0(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();s0(i._rawValidators,o),s0(i._rawAsyncValidators,o)}function FI(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&v0(t,i)})}function AI(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&v0(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function v0(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function NI(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function LI(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function PI(t){return Object.getPrototypeOf(t.constructor)===fI}function VI(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===u0?e=r:PI(r)?n=r:o=r}),o||n||e||null}function a0(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function l0(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var BI=class extends Zu{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(xI(e),TI(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ll(e)&&(e.nonNullable||e.initialValueIsDefault)&&(l0(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){a0(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){a0(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){l0(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var HI={provide:At,useExisting:je(()=>$r)},c0=Promise.resolve(),$r=(()=>{class t extends At{_changeDetectorRef;callSetDisabledState;control=new BI;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new A;constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=VI(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),LI(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){kI(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){c0.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&T(n);c0.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?MI(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(K(Qu,9),K(_I,10),K(yI,10),K(yt,10),K(Bi,8),K(b0,8))};static \u0275dir=ve({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[re([HI]),R,Ye]})}return t})();var jI=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({})}return t})();var Ro=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:b0,useValue:e.callSetDisabledState??Ju}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[jI]})}return t})();function Fo(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[Fo(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function at(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function ln(t,i){if(t&&i){let e=n=>{at(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function zI(){return window.innerWidth-document.documentElement.offsetWidth}function w0(t){typeof t=="string"?ln(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,zI()+"px"),ln(document.body,t?.className||"p-overflow-hidden"))}function En(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function D0(t){typeof t=="string"?En(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),En(document.body,t?.className||"p-overflow-hidden"))}function Ur(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function I0(t){let i={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display=n,t.style.visibility=e}return i}function cl(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function Xu(t){return t?Math.abs(t.scrollLeft):0}function ep(){let t=document.documentElement;return(window.pageXOffset||Xu(t))-(t.clientLeft||0)}function tp(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function $I(t){return t?getComputedStyle(t).direction==="rtl":!1}function x0(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:I0(t),l=a.height,c=a.width,d=i.offsetHeight,h=i.offsetWidth,g=i.getBoundingClientRect(),m=tp(),y=ep(),I=cl(),O,P,Z="top";g.top+d+l>I.height?(O=g.top+m-l,Z="bottom",O<0&&(O=m)):O=d+g.top+m,g.left+c>I.width?P=Math.max(0,g.left+y+h-c):P=g.left+y,$I(t)?t.style.insetInlineEnd=P+"px":t.style.insetInlineStart=P+"px",t.style.top=O+"px",t.style.transformOrigin=Z,e&&(t.style.marginTop=Z==="bottom"?`calc(${(o=(n=Ur(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=Ur(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function E0(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function dt(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function T0(t,i,e=!0,n=void 0){var o;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:I0(t),s=i.offsetHeight,a=i.getBoundingClientRect(),l=cl(),c,d,h=n??"top";if(!n&&a.top+s+r.height>l.height?(c=-1*r.height,h="bottom",a.top+c<0&&(c=-1*a.top)):c=s,r.width>l.width?d=a.left*-1:a.left+r.width>l.width?d=(a.left+r.width-l.width)*-1:d=0,t.style.top=c+"px",t.style.insetInlineStart=d+"px",t.style.transformOrigin=h,e){let g=(o=Ur(/-anchor-gutter$/))==null?void 0:o.value;t.style.marginTop=h==="bottom"?`calc(${g??"2px"} * -1)`:g??""}}}function S0(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function UI(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&S0(t))}function Gr(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function M0(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),Gr(i)?i:void 0}function np(t,i){var e,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=M0(r);return UI(s)?s:r?.nodeType===9?r:void 0}}}function Wr(t,i){let e=np(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}function ip(t,i={}){if(Gr(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let h=Array.isArray(c)?e(n,c):Object.entries(c).map(([g,m])=>n==="style"&&(m||m===0)?`${g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${m}`:m?g:void 0);l=h.length?l.concat(h.filter(g=>!!g)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?ip(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function k0(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function Tn(t,i){return Gr(t)?Array.from(t.querySelectorAll(i)):[]}function Oe(t,i){return Gr(t)?t.matches(i)?t:t.querySelector(i):null}function cn(t,i){t&&document.activeElement!==t&&t.focus(i)}function Hi(t,i=""){let e=Tn(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function O0(t,i){let e=Hi(t,i);return e.length>0?e[0]:null}function Sn(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function qr(t){var i;if(t){let e=(i=S0(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function R0(t,i){let e=Hi(t,i);return e.length>0?e[e.length-1]:null}function F0(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||Xu(document.documentElement)||Xu(document.body)||0)}}return{top:"auto",left:"auto"}}function dn(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function A0(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Mn(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function op(t){return!!(t&&t.offsetParent!=null)}function Wn(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function N0(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function L0(t,i){let e=M0(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function P0(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,c=t.clientHeight,d=dn(i);a<0?t.scrollTop=l+a:a+d>c&&(t.scrollTop=l+a-c+d)}function Kr(t,i="",e){Gr(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function V0(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}function kn(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function rp(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!rp(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,c=i instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==i.getTime();let d=t instanceof RegExp,h=i instanceof RegExp;if(d!=h)return!1;if(d&&h)return t.toString()==i.toString();let g=Object.keys(t);if(s=g.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,g[r]))return!1;for(r=s;r--!==0;)if(a=g[r],!rp(t[a],i[a],e))return!1;return!0}function sp(t,i){return rp(t,i)}function H0(t){return typeof t=="function"&&"call"in t&&"apply"in t}function De(t){return!kn(t)}function Mt(t,i){if(!t||!i)return null;try{let e=t[i];if(De(e))return e}catch{}if(Object.keys(t).length){if(H0(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function Wt(t,i,e){return e?Mt(t,e)===Mt(i,e):sp(t,i)}function j0(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Wt(t,e))return!0}return!1}function qn(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function ap(t,i){let e=-1;if(De(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function kt(t,...i){return H0(t)?t(...i):t}function li(t,i=!0){return typeof t=="string"&&(i||t!=="")}function B0(t){return li(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function dl(t,i="",e={}){let n=B0(i).split("."),o=n.shift();if(o){if(qn(t)){let r=Object.keys(t).find(s=>B0(s)===o)||"";return dl(kt(t[r],e),n.join("."),e)}return}return kt(t,e)}function Qr(t){return t instanceof Date}function z0(t){return De(t)&&!isNaN(t)}function $0(t=""){return De(t)&&t.length===1&&!!t.match(/\S| /)}function un(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function ji(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Nt(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in i)t=t.replace(i[e],e)}return t}function ul(t){return li(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}var pl={};function Ee(t="pui_id_"){return Object.hasOwn(pl,t)||(pl[t]=0),pl[t]++,`${t}${pl[t]}`}var tt=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),lp=(()=>{class t{static AND="and";static OR="or"}return t})(),fl=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let c of n){let d=Mt(l,c);if(this.filters[r](d,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=Nt(n.toString()).toLocaleLowerCase(o);return Nt(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=Nt(n.toString()).toLocaleLowerCase(o);return Nt(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=Nt(n.toString()).toLocaleLowerCase(o);return Nt(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=Nt(n.toString()).toLocaleLowerCase(o),s=Nt(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:Nt(e.toString()).toLocaleLowerCase(o)==Nt(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:Nt(e.toString()).toLocaleLowerCase(o)!=Nt(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(Wt(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ao=(()=>{class t{clickSource=new Ke;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ae=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(K($t))};static \u0275dir=ve({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),ne=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[me]})}return t})(),bt=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var GI=Object.defineProperty,WI=Object.defineProperties,qI=Object.getOwnPropertyDescriptors,hl=Object.getOwnPropertySymbols,W0=Object.prototype.hasOwnProperty,q0=Object.prototype.propertyIsEnumerable,U0=(t,i,e)=>i in t?GI(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,fn=(t,i)=>{for(var e in i||(i={}))W0.call(i,e)&&U0(t,e,i[e]);if(hl)for(var e of hl(i))q0.call(i,e)&&U0(t,e,i[e]);return t},cp=(t,i)=>WI(t,qI(i)),Kn=(t,i)=>{var e={};for(var n in t)W0.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&hl)for(var n of hl(t))i.indexOf(n)<0&&q0.call(t,n)&&(e[n]=t[n]);return e};var KI=V0(),Lt=KI,Yr=/{([^}]*)}/g,K0=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Q0=/var\([^)]+\)/g;function G0(t){return li(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function QI(t){return qn(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function YI(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function dp(t="",i=""){return YI(`${li(t,!1)&&li(i,!1)?`${t}-`:t}${i}`)}function Y0(t="",i=""){return`--${dp(t,i)}`}function ZI(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Z0(t,i="",e="",n=[],o){if(li(t)){let r=t.trim();if(ZI(r))return;if(un(r,Yr)){let s=r.replaceAll(Yr,a=>{let l=a.replace(/{|}/g,"").split(".").filter(c=>!n.some(d=>un(c,d)));return`var(${Y0(e,ul(l.join("-")))}${De(o)?`, ${o}`:""})`});return un(s.replace(Q0,"0"),K0)?`calc(${s})`:s}return r}else if(z0(t))return t}function JI(t,i,e){li(i,!1)&&t.push(`${i}:${e};`)}function Lo(t,i){return t?`${t}{${i}}`:""}function J0(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],c=0,d="",h=null,g=0;for(;c<=s.length;){let m=s[c];if((m==='"'||m==="'"||m==="`")&&s[c-1]!=="\\"&&(h=h===m?null:m),!h&&(m==="("&&g++,m===")"&&g--,(m===","||c===s.length)&&g===0)){let y=d.trim();y.startsWith("dt(")?l.push(J0(y,a)):l.push(n(y)),d="",c++;continue}m!==void 0&&(d+=m),c++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return t;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],c=t.slice(a+3,l),d=e(c,i),h=i(...d);t=t.slice(0,a)+h+t.slice(l+1)}return t}var pp=t=>{var i;let e=Ne.getTheme(),n=up(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=up(e,t,void 0,"value");return{name:o,variable:n,value:r}},Qn=(...t)=>up(Ne.getTheme(),...t),up=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=Ne.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=un(i,Yr)?i:`{${i}}`;return n==="value"||kn(n)&&a==="strict"?Ne.getTokenValue(i):Z0(l,void 0,s,[o.excludedKeyRegex],e)}return""};function Po(t,...i){if(t instanceof Array){let e=t.reduce((n,o,r)=>{var s;return n+o+((s=kt(i[r],{dt:Qn}))!=null?s:"")},"");return J0(e,Qn)}return kt(t,{dt:Qn})}function XI(t,i={}){let e=Ne.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:d,path:h}=l.pop();for(let g in d){let m=d[g],y=QI(m),I=un(g,r)?dp(h):dp(h,ul(g));if(qn(y))l.push({node:y,path:I});else{let O=Y0(I),P=Z0(y,I,n,[r]);JI(a,O,P);let Z=I;n&&Z.startsWith(n+"-")&&(Z=Z.slice(n.length+1)),s.push(Z.replace(/-/g,"."))}}}let c=a.join("");return{value:a,tokens:s,declarations:c,css:Lo(o,c)}}var pn={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return XI(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,c,d,h;let{preset:g,options:m}=i,y,I,O,P,Z,_e,$e;if(De(g)&&m.transform!=="strict"){let{primitive:lt,semantic:vt,extend:An}=g,Ct=vt||{},{colorScheme:ut}=Ct,hn=Kn(Ct,["colorScheme"]),Xr=An||{},{colorScheme:es}=Xr,$o=Kn(Xr,["colorScheme"]),Uo=ut||{},{dark:ts}=Uo,ns=Kn(Uo,["dark"]),is=es||{},{dark:os}=is,rs=Kn(is,["dark"]),ss=De(lt)?this._toVariables({primitive:lt},m):{},as=De(hn)?this._toVariables({semantic:hn},m):{},ls=De(ns)?this._toVariables({light:ns},m):{},Tp=De(ts)?this._toVariables({dark:ts},m):{},Sp=De($o)?this._toVariables({semantic:$o},m):{},Mp=De(rs)?this._toVariables({light:rs},m):{},kp=De(os)?this._toVariables({dark:os},m):{},[Vy,By]=[(r=ss.declarations)!=null?r:"",ss.tokens],[Hy,jy]=[(s=as.declarations)!=null?s:"",as.tokens||[]],[zy,$y]=[(a=ls.declarations)!=null?a:"",ls.tokens||[]],[Uy,Gy]=[(l=Tp.declarations)!=null?l:"",Tp.tokens||[]],[Wy,qy]=[(c=Sp.declarations)!=null?c:"",Sp.tokens||[]],[Ky,Qy]=[(d=Mp.declarations)!=null?d:"",Mp.tokens||[]],[Yy,Zy]=[(h=kp.declarations)!=null?h:"",kp.tokens||[]];y=this.transformCSS(t,Vy,"light","variable",m,n,o),I=By;let Jy=this.transformCSS(t,`${Hy}${zy}`,"light","variable",m,n,o),Xy=this.transformCSS(t,`${Uy}`,"dark","variable",m,n,o);O=`${Jy}${Xy}`,P=[...new Set([...jy,...$y,...Gy])];let eb=this.transformCSS(t,`${Wy}${Ky}color-scheme:light`,"light","variable",m,n,o),tb=this.transformCSS(t,`${Yy}color-scheme:dark`,"dark","variable",m,n,o);Z=`${eb}${tb}`,_e=[...new Set([...qy,...Qy,...Zy])],$e=kt(g.css,{dt:Qn})}return{primitive:{css:y,tokens:I},semantic:{css:O,tokens:P},global:{css:Z,tokens:_e},style:$e}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,c;let d,h,g;if(De(i)&&e.transform!=="strict"){let m=t.replace("-directive",""),y=i,{colorScheme:I,extend:O,css:P}=y,Z=Kn(y,["colorScheme","extend","css"]),_e=O||{},{colorScheme:$e}=_e,lt=Kn(_e,["colorScheme"]),vt=I||{},{dark:An}=vt,Ct=Kn(vt,["dark"]),ut=$e||{},{dark:hn}=ut,Xr=Kn(ut,["dark"]),es=De(Z)?this._toVariables({[m]:fn(fn({},Z),lt)},e):{},$o=De(Ct)?this._toVariables({[m]:fn(fn({},Ct),Xr)},e):{},Uo=De(An)?this._toVariables({[m]:fn(fn({},An),hn)},e):{},[ts,ns]=[(a=es.declarations)!=null?a:"",es.tokens||[]],[is,os]=[(l=$o.declarations)!=null?l:"",$o.tokens||[]],[rs,ss]=[(c=Uo.declarations)!=null?c:"",Uo.tokens||[]],as=this.transformCSS(m,`${ts}${is}`,"light","variable",e,o,r,s),ls=this.transformCSS(m,rs,"dark","variable",e,o,r,s);d=`${as}${ls}`,h=[...new Set([...ns,...os,...ss])],g=kt(P,{dt:Qn})}return{css:d,tokens:h,style:g}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s;let a=t.replace("-directive",""),{preset:l,options:c}=i,d=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:d,options:c,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${kt(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[c,d])=>l.push(`${c}="${d}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,d])=>{if(qn(d)&&Object.hasOwn(d,"css")){let h=ji(d.css),g=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${g}" ${a}>${h}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((d,[h,g])=>d.push(`${h}="${g}"`)&&d,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${ji(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){let r=function(a,l={},c=[]){if(c.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};c.push(this.path),l.name=this.path,l.binding||(l.binding={});let d=this.value;if(typeof this.value=="string"&&Yr.test(this.value)){let h=this.value.trim().replace(Yr,g=>{var m;let y=g.slice(1,-1),I=this.tokens[y];if(!I)return console.warn(`Token not found for path: ${y}`),"__UNRESOLVED__";let O=I.computed(a,l,c);return Array.isArray(O)&&O.length===2?`light-dark(${O[0].value},${O[1].value})`:(m=O?.value)!=null?m:"__UNRESOLVED__"});d=K0.test(h.replace(Q0,"0"))?`calc(${h})`:h}return kn(l.binding)&&delete l.binding,c.pop(),{colorScheme:a,path:this.path,paths:l,value:d.includes("__UNRESOLVED__")?void 0:d}},s=(a,l,c)=>{Object.entries(a).forEach(([d,h])=>{let g=un(d,i.variable.excludedKeyRegex)?l:l?`${l}.${G0(d)}`:G0(d),m=c?`${c}.${d}`:d;qn(h)?s(h,g,m):(o[g]||(o[g]={paths:[],computed:(y,I={},O=[])=>{if(o[g].paths.length===1)return o[g].paths[0].computed(o[g].paths[0].scheme,I.binding,O);if(y&&y!=="none")for(let P=0;P<o[g].paths.length;P++){let Z=o[g].paths[P];if(Z.scheme===y)return Z.computed(y,I.binding,O)}return o[g].paths.map(P=>P.computed(P.scheme,I[P.scheme],O))}}),o[g].paths.push({path:m,value:h,scheme:m.includes("colorScheme.light")?"light":m.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(t,e,n),o},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(l=>!un(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let c=l,{colorScheme:d}=c,h=Kn(c,["colorScheme"]);return a[d]=h,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Lo(De(i)?`${t}${i},${t} ${i}`:t,n):Lo(t,Lo(i??":root",n))},transformCSS(t,i,e,n,o={},r,s,a){if(De(i)){let{cssLayer:l}=o;if(n!=="style"){let c=this.getColorSchemeOption(o,s);i=e==="dark"?c.reduce((d,{type:h,selector:g})=>(De(g)&&(d+=g.includes("[CSS]")?g.replace("[CSS]",i):this.getSelectorRule(g,a,h,i)),d),""):Lo(a??":root",i)}if(l){let c={name:"primeui",order:"primeui"};qn(l)&&(c.name=kt(l.name,{name:t,type:n})),De(c.name)&&(i=Lo(`@layer ${c.name}`,i),r?.layerNames(c.name))}return i}return""}},Ne={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=cp(fn({},i),{options:fn(fn({},this.defaults.options),i.options)}),this._tokens=pn.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),Lt.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=cp(fn({},this.theme),{preset:t}),this._tokens=pn.createTokens(t,this.defaults),this.clearLoadedStyleNames(),Lt.emit("preset:change",t),Lt.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=cp(fn({},this.theme),{options:t}),this.clearLoadedStyleNames(),Lt.emit("options:change",t),Lt.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return pn.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return pn.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pn.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pn.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return pn.getPreset(o)},getLayerOrderCSS(t=""){return pn.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return pn.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return pn.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return pn.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),Lt.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&Lt.emit("theme:load"))}};var X0=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var ex=0,e_=(()=>{class t{document=M(Qe);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++ex}`,id:d=void 0,media:h=void 0,nonce:g=void 0,first:m=!1,props:y={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||d&&this.document.getElementById(d)||this.document.createElement("style"),!s.isConnected){r=e;let I=this.document.head;Kr(s,"nonce",g),m&&I.firstChild?I.insertBefore(s,I.firstChild):I.appendChild(s),ip(s,{type:"text/css",media:h,nonce:g,"data-primeng-style-id":c})}return s.textContent!==r&&(s.textContent=r),{id:d,name:c,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Vo={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},tx=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,le=(()=>{class t{name="base";useStyle=M(e_);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(Po`${kt(e,{dt:Qn})}`);return r?this.useStyle.use(ji(r),H({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(o="")=>Ne.transformCSS(e.name||this.name,`${o}${Po`${n}`}`));loadGlobalCSS=(e={})=>this.load(tx,e);loadGlobalTheme=(e={},n="")=>this.load(X0,e,(o="")=>Ne.transformCSS(e.name||this.name,`${o}${Po`${n}`}`));getCommonTheme=e=>Ne.getCommon(this.name,e);getComponentTheme=e=>Ne.getComponent(this.name,e);getDirectiveTheme=e=>Ne.getDirective(this.name,e);getPresetTheme=(e,n,o)=>Ne.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>Ne.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=kt(this.css,{dt:Qn}),r=ji(Po`${o}${e}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>Ne.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[Ne.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Po`${kt(this.theme,{dt:Qn})}`,a=ji(Ne.transformCSS(r,s)),l=Object.entries(n).reduce((c,[d,h])=>c.push(`${d}="${h}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nx=(()=>{class t{theme=Le(void 0);csp=Le({nonce:void 0});isThemeChanged=!1;document=M(Qe);baseStyle=M(le);constructor(){si(()=>{Lt.on("theme:change",e=>{on(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),si(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){Ne.clearLoadedStyleNames(),Lt.clear()}onThemeChange(e){Ne.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!Ne.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,H({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,H({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,H({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(H({name:"global-style"},s),r),Ne.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),t_=(()=>{class t extends nx{ripple=Le(!1);platformId=M(Ut);inputStyle=Le(null);inputVariant=Le(null);overlayAppendTo=Le("self");overlayOptions={};csp=Le({nonce:void 0});filterMatchModeOptions={text:[tt.STARTS_WITH,tt.CONTAINS,tt.NOT_CONTAINS,tt.ENDS_WITH,tt.EQUALS,tt.NOT_EQUALS],numeric:[tt.EQUALS,tt.NOT_EQUALS,tt.LESS_THAN,tt.LESS_THAN_OR_EQUAL_TO,tt.GREATER_THAN,tt.GREATER_THAN_OR_EQUAL_TO],date:[tt.DATE_IS,tt.DATE_IS_NOT,tt.DATE_BEFORE,tt.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Ke;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=H(H({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c,filterMatchModeOptions:d,overlayAppendTo:h,zIndex:g}=e||{};n&&this.csp.set(n),h&&this.overlayAppendTo.set(h),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),d&&(this.filterMatchModeOptions=d),g&&(this.zIndex=g),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rz=new de("PRIME_NG_CONFIG");var n_=(()=>{class t extends le{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ke=(()=>{class t{document=M(Qe);platformId=M(Ut);el=M(ot);injector=M(ht);cd=M(Bi);renderer=M(Dn);config=M(t_);baseComponentStyle=M(n_);baseStyle=M(le);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Ee("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",o={}){return dl(e,n,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!qg(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>Lt.off("theme:change",e))}_loadStyles(){let e=()=>{Vo.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Vo.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Vo.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Vo.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!Ne.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,H({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,H({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,H({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(H({name:"global-style"},this.styleOptions),r),Ne.setLoadedStyleName("common")}if(!Ne.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,H({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(H({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),Ne.setLoadedStyleName(this.componentStyle?.name)}if(!Ne.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,H({name:"layer-order",first:!0},this.styleOptions)),Ne.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,H({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Vo.clearLoadedStyleNames(),Lt.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return Fo(this._getOptionValue(this.$style?.classes,e,H({instance:this},n)))}sx(e="",n=!0,o={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,H({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=Fo;static \u0275fac=function(n){return new(n||t)};static \u0275dir=ve({type:t,inputs:{dt:"dt"},features:[re([n_,le]),Ye]})}return t})();var i_=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var ix=`
    ${i_}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,ox={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":De(t.value())&&String(t.value()).length===1,"p-badge-dot":kn(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},o_=(()=>{class t extends le{name="badge";theme=ix;classes=ox;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var fp=(()=>{class t extends ke{styleClass=X();badgeSize=X();size=X();severity=X();value=X();badgeDisabled=X(!1,{transform:T});_componentStyle=M(o_);static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(w(o.cn(o.cx("root"),o.styleClass())),St("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[re([o_]),R],decls:1,vars:1,template:function(n,o){n&1&&ee(0),n&2&&xe(o.value())},dependencies:[me,ne],encapsulation:2,changeDetection:0})}return t})(),ml=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[fp,ne,ne]})}return t})();var ie=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=_e=>{if(_e)return getComputedStyle(_e).getPropertyValue("position")==="relative"?_e:r(_e.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),h=this.getViewport(),m=r(e)?.getBoundingClientRect()||{top:-1*c,left:-1*d},y,I,O="top";l.top+a+s.height>h.height?(y=l.top-m.top-s.height,O="bottom",l.top+y<0&&(y=-1*l.top)):(y=a+l.top-m.top,O="top");let P=l.left+s.width-h.width,Z=l.left-m.left;if(s.width>h.width?I=(l.left-m.left)*-1:P>0?I=Z-P:I=l.left-m.left,e.style.top=y+"px",e.style.left=I+"px",e.style.transformOrigin=O,o){let _e=Ur(/-anchor-gutter$/)?.value;e.style.marginTop=O==="bottom"?`calc(${_e??"2px"} * -1)`:_e??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,c=n.offsetWidth,d=n.getBoundingClientRect(),h=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),m=this.getViewport(),y,I;d.top+l+s>m.height?(y=d.top+h-s,e.style.transformOrigin="bottom",y<0&&(y=h)):(y=l+d.top+h,e.style.transformOrigin="top"),d.left+a>m.width?I=Math.max(0,d.left+g+c-a):I=d.left+g,e.style.top=y+"px",e.style.left=I+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let d of c){let h=this.findSingle(a,d);h&&s(h)&&n.push(h)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),d=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,h=e.scrollTop,g=e.clientHeight,m=this.getOuterHeight(n);d<0?e.scrollTop=h+d:d+m>g&&(e.scrollTop=h+d-g+m)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let d=typeof c;if(d==="string"||d==="number")l.push(c);else if(d==="object"){let h=Array.isArray(c)?o(r,c):Object.entries(c).map(([g,m])=>r==="style"&&(m||m===0)?`${g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${m}`:m?g:void 0);l=h.length?l.concat(h.filter(g=>!!g)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function r_(){w0({variableName:pp("scrollbar.width").name})}function gl(){D0({variableName:pp("scrollbar.width").name})}var Yn=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=ie.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var On=(()=>{class t extends ke{autofocus=!1;focused=!1;platformId=M(Ut);document=M(Qe);host=M(ot);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){_t(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=ie.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275dir=ve({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[R]})}return t})();var s_=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var sx=["*"],ax={root:"p-fluid"},a_=(()=>{class t extends le{name="fluid";classes=ax;theme=s_;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Bo=(()=>{class t extends ke{_componentStyle=M(a_);static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&w(o.cx("root"))},features:[re([a_]),R],ngContentSelectors:sx,decls:1,vars:0,template:function(n,o){n&1&&(rt(),et(0))},dependencies:[me],encapsulation:2,changeDetection:0})}return t})();var lx=["*"],cx=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,l_=(()=>{class t extends le{name="baseicon";css=cx;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Q=(()=>{class t extends ke{spin=!1;_componentStyle=M(l_);getClassNames(){return Fo("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&w(o.getClassNames())},inputs:{spin:[2,"spin","spin",T]},features:[re([l_]),R],ngContentSelectors:lx,decls:1,vars:0,template:function(n,o){n&1&&(rt(),et(0))},encapsulation:2,changeDetection:0})}return t})();var dx=["data-p-icon","angle-double-left"],c_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","angle-double-left"]],features:[R],attrs:dx,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M5.71602 11.164C5.80782 11.2021 5.9063 11.2215 6.00569 11.221C6.20216 11.2301 6.39427 11.1612 6.54025 11.0294C6.68191 10.8875 6.76148 10.6953 6.76148 10.4948C6.76148 10.2943 6.68191 10.1021 6.54025 9.96024L3.51441 6.9344L6.54025 3.90855C6.624 3.76126 6.65587 3.59011 6.63076 3.42254C6.60564 3.25498 6.525 3.10069 6.40175 2.98442C6.2785 2.86815 6.11978 2.79662 5.95104 2.7813C5.78229 2.76598 5.61329 2.80776 5.47112 2.89994L1.97123 6.39983C1.82957 6.54167 1.75 6.73393 1.75 6.9344C1.75 7.13486 1.82957 7.32712 1.97123 7.46896L5.47112 10.9991C5.54096 11.0698 5.62422 11.1259 5.71602 11.164ZM11.0488 10.9689C11.1775 11.1156 11.3585 11.2061 11.5531 11.221C11.7477 11.2061 11.9288 11.1156 12.0574 10.9689C12.1815 10.8302 12.25 10.6506 12.25 10.4645C12.25 10.2785 12.1815 10.0989 12.0574 9.96024L9.03158 6.93439L12.0574 3.90855C12.1248 3.76739 12.1468 3.60881 12.1204 3.45463C12.0939 3.30045 12.0203 3.15826 11.9097 3.04765C11.7991 2.93703 11.6569 2.86343 11.5027 2.83698C11.3486 2.81053 11.19 2.83252 11.0488 2.89994L7.51865 6.36957C7.37699 6.51141 7.29742 6.70367 7.29742 6.90414C7.29742 7.1046 7.37699 7.29686 7.51865 7.4387L11.0488 10.9689Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var ux=["data-p-icon","angle-double-right"],d_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","angle-double-right"]],features:[R],attrs:ux,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7.68757 11.1451C7.7791 11.1831 7.8773 11.2024 7.9764 11.2019C8.07769 11.1985 8.17721 11.1745 8.26886 11.1312C8.36052 11.088 8.44238 11.0265 8.50943 10.9505L12.0294 7.49085C12.1707 7.34942 12.25 7.15771 12.25 6.95782C12.25 6.75794 12.1707 6.56622 12.0294 6.42479L8.50943 2.90479C8.37014 2.82159 8.20774 2.78551 8.04633 2.80192C7.88491 2.81833 7.73309 2.88635 7.6134 2.99588C7.4937 3.10541 7.41252 3.25061 7.38189 3.40994C7.35126 3.56927 7.37282 3.73423 7.44337 3.88033L10.4605 6.89748L7.44337 9.91463C7.30212 10.0561 7.22278 10.2478 7.22278 10.4477C7.22278 10.6475 7.30212 10.8393 7.44337 10.9807C7.51301 11.0512 7.59603 11.1071 7.68757 11.1451ZM1.94207 10.9505C2.07037 11.0968 2.25089 11.1871 2.44493 11.2019C2.63898 11.1871 2.81949 11.0968 2.94779 10.9505L6.46779 7.49085C6.60905 7.34942 6.68839 7.15771 6.68839 6.95782C6.68839 6.75793 6.60905 6.56622 6.46779 6.42479L2.94779 2.90479C2.80704 2.83757 2.6489 2.81563 2.49517 2.84201C2.34143 2.86839 2.19965 2.94178 2.08936 3.05207C1.97906 3.16237 1.90567 3.30415 1.8793 3.45788C1.85292 3.61162 1.87485 3.76975 1.94207 3.9105L4.95922 6.92765L1.94207 9.9448C1.81838 10.0831 1.75 10.2621 1.75 10.4477C1.75 10.6332 1.81838 10.8122 1.94207 10.9505Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var px=["data-p-icon","angle-down"],u_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","angle-down"]],features:[R],attrs:px,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var fx=["data-p-icon","angle-left"],p_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","angle-left"]],features:[R],attrs:fx,decls:1,vars:0,consts:[["d","M8.75 11.185C8.65146 11.1854 8.55381 11.1662 8.4628 11.1284C8.37179 11.0906 8.28924 11.0351 8.22 10.965L4.72 7.46496C4.57955 7.32433 4.50066 7.13371 4.50066 6.93496C4.50066 6.73621 4.57955 6.54558 4.72 6.40496L8.22 2.93496C8.36095 2.84357 8.52851 2.80215 8.69582 2.81733C8.86312 2.83252 9.02048 2.90344 9.14268 3.01872C9.26487 3.134 9.34483 3.28696 9.36973 3.4531C9.39463 3.61924 9.36303 3.78892 9.28 3.93496L6.28 6.93496L9.28 9.93496C9.42045 10.0756 9.49934 10.2662 9.49934 10.465C9.49934 10.6637 9.42045 10.8543 9.28 10.995C9.13526 11.1257 8.9448 11.1939 8.75 11.185Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var hx=["data-p-icon","angle-right"],f_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","angle-right"]],features:[R],attrs:hx,decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var mx=["data-p-icon","angle-up"],h_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","angle-up"]],features:[R],attrs:mx,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var gx=["data-p-icon","arrow-down"],hp=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","arrow-down"]],features:[R],attrs:gx,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var _x=["data-p-icon","arrow-up"],mp=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","arrow-up"]],features:[R],attrs:_x,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var yx=["data-p-icon","blank"],m_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","blank"]],features:[R],attrs:yx,decls:1,vars:0,consts:[["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(n,o){n&1&&(N(),U(0,"rect",0))},encapsulation:2})}return t})();var bx=["data-p-icon","calendar"],g_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","calendar"]],features:[R],attrs:bx,decls:1,vars:0,consts:[["d","M10.7838 1.51351H9.83783V0.567568C9.83783 0.417039 9.77804 0.272676 9.6716 0.166237C9.56516 0.0597971 9.42079 0 9.27027 0C9.11974 0 8.97538 0.0597971 8.86894 0.166237C8.7625 0.272676 8.7027 0.417039 8.7027 0.567568V1.51351H5.29729V0.567568C5.29729 0.417039 5.2375 0.272676 5.13106 0.166237C5.02462 0.0597971 4.88025 0 4.72973 0C4.5792 0 4.43484 0.0597971 4.3284 0.166237C4.22196 0.272676 4.16216 0.417039 4.16216 0.567568V1.51351H3.21621C2.66428 1.51351 2.13494 1.73277 1.74467 2.12305C1.35439 2.51333 1.13513 3.04266 1.13513 3.59459V11.9189C1.13513 12.4709 1.35439 13.0002 1.74467 13.3905C2.13494 13.7807 2.66428 14 3.21621 14H10.7838C11.3357 14 11.865 13.7807 12.2553 13.3905C12.6456 13.0002 12.8649 12.4709 12.8649 11.9189V3.59459C12.8649 3.04266 12.6456 2.51333 12.2553 2.12305C11.865 1.73277 11.3357 1.51351 10.7838 1.51351ZM3.21621 2.64865H4.16216V3.59459C4.16216 3.74512 4.22196 3.88949 4.3284 3.99593C4.43484 4.10237 4.5792 4.16216 4.72973 4.16216C4.88025 4.16216 5.02462 4.10237 5.13106 3.99593C5.2375 3.88949 5.29729 3.74512 5.29729 3.59459V2.64865H8.7027V3.59459C8.7027 3.74512 8.7625 3.88949 8.86894 3.99593C8.97538 4.10237 9.11974 4.16216 9.27027 4.16216C9.42079 4.16216 9.56516 4.10237 9.6716 3.99593C9.77804 3.88949 9.83783 3.74512 9.83783 3.59459V2.64865H10.7838C11.0347 2.64865 11.2753 2.74831 11.4527 2.92571C11.6301 3.10311 11.7297 3.34371 11.7297 3.59459V5.67568H2.27027V3.59459C2.27027 3.34371 2.36993 3.10311 2.54733 2.92571C2.72473 2.74831 2.96533 2.64865 3.21621 2.64865ZM10.7838 12.8649H3.21621C2.96533 12.8649 2.72473 12.7652 2.54733 12.5878C2.36993 12.4104 2.27027 12.1698 2.27027 11.9189V6.81081H11.7297V11.9189C11.7297 12.1698 11.6301 12.4104 11.4527 12.5878C11.2753 12.7652 11.0347 12.8649 10.7838 12.8649Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var vx=["data-p-icon","check"],_l=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","check"]],features:[R],attrs:vx,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var Cx=["data-p-icon","chevron-down"],yl=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[R],attrs:Cx,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var wx=["data-p-icon","chevron-left"],__=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","chevron-left"]],features:[R],attrs:wx,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var Dx=["data-p-icon","chevron-right"],y_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","chevron-right"]],features:[R],attrs:Dx,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var Ix=["data-p-icon","chevron-up"],b_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","chevron-up"]],features:[R],attrs:Ix,decls:1,vars:0,consts:[["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var xx=["data-p-icon","filter"],v_=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","filter"]],features:[R],attrs:xx,decls:5,vars:2,consts:[["d","M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var Ex=["data-p-icon","filter-slash"],C_=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","filter-slash"]],features:[R],attrs:Ex,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.4994 0.0920138C13.5967 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7827 0.780968 13.7403 0.889466 13.6707 0.98L11.406 4.06823C11.3099 4.19928 11.1656 4.28679 11.005 4.3115C10.8444 4.33621 10.6805 4.2961 10.5495 4.2C10.4184 4.1039 10.3309 3.95967 10.3062 3.79905C10.2815 3.63843 10.3216 3.47458 10.4177 3.34353L11.9412 1.23529H7.41184C7.24803 1.23529 7.09093 1.17022 6.97509 1.05439C6.85926 0.938558 6.79419 0.781457 6.79419 0.617647C6.79419 0.453837 6.85926 0.296736 6.97509 0.180905C7.09093 0.0650733 7.24803 0 7.41184 0H13.1765C13.2905 0.000692754 13.4022 0.0325088 13.4994 0.0920138ZM4.20008 0.181168H4.24126L13.2013 9.03411C13.3169 9.14992 13.3819 9.3069 13.3819 9.47058C13.3819 9.63426 13.3169 9.79124 13.2013 9.90705C13.1445 9.96517 13.0766 10.0112 13.0016 10.0423C12.9266 10.0735 12.846 10.0891 12.7648 10.0882C12.6836 10.0886 12.6032 10.0728 12.5283 10.0417C12.4533 10.0106 12.3853 9.96479 12.3283 9.90705L9.3142 6.92587L9.26479 6.99999V13.3823C9.26265 13.5455 9.19689 13.7014 9.08152 13.8167C8.96615 13.9321 8.81029 13.9979 8.64714 14H5.35302C5.18987 13.9979 5.03401 13.9321 4.91864 13.8167C4.80327 13.7014 4.73751 13.5455 4.73537 13.3823V6.99999L0.329492 1.02117C0.259855 0.930634 0.21745 0.822137 0.207241 0.708376C0.197031 0.594616 0.21944 0.480301 0.271844 0.378815C0.324343 0.277621 0.403484 0.192687 0.500724 0.133182C0.597964 0.073677 0.709609 0.041861 0.823609 0.0411682H3.86243C3.92448 0.0461551 3.9855 0.060022 4.04361 0.0823446C4.10037 0.10735 4.15311 0.140655 4.20008 0.181168ZM8.02949 6.79411C8.02884 6.66289 8.07235 6.53526 8.15302 6.43176L8.42478 6.05293L3.55773 1.23529H2.0589L5.84714 6.43176C5.92781 6.53526 5.97132 6.66289 5.97067 6.79411V12.7647H8.02949V6.79411Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var Tx=["data-p-icon","minus"],w_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","minus"]],features:[R],attrs:Tx,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var Sx=["data-p-icon","plus"],D_=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","plus"]],features:[R],attrs:Sx,decls:5,vars:2,consts:[["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var Mx=["data-p-icon","search"],I_=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","search"]],features:[R],attrs:Mx,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var kx=["data-p-icon","sort-alt"],x_=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","sort-alt"]],features:[R],attrs:kx,decls:8,vars:2,consts:[["d","M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z","fill","currentColor"],["d","M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z","fill","currentColor"],["d","M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z","fill","currentColor"],["d","M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0)(2,"path",1)(3,"path",2)(4,"path",3),be(),ye(5,"defs")(6,"clipPath",4),U(7,"rect",5),be()()),n&2&&(k("clip-path",o.pathId),f(6),Ve("id",o.pathId))},encapsulation:2})}return t})();var Ox=["data-p-icon","sort-amount-down"],E_=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","sort-amount-down"]],features:[R],attrs:Ox,decls:5,vars:2,consts:[["d","M4.93953 10.5858L3.83759 11.6877V0.677419C3.83759 0.307097 3.53049 0 3.16017 0C2.78985 0 2.48275 0.307097 2.48275 0.677419V11.6877L1.38082 10.5858C1.11888 10.3239 0.685331 10.3239 0.423396 10.5858C0.16146 10.8477 0.16146 11.2813 0.423396 11.5432L2.68146 13.8013C2.74469 13.8645 2.81694 13.9097 2.89823 13.9458C2.97952 13.9819 3.06985 14 3.16017 14C3.25049 14 3.33178 13.9819 3.42211 13.9458C3.5034 13.9097 3.57565 13.8645 3.63888 13.8013L5.89694 11.5432C6.15888 11.2813 6.15888 10.8477 5.89694 10.5858C5.63501 10.3239 5.20146 10.3239 4.93953 10.5858ZM13.0957 0H7.22468C6.85436 0 6.54726 0.307097 6.54726 0.677419C6.54726 1.04774 6.85436 1.35484 7.22468 1.35484H13.0957C13.466 1.35484 13.7731 1.04774 13.7731 0.677419C13.7731 0.307097 13.466 0 13.0957 0ZM7.22468 5.41935H9.48275C9.85307 5.41935 10.1602 5.72645 10.1602 6.09677C10.1602 6.4671 9.85307 6.77419 9.48275 6.77419H7.22468C6.85436 6.77419 6.54726 6.4671 6.54726 6.09677C6.54726 5.72645 6.85436 5.41935 7.22468 5.41935ZM7.6763 8.12903H7.22468C6.85436 8.12903 6.54726 8.43613 6.54726 8.80645C6.54726 9.17677 6.85436 9.48387 7.22468 9.48387H7.6763C8.04662 9.48387 8.35372 9.17677 8.35372 8.80645C8.35372 8.43613 8.04662 8.12903 7.6763 8.12903ZM7.22468 2.70968H11.2892C11.6595 2.70968 11.9666 3.01677 11.9666 3.3871C11.9666 3.75742 11.6595 4.06452 11.2892 4.06452H7.22468C6.85436 4.06452 6.54726 3.75742 6.54726 3.3871C6.54726 3.01677 6.85436 2.70968 7.22468 2.70968Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var Rx=["data-p-icon","sort-amount-up-alt"],T_=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","sort-amount-up-alt"]],features:[R],attrs:Rx,decls:5,vars:2,consts:[["d","M3.63435 0.19871C3.57113 0.135484 3.49887 0.0903226 3.41758 0.0541935C3.255 -0.0180645 3.06532 -0.0180645 2.90274 0.0541935C2.82145 0.0903226 2.74919 0.135484 2.68597 0.19871L0.427901 2.45677C0.165965 2.71871 0.165965 3.15226 0.427901 3.41419C0.689836 3.67613 1.12338 3.67613 1.38532 3.41419L2.48726 2.31226V13.3226C2.48726 13.6929 2.79435 14 3.16467 14C3.535 14 3.84209 13.6929 3.84209 13.3226V2.31226L4.94403 3.41419C5.07951 3.54968 5.25113 3.6129 5.42274 3.6129C5.59435 3.6129 5.76597 3.54968 5.90145 3.41419C6.16338 3.15226 6.16338 2.71871 5.90145 2.45677L3.64338 0.19871H3.63435ZM13.7685 13.3226C13.7685 12.9523 13.4615 12.6452 13.0911 12.6452H7.22016C6.84984 12.6452 6.54274 12.9523 6.54274 13.3226C6.54274 13.6929 6.84984 14 7.22016 14H13.0911C13.4615 14 13.7685 13.6929 13.7685 13.3226ZM7.22016 8.58064C6.84984 8.58064 6.54274 8.27355 6.54274 7.90323C6.54274 7.5329 6.84984 7.22581 7.22016 7.22581H9.47823C9.84855 7.22581 10.1556 7.5329 10.1556 7.90323C10.1556 8.27355 9.84855 8.58064 9.47823 8.58064H7.22016ZM7.22016 5.87097H7.67177C8.0421 5.87097 8.34919 5.56387 8.34919 5.19355C8.34919 4.82323 8.0421 4.51613 7.67177 4.51613H7.22016C6.84984 4.51613 6.54274 4.82323 6.54274 5.19355C6.54274 5.56387 6.84984 5.87097 7.22016 5.87097ZM11.2847 11.2903H7.22016C6.84984 11.2903 6.54274 10.9832 6.54274 10.6129C6.54274 10.2426 6.84984 9.93548 7.22016 9.93548H11.2847C11.655 9.93548 11.9621 10.2426 11.9621 10.6129C11.9621 10.9832 11.655 11.2903 11.2847 11.2903Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var Fx=["data-p-icon","spinner"],zi=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","spinner"]],features:[R],attrs:Fx,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var Ax=["data-p-icon","times"],Ho=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","times"]],features:[R],attrs:Ax,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var Nx=["data-p-icon","trash"],S_=(()=>{class t extends Q{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Ee()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","trash"]],features:[R],attrs:Nx,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M3.44802 13.9955H10.552C10.8056 14.0129 11.06 13.9797 11.3006 13.898C11.5412 13.8163 11.7632 13.6877 11.9537 13.5196C12.1442 13.3515 12.2995 13.1473 12.4104 12.9188C12.5213 12.6903 12.5858 12.442 12.6 12.1884V4.36041H13.4C13.5591 4.36041 13.7117 4.29722 13.8243 4.18476C13.9368 4.07229 14 3.91976 14 3.76071C14 3.60166 13.9368 3.44912 13.8243 3.33666C13.7117 3.22419 13.5591 3.16101 13.4 3.16101H12.0537C12.0203 3.1557 11.9863 3.15299 11.952 3.15299C11.9178 3.15299 11.8838 3.1557 11.8503 3.16101H11.2285C11.2421 3.10893 11.2487 3.05513 11.248 3.00106V1.80966C11.2171 1.30262 10.9871 0.828306 10.608 0.48989C10.229 0.151475 9.73159 -0.0236625 9.22402 0.00257442H4.77602C4.27251 -0.0171866 3.78126 0.160868 3.40746 0.498617C3.03365 0.836366 2.807 1.30697 2.77602 1.80966V3.00106C2.77602 3.0556 2.78346 3.10936 2.79776 3.16101H0.6C0.521207 3.16101 0.443185 3.17652 0.37039 3.20666C0.297595 3.2368 0.231451 3.28097 0.175736 3.33666C0.120021 3.39235 0.0758251 3.45846 0.0456722 3.53121C0.0155194 3.60397 0 3.68196 0 3.76071C0 3.83946 0.0155194 3.91744 0.0456722 3.9902C0.0758251 4.06296 0.120021 4.12907 0.175736 4.18476C0.231451 4.24045 0.297595 4.28462 0.37039 4.31476C0.443185 4.3449 0.521207 4.36041 0.6 4.36041H1.40002V12.1884C1.41426 12.442 1.47871 12.6903 1.58965 12.9188C1.7006 13.1473 1.85582 13.3515 2.04633 13.5196C2.23683 13.6877 2.45882 13.8163 2.69944 13.898C2.94005 13.9797 3.1945 14.0129 3.44802 13.9955ZM2.60002 4.36041H11.304V12.1884C11.304 12.5163 10.952 12.7961 10.504 12.7961H3.40002C2.97602 12.7961 2.60002 12.5163 2.60002 12.1884V4.36041ZM3.95429 3.16101C3.96859 3.10936 3.97602 3.0556 3.97602 3.00106V1.80966C3.97602 1.48183 4.33602 1.20197 4.77602 1.20197H9.24802C9.66403 1.20197 10.048 1.48183 10.048 1.80966V3.00106C10.0473 3.05515 10.054 3.10896 10.0678 3.16101H3.95429ZM5.57571 10.997C5.41731 10.995 5.26597 10.9311 5.15395 10.8191C5.04193 10.7071 4.97808 10.5558 4.97601 10.3973V6.77517C4.97601 6.61612 5.0392 6.46359 5.15166 6.35112C5.26413 6.23866 5.41666 6.17548 5.57571 6.17548C5.73476 6.17548 5.8873 6.23866 5.99976 6.35112C6.11223 6.46359 6.17541 6.61612 6.17541 6.77517V10.3894C6.17647 10.4688 6.16174 10.5476 6.13208 10.6213C6.10241 10.695 6.05841 10.762 6.00261 10.8186C5.94682 10.8751 5.88035 10.92 5.80707 10.9506C5.73378 10.9813 5.65514 10.9971 5.57571 10.997ZM7.99968 10.8214C8.11215 10.9339 8.26468 10.997 8.42373 10.997C8.58351 10.9949 8.73604 10.93 8.84828 10.8163C8.96052 10.7025 9.02345 10.5491 9.02343 10.3894V6.77517C9.02343 6.61612 8.96025 6.46359 8.84778 6.35112C8.73532 6.23866 8.58278 6.17548 8.42373 6.17548C8.26468 6.17548 8.11215 6.23866 7.99968 6.35112C7.88722 6.46359 7.82404 6.61612 7.82404 6.77517V10.3973C7.82404 10.5564 7.88722 10.7089 7.99968 10.8214Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(N(),ye(0,"g"),U(1,"path",0),be(),ye(2,"defs")(3,"clipPath",1),U(4,"rect",2),be()()),n&2&&(k("clip-path",o.pathId),f(3),Ve("id",o.pathId))},encapsulation:2})}return t})();var M_=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Lx=`
    ${M_}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Px={root:"p-ink"},k_=(()=>{class t extends le{name="ripple";theme=Lx;classes=Px;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Rn=(()=>{class t extends ke{zone=M(we);_componentStyle=M(k_);animationListener;mouseDownListener;timeout;constructor(){super(),si(()=>{_t(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(En(n,"p-ink-active"),!Sn(n)&&!Mn(n)){let a=Math.max(dt(this.el.nativeElement),dn(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=F0(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Mn(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-Sn(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),ln(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&En(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&En(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),En(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,N0(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=ve({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[re([k_]),R]})}return t})();var O_=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Bx=["content"],Hx=["loadingicon"],jx=["icon"],zx=["*"],F_=t=>({class:t});function $x(t,i){t&1&&j(0)}function Ux(t,i){if(t&1&&G(0,"span"),t&2){let e=u(3);w(e.cx("loadingIcon")),k("aria-hidden",!0)("data-pc-section","loadingicon")}}function Gx(t,i){if(t&1&&(N(),G(0,"svg",7)),t&2){let e=u(3);w(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),p("spin",!0),k("aria-hidden",!0)("data-pc-section","loadingicon")}}function Wx(t,i){if(t&1&&(z(0),_(1,Ux,1,4,"span",3)(2,Gx,1,5,"svg",6),$()),t&2){let e=u(2);f(),p("ngIf",e.loadingIcon),f(),p("ngIf",!e.loadingIcon)}}function qx(t,i){}function Kx(t,i){if(t&1&&_(0,qx,0,0,"ng-template",8),t&2){let e=u(2);p("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Qx(t,i){if(t&1&&(z(0),_(1,Wx,3,2,"ng-container",2)(2,Kx,1,1,null,5),$()),t&2){let e=u();f(),p("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),f(),p("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",te(3,F_,e.cx("loadingIcon")))}}function Yx(t,i){if(t&1&&G(0,"span"),t&2){let e=u(2);w(e.cx("icon")),k("data-pc-section","icon")}}function Zx(t,i){}function Jx(t,i){if(t&1&&_(0,Zx,0,0,"ng-template",8),t&2){let e=u(2);p("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Xx(t,i){if(t&1&&(z(0),_(1,Yx,1,3,"span",3)(2,Jx,1,1,null,5),$()),t&2){let e=u();f(),p("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),f(),p("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",te(3,F_,e.cx("icon")))}}function eE(t,i){if(t&1&&(D(0,"span"),ee(1),C()),t&2){let e=u();w(e.cx("label")),k("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),f(),xe(e.label)}}function tE(t,i){if(t&1&&G(0,"p-badge",9),t&2){let e=u();p("value",e.badge)("severity",e.badgeSeverity)}}var nE={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},R_=(()=>{class t extends le{name="button";theme=O_;classes=nE;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var bl=(()=>{class t extends ke{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=X(void 0,{transform:T});onClick=new A;onFocus=new A;onBlur=new A;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=M(Bo,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=M(R_);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(F(r,Bx,5),F(r,Hx,5),F(r,jx,5),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.contentTemplate=s.first),x(s=E())&&(o.loadingIconTemplate=s.first),x(s=E())&&(o.iconTemplate=s.first),x(s=E())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",T],loading:[2,"loading","loading",T],loadingIcon:"loadingIcon",raised:[2,"raised","raised",T],rounded:[2,"rounded","rounded",T],text:[2,"text","text",T],plain:[2,"plain","plain",T],severity:"severity",outlined:[2,"outlined","outlined",T],link:[2,"link","link",T],tabindex:[2,"tabindex","tabindex",pe],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",T],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[re([R_]),R],ngContentSelectors:zx,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,o){n&1&&(rt(),D(0,"button",0),B("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),et(1),_(2,$x,1,0,"ng-container",1)(3,Qx,3,5,"ng-container",2)(4,Xx,3,5,"ng-container",2)(5,eE,2,5,"span",3)(6,tE,1,2,"p-badge",4),C()),n&2&&(w(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),p("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),k("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),f(2),p("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),f(),p("ngIf",o.loading),f(),p("ngIf",!o.loading),f(),p("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),f(),p("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[me,qe,Be,gt,Rn,On,zi,ml,fp,ne],encapsulation:2,changeDetection:0})}return t})(),A_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[me,bl,ne,ne]})}return t})();var vl=(()=>{class t extends ke{modelValue=Le(void 0);$filled=Me(()=>De(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275dir=ve({type:t,features:[R]})}return t})();var Fn=(()=>{class t extends vl{required=X(void 0,{transform:T});invalid=X(void 0,{transform:T});disabled=X(void 0,{transform:T});name=X();_disabled=Le(!1);$disabled=Me(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275dir=ve({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[R]})}return t})();var N_=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var iE=["icon"],oE=["input"],rE=(t,i)=>({checked:t,class:i});function sE(t,i){if(t&1&&G(0,"span",7),t&2){let e=u(3);w(e.cx("icon")),p("ngClass",e.checkboxIcon),k("data-pc-section","icon")}}function aE(t,i){if(t&1&&(N(),G(0,"svg",8)),t&2){let e=u(3);w(e.cx("icon")),k("data-pc-section","icon")}}function lE(t,i){if(t&1&&(z(0),_(1,sE,1,4,"span",5)(2,aE,1,3,"svg",6),$()),t&2){let e=u(2);f(),p("ngIf",e.checkboxIcon),f(),p("ngIf",!e.checkboxIcon)}}function cE(t,i){if(t&1&&(N(),G(0,"svg",9)),t&2){let e=u(2);w(e.cx("icon")),k("data-pc-section","icon")}}function dE(t,i){if(t&1&&(z(0),_(1,lE,3,2,"ng-container",2)(2,cE,1,3,"svg",4),$()),t&2){let e=u();f(),p("ngIf",e.checked),f(),p("ngIf",e._indeterminate())}}function uE(t,i){}function pE(t,i){t&1&&_(0,uE,0,0,"ng-template")}var fE=`
    ${N_}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,hE={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},L_=(()=>{class t extends le{name="checkbox";theme=fE;classes=hE;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var mE={provide:yt,useExisting:je(()=>P_),multi:!0},P_=(()=>{class t extends Fn{value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=X();size=X();onChange=new A;onFocus=new A;onBlur=new A;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:j0(this.value,this.modelValue())}_indeterminate=Le(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=M(L_);$variant=Me(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,o=this.injector.get(At,null,{optional:!0,self:!0}),r=o&&!this.formControl?o.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=r.filter(s=>!Wt(s,this.value)):n=r?[...r,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,r){if(n&1&&(F(r,iE,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.checkboxIconTemplate=s.first),x(s=E())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&Ce(oE,5),n&2){let r;x(r=E())&&(o.inputViewChild=r.first)}},hostVars:5,hostBindings:function(n,o){n&2&&(k("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.$disabled()),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{value:"value",binary:[2,"binary","binary",T],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",pe],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",T],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",T],autofocus:[2,"autofocus","autofocus",T],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[re([mE,L_]),R,Ye],decls:5,vars:22,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],["data-p-icon","check",3,"class",4,"ngIf"],[3,"ngClass"],["data-p-icon","check"],["data-p-icon","minus"]],template:function(n,o){if(n&1){let r=q();D(0,"input",1,0),B("focus",function(a){return b(r),v(o.onInputFocus(a))})("blur",function(a){return b(r),v(o.onInputBlur(a))})("change",function(a){return b(r),v(o.handleChange(a))}),C(),D(2,"div"),_(3,dE,3,2,"ng-container",2)(4,pE,1,0,null,3),C()}n&2&&(Tt(o.inputStyle),w(o.cn(o.cx("input"),o.inputClass)),p("checked",o.checked),k("id",o.inputId)("value",o.value)("name",o.name())("tabindex",o.tabindex)("required",o.required()?"":void 0)("readonly",o.readonly?"":void 0)("disabled",o.$disabled()?"":void 0)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),f(2),w(o.cx("box")),f(),p("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),f(),p("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",We(19,rE,o.checked,o.cx("icon"))))},dependencies:[me,rn,qe,Be,ne,_l,w_],encapsulation:2,changeDetection:0})}return t})(),V_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[P_,ne,ne]})}return t})();var jo=(()=>{class t extends Fn{pcFluid=M(Bo,{optional:!0,host:!0,skipSelf:!0});fluid=X(void 0,{transform:T});variant=X();size=X();inputSize=X();pattern=X();min=X();max=X();step=X();minlength=X();maxlength=X();$variant=Me(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275dir=ve({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[R]})}return t})();var B_=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var gE=`
    ${B_}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,_E={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},H_=(()=>{class t extends le{name="inputtext";theme=gE;classes=_E;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var zo=(()=>{class t extends vl{ngControl=M(At,{optional:!0,self:!0});pcFluid=M(Bo,{optional:!0,host:!0,skipSelf:!0});pSize;variant=X();fluid=X(void 0,{transform:T});invalid=X(void 0,{transform:T});$variant=Me(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=M(H_);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275dir=ve({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,o){n&1&&B("input",function(s){return o.onInput(s)}),n&2&&w(o.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[re([H_]),R]})}return t})(),j_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({})}return t})();var se=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=this.isDate(i),c=this.isDate(e);if(l!=c)return!1;if(l&&c)return i.getTime()==e.getTime();var d=i instanceof RegExp,h=e instanceof RegExp;if(d!=h)return!1;if(d&&h)return i.toString()==e.toString();var g=Object.keys(i);if(s=g.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,g[r]))return!1;for(r=s;r--!==0;)if(a=g[r],!this.equalsByValue(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),o=i;for(let r=0,s=n.length;r<s;++r){if(o==null)return null;o=o[n[r]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let o;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,o){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],o)>e){n.splice(s,0,i),r=!0;break}r||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==i){n=o;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,o=1){let r=-1,s=this.isEmpty(i),a=this.isEmpty(e);return s&&a?r=0:s?r=o:a?r=-o:typeof i=="string"&&typeof e=="string"?r=i.localeCompare(e,n,{numeric:!0}):r=i<e?-1:i>e?1:0,r}static sort(i,e,n=1,o,r=1){let s=t.compare(i,e,o,n),a=n;return(t.isEmpty(i)||t.isEmpty(e))&&(a=r===1?n:r),a*s}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return H(H({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=i instanceof Date,c=e instanceof Date;if(l!=c)return!1;if(l&&c)return i.getTime()==e.getTime();var d=i instanceof RegExp,h=e instanceof RegExp;if(d!=h)return!1;if(d&&h)return i.toString()==e.toString();var g=Object.keys(i);if(s=g.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,g[r]))return!1;for(r=s;r--!==0;)if(a=g[r],!this.deepEquals(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},z_=0;function $_(t="pn_id_"){return z_++,`${t}${z_}`}function yE(){let t=[],i=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var Ot=yE();var U_=`
    .p-datepicker {
        display: inline-flex;
        max-width: 100%;
    }

    .p-datepicker-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-datepicker-dropdown {
        cursor: pointer;
        display: inline-flex;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('datepicker.dropdown.width');
        border-start-end-radius: dt('datepicker.dropdown.border.radius');
        border-end-end-radius: dt('datepicker.dropdown.border.radius');
        background: dt('datepicker.dropdown.background');
        border: 1px solid dt('datepicker.dropdown.border.color');
        border-inline-start: 0 none;
        color: dt('datepicker.dropdown.color');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        outline-color: transparent;
    }

    .p-datepicker-dropdown:not(:disabled):hover {
        background: dt('datepicker.dropdown.hover.background');
        border-color: dt('datepicker.dropdown.hover.border.color');
        color: dt('datepicker.dropdown.hover.color');
    }

    .p-datepicker-dropdown:not(:disabled):active {
        background: dt('datepicker.dropdown.active.background');
        border-color: dt('datepicker.dropdown.active.border.color');
        color: dt('datepicker.dropdown.active.color');
    }

    .p-datepicker-dropdown:focus-visible {
        box-shadow: dt('datepicker.dropdown.focus.ring.shadow');
        outline: dt('datepicker.dropdown.focus.ring.width') dt('datepicker.dropdown.focus.ring.style') dt('datepicker.dropdown.focus.ring.color');
        outline-offset: dt('datepicker.dropdown.focus.ring.offset');
    }

    .p-datepicker:has(.p-datepicker-input-icon-container) {
        position: relative;
    }

    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-datepicker-input-icon-container {
        cursor: pointer;
        position: absolute;
        top: 50%;
        inset-inline-end: dt('form.field.padding.x');
        margin-block-start: calc(-1 * (dt('icon.size') / 2));
        color: dt('datepicker.input.icon.color');
        line-height: 1;
    }

    .p-datepicker-fluid {
        display: flex;
    }

    .p-datepicker-fluid .p-datepicker-input {
        width: 1%;
    }

    .p-datepicker .p-datepicker-panel {
        min-width: 100%;
    }

    .p-datepicker-panel {
        width: auto;
        padding: dt('datepicker.panel.padding');
        background: dt('datepicker.panel.background');
        color: dt('datepicker.panel.color');
        border: 1px solid dt('datepicker.panel.border.color');
        border-radius: dt('datepicker.panel.border.radius');
        box-shadow: dt('datepicker.panel.shadow');
    }

    .p-datepicker-panel-inline {
        display: inline-block;
        overflow-x: auto;
        box-shadow: none;
    }

    .p-datepicker-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('datepicker.header.padding');
        background: dt('datepicker.header.background');
        color: dt('datepicker.header.color');
        border-block-end: 1px solid dt('datepicker.header.border.color');
    }

    .p-datepicker-next-button:dir(rtl) {
        order: -1;
    }

    .p-datepicker-prev-button:dir(rtl) {
        order: 1;
    }

    .p-datepicker-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: dt('datepicker.title.gap');
        font-weight: dt('datepicker.title.font.weight');
    }

    .p-datepicker-select-year,
    .p-datepicker-select-month {
        border: none;
        background: transparent;
        margin: 0;
        cursor: pointer;
        font-weight: inherit;
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration');
    }

    .p-datepicker-select-month {
        padding: dt('datepicker.select.month.padding');
        color: dt('datepicker.select.month.color');
        border-radius: dt('datepicker.select.month.border.radius');
    }

    .p-datepicker-select-year {
        padding: dt('datepicker.select.year.padding');
        color: dt('datepicker.select.year.color');
        border-radius: dt('datepicker.select.year.border.radius');
    }

    .p-datepicker-select-month:enabled:hover {
        background: dt('datepicker.select.month.hover.background');
        color: dt('datepicker.select.month.hover.color');
    }

    .p-datepicker-select-year:enabled:hover {
        background: dt('datepicker.select.year.hover.background');
        color: dt('datepicker.select.year.hover.color');
    }

    .p-datepicker-select-month:focus-visible,
    .p-datepicker-select-year:focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-calendar-container {
        display: flex;
    }

    .p-datepicker-calendar-container .p-datepicker-calendar {
        flex: 1 1 auto;
        border-inline-start: 1px solid dt('datepicker.group.border.color');
        padding-inline-end: dt('datepicker.group.gap');
        padding-inline-start: dt('datepicker.group.gap');
    }

    .p-datepicker-calendar-container .p-datepicker-calendar:first-child {
        padding-inline-start: 0;
        border-inline-start: 0 none;
    }

    .p-datepicker-calendar-container .p-datepicker-calendar:last-child {
        padding-inline-end: 0;
    }

    .p-datepicker-day-view {
        width: 100%;
        border-collapse: collapse;
        font-size: 1rem;
        margin: dt('datepicker.day.view.margin');
    }

    .p-datepicker-weekday-cell {
        padding: dt('datepicker.week.day.padding');
    }

    .p-datepicker-weekday {
        font-weight: dt('datepicker.week.day.font.weight');
        color: dt('datepicker.week.day.color');
    }

    .p-datepicker-day-cell {
        padding: dt('datepicker.date.padding');
    }

    .p-datepicker-day {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        width: dt('datepicker.date.width');
        height: dt('datepicker.date.height');
        border-radius: dt('datepicker.date.border.radius');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border: 1px solid transparent;
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {
        background: dt('datepicker.date.hover.background');
        color: dt('datepicker.date.hover.color');
    }

    .p-datepicker-day:focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-day-selected {
        background: dt('datepicker.date.selected.background');
        color: dt('datepicker.date.selected.color');
    }

    .p-datepicker-day-selected-range {
        background: dt('datepicker.date.range.selected.background');
        color: dt('datepicker.date.range.selected.color');
    }

    .p-datepicker-today > .p-datepicker-day {
        background: dt('datepicker.today.background');
        color: dt('datepicker.today.color');
    }

    .p-datepicker-today > .p-datepicker-day-selected {
        background: dt('datepicker.date.selected.background');
        color: dt('datepicker.date.selected.color');
    }

    .p-datepicker-today > .p-datepicker-day-selected-range {
        background: dt('datepicker.date.range.selected.background');
        color: dt('datepicker.date.range.selected.color');
    }

    .p-datepicker-weeknumber {
        text-align: center;
    }

    .p-datepicker-month-view {
        margin: dt('datepicker.month.view.margin');
    }

    .p-datepicker-month {
        width: 33.3%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: dt('datepicker.month.padding');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border-radius: dt('datepicker.month.border.radius');
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {
        color: dt('datepicker.date.hover.color');
        background: dt('datepicker.date.hover.background');
    }

    .p-datepicker-month-selected {
        color: dt('datepicker.date.selected.color');
        background: dt('datepicker.date.selected.background');
    }

    .p-datepicker-month:not(.p-disabled):focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-year-view {
        margin: dt('datepicker.year.view.margin');
    }

    .p-datepicker-year {
        width: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
        padding: dt('datepicker.year.padding');
        transition:
            background dt('datepicker.transition.duration'),
            color dt('datepicker.transition.duration'),
            border-color dt('datepicker.transition.duration'),
            box-shadow dt('datepicker.transition.duration'),
            outline-color dt('datepicker.transition.duration');
        border-radius: dt('datepicker.year.border.radius');
        outline-color: transparent;
        color: dt('datepicker.date.color');
    }

    .p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {
        color: dt('datepicker.date.hover.color');
        background: dt('datepicker.date.hover.background');
    }

    .p-datepicker-year-selected {
        color: dt('datepicker.date.selected.color');
        background: dt('datepicker.date.selected.background');
    }

    .p-datepicker-year:not(.p-disabled):focus-visible {
        box-shadow: dt('datepicker.date.focus.ring.shadow');
        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');
        outline-offset: dt('datepicker.date.focus.ring.offset');
    }

    .p-datepicker-buttonbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('datepicker.buttonbar.padding');
        border-block-start: 1px solid dt('datepicker.buttonbar.border.color');
    }

    .p-datepicker-buttonbar .p-button {
        width: auto;
    }

    .p-datepicker-time-picker {
        display: flex;
        justify-content: center;
        align-items: center;
        border-block-start: 1px solid dt('datepicker.time.picker.border.color');
        padding: 0;
        gap: dt('datepicker.time.picker.gap');
    }

    .p-datepicker-calendar-container + .p-datepicker-time-picker {
        padding: dt('datepicker.time.picker.padding');
    }

    .p-datepicker-time-picker > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: dt('datepicker.time.picker.button.gap');
    }

    .p-datepicker-time-picker span {
        font-size: 1rem;
    }

    .p-datepicker-timeonly .p-datepicker-time-picker {
        border-block-start: 0 none;
    }

    .p-datepicker-time-picker:dir(rtl) {
        flex-direction: row-reverse;
    }

    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {
        width: dt('datepicker.dropdown.sm.width');
    }

    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,
    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {
        width: dt('datepicker.dropdown.lg.width');
    }

    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,
    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-clear-icon,
    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-clear-icon {
        inset-inline-end: calc(dt('datepicker.dropdown.width') + dt('form.field.padding.x'));
    }

    .p-datepicker-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        color: dt('form.field.icon.color');
        inset-inline-end: dt('form.field.padding.x');
    }
`;var bE=["date"],vE=["header"],CE=["footer"],wE=["disabledDate"],DE=["decade"],IE=["previousicon"],xE=["nexticon"],EE=["triggericon"],TE=["clearicon"],SE=["decrementicon"],ME=["incrementicon"],kE=["inputicon"],OE=["inputfield"],RE=["contentWrapper"],FE=[[["p-header"]],[["p-footer"]]],AE=["p-header","p-footer"],NE=t=>({clickCallBack:t}),LE=(t,i)=>({showTransitionParams:t,hideTransitionParams:i}),PE=t=>({value:"visible",params:t}),G_=t=>({visibility:t}),gp=t=>({$implicit:t}),VE=t=>({date:t}),BE=(t,i)=>({month:t,index:i}),HE=t=>({year:t});function jE(t,i){if(t&1){let e=q();N(),D(0,"svg",10),B("click",function(){b(e);let o=u(3);return v(o.clear())}),C()}if(t&2){let e=u(3);w(e.cx("clearIcon"))}}function zE(t,i){}function $E(t,i){t&1&&_(0,zE,0,0,"ng-template")}function UE(t,i){if(t&1){let e=q();D(0,"span",11),B("click",function(){b(e);let o=u(3);return v(o.clear())}),_(1,$E,1,0,null,12),C()}if(t&2){let e=u(3);w(e.cx("clearIcon")),f(),p("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function GE(t,i){if(t&1&&(z(0),_(1,jE,1,2,"svg",8)(2,UE,2,3,"span",9),$()),t&2){let e=u(2);f(),p("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),f(),p("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function WE(t,i){if(t&1&&G(0,"span",15),t&2){let e=u(3);p("ngClass",e.icon)}}function qE(t,i){t&1&&(N(),G(0,"svg",17))}function KE(t,i){}function QE(t,i){t&1&&_(0,KE,0,0,"ng-template")}function YE(t,i){if(t&1&&(z(0),_(1,qE,1,0,"svg",16)(2,QE,1,0,null,12),$()),t&2){let e=u(3);f(),p("ngIf",!e.triggerIconTemplate&&!e._triggerIconTemplate),f(),p("ngTemplateOutlet",e.triggerIconTemplate||e._triggerIconTemplate)}}function ZE(t,i){if(t&1){let e=q();D(0,"button",13),B("click",function(o){b(e),u();let r=ct(1),s=u();return v(s.onButtonClick(o,r))}),_(1,WE,1,1,"span",14)(2,YE,3,2,"ng-container",6),C()}if(t&2){let e=u(2);w(e.cx("dropdown")),p("disabled",e.$disabled()),k("aria-label",e.iconButtonAriaLabel)("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.panelId:null),f(),p("ngIf",e.icon),f(),p("ngIf",!e.icon)}}function JE(t,i){if(t&1){let e=q();N(),D(0,"svg",20),B("click",function(o){b(e);let r=u(3);return v(r.onButtonClick(o))}),C()}if(t&2){let e=u(3);w(e.cx("inputIcon"))}}function XE(t,i){t&1&&j(0)}function eT(t,i){if(t&1&&(z(0),D(1,"span"),_(2,JE,1,2,"svg",18)(3,XE,1,0,"ng-container",19),C(),$()),t&2){let e=u(2);f(),w(e.cx("inputIconContainer")),f(),p("ngIf",!e.inputIconTemplate&&!e._inputIconTemplate),f(),p("ngTemplateOutlet",e.inputIconTemplate||e._inputIconTemplate)("ngTemplateOutletContext",te(5,NE,e.onButtonClick.bind(e)))}}function tT(t,i){if(t&1){let e=q();D(0,"input",5,0),B("focus",function(o){b(e);let r=u();return v(r.onInputFocus(o))})("keydown",function(o){b(e);let r=u();return v(r.onInputKeydown(o))})("click",function(){b(e);let o=u();return v(o.onInputClick())})("blur",function(o){b(e);let r=u();return v(r.onInputBlur(o))})("input",function(o){b(e);let r=u();return v(r.onUserInput(o))}),C(),_(2,GE,3,2,"ng-container",6)(3,ZE,3,8,"button",7)(4,eT,4,7,"ng-container",6)}if(t&2){let e=u();w(e.cn(e.cx("pcInputText"),e.inputStyleClass)),p("pSize",e.size())("value",e.inputFieldValue)("ngStyle",e.inputStyle)("pAutoFocus",e.autofocus)("variant",e.$variant())("fluid",e.hasFluid)("invalid",e.invalid()),k("size",e.inputSize())("id",e.inputId)("name",e.name())("aria-required",e.required())("aria-expanded",e.overlayVisible??!1)("aria-controls",e.overlayVisible?e.panelId:null)("aria-labelledby",e.ariaLabelledBy)("aria-label",e.ariaLabel)("required",e.required()?"":void 0)("readonly",e.readonlyInput?"":void 0)("disabled",e.$disabled()?"":void 0)("placeholder",e.placeholder)("tabindex",e.tabindex)("inputmode",e.touchUI?"off":null),f(2),p("ngIf",e.showClear&&!e.$disabled()&&e.value!=null),f(),p("ngIf",e.showIcon&&e.iconDisplay==="button"),f(),p("ngIf",e.iconDisplay==="input"&&e.showIcon)}}function nT(t,i){t&1&&j(0)}function iT(t,i){t&1&&(N(),G(0,"svg",29))}function oT(t,i){}function rT(t,i){t&1&&_(0,oT,0,0,"ng-template")}function sT(t,i){if(t&1&&(D(0,"span"),_(1,rT,1,0,null,12),C()),t&2){let e=u(5);f(),p("ngTemplateOutlet",e.previousIconTemplate||e._previousIconTemplate)}}function aT(t,i){if(t&1&&_(0,iT,1,0,"svg",28)(1,sT,2,1,"span",6),t&2){let e=u(4);p("ngIf",!e.previousIconTemplate&&!e._previousIconTemplate),f(),p("ngIf",e.previousIconTemplate||e._previousIconTemplate)}}function lT(t,i){if(t&1){let e=q();D(0,"button",30),B("click",function(o){b(e);let r=u(4);return v(r.switchToMonthView(o))})("keydown",function(o){b(e);let r=u(4);return v(r.onContainerButtonKeydown(o))}),ee(1),C()}if(t&2){let e=u().$implicit,n=u(3);w(n.cx("selectMonth")),k("disabled",n.switchViewButtonDisabled()?"":void 0)("aria-label",n.getTranslation("chooseMonth")),f(),st(" ",n.getMonthName(e.month)," ")}}function cT(t,i){if(t&1){let e=q();D(0,"button",30),B("click",function(o){b(e);let r=u(4);return v(r.switchToYearView(o))})("keydown",function(o){b(e);let r=u(4);return v(r.onContainerButtonKeydown(o))}),ee(1),C()}if(t&2){let e=u().$implicit,n=u(3);w(n.cx("selectYear")),k("disabled",n.switchViewButtonDisabled()?"":void 0)("aria-label",n.getTranslation("chooseYear")),f(),st(" ",n.getYear(e)," ")}}function dT(t,i){if(t&1&&(z(0),ee(1),$()),t&2){let e=u(5);f(),Ua("",e.yearPickerValues()[0]," - ",e.yearPickerValues()[e.yearPickerValues().length-1])}}function uT(t,i){t&1&&j(0)}function pT(t,i){if(t&1&&(D(0,"span"),_(1,dT,2,2,"ng-container",6)(2,uT,1,0,"ng-container",19),C()),t&2){let e=u(4);w(e.cx("decade")),f(),p("ngIf",!e.decadeTemplate&&!e._decadeTemplate),f(),p("ngTemplateOutlet",e.decadeTemplate||e._decadeTemplate)("ngTemplateOutletContext",te(5,gp,e.yearPickerValues))}}function fT(t,i){t&1&&(N(),G(0,"svg",32))}function hT(t,i){}function mT(t,i){t&1&&_(0,hT,0,0,"ng-template")}function gT(t,i){if(t&1&&(z(0),_(1,mT,1,0,null,12),$()),t&2){let e=u(5);f(),p("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function _T(t,i){if(t&1&&_(0,fT,1,0,"svg",31)(1,gT,2,1,"ng-container",6),t&2){let e=u(4);p("ngIf",!e.nextIconTemplate&&!e._nextIconTemplate),f(),p("ngIf",e.nextIconTemplate||e._nextIconTemplate)}}function yT(t,i){if(t&1&&(D(0,"th")(1,"span"),ee(2),C()()),t&2){let e=u(5);w(e.cx("weekHeader")),f(2),xe(e.getTranslation("weekHeader"))}}function bT(t,i){if(t&1&&(D(0,"th",36)(1,"span"),ee(2),C()()),t&2){let e=i.$implicit,n=u(5);w(n.cx("weekDayCell")),f(),w(n.cx("weekDay")),f(),xe(e)}}function vT(t,i){if(t&1&&(D(0,"td")(1,"span"),ee(2),C()()),t&2){let e=u().index,n=u(2).$implicit,o=u(3);w(o.cx("weekNumber")),f(),w(o.cx("weekLabelContainer")),f(),st(" ",n.weekNumbers[e]," ")}}function CT(t,i){if(t&1&&(z(0),ee(1),$()),t&2){let e=u(2).$implicit;f(),xe(e.day)}}function wT(t,i){t&1&&j(0)}function DT(t,i){if(t&1&&(z(0),_(1,wT,1,0,"ng-container",19),$()),t&2){let e=u(2).$implicit,n=u(6);f(),p("ngTemplateOutlet",n.dateTemplate||n._dateTemplate)("ngTemplateOutletContext",te(2,gp,e))}}function IT(t,i){t&1&&j(0)}function xT(t,i){if(t&1&&(z(0),_(1,IT,1,0,"ng-container",19),$()),t&2){let e=u(2).$implicit,n=u(6);f(),p("ngTemplateOutlet",n.disabledDateTemplate||n._disabledDateTemplate)("ngTemplateOutletContext",te(2,gp,e))}}function ET(t,i){if(t&1&&(D(0,"div",39),ee(1),C()),t&2){let e=u(2).$implicit;f(),st(" ",e.day," ")}}function TT(t,i){if(t&1){let e=q();z(0),D(1,"span",37),B("click",function(o){b(e);let r=u().$implicit,s=u(6);return v(s.onDateSelect(o,r))})("keydown",function(o){b(e);let r=u().$implicit,s=u(3).index,a=u(3);return v(a.onDateCellKeydown(o,r,s))}),_(2,CT,2,1,"ng-container",6)(3,DT,2,4,"ng-container",6)(4,xT,2,4,"ng-container",6),C(),_(5,ET,2,1,"div",38),$()}if(t&2){let e=u().$implicit,n=u(6);f(),p("ngClass",n.dayClass(e)),k("data-date",n.formatDateKey(n.formatDateMetaToDate(e))),f(),p("ngIf",!n.dateTemplate&&!n._dateTemplate&&(e.selectable||!n.disabledDateTemplate&&!n._disabledDateTemplate)),f(),p("ngIf",e.selectable||!n.disabledDateTemplate&&!n._disabledDateTemplate),f(),p("ngIf",!e.selectable),f(),p("ngIf",n.isSelected(e))}}function ST(t,i){if(t&1&&(D(0,"td"),_(1,TT,6,6,"ng-container",6),C()),t&2){let e=i.$implicit,n=u(6);w(n.cx("dayCell",te(4,VE,e))),k("aria-label",e.day),f(),p("ngIf",e.otherMonth?n.showOtherMonths:!0)}}function MT(t,i){if(t&1&&(D(0,"tr"),_(1,vT,3,5,"td",22)(2,ST,2,6,"td",23),C()),t&2){let e=i.$implicit,n=u(5);f(),p("ngIf",n.showWeek),f(),p("ngForOf",e)}}function kT(t,i){if(t&1&&(D(0,"table",33)(1,"thead")(2,"tr"),_(3,yT,3,3,"th",22)(4,bT,3,5,"th",34),C()(),D(5,"tbody"),_(6,MT,3,2,"tr",35),C()()),t&2){let e=u().$implicit,n=u(3);w(n.cx("dayView")),f(3),p("ngIf",n.showWeek),f(),p("ngForOf",n.weekDays),f(2),p("ngForOf",e.dates)}}function OT(t,i){if(t&1){let e=q();D(0,"div")(1,"div")(2,"p-button",24),B("keydown",function(o){b(e);let r=u(3);return v(r.onContainerButtonKeydown(o))})("onClick",function(o){b(e);let r=u(3);return v(r.onPrevButtonClick(o))}),_(3,aT,2,2,"ng-template",null,2,Se),C(),D(5,"div"),_(6,lT,2,5,"button",25)(7,cT,2,5,"button",25)(8,pT,3,7,"span",22),C(),D(9,"p-button",26),B("keydown",function(o){b(e);let r=u(3);return v(r.onContainerButtonKeydown(o))})("onClick",function(o){b(e);let r=u(3);return v(r.onNextButtonClick(o))}),_(10,_T,2,2,"ng-template",null,2,Se),C()(),_(12,kT,7,5,"table",27),C()}if(t&2){let e=i.index,n=u(3);w(n.cx("calendar")),f(),w(n.cx("header")),f(),p("styleClass",n.cx("pcPrevButton"))("ngStyle",te(16,G_,e===0?"visible":"hidden")),xn("ariaLabel",n.prevIconAriaLabel),f(3),w(n.cx("title")),f(),p("ngIf",n.currentView==="date"),f(),p("ngIf",n.currentView!=="year"),f(),p("ngIf",n.currentView==="year"),f(),p("styleClass",n.cx("pcNextButton"))("ngStyle",te(18,G_,e===n.months.length-1?"visible":"hidden")),xn("ariaLabel",n.nextIconAriaLabel),f(3),p("ngIf",n.currentView==="date")}}function RT(t,i){if(t&1&&(D(0,"div",39),ee(1),C()),t&2){let e=u().$implicit;f(),st(" ",e," ")}}function FT(t,i){if(t&1){let e=q();D(0,"span",41),B("click",function(o){let r=b(e).index,s=u(4);return v(s.onMonthSelect(o,r))})("keydown",function(o){let r=b(e).index,s=u(4);return v(s.onMonthCellKeydown(o,r))}),ee(1),_(2,RT,2,1,"div",38),C()}if(t&2){let e=i.$implicit,n=i.index,o=u(4);w(o.cx("month",We(4,BE,e,n))),f(),st(" ",e," "),f(),p("ngIf",o.isMonthSelected(n))}}function AT(t,i){if(t&1&&(D(0,"div"),_(1,FT,3,7,"span",40),C()),t&2){let e=u(3);w(e.cx("monthView")),f(),p("ngForOf",e.monthPickerValues())}}function NT(t,i){if(t&1&&(D(0,"div",39),ee(1),C()),t&2){let e=u().$implicit;f(),st(" ",e," ")}}function LT(t,i){if(t&1){let e=q();D(0,"span",41),B("click",function(o){let r=b(e).$implicit,s=u(4);return v(s.onYearSelect(o,r))})("keydown",function(o){let r=b(e).$implicit,s=u(4);return v(s.onYearCellKeydown(o,r))}),ee(1),_(2,NT,2,1,"div",38),C()}if(t&2){let e=i.$implicit,n=u(4);w(n.cx("year",te(4,HE,e))),f(),st(" ",e," "),f(),p("ngIf",n.isYearSelected(e))}}function PT(t,i){if(t&1&&(D(0,"div"),_(1,LT,3,6,"span",40),C()),t&2){let e=u(3);w(e.cx("yearView")),f(),p("ngForOf",e.yearPickerValues())}}function VT(t,i){if(t&1&&(z(0),D(1,"div"),_(2,OT,13,20,"div",23),C(),_(3,AT,2,3,"div",22)(4,PT,2,3,"div",22),$()),t&2){let e=u(2);f(),w(e.cx("calendarContainer")),f(),p("ngForOf",e.months),f(),p("ngIf",e.currentView==="month"),f(),p("ngIf",e.currentView==="year")}}function BT(t,i){t&1&&(N(),G(0,"svg",45))}function HT(t,i){}function jT(t,i){t&1&&_(0,HT,0,0,"ng-template")}function zT(t,i){if(t&1&&_(0,BT,1,0,"svg",44)(1,jT,1,0,null,12),t&2){let e=u(3);p("ngIf",!e.incrementIconTemplate&&!e._incrementIconTemplate),f(),p("ngTemplateOutlet",e.incrementIconTemplate||e._incrementIconTemplate)}}function $T(t,i){t&1&&(z(0),ee(1,"0"),$())}function UT(t,i){t&1&&(N(),G(0,"svg",47))}function GT(t,i){}function WT(t,i){t&1&&_(0,GT,0,0,"ng-template")}function qT(t,i){if(t&1&&_(0,UT,1,0,"svg",46)(1,WT,1,0,null,12),t&2){let e=u(3);p("ngIf",!e.decrementIconTemplate&&!e._decrementIconTemplate),f(),p("ngTemplateOutlet",e.decrementIconTemplate||e._decrementIconTemplate)}}function KT(t,i){t&1&&(N(),G(0,"svg",45))}function QT(t,i){}function YT(t,i){t&1&&_(0,QT,0,0,"ng-template")}function ZT(t,i){if(t&1&&_(0,KT,1,0,"svg",44)(1,YT,1,0,null,12),t&2){let e=u(3);p("ngIf",!e.incrementIconTemplate&&!e._incrementIconTemplate),f(),p("ngTemplateOutlet",e.incrementIconTemplate||e._incrementIconTemplate)}}function JT(t,i){t&1&&(z(0),ee(1,"0"),$())}function XT(t,i){t&1&&(N(),G(0,"svg",47))}function eS(t,i){}function tS(t,i){t&1&&_(0,eS,0,0,"ng-template")}function nS(t,i){if(t&1&&_(0,XT,1,0,"svg",46)(1,tS,1,0,null,12),t&2){let e=u(3);p("ngIf",!e.decrementIconTemplate&&!e._decrementIconTemplate),f(),p("ngTemplateOutlet",e.decrementIconTemplate||e._decrementIconTemplate)}}function iS(t,i){if(t&1&&(D(0,"div")(1,"span"),ee(2),C()()),t&2){let e=u(3);w(e.cx("separator")),f(2),xe(e.timeSeparator)}}function oS(t,i){t&1&&(N(),G(0,"svg",45))}function rS(t,i){}function sS(t,i){t&1&&_(0,rS,0,0,"ng-template")}function aS(t,i){if(t&1&&_(0,oS,1,0,"svg",44)(1,sS,1,0,null,12),t&2){let e=u(4);p("ngIf",!e.incrementIconTemplate&&!e._incrementIconTemplate),f(),p("ngTemplateOutlet",e.incrementIconTemplate||e._incrementIconTemplate)}}function lS(t,i){t&1&&(z(0),ee(1,"0"),$())}function cS(t,i){t&1&&(N(),G(0,"svg",47))}function dS(t,i){}function uS(t,i){t&1&&_(0,dS,0,0,"ng-template")}function pS(t,i){if(t&1&&_(0,cS,1,0,"svg",46)(1,uS,1,0,null,12),t&2){let e=u(4);p("ngIf",!e.decrementIconTemplate&&!e._decrementIconTemplate),f(),p("ngTemplateOutlet",e.decrementIconTemplate||e._decrementIconTemplate)}}function fS(t,i){if(t&1){let e=q();D(0,"div")(1,"p-button",42),B("keydown",function(o){b(e);let r=u(3);return v(r.onContainerButtonKeydown(o))})("keydown.enter",function(o){b(e);let r=u(3);return v(r.incrementSecond(o))})("keydown.space",function(o){b(e);let r=u(3);return v(r.incrementSecond(o))})("mousedown",function(o){b(e);let r=u(3);return v(r.onTimePickerElementMouseDown(o,2,1))})("mouseup",function(o){b(e);let r=u(3);return v(r.onTimePickerElementMouseUp(o))})("keyup.enter",function(o){b(e);let r=u(3);return v(r.onTimePickerElementMouseUp(o))})("keyup.space",function(o){b(e);let r=u(3);return v(r.onTimePickerElementMouseUp(o))})("mouseleave",function(){b(e);let o=u(3);return v(o.onTimePickerElementMouseLeave())}),_(2,aS,2,2,"ng-template",null,2,Se),C(),D(4,"span"),_(5,lS,2,0,"ng-container",6),ee(6),C(),D(7,"p-button",42),B("keydown",function(o){b(e);let r=u(3);return v(r.onContainerButtonKeydown(o))})("keydown.enter",function(o){b(e);let r=u(3);return v(r.decrementSecond(o))})("keydown.space",function(o){b(e);let r=u(3);return v(r.decrementSecond(o))})("mousedown",function(o){b(e);let r=u(3);return v(r.onTimePickerElementMouseDown(o,2,-1))})("mouseup",function(o){b(e);let r=u(3);return v(r.onTimePickerElementMouseUp(o))})("keyup.enter",function(o){b(e);let r=u(3);return v(r.onTimePickerElementMouseUp(o))})("keyup.space",function(o){b(e);let r=u(3);return v(r.onTimePickerElementMouseUp(o))})("mouseleave",function(){b(e);let o=u(3);return v(o.onTimePickerElementMouseLeave())}),_(8,pS,2,2,"ng-template",null,2,Se),C()()}if(t&2){let e=u(3);w(e.cx("secondPicker")),f(),p("styleClass",e.cx("pcIncrementButton")),k("aria-label",e.getTranslation("nextSecond")),f(4),p("ngIf",e.currentSecond<10),f(),xe(e.currentSecond),f(),p("styleClass",e.cx("pcDecrementButton")),k("aria-label",e.getTranslation("prevSecond"))}}function hS(t,i){if(t&1&&(D(0,"div")(1,"span"),ee(2),C()()),t&2){let e=u(3);w(e.cx("separator")),f(2),xe(e.timeSeparator)}}function mS(t,i){t&1&&(N(),G(0,"svg",45))}function gS(t,i){}function _S(t,i){t&1&&_(0,gS,0,0,"ng-template")}function yS(t,i){if(t&1&&_(0,mS,1,0,"svg",44)(1,_S,1,0,null,12),t&2){let e=u(4);p("ngIf",!e.incrementIconTemplate&&!e._incrementIconTemplate),f(),p("ngTemplateOutlet",e.incrementIconTemplate||e._incrementIconTemplate)}}function bS(t,i){t&1&&(N(),G(0,"svg",47))}function vS(t,i){}function CS(t,i){t&1&&_(0,vS,0,0,"ng-template")}function wS(t,i){if(t&1&&_(0,bS,1,0,"svg",46)(1,CS,1,0,null,12),t&2){let e=u(4);p("ngIf",!e.decrementIconTemplate&&!e._decrementIconTemplate),f(),p("ngTemplateOutlet",e.decrementIconTemplate||e._decrementIconTemplate)}}function DS(t,i){if(t&1){let e=q();D(0,"div")(1,"p-button",48),B("keydown",function(o){b(e);let r=u(3);return v(r.onContainerButtonKeydown(o))})("onClick",function(o){b(e);let r=u(3);return v(r.toggleAMPM(o))})("keydown.enter",function(o){b(e);let r=u(3);return v(r.toggleAMPM(o))}),_(2,yS,2,2,"ng-template",null,2,Se),C(),D(4,"span"),ee(5),C(),D(6,"p-button",49),B("keydown",function(o){b(e);let r=u(3);return v(r.onContainerButtonKeydown(o))})("click",function(o){b(e);let r=u(3);return v(r.toggleAMPM(o))})("keydown.enter",function(o){b(e);let r=u(3);return v(r.toggleAMPM(o))}),_(7,wS,2,2,"ng-template",null,2,Se),C()()}if(t&2){let e=u(3);w(e.cx("ampmPicker")),f(),p("styleClass",e.cx("pcIncrementButton")),k("aria-label",e.getTranslation("am")),f(4),xe(e.pm?"PM":"AM"),f(),p("styleClass",e.cx("pcDecrementButton")),k("aria-label",e.getTranslation("pm"))}}function IS(t,i){if(t&1){let e=q();D(0,"div")(1,"div")(2,"p-button",42),B("keydown",function(o){b(e);let r=u(2);return v(r.onContainerButtonKeydown(o))})("keydown.enter",function(o){b(e);let r=u(2);return v(r.incrementHour(o))})("keydown.space",function(o){b(e);let r=u(2);return v(r.incrementHour(o))})("mousedown",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseDown(o,0,1))})("mouseup",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("keyup.enter",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("keyup.space",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("mouseleave",function(){b(e);let o=u(2);return v(o.onTimePickerElementMouseLeave())}),_(3,zT,2,2,"ng-template",null,2,Se),C(),D(5,"span"),_(6,$T,2,0,"ng-container",6),ee(7),C(),D(8,"p-button",42),B("keydown",function(o){b(e);let r=u(2);return v(r.onContainerButtonKeydown(o))})("keydown.enter",function(o){b(e);let r=u(2);return v(r.decrementHour(o))})("keydown.space",function(o){b(e);let r=u(2);return v(r.decrementHour(o))})("mousedown",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseDown(o,0,-1))})("mouseup",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("keyup.enter",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("keyup.space",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("mouseleave",function(){b(e);let o=u(2);return v(o.onTimePickerElementMouseLeave())}),_(9,qT,2,2,"ng-template",null,2,Se),C()(),D(11,"div",43)(12,"span"),ee(13),C()(),D(14,"div")(15,"p-button",42),B("keydown",function(o){b(e);let r=u(2);return v(r.onContainerButtonKeydown(o))})("keydown.enter",function(o){b(e);let r=u(2);return v(r.incrementMinute(o))})("keydown.space",function(o){b(e);let r=u(2);return v(r.incrementMinute(o))})("mousedown",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseDown(o,1,1))})("mouseup",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("keyup.enter",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("keyup.space",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("mouseleave",function(){b(e);let o=u(2);return v(o.onTimePickerElementMouseLeave())}),_(16,ZT,2,2,"ng-template",null,2,Se),C(),D(18,"span"),_(19,JT,2,0,"ng-container",6),ee(20),C(),D(21,"p-button",42),B("keydown",function(o){b(e);let r=u(2);return v(r.onContainerButtonKeydown(o))})("keydown.enter",function(o){b(e);let r=u(2);return v(r.decrementMinute(o))})("keydown.space",function(o){b(e);let r=u(2);return v(r.decrementMinute(o))})("mousedown",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseDown(o,1,-1))})("mouseup",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("keyup.enter",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("keyup.space",function(o){b(e);let r=u(2);return v(r.onTimePickerElementMouseUp(o))})("mouseleave",function(){b(e);let o=u(2);return v(o.onTimePickerElementMouseLeave())}),_(22,nS,2,2,"ng-template",null,2,Se),C()(),_(24,iS,3,3,"div",22)(25,fS,10,8,"div",22)(26,hS,3,3,"div",22)(27,DS,9,7,"div",22),C()}if(t&2){let e=u(2);w(e.cx("timePicker")),f(),w(e.cx("hourPicker")),f(),p("styleClass",e.cx("pcIncrementButton")),k("aria-label",e.getTranslation("nextHour")),f(4),p("ngIf",e.currentHour<10),f(),xe(e.currentHour),f(),p("styleClass",e.cx("pcDecrementButton")),k("aria-label",e.getTranslation("prevHour")),f(5),xe(e.timeSeparator),f(),w(e.cx("minutePicker")),f(),p("styleClass",e.cx("pcIncrementButton")),k("aria-label",e.getTranslation("nextMinute")),f(4),p("ngIf",e.currentMinute<10),f(),xe(e.currentMinute),f(),p("styleClass",e.cx("pcDecrementButton")),k("aria-label",e.getTranslation("prevMinute")),f(3),p("ngIf",e.showSeconds),f(),p("ngIf",e.showSeconds),f(),p("ngIf",e.hourFormat=="12"),f(),p("ngIf",e.hourFormat=="12")}}function xS(t,i){if(t&1){let e=q();D(0,"div")(1,"p-button",50),B("keydown",function(o){b(e);let r=u(2);return v(r.onContainerButtonKeydown(o))})("onClick",function(o){b(e);let r=u(2);return v(r.onTodayButtonClick(o))}),C(),D(2,"p-button",50),B("keydown",function(o){b(e);let r=u(2);return v(r.onContainerButtonKeydown(o))})("onClick",function(o){b(e);let r=u(2);return v(r.onClearButtonClick(o))}),C()()}if(t&2){let e=u(2);w(e.cx("buttonbar")),f(),p("styleClass",e.cx("pcTodayButton"))("label",e.getTranslation("today"))("ngClass",e.todayButtonStyleClass),f(),p("styleClass",e.cx("pcClearButton"))("label",e.getTranslation("clear"))("ngClass",e.clearButtonStyleClass)}}function ES(t,i){t&1&&j(0)}function TS(t,i){if(t&1){let e=q();D(0,"div",21,1),B("@overlayAnimation.start",function(o){b(e);let r=u();return v(r.onOverlayAnimationStart(o))})("@overlayAnimation.done",function(o){b(e);let r=u();return v(r.onOverlayAnimationDone(o))})("click",function(o){b(e);let r=u();return v(r.onOverlayClick(o))}),et(2),_(3,nT,1,0,"ng-container",12)(4,VT,5,5,"ng-container",6)(5,IS,28,23,"div",22)(6,xS,3,8,"div",22),et(7,1),_(8,ES,1,0,"ng-container",12),C()}if(t&2){let e=u();w(e.cn(e.cx("panel"),e.panelStyleClass)),p("ngStyle",e.panelStyle)("@overlayAnimation",te(17,PE,We(14,LE,e.showTransitionOptions,e.hideTransitionOptions)))("@.disabled",e.inline===!0),k("id",e.panelId)("aria-label",e.getTranslation("chooseDate"))("role",e.inline?null:"dialog")("aria-modal",e.inline?null:"true"),f(3),p("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),f(),p("ngIf",!e.timeOnly),f(),p("ngIf",(e.showTime||e.timeOnly)&&e.currentView==="date"),f(),p("ngIf",e.showButtonBar),f(2),p("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var SS=`
    ${U_}

    /* For PrimeNG */
    .p-datepicker.ng-invalid.ng-dirty .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }
`,MS={root:()=>({position:"relative"})},kS={root:({instance:t})=>["p-datepicker p-component p-inputwrapper",{"p-invalid":t.invalid(),"p-datepicker-fluid":t.hasFluid,"p-inputwrapper-filled":t.$filled(),"p-variant-filled":t.$variant()==="filled","p-inputwrapper-focus":t.focus||t.overlayVisible,"p-focus":t.focus||t.overlayVisible}],pcInputText:"p-datepicker-input",dropdown:"p-datepicker-dropdown",inputIconContainer:"p-datepicker-input-icon-container",inputIcon:"p-datepicker-input-icon",panel:({instance:t})=>["p-datepicker-panel p-component",{"p-datepicker-panel p-component":!0,"p-datepicker-panel-inline":t.inline,"p-disabled":t.$disabled(),"p-datepicker-timeonly":t.timeOnly}],calendarContainer:"p-datepicker-calendar-container",calendar:"p-datepicker-calendar",header:"p-datepicker-header",pcPrevButton:"p-datepicker-prev-button",title:"p-datepicker-title",selectMonth:"p-datepicker-select-month",selectYear:"p-datepicker-select-year",decade:"p-datepicker-decade",pcNextButton:"p-datepicker-next-button",dayView:"p-datepicker-day-view",weekHeader:"p-datepicker-weekheader p-disabled",weekNumber:"p-datepicker-weeknumber",weekLabelContainer:"p-datepicker-weeklabel-container p-disabled",weekDayCell:"p-datepicker-weekday-cell",weekDay:"p-datepicker-weekday",dayCell:({date:t})=>["p-datepicker-day-cell",{"p-datepicker-other-month":t.otherMonth,"p-datepicker-today":t.today}],day:({instance:t,date:i})=>{let e="";if(t.isRangeSelection()&&t.isSelected(i)&&i.selectable){let n=t.value[0],o=t.value[1],r=n&&i.year===n.getFullYear()&&i.month===n.getMonth()&&i.day===n.getDate(),s=o&&i.year===o.getFullYear()&&i.month===o.getMonth()&&i.day===o.getDate();e=r||s?"p-datepicker-day-selected":"p-datepicker-day-selected-range"}return{"p-datepicker-day":!0,"p-datepicker-day-selected":!t.isRangeSelection()&&t.isSelected(i)&&i.selectable,"p-disabled":t.$disabled()||!i.selectable,[e]:!0}},monthView:"p-datepicker-month-view",month:({instance:t,index:i})=>["p-datepicker-month",{"p-datepicker-month-selected":t.isMonthSelected(i),"p-disabled":t.isMonthDisabled(i)}],yearView:"p-datepicker-year-view",year:({instance:t,year:i})=>["p-datepicker-year",{"p-datepicker-year-selected":t.isYearSelected(i),"p-disabled":t.isYearDisabled(i)}],timePicker:"p-datepicker-time-picker",hourPicker:"p-datepicker-hour-picker",pcIncrementButton:"p-datepicker-increment-button",pcDecrementButton:"p-datepicker-decrement-button",separator:"p-datepicker-separator",minutePicker:"p-datepicker-minute-picker",secondPicker:"p-datepicker-second-picker",ampmPicker:"p-datepicker-ampm-picker",buttonbar:"p-datepicker-buttonbar",pcTodayButton:"p-datepicker-today-button",pcClearButton:"p-datepicker-clear-button",clearIcon:"p-datepicker-clear-icon"},W_=(()=>{class t extends le{name="datepicker";theme=SS;classes=kS;inlineStyles=MS;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var OS={provide:yt,useExisting:je(()=>q_),multi:!0},q_=(()=>{class t extends jo{zone;overlayService;iconDisplay="button";styleClass;inputStyle;inputId;inputStyleClass;placeholder;ariaLabelledBy;ariaLabel;iconAriaLabel;get dateFormat(){return this._dateFormat}set dateFormat(e){this._dateFormat=e,this.initialized&&this.updateInputfield()}multipleSeparator=",";rangeSeparator="-";inline=!1;showOtherMonths=!0;selectOtherMonths;showIcon;icon;readonlyInput;shortYearCutoff="+10";get hourFormat(){return this._hourFormat}set hourFormat(e){this._hourFormat=e,this.initialized&&this.updateInputfield()}timeOnly;stepHour=1;stepMinute=1;stepSecond=1;showSeconds=!1;showOnFocus=!0;showWeek=!1;startWeekFromFirstDayOfYear=!1;showClear=!1;dataType="date";selectionMode="single";maxDateCount;showButtonBar;todayButtonStyleClass;clearButtonStyleClass;autofocus;autoZIndex=!0;baseZIndex=0;panelStyleClass;panelStyle;keepInvalid=!1;hideOnDateTimeSelect=!0;touchUI;timeSeparator=":";focusTrap=!0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";tabindex;get minDate(){return this._minDate}set minDate(e){this._minDate=e,this.currentMonth!=null&&this.currentMonth!=null&&this.currentYear&&this.createMonths(this.currentMonth,this.currentYear)}get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=e,this.currentMonth!=null&&this.currentMonth!=null&&this.currentYear&&this.createMonths(this.currentMonth,this.currentYear)}get disabledDates(){return this._disabledDates}set disabledDates(e){this._disabledDates=e,this.currentMonth!=null&&this.currentMonth!=null&&this.currentYear&&this.createMonths(this.currentMonth,this.currentYear)}get disabledDays(){return this._disabledDays}set disabledDays(e){this._disabledDays=e,this.currentMonth!=null&&this.currentMonth!=null&&this.currentYear&&this.createMonths(this.currentMonth,this.currentYear)}get showTime(){return this._showTime}set showTime(e){this._showTime=e,this.currentHour===void 0&&this.initTime(this.value||new Date),this.updateInputfield()}get responsiveOptions(){return this._responsiveOptions}set responsiveOptions(e){this._responsiveOptions=e,this.destroyResponsiveStyleElement(),this.createResponsiveStyle()}get numberOfMonths(){return this._numberOfMonths}set numberOfMonths(e){this._numberOfMonths=e,this.destroyResponsiveStyleElement(),this.createResponsiveStyle()}get firstDayOfWeek(){return this._firstDayOfWeek}set firstDayOfWeek(e){this._firstDayOfWeek=e,this.createWeekDays()}get view(){return this._view}set view(e){this._view=e,this.currentView=this._view}get defaultDate(){return this._defaultDate}set defaultDate(e){if(this._defaultDate=e,this.initialized){let n=e||new Date;this.currentMonth=n.getMonth(),this.currentYear=n.getFullYear(),this.initTime(n),this.createMonths(this.currentMonth,this.currentYear)}}appendTo=X(void 0);onFocus=new A;onBlur=new A;onClose=new A;onSelect=new A;onClear=new A;onInput=new A;onTodayClick=new A;onClearClick=new A;onMonthChange=new A;onYearChange=new A;onClickOutside=new A;onShow=new A;inputfieldViewChild;set content(e){this.contentViewChild=e,this.contentViewChild&&(this.isMonthNavigate?(Promise.resolve(null).then(()=>this.updateFocus()),this.isMonthNavigate=!1):!this.focus&&!this.inline&&this.initFocusableCell())}_componentStyle=M(W_);contentViewChild;value;dates;months;weekDays;currentMonth;currentYear;currentHour;currentMinute;currentSecond;p;pm;mask;maskClickListener;overlay;responsiveStyleElement;overlayVisible;$appendTo=Me(()=>this.appendTo()||this.config.overlayAppendTo());calendarElement;timePickerTimer;documentClickListener;animationEndListener;ticksTo1970;yearOptions;focus;isKeydown;_minDate;_maxDate;_dateFormat;_hourFormat="24";_showTime;_yearRange;preventDocumentListener;dayClass(e){return this._componentStyle.classes.day({instance:this,date:e})}dateTemplate;headerTemplate;footerTemplate;disabledDateTemplate;decadeTemplate;previousIconTemplate;nextIconTemplate;triggerIconTemplate;clearIconTemplate;decrementIconTemplate;incrementIconTemplate;inputIconTemplate;_dateTemplate;_headerTemplate;_footerTemplate;_disabledDateTemplate;_decadeTemplate;_previousIconTemplate;_nextIconTemplate;_triggerIconTemplate;_clearIconTemplate;_decrementIconTemplate;_incrementIconTemplate;_inputIconTemplate;_disabledDates;_disabledDays;selectElement;todayElement;focusElement;scrollHandler;documentResizeListener;navigationState=null;isMonthNavigate;initialized;translationSubscription;_locale;_responsiveOptions;currentView;attributeSelector;panelId;_numberOfMonths=1;_firstDayOfWeek;_view="date";preventFocus;_defaultDate;_focusKey=null;window;get locale(){return this._locale}get iconButtonAriaLabel(){return this.iconAriaLabel?this.iconAriaLabel:this.getTranslation("chooseDate")}get prevIconAriaLabel(){return this.currentView==="year"?this.getTranslation("prevDecade"):this.currentView==="month"?this.getTranslation("prevYear"):this.getTranslation("prevMonth")}get nextIconAriaLabel(){return this.currentView==="year"?this.getTranslation("nextDecade"):this.currentView==="month"?this.getTranslation("nextYear"):this.getTranslation("nextMonth")}constructor(e,n){super(),this.zone=e,this.overlayService=n,this.window=this.document.defaultView}ngOnInit(){super.ngOnInit(),this.attributeSelector=Ee("pn_id_"),this.panelId=this.attributeSelector+"_panel";let e=this.defaultDate||new Date;this.createResponsiveStyle(),this.currentMonth=e.getMonth(),this.currentYear=e.getFullYear(),this.yearOptions=[],this.currentView=this.view,this.view==="date"&&(this.createWeekDays(),this.initTime(e),this.createMonths(this.currentMonth,this.currentYear),this.ticksTo1970=(1969*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*1e7),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.createWeekDays(),this.cd.markForCheck()}),this.initialized=!0}ngAfterViewInit(){super.ngAfterViewInit(),this.inline&&(this.contentViewChild&&this.contentViewChild.nativeElement.setAttribute(this.attributeSelector,""),!this.$disabled()&&!this.inline&&(this.initFocusableCell(),this.numberOfMonths===1&&this.contentViewChild&&this.contentViewChild.nativeElement&&(this.contentViewChild.nativeElement.style.width=dt(this.el?.nativeElement)+"px")))}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"date":this._dateTemplate=e.template;break;case"decade":this._decadeTemplate=e.template;break;case"disabledDate":this._disabledDateTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"inputicon":this._inputIconTemplate=e.template;break;case"previousicon":this._previousIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break;case"triggericon":this._triggerIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"decrementicon":this._decrementIconTemplate=e.template;break;case"incrementicon":this._incrementIconTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._dateTemplate=e.template;break}})}getTranslation(e){return this.config.getTranslation(e)}populateYearOptions(e,n){this.yearOptions=[];for(let o=e;o<=n;o++)this.yearOptions.push(o)}createWeekDays(){this.weekDays=[];let e=this.getFirstDateOfWeek(),n=this.getTranslation(bt.DAY_NAMES_MIN);for(let o=0;o<7;o++)this.weekDays.push(n[e]),e=e==6?0:++e}monthPickerValues(){let e=[];for(let n=0;n<=11;n++)e.push(this.config.getTranslation("monthNamesShort")[n]);return e}yearPickerValues(){let e=[],n=this.currentYear-this.currentYear%10;for(let o=0;o<10;o++)e.push(n+o);return e}createMonths(e,n){this.months=this.months=[];for(let o=0;o<this.numberOfMonths;o++){let r=e+o,s=n;r>11&&(r=r%12,s=n+Math.floor((e+o)/12)),this.months.push(this.createMonth(r,s))}}getWeekNumber(e){let n=new Date(e.getTime());if(this.startWeekFromFirstDayOfYear){let r=+this.getFirstDateOfWeek();n.setDate(n.getDate()+6+r-n.getDay())}else n.setDate(n.getDate()+4-(n.getDay()||7));let o=n.getTime();return n.setMonth(0),n.setDate(1),Math.floor(Math.round((o-n.getTime())/864e5)/7)+1}createMonth(e,n){let o=[],r=this.getFirstDayOfMonthIndex(e,n),s=this.getDaysCountInMonth(e,n),a=this.getDaysCountInPrevMonth(e,n),l=1,c=new Date,d=[],h=Math.ceil((s+r)/7);for(let g=0;g<h;g++){let m=[];if(g==0){for(let I=a-r+1;I<=a;I++){let O=this.getPreviousMonthAndYear(e,n);m.push({day:I,month:O.month,year:O.year,otherMonth:!0,today:this.isToday(c,I,O.month,O.year),selectable:this.isSelectable(I,O.month,O.year,!0)})}let y=7-m.length;for(let I=0;I<y;I++)m.push({day:l,month:e,year:n,today:this.isToday(c,l,e,n),selectable:this.isSelectable(l,e,n,!1)}),l++}else for(let y=0;y<7;y++){if(l>s){let I=this.getNextMonthAndYear(e,n);m.push({day:l-s,month:I.month,year:I.year,otherMonth:!0,today:this.isToday(c,l-s,I.month,I.year),selectable:this.isSelectable(l-s,I.month,I.year,!0)})}else m.push({day:l,month:e,year:n,today:this.isToday(c,l,e,n),selectable:this.isSelectable(l,e,n,!1)});l++}this.showWeek&&d.push(this.getWeekNumber(new Date(m[0].year,m[0].month,m[0].day))),o.push(m)}return{month:e,year:n,dates:o,weekNumbers:d}}initTime(e){this.pm=e.getHours()>11,this.showTime?(this.currentMinute=e.getMinutes(),this.currentSecond=e.getSeconds(),this.setCurrentHourPM(e.getHours())):this.timeOnly&&(this.currentMinute=0,this.currentHour=0,this.currentSecond=0)}navBackward(e){if(this.$disabled()){e.preventDefault();return}this.isMonthNavigate=!0,this.currentView==="month"?(this.decrementYear(),setTimeout(()=>{this.updateFocus()},1)):this.currentView==="year"?(this.decrementDecade(),setTimeout(()=>{this.updateFocus()},1)):(this.currentMonth===0?(this.currentMonth=11,this.decrementYear()):this.currentMonth--,this.onMonthChange.emit({month:this.currentMonth+1,year:this.currentYear}),this.createMonths(this.currentMonth,this.currentYear))}navForward(e){if(this.$disabled()){e.preventDefault();return}this.isMonthNavigate=!0,this.currentView==="month"?(this.incrementYear(),setTimeout(()=>{this.updateFocus()},1)):this.currentView==="year"?(this.incrementDecade(),setTimeout(()=>{this.updateFocus()},1)):(this.currentMonth===11?(this.currentMonth=0,this.incrementYear()):this.currentMonth++,this.onMonthChange.emit({month:this.currentMonth+1,year:this.currentYear}),this.createMonths(this.currentMonth,this.currentYear))}decrementYear(){this.currentYear--;let e=this.yearOptions;if(this.currentYear<e[0]){let n=e[e.length-1]-e[0];this.populateYearOptions(e[0]-n,e[e.length-1]-n)}}decrementDecade(){this.currentYear=this.currentYear-10}incrementDecade(){this.currentYear=this.currentYear+10}incrementYear(){this.currentYear++;let e=this.yearOptions;if(this.currentYear>e[e.length-1]){let n=e[e.length-1]-e[0];this.populateYearOptions(e[0]+n,e[e.length-1]+n)}}switchToMonthView(e){this.setCurrentView("month"),e.preventDefault()}switchToYearView(e){this.setCurrentView("year"),e.preventDefault()}onDateSelect(e,n){if(this.$disabled()||!n.selectable){e.preventDefault();return}this.isMultipleSelection()&&this.isSelected(n)?(this.value=this.value.filter((o,r)=>!this.isDateEquals(o,n)),this.value.length===0&&(this.value=null),this.updateModel(this.value)):this.shouldSelectDate(n)&&this.selectDate(n),this.hideOnDateTimeSelect&&(this.isSingleSelection()||this.isRangeSelection()&&this.value[1])&&setTimeout(()=>{e.preventDefault(),this.hideOverlay(),this.mask&&this.disableModality(),this.cd.markForCheck()},150),this.updateInputfield(),e.preventDefault()}shouldSelectDate(e){return this.isMultipleSelection()&&this.maxDateCount!=null?this.maxDateCount>(this.value?this.value.length:0):!0}onMonthSelect(e,n){this.view==="month"?this.onDateSelect(e,{year:this.currentYear,month:n,day:1,selectable:!0}):(this.currentMonth=n,this.createMonths(this.currentMonth,this.currentYear),this.setCurrentView("date"),this.onMonthChange.emit({month:this.currentMonth+1,year:this.currentYear}))}onYearSelect(e,n){this.view==="year"?this.onDateSelect(e,{year:n,month:0,day:1,selectable:!0}):(this.currentYear=n,this.setCurrentView("month"),this.onYearChange.emit({month:this.currentMonth+1,year:this.currentYear}))}updateInputfield(){let e="";if(this.value){if(this.isSingleSelection())e=this.formatDateTime(this.value);else if(this.isMultipleSelection())for(let n=0;n<this.value.length;n++){let o=this.formatDateTime(this.value[n]);e+=o,n!==this.value.length-1&&(e+=this.multipleSeparator+" ")}else if(this.isRangeSelection()&&this.value&&this.value.length){let n=this.value[0],o=this.value[1];e=this.formatDateTime(n),o&&(e+=" "+this.rangeSeparator+" "+this.formatDateTime(o))}}this.writeModelValue(e),this.inputFieldValue=e,this.inputfieldViewChild&&this.inputfieldViewChild.nativeElement&&(this.inputfieldViewChild.nativeElement.value=this.inputFieldValue)}inputFieldValue=null;formatDateTime(e){let n=this.keepInvalid?e:null,o=this.isValidDateForTimeConstraints(e);return this.isValidDate(e)?this.timeOnly?n=this.formatTime(e):(n=this.formatDate(e,this.getDateFormat()),this.showTime&&(n+=" "+this.formatTime(e))):this.dataType==="string"&&(n=e),n=o?n:"",n}formatDateMetaToDate(e){return new Date(e.year,e.month,e.day)}formatDateKey(e){return`${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`}setCurrentHourPM(e){this.hourFormat=="12"?(this.pm=e>11,e>=12?this.currentHour=e==12?12:e-12:this.currentHour=e==0?12:e):this.currentHour=e}setCurrentView(e){this.currentView=e,this.cd.detectChanges(),this.alignOverlay()}selectDate(e){let n=this.formatDateMetaToDate(e);if(this.showTime&&(this.hourFormat=="12"?this.currentHour===12?n.setHours(this.pm?12:0):n.setHours(this.pm?this.currentHour+12:this.currentHour):n.setHours(this.currentHour),n.setMinutes(this.currentMinute),n.setSeconds(this.currentSecond)),this.minDate&&this.minDate>n&&(n=this.minDate,this.setCurrentHourPM(n.getHours()),this.currentMinute=n.getMinutes(),this.currentSecond=n.getSeconds()),this.maxDate&&this.maxDate<n&&(n=this.maxDate,this.setCurrentHourPM(n.getHours()),this.currentMinute=n.getMinutes(),this.currentSecond=n.getSeconds()),this.isSingleSelection())this.updateModel(n);else if(this.isMultipleSelection())this.updateModel(this.value?[...this.value,n]:[n]);else if(this.isRangeSelection())if(this.value&&this.value.length){let o=this.value[0],r=this.value[1];!r&&n.getTime()>=o.getTime()?r=n:(o=n,r=null),this.updateModel([o,r])}else this.updateModel([n,null]);this.onSelect.emit(n)}updateModel(e){if(this.value=e,this.dataType=="date")this.writeModelValue(this.value),this.onModelChange(this.value);else if(this.dataType=="string")if(this.isSingleSelection())this.onModelChange(this.formatDateTime(this.value));else{let n=null;Array.isArray(this.value)&&(n=this.value.map(o=>this.formatDateTime(o))),this.writeModelValue(n),this.onModelChange(n)}}getFirstDayOfMonthIndex(e,n){let o=new Date;o.setDate(1),o.setMonth(e),o.setFullYear(n);let r=o.getDay()+this.getSundayIndex();return r>=7?r-7:r}getDaysCountInMonth(e,n){return 32-this.daylightSavingAdjust(new Date(n,e,32)).getDate()}getDaysCountInPrevMonth(e,n){let o=this.getPreviousMonthAndYear(e,n);return this.getDaysCountInMonth(o.month,o.year)}getPreviousMonthAndYear(e,n){let o,r;return e===0?(o=11,r=n-1):(o=e-1,r=n),{month:o,year:r}}getNextMonthAndYear(e,n){let o,r;return e===11?(o=0,r=n+1):(o=e+1,r=n),{month:o,year:r}}getSundayIndex(){let e=this.getFirstDateOfWeek();return e>0?7-e:0}isSelected(e){if(this.value){if(this.isSingleSelection())return this.isDateEquals(this.value,e);if(this.isMultipleSelection()){let n=!1;for(let o of this.value)if(n=this.isDateEquals(o,e),n)break;return n}else if(this.isRangeSelection())return this.value[1]?this.isDateEquals(this.value[0],e)||this.isDateEquals(this.value[1],e)||this.isDateBetween(this.value[0],this.value[1],e):this.isDateEquals(this.value[0],e)}else return!1}isComparable(){return this.value!=null&&typeof this.value!="string"}isMonthSelected(e){if(!this.isComparable())return!1;if(this.isMultipleSelection())return this.value.some(n=>n.getMonth()===e&&n.getFullYear()===this.currentYear);if(this.isRangeSelection())if(this.value[1]){let n=new Date(this.currentYear,e,1),o=new Date(this.value[0].getFullYear(),this.value[0].getMonth(),1),r=new Date(this.value[1].getFullYear(),this.value[1].getMonth(),1);return n>=o&&n<=r}else return this.value[0]?.getFullYear()===this.currentYear&&this.value[0]?.getMonth()===e;else return this.value.getMonth()===e&&this.value.getFullYear()===this.currentYear}isMonthDisabled(e,n){let o=n??this.currentYear;for(let r=1;r<this.getDaysCountInMonth(e,o)+1;r++)if(this.isSelectable(r,e,o,!1))return!1;return!0}isYearDisabled(e){return Array(12).fill(0).every((n,o)=>this.isMonthDisabled(o,e))}isYearSelected(e){if(this.isComparable()){let n=this.isRangeSelection()?this.value[0]:this.value;return this.isMultipleSelection()?!1:n.getFullYear()===e}return!1}isDateEquals(e,n){return e&&Qr(e)?e.getDate()===n.day&&e.getMonth()===n.month&&e.getFullYear()===n.year:!1}isDateBetween(e,n,o){let r=!1;if(Qr(e)&&Qr(n)){let s=this.formatDateMetaToDate(o);return e.getTime()<=s.getTime()&&n.getTime()>=s.getTime()}return r}isSingleSelection(){return this.selectionMode==="single"}isRangeSelection(){return this.selectionMode==="range"}isMultipleSelection(){return this.selectionMode==="multiple"}isToday(e,n,o,r){return e.getDate()===n&&e.getMonth()===o&&e.getFullYear()===r}isSelectable(e,n,o,r){let s=!0,a=!0,l=!0,c=!0;return r&&!this.selectOtherMonths?!1:(this.minDate&&(this.minDate.getFullYear()>o||this.minDate.getFullYear()===o&&this.currentView!="year"&&(this.minDate.getMonth()>n||this.minDate.getMonth()===n&&this.minDate.getDate()>e))&&(s=!1),this.maxDate&&(this.maxDate.getFullYear()<o||this.maxDate.getFullYear()===o&&(this.maxDate.getMonth()<n||this.maxDate.getMonth()===n&&this.maxDate.getDate()<e))&&(a=!1),this.disabledDates&&(l=!this.isDateDisabled(e,n,o)),this.disabledDays&&(c=!this.isDayDisabled(e,n,o)),s&&a&&l&&c)}isDateDisabled(e,n,o){if(this.disabledDates){for(let r of this.disabledDates)if(r.getFullYear()===o&&r.getMonth()===n&&r.getDate()===e)return!0}return!1}isDayDisabled(e,n,o){if(this.disabledDays){let s=new Date(o,n,e).getDay();return this.disabledDays.indexOf(s)!==-1}return!1}onInputFocus(e){this.focus=!0,this.showOnFocus&&this.showOverlay(),this.onFocus.emit(e)}onInputClick(){this.showOnFocus&&!this.overlayVisible&&this.showOverlay()}onInputBlur(e){this.focus=!1,this.onBlur.emit(e),this.keepInvalid||this.updateInputfield(),this.onModelTouched()}onButtonClick(e,n=this.inputfieldViewChild?.nativeElement){this.$disabled()||(this.overlayVisible?this.hideOverlay():(n.focus(),this.showOverlay()))}clear(){this.value=null,this.inputFieldValue=null,this.writeModelValue(this.value),this.onModelChange(this.value),this.updateInputfield(),this.onClear.emit()}onOverlayClick(e){this.overlayService.add({originalEvent:e,target:this.el.nativeElement})}getMonthName(e){return this.config.getTranslation("monthNames")[e]}getYear(e){return this.currentView==="month"?this.currentYear:e.year}switchViewButtonDisabled(){return this.numberOfMonths>1||this.$disabled()}onPrevButtonClick(e){this.navigationState={backward:!0,button:!0},this.navBackward(e)}onNextButtonClick(e){this.navigationState={backward:!1,button:!0},this.navForward(e)}onContainerButtonKeydown(e){switch(e.which){case 9:if(this.inline||this.trapFocus(e),this.inline){let n=Oe(this.el?.nativeElement,".p-datepicker-header"),o=e.target;if(this.timeOnly)return;o==n.children[n?.children?.length-1]&&this.initFocusableCell()}break;case 27:this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault();break;default:break}}onInputKeydown(e){this.isKeydown=!0,e.keyCode===40&&this.contentViewChild?this.trapFocus(e):e.keyCode===27?this.overlayVisible&&(this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault()):e.keyCode===13?this.overlayVisible&&(this.overlayVisible=!1,e.preventDefault()):e.keyCode===9&&this.contentViewChild&&(Hi(this.contentViewChild.nativeElement).forEach(n=>n.tabIndex="-1"),this.overlayVisible&&(this.overlayVisible=!1))}onDateCellKeydown(e,n,o){let r=e.currentTarget,s=r.parentElement,a=this.formatDateMetaToDate(n);switch(e.which){case 40:{r.tabIndex="-1";let y=qr(s),I=s.parentElement.nextElementSibling;if(I){let O=I.children[y].children[0];at(O,"p-disabled")?(this.navigationState={backward:!1},this.navForward(e)):(I.children[y].children[0].tabIndex="0",I.children[y].children[0].focus())}else this.navigationState={backward:!1},this.navForward(e);e.preventDefault();break}case 38:{r.tabIndex="-1";let y=qr(s),I=s.parentElement.previousElementSibling;if(I){let O=I.children[y].children[0];at(O,"p-disabled")?(this.navigationState={backward:!0},this.navBackward(e)):(O.tabIndex="0",O.focus())}else this.navigationState={backward:!0},this.navBackward(e);e.preventDefault();break}case 37:{r.tabIndex="-1";let y=s.previousElementSibling;if(y){let I=y.children[0];at(I,"p-disabled")||at(I.parentElement,"p-datepicker-weeknumber")?this.navigateToMonth(!0,o):(I.tabIndex="0",I.focus())}else this.navigateToMonth(!0,o);e.preventDefault();break}case 39:{r.tabIndex="-1";let y=s.nextElementSibling;if(y){let I=y.children[0];at(I,"p-disabled")?this.navigateToMonth(!1,o):(I.tabIndex="0",I.focus())}else this.navigateToMonth(!1,o);e.preventDefault();break}case 13:case 32:{this.onDateSelect(e,n),e.preventDefault();break}case 27:{this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault();break}case 9:{this.inline||this.trapFocus(e);break}case 33:{r.tabIndex="-1";let y=new Date(a.getFullYear(),a.getMonth()-1,a.getDate()),I=this.formatDateKey(y);this.navigateToMonth(!0,o,`span[data-date='${I}']:not(.p-disabled):not(.p-ink)`),e.preventDefault();break}case 34:{r.tabIndex="-1";let y=new Date(a.getFullYear(),a.getMonth()+1,a.getDate()),I=this.formatDateKey(y);this.navigateToMonth(!1,o,`span[data-date='${I}']:not(.p-disabled):not(.p-ink)`),e.preventDefault();break}case 36:r.tabIndex="-1";let l=new Date(a.getFullYear(),a.getMonth(),1),c=this.formatDateKey(l),d=Oe(r.offsetParent,`span[data-date='${c}']:not(.p-disabled):not(.p-ink)`);d&&(d.tabIndex="0",d.focus()),e.preventDefault();break;case 35:r.tabIndex="-1";let h=new Date(a.getFullYear(),a.getMonth()+1,0),g=this.formatDateKey(h),m=Oe(r.offsetParent,`span[data-date='${g}']:not(.p-disabled):not(.p-ink)`);h&&(m.tabIndex="0",m.focus()),e.preventDefault();break;default:break}}onMonthCellKeydown(e,n){let o=e.currentTarget;switch(e.which){case 38:case 40:{o.tabIndex="-1";var r=o.parentElement.children,s=qr(o);let a=r[e.which===40?s+3:s-3];a&&(a.tabIndex="0",a.focus()),e.preventDefault();break}case 37:{o.tabIndex="-1";let a=o.previousElementSibling;a?(a.tabIndex="0",a.focus()):(this.navigationState={backward:!0},this.navBackward(e)),e.preventDefault();break}case 39:{o.tabIndex="-1";let a=o.nextElementSibling;a?(a.tabIndex="0",a.focus()):(this.navigationState={backward:!1},this.navForward(e)),e.preventDefault();break}case 13:case 32:{this.onMonthSelect(e,n),e.preventDefault();break}case 27:{this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault();break}case 9:{this.inline||this.trapFocus(e);break}default:break}}onYearCellKeydown(e,n){let o=e.currentTarget;switch(e.which){case 38:case 40:{o.tabIndex="-1";var r=o.parentElement.children,s=qr(o);let a=r[e.which===40?s+2:s-2];a&&(a.tabIndex="0",a.focus()),e.preventDefault();break}case 37:{o.tabIndex="-1";let a=o.previousElementSibling;a?(a.tabIndex="0",a.focus()):(this.navigationState={backward:!0},this.navBackward(e)),e.preventDefault();break}case 39:{o.tabIndex="-1";let a=o.nextElementSibling;a?(a.tabIndex="0",a.focus()):(this.navigationState={backward:!1},this.navForward(e)),e.preventDefault();break}case 13:case 32:{this.onYearSelect(e,n),e.preventDefault();break}case 27:{this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,e.preventDefault();break}case 9:{this.trapFocus(e);break}default:break}}navigateToMonth(e,n,o){if(e)if(this.numberOfMonths===1||n===0)this.navigationState={backward:!0},this._focusKey=o,this.navBackward(event);else{let r=this.contentViewChild.nativeElement.children[n-1];if(o){let s=Oe(r,o);s.tabIndex="0",s.focus()}else{let s=Tn(r,".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)"),a=s[s.length-1];a.tabIndex="0",a.focus()}}else if(this.numberOfMonths===1||n===this.numberOfMonths-1)this.navigationState={backward:!1},this._focusKey=o,this.navForward(event);else{let r=this.contentViewChild.nativeElement.children[n+1];if(o){let s=Oe(r,o);s.tabIndex="0",s.focus()}else{let s=Oe(r,".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");s.tabIndex="0",s.focus()}}}updateFocus(){let e;if(this.navigationState){if(this.navigationState.button)this.initFocusableCell(),this.navigationState.backward?Oe(this.contentViewChild.nativeElement,".p-datepicker-prev-button").focus():Oe(this.contentViewChild.nativeElement,".p-datepicker-next-button").focus();else{if(this.navigationState.backward){let n;this.currentView==="month"?n=Tn(this.contentViewChild.nativeElement,".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)"):this.currentView==="year"?n=Tn(this.contentViewChild.nativeElement,".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)"):n=Tn(this.contentViewChild.nativeElement,this._focusKey||".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)"),n&&n.length>0&&(e=n[n.length-1])}else this.currentView==="month"?e=Oe(this.contentViewChild.nativeElement,".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)"):this.currentView==="year"?e=Oe(this.contentViewChild.nativeElement,".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)"):e=Oe(this.contentViewChild.nativeElement,this._focusKey||".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");e&&(e.tabIndex="0",e.focus())}this.navigationState=null,this._focusKey=null}else this.initFocusableCell()}initFocusableCell(){let e=this.contentViewChild?.nativeElement,n;if(this.currentView==="month"){let o=Tn(e,".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)"),r=Oe(e,".p-datepicker-month-view .p-datepicker-month.p-highlight");o.forEach(s=>s.tabIndex=-1),n=r||o[0],o.length===0&&Tn(e,'.p-datepicker-month-view .p-datepicker-month.p-disabled[tabindex = "0"]').forEach(a=>a.tabIndex=-1)}else if(this.currentView==="year"){let o=Tn(e,".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)"),r=Oe(e,".p-datepicker-year-view .p-datepicker-year.p-highlight");o.forEach(s=>s.tabIndex=-1),n=r||o[0],o.length===0&&Tn(e,'.p-datepicker-year-view .p-datepicker-year.p-disabled[tabindex = "0"]').forEach(a=>a.tabIndex=-1)}else if(n=Oe(e,"span.p-highlight"),!n){let o=Oe(e,"td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");o?n=o:n=Oe(e,".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)")}n&&(n.tabIndex="0",!this.preventFocus&&(!this.navigationState||!this.navigationState.button)&&setTimeout(()=>{this.$disabled()||n.focus()},1),this.preventFocus=!1)}trapFocus(e){let n=Hi(this.contentViewChild.nativeElement);if(n&&n.length>0)if(!n[0].ownerDocument.activeElement)n[0].focus();else{let o=n.indexOf(n[0].ownerDocument.activeElement);if(e.shiftKey)if(o==-1||o===0)if(this.focusTrap)n[n.length-1].focus();else{if(o===-1)return this.hideOverlay();if(o===0)return}else n[o-1].focus();else if(o==-1)if(this.timeOnly)n[0].focus();else{let r=0;for(let s=0;s<n.length;s++)n[s].tagName==="SPAN"&&(r=s);n[r].focus()}else if(o===n.length-1){if(!this.focusTrap&&o!=-1)return this.hideOverlay();n[0].focus()}else n[o+1].focus()}e.preventDefault()}onMonthDropdownChange(e){this.currentMonth=parseInt(e),this.onMonthChange.emit({month:this.currentMonth+1,year:this.currentYear}),this.createMonths(this.currentMonth,this.currentYear)}onYearDropdownChange(e){this.currentYear=parseInt(e),this.onYearChange.emit({month:this.currentMonth+1,year:this.currentYear}),this.createMonths(this.currentMonth,this.currentYear)}convertTo24Hour(e,n){return this.hourFormat=="12"?e===12?n?12:0:n?e+12:e:e}constrainTime(e,n,o,r){let s=[e,n,o],a,l=this.value,c=this.convertTo24Hour(e,r),d=this.isRangeSelection(),h=this.isMultipleSelection();(d||h)&&(this.value||(this.value=[new Date,new Date]),d&&(l=this.value[1]||this.value[0]),h&&(l=this.value[this.value.length-1]));let m=l?l.toDateString():null,y=this.minDate&&m&&this.minDate.toDateString()===m,I=this.maxDate&&m&&this.maxDate.toDateString()===m;switch(y&&(a=this.minDate.getHours()>=12),!0){case(y&&a&&this.minDate.getHours()===12&&this.minDate.getHours()>c):s[0]=11;case(y&&this.minDate.getHours()===c&&this.minDate.getMinutes()>n):s[1]=this.minDate.getMinutes();case(y&&this.minDate.getHours()===c&&this.minDate.getMinutes()===n&&this.minDate.getSeconds()>o):s[2]=this.minDate.getSeconds();break;case(y&&!a&&this.minDate.getHours()-1===c&&this.minDate.getHours()>c):s[0]=11,this.pm=!0;case(y&&this.minDate.getHours()===c&&this.minDate.getMinutes()>n):s[1]=this.minDate.getMinutes();case(y&&this.minDate.getHours()===c&&this.minDate.getMinutes()===n&&this.minDate.getSeconds()>o):s[2]=this.minDate.getSeconds();break;case(y&&a&&this.minDate.getHours()>c&&c!==12):this.setCurrentHourPM(this.minDate.getHours()),s[0]=this.currentHour;case(y&&this.minDate.getHours()===c&&this.minDate.getMinutes()>n):s[1]=this.minDate.getMinutes();case(y&&this.minDate.getHours()===c&&this.minDate.getMinutes()===n&&this.minDate.getSeconds()>o):s[2]=this.minDate.getSeconds();break;case(y&&this.minDate.getHours()>c):s[0]=this.minDate.getHours();case(y&&this.minDate.getHours()===c&&this.minDate.getMinutes()>n):s[1]=this.minDate.getMinutes();case(y&&this.minDate.getHours()===c&&this.minDate.getMinutes()===n&&this.minDate.getSeconds()>o):s[2]=this.minDate.getSeconds();break;case(I&&this.maxDate.getHours()<c):s[0]=this.maxDate.getHours();case(I&&this.maxDate.getHours()===c&&this.maxDate.getMinutes()<n):s[1]=this.maxDate.getMinutes();case(I&&this.maxDate.getHours()===c&&this.maxDate.getMinutes()===n&&this.maxDate.getSeconds()<o):s[2]=this.maxDate.getSeconds();break}return s}incrementHour(e){let n=this.currentHour??0,o=(this.currentHour??0)+this.stepHour,r=this.pm;this.hourFormat=="24"?o=o>=24?o-24:o:this.hourFormat=="12"&&(n<12&&o>11&&(r=!this.pm),o=o>=13?o-12:o),this.toggleAMPMIfNotMinDate(r),[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(o,this.currentMinute,this.currentSecond,r),e.preventDefault()}toggleAMPMIfNotMinDate(e){let n=this.value,o=n?n.toDateString():null;this.minDate&&o&&this.minDate.toDateString()===o&&this.minDate.getHours()>=12?this.pm=!0:this.pm=e}onTimePickerElementMouseDown(e,n,o){this.$disabled()||(this.repeat(e,null,n,o),e.preventDefault())}onTimePickerElementMouseUp(e){this.$disabled()||(this.clearTimePickerTimer(),this.updateTime())}onTimePickerElementMouseLeave(){!this.$disabled()&&this.timePickerTimer&&(this.clearTimePickerTimer(),this.updateTime())}repeat(e,n,o,r){let s=n||500;switch(this.clearTimePickerTimer(),this.timePickerTimer=setTimeout(()=>{this.repeat(e,100,o,r),this.cd.markForCheck()},s),o){case 0:r===1?this.incrementHour(e):this.decrementHour(e);break;case 1:r===1?this.incrementMinute(e):this.decrementMinute(e);break;case 2:r===1?this.incrementSecond(e):this.decrementSecond(e);break}this.updateInputfield()}clearTimePickerTimer(){this.timePickerTimer&&(clearTimeout(this.timePickerTimer),this.timePickerTimer=null)}decrementHour(e){let n=(this.currentHour??0)-this.stepHour,o=this.pm;this.hourFormat=="24"?n=n<0?24+n:n:this.hourFormat=="12"&&(this.currentHour===12&&(o=!this.pm),n=n<=0?12+n:n),this.toggleAMPMIfNotMinDate(o),[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(n,this.currentMinute,this.currentSecond,o),e.preventDefault()}incrementMinute(e){let n=(this.currentMinute??0)+this.stepMinute;n=n>59?n-60:n,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,n,this.currentSecond,this.pm),e.preventDefault()}decrementMinute(e){let n=(this.currentMinute??0)-this.stepMinute;n=n<0?60+n:n,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,n,this.currentSecond,this.pm),e.preventDefault()}incrementSecond(e){let n=this.currentSecond+this.stepSecond;n=n>59?n-60:n,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,this.currentMinute,n,this.pm),e.preventDefault()}decrementSecond(e){let n=this.currentSecond-this.stepSecond;n=n<0?60+n:n,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,this.currentMinute,n,this.pm),e.preventDefault()}updateTime(){let e=this.value;this.isRangeSelection()&&(e=this.value[1]||this.value[0]),this.isMultipleSelection()&&(e=this.value[this.value.length-1]),e=e?new Date(e.getTime()):new Date,this.hourFormat=="12"?this.currentHour===12?e.setHours(this.pm?12:0):e.setHours(this.pm?this.currentHour+12:this.currentHour):e.setHours(this.currentHour),e.setMinutes(this.currentMinute),e.setSeconds(this.currentSecond),this.isRangeSelection()&&(this.value[1]?e=[this.value[0],e]:e=[e,null]),this.isMultipleSelection()&&(e=[...this.value.slice(0,-1),e]),this.updateModel(e),this.onSelect.emit(e),this.updateInputfield()}toggleAMPM(e){let n=!this.pm;this.pm=n,[this.currentHour,this.currentMinute,this.currentSecond]=this.constrainTime(this.currentHour,this.currentMinute,this.currentSecond,n),this.updateTime(),e.preventDefault()}onUserInput(e){if(!this.isKeydown)return;this.isKeydown=!1;let n=e.target.value;try{let o=this.parseValueFromString(n);this.isValidSelection(o)?(this.updateModel(o),this.updateUI()):this.keepInvalid&&this.updateModel(o)}catch{let r=this.keepInvalid?n:null;this.updateModel(r)}this.onInput.emit(e)}isValidSelection(e){if(this.isSingleSelection())return this.isSelectable(e.getDate(),e.getMonth(),e.getFullYear(),!1);let n=e.every(o=>this.isSelectable(o.getDate(),o.getMonth(),o.getFullYear(),!1));return n&&this.isRangeSelection()&&(n=e.length===1||e.length>1&&e[1]>=e[0]),n}parseValueFromString(e){if(!e||e.trim().length===0)return null;let n;if(this.isSingleSelection())n=this.parseDateTime(e);else if(this.isMultipleSelection()){let o=e.split(this.multipleSeparator);n=[];for(let r of o)n.push(this.parseDateTime(r.trim()))}else if(this.isRangeSelection()){let o=e.split(" "+this.rangeSeparator+" ");n=[];for(let r=0;r<o.length;r++)n[r]=this.parseDateTime(o[r].trim())}return n}parseDateTime(e){let n,o=e.split(" ");if(this.timeOnly)n=new Date,this.populateTime(n,o[0],o[1]);else{let r=this.getDateFormat();if(this.showTime){let s=this.hourFormat=="12"?o.pop():null,a=o.pop();n=this.parseDate(o.join(" "),r),this.populateTime(n,a,s)}else n=this.parseDate(e,r)}return n}populateTime(e,n,o){if(this.hourFormat=="12"&&!o)throw"Invalid Time";this.pm=o==="PM"||o==="pm";let r=this.parseTime(n);e.setHours(r.hour),e.setMinutes(r.minute),e.setSeconds(r.second)}isValidDate(e){return Qr(e)&&De(e)}updateUI(){let e=this.value;Array.isArray(e)&&(e=e.length===2?e[1]:e[0]);let n=this.defaultDate&&this.isValidDate(this.defaultDate)&&!this.value?this.defaultDate:e&&this.isValidDate(e)?e:new Date;this.currentMonth=n.getMonth(),this.currentYear=n.getFullYear(),this.createMonths(this.currentMonth,this.currentYear),(this.showTime||this.timeOnly)&&(this.setCurrentHourPM(n.getHours()),this.currentMinute=n.getMinutes(),this.currentSecond=n.getSeconds())}showOverlay(){this.overlayVisible||(this.updateUI(),this.touchUI||(this.preventFocus=!0),this.overlayVisible=!0)}hideOverlay(){this.inputfieldViewChild?.nativeElement.focus(),this.overlayVisible=!1,this.clearTimePickerTimer(),this.touchUI&&this.disableModality(),this.cd.markForCheck()}toggle(){this.inline||(this.overlayVisible?this.hideOverlay():(this.showOverlay(),this.inputfieldViewChild?.nativeElement.focus()))}onOverlayAnimationStart(e){switch(e.toState){case"visible":case"visibleTouchUI":if(!this.inline){this.overlay=e.element,this.attrSelector&&this.overlay.setAttribute(this.attrSelector,"");let n=this.inline?void 0:{position:"absolute",top:"0"};E0(this.overlay,n),this.appendOverlay(),this.updateFocus(),this.autoZIndex&&(this.touchUI?Ot.set("modal",this.overlay,this.baseZIndex||this.config.zIndex.modal):Ot.set("overlay",this.overlay,this.baseZIndex||this.config.zIndex.overlay)),this.alignOverlay(),this.onShow.emit(e)}break;case"void":this.onOverlayHide(),this.onClose.emit(e);break}}onOverlayAnimationDone(e){switch(e.toState){case"visible":case"visibleTouchUI":this.inline||(this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener());break;case"void":this.autoZIndex&&Ot.clear(e.element);break}}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?this.document.body.appendChild(this.overlay):Wr(this.$appendTo(),this.overlay))}restoreOverlayAppend(){this.overlay&&this.$appendTo()!=="self"&&this.el.nativeElement.appendChild(this.overlay)}alignOverlay(){this.touchUI?this.enableModality(this.overlay):this.overlay&&(this.view==="date"?(this.overlay.style.width||(this.overlay.style.width=dt(this.overlay)+"px"),this.overlay.style.minWidth||(this.overlay.style.minWidth=dt(this.inputfieldViewChild?.nativeElement)+"px")):this.overlay.style.width||(this.overlay.style.width=dt(this.inputfieldViewChild?.nativeElement)+"px"),this.$appendTo()&&this.$appendTo()!=="self"?x0(this.overlay,this.inputfieldViewChild?.nativeElement):T0(this.overlay,this.inputfieldViewChild?.nativeElement))}enableModality(e){!this.mask&&this.touchUI&&(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",String(parseInt(e.style.zIndex)-1)),ln(this.mask,"p-overlay-mask p-datepicker-mask p-datepicker-mask-scrollblocker p-overlay-mask p-overlay-mask-enter"),this.maskClickListener=this.renderer.listen(this.mask,"click",o=>{this.disableModality(),this.overlayVisible=!1}),this.renderer.appendChild(this.document.body,this.mask),r_())}disableModality(){this.mask&&(ln(this.mask,"p-overlay-mask-leave"),this.animationEndListener||(this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyMask.bind(this))))}destroyMask(){if(!this.mask)return;this.renderer.removeChild(this.document.body,this.mask);let e=this.document.body.children,n;for(let o=0;o<e.length;o++){let r=e[o];if(at(r,"p-datepicker-mask-scrollblocker")){n=!0;break}}n||gl(),this.unbindAnimationEndListener(),this.unbindMaskClickListener(),this.mask=null}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}getDateFormat(){return this.dateFormat||this.getTranslation("dateFormat")}getFirstDateOfWeek(){return this._firstDayOfWeek||this.getTranslation(bt.FIRST_DAY_OF_WEEK)}formatDate(e,n){if(!e)return"";let o,r=d=>{let h=o+1<n.length&&n.charAt(o+1)===d;return h&&o++,h},s=(d,h,g)=>{let m=""+h;if(r(d))for(;m.length<g;)m="0"+m;return m},a=(d,h,g,m)=>r(d)?m[h]:g[h],l="",c=!1;if(e)for(o=0;o<n.length;o++)if(c)n.charAt(o)==="'"&&!r("'")?c=!1:l+=n.charAt(o);else switch(n.charAt(o)){case"d":l+=s("d",e.getDate(),2);break;case"D":l+=a("D",e.getDay(),this.getTranslation(bt.DAY_NAMES_SHORT),this.getTranslation(bt.DAY_NAMES));break;case"o":l+=s("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":l+=s("m",e.getMonth()+1,2);break;case"M":l+=a("M",e.getMonth(),this.getTranslation(bt.MONTH_NAMES_SHORT),this.getTranslation(bt.MONTH_NAMES));break;case"y":l+=r("y")?e.getFullYear():(e.getFullYear()%100<10?"0":"")+e.getFullYear()%100;break;case"@":l+=e.getTime();break;case"!":l+=e.getTime()*1e4+this.ticksTo1970;break;case"'":r("'")?l+="'":c=!0;break;default:l+=n.charAt(o)}return l}formatTime(e){if(!e)return"";let n="",o=e.getHours(),r=e.getMinutes(),s=e.getSeconds();return this.hourFormat=="12"&&o>11&&o!=12&&(o-=12),this.hourFormat=="12"?n+=o===0?12:o<10?"0"+o:o:n+=o<10?"0"+o:o,n+=":",n+=r<10?"0"+r:r,this.showSeconds&&(n+=":",n+=s<10?"0"+s:s),this.hourFormat=="12"&&(n+=e.getHours()>11?" PM":" AM"),n}parseTime(e){let n=e.split(":"),o=this.showSeconds?3:2;if(n.length!==o)throw"Invalid time";let r=parseInt(n[0]),s=parseInt(n[1]),a=this.showSeconds?parseInt(n[2]):null;if(isNaN(r)||isNaN(s)||r>23||s>59||this.hourFormat=="12"&&r>12||this.showSeconds&&(isNaN(a)||a>59))throw"Invalid time";return this.hourFormat=="12"&&(r!==12&&this.pm?r+=12:!this.pm&&r===12&&(r-=12)),{hour:r,minute:s,second:a}}parseDate(e,n){if(n==null||e==null)throw"Invalid arguments";if(e=typeof e=="object"?e.toString():e+"",e==="")return null;let o,r,s,a=0,l=typeof this.shortYearCutoff!="string"?this.shortYearCutoff:new Date().getFullYear()%100+parseInt(this.shortYearCutoff,10),c=-1,d=-1,h=-1,g=-1,m=!1,y,I=_e=>{let $e=o+1<n.length&&n.charAt(o+1)===_e;return $e&&o++,$e},O=_e=>{let $e=I(_e),lt=_e==="@"?14:_e==="!"?20:_e==="y"&&$e?4:_e==="o"?3:2,vt=_e==="y"?lt:1,An=new RegExp("^\\d{"+vt+","+lt+"}"),Ct=e.substring(a).match(An);if(!Ct)throw"Missing number at position "+a;return a+=Ct[0].length,parseInt(Ct[0],10)},P=(_e,$e,lt)=>{let vt=-1,An=I(_e)?lt:$e,Ct=[];for(let ut=0;ut<An.length;ut++)Ct.push([ut,An[ut]]);Ct.sort((ut,hn)=>-(ut[1].length-hn[1].length));for(let ut=0;ut<Ct.length;ut++){let hn=Ct[ut][1];if(e.substr(a,hn.length).toLowerCase()===hn.toLowerCase()){vt=Ct[ut][0],a+=hn.length;break}}if(vt!==-1)return vt+1;throw"Unknown name at position "+a},Z=()=>{if(e.charAt(a)!==n.charAt(o))throw"Unexpected literal at position "+a;a++};for(this.view==="month"&&(h=1),o=0;o<n.length;o++)if(m)n.charAt(o)==="'"&&!I("'")?m=!1:Z();else switch(n.charAt(o)){case"d":h=O("d");break;case"D":P("D",this.getTranslation(bt.DAY_NAMES_SHORT),this.getTranslation(bt.DAY_NAMES));break;case"o":g=O("o");break;case"m":d=O("m");break;case"M":d=P("M",this.getTranslation(bt.MONTH_NAMES_SHORT),this.getTranslation(bt.MONTH_NAMES));break;case"y":c=O("y");break;case"@":y=new Date(O("@")),c=y.getFullYear(),d=y.getMonth()+1,h=y.getDate();break;case"!":y=new Date((O("!")-this.ticksTo1970)/1e4),c=y.getFullYear(),d=y.getMonth()+1,h=y.getDate();break;case"'":I("'")?Z():m=!0;break;default:Z()}if(a<e.length&&(s=e.substr(a),!/^\s+/.test(s)))throw"Extra/unparsed characters found in date: "+s;if(c===-1?c=new Date().getFullYear():c<100&&(c+=new Date().getFullYear()-new Date().getFullYear()%100+(c<=l?0:-100)),g>-1){d=1,h=g;do{if(r=this.getDaysCountInMonth(c,d-1),h<=r)break;d++,h-=r}while(!0)}if(this.view==="year"&&(d=d===-1?1:d,h=h===-1?1:h),y=this.daylightSavingAdjust(new Date(c,d-1,h)),y.getFullYear()!==c||y.getMonth()+1!==d||y.getDate()!==h)throw"Invalid date";return y}daylightSavingAdjust(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null}isValidDateForTimeConstraints(e){return this.keepInvalid?!0:(!this.minDate||e>=this.minDate)&&(!this.maxDate||e<=this.maxDate)}onTodayButtonClick(e){let n=new Date,o={day:n.getDate(),month:n.getMonth(),year:n.getFullYear(),otherMonth:n.getMonth()!==this.currentMonth||n.getFullYear()!==this.currentYear,today:!0,selectable:!0};this.createMonths(n.getMonth(),n.getFullYear()),this.onDateSelect(e,o),this.onTodayClick.emit(n)}onClearButtonClick(e){this.updateModel(null),this.updateInputfield(),this.hideOverlay(),this.onClearClick.emit(e)}createResponsiveStyle(){if(this.numberOfMonths>1&&this.responsiveOptions){this.responsiveStyleElement||(this.responsiveStyleElement=this.renderer.createElement("style"),this.responsiveStyleElement.type="text/css",Kr(this.responsiveStyleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.body,this.responsiveStyleElement));let e="";if(this.responsiveOptions){let n=[...this.responsiveOptions].filter(o=>!!(o.breakpoint&&o.numMonths)).sort((o,r)=>-1*o.breakpoint.localeCompare(r.breakpoint,void 0,{numeric:!0}));for(let o=0;o<n.length;o++){let{breakpoint:r,numMonths:s}=n[o],a=`
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${s}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;for(let l=s;l<this.numberOfMonths;l++)a+=`
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${l+1}) {
                                display: none !important;
                            }
                        `;e+=`
                        @media screen and (max-width: ${r}) {
                            ${a}
                        }
                    `}}this.responsiveStyleElement.innerHTML=e,Kr(this.responsiveStyleElement,"nonce",this.config?.csp()?.nonce)}}destroyResponsiveStyleElement(){this.responsiveStyleElement&&(this.responsiveStyleElement.remove(),this.responsiveStyleElement=null)}bindDocumentClickListener(){this.documentClickListener||this.zone.runOutsideAngular(()=>{let e=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(e,"mousedown",n=>{this.isOutsideClicked(n)&&this.overlayVisible&&this.zone.run(()=>{this.hideOverlay(),this.onClickOutside.emit(n),this.cd.markForCheck()})})})}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){!this.documentResizeListener&&!this.touchUI&&(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Yn(this.el?.nativeElement,()=>{this.overlayVisible&&this.hideOverlay()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}isOutsideClicked(e){return!(this.el.nativeElement.isSameNode(e.target)||this.isNavIconClicked(e)||this.el.nativeElement.contains(e.target)||this.overlay&&this.overlay.contains(e.target))}isNavIconClicked(e){return at(e.target,"p-datepicker-prev-button")||at(e.target,"p-datepicker-prev-icon")||at(e.target,"p-datepicker-next-button")||at(e.target,"p-datepicker-next-icon")}onWindowResize(){this.overlayVisible&&!Wn()&&this.hideOverlay()}onOverlayHide(){this.currentView=this.view,this.mask&&this.destroyMask(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.overlay=null}writeControlValue(e){if(this.value=e,this.value&&typeof this.value=="string")try{this.value=this.parseValueFromString(this.value)}catch{this.keepInvalid&&(this.value=e)}this.updateInputfield(),this.updateUI(),this.cd.markForCheck()}ngOnDestroy(){this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),this.overlay&&this.autoZIndex&&Ot.clear(this.overlay),this.destroyResponsiveStyleElement(),this.clearTimePickerTimer(),this.restoreOverlayAppend(),this.onOverlayHide(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(K(we),K(Ao))};static \u0275cmp=L({type:t,selectors:[["p-datePicker"],["p-datepicker"],["p-date-picker"]],contentQueries:function(n,o,r){if(n&1&&(F(r,bE,4),F(r,vE,4),F(r,CE,4),F(r,wE,4),F(r,DE,4),F(r,IE,4),F(r,xE,4),F(r,EE,4),F(r,TE,4),F(r,SE,4),F(r,ME,4),F(r,kE,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.dateTemplate=s.first),x(s=E())&&(o.headerTemplate=s.first),x(s=E())&&(o.footerTemplate=s.first),x(s=E())&&(o.disabledDateTemplate=s.first),x(s=E())&&(o.decadeTemplate=s.first),x(s=E())&&(o.previousIconTemplate=s.first),x(s=E())&&(o.nextIconTemplate=s.first),x(s=E())&&(o.triggerIconTemplate=s.first),x(s=E())&&(o.clearIconTemplate=s.first),x(s=E())&&(o.decrementIconTemplate=s.first),x(s=E())&&(o.incrementIconTemplate=s.first),x(s=E())&&(o.inputIconTemplate=s.first),x(s=E())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&(Ce(OE,5),Ce(RE,5)),n&2){let r;x(r=E())&&(o.inputfieldViewChild=r.first),x(r=E())&&(o.content=r.first)}},hostVars:4,hostBindings:function(n,o){n&2&&(Tt(o.sx("root")),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{iconDisplay:"iconDisplay",styleClass:"styleClass",inputStyle:"inputStyle",inputId:"inputId",inputStyleClass:"inputStyleClass",placeholder:"placeholder",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",iconAriaLabel:"iconAriaLabel",dateFormat:"dateFormat",multipleSeparator:"multipleSeparator",rangeSeparator:"rangeSeparator",inline:[2,"inline","inline",T],showOtherMonths:[2,"showOtherMonths","showOtherMonths",T],selectOtherMonths:[2,"selectOtherMonths","selectOtherMonths",T],showIcon:[2,"showIcon","showIcon",T],icon:"icon",readonlyInput:[2,"readonlyInput","readonlyInput",T],shortYearCutoff:"shortYearCutoff",hourFormat:"hourFormat",timeOnly:[2,"timeOnly","timeOnly",T],stepHour:[2,"stepHour","stepHour",pe],stepMinute:[2,"stepMinute","stepMinute",pe],stepSecond:[2,"stepSecond","stepSecond",pe],showSeconds:[2,"showSeconds","showSeconds",T],showOnFocus:[2,"showOnFocus","showOnFocus",T],showWeek:[2,"showWeek","showWeek",T],startWeekFromFirstDayOfYear:"startWeekFromFirstDayOfYear",showClear:[2,"showClear","showClear",T],dataType:"dataType",selectionMode:"selectionMode",maxDateCount:[2,"maxDateCount","maxDateCount",pe],showButtonBar:[2,"showButtonBar","showButtonBar",T],todayButtonStyleClass:"todayButtonStyleClass",clearButtonStyleClass:"clearButtonStyleClass",autofocus:[2,"autofocus","autofocus",T],autoZIndex:[2,"autoZIndex","autoZIndex",T],baseZIndex:[2,"baseZIndex","baseZIndex",pe],panelStyleClass:"panelStyleClass",panelStyle:"panelStyle",keepInvalid:[2,"keepInvalid","keepInvalid",T],hideOnDateTimeSelect:[2,"hideOnDateTimeSelect","hideOnDateTimeSelect",T],touchUI:[2,"touchUI","touchUI",T],timeSeparator:"timeSeparator",focusTrap:[2,"focusTrap","focusTrap",T],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",tabindex:[2,"tabindex","tabindex",pe],minDate:"minDate",maxDate:"maxDate",disabledDates:"disabledDates",disabledDays:"disabledDays",showTime:"showTime",responsiveOptions:"responsiveOptions",numberOfMonths:"numberOfMonths",firstDayOfWeek:"firstDayOfWeek",view:"view",defaultDate:"defaultDate",appendTo:[1,"appendTo"]},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClose:"onClose",onSelect:"onSelect",onClear:"onClear",onInput:"onInput",onTodayClick:"onTodayClick",onClearClick:"onClearClick",onMonthChange:"onMonthChange",onYearChange:"onYearChange",onClickOutside:"onClickOutside",onShow:"onShow"},features:[re([OS,W_]),R],ngContentSelectors:AE,decls:2,vars:2,consts:[["inputfield",""],["contentWrapper",""],["icon",""],[3,"ngIf"],[3,"ngStyle","class","click",4,"ngIf"],["pInputText","","type","text","role","combobox","aria-autocomplete","none","aria-haspopup","dialog","autocomplete","off",3,"focus","keydown","click","blur","input","pSize","value","ngStyle","pAutoFocus","variant","fluid","invalid"],[4,"ngIf"],["type","button","aria-haspopup","dialog","tabindex","0",3,"class","disabled","click",4,"ngIf"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["type","button","aria-haspopup","dialog","tabindex","0",3,"click","disabled"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","calendar",4,"ngIf"],["data-p-icon","calendar"],["data-p-icon","calendar",3,"class","click",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","calendar",3,"click"],[3,"click","ngStyle"],[3,"class",4,"ngIf"],[3,"class",4,"ngFor","ngForOf"],["rounded","","variant","text","severity","secondary","type","button",3,"keydown","onClick","styleClass","ngStyle","ariaLabel"],["type","button","pRipple","",3,"class","click","keydown",4,"ngIf"],["rounded","","variant","text","severity","secondary",3,"keydown","onClick","styleClass","ngStyle","ariaLabel"],["role","grid",3,"class",4,"ngIf"],["data-p-icon","chevron-left",4,"ngIf"],["data-p-icon","chevron-left"],["type","button","pRipple","",3,"click","keydown"],["data-p-icon","chevron-right",4,"ngIf"],["data-p-icon","chevron-right"],["role","grid"],["scope","col",3,"class",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["scope","col"],["draggable","false","pRipple","",3,"click","keydown","ngClass"],["class","p-hidden-accessible","aria-live","polite",4,"ngIf"],["aria-live","polite",1,"p-hidden-accessible"],["pRipple","",3,"class","click","keydown",4,"ngFor","ngForOf"],["pRipple","",3,"click","keydown"],["rounded","","variant","text","severity","secondary",3,"keydown","keydown.enter","keydown.space","mousedown","mouseup","keyup.enter","keyup.space","mouseleave","styleClass"],[1,"p-datepicker-separator"],["data-p-icon","chevron-up",4,"ngIf"],["data-p-icon","chevron-up"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-down"],["text","","rounded","","severity","secondary",3,"keydown","onClick","keydown.enter","styleClass"],["text","","rounded","","severity","secondary",3,"keydown","click","keydown.enter","styleClass"],["size","small","severity","secondary","variant","text","size","small",3,"keydown","onClick","styleClass","label","ngClass"]],template:function(n,o){n&1&&(rt(FE),_(0,tT,5,26,"ng-template",3)(1,TS,9,19,"div",4)),n&2&&(p("ngIf",!o.inline),f(),p("ngIf",o.inline||o.overlayVisible))},dependencies:[me,rn,Gt,qe,Be,gt,bl,Rn,__,y_,b_,yl,Ho,g_,On,zo,ne],encapsulation:2,data:{animation:[Vr("overlayAnimation",[qu("visibleTouchUI",an({transform:"translate(-50%,-50%)",opacity:1})),Gn("void => visible",[an({opacity:0,transform:"scaleY(0.8)"}),Un("{{showTransitionParams}}",an({opacity:1,transform:"*"}))]),Gn("visible => void",[Un("{{hideTransitionParams}}",an({opacity:0}))]),Gn("void => visibleTouchUI",[an({opacity:0,transform:"translate3d(-50%, -40%, 0) scale(0.9)"}),Un("{{showTransitionParams}}")]),Gn("visibleTouchUI => void",[Un("{{hideTransitionParams}}",an({opacity:0,transform:"translate3d(-50%, -40%, 0) scale(0.9)"}))])])]},changeDetection:0})}return t})(),K_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[q_,ne,ne]})}return t})();var RS=["data-p-icon","filter-fill"],Q_=(()=>{class t extends Q{static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["","data-p-icon","filter-fill"]],features:[R],attrs:RS,decls:1,vars:0,consts:[["d","M13.7274 0.33847C13.6228 0.130941 13.4095 0 13.1764 0H0.82351C0.590451 0 0.377157 0.130941 0.272568 0.33847C0.167157 0.545999 0.187746 0.795529 0.325275 0.98247L4.73527 6.99588V13.3824C4.73527 13.7233 5.01198 14 5.35292 14H8.64704C8.98798 14 9.26469 13.7233 9.26469 13.3824V6.99588L13.6747 0.98247C13.8122 0.795529 13.8328 0.545999 13.7274 0.33847Z","fill","currentColor"]],template:function(n,o){n&1&&(N(),U(0,"path",0))},encapsulation:2})}return t})();var Y_=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon, 
    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var FS=["clearicon"],AS=["incrementbuttonicon"],NS=["decrementbuttonicon"],LS=["input"];function PS(t,i){if(t&1){let e=q();N(),D(0,"svg",7),B("click",function(){b(e);let o=u(2);return v(o.clear())}),C()}if(t&2){let e=u(2);w(e.cx("clearIcon")),k("data-pc-section","clearIcon")}}function VS(t,i){}function BS(t,i){t&1&&_(0,VS,0,0,"ng-template")}function HS(t,i){if(t&1){let e=q();D(0,"span",8),B("click",function(){b(e);let o=u(2);return v(o.clear())}),_(1,BS,1,0,null,9),C()}if(t&2){let e=u(2);w(e.cx("clearIcon")),k("data-pc-section","clearIcon"),f(),p("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function jS(t,i){if(t&1&&(z(0),_(1,PS,1,3,"svg",5)(2,HS,2,4,"span",6),$()),t&2){let e=u();f(),p("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),f(),p("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function zS(t,i){if(t&1&&G(0,"span",12),t&2){let e=u(2);p("ngClass",e.incrementButtonIcon),k("data-pc-section","incrementbuttonicon")}}function $S(t,i){t&1&&(N(),G(0,"svg",14)),t&2&&k("data-pc-section","incrementbuttonicon")}function US(t,i){}function GS(t,i){t&1&&_(0,US,0,0,"ng-template")}function WS(t,i){if(t&1&&(z(0),_(1,$S,1,1,"svg",13)(2,GS,1,0,null,9),$()),t&2){let e=u(2);f(),p("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),f(),p("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function qS(t,i){if(t&1&&G(0,"span",12),t&2){let e=u(2);p("ngClass",e.decrementButtonIcon),k("data-pc-section","decrementbuttonicon")}}function KS(t,i){t&1&&(N(),G(0,"svg",16)),t&2&&k("data-pc-section","decrementbuttonicon")}function QS(t,i){}function YS(t,i){t&1&&_(0,QS,0,0,"ng-template")}function ZS(t,i){if(t&1&&(z(0),_(1,KS,1,1,"svg",15)(2,YS,1,0,null,9),$()),t&2){let e=u(2);f(),p("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),f(),p("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function JS(t,i){if(t&1){let e=q();D(0,"span")(1,"button",10),B("mousedown",function(o){b(e);let r=u();return v(r.onUpButtonMouseDown(o))})("mouseup",function(){b(e);let o=u();return v(o.onUpButtonMouseUp())})("mouseleave",function(){b(e);let o=u();return v(o.onUpButtonMouseLeave())})("keydown",function(o){b(e);let r=u();return v(r.onUpButtonKeyDown(o))})("keyup",function(){b(e);let o=u();return v(o.onUpButtonKeyUp())}),_(2,zS,1,2,"span",11)(3,WS,3,2,"ng-container",2),C(),D(4,"button",10),B("mousedown",function(o){b(e);let r=u();return v(r.onDownButtonMouseDown(o))})("mouseup",function(){b(e);let o=u();return v(o.onDownButtonMouseUp())})("mouseleave",function(){b(e);let o=u();return v(o.onDownButtonMouseLeave())})("keydown",function(o){b(e);let r=u();return v(r.onDownButtonKeyDown(o))})("keyup",function(){b(e);let o=u();return v(o.onDownButtonKeyUp())}),_(5,qS,1,2,"span",11)(6,ZS,3,2,"ng-container",2),C()()}if(t&2){let e=u();w(e.cx("buttonGroup")),k("data-pc-section","buttonGroup"),f(),w(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),k("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),f(),p("ngIf",e.incrementButtonIcon),f(),p("ngIf",!e.incrementButtonIcon),f(),w(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),k("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),f(),p("ngIf",e.decrementButtonIcon),f(),p("ngIf",!e.decrementButtonIcon)}}function XS(t,i){if(t&1&&G(0,"span",12),t&2){let e=u(2);p("ngClass",e.incrementButtonIcon),k("data-pc-section","incrementbuttonicon")}}function e2(t,i){t&1&&(N(),G(0,"svg",14)),t&2&&k("data-pc-section","incrementbuttonicon")}function t2(t,i){}function n2(t,i){t&1&&_(0,t2,0,0,"ng-template")}function i2(t,i){if(t&1&&(z(0),_(1,e2,1,1,"svg",13)(2,n2,1,0,null,9),$()),t&2){let e=u(2);f(),p("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),f(),p("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function o2(t,i){if(t&1){let e=q();D(0,"button",10),B("mousedown",function(o){b(e);let r=u();return v(r.onUpButtonMouseDown(o))})("mouseup",function(){b(e);let o=u();return v(o.onUpButtonMouseUp())})("mouseleave",function(){b(e);let o=u();return v(o.onUpButtonMouseLeave())})("keydown",function(o){b(e);let r=u();return v(r.onUpButtonKeyDown(o))})("keyup",function(){b(e);let o=u();return v(o.onUpButtonKeyUp())}),_(1,XS,1,2,"span",11)(2,i2,3,2,"ng-container",2),C()}if(t&2){let e=u();w(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),k("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),f(),p("ngIf",e.incrementButtonIcon),f(),p("ngIf",!e.incrementButtonIcon)}}function r2(t,i){if(t&1&&G(0,"span",12),t&2){let e=u(2);p("ngClass",e.decrementButtonIcon),k("data-pc-section","decrementbuttonicon")}}function s2(t,i){t&1&&(N(),G(0,"svg",16)),t&2&&k("data-pc-section","decrementbuttonicon")}function a2(t,i){}function l2(t,i){t&1&&_(0,a2,0,0,"ng-template")}function c2(t,i){if(t&1&&(z(0),_(1,s2,1,1,"svg",15)(2,l2,1,0,null,9),$()),t&2){let e=u(2);f(),p("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),f(),p("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function d2(t,i){if(t&1){let e=q();D(0,"button",10),B("mousedown",function(o){b(e);let r=u();return v(r.onDownButtonMouseDown(o))})("mouseup",function(){b(e);let o=u();return v(o.onDownButtonMouseUp())})("mouseleave",function(){b(e);let o=u();return v(o.onDownButtonMouseLeave())})("keydown",function(o){b(e);let r=u();return v(r.onDownButtonKeyDown(o))})("keyup",function(){b(e);let o=u();return v(o.onDownButtonKeyUp())}),_(1,r2,1,2,"span",11)(2,c2,3,2,"ng-container",2),C()}if(t&2){let e=u();w(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),k("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),f(),p("ngIf",e.decrementButtonIcon),f(),p("ngIf",!e.decrementButtonIcon)}}var u2=`
    ${Y_}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,p2={root:({instance:t})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":t.$filled()||t.allowEmpty===!1,"p-inputwrapper-focus":t.focused,"p-inputnumber-stacked":t.showButtons&&t.buttonLayout==="stacked","p-inputnumber-horizontal":t.showButtons&&t.buttonLayout==="horizontal","p-inputnumber-vertical":t.showButtons&&t.buttonLayout==="vertical","p-inputnumber-fluid":t.hasFluid,"p-invalid":t.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:t})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":t.showButtons&&t.max()!=null&&t.maxlength()}],decrementButton:({instance:t})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":t.showButtons&&t.min()!=null&&t.minlength()}],clearIcon:"p-inputnumber-clear-icon"},Z_=(()=>{class t extends le{name="inputnumber";theme=u2;classes=p2;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var f2={provide:yt,useExisting:je(()=>Cl),multi:!0},Cl=(()=>{class t extends jo{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new A;onFocus=new A;onBlur=new A;onKeyDown=new A;onClear=new A;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar;_group;_minusSign;_currency;_prefix;_suffix;_index;_componentStyle=M(Z_);ngControl=null;constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(o=>!!e[o])&&this.updateConstructParser()}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(At,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits??void 0,maximumFractionDigits:this.maxFractionDigits??void 0}}constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());let e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),n=new Map(e.map((o,r)=>[o,r]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=o=>n.get(o)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,ge(H({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let o=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(o=this.prefix+o),this.suffix&&e!=this.suffix&&(o=o+this.suffix),o}return e.toString()}return""}parseValue(e){let n=new RegExp(this._suffix,""),o=new RegExp(this._prefix,""),r=new RegExp(this._currency,""),s=e.replace(n,"").replace(o,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(s){if(s==="-")return s;let a=+s;return isNaN(a)?null:a}return null}repeat(e,n,o){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,o)},r),this.spin(e,o)}spin(e,n){let o=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,s=this.validateValue(r+o);this.maxlength()&&this.maxlength()<this.formatValue(s).length||(this.updateInput(s,null,"spin",null),this.updateModel(e,s),this.handleOnInput(e,r,s))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,o=e.target.selectionEnd,r=e.target.value,s=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let a=n;a<=r.length;a++){let l=a===0?0:a-1;if(this.isNumeralChar(r.charAt(l))){this.input.nativeElement.setSelectionRange(a,a);break}}break;case"ArrowRight":for(let a=o;a>=0;a--)if(this.isNumeralChar(r.charAt(a))){this.input.nativeElement.setSelectionRange(a,a);break}break;case"Tab":case"Enter":s=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(s),this.input.nativeElement.setAttribute("aria-valuenow",s),this.updateModel(e,s);break;case"Backspace":{if(e.preventDefault(),n===o){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let a=r.charAt(n-1),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let d=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,s=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(a))this._decimal.lastIndex=0,d?this.input?.nativeElement.setSelectionRange(n-1,n-1):s=r.slice(0,n-1)+r.slice(n);else if(l>0&&n>l){let h=this.isDecimalMode()&&(this.minFractionDigits||0)<d?"":"0";s=r.slice(0,n-1)+h+r.slice(n)}else c===1?(s=r.slice(0,n-1)+"0"+r.slice(n),s=this.parseValue(s)>0?s:""):s=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&a.search(this._currency)!=-1&&(s=r.slice(1));this.updateValue(e,s,null,"delete-single")}else s=this.deleteRange(r,n,o),this.updateValue(e,s,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===o){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let a=r.charAt(n),{decimalCharIndex:l,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(a)){let d=this.getDecimalLength(r);if(this._group.test(a))this._group.lastIndex=0,s=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(a))this._decimal.lastIndex=0,d?this.input?.nativeElement.setSelectionRange(n+1,n+1):s=r.slice(0,n)+r.slice(n+1);else if(l>0&&n>l){let h=this.isDecimalMode()&&(this.minFractionDigits||0)<d?"":"0";s=r.slice(0,n)+h+r.slice(n+1)}else c===1?(s=r.slice(0,n)+"0"+r.slice(n+1),s=this.parseValue(s)>0?s:""):s=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,s,null,"delete-back-single")}else s=this.deleteRange(r,n,o),this.updateValue(e,s,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,o=String.fromCharCode(n),r=this.isDecimalSign(o),s=this.isMinusSign(o);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,o=this._decimalChar,n=o.charCodeAt(0));let{value:a,selectionStart:l,selectionEnd:c}=this.input.nativeElement,d=this.parseValue(a+o),h=d!=null?d.toString():"",g=a.substring(l,c),m=this.parseValue(g),y=m!=null?m.toString():"";if(l!==c&&y.length>0){this.insert(e,o,{isDecimalSign:r,isMinusSign:s});return}this.maxlength()&&h.length>this.maxlength()||(48<=n&&n<=57||s||r)&&this.insert(e,o,{isDecimalSign:r,isMinusSign:s})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let o=this.parseValue(n);o!=null&&this.insert(e,o.toString())}}}allowMinusSign(){return this.min()==null||this.min()<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let o=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let s=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:o,suffixCharIndex:r,currencyCharIndex:s}}insert(e,n,o={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let s=this.input?.nativeElement.selectionStart,a=this.input?.nativeElement.selectionEnd,l=this.input?.nativeElement.value.trim(),{decimalCharIndex:c,minusCharIndex:d,suffixCharIndex:h,currencyCharIndex:g}=this.getCharIndexes(l),m;if(o.isMinusSign)s===0&&(m=l,(d===-1||a!==0)&&(m=this.insertText(l,n,0,a)),this.updateValue(e,m,n,"insert"));else if(o.isDecimalSign)c>0&&s===c?this.updateValue(e,l,n,"insert"):c>s&&c<a?(m=this.insertText(l,n,s,a),this.updateValue(e,m,n,"insert")):c===-1&&this.maxFractionDigits&&(m=this.insertText(l,n,s,a),this.updateValue(e,m,n,"insert"));else{let y=this.numberFormat.resolvedOptions().maximumFractionDigits,I=s!==a?"range-insert":"insert";if(c>0&&s>c){if(s+n.length-(c+1)<=y){let O=g>=s?g-1:h>=s?h:l.length;m=l.slice(0,s)+n+l.slice(s+n.length,O)+l.slice(O),this.updateValue(e,m,n,I)}}else m=this.insertText(l,n,s,a),this.updateValue(e,m,n,I)}}insertText(e,n,o,r){if((n==="."?n:n.split(".")).length===2){let a=e.slice(o,r).search(this._decimal);return this._decimal.lastIndex=0,a>0?e.slice(0,o)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-o===e.length?this.formatValue(n):o===0?n+e.slice(r):r===e.length?e.slice(0,o)+n:e.slice(0,o)+n+e.slice(r)}deleteRange(e,n,o){let r;return o-n===e.length?r="":n===0?r=e.slice(o):o===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(o),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,o=this.input?.nativeElement.value,r=o.length,s=null,a=(this.prefixChar||"").length;o=o.replace(this._prefix,""),(e===n||e!==0||n<a)&&(e-=a);let l=o.charAt(e);if(this.isNumeralChar(l))return e+a;let c=e-1;for(;c>=0;)if(l=o.charAt(c),this.isNumeralChar(l)){s=c+a;break}else c--;if(s!==null)this.input?.nativeElement.setSelectionRange(s+1,s+1);else{for(c=e;c<r;)if(l=o.charAt(c),this.isNumeralChar(l)){s=c+a;break}else c++;s!==null&&this.input?.nativeElement.setSelectionRange(s,s)}return s||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==A0()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,o,r){let s=this.input?.nativeElement.value,a=null;n!=null&&(a=this.parseValue(n),a=!a&&!this.allowEmpty?0:a,this.updateInput(a,o,r,n),this.handleOnInput(e,s,a))}handleOnInput(e,n,o){this.isValueChanged(n,o)&&(this.input.nativeElement.value=this.formatValue(o),this.input?.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o),this.onInput.emit({originalEvent:e,value:o,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let o=typeof e=="string"?this.parseValue(e):e;return n!==o}return!1}validateValue(e){return e==="-"||e==null?null:this.min()!=null&&e<this.min()?this.min():this.max()!=null&&e>this.max()?this.max():e}updateInput(e,n,o,r){n=n||"";let s=this.input?.nativeElement.value,a=this.formatValue(e),l=s.length;if(a!==r&&(a=this.concatValues(a,r)),l===0){this.input.nativeElement.value=a,this.input.nativeElement.setSelectionRange(0,0);let d=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(d,d)}else{let c=this.input.nativeElement.selectionStart,d=this.input.nativeElement.selectionEnd;if(this.maxlength()&&a.length>this.maxlength()&&(a=a.slice(0,this.maxlength()),c=Math.min(c,this.maxlength()),d=Math.min(d,this.maxlength())),this.maxlength()&&this.maxlength()<a.length)return;this.input.nativeElement.value=a;let h=a.length;if(o==="range-insert"){let g=this.parseValue((s||"").slice(0,c)),y=(g!==null?g.toString():"").split("").join(`(${this.groupChar})?`),I=new RegExp(y,"g");I.test(a);let O=n.split("").join(`(${this.groupChar})?`),P=new RegExp(O,"g");P.test(a.slice(I.lastIndex)),d=I.lastIndex+P.lastIndex,this.input.nativeElement.setSelectionRange(d,d)}else if(h===l)o==="insert"||o==="delete-back-single"?this.input.nativeElement.setSelectionRange(d+1,d+1):o==="delete-single"?this.input.nativeElement.setSelectionRange(d-1,d-1):(o==="delete-range"||o==="spin")&&this.input.nativeElement.setSelectionRange(d,d);else if(o==="delete-back-single"){let g=s.charAt(d-1),m=s.charAt(d),y=l-h,I=this._group.test(m);I&&y===1?d+=1:!I&&this.isNumeralChar(g)&&(d+=-1*y+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(d,d)}else if(s==="-"&&o==="insert"){this.input.nativeElement.setSelectionRange(0,0);let m=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(m,m)}else d=d+(h-l),this.input.nativeElement.setSelectionRange(d,d)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let o=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?o!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(o)+this.suffixChar:e:o!==-1?e.split(this._decimal)[0]+n.slice(o):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),o=n?.toString();this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let o=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,o&&this.focused||this.onModelChange(n)):o&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||t)(K(ht))};static \u0275cmp=L({type:t,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,o,r){if(n&1&&(F(r,FS,4),F(r,AS,4),F(r,NS,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.clearIconTemplate=s.first),x(s=E())&&(o.incrementButtonIconTemplate=s.first),x(s=E())&&(o.decrementButtonIconTemplate=s.first),x(s=E())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&Ce(LS,5),n&2){let r;x(r=E())&&(o.input=r.first)}},hostVars:4,hostBindings:function(n,o){n&2&&(k("data-pc-name","inputnumber")("data-pc-section","root"),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",T],format:[2,"format","format",T],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",pe],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",T],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",T],allowEmpty:[2,"allowEmpty","allowEmpty",T],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",T],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>pe(e,null)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>pe(e,null)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",T],autofocus:[2,"autofocus","autofocus",T]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[re([f2,Z_]),R,Ye],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pAutoFocus","fluid"],[4,"ngIf"],[3,"class",4,"ngIf"],["type","button","tabindex","-1",3,"class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","angle-up",4,"ngIf"],["data-p-icon","angle-up"],["data-p-icon","angle-down",4,"ngIf"],["data-p-icon","angle-down"]],template:function(n,o){if(n&1){let r=q();D(0,"input",1,0),B("input",function(a){return b(r),v(o.onUserInput(a))})("keydown",function(a){return b(r),v(o.onInputKeyDown(a))})("keypress",function(a){return b(r),v(o.onInputKeyPress(a))})("paste",function(a){return b(r),v(o.onPaste(a))})("click",function(){return b(r),v(o.onInputClick())})("focus",function(a){return b(r),v(o.onInputFocus(a))})("blur",function(a){return b(r),v(o.onInputBlur(a))}),C(),_(2,jS,3,2,"ng-container",2)(3,JS,7,17,"span",3)(4,o2,3,7,"button",4)(5,d2,3,7,"button",4)}n&2&&(w(o.cn(o.cx("pcInputText"),o.inputStyleClass)),p("value",o.formattedValue())("ngStyle",o.inputStyle)("variant",o.$variant())("invalid",o.invalid())("pSize",o.size())("pAutoFocus",o.autofocus)("fluid",o.hasFluid),k("id",o.inputId)("aria-valuemin",o.min())("aria-valuemax",o.max())("aria-valuenow",o.value)("placeholder",o.placeholder)("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledBy)("aria-describedby",o.ariaDescribedBy)("title",o.title)("size",o.inputSize())("name",o.name())("autocomplete",o.autocomplete)("maxlength",o.maxlength())("minlength",o.minlength())("tabindex",o.tabindex)("aria-required",o.ariaRequired)("min",o.min())("max",o.max())("step",o.step()??1)("required",o.required()?"":void 0)("readonly",o.readonly?"":void 0)("disabled",o.$disabled()?"":void 0)("data-pc-section","input"),f(2),p("ngIf",o.buttonLayout!="vertical"&&o.showClear&&o.value),f(),p("ngIf",o.showButtons&&o.buttonLayout==="stacked"),f(),p("ngIf",o.showButtons&&o.buttonLayout!=="stacked"),f(),p("ngIf",o.showButtons&&o.buttonLayout!=="stacked"))},dependencies:[me,rn,qe,Be,gt,zo,On,Ho,h_,u_,ne],encapsulation:2,changeDetection:0})}return t})(),J_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[Cl,ne,ne]})}return t})();var X_=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var h2=["*"],m2={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},ey=(()=>{class t extends le{name="iconfield";theme=X_;classes=m2;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var ty=(()=>{class t extends ke{iconPosition="left";styleClass;_componentStyle=M(ey);static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,o){n&2&&w(o.cn(o.cx("root"),o.styleClass))},inputs:{iconPosition:"iconPosition",styleClass:"styleClass"},features:[re([ey]),R],ngContentSelectors:h2,decls:1,vars:0,template:function(n,o){n&1&&(rt(),et(0))},dependencies:[me],encapsulation:2,changeDetection:0})}return t})();var g2=["*"],_2={root:"p-inputicon"},ny=(()=>{class t extends le{name="inputicon";classes=_2;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),iy=(()=>{class t extends ke{styleClass;_componentStyle=M(ny);static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,o){n&2&&w(o.cn(o.cx("root"),o.styleClass))},inputs:{styleClass:"styleClass"},features:[re([ny]),R],ngContentSelectors:g2,decls:1,vars:0,template:function(n,o){n&1&&(rt(),et(0))},dependencies:[me,ne],encapsulation:2,changeDetection:0})}return t})();var oy=["content"],y2=["overlay"],b2=["*"],v2=(t,i,e,n,o,r,s,a,l,c,d,h,g,m)=>({"p-overlay p-component":!0,"p-overlay-modal p-overlay-mask p-overlay-mask-enter":t,"p-overlay-center":i,"p-overlay-top":e,"p-overlay-top-start":n,"p-overlay-top-end":o,"p-overlay-bottom":r,"p-overlay-bottom-start":s,"p-overlay-bottom-end":a,"p-overlay-left":l,"p-overlay-left-start":c,"p-overlay-left-end":d,"p-overlay-right":h,"p-overlay-right-start":g,"p-overlay-right-end":m}),C2=(t,i,e)=>({showTransitionParams:t,hideTransitionParams:i,transform:e}),w2=t=>({value:"visible",params:t}),D2=t=>({mode:t}),I2=t=>({$implicit:t});function x2(t,i){t&1&&j(0)}function E2(t,i){if(t&1){let e=q();D(0,"div",3,1),B("click",function(o){b(e);let r=u(2);return v(r.onOverlayContentClick(o))})("@overlayContentAnimation.start",function(o){b(e);let r=u(2);return v(r.onOverlayContentAnimationStart(o))})("@overlayContentAnimation.done",function(o){b(e);let r=u(2);return v(r.onOverlayContentAnimationDone(o))}),et(2),_(3,x2,1,0,"ng-container",4),C()}if(t&2){let e=u(2);w(e.contentStyleClass),p("ngStyle",e.contentStyle)("ngClass","p-overlay-content")("@overlayContentAnimation",te(11,w2,yu(7,C2,e.showTransitionOptions,e.hideTransitionOptions,e.transformOptions[e.modal?e.overlayResponsiveDirection:"default"]))),f(3),p("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",te(15,I2,te(13,D2,e.overlayMode)))}}function T2(t,i){if(t&1){let e=q();D(0,"div",3,0),B("click",function(){b(e);let o=u();return v(o.onOverlayClick())}),_(2,E2,4,17,"div",2),C()}if(t&2){let e=u();w(e.styleClass),p("ngStyle",e.style)("ngClass",Wa(5,v2,[e.modal,e.modal&&e.overlayResponsiveDirection==="center",e.modal&&e.overlayResponsiveDirection==="top",e.modal&&e.overlayResponsiveDirection==="top-start",e.modal&&e.overlayResponsiveDirection==="top-end",e.modal&&e.overlayResponsiveDirection==="bottom",e.modal&&e.overlayResponsiveDirection==="bottom-start",e.modal&&e.overlayResponsiveDirection==="bottom-end",e.modal&&e.overlayResponsiveDirection==="left",e.modal&&e.overlayResponsiveDirection==="left-start",e.modal&&e.overlayResponsiveDirection==="left-end",e.modal&&e.overlayResponsiveDirection==="right",e.modal&&e.overlayResponsiveDirection==="right-start",e.modal&&e.overlayResponsiveDirection==="right-end"])),f(2),p("ngIf",e.visible)}}var S2=`
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`,ry=(()=>{class t extends le{name="overlay";theme=S2;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),M2=tl([an({transform:"{{transform}}",opacity:0}),Un("{{showTransitionParams}}")]),k2=tl([Un("{{hideTransitionParams}}",an({transform:"{{transform}}",opacity:0}))]),sy=(()=>{class t extends ke{overlayService;zone;get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return se.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return se.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return se.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return se.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=X(void 0);visibleChange=new A;onBeforeShow=new A;onShow=new A;onBeforeHide=new A;onHide=new A;onAnimationStart=new A;onAnimationDone=new A;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=X();$appendTo=Me(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=M(ry);documentKeyboardListener;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(_t(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return H(H({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return H(H({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return np(this.target,this.el?.nativeElement)}constructor(e,n){super(),this.overlayService=e,this.zone=n}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}show(e,n=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&cn(this.targetEl),this.modal&&ln(this.document?.body,"p-overflow-hidden")}hide(e,n=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&cn(this.targetEl),this.modal&&En(this.document?.body,"p-overflow-hidden");else return}alignOverlay(){!this.modal&&ie.alignOverlay(this.overlayEl,this.targetEl,this.$appendTo())}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}onOverlayContentAnimationStart(e){switch(e.toState){case"visible":this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.autoZIndex&&Ot.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode]),this.hostAttrSelector()&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),ie.appendOverlay(this.overlayEl,this.$appendTo()==="body"?this.document.body:this.$appendTo(),this.$appendTo()),this.alignOverlay();break;case"void":this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.modal&&ln(this.overlayEl,"p-overlay-mask-leave");break}this.handleEvents("onAnimationStart",e)}onOverlayContentAnimationDone(e){let n=this.overlayEl||e.element.parentElement;switch(e.toState){case"visible":this.visible&&(this.show(n,!0),this.bindListeners());break;case"void":if(!this.visible){this.hide(n,!0),this.modalVisible=!1,this.unbindListeners(),ie.appendOverlay(this.overlayEl,this.targetEl,this.$appendTo()),Ot.clear(n),this.cd.markForCheck();break}}this.handleEvents("onAnimationDone",e)}handleEvents(e,n){this[e].emit(n),this.options&&this.options[e]&&this.options[e](n),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](n)}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener()}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Yn(this.targetEl,e=>{(this.listener?this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}):!0)&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let o=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&o}):o)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!Wn()}):!Wn())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!Wn()}):!Wn())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}ngOnDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),Ot.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)(K(Ao),K(we))};static \u0275cmp=L({type:t,selectors:[["p-overlay"]],contentQueries:function(n,o,r){if(n&1&&(F(r,oy,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.contentTemplate=s.first),x(s=E())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&(Ce(y2,5),Ce(oy,5)),n&2){let r;x(r=E())&&(o.overlayViewChild=r.first),x(r=E())&&(o.contentViewChild=r.first)}},inputs:{visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone"},features:[re([ry]),R],ngContentSelectors:b2,decls:1,vars:1,consts:[["overlay",""],["content",""],[3,"ngStyle","class","ngClass","click",4,"ngIf"],[3,"click","ngStyle","ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&(rt(),_(0,T2,3,20,"div",2)),n&2&&p("ngIf",o.modalVisible)},dependencies:[me,rn,qe,Be,gt,ne],encapsulation:2,data:{animation:[Vr("overlayContentAnimation",[Gn(":enter",[nl(M2)]),Gn(":leave",[nl(k2)])])]},changeDetection:0})}return t})();var ay=["content"],O2=["item"],R2=["loader"],F2=["loadericon"],A2=["element"],N2=["*"],_p=(t,i)=>({$implicit:t,options:i}),L2=t=>({numCols:t}),cy=t=>({options:t}),P2=()=>({styleClass:"p-virtualscroller-loading-icon"}),V2=(t,i)=>({rows:t,columns:i});function B2(t,i){t&1&&j(0)}function H2(t,i){if(t&1&&(z(0),_(1,B2,1,0,"ng-container",10),$()),t&2){let e=u(2);f(),p("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",We(2,_p,e.loadedItems,e.getContentOptions()))}}function j2(t,i){t&1&&j(0)}function z2(t,i){if(t&1&&(z(0),_(1,j2,1,0,"ng-container",10),$()),t&2){let e=i.$implicit,n=i.index,o=u(3);f(),p("ngTemplateOutlet",o.itemTemplate||o._itemTemplate)("ngTemplateOutletContext",We(2,_p,e,o.getOptions(n)))}}function $2(t,i){if(t&1&&(D(0,"div",null,3),_(2,z2,2,5,"ng-container",11),C()),t&2){let e=u(2);Tt(e.contentStyle),w(e.cn(e.cx("content"),e.contentStyleClass)),k("data-pc-section","content"),f(2),p("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function U2(t,i){if(t&1&&G(0,"div",12),t&2){let e=u(2);w(e.cx("spacer")),p("ngStyle",e.spacerStyle),k("data-pc-section","spacer")}}function G2(t,i){t&1&&j(0)}function W2(t,i){if(t&1&&(z(0),_(1,G2,1,0,"ng-container",10),$()),t&2){let e=i.index,n=u(4);f(),p("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",te(4,cy,n.getLoaderOptions(e,n.both&&te(2,L2,n.numItemsInViewport.cols))))}}function q2(t,i){if(t&1&&(z(0),_(1,W2,2,6,"ng-container",13),$()),t&2){let e=u(3);f(),p("ngForOf",e.loaderArr)}}function K2(t,i){t&1&&j(0)}function Q2(t,i){if(t&1&&(z(0),_(1,K2,1,0,"ng-container",10),$()),t&2){let e=u(4);f(),p("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",te(3,cy,Sr(2,P2)))}}function Y2(t,i){if(t&1&&(N(),G(0,"svg",14)),t&2){let e=u(4);w(e.cx("loadingIcon")),p("spin",!0),k("data-pc-section","loadingIcon")}}function Z2(t,i){if(t&1&&_(0,Q2,2,5,"ng-container",6)(1,Y2,1,4,"ng-template",null,5,Se),t&2){let e=ct(2),n=u(3);p("ngIf",n.loaderIconTemplate||n._loaderIconTemplate)("ngIfElse",e)}}function J2(t,i){if(t&1&&(D(0,"div"),_(1,q2,2,1,"ng-container",6)(2,Z2,3,2,"ng-template",null,4,Se),C()),t&2){let e=ct(3),n=u(2);w(n.cx("loader")),k("data-pc-section","loader"),f(),p("ngIf",n.loaderTemplate||n._loaderTemplate)("ngIfElse",e)}}function X2(t,i){if(t&1){let e=q();z(0),D(1,"div",7,1),B("scroll",function(o){b(e);let r=u();return v(r.onContainerScroll(o))}),_(3,H2,2,5,"ng-container",6)(4,$2,3,7,"ng-template",null,2,Se)(6,U2,1,4,"div",8)(7,J2,4,5,"div",9),C(),$()}if(t&2){let e=ct(5),n=u();f(),w(n.cn(n.cx("root"),n.styleClass)),p("ngStyle",n._style),k("id",n._id)("tabindex",n.tabindex)("data-pc-name","scroller")("data-pc-section","root"),f(2),p("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),f(3),p("ngIf",n._showSpacer),f(),p("ngIf",!n.loaderDisabled&&n._showLoader&&n.d_loading)}}function eM(t,i){t&1&&j(0)}function tM(t,i){if(t&1&&(z(0),_(1,eM,1,0,"ng-container",10),$()),t&2){let e=u(2);f(),p("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",We(5,_p,e.items,We(2,V2,e._items,e.loadedColumns)))}}function nM(t,i){if(t&1&&(et(0),_(1,tM,2,8,"ng-container",15)),t&2){let e=u();f(),p("ngIf",e.contentTemplate||e._contentTemplate)}}var iM=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,oM={root:({instance:t})=>["p-virtualscroller",{"p-virtualscroller-inline":t.inline,"p-virtualscroller-both p-both-scroll":t.both,"p-virtualscroller-horizontal p-horizontal-scroll":t.horizontal}],content:"p-virtualscroller-content",spacer:"p-virtualscroller-spacer",loader:({instance:t})=>["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!t.loaderTemplate}],loadingIcon:"p-virtualscroller-loading-icon"},ly=(()=>{class t extends le{name="virtualscroller";theme=iM;classes=oM;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Zr=(()=>{class t extends ke{zone;get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o)),Object.entries(e).forEach(([n,o])=>this[`${n}`]!==o&&(this[`${n}`]=o)))}onLazyLoad=new A;onScroll=new A;onScrollIndexChange=new A;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:e.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=M(ly);constructor(e){super(),this.zone=e}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(e){super.ngOnChanges(e);let n=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:o,currentValue:r}=e.loading;this.lazy&&o!==r&&r!==this.d_loading&&(this.d_loading=r,n=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:o,currentValue:r}=e.numToleratedItems;o!==r&&r!==this.d_numToleratedItems&&(this.d_numToleratedItems=r)}if(e.options){let{previousValue:o,currentValue:r}=e.options;this.lazy&&o?.loading!==r?.loading&&r?.loading!==this.d_loading&&(this.d_loading=r.loading,n=!0),o?.numToleratedItems!==r?.numToleratedItems&&r?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=r.numToleratedItems)}this.initialized&&!n&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){_t(this.platformId)&&!this.initialized&&op(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=Mn(this.elementViewChild?.nativeElement),this.defaultHeight=Sn(this.elementViewChild?.nativeElement),this.defaultContentWidth=Mn(this.contentEl),this.defaultContentHeight=Sn(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||Oe(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,n="auto"){if(this.both?e.every(r=>r>-1):e>-1){let r=this.first,{scrollTop:s=0,scrollLeft:a=0}=this.elementViewChild?.nativeElement,{numToleratedItems:l}=this.calculateNumItems(),c=this.getContentPosition(),d=this.itemSize,h=(P=0,Z)=>P<=Z?0:P,g=(P,Z,_e)=>P*Z+_e,m=(P=0,Z=0)=>this.scrollTo({left:P,top:Z,behavior:n}),y=this.both?{rows:0,cols:0}:0,I=!1,O=!1;this.both?(y={rows:h(e[0],l[0]),cols:h(e[1],l[1])},m(g(y.cols,d[1],c.left),g(y.rows,d[0],c.top)),O=this.lastScrollPos.top!==s||this.lastScrollPos.left!==a,I=y.rows!==r.rows||y.cols!==r.cols):(y=h(e,l),this.horizontal?m(g(y,d,c.left),s):m(a,g(y,d,c.top)),O=this.lastScrollPos!==(this.horizontal?a:s),I=y!==r),this.isRangeChanged=I,O&&(this.first=y)}}scrollInView(e,n,o="auto"){if(n){let{first:r,viewport:s}=this.getRenderedRange(),a=(d=0,h=0)=>this.scrollTo({left:d,top:h,behavior:o}),l=n==="to-start",c=n==="to-end";if(l){if(this.both)s.first.rows-r.rows>e[0]?a(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-r.cols>e[1]&&a((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-r>e){let d=(s.first-1)*this._itemSize;this.horizontal?a(d,0):a(0,d)}}else if(c){if(this.both)s.last.rows-r.rows<=e[0]+1?a(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-r.cols<=e[1]+1&&a((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-r<=e+1){let d=(s.first+1)*this._itemSize;this.horizontal?a(d,0):a(0,d)}}}else this.scrollToIndex(e,o)}getRenderedRange(){let e=(r,s)=>s||r?Math.floor(r/(s||r)):0,n=this.first,o=0;if(this.elementViewChild?.nativeElement){let{scrollTop:r,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)n={rows:e(r,this._itemSize[0]),cols:e(s,this._itemSize[1])},o={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{let a=this.horizontal?s:r;n=e(a,this._itemSize),o=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:o}}}calculateNumItems(){let e=this.getContentPosition(),n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,o=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,r=(c,d)=>d||c?Math.ceil(c/(d||c)):0,s=c=>Math.ceil(c/2),a=this.both?{rows:r(o,this._itemSize[0]),cols:r(n,this._itemSize[1])}:r(this.horizontal?n:o,this._itemSize),l=this.d_numToleratedItems||(this.both?[s(a.rows),s(a.cols)]:s(a));return{numItemsInViewport:a,numToleratedItems:l}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:n}=this.calculateNumItems(),o=(a,l,c,d=!1)=>this.getLast(a+l+(a<c?2:3)*c,d),r=this.first,s=this.both?{rows:o(this.first.rows,e.rows,n[0]),cols:o(this.first.cols,e.cols,n[1],!0)}:o(this.first,e,n);this.last=s,this.numItemsInViewport=e,this.d_numToleratedItems=n,this.showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:r.cols}:0:r,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,n]=[Mn(this.contentEl),Sn(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),n!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[o,r]=[Mn(this.elementViewChild.nativeElement),Sn(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=o<this.defaultWidth?o+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=r<this.defaultHeight?r+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,n=!1){return this._items?Math.min(n?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),o=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),r=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),s=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:o,top:r,bottom:s,x:n+o,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement.parentElement.parentElement,n=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||e.offsetWidth}px`,o=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||e.offsetHeight}px`,r=(s,a)=>this.elementViewChild.nativeElement.style[s]=a;this.both||this.horizontal?(r("height",o),r("width",n)):r("height",o)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),n=(o,r,s,a=0)=>this.spacerStyle=ge(H({},this.spacerStyle),{[`${o}`]:(r||[]).length*s+a+"px"});this.both?(n("height",this._items,this._itemSize[0],e.y),n("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?n("width",this._columns||this._items,this._itemSize,e.x):n("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let n=e?e.first:this.first,o=(s,a)=>s*a,r=(s=0,a=0)=>this.contentStyle=ge(H({},this.contentStyle),{transform:`translate3d(${s}px, ${a}px, 0)`});if(this.both)r(o(n.cols,this._itemSize[1]),o(n.rows,this._itemSize[0]));else{let s=o(n,this._itemSize);this.horizontal?r(s,0):r(0,s)}}}onScrollPositionChange(e){let n=e.target,o=this.getContentPosition(),r=(O,P)=>O?O>P?O-P:O:0,s=(O,P)=>P||O?Math.floor(O/(P||O)):0,a=(O,P,Z,_e,$e,lt)=>O<=$e?$e:lt?Z-_e-$e:P+$e-1,l=(O,P,Z,_e,$e,lt,vt)=>O<=lt?0:Math.max(0,vt?O<P?Z:O-lt:O>P?Z:O-2*lt),c=(O,P,Z,_e,$e,lt=!1)=>{let vt=P+_e+2*$e;return O>=$e&&(vt+=$e+1),this.getLast(vt,lt)},d=r(n.scrollTop,o.top),h=r(n.scrollLeft,o.left),g=this.both?{rows:0,cols:0}:0,m=this.last,y=!1,I=this.lastScrollPos;if(this.both){let O=this.lastScrollPos.top<=d,P=this.lastScrollPos.left<=h;if(!this._appendOnly||this._appendOnly&&(O||P)){let Z={rows:s(d,this._itemSize[0]),cols:s(h,this._itemSize[1])},_e={rows:a(Z.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],O),cols:a(Z.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],P)};g={rows:l(Z.rows,_e.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],O),cols:l(Z.cols,_e.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],P)},m={rows:c(Z.rows,g.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:c(Z.cols,g.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},y=g.rows!==this.first.rows||m.rows!==this.last.rows||g.cols!==this.first.cols||m.cols!==this.last.cols||this.isRangeChanged,I={top:d,left:h}}}else{let O=this.horizontal?h:d,P=this.lastScrollPos<=O;if(!this._appendOnly||this._appendOnly&&P){let Z=s(O,this._itemSize),_e=a(Z,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,P);g=l(Z,_e,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,P),m=c(Z,g,this.last,this.numItemsInViewport,this.d_numToleratedItems),y=g!==this.first||m!==this.last||this.isRangeChanged,I=O}}return{first:g,last:m,isRangeChanged:y,scrollPos:I}}onScrollChange(e){let{first:n,last:o,isRangeChanged:r,scrollPos:s}=this.onScrollPositionChange(e);if(r){let a={first:n,last:o};if(this.setContentPosition(a),this.first=n,this.last=o,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",a),this._lazy&&this.isPageChanged(n)){let l={first:this._step?Math.min(this.getPageByFirst(n)*this._step,this.items.length-this._step):n,last:Math.min(this._step?(this.getPageByFirst(n)+1)*this._step:o,this.items.length)};(this.lazyLoadState.first!==l.first||this.lazyLoadState.last!==l.last)&&this.handleEvents("onLazyLoad",l),this.lazyLoadState=l}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:n}=this.onScrollPositionChange(e);(n||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){_t(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,n=Wn()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,n,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(op(this.elementViewChild?.nativeElement)){let[e,n]=[Mn(this.elementViewChild?.nativeElement),Sn(this.elementViewChild?.nativeElement)],[o,r]=[e!==this.defaultWidth,n!==this.defaultHeight];(this.both?o||r:this.horizontal?o:this.vertical?r:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=n,this.defaultContentWidth=Mn(this.contentEl),this.defaultContentHeight=Sn(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,n){return this.options&&this.options[e]?this.options[e](n):this[e].emit(n)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,n)=>this.getLoaderOptions(e,n),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(e){let n=(this._items||[]).length,o=this.both?this.first.rows+e:this.first+e;return{index:o,count:n,first:o===0,last:o===n-1,even:o%2===0,odd:o%2!==0}}getLoaderOptions(e,n){let o=this.loaderArr.length;return H({index:e,count:o,first:e===0,last:e===o-1,even:e%2===0,odd:e%2!==0},n)}static \u0275fac=function(n){return new(n||t)(K(we))};static \u0275cmp=L({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(n,o,r){if(n&1&&(F(r,ay,4),F(r,O2,4),F(r,R2,4),F(r,F2,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.contentTemplate=s.first),x(s=E())&&(o.itemTemplate=s.first),x(s=E())&&(o.loaderTemplate=s.first),x(s=E())&&(o.loaderIconTemplate=s.first),x(s=E())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&(Ce(A2,5),Ce(ay,5)),n&2){let r;x(r=E())&&(o.elementViewChild=r.first),x(r=E())&&(o.contentViewChild=r.first)}},hostVars:2,hostBindings:function(n,o){n&2&&St("height",o.height)},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[re([ly]),R,Ye],ngContentSelectors:N2,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle"],[3,"class","ngStyle",4,"ngIf"],[3,"class",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngStyle"],[4,"ngFor","ngForOf"],["data-p-icon","spinner",3,"spin"],[4,"ngIf"]],template:function(n,o){if(n&1&&(rt(),_(0,X2,8,11,"ng-container",6)(1,nM,2,1,"ng-template",null,0,Se)),n&2){let r=ct(2);p("ngIf",!o._disabled)("ngIfElse",r)}},dependencies:[me,Gt,qe,Be,gt,zi,ne],encapsulation:2})}return t})(),yp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[Zr,ne,ne]})}return t})();var dy=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var sM={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},uy=(()=>{class t extends le{name="tooltip";theme=dy;classes=sM;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var py=(()=>{class t extends ke{zone;viewContainer;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=X(void 0);$appendTo=Me(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Ee("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=M(uy);interactionInProgress=!1;constructor(e,n){super(),this.zone=e,this.viewContainer=n}ngAfterViewInit(){super.ngAfterViewInit(),_t(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}ngOnChanges(e){super.ngOnChanges(e),e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=H(H({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(at(e.relatedTarget,"p-tooltip")||at(e.relatedTarget,"p-tooltip-text")||at(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",e.setAttribute("data-pc-section","arrow"),this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?Wr(this.container,this.el.nativeElement):Wr(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),k0(this.container,250),this.getOption("tooltipZIndex")==="auto"?Ot.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Ot.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof $t){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),n={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]};for(let[o,r]of n[e].entries())if(o===0)r.call(this);else if(this.isOutOfBounds())r.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+ep(),o=e.top+tp();return{left:n,top:o}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Oe(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=dt(e),o=(dn(e)-dn(this.container))/2;this.alignTooltip(n,o);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=dt(this.container),o=(dn(this.el.nativeElement)-dn(this.container))/2;this.alignTooltip(-n,o),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),o=dt(this.container),r=(dt(this.el.nativeElement)-dt(this.container))/2,s=dn(this.container);this.alignTooltip(r,-s);let a=n.left-this.getHostOffset().left+o/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=a+"px"}getArrowElement(){return Oe(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=dt(this.container),o=this.getHostOffset(),r=(dt(this.el.nativeElement)-dt(this.container))/2,s=dn(this.el.nativeElement);this.alignTooltip(r,s);let a=o.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=a+"px"}alignTooltip(e,n){let o=this.getHostOffset(),r=o.left+e,s=o.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=H(H({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return at(e,"p-inputwrapper")?Oe(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let n="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?n+" "+this.getOption("tooltipStyleClass"):n}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,o=e.left,r=dt(this.container),s=dn(this.container),a=cl();return o+r>a.width||o<0||n<0||n+s>a.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Yn(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):L0(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),super.ngOnDestroy(),this.container&&Ot.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(K(we),K(In))};static \u0275dir=ve({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",T],showDelay:[2,"showDelay","showDelay",pe],hideDelay:[2,"hideDelay","hideDelay",pe],life:[2,"life","life",pe],positionTop:[2,"positionTop","positionTop",pe],positionLeft:[2,"positionLeft","positionLeft",pe],autoHide:[2,"autoHide","autoHide",T],fitContent:[2,"fitContent","fitContent",T],hideOnEscape:[2,"hideOnEscape","hideOnEscape",T],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"]},features:[re([uy]),R,Ye]})}return t})();var fy=`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select:has(.p-select-clear-icon) .p-select-label {
        padding-inline-end: calc(1rem + dt('select.padding.x'));
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }

    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }
`;var Jr=t=>({height:t}),bp=t=>({$implicit:t});function aM(t,i){if(t&1&&(N(),G(0,"svg",5)),t&2){let e=u(2);w(e.cx("optionCheckIcon"))}}function lM(t,i){if(t&1&&(N(),G(0,"svg",6)),t&2){let e=u(2);w(e.cx("optionBlankIcon"))}}function cM(t,i){if(t&1&&(z(0),_(1,aM,1,2,"svg",3)(2,lM,1,2,"svg",4),$()),t&2){let e=u();f(),p("ngIf",e.selected),f(),p("ngIf",!e.selected)}}function dM(t,i){if(t&1&&(D(0,"span"),ee(1),C()),t&2){let e=u();f(),xe(e.label??"empty")}}function uM(t,i){t&1&&j(0)}var pM=["item"],fM=["group"],hM=["loader"],mM=["selectedItem"],gM=["header"],hy=["filter"],_M=["footer"],yM=["emptyfilter"],bM=["empty"],vM=["dropdownicon"],CM=["loadingicon"],wM=["clearicon"],DM=["filtericon"],IM=["onicon"],xM=["officon"],EM=["cancelicon"],TM=["focusInput"],SM=["editableInput"],MM=["items"],kM=["scroller"],OM=["overlay"],RM=["firstHiddenFocusableEl"],FM=["lastHiddenFocusableEl"],my=t=>({class:t}),gy=t=>({options:t}),_y=(t,i)=>({$implicit:t,options:i}),AM=()=>({});function NM(t,i){if(t&1&&(z(0),ee(1),$()),t&2){let e=u(2);f(),xe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function LM(t,i){if(t&1&&j(0,24),t&2){let e=u(2);p("ngTemplateOutlet",e.selectedItemTemplate||e._selectedItemTemplate)("ngTemplateOutletContext",te(2,bp,e.selectedOption))}}function PM(t,i){if(t&1&&(D(0,"span"),ee(1),C()),t&2){let e=u(3);f(),xe(e.label()==="p-emptylabel"?"\xA0":e.label())}}function VM(t,i){if(t&1&&_(0,PM,2,1,"span",18),t&2){let e=u(2);p("ngIf",e.isSelectedOptionEmpty())}}function BM(t,i){if(t&1){let e=q();D(0,"span",22,3),B("focus",function(o){b(e);let r=u();return v(r.onInputFocus(o))})("blur",function(o){b(e);let r=u();return v(r.onInputBlur(o))})("keydown",function(o){b(e);let r=u();return v(r.onKeyDown(o))}),_(2,NM,2,1,"ng-container",20)(3,LM,1,4,"ng-container",23)(4,VM,1,1,"ng-template",null,4,Se),C()}if(t&2){let e=ct(5),n=u();w(n.cx("label")),p("pTooltip",n.tooltip)("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),k("aria-disabled",n.$disabled())("id",n.inputId)("aria-label",n.ariaLabel||(n.label()==="p-emptylabel"?void 0:n.label()))("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",n.overlayVisible??!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.$disabled()?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-required",n.required())("required",n.required()?"":void 0)("disabled",n.$disabled()?"":void 0),f(2),p("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate)("ngIfElse",e),f(),p("ngIf",(n.selectedItemTemplate||n._selectedItemTemplate)&&!n.isSelectedOptionEmpty())}}function HM(t,i){if(t&1){let e=q();D(0,"input",25,5),B("input",function(o){b(e);let r=u();return v(r.onEditableInput(o))})("keydown",function(o){b(e);let r=u();return v(r.onKeyDown(o))})("focus",function(o){b(e);let r=u();return v(r.onInputFocus(o))})("blur",function(o){b(e);let r=u();return v(r.onInputBlur(o))}),C()}if(t&2){let e=u();w(e.cx("label")),p("pAutoFocus",e.autofocus),k("id",e.inputId)("aria-haspopup","listbox")("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)}}function jM(t,i){if(t&1){let e=q();N(),D(0,"svg",28),B("click",function(o){b(e);let r=u(2);return v(r.clear(o))}),C()}if(t&2){let e=u(2);w(e.cx("clearIcon")),k("data-pc-section","clearicon")}}function zM(t,i){}function $M(t,i){t&1&&_(0,zM,0,0,"ng-template")}function UM(t,i){if(t&1){let e=q();D(0,"span",29),B("click",function(o){b(e);let r=u(2);return v(r.clear(o))}),_(1,$M,1,0,null,30),C()}if(t&2){let e=u(2);w(e.cx("clearIcon")),k("data-pc-section","clearicon"),f(),p("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)("ngTemplateOutletContext",te(5,my,e.cx("clearIcon")))}}function GM(t,i){if(t&1&&(z(0),_(1,jM,1,3,"svg",26)(2,UM,2,7,"span",27),$()),t&2){let e=u();f(),p("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),f(),p("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function WM(t,i){t&1&&j(0)}function qM(t,i){if(t&1&&(z(0),_(1,WM,1,0,"ng-container",31),$()),t&2){let e=u(2);f(),p("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function KM(t,i){if(t&1&&G(0,"span",33),t&2){let e=u(3);w(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon))}}function QM(t,i){if(t&1&&G(0,"span",33),t&2){let e=u(3);w(e.cn(e.cx("loadingIcon"),"pi pi-spinner pi-spin"))}}function YM(t,i){if(t&1&&(z(0),_(1,KM,1,2,"span",32)(2,QM,1,2,"span",32),$()),t&2){let e=u(2);f(),p("ngIf",e.loadingIcon),f(),p("ngIf",!e.loadingIcon)}}function ZM(t,i){if(t&1&&(z(0),_(1,qM,2,1,"ng-container",18)(2,YM,3,2,"ng-container",18),$()),t&2){let e=u();f(),p("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),f(),p("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function JM(t,i){if(t&1&&G(0,"span"),t&2){let e=u(3);w(e.cn(e.cx("dropdownIcon"),e.dropdownIcon))}}function XM(t,i){if(t&1&&(N(),G(0,"svg",36)),t&2){let e=u(3);w(e.cx("dropdownIcon"))}}function ek(t,i){if(t&1&&(z(0),_(1,JM,1,2,"span",34)(2,XM,1,2,"svg",35),$()),t&2){let e=u(2);f(),p("ngIf",e.dropdownIcon),f(),p("ngIf",!e.dropdownIcon)}}function tk(t,i){}function nk(t,i){t&1&&_(0,tk,0,0,"ng-template")}function ik(t,i){if(t&1&&(D(0,"span"),_(1,nk,1,0,null,30),C()),t&2){let e=u(2);w(e.cx("dropdownIcon")),f(),p("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)("ngTemplateOutletContext",te(4,my,e.cx("dropdownIcon")))}}function ok(t,i){if(t&1&&_(0,ek,3,2,"ng-container",18)(1,ik,2,6,"span",34),t&2){let e=u();p("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),f(),p("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function rk(t,i){t&1&&j(0)}function sk(t,i){t&1&&j(0)}function ak(t,i){if(t&1&&(z(0),_(1,sk,1,0,"ng-container",30),$()),t&2){let e=u(3);f(),p("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",te(2,gy,e.filterOptions))}}function lk(t,i){t&1&&(N(),G(0,"svg",42))}function ck(t,i){}function dk(t,i){t&1&&_(0,ck,0,0,"ng-template")}function uk(t,i){if(t&1&&(D(0,"span"),_(1,dk,1,0,null,31),C()),t&2){let e=u(4);f(),p("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function pk(t,i){if(t&1){let e=q();D(0,"p-iconfield")(1,"input",40,10),B("input",function(o){b(e);let r=u(3);return v(r.onFilterInputChange(o))})("keydown",function(o){b(e);let r=u(3);return v(r.onFilterKeyDown(o))})("blur",function(o){b(e);let r=u(3);return v(r.onFilterBlur(o))}),C(),D(3,"p-inputicon"),_(4,lk,1,0,"svg",41)(5,uk,2,1,"span",18),C()()}if(t&2){let e=u(3);f(),w(e.cx("pcFilter")),p("pSize",e.size())("value",e._filterValue()||"")("variant",e.$variant()),k("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),f(3),p("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),f(),p("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function fk(t,i){if(t&1){let e=q();D(0,"div",29),B("click",function(o){return b(e),v(o.stopPropagation())}),_(1,ak,2,4,"ng-container",20)(2,pk,6,11,"ng-template",null,9,Se),C()}if(t&2){let e=ct(3),n=u(2);w(n.cx("header")),f(),p("ngIf",n.filterTemplate||n._filterTemplate)("ngIfElse",e)}}function hk(t,i){t&1&&j(0)}function mk(t,i){if(t&1&&_(0,hk,1,0,"ng-container",30),t&2){let e=i.$implicit,n=i.options;u(2);let o=ct(9);p("ngTemplateOutlet",o)("ngTemplateOutletContext",We(2,_y,e,n))}}function gk(t,i){t&1&&j(0)}function _k(t,i){if(t&1&&_(0,gk,1,0,"ng-container",30),t&2){let e=i.options,n=u(4);p("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",te(2,gy,e))}}function yk(t,i){t&1&&(z(0),_(1,_k,1,4,"ng-template",null,12,Se),$())}function bk(t,i){if(t&1){let e=q();D(0,"p-scroller",43,11),B("onLazyLoad",function(o){b(e);let r=u(2);return v(r.onLazyLoad.emit(o))}),_(2,mk,1,5,"ng-template",null,2,Se)(4,yk,3,0,"ng-container",18),C()}if(t&2){let e=u(2);Tt(te(8,Jr,e.scrollHeight)),p("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions),f(4),p("ngIf",e.loaderTemplate||e._loaderTemplate)}}function vk(t,i){t&1&&j(0)}function Ck(t,i){if(t&1&&(z(0),_(1,vk,1,0,"ng-container",30),$()),t&2){u();let e=ct(9),n=u();f(),p("ngTemplateOutlet",e)("ngTemplateOutletContext",We(3,_y,n.visibleOptions(),Sr(2,AM)))}}function wk(t,i){if(t&1&&(D(0,"span"),ee(1),C()),t&2){let e=u(2).$implicit,n=u(3);f(),xe(n.getOptionGroupLabel(e.optionGroup))}}function Dk(t,i){t&1&&j(0)}function Ik(t,i){if(t&1&&(z(0),D(1,"li",47),_(2,wk,2,1,"span",18)(3,Dk,1,0,"ng-container",30),C(),$()),t&2){let e=u(),n=e.$implicit,o=e.index,r=u().options,s=u(2);f(),w(s.cx("optionGroup")),p("ngStyle",te(7,Jr,r.itemSize+"px")),k("id",s.id+"_"+s.getOptionIndex(o,r)),f(),p("ngIf",!s.groupTemplate&&!s._groupTemplate),f(),p("ngTemplateOutlet",s.groupTemplate||s._groupTemplate)("ngTemplateOutletContext",te(9,bp,n.optionGroup))}}function xk(t,i){if(t&1){let e=q();z(0),D(1,"p-selectItem",48),B("onClick",function(o){b(e);let r=u().$implicit,s=u(3);return v(s.onOptionSelect(o,r))})("onMouseEnter",function(o){b(e);let r=u().index,s=u().options,a=u(2);return v(a.onOptionMouseEnter(o,a.getOptionIndex(r,s)))}),C(),$()}if(t&2){let e=u(),n=e.$implicit,o=e.index,r=u().options,s=u(2);f(),p("id",s.id+"_"+s.getOptionIndex(o,r))("option",n)("checkmark",s.checkmark)("selected",s.isSelected(n))("label",s.getOptionLabel(n))("disabled",s.isOptionDisabled(n))("template",s.itemTemplate||s._itemTemplate)("focused",s.focusedOptionIndex()===s.getOptionIndex(o,r)),xn("ariaPosInset",s.getAriaPosInset(s.getOptionIndex(o,r)))("ariaSetSize",s.ariaSetSize)}}function Ek(t,i){if(t&1&&_(0,Ik,4,11,"ng-container",18)(1,xk,2,10,"ng-container",18),t&2){let e=i.$implicit,n=u(3);p("ngIf",n.isOptionGroup(e)),f(),p("ngIf",!n.isOptionGroup(e))}}function Tk(t,i){if(t&1&&ee(0),t&2){let e=u(4);st(" ",e.emptyFilterMessageLabel," ")}}function Sk(t,i){t&1&&j(0,null,14)}function Mk(t,i){if(t&1&&_(0,Sk,2,0,"ng-container",31),t&2){let e=u(4);p("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyTemplate)}}function kk(t,i){if(t&1&&(D(0,"li",47),tn(1,Tk,1,1)(2,Mk,1,1,"ng-container"),C()),t&2){let e=u().options,n=u(2);w(n.cx("emptyMessage")),p("ngStyle",te(4,Jr,e.itemSize+"px")),f(),nn(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate?1:2)}}function Ok(t,i){if(t&1&&ee(0),t&2){let e=u(4);st(" ",e.emptyMessageLabel," ")}}function Rk(t,i){t&1&&j(0,null,15)}function Fk(t,i){if(t&1&&_(0,Rk,2,0,"ng-container",31),t&2){let e=u(4);p("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Ak(t,i){if(t&1&&(D(0,"li",47),tn(1,Ok,1,1)(2,Fk,1,1,"ng-container"),C()),t&2){let e=u().options,n=u(2);w(n.cx("emptyMessage")),p("ngStyle",te(4,Jr,e.itemSize+"px")),f(),nn(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function Nk(t,i){if(t&1&&(D(0,"ul",44,13),_(2,Ek,2,2,"ng-template",45)(3,kk,3,6,"li",46)(4,Ak,3,6,"li",46),C()),t&2){let e=i.$implicit,n=i.options,o=u(2);Tt(n.contentStyle),w(o.cn(o.cx("list"),n.contentStyleClass)),k("id",o.id+"_list")("aria-label",o.listLabel),f(2),p("ngForOf",e),f(),p("ngIf",o.filterValue&&o.isEmpty()),f(),p("ngIf",!o.filterValue&&o.isEmpty())}}function Lk(t,i){t&1&&j(0)}function Pk(t,i){if(t&1){let e=q();D(0,"div",37)(1,"span",38,6),B("focus",function(o){b(e);let r=u();return v(r.onFirstHiddenFocus(o))}),C(),_(3,rk,1,0,"ng-container",31)(4,fk,4,4,"div",27),D(5,"div"),_(6,bk,5,10,"p-scroller",39)(7,Ck,2,6,"ng-container",18)(8,Nk,5,9,"ng-template",null,7,Se),C(),_(10,Lk,1,0,"ng-container",31),D(11,"span",38,8),B("focus",function(o){b(e);let r=u();return v(r.onLastHiddenFocus(o))}),C()()}if(t&2){let e=u();w(e.cn(e.cx("overlay"),e.panelStyleClass)),p("ngStyle",e.panelStyle),f(),k("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),f(2),p("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),f(),p("ngIf",e.filter),f(),w(e.cx("listContainer")),St("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),f(),p("ngIf",e.virtualScroll),f(),p("ngIf",!e.virtualScroll),f(3),p("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),f(),k("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var Vk=`
    ${fy}

    /* For PrimeNG */
    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.ng-invalid.ng-dirty {
        border-color: dt('select.invalid.border.color');
    }

    .p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
    .p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }
`,Bk={root:({instance:t})=>["p-select p-component p-inputwrapper",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled","p-focus":t.focused,"p-invalid":t.invalid(),"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.hasFluid,"p-select-sm p-inputfield-sm":t.size()==="small","p-select-lg p-inputfield-lg":t.size()==="large"}],label:({instance:t})=>["p-select-label",{"p-placeholder":t.placeholder()&&t.label()===t.placeholder(),"p-select-label-empty":!t.editable&&!t.selectedItemTemplate&&(t.label()===void 0||t.label()===null||t.label()==="p-emptylabel"||t.label().length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingIcon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t})=>["p-select-option",{"p-select-option-selected":t.selected&&!t.checkmark,"p-disabled":t.disabled,"p-focus":t.focused}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},wl=(()=>{class t extends le{name="select";theme=Vk;classes=Bk;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Hk={provide:yt,useExisting:je(()=>Dl),multi:!0},jk=(()=>{class t extends ke{id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;onClick=new A;onMouseEnter=new A;_componentStyle=M(wl);onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-selectItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",T],focused:[2,"focused","focused",T],label:"label",disabled:[2,"disabled","disabled",T],visible:[2,"visible","visible",T],itemSize:[2,"itemSize","itemSize",pe],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",T]},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[re([wl]),R],decls:4,vars:19,consts:[["role","option","pRipple","",3,"click","mouseenter","id","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","check",3,"class",4,"ngIf"],["data-p-icon","blank",3,"class",4,"ngIf"],["data-p-icon","check"],["data-p-icon","blank"]],template:function(n,o){n&1&&(D(0,"li",0),B("click",function(s){return o.onOptionClick(s)})("mouseenter",function(s){return o.onOptionMouseEnter(s)}),_(1,cM,3,2,"ng-container",1)(2,dM,2,1,"span",1)(3,uM,1,0,"ng-container",2),C()),n&2&&(w(o.cx("option")),p("id",o.id)("ngStyle",te(15,Jr,o.itemSize+"px")),k("aria-label",o.label)("aria-setsize",o.ariaSetSize)("aria-posinset",o.ariaPosInset)("aria-selected",o.selected)("data-p-focused",o.focused)("data-p-highlight",o.selected)("data-p-disabled",o.disabled),f(),p("ngIf",o.checkmark),f(),p("ngIf",!o.template),f(),p("ngTemplateOutlet",o.template)("ngTemplateOutletContext",te(17,bp,o.option)))},dependencies:[me,qe,Be,gt,ne,Rn,_l,m_],encapsulation:2})}return t})(),Dl=(()=>{class t extends jo{zone;filterService;id;scrollHeight="200px";filter;panelStyle;styleClass;panelStyleClass;readonly;editable;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;autofocusFilter=!0;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){sp(e,this._options())||this._options.set(e)}appendTo=X(void 0);onChange=new A;onFilter=new A;onFocus=new A;onBlur=new A;onClick=new A;onShow=new A;onHide=new A;onClear=new A;onLazyLoad=new A;_componentStyle=M(wl);filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;itemsWrapper;$appendTo=Me(()=>this.appendTo()||this.config.overlayAppendTo());itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;_itemTemplate;_selectedItemTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_groupTemplate;_loaderTemplate;_dropdownIconTemplate;_loadingIconTemplate;_clearIconTemplate;_filterIconTemplate;_cancelIconTemplate;_onIconTemplate;_offIconTemplate;filterOptions;_options=Le(null);_placeholder=Le(void 0);value;hover;focused;overlayVisible;optionsChanged;panel;dimensionsUpdated;hoveredItem;selectedOptionUpdated;_filterValue=Le(null);searchValue;searchIndex;searchTimeout;previousSearchChar;currentSearchChar;preventModelTouched;focusedOptionIndex=Le(-1);labelId;listId;clicked=Le(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(bt.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(bt.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.$disabled()}get listLabel(){return this.config.getTranslation(bt.ARIA).listLabel}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=Me(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let o=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options.filter(r=>r.label?r.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:r.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let r=this.options||[],s=[];return r.forEach(a=>{let c=this.getOptionGroupChildren(a).filter(d=>o.includes(d));c.length>0&&s.push(ge(H({},a),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...c]}))}),this.flatOptions(s)}return o}return e});label=Me(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=e.findIndex(o=>this.isOptionValueEqualsModelValue(o));return n!==-1?this.getOptionLabel(e[n]):this.placeholder()||"p-emptylabel"});selectedOption;constructor(e,n){super(),this.zone=e,this.filterService=n,si(()=>{let o=this.modelValue(),r=this.visibleOptions();if(r&&De(r)){let s=this.findSelectedOptionIndex();(s!==-1||o===void 0||typeof o=="string"&&o.length===0||this.isModelValueNotSet()||this.editable)&&(this.selectedOption=r[s])}kn(r)&&(o===void 0||this.isModelValueNotSet())&&De(this.selectedOption)&&(this.selectedOption=null),o!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}ngOnInit(){super.ngOnInit(),this.id=this.id||Ee("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}ngAfterViewChecked(){if(this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=Oe(this.overlayViewChild?.overlayViewChild?.nativeElement,"li.p-select-option-selected");e&&P0(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}flatOptions(e){return(e||[]).reduce((n,o,r)=>{n.push({optionGroup:o,group:!0,index:r});let s=this.getOptionGroupChildren(o);return s&&s.forEach(a=>n.push(a)),n},[])}autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1))}onOptionSelect(e,n,o=!0,r=!1){if(!this.isSelected(n)){let s=this.getOptionValue(n);this.updateModel(s,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),r===!1&&this.onChange.emit({originalEvent:e,value:s})}o&&this.hide(!0)}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeModelValue(e),this.selectedOptionUpdated=!0}allowModelChange(){return!!this.modelValue()&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return this.isValidOption(e)&&Wt(this.modelValue(),this.getOptionValue(e),this.equalityKey())}ngAfterViewInit(){super.ngAfterViewInit(),this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,n=e?.classList.contains("p-float-label");if(e&&n&&!this.selectedOption){let o=e.querySelector("label");o&&this._placeholder.set(o.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?Mt(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?Mt(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}isSelectedOptionEmpty(){return kn(this.selectedOption)}isOptionDisabled(e){return this.getOptionValue(this.modelValue())===this.getOptionValue(e)||this.getOptionLabel(this.modelValue()===this.getOptionLabel(e))&&e.disabled===!1?!1:this.optionDisabled?Mt(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?Mt(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?Mt(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}onContainerClick(e){this.$disabled()||this.readonly||this.loading||(this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),!(e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]'))&&((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let n=e.target.value;this.searchValue="",!this.searchOptions(e,n)&&this.focusedOptionIndex.set(-1),this.onModelChange(n),this.updateModel(n||null,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:n})},1),!this.overlayVisible&&De(n)&&this.show()}show(e){this.overlayVisible=!0,this.focusedOptionIndex.set(this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex()),e&&cn(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayAnimationStart(e){if(e.toState==="visible"){if(this.itemsWrapper=Oe(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?".p-scroller":".p-select-list-container"),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&this.scroller?.scrollToIndex(n)}else{let n=Oe(this.itemsWrapper,".p-select-option.p-select-option-selected");n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}e.toState==="void"&&(this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e))}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&gl(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&cn(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&cn(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.$disabled())return;this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),!this.preventModelTouched&&!this.overlayVisible&&this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,n=!1){if(!(this.$disabled()||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,n);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&$0(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,n){if(this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus)){let o=this.visibleOptions()[n];this.onOptionSelect(e,o,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let o=Oe(this.itemsViewChild.nativeElement,`li[id="${n}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?null:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(o=>this.isValidOption(o)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?ap(this.visibleOptions().slice(0,e),o=>this.isValidOption(o)):-1;return n>-1?n:e}findLastOptionIndex(){return ap(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,n=!1){if(e.altKey&&!n){if(this.focusedOptionIndex()!==-1){let o=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,o)}this.overlayVisible&&this.hide()}else{let o=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,o),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,n=!1){if(n){let o=e.currentTarget;e.shiftKey?o.setSelectionRange(0,o.value.length):(o.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,n=!1){if(n){let o=e.currentTarget;if(e.shiftKey)o.setSelectionRange(0,o.value.length);else{let r=o.value.length;o.setSelectionRange(r,r),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,n=!1){!this.editable&&!n&&this.onEnterKey(e)}onEnterKey(e,n=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let o=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,o)}!n&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&this.hide(!0),e.preventDefault(),e.stopPropagation()}onTabKey(e,n=!1){if(!n)if(this.overlayVisible&&this.hasFocusableElements())cn(e.shiftKey?this.lastHiddenFocusableElementOnOverlay.nativeElement:this.firstHiddenFocusableElementOnOverlay.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let o=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,o)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?O0(this.overlayViewChild.el?.nativeElement,":not(.p-hidden-focusable)"):this.focusInputViewChild?.nativeElement;cn(n)}onLastHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?R0(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;cn(n)}hasFocusableElements(){return Hi(this.overlayViewChild.overlayViewChild.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,n=!1){n&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let o=-1,r=!1;return o=this.visibleOptions().findIndex(s=>this.isOptionMatched(s)),o!==-1&&(r=!0),o===-1&&this.focusedOptionIndex()===-1&&(o=this.findFirstFocusedOptionIndex()),o!==-1&&setTimeout(()=>{this.changeFocusedOptionIndex(e,o)}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?Oe(this.el.nativeElement,".p-dropdown-label.p-inputtext").focus():cn(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}writeControlValue(e,n){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),n(this.value),this.updateEditableLabel(),this.cd.markForCheck()}static \u0275fac=function(n){return new(n||t)(K(we),K(fl))};static \u0275cmp=L({type:t,selectors:[["p-select"]],contentQueries:function(n,o,r){if(n&1&&(F(r,pM,4),F(r,fM,4),F(r,hM,4),F(r,mM,4),F(r,gM,4),F(r,hy,4),F(r,_M,4),F(r,yM,4),F(r,bM,4),F(r,vM,4),F(r,CM,4),F(r,wM,4),F(r,DM,4),F(r,IM,4),F(r,xM,4),F(r,EM,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.itemTemplate=s.first),x(s=E())&&(o.groupTemplate=s.first),x(s=E())&&(o.loaderTemplate=s.first),x(s=E())&&(o.selectedItemTemplate=s.first),x(s=E())&&(o.headerTemplate=s.first),x(s=E())&&(o.filterTemplate=s.first),x(s=E())&&(o.footerTemplate=s.first),x(s=E())&&(o.emptyFilterTemplate=s.first),x(s=E())&&(o.emptyTemplate=s.first),x(s=E())&&(o.dropdownIconTemplate=s.first),x(s=E())&&(o.loadingIconTemplate=s.first),x(s=E())&&(o.clearIconTemplate=s.first),x(s=E())&&(o.filterIconTemplate=s.first),x(s=E())&&(o.onIconTemplate=s.first),x(s=E())&&(o.offIconTemplate=s.first),x(s=E())&&(o.cancelIconTemplate=s.first),x(s=E())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&(Ce(hy,5),Ce(TM,5),Ce(SM,5),Ce(MM,5),Ce(kM,5),Ce(OM,5),Ce(RM,5),Ce(FM,5)),n&2){let r;x(r=E())&&(o.filterViewChild=r.first),x(r=E())&&(o.focusInputViewChild=r.first),x(r=E())&&(o.editableInputViewChild=r.first),x(r=E())&&(o.itemsViewChild=r.first),x(r=E())&&(o.scroller=r.first),x(r=E())&&(o.overlayViewChild=r.first),x(r=E())&&(o.firstHiddenFocusableElementOnOverlay=r.first),x(r=E())&&(o.lastHiddenFocusableElementOnOverlay=r.first)}},hostVars:3,hostBindings:function(n,o){n&1&&B("click",function(s){return o.onContainerClick(s)}),n&2&&(k("id",o.id),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",T],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",T],editable:[2,"editable","editable",T],tabindex:[2,"tabindex","tabindex",pe],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",T],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",T],checkmark:[2,"checkmark","checkmark",T],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",T],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",group:[2,"group","group",T],showClear:[2,"showClear","showClear",T],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",T],virtualScroll:[2,"virtualScroll","virtualScroll",T],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",pe],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",T],selectOnFocus:[2,"selectOnFocus","selectOnFocus",T],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",T],autofocusFilter:[2,"autofocusFilter","autofocusFilter",T],filterValue:"filterValue",options:"options",appendTo:[1,"appendTo"]},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},features:[re([Hk,wl]),R],decls:11,vars:14,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["empty",""],["role","combobox",3,"class","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text",3,"class","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onAnimationStart","onHide","hostAttrSelector","visible","options","target","appendTo"],["role","combobox",3,"focus","blur","keydown","pTooltip","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text",3,"input","keydown","focus","blur","pAutoFocus"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"class",4,"ngIf"],["aria-hidden","true"],[3,"class",4,"ngIf"],["data-p-icon","chevron-down",3,"class",4,"ngIf"],["data-p-icon","chevron-down"],[3,"ngStyle"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus"],[3,"items","style","itemSize","autoSize","lazy","options","onLazyLoad",4,"ngIf"],["pInputText","","type","text","role","searchbox","autocomplete","off",3,"input","keydown","blur","pSize","value","variant"],["data-p-icon","search",4,"ngIf"],["data-p-icon","search"],[3,"onLazyLoad","items","itemSize","autoSize","lazy","options"],["role","listbox"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle",4,"ngIf"],["role","option",3,"ngStyle"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize"]],template:function(n,o){if(n&1){let r=q();_(0,BM,6,22,"span",16)(1,HM,2,18,"input",17)(2,GM,3,2,"ng-container",18),D(3,"div",19),_(4,ZM,3,2,"ng-container",20)(5,ok,2,2,"ng-template",null,0,Se),C(),D(7,"p-overlay",21,1),Vi("visibleChange",function(a){return b(r),To(o.overlayVisible,a)||(o.overlayVisible=a),v(a)}),B("onAnimationStart",function(a){return b(r),v(o.onOverlayAnimationStart(a))})("onHide",function(){return b(r),v(o.hide())}),_(9,Pk,13,18,"ng-template",null,2,Se),C()}if(n&2){let r=ct(6);p("ngIf",!o.editable),f(),p("ngIf",o.editable),f(),p("ngIf",o.isVisibleClearIcon),f(),w(o.cx("dropdown")),k("aria-expanded",o.overlayVisible??!1)("data-pc-section","trigger"),f(),p("ngIf",o.loading)("ngIfElse",r),f(3),p("hostAttrSelector",o.attrSelector),Pi("visible",o.overlayVisible),p("options",o.overlayOptions)("target","@parent")("appendTo",o.$appendTo())}},dependencies:[me,Gt,qe,Be,gt,jk,sy,py,On,Ho,yl,I_,zo,ty,iy,Zr,ne],encapsulation:2,changeDetection:0})}return t})(),yy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[Dl,ne,ne]})}return t})();var by=`
    .p-paginator {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: dt('paginator.background');
        color: dt('paginator.color');
        padding: dt('paginator.padding');
        border-radius: dt('paginator.border.radius');
        gap: dt('paginator.gap');
    }

    .p-paginator-content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: dt('paginator.gap');
    }

    .p-paginator-content-start {
        margin-inline-end: auto;
    }

    .p-paginator-content-end {
        margin-inline-start: auto;
    }

    .p-paginator-page,
    .p-paginator-next,
    .p-paginator-last,
    .p-paginator-first,
    .p-paginator-prev {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
        user-select: none;
        overflow: hidden;
        position: relative;
        background: dt('paginator.nav.button.background');
        border: 0 none;
        color: dt('paginator.nav.button.color');
        min-width: dt('paginator.nav.button.width');
        height: dt('paginator.nav.button.height');
        transition:
            background dt('paginator.transition.duration'),
            color dt('paginator.transition.duration'),
            outline-color dt('paginator.transition.duration'),
            box-shadow dt('paginator.transition.duration');
        border-radius: dt('paginator.nav.button.border.radius');
        padding: 0;
        margin: 0;
    }

    .p-paginator-page:focus-visible,
    .p-paginator-next:focus-visible,
    .p-paginator-last:focus-visible,
    .p-paginator-first:focus-visible,
    .p-paginator-prev:focus-visible {
        box-shadow: dt('paginator.nav.button.focus.ring.shadow');
        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');
        outline-offset: dt('paginator.nav.button.focus.ring.offset');
    }

    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,
    .p-paginator-first:not(.p-disabled):hover,
    .p-paginator-prev:not(.p-disabled):hover,
    .p-paginator-next:not(.p-disabled):hover,
    .p-paginator-last:not(.p-disabled):hover {
        background: dt('paginator.nav.button.hover.background');
        color: dt('paginator.nav.button.hover.color');
    }

    .p-paginator-page.p-paginator-page-selected {
        background: dt('paginator.nav.button.selected.background');
        color: dt('paginator.nav.button.selected.color');
    }

    .p-paginator-current {
        color: dt('paginator.current.page.report.color');
    }

    .p-paginator-pages {
        display: flex;
        align-items: center;
        gap: dt('paginator.gap');
    }

    .p-paginator-jtp-input .p-inputtext {
        max-width: dt('paginator.jump.to.page.input.max.width');
    }

    .p-paginator-first:dir(rtl),
    .p-paginator-prev:dir(rtl),
    .p-paginator-next:dir(rtl),
    .p-paginator-last:dir(rtl) {
        transform: rotate(180deg);
    }
`;var zk=["dropdownicon"],$k=["firstpagelinkicon"],Uk=["previouspagelinkicon"],Gk=["lastpagelinkicon"],Wk=["nextpagelinkicon"],Il=t=>({$implicit:t}),qk=t=>({pageLink:t});function Kk(t,i){t&1&&j(0)}function Qk(t,i){if(t&1&&(D(0,"div"),_(1,Kk,1,0,"ng-container",9),C()),t&2){let e=u();w(e.cx("contentStart")),k("data-pc-section","start"),f(),p("ngTemplateOutlet",e.templateLeft)("ngTemplateOutletContext",te(5,Il,e.paginatorState))}}function Yk(t,i){if(t&1&&(D(0,"span"),ee(1),C()),t&2){let e=u();w(e.cx("current")),f(),xe(e.currentPageReport)}}function Zk(t,i){if(t&1&&(N(),G(0,"svg",12)),t&2){let e=u(2);w(e.cx("firstIcon"))}}function Jk(t,i){}function Xk(t,i){t&1&&_(0,Jk,0,0,"ng-template")}function eO(t,i){if(t&1&&(D(0,"span"),_(1,Xk,1,0,null,13),C()),t&2){let e=u(2);w(e.cx("firstIcon")),f(),p("ngTemplateOutlet",e.firstPageLinkIconTemplate||e._firstPageLinkIconTemplate)}}function tO(t,i){if(t&1){let e=q();D(0,"button",10),B("click",function(o){b(e);let r=u();return v(r.changePageToFirst(o))}),_(1,Zk,1,2,"svg",11)(2,eO,2,3,"span",0),C()}if(t&2){let e=u();w(e.cx("first")),k("aria-label",e.getAriaLabel("firstPageLabel")),f(),p("ngIf",!e.firstPageLinkIconTemplate&&!e._firstPageLinkIconTemplate),f(),p("ngIf",e.firstPageLinkIconTemplate||e._firstPageLinkIconTemplate)}}function nO(t,i){if(t&1&&(N(),G(0,"svg",14)),t&2){let e=u();w(e.cx("prevIcon"))}}function iO(t,i){}function oO(t,i){t&1&&_(0,iO,0,0,"ng-template")}function rO(t,i){if(t&1&&(D(0,"span"),_(1,oO,1,0,null,13),C()),t&2){let e=u();w(e.cx("prevIcon")),f(),p("ngTemplateOutlet",e.previousPageLinkIconTemplate||e._previousPageLinkIconTemplate)}}function sO(t,i){if(t&1){let e=q();D(0,"button",10),B("click",function(o){let r=b(e).$implicit,s=u(2);return v(s.onPageLinkClick(o,r-1))}),ee(1),C()}if(t&2){let e=i.$implicit,n=u(2);w(n.cx("page",te(5,qk,e))),k("aria-label",n.getPageAriaLabel(e))("aria-current",e-1==n.getPage()?"page":void 0),f(),st(" ",n.getLocalization(e)," ")}}function aO(t,i){if(t&1&&(D(0,"span"),_(1,sO,2,7,"button",15),C()),t&2){let e=u();w(e.cx("pages")),f(),p("ngForOf",e.pageLinks)}}function lO(t,i){if(t&1&&ee(0),t&2){let e=u(2);xe(e.currentPageReport)}}function cO(t,i){t&1&&j(0)}function dO(t,i){if(t&1&&_(0,cO,1,0,"ng-container",9),t&2){let e=i.$implicit,n=u(3);p("ngTemplateOutlet",n.jumpToPageItemTemplate)("ngTemplateOutletContext",te(2,Il,e))}}function uO(t,i){t&1&&(z(0),_(1,dO,1,4,"ng-template",19),$())}function pO(t,i){t&1&&j(0)}function fO(t,i){if(t&1&&_(0,pO,1,0,"ng-container",13),t&2){let e=u(3);p("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function hO(t,i){t&1&&_(0,fO,1,1,"ng-template",20)}function mO(t,i){if(t&1){let e=q();D(0,"p-select",16),B("onChange",function(o){b(e);let r=u();return v(r.onPageDropdownChange(o))}),_(1,lO,1,1,"ng-template",17)(2,uO,2,0,"ng-container",18)(3,hO,1,0,null,18),C()}if(t&2){let e=u();p("options",e.pageItems)("ngModel",e.getPage())("disabled",e.empty())("styleClass",e.cx("pcJumpToPageDropdown"))("appendTo",e.dropdownAppendTo||e.$appendTo())("scrollHeight",e.dropdownScrollHeight),k("aria-label",e.getAriaLabel("jumpToPageDropdownLabel")),f(2),p("ngIf",e.jumpToPageItemTemplate),f(),p("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function gO(t,i){if(t&1&&(N(),G(0,"svg",21)),t&2){let e=u();w(e.cx("nextIcon"))}}function _O(t,i){}function yO(t,i){t&1&&_(0,_O,0,0,"ng-template")}function bO(t,i){if(t&1&&(D(0,"span"),_(1,yO,1,0,null,13),C()),t&2){let e=u();w(e.cx("nextIcon")),f(),p("ngTemplateOutlet",e.nextPageLinkIconTemplate||e._nextPageLinkIconTemplate)}}function vO(t,i){if(t&1&&(N(),G(0,"svg",23)),t&2){let e=u(2);w(e.cx("lastIcon"))}}function CO(t,i){}function wO(t,i){t&1&&_(0,CO,0,0,"ng-template")}function DO(t,i){if(t&1&&(D(0,"span"),_(1,wO,1,0,null,13),C()),t&2){let e=u(2);w(e.cx("lastIcon")),f(),p("ngTemplateOutlet",e.lastPageLinkIconTemplate||e._lastPageLinkIconTemplate)}}function IO(t,i){if(t&1){let e=q();D(0,"button",2),B("click",function(o){b(e);let r=u();return v(r.changePageToLast(o))}),_(1,vO,1,2,"svg",22)(2,DO,2,3,"span",0),C()}if(t&2){let e=u();w(e.cx("last")),p("disabled",e.isLastPage()||e.empty()),k("aria-label",e.getAriaLabel("lastPageLabel")),f(),p("ngIf",!e.lastPageLinkIconTemplate&&!e._lastPageLinkIconTemplate),f(),p("ngIf",e.lastPageLinkIconTemplate||e._lastPageLinkIconTemplate)}}function xO(t,i){if(t&1){let e=q();D(0,"p-inputnumber",24),B("ngModelChange",function(o){b(e);let r=u();return v(r.changePage(o-1))}),C()}if(t&2){let e=u();w(e.cx("pcJumpToPageInput")),p("ngModel",e.currentPage())("disabled",e.empty())}}function EO(t,i){t&1&&j(0)}function TO(t,i){if(t&1&&_(0,EO,1,0,"ng-container",9),t&2){let e=i.$implicit,n=u(3);p("ngTemplateOutlet",n.dropdownItemTemplate)("ngTemplateOutletContext",te(2,Il,e))}}function SO(t,i){t&1&&(z(0),_(1,TO,1,4,"ng-template",19),$())}function MO(t,i){t&1&&j(0)}function kO(t,i){if(t&1&&_(0,MO,1,0,"ng-container",13),t&2){let e=u(3);p("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function OO(t,i){t&1&&_(0,kO,1,1,"ng-template",20)}function RO(t,i){if(t&1){let e=q();D(0,"p-select",25),Vi("ngModelChange",function(o){b(e);let r=u();return To(r.rows,o)||(r.rows=o),v(o)}),B("onChange",function(o){b(e);let r=u();return v(r.onRppChange(o))}),_(1,SO,2,0,"ng-container",18)(2,OO,1,0,null,18),C()}if(t&2){let e=u();p("options",e.rowsPerPageItems),Pi("ngModel",e.rows),p("styleClass",e.cx("pcRowPerPageDropdown"))("disabled",e.empty())("appendTo",e.dropdownAppendTo||e.$appendTo())("scrollHeight",e.dropdownScrollHeight),xn("ariaLabel",e.getAriaLabel("rowsPerPageLabel")),f(),p("ngIf",e.dropdownItemTemplate),f(),p("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function FO(t,i){t&1&&j(0)}function AO(t,i){if(t&1&&(D(0,"div"),_(1,FO,1,0,"ng-container",9),C()),t&2){let e=u();w(e.cx("contentEnd")),k("data-pc-section","end"),f(),p("ngTemplateOutlet",e.templateRight)("ngTemplateOutletContext",te(5,Il,e.paginatorState))}}var NO={paginator:({instance:t})=>["p-paginator p-component"],content:"p-paginator-content",contentStart:"p-paginator-content-start",contentEnd:"p-paginator-content-end",first:({instance:t})=>["p-paginator-first",{"p-disabled":t.isFirstPage()||t.empty()}],firstIcon:"p-paginator-first-icon",prev:({instance:t})=>["p-paginator-prev",{"p-disabled":t.isFirstPage()||t.empty()}],prevIcon:"p-paginator-prev-icon",next:({instance:t})=>["p-paginator-next",{"p-disabled":t.isLastPage()||t.empty()}],nextIcon:"p-paginator-next-icon",last:({instance:t})=>["p-paginator-last",{"p-disabled":t.isLastPage()||t.empty()}],lastIcon:"p-paginator-last-icon",pages:"p-paginator-pages",page:({instance:t,pageLink:i})=>["p-paginator-page",{"p-paginator-page-selected":i-1==t.getPage()}],current:"p-paginator-current",pcRowPerPageDropdown:"p-paginator-rpp-dropdown",pcJumpToPageDropdown:"p-paginator-jtp-dropdown",pcJumpToPageInput:"p-paginator-jtp-input"},vy=(()=>{class t extends le{name="paginator";theme=by;classes=NO;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var vp=(()=>{class t extends ke{pageLinkSize=5;styleClass;alwaysShow=!0;dropdownAppendTo;templateLeft;templateRight;dropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showFirstLastIcon=!0;totalRecords=0;rows=0;rowsPerPageOptions;showJumpToPageDropdown;showJumpToPageInput;jumpToPageItemTemplate;showPageLinks=!0;locale;dropdownItemTemplate;get first(){return this._first}set first(e){this._first=e}appendTo=X(void 0);onPageChange=new A;dropdownIconTemplate;firstPageLinkIconTemplate;previousPageLinkIconTemplate;lastPageLinkIconTemplate;nextPageLinkIconTemplate;templates;_dropdownIconTemplate;_firstPageLinkIconTemplate;_previousPageLinkIconTemplate;_lastPageLinkIconTemplate;_nextPageLinkIconTemplate;pageLinks;pageItems;rowsPerPageItems;paginatorState;_first=0;_page=0;_componentStyle=M(vy);$appendTo=Me(()=>this.appendTo()||this.config.overlayAppendTo());get display(){return this.alwaysShow||this.pageLinks&&this.pageLinks.length>1?null:"none"}constructor(){super()}ngOnInit(){super.ngOnInit(),this.updatePaginatorState()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"firstpagelinkicon":this._firstPageLinkIconTemplate=e.template;break;case"previouspagelinkicon":this._previousPageLinkIconTemplate=e.template;break;case"lastpagelinkicon":this._lastPageLinkIconTemplate=e.template;break;case"nextpagelinkicon":this._nextPageLinkIconTemplate=e.template;break}})}getAriaLabel(e){return this.config.translation.aria?this.config.translation.aria[e]:void 0}getPageAriaLabel(e){return this.config.translation.aria?this.config.translation.aria.pageLabel.replace(/{page}/g,`${e}`):void 0}getLocalization(e){let n=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),o=new Map(n.map((r,s)=>[s,r]));return e>9?String(e).split("").map(s=>o.get(Number(s))).join(""):o.get(e)}ngOnChanges(e){super.ngOnChanges(e),e.totalRecords&&(this.updatePageLinks(),this.updatePaginatorState(),this.updateFirst(),this.updateRowsPerPageOptions()),e.first&&(this._first=e.first.currentValue,this.updatePageLinks(),this.updatePaginatorState()),e.rows&&(this.updatePageLinks(),this.updatePaginatorState()),e.rowsPerPageOptions&&this.updateRowsPerPageOptions(),e.pageLinkSize&&this.updatePageLinks()}updateRowsPerPageOptions(){if(this.rowsPerPageOptions){this.rowsPerPageItems=[];let e=null;for(let n of this.rowsPerPageOptions)typeof n=="object"&&n.showAll?e={label:n.showAll,value:this.totalRecords}:this.rowsPerPageItems.push({label:String(this.getLocalization(n)),value:n});e&&this.rowsPerPageItems.push(e)}}isFirstPage(){return this.getPage()===0}isLastPage(){return this.getPage()===this.getPageCount()-1}getPageCount(){return Math.ceil(this.totalRecords/this.rows)}calculatePageLinkBoundaries(){let e=this.getPageCount(),n=Math.min(this.pageLinkSize,e),o=Math.max(0,Math.ceil(this.getPage()-n/2)),r=Math.min(e-1,o+n-1);var s=this.pageLinkSize-(r-o+1);return o=Math.max(0,o-s),[o,r]}updatePageLinks(){this.pageLinks=[];let e=this.calculatePageLinkBoundaries(),n=e[0],o=e[1];for(let r=n;r<=o;r++)this.pageLinks.push(r+1);if(this.showJumpToPageDropdown){this.pageItems=[];for(let r=0;r<this.getPageCount();r++)this.pageItems.push({label:String(r+1),value:r})}}changePage(e){var n=this.getPageCount();if(e>=0&&e<n){this._first=this.rows*e;var o={page:e,first:this.first,rows:this.rows,pageCount:n};this.updatePageLinks(),this.onPageChange.emit(o),this.updatePaginatorState()}}updateFirst(){let e=this.getPage();e>0&&this.totalRecords&&this.first>=this.totalRecords&&Promise.resolve(null).then(()=>this.changePage(e-1))}getPage(){return Math.floor(this.first/this.rows)}changePageToFirst(e){this.isFirstPage()||this.changePage(0),e.preventDefault()}changePageToPrev(e){this.changePage(this.getPage()-1),e.preventDefault()}changePageToNext(e){this.changePage(this.getPage()+1),e.preventDefault()}changePageToLast(e){this.isLastPage()||this.changePage(this.getPageCount()-1),e.preventDefault()}onPageLinkClick(e,n){this.changePage(n),e.preventDefault()}onRppChange(e){this.changePage(this.getPage())}onPageDropdownChange(e){this.changePage(e.value)}updatePaginatorState(){this.paginatorState={page:this.getPage(),pageCount:this.getPageCount(),rows:this.rows,first:this.first,totalRecords:this.totalRecords}}empty(){return this.getPageCount()===0}currentPage(){return this.getPageCount()>0?this.getPage()+1:0}get currentPageReport(){return this.currentPageReportTemplate.replace("{currentPage}",String(this.currentPage())).replace("{totalPages}",String(this.getPageCount())).replace("{first}",String(this.totalRecords>0?this._first+1:0)).replace("{last}",String(Math.min(this._first+this.rows,this.totalRecords))).replace("{rows}",String(this.rows)).replace("{totalRecords}",String(this.totalRecords))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=L({type:t,selectors:[["p-paginator"]],contentQueries:function(n,o,r){if(n&1&&(F(r,zk,4),F(r,$k,4),F(r,Uk,4),F(r,Gk,4),F(r,Wk,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.dropdownIconTemplate=s.first),x(s=E())&&(o.firstPageLinkIconTemplate=s.first),x(s=E())&&(o.previousPageLinkIconTemplate=s.first),x(s=E())&&(o.lastPageLinkIconTemplate=s.first),x(s=E())&&(o.nextPageLinkIconTemplate=s.first),x(s=E())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&2&&(k("data-pc-name","paginator")("data-pc-section","root"),w(o.cn(o.cx("paginator"),o.styleClass)),St("display",o.display))},inputs:{pageLinkSize:[2,"pageLinkSize","pageLinkSize",pe],styleClass:"styleClass",alwaysShow:[2,"alwaysShow","alwaysShow",T],dropdownAppendTo:"dropdownAppendTo",templateLeft:"templateLeft",templateRight:"templateRight",dropdownScrollHeight:"dropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",T],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",T],totalRecords:[2,"totalRecords","totalRecords",pe],rows:[2,"rows","rows",pe],rowsPerPageOptions:"rowsPerPageOptions",showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",T],showJumpToPageInput:[2,"showJumpToPageInput","showJumpToPageInput",T],jumpToPageItemTemplate:"jumpToPageItemTemplate",showPageLinks:[2,"showPageLinks","showPageLinks",T],locale:"locale",dropdownItemTemplate:"dropdownItemTemplate",first:"first",appendTo:[1,"appendTo"]},outputs:{onPageChange:"onPageChange"},features:[re([vy]),R,Ye],decls:15,vars:21,consts:[[3,"class",4,"ngIf"],["type","button","pRipple","",3,"class","click",4,"ngIf"],["type","button","pRipple","",3,"click","disabled"],["data-p-icon","angle-left",3,"class",4,"ngIf"],[3,"options","ngModel","disabled","styleClass","appendTo","scrollHeight","onChange",4,"ngIf"],["data-p-icon","angle-right",3,"class",4,"ngIf"],["type","button","pRipple","",3,"disabled","class","click",4,"ngIf"],[3,"ngModel","class","disabled","ngModelChange",4,"ngIf"],[3,"options","ngModel","styleClass","disabled","appendTo","scrollHeight","ariaLabel","ngModelChange","onChange",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","pRipple","",3,"click"],["data-p-icon","angle-double-left",3,"class",4,"ngIf"],["data-p-icon","angle-double-left"],[4,"ngTemplateOutlet"],["data-p-icon","angle-left"],["type","button","pRipple","",3,"class","click",4,"ngFor","ngForOf"],[3,"onChange","options","ngModel","disabled","styleClass","appendTo","scrollHeight"],["pTemplate","selectedItem"],[4,"ngIf"],["pTemplate","item"],["pTemplate","dropdownicon"],["data-p-icon","angle-right"],["data-p-icon","angle-double-right",3,"class",4,"ngIf"],["data-p-icon","angle-double-right"],[3,"ngModelChange","ngModel","disabled"],[3,"ngModelChange","onChange","options","ngModel","styleClass","disabled","appendTo","scrollHeight","ariaLabel"]],template:function(n,o){n&1&&(_(0,Qk,2,7,"div",0)(1,Yk,2,3,"span",0)(2,tO,3,5,"button",1),D(3,"button",2),B("click",function(s){return o.changePageToPrev(s)}),_(4,nO,1,2,"svg",3)(5,rO,2,3,"span",0),C(),_(6,aO,2,3,"span",0)(7,mO,4,9,"p-select",4),D(8,"button",2),B("click",function(s){return o.changePageToNext(s)}),_(9,gO,1,2,"svg",5)(10,bO,2,3,"span",0),C(),_(11,IO,3,6,"button",6)(12,xO,1,4,"p-inputnumber",7)(13,RO,3,9,"p-select",8)(14,AO,2,7,"div",0)),n&2&&(p("ngIf",o.templateLeft),f(),p("ngIf",o.showCurrentPageReport),f(),p("ngIf",o.showFirstLastIcon),f(),w(o.cx("prev")),p("disabled",o.isFirstPage()||o.empty()),k("aria-label",o.getAriaLabel("prevPageLabel")),f(),p("ngIf",!o.previousPageLinkIconTemplate&&!o._previousPageLinkIconTemplate),f(),p("ngIf",o.previousPageLinkIconTemplate||o._previousPageLinkIconTemplate),f(),p("ngIf",o.showPageLinks),f(),p("ngIf",o.showJumpToPageDropdown),f(),w(o.cx("next")),p("disabled",o.isLastPage()||o.empty()),k("aria-label",o.getAriaLabel("nextPageLabel")),f(),p("ngIf",!o.nextPageLinkIconTemplate&&!o._nextPageLinkIconTemplate),f(),p("ngIf",o.nextPageLinkIconTemplate||o._nextPageLinkIconTemplate),f(),p("ngIf",o.showFirstLastIcon),f(),p("ngIf",o.showJumpToPageInput),f(),p("ngIf",o.rowsPerPageOptions),f(),p("ngIf",o.templateRight))},dependencies:[me,Gt,qe,Be,Dl,Cl,Ro,al,$r,Rn,c_,d_,p_,f_,ne,Ae],encapsulation:2,changeDetection:0})}return t})(),Cy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[vp,ne,ne]})}return t})();var wy=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`;var PO=["input"],VO=`
    ${wy}

    /* For PrimeNG */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`,BO={root:({instance:t})=>["p-radiobutton p-component",{"p-radiobutton-checked":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-radiobutton-sm p-inputfield-sm":t.size()==="small","p-radiobutton-lg p-inputfield-lg":t.size()==="large"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},Dy=(()=>{class t extends le{name="radiobutton";theme=VO;classes=BO;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var HO={provide:yt,useExisting:je(()=>Iy),multi:!0},jO=(()=>{class t{accessors=[];add(e,n){this.accessors.push([e,n])}remove(e){this.accessors=this.accessors.filter(n=>n[1]!==e)}select(e){this.accessors.forEach(n=>{this.isSameGroup(n,e)&&n[1]!==e&&n[1].writeValue(e.value)})}isSameGroup(e,n){return e[0].control?e[0].control.root===n.control.control.root&&e[1].name()===n.name():!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Iy=(()=>{class t extends Fn{value;tabindex;inputId;ariaLabelledBy;ariaLabel;styleClass;autofocus;binary;variant=X();size=X();onClick=new A;onFocus=new A;onBlur=new A;inputViewChild;$variant=Me(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());checked;focused;control;_componentStyle=M(Dy);injector=M(ht);registry=M(jO);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(At),this.registry.add(this.control,this)}onChange(e){this.$disabled()||this.select(e)}select(e){this.$disabled()||(this.checked=!0,this.writeModelValue(this.checked),this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}writeControlValue(e,n){this.checked=this.binary?!!e:e==this.value,n(this.checked),this.cd.markForCheck()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(n,o){if(n&1&&Ce(PO,5),n&2){let r;x(r=E())&&(o.inputViewChild=r.first)}},hostVars:4,hostBindings:function(n,o){n&2&&(k("data-pc-name","radiobutton")("data-pc-section","root"),w(o.cx("root")))},inputs:{value:"value",tabindex:[2,"tabindex","tabindex",pe],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",T],binary:[2,"binary","binary",T],variant:[1,"variant"],size:[1,"size"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[re([HO,Dy]),R],decls:4,vars:19,consts:[["input",""],["type","radio",3,"focus","blur","change","checked","pAutoFocus"]],template:function(n,o){if(n&1){let r=q();D(0,"input",1,0),B("focus",function(a){return b(r),v(o.onInputFocus(a))})("blur",function(a){return b(r),v(o.onInputBlur(a))})("change",function(a){return b(r),v(o.onChange(a))}),C(),D(2,"div"),G(3,"div"),C()}n&2&&(w(o.cx("input")),p("checked",o.checked)("pAutoFocus",o.autofocus),k("id",o.inputId)("name",o.name())("required",o.required()?"":void 0)("disabled",o.$disabled()?"":void 0)("value",o.modelValue())("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel)("tabindex",o.tabindex)("aria-checked",o.checked),f(2),w(o.cx("box")),k("data-pc-section","input"),f(),w(o.cx("icon")),k("data-pc-section","icon"))},dependencies:[me,On,ne],encapsulation:2,changeDetection:0})}return t})(),xy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[Iy,ne,ne]})}return t})();var Ey=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var zO=["icon"],$O=["content"],Sy=t=>({$implicit:t});function UO(t,i){t&1&&j(0)}function GO(t,i){if(t&1&&G(0,"span"),t&2){let e=u(3);w(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),k("data-pc-section","icon")}}function WO(t,i){if(t&1&&tn(0,GO,1,3,"span",1),t&2){let e=u(2);nn(e.onIcon||e.offIcon?0:-1)}}function qO(t,i){t&1&&j(0)}function KO(t,i){if(t&1&&_(0,qO,1,0,"ng-container",0),t&2){let e=u(2);p("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",te(2,Sy,e.checked))}}function QO(t,i){if(t&1&&(tn(0,WO,1,1)(1,KO,1,4,"ng-container"),D(2,"span"),ee(3),C()),t&2){let e=u();nn(e.iconTemplate?1:0),f(2),w(e.cx("label")),k("data-pc-section","label"),f(),xe(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var YO=`
    ${Ey}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,ZO={root:({instance:t})=>["p-togglebutton p-component",{"p-togglebutton-checked":t.checked,"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large","p-togglebutton-fluid":t.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},Ty=(()=>{class t extends le{name="togglebutton";theme=YO;classes=ZO;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var JO={provide:yt,useExisting:je(()=>Cp),multi:!0},Cp=(()=>{class t extends Fn{onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=X(void 0,{transform:T});onChange=new A;iconTemplate;contentTemplate;templates;checked=!1;_componentStyle=M(Ty);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,r){if(n&1&&(F(r,zO,4),F(r,$O,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.iconTemplate=s.first),x(s=E())&&(o.contentTemplate=s.first),x(s=E())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&1&&B("keydown",function(s){return o.onKeyDown(s)})("click",function(s){return o.toggle(s)}),n&2&&(k("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("role","button")("tabindex",o.$disabled()?-1:0),w(o.cn(o.cx("root"),o.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",pe],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",T],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[re([JO,Ty]),su([Rn]),R],decls:3,vars:7,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class"]],template:function(n,o){n&1&&(D(0,"span"),_(1,UO,1,0,"ng-container",0),tn(2,QO,4,5),C()),n&2&&(w(o.cx("content")),f(),p("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",te(5,Sy,o.checked)),f(),nn(o.contentTemplate?-1:2))},dependencies:[me,Be,ne],encapsulation:2,changeDetection:0})}return t})();var My=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var XO=["item"],eR=(t,i)=>({$implicit:t,index:i});function tR(t,i){return this.getOptionLabel(i)}function nR(t,i){t&1&&j(0)}function iR(t,i){if(t&1&&_(0,nR,1,0,"ng-container",3),t&2){let e=u(2),n=e.$implicit,o=e.$index,r=u();p("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",We(2,eR,n,o))}}function oR(t,i){t&1&&_(0,iR,1,5,"ng-template",null,0,Se)}function rR(t,i){if(t&1){let e=q();D(0,"p-togglebutton",2),B("onChange",function(o){let r=b(e),s=r.$implicit,a=r.$index,l=u();return v(l.onOptionSelect(o,s,a))}),tn(1,oR,2,0),C()}if(t&2){let e=i.$implicit,n=u();p("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.$disabled()||n.isOptionDisabled(e))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid()),f(),nn(n.itemTemplate||n._itemTemplate?1:-1)}}var sR=`
    ${My}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,aR={root:({instance:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]},ky=(()=>{class t extends le{name="selectbutton";theme=sR;classes=aR;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var lR={provide:yt,useExisting:je(()=>Oy),multi:!0},Oy=(()=>{class t extends Fn{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=X();fluid=X(void 0,{transform:T});onOptionClick=new A;onChange=new A;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=M(ky);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?Mt(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?Mt(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?Mt(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,o){if(this.$disabled()||this.isOptionDisabled(n))return;let r=this.isSelected(n);if(r&&this.unselectable)return;let s=this.getOptionValue(n),a;if(this.multiple)r?a=this.value.filter(l=>!Wt(l,s,this.equalityKey)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:o})}changeTabIndexes(e,n){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});n==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!Wt(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,o=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(Wt(r,o,this.dataKey)){n=!0;break}}}else n=Wt(this.getOptionValue(e),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,r){if(n&1&&(F(r,XO,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o.itemTemplate=s.first),x(s=E())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&2&&(k("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),w(o.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",T],tabindex:[2,"tabindex","tabindex",pe],multiple:[2,"multiple","multiple",T],allowEmpty:[2,"allowEmpty","allowEmpty",T],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",T],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[re([lR,ky]),R],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&gu(0,rR,2,10,"p-togglebutton",1,tR,!0),n&2&&_u(o.options)},dependencies:[Cp,Ro,al,$r,me,Be,ne],encapsulation:2,changeDetection:0})}return t})(),Ry=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({imports:[Oy,ne,ne]})}return t})();var Fy=`
    .p-datatable {
        position: relative;
    }

    .p-datatable-table {
        border-spacing: 0;
        border-collapse: separate;
        width: 100%;
    }

    .p-datatable-scrollable > .p-datatable-table-container {
        position: relative;
    }

    .p-datatable-scrollable-table > .p-datatable-thead {
        inset-block-start: 0;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-scrollable-table > .p-datatable-tfoot {
        inset-block-end: 0;
        z-index: 1;
    }

    .p-datatable-scrollable .p-datatable-frozen-column {
        position: sticky;
        background: dt('datatable.header.cell.background');
    }

    .p-datatable-scrollable th.p-datatable-frozen-column {
        z-index: 1;
    }

    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,
    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {
        background: dt('datatable.header.cell.background');
    }

    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,
    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
        background: dt('datatable.footer.cell.background');
    }

    .p-datatable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .p-datatable-flex-scrollable > .p-datatable-table-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }

    .p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {
        position: sticky;
        z-index: 1;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th,
    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,
    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {
        overflow: hidden;
        white-space: nowrap;
    }

    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }

    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {
        display: none;
    }

    .p-datatable-column-resizer {
        display: block;
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        margin: 0;
        width: dt('datatable.column.resizer.width');
        height: 100%;
        padding: 0;
        cursor: col-resize;
        border: 1px solid transparent;
    }

    .p-datatable-column-header-content {
        display: flex;
        align-items: center;
        gap: dt('datatable.header.cell.gap');
    }

    .p-datatable-column-resize-indicator {
        width: dt('datatable.resize.indicator.width');
        position: absolute;
        z-index: 10;
        display: none;
        background: dt('datatable.resize.indicator.color');
    }

    .p-datatable-row-reorder-indicator-up,
    .p-datatable-row-reorder-indicator-down {
        position: absolute;
        display: none;
    }

    .p-datatable-reorderable-column,
    .p-datatable-reorderable-row-handle {
        cursor: move;
    }

    .p-datatable-mask {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    .p-datatable-inline-filter {
        display: flex;
        align-items: center;
        width: 100%;
        gap: dt('datatable.filter.inline.gap');
    }

    .p-datatable-inline-filter .p-datatable-filter-element-container {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-datatable-filter-overlay {
        background: dt('datatable.filter.overlay.select.background');
        color: dt('datatable.filter.overlay.select.color');
        border: 1px solid dt('datatable.filter.overlay.select.border.color');
        border-radius: dt('datatable.filter.overlay.select.border.radius');
        box-shadow: dt('datatable.filter.overlay.select.shadow');
        min-width: 12.5rem;
    }

    .p-datatable-filter-constraint-list {
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: dt('datatable.filter.constraint.list.padding');
        gap: dt('datatable.filter.constraint.list.gap');
    }

    .p-datatable-filter-constraint {
        padding: dt('datatable.filter.constraint.padding');
        color: dt('datatable.filter.constraint.color');
        border-radius: dt('datatable.filter.constraint.border.radius');
        cursor: pointer;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-filter-constraint-selected {
        background: dt('datatable.filter.constraint.selected.background');
        color: dt('datatable.filter.constraint.selected.color');
    }

    .p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {
        background: dt('datatable.filter.constraint.focus.background');
        color: dt('datatable.filter.constraint.focus.color');
    }

    .p-datatable-filter-constraint:focus-visible {
        outline: 0 none;
        background: dt('datatable.filter.constraint.focus.background');
        color: dt('datatable.filter.constraint.focus.color');
    }

    .p-datatable-filter-constraint-selected:focus-visible {
        outline: 0 none;
        background: dt('datatable.filter.constraint.selected.focus.background');
        color: dt('datatable.filter.constraint.selected.focus.color');
    }

    .p-datatable-filter-constraint-separator {
        border-block-start: 1px solid dt('datatable.filter.constraint.separator.border.color');
    }

    .p-datatable-popover-filter {
        display: inline-flex;
        margin-inline-start: auto;
    }

    .p-datatable-filter-overlay-popover {
        background: dt('datatable.filter.overlay.popover.background');
        color: dt('datatable.filter.overlay.popover.color');
        border: 1px solid dt('datatable.filter.overlay.popover.border.color');
        border-radius: dt('datatable.filter.overlay.popover.border.radius');
        box-shadow: dt('datatable.filter.overlay.popover.shadow');
        min-width: 12.5rem;
        padding: dt('datatable.filter.overlay.popover.padding');
        display: flex;
        flex-direction: column;
        gap: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-operator-dropdown {
        width: 100%;
    }

    .p-datatable-filter-rule-list,
    .p-datatable-filter-rule {
        display: flex;
        flex-direction: column;
        gap: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-rule {
        border-block-end: 1px solid dt('datatable.filter.rule.border.color');
        padding-bottom: dt('datatable.filter.overlay.popover.gap');
    }

    .p-datatable-filter-rule:last-child {
        border-block-end: 0 none;
        padding-bottom: 0;
    }

    .p-datatable-filter-add-rule-button {
        width: 100%;
    }

    .p-datatable-filter-remove-rule-button {
        width: 100%;
    }

    .p-datatable-filter-buttonbar {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-datatable-virtualscroller-spacer {
        display: flex;
    }

    .p-datatable .p-virtualscroller .p-virtualscroller-loading {
        transform: none !important;
        min-height: 0;
        position: sticky;
        inset-block-start: 0;
        inset-inline-start: 0;
    }

    .p-datatable-paginator-top {
        border-color: dt('datatable.paginator.top.border.color');
        border-style: solid;
        border-width: dt('datatable.paginator.top.border.width');
    }

    .p-datatable-paginator-bottom {
        border-color: dt('datatable.paginator.bottom.border.color');
        border-style: solid;
        border-width: dt('datatable.paginator.bottom.border.width');
    }

    .p-datatable-header {
        background: dt('datatable.header.background');
        color: dt('datatable.header.color');
        border-color: dt('datatable.header.border.color');
        border-style: solid;
        border-width: dt('datatable.header.border.width');
        padding: dt('datatable.header.padding');
    }

    .p-datatable-footer {
        background: dt('datatable.footer.background');
        color: dt('datatable.footer.color');
        border-color: dt('datatable.footer.border.color');
        border-style: solid;
        border-width: dt('datatable.footer.border.width');
        padding: dt('datatable.footer.padding');
    }

    .p-datatable-header-cell {
        padding: dt('datatable.header.cell.padding');
        background: dt('datatable.header.cell.background');
        border-color: dt('datatable.header.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.header.cell.color');
        font-weight: normal;
        text-align: start;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-column-title {
        font-weight: dt('datatable.column.title.font.weight');
    }

    .p-datatable-tbody > tr {
        outline-color: transparent;
        background: dt('datatable.row.background');
        color: dt('datatable.row.color');
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-tbody > tr > td {
        text-align: start;
        border-color: dt('datatable.body.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        padding: dt('datatable.body.cell.padding');
    }

    .p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
        background: dt('datatable.row.hover.background');
        color: dt('datatable.row.hover.color');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    .p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {
        border-block-end-color: dt('datatable.body.cell.selected.border.color');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected > td {
        border-block-end-color: dt('datatable.body.cell.selected.border.color');
    }

    .p-datatable-tbody > tr:focus-visible,
    .p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {
        box-shadow: dt('datatable.row.focus.ring.shadow');
        outline: dt('datatable.row.focus.ring.width') dt('datatable.row.focus.ring.style') dt('datatable.row.focus.ring.color');
        outline-offset: dt('datatable.row.focus.ring.offset');
    }

    .p-datatable-tfoot > tr > td {
        text-align: start;
        padding: dt('datatable.footer.cell.padding');
        border-color: dt('datatable.footer.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.footer.cell.color');
        background: dt('datatable.footer.cell.background');
    }

    .p-datatable-column-footer {
        font-weight: dt('datatable.column.footer.font.weight');
    }

    .p-datatable-sortable-column {
        cursor: pointer;
        user-select: none;
        outline-color: transparent;
    }

    .p-datatable-column-title,
    .p-datatable-sort-icon,
    .p-datatable-sort-badge {
        vertical-align: middle;
    }

    .p-datatable-sort-icon {
        color: dt('datatable.sort.icon.color');
        font-size: dt('datatable.sort.icon.size');
        width: dt('datatable.sort.icon.size');
        height: dt('datatable.sort.icon.size');
        transition: color dt('datatable.transition.duration');
    }

    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {
        background: dt('datatable.header.cell.hover.background');
        color: dt('datatable.header.cell.hover.color');
    }

    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {
        color: dt('datatable.sort.icon.hover.color');
    }

    .p-datatable-column-sorted {
        background: dt('datatable.header.cell.selected.background');
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-column-sorted .p-datatable-sort-icon {
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-sortable-column:focus-visible {
        box-shadow: dt('datatable.header.cell.focus.ring.shadow');
        outline: dt('datatable.header.cell.focus.ring.width') dt('datatable.header.cell.focus.ring.style') dt('datatable.header.cell.focus.ring.color');
        outline-offset: dt('datatable.header.cell.focus.ring.offset');
    }

    .p-datatable-hoverable .p-datatable-selectable-row {
        cursor: pointer;
    }

    .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
        box-shadow: inset 0 2px 0 0 dt('datatable.drop.point.color');
    }

    .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
        box-shadow: inset 0 -2px 0 0 dt('datatable.drop.point.color');
    }

    .p-datatable-loading-icon {
        font-size: dt('datatable.loading.icon.size');
        width: dt('datatable.loading.icon.size');
        height: dt('datatable.loading.icon.size');
    }

    .p-datatable-gridlines .p-datatable-header {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-footer {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-paginator-top {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-paginator-bottom {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-thead > tr > th {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
        border-width: 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr > td {
        border-width: 1px 0 0 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
        border-width: 1px 1px 0 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
        border-width: 1px;
    }

    .p-datatable-gridlines .p-datatable-tfoot > tr > td {
        border-width: 1px 0 1px 1px;
    }

    .p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
        border-width: 1px 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
        border-width: 0 0 0 1px;
    }

    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
        border-width: 0 1px 0 1px;
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
        background: dt('datatable.row.striped.background');
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    .p-datatable-striped.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {
        background: dt('datatable.row.hover.background');
        color: dt('datatable.row.hover.color');
    }

    .p-datatable.p-datatable-sm .p-datatable-header {
        padding: dt('datatable.header.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
        padding: dt('datatable.body.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
        padding: dt('datatable.footer.cell.sm.padding');
    }

    .p-datatable.p-datatable-sm .p-datatable-footer {
        padding: dt('datatable.footer.sm.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-header {
        padding: dt('datatable.header.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
        padding: dt('datatable.body.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
        padding: dt('datatable.footer.cell.lg.padding');
    }

    .p-datatable.p-datatable-lg .p-datatable-footer {
        padding: dt('datatable.footer.lg.padding');
    }

    .p-datatable-row-toggle-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('datatable.row.toggle.button.size');
        height: dt('datatable.row.toggle.button.size');
        color: dt('datatable.row.toggle.button.color');
        border: 0 none;
        background: transparent;
        cursor: pointer;
        border-radius: dt('datatable.row.toggle.button.border.radius');
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
        outline-color: transparent;
        user-select: none;
    }

    .p-datatable-row-toggle-button:enabled:hover {
        color: dt('datatable.row.toggle.button.hover.color');
        background: dt('datatable.row.toggle.button.hover.background');
    }

    .p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {
        background: dt('datatable.row.toggle.button.selected.hover.background');
        color: dt('datatable.row.toggle.button.selected.hover.color');
    }

    .p-datatable-row-toggle-button:focus-visible {
        box-shadow: dt('datatable.row.toggle.button.focus.ring.shadow');
        outline: dt('datatable.row.toggle.button.focus.ring.width') dt('datatable.row.toggle.button.focus.ring.style') dt('datatable.row.toggle.button.focus.ring.color');
        outline-offset: dt('datatable.row.toggle.button.focus.ring.offset');
    }

    .p-datatable-row-toggle-icon:dir(rtl) {
        transform: rotate(180deg);
    }
`;var cR=["header"],dR=["headergrouped"],uR=["body"],pR=["loadingbody"],fR=["caption"],hR=["footer"],mR=["footergrouped"],gR=["summary"],_R=["colgroup"],yR=["expandedrow"],bR=["groupheader"],vR=["groupfooter"],CR=["frozenexpandedrow"],wR=["frozenheader"],DR=["frozenbody"],IR=["frozenfooter"],xR=["frozencolgroup"],ER=["emptymessage"],TR=["paginatorleft"],SR=["paginatorright"],MR=["paginatordropdownitem"],kR=["loadingicon"],OR=["reorderindicatorupicon"],RR=["reorderindicatordownicon"],FR=["sorticon"],AR=["checkboxicon"],NR=["headercheckboxicon"],LR=["paginatordropdownicon"],PR=["paginatorfirstpagelinkicon"],VR=["paginatorlastpagelinkicon"],BR=["paginatorpreviouspagelinkicon"],HR=["paginatornextpagelinkicon"],jR=["resizeHelper"],zR=["reorderIndicatorUp"],$R=["reorderIndicatorDown"],UR=["wrapper"],GR=["table"],WR=["thead"],qR=["tfoot"],KR=["scroller"],QR=t=>({height:t}),Ay=(t,i)=>({$implicit:t,options:i}),YR=t=>({columns:t}),wp=t=>({$implicit:t});function ZR(t,i){if(t&1&&G(0,"i"),t&2){let e=u(2);w(e.cn(e.cx("loadingIcon"),e.loadingIcon))}}function JR(t,i){if(t&1&&(N(),G(0,"svg",18)),t&2){let e=u(3);w(e.cx("loadingIcon")),p("spin",!0)}}function XR(t,i){}function eF(t,i){t&1&&_(0,XR,0,0,"ng-template")}function tF(t,i){if(t&1&&(D(0,"span"),_(1,eF,1,0,null,19),C()),t&2){let e=u(3);w(e.cx("loadingIcon")),f(),p("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function nF(t,i){if(t&1&&(z(0),_(1,JR,1,3,"svg",17)(2,tF,2,3,"span",10),$()),t&2){let e=u(2);f(),p("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),f(),p("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function iF(t,i){if(t&1&&(D(0,"div"),_(1,ZR,1,2,"i",10)(2,nF,3,2,"ng-container",14),C()),t&2){let e=u();w(e.cx("mask")),f(),p("ngIf",e.loadingIcon),f(),p("ngIf",!e.loadingIcon)}}function oF(t,i){t&1&&j(0)}function rF(t,i){if(t&1&&(D(0,"div"),_(1,oF,1,0,"ng-container",19),C()),t&2){let e=u();w(e.cx("header")),f(),p("ngTemplateOutlet",e.captionTemplate||e._captionTemplate)}}function sF(t,i){t&1&&j(0)}function aF(t,i){if(t&1&&_(0,sF,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorDropdownIconTemplate||e._paginatorDropdownIconTemplate)}}function lF(t,i){t&1&&_(0,aF,1,1,"ng-template",21)}function cF(t,i){t&1&&j(0)}function dF(t,i){if(t&1&&_(0,cF,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate)}}function uF(t,i){t&1&&_(0,dF,1,1,"ng-template",22)}function pF(t,i){t&1&&j(0)}function fF(t,i){if(t&1&&_(0,pF,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate)}}function hF(t,i){t&1&&_(0,fF,1,1,"ng-template",23)}function mF(t,i){t&1&&j(0)}function gF(t,i){if(t&1&&_(0,mF,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate)}}function _F(t,i){t&1&&_(0,gF,1,1,"ng-template",24)}function yF(t,i){t&1&&j(0)}function bF(t,i){if(t&1&&_(0,yF,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function vF(t,i){t&1&&_(0,bF,1,1,"ng-template",25)}function CF(t,i){if(t&1){let e=q();D(0,"p-paginator",20),B("onPageChange",function(o){b(e);let r=u();return v(r.onPageChange(o))}),_(1,lF,1,0,null,14)(2,uF,1,0,null,14)(3,hF,1,0,null,14)(4,_F,1,0,null,14)(5,vF,1,0,null,14),C()}if(t&2){let e=u();p("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("templateLeft",e.paginatorLeftTemplate||e._paginatorLeftTemplate)("templateRight",e.paginatorRightTemplate||e._paginatorRightTemplate)("appendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatorDropdownItemTemplate||e._paginatorDropdownItemTemplate)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showJumpToPageInput",e.showJumpToPageInput)("showPageLinks",e.showPageLinks)("styleClass",e.cx("pcPaginator")+" "+e.paginatorStyleClass&&e.paginatorStyleClass)("locale",e.paginatorLocale),f(),p("ngIf",e.paginatorDropdownIconTemplate||e._paginatorDropdownIconTemplate),f(),p("ngIf",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate),f(),p("ngIf",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate),f(),p("ngIf",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate),f(),p("ngIf",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function wF(t,i){t&1&&j(0)}function DF(t,i){if(t&1&&_(0,wF,1,0,"ng-container",27),t&2){let e=i.$implicit,n=i.options;u(2);let o=ct(8);p("ngTemplateOutlet",o)("ngTemplateOutletContext",We(2,Ay,e,n))}}function IF(t,i){if(t&1){let e=q();D(0,"p-scroller",26,2),B("onLazyLoad",function(o){b(e);let r=u();return v(r.onLazyItemLoad(o))}),_(2,DF,1,5,"ng-template",null,3,Se),C()}if(t&2){let e=u();Tt(te(15,QR,e.scrollHeight!=="flex"?e.scrollHeight:void 0)),p("items",e.processedData)("columns",e.columns)("scrollHeight",e.scrollHeight!=="flex"?void 0:"100%")("itemSize",e.virtualScrollItemSize)("step",e.rows)("delay",e.lazy?e.virtualScrollDelay:0)("inline",!0)("lazy",e.lazy)("loaderDisabled",!0)("showSpacer",!1)("showLoader",e.loadingBodyTemplate||e._loadingBodyTemplate)("options",e.virtualScrollOptions)("autoSize",!0)}}function xF(t,i){t&1&&j(0)}function EF(t,i){if(t&1&&(z(0),_(1,xF,1,0,"ng-container",27),$()),t&2){let e=u(),n=ct(8);f(),p("ngTemplateOutlet",n)("ngTemplateOutletContext",We(4,Ay,e.processedData,te(2,YR,e.columns)))}}function TF(t,i){t&1&&j(0)}function SF(t,i){t&1&&j(0)}function MF(t,i){if(t&1&&G(0,"tbody",34),t&2){let e=u().options,n=u();w(n.cx("tbody")),p("value",n.frozenValue)("frozenRows",!0)("pTableBody",e.columns)("pTableBodyTemplate",n.frozenBodyTemplate||n._frozenBodyTemplate)("frozen",!0)}}function kF(t,i){if(t&1&&G(0,"tbody",35),t&2){let e=u().options,n=u();Tt("height: calc("+e.spacerStyle.height+" - "+e.rows.length*e.itemSize+"px);"),w(n.cx("virtualScrollerSpacer"))}}function OF(t,i){t&1&&j(0)}function RF(t,i){if(t&1&&(D(0,"tfoot",36,6),_(2,OF,1,0,"ng-container",27),C()),t&2){let e=u().options,n=u();p("ngClass",n.cx("footer"))("ngStyle",n.sx("tfoot")),f(2),p("ngTemplateOutlet",n.footerGroupedTemplate||n.footerTemplate||n._footerTemplate||n._footerGroupedTemplate)("ngTemplateOutletContext",te(4,wp,e.columns))}}function FF(t,i){if(t&1&&(D(0,"table",28,4),_(2,TF,1,0,"ng-container",27),D(3,"thead",29,5),_(5,SF,1,0,"ng-container",27),C(),_(6,MF,1,7,"tbody",30),G(7,"tbody",31),_(8,kF,1,4,"tbody",32)(9,RF,3,6,"tfoot",33),C()),t&2){let e=i.options,n=u();Tt(n.tableStyle),w(n.cn(n.cx("table"),n.tableStyleClass)),k("id",n.id+"-table"),f(2),p("ngTemplateOutlet",n.colGroupTemplate||n._colGroupTemplate)("ngTemplateOutletContext",te(23,wp,e.columns)),f(),w(n.cx("thead")),p("ngStyle",n.sx("thead")),f(2),p("ngTemplateOutlet",n.headerGroupedTemplate||n.headerTemplate||n._headerTemplate)("ngTemplateOutletContext",te(25,wp,e.columns)),f(),p("ngIf",n.frozenValue||n.frozenBodyTemplate||n._frozenBodyTemplate),f(),Tt(e.contentStyle),w(n.cx("tbody",e.contentStyleClass)),p("value",n.dataToRender(e.rows))("pTableBody",e.columns)("pTableBodyTemplate",n.bodyTemplate||n._bodyTemplate)("scrollerOptions",e),f(),p("ngIf",e.spacerStyle),f(),p("ngIf",n.footerGroupedTemplate||n.footerTemplate||n._footerTemplate||n._footerGroupedTemplate)}}function AF(t,i){t&1&&j(0)}function NF(t,i){if(t&1&&_(0,AF,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorDropdownIconTemplate||e._paginatorDropdownIconTemplate)}}function LF(t,i){t&1&&_(0,NF,1,1,"ng-template",21)}function PF(t,i){t&1&&j(0)}function VF(t,i){if(t&1&&_(0,PF,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate)}}function BF(t,i){t&1&&_(0,VF,1,1,"ng-template",22)}function HF(t,i){t&1&&j(0)}function jF(t,i){if(t&1&&_(0,HF,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate)}}function zF(t,i){t&1&&_(0,jF,1,1,"ng-template",23)}function $F(t,i){t&1&&j(0)}function UF(t,i){if(t&1&&_(0,$F,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate)}}function GF(t,i){t&1&&_(0,UF,1,1,"ng-template",24)}function WF(t,i){t&1&&j(0)}function qF(t,i){if(t&1&&_(0,WF,1,0,"ng-container",19),t&2){let e=u(3);p("ngTemplateOutlet",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function KF(t,i){t&1&&_(0,qF,1,1,"ng-template",25)}function QF(t,i){if(t&1){let e=q();D(0,"p-paginator",20),B("onPageChange",function(o){b(e);let r=u();return v(r.onPageChange(o))}),_(1,LF,1,0,null,14)(2,BF,1,0,null,14)(3,zF,1,0,null,14)(4,GF,1,0,null,14)(5,KF,1,0,null,14),C()}if(t&2){let e=u();p("rows",e.rows)("first",e.first)("totalRecords",e.totalRecords)("pageLinkSize",e.pageLinks)("alwaysShow",e.alwaysShowPaginator)("rowsPerPageOptions",e.rowsPerPageOptions)("templateLeft",e.paginatorLeftTemplate||e._paginatorLeftTemplate)("templateRight",e.paginatorRightTemplate||e._paginatorRightTemplate)("appendTo",e.paginatorDropdownAppendTo)("dropdownScrollHeight",e.paginatorDropdownScrollHeight)("currentPageReportTemplate",e.currentPageReportTemplate)("showFirstLastIcon",e.showFirstLastIcon)("dropdownItemTemplate",e.paginatorDropdownItemTemplate||e._paginatorDropdownItemTemplate)("showCurrentPageReport",e.showCurrentPageReport)("showJumpToPageDropdown",e.showJumpToPageDropdown)("showJumpToPageInput",e.showJumpToPageInput)("showPageLinks",e.showPageLinks)("styleClass",e.cx("pcPaginator")+" "+e.paginatorStyleClass&&e.paginatorStyleClass)("locale",e.paginatorLocale),f(),p("ngIf",e.paginatorDropdownIconTemplate||e._paginatorDropdownIconTemplate),f(),p("ngIf",e.paginatorFirstPageLinkIconTemplate||e._paginatorFirstPageLinkIconTemplate),f(),p("ngIf",e.paginatorPreviousPageLinkIconTemplate||e._paginatorPreviousPageLinkIconTemplate),f(),p("ngIf",e.paginatorLastPageLinkIconTemplate||e._paginatorLastPageLinkIconTemplate),f(),p("ngIf",e.paginatorNextPageLinkIconTemplate||e._paginatorNextPageLinkIconTemplate)}}function YF(t,i){t&1&&j(0)}function ZF(t,i){if(t&1&&(D(0,"div",37),_(1,YF,1,0,"ng-container",19),C()),t&2){let e=u();p("ngClass",e.cx("footer")),f(),p("ngTemplateOutlet",e.summaryTemplate||e._summaryTemplate)}}function JF(t,i){if(t&1&&G(0,"div",37,7),t&2){let e=u();St("display","none"),p("ngClass",e.cx("columnResizeIndicator"))}}function XF(t,i){t&1&&(N(),G(0,"svg",39))}function eA(t,i){}function tA(t,i){t&1&&_(0,eA,0,0,"ng-template")}function nA(t,i){if(t&1&&(D(0,"span",37,8),_(2,XF,1,0,"svg",38)(3,tA,1,0,null,19),C()),t&2){let e=u();St("display","none"),p("ngClass",e.cx("rowReorderIndicatorUp")),f(2),p("ngIf",!e.reorderIndicatorUpIconTemplate&&!e._reorderIndicatorUpIconTemplate),f(),p("ngTemplateOutlet",e.reorderIndicatorUpIconTemplate||e._reorderIndicatorUpIconTemplate)}}function iA(t,i){t&1&&(N(),G(0,"svg",41))}function oA(t,i){}function rA(t,i){t&1&&_(0,oA,0,0,"ng-template")}function sA(t,i){if(t&1&&(D(0,"span",37,9),_(2,iA,1,0,"svg",40)(3,rA,1,0,null,19),C()),t&2){let e=u();St("display","none"),p("ngClass",e.cx("rowReorderIndicatorDown")),f(2),p("ngIf",!e.reorderIndicatorDownIconTemplate&&!e._reorderIndicatorDownIconTemplate),f(),p("ngTemplateOutlet",e.reorderIndicatorDownIconTemplate||e._reorderIndicatorDownIconTemplate)}}var aA=["pTableBody",""],xp=(t,i,e,n,o)=>({$implicit:t,rowIndex:i,columns:e,editing:n,frozen:o}),lA=(t,i,e,n,o,r,s)=>({$implicit:t,rowIndex:i,columns:e,editing:n,frozen:o,rowgroup:r,rowspan:s}),xl=(t,i,e,n,o,r)=>({$implicit:t,rowIndex:i,columns:e,expanded:n,editing:o,frozen:r}),Ny=(t,i,e,n)=>({$implicit:t,rowIndex:i,columns:e,frozen:n}),Ly=(t,i)=>({$implicit:t,frozen:i});function cA(t,i){t&1&&j(0)}function dA(t,i){if(t&1&&(z(0,3),_(1,cA,1,0,"ng-container",4),$()),t&2){let e=u(),n=e.$implicit,o=e.index,r=u(2);f(),p("ngTemplateOutlet",r.dt.groupHeaderTemplate||r.dt._groupHeaderTemplate)("ngTemplateOutletContext",Mr(2,xp,n,r.getRowIndex(o),r.columns,r.dt.editMode==="row"&&r.dt.isRowEditing(n),r.frozen))}}function uA(t,i){t&1&&j(0)}function pA(t,i){if(t&1&&(z(0),_(1,uA,1,0,"ng-container",4),$()),t&2){let e=u(),n=e.$implicit,o=e.index,r=u(2);f(),p("ngTemplateOutlet",n?r.template:r.dt.loadingBodyTemplate||r.dt._loadingBodyTemplate)("ngTemplateOutletContext",Mr(2,xp,n,r.getRowIndex(o),r.columns,r.dt.editMode==="row"&&r.dt.isRowEditing(n),r.frozen))}}function fA(t,i){t&1&&j(0)}function hA(t,i){if(t&1&&(z(0),_(1,fA,1,0,"ng-container",4),$()),t&2){let e=u(),n=e.$implicit,o=e.index,r=u(2);f(),p("ngTemplateOutlet",n?r.template:r.dt.loadingBodyTemplate||r.dt._loadingBodyTemplate)("ngTemplateOutletContext",bu(2,lA,n,r.getRowIndex(o),r.columns,r.dt.editMode==="row"&&r.dt.isRowEditing(n),r.frozen,r.shouldRenderRowspan(r.value,n,o),r.calculateRowGroupSize(r.value,n,o)))}}function mA(t,i){t&1&&j(0)}function gA(t,i){if(t&1&&(z(0,3),_(1,mA,1,0,"ng-container",4),$()),t&2){let e=u(),n=e.$implicit,o=e.index,r=u(2);f(),p("ngTemplateOutlet",r.dt.groupFooterTemplate||r.dt._groupFooterTemplate)("ngTemplateOutletContext",Mr(2,xp,n,r.getRowIndex(o),r.columns,r.dt.editMode==="row"&&r.dt.isRowEditing(n),r.frozen))}}function _A(t,i){if(t&1&&_(0,dA,2,8,"ng-container",2)(1,pA,2,8,"ng-container",0)(2,hA,2,10,"ng-container",0)(3,gA,2,8,"ng-container",2),t&2){let e=i.$implicit,n=i.index,o=u(2);p("ngIf",(o.dt.groupHeaderTemplate||o.dt._groupHeaderTemplate)&&!o.dt.virtualScroll&&o.dt.rowGroupMode==="subheader"&&o.shouldRenderRowGroupHeader(o.value,e,o.getRowIndex(n))),f(),p("ngIf",o.dt.rowGroupMode!=="rowspan"),f(),p("ngIf",o.dt.rowGroupMode==="rowspan"),f(),p("ngIf",(o.dt.groupFooterTemplate||o.dt._groupFooterTemplate)&&!o.dt.virtualScroll&&o.dt.rowGroupMode==="subheader"&&o.shouldRenderRowGroupFooter(o.value,e,o.getRowIndex(n)))}}function yA(t,i){if(t&1&&(z(0),_(1,_A,4,4,"ng-template",1),$()),t&2){let e=u();f(),p("ngForOf",e.value)("ngForTrackBy",e.dt.rowTrackBy)}}function bA(t,i){t&1&&j(0)}function vA(t,i){if(t&1&&(z(0),_(1,bA,1,0,"ng-container",4),$()),t&2){let e=u(),n=e.$implicit,o=e.index,r=u(2);f(),p("ngTemplateOutlet",r.template)("ngTemplateOutletContext",So(2,xl,n,r.getRowIndex(o),r.columns,r.dt.isRowExpanded(n),r.dt.editMode==="row"&&r.dt.isRowEditing(n),r.frozen))}}function CA(t,i){t&1&&j(0)}function wA(t,i){if(t&1&&(z(0,3),_(1,CA,1,0,"ng-container",4),$()),t&2){let e=u(),n=e.$implicit,o=e.index,r=u(2);f(),p("ngTemplateOutlet",r.dt.groupHeaderTemplate||r.dt._groupHeaderTemplate)("ngTemplateOutletContext",So(2,xl,n,r.getRowIndex(o),r.columns,r.dt.isRowExpanded(n),r.dt.editMode==="row"&&r.dt.isRowEditing(n),r.frozen))}}function DA(t,i){t&1&&j(0)}function IA(t,i){t&1&&j(0)}function xA(t,i){if(t&1&&(z(0,3),_(1,IA,1,0,"ng-container",4),$()),t&2){let e=u(2),n=e.$implicit,o=e.index,r=u(2);f(),p("ngTemplateOutlet",r.dt.groupFooterTemplate||r.dt._groupFooterTemplate)("ngTemplateOutletContext",So(2,xl,n,r.getRowIndex(o),r.columns,r.dt.isRowExpanded(n),r.dt.editMode==="row"&&r.dt.isRowEditing(n),r.frozen))}}function EA(t,i){if(t&1&&(z(0),_(1,DA,1,0,"ng-container",4)(2,xA,2,9,"ng-container",2),$()),t&2){let e=u(),n=e.$implicit,o=e.index,r=u(2);f(),p("ngTemplateOutlet",r.dt.expandedRowTemplate||r.dt._expandedRowTemplate)("ngTemplateOutletContext",Ga(3,Ny,n,r.getRowIndex(o),r.columns,r.frozen)),f(),p("ngIf",(r.dt.groupFooterTemplate||r.dt._groupFooterTemplate)&&r.dt.rowGroupMode==="subheader"&&r.shouldRenderRowGroupFooter(r.value,n,r.getRowIndex(o)))}}function TA(t,i){if(t&1&&_(0,vA,2,9,"ng-container",0)(1,wA,2,9,"ng-container",2)(2,EA,3,8,"ng-container",0),t&2){let e=i.$implicit,n=i.index,o=u(2);p("ngIf",!(o.dt.groupHeaderTemplate&&o.dt._groupHeaderTemplate)),f(),p("ngIf",(o.dt.groupHeaderTemplate||o.dt._groupHeaderTemplate)&&o.dt.rowGroupMode==="subheader"&&o.shouldRenderRowGroupHeader(o.value,e,o.getRowIndex(n))),f(),p("ngIf",o.dt.isRowExpanded(e))}}function SA(t,i){if(t&1&&(z(0),_(1,TA,3,3,"ng-template",1),$()),t&2){let e=u();f(),p("ngForOf",e.value)("ngForTrackBy",e.dt.rowTrackBy)}}function MA(t,i){t&1&&j(0)}function kA(t,i){t&1&&j(0)}function OA(t,i){if(t&1&&(z(0),_(1,kA,1,0,"ng-container",4),$()),t&2){let e=u(),n=e.$implicit,o=e.index,r=u(2);f(),p("ngTemplateOutlet",r.dt.frozenExpandedRowTemplate||r.dt._frozenExpandedRowTemplate)("ngTemplateOutletContext",Ga(2,Ny,n,r.getRowIndex(o),r.columns,r.frozen))}}function RA(t,i){if(t&1&&_(0,MA,1,0,"ng-container",4)(1,OA,2,7,"ng-container",0),t&2){let e=i.$implicit,n=i.index,o=u(2);p("ngTemplateOutlet",o.template)("ngTemplateOutletContext",So(3,xl,e,o.getRowIndex(n),o.columns,o.dt.isRowExpanded(e),o.dt.editMode==="row"&&o.dt.isRowEditing(e),o.frozen)),f(),p("ngIf",o.dt.isRowExpanded(e))}}function FA(t,i){if(t&1&&(z(0),_(1,RA,2,10,"ng-template",1),$()),t&2){let e=u();f(),p("ngForOf",e.value)("ngForTrackBy",e.dt.rowTrackBy)}}function AA(t,i){t&1&&j(0)}function NA(t,i){if(t&1&&(z(0),_(1,AA,1,0,"ng-container",4),$()),t&2){let e=u();f(),p("ngTemplateOutlet",e.dt.loadingBodyTemplate||e.dt._loadingBodyTemplate)("ngTemplateOutletContext",We(2,Ly,e.columns,e.frozen))}}function LA(t,i){t&1&&j(0)}function PA(t,i){if(t&1&&(z(0),_(1,LA,1,0,"ng-container",4),$()),t&2){let e=u();f(),p("ngTemplateOutlet",e.dt.emptyMessageTemplate||e.dt._emptyMessageTemplate)("ngTemplateOutletContext",We(2,Ly,e.columns,e.frozen))}}var VA=`
    ${Fy}

    /* For PrimeNG */
    .p-datatable-scrollable-table > .p-datatable-thead {
        top: 0;
        z-index: 2;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 2;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody + .p-datatable-frozen-tbody {
        z-index: 1;
    }

    .p-datatable-scrollable > tr:not(:has(.p-datatable-selectable-row)) > .p-datatable-frozen-column {
        position: sticky;
        background: dt('datatable.header.cell.background');
    }

    .p-datatable-scrollable th.p-datatable-frozen-column {
        z-index: 1;
        position: sticky;
        background: dt('datatable.header.cell.background');
    }
    .p-datatable-scrollable td.p-datatable-frozen-column {
        z-index: 1;
        position: sticky;
        background: dt('datatable.header.cell.background');
    }

    .p-datatable-mask {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
    }

    .p-datatable-filter-overlay {
        position: absolute;
        background: dt('datatable.filter.overlay.select.background');
        color: dt('datatable.filter.overlay.select.color');
        border: 1px solid dt('datatable.filter.overlay.select.border.color');
        border-radius: dt('datatable.filter.overlay.select.border.radius');
        box-shadow: dt('datatable.filter.overlay.select.shadow');
        min-width: 12.5rem;
    }

    .p-datatable-filter-rule {
        border-bottom: 1px solid dt('datatable.filter.rule.border.color');
    }

    .p-datatable-filter-rule:last-child {
        border-bottom: 0 none;
    }

    .p-datatable-filter-add-rule-button,
    .p-datatable-filter-remove-rule-button {
        width: 100%;
    }

    .p-datatable-filter-remove-button {
        width: 100%;
    }

    .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.padding');
        background: dt('datatable.header.cell.background');
        border-color: dt('datatable.header.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.header.cell.color');
        font-weight: dt('datatable.column.title.font.weight');
        text-align: start;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-thead > tr > th p-columnfilter {
        font-weight: normal;
    }

    .p-datatable-thead > tr > th,
    .p-datatable-sort-icon,
    .p-datatable-sort-badge {
        vertical-align: middle;
    }

    .p-datatable-thead > tr > th.p-datatable-column-sorted {
        background: dt('datatable.header.cell.selected.background');
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-thead > tr > th.p-datatable-column-sorted .p-datatable-sort-icon {
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd) {
        background: dt('datatable.row.striped.background');
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd).p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    p-sortIcon, p-sort-icon, p-sorticon {
        display: inline-flex;
        align-items: center;
        gap: dt('datatable.header.cell.gap');
    }

    .p-datatable .p-editable-column.p-cell-editing {
        padding: 0;
    }

    .p-datatable .p-editable-column.p-cell-editing p-celleditor {
        display: block;
        width: 100%;
    }
`,BA={root:({instance:t})=>["p-datatable p-component",{"p-datatable-hoverable":t.rowHover||t.selectionMode,"p-datatable-resizable":t.resizableColumns,"p-datatable-resizable-fit":t.resizableColumns&&t.columnResizeMode==="fit","p-datatable-scrollable":t.scrollable,"p-datatable-flex-scrollable":t.scrollable&&t.scrollHeight==="flex","p-datatable-striped":t.stripedRows,"p-datatable-gridlines":t.showGridlines,"p-datatable-sm":t.size==="small","p-datatable-lg":t.size==="large"}],mask:"p-datatable-mask p-overlay-mask",loadingIcon:"p-datatable-loading-icon",header:"p-datatable-header",pcPaginator:({instance:t})=>"p-datatable-paginator-"+t.paginatorPosition,tableContainer:"p-datatable-table-container",table:({instance:t})=>["p-datatable-table",{"p-datatable-scrollable-table":t.scrollable,"p-datatable-resizable-table":t.resizableColumns,"p-datatable-resizable-table-fit":t.resizableColumns&&t.columnResizeMode==="fit"}],thead:"p-datatable-thead",columnResizer:"p-datatable-column-resizer",columnHeaderContent:"p-datatable-column-header-content",columnTitle:"p-datatable-column-title",columnFooter:"p-datatable-column-footer",sortIcon:"p-datatable-sort-icon",pcSortBadge:"p-datatable-sort-badge",filter:({instance:t})=>({"p-datatable-filter":!0,"p-datatable-inline-filter":t.display==="row","p-datatable-popover-filter":t.display==="menu"}),filterElementContainer:"p-datatable-filter-element-container",pcColumnFilterButton:"p-datatable-column-filter-button",pcColumnFilterClearButton:"p-datatable-column-filter-clear-button",filterOverlay:({instance:t})=>({"p-datatable-filter-overlay p-component":!0,"p-datatable-filter-overlay-popover":t.display==="menu"}),filterConstraintList:"p-datatable-filter-constraint-list",filterConstraint:"p-datatable-filter-constraint",filterConstraintSeparator:"p-datatable-filter-constraint-separator",filterOperator:"p-datatable-filter-operator",pcFilterOperatorDropdown:"p-datatable-filter-operator-dropdown",filterRuleList:"p-datatable-filter-rule-list",filterRule:"p-datatable-filter-rule",pcFilterConstraintDropdown:"p-datatable-filter-constraint-dropdown",pcFilterRemoveRuleButton:"p-datatable-filter-remove-rule-button",pcFilterAddRuleButton:"p-datatable-filter-add-rule-button",filterButtonbar:"p-datatable-filter-buttonbar",pcFilterClearButton:"p-datatable-filter-clear-button",pcFilterApplyButton:"p-datatable-filter-apply-button",tbody:({instance:t})=>({"p-datatable-tbody":!0,"p-datatable-frozen-tbody":t.frozenValue||t.frozenBodyTemplate,"p-virtualscroller-content":t.virtualScroll}),rowGroupHeader:"p-datatable-row-group-header",rowToggleButton:"p-datatable-row-toggle-button",rowToggleIcon:"p-datatable-row-toggle-icon",rowExpansion:"p-datatable-row-expansion",rowGroupFooter:"p-datatable-row-group-footer",emptyMessage:"p-datatable-empty-message",bodyCell:({instance:t})=>({"p-datatable-frozen-column":t.columnProp("frozen")}),reorderableRowHandle:"p-datatable-reorderable-row-handle",pcRowEditorInit:"p-datatable-row-editor-init",pcRowEditorSave:"p-datatable-row-editor-save",pcRowEditorCancel:"p-datatable-row-editor-cancel",tfoot:"p-datatable-tfoot",footerCell:({instance:t})=>({"p-datatable-frozen-column":t.columnProp("frozen")}),virtualScrollerSpacer:"p-datatable-virtualscroller-spacer",footer:"p-datatable-tfoot",columnResizeIndicator:"p-datatable-column-resize-indicator",rowReorderIndicatorUp:"p-datatable-row-reorder-indicator-up",rowReorderIndicatorDown:"p-datatable-row-reorder-indicator-down",sortableColumn:({instance:t})=>({"p-datatable-sortable-column":t.isEnabled()," p-datatable-column-sorted":t.sorted}),sortableColumnIcon:"p-datatable-sort-icon",sortableColumnBadge:"p-sortable-column-badge",selectableRow:({instance:t})=>({"p-datatable-selectable-row":t.isEnabled(),"p-datatable-row-selected":t.selected}),resizableColumn:"p-datatable-resizable-column",reorderableColumn:"p-datatable-reorderable-column",rowEditorCancel:"p-datatable-row-editor-cancel"},HA={tableContainer:({instance:t})=>({"max-height":t.virtualScroll?"":t.scrollHeight,overflow:"auto"}),thead:{position:"sticky"},tfoot:{position:"sticky"}},Dp=(()=>{class t extends le{name="datatable";theme=VA;classes=BA;inlineStyles=HA;static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})();var Ip=(()=>{class t{sortSource=new Ke;selectionSource=new Ke;contextMenuSource=new Ke;valueSource=new Ke;columnsSource=new Ke;sortSource$=this.sortSource.asObservable();selectionSource$=this.selectionSource.asObservable();contextMenuSource$=this.contextMenuSource.asObservable();valueSource$=this.valueSource.asObservable();columnsSource$=this.columnsSource.asObservable();onSort(e){this.sortSource.next(e)}onSelectionChange(){this.selectionSource.next(null)}onContextMenu(e){this.contextMenuSource.next(e)}onValueChange(e){this.valueSource.next(e)}onColumnsChange(e){this.columnsSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=V({token:t,factory:t.\u0275fac})}return t})(),Ep=(()=>{class t extends ke{frozenColumns;frozenValue;styleClass;tableStyle;tableStyleClass;paginator;pageLinks=5;rowsPerPageOptions;alwaysShowPaginator=!0;paginatorPosition="bottom";paginatorStyleClass;paginatorDropdownAppendTo;paginatorDropdownScrollHeight="200px";currentPageReportTemplate="{currentPage} of {totalPages}";showCurrentPageReport;showJumpToPageDropdown;showJumpToPageInput;showFirstLastIcon=!0;showPageLinks=!0;defaultSortOrder=1;sortMode="single";resetPageOnSort=!0;selectionMode;selectionPageOnly;contextMenuSelection;contextMenuSelectionChange=new A;contextMenuSelectionMode="separate";dataKey;metaKeySelection=!1;rowSelectable;rowTrackBy=(e,n)=>n;lazy=!1;lazyLoadOnInit=!0;compareSelectionBy="deepEquals";csvSeparator=",";exportFilename="download";filters={};globalFilterFields;filterDelay=300;filterLocale;expandedRowKeys={};editingRowKeys={};rowExpandMode="multiple";scrollable;rowGroupMode;scrollHeight;virtualScroll;virtualScrollItemSize;virtualScrollOptions;virtualScrollDelay=250;frozenWidth;contextMenu;resizableColumns;columnResizeMode="fit";reorderableColumns;loading;loadingIcon;showLoader=!0;rowHover;customSort;showInitialSortBadge=!0;exportFunction;exportHeader;stateKey;stateStorage="session";editMode="cell";groupRowsBy;size;showGridlines;stripedRows;groupRowsByOrder=1;responsiveLayout="scroll";breakpoint="960px";paginatorLocale;get value(){return this._value}set value(e){this._value=e}get columns(){return this._columns}set columns(e){this._columns=e}get first(){return this._first}set first(e){this._first=e}get rows(){return this._rows}set rows(e){this._rows=e}totalRecords=0;get sortField(){return this._sortField}set sortField(e){this._sortField=e}get sortOrder(){return this._sortOrder}set sortOrder(e){this._sortOrder=e}get multiSortMeta(){return this._multiSortMeta}set multiSortMeta(e){this._multiSortMeta=e}get selection(){return this._selection}set selection(e){this._selection=e}get selectAll(){return this._selection}set selectAll(e){this._selection=e}selectAllChange=new A;selectionChange=new A;onRowSelect=new A;onRowUnselect=new A;onPage=new A;onSort=new A;onFilter=new A;onLazyLoad=new A;onRowExpand=new A;onRowCollapse=new A;onContextMenuSelect=new A;onColResize=new A;onColReorder=new A;onRowReorder=new A;onEditInit=new A;onEditComplete=new A;onEditCancel=new A;onHeaderCheckboxToggle=new A;sortFunction=new A;firstChange=new A;rowsChange=new A;onStateSave=new A;onStateRestore=new A;resizeHelperViewChild;reorderIndicatorUpViewChild;reorderIndicatorDownViewChild;wrapperViewChild;tableViewChild;tableHeaderViewChild;tableFooterViewChild;scroller;_templates;_value=[];_columns;_totalRecords=0;_first=0;_rows;filteredValue;_headerTemplate;headerTemplate;_headerGroupedTemplate;headerGroupedTemplate;_bodyTemplate;bodyTemplate;_loadingBodyTemplate;loadingBodyTemplate;_captionTemplate;captionTemplate;_footerTemplate;footerTemplate;_footerGroupedTemplate;footerGroupedTemplate;_summaryTemplate;summaryTemplate;_colGroupTemplate;colGroupTemplate;_expandedRowTemplate;expandedRowTemplate;_groupHeaderTemplate;groupHeaderTemplate;_groupFooterTemplate;groupFooterTemplate;_frozenExpandedRowTemplate;frozenExpandedRowTemplate;_frozenHeaderTemplate;frozenHeaderTemplate;_frozenBodyTemplate;frozenBodyTemplate;_frozenFooterTemplate;frozenFooterTemplate;_frozenColGroupTemplate;frozenColGroupTemplate;_emptyMessageTemplate;emptyMessageTemplate;_paginatorLeftTemplate;paginatorLeftTemplate;_paginatorRightTemplate;paginatorRightTemplate;_paginatorDropdownItemTemplate;paginatorDropdownItemTemplate;_loadingIconTemplate;loadingIconTemplate;_reorderIndicatorUpIconTemplate;reorderIndicatorUpIconTemplate;_reorderIndicatorDownIconTemplate;reorderIndicatorDownIconTemplate;_sortIconTemplate;sortIconTemplate;_checkboxIconTemplate;checkboxIconTemplate;_headerCheckboxIconTemplate;headerCheckboxIconTemplate;_paginatorDropdownIconTemplate;paginatorDropdownIconTemplate;_paginatorFirstPageLinkIconTemplate;paginatorFirstPageLinkIconTemplate;_paginatorLastPageLinkIconTemplate;paginatorLastPageLinkIconTemplate;_paginatorPreviousPageLinkIconTemplate;paginatorPreviousPageLinkIconTemplate;_paginatorNextPageLinkIconTemplate;paginatorNextPageLinkIconTemplate;selectionKeys={};lastResizerHelperX;reorderIconWidth;reorderIconHeight;draggedColumn;draggedRowIndex;droppedRowIndex;rowDragging;dropPosition;editingCell;editingCellData;editingCellField;editingCellRowIndex;selfClick;documentEditListener;_multiSortMeta;_sortField;_sortOrder=1;preventSelectionSetterPropagation;_selection;_selectAll=null;anchorRowIndex;rangeRowIndex;filterTimeout;initialized;rowTouched;restoringSort;restoringFilter;stateRestored;columnOrderStateRestored;columnWidthsState;tableWidthState;overlaySubscription;resizeColumnElement;columnResizing=!1;rowGroupHeaderStyleObject={};id=$_();styleElement;responsiveStyleElement;overlayService=M(Ao);filterService=M(fl);tableService=M(Ip);zone=M(we);_componentStyle=M(Dp);ngOnInit(){super.ngOnInit(),this.lazy&&this.lazyLoadOnInit&&(this.virtualScroll||this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.restoringFilter&&(this.restoringFilter=!1)),this.responsiveLayout==="stack"&&this.createResponsiveStyle(),this.initialized=!0}ngAfterContentInit(){this._templates.forEach(e=>{switch(e.getType()){case"caption":this.captionTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"headergrouped":this.headerGroupedTemplate=e.template;break;case"body":this.bodyTemplate=e.template;break;case"loadingbody":this.loadingBodyTemplate=e.template;break;case"footer":this.footerTemplate=e.template;break;case"footergrouped":this.footerGroupedTemplate=e.template;break;case"summary":this.summaryTemplate=e.template;break;case"colgroup":this.colGroupTemplate=e.template;break;case"expandedrow":this.expandedRowTemplate=e.template;break;case"groupheader":this.groupHeaderTemplate=e.template;break;case"groupfooter":this.groupFooterTemplate=e.template;break;case"frozenheader":this.frozenHeaderTemplate=e.template;break;case"frozenbody":this.frozenBodyTemplate=e.template;break;case"frozenfooter":this.frozenFooterTemplate=e.template;break;case"frozencolgroup":this.frozenColGroupTemplate=e.template;break;case"frozenexpandedrow":this.frozenExpandedRowTemplate=e.template;break;case"emptymessage":this.emptyMessageTemplate=e.template;break;case"paginatorleft":this.paginatorLeftTemplate=e.template;break;case"paginatorright":this.paginatorRightTemplate=e.template;break;case"paginatordropdownicon":this.paginatorDropdownIconTemplate=e.template;break;case"paginatordropdownitem":this.paginatorDropdownItemTemplate=e.template;break;case"paginatorfirstpagelinkicon":this.paginatorFirstPageLinkIconTemplate=e.template;break;case"paginatorlastpagelinkicon":this.paginatorLastPageLinkIconTemplate=e.template;break;case"paginatorpreviouspagelinkicon":this.paginatorPreviousPageLinkIconTemplate=e.template;break;case"paginatornextpagelinkicon":this.paginatorNextPageLinkIconTemplate=e.template;break;case"loadingicon":this.loadingIconTemplate=e.template;break;case"reorderindicatorupicon":this.reorderIndicatorUpIconTemplate=e.template;break;case"reorderindicatordownicon":this.reorderIndicatorDownIconTemplate=e.template;break;case"sorticon":this.sortIconTemplate=e.template;break;case"checkboxicon":this.checkboxIconTemplate=e.template;break;case"headercheckboxicon":this.headerCheckboxIconTemplate=e.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),_t(this.platformId)&&this.isStateful()&&this.resizableColumns&&this.restoreColumnWidths()}ngOnChanges(e){super.ngOnChanges(e),e.totalRecords&&e.totalRecords.firstChange&&(this._totalRecords=e.totalRecords.currentValue),e.value&&(this.isStateful()&&!this.stateRestored&&_t(this.platformId)&&this.restoreState(),this._value=e.value.currentValue,this.lazy||(this.totalRecords=this._totalRecords===0&&this._value?this._value.length:this._totalRecords??0,this.sortMode=="single"&&(this.sortField||this.groupRowsBy)?this.sortSingle():this.sortMode=="multiple"&&(this.multiSortMeta||this.groupRowsBy)?this.sortMultiple():this.hasFilter()&&this._filter()),this.tableService.onValueChange(e.value.currentValue)),e.columns&&(this.isStateful()||(this._columns=e.columns.currentValue,this.tableService.onColumnsChange(e.columns.currentValue)),this._columns&&this.isStateful()&&this.reorderableColumns&&!this.columnOrderStateRestored&&(this.restoreColumnOrder(),this.tableService.onColumnsChange(this._columns))),e.sortField&&(this._sortField=e.sortField.currentValue,(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle()),e.groupRowsBy&&(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle(),e.sortOrder&&(this._sortOrder=e.sortOrder.currentValue,(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle()),e.groupRowsByOrder&&(!this.lazy||this.initialized)&&this.sortMode==="single"&&this.sortSingle(),e.multiSortMeta&&(this._multiSortMeta=e.multiSortMeta.currentValue,this.sortMode==="multiple"&&(this.initialized||!this.lazy&&!this.virtualScroll)&&this.sortMultiple()),e.selection&&(this._selection=e.selection.currentValue,this.preventSelectionSetterPropagation||(this.updateSelectionKeys(),this.tableService.onSelectionChange()),this.preventSelectionSetterPropagation=!1),e.selectAll&&(this._selectAll=e.selectAll.currentValue,this.preventSelectionSetterPropagation||(this.updateSelectionKeys(),this.tableService.onSelectionChange(),this.isStateful()&&this.saveState()),this.preventSelectionSetterPropagation=!1)}get processedData(){return this.filteredValue||this.value||[]}_initialColWidths;dataToRender(e){let n=e||this.processedData;if(n&&this.paginator){let o=this.lazy?0:this.first;return n.slice(o,o+this.rows)}return n}updateSelectionKeys(){if(this.dataKey&&this._selection)if(this.selectionKeys={},Array.isArray(this._selection))for(let e of this._selection)this.selectionKeys[String(se.resolveFieldData(e,this.dataKey))]=1;else this.selectionKeys[String(se.resolveFieldData(this._selection,this.dataKey))]=1}onPageChange(e){this.first=e.first,this.rows=e.rows,this.onPage.emit({first:this.first,rows:this.rows}),this.lazy&&this.onLazyLoad.emit(this.createLazyLoadMetadata()),this.firstChange.emit(this.first),this.rowsChange.emit(this.rows),this.tableService.onValueChange(this.value),this.isStateful()&&this.saveState(),this.anchorRowIndex=null,this.scrollable&&this.resetScrollTop()}sort(e){let n=e.originalEvent;if(this.sortMode==="single"&&(this._sortOrder=this.sortField===e.field?this.sortOrder*-1:this.defaultSortOrder,this._sortField=e.field,this.resetPageOnSort&&(this._first=0,this.firstChange.emit(this._first),this.scrollable&&this.resetScrollTop()),this.sortSingle()),this.sortMode==="multiple"){let o=n.metaKey||n.ctrlKey,r=this.getSortMeta(e.field);r?o?r.order=r.order*-1:(this._multiSortMeta=[{field:e.field,order:r.order*-1}],this.resetPageOnSort&&(this._first=0,this.firstChange.emit(this._first),this.scrollable&&this.resetScrollTop())):((!o||!this.multiSortMeta)&&(this._multiSortMeta=[],this.resetPageOnSort&&(this._first=0,this.firstChange.emit(this._first))),this._multiSortMeta.push({field:e.field,order:this.defaultSortOrder})),this.sortMultiple()}this.isStateful()&&this.saveState(),this.anchorRowIndex=null}sortSingle(){let e=this.sortField||this.groupRowsBy,n=this.sortField?this.sortOrder:this.groupRowsByOrder;if(this.groupRowsBy&&this.sortField&&this.groupRowsBy!==this.sortField){this._multiSortMeta=[this.getGroupRowsMeta(),{field:this.sortField,order:this.sortOrder}],this.sortMultiple();return}if(e&&n){this.restoringSort&&(this.restoringSort=!1),this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.customSort?this.sortFunction.emit({data:this.value,mode:this.sortMode,field:e,order:n}):(this.value.sort((r,s)=>{let a=se.resolveFieldData(r,e),l=se.resolveFieldData(s,e),c=null;return a==null&&l!=null?c=-1:a!=null&&l==null?c=1:a==null&&l==null?c=0:typeof a=="string"&&typeof l=="string"?c=a.localeCompare(l):c=a<l?-1:a>l?1:0,n*c}),this._value=[...this.value]),this.hasFilter()&&this._filter());let o={field:e,order:n};this.onSort.emit(o),this.tableService.onSort(o)}}sortMultiple(){this.groupRowsBy&&(this._multiSortMeta?this.multiSortMeta[0].field!==this.groupRowsBy&&(this._multiSortMeta=[this.getGroupRowsMeta(),...this._multiSortMeta]):this._multiSortMeta=[this.getGroupRowsMeta()]),this.multiSortMeta&&(this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.value&&(this.customSort?this.sortFunction.emit({data:this.value,mode:this.sortMode,multiSortMeta:this.multiSortMeta}):(this.value.sort((e,n)=>this.multisortField(e,n,this.multiSortMeta,0)),this._value=[...this.value]),this.hasFilter()&&this._filter()),this.onSort.emit({multisortmeta:this.multiSortMeta}),this.tableService.onSort(this.multiSortMeta))}multisortField(e,n,o,r){let s=se.resolveFieldData(e,o[r].field),a=se.resolveFieldData(n,o[r].field);return se.compare(s,a,this.filterLocale)===0?o.length-1>r?this.multisortField(e,n,o,r+1):0:this.compareValuesOnSort(s,a,o[r].order)}compareValuesOnSort(e,n,o){return se.sort(e,n,o,this.filterLocale,this.sortOrder)}getSortMeta(e){if(this.multiSortMeta&&this.multiSortMeta.length){for(let n=0;n<this.multiSortMeta.length;n++)if(this.multiSortMeta[n].field===e)return this.multiSortMeta[n]}return null}isSorted(e){if(this.sortMode==="single")return this.sortField&&this.sortField===e;if(this.sortMode==="multiple"){let n=!1;if(this.multiSortMeta){for(let o=0;o<this.multiSortMeta.length;o++)if(this.multiSortMeta[o].field==e){n=!0;break}}return n}}handleRowClick(e){let n=e.originalEvent.target,o=n.nodeName,r=n.parentElement&&n.parentElement.nodeName;if(!(o=="INPUT"||o=="BUTTON"||o=="A"||r=="INPUT"||r=="BUTTON"||r=="A"||ie.hasClass(e.originalEvent.target,"p-clickable"))){if(this.selectionMode){let s=e.rowData,a=e.rowIndex;if(this.preventSelectionSetterPropagation=!0,this.isMultipleSelectionMode()&&e.originalEvent.shiftKey&&this.anchorRowIndex!=null)ie.clearSelection(),this.rangeRowIndex!=null&&this.clearSelectionRange(e.originalEvent),this.rangeRowIndex=a,this.selectRange(e.originalEvent,a);else{let l=this.isSelected(s);if(!l&&!this.isRowSelectable(s,a))return;let c=this.rowTouched?!1:this.metaKeySelection,d=this.dataKey?String(se.resolveFieldData(s,this.dataKey)):null;if(this.anchorRowIndex=a,this.rangeRowIndex=a,c){let h=e.originalEvent.metaKey||e.originalEvent.ctrlKey;if(l&&h){if(this.isSingleSelectionMode())this._selection=null,this.selectionKeys={},this.selectionChange.emit(null);else{let g=this.findIndexInSelection(s);this._selection=this.selection.filter((m,y)=>y!=g),this.selectionChange.emit(this.selection),d&&delete this.selectionKeys[d]}this.onRowUnselect.emit({originalEvent:e.originalEvent,data:s,type:"row"})}else this.isSingleSelectionMode()?(this._selection=s,this.selectionChange.emit(s),d&&(this.selectionKeys={},this.selectionKeys[d]=1)):this.isMultipleSelectionMode()&&(h?this._selection=this.selection||[]:(this._selection=[],this.selectionKeys={}),this._selection=[...this.selection,s],this.selectionChange.emit(this.selection),d&&(this.selectionKeys[d]=1)),this.onRowSelect.emit({originalEvent:e.originalEvent,data:s,type:"row",index:a})}else if(this.selectionMode==="single")l?(this._selection=null,this.selectionKeys={},this.selectionChange.emit(this.selection),this.onRowUnselect.emit({originalEvent:e.originalEvent,data:s,type:"row",index:a})):(this._selection=s,this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e.originalEvent,data:s,type:"row",index:a}),d&&(this.selectionKeys={},this.selectionKeys[d]=1));else if(this.selectionMode==="multiple")if(l){let h=this.findIndexInSelection(s);this._selection=this.selection.filter((g,m)=>m!=h),this.selectionChange.emit(this.selection),this.onRowUnselect.emit({originalEvent:e.originalEvent,data:s,type:"row",index:a}),d&&delete this.selectionKeys[d]}else this._selection=this.selection?[...this.selection,s]:[s],this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e.originalEvent,data:s,type:"row",index:a}),d&&(this.selectionKeys[d]=1)}this.tableService.onSelectionChange(),this.isStateful()&&this.saveState()}this.rowTouched=!1}}handleRowTouchEnd(e){this.rowTouched=!0}handleRowRightClick(e){if(this.contextMenu){let n=e.rowData,o=e.rowIndex;if(this.contextMenuSelectionMode==="separate")this.contextMenuSelection=n,this.contextMenuSelectionChange.emit(n),this.onContextMenuSelect.emit({originalEvent:e.originalEvent,data:n,index:e.rowIndex}),this.contextMenu.show(e.originalEvent),this.tableService.onContextMenu(n);else if(this.contextMenuSelectionMode==="joint"){this.preventSelectionSetterPropagation=!0;let r=this.isSelected(n),s=this.dataKey?String(se.resolveFieldData(n,this.dataKey)):null;if(!r){if(!this.isRowSelectable(n,o))return;this.isSingleSelectionMode()?(this.selection=n,this.selectionChange.emit(n),s&&(this.selectionKeys={},this.selectionKeys[s]=1)):this.isMultipleSelectionMode()&&(this._selection=this.selection?[...this.selection,n]:[n],this.selectionChange.emit(this.selection),s&&(this.selectionKeys[s]=1))}this.tableService.onSelectionChange(),this.contextMenu.show(e.originalEvent),this.onContextMenuSelect.emit({originalEvent:e,data:n,index:e.rowIndex})}}}selectRange(e,n,o){let r,s;this.anchorRowIndex>n?(r=n,s=this.anchorRowIndex):this.anchorRowIndex<n?(r=this.anchorRowIndex,s=n):(r=n,s=n),this.lazy&&this.paginator&&(r-=this.first,s-=this.first);let a=[];for(let l=r;l<=s;l++){let c=this.filteredValue?this.filteredValue[l]:this.value[l];if(!this.isSelected(c)&&!o){if(!this.isRowSelectable(c,n))continue;a.push(c),this._selection=[...this.selection,c];let d=this.dataKey?String(se.resolveFieldData(c,this.dataKey)):null;d&&(this.selectionKeys[d]=1)}}this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e,data:a,type:"row"})}clearSelectionRange(e){let n,o,r=this.rangeRowIndex,s=this.anchorRowIndex;r>s?(n=this.anchorRowIndex,o=this.rangeRowIndex):r<s?(n=this.rangeRowIndex,o=this.anchorRowIndex):(n=this.rangeRowIndex,o=this.rangeRowIndex);for(let a=n;a<=o;a++){let l=this.value[a],c=this.findIndexInSelection(l);this._selection=this.selection.filter((h,g)=>g!=c);let d=this.dataKey?String(se.resolveFieldData(l,this.dataKey)):null;d&&delete this.selectionKeys[d],this.onRowUnselect.emit({originalEvent:e,data:l,type:"row"})}}isSelected(e){return e&&this.selection?this.dataKey?this.selectionKeys[se.resolveFieldData(e,this.dataKey)]!==void 0:Array.isArray(this.selection)?this.findIndexInSelection(e)>-1:this.equals(e,this.selection):!1}findIndexInSelection(e){let n=-1;if(this.selection&&this.selection.length){for(let o=0;o<this.selection.length;o++)if(this.equals(e,this.selection[o])){n=o;break}}return n}isRowSelectable(e,n){return!(this.rowSelectable&&!this.rowSelectable({data:e,index:n}))}toggleRowWithRadio(e,n){if(this.preventSelectionSetterPropagation=!0,this.selection!=n){if(!this.isRowSelectable(n,e.rowIndex))return;this._selection=n,this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e.originalEvent,index:e.rowIndex,data:n,type:"radiobutton"}),this.dataKey&&(this.selectionKeys={},this.selectionKeys[String(se.resolveFieldData(n,this.dataKey))]=1)}else this._selection=null,this.selectionChange.emit(this.selection),this.onRowUnselect.emit({originalEvent:e.originalEvent,index:e.rowIndex,data:n,type:"radiobutton"});this.tableService.onSelectionChange(),this.isStateful()&&this.saveState()}toggleRowWithCheckbox(e,n){this.selection=this.selection||[];let o=this.isSelected(n),r=this.dataKey?String(se.resolveFieldData(n,this.dataKey)):null;if(this.preventSelectionSetterPropagation=!0,o){let s=this.findIndexInSelection(n);this._selection=this.selection.filter((a,l)=>l!=s),this.selectionChange.emit(this.selection),this.onRowUnselect.emit({originalEvent:e.originalEvent,index:e.rowIndex,data:n,type:"checkbox"}),r&&delete this.selectionKeys[r]}else{if(!this.isRowSelectable(n,e.rowIndex))return;this._selection=this.selection?[...this.selection,n]:[n],this.selectionChange.emit(this.selection),this.onRowSelect.emit({originalEvent:e.originalEvent,index:e.rowIndex,data:n,type:"checkbox"}),r&&(this.selectionKeys[r]=1)}this.tableService.onSelectionChange(),this.isStateful()&&this.saveState()}toggleRowsWithCheckbox({originalEvent:e},n){if(this._selectAll!==null)this.selectAllChange.emit({originalEvent:e,checked:n});else{let o=this.selectionPageOnly?this.dataToRender(this.processedData):this.processedData,r=this.selectionPageOnly&&this._selection?this._selection.filter(s=>!o.some(a=>this.equals(s,a))):[];n&&(r=this.frozenValue?[...r,...this.frozenValue,...o]:[...r,...o],r=this.rowSelectable?r.filter((s,a)=>this.rowSelectable({data:s,index:a})):r),this._selection=r,this.preventSelectionSetterPropagation=!0,this.updateSelectionKeys(),this.selectionChange.emit(this._selection),this.tableService.onSelectionChange(),this.onHeaderCheckboxToggle.emit({originalEvent:e,checked:n}),this.isStateful()&&this.saveState()}}equals(e,n){return this.compareSelectionBy==="equals"?e===n:se.equals(e,n,this.dataKey)}filter(e,n,o){this.filterTimeout&&clearTimeout(this.filterTimeout),this.isFilterBlank(e)?this.filters[n]&&delete this.filters[n]:this.filters[n]={value:e,matchMode:o},this.filterTimeout=setTimeout(()=>{this._filter(),this.filterTimeout=null},this.filterDelay),this.anchorRowIndex=null}filterGlobal(e,n){this.filter(e,"global",n)}isFilterBlank(e){return e!=null?!!(typeof e=="string"&&e.trim().length==0||Array.isArray(e)&&e.length==0):!0}_filter(){if(this.restoringFilter||(this.first=0,this.firstChange.emit(this.first)),this.lazy)this.onLazyLoad.emit(this.createLazyLoadMetadata());else{if(!this.value)return;if(!this.hasFilter())this.filteredValue=null,this.paginator&&(this.totalRecords=this._totalRecords===0&&this.value?this.value.length:this._totalRecords);else{let e;if(this.filters.global){if(!this.columns&&!this.globalFilterFields)throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");e=this.globalFilterFields||this.columns}this.filteredValue=[];for(let n=0;n<this.value.length;n++){let o=!0,r=!1,s=!1;for(let l in this.filters)if(this.filters.hasOwnProperty(l)&&l!=="global"){s=!0;let c=l,d=this.filters[c];if(Array.isArray(d)){for(let h of d)if(o=this.executeLocalFilter(c,this.value[n],h),h.operator===lp.OR&&o||h.operator===lp.AND&&!o)break}else o=this.executeLocalFilter(c,this.value[n],d);if(!o)break}if(this.filters.global&&!r&&e)for(let l=0;l<e.length;l++){let c=e[l].field||e[l];if(r=this.filterService.filters[this.filters.global.matchMode](se.resolveFieldData(this.value[n],c),this.filters.global.value,this.filterLocale),r)break}let a;this.filters.global?a=s?s&&o&&r:r:a=s&&o,a&&this.filteredValue.push(this.value[n])}this.filteredValue.length===this.value.length&&(this.filteredValue=null),this.paginator&&(this.totalRecords=this.filteredValue?this.filteredValue.length:this._totalRecords===0&&this.value?this.value.length:this._totalRecords??0)}}this.onFilter.emit({filters:this.filters,filteredValue:this.filteredValue||this.value}),this.tableService.onValueChange(this.value),this.isStateful()&&!this.restoringFilter&&this.saveState(),this.restoringFilter&&(this.restoringFilter=!1),this.cd.markForCheck(),this.scrollable&&this.resetScrollTop()}executeLocalFilter(e,n,o){let r=o.value,s=o.matchMode||tt.STARTS_WITH,a=se.resolveFieldData(n,e),l=this.filterService.filters[s];return l(a,r,this.filterLocale)}hasFilter(){let e=!0;for(let n in this.filters)if(this.filters.hasOwnProperty(n)){e=!1;break}return!e}createLazyLoadMetadata(){return{first:this.first,rows:this.rows,sortField:this.sortField,sortOrder:this.sortOrder,filters:this.filters,globalFilter:this.filters&&this.filters.global?this.filters.global.value:null,multiSortMeta:this.multiSortMeta,forceUpdate:()=>this.cd.detectChanges()}}clear(){this._sortField=null,this._sortOrder=this.defaultSortOrder,this._multiSortMeta=null,this.tableService.onSort(null),this.clearFilterValues(),this.filteredValue=null,this.first=0,this.firstChange.emit(this.first),this.lazy?this.onLazyLoad.emit(this.createLazyLoadMetadata()):this.totalRecords=this._totalRecords===0&&this._value?this._value.length:this._totalRecords??0}clearFilterValues(){for(let[,e]of Object.entries(this.filters))if(Array.isArray(e))for(let n of e)n.value=null;else e&&(e.value=null)}reset(){this.clear()}getExportHeader(e){return e[this.exportHeader]||e.header||e.field}exportCSV(e){let n,o="",r=this.columns;e&&e.selectionOnly?n=this.selection||[]:e&&e.allValues?n=this.value||[]:(n=this.filteredValue||this.value,this.frozenValue&&(n=n?[...this.frozenValue,...n]:this.frozenValue));let s=r.filter(d=>d.exportable!==!1&&d.field);o+=s.map(d=>'"'+this.getExportHeader(d)+'"').join(this.csvSeparator);let a=n.map(d=>s.map(h=>{let g=se.resolveFieldData(d,h.field);return g!=null?this.exportFunction?g=this.exportFunction({data:g,field:h.field}):g=String(g).replace(/"/g,'""'):g="",'"'+g+'"'}).join(this.csvSeparator)).join(`
`);a.length&&(o+=`
`+a);let l=new Blob([new Uint8Array([239,187,191]),o],{type:"text/csv;charset=utf-8;"}),c=this.renderer.createElement("a");c.style.display="none",this.renderer.appendChild(this.document.body,c),c.download!==void 0?(c.setAttribute("href",URL.createObjectURL(l)),c.setAttribute("download",this.exportFilename+".csv"),c.click()):(o="data:text/csv;charset=utf-8,"+o,this.document.defaultView.open(encodeURI(o))),this.renderer.removeChild(this.document.body,c)}onLazyItemLoad(e){this.onLazyLoad.emit(ge(H(H({},this.createLazyLoadMetadata()),e),{rows:e.last-e.first}))}resetScrollTop(){this.virtualScroll?this.scrollToVirtualIndex(0):this.scrollTo({top:0})}scrollToVirtualIndex(e){this.scroller&&this.scroller.scrollToIndex(e)}scrollTo(e){this.virtualScroll?this.scroller?.scrollTo(e):this.wrapperViewChild&&this.wrapperViewChild.nativeElement&&(this.wrapperViewChild.nativeElement.scrollTo?this.wrapperViewChild.nativeElement.scrollTo(e):(this.wrapperViewChild.nativeElement.scrollLeft=e.left,this.wrapperViewChild.nativeElement.scrollTop=e.top))}updateEditingCell(e,n,o,r){this.editingCell=e,this.editingCellData=n,this.editingCellField=o,this.editingCellRowIndex=r,this.bindDocumentEditListener()}isEditingCellValid(){return this.editingCell&&ie.find(this.editingCell,".ng-invalid.ng-dirty").length===0}bindDocumentEditListener(){this.documentEditListener||(this.documentEditListener=this.renderer.listen(this.document,"click",e=>{this.editingCell&&!this.selfClick&&this.isEditingCellValid()&&(ie.removeClass(this.editingCell,"p-cell-editing"),this.editingCell=null,this.onEditComplete.emit({field:this.editingCellField,data:this.editingCellData,originalEvent:e,index:this.editingCellRowIndex}),this.editingCellField=null,this.editingCellData=null,this.editingCellRowIndex=null,this.unbindDocumentEditListener(),this.cd.markForCheck(),this.overlaySubscription&&this.overlaySubscription.unsubscribe()),this.selfClick=!1}))}unbindDocumentEditListener(){this.documentEditListener&&(this.documentEditListener(),this.documentEditListener=null)}initRowEdit(e){let n=String(se.resolveFieldData(e,this.dataKey));this.editingRowKeys[n]=!0}saveRowEdit(e,n){if(ie.find(n,".ng-invalid.ng-dirty").length===0){let o=String(se.resolveFieldData(e,this.dataKey));delete this.editingRowKeys[o]}}cancelRowEdit(e){let n=String(se.resolveFieldData(e,this.dataKey));delete this.editingRowKeys[n]}toggleRow(e,n){if(!this.dataKey&&!this.groupRowsBy)throw new Error("dataKey or groupRowsBy must be defined to use row expansion");let o=this.groupRowsBy?String(se.resolveFieldData(e,this.groupRowsBy)):String(se.resolveFieldData(e,this.dataKey));this.expandedRowKeys[o]!=null?(delete this.expandedRowKeys[o],this.onRowCollapse.emit({originalEvent:n,data:e})):(this.rowExpandMode==="single"&&(this.expandedRowKeys={}),this.expandedRowKeys[o]=!0,this.onRowExpand.emit({originalEvent:n,data:e})),n&&n.preventDefault(),this.isStateful()&&this.saveState()}isRowExpanded(e){return this.groupRowsBy?this.expandedRowKeys[String(se.resolveFieldData(e,this.groupRowsBy))]===!0:this.expandedRowKeys[String(se.resolveFieldData(e,this.dataKey))]===!0}isRowEditing(e){return this.editingRowKeys[String(se.resolveFieldData(e,this.dataKey))]===!0}isSingleSelectionMode(){return this.selectionMode==="single"}isMultipleSelectionMode(){return this.selectionMode==="multiple"}onColumnResizeBegin(e){let n=ie.getOffset(this.el?.nativeElement).left;this.resizeColumnElement=e.target.closest("th"),this.columnResizing=!0,e.type=="touchstart"?this.lastResizerHelperX=e.changedTouches[0].clientX-n+this.el?.nativeElement.scrollLeft:this.lastResizerHelperX=e.pageX-n+this.el?.nativeElement.scrollLeft,this.onColumnResize(e),e.preventDefault()}onColumnResize(e){let n=ie.getOffset(this.el?.nativeElement).left;ie.addClass(this.el?.nativeElement,"p-unselectable-text"),this.resizeHelperViewChild.nativeElement.style.height=this.el?.nativeElement.offsetHeight+"px",this.resizeHelperViewChild.nativeElement.style.top="0px",e.type=="touchmove"?this.resizeHelperViewChild.nativeElement.style.left=e.changedTouches[0].clientX-n+this.el?.nativeElement.scrollLeft+"px":this.resizeHelperViewChild.nativeElement.style.left=e.pageX-n+this.el?.nativeElement.scrollLeft+"px",this.resizeHelperViewChild.nativeElement.style.display="block"}onColumnResizeEnd(){let e=this.resizeHelperViewChild?.nativeElement.offsetLeft-this.lastResizerHelperX,o=this.resizeColumnElement.offsetWidth+e,r=this.resizeColumnElement.style.minWidth.replace(/[^\d.]/g,""),s=r?parseFloat(r):15;if(o>=s){if(this.columnResizeMode==="fit"){let l=this.resizeColumnElement.nextElementSibling.offsetWidth-e;o>15&&l>15&&this.resizeTableCells(o,l)}else if(this.columnResizeMode==="expand"){this._initialColWidths=this._totalTableWidth();let a=this.tableViewChild?.nativeElement.offsetWidth+e;this.setResizeTableWidth(a+"px"),this.resizeTableCells(o,null)}this.onColResize.emit({element:this.resizeColumnElement,delta:e}),this.isStateful()&&this.saveState()}this.resizeHelperViewChild.nativeElement.style.display="none",ie.removeClass(this.el?.nativeElement,"p-unselectable-text")}_totalTableWidth(){let e=[],n=ie.findSingle(this.el.nativeElement,".p-datatable-thead");return ie.find(n,"tr > th").forEach(r=>e.push(ie.getOuterWidth(r))),e}onColumnDragStart(e,n){this.reorderIconWidth=ie.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement),this.reorderIconHeight=ie.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement),this.draggedColumn=n,e.dataTransfer.setData("text","b")}onColumnDragEnter(e,n){if(this.reorderableColumns&&this.draggedColumn&&n){e.preventDefault();let o=ie.getOffset(this.el?.nativeElement),r=ie.getOffset(n);if(this.draggedColumn!=n){let s=ie.indexWithinGroup(this.draggedColumn,"preorderablecolumn"),a=ie.indexWithinGroup(n,"preorderablecolumn"),l=r.left-o.left,c=o.top-r.top,d=r.left+n.offsetWidth/2;this.reorderIndicatorUpViewChild.nativeElement.style.top=r.top-o.top-(this.reorderIconHeight-1)+"px",this.reorderIndicatorDownViewChild.nativeElement.style.top=r.top-o.top+n.offsetHeight+"px",e.pageX>d?(this.reorderIndicatorUpViewChild.nativeElement.style.left=l+n.offsetWidth-Math.ceil(this.reorderIconWidth/2)+"px",this.reorderIndicatorDownViewChild.nativeElement.style.left=l+n.offsetWidth-Math.ceil(this.reorderIconWidth/2)+"px",this.dropPosition=1):(this.reorderIndicatorUpViewChild.nativeElement.style.left=l-Math.ceil(this.reorderIconWidth/2)+"px",this.reorderIndicatorDownViewChild.nativeElement.style.left=l-Math.ceil(this.reorderIconWidth/2)+"px",this.dropPosition=-1),this.reorderIndicatorUpViewChild.nativeElement.style.display="block",this.reorderIndicatorDownViewChild.nativeElement.style.display="block"}else e.dataTransfer.dropEffect="none"}}onColumnDragLeave(e){this.reorderableColumns&&this.draggedColumn&&e.preventDefault()}onColumnDrop(e,n){if(e.preventDefault(),this.draggedColumn){let o=ie.indexWithinGroup(this.draggedColumn,"preorderablecolumn"),r=ie.indexWithinGroup(n,"preorderablecolumn"),s=o!=r;if(s&&(r-o==1&&this.dropPosition===-1||o-r==1&&this.dropPosition===1)&&(s=!1),s&&r<o&&this.dropPosition===1&&(r=r+1),s&&r>o&&this.dropPosition===-1&&(r=r-1),s&&(se.reorderArray(this.columns,o,r),this.onColReorder.emit({dragIndex:o,dropIndex:r,columns:this.columns}),this.isStateful()&&this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.saveState()})})),this.resizableColumns&&this.resizeColumnElement){let a=this.columnResizeMode==="expand"?this._initialColWidths:this._totalTableWidth();se.reorderArray(a,o+1,r+1),this.updateStyleElement(a,o,null,null)}this.reorderIndicatorUpViewChild.nativeElement.style.display="none",this.reorderIndicatorDownViewChild.nativeElement.style.display="none",this.draggedColumn.draggable=!1,this.draggedColumn=null,this.dropPosition=null}}resizeTableCells(e,n){let o=ie.index(this.resizeColumnElement),r=this.columnResizeMode==="expand"?this._initialColWidths:this._totalTableWidth();this.updateStyleElement(r,o,e,n)}updateStyleElement(e,n,o,r){this.destroyStyleElement(),this.createStyleElement();let s="";e.forEach((a,l)=>{let c=l===n?o:r&&l===n+1?r:a,d=`width: ${c}px !important; max-width: ${c}px !important;`;s+=`
                #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${l+1}),
                #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${l+1}),
                #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${l+1}) {
                    ${d}
                }
            `}),this.renderer.setProperty(this.styleElement,"innerHTML",s)}onRowDragStart(e,n){this.rowDragging=!0,this.draggedRowIndex=n,e.dataTransfer.setData("text","b")}onRowDragOver(e,n,o){if(this.rowDragging&&this.draggedRowIndex!==n){let r=ie.getOffset(o).top,s=e.pageY,a=r+ie.getOuterHeight(o)/2,l=o.previousElementSibling;s<a?(ie.removeClass(o,"p-datatable-dragpoint-bottom"),this.droppedRowIndex=n,l?ie.addClass(l,"p-datatable-dragpoint-bottom"):ie.addClass(o,"p-datatable-dragpoint-top")):(l?ie.removeClass(l,"p-datatable-dragpoint-bottom"):ie.addClass(o,"p-datatable-dragpoint-top"),this.droppedRowIndex=n+1,ie.addClass(o,"p-datatable-dragpoint-bottom"))}}onRowDragLeave(e,n){let o=n.previousElementSibling;o&&ie.removeClass(o,"p-datatable-dragpoint-bottom"),ie.removeClass(n,"p-datatable-dragpoint-bottom"),ie.removeClass(n,"p-datatable-dragpoint-top")}onRowDragEnd(e){this.rowDragging=!1,this.draggedRowIndex=null,this.droppedRowIndex=null}onRowDrop(e,n){if(this.droppedRowIndex!=null){let o=this.draggedRowIndex>this.droppedRowIndex?this.droppedRowIndex:this.droppedRowIndex===0?0:this.droppedRowIndex-1;se.reorderArray(this.value,this.draggedRowIndex,o),this.virtualScroll&&(this._value=[...this._value]),this.onRowReorder.emit({dragIndex:this.draggedRowIndex,dropIndex:o})}this.onRowDragLeave(e,n),this.onRowDragEnd(e)}isEmpty(){let e=this.filteredValue||this.value;return e==null||e.length==0}getBlockableElement(){return this.el.nativeElement.children[0]}getStorage(){if(_t(this.platformId))switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}else throw new Error("Browser storage is not available in the server side.")}isStateful(){return this.stateKey!=null}saveState(){let e=this.getStorage(),n={};this.paginator&&(n.first=this.first,n.rows=this.rows),this.sortField&&(n.sortField=this.sortField,n.sortOrder=this.sortOrder),this.multiSortMeta&&(n.multiSortMeta=this.multiSortMeta),this.hasFilter()&&(n.filters=this.filters),this.resizableColumns&&this.saveColumnWidths(n),this.reorderableColumns&&this.saveColumnOrder(n),this.selection&&(n.selection=this.selection),Object.keys(this.expandedRowKeys).length&&(n.expandedRowKeys=this.expandedRowKeys),e.setItem(this.stateKey,JSON.stringify(n)),this.onStateSave.emit(n)}clearState(){let e=this.getStorage();this.stateKey&&e.removeItem(this.stateKey)}restoreState(){let n=this.getStorage().getItem(this.stateKey),o=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,r=function(s,a){return typeof a=="string"&&o.test(a)?new Date(a):a};if(n){let s=JSON.parse(n,r);this.paginator&&(this.first!==void 0&&(this.first=s.first,this.firstChange.emit(this.first)),this.rows!==void 0&&(this.rows=s.rows,this.rowsChange.emit(this.rows))),s.sortField&&(this.restoringSort=!0,this._sortField=s.sortField,this._sortOrder=s.sortOrder),s.multiSortMeta&&(this.restoringSort=!0,this._multiSortMeta=s.multiSortMeta),s.filters&&(this.restoringFilter=!0,this.filters=s.filters),this.resizableColumns&&(this.columnWidthsState=s.columnWidths,this.tableWidthState=s.tableWidth),s.expandedRowKeys&&(this.expandedRowKeys=s.expandedRowKeys),s.selection&&Promise.resolve(null).then(()=>this.selectionChange.emit(s.selection)),this.stateRestored=!0,this.onStateRestore.emit(s)}}saveColumnWidths(e){let n=[],o=[],r=this.el?.nativeElement;r&&(o=ie.find(r,".p-datatable-thead > tr > th")),o.forEach(s=>n.push(ie.getOuterWidth(s))),e.columnWidths=n.join(","),this.columnResizeMode==="expand"&&this.tableViewChild&&(e.tableWidth=ie.getOuterWidth(this.tableViewChild.nativeElement))}setResizeTableWidth(e){this.tableViewChild.nativeElement.style.width=e,this.tableViewChild.nativeElement.style.minWidth=e}restoreColumnWidths(){if(this.columnWidthsState){let e=this.columnWidthsState.split(",");if(this.columnResizeMode==="expand"&&this.tableWidthState&&this.setResizeTableWidth(this.tableWidthState+"px"),se.isNotEmpty(e)){this.createStyleElement();let n="";e.forEach((o,r)=>{let s=`width: ${o}px !important; max-width: ${o}px !important`;n+=`
                        #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${r+1}),
                        #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${r+1}),
                        #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${r+1}) {
                            ${s}
                        }
                    `}),this.styleElement.innerHTML=n}}}saveColumnOrder(e){if(this.columns){let n=[];this.columns.map(o=>{n.push(o.field||o.key)}),e.columnOrder=n}}restoreColumnOrder(){let n=this.getStorage().getItem(this.stateKey);if(n){let r=JSON.parse(n).columnOrder;if(r){let s=[];r.map(a=>{let l=this.findColumnByKey(a);l&&s.push(l)}),this.columnOrderStateRestored=!0,this.columns=s}}}findColumnByKey(e){if(this.columns){for(let n of this.columns)if(n.key===e||n.field===e)return n}else return null}createStyleElement(){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",ie.setAttribute(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement),ie.setAttribute(this.styleElement,"nonce",this.config?.csp()?.nonce)}getGroupRowsMeta(){return{field:this.groupRowsBy,order:this.groupRowsByOrder}}createResponsiveStyle(){if(_t(this.platformId)&&!this.responsiveStyleElement){this.responsiveStyleElement=this.renderer.createElement("style"),this.responsiveStyleElement.type="text/css",ie.setAttribute(this.responsiveStyleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.responsiveStyleElement);let e=`
    @media screen and (max-width: ${this.breakpoint}) {
        #${this.id}-table > .p-datatable-thead > tr > th,
        #${this.id}-table > .p-datatable-tfoot > tr > td {
            display: none !important;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td {
            display: flex;
            width: 100% !important;
            align-items: center;
            justify-content: space-between;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td:not(:last-child) {
            border: 0 none;
        }

        #${this.id}.p-datatable-gridlines > .p-datatable-table-container > .p-datatable-table > .p-datatable-tbody > tr > td:last-child {
            border-top: 0;
            border-right: 0;
            border-left: 0;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td > .p-datatable-column-title {
            display: block;
        }
    }
    `;this.renderer.setProperty(this.responsiveStyleElement,"innerHTML",e),ie.setAttribute(this.responsiveStyleElement,"nonce",this.config?.csp()?.nonce)}}destroyResponsiveStyle(){this.responsiveStyleElement&&(this.renderer.removeChild(this.document.head,this.responsiveStyleElement),this.responsiveStyleElement=null)}destroyStyleElement(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}ngOnDestroy(){this.unbindDocumentEditListener(),this.editingCell=null,this.initialized=null,this.destroyStyleElement(),this.destroyResponsiveStyle(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=S(t)))(o||t)}})();static \u0275cmp=L({type:t,selectors:[["p-table"]],contentQueries:function(n,o,r){if(n&1&&(F(r,cR,4),F(r,dR,4),F(r,uR,4),F(r,pR,4),F(r,fR,4),F(r,hR,4),F(r,mR,4),F(r,gR,4),F(r,_R,4),F(r,yR,4),F(r,bR,4),F(r,vR,4),F(r,CR,4),F(r,wR,4),F(r,DR,4),F(r,IR,4),F(r,xR,4),F(r,ER,4),F(r,TR,4),F(r,SR,4),F(r,MR,4),F(r,kR,4),F(r,OR,4),F(r,RR,4),F(r,FR,4),F(r,AR,4),F(r,NR,4),F(r,LR,4),F(r,PR,4),F(r,VR,4),F(r,BR,4),F(r,HR,4),F(r,Ae,4)),n&2){let s;x(s=E())&&(o._headerTemplate=s.first),x(s=E())&&(o._headerGroupedTemplate=s.first),x(s=E())&&(o._bodyTemplate=s.first),x(s=E())&&(o._loadingBodyTemplate=s.first),x(s=E())&&(o._captionTemplate=s.first),x(s=E())&&(o._footerTemplate=s.first),x(s=E())&&(o._footerGroupedTemplate=s.first),x(s=E())&&(o._summaryTemplate=s.first),x(s=E())&&(o._colGroupTemplate=s.first),x(s=E())&&(o._expandedRowTemplate=s.first),x(s=E())&&(o._groupHeaderTemplate=s.first),x(s=E())&&(o._groupFooterTemplate=s.first),x(s=E())&&(o._frozenExpandedRowTemplate=s.first),x(s=E())&&(o._frozenHeaderTemplate=s.first),x(s=E())&&(o._frozenBodyTemplate=s.first),x(s=E())&&(o._frozenFooterTemplate=s.first),x(s=E())&&(o._frozenColGroupTemplate=s.first),x(s=E())&&(o._emptyMessageTemplate=s.first),x(s=E())&&(o._paginatorLeftTemplate=s.first),x(s=E())&&(o._paginatorRightTemplate=s.first),x(s=E())&&(o._paginatorDropdownItemTemplate=s.first),x(s=E())&&(o._loadingIconTemplate=s.first),x(s=E())&&(o._reorderIndicatorUpIconTemplate=s.first),x(s=E())&&(o._reorderIndicatorDownIconTemplate=s.first),x(s=E())&&(o._sortIconTemplate=s.first),x(s=E())&&(o._checkboxIconTemplate=s.first),x(s=E())&&(o._headerCheckboxIconTemplate=s.first),x(s=E())&&(o._paginatorDropdownIconTemplate=s.first),x(s=E())&&(o._paginatorFirstPageLinkIconTemplate=s.first),x(s=E())&&(o._paginatorLastPageLinkIconTemplate=s.first),x(s=E())&&(o._paginatorPreviousPageLinkIconTemplate=s.first),x(s=E())&&(o._paginatorNextPageLinkIconTemplate=s.first),x(s=E())&&(o._templates=s)}},viewQuery:function(n,o){if(n&1&&(Ce(jR,5),Ce(zR,5),Ce($R,5),Ce(UR,5),Ce(GR,5),Ce(WR,5),Ce(qR,5),Ce(KR,5)),n&2){let r;x(r=E())&&(o.resizeHelperViewChild=r.first),x(r=E())&&(o.reorderIndicatorUpViewChild=r.first),x(r=E())&&(o.reorderIndicatorDownViewChild=r.first),x(r=E())&&(o.wrapperViewChild=r.first),x(r=E())&&(o.tableViewChild=r.first),x(r=E())&&(o.tableHeaderViewChild=r.first),x(r=E())&&(o.tableFooterViewChild=r.first),x(r=E())&&(o.scroller=r.first)}},hostVars:2,hostBindings:function(n,o){n&2&&w(o.cn(o.cx("root"),o.styleClass))},inputs:{frozenColumns:"frozenColumns",frozenValue:"frozenValue",styleClass:"styleClass",tableStyle:"tableStyle",tableStyleClass:"tableStyleClass",paginator:[2,"paginator","paginator",T],pageLinks:[2,"pageLinks","pageLinks",pe],rowsPerPageOptions:"rowsPerPageOptions",alwaysShowPaginator:[2,"alwaysShowPaginator","alwaysShowPaginator",T],paginatorPosition:"paginatorPosition",paginatorStyleClass:"paginatorStyleClass",paginatorDropdownAppendTo:"paginatorDropdownAppendTo",paginatorDropdownScrollHeight:"paginatorDropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:[2,"showCurrentPageReport","showCurrentPageReport",T],showJumpToPageDropdown:[2,"showJumpToPageDropdown","showJumpToPageDropdown",T],showJumpToPageInput:[2,"showJumpToPageInput","showJumpToPageInput",T],showFirstLastIcon:[2,"showFirstLastIcon","showFirstLastIcon",T],showPageLinks:[2,"showPageLinks","showPageLinks",T],defaultSortOrder:[2,"defaultSortOrder","defaultSortOrder",pe],sortMode:"sortMode",resetPageOnSort:[2,"resetPageOnSort","resetPageOnSort",T],selectionMode:"selectionMode",selectionPageOnly:[2,"selectionPageOnly","selectionPageOnly",T],contextMenuSelection:"contextMenuSelection",contextMenuSelectionMode:"contextMenuSelectionMode",dataKey:"dataKey",metaKeySelection:[2,"metaKeySelection","metaKeySelection",T],rowSelectable:"rowSelectable",rowTrackBy:"rowTrackBy",lazy:[2,"lazy","lazy",T],lazyLoadOnInit:[2,"lazyLoadOnInit","lazyLoadOnInit",T],compareSelectionBy:"compareSelectionBy",csvSeparator:"csvSeparator",exportFilename:"exportFilename",filters:"filters",globalFilterFields:"globalFilterFields",filterDelay:[2,"filterDelay","filterDelay",pe],filterLocale:"filterLocale",expandedRowKeys:"expandedRowKeys",editingRowKeys:"editingRowKeys",rowExpandMode:"rowExpandMode",scrollable:[2,"scrollable","scrollable",T],rowGroupMode:"rowGroupMode",scrollHeight:"scrollHeight",virtualScroll:[2,"virtualScroll","virtualScroll",T],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",pe],virtualScrollOptions:"virtualScrollOptions",virtualScrollDelay:[2,"virtualScrollDelay","virtualScrollDelay",pe],frozenWidth:"frozenWidth",contextMenu:"contextMenu",resizableColumns:[2,"resizableColumns","resizableColumns",T],columnResizeMode:"columnResizeMode",reorderableColumns:[2,"reorderableColumns","reorderableColumns",T],loading:[2,"loading","loading",T],loadingIcon:"loadingIcon",showLoader:[2,"showLoader","showLoader",T],rowHover:[2,"rowHover","rowHover",T],customSort:[2,"customSort","customSort",T],showInitialSortBadge:[2,"showInitialSortBadge","showInitialSortBadge",T],exportFunction:"exportFunction",exportHeader:"exportHeader",stateKey:"stateKey",stateStorage:"stateStorage",editMode:"editMode",groupRowsBy:"groupRowsBy",size:"size",showGridlines:[2,"showGridlines","showGridlines",T],stripedRows:[2,"stripedRows","stripedRows",T],groupRowsByOrder:[2,"groupRowsByOrder","groupRowsByOrder",pe],responsiveLayout:"responsiveLayout",breakpoint:"breakpoint",paginatorLocale:"paginatorLocale",value:"value",columns:"columns",first:"first",rows:"rows",totalRecords:"totalRecords",sortField:"sortField",sortOrder:"sortOrder",multiSortMeta:"multiSortMeta",selection:"selection",selectAll:"selectAll"},outputs:{contextMenuSelectionChange:"contextMenuSelectionChange",selectAllChange:"selectAllChange",selectionChange:"selectionChange",onRowSelect:"onRowSelect",onRowUnselect:"onRowUnselect",onPage:"onPage",onSort:"onSort",onFilter:"onFilter",onLazyLoad:"onLazyLoad",onRowExpand:"onRowExpand",onRowCollapse:"onRowCollapse",onContextMenuSelect:"onContextMenuSelect",onColResize:"onColResize",onColReorder:"onColReorder",onRowReorder:"onRowReorder",onEditInit:"onEditInit",onEditComplete:"onEditComplete",onEditCancel:"onEditCancel",onHeaderCheckboxToggle:"onHeaderCheckboxToggle",sortFunction:"sortFunction",firstChange:"firstChange",rowsChange:"rowsChange",onStateSave:"onStateSave",onStateRestore:"onStateRestore"},standalone:!1,features:[re([Ip,Dp]),R,Ye],decls:14,vars:13,consts:[["wrapper",""],["buildInTable",""],["scroller",""],["content",""],["table",""],["thead",""],["tfoot",""],["resizeHelper",""],["reorderIndicatorUp",""],["reorderIndicatorDown",""],[3,"class",4,"ngIf"],[3,"rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","templateLeft","templateRight","appendTo","dropdownScrollHeight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showJumpToPageInput","showPageLinks","styleClass","locale","onPageChange",4,"ngIf"],[3,"ngStyle"],[3,"items","columns","style","scrollHeight","itemSize","step","delay","inline","lazy","loaderDisabled","showSpacer","showLoader","options","autoSize","onLazyLoad",4,"ngIf"],[4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass","display",4,"ngIf"],["data-p-icon","spinner",3,"spin","class",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[4,"ngTemplateOutlet"],[3,"onPageChange","rows","first","totalRecords","pageLinkSize","alwaysShow","rowsPerPageOptions","templateLeft","templateRight","appendTo","dropdownScrollHeight","currentPageReportTemplate","showFirstLastIcon","dropdownItemTemplate","showCurrentPageReport","showJumpToPageDropdown","showJumpToPageInput","showPageLinks","styleClass","locale"],["pTemplate","dropdownicon"],["pTemplate","firstpagelinkicon"],["pTemplate","previouspagelinkicon"],["pTemplate","lastpagelinkicon"],["pTemplate","nextpagelinkicon"],[3,"onLazyLoad","items","columns","scrollHeight","itemSize","step","delay","inline","lazy","loaderDisabled","showSpacer","showLoader","options","autoSize"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["role","table"],["role","rowgroup",3,"ngStyle"],["role","rowgroup",3,"class","value","frozenRows","pTableBody","pTableBodyTemplate","frozen",4,"ngIf"],["role","rowgroup",3,"value","pTableBody","pTableBodyTemplate","scrollerOptions"],["role","rowgroup",3,"style","class",4,"ngIf"],["role","rowgroup",3,"ngClass","ngStyle",4,"ngIf"],["role","rowgroup",3,"value","frozenRows","pTableBody","pTableBodyTemplate","frozen"],["role","rowgroup"],["role","rowgroup",3,"ngClass","ngStyle"],[3,"ngClass"],["data-p-icon","arrow-down",4,"ngIf"],["data-p-icon","arrow-down"],["data-p-icon","arrow-up",4,"ngIf"],["data-p-icon","arrow-up"]],template:function(n,o){n&1&&(_(0,iF,3,4,"div",10)(1,rF,2,3,"div",10)(2,CF,6,24,"p-paginator",11),D(3,"div",12,0),_(5,IF,4,17,"p-scroller",13)(6,EF,2,7,"ng-container",14)(7,FF,10,27,"ng-template",null,1,Se),C(),_(9,QF,6,24,"p-paginator",11)(10,ZF,2,2,"div",15)(11,JF,2,3,"div",16)(12,nA,4,5,"span",16)(13,sA,4,5,"span",16)),n&2&&(p("ngIf",o.loading&&o.showLoader),f(),p("ngIf",o.captionTemplate||o._captionTemplate),f(),p("ngIf",o.paginator&&(o.paginatorPosition==="top"||o.paginatorPosition=="both")),f(),w(o.cx("tableContainer")),p("ngStyle",o.sx("tableContainer")),f(2),p("ngIf",o.virtualScroll),f(),p("ngIf",!o.virtualScroll),f(3),p("ngIf",o.paginator&&(o.paginatorPosition==="bottom"||o.paginatorPosition=="both")),f(),p("ngIf",o.summaryTemplate||o._summaryTemplate),f(),p("ngIf",o.resizableColumns),f(),p("ngIf",o.reorderableColumns),f(),p("ngIf",o.reorderableColumns))},dependencies:()=>[rn,qe,Be,gt,vp,Ae,Zr,hp,mp,zi,jA],encapsulation:2})}return t})(),jA=(()=>{class t{dt;tableService;cd;el;columns;template;get value(){return this._value}set value(e){this._value=e,this.frozenRows&&this.updateFrozenRowStickyPosition(),this.dt.scrollable&&this.dt.rowGroupMode==="subheader"&&this.updateFrozenRowGroupHeaderStickyPosition()}frozen;frozenRows;scrollerOptions;subscription;_value;ngAfterViewInit(){this.frozenRows&&this.updateFrozenRowStickyPosition(),this.dt.scrollable&&this.dt.rowGroupMode==="subheader"&&this.updateFrozenRowGroupHeaderStickyPosition()}constructor(e,n,o,r){this.dt=e,this.tableService=n,this.cd=o,this.el=r,this.subscription=this.dt.tableService.valueSource$.subscribe(()=>{this.dt.virtualScroll&&this.cd.detectChanges()})}shouldRenderRowGroupHeader(e,n,o){let r=se.resolveFieldData(n,this.dt.groupRowsBy),s=e[o-this.dt._first-1];if(s){let a=se.resolveFieldData(s,this.dt.groupRowsBy);return r!==a}else return!0}shouldRenderRowGroupFooter(e,n,o){let r=se.resolveFieldData(n,this.dt.groupRowsBy),s=e[o-this.dt._first+1];if(s){let a=se.resolveFieldData(s,this.dt.groupRowsBy);return r!==a}else return!0}shouldRenderRowspan(e,n,o){let r=se.resolveFieldData(n,this.dt.groupRowsBy),s=e[o-1];if(s){let a=se.resolveFieldData(s,this.dt.groupRowsBy);return r!==a}else return!0}calculateRowGroupSize(e,n,o){let r=se.resolveFieldData(n,this.dt.groupRowsBy),s=r,a=0;for(;r===s;){a++;let l=e[++o];if(l)s=se.resolveFieldData(l,this.dt.groupRowsBy);else break}return a===1?null:a}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}updateFrozenRowStickyPosition(){this.el.nativeElement.style.top=ie.getOuterHeight(this.el.nativeElement.previousElementSibling)+"px"}updateFrozenRowGroupHeaderStickyPosition(){if(this.el.nativeElement.previousElementSibling){let e=ie.getOuterHeight(this.el.nativeElement.previousElementSibling);this.dt.rowGroupHeaderStyleObject.top=e+"px"}}getScrollerOption(e,n){return this.dt.virtualScroll?(n=n||this.scrollerOptions,n?n[e]:null):null}getRowIndex(e){let n=this.dt.paginator?this.dt.first+e:e,o=this.getScrollerOption("getItemOptions");return o?o(n).index:n}static \u0275fac=function(n){return new(n||t)(K(Ep),K(Ip),K(Bi),K(ot))};static \u0275cmp=L({type:t,selectors:[["","pTableBody",""]],inputs:{columns:[0,"pTableBody","columns"],template:[0,"pTableBodyTemplate","template"],value:"value",frozen:[2,"frozen","frozen",T],frozenRows:[2,"frozenRows","frozenRows",T],scrollerOptions:"scrollerOptions"},standalone:!1,attrs:aA,decls:5,vars:5,consts:[[4,"ngIf"],["ngFor","",3,"ngForOf","ngForTrackBy"],["role","row",4,"ngIf"],["role","row"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&_(0,yA,2,2,"ng-container",0)(1,SA,2,2,"ng-container",0)(2,FA,2,2,"ng-container",0)(3,NA,2,5,"ng-container",0)(4,PA,2,5,"ng-container",0),n&2&&(p("ngIf",!o.dt.expandedRowTemplate&&!o.dt._expandedRowTemplate),f(),p("ngIf",(o.dt.expandedRowTemplate||o.dt._expandedRowTemplate)&&!(o.frozen&&(o.dt.frozenExpandedRowTemplate||o.dt._frozenExpandedRowTemplate))),f(),p("ngIf",(o.dt.frozenExpandedRowTemplate||o.dt._frozenExpandedRowTemplate)&&o.frozen),f(),p("ngIf",o.dt.loading),f(),p("ngIf",o.dt.isEmpty()&&!o.dt.loading))},dependencies:[Gt,qe,Be],encapsulation:2})}return t})();var Py=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=he({type:t});static \u0275inj=ue({providers:[Dp],imports:[me,Cy,j_,yy,Ro,A_,Ry,K_,J_,ml,V_,yp,hp,mp,zi,x_,T_,E_,v_,Q_,C_,D_,S_,xy,ne,yp]})}return t})();var El=class t{constructor(){}getPlanets(){return[{name:"Mercury",diameter:"4,879 km",distanceFromSun:"57.9 million km",numberOfMoons:0},{name:"Venus",diameter:"12,104 km",distanceFromSun:"108.2 million km",numberOfMoons:0},{name:"Earth",diameter:"12,742 km",distanceFromSun:"149.6 million km",numberOfMoons:1},{name:"Mars",diameter:"6,779 km",distanceFromSun:"227.9 million km",numberOfMoons:2},{name:"Jupiter",diameter:"139,822 km",distanceFromSun:"778.6 million km",numberOfMoons:79},{name:"Saturn",diameter:"116,464 km",distanceFromSun:"1,433.5 million km",numberOfMoons:82},{name:"Uranus",diameter:"50,724 km",distanceFromSun:"2,872.5 million km",numberOfMoons:27},{name:"Neptune",diameter:"49,244 km",distanceFromSun:"4,495.1 million km",numberOfMoons:14}]}static \u0275fac=function(e){return new(e||t)};static \u0275prov=V({token:t,factory:t.\u0275fac,providedIn:"root"})};function UA(t,i){t&1&&(D(0,"tr")(1,"th"),ee(2,"Name"),C(),D(3,"th"),ee(4,"Diameter"),C(),D(5,"th"),ee(6,"Distance from Sun"),C(),D(7,"th"),ee(8,"Number of Moons"),C()())}function GA(t,i){if(t&1&&(D(0,"tr")(1,"td"),ee(2),C(),D(3,"td"),ee(4),C(),D(5,"td"),ee(6),C(),D(7,"td"),ee(8),C()()),t&2){let e=i.$implicit;f(2),xe(e.name),f(2),xe(e.diameter),f(2),xe(e.distanceFromSun),f(2),xe(e.numberOfMoons)}}var Tl=class t{constructor(i){this.planetService=i}planets=[];ngOnInit(){this.planets=this.planetService.getPlanets()}static \u0275fac=function(e){return new(e||t)(K(El))};static \u0275cmp=L({type:t,selectors:[["app-planet-table"]],decls:3,vars:1,consts:[[3,"value"],["pTemplate","header"],["pTemplate","body"]],template:function(e,n){e&1&&(D(0,"p-table",0),_(1,UA,9,0,"ng-template",1)(2,GA,9,4,"ng-template",2),C()),e&2&&p("value",n.planets)},dependencies:[me,Py,Ep,Ae],encapsulation:2})};var Sl=class t{title="planet-viewer";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=L({type:t,selectors:[["app-root"]],decls:1,vars:0,template:function(e,n){e&1&&G(0,"app-planet-table")},dependencies:[Tl],encapsulation:2})};Wu(Sl,n0).catch(t=>console.error(t));
