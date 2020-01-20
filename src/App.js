import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css"
import './App.css';

function App() {
  const props = {
    questions: [
      {
        number: "1",
        nextNumber:[
          {
            pattern: ".*",
            next: "2"
          }
        ],
        stateSpecific: [],
        questionForPatient: {
          responseType: "DATE_PICKER_OPTIONAL",
          question: "When is the first day of your last menstrual period?",
        }
      },
      {
        number: "2",
        nextNumber:[
          {
            pattern: ".*",
            next: "3"
          }
        ],
        stateSpecific: [],
        questionForPatient: {
          responseType: "DATE_PICKER_OPTIONAL",
          question: "What is your date of birth?",
        }
      }
    ],
    labels: {
      DEFAULT: {
        submit: "Submit"
      },
      DATE_PICKER_OPTIONAL: {
        empty: "I do not remember"
      }
    }
  };

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
      nextEnabled: true,
      previousEnabled: true
    };
    this.setState({
      history: [...this.state.history, this.state.currentQuestion]
    });
    this.onQuestionAnswered = this.onQuestionAnswered.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
  }

  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  onQuestionAnswered(number, response) {
    this.setState((prevState, props) => ({
      responses: {
        ...prevState.responses,
        [number]: response
      }
    }));

    // this.sleep(50).then(() => {
    //   alert("number: " + number + "; response: " + response + "; state: " + JSON.stringify(this.state));
    // });
  }

  handleSubmit(event) {
    alert("name: " + event.target.name + "; value: " + event.target.value);
    event.preventDefault();
  }

  goPrevious(event) {
    if (this.state.history.length > 0) {
      let previous = this.state.history.slice(this.state.history.length - 2, this.state.history.length - 1);
      if (previous.length === 0) {
        previous = "1";
      }
      this.setState({
        currentQuestion: previous,
        history: [...this.state.history.slice(0, this.state.history.length - 1)],
        nextEnabled: true
      });
    }
    else {
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
    let nextQuestion = question.nextNumber.find(entry => {
      return new RegExp(entry.pattern).test(this.state.responses[this.state.currentQuestion])
    }).next;

    // Only advance to the next question if it exists based on the previous answer.
    // Add the current question to the stack of history.
    if (nextQuestion !== null && this.props.questions.find(question => question.number === nextQuestion)) {
      this.setState({
        currentQuestion: nextQuestion,
        history: [...this.state.history, question.number],
        previousEnabled: true
      });
    }
    else {
      alert("Next question not available.")
      this.setState({
        nextEnabled: false,
        previousEnabled: true
      })
    }
  }

  render() {
    let question = this.props.questions.find(question => question.number === this.state.currentQuestion);
    let content = question ? <Question question={question}
                                       labels={this.props.labels}
                                       response={this.state.responses[this.state.currentQuestion]}
                                       onQuestionAnswered={this.onQuestionAnswered} /> :
        <p>Question {this.state.currentQuestion} not found!</p>;

    return (
        <div className="Survey">
          <form onSubmit={this.handleSubmit}>
            <p>Question "{this.state.currentQuestion}" of {this.props.questions.length}</p>
            {content}
          </form>
          <button type="submit" name="button_previous" onClick={this.goPrevious} disabled={!this.state.previousEnabled}>Previous</button>
          <button type="submit" name="button_next" onClick={this.goNext} disabled={!this.state.nextEnabled}>Next</button>

        </div>
    );
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDatePickerChange = date => {
    // alert("date: " + date);
    this.props.onQuestionAnswered(this.props.question.number, date)
  };

  generateInputOptions(startDate) {
    let inputOptions = <div></div>
    let responseType = this.props.question.questionForPatient.responseType;
    // alert("response: " + this.props.response);
    if (responseType === "DATE_PICKER_OPTIONAL") {
      inputOptions = (
          <DatePicker className="DatePicker"
                      placeholderText={this.props.labels[responseType].empty}
                      maxDate={new Date()}
                      isClearable
                      selected={this.props.response}
                      onChange={this.handleDatePickerChange}/>
      );
    }
    return inputOptions;
  }

  render() {
    return (
        <div className="Question">
          <p>{this.props.question.questionForPatient.question}</p>
          {this.generateInputOptions(this.props.response)}
        </div>
    );
  }
}

export default App;
