"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (formRef.current) {
      // Set the time dynamically
      const timeInput = formRef.current.querySelector("input[name='time']");
      if (timeInput) {
        timeInput.value = new Date().toLocaleString();
      }

      emailjs
        .sendForm(
          "service_j80ywhw", // Replace with your actual service ID
          "template_fgdszer", // Replace with your actual template ID
          formRef.current,
          "7F1UyTEgRwv7kwgkj" // Replace with your EmailJS public key
        )
        .then(
          (result) => {
            console.log("Success:", result.text);
            toast.success(
              "Hello, your Message has been received. We will get back to you shortly!"
            );
            formRef.current.reset();
          },
          (error) => {
            console.error("Failed:", error.text);
            alert("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-emerald-50 py-12 md:py-24">
      <div className="max-w-5xl mx-auto md:px-6 px-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-md md:p-10 p-8 rounded-3xl shadow-2xl border border-gray-100"
        >
          <h2 className="text-xl md:text-4xl font-semibold text-blue-900 text-center mb-5 md:mb-10">
            Let’s talk
          </h2>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6"
          >
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-2 md:px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full  px-2 md:px-4  py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Subject (maps to {{title}} in template) */}
            <div className="md:col-span-2">
              <label
                htmlFor="subject"
                className="block text-gray-700 mb-2 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="title"
                className="w-full  px-2 md:px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full  px-2 md:px-4  py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Hidden Time Input */}
            <input type="hidden" name="time" />

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-3  md:mt-6">
              <Button
                type="submit"
                className="  cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 rounded-full shadow-md transition duration-300"
              >
                Send Message
              </Button>
            </div>
            <ToastContainer
              position="bottom-center"
              toastClassName={() =>
                "bg-emerald-600 text-white font-medium rounded-lg shadow-lg"
              }
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
