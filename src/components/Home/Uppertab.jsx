import pic from "../../../public/assets/27add8c3-f413-4c28-b68f-e37e987ece2e.png";
import arrow from "../../../public/assets/0b2121be-db92-4638-91ee-d13867bcfbd7.png";
// import shadesleft from "../assets/718c5062-c207-428c-891b-703748438927.png";

const Uppertab = () => {
  return (
    <div className="upper-tab w-[100%] md:w-[100%]">
              <div className="upper-div">
               <img src={pic} className="unkown w-[17.08px] h-[17.08px] md:w-[]" />
                <p className="text-[14px] md:text-[16px]">Join Our Personalised Nutrition Demo for free </p>
          <img src={arrow} className="arrow" />

      </div>
    </div>
  );
};

export default Uppertab;
