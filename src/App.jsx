import React, { lazy, Suspense, useEffect, useRef  } from 'react';

import './App.css';
const Layout = lazy(() => import('./components/layout/layout'));
const BashGenerator = React.lazy(() => import('./components/bashGenerator/bashGenerator'));
// import BiosTemplate from "./components/BiosTemplate";

const App = () => {
  const myRef = useRef();

  useEffect(() => {
    document.title = 'Bash Generator';
    myRef.current.scrollTop = 0;
  }, []);

  return (
    <div className="App" ref={myRef}>
      <Suspense fallback={<h1>Loading data...</h1>}>
        <Layout>
          <Suspense fallback={<h1>Loading data...</h1>}>
            <BashGenerator />
          </Suspense>
        </Layout>
      </Suspense>
    </div>
  );
}

export default App;
