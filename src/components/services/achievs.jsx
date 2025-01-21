import Ach from "./achievscomp";
import divine from "../../../public/assets/f3c816c2-63bc-42e8-9009-85beea00a940.png";
import divine2 from "../../../public/assets/95ad6b91-98e3-4b79-882e-111eaaeca1ca.png";
import divine4 from "../../../public/assets/50c1ae4b-9868-449b-80ff-5243bceb8419.png";
import divine5 from "../../../public/assets/7bbcb7b6-0617-4e41-9438-7a409c6e2ad4.png";

const Achievments = () => {
  return (
    <div>
      <div className="w-full mt-48">
        <div className="w-fit sm:mb-10 sm:mx-auto">
          <h1 className="text-3xl w-fit mx-auto font-semibold sm:mx-auto">
            Company Achievements
          </h1>
          <p className="w-fit mx-12">
            At Nutritionist, we take pride in our accomplishments and the
            positive impact we have made on the lives of our clients.
            <span className="w-fit mx-auto">
              {" "}
              Here are some of our notable achievements{" "}
            </span>
          </p>
        </div>
      </div>
      <div className="flex sm:flex-row w-full mt-8">
        <div className="w-fit mx-auto flex flex-col sm:flex-row">
        <div>
          <Ach
            pic={divine}
            achievst="10,000+ Transformations"
            paragraph="Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle."
          />
          <Ach
            pic={divine2}
            achievst="Positive Client Reviews"
            paragraph="We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program."
          />
        </div>
        <div>
          <Ach
            pic={divine4}
            achievst="Recognition for Excellence"
            paragraph="Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success."
          />
          <Ach
            pic={divine5}
            achievst="Collaborate With Top Health Experts."
            paragraph="Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support."
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Achievments;
