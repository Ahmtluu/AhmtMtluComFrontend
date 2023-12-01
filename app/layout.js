import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { Providers } from "./Redux/provider";
import BlurBackground from "@/components/BlurBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AhmtMtlu",
  description: "AhmtMtluCom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <BlurBackground />
        <AppHeader />

        <Providers>{children}</Providers>

        <AppFooter />
      </body>
    </html>
  );
}
