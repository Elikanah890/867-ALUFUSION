import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Lang = "en" | "sw";

const dict = {
  en: {
    nav_home: "Home", nav_about: "About", nav_services: "Services", nav_projects: "Projects", nav_contact: "Contact",
    cta_quote: "Get Quote", cta_free_quote: "Get Free Quote", cta_view_work: "View Our Work",
    hero_badge: "Since 2020 • Premium Aluminium & Glass",
    hero_title: "We Install Your Vision",
    hero_sub: "Precision Aluminium • Modern Glass Works • Steel Fabrication",
    hero_desc: "Transforming architectural visions into reality across Tanzania with high-quality fabrication, installation, and maintenance services.",
  },
  sw: {
    nav_home: "Nyumbani", nav_about: "Kuhusu", nav_services: "Huduma", nav_projects: "Miradi", nav_contact: "Wasiliana",
    cta_quote: "Pata Bei", cta_free_quote: "Pata Bei Bure", cta_view_work: "Tazama Kazi Zetu",
    hero_badge: "Tangu 2020 • Aluminium na Vioo Bora",
    hero_title: "Tunaweka Maono Yako",
    hero_sub: "Aluminium Sahihi • Kazi za Vioo za Kisasa • Utengenezaji wa Chuma",
    hero_desc: "Kubadilisha maono ya usanifu kuwa ukweli kote Tanzania kwa huduma bora za utengenezaji, usakinishaji na matengenezo.",
  },
} as const;

type Key = keyof typeof dict.en;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>({
  lang: "en", setLang: () => {}, t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const stored = (typeof localStorage !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "en" || stored === "sw") setLangState(stored);
  }, []);
  const setLang = (l: Lang) => { setLangState(l); if (typeof localStorage !== "undefined") localStorage.setItem("lang", l); };
  const t = (k: Key) => dict[lang][k] ?? dict.en[k];
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);