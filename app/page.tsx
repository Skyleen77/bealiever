'use client';

import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Stats from '@/components/Stats';
import Stepper from '@/components/Stepper';
import Timeline from '@/components/Timeline';
import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { types } from './datas';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [type, setType] = useState<UserType>(types[0]);

  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/produits');
    }
  }, [status]);

  return (
    <div className="bg-white">
      <main className="isolate">
        <Navbar />

        {/* Hero section */}
        <div className="relative pt-14">
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
          <div className="pt-24 sm:pt-32 pb-12 sm:pb-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  L'application qui lutte contre le gaspillage non-alimentaire
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Participez a une initiative dédiée à la lutte contre la
                  destruction de produits neufs et engagée pour la protection du
                  pouvoir d'achat, en adoptant une démarche résolument
                  anti-gaspillage !
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/auth/sign-up"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Commencer maintenant
                  </Link>
                </div>
              </div>
            </div>
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
        </div>

        {/* Logo cloud */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-base mb-8 text-center font-semibold leading-7 text-primary">
            Nos partenaires
          </h2>
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/d/d6/Kiabi_logo.svg/2560px-Kiabi_logo.svg.png"
              alt="Kiabi"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%22194%22%20height%3D%2240%22%20viewBox%3D%220%200%20194%2040%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23clip0_1198_772389)%22%3E%3Cpath%20d%3D%22M12.083%2017.44c.317-.2.62-.474.903-.812.571-.68.859-1.559.859-2.605%200-1.49-.49-2.712-1.461-3.625-.962-.908-2.252-1.369-3.834-1.369H0v17.357h8.58c1.875%200%203.313-.456%204.275-1.355.97-.908%201.461-2.133%201.461-3.64%200-1.197-.328-2.186-.973-2.94a3.946%203.946%200%2000-1.26-1.01zM4.16%2019.417h4.17c.542%200%20.962.146%201.285.447.314.293.466.689.466%201.203%200%20.518-.15.91-.458%201.206-.31.296-.786.445-1.418.445H4.16v-3.301zm5.143-3.937c-.33.317-.767.468-1.341.468H4.16v-3.251h4.024c.458%200%20.834.143%201.146.436.306.287.455.642.455%201.092%200%20.534-.157.943-.482%201.255zM30.543%2018.4c.924-.995%201.39-2.25%201.39-3.732%200-1.677-.594-3.054-1.764-4.091-1.157-1.027-2.694-1.548-4.566-1.548h-8.33v17.357h4.16v-6.078h1.175l5.423%206.037.038.044h5.18l-5.687-6.296c1.211-.298%202.214-.867%202.98-1.693zM27.8%2014.668c0%20.54-.187.962-.574%201.288-.401.338-.946.512-1.62.512h-4.174v-3.599h4.17c.675%200%201.22.17%201.621.512.388.325.577.748.577%201.287zM39.076%209.03h-4.16v17.356h4.16V9.029zM77.393%2011.295c-1.759-1.75-3.937-2.637-6.474-2.637-2.536%200-4.712.886-6.47%202.637-1.76%201.75-2.651%203.915-2.651%206.435%200%202.504.892%204.659%202.65%206.401%201.759%201.743%203.935%202.623%206.471%202.623%202.537%200%204.713-.883%206.471-2.623%201.76-1.742%202.65-3.897%202.65-6.4.003-2.52-.888-4.686-2.647-6.436zm-1.534%206.438c0%201.447-.48%202.667-1.428%203.623-.945.954-2.127%201.44-3.509%201.44-1.382%200-2.56-.486-3.51-1.44-.948-.956-1.427-2.173-1.427-3.623%200-1.45.482-2.677%201.43-3.65.946-.97%202.128-1.46%203.507-1.46%201.38%200%202.56.49%203.507%201.46.95.97%201.43%202.2%201.43%203.65zM55.62%2018.806l-.038.177c-.277%201.284-.819%202.254-1.613%202.883-.796.631-1.77.95-2.888.95-1.364%200-2.537-.49-3.483-1.46-.948-.973-1.43-2.2-1.43-3.65%200-1.45.477-2.675%201.417-3.636.938-.963%202.114-1.45%203.496-1.45%201.105%200%202.073.32%202.877.95.794.624%201.336%201.573%201.616%202.825l4.113-.754-.062-.292c-.431-2.05-1.445-3.694-3.016-4.894-1.564-1.195-3.423-1.8-5.531-1.8-2.537%200-4.71.884-6.46%202.626-1.751%201.742-2.637%203.905-2.637%206.425%200%202.537.889%204.704%202.64%206.436%201.75%201.732%203.92%202.612%206.457%202.612%202.124%200%203.994-.618%205.558-1.84%201.571-1.225%202.577-2.945%202.989-5.108l.048-.26-4.053-.74z%22%20fill%3D%22%23372123%22%2F%3E%3Cpath%20d%3D%22M12.867%2029.657l-12.82%202.3.566%203.148%2012.819-2.301-.565-3.147zM192.663.01l-12.552%202.317.569%203.08%2012.552-2.317-.569-3.08zM92.568%2020.04L86.642%209.237l-.114-.209h-3.577v17.357h4.062v-7.864l4.33%207.864h2.474l4.306-7.859v7.859h4.063V9.029h-3.553l-6.065%2011.01zM114.987%209.157h-3.496l-7.406%2017.101h4.23l1.458-3.533h6.948l1.434%203.533h4.232l-7.33-16.936-.07-.165zm-3.832%2010.083l2.095-5.108%202.073%205.108h-4.168zM137.56%2018.4c.924-.995%201.39-2.25%201.39-3.732%200-1.677-.594-3.054-1.764-4.091-1.157-1.028-2.694-1.548-4.566-1.548h-8.333v17.357h4.16v-6.078h1.176l5.422%206.037.038.044h5.181l-5.688-6.296c1.214-.298%202.217-.867%202.984-1.693zm-2.743-3.732c0%20.54-.187.962-.574%201.288-.401.338-.946.512-1.621.512h-4.17v-3.599h4.17c.675%200%201.22.17%201.621.512.385.325.574.745.574%201.287zM172.772%2015.75h-7.108V9.03h-4.16v17.356h4.16V19.59h7.108v6.796h4.159V9.029h-4.159v6.72zM184.741%2022.546V19.59h8.449V15.8h-8.449V12.87h8.59V9.03h-12.752v17.357h12.804v-3.84h-8.642zM154.588%2018.806l-.037.177c-.277%201.284-.819%202.254-1.613%202.883-.796.631-1.769.95-2.888.95-1.364%200-2.537-.49-3.483-1.46-.948-.973-1.43-2.2-1.43-3.65%200-1.45.477-2.675%201.417-3.636.937-.963%202.113-1.45%203.496-1.45%201.105%200%202.073.32%202.877.95.794.624%201.336%201.573%201.615%202.825l4.114-.754-.062-.292c-.431-2.05-1.445-3.694-3.016-4.894-1.564-1.195-3.423-1.8-5.531-1.8-2.537%200-4.71.884-6.46%202.626-1.751%201.742-2.637%203.905-2.637%206.425%200%202.537.889%204.704%202.639%206.436%201.751%201.732%203.921%202.612%206.458%202.612%202.124%200%203.994-.618%205.558-1.84%201.571-1.225%202.577-2.945%202.989-5.108l.048-.26-4.054-.74z%22%20fill%3D%22%23E2001A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_1198_772389%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h193.383v40H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E"
              alt="Bricomarché"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://www.digipolis.fr/wp-content/uploads/cultura.svg"
              alt="Cultura"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/E.Leclerc_logo.svg/2560px-E.Leclerc_logo.svg.png"
              alt="Leclerc"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/46/Logo_Boulanger_2004.svg/2560px-Logo_Boulanger_2004.svg.png"
              alt="Boulanger"
              width={158}
              height={48}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="mx-auto mt-32 pt-32 max-w-7xl px-6 lg:px-8 border-t">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Luttez contre le gaspillage
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quelques chiffres sur le gaspillage non-alimentaire
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <Stats />
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-32 max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/assets/save-planet.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <p className="text-4xl font-bold text-white">Notre vision</p>
              <figure>
                <blockquote className="mt-6 text-lg font-medium text-white sm:text-xl sm:leading-8">
                  <p>
                    “Nous donnons une seconde vie aux invendus en les mettant en
                    valeur auprès de milliers de consommateurs. Ensemble,
                    engageons-nous dans une lutte innovante contre le gaspillage
                    non-alimentaire et créons un avenir où chaque objet trouve
                    son utilisateur et contribue à un monde plus durable.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="mt-1">Bealiever</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className="mt-32 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Parcours utilisateur
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Un parcours simple et rapide
            </p>
          </div>

          <div className="mt-16 flex justify-center">
            <RadioGroup
              value={type}
              onChange={setType}
              className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-sm font-semibold leading-5 ring-1 ring-inset ring-gray-200"
            >
              <RadioGroup.Label className="sr-only">
                Type d'utilisateur
              </RadioGroup.Label>
              {types.map((option) => (
                <RadioGroup.Option
                  key={option}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? 'bg-primary text-white' : 'text-gray-500',
                      'cursor-pointer rounded-full px-4 py-2 capitalize',
                    )
                  }
                >
                  <span>{option}</span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>

          <div className="mt-10">
            <Stepper type={type} />
          </div>
        </div>

        {/* FAQs */}
        <FAQ />

        {/* ROADMAP */}
        <Timeline />
      </main>

      <Footer />
    </div>
  );
}
