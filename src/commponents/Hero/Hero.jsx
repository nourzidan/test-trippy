import { HashLink } from 'react-router-hash-link'
import './Hero.css'

export default function Hero({img,title,desc,btn}) {
  return (
    <div className="hero">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{desc}</p>
        {/* <button style={{display:(btn?.show)? "bolck" : "none"}}>{btn?.content}</button> */}
      <HashLink to={"/#our-t"} smooth><button style={{display:(btn?.show)? "bolck" : "none"}}>{btn?.content}</button></HashLink>
    </div>
  )
}
