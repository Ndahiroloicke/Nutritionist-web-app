import PropTypes from "prop-types";

const Pri = ({ prides, img1, img2, img3 }) => {
  return (
    <div className="w-screen sm:flex-shrink-0 flex flex-row items-center justify-between px-[20px] py-[32px]">
      <p className="w-1/2 text-xl min-w-full">{prides}</p>
      <div className="min-w-full">
      <img src={img1} alt="plan 1" className="mx-auto sm:w-[32px] w-[52px]" />
      </div>
      <div className="min-w-full">
      <img src={img2} alt="plan 2" className="mx-auto w-[52px] sm:w-[32px]" />
      </div>
      <div className="min-w-full">
      <img src={img3} alt="plan 3" className="mx-auto w-[52px] sm:w-[32px]" />
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
