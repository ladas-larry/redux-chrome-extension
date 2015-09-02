console.log(">>Hello world from popup script! <<")

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CounterApp from './containers/CounterApp';
import configureStore from './store/configureStore';
import Q from 'q';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        {() => <CounterApp />}
      </Provider>
    );
  }
}


//Get initial store from Background Page
function getInitialStore(){
  var result = Q.defer();
  chrome.runtime.sendMessage({
    action: 'getInitialStore'
  }, function (res) {
    console.log('getInitialStore', res);
    if (res) {
      result.resolve(res);
    }else{
      result.reject(new Error('Cannot reach Background Page'));
    }
  });
  return result.promise;
}

getInitialStore().then(function(initialStore){
  const store = configureStore(initialStore);
  React.render(
    <Root store={store} />,
    document.getElementById('root')
  );
});







//Extension communication

/*

//Dispatching updates to Background Page
store.subscribe(() =>
chrome.runtime.sendMessage({
  action: 'updateStore',
  store: //store.getState(),
    sender: 'xxx' //current action
//store.getState()
});

 //Dispatching updates Content Scripts
chrome.tabs.query({}, function (tabs) {
  var message = {
    action: 'updateStore',
    store: //store.getState(),
 sender: 'xxx' //current action
};
for (var i = 0; i < tabs.length; ++i) {
  chrome.tabs.sendMessage(tabs[i].id, message);
}
});
);
*/


//Receiving updates from Content Scripts


