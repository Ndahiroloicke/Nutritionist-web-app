import PropTypes from "prop-types";
import { useState } from "react";

const Firstblogs = ({ blogtitle, homepic, profile, homep, homl, nam }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    // Toggle the liked state
    setLiked(!liked);
  };

  return (
    <div className=" w-[630px] bg-[#F6FBE9] mb-[20px] rounded-[10px] p-[30px]">
      <img
        src={homepic}
        className="w-[570px] rounded-[12px] h-[377px]"
        alt="Blog Thumbnail"
      />
      <div>
        <div className="">
          <p className="text-[16px] mt-[40px] mb-[2px]">{blogtitle}</p>
          <h3 className="font-semibold text-[22px] mb-[20px]">{homep}</h3>
          <p className="mb-[20px]">{homl}</p>
        </div>
        <div className=" flex flex-row rounded-[10px] items-center py-[16px] px-[16px] bg-[#FAFDF2]">
          <img
            src={profile}
            alt="Author Profile"
            className="w-[50px] h-[50px]"
          />
          <div className="mr-[80px] ml-[14px] w-[325px]">
            <h3 className="text-[18px] font-semibold">{nam}</h3>
            <p className="text-[15px]">23 May 2023 - 5 min read</p>
          </div>
          <div className="flex flex-row">
            <li
              className="list-none mr-[12px]"
              onClick={handleLikeClick}
            >
              {/* Conditionally render red or black heart icon */}
              <i className={liked ? "bx bxs-heart text-[30px] text-red-600" : "bx bxs-heart text-[30px] text-black"}></i>
            </li>
            <li className="list-none">
              <i className="bx bx-share-alt text-[30px]"></i>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

Firstblogs.propTypes = {
  blogtitle: PropTypes.string.isRequired,
  homepic: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  nam: PropTypes.string.isRequired,
  homl: PropTypes.string.isRequired,
  homep: PropTypes.string.isRequired,
};

export default Firstblogs;
