// Price.js
import { useState } from "react";
import Butts from "./butts";
import Plans from "./plans";
import PropTypes from "prop-types";

function Price() {
  const [yearlyPricing, setYearlyPricing] = useState(false);

  return (
    <div className="flex flex-col my-[200px]">
      <div className="flex flex-col w-full justify-center items-center gap-4 mt-7">
        <h1 className="text-3xl mb-[50px] font-extrabold text-balance text-center">
          Our pricing
        </h1>
        <p className="text-balance mb-[20px1] text-center sm:w-[1000px]">
          We outline our flexible and affordable options to support you on your
          journey to optimal health and nutrition. We believe that{" "}
          <span>
            everyone deserves access to personalized nutrition guidance and
            resources
          </span>
        </p>
        <Butts
          setYearlyPricing={setYearlyPricing}
          yearlyPricing={yearlyPricing}
        />
      </div>
      {yearlyPricing ? (
        <div className="flex space-y-5 flex-wrap justify-center mt-[40px] sm:mx-0 mx-3">
          <Plans
            plandescription="Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.personalized recipe recommendations "
            planname="Basic Plan"
            price="$199"
            className=""
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
        <div className="flex space-y-5 flex-wrap justify-center mt-[40px] sm:mx-0 mx-3">
          <Plans
            plandescription="Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.personalized recipe recommendations "
            planname="Basic Plan"
            price="$49"
            className=""
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
