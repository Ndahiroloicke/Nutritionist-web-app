import Expnav from "./expnav";
import abs from "../../assets/Abstract Design.png";
import cont from "../../assets/Container.png";
import Expert from "./Expert";
import Homepic from "./homepic";
import PropTypes from "prop-types";
// import mist from "../../assets/Spin@1x-1.0s-200px-200px.svg";

const Teamexp = ({ employee }) => {
  // if (!employee) {
  //   return (
  //     <div>
  //       <img
  //         src={mist}
  //         className="ml-[650px] mb-[1000px] mt-[50px] h-[50px] "
  //       />
  //     </div>
  //   );
  // }
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
        <Expnav
          firstnav="Management Team"
          secondnav="Nutritionists and dietitians"
          thirdnav="customer support"
          fourthnav="Marketing and Communications"
          fifthnav="Technology and Development"
        />
        <div className="flex flex-row">
          {employee.map((item) => {
            return (
              <Expert
                pic={item.pic}
                namo={item.name}
                role={item.role}
                key={item.managment}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
Teamexp.propTypes = {
  expert: PropTypes.string.isRequired,
  employee: PropTypes.string.isRequired,
};

export default Teamexp;
