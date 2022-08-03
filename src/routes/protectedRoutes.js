import { Landing } from '../components/pages';

const protectedRoutes = [
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

export { protectedRoutes };
