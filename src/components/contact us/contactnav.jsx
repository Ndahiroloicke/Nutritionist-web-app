
const Contactnav = () => {
  return (
    <div className="bg-[#1A3129] rounded-b-[8px] sm:mx-[98px] mx-6 py-[10px]">
      <div className="bg-[#1A3129] flex flex-col px-4 py-3 space-y-3 sm:flex-row justify-between">
        <div className="bg-[#234338] px-[10px] pt-[20px] w-full sm:w-[200px] rounded-[8px] pb-[30px] flex flex-col items-center">
          <li className="list-none">
            <i className="bx bxs-envelope text-[30px] text-[#CBEA7B]"></i>
          </li>
          <p className="text-white">ndahiroloicke@gmail.com</p>
        </div>
        <div className="bg-[#234338] flex flex-col px-[10px] pt-[20px] rounded-[8px] w-full sm:w-[200px] pb-[30px] items-center">
          <li className="list-none">
            <i className="bx bxs-phone list-none text-[30px] text-[#CBEA7B]"></i>
          </li>
          <p className="text-white">+123-456-789</p>
        </div>
        <div className="bg-[#234338] flex flex-col px-[10px] pt-[20px] rounded-[8px] w-full sm:w-[200px] pb-[30px] items-center">
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
