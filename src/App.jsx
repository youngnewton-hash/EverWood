import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />} ></Route>
         <Route path='/' element={<Shop />} ></Route>
         <Route path='/' element={<About />} ></Route>
         
      </Routes>
    </BrowserRouter>
  )
}