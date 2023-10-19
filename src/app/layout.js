import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/list";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
        <footer className="flex items-center justify-center w-full border-t pt-6">
          <p className="flex items-center justify-center">Copyright 2023</p>
        </footer>
      </body>
    </html>
  );
}
