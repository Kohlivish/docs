"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[1102],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1564:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),r=a(6010),i=a(9960),o=a(3438),s=a(3919),l=a(5999);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){let{href:t,children:a}=e;return n.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",p.cardContainer)},a)}function d(e){let{href:t,icon:a,title:i,description:o}=e;return n.createElement(c,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",p.cardTitle),title:i},a," ",i),o&&n.createElement("p",{className:(0,r.Z)("text--truncate",p.cardDescription),title:o},o))}function u(e){let{item:t}=e;const a=(0,o.Wl)(t);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const a=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:a,title:t.label,description:r?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},7525:(e,t,a)=>{a.d(t,{n:()=>i});var n=a(4477);function r(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&r(t.items)}}function i(e){const t=(0,n.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)r(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},396:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),i=a(1564),o=a(7525);const s={description:"Guide to creating secure dApps on Sapphire"},l="Guide",p={unversionedId:"dapp/sapphire/guide",id:"dapp/sapphire/guide",title:"Guide",description:"Guide to creating secure dApps on Sapphire",source:"@site/docs/dapp/sapphire/guide.mdx",sourceDirName:"dapp/sapphire",slug:"/dapp/sapphire/guide",permalink:"/dapp/sapphire/guide",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/dapp/sapphire/guide.mdx",tags:[],version:"current",lastUpdatedAt:1678435523,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{description:"Guide to creating secure dApps on Sapphire"},sidebar:"developers",previous:{title:"Quickstart",permalink:"/dapp/sapphire/quickstart"},next:{title:"Browser Support",permalink:"/dapp/sapphire/browser"}},c={},d=[{value:"Oasis Consensus Layer and Sapphire ParaTime",id:"oasis-consensus-layer-and-sapphire-paratime",level:2},{value:"Testnet and Mainnet",id:"testnet-and-mainnet",level:2},{value:"Sapphire vs Ethereum",id:"sapphire-vs-ethereum",level:2},{value:"Integrating Sapphire",id:"integrating-sapphire",level:2},{value:"Writing Secure dApps",id:"writing-secure-dapps",level:2},{value:"Wallets",id:"wallets",level:3},{value:"Languages &amp; Frameworks",id:"languages--frameworks",level:3},{value:"Transactions &amp; Calls",id:"transactions--calls",level:3},{value:"Contract State",id:"contract-state",level:3},{value:"Contract Logs",id:"contract-logs",level:3},{value:"See also",id:"see-also",level:2}],u={toc:d},h="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(h,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guide"},"Guide"),(0,r.kt)("p",null,"This page mainly describes the differences between Sapphire and Ethereum\nsince there are a number of excellent tutorials on developing for Ethereum.\nIf you don't know where to begin, the ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/tutorial"},"Hardhat tutorial"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.soliditylang.org/en/v0.8.15/solidity-by-example.html"},"Solidity docs"),", and\n",(0,r.kt)("a",{parentName:"p",href:"/dapp/emerald/writing-dapps-on-emerald"},"Emerald dApp tutorial")," are great places to start. You can continue following\nthis guide once you've set up your development environment and have deployed\nyour contract to a non-confidential EVM network (e.g., Ropsten, Emerald)."),(0,r.kt)("h2",{id:"oasis-consensus-layer-and-sapphire-paratime"},"Oasis Consensus Layer and Sapphire ParaTime"),(0,r.kt)("p",null,"The Oasis Network consists of the consensus layer and a number of ParaTimes.\nParaTimes are independent replicated state machines that settle transactions\nusing the consensus layer (to learn more, check the ",(0,r.kt)("a",{parentName:"p",href:"/general/oasis-network/"},"Oasis Network Overview"),"). Sapphire is a ParaTime which implements the Ethereum\nVirtual Machine (EVM)."),(0,r.kt)("p",null,"The minimum and also expected block time in Sapphire is ",(0,r.kt)("strong",{parentName:"p"},"6 seconds"),". Any\nSapphire transaction will require at least this amount of time to be executed,\nand probably no more."),(0,r.kt)("p",null,"ParaTimes, Sapphire included, are not allowed to directly access your tokens stored\nin consensus layer accounts. You will need to ",(0,r.kt)("em",{parentName:"p"},"deposit")," tokens from your consensus\naccount to Sapphire. Consult the ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/how-to-transfer-rose-into-paratime"},"How to transfer ROSE into an EVM ParaTime")," chapter to learn more."),(0,r.kt)("h2",{id:"testnet-and-mainnet"},"Testnet and Mainnet"),(0,r.kt)("p",null,"Sapphire is deployed on both Testnet and Mainnet. The Testnet should be\nconsidered unstable software and may have its state wiped at any time. As\nthe name implies, only use the Testnet for testing unless you're testing how\nangry your users get when state is wiped."),(0,r.kt)("admonition",{title:"Never deploy production services on Testnet",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Because Testnet state can be wiped in the future, you should ",(0,r.kt)("strong",{parentName:"p"},"never")," deploy a\nproduction service on the Testnet! Just don't do it!"),(0,r.kt)("p",{parentName:"admonition"},"Also note that while the Testnet does use actual TEEs, due to experimental\nsoftware and different security parameters, ",(0,r.kt)("strong",{parentName:"p"},"confidentiality of Sapphire on the\nTestnet is not guaranteed")," -- all transactions and state published on the\nSapphire Testnet should be considered public.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For testing purposes, visit our ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.testnet.oasis.dev/"},"Testnet faucet")," to obtain some TEST which you\ncan then use on the Sapphire Testnet to pay for gas fees. The faucet supports\nsending TEST both to your consensus layer address or to your address inside the\nParaTime.")),(0,r.kt)("h2",{id:"sapphire-vs-ethereum"},"Sapphire vs Ethereum"),(0,r.kt)("p",null,"Sapphire is generally compatible with Ethereum, the EVM, and all of the\nuser and developer tooling that you already use. There are a few breaking changes,\nbut we think that you'll like them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Contract state is only visible to the contract that wrote it. With respect\nto the contract API, it's as if all state variables are declared as ",(0,r.kt)("inlineCode",{parentName:"li"},"private"),", but\nwith the further restriction that not even full nodes can read the values. Public or\naccess-controlled values are provided instead through explicit getters."),(0,r.kt)("li",{parentName:"ul"},"Transactions and calls are end-to-end encrypted into the contract. Only the caller\nand the contract can see the data sent to/received from the ParaTime. This ends up\ndefeating most of the utility of block explorers, however."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"from")," address using of calls is derived from a signature attached to the call.\nUnsigned calls have their sender set to the zero address. This allows contract authors\nto write getters that release secrets to authenticated callers, but without\nrequiring a transaction to be posted on-chain.")),(0,r.kt)("p",null,"In addition to confidentiality, you get a few extra benefits including the ability to generate private\nentropy, and make signatures on-chain. An example of a dApp that uses both is a HSM contract\nthat generates an Ethereum wallet and signs transactions sent to it via transactions."),(0,r.kt)("p",null,"Otherwise Sapphire is like Emerald, which is like a fast, cheap Ethereum."),(0,r.kt)("h2",{id:"integrating-sapphire"},"Integrating Sapphire"),(0,r.kt)("p",null,"Once ROSE tokens are ",(0,r.kt)("a",{parentName:"p",href:"/general/manage-tokens/how-to-transfer-rose-into-paratime"},"deposited into Sapphire"),", it should be painless for users to begin\nusing dApps. To achieve this ideal user experience, we have to modify the dApp a little,\nbut it's made simple by our compatibility library, ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@oasisprotocol/sapphire-paratime"},"@oasisprotocol/sapphire-paratime"),"."),(0,r.kt)("p",null,"There are compatibility layers in other languages, which may be found in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/sapphire-paratime/tree/main/clients"},"the repo"),"."),(0,r.kt)("h2",{id:"writing-secure-dapps"},"Writing Secure dApps"),(0,r.kt)("h3",{id:"wallets"},"Wallets"),(0,r.kt)("p",null,"Sapphire is compatible with popular self-custodial wallets including MetaMask,\nLedger, Brave, and so forth. You can also use libraries like Web3.js and Ethers\nto create programmatic wallets. In general, if it generates secp256k1 signatures,\nit'll work just fine."),(0,r.kt)("h3",{id:"languages--frameworks"},"Languages & Frameworks"),(0,r.kt)("p",null,"Sapphire is programmable using any language that targets the EVM, such as Solidity\nand Vyper. If you prefer to use an Ethereum framework like Hardhat or Truffle, you\ncan also use those with Sapphire; all you need to do is set your Web3 gateway URL.\nYou can find the details of the Oasis Sapphire Web3 gateway\n",(0,r.kt)("a",{parentName:"p",href:"/dapp/sapphire#web3-gateway"},"here"),"."),(0,r.kt)("h3",{id:"transactions--calls"},"Transactions & Calls"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Client, Key Manager, Compute Node diagram",src:a(8332).Z,width:"765",height:"486"})),(0,r.kt)("p",null,"The figure above illustrates the flow of a confidential smart contract\n",(0,r.kt)("em",{parentName:"p"},"transaction")," executed on the Sapphire ParaTime."),(0,r.kt)("p",null,"Transactions and calls must be encrypted and signed for maximum security.\nYou can use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@oasisprotocol/sapphire-paratime"},"@oasisprotocol/sapphire-paratime")," JS package to make your life\neasy. It'll handle cryptography and signing for you."),(0,r.kt)("p",null,"You should be aware that taking actions based on the value of private data may\nleak the private data through side channels like time spent and gas use. If you\nneed to branch on private data, you should in most cases ensure that both\nbranches exhibit similar time/gas and storage patterns."),(0,r.kt)("p",null,"You can also make confidential smart contract ",(0,r.kt)("em",{parentName:"p"},"calls")," on Sapphire. If you\nuse ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," for access control in your contract, the call ",(0,r.kt)("strong",{parentName:"p"},"must be\nsigned"),", otherwise ",(0,r.kt)("inlineCode",{parentName:"p"},"msg.sender")," will be zeroed. On the other hand, set the\n",(0,r.kt)("inlineCode",{parentName:"p"},"from")," address to all zeros, if you want to avoid annoying signature popups in\nthe user's wallet for calls that do not need to be signed. The JS library will\ndo this for you."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Inside the smart contract code, there is no way of knowing whether the\nclient's call data were originally encrypted or not.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Detailed confidential smart contract transaction flow on Sapphire"),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(1401).Z}))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Detailed confidential smart contract call flow on Sapphire"),(0,r.kt)("div",null,(0,r.kt)("img",{src:a(971).Z}))),(0,r.kt)("h3",{id:"contract-state"},"Contract State"),(0,r.kt)("p",null,"The Sapphire state model is like Ethereum's except for all state being encrypted\nand not accessible to anyone except the contract. The contract, executing in an\nactive (attested) Oasis compute node is the only entity that can request its\nstate encryption key from the Oasis key manager. Both the keys and values of the\nitems stored in state are encrypted, but the size of either is ",(0,r.kt)("em",{parentName:"p"},"not")," hidden. You\napp may need to pad state items to a constant length, or use other obfuscation.\nObservers may also be able to infer computation based on storage access patterns,\nso you might need to obfuscate that, too."),(0,r.kt)("p",null,"Contract state may be made available to third parties through logs/events, or\nexplicit getters."),(0,r.kt)("h3",{id:"contract-logs"},"Contract Logs"),(0,r.kt)("p",null,"Contract logs/events (e.g., those emitted by the Solidity ",(0,r.kt)("inlineCode",{parentName:"p"},"emit")," keyword)\nare exactly like Ethereum. Data contained in events is ",(0,r.kt)("em",{parentName:"p"},"not")," encrypted.\nPrecompiled contracts are available to help you encrypt data that you can\nthen pack into an event, however."),(0,r.kt)("admonition",{title:"Unmodified contracts may leak state through logs",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Base contracts like those provided by OpenZeppelin often emit logs containing\nprivate information. If you don't know they're doing that, you might undermine\nthe confidentiality of your state. As a concrete example, the ERC-20 spec\nrequires implementers to emit an ",(0,r.kt)("inlineCode",{parentName:"p"},"event Transfer(from, to, amount)"),", which is\nobviously problematic if you're writing a confidential token. What you can\ndo instead is fork that contract and remove the offending emissions.")),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)(i.Z,{item:(0,o.n)("/node/run-your-node/paratime-client-node"),mdxType:"DocCard"}),(0,r.kt)(i.Z,{item:(0,o.n)("/node/web3"),mdxType:"DocCard"}))}m.isMDXComponent=!0},971:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"9673f7d37d15e450edb79dd069973a98.svg"},1401:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"210a75e7304d7ae05343e3d1bf05157f.svg"},8332:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/client-km-compute-8776815a499e44e00cfdd8953fdc9fb3.svg"}}]);