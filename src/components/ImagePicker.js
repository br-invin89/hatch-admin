import React from 'react'
import Dropzone from 'react-dropzone'
import { callbackify } from 'util'

export default class ImagePicker extends React.Component {
  state = {
    image: null
  }

  render() {
    const { image } = this.state
    const propImage = this.props.image

    return (
      <div>
        <Dropzone onDrop={this.onDrop}
          accept="image/png, image/jpeg, image/gif"
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div {...getRootProps()} style={{
              cursor: 'pointer',
              position: 'relative',
              width: '100%',
              height: 0,
              paddingBottom: '75%',
              backgroundColor: 'rgba(0, 0, 0, 0.2)'
            }}>              
              <input {...getInputProps()} />
              <div style={{
                position: 'absolute', zIndex: 10,
                left: 5, top: 5, 
                width: 'calc(100% - 10px)', height: 'calc(100% - 10px)' 
              }}>
                {
                image ?
                  <img src={this.state.image} style={{
                    width: '100%', height: '100%'}} />
                :
                propImage ? 
                  <img src={propImage} style={{
                    width: '100%', height: '100%'}} />
                :
                  <>
                  </>
                }
              </div>
              <div style={{
                position: 'absolute', zIndex: 20,
                opacity: 0.6,
                width: '100%', height: '100%'
              }}>
                {!isDragActive && 
                  <img src={require('../assets/img/upload-btn.jpg')}
                    style={{
                      width: '100%', height: '100%'
                    }}
                  />
                }
                {isDragActive && isDragReject &&
                  <p style={{
                    backgroundColor: "rgba(30,40,240,0.8)",
                    marginTop: 30
                  }}>
                    File type not supported
                  </p>
                }
              </div>              
            </div>
          )}
        </Dropzone>
      </div>
    )
  }

  onDrop = (acceptedFiles) => {
    if (acceptedFiles.length==0) return

    var file = acceptedFiles[0]
    const reader = new FileReader()
    this.setState({ ...this.state, image: URL.createObjectURL(file) })
    this.props.onPick(acceptedFiles[0])
  }
}
