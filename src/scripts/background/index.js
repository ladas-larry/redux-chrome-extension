import configureStore from '../shared/store/configureStore';


var storage = JSON.parse(localStorage.getItem('persistent')) || {options: {initCount: 1}, user:{}};
var initialStore = {persistent: storage, counter: storage.options.initCount};

console.log('initialStore', initialStore);

const store = configureStore(initialStore);

chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {
    console.log(req);
    // Receiving updates from Popup Window and Content Scripts
    if (req.action === 'updateState') {
      store.dispatch({
        type: 'UPDATE_STATE',
        state: req.state
      });
    }
    // Passing initial state to Popup Window and Content Scripts
    if (req.action === 'getInitialState') {
      sendResponse(store.getState());
    }

  });


