/**
 * Services Page - Rising Digital IA
 * Page détaillée des services organisés par catégories
 * Design: Tech Africain Audacieux
 */

import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const serviceCategories = [
    {
      id: 'redaction',
      title: 'Rédaction & Contenu',
      icon: '📝',
      description: 'Services de rédaction professionnelle et création de contenu de qualité',
      services: [
        'CV optimisés avec IA',
        'Discours et présentations',
        'E-books et guides',
        'Plans d\'affaires détaillés',
        'Propositions de projets ONG',
        'Articles et blogs professionnels',
        'Copywriting pour sites web',
      ],
    },
    {
      id: 'design',
      title: 'Design & Création Visuelle',
      icon: '🎨',
      description: 'Solutions de design graphique et création visuelle premium',
      services: [
        'Logos et identité visuelle',
        'Flyers et brochures',
        'Présentations PowerPoint',
        'Mockups et prototypes',
        'Bannières web et réseaux sociaux',
        'Infographies et data visualization',
        'Packaging et étiquettes',
      ],
    },
    {
      id: 'video',
      title: 'Vidéo & Audio',
      icon: '🎬',
      description: 'Production vidéo et audio professionnelle avec IA',
      services: [
        'Montage vidéo professionnel',
        'Voix off IA multilingues',
        'Vidéos promotionnelles',
        'Sous-titrage automatique',
        'Animation et motion graphics',
        'Podcasts et audio branding',
        'Édition et post-production',
      ],
    },
    {
      id: 'entreprises',
      title: 'Services Entreprises',
      icon: '💼',
      description: 'Solutions digitales avancées pour les entreprises',
      services: [
        'Chatbots IA intelligents',
        'Optimisation SEO',
        'Gestion CRM',
        'Business plans stratégiques',
        'Automatisation des processus',
        'Analyse de données',
        'Consulting digital',
      ],
    },
    {
      id: 'formation',
      title: 'Formation & Éducation',
      icon: '🎓',
      description: 'Programmes de formation en digital et intelligence artificielle',
      services: [
        'Formation IA pratique',
        'Cours de marketing digital',
        'Webinaires et ateliers',
        'Mentorat professionnel',
        'Certification digitale',
        'Coaching entrepreneurial',
        'Programmes d\'apprentissage personnalisés',
      ],
    },
    {
      id: 'produits',
      title: 'Produits Digitaux',
      icon: '💻',
      description: 'Création de sites web et produits digitaux innovants',
      services: [
        'Création de sites web modernes',
        'E-commerce et boutiques en ligne',
        'Applications web',
        'Digitalisation des églises',
        'Portails et plateformes',
        'Intégration API',
        'Maintenance et support',
      ],
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation Initiale',
      description: 'Nous écoutons vos besoins et vos objectifs pour proposer la meilleure solution',
    },
    {
      number: '02',
      title: 'Proposition Personnalisée',
      description: 'Devis détaillé avec calendrier et livrables clairement définis',
    },
    {
      number: '03',
      title: 'Exécution Professionnelle',
      description: 'Notre équipe travaille avec rigueur pour livrer des résultats exceptionnels',
    },
    {
      number: '04',
      title: 'Révisions & Optimisation',
      description: 'Ajustements et améliorations jusqu\'à votre satisfaction totale',
    },
    {
      number: '05',
      title: 'Livraison & Support',
      description: 'Livraison finale avec formation et support technique continu',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos Services Complets
            </h1>
            <p className="text-xl text-gray-200">
              Une gamme complète de solutions digitales et IA pour transformer votre entreprise et atteindre vos objectifs
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div
                key={category.id}
                className="group p-8 bg-white rounded-2xl border-2 border-yellow-500 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>

                <ul className="space-y-2 mb-6">
                  {category.services.slice(0, 4).map((service, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{service}</span>
                    </li>
                  ))}
                  {category.services.length > 4 && (
                    <li className="text-gray-500 text-sm italic">
                      + {category.services.length - 4} services supplémentaires
                    </li>
                  )}
                </ul>

                <a
                  href="https://wa.me/22893392515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-500 font-bold hover:text-yellow-400 transition-colors"
                >
                  En Savoir Plus <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre Processus de Travail
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une approche structurée et professionnelle pour garantir votre succès
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl border border-yellow-500 text-center">
                  <div className="text-4xl font-bold text-yellow-500 mb-2">{step.number}</div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-yellow-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Tarification Transparente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des prix accessibles adaptés à tous les budgets, sans frais cachés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter',
                price: 'À partir de',
                amount: '500',
                currency: 'FCFA',
                description: 'Pour les petits projets et services ponctuels',
                features: [
                  'CV optimisé IA',
                  'Logos simples',
                  'Vidéos courtes',
                  'Support email',
                ],
              },
              {
                name: 'Professional',
                price: 'À partir de',
                amount: '50 000',
                currency: 'FCFA',
                description: 'Pour les PME et entrepreneurs',
                features: [
                  'Site web complet',
                  'Design graphique complet',
                  'Vidéos professionnelles',
                  'Support prioritaire',
                  'Formation incluse',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: 'Sur devis',
                amount: 'Personnalisé',
                currency: '',
                description: 'Solutions complètes et intégrées',
                features: [
                  'Écosystème digital complet',
                  'Chatbots IA',
                  'Intégrations avancées',
                  'Support 24/7',
                  'Consulting stratégique',
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white border-2 border-yellow-500 scale-105 shadow-2xl'
                    : 'bg-white border-2 border-gray-200 text-gray-900'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-yellow-400' : 'text-blue-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-gray-200' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.price}
                  </span>
                  <div className="text-4xl font-bold">
                    {plan.amount}
                    {plan.currency && <span className="text-lg ml-2">{plan.currency}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-yellow-400' : 'text-yellow-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/22893392515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 px-4 rounded-lg font-bold text-center transition-all duration-200 hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-yellow-500 text-blue-900 hover:bg-yellow-400'
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}
                >
                  Demander un Devis
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-2xl border-2 border-blue-900">
            <p className="text-center text-gray-700">
              <strong>Note:</strong> Tous nos services incluent une consultation gratuite et un devis personnalisé. Les prix sont en FCFA et peuvent être ajustés selon vos besoins spécifiques.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Commencer ?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons transformer votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              Demander un Devis <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/22893392515"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition-all duration-200 flex items-center justify-center gap-2"
            >
              WhatsApp: +228 93 39 25 15
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
