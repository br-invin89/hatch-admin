import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

export default class Parents extends Component {
  componentDidMount() {
    this.props.parentsActions.getParents()
  }

  render() {
    const { parents } = this.props.parents
    // const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Parents <small className="text-muted">all</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {parents.map((parent, index) =>
                      <ParentRow key={index} parent={parent}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const ParentRow = (props) => {
  const parent = props.parent
  const parentLink = `/parents/${parent.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={parent.id.toString()}>
      <th scope="row"><Link to={parentLink}>{parent.parentId}</Link></th>
      <td><Link to={parentLink}>{parent.lastName}</Link></td>
      <td>{parent.createdAt}</td>
    </tr>
  )
}
