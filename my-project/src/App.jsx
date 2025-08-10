
import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from './components/hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {

  return (
    <div>
        <NavigationBar />
        <Hero />
        <About />
        <Projects />
    </div>
  )
}

export default App;
