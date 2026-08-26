import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
  title: 'Deeba Fatima — Clinical Research & Operations Professional',
  description: 'Personal portfolio & clinical trial operations showcase of Deeba Fatima.',
  icons: {
    icon: '/deeba_avatar.jpg',
    shortcut: '/deeba_avatar.jpg',
    apple: '/deeba_avatar.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/deeba_avatar.jpg" type="image/jpeg" />
        <link rel="shortcut icon" href="/deeba_avatar.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/deeba_avatar.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Sacramento&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#fdf0f3] text-[#2b1424] antialiased selection:bg-[#ff3366] selection:text-white">
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
