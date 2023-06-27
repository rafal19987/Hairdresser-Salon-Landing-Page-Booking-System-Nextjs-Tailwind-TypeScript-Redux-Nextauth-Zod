import Header from '@/components/header/Header';
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
      <body className="flex flex-col items-center justify-between w-screen min-h-screen h-full bg-black">
        <div className="flex grow flex-col items-center w-full max-w-[1600px] h-full">
          <Header />
          <main className="w-full grow bg-white">{children}</main>
        </div>
      </body>
    </html>
  );
}
