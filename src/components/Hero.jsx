import { useLanguage } from "../context/LanguageContext";
import heroImage from "../assets/images/hero-pizza.jpg";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero__media">
        <img src={heroImage} alt="" loading="eager" />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className="container hero__content">
        <p className="hero__brand">La Bella — Barntrup</p>
        <h1 className="hero__title">{t.hero.title}</h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__actions">
          <a href="#menu" className="btn btn-primary">
            {t.hero.ctaMenu}
          </a>
          <a href="#contact" className="btn btn-outline hero__btn-outline">
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
