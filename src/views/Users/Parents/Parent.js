import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, CardBody, CardHeader, CardFooter,
  Col, Row, 
  Form, FormGroup, 
  Label, Input, Button,
  ListGroup, ListGroupItem
} from 'reactstrap';
import ImagePicker from '../../../components/ImagePicker'

export default class Parent extends Component {
  state = {
    userInfo: null
  }

  componentWillReceiveProps(nextProps) {
    const { parent } = nextProps.users
    if (this.state.userInfo == null) {
      this.setState({
        ...this.state,
        userInfo: parent
      })
    }
  }

  componentDidMount() {
    const parentId = this.props.match.params.id
    this.props.usersActions.getParent({ parentId })
  }

  render() {
    const parentId = this.props.match.params.id
    const { parents } = this.props.users
    const { userInfo } = this.state

    return (
      <div className="animated fadeIn">
        {userInfo ?
          <Card>          
            <CardHeader>
              <strong><i className="icon-info pr-1"></i>id: {parentId}</strong>
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
                      <Label>First Name</Label>
                      <Input value={userInfo.firstName} 
                        onChange={e => this.onSetFormValue('firstName', e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup >
                      <Label>Last Name</Label>
                      <Input value={userInfo.lastName} 
                        onChange={e => this.onSetFormValue('lastName', e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup >
                      <Label>Email</Label>
                      <Input value={userInfo.email} 
                        onChange={e => this.onSetFormValue('email', e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup >
                      <Label>Phone</Label>
                      <Input value={userInfo.phone} 
                        onChange={e => this.onSetFormValue('phone', e.target.value)}
                      />
                    </FormGroup>
                  </Col>                  
                  <Col md="3" xs="12">
                    <Label>Card Info</Label>
                    <FormGroup row>
                      <Col md="4">
                        <Label>Number</Label>
                      </Col>
                      <Col md="8">
                        <Input value={userInfo.card.number} 
                          onChange={e => this.onSetCreditValue('number', e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label>ZipCode</Label>
                      </Col>
                      <Col md="8">
                        <Input value={userInfo.card.zipCode} 
                          onChange={e => this.onSetCreditValue('zipCode', e.target.value)}
                        />
                      </Col>
                    </FormGroup>                      
                    <FormGroup row>
                      <Col md="4">
                        <Label>CVC</Label>
                      </Col>
                      <Col md="8">
                        <Input value={userInfo.card.cvc} 
                          onChange={e => this.onSetCreditValue('cvc', e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label>Holder Name</Label>
                      </Col>
                      <Col md="8">
                        <Input value={userInfo.card.holderName} 
                          onChange={e => this.onSetCreditValue('holderName', e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label>Expiration Month</Label>
                      </Col>
                      <Col md="8">
                        <Input value={userInfo.card.expMonth} 
                          onChange={e => this.onSetCreditValue('expMonth', e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label>Expiration Year</Label>
                      </Col>
                      <Col md="8">
                        <Input value={userInfo.card.expYear} 
                          onChange={e => this.onSetCreditValue('expYear', e.target.value)}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md="3" xs="12">
                    <FormGroup>
                      <Label>Children</Label>
                      <ListGroup>
                        {userInfo.children.map((child, k) => (
                          <ListGroupItem key={k}>
                            <img src={child.image} style={{width: 80}} />
                            <Link to={`/parents/${child.parentId}/children/${child.childId}`}>
                              <span>{child.name}</span>
                            </Link>                            
                            <Button size="sm" className="icon pull-right" color="danger" onClick={() => this.deleteChild(child.parentId, child.childId)}>
                              <i className="fa fa-close"></i>
                            </Button>
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                      <Button type="button" size="sm" color="primary" onClick={() => this.props.history.push(`/parents/${parentId}/children/create`)}>
                        <i className="fa fa-plus"></i> Add Children
                      </Button>
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>
              <Button type="submit" size="md" color="primary" onClick={this.onSubmit}>
                <i className="fa fa-dot-circle-o"></i> Update
              </Button>
              <Button type="button" size="md" color="danger" className="pull-right" onClick={this.deleteParent}>
                <i className="fa fa-close"></i> Delete Parent Info
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

  onSetCreditValue = (name, value) => {
    let { userInfo } = this.state
    userInfo['card'][name] = value
    this.setState({
      ...this.state,
      userInfo
    })
  }

  onSubmit = () => {
    const { userInfo } = this.state
    this.props.usersActions.updateParent({ userInfo })
  }

  deleteParent = () => {
    const parentId = this.props.match.params.id
    this.props.usersActions.deleteParent({ parentId })
    this.props.history.push('/parents')
  }

  deleteChild = (parentId, childId) => {
    this.props.usersActions.deleteChild({ parentId, childId })
    const { userInfo } = this.state
    // userInfo.children
  }
}
