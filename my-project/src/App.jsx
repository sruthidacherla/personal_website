
import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from './components/hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  return (
    <div>
        <NavigationBar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
    </div>
  )
}

export default App;
