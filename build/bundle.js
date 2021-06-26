var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function c(t){t.forEach(o)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t,e,n,o,r,c,i){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(l){const r=a(e,n,o,i);t.p(r,l)}}function d(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t){return null==t?"":t}const f="undefined"!=typeof window;let m=f?()=>window.performance.now():()=>Date.now(),$=f?t=>requestAnimationFrame(t):t;const h=new Set;function y(t){h.forEach((e=>{e.c(t)||(h.delete(e),e.f())})),0!==h.size&&$(y)}function g(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function P(){return x(" ")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function V(t,e){t.value=null==e?"":e}function E(t,e,n){t.classList[n?"add":"remove"](e)}function U(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const A=new Set;let z,L=0;function Q(t,e,n,o,r,c,i,l=0){const s=16.666/o;let a="{\n";for(let t=0;t<=1;t+=s){const o=e+(n-e)*c(t);a+=100*t+`%{${i(o,1-o)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,p=t.ownerDocument;A.add(p);const f=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(b("style")).sheet),m=p.__svelte_rules||(p.__svelte_rules={});m[d]||(m[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,L+=1,d}function j(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),L-=r,L||$((()=>{L||(A.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),A.clear())})))}function F(t){z=t}function N(){if(!z)throw new Error("Function called outside component initialization");return z}function q(t){N().$$.on_destroy.push(t)}const B=[],S=[],H=[],M=[],T=Promise.resolve();let R=!1;function D(t){H.push(t)}let G=!1;const W=new Set;function J(){if(!G){G=!0;do{for(let t=0;t<B.length;t+=1){const e=B[t];F(e),X(e.$$)}for(F(null),B.length=0;S.length;)S.pop()();for(let t=0;t<H.length;t+=1){const e=H[t];W.has(e)||(W.add(e),e())}H.length=0}while(B.length);for(;M.length;)M.pop()();R=!1,G=!1,W.clear()}}function X(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let I;function K(t,e,n){t.dispatchEvent(U(`${e?"intro":"outro"}${n}`))}const Y=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||c(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function ot(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),Z.c.push((()=>{Y.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const rt={duration:0};function ct(n,o,r,l){let s=o(n,r),a=l?0:1,u=null,d=null,p=null;function f(){p&&j(n,p)}function g(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(o){const{delay:r=0,duration:i=300,easing:l=e,tick:v=t,css:w}=s||rt,b={start:m()+r,b:o};o||(b.group=Z,Z.r+=1),u||d?d=b:(w&&(f(),p=Q(n,a,o,i,r,l,w)),o&&v(0,1),u=g(b,i),D((()=>K(n,o,"start"))),function(t){let e;0===h.size&&$(y),new Promise((n=>{h.add(e={c:t,f:n})}))}((t=>{if(d&&t>d.start&&(u=g(d,i),d=null,K(n,u.b,"start"),w&&(f(),p=Q(n,a,u.b,u.duration,0,l,s.css))),u)if(t>=u.end)v(a=u.b,1-a),K(n,u.b,"end"),d||(u.b?f():--u.group.r||c(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*l(e/u.duration),v(a,1-a)}return!(!u&&!d)})))}return{run(t){i(s)?(I||(I=Promise.resolve(),I.then((()=>{I=null}))),I).then((()=>{s=s(),v(t)})):v(t)},end(){f(),u=d=null}}}function it(t){t&&t.c()}function lt(t,e,n,r){const{fragment:l,on_mount:s,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,n),r||D((()=>{const e=s.map(o).filter(i);a?a.push(...e):c(e),t.$$.on_mount=[]})),u.forEach(D)}function st(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(B.push(t),R||(R=!0,T.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,o,i,l,s,a=[-1]){const u=z;F(e);const d=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&at(e,t)),n})):[],d.update(),p=!0,c(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(w)}else d.fragment&&d.fragment.c();n.intro&&nt(e.$$.fragment),lt(e,n.target,n.anchor,n.customElement),J()}F(u)}class dt{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pt=[];const ft="https://api.binance.com/api/v1/ticker/24hr";let mt,$t=[];const ht=function(e,n=t){let o;const r=[];function c(t){if(l(e,t)&&(e=t,o)){const t=!pt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),pt.push(n,e)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(i,l=t){const s=[i,l];return r.push(s),1===r.length&&(o=n(c)||t),i(e),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}($t,(async t=>{mt=await fetch(ft),$t=await mt.json(),t($t)}));function yt(t){let e,n,o,r;const c=t[4].default,i=s(c,t,t[3],null);return{c(){e=b("span"),i&&i.c(),k(e,"class",n=p(`aa-typography ${t[0].toLowerCase()} ${t[2].class||""}`)+" svelte-2vpi93"),k(e,"style",o=t[2].style||""),E(e,"block",t[1])},m(t,n){v(t,e,n),i&&i.m(e,null),r=!0},p(t,[l]){i&&i.p&&(!r||8&l)&&u(i,c,t,t[3],l,null,null),(!r||5&l&&n!==(n=p(`aa-typography ${t[0].toLowerCase()} ${t[2].class||""}`)+" svelte-2vpi93"))&&k(e,"class",n),(!r||4&l&&o!==(o=t[2].style||""))&&k(e,"style",o),7&l&&E(e,"block",t[1])},i(t){r||(nt(i,t),r=!0)},o(t){ot(i,t),r=!1},d(t){t&&w(e),i&&i.d(t)}}}function gt(t,e,o){let{$$slots:r={},$$scope:c}=e,{type:i="body1"}=e,{block:l=!1}=e;return t.$$set=t=>{o(2,e=n(n({},e),d(t))),"type"in t&&o(0,i=t.type),"block"in t&&o(1,l=t.block),"$$scope"in t&&o(3,c=t.$$scope)},e=d(e),[i,l,e,c,r]}class vt extends dt{constructor(t){super(),ut(this,t,gt,yt,l,{type:0,block:1})}}function wt(t){const e=t-1;return e*e*e+1}function bt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const c=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*c}}function Ct(t,{delay:e=0,duration:n=400,easing:o=wt,x:r=0,y:c=0,opacity:i=0}={}){const l=getComputedStyle(t),s=+l.opacity,a="none"===l.transform?"":l.transform,u=s*(1-i);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*c}px);\n\t\t\topacity: ${s-u*e}`}}const xt=t=>({}),Pt=t=>({}),_t=t=>({}),kt=t=>({});function Ot(e){let n,o,r,i,l,a,d,f,m,$,h,y,C,x,O,V;const U=[Et,Vt],A=[];function z(t,e){return t[0]?0:1}i=z(e),l=A[i]=U[i](e),f=new vt({props:{$$slots:{default:[At]},$$scope:{ctx:e}}});const L=e[8].footer,Q=s(L,e,e[12],Pt),j=Q||function(e){let n;return{c(){n=b("div")},m(t,o){v(t,n,o),e[10](n)},p:t,d(t){t&&w(n),e[10](null)}}}(e);return{c(){n=b("div"),o=b("div"),r=b("div"),l.c(),a=P(),d=b("div"),it(f.$$.fragment),m=P(),$=b("div"),j&&j.c(),k(r,"class","svelte-1dhy857"),E(r,"header",e[0]||!Boolean(e[4])),k(d,"class","content svelte-1dhy857"),k($,"class","svelte-1dhy857"),E($,"footer",!Boolean(e[3])),k(o,"class","aa-popup svelte-1dhy857"),k(n,"class",y=p(`overlay ${e[6].class||""}`)+" svelte-1dhy857")},m(t,c){v(t,n,c),g(n,o),g(o,r),A[i].m(r,null),g(o,a),g(o,d),lt(f,d,null),g(o,m),g(o,$),j&&j.m($,null),x=!0,O||(V=[_(o,"click",Lt),_(n,"click",e[5])],O=!0)},p(t,e){let o=i;i=z(t),i===o?A[i].p(t,e):(tt(),ot(A[o],1,1,(()=>{A[o]=null})),et(),l=A[i],l?l.p(t,e):(l=A[i]=U[i](t),l.c()),nt(l,1),l.m(r,null)),17&e&&E(r,"header",t[0]||!Boolean(t[4]));const c={};4096&e&&(c.$$scope={dirty:e,ctx:t}),f.$set(c),Q?Q.p&&(!x||4096&e)&&u(Q,L,t,t[12],e,xt,Pt):j&&j.p&&8&e&&j.p(t,e),8&e&&E($,"footer",!Boolean(t[3])),(!x||64&e&&y!==(y=p(`overlay ${t[6].class||""}`)+" svelte-1dhy857"))&&k(n,"class",y)},i(t){x||(nt(l),nt(f.$$.fragment,t),nt(j,t),t&&D((()=>{h||(h=ct(o,Ct,{duration:300,y:-500,opacity:.9},!0)),h.run(1)})),t&&D((()=>{C||(C=ct(n,bt,{},!0)),C.run(1)})),x=!0)},o(t){ot(l),ot(f.$$.fragment,t),ot(j,t),t&&(h||(h=ct(o,Ct,{duration:300,y:-500,opacity:.9},!1)),h.run(0)),t&&(C||(C=ct(n,bt,{},!1)),C.run(0)),x=!1},d(t){t&&w(n),A[i].d(),st(f),j&&j.d(t),t&&h&&h.end(),t&&C&&C.end(),O=!1,c(V)}}}function Vt(e){let n;const o=e[8].header,r=s(o,e,e[12],kt),c=r||function(e){let n;return{c(){n=b("div")},m(t,o){v(t,n,o),e[9](n)},p:t,d(t){t&&w(n),e[9](null)}}}(e);return{c(){c&&c.c()},m(t,e){c&&c.m(t,e),n=!0},p(t,e){r?r.p&&(!n||4096&e)&&u(r,o,t,t[12],e,_t,kt):c&&c.p&&16&e&&c.p(t,e)},i(t){n||(nt(c,t),n=!0)},o(t){ot(c,t),n=!1},d(t){c&&c.d(t)}}}function Et(t){let e,n;return e=new vt({props:{type:"headline",$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){it(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,n){const o={};4097&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function Ut(t){let e;return{c(){e=x(t[0])},m(t,n){v(t,e,n)},p(t,n){1&n&&O(e,t[0])},d(t){t&&w(e)}}}function At(t){let e;const n=t[8].default,o=s(n,t,t[12],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||4096&r)&&u(o,n,t,t[12],r,null,null)},i(t){e||(nt(o,t),e=!0)},o(t){ot(o,t),e=!1},d(t){o&&o.d(t)}}}function zt(t){let e,n,o,r=t[1]&&Ot(t);return{c(){e=b("div"),n=b("div"),r&&r.c()},m(c,i){v(c,e,i),g(e,n),r&&r.m(n,null),t[11](n),o=!0},p(t,[e]){t[1]?r?(r.p(t,e),2&e&&nt(r,1)):(r=Ot(t),r.c(),nt(r,1),r.m(n,null)):r&&(tt(),ot(r,1,1,(()=>{r=null})),et())},i(t){o||(nt(r),o=!0)},o(t){ot(r),o=!1},d(n){n&&w(e),r&&r.d(),t[11](null)}}}const Lt=t=>t.stopPropagation();function Qt(t,e,o){let r,{$$slots:c={},$$scope:i}=e,{header:l=""}=e,{isOpen:s=!1}=e,a=null,u=null,p="";const f=function(){const t=N();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=U(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}(),m=()=>{f("close","")},$=t=>{27===t.keyCode&&m()};var h;return h=()=>(window.addEventListener("keydown",$),document.body.appendChild(r),()=>{window.removeEventListener("keydown",$),document.body.removeChild(r)}),N().$$.on_mount.push(h),t.$$set=t=>{o(6,e=n(n({},e),d(t))),"header"in t&&o(0,l=t.header),"isOpen"in t&&o(1,s=t.isOpen),"$$scope"in t&&o(12,i=t.$$scope)},t.$$.update=()=>{130&t.$$.dirty&&"undefined"!=typeof window&&(s?(o(7,p=document.body.style.overflow),document.body.style.overflow="hidden"):document.body.style.overflow=p)},e=d(e),[l,s,r,a,u,m,e,p,c,function(t){S[t?"unshift":"push"]((()=>{u=t,o(4,u)}))},function(t){S[t?"unshift":"push"]((()=>{a=t,o(3,a)}))},function(t){S[t?"unshift":"push"]((()=>{r=t,o(2,r)}))},i]}class jt extends dt{constructor(t){super(),ut(this,t,Qt,zt,l,{header:0,isOpen:1})}}function Ft(e){let n;return{c(){n=b("div"),n.textContent=`${Tt}`},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Nt(e){let n;return{c(){n=b("div"),n.textContent=`${Mt}`},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function qt(e){let n;return{c(){n=b("div"),n.textContent=`${Dt}`},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Bt(e){let n;return{c(){n=b("div"),n.textContent=`${Rt}`},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function St(t){let e,n,o,r,c,i,l,s,a,u,d,p,f,m,$,h,y,C,V,E,U,A,z,L,Q,j,F,N,q,B,S,H,M,T,R,D,G,W,J,X,I,K,Y,Z,tt,et,nt,ot,rt,ct,it,lt,st,at,ut,dt,pt,ft,mt,$t,ht,yt,gt,vt,wt,bt,Ct,xt,Pt,_t,kt,Ot,Vt,Et,Ut,At,zt,Lt,Qt,jt,St,Ht,Mt,Tt,Rt,Dt,Wt,Jt,Xt,It,Kt,Yt,Zt,te,ee,ne,oe,re,ce,ie,le,se,ae,ue,de,pe,fe,me,$e=t[1].symbol+"",he=t[1].lastPrice+"",ye=t[1].openPrice+"",ge=t[1].prevClosePrice+"",ve=t[1].priceChange+"",we=parseFloat(t[1].priceChangePercent).toFixed(2)+"",be=t[1].weightedAvgPrice+"",Ce=t[1].lastQty+"",xe=t[1].bidPrice+"",Pe=t[1].bidQty+"",_e=t[1].askPrice+"",ke=t[1].askQty+"",Oe=t[1].highPrice+"",Ve=t[1].lowPrice+"",Ee=t[1].volume+"",Ue=t[1].quoteVolume+"";let Ae=(window.screen.width<Gt?Nt:Ft)(t);let ze=(window.screen.width<Gt?Bt:qt)(t);return{c(){e=b("span"),e.textContent="X",n=P(),o=b("table"),r=b("tbody"),c=b("tr"),i=b("td"),l=b("div"),l.textContent="Coin:",s=P(),a=b("div"),u=x($e),d=P(),p=b("td"),f=b("div"),f.textContent="Last price:",m=P(),$=b("div"),h=x(he),y=P(),C=b("tr"),V=b("td"),E=b("div"),E.textContent="Open price:",U=P(),A=b("div"),z=x(ye),L=P(),Q=b("td"),j=b("div"),j.textContent="Previous close:",F=P(),N=b("div"),q=x(ge),B=P(),S=b("tr"),H=b("td"),M=b("div"),M.textContent="Price change:",T=P(),R=b("div"),D=x(ve),G=P(),W=b("td"),Ae.c(),J=P(),X=b("div"),I=x(we),K=x("%"),Y=P(),Z=b("tr"),tt=b("td"),ze.c(),et=P(),nt=b("div"),ot=x(be),rt=P(),ct=b("td"),it=b("div"),it.textContent="Last quantity:",lt=P(),st=b("div"),at=x(Ce),ut=P(),dt=b("tr"),pt=b("td"),ft=b("div"),ft.textContent="Bid price:",mt=P(),$t=b("div"),ht=x(xe),yt=P(),gt=b("td"),vt=b("div"),vt.textContent="Bid quantity:",wt=P(),bt=b("div"),Ct=x(Pe),xt=P(),Pt=b("tr"),_t=b("td"),kt=b("div"),kt.textContent="Ask Price:",Ot=P(),Vt=b("div"),Et=x(_e),Ut=P(),At=b("td"),zt=b("div"),zt.textContent="Ask quantity:",Lt=P(),Qt=b("div"),jt=x(ke),St=P(),Ht=b("tr"),Mt=b("td"),Tt=b("div"),Tt.textContent="High price:",Rt=P(),Dt=b("div"),Wt=x(Oe),Jt=P(),Xt=b("td"),It=b("div"),It.textContent="Low price:",Kt=P(),Yt=b("div"),Zt=x(Ve),te=P(),ee=b("tr"),ne=b("td"),oe=b("div"),oe.textContent="Volume:",re=P(),ce=b("div"),ie=x(Ee),le=P(),se=b("td"),ae=b("div"),ae.textContent="Quote volume:",ue=P(),de=b("div"),pe=x(Ue),k(e,"class","closePopup"),k(a,"class","popUpValue"),k($,"class","popUpValue"),k(A,"class","popUpValue"),k(N,"class","popUpValue"),k(R,"class","popUpValue"),k(X,"class","popUpValue"),k(nt,"class","popUpValue"),k(st,"class","popUpValue"),k($t,"class","popUpValue"),k(bt,"class","popUpValue"),k(Vt,"class","popUpValue"),k(Qt,"class","popUpValue"),k(Dt,"class","popUpValue"),k(Yt,"class","popUpValue"),k(ce,"class","popUpValue"),k(de,"class","popUpValue"),k(o,"class","popupTable")},m(w,b){v(w,e,b),v(w,n,b),v(w,o,b),g(o,r),g(r,c),g(c,i),g(i,l),g(i,s),g(i,a),g(a,u),g(c,d),g(c,p),g(p,f),g(p,m),g(p,$),g($,h),g(r,y),g(r,C),g(C,V),g(V,E),g(V,U),g(V,A),g(A,z),g(C,L),g(C,Q),g(Q,j),g(Q,F),g(Q,N),g(N,q),g(r,B),g(r,S),g(S,H),g(H,M),g(H,T),g(H,R),g(R,D),g(S,G),g(S,W),Ae.m(W,null),g(W,J),g(W,X),g(X,I),g(X,K),g(r,Y),g(r,Z),g(Z,tt),ze.m(tt,null),g(tt,et),g(tt,nt),g(nt,ot),g(Z,rt),g(Z,ct),g(ct,it),g(ct,lt),g(ct,st),g(st,at),g(r,ut),g(r,dt),g(dt,pt),g(pt,ft),g(pt,mt),g(pt,$t),g($t,ht),g(dt,yt),g(dt,gt),g(gt,vt),g(gt,wt),g(gt,bt),g(bt,Ct),g(r,xt),g(r,Pt),g(Pt,_t),g(_t,kt),g(_t,Ot),g(_t,Vt),g(Vt,Et),g(Pt,Ut),g(Pt,At),g(At,zt),g(At,Lt),g(At,Qt),g(Qt,jt),g(r,St),g(r,Ht),g(Ht,Mt),g(Mt,Tt),g(Mt,Rt),g(Mt,Dt),g(Dt,Wt),g(Ht,Jt),g(Ht,Xt),g(Xt,It),g(Xt,Kt),g(Xt,Yt),g(Yt,Zt),g(r,te),g(r,ee),g(ee,ne),g(ne,oe),g(ne,re),g(ne,ce),g(ce,ie),g(ee,le),g(ee,se),g(se,ae),g(se,ue),g(se,de),g(de,pe),fe||(me=_(e,"click",t[2]),fe=!0)},p(t,e){2&e&&$e!==($e=t[1].symbol+"")&&O(u,$e),2&e&&he!==(he=t[1].lastPrice+"")&&O(h,he),2&e&&ye!==(ye=t[1].openPrice+"")&&O(z,ye),2&e&&ge!==(ge=t[1].prevClosePrice+"")&&O(q,ge),2&e&&ve!==(ve=t[1].priceChange+"")&&O(D,ve),Ae.p(t,e),2&e&&we!==(we=parseFloat(t[1].priceChangePercent).toFixed(2)+"")&&O(I,we),ze.p(t,e),2&e&&be!==(be=t[1].weightedAvgPrice+"")&&O(ot,be),2&e&&Ce!==(Ce=t[1].lastQty+"")&&O(at,Ce),2&e&&xe!==(xe=t[1].bidPrice+"")&&O(ht,xe),2&e&&Pe!==(Pe=t[1].bidQty+"")&&O(Ct,Pe),2&e&&_e!==(_e=t[1].askPrice+"")&&O(Et,_e),2&e&&ke!==(ke=t[1].askQty+"")&&O(jt,ke),2&e&&Oe!==(Oe=t[1].highPrice+"")&&O(Wt,Oe),2&e&&Ve!==(Ve=t[1].lowPrice+"")&&O(Zt,Ve),2&e&&Ee!==(Ee=t[1].volume+"")&&O(ie,Ee),2&e&&Ue!==(Ue=t[1].quoteVolume+"")&&O(pe,Ue)},d(t){t&&w(e),t&&w(n),t&&w(o),Ae.d(),ze.d(),fe=!1,me()}}}function Ht(t){let e,n;return e=new jt({props:{isOpen:t[0],$$slots:{default:[St]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){it(e.$$.fragment)},m(t,o){lt(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.isOpen=t[0]),18&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}let Mt="Price change %: ",Tt="Price change percent: ",Rt="Weighted avg: ",Dt="Weighted average: ",Gt=600;function Wt(t,e,n){let{isOpen:o=!1}=e,{moneda:r=[]}=e;return t.$$set=t=>{"isOpen"in t&&n(0,o=t.isOpen),"moneda"in t&&n(1,r=t.moneda)},[o,r,()=>n(0,o=!1),function(){n(0,o=!0)}]}class Jt extends dt{constructor(t){super(),ut(this,t,Wt,Ht,l,{isOpen:0,moneda:1,open:3})}get open(){return this.$$.ctx[3]}}function Xt(t,e,n){const o=t.slice();return o[9]=e[n],o}function It(e){let n;return{c(){n=x(oe)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Kt(e){let n;return{c(){n=x(re)},m(t,e){v(t,n,e)},p:t,d(t){t&&w(n)}}}function Yt(t){let e,n,o,r,c,l,s,a,u,d,p,f,m,$=t[9].symbol+"",h=parseFloat(t[9].priceChangePercent).toFixed(2)+"",y=t[9].lastPrice+"";return{c(){e=b("tr"),n=b("td"),o=x($),r=P(),c=b("td"),l=x(h),a=P(),u=b("td"),d=x(y),k(c,"class",s=t[9].priceChangePercent>=ee?"major":"menor"),k(e,"class",p=t[9].priceChangePercent>=ee?"majorHover":"menorHover")},m(s,p){var $;v(s,e,p),g(e,n),g(n,o),g(e,r),g(e,c),g(c,l),g(e,a),g(e,u),g(u,d),f||(m=_(e,"click",($=function(){i(t[2](t[9]))&&t[2](t[9]).apply(this,arguments)},function(t){return t.preventDefault(),$.call(this,t)})),f=!0)},p(n,r){t=n,1&r&&$!==($=t[9].symbol+"")&&O(o,$),1&r&&h!==(h=parseFloat(t[9].priceChangePercent).toFixed(2)+"")&&O(l,h),1&r&&s!==(s=t[9].priceChangePercent>=ee?"major":"menor")&&k(c,"class",s),1&r&&y!==(y=t[9].lastPrice+"")&&O(d,y),1&r&&p!==(p=t[9].priceChangePercent>=ee?"majorHover":"menorHover")&&k(e,"class",p)},d(t){t&&w(e),f=!1,m()}}}function Zt(t){let e,n,o,r,l,s,a,u,d,p,f,m,$,h,y,C,x;let O=(window.screen.width<te?Kt:It)(t),V=t[0],E=[];for(let e=0;e<V.length;e+=1)E[e]=Yt(Xt(t,V,e));var U=Jt;function A(t){return{props:{moneda:t[4]}}}return U&&(h=new U(A(t)),t[7](h)),{c(){e=b("table"),n=b("thead"),o=b("tr"),r=b("th"),r.textContent=`${ne}`,l=P(),s=b("th"),O.c(),a=P(),u=b("th"),u.textContent=`${ce}`,d=P(),p=b("tbody");for(let t=0;t<E.length;t+=1)E[t].c();f=P(),m=b("td"),$=P(),h&&it(h.$$.fragment),k(r,"class","nom-th"),k(s,"class","percent-th"),k(u,"class","preu-th"),k(e,"class","taulaPrincipal")},m(c,w){v(c,e,w),g(e,n),g(n,o),g(o,r),g(o,l),g(o,s),O.m(s,null),g(o,a),g(o,u),g(e,d),g(e,p);for(let t=0;t<E.length;t+=1)E[t].m(p,null);g(p,f),g(p,m),g(e,$),h&&lt(h,e,null),y=!0,C||(x=[_(r,"click",(function(){i(t[1]("symbol"))&&t[1]("symbol").apply(this,arguments)})),_(s,"click",(function(){i(t[1]("priceChangePercent"))&&t[1]("priceChangePercent").apply(this,arguments)})),_(u,"click",(function(){i(t[1]("lastPrice"))&&t[1]("lastPrice").apply(this,arguments)}))],C=!0)},p(n,[o]){if(t=n,O.p(t,o),5&o){let e;for(V=t[0],e=0;e<V.length;e+=1){const n=Xt(t,V,e);E[e]?E[e].p(n,o):(E[e]=Yt(n),E[e].c(),E[e].m(p,f))}for(;e<E.length;e+=1)E[e].d(1);E.length=V.length}const r={};if(16&o&&(r.moneda=t[4]),U!==(U=Jt)){if(h){tt();const t=h;ot(t.$$.fragment,1,0,(()=>{st(t,1)})),et()}U?(h=new U(A(t)),t[7](h),it(h.$$.fragment),nt(h.$$.fragment,1),lt(h,e,null)):h=null}else U&&h.$set(r)},i(t){y||(h&&nt(h.$$.fragment,t),y=!0)},o(t){h&&ot(h.$$.fragment,t),y=!1},d(n){n&&w(e),O.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(E,n),t[7](null),h&&st(h),C=!1,c(x)}}}let te=600,ee=0,ne="nom",oe="Price change percent",re="24h %",ce="Last price";function ie(t,e,n){let o,r,c,i,l,s=[],a=[];return q(ht.subscribe((t=>{n(0,s=t)}))),i=function(t){n(4,a=t),l.open()},c={defecte:"priceChangePercent",ascending:!0},t.$$.update=()=>{99&t.$$.dirty&&n(1,o=t=>{c.defecte==t?n(6,c.ascending=!c.ascending,c):(n(6,c.defecte=t,c),n(6,c.ascending=!0,c)),n(5,r=c.ascending?1:-1),n(1,o="symbol"===t?(e,n)=>e[t]<n[t]?-1*r:e[t]>n[t]?1*r:e[t]<n[t]:(e,n)=>Number(e[t])<Number(n[t])?-1*r:Number(e[t])>Number(n[t])?1*r:0),n(0,s=s.sort(o))})},[s,o,i,l,a,r,c,function(t){S[t?"unshift":"push"]((()=>{l=t,n(3,l)}))}]}class le extends dt{constructor(t){super(),ut(this,t,ie,Zt,l,{})}}function se(t){let e,n,o,r;function c(t,e){return"string"==typeof t[8][4]?ue:ae}let i=c(t),l=i(t);return{c(){e=C("svg"),n=C("g"),o=C("g"),l.c(),k(o,"transform",t[10]),k(n,"transform","translate(256 256)"),k(e,"id",t[1]),k(e,"class",t[0]),k(e,"style",t[9]),k(e,"viewBox",r=`0 0 ${t[8][0]} ${t[8][1]}`),k(e,"aria-hidden","true"),k(e,"role","img"),k(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){v(t,e,r),g(e,n),g(n,o),l.m(o,null)},p(t,n){i===(i=c(t))&&l?l.p(t,n):(l.d(1),l=i(t),l&&(l.c(),l.m(o,null))),1024&n&&k(o,"transform",t[10]),2&n&&k(e,"id",t[1]),1&n&&k(e,"class",t[0]),512&n&&k(e,"style",t[9]),256&n&&r!==(r=`0 0 ${t[8][0]} ${t[8][1]}`)&&k(e,"viewBox",r)},d(t){t&&w(e),l.d()}}}function ae(t){let e,n,o,r,c,i,l,s;return{c(){e=C("path"),c=C("path"),k(e,"d",n=t[8][4][0]),k(e,"fill",o=t[4]||t[2]||"currentColor"),k(e,"fill-opacity",r=0!=t[7]?t[5]:t[6]),k(e,"transform","translate(-256 -256)"),k(c,"d",i=t[8][4][1]),k(c,"fill",l=t[3]||t[2]||"currentColor"),k(c,"fill-opacity",s=0!=t[7]?t[6]:t[5]),k(c,"transform","translate(-256 -256)")},m(t,n){v(t,e,n),v(t,c,n)},p(t,a){256&a&&n!==(n=t[8][4][0])&&k(e,"d",n),20&a&&o!==(o=t[4]||t[2]||"currentColor")&&k(e,"fill",o),224&a&&r!==(r=0!=t[7]?t[5]:t[6])&&k(e,"fill-opacity",r),256&a&&i!==(i=t[8][4][1])&&k(c,"d",i),12&a&&l!==(l=t[3]||t[2]||"currentColor")&&k(c,"fill",l),224&a&&s!==(s=0!=t[7]?t[6]:t[5])&&k(c,"fill-opacity",s)},d(t){t&&w(e),t&&w(c)}}}function ue(t){let e,n,o;return{c(){e=C("path"),k(e,"d",n=t[8][4]),k(e,"fill",o=t[2]||t[3]||"currentColor"),k(e,"transform","translate(-256 -256)")},m(t,n){v(t,e,n)},p(t,r){256&r&&n!==(n=t[8][4])&&k(e,"d",n),12&r&&o!==(o=t[2]||t[3]||"currentColor")&&k(e,"fill",o)},d(t){t&&w(e)}}}function de(e){let n,o=e[8][4]&&se(e);return{c(){o&&o.c(),n=x("")},m(t,e){o&&o.m(t,e),v(t,n,e)},p(t,[e]){t[8][4]?o?o.p(t,e):(o=se(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&w(n)}}}function pe(t,e,n){let o,r,c,{class:i=""}=e,{id:l=""}=e,{style:s=""}=e,{icon:a}=e,{fw:u=!1}=e,{flip:d=!1}=e,{pull:p=!1}=e,{rotate:f=!1}=e,{size:m=!1}=e,{color:$=""}=e,{primaryColor:h=""}=e,{secondaryColor:y=""}=e,{primaryOpacity:g=1}=e,{secondaryOpacity:v=.4}=e,{swapOpacity:w=!1}=e;return t.$$set=t=>{"class"in t&&n(0,i=t.class),"id"in t&&n(1,l=t.id),"style"in t&&n(11,s=t.style),"icon"in t&&n(12,a=t.icon),"fw"in t&&n(13,u=t.fw),"flip"in t&&n(14,d=t.flip),"pull"in t&&n(15,p=t.pull),"rotate"in t&&n(16,f=t.rotate),"size"in t&&n(17,m=t.size),"color"in t&&n(2,$=t.color),"primaryColor"in t&&n(3,h=t.primaryColor),"secondaryColor"in t&&n(4,y=t.secondaryColor),"primaryOpacity"in t&&n(5,g=t.primaryOpacity),"secondaryOpacity"in t&&n(6,v=t.secondaryOpacity),"swapOpacity"in t&&n(7,w=t.swapOpacity)},t.$$.update=()=>{if(4096&t.$$.dirty&&n(8,o=a&&a.icon||[0,0,"",[],""]),174080&t.$$.dirty){let t,e;const o="1em";let c,i,l,a="-.125em";const d="visible";u&&(l="center",e="1.25em"),p&&(t=p),m&&("lg"==m?(i="1.33333em",c=".75em",a="-.225em"):i="xs"==m?".75em":"sm"==m?".875em":m.replace("x","em"));const f={float:t,width:e,height:o,"line-height":c,"font-size":i,"text-align":l,"vertical-align":a,overflow:d};let $="";for(const t in f)f[t]&&($+=`${t}:${f[t]};`);n(9,r=$+s)}if(81920&t.$$.dirty){let t="";if(d){let e=1,n=1;"horizontal"==d?e=-1:"vertical"==d?n=-1:e=n=-1,t+=` scale(${e} ${n})`}f&&(t+=` rotate(${f} 0 0)`),n(10,c=t)}},[i,l,$,h,y,g,v,w,o,r,c,s,a,u,d,p,f,m]}class fe extends dt{constructor(t){super(),ut(this,t,pe,de,l,{class:0,id:1,style:11,icon:12,fw:13,flip:14,pull:15,rotate:16,size:17,color:2,primaryColor:3,secondaryColor:4,primaryOpacity:5,secondaryOpacity:6,swapOpacity:7})}}
/*!
     * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var me={prefix:"fas",iconName:"sync",icon:[512,512,[],"f021","M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"]};function $e(t){let e,n,o,r,i,l,s,a,u,d,p;return l=new fe({props:{icon:me}}),{c(){e=b("div"),n=b("div"),n.textContent=`${he}`,o=P(),r=b("div"),i=b("button"),it(l.$$.fragment),s=P(),a=b("input"),k(n,"class","title"),k(a,"class","cercador"),k(a,"placeholder","Search..."),k(r,"class","cercar"),k(e,"class","container")},m(c,f){v(c,e,f),g(e,n),g(e,o),g(e,r),g(r,i),lt(l,i,null),g(r,s),g(r,a),V(a,t[1]),u=!0,d||(p=[_(i,"click",t[2]),_(a,"keyup",t[3]),_(a,"input",t[4])],d=!0)},p(t,[e]){2&e&&a.value!==t[1]&&V(a,t[1])},i(t){u||(nt(l.$$.fragment,t),u=!0)},o(t){ot(l.$$.fragment,t),u=!1},d(t){t&&w(e),st(l),d=!1,c(p)}}}let he="Coin stats";function ye(t,e,n){let o,r,c,i,l,s;async function a(t){clearTimeout(i),i=setTimeout((()=>{ht.update((()=>(c=$t.filter((e=>e.symbol.includes(t.toUpperCase()))),c)))}),750)}q(ht.subscribe((t=>{c=t})));return[a,l,async function(){o=await fetch(ft),r=await o.json(),""==l?ht.set(r):(ht.update((t=>(t.forEach((t=>{r.forEach((e=>{t.symbol==e.symbol&&(t.askPrice=e.askPrice,t.askQty=e.askQty,t.bidQty=e.bidQty,t.highPrice=e.highPrice,t.lastPrice=e.lastPrice,t.lastQty=e.lastQty,t.lowPrice=e.lowPrice,t.openPrice=e.openPrice,t.prevClosePrice=e.prevClosePrice,t.priceChange=e.priceChange,t.priceChangePercent=e.priceChangePercent,t.quoteVolume=e.quoteVolume,t.volume=e.volume,t.weightedAvgPrice=e.weightedAvgPrice,t.bidPrice=e.bidPrice)}))})),s=t,t))),ht.set(s))},({target:{value:t}})=>a(t),function(){l=this.value,n(1,l)}]}class ge extends dt{constructor(t){super(),ut(this,t,ye,$e,l,{cercar:0})}get cercar(){return this.$$.ctx[0]}}function ve(e){let n;return{c(){n=b("footer"),n.innerHTML='<div><a class="footer-text" href="https://www.twitter.com/realGoloSEO">Jordi Gómez Lozano - 2021</a></div>'},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&w(n)}}}class we extends dt{constructor(t){super(),ut(this,t,null,ve,l,{})}}function be(e){let n,o,r,c,i,l,s;return o=new ge({}),c=new le({}),l=new we({}),{c(){n=b("main"),it(o.$$.fragment),r=P(),it(c.$$.fragment),i=P(),it(l.$$.fragment),k(n,"class","svelte-1c74muz")},m(t,e){v(t,n,e),lt(o,n,null),g(n,r),lt(c,n,null),g(n,i),lt(l,n,null),s=!0},p:t,i(t){s||(nt(o.$$.fragment,t),nt(c.$$.fragment,t),nt(l.$$.fragment,t),s=!0)},o(t){ot(o.$$.fragment,t),ot(c.$$.fragment,t),ot(l.$$.fragment,t),s=!1},d(t){t&&w(n),st(o),st(c),st(l)}}}return new class extends dt{constructor(t){super(),ut(this,t,null,be,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
