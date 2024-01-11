import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header.js"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Classes from "./components/Classes.js"
import Services from "./components/Services.js"
import Contact from "./components/Contact.js"
import Admin from "./pages/Admin.js"

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Classes />
      <Services />
      <Contact />
      {/* Add other components as needed */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/admin"  element={<Admin />} />
      </Routes>
    </Router>
  );
};




export default App;
