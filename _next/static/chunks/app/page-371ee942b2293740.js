(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9419:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,7970,23)),Promise.resolve().then(t.t.bind(t,6309,23)),Promise.resolve().then(t.t.bind(t,2421,23)),Promise.resolve().then(t.t.bind(t,2261,23)),Promise.resolve().then(t.bind(t,6768)),Promise.resolve().then(t.t.bind(t,5269,23)),Promise.resolve().then(t.t.bind(t,9297,23))},6768:(e,s,t)=>{"use strict";t.d(s,{ProjectsSection:()=>h});var a=t(5155),r=t(2115);t(5385);let i=e=>e;var c=t(5565),n=t(8173),o=t.n(n);let d=e=>{let{project:s,stargazersCount:t,description:r,topics:n,website:d,link:l}=e;return(0,a.jsxs)("article",{className:"github-card",children:[(0,a.jsxs)("div",{className:"github-card-top",children:[(0,a.jsx)("div",{className:"github-card-dot"}),(0,a.jsx)("div",{className:"github-card-dot"}),(0,a.jsx)("div",{className:"github-card-dot"})]}),(0,a.jsxs)("div",{className:"github",children:[(0,a.jsxs)("div",{className:"github-card-header-section",children:[(0,a.jsx)("h3",{className:"github-card-header",children:s}),(0,a.jsxs)("span",{className:"github-card-star",children:[(0,a.jsx)(c.default,{src:i("assets/img/star.svg"),alt:"",width:16,height:16}),t]})]}),(0,a.jsx)("p",{className:"github-card-content",children:r}),(0,a.jsx)("div",{className:"github-card-technologys",children:n.map((e,s)=>(0,a.jsx)("div",{className:"github-card-technology",children:e},s))}),(0,a.jsxs)("div",{className:"github-card-buttons",children:[(0,a.jsxs)(o(),{className:"github-card-view-button",href:d,target:"_blank",style:{textDecoration:"none"},children:[(0,a.jsx)(c.default,{src:i("assets/img/page.svg"),alt:"",width:24,height:24})," View demo"]}),(0,a.jsxs)(o(),{className:"github-card-source-button",href:l,target:"_blank",style:{textDecoration:"none"},children:[(0,a.jsx)(c.default,{src:i("assets/img/github-logo.svg"),alt:"",width:24,height:24})," Source code"]})]})]})]})};t(5993);let l=async()=>{try{let e=await fetch("https://api.github.com/users/tomaszjader/repos",{headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return await e.json()}catch(e){throw console.error("Błąd podczas pobierania danych z GitHub:",e),e}},h=()=>{let[e,s]=r.useState([]);r.useEffect(()=>{(async()=>{s((await l()).filter(e=>e.description&&e.homepage))})()},[]);let t=e=>{var s;return(0,a.jsx)(d,{description:e.description,project:e.name,link:e.html_url,website:e.homepage,topics:null!==(s=e.topics)&&void 0!==s?s:[],stargazersCount:e.stargazers_count},e.name)};return e.length?(0,a.jsx)("section",{className:"projects",id:"projects",children:(0,a.jsxs)("article",{children:[(0,a.jsxs)("div",{className:"projects__description",children:[(0,a.jsx)("h2",{className:"projects__header",children:"Recent Projects"}),(0,a.jsx)("p",{className:"projects__description-header",children:"Since diving into development in 2020, I'm working on a range of projects to life. Here's a snapshot of my accomplishments so far."})]}),(0,a.jsxs)("div",{className:"projects__githubCards",children:[(0,a.jsx)("div",{className:"projects__githubCards-concret",children:e.slice(0,2).map(t)}),(0,a.jsx)("div",{className:"projects__githubCards-concret",children:e.slice(2,4).map(t)}),(0,a.jsx)("div",{className:"projects__githubCards-concret",children:e.slice(4,6).map(t)})]})]})}):(0,a.jsx)("div",{children:"Ładowanie projekt\xf3w..."})}},6309:()=>{},5385:()=>{},2421:()=>{},2261:()=>{},5993:()=>{},5269:()=>{},9297:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[978,465,441,517,358],()=>s(9419)),_N_E=e.O()}]);