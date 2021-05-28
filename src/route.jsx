import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import loadable from '@loadable/component';

export const routers = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/x6',
    exact: true,
    name: 'x6',
    component: loadable(() => import('./x6/Example')),
  },
  {
    path: '/g2',
    name: 'g2',
    component: loadable(() => import('./g2/Home')),
    children: [
      {
        path: '/g2/chart',
        exact: true,
        name: 'chart',
        component: loadable(() => import('./g2/Chart')),
      },
      {
        path: '/g2/chart1',
        exact: true,
        name: 'chart1',
        component: loadable(() => import('./g2/Chart1')),
      },
    ],
  },
];

export function renderRouters(routers) {
  return (
    <Switch>
      {routers.map((router, index) => (
        <Route path={router.path} exact={router.exact} key={index}>
          <router.component />
          {renderRouters(router.children || [])}
        </Route>
      ))}
    </Switch>
  );
}
