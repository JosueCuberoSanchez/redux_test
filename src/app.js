import React from 'react';

// styles
import './assets/scss/base.scss';

// components
import BookListContainer from './containers/book-list/';
import BookDetail from './components/book-detail/';

// Redux
import rootReducer from './redux/reducers/';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => {
        return (
            <Provider store={createStoreWithMiddleware(rootReducer)}>
                <div>
                    <header />
                    <main>
                        <BookListContainer />
                        <BookDetail/>
                    </main>
                    <footer />
                </div>
            </Provider>
        )
};

export default App;