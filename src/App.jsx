import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import './App.css'

function App() {

  return (
    <>
    <Router>
    <Navbar />
      <div className='main '>
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/education' element={<Education/>} />
            <Route path='/experience' element={<Experience/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
          </Routes>
      </div>
        </Router>
    </>
  )
}

export default App
