import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Link } from "wouter";

export default function AcademyFormations() {
  const formations = [
    { title: "Introduction au développement personnel", duration: "4 Semaines", level: "Débutant" },
    { title: "Maîtrise de l'attention et du focus", duration: "6 Semaines", level: "Intermédiaire" },
    { title: "Intelligence émotionnelle avancée", duration: "8 Semaines", level: "Avancé" },
    { title: "Productivité systémique", duration: "4 Semaines", level: "Intermédiaire" }
  ];

  return (
    <div className="w-full pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif font-medium mb-6">
            Nos <span className="italic text-primary">Formations</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl">
            Programmes intensifs pour maîtriser les outils de l'esprit.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formations.map((form, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 border border-border/50 rounded-2xl bg-card hover:border-primary/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full">{form.level}</span>
                  <span className="text-sm text-muted-foreground">{form.duration}</span>
                </div>
                <h3 className="text-2xl font-serif mb-4">{form.title}</h3>
              </div>
              <Link href="/academy/communaute">
                <span className="mt-8 text-sm font-medium tracking-wide hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1">
                  Découvrir le programme →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
