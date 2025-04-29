import React from "react";
import NGPLogo from "../ui/logo";
import { Button } from "../ui/button";

const NavBar = () => {
  return (
    <nav className=" bg-green-800 z-50 flex justify-between items-center p-6 ">
      <NGPLogo className="text-white" />

      <Button>Contact Us</Button>
    </nav>
  );
};

export default NavBar;
