import type { Store } from 'redux';

import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import ReactDOM from 'react-dom';

import Root from './Root';
import configureStore from './store/configureStore';
import './styles.scss';

const root: any = document.getElementById('root');
const history: Object = createBrowserHistory();
const store: Store<any, any> = configureStore(history);

const render = (Component) => {
  return ReactDOM.render(<Component store={store} history={history} />, root);
};

render(Root);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp: any = require('./Root').default;
    render(NextApp);
  });
}
