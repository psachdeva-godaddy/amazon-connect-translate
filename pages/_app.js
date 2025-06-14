import '../styles/global.scss';

import { createApp, reportWebVitals } from '@godaddy/gasket-next';
import { withAuthProvider } from '@godaddy/gasket-auth';


function Layout(props) {
  const { Component, pageProps } = props;

  return (
    <Component { ...pageProps } />
  );
}

const App = createApp({ Layout, initialProps: true });

// Wrap the app with higher-order components
export default [
  withAuthProvider()
].reduce((cmp, hoc) => hoc(cmp), App);

export { reportWebVitals };
