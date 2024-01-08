import './App.css';
import Header from "./components/Header.js"
import Hero from "./components/Hero.js"
import About from "./components/About.js"
import Classes from "./components/Classes.js"
import Services from "./components/Services.js"
import Contact from "./components/Contact.js"

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <About/>
      <Classes/>
      <Services/>
      <Contact/>
    </div>

  )
}


export default App;
