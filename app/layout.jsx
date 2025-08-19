import './globals.css'

export const metadata = {
  title: 'Alpha Squad - Automotive eCommerce Infrastructure',
  description: 'We design the infrastructure that powers parts platforms, aftermarket catalogs, inventory networks, and everything in between.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-grotesque">
      <body className="bg-white text-dark-900 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
