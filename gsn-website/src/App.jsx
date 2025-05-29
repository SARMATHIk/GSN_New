import React from 'react';
import Navigation from './components/navigation.';
import Hero from "./components/hero";
// import "./styles/navigation.css";
// import "./styles/hero.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <div>
      <Navigation />
       <Hero />
    </div>
  );
}

export default App;
