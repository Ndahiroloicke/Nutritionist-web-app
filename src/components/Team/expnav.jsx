
import PropTypes from "prop-types"

const Expnav = ({firstnav,secondnav,thirdnav,fouthnav,fithnav,sixthnav}) => {
  return (
    <div>
        <div className="flex flex-row ml-[100px] mr-[90px] px-[50px] py-[20px] bg-[#234338] justify-between items-center text-[#E6E6E6] rounded-b-xl">
            <li className="list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"><a href="">{firstnav}</a></li>
            <li className="list-none"><a href="">{thirdnav}</a></li>
            <li className="list-none"><a href="">{secondnav}</a></li>
            <li className="list-none"><a href="">{fouthnav}</a></li>
            <li className="list-none"><a href="">{fithnav}</a></li>
            <li className="list-none"><a href="">{sixthnav}</a></li>
        </div>
    </div>
  )
}
Expnav.propTypes = {
  firstnav: PropTypes.string.isRequired,
  secondnav: PropTypes.string.isRequired,
  thirdnav: PropTypes.string.isRequired,
  fouthnav: PropTypes.string.isRequired,
  fithnav: PropTypes.string.isRequired,
  sixthnav: PropTypes.string.isRequired,
};

export default Expnav