import type { Metadata } from "next";
import { Bangers } from "next/font/google";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { WishlistProvider } from "@/lib/wishlist";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AiAssistant } from "@/components/AiAssistant";
import { StickyMobileCta } from "@/components/StickyMobileCta";

const display = Bangers({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});
const body = Comic_Neue({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400","700"],
});

export const metadata: Metadata = {
  title: "PlayNest",
  description: "POW. Longer play. Bigger grins.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-style="pop-art-kids">
      <body className={`${display.variable} ${body.variable} antialiased pb-20 md:pb-0`}>
        <CartProvider slug="playnest-toys">
          <WishlistProvider slug="playnest-toys">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <AiAssistant />
            <StickyMobileCta />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
