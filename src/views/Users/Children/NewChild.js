import React, { Component } from 'react';
import { 
  Card, CardBody, CardHeader, CardFooter,
  Col, Row, 
  Form, FormGroup, 
  Label, Input, Button,
  ListGroup, ListGroupItem
} from 'reactstrap';
import ImagePicker from '../../../components/ImagePicker'

export default class NewChild extends Component {
  state = {
    userInfo: {
      image: null,
      name: '',
      gender: '',
      birthday: ''
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
                  <FormGroup >
                    <Label>Avatar</Label>
                    <ImagePicker image={userInfo.image} onPick={this.onPickImage}/>
                  </FormGroup>
                </Col>
                <Col md="3" xs="12">
                  <FormGroup >
                    <Label>Name</Label>
                    <Input value={userInfo.name} 
                      onChange={e => this.onSetFormValue('name', e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup >
                    <Label>Birthday</Label>
                    <Input value={userInfo.birthday} 
                      onChange={e => this.onSetFormValue('birthday', e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup >
                    <Label>Gender</Label>
                    <Input value={userInfo.gender} 
                      onChange={e => this.onSetFormValue('gender', e.target.value)}
                    />
                  </FormGroup>
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
    const { parentId } = this.props.match.params
    let { userInfo } = this.state
    userInfo['parentId'] = parentId
    this.props.usersActions.createChild({ userInfo })    
    this.props.history.push(`/parents/${parentId}`)
  }
}
