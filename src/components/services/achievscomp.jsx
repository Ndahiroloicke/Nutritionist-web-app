import PropTypes from "prop-types";
const Ach = ({ pic, achievst, paragraph }) => {
  return (
    <div className="bg-[#F6FBE9] m-[20px] -ml-[1px] rounded-3xl sm:w-[630px]">
      <div className="flex flex-row items-center pt-[40px] pl-[50px] mb-[20px]">
        <img
          src={pic}
          alt=""
          className="w-[45px] h-[45px] bg-[#CBEA7B] p-[12px] rounded-xl"
        />
        <h1 className="ml-[17px] font-semibold text-lg">{achievst}</h1>
      </div>
      <div className="mt-[12px] pl-[50px] pr-[20px] pb-[50px]">
        <p className="h-[81px]">{paragraph}</p>
      </div>
    </div>
  );
};
Ach.propTypes = {
  achievst: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default Ach;
