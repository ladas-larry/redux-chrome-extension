import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//APP CODE, should be modified or deleted
import Counter from '../components/Counter';
import * as CounterActions from '../../shared/actions/chromeExtension';

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
