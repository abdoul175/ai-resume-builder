import { Camera, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl instagram-gradient shadow-md shadow-rose-500/20">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Aura
              </span>
            </div>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              Une plateforme visuelle moderne dédiée aux photos, aux stories et à l&apos;expression créative. Conçue pour rapprocher les passionnés en toute authenticité.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-zinc-500">
              <Globe className="h-4 w-4" />
              <span>Français (France)</span>
            </div>
          </div>

          {/* Col 1 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Produit
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#apercu" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Aperçu
                </a>
              </li>
              <li>
                <a href="#fonctionnalites" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Stories &amp; Reels
                </a>
              </li>
              <li>
                <a href="#explorer" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Explorer
                </a>
              </li>
              <li>
                <a href="#telecharger" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Application mobile
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Créateurs
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#temoignages" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Programme Créateurs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Conseils de style
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Charte communautaire
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Tendances
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Légal &amp; Sécurité
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Conditions de service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Gestion des cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                  Centre d&apos;aide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Aura Inc. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer">
              Instagram
            </span>
            <span className="hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer">
              Twitter / X
            </span>
            <span className="hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer">
              LinkedIn
            </span>
            <span className="hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer">
              GitHub
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
