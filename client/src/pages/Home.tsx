/**
 * Home Page - Rising Digital IA
 * Page d'accueil avec hero, services, avantages et CTA
 * Design: Tech Africain Audacieux
 * Couleurs: Bleu électrique (#1E3A8A), Or (#FFD700), Blanc, Noir
 */

import { ArrowRight, Zap, Globe, PenTool, Video, Code, Smartphone, BookOpen } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const services = [
    {
      icon: Globe,
      title: 'Création de Sites Web',
      description: 'Sites modernes, responsifs et optimisés pour la conversion',
    },
    {
      icon: Code,
      title: 'Business Plans Premium',
      description: 'Plans d\'affaires détaillés et stratégiques pour vos projets',
    },
    {
      icon: PenTool,
      title: 'CV Optimisés IA',
      description: 'CV professionnels optimisés pour les recruteurs',
    },
    {
      icon: PenTool,
      title: 'Design Graphique',
      description: 'Logos, flyers, mockups et identité visuelle complète',
    },
    {
      icon: Video,
      title: 'Montage Vidéo & Voix Off IA',
      description: 'Vidéos promotionnelles avec voix off et montage professionnel',
    },
    {
      icon: Smartphone,
      title: 'Digitalisation des Églises',
      description: 'Solutions digitales spécialisées pour les institutions religieuses',
    },
    {
      icon: BookOpen,
      title: 'Formation IA',
      description: 'Formations pratiques en intelligence artificielle et digital',
    },
    {
      icon: Zap,
      title: 'Solutions Entreprises',
      description: 'Chatbots IA, SEO, CRM et outils digitaux avancés',
    },
  ];

  const advantages = [
    {
      title: 'Expertise Locale',
      description: 'Comprendre les défis spécifiques des entreprises africaines',
    },
    {
      title: 'Solutions Adaptées',
      description: 'Services personnalisés selon vos besoins et budget',
    },
    {
      title: 'Rapidité',
      description: 'Délais courts et résultats concrets et mesurables',
    },
    {
      title: 'Prix Accessibles',
      description: 'Tarifs compétitifs sans compromis sur la qualité',
    },
    {
      title: 'Innovation IA',
      description: 'Utilisation des dernières technologies en IA et automation',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white overflow-hidden">
        {/* Décoration géométrique */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500 rounded-full opacity-5 blur-3xl"></div>

        <div className="container relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div className="animate-fade-in-up">

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transformez Votre Vision en Puissance Digitale
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Accompagnement des PME, églises et entrepreneurs africains vers la digitalisation intelligente grâce à l'IA, au marketing moderne et à l'innovation digitale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Demander un Devis <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/22893392515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500 hover:text-blue-900 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Discuter sur WhatsApp
                </a>
              </div>
            </div>

            {/* Image Hero */}
            <div className="relative h-96 md:h-full animate-scale-in">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/LHSVA3CYpW8Se5s4VMFFca/sandbox/aFqQefqbSM37B0bXyWNdC5-img-1_1771599643000_na1fn_aGVyby1yaXNpbmctZGlnaXRhbC1pYQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTEhTVkEzQ1lwVzhTZTVzNFZNRkZjYS9zYW5kYm94L2FGcVFlZnFiU00zN0IwYlh5V05kQzUtaW1nLTFfMTc3MTU5OTY0MzAwMF9uYTFmbl9hR1Z5YnkxeWFYTnBibWN0WkdsbmFYUmhiQzFwWVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Ccg~1YnUDzX2pevkytlovLKMT8ZeQvWwsMER37JzwYImhMIddSvE79e5dikF-7~7duQU~vtlhCKlSY07tQNHTOwe8HtG9JNjDokrYQ6b2AIm1LcEOO-ZqE4hAyb19EOka0slBA~e8oON2za9s2og8LfHpPH26hfMJHnuzA8p11Y96E7dCk-M9Z8Nh2R1B8fXCKa7g9B3aDWvfs9W-qFiQ~OXZZiqBzXXTWViXL-yhvDRlO2aY-chhH711PEgNWf78KeUzCKOrGZZw3yOPNGimGayNE-oAxtIrI9s0vyn5uoUP8XODZ0UhfxfWyogESg8x0fDe5urW5PDeG6QO5eyRg__"
                alt="Hero - Rising Digital IA"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nos Services Principaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une gamme complète de solutions digitales et IA pour transformer votre entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-xl border-2 border-yellow-500 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="mb-4 p-3 bg-blue-900 rounded-lg inline-block group-hover:bg-yellow-500 transition-colors">
                    <Icon className="w-6 h-6 text-yellow-500 group-hover:text-blue-900" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-200 hover:scale-105"
            >
              Voir Tous les Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous combinons expertise locale, innovation technologique et engagement envers votre succès
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl border border-yellow-500 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4 font-bold text-blue-900">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                <p className="text-gray-300 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Visualization Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Services */}
            <div className="animate-fade-in-up">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/LHSVA3CYpW8Se5s4VMFFca/sandbox/aFqQefqbSM37B0bXyWNdC5-img-2_1771599651000_na1fn_c2VydmljZXMtYWktdGVjaA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTEhTVkEzQ1lwVzhTZTVzNFZNRkZjYS9zYW5kYm94L2FGcVFlZnFiU00zN0IwYlh5V05kQzUtaW1nLTJfMTc3MTU5OTY1MTAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZV2t0ZEdWamFBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GY9wGK-weQsgu3BBo178opJogjyWCD3vuDFBHMRK2ADTnAnhsOMykJy5a91EYM~gLwbfa~andssaWL~oA2yTpPOqCIhie0HQOiu03EsqklAsV6moF54skCGfIeAbsum7pGb8XXXWLIIrZ3ciKuAfcMfRglPkgMv9cln8NedPz9rd~kMK8FDFAQXIW9n5RlELMx9kW7a22J-cm4znbzXu508HVvWJd55g-bGvhtLOFJJtDqT-l9uWx4yVoDegYpQVHC-qR70FB84izDpUx0NmMGgosy81qKVf9~5X2GPMZ~JzYcxgDM5lfl91GFFETCXpthiK4Mpk1lqnqcPS0vd3Dg__"
                alt="Services - Tech Network"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            {/* Contenu texte */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Écosystème Digital Complet
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Rising Digital IA offre une solution intégrée couvrant tous les aspects de votre transformation digitale. De la création web aux solutions IA avancées, nous vous accompagnons à chaque étape.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Intégration transparente des technologies IA',
                  'Support complet du démarrage à la croissance',
                  'Optimisation continue de vos outils digitaux',
                  'Formation et accompagnement de votre équipe',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-900 font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/22893392515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105"
              >
                Commencer Maintenant <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Innovation Africaine au Service de Votre Croissance
              </h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Nous croyons que l'Afrique a le potentiel de devenir un leader en innovation digitale. Rising Digital IA est engagée à démocratiser l'accès aux technologies IA et aux solutions digitales premium.
              </p>
              <div className="space-y-4">
                {[
                  'Solutions adaptées au contexte africain',
                  'Tarifs compétitifs sans compromis sur la qualité',
                  'Engagement envers le développement durable',
                  'Formation et mentorat des jeunes talents',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Innovation */}
            <div className="animate-scale-in">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/LHSVA3CYpW8Se5s4VMFFca/sandbox/aFqQefqbSM37B0bXyWNdC5-img-3_1771599637000_na1fn_aW5ub3ZhdGlvbi1hZnJpY2FuLXRlY2g.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTEhTVkEzQ1lwVzhTZTVzNFZNRkZjYS9zYW5kYm94L2FGcVFlZnFiU00zN0IwYlh5V05kQzUtaW1nLTNfMTc3MTU5OTYzNzAwMF9uYTFmbl9hVzV1YjNaaGRHbHZiaTFoWm5KcFkyRnVMWFJsWTJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nPxJ9X1PeeN7CrOwh5Rx7z3sH6NeXuQZtwyCcTP1KUbVo-le64YDiJG80re755Ie~LMmOLNkj2kSFx-iN~EO33uoJGeSdp~geX8KpPyXGzcld-e4LhviBx3OTMtDs4atjr2~ZLYl2uhDE8BFTP-DcXU8QhholAuOZmV84qJwYHv6d5YnaYeqAjB7OsoNz9AZ1DAVd5PAzTA3bpTYe6MtFpkodWDUXzXKdok2hXxDLZZH9KLyJimrsdtExx18QzAOZ8LEe7UZmMxGPgAdwVPYOuPJ~FcTuoEDp2GoxmO2cJ7B1GWHzctPAbyCcIBYjXIz04CQk4HeKGVzJS-FTK0E8w__"
                alt="Innovation - African Tech"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment Rising Digital IA peut accélérer votre croissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
            >
              Demander un Devis <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/22893392515"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-blue-900 text-blue-900 font-bold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              WhatsApp: +228 93 39 25 15
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
