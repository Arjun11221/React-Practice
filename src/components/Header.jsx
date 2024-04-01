import { useState } from "react";
import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="img">
        <img
          className="img-logo"
          src={HEADER_LOGO}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li><Link to="/about" >About</Link></li>
          <li>
          <Link to="/contact" >Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }} 
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
