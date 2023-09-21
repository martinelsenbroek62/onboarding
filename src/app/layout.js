"use client";

import "./globals.css";
import { Lato } from "next/font/google";
import localFont from "next/font/local";
import NavBar from "./layoutComponents/NavBar";
import Footer from "./layoutComponents/Footer";
import { SessionProvider } from "next-auth/react";

const editors_note = localFont({
  src: [
    {
      path: "./fonts/EditorsNoteExtralightItalic.woff2",
      style: "italic",
    },
    {
      path: "./fonts/EditorsNote.woff2",
    },
  ],
  variable: "--font-note",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Do - Connecting Brides + Beauty Pros",
  description:
    "An all-in-one platform connecting brides and beauty pros. From day one to day of, we've got you covered.",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en" className={`${lato.variable} ${editors_note.variable}`}>
      <body>
        <SessionProvider session={session}>
          {/* <NavBar /> */}
          <main className="w-full mx-auto max-w-[1264px] px-8 flex flex-col gap-y-24 tablet:gap-y-[164px]">
            {children}
          </main>
          {/* <Footer /> */}
        </SessionProvider>
      </body>
    </html>
  );
}
