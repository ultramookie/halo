function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./compose-_rll9FVR.js","./vendor-sCQLffwO.js","./status-0Xbxht0i.js","./useTitle-09rjFoZn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as u,l as p,I as w}from"./useTitle-09rjFoZn.js";import{U as _,p as m,_ as S,a as e,O as f}from"./vendor-sCQLffwO.js";const h=_(()=>u(()=>import("./compose-_rll9FVR.js"),__vite__mapDeps([0,1,2,3]),import.meta.url));window.opener&&(console=window.opener.console);function g(){var s,a;const[t,c]=m("default"),{editStatus:n,replyToStatus:o,draftStatus:r}=window.__COMPOSE__||{};return p(n?"Editing source status":o?`Replying to @${((s=o.account)==null?void 0:s.acct)||((a=o.account)==null?void 0:a.username)}`:"Compose"),S(()=>{if(t==="closed"){try{window.opener.focus()}catch{}window.close()}},[t]),t==="closed"?e("div",{class:"box",children:[e("p",{children:"You may close this page now."}),e("p",{children:e("button",{onClick:()=>{window.close()},children:"Close window"})})]}):e(w,{children:e(h,{editStatus:n,replyToStatus:o,draftStatus:r,standalone:!0,hasOpener:window.opener,onClose:i=>{const{newStatus:d,fn:l=()=>{}}=i||{};try{d&&window.opener.__STATES__.reloadStatusPage++,l(),c("closed")}catch{}}})})}f(e(g,{}),document.getElementById("app-standalone"));
//# sourceMappingURL=compose-EQQIosFw.js.map
