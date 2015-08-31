(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./popup/index');

},{"./popup/index":2}],2:[function(require,module,exports){
"use strict";

console.log(">>Hello world from popup script! <<");

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


//Dispatching updates to Background Page and Content Scripts
store.subscribe(() =>
chrome.runtime.sendMessage({
  action: 'updateStore',
  store: //store.getState(),
    sender: 'xxx' //current action
//store.getState()
});

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVm9sdW1lcy9Xb3Jrc3BhY2UvR2l0aHViL3JlcG9zL3JlZHV4LWNocm9tZS1leHRlbnNpb24vc3JjL3NjcmlwdHMvcG9wdXAuanMiLCIvVm9sdW1lcy9Xb3Jrc3BhY2UvR2l0aHViL3JlcG9zL3JlZHV4LWNocm9tZS1leHRlbnNpb24vc3JjL3NjcmlwdHMvcG9wdXAvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztRQ0FPLGVBQWU7Ozs7O0FDQXRCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJy4vcG9wdXAvaW5kZXgnIiwiY29uc29sZS5sb2coXCI+PkhlbGxvIHdvcmxkIGZyb20gcG9wdXAgc2NyaXB0ISA8PFwiKVxuXG5cblxuLy9FeHRlbnNpb24gY29tbXVuaWNhdGlvblxuXG4vL0dldCBpbml0aWFsIHN0b3JlIGZyb20gQmFja2dyb3VuZCBQYWdlXG4vKmNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiBhY3Rpb246ICdnZXRTdG9yZSdcbiB9LCBmdW5jdGlvbiAocmVzKSB7XG4gY29uc29sZS5sb2coJ2dldFN0b3JlJywgcmVzKTtcbiBpZiAocmVzKSB7XG4gaW5pdGlhbFN0b3JlID0gcmVzXG4gfVxuIH0pO1xuXG5cbi8vRGlzcGF0Y2hpbmcgdXBkYXRlcyB0byBCYWNrZ3JvdW5kIFBhZ2UgYW5kIENvbnRlbnQgU2NyaXB0c1xuc3RvcmUuc3Vic2NyaWJlKCgpID0+XG5jaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7XG4gIGFjdGlvbjogJ3VwZGF0ZVN0b3JlJyxcbiAgc3RvcmU6IC8vc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICBzZW5kZXI6ICd4eHgnIC8vY3VycmVudCBhY3Rpb25cbi8vc3RvcmUuZ2V0U3RhdGUoKVxufSk7XG5cbmNocm9tZS50YWJzLnF1ZXJ5KHt9LCBmdW5jdGlvbiAodGFicykge1xuICB2YXIgbWVzc2FnZSA9IHtcbiAgICBhY3Rpb246ICd1cGRhdGVTdG9yZScsXG4gICAgc3RvcmU6IC8vc3RvcmUuZ2V0U3RhdGUoKSxcbiBzZW5kZXI6ICd4eHgnIC8vY3VycmVudCBhY3Rpb25cbn07XG5mb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyArK2kpIHtcbiAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFic1tpXS5pZCwgbWVzc2FnZSk7XG59XG59KTtcbik7XG4qL1xuXG5cbi8vUmVjZWl2aW5nIHVwZGF0ZXMgZnJvbSBDb250ZW50IFNjcmlwdHNcblxuXG4iXX0=
