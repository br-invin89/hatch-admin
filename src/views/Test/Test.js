import React from 'react'
import { Card, CardBody } from 'reactstrap'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default class Test extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CKEditor
          editor={ClassicEditor}
          data="<p>asdasdasdasd</p>"
          onInit={ editor => {
            console.log('editor is ready to use ', editor)
          } }
        />
      </div>
    )
  }
}
