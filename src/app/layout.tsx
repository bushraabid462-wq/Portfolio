import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nabiha Abid — UI/UX Designer Portfolio",
  description: "Passionate about creating intuitive digital experiences that connect users with value. Portfolio of Nabiha Abid, UI/UX Designer.",
  keywords: ["UI/UX Designer", "Nabiha Abid", "Product Design", "Figma", "User Experience", "Interface Design"],
  authors: [{ name: "Nabiha Abid" }],
  openGraph: {
    title: "Nabiha Abid — UI/UX Designer Portfolio",
    description: "Passionate about creating intuitive digital experiences that connect users with value.",
    url: "https://nabihaabid.com",
    siteName: "Nabiha Abid Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#EEF3F8] text-[#2B3A4F] font-sans selection:bg-[#3D6A96]/20 selection:text-[#0F1B2D]">
        {children}
      </body>
    </html>
  );
}
