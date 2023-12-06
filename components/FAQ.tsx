import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Qu'est-ce que Bealiever propose exactement ?",
    answer:
      "Bealiever vise à réduire le gaspillage en mettant en relation des commerçants et des clients, afin de pouvoir mettre en avant des produits présentant un défaut à prix attractif."
  },
  {
    question: "Comment puis-je contribuer à la lutte contre le gaspillage en utilisant cette application ?",
    answer:
      "En tant que commerçant, vous pouvez contribuer en mettant en ligne des produits non alimentaires présentant un défaut, ou une fin de série. L'idée étant de proposer aux utilisateurs des produits fonctionnels à prix concurrentiel, adapté en fonction du défaut du produit. En tant qu'utilisateur, vous contribuerez automatiquement dès lors que vous vous procurerez un produit présent chez nos partenaires commerçants ! Qu'un livre soit corné ou non, l'histoire reste toujours la même non ? Alors pourquoi risquer que plusieurs centaines de pages partent à la poubelle sous prétexte que la couverture est abîmée ?"
  },
  {
    question: "Quels types de produits puis-je partager sur Bealiever ?",
    answer:
      "Dans un premier temps, l'application accepte une variété de produits non alimentaires tels que des vêtements et des produits culturels. Nous allons bien sûr implémenter rapidement de nouvelles catégories au fur et à mesure des besoins !"
  },
  {
    question: "Comment fonctionne le processus d'achat sur Bealiever ?",
    answer:
      "En tant que commerçant, vous n'avez qu'à publier une annonce décrivant le produit que vous souhaitez vendre et attendre qu'un utilisateur soit intéressé. En tant qu'utilisateur, si un produit vous intéresse, vous pouvez le réserver et venir le récupérer en magasin dans un délai de 48h, ou l'acheter directement en ligne et vous le faire livrer en relais colis ou directement chez vous."
  },
  {
    question: "Comment l'application garantit-elle la qualité des produits partagés ?",
    answer:
      "Les commerçants sont encouragés à fournir des informations détaillées et des photos de leurs produits. Les évaluations et commentaires des utilisateurs contribuent également à maintenir la qualité des échanges."
  },
  {
    question: "Est-ce que l'application encourage d'autres pratiques durables en plus de l'achat de produits non alimentaires présentant un défaut ?",
    answer:
      "Oui, Bealiever pourra par la suite fournir des conseils et des informations sur des pratiques durables, encourageant les utilisateurs à adopter un mode de vie respectueux de l'environnement."
  },
  {
    question: "Comment puis-je rechercher des produits spécifiques sur l'application ?",
    answer:
      "Vous pouvez utiliser la fonction de recherche pour trouver des produits spécifiques en utilisant des mots-clés, des catégories ou des filtres pour affiner vos résultats."
  },
  {
    question: "Comment puis-je télécharger et commencer à utiliser Bealiever ?",
    answer:
      "Vous pouvez télécharger l'application depuis la boutique d'applications de votre téléphone, créer un compte, puis commencer à explorer les fonctionnalités pour contribuer à la réduction du gaspillage des produits non alimentaires et ainsi faire un pas de plus vers un mode de vie eco-friendly."
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Questions fréquentes
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}
