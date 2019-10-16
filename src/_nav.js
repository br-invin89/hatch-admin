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
  ],
};
