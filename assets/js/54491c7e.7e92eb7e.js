"use strict";(self.webpackChunkla_viva_es_sueno=self.webpackChunkla_viva_es_sueno||[]).push([[3972],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,g=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"2022-04-23-github-action-tutorial",title:"github actions \uc0ac\uc6a9\uae30",authors:"rewrite0w0",tags:["CD/CI","github","\uac10\uc0c1"]},p=void 0,s={permalink:"/La-viva-es-Sueno/blog/2022-04-23-github-action-tutorial",source:"@site/blog/article-list/2022-04-23-github-action-tutorial.md",title:"github actions \uc0ac\uc6a9\uae30",description:"\ub2e4\uc74c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c \uc0dd\uac01\ud558\ub2e4",date:"2022-04-23T00:00:00.000Z",formattedDate:"April 23, 2022",tags:[{label:"CD/CI",permalink:"/La-viva-es-Sueno/blog/tags/cd-ci"},{label:"github",permalink:"/La-viva-es-Sueno/blog/tags/github"},{label:"\uac10\uc0c1",permalink:"/La-viva-es-Sueno/blog/tags/\uac10\uc0c1"}],readingTime:2.145,truncated:!1,authors:[{name:"rewrite0w0",title:"JavaScript \uac1c\ubc1c\uc790",url:"https://github.com/rewrite0w0",key:"rewrite0w0"}],frontMatter:{slug:"2022-04-23-github-action-tutorial",title:"github actions \uc0ac\uc6a9\uae30",authors:"rewrite0w0",tags:["CD/CI","github","\uac10\uc0c1"]},nextItem:{title:"Playwright \uc0ac\uc6a9\uae30",permalink:"/La-viva-es-Sueno/blog/playwright-tutorial"}},u={authorsImageUrls:[void 0]},c=[{value:"\ub3d9\uae30",id:"\ub3d9\uae30",level:2},{value:"\uc2dc\uc791\ud558\uae30",id:"\uc2dc\uc791\ud558\uae30",level:2},{value:"\uc124\uc815",id:"\uc124\uc815",level:2},{value:"next-deploy.yml",id:"next-deployyml",level:3},{value:"package.json",id:"packagejson",level:3},{value:"next.config.js",id:"nextconfigjs",level:3},{value:"\ud2b9\uc774\uc0ac\ud56d",id:"\ud2b9\uc774\uc0ac\ud56d",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"\uc77d\uc744\uac70\ub9ac",id:"\uc77d\uc744\uac70\ub9ac",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ub2e4\uc74c \ud504\ub85c\uc81d\ud2b8\uc5d0 \ub300\ud55c \uc0dd\uac01\ud558\ub2e4"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d"},"\ud504\ub860\ud2b8\uc5d4\ub4dc \uc2dc\ud5d8(\uc77c\ubcf8\uc5b4)")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rewrite0w0/yumemi-frontend-test/blob/main/README.md"},"\ud55c\uad6d\uc5b4"),"\uc744 \ubcf4\uace0 \uc774\uac83\uc744 \ud558\uba74 \ub418\uaca0\ub2e4 \uc0dd\uac01\ud588\ub2e4."),(0,i.kt)("h2",{id:"\ub3d9\uae30"},"\ub3d9\uae30"),(0,i.kt)("p",null,"\uc694\uac74\uc5d0\ub294 \ub530\ub85c \ub098\uc624\uc9c0\ub294 \uc54a\uc9c0\ub9cc, ",(0,i.kt)("a",{parentName:"p",href:"https://note.yumemi.co.jp/n/ned7429b59556"},"\ud68c\uc0ac \ube14\ub85c\uadf8"),"\ub97c \ubcf4\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"CI\ub97c \uad6c\ucd95\ud588\ub294\uac00?")," \ud56d\ubaa9\uc774 \uc788\ub2e4."),(0,i.kt)("p",null,"\ub610\ud55c \uadfc\ub798 \uc5b4\ucc0c\uc800\ucc0c ",(0,i.kt)("inlineCode",{parentName:"p"},"CI"),"\uc640 \uc811\ucd09\uc774 \ub9ce\uc544 \uad81\uae08\ud588\uae30\uc5d0 \uc2dc\uc791\ud588\ub2e4."),(0,i.kt)("h2",{id:"\uc2dc\uc791\ud558\uae30"},"\uc2dc\uc791\ud558\uae30"),(0,i.kt)("p",null,"github \uc800\uc7a5\uc18c\uc758 \uc544\ubb34 \ud504\ub85c\uc81d\ud2b8\ub098 \ub4e4\uc5b4\uac00\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions"),"\ub97c \ud074\ub9ad\ud558\uace0 \ud544\uc694\ud55c \ubc29\uc2dd\uc744 \uc120\ud0dd\ud55c\ub2e4."),(0,i.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"github pages"),"\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"next.js"),"\ub97c \uc62c\ub9ac\uace0 \uc2f6\uc73c\ubbc0\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"skip"),"\uc73c\ub85c \uc9c4\ud589"),(0,i.kt)("h2",{id:"\uc124\uc815"},"\uc124\uc815"),(0,i.kt)("h3",{id:"next-deployyml"},"next-deploy.yml"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/next-deploy.yml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"name: github pages\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\n  workflow_dispatch:\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n\n      - name: setup node\n        uses: actions/setup-node@v3\n        with:\n          node-version: '16'\n          cache: 'npm'\n          # \ucc98\uc74c push\ud560 \ub54c\ub294 cache\uac00 \uc788\uc73c\uba74 \uc5d0\ub7ec\ub77c\uc11c, cache\ub97c \uc9c0\uc6e0\ub2e4\uac00 \ub450 \ubc88\uc9f8\ubd80\ud130 \ub123\uc5c8\ub2e4.\n\n      - name: npm install\n        run: npm install --frozen-lockfile\n\n      - name: next build\n        run: npm run build\n\n      - name: next export\n        run: npm run export\n\n      - name: add nojekyll\n        run: touch ./out/.nojekyll\n        # \ud3f4\ub354\uc5d0 `_` \uc788\uc73c\uba74 \uc778\uc2dd \uc548 \ub418\ub294 \uac83 \ub54c\ubb38\uc5d0\n\n      - name: next deploy\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          publish_dir: ./out\n")),(0,i.kt)("h3",{id:"packagejson"},"package.json"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"scripts":{\n  // ..\n  "export":"next export"\n  // \ucd94\uac00\n}\n')),(0,i.kt)("h3",{id:"nextconfigjs"},"next.config.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/** @type {import('next').NextConfig} */\n\nconst isProd = process.env.NODE_ENV === 'production';\n\nconst nextConfig = {\n  reactStrictMode: true,\n  trailingSlash: true,\n  images: {\n    loader: 'akamai',\n    path: '',\n  },\n  assetPrefix: isProd ? '/repository-name/' : '',\n  // ex) github.com/test > /test/\n};\n\nmodule.exports = nextConfig;\n")),(0,i.kt)("h3",{id:"\ud2b9\uc774\uc0ac\ud56d"},"\ud2b9\uc774\uc0ac\ud56d"),(0,i.kt)("p",null,"\ub2e4\ub978 \uae00\uc744 \ubcf4\uba74 \uc790\ub3d9\uc73c\ub85c \uc0dd\uae30\ub294 \uac83 \uac19\uc740\ub370 \ud544\uc790\ub294 \uadf8\uac8c \uc548 \ub418\uc11c \uc77c\ub2e8 \uc218\ub3d9\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"git checkout -b gh-pages"),"\ud574\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," \ube0c\ub7f0\uce58\ub97c \uc0dd\uc131\ud588\ub2e4."),(0,i.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/rewrite0w0/yumemi-frontend-test"},"git"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://rewrite0w0.github.io/yumemi-frontend-test/"},"github pages")),(0,i.kt)("h2",{id:"\uc77d\uc744\uac70\ub9ac"},"\uc77d\uc744\uac70\ub9ac"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions"},"https://docs.github.com/en/actions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/vercel/next.js/tree/canary/examples/gh-pages"},"https://github.com/vercel/next.js/tree/canary/examples/gh-pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/actions/checkout"},"https://github.com/actions/checkout")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/actions/setup-node"},"https://github.com/actions/setup-node")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/peaceiris/actions-gh-pages"},"https://github.com/peaceiris/actions-gh-pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gregrickaby/nextjs-github-pages"},"https://github.com/gregrickaby/nextjs-github-pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gregrickaby.blog/article/nextjs-github-pages"},"https://gregrickaby.blog/article/nextjs-github-pages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://qiita.com/peaceiris/items/9c569125b25fc090c515"},"https://qiita.com/peaceiris/items/9c569125b25fc090c515")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://qiita.com/manten120/items/87e9e822800403904dc8"},"https://qiita.com/manten120/items/87e9e822800403904dc8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://qiita.com/sky_y/items/b96ae52c90457bcd7846"},"https://qiita.com/sky_y/items/b96ae52c90457bcd7846")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://qiita.com/ozaki25/items/fe9912fc41c3a5c5bfea"},"https://qiita.com/ozaki25/items/fe9912fc41c3a5c5bfea")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.kaizenprogrammer.com/entry/2019/12/15/220137"},"https://www.kaizenprogrammer.com/entry/2019/12/15/220137")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://knowledge.sakura.ad.jp/23478/"},"https://knowledge.sakura.ad.jp/23478/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/"},"https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.antora.org/antora/latest/publish-to-github-pages/"},"https://docs.antora.org/antora/latest/publish-to-github-pages/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/advanced-features/static-html-export"},"https://nextjs.org/docs/advanced-features/static-html-export")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nextjs.org/docs/messages/export-image-api"},"https://nextjs.org/docs/messages/export-image-api"))))}h.isMDXComponent=!0}}]);