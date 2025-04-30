"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { scroller } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between md:gap-12 gap-6">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-lg"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight md:text-left text-center">
            Restoring Hope,
            <br />
            <span className="text-emerald-600">Rebuilding Futures</span>
          </h1>
          <p className="text-gray-700 md:mt-6 mt-3 text-lg md:text-xl leading-relaxed">
            NGP Correctional Center supports youth with guidance, therapy, and
            skill-building to reintegrate with confidence and purpose.
          </p>
          <div className="md:mt-8 mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button
              onClick={() =>
                scroller.scrollTo("why-we-exist", {
                  duration: 800,
                  delay: 0,
                  smooth: "easeInOutQuart",
                  offset: -70,
                })
              }
              className=" cursor-pointer bg-emerald-600 text-white md:px-8 py-6 px-20 rounded-full text-sm font-medium shadow hover:bg-emerald-700 transition"
            >
              Learn More
            </Button>
            <Link href="/contact">
              <Button className="cursor-pointer border bg-white border-blue-900 text-blue-900 md:px-8 px-20  py-6 rounded-full text-sm font-medium hover:bg-blue-100 transition">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative w-full h-50 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="/hero-image.png"
              alt="Photo of a mentor guiding a young person with hope and care"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
