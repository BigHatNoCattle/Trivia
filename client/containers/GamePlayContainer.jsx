/**
 * ************************************
 *
 * @module  GamePlayContainer.jsx
 * @author
 * @date
 * @description container for login and invite functionality
 *
 * ************************************
 */

import React, { Component } from 'react';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import QuestionDisplay from '../components/QuestionDisplay';

const mapStateToProps = store => ({
  questions: store.reducer.questions,
  answers: store.reducer.answers,
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(actions.fetchQuestions())
});

class GamePlayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // questions: [],
    };
  }
  
  render() {
    return (
      <div className ="gameplay-container">
        <QuestionDisplay 
          questions={this.props.questions} 
          answers={this.props.answers} 
          fetchQuestions={this.props.fetch} 
        />
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayContainer);