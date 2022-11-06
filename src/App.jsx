import './App.css';
import { Title } from './components/Title/Title';
import { NavBar } from './components/NavBar/NavBar';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <div>
      <Title />
      <NavBar />
      <AboutMe />
      <Skills />    
    </div>
  )
}

export default App;
