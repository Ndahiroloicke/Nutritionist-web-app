import Navbar from "../Home/Navbar"
import Uppertab from "../Home/Uppertab"
import Foot from "../Home/footer"
import Proud from "../services/proud"
import Teamexp from "./teamexpert"

const Teamhome = () => {
  return (
    <div>
    <Uppertab/>
    <Navbar/>
    <Teamexp/>
    <Proud/>
    <Foot/>
    </div>
  )
}

export default Teamhome