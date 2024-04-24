import Overview from "./Testoverr";
import pic from '../assets/f3c3962dcadfffd2660cfa7ff7bbf60c6e410807.png'
import pic2 from '../assets/89b397cc5abdfa610fca6e2c226b66fe8871bba8.png'
import pic3 from "../assets/db8da9009ed51cc5761f4573c5c4e4ccafdc1b5b.png"
function Testimonials() {
  return (
    <div>
      <div className="testims">
        <h1>Our Testimonials</h1>
        <p>
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>
      </div>
      <div className="testimons">
        <Overview
          paragraph="I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds."
          username="Jennifer Anderson"
          userpic={pic}
        />
        <Overview paragraph="Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!. Highly recommended!"
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
