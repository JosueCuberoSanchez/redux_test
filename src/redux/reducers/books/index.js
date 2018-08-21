const INITIAL_STATE = [{title:'The Fellowship of the ring', pages: 100},{title:'The Two Towers', pages: 101},
        {title:'The Return of the King', pages: 102},{title:'The Silmarillion', pages:103}];

const BooksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default BooksReducer;
