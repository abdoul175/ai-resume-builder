import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Camille V.",
      role: "Photographe de voyage",
      handle: "@camille_visuals",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      content:
        "J'avais perdu le plaisir de poster sur les réseaux traditionnels à cause des algorithmes agressifs et des pubs à répétition. Aura remet enfin la photo et la communauté au centre.",
      rating: 5,
    },
    {
      name: "Thomas B.",
      role: "Directeur artistique",
      handle: "@thomas_design",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
      content:
        "Le respect du format, la clarté du design et l'absence de compression destructive changent tout. C'est l'écrin parfait pour les créateurs exigeants.",
      rating: 5,
    },
    {
      name: "Léa & Marc",
      role: "Créateurs de contenu",
      handle: "@lea_marc_life",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&auto=format&fit=crop&q=80",
      content:
        "Le fil chronologique avec nos amis proches est une bouffée d'air frais. On partage nos stories sans la pression du perfectionnisme toxique.",
      rating: 5,
    },
  ];

  return (
    <section id="temoignages" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-500 dark:text-rose-400">
            Témoignages
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Adopté par les passionnés d&apos;images.
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Découvrez pourquoi photographes, artistes et utilisateurs quotidiens choisissent Aura.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-8 flex items-center gap-3.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="instagram-gradient p-[1.5px] rounded-full shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover p-[1px] bg-white dark:bg-zinc-950"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <span>{t.role}</span>
                    <span>&bull;</span>
                    <span className="text-rose-500 font-medium">{t.handle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
