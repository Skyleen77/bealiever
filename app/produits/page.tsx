'use client';

import Navbar from '@/components/Navbar';
import useProducts from '@/hooks/useProducts';
import { getPercentage } from '@/utils/discount';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import React, { Fragment, useState } from 'react';

const filters = [
  {
    id: 'etat',
    name: 'État',
    options: [
      { value: 'neuf', label: 'Neuf' },
      { value: 'tresBonEtat', label: 'Très bon état' },
      { value: 'bonEtat', label: 'Bon état' },
      { value: 'satisfaisant', label: 'Satisfaisant' },
      { value: 'abime', label: 'Abimé' },
      { value: 'tresAbime', label: 'Très abimé' },
    ],
  },
  {
    id: 'categories',
    name: 'Catégories',
    options: [
      { value: 'electromenager', label: 'Électroménager' },
      { value: 'culturel', label: 'Culturel' },
      { value: 'vetement', label: 'Vêtement' },
      { value: 'fournitureDeBureau', label: 'Fourniture de bureau' },
    ],
  },
];
// const products = [
//   {
//     id: 1,
//     name: 'Basic Tee 8-Pack',
//     href: '#',
//     basePrice: '256 €',
//     price: '200 €',
//     percent: '20%',
//     description:
//       'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
//     options: 'Neuf',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
//     imageAlt:
//       'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
//   },
//   {
//     id: 2,
//     name: 'Basic Tee',
//     href: '#',
//     price: '22 €',
//     basePrice: '32 €',
//     percent: '20%',
//     description:
//       'Look like a visionary CEO and wear the same black t-shirt every day.',
//     options: 'Très bon état',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
//     imageAlt: 'Front of plain black t-shirt.',
//   },
//   {
//     id: 3,
//     name: 'Basic Tee',
//     href: '#',
//     price: '22 €',
//     basePrice: '32 €',
//     percent: '20%',
//     description:
//       'Look like a visionary CEO and wear the same black t-shirt every day.',
//     options: 'Satisfaisant',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
//     imageAlt: 'Front of plain black t-shirt.',
//   },
//   // More products...
// ];

const Produits = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { data: products } = useProducts();

  console.log('products', products);

  return (
    <div>
      <Navbar fixed />

      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filtres</h2>
                  <button
                    type="button"
                    className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Fermer le menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="border-t border-gray-200 pb-4 pt-4"
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className="w-full px-2">
                            <Disclosure.Button className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                              <span className="text-sm font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex h-7 items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-5 w-5 transform',
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className="px-4 pb-2 pt-4">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pb-10 pt-32">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Produits
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Parcourez les produits invendus des différents commercants.
          </p>
        </div>

        <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <h2 className="sr-only">Filtres</h2>

            <button
              type="button"
              className="inline-flex items-center lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="text-sm font-medium text-gray-700">Filtres</span>
              <PlusIcon
                className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </button>

            <div className="hidden lg:block">
              <form className="space-y-10 divide-y divide-gray-200">
                {filters.map((section, sectionIdx) => (
                  <div
                    key={section.name}
                    className={sectionIdx === 0 ? undefined : 'pt-10'}
                  >
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        {section.name}
                      </legend>
                      <div className="space-y-3 pt-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
              </form>
            </div>
          </aside>

          <section
            aria-labelledby="product-heading"
            className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
          >
            <h2 id="product-heading" className="sr-only">
              Produits
            </h2>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
              {products?.map((product: any) => (
                <div
                  key={product?._id}
                  className="relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <div className="relative group">
                    <div className="aspect-[1/1] bg-gray-200 sm:aspect-none group-hover:opacity-75">
                      <img
                        src={product?.image?.asset?.url}
                        alt={product?.name}
                        className="h-full w-full aspect-[1/1] object-cover object-center sm:h-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-1 flex-col space-y-2 p-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href={`/produits/${product?.slug?.current}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />

                          {product?.name}
                        </a>
                      </h3>

                      <div className="flex flex-1 flex-col justify-end">
                        <p className="text-sm italic text-gray-500">
                          {product?.condition}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-x-3">
                            <p className="text-sm text-gray-600 line-through">
                              {product.basePrice} €
                            </p>
                            <p className="text-base font-medium text-gray-900">
                              {product.discountedPrice} €
                            </p>
                          </div>

                          <p className="text-base font-medium text-primary">
                            {getPercentage(
                              product.basePrice,
                              product.discountedPrice,
                            )}{' '}
                            %
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 w-full">
                    <button className="rounded-md w-full bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Produits;
