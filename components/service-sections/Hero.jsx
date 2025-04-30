"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-12">
        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Restoring Hope Through Every Service We Offer
          </h1>
          <p className="text-gray-700 mt-6 text-base md:text-xl leading-relaxed">
            We offer a range of services designed to support, educate, and
            empower youth. Learn more about our impact.
          </p>
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
              src="/services.jpg"
              alt="Services Image"
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
