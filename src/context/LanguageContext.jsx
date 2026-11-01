import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, languages, defaultLanguage } from "../data/translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "la-bella-language";

function getInitialLanguage() {
  if (typeof window === "undefined") return defaultLanguage;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && languages.includes(stored)) return stored;
  } catch {
    // localStorage unavailable — fall back to default
  }
  return defaultLanguage;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore write failures (private browsing, etc.)
    }
  }, [language]);

  const setLanguage = (lang) => {
    if (languages.includes(lang)) setLanguageState(lang);
  };

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
