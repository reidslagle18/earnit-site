import type { Metadata } from "next";
import MetaPixel from "@/components/MetaPixel";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://earnit.mobile"),
  title: "EarnIt — Phone access earned, not given",
  description:
    "EarnIt locks your child's screen time behind real-world tasks. Kids prove chores with photos and timers, AI verifies, parents approve. First week free.",
  openGraph: {
    title: "EarnIt — Phone access earned, not given",
    description:
      "Screen time your kids earn with real chores, verified with photo proof. First week free.",
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
