import { useState } from "react";
import { CDN_URL } from "../utility/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-Container">
        <img src={CDN_URL} alt="Logo"></img>
      </div>
      <div className="nav-Items">
        <ul className="item-List">
          <li>
          <Link to="/">  Home</Link>  
            </li>
          <li>
            <Link to="/contact">Contact Us</Link></li>
          <li>
            <Link to="/about">About</Link>
            </li>
          <li><Link to="/cart" > Cart</Link></li>

          <li>
            {" "}
            <button
              className="login"
              onClick={() => {
                setbtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {" "}
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
