import bigpic from "../../assets/460e0bda998d66dceb40006674dcff12f383089a.png";
import grids from "../../assets/real grids.png";
import cust from "../../assets/b4c77114-ea34-4c0a-a248-0e3a97c93499.png";
import phonp from "../../assets/small phone pic.png";
import girl from '../../assets/girl.png'
import { Link } from "react-router-dom";

const Bigscreen = () => {
  return (
    <div className="flex flex-col justify-between sm:flex-row">
      <div>
        <img src={girl} alt="" className="w-screen h-[650px]"/>
      </div>
      <div className="big-pic sm:hidden">
        <img src={grids} alt="" className="hidden md:block md:w-[650px]" />
        <img
          src={bigpic}
          alt=""
          className="woman absolute top-[115px] -left-[200px] w-[1000px] hidden md:block"
        />
        <img src={phonp} alt="" className="block w-[100%] md:hidden" />
      </div>
      <div className="sm:hidden block">
        <img
          src={cust}
          className="sm:w-fit sm:mx-auto w-[150px] relative sm:block -mt-[45px] z-10 sm:h-[40px]"
          alt=""
        />
        <p className="mx-[10px] text-2xl sm:text-lg font-semibold sm:flex sm:flex-row  my-[8px]">
          <span className="text-[#468671] font-bold">430+</span><p> Happy customers</p>
        </p>
      </div>
      <div>
        <div>
          <div className="w-fit sm:mt-36 sm:mx-10 mx-auto text-4xl mt-[30px] text-[#1A3129] font-semibold">
            <p>Transform Your ❤️ with</p>
            <div className=" h-2 bg-[#CBEA7B]"></div>
          </div>
          <div className="mx-9">
            <p className="font-bold sm:hidden text-6xl flex flex-col mt-10 mb-11 items-center w-fit ">
              <span>Personalized </span><span>Nutrition Coaching</span>
            </p>
            <p className="font-bold text-6xl flex flex-col mt-10 mb-11 w-fit ">
              <span>Personalized Nutrition</span><span>Coaching</span>
            </p>
            <p className="text-lg sm:w-4/5">
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>
          </div>
          <div className="w-fit mx-auto sm:ml-0 sm:px-10 space-x-4 mt-10">
            <button className="bg-[#CBEA7B] font-bold py-6 px-7 rounded-lg">Get Started</button>
            <button className="bg-[#F6FBE9] border-2 border-[#E5F5BD] rounded-lg font-bold py-6 px-7">Book a Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bigscreen;
