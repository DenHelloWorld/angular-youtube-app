import{$a as d,K as a,N as h,O as u,a as l,c as f,fa as c}from"./chunk-IKLVSTII.js";var v=typeof document=="object"&&!!document,n=class s{static get(r,t){if(r==null)return null;let e=s.parse(r.getItem(t)||"null")||null;return e===null?null:typeof e=="object"&&typeof e._expired<"u"&&e._expired!==0&&+new Date>e._expired?(s.remove(r,t),null):e._value||null}static set(r,t,e,i=0,o="t"){r?.setItem(t,s.stringify({_expired:s.getExpired(i,o),_value:e}))}static remove(r,t){r?.removeItem(t)}static key(r,t){return r==null?null:r.key(t)}static getExpired(r,t){if(r<=0)return 0;let e=+new Date;switch(t){case"s":return e+1e3*r;case"m":return e+1e3*60*r;case"h":return e+1e3*60*60*r;case"d":return e+1e3*60*60*24*r;case"w":return e+1e3*60*60*24*7*r;case"y":return e+1e3*60*60*24*365*r;case"t":return e+r;default:return 0}}static stringify(r){return JSON.stringify(r)}static parse(r){try{return JSON.parse(r)||null}catch{return r}}};var S=(()=>{class s{constructor(t){this.storage=t}get(t){return n.get(this.storage,t)}set(t,e,i=0,o="d"){return n.set(this.storage,t,e,i,o)}remove(t){if(typeof t=="string"){n.remove(this.storage,t);return}let e=0,i=n.key(this.storage,e),o=[];for(;i;)t.test(i)&&o.push(i),i=n.key(this.storage,++e);o.forEach(p=>n.remove(this.storage,p))}clear(){this.storage?.clear()}static{this.\u0275fac=function(e){return new(e||s)(h(Storage))}}static{this.\u0275prov=a({token:s,factory:s.\u0275fac})}}return s})(),g=(()=>{class s extends S{constructor(){super(v?localStorage:null)}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275prov=a({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var j=(()=>{class s{constructor(){this.router=u(d),this.lsService=u(g),this.KEY="userCredentials",this.initialUserData={userName:"",email:"",password:""},this.userData=c(this.initialUserData),this.authStatus=c(this.isAuth())}login(t){this.lsService.set(this.KEY,t),this.authStatus.set(this.isAuth()),this.userData.set(t),this.router.navigate(["/greeting"])}logout(){this.lsService.remove(this.KEY),this.authStatus.set(this.isAuth()),this.userData.set(l({},this.initialUserData)),this.router.navigate(["/login"])}isAuth(){return this.lsService.get(this.KEY)!==null}getUserData(){return f(this,null,function*(){let t=yield this.lsService.get(this.KEY);this.userData.set(t)})}static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275prov=a({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{g as a,j as b};
