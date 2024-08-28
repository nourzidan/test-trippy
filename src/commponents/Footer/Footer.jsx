import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='upfooter'>
            <div>
                <h1>Trippy</h1>
                <p>choose your favourite distination</p>
                </div>
            <div className='footericons'><i className="fa-brands fa-square-facebook"></i><i className="fa-brands fa-square-instagram"></i><i className="fa-brands fa-square-behance"></i><i className="fa-brands fa-twitter"></i></div>
        </div>
        <div className='bottomfooter'>
    <div><h1>Project</h1>
        <ul>
            <li><a href="#">changelog</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">License</a></li>
            <li><a href="">All Version</a></li></ul></div>
    <div><h1>Community</h1><ul>
    <li><a href="#">GitHub</a></li>
    <li><a href="#">Issues</a></li>
    <li><a href="#">Project</a></li>
    <li><a href="#">Twitter</a></li></ul></div>
    <div>
        <h1>Help</h1>
        <ul>
        <li><a href="#">Support</a></li>
        <li><a href="#">Troubleshooting</a></li>
        <li><Link to={'./about'}>Countact Us</Link></li></ul>
    </div>
    <div><h1>Others</h1>
    <ul>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">License</a></li></ul></div>
        </div>
    </div>
  )
}
