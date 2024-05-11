
import PropTypes from "prop-types";

const Butts = ({ setYearlyPricing,yearlyPricing }) => {
  return (
    <div>
      <div className="twobutts w-[215px]">
        <button className={yearlyPricing ? "active bg-white text-black" : "bg-[#234338] text-white"} onClick={()=>setYearlyPricing(false)}>Monthly</button>
        <button className={yearlyPricing ? "inactive bg-[#234338] text-white" : "bg-white"} onClick={() => setYearlyPricing(true)}>Yearly</button>
      </div>
    </div>
  );
};
Butts.propTypes = {
  yearlyPricing: PropTypes.string.isRequired,
  setYearlyPricing: PropTypes.string.isRequired,
};
export default Butts;
