import { Dashboard, MicroJob, MicroJobDetails } from 'pages';

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
  {
    path: '/micro-jobs/:id',
    element: <MicroJobDetails />,
  },
];

export { protectedRoutes };
