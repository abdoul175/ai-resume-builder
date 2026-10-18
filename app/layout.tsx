import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aura • Capturez et partagez chaque instant",
  description:
    "Le nouveau réseau social visuel pour connecter créateurs et passionnés. Partagez vos photos, stories et vidéos dans une expérience fluide et inspirante.",
  keywords: ["réseau social", "photos", "stories", "instagram", "créateurs", "partage", "communauté"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${firaCode.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fafafa] text-zinc-900 dark:bg-[#09090b] dark:text-zinc-100 selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
