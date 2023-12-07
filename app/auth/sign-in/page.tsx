'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';

export default function SignIn() {
  const searchParams = useSearchParams();

  return (
    <div className="bg-gray-50 flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/">
          <img
            className="mx-auto h-10 w-auto"
            src="/assets/logo/full.svg"
            alt="Bealiever"
          />
        </Link>

        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Se connecter à votre compte
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form
            className="space-y-6"
            action={async (formData: FormData) => {
              const email = formData.get('email') as string;
              const password = formData.get('password') as string;

              await signIn('credentials', {
                email,
                password,
                callbackUrl: searchParams.get('callbackUrl')
                  ? decodeURIComponent(searchParams.get('callbackUrl')!)
                  : '/produits',
              });
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mot de passe
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm leading-6">
                <a
                  href="#"
                  className="font-semibold text-primary hover:opacity-80"
                >
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Connexion
              </button>
            </div>
          </form>

          <div>
            <div className="relative my-6">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">
                  Ou s'inscrire avec
                </span>
              </div>
            </div>

            <div>
              <button
                onClick={() =>
                  signIn('google', {
                    callbackUrl: searchParams.get('callbackUrl')
                      ? decodeURIComponent(searchParams.get('callbackUrl')!)
                      : '/produits',
                  })
                }
                className="flex w-full items-center justify-center gap-3 rounded-md bg-[#4285F4] hover:opacity-80 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
              >
                <FaGoogle
                  className="w-[1.1rem] h-[1.1rem]"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold leading-6">Google</span>
              </button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Pas encore de compte ?{' '}
          <Link
            href="/auth/sign-up"
            className="font-semibold leading-6 text-primary hover:opacity-80"
          >
            Inscrivez-vous
          </Link>
        </p>
      </div>
    </div>
  );
}
