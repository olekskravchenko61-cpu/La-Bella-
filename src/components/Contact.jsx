import { MapPin, Phone, Navigation } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();
  const mapsQuery = encodeURIComponent(business.mapsQuery);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const embedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <p className="section-eyebrow">{t.contact.eyebrow}</p>
          <h2 className="section-title">{t.contact.title}</h2>

          <div className="contact__card">
            <h3>{business.name}</h3>

            <div className="contact__row">
              <MapPin size={18} aria-hidden="true" />
              <div>
                <span className="contact__label">{t.contact.addressLabel}</span>
                <a href={directionsUrl} target="_blank" rel="noreferrer">
                  {business.street}
                  <br />
                  {business.postalCode} {business.city}
                </a>
              </div>
            </div>

            <div className="contact__row">
              <Phone size={18} aria-hidden="true" />
              <div>
                <span className="contact__label">{t.contact.phoneLabel}</span>
                <a href={business.phoneHref}>{business.phoneDisplay}</a>
              </div>
            </div>

            <div className="contact__actions">
              <a href={business.phoneHref} className="btn btn-primary">
                <Phone size={16} aria-hidden="true" />
                {t.contact.call}
              </a>
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                <Navigation size={16} aria-hidden="true" />
                {t.contact.directions}
              </a>
            </div>
          </div>
        </div>

        <div className="contact__map">
          <iframe
            title="La Bella – Google Maps"
            src={embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
