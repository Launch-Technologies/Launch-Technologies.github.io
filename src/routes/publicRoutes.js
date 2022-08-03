import { Landing, NotFound } from '../components/pages';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    element: <Landing />,
  },
  // {
  //   path: "/login",
  //   exact: true,
  //   render: () => <Login></Login>,
  // },
  // {
  //   path: "/signup",
  //   exact: true,
  //   render: () => <SignUp></SignUp>,
  // }
];

const notFoundRoute = [
  {
    path: '*',
    element: <NotFound />,
  },
];

export { publicRoutes, notFoundRoute };
