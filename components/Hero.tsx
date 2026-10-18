"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MoreHorizontal,
  Flame,
  Plus,
} from "lucide-react";

export default function Hero() {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(14832);
  const [bookmarked, setBookmarked] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [activeStory, setActiveStory] = useState<string | null>(null);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail("");
    }
  };

  const stories = [
    {
      id: "user",
      name: "Votre story",
      isUser: true,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "sarah",
      name: "Sarah",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "lucas",
      name: "Lucas",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "elena",
      name: "Elena",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    },
    {
      id: "noah",
      name: "Noah",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-20 md:pt-14 md:pb-32">
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[550px] opacity-40 blur-3xl pointer-events-none">
        <div className="w-full h-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 rounded-full opacity-20 transform -rotate-12" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 dark:border-rose-900/60 bg-rose-50/70 dark:bg-rose-950/40 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-rose-700 dark:text-rose-300 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-rose-500 animate-spin-slow" />
              <span>La nouvelle façon de partager vos moments</span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
              Capturez l&apos;instant. <br />
              <span className="instagram-text-gradient">
                Partagez votre univers.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              Le réseau social nouvelle génération dédié à la beauté des images,
              aux stories authentiques et aux vraies connexions. Sans algorithmes
              agressifs, sans pollution visuelle — juste vos créations et vos amis.
            </p>

            {/* Waitlist Form */}
            <div className="mt-8 w-full max-w-md">
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre adresse e-mail..."
                  required
                  className="flex-1 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-sm"
                />
                <button
                  type="submit"
                  className="rounded-full instagram-gradient px-6 py-3 text-sm font-semibold text-white shadow-md shadow-rose-500/25 hover:shadow-lg hover:shadow-rose-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Rejoindre</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {submitted && (
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 animate-fade-in">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Merci ! Votre invitation anticipée a été enregistrée.</span>
                </div>
              )}

              <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                🔒 Gratuit • Zéro spam • Accès prioritaire à l&apos;application iOS &amp; Android
              </p>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Utilisateur 1"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Utilisateur 2"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Utilisateur 3"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-900 object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Utilisateur 4"
                />
              </div>

              <div className="text-left text-xs sm:text-sm">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  {"★".repeat(5)}
                  <span className="text-zinc-700 dark:text-zinc-300 ml-1 font-semibold">
                    4.9 / 5
                  </span>
                </div>
                <span className="text-zinc-500 dark:text-zinc-400">
                  Plus de <strong>50 000 créateurs</strong> attendent la sortie
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-amber-500/20 rounded-full blur-2xl transform scale-90 -z-10" />

            {/* Floating Badge 1 - Top Left */}
            <div className="hidden sm:flex absolute -top-4 -left-6 z-20 items-center gap-2.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2.5 shadow-xl border border-zinc-200/80 dark:border-zinc-800 animate-float">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
                <Flame className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">
                  Tendance du moment
                </p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                  #GoldenHour &bull; 42k partages
                </p>
              </div>
            </div>

            {/* Floating Badge 2 - Bottom Right */}
            <div className="hidden sm:flex absolute -bottom-5 -right-4 z-20 items-center gap-2.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2.5 shadow-xl border border-zinc-200/80 dark:border-zinc-800 animate-float-delayed">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">
                  Qualité Ultra HD
                </p>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                  Zéro compression d&apos;image
                </p>
              </div>
            </div>

            {/* Main Phone Frame */}
            <div className="w-[310px] sm:w-[340px] rounded-[44px] bg-zinc-950 p-3 shadow-2xl shadow-rose-950/20 ring-1 ring-zinc-800">
              {/* Dynamic Island / Speaker */}
              <div className="relative mx-auto h-4 w-28 rounded-full bg-zinc-900 mb-2 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-zinc-800 mr-2" />
                <div className="h-1.5 w-10 rounded-full bg-zinc-800" />
              </div>

              {/* Inner Screen */}
              <div className="overflow-hidden rounded-[36px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80">
                {/* App Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-900">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-black tracking-tight instagram-text-gradient">
                      Aura
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handleLike}
                      className="text-zinc-700 dark:text-zinc-300 hover:text-rose-500 transition-colors"
                      title="Activité"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          liked ? "fill-rose-500 text-rose-500" : ""
                        }`}
                      />
                    </button>
                    <div className="relative text-zinc-700 dark:text-zinc-300">
                      <Send className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
                        2
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stories Bar */}
                <div className="flex items-center gap-2.5 px-3 py-2.5 overflow-x-auto no-scrollbar border-b border-zinc-100 dark:border-zinc-900/60">
                  {stories.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveStory(s.name)}
                      className="flex flex-col items-center gap-1 shrink-0 focus:outline-none group"
                    >
                      <div
                        className={`p-[2px] rounded-full transition-transform duration-200 group-hover:scale-105 ${
                          s.isUser
                            ? "border-2 border-dashed border-zinc-300 dark:border-zinc-700"
                            : "instagram-gradient"
                        }`}
                      >
                        <div className="relative rounded-full p-[2px] bg-white dark:bg-zinc-950">
                          <img
                            src={s.img}
                            alt={s.name}
                            className="h-11 w-11 rounded-full object-cover"
                          />
                          {s.isUser && (
                            <span className="absolute bottom-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-white">
                              <Plus className="h-3 w-3" />
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] font-medium text-zinc-600 dark:text-zinc-400 max-w-[48px] truncate">
                        {s.name}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Main Feed Post */}
                <div className="p-0">
                  {/* Post Author */}
                  <div className="flex items-center justify-between px-3.5 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="instagram-gradient p-[1.5px] rounded-full">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                          alt="Sarah"
                          className="h-7 w-7 rounded-full object-cover p-[1px] bg-white dark:bg-zinc-950"
                        />
                      </div>
                      <div className="text-left">
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                            sarah.explore
                          </span>
                          <span className="h-1 w-1 rounded-full bg-rose-500" />
                          <span className="text-[10px] text-rose-500 font-medium">
                            Suivre
                          </span>
                        </div>
                        <p className="text-[9px] text-zinc-400">
                          Santorin, Grèce &bull; Il y a 2h
                        </p>
                      </div>
                    </div>
                    <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Post Image */}
                  <div
                    className="relative aspect-square w-full bg-zinc-100 dark:bg-zinc-900 overflow-hidden cursor-pointer select-none"
                    onDoubleClick={handleLike}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop&q=80"
                      alt="Santorini Sunset"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />

                    {/* Temporary Heart Pop animation on like */}
                    {liked && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-ping">
                        <Heart className="h-20 w-20 fill-white text-white drop-shadow-lg opacity-80" />
                      </div>
                    )}

                    <div className="absolute bottom-2 right-2 rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[9px] font-medium text-white">
                      1 / 3
                    </div>
                  </div>

                  {/* Post Actions */}
                  <div className="px-3.5 pt-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleLike}
                          className="transition-transform active:scale-125 focus:outline-none"
                        >
                          <Heart
                            className={`h-5 w-5 transition-colors duration-200 ${
                              liked
                                ? "fill-rose-500 text-rose-500 scale-110"
                                : "text-zinc-700 dark:text-zinc-300 hover:text-rose-500"
                            }`}
                          />
                        </button>
                        <button className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                          <MessageCircle className="h-5 w-5" />
                        </button>
                        <button className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
                          <Send className="h-5 w-5" />
                        </button>
                      </div>

                      <button
                        onClick={() => setBookmarked(!bookmarked)}
                        className="text-zinc-700 dark:text-zinc-300 transition-transform active:scale-110"
                      >
                        <Bookmark
                          className={`h-5 w-5 ${
                            bookmarked
                              ? "fill-zinc-900 dark:fill-white text-zinc-900 dark:text-white"
                              : "hover:text-zinc-900 dark:hover:text-white"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Likes & Caption */}
                    <div className="mt-2 text-left space-y-1 pb-3">
                      <p className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">
                        {likesCount.toLocaleString("fr-FR")} J&apos;aime
                      </p>
                      <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-snug">
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100 mr-1.5">
                          sarah.explore
                        </span>
                        Quand le soleil plonge dans la mer Égée... La lumière
                        d&apos;or est juste magique ici ✨🇬🇷
                      </p>
                      <p className="text-[10px] text-zinc-400 pt-0.5">
                        Voir les 142 commentaires
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
