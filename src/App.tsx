import './styles/main.css'

import { OpenToWorkCard } from './components/OpenToWorkCard'
import { Skills } from './components/Skills';
import { Projects } from './components/Projects/Projects';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';

function App() {
  const openToWork = false;
  
  return (
    <div className="sm:mx-auto flex flex-col sm:items-center items-center justify-center my-10">
      <Header />
      <Skills />
      { openToWork ? <OpenToWorkCard /> : <></> }

      <About />
      <Projects />

      <Footer />
    </div>
  )
}

export default App
