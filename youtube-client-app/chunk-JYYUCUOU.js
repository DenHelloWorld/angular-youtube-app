import{Aa as E,B as O,Ba as ve,Bb as Se,C as V,Cb as we,D as L,E as k,F as P,G as U,Ia as Te,Ib as xe,Jb as se,La as le,Lb as ce,M as l,Mb as pe,N as A,Nb as de,Ra as Z,Ta as z,U as H,Ua as J,V as be,Va as W,W as f,X as c,Y as s,Ya as S,_a as Ie,aa as C,ba as p,ca as m,d as Oe,da as v,e as Ve,ea as N,fa as q,g as T,ga as _,ha as ae,i as M,ia as oe,j as he,ja as h,ka as Q,la as F,lb as X,ma as $,o as _e,oa as Y,pa as G,qa as re,r as I,ra as ye,s as B,sa as Ce,sb as ee,tb as R,u as D,w as y,x as j,ya as K,zb as te}from"./chunk-RQ2XIWTX.js";var Fe=Oe((ie,De)=>{"use strict";(function(e,a){typeof ie=="object"&&typeof De<"u"?a(ie):typeof define=="function"&&define.amd?define(["exports"],a):a((e=typeof globalThis<"u"?globalThis:e||self).buildUrl={})})(ie,function(e){"use strict";function a(o,r,d){var g=[];for(var je in o)(function(u){var b,ne;Object.prototype.hasOwnProperty.call(o,u)&&o[u]!==void 0&&(Array.isArray(o[u])&&o[u].length?d?(ne=d==="order_desc"?o[u].length-1:0,o[u].forEach(function(x){switch(b=x!==0?x||"":0,d){case"array":g.push("".concat(u,"[]=").concat(encodeURIComponent(String(b).trim())));break;case"order_asc":g.push("".concat(u,"[").concat(ne++,"]=").concat(encodeURIComponent(String(b).trim())));break;case"order_desc":g.push("".concat(u,"[").concat(ne--,"]=").concat(encodeURIComponent(String(b).trim())));break;default:g.push("".concat(u,"=").concat(encodeURIComponent(String(b).trim())))}})):(b=o[u].map(function(x){return encodeURIComponent(String(x!==0?x||"":0).trim())}),g.push("".concat(u,"=").concat(encodeURIComponent(String(b).trim())))):(b=r?String(o[u]).toLowerCase()||"":o[u]!==0?o[u]||"":0,g.push("".concat(u,"=").concat(encodeURIComponent(String(b).trim())))))})(je);return"?".concat(g.join("&"))}function t(o,r,d){r===void 0&&(r=""),r[r.length-1]==="/"&&(r=r.slice(0,-1));var g=String(o).trim();return d&&(g=g.toLowerCase()),g.indexOf("/")===0?r+=g:r+="/".concat(g),r}function i(o,r){var d="#".concat(String(o).trim());return r?d.toLowerCase():d}function n(o,r){var d;return o===null?d="":typeof o=="object"?(d="",r=o):d=o,r!=null&&r.path&&(d=t(r.path,d,r.lowerCase)),r!=null&&r.queryParams&&(d+=a(r.queryParams,r.lowerCase,r.disableCSV)),r!=null&&r.hash&&(d+=i(r.hash,r.lowerCase)),d}e.appendPath=t,e.buildHash=i,e.buildQueryString=a,e.buildUrl=n,e.default=n,Object.defineProperty(e,"__esModule",{value:!0})})});var ke=["*"];function Pe(e,a){e&1&&_(0)}function Ue(e,a){if(e&1&&(p(0,"div",4),f(1,Pe,1,0,"ng-container",5),m()),e&2){let t=h();c("data-pc-section","start"),l(),s("ngTemplateOutlet",t.startTemplate)}}function Ae(e,a){e&1&&_(0)}function He(e,a){if(e&1&&(p(0,"div",6),f(1,Ae,1,0,"ng-container",5),m()),e&2){let t=h();c("data-pc-section","center"),l(),s("ngTemplateOutlet",t.centerTemplate)}}function Ne(e,a){e&1&&_(0)}function qe(e,a){if(e&1&&(p(0,"div",7),f(1,Ne,1,0,"ng-container",5),m()),e&2){let t=h();c("data-pc-section","end"),l(),s("ngTemplateOutlet",t.endTemplate)}}var ft=(()=>{class e{el;style;styleClass;ariaLabelledBy;templates;startTemplate;endTemplate;centerTemplate;constructor(t){this.el=t}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"start":case"left":this.startTemplate=t.template;break;case"end":case"right":this.endTemplate=t.template;break;case"center":this.centerTemplate=t.template;break}})}static \u0275fac=function(i){return new(i||e)(A(P))};static \u0275cmp=y({type:e,selectors:[["p-toolbar"]],contentQueries:function(i,n,o){if(i&1&&$(o,ee,4),i&2){let r;Y(r=G())&&(n.templates=r)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy"},ngContentSelectors:ke,decls:5,vars:9,consts:[["role","toolbar",3,"ngClass","ngStyle"],["class","p-toolbar-group-left p-toolbar-group-start",4,"ngIf"],["class","p-toolbar-group-center",4,"ngIf"],["class","p-toolbar-group-right p-toolbar-group-end",4,"ngIf"],[1,"p-toolbar-group-left","p-toolbar-group-start"],[4,"ngTemplateOutlet"],[1,"p-toolbar-group-center"],[1,"p-toolbar-group-right","p-toolbar-group-end"]],template:function(i,n){i&1&&(Q(),p(0,"div",0),F(1),f(2,Ue,2,2,"div",1)(3,He,2,2,"div",2)(4,qe,2,2,"div",3),m()),i&2&&(C(n.styleClass),s("ngClass","p-toolbar p-component")("ngStyle",n.style),c("aria-labelledby",n.ariaLabelledBy)("data-pc-name","toolbar"),l(2),s("ngIf",n.startTemplate),l(),s("ngIf",n.centerTemplate),l(),s("ngIf",n.endTemplate))},dependencies:[Z,z,W,J],styles:[`@layer primeng{.p-toolbar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.p-toolbar-group-start,.p-toolbar-group-center,.p-toolbar-group-end,.p-toolbar-group-left,.p-toolbar-group-right{display:flex;align-items:center}}
`],encapsulation:2,changeDetection:0})}return e})(),gt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=j({type:e});static \u0275inj=B({imports:[S,R,R]})}return e})();var me=Ve(Fe());var Ee="/search";var Re="/videos";var ue={detailsByVideoId(e){return(0,me.buildUrl)(Re,{queryParams:{part:"snippet,contentDetails,statistics",id:e}})??""},videosByTitle(e){return(0,me.buildUrl)(Ee,{queryParams:{part:"snippet",type:"video",q:e,maxResults:10}})??""}};var Me=(()=>{let a=class a{constructor(i){this.http=i}getById(i){let n=ue.detailsByVideoId(i);return this.http.get(n).pipe(M(o=>o.items))}getByTitle(i){let n=ue.videosByTitle(i);return this.http.get(n).pipe(M(o=>o.items.map(r=>r.id.videoId)),_e(o=>he(o.map(r=>this.getById(r)))),M(o=>o.flat()))}};a.\u0275fac=function(n){return new(n||a)(D(Ie))},a.\u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var Be=(()=>{let a=class a{constructor(){this.filterTitle=new T(""),this.filterDate=new T(""),this.filterView=new T(""),this.detalisId=new T(""),this.searchResultsData=new T({filterTitle:"",filterDate:"",filterViews:"",searchInputHeader:"",searchedItems:[]}),this.filterTitle$=this.filterTitle.asObservable(),this.filterDate$=this.filterDate.asObservable(),this.filterView$=this.filterView.asObservable(),this.searchResultsData$=this.searchResultsData.asObservable(),this.detalisId$=this.detalisId.asObservable()}setFilterTitle(i){this.filterTitle.next(i)}setFilterDate(i){this.filterDate.next(i)}setFilterView(i){this.filterView.next(i)}setSearchResultsData(i){this.searchResultsData.next(i)}setDetalisId(i){this.detalisId.next(i)}};a.\u0275fac=function(n){return new(n||a)},a.\u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var Dt=(()=>{let a=class a{constructor(i,n){this.youtubeService=i,this.sharedService=n,this.SearchResultsData={filterTitle:"",filterDate:"",filterViews:"",searchInputHeader:"",searchedItems:[]},this.subscriptions=[],this.handleFiltersChange()}handleFiltersChange(){this.sharedService.filterTitle$.subscribe(i=>{this.SearchResultsData.filterTitle=i,this.listenSearchResultsData()}),this.sharedService.filterDate$.subscribe(i=>{this.SearchResultsData.filterDate=i,this.listenSearchResultsData()}),this.sharedService.filterView$.subscribe(i=>{this.SearchResultsData.filterViews=i,this.listenSearchResultsData()}),this.subscriptions.push(this.sharedService.searchResultsData$.subscribe(i=>{this.SearchResultsData=i}))}listenSearchResultsData(){this.sharedService.setSearchResultsData(this.SearchResultsData)}destroyListeners(){this.subscriptions.forEach(i=>i.unsubscribe())}searchByTitle(i){this.youtubeService.getByTitle(i).subscribe(n=>{this.SearchResultsData.searchedItems=n})}searchedItems(){return this.searchByTitle(this.SearchResultsData.searchInputHeader),this.SearchResultsData.searchedItems}};a.\u0275fac=function(n){return new(n||a)(D(Me),D(Be))},a.\u0275prov=I({token:a,factory:a.\u0275fac,providedIn:"root"});let e=a;return e})();var fe=(()=>{class e extends te{static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["MinusIcon"]],standalone:!0,features:[H,K],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(i,n){i&1&&(L(),p(0,"svg",0),v(1,"path",1),m()),i&2&&(C(n.getClassNames()),c("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},dependencies:[S],encapsulation:2})}return e})();var ge=(()=>{class e extends te{pathId;ngOnInit(){this.pathId="url(#"+X()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=k(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["PlusIcon"]],standalone:!0,features:[H,K],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(L(),p(0,"svg",0)(1,"g"),v(2,"path",1),m(),p(3,"defs")(4,"clipPath",2),v(5,"rect",3),m()()()),i&2&&(C(n.getClassNames()),c("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),l(),c("clip-path",n.pathId),l(3),s("id",n.pathId))},encapsulation:2})}return e})();var Ye=["*",[["p-header"]]],Ge=["*","p-header"],Ke=(e,a)=>({"p-fieldset p-component":!0,"p-fieldset-toggleable":e,"p-fieldset-expanded":a}),Ze=e=>({transitionParams:e,height:"0"}),ze=e=>({value:"hidden",params:e}),Je=e=>({transitionParams:e,height:"*"}),We=e=>({value:"visible",params:e});function Xe(e,a){e&1&&v(0,"PlusIcon",11),e&2&&(s("styleClass","p-fieldset-toggler"),c("data-pc-section","togglericon"))}function et(e,a){e&1&&_(0)}function tt(e,a){if(e&1&&(p(0,"span",12),f(1,et,1,0,"ng-container",6),m()),e&2){let t=h(3);c("data-pc-section","togglericon"),l(),s("ngTemplateOutlet",t.expandIconTemplate)}}function it(e,a){if(e&1&&(N(0),f(1,Xe,1,2,"PlusIcon",9)(2,tt,2,2,"span",10),q()),e&2){let t=h(2);l(),s("ngIf",!t.expandIconTemplate),l(),s("ngIf",t.expandIconTemplate)}}function nt(e,a){e&1&&v(0,"MinusIcon",11),e&2&&(s("styleClass","p-fieldset-toggler"),c("aria-hidden",!0)("data-pc-section","togglericon"))}function at(e,a){e&1&&_(0)}function ot(e,a){if(e&1&&(p(0,"span",12),f(1,at,1,0,"ng-container",6),m()),e&2){let t=h(3);c("data-pc-section","togglericon"),l(),s("ngTemplateOutlet",t.collapseIconTemplate)}}function rt(e,a){if(e&1&&(N(0),f(1,nt,1,3,"MinusIcon",9)(2,ot,2,2,"span",10),q()),e&2){let t=h(2);l(),s("ngIf",!t.collapseIconTemplate),l(),s("ngIf",t.collapseIconTemplate)}}function lt(e,a){e&1&&_(0)}function st(e,a){if(e&1){let t=ae();N(0),p(1,"a",7),oe("click",function(n){O(t);let o=h();return V(o.toggle(n))})("keydown",function(n){O(t);let o=h();return V(o.onKeyDown(n))}),f(2,it,3,2,"ng-container",8)(3,rt,3,2,"ng-container",8)(4,lt,1,0,"ng-container",6),m(),q()}if(e&2){let t=h(),i=re(4);l(),c("id",t.id+"_header")("aria-controls",t.id+"_content")("aria-expanded",!t.collapsed)("aria-label",t.buttonAriaLabel),l(),s("ngIf",t.collapsed),l(),s("ngIf",!t.collapsed),l(),s("ngTemplateOutlet",i)}}function ct(e,a){e&1&&_(0)}function pt(e,a){if(e&1&&(p(0,"span",13),ye(1),m(),F(2,1),f(3,ct,1,0,"ng-container",6)),e&2){let t=h();c("data-pc-section","legendtitle"),l(),Ce(t.legend),l(2),s("ngTemplateOutlet",t.headerTemplate)}}function dt(e,a){e&1&&_(0)}var Jt=(()=>{class e{el;legend;toggleable;collapsed=!1;style;styleClass;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";collapsedChange=new U;onBeforeToggle=new U;onAfterToggle=new U;templates;get id(){return X()}get buttonAriaLabel(){return this.legend}animating;headerTemplate;contentTemplate;collapseIconTemplate;expandIconTemplate;constructor(t){this.el=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"expandicon":this.expandIconTemplate=t.template;break;case"collapseicon":this.collapseIconTemplate=t.template;break;case"content":this.contentTemplate=t.template;break}})}toggle(t){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:t,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),this.onAfterToggle.emit({originalEvent:t,collapsed:this.collapsed}),t.preventDefault()}onKeyDown(t){(t.code==="Enter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}expand(){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}static \u0275fac=function(i){return new(i||e)(A(P))};static \u0275cmp=y({type:e,selectors:[["p-fieldset"]],contentQueries:function(i,n,o){if(i&1&&$(o,ee,4),i&2){let r;Y(r=G())&&(n.templates=r)}},hostAttrs:[1,"p-element"],inputs:{legend:"legend",toggleable:[2,"toggleable","toggleable",le],collapsed:[2,"collapsed","collapsed",le],style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[be],ngContentSelectors:Ge,decls:9,vars:28,consts:[["legendContent",""],[3,"ngClass","ngStyle"],[1,"p-fieldset-legend"],[4,"ngIf","ngIfElse"],["role","region",1,"p-toggleable-content"],[1,"p-fieldset-content"],[4,"ngTemplateOutlet"],["pRipple","","tabindex","0","role","button",3,"click","keydown"],[4,"ngIf"],[3,"styleClass",4,"ngIf"],["class","p-fieldset-toggler",4,"ngIf"],[3,"styleClass"],[1,"p-fieldset-toggler"],[1,"p-fieldset-legend-text"]],template:function(i,n){if(i&1){let o=ae();Q(Ye),p(0,"fieldset",1)(1,"legend",2),f(2,st,5,7,"ng-container",3)(3,pt,4,3,"ng-template",null,0,Te),m(),p(5,"div",4),oe("@fieldsetContent.done",function(){return O(o),V(n.onToggleDone())}),p(6,"div",5),F(7),f(8,dt,1,0,"ng-container",6),m()()()}if(i&2){let o=re(4);C(n.styleClass),s("ngClass",ve(17,Ke,n.toggleable,!n.collapsed&&n.toggleable))("ngStyle",n.style),c("id",n.id)("data-pc-name","fieldset")("data-pc-section","root"),l(),c("data-pc-section","legend"),l(),s("ngIf",n.toggleable)("ngIfElse",o),l(3),s("@fieldsetContent",n.collapsed?E(22,ze,E(20,Ze,n.transitionOptions)):E(26,We,E(24,Je,n.animating?n.transitionOptions:"0ms"))),c("id",n.id+"_content")("aria-labelledby",n.id+"_header")("aria-hidden",n.collapsed)("data-pc-section","toggleablecontent"),l(),c("data-pc-section","content"),l(2),s("ngTemplateOutlet",n.contentTemplate)}},dependencies:()=>[Z,z,W,J,Se,fe,ge],styles:[`@layer primeng{.p-fieldset{min-width:initial}.p-fieldset-legend>a,.p-fieldset-legend>span{display:flex;align-items:center;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-fieldset-legend-text{line-height:1}.p-fieldset-toggleable.p-fieldset-expanded>.p-toggleable-content:not(.ng-animating){overflow:visible}.p-fieldset-toggleable .p-toggleable-content{overflow:hidden}}
`],encapsulation:2,data:{animation:[xe("fieldsetContent",[pe("hidden",ce({height:"0"})),pe("visible",ce({height:"*"})),de("visible <=> hidden",[se("{{transitionParams}}")]),de("void => *",se(0))])]},changeDetection:0})}return e})(),Wt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=j({type:e});static \u0275inj=B({imports:[S,we,fe,ge,R]})}return e})();export{ft as a,gt as b,Me as c,Be as d,Dt as e,Jt as f,Wt as g};