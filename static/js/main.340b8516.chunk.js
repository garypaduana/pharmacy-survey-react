(this["webpackJsonppharmacy-survey-react"]=this["webpackJsonppharmacy-survey-react"]||[]).push([[0],{137:function(e,_,t){"use strict";t.r(_);var a=t(2),r=t.n(a),s=t(53),n=t.n(s),i=(t(67),t(54));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},54:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(45),_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24),_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55),_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18),_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(19),_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(21),_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(20),_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(22),react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__),react_datepicker__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(58),react_datepicker__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_10__),_questions_abbreviated_json__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(56),_questions_abbreviated_json__WEBPACK_IMPORTED_MODULE_11___namespace=__webpack_require__.t(56,1),_rules__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(57),_rules__WEBPACK_IMPORTED_MODULE_12___namespace=__webpack_require__.t(57,1),react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(68),react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_13__),_App_css__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(69),_App_css__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_14__),ALL_PASS="ALL_PASS",NA="NA";function App(){var e={survey:_questions_abbreviated_json__WEBPACK_IMPORTED_MODULE_11__,rules:_rules__WEBPACK_IMPORTED_MODULE_12__};return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("header",{className:"App-header"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Survey,e)))}var Algorithm=function(_React$Component){function Algorithm(props){var _this;return Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.a)(this,Algorithm),_this=Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.a)(this,Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.a)(Algorithm).call(this,props)),_this.extractField=function(e,_){return"$SELF"===e.field?_[e.number]:_[e.number][e.field]},_this.worker=function(dep,responses){return null!==responses[dep.number]&&void 0!==responses[dep.number]&&("equals"===dep.operation?_this.extractField(dep,responses)===dep.criteria:"eval"===dep.operation?eval(_this.extractField(dep,responses)+dep.criteria):"anyMatch"===dep.operation&&dep.criteria.includes(_this.extractField(dep,responses)))},_this.state={},_this}return Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__.a)(Algorithm,_React$Component),Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.a)(Algorithm,[{key:"evaluateRule",value:function(e,_){var t=this;return e.dependsOn.filter((function(e){return e.matchCriteria})).every((function(e){return t.worker(e,_)}))?e.dependsOn.every((function(e){return t.worker(e,_)}))?ALL_PASS:e.errorMessage:NA}},{key:"render",value:function(){var e=this,_=this.props.rules.map((function(_){var t=e.evaluateRule(_,e.props.responses),a=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null);return t!==NA&&t!==ALL_PASS&&(a=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li",{key:_.id},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Evaluation,{message:t}))),a}));return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2",null,"Evaluation"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul",null,_)))}}]),Algorithm}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component),Evaluation=function(e){function _(e){var t;return Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.a)(this,_),(t=Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.a)(this,Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.a)(_).call(this,e))).state={},t}return Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__.a)(_,e),Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.a)(_,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null,this.props.message)}}]),_}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component),Survey=function(e){function _(e){var t;return Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.a)(this,_),(t=Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.a)(this,Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.a)(_).call(this,e))).state={currentQuestion:"0.1",responses:{},history:[],backHistory:[],nextEnabled:!0,previousEnabled:!0},t.onQuestionAnswered=t.onQuestionAnswered.bind(Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(t)),t.goNext=t.goNext.bind(Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(t)),t.goPrevious=t.goPrevious.bind(Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(t)),t.resetButtons=t.resetButtons.bind(Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(t)),t}return Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__.a)(_,e),Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.a)(_,[{key:"sleep",value:function(e){return new Promise((function(_){return setTimeout(_,e)}))}},{key:"onQuestionAnswered",value:function(e,_){var t=this.props.survey.questions.find((function(_){return _.number===e}));this.setState((function(t,a){return{responses:Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__.a)({},t.responses,Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)({},e,_))}})),this.cleanDoubleResponses(t,_)}},{key:"handleSubmit",value:function(e){alert("name: "+e.target.name+"; value: "+e.target.value),e.preventDefault()}},{key:"resetButtons",value:function(){this.setState({nextEnabled:!0,previousEnabled:!0})}},{key:"goPrevious",value:function(e){var _=this;if(this.state.history.length>0){var t=this.state.history.slice(this.state.history.length-1,this.state.history.length);0===t.length&&(t=["1"]),this.setState((function(e,a){return e.backHistory.unshift(e.currentQuestion),{currentQuestion:t[0],backHistory:e.backHistory,history:Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_.state.history.slice(0,_.state.history.length-1)),nextEnabled:!0}}))}else this.setState({previousEnabled:!1,nextEnabled:!0})}},{key:"goNext",value:function(e){var _=this,t=this.props.survey.questions.find((function(e){return e.number===_.state.currentQuestion})),a=this.state.responses[this.state.currentQuestion],r=t.nextNumber.find((function(e){return new RegExp(e.pattern).test(a)}));null!=r&&(r=r.next),"END"===r?alert("You're at the end!"):this.props.survey.questions.find((function(e){return e.number===r}))?this.setState((function(e,a){return e.backHistory.shift(),{currentQuestion:r,backHistory:e.backHistory,history:[].concat(Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(_.state.history),[t.number]),previousEnabled:!0}})):this.setState({nextEnabled:!1,previousEnabled:!0})}},{key:"cleanDoubleResponses",value:function(e,_){var t=this;e.nextNumber.find((function(e){return".*"===e.pattern}))||e.nextNumber.filter((function(e){return!new RegExp(e.pattern).test(_)})).forEach((function(e){t.setState((function(e,_){var t=e.responses;return e.backHistory.forEach((function(e){delete t[e]})),{backHistory:[],responses:t}}))}))}},{key:"render",value:function(){var e=this,_=this.props.survey.questions.find((function(_){return _.number===e.state.currentQuestion})),t=_?react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Question,{question:_,labels:this.props.survey.labels,response:this.state.responses[this.state.currentQuestion],onQuestionAnswered:this.onQuestionAnswered,validationError:!this.state.nextEnabled,resetButtons:this.resetButtons}):react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p",null,"Question ",this.state.currentQuestion," not found!");return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"container survey"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"header"},' Question "',this.state.currentQuestion,'" of ',this.props.survey.questions.length),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form",{onSubmit:this.handleSubmit},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"question"},t)),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button",{className:"navigation",type:"submit",name:"button_previous",onClick:this.goPrevious,disabled:!this.state.previousEnabled},"Previous"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button",{className:"navigation",type:"submit",name:"button_next",onClick:this.goNext,disabled:!this.state.nextEnabled},"Next"),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br",null)),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Algorithm,{responses:this.state.responses,rules:this.props.rules}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("pre",{className:"code"},JSON.stringify(this.state,null,2)))}}]),_}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component),Question=function(e){function _(){var e,t;Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.a)(this,_);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.a)(this,(e=Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.a)(_)).call.apply(e,[this].concat(r)))).handleEntry=function(e,_){var a=t.props.response||{},r=_.target.value;0===r.length?delete a[e]:a[e]=r,t.props.onQuestionAnswered(t.props.question.number,a),t.props.resetButtons()},t.handleDatePickerChange=function(e){t.props.onQuestionAnswered(t.props.question.number,e),t.props.resetButtons()},t.handleSingleSelection=function(e){t.props.onQuestionAnswered(t.props.question.number,e.target.name),t.props.resetButtons()},t.handleMultipleSelection=function(e){var _=t.props.response||[];_.includes(e.target.name)?_=_.filter((function(_,t,a){return _!==e.target.name})):_.push(e.target.name),t.props.onQuestionAnswered(t.props.question.number,_),t.props.resetButtons()},t}return Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__.a)(_,e),Object(_Users_garypaduana_Documents_dev_pharmacy_survey_react_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.a)(_,[{key:"handleSingleThenMultiple",value:function(e,_,t){var a=this.props.response||{},r=new RegExp("Other.*").test(_);if(Object.keys(a).includes(e)||((a={})[e]={}),r){var s=t.target.value;0===s.length?delete a[e][_]:a[e][_]=s}else a[e].hasOwnProperty(_)?delete a[e][_]:_?a[e][_]=null:a[e]={};this.props.onQuestionAnswered(this.props.question.number,a),this.props.resetButtons()}},{key:"generateChildren",value:function(e,_){var t=this,a=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null);return this.props.response&&this.props.response.hasOwnProperty(_)&&(a=e[_].map((function(e){return new RegExp("Other.*").test(e)?react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"child"},e," ",react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"text",name:e,key:_+"."+e,value:t.props.response[_][e],onChange:function(a){return t.handleSingleThenMultiple(_,e,a)}}),react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br",null)):react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"child"},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"checkbox",name:e,key:_+"."+e,checked:t.props.response&&t.props.response[_].hasOwnProperty(e),onChange:function(a){return t.handleSingleThenMultiple(_,e,a)}})," ",e,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br",null))}))),a}},{key:"generateInputOptions",value:function(e){var _=this,t=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null),a=this.props.question.questionForPatient.responseType;if("DATE_PICKER_OPTIONAL"===a)t=react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"parent "+(e?"validationError":"")},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_10___default.a,{className:"datePicker",placeholderText:this.props.labels[a].empty,maxDate:new Date,isClearable:!0,selected:this.props.response,onChange:this.handleDatePickerChange}));else if("SINGLE_SELECTION"===a)t=this.props.question.questionForPatient.options.map((function(t){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"parent "+(e?"validationError":"")},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"radio",name:t,key:t,checked:_.props.response===t,onChange:_.handleSingleSelection})," ",t)}));else if("MULTIPLE_SELECTION"===a)t=this.props.question.questionForPatient.options.map((function(t){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"parent "+(e?"validationError":"")},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"checkbox",name:t,key:t,checked:_.props.response&&_.props.response.includes(t),onChange:_.handleMultipleSelection})," ",t)}));else if("SINGLE_SELECTION_THEN_MULTIPLE_SELECTION"===a){var r=this.props.question.questionForPatient.options;t=Object.keys(r).map((function(t){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"parent "+(e?"validationError":"")},react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"radio",name:t,key:t,checked:_.props.response&&_.props.response.hasOwnProperty(t),onChange:function(e){return _.handleSingleThenMultiple(t,null,e)}})," ",t,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("br",null),_.generateChildren(r,t))}))}else"ENTRY"===a&&(t=this.props.question.questionForPatient.options.map((function(t){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"parent "+(e?"validationError":"")},t," ",react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input",{type:"text",name:t,key:t,value:_.props.response&&_.props.response[t]||"",onChange:function(e){return _.handleEntry(t,e)}}))})));return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"inputOptions"},t)}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div",{className:"questionText"},this.props.question.questionForPatient.question),this.generateInputOptions(this.props.validationError))}}]),_}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);__webpack_exports__.a=App},56:function(e){e.exports=JSON.parse('{"questions":[{"number":"0.1","nextNumber":[{"pattern":".*","next":"1"}],"stateSpecific":[],"questionForPatient":{"responseType":"SINGLE_SELECTION","question":"Does the patient have a prior prescription?","options":["Yes","No"]}},{"number":"1","nextNumber":[{"pattern":".*","next":"2"}],"stateSpecific":[],"questionForPatient":{"responseType":"SINGLE_SELECTION","question":"Which of the following describes you?","options":["Pharmacist","Other"]}},{"number":"2","nextNumber":[{"pattern":".*","next":"3"}],"stateSpecific":[],"questionForPatient":{"responseType":"SINGLE_SELECTION","question":"Which of the following best describes your type of practice?","options":["Independent pharmacy","Chain pharmacy","Student health pharmacy","Clinic","Other"]}},{"number":"3","nextNumber":[{"pattern":".*","next":"3.1"}],"stateSpecific":[],"questionForPatient":{"responseType":"ENTRY","question":"Please provide your US zip code","options":[""]}},{"number":"3.1","nextNumber":[{"pattern":".*","next":"4"}],"stateSpecific":[],"questionForPatient":{"responseType":"ENTRY","question":"Please provide your US state (two character abbreviation)","options":[""]}},{"number":"4","nextNumber":[{"pattern":".*","next":"5"}],"stateSpecific":[],"questionForPatient":{"responseType":"ENTRY","question":"How old is the patient?","options":[""]}},{"number":"5","nextNumber":[{"pattern":"Yes","next":"6"},{"pattern":"No","next":"7"}],"stateSpecific":[],"questionForPatient":{"responseType":"SINGLE_SELECTION","question":"Does the patient have menstrual periods?","options":["Yes","No"]}},{"number":"6","nextNumber":[{"pattern":".*","next":"7"}],"stateSpecific":[],"questionForPatient":{"responseType":"DATE_PICKER_OPTIONAL","question":"When is the first day of the patient\'s last menstrual period?"}},{"number":"7","nextNumber":[{"pattern":"Yes","next":"END"},{"pattern":"No","next":"8"}],"stateSpecific":[],"questionForPatient":{"responseType":"SINGLE_SELECTION","question":"Does the patient have any signs or symptoms of pregnancy?","options":["Yes","No"]}},{"number":"8","nextNumber":[{"pattern":"None.*","next":"END"},{"pattern":".*","next":"9"}],"stateSpecific":[],"questionForPatient":{"responseType":"MULTIPLE_SELECTION","question":"Please indicate if the patient meets any of the following criteria to be reasonably certain the patient is not pregnant (select all that apply)","options":["Had a baby less than 6 months ago, fully or nearly-fully breastfeeding AND has had no menstrual period since the delivery","Had a baby in the last 4 weeks","Miscarriage or abortion in the last 7 days","Last menstrual period started within the last 7 days","Abstained from sexual intercourse since your last menstrual period or delivery","Has been using a reliable contraceptive method consistently and correctly","Has taken emergency contraception in the last 5 days","None (please stop here and refer your patient)"]}},{"number":"9","nextNumber":[{"pattern":".*","next":"10"}],"stateSpecific":[],"questionForPatient":{"responseType":"MULTIPLE_SELECTION","question":"Please indicate if the patient has any of the following medical conditions (select all that apply)","options":["Current or past breast cancer","<42 days postpartum","Severe (decompensated) cirrhosis ","History of DVT/PE and not receiving anticoagulant history","Acute DVT/PE","DVT/PE and established anticoagulant therapy for at least 3 months ","Major surgery with prolonged immobilization ","Diabetes with nephropathy/retinopathy/neuropathy or diabetes with other vascular disease or diabetes of >20 years\u2019 duration ","Current gallbladder disease or medically treated gallbladder disease","Migraines with aura ","History of malabsorptive bariatric procedures","History of combined oral contraceptive related cholestasis","Hypertension diagnosis","Inflammatory bowel disease (ulcerative colitis, Crohn\u2019s disease)","Current and history of ischemic heart disease","Hepatocellular adenoma or malignant liver tumor (hepatoma)","Multiple risk factors for atherosclerotic cardiovascular disease (older age, smoking, hypertension, low HDL, high LDL, or high triglyceride levels) ","Multiple sclerosis with prolonged immobility ","Peripartum cardiomyopathy","Non breastfeeding <21 days postpartum or non breastfeeding 21 to 42 days postpartum with risk factors for VTE","Smoker and older than 35","Complicated solid organ transplant ","History of stroke ","Acute or history of superficial venous thrombosis","Systemic lupus erythematosus with positive (or unknown) antiphospholipid antibodies","Systemic lupus erythematosus with severe thrombocytopenia ","Unexplained vaginal bleeding ","Complicated valvular heart disease ","Acute or flare viral hepatitis"]}},{"number":"10","nextNumber":[{"pattern":".*","next":"11"}],"stateSpecific":[],"questionForPatient":{"responseType":"MULTIPLE_SELECTION","question":"Please indicate if the patient is taking any of the following medications (select all that apply)","options":["Fosamprenavir (FPV)","Certain anticonvulsants (phenytoin, carbamazepine, barbiturates, primidone, topiramate, oxcarbazepine)","Lamotrigine","Rifampin or rifabutin"]}},{"number":"11","nextNumber":[{"pattern":".*","next":"END"}],"stateSpecific":[],"questionForPatient":{"responseType":"MULTIPLE_SELECTION","question":"What is the patient\'s measured blood pressure today?","options":["Systolic 140-159 or diastolic 90-99","Systolic \u2265 160 or diastolic \u2265 100"]}}],"labels":{"DEFAULT":{"submit":"Submit"},"DATE_PICKER_OPTIONAL":{"empty":"I do not remember"}}}')},57:function(e){e.exports=JSON.parse('[{"id":"1","dependsOn":[{"number":"4","field":"","operation":"eval","criteria":">0"},{"number":"3.1","field":"","operation":"anyMatch","criteria":["WA","CA","NM","MD"],"matchCriteria":true}],"errorMessage":"A patient in WA, CA, NM, or MD must supply an age."},{"id":"2","dependsOn":[{"number":"4","field":"","operation":"eval","criteria":">=18"},{"number":"3.1","field":"","operation":"anyMatch","criteria":["CO","UT"],"matchCriteria":true}],"errorMessage":"Patient must be at least 18 years old if in CO or UT"},{"id":"3","dependsOn":[{"number":"0.1","field":"$SELF","operation":"equals","criteria":"No","matchCriteria":true},{"number":"4","field":"","operation":"eval","criteria":">=18"},{"number":"3.1","field":"","operation":"anyMatch","criteria":["OR","HI"],"matchCriteria":true}],"errorMessage":"Patient must be 18 or older unless prior prescription if in OR or HI"}]')},62:function(e,_,t){e.exports=t(137)},67:function(e,_,t){},69:function(e,_,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.340b8516.chunk.js.map