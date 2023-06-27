import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "IPFS Remove Pin",
  description:
    "One single interface for pinning CIDs to remote pinning services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontFamily: "san-serif", fontSize: "18px" }}>
      <body className="flex flex-col min-h-[100vh] overflow-y-scroll">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
