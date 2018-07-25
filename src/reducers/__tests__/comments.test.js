import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {

  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };

  const  newState = commentsReducer([], action);

  expect(newState).toEqual(["New comment"]);
});


it('handles actions with unknown type', () => {

  const action = {
    type: "any type",
    payload: "New comment"
  };

  const  newState = commentsReducer([], action);

  expect(newState).toEqual([]);
});
