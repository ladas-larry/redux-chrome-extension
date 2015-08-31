(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./content/index');

},{"./content/index":2}],2:[function(require,module,exports){
"use strict";

console.log(">>Hello world from content scripts<<");

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

//Receiving updates from Popup window
chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {
    if (req.action === 'updateStore') {
      store.dispatch(action)
    }
  });*/

//Dispatching updates to Popup Window, Background Page and the rest of Content Scripts
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVm9sdW1lcy9Xb3Jrc3BhY2UvR2l0aHViL3JlcG9zL3JlZHV4LWNocm9tZS1leHRlbnNpb24vc3JjL3NjcmlwdHMvY29udGVudC5qcyIsIi9Wb2x1bWVzL1dvcmtzcGFjZS9HaXRodWIvcmVwb3MvcmVkdXgtY2hyb21lLWV4dGVuc2lvbi9zcmMvc2NyaXB0cy9jb250ZW50L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7UUNBTyxpQkFBaUI7Ozs7O0FDQXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJy4vY29udGVudC9pbmRleCc7XG4iLCJjb25zb2xlLmxvZyhcIj4+SGVsbG8gd29ybGQgZnJvbSBjb250ZW50IHNjcmlwdHM8PFwiKVxuXG5cblxuLy9FeHRlbnNpb24gY29tbXVuaWNhdGlvblxuXG4vL0dldCBpbml0aWFsIHN0b3JlIGZyb20gQmFja2dyb3VuZCBQYWdlXG4vKmNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgYWN0aW9uOiAnZ2V0U3RvcmUnXG59LCBmdW5jdGlvbiAocmVzKSB7XG4gIGNvbnNvbGUubG9nKCdnZXRTdG9yZScsIHJlcyk7XG4gIGlmIChyZXMpIHtcbiAgICBpbml0aWFsU3RvcmUgPSByZXNcbiAgfVxufSk7XG5cbi8vUmVjZWl2aW5nIHVwZGF0ZXMgZnJvbSBQb3B1cCB3aW5kb3dcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgZnVuY3Rpb24gKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICBpZiAocmVxLmFjdGlvbiA9PT0gJ3VwZGF0ZVN0b3JlJykge1xuICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKVxuICAgIH1cbiAgfSk7Ki9cblxuXG4vL0Rpc3BhdGNoaW5nIHVwZGF0ZXMgdG8gUG9wdXAgV2luZG93LCBCYWNrZ3JvdW5kIFBhZ2UgYW5kIHRoZSByZXN0IG9mIENvbnRlbnQgU2NyaXB0c1xuLypzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbmNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgYWN0aW9uOiAndXBkYXRlU3RvcmUnLFxuICBzdG9yZTogLy9zdG9yZS5nZXRTdGF0ZSgpLFxuICAgIHNlbmRlcjogJ3h4eCcgLy9jdXJyZW50IGFjdGlvblxuLy9zdG9yZS5nZXRTdGF0ZSgpXG59KTtcblxuLy9hbGwgdGhlIG90aGVyIHRhYnNcbmNocm9tZS50YWJzLnF1ZXJ5KHt9LCBmdW5jdGlvbiAodGFicykge1xuICB2YXIgbWVzc2FnZSA9IHtcbiAgICBhY3Rpb246ICd1cGRhdGVTdG9yZScsXG4gICAgc3RvcmU6IC8vc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgIHNlbmRlcjogJ3h4eCcgLy9jdXJyZW50IGFjdGlvblxufTtcbmZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7ICsraSkge1xuICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJzW2ldLmlkLCBtZXNzYWdlKTtcbn1cbn0pO1xuKTsqLyJdfQ==
