import React from 'react'
import Dropzone from 'react-dropzone'

export default class ImagePicker extends React.Component {
  state = {
    image: null
  }

  render() {
    const { image } = this.state
    return (
      <div>
        <Dropzone onDrop={this.onDrop}
          accept="image/png, image/jpeg, image/gif"
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive && !isDragReject &&
                <div style={{
                  backgroundColor: "rgba(30,40,240,0.8)"
                }}>
                  Drop here
                </div>
              }
              {!isDragActive && 
                <div style={{border: "1px solid #f00"}}>
                  Click me to upload a file!
                </div>
              }
              { isDragReject && 
                <div style={{border: '1px solid #f00', color: '#f00'}}>
                  File type not supported
                </div>
              }
              {image &&
                <img src={this.state.image} style={{width: '100%'}} />
              }
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
    console.log(URL.createObjectURL(file))
    this.props.onPick(acceptedFiles[0])
  }
}
