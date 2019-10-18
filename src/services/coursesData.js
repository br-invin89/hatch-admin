
export default {
  courses: [
    {
      courseId: 'sample1',
      title: 'A Course',
      content: {
        vars: {
          bgImage: 'https://pbs.twimg.com/profile_images/1090563733217255426/zKWxFpdd_400x400.jpg',
          progress: 0
        },
        screens: [
          {
            vars: {
              showProgressBar: false,
              modal: {
                elements: []
              },            
            },
            sections: [
              {
                style: {
                  flexDirection: 'column', marginTop: 220
                },
                elements: [
                  {
                    type: 'text',
                    content: 'Let\'s begin!',
                    style: {
                      fontSize: 24, color: '#7cccc9', textAlign: 'center', width: '100%'
                    }
                  },
                  {
                    type: 'text',
                    content: 'Before we learn about Gratitude, let\'s take a momonet to turn into our feeling and breathe.',
                    style: {
                      fontSize: 14, color: '#333', textAlign: 'center', width: '100%'
                    }
                  }
                ]
              },
              {
                style: {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1, borderColor: '#f23332', 
                  borderStyle: 'solid',
                  borderRadius: 5, padding: 10
                },
                elements: [
                  {
                    type: 'text',
                    content: 'AA!',
                    style: {
                      fontSize: 18, color: '#f24433', textAlign: 'center', width: '20%'
                    }
                  },
                  {
                    type: 'text',
                    content: 'It\'s text.',
                    style: {
                      fontSize: 18, color: '#f24433', textAlign: 'center', width: '80%'
                    }
                  }
                ]
              },
              {
                style: {
                  flexDirection: 'row', justifyContent: 'space-between',
                  borderWidth: 1, borderColor: '#f23332', borderRadius: 5, padding: 10
                },
                elements: [
                  {
                    type: 'imageAndLabel',
                    content: {
                      image: 'https://',
                      label: '5min',
                    },                    
                    style: {
                      width: '20%'
                    }
                  }
                ]              
              }
            ]
          }
        ]        
      }      
    }
  ]  
}