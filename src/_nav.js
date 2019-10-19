export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Users',
      icon: 'icon-user',
      children: [
        {
          name: 'Parents',
          url: '/parents'
        }
      ]
    },    
    {
      name: 'Contents',
      icon: 'icon-user',
      children: [
        {
          name: 'Contents',
          url: '/contents'
        }
      ]
    },    
  ],
};
