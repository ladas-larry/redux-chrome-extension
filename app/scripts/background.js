(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./background/index');

},{"./background/index":2}],2:[function(require,module,exports){
'use strict';

console.log(">>Hello world from background script<<");

//Extension communication

chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {

  console.log(req);
  // Receiving updates from Popup Window and Content Scripts
  if (req.action === 'updateStore') {
    store.dispatch(action);
  }

  // Passing initial state to Popup Window and Content Scripts
  if (req.action === 'getInitialStore') {
    sendResponse({ counter: 2 }); //store.getState()
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVm9sdW1lcy9Xb3Jrc3BhY2UvR2l0aHViL3JlcG9zL3JlZHV4LWNocm9tZS1leHRlbnNpb24vc3JjL3NjcmlwdHMvYmFja2dyb3VuZC5qcyIsIi9Wb2x1bWVzL1dvcmtzcGFjZS9HaXRodWIvcmVwb3MvcmVkdXgtY2hyb21lLWV4dGVuc2lvbi9zcmMvc2NyaXB0cy9iYWNrZ3JvdW5kL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7UUNBTyxvQkFBb0I7Ozs7O0FDQTNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQzs7OztBQUl0RCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQ2xDLFVBQVUsR0FBRyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUU7O0FBRW5DLFNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRWpCLE1BQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxhQUFhLEVBQUU7QUFDaEMsU0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtHQUN2Qjs7O0FBR0QsTUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLGlCQUFpQixFQUFFO0FBQ3BDLGdCQUFZLENBQUMsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztHQUM1QjtDQUVGLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJy4vYmFja2dyb3VuZC9pbmRleCc7XG4iLCJjb25zb2xlLmxvZyhcIj4+SGVsbG8gd29ybGQgZnJvbSBiYWNrZ3JvdW5kIHNjcmlwdDw8XCIpO1xuXG4vL0V4dGVuc2lvbiBjb21tdW5pY2F0aW9uXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgZnVuY3Rpb24gKHJlcSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcblxuICAgIGNvbnNvbGUubG9nKHJlcSk7XG4gICAgLy8gUmVjZWl2aW5nIHVwZGF0ZXMgZnJvbSBQb3B1cCBXaW5kb3cgYW5kIENvbnRlbnQgU2NyaXB0c1xuICAgIGlmIChyZXEuYWN0aW9uID09PSAndXBkYXRlU3RvcmUnKSB7XG4gICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pXG4gICAgfVxuXG4gICAgLy8gUGFzc2luZyBpbml0aWFsIHN0YXRlIHRvIFBvcHVwIFdpbmRvdyBhbmQgQ29udGVudCBTY3JpcHRzXG4gICAgaWYgKHJlcS5hY3Rpb24gPT09ICdnZXRJbml0aWFsU3RvcmUnKSB7XG4gICAgICBzZW5kUmVzcG9uc2Uoe2NvdW50ZXI6IDJ9KTsgLy9zdG9yZS5nZXRTdGF0ZSgpXG4gICAgfVxuXG4gIH0pO1xuXG5cbiJdfQ==
