/**
 * Portfolio Page - Rising Digital IA
 * Showcase des projets réalisés avec études de cas et témoignages
 * Design: Tech Africain Audacieux
 */

import { ExternalLink, ArrowRight, Star, Calendar, TrendingUp, Award, Users, Percent } from 'lucide-react';
import { Link } from 'wouter';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'CV Premium — Ingénieur Logiciel',
      category: 'Rédaction & CV',
      emoji: '📄',
      description: 'CV optimisé avec IA pour candidature internationale, avec design moderne, structure ATS-friendly et contenu stratégique.',
      highlights: ['Design professionnel', 'Optimisation IA', 'ATS-friendly'],
      duration: '48h',
    },
    {
      id: 2,
      title: 'Business Plan — Activité Génératrice de Revenus',
      category: 'Plans d\'Affaires',
      emoji: '📊',
      description: 'Plan d\'affaires complet pour une AGR agricole avec analyse de marché, projections financières et stratégie marketing.',
      highlights: ['Analyse de marché', 'Projections financières', 'Stratégie complète'],
      duration: '5 jours',
    },
    {
      id: 3,
      title: 'Site Web — Église Moderne',
      category: 'Création Web',
      emoji: '⛪',
      description: 'Site web responsive pour une église avec gestion d\'événements, système de donations en ligne et contenu multimédia.',
      highlights: ['Responsive design', 'Système de donations', 'Gestion d\'événements'],
      duration: '10 jours',
    },
    {
      id: 4,
      title: 'Logo & Identité Visuelle — PME Locale',
      category: 'Design Graphique',
      emoji: '🎨',
      description: 'Logo vectoriel, palette de couleurs et brand guidelines complets pour une PME de services digitaux.',
      highlights: ['Logo vectoriel', 'Brand guidelines', 'Palette complète'],
      duration: '3 jours',
    },
    {
      id: 5,
      title: 'Présentation PowerPoint — Dossier Sponsoring',
      category: 'Design Graphique',
      emoji: '📽️',
      description: 'Présentation premium pour recherche de sponsoring : données visuelles, storytelling impactant et design de haut niveau.',
      highlights: ['Design premium', 'Data visualization', 'Storytelling'],
      duration: '4 jours',
    },
    {
      id: 6,
      title: 'Vidéo Promotionnelle — Startup Tech',
      category: 'Vidéo & Audio',
      emoji: '🎬',
      description: 'Vidéo promotionnelle de 60 secondes avec montage professionnel, voix off IA multilingue et animations motion.',
      highlights: ['Montage professionnel', 'Voix off IA', 'Animations'],
      duration: '5 jours',
    },
    {
      id: 7,
      title: 'Site E-commerce — Boutique Mode',
      category: 'Création Web',
      emoji: '🛍️',
      description: 'Boutique en ligne complète avec catalogue produits, paiement intégré et tableau de bord de gestion des commandes.',
      highlights: ['Paiement intégré', 'Gestion stocks', 'Interface admin'],
      duration: '14 jours',
    },
    {
      id: 8,
      title: 'Chatbot IA — Service Client PME',
      category: 'IA & Automatisation',
      emoji: '🤖',
      description: 'Chatbot intelligent intégré au site web pour répondre automatiquement aux questions clients 24h/24.',
      highlights: ['IA conversationnelle', 'Disponible 24/7', 'Intégration WhatsApp'],
      duration: '7 jours',
    },
    {
      id: 9,
      title: 'Formation IA — Groupe d\'Entrepreneurs',
      category: 'Formation',
      emoji: '🎓',
      description: 'Programme de formation pratique de 8 semaines sur l\'IA et le marketing digital pour un groupe de 15 entrepreneurs.',
      highlights: ['8 semaines', '15 participants', 'Pratique opérationnel'],
      duration: '8 semaines',
    },
  ];

  const caseStudies = [
    {
      title: 'Transformation Digitale — PME Commerciale au Togo',
      challenge: 'PME sans présence digitale, ventes uniquement en magasin, aucune visibilité en ligne, concurrence grandissante.',
      solution: 'Site web e-commerce, stratégie SEO, identité visuelle complète, formation de l\'équipe commerciale.',
      result: '+300% de ventes en 6 mois',
      icon: TrendingUp,
    },
    {
      title: 'Digitalisation Complète — Église Évangélique, Bénin',
      challenge: 'Pas d\'outils digitaux, communication interne difficile, donations exclusivement en espèces, faible engagement des jeunes.',
      solution: 'Site web complet, système de donations en ligne, newsletter automatisée, gestion d\'événements.',
      result: '+250% d\'engagement communautaire',
      icon: Users,
    },
    {
      title: 'Programme Formation IA — 45 Entrepreneurs, Côte d\'Ivoire',
      challenge: 'Entrepreneurs sans connaissance en IA et outils digitaux modernes, incapacité à optimiser leurs processus.',
      solution: 'Programme de formation pratique de 8 semaines sur l\'IA, le marketing digital et l\'automatisation.',
      result: '45 formés · 12 startups créées · 8 emplois générés',
      icon: Award,
    },
  ];

  const stats = [
    { number: '150+', label: 'Projets Réalisés', icon: Award },
    { number: '120+', label: 'Clients Satisfaits', icon: Users },
    { number: '95%', label: 'Taux de Satisfaction', icon: Percent },
    { number: '3+', label: 'Pays Couverts', icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: 'Directeur, PME Commerciale',
      location: 'Lomé, Togo',
      text: 'Rising Digital IA a transformé notre entreprise. Site web, SEO, formation — tout a été géré de façon professionnelle. Notre chiffre d\'affaires a triplé en 6 mois!',
      rating: 5,
      service: 'Création Web + SEO',
    },
    {
      name: 'Pasteur Principal',
      location: 'Cotonou, Bénin',
      text: 'Le site web et le système de donation créés pour notre église dépassent toutes nos attentes. L\'équipe a su comprendre nos besoins spécifiques en tant qu\'institution religieuse.',
      rating: 5,
      service: 'Digitalisation Église',
    },
    {
      name: 'Entrepreneur Tech',
      location: 'Abidjan, Côte d\'Ivoire',
      text: 'La formation en IA dispensée par Rising Digital IA m\'a donné les compétences pour lancer ma startup. Un vrai partenaire de croissance, pas juste un prestataire.',
      rating: 5,
      service: 'Formation IA',
    },
    {
      name: 'Directrice ONG',
      location: 'Lomé, Togo',
      text: 'Notre dossier de projet a été rédigé et présenté de manière exceptionnelle. Nous avons obtenu notre financement grâce à la qualité du business plan fourni.',
      rating: 5,
      service: 'Rédaction Stratégique',
    },
    {
      name: 'Responsable Boutique Mode',
      location: 'Togo',
      text: 'Mon e-commerce est maintenant actif et je vends partout en Afrique. La boutique est belle, rapide et facile à gérer. Le service après-vente est excellent.',
      rating: 5,
      service: 'E-commerce',
    },
    {
      name: 'Chef de Projet, Startup',
      location: 'Togo',
      text: 'Le chatbot IA intégré à notre site web répond à nos clients 24h/24. On a réduit de 60% les questions répétitives sur WhatsApp. Très efficace!',
      rating: 5,
      service: 'IA & Automatisation',
    },
  ];

  const expertiseDomains = [
    { title: 'Création Web', count: '45+ projets', emoji: '🌐' },
    { title: 'Design Graphique', count: '60+ projets', emoji: '🎨' },
    { title: 'Vidéo & Audio', count: '35+ projets', emoji: '🎬' },
    { title: 'Rédaction & Contenu', count: '50+ projets', emoji: '📝' },
    { title: 'Formation IA', count: '20+ formations', emoji: '🎓' },
    { title: 'IA & Automatisation', count: '15+ missions', emoji: '🤖' },
  ];

  return (
    <div className="min-h-screen">
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-6">
              Nos réalisations
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Des résultats concrets,{' '}
              <span className="text-yellow-400">des transformations réelles</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Découvrez comment Rising Digital IA a accompagné des entreprises, institutions et entrepreneurs africains vers de nouveaux niveaux de performance digitale.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────────── */}
      <section className="bg-yellow-500 py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <Icon className="w-5 h-5 text-blue-900 mb-1" />
                  <span className="text-3xl font-bold text-blue-900">{stat.number}</span>
                  <span className="text-blue-800 text-sm font-medium">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ───────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-4">
              Sélection de projets
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Projets réalisés
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une sélection représentative de notre travail dans différents secteurs et domaines d'expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border-2 border-gray-100 shadow-md hover:shadow-2xl hover:border-yellow-500 transition-all duration-300 overflow-hidden"
              >
                <div className="h-44 bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.emoji}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-yellow-500 text-blue-900 rounded-full text-xs font-bold">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {project.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded-md border border-blue-100"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/22893392515"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:text-yellow-500 transition-colors text-sm"
                  >
                    Projet similaire ? <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

      {/* ── CASE STUDIES ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold mb-4">
              Études de cas
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Transformations réelles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Les vrais chiffres, les vrais défis, les vrais résultats de nos clients.
            </p>
          </div>

          <div className="space-y-6">
            {caseStudies.map((study, index) => {
              const Icon = study.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl border-l-4 border-yellow-500 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <h3 className="text-xl font-bold text-yellow-400">{study.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                      <h4 className="text-xs font-bold text-red-400 mb-2 uppercase tracking-wide">Le défi</h4>
                      <p className="text-gray-200 text-sm">{study.challenge}</p>
                    </div>
                    <div className="p-4 bg-blue-800/40 border border-blue-400/30 rounded-xl">
                      <h4 className="text-xs font-bold text-blue-300 mb-2 uppercase tracking-wide">Notre solution</h4>
                      <p className="text-gray-200 text-sm">{study.solution}</p>
                    </div>
                    <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-xl">
                      <h4 className="text-xs font-bold text-green-400 mb-2 uppercase tracking-wide">Résultat obtenu</h4>
                      <p className="text-white font-bold text-lg">{study.result}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE DOMAINS ───────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">Nos domaines d'expertise</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {expertiseDomains.map((expertise, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl border border-yellow-500/30 hover:border-yellow-500 text-center text-white transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl mb-2">{expertise.emoji}</div>
                <h3 className="text-sm font-bold mb-1">{expertise.title}</h3>
                <p className="text-yellow-400 text-xs font-semibold">{expertise.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-4">
              Avis clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Ce que nos clients disent de nous
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des partenariats durables, bâtis sur la confiance, la qualité et des résultats mesurables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border-2 border-yellow-500/30 shadow-md hover:shadow-xl hover:border-yellow-500 transition-all duration-300"
              >
                <div className="flex gap-1 mb-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs text-yellow-600 font-semibold mb-4 block">{testimonial.service}</span>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-sm">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Votre succès sera notre prochaine étude de cas
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Rejoignez nos 120+ clients satisfaits et lancez votre transformation digitale dès aujourd'hui.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Démarrer mon projet
            </Link>
            <a
              href="https://wa.me/22893392515"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-yellow-500/70 text-yellow-300 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200 flex items-center justify-center gap-2"
            >
              WhatsApp: +228 93 39 25 15
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
