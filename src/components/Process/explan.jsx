import PropTypes from "prop-types";

const Explan = ({ number, img, heade, parm }) => {
  return (
    <div className="">
      <h1 className="text-[100px] z-10 font-extrabold text-[#468671] -mb-[55px]">
        {number}
      </h1>
      <div className="flex flex-col z-50 relative bg-[#F6FBE9] px-5 py-7 w-full rounded-[10px] sm:h-[228px]">
        <div className="flex flex-row items-center mb-[15px]">
          <img className="w-[54px] h-[54px] mb-[2px]" src={img} alt="" />
          <h1 className="text-[20px] font-semibold ml-[25px]">{heade}</h1>
        </div>
        <div>
          <p className="h-auto sm:w-full">{parm}</p>
        </div>
      </div>
    </div>
  );
};

Explan.propTypes = {
  number: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  heade: PropTypes.string.isRequired,
  parm: PropTypes.string.isRequired,
};

export default Explan;
