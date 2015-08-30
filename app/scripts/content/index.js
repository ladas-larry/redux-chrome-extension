console.log(">>Hello world from content scripts<<")



//Extension communication - get initial store
/*chrome.runtime.sendMessage({
  action: 'getStore'
}, function (res) {
  console.log('getStore', res);
  if (res) {
    initialStore = res
  }
});

//Extension communication - receiving updates
chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {
    if (req.action === 'updateStore') {
      store.dispatch(action)
    }
  });*/


//Extension communication - dispatching updates
/*store.subscribe(() =>
chrome.runtime.sendMessage({
  action: 'updateStore',
  store: //store.getState(),
    sender: 'xxx' //current action
//store.getState()
});

//all the other tabs
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