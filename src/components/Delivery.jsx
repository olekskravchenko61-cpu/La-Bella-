import { Phone, Bike } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import deliveryImage from "../assets/images/doner-rotisserie.jpg";
import "./Delivery.css";

export default function Delivery() {
  const { t } = useLanguage();

  return (
    <section id="delivery" className="delivery">
      <div className="container delivery__inner">
        <div className="delivery__text">
          <p className="section-eyebrow">{t.delivery.eyebrow}</p>
          <h2 className="section-title">{t.delivery.title}</h2>
          <p className="section-text">{t.delivery.text}</p>

          <div className="delivery__actions">
            <a href={business.phoneHref} className="btn btn-primary">
              <Phone size={18} aria-hidden="true" />
              {t.delivery.callButton}
            </a>
            <a href={business.phoneHref} className="delivery__phone">
              {business.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="delivery__media">
          <img src={deliveryImage} alt="" loading="lazy" />
          <div className="delivery__badge">
            <Bike size={20} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
