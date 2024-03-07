import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
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
          </Routes>
      </div>
        </Router>
    </>
  )
}

export default App
