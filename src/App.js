import React, { useEffect, useRef } from 'react';

import './App.css';
import Layout from "./components/layout/layout";
import BashGenerator from "./components/bashGenerator/bashGenerator";

function App() {
  const myRef = useRef();

  useEffect(() => {
    document.title = 'Bash Generator';
    myRef.current.scrollTop = 0;
  }, []);

  return (
    <div className="App" ref={myRef}>
      <Layout>
        <BashGenerator />
      </Layout>
    </div>
  );
}

export default App;
