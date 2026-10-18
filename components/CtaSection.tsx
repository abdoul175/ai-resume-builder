import { ArrowRight, Smartphone, Sparkles } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="telecharger" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] instagram-gradient p-8 sm:p-14 lg:p-20 text-white shadow-2xl shadow-rose-500/30">
          {/* Subtle decorative circles */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Accès immédiat &bull; Gratuit pour tous</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Prêt à redécouvrir le plaisir de partager ?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Rejoignez des milliers de passionnés de photo, d&apos;art et d&apos;instants
              du quotidien sur Aura. Créez votre profil en quelques secondes.
            </p>

            {/* App Store / Google Play / Direct CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#inscription"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-bold text-zinc-950 shadow-xl hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Créer mon compte gratuit</span>
                <ArrowRight className="h-4 w-4 text-rose-600" />
              </a>

              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-black/30 hover:bg-black/40 backdrop-blur-md border border-white/20 px-6 py-4 text-sm font-semibold text-white transition-all">
                <Smartphone className="h-4 w-4" />
                <span>Télécharger l&apos;application</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80">
              <span className="flex items-center gap-1.5">
                ✓ Disponible sur iOS &amp; Android
              </span>
              <span className="flex items-center gap-1.5">
                ✓ Sans engagement ni carte bancaire
              </span>
              <span className="flex items-center gap-1.5">
                ✓ Données 100% sécurisées
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
