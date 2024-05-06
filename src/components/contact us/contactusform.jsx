import map from "../../assets/map.png"
import butt1 from "../../assets/Button.png"
import butt2 from "../../assets/Button-2.png"
import butt3 from "../../assets/Button-3.png"
const Contactusform = () => {
  return (
    <div className="flex flex-row bg-[#F6FBE9] pb-[60px] mb-[100px] rounded-[30px] w-fit ml-[100px] pt-[40px] justify-between">
      <div className="flex flex-col mt-[40px] ml-[20px] mr-[20px] pr-[12px]">
        <div className="flex flex-row mb-[30px]">
          <div className="mr-[5px]">
        <label htmlFor="" className="font-semibold">Full name</label>
        <input type="text" className="border-[1px] w-[269.75px] mr-[10px] bg-[#EEF8D3] h-[60px] block"/>
        </div>
        <div>
        <label htmlFor="" className="font-semibold">Email</label>
        <input type="" className="border-[1px] w-[300px] bg-[#EEF8D3] h-[60px] block"/>
        </div>
        </div>
        <label htmlFor="" className="font-semibold">Phone Number</label>
        <input type="text" className="border-[1px] h-[60px] bg-[#EEF8D3] mb-[30px]" />
        <label htmlFor="" className="font-semibold">Message</label>
        <textarea name="" className="border-[1px] h-[135px] resize-none bg-[#EEF8D3]" id=""></textarea>
        <button className="bg-[#CBEA7B] mt-[20px] py-[14px] rounded-[12px] font-semibold">Send Message</button>
        </div>
        <div>
            <img src={map} alt="" className="w-[569px] mr-[20px] -mt-[8px] rounded-[5px] h-[431px]"/>
            <div className="flex flex-row pl-[385px] pt-[20px]">
            <img src={butt2} alt=""  className="mr-[14px] w-[52px]"/>
            <img src={butt3} alt="" className="mr-[14px] w-[52px]"/>
            <img src={butt1} alt="" className=" w-[52px]"/>
            </div>
    </div>
    </div>
  )
}

export default Contactusform