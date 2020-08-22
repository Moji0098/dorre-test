import React from "react";

//components
import HeaderItem from "./HeaderItem";

//icons
import { AccountTree, Apartment } from "@material-ui/icons";
const Header = () => {
  return (
    <div className="header">
      <HeaderItem title="" routName="/pageone" Icon={Apartment} />
      <HeaderItem title="Organization" routName="/" Icon={AccountTree} />
    </div>
  );
};

export default Header;
