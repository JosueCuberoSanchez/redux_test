import * as a from '../../actions/';

const INITIAL_STATE = {
    book: ''
};

const ActiveBookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case a.BOOK_SELECTED:
            return action.payload;
        default:
            return state.book;
    }
};

export default ActiveBookReducer;
