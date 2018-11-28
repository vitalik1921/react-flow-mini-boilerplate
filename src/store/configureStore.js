import type { Store } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(history: Object, initialState: Object = {}): Store<any, any> {
  const middlewares = [
    routerMiddleware(history),
    thunkMiddleware
  ];

  // development tools
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer(history), initialState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
      module.hot.accept('../reducers', () => store.replaceReducer(rootReducer(history)))
  }

  return store
}
