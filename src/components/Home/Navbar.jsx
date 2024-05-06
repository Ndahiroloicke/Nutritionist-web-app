import headpic from '../../assets/nutritionist.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navigation'>
        <div className='nav-header'>
            <img src={headpic}/>
            <h1>Nutritionist</h1>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/process">Process</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/blog">Blogs</Link></li>
            </ul>
            </nav>
            <div className='button'>
            <Link to="/contactus"><button>Contact Us</button></Link>
            </div>
    </div>
  )
}

export default Navbar