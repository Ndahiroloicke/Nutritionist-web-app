
import tick from "../../assets/tick.png"
import cross from "../../assets/cross.png"
import Pri from "./pri"

const Pricingdesc = () => {
  return (
    <div className='bg-[#F6FBE9] mx-[80px] h-[1150px] mt-12 rounded-[12px]'>
        <div className='px-[60px] py-[80px]'>
        <div className='flex flex-row justify-between'>
            <p className='bg-[#234338] text-white py-[16px] px-[24px] text-[20px] font-medium w-[392px] h-[62px] rounded-[8px]'>Features</p>
            <div className="w-[0.5px] bg-black h-[1040px] absolute left-[580px]"></div>
            <p className='bg-[#234338] h-[64px] text-white py-[16px] px-[24px] rounded-[8px] text-[20px] font-medium w-[128px]'>Free Plan</p>
            <div className=" w-[0.5px] h-[1040px] absolute bg-black left-[850px]"></div>
            <p className='bg-[#234338] h-[64px] text-[white] py-[16px] px-[24px] rounded-[8px] text-[20px] font-medium w-[128px]'>Free Plan</p>
            <div className=" w-[0.5px] h-[1040px] absolute bg-black left-[1100px]"></div>
            <p className='bg-[#234338] text-[white] h-[64px] py-[16px] px-[24px] rounded-[8px] text-[20px] font-medium w-[128px]'>Free Plan</p>
        </div>
       <Pri prides="Personalized Nutrition Plan" img3={tick} img1={tick} img2={tick}/>
       <div className="w-[1145px] bg-black h-[0.5px]"></div>
       <Pri prides="Mobile App Access" img3={tick} img1={tick} img2={tick}/>
       <div className="w-[1145px] bg-black h-[0.5px]"></div>
       <Pri prides="Email Support" img3={tick} img1={tick} img2={tick}/>
       <div className="w-[1145px] bg-black h-[0.5px]"></div>
       <Pri prides="One -on One Video Consultations" img3={tick} img1={cross} img2={tick}/>
       <div className="w-[1145px] bg-black h-[0.5px]"></div>
       <Pri prides="Recipe Recommendations and Meal Planning"img3={tick} img1={cross} img2={tick}/>
       <div className="w-[1145px] bg-black h-[0.5px]"></div>
       <Pri prides="Priority Support" img3={tick} img1={cross} img2={tick}/>
       <div className="w-[1145px] bg-black h-[0.5px]"></div>
       <Pri prides="Educational Resources and Guides" img3={tick} img1={cross} img2={tick}/>
       <div className="w-[1145px] bg-black h-[0.5px]"></div>
       <Pri prides="Advanced Progress Tracking Tools" img3={tick} img1={cross} img2={cross}/>
       <div className="w-[1145px] bg-black h-[0.5px]"></div>
       <Pri prides="Customized Meal Plans and Recipe Suggestions" img3={tick} img1={cross} img2={cross}/>
       <div className="w-[1145px] bg-black h-[0.5px]"></div>
       <Pri prides="Phone Support" img3={tick} img1={cross} img2={cross}/>
        </div>
    </div>
  )
}

export default Pricingdesc