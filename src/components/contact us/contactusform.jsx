import map from "../../../public/assets/map.png";
import butt1 from "../../../public/assets/Button.png";
import butt2 from "../../../public/assets/Button-2.png";
import butt3 from "../../../public/assets/Button-3.png";
import { useState } from "react";
const Contactusform = () => {
  const [full,setfull] = useState("")
  const [email,setemail] = useState("")
  const [phone,setphone] = useState("")
  const [message,setmessage] = useState("")

  const handleSub = () =>{
    const question = {full,email,phone,message}
    fetch("http://localhost:7000/question",{
      method:"POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(question),
    }).then(()=>{
      alert("Added Successfully");
    })
  }
  return (
    <form onSubmit={handleSub}>
    <div className="flex flex-col sm:flex-row bg-[#F6FBE9] px-4 pb-[60px] mt-[60px] mb-[100px] rounded-[30px] w-fit sm:mx-auto pt-[40px] justify-between">
      <div className="flex flex-col sm:mt-[40px] sm:ml-[20px] mr-[20px] px-[12px]">
        <div className="flex flex-row mb-[30px]">
          <div className="mr-[5px]">
            <label htmlFor=""  className="font-semibold">
              Full name
            </label>
            <input
            value={full}
            onChange={(e)=>setfull(e.target.value)}
              type="text"
              className="border-[1px] outline-none text-[20px] px-[20px] w-[200px] sm:w-[269.75px] mr-[10px] bg-[#EEF8D3] h-[60px] block"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold">
              Email
            </label>
            <input
            value={email}
            onChange={(e)=> setemail(e.target.value)}
              type=""
              className="border-[1px] outline-none text-[20px] px-[20px] w-[300px] bg-[#EEF8D3] h-[60px] block"
            />
          </div>
        </div>
        <label htmlFor="" className="font-semibold">
          Phone Number
        </label>
        <input
        value={phone}
        onChange={(e)=> setphone(e.target.value)}
          type="text"
          className="border-[1px] outline-none text-[20px] px-[20px] h-[60px] bg-[#EEF8D3] mb-[30px]"
        />
        <label htmlFor="" className="font-semibold">
          Message
        </label>
        <textarea
        value={message}
        onChange={(e)=> setmessage(e.target.value)}
          name=""
          className="border-[1px] outline-none text-[20px] px-[20px] h-[135px] resize-none bg-[#EEF8D3]"
          id=""
        ></textarea>
        <button onClick={handleSub} className="bg-[#CBEA7B] mt-[20px] py-[14px] rounded-[12px] font-semibold">
          Send Message
        </button>
      </div>
      <div>
        <img
          src={map}
          alt=""
          className="w-[569px] mr-[20px] -mt-[8px] rounded-[5px] h-[431px]"
        />
        <div className="flex flex-row pl-[385px] pt-[20px]">
          <a href="https://www.facebook.com/"><img src={butt2} alt="" className="mr-[14px] w-[52px]" /></a>
          <a href="twitter.com"><img src={butt3} alt="" className="mr-[14px] w-[52px]" /></a>
          <a href="https://www.instagram.com/ndahiro__1/"></a><img src={butt1} alt="" className=" w-[52px]" />
        </div>
      </div>
    </div>
    </form>
  );
};

export default Contactusform;
