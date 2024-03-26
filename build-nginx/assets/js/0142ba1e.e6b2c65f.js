"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3529],{9793:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var s=t(4848),o=t(8453);const a={},r="KBQA FAQ",l={id:"faq/kbqa",title:"KBQA FAQ",description:"Q1: text2vec-large-chinese not found",source:"@site/versioned_docs/version-v0.5.0/faq/kbqa.md",sourceDirName:"faq",slug:"/faq/kbqa",permalink:"/docs/v0.5.0/faq/kbqa",draft:!1,unlisted:!1,tags:[],version:"v0.5.0",frontMatter:{},sidebar:"docs",previous:{title:"LLM USE FAQ",permalink:"/docs/v0.5.0/faq/llm"},next:{title:"ChangeLog",permalink:"/docs/v0.5.0/changelog/doc"}},c={},i=[{value:"Q1: text2vec-large-chinese not found",id:"q1-text2vec-large-chinese-not-found",level:3},{value:"Q2 to change Vector DB Type in DB-GPT.",id:"q2-to-change-vector-db-type-in-db-gpt",level:3},{value:"Q3 I use vicuna-13b, found some illegal character like this.",id:"q3-i-use-vicuna-13b-found-some-illegal-character-like-this",level:3},{value:"Q4 add error (pymysql.err.OperationalError) (1054, &quot;Unknown column &#39;knowledge_space.context&#39; in &#39;field list&#39;&quot;)",id:"q4-add-error-pymysqlerroperationalerror-1054-unknown-column-knowledge_spacecontext-in-field-list",level:3},{value:"Q5 Mysql, how to use DB-GPT KBQA",id:"q5-mysql-how-to-use-db-gpt-kbqa",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kbqa-faq",children:"KBQA FAQ"}),"\n",(0,s.jsx)(n.h3,{id:"q1-text2vec-large-chinese-not-found",children:"Q1: text2vec-large-chinese not found"}),"\n",(0,s.jsx)(n.p,{children:"make sure you have download text2vec-large-chinese embedding model in right way"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tip",children:"centos:yum install git-lfs\nubuntu:apt-get install git-lfs -y\nmacos:brew install git-lfs\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd models\ngit lfs clone https://huggingface.co/GanymedeNil/text2vec-large-chinese\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"q2-to-change-vector-db-type-in-db-gpt",children:["Q2",":How"," to change Vector DB Type in DB-GPT."]}),"\n",(0,s.jsx)(n.p,{children:"Update .env file and set VECTOR_STORE_TYPE."}),"\n",(0,s.jsxs)(n.p,{children:["DB-GPT currently support Chroma(Default), Milvus(>2.1), Weaviate vector database.\nIf you want to change vector db, Update your .env, set your vector store type, VECTOR_STORE_TYPE=Chroma (now only support Chroma and Milvus(>2.1), if you set Milvus, please set MILVUS_URL and MILVUS_PORT)\nIf you want to support more vector db, you can integrate yourself.",(0,s.jsx)(n.a,{href:"https://db-gpt.readthedocs.io/en/latest/modules/vector.html",children:"how to integrate"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:"#*******************************************************************#\n#**                  VECTOR STORE SETTINGS                       **#\n#*******************************************************************#\nVECTOR_STORE_TYPE=Chroma\n#MILVUS_URL=127.0.0.1\n#MILVUS_PORT=19530\n#MILVUS_USERNAME\n#MILVUS_PASSWORD\n#MILVUS_SECURE=\n\n#WEAVIATE_URL=https://kt-region-m8hcy0wc.weaviate.network\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"q3-i-use-vicuna-13b-found-some-illegal-character-like-this",children:["Q3",":When"," I use vicuna-13b, found some illegal character like this."]}),"\n",(0,s.jsx)("p",{align:"left",children:(0,s.jsx)("img",{src:"https://github.com/eosphoros-ai/DB-GPT/assets/13723926/088d1967-88e3-4f72-9ad7-6c4307baa2f8",width:"800px"})}),"\n",(0,s.jsx)(n.p,{children:"Set KNOWLEDGE_SEARCH_TOP_SIZE smaller or set KNOWLEDGE_CHUNK_SIZE smaller, and reboot server."}),"\n",(0,s.jsxs)(n.h3,{id:"q4-add-error-pymysqlerroperationalerror-1054-unknown-column-knowledge_spacecontext-in-field-list",children:["Q4",":space"," add error (pymysql.err.OperationalError) (1054, \"Unknown column 'knowledge_space.context' in 'field list'\")"]}),"\n",(0,s.jsx)(n.p,{children:"1.shutdown dbgpt_server(ctrl c)"}),"\n",(0,s.jsx)(n.p,{children:"2.add column context for table knowledge_space"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:"mysql -h127.0.0.1 -uroot -p {your_password}\n"})}),"\n",(0,s.jsx)(n.p,{children:"3.execute sql ddl"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-commandline",children:'mysql> use knowledge_management;\nmysql> ALTER TABLE knowledge_space ADD COLUMN context TEXT COMMENT "arguments context";\n'})}),"\n",(0,s.jsx)(n.p,{children:"4.restart dbgpt serve"}),"\n",(0,s.jsxs)(n.h3,{id:"q5-mysql-how-to-use-db-gpt-kbqa",children:["Q5",":Use"," Mysql, how to use DB-GPT KBQA"]}),"\n",(0,s.jsx)(n.p,{children:"build Mysql KBQA system database schema."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ mysql -h127.0.0.1 -uroot -p{your_password} < ./assets/schema/knowledge_management.sql\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const o={},a=s.createContext(o);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);