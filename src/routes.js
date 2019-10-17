import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Parents = React.lazy(() => import('./views/Users/Parents/ParentsContainer'));
const Parent = React.lazy(() => import('./views/Users/Parents/ParentContainer'));
const NewParent = React.lazy(() => import('./views/Users/Parents/NewParentContainer'));
const Test = React.lazy(() => import('./views/Test/Test'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/parents', exact: true,  name: 'Parents', component: Parents },
  { path: '/parents/create', exact: true, name: 'New Parent', component: NewParent },
  { path: '/parents/:id', name: 'Parent Details', component: Parent },  
  { path: '/test', name: 'Test', component: Test },
];

export default routes;
