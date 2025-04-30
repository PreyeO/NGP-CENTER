"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/data/datas";

const FAQ = () => {
  return (
    <section className="bg-white  md:py-24 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-4xl text-3xl font-bold text-blue-900 md:mb-6 mb-3 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-blue-900 font-semibold py-4 px-6 rounded-md bg-white hover:bg-blue-100 transition duration-300 ease-in-out flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="text-blue-500">▼</span>
              </AccordionTrigger>
              <AccordionContent className="bg-white shadow-md rounded-md py-4 px-6 mt-2 text-gray-700 transition-all duration-300 ease-in-out">
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
