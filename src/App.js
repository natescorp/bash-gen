import React, { Suspense, useEffect, useRef } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './App.css';

import Layout from "./components/layout/layout";

const HomePage = React.lazy(() => import("./components/homePage/homePage"));
const BashGenerator = React.lazy(() => import("./components/bashGenerator/bashGenerator"));

function App() {
  const myRef = useRef();

  useEffect(() => {
    document.title = 'Bash Generator';
    myRef.current.scrollTop = 0;
  }, []);

  return (
    <div className="App" ref={myRef}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Suspense fallback={<div>Загрузка...</div>}>
              <Route exact path='/' >
                <HomePage />
              </Route>
              <Route exact path='/bash'>
                <BashGenerator />
              </Route>
              <Route>
                <Typography variant="h3" gutterBottom>Not Found</Typography>
              </Route>
            </Suspense>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
