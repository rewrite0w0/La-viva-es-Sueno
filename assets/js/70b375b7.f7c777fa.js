"use strict";(self.webpackChunkla_viva_es_sueno=self.webpackChunkla_viva_es_sueno||[]).push([[695],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,v=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(v,r(r({ref:t},s),{},{components:n})):a.createElement(v,r({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6637:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],o={slug:"2022-05-06-atomic-design-wo-wakkata-tsumori-ni-naru",title:"Atomic Design \uc544\ub294 \ucc99\ud558\uae30",authors:"rewrite0w0",tags:["design","architecture","\ubc88\uc5ed"]},p=void 0,c={permalink:"/La-viva-es-Sueno/blog/2022-05-06-atomic-design-wo-wakkata-tsumori-ni-naru",source:"@site/blog/translate-list/2022-05-06-atomic-design-wo-wakkata-tsumori-ni-naru.md",title:"Atomic Design \uc544\ub294 \ucc99\ud558\uae30",description:"\uae00",date:"2022-05-06T00:00:00.000Z",formattedDate:"May 6, 2022",tags:[{label:"design",permalink:"/La-viva-es-Sueno/blog/tags/design"},{label:"architecture",permalink:"/La-viva-es-Sueno/blog/tags/architecture"},{label:"\ubc88\uc5ed",permalink:"/La-viva-es-Sueno/blog/tags/\ubc88\uc5ed"}],readingTime:10.295,truncated:!1,authors:[{name:"rewrite0w0",title:"JavaScript \uac1c\ubc1c\uc790",url:"https://github.com/rewrite0w0",key:"rewrite0w0"}],frontMatter:{slug:"2022-05-06-atomic-design-wo-wakkata-tsumori-ni-naru",title:"Atomic Design \uc544\ub294 \ucc99\ud558\uae30",authors:"rewrite0w0",tags:["design","architecture","\ubc88\uc5ed"]},prevItem:{title:"\uc5d8\ub4e0 \ub9c1\uc5d0\uc11c \ubc30\uc6b0\ub294 \ud504\ub85c\uadf8\ub798\ubc0d \ud559\uc2b5\uc5d0 \ud544\uc694\ud55c 7\uac00\uc9c0",permalink:"/La-viva-es-Sueno/blog/2022-05-07-elden-ring-kara-mananda-programming"},nextItem:{title:"\ub2f9\uc2e0\uc758 web \uc11c\ube44\uc2a4 \ucde8\uc57d\uc131\uc744 \ubc1c\uacac\uc790\uc5d0\uac8c \ub4e3\uae30\uc704\ud55c \ubc29\ubc95 - RFC9116",permalink:"/La-viva-es-Sueno/blog/2022-05-05-anata-no-web-service-no-zeijakusei-wo-hakkensha-kara-oshiete-morau-houhou-rfc9116"}},s={authorsImageUrls:[void 0]},m=[{value:"Atomic Design?",id:"atomic-design",level:2},{value:"\ud30c\uce20 \ucd5c\uc18c\ub2e8\uc704\ub85c \ub514\uc790\uc778\ud55c\ub2e4",id:"\ud30c\uce20-\ucd5c\uc18c\ub2e8\uc704\ub85c-\ub514\uc790\uc778\ud55c\ub2e4",level:2},{value:"\uc5d4\uc9c0\ub2c8\uc5b4 \uc791\uc5c5 \ubc11\uc900\ube44\uac00 \uac00\ub2a5",id:"\uc5d4\uc9c0\ub2c8\uc5b4-\uc791\uc5c5-\ubc11\uc900\ube44\uac00-\uac00\ub2a5",level:2},{value:"Atomic Design\uc73c\ub85c \ub9cc\ub4e4\uc5b4\ubcf4\uae30",id:"atomic-design\uc73c\ub85c-\ub9cc\ub4e4\uc5b4\ubcf4\uae30",level:2},{value:"\uc6d0\uc790(Lv1)",id:"\uc6d0\uc790lv1",level:2},{value:"\ubd84\uc790(Lv2)",id:"\ubd84\uc790lv2",level:2},{value:"\uc0dd\uccb4(Lv3)",id:"\uc0dd\uccb4lv3",level:2},{value:"\ud15c\ud50c\ub9bf(Lv4)",id:"\ud15c\ud50c\ub9bflv4",level:2},{value:"\ud398\uc774\uc9c0(Lv5)",id:"\ud398\uc774\uc9c0lv5",level:2},{value:"Atomic Design \uac10\uc0c1",id:"atomic-design-\uac10\uc0c1",level:2},{value:"\ud2b9\ud788 \uad1c\ucc2e\ub2e4 \ub290\ub080\uc810",id:"\ud2b9\ud788-\uad1c\ucc2e\ub2e4-\ub290\ub080\uc810",level:2},{value:"\uac71\uc815, \uc2e4\uc81c\ub85c \uc6b4\uc6a9\ub420 \ub54c\ub97c \uc0dd\uac01\ud558\uc790",id:"\uac71\uc815-\uc2e4\uc81c\ub85c-\uc6b4\uc6a9\ub420-\ub54c\ub97c-\uc0dd\uac01\ud558\uc790",level:2},{value:"Atomic Design \ucc38\uace0\uc790\ub8cc",id:"atomic-design-\ucc38\uace0\uc790\ub8cc",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}],u={toc:m};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://design.dena.com/design/atomic-design-%E3%82%92%E5%88%86%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A4%E3%82%82%E3%82%8A%E3%81%AB%E3%81%AA%E3%82%8B"},"\uae00"))),(0,l.kt)("p",null,"Atomic Design\uc774\ub77c\ub294 \ub9d0\uc744 \uc885\uc885 \ub4e3\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc2e4\uc81c\ub85c \uc57d\uac04\uc758 \uccb4\ud5d8\uc744 \ud558\uba74\uc11c Atomic Design\uc5d0 \ub300\ud574 \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"atomic-design"},"Atomic Design?"),(0,l.kt)("p",null,"\ud30c\uce20/\ucef4\ud3ec\ub10c\ud2b8 \ub2e8\uc704\ub85c \uc815\uc758\ud558\ub294 UI \ub514\uc790\uc778 \uc218\ubc95\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub208\uc5ec\uaca8\ubd10\uc57c \ud560 \uac83\uc740 \ud504\ub860\ud2b8 \uc5d4\uc9c0\ub2c8\uc5b4 \ub300\ubd80\ubd84\uc774 \ub9cc\ubcd1\ud1b5\uce58\uc57d\uc774\ub77c \uc5ec\uae30\ub294 \uc5ec\ub860\uc774 \ub192\uc544\uc9c4\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ud30c\uce20-\ucd5c\uc18c\ub2e8\uc704\ub85c-\ub514\uc790\uc778\ud55c\ub2e4"},"\ud30c\uce20 \ucd5c\uc18c\ub2e8\uc704\ub85c \ub514\uc790\uc778\ud55c\ub2e4"),(0,l.kt)("p",null,'\ucd5c\uc18c \ub2e8\uc704 "\uc6d0\uc790"(Lv1)\ubd80\ud130 \ub514\uc790\uc778\ud558\uba70 "\ubd84\uc790"(Lv2), "\uc0dd\uccb4"(Lv3), "\ud15c\ud50c\ub9bf"(Lv4), "\ud398\uc774\uc9c0"(Lv5) \uc21c\uc73c\ub85c \ub514\uc790\uc778 \uc791\uc5c5\uc744 \ud569\uc758, \uc9c4\ud589\ud558\ub294 \uac83\uc785\ub2c8\ub2e4.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://design.dena.com/_next/static/images/figures-1200-36427287dbc1e4481d9a2bd2a15d9159.png",alt:"atomic revolution"})),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},'Atomic Design\uc740 "\uc6d0\uc790", "\ubd84\uc790" \uac19\uc774 \ud654\ud559\uc6a9\uc5b4\ub85c \uc815\uc758\ub418\uc5b4 \uc788\uc5b4 \uc774\ud574\uac00 \uc57d\uac04 \uc774\uc0c1\ud558\ub2e4 \ub290\ub07c\ubbc0\ub85c \uae00\uc5d0\uc11c\ub294 (Lv1) \uac19\uc774 \ub808\ubca8 \ud45c\ud604\uc744 \ub367\ubd99\uc600\uc2b5\ub2c8\ub2e4.'))),(0,l.kt)("h2",{id:"\uc5d4\uc9c0\ub2c8\uc5b4-\uc791\uc5c5-\ubc11\uc900\ube44\uac00-\uac00\ub2a5"},"\uc5d4\uc9c0\ub2c8\uc5b4 \uc791\uc5c5 \ubc11\uc900\ube44\uac00 \uac00\ub2a5"),(0,l.kt)("p",null,"\ud15c\ud50c\ub9bf(Lv4) \ud639\uc740 \uc0dd\uccb4(Lv3) \ub2e8\uacc4\uc5d0 \ub4e4\uc5b4\uac00\uba74 \uc6d0\uc790/\ubd84\uc790(Lv 1,2) \uc2a4\ud0c0\uc77c(\ud30c\uce20\uc758 \ucd5c\uc18c\ub2e8\uc704)\uac00 \ud300\uc5d0 \uacf5\uc720, \ud569\uc758\ub418\uc5c8\ub2e4\ub294 \uc18c\ub9ac\uc774\ubbc0\ub85c \uc5d4\uc9c0\ub2c8\uc5b4\uac00 \uc790\uc720\ub86d\uac8c \uc313\uc544 \uc62c\ub9ac\uba70 \ube60\ub974\uac8c UI \uac1c\ubc1c, \uac80\uc99d\uc774 \ud589\ud574\uc9c4\ub2e4\ub294 \uae30\ub300\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,'\uba3c\uc800 Twitter Bootstrap\ub97c \ub9cc\ub4e4\uc5b4, \uadf8\uac83\uc73c\ub85c \ub514\uc790\uc778\ud55c\ub2e4. \uc774\ub7f0 \ub290\ub08c\uc5d0 \uac00\uae4c\uc6cc "\ub514\uc790\uc778 \ubc11\uadf8\ub9bc(Design Comprehensive Layout)\uc73c\ub85c \uc2a4\ud0c0\uc77c \uac00\uc774\ub4dc\ub97c \ud55c\ub2e4" \uc21c\uc11c\ub97c \uc5ed\uc73c\ub85c \ud55c\ub2e4 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,l.kt)("h2",{id:"atomic-design\uc73c\ub85c-\ub9cc\ub4e4\uc5b4\ubcf4\uae30"},"Atomic Design\uc73c\ub85c \ub9cc\ub4e4\uc5b4\ubcf4\uae30"),(0,l.kt)("p",null,"\ubd80\ub044\ub7fd\uc9c0\ub9cc \ud55c \ubc88 \ub9cc\ub4e4\uc5b4\ubcf8 \uacb0\uacfc\ubb3c\uacfc \ud568\uaed8 \ud504\ub85c\uc138\uc2a4\ub97c \uacf5\uac1c\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc6d0\uc790lv1"},"\uc6d0\uc790(Lv1)"),(0,l.kt)("p",null,"\ubc30\uc0c9, \ud3f0\ud2b8 \uac19\uc740 \uc815\uc758, \ub77c\ubca8 \ubc84\ud2bc\uc5d0 \ud3fc \ud30c\uce20 \ub2e8\uc704 \ub4f1 UI \ucd5c\uc18c\uc694\uc18c\ub97c \uc2a4\ud0c0\uc77c\ub77c\uc774\uc988"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://design.dena.com/_next/static/images/1-atoms-1200-bc7b0da8305c2db3a92cf3465e6966ca.png",alt:"Lv1 stylize"})),(0,l.kt)("p",null,"\uc0ac\uc6a9 \ube48\ub3c4\uac00 \ub0ae\uc740 \uc6d0\uc790\ub3c4 \uba3c\uc800 \ub9cc\ub4e4\uc5b4\ub450\uaca0\uc2b5\ub2c8\ub2e4. \ud5c8\ub098 \uc81c\uc791\uc5d0 \ub0ad\ube44\uac00 \ub9ce\uc544\uc9c8\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4.(h6, hr, pre \uac19\uc774)"),(0,l.kt)("p",null,"\uac01 \uc6d0\uc790\ub294 Sketch\uc600\ub2e4\uba74 Symbol\ud654 \ud558\uae30 \ub4f1, \ub514\uc790\uc778 \ucef4\ud3ec\ub10c\ud2b8 \uc624\ube0c\uc81d\ud2b8\ub85c \ub9cc\ub4ed\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ubd84\uc790lv2"},"\ubd84\uc790(Lv2)"),(0,l.kt)("p",null,"\uc6d0\uc790(Lv1)\ub97c \ubd99\uc785\ub2c8\ub2e4. \uc990\uac81\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://design.dena.com/_next/static/images/2-molecules-1200-349b9aaed810cabcb56dba2aafd39479.png",alt:"Lv2"})),(0,l.kt)("p",null,"\uc880 \uc560\ub9e4\ud55c\ub370 \uc2f6\uc5b4\uc11c \uc6d0\uc790\ub97c \ub2e4\uc2dc \uace0\uce58\ub294 \uacbd\uc6b0\uac00 \uc885\uc885 \uc788\uc9c0\ub9cc, \uc774\uac74 \uc801\uc751\uc758 \ubb38\uc81c\uc77c\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ubd84\uc790\ub3c4 \uc644\uc131\ub418\uba74 Sketch\uc600\ub2e4\uba74 Symbol\ud654\ud569\ub2c8\ub2e4. \uadfc\ub798 Sketch\ub294 Symbol\ub97c \ub124\uc2a4\ud2b8\ud560 \uc218 \uc788\uc5b4 \ud3b8\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc0dd\uccb4lv3"},"\uc0dd\uccb4(Lv3)"),(0,l.kt)("p",null,"\ubd84\uc790(Lv2)\ub97c \ubd99\uc785\ub2c8\ub2e4. \ubd80\uc871\ud55c \uc6d0\uc790\uac00 \uc788\ub294\ub370? \uac19\uc740 \uac83\uc744 \ub290\ub07c\uae30\ub3c4 \ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://design.dena.com/_next/static/images/3-organisms-1200-3260a7ae52293d9eb86e0e62010d77ec.png",alt:"Lv3"})),(0,l.kt)("p",null,"\ub610 \uc560\ub9e4\ud55c\ub370 \uc2f6\uc740 \uc6d0\uc790, \ubd84\uc790\ub97c \uace0\uce58\ub294 \uacbd\uc6b0\uac00 \uc885\uc885 \uc788\uc2b5\ub2c8\ub2e4. \uc0dd\uccb4\ub3c4 \uc644\uc131\ud588\uc73c\uba74 Sketch\ub77c\uba74 Symbol\ud654\ud569\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\ud15c\ud50c\ub9bflv4"},"\ud15c\ud50c\ub9bf(Lv4)"),(0,l.kt)("p",null,"\uc0dd\uccb4(Lv3)\ub97c \ubd99\uc785\ub2c8\ub2e4. \uc640\uc774\uc5b4 \ud504\ub808\uc784 \uac19\uc740 \ub290\ub08c\uc77c\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc5ec\uae30\uae4c\uc9c0 \ub4dc\ub514\uc5b4 \ub3c4\ucc29\ud588\ub294\ub370, \uace0\uccd0\uc4f0\ub294 \uc218\uace0\ub97c \ub354\ub294 \uc758\ubbf8\ub85c \uc190\uc73c\ub85c \uc640\uc774\uc5b4 \ud504\ub808\uc784\uc744 \uba3c\uc800 \uadf8\ub9ac\ub294 \uac83\uc774 \uc88b\uc744 \uac83 \uac19\ub2e4 \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://design.dena.com/_next/static/images/4-templates-1-1200-7f0a8b158957cc559c2d1c3637b9e879.png",alt:"Lv4"})),(0,l.kt)("p",null,"\ub610 \uc560\ub9e4\ud55c\ub370 \uc2f6\uc740 \uc0dd\uccb4, \ubd84\uc790, \uc6d0\uc790\ub97c \ub2e4\uc2dc \uace0\uccd0\uc4f0\ub294 \uacbd\uc6b0\uac00 \uc885\uc885 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc5d0\ub294 \uc801\uc751\ud588\uc2b5\ub2c8\ub2e4 \uc801\uc751. \uc720\uc800 \ud14c\uc2a4\ud2b8\ud560 \ub54c \uc0c9\uc774 \uc880~ \uc774\ub7f0 \uc774\uc57c\uae30\ub85c \ub2e4\uc2dc \uace0\uccd0\uc4f0\uc9c0 \uc54a\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4\ub9cc..."),(0,l.kt)("h2",{id:"\ud398\uc774\uc9c0lv5"},"\ud398\uc774\uc9c0(Lv5)"),(0,l.kt)("p",null,"\ud15c\ud50c\ub9bf(Lv4)\ub97c \ube0c\ub798\uc26c\uc5c5, \ub0b4\uc6a9\uc744 \ub123\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://design.dena.com/_next/static/images/5-pages-2-1200-3b62a3c9d52521e18a3fff1de38b12ea.png",alt:"Lv5"})),(0,l.kt)("p",null,"\uc870\uae08 \uc800\uc870\ucc28\ub3c4 \uac70\uc2dc\uae30\ud55c \ub514\uc790\uc778\uc774 \ub418\ubc84\ub838\uc2b5\ub2c8\ub2e4...\ud654\uba74 \uc804\uccb4\uc758 \uc0c9\uac10 \uac19\uc740 \uac83\ub3c4 \uc5ec\uae30\uc11c \ubcf4\uc774\uae30\uc5d0 \uc5ed\uc2dc \uc801\uc751\uc774 \ud544\uc694\ud558\ub2e4 \ub290\ub08d\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"atomic-design-\uac10\uc0c1"},"Atomic Design \uac10\uc0c1"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc544\uc9c1 \uc81c\uac00 \uc801\uc751\ud558\uc9c0 \ubabb\ud55c \ubd80\ubd84\ub3c4 \uc788\uc5b4\uc11c, \uc870\uae08 \uc5b4\ub835\ub2e4\ub294 \uc778\uc0c1\uc785\ub2c8\ub2e4. CSS Framework... \ud2b9\ud788 Twitter Bootstrap\ub97c \uae30\ubc18\uc73c\ub85c \ud55c \ub514\uc790\uc778\ud55c\ub2e4\ub294 \ub290\ub08c\uc73c\ub85c \ub9cc\ub4e4\uba74 \uc811\uadfc\ud558\uae30 \uc26c\uc6b8\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc6f9\ub514\uc790\uc778\uc73c\ub85c\ub294 \uc880 \uc2ec\uc2ec\ud55c \ub290\ub08c\uc77c\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4(\uc81c \uc2a4\ud0ac \ubb38\uc81c\uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4). \uc77c\ub2e8 \ubaa8\ub4e0 \uc6f9\ub514\uc790\uc778\uc5d0 \uc801\uc6a9\ud558\uae30\ubcf4\ub2e8, \uc11c\ube44\uc2a4 UI \ub514\uc790\uc778\uc5d0 \ud2b9\ud654\ud558\ub294 \uc811\uadfc\ubc29\ubc95\ub3c4 \uc88b\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uae30\ubc18 \ub514\uc790\uc778\uc774 \uc788\uc5b4 \uc544\ud2b8\ub514\ub809\uc158\uc5d0 \uc62c\ub9ac\ub294 UI\ub97c \ub9cc\ub4e4 \ub54c \ud6a8\uc728\uc801\uc77c \ub4ef\ud569\ub2c8\ub2e4. \ub610, \ud480 \uc2a4\ud06c\ub798\uce58\ub97c \ud55c\ub2e4\uae30 \ubcf4\ub2e4\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \ubcc0\ud658\ud558\uba74\uc11c \ube5a\uc5b4\ub0b4\ub290 \uac83\uc774 \uc88b\uc744 \ub4ef \ud569\ub2c8\ub2e4. LEAN \uac1c\ubc1c\uc5d0 \uc758\ud574 MVP \uac1c\ubc1c \ud398\uc774\uc988\ub77c\uba74 iOS, Android \ub514\uc790\uc778 \uac00\uc774\ub4dc\ub77c\uc778\uc744 \uae30\ucd08\uc6d0\ub9ac=\uc6d0\uc790/\ubd84\uc790 \ub2e8\uc704\ub85c \uc0dd\uccb4, \ud15c\ud50c\ub9bf\uc744 \uc815\uc758\ud574 \ub098\uac04\ub2e4\ub294 \uc811\uadfc \ud750\ub984\uc774 \uc774\ud574\ud558\uae30 \uc26c\uc6b8\ub4ef \ud569\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Atomic Design \uc218\ubc95\uacfc \ubcf4\ud1b5 \ub514\uc790\uc778 \uc218\ubc95\uc744 \ubbf9\uc2a4\uc778\ud558\uba74, \ud480\uc2a4\ud06c\ub798\uce58\ub77c\ub3c4 \uad1c\ucc2e\uac8c \ub098\uc62c\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc77c\ub2e8 \ubcf4\ud1b5\ud558\ub294 \ubc29\ubc95\uc73c\ub85c \ub514\uc790\uc778\ud574\uc11c \ud654\uba74 \uc804\uccb4\ub97c \ub9cc\ub4e0 \ud6c4\uc5d0, \ud30c\uce20\ub97c \ubd84\ud560, \uacf5\ud1b5\ud654\ud558\uba70 Atomic Design\uc758 \ud504\ub808\uc784\uc6cc\ud06c\uc640 \ube44\uad50, \uc2a4\ud0c0\uc77c\uac00\uc774\ub4dc\ub97c \uc6d0\uc790\uc5d0\uc11c \uc815\uc758\ud558\ub294 \uc21c\uc11c\ub97c \ubc1f\uc73c\uba74 \ube60\uc9c0\ub294 \ubd80\ubd84\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc73c\uba70, \uad6c\ud604 \ud300\uacfc \ud569\uc758\ub3c4 \uc26c\uc6cc\uc9c8 \uac83 \uac19\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\uc774 \ubc29\ubc95\uc73c\ub85c \uac1c\ubc1c\ud55c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc81c\uc791\uae30 \uae00\uc744 \uc885\uc885 \ubcf4\uc9c0\ub9cc \ub300\ubd80\ubd84\uc774 \ud398\uc774\uc9c0\uc758 \ub514\uc790\uc778 \ubc11\uadf8\ub9bc(Design Comprehensive Layout)\uc744 \uc6d0\uc790, \ubd84\uc790 \ub2e8\uacc4\uc5d0\uc11c "\uc0c1\uc0c1\ud574" \uac1c\ubc1c\ud558\ub294 \ub290\ub08c\uc785\ub2c8\ub2e4. \uc774\ub294 \uaf64\ub098 \uc5b4\ub824\uc6cc\ubcf4\uc774\uc9c0\ub9cc, \uc801\uc751\ub418\uba74 \uc0c1\ub2f9\ud788 \ud6a8\uc728\uc801\uc77c \uac83 \uac19\uc2b5\ub2c8\ub2e4.'))),(0,l.kt)("h2",{id:"\ud2b9\ud788-\uad1c\ucc2e\ub2e4-\ub290\ub080\uc810"},"\ud2b9\ud788 \uad1c\ucc2e\ub2e4 \ub290\ub080\uc810"),(0,l.kt)("p",null,"\uc11c\ube44\uc2a4 \uac1c\ubc1c \uc2dc\uc5d0 \uc6b4\uc6a9 \ud398\uc774\uc988 \ub530\ub77c, \ud604\uc2e4\uc801\uc778 \ub514\uc790\uc774\ub108\uac00 \ubc18\ub4dc\uc2dc \ubaa8\ub4e0 \uc131\uacfc\ubb3c\uc744 \uc81c\ub85c \ubca0\uc774\uc2a4\uc5d0\uc11c \uc791\uc131\ud558\uc9c0 \ubabb\ud560 \uc218\ub3c4 \uc788\uc73c\ubbc0\ub85c \ud50c\ub798\ub108\ub098 \uc5d4\uc9c0\ub2c8\uc5b4\uac00 \ud504\ub85c\ud1a0\ud0c0\uc785 \ub808\ubca8\uc5d0\uc11c \ub9cc\ub4e4 \uc218 \uc788\ub294 \uad6c\uc870 \ubcf5\uc74c\uc774 \ub420\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4. \uc758\uc874\ub3c4\ub97c \ub0ae\ucd94\uba74\uc11c \ub514\uc790\uc774\ub108 \ud300 \uc548\uc5d0\uc11c \uc194\ub85c\ud50c\ub808\uc774 \ubc29\uc9c0\ub3c4 \uac00\ub2a5\ud560 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uac71\uc815-\uc2e4\uc81c\ub85c-\uc6b4\uc6a9\ub420-\ub54c\ub97c-\uc0dd\uac01\ud558\uc790"},"\uac71\uc815, \uc2e4\uc81c\ub85c \uc6b4\uc6a9\ub420 \ub54c\ub97c \uc0dd\uac01\ud558\uc790"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ub2e8\uc870\ub85c\uc6b4 \uc791\uc5c5\uc774 \uacc4\uc18d\ub418\ub294 \ub514\uc790\uc778 \uc791\uc5c5\uc5d0 \uc9c8\ub824\ubc84\ub9b4\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4. \ubca0\uc774\uc2a4\ub294 \ud3c9\ubc94\ud55c \ubc29\ubc95\uc73c\ub85c \ud574\ub3c4\ub420 \ub4ef\ud569\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc11c\ube44\uc2a4\uac00 \uc6b4\uc6a9\ub420 \ub54c, \uc6d0\uc790\uc640 \uac19\uc740 \uc6d0\uc790(button2 \uac19\uc774)\ub97c \ub9cc\ub4dc\ub294 \uc545\ubabd\uc774 \ubcf4\uc785\ub2c8\ub2e4... \ub2e4\ub9cc \ud1b5\uc0c1\uc801\uc778 \ubc29\ubc95\ubcf4\ub2e4 \ubc1c\uc0dd \ud655\ub960\uc744 \uc5b5\ub204\ub97c \uc218 \uc788\uc744 \uac83 \uac19\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc5d4\uc9c0\ub2c8\uc5b4\uac00 \uc6d0\uc790 \ubd84\uc790 \ub2e8\uacc4\ub85c \uc313\uc544\uc62c\ub9b0 \ub514\uc790\uc778\uc740 \ub808\uc774\uc544\uc6c3 \ub2e8\uacc4\uac00 \uc544\ub2c8\ubbc0\ub85c, \ud504\ub85c\ub355\uc158 \ub2e8\uacc4\uc5d0\uc11c\ub294 \uacb0\uad6d \ub514\uc790\uc774\ub108\uac00 \uc190\uc744 \ub300\uc57c\ud558\ub294 \ub4f1, \uc7ac\uc791\uc5c5\ud574\uc57c\ud560 \uc5ec\uc9c0\uac00 \uc788\uc744\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4. \uc190\uc744 \uc368\uc57c\ud558\ub294 \ubd80\ubd84\uc758 \uc6b0\uc120 \uc21c\uc704\ub97c \ubd99\uc774\ub294 \uac83\uc774 \uc88b\uc744\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4."))),(0,l.kt)("h2",{id:"atomic-design-\ucc38\uace0\uc790\ub8cc"},"Atomic Design \ucc38\uace0\uc790\ub8cc"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://patternlab.io/"},"pattern lab")),(0,l.kt)("p",null,"Atomic Design\ub97c \ucd94\uc9c4\ud558\ub294 \uacf5\uc2dd\uc5d0 \uac00\uae4c\uc6b4 \uc0ac\uc774\ud2b8 & \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc791\ud558\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uc2e4\uc81c\ub85c \ub3c4\uc785\ud560 \ub54c \uc5ec\uae30 \ub3c4\uad6c\ub97c \uc9c0\uce68\uc73c\ub85c \uc4f0\ub294 \uac83\uc774 \uc88b\uc544\ubcf4\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://apbcss.com/"},"APBCSS")),(0,l.kt)("p",null,"Atomic Design \ud45c\uc900\uc73c\ub85c \uc81c\uc791\ub41c CSS Framework\uc785\ub2c8\ub2e4. CSS \ud074\ub798\uc2a4 \uc815\uc758\uac00 \ud2b9\uc9d5\uc801\uc774\ub124\uc694."),(0,l.kt)("p",null,"\uac1c\ubc1c\uc790 \uc2dc\uc120 \uc774\uc678\ub77c\uba74 \ubc18\ub4dc\uc2dc \uc774\uac70\uc5ec\uc57c \ud558\ub294 \uc774\uc720\ub294 \uc798 \ubaa8\ub974\uaca0\uc9c0\ub9cc, Atomic Design\uc758 \uc774\ud574\uac00 \uae4a\uc5b4\uc9c8 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc11c\ube44\uc2a4 \ub514\uc790\uc778\uc740 \uc9c0\uc18d\uc801\uc73c\ub85c \uc9e7\uc740 \uc0ac\uc774\ud074\ub85c \uc218\uc815\ud558\uc9c0 \uc54a\uc73c\uba74 \uc548\ub418\ubbc0\ub85c, Web/UI \ub514\uc790\uc778\uc774 \uc544\ub2c8\ub77c\uba74 \ub3c5\uc790\uc801\uc73c\ub85c \ud574\uacb0\ud574\uc57c\ud558\ub294 \ubb38\uc81c\ub97c \ub300\ud558\ub294 \ud558\ub098\uc758 \ubc29\ubc95")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Web/UI \ub514\uc790\uc778\uc5d0\ub294 \uc5d0\ub514\ud1a0\ub9ac\uc5bc, \uadf8\ub798\ud53d\uc5d0\uc11c \ub098\uc628 \ubc29\ubc95\uc774 \ub9ce\uc774 \uc788\uc9c0\ub9cc Atomic Design\uc740 \ub9c8\ud06c\uc5c5, \ucf54\ub529 \uc2dc\uc120\uc73c\ub85c \ub0b3\uc740 \ubc29\ubc95")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\ub514\uc790\uc778\uc758 \ucd5c\uc885\uc801 \ubaa9\ud45c\ub294 \uac00\uce58\ub97c \ubd80\uc5ec\ud55c\ub2e4, \ubb38\uc81c\ub97c \ud574\uacb0\ud558\ub294 \uac83\uc774\ub77c\uba74 \ub2e4\uc591\ud55c \ubc29\ubc95\uc774 \uc788\ub2e4\uba74 \uc88b\uc740 \uac83"))),(0,l.kt)("p",null,"Atomic Design\uc758 \uc2dc\uc810\uc73c\ub85c \uc11c\ube44\uc2a4 \ub514\uc790\uc778 \ud504\ub85c\uc138\uc2a4 \uac1c\uc120\uc5d0 \ub3c4\uc804\ud558\ub294 \uac83\ub3c4 \uc88b\uc740 \uc77c\uc77c\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);