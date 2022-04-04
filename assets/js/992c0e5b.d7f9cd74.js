"use strict";(self.webpackChunkla_viva_es_sueno=self.webpackChunkla_viva_es_sueno||[]).push([[1935],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=a,k=d["".concat(p,".").concat(u)]||d[u]||s[u]||r;return n?o.createElement(k,l(l({ref:t},c),{},{components:n})):o.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2275:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),l=["components"],i={slug:"imasararecoil",title:"(TS) \uc774\uc81c\uc640\uc11c \ubb3b\uae30 \uc560\ub9e4\ud55c recoil",authors:"rewrite0w0",tags:["recoil","react","typescript","state management","\ubc88\uc5ed"]},p=void 0,m={permalink:"/La-viva-es-Sueno/blog/imasararecoil",source:"@site/blog/translate-list/2022-03-11-imasararecoil.md",title:"(TS) \uc774\uc81c\uc640\uc11c \ubb3b\uae30 \uc560\ub9e4\ud55c recoil",description:"\uba38\ub9bf\ub9d0",date:"2022-03-11T00:00:00.000Z",formattedDate:"March 11, 2022",tags:[{label:"recoil",permalink:"/La-viva-es-Sueno/blog/tags/recoil"},{label:"react",permalink:"/La-viva-es-Sueno/blog/tags/react"},{label:"typescript",permalink:"/La-viva-es-Sueno/blog/tags/typescript"},{label:"state management",permalink:"/La-viva-es-Sueno/blog/tags/state-management"},{label:"\ubc88\uc5ed",permalink:"/La-viva-es-Sueno/blog/tags/\ubc88\uc5ed"}],readingTime:11.565,truncated:!1,authors:[{name:"rewrite0w0",title:"JavaScript \uac1c\ubc1c\uc790",url:"https://github.com/rewrite0w0",key:"rewrite0w0"}],frontMatter:{slug:"imasararecoil",title:"(TS) \uc774\uc81c\uc640\uc11c \ubb3b\uae30 \uc560\ub9e4\ud55c recoil",authors:"rewrite0w0",tags:["recoil","react","typescript","state management","\ubc88\uc5ed"]},prevItem:{title:"Microsoft for Startups Founders Hub",permalink:"/La-viva-es-Sueno/blog/MS-for-Startups-Founders-Hub"},nextItem:{title:"\ub098\ub9cc\uc758 ESLint \uaddc\uce59\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc558\ub2e4.",permalink:"/La-viva-es-Sueno/blog/try-make-myLint"}},c={authorsImageUrls:[void 0]},s=[{value:"\uba38\ub9bf\ub9d0",id:"\uba38\ub9bf\ub9d0",level:2},{value:"\uc560\ucd08\uc5d0 <code>Recoil</code>\uc774 \ubb54\uc8e0?",id:"\uc560\ucd08\uc5d0-recoil\uc774-\ubb54\uc8e0",level:2},{value:"\uad6c\ud604 \uc0d8\ud50c",id:"\uad6c\ud604-\uc0d8\ud50c",level:2},{value:"\ubc84\uc804 \uc815\ubcf4",id:"\ubc84\uc804-\uc815\ubcf4",level:3},{value:"\uad6c\ud604",id:"\uad6c\ud604",level:3},{value:"\ud504\ub85c\uc81d\ud2b8 \ub9cc\ub4e4\uae30",id:"\ud504\ub85c\uc81d\ud2b8-\ub9cc\ub4e4\uae30",level:4},{value:"Recoil \uc124\uce58",id:"recoil-\uc124\uce58",level:4},{value:"types \uc791\uc131",id:"types-\uc791\uc131",level:4},{value:"Atom \uc791\uc131",id:"atom-\uc791\uc131",level:4},{value:"Selector \uc791\uc131",id:"selector-\uc791\uc131",level:4},{value:"Root \uc120\uc5b8",id:"root-\uc120\uc5b8",level:4},{value:"Atom, Selector\uc5d0\uc11c \uac12\uc744 \uc5bb\uae30",id:"atom-selector\uc5d0\uc11c-\uac12\uc744-\uc5bb\uae30",level:4},{value:"<code>Atom</code> \uac12 \ubcc0\uacbd",id:"atom-\uac12-\ubcc0\uacbd",level:4},{value:"App \uc218\uc815",id:"app-\uc218\uc815",level:4},{value:"\uc774\ubc88\uc5d0 \ub9cc\ub4e0 \uac83",id:"\uc774\ubc88\uc5d0-\ub9cc\ub4e0-\uac83",level:3},{value:"\ub9fa\uc74c\ub9d0",id:"\ub9fa\uc74c\ub9d0",level:3}],d={toc:s};function u(e){var t=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ts-\uc774\uc81c\uc640\uc11c-\ubb3b\uae30-\uc560\ub9e4\ud55c-recoil"},(0,r.kt)("a",{parentName:"h1",href:"https://zenn.dev/nekoniki/articles/406087e43f4865"},"(TS) \uc774\uc81c\uc640\uc11c \ubb3b\uae30 \uc560\ub9e4\ud55c recoil")),(0,r.kt)("h2",{id:"\uba38\ub9bf\ub9d0"},"\uba38\ub9bf\ub9d0"),(0,r.kt)("p",null,"\uc774\ubc88\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\uc5d0 \ub300\ud574 \uc18c\uac1c(+ \uc790\uc2e0\uc758 \ud559\uc2b5 \uba54\ubaa8)\ud558\ub824\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Facebook"),"\uc774 \uac1c\ubc1c\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"React"),"\ub97c \ub300\uc0c1\uc73c\ub85c\ud558\ub294 ",(0,r.kt)("strong",{parentName:"p"},"\uc0c1\ud0dc\uad00\ub9ac \uc804\ubc18\uc744 \ub2e4\ub8e8\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zenn.dev/catnose99/articles/zenn-dev-stack"},"\uc774\uae00"),"\uc5d0\uc11c\ub3c4 \ub2e4\ub904\uace0\uc788\uc9c0\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"Zenn"),"\uc758 \uc0c1\ud0dc\uad00\ub9ac\uc5d0\ub3c4 \uc0ac\uc6a9\ud558\uace0 \uc788\ub294\ub370\ub2e4\uac00, \uc9c0\uae08 \uc810\uc720\ub3c4 \ud655\ub300\ud558\uace0 \uc788\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")," \uad6c\ud604 \uc608\uc2dc\ub294 \uc885\uc885 \ubcf4\uc774\ubbc0\ub85c \uc774\ubc88\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," \uc0ac\uc6a9\uc608\uc2dc\ub97c \uc18c\uac1c\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"\uc560\ucd08\uc5d0-recoil\uc774-\ubb54\uc8e0"},"\uc560\ucd08\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"h2"},"Recoil"),"\uc774 \ubb54\uc8e0?"),(0,r.kt)("p",null,"\uad6c\ud604\ud558\uae30 \uc804\uc5d0 \uba3c\uc800 ",(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\uc5d0 \ub300\ud574 \ub9d0\ud574\uc57c\uaca0\uc8e0."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Facebook"),"\uc774 2020\ub144 5\uc6d4\uc5d0 \ubc1c\ud45c\ud55c \uc0c1\ud0dc\uad00\ub9ac \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. ",(0,r.kt)("a",{parentName:"p",href:"https://recoiljs.org/"},"\uacf5\uc2dd")),(0,r.kt)("p",null,"\ube44\uc2b7\ud558\uac8c \uc0c1\ud0dc\uad00\ub9ac\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux"),"\uac00 \ub098\uc0ac\ud558\ub098 \ube60\uc9c4 \uc778\uc0c1\uc778\ub370, \uc2e4\uc81c\ub85c \uc0ac\uc6a9\ud558\uba74 \uaf64 \ubcc4\ub0a9\ub2c8\ub2e4.\n\uc9c0\ub098\uce60 \uc815\ub3c4\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\ub370\uc774\ud130 \uc2a4\ud1a0\uc5b4\ub97c \uc9d1\uc57d\ud560 \uac83\uc778\uac00 \uc544\ub2cc\uac00")," \uac1c\ub150\uc774 \uc77c\ubc18\uc801 \uac1c\ub150\uacfc \ud06c\uac8c \ub2e4\ub978 \uac83\uc774 \uc2dc\uc2a4\ud15c\uc5d0 \uba4b\ub300\ub85c \ubc18\uc601\ub41c \uc774\ubbf8\uc9c0\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610 ",(0,r.kt)("inlineCode",{parentName:"p"},"React Hook"),"\uc640\ub3c4 \uc798 \uc5b4\uc6b0\ub7ec\uc9c0\uba74\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"useState")," \uac19\uc740 \uac83\uc744 \uc0ac\uc6a9\ud558\uba74\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Functional Component + Hooks"),"\ub97c \ubc14\ud0d5\uc73c\ub85c \uac1c\ubc1c\ud588\ub2e4\uba74 \uae08\ubc29 \uc774\ud574\ub420 \uac83\uc774\ub77c \uc0dd\uac01\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\uc8fc\uc758\ud560 \uc810\uc740 \ud604\uc7ac\ub294 \uc544\uc9c1 ",(0,r.kt)("inlineCode",{parentName:"strong"},"Experimental")," \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc774\ubbc0\ub85c \uc55e\uc73c\ub85c\uc758 \uc9c0\uc6d0\uac19\uc740\uac78 \uace0\ub824\ud574\uc11c \uc81c\ud488\uc5d0 \uc6b1\uc5ec\ub123\ub294 \uac74 \uc544\uc9c1 \uc774\ub974\ub2e4 \uc0dd\uac01\ud569\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\uad6c\ud604-\uc0d8\ud50c"},"\uad6c\ud604 \uc0d8\ud50c"),(0,r.kt)("p",null,"\uad6c\ud604\ud55c \uc571\uc758 \uc0d8\ud50c\uc740 \uc774\ub7ec\ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sample app",src:n(2085).Z,width:"620",height:"273"})),(0,r.kt)("p",null,"\ud754\ud788 \ubcf4\ub294 TODO \uc571\uc73c\ub85c \uc791\uc5c5 \ucd94\uac00, \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ubc84\uc804-\uc815\ubcf4"},"\ubc84\uc804 \uc815\ubcf4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:react@17.0.1"},"react@17.0.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:react-dom@17.0.1"},"react-dom@17.0.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"mailto:recoil@0.1.2"},"recoil@0.1.2"))),(0,r.kt)("h3",{id:"\uad6c\ud604"},"\uad6c\ud604"),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc21c\uc11c\ub85c \uad6c\ud604\uc744 \ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"\ud504\ub85c\uc81d\ud2b8-\ub9cc\ub4e4\uae30"},"\ud504\ub85c\uc81d\ud2b8 \ub9cc\ub4e4\uae30"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app recoil-ts-sample --template typescript\ncd recoil-ts-sample\n")),(0,r.kt)("h4",{id:"recoil-\uc124\uce58"},"Recoil \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add recoil\n")),(0,r.kt)("h4",{id:"types-\uc791\uc131"},"types \uc791\uc131"),(0,r.kt)("p",null,'\uc774 \uc571\uc744 \ub2e4\ub8f0 "\uc791\uc5c5" ',(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\ub97c \ub9cc\ub4ed\uc2dc\ub2e4.\n\uc704\uce58\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/types/Todo.ts"),"\n\uac04\ub2e8\ud558\uac8c ",(0,r.kt)("inlineCode",{parentName:"p"},"title"),"\ub9cc \uac16\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Todo"),"\ud0c0\uc785\ub97c \uc815\uc758\ud588\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Todo = {\n  title: string;\n};\nexport default Todo;\n")),(0,r.kt)("h4",{id:"atom-\uc791\uc131"},"Atom \uc791\uc131"),(0,r.kt)("p",null,"\uc774\uc5b4\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," \uc791\uc131\n",(0,r.kt)("inlineCode",{parentName:"p"},"Atom"),"\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\uc5d0\uc11c \ub370\uc774\ud130\uc800\uc7a5\uc18c\ub97c \ub9d0\ud558\uba70 ",(0,r.kt)("inlineCode",{parentName:"p"},"atom()"),"\uc774\ub77c \uc120\uc5b8\ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"atom()"),"\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"AtomOptions")," \ud0c0\uc785 \uc624\ube0c\uc81d\ud2b8\ub97c \uc804\ub2ec\ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"AtomOptions"),"\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// atom.d.ts\nexport interface AtomOptions<T> {\n  key: NodeKey;\n  default: RecoilValue<T> | Promise<T> | T;\n  effects_UNSTABLE?: ReadonlyArray<AtomEffect<T>>;\n  dangerouslyAllowMutability?: boolean;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\ub294 \ud544\uc218\uc785\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\ub294 \uc571 \uc804\uccb4\uc5d0 \uc601\ud5a5\uc744 \ub07c\uce58\ub294 \ubb38\uc790\uc5f4, ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," \uc5ed\ud560\ub85c \uc0c1\ud0dc\uad00\ub9ac \ud589\ud558\uace0 \uc2f6\uc740 \uac12 \ucd08\uae30\uac12\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,'\uc608\ub97c \ub4e4\uc5b4 \uc571\uc5d0\uc11c "\uc791\uc5c5 \ubaa9\ub85d"\ub97c ',(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," \uc120\uc5b8\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/atoms/TodoListAtom.ts\nimport { atom } from 'recoil';\nimport Todo from '../types/Todo';\n\nexport const todoListState = atom<Todo[]>({\n  // key\ub294 \"todoList\"\n  key: 'todoList',\n\n  // \ucd08\uae30\uac12\uc73c\ub85c 3\uac74\uc758 \uc791\uc5c5\uc744 \uac16\ub294 \ubc30\uc5f4 \uc120\uc5b8\n  default: [{ title: 'one' }, { title: 'two' }, { title: 'three' }],\n});\n")),(0,r.kt)("p",null,'\uc0c1\ub2e8\uc5d0 "\ucd94\uac00\ud558\uace0 \uc2f6\uc740 \uc791\uc5c5\uba85 \ud544\ub4dc", "\uac80\uc0c9\ubb38\uc790\uc5f4 \ud544\ub4dc" \uc0c1\ud0dc\uc778 ',(0,r.kt)("inlineCode",{parentName:"p"},"Atom"),"\ub97c \uc120\uc5b8\ud569\uc2dc\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/atome/TodoTitleFormAtom.ts\nimport { atom } from 'recoil';\n\nexport const todoTitleFormState = atom<string>({\n  key: 'todoTitleForm',\n  default: '',\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/atoms/SearchTextFromAtom.ts\nimport { atom } from 'recoil';\n\nexport const searchTextFormState = atom<string>({\n  key: 'searchTextForm',\n  default: '',\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," \uc120\uc5b8\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Store"),"\ub77c \uc0dd\uac01\ud558\uba74 \uc774\ud574\ud558\uae30 \uc26c\uc6b8\uc9c0\ub3c4 \ubaa8\ub974\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h4",{id:"selector-\uc791\uc131"},"Selector \uc791\uc131"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Selctor"),"\ub3c4 \ub611\uac19\uc774 \uc791\uc131\ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Selctor"),"\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," \uac12\uc744 \uc0ac\uc6a9\ud574 \uc5b4\ub5a4 \uacc4\uc0b0\uc774\ub098 \uac00\uacf5, \ubd80\uc791\uc6a9\uc744 \ucc98\ub9ac\ud574 \uacb0\uacfc\ub97c \ubc18\ud658\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,'\uc774\ubc88 \uc571\uc5d0\uc11c\ub294 "\ud654\uba74\uc5d0 \uac8c\uc2dc\ub418\ub294 \uc791\uc5c5\ubaa9\ub85d"\uc774 ',(0,r.kt)("inlineCode",{parentName:"p"},"Selector"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n\uc774\ub294 \ud654\uba74\uc5d0 \uac8c\uc2dc\ub418\ub294 \uc791\uc5c5\uc740 ",(0,r.kt)("strong",{parentName:"p"},"[\uc791\uc5c5 \uc804\uccb4]","\uc5d0\uc11c ","[\uac80\uc0c9 \ud544\ub4dc\uc5d0 \uc785\ub825\ub41c \ubb38\uc790]","\uc5d0 \ud574\ub2f9\ud558\ub294 \ubb38\uc790\ub97c \ud3ec\ud568\ud558\ub294 \uac83\uc744 \ubcf4\uc774\uae30")," \uc704\ud568\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Selector")," \uc120\uc5b8\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"selector()"),"\ub85c \ud589\ud569\ub2c8\ub2e4.\n\uc778\uc218\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"ReadOnlySelectorOptions")," \ud0c0\uc785 \uac1d\uccb4\ub97c \uc804\ub2ec\ud574\uc57c\ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ReadOnlySelectorOptions")," \ud0c0\uc785\uc740 \uc774\ub807\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface ReadOnlySelectorOptions<T> {\n  key: string;\n  get: (opts: { get: GetRecoilValue }) => Promise<T> | RecoilValue<T> | T;\n  dangerouslyAllowMutability?: boolean;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Atom"),"\ucc98\ub7fc ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc5ec\uae30\uc5d0 ","[\uc5b4\ub5bb\uac8c \uac12\uc744 \uc5bb\uc744\uae4c]"," \uc815\uc758\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),"\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"get"),"\uc778\uc218\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"GetRecoilValue")," \ud0c0\uc785\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"get"),"(\ud504\ub85c\ud37c\ud2f0 \uba85\uc774\ub791 \uac19\uc740\uac8c \uc880 \uad34\uc0c1\ud558\uc9c0\ub9cc...)\ub97c \ud504\ub85c\ud37c\ud2f0\uc5d0 \uac16\ub294 \uac1d\uccb4\ub97c \ubc1b\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Selector"),"\ub97c \uc0ac\uc6a9\ud558\uba74 \uc774\ub807\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/selectors/SearchedTodoListSelctor.ts\nimport { selector } from 'recoil';\nimport { todoListState } from '../atoms/TodoListAtom';\nimport { searchTextFormState } from '../atoms/SearchTextFormAtom';\nimport Todo from '../types/Todo';\n\nexport const searchedTodoListSelector = selector<Todo[]>({\n  key: 'searchedTodoListSelector',\n  // get\uc740 { get }\ub97c \uc778\uc218\ub85c \ubc1b\ub294 \ud568\uc218\n  get: ({ get }) => {\n    // \uc778\uc218 get\ub97c \uc0ac\uc6a9\ud574 Atom\uc5d0\uc11c \ucd5c\uc2e0 \uac12\uc758 \ubc1b\ub294\ub2e4(\uc791\uc5c5 \ubaa9\ub85d)\n    const todoList: Todo[] = get(todoListState);\n    // \ub611\uac19\uc774 \uac80\uc0c9 \ud544\ub4dc \ubb38\uc790\uc5f4 \ucde8\ub4dd\n    const searchText: string = get(searchTextFormState);\n    // \uac80\uc0c9 \ud544\ub4dc\uc5d0 \uc785\ub825\ud558\ub294 \uacbd\uc6b0 \uadf8 \uc870\uac74\uc5d0 \ub9de\ub294 \uc791\uc5c5\ub9cc \ubc18\ud658\n    return searchText\n      ? todoList.filter((t) => t.title.includes(searchText))\n      : todoList;\n  },\n});\n")),(0,r.kt)("h4",{id:"root-\uc120\uc5b8"},"Root \uc120\uc5b8"),(0,r.kt)("p",null,"\uc774\uac83\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"Recoil")," \uc0c1\ud0dc\uad00\ub9ac\ub97c \ud589\ud558\ub294 \uc900\ube44\ub97c \ub9c8\ucce4\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\ub85c \uc0c1\ud0dc\uad00\ub9ac \ud558\uae30 \uc704\ud574\uc11c\ub294 \uc0c1\ud0dc\uad00\ub9ac\ub97c \ud558\uace0 \uc2f6\uc740 \uac01 \uc7a5\uc18c\ub97c ",(0,r.kt)("inlineCode",{parentName:"p"},"<RecoilRoot>"),"\ub85c \uac10\uc2f8\uc57c \ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Redux"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"<Provider>"),"\ub85c \uac10\uc2f8\ub294 \uac83\uacfc \uac19\uc740 \ub290\ub08c\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx"),"\uc548\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"RecoilRoot"),"\ub97c \uc0ac\uc6a9\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"App"),"\ub97c \uac10\uc309\uc2dc\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// index.tsx\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { RecoilRoot } from 'recoil';\nimport App from './App';\n\nReactDOM.render(\n  <React.StrictMode>\n    <RecoilRoot>\n      <App />\n    </RecoilRoot>\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n\n/// ...\ud6c4\ub7b5\n")),(0,r.kt)("h4",{id:"atom-selector\uc5d0\uc11c-\uac12\uc744-\uc5bb\uae30"},"Atom, Selector\uc5d0\uc11c \uac12\uc744 \uc5bb\uae30"),(0,r.kt)("p",null,"\uadf8\ub7fc \ucef4\ud3ec\ub10c\ud2b8 \uc548\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector"),"\uc5d0\uac8c \uac12\uc744 \uc5bb\uc5b4\ubd05\uc2dc\ub2e4.\n\uac12\uc744 \uc5bb\uae30 \uc704\ud574\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"useRecoilValue()"),"\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"useRecoilValue()"),"\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector"),"\uac00 \uc778\uc218\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4.\n\uadf8 \ubc18\ud658 \uac12\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector"),"\uac00 \ucd5c\uc2e0 \uac12\uc73c\ub85c \ubc18\ud658\ud574\uc8fc\uc8e0."),(0,r.kt)("p",null,"[\uc791\uc5c5 \ubaa9\ub85d]","\uc744 \uac8c\uc2dc\ud558\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"TodoList.tsx"),"\ub294 \uc774\ub807\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/component/TodoList.tsx\n\nimport { useRecoilValue } from 'recoil';\nimport { searchedTodoListSelector } from '../selectors/SearchedTodoListSelector';\nimport Todo from '../types/Todo';\n\nconst TodoList: React.FC = () => {\n  // useRecoilValue\uc5d0 searchedTodoListSelctor\ub97c \uc804\ub2ec\n  // \ubc18\ud658 \uac12\uc740 searchedTodoListSelector\uc758 get()\uc73c\ub85c \uc815\uc758\ud55c Todo[]\n  const list: Todo[] = useRecoilValue(searchedTodoListSelector);\n  return (\n    <div>\n      <p>\uc791\uc5c5 \ubaa9\ub85d</p>\n      <ul>\n        {list.map((todo: Todo, i: number) => {\n          return <li key={`${todo.title}_${i}`}>{todo.title}</li>;\n        })}\n      </ul>\n    </div>\n  );\n};\n\nexport default TodoList;\n")),(0,r.kt)("h4",{id:"atom-\uac12-\ubcc0\uacbd"},(0,r.kt)("inlineCode",{parentName:"h4"},"Atom")," \uac12 \ubcc0\uacbd"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Redux"),"\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Store")," \uac12\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Action"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Dispatch"),"\ub85c \ubcc0\uacbd\ud558\uba74 \ucc38\uc870\ud558\uace0 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ub9ac\ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\uc5d0\uc11c\ub3c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," \uac12\uc744 \ubcc0\uacbd\ud558\uba74 \ucc38\uc870\ud558\uace0 \uc788\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Selector"),"\ub098 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc790\ub3d9\ubc18\uc601\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," \uac12\uc744 \ubcc0\uacbd\ud558\uae30 \uc704\ud574\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"useSetRecoilState()"),"\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," \uac12\uc744 \uc778\uc218\ub85c \uc8fc\uba74 \ub429\ub2c8\ub2e4.\n\ubc18\ud658 \uac12\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"SetterOrUpdater<T>")," \ud0c0\uc785 \ud568\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4.\n\uc774\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom")," \uac12\uc5d0 \ub300\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"Setter")," \ud568\uc218 \uac19\uc740 \uac83\uc73c\ub85c \uc774 \ud568\uc218\ub97c \uacbd\uc720\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"Atom"),"\ub97c \uac31\uc2e0\ud558\uba74 \uc55e\uc5d0 \uc7ac\uacc4\uc0b0\ucc98\ub9ac\ub97c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 ","[\ucd94\uac00\ud558\ub294 \uc791\uc5c5\uba85\uc744 \uc785\ub825\ud558\ub294 \ud544\ub4dc]"," \ucef4\ud3ec\ub10c\ud2b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"TitleForm.tsx"),"\ub294 \uc774\ub807\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/component/TitleForm.tsx\n\nimport { useCallback } from 'react';\nimport { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';\nimport { todoTitleFormState } from '../atoms/TodoTitleFormAtom';\n\nconst TitleForm: React.FC = () => {\n  // useRecoilValue\ub85c todoTitleFormState \uc5bb\uae30\n\n  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);\n  // useSetRecoilState\ub85c todoTitleFormState\uc758 \uac12\uc744 \uac31\uc2e0\ud558\ub294 Setter \ud568\uc218 \uc5bb\uae30\n\n  const setTodoTitleFormValue: SetterOrUpdater<string> =\n    useSetRecoilState(todoTitleFormState);\n  // \ud14d\uc2a4\ud2b8 \ud544\ub4dc onChange \ucc98\ub9ac\n  const onChange = useCallback(\n    (event: React.ChangeEvent<HTMLInputElement>) => {\n      // \uc55e\uc5d0 \uc5bb\uc740 setTodoTitleFormValue\uc5d0 \uac31\uc2e0\ud558\uace0 \uc2f6\uc740 \uc0c8 \uac12 \uc804\ub2ec \uc2e4\ud589\n      setTodoTitleFormValue(event.target.value);\n    },\n    [setTodoTitleFormValue]\n  );\n\n  return (\n    <label>\n      \uc791\uc5c5\uba85:\n      <input\n        type=\"text\"\n        value={todoTitleFormValue}\n        onChange={onChange}\n        name=\"title\"\n        style={{ margin: 12 }}\n      />\n    </label>\n  );\n};\n\nexport default TitleForm;\n")),(0,r.kt)("p",null,"\ub611\uac19\uc774 ","[\ubb38\uc790\uc5f4 \uc785\ub825\ud558\ub294 \ud544\ub4dc]"," \ucef4\ud3ec\ub10c\ud2b8\ub3c4 \ub9cc\ub4e4\uc5b4 \ub461\uc2dc\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/component/SearchForm.ts\n\nimport { useCallback } from 'react';\nimport { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';\nimport { searchTextFormState } from '../atoms/SearchTextFormAtom';\n\nconst SearchForm: React.FC = () => {\n  const searchTextFormValue: string = useRecoilValue(searchTextFormState);\n  const setSearchTextFormValue: SetterOrUpdater<string> =\n    useSetRecoilState(searchTextFormState);\n  const onChange = useCallback(\n    (event: React.ChangeEvent<HTMLInputElement>) => {\n      setSearchTextFormValue(event.target.value);\n    },\n    [setSearchTextFormValue]\n  );\n\n  return (\n    <label>\n      \uac80\uc0c9:\n      <input\n        type=\"text\"\n        value={searchTextFormValue}\n        onChange={onChange}\n        name=\"title\"\n        style={{ margin: 12 }}\n      />\n    </label>\n  );\n};\n\nexport default SearchForm;\n")),(0,r.kt)("p",null,"[\uc791\uc5c5 \ucd94\uac00]"," \ubc84\ud2bc \ucef4\ud3ec\ub10c\ud2b8\ub3c4\uc694"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// src/component/AddButton.tsx\n\nimport { useCallback } from 'react';\nimport { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil';\nimport { todoTitleFormState } from '../atoms/TodoTitleFormAtom';\nimport { todoListState } from '../atoms/TodoListAtom';\nimport Todo from '../types/Todo';\n\nconst AddButton: React.FC = () => {\n  const todoList: Todo[] = useRecoilValue(todoListState);\n  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);\n  const setTodoList: SetterOrUpdater<Todo[]> = useSetRecoilState(todoListState);\n  const setTitleFormValue: SetterOrUpdater<string> =\n    useSetRecoilState(todoTitleFormState);\n\n  const onClick = useCallback(() => {\n    setTodoList([...todoList, { title: todoTitleFormValue }]);\n    // \uc791\uc5c5\uc744 \ucd94\uac00 \ud6c4 \uc785\ub825\ub780 \ube44\uc6b0\uae30\n    setTitleFormValue('');\n  }, [todoList, todoTitleFormValue, setTodoList, setTitleFormValue]);\n\n  return <button onClick={onClick}>\ucd94\uac00</button>;\n};\n\nexport default AddButton;\n")),(0,r.kt)("h4",{id:"app-\uc218\uc815"},"App \uc218\uc815"),(0,r.kt)("p",null,"\ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc744 \uc644\uc131\ud588\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx"),"\ub97c \uc218\uc815\ud574\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud569\uc2dc\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// App.tsx\nimport './App.css';\nimport TitleForm from './component/TitleForm';\nimport AddButton from './component/AddButton';\nimport TodoList from './component/TodoList';\nimport SearchForm from './component/SearchForm';\n\nconst App: React.FC = () => {\n  return (\n    <div style={{ margin: 12 }}>\n      <div>\n        <TitleForm />\n        <AddButton />\n      </div>\n      <SearchForm />\n      <TodoList />\n    </div>\n  );\n};\n\nexport default App;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn start\n")),(0,r.kt)("h3",{id:"\uc774\ubc88\uc5d0-\ub9cc\ub4e0-\uac83"},"\uc774\ubc88\uc5d0 \ub9cc\ub4e0 \uac83"),(0,r.kt)("p",null,"\uc704\uc758 \uc18c\uc2a4\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"GitHub"),"\uc5d0 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ShutoYamada/recoil-ts-sample"},"\uacf5\uac1c"),"\ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4.\n\uc798 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4\uba74 \ucc38\uc870\ud574\uc8fc\uc2dc\uae38 \ubc14\ub78d\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"\ub9fa\uc74c\ub9d0"},"\ub9fa\uc74c\ub9d0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\uc5d0 \ub300\ud574 ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript"),"\ub97c \uc0ac\uc6a9\ud55c \uac04\ub2e8\ud55c ToDo \uc571\uc744 \uc18c\uac1c\ud588\uc2b5\ub2c8\ub2e4.\n\ubcf4\ud1b5\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux"),"\ub97c \uc0ac\uc6a9\ud574 \uac1c\ubc1c\ud558\uc9c0\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"Recoil"),"\uc774 \ub354 \uac04\uacb0\ud558\uba74\uc11c \uc9c1\uad00\uc801\uc774\ubbc0\ub85c \uc774\ud574\uac00 \ub354 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ub610 ",(0,r.kt)("inlineCode",{parentName:"p"},"Hooks")," \ube44\uc2b7\ud55c \ub290\ub08c\uc774\ubbc0\ub85c \uc774\uac83\uc774 \uac15\uc810\uc774 \ub420 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc544\uc9c1 ",(0,r.kt)("inlineCode",{parentName:"p"},"Experimental"),"\uc774\ubbc0\ub85c \uc55e\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uac10\uac01\uc774\ub098 \uc9c0\uc6d0\uc774 \ud06c\uac8c \ubcc0\ud560 \uac00\ub294\u3147\uc131\ub3c4 \uc788\uc9c0\ub9cc \uac1c\uc778\uc801\uc73c\ub85c\ub294 \ub354 \uc810\uc720\uac00 \ub9ce\uc544\uc84c\uc73c\uba74 \ud558\uba74 \uc720\uc775\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4."))}u.isMDXComponent=!0},2085:function(e,t,n){t.Z=n.p+"assets/images/imasara-c33248bd87e1834679c1d0c2fd7821cb.png"}}]);