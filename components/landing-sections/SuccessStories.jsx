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
    title: "Rebuilding My Life After Addiction",
    name: "Jake Bakere, 19",
    story:
      "Before joining the program, I was lost in drug addiction. The therapy and substance abuse recovery support at NGP Correctional Center gave me the strength to fight my addiction. I’m sober now.",
    image: "/addiction.jpg",
  },
  {
    title: "I  thought I’d never trust anyone again.",
    name: "Ifeoma Okeke., Age 16",
    story:
      "Trauma haunted me for years. But here, I found safety. I found people who genuinely cared. Each therapy session helped me breathe again, and I finally believe I deserve peace.",
    image: "/ifeoma.jpg",
  },
  {
    title: "From Jail to Job: A Second Chance",
    name: "Musa Abubakar, 20",
    story:
      "After spending time incarcerated, I never thought I’d get a second chance. NGP’s rehabilitation program taught me the skills I needed to get back on my feet. Now, I have a stable job.",
    image: "/working.jpg",
  },
  {
    title: "From Despair to Purpose: Finding My Path",
    name: "Godson Thompson, 17",
    story:
      "After years of struggling with anger and poor decisions. The behavioral counseling and conflict resolution workshops thought me how to control my emotions and handle situations with wisdom.",
    image: "/education.jpg",
  },
  {
    title: "Reconnecting with My Family Through Support",
    name: "Sarah Babatunde, 20",
    story:
      "My family was broken, and I didn’t know how to fix it. The family reunification support at NGP helped me repair the strained relationships I had with my family. We now communicate openly. ",
    image: "/family.jpg",
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
                    <p className="text-sm text-gray-500 italic mb-2">
                      {story.name}
                    </p>
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
