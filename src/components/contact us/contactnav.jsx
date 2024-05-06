
const Contactnav = () => {
  return (
    <div className="bg-[#1A3129] rounded-b-[8px] ml-[100px] mr-[90px] py-[10px]">
      <div className="bg-[#1A3129] flex flex-row justify-between px-[280px]">
        <div className="bg-[#234338] px-[10px] pt-[20px] w-[200px] rounded-[8px] pb-[30px] flex flex-col items-center">
          <li className="list-none">
            <i className="bx bxs-envelope text-[30px] text-[#CBEA7B]"></i>
          </li>
          <p className="text-white">ndahiroloicke@gmail.com</p>
        </div>
        <div className="bg-[#234338] flex flex-col px-[10px] pt-[20px] rounded-[8px] w-[200px] pb-[30px] items-center">
          <li className="list-none">
            <i className="bx bxs-phone list-none text-[30px] text-[#CBEA7B]"></i>
          </li>
          <p className="text-white">+123-456-789</p>
        </div>
        <div className="bg-[#234338] flex flex-col px-[10px] pt-[20px] rounded-[8px] w-[200px] pb-[30px] items-center">
          <li className="list-none">
            <i className="bx bx-current-location text-[30px] text-[#CBEA7B]"></i>
          </li>
          <p className="text-white">Somewhere in the World</p>
        </div>
      </div>
    </div>
  );
};

export default Contactnav;
