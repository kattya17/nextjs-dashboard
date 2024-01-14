// Cambios en layout.tsx

import '@/app/ui/global.css';
// app/layout.tsx

import { ReactNode } from 'react';

// Define tu componente RootLayout aquí
const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

// Esta función se utilizará para obtener el diseño en las páginas
const getLayout = (page: ReactNode) => <RootLayout>{page}</RootLayout>;

// Exporta tanto el componente RootLayout como la función getLayout
export { getLayout, RootLayout };
