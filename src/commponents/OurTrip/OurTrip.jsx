
import'./OurTrip.css'
import OurTripCard from './OurTripCard/OurTripCard'
export default function OurTrip() {
  return (< >
  <h1 className='ourtriptitle' >Our Trip</h1>
    <div className="ourtrip" id='our-t'>
        <OurTripCard image='/assets/img/indonesia.jpg'
        title='Trip in Indonesia'
        desc='Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17.000 isiands, including Sumatra, Java, Sulawesi. and parts of Borneo and New Guinea'/>
        <OurTripCard image='/assets/img/malaysia.jpg'
        title='Trip in Malaysia'
        desc="
        Malaysia, is a country in Southeast Asia The federal constitutionalmonarchy consists of thirteen states and three federal territories, separated by the south China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysio"/>
        <OurTripCard image='/assets/img/france.jpg'
        title='Trip in France'
        desc="France, officially the French Republic is a transcontinental country predominanty located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and indian Oceans."/>
    </div>
    </>
  )
}
