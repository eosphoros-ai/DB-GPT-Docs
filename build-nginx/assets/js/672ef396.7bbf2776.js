"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1813],{8841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(4848),r=n(8453),l=n(1470),s=n(9365);const i={},o="RAG Parameter Adjustment",u={id:"application/advanced_tutorial/rag",title:"RAG Parameter Adjustment",description:"Each knowledge space supports argument customization, including the relevant arguments for vector retrieval and the arguments for knowledge question-answering prompts.",source:"@site/versioned_docs/version-v0.5.1/application/advanced_tutorial/rag.md",sourceDirName:"application/advanced_tutorial",slug:"/application/advanced_tutorial/rag",permalink:"/docs/v0.5.1/application/advanced_tutorial/rag",draft:!1,unlisted:!1,tags:[],version:"v0.5.1",frontMatter:{},sidebar:"docs",previous:{title:"Crawl data analysis agents",permalink:"/docs/v0.5.1/application/started_tutorial/agents/crawl_data_analysis_agents"},next:{title:"SMMF",permalink:"/docs/v0.5.1/application/advanced_tutorial/smmf"}},c={},d=[];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"rag-parameter-adjustment",children:"RAG Parameter Adjustment"}),"\n",(0,a.jsx)(t.p,{children:"Each knowledge space supports argument customization, including the relevant arguments for vector retrieval and the arguments for knowledge question-answering prompts."}),"\n",(0,a.jsxs)(t.p,{children:['As shown in the figure below, clicking on the "Knowledge" will trigger a pop-up dialog box. Click the "Arguments" button to enter the parameter tuning interface.\n',(0,a.jsx)(t.img,{src:"https://github.com/eosphoros-ai/DB-GPT/assets/13723926/f02039ea-01d7-493a-acd9-027020d54267",alt:"image"})]}),"\n",(0,a.jsxs)(l.A,{defaultValue:"Embedding",values:[{label:"Embedding Argument",value:"Embedding"},{label:"Prompt Argument",value:"Prompt"},{label:"Summary Argument",value:"Summary"}],children:[(0,a.jsxs)(s.A,{value:"Embedding",label:"Embedding Argument",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/eosphoros-ai/DB-GPT/assets/13723926/8a69aba0-3b28-449d-8fd8-ce5bf8dbf7fc",alt:"image"})}),(0,a.jsx)(t.admonition,{title:"Embedding Arguments",type:"tip",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["topk",":the"," top k vectors based on similarity score."]}),"\n",(0,a.jsxs)(t.li,{children:["recall_score",":set"," a similarity threshold score for the retrieval of similar vectors. between 0 and 1. default 0.3."]}),"\n",(0,a.jsxs)(t.li,{children:["recall_type",":recall"," type. now nly support topk by vector similarity."]}),"\n",(0,a.jsxs)(t.li,{children:["model",":A"," model used to create vector representations of text or other data."]}),"\n",(0,a.jsxs)(t.li,{children:["chunk_size",":The"," size of the data chunks used in processing.default 500."]}),"\n",(0,a.jsxs)(t.li,{children:["chunk_overlap",":The"," amount of overlap between adjacent data chunks.default 50."]}),"\n"]})})]}),(0,a.jsxs)(s.A,{value:"Prompt",label:"Prompt Argument",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/eosphoros-ai/DB-GPT/assets/13723926/00f12903-8d70-4bfb-9f58-26f03a6a4773",alt:"image"})}),(0,a.jsx)(t.admonition,{title:"Prompt Arguments",type:"tip",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["scene",":A"," contextual parameter used to define the setting or environment in which the prompt is being used."]}),"\n",(0,a.jsxs)(t.li,{children:["template",":A"," pre-defined structure or format for the prompt, which can help ensure that the AI system generates responses that are consistent with the desired style or tone."]}),"\n",(0,a.jsxs)(t.li,{children:["max_token",":The"," maximum number of tokens or words allowed in a prompt."]}),"\n"]})})]}),(0,a.jsxs)(s.A,{value:"Summary",label:"Summary Argument",children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://github.com/eosphoros-ai/DB-GPT/assets/13723926/96782ba2-e9a2-4173-a003-49d44bf874cc",alt:"image"})}),(0,a.jsx)(t.admonition,{title:"summary arguments",type:"tip",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"max_iteration: summary max iteration call with llm, default 5. the bigger and better for document summary but time will cost longer."}),"\n",(0,a.jsx)(t.li,{children:"concurrency_limit: default summary concurrency call with llm, default 3."}),"\n"]})})]})]}),"\n",(0,a.jsx)(t.h1,{id:"knowledge-query-rewrite",children:"Knowledge Query Rewrite"}),"\n",(0,a.jsxs)(t.p,{children:["set ",(0,a.jsx)(t.code,{children:"KNOWLEDGE_SEARCH_REWRITE=True"})," in ",(0,a.jsx)(t.code,{children:".env"})," file, and restart the server."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"# Whether to enable Chat Knowledge Search Rewrite Mode\nKNOWLEDGE_SEARCH_REWRITE=True\n"})}),"\n",(0,a.jsx)(t.h1,{id:"change-vector-database",children:"Change Vector Database"}),"\n","\n","\n",(0,a.jsxs)(l.A,{defaultValue:"Chroma",values:[{label:"Chroma",value:"Chroma"},{label:"Milvus",value:"Milvus"},{label:"Weaviate",value:"Weaviate"}],children:[(0,a.jsxs)(s.A,{value:"Chroma",label:"Chroma",children:[(0,a.jsxs)(t.p,{children:["set ",(0,a.jsx)(t.code,{children:"VECTOR_STORE_TYPE"})," in ",(0,a.jsx)(t.code,{children:".env"})," file."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"### Chroma vector db config\nVECTOR_STORE_TYPE=Chroma\n#CHROMA_PERSIST_PATH=/root/DB-GPT/pilot/data\n"})})]}),(0,a.jsxs)(s.A,{value:"Milvus",label:"Milvus",children:[(0,a.jsxs)(t.p,{children:["set ",(0,a.jsx)(t.code,{children:"VECTOR_STORE_TYPE"})," in ",(0,a.jsx)(t.code,{children:".env"})," file"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"### Milvus vector db config\nVECTOR_STORE_TYPE=Milvus\nMILVUS_URL=127.0.0.1\nMILVUS_PORT=19530\n#MILVUS_USERNAME\n#MILVUS_PASSWORD\n#MILVUS_SECURE=\n"})})]}),(0,a.jsxs)(s.A,{value:"Weaviate",label:"Weaviate",children:[(0,a.jsxs)(t.p,{children:["set ",(0,a.jsx)(t.code,{children:"VECTOR_STORE_TYPE"})," in ",(0,a.jsx)(t.code,{children:".env"})," file"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"### Weaviate vector db config\nVECTOR_STORE_TYPE=Weaviate\n#WEAVIATE_URL=https://kt-region-m8hcy0wc.weaviate.network\n"})})]})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(53);const r={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>E});var a=n(6540),r=n(53),l=n(3104),s=n(6347),i=n(205),o=n(7485),u=n(1682),c=n(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=p({queryString:n,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=u??f;return m({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function x(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function E(e){const t=(0,g.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(6540);const r={},l=a.createContext(r);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);