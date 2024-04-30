import Navbar from "./Navbar";

function Foot() {
  return (
    <div className="wholefoot">
      <div className="footer">
        <Navbar />

      </div>
      <div className="lowerfoot">
        <div>
          <li>
            <i className="bx bxs-envelope"></i>
          </li>
          <p>ndahiroloicke@gmail.com</p>
        </div>
        <div>
          <li>
            <i className="bx bxs-phone"></i>
          </li>
          <p>+123-456-789</p>
        </div>
        <div>
          <li>
            <i className="bx bx-current-location"></i>
          </li>
          <p>Somewhere in the World</p>
        </div>
        <p className="lastp">&copy; Nutritionist. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Foot;
