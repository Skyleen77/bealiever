import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/20/solid'
import Navbar from '@/components/Navbar'

const product = {
  name: 'Everyday Ruck Snack',
  href: '#',
  real_price: '220€',
  new_price: '150€',
  reduct_percent: '40%',
  etat: "Neuf",
  raison: "Tache",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt: 'Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.',
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  return (
    <div className="bg-gray-50">
        <Navbar />
        <main>
        {/* Product */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">
              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <div className="flex items-center">
                  <p className="text-lg text-gray-900 sm:text-xl line-through">{product.real_price}</p>
                  <p className="text-lg text-gray-900 sm:text-xl ml-3">{product.new_price}</p>
                  <p className="text-lg text-primary sm:text-xl ml-3">{product.reduct_percent}</p>
                </div>

                <div>
                    <p className="text-lg text-gray-900 sm:text-xl">Etat : {product.etat}</p>
                </div>

                <div>
                    <p className="text-lg text-gray-900 sm:text-xl">Raison invendu : {product.raison}</p>
                </div>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">{product.description}</p>
                </div>
              </section>
            </div>

            {/* Product image */}
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
              <section aria-labelledby="options-heading">
                <form>                
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Add to bag
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
