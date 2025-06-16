import React from "react";
import Head from "../../components/head.jsx";
import Ccp from "./ccp";
import "amazon-connect-streams"; // This will make the `connect` available in the current context.
import "amazon-connect-chatjs";

function AppUI() {
  return (
    <div className="App">
      <Head title="Amazon Connect Chat Translate" description="Amazon Connect Chat with real-time translation" />
      {/* Add more UI elements here as needed */}
      <Ccp />
    </div>
  );
}

export default AppUI; 