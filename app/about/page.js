import AboutUs from "@/components/about-sections/AboutUs";
import Hero from "@/components/about-sections/Hero";
import GetInvolved from "@/components/layouts/CTA";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <AboutUs />
      <GetInvolved />
    </main>
  );
};

export default page;
