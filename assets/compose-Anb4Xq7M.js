import{p,H as w,S,_ as i,c as e,C as f,X as _}from"./useTitle-Ej3qXsuE.js";window.opener&&(console=window.opener.console);function h(){var s,a;const[t,d]=p("default"),{editStatus:n,replyToStatus:o,draftStatus:l}=window.__COMPOSE__||{};return w(n?"Editing source status":o?`Replying to @${((s=o.account)==null?void 0:s.acct)||((a=o.account)==null?void 0:a.username)}`:"Compose"),i(()=>{S()},[]),i(()=>{if(t==="closed"){try{window.opener.focus()}catch{}window.close()}},[t]),t==="closed"?e("div",{class:"box",children:[e("p",{children:"You may close this page now."}),e("p",{children:e("button",{onClick:()=>{window.close()},children:"Close window"})})]}):e(f,{editStatus:n,replyToStatus:o,draftStatus:l,standalone:!0,hasOpener:window.opener,onClose:c=>{const{newStatus:r,fn:u=()=>{}}=c||{};try{r&&window.opener.__STATES__.reloadStatusPage++,u(),d("closed")}catch{}}})}_(e(h,{}),document.getElementById("app-standalone"));
//# sourceMappingURL=compose-Anb4Xq7M.js.map
