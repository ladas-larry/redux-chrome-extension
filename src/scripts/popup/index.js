console.log(">>Hello world from popup script! <<")

import React from 'react';
import Root from './components/Root';

React.render(
<Root />,
  document.getElementById('root')
);


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


//Dispatching updates to Background Page
store.subscribe(() =>
chrome.runtime.sendMessage({
  action: 'updateStore',
  store: //store.getState(),
    sender: 'xxx' //current action
//store.getState()
});

 //Dispatching updates Content Scripts
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
);
*/


//Receiving updates from Content Scripts


