export const settings = {
  backgroundImage: 'https://',
  progress: 0, /* total - 100 */

}


export default {
  course1: {
    vars: {
      bgImage: 'https://',
      progress: 0
    },
    screens: [
      {
        sections: [
          {
            elements: [
              {
                type: 'text',
                content: 'Let\'s see what we need today',
                style: {
                  fontSize: '10px', color: '#222', textAlign: 'center', width: '100%'
                }
              }            
            ]
          },
          {
            elements: [
              {
                type: 'imageAndLabel',
                image: 'https://',
                label: '5min',
                style: {
                  width: '20%', alignSelf: 'flex-start'
                }
              }
            ],
            styles: {
              borderWidth: 1, borderColor: '#f23332', borderRadius: 5, padding: 10
            }
          }
        ],
        vars: {
          progress: 8
        },
        showProgressBar: false
      }
    ]
  }
}