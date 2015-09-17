import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterApp from './containers/CounterApp';
import configureStore from '../shared/store/configureStore';
import Q from 'q';


var store = {};

class Root extends Component {
  render() {
    console.log('%cRender ' + this.constructor.displayName + ' component', 'background: #FFF; color: #2aa198 ', 'state', this.state, 'props', this.props);
    return (
      <Provider store={this.props.store}>
        {() => <CounterApp />}
      </Provider>
    );
  }
}

//Get initial store from Background Page
function getInitialState() {
  var result = Q.defer();
  chrome.runtime.sendMessage({
    action: 'getInitialState'
  }, function (res) {
    console.log('getInitialState', res);
    if (res) {
      result.resolve(res);
    } else {
      result.reject(new Error('Cannot reach Background Page'));
    }
  });
  return result.promise;
}

getInitialState().then(function (initialStore) {
  store = configureStore(initialStore);

  store.subscribe(() => {
      let message = {
        action: 'updateState',
        state: store.getState()
      };
      //Dispatching updates to Background Page
      chrome.runtime.sendMessage(message);
      //Dispatching updates Content Scripts
      chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; ++i) {
          chrome.tabs.sendMessage(tabs[i].id, message);
        }
      });
    }
  );
  React.render(
    <Root store={store}/>,
    document.getElementById('root')
  );
});
