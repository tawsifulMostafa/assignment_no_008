import { Geist } from "next/font/google";
import "./globals.css";
import NavPage from "@/Components/Navbar/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme ="light"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body>
           <Toaster position="top-right" richColors />
          <NavPage></NavPage>
        <main>{children}</main>
      </body>
    </html>
  );
}
