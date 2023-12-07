const timeline = [
  {
    name: 'Lancement projet',
    description:
      "<p>Marketing : Etude de marché, <br />Dev : MVP (Landing Page, Authentification, Ajout des produits, Commande Client, Liste des Commandes)</p>",
    date: 'Dec 2023',
    dateTime: '2023-12',
  },
  {
    name: 'Etude et Développement',
    description:
      "<p>Marketing : Etude de marché, Recherche Partenariat, <br />Dev : Finition MVP, Vérification Commerçants, Paiement Sécurisé</p>",
    date: 'Jan 2024',
    dateTime: '2024-01',
  },
  {
    name: 'Partenariat et Développement',
    description:
    "<p>Marketing : Recherche Partenariat, <br />Dev : Géolocalisation, Notifications</p>",
    date: 'Fev 2024',
    dateTime: '2024-02',
  },
  {
    name: 'Partenariat et Développement',
    description:
    "<p>Marketing : Recherche Partenariat, <br />Dev : Filtres</p>",
    date: 'Mar 2024',
    dateTime: '2024-03',
  },
  {
    name: 'Lancement du Produit',
    description:
    "<p>Marketing : Communication, <br />Dev : Tests</p>",
    date: 'Avr 2024',
    dateTime: '2024-04',
  },
  {
    name: 'Retours utilisateurs',
    description:
    "",
    date: 'Mai 2024',
    dateTime: '2024-05',
  },
];

const Timeline = () => {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {timeline.map((item) => (
          <div key={item.name}>
            <time
              dateTime={item.dateTime}
              className="flex items-center text-sm font-semibold leading-6 text-primary"
            >
              <svg
                viewBox="0 0 4 4"
                className="mr-4 h-1 w-1 flex-none"
                aria-hidden="true"
              >
                <circle className="fill-primary" cx={2} cy={2} r={2}  />
              </svg>
              {item.date}
              <div
                className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              {item.name}
            </p>
            <div dangerouslySetInnerHTML={{
              __html: item.description
            }} className="mt-1 text-base leading-7 text-gray-600">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
