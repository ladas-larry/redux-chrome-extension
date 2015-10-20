import { INCREMENT_COUNTER, DECREMENT_COUNTER, UPDATE_STATE, SET_OPTIONS} from '../actions/chromeExtension.js';

export default function chromeExtension(state = {counter:0, persistent: {options: {initCount: 1}}}, action) {
  switch (action.type) {
    case UPDATE_STATE:
      console.log('UPDATE_STATE', action.state);
      var newState = Object.assign({}, state, action.state);
      //conditions to update localStorage only inside backround page
      if(location.protocol == 'chrome-extension:' && chrome.extension.getBackgroundPage() === window){
        localStorage.setItem('persistent', JSON.stringify(newState.persistent));
      }
      return newState;
    case SET_OPTIONS:
      return Object.assign({}, state, {persistent: {options: action.options}});
    //Counter example
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {counter: state.counter + 1});
    case DECREMENT_COUNTER:
      return Object.assign({}, state, {counter: state.counter - 1});
    default:
      return state;
  }
}


