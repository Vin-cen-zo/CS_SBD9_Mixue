import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mixue Ice Cream & Tea — Share Sweetness & Spread Happiness",
  description:
    "Mixue is a popular ice cream and tea brand offering fresh ice cream, real fruit tea, milk tea, and fresh tea at affordable prices. Explore our menu today!",
  keywords: ["Mixue", "ice cream", "milk tea", "fruit tea", "boba", "affordable"],
  openGraph: {
    title: "Mixue Ice Cream & Tea",
    description: "Share Sweetness & Spread Happiness",
    type: "website",
    images: [
      {
        url: "https://mixue.asia/wp-content/uploads/2023/01/mixue-logo.jpg",
        width: 1200,
        height: 628,
        alt: "Mixue Ice Cream & Tea",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
