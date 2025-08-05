// app/layout.jsx
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Montserrat, Poppins } from "next/font/google";

// Import Montserrat and Poppins, each as a CSS variable for easiest targeting
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Brookfield International School - New Chandigarh",
  description:
    "Brookfield International School (BFIS) is the top international school in Mohali, Kurali, and Chandigarh, offering excellent education and a nurturing environment.",
  keywords: [
    "international school",
    "Mohali",
    "Chandigarh",
    "Kurali",
    "Brookfield International School",
    "BFIS",
    "education",
  ],
  authors: [{ name: "Brookfield International School" }],
  openGraph: {
    title: "Brookfield International School - New Chandigarh",
    description:
      "Brookfield International School (BFIS) is the top international school in Mohali, Kurali, and Chandigarh, offering excellent education and a nurturing environment.",
    url: "https://www.bfis.in",
    siteName: "Brookfield International School",
    images: [
      {
        url: "/assets/social-preview.png",
        width: 1200,
        height: 630,
        alt: "Brookfield International School Social Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brookfield International School - New Chandigarh",
    description:
      "Brookfield International School (BFIS) is the top international school in Mohali, Kurali, and Chandigarh, offering excellent education and a nurturing environment.",
    site: "@yourtwitterhandle", // Replace with your Twitter
    creator: "@yourtwitterhandle",
    images: ["/assets/social-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} scroll-smooth font-sans`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-background text-foreground">
        {/* This ensures background, header/footer, and modals */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
