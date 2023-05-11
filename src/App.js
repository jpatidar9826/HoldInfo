import React, { useState } from 'react';

import NavPanel from './components/NavPanel';
import Home from './pages/Home';

import './App.css';

const App = () => {
  const [themeDark, setThemeDark] = useState(true); 
  const themeChangeHandler = () => {
    setThemeDark(!themeDark);
  }
  return(
    <div className={themeDark ? 'dark-container' : 'light-container'}>
      <NavPanel switchHandler={themeChangeHandler} themeDark={themeDark}/>
      <Home themeDark={themeDark}/>
      <div className='Footer'>
        <p>Copyright © 2023 HoldInfo.com</p>
        <p>Support</p>
      </div>
    </div>
  );
}

export default App;
