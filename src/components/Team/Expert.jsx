import Proptypes from "prop-types";

const Expert = ({pic,namo,role}) => {
  return (
    <div className="mt-[30px] px-6 sm:ml-[100px] sm:-mr-[80px]">
      <img src={pic} alt="" className=" z-10 w-full sm:h-[342px] sm:w-[290px]" />
      <div className="bg-[#F6FBE9] w-fit -mt-12 opacity-95 z-20 rounded-tr-[20px] px-10 py-5 sm:absolute top-[1120px]">
        <h1 className="font-semibold text-3xl sm:text-[20px]">{namo}</h1>
        <p className="text-3xl sm:text-[16px]">{role}</p>
      </div>
    </div>
  );
};
Expert.propTypes = {
  pic: Proptypes.string.isRequired,
  namo: Proptypes.string.isRequired,
  role: Proptypes.string.isRequired,
};

export default Expert;
