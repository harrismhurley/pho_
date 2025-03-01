import { Link } from 'react-router-dom';
import './index.css';

export default function Footer() {
  return (
    <div className='footer_container'>
      <div className="footer_top">
        <p>Copyright notice</p>
        <p>Privacy policy</p>
        <p>Terms of use</p>
      </div>

      <div className="footer_bottom">
        <div className="footer_column footer_side">
          <h4>Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <p>back to top</p>
        </div>

        <div className="footer_column footer_center">
          <h4>quick links</h4>
          <p>signature(align bottom)</p>
        </div>

        <div className="footer_column footer_side">
          <h4>quick contact</h4>
          <p>socials</p>
        </div>
      </div>
    </div>
  )
}
