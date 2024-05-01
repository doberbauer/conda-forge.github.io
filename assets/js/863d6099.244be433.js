"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[4995],{3465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(85893),s=t(11151);const o={title:"2016-04-22"},r="2016-04-22 Exceptional meeting regarding VC pinning mechanism",a={id:"minutes/2016-04-22",title:"2016-04-22",description:"14:00 UTC",source:"@site/community/minutes/2016-04-22.md",sourceDirName:"minutes",slug:"/minutes/2016-04-22",permalink:"/community/minutes/2016-04-22",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2016-04-22.md",tags:[],version:"current",lastUpdatedAt:1714556438,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{title:"2016-04-22"},sidebar:"community",previous:{title:"2016-04-29",permalink:"/community/minutes/2016-04-29"},next:{title:"2016-04-15",permalink:"/community/minutes/2016-04-15"}},c={},d=[];function h(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"2016-04-22-exceptional-meeting-regarding-vc-pinning-mechanism",children:"2016-04-22 Exceptional meeting regarding VC pinning mechanism"}),"\n",(0,i.jsx)(n.p,{children:"14:00 UTC"}),"\n",(0,i.jsxs)(n.p,{children:["Hangout Link: ",(0,i.jsx)(n.a,{href:"https://hangouts.google.com/call/uqi4wwchj5hnpdetsbzmaer7hue"}),(0,i.jsx)(n.a,{href:"https://hangouts.google.com/call/uqi4wwchj5hnpdetsbzmaer7hue",children:"https://hangouts.google.com/call/uqi4wwchj5hnpdetsbzmaer7hue"})]}),"\n",(0,i.jsxs)(n.p,{children:["Subject: ",(0,i.jsx)(n.strong,{children:"How do we want to express recipes for particular VS versions."})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["New conda-build release - may be necessary for VS builds: ",(0,i.jsx)(n.a,{href:"https://github.com/conda/conda-build/releases/tag/1.20.1"}),(0,i.jsx)(n.a,{href:"https://github.com/conda/conda-build/releases/tag/1.20.1",children:"https://github.com/conda/conda-build/releases/tag/1.20.1"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*   Rebuild Eigen to test that the latest version works - if so we can drop [John Kirkham](https://conda-forge.hackpad.com/ep/profile/wv6uvIZX6h0)'s conda-smithy branch that tries to fix appveyor.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"This has all been done and works now. In some cases Python 3.4 64-bit  builds on Windows have issues. That is still not understood."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Current guidance at ",(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/wiki/VC-features"}),(0,i.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/wiki/VC-features",children:"https://github.com/conda-forge/staged-recipes/wiki/VC-features"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/conda/conda/wiki/VC-features"}),(0,i.jsx)(n.a,{href:"https://github.com/conda/conda/wiki/VC-features",children:"https://github.com/conda/conda/wiki/VC-features"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"How   should a simple recipe look? The following is problematic in   conda-build currently because the VS version isn't determined until the   build environment has been resolved (i.e. after the metadata has been   parsed, currently):"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Should conda-build automatically express the msvc_runtime dependency?"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If we had pinning capabilities within conda-build, does that become easier?"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Whatever we choose, how do we maintain compatibility with ",(0,i.jsx)(n.strong,{children:"defaults"}),"?"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Notes:"})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);