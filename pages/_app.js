import '../styles/global.scss';
import '../src/App.css';
import { createApp, reportWebVitals ,withPageEnhancers} from '@godaddy/gasket-next';
import { withAuthProvider, withAuthRequired } from '@godaddy/gasket-auth';
import { withGasketDataProvider } from '@gasket/nextjs';
import '../src/components/chatroom.css';
import '../src/components/ccp.css';
import '../src/App.css';
import gasket from "../gasket";

function Layout(props) {
  const { Component, pageProps } = props;

  return (
    <Component { ...pageProps } />
  );
}

const App = createApp({ Layout, initialProps: true });

const authRequired = withAuthRequired({
  realm: "jomax",
  gasket,
});

// Wrap the app with higher-order components
export default [withPageEnhancers([
  authRequired
]), withAuthProvider(), withGasketDataProvider(gasket)].reduce(
  (cmp, hoc) => hoc(cmp),
  App
);

export { reportWebVitals };
