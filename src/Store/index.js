import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import { combined } from '../Reducers/index';

const middleware = [
  ReduxThunk,
];

const store = createStore(combined,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

export default store;