import{$ as le,D as se,E as ce,J as ue,K as k,L as v,La as N,M as j,Ma as x,N as c,O as d,P as h,Q as M,S as w,W as ae,Z as de,_ as U,a as y,b as m,e as I,f as te,g as C,ga as _,i as ne,k as re,o as oe,z as ie}from"./chunk-NLXPBHEF.js";function P(e,t){let o=!t?.manualCleanup;o&&!t?.injector&&ae(P);let n=o?t?.injector?.get(U)??h(U):null,r=Ke(t?.equal),i;t?.requireSync?i=_({kind:0},{equal:r}):i=_({kind:1,value:t?.initialValue},{equal:r});let s=e.subscribe({next:u=>i.set({kind:1,value:u}),error:u=>{if(t?.rejectErrors)throw u;i.set({kind:2,error:u})}});if(t?.requireSync&&i().kind===0)throw new k(601,!1);return n?.onDestroy(s.unsubscribe.bind(s)),x(()=>{let u=i();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new k(601,!1)}},{equal:t?.equal})}function Ke(e=Object.is){return(t,o)=>t.kind===1&&o.kind===1&&e(t.value,o.value)}var q={};function R(e,t){if(q[e]=(q[e]||0)+1,typeof t=="function")return z(e,(...n)=>m(y({},t(...n)),{type:e}));switch(t?t._as:"empty"){case"empty":return z(e,()=>({type:e}));case"props":return z(e,n=>m(y({},n),{type:e}));default:throw new Error("Unexpected config.")}}function g(){return{_as:"props",_p:void 0}}function z(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}function we(e){return e.charAt(0).toUpperCase()+e.substring(1)}var xe="@ngrx/store/init",E=(()=>{let t=class t extends C{constructor(){super({type:xe})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Be=[E],Oe=new c("@ngrx/store Internal Root Guard"),fe=new c("@ngrx/store Internal Initial State"),G=new c("@ngrx/store Initial State"),Te=new c("@ngrx/store Reducer Factory"),pe=new c("@ngrx/store Internal Reducer Factory Provider"),Ae=new c("@ngrx/store Initial Reducers"),V=new c("@ngrx/store Internal Initial Reducers"),ye=new c("@ngrx/store Store Features"),he=new c("@ngrx/store Internal Store Reducers"),$=new c("@ngrx/store Internal Feature Reducers"),Re=new c("@ngrx/store Internal Feature Configs"),De=new c("@ngrx/store Internal Store Features"),me=new c("@ngrx/store Internal Feature Reducers Token"),ke=new c("@ngrx/store Feature Reducers"),ve=new c("@ngrx/store User Provided Meta Reducers"),O=new c("@ngrx/store Meta Reducers"),ge=new c("@ngrx/store Internal Resolved Meta Reducers"),Ee=new c("@ngrx/store User Runtime Checks Config"),be=new c("@ngrx/store Internal User Runtime Checks Config"),S=new c("@ngrx/store Internal Runtime Checks"),Z=new c("@ngrx/store Check if Action types are unique"),Jt=new c("@ngrx/store Root Store Provider"),Xt=new c("@ngrx/store Feature State Provider");function H(e,t={}){let o=Object.keys(e),n={};for(let i=0;i<o.length;i++){let s=o[i];typeof e[s]=="function"&&(n[s]=e[s])}let r=Object.keys(n);return function(s,u){s=s===void 0?t:s;let l=!1,f={};for(let a=0;a<r.length;a++){let p=r[a],b=n[p],X=s[p],ee=b(X,u);f[p]=ee,l=l||ee!==X}return l?f:s}}function Ge(e,t){return Object.keys(e).filter(o=>o!==t).reduce((o,n)=>Object.assign(o,{[n]:e[n]}),{})}function Me(...e){return function(t){if(e.length===0)return t;let o=e[e.length-1];return e.slice(0,-1).reduceRight((r,i)=>i(r),o(t))}}function Ue(e,t){return Array.isArray(t)&&t.length>0&&(e=Me.apply(null,[...t,e])),(o,n)=>{let r=e(o);return(i,s)=>(i=i===void 0?n:i,r(i,s))}}function Ze(e){let t=Array.isArray(e)&&e.length>0?Me(...e):o=>o;return(o,n)=>(o=t(o),(r,i)=>(r=r===void 0?n:r,o(r,i)))}var F=class extends I{},T=class extends E{},He="@ngrx/store/update-reducers",A=(()=>{let t=class t extends C{get currentReducers(){return this.reducers}constructor(n,r,i,s){super(s(i,r)),this.dispatcher=n,this.initialState=r,this.reducers=i,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let r=n.reduce((i,{reducers:s,reducerFactory:u,metaReducers:l,initialState:f,key:a})=>{let p=typeof s=="function"?Ze(l)(s,f):Ue(u,l)(s,f);return i[a]=p,i},{});this.addReducers(r)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(r=>r.key))}addReducer(n,r){this.addReducers({[n]:r})}addReducers(n){this.reducers=y(y({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(r=>{this.reducers=Ge(this.reducers,r)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:He,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(r){return new(r||t)(d(T),d(G),d(Ae),d(Te))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Ye=[A,{provide:F,useExisting:A},{provide:T,useExisting:E}],Y=(()=>{let t=class t extends te{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=de(t)))(i||t)}})(),t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Qe=[Y],D=class extends I{},Se=(()=>{let t=class t extends C{constructor(n,r,i,s){super(s);let l=n.pipe(re(ne)).pipe(ue(r)),f={state:s},a=l.pipe(ce(We,f));this.stateSubscription=a.subscribe(({state:p,action:b})=>{this.next(p),i.next(b)}),this.state=P(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=xe,t.\u0275fac=function(r){return new(r||t)(d(E),d(F),d(Y),d(G))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})();function We(e={state:void 0},[t,o]){let{state:n}=e;return{state:o(n,t),action:t}}var Je=[Se,{provide:D,useExisting:Se}],Q=(()=>{let t=class t extends I{constructor(n,r,i){super(),this.actionsObserver=r,this.reducerManager=i,this.source=n,this.state=n.state}select(n,...r){return et.call(null,n,...r)(this)}selectSignal(n,r){return x(()=>n(this.state()),r)}lift(n){let r=new t(this,this.actionsObserver,this.reducerManager);return r.operator=n,r}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,r){this.reducerManager.addReducer(n,r)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(r){return new(r||t)(d(D),d(E),d(A))},t.\u0275prov=v({token:t,factory:t.\u0275fac});let e=t;return e})(),Xe=[Q];function et(e,t,...o){return function(r){let i;if(typeof e=="string"){let s=[t,...o].filter(Boolean);i=r.pipe(se(e,...s))}else if(typeof e=="function")i=r.pipe(oe(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(ie())}}var W="https://ngrx.io/guide/store/configuration/runtime-checks";function Fe(e){return e===void 0}function Ie(e){return e===null}function _e(e){return Array.isArray(e)}function tt(e){return typeof e=="string"}function nt(e){return typeof e=="boolean"}function rt(e){return typeof e=="number"}function Ne(e){return typeof e=="object"&&e!==null}function ot(e){return Ne(e)&&!_e(e)}function Pe(e){if(!ot(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function L(e){return typeof e=="function"}function it(e){return L(e)&&e.hasOwnProperty("\u0275cmp")}function st(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var ct=!1;function ut(){return ct}function Ce(e,t){return e===t}function at(e,t,o){for(let n=0;n<e.length;n++)if(!o(e[n],t[n]))return!0;return!1}function ze(e,t=Ce,o=Ce){let n=null,r=null,i;function s(){n=null,r=null}function u(a=void 0){i={result:a}}function l(){i=void 0}function f(){if(i!==void 0)return i.result;if(!n)return r=e.apply(null,arguments),n=arguments,r;if(!at(arguments,n,t))return r;let a=e.apply(null,arguments);return n=arguments,o(r,a)?r:(r=a,a)}return{memoized:f,reset:s,setResult:u,clearResult:l}}function Ve(...e){return lt(ze)(...e)}function dt(e,t,o,n){if(o===void 0){let i=t.map(s=>s(e));return n.memoized.apply(null,i)}let r=t.map(i=>i(e,o));return n.memoized.apply(null,[...r,o])}function lt(e,t={stateFn:dt}){return function(...o){let n=o;if(Array.isArray(n[0])){let[a,...p]=n;n=[...a,...p]}else n.length===1&&pt(n[0])&&(n=yt(n[0]));let r=n.slice(0,n.length-1),i=n[n.length-1],s=r.filter(a=>a.release&&typeof a.release=="function"),u=e(function(...a){return i.apply(null,a)}),l=ze(function(a,p){return t.stateFn.apply(null,[a,r,p,u])});function f(){l.reset(),u.reset(),s.forEach(a=>a.release())}return Object.assign(l.memoized,{release:f,projector:u.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function ft(e){return Ve(t=>{let o=t[e];return!ut()&&N()&&!(e in t)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),o},t=>t)}function pt(e){return!!e&&typeof e=="object"&&Object.values(e).every(t=>typeof t=="function")}function yt(e){let t=Object.values(e),o=Object.keys(e),n=(...r)=>o.reduce((i,s,u)=>m(y({},i),{[s]:r[u]}),{});return[...t,n]}function en(e){let{name:t,reducer:o,extraSelectors:n}=e,r=ft(t),i=ht(r,o),s=y({[`select${we(t)}State`]:r},i),u=n?n(s):{};return y(y({name:t,reducer:o},s),u)}function ht(e,t){let o=Rt(t);return(Pe(o)?Object.keys(o):[]).reduce((r,i)=>m(y({},r),{[`select${we(i)}`]:Ve(e,s=>s?.[i])}),{})}function Rt(e){return e(void 0,{type:"@ngrx/feature/init"})}function mt(e){return e instanceof c?h(e):e}function vt(e,t){return t.map((o,n)=>{if(e[n]instanceof c){let r=h(e[n]);return{key:o.key,reducerFactory:r.reducerFactory?r.reducerFactory:H,metaReducers:r.metaReducers?r.metaReducers:[],initialState:r.initialState}}return o})}function gt(e){return e.map(t=>t instanceof c?h(t):t)}function $e(e){return typeof e=="function"?e():e}function Et(e,t){return e.concat(t)}function bt(){if(h(Q,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function St(e,t){return function(o,n){let r=t.action(n)?K(n):n,i=e(o,r);return t.state()?K(i):i}}function K(e){Object.freeze(e);let t=L(e);return Object.getOwnPropertyNames(e).forEach(o=>{if(!o.startsWith("\u0275")&&st(e,o)&&(!t||o!=="caller"&&o!=="callee"&&o!=="arguments")){let n=e[o];(Ne(n)||L(n))&&!Object.isFrozen(n)&&K(n)}}),e}function Ft(e,t){return function(o,n){if(t.action(n)){let i=B(n);je(i,"action")}let r=e(o,n);if(t.state()){let i=B(r);je(i,"state")}return r}}function B(e,t=[]){return(Fe(e)||Ie(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,r)=>{if(n)return n;let i=e[r];return it(i)?n:Fe(i)||Ie(i)||rt(i)||nt(i)||tt(i)||_e(i)?!1:Pe(i)?B(i,[...t,r]):{path:[...t,r],value:i}},!1)}function je(e,t){if(e===!1)return;let o=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${o}". ${W}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=o,n}function It(e,t){return function(o,n){if(t.action(n)&&!le.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${W}#strictactionwithinngzone`);return e(o,n)}}function Ct(e){return N()?y({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function jt({strictActionSerializability:e,strictStateSerializability:t}){return o=>e||t?Ft(o,{action:n=>e&&!J(n),state:()=>t}):o}function wt({strictActionImmutability:e,strictStateImmutability:t}){return o=>e||t?St(o,{action:n=>e&&!J(n),state:()=>t}):o}function J(e){return e.type.startsWith("@ngrx")}function xt({strictActionWithinNgZone:e}){return t=>e?It(t,{action:o=>e&&!J(o)}):t}function Ot(e){return[{provide:be,useValue:e},{provide:Ee,useFactory:Tt,deps:[be]},{provide:S,deps:[Ee],useFactory:Ct},{provide:O,multi:!0,deps:[S],useFactory:wt},{provide:O,multi:!0,deps:[S],useFactory:jt},{provide:O,multi:!0,deps:[S],useFactory:xt}]}function qe(){return[{provide:Z,multi:!0,deps:[S],useFactory:At}]}function Tt(e){return e}function At(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(q).filter(([,o])=>o>1).map(([o])=>o);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(o=>`"${o}"`).join(", ")}. ${W}#strictactiontypeuniqueness`)}function Dt(e={},t={}){return[{provide:Oe,useFactory:bt},{provide:fe,useValue:t.initialState},{provide:G,useFactory:$e,deps:[fe]},{provide:V,useValue:e},{provide:he,useExisting:e instanceof c?e:V},{provide:Ae,deps:[V,[new M(he)]],useFactory:mt},{provide:ve,useValue:t.metaReducers?t.metaReducers:[]},{provide:ge,deps:[O,ve],useFactory:Et},{provide:pe,useValue:t.reducerFactory?t.reducerFactory:H},{provide:Te,deps:[pe,ge],useFactory:Ue},Be,Ye,Qe,Je,Xe,Ot(t.runtimeChecks),qe()]}function kt(e,t,o={}){return[{provide:Re,multi:!0,useValue:e instanceof Object?{}:o},{provide:ye,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(o instanceof c)&&o.reducerFactory?o.reducerFactory:H,metaReducers:!(o instanceof c)&&o.metaReducers?o.metaReducers:[],initialState:!(o instanceof c)&&o.initialState?o.initialState:void 0}},{provide:De,deps:[Re,ye],useFactory:vt},{provide:$,multi:!0,useValue:e instanceof Object?e.reducer:t},{provide:me,multi:!0,useExisting:t instanceof c?t:$},{provide:ke,multi:!0,deps:[$,[new M(me)]],useFactory:gt},qe()]}var Le=(()=>{let t=class t{constructor(n,r,i,s,u,l){}};t.\u0275fac=function(r){return new(r||t)(d(E),d(F),d(Y),d(Q),d(Oe,8),d(Z,8))},t.\u0275mod=w({type:t}),t.\u0275inj=j({});let e=t;return e})(),Mt=(()=>{let t=class t{constructor(n,r,i,s,u){this.features=n,this.featureReducers=r,this.reducerManager=i;let l=n.map((f,a)=>{let b=r.shift()[a];return m(y({},f),{reducers:b,initialState:$e(f.initialState)})});i.addFeatures(l)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}};t.\u0275fac=function(r){return new(r||t)(d(De),d(ke),d(A),d(Le),d(Z,8))},t.\u0275mod=w({type:t}),t.\u0275inj=j({});let e=t;return e})(),tn=(()=>{let t=class t{static forRoot(n,r){return{ngModule:Le,providers:[...Dt(n,r)]}}static forFeature(n,r,i={}){return{ngModule:Mt,providers:[...kt(n,r,i)]}}};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=w({type:t}),t.\u0275inj=j({});let e=t;return e})();function nn(...e){let t=e.pop(),o=e.map(n=>n.type);return{reducer:t,types:o}}function rn(e,...t){let o=new Map;for(let n of t)for(let r of n.types){let i=o.get(r);if(i){let s=(u,l)=>n.reducer(i(u,l),l);o.set(r,s)}else o.set(r,n.reducer)}return function(n=e,r){let i=o.get(r.type);return i?i(n,r):n}}var un=R("[Card] Load Cards"),an=R("[Card] Load Cards Success",g()),dn=R("[Card] Load Cards Failure",g()),ln=R("[Card] Add Card",g()),fn=R("[Card] Update Card",g()),pn=R("[Card] Delete Card",g());export{P as a,R as b,g as c,xe as d,E as e,G as f,F as g,T as h,He as i,Y as j,D as k,Q as l,Ve as m,en as n,Le as o,Mt as p,tn as q,nn as r,rn as s,un as t,an as u,ln as v};
