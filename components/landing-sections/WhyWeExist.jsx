"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

const WhyWeExist = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        {/* IMAGE / VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative rounded-3xl shadow-2xl overflow-hidden border border-gray-200 h-[420px] md:h-[500px]" // Added height
        >
          <Image
            src="/therapy.png"
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Why We Are Here
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
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
