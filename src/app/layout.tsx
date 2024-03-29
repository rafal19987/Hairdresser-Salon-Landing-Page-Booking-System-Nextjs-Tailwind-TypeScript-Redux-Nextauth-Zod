import { ThemeContextProvider } from '@/context/ThemeContext';
import { NextAuthProvider } from './NextAuthProvider';
import { ReduxProvider } from '@/store/provider';
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
            <ReduxProvider>{children}</ReduxProvider>
            <TailwindIndicator />
          </NextAuthProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
