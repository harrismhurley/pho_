import { Link } from 'react-router-dom';

import './index.css';

export default function Header() {
  return (
    <header>

      <div className='header_container'>
        <nav className='header_nav'>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/about" >About</Link></li>
            <li><Link to="/register" >Register</Link></li>
            <li><Link to="/gallery" >Gallery</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>
        </nav>
        <h1 className='header_text'>pho da</h1>
      </div>
    </header>
  )
}