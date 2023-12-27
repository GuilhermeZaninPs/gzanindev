import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GZanin Dev',
  description: 'Guilherme Zanin - Frontend portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='./favicon.ico' />
        <link rel='icon' href='./favicon-taskbar.ico' />
        <link rel='icon' href='./favicon-desktop.ico' />
        <link rel='icon' href='./favicon-apple.ico' />
        <link rel='icon' href='./favicon-wordpress.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
