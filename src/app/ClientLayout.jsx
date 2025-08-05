"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/app/header/Header";
import Footer from "@/app/footer/footer";

const bgImage = "/assets/images/webp/bg_img.webp";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  const restrictedPaths = ["/login", "/admin"];
  const hideHeaderFooter = restrictedPaths.some((path) =>
    pathname.startsWith(path)
  );

  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
      className={dark ? "dark" : ""}
    >
      {!hideHeaderFooter && <Header dark={dark} setDark={setDark} />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
