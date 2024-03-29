import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CartProvider } from './cart/Cart'

export const metadata = {
  title: 'ECommerce Web Application',
  description: 'Generated by baby_Dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <CartProvider>
      <body>
      <Navbar />
      
      <div className=' relative pt-36'>
      {children}
      </div>
      <Footer />
      </body>
      </CartProvider>
    </html>
  )
}
