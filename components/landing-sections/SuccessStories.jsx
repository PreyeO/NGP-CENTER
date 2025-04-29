"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const successStories = [
  {
    title: "Overcoming Addiction and Finding Purpose",
    name: "Jake Thompson",
    story:
      "Jake struggled with drug addiction for years. After joining our recovery program, he turned his life around. Today, Jake is sober, enrolled in a vocational training program, and is working toward becoming a counselor to help others battling addiction.",
    image: "/hero-image.jpg",
  },
  {
    title: "Healing from Trauma and Rebuilding a Future",
    name: "Sarah Mitchell",
    story:
      "Sarah entered the program after years of emotional trauma and abuse. Through intensive therapy and mentorship, she found healing and regained confidence. Sarah is now an advocate for mental health and works with survivors of abuse to help them rebuild their lives.",
    image: "/hero-image.png",
  },
  {
    title: "From Jail to Job: A Second Chance",
    name: "Marcus Williams",
    story:
      "Marcus was incarcerated for a crime he deeply regrets. Through our rehabilitation and skill development program, he was able to turn his life around. Marcus now has a stable job, mentors other young men, and is determined to give back to the community that helped him.",
    image: "/hero-image.png",
  },
  {
    title: "Overcoming Addiction and Finding Purpose",
    name: "Jake Thompson",
    story:
      "Jake struggled with drug addiction for years. After joining our recovery program, he turned his life around. Today, Jake is sober, enrolled in a vocational training program, and is working toward becoming a counselor to help others battling addiction.",
    image: "/hero-image.png",
  },
  {
    title: "Healing from Trauma and Rebuilding a Future",
    name: "Sarah Mitchell",
    story:
      "Sarah entered the program after years of emotional trauma and abuse. Through intensive therapy and mentorship, she found healing and regained confidence. Sarah is now an advocate for mental health and works with survivors of abuse to help them rebuild their lives.",
    image: "/hero-image.png",
  },
  {
    title: "From Jail to Job: A Second Chance",
    name: "Marcus Williams",
    story:
      "Marcus was incarcerated for a crime he deeply regrets. Through our rehabilitation and skill development program, he was able to turn his life around. Marcus now has a stable job, mentors other young men, and is determined to give back to the community that helped him.",
    image: "/hero-image.png",
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Our Success Stories
        </motion.h2>

        {/* Carousel Component */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {successStories.map((story, index) => (
              <CarouselItem key={index} className="sm:basis-full lg:basis-1/3">
                <div className="p-4">
                  <div className="bg-gray-50 p-8 rounded-3xl shadow-md hover:shadow-lg transition transform hover:scale-105">
                    <div className="relative w-full h-64 mb-4 rounded-3xl overflow-hidden">
                      <Image
                        src={story.image}
                        alt={`Photo of ${story.name}`}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-700 text-base">{story.story}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessStories;
