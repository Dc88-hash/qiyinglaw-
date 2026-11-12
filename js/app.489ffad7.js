import{g as oe,E as ie,x as se,y as le,b as h,d as L,z as g,_ as b,j as t,V as l,A as ue,H as ce,f as de,B as P,i as pe,S as fe,D as me,F as he,e as ve,G as ge,X as be,J as xe,K as we,M as ye,N as v,O as d,P as Ee,Q as Y,U as X,r as k,W as Ce,Y as Fe,Z as je,$ as Be,a0 as Se,a1 as _e,a2 as G,a3 as y}from"./vendors.80d5bf61.js";import{c as N,P as ke,B as F,C as Te,a as Ne,b as T,d as Ae,e as Pe,t as I,T as De}from"./common.b4c6315a.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var He=`
/* H5 端隐藏 TabBar 空图标（只隐藏没有 src 的图标） */
.weui-tabbar__icon:not([src]),
.weui-tabbar__icon[src=''] {
  display: none !important;
}

.weui-tabbar__item:has(.weui-tabbar__icon:not([src])) .weui-tabbar__label,
.weui-tabbar__item:has(.weui-tabbar__icon[src='']) .weui-tabbar__label {
  margin-top: 0 !important;
}

/* Vite 错误覆盖层无法选择文本的问题 */
vite-error-overlay {
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-user-select: text !important;
}

vite-error-overlay::part(window) {
  max-width: 90vw;
  padding: 10px;
}

.taro_page {
  overflow: auto;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.3);
}

/* H5 导航栏页面自动添加顶部间距 */
body.h5-navbar-visible .taro_page {
  padding-top: 44px;
}

body.h5-navbar-visible .toaster[data-position^="top"] {
  top: 44px !important;
}

/* Sheet 组件在 H5 导航栏下的位置修正 */
body.h5-navbar-visible .sheet-content:not([data-side="bottom"]) {
    top: 44px !important;
}

/*
 * H5 端 rem 适配：与小程序 rpx 缩放一致
 * 375px 屏幕：1rem = 16px，小程序 32rpx = 16px
 */
html {
    font-size: 4vw !important;
}

/* H5 端组件默认样式修复 */
taro-view-core {
    display: block;
}

taro-text-core {
    display: inline;
}

taro-input-core {
    display: block;
    width: 100%;
}

taro-input-core input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
}

taro-input-core.taro-otp-hidden-input input {
    color: transparent;
    caret-color: transparent;
    -webkit-text-fill-color: transparent;
}

/* 全局按钮样式重置 */
taro-button-core,
button {
    margin: 0 !important;
    padding: 0 !important;
    line-height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
}

taro-button-core::after,
button::after {
    border: none;
}

taro-textarea-core > textarea,
.taro-textarea,
textarea.taro-textarea {
    resize: none !important;
}
`,Oe=`
/* PC 宽屏适配 - 基础布局 */
@media (min-width: 769px) {
  html {
    font-size: 15px !important;
  }

  body {
    background-color: #f3f4f6 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    min-height: 100vh !important;
  }
}
`,ze=`
/* PC 宽屏适配 - 手机框样式（有 TabBar 页面） */
@media (min-width: 769px) {
  .taro-tabbar__container {
    width: 375px !important;
    max-width: 375px !important;
    height: calc(100vh - 40px) !important;
    max-height: 900px !important;
    background-color: #fff !important;
    transform: translateX(0) !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    overflow: hidden !important;
    position: relative !important;
  }

  .taro-tabbar__panel {
    height: 100% !important;
    overflow: auto !important;
  }
}

/* PC 宽屏适配 - Toast 定位到手机框范围内 */
@media (min-width: 769px) {
  body .toaster {
    left: 50% !important;
    right: auto !important;
    width: 375px !important;
    max-width: 375px !important;
    transform: translateX(-50%) !important;
    box-sizing: border-box !important;
  }
}

/* PC 宽屏适配 - 手机框样式（无 TabBar 页面，通过 JS 添加 no-tabbar 类） */
@media (min-width: 769px) {
  body.no-tabbar #app {
    width: 375px !important;
    max-width: 375px !important;
    height: calc(100vh - 40px) !important;
    max-height: 900px !important;
    background-color: #fff !important;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1) !important;
    border-radius: 20px !important;
    overflow: hidden !important;
    position: relative !important;
    transform: translateX(0) !important;
  }

  body.no-tabbar #app .taro_router {
    height: 100% !important;
    overflow: auto !important;
  }
}
`;function Re(){var i=document.createElement("style");i.innerHTML=He+Oe+ze,document.head.appendChild(i)}function Le(){var i=function(){var n=!!document.querySelector(".taro-tabbar__container");document.body.classList.toggle("no-tabbar",!n)};i();var e=new MutationObserver(i);e.observe(document.body,{childList:!0,subtree:!0})}function Ie(){Re(),Le()}function Me(){var i=oe();if(i===ie.WEAPP)try{var e=se(),r=e.miniProgram.envVersion;console.log("[Debug] envVersion:",r),r!=="release"&&le({enableDebug:!0})}catch(n){console.error("[Debug] 开启调试模式失败:",n)}}var Ve={visible:!1,title:"",bgColor:"#ffffff",textStyle:"black",navStyle:"default",transparent:"none",leftIcon:"none"},Ue=function(){var e,r=P();return(r==null||(e=r.config)===null||e===void 0?void 0:e.window)||{}},We=function(){var e,r,n=(e=P())===null||e===void 0||(e=e.config)===null||e===void 0?void 0:e.tabBar;return new Set((n==null||(r=n.list)===null||r===void 0?void 0:r.map(function(a){return a.pagePath}))||[])},M=function(){var e,r=P();return(r==null||(e=r.config)===null||e===void 0||(e=e.pages)===null||e===void 0?void 0:e[0])||"pages/index/index"},j=function(e){return e.replace(/^\//,"")},$e=function(e,r,n,a){if(!e)return"none";var o=j(e),s=j(a),m=o===s,u=r.has(o)||r.has("/".concat(o)),p=n>1;return u||m?"none":p?"back":"home"},Ye=function(){var e=h.useState(Ve),r=L(e,2),n=r[0],a=r[1],o=h.useState(0),s=L(o,2),m=s[0],u=s[1],p=h.useCallback(function(){var c=g.getCurrentPages();if(c.length===0){a(function(ae){return b(b({},ae),{},{visible:!1})});return}var f=c[c.length-1],O=(f==null?void 0:f.route)||"";if(O){var x=(f==null?void 0:f.config)||{},w=Ue(),E=We(),re=M(),C=j(O),z=j(re),ne=C===z,te=E.has(C)||E.has("/".concat(C)),R=E.size<=1&&c.length<=1&&(ne||te);a({visible:!R,title:document.title||x.navigationBarTitleText||w.navigationBarTitleText||"",bgColor:x.navigationBarBackgroundColor||w.navigationBarBackgroundColor||"#ffffff",textStyle:x.navigationBarTextStyle||w.navigationBarTextStyle||"black",navStyle:x.navigationStyle||w.navigationStyle||"default",transparent:x.transparentTitle||w.transparentTitle||"none",leftIcon:R?"none":$e(C,E,c.length,z)})}},[]);g.useDidShow(function(){p()}),g.usePageScroll(function(c){var f=c.scrollTop;n.transparent==="auto"&&u(Math.min(f/100,1))}),h.useEffect(function(){var c=null,f=new MutationObserver(function(){c&&clearTimeout(c),c=setTimeout(function(){p()},50)});return f.observe(document.head,{subtree:!0,childList:!0,characterData:!0}),p(),function(){f.disconnect(),c&&clearTimeout(c)}},[p]);var _=n.visible&&n.navStyle!=="custom";if(h.useEffect(function(){_?document.body.classList.add("h5-navbar-visible"):document.body.classList.remove("h5-navbar-visible")},[_]),!_)return t.jsx(t.Fragment,{});var H=n.textStyle==="white"?"#fff":"#333",K=n.textStyle==="white"?"text-white":"text-gray-800",Q=function(){return n.transparent==="always"?{backgroundColor:"transparent"}:n.transparent==="auto"?{backgroundColor:n.bgColor,opacity:m}:{backgroundColor:n.bgColor}},Z=function(){return g.navigateBack()},ee=function(){var f=M();g.reLaunch({url:"/".concat(f)})};return t.jsxs(t.Fragment,{children:[t.jsxs(l,{className:"fixed top-0 left-0 right-0 h-11 flex items-center justify-center z-1000",style:Q(),children:[n.leftIcon==="back"&&t.jsx(l,{className:"absolute left-2 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center",onClick:Z,children:t.jsx(ue,{size:24,color:H})}),n.leftIcon==="home"&&t.jsx(l,{className:"absolute left-2 top-1/2 -translate-y-1/2 p-1 flex items-center justify-center",onClick:ee,children:t.jsx(ce,{size:22,color:H})}),t.jsx(de,{className:"text-base font-medium max-w-3/5 truncate ".concat(K),children:n.title})]}),t.jsx(l,{className:"h-11 shrink-0"})]})},Xe=function(e){var r=e.children;return t.jsxs(t.Fragment,{children:[t.jsx(Ye,{}),r]})},Ge=["className","children","orientation"],q=h.forwardRef(function(i,e){var r=i.className,n=i.children,a=i.orientation,o=a===void 0?"vertical":a,s=pe(i,Ge),m=o==="horizontal"||o==="both",u=o==="vertical"||o==="both";return t.jsx(fe,b(b({ref:e,className:N("relative",r),scrollY:u,scrollX:m,style:{overflowX:m?"auto":"hidden",overflowY:u?"auto":"hidden"}},s),{},{children:n}))});q.displayName="ScrollArea";var qe={error:null,report:"",source:"",visible:!1,open:!1,timestamp:""},V="hsl(360, 100%, 45%)",U=!1,B=qe,A=new Set,Je=function(){A.forEach(function(e){return e()})},Ke=function(e){return A.add(e),function(){return A.delete(e)}},W=function(){return B},J=function(e){B=e,Je()},Qe=(function(){var i=v(d().m(function e(r){var n,a,o,s,m;return d().w(function(u){for(;;)switch(u.p=u.n){case 0:if(typeof window!="undefined"){u.n=1;break}return u.a(2,!1);case 1:if(u.p=1,!((n=navigator.clipboard)!==null&&n!==void 0&&n.writeText)){u.n=3;break}return u.n=2,navigator.clipboard.writeText(r);case 2:return u.a(2,!0);case 3:u.n=5;break;case 4:u.p=4,s=u.v,console.warn("[H5ErrorBoundary] Clipboard API copy failed:",s);case 5:return u.p=5,a=document.createElement("textarea"),a.value=r,a.setAttribute("readonly","true"),a.style.position="fixed",a.style.opacity="0",document.body.appendChild(a),a.select(),o=document.execCommand("copy"),document.body.removeChild(a),u.a(2,o);case 6:return u.p=6,m=u.v,console.warn("[H5ErrorBoundary] Fallback copy failed:",m),u.a(2,!1)}},e,null,[[5,6],[1,4]])}));return function(r){return i.apply(this,arguments)}})(),Ze=function(e){if(e instanceof Error)return e;if(typeof e=="string")return new Error(e);try{return new Error(JSON.stringify(e))}catch(r){return new Error(String(e))}},er=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=["[H5 Runtime Error]","Time: ".concat(new Date().toISOString()),r.source?"Source: ".concat(r.source):"","Name: ".concat(e.name),"Message: ".concat(e.message),e.stack?`Stack:
`.concat(e.stack):"",r.componentStack?`Component Stack:
`.concat(r.componentStack):"",typeof navigator!="undefined"?"User Agent: ".concat(navigator.userAgent):""].filter(Boolean);return n.join(`

`)},$=function(e){B.visible&&J(b(b({},B),{},{open:e}))},D=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof window!="undefined"){var n=Ze(e),a=er(n,r),o=new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit",second:"2-digit"});J({error:n,report:a,source:r.source||"runtime",timestamp:o,visible:!0,open:!1}),console.error("[H5ErrorOverlay] Showing error overlay:",n,r)}},rr=function(e){var r=e.error||new Error(e.message||"Unknown H5 runtime error");D(r,{source:"window.error"})},nr=function(e){D(e.reason,{source:"window.unhandledrejection"})},tr=function(){typeof window=="undefined"||U||(U=!0,window.addEventListener("error",rr),window.addEventListener("unhandledrejection",nr))},ar=function(){var e,r,n=h.useSyncExternalStore(Ke,W,W);if(!n.visible)return null;var a=((e=n.error)===null||e===void 0?void 0:e.name)||"Error";return t.jsx(ke,{children:t.jsxs(l,{className:"pointer-events-none fixed inset-0 z-[2147483646]",children:[t.jsx(l,{className:"pointer-events-auto fixed bottom-5 left-5",children:t.jsx(F,{variant:"outline",size:"icon",className:N("h-11 w-11 rounded-full shadow-md transition-transform"),style:{backgroundColor:"hsl(359, 100%, 97%)",borderColor:"hsl(359, 100%, 94%)",color:V},onClick:function(){return $(!n.open)},children:t.jsx(ve,{size:22,color:V})})}),n.open&&t.jsx(l,{className:"pointer-events-none fixed inset-0 bg-white bg-opacity-15 supports-[backdrop-filter]:backdrop-blur-md",children:t.jsx(l,{className:"absolute inset-0 flex items-center justify-center px-4 py-4",children:t.jsx(l,{className:"w-full max-w-md",style:{width:"min(calc(100vw - 32px), var(--h5-phone-width, 390px))",height:"min(calc(100vh - 32px), 900px)"},children:t.jsx(Te,{className:N("pointer-events-auto h-full rounded-2xl border border-border bg-background text-foreground shadow-2xl"),children:t.jsxs(l,{className:"relative flex h-full flex-col",children:[t.jsxs(Ne,{className:"gap-2 p-4 pb-2",children:[t.jsxs(l,{className:"flex items-start justify-between gap-3",children:[t.jsxs(l,{className:"flex flex-wrap items-center gap-2",children:[t.jsx(T,{variant:"destructive",className:"border-none bg-red-500 px-3 py-1 text-xs font-medium text-white",children:"Runtime Error"}),t.jsx(T,{variant:"outline",className:"px-3 py-1 text-xs",children:n.source})]}),t.jsxs(l,{className:"flex shrink-0 items-center gap-1",children:[t.jsx(F,{variant:"ghost",size:"icon",className:"h-8 w-8 rounded-full",onClick:function(){return window.location.reload()},children:t.jsx(ge,{size:15,color:"inherit"})}),t.jsx(F,{variant:"ghost",size:"icon",className:"h-8 w-8 rounded-full",onClick:function(){return $(!1)},children:t.jsx(be,{size:17,color:"inherit"})})]})]}),t.jsxs(l,{className:"flex items-center justify-between gap-3",children:[t.jsx(Ae,{className:"text-left text-lg",children:a}),t.jsxs(F,{variant:"outline",size:"sm",className:"shrink-0 rounded-lg",onClick:(function(){var o=v(d().m(function m(){var u;return d().w(function(p){for(;;)switch(p.n){case 0:return p.n=1,Qe(n.report);case 1:if(u=p.v,!u){p.n=2;break}return I.success("已复制错误信息",{description:"可发送给 Agent 进行自动修复",position:"top-center"}),p.a(2);case 2:I.warning("复制失败",{description:"请直接选中文本后手动复制。",position:"top-center"});case 3:return p.a(2)}},m)}));function s(){return o.apply(this,arguments)}return s})(),children:[t.jsx(xe,{size:15,color:"inherit"}),t.jsx(l,{children:"复制错误"})]})]})]}),t.jsx(Pe,{className:"min-h-0 flex-1 overflow-hidden px-4 pb-4 pt-2",children:t.jsxs(l,{className:"flex h-full min-h-0 flex-col gap-2",children:[t.jsxs(l,{className:"flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg border border-border px-3 py-2 text-sm",children:[t.jsxs(l,{className:"flex items-center gap-2",children:[t.jsx(l,{className:"text-muted-foreground",children:"Error"}),t.jsx(l,{className:"font-medium text-foreground",children:((r=n.error)===null||r===void 0?void 0:r.name)||"Error"})]}),t.jsx(l,{className:"h-4 w-px bg-border"}),t.jsxs(l,{className:"flex items-center gap-2",children:[t.jsx(l,{className:"text-muted-foreground",children:"Source"}),t.jsx(l,{className:"font-medium text-foreground",children:n.source})]})]}),t.jsxs(l,{className:"min-h-0 flex flex-1 flex-col overflow-hidden rounded-xl border border-border bg-black text-white",children:[t.jsxs(l,{className:"flex items-center justify-between border-b border-white border-opacity-10 px-3 py-3",children:[t.jsx(l,{className:"text-xs font-medium uppercase tracking-wide text-zinc-400",children:"Full Report"}),t.jsx(T,{variant:"outline",className:"border-zinc-700 bg-transparent px-2 py-1 text-xs text-zinc-400",children:n.timestamp})]}),t.jsx(q,{className:"min-h-0 flex-1 w-full",orientation:"both",children:t.jsx(l,{className:"inline-block min-w-full whitespace-pre px-3 py-3 pb-8 font-mono text-xs leading-6 text-zinc-200",children:n.report})})]})]})})]})})})})})]})})},or=(function(i){function e(){var r;we(this,e);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=ye(this,e,[].concat(a)),r.state={error:null},r}return me(e,i),he(e,[{key:"componentDidUpdate",value:function(n){this.state.error&&n.children!==this.props.children&&this.setState({error:null})}},{key:"componentDidCatch",value:function(n,a){D(n,{source:"React Error Boundary",componentStack:a.componentStack||""})}},{key:"render",value:function(){return t.jsxs(t.Fragment,{children:[t.jsx(ar,{}),this.state.error?null:this.props.children]})}}],[{key:"getDerivedStateFromError",value:function(n){return{error:n}}}])})(h.Component),ir=function(e){var r=e.children;return t.jsx(or,{children:r})},sr=function(e){var r=e.children;return tr(),g.useLaunch(function(){Me(),Ie()}),t.jsx(ir,{children:t.jsx(Xe,{children:r})})},lr=function(e){var r=e.children;return t.jsxs(Ee,{defaultColor:"#000",defaultSize:24,children:[t.jsx(sr,{children:r}),t.jsx(De,{})]})},S=Y.__taroAppConfig={router:{mode:"hash"},pages:["pages/index/index","pages/basic/index","pages/quiz/index","pages/report/index","pages/leads/index"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#FAF8F5",navigationBarTitleText:"企盈企业法律风险体检",navigationBarTextStyle:"black"}};S.routes=[Object.assign({path:"pages/index/index",load:(function(){var i=v(d().m(function r(n,a){var o;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.118b99c5.js"),["./index.118b99c5.js","./vendors.80d5bf61.js","../css/vendors.8886af03.css","./common.b4c6315a.js"],import.meta.url);case 1:return o=s.v,s.a(2,[o,n,a])}},r)}));function e(r,n){return i.apply(this,arguments)}return e})()},{navigationBarTitleText:"企盈企业法律风险体检",navigationBarBackgroundColor:"#FAF8F5",navigationBarTextStyle:"black"}),Object.assign({path:"pages/basic/index",load:(function(){var i=v(d().m(function r(n,a){var o;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.3de3c6da.js"),["./index.3de3c6da.js","./vendors.80d5bf61.js","../css/vendors.8886af03.css","./common.b4c6315a.js"],import.meta.url);case 1:return o=s.v,s.a(2,[o,n,a])}},r)}));function e(r,n){return i.apply(this,arguments)}return e})()},{navigationBarTitleText:"企业信息",navigationBarBackgroundColor:"#FAF8F5",navigationBarTextStyle:"black"}),Object.assign({path:"pages/quiz/index",load:(function(){var i=v(d().m(function r(n,a){var o;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.a589711e.js"),["./index.a589711e.js","./vendors.80d5bf61.js","../css/vendors.8886af03.css","./common.b4c6315a.js"],import.meta.url);case 1:return o=s.v,s.a(2,[o,n,a])}},r)}));function e(r,n){return i.apply(this,arguments)}return e})()},{navigationBarTitleText:"风险体检答题",navigationBarBackgroundColor:"#FAF8F5",navigationBarTextStyle:"black"}),Object.assign({path:"pages/report/index",load:(function(){var i=v(d().m(function r(n,a){var o;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.b2658b5a.js"),["./index.b2658b5a.js","./vendors.80d5bf61.js","../css/vendors.8886af03.css","./common.b4c6315a.js"],import.meta.url);case 1:return o=s.v,s.a(2,[o,n,a])}},r)}));function e(r,n){return i.apply(this,arguments)}return e})()},{navigationBarTitleText:"体检报告",navigationBarBackgroundColor:"#1E3A5F",navigationBarTextStyle:"white"}),Object.assign({path:"pages/leads/index",load:(function(){var i=v(d().m(function r(n,a){var o;return d().w(function(s){for(;;)switch(s.n){case 0:return s.n=1,y(()=>import("./index.b7a1ac59.js"),["./index.b7a1ac59.js","./vendors.80d5bf61.js","../css/vendors.8886af03.css","./common.b4c6315a.js"],import.meta.url);case 1:return o=s.v,s.a(2,[o,n,a])}},r)}));function e(r,n){return i.apply(this,arguments)}return e})()},{navigationBarTitleText:"律师留资查看"})];Object.assign(X,{findDOMNode:k.findDOMNode,render:k.render,unstable_batchedUpdates:k.unstable_batchedUpdates});Ce();var ur=Fe(lr,G,X,S),cr=je({window:Y});Be(S);Se(cr,ur,S,G);_e({designWidth:750,deviceRatio:{375:2,640:1.17,750:1,828:.905},baseFontSize:20,unitPrecision:void 0,targetUnit:void 0});
