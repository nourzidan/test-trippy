import { Link, NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'

export default function NavBar({logo,navItems,btn}) {

    const navigate = useNavigate();

 function showMenu(){
    const navMenu=document.querySelector(".navMenu")
    const xicon=document.querySelector(".burger .fa-xmark")
    const barsicon=document.querySelector(".burger .fa-bars")
    console.log(xicon)
    navMenu.classList.toggle("active")
    if (xicon.style.display=="none"){
        barsicon.style.display="none"
        xicon.style.display="block"
    }
    else{
         barsicon.style.display="block"
        xicon.style.display="none"
    }
  
 }
  const changeUrl=()=>{
    navigate('/signup')
  }
    return (
   <>
    <nav>
        <h1 className='logo'>{logo}</h1>
        <div className='item'>
            
        <ul>
            <li><NavLink  to={"/"}
            className={({ isActive }) =>
                isActive ? "active" : ""}><i className={navItems[0].icon}></i> {navItems[0].text}</NavLink></li>

<li><NavLink  to={"/about"}
            className={({ isActive }) =>
                isActive ? "active" : ""}><i className={navItems[1].icon}></i> {navItems[1].text}</NavLink></li>

<li><NavLink  to={"/services"}
            className={({ isActive }) =>
                isActive ? "active" : ""}><i className={navItems[2].icon}></i> {navItems[2].text}</NavLink></li>
                <li><NavLink  to={"/contact"}
            className={({ isActive }) =>
                isActive ? "active" : ""}><i className={navItems[3].icon}></i> {navItems[3].text}</NavLink></li>

            {/* {navItems.map((element,index)=>{return(
                <li key={index}><Link to={element.link}><i className={element.icon}></i> {element.text}</Link></li>
            )})} */}
            <li><a href="https://www.google.com" target='_blank'><i className="fa-brands fa-google"></i></a></li>
            {/* this way if we donot broke the props */}
            {/* export default function NavBar(props) with no broke the function shwold be like this */}
            {/* <li><i className={props.navItems[0].icon}></i> {props.navItem[0].text}</li>
            <li><i className={props.navItems[1].icon}></i> {props.navItem[1].text}</li>
            <li><i className={props.navItems[2].icon}></i> {props.navItem[2].text}</li>
            <li><i className={props.navItems[3].icon}></i> {props.navItem[3].text}</li> */}
        </ul>
        <button onClick={changeUrl} >{btn}</button>
        </div>
        <button className='burger' onClick={showMenu}><i className='fas fa-bars'></i><i className='fas fa-times' style={{display:"none"}}></i></button>
    </nav>
    <div className="navMenu ">
    <ul>
            {/* {navItems.map((element,index)=>{return(
                <li key={index}><Link to={element.link}><i className={element.icon}></i> {element.text}</Link></li>
            )})} */}
            <li><NavLink  to={"/"}
            className={({ isActive }) =>
                isActive ? "active" : ""}><i className={navItems[0].icon}></i> {navItems[0].text}</NavLink></li>

<li><NavLink  to={"/about"}
            className={({ isActive }) =>
                isActive ? "active" : ""}><i className={navItems[1].icon}></i> {navItems[1].text}</NavLink></li>

<li><NavLink  to={"/services"}
            className={({ isActive }) =>
                isActive ? "active" : ""}><i className={navItems[2].icon}></i> {navItems[2].text}</NavLink></li>
                <li><NavLink  to={"/contact"}
            className={({ isActive }) =>
                isActive ? "active" : ""}><i className={navItems[3].icon}></i> {navItems[3].text}</NavLink></li>
            {/* this way if we donot broke the props */}
            {/* export default function NavBar(props) with no broke the function shwold be like this */}
            {/* <li><i className={props.navItems[0].icon}></i> {props.navItem[0].text}</li>
            <li><i className={props.navItems[1].icon}></i> {props.navItem[1].text}</li>
            <li><i className={props.navItems[2].icon}></i> {props.navItem[2].text}</li>
            <li><i className={props.navItems[3].icon}></i> {props.navItem[3].text}</li> */}
        </ul>
        <button onClick={changeUrl} >{btn}</button>
    </div>
   </>
  )
}
