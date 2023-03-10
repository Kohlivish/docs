"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[67],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1564:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(7294),o=n(6010),a=n(9960),i=n(3438),s=n(3919),c=n(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l.cardContainer)},n)}function u(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:a},n," ",a),i&&r.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function p(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return r.createElement(u,{href:t.href,icon:n,title:t.label,description:o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},9268:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),o=n(6010),a=n(3438),i=n(1564);function s(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(c,{items:n.items,className:t})}function c(e){const{items:t,className:n}=e;if(!t)return r.createElement(s,e);const c=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(i.Z,{item:e})))))}},7525:(e,t,n)=>{n.d(t,{n:()=>a});var r=n(4477);function o(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&o(t.items)}}function a(e){const t=(0,r.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)o(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},2075:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(9268),i=n(7525);const s={},c="Getting Started",l={unversionedId:"README",id:"README",title:"Getting Started",description:"Use Oasis",source:"@site/docs/README.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/README.mdx",tags:[],version:"current",lastUpdatedAt:1678435523,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{}},d={},u=[{value:"Use Oasis",id:"use-oasis",level:2},{value:"Get Involved",id:"get-involved",level:2},{value:"Run your own Node",id:"run-your-own-node",level:2},{value:"DApps and ParaTime Developers",id:"dapps-and-paratime-developers",level:2},{value:"Oasis Core Contributors",id:"oasis-core-contributors",level:2}],p={toc:u},m="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("h2",{id:"use-oasis"},"Use Oasis"),(0,o.kt)("p",null,"These guides provide general overview of the Oasis Network and introduce basic\ntools for you to get started."),(0,o.kt)(a.Z,{items:[(0,i.n)("/general/oasis-network/"),(0,i.n)("/general/manage-tokens/")],mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"get-involved"},"Get Involved"),(0,o.kt)("p",null,"Contains information on official channels to get in touch with the Oasis Network\ndevelopers and how to contribute to the network."),(0,o.kt)(a.Z,{items:[(0,i.n)("/get-involved/"),(0,i.n)("https://oasisrose.garden"),(0,i.n)("/get-involved/run-node"),(0,i.n)("/get-involved/oasis-core")],mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"run-your-own-node"},"Run your own Node"),(0,o.kt)("p",null,"If you want to run your own Oasis node, the following section will provide you\nwith guides on the current Mainnet and Testnet network parameters and how to\nset up your node, let it be a validator node, perhaps running a ParaTime or\njust a simple client node for your server to submit transactions and perform\nqueries on the network."),(0,o.kt)(a.Z,{items:[(0,i.n)("/node/"),(0,i.n)("/node/mainnet/"),(0,i.n)("/node/testnet/"),(0,i.n)("/node/run-your-node")],mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"dapps-and-paratime-developers"},"DApps and ParaTime Developers"),(0,o.kt)("p",null,"These two sections are focused on developers building applications on top of\nthe Oasis Network. Smart contract developers will be interested in the\nEVM-compatible Emerald and confidential Sapphire ParaTimes. For maximum\nsecurity and confidentiality, the Oasis team designed a novel Cipher ParaTime\nexecuting Wasm smart contracts and which allows you to develop smart contracts\nin Rust using the Oasis Contract SDK. Finally, developers can learn how to\nbuild their own ParaTime running on the Oasis Network."),(0,o.kt)(a.Z,{items:[(0,i.n)("/dapp/emerald/"),(0,i.n)("/dapp/sapphire/"),(0,i.n)("/dapp/cipher/"),(0,i.n)("/paratime/")],mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"oasis-core-contributors"},"Oasis Core Contributors"),(0,o.kt)("p",null,"Whether you want to contribute your code to the core components of the Oasis\nNetwork or just learn more about the Oasis core, this is the place for you."),(0,o.kt)(a.Z,{items:[(0,i.n)("/core/")],mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);