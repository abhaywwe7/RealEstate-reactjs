import React from 'react';
import Header from './Components/Header';
// import Navbar from './Components/Navbar';
import Howitwork from './Components/Howitwork';
import About from './Components/About';
import Agent from './Components/Agent';
import Properties from './Components/Properties';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      <Howitwork />
      <About />
      <Agent />
      <Properties />
      <Contact />
    </div>
  );
}

export default App;
