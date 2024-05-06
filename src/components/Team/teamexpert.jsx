import Expnav from "./expnav";
import abs from "../../assets/Abstract Design.png";
import cont from "../../assets/Container.png";
import Expert from "./Expert";
import Homepic from "./homepic";

const Teamexp = () => {
  return (
    <div>
      <div>
          <Homepic
            abs={abs}
            cont={cont}
            cla="text-[30px] font-bold ml-[420px] -mt-[40px] mb-[40px]"
            h="Meet Our Team of Experts"
            p="Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health."
          />
          <Expnav firstnav="Management Team" secondnav="Nutritionists and Dietitians" thirdnav="Customer Support" fouthnav="Marketing and Communications" fithnav="Technology and Development" />
        <div className="flex flex-row">
          <Expert />
          <Expert />
          <Expert />
          <Expert />
        </div>
      </div>
    </div>
  );
};

export default Teamexp;
