import { AppLayout } from './layout/appLayout.js';
import { ErrorPage } from './views/404.js';

const routes = {
  '/': AppLayout,
  // '/photos': {
  //   '/': () => <AppLayout />,
  //   '/selfies': () => AppLayout(),
  //   '/recent': AppLayout(),
  //   '/deleted': AppLayout(),
  // },
  // '/videos': {
  //   '/': AppLayout(),
  //   '/selfies': AppLayout(),
  //   '/recent': AppLayout(),
  //   '/deleted': AppLayout(),
  // },
  // '/podcasts': {
  //   '/': AppLayout(),
  //   '/selfies': AppLayout(),
  //   '/recent': AppLayout(),
  //   '/deleted': AppLayout(),
  // },
  404: ErrorPage,
};

export default routes;
