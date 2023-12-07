'use client';

import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import { ShoppingBagIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ConfirmOrder() {
  const { setCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <>
      <Navbar fixed />
      <main className="mt-32 bg-white flex justify-center">
        <div className="border border-gray-200 p-8 rounded-xl lg:w-2/4 sm:w-[70%] w-[85%] bg-gray-50">
          <ShoppingBagIcon className="h-10 w-10 flex-shrink-0 text-primary group-hover:text-gray-500 m-auto" />
          <h1 className="text-center text-2xl font-semibold">
            Merci pour votre commande xxxxxxx
          </h1>

          <div className="flex flex-col mt-3">
            <p className="text-center">
              Nous vous avons envoyé une confirmation de commande par mail
            </p>
            <p className="text-center">
              Le magasin de situe au : 1 rue du château 77300 Melun
            </p>
          </div>

          <div className="mt-3">
            <p className="text-center">
              Vous pouvez suivre l'état de la préparation sur votre espace
              client
            </p>
          </div>

          <Link
            href="/produits"
            className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-primary m-auto px-8 py-3 text-base font-medium text-white hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Continuer mes achats
          </Link>
        </div>
      </main>
    </>
  );
}
