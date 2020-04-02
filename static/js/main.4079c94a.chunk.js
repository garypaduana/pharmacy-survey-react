(this["webpackJsonppharmacy-survey-react"]=this["webpackJsonppharmacy-survey-react"]||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),r=n(53),i=n.n(r),o=(n(65),n(43)),u=n(19),l=n(54),p=n(38),c=n(39),h=n(44),d=n(40),m=n(10),b=n(45),y=n(56),f=n.n(y),E=n(55);n(66),n(67);var v=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={currentQuestion:"1",responses:{},history:[],backHistory:[],nextEnabled:!0,previousEnabled:!0},n.onQuestionAnswered=n.onQuestionAnswered.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n.goNext=n.goNext.bind(Object(m.a)(n)),n.goPrevious=n.goPrevious.bind(Object(m.a)(n)),n.resetButtons=n.resetButtons.bind(Object(m.a)(n)),n}return Object(b.a)(t,e),Object(c.a)(t,[{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"onQuestionAnswered",value:function(e,t){var n=this.props.questions.find((function(t){return t.number===e}));this.setState((function(n,s){return{responses:Object(l.a)({},n.responses,Object(u.a)({},e,t))}})),this.cleanDoubleResponses(n,t)}},{key:"handleSubmit",value:function(e){alert("name: "+e.target.name+"; value: "+e.target.value),e.preventDefault()}},{key:"resetButtons",value:function(){this.setState({nextEnabled:!0,previousEnabled:!0})}},{key:"goPrevious",value:function(e){var t=this;if(this.state.history.length>0){var n=this.state.history.slice(this.state.history.length-1,this.state.history.length);0===n.length&&(n=["1"]),this.setState((function(e,s){return e.backHistory.unshift(e.currentQuestion),{currentQuestion:n[0],backHistory:e.backHistory,history:Object(o.a)(t.state.history.slice(0,t.state.history.length-1)),nextEnabled:!0}}))}else this.setState({previousEnabled:!1,nextEnabled:!0})}},{key:"goNext",value:function(e){var t=this,n=this.props.questions.find((function(e){return e.number===t.state.currentQuestion})),s=this.state.responses[this.state.currentQuestion],a=n.nextNumber.find((function(e){return new RegExp(e.pattern).test(s)}));null!=a&&(a=a.next),null!=a&&this.props.questions.find((function(e){return e.number===a}))?this.setState((function(e,s){return e.backHistory.shift(),{currentQuestion:a,backHistory:e.backHistory,history:[].concat(Object(o.a)(t.state.history),[n.number]),previousEnabled:!0}})):this.setState({nextEnabled:!1,previousEnabled:!0})}},{key:"cleanDoubleResponses",value:function(e,t){var n=this;e.nextNumber.find((function(e){return".*"===e.pattern}))||e.nextNumber.filter((function(e){return!new RegExp(e.pattern).test(t)})).forEach((function(e){n.setState((function(e,t){var n=e.responses;return e.backHistory.forEach((function(e){delete n[e]})),{backHistory:[],responses:n}}))}))}},{key:"render",value:function(){var e=this,t=this.props.questions.find((function(t){return t.number===e.state.currentQuestion})),n=t?a.a.createElement(g,{question:t,labels:this.props.labels,response:this.state.responses[this.state.currentQuestion],onQuestionAnswered:this.onQuestionAnswered,validationError:!this.state.nextEnabled,resetButtons:this.resetButtons}):a.a.createElement("p",null,"Question ",this.state.currentQuestion," not found!");return a.a.createElement("div",null,a.a.createElement("div",{className:"container survey"},a.a.createElement("div",{className:"header"},' Question "',this.state.currentQuestion,'" of ',this.props.questions.length),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("div",{className:"question"},n)),a.a.createElement("button",{className:"navigation",type:"submit",name:"button_previous",onClick:this.goPrevious,disabled:!this.state.previousEnabled},"Previous"),a.a.createElement("button",{className:"navigation",type:"submit",name:"button_next",onClick:this.goNext,disabled:!this.state.nextEnabled},"Next"),a.a.createElement("br",null)),a.a.createElement("br",null)," ",a.a.createElement("br",null),a.a.createElement("pre",{className:"code"},JSON.stringify(this.state,null,2)))}}]),t}(a.a.Component),g=function(e){function t(){var e,n;Object(p.a)(this,t);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).handleEntry=function(e,t){var s=n.props.response||{},a=t.target.value;0===a.length?delete s[e]:s[e]=a,n.props.onQuestionAnswered(n.props.question.number,s),n.props.resetButtons()},n.handleDatePickerChange=function(e){n.props.onQuestionAnswered(n.props.question.number,e),n.props.resetButtons()},n.handleSingleSelection=function(e){n.props.onQuestionAnswered(n.props.question.number,e.target.name),n.props.resetButtons()},n.handleMultipleSelection=function(e){var t=n.props.response||[];t.includes(e.target.name)?t=t.filter((function(t,n,s){return t!==e.target.name})):t.push(e.target.name),n.props.onQuestionAnswered(n.props.question.number,t),n.props.resetButtons()},n}return Object(b.a)(t,e),Object(c.a)(t,[{key:"handleSingleThenMultiple",value:function(e,t,n){var s=this.props.response||{},a=new RegExp("Other.*").test(t);if(Object.keys(s).includes(e)||((s={})[e]={}),a){var r=n.target.value;0===r.length?delete s[e][t]:s[e][t]=r}else s[e].hasOwnProperty(t)?delete s[e][t]:t?s[e][t]=null:s[e]={};this.props.onQuestionAnswered(this.props.question.number,s),this.props.resetButtons()}},{key:"generateChildren",value:function(e,t){var n=this,s=a.a.createElement("div",null);return this.props.response&&this.props.response.hasOwnProperty(t)&&(s=e[t].map((function(e){return new RegExp("Other.*").test(e)?a.a.createElement("div",{className:"child"},e," ",a.a.createElement("input",{type:"text",name:e,key:t+"."+e,value:n.props.response[t][e],onChange:function(s){return n.handleSingleThenMultiple(t,e,s)}}),a.a.createElement("br",null)):a.a.createElement("div",{className:"child"},a.a.createElement("input",{type:"checkbox",name:e,key:t+"."+e,checked:n.props.response&&n.props.response[t].hasOwnProperty(e),onChange:function(s){return n.handleSingleThenMultiple(t,e,s)}})," ",e,a.a.createElement("br",null))}))),s}},{key:"generateInputOptions",value:function(e){var t=this,n=a.a.createElement("div",null),s=this.props.question.questionForPatient.responseType;if("DATE_PICKER_OPTIONAL"===s)n=a.a.createElement("div",{className:"parent "+(e?"validationError":"")},a.a.createElement(f.a,{className:"datePicker",placeholderText:this.props.labels[s].empty,maxDate:new Date,isClearable:!0,selected:this.props.response,onChange:this.handleDatePickerChange}));else if("SINGLE_SELECTION"===s)n=this.props.question.questionForPatient.options.map((function(n){return a.a.createElement("div",{className:"parent "+(e?"validationError":"")},a.a.createElement("input",{type:"radio",name:n,key:n,checked:t.props.response===n,onChange:t.handleSingleSelection})," ",n)}));else if("MULTIPLE_SELECTION"===s)n=this.props.question.questionForPatient.options.map((function(n){return a.a.createElement("div",{className:"parent "+(e?"validationError":"")},a.a.createElement("input",{type:"checkbox",name:n,key:n,checked:t.props.response&&t.props.response.includes(n),onChange:t.handleMultipleSelection})," ",n)}));else if("SINGLE_SELECTION_THEN_MULTIPLE_SELECTION"===s){var r=this.props.question.questionForPatient.options;n=Object.keys(r).map((function(n){return a.a.createElement("div",{className:"parent "+(e?"validationError":"")},a.a.createElement("input",{type:"radio",name:n,key:n,checked:t.props.response&&t.props.response.hasOwnProperty(n),onChange:function(e){return t.handleSingleThenMultiple(n,null,e)}})," ",n,a.a.createElement("br",null),t.generateChildren(r,n))}))}else"ENTRY"===s&&(n=this.props.question.questionForPatient.options.map((function(n){return a.a.createElement("div",{className:"parent "+(e?"validationError":"")},n," ",a.a.createElement("input",{type:"text",name:n,key:n,value:t.props.response&&t.props.response[n]||"",onChange:function(e){return t.handleEntry(n,e)}}))})));return a.a.createElement("div",{className:"inputOptions"},n)}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{className:"questionText"},this.props.question.questionForPatient.question),this.generateInputOptions(this.props.validationError))}}]),t}(a.a.Component),N=function(){var e=E;return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(v,e)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},55:function(e){e.exports=JSON.parse('{"questions":[{"number":"1","nextNumber":[{"pattern":".*","next":"2"}],"stateSpecific":[],"questionForPatient":{"responseType":"SINGLE_SELECTION","question":"Which of the following describes you?","options":["Pharmacist","Other"]}},{"number":"2","nextNumber":[{"pattern":".*","next":"3"}],"stateSpecific":[],"questionForPatient":{"responseType":"SINGLE_SELECTION","question":"Which of the following best describes your type of practice?","options":["Independent pharmacy","Chain pharmacy","Student health pharmacy","Clinic","Other"]}},{"number":"3","nextNumber":[{"pattern":".*","next":"4"}],"stateSpecific":[],"questionForPatient":{"responseType":"ENTRY","question":"Please provide your US zip code","options":[""]}},{"number":"4","nextNumber":[{"pattern":".*","next":"5"}],"stateSpecific":[],"questionForPatient":{"responseType":"ENTRY","question":"How old is the patient?","options":[""]}},{"number":"5","nextNumber":[{"pattern":"Yes","next":"6"},{"pattern":"No","next":"7"}],"stateSpecific":[],"questionForPatient":{"responseType":"SINGLE_SELECTION","question":"Does the patient have menstrual periods?","options":["Yes","No"]}},{"number":"6","nextNumber":[{"pattern":".*","next":"7"}],"stateSpecific":[],"questionForPatient":{"responseType":"DATE_PICKER_OPTIONAL","question":"When is the first day of the patient\'s last menstrual period?"}},{"number":"7","nextNumber":[{"pattern":"Yes","next":"END"},{"pattern":"No","next":"8"}],"stateSpecific":[],"questionForPatient":{"responseType":"SINGLE_SELECTION","question":"Does the patient have any signs or symptoms of pregnancy?","options":["Yes","No"]}},{"number":"8","nextNumber":[{"pattern":".*","next":"9"}],"stateSpecific":[],"questionForPatient":{"responseType":"MULTIPLE_SELECTION","question":"Please indicate if the patient meets any of the following criteria to be reasonably certain the patient is not pregnant (select all that apply)","options":["Had a baby less than 6 months ago, fully or nearly-fully breastfeeding AND has had no menstrual period since the delivery","Had a baby in the last 4 weeks","Miscarriage or abortion in the last 7 days","Last menstrual period started within the last 7 days","Abstained from sexual intercourse since your last menstrual period or delivery","Has been using a reliable contraceptive method consistently and correctly","Has taken emergency contraception in the last 5 days","None (please stop here and refer your patient)"]}},{"number":"9","nextNumber":[{"pattern":".*","next":"10"}],"stateSpecific":[],"questionForPatient":{"responseType":"MULTIPLE_SELECTION","question":"Please indicate if the patient has any of the following medical conditions (select all that apply)","options":["Current or past breast cancer","<42 days postpartum","Severe (decompensated) cirrhosis ","History of DVT/PE and not receiving anticoagulant history","Acute DVT/PE","DVT/PE and established anticoagulant therapy for at least 3 months ","Major surgery with prolonged immobilization ","Diabetes with nephropathy/retinopathy/neuropathy or diabetes with other vascular disease or diabetes of >20 years\u2019 duration ","Current gallbladder disease or medically treated gallbladder disease","Migraines with aura ","History of malabsorptive bariatric procedures","History of combined oral contraceptive related cholestasis","Hypertension diagnosis","Inflammatory bowel disease (ulcerative colitis, Crohn\u2019s disease)","Current and history of ischemic heart disease","Hepatocellular adenoma or malignant liver tumor (hepatoma)","Multiple risk factors for atherosclerotic cardiovascular disease (older age, smoking, hypertension, low HDL, high LDL, or high triglyceride levels) ","Multiple sclerosis with prolonged immobility ","Peripartum cardiomyopathy","Non breastfeeding <21 days postpartum or non breastfeeding 21 to 42 days postpartum with risk factors for VTE","Smoker and older than 35","Complicated solid organ transplant ","History of stroke ","Acute or history of superficial venous thrombosis","Systemic lupus erythematosus with positive (or unknown) antiphospholipid antibodies","Systemic lupus erythematosus with severe thrombocytopenia ","Unexplained vaginal bleeding ","Complicated valvular heart disease ","Acute or flare viral hepatitis"]}},{"number":"10","nextNumber":[{"pattern":".*","next":"11"}],"stateSpecific":[],"questionForPatient":{"responseType":"MULTIPLE_SELECTION","question":"Please indicate if the patient is taking any of the following medications (select all that apply)","options":["Fosamprenavir (FPV)","Certain anticonvulsants (phenytoin, carbamazepine, barbiturates, primidone, topiramate, oxcarbazepine)","Lamotrigine","Rifampin or rifabutin"]}},{"number":"11","nextNumber":[{"pattern":".*","next":"12"}],"stateSpecific":[],"questionForPatient":{"responseType":"MULTIPLE_SELECTION","question":"What is the patient\'s measured blood pressure today?","options":["Systolic 140-159 or diastolic 90-99","Systolic \u2265 160 or diastolic \u2265 100"]}}],"labels":{"DEFAULT":{"submit":"Submit"},"DATE_PICKER_OPTIONAL":{"empty":"I do not remember"}}}')},60:function(e,t,n){e.exports=n(135)},65:function(e,t,n){},67:function(e,t,n){}},[[60,1,2]]]);
//# sourceMappingURL=main.4079c94a.chunk.js.map