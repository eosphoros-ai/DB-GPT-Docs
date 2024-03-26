"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9183],{2548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(4848),a=r(8453);const s={},o="2.6 Unstreamify Operator",i={id:"awel/awel_tutorial/basic_syntax/2.6_unstreamify_operator",title:"2.6 Unstreamify Operator",description:"The UnstreamifyAbsOperator is the opposite of the StreamifyAbsOperator. It converts",source:"@site/versioned_docs/version-v0.5.0/awel/awel_tutorial/basic_syntax/2.6_unstreamify_operator.md",sourceDirName:"awel/awel_tutorial/basic_syntax",slug:"/awel/awel_tutorial/basic_syntax/2.6_unstreamify_operator",permalink:"/docs/v0.5.0/awel/awel_tutorial/basic_syntax/2.6_unstreamify_operator",draft:!1,unlisted:!1,tags:[],version:"v0.5.0",frontMatter:{},sidebar:"docs",previous:{title:"2.5 Streamify Operator",permalink:"/docs/v0.5.0/awel/awel_tutorial/basic_syntax/2.5_streamify_operator"},next:{title:"2.7 Transform Stream Operator",permalink:"/docs/v0.5.0/awel/awel_tutorial/basic_syntax/2.7_transform_stream_operator"}},l={},c=[{value:"Implement A Custom <code>UnstreamifyAbsOperator</code>",id:"implement-a-custom-unstreamifyabsoperator",level:2},{value:"Examples",id:"examples",level:2},{value:"Sum The Numbers",id:"sum-the-numbers",level:3}];function m(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"26-unstreamify-operator",children:"2.6 Unstreamify Operator"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"UnstreamifyAbsOperator"})," is the opposite of the ",(0,n.jsx)(t.code,{children:"StreamifyAbsOperator"}),". It converts\na stream of data into a single data."]}),"\n",(0,n.jsxs)(t.p,{children:["There are one way to use the ",(0,n.jsx)(t.code,{children:"UnstreamifyAbsOperator"}),":"]}),"\n",(0,n.jsxs)(t.h2,{id:"implement-a-custom-unstreamifyabsoperator",children:["Implement A Custom ",(0,n.jsx)(t.code,{children:"UnstreamifyAbsOperator"})]}),"\n",(0,n.jsxs)(t.p,{children:["Just override the ",(0,n.jsx)(t.code,{children:"unstreamify"})," method to return a single data."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from typing import AsyncIterator\nfrom dbgpt.core.awel import DAG, UnstreamifyAbsOperator\n\nclass SumOperator(UnstreamifyAbsOperator[int, int]):\n    """Unstreamify the stream of numbers"""\n    async def unstreamify(self, it: AsyncIterator[int]) -> int:\n        return sum([i async for i in it])\n\nwith DAG("sum_dag") as dag:\n    task = SumOperator()\n'})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.h3,{id:"sum-the-numbers",children:"Sum The Numbers"}),"\n",(0,n.jsxs)(t.p,{children:["Create a new file named ",(0,n.jsx)(t.code,{children:"unstreamify_operator_sum_numbers.py"})," in the ",(0,n.jsx)(t.code,{children:"awel_tutorial"})," directory and add the following code:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'import asyncio\nfrom typing import AsyncIterator\nfrom dbgpt.core.awel import DAG, UnstreamifyAbsOperator, StreamifyAbsOperator\n\nclass NumberProducerOperator(StreamifyAbsOperator[int, int]):\n    """Create a stream of numbers from 0 to `n-1`"""\n    async def streamify(self, n: int) -> AsyncIterator[int]:\n        for i in range(n):\n            yield i\n\nclass SumOperator(UnstreamifyAbsOperator[int, int]):\n    """Unstreamify the stream of numbers"""\n    async def unstreamify(self, it: AsyncIterator[int]) -> int:\n        return sum([i async for i in it])\n\nwith DAG("sum_dag") as dag:\n    task = NumberProducerOperator()\n    sum_task = SumOperator()\n    task >> sum_task\n\nprint(asyncio.run(sum_task.call(call_data=5)))\nprint(asyncio.run(sum_task.call(call_data=10)))\n'})}),"\n",(0,n.jsx)(t.p,{children:"And run the following command to execute the code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"poetry run python awel_tutorial/unstreamify_operator_sum_numbers.py\n"})}),"\n",(0,n.jsx)(t.p,{children:"And you will see the following output printed to the console."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"10\n45\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);