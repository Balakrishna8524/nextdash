import Head from 'next/head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://geist.vercel.app/font.css" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
