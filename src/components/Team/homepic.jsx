import PropTypes from "prop-types";
const Homepic = ({ abs, cont, h, p, cla }) => {
  return (
    <div className="px-6 sm:px-[100px]">
      <div className="bg-[#F6FBE9] sm:px-[200px] pb-16 rounded-t-xl w-full mt-[100px]">
        <div className="">
          <img src={abs} alt="" className="sm:w-fit mx-auto" />
          <img
            src={cont}
            alt=""
            className="relative bottom-44 w-fit mx-auto"
          />
          </div>
          <div className="w-full">
          <h1 className="text-[30px] w-80 sm:w-fit mx-auto font-bold mb-7">{h}</h1>
          </div>
          <div className="w-96 sm:w-full mx-auto">
          <p className="">{p}</p>
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
