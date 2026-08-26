import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Deeba Fatima — Clinical Research & Operations Professional',
  description: 'Personal portfolio & clinical trial operations showcase of Deeba Fatima.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Sacramento&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#fdf0f3] text-[#2b1424] antialiased selection:bg-[#ff3366] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
