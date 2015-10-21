import Q from 'q';
import initStorage from '../initStorage'
import createInitState from './createInitState'
//Get store from Background Page

export default function getState() {
  var result = Q.defer();
  if (window.chrome && chrome.runtime && chrome.runtime.id) {
    chrome.runtime.sendMessage({
    action: 'getState'
  }, function (res) {
    console.log('getState', res);
    if (res) {
      result.resolve(res);
    } else {
      result.reject(new Error('Cannot reach Background Page'));
    }
  });}
  else{
    //MOCK
    var deferred = Q.defer();
    deferred.resolve(createInitState(initStorage));
    return deferred.promise;
  }
  return result.promise;
}
