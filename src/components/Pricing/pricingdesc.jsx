import tick from "../../../public/assets/tick.png";
import cross from "../../../public/assets/cross.png";
import Pri from "./pri";

const Pricingdesc = () => {
  return (
    <div className="bg-[#F6FBE9] ml-6 sm:mx-[80px] h-fit sm:h-[1150px] mt-12 rounded-[12px]">
      <div className="hidden sm:block">
        <div className="px-[60px] py-[80px]">
          <div className="flex flex-row justify-between w-full space-x-4">
            <p className="bg-[#234338] text-white py-[16px] px-[24px] text-[20px] font-medium w-1/3 h-[62px] rounded-[8px]">
              Features
            </p>
            <p className="bg-[#234338] h-[64px] text-white py-[16px] px-[24px] rounded-[8px] text-[20px] font-medium w-1/3">
              Free Plan
            </p>
            <p className="bg-[#234338] h-[64px] text-[white] py-[16px] px-[24px] rounded-[8px] text-[20px] font-medium w-1/3">
              premium Plan
            </p>
            <p className="bg-[#234338] text-[white] h-[64px] py-[16px] px-[24px] rounded-[8px] text-[20px] font-medium w-1/3">
              Ultimate Plan
            </p>
          </div>
          <Pri
            prides="Personalized Nutrition Plan"
            img3={tick}
            img1={tick}
            img2={tick}
          />
          <div className="w-full bg-black h-[0.5px]"></div>
          <Pri prides="Mobile App Access" img3={tick} img1={tick} img2={tick} />
          <div className="w-full bg-black h-[0.5px]"></div>
          <Pri prides="Email Support" img3={tick} img1={tick} img2={tick} />
          <div className="w-full bg-black h-[0.5px]"></div>
          <Pri
            prides="One -on One Video Consultations"
            img3={tick}
            img1={cross}
            img2={tick}
          />
          <div className="w-full bg-black h-[0.5px]"></div>
          <Pri
            prides="Recipe Recommendations and Meal Planning"
            img3={tick}
            img1={cross}
            img2={tick}
          />
          <div className="w-full bg-black h-[0.5px]"></div>
          <Pri prides="Priority Support" img3={tick} img1={cross} img2={tick} />
          <div className="w-full bg-black h-[0.5px]"></div>
          <Pri
            prides="Educational Resources and Guides"
            img3={tick}
            img1={cross}
            img2={tick}
          />
          <div className="w-full bg-black h-[0.5px]"></div>
          <Pri
            prides="Advanced Progress Tracking Tools"
            img3={tick}
            img1={cross}
            img2={cross}
          />
          <div className="w-full bg-black h-[0.5px]"></div>
          <Pri
            prides="Customized Meal Plans and Recipe Suggestions"
            img3={tick}
            img1={cross}
            img2={cross}
          />
          <div className="w-full bg-black h-[0.5px]"></div>
          <Pri prides="Phone Support" img3={tick} img1={cross} img2={cross} />
        </div>
      </div>
      <div className="overflow-x-auto block sm:hidden py-5 px-3 w-full">
        <div className="flex flex-row space-x-2">
          <div className="bg-[#234338] min-w-full text-white px-5 text-2xl rounded-xl py-6">
            <p className="w-fit mx-auto">Features</p>
          </div>
          <div className="bg-[#234338] min-w-full text-white px-5 text-2xl rounded-xl py-6">
            <p className="w-fit mx-auto">Free Plan</p>
          </div>
          <div className="bg-[#234338] min-w-full text-white px-5 text-2xl rounded-xl py-6">
            <p className="w-fit mx-auto">Premium Plan</p>
          </div>
          <div className="bg-[#234338] min-w-full text-white px-5 text-2xl rounded-xl py-6">
            <p className="w-fit mx-auto">Ultimate Plan</p>
          </div>
        </div>
    
            <Pri
              prides="Personalized Nutrition Plan"
              img3={tick}
              img1={tick}
              img2={tick}
            />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
            <Pri
              prides="Mobile App Access"
              img3={tick}
              img1={tick}
              img2={tick}
            />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
            <Pri prides="Email Support" img3={tick} img1={tick} img2={tick} />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
            <Pri
              prides="One-on-One Video Consultations"
              img3={tick}
              img1={cross}
              img2={tick}
            />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
            <Pri
              prides="Recipe Recommendations and Meal Planning"
              img3={tick}
              img1={cross}
              img2={tick}
            />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
            <Pri
              prides="Priority Support"
              img3={tick}
              img1={cross}
              img2={tick}
            />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
            <Pri
              prides="Educational Resources and Guides"
              img3={tick}
              img1={cross}
              img2={tick}
            />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
            <Pri
              prides="Advanced Progress Tracking Tools"
              img3={tick}
              img1={cross}
              img2={cross}
            />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
            <Pri
              prides="Customized Meal Plans and Recipe Suggestions"
              img3={tick}
              img1={cross}
              img2={cross}
            />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
            <Pri prides="Phone Support" img3={tick} img1={cross} img2={cross} />
            <div className="w-[2200px] bg-black h-[0.5px]"></div>
        
      </div>
    </div>
  );
};

export default Pricingdesc;
