"use strict";(self.webpackChunkla_viva_es_sueno=self.webpackChunkla_viva_es_sueno||[]).push([[8355],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(f,l(l({ref:t},c),{},{components:a})):n.createElement(f,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3202:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],p={slug:"2022-04-28-supplementary-lessons-about-map",title:".map() \ub0a8\uc6a9\uc744 \uba48\ucd94\uc790 \ubcf4\ucda9",authors:"rewrite0w0",tags:["javascript","\uac10\uc0c1"]},i=void 0,s={permalink:"/La-viva-es-Sueno/blog/2022-04-28-supplementary-lessons-about-map",source:"@site/blog/article-list/2022-04-28-supplementary-lessons-about-map.md",title:".map() \ub0a8\uc6a9\uc744 \uba48\ucd94\uc790 \ubcf4\ucda9",description:"\uc774\uc804\uc5d0 \ubc88\uc5ed\ud55c \uae00\uc758 \ubcf4\ucda9\uc774\ub2e4.",date:"2022-04-28T00:00:00.000Z",formattedDate:"April 28, 2022",tags:[{label:"javascript",permalink:"/La-viva-es-Sueno/blog/tags/javascript"},{label:"\uac10\uc0c1",permalink:"/La-viva-es-Sueno/blog/tags/\uac10\uc0c1"}],readingTime:5.34,truncated:!1,authors:[{name:"rewrite0w0",title:"JavaScript \uac1c\ubc1c\uc790",url:"https://github.com/rewrite0w0",key:"rewrite0w0"}],frontMatter:{slug:"2022-04-28-supplementary-lessons-about-map",title:".map() \ub0a8\uc6a9\uc744 \uba48\ucd94\uc790 \ubcf4\ucda9",authors:"rewrite0w0",tags:["javascript","\uac10\uc0c1"]},nextItem:{title:"Dependabot \uc124\uc815\uc744 \ub458\ub7ec\ubcf4\uc558\ub2e4.",permalink:"/La-viva-es-Sueno/blog/2022-04-27-dependabot-no-settei-wo-minaoshitemita"}},c={authorsImageUrls:[void 0]},m=[{value:"\uadf8\ub7ec\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud558\ub294\uac00?",id:"\uadf8\ub7ec\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c\ud558\ub294\uac00",level:2},{value:"1. \uc0c8 \ubc30\uc5f4\uc774 \ud544\uc694\ud55c \uc791\uc5c5",id:"1-\uc0c8-\ubc30\uc5f4\uc774-\ud544\uc694\ud55c-\uc791\uc5c5",level:3},{value:"2. \uadf8\ub807\uc9c0 \uc54a\uc740 \uc791\uc5c5",id:"2-\uadf8\ub807\uc9c0-\uc54a\uc740-\uc791\uc5c5",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"forEach \uc790\uccb4\ub3c4 \ubb38\uc81c\uac00 \uc788\ub2e4.",id:"foreach-\uc790\uccb4\ub3c4-\ubb38\uc81c\uac00-\uc788\ub2e4",level:2},{value:"<code>map</code>\uacfc <code>forEach</code>\ub294 \ube44\uad50 \ub300\uc0c1\uc774 \uc544\ub2c8\ub2e4.",id:"map\uacfc-foreach\ub294-\ube44\uad50-\ub300\uc0c1\uc774-\uc544\ub2c8\ub2e4",level:2},{value:"\uc7ac\uacb0\ub860",id:"\uc7ac\uacb0\ub860",level:2},{value:"\uc77d\uc744\uac70\ub9ac",id:"\uc77d\uc744\uac70\ub9ac",level:2}],u={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774\uc804\uc5d0 \ubc88\uc5ed\ud55c ",(0,o.kt)("a",{parentName:"p",href:"/blog/stop-abusing-map"},"\uae00"),"\uc758 \ubcf4\ucda9\uc774\ub2e4."),(0,o.kt)("p",null,"\uba3c\uc800 \uae00\uc744 \uc0c1\uae30\ud574\ubcf4\uba74 ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\uc740 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map"},"\uc0c8 \ubc30\uc5f4\uc744 \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc"),"\uc774\ub2e4."),(0,o.kt)("p",null,"\uae38\uc774\uac00 1\uc5b5 \uac1c\uc778 \ubc30\uc5f4\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\ub97c \uc4f0\uba74 \ud504\ub85c\uadf8\ub7a8\uc740 \uc6d0\ubcf8 + \uc0c8 \ubc30\uc5f4, \ucd1d\ud569 \uae38\uc774\uac00 2\uc5b5\uc778 \ubc30\uc5f4\uc744 \uac16\ub294\ub2e4."),(0,o.kt)("p",null,"\uadf8\ub9ac\uace0 javascript\ub294 \ube48 \uac12\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\ub97c \ub123\uc5b4\uc8fc\ubbc0\ub85c \ub9cc\uc57d ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\ub97c \uc37c\ub294\ub370 \uadf8\uac83\uc774 \uc0c8 \ubc30\uc5f4\uc774 \uc544\ub2c8\ub77c \uc5b4\ub5a4 \ub3d9\uc791\uc744 \ud558\ub294 \uac83\uc774\uc5c8\ub2e4\uba74, \uac12\uc774 \uc544\ub2c8\ub77c ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," 1\uc5b5\uac1c\ub97c \uac16\ub294\ub2e4."),(0,o.kt)("h2",{id:"\uadf8\ub7ec\uba74-\uc5b4\ub5bb\uac8c-\ud574\uc57c\ud558\ub294\uac00"},"\uadf8\ub7ec\uba74 \uc5b4\ub5bb\uac8c \ud574\uc57c\ud558\ub294\uac00?"),(0,o.kt)("p",null,"\uacb0\ub860\ubd80\ud130 \ub9d0\ud558\uba74 ",(0,o.kt)("strong",{parentName:"p"},"\ub0b4\uac00 \uc9c0\uae08 \ubb34\uc2a8 \uc77c\uc744 \ud558\ub824\ud558\ub294\uc9c0 \ud30c\uc545"),"\ud574\uc57c\ud55c\ub2e4."),(0,o.kt)("p",null,"\ud06c\uac8c 2\uac00\uc9c0 \uacbd\uc6b0\ub77c \uc0dd\uac01\ud558\uba74,"),(0,o.kt)("h3",{id:"1-\uc0c8-\ubc30\uc5f4\uc774-\ud544\uc694\ud55c-\uc791\uc5c5"},"1. \uc0c8 \ubc30\uc5f4\uc774 \ud544\uc694\ud55c \uc791\uc5c5"),(0,o.kt)("p",null,"\ub9cc\uc57d \uc0c8 \ubc30\uc5f4\uc774 \ud544\uc694\ud55c \uc791\uc5c5\uc774\ub77c\uba74 \uc4f0\ub358\ub300\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\uc774\ub098 ",(0,o.kt)("inlineCode",{parentName:"p"},"for"),"\ub97c \uc4f0\ub294 \uac83\uc774 \ud604\uba85\ud560 \uac83\uc774\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [1, 2, 3, 4, 5];\n\nconst newArrUsingMap = arr.map((x) => x * x);\nconst newArrUsingFor = [];\n\nfor (let i = 0; i < arr.length; i += 1) {\n  newArrUsingFor.push(arr[i] * arr[i]);\n}\n")),(0,o.kt)("h3",{id:"2-\uadf8\ub807\uc9c0-\uc54a\uc740-\uc791\uc5c5"},"2. \uadf8\ub807\uc9c0 \uc54a\uc740 \uc791\uc5c5"),(0,o.kt)("p",null,"\ub9cc\uc57d \uc704\uc758 \uc791\uc5c5\uc744 ",(0,o.kt)("inlineCode",{parentName:"p"},"forEach"),"\ub85c \ud55c\ub2e4\uba74"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"arr.forEach((num, idx) => {\n  return (a[idx] = num * num);\n});\n")),(0,o.kt)("p",null,"\uc774\ub7f0 \uc2dd\uc774 \ub420 \ud150\ub370, \ubb38\uc81c\ub294 \uc774\uac74 ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"},"\uc6d0\ubcf8 \ubc30\uc5f4\uc5d0 \uc218\uc815\uc744 \uac00\ud558\ub294 \uc77c\uc784\uc73c\ub85c \ud558\uc9c0 \ub9d0\uc544\uc57c \ub41c\ub2e4.")),(0,o.kt)("p",null,"\ubb3c\ub860 \uc77c\uc0c1\uc801\uc73c\ub85c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"arr.forEach((x) => {\n  return x * x;\n});\n")),(0,o.kt)("p",null,"\uc774\ub807\uac8c \uc4f0\uba74 \ubc18\ud658 \uac12\uc774 \ubb34\uc2dc\ub418\ubbc0\ub85c \uc21c\uc218\ud568\uc744 \uc9c0\ud0a8\ub2e4\ub9cc \uc6b0\ub9ac\uac00 \ud558\uace0 \uc2f6\uc740 \uc77c\uc774\uc5c8\ub358 \uc81c\uacf1\ud55c \ubc30\uc5f4 \ubc18\ud658\uc740 \ud558\uc9c0 \ubabb\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const fruitIds = ['apple', 'oragne', 'banana'];\nfruitIds.forEach((id) => {\n  document.getElementById(`fruit-${id}`).classList.add('active');\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [1, 2, 3, 4, 5];\narr.forEach((x) => alert(x));\n\narr.map((x) => alert(x)); // [undefined, undefined, undefined, undefined, undefined]\n")),(0,o.kt)("p",null,"\uc704\uc640 \uac19\uc740 \uc608\uc2dc \uac19\uc740 \uc0c1\ud669\uac19\uc774(DOM\uc870\uc791\uc73c\ub85c \ud074\ub798\uc2a4 \ucd94\uac00) \uac19\uc774 \uc218\uc815\uc744 \uac00\ud574\ub3c4 \ub418\uac70\ub098, \uc0c8 \ubc30\uc5f4\uc774 \ud544\uc694\uc5c6\uc744 \uacbd\uc6b0\uc5d0 \uc0ac\uc6a9\ud558\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// forEach\nconst pomeranian = new Pomeranian();\n\nfoods.forEach((food) => {\n  if (food.type === 'beef') {\n    pomeranian.add(food);\n  }\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// reduce\nconst pomeranian = foods.reduce((pomeranian, food) => {\n  if (food.type === 'beef') {\n    pomeranian.add(food);\n  }\n  return pomeranian;\n}, new Pomeranian());\n")),(0,o.kt)("p",null,"\uc678\ubd80 \uc2a4\ucf54\ud504\uc5d0 \uc9c1\uc811 \uad00\uc5ec\ud558\uc9c0 \uc54a\uac70\ub098 \ud558\ub294 \ub4f1 \uc608\uc678\uc801 \uc0c1\ud669\uc774\ubbc0\ub85c \ub300\ubd80\ubd84 \ub2e4\ub978 \ubc30\uc5f4 \uba54\uc11c\ub4dc\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// https://azu.github.io/promises-book/#chapter5-async-function\n\nasync function fetchResources(resources) {\n  const results = [];\n  resources.forEach(async (resource) => {\n    const response = await dummyFetch(resource);\n    results.push(response.body);\n  });\n  return results;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\ub3d9\uae30 + map\nawait Promise.all(dogs.map(async (dog) => await dog.eat('Pedigree')));\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop"},"\ub610\ud55c ",(0,o.kt)("inlineCode",{parentName:"a"},"fetch"),"\ub098 ",(0,o.kt)("inlineCode",{parentName:"a"},"alert")," \uac19\uc774 \ube44\ub3d9\uae30\ucc98\ub9ac\ub97c \ud560 \ub54c ",(0,o.kt)("inlineCode",{parentName:"a"},"forEach"),"\ub85c\ud558\uba74 \ub8e8\ud504\ub9c8\ub2e4 ",(0,o.kt)("inlineCode",{parentName:"a"},"await"),"\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc774\ub97c \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce"},"\ud558\uc9c0\ub9cc \uc774 \ub610\ud55c \uc2e4\uc81c\ub85c\ub294 ",(0,o.kt)("inlineCode",{parentName:"a"},"Promise.all")," \uc774\uc6a9\ud574\uc11c \ubcd1\ub82c\ucc98\ub9ac\ud558\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc73c\ubbc0\ub85c \uc774 \ub54c\ub3c4 ",(0,o.kt)("inlineCode",{parentName:"a"},"map"),"\uc744 \uc4f0\uba74 \ub41c\ub2e4.")),(0,o.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,o.kt)("p",null,"\uc0c1\ud669\uc5d0 \ub530\ub77c ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"p"},"forEach"),"\ub97c \uad6c\ubd84\ud574\uc57c \uc368\uc57c \ud558\uba70, \uae30\uc900\uc740 \uc0c8 \ubc30\uc5f4\uc774 \ud544\uc694\ud55c \uc791\uc5c5\uc778\uac00 \uc544\ub2cc\uac00\ub85c \ud310\ub2e8\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("h2",{id:"foreach-\uc790\uccb4\ub3c4-\ubb38\uc81c\uac00-\uc788\ub2e4"},"forEach \uc790\uccb4\ub3c4 \ubb38\uc81c\uac00 \uc788\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/which-is-the-fastest-while-for-foreach-for-of-9022902be15e"},(0,o.kt)("img",{parentName:"a",src:"https://miro.medium.com/max/1400/1*rc30xdezgXIw-YtoccCXPQ.png",alt:"which is the fastest"}))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"forEach"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"while"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"for"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"for...of"),"\uc5d0 \ube44\uad50\ud574\uc11c \uc5b4\ub5a4 \uc791\uc5c5\uc744 \uc92c\uc744 \ub54c \uac00\uc7a5 \ub290\ub9ac\ub2e4."),(0,o.kt)("p",null,"\ud070 \uc791\uc5c5\uc744 \ud560 \ub54c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"while"),"\ub97c \uc4f0\uac70\ub098 ",(0,o.kt)("inlineCode",{parentName:"p"},"for...of"),"\ub97c \ud558\ub294 \uac83\uc774 \ub098\uc744 \uac83\uc774\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ub418\ub3c4\ub85d ",(0,o.kt)("inlineCode",{parentName:"p"},"for"),"\ub294 \ud53c\ud558\uace0 \uc2f6\uc73c\ubbc0\ub85c")),(0,o.kt)("h2",{id:"map\uacfc-foreach\ub294-\ube44\uad50-\ub300\uc0c1\uc774-\uc544\ub2c8\ub2e4"},(0,o.kt)("inlineCode",{parentName:"h2"},"map"),"\uacfc ",(0,o.kt)("inlineCode",{parentName:"h2"},"forEach"),"\ub294 \ube44\uad50 \ub300\uc0c1\uc774 \uc544\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc560\ucd08\uc5d0 ",(0,o.kt)("inlineCode",{parentName:"p"},"forEach"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\uc774\ub791 \ube44\uad50\ud558\uba74 \uc548\ub41c\ub2e4."),(0,o.kt)("p",null,"\ube44\uad50\ub294 \ub458\uc774 \uac19\uc740 \uc870\uac74\uc77c \ub54c\ud558\ub294 \uac83\uc778\ub370, \ub458\uc740 \uadf8\ub807\uc9c0 \uc54a\ub2e4. \uc5ed\ud560\uc774 \uc804\ud600 \ub2e4\ub974\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"forEach"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"\ubc18\ud658 \uac12"),"\uc744 \ubb34\uc2dc\ud55c\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"\ubc18\ud658 \uac12"),"\uc744 \ucc98\ub9ac\ud55c\ub2e4. \uc0c8 \ubc30\uc5f4\uc744 \ub9cc\ub4e0\ub2e4."),(0,o.kt)("p",null,"\ub458\uc774 \ube44\uc2b7\ud574 \ubcf4\uc778\ub2e4\ud574\uc11c \ube44\uad50\ud558\uba74 \uc548\ub41c\ub2e4."),(0,o.kt)("h2",{id:"\uc7ac\uacb0\ub860"},"\uc7ac\uacb0\ub860"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\uc744 \ub0a8\uc6a9\ud558\uc9c0 \ub9d0\uc790\ub294 \ub9d0 \uadf8\ub300\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\uc744 \ub0a8\uc6a9\ud558\uc9c0 \ub9d0\uc790\uc774\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\ub97c \uc0ac\uc6a9\ud574\uc57c \ud560 \ub54c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ub41c\ub2e4. \uc544\ub2c8 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("p",null,"\ub300\uc2e0, ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\ub97c \uc4f8 \ub54c \ud55c \ubc88 \uc0dd\uac01\ud574\ubcf4\ub294 \uac83\uc774\ub2e4."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ub0b4\uac00 \ud558\ub824 \ud558\ub294 \uc77c\uc740 \ubb34\uc5c7\uc778\uac00...?")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uc0c8 \ubc30\uc5f4\uc774 \ud544\uc694\ud55c\uac00? => ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"\uc774\uc5b4\uc57c \ud558\ub294\uac00? \ub2e4\ub978 \uba54\uc11c\ub4dc\ub85c \ud560 \uc218 \uc5c6\ub294\uac00?")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uc0c8 \ubc30\uc5f4\uc774 \ud544\uc694\uc5c6\ub294\uac00? =>"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\ud639\uc2dc \ub2e4\ub978 \uba54\uc11c\ub4dc(",(0,o.kt)("inlineCode",{parentName:"li"},"filter"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"every"),"...)\ub85c \ud560 \uc218 \uc5c6\ub294\uac00?"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"while")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"for")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"forEach")," / ",(0,o.kt)("inlineCode",{parentName:"li"},"for...of"))))),(0,o.kt)("h2",{id:"\uc77d\uc744\uac70\ub9ac"},"\uc77d\uc744\uac70\ub9ac"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/blog/stop-abusing-map"},".map() \ub0a8\uc6a9\uc744 \uba48\ucd94\uc790")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/"},"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce"},"https://qiita.com/diescake/items/70d9b0cbd4e3d5cc6fce")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://betterprogramming.pub/which-is-the-fastest-while-for-foreach-for-of-9022902be15e"},"https://betterprogramming.pub/which-is-the-fastest-while-for-foreach-for-of-9022902be15e")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/38362231/how-to-use-promise-in-foreach-loop-of-array-to-populate-an-object"},"https://stackoverflow.com/questions/38362231/how-to-use-promise-in-foreach-loop-of-array-to-populate-an-object")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop"},"https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azu.github.io/promises-book/"},"https://azu.github.io/promises-book/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map"},"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.map")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.foreach"},"https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.foreach"))))}d.isMDXComponent=!0}}]);