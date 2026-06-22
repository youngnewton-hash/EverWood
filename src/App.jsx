import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ChooseUs from './components/ChooseUs'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import SocialProof from './components/socialProof'
import Footer from './components/footer'
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