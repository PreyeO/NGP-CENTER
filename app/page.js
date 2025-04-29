import FAQ from "@/components/landing-sections/FAQ";
import Hero from "@/components/landing-sections/Hero";
import SuccessStories from "@/components/landing-sections/SuccessStories";
import WhatWeDo from "@/components/landing-sections/WhatWeDo";
import WhyWeExist from "@/components/landing-sections/WhyWeExist";
import GetInvolved from "@/components/layouts/CTA";
// import NGPLogo from "@/components/ui/logo";

export default function Home() {
  return (
    <main>
      {/* <NGPLogo /> */}
      <Hero />
      <WhyWeExist />
      <WhatWeDo />
      <SuccessStories />
      <GetInvolved />
      <FAQ />
    </main>
  );
}
