import { combineReducers } from 'redux';
import counter from './counter';
import chromeExtension from './../../shared/reducers/chromeExtension';

const rootReducer = combineReducers({
  counter,
  chromeExtension
});

export default rootReducer;