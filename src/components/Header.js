import React from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";
import DehazeIcon from "@material-ui/icons/Dehaze";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="#logo" />
      </div>
      <div className="header__center">
        <a href="https://tesla-clone-9ea17.web.app/">Model S</a>
        <a href="https://tesla-clone-9ea17.web.app/">Model 3</a>
        <a href="https://tesla-clone-9ea17.web.app/">Model X</a>
        <a href="https://tesla-clone-9ea17.web.app/">Model Y</a>
        <a href="https://tesla-clone-9ea17.web.app/">Solar Roof</a>
        <a href="https://tesla-clone-9ea17.web.app/">Solar Panel</a>
      </div>
      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
        <DehazeIcon />
      </div>
    </div>
  );
}
export default Header;
