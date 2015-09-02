console.log(">>Hello world from background script<<");

//Extension communication

chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {

    console.log(req);
    // Receiving updates from Popup Window and Content Scripts
    if (req.action === 'updateStore') {
      console.log('updateStore!!!!');
      //store.dispatch(action)
    }

    // Passing initial state to Popup Window and Content Scripts
    if (req.action === 'getInitialStore') {
      sendResponse({counter: 2}); //store.getState()
    }

  });


