import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";

const NAV_ITEMS = [
  { id: "home", key: "home" },
  { id: "menu", key: "menu" },
  { id: "delivery", key: "delivery" },
  { id: "about", key: "about" },
  { id: "contact", key: "contact" },
];

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo" onClick={closeMenu}>
          La <span>Bella</span>
        </a>

        <nav className="header__nav header__nav--desktop" aria-label="Main navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{t.nav[item.key]}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions header__actions--desktop">
          <LanguageSwitcher />
          <a href={business.phoneHref} className="btn btn-primary header__call">
            <Phone size={16} aria-hidden="true" />
            {t.nav.call}
          </a>
        </div>

        <button
          type="button"
          className="header__burger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`header__mobile ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={closeMenu}>
                  {t.nav[item.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={business.phoneHref} className="btn btn-primary header__mobile-call" onClick={closeMenu}>
          <Phone size={16} aria-hidden="true" />
          {t.nav.call}
        </a>
        <LanguageSwitcher className="header__mobile-lang" />
      </div>
    </header>
  );
}
