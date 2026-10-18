import {
  Sparkles,
  Camera,
  Layers,
  MessageCircle,
  Film,
  ShieldCheck,
  HeartHandshake,
  Compass,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Sparkles,
      title: "Stories éphémères",
      description:
        "Partagez les coulisses de votre journée en toute liberté. Vos stories s'effacent automatiquement après 24 heures pour encourager la spontanéité.",
      gradient: "from-amber-500 to-rose-500",
      tag: "Populaire",
    },
    {
      icon: Camera,
      title: "Rendu visuel sans perte",
      description:
        "Fini la compression destructrice. Vos photos et carrousels conservent toute la fidélité, le piqué et les couleurs de votre capteur d'origine.",
      gradient: "from-rose-500 to-purple-600",
      tag: "Haute Définition",
    },
    {
      icon: Layers,
      title: "Filtres & Studio intégré",
      description:
        "Sublimez vos clichés d'un seul geste avec des préréglages cinématiques inspirés de la pellicule argentique et des retouches simples.",
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      icon: Film,
      title: "Vidéos & Reels fluides",
      description:
        "Capturez et montez de courtes vidéos immersives en plein écran. Ajoutez votre ambiance sonore et touchez une audience réceptive.",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: MessageCircle,
      title: "Discussions & Cercles intimes",
      description:
        "Réagissez directement aux stories, envoyez des photos à vue unique et partagez vos moments avec une liste d'amis proches dédiée.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: ShieldCheck,
      title: "Fil d'actualité serein",
      description:
        "Reprenez le contrôle avec un flux chronologique de vos amis. Zéro manipulation addictive, zéro publicité invasive entre chaque publication.",
      gradient: "from-emerald-500 to-teal-600",
      tag: "Éthique",
    },
  ];

  return (
    <section id="fonctionnalites" className="py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400">
            Une expérience épurée
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Tout ce que vous aimez dans le partage visuel,{" "}
            <span className="instagram-text-gradient">sans les excès.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Aura a été conçu pour redonner ses lettres de noblesse à la photographie
            et aux relations authentiques entre créateurs et passionnés.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/60 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Accent top gradient line on hover */}
                <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr ${feature.gradient} text-white shadow-md shadow-rose-500/20`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {feature.tag && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {feature.tag}
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-xl font-bold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
