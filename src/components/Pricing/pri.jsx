import PropTypes from "prop-types";

const Pri = ({ prides, img1, img2, img3 }) => {
  return (
    <div className="sm:w-full sm:flex-shrink-0 flex flex-row items-center px-[20px] py-[32px]">
      <p className="w-1/3 sm:min-w-96 text-xl min-w-full">{prides}</p>
      <div className="flex flex-row justify-between w-full items-center">
      <div className="sm:min-w-24 min-w-full">
      <img src={img1} alt="plan 1" className="sm:mx-4 mx-auto sm:w-1/3 w-[52px]" />
      </div>
      <div className="sm:min-w-24 min-w-full">
      <img src={img2} alt="plan 2" className="sm:mx-4 mx-auto sm:w-1/3 " />
      </div>
      <div className="sm:min-w-24 min-w-full">
      <img src={img3} alt="plan 3" className="sm:mx-4 mx-auto sm:w-1/3 " />
      </div>
      </div>
    </div>
  );
};
 
Pri.propTypes = {
  prides: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
};

export default Pri;
