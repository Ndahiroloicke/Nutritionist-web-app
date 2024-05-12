import Proptypes from "prop-types";
import pic from "../../assets/45f09264-8b59-4a1a-b144-e7e5ce462478.png";
const Overview = ({ paragraph, username, userpic }) => {
  return (
    <>
      <div className="bg-[#FAFDF2] max-w-[413.33px] rounded-[10px] border-[#EEF8D3] border-[0.5px] h-[320px]">
        <div className="px-[30px] pb-[30px] pt-[36px]">
          <img src={pic} className="w-[28px] h-[22px] mb-[46px]" />
          <p>{paragraph}</p>
        </div>
        <div className="flex flex-row items-center bg-[#F6FBE9] py-[20px] px-[30px]">
          <img src={userpic} alt="" />
          <h3 className="ml-[10px]">{username}</h3>
        </div>
      </div>
    </>
  );
};

Overview.propTypes = {
  paragraph: Proptypes.string.isRequired,
  username: Proptypes.string.isRequired,
  userpic: Proptypes.string.isRequired,
};

export default Overview;
