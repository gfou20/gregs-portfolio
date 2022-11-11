import './App.css';
import { Title } from './components/Title/Title';
import { NavBar } from './components/NavBar/NavBar';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Skill } from './components/Skill/Skill';

function App() {
  return (
    <div>
      <Title />
      <NavBar />
      <AboutMe />
      <Skill />   
    </div>
  )
}

export default App;
