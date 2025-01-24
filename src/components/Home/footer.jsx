import Navbar from "./Navbar";

function Foot() {
  return (
    <div className="wholefoot">
      <div className="footer">
        <Navbar />

      </div>
      <div className="w-fit mx-auto space-x-2 sm:space-y-0 space-y-4 text-white sm:flex sm:flex-row">
        <div className="flex border-2 sm:px-2 px-32 py-4 border-[#2C5446] flex-row sm:space-x-5 items-center">
          <li className="list-none">
            <i className="bx text-[#CBEA7B] sm:text-4xl text-2xl  bxs-envelope"></i>
          </li>
          <p>info!nutritionist@gmail.com</p>
        </div>
        <div className="flex border-2 sm:px-2 border-[#2C5446] px-32 py-4 space-x-5 items-center flex-row">
          <li className="list-none"> 
            <i className="bx text-[#CBEA7B] text-4xl bxs-phone"></i>
          </li>
          <p>+234 201 835 3654</p>
        </div>
        <div className="flex sm:px-2 py-4 px-32 border-2 border-[#2C5446] space-x-5 items-center flex-row">
          <li className="list-none">
            <i className="bx text-[#CBEA7B] text-4xl bx-current-location"></i>
          </li>
          <p>Somewhere in the World</p>
        </div>
      </div>
      <p className="lastp text-white w-fit mx-auto">&copy; Nutritionist. All rights reserved.</p>
    </div>
  );
}

export default Foot;
