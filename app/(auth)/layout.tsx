import { ClerkProvider } from "@clerk/nextjs";
import { Mulish } from "next/font/google";
import { dark } from "@clerk/themes";
import "../globals.css";
export const metadata = {
  title: "Threads",
  description: "A Next.js Meta Threads Application",
};

const mulish = Mulish({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${mulish.className} bg-dark-1`}>
          <div className="w-full flex justify-center items-center min-h-screen">{children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
