import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Header currentUser='Pakorn' isLoggedIn />
      <div>Hello Pakorn Worakarn 14</div>
      <Footer/>
    </div>
  );
}

export default App;
