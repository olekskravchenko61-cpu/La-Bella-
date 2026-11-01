import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Footer.css";

const NAV_ITEMS = [
  { id: "home", key: "home" },
  { id: "menu", key: "menu" },
  { id: "delivery", key: "delivery" },
  { id: "about", key: "about" },
  { id: "contact", key: "contact" },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            La <span>Bella</span>
          </a>
          <p>{business.street}</p>
          <p>
            {business.postalCode} {business.city}
          </p>
          <a href={business.phoneHref} className="footer__phone">
            {business.phoneDisplay}
          </a>
        </div>

        <div className="footer__col">
          <h4>{t.footer.navTitle}</h4>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{t.nav[item.key]}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t.footer.legal}</h4>
          <ul>
            <li>
              <a href="#impressum">{t.footer.impressum}</a>
            </li>
            <li>
              <a href="#datenschutz">{t.footer.datenschutz}</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>{t.footer.languageTitle}</h4>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {year} {business.name} — {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
