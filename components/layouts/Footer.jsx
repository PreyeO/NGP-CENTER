"use client";

import { motion } from "framer-motion";
import NGPLogo from "../ui/logo";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white md:py-16 p-8"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 md:gap-12 gap-6 text-center lg:text-left">
        {/* Logo Section */}
        <div className="flex justify-center lg:justify-start mb-3 lg:mb-0">
          <NGPLogo className="text-white" />
        </div>

        {/* About Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="md:text-2xl text-xl font-semibold text-gray-300 md:mb-4 mb-2">
            About NGP
          </h3>
          <p className="md:text-lg text-base text-gray-300">
            NGP Correctional Center offers mentorship and skill-building
            programs for youth to help them reintegrate into society with
            confidence and purpose.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="md:text-2xl text-xl font-semibold text-gray-300 mb-3 md:mb-4">
            Contact Us
          </h3>
          <p className="md:text-lg text-base font-medium text-gray-200">
            102 First Gate, Festac Town, 102102, Lagos, Nigeria
          </p>
          <p className="md:text-lg text-base font-medium text-gray-200">
            <a
              href="mailto:contact@npgcenter.org"
              className="text-emerald-400 hover:underline"
            >
              contact@npgcenter.org
            </a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center md:mt-12 mt-6 border-t border-gray-700 md:pt-6 pt-3">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} NGP Correctional Center. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
