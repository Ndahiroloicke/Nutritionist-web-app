
import tick from "../../assets/tick.png"
import cross from "../../assets/cross.png"
import Pri from "./pri"

const Pricingdesc = () => {
  return (
    <div className='bg-[#F6FBE9] mx-[80px] mt-12 rounded-[12px]'>
        <div className='px-[50px] py-[80px]'>
        <div className='flex flex-row justify-between'>
            <p className='bg-[#234338] text-white py-[16px] px-[24px] text-[20px] font-medium w-[392px] h-[62px] rounded-[8px]'>Features</p>
            <div className="w-[2px] bg-black"></div>
            <p className='bg-[#234338] text-white py-[16px] px-[24px] rounded-[8px] text-[20px] font-medium w-[128px]'>Free Plan</p>
            <div className=" w-[2px] bg-black"></div>
            <p className='bg-[#234338] text-[white] py-[16px] px-[24px] rounded-[8px] text-[20px] font-medium w-[128px]'>Free Plan</p>
        </div>
       <Pri prides="Personalized Nutrition Plan" img1={tick} img2={tick}/>
       <Pri prides="Mobile App Access" img1={tick} img2={tick}/>
       <Pri prides="Email Support" img1={tick} img2={tick}/>
       <Pri prides="One -on One Video Consultations" img1={cross} img2={tick}/>
       <Pri prides="Recipe Recommendations and Meal Planning" img1={cross} img2={tick}/>
       <Pri prides="Priority Support" img1={cross} img2={tick}/>
       <Pri prides="Educational Resources and Guides" img1={cross} img2={tick}/>
       <Pri prides="Advanced Progress Tracking Tools" img1={cross} img2={cross}/>
       <Pri prides="Customized Meal Plans and Recipe Suggestions" img1={cross} img2={cross}/>
       <Pri prides="Phone Support" img1={cross} img2={cross}/>
        </div>
    </div>
  )
}

export default Pricingdesc