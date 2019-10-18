import React from 'react'

export default class EditPreview extends React.Component {
  render() {    
    const { sections } = this.props.screen
    const globalVars = this.props.globalVars

    return (
      <PreviewWrapper bgImage={globalVars.bgImage}>
        {sections.map((section, k) => (
          <Section section={section} key={k} />
        ))}
      </PreviewWrapper>
    )
  }
}

const PreviewWrapper = (props) => (
  <div 
    style={{ 
      width: 395, height: 872, position: 'relative',
      borderRadius: 20, backgroundColor: '#111',
      padding: '20px 10px 50px 10px',       
    }}
  >
    <div 
      style={{
        backgroundImage: `url(${props.bgImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        overflowY: 'auto', 
        flex: 1, justifyContent: 'center', display: 'flex', flexDirection: 'column',
        borderRadius: 15,
        width: '100%', height: '100%', padding: 20
      }}
    >
      {props.children}
    </div>
  </div>
)

const Section = (props) => {
  const { section } = props

  return (
    <div style={{ width: '100%' }}>
      <div style={{...section.style, ...{display: 'flex'}}}>
        {section.elements.map((element, k) => (
          <Element element={element} key={k} />
        ))}
      </div>
    </div>
  )
}

const Element = (props) => {
  const { element } = props

  return (
    <React.Fragment>
      {element.type=='text' &&
        <div style={element.style}>
          {element.content}
        </div>
      }
    </React.Fragment>
  )
}
