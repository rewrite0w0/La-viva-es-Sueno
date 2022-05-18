"use strict";(self.webpackChunkla_viva_es_sueno=self.webpackChunkla_viva_es_sueno||[]).push([[3295],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(a),k=n,d=s["".concat(i,".").concat(k)]||s[k]||u[k]||o;return a?r.createElement(d,l(l({ref:t},m),{},{components:a})):r.createElement(d,l({ref:t},m))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},7077:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],p={slug:"2022-05-01-flux-and-react",title:"flux\uc640 \uac00\uc0c1 DOM\uc5d0 \ub300\ud574\uc11c",authors:"rewrite0w0",tags:["architecture","react","\uac10\uc0c1"]},i=void 0,c={permalink:"/La-viva-es-Sueno/blog/2022-05-01-flux-and-react",source:"@site/blog/article-list/2022-05-01-flux-and-react.md",title:"flux\uc640 \uac00\uc0c1 DOM\uc5d0 \ub300\ud574\uc11c",description:"React \ub2e4\ub8e8\ub2e4\ubcf4\uba74 Flux\ub97c \ub9cc\ub09c\ub2e4. \uadf8\ub798\uc11c \uc774\uc5d0 \ub300\ud574 \uc870\uc0ac\ud574\ubcf4\uae30\ub85c \ud588\ub2e4.",date:"2022-05-01T00:00:00.000Z",formattedDate:"May 1, 2022",tags:[{label:"architecture",permalink:"/La-viva-es-Sueno/blog/tags/architecture"},{label:"react",permalink:"/La-viva-es-Sueno/blog/tags/react"},{label:"\uac10\uc0c1",permalink:"/La-viva-es-Sueno/blog/tags/\uac10\uc0c1"}],readingTime:14.015,truncated:!1,authors:[{name:"rewrite0w0",title:"JavaScript \uac1c\ubc1c\uc790",url:"https://github.com/rewrite0w0",key:"rewrite0w0"}],frontMatter:{slug:"2022-05-01-flux-and-react",title:"flux\uc640 \uac00\uc0c1 DOM\uc5d0 \ub300\ud574\uc11c",authors:"rewrite0w0",tags:["architecture","react","\uac10\uc0c1"]},prevItem:{title:"\uc2e0\uc785 \ub54c \ubc14\ub85c \uc7a1\uc558\uc73c\uba74 \ud558\ub294 \uac83",permalink:"/La-viva-es-Sueno/blog/2022-05-03-shinjin-no-uchi-koredaka-wa-naoshite-hoshii-koto"},nextItem:{title:"JavaScript \uc9c4\ud654\uc5d0 \ubcc0\ud654\ud560 \ucf54\ub529 \uc2b5\uad00",permalink:"/La-viva-es-Sueno/blog/2022-04-30-How-your-familiar-JavaScript-coding-techniques-will-change-in-the-near-future"}},m={authorsImageUrls:[void 0]},u=[{value:"\uac00\uc0c1 DOM",id:"\uac00\uc0c1-dom",level:2},{value:"DOM",id:"dom",level:3},{value:"Flux",id:"flux",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2},{value:"MVC",id:"mvc",level:3},{value:"Flux",id:"flux-1",level:3},{value:"React\uc640 Flux\uc640 \uac00\uc0c1 DOM",id:"react\uc640-flux\uc640-\uac00\uc0c1-dom",level:2},{value:"React\ub294 \uc65c \uac00\uc0c1 DOM\uc77c\uae4c?",id:"react\ub294-\uc65c-\uac00\uc0c1-dom\uc77c\uae4c",level:3},{value:"\ubc88\uc678: Redux",id:"\ubc88\uc678-redux",level:3},{value:"Flux",id:"flux-2",level:4},{value:"Redux",id:"redux",level:4},{value:"\uc77d\uc744\uac70\ub9ac",id:"\uc77d\uc744\uac70\ub9ac",level:2}],s={toc:u};function k(e){var t=e.components,a=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React \ub2e4\ub8e8\ub2e4\ubcf4\uba74 ",(0,o.kt)("strong",{parentName:"p"},"Flux"),"\ub97c \ub9cc\ub09c\ub2e4. \uadf8\ub798\uc11c \uc774\uc5d0 \ub300\ud574 \uc870\uc0ac\ud574\ubcf4\uae30\ub85c \ud588\ub2e4."),(0,o.kt)("h2",{id:"\uac00\uc0c1-dom"},"\uac00\uc0c1 DOM"),(0,o.kt)("p",null,"\uba3c\uc800 Flux\ub97c \ub9cc\ub098\uae30 \uc804\uc5d0, React\ud558\uba74 \ub5a0\uc624\ub974\ub294 \uce5c\uad6c\uc778 \uac00\uc0c1 DOM\uc744 \ubcf4\uc790."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ko.reactjs.org/docs/faq-internals.html#gatsby-focus-wrapper"},"\uacf5\uc2dd\ubb38\uc11c\uc5d0 \uc758\ud558\uba74")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Virtual DOM (VDOM)\uc740 UI\uc758 \uc774\uc0c1\uc801\uc778 \ub610\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\u201c\uac00\uc0c1\u201d"),"\uc801\uc778 \ud45c\ud604\uc744 ",(0,o.kt)("strong",{parentName:"p"},"\uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5"),"\ud558\uace0 ReactDOM\uacfc \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0 \uc758\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\u201c\uc2e4\uc81c\u201d DOM\uacfc \ub3d9\uae30\ud654"),"\ud558\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uac1c\ub150\uc785\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc744 ",(0,o.kt)("strong",{parentName:"p"},"\uc7ac\uc870\uc815"),"\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\uc774 \uc811\uadfc\ubc29\uc2dd\uc774 React\uc758 ",(0,o.kt)("strong",{parentName:"p"},"\uc120\uc5b8\uc801 API\ub97c \uac00\ub2a5\ud558\uac8c")," \ud569\ub2c8\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"React\uc5d0\uac8c \uc6d0\ud558\ub294 UI\uc758 \uc0c1\ud0dc\ub97c \uc54c\ub824\uc8fc\uba74 DOM\uc774 \uadf8 \uc0c1\ud0dc\uc640 \uc77c\uce58\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4.")," \uc774\ub7ec\ud55c \ubc29\uc2dd\uc740 \uc571 \uad6c\ucd95\uc5d0 \uc0ac\uc6a9\ud574\uc57c \ud558\ub294 \uc5b4\ud2b8\ub9ac\ubdf0\ud2b8 \uc870\uc791, \uc774\ubca4\ud2b8 \ucc98\ub9ac, \uc218\ub3d9 DOM \uc5c5\ub370\uc774\ud2b8\ub97c ",(0,o.kt)("strong",{parentName:"p"},"\ucd94\uc0c1\ud654"),"\ud569\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\u201cvirtual DOM\u201d\uc740 \ud2b9\uc815 \uae30\uc220\uc774\ub77c\uae30\ubcf4\ub2e4\ub294 ",(0,o.kt)("strong",{parentName:"p"},"\ud328\ud134\uc5d0 \uac00\uae5d\uae30 \ub54c\ubb38\uc5d0 \uc0ac\ub78c\ub4e4\ub9c8\ub2e4 \uc758\ubbf8\ud558\ub294 \ubc14\uac00 \ub2e4\ub985\ub2c8\ub2e4.")," React\uc758 \uc138\uacc4\uc5d0\uc11c \u201cvirtual DOM\u201d\uc774\ub77c\ub294 \uc6a9\uc5b4\ub294 \ubcf4\ud1b5 ",(0,o.kt)("strong",{parentName:"p"},"\uc0ac\uc6a9\uc790 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub098\ud0c0\ub0b4\ub294 \uac1d\uccb4"),"\uc774\uae30 \ub54c\ubb38\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"React elements\uc640 \uc5f0\uad00"),"\ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 React\ub294 \ucef4\ud3ec\ub10c\ud2b8 \ud2b8\ub9ac\uc5d0 \ub300\ud55c \ucd94\uac00 \uc815\ubcf4\ub97c \ud3ec\ud568\ud558\uae30 \uc704\ud574 \u201cfibers\u201d\ub77c\ub294 \ub0b4\ubd80 \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub610\ud55c React\uc5d0\uc11c \u201cvirtual DOM\u201d \uad6c\ud604\uc758 \uc77c\ubd80\ub85c \uac04\uc8fc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud55c \ub9c8\ub514\ub85c, DOM\uacfc \ubcc4\uac1c\ub85c \uac00\uc0c1\uc758 \ud45c\ud604\uc744 \ub450\uace0, \uadf8\uac83\uc744 \ucd94\uc0c1\uc801\uc73c\ub85c \uc870\uc791\ud558\uba70 \uc7ac\uc870\uc815\ud558\ub294 \uac83\uc774\ub2e4.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ucd94\uac00: DOM\uc740 \uadf8\ub798\ud504\uc774\ub860\uc5d0\uc11c \uc628 \uac83\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774 \ubcf5\uc7a1\ud574\uc9c0\uace0 \uc870\uc791\uc774 \ub9ce\uc544\uc9c0\uba74 ",(0,o.kt)("strong",{parentName:"p"},"\ud398\uc774\uc9c0 \ub80c\ub354\ub9c1 \uc2dc\uc5d0 \uacc4\uc0b0\ub7c9\uc774 \ud3ed\ubc1c\ud574\uc11c \uc131\ub2a5 \uc800\ud558"),"\uac00 \uc77c\uc5b4\ub09c\ub2e4. \uadf8\ub798\uc11c ",(0,o.kt)("strong",{parentName:"p"},"\ubcc0\uacbd \uc804, \ubcc0\uacbd \ud6c4\ub97c \uac00\uc9c0\uace0 \ucc28\uc774\ub9cc \uac31\uc2e0\ud558\uba74 \uc801\uc740 \uacc4\uc0b0\ub7c9\uc73c\ub85c \ub80c\ub354\ub9c1\ud560 \uc218 \uac00\ub2a5\ud558\ub2e4\ub294 \uc544\uc774\ub514\uc5b4\uc5d0\uc11c \ucd9c\ubc1c"),"\ud55c \uac83\uc73c\ub85c ",(0,o.kt)("strong",{parentName:"p"},"UI\uc758 \uac00\uc0c1\uc801\uc778 \ud45c\ud604\uc744 \uba54\ubaa8\ub9ac\uc5d0 \uc800\uc7a5\ud558\uace0, React\ub97c \ud1b5\ud574 \uc2e4\uc81c DOM\uacfc \ub3d9\uae30\ud654\ud558\ub294 \uac1c\ub150"))),(0,o.kt)("h3",{id:"dom"},"DOM"),(0,o.kt)("p",null,"\uadf8\ub7fc \uc560\ucd08\uc5d0 DOM\uc740 \ubb34\uc5c7\uc77c\uae4c?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction"},"MDN\ub97c \ubcf4\uc790")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ubb38\uc11c \uac1d\uccb4 \ubaa8\ub378(The Document Object Model, \uc774\ud558 DOM) \uc740 ",(0,o.kt)("strong",{parentName:"p"},"HTML, XML \ubb38\uc11c\uc758 \ud504\ub85c\uadf8\ub798\ubc0d interface")," \uc774\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"DOM\uc740 \ubb38\uc11c\uc758 \uad6c\uc870\ud654\ub41c \ud45c\ud604"),"(structured representation)\uc744 \uc81c\uacf5\ud558\uba70 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uac00 DOM \uad6c\uc870\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uc5ec \uadf8\ub4e4\uc774 \ubb38\uc11c \uad6c\uc870, \uc2a4\ud0c0\uc77c, \ub0b4\uc6a9 \ub4f1\uc744 ",(0,o.kt)("strong",{parentName:"p"},"\ubcc0\uacbd"),"\ud560 \uc218 \uc788\uac8c \ub3d5\ub294\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"DOM \uc740 nodes\uc640 objects\ub85c \ubb38\uc11c\ub97c \ud45c\ud604\ud55c\ub2e4.")," \uc774\ub4e4\uc740 \uc6f9 \ud398\uc774\uc9c0\ub97c \uc2a4\ud06c\ub9bd\ud2b8 \ub610\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub4e4\uc5d0\uc11c \uc0ac\uc6a9\ub420 \uc218 \uc788\uac8c \uc5f0\uacb0\uc2dc\ucf1c\uc8fc\ub294 \uc5ed\ud560\uc744 \ub2f4\ub2f9\ud55c\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\uc6f9 \ud398\uc774\uc9c0\ub294 \uc77c\uc885\uc758 \ubb38\uc11c(document)\ub2e4. \uc774 \ubb38\uc11c\ub294 \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub97c \ud1b5\ud574 \uadf8 \ub0b4\uc6a9\uc774 \ud574\uc11d\ub418\uc5b4 \uc6f9 \ube0c\ub77c\uc6b0\uc800 \ud654\uba74\uc5d0 \ub098\ud0c0\ub098\uac70\ub098 HTML \uc18c\uc2a4 \uc790\uccb4\ub85c \ub098\ud0c0\ub098\uae30\ub3c4 \ud55c\ub2e4. \ub3d9\uc77c\ud55c \ubb38\uc11c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ucc98\ub7fc \ub2e4\ub978 \ud615\ud0dc\ub85c \ub098\ud0c0\ub0a0 \uc218 \uc788\ub2e4\ub294 \uc810\uc5d0 \uc8fc\ubaa9\ud560 \ud544\uc694\uac00 \uc788\ub2e4. ",(0,o.kt)("strong",{parentName:"p"},"DOM \uc740 \ub3d9\uc77c\ud55c \ubb38\uc11c\ub97c \ud45c\ud604\ud558\uace0, \uc800\uc7a5\ud558\uace0, \uc870\uc791\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud55c\ub2e4.")," DOM \uc740 ",(0,o.kt)("strong",{parentName:"p"},"\uc6f9 \ud398\uc774\uc9c0\uc758 \uac1d\uccb4 \uc9c0\ud5a5 \ud45c\ud604"),"\uc774\uba70, \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc640 \uac19\uc740 \uc2a4\ud06c\ub9bd\ud305 \uc5b8\uc5b4\ub97c \uc774\uc6a9\ud574 DOM \uc744 \uc218\uc815\ud560 \uc218 \uc788\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud55c \ub9c8\ub514\ub85c, \ud615\uc2dd\uc788\ub294 (\uc6f9)\ubb38\uc11c\ub97c \uc870\uc791\ud558\ub294 \ud45c\ud604\uc774\ub2e4.")),(0,o.kt)("p",null,"\uac00\uc0c1 \ud754\ud788 \uc4f0\ub294 \ubc29\ubc95\uc740 \uc774\ud558\uc640 \uac19\uc774 \ubb34\uc5c7\uc778\uac00 \uc120\ud0dd\ud558\uac70\ub098, \ub9cc\ub4e4\uc5b4\uc11c \uc694\uc18c\ub97c \ud655\uc778/\ucd94\uac00/\ubcc0\uacbd/\uc0ad\uc81c \ub4f1\ub4f1\uc744 \ud558\ub294 \uac83"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const element = document.querySelector('\ubb34\uc5c7\uc778\uac00');\nelement.children;\nconst div = document.createElement('div');\ndiv.textContent = 'test';\n")),(0,o.kt)("h2",{id:"flux"},"Flux"),(0,o.kt)("p",null,"\ub370\uc774\ud130 \ud750\ub984\uc744 \ucc98\ub9ac\ud558\ub294 \ubc29\ubc95\uc774\ub2e4."),(0,o.kt)("p",null,"\ub610\ud55c Facebook\uc774 \ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc774\ub4dc\uc758 Web \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ucd95\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc544\ud0a4\ud14d\ucc98\uc774\ub2e4."),(0,o.kt)("p",null,"\ub2e8\ubc29\ud5a5 \ubaa8\ub378\uc774\uba70, ",(0,o.kt)("inlineCode",{parentName:"p"},"MVC"),"\ub294 \uae08\ubc29 \ubcf5\uc7a1\ud654\ub418\uae30 \ub54c\ubb38\uc5d0 facebook(\ud604 Meta)\ub294 ",(0,o.kt)("a",{parentName:"p",href:"http://www.infoq.com/news/2014/05/facebook-mvc-flux"},(0,o.kt)("inlineCode",{parentName:"a"},"MVC")," \ud328\ud134\uc744 \ubc84\ub9ac\uace0 Flux \ud328\ud134\uc744 \uc120\ud0dd\ud588\ub2e4.")),(0,o.kt)("p",null,"\uc65c \uadf8\ub807\uac8c \ud588\ub294\uac00 ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&time_continue=621&v=nYkdrAPrdcw"},"\uc601\uc0c1"),"\uc5d0\uc11c\ub294 \uc774\ub807\uac8c \uc124\uba85\ud55c\ub2e4. (\ubb3c\ub860 facebook\uc778 MVC\ub97c \uc624\ub3c5\uc744 \ud588\ub2e4\ub294 \uc758\uacac\ub3c4 \uc788\ub2e4.)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"MVC\ub97c \uc791\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \uc801\uc6a9\ud588\uc9c0\ub9cc \uc774\ub7f0 \uc2dd\uc73c\ub85c \ubcf5\uc7a1\ud574\uc84c\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://imgopt.infoq.com/fit-in/1200x2400/filters:quality(80)/filters:no_upscale()/news/2014/05/facebook-mvc-flux/ja/resources/flux-react-mvc.png",alt:"MVC"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc774\ub807\uac8c\ub418\uba74 \ubaa8\ub378\uad00\ub828 \ubdf0\uac00 \ub300\ub7c9\uc73c\ub85c \ucd94\uac00\ub418\uc5b4 \ubcf5\uc7a1\ud654\uac00 \ud3ed\ubc1c\ud588\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\uc774\ub7ec\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ubaa8\ub378\uacfc \ubdf0 \uc0ac\uc774\uc758 \uc30d\ubc29\ud5a5 \ub370\uc774\ud130 \ud750\ub984\uc774 \ub9cc\ub4e4\uc5b4\uc9c8 \uac00\ub2a5\uc131\uc774 \uc788\uc73c\ubbc0\ub85c, \uc774\ud574\ud558\uac70\ub098 \ub514\ubc84\uadf8\uac00 \uc5b4\ub824\uc6cc\uc9c4\ub2e4. \uadf8\ub807\uae30\uc5d0 Flux\uc5d0 \uc758\ud55c \uc124\uacc4\ub97c \ub300\uc548\uc73c\ub85c \uc120\ud0dd\ud588\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://camo.qiitausercontent.com/dfc8fb3817c3f59861ced5659268a27226d01218/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3133343239342f66356133396564642d323462392d656362622d323837332d3330646265623933316533382e706e67",alt:"Flux Basic"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://camo.qiitausercontent.com/c74d7bca36e1b79bcbc5885a231b3854b2902afa/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33393338322f66643533356364332d386462362d303431312d326138652d3739316139626361356631632e706e67",alt:"Flux + Action"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc774 \uadf8\ub9bc\uc5d0\uc11c"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Store"),"\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc73c\uba70,"),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Dispatcher"),"\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"MVC \uadf8\ub9bc\uc758"),"\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller"),"\ub97c \uac08\uc544\ub07c\uc6b0\ubbc0\ub85c \uc5b4\ub5a4 Action\uc774 \uc77c\uc5b4\ub0a0 \ub54c,"),(0,o.kt)("p",{parentName:"blockquote"},"\uc5b4\ub5bb\uac8c ",(0,o.kt)("inlineCode",{parentName:"p"},"Store"),"\ub97c \uac31\uc2e0\ud560\uae4c \uacb0\uc815\ud558\ub294 \uac83\uc774\ub2e4.\nStore\uac00 \ubcc0\uacbd\ub420 \ub54c\ub294 ",(0,o.kt)("inlineCode",{parentName:"p"},"View"),"\ub3c4 \ub3d9\uc2dc\uc5d0 \uac31\uc2e0\ub418\uc5b4 \uadf8\uac83\uacfc \ud568\uaed8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Dispatcher"),"\uac00 \ucc98\ub9ac\ub420 ",(0,o.kt)("inlineCode",{parentName:"p"},"Action"),"\ub97c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub2e4.\n\uc774\ub85c\uc778\ud574 \uc2dc\uc2a4\ud15c\uc758 \ucef4\ud3ec\ub10c\ud2b8 \uc0ac\uc774\uc5d0 \ub2e8\ubc29\ud5a5 \ub370\uc774\ud130\ud750\ub984\ub9cc \uc0dd\uae34\ub2e4\ub294 \ubcf4\uc7a5\ud55c\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\ubcf5\uc218\uc758 Store, View\ub97c \uac16\ub294 \uc2dc\uc2a4\ud15c\ub3c4, \ud558\ub098\uc758 Store, View\ub97c \uac16\uc740 \uc2dc\uc2a4\ud15c \ubaa8\ub450 \uac19\ub2e4 \ubcfc \uc218 \uc788\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\uc65c\ub0d0\uba74 \ub370\uc774\ud130\ub294 \ub2e8\uc77c\ud55c \ubc29\ud5a5\uc73c\ub85c\ub9cc \ud750\ub974\uba70, \uac01 Store, View\uac00 \uc11c\ub85c \uc9c1\uc811 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc774\ub2e4.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Facebook\uc774 \uc9c1\uc811 \ubc1d\ud78c \uc0c1\uc138\ud55c \uc124\uba85\uc744 \ubcf4\uc790.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"dispatcher\ub294 Flux \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubaa8\ub4e0 \ub370\uc774\ud130 \ud750\ub984\uc744 \uad00\ub9ac\ud558\ub294 \uc911\uc559 \ud5c8\ube0c\uc774\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\uc774\ub294 \ubcf8\uc9c8\uc801\uc73c\ub85c\ub294 Store \uc548\uc5d0 \ucf5c\ubc31\uc744 \ub4f1\ub85d\ud558\ub294 \uacf3\uc774\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\uac01 Store\ub294 \uac01 \uc790\uc2e0\uc744 \ub4f1\ub85d\ud55c \uc81c\uacf5\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\uc774 dispatcher\uac00 \uc5b4\ub5a4 \uc561\uc158\uc5d0 \ub300\uc751\ud560 \ub54c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc548\uc5d0 \ubaa8\ub4e0 Store\ub294, \uadf8\uacf3\uc5d0 ",(0,o.kt)("strong",{parentName:"p"},"\ub4f1\ub85d\ub418\uc5b4 \uc788\ub294 \ucf5c\ubc31\uc5d0 \uc758\ud574 \uc561\uc158\uc73c\ub85c\uc778\ud574 \uc0dd\uae34 \ub370\uc774\ud130\ub97c \uc1a1\uc2e0"),"\ud558\ub294 \uac83\uc774\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc131\uc7a5\uc5d0 \ub530\ub77c, \uacb0\uc815\ub41c \uc21c\uc11c\ub85c \ub4f1\ub85d\ub41c \ucf5c\ubc31 \uc2e4\ud589\uc744 \ud558\ubbc0\ub85c, Store \uac04\uc758 \uc758\uc874\uad00\uacc4\ub97c \uad00\ub9ac\ud558\ub294 dispatcher\ub294 \ub354\uc6b1 \ubd88\uac00\uacb0\ud55c \uac83\uc774 \ub41c\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"Store\ub294 \ub2e4\ub978 Store \uac31\uc2e0\uc774 \uc644\ub8cc\ud560 \ub54c\uae4c\uc9c0 \uac16\uc744 \uc218 \uc788\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"\uadf8\ub9ac\uace0 \uadf8 \ud6c4, \uc790\uc2e0\uc744 \uac31\uc2e0\ud55c\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Store\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0c1\ud0dc\uc640 \ub85c\uc9c1\uc744 \ud3ec\ud568\ud55c\ub2e4.")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Store \uc5ed\ud560\uc740 \uace0\uc804\uc801\uc778 MVC\uc5d0 \uc758\ud574 Model\uc758 \uc5ed\ud560\uacfc \ub2ee\uc544\uc788\uc9c0\ub9cc,")),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\uc5ec\ub7ec \uac1d\uccb4 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud574\uc11c, \ud558\ub098\uc758 \uac1d\uccb4 \uc778\uc2a4\ud134\uc2a4\uac00 \uc544\ub2cc \uac83\uc774 \ucc28\uc774\uc774\ub2e4.")),(0,o.kt)("p",{parentName:"blockquote"},"\ub610\ud55c Backbone \ud504\ub808\uc784\uc6cc\ud06c \ucf5c\ub799\uc158\uacfc \uac19\uc9c0\ub294 \uc54a\ub2e4."),(0,o.kt)("p",{parentName:"blockquote"},"ORM \ud615\uc2dd \uac1d\uccb4 \uc9d1\ud569\uc744 \uad00\ub9ac\ud558\ub294 \uac83\ubcf4\ub2e4 \ub2e8\uc21c\ud558\uba70,"),(0,o.kt)("p",{parentName:"blockquote"},"Store\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc548\uc5d0 \ud2b9\uc815 \ub3c4\uba54\uc778\uc5d0 \ub300\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0c1\ud0dc\uad00\ub9ac\ud55c\ub2e4.")),(0,o.kt)("p",null,"\uc77c\ubc18\uc801\uc778 \uc0ac\uc6a9 \uc608\uc81c\ub294 \uc774\ub7ec\ud558\ub2e4"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F150569%2F41f7cd50-765f-7eb6-badf-8e0b5917bb2d.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=95c8d356c2bd4c7303dc2325fda8e1fb",alt:"Flux React Example"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\uc5ec\ub2f4\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"observer")," \ud328\ud134\uc774\ub2e4.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"dispatcher?")," : \uc0ac\uc804\uc801 \uc758\ubbf8 ",(0,o.kt)("em",{parentName:"p"},"\ubc1c\uc1a1\uc790")),(0,o.kt)("p",{parentName:"div"},"dispatcher\ub294 \uc2a4\ud1a0\uc5b4 \uc0ac\uc774 \uc758\uc874\uad00\uacc4\ub97c \uad00\ub9ac\ud558\ub294 \uac83."),(0,o.kt)("p",{parentName:"div"},"Flux\uc5d0\uc11c\ub294 View / Model\uc758 \uc99d\uac00 \ub300\uc2e0\uc5d0 Action\uacfc Store\uac00 \uc99d\uac00\ud55c\ub2e4."),(0,o.kt)("p",{parentName:"div"},"\uadf8\ub7ec\uae30\uc5d0 \ubaa8\ub4e0 \ub370\uc774\ud130 \ucc98\ub9ac\uac00 dispatcher\uc5d0 \uc9d1\uc57d\ub41c\ub2e4."),(0,o.kt)("p",{parentName:"div"},"\ub4f1\ub85d\ub41c \ucf5c\ubc31\ud568\uc218\uc5d0 \ud398\uc774\ub85c\ub4dc\ub97c \ube0c\ub85c\ub4dc\uce90\uc2a4\ud2b8\ud558\uae30 \uc704\ud568."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/flux/blob/main/src/Dispatcher.js"},"dispatcher.js")),(0,o.kt)("p",{parentName:"div"},"dispatcher\ub294 action\uc744 \ubc1b\uc544, dispatcher\uc5d0 \ub4f1\ub85d\ub41c action\ub97c dispatch\ud55c\ub2e4."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"\ubaa8\ub4e0 store\ub294 \ubaa8\ub4e0 action\ub97c \ubc1b\ub294\ub2e4.")),(0,o.kt)("p",{parentName:"div"},"\uac01 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0\ub294 \uc2f1\uae00\ud1a4 dispatcher\uac00 \ud558\ub098\ub9cc \uc874\uc7ac\ud55c\ub2e4."),(0,o.kt)("p",{parentName:"div"},"\uc608\uc2dc:"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\uc720\uc800\uac00 todo\ub97c \uc785\ub825\ud558\uace0 Enter\ub97c \uc785\ub825"),(0,o.kt)("li",{parentName:"ol"},"view\ub294 \uc774 \uc774\ubca4\ud2b8\ub97c \ud3ec\ucc29\ud574\uc11c, todo \uc785\ub825\uc744 \ud3ec\ud568\ud558\ub294 ",(0,o.kt)("inlineCode",{parentName:"li"},"add-todo")," action\ub97c dispatch\ud55c\ub2e4."),(0,o.kt)("li",{parentName:"ol"},"\ubaa8\ub4e0 store\uac00 \uc774 action\uc744 \ubc1b\ub294\ub2e4.")),(0,o.kt)("p",{parentName:"div"},"\uadf8\ub798\uc11c ",(0,o.kt)("strong",{parentName:"p"},"Action\uc5d0 \uc758\ud55c Store \ubcc0\uacbd"),"\uc774\ub77c\ub294 \uc810\uc774 \uba85\ubc31\ud558\uae30 \ub54c\ubb38\uc5d0, Action \uc774\ud6c4 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0c1\ud0dc\uac00 \uc608\uce21\uac00\ub2a5\ud574\uc9c4\ub2e4."),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://qiita.com/knhr__/items/5fec7571dab80e2dcd92"},(0,o.kt)("img",{parentName:"a",src:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.amazonaws.com%2F0%2F134294%2F460f6ff3-fd48-989a-3f30-a52c0b8cdc99.png?ixlib=rb-4.0.0&auto=format&gif-q=60&q=75&w=1400&fit=max&s=141271f511a0df153babb796458bebe5",alt:"flux image"}))),(0,o.kt)("p",{parentName:"div"},"Store\uac00 \uc99d\uac00\ud558\uace0, Store\ub294 \ub2e4\ub978 \uc2a4\ud1a0\uc5b4 \uac31\uc2e0\uc774 \ub05d\ub0a0 \ub54c\uae4c\uc9c0 View\uc5d0 \uc804\ub2ec\ud558\uc9c0 \uc54a\ub294\ub2e4. \ub610\ud55c Store\ub294 \ub2e4\ub978 Store\uc5d0 \uacc4\uce35\uad6c\uc870\uc801\uc73c\ub85c \uc758\uc874\ud55c\ub2e4."),(0,o.kt)("p",{parentName:"div"},"\uadf8\ub798\uc11c Store\ub294 \ub2e4\ub978 Store\uc758 \uc758\uc874\uc5d0 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\ub85c \uc21c\uc218\ud558\uac8c \ub370\uc774\ud130 \uac31\uc2e0\ub9cc \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4."),(0,o.kt)("p",{parentName:"div"},"\ub610\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc804\uccb4 \uad00\uc810\uc73c\ub85c\ub3c4 \ub370\uc774\ud130\ub97c \ub2e4\ub8f0 \ub54c\ub294 Store\ub9cc \uac31\uc2e0\ud558\uba74 \ub41c\ub2e4. Store \uac31\uc2e0\uc740 \ubd80\uc791\uc6a9\uc774 \uc5c6\ub3c4\ub85d \ub370\uc774\ud130\ub97c \uac31\uc2e0\uc744 \ud558\ubbc0\ub85c, \uac19\uc740 \ub370\uc774\ud130\uc778\ub370 \uc5b4\ub290\ucabd\uc740 \uc624\ub798\ub418\uc5c8\uace0, \uc5b4\ub290 \ucabd\uc740 \uc0c8\ub85c\uc6b4 \uc0c1\ud669 \uac19\uc740 \uac83\uc774 \uc0ac\ub77c\uc9c4\ub2e4."),(0,o.kt)("p",{parentName:"div"},"\uc0c8\ub85c\uc6b4 View, Action \ub4f1 \ucf54\ub4dc\ub97c \uc791\uc131\ud574\uc57c\ud558\uc9c0\ub9cc \ubcf5\uc7a1\ud558\uace0 \uc608\uce21 \ubd88\uac00\ub2a5\ud55c \uc0c1\ud669\uc774 \uc77c\uc5b4\ub098\uae30 \uc5b4\ub824\uc6cc\uc9c0\ubbc0\ub85c \ucda9\ubd84\ud788 \uc774\ub4dd\uc774 \uc0c1\ud669\uc774\ub2e4."))),(0,o.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,o.kt)("h3",{id:"mvc"},"MVC"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"C -> (M <-> V)")),(0,o.kt)("h3",{id:"flux-1"},"Flux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Views ---\x3e (actions) ----\x3e Dispatcher ---\x3e (registered callback) ---\x3e Stores -------+\n\u0245                                                                                   |\n|                                                                                   V\n+-- (Controller-Views "change" event handlers) ---- (Stores emit "change" events) --+\n')),(0,o.kt)("p",null,"\uadf8\ub7ec\ub098 Flux\uc640 MVC\ub294 \uc644\uc804\ud788 \ub2e4\ub978 \uac1c\ub150\uc774 \uc544\ub2c8\ub77c, \uc9c0\uae08\uae4c\uc9c0 \uac1c\ub150\uc758 \uc5f0\uc7a5\uc120\uc774\ub2e4."),(0,o.kt)("p",null,"\ub2e8\uc9c0 \ubcf5\uc7a1\ud654\ub418\uae30 \uc26c\uc6b4 \ubd80\ubd84\uc744 \uba85\ud655\ud788 \ud588\uc744 \ubd84\uc774\ub2e4."),(0,o.kt)("h2",{id:"react\uc640-flux\uc640-\uac00\uc0c1-dom"},"React\uc640 Flux\uc640 \uac00\uc0c1 DOM"),(0,o.kt)("h3",{id:"react\ub294-\uc65c-\uac00\uc0c1-dom\uc77c\uae4c"},"React\ub294 \uc65c \uac00\uc0c1 DOM\uc77c\uae4c?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\uc5b4\ub290\uc815\ub3c4\uc758 \uc124\uacc4\uc640 \uc18d\ub3c4 \uc591\ub9bd"),"\uc774 \uac00\ub2a5\ud558\uae30 \ub54c\ubb38."),(0,o.kt)("p",null,"\uc774\ub97c \uc704\ud55c \ubc29\ubc95\uc73c\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"\uc644\uc131\ub41c \uac00\uc0c1 DOM\uc5d0 \uacc4\uc18d Push\ud55c\ub2e4")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://qiita.com/mizchi/items/4d25bc26def1719d52e6#virtual-dom%E3%81%8C%E3%82%82%E3%81%9F%E3%82%89%E3%81%99%E5%8F%A4%E3%81%8F%E3%81%A6%E6%96%B0%E3%81%97%E3%81%84%E8%80%83%E3%81%88%E6%96%B9"},"\uc774 \ubc29\ubc95\uc740 ",(0,o.kt)("inlineCode",{parentName:"a"},"HTTP \ub9ac\ud018\uc2a4\ud2b8 => HTML \ubc18\ud658")," \uc870\uc791\uacfc \uac19\ub2e4(!)")),(0,o.kt)("p",null,"\uc774\ub97c \uc704\ud55c \uc218\ub2e8\uc73c\ub85c \uc120\ud0dd\ud55c \uac83\uc774 Flux\uc774\ub2e4."),(0,o.kt)("p",null,"\uacb0\uad6d Flux\uc640 \uac00\uc0c1 DOM\uc758 \uc870\ud569\uc73c\ub85c \uc778\ud574\uc11c"),(0,o.kt)("p",null,"\uac00\uc0c1 DOM\uc5d0 \uc758\ud574 ",(0,o.kt)("strong",{parentName:"p"},"\ud37c\ud3ec\uba3c\uc2a4\uba74\uc5d0\uc11c \ubb38\uc81c\uc5c6\uc774 \ub298 \uc81c\ub85c\uc5d0\uc11c \uc0c1\ud0dc\ub97c \uad6c\ucd95"),"\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,o.kt)("p",null,"\ub300\uc2e0, \ub370\uc774\ud130 \ubc14\uc778\ub4dc\uc640 \ud37c\ud3ec\uba3c\uc2a4, \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\uc758 \uc0ac\uc815\uc73c\ub85c \uc774\uc804\uc758 HTML\ub97c \ubc84\ub9ac\ub294 \uac83\uc740 \ubd88\uac00\ub2a5\ud588\ub2e4."),(0,o.kt)("p",null,"\uc81c\ub85c\uc5d0\uc11c \uad6c\ucd95\ud574 HTML\ub97c push\ud558\uba74, \ud654\uba74\uc774 \ud55c \ubc88 \uc0ac\ub77c\uc9c0\ub294\ub370\ub2e4\uac00,"),(0,o.kt)("p",null,"\uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec \ucc98\ub9ac\ub97c \ubc18\ub4dc\uc2dc \ud55c \ubc88 \ucc98\ub9ac\ud574\uc57c \ud55c\ub2e4."),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc \uac00\uc0c1 DOM\uc5d0\uc11c\ub294 \uc774\ubca4\ud2b8 \ud578\ub4e4\ub7ec\ub3c4, \ub3d9\uc2dc\uc5d0 \uc801\uc6a9\ub418\uace0 patch\ud560 \ub300\uc0c1\uc774\ubbc0\ub85c \uc2e0\uacbd\uc4f8 \uc77c\uc740 \uc544\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\ubc88\uc678-redux"},"\ubc88\uc678: Redux"),(0,o.kt)("p",null,"Redux\ub294 Flux\uc758 \ud30c\uc0dd\uc774\ub2e4."),(0,o.kt)("p",null,"\ud558\uc9c0\ub9cc \ucc28\uc774\uac00 \uc788\ub2e4."),(0,o.kt)("p",null,"Redux\uc5d0\ub294 3\uc6d0\uce59\uc774 \uc788\uc73c\uba70, ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/understanding/history-and-design/prior-art#flux="},(0,o.kt)("inlineCode",{parentName:"a"},"Dispatcher"),"\ub294 \uc5c6\ub2e4.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/understanding/thinking-in-redux/three-principles"},"3\uc6d0\uce59:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"Single source of truth: \uc2e0\ub8b0\ud560 \uc720\uc77c\ud55c \uc815\ubcf4\ucc98"),(0,o.kt)("li",{parentName:"ul"},"State in read-only: State\ub294 \uc77d\uae30 \uc804\uc6a9"),(0,o.kt)("li",{parentName:"ul"},"Changes are made with pure functions: action\uc774 state\ub97c \ubcc0\uacbd\ud560 \ub54c reducer\ub97c \uc2e4\ud589, reducer\ub294 action\ub294 state\ub97c \ubc1b\uc73c\uba70, \uc0c8\ub85c\uc6b4 state\ub97c \ubc18\ud658\ud558\ub294 \uc21c\uc218\ud55c \ud568\uc218\uc774\ub2e4."))),(0,o.kt)("p",null,"\ub610 State \uac1d\uccb4\ub97c \uc9c1\uc811 \ubcc0\ud658\ud558\uc9c0 \uc54a\uace0 \uc0c8\ub85c\uc6b4 state \uac1d\uccb4\ub85c \uac08\uc544\ub07c\uc6b0\ub294 \ubc29\ubc95\uc744 \ucde8\ud55c\ub2e4."),(0,o.kt)("h4",{id:"flux-2"},"Flux"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://camo.qiitausercontent.com/458d7d52d34c4e3ae7b390af76985292ae1b1b02/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33393338322f32363464633637652d646136352d343766332d643735312d3836626137356135353233372e6a706567",alt:"Flux"})),(0,o.kt)("h4",{id:"redux"},"Redux"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://camo.qiitausercontent.com/50fac8c3a36d87cefc34e41382dd9feebf5e7fe4/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f33393338322f38356530393432392d643966362d303738392d386434332d6364613637643166323037652e6a706567",alt:"Redux"})),(0,o.kt)("h2",{id:"\uc77d\uc744\uac70\ub9ac"},"\uc77d\uc744\uac70\ub9ac"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://facebook.github.io/flux/"},"https://facebook.github.io/flux/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2014/05/06/flux.html"},"https://reactjs.org/blog/2014/05/06/flux.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qiita.com/mizchi/items/4d25bc26def1719d52e6"},"https://qiita.com/mizchi/items/4d25bc26def1719d52e6")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zenn.dev/hanak1a/articles/10206c2a4201521b2abc"},"https://zenn.dev/hanak1a/articles/10206c2a4201521b2abc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.infoq.com/news/2014/05/facebook-mvc-flux/"},"https://www.infoq.com/news/2014/05/facebook-mvc-flux/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://velopert.com/3236"},"https://velopert.com/3236")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ko.reactjs.org/"},"https://ko.reactjs.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/"},"https://developer.mozilla.org/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qiita.com/kouh/items/dfc14d25ccb4e50afe89"},"https://qiita.com/kouh/items/dfc14d25ccb4e50afe89")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://saneyukis.hatenablog.com/entry/2014/09/26/174750"},"https://saneyukis.hatenablog.com/entry/2014/09/26/174750")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qiita.com/Ted-HM/items/7dde25dcffae4cdc7923"},"https://qiita.com/Ted-HM/items/7dde25dcffae4cdc7923")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotobank.jp/word/%E3%83%87%E3%82%A3%E3%82%B9%E3%83%91%E3%83%83%E3%83%81-6089"},"https://kotobank.jp/word/%E3%83%87%E3%82%A3%E3%82%B9%E3%83%91%E3%83%83%E3%83%81-6089")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://e-words.jp/w/%E3%83%87%E3%82%A3%E3%82%B9%E3%83%91%E3%83%83%E3%83%81%E3%83%A3.html"},"https://e-words.jp/w/%E3%83%87%E3%82%A3%E3%82%B9%E3%83%91%E3%83%83%E3%83%81%E3%83%A3.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qiita.com/knhr__/items/5fec7571dab80e2dcd92"},"https://qiita.com/knhr__/items/5fec7571dab80e2dcd92")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hogehuga.com/post-1095/"},"https://hogehuga.com/post-1095/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/"},"https://www.freecodecamp.org/news/an-introduction-to-the-flux-architectural-pattern-674ea74775c9/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zenn.dev/arranzt/articles/01807d1b3d2fc1"},"https://zenn.dev/arranzt/articles/01807d1b3d2fc1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://programmingwithmosh.com/react/react-virtual-dom-explained/"},"https://programmingwithmosh.com/react/react-virtual-dom-explained/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://qiita.com/syossan27/items/7e1b2e07ac68b96bdaa7"},"https://qiita.com/syossan27/items/7e1b2e07ac68b96bdaa7")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://blog.logrocket.com/jotai-vs-recoil-what-are-the-differences/"},"https://blog.logrocket.com/jotai-vs-recoil-what-are-the-differences/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux"},"https://stackoverflow.com/questions/32461229/why-use-redux-over-facebook-flux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2014/07/30/flux-actions-and-the-dispatcher.html"},"https://reactjs.org/blog/2014/07/30/flux-actions-and-the-dispatcher.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebook/flux/tree/db8e97d6ee972f7012edbfd34f2dc6f6e3b85843/examples/flux-concepts"},"https://github.com/facebook/flux/tree/db8e97d6ee972f7012edbfd34f2dc6f6e3b85843/examples/flux-concepts"))))}k.isMDXComponent=!0}}]);