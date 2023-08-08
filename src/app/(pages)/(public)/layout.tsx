import Header from '@/components/shared-structures/header/Header';
import Footer from '@/components/shared-structures/footer/Footer';
import { montserrat, permanentMarker, lato } from '@/helpers/typography/fonts';

export default function PublicRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${montserrat.variable} ${permanentMarker.variable} ${lato.variable}`}
    >
      <div className="flex flex-col items-center justify-between max-w-screen min-h-screen h-full bg-[var(--body-bg-light)] dark:bg-[var(--body-bg-dark)] text-black dark:text-white font-montserrat font-normal overflow-x-hidden">
        <div className="flex flex-col items-center w-full  min-h-screen h-full">
          <Header />
          <main className="flex flex-col items-center grow w-full mt-[var(--header-height)] max-w-[1170px]">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
