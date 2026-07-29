import type { Metadata } from "next";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://earnit.mobile"),
  title: "EarnIt — Screen time earned, not given",
  description:
    "You're not competing with laziness, you're competing with a phone. EarnIt keeps the games locked until the chores are actually done, proved with a photo. First week free.",
  openGraph: {
    title: "EarnIt — Screen time earned, not given",
    description:
      "Screen time your kid earns with real chores, proved with a photo. First week free.",
    siteName: "EarnIt",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <MetaPixel />
      </body>
    </html>
  );
}
