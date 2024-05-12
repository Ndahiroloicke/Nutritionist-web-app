import Proptypes from "prop-types";

const Plans = ({ planname, plandescription, price }) => {
  return (
    <div className="plan-whole">
      <div className="plan-head">
        <h1 className="text-[30px] font-semibold">{planname}</h1>
        <p>Up to 50% off Yearly plan</p>
        <p className="desc">{plandescription}</p>
      </div>
      <div className="choose">
        <p>
          {price}
          <span>/Monthly</span>
        </p>
        <button>Choose Plan</button>
      </div>
    </div>
  );
};
Plans.propTypes = {
  plandescription: Proptypes.string.isRequired,
  planname: Proptypes.string.isRequired,
  price: Proptypes.string.isRequired,
};

export default Plans;
