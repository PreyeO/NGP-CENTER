"use client";

import { motion } from "framer-motion";
import { Brain, Book, Users, Shield, Pill, HelpingHand } from "lucide-react";

const serviceCategories = [
  {
    category: "Therapy & Mental Health Support",
    services: [
      {
        title: "Behavioral Counselling",
        icon: <Brain className="w-6 h-6 text-emerald-600" />,
        description:
          "Our licensed behavioral counselors work closely with at-risk youth to help them unlearn destructive habits and develop healthier coping mechanisms. Through tailored one-on-one sessions, we address issues like aggression, anxiety, and low self-worth.",
      },
      {
        title: "Trauma-Informed Therapy",
        icon: <HelpingHand className="w-6 h-6 text-blue-600" />,
        description:
          "Our trauma-informed therapists recognize the deep emotional wounds many of our youths carry. We offer therapeutic environments where they can safely unpack, rebuild trust, and develop emotional resilience rooted in compassion and clinical best practices.",
      },
      {
        title: "Substance Abuse Recovery",
        icon: <Pill className="w-6 h-6 text-red-600" />,
        description:
          "Addiction doesn’t define their future. We offer detox support, recovery counseling, and peer support tailored for youths fighting substance abuse — helping them reclaim agency over their bodies and lives.",
      },
    ],
  },
  {
    category: "Family & Social Reintegration",
    services: [
      {
        title: "Family Reunification Support",
        icon: <Users className="w-6 h-6 text-indigo-600" />,
        description:
          "Broken homes can heal. We work with families and guardians to mend strained relationships, rebuild trust, and foster environments that welcome restored connection through mediation, therapy, and structured family time.",
      },
      {
        title: "Conflict Resolution Training",
        icon: <Shield className="w-6 h-6 text-purple-600" />,
        description:
          "We teach young people how to de-escalate conflict, regulate their emotions, and navigate peer pressure through guided workshops and real-life simulations — turning reaction into reflection.",
      },
    ],
  },
  {
    category: "Education & Future Planning",
    services: [
      {
        title: "Educational Advancement",
        icon: <Book className="w-6 h-6 text-yellow-600" />,
        description:
          "We connect youth with tailored learning programs, scholarships, and tutoring support — helping them finish school, explore vocational paths, and rediscover a love for learning beyond past failures.",
      },
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-[#F4F8FB] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-4 text-center"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-700 max-w-3xl mb-12 text-center mx-auto"
        >
          At NGP Correctional Center, we offer more than interventions — we
          offer transformation. Each service is intentionally designed to
          address the root issues affecting youth and build a stronger future,
          step by step.
        </motion.p>

        {serviceCategories.map((group, i) => (
          <div key={group.category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold text-emerald-700 mb-6 border-b border-emerald-200 pb-2"
            >
              {group.category}
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {group.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition hover:scale-[1.02]"
                >
                  <div className="bg-emerald-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
