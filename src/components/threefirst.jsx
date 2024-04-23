import divine from "../assets/f3c816c2-63bc-42e8-9009-85beea00a940.png";
import divine2 from "../assets/95ad6b91-98e3-4b79-882e-111eaaeca1ca.png";
import divine3 from "../assets/ccefa74f-1337-4b61-b25b-aef4826c67fe.png"
function Trinity() {
  return (
    <div>
      <div className="first-feature"><div>
      <div className="pic-and-h">
        <img src={divine} alt="" />
        <h3>Personalized Nutrition Plans</h3>
        </div>
        </div>
        <div className="para">
          Receive a tailored nutrition plan designed specifically for your body
          and goals. Our certified nutritionists will consider your unique
          needs, dietary preferences, and health conditions to create a plan
          that suits you best.
        </div>
      </div>
      <div className="first-feature">
        <div className="pic-and-h2 pic-and-h">
        <img src={divine2} alt="" />
        <h3>Personalized Nutrition Plans</h3>
        </div>
        <div className="para">
          Receive a tailored nutrition plan designed specifically for your body
          and goals. Our certified nutritionists will consider your unique
          needs, dietary preferences, and health conditions to create a plan
          that suits you best.
        </div>
      </div>
      <div className="first-feature"><div className="pic-and-h3 pic-and-h">
        <img src={divine3} alt="" />
        <h3>Personalized Nutrition Plans</h3>
        </div>
        <div className="para">
          Receive a tailored nutrition plan designed specifically for your body
          and goals. Our certified nutritionists will consider your unique
          needs, dietary preferences, and health conditions to create a plan
          that suits you best.
        </div>
      </div>
    </div>
  );
}

export default Trinity;
