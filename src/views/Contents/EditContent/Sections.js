import React from 'react'
import { 
  Button, Row, Col,
  Card, CardHeader, CardBody,
  Nav, NavItem, NavLink,
  Form, FormGroup, Input, Label
} from 'reactstrap'

export default class Sections extends React.Component {
  render() {
    const { sections } = this.props.screen
    
    return (
      <div 
        style={{
          width: '600px'
        }}
      >
        <Row style={{
          height: "760px",
          overflowY: 'auto', overflowX: 'hidden'
        }}>
        {sections.map((section, k) => (
          <div style={{ width: '100%' }} key={k} >
            <Section 
              section={section} 
              sectionIndex={k} 
              onChangeSectionStyle={this.onChangeSectionStyle}
              onDeleteSection={this.onDeleteSection}
              onMoveSection={this.onMoveSection}
              onChangeElementStyle={(sectionIndex, elementIndex, style) => this.props.onChangeElementStyle(sectionIndex, elementIndex, style)}
              onMoveElement={(sectionIndex, elementIndex, direction) => this.props.onMoveElement(sectionIndex, elementIndex, direction)}
              onDeleteElement={(sectionIndex, elementIndex) => this.props.onDeleteElement(sectionIndex, elementIndex)}
              onAddElement={(sectionIndex) => this.props.onAddElement(sectionIndex)}
              onChangeElementContent={this.props.onChangeElementContent}
            />
          </div>
        ))}
        </Row>
        <div>
          <Button type="submit" size="md" color="success" onClick={this.onSubmit}>
            <i className="fa fa-circle-o"></i> Submit
          </Button>
          <Button type="submit" size="md" className="pull-right" color="primary" onClick={this.onAddSection}>
            <i className="fa fa-plus"></i> Add Section
          </Button>
        </div>
      </div>
    )
  }

  onChangeSectionStyle = (sectionIndex, style) => {
    this.props.onChangeSectionStyle(sectionIndex, style)
  }

  onDeleteSection = (sectionIndex) => {
    this.props.onDeleteSection(sectionIndex)
  }

  onMoveSection = (sectionIndex, direction) => {
    this.props.onMoveSection(sectionIndex, direction)
  }

  onAddSection = () => {
    this.props.onAddSection()
  }

  onSubmit = () => {
    this.props.onSubmit()
  }
}

class Section extends React.Component {
  state = {
    tab: 'elements',
    style: {}
  }

  render() {
    const { style, elements } = this.props.section
    console.log(elements)

    return (
      <Card size="sm">
        <CardHeader>
          <Nav tabs>
            <NavItem >
              <NavLink>
                <strong>Section {this.props.sectionIndex+1}</strong>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={this.state.tab=='style'} 
                onClick={() => this.setState({...this.state, tab: 'style'})}
              >
                <span><i className="fa fa-gear"></i> Style</span>
              </NavLink>
            </NavItem>
            <NavItem className="mr-2">
              <NavLink active={this.state.tab=='elements'}
                onClick={() => this.setState({...this.state, tab: 'elements'})}
              >
                <span>Elements</span>
              </NavLink>
            </NavItem>
            <NavItem className="">
              <NavLink onClick={() => this.onMoveSection('up')}>
                <span><i className="fa fa-arrow-up"></i> Up</span>
              </NavLink>
            </NavItem>
            <NavItem className="mr-3">
              <NavLink onClick={() => this.onMoveSection('down')}>
                <span><i className="fa fa-arrow-down"></i> Down</span>
              </NavLink>
            </NavItem>
            <NavItem className="">
              <NavLink color="danger" 
                onClick={this.onDeleteSection}
              >
                <span className="text-danger"><i className="fa fa-close"></i> Delete</span>
              </NavLink>
            </NavItem>
          </Nav>  
        </CardHeader>
        <CardBody style={{padding: 5}}>
          {this.state.tab=='style' &&
          <SectionStyle 
            style={style} 
            sectionIndex={this.props.sectionIndex} 
            onChangeSectionStyle={this.onChangeSectionStyle}
          />
          }
          {this.state.tab=='elements' &&
          elements.map((element, k) => (            
            <Element key={k} 
              sectionIndex={this.props.sectionIndex}
              elementIndex={k}
              element={element} 
              onChangeElementStyle={(sectionIndex, elementIndex, style) => this.props.onChangeElementStyle(sectionIndex, elementIndex, style)}
              onMoveElement={(sectionIndex, elementIndex, direction) => this.props.onMoveElement(sectionIndex, elementIndex, direction)}
              onDeleteElement={(sectionIndex, elementIndex) => this.props.onDeleteElement(sectionIndex, elementIndex)}
              onChangeElementContent={this.props.onChangeElementContent}
            />
          ))          
          }
          <div>
            <Button type="submit" size="sm" className="pull-right" color="primary" onClick={this.onAddElement}>
              <i className="fa fa-plus"></i> Add Element
            </Button>
          </div>
        </CardBody>        
      </Card>
    )
  }
  onChangeSectionStyle = (sectionIndex, style) => {
    this.props.onChangeSectionStyle(sectionIndex, style)
  }

  onDeleteSection = () => {
    this.props.onDeleteSection(this.props.sectionIndex)
  }

  onMoveSection = (direction) => {
    this.props.onMoveSection(this.props.sectionIndex, direction)
  }

  onAddElement = () => {
    this.props.onAddElement(this.props.sectionIndex)
  }
}

class SectionStyle extends React.Component {
  state = {
    style: null,
    isVerticalAlign: true
  }

  componentDidMount() {
    const { style } = this.props
    this.setState({...this.state, style: Object.assign({}, style)})
  }

  render() {
    const { style, isVerticalAlign } = this.state
    const { sectionIndex } = this.props

    if (!style) return <></>
    return (
      <>
        <Form>
          <Row>
            <Col col="12">
              <FormGroup check inline>
                <Input className="form-check-input" type="radio" 
                  checked={isVerticalAlign}
                  onChange={() => {
                    let { style } = this.state
                    style.flexDirection = 'column'
                    style.justifyContent = 'space-between'
                    this.setState({...this.state, style, isVerticalAlign: !this.state.isVerticalAlign})
                  }}
                />
                <Label className="form-check-label" check 
                >Vertical align</Label>
              </FormGroup>
              <FormGroup check inline>
                <Input className="form-check-input" type="radio" 
                  checked={!isVerticalAlign}
                  onChange={() => {
                    let { style } = this.state
                    style.flexDirection = 'row'
                    style.justifyContent = 'space-between'
                    this.setState({...this.state, style, isVerticalAlign: !this.state.isVerticalAlign})
                  }}
                />
                <Label className="form-check-label" check 
                >Horizontal align</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col col="12">
              <FormGroup check inline>
                <Label >margin top </Label>
                <Input type="text" bsSize="sm" value={style.marginTop}
                  onChange={e => {
                    let style_ = this.state.style
                    style_.marginTop=parseInt(e.target.value)
                    this.setState({...this.state, style: style_ })
                  }}
                  style={{width: 60}}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button 
            type="button" size="sm" color="info" 
            onClick={this.onChangeSectionStyle}
          >
            <i className="fa fa-check"></i> Apply
          </Button>
        </Form>
      </>
    )
  }

  onChangeSectionStyle = () => {
    const { sectionIndex } = this.props
    const { style } = this.state

    this.props.onChangeSectionStyle(sectionIndex, style)
  }
}

class Element extends React.Component {
  state = {
    tab: 'content',
    style: {}
  }

  render() {
    const { element, sectionIndex, elementIndex } = this.props
    return (
      <Card size="sm">
        <CardHeader>
          <Nav tabs className="small">
            <NavItem>
              <NavLink>
                <strong>Element {this.props.elementIndex+1}</strong>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active={this.state.tab=='style'} 
                onClick={() => this.setState({...this.state, tab: 'style'})}
              >
                <span><i className="fa fa-gear"></i> Style</span>
              </NavLink>
            </NavItem>
            <NavItem className="mr-2">
              <NavLink active={this.state.tab=='content'}
                onClick={() => this.setState({...this.state, tab: 'content'})}
              >
                <span>Content</span>
              </NavLink>
            </NavItem>
            <NavItem className="">
              <NavLink onClick={() => this.onMoveElement('up')}>
                <span><i className="fa fa-arrow-up"></i> Up</span>
              </NavLink>
            </NavItem>
            <NavItem className="mr-3">
              <NavLink onClick={() => this.onMoveElement('down')}>
                <span><i className="fa fa-arrow-down"></i> Down</span>
              </NavLink>
            </NavItem>
            <NavItem className="">
              <NavLink color="danger" 
                onClick={this.onDeleteElement}
              >
                <span className="text-danger"><i className="fa fa-close"></i> Delete</span>
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody style={{padding: 2}}>
          {this.state.tab=='style' && 
          <ElementStyle 
            style={element.style}
            sectionIndex={this.props.sectionIndex}
            elementIndex={this.props.elementIndex}
            onChangeElementStyle={this.onChangeElementStyle}
          />
          }
          {this.state.tab=='content' && 
          <ElementContent
            sectionIndex={this.props.sectionIndex}
            elementIndex={this.props.elementIndex}
            element={element}
            onChangeElementContent={this.props.onChangeElementContent}
          />
          }
        </CardBody>
      </Card>
    )
  }

  onChangeElementStyle = (sectionIndex, elementIndex, style) => {
    this.props.onChangeElementStyle(sectionIndex, elementIndex, style)
  }

  onMoveElement = (direction) => {
    this.props.onMoveElement(this.props.sectionIndex, this.props.elementIndex, direction)
  }

  onDeleteElement = () => {
    this.props.onDeleteElement(this.props.sectionIndex, this.props.elementIndex)
  }
}

class ElementStyle extends React.Component {
  state = {
    style: null
  }

  componentDidMount() {
    const { style } = this.props
    this.setState({...this.state, style: Object.assign({},style)})
  }

  render() {
    const { style } = this.state
    const { sectionIndex, elementIndex } = this.props

    if (!style) return <></>
    return (
      <>
        <Form>
          <Row>
            <Col col="12">
              <FormGroup check inline>
                <Label >Font size </Label>
                <Input type="text" bsSize="sm" value={style.fontSize}
                  onChange={e => {
                    let { style }  = this.state
                    style.fontSize=parseInt(e.target.value)
                    this.setState({...this.state, style })
                  }}
                  style={{width: 60}}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button type="button" size="sm" color="info"
            onClick={this.onChangeElementStyle}
          >
            <i className="fa fa-check"></i> Apply
          </Button>
        </Form>
      </>
    )
  }

  onChangeElementStyle = () => {
    const { sectionIndex, elementIndex } = this.props
    const { style } = this.state

    this.props.onChangeElementStyle(sectionIndex, elementIndex, style)
  }
}

class ElementContent extends React.Component {
  state = {
    content: {}
  }

  componentDidMount() {
    const { content, type } = this.props.element
    this.setState({...this.state, content})
  }

  render() {
    const { type } = this.props.element
    
    return (
      <React.Fragment>
        {type=='text' && 
        this.renderText()
        }

        <Button type="button" size="sm" color="info"
          onClick={this.onChangeElementContent}
        >
          <i className="fa fa-check"></i> Apply
        </Button>
      </React.Fragment>
    )
  }

  renderText() {
    const { element } = this.props
    
    return (
      <Form>
        <FormGroup>
          <Label >Text</Label>
          <textarea className="form-control" size="sm" 
            value={this.state.content}
            onChange={
              e=>this.setState({...this.state, content: e.target.value})
            }
          ></textarea>
        </FormGroup>
      </Form>
    )
  }

  onChangeElementContent = () => {
    const { sectionIndex, elementIndex } = this.props
    const { content } = this.state

    this.props.onChangeElementContent(sectionIndex, elementIndex, content)
  }
}
