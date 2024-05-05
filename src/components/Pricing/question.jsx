import { useState } from "react";
import Qadd from "../../assets/Qadd.png";
import Qcross from "../../assets/Qcross.png";

const Question = ({Qt,longp}) => {
  const [cross, setcross] = useState(false);
  const [add, setadd] = useState(true);

  const handlecross = () => {
    setcross(true);
    setadd(false);
  };
  return (
    <div className="w-[803px] flex flex-row justify-between px-[50px]  py-[30px]">
      <div className="">
        <h1 onClick={handlecross} className="font-semibold cursor-pointer">{Qt}</h1>
        {cross && (
          <p className="w-[600px]">
            {longp}
          </p>
        )}
      </div>
      <div>
        {add && (
          <button>
            <img src={Qadd} alt="" />
          </button>
        )}
        {cross && (
          <button
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

export default Question;
