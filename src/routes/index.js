import { Route } from 'react-router-dom';
import { protectedRoutes } from './protectedRoutes';
import { notFoundRoute, publicRoutes } from './publicRoutes';

const getRoutesBaseRoles = (isLogged, roles) => {
  let routes = isLogged
    ? [...publicRoutes, ...protectedRoutes, ...notFoundRoute]
    : [...publicRoutes, ...notFoundRoute];

  const routeList = routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      element={route.element}
    />
  ));
  return routeList;
};

export { publicRoutes, getRoutesBaseRoles };
