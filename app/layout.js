import './globals.css'
import Mycontext from '@/Helper/Context'

export const metadata = {
  title: 'Context-switch',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Mycontext>
        {children}
        </Mycontext>
        </body>
    </html>
  )
}
