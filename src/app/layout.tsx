import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";

const inter = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "marcos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
