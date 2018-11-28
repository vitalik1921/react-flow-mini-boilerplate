import type { Element } from 'react';

import { Component } from 'react';

type props = {
  children: Element<any>,
};

class AppContainer extends Component<props> {
  // TODO: implement general application things
  render(): any {
    return (this.props.children);
  }
}

export default AppContainer;
