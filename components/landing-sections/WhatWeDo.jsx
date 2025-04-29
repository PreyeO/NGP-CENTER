"use client";

import { motion } from "framer-motion";
import { Brain, Book, Users, Shield, Pill, HelpingHand } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Behavioral Counselling",
    icon: <Brain className="w-6 h-6 text-emerald-600" />,
    description:
      "Helping young people break harmful patterns and heal from trauma through licensed one-on-one support.",
  },
  {
    title: "Trauma-Informed Therapy",
    icon: <HelpingHand className="w-6 h-6 text-blue-600" />,
    description:
      "Providing therapeutic support that understands the impact of trauma on young minds and helping them rebuild trust and resilience.",
  },

  {
    title: "Substance Abuse Recovery",
    icon: <Pill className="w-6 h-6 text-red-600" />,
    description:
      "Providing specialized support and rehabilitation for youths struggling with substance abuse, including counseling, detox programs, and long-term recovery planning.",
    bg: "from-red-100 to-red-50",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-[#F4F8FB] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-wide text-emerald-600 font-medium mb-2 text-center"
        >
          Our Approach
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-6 text-center"
        >
          What We Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 max-w-3xl mb-12 text-center mx-auto"
        >
          Every young life has a story. We don’t rescue — we restore. With
          therapy, mentorship, and tangible support, we walk alongside them
          toward wholeness.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-emerald-600 rounded-3xl p-6 shadow-md hover:shadow-lg transition hover:scale-[1.02]"
            >
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white text-base">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.04 }} className="mt-16 text-center">
          <Link
            href="/services"
            className=" cursor-pointer inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-emerald-700 transition"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
