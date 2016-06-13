import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createContainer from '../shared/containers/createContainer';
import configureStore from '../shared/store/configureStore';
import getState from '../shared/helpers/getState';
import Options from './components/Options';


//import testContainer from './containers/CounterOptions';

var CounterOptions = createContainer(Options);

var store = {};

getState().then(function (initialStore) {
  //console.log(testContainer);
  store = configureStore(initialStore);

  store.subscribe(() => {
      //Dispatching updates to Background Page
      chrome.runtime.sendMessage({
        action: 'updateState',
        state: store.getState()
      });
      //Dispatching updates to the Content Scripts
      chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; ++i) {
          chrome.tabs.sendMessage(tabs[i].id, {
            action: 'updateState',
            state: store.getState()
          });
        }
      });
    }
  );

  ReactDOM.render(
    <Provider store={store}>
      <CounterOptions/>
    </Provider>,
    document.getElementById('root'), function(){
      console.log('ahoj1');
    }
  );

});
