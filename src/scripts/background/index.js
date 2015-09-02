console.log(">>Hello world from background script<<");

//Extension communication

/*chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {

    // Receiving updates from Popup Window and Content Scripts
    if (req.action === 'updateStore') {
      store.dispatch(action)
    }

    // Passing initial state to Popup Window and Content Scripts
    if (req.action === 'getStore') {
      sendResponse(store.getState());
    }

  });
*/

