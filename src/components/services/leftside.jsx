import PropTypes from "prop-types";

const Leftside = ({ longp, storyt, date, pic }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:m-12 sm:ml-[85px]">
      <div>
        <img src={pic} alt="" className="sm:w-[600px] w-[500px] rounded-t-2xl sm:rounded-l-xl" />
      </div>
      <div className="bg-[#CBEA7B] w-full h-3"></div>
      <div className="sm:pt-[70px] bg-[#F6FBE9] w-[500px] px-10 sm:pr-[20px] rounded-r-xl">
        <div className="w-fit mx-auto">
        <h1 className="ml-[30px] font-semibold text-2xl mt-4 sm:text-xl">{storyt}</h1>
        <div className="bg-[#CBEA7B] sm:w-[290px] h-[4px] sm:ml-[30px] rounded-lg mb-[40px]"></div>
        </div>
        <p className="sm:w-[570px] sm:ml-[30px] mb-[30px] ">{longp}</p>
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
