import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Footer from './Components/Footer';
import VolunteerExperience from './Components/Experience';
import Layout from './Components/Layout';

function App() {
  return (
    <div>
        <Layout/>
        <Home/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <VolunteerExperience/>
        <Footer/>
    </div>
  );
}

export default App;
