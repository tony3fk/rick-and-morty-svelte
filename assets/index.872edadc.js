(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function B(){}function ee(e){return e()}function Q(){return Object.create(null)}function E(e){e.forEach(ee)}function ae(e){return typeof e=="function"}function te(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let P;function F(e,t){return P||(P=document.createElement("a")),P.href=t,e===P.href}function ue(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function ne(e,t,n){e.insertBefore(t,n||null)}function D(e){e.parentNode.removeChild(e)}function fe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function k(){return I(" ")}function U(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function de(e){return Array.from(e.childNodes)}function V(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let G;function N(e){G=e}const L=[],W=[],S=[],X=[],he=Promise.resolve();let K=!1;function me(){K||(K=!0,he.then(re))}function R(e){S.push(e)}const T=new Set;let j=0;function re(){const e=G;do{for(;j<L.length;){const t=L[j];j++,N(t),ge(t.$$)}for(N(null),L.length=0,j=0;W.length;)W.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];T.has(n)||(T.add(n),n())}S.length=0}while(L.length);for(;X.length;)X.pop()();K=!1,T.clear(),N(e)}function ge(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(R)}}const q=new Set;let x;function _e(){x={r:0,c:[],p:x}}function pe(){x.r||E(x.c),x=x.p}function O(e,t){e&&e.i&&(q.delete(e),e.i(t))}function z(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),x.c.push(()=>{q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function $e(e){e&&e.c()}function oe(e,t,n,r){const{fragment:o,on_mount:l,on_destroy:a,after_update:_}=e.$$;o&&o.m(t,n),r||R(()=>{const u=l.map(ee).filter(ae);a?a.push(...u):E(u),e.$$.on_mount=[]}),_.forEach(R)}function ce(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(L.push(e),me(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function le(e,t,n,r,o,l,a,_=[-1]){const u=G;N(e);const c=e.$$={fragment:null,ctx:null,props:l,update:B,not_equal:o,bound:Q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Q(),dirty:_,skip_bound:!1,root:t.target||u.$$.root};a&&a(c.root);let v=!1;if(c.ctx=n?n(e,t.props||{},(h,b,...m)=>{const $=m.length?m[0]:b;return c.ctx&&o(c.ctx[h],c.ctx[h]=$)&&(!c.skip_bound&&c.bound[h]&&c.bound[h]($),v&&ye(e,h)),b}):[],c.update(),v=!0,E(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const h=de(t.target);c.fragment&&c.fragment.l(h),h.forEach(D)}else c.fragment&&c.fragment.c();t.intro&&O(e.$$.fragment),oe(e,t.target,t.anchor,t.customElement),re()}N(u)}class se{$destroy(){ce(this,1),this.$destroy=B}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ve(e){let t,n,r,o,l,a,_=e[0].name+"",u,c,v,h=e[0].species+"",b;return{c(){t=y("div"),n=y("img"),l=k(),a=y("h3"),u=I(_),c=k(),v=y("h4"),b=I(h),F(n.src,r=e[0].image)||g(n,"src",r),g(n,"alt",o=e[0].name),g(t,"class","character")},m(m,$){ne(m,t,$),d(t,n),d(t,l),d(t,a),d(a,u),d(t,c),d(t,v),d(v,b)},p(m,[$]){$&1&&!F(n.src,r=m[0].image)&&g(n,"src",r),$&1&&o!==(o=m[0].name)&&g(n,"alt",o),$&1&&_!==(_=m[0].name+"")&&V(u,_),$&1&&h!==(h=m[0].species+"")&&V(b,h)},i:B,o:B,d(m){m&&D(t)}}}function be(e,t,n){let{character:r}=t;return e.$$set=o=>{"character"in o&&n(0,r=o.character)},[r]}class we extends se{constructor(t){super(),le(this,t,be,ve,te,{character:0})}}const xe="/rick-and-morty-svelte/assets/svelte-logo.660ce142.jpeg";function Y(e,t,n){const r=e.slice();return r[5]=t[n],r}function Z(e){let t,n;return t=new we({props:{character:e[5]}}),{c(){$e(t.$$.fragment)},m(r,o){oe(t,r,o),n=!0},p(r,o){const l={};o&1&&(l.character=r[5]),t.$set(l)},i(r){n||(O(t.$$.fragment,r),n=!0)},o(r){z(t.$$.fragment,r),n=!1},d(r){ce(t,r)}}}function ke(e){let t,n,r,o,l,a,_,u,c,v,h,b,m,$,A,C,M,H,w=e[0],i=[];for(let s=0;s<w.length;s+=1)i[s]=Z(Y(e,w,s));const ie=s=>z(i[s],1,1,()=>{i[s]=null});return{c(){t=y("div"),n=y("a"),r=y("img"),l=k(),a=y("h1"),a.textContent="Rick & Morty API",_=k(),u=y("div"),c=y("button"),v=I("Previus"),b=k(),m=y("button"),m.textContent="Next",$=k(),A=y("div");for(let s=0;s<i.length;s+=1)i[s].c();F(r.src,o=xe)||g(r,"src",o),g(r,"alt","logo-svelte"),g(r,"class","logo"),g(n,"href","https://svelte.dev/"),g(n,"target","_blank"),g(a,"class","title"),g(c,"class","btn"),c.disabled=h=e[1]===1,g(m,"class","btn"),g(u,"class","btns"),g(A,"class","grid"),g(t,"class","container")},m(s,p){ne(s,t,p),d(t,n),d(n,r),d(t,l),d(t,a),d(t,_),d(t,u),d(u,c),d(c,v),d(u,b),d(u,m),d(t,$),d(t,A);for(let f=0;f<i.length;f+=1)i[f].m(A,null);C=!0,M||(H=[U(c,"click",e[3]),U(m,"click",e[2])],M=!0)},p(s,[p]){if((!C||p&2&&h!==(h=s[1]===1))&&(c.disabled=h),p&1){w=s[0];let f;for(f=0;f<w.length;f+=1){const J=Y(s,w,f);i[f]?(i[f].p(J,p),O(i[f],1)):(i[f]=Z(J),i[f].c(),O(i[f],1),i[f].m(A,null))}for(_e(),f=w.length;f<i.length;f+=1)ie(f);pe()}},i(s){if(!C){for(let p=0;p<w.length;p+=1)O(i[p]);C=!0}},o(s){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)z(i[p]);C=!1},d(s){s&&D(t),fe(i,s),M=!1,E(H)}}}function Ee(e,t,n){let r=[],o=1;async function l(){const c=await(await fetch(`https://rickandmortyapi.com/api/character?page=${o}`)).json();console.log(c),n(0,r=c.results)}l();function a(){n(1,o++,o),l()}function _(){n(1,o--,o),l()}return[r,o,a,_]}class Ae extends se{constructor(t){super(),le(this,t,Ee,ke,te,{})}}new Ae({target:document.getElementById("app")});
