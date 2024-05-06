import Uppertab from "../Home/Uppertab";
import Navbar from "../Home/Navbar";
import abs from "../../assets/Abstract Design.png";
import cont from "../../assets/Container.png";
import Homepic from "../Team/homepic";
import Expnav from "../Team/expnav";
import Foot from "../Home/footer";
import Displayblog from "./displayblog";


const Blogshome = () => {
  return (
    <div>
      <Uppertab />
      <Navbar />
      <Homepic
        abs={abs}
        cont={cont}
        cla="text-[30px] font-bold ml-[560px] -mt-[40px] mb-[40px]"
        h="Our Blogs"
        p="Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being."
      />
      <Expnav
        sixthnav="Recipes and Meal Planning"
        fithnav="Mindset and Motivation"
        secondnav="Weight Loss Tips"
        thirdnav="Healthy Eating"
        fouthnav="Fitness and Exercise"
        firstnav="All"
      />
     <Displayblog/>
      <Foot />
    </div>
  );
};

export default Blogshome;
