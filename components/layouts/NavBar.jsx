import React from "react";
import NGPLogo from "../ui/logo";
import { Button } from "../ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" bg-green-800 z-50 flex justify-between items-center p-6 ">
      <NGPLogo className="text-white" />
      <Link href="/contact">
        <Button>Contact Us</Button>
      </Link>
    </nav>
  );
};

export default NavBar;
