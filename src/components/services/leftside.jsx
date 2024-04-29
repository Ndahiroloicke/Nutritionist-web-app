import pic from "../../assets/fat woman.png";

const Leftside = () => {
  return (
    <div className="flex flex-row m-12 ml-[85px]">
      <div>
        <img src={pic} alt="" className="w-[600px] rounded-l-xl" />
      </div>
      <div className="bg-[#CBEA7B] w-2"></div>
      <div className="pt-[70px] bg-[#F6FBE9] pr-[20px] rounded-r-xl">
        <h1 className="ml-[30px] font-semibold text-xl">Inspiring Transformations Story</h1>
        <div className="bg-[#CBEA7B] w-[290px] h-[4px] ml-[30px] rounded-lg mb-[40px]"></div>
        <p className="w-[570px] ml-[30px] mb-[30px] ">
          Nutritionist continues to empower individuals to transform their lives
          through personalized nutrition coaching. With an expanding client base
          and a growing team of experts, we remain committed to our goal of
          helping people lose weight, improve their health, and lead happier,
          more fulfilling lives. Our journey of inspiring transformations
          continues, one client at a time.
        </p>
        <p className="ml-[30px]">July 1,2025</p>
      </div>
    </div>
  );
};

export default Leftside;
