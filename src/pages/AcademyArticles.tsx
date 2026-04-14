import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function AcademyArticles() {
  const articles = [
    "Amor Fati : Aimer le destin",
    "Antifragilité : prospérer par le désordre",
    "Biominétisme : ingénierie de la nature",
    "Chronos vs Kairos : maîtriser le temps",
    "L'économie de l'attention : l'or moderne",
    "État de Flow : la performance sans effort",
    "Fatigue mentale et burnout digital",
    "Ikigai : la boussole du sens",
    "Meta-apprentissage : apprendre à apprendre",
    "Neuroplasticité dirigée",
    "Le mythe du multitasking",
    "Le nerf vague, clé du calme",
    "Éthique algorithmique",
    "Le syndrome de l'imposteur comme allié",
    "Épigénétique : au-delà de l'ADN"
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
            Articles de <span className="italic text-primary">Fond</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-2xl">
            Explorations intellectuelles pour comprendre le monde et soi-même.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.1 }}
              className="p-6 border border-border/50 rounded-xl bg-card hover:border-primary/50 transition-colors cursor-pointer group"
            >
              <h3 className="font-serif text-lg mb-4 group-hover:text-primary transition-colors">{article}</h3>
              <div className="flex items-center text-xs text-muted-foreground">
                <span>Lecture • 5 min</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}