"use client";

import { useState } from "react";
import { Camera, Menu, X, ArrowRight } from "lucide-react";
import AuthModal from "@/components/AuthModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const openLogin = () => {
    setAuthMode("login");
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  const openSignup = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  const switchMode = () => {
    setAuthMode((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80 transition-colors">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl instagram-gradient shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300">
              <Camera className="h-5 w-5 text-white" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight font-sans text-zinc-900 dark:text-white flex items-center gap-1">
                Aura
                <span className="text-xs px-1.5 py-0.5 rounded-full bg-rose-100 text-rose-600 dark:bg-rose-950/60 dark:text-rose-400 font-medium">
                  Bêta
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="#apercu"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Aperçu
            </a>
            <a
              href="#fonctionnalites"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Fonctionnalités
            </a>
            <a
              href="#explorer"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Explorer
            </a>
            <a
              href="#temoignages"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              Créateurs
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openLogin}
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white px-3 py-2 transition-colors"
            >
              Se connecter
            </button>
            <button
              onClick={openSignup}
              className="inline-flex items-center gap-2 rounded-full instagram-gradient px-4 py-2 text-sm font-semibold text-white shadow-md shadow-rose-500/20 hover:opacity-95 hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-200"
            >
              <span>Rejoindre Aura</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-2 pb-6 space-y-3">
            <a
              href="#apercu"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Aperçu
            </a>
            <a
              href="#fonctionnalites"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Fonctionnalités
            </a>
            <a
              href="#explorer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Explorer
            </a>
            <a
              href="#temoignages"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              Créateurs
            </a>
            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
              <button
                onClick={openLogin}
                className="w-full text-center py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Se connecter
              </button>
              <button
                onClick={openSignup}
                className="w-full text-center py-2.5 rounded-full instagram-gradient text-sm font-semibold text-white shadow-md shadow-rose-500/20"
              >
                Rejoindre Aura
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={switchMode}
      />
    </>
  );
}
