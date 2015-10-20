import Q from 'q';

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

  }


  return result.promise;
}
