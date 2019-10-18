import React from 'react'
import { Card, CardBody } from 'reactstrap'

/*
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
*/
// import ClassicEditor2 from '@ckeditor/ckeditor5-build-classic'

import EditContent from './EditContent/EditContentContainer'

export default class Test extends React.Component {
  render() {
    return (
      <div className="animated fadeIn">
        <EditContent />
      </div>
    )
  }
}
