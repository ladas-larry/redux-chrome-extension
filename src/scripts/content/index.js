import configureStore from '../shared/store/configureStore';
import getState from '../shared/helpers/getState';

var store = {};

getState().then(function (initialStore) {
  store = configureStore(initialStore);

  store.subscribe(() => {
      let message = {
        action: 'updateState',
        state: store.getState()
      };
      //Dispatching updates to Background Page
      chrome.runtime.sendMessage(message);
      //Dispatching updates to the rest of Content Scripts
      /*chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; ++i) {
          chrome.tabs.sendMessage(tabs[i].id, message);
        }
      });*/
    }
  );
});


//Receiving updates from Popup window
chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {
    console.log('onMessage recieved');
    if (req.action === 'updateState') {
      store.dispatch({
        type: 'UPDATE_STATE',
        state: req.state
      });
    }
  });


