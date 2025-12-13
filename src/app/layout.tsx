import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exitmodal";
import { HeartsModal } from "@/components/modals/heartsmodal";
import { PracticeModal } from "@/components/modals/practicemodal";


const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fluent",
  description: "Learn languages the correct way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.className} antialiased`}>
          <Toaster  />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
