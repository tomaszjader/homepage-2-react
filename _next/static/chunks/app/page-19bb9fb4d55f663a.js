(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5419:(e,s,a)=>{Promise.resolve().then(a.t.bind(a,8173,23)),Promise.resolve().then(a.t.bind(a,7970,23)),Promise.resolve().then(a.t.bind(a,6309,23)),Promise.resolve().then(a.t.bind(a,4805,23)),Promise.resolve().then(a.t.bind(a,2421,23)),Promise.resolve().then(a.bind(a,1468)),Promise.resolve().then(a.bind(a,6877)),Promise.resolve().then(a.t.bind(a,5269,23)),Promise.resolve().then(a.t.bind(a,9297,23))},1468:(e,s,a)=>{"use strict";a.d(s,{NavBarSection:()=>o});var t=a(5155),r=a(2115),i=a(5565);a(2261);var c=a(261),n=a(8173),l=a.n(n);let o=()=>{let[e,s]=(0,r.useState)(!1);return(0,t.jsx)("nav",{className:"hero hero-gap",children:(0,t.jsxs)("div",{className:"nav-bar",children:[(0,t.jsxs)("div",{className:"hero hero-section",children:[(0,t.jsx)(i.default,{src:(0,c.D)("assets/img/navbar-logo.svg"),alt:"",height:42,width:42}),(0,t.jsxs)("div",{className:"my",children:[(0,t.jsx)("p",{className:"my-name",children:"Tomasz Jąder"}),(0,t.jsx)("p",{className:"my-title",children:"Junior Fullstack developer"})]})]}),(0,t.jsxs)("div",{className:"hero nav-items ".concat(e?"nav-items-mobile":""),children:[(0,t.jsx)(l(),{href:"#about",className:"nav-item",children:"About"}),(0,t.jsx)(l(),{href:"#skills",className:"nav-item",children:"Skills"}),(0,t.jsx)(l(),{href:"#projects",className:"nav-item",children:"Projects"}),(0,t.jsxs)("div",{className:"nav-item-resume",children:[(0,t.jsx)(i.default,{src:(0,c.D)("assets/img/download-button.svg"),alt:"",height:20,width:20}),(0,t.jsx)("a",{href:(0,c.D)("assets/files/TomaszJaderCV.pdf"),download:!0,className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:"Resume"})]}),(0,t.jsx)(l(),{href:"#contact",className:"nav-item-contact",children:"Contact"})]}),(0,t.jsxs)("button",{className:"hamburger-menu",onClick:()=>{s(!e)},children:[(0,t.jsx)("span",{className:"hamburger-line ".concat(e?"open":"")}),(0,t.jsx)("span",{className:"hamburger-line ".concat(e?"open":"")}),(0,t.jsx)("span",{className:"hamburger-line ".concat(e?"open":"")})]})]})})}},6877:(e,s,a)=>{"use strict";a.d(s,{ProjectsSection:()=>h});var t=a(5155),r=a(2115);a(5385);var i=a(261),c=a(5565),n=a(8173),l=a.n(n);let o=e=>{let{project:s,stargazersCount:a,description:r,topics:n,website:o,link:d}=e;return(0,t.jsxs)("article",{className:"github-card",children:[(0,t.jsxs)("div",{className:"github-card-top",children:[(0,t.jsx)("div",{className:"github-card-dot"}),(0,t.jsx)("div",{className:"github-card-dot"}),(0,t.jsx)("div",{className:"github-card-dot"})]}),(0,t.jsxs)("div",{className:"github",children:[(0,t.jsxs)("div",{className:"github-card-header-section",children:[(0,t.jsx)("h3",{className:"github-card-header",children:s}),(0,t.jsxs)("span",{className:"github-card-star",children:[(0,t.jsx)(c.default,{src:(0,i.D)("assets/img/star.svg"),alt:"",width:16,height:16}),a]})]}),(0,t.jsx)("p",{className:"github-card-content",children:r}),(0,t.jsx)("div",{className:"github-card-technologys",children:n.map((e,s)=>(0,t.jsx)("div",{className:"github-card-technology",children:e},s))}),(0,t.jsxs)("div",{className:"github-card-buttons",children:[(0,t.jsxs)(l(),{className:"github-card-view-button",href:o,target:"_blank",style:{textDecoration:"none"},children:[(0,t.jsx)(c.default,{src:(0,i.D)("assets/img/page.svg"),alt:"",width:24,height:24})," View demo"]}),(0,t.jsxs)(l(),{className:"github-card-source-button",href:d,target:"_blank",style:{textDecoration:"none"},children:[(0,t.jsx)(c.default,{src:(0,i.D)("assets/img/github-logo.svg"),alt:"",width:24,height:24})," Source code"]})]})]})]})};a(5993);let d=async()=>{try{let e=await fetch("https://api.github.com/users/tomaszjader/repos",{headers:{"Content-Type":"application/json"}});if(!e.ok)throw Error("HTTP error! status: ".concat(e.status));return await e.json()}catch(e){throw console.error("Błąd podczas pobierania danych z GitHub:",e),e}},h=()=>{let[e,s]=r.useState([]);r.useEffect(()=>{(async()=>{s((await d()).filter(e=>e.description&&e.homepage))})()},[]);let a=e=>{var s;return(0,t.jsx)(o,{description:e.description,project:e.name,link:e.html_url,website:e.homepage,topics:null!==(s=e.topics)&&void 0!==s?s:[],stargazersCount:e.stargazers_count},e.name)};return e.length?(0,t.jsx)("section",{className:"projects",id:"projects",children:(0,t.jsxs)("article",{children:[(0,t.jsxs)("div",{className:"projects__description",children:[(0,t.jsx)("h2",{className:"projects__header",children:"Recent Projects"}),(0,t.jsx)("p",{className:"projects__description-header",children:"Since diving into development in 2020, I'm working on a range of projects to life. Here's a snapshot of my accomplishments so far."})]}),(0,t.jsxs)("div",{className:"projects__githubCards",children:[(0,t.jsx)("div",{className:"projects__githubCards-concret",children:e.slice(0,2).map(a)}),(0,t.jsx)("div",{className:"projects__githubCards-concret",children:e.slice(2,4).map(a)}),(0,t.jsx)("div",{className:"projects__githubCards-concret",children:e.slice(4,6).map(a)})]})]})}):(0,t.jsx)("div",{children:"Ładowanie projekt\xf3w..."})}},261:(e,s,a)=>{"use strict";a.d(s,{D:()=>t});let t=e=>e},6309:()=>{},4805:()=>{},5385:()=>{},2421:()=>{},2261:()=>{},5993:()=>{},5269:()=>{},9297:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[13,465,441,517,358],()=>s(5419)),_N_E=e.O()}]);