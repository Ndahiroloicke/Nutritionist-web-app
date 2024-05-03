import PropTypes from 'prop-types';
const Homepic = ({abs,cont,h,p,cla}) => {
  return (
    <div>
        <div className="bg-[#F6FBE9] ml-[100px] mr-[90px] rounded-t-xl mt-[100px]">
        <img src={abs} alt=""  className='w-[643px] h-[326px] ml-[275px]'/>
                <img src={cont} alt=""  className='absolute top-[350px] left-[670px]'/>
                <h1 className={cla}>{h}</h1>
                <p className='ml-[80px] mr-[80px] pb-[50px]'>{p}</p>
                </div>
    </div>
  )
}
Homepic.propTypes = {
    abs: PropTypes.string.isRequired,
    cont: PropTypes.string.isRequired,
    h: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    cla: PropTypes.string.isRequired
  };

export default Homepic