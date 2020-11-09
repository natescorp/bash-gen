import React, { useEffect, useRef, Suspense  } from 'react';

import './App.css';
const Layout = React.lazy(() => import('./components/layout/layout'));
const BashGenerator = React.lazy(() => import('./components/bashGenerator/bashGenerator'));

function App() {
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
