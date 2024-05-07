import divine from "../../assets/f3c816c2-63bc-42e8-9009-85beea00a940.png";
import divine2 from "../../assets/95ad6b91-98e3-4b79-882e-111eaaeca1ca.png";
import divine3 from "../../assets/ccefa74f-1337-4b61-b25b-aef4826c67fe.png";
function Trinity() {
  return (
    <div>
      <div className="first-feature w-[630px] h-[250px] bg-[#F6FBE9]">
        <div>
          <div className="pic-and-h">
            <img src={divine} alt="" />
            <h3 className="text-[20px] font-semibold">Personalized Nutrition Plans</h3>
          </div>
        </div>
        <div className="pt-[20px] pb-[60px] px-[40px]">
          Receive a tailored nutrition plan designed specifically for your body
          and goals. Our certified nutritionists will consider your unique
          needs, dietary preferences, and health conditions to create a plan
          that suits you best.
        </div>
      </div>
      <div className="first-feature w-[630px] h-[250px] bg-[#F6FBE9]">
        <div className="pic-and-h2 pic-and-h">
          <img src={divine2} alt="" />
          <h3 className="text-[20px] font-semibold">Food Tracking and Analysis</h3>
        </div>
        <div className="pt-[20px] pb-[60px] px-[40px]">
          Effortlessly track your food intake using our user-friendly app. Our
          nutritionists will analyze your data to provide insights into your
          eating habits, help you identify areas for improvement, and make
          personalized recommendations.
        </div>
      </div>
      <div className="first-feature w-[630px] h-[250px] bg-[#F6FBE9]">
        <div className="pic-and-h3 pic-and-h">
          <img src={divine3} alt="" />
          <h3 className="text-[20px] font-semibold">Lifestyle and Behavior Coaching</h3>
        </div>
        <div className="pt-[20px] pb-[60px] px-[40px]">
          Achieving sustainable results requires more than just a diet plan. Our
          nutritionists will work with you to develop healthy habits, address
          emotional eating, and provide strategies to overcome obstacles along
          the way.
        </div>
      </div>
    </div>
  );
}

export default Trinity;
