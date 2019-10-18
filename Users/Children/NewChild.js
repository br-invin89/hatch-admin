import React, { Component } from 'react';
import { 
  Card, CardBody, CardHeader, CardFooter,
  Col, Row, 
} from 'reactstrap';
import Form from 'react-bootstrap/FORM'
import Button from 'react-bootstrap/Button'
import ImagePicker from '../../../components/ImagePicker'

export default class NewChild extends Component {
  state = {
    userInfo: {
      image: null,
      name: '',
      gender: '',
      birthday: '',
      parentId: ''
    }
  }
  componentDidMount() {
    console.log(this.props.users.parents )
    if(this.props.users.parents.length == 0) {
      this.props.usersActions.getParents()
    }
  }
  render() {
    const { userInfo } = this.state

    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <strong><i className="icon-info pr-1"></i>New Child</strong>
          </CardHeader>
          <CardBody>
            <Form>
              <Row>
                <Col md="3" xs="12">
                  <Form.Group >
                    <Form.Label>*Avatar</Form.Label>
                    <ImagePicker image={userInfo.image} onPick={this.onPickImage}/>
                  </Form.Group>
                </Col>
                <Col md="3" xs="12">
                  <Form.Group >
                    <Form.Label>*Name</Form.Label>
                    <Form.Control type="text" value={userInfo.name} 
                      onChange={e => this.onSetFormValue('name', e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>*Birthday</Form.Label>
                    <Form.Control type="date" value={userInfo.birthday} 
                      onChange={e => this.onSetFormValue('birthday', e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>*Gender</Form.Label>
                    <Form.Control type="text" value={userInfo.gender} 
                      onChange={e => this.onSetFormValue('gender', e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>*Parent</Form.Label>
                    <Form.Control as="select" defaultValue={{ value: this.props.match.params.parentId }} onChange={e => this.onSetFormValue('parentId', e.target.value)}>
                      <option key="empty"  val="">Select Parent</option>
                      {                        
                        this.props.users.parents.map((parent, index) => {
                          console.log(this.props.match.params.parentId)
                          return <option key={index} value={parent.parentId}>{parent.firstName} {parent.lastName}</option>
                        })
                      }
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </CardBody>
          <CardFooter>
            <Button type="submit" size="md" color="primary" onClick={this.onSubmit}>
              <i className="fa fa-dot-circle-o"></i> Create
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  onPickImage = (file) => {
    let { userInfo } = this.state
    userInfo['image'] = file
    this.setState({
      ...this.state,
      userInfo
    })
  }

  onSetFormValue = (name, value) => {
    let { userInfo } = this.state
    userInfo[name] = value
    this.setState({
      ...this.state,
      userInfo
    })
  }

  onSubmit = () => {
    let { userInfo } = this.state
    console.log(userInfo);
    this.props.usersActions.createChild({ userInfo })    
    this.props.history.push(`/parents/${userInfo.parentId}`)
  }
}
