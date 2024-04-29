import Firstblogs from "./firstones";
import pic1 from "../../../assets/da7b7dc064c61db0c062ccbdaaf8177952c7a231.png";
import pic2 from "../../../assets/b9d2d8f38a133804e03e331970e5f4b5ac921d09.png";
import pic3 from "../../../assets/9587cb83576a655766715dbeea15fd66e6cb0e44.png";
import pic4 from "../../../assets/331b06a3fc603b2f87b51bb0fa1cc770057631b0.png";
import profile1 from "../../../assets/f3c3962dcadfffd2660cfa7ff7bbf60c6e410807.png";
import profile2 from "../../../assets/db8da9009ed51cc5761f4573c5c4e4ccafdc1b5b.png";
import profile3 from "../../../assets/c4e2577a56610b0d69fb9a98902065ef3e297181.png";
import profile4 from "../../../assets/89b397cc5abdfa610fca6e2c226b66fe8871bba8.png";
function Blogsforhome() {
  return (
    <div className="font-sans">
      <div className="blog-int">
        <h1 className="font-extrabold text-3xl">Our Blogs</h1>
        <p>
          Our blog is a treasure trove of informative and engaging articles
          written by our team of nutritionists, dietitians, and wellness <span>experts. Here is what you can expect from our blog.</span>
        </p>
      </div>
      <div className="home-blogs">
        <div className="first-blogs">
    <Firstblogs blogtitle="Weight Loss" homepic={pic1} profile={profile1}/>
    <Firstblogs  blogtitle="Understanding Macronutrients" homepic={pic4} profile={profile2}/>
        </div>
        <div className="last-blogs">
    <Firstblogs blogtitle="Mindful Eating" homepic={pic2} profile={profile3}/>
    <Firstblogs blogtitle="Healthy Snacks on the Go" homepic={pic3} profile={profile4}/>
        </div>
      </div>
    </div>
  );
}

export default Blogsforhome;
