import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/contact' element={ <Contact /> }/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
