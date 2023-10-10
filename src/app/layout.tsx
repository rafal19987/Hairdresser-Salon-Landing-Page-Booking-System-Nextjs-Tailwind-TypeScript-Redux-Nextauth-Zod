import { ThemeContextProvider } from '@/context/ThemeContext';
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
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
