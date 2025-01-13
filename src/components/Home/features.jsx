import Trinity from "./threefirst";
import Tritity from "./threelast";

const Feature = () => {
  return (
    <div>
      <div className="features-head my-[100px]">
        <h1 className="sticky top-0 font-extrabold mb-[50px] text-3xl">Features</h1>
        <p className="sm:px-0 px-3 sm:mt-0 mt-3 text-center">
          Welcome to the Feature Section of Nutritionist, your ultimate
          destination for all things nutrition and wellness.
        </p>
      </div>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row space-x-14 w-fit mx-auto">
        <div className="">
          <Trinity />
        </div>
        <div className="">
          <Tritity />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
