// app/layout.js
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import Providers from './providers'; 


export const metadata = {
  title: 'Alvin Yolculuğu Projesi',
  description: 'Karanlık / aydınlık tema ve çoklu dil örneği',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-7xl p-4">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
