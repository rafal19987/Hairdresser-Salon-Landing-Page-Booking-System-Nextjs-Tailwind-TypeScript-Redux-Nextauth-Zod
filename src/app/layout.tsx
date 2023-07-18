import { ThemeContextProvider } from '@/context/ThemeContext';
import Header from '@/components/shared-structures/header/Header';
import Footer from '@/components/shared-structures/footer/Footer';
import { montserrat, permanentMarker } from '@/helpers/typography/fonts';
import './globals.css';

export const metadata = {
  title: 'Męski fryzjer',
  description: 'Męski Fryzjer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <ThemeContextProvider>
          <div className={`${montserrat.variable} ${permanentMarker.variable}`}>
            <div className="flex flex-col items-center justify-between max-w-screen min-h-screen h-full bg-[var(--body-bg-light)] dark:bg-[var(--body-bg-dark)] text-black dark:text-white font-montserrat font-normal overflow-x-hidden">
              <div className="flex flex-col items-center w-full  min-h-screen h-full">
                <Header />
                <main className="flex flex-col items-center grow w-full mt-[var(--header-height)] max-w-[1600px]">
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
