"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[6649],{50146:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(85893),s=i(11151);const o={title:"2018-06-12"},r="2018-06-12 conda-forge meeting",c={id:"minutes/2018-06-12",title:"2018-06-12",description:"2018-05-29 conda-forge meeting",source:"@site/community/minutes/2018-06-12.md",sourceDirName:"minutes",slug:"/minutes/2018-06-12",permalink:"/community/minutes/2018-06-12",draft:!1,unlisted:!1,editUrl:"https://github.com/conda-forge/conda-forge.github.io/tree/refs/heads/main/community/minutes/2018-06-12.md",tags:[],version:"current",lastUpdatedAt:1714556438,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{title:"2018-06-12"},sidebar:"community",previous:{title:"2018-06-26",permalink:"/community/minutes/2018-06-26"},next:{title:"2018-05-29",permalink:"/community/minutes/2018-05-29"}},a={},l=[];function h(e){const n={a:"a",h1:"h1",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"2018-06-12-conda-forge-meeting",children:"2018-06-12 conda-forge meeting"}),"\n",(0,t.jsxs)(n.p,{children:["2018-05-29 conda-forge meeting\n",(0,t.jsx)(n.strong,{children:"Pinned Items"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Zoom instructions: ",(0,t.jsx)(n.a,{href:"https://paper.dropbox.com/doc/How-to-connect-to-zoom-odl94oveHyiRv6UqTtZE5",children:"+How to connect to zoom"})]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"New items"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Actionable things to check in at the June 12 meeting"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["add something to the bot to add new PRs that manage the cb2 \u2192 cb3\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["e.g., if a compiler is detected, add the right compilers for the right files (Justin, nominally \u2014 @Christopher W @Mike S and @Anthony S will probably be reviewing those PRs) See issue: ",(0,t.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/issues/162",children:"https://github.com/regro/cf-scripts/issues/162"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"@Mike S is working on a secondary channel to push the rebuilt cb3 packages"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Finding a good solution to sharing passwords among core"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run_exports etc: ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-pinning-feedstock/pull/58",children:"https://github.com/conda-forge/conda-forge-pinning-feedstock/pull/58"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Michael Sarahan to document and give demo on how to transition old recipes to new style\n- ",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/AnacondaRecipesSync",children:"https://github.com/conda-forge/AnacondaRecipesSync"}),"\n- 5/1: Will wait for more people on the dev call before Mike talks about this"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Build packages on C3I and upload to conda-forge"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make is missing from the base image for PowerPC internal to Anaconda. Fun times!"}),"\n",(0,t.jsx)(n.li,{children:"Mike is open to other people helping with this.  If interested, reach out!  Helping means trying recipes, debugging any issues, and resolving any merge conflicts that have happened since Mike pulled them in last.  Moving target."}),"\n",(0,t.jsxs)(n.li,{children:["Packages that have been built ",(0,t.jsx)(n.a,{href:"https://anaconda.org/cf-cb3",children:"https://anaconda.org/cf-cb3"})," - these may need more work regarding versions.  The graph was computed with the versions, but probably should have ignored them.  When a pin is older than a newer recipe, the upstream recipe gets missed as a real dependency because of the version mismatch."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"switch to cb3"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["what kind of things are going to break when we change compilers?\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"(@Jonathan H had a great response that I hope he\u2019ll clarify here:) tl;dr C++ ABI"}),"\n",(0,t.jsxs)(n.li,{children:["Some details on libstdc++ dual ABI, ",(0,t.jsx)(n.a,{href:"https://gcc.gnu.org/onlinedocs/libstdc++/manual/using_dual_abi.html",children:"https://gcc.gnu.org/onlinedocs/libstdc++/manual/using_dual_abi.html"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sprint in NYC June 18th through 20th for REST API for conda-forge graph and better inspection of CLI/imports/includes for conda-forge packages."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Existing Items"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Making the agenda and notes public again.\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"John will see if we can make dropbox paper readable by the world"}),"\n",(0,t.jsx)(n.li,{children:"other options are to just post the notes somewhere public after the meeting"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"conda-forge blog"}),"\n",(0,t.jsxs)(n.li,{children:["discuss numpy pinning (",(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-pinning-feedstock/pull/44",children:"https://github.com/conda-forge/conda-forge-pinning-feedstock/pull/44"}),")\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Merged!"}),"\n",(0,t.jsx)(n.li,{children:"Michael working on different scheme.  numpy-base has all files.  numpy is metapackage that implies only python API usage.  numpy-devel is metapackage that implies C API linkage, and imposes run_exports"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Discussed Items"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Governance, CoD, and NumFOCUS affiliation.\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["PyPA discussions at PyCON\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Some general agreement by PyPA that pip/wheels shouldn\u2019t be used for everything"}),"\n",(0,t.jsx)(n.li,{children:"No clear delineation as to where pip/wheels should stop and other tools begin"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["numfocus affiliation: ",(0,t.jsx)(n.a,{href:"https://github.com/numfocus/projects-director/blob/master/projects/Matplotlib.md",children:"https://github.com/numfocus/projects-director/blob/master/projects/Matplotlib.md"})]}),"\n",(0,t.jsxs)(n.li,{children:["Scopatz said he was interested in pushing this forward :)\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/pull/598",children:"conda-forge/conda-forge.github.io#598"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Idea of ",(0,t.jsx)(n.a,{href:"https://github.com/envoyproxy/envoy/blob/master/OWNERS.md",children:'"emeritus" maintainers'})," \u2014 basically, if someone wants to step away from the project then we can still call them out as having been core members in the past but are no longer contributing. Switching between emeritus and active is as simple as the emeritus member beginning to contribute again. This has not been an issue yet, but if we do fail to reach a vote threshold as outlined in the governance document then we will revisit the idea of emeritus maintainers"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Done"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://packaging.python.org/guides/installing-scientific-packages/",children:"https://packaging.python.org/guides/installing-scientific-packages/"}),"\n",(0,t.jsx)(n.a,{href:"https://packaging.python.org/guides/tool-recommendations/",children:"https://packaging.python.org/guides/tool-recommendations/"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/pull/598",children:"https://github.com/conda-forge/conda-forge.github.io/pull/598"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(67294);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);