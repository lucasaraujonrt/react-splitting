import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './reducers/home';
import meReducer from './reducers/me';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(
    combineReducers({
      home: homeReducer,
      me: meReducer,
    }),
    compose(applyMiddleware(thunk)),
  );

  return store;
}