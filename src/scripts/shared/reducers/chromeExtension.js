import { INCREMENT_COUNTER, DECREMENT_COUNTER, UPDATE_STATE } from '../actions/chromeExtension.js';

export default function chromeExtension(state = {test:'test', counter:1}, action) {
  switch (action.type) {
    case UPDATE_STATE:
      console.log('UPDATE_STATE', action.state);
      var newState = Object.assign({}, state, action.state);
      //run only in backround page
      if(location.protocol == 'chrome-extension:' && chrome.extension.getBackgroundPage() === window){
        localStorage.setItem('persistent', JSON.stringify(newState.persistent));
      }
      return newState;
    //app implementation
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {counter: state.counter + 1});
    case DECREMENT_COUNTER:
      return Object.assign({}, state, {counter: state.counter - 1});
    default:
      return state;
  }
}


