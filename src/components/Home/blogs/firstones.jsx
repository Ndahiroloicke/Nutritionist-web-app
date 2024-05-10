import PropTypes from "prop-types";

const Firstblogs = ({ blogtitle, homepic, profile, homep,homl,nam }) => {
  return (
    <div className="px-[24px] py-[24px] h-auto mb-[20px] md:w-[630px] bg-[#F6FBE9] md:mb-[20px] rounded-[10px] md:p-[30px]">
      <img
        src={homepic}
        className="md:w-[570px] rounded-[12px] md:h-[377px] w-[310px]"
        alt="Blog Thumbnail"
      />
      <div>
        <div className="">
          <p className="text-[16px] mt-[40px] mb-[2px]">{blogtitle}</p>
          <h3 className="font-semibold md:text-[22px] md:mb-[20px] w-[310px] text-[20px]">
          {homep}
          </h3>
          <p className="md:mb-[20px] w-[310px]">
            {homl}
          </p>
        </div>
        <div className=" flex  border-[#EEF8D3] border-[0.2px] rounded-[20px] flex-col w-[310px] h-[145px] md:flex-row md:rounded-[10px] items-center py-[16px] px-[16px] bg-[#FAFDF2]">
          <div className="flex flex-row ml-[130px] mb-[10px]">
          <img
            src={profile}
            alt="Author Profile"
            className="w-[50px] h-[50px]"
          />
          <div className="mr-[80px] ml-[14px] w-[325px]">
            <h3 className="text-[18px] font-semibold">{nam}</h3>
            <p className="text-[15px]">23 May 2023 - 5 min read</p>
          </div>
          </div>
          <div>
          <div className="flex flex-row ml-[100px]">
            <li className="list-none mr-[12px]">
              <i className="bx bxs-heart text-[30px]"></i>
            </li>
            <li className="list-none">
              <i className="bx bx-share-alt text-[30px]"></i>
            </li>
          </div>
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
