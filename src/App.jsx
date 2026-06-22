import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ChooseUs from './components/ChooseUs'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import './index.css'


function App() {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <ChooseUs/>
      <ProductCard/>
      <ProductList/>
      <SocialProof/>
      <Footer/>
    </div>
  )
}

export default App