import Navbar from "../Home/Navbar"
import Uppertab from "../Home/Uppertab"
import Foot from "../Home/footer"
import Proud from "../services/proud"
import Teamexp from "./teamexpert"
import usefetch from "../blogspage/usefetch";

const Teamhome = () => {
  
const {employees} =  usefetch("http://localhost:7000/Employees")
  return (
    <div>
    <Uppertab/>
    <Navbar/>
    <Teamexp employee={employees}/>
    <Proud/>
    <Foot/>
    </div>
  )
}

export default Teamhome