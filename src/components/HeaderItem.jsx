import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  const { routName = "/", title, click, Icon } = props;
  return (
    <>
      <NavLink
        to={routName}
        className="nav-link"
        activeClassName="active-nav"
        onClick={click}
        exact
      >
        <Icon className="nav-icon" />
        <span className="nav-title">{title}</span>
      </NavLink>
    </>
  );
}
export default NavItem;
