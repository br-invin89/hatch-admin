import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, CardBody, CardHeader, 
  Button, Table, 
  InputGroup, InputGroupAddon, Input} from 'reactstrap';
import Moment from 'react-moment';

export default class Contents extends Component {
  state = {
  }

  componentDidMount() {
    this.props.contentsActions.getContents()
  }

  render() {    
    const { contents } = this.props.contents    
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <div>
              <i className="fa fa-align-justify"></i> Contents
            </div>
            <div>
              <div className="pull-left">
                <Button size="sm" color="primary" onClick={() => this.props.history.push('/contents/create')}>
                  <i className="fa fa-plus mr-1"></i>Create New Content
                </Button>
              </div>
              <div className="pull-right">                   
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Title</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {contents.map((content, k) =>
                  <ContentRow no={k+1} key={k} content={content} deleteContent={this.deleteContent}/>
                )}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    )
  }

  deleteContent = (contentId) => {
    // if (!confirm(`Are you sure to delete this parent?`)) return
    this.props.contentsActions.deleteParent({ contentId })
  }
}

const ContentRow = (props) => {
  const { content } = props

  return (
    <tr key={content.contentId.toString()}>
      <th scope="row">{props.no}</th>
      <td><Link to={`/contents/${content.contentId}/edit-content`}>{content.title}</Link></td>
      <td>
        <Button size="sm" className="icon mr-1" color="danger" onClick={() => props.deleteContent(content.contentId)}><i className="fa fa-close"></i></Button>
      </td>
    </tr>
  )
}
