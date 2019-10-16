import { connect } from 'react-redux'
import Parent from './Parent'
import { bindActionCreators } from 'redux'
import * as ParentsActions from '../../../store/actions/parents'

const mapStateToProps = state => ({
  parents: state.parents || {}
})

const mapDispatchToProps = dispatch => ({
  parentsActions: bindActionCreators(ParentsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Parent)
