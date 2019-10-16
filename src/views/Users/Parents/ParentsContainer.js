import { connect } from 'react-redux'
import Parents from './Parents'
import * as ParentsActions from '../../../store/actions/parents'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  parents: state.parents || {}
})

const mapDispatchToProps = dispatch => ({
  parentsActions: bindActionCreators(ParentsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Parents)
