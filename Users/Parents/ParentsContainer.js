import { connect } from 'react-redux'
import Parents from './Parents'
import * as UsersActions from '../../../store/actions/users'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  users: state.users || {}
})

const mapDispatchToProps = dispatch => ({
  usersActions: bindActionCreators(UsersActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Parents)
