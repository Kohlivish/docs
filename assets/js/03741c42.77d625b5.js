"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[6525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Oasis Core Developer Documentation",l={unversionedId:"core/README",id:"core/README",title:"Oasis Core Developer Documentation",description:"Architecture",source:"@site/docs/core/README.md",sourceDirName:"core",slug:"/core/",permalink:"/core/",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/README.md",tags:[],version:"current",lastUpdatedAt:1669418750,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{},sidebar:"oasisCore",next:{title:"Development Setup",permalink:"/core/development-setup"}},s={},p=[{value:"Development Setup",id:"development-setup",level:2},{value:"High-Level Components",id:"high-level-components",level:2},{value:"Common Functionality",id:"common-functionality",level:2},{value:"Processes",id:"processes",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"oasis-core-developer-documentation"},"Oasis Core Developer Documentation"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture",src:n(4434).Z,width:"581",height:"181"})),(0,a.kt)("h2",{id:"development-setup"},"Development Setup"),(0,a.kt)("p",null,"Here are instructions on how to set up the local build environment, run the\ntests and some examples on how to prepare test networks for local development of\nOasis Core components."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build Environment Setup and Building",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/development-setup/prerequisites"},"Prerequisites")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/development-setup/building"},"Building")))),(0,a.kt)("li",{parentName:"ul"},"Running Tests and Development Networks",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/development-setup/running-tests"},"Running Tests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/development-setup/oasis-net-runner"},"Local Network Runner With a Simple Runtime")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/development-setup/single-validator-node-network"},"Single Validator Node Network")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/development-setup/deploying-a-runtime"},"Deploying a Runtime"))))),(0,a.kt)("h2",{id:"high-level-components"},"High-Level Components"),(0,a.kt)("p",null,"At the highest level, Oasis Core is divided into two major layers: the\n",(0,a.kt)("em",{parentName:"p"},"consensus layer")," and the ",(0,a.kt)("em",{parentName:"p"},"runtime layer")," as shown on the figure above."),(0,a.kt)("p",null,"The idea behind the consensus layer is to provide a minimal set of features\nrequired to securely operate independent runtimes running in the runtime layer.\nIt provides the following services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Epoch-based time keeping and a random beacon."),(0,a.kt)("li",{parentName:"ul"},"Basic staking operations required to operate a PoS blockchain."),(0,a.kt)("li",{parentName:"ul"},"An entity, node and runtime registry that distributes public keys and\nmetadata."),(0,a.kt)("li",{parentName:"ul"},"Runtime committee scheduling, commitment processing and minimal state keeping.")),(0,a.kt)("p",null,"On the other side, each runtime defines its own state and state transitions\nindependent from the consensus layer, submitting only short proofs that\ncomputations were performed and results were stored. This means that runtime\nstate and logic are completely decoupled from the consensus layer, and the\nconsensus layer only provides information on what state (summarized by a\ncryptographic hash of a Merklized data structure) is considered canonical at any\ngiven point in time."),(0,a.kt)("p",null,"See the following sections for more details on specific components and their\nimplementations."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/"},"Consensus Layer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/transactions"},"Transactions")),(0,a.kt)("li",{parentName:"ul"},"Services",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/services/epochtime"},"Epoch Time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/services/beacon"},"Random Beacon")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/services/staking"},"Staking")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/services/registry"},"Registry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/services/scheduler"},"Committee Scheduler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/services/governance"},"Governance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/services/roothash"},"Root Hash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/services/keymanager"},"Key Manager")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/genesis"},"Genesis Document")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/consensus/test-vectors"},"Transaction Test Vectors")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/runtime/"},"Runtime Layer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/runtime/#operation-model"},"Operation Model")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/runtime/runtime-host-protocol"},"Runtime Host Protocol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/runtime/identifiers"},"Identifiers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/runtime/messages"},"Messages")))),(0,a.kt)("li",{parentName:"ul"},"Oasis Node (",(0,a.kt)("inlineCode",{parentName:"li"},"oasis-node"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/oasis-node/rpc"},"RPC")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/oasis-node/metrics"},"Metrics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/oasis-node/cli"},"CLI"))))),(0,a.kt)("h2",{id:"common-functionality"},"Common Functionality"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/encoding"},"Serialization")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/crypto"},"Cryptography")),(0,a.kt)("li",{parentName:"ul"},"Protocols",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/authenticated-grpc"},"Authenticated gRPC")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/mkvs"},"Merklized Key-Value Store (MKVS)"))),(0,a.kt)("h2",{id:"processes"},"Processes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/oasisprotocol/adrs"},"Architectural Decision Records")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/release-process"},"Release Process")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/versioning"},"Versioning")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/core/SECURITY"},"Security"))))}m.isMDXComponent=!0},4434:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/oasis-core-high-level-4dd19f00411531fadd7a32ea1d596e6f.svg"}}]);