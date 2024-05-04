import Butts from "./butts";
import Plans from "./plans";

function Price() {
  return (
    <div className="wholepricing">
      <div className="pricing">
        <h1 className="text-3xl font-extrabold">Our pricing</h1>
        <p>
          We outline our flexible and affordable options to support you on your
          journey to optimal health and nutrition. We believe that{" "}
          <span>
            everyone deserves access to personalized nutrition guidance and
            resources
          </span>
        </p>
        <Butts/>
      </div>
      <div className="plans">
        <Plans
          plandescription="Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.personalized recipe recommendations "
          planname="Basic Plan"
          price="$49"
          className="f"
        />
        <Plans
          planname="Premium Plan"
          plandescription="Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations."
          price="$79"
        />
        <Plans
          planname="Ultimate Plan"
          plandescription="Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops."
          price="$99"
        />
      </div>
    </div>
  );
}

export default Price;
