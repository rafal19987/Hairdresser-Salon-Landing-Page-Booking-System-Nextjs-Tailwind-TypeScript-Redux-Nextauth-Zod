import { ThemeContextProvider } from '@/context/ThemeContext';
import { NextAuthProvider } from './NextAuthProvider';
import { ReduxProvider } from '@/store/provider';
import { AosProvider } from './AosProvider';
import './globals.css';
import { TailwindIndicator } from '@/components/shared-atoms/TailwindIndicator';

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
            <AosProvider>
              <ReduxProvider>{children}</ReduxProvider>
            </AosProvider>
            <TailwindIndicator />
          </NextAuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
