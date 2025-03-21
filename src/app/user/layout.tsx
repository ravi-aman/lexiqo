import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; 


import {
  ClerkProvider,
} from "@clerk/nextjs";
// import Header2 from "";
import Footer from "components/Footer";
import Header2 from "components/Header2";

const inter = Inter({ subsets: ["latin"] });

const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!clerkKey) {
  throw new Error("Missing Clerk publishableKey. Ensure the environment variable is set.");
}

export const metadata: Metadata = {
  title: "Trinetaa", 
  description: "we provide all type residential and commercial space", 
  icons: {
    icon: "/public//favicon.ico",
    shortcut: "/trinatraalandscape.png",
    apple: "/trinatraalandscape.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={clerkKey}>
      <html lang="en" className="">
        <head>
          {/* Meta and icon tags */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/Rk-white.png" />
          <link rel="shortcut icon" href="/Rk-white.png" />
        </head>
        <body className={inter.className}>
          <div className="flex min-h-screen flex-col bg-white">
            <Header2 />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
