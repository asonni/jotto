import axios from 'axios';
import { getLetterMatchCount } from '../helpers';
export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
  RESET_GAME: 'RESET_GAME',
  GIVE_UP: 'GIVE_UP',
  USER_ENTERING: 'USER_ENTERING',
  USER_ENTERED: 'USER_ENTERED',
  SERVER_ERROR: 'SERVER_ERROR'
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *     and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - Redux Thunk function.
 */
export const guessWord = guessedWord => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount }
  });
  if (guessedWord === secretWord) {
    dispatch({
      type: actionTypes.CORRECT_GUESS
    });
  }
};

export const getSecretWord = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:3030');
    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: response.data
    });
  } catch (error) {
    dispatch({ type: actionTypes.SERVER_ERROR });
  }
};

export const resetGame = () => dispatch => {
  dispatch({ type: actionTypes.RESET_GAME });
};

export const giveUp = () => ({ type: actionTypes.GIVE_UP });

export const setUserSecretWord = userSecretWord => dispatch => {
  dispatch({ type: actionTypes.SET_SECRET_WORD, payload: userSecretWord });
  dispatch({ type: actionTypes.USER_ENTERED });
};

export const setUserEntering = () => ({ type: actionTypes.USER_ENTERING });
