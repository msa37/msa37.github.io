/**
 * Portfolio Page - Rising Digital IA
 * Showcase des projets réalisés
 * Design: Tech Africain Audacieux
 */

import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'CV Premium - Ingénieur Logiciel',
      category: 'Rédaction & CV',
      description: 'CV optimisé avec IA pour candidature internationale, avec design moderne et contenu stratégique',
      image: '📄',
      highlights: ['Design professionnel', 'Optimisation IA', 'ATS-friendly'],
    },
    {
      id: 2,
      title: 'Business Plan - Activité Génératrice de Revenus',
      category: 'Plans d\'Affaires',
      description: 'Plan d\'affaires complet pour une AGR agricole avec projections financières et stratégie marketing',
      image: '📊',
      highlights: ['Analyse de marché', 'Projections financières', 'Stratégie complète'],
    },
    {
      id: 3,
      title: 'Site Web - Église Moderne',
      category: 'Création Web',
      description: 'Site web responsive pour une église avec gestion d\'événements, donations en ligne et contenu multimédia',
      image: '⛪',
      highlights: ['Responsive design', 'Système de donations', 'Gestion d\'événements'],
    },
    {
      id: 4,
      title: 'Logo & Identité Visuelle - PME Locale',
      category: 'Design Graphique',
      description: 'Logo, palette de couleurs et guidelines de marque pour une PME de services digitaux',
      image: '🎨',
      highlights: ['Logo vectoriel', 'Brand guidelines', 'Palette complète'],
    },
    {
      id: 5,
      title: 'Présentation PowerPoint - Dossier Sponsor',
      category: 'Design Graphique',
      description: 'Présentation professionnelle pour recherche de sponsoring avec données visuelles et storytelling impactant',
      image: '📽️',
      highlights: ['Design premium', 'Data visualization', 'Storytelling'],
    },
    {
      id: 6,
      title: 'Vidéo Promotionnelle - Startup Tech',
      category: 'Vidéo & Audio',
      description: 'Vidéo promotionnelle de 60 secondes avec montage professionnel, voix off IA et animations',
      image: '🎬',
      highlights: ['Montage professionnel', 'Voix off IA', 'Animations'],
    },
  ];

  const caseStudies = [
    {
      title: 'Transformation Digitale d\'une PME Commerciale',
      challenge: 'PME sans présence digitale, ventes limitées, pas de visibilité en ligne',
      solution: 'Site web e-commerce, stratégie SEO, formation équipe',
      result: '300% d\'augmentation des ventes en 6 mois',
    },
    {
      title: 'Digitalisation d\'une Église Locale',
      challenge: 'Église sans outils digitaux, difficultés à communiquer avec la communauté',
      solution: 'Site web complet, système de donations, gestion d\'événements',
      result: 'Engagement communautaire augmenté de 250%',
    },
    {
      title: 'Formation en IA pour Entrepreneurs',
      challenge: 'Entrepreneurs sans connaissance en IA et outils digitaux modernes',
      solution: 'Programme de formation pratique de 8 semaines',
      result: '45 entrepreneurs formés, 12 startups créées',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Notre Portfolio
            </h1>
            <p className="text-xl text-gray-200">
              Découvrez nos réalisations et les transformations que nous avons apportées à nos clients
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Projets Réalisés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une sélection de nos meilleures réalisations dans différents domaines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border-2 border-yellow-500 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                {/* Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-yellow-500 text-blue-900 rounded-full text-xs font-bold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-50 text-blue-900 px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/22893392515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-500 font-bold hover:text-yellow-400 transition-colors"
                  >
                    Voir Détails <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Études de Cas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Histoires de succès et transformations réelles
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl border-l-4 border-yellow-500"
              >
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">{study.title}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-yellow-300 mb-2">DÉFI</h4>
                    <p className="text-gray-200">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-yellow-300 mb-2">SOLUTION</h4>
                    <p className="text-gray-200">{study.solution}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-sm font-bold text-yellow-300 mb-2">RÉSULTAT</h4>
                    <p className="text-gray-200 text-lg font-semibold">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projets Réalisés' },
              { number: '120+', label: 'Clients Satisfaits' },
              { number: '95%', label: 'Taux de Satisfaction' },
              { number: '8+', label: 'Années d\'Expérience' },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl border-2 border-yellow-500 text-center"
              >
                <div className="text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <p className="text-lg text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Domaines d\'Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous excellons dans plusieurs domaines clés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Création Web', count: '45+ projets' },
              { title: 'Design Graphique', count: '60+ projets' },
              { title: 'Vidéo & Audio', count: '35+ projets' },
              { title: 'Rédaction & Contenu', count: '50+ projets' },
              { title: 'Formation IA', count: '20+ formations' },
              { title: 'Consulting Digital', count: '15+ missions' },
            ].map((expertise, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur rounded-xl border border-yellow-500 text-center hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{expertise.title}</h3>
                <p className="text-yellow-400 font-semibold">{expertise.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Témoignages de Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce que nos clients disent de nous
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Directeur PME Commerciale',
                role: 'Togo',
                text: 'Rising Digital IA a complètement transformé notre présence en ligne. Notre chiffre d\'affaires a triplé en 6 mois!',
                rating: 5,
              },
              {
                name: 'Pasteur d\'Église',
                role: 'Bénin',
                text: 'Le site web créé pour notre église a renforcé notre communauté. Merci pour cette excellente solution!',
                rating: 5,
              },
              {
                name: 'Entrepreneur Tech',
                role: 'Côte d\'Ivoire',
                text: 'La formation en IA m\'a donné les compétences pour lancer ma startup. Rising Digital IA est un vrai mentor!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border-2 border-yellow-500 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à Rejoindre Nos Clients Satisfaits ?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider
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
