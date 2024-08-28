import PopularContainer from '../PopularContainer/PopularContainer'
import './PopularDestinations.css'

export default function PopularDestinations() {
  return (
    <div className='popular'>
        <h1>Popular Destinations</h1>
        <p>Tours dive you the opportunity to see a lot within a time frame</p>
        <PopularContainer title="Mt. Daguldul, Batangas" desc="One
        of the most iconic views in luzen, Mt. Toal booste o          Volcong inside a lake inside an island. it you fancy a closer look,
      the hike up to the crater is a mere 45 minutes, and is easy enough
       for beginners. Guides will assist you most of the way, and you il see
         the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home."
         firstImage="/assets/img/1.jpg"
         secImage="/assets/img/11.jpg"
         reverse=''/>

<PopularContainer title="Mt. Daguldul, Batangas" desc="One
        of the most iconic views in luzen, Mt. Toal booste o          Volcong inside a lake inside an island. it you fancy a closer look,
      the hike up to the crater is a mere 45 minutes, and is easy enough
       for beginners. Guides will assist you most of the way, and you il see
         the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home."
         firstImage="/assets/img/11.jpg"
         secImage="/assets/img/1.jpg"
         reverse='reverse'/>
        
    </div>
  )
}
