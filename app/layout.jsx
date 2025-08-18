import './globals.css'

export const metadata = {
  title: 'Alpha Squad - Automotive eCommerce Infrastructure',
  description: 'We design the infrastructure that powers parts platforms, aftermarket catalogs, inventory networks, and everything in between.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-dark-900 antialiased">
        <link
          href="https://api.fontshare.com/v2/css?f[]=basement-grotesque@400,700&display=swap"
          rel="stylesheet"
        />
        {children}
      </body>
    </html>
  )
}
