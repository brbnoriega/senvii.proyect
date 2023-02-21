import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/reducer';
import thunkMiddleware from 'redux-thunk'

const store = createStore(
    rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
    // other store enhancers if any
  )
);

export default store;