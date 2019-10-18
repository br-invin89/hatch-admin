import React from 'react'
import { connect } from 'react-redux'

class LoadingHanlder extends React.Component {
  render() {
    const { loading } = this.props.app
    return (
      <React.Fragment>
        {loading &&
        <div style={{
          position: 'absolute', left: 0, top: 0,
          width: '100%', height: '100%',
          backgroundColor: 'rgba(127, 127, 127, 0.4)', zIndex: 100
        }}>
          <div style={{
            width: '100%', 
            textAlign: 'center', top: 80,
            position: 'absolute', zIndex: 110}}>
            <img src={require('../../assets/img/loading.gif')} style={{width: 150, height: 150}}/><br/>
          </div>
        </div>
        }
      </React.Fragment>      
    )
  }
}

const mapStateToProps = state => ({
  app: state.app || {}
})

export default connect(
  mapStateToProps
)(LoadingHanlder)
