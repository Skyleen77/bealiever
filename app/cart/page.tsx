"use client";

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon as XMarkIconOutline,
} from '@heroicons/react/24/outline'
import Navbar from '@/components/Navbar';
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import classNames from 'classnames';


//TODO : intégrer des potentiels produits dans le Sanity
const products = [
    {
        id: 1,
        name: 'L\'Art de la Guerre, Sun Tzu',
        href: '#',
        price: '20.90€',
        inStock: true,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Livre l'art de la guerre de Sun Tzu",
    },
    {
        id: 2,
        name: 'Stylo BIC 4 couleurs',
        href: '#',
        price: '0.99€',
        color: 'Bleu',
        inStock: false,
        leadTime: '3–4 jours',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
        imageAlt: "Stylo BIC 4 couleurs bleu",
    },
    {
        id: 3,
        name: 'Polo Lacoste Homme',
        href: '#',
        price: '45.00€',
        color: 'Noir',
        size: 'M',
        inStock: true,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
        imageAlt: 'Polo Lacoste pour Homme Noir',
    },
]

export default function ShoppingCart() {
    const [open, setOpen] = useState(false)
    return (
        <div className="">

            <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <div
                    className="fixed inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 opacity-50"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className="fixed inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] opacity-50"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <Navbar />

                <h1 className="text-3xl mt-12 font-bold tracking-tight text-gray-900 sm:text-4xl">Votre panier</h1>
                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200 bg-white rounded-lg px-5">
                            {products.map((product, productIdx) => (
                                <li key={product.id} className="flex py-6 sm:py-10">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm">
                                                        <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                                            {product.name}
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="mt-1 flex text-sm">
                                                    <p className="text-gray-500">{product.color}</p>
                                                    {product.size ? (
                                                        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{product.size}</p>
                                                    ) : null}
                                                </div>
                                                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                            </div>

                                            <div className="mt-4 sm:mt-0 sm:pr-9">
                                                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                                                    Quantity, {product.name}
                                                </label>

                                                <div className="absolute right-0 top-0">
                                                    <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                                                        <span className="sr-only">Remove</span>
                                                        <XMarkIconMini className="h-5 w-5" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                            {product.inStock ? (
                                                <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                                            ) : (
                                                <ClockIcon className="h-5 w-5 flex-shrink-0 text-gray-300" aria-hidden="true" />
                                            )}

                                            <span>{product.inStock ? 'En stock' : `Envoi sous ${product.leadTime}`}</span>
                                        </p>
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
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                            Résumé de votre commande
                        </h2>

                        <dl className="mt-6 space-y-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-600">Sous-total</dt>
                                <dd className="text-sm font-medium text-gray-900">99.00€</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Livraison</span>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">4.99€</dd>
                            </div>
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="text-base font-medium text-gray-900">Total</dt>
                                <dd className="text-base font-medium text-gray-900">103.99€</dd>
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
    )
}