import { connect } from 'react-redux';

import BookSearch from '../presentational/BookSearch';

const defaultState = {
};

export const bookSearchReducer = (state = defaultState, action) => {
  const { type } = action;
  switch (type) {
    default: return state;
  }
};

const selector = state => state.bookSearch;

export const BookSearchPage = connect()(BookSearch);
