/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
d */

import * as types from '../constants/actionTypes';


export const logIn = () => ({
    type: types.IS_LOGGED_IN,
})


export const fetchQuestions = () => ({
    type: types.FETCH_QUESTIONS,
    payload: [
        {
            id: 1,
            question: 'Which company initially developed Javascript?',
            answer1: 'Netscape',
            answer2: 'Mozilla',
            answer3: 'Google',
            answer4: 'Microsoft',
            categoryId: 1
        }
    ]
})

export const submitAnswer = id => ({
  type: types.SUBMIT_ANSWER,
  // const answer ->
  //  if id equals Answer1.id
    // = 1
  // else
    // = 0
    
  payload: answer,
});