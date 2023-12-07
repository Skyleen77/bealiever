'use client';

import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProduct } from '../_actions';
import { getPercentage } from '@/utils/discount';

export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (!params.slug) return router.push('/produits');

    getProduct(params.slug).then((res) => {
      if (res) {
        setProduct(res);
        return;
      }

      router.push('/produits');
    });
  }, [params.slug]);

  return product ? (
    <div className="bg-gray-50">
      <Navbar fixed />

      <main className="mt-20">
        {/* Product */}
        <div className="bg-white">
          <div className="justify-center mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:max-w-7xl flex lg:flex-row flex-col-reverse lg:gap-x-8 lg:px-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-center">
              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {product?.name}
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl line-through">
                    {product?.basePrice} €
                  </p>
                  <p className="text-lg text-gray-900 sm:text-xl ml-3">
                    {product?.discountedPrice} €
                  </p>
                  <p className="text-lg text-primary sm:text-xl ml-3">
                    {getPercentage(
                      product?.basePrice,
                      product?.discountedPrice,
                    )}{' '}
                    %
                  </p>
                </div>

                <div>
                  <p className="text-base italic text-gray-900 sm:text-xl">
                    {product?.condition}
                  </p>
                </div>

                <div>
                  <p className="text-lg text-gray-900 sm:text-xl">
                    Raison invendu : {product?.reason}
                  </p>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">
                    {product?.description}
                  </p>
                </div>

                <div className="mt-10">
                  <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
                    Ajouter au panier
                  </button>
                </div>
              </section>
            </div>

            {/* Product image */}
            <div className="lg:mb-0 mb-10 lg:col-start-2 lg:row-span-2 lg:self-center">
              <div className="aspect-[1/1] max-w-md max-h-md overflow-hidden rounded-lg">
                <img
                  src={product?.image?.asset?.url}
                  alt={product?.name}
                  className="h-full w-full aspect-[1/1] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  ) : null;
}
