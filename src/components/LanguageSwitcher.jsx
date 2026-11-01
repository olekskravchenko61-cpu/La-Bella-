import { useLanguage } from "../context/LanguageContext";
import { languages } from "../data/translations";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher({ className = "" }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className={`lang-switcher ${className}`} role="group" aria-label="Language">
      {languages.map((lang, i) => (
        <span key={lang} className="lang-switcher__item">
          <button
            type="button"
            className={`lang-switcher__btn ${language === lang ? "is-active" : ""}`}
            onClick={() => setLanguage(lang)}
            aria-pressed={language === lang}
          >
            {t.language[lang]}
          </button>
          {i < languages.length - 1 && <span className="lang-switcher__divider">|</span>}
        </span>
      ))}
    </div>
  );
}
