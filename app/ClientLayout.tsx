"use client"

import type React from "react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add inline styles instead of importing globals.css */}
        <style jsx global>{`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          :root {
            --primary: #0081f1;
            --primary-foreground: #ffffff;
            --secondary: #ffffff;
            --secondary-foreground: #0081f1;
          }

          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }

          html,
          body {
            max-width: 100vw;
            overflow-x: hidden;
          }

          body {
            color: #000000;
            background: #ffffff;
          }

          a {
            color: inherit;
            text-decoration: none;
          }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
