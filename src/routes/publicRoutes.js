import { Landing, Login, NotFound } from 'components/pages';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    element: <Landing />,
  },
  {
    path: '/login',
    exact: true,
    element: <Login />,
  },
  {
    path: '/signup',
    exact: true,
    element: <Login />,
  },
];

const notFoundRoute = [
  {
    path: '*',
    element: <NotFound />,
  },
];

export { publicRoutes, notFoundRoute };
