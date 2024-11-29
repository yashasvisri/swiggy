import { useState } from "react";
import { CDN_URL } from "../utility/constant";




const Header = ()=>{

  const [btnName, setbtnName]= useState("Login");
    return(
      <div className="header">
        <div className="logo-Container">
          <img src={CDN_URL} alt='Logo'></img>
        </div>
        <div className="nav-Items">
          <ul className="item-List">
            <li>Home </li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>

           <li> <button className="login" onClick={()=>{
              setbtnName(btnName==="Login" ? "Logout":"Login");
            }}> {btnName}</button></li>
          </ul>
        </div>
      </div>
      
    )
  }
  export default Header;