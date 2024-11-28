import{C as ie,D as se,I as ce,J as D,K as v,L as C,La as U,M as c,Ma as w,N as d,O as h,P as _,R as j,V as ue,Y as ae,Z as M,_ as de,a as p,b as m,d as F,e as ee,f as I,fa as k,h as te,j as ne,n as re,y as oe}from"./chunk-IKLVSTII.js";function N(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&ue(N);let n=t?r?.injector?.get(M)??h(M):null,i=Ke(r?.equal),o;r?.requireSync?o=k({kind:0},{equal:i}):o=k({kind:1,value:r?.initialValue},{equal:i});let s=e.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{if(r?.rejectErrors)throw u;o.set({kind:2,error:u})}});if(r?.requireSync&&o().kind===0)throw new D(601,!1);return n?.onDestroy(s.unsubscribe.bind(s)),w(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new D(601,!1)}},{equal:r?.equal})}function Ke(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var $={};function R(e,r){if($[e]=($[e]||0)+1,typeof r=="function")return P(e,(...n)=>m(p({},r(...n)),{type:e}));switch(r?r._as:"empty"){case"empty":return P(e,()=>({type:e}));case"props":return P(e,n=>m(p({},n),{type:e}));default:throw new Error("Unexpected config.")}}function g(){return{_as:"props",_p:void 0}}function P(e,r){return Object.defineProperty(r,"type",{value:e,writable:!1})}function je(e){return e.charAt(0).toUpperCase()+e.substring(1)}var we="@ngrx/store/init",S=(()=>{class e extends I{constructor(){super({type:we})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})(),Be=[S],xe=new c("@ngrx/store Internal Root Guard"),le=new c("@ngrx/store Internal Initial State"),B=new c("@ngrx/store Initial State"),Oe=new c("@ngrx/store Reducer Factory"),fe=new c("@ngrx/store Internal Reducer Factory Provider"),Te=new c("@ngrx/store Initial Reducers"),z=new c("@ngrx/store Internal Initial Reducers"),pe=new c("@ngrx/store Store Features"),ye=new c("@ngrx/store Internal Store Reducers"),V=new c("@ngrx/store Internal Feature Reducers"),he=new c("@ngrx/store Internal Feature Configs"),Ae=new c("@ngrx/store Internal Store Features"),Re=new c("@ngrx/store Internal Feature Reducers Token"),De=new c("@ngrx/store Feature Reducers"),me=new c("@ngrx/store User Provided Meta Reducers"),x=new c("@ngrx/store Meta Reducers"),ve=new c("@ngrx/store Internal Resolved Meta Reducers"),ge=new c("@ngrx/store User Runtime Checks Config"),Se=new c("@ngrx/store Internal User Runtime Checks Config"),E=new c("@ngrx/store Internal Runtime Checks"),G=new c("@ngrx/store Check if Action types are unique"),Jt=new c("@ngrx/store Root Store Provider"),Xt=new c("@ngrx/store Feature State Provider");function Z(e,r={}){let t=Object.keys(e),n={};for(let o=0;o<t.length;o++){let s=t[o];typeof e[s]=="function"&&(n[s]=e[s])}let i=Object.keys(n);return function(s,u){s=s===void 0?r:s;let l=!1,f={};for(let a=0;a<i.length;a++){let y=i[a],Le=n[y],J=s[y],X=Le(J,u);f[y]=X,l=l||X!==J}return l?f:s}}function Ge(e,r){return Object.keys(e).filter(t=>t!==r).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{})}function _e(...e){return function(r){if(e.length===0)return r;let t=e[e.length-1];return e.slice(0,-1).reduceRight((i,o)=>o(i),t(r))}}function Me(e,r){return Array.isArray(r)&&r.length>0&&(e=_e.apply(null,[...r,e])),(t,n)=>{let i=e(t);return(o,s)=>(o=o===void 0?n:o,i(o,s))}}function Ze(e){let r=Array.isArray(e)&&e.length>0?_e(...e):t=>t;return(t,n)=>(t=r(t),(i,o)=>(i=i===void 0?n:i,t(i,o)))}var b=class extends F{},O=class extends S{},He="@ngrx/store/update-reducers",T=(()=>{class e extends I{get currentReducers(){return this.reducers}constructor(t,n,i,o){super(o(i,n)),this.dispatcher=t,this.initialState=n,this.reducers=i,this.reducerFactory=o}addFeature(t){this.addFeatures([t])}addFeatures(t){let n=t.reduce((i,{reducers:o,reducerFactory:s,metaReducers:u,initialState:l,key:f})=>{let a=typeof o=="function"?Ze(u)(o,l):Me(s,u)(o,l);return i[f]=a,i},{});this.addReducers(n)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(n=>n.key))}addReducer(t,n){this.addReducers({[t]:n})}addReducers(t){this.reducers=p(p({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(n=>{this.reducers=Ge(this.reducers,n)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:He,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(n){return new(n||e)(d(O),d(B),d(Te),d(Oe))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})(),Ye=[T,{provide:b,useExisting:T},{provide:O,useExisting:S}],H=(()=>{class e extends ee{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=ae(e)))(i||e)}})()}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})(),Qe=[H],A=class extends F{},Ee=(()=>{class e extends I{static{this.INIT=we}constructor(t,n,i,o){super(o);let u=t.pipe(ne(te)).pipe(ce(n)),l={state:o},f=u.pipe(se(We,l));this.stateSubscription=f.subscribe(({state:a,action:y})=>{this.next(a),i.next(y)}),this.state=N(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(n){return new(n||e)(d(S),d(b),d(H),d(B))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})();function We(e={state:void 0},[r,t]){let{state:n}=e;return{state:t(n,r),action:r}}var Je=[Ee,{provide:A,useExisting:Ee}],Y=(()=>{class e extends F{constructor(t,n,i){super(),this.actionsObserver=n,this.reducerManager=i,this.source=t,this.state=t.state}select(t,...n){return et.call(null,t,...n)(this)}selectSignal(t,n){return w(()=>t(this.state()),n)}lift(t){let n=new e(this,this.actionsObserver,this.reducerManager);return n.operator=t,n}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,n){this.reducerManager.addReducer(t,n)}removeReducer(t){this.reducerManager.removeReducer(t)}static{this.\u0275fac=function(n){return new(n||e)(d(A),d(S),d(T))}}static{this.\u0275prov=v({token:e,factory:e.\u0275fac})}}return e})(),Xe=[Y];function et(e,r,...t){return function(i){let o;if(typeof e=="string"){let s=[r,...t].filter(Boolean);o=i.pipe(ie(e,...s))}else if(typeof e=="function")o=i.pipe(re(s=>e(s,r)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(oe())}}var Q="https://ngrx.io/guide/store/configuration/runtime-checks";function be(e){return e===void 0}function Fe(e){return e===null}function ke(e){return Array.isArray(e)}function tt(e){return typeof e=="string"}function nt(e){return typeof e=="boolean"}function rt(e){return typeof e=="number"}function Ue(e){return typeof e=="object"&&e!==null}function ot(e){return Ue(e)&&!ke(e)}function Ne(e){if(!ot(e))return!1;let r=Object.getPrototypeOf(e);return r===Object.prototype||r===null}function q(e){return typeof e=="function"}function it(e){return q(e)&&e.hasOwnProperty("\u0275cmp")}function st(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var ct=!1;function ut(){return ct}function Ie(e,r){return e===r}function at(e,r,t){for(let n=0;n<e.length;n++)if(!t(e[n],r[n]))return!0;return!1}function Pe(e,r=Ie,t=Ie){let n=null,i=null,o;function s(){n=null,i=null}function u(a=void 0){o={result:a}}function l(){o=void 0}function f(){if(o!==void 0)return o.result;if(!n)return i=e.apply(null,arguments),n=arguments,i;if(!at(arguments,n,r))return i;let a=e.apply(null,arguments);return n=arguments,t(i,a)?i:(i=a,a)}return{memoized:f,reset:s,setResult:u,clearResult:l}}function ze(...e){return lt(Pe)(...e)}function dt(e,r,t,n){if(t===void 0){let o=r.map(s=>s(e));return n.memoized.apply(null,o)}let i=r.map(o=>o(e,t));return n.memoized.apply(null,[...i,t])}function lt(e,r={stateFn:dt}){return function(...t){let n=t;if(Array.isArray(n[0])){let[a,...y]=n;n=[...a,...y]}else n.length===1&&pt(n[0])&&(n=yt(n[0]));let i=n.slice(0,n.length-1),o=n[n.length-1],s=i.filter(a=>a.release&&typeof a.release=="function"),u=e(function(...a){return o.apply(null,a)}),l=Pe(function(a,y){return r.stateFn.apply(null,[a,i,y,u])});function f(){l.reset(),u.reset(),s.forEach(a=>a.release())}return Object.assign(l.memoized,{release:f,projector:u.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function ft(e){return ze(r=>{let t=r[e];return!ut()&&U()&&!(e in r)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},r=>r)}function pt(e){return!!e&&typeof e=="object"&&Object.values(e).every(r=>typeof r=="function")}function yt(e){let r=Object.values(e),t=Object.keys(e),n=(...i)=>t.reduce((o,s,u)=>m(p({},o),{[s]:i[u]}),{});return[...r,n]}function en(e){let{name:r,reducer:t,extraSelectors:n}=e,i=ft(r),o=ht(i,t),s=p({[`select${je(r)}State`]:i},o),u=n?n(s):{};return p(p({name:r,reducer:t},s),u)}function ht(e,r){let t=Rt(r);return(Ne(t)?Object.keys(t):[]).reduce((i,o)=>m(p({},i),{[`select${je(o)}`]:ze(e,s=>s?.[o])}),{})}function Rt(e){return e(void 0,{type:"@ngrx/feature/init"})}function mt(e){return e instanceof c?h(e):e}function vt(e,r){return r.map((t,n)=>{if(e[n]instanceof c){let i=h(e[n]);return{key:t.key,reducerFactory:i.reducerFactory?i.reducerFactory:Z,metaReducers:i.metaReducers?i.metaReducers:[],initialState:i.initialState}}return t})}function gt(e){return e.map(r=>r instanceof c?h(r):r)}function Ve(e){return typeof e=="function"?e():e}function St(e,r){return e.concat(r)}function Et(){if(h(Y,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function bt(e,r){return function(t,n){let i=r.action(n)?L(n):n,o=e(t,i);return r.state()?L(o):o}}function L(e){Object.freeze(e);let r=q(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&st(e,t)&&(!r||t!=="caller"&&t!=="callee"&&t!=="arguments")){let n=e[t];(Ue(n)||q(n))&&!Object.isFrozen(n)&&L(n)}}),e}function Ft(e,r){return function(t,n){if(r.action(n)){let o=K(n);Ce(o,"action")}let i=e(t,n);if(r.state()){let o=K(i);Ce(o,"state")}return i}}function K(e,r=[]){return(be(e)||Fe(e))&&r.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,i)=>{if(n)return n;let o=e[i];return it(o)?n:be(o)||Fe(o)||rt(o)||nt(o)||tt(o)||ke(o)?!1:Ne(o)?K(o,[...r,i]):{path:[...r,i],value:o}},!1)}function Ce(e,r){if(e===!1)return;let t=e.path.join("."),n=new Error(`Detected unserializable ${r} at "${t}". ${Q}#strict${r}serializability`);throw n.value=e.value,n.unserializablePath=t,n}function It(e,r){return function(t,n){if(r.action(n)&&!de.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${Q}#strictactionwithinngzone`);return e(t,n)}}function Ct(e){return U()?p({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function jt({strictActionSerializability:e,strictStateSerializability:r}){return t=>e||r?Ft(t,{action:n=>e&&!W(n),state:()=>r}):t}function wt({strictActionImmutability:e,strictStateImmutability:r}){return t=>e||r?bt(t,{action:n=>e&&!W(n),state:()=>r}):t}function W(e){return e.type.startsWith("@ngrx")}function xt({strictActionWithinNgZone:e}){return r=>e?It(r,{action:t=>e&&!W(t)}):r}function Ot(e){return[{provide:Se,useValue:e},{provide:ge,useFactory:Tt,deps:[Se]},{provide:E,deps:[ge],useFactory:Ct},{provide:x,multi:!0,deps:[E],useFactory:wt},{provide:x,multi:!0,deps:[E],useFactory:jt},{provide:x,multi:!0,deps:[E],useFactory:xt}]}function $e(){return[{provide:G,multi:!0,deps:[E],useFactory:At}]}function Tt(e){return e}function At(e){if(!e.strictActionTypeUniqueness)return;let r=Object.entries($).filter(([,t])=>t>1).map(([t])=>t);if(r.length)throw new Error(`Action types are registered more than once, ${r.map(t=>`"${t}"`).join(", ")}. ${Q}#strictactiontypeuniqueness`)}function Dt(e={},r={}){return[{provide:xe,useFactory:Et},{provide:le,useValue:r.initialState},{provide:B,useFactory:Ve,deps:[le]},{provide:z,useValue:e},{provide:ye,useExisting:e instanceof c?e:z},{provide:Te,deps:[z,[new _(ye)]],useFactory:mt},{provide:me,useValue:r.metaReducers?r.metaReducers:[]},{provide:ve,deps:[x,me],useFactory:St},{provide:fe,useValue:r.reducerFactory?r.reducerFactory:Z},{provide:Oe,deps:[fe,ve],useFactory:Me},Be,Ye,Qe,Je,Xe,Ot(r.runtimeChecks),$e()]}function _t(e,r,t={}){return[{provide:he,multi:!0,useValue:e instanceof Object?{}:t},{provide:pe,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(t instanceof c)&&t.reducerFactory?t.reducerFactory:Z,metaReducers:!(t instanceof c)&&t.metaReducers?t.metaReducers:[],initialState:!(t instanceof c)&&t.initialState?t.initialState:void 0}},{provide:Ae,deps:[he,pe],useFactory:vt},{provide:V,multi:!0,useValue:e instanceof Object?e.reducer:r},{provide:Re,multi:!0,useExisting:r instanceof c?r:V},{provide:De,multi:!0,deps:[V,[new _(Re)]],useFactory:gt},$e()]}var qe=(()=>{class e{constructor(t,n,i,o,s,u){}static{this.\u0275fac=function(n){return new(n||e)(d(S),d(b),d(H),d(Y),d(xe,8),d(G,8))}}static{this.\u0275mod=j({type:e})}static{this.\u0275inj=C({})}}return e})(),Mt=(()=>{class e{constructor(t,n,i,o,s){this.features=t,this.featureReducers=n,this.reducerManager=i;let u=t.map((l,f)=>{let y=n.shift()[f];return m(p({},l),{reducers:y,initialState:Ve(l.initialState)})});i.addFeatures(u)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}static{this.\u0275fac=function(n){return new(n||e)(d(Ae),d(De),d(T),d(qe),d(G,8))}}static{this.\u0275mod=j({type:e})}static{this.\u0275inj=C({})}}return e})(),tn=(()=>{class e{static forRoot(t,n){return{ngModule:qe,providers:[...Dt(t,n)]}}static forFeature(t,n,i={}){return{ngModule:Mt,providers:[..._t(t,n,i)]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=j({type:e})}static{this.\u0275inj=C({})}}return e})();function nn(...e){let r=e.pop(),t=e.map(n=>n.type);return{reducer:r,types:t}}function rn(e,...r){let t=new Map;for(let n of r)for(let i of n.types){let o=t.get(i);if(o){let s=(u,l)=>n.reducer(o(u,l),l);t.set(i,s)}else t.set(i,n.reducer)}return function(n=e,i){let o=t.get(i.type);return o?o(n,i):n}}var un=R("[Card] Load Cards"),an=R("[Card] Load Cards Success",g()),dn=R("[Card] Load Cards Failure",g()),ln=R("[Card] Add Card",g()),fn=R("[Card] Update Card",g()),pn=R("[Card] Delete Card",g());export{N as a,R as b,g as c,we as d,S as e,B as f,b as g,O as h,He as i,H as j,A as k,Y as l,ze as m,en as n,qe as o,Mt as p,tn as q,nn as r,rn as s,un as t,an as u,ln as v};
