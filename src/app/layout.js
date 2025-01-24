import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/navbar/Navbar";
import Footer from "@/components/Shared/footer/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "car-doctor-pro",
  description: "car repairng work shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Navbar/>
        </div>
        {children}
        <div>
         <Footer/>
        </div>
      </body>
    </html>
  );
}
