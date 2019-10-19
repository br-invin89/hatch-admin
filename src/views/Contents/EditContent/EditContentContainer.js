import { connect } from 'react-redux'
import EditContent from './EditContent'
import { bindActionCreators } from 'redux'
import * as ContentsActions from '../../../store/actions/contents'

const mapStateToProps = state => ({
  contents: state.contents || {}
})

const mapDispatchToProps = dispatch => ({
  contentsActions: bindActionCreators(ContentsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditContent)
