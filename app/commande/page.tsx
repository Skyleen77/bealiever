'use client';

import { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import Navbar from '@/components/Navbar';
import { getCartProducts, getTotal } from '@/utils/cart';
import useProducts from '@/hooks/useProducts';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const deliveryMethods = [
  {
    id: 1,
    title: 'Retrait en magasin',
    turnaround: 'Sous 24h',
    price: 'Gratuit',
  },
  {
    id: 2,
    title: 'Livraison en point relais',
    turnaround: 'Sous 72h',
    price: '4,99 €',
  },
];
const paymentMethods = [
  { id: 'credit-card', title: 'Carte bleu' },
  { id: 'paypal', title: 'PayPal' },
];

export default function Checkout() {
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0],
  );
  const [cartProducts, setCartProducts] = useState<any>([]);

  const router = useRouter();
  const { cart } = useCart();
  const { data: products } = useProducts();

  useEffect(() => {
    if (!products || !cart) return;
    setCartProducts(getCartProducts(products, cart));
  }, [products, cart]);

  return (
    <>
      <Navbar fixed />

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 mt-20">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <h1 className="sr-only">Commander</h1>

          <form
            action={() => {
              router.push('/commande/succes');
            }}
            className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
          >
            <div>
              <div>
                <RadioGroup
                  value={selectedDeliveryMethod}
                  onChange={setSelectedDeliveryMethod}
                >
                  <RadioGroup.Label className="text-lg font-medium text-gray-900">
                    Mode de livraison
                  </RadioGroup.Label>

                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                    {deliveryMethods.map((deliveryMethod) => (
                      <RadioGroup.Option
                        key={deliveryMethod.id}
                        value={deliveryMethod}
                        className={({ checked, active }) =>
                          classNames(
                            checked ? 'border-transparent' : 'border-gray-300',
                            active ? 'ring-2 ring-primary' : '',
                            'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
                          )
                        }
                      >
                        {({ checked, active }) => (
                          <>
                            <span className="flex flex-1">
                              <span className="flex flex-col">
                                <RadioGroup.Label
                                  as="span"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  {deliveryMethod.title}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className="mt-1 flex items-center text-sm text-gray-500"
                                >
                                  {deliveryMethod.turnaround}
                                </RadioGroup.Description>
                                <RadioGroup.Description
                                  as="span"
                                  className="mt-6 text-sm font-medium text-gray-900"
                                >
                                  {deliveryMethod.price}
                                </RadioGroup.Description>
                              </span>
                            </span>
                            {checked ? (
                              <CheckCircleIcon
                                className="h-5 w-5 text-primary"
                                aria-hidden="true"
                              />
                            ) : null}
                            <span
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked
                                  ? 'border-primary'
                                  : 'border-transparent',
                                'pointer-events-none absolute -inset-px rounded-lg',
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Payment */}
              <div className="mt-10 border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">
                  Mode de paiement
                </h2>

                <fieldset className="mt-4">
                  <legend className="sr-only">Moyen de paiement</legend>
                  <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                      <div key={paymentMethod.id} className="flex items-center">
                        {paymentMethodIdx === 0 ? (
                          <input
                            id={paymentMethod.id}
                            name="payment-type"
                            type="radio"
                            defaultChecked
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                        ) : (
                          <input
                            id={paymentMethod.id}
                            name="payment-type"
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                          />
                        )}

                        <label
                          htmlFor={paymentMethod.id}
                          className="ml-3 block text-sm font-medium text-gray-700"
                        >
                          {paymentMethod.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>

            {/* Order summary */}
            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-gray-900">
                Résumé de votre commande
              </h2>

              <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                <h3 className="sr-only">Produits dans le panier</h3>
                <ul role="list" className="divide-y divide-gray-200">
                  {cartProducts.map((product: any) => (
                    <li key={product?._id} className="flex px-4 py-6 sm:px-6">
                      <div className="flex-shrink-0">
                        <img
                          src={product?.image?.asset?.url}
                          alt={product?.name}
                          className="w-20 aspect-1 object-cover rounded-md"
                        />
                      </div>

                      <div className="ml-6 flex flex-1 flex-col">
                        <div className="flex">
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm">
                              <Link
                                href={`/produits/${product?.slug?.current}`}
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {product?.name}
                              </Link>
                            </h4>
                            <p className="mt-1 text-sm text-gray-500">
                              {product?.condition}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-1 items-end justify-between pt-2">
                          <div className="flex items-center gap-x-3">
                            <p className="text-sm text-gray-600 line-through">
                              {product.basePrice} €
                            </p>
                            <p className="text-base font-medium text-gray-900">
                              {product.discountedPrice} €
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-base font-medium">Total</dt>
                    <dd className="text-base font-medium text-gray-900">
                      {getTotal(cartProducts)} €
                    </dd>
                  </div>
                </dl>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-primary px-4 py-3 text-base font-medium text-white shadow-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
