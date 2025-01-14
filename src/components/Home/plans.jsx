import Proptypes from "prop-types";
import { Link } from "react-router-dom";

const Plans = ({ planname, plandescription, price }) => {
  return (
    <div className="plan-whole w-full px-6 py-4 mx-2">
      <div className="plan-head w-fit mx-auto">
        <h1 className="text-[30px] font-semibold">{planname}</h1>
        <p>Up to 50% off Yearly plan</p>
        <p>{plandescription}</p>
      </div>
      <div className="choose">
        <p>
          {price}
          <span>/Monthly</span>
        </p>
      </div>
      <Link to="/pricing"> <button className="w-full bg-[#CBEA7B] py-3 font-bold rounded-lg">Choose Plan</button> </Link>
    </div>
  );
};
Plans.propTypes = {
  plandescription: Proptypes.string.isRequired,
  planname: Proptypes.string.isRequired,
  price: Proptypes.string.isRequired,
};

export default Plans;
