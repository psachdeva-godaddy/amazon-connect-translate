import React from 'react';
import Pivots from '@ux/pivot';
import Head from '../components/head.jsx';

import Settings from '@ux/icon/settings';
import Wand from '@ux/icon/wand';
import Play from '@ux/icon/play';
import Help from '@ux/icon/help';
import Box from '@ux/box';
import Card from '@ux/card';

import '@ux/icon/settings/index.css';
import '@ux/icon/wand/index.css';
import '@ux/icon/play/index.css';
import '@ux/icon/help/index.css';
import '@ux/pivot/dist/styles.css';
import '@ux/box/dist/styles.css';
import '@ux/card/dist/styles.css';

const pivotList = [
  {
    graphic: (<Settings />),
    href: 'http://gdl.ink/gasket',
    subtitle: 'Learn more about working with Gasket',
    title: 'Learn Gasket'
  },
  {
    graphic: (<Wand />),
    href: 'https://uxcore.uxp.gdcorp.tools/docs/getting-started/uxcore2/gasket',
    subtitle: 'Discover UX components and how to use them',
    title: 'Learn UXCore2'
  },
  {
    graphic: (<Play />),
    href: 'https://nextjs.org/learn',
    subtitle: 'Learn more about Next on Github and in their examples',
    title: 'Learn Next.js'
  },
  {
    graphic: (<Help />),
    href: 'https://godaddy.slack.com/messages/CABCTNQ5P/',
    subtitle: <>Reach out to the {<code>@gasket</code>} team in the {<code>#gasket-support</code>} Slack channel</>,
    title: 'Gasket Support'
  }
];

const pivotGrid = {
  lg: 4,
  md: 6
};

const textAlignStyle = { textAlign: 'center' };

export function IndexPage() {
  return (
    <Box inlinePadding='xl'>
      <Head title='amazon-connect-translate' description='A basic gasket app'/>
      <Card id='hero-card'>
        <Box inlinePadding='xl'>
          <Box inlineAlignChildren='center'>
            <h1>Welcome to Gasket!</h1>
            <p>To get started, edit <code>pages/index.tsx</code> and save to reload.</p>
            <p><a href='https://gasket.dev'>Learn Gasket</a></p>
          </Box>
          <Box inlineAlignChildren='center' style={ textAlignStyle }>
            <p className='description'>Looking for more info about a Gasket package, plugin, or preset?<br />
              You can run <code>gasket docs</code> in your app to learn more.</p>
          </Box>
          <Box blockPadding='lg' inlinePadding='lg'>
            <Pivots pivotList={ pivotList } grid={ pivotGrid } />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default IndexPage;
