import React, { Component } from 'react';


// TODO: rendering logic
class QuestionDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswers: [],
    }; 
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        Questions
      </div>
    ) 
  }
};

export default QuestionDisplay;