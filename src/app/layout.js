// app/layout.js
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import { ThemeProvider } from './providers/ThemeProvider';

export const metadata = {
  title: 'Alvin Yolculuğu Projesi',
  description: 'Karanlık / aydınlık tema örneği',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto max-w-7xl p-4">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
