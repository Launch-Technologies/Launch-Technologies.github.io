import { Dashboard, MicroJob } from 'pages';

const protectedRoutes = [
  {
    path: '/dashboard',
    exact: true,
    element: <Dashboard />,
  },
  {
    path: '/micro-jobs',
    exact: true,
    element: <MicroJob />,
  },
];

export { protectedRoutes };
