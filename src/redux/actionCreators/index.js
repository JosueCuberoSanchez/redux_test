// Redux action creators

import * as a from '../actions/';

export const selectBook = (book) => { //action creators should return an action
  return {type: a.BOOK_SELECTED, payload: book};
};