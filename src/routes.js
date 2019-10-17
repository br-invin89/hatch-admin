import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Parents = React.lazy(() => import('./views/Users/Parents/ParentsContainer'));
const Parent = React.lazy(() => import('./views/Users/Parents/ParentContainer'));
const NewParent = React.lazy(() => import('./views/Users/Parents/NewParentContainer'));
const Child = React.lazy(() => import('./views/Users/Children/ChildContainer'));
const NewChild = React.lazy(() => import('./views/Users/Children/NewChildContainer'));
const Test = React.lazy(() => import('./views/Test/Test'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/parents', exact: true,  name: 'Parents', component: Parents },
  { path: '/parents/create', exact: true, name: 'New Parent', component: NewParent },
  { path: '/parents/:id', exact: true, name: 'Parent Details', component: Parent },  
  { path: '/parents/:parentId/children/create', exact: true, name: 'New Child', component: NewChild },
  { path: '/parents/:parentId/children/:childId', name: 'Child Details', component: Child },  
  { path: '/test', name: 'Test', component: Test },
];

export default routes;
