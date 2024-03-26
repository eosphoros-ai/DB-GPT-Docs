"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2709],{2474:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=t(4848),a=t(8453);const o={},s="2.7 Transform Stream Operator",i={id:"awel/awel_tutorial/basic_syntax/2.7_transform_stream_operator",title:"2.7 Transform Stream Operator",description:"The TransformStreamAbsOperator is used to transform the streaming data to another",source:"@site/docs/awel/awel_tutorial/basic_syntax/2.7_transform_stream_operator.md",sourceDirName:"awel/awel_tutorial/basic_syntax",slug:"/awel/awel_tutorial/basic_syntax/2.7_transform_stream_operator",permalink:"/docs/latest/awel/awel_tutorial/basic_syntax/2.7_transform_stream_operator",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"2.6 Unstreamify Operator",permalink:"/docs/latest/awel/awel_tutorial/basic_syntax/2.6_unstreamify_operator"},next:{title:"2.8 Input Operator",permalink:"/docs/latest/awel/awel_tutorial/basic_syntax/2.8_input_operator"}},l={},m=[{value:"Implement a custom <code>TransformStreamAbsOperator</code>",id:"implement-a-custom-transformstreamabsoperator",level:2},{value:"Examples",id:"examples",level:2},{value:"Double The Numbers",id:"double-the-numbers",level:3}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"27-transform-stream-operator",children:"2.7 Transform Stream Operator"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"TransformStreamAbsOperator"})," is used to transform the streaming data to another\nstreaming data."]}),"\n",(0,n.jsxs)(r.p,{children:["There are one way to use the ",(0,n.jsx)(r.code,{children:"TransformStreamAbsOperator"}),":"]}),"\n",(0,n.jsxs)(r.h2,{id:"implement-a-custom-transformstreamabsoperator",children:["Implement a custom ",(0,n.jsx)(r.code,{children:"TransformStreamAbsOperator"})]}),"\n",(0,n.jsxs)(r.p,{children:["Just override the ",(0,n.jsx)(r.code,{children:"transform"})," method to return a new async iterable."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'from typing import AsyncIterator\nfrom dbgpt.core.awel import DAG, TransformStreamAbsOperator\n\nclass NumberDoubleOperator(TransformStreamAbsOperator[int, int]):\n    async def transform_stream(self, it: AsyncIterator) -> AsyncIterator[int]:\n        async for i in it:\n            # Double the number\n            yield i * 2\n\nwith DAG("numbers_dag") as dag:\n    task = NumberDoubleOperator()\n'})}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.h3,{id:"double-the-numbers",children:"Double The Numbers"}),"\n",(0,n.jsxs)(r.p,{children:["Create a new file named ",(0,n.jsx)(r.code,{children:"transform_stream_operator_double_numbers.py"})," in the ",(0,n.jsx)(r.code,{children:"awel_tutorial"})," directory and add the following code:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:'import asyncio\nfrom typing import AsyncIterator\nfrom dbgpt.core.awel import DAG, TransformStreamAbsOperator, StreamifyAbsOperator\n\nclass NumberProducerOperator(StreamifyAbsOperator[int, int]):\n    """Create a stream of numbers from 0 to `n-1`"""\n    async def streamify(self, n: int) -> AsyncIterator[int]:\n        for i in range(n):\n            yield i\n\nclass NumberDoubleOperator(TransformStreamAbsOperator[int, int]):\n    async def transform_stream(self, it: AsyncIterator) -> AsyncIterator[int]:\n        async for i in it:\n            # Double the number\n            yield i * 2\n\nwith DAG("numbers_dag") as dag:\n    task = NumberProducerOperator()\n    double_task = NumberDoubleOperator()\n    task >> double_task\nasync def print_stream(t, n: int):\n    # Call the streaming operator by `call_stream` method\n    async for i in await t.call_stream(call_data=n):\n        print(i)\n\nasyncio.run(print_stream(double_task, 10))\n'})}),"\n",(0,n.jsx)(r.p,{children:"And run the following command to execute the code:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"poetry run python awel_tutorial/transform_stream_operator_double_numbers.py\n"})}),"\n",(0,n.jsx)(r.p,{children:"And you will see the following output printed to the console."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"0\n2\n4\n6\n8\n10\n12\n14\n16\n18\n"})})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>i});var n=t(6540);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);