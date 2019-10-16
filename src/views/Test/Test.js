import React from 'react'
import { Card, CardBody } from 'reactstrap'
import ImagePicker from '../../components/ImagePicker'
import axios from 'axios'

export default class Test extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <p>It's just test page.</p>
        <Card style={{width: 220}}>
          <CardBody>
            <p>asdasd</p>
            <div style={{width: 90}}>
              <ImagePicker onPick={this.onPickPhoto}/>
            </div>            
          </CardBody>
        </Card>
      </div>
    )
  }

  onPickPhoto = (photo) => {
    const data = new FormData()
    data.append('pk', '123')
    data.append('file', photo)
    axios.post('http://192.168.1.14:8000/admin/test', data)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
    
  }
}
