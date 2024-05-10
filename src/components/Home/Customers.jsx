import customer1 from "../../assets/db8da9009ed51cc5761f4573c5c4e4ccafdc1b5b.png";
import customer2 from "../../assets/c4e2577a56610b0d69fb9a98902065ef3e297181.png";
import customer3 from "../../assets/9d2a1b366698253784e4dad493b5f48bce3f4563.png";

const Customers = () => {
  return (
    <div className="customer-div flex flex-col md:flex-row w-[150px]">
      <div className="pictures">
        <img src={customer1} alt="" className="absolute -top-[18px] left-[20px]" />
        <img src={customer2} alt="" className="second" />
        <img src={customer3} alt="" className="hidden md:block" />
      </div>
      <div className="customer-p">
        <p>
          <span>430+</span> Happy Customer
        </p>
      </div>
    </div>
  );
};

export default Customers;
