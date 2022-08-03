import { MicroJob } from 'components/pages';

const protectedRoutes = [
  {
    path: '/micro-jobs',
    exact: true,
    element: <MicroJob />,
  },
];

export { protectedRoutes };
