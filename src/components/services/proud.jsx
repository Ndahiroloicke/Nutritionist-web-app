import { Link } from "react-router-dom";
const Proud = () => {
  return (
    <div className="bg-[#F6FBE9] flex flex-col sm:flex-row mx-4 sm:mx-48 sm:pb-9 sm:pt-4 items-center rounded-xl mt-24 mb-24">
      <div className="sm:w-[930px]">
        <h1 className="font-semibold text-[24px] sm:ml-0 sm:pl-9 my-4 sm:mb-3 w-fit mx-auto sm:mt-5">
          We Are Proud of Our Achievements
        </h1>
        <p className="mx-9">
          But our ultimate satisfaction comes from seeing our clients achieve
          their goals and live healthier, happier lives. Join Nutritionist today
          and embark on your own transformative journey towards optimal health
          and well-being.
        </p>
      </div>
      <div>
        <Link to="/pricing">
          <button className="bg-[#CBEA7B] w-fit mx-auto mt-6 mb-4 p-3 rounded-lg font-semibold sm:mt-[40px] sm:ml-[70px]">
            Book a Demo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Proud;
