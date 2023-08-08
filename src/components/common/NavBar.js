import React from "react";
import { Menu } from "semantic-ui-react";
import { logo } from "../contants/constants";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Menu borderless fixed="top" style={{ backgroundColor: "#d6e2ea" }} className="navbar">
        <Menu.Item as={Link} to="/" className="nav-li">
          <img src={logo} alt="logo" style={{ width: 100 }} />
        </Menu.Item>
        <Menu.Item name="Home" as={Link} to="/" className="nav-li" />
        <Menu.Item name="Recipe" as={Link} to="/recipes" className="nav-li" />
      </Menu>
    </>
  );
}

export default NavBar;
