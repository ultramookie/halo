import{a as Ke,b as Ye,N as Xe,r as We,o as Qe}from"./main-0BOt6A3g.js";import{ac as Ze,a as Je,q as et,p as x,h as tt,v as j,a3 as st,$ as nt,s as xe,F as le,al as Ee,ak as ie,D as rt,_ as se,X as it,e,c as Ce,d as ce,k as ge,I as E,g as P,K as lt,L as ot,aj as at,R as Be,A as fe,M as ct,N as Le,w as dt,aq as ht,aa as ut,aG as pt,i as Re}from"./db-YTaCnnsG.js";import{u as gt}from"./index-_Y-Lyw2n.js";import"./intl-segmenter-polyfill-XHDQHdV5.js";const ft=""+new URL("catch-up-DuauQu-W.png",import.meta.url).href,mt="home",V=[{label:"last 1 hour",value:1},{label:"last 2 hours",value:2},{label:"last 3 hours",value:3},{label:"last 4 hours",value:4},{label:"last 5 hours",value:5},{label:"last 6 hours",value:6},{label:"last 7 hours",value:7},{label:"last 8 hours",value:8},{label:"last 9 hours",value:9},{label:"last 10 hours",value:10},{label:"last 11 hours",value:11},{label:"last 12 hours",value:12},{label:"beyond 12 hours",value:13}],bt=["Original","Replies","Boosts","Followed tags","Groups","Filtered"],vt=["createdAt","repliesCount","favouritesCount","reblogsCount","density"],yt=[null,"account"],$e={Filtered:"filtered",Groups:"group",Boosts:"boost",Replies:"reply","Followed tags":"followedTags",Original:"original"},wt={Filtered:"filtered posts",Groups:"group posts",Boosts:"boosts",Replies:"replies","Followed tags":"followed-tag posts",Original:"original posts"},kt={createdAt:["oldest","latest"],repliesCount:["fewest replies","most replies"],favouritesCount:["fewest likes","most likes"],reblogsCount:["fewest boosts","most boosts"],density:["least dense","most dense"]};function Bt(){Ze("Catch-up","/catchup");const{masto:b,instance:d}=Je(),[g,a]=et(),h=g.get("id"),[f,k]=x("start"),[v,c]=x(!1),I=j(()=>tt.session.get("currentAccount"),[]),L=t=>t===I;async function Z({maxCreatedAt:t}){var r,m,u;const s=t?new Date(t):null,i=[],n=b.v1.timelines.home.list({limit:40});e:for(;;)try{const o=await n.next(),{value:T}=o;if(T!=null&&T.length){await Ke(T,d);let A=!1;for(let G=0;G<T.length;G++){const R=T[G],ee=new Date(R.createdAt);if(!s||ee>=s){const w=!L(((m=(r=R.reblog)==null?void 0:r.account)==null?void 0:m.id)||R.account.id)&&st(((u=R.reblog)==null?void 0:u.filtered)||R.filtered,mt);if((w==null?void 0:w.action)==="hide")continue;R._filtered=w;const q=nt(R.id,d);R._followedTags=xe.statusFollowedTags[q]?[...xe.statusFollowedTags[q]]:[],i.push(R),A=!0}if(!A)break e}}else break e;await new Promise(A=>setTimeout(A,1e3))}catch{break e}return i.forEach(o=>{if(o!=null&&o.inReplyToId){const T=i.find(A=>A.id===o.inReplyToId);T&&!T.inReplyToId&&(T._thread=!0)}}),i}const[p,K]=x([]),$=le(),me=j(()=>Ee(),[]),oe=rt(async({duration:t}={})=>{const s=Date.now(),i=t?s-t:null;k("loading");const n=await Z({maxCreatedAt:i}),r=`${me}-${gt()}`;try{await ie.catchup.set(r,{id:r,posts:n,count:n.length,startAt:i,endAt:s}),a({id:r})}catch{}},[]);se(()=>{h?(async()=>{const t=await ie.catchup.get(h);t&&(t.posts.sort((s,i)=>s.createdAt>i.createdAt?1:-1),K(t.posts),k("results"))})():f==="results"&&(K([]),k("start"))},[h]);const[D,F]=it(t=>t+1,0),[z,N]=x(null),[B,Ae]=x([]);se(()=>{(async()=>{try{const t=await ie.catchup.keys();if(t.length){const s=Ee(),i=t.filter(n=>n.startsWith(`${s}-`));if(i.length){let n=await ie.catchup.getMany(i);n.sort((o,T)=>T.endAt-o.endAt);let r=n.slice(0,3),m=n.slice(3);const u=r.map(o=>{const{id:T,count:A,startAt:G,endAt:R}=o;return{id:T,count:A,startAt:G,endAt:R}});Ae(u),N(r[0].endAt),n=null,r=null,queueMicrotask(()=>{m.length&&ie.catchup.delMany(m.map(o=>o.id)).then(()=>{m=null}).catch(o=>{})});return}}}catch{}Ae([])})()},[D]),se(()=>{f==="start"&&F()},[f==="start"]);const[be,de]=j(()=>{var T,A,G,R,ee;let t=0,s=0,i=0,n=0,r=0,m=0;const u={};for(const l of p){l._filtered?(t++,l.__FILTER="filtered"):l.group?(s++,l.__FILTER="group"):l.reblog?(i++,l.__FILTER="boost"):(T=l._followedTags)!=null&&T.length?(r++,l.__FILTER="followedTags"):l.inReplyToId&&l.inReplyToAccountId!==((A=l.account)==null?void 0:A.id)?(n++,l.__FILTER="reply"):(m++,l.__FILTER="original");const w=l.reblog||l;if(l.__FILTER!=="filtered"&&((G=w.card)!=null&&G.url)&&((R=w.card)!=null&&R.image)&&((ee=w.card)==null?void 0:ee.type)==="link"){const{card:q,favouritesCount:pe,reblogsCount:te}=w;let{url:S}=q;if(S=S.replace(/\/$/,""),!u[S])u[S]={postID:w.id,card:q,shared:1,sharers:[l.account],likes:pe,boosts:te};else{if(u[S].sharers.find(re=>re.id===l.account.id))continue;u[S].shared++,u[S].sharers.push(l.account),u[S].postID!==w.id&&(u[S].likes+=pe,u[S].boosts+=te)}}}let o=[];for(const l in u)o.push({url:l,...u[l]});if(o.sort((l,w)=>l.shared>w.shared?-1:l.shared<w.shared?1:l.boosts>w.boosts?-1:l.boosts<w.boosts?1:l.likes>w.likes?-1:l.likes<w.likes?1:0),o.length>10)e:for(let l=10;l<o.length;l++){const{shared:w}=o[l];if(w<=1){o=o.slice(0,l);break e}}return[{Filtered:t,Groups:s,Boosts:i,Replies:n,"Followed tags":r,Original:m},o]},[p]),[H,ve]=x("All"),[y,Y]=x(null),[X,Me]=x(1),[C,Ie]=x("createdAt"),[W,ye]=x("asc"),[U,Se]=x(null),[ae,M,J]=j(()=>{const t={},s=new Map;let i=p.filter(r=>{const m=H==="All"||r.__FILTER===$e[H];return m&&(t[r.account.id]=r.account,s.set(r.account.id,(s.get(r.account.id)||0)+1)),m});const n={};return i=i.filter(r=>{if(r.reblog){if(n[r.reblog.id])return n[r.reblog.id].__BOOSTERS?n[r.reblog.id].__BOOSTERS.add(r.account):n[r.reblog.id].__BOOSTERS=new Set([r.account]),!1;n[r.reblog.id]=r}return!0}),y&&s.has(y)&&(i=i.filter(r=>r.account.id===y||[...r.__BOOSTERS||[]].find(m=>m.id===y))),[i,t,Object.fromEntries(s)]},[H,y,p]),he=j(()=>{const t={};return ae.forEach(s=>{t[s.id]=s}),t},[ae]),O=j(()=>Object.keys(J).sort((t,s)=>J[s]-J[t]),[J]),Pe=j(()=>{const t={};return O.forEach((s,i)=>{t[s]=i}),ae.sort((s,i)=>{if(U==="account"){const n=s.account.id,r=i.account.id,m=t[n],u=t[r],o=m-u;if(o!==0)return o}if(C!=="createdAt"&&(s=s.reblog||s,i=i.reblog||i,C!=="density"&&s[C]===i[C]))return s.createdAt>i.createdAt?1:-1;if(C==="density"){const n=Fe(s),r=Fe(i);return W==="asc"?n>r?1:-1:r>n?1:-1}return W==="asc"?s[C]>i[C]?1:-1:i[C]>s[C]?1:-1})},[ae,C,W,U,O]),we=le(null),ne=le(null),De=le(!1);se(()=>{p.length>100||De.current||ne.current&&(Ye(ne.current,{duration:200}),De.current=!0)},[p,ne]);const ke=p.length>160?"3d":"2d",ze=j(()=>ke!=="2d"?null:p.map(t=>{const s=he[t.id];return e("span",{class:`post-dot ${s?"post-dot-highlight":""}`},t.id)}),[he]),Ne=j(()=>ke!=="3d"||!(p!=null&&p.length)?null:xt(p,"createdAt",320).map((s,i)=>e("div",{class:"posts-bin",children:s.map(n=>{const r=he[n.id];return e("span",{class:`post-dot ${r?"post-dot-highlight":""}`},n.id)})},i)),[he]),_=le(null),_e=j(()=>z?(Date.now()-z)/1e3/60/60:null,[z,X]);se(()=>{if(f!=="results")return;const t=y&&M[y]?M[y].username:"",s=W==="asc"?0:1,i={account:"authors"};let n=Ce({duration:5e3,text:`Showing ${wt[H]||"all posts"}${t?` by @${t}`:""}, ${kt[C][s]} first${U?`, grouped by ${U==="account"?i[U]:""}`:""}`});return()=>{var r;(r=n==null?void 0:n.hideToast)==null||r.call(n)}},[f,H,y,C,W,U,M]),se(()=>{var t;if(y&&M[y]){const s=ne.current.querySelector(`[data-author="${y}"]`),i=(t=ne.current)==null?void 0:t.getBoundingClientRect(),n=s==null?void 0:s.getBoundingClientRect();n.left<i.left||n.right>i.right?s.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"}):n.top<0&&s.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})}},[y,M]);const[He,Te]=x(!1),ue=".catchup-list > li > a",Ue=ce("j",()=>{const t=document.activeElement.closest(ue),s=t==null?void 0:t.getBoundingClientRect(),i=Array.from(_.current.querySelectorAll(ue));if(t&&s.top<_.current.clientHeight&&s.bottom>0){const n=i.indexOf(t),r=i[n+1];r&&(r.focus(),r.scrollIntoView({block:"center",inline:"center",behavior:"smooth"}))}else{const n=i.find(r=>r.getBoundingClientRect().top>=0);n&&(n.focus(),n.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"}))}},{preventDefault:!0,ignoreModifiers:!0}),Ge=ce("k",()=>{const t=document.activeElement.closest(ue),s=t==null?void 0:t.getBoundingClientRect(),i=Array.from(_.current.querySelectorAll(ue));if(t&&s.top<_.current.clientHeight&&s.bottom>0){const n=i.indexOf(t);let r=i[n-1];r&&(r.focus(),r.scrollIntoView({block:"center",inline:"center",behavior:"smooth"}))}else{const n=i.find(r=>{const m=r.getBoundingClientRect();return m.top>=44&&m.left>=0});n&&(n.focus(),n.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"}))}},{preventDefault:!0,ignoreModifiers:!0}),je=ce("h, l",(t,s)=>{var n,r,m;const i=s.keys[0];if(y){const u=O.indexOf(y);i==="h"?u>0&&u<O.length&&(Y(O[u-1]),(n=_.current)==null||n.focus()):i==="l"&&u<O.length-1&&u>=0&&(Y(O[u+1]),(r=_.current)==null||r.focus())}else i==="l"&&(Y(O[0]),(m=_.current)==null||m.focus())},{preventDefault:!0,ignoreModifiers:!0,enableOnFormTags:["input"]}),qe=ce("esc",()=>{var t;Y(null),(t=_.current)==null||t.focus()},{preventDefault:!0,ignoreModifiers:!0,enableOnFormTags:["input"]}),Et=ce(".",()=>{var t;(t=_.current)==null||t.scrollTo({top:0,behavior:"smooth"})},{preventDefault:!0,ignoreModifiers:!0,enableOnFormTags:["input"]});return e("div",{ref:t=>{_.current=t,Ue.current=t,Ge.current=t,je.current=t,qe.current=t},id:"catchup-page",class:"deck-container",tabIndex:"-1",children:[e("div",{class:"timeline-deck deck wide",children:[e("header",{class:`${f==="loading"?"loading":""}`,onClick:t=>{var s;t.target.closest("a, button")||(s=_.current)==null||s.scrollTo({top:0,behavior:"smooth"})},children:e("div",{class:"header-grid",children:[e("div",{class:"header-side",children:[e(Xe,{}),f==="results"&&e(ge,{to:"/catchup",class:"button plain",children:e(E,{icon:"history2",size:"l"})}),f==="start"&&e(ge,{to:"/",class:"button plain",children:e(E,{icon:"home",size:"l"})})]}),e("h1",{children:f!=="start"&&e(P,{children:["Catch-up ",e("sup",{children:"beta"})]})}),e("div",{class:"header-side",children:f!=="start"&&f!=="loading"&&e("button",{type:"button",class:"plain",onClick:()=>{Te(!0)},children:"Help"})})]})}),e("main",{children:[f==="start"&&e("div",{class:"catchup-start",children:[e("h1",{children:["Catch-up ",e("sup",{children:"beta"})]}),e("details",{children:[e("summary",{children:"What is this?"}),e("p",{children:"Catch-up is a separate timeline for your followings, offering a high-level view at a glance, with a simple, email-inspired interface to effortlessly sort and filter through posts."}),e("img",{src:ft,width:"1200",height:"900",alt:"Preview of Catch-up UI"}),e("p",{children:e("button",{type:"button",onClick:t=>{t.target.closest("details").open=!1},children:"Let's catch up"})})]}),e("p",{children:"Let's catch up on the posts from your followings."}),e("p",{children:e("b",{children:"Show me all posts from…"})}),e("div",{class:"catchup-form",children:[e("input",{ref:$,type:"range",value:X,min:V[0].value,max:V[V.length-1].value,step:"1",list:"catchup-ranges",onChange:t=>Me(+t.target.value)})," ",e("span",{style:{width:"8em"},children:[V[X-1].label,e("br",{}),e("small",{class:"insignificant",children:X==V[V.length-1].value?"until the max":lt(new Date(Date.now()-X*60*60*1e3))})]}),e("datalist",{id:"catchup-ranges",children:V.map(({label:t,value:s})=>e("option",{value:s,label:t}))})," ",e("button",{type:"button",onClick:()=>{if(X<V[V.length-1].value){const t=X*60*60*1e3;oe({duration:t})}else oe()},children:"Catch up"})]}),_e&&X>_e&&e("p",{class:"catchup-info",children:[e(E,{icon:"info"})," Overlaps with your last catch-up"]}),e("p",{class:"insignificant",children:e("small",{children:"Note: your instance might only show a maximum of 800 posts in the Home timeline regardless of the time range. Could be less or more."})}),!!(B!=null&&B.length)&&e("div",{class:"catchup-prev",children:[e("p",{children:"Previously…"}),e("ul",{children:B.map(t=>e("li",{children:[e(ge,{to:`/catchup?id=${t.id}`,children:[e(E,{icon:"history2"})," ",e("span",{children:Oe(new Date(t.startAt),new Date(t.endAt))})]})," ",e("span",{children:[e("small",{class:"ib insignificant",children:[t.count," posts"]})," ",e("button",{type:"button",class:"light danger small",onClick:async()=>{var i;if(confirm("Remove this catch-up?")){let n=Ce(`Removing Catch-up ${t.id}`);await ie.catchup.del(t.id),(i=n==null?void 0:n.hideToast)==null||i.call(n),Ce(`Catch-up ${t.id} removed`),F()}},children:e(E,{icon:"x"})})]})]},t.id))}),B.length>=3&&e("p",{children:e("small",{children:"Note: Only max 3 will be stored. The rest will be automatically removed."})})]})]}),f==="loading"&&e("div",{class:"ui-state catchup-start",children:[e(ot,{abrupt:!0}),e("p",{class:"insignificant",children:"Fetching posts…"}),e("p",{class:"insignificant",children:"This might take a while."})]}),f==="results"&&e(P,{children:[e("div",{class:"catchup-header",children:[p.length>0&&e("p",{children:e("b",{class:"ib",children:Oe(new Date(p[0].createdAt),new Date(p[p.length-1].createdAt))})}),e("aside",{children:[e("button",{hidden:H==="All"&&!y&&C==="createdAt"&&W==="asc",type:"button",class:"plain4 small",onClick:()=>{ve("All"),Y(null),Ie("createdAt"),Se(null),ye("asc")},children:"Reset filters"}),(de==null?void 0:de.length)>0&&e("button",{type:"button",class:"plain small",onClick:()=>c(!v),children:["Top links"," ",e(E,{icon:"chevron-down",style:{transform:v?"rotate(180deg)":"rotate(0deg)"}})]})]})]}),e("div",{class:"shazam-container no-animation",hidden:!v,children:e("div",{class:"shazam-container-inner",children:e("div",{class:"catchup-top-links links-bar",children:de.map(t=>{const{card:s,shared:i,sharers:n,likes:r,boosts:m}=t,{blurhash:u,title:o,description:T,url:A,image:G,imageDescription:R,language:ee,width:l,height:w,publishedAt:q}=s,pe=new URL(A).hostname.replace(/^www\./,"").replace(/\/$/,"");let te;if(u){const S=at(u),re=We(S);te=Qe([.6,re[1],re[2]])}return e("a",{href:A,target:"_blank",rel:"noopener noreferrer",style:te?{"--accent-color":`rgb(${te.join(",")})`,"--accent-alpha-color":`rgba(${te.join(",")}, 0.4)`}:{},children:e("article",{children:[e("figure",{children:e("img",{src:G,alt:R,width:l,height:w,loading:"lazy"})}),e("div",{class:"article-body",children:[e("header",{children:[e("div",{class:"article-meta",children:[e("span",{class:"domain",children:pe})," ",!!q&&e(P,{children:"· "}),!!q&&e(P,{children:e(Be,{datetime:q,format:"micro"})})]}),!!o&&e("h1",{class:"title",lang:ee,dir:"auto",children:o})]}),!!T&&e("p",{class:"description",lang:ee,dir:"auto",children:T}),e("hr",{}),e("p",{style:{whiteSpace:"nowrap"},children:["Shared by"," ",n.map(S=>{const{avatarStatic:re,displayName:Ve}=S;return e(fe,{url:re,size:"s",alt:Ve})})]})]})]})},A)})})})}),p.length>=5&&(ke==="3d"?e("div",{class:"catchup-posts-viz-time-bar",children:Ne}):e("div",{class:"catchup-posts-viz-bar",children:ze})),p.length>=2&&e("div",{class:"catchup-filters",children:[e("label",{class:"filter-cat",children:[e("input",{type:"radio",name:"filter-cat",checked:H.toLowerCase()==="all",onChange:()=>{ve("All")}}),"All ",e("span",{class:"count",children:p.length})]}),bt.map(t=>!!be[t]&&e("label",{class:"filter-cat",title:(be[t]/p.length*100).toFixed(2)+"%",children:[e("input",{type:"radio",name:"filter-cat",checked:H.toLowerCase()===t.toLowerCase(),onChange:()=>{ve(t)}}),t," ",e("span",{class:"count",children:be[t]})]},t))]}),p.length>=2&&!!J&&e("div",{class:"catchup-filters authors-filters",ref:ne,children:[O.map(t=>e("label",{class:"filter-author","data-author":t,children:[e("input",{type:"radio",name:"filter-author",checked:y===t,onChange:()=>{Y(t)},onClick:()=>{y===t&&Y(null)}}),e(fe,{url:M[t].avatarStatic||M[t].avatar,size:"xxl",alt:`${M[t].displayName} (@${M[t].username})`})," ",e("span",{class:"count",children:J[t]}),e("span",{class:"username",children:M[t].username})]},`${t}-${J[t]}`)),O.length>5&&e("small",{style:{whiteSpace:"nowrap",paddingInline:"1em",opacity:.33},children:[O.length," authors"]},"authors-count")]}),p.length>=2&&e("div",{class:"catchup-filters",children:[e("span",{class:"filter-label",children:"Sort"})," ",e("fieldset",{class:"radio-field-group",children:vt.map(t=>e("label",{class:"filter-sort",onClick:s=>{C===t&&(s.preventDefault(),s.stopPropagation(),ye(W==="asc"?"desc":"asc"))},children:[e("input",{type:"radio",name:"filter-sort-cat",checked:C===t,onChange:()=>{Ie(t);const s=/(replies|favourites|reblogs)/.test(t)?"desc":"asc";ye(s)}}),{createdAt:"Date",repliesCount:"Replies",favouritesCount:"Likes",reblogsCount:"Boosts",density:"Density"}[t],C===t&&(W==="asc"?" ↑":" ↓")]},t))}),e("span",{class:"filter-label",children:"Group"})," ",e("fieldset",{class:"radio-field-group",children:yt.map(t=>e("label",{class:"filter-group",children:[e("input",{type:"radio",name:"filter-group",checked:U===t,onChange:()=>{Se(t)},disabled:t==="account"&&y}),{account:"Authors"}[t]||"None"]},t||"none"))}),y&&O.length>1?e("button",{type:"button",class:"plain6 small",onClick:()=>{Y(null)},style:{whiteSpace:"nowrap"},children:"Show all authors"}):null]}),e("ul",{class:`catchup-list catchup-filter-${$e[H]||""} ${C?`catchup-sort-${C}`:""} ${y&&M[y]?"catchup-selected-author":""} ${U?`catchup-group-${U}`:""}`,children:Pe.map((t,s)=>{var r;const i=((r=t.reblog)==null?void 0:r.id)||t.id;let n=!1;return U==="account"&&(we.current&&t.account.id!==we.current&&s>0&&(n=!0),we.current=t.account.id),e(P,{children:[n&&e("li",{class:"separator"}),e(Ct,{to:`/${d}/s/${i}`,post:t,root:_.current})]},`${t.id}-${n}`)})}),e("footer",{children:ae.length>5&&e("p",{children:[H==="Boosts"?"You don't have to read everything.":"That's all."," ",e("button",{type:"button",class:"textual",onClick:()=>{_.current.scrollTop=0},children:"Back to top"}),"."]})})]})]})]}),He&&e(ct,{onClose:()=>Te(!1),children:e("div",{class:"sheet",id:"catchup-help-sheet",children:[e("button",{type:"button",class:"sheet-close",onClick:()=>Te(!1),children:e(E,{icon:"x"})}),e("header",{children:e("h2",{children:"Help"})}),e("main",{children:e("dl",{children:[e("dt",{children:"Top links"}),e("dd",{children:"Links shared by followings, sorted by shared counts, boosts and likes."}),e("dt",{children:"Sort: Density"}),e("dd",{children:'Posts are sorted by information density or depth. Shorter posts are "lighter" while longer posts are "heavier". Posts with photos are "heavier" than posts without photos.'}),e("dt",{children:"Group: Authors"}),e("dd",{children:"Posts are grouped by authors, sorted by posts count per author."}),e("dt",{children:"Keyboard shortcuts"}),e("dd",{children:[e("kbd",{children:"j"}),": Next post"]}),e("dd",{children:[e("kbd",{children:"k"}),": Previous post"]}),e("dd",{children:[e("kbd",{children:"l"}),": Next author"]}),e("dd",{children:[e("kbd",{children:"h"}),": Previous author"]}),e("dd",{children:[e("kbd",{children:"Enter"}),": Open post details"]}),e("dd",{children:[e("kbd",{children:"."}),": Scroll to top"]})]})})]})})]})}const Tt=dt(function({post:b}){const{id:d,account:g,group:a,reblog:h,inReplyToId:f,inReplyToAccountId:k,_followedTags:v,_filtered:c,visibility:I,__BOOSTERS:L}=b,Z=f&&k!==g.id,p=!!c,K=$=>{$.shiftKey};return e("article",{class:`post-line ${a?"group":h?"reblog":v!=null&&v.length?"followed-tags":""} ${Z?"reply-to":""} ${p?"filtered":""} visibility-${I}`,onMouseEnter:K,children:[e("span",{class:"post-author",children:h?e("span",{class:"post-reblog-avatar",children:[e(fe,{url:g.avatarStatic||g.avatar,squircle:g.bot}),(L==null?void 0:L.size)>0?[...L].map($=>e(fe,{url:$.avatarStatic||$.avatar,squircle:$.bot})):""," ",e(E,{icon:"rocket"})," ",e(Le,{account:h.account,showAvatar:!0})]}):e(Le,{account:g,showAvatar:!0})}),e(It,{post:h||b,filterInfo:c}),e("span",{class:"post-meta",children:[e(St,{post:h||b})," ",e(Be,{datetime:new Date((h==null?void 0:h.createdAt)||b.createdAt),format:"micro"})]})]})},(b,d)=>{var g,a;return((g=b==null?void 0:b.post)==null?void 0:g.id)===((a=d==null?void 0:d.post)==null?void 0:a.id)}),Ct=({root:b,to:d,...g})=>{const a=le(),[h,f]=x(!1);return se(()=>{const k=new IntersectionObserver(v=>{v[0].isIntersecting&&(queueMicrotask(()=>f(!0)),k.unobserve(a.current))},{root:b,rootMargin:`${Math.max(320,screen.height*.75)}px`});return a.current&&k.observe(a.current),()=>{a.current&&k.unobserve(a.current)}},[]),h?e("li",{children:e(ge,{to:d,children:e(Tt,{...g})})}):e("li",{ref:a,style:{height:"4em"}})},Rt=8,At=8;function Fe(b){var c;const{spoilerText:d,content:g,poll:a,mediaAttachments:h,card:f}=b,k=(c=a==null?void 0:a.options)!=null&&c.length?a.options.reduce((I,L)=>I+L.title,""):"";return(d.length+ht(g)+k.length)/140+(h!=null&&h.length?Rt*h.length:f!=null&&f.image?At:0)}const Q=48;function It({post:b,filterInfo:d}){var oe;const{spoilerText:g,sensitive:a,content:h,emojis:f,poll:k,mediaAttachments:v,card:c,inReplyToId:I,inReplyToAccountId:L,account:Z,_thread:p}=b,K=I&&L===Z.id||!!p,$=!g&&!a,me=h?ut(b):"";return e("div",{class:"post-peek",title:g?"":me,children:[e("span",{class:"post-peek-content",children:d?e(P,{children:[K&&e(P,{children:[e("span",{class:"post-peek-tag post-peek-thread",children:"Thread"})," "]}),e("span",{class:"post-peek-filtered",children:["Filtered",d!=null&&d.titlesStr?`: ${d.titlesStr}`:""]})]}):g?e(P,{children:[K&&e(P,{children:[e("span",{class:"post-peek-tag post-peek-thread",children:"Thread"})," "]}),e("span",{class:"post-peek-spoiler",children:[e(E,{icon:"eye-close"})," ",g]})]}):e("div",{class:"post-peek-html",children:[K&&e(P,{children:[e("span",{class:"post-peek-tag post-peek-thread",children:"Thread"})," "]}),!!h&&e("div",{dangerouslySetInnerHTML:{__html:pt(h,f)}}),!!((oe=k==null?void 0:k.options)!=null&&oe.length)&&k.options.map(D=>e("div",{children:[k.multiple?"▪️":"•"," ",D.title]})),!h&&(v==null?void 0:v.length)===1&&v[0].description&&e(P,{children:[e("span",{class:"post-peek-tag post-peek-alt",children:"ALT"})," ",e("div",{children:v[0].description})]})]})}),!d&&e("span",{class:"post-peek-post-content",children:[!!k&&e("span",{class:"post-peek-tag post-peek-poll",children:[e(E,{icon:"poll",size:"s"}),"Poll"]}),v!=null&&v.length?v.map(D=>{const F=D.previewUrl||D.url,z=D.previewRemoteUrl||D.remoteUrl;return e("span",{class:"post-peek-media",children:{image:(F||z)&&$?e("img",{src:F,width:Q,height:Q,alt:D.description,loading:"lazy",onError:N=>{const{src:B}=N.target;B===F&&(N.target.src=z)}}):e("span",{class:"post-peek-faux-media",children:"🖼"}),gifv:(F||z)&&$?e("img",{src:F,width:Q,height:Q,alt:D.description,loading:"lazy",onError:N=>{const{src:B}=N.target;B===F&&(N.target.src=z)}}):e("span",{class:"post-peek-faux-media",children:"🎞️"}),video:(F||z)&&$?e("img",{src:F,width:Q,height:Q,alt:D.description,loading:"lazy",onError:N=>{const{src:B}=N.target;B===F&&(N.target.src=z)}}):e("span",{class:"post-peek-faux-media",children:"📹"}),audio:e("span",{class:"post-peek-faux-media",children:"🎵"})}[D.type]||null},D.id)}):!!c&&c.image&&$&&e("span",{class:`post-peek-media post-peek-card card-${c.type||""}`,children:c.image?e("img",{src:c.image,width:Q,height:Q,alt:c.title||c.description||c.imageDescription,loading:"lazy"}):e("span",{class:"post-peek-faux-media",children:"🔗"})})]})]})}function St({post:b}){const{reblogsCount:d,repliesCount:g,favouritesCount:a}=b;return e("span",{class:"post-stats",children:[g>0&&e("span",{class:"post-stat-replies",children:[e(E,{icon:"comment2",size:"s"})," ",Re(g)]}),a>0&&e("span",{class:"post-stat-likes",children:[e(E,{icon:"heart",size:"s"})," ",Re(a)]}),d>0&&e("span",{class:"post-stat-boosts",children:[e(E,{icon:"rocket",size:"s"})," ",Re(d)]})]})}const{locale:Dt}=new Intl.DateTimeFormat().resolvedOptions(),_t=new Intl.DateTimeFormat(Dt,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"});function Oe(b,d){return _t.formatRange(b,d)}function xt(b,d,g){const a=b.map(c=>new Date(c[d])),h=a.reduce((c,I)=>I<c?I:c,a[0]),k=a.reduce((c,I)=>I>c?I:c,a[0]).getTime()-h.getTime(),v=Array.from({length:g},()=>[]);return b.forEach(c=>{const L=(new Date(c[d]).getTime()-h.getTime())/k,Z=Math.floor(L*(g-1));v[Z].push(c)}),v}export{Bt as default};
//# sourceMappingURL=catchup-FGqdw0rw.js.map