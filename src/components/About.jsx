import { useLanguage } from "../context/LanguageContext";
import doenerImage from "../assets/images/doner-kebab.jpg";
import pizzaImage from "../assets/images/pizza-funghi.jpg";
import "./About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__media">
          <img src={pizzaImage} alt="" loading="lazy" className="about__img about__img--main" />
          <img src={doenerImage} alt="" loading="lazy" className="about__img about__img--accent" />
        </div>

        <div className="about__text">
          <p className="section-eyebrow">{t.about.eyebrow}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-text">{t.about.text}</p>
        </div>
      </div>
    </section>
  );
}
