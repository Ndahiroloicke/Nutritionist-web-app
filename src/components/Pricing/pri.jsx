import Proptypes from "prop-types"


const Pri = ({prides,img1,img2,img3}) => {
  return (
    <div>
         <div className="flex flex-row justify-between items-center py-[32px] px-[20px]">
            <p className="w-[320px]">{prides}</p>
            <img src={img1} alt="" className="w-[32px]"/>
            <img src={img2} alt=""  className=" w-[32px]"/>
            <img src={img3} alt=""  className="w-[32px] mr-[20px]"/>
        </div>
    </div>
  )
}
Pri.propTypes = {
  prides:Proptypes.string.isRequired,
  img1:Proptypes.string.isRequired,
  img3:Proptypes.string.isRequired,
  img2:Proptypes.string.isRequired
}
export default Pri