import Navbar from "../Home/Navbar";
import Uppertab from "../Home/Uppertab";
import realgrids from "../../assets/real grids.png";
import Single from "./background";
import pic from "../../assets/nutritionistlogo-removebg.png";
import Longtext from "./longtext";
import Leftside from "./leftside";
import Reftside from "./rightside";
// import Navbar from "../Home/Navbar";

function Servicehome() {
  return (
    <div>
      <Uppertab />
      <Navbar />
      <div className="flex flex-row mt-[40px] ml-[25px]">
        <div className="flex flex-row ml-[50px]">
          <div>
            <Single />
            <Single />
          </div>
          <div>
            <Single />
            <Single />
          </div>
        </div>
        <div>
          <img
            src={realgrids}
            alt=""
            className="h-[370px] w-[500px] rounded-lg"
          />
          <img src={pic} alt="" className="h-[380px]  -mt-[380px] ml-[50px]" />
        </div>
        <div className="flex flex-row ml-[12px]">
          <div>
            <Single />
            <Single />
          </div>
          <div>
            <Single />
            <Single />
          </div>
        </div>
      </div>
      <Longtext />
      <div className="ml-[240px]">
        <h1 className="m-[30px] pl-[350px] text-3xl font-semibold">Our Story</h1>
        <p>
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified <span className="block ml-[150px]">nutritionists
          are here to guide you on your weight loss journey.</span>
        </p>
        </div>
        <Leftside/>
        <Reftside/>
    </div>
  );
}

export default Servicehome;
