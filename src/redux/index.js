import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './reducers/home';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(
    combineReducers({
      home: homeReducer,
    }),
    compose(applyMiddleware(thunk)),
  );

  return store;
}