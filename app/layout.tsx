import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bealiever',
  description: "Découvrez notre application de vente en ligne dédiée aux produits non-alimentaires, tout en étant respectueuse de l'environnement. Optez pour un mode de vie responsable en choisissant des produits abîmés, mais toujours aussi fonctionnels, conçus dans le respect de l'éthique environnementale et sociale. Explorez notre catalogue varié et faites des achats éco-conscients facilement grâce à notre application conviviale. Rejoignez-nous pour contribuer à un monde plus vert et éthique.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
