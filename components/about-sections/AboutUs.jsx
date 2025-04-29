"use client";

import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-16">
        {/* INTRODUCTION with START YEAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded in 2015, NGP Correctional Center has been a beacon of hope
            for youth in crisis. Over the years, we’ve helped hundreds of young
            people break free from cycles of trauma, addiction, and
            incarceration — guiding them toward brighter futures through care,
            structure, and opportunity.
          </p>
        </motion.div>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At NGP Correctional Center, our mission is to be a sanctuary of
            transformation — where troubled youth are not judged by their past
            but embraced for their potential. Through compassionate mentorship,
            therapy, and tailored rehabilitation, we help them build resilience
            and reclaim their future.
          </p>
        </motion.div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We envision a world where no young person is forgotten. Where second
            chances are not rare, but routine. A world where every youth, no
            matter their background, can grow into a thriving adult — confident,
            equipped, and purpose-driven.
          </p>
        </motion.div>

        {/* HOW WE WORK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            How We Work
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We combine structure with heart. Every youth that enters our center
            receives a customized plan that includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-base space-y-2 pl-4">
            <li>One-on-one therapy and trauma recovery sessions</li>
            <li>Educational and vocational training</li>
            <li>Mentorship and role model pairing</li>
            <li>Community reintegration support</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
