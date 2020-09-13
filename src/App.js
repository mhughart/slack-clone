import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className='App'>
      <h1>Slack-Clone Build</h1>

      <Header />
      <div className='app__body'>
        <Sidebar />
      </div>

      {/* React-Router -> Chat Screem */}
    </div>
  );
}

export default App;
