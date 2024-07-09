import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/skills" element={<Skills/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
