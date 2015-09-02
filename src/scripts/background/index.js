import configureStore from '../shared/store/configureStore';



var initialStore = {counter: 2}; //TODO: remove??

const store = configureStore(initialStore);

chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {
    console.log(req);
    // Receiving updates from Popup Window and Content Scripts
    if (req.action === 'updateState') {
      store.dispatch({
        type: 'UPDATE_STATE',
        text: req.state
      });
    }

    // Passing initial state to Popup Window and Content Scripts
    if (req.action === 'getInitialState') {
      sendResponse(store.getState()); //store.getState()
    }

  });


