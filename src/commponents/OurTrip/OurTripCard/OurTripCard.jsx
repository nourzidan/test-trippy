import './OurTripCard.css'

export default function OurTripCard({image ,title,desc}) {
  return (<>
    <div className='ourtripcard'>
    
    <div className='imagediv'><img src={image} alt="" />
    </div>
    <h3 >{title}</h3>
    <p>{desc}</p>
    </div>
   
    </>)
}
