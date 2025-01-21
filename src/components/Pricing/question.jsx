import { useState } from "react";
import Qadd from "../../../public/assets/Qadd.png";
import Qcross from "../../../public/assets/Qcross.png";
import Proptypes from "prop-types";

const Question = ({ Qt, longp }) => {
  const [cross, setcross] = useState(false);
  const [add, setadd] = useState(true);

  const handlecross = () => {
    setcross(true);
    setadd(false);
  };
  return (
    <div className="w-full flex flex-row items-center justify-between sm:justify-between sm:px-[50px]  sm:py-[30px]">
      <div className="">
        <h1 onClick={handlecross} className="font-semibold cursor-pointer">
          {Qt}
        </h1>
        {cross && <p className="">{longp}</p>}
      </div>
      <div>
        {add && (
          <button className="size-32">
            <img src={Qadd} alt="" />
          </button>
        )}
        {cross && (
          <button
            className="size-32"
            onClick={() => {
              setcross(false);
              setadd(true);
            }}
          >
            <img src={Qcross} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};
Question.propTypes = {
  Qt: Proptypes.string.isRequired,
  longp: Proptypes.string.isRequired,
};

export default Question;
