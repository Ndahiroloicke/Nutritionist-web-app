import Proptypes from "prop-types";

const Expert = ({pic,namo,role}) => {
  return (
    <div className="mt-[30px] ml-[100px] -mr-[80px]">
      <img src={pic} alt="" className="h-[342px] w-[290px]" />
      <div className="bg-[#F6FBE9] w-fit rounded-tr-[20px] h-[90px] pt-[20px] pl-[20px] pr-[90px] absolute top-[1120px]">
        <h1 className="font-semibold text-[20px]">{namo}</h1>
        <p className="font-medium text-[16px]">{role}</p>
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
