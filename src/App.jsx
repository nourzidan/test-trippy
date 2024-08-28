import { Route, Routes } from 'react-router-dom'
import Footer from './commponents/Footer/Footer'
import Hero from './commponents/Hero/Hero'
import NavBar from './commponents/NavBar/NavBar'
import OurTrip from './commponents/OurTrip/OurTrip'
import PopularDestinations from './commponents/PopularDestinations/PopularDestinations'
import Home from './page/Home'
import About from './page/About'
import Services from './page/Services'
import Contact from './page/Contact'
import Signup from './page/Signup'
import Product from './page/Product'

function App() {
  const items=[{icon:"fa-solid fa-house-user", text:"Home",link:"/"},
    {icon:"fa-solid fa-circle-info", text:"About",link:"/about"},
    {icon:"fa-solid fa-briefcase", text:"Service",link:"/services"},
    {icon:"fa-solid fa-address-book", text:"Contact",link:"/contact"}
  ]

  return (
    <>
  <NavBar logo='Trippy' navItems={items} btn="Sing Up"/>
      {/* <NavBar logo='Trippy' navItems={items} btn="Sing Up"/>
      <Hero img="/assets/img/vip-2-2048x1365.jpeg" title='Your Journey Your Story' desc='Choose Your Favourit Destination' btn={{show:true , content:"Travel Now"}}/>
      <PopularDestinations/> 
      <OurTrip/>
      <Footer/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product/:id/:test' element={<Product/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
