import React from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as AppActions from '../../store/actions/app'

class MessageHandler extends React.Component {
  render() {
    const { message, messageType } = this.props.app

    if (message != '') {
      setTimeout(() => {
        this.props.appActions.clearMessage()
      }, 2500)
    }

    return (
      <>
        {message != '' &&
        <Alert color={messageType}>
          {message}
        </Alert>
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  app: state.app || {}
})

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(AppActions, dispatch)
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
) (MessageHandler)
