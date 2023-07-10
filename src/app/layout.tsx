import Header from '@/components/shared-structures/header/Header';
import Footer from '@/components/shared-structures/footer/Footer';
import { Montserrat } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Męski fryzjer',
  description: 'Męski Fryzjer',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['italic', 'normal'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${montserrat.className} flex flex-col items-center justify-between w-screen min-h-screen h-full bg-[var(--body-bg-dark)] text-[var(--primary-text-color)] font-normal overflow-x-hidden`}
      >
        <div className="flex flex-col items-center w-full max-w-[1600px] min-h-screen h-full">
          <Header />
          <main className="flex flex-col items-center grow w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
