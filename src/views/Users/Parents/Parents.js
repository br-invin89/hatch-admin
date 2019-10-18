import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, CardBody, CardHeader, 
  Button, Table, 
  InputGroup, InputGroupAddon, Input} from 'reactstrap';
import Moment from 'react-moment';

export default class Parents extends Component {
  state = {
    searchVal: '',
  }

  componentDidMount() {
    this.props.usersActions.getParents()
  }

  render() {    
    const { parents } = this.props.users    
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <div>
              <i className="fa fa-align-justify"></i> Parents
            </div>
            <div>
              <div className="pull-left">
                <Button size="sm" color="primary" onClick={() => this.props.history.push('/parents/create')}>
                  <i className="fa fa-plus mr-1"></i>Create New Parent
                </Button>
              </div>
              <div className="pull-right">
                <InputGroup size='sm'>
                  <Input placeholder='Search by name or phone number.' 
                    value={this.state.searchVal} 
                    onChange={e => this.setFormValue('searchVal', e.target.value) }
                    className="sm"
                  />
                  <InputGroupAddon onClick={this.doSearch} addonType="prepend" style={{ cursor: 'pointer' }}>Search</InputGroupAddon>
                </InputGroup>                            
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <div>
              
            </div>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col" style={{width: 80}}>Avatar</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Children</th>
                  <th scope="col">Card Info</th>                      
                  <th scope="col">Registered On</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {parents.map((user, index) =>
                  <UserRow no={index+1} key={index} user={user} deleteParent={this.deleteParent}/>
                )}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    )
  }

  setFormValue = (name, val) => {
    this.setState({ ...this.state, [name]: val})
  }

  doSearch = () => {
    const { searchVal } = this.state
    this.props.usersActions.searchParents({ searchVal })
  }

  deleteParent = (parentId) => {
    // if (!confirm(`Are you sure to delete this parent?`)) return
    this.props.usersActions.deleteParent({ parentId })
  }
}

const UserRow = (props) => {
  const user = props.user
  const userLink = `/parents/${user.parentId}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.parentId.toString()}>
      <th scope="row">{props.no}</th>
      <td><Link to={userLink}>{user.lastName}</Link></td>
      <td>
        <img src={user.image} style={{width: '100%'}} />
      </td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <span>Number: {user.card.number}, &nbsp;</span>
        <span>CVC: {user.card.cvc}</span>
      </td>
      <td>
        <Moment format='YY-M-D h:m'>{user.createdAt}</Moment>
      </td>
      <td>
        <Button size="sm" className="icon mr-1" color="danger" onClick={() => props.deleteParent(user.parentId)}><i className="fa fa-close"></i></Button>
      </td>
    </tr>
  )
}
