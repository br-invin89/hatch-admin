import { connect } from 'react-redux'
import Child from './Child'
import { bindActionCreators } from 'redux'
import * as UsersActions from '../../../store/actions/users'

const mapStateToProps = state => ({
  users: state.users || {}
})

const mapDispatchToProps = dispatch => ({
  usersActions: bindActionCreators(UsersActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Child)
