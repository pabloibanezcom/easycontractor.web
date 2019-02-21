import React, { Component } from 'react';
import LoginLayout from '../../layouts/Login';
import MainLayout from '../../layouts/Main';

const Layouts = {
  login: LoginLayout,
  main: MainLayout
};

const asyncComponent = (importComponent, layoutName) => {
  return class extends Component {
    state = {
      componentClass: null
    }

    componentDidMount() {
      importComponent()
        .then(cmp => {
          this.setState({ componentClass: cmp.default });
        });
    }

    render() {
      const { componentClass } = this.state;
      const C = componentClass;
      const Layout = Layouts[layoutName];
      const component = C ? <C {...this.props} /> : null;

      if (component) {
        return Layout ? <Layout>{component}</Layout> : component;
      }
      return null;
    }
  }
}

export default asyncComponent;