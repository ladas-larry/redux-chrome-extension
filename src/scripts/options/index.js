import configureStore from '../shared/store/configureStore';
import Q from 'q';

var store = {};


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
      //Dispatching updates to Popup Window and Background Page
      chrome.runtime.sendMessage(message);
      //Dispatching updates to the Content Scripts
      chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; ++i) {
          chrome.tabs.sendMessage(tabs[i].id, message);
        }
      });
    }
  );
});



