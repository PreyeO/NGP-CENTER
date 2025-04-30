"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const GetInvolved = () => {
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-white md:py-24 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between md:gap-16 gap-8">
        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 md:mb-6 mb-3 leading-tight">
            Be the Change.
            <br />
            <span className="text-emerald-600">Get Involved Today.</span>
          </h2>
          <p className="text-gray-700 md:text-lg text-base md:mb-8 mb-4 leading-relaxed">
            Whether it's your time, voice, or donation — your support fuels our
            mission. Help us restore hope, dignity, and direction in the lives
            of vulnerable youth.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link href="/contact">
              <Button className="cursor-pointer bg-emerald-600 text-white md:px-6 py-6 px-20 rounded-full text-sm font-medium shadow hover:bg-emerald-700 transition">
                Donate Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="cursor-pointer border border-blue-900 bg-white text-blue-900 md:px-6 py-6 px-14 rounded-full text-sm font-medium hover:bg-blue-100 transition">
                Become a Volunteer
              </Button>
            </Link>
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
          <div className="relative w-full h-50 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="/hands.jpg" // Replace with your relevant image
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
