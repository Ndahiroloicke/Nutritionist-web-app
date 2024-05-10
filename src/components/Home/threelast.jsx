import divine4 from "../../assets/50c1ae4b-9868-449b-80ff-5243bceb8419.png";
import divine5 from "../../assets/7bbcb7b6-0617-4e41-9438-7a409c6e2ad4.png";
import divine3 from "../../assets/2f741a03-f576-45c3-a840-9745fe0db12d.png";
function Tritity() {
  return (
    <div className="-mt-[30px] md:-mt-0">
      <div className="last-feature px-[20px] w-[100%] lg:w-[100%] h-fit md:h-[250px] bg-[#F6FBE9]">
        <div className="flex flex-row items-center mx-[10px] my-[20px]">
          <img src={divine4} alt="" />
          <h3 className="text-[18px] mx-[10px] md:w-[486px] w-[250px] font-semibold">Guidance from Certified Nutritionists</h3>
        </div>
        <div className="w-[100%] font-medium md:w-[550px] md:pb-[30px] mx-[10px] my-[16px]">
          Our team of experienced and certified nutritionists will provide
          professional guidance and support throughout your journey. They will
          answer your questions, address your concerns, and keep you motivated
          as you work towards your goals.
        </div>
      </div>
      <div className="last-feature px-[20px] w-[100%] h-fit md:h-[250px] bg-[#F6FBE9]">
        <div className="flex flex-row items-center mx-[10px] my-[20px]">
          <img src={divine5} alt="" />
          <h3 className="text-[18px] mx-[10px] md:w-[486px] w-[250px] font-semibold">Meal Planning and Recipes</h3>
        </div>
        <div className="w-[100%] font-medium md:w-[550px] md:pb-[30px] mx-[10px] my-[16px]">
          Access a vast collection of delicious and healthy recipes tailored to
          your dietary needs. Our nutritionists will also create personalized
          meal plans, making it easier for you to stay on track and enjoy
          nutritious meals.
        </div>
      </div>
      <div className="last-feature px-[20px] w-[100%] h-fit md:h-[250px] bg-[#F6FBE9]">
        <div className="flex flex-row items-center mx-[10px] my-[20px]">
          <img src={divine3} alt="" />
          <h3 className="text-[18px] mx-[10px] md:w-[486px] w-[250px] font-semibold">Nutritional Education and Workshops</h3>
        </div>
        <div className="w-[100%] font-medium md:w-[550px] md:pb-[30px] mx-[10px] my-[16px]">
          Expand your knowledge of nutrition through informative articles and
          educational workshops. Our nutritionists will equip you with the
          knowledge and tools to make informed choices for long-term success.
        </div>
      </div>
    </div>
  );
}

export default Tritity;
