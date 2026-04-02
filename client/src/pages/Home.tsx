import {
  ArrowRight, Zap, Globe, PenTool, BookOpen,
  Star, Users, Award, Network, Calendar, CheckCircle,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const services = [
    {
      emoji: '🌐',
      title: 'Présence Digitale',
      desc: 'Sites web modernes, e-commerce et portails qui convertissent vos visiteurs en clients.',
      items: ['Sites web responsifs', 'E-commerce & boutiques', 'Portails & plateformes'],
    },
    {
      emoji: '🎨',
      title: 'Contenu & Design',
      desc: 'Logos, vidéos et supports visuels qui donnent une image forte et professionnelle.',
      items: ['Logos & identité visuelle', 'Vidéos promotionnelles', 'Flyers & banners'],
    },
    {
      emoji: '🤖',
      title: 'IA & Automatisation',
      desc: 'Chatbots, SEO et automatisation pour gagner du temps et attirer plus de prospects.',
      items: ['Chatbots IA intelligents', 'Optimisation SEO', 'Automatisation processus'],
    },
    {
      emoji: '🎓',
      title: 'Formation & Stratégie',
      desc: 'Formations pratiques en IA, coaching et consulting adaptés aux réalités africaines.',
      items: ['Formation IA pratique', 'Coaching entrepreneurial', "Plans d'affaires stratégiques"],
    },
  ];

  const stats = [
    { number: '150+', label: 'Projets livrés', icon: Award },
    { number: '120+', label: 'Clients satisfaits', icon: Users },
    { number: '95%', label: 'Satisfaction client', icon: Star },
    { number: '10+', label: 'Experts réseau', icon: Network },
  ];

  const testimonials = [
    {
      name: 'Kofi A.',
      role: 'Directeur, PME Commerciale',
      location: 'Togo',
      text: "Rising Digital IA a transformé notre présence en ligne. Notre chiffre d'affaires a triplé en 6 mois. Une équipe sérieuse et très professionnelle.",
      result: '+300% de ventes',
    },
    {
      name: 'Aminata D.',
      role: 'Fondatrice, Boutique en ligne',
      location: 'Bénin',
      text: 'Mon site e-commerce a été livré en 10 jours, design soigné et rapide. Mes clients adorent. Je recommande sans hésiter.',
      result: '+180 commandes/mois',
    },
    {
      name: 'Jean-Claude M.',
      role: 'Entrepreneur, Start-up Tech',
      location: "Côte d'Ivoire",
      text: "Le chatbot IA répond à mes clients 24h/24. J'économise 15h par semaine. Un investissement qui vaut vraiment le coup.",
      result: '15h gagnées/semaine',
    },
  ];

  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white pt-14 pb-16 md:pt-20 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full opacity-5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full opacity-5 blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-300 text-sm font-semibold mb-5">
                <Zap className="w-4 h-4" />
                Agence Digitale & IA — Afrique de l'Ouest
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Votre Croissance Digitale,{' '}
                <span className="text-yellow-400">Notre Mission.</span>
              </h1>
              <p className="text-lg text-blue-100 mb-5 leading-relaxed">
                Rising Digital IA accompagne les{' '}
                <strong className="text-white">PME, entrepreneurs et institutions</strong>{' '}
                vers la transformation digitale grâce à l'IA, au design et au marketing moderne.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-7">
                {['Réponse en 24h', 'Devis 100% gratuit', 'Sans engagement'].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 text-sm text-green-300 font-medium">
                    <CheckCircle className="w-4 h-4" /> {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/30"
                >
                  <Calendar className="w-5 h-5" />
                  Réserver un échange gratuit
                </Link>
                <Link
                  href="/services"
                  className="px-7 py-3.5 border-2 border-yellow-500/60 text-yellow-300 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all flex items-center justify-center gap-2"
                >
                  Voir nos Services <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right — stats */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map(({ number, label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:border-yellow-500/50 transition-all"
                >
                  <Icon className="w-7 h-7 text-yellow-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-yellow-400">{number}</div>
                  <div className="text-sm text-blue-200 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stats strip */}
          <div className="grid grid-cols-2 gap-3 mt-10 lg:hidden">
            {stats.map(({ number, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <Icon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div>
                  <div className="text-xl font-bold text-yellow-400">{number}</div>
                  <div className="text-xs text-blue-200">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-3">
              Nos Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Tout ce dont votre business a besoin
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ emoji, title, desc, items }) => (
              <div
                key={title}
                className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl mb-3">{emoji}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{desc}</p>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all"
            >
              Voir tous nos services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ──────────────────────────────────────────── */}
      <section className="py-8 bg-yellow-500">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-blue-900 font-bold text-sm">
            {['🏢 PME & Commerces', '🏛️ ONG & Institutions', '💻 Start-ups Tech', '👤 Entrepreneurs', '📋 Professions libérales'].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-3">
              Témoignages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, location, text, result }) => (
              <div key={name} className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed flex-1">"{text}"</p>
                <div className="border-t border-white/10 pt-4 flex justify-between items-end">
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-xs text-blue-300">{role} · {location}</div>
                  </div>
                  <div className="bg-yellow-500 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                    {result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full opacity-10 blur-3xl pointer-events-none" />

        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 rounded-full text-yellow-300 text-sm font-semibold mb-5">
            <Zap className="w-4 h-4" />
            Consultation gratuite disponible maintenant
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à passer à la vitesse supérieure ?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            En 24h, vous recevez une proposition concrète adaptée à votre budget. Sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-yellow-500 text-blue-900 font-bold rounded-lg hover:bg-yellow-400 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/30"
            >
              <Calendar className="w-5 h-5" />
              Réserver un échange gratuit
            </Link>
            <a
              href="https://wa.me/22893392515"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-yellow-500/70 text-yellow-300 font-bold rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp: +228 93 39 25 15
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
