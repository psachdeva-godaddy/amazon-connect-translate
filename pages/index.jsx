import React from 'react';
import Head from '../components/head.jsx';
import Ccp from '../src/components/ccp';


function IndexPage() {
  return (
    <div className="App">
      <Head title='Amazon Connect Chat Translate' description='Amazon Connect Chat with real-time translation'/>
      <Ccp />
    </div>
  );
}

export default IndexPage;
