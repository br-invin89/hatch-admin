import React, { Component } from 'react';
import { 
  Card, CardBody, CardHeader, CardFooter,
  Col, Row, 
  Form, FormGroup, 
  Label, Input, Button,
  ListGroup, ListGroupItem
} from 'reactstrap';
import ImagePicker from '../../../components/ImagePicker'

export default class NewParent extends Component {
  state = {
    userInfo: {
      image: null,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      card: {
        number: '',
        zipCode: '',
        cvc: '',
        holderName: '',
        expYear: '',
        expMonth: ''
      }
    }
  }

  render() {
    const { userInfo } = this.state

    return (
      <div className="animated fadeIn">
        <Card>          
          <CardHeader>
            <strong><i className="icon-info pr-1"></i>New Product</strong>
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
    this.props.usersActions.createParent({ userInfo })
  }
}
