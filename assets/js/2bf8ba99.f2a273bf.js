"use strict";(self.webpackChunkla_viva_es_sueno=self.webpackChunkla_viva_es_sueno||[]).push([[9062],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=s(n),m=r,d=k["".concat(p,".").concat(m)]||k[m]||c[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4148:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"2022-04-28-about-first-class-and-high-order-function",title:"\uc77c\uae09 \uac1d\uccb4\uc640 \uace0\ucc28 \ud568\uc218",authors:"rewrite0w0",tags:["javascript","functional programming","\uac10\uc0c1"]},p=void 0,s={permalink:"/La-viva-es-Sueno/blog/2022-04-28-about-first-class-and-high-order-function",source:"@site/blog/article-list/2022-04-28-about-first-class-and-high-order-function.md",title:"\uc77c\uae09 \uac1d\uccb4\uc640 \uace0\ucc28 \ud568\uc218",description:"\uc77c\uae09 \uac1d\uccb4\uc640 \uace0\ucc28 \ud568\uc218\ub294 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc5b8\uae09\ud560 \ub54c \uaf2d \ub4e4\uc5b4\uac00\ub294 \ud56d\ubaa9\uc774\ub2e4",date:"2022-04-28T00:00:00.000Z",formattedDate:"April 28, 2022",tags:[{label:"javascript",permalink:"/La-viva-es-Sueno/blog/tags/javascript"},{label:"functional programming",permalink:"/La-viva-es-Sueno/blog/tags/functional-programming"},{label:"\uac10\uc0c1",permalink:"/La-viva-es-Sueno/blog/tags/\uac10\uc0c1"}],readingTime:7.215,truncated:!1,authors:[{name:"rewrite0w0",title:"JavaScript \uac1c\ubc1c\uc790",url:"https://github.com/rewrite0w0",key:"rewrite0w0"}],frontMatter:{slug:"2022-04-28-about-first-class-and-high-order-function",title:"\uc77c\uae09 \uac1d\uccb4\uc640 \uace0\ucc28 \ud568\uc218",authors:"rewrite0w0",tags:["javascript","functional programming","\uac10\uc0c1"]},prevItem:{title:"JavaScript \uc9c4\ud654\uc5d0 \ubcc0\ud654\ud560 \ucf54\ub529 \uc2b5\uad00",permalink:"/La-viva-es-Sueno/blog/2022-04-30-How-your-familiar-JavaScript-coding-techniques-will-change-in-the-near-future"},nextItem:{title:".map() \ub0a8\uc6a9\uc744 \uba48\ucd94\uc790 \ubcf4\ucda9",permalink:"/La-viva-es-Sueno/blog/2022-04-28-supplementary-lessons-about-map"}},u={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"\uc815\uc758",id:"\uc815\uc758",level:2},{value:"\uc77c\uae09 \ud568\uc218",id:"\uc77c\uae09-\ud568\uc218",level:3},{value:"MDN",id:"mdn",level:4},{value:"\ud55c\uad6d\uc5b4 \uc704\ud0a4",id:"\ud55c\uad6d\uc5b4-\uc704\ud0a4",level:4},{value:"\uc77c\ubcf8\uc5b4 \uc704\ud0a4",id:"\uc77c\ubcf8\uc5b4-\uc704\ud0a4",level:4},{value:"\uc77c\uae09 \uac1d\uccb4",id:"\uc77c\uae09-\uac1d\uccb4",level:3},{value:"\uc77c\ubcf8\uc5b4 \uc704\ud0a4",id:"\uc77c\ubcf8\uc5b4-\uc704\ud0a4-1",level:4},{value:"\uace0\ucc28 \ud568\uc218",id:"\uace0\ucc28-\ud568\uc218",level:3},{value:"MDN",id:"mdn-1",level:4},{value:"\ud55c\uad6d\uc5b4 \uc704\ud0a4",id:"\ud55c\uad6d\uc5b4-\uc704\ud0a4-1",level:4},{value:"\ud568\uc218\ud615 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8",id:"\ud568\uc218\ud615-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8",level:4},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"\uac19\uc774\ubcf4\uae30",id:"\uac19\uc774\ubcf4\uae30",level:2}],k={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\uc77c\uae09 \uac1d\uccb4\uc640 \uace0\ucc28 \ud568\uc218\ub294 \ud568\uc218\ud615 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc5b8\uae09\ud560 \ub54c \uaf2d \ub4e4\uc5b4\uac00\ub294 \ud56d\ubaa9\uc774\ub2e4"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\ubaa8\ud638\ud558\uac8c \uace0\ucc28 \ud568\uc218\ub294 \ud568\uc218\ub97c \ubc1b\ub294 \ud568\uc218, \uc77c\uae09 \uac1d\uccb4\ub294 \ud568\uc218\ub3c4 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc5d0\uc11c\ub294 \ubaa8\ub4e0 \uac83\uc774 \uac1d\uccb4\ub85c \ub2e4\ub904\uc9c0\ubbc0\ub85c \uc774\ub97c \uc77c\uae09 \uac1d\uccb4\ub77c \ud55c\ub2e4.")),(0,i.kt)("p",null,"\uc774\ub7f0 \uc2dd\uc73c\ub85c \ubaa8\ud638\ud558\uac8c \uc54c\uace0 \uc788\uc5c8\ub294\ub370, \uc774\ubc88\uc5d0 \uae30\ud68c\uac00 \uc0dd\uacbc\uc73c\ub2c8 \uc54c\uc544\ubcf4\ub824 \ud55c\ub2e4."),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"\uc77c\uae09\uac1d\uccb4\ub294 \ud568\uc218\ub97c \ubcc0\uc218/\uac12\uc73c\ub85c \ub2e4\ub8f0 \uc218 \uc788\uc5b4 \ubcc0\uc218\uc5d0 \ub300\uc785\ud558\uac70\ub098, \uc778\uc218\ub85c \ub118\uae30\uac70\ub098, \ub2e4\ub978 \ud568\uc218 \ubc18\ud658\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),"\uacfc \uac19\uc740 \uace0\ucc28\ud568\uc218\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("h2",{id:"\uc815\uc758"},"\uc815\uc758"),(0,i.kt)("h3",{id:"\uc77c\uae09-\ud568\uc218"},"\uc77c\uae09 \ud568\uc218"),(0,i.kt)("h4",{id:"mdn"},"MDN"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud568\uc218\ub97c \ub2e4\ub978 \ubcc0\uc218\uc640 \ub3d9\uc77c\ud558\uac8c \ub2e4\ub8e8\ub294 \uc5b8\uc5b4\ub294 \uc77c\uae09 \ud568\uc218\ub97c \uac00\uc84c\ub2e4\uace0 \ud45c\ud604\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc77c\uae09 \ud568\uc218\ub97c \uac00\uc9c4 \uc5b8\uc5b4\uc5d0\uc11c\ub294 \ud568\uc218\ub97c \ub2e4\ub978 \ud568\uc218\uc5d0 \uc778\uc218\ub85c \uc81c\uacf5\ud558\uac70\ub098, \ud568\uc218\uac00 \ud568\uc218\ub97c \ubc18\ud658\ud560 \uc218 \uc788\uc73c\uba70, \ubcc0\uc218\uc5d0\ub3c4 \ud560\ub2f9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h4",{id:"\ud55c\uad6d\uc5b4-\uc704\ud0a4"},"\ud55c\uad6d\uc5b4 \uc704\ud0a4"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ucef4\ud4e8\ud130 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4 \ub514\uc790\uc778\uc5d0\uc11c, \uc77c\uae09 \uac1d\uccb4(\uc601\uc5b4: first-class object)\ub780 \ub2e4\ub978 \uac1d\uccb4\ub4e4\uc5d0 \uc77c\ubc18\uc801\uc73c\ub85c \uc801\uc6a9 \uac00\ub2a5\ud55c \uc5f0\uc0b0\uc744 \ubaa8\ub450 \uc9c0\uc6d0\ud558\ub294 \uac1d\uccb4\ub97c \uac00\ub9ac\ud0a8\ub2e4. \ubcf4\ud1b5 \ud568\uc218\uc5d0 \uc778\uc790\ub85c \ub118\uae30\uae30, \uc218\uc815\ud558\uae30, \ubcc0\uc218\uc5d0 \ub300\uc785\ud558\uae30\uc640 \uac19\uc740 \uc5f0\uc0b0\uc744 \uc9c0\uc6d0\ud560 \ub54c \uc77c\uae09 \uac1d\uccb4\ub77c\uace0 \ud55c\ub2e4.")),(0,i.kt)("h4",{id:"\uc77c\ubcf8\uc5b4-\uc704\ud0a4"},"\uc77c\ubcf8\uc5b4 \uc704\ud0a4"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud568\uc218\ub97c \uc77c\uae09 \uac1d\uccb4\ub85c \ub2e4\ub8e8\ub294 \uc5b8\uc5b4\uc758 \uc131\uc9c8, \ub610\ub294 \uadf8\ub7ec\ud55c \ud568\uc218."),(0,i.kt)("p",{parentName:"blockquote"},"\uc774 \ub54c \ud568\uc218\ub294 \ud0c0\uc785\uc774 \ud568\uc218\uac70\ub098 \ud568\uc218 \uc624\ube0c\uc81d\ud2b8\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4."),(0,i.kt)("p",{parentName:"blockquote"},"\uad6c\uccb4\uc801\uc73c\ub85c\ub294 \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589\ud560 \ub54c \uc0dd\uc131\ub418\uba70, \uc790\ub8cc\uad6c\uc870\uc5d0 \ud3ec\ud568\uc2dc\ud0ac \uc218 \uc788\uc73c\uba70, \ub2e4\ub978 \ud568\uc218\uc758 \uc778\uc218\ub85c \uc804\ub2ec\ub418\uac70\ub098 \ubc18\ud658\uac12\uc73c\ub85c \ubc18\ud658\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud55c \ud568\uc218\uc774\ub2e4."),(0,i.kt)("p",{parentName:"blockquote"},"\uc774 \uac1c\ub150\uc740 \uba54\ud0c0\ud504\ub85c\uadf8\ub798\ubc0d\uacfc \ub2ec\ub9ac \ucef4\ud30c\uc77c\ub7ec \ud638\ucd9c\uc774\ub098 eval \ud568\uc218\uc5d0 \uc758\ud574 \uc0dd\uc131\ub418\ub294 \ud568\uc218\ub294 \ud3ec\ud568\ud558\uc9c0 \uc54a\ub294\ub2e4. (\uc775\uba85\ud568\uc218 \ucc38\uc870)"),(0,i.kt)("p",{parentName:"blockquote"},"\uc77c\uae09 \uac1d\uccb4\ub294 \ud568\uc218\ud615 \uc5b8\uc5b4\uc5d0 \ud544\uc218\ubd88\uac00\uacb0\ud55c \uac83\uc73c\ub85c \uace0\ucc28\ud568\uc218 \uac19\uc740 \ud615\ud0dc\ub85c \uc0ac\uc6a9\ub41c\ub2e4."),(0,i.kt)("p",{parentName:"blockquote"},"\uc608\ub97c \ub4e4\uba74 \ud568\uc218\uc640 \ub9ac\uc2a4\ud2b8\ub97c \uc778\uc218\ub85c \ubc1b\uc544 \ub9ac\uc2a4\ud2b8 \uac01 \uc694\uc18c\uc5d0 \ud568\uc218\ub97c \uc801\uc6a9\ud55c \uacb0\uacfc\ub97c \ubc18\ud658\ud558\ub294 map \ud568\uc218\ub97c \ub4e4 \uc218 \uc788\ub2e4."),(0,i.kt)("p",{parentName:"blockquote"},"map\ud568\uc218\ub97c \uc9c0\uc6d0\ud558\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\ub294 \uc5b4\ub5a0\ud55c \ud615\ud0dc\ub85c \ud568\uc218\ub97c \ud568\uc218 \uc778\uc218\ub85c \uc804\ub2ec\ud560 \uc218 \uc788\ub3c4\ub85d \ud574\uc57c\ud55c\ub2e4.")),(0,i.kt)("h3",{id:"\uc77c\uae09-\uac1d\uccb4"},"\uc77c\uae09 \uac1d\uccb4"),(0,i.kt)("h4",{id:"\uc77c\ubcf8\uc5b4-\uc704\ud0a4-1"},"\uc77c\ubcf8\uc5b4 \uc704\ud0a4"),(0,i.kt)("p",null,"\uc77c\uae09\uac1d\uccb4\ub294 \uc0dd\uc131, \ub300\uc785, \uc5f0\uc0b0, \uc778\uc218/\ubc18\ud658 \uac12\uc73c\ub85c \ub2e4\ub8f0 \uc788\ub294 \ub4f1\uc758 \uc870\uc791\uc744 \uc81c\ud55c\uc5c6\uc774 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uac1d\uccb4\ub97c \uc9c0\uce6d"),(0,i.kt)("p",null,"\uc989, \ud568\uc218\ub3c4 ",(0,i.kt)("strong",{parentName:"p"},"\uac1d\uccb4(\uc77c\uae09 \uac1d\uccb4)"),"\uc774\uba70, \uc774\ub97c ",(0,i.kt)("strong",{parentName:"p"},"\uac12"),"\ucc98\ub7fc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uac83"),(0,i.kt)("h3",{id:"\uace0\ucc28-\ud568\uc218"},"\uace0\ucc28 \ud568\uc218"),(0,i.kt)("h4",{id:"mdn-1"},"MDN"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud568\uc218\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c \uace0\ucc28 \ud568\uc218\ub77c\uace0 \ubd80\ub985\ub2c8\ub2e4.")),(0,i.kt)("h4",{id:"\ud55c\uad6d\uc5b4-\uc704\ud0a4-1"},"\ud55c\uad6d\uc5b4 \uc704\ud0a4"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uace0\ucc28 \ud568\uc218(\u9ad8\u6b21\u51fd\u6578, higher-order function)\ub294 \uc218\ud559\uacfc \ucef4\ud4e8\ud130 \uacfc\ud559\uc5d0\uc11c \uc801\uc5b4\ub3c4 \ub2e4\uc74c \uc911 \ud558\ub098\ub97c \uc218\ud589\ud558\ub294 \ud568\uc218\uc774\ub2e4."),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ud558\ub098 \uc774\uc0c1\uc758 \ud568\uc218\ub97c \uc778\uc218\ub85c \ucde8\ud55c\ub2e4. (\uc608: \uc808\ucc28\uc801 \ub9e4\uac1c\ubcc0\uc218)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\ud568\uc218\ub97c \uacb0\uacfc\ub85c \ubc18\ud658\ud55c\ub2e4."))),(0,i.kt)("p",{parentName:"blockquote"},"\ub2e4\ub978 \ubaa8\ub4e0 \ud568\uc218\ub4e4\uc740 \uc77c\ucc28(first order) \ud568\uc218\uc774\ub2e4.")),(0,i.kt)("h4",{id:"\ud568\uc218\ud615-\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8"},"\ud568\uc218\ud615 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8"),(0,i.kt)("p",null,"\ud55c\uad6d\uc5b4 \ubc88\uc5ed\ubcf8"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"JS\uc758 \ud568\uc218\ub294 \uc77c\uae09 + \uace0\ucc28\uc5ec\uc11c \uc5ec\ub290 \uac12\uc774\ub098 \ub2e4\ub984\uc5c6\ub2e4.\n\uc989, \uc790\uc2e0\uc774 \ubc1b\uc740 \uc785\ub825 \uac12\uc744 \uae30\ubc18\uc73c\ub85c \uc815\uc758\ub41c \uc5b8\uc81c\uac00\ub294 \uc2e4\ud589\ub420 \uac12\uc5d0 \uc9c0\ub098\uc9c0 \uc54a\ub2e4.")),(0,i.kt)("p",null,"\uc6d0\uc11c"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Because functions are first-class and higher-order, JavaScript functions can behave as values, which implies that a function is nothing more than a yet-to-be-executed value defined immutably based on the input provided to the function."),(0,i.kt)("p",{parentName:"blockquote"},"(\ud568\uc218\ub294 \uc77c\uae09, \uace0\uacc4\uc774\uae30 \ub54c\ubb38\uc5d0 JavaScript \ud568\uc218\ub294 \uac12\uc73c\ub85c \ub3d9\uc791\ud560 \uc218 \uc788\uc73c\uba70, \uc774\ub294 \ud568\uc218\uac00 \ud568\uc218\uc5d0 \uc81c\uacf5\ub41c \uc785\ub825\uc5d0 \ub530\ub77c \ubd88\ubcc0\uc801\uc73c\ub85c \uc815\uc758\ub41c \uc544\uc9c1 \uc2e4\ud589\ub418\uc9c0 \uc54a\uc740 \uac12\uc5d0 \uc9c0\ub098\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4.)"),(0,i.kt)("p",{parentName:"blockquote"},'\ubb38\ub9e5\uc0c1 \uc5ec\ub290 \uac12 \ubd80\ubd84\uc740 "\ud568\uc218\ub294 \uc77c\uae09\uc774\uc790 \uace0\ucc28\uc774\uae30\uc5d0 JS\uc5d0\uc11c \ud568\uc218\ub294 \uac12\uc73c\ub85c \ub3d9\uc791\ud55c\ub2e4."\ub85c \ubd10\ub3c4 \ub420 \ub4ef')),(0,i.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,i.kt)("p",null,"\uc77c\uae09 \ud568\uc218(\uc77c\uae09 \uac1d\uccb4\ub294) \ud568\uc218\ub97c \ubcc0\uc218/\uac12\uc73c\ub85c \ub2e4\ub8f0 \uc218 \uc788\ub294 \uac83\uc774\ub2e4."),(0,i.kt)("p",null,"\ud568\uc218\ub294 \ubcc0\uc218\uc5d0 \ub300\uc785\ud560 \uc218\ub3c4, \uc778\uc218\ub85c \ub118\uae38 \uc218\ub3c4, \ub2e4\ub978 \ud568\uc218\uc5d0\uc11c \ubc18\ud658\ud560 \uc218\ub3c4 \uc788\ub2e4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const square = function (x) {\n  return x * x;\n};\n\nconst square = (x) => x * x;\n\nconst obj = {\n  square: (x) => x * x,\n};\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log(square(10)); // 100\nconsole.log(square); // \ud568\uc218\nconsole.log(obj.square(10)); // 100\nconsole.log(obj.square); // \ud568\uc218\n\n// \ud568\uc218\uac1d\uccb4\uc640 \ud568\uc218 \ubc18\ud658 \uac12 \ucd9c\ub825 \uac00\ub2a5\n")),(0,i.kt)("p",null,"\uace0\ucc28\ud568\uc218\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach")," \ub4f1 \ucc98\ub7fc \ud568\uc218\ub97c \uc778\uc218\ub85c \ubc1b\uc744 \uc218 \uc788\ub294 \ud568\uc218"),(0,i.kt)("p",null,"\uc778\uc218\ub85c \ub2e4\ub978 \ud568\uc218\ub97c \ubc1b\uac70\ub098, \uc0c8\ub85c\uc6b4 \ud568\uc218\ub97c \ubc18\ud658\ud558\uac70\ub098, \ub458 \ub2e4 \ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"\uace0\uacc4\ud568\uc218\ub294 \uc77c\uae09\uac1d\uccb4\uac00 \uc788\uae30\uc5d0 \uac00\ub2a5\ud558\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [1, 2, 3, 4, 5];\nconst square = (x) => x * x;\n\nconst newArr = arr.map((x) => square(x));\nconsole.log(newArr);\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uc5ec\ub2f4\uc73c\ub85c \ucf5c\ubc31\ud568\uc218\ub294 \uace0\ucc28\ud568\uc218\uc5d0 ",(0,i.kt)("strong",{parentName:"p"},"\uc778\uc218\ub85c \ub4e4\uc5b4\uac00\ub294 \ud568\uc218")),(0,i.kt)("p",{parentName:"blockquote"},"\ubc18\ub300\ub85c \uace0\ucc28\ud568\uc218\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\ucf5c\ubc31\ud568\uc218\ub97c \uc778\uc218\ub85c \ubc1b\ub294 \ud568\uc218"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function \uace0\ucc28\ud568\uc218(\ucf5c\ubc31\ud568\uc218) {\n  \ucf5c\ubc31\ud568\uc218();\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\uc77c\uae09\uac1d\uccb4\ub294 \ud568\uc218\ub97c \ubcc0\uc218/\uac12\uc73c\ub85c \ub2e4\ub8f0 \uc218 \uc788\uc5b4 \ubcc0\uc218\uc5d0 \ub300\uc785\ud558\uac70\ub098, \uc778\uc218\ub85c \ub118\uae30\uac70\ub098, \ub2e4\ub978 \ud568\uc218 \ubc18\ud658\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"map"),"\uacfc \uac19\uc740 \uace0\ucc28\ud568\uc218\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."))),(0,i.kt)("h2",{id:"\uac19\uc774\ubcf4\uae30"},"\uac19\uc774\ubcf4\uae30"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=131767959"},"\ud568\uc218\ud615 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/ko/docs/Glossary/First-class_Function"},"https://developer.mozilla.org/ko/docs/Glossary/First-class_Function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://javascript.info/"},"https://javascript.info/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://jsprimer.net/intro/"},"https://jsprimer.net/intro/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Higher-order_function"},"https://en.wikipedia.org/wiki/Higher-order_function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/First-class_function"},"https://en.wikipedia.org/wiki/First-class_function")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/First-class_citizen"},"https://en.wikipedia.org/wiki/First-class_citizen")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E9%96%A2%E6%95%B0"},"https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E9%96%A2%E6%95%B0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88"},"https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ja.wikipedia.org/wiki/%E9%AB%98%E9%9A%8E%E9%96%A2%E6%95%B0"},"https://ja.wikipedia.org/wiki/%E9%AB%98%E9%9A%8E%E9%96%A2%E6%95%B0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88"},"https://ja.wikipedia.org/wiki/%E7%AC%AC%E4%B8%80%E7%B4%9A%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/difference-between-first-class-and-higher-order-functions-in-javascript/"},"https://www.geeksforgeeks.org/difference-between-first-class-and-higher-order-functions-in-javascript/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zenn.dev/nekoniki/articles/5b7980fac91048775931"},"https://zenn.dev/nekoniki/articles/5b7980fac91048775931")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.frontendinterviewhandbook.com/kr/javascript-questions/#%EA%B3%A0%EC%B0%A8-%ED%95%A8%EC%88%98higher-order-function%EC%9D%98-%EC%A0%95%EC%9D%98%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94="},"https://www.frontendinterviewhandbook.com/kr/javascript-questions/#%EA%B3%A0%EC%B0%A8-%ED%95%A8%EC%88%98higher-order-function%EC%9D%98-%EC%A0%95%EC%9D%98%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94="))))}m.isMDXComponent=!0}}]);