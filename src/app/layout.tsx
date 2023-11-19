import { ThemeContextProvider } from '@/context/ThemeContext';
import { NextAuthProvider } from './NextAuthProvider';
import { ReduxProvider } from '@/store/provider';
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
    <html lang='pl'>
      <body>
        <ThemeContextProvider>
          <NextAuthProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </NextAuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
