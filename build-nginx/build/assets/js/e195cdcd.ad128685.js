"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5923],{5966:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(4848),i=t(8453);const s={},o="Released V0.5.0 | Develop native data applications through workflows and agents",r={id:"changelog/Released_V0.5.0",title:"Released V0.5.0 | Develop native data applications through workflows and agents",description:"Release Notes for Version 0.5.0",source:"@site/docs/changelog/Released_V0.5.0.md",sourceDirName:"changelog",slug:"/changelog/Released_V0.5.0",permalink:"/docs/latest/changelog/Released_V0.5.0",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"ChangeLog",permalink:"/docs/latest/changelog/doc"},next:{title:"Upgrade To v0.5.0",permalink:"/docs/latest/upgrade/v0.5.0"}},l={},d=[{value:"Release Notes for Version 0.5.0",id:"release-notes-for-version-050",level:2},{value:"Introduction to Version Update",id:"introduction-to-version-update",level:2},{value:"Glossary of Terms:",id:"glossary-of-terms",level:3},{value:"AWEL workflow and application",id:"awel-workflow-and-application",level:2},{value:"To install from the official repository:",id:"to-install-from-the-official-repository",level:3},{value:"Building Your Own",id:"building-your-own",level:3},{value:"Create a data application",id:"create-a-data-application",level:2},{value:"Search Chat App",id:"search-chat-app",level:3},{value:"Data analysis assistant",id:"data-analysis-assistant",level:3},{value:"Other Update Details",id:"other-update-details",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Upgrade to V0.5.0",id:"upgrade-to-v050",level:2},{value:"Acknowledgments",id:"acknowledgments",level:2},{value:"Appendix",id:"appendix",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"released-v050--develop-native-data-applications-through-workflows-and-agents",children:"Released V0.5.0 | Develop native data applications through workflows and agents"}),"\n",(0,a.jsx)(n.h2,{id:"release-notes-for-version-050",children:"Release Notes for Version 0.5.0"}),"\n",(0,a.jsx)(n.p,{children:"After a period of intensive development, version 0.5.0 has taken over two months to come to fruition. This marks the first stable release that will be maintained over an extended period within the DB-GPT project. Concurrently, the long-term vision for DB-GPT has been officially set: it aims to be an AI native data application development framework utilizing Agentic Workflow Expression Language (AWEL) and agents.\nIn essence, this framework facilitates the creation of data-centric applications through an intelligent agent-based expression language."}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/app_list.png",width:"720px"})}),"\n",(0,a.jsx)(n.h2,{id:"introduction-to-version-update",children:"Introduction to Version Update"}),"\n",(0,a.jsx)(n.p,{children:"In its early releases, the DB-GPT project offered six default use cases, namely:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.dbgpt.site/docs/application/started_tutorial/chat_data",children:"ChatData"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.dbgpt.site/docs/application/started_tutorial/chat_excel",children:"ChatExcel"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.dbgpt.site/docs/application/started_tutorial/chat_db",children:"ChatDB"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.dbgpt.site/docs/application/started_tutorial/chat_knowledge",children:"ChatKnowledge"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.dbgpt.site/docs/agents",children:"ChatAgents"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.dbgpt.site/docs/application/started_tutorial/chat_dashboard",children:"ChatDashboard"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"These scenarios were designed to satisfy basic and simple use requirements. However, for large-scale production deployment, particularly when dealing with complex business scenarios, it becomes necessary to develop custom scenarios tailored to specific business conditions. This presents significant challenges in terms of flexibility and development complexity."}),"\n",(0,a.jsxs)(n.p,{children:["To further enhance the usability and flexibility of the business framework, we have built upon our existing features, including the multi-model management (SMMF), knowledge base, Agents, data sources, plugins, and Prompts. We have abstracted the capabilities of intelligent agent orchestration (AWEL) and application construction. Additionally, to facilitate application management and distribution, we have introduced the ",(0,a.jsx)(n.a,{href:"https://github.com/eosphoros-ai/dbgpts",children:"dbgpts"})," subproject, which specifically manages the construction of native intelligent data applications, AWEL common operators, AWEL generic workflow templates, and Agents on top of DB-GPT."]}),"\n",(0,a.jsxs)(n.p,{children:["This version update will not affect the usage of the previously established six scenarios. However, with subsequent iterations, these default scenarios will gradually be rewritten as Data Apps. We also plan to incorporate them into the ",(0,a.jsx)(n.code,{children:"dbgpts"})," project as default applications, making them readily available for installation and use."]}),"\n",(0,a.jsx)(n.p,{children:"Now, let's provide a systematic explanation of the main updates in this local release."}),"\n",(0,a.jsx)(n.h3,{id:"glossary-of-terms",children:"Glossary of Terms:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Data App"}),": an intelligent Data application built on DB-GPT."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"AWEL"}),": Agentic Workflow Expression Language, intelligent Workflow Expression Language"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"AWEL Flow"}),": workflow orchestration using the intelligent workflow Expression Language"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"SMMF"}),": a service-oriented multi-model management framework."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Datasource"}),": data sources, such as MySQL, PG, StarRocks, and Clickhouse."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"awel-workflow-and-application",children:"AWEL workflow and application"}),"\n",(0,a.jsx)(n.p,{children:"As shown in the following figure, in the left-side navigation pane, there is an AWEL workflow menu. After you open it, you can orchestrate the workflow."}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/awel_flow_list.png",width:"720px"})}),"\n",(0,a.jsx)(n.p,{children:"After the default installation, there is no content in the AWEL stream. You can build it in two ways."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Install it from the application repository provided by DB-GPT."}),"\n",(0,a.jsx)(n.li,{children:"Create it yourself. The following describes the simple use of the following two methods. For more detailed use, see DB-GPT following tutorial."}),"\n"]}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/flow_detail.png",width:"720px"})}),"\n",(0,a.jsx)(n.h3,{id:"to-install-from-the-official-repository",children:"To install from the official repository:"}),"\n",(0,a.jsxs)(n.p,{children:["Ensure that you first install and deploy DB-GPT.\nFollowing the installation and deployment, you can utilize the default ",(0,a.jsx)(n.code,{children:"dbgpt"})," command for various operations."]}),"\n",(0,a.jsx)(n.admonition,{title:"NOTE",type:"info",children:(0,a.jsx)(n.p,{children:"This process will allow you to subsequently install the AWEL workflow."})}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/dbgpts_cli.png",width:"720px"})}),"\n",(0,a.jsx)(n.p,{children:"As shown in the figure, the dbgpt command supports multiple operations, including model-related operations, knowledge base operations, and Trace logs. Here we will focus on the operation of the app."}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/dbgpts_apps.png",width:"720px"})}),"\n",(0,a.jsxs)(n.p,{children:["Pass ",(0,a.jsx)(n.code,{children:"dbgpt app"})," list-remote command, we can see that there are three AWEL workflows available in the current warehouse. Here we install ",(0,a.jsx)(n.code,{children:"awel-flow-web-info-search"})," this workflow. Run the command ",(0,a.jsx)(n.code,{children:"dbgpt app install awel-flow-web-info-search"})]}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/dbgpts_app_install.png",width:"720px"})}),"\n",(0,a.jsxs)(n.p,{children:["After the installation is successful, restart the DB-GPT service (dynamic hot loading is on the way), refresh the page, and then ",(0,a.jsx)(n.code,{children:"AWEL workflow page"})," see the corresponding workflow."]}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/dbgpts_flow_black.png",width:"720px"})}),"\n",(0,a.jsx)(n.h3,{id:"building-your-own",children:"Building Your Own"}),"\n",(0,a.jsxs)(n.p,{children:["In addition to installing the default AWEL flows using the official commands, you'll often need to build your own in practical scenarios. As illustrated below, by clicking on ",(0,a.jsx)(n.code,{children:"New AWEL Flow"}),", you will be brought to the editing page as shown."]}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/awel_flow_node.png",width:"720px"})}),"\n",(0,a.jsx)(n.p,{children:"During the editing process, each task's downstream nodes and operators support auto-completion. By clicking the plus sign (\u2795) located at the bottom right of each operator, you can bring up a list of potential downstream operators that can be connected to the current one. This feature enhances the user experience by providing suggestions and making it easier to construct complex workflows without needing to remember the exact names or types of operators that are available for use."}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/awel_flow_node_plus.png",width:"720px"})}),"\n",(0,a.jsx)(n.h2,{id:"create-a-data-application",children:"Create a data application"}),"\n",(0,a.jsx)(n.p,{children:"We introduced the construction and installation of AWEL workflow. Next, we will introduce how to create a data application based on a large model."}),"\n",(0,a.jsx)(n.h3,{id:"search-chat-app",children:"Search Chat App"}),"\n",(0,a.jsx)(n.p,{children:"The core capability of the search dialog application is to search for relevant knowledge through search engines (such as Baidu and Google) and then summarize and answer. The effect is as follows:"}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/app_search.png",width:"720px"})}),"\n",(0,a.jsxs)(n.p,{children:["Creating the preceding application is very simple. On the application creation panel, click ",(0,a.jsx)(n.code,{children:"create"})," , enter the following parameters to complete the creation. Note several parameters. 1. Working mode 2. Flows the working mode we use here is ",(0,a.jsx)(n.code,{children:"awel_layout"})," the selected AWEL workflow is installed earlier. ",(0,a.jsx)(n.code,{children:"awel-flow-web-info-search"})," this workflow."]}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/app_awel.png",width:"720px"})}),"\n",(0,a.jsx)(n.h3,{id:"data-analysis-assistant",children:"Data analysis assistant"}),"\n",(0,a.jsx)(n.p,{children:"Use Multi-Agents to write a data analysis Assistant application. The results are as follows."}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/app_analysis.png",width:"720px"})}),"\n",(0,a.jsx)("p",{align:"left",children:(0,a.jsx)("img",{src:"/img/app/app_analysis_black.png",width:"720px"})}),"\n",(0,a.jsx)(n.h2,{id:"other-update-details",children:"Other Update Details"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Release of dbgpt core sdk (#1092): Now includes AWEL operator orchestration capabilities.\nTo install, you can use the command: ",(0,a.jsx)(n.code,{children:"pip install dbgpt"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Support for Jina Embeddings (#1105): The update integrates with Jina AI, which provides a way to create and manage embeddings for various data types, enhancing search and similarity tasks within the applications."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"New example of schema-linking using AWEL (#1081): There's a new example available demonstrating how to use AWEL for schema-linking, which can be valuable for tasks that require mapping between different data schemas."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Unified card UI style, including knowledge base cards, model management cards, etc.: This update brings a more consistent look and feel across different UI components that display information in a card format."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"MySQL databases no longer support automatic table creation and field auto-updates (#1133): This change may require developers to manually handle database schema changes, improving control over database migrations."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Fixed the issue with default dialogues carrying history message records (#1117): This addresses potential privacy or performance issues by ensuring that history records are handled properly."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Fixed the issue in examples/awel where model_name was fetched from model_config improperly (#1112): This improves the reliability of AWEL examples by ensuring that the model configuration is fetched and used correctly."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Fixed DAGs sharing data issue (#1102): This fix might relate to data isolation in Directed Acyclic Graphs (DAGs) to ensure that workflows do not inadvertently share or overwrite data."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Fixed issue with examples/awel default loading model text2vec-large-chinese (#1095): This fix ensures that the large Chinese text-to-vector model loads as expected in the given examples."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"These changes reflect ongoing improvements to the dbgpt project, enhancing its capabilities, fixing known issues, and refining user experience. Users should refer to the official documentation or release notes for detailed instructions and information on these updates."}),"\n",(0,a.jsx)(n.h2,{id:"upgrade-to-v050",children:"Upgrade to V0.5.0"}),"\n",(0,a.jsx)(n.p,{children:"If your current version is V0.4.6 or V0.4.7, you need to upgrade to V0.5.0."}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Suspend Service"}),"\n",(0,a.jsx)(n.li,{children:"upgrade the database table structure"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"-- dbgpt.dbgpt_serve_flow definition\nCREATE TABLE `dbgpt_serve_flow` (\n  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Auto increment id',\n  `uid` varchar(128) NOT NULL COMMENT 'Unique id',\n  `dag_id` varchar(128) DEFAULT NULL COMMENT 'DAG id',\n  `name` varchar(128) DEFAULT NULL COMMENT 'Flow name',\n  `flow_data` text COMMENT 'Flow data, JSON format',\n  `user_name` varchar(128) DEFAULT NULL COMMENT 'User name',\n  `sys_code` varchar(128) DEFAULT NULL COMMENT 'System code',\n  `gmt_created` datetime DEFAULT NULL COMMENT 'Record creation time',\n  `gmt_modified` datetime DEFAULT NULL COMMENT 'Record update time',\n  `flow_category` varchar(64) DEFAULT NULL COMMENT 'Flow category',\n  `description` varchar(512) DEFAULT NULL COMMENT 'Flow description',\n  `state` varchar(32) DEFAULT NULL COMMENT 'Flow state',\n  `source` varchar(64) DEFAULT NULL COMMENT 'Flow source',\n  `source_url` varchar(512) DEFAULT NULL COMMENT 'Flow source url',\n  `version` varchar(32) DEFAULT NULL COMMENT 'Flow version',\n  `label` varchar(128) DEFAULT NULL COMMENT 'Flow label',\n  `editable` int DEFAULT NULL COMMENT 'Editable, 0: editable, 1: not editable',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_uid` (`uid`),\n  KEY `ix_dbgpt_serve_flow_sys_code` (`sys_code`),\n  KEY `ix_dbgpt_serve_flow_uid` (`uid`),\n  KEY `ix_dbgpt_serve_flow_dag_id` (`dag_id`),\n  KEY `ix_dbgpt_serve_flow_user_name` (`user_name`),\n  KEY `ix_dbgpt_serve_flow_name` (`name`)\n) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n\n-- dbgpt.gpts_app definition\nCREATE TABLE `gpts_app` (\n  `id` int NOT NULL AUTO_INCREMENT COMMENT 'autoincrement id',\n  `app_code` varchar(255) NOT NULL COMMENT 'Current AI assistant code',\n  `app_name` varchar(255) NOT NULL COMMENT 'Current AI assistant name',\n  `app_describe` varchar(2255) NOT NULL COMMENT 'Current AI assistant describe',\n  `language` varchar(100) NOT NULL COMMENT 'gpts language',\n  `team_mode` varchar(255) NOT NULL COMMENT 'Team work mode',\n  `team_context` text COMMENT 'The execution logic and team member content that teams with different working modes rely on',\n  `user_code` varchar(255) DEFAULT NULL COMMENT 'user code',\n  `sys_code` varchar(255) DEFAULT NULL COMMENT 'system app code',\n  `created_at` datetime DEFAULT NULL COMMENT 'create time',\n  `updated_at` datetime DEFAULT NULL COMMENT 'last update time',\n  `icon` varchar(1024) DEFAULT NULL COMMENT 'app icon, url',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_gpts_app` (`app_name`)\n) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n\nCREATE TABLE `gpts_app_collection` (\n  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'autoincrement id',\n  `app_code` varchar(255) NOT NULL COMMENT 'Current AI assistant code',\n  `user_code` int(11) NOT NULL COMMENT 'user code',\n  `sys_code` varchar(255) NOT NULL COMMENT 'system app code',\n  `created_at` datetime DEFAULT NULL COMMENT 'create time',\n  `updated_at` datetime DEFAULT NULL COMMENT 'last update time',\n  PRIMARY KEY (`id`),\n  KEY `idx_app_code` (`app_code`),\n  KEY `idx_user_code` (`user_code`)\n) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT=\"gpt collections\";\n\n-- dbgpt.gpts_app_detail definition\nCREATE TABLE `gpts_app_detail` (\n  `id` int NOT NULL AUTO_INCREMENT COMMENT 'autoincrement id',\n  `app_code` varchar(255) NOT NULL COMMENT 'Current AI assistant code',\n  `app_name` varchar(255) NOT NULL COMMENT 'Current AI assistant name',\n  `agent_name` varchar(255) NOT NULL COMMENT ' Agent name',\n  `node_id` varchar(255) NOT NULL COMMENT 'Current AI assistant Agent Node id',\n  `resources` text COMMENT 'Agent bind  resource',\n  `prompt_template` text COMMENT 'Agent bind  template',\n  `llm_strategy` varchar(25) DEFAULT NULL COMMENT 'Agent use llm strategy',\n  `llm_strategy_value` text COMMENT 'Agent use llm strategy value',\n  `created_at` datetime DEFAULT NULL COMMENT 'create time',\n  `updated_at` datetime DEFAULT NULL COMMENT 'last update time',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `uk_gpts_app_agent_node` (`app_name`,`agent_name`,`node_id`)\n) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"ALTER TABLE `gpts_conversations`\nADD COLUMN `team_mode` varchar(255) NULL COMMENT 'agent team work mode';\n\nALTER TABLE `gpts_conversations`\nADD COLUMN  `current_goal` text COMMENT 'The target corresponding to the current message';\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Reinstall dependencies"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'pip install -e ".[default]"\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Start the service"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"acknowledgments",children:"Acknowledgments"}),"\n",(0,a.jsx)(n.p,{children:"We would like to express our deepest gratitude to all the contributors who made this release possible!"}),"\n",(0,a.jsx)(n.p,{children:"@Aralhi, @Aries-ckt, @JoanFM, @csunny, @fangyinc, @Hzh_97, @junewgl, @lcxadml, @likenamehaojie, @xiuzhu9527 and @yhjun1026"}),"\n",(0,a.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["DB-GPT framework: ",(0,a.jsx)(n.a,{href:"https://github.com/eosphoros-ai",children:"https://github.com/eosphoros-ai"})]}),"\n",(0,a.jsxs)(n.li,{children:["Text2SQL fine tuning: ",(0,a.jsx)(n.a,{href:"https://github.com/eosphoros-ai/DB-GPT-Hub",children:"https://github.com/eosphoros-ai/DB-GPT-Hub"})]}),"\n",(0,a.jsxs)(n.li,{children:["DB-GPT-Web : ",(0,a.jsx)(n.a,{href:"https://github.com/eosphoros-ai/DB-GPT-Web",children:"https://github.com/eosphoros-ai/DB-GPT-Web"})]}),"\n",(0,a.jsxs)(n.li,{children:["official English documentation: ",(0,a.jsx)(n.a,{href:"http://docs.dbgpt.site/docs/overview",children:"http://docs.dbgpt.site/docs/overview"})]}),"\n",(0,a.jsxs)(n.li,{children:["official Chinese documentation: ",(0,a.jsx)(n.a,{href:"https://www.yuque.com/eosphoros/dbgpt-docs/bex30nsv60ru0fmx",children:"https://www.yuque.com/eosphoros/dbgpt-docs/bex30nsv60ru0fmx"})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(6540);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);