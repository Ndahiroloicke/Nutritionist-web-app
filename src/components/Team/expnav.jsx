import PropTypes from "prop-types";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_NAV":
      return {
        ...Object.fromEntries(
          Object.keys(state).map((nav) => [nav, nav === action.nav])
        ), // Set the selected navigation item to true, others to false
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
  handleClickTest,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    management: true,
    support: false,
    nutritionist: false,
    marketing: false,
    technology: false,
    Recipe: false,
  });

  const handleclick = (nav) => {
    dispatch({ type: "SELECT_NAV", nav });
  };

  useEffect(() => {
    if (state.management) {
      handleClickTest({ id: "all", category: "Management" });
    }
  }, [state.management, handleClickTest]);

  const handleClickPreventDefault = (event, nav) => {
    event.preventDefault();
    handleclick(nav);
  };

  return (
    <div className="sm:px-[100px]">
      <div className="hidden sm:flex flex-row px-[50px] py-[20px] bg-[#234338] justify-between items-center text-[#E6E6E6] rounded-b-xl">
        <li
          className={
            state.management
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={() => {
            handleclick("management");
            handleClickTest({ id: "all", category: "Management" });
          }}
        >
          <a
            href="#"
            onClick={(e) => handleClickPreventDefault(e, "management")}
          >
            {firstnav}
          </a>
        </li>
        <li
          className={
            state.support
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={() => {
            handleclick("support");
            handleClickTest({ id: "Weight Loss", category: "Nutritionist" });
          }}
        >
          <a href="#" onClick={(e) => handleClickPreventDefault(e, "support")}>
            {secondnav}
          </a>
        </li>
        <li
          className={
            state.nutritionist
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={() => {
            handleclick("nutritionist");
            handleClickTest({ id: "Healthy Eating", category: "Support" });
          }}
        >
          <a
            href="#"
            onClick={(e) => handleClickPreventDefault(e, "nutritionist")}
          >
            {thirdnav}
          </a>
        </li>
        <li
          className={
            state.marketing
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={() => {
            handleclick("marketing");
            handleClickTest({
              id: "Fitness and Excercise",
              category: "Marketing",
            });
          }}
        >
          <a
            href="#"
            onClick={(e) => handleClickPreventDefault(e, "marketing")}
          >
            {fourthnav}
          </a>
        </li>
        <li
          className={
            state.technology
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={() => {
            handleclick("technology");
            handleClickTest({
              id: "Mindset and Motivation",
              category: "Technology",
            });
          }}
        >
          <a
            href="#"
            onClick={(e) => handleClickPreventDefault(e, "technology")}
          >
            {fifthnav}
          </a>
        </li>
        <li
          className={
            state.Recipe
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
        >
          <a
            href="#"
            onClick={(e) => {
              handleClickPreventDefault(e, "Recipe");
              handleClickTest({
                id: "Recipe and Meal Planning",
                category: "Recipe",
              });
            }}
          >
            {sixthnav}
          </a>
        </li>
      </div>
      <div className="bg-[#234338] rounded-b-2xl text-2xl sm:hidden py-6 space-x-20 px-10 w-full flex flex-row text-white overflow-x-auto">
        <p
          className={
            state.management
              ? "list-none bg-[#2C5446] inline-block px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={(e) => {
            handleclick("management");
            handleClickTest({ id: "all", category: "Management" });
            handleClickPreventDefault(e, "management")
          }}
        >
          Managment
        </p>
        <p
          className={
            state.support
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={(e) => {
            handleclick("support");
            handleClickTest({ id: "Weight Loss", category: "Nutritionist" });
            handleClickPreventDefault(e, "support")
          }}
        >
          Support
        </p>
        <p
          className={
            state.nutritionist
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={(e) => {
            handleclick("nutritionist");
            handleClickTest({ id: "Healthy Eating", category: "Support" });
            handleClickPreventDefault(e, "nutritionist")
          }}
        >
          Nutritionists
        </p>
        <p
          className={
            state.marketing
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={(e) => {
            handleclick("marketing");
            handleClickTest({
              id: "Fitness and Excercise",
              category: "Marketing",
            });
            handleClickPreventDefault(e, "marketing")
          }}
        >
          marketing
        </p>
        <p
          className={
            state.technology
              ? "list-none bg-[#2C5446] px-[20px] py-[16px] rounded-lg"
              : "list-none"
          }
          onClick={() => {
            handleclick("technology");
            handleClickTest({
              id: "Mindset and Motivation",
              category: "Technology",
            });
            handleClickPreventDefault(e, "technology")
          }}
        >
          technology
        </p>
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
  handleClickTest: PropTypes.func.isRequired,
};

export default Expnav;
