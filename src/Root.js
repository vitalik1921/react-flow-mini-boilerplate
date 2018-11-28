import type { Store } from 'redux';

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page404 from './components/Page404/Page404'
import Home from './components/Home/Home'
import Page from './components/Page/Page'
import AppContainer from './App';

type props = {
  store: Store<any, any>;
  history: Object,
};

const Root = ({ store, history }: props) => (
  <Provider store={store}>
    <AppContainer>
      <ConnectedRouter history={history}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page" component={Page} />
            <Route component={Page404} />
          </Switch>
        </BrowserRouter>
      </ConnectedRouter>
    </AppContainer>
  </Provider>
);

export default Root;
