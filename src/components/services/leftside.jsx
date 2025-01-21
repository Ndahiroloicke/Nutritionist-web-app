import PropTypes from "prop-types";

const Leftside = ({ longp, storyt, date, pic }) => {
  return (
    <div className="flex flex-col sm:flex-row  sm:ml-[85px]">
      <div className="flex flex-row">
        <img src={pic} alt="" className="sm:w-[600px] w-[500px] sm:rounded-tr-none sm:rounded-l-2xl rounded-t-2xl" />
        <div className="bg-[#CBEA7B] w-2 h-full"></div>
      </div>
      <div className="bg-[#CBEA7B] w-full h-3 sm:hidden"></div>
      <div className="sm:pt-[70px] bg-[#F6FBE9] w-[500px] sm:w-1/2 px-10 rounded-r-xl">
        <div className="w-fit mx-auto">
        <h1 className="ml-[30px] font-semibold text-2xl mt-4 sm:text-2xl">{storyt}</h1>
        <div className="bg-[#CBEA7B] sm:w-[290px] h-[4px] sm:ml-[30px] rounded-lg mb-[40px]"></div>
        </div>
        <p className="sm:w-[570px] mb-[30px] ">{longp}</p>
        <p className="text-[#333333] font-bold mb-3">{date}</p>
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
