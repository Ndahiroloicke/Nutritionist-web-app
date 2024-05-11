// Price.js
import  { useState } from "react";
import Butts from "./butts";
import Plans from "./plans";
import PropTypes from "prop-types";

function Price() {
  const [yearlyPricing, setYearlyPricing] = useState(false);

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
        <Butts setYearlyPricing={setYearlyPricing}  yearlyPricing={yearlyPricing}/>
      </div>
      {yearlyPricing ? (
        <div className="plans mt-[40px]">
          <Plans
            plandescription="Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.personalized recipe recommendations "
            planname="Basic Plan"
            price="$199"
            className="f"
          />
          <Plans
            planname="Premium Plan"
            plandescription="Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations."
            price="$399"
          />
          <Plans
            planname="Ultimate Plan"
            plandescription="Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops."
            price="$499"
          />
        </div>
      ) : (
        <div className="plans mt-[40px]">
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
      )}
    </div>
  );
}

Price.propTypes = {
  pric: PropTypes.bool.isRequired,
};

export default Price;
