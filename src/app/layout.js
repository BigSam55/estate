import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/component/Navigation/page";
import Footer from "@/component/footer/page";
import Aos from "@/component/aos/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        
         <Aos/>
        {children}

        <Footer/>
        </body>
    </html>
  );
}