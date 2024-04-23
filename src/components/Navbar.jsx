import headpic from '../assets/nutritionist.png'
const Navbar = () => {
  return (
    <div className='navigation'>
        <div className='nav-header'>
            <img src={headpic}/>
            <h1>Nutritionist</h1>
        </div>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Process</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Blog</a></li>
            </ul>
            </nav>
            <div className='button'>
            <button>Contact Us</button>
            </div>
    </div>
  )
}

export default Navbar