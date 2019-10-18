import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

export default class Children extends Component {
  state = {
    searchVal: ''
  }

  componentDidMount() {
    this.props.usersActions.getChildren()
  }

  render() {
    const { children } = this.props.users
    return (
        <MUIDataTable
            title={<div><Button type="button" size="sm" color="primary" onClick={() => this.props.history.push(`/parents/select/children/create`)}><i className="fa fa-plus"></i> Add Child </Button></div>}
            data={children}
            columns={[
                {
                  name: "childId",
                  options: {
                    display: "excluded",
                    filter: false                   
                  }                  
                },
                {
                  name: "name",
                  label: "Name",
                  options: {
                    customBodyRender:(data, dataIndex, rowIndex) => {
                      const userLink = `/parents/${children[dataIndex.rowIndex].parent[0].parentId}/children/${children[dataIndex.rowIndex].childId}`
                      return (
                        <Link to={userLink}>{data}</Link>
                      );
                    }
                  }
                },
                {
                  name: "image",
                  label: "Image",
                  options: {
                    filter: false,
                    customBodyRender:(data, dataIndex, rowIndex) => {
                      return (
                        <Image src={data} style={{width: '50px', height: '50px'}} roundedCircle/>
                      );
                    }
                  }  
                },
                {
                  name: "gender",
                  label: "Gender"
                },
                {
                  name: "birthday",
                  label: "Birthday"
                },
                {
                  name: "childId",
                  label: "Parent",
                  options: {
                    filter: false,
                    customBodyRender:(data, dataIndex, rowIndex) => {
                      const parentLink = `/parents/${children[dataIndex.rowIndex].parent[0].parentId}`
                      return (
                          <Link to={parentLink}>{children[dataIndex.rowIndex].parent[0].firstName} {children[dataIndex.rowIndex].parent[0].lastName}</Link>                                               
                      );
                    }
                  } 
                },
                {
                  name: "createdAt",
                  label: "Created At"
                },
                {
                  name: "childId",
                  label: "Action",
                  options: {
                    filter: false,
                    customBodyRender:(data, dataIndex, rowIndex) => {
                      return (
                        <Button size="sm" className="icon mr-1" color="danger" onClick={() => this.deleteChild(children[dataIndex.rowIndex].parent[0].parentId, children[dataIndex.rowIndex].childId)}><i className="fa fa-close"></i></Button>                                               
                      );
                    }
                  } 
                },
            ]}
            options={{
                selectableRows: "none",
                responsive: "scrollMaxHeight"                
            }}
        />
    )
  }
  deleteChild = (parentId, childId) => {
    // if (!confirm(`Are you sure to delete this parent?`)) return
    this.props.usersActions.deleteChild({ parentId, childId })
  }
}

// const MyRow = (props) => {
//     const user = props.user
//     const userLink = `/children/${user[0]}`
//     const parentLink = `/parents/${user[5][0].parentId}`
//   console.log(user);
//     return (
//         <tr key={user[0]}>
//             <td><Link to={userLink}>{user[1]}</Link></td>
//             <td><img src={user[2]} style={{width: '50px'}} /></td>
//             <td>{user[3]}</td>
//             <td>{user[4]}</td>
//             <td><Link to={parentLink}>{user[5][0].firstName} {user[5][0].lastName}</Link></td>
//             <td><Moment format='YY-M-D h:m'>{user[6]}</Moment></td>
//             <td>
//             <Button size="sm" className="icon mr-1" color="danger" onClick={() => props.deleteChild(user[0])}><i className="fa fa-close"></i></Button>
//             </td>
//         </tr>
//     );
// }