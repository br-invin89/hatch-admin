import React, { Component } from 'react';
import { 
  Card, CardBody, CardHeader, CardFooter,
  Col, Row, 
  Form, FormGroup, 
  Label, Input, Button,
  ListGroup, ListGroupItem
} from 'reactstrap';
import ImagePicker from '../../../components/ImagePicker'

export default class Child extends Component {
  state = {
    userInfo: null
  }

  componentWillReceiveProps(nextProps) {
    const { child } = nextProps.users
    if (this.state.userInfo == null) {
      this.setState({
        ...this.state,
        userInfo: child
      })
    }
  }

  componentDidMount() {
    const { parentId, childId } = this.props.match.params
    this.props.usersActions.getChild({ parentId, childId })
  }

  render() {
    const childId = this.props.match.params.childId
    const { userInfo } = this.state

    return (
      <div className="animated fadeIn">
        {userInfo ?
          <Card>          
            <CardHeader>
              <strong><i className="icon-info pr-1"></i>id: {childId}</strong>
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
                <i className="fa fa-dot-circle-o"></i> Update
              </Button>
              <Button type="button" size="md" color="danger" className="pull-right" onClick={this.deleteChild}>
                <i className="fa fa-close"></i> Delete Child Info
              </Button>
            </CardFooter>
          </Card>
        :
          <Card>
            <CardHeader>
              <span><i className="text-muted icon-ban"></i> Not found</span>
            </CardHeader>
            <CardBody>
            </CardBody>
          </Card>
        }
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
    const { userInfo } = this.state
    this.props.usersActions.updateChild({ userInfo })
  }

  deleteChild = () => {
    const { parentId, childId } = this.props.match.params
    this.props.usersActions.deleteChild({ parentId, childId })
    this.props.history.push(`/parents/${parentId}`)
  }
}
