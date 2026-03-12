/**
 * About Page - Rising Digital IA
 * Page À propos avec présentation du fondateur et vision
 * Design: Tech Africain Audacieux
 */

import { Heart, Users, Zap, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Engagement Social',
      description: 'Nous croyons au pouvoir de la technologie pour transformer les vies et communautés',
    },
    {
      icon: Users,
      title: 'Développement des Talents',
      description: 'Formation et mentorat des jeunes pour créer la prochaine génération de leaders digitaux',
    },
    {
      icon: Zap,
      title: 'Innovation Constante',
      description: 'Adoption des dernières technologies pour offrir des solutions avant-gardistes',
    },
    {
      icon: Globe,
      title: 'Impact Africain',
      description: 'Contribution au développement digital et économique de l\'Afrique',
    },
  ];

  const timeline = [
    {
      year: '2013',
      title: 'Début de Carrière',
      description: 'Agent de santé engagé pour le bien-être des communautés',
    },
    {
      year: '2015',
      title: 'Transition Éducative',
      description: 'Enseignant passionné par la formation et le développement des jeunes',
    },
    {
      year: '2018',
      title: 'Formateur Professionnel',
      description: 'Création de programmes de formation en compétences digitales',
    },
    {
      year: '2021',
      title: 'Fondation de Rising Digital IA',
      description: 'Lancement de l\'agence avec une vision claire : digitaliser l\'Afrique intelligemment',
    },
    {
      year: '2024',
      title: 'Leader Visionnaire',
      description: 'Reconnaissance comme expert en transformation digitale et IA en Afrique',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-black text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              À Propos de Rising Digital IA
            </h1>
            <p className="text-xl text-gray-200">
              Une agence fondée sur l'engagement, l'innovation et la vision de transformer l'Afrique grâce à la digitalisation intelligente
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Fondateur */}
            <div className="animate-fade-in-up">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663370713531/ZzPxKNKJISRsvirl.jpg"
                alt="Messan Salem ADIGUIDI - Fondateur Rising Digital IA"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>

            {/* Contenu texte */}
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                Messan Salem ADIGUIDI
              </h2>
              <p className="text-lg text-yellow-600 font-bold mb-6">
                Fondateur & Directeur Général
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Professionnel africain passionné par le développement humain et la transformation digitale, Messan Salem apporte une expérience unique combinant expertise en santé publique, éducation et innovation technologique. Visionnaire engagé pour la digitalisation intelligente de l'Afrique.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Health Project Worker (2013 - Aujourd'hui)</h3>
                  <p className="text-gray-700">
                    Engagement continu auprès des communautés pour améliorer l'accès aux services de santé, l'éducation sanitaire et le bien-être des populations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Enseignant Passionné (2017-2020)</h3>
                  <p className="text-gray-700">
                    Formation de jeunes talents avec un focus sur les compétences pratiques et l'entrepreneuriat.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Formateur & Mentor (2020-2021)</h3>
                  <p className="text-gray-700">
                    Création de programmes de formation en digital marketing, entrepreneuriat et technologies émergentes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Fondateur de Rising Digital IA (2021-Présent)</h3>
                  <p className="text-gray-700">
                    Création d'une agence digitale dédiée à la transformation intelligente des entreprises africaines grâce à l'IA.
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 italic border-l-4 border-yellow-500 pl-4">
                "Ma mission est simple : aider l'Afrique à se digitaliser intelligemment, en mettant la technologie au service du développement humain et économique."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-blue-900 via-yellow-500 to-blue-900"></div>

      {/* Vision & Mission */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl border-2 border-yellow-500">
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">Notre Vision</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Faire de l'Afrique un leader incontournable en innovation digitale et intelligence artificielle, en créant des solutions accessibles, adaptées et impactantes pour les PME, églises et entrepreneurs.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl border-2 border-yellow-500">
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">Notre Mission</h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Transformer les entreprises africaines en les dotant d'outils digitaux et IA de pointe, tout en formant les talents locaux et en contribuant au développement économique durable du continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions et décisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white rounded-xl border-2 border-yellow-500 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
                >
                  <div className="mb-4 p-3 bg-blue-900 rounded-lg inline-block">
                    <Icon className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une évolution marquée par l'engagement, l'apprentissage et l'innovation
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-blue-900 text-lg flex-shrink-0">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-24 bg-yellow-500 mt-4"></div>
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-50 rounded-2xl border-2 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Protection des Enfants</h3>
              <p className="text-gray-700">
                Engagement fort envers la protection et le bien-être des enfants dans tous nos programmes et initiatives.
              </p>
            </div>

            <div className="p-8 bg-blue-50 rounded-2xl border-2 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Développement Durable</h3>
              <p className="text-gray-700">
                Contribution aux objectifs de développement durable des Nations Unies par nos solutions et pratiques.
              </p>
            </div>

            <div className="p-8 bg-blue-50 rounded-2xl border-2 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Excellence Professionnelle</h3>
              <p className="text-gray-700">
                Maintien des plus hauts standards de qualité, d'éthique et de professionnalisme dans tous nos services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 to-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoignez Notre Mouvement
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Ensemble, transformons l'Afrique grâce à la digitalisation intelligente et l'innovation technologique
          </p>
          <a
            href="https://wa.me/22893392515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105"
          >
            Discuter avec Nous
          </a>
        </div>
      </section>
    </div>
  );
}
