import React from "react";
import NGPLogo from "../ui/logo";
import { Button } from "../ui/button";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className=" bg-green-800 z-50 flex justify-between items-center md:p-6 p-4 ">
      <NGPLogo className="text-white" />
      <Link href="/contact">
        <Button className="cursor-pointer md:py-6 md:px-6 px-3 py-3">
          Contact Us
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
