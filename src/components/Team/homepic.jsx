import PropTypes from "prop-types";
const Homepic = ({ abs, cont, h, p, cla }) => {
  return (
    <div className="px-[100px]">
      <div className="bg-[#F6FBE9] rounded-t-xl mt-[100px] w-full">
        <div className="w-fit mx-auto">
          <img src={abs} alt="" className="w-[643px] h-[326px] " />
          <img
            src={cont}
            alt=""
            className=" relative -top-56 left-72"
          />
          </div>
          <div className="w-fit mx-auto">
          <h1 className="text-[30px] font-bold mb-7">{h}</h1>
          </div>
          <div className="w-fit mx-auto">
          <p className="ml-[80px] mr-[80px] pb-[50px]">{p}</p>
          </div>
      </div>
    </div>
  );
};
Homepic.propTypes = {
  abs: PropTypes.string.isRequired,
  cont: PropTypes.string.isRequired,
  h: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  cla: PropTypes.string.isRequired,
};

export default Homepic;
