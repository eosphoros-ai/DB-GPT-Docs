"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1033],{2846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(4848),a=t(8453);const o={},s="Text2SQL Fine-Tuning",r={id:"application_manual/fine_tuning_manual/text_to_sql",title:"Text2SQL Fine-Tuning",description:"We have split the Text2SQL-related fine-tuning code into the DB-GPT-Hub sub-project, and you can also view the source code directly.",source:"@site/docs/application_manual/fine_tuning_manual/text_to_sql.md",sourceDirName:"application_manual/fine_tuning_manual",slug:"/application_manual/fine_tuning_manual/text_to_sql",permalink:"/docs/latest/application_manual/fine_tuning_manual/text_to_sql",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SMMF",permalink:"/docs/latest/application_manual/advanced_tutorial/smmf"},next:{title:"Data Agent",permalink:"/docs/latest/application_manual/started_tutorial/agent"}},d={},l=[{value:"Fine-tune pipline",id:"fine-tune-pipline",level:2},{value:"Build environment",id:"build-environment",level:2},{value:"Data processing",id:"data-processing",level:2},{value:"Data collection",id:"data-collection",level:3},{value:"Data processing",id:"data-processing-1",level:3},{value:"Code interpretation",id:"code-interpretation",level:3},{value:"Model train",id:"model-train",level:2},{value:"Model merge",id:"model-merge",level:2},{value:"Model predict",id:"model-predict",level:2},{value:"Model evaluation",id:"model-evaluation",level:2},{value:"Appendix",id:"appendix",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"text2sql-fine-tuning",children:"Text2SQL Fine-Tuning"}),"\n",(0,i.jsxs)(n.p,{children:["We have split the Text2SQL-related fine-tuning code into the ",(0,i.jsx)(n.code,{children:"DB-GPT-Hub "}),"sub-project, and you can also view the source code directly."]}),"\n",(0,i.jsx)(n.h2,{id:"fine-tune-pipline",children:"Fine-tune pipline"}),"\n",(0,i.jsx)(n.p,{children:"Text2SQL pipline mainly includes the following processes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#build-environment",children:"Build environment"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#data-processing",children:"Data processing"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#model-train",children:"Model train"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#model-merge",children:"Model merge"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#model-predict",children:"Model predict"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#model-evaluation",children:"Model evaluation"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"build-environment",children:"Build environment"}),"\n",(0,i.jsx)(n.p,{children:"We recommend using the conda virtual environment to build a Text2SQL fine-tuning environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"git clone https://github.com/eosphoros-ai/DB-GPT-Hub.git\ncd DB-GPT-Hub\nconda create -n dbgpt_hub python=3.10 \nconda activate dbgpt_hub\nconda install -c conda-forge poetry>=1.4.0\npoetry install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The current project supports multiple LLMs and can be downloaded on demand. In this tutorial, we use ",(0,i.jsx)(n.code,{children:"CodeLlama-13b-Instruct-hf"})," as the base model. The model can be downloaded from platforms such as ",(0,i.jsx)(n.a,{href:"https://huggingface.co/",children:"HuggingFace"})," and ",(0,i.jsx)(n.a,{href:"https://modelscope.cn/models",children:"Modelscope"}),". Taking HuggingFace as an example, the download command is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"cd Your_model_dir\ngit lfs install\ngit clone git@hf.co:codellama/CodeLlama-13b-Instruct-hf\n"})}),"\n",(0,i.jsx)(n.h2,{id:"data-processing",children:"Data processing"}),"\n",(0,i.jsx)(n.h3,{id:"data-collection",children:"Data collection"}),"\n",(0,i.jsxs)(n.p,{children:["The case data of this tutorial mainly uses the ",(0,i.jsx)(n.code,{children:"Spider"})," dataset as an example:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["introduction:  the ",(0,i.jsx)(n.code,{children:"Spider"})," dataset is recognized as the most difficult large-scale cross-domain evaluation list in the industry. It contains 10,181 natural language questions and 5,693 SQL statements, involving more than 200 databases in 138 different fields."]}),"\n",(0,i.jsxs)(n.li,{children:["download: ",(0,i.jsx)(n.a,{href:"https://drive.google.com/uc?export=download&id=1TqleXec_OykOYFREKKtschzY29dUcVAQ",children:"download"})," the data set to the project directory, which is located in ",(0,i.jsx)(n.code,{children:"dbgpt_hub/data/spider"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"data-processing-1",children:"Data processing"}),"\n",(0,i.jsxs)(n.p,{children:["The project uses the information matching generation method for data preparation, that is, the ",(0,i.jsx)(n.code,{children:"SQL + Repository"})," generation method that combines table information. This method combines the data table information to better understand the structure and relationship of the data table, and to better generate SQL that meets the needs."]}),"\n",(0,i.jsxs)(n.p,{children:["The project has encapsulated the relevant processing code in the corresponding script. You can directly run the script command with one click. The generated training sets ",(0,i.jsx)(n.code,{children:"example_text2sql_train.json"})," and ",(0,i.jsx)(n.code,{children:"example_text2sql_dev.json"})," will be obtained in the ",(0,i.jsx)(n.code,{children:"dbgpt_hub/data/"})," directory."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Generate train data and dev(eval) data\nsh dbgpt_hub/scripts/gen_train_eval_data.sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There are ",(0,i.jsx)(n.code,{children:"8659"})," items in the training set and ",(0,i.jsx)(n.code,{children:"1034"})," items in the dev set. The generated training set data format is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "db_id": "department_management",\n  "instruction": "I want you to act as a SQL terminal in front of an example database, you need only to return the sql command to me.Below is an instruction that describes a task, Write a response that appropriately completes the request.\\n\\"\\n##Instruction:\\ndepartment_management contains tables such as department, head, management. Table department has columns such as Department_ID, Name, Creation, Ranking, Budget_in_Billions, Num_Employees. Department_ID is the primary key.\\nTable head has columns such as head_ID, name, born_state, age. head_ID is the primary key.\\nTable management has columns such as department_ID, head_ID, temporary_acting. department_ID is the primary key.\\nThe head_ID of management is the foreign key of head_ID of head.\\nThe department_ID of management is the foreign key of Department_ID of department.\\n\\n",\n  "input": "###Input:\\nHow many heads of the departments are older than 56 ?\\n\\n###Response:",\n  "output": "SELECT count(*) FROM head WHERE age  >  56",\n  "history": []\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Configure the training data file in ",(0,i.jsx)(n.code,{children:"dbgpt_hub/data/dataset_info.json"}),". The value of the corresponding key in the json file defaults to ",(0,i.jsx)(n.code,{children:"example_text2sql"}),". This value is the value that needs to be passed in for the parameter ",(0,i.jsx)(n.code,{children:"--dataset"})," in the subsequent training script train_sft. The ",(0,i.jsx)(n.code,{children:"file_name"})," in json The value is the file name of the training set."]}),"\n",(0,i.jsx)(n.h3,{id:"code-interpretation",children:"Code interpretation"}),"\n",(0,i.jsxs)(n.p,{children:["The core code of data processing is mainly in ",(0,i.jsx)(n.code,{children:"dbgpt_hub/data_process/sql_data_process.py"}),". The core processing class is ",(0,i.jsx)(n.code,{children:"ProcessSqlData()"}),", and the core processing function is ",(0,i.jsx)(n.code,{children:"decode_json_file()"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"decode_json_file()"})," first processes the table information in the ",(0,i.jsx)(n.code,{children:"Spider"})," data into a dictionary format. The ",(0,i.jsx)(n.code,{children:"key"})," and ",(0,i.jsx)(n.code,{children:"value"})," are respectively the ",(0,i.jsx)(n.code,{children:"db_id"})," and the ",(0,i.jsx)(n.code,{children:"table"})," and ",(0,i.jsx)(n.code,{children:"column"})," information corresponding to the ",(0,i.jsx)(n.code,{children:"db_id"})," into the required format, for example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "department_management": department_management contains tables such as department, head, management. Table department has columns such as Department_ID, Name, Creation, Ranking, Budget_in_Billions, Num_Employees. Department_ID is the primary key.\\nTable head has columns such as head_ID, name, born_state, age. head_ID is the primary key.\\nTable management has columns such as department_ID, head_ID, temporary_acting. department_ID is the primary key.\\nThe head_ID of management is the foreign key of head_ID of head.\\nThe department_ID of management is the foreign key of Department_ID of department.\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then fill the ",(0,i.jsx)(n.code,{children:"{}"})," part of ",(0,i.jsx)(n.code,{children:"INSTRUCTION_PROMPT"})," in the config file with the above text to form the final instruction. ",(0,i.jsx)(n.code,{children:"INSTRUCTION_PROMPT"})," is as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'INSTRUCTION_PROMPT = "I want you to act as a SQL terminal in front of an example database, you need only to return the sql command to me.Below is an instruction that describes a task, Write a response that appropriately completes the request.\\n ##Instruction:\\n{}\\n"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, the question and query corresponding to each ",(0,i.jsx)(n.code,{children:"db_id"}),"in the training set and validation set are processed into the format required for model SFT training, that is, the data format shown in the execution part of the data processing code above."]}),"\n",(0,i.jsx)(n.admonition,{title:"note",type:"info",children:(0,i.jsx)(n.p,{children:"If you want to collect more data for training yourself, you can use the relevant code of this project to process it according to the above logic."})}),"\n",(0,i.jsx)(n.h2,{id:"model-train",children:"Model train"}),"\n",(0,i.jsxs)(n.p,{children:["For the sake of simplicity, this reproduction tutorial uses LoRA fine-tuning to run directly as an example, but project fine-tuning can support not only ",(0,i.jsx)(n.code,{children:"LoRA"})," but also ",(0,i.jsx)(n.code,{children:"QLoRA"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/DeepSpeed",children:"deepspeed"})," acceleration. The detailed parameters of the training script ",(0,i.jsx)(n.code,{children:"dbgpt_hub/scripts/train_sft.sh"})," are as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"CUDA_VISIBLE_DEVICES=0 python dbgpt_hub/train/sft_train.py \\\n    --model_name_or_path Your_download_CodeLlama-13b-Instruct-hf_path \\\n    --do_train \\\n    --dataset example_text2sql_train \\\n    --max_source_length 2048 \\\n    --max_target_length 512 \\\n    --finetuning_type lora \\\n    --lora_target q_proj,v_proj \\\n    --template llama2 \\\n    --lora_rank 64 \\\n    --lora_alpha 32 \\\n    --output_dir dbgpt_hub/output/adapter/code_llama-13b-2048_epoch8_lora \\\n    --overwrite_cache \\\n    --overwrite_output_dir \\\n    --per_device_train_batch_size 1 \\\n    --gradient_accumulation_steps 16 \\\n    --lr_scheduler_type cosine_with_restarts \\\n    --logging_steps 50 \\\n    --save_steps 2000 \\\n    --learning_rate 2e-4 \\\n    --num_train_epochs 8 \\\n    --plot_loss \\\n    --bf16\n"})}),"\n",(0,i.jsx)(n.p,{children:"Introduction to key parameters and meanings in train_sft.sh:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"model_name_or_path"})," : Path to the LLM model used."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dataset"}),": The value is the configuration name of the training data set, corresponding to the outer key value in ",(0,i.jsx)(n.code,{children:"dbgpt_hub/data/dataset_info.json"}),", such as ",(0,i.jsx)(n.code,{children:"example_text2sql"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_source_length"}),": Enter the text length of the model. The effect parameter of this tutorial is ",(0,i.jsx)(n.code,{children:"2048"}),", which is the optimal length after multiple experiments and analysis."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_target_length"}),": The sql content length of the output model, set to ",(0,i.jsx)(n.code,{children:"512"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"template"}),": The lora part of different model fine-tuning in the project settings. For the Llama2 series models, it is set to ",(0,i.jsx)(n.code,{children:"llama2"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lora_target"}),": The network parameter changing part during LoRA fine-tuning."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"finetuning_type"}),": Finetuning type, the value is ",(0,i.jsx)(n.code,{children:"[ptuning, lora, freeze, full]"}),", etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lora_rank"}),": Rank size in LoRA fine-tuning."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lora_alpha"}),": scaling factor in LoRA fine-tuning."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"output_dir"}),": The path output by the Peft module during SFT fine-tuning. The default setting is under the ",(0,i.jsx)(n.code,{children:"dbgpt_hub/output/adapter/"})," path."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"per_device_train_batch_size"}),": The batch of training samples on each GPU. If the computing resources support it, it can be set to larger. The default is ",(0,i.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gradient_accumulation_steps"}),": The accumulated steps value of gradient update."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lr_scheduler_type"}),": learning rate type."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"logging_steps"}),": steps interval for log saving."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"save_steps"}),": The steps size value of ckpt saved by the model."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"num_train_epochs"}),": The number of epochs of training data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"learning_rate"}),": learning rate, the recommended learning rate is ",(0,i.jsx)(n.code,{children:"2e-4"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If you want to train based on ",(0,i.jsx)(n.code,{children:"QLoRA"}),", you can add the parameter quantization_bit to the script to indicate whether to quantize. The value is ",(0,i.jsx)(n.code,{children:"[4 or 8]"})," to enable quantization.\nIf you want to fine-tune different LLMs, the key parameters ",(0,i.jsx)(n.code,{children:"lora_target"})," and ",(0,i.jsx)(n.code,{children:"template"})," corresponding to different models can be changed by referring to the relevant content in the project's ",(0,i.jsx)(n.code,{children:"README.md"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"model-merge",children:"Model merge"}),"\n",(0,i.jsx)(n.h2,{id:"model-predict",children:"Model predict"}),"\n",(0,i.jsxs)(n.p,{children:["After the model training is completed, to predict the trained model, you can directly run ",(0,i.jsx)(n.code,{children:"predict_sft.sh"})," in the project script directory."]}),"\n",(0,i.jsx)(n.p,{children:"Prediction run command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"sh ./dbgpt_hub/scripts/predict_sft.sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the project directory ",(0,i.jsx)(n.code,{children:"./dbgpt_hub/output/pred/"}),", this file path is the location of the default output of the model prediction results (if it does not exist, it needs to be created). The detailed parameters in ",(0,i.jsx)(n.code,{children:"predict_sft.sh"})," for this tutorial are as follows:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'\necho " predict Start time: $(date)"\n## predict\nCUDA_VISIBLE_DEVICES=0 python dbgpt_hub/predict/predict.py \\\n    --model_name_or_path Your_download_CodeLlama-13b-Instruct-hf_path \\\n    --template llama2 \\\n    --finetuning_type lora \\\n    --checkpoint_dir Your_last_peft_checkpoint-4000  \\\n    --predicted_out_filename Your_model_pred.sql\n\necho "predict End time: $(date)"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The value of the parameter ",(0,i.jsx)(n.code,{children:"--predicted_out_filename"})," is the file name of the result predicted by the model, and the results can be found in the ",(0,i.jsx)(n.code,{children:"dbgpt_hub/output/pred"})," directory."]}),"\n",(0,i.jsx)(n.h2,{id:"model-evaluation",children:"Model evaluation"}),"\n",(0,i.jsxs)(n.p,{children:["For the evaluation of the model's effect on the dataset, the default is on the ",(0,i.jsx)(n.code,{children:"Spider"})," dataset. Run the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"python dbgpt_hub/eval/evaluation.py --plug_value --input  Your_model_pred.sql\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The results generated by large models have a certain degree of randomness because they are closely related to parameters such as ",(0,i.jsx)(n.code,{children:"temperature"})," (can be adjusted in ",(0,i.jsx)(n.code,{children:"GeneratingArguments"})," in ",(0,i.jsx)(n.code,{children:"/dbgpt_hub/configs/model_args.py"}),"). By default, the execution accuracy of our multiple evaluations is ",(0,i.jsx)(n.code,{children:"0.789"})," and above. We have placed some of the experimental and evaluation results in the project ",(0,i.jsx)(n.code,{children:"docs/eval_llm_result.md"})," for reference only."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DB-GPT-Hub"})," uses ",(0,i.jsx)(n.code,{children:"LoRA"})," to fine-tune the weight file on ",(0,i.jsx)(n.code,{children:"Spider"}),"'s training set based on the LLM of ",(0,i.jsx)(n.code,{children:"CodeLlama-13b-Instruct-hf"}),". The weight file has been released. Currently, it has achieved an execution accuracy of about ",(0,i.jsx)(n.code,{children:"0.789"})," on the ",(0,i.jsx)(n.code,{children:"Spider"}),"'s evaluation set. The weight file ",(0,i.jsx)(n.code,{children:"CodeLlama-13b-sql-lora"})," is available on ",(0,i.jsx)(n.a,{href:"https://huggingface.co/eosphoros",children:"HuggingFace"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,i.jsxs)(n.p,{children:["The experimental environment of this article is based on a graphics card server with ",(0,i.jsx)(n.code,{children:"A100 (40G)"}),", and the total training time is about 12 hours. If your machine resources are insufficient, you can give priority to reducing the value of the parameter ",(0,i.jsx)(n.code,{children:"gradient_accumulation_steps"}),". In addition, you can consider using ",(0,i.jsx)(n.code,{children:"QLoRA"})," to fine-tune (add ",(0,i.jsx)(n.code,{children:"--quantization_bit 4"})," to the training script ",(0,i.jsx)(n.code,{children:"dbgpt_hub/scripts/train_sft.sh"}),"). From our experience, ",(0,i.jsx)(n.code,{children:"QLoRA"})," At ",(0,i.jsx)(n.code,{children:"8"})," epochs, the results are not much different from the ",(0,i.jsx)(n.code,{children:"LoRA"})," fine-tuning results."]}),"\n",(0,i.jsx)(n.h1,{id:"test",children:"test"}),"\n",(0,i.jsx)(n.p,{children:"The output is as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"dbgpt trace --help\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"note",type:"info"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);