import { makeGasket } from '@gasket/core';
import pluginCommand from '@gasket/plugin-command';
import pluginDynamicPlugins from '@gasket/plugin-dynamic-plugins';
import pluginLogger from '@gasket/plugin-logger';
import pluginMetadata from '@gasket/plugin-metadata';
import pluginData from '@gasket/plugin-data';
import pluginWebpack from '@gasket/plugin-webpack';
import pluginWinston from '@gasket/plugin-winston';
import pluginAuth from '@godaddy/gasket-plugin-auth';
import pluginSecurity from '@godaddy/gasket-plugin-security';
import pluginTraffic from '@godaddy/gasket-plugin-traffic';
import pluginVisitor from '@godaddy/gasket-plugin-visitor';
import pluginDevCerts from '@godaddy/gasket-plugin-dev-certs';
import pluginSelfCerts from '@godaddy/gasket-plugin-self-certs';
import pluginHttpsProxy from '@gasket/plugin-https-proxy';
import pluginNextjs from '@gasket/plugin-nextjs';
import pluginUxp from '@godaddy/gasket-plugin-uxp';
import pluginOtel from '@godaddy/gasket-plugin-otel';
import gasketData from './gasket-data.js';

export default makeGasket({
  environments: {
    'local.analyze': {
      dynamicPlugins: [
        '@gasket/plugin-analyze'
      ]
    }
  },
  plugins: [
    pluginCommand,
    pluginDynamicPlugins,
    pluginLogger,
    pluginMetadata,
    pluginData,
    pluginWebpack,
    pluginWinston,
    pluginAuth,
    pluginSecurity,
    pluginTraffic,
    pluginVisitor,
    pluginDevCerts,
    pluginSelfCerts,
    pluginHttpsProxy,
    pluginNextjs,
    pluginUxp,
    pluginOtel
  ],
  httpsProxy: {
    protocol: 'https',
    hostname: 'local.gasket.dev-godaddy.com',
    port: 8443,
    xfwd: true,
    ws: true,
    target: {
      host: 'localhost',
      port: 3000
    }
  },
  uxp: {
    useMintl: true
  },
  presentationCentral: {
    params: {
      app: 'amazon-connect-translate',
      manifest: 'no-header'
    }
  },
  data: gasketData
});
