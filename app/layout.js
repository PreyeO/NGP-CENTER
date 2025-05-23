import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import MenuBar from "@/components/layouts/MenuBar";
import NavBar from "@/components/layouts/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NGP Correctional Center",
  description: "Restoring hope and rebuilding futures for at-risk youth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}

        <MenuBar />

        <Footer />
      </body>
    </html>
  );
}
