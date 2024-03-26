"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2742],{3244:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(4848),i=t(8453);const s={},r="Chat Dashboard",o={id:"application_manual/started_tutorial/chat_dashboard",title:"Chat Dashboard",description:"Report analysis corresponds to the Chat Dashboard scenario in DB-GPT, and intelligent report generation and analysis can be performed through natural language. It is one of the basic capabilities of generative BI (GBI). Let's take a look at how to use the report analysis capabilities.",source:"@site/versioned_docs/version-v0.5.1/application_manual/started_tutorial/chat_dashboard.md",sourceDirName:"application_manual/started_tutorial",slug:"/application_manual/started_tutorial/chat_dashboard",permalink:"/docs/v0.5.1/application_manual/started_tutorial/chat_dashboard",draft:!1,unlisted:!1,tags:[],version:"v0.5.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Agent",permalink:"/docs/v0.5.1/application_manual/started_tutorial/agent"},next:{title:"Chat Data",permalink:"/docs/v0.5.1/application_manual/started_tutorial/chat_data"}},d={},c=[{value:"Steps",id:"steps",level:2},{value:"Data preparation",id:"data-preparation",level:3},{value:"Add data source",id:"add-data-source",level:3},{value:"Select Chat Dashboard",id:"select-chat-dashboard",level:3},{value:"Start chat",id:"start-chat",level:3}];function l(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"chat-dashboard",children:"Chat Dashboard"}),"\n",(0,n.jsxs)(a.p,{children:["Report analysis corresponds to the ",(0,n.jsx)(a.code,{children:"Chat Dashboard"})," scenario in DB-GPT, and intelligent report generation and analysis can be performed through natural language. It is one of the basic capabilities of generative BI (GBI). Let's take a look at how to use the report analysis capabilities."]}),"\n",(0,n.jsx)(a.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(a.p,{children:"The following are the steps for using report analysis:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"1.Data preparation"}),"\n",(0,n.jsx)(a.li,{children:"2.Add data source"}),"\n",(0,n.jsx)(a.li,{children:"3.Select Chat Dashboard"}),"\n",(0,n.jsx)(a.li,{children:"4.Start chat"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"data-preparation",children:"Data preparation"}),"\n",(0,n.jsx)(a.p,{children:"In order to better experience the report analysis capabilities, we have built some test data into the code. To use this test data, we first need to create a test library."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"CREATE DATABASE IF NOT EXISTS dbgpt_test CHARACTER SET utf8;\n"})}),"\n",(0,n.jsx)(a.p,{children:"After the test library is created, you can initialize the test data with one click through the script."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"python docker/examples/dashboard/test_case_mysql_data.py\n"})}),"\n",(0,n.jsx)(a.h3,{id:"add-data-source",children:"Add data source"}),"\n",(0,n.jsxs)(a.p,{children:["The steps to add a data source are the same as ",(0,n.jsx)(a.a,{href:"/docs/operation_manual/started_tutorial/chat_data.mdx",children:"Chat Data"}),". Select the corresponding database type in the data source management tab, then create it. Fill in the necessary information to complete the creation."]}),"\n",(0,n.jsx)("p",{align:"left",children:(0,n.jsx)("img",{src:"/img/chat_dashboard/add_data.png",width:"720px"})}),"\n",(0,n.jsx)(a.h3,{id:"select-chat-dashboard",children:"Select Chat Dashboard"}),"\n",(0,n.jsxs)(a.p,{children:["After the data source is added, select ",(0,n.jsx)(a.code,{children:"Chat Dashboard"})," on the home scene page to perform report analysis."]}),"\n",(0,n.jsx)("p",{align:"left",children:(0,n.jsx)("img",{src:"/img/chat_dashboard/choose_chat_dashboard.png",width:"720px"})}),"\n",(0,n.jsx)(a.h3,{id:"start-chat",children:"Start chat"}),"\n",(0,n.jsx)(a.p,{children:"Enter specific questions in the dialog box on the right to start a data conversation."}),"\n",(0,n.jsx)("p",{align:"left",children:(0,n.jsx)("img",{src:"/img/chat_dashboard/preview.png",width:"720px"})}),"\n",(0,n.jsx)(a.admonition,{title:"note",type:"info",children:(0,n.jsxs)(a.p,{children:["\u26a0\ufe0f Data dialogue has relatively high requirements on model capabilities, and ",(0,n.jsx)(a.code,{children:"ChatGPT/GPT-4"})," has a high success rate. Other open source models you can try ",(0,n.jsx)(a.code,{children:"Vicuna-13B"})]})}),"\n",(0,n.jsxs)(a.p,{children:["Of course, in addition to ",(0,n.jsx)(a.code,{children:"preview mode"}),", ",(0,n.jsx)(a.code,{children:"editor mode"})," is also provided. In editor mode, SQL can be edited and modified. You can see the changes in the chart synchronously."]}),"\n",(0,n.jsx)("p",{align:"left",children:(0,n.jsx)("img",{src:"/img/chat_dashboard/edit.png",width:"720px"})})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(6540);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);