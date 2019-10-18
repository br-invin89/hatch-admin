import React from 'react'
import { 
  Row, Col, 
  TabPane, TabContent, 
  Nav, NavItem, NavLink,
  Card, CardBody
} from 'reactstrap'

import EditPreview from './EditPreview'
import Sections from './Sections'
import Settings from './Settings'
import ScreenThumbs from './ScreenThumbs'


import testData from '../../../services/coursesData'

export default class EditContent extends React.Component {
  state = {
    settingTab: 'sections',
    content: null
  }

  componentDidMount() {
    const { content } = testData.courses[0]

    this.setState({
      ...this.state,
      content,
      screenIndex: 0
    })
  }

  render() {
    const { content } = this.state
    if (!content) return <></>
    const screen = this.state.content.screens[this.state.screenIndex]
    const globalVars = this.state.content.vars
    const { screens } = this.state.content
    const { screenIndex } = this.state

    return (
      <React.Fragment>
        <Row>
          <div className="pull-left mr-1">
            <Card>
              <CardBody>
                <EditPreview screen={screen} globalVars={globalVars} />
              </CardBody>
            </Card>            
          </div>
          <div className="pull-right">
            <Card>
              <CardBody>
                <Nav tabs>
                  <NavItem>
                    <NavLink 
                      active={this.state.settingTab=='sections'}
                      onClick={() => 
                        this.setState({...this.state, settingTab: 'sections'})
                      }
                    >
                      <span>Sections</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink 
                      active={this.state.settingTab=='settings'}
                      onClick={() => 
                        this.setState({...this.state, settingTab: 'settings'})
                      }
                    >
                      <span>Settings</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.settingTab}>
                  <TabPane tabId="sections">
                    <Sections 
                      screen={screen} 
                      globalVars={globalVars} 
                      onChangeSectionStyle={this.onChangeSectionStyle}
                      onDeleteSection={this.onDeleteSection}
                      onMoveSection={this.onMoveSection}
                      onAddSection={this.onAddSection}
                      onChangeElementStyle={this.onChangeElementStyle}
                      onMoveElement={this.onMoveElement}
                      onDeleteElement={this.onDeleteElement}
                      onAddElement={this.onAddElement}
                      onChangeElementContent={this.onChangeElementContent}
                    />
                  </TabPane>
                  <TabPane tabId="settings">
                    <Settings globalVars={globalVars} />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Row>
          <ScreenThumbs screens={screens} screenIndex={screenIndex} />
        </Row>
      </React.Fragment>
    )
  }

  onChangeSectionStyle = (sectionIndex, newStyle) => {
    let { style } = this.state.content.screens[this.state.screenIndex].sections[sectionIndex]
    style = Object.assign(style, newStyle)

    this.setState({
      ...this.state,
      content: this.state.content
    })
    // this.saveContent()
  }

  onDeleteSection = (sectionIndex) => {
    let { sections } = this.state.content.screens[this.state.screenIndex]
    sections.splice(sectionIndex, 1)
    
    this.setState({
      ...this.state,
      content: this.state.content
    })
  }

  onMoveSection = (sectionIndex, direction) => {
    let { sections } = this.state.content.screens[this.state.screenIndex]

    if (direction=='up') {
      if (sectionIndex==0) return
      let t_ = sections[sectionIndex]
      sections[sectionIndex] = sections[sectionIndex-1]
      sections[sectionIndex-1] = t_
    }
    if (direction=='down') {
      if (sectionIndex==sections.length-1) return
      let t_ = sections[sectionIndex]
      sections[sectionIndex] = sections[sectionIndex+1]
      sections[sectionIndex+1] = t_
    }

    this.setState({
      ...this.state,
      content: this.state.content
    })

  }

  onAddSection = () => {
    let { sections } = this.state.content.screens[this.state.screenIndex]
    sections.push({
      style: {
        flexDirection: 'column', justifyContent: 'space-between',
        marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0,
        paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0,
        borderWidth: 0, borderColor: '#fff', borderStyle: 'solid',
        borderRadius: 0, 
      },
      elements: [
        {
          type: 'text',
          content: 'sample text!',
          style: {
            fontSize: 18, color: '#333', fontWeight: 'normal',
            fontFamily: 'aria', textAlign: 'center', width: '100%'
          }
        }
      ]
    })

    this.setState({
      ...this.state,
      content: this.state.content
    })
  }

  onChangeElementStyle = (sectionIndex, elementIndex, newStyle) => {
    let style = Object.assign({}, this.state.content.screens[this.state.screenIndex].sections[sectionIndex].elements[elementIndex])
    style = Object.assign(style, newStyle)
    this.state.content.screens[this.state.screenIndex].sections[sectionIndex].elements[elementIndex].style = style

    this.setState({
      ...this.state,
      content: this.state.content
    })
  }

  onMoveElement = (sectionIndex, elementIndex, direction) => {
    let elements = Object.assign([], this.state.content.screens[this.state.screenIndex].sections[sectionIndex].elements)

    if (direction=='up') {
      if (elementIndex==0) return
      let t_ = elements[elementIndex]
      elements[elementIndex] = elements[elementIndex-1]
      elements[elementIndex-1] = t_
    }
    if (direction=='down') {
      if (elementIndex==elements.length-1) return
      let t_ = elements[elementIndex]
      elements[elementIndex] = elements[elementIndex+1]
      elements[elementIndex+1] = t_
    }

    this.state.content.screens[this.state.screenIndex].sections[sectionIndex].elements = elements

    this.setState({
      ...this.state,
      content: this.state.content
    })
  }

  onDeleteElement = (sectionIndex, elementIndex) => {
    let elements = Object.assign([], this.state.content.screens[this.state.screenIndex].sections[sectionIndex].elements)
    elements.splice(elementIndex, 1)

    this.state.content.screens[this.state.screenIndex].sections[sectionIndex].elements = elements

    this.setState({
      ...this.state,
      content: this.state.content
    })
  }

  onAddElement = (sectionIndex) => {
    let elements = Object.assign([], this.state.content.screens[this.state.screenIndex].sections[sectionIndex].elements)
    elements.push({
      type: 'text',
      content: 'sample text!',
      style: {
        fontSize: 18, color: '#333', fontWeight: 'normal',
        fontFamily: 'aria', textAlign: 'center', width: '100%'
      }
    })

    this.state.content.screens[this.state.screenIndex].sections[sectionIndex].elements = elements

    this.setState({
      ...this.state,
      content: this.state.content
    })
  }

  onChangeElementContent = (sectionIndex, elementIndex, content) => {
    this.state.content.screens[this.state.screenIndex].sections[sectionIndex].elements[elementIndex].content=content

    this.setState({
      ...this.state,
      content: this.state.content
    })
  }

  saveContent = () => {
    this.forceUpdate()
  }
}
