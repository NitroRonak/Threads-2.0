import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/Components/shared/Topbar";
import LeftSidebar from "@/Components/shared/LeftSidebar";
import RightSidebar from "@/Components/shared/RightSidebar";
import Bottombar from "@/Components/shared/Bottombar";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js Meta Threads Application",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={mulish.className}>
          <Topbar/>
          <main className="flex flex-row">
            <LeftSidebar/>

            <section className="main-container">
              <div className="w-full max-w-4xl">
                {children}
              </div>
            </section>

            <RightSidebar/>
          </main>
          <Bottombar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
