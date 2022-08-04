import { Dashboard, MicroJob } from 'components/pages';

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
