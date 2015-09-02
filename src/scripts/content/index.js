console.log(">>Hello world from content scripts<<")



//Extension communication

//Get initial store from Background Page
/*chrome.runtime.sendMessage({
  action: 'getStore'
}, function (res) {
  console.log('getStore', res);
  if (res) {
    initialStore = res
  }
});
*/


//Receiving updates from Popup window
chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {
    if (req.action === 'updateStore') {
      console.log('updateStore!!!!');
      //store.dispatch(action)
    }
  });


//Dispatching updates to Popup Window and Background Page
/*store.subscribe(() =>
chrome.runtime.sendMessage({
  action: 'updateStore',
  store: //store.getState(),
    sender: 'xxx' //current action
//store.getState()
});

//Dispatching updates to the rest of Content Scripts
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
);*/
