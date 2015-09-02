import { UPDATE_STATE } from '../actions/chromeExtension.js';

export default function chromeExtensions(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATE:
      return Object.assign({}, action.state);
    default:
      return state;
  }
}
