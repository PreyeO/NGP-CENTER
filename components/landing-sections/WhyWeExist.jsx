"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

const WhyWeExist = () => {
  return (
    <section
      className="relative md:py-20 py-10 bg-white overflow-hidden"
      id="why-we-exist"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:gap-16 gap-8">
        {/* IMAGE / VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative rounded-3xl shadow-2xl overflow-hidden border border-gray-200  h-50 md:h-[450px]" // Added height
        >
          <Image
            src="/therapy1.jpg"
            alt="Youth in a counseling session or group mentorship"
            layout="fill"
            className="object-cover"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 md:mb-6 mb-3">
            Why We Are Here
          </h2>
          <p className="text-gray-700 md:text-lg text-base md:mb-6 mb-3 leading-relaxed">
            Behind every troubled youth is a story waiting to be rewritten. At
            NGP Correctional Center, we’re here to help them reclaim that story
            — with compassion, structure, and renewed hope.
          </p>
          <p className="text-gray-700 text-base">
            Our purpose is to restore hope and dignity to young lives through
            love, mentorship, and second chances. Together, we guide,
            rehabilitate, and empower at-risk youth with the support systems
            they need to thrive. We envision a world where every youth, no
            matter their past, has a future filled with purpose and promise.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeExist;
