console.log(">>Hello world from background script<<");


//get initial store from defaults and localstorage



//Extension communication - receiving updates, sending store
/*chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {
    if (req.action === 'updateStore') {
      store.dispatch(action)
    }
    if (req.action === 'getStore') {
      sendResponse(store.getState());
    }
  });
*/

