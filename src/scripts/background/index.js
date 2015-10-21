import configureStore from '../shared/store/configureStore';
import initStorage from '../shared/initStorage'
import createInitState from '../shared/helpers/createInitState';

var storage = JSON.parse(localStorage.getItem('persistent')) || initStorage;
var initialState = createInitState(storage);

const store = configureStore(initialState);

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
    if (req.action === 'getState') {
      sendResponse(store.getState());
    }

  });
