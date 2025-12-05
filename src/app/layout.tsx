import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import styles from "./layout.module.css";

const font = localFont({
  src: "../../public/Liliex.ttf",
});

export const metadata: Metadata = {
  title: "Kevin Py",
  description:
    "Freelance Senior Front-End Developer • Tech Lead • Software Architect",
  authors: [{ name: "Kevin Py" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kevinpy.com",
    siteName: "Kevin Py",
    title: "Kevin Py",
    description:
      "Freelance Senior Front-End Developer • Tech Lead • Software Architect",
    images: [
      {
        url: "https://kevinpy.com/og.png",
        width: 1200,
        height: 630,
        alt: "Kevin Py",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link rel="icon" href="/favicon.png" />
        <script
          defer
          src="https://stats.pyxel.dev/script.js"
          data-website-id="5ccedd78-7478-4929-87d4-f0ad72db90d2"
        ></script>
      </head>
      <body>
        <main className={styles.wrapper}>{children}</main>
      </body>
    </html>
  );
}
