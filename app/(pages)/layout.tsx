import "./globals.css";
import { Red_Hat_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${redHatDisplay.className} bg-[var(--background-primary)] text-[var(--content-body)] antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-XYZ" />
    </html>
  );
}
