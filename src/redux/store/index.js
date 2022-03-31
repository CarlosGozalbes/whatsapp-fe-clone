import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { MainReducer } from '../reducers';

export const initialState = {
  allSearchedUsers: []
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export let configureStore = createStore(
    MainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default configureStore