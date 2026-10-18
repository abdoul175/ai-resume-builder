"use client";

import { useState } from "react";
import { Heart, MessageCircle, Compass, Eye, X } from "lucide-react";

type ExploreItem = {
  id: number;
  category: "Voyages" | "Photographie" | "Architecture" | "Portraits";
  title: string;
  creator: string;
  avatar: string;
  imageUrl: string;
  likes: string;
  comments: string;
  aspect: string;
};

export default function ExploreGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [activeItem, setActiveItem] = useState<ExploreItem | null>(null);

  const categories = ["Tous", "Voyages", "Photographie", "Architecture", "Portraits"];

  const items: ExploreItem[] = [
    {
      id: 1,
      category: "Voyages",
      title: "Ruelle au crépuscule en Méditerranée",
      creator: "@sarah.explore",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=700&auto=format&fit=crop&q=80",
      likes: "18.4k",
      comments: "320",
      aspect: "aspect-[4/5]",
    },
    {
      id: 2,
      category: "Photographie",
      title: "Jeux d'ombres et d'oranges",
      creator: "@lucas_raw",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=700&auto=format&fit=crop&q=80",
      likes: "12.1k",
      comments: "145",
      aspect: "aspect-square",
    },
    {
      id: 3,
      category: "Portraits",
      title: "Éclat naturel et golden hour",
      creator: "@elena_muse",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=80",
      likes: "24.9k",
      comments: "580",
      aspect: "aspect-[4/5]",
    },
    {
      id: 4,
      category: "Architecture",
      title: "Lignes minimalistes et béton brut",
      creator: "@arch_studio",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&auto=format&fit=crop&q=80",
      likes: "9.3k",
      comments: "88",
      aspect: "aspect-square",
    },
    {
      id: 5,
      category: "Voyages",
      title: "Brumes sur les cimes alpines",
      creator: "@mountain_pulse",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
      imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop&q=80",
      likes: "31.2k",
      comments: "742",
      aspect: "aspect-[4/5]",
    },
    {
      id: 6,
      category: "Photographie",
      title: "Café matinal & lumière rasante",
      creator: "@noah_visuals",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80",
      imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&auto=format&fit=crop&q=80",
      likes: "15.7k",
      comments: "210",
      aspect: "aspect-square",
    },
  ];

  const filteredItems =
    selectedCategory === "Tous"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section id="explorer" className="py-20 bg-zinc-100/60 dark:bg-zinc-900/40 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-rose-500 dark:text-rose-400 font-semibold text-xs tracking-wider uppercase mb-2">
              <Compass className="h-4 w-4" />
              <span>Onglet Explorer</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Une source inépuisable <br className="hidden sm:inline" />
              d&apos;inspiration visuelle.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "instagram-gradient text-white shadow-md shadow-rose-500/20"
                    : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bg-zinc-200 dark:bg-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className={`${item.aspect} w-full overflow-hidden`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
              </div>

              {/* Instagram-style Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                    <Eye className="h-3.5 w-3.5" />
                    <span>Aperçu</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-semibold leading-snug drop-shadow-sm">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex items-center justify-between border-t border-white/20 pt-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.avatar}
                        alt={item.creator}
                        className="h-6 w-6 rounded-full object-cover ring-1 ring-white"
                      />
                      <span className="text-xs font-medium text-white/90">
                        {item.creator}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-semibold">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3.5 w-3.5" />
                        {item.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="max-h-[420px] md:max-h-[500px] bg-black">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                      <img
                        src={activeItem.avatar}
                        alt={activeItem.creator}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-rose-500"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
                          {activeItem.creator}
                        </h4>
                        <span className="text-xs text-rose-500 font-medium">
                          {activeItem.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                      {activeItem.title}
                    </p>
                    <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                      Publié sur Aura en qualité originale. Découvrez d&apos;autres clichés de cet artiste dans le flux dédié.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
                        {activeItem.likes}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MessageCircle className="h-4 w-4" />
                        {activeItem.comments}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveItem(null)}
                      className="px-4 py-2 rounded-full instagram-gradient text-xs font-semibold text-white shadow-sm"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
