'use client';

import { useCart } from '@/context/CartContext';
import { Dialog } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ];

const Navbar = ({ fixed = false }: { fixed?: boolean }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { status } = useSession();
  const { cart } = useCart();

  return (
    <header
      className={classNames(
        'inset-x-0 top-0 z-50',
        fixed ? 'fixed bg-white border-b border-gray-200' : 'absolute',
      )}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href={status === 'authenticated' ? '/produits' : '/'}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Bealiever</span>
            <img
              className="h-8 w-auto"
              src="/assets/logo/full.svg"
              alt="Bealiever"
            />
          </Link>
        </div>
        <div className="flex lg:hidden gap-x-5">
          {status === 'authenticated' && (
            <Link href="/panier" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                {cart.length}
              </span>
              <span className="sr-only">produits dans le panier</span>
            </Link>
          )}

          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {status === 'unauthenticated' ? (
            <>
              <Link
                href="/auth/sign-in"
                className="text-sm px-3.5 py-2.5 font-semibold leading-2 text-gray-900"
              >
                Connexion
              </Link>
              <Link
                href="/auth/sign-up"
                className="rounded-md bg-primary px-3.5 py-2.5 leading-2 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Inscription
              </Link>
            </>
          ) : status === 'authenticated' ? (
            <>
              <Link href="/panier" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {cart.length}
                </span>
                <span className="sr-only">produits dans le panier</span>
              </Link>

              <Link
                href="/auth/sign-out"
                className="text-sm px-3.5 py-2.5 font-semibold leading-2 text-gray-900"
              >
                Deconnexion
              </Link>
            </>
          ) : null}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Bealiever</span>
              <img
                className="h-8 w-auto"
                src="/assets/logo/full.svg"
                alt="Bealiever"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fermer le menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div> */}
              <div className="py-6">
                <div className="py-6 flex flex-col gap-y-2">
                  {status === 'unauthenticated' ? (
                    <>
                      <Link
                        href="/auth/sign-in"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Connexion
                      </Link>
                      <Link
                        href="/auth/sign-up"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-primary text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Inscription
                      </Link>
                    </>
                  ) : status === 'authenticated' ? (
                    <Link
                      href="/auth/sign-out"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Deconnexion
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
