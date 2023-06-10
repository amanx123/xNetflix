
import './globals.css'
import Provider from './Provider'
export const metadata = {
  title: 'Netflix',
  description: 'Best OTT platform in the world',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
