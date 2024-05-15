import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Blogsample = ({ blogh, desch, ph, pic, cla, db }) => {
  return (
    <div>
      <div className={cla}>
        <h1 className="pt-[40px] font-semibold text-[22px] pb-[8px]">
          {blogh}
        </h1>
        <div className="w-[200px] h-[3px] bg-[#CBEA7B] "></div>
        <img
          src={pic}
          alt=""
          className=" mt-[50px] ml-[100px] w-[393px] h-[189px]"
        />
        <div className="bg-[#808080] w-[493px] h-[0.5px]"></div>
        <div className="flex flex-row">
          <div>
            <h1 className="w-[427px] h-[60px] font-semibold text-[20px] mb-[8px] mt-[40px]">
              {desch}
            </h1>
            <p className="w-[427px] h-[72px] text-[16px] mb-[24px]">{ph}</p>
          </div>
          <div>
            <Link to={`/blogs/${db}`}>
              <button className="bg-[#CBEA7B] mt-[85px] ml-[24px] font-semibold px-[10px] py-[8px] text-[16px] rounded-[6px]">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Blogsample.propTypes = {
  blogh: PropTypes.string.isRequired,
  db: PropTypes.string.isRequired,
  ph: PropTypes.string.isRequired,
  desch: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  cla: PropTypes.string.isRequired,
};
export default Blogsample;
