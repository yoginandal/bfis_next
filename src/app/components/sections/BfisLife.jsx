"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Eye } from "lucide-react";
import WordPullUp from "@/app/components/ui/word-pull-up";
import Image from "next/image";

// Use public folder paths for images (place your images inside `publicassets/images/` and `publicassets/events/...`)
const galleryItems = [
  {
    id: 1,
    title: "Robotics Lab Inauguration",
    date: "9 Feb 2024",
    image: "/assets/images/robotics_lab.jpg",
    size: "large",
  },
  {
    id: 2,
    title: "MoU Signing Ceremony",
    date: "24 Jan 24",
    image: "/assets/images/mou.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "MEET THE COMMUNITY HELPERS",
    date: "10 Sept 2024",
    image: "/assets/events/10Sept2024/img1.jpg",
    size: "small",
  },
  {
    id: 5,
    title: "JOY OF NATIONAL PRABH AASHA",
    date: "5 Sept 2024",
    image: "/assets/images/parbha.jpg",
    size: "small",
  },
  {
    id: 6,
    title: "Teacher's Day Celebration",
    date: "5 Sept 2024",
    image: "/assets/images/extra.jpg",
    size: "small",
  },
  {
    id: 7,
    title: "Sports Activity",
    date: "29 Aug 2024",
    image: "/assets/images/lifeOne.jpg",
    size: "small",
  },
];

const BfisLife = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const router = useRouter();

  return (
    <div className="container mx-auto p-4 space-y-4">
      <WordPullUp
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 font-roboto mb-12"
        words="BFIS Life"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-lg ${
              item.size === "large"
                ? "md:col-span-2 md:row-span-2"
                : item.size === "banner"
                ? "col-span-full"
                : ""
            }`}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover w-full h-full"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={item.size === "large"}
              />

              {item.size !== "banner" && (
                <motion.div
                  initial={false}
                  animate={{
                    clipPath:
                      hoveredId === item.id
                        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                        : "polygon(0 0, 50% 0, 0 50%, 0 0)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/50 flex flex-col justify-between p-4"
                >
                  <div className="text-white">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    {item.date && (
                      <p className="text-sm text-red-200">{item.date}</p>
                    )}
                  </div>

                  {/* Eye Icon and Buttons */}
                  <div className="flex justify-between items-center">
                    <div
                      className="flex items-center gap-2 cursor-pointer text-white hover:text-red-200 transition-colors select-none"
                      onClick={() => router.push("/events")}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) =>
                        (e.key === "Enter" || e.key === " ") &&
                        router.push("/events")
                      }
                      aria-label={`Read more about ${item.title}`}
                    >
                      <Eye className="h-5 w-5" />
                      <span>Read</span>
                    </div>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded font-medium hover:bg-red-700 transition-colors select-none"
                      onClick={() => router.push("/events")}
                      type="button"
                      aria-label={`More details about ${item.title}`}
                    >
                      + More
                    </button>
                  </div>
                </motion.div>
              )}

              {item.size === "banner" && (
                <div className="absolute inset-0 bg-red-600 -z-10 flex items-center justify-center p-4">
                  <h3 className="text-white font-bold text-center text-lg">
                    {item.title}
                  </h3>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BfisLife;
