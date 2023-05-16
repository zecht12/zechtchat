import './globals.css'
import AuthContext from './context/AuthContext'

export const metadata = {
  title: 'ZechtChat',
  description: 'ZechtChat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <
          {children}
        </AuthContext>
      </body>
    </html>
  )
}