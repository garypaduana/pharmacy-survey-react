import React from 'react';
import DatePicker from 'react-datepicker';
import questions from './questions.json';

import "react-datepicker/dist/react-datepicker.css"
import './App.css';

function App() {
  const props = questions;

  return (
      <div className="App">
        <header className="App-header">
          <Survey {...props}/>
        </header>
      </div>
  );
}

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: "1",
      responses: {},
      history: [],
      backHistory: [],
      nextEnabled: true,
      previousEnabled: true
    };

    this.onQuestionAnswered = this.onQuestionAnswered.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
    this.resetButtons = this.resetButtons.bind(this);
  }

  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  onQuestionAnswered(number, response) {
    let question = this.props.questions.find(question => question.number === number);

    this.setState((prevState, props) => ({
      responses: {
        ...prevState.responses,
        [number]: response
      }
    }));

    this.cleanDoubleResponses(question, response);
  }

  handleSubmit(event) {
    alert("name: " + event.target.name + "; value: " + event.target.value);
    event.preventDefault();
  }

  resetButtons() {
    this.setState({
      nextEnabled: true,
      previousEnabled: true
    });
  }

  goPrevious(event) {
    if (this.state.history.length > 0) {
      let previous = this.state.history.slice(this.state.history.length - 1, this.state.history.length);
      if (previous.length === 0) {
        previous = ["1"];
      }
      this.setState((prevState, props) => {
        prevState.backHistory.unshift(prevState.currentQuestion);
        return {
          currentQuestion: previous[0],
          backHistory: prevState.backHistory,
          history: [...this.state.history.slice(0, this.state.history.length - 1)],
          nextEnabled: true
        }
      });
    } else {
      this.setState({
        previousEnabled: false,
        nextEnabled: true
      });
      alert("You are at the beginning!")
    }
  }

  goNext(event) {
    // Get the object of the current question
    let question = this.props.questions.find(question => question.number === this.state.currentQuestion);

    // Figure out what the next question is based on the answer to the current question.
    const answer = this.state.responses[this.state.currentQuestion]
    let nextQuestion = question.nextNumber.find(entry => {
      return new RegExp(entry.pattern).test(answer)
    });

    if (null != nextQuestion) {
      nextQuestion = nextQuestion.next;
    }

    // Only advance to the next question if it exists based on the previous answer.
    // Add the current question to the stack of history.
    if (null != nextQuestion && this.props.questions.find(question => question.number === nextQuestion)) {
      this.setState((prevState, props) => {
        prevState.backHistory.shift();
        return {
          currentQuestion: nextQuestion,
          backHistory: prevState.backHistory,
          history: [...this.state.history, question.number],
          previousEnabled: true
        }
      });
    } else {
      alert("Next question not available.")
      this.setState({
        nextEnabled: false,
        previousEnabled: true
      })
      alert(JSON.stringify(this.state.responses));
    }
  }

  /**
   * If question.nextNumber has mutually exclusive entries, delete the responses for the options that were not selected.
   */
  cleanDoubleResponses(question, response) {
    // If there is the option to select anything then don't worry about it.
    if (question.nextNumber.find(nn => nn.pattern === ".*")) {
      return
    }
    question.nextNumber
        .filter(nn => !(new RegExp(nn.pattern).test(response)))
        .forEach(nn => {
          this.setState((prevState, props) => {
            let responses = prevState.responses;
            prevState.backHistory.forEach(bh => {
              delete responses[bh];
            });
            return {
              backHistory: [],
              responses: responses
            }
          });
        });
  }

  render() {
    let question = this.props.questions.find(question => question.number === this.state.currentQuestion);
    let content = question ? <Question question={question}
                                       labels={this.props.labels}
                                       response={this.state.responses[this.state.currentQuestion]}
                                       onQuestionAnswered={this.onQuestionAnswered}
                                       resetButtons={this.resetButtons}/> :
        <p>Question {this.state.currentQuestion} not found!</p>;

    return (
        <div>
          <div className="Survey">
            <form onSubmit={this.handleSubmit}>
              <p>Question "{this.state.currentQuestion}" of {this.props.questions.length}</p>
              {content}
            </form>
            <button type="submit" name="button_previous" onClick={this.goPrevious}
                    disabled={!this.state.previousEnabled}>Previous
            </button>
            <button type="submit" name="button_next" onClick={this.goNext} disabled={!this.state.nextEnabled}>Next
            </button>
            <br/>
          </div>
          <br/> <br/>
          <pre className="code">{JSON.stringify(this.state, null, 2)}</pre>
        </div>
    );
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDatePickerChange = date => {
    this.props.onQuestionAnswered(this.props.question.number, date);
    this.props.resetButtons();
  };

  handleSingleSelection = event => {
    this.props.onQuestionAnswered(this.props.question.number, event.target.name);
    this.props.resetButtons();
  }

  handleMultipleSelection = event => {
    let response = this.props.response || [];
    if (!response.includes(event.target.name)) {
      response.push(event.target.name);
    } else {
      response = response.filter((val, index, arr) => val !== event.target.name);
    }
    this.props.onQuestionAnswered(this.props.question.number, response);
    this.props.resetButtons();
  }

  handleSingleThenMultiple(parent, child, event) {
    let response = this.props.response || {};
    let others = new RegExp("Other.*").test(child);

    // Top level is mutually exclusive (i.e. radio buttons); reset the response if the top level changes
    if (!Object.keys(response).includes(parent)) {
      response = {};
      response[parent] = {};
    }

    if (others) {
      let text = event.target.value;
      // if the free text length falls to zero, remove the "other" value from the response
      if (text.length == 0) {
        delete response[parent][child];
      }
      else {
        // otherwise put an object in there
        response[parent][child] = text;
      }
    }
    else {
      // if the child already exists, delete it (toggle off)
      if (response[parent].hasOwnProperty(child)) {
        delete response[parent][child];
      } else if (!child) {
        response[parent] = {};
      } else {
        response[parent][child] = null;
      }
    }

    this.props.onQuestionAnswered(this.props.question.number, response);
    this.props.resetButtons();
  }

  generateChildren(optionsAlias, parent) {
    let children = <div/>;
    if (this.props.response && this.props.response.hasOwnProperty(parent)) {
      children = optionsAlias[parent].map((child) => {
        let control;
        if (new RegExp("Other.*").test(child)) {
          control = (<div>
            {child} <input type="text"
                           name={child}
                           key={parent + "." + child}
                           value={this.props.response[parent][child]}
                           onChange={(e) =>
                               this.handleSingleThenMultiple(parent, child, e)}/>
             <br/>
             </div>);
        }
        else {
          control = (<div>
            <input type="checkbox"
                   name={child}
                   key={parent + "." + child}
                   checked={this.props.response && this.props.response[parent].hasOwnProperty(child)}
                   onChange={(e) =>
                       this.handleSingleThenMultiple(parent, child, e)}/> {child}
          <br/>
          </div>);
        }
        return control;
      });
    }
    return children;
  }

  generateInputOptions() {
    let inputOptions = <div/>;
    let responseType = this.props.question.questionForPatient.responseType;
    if (responseType === "DATE_PICKER_OPTIONAL") {
      inputOptions = (
          <DatePicker className="DatePicker"
                      placeholderText={this.props.labels[responseType].empty}
                      maxDate={new Date()}
                      isClearable
                      selected={this.props.response}
                      onChange={this.handleDatePickerChange}/>
      );
    } else if (responseType === "SINGLE_SELECTION") {
      const options = this.props.question.questionForPatient.options.map((option) =>
          <div>
            <input type="radio"
                   name={option}
                   key={option}
                   checked={this.props.response === option}
                   onChange={this.handleSingleSelection}/> {option}
          </div>
      );
      inputOptions = (
          <div>
            {options}
          </div>
      );
    } else if (responseType === "MULTIPLE_SELECTION") {
      const options = this.props.question.questionForPatient.options.map((option) =>
          <div>
            <input type="checkbox"
                   name={option}
                   key={option}
                   checked={this.props.response && this.props.response.includes(option)}
                   onChange={this.handleMultipleSelection}/> {option}
          </div>
      );
      inputOptions = (
          <div>
            {options}
          </div>
      );
    } else if (responseType === "SINGLE_SELECTION_THEN_MULTIPLE_SELECTION") {
      const optionsAlias = this.props.question.questionForPatient.options;
      let options = {};

      options = Object.keys(optionsAlias).map((option) =>
          <div>
            <input type="radio"
                   name={option}
                   key={option}
                   checked={this.props.response && this.props.response.hasOwnProperty(option)}
                   onChange={(e) =>
                       this.handleSingleThenMultiple(option, null, e)}/> {option}
            <br/>
            {this.generateChildren(optionsAlias, option)}
          </div>
      );
      inputOptions = (
          <div>
            {options}
          </div>
      );
    }
    return inputOptions;
  }

  render() {
    return (
        <div className="Question">
          <p>{this.props.question.questionForPatient.question}</p>
          {this.generateInputOptions()}
        </div>
    );
  }
}

export default App;
