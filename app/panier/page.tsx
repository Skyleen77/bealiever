'use client';

import Navbar from '@/components/Navbar';
import { useCart } from '@/context/CartContext';
import useProducts from '@/hooks/useProducts';
import { getCartProducts, getTotal } from '@/utils/cart';
import { getPercentage } from '@/utils/discount';
import { XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ShoppingCart() {
  const router = useRouter();
  const { data: products } = useProducts();
  const { cart, removeFromCart } = useCart();

  const [cartProducts, setCartProducts] = useState<any>([]);

  useEffect(() => {
    if (!products || !cart) return;
    setCartProducts(getCartProducts(products, cart));
  }, [products, cart]);

  return (
    <div>
      <Navbar fixed />

      <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl mt-20 font-bold tracking-tight text-gray-900 sm:text-4xl">
          Votre panier
        </h1>
        <form
          action={() => router.push('/commande')}
          className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
        >
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <ul
              role="list"
              className="divide-y divide-gray-200 border-b border-t border-gray-200 bg-white px-5"
            >
              {cartProducts?.map((product: any, productIdx: number) => (
                <li key={product?._id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product?.image?.asset?.url}
                      alt={product?.name}
                      className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link
                              href={`/produits/${product?.slug?.current}`}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {product?.name}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="text-gray-500">{product?.condition}</p>
                        </div>
                        <div className="mt-1 flex gap-x-3 items-center">
                          <p className="text-sm line-through text-gray-600">
                            {product?.basePrice} €
                          </p>

                          <p className="text-base font-medium text-gray-900">
                            {product?.discountedPrice} €
                          </p>
                        </div>

                        <p className="mt-1 text-base font-medium text-primary">
                          {getPercentage(
                            product.basePrice,
                            product.discountedPrice,
                          )}{' '}
                          %
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label
                          htmlFor={`quantity-${productIdx}`}
                          className="sr-only"
                        >
                          Quantité, {product.name}
                        </label>

                        <div className="absolute right-0 top-0">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              removeFromCart(product?._id);
                            }}
                            className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Supprimer</span>
                            <XMarkIconMini
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Résumé de votre commande
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-medium text-gray-900">Total</dt>
                <dd className="text-base font-medium text-gray-900">
                  {getTotal(cartProducts)} €
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Confirmer votre commande
              </button>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}
