// Cambios en layout.tsx

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// Define tu componente RootLayout aquí
export function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

// Exporta tu componente RootLayout como default
export default RootLayout;
