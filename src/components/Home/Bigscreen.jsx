import bigpic from "../../assets/460e0bda998d66dceb40006674dcff12f383089a.png";
import grids from "../../assets/real grids.png";
import Customers from "./Customers";

const Bigscreen = () => {
  return (
    <div className="Bigscreen">
      <div className="big-pic">
        <img src={grids} alt="" />
        <img src={bigpic} alt="" className="woman absolute top-[145px]" />
      </div>
      <div className="sider-text">
        <div>
          <h3 className="text-3xl font-semibold">Transform Your ❤️ Health with</h3>
          <div className="line"></div>
        </div>
        <h1>
          Personalized Nutrition <br /> Coaching
        </h1>
        <p>
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified nutritionists
          are here to guide you on your weight loss journey, providing
          customized plans and ongoing support. Start your transformation today
          and experience the power of personalized nutrition coaching.
        </p>
        <button className="main-button">Get Started today</button>
        <button className="main-button">Book a Demo</button>
        <div className="locate">
          <Customers className="Locate-customers" />
        </div>
      </div>
    </div>
  );
};

export default Bigscreen;
