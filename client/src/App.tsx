import { AppBar, Toolbar } from '@material-ui/core';
import React from 'react';
import Banner from './layout/Banner';

function App() {
  return (
    <React.Fragment>
      <Banner />
      <AppBar position="sticky">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <div style={{width: '100%', height: '200vh'}}>Hello this is me</div>
    </React.Fragment>
  );
}

export default App;
