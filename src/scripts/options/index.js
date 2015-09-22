import configureStore from '../shared/store/configureStore';
import Q from 'q';


document.getElementById('save').addEventListener('click', save_options);

function save_options() {
  var initCount = document.getElementById('initCount').value;
  store.dispatch({
    type: 'UPDATE_STATE',
    state: {persistent: {options: {initCount: initCount}}}
  });
}


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

//try to save to local storage

getInitialState().then(function (initialStore) {
  store = configureStore(initialStore);

  console.log('store.getState()', store.getState().persistent.options.initCount);

  //sync Options DOM with initialStore
  document.getElementById('initCount').value = store.getState().persistent.options.initCount;

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
});



