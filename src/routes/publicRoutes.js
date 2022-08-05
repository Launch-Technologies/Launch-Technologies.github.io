import { Landing, Login, NotFound, SignUp } from 'pages';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    element: <Landing />,
  },
  {
    path: '/sign-in',
    exact: true,
    element: <Login />,
  },
  {
    path: '/sign-up',
    exact: true,
    element: <SignUp />,
  },
];

const notFoundRoute = [
  {
    path: '*',
    element: <NotFound />,
  },
];

export { publicRoutes, notFoundRoute };
