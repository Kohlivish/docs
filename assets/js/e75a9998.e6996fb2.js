"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[905],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var m=o.createContext({}),c=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(m.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,m=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(t),p=a,h=l["".concat(m,".").concat(p)]||l[p]||d[p]||s;return t?o.createElement(h,r(r({ref:n},u),{},{components:t})):o.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,r=new Array(s);r[0]=p;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[l]="string"==typeof e?e:a,r[1]=i;for(var c=2;c<s;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const s={},r="Amend Commission Schedule",i={unversionedId:"node/run-your-node/validator-node/amend-commission-schedule",id:"node/run-your-node/validator-node/amend-commission-schedule",title:"Amend Commission Schedule",description:"This example assumes you have read and followed the instructions in the Prerequisites and Setup sections of the Use Your Tokens docs.",source:"@site/docs/node/run-your-node/validator-node/amend-commission-schedule.md",sourceDirName:"node/run-your-node/validator-node",slug:"/node/run-your-node/validator-node/amend-commission-schedule",permalink:"/node/run-your-node/validator-node/amend-commission-schedule",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/validator-node/amend-commission-schedule.md",tags:[],version:"current",lastUpdatedAt:1678435523,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{},sidebar:"operators",previous:{title:"Governance",permalink:"/node/run-your-node/validator-node/governance"},next:{title:"Non-validator Node",permalink:"/node/run-your-node/non-validator-node"}},m={},c=[{value:"Commission Schedule Rules",id:"commission-schedule-rules",level:2},{value:"Query Our Account&#39;s Info",id:"query-our-accounts-info",level:2},{value:"Generate an Amend Commission Schedule Transaction",id:"generate-an-amend-commission-schedule-transaction",level:2},{value:"Submit the Transaction",id:"submit-the-transaction",level:2},{value:"Query Our Account&#39;s Info Again",id:"query-our-accounts-info-again",level:2},{value:"Setting a More Complex Commission Schedule",id:"setting-a-more-complex-commission-schedule",level:2}],u={toc:c},l="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(l,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"amend-commission-schedule"},"Amend Commission Schedule"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This example assumes you have read and followed the instructions in the ",(0,a.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/prerequisites"},"Prerequisites")," and ",(0,a.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/setup"},"Setup")," sections of the ",(0,a.kt)("em",{parentName:"p"},"Use Your Tokens")," docs.")),(0,a.kt)("p",null,"We can configure our account to take a commission on staking rewards given to our node(s). The ",(0,a.kt)("strong",{parentName:"p"},"commission rate")," must be within ",(0,a.kt)("strong",{parentName:"p"},"commission rate bounds"),", which we can also configure."),(0,a.kt)("p",null,"Let's assume:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"we want to change our commission rate bounds to allow us to set any rate between 0% - 25%, and"),(0,a.kt)("li",{parentName:"ul"},"change our commission rate to 10%,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"oasis1qr6swa6gsp2ukfjcdmka8wrkrwz294t7ev39nrw6"),"is our staking account address.")),(0,a.kt)("p",null,"We're not allowed to change the commission bounds too close in near future, so we'd have to make changes a number of epochs in the future."),(0,a.kt)("h2",{id:"commission-schedule-rules"},"Commission Schedule Rules"),(0,a.kt)("p",null,"The commission schedule rules are specified by the ",(0,a.kt)("inlineCode",{parentName:"p"},"staking.params.commission_schedule_rules")," consensus parameter."),(0,a.kt)("p",null,"To obtain its value from the genesis file, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cat $GENESIS_FILE | \\\n  python3 -c \'import sys, json; \\\n  rules = json.load(sys.stdin)["staking"]["params"]["commission_schedule_rules"]; \\\n  print(json.dumps(rules, indent=4))\'\n')),(0,a.kt)("p",null,"For our example network this returns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "rate_change_interval": 1,\n    "rate_bound_lead": 336,\n    "max_rate_steps": 10,\n    "max_bound_steps": 10\n}\n')),(0,a.kt)("p",null,"This means that we must submit a commission rate bound at least 336 epochs in advance (",(0,a.kt)("inlineCode",{parentName:"p"},"rate_bound_lead"),") and that we can change a commission rate on every epoch (",(0,a.kt)("inlineCode",{parentName:"p"},"rate_change_interval"),")."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"max_rate_steps")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"max_bound_steps")," determine the maximum number of commission rate steps and rate bound steps, respectively."),(0,a.kt)("h2",{id:"query-our-accounts-info"},"Query Our Account's Info"),(0,a.kt)("p",null,"To query our staking account's information, use the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node stake account info \\\n  -a $ADDR \\\n  --stake.account.address oasis1qr6swa6gsp2ukfjcdmka8wrkrwz294t7ev39nrw6\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For a detailed explanation on querying account information, see the ",(0,a.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-info"},"Get Info")," section of the ",(0,a.kt)("em",{parentName:"p"},"Use Your Tokens")," docs.")),(0,a.kt)("p",null,"Before the transaction, this outputs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"General Account:\n  ...\n  Nonce:   10\nEscrow Account:\n  ...\n  Commission Schedule:\n    Rates: (none)\n    Rate Bounds: (none)\n  ...\n")),(0,a.kt)("p",null,"We can observe that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Account's nonce is 10."),(0,a.kt)("li",{parentName:"ul"},"No commissions rates or bounds are currently set.")),(0,a.kt)("h2",{id:"generate-an-amend-commission-schedule-transaction"},"Generate an Amend Commission Schedule Transaction"),(0,a.kt)("p",null,"In this example, we'll set the bounds to start on epoch 1500. An account's default bounds are 0% maximum, so we have to wait until our new bounds go into effect to raise our rate to 10%. Because of that, we'll specify that our rate also starts on epoch 1500."),(0,a.kt)("p",null,"Let's generate an amend commission schedule transaction for this example and store it to ",(0,a.kt)("inlineCode",{parentName:"p"},"tx_amend_commission_schedule.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'oasis-node stake account gen_amend_commission_schedule \\\n  "${TX_FLAGS[@]}" \\\n  --stake.commission_schedule.bounds 1500/0/25000 \\\n  --stake.commission_schedule.rates 1500/10000 \\\n  --transaction.file tx_amend_commission_schedule.json \\\n  --transaction.nonce 10 \\\n  --transaction.fee.gas 1000 \\\n  --transaction.fee.amount 2000\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Rates and minimum/maximum rates are in units of 1/100,000, so ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"50000"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"100000")," come out to 0%, 50%, and 100%, respectively.")),(0,a.kt)("p",null,"This will output a preview of the generated transaction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"You are about to sign the following transaction:\n  Nonce:  10\n  Fee:\n    Amount: ROSE 0.000002\n    Gas limit: 1000\n    (gas price: ROSE 0.000000002 per gas unit)\n  Method: staking.AmendCommissionSchedule\n  Body:\n    Amendment:\n      Rates:\n        (1) start: epoch 1500\n            rate:  10.0%\n      Rate Bounds:\n        (1) start:        epoch 1500\n            minimum rate: 0.0%\n            maximum rate: 25.0%\nOther info:\n  Genesis document's hash: 976c302f696e417bd861b599e79261244f4391f3887a488212ee122ca7bbf0a8\n")),(0,a.kt)("p",null,"and ask you for confirmation."),(0,a.kt)("h2",{id:"submit-the-transaction"},"Submit the Transaction"),(0,a.kt)("p",null,"To submit the generated transaction, we need to copy ",(0,a.kt)("inlineCode",{parentName:"p"},"tx_amend_commission_schedule.json")," to the online Oasis node (i.e. the ",(0,a.kt)("inlineCode",{parentName:"p"},"server"),") and submit it from there:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node consensus submit_tx \\\n  -a $ADDR \\\n  --transaction.file tx_amend_commission_schedule.json\n")),(0,a.kt)("h2",{id:"query-our-accounts-info-again"},"Query Our Account's Info Again"),(0,a.kt)("p",null,"Let's check ",(0,a.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/amend-commission-schedule#query-our-accounts-info"},"our account's info")," again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"General Account:\n  ...\n  Nonce:   11\nEscrow Account:\n  ...\n  Commission Schedule:\n    Rates:\n      (1) start: epoch 1500\n          rate:  10.0%\n    Rate Bounds:\n      (1) start:        epoch 1500\n          minimum rate: 0.0%\n          maximum rate: 25.0%\n  ...\n")),(0,a.kt)("p",null,"We can observe that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Our account's nonce increased to 11."),(0,a.kt)("li",{parentName:"ul"},"We set the commission rate of 10.0% to start on epoch 1500."),(0,a.kt)("li",{parentName:"ul"},"We set the commission rate bounds of 0% - 25% to also start on epoch 1500.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information on how commissions work in general, see the ",(0,a.kt)("a",{parentName:"p",href:"/general/manage-tokens/terminology#commission"},"Commission")," explanation in the ",(0,a.kt)("em",{parentName:"p"},"Use Your Tokens")," docs.")),(0,a.kt)("h2",{id:"setting-a-more-complex-commission-schedule"},"Setting a More Complex Commission Schedule"),(0,a.kt)("p",null,"It is also possible to set multiple commission rate steps and rate bound steps by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--stake.commission_schedule.rates")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--stake.commission_schedule.bounds")," CLI flags multiple times."),(0,a.kt)("p",null,"For example, setting multiple commission rate steps and rate bound steps (for the same account as in the previous example) as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'oasis-node stake account gen_amend_commission_schedule \\\n  "${TX_FLAGS[@]}" \\\n  --stake.commission_schedule.bounds 2000/10000/30000 \\\n  --stake.commission_schedule.bounds 3000/20000/40000 \\\n  --stake.commission_schedule.rates 2000/15000 \\\n  --stake.commission_schedule.rates 2200/20000 \\\n  --stake.commission_schedule.rates 2500/25000 \\\n  --stake.commission_schedule.rates 2800/30000 \\\n  --stake.commission_schedule.rates 3000/35000 \\\n  --transaction.file tx_amend_commission_schedule.json \\\n  --transaction.nonce 11 \\\n  --transaction.fee.gas 1000 \\\n  --transaction.fee.amount 2000\n')),(0,a.kt)("p",null,"would result in the following commission schedule being printed out in ",(0,a.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/amend-commission-schedule#query-our-accounts-info"},"our account's info"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"...\nEscrow Account:\n  ...\n  Commission Schedule:\n    Rates:\n      (1) start: epoch 1500\n          rate:  10.0%\n      (2) start: epoch 2000\n          rate:  15.0%\n      (3) start: epoch 2200\n          rate:  20.0%\n      (4) start: epoch 2500\n          rate:  25.0%\n      (5) start: epoch 2800\n          rate:  30.0%\n      (6) start: epoch 3000\n          rate:  35.0%\n    Rate Bounds:\n      (1) start:        epoch 1500\n          minimum rate: 0.0%\n          maximum rate: 25.0%\n      (2) start:        epoch 2000\n          minimum rate: 10.0%\n          maximum rate: 30.0%\n      (3) start:        epoch 3000\n          minimum rate: 20.0%\n          maximum rate: 40.0%\n  ...\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To troubleshoot an amendment that's rejected, consult our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/blob/0dee03d75b3e8cfb36293fbf8ecaaec6f45dd3a5/go/staking/api/commission_test.go#L61-L610"},"compendium of 23 common ways for a commission schedule amendment to fail"),".")))}d.isMDXComponent=!0}}]);