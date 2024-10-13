import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/Components/Home/Navbar/ResponsiveNav";
import Footer from "@/Components/Home/Footer/Footer";
import ScrollTotop from "@/Components/Helper/ScrollTotop";
import AnimatedCursor from "react-animated-cursor";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebDev Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custome-scrollbar">
      <body className={`${font.className} ${font.className} antialiased`}>
        <div className="hidden md:block ">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "3px solid white",
            }}
          />
        </div>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollTotop />
      </body>
    </html>
  );
}
