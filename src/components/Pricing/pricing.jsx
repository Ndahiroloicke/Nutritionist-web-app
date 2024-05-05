import PropTypes from 'prop-types';
const Pricing = ({p1,p2,p3,p4,p5,planh,fif,fif2,min,price,ulti1}) => {
  return (
    <div className="flex flex-col bg-[#F6FBE9] w-fit h-fit rounded-[10px]">
      <h1 className="font-semibold text-[24px] ml-[40px] mt-[40px]">{planh}</h1>
      <p className="ml-[40px] mb-[30px]">Up to 50% off on Yearly Plan</p>
      <div className="bg-[#E5F5BD] mx-[40px] my-[12px] w-fit rounded-[8px]">
        <div className="px-[20px] w-[300px] py-[16px]">
          {p1}
        </div>
        <div className="bg-black w-auto h-[0.2px]"></div>
        <div className="px-[20px] w-[300px] py-[16px]">
          {p2}
        </div>
        <div className="bg-black w-auto h-[0.2px]"></div>
        <div className="px-[20px] w-[300px] py-[16px]">
          {p3}
        </div>
        <div className="bg-black w-auto h-[0.2px]"></div>
        <div className="px-[20px] w-[300px] py-[16px]">
          {p4}
        </div>
        <div className={fif}></div>
        <div className={fif2}>
          {p5}
        </div>
      </div>
      <div className={min}>{ulti1}</div>
      <div>
        <p>
         <span className="text-[#2C5446] font-bold text-[44px] ml-[40px]">{price}</span><span>/month</span>
        </p>
      </div>
      <button className="bg-[#CBEA7B] mx-[40px] py-[10px] rounded-[6px] font-semibold mb-[30px] mt-[20px]">Choose Plan</button>
    </div>
  );
};

Pricing.propTypes = {
  p1: PropTypes.string.isRequired,
  p2: PropTypes.string.isRequired,
  p3: PropTypes.string.isRequired,
  p4: PropTypes.string.isRequired,
  p5: PropTypes.string.isRequired,
  planh: PropTypes.string.isRequired,
  fif: PropTypes.string.isRequired,
  fif2: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  ulti1: PropTypes.string.isRequired,
};

export default Pricing;
