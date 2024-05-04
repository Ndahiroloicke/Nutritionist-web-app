


const Pri = ({prides,img1,img2}) => {
  return (
    <div>
         <div className="flex flex-row justify-between items-center py-[32px] px-[20px]">
            <p>{prides}</p>
            <img src={img1} alt="" className="ml-[100px]"/>
            <img src={img2} alt=""  className="pr-[30px]"/>
        </div>
        <div className="w-[1145px] bg-black h-[1px]"></div>
    </div>
  )
}

export default Pri