import PropTypes from "prop-types";

const Explan = ({ number, img, heade, parm }) => {
  return (
    <div className="relative pl-[20px]">
      <h1 className="text-[100px] font-extrabold text-[#468671] -mb-[60px]">
        {number}
      </h1>
      <div className="flex flex-col bg-[#F6FBE9] w-fit p-[40px] rounded-[10px] h-[228px]">
        <div className="flex flex-row items-center mb-[15px]">
          <img className="w-[54px] h-[54px] mb-[2px]" src={img} alt="" />
          <h1 className="text-[20px] font-semibold ml-[25px]">{heade}</h1>
        </div>
        <div>
          <p className="h-auto w-[524px]">{parm}</p>
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
