import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createContainer from '../shared/containers/createContainer';
import configureStore from '../shared/store/configureStore';
import getState from '../shared/helpers/getState';
import Popup from './components/Popup.jsx';
import { AppContainer } from 'react-hot-loader';
//document.getElementById('heading-version').innerHTML = chrome.app.getDetails().version;

var CounterPopup = createContainer(Popup);

/*,

*/

var store = {};

getState().then(function (initialStore) {
  store = configureStore(initialStore);

  /*
  todo: hot reload reducers (https://github.com/rackt/react-redux/releases/tag/v2.0.0)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../shared/reducers/chromeExtension.js', () => {
      const nextRootReducer = require('../shared/reducers/chromeExtension');
      store.replaceReducer(nextRootReducer);
    });
  }*/

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

  ReactDOM.render(
    <AppContainer
      component={CounterPopup}
      props={{ store }}/>,
    document.getElementById('CounterPopup')
  );

if (module.hot) {
  module.hot.accept('./containers/CounterPopup', () => {
   render(
       <AppContainer
         component={require('./containers/CounterPopup').default}
         props={{ store }}
       />,
       document.getElementById('root')
     );
   });
 }
   
});
