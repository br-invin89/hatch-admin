import { connect } from 'react-redux'
import EditContent from './EditContent'
import { bindActionCreators } from 'redux'
import * as UsersActions from '../../../store/actions/users'

const mapStateToProps = state => ({
  users: state.users || {}
})

const mapDispatchToProps = dispatch => ({
  usersActions: bindActionCreators(UsersActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditContent)
