import PropTypes from "prop-types";
import { useReducer } from "react";

const navigation = {
  management: "management",
  support: "customer support",
  nutritionist: "Nutritionist",
  marketing: "marketing",
  technology: "technology"
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_NAV":
      return {
        ...Object.fromEntries(Object.keys(state).map(nav => [nav, nav === action.nav])), // Set the selected navigation item to true, others to false
      };
    default:
      return state;
  }
}

const Expnav = ({
  firstnav,
  secondnav,
  thirdnav,
  fourthnav,
  fifthnav,
  sixthnav,
  handle,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    management: true,
    support: false,
    nutritionist: false,
    marketing: false,
    technology: false,
    Recipe:false
  });
  

  const handleclick = (nav) => {
    dispatch({ type: "SELECT_NAV", nav });
  };

  const handleClickPreventDefault = (event, nav) => {
    event.preventDefault();
    handleclick(nav);
  };
  return (
    <div>
      <div className="flex flex-row ml-[100px] mr-[90px] px-[50px] py-[20px] bg-[#234338] justify-between items-center text-[#E6E6E6] rounded-b-xl">
        <li
          className={state.management ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg" : "list-none"}
          onClick={() =>{ handleclick("management"); handle('all')}}
        >
          <a href="#" onClick={(e) => handleClickPreventDefault(e, "management")}>{firstnav}</a>
        </li>
        <li
          className={state.support ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg" : "list-none"}
          onClick={() =>{ handleclick("support"); handle("Weight Loss")}}
        >
          <a href="#" onClick={(e) => handleClickPreventDefault(e, "support")}>{secondnav}</a>
        </li>
        <li
          className={state.nutritionist ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg" : "list-none"}
          onClick={() =>{ handleclick("nutritionist");handle('Healthy Eating')}}
        >
          <a href="#" onClick={(e) => handleClickPreventDefault(e, "nutritionist")}>{thirdnav}</a>
        </li>
        <li
          className={state.marketing ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg" : "list-none"}
          onClick={() => {handleclick("marketing"); handle('Fitness and Excercise')}}
        >
          <a href="#" onClick={(e) => handleClickPreventDefault(e, "marketing")}>{fourthnav}</a>
        </li>
        <li
          className={state.technology ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg" : "list-none"}
          onClick={() =>{ handleclick("technology"); handle("Mindset and Motivation")}}
        >
          <a href="#" onClick={(e) => handleClickPreventDefault(e, "technology")}>{fifthnav}</a>
        </li>
        <li className={state.Recipe ? "list-none  bg-[#2C5446] px-[20px] py-[16px] rounded-lg" : "list-none"}>
          <a href="#" onClick={(e) =>{ handleClickPreventDefault(e,"Recipe"); handle("Recipe and Meal Planning") }}>{sixthnav}</a>
        </li>
      </div>
    </div>
  );
};

Expnav.propTypes = {
  firstnav: PropTypes.string.isRequired,
  secondnav: PropTypes.string.isRequired,
  thirdnav: PropTypes.string.isRequired,
  fourthnav: PropTypes.string.isRequired,
  fifthnav: PropTypes.string.isRequired,
  sixthnav: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
};

export default Expnav;
