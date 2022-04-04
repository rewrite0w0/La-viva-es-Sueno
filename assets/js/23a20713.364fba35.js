"use strict";(self.webpackChunkla_viva_es_sueno=self.webpackChunkla_viva_es_sueno||[]).push([[3194],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),k=l,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||s;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<s;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9843:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(7462),l=n(3366),s=(n(7294),n(3905)),r=["components"],i={slug:"34-JavaScript-Optimization-Techniques-to-Know-in-2021",title:"34-JavaScript-Optimization-Techniques-to-Know-in-2021",authors:"rewrite0w0",tags:["javascript","Optimization","\ubc88\uc5ed"]},o=void 0,u={permalink:"/La-viva-es-Sueno/blog/34-JavaScript-Optimization-Techniques-to-Know-in-2021",source:"@site/blog/translate-list/2022-03-22-34-JavaScript-Optimization-Techniques-to-Know-in-2021.md",title:"34-JavaScript-Optimization-Techniques-to-Know-in-2021",description:"\uae00\uc774 \uc0ad\uc81c\ub418\uc5b4 \uc788\ub294 \uc0c1\ud0dc",date:"2022-03-22T00:00:00.000Z",formattedDate:"March 22, 2022",tags:[{label:"javascript",permalink:"/La-viva-es-Sueno/blog/tags/javascript"},{label:"Optimization",permalink:"/La-viva-es-Sueno/blog/tags/optimization"},{label:"\ubc88\uc5ed",permalink:"/La-viva-es-Sueno/blog/tags/\ubc88\uc5ed"}],readingTime:14.04,truncated:!1,authors:[{name:"rewrite0w0",title:"JavaScript \uac1c\ubc1c\uc790",url:"https://github.com/rewrite0w0",key:"rewrite0w0"}],frontMatter:{slug:"34-JavaScript-Optimization-Techniques-to-Know-in-2021",title:"34-JavaScript-Optimization-Techniques-to-Know-in-2021",authors:"rewrite0w0",tags:["javascript","Optimization","\ubc88\uc5ed"]},prevItem:{title:"You don't need null",permalink:"/La-viva-es-Sueno/blog/you-dont-need-null"},nextItem:{title:"\uc5d4\uc9c0\ub2c8\uc5b4\uac00 \uc5f4\ub4f1\uac10\uacfc \ub9c8\uc8fc\ud558\ub294 \ubc29\ubc95",permalink:"/La-viva-es-Sueno/blog/engineer-no-rettoukan-tono-tsukiai-kata"}},p={authorsImageUrls:[void 0]},c=[{value:"1. \ubcf5\uc218\uc758 \uc870\uac74\uc744 \uac16\ub294 if",id:"1-\ubcf5\uc218\uc758-\uc870\uac74\uc744-\uac16\ub294-if",level:2},{value:"2. if true ... else \uc0dd\ub7b5\ubc95",id:"2-if-true--else-\uc0dd\ub7b5\ubc95",level:2},{value:"3. \ubcc0\uc218\uc120\uc5b8",id:"3-\ubcc0\uc218\uc120\uc5b8",level:2},{value:"4. Null, Undefined, Empty Checks",id:"4-null-undefined-empty-checks",level:2},{value:"5. null \ud655\uc778\uacfc \uae30\ubcf8\uac12 \ubd84\ud574 \ud560\ub2f9",id:"5-null-\ud655\uc778\uacfc-\uae30\ubcf8\uac12-\ubd84\ud574-\ud560\ub2f9",level:2},{value:"6. undefined \ud655\uc778\uacfc \uae30\ubcf8\uac12 \ubd84\ud574 \ud560\ub2f9",id:"6-undefined-\ud655\uc778\uacfc-\uae30\ubcf8\uac12-\ubd84\ud574-\ud560\ub2f9",level:2},{value:"null \ubcd1\ud569 \uc5f0\uc0b0\uc790",id:"null-\ubcd1\ud569-\uc5f0\uc0b0\uc790",level:3},{value:"7. \uc5ec\ub7ec \ubcc0\uc218\uc5d0 \uac12\uc744 \ubd84\ud574 \ud560\ub2f9",id:"7-\uc5ec\ub7ec-\ubcc0\uc218\uc5d0-\uac12\uc744-\ubd84\ud574-\ud560\ub2f9",level:2},{value:"8. \ub300\uc785\uc5f0\uc0b0\uc790 \uc0dd\ub7b5",id:"8-\ub300\uc785\uc5f0\uc0b0\uc790-\uc0dd\ub7b5",level:2},{value:"9. if\uc5d0 \ub530\ub978 \uac12 \ud655\uc778 \uc0dd\ub7b5\ubc95",id:"9-if\uc5d0-\ub530\ub978-\uac12-\ud655\uc778-\uc0dd\ub7b5\ubc95",level:2},{value:"10. \uc5ec\ub7ec\uc870\uac74 AND (&amp;&amp;) \uc5f0\uc0b0\uc790",id:"10-\uc5ec\ub7ec\uc870\uac74-and--\uc5f0\uc0b0\uc790",level:2},{value:"11. forEach",id:"11-foreach",level:2},{value:"12. \ube44\uad50 return",id:"12-\ube44\uad50-return",level:2},{value:"13. \ud654\uc0b4\ud45c \ud568\uc218",id:"13-\ud654\uc0b4\ud45c-\ud568\uc218",level:2},{value:"14. \uc9e7\uc740 \ud568\uc218 \ud638\ucd9c",id:"14-\uc9e7\uc740-\ud568\uc218-\ud638\ucd9c",level:2},{value:"15. switch \uc0dd\ub7b5\ubc95",id:"15-switch-\uc0dd\ub7b5\ubc95",level:2},{value:"16. \uc554\ubb35\uc801 \ubc18\ud658",id:"16-\uc554\ubb35\uc801-\ubc18\ud658",level:2},{value:"17. 10\uc9c4\uc218 \uc9c0\uc218",id:"17-10\uc9c4\uc218-\uc9c0\uc218",level:2},{value:"18. \ud30c\ub77c\uba54\ud130 \uae30\ubcf8 \uac12",id:"18-\ud30c\ub77c\uba54\ud130-\uae30\ubcf8-\uac12",level:2},{value:"19. \ud3bc\uce68 \uc5f0\uc0b0\uc790(\uc804\uac1c \uad6c\ubb38)",id:"19-\ud3bc\uce68-\uc5f0\uc0b0\uc790\uc804\uac1c-\uad6c\ubb38",level:2},{value:"20. \ud15c\ud50c\ub81b \ub9ac\ud130\ub7f4",id:"20-\ud15c\ud50c\ub81b-\ub9ac\ud130\ub7f4",level:2},{value:"21. \uc5ec\ub7ec\ud589 \ubb38\uc790\uc5f4 \uc0dd\ub7b5\ubc95",id:"21-\uc5ec\ub7ec\ud589-\ubb38\uc790\uc5f4-\uc0dd\ub7b5\ubc95",level:2},{value:"22. \uac1d\uccb4 \ud504\ub85c\ud37c\ud2f0 \ubd84\ud574 \ud560\ub2f9",id:"22-\uac1d\uccb4-\ud504\ub85c\ud37c\ud2f0-\ubd84\ud574-\ud560\ub2f9",level:2},{value:"23. \ubb38\uc790\uc5f4\uc744 \uc22b\uc790\ub85c \ubcc0\ud658",id:"23-\ubb38\uc790\uc5f4\uc744-\uc22b\uc790\ub85c-\ubcc0\ud658",level:2},{value:"24. \uad6c\uc870 \ubd84\ud574 \ub300\uc785 \uc0dd\ub7b5\ubc95",id:"24-\uad6c\uc870-\ubd84\ud574-\ub300\uc785-\uc0dd\ub7b5\ubc95",level:2},{value:"25. Array.find",id:"25-arrayfind",level:2},{value:"26. \uc870\uac74 \uc0dd\ub7b5\ud654",id:"26-\uc870\uac74-\uc0dd\ub7b5\ud654",level:2},{value:"27. \ube44\ud2b8 \ub2e8\uc704 \uc5f0\uc0b0\uc790\uc5d0 \ub530\ub978 IndexOf \uc0dd\ub7b5\ubc95",id:"27-\ube44\ud2b8-\ub2e8\uc704-\uc5f0\uc0b0\uc790\uc5d0-\ub530\ub978-indexof-\uc0dd\ub7b5\ubc95",level:2},{value:"28. Object.entries()",id:"28-objectentries",level:2},{value:"29. Object.values()",id:"29-objectvalues",level:2},{value:"30. \ub2e8\ud56d \ube44\ud2b8 \ub17c\ub9ac\ubd80\uc815(Double Bitwise) \uc0dd\ub7b5\ubc95",id:"30-\ub2e8\ud56d-\ube44\ud2b8-\ub17c\ub9ac\ubd80\uc815double-bitwise-\uc0dd\ub7b5\ubc95",level:2},{value:"31. \ubb38\uc790\uc5f4 \ubc18\ubcf5",id:"31-\ubb38\uc790\uc5f4-\ubc18\ubcf5",level:2},{value:"32. \ubc30\uc5f4\uc758 \ucd5c\ub300\uce58\uc640 \ucd5c\uc18c\uce58 \uac00\uc838\uc624\uae30",id:"32-\ubc30\uc5f4\uc758-\ucd5c\ub300\uce58\uc640-\ucd5c\uc18c\uce58-\uac00\uc838\uc624\uae30",level:2},{value:"33. \ubb38\uc790\uc5f4\uc5d0\uc11c \ubb38\uc790\ub97c \uac00\uc838\uc624\uae30",id:"33-\ubb38\uc790\uc5f4\uc5d0\uc11c-\ubb38\uc790\ub97c-\uac00\uc838\uc624\uae30",level:2},{value:"34. \uc9c0\uc218\ud568\uc218 \uc0dd\ub7b5\ubc95",id:"34-\uc9c0\uc218\ud568\uc218-\uc0dd\ub7b5\ubc95",level:2},{value:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c...",id:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c",level:2}],d={toc:c};function k(e){var t=e.components,n=(0,l.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("a",{parentName:"p",href:"https://javascript.plainenglish.io/34-javascript-optimization-techniques-to-know-in-2021-d561afdf73c3"},"\uae00"),"\uc774 \uc0ad\uc81c\ub418\uc5b4 \uc788\ub294 \uc0c1\ud0dc\n\ucd5c\uc2e0\uc758 \uc0dd\ub7b5 \ud14c\ud06c\ub2c9, \uae30\uc220, \ube44\uacb0\uc744 \uc0ac\uc6a9\ud574 JavaScript \ucf54\ub4dc\ub97c \ucd5c\uc801\ud654 \ud55c\ub2e4")),(0,s.kt)("p",null,"\uac1c\ubc1c\uc790\uc758 \uc0b6\uc740 \ub298 \uc0c8\ub85c\uc6b4 \uac83\uc744 \ubc30\uc6b0\ub294 \uac83\uc73c\ub85c, \ubcc0\ud654\uc5d0 \ub530\ub77c\uac00\ub294 \uc77c\uc740 \uacb0\ucf54 \uc5b4\ub824\uc6b4 \uc77c\uc774 \uc544\ub2d9\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc800\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\uac00 \uc54c\uc544\uc57c \ud558\ub294 \uc0dd\ub7b5\ubc95, \uae30\ub2a5 \ub4f1 JavaScript\uc758 \ubaa8\ub4e0 \ucd5c\uc120\uc758 \ubc29\ubc95\uc744 \uc18c\uac1c\ud558\uc5ec 2021\ub144\uc744 \ubcf4\ub2e4 \ucf8c\uc801\ud558\uac8c \ub9cc\ub4e4\uace0 \uc2f6\ub2e4 \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"JavaScript \uac1c\ubc1c \uae34 \uc2dc\uac04 \ud558\uc2e0 \ubd84\uc774\ub77c \ud558\ub354\ub77c\ub3c4, \ucf54\ub4dc\ub97c \ucd94\uac00\ud558\uae30 \uc54a\uc544\ub3c4 \ubb38\uc81c\ud574\uacb0 \ud560 \uc218 \uc788\ub294 \ucd5c\uc2e0 \uae30\ub2a5\uc744 \ubaa8\ub974\uace0 \uacc4\uc2e4\uc218 \uc788\uc2b5\ub2c8\ub2e4"),(0,s.kt)("p",null,"\uc81c\uac00 \uc18c\uac1c\ud558\ub294 \uac83\uc740 \ud074\ub9b0\ud558\uba74\uc11c \ucd5c\uc801\ud654\ub41c JavaScript \ucf54\ub4dc, \uba74\uc811 \uc900\ube44\uc5d0\ub3c4 \ub3c4\uc6c0\ub420 \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc774\uac78 \ud55c \ub9c8\ub514\ub85c\ud558\uba74, ",(0,s.kt)("strong",{parentName:"p"},"2021\ub144\ud310 JavaScript \ucf54\ub529 \uce58\ud2b8 \uc2dc\ud2b8\uc785\ub2c8\ub2e4.")),(0,s.kt)("h2",{id:"1-\ubcf5\uc218\uc758-\uc870\uac74\uc744-\uac16\ub294-if"},"1. \ubcf5\uc218\uc758 \uc870\uac74\uc744 \uac16\ub294 if"),(0,s.kt)("p",null,"\ubc30\uc5f4\uc5d0 \uc5ec\ub7ec \uac12\uc744 \ub123\uc5b4, ",(0,s.kt)("inlineCode",{parentName:"p"},"includes")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nif (x === 'abc' || x === 'def' || x === 'ghi' || x === 'jkl') {\n  //logic\n}\n\n// \uc0dd\ub7b5\ud615\nif (['abc', 'def', 'ghi', 'jkl'].includes(x)) {\n  //logic\n}\n")),(0,s.kt)("h2",{id:"2-if-true--else-\uc0dd\ub7b5\ubc95"},"2. if true ... else \uc0dd\ub7b5\ubc95"),(0,s.kt)("p",null,"if else \uc870\uac74\uc5d0 \ub300\ub7c9\uc758 \ub85c\uc9c1\uc774 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"\uc0bc\ud56d\uc5f0\uc0b0\uc790"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \uc5c4\uccad \uc9e7\uac8c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nlet test: boolean;\nif (x > 100) {\n  test = true;\n} else {\n  test = false;\n}\n\n// \uc0dd\ub7b5\ud615\nlet test = x > 10 ? true : false; // or we can use directly let test = x > 10 console.log(test)\n")),(0,s.kt)("p",null,"\uc5b4\ub5a4 \uc870\uac74\uc744 \uac00\uc9c8 \ub54c\ub294 \uc774\ub807\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'let x = 300, test2 = (x > 100) ? "greater 100" : (x < 50) ? "less 50" : "between 50 and 100" console.log(test2)\n')),(0,s.kt)("h2",{id:"3-\ubcc0\uc218\uc120\uc5b8"},"3. \ubcc0\uc218\uc120\uc5b8"),(0,s.kt)("p",null,"\uacf5\ud1b5\uc758 \uac12 \ub610\ub294 \ud0c0\uc785\uc744 \uac16\ub294 2\uac1c\uc758 \ubcc0\uc218\ub97c \uc120\uc5b8\ud558\ub294 \uacbd\uc6b0 \uc774\ub7f0 \uc0dd\ub7b5\ubc95\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nlet test;\nlet test2 = 1;\n\n// \uc0dd\ub7b5\ud615\nlet test1,\n  test2 = 1;\n")),(0,s.kt)("h2",{id:"4-null-undefined-empty-checks"},"4. Null, Undefined, Empty Checks"),(0,s.kt)("p",null,"\uc0c8 \ubcc0\uc218\ub97c \ub9cc\ub4e4 \ub54c, \uadf8 \uac12\uc744 \ucc38\uc870\ud558\uace0 \uc788\ub294 \ubcc0\uc218\uac00 ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined"),"\uc778\uc9c0 \uc544\ub2cc\uc9c0 \ud655\uc778\ud558\ub294 \uc0dd\ub7b5\ubc95\uc785\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nif (test1 !== null || test1 !== undefined || test1 !== '') {\n  let test2 = test1;\n}\n\n// \uc0dd\ub7b5\ud615\nlet test2 = test1 || '';\n")),(0,s.kt)("h2",{id:"5-null-\ud655\uc778\uacfc-\uae30\ubcf8\uac12-\ubd84\ud574-\ud560\ub2f9"},"5. null \ud655\uc778\uacfc \uae30\ubcf8\uac12 \ubd84\ud574 \ud560\ub2f9"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let test1 = null,\n  test2 = test || '';\nconsole.log('null check', test2);\n")),(0,s.kt)("h2",{id:"6-undefined-\ud655\uc778\uacfc-\uae30\ubcf8\uac12-\ubd84\ud574-\ud560\ub2f9"},"6. undefined \ud655\uc778\uacfc \uae30\ubcf8\uac12 \ubd84\ud574 \ud560\ub2f9"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let test1 = undefined,\n  test2 = test1 || '';\nconsole.log('undefined check', test2); // output will be \"\"\n")),(0,s.kt)("p",null,"\uc815\uc0c1\uac12 \ud655\uc778"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let test1 = 'test',\n  test2 = test1 || '';\nconsole.log(test2); // output: 'test'\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\ubcf4\ub108\uc2a4 : ",(0,s.kt)("inlineCode",{parentName:"p"},"4"),",",(0,s.kt)("inlineCode",{parentName:"p"},"5"),",",(0,s.kt)("inlineCode",{parentName:"p"},"6"),"\uc5d0\uc11c ",(0,s.kt)("inlineCode",{parentName:"p"},"??"),"\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,s.kt)("h3",{id:"null-\ubcd1\ud569-\uc5f0\uc0b0\uc790"},"null \ubcd1\ud569 \uc5f0\uc0b0\uc790"),(0,s.kt)("p",null,"null \ubcd1\ud569 \uc5f0\uc0b0\uc790 ",(0,s.kt)("inlineCode",{parentName:"p"},"??"),"\ub294 \uc88c\ubcc0\uc774 ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," \ud639\uc740 ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined"),"\uc778 \uacbd\uc6b0, \uc6b0\ubcc0\uc758 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uc88c\ubcc0\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const test = null ?? 'default';\nconsole.log(test); // expected output: \"default\"\n\nconst test1 = 0 ?? 2;\nconsole.log(test1); // expected output: 0\n")),(0,s.kt)("h2",{id:"7-\uc5ec\ub7ec-\ubcc0\uc218\uc5d0-\uac12\uc744-\ubd84\ud574-\ud560\ub2f9"},"7. \uc5ec\ub7ec \ubcc0\uc218\uc5d0 \uac12\uc744 \ubd84\ud574 \ud560\ub2f9"),(0,s.kt)("p",null,"\uc5ec\ub7ec \ubcc0\uc218 \ucc98\ub9ac\ub97c \ubcc0\uc218\ub9c8\ub2e4 \uc8fc\ub824\ud560 \ub54c, \uc774\ub7f0 \uc0dd\ub7b5\ubc95\uc740 \ud3b8\ub9ac\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nlet test1, test2, test3\ntest1 = 1 test2 = 2 test3 = 3\n\n// \uc0dd\ub7b5\ud615\nlet [test1, test2, test3] = [1,2,3]\n")),(0,s.kt)("h2",{id:"8-\ub300\uc785\uc5f0\uc0b0\uc790-\uc0dd\ub7b5"},"8. \ub300\uc785\uc5f0\uc0b0\uc790 \uc0dd\ub7b5"),(0,s.kt)("p",null,"\ud504\ub85c\uadf8\ub798\ubc0d\uc5d0\uc11c\ub294 \ub9ce\uc740 \uc0b0\uc220\uc5f0\uc0b0\uc790\ub97c \ub2e4\ub8f9\ub2c8\ub2e4. JavaScript\uc5d0\uc11c \ubcc0\uc218\uc5d0 \ub300\uc785\uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\uc744 \ud3b8\ub9ac\ud558\uac8c \ubc29\ubc95\uc785\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\ntest1 = test1 + 1;\ntest2 = test2 - 1;\ntest3 = test3 - 20;\n\n// \uc0dd\ub7b5\ud615\ntest1 += 1;\ntest2 -= 1;\ntest3 -= 20;\n")),(0,s.kt)("h2",{id:"9-if\uc5d0-\ub530\ub978-\uac12-\ud655\uc778-\uc0dd\ub7b5\ubc95"},"9. if\uc5d0 \ub530\ub978 \uac12 \ud655\uc778 \uc0dd\ub7b5\ubc95"),(0,s.kt)("p",null,"\ubaa8\ub450 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uc77c\ubc18\uc801 \uc0dd\ub7b5\ubc95\uc785\ub2c8\ub2e4\ub9cc, \uadf8\ub798\ub3c4 \uc5b8\uae09\ud560 \uac00\uce58\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'// \ube44\uc0dd\ub7b5\ud615\nif (test1 === true)\n//or\nif (test1 !== "")\n// or\nif (test1 !== null)\n\n// \uc0dd\ub7b5\ud615\nif (test1)\n')),(0,s.kt)("p",null,"\ub9cc\uc57d test1\uc5d0 \uac12\uc774 \uc788\uc73c\uba74, ",(0,s.kt)("inlineCode",{parentName:"p"},"if")," \ud6c4 \ub85c\uc9c1\uc5d0 \ub4e4\uc5b4\uac11\ub2c8\ub2e4. \uc774 \uc5f0\uc0b0\uc790\ub294 \uc8fc\ub85c ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),"\uc774\ub098 ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined")," \ud655\uc778\ud558\ub294\ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"10-\uc5ec\ub7ec\uc870\uac74-and--\uc5f0\uc0b0\uc790"},"10. \uc5ec\ub7ec\uc870\uac74 AND (&&) \uc5f0\uc0b0\uc790"),(0,s.kt)("p",null,"\ubcc0\uc218\uac00 ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),"\uc77c \ub54c\ub9cc \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \uacbd\uc6b0 ",(0,s.kt)("inlineCode",{parentName:"p"},"&&")," \uc5f0\uc0b0\uc790\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nif (test1) {\n  callMethod();\n}\n\n// \uc0dd\ub7b5\ud615\ntest1 && callMethod();\n")),(0,s.kt)("h2",{id:"11-foreach"},"11. forEach"),(0,s.kt)("p",null,"\ub8e8\ud504\ubb38\uc758 \uc77c\ubc18\uc801 \uc0dd\ub7b5\ubc95\uc785\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nfor (var i = 0; i < testData.length; i++)\n\n// \uc0dd\ub7b5\ud615\nfor (let i in testData)\n\n//or\n\nfor (let i of testData)\n")),(0,s.kt)("p",null,"\ubc30\uc5f4\uc758 \ubcc0\uc218"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function testData(element, index, array) {\n  console.log('test[' + index + '] = ' + element);\n}\n\n[11, 24, 32].forEach(testData); // logs: test[0] = 11, test[1] = 24, test[2] = 32\n")),(0,s.kt)("h2",{id:"12-\ube44\uad50-return"},"12. \ube44\uad50 return"),(0,s.kt)("p",null,"\ube44\uad50\uc5d0\ub3c4 return\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. 5\ud589\uc9dc\ub9ac \ucf54\ub4dc\uac00 1\uc904\uc774 \ub429\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nlet test;\nfunction checkReturn() {\n  if (!(test === undefined)) {\n    return test;\n  } else {\n    return callMe('test');\n  }\n}\nvar data = checkReturn();\nconsole.log(data); //output test\nfunction callMe(val) {\n  console.log(val);\n}\n\n// \uc0dd\ub7b5\ud615\nfunction checkReturn() {\n  return test || callMe('test');\n}\n")),(0,s.kt)("h2",{id:"13-\ud654\uc0b4\ud45c-\ud568\uc218"},"13. \ud654\uc0b4\ud45c \ud568\uc218"),(0,s.kt)("p",null,"\uc608\uc2dc1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nfunction add(a, b) {\n  return a + b;\n}\n\n// \uc0dd\ub7b5\ud615\nconst add = (a, b) => a + b;\n")),(0,s.kt)("p",null,"\uc608\uc2dc2"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"function callMe(name) {\n  console.log('Hello', name);\n}\ncallMe = (name) => console.log('Hello', name);\n")),(0,s.kt)("h2",{id:"14-\uc9e7\uc740-\ud568\uc218-\ud638\ucd9c"},"14. \uc9e7\uc740 \ud568\uc218 \ud638\ucd9c"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"\uc0bc\ud56d\uc5f0\uc0b0\uc790"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nfunction test1() {\n  console.log('test1');\n}\nfunction test2() {\n  console.log('test2');\n}\nvar test3 = 1;\nif (test3 == 1) {\n  test1();\n} else {\n  test2();\n}\n\n// \uc0dd\ub7b5\ud615\n(test3 === 1 ? test1 : test2)();\n")),(0,s.kt)("h2",{id:"15-switch-\uc0dd\ub7b5\ubc95"},"15. switch \uc0dd\ub7b5\ubc95"),(0,s.kt)("p",null,"key-value \uac1d\uccb4\uc5d0 \uc870\uac74\uc744 \ub2f4\uc544, \uadf8 \uc870\uac74\uc5d0 \ub530\ub77c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nswitch (data) {\n  case 1:\n    test1();\n    break;\n  case 2:\n    test2();\n    break;\n  case 3:\n    test();\n    break;\n  // And so on...\n}\n\n// \uc0dd\ub7b5\ud615\nvar data = { 1: test1, 2: test2, 3: test };\ndata[something] && data[something]();\n")),(0,s.kt)("h2",{id:"16-\uc554\ubb35\uc801-\ubc18\ud658"},"16. \uc554\ubb35\uc801 \ubc18\ud658"),(0,s.kt)("p",null,"\ud654\uc0b4\ud45c \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uba74 return \uc5c6\uc774\ub3c4 \uc9c1\uc811 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nfunction calculate(diameter) { return Math.PI - diameter }\n\n// \uc0dd\ub7b5\ud615\nconst calculate = diameter => ( Math.PI - diameter; )\n")),(0,s.kt)("h2",{id:"17-10\uc9c4\uc218-\uc9c0\uc218"},"17. 10\uc9c4\uc218 \uc9c0\uc218"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nfor (var i = 0; i < 10000; i++) { ... }\n\n// \uc0dd\ub7b5\ud615\nfor (var i = 0; i < 1e4; i++) {...}\n")),(0,s.kt)("h2",{id:"18-\ud30c\ub77c\uba54\ud130-\uae30\ubcf8-\uac12"},"18. \ud30c\ub77c\uba54\ud130 \uae30\ubcf8 \uac12"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nfunction add(test1, test2) {\n  if (test1 === undefined) test1 = 1;\n  if (test2 === undefined) test2 = 2;\n  return test1 + test2;\n}\n\n// \uc0dd\ub7b5\ud615\nconst add = (test1 = 1, test2 = 2) => test1 + test2;\nadd(); //output: 3\n")),(0,s.kt)("h2",{id:"19-\ud3bc\uce68-\uc5f0\uc0b0\uc790\uc804\uac1c-\uad6c\ubb38"},"19. \ud3bc\uce68 \uc5f0\uc0b0\uc790(\uc804\uac1c \uad6c\ubb38)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nconst data = [1, 2, 3];\nconst test = [4, 5, 6].concat(data);\n\n// \uc0dd\ub7b5\ud615 const data = [1, 2, 3]; const test = [4 ,5 , 6, ...data]; console.log(test); // [ 4, 5, 6, 1, 2, 3]\n")),(0,s.kt)("p",null,"\uc774 \uc5f0\uc0b0\uc790\ub294, \ubcf5\uc0ac\uc2dc\uc5d0\ub3c4 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\n// cloning arrays\nconst test1 = [1, 2, 3];\nconst test2 = test1.slice();\n\n// \uc0dd\ub7b5\ud615\nconst test1 = [1, 2, 3];\nconst test2 = [...test1];\n")),(0,s.kt)("h2",{id:"20-\ud15c\ud50c\ub81b-\ub9ac\ud130\ub7f4"},"20. \ud15c\ud50c\ub81b \ub9ac\ud130\ub7f4"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"+"),"\ub85c \uc5ec\ub7ec \ubcc0\uc218\ub97c \ud558\ub098\uc758 \ubb38\uc790\uc5f4\ub85c \ub9cc\ub4e4\uc5b4\uc57c \ud558\ub294 \uacbd\uc6b0, \uc774\ub7f0 \uc0dd\ub7b5\ubc95\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nconst welcome = 'Hi ' + test1 + ' ' + test2 + '.';\n\n// \uc0dd\ub7b5\ud615\nconst welcome = `Hi ${test1} ${test2}`;\n")),(0,s.kt)("h2",{id:"21-\uc5ec\ub7ec\ud589-\ubb38\uc790\uc5f4-\uc0dd\ub7b5\ubc95"},"21. \uc5ec\ub7ec\ud589 \ubb38\uc790\uc5f4 \uc0dd\ub7b5\ubc95"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nconst data =\n  'abc abc abc abc abc abc\\n\\t' + 'test test,test test test test\\n\\t';\n\n// \uc0dd\ub7b5\ud615\nconst data = `abc abc abc abc abc abc test test,test test test test`;\n")),(0,s.kt)("h2",{id:"22-\uac1d\uccb4-\ud504\ub85c\ud37c\ud2f0-\ubd84\ud574-\ud560\ub2f9"},"22. \uac1d\uccb4 \ud504\ub85c\ud37c\ud2f0 \ubd84\ud574 \ud560\ub2f9"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let test1 = 'a';\nlet test2 = 'b';\n\n// \ube44\uc0dd\ub7b5\ud615\nlet obj = { test1: test1, test2: test2 };\n\n// \uc0dd\ub7b5\ud615\nlet obj = { test1, test2 };\n")),(0,s.kt)("h2",{id:"23-\ubb38\uc790\uc5f4\uc744-\uc22b\uc790\ub85c-\ubcc0\ud658"},"23. \ubb38\uc790\uc5f4\uc744 \uc22b\uc790\ub85c \ubcc0\ud658"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nlet test1 = parseInt('123');\nlet test2 = parseFloat('12.3');\n\n// \uc0dd\ub7b5\ud615\nlet test1 = +'123';\nlet test2 = +'12.3';\n")),(0,s.kt)("h2",{id:"24-\uad6c\uc870-\ubd84\ud574-\ub300\uc785-\uc0dd\ub7b5\ubc95"},"24. \uad6c\uc870 \ubd84\ud574 \ub300\uc785 \uc0dd\ub7b5\ubc95"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nconst test1 = this.data.test1;\nconst test2 = this.data.test2;\nconst test2 = this.data.test3;\n\n// \uc0dd\ub7b5\ud615\nconst { test1, test2, test3 } = this.data;\n")),(0,s.kt)("h2",{id:"25-arrayfind"},"25. Array.find"),(0,s.kt)("p",null,"\uac1d\uccb4\uc758 \ubc30\uc5f4\uc5d0\uc11c \uac1d\uccb4\uc758 \ud504\ub85c\ud37c\ud2f0\ub97c \ud1b5\ud574, \ud2b9\uc815 \uac1d\uccb4\ub97c \ucc3e\uc544\uc57c \ud558\ub294 \uacbd\uc6b0 ",(0,s.kt)("inlineCode",{parentName:"p"},"find")," \uba54\uc11c\ub4dc\ub294 \ubb34\ucc99 \ud3b8\ub9ac\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const data = [\n  { type: 'test1', name: 'abc' },\n  { type: 'test2', name: 'cde' },\n  { type: 'test1', name: 'fgh' },\n];\n\nfunction findtest1(name) {\n  for (let i = 0; i < data.length; ++i) {\n    if (data[i].type === 'test1' && data[i].name === name) {\n      return data[i];\n    }\n  }\n}\n\n// \uc0dd\ub7b5\ud615\nfilteredData = data.find(\n  (data) => data.type === 'test1' && data.name === 'fgh'\n);\nconsole.log(filteredData); // { type: 'test1', name: 'fgh' }\n")),(0,s.kt)("h2",{id:"26-\uc870\uac74-\uc0dd\ub7b5\ud654"},"26. \uc870\uac74 \uc0dd\ub7b5\ud654"),(0,s.kt)("p",null,"\ud0c0\uc785\uc744 \uccb4\ud06c\ud558\ub294 \ucf54\ub4dc\uc5d0\uc11c \ud0c0\uc785\uc744 \uae30\ubc18\uc73c\ub85c \ub2e4\ub978 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud574\uc57c \ud558\ub294 \uacbd\uc6b0, \uc5ec\ub7ec ",(0,s.kt)("inlineCode",{parentName:"p"},"if/else"),"\ub098 ",(0,s.kt)("inlineCode",{parentName:"p"},"switch"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4\ub9cc, \uc774 \ubcf4\ub2e4 \uc88b\uc740 \uc0dd\ub7b5\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nif (type === 'test1') {\n  test1();\n} else if (type === 'test2') {\n  test2();\n} else if (type === 'test3') {\n  test3();\n} else if (type === 'test4') {\n  test4();\n} else {\n  throw new Error('Invalid value ' + type);\n}\n// \uc0dd\ub7b5\ud615\nvar types = { test1: test1, test2: test2, test3: test3, test4: test4 };\nvar func = types[type];\n!func && throw new Error('Invalid value ' + type);\nfunc();\n")),(0,s.kt)("h2",{id:"27-\ube44\ud2b8-\ub2e8\uc704-\uc5f0\uc0b0\uc790\uc5d0-\ub530\ub978-indexof-\uc0dd\ub7b5\ubc95"},"27. \ube44\ud2b8 \ub2e8\uc704 \uc5f0\uc0b0\uc790\uc5d0 \ub530\ub978 IndexOf \uc0dd\ub7b5\ubc95"),(0,s.kt)("p",null,"\ubc30\uc5f4\uc744 \ub8e8\ud504\ud574\uc11c \ud2b9\uc815 \uac12\uc744 \ucc3e\uc544\uc57c \ud558\ub294 \uacbd\uc6b0 ",(0,s.kt)("inlineCode",{parentName:"p"},"indexOf")," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub9cc\uc57d \uc6b0\ub9ac\uac00 \ub354 \uc88b\uc740 \ubc29\ubc95\uc744 \ucc3e\uace0 \uc2f6\ub2e4\uba74? \ub2e4\uc74c \uc608\uc81c\ub97c \ubd05\uc2dc\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nif (arr.indexOf(item) > -1) {\n  // item found\n}\nif (arr.indexOf(item) === -1) {\n  // item not found\n}\n\n// \uc0dd\ub7b5\ud615\nif (~arr.indexOf(item)) {\n  // item found\n}\nif (!~arr.indexOf(item)) {\n  // item not found\n}\n")),(0,s.kt)("p",null,"\ube44\ud2b8 \ub2e8\uc704 \uc5f0\uc0b0\uc790 ",(0,s.kt)("inlineCode",{parentName:"p"},"~"),"\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"-1"),"\uc774\uc678\uc758 \uac12\uc5d0 ",(0,s.kt)("inlineCode",{parentName:"p"},"\ucc38")," \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \ubd80\uc815\uc740 \uac04\ub2e8\ud558\uac8c ",(0,s.kt)("inlineCode",{parentName:"p"},"!~"),"\uc744 \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4. ",(0,s.kt)("inlineCode",{parentName:"p"},"includes"),"\uc5d0\uc11c\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"if (arr.includes(item)) {\n  // true if the item found\n}\n")),(0,s.kt)("h2",{id:"28-objectentries"},"28. Object.entries()"),(0,s.kt)("p",null,"\uac1d\uccb4\ub97c \uac1d\uccb4 \ubc30\uc5f4\ub85c \ubcc0\ud658\ud558\ub294\ub370 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const data = { test1: 'abc', test2: 'cde', test3: 'efg' };\nconst arr = Object.entries(data);\nconsole.log(\n  arr\n); /** Output: [ [ 'test1', 'abc' ], [ 'test2', 'cde' ], [ 'test3', 'efg' ] ] **/\n")),(0,s.kt)("h2",{id:"29-objectvalues"},"29. Object.values()"),(0,s.kt)("p",null,"ES8\uc5d0 \ub3c4\uc785\ub41c \uae30\ub2a5\uc73c\ub85c, ",(0,s.kt)("inlineCode",{parentName:"p"},"Object.entries"),"\uc640 \ub2ee\uc558\uc2b5\ub2c8\ub2e4\ub9cc, ",(0,s.kt)("inlineCode",{parentName:"p"},"key"),"\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const data = { test1: 'abc', test2: 'cde' };\nconst arr = Object.values(data);\nconsole.log(arr); /** Output: [ 'abc', 'cde'] **/\n")),(0,s.kt)("h2",{id:"30-\ub2e8\ud56d-\ube44\ud2b8-\ub17c\ub9ac\ubd80\uc815double-bitwise-\uc0dd\ub7b5\ubc95"},"30. \ub2e8\ud56d \ube44\ud2b8 \ub17c\ub9ac\ubd80\uc815(Double Bitwise) \uc0dd\ub7b5\ubc95"),(0,s.kt)("p",null,"\ub2e8\ud56d \ube44\ud2b8 \ub17c\ub9ac\ubd80\uc815(Double Bitwise)\uc740 32\ube44\ud2b8 \uc815\uc218\uc5d0\uc11c\ub9cc \uc720\ud6a8\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nMath.floor(1.9) === 1; // true\n\n// \uc0dd\ub7b5\ud615\n~~1.9 === 1; // true\n")),(0,s.kt)("h2",{id:"31-\ubb38\uc790\uc5f4-\ubc18\ubcf5"},"31. \ubb38\uc790\uc5f4 \ubc18\ubcf5"),(0,s.kt)("p",null,"\uac19\uc740 \ub2e8\uc5b4\ub97c \uba87 \ubc88\uc774\ub098 \ubc18\ubcf5\ud574\uc57c \ud558\ub294 \uacbd\uc6b0, for\ub85c \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc \uc774\uac83\ub3c4 \uc0dd\ub7b5\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nlet test = '';\nfor (let i = 0; i < 5; i++) {\n  test += 'test ';\n}\nconsole.log(str); // test test test test test\n\n// \uc0dd\ub7b5\ud615\n'test '.repeat(5);\n")),(0,s.kt)("h2",{id:"32-\ubc30\uc5f4\uc758-\ucd5c\ub300\uce58\uc640-\ucd5c\uc18c\uce58-\uac00\uc838\uc624\uae30"},"32. \ubc30\uc5f4\uc758 \ucd5c\ub300\uce58\uc640 \ucd5c\uc18c\uce58 \uac00\uc838\uc624\uae30"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [1, 2, 3];\nMath.max(...arr); // 3 Math.min(...arr); // 1\n")),(0,s.kt)("h2",{id:"33-\ubb38\uc790\uc5f4\uc5d0\uc11c-\ubb38\uc790\ub97c-\uac00\uc838\uc624\uae30"},"33. \ubb38\uc790\uc5f4\uc5d0\uc11c \ubb38\uc790\ub97c \uac00\uc838\uc624\uae30"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"let str = 'abc';\n// \ube44\uc0dd\ub7b5\ud615\nstr.charAt(2); // c\n\n// \uc0dd\ub7b5\ud615\nstr[2]; // c\n")),(0,s.kt)("p",null,"\ubc30\uc5f4\uc758 \uc778\ub371\uc2a4\ub97c \uc544\ub294 \uacbd\uc6b0 \uc9c1\uc811 \ubc1b\uc544\uc62c \uc218 \uc788\uc73c\ub098, \ubaa8\ub974\ub294 \uacbd\uc6b0\uc5d0\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined"),"\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4..."),(0,s.kt)("h2",{id:"34-\uc9c0\uc218\ud568\uc218-\uc0dd\ub7b5\ubc95"},"34. \uc9c0\uc218\ud568\uc218 \uc0dd\ub7b5\ubc95"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// \ube44\uc0dd\ub7b5\ud615\nMath.pow(2, 3); // 8\n\n// \uc0dd\ub7b5\ud615\n2 ** 3; // 8\n")),(0,s.kt)("h2",{id:"\ub9c8\uc9c0\ub9c9\uc73c\ub85c"},"\ub9c8\uc9c0\ub9c9\uc73c\ub85c..."),(0,s.kt)("p",null,"JavaScript \ucf54\ub4dc\ub97c \ucd5c\uc801\ud654\ud558\ub294 34\uac00\uc9c0 \ubc29\ubc95\uc785\ub2c8\ub2e4. \uae30\uc0ac\uac00 \uad1c\ucc2e\uc558\ub2e4\uba74 \uc800\ud76c\uc758 ",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCtipWUghju290NWcn8jhyAw"},"youtube"),"\ub97c \ubc29\ubb38\ud574\uc8fc\uc138\uc694. \ub354 \ub9ce\uc740 \uc815\ubcf4\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}k.isMDXComponent=!0}}]);