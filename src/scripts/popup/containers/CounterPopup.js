import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//APP CODE, should be modified
import Popup from '../components/Popup';
import * as CounterActions from '../../shared/actions/chromeExtension';

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
