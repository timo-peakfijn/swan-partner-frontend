"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[795],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,l(l({ref:e},s),{},{components:n})):a.createElement(f,l({ref:e},s))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[p]="string"==typeof t?t:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u}});var a=n(3117),i=(n(7294),n(3905));const r={},l="Account",o={unversionedId:"specs/banking/account",id:"specs/banking/account",title:"Account",description:"Along with the main navigation, the account page should include the following tabs:",source:"@site/docs/specs/banking/account.md",sourceDirName:"specs/banking",slug:"/specs/banking/account",permalink:"/swan-partner-frontend/specs/banking/account",draft:!1,editUrl:"https://github.com/swan-io/swan-partner-frontend/edit/main/docs/docs/specs/banking/account.md",tags:[],version:"current",frontMatter:{},sidebar:"specs",previous:{title:"History",permalink:"/swan-partner-frontend/specs/banking/history"},next:{title:"Transfer",permalink:"/swan-partner-frontend/specs/banking/transfer"}},c={},u=[{value:"Main IBAN",id:"main-iban",level:2},{value:"Virtual IBANs",id:"virtual-ibans",level:2},{value:"Add a new virtual IBAN",id:"add-a-new-virtual-iban",level:3},{value:"Cancel a virtual IBAN",id:"cancel-a-virtual-iban",level:3},{value:"Settings",id:"settings",level:2}],s={toc:u},p="wrapper";function d(t){let{components:e,...r}=t;return(0,i.kt)(p,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"account"},"Account"),(0,i.kt)("p",null,"Along with the main navigation, the ",(0,i.kt)("strong",{parentName:"p"},"account page")," should include the following tabs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Main IBAN tab"),": each account has a single, main IBAN"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Virtual IBAN tab"),": accounts can have zero, one, several virtual IBANs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Settings tab"),": access or change account name, language, and documents")),(0,i.kt)("h2",{id:"main-iban"},"Main IBAN"),(0,i.kt)("p",null,"The body of the ",(0,i.kt)("strong",{parentName:"p"},"main IBAN tab")," should include the following content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Details",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IBAN (click to copy)"),(0,i.kt)("li",{parentName:"ul"},"BIC (click to copy)"),(0,i.kt)("li",{parentName:"ul"},"Account holder (",(0,i.kt)("inlineCode",{parentName:"li"},"name"),")"))),(0,i.kt)("li",{parentName:"ul"},"Address",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Address"),(0,i.kt)("li",{parentName:"ul"},"City"),(0,i.kt)("li",{parentName:"ul"},"Zip code"),(0,i.kt)("li",{parentName:"ul"},"Country")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the main IBAN tab with sample content",src:n(895).Z,width:"2782",height:"1846"})),(0,i.kt)("h2",{id:"virtual-ibans"},"Virtual IBANs"),(0,i.kt)("p",null,"The body of the ",(0,i.kt)("strong",{parentName:"p"},"virtual IBANs tab")," should include the following content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Add new")," button"),(0,i.kt)("li",{parentName:"ul"},"List of virtual IBANs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IBAN (click to copy)"),(0,i.kt)("li",{parentName:"ul"},"BIC (click to copy)"),(0,i.kt)("li",{parentName:"ul"},"Status"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Cancel")," button for enabled virtual IBANs")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the virtual IBANs tab with sample content",src:n(5083).Z,width:"2920",height:"1874"})),(0,i.kt)("h3",{id:"add-a-new-virtual-iban"},"Add a new virtual IBAN"),(0,i.kt)("p",null,"Adding a new virtual IBAN calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"addVirtualIbanEntry")," mutation.\nThe function works instantly, so no other front displays are needed; the new virtual IBAN appears on the list as soon as it's available."),(0,i.kt)("h3",{id:"cancel-a-virtual-iban"},"Cancel a virtual IBAN"),(0,i.kt)("p",null,"Users should be able to cancel enabled virtual IBANs anytime."),(0,i.kt)("p",null,"It's not quite the same as deleting an IBAN, which isn't possible, but the end-user function is the same: when a user cancels a virtual IBAN, it won't be available to send or receive payments."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Focused screenshot of canceling a virtual IBAN button and modal",src:n(1824).Z,width:"2920",height:"1874"})),(0,i.kt)("h2",{id:"settings"},"Settings"),(0,i.kt)("p",null,"The body of the ",(0,i.kt)("strong",{parentName:"p"},"settings tab")," should include the following content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Details (uses the ",(0,i.kt)("inlineCode",{parentName:"li"},"updateAccount")," mutation)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name field (",(0,i.kt)("inlineCode",{parentName:"li"},"name"),")"),(0,i.kt)("li",{parentName:"ul"},"Official document language field with dropdown to choose language (",(0,i.kt)("inlineCode",{parentName:"li"},"language"),")"))),(0,i.kt)("li",{parentName:"ul"},"Contracts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Swan's terms and conditions with the option to open in a new window (generate the URL based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"accountCountry")," and current location)")))),(0,i.kt)("admonition",{title:"For companies only",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"accountHolder")," is a ",(0,i.kt)("strong",{parentName:"p"},"company"),", add a field for the ",(0,i.kt)("inlineCode",{parentName:"p"},"vatNumber")," that uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateAccountHolder")," mutation.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the settings tab with sample content",src:n(1050).Z,width:"2920",height:"1874"})))}d.isMDXComponent=!0},895:function(t,e,n){e.Z=n.p+"assets/images/account-main-iban-44d54fc1cd238d00d811d1b479410f19.png"},1050:function(t,e,n){e.Z=n.p+"assets/images/account-settings-f0e683cde7a39527245001fae33fe015.png"},1824:function(t,e,n){e.Z=n.p+"assets/images/account-virtual-iban-cancel-c06048a0788eff063ee2efd1c569e0e5.png"},5083:function(t,e,n){e.Z=n.p+"assets/images/account-virtual-ibans-fdce3d336a7913556c19967dc0f949c9.png"}}]);