"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4754],{7412:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>r,toc:()=>s});var t=l(4848),a=l(8453);const c={},o="4.1 AWEL Lifecycle",r={id:"awel/awel_tutorial/advanced_guide/4.1_lifecycle",title:"4.1 AWEL Lifecycle",description:"Task Lifecycle Hooks",source:"@site/versioned_docs/version-v0.5.0/awel/awel_tutorial/advanced_guide/4.1_lifecycle.md",sourceDirName:"awel/awel_tutorial/advanced_guide",slug:"/awel/awel_tutorial/advanced_guide/4.1_lifecycle",permalink:"/docs/v0.5.0/awel/awel_tutorial/advanced_guide/4.1_lifecycle",draft:!1,unlisted:!1,tags:[],version:"v0.5.0",frontMatter:{},sidebar:"docs",previous:{title:"3.4 Handling Streaming Requests",permalink:"/docs/v0.5.0/awel/awel_tutorial/network_program/3.4_http_trigger_streaming"},next:{title:"Installation",permalink:"/docs/v0.5.0/installation"}},i={},s=[{value:"Task Lifecycle Hooks",id:"task-lifecycle-hooks",level:2},{value:"Example",id:"example",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"41-awel-lifecycle",children:"4.1 AWEL Lifecycle"}),"\n",(0,t.jsx)(n.h2,{id:"task-lifecycle-hooks",children:"Task Lifecycle Hooks"}),"\n",(0,t.jsx)(n.p,{children:"Task lifecycle hooks are a set of methods that can be implemented in a task to perform\nactions at different stages of the task lifecycle. The following hooks are available:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"before_dag_run"}),": Execute before DAG run"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"after_dag_end"}),": Execute after DAG end"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new file ",(0,t.jsx)(n.code,{children:"lifecycle_hooks.py"})," in the ",(0,t.jsx)(n.code,{children:"awel_tutorial"})," directory and add the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import asyncio\nfrom dbgpt.core.awel import DAG, MapOperator\n\nclass MyLifecycleTask(MapOperator[str, str]):\n    async def before_dag_run(self):\n        print("Before DAG run")\n\n    async def after_dag_end(self):\n        print("After DAG end")\n\n    async def map(self, x: str) -> str:\n        return f"Hello, {x}!"\n\nwith DAG("awel_lifecycle_hooks") as dag:\n    task = MyLifecycleTask()\n\nprint(asyncio.run(task.call("world")))\n'})}),"\n",(0,t.jsx)(n.p,{children:"And run the following command to execute the code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"poetry run python awel_tutorial/lifecycle_hooks.py\n"})}),"\n",(0,t.jsx)(n.p,{children:"And the main output should look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Before DAG run\nAfter DAG end\nHello, world!\n"})})]})}function f(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>o,x:()=>r});var t=l(6540);const a={},c=t.createContext(a);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);