import Overview from "./Testoverr";
import pic from '../../assets/mark.png'
import pic2 from '../../assets/Emily-1.png'
import pic3 from "../../assets/Emily-2.png"
function Testimonials() {
  return (
    <div>
      <div className="testims">
        <h1 className="text-3xl font-extrabold">Our Testimonials</h1>
        <p>
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>
      </div>
      <div className="flex flex-row justify-between mx-[70px]">
        <Overview
          paragraph="I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!"
          username="Jennifer Anderson"
          userpic={pic}
        />
        <Overview paragraph="Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!."
        username="Robert Johnson"
        userpic={pic2}
        />
        <Overview  paragraph="I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!"
        username="Emily Davis"
        userpic={pic3}/>
      </div>
    </div>
  );
}

export default Testimonials;
