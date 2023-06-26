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
      <body>{children}</body>
    </html>
  );
}
