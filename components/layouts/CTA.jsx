"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";

const GetInvolved = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
            Be the Change.
            <br />
            <span className="text-emerald-600">Get Involved Today.</span>
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Whether it's your time, voice, or donation — your support fuels our
            mission. Help us restore hope, dignity, and direction in the lives
            of vulnerable youth.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button className="bg-emerald-600 text-white px-6 py-6 rounded-full text-sm font-medium shadow hover:bg-emerald-700 transition">
              Donate Now
            </Button>
            <Button className="border border-blue-900 bg-white text-blue-900 px-6 py-6 rounded-full text-sm font-medium hover:bg-blue-100 transition">
              Become a Volunteer
            </Button>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="relative w-full h-80 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="/hero-image.png" // Replace with your relevant image
              alt="Volunteers and supporters engaging with youth"
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

export default GetInvolved;
