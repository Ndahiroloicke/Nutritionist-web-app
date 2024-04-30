import PropTypes from "prop-types";

const Leftside = ({ longp, storyt, date, pic }) => {
  return (
    <div className="flex flex-row m-12 mt-[0px] ml-[85px]">
      <div>
        <img src={pic} alt="" className="w-[600px] rounded-l-xl" />
      </div>
      <div className="bg-[#CBEA7B] w-2"></div>
      <div className="pt-[70px] bg-[#F6FBE9] pr-[20px] rounded-r-xl">
        <h1 className="ml-[30px] font-semibold text-xl">{storyt}</h1>
        <div className="bg-[#CBEA7B] w-[290px] h-[4px] ml-[30px] rounded-lg mb-[40px]"></div>
        <p className="w-[570px] ml-[30px] mb-[30px] ">{longp}</p>
        <p className="ml-[30px]">{date}</p>
      </div>
    </div>
  );
};
Leftside.propTypes = {
  longp: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  storyt: PropTypes.string.isRequired,
};
export default Leftside;
