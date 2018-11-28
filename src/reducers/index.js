import type { Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import auth from './auth';

const reducers = {
  auth,
};

export default (history: Object): Reducer<any, any> =>
  combineReducers({ router: connectRouter(history), ...reducers });
