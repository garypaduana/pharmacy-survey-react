import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css"
import './App.css';

function App() {
  const props = {
    questions: [
      {
        number: "1",
        nextNumber: {
          "*": "2"
        },
        stateSpecific: [],
        questionForPatient: {
          responseType: "DATE_PICKER_OPTIONAL",
          question: "When is the first day of your last menstrual period?",
        }
      }
    ],
    labels: {
      DEFAULT: {
        submit: "Submit"
      },
      DATE_PICKER_OPTIONAL: {
        positive: "Select a date",
        optional: "I do not remember"
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
      tempValues: {}
    };
    this.onQuestionAnswered = this.onQuestionAnswered.bind(this);
    this.onTempFieldStorage = this.onTempFieldStorage.bind(this);
  }

  sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  onTempFieldStorage(number, tempValue) {
    this.setState({
      tempValues: {
        [number]: tempValue
      }
    })
  }

  onQuestionAnswered(number, response) {
    this.setState({
      responses: {
        [number]: response
      }
    });

    this.setState({
      tempValues: {
        [number]: null
      }
    });

    this.sleep(50).then(() => {
      alert("number: " + number + "; response: " + response + "; state: " + JSON.stringify(this.state));
    });
  }

  render() {
    let question = this.props.questions.find(question => question.number === this.state.currentQuestion);
    let response = Object.keys(this.state.responses).find(key => key === question.number);
    let content = question ? <Question question={question}
                                       tempValues={this.state.tempValues}
                                       labels={this.props.labels}
                                       response={response}
                                       onQuestionAnswered={this.onQuestionAnswered}
                                       onTempFieldStorage={this.onTempFieldStorage} /> :
        <p>Question {this.state.currentQuestion} not found!</p>;

    return (
        <div className="Survey">
          <p>Question "{this.state.currentQuestion}" of {this.props.questions.length}</p>
          {content}
          <button>Previous</button>
          <button>Next</button>
        </div>
    );
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);

    const tempValue = this.props.tempValues[this.props.question.number];
    const response = tempValue ? tempValue : this.props.response;

    this.state = {
      response: response
    };

    this.handleSubmitDatePickerOptional = this.handleSubmitDatePickerOptional.bind(this);
  }

  handleDatePickerChange = date => {
    this.props.onTempFieldStorage(this.props.question.number, date)
    this.setState({
      response: date
    });
  };

  handleSubmitDatePickerOptional(event) {
    this.props.onQuestionAnswered(this.props.question.number, this.state.response);
    event.preventDefault();
  }

  generateInputOptions(startDate) {
    let inputOptions = <div></div>
    let responseType = this.props.question.questionForPatient.responseType;

    if (responseType === "DATE_PICKER_OPTIONAL") {
      inputOptions = (
          <form onSubmit={this.handleSubmitDatePickerOptional}>
            <DatePicker className="DatePicker"
                        placeholderText={this.props.labels[responseType].positive}
                        maxDate={new Date()}
                        isClearable
                        selected={this.state.response}
                        onChange={this.handleDatePickerChange}/>
            <input type="submit"
                   value={(startDate === null || startDate === undefined) ?
                       this.props.labels[responseType].optional :
                       this.props.labels.DEFAULT.submit}/>
          </form>
      );
    }
    return inputOptions;
  }

  render() {
    return (
        <div className="Question">
          <p>{this.props.question.questionForPatient.question}</p>
          {this.generateInputOptions(this.state.response)}
        </div>
    );
  }
}

export default App;
