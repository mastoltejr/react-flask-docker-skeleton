import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import Banner from './layout/Banner';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import axios from 'axios';

function App() {

  const [text, setText] = React.useState('empty');

  React.useEffect(() => {
    console.log('Sending Request');
    axios.get('/api/text').then(res => {
      console.log(res);
      setText(res.data)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Link className="App-link" to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link className="App-link" to="/page2">Page2</Link>
          </div>
          <Switch>
            <Route exact path="/">
            <React.Fragment>
              <Banner />
              <AppBar position="sticky">
                <Toolbar>{/* content */}</Toolbar>
              </AppBar>
              <div style={{width: '100%', height: '200vh'}}>Hello this is me
              <p>The current text is {text}.</p></div>
            </React.Fragment>
            </Route>
            <Route path="/page2">
                <p>This is page 2!</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );

}

export default App;
