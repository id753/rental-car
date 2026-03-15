import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import { Header } from "../components/Header/Header";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rental Car | Reliable and budget-friendly rentals",
  description:
    "Find your perfect rental car in Ukraine. We offer reliable, budget-friendly car rentals for any journey with a wide selection of vehicles.",

  openGraph: {
    title: "Rental Car | Best Car Rental Service",
    description:
      "Wide selection of cars for any journey. Fast booking and reliable service.",
    url: "https://your-project-url.vercel.app", // Заменить на  реальный URL после деплоя
    siteName: "Rental Car",
    images: [
      {
        url: "/back-img-homepage-car.jpg",
        width: 1200,
        height: 630,
        alt: "Rental Car Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeSans.variable} ${interSans.variable}`}>
        <TanStackProvider>
          <Header />
          <div className="page-wrapper">
            <main>{children}</main>
          </div>

          {/* <footer></footer> */}
        </TanStackProvider>
      </body>
    </html>
  );
}
