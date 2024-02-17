import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/Components/shared/Topbar";
import LeftSidebar from "@/Components/shared/LeftSidebar";
import RightSidebar from "@/Components/shared/RightSidebar";
import Bottombar from "@/Components/shared/Bottombar";
import { dark } from "@clerk/themes";
import "../globals.css"
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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={mulish.className}>
          <Topbar />
          <main className="flex flex-row">
            <LeftSidebar />

            <section className="flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
              <div className="w-full max-w-4xl">{children}</div>
            </section>

            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
