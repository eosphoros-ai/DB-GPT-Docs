"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8164],{5912:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=t(4848),r=t(8453);const o={},l="2.1 Map Operator",s={id:"awel/awel_tutorial/basic_syntax/2.1_map_operator",title:"2.1 Map Operator",description:"The MapOperator is most commonly used to apply a function to input data.",source:"@site/versioned_docs/version-v0.5.0/awel/awel_tutorial/basic_syntax/2.1_map_operator.md",sourceDirName:"awel/awel_tutorial/basic_syntax",slug:"/awel/awel_tutorial/basic_syntax/2.1_map_operator",permalink:"/docs/v0.5.0/awel/awel_tutorial/basic_syntax/2.1_map_operator",draft:!1,unlisted:!1,tags:[],version:"v0.5.0",frontMatter:{},sidebar:"docs",previous:{title:"1.3 Custom Operator",permalink:"/docs/v0.5.0/awel/awel_tutorial/getting_started/1.3_custom_operator"},next:{title:"2.2 Reduce Operator",permalink:"/docs/v0.5.0/awel/awel_tutorial/basic_syntax/2.2_reduce_operator"}},p={},i=[{value:"Build a <code>MapOperator</code> with a map function",id:"build-a-mapoperator-with-a-map-function",level:2},{value:"Implement a custom <code>MapOperator</code>",id:"implement-a-custom-mapoperator",level:2},{value:"Examples",id:"examples",level:2},{value:"Double the number",id:"double-the-number",level:3}];function c(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"21-map-operator",children:"2.1 Map Operator"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"MapOperator"})," is most commonly used to apply a function to input data."]}),"\n",(0,n.jsxs)(a.p,{children:["There are two ways to use the ",(0,n.jsx)(a.code,{children:"MapOperator"}),":"]}),"\n",(0,n.jsxs)(a.h2,{id:"build-a-mapoperator-with-a-map-function",children:["Build a ",(0,n.jsx)(a.code,{children:"MapOperator"})," with a map function"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'from dbgpt.core.awel import DAG, MapOperator\n\nwith DAG("awel_hello_world") as dag:\n    task = MapOperator(map_function=lambda x: print(f"Hello, {x}!"))\n'})}),"\n",(0,n.jsxs)(a.h2,{id:"implement-a-custom-mapoperator",children:["Implement a custom ",(0,n.jsx)(a.code,{children:"MapOperator"})]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'from dbgpt.core.awel import DAG, MapOperator\n\nclass MyMapOperator(MapOperator[str, None]):\n    async def map(self, x: str) -> None:\n        print(f"Hello, {x}!")\n\nwith DAG("awel_hello_world") as dag:\n    task = MyMapOperator()\n'})}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(a.h3,{id:"double-the-number",children:"Double the number"}),"\n",(0,n.jsxs)(a.p,{children:["Create a new file named ",(0,n.jsx)(a.code,{children:"map_operator_double_number.py"})," in the ",(0,n.jsx)(a.code,{children:"awel_tutorial"})," directory and add the following code:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'import asyncio\nfrom dbgpt.core.awel import DAG, MapOperator\n\nclass DoubleNumberOperator(MapOperator[int, int]):\n    async def map(self, x: int) -> int:\n        print(f"Received {x}, returning {x * 2}")\n        return x * 2\n\nwith DAG("awel_double_number") as dag:\n    task = DoubleNumberOperator()  \nassert asyncio.run(task.call(2)) == 4\n'})}),"\n",(0,n.jsx)(a.p,{children:"And run the following command to execute the code:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"poetry run python awel_tutorial/map_operator_double_number.py\n"})}),"\n",(0,n.jsx)(a.p,{children:'And you will see "Received 2, returning 4" printed to the console.'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"Received 2, returning 4\n"})})]})}function d(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>s});var n=t(6540);const r={},o=n.createContext(r);function l(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);