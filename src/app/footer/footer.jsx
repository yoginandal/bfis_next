"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

import Logo from "@/app/components/ui/logo";
import SocalIcons from "@/app/components/ui/socalIcons";
import CopyRight from "@/app/footer/copyRight";
import ScrollUp from "@/app/footer/ScrollUp";
import SlideUp from "@/app/lib/animations/slideUp";
import EnquiryPopup from "@/app/components/sections/EnquiryPopup";
import CallUsStrip from "@/app/footer/CallUsStrip";

const apple = "/assets/images/shapes/apple.svg";
const scissors = "/assets/images/shapes/scissors.svg";
const feeStructure = "/assets/pdf/fee-structure.jpg"; // Update the filename/path accordingly

const restrictedPaths = ["/login", "/admin", "/thankyou", "/contact-us"];

export default function Footer() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const shouldShowEnquiry = !restrictedPaths.some((path) =>
    pathname.startsWith(path)
  );

  useEffect(() => {
    if (!hasOpened && shouldShowEnquiry) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasOpened(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [hasOpened, shouldShowEnquiry]);

  return (
    <footer className="pt-20 bg-black relative">
      <div className="container">
        <div className="grid lg:grid-cols-[300px_auto_auto_268px] sm:grid-cols-2 grid-cols-1 gap-x-7 gap-y-10 justify-between text-center sm:text-left">
          {/* About Section */}
          <SlideUp delay={2}>
            <div>
              <div className="flex justify-center sm:justify-start">
                <Logo
                  className="text-white"
                  style={{
                    filter: "drop-shadow(2px 2px 4px rgba(255 255 255 / 0.5))",
                  }}
                />
              </div>
              <p className="mt-10 text-white opacity-80">
                We cultivate the potential of young minds to excel. Our
                dedication guarantees each child’s utmost growth.
              </p>
            </div>
          </SlideUp>

          {/* Quick Links */}
          <SlideUp delay={3}>
            <div>
              <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-red-600 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-red-600 after:rounded-full after:w-1.5 after:h-1.5" />
              <ul className="mt-5 flex flex-col space-y-2">
                {[
                  { title: "Newsletter", url: "/newsletter" },
                  { title: "CBSE Disclosure", url: "/cbse-disclosure" },
                  { title: "Uniform", url: "/uniform" },
                  { title: "Book List", url: "/books" },
                  { title: "Work With Us", url: "/work-with-us" },
                  { title: "Policies", url: "/policies" },
                ].map(({ title, url }) => (
                  <li key={url}>
                    <Link
                      href={url}
                      className="text-white transition-all duration-500 hover:ml-1 hover:text-red-400"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href={feeStructure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-all duration-500 hover:ml-1 hover:text-red-400"
                  >
                    Fee Structure
                  </a>
                </li>
              </ul>
            </div>
          </SlideUp>

          {/* Contact Section */}
          <SlideUp delay={4}>
            <div>
              <h3 className="text-2xl font-semibold text-white">Contact</h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-red-600 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-red-600 after:rounded-full after:w-1.5 after:h-1.5" />
              <ul className="mt-5 flex flex-col space-y-3 items-center sm:items-start">
                <li
                  role="link"
                  tabIndex={0}
                  onClick={() =>
                    window.open(
                      "https://goo.gl/maps/VrSztaoNVPFTmy4v8",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      window.open(
                        "https://goo.gl/maps/VrSztaoNVPFTmy4v8",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }
                  }}
                  className="flex gap-2 cursor-pointer max-w-[250px] text-white items-start"
                >
                  <FaLocationDot className="mt-[6px]" aria-hidden="true" />
                  <span className="max-w-[220px]">
                    Sheikhpura, New Chandigarh, Kurali, Dist. SAS Nagar, Mohali,
                    Pin 140110
                  </span>
                </li>
                <li className="flex gap-2 items-center text-white">
                  <FaEnvelope aria-hidden="true" />
                  <a
                    href="mailto:info@bfis.in"
                    className="hover:text-red-400"
                    aria-label="Email"
                  >
                    info@bfis.in
                  </a>
                </li>
                <li className="flex gap-2 items-center text-white">
                  <FaPhone aria-hidden="true" />
                  <a
                    href="tel:+919066790662"
                    className="hover:text-red-400"
                    aria-label="Phone"
                  >
                    +91 90667 90662
                  </a>
                </li>
              </ul>
            </div>
          </SlideUp>

          {/* Share Section */}
          <SlideUp delay={5}>
            <div>
              <h3 className="text-2xl font-semibold text-white">Share</h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-background relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-background after:rounded-full after:w-1.5 after:h-1.5" />
              <div className="mt-4 flex justify-center sm:justify-start gap-4">
                <SocalIcons
                  parentClass="gap-5 sm:gap-3 justify-start"
                  className="w-8 h-8 border border-white border-opacity-30 rounded hover:bg-red-600 cursor-pointer"
                />
              </div>
            </div>
          </SlideUp>
        </div>

        <CopyRight color="text-white opacity-80" />
      </div>

      <ScrollUp />

      {/* Enquiry Call-To-Actions */}
      {shouldShowEnquiry && (
        <>
          <CallUsStrip setIsOpen={setIsOpen} />
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-red-500 text-white px-1 py-2 hover:bg-red-600 transition-colors duration-300 font-semibold rounded-r-lg shadow-lg z-50 text-base whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                minWidth: "max-content",
              }}
            >
              Enquire Now
            </button>
          </div>
          <EnquiryPopup isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      )}

      {/* Decorative Images */}
      <div>
        <img
          src={apple}
          alt="Decorative Apple"
          className="pointer-events-none absolute right-[68px] top-[40%] h-auto w-12 animate-up-down"
          aria-hidden="true"
          loading="lazy"
        />
        <img
          src={scissors}
          alt="Decorative Scissors"
          className="pointer-events-none absolute left-[45%] top-[40%] h-auto w-12"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </footer>
  );
}
