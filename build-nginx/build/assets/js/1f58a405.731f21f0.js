"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1943],{1849:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var t=n(4848),i=n(8453),r=n(1470),l=n(9365);const s={},o="API Interface Usage",c={id:"application/advanced_tutorial/api",title:"API Interface Usage",description:"The DB-GPT project currently also provides various APIs for use. Currently APIs are mainly divided into two categories. 1. Model API 2. Application service layer AP",source:"@site/docs/application/advanced_tutorial/api.md",sourceDirName:"application/advanced_tutorial",slug:"/application/advanced_tutorial/api",permalink:"/docs/latest/application/advanced_tutorial/api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Command Line Usage",permalink:"/docs/latest/application/advanced_tutorial/cli"},next:{title:"Debugging",permalink:"/docs/latest/application/advanced_tutorial/debugging"}},d={},p=[{value:"Model API",id:"model-api",level:2},{value:"Application service layer API",id:"application-service-layer-api",level:2},{value:"API Description",id:"api-description",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"api-interface-usage",children:"API Interface Usage"}),"\n",(0,t.jsx)(a.p,{children:"The DB-GPT project currently also provides various APIs for use. Currently APIs are mainly divided into two categories. 1. Model API 2. Application service layer AP"}),"\n",(0,t.jsx)(a.p,{children:"Model API mainly means that DB-GPT adapts to various models and is uniformly packaged into models compatible with OpenAI SDK output. The service layer API refers to the API exposed by the DB-GPT service layer. The following is a brief introduction to the use of both."}),"\n",(0,t.jsx)(a.h2,{id:"model-api",children:"Model API"}),"\n",(0,t.jsx)(a.p,{children:"In the DB-GPT project, we defined a service-oriented multi-model management framework (SMMF). Through the capabilities of SMMF, we can deploy multiple models, and these models provide external services through services. In order to allow clients to achieve seamless switching, we uniformly support the OpenAI SDK standards."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Detail useage tutorial: ",(0,t.jsx)(a.a,{href:"/docs/latest/installation/advanced_usage/OpenAI_SDK_call",children:"OpenAI SDK calls local multi-model "})]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Example:"})," The following is an example of calling through openai sdk"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'import openai\nopenai.api_key = "EMPTY"\nopenai.api_base = "http://127.0.0.1:8100/api/v1"\nmodel = "vicuna-13b-v1.5"\n\ncompletion = openai.ChatCompletion.create(\n  model=model,\n  messages=[{"role": "user", "content": "hello"}]\n)\n# print the completion\nprint(completion.choices[0].message.content)\n'})}),"\n",(0,t.jsx)(a.h2,{id:"application-service-layer-api",children:"Application service layer API"}),"\n",(0,t.jsx)(a.p,{children:"The service layer API refers to the API exposed on port 5000 after starting the webserver, which is mainly focused on the application layer. It can be divided into the following parts according to categories"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Chat API"}),"\n",(0,t.jsx)(a.li,{children:"Editor API"}),"\n",(0,t.jsx)(a.li,{children:"LLM Manage API"}),"\n",(0,t.jsx)(a.li,{children:"Agent API"}),"\n",(0,t.jsx)(a.li,{children:"AWEL API"}),"\n",(0,t.jsx)(a.li,{children:"Model API"}),"\n"]}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsxs)(a.p,{children:["Note: After starting the webserver, open ",(0,t.jsx)(a.a,{href:"http://127.0.0.1:5000/docs",children:"http://127.0.0.1:5000/docs"})," to view details"]}),(0,t.jsx)(a.p,{children:"Regarding the service layer API, in terms of strategy in the early days, we maintained the principle of minimum availability and openness. APIs that are stably exposed to the outside world will carry version information, such as"}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"/api/v1/"}),"\n",(0,t.jsx)(a.li,{children:"/api/v2/"}),"\n"]}),(0,t.jsx)(a.p,{children:"Due to the rapid development of the entire field, different versions of the API will not be considered fully compatible in terms of compatibility. In subsequent new versions of the API, we will provide instructions in the documentation for incompatible APIs."})]}),"\n",(0,t.jsx)(a.h2,{id:"api-description",children:"API Description"}),"\n","\n","\n",(0,t.jsxs)(r.A,{defaultValue:"chatapi",values:[{label:"Chat API",value:"chatapi"},{label:"Editor API",value:"editorapi"},{label:"Model API",value:"modelapi"},{label:"LLM Manage API",value:"llmanageapi"},{label:"Agent API",value:"agentapi"},{label:"AWEL API",value:"awelapi"}],children:[(0,t.jsxs)(l.A,{value:"chatapi",children:[(0,t.jsx)(a.p,{children:"Chat API Lists"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"  api/v1/chat/db/list\n  api/v1/chat/db/add\n  api/v1/chat/db/edit\n  api/v1/chat/db/delete\n  api/v1/chat/db/test/connect\n  api/v1/chat/db/summary\n  api/v1/chat/db/support/type\n  api/v1/chat/dialogue/list\n  api/v1/chat/dialogue/scenes\n  api/v1/chat/dialogue/new\n  api/v1/chat/mode/params/list\n  api/v1/chat/mode/params/file/load\n  api/v1/chat/dialogue/delete\n  api/v1/chat/dialogue/messages\n  api/v1/chat/prepare\n  api/v1/chat/completions\n"})})]}),(0,t.jsxs)(l.A,{value:"editorapi",children:[(0,t.jsx)(a.p,{children:"Editor API Lists"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"  api/v1/editor/db/tables\n  api/v1/editor/sql/rounds\n  api/v1/editor/sql\n  api/v1/editor/sql/run\n  api/v1/sql/editor/submit\n  api/v1/editor/chart/list\n  api/v1/editor/chart/info\n  api/v1/editor/chart/run\n  api/v1/chart/editor/submit\n"})})]}),(0,t.jsxs)(l.A,{value:"modelapi",children:[(0,t.jsx)(a.p,{children:"Model API Lists"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"  api/v1/model/types\n  api/v1/model/supports\n"})})]}),(0,t.jsxs)(l.A,{value:"llmanageapi",children:[(0,t.jsx)(a.p,{children:"LLM Manage API Lists"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"  api/v1/worker/model/params\n  api/v1/worker/model/list\n  api/v1/worker/model/stop\n  api/v1/worker/model/start\n  api/worker/generate_stream\n  api/worker/generate\n  api/worker/embeddings\n  api/worker/apply\n  api/worker/parameter/descriptions\n  api/worker/models/supports\n  api/worker/models/startup\n  api/worker/models/shutdown\n  api/controller/models\n  api/controller/heartbeat\n"})})]}),(0,t.jsxs)(l.A,{value:"agentapi",children:[(0,t.jsx)(a.p,{children:"Agent API Lists"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"  api/v1/agent/hub/update\n  api/v1/agent/query\n  api/v1/agent/my\n  api/v1/agent/install\n  api/v1/agent/uninstall\n  api/v1/personal/agent/upload\n"})})]}),(0,t.jsxs)(l.A,{value:"awelapi",children:[(0,t.jsx)(a.p,{children:"AWEL API Lists"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:"  api/v1/awel/trigger/examples/simple_rag\n  api/v1/awel/trigger/examples/simple_chat\n  api/v1/awel/trigger/examples/hello\n"})})]})]}),"\n",(0,t.jsxs)(a.admonition,{title:"note",type:"info",children:[(0,t.jsx)(a.p,{children:"\u26a0\ufe0f  Knowledge and Prompt API"}),(0,t.jsx)(a.p,{children:"Currently, due to frequent changes in Knowledge and Prompt, the relevant APIs are still in the testing stage and will be gradually opened later"})]}),"\n",(0,t.jsxs)(a.p,{children:["More detailed interface parameters can be viewed at ",(0,t.jsx)(a.code,{children:"http://127.0.0.1:5000/docs"})]})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},9365:(e,a,n)=>{n.d(a,{A:()=>l});n(6540);var t=n(53);const i={tabItem:"tabItem_Ymn6"};var r=n(4848);function l(e){let{children:a,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(i.tabItem,l),hidden:n,children:a})}},1470:(e,a,n)=>{n.d(a,{A:()=>y});var t=n(6540),i=n(53),r=n(3104),l=n(6347),s=n(205),o=n(7485),c=n(1682),d=n(9466);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return p(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:i}}=e;return{value:a,label:n,attributes:t,default:i}}))}(n);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const i=(0,l.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(i.location.search);a.set(r,e),i.replace({...i.location,search:a.toString()})}),[r,i])]}function v(e){const{defaultValue:a,queryString:n=!1,groupId:i}=e,r=u(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[c,p]=m({queryString:n,groupId:i}),[v,g]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,r]=(0,d.Dv)(n);return[i,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:i}),f=(()=>{const e=c??v;return h({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),g(e)}),[p,g,r]),tabValues:r}}var g=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function x(e){let{className:a,block:n,selectedValue:t,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const a=e.currentTarget,n=o.indexOf(a),i=s[n].value;i!==t&&(c(a),l(i))},p=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},a),children:s.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:p,onClick:d,...r,className:(0,i.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function A(e){let{lazy:a,children:n,selectedValue:i}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function j(e){const a=v(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...a}),(0,b.jsx)(A,{...e,...a})]})}function y(e){const a=(0,g.A)();return(0,b.jsx)(j,{...e,children:p(e.children)},String(a))}},8453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>s});var t=n(6540);const i={},r=t.createContext(i);function l(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);