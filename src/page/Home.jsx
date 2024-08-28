import Footer from "../commponents/Footer/Footer"
import Hero from "../commponents/Hero/Hero"
import NavBar from "../commponents/NavBar/NavBar"
import OurTrip from "../commponents/OurTrip/OurTrip"
import PopularDestinations from "../commponents/PopularDestinations/PopularDestinations"


export default function Home() {
  
  
  return (
    <>   
      <Hero img="/test-trippy/assets/img/vip-2-2048x1365.jpeg" title='Your Journey Your Story' desc='Choose Your Favourit Destination' btn={{show:true , content:"Travel Now"}}/>
      <PopularDestinations/> 
      <OurTrip/>
      </>
  )
}
