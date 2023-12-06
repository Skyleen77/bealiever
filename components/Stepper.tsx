export default function Stepper({ type }: { type: UserType }) {
  const steps = {
    particulier: [
      { id: '01', name: 'Authentification', href: '#' },
      { id: '02', name: 'Choix des produits', href: '#' },
      { id: '03', name: 'Commande', href: '#' },
      { id: '04', name: 'Retrait / Livraison', href: '#' },
    ],
    commercant: [
      { id: '01', name: 'Authentification', href: '#' },
      { id: '02', name: 'Vérification du commerce', href: '#' },
      { id: '03', name: 'Ajout des produits', href: '#' },
    ],
  };

  return (
    <nav aria-label="Progress" key={type}>
      <ol
        role="list"
        className="divide-y divide-gray-300 rounded-xl border border-gray-300 md:flex md:divide-y-0"
      >
        {steps[type].map((step, stepIdx) => (
          <li key={step.name} className="relative md:flex md:flex-1">
            <a
              href={step.href}
              className="flex items-center px-6 py-4 text-sm font-medium"
              aria-current="step"
            >
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary">
                <span className="text-primary">{step.id}</span>
              </span>
              <span className="ml-4 text-sm font-medium">{step.name}</span>
            </a>

            {stepIdx !== steps[type].length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute right-0 top-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
