import { actionTypes } from '../../actions';
import secretWordReducer from './secretWordReducer';

it('returns default initial state of `null` when no action is passed', () => {
  const newState = secretWordReducer(undefined, {});
  expect(newState).toBeNull();
});

it('returns state of "train" upon receiving an action of type `SET_SECRET_WORD`', () => {
  const newState = secretWordReducer(null, {
    type: actionTypes.SET_SECRET_WORD,
    payload: 'train'
  });
  expect(newState).toBe('train');
});
