import { connect } from 'react-redux';
import DefaultLayout from './DefaultLayout';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../../store/actions/auth'

const mapStateToProps = state => ({
  auth: state.auth || {}
})

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(AuthActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultLayout);
