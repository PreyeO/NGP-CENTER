"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Restoring Hope,
            <br />
            <span className="text-emerald-600">Rebuilding Futures</span>
          </h1>
          <p className="text-gray-700 mt-6 text-lg md:text-xl leading-relaxed">
            NGP Correctional Center supports youth with guidance, therapy, and
            skill-building to reintegrate with confidence and purpose.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button className="bg-emerald-600 text-white px-6 py-6 rounded-full text-sm font-medium shadow hover:bg-emerald-700 transition">
              Learn More
            </Button>
            <Button className="border bg-white border-blue-900 text-blue-900 px-6 py-6 rounded-full text-sm font-medium hover:bg-blue-100 transition">
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
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
