import React, {Component} from 'react';
import PropTypes from 'prop-types';
const AppContext = React.createContext();

export default class AppProvider extends Component {
  static propTypes = {
    children: PropTypes.object,
  };

  state = {
    setState: state => this.setState(state),
  };

  render() {
    const {children} = this.props;

    return (
      <AppContext.Provider value={this.state}>
        <div id="app">{children}</div>
      </AppContext.Provider>
    );
  }
}

export {AppContext, AppProvider};
