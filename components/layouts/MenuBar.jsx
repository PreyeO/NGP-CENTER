"use client";
import { useState } from "react";
import Link from "next/link"; // Use Next.js Link component for page navigation
import { menuItems } from "@/data/datas";
import { Button } from "../ui/button";

const MenuBar = () => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] md:w-[700px] bg-[#ffffff]/40 backdrop-blur-lg flex items-center justify-between shadow-xl md:p-4 p-2 rounded-full border border-[#059669]">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href} // Use href for page navigation
          passHref
          className={`relative text-emerald-600 hover:text-[#3B82F6] transition-all md:px-4 px-1 py-2 text-sm md:text-base cursor-pointer font-bold ${
            activeSection === item.href && "text-[#059669] font-semibold"
          }`}
          onClick={() => setActiveSection(item.href)} // Update active section on click
        >
          {item.label}
          {activeSection === item.href && (
            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-[3px] bg-[#059669]" />
          )}
        </Link>
      ))}
      <Button className="cursor-pointer  bg-gradient-to-r from-[#059669] to-[#3B82F6] text-white mx-12 py-4 rounded-full border-2 border-[#ea9fa8] transition-all hover:scale-105 hover:from-[#3B82F6] hover:to-[#059669] hover:bg-opacity-80 hover:border-[#3B82F6]">
        Contact Us
      </Button>
    </nav>
  );
};

export default MenuBar;
