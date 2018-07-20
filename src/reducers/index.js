import { combineReducers } from 'redux';
import success from './successReducer/successReducer';
import guessedWords from './guessedWordsReducer/guessedWordsReducer';
import secretWord from './secretWordReducer/secretWordReducer';
import userEnter from './userEnterReducer/userEnterReducer';
import gaveUp from './gaveUpReducer/gaveUpReducer';
import serverError from './serverErrorReducer/serverErrorReducer';

export default combineReducers({
  success,
  guessedWords,
  secretWord,
  gaveUp,
  userEnter,
  serverError
});
