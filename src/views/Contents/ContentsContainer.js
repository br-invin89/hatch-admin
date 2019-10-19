import { connect } from 'react-redux'
import Contents from './Contents'
import * as ContentsActions from '../../store/actions/contents'
import { bindActionCreators } from 'redux'

const mapStateToProps = state => ({
  contents: state.contents || {}
})

const mapDispatchToProps = dispatch => ({
  contentsActions: bindActionCreators(ContentsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Contents)
