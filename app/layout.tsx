// app/layout.tsx
import "./globals.css"; 
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-poppins',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}> 
      <body className="font-poppins antialiased overflow-x-hidden" suppressHydrationWarning={true}> 
        
        <header className="fixed top-0 left-0 w-full z-50">
          <TopBar />
          <Navbar />
        </header>
        
        <main className="pt-[60px] md:pt-[70px] lg:pt-[100px]">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}