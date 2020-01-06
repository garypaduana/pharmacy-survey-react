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
        currentQuestion: "1"
      };
    }

    render() {
      let question = this.props.questions.find(question => question.number === this.state.currentQuestion);
      let content = question ? <Question question={question} labels={this.props.labels}/> :
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
    this.state = {
      response: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDatePickerChange = date => {
    this.setState({
      response: date
    })
  };

  handleSubmit(event) {
    alert("Response is " + this.state.response);
  }

  generateInputOptions(startDate) {
    let inputOptions = <div></div>
    let response = this.props.question.questionForPatient.responseType;

    if (response === "DATE_PICKER_OPTIONAL") {
      inputOptions = (
          <div>
            <DatePicker className="DatePicker"
                        placeholderText={this.props.labels[response].positive}
                        maxDate={new Date()}
                        isClearable
                        selected={this.state.response}
                        onChange={this.handleDatePickerChange}/>
            <button onClick={this.handleSubmit}>
                {startDate === null ? this.props.labels[response].optional : this.props.labels.DEFAULT.submit}</button>
          </div>
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
