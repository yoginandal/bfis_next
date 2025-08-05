"use client";

import { FaPhone } from "react-icons/fa6";

const CallUsStrip = ({ setOpen }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    /* Visible only on mobile */
    <div className="fixed bottom-0 left-0 right-0 z-50 block md:hidden shadow-lg">
      <div className="flex">
        {/* Enquire Now Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-center text-white font-semibold cursor-pointer hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Open enquiry form"
        >
          Enquire Now
        </button>

        {/* Call Us Link */}
        <a
          href="tel:+919066790662"
          className="flex-1 bg-red-600 p-4 text-center text-white font-semibold hover:bg-red-700 transition-colors duration-300 flex justify-center items-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          aria-label="Call us at +91 90667 90662"
        >
          <FaPhone className="text-xl" aria-hidden="true" />
          Call Us
        </a>
      </div>
    </div>
  );
};

export default CallUsStrip;
