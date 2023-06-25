import "@/app/scss/globals.css";
import "@/app/scss/index.scss";

import type { AppProps } from "next/app";
import { raleway, firaCode } from "./fonts";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
