/**
 * ************************************
 *
 * @module  reducer
 * @author
 * @date
 * @description reducer for the app
 *
 * ************************************ 
 */

import * as types from '../constants/actionTypes';

const initialState = {
  // current user, maybe an object with those details (pic url, ganes played, games won %)
  // leaderboard
  // category chose
  isLoggedIn: false,
  questions: [],
  answers: [],
};

const reducer = (state = initialState, action) => {
  console.log('the state', state);
  switch (action.type) {
    case types.IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      }
    case types.FETCH_QUESTIONS:
      return {
        ...state,
        questions: [...action.payload],
      }
    case types.SUBMIT_ANSWER:
      const newAnswers = [...state.answers];
      newAnswers.push(action.payload);

      return {
        ...state,
        answers: newAnswers,
      }
    default:
      return state;
  }
};

export default reducer;