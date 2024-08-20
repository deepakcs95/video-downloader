import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DownloadDash - Fast & Easy Video Downloads",
  description:
    "Effortlessly download and store your favorite videos with DownloadDash. Fast, easy, and reliable video downloads.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
