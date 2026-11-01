import { Clock, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { openingHours } from "../data/hours";
import { business } from "../data/business";
import "./OpeningHours.css";

const DAY_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function OpeningHours() {
  const { t } = useLanguage();

  return (
    <section id="hours" className="hours">
      <div className="container">
        <p className="section-eyebrow">{t.hours.eyebrow}</p>
        <h2 className="section-title">{t.hours.title}</h2>

        {openingHours.confirmed ? (
          <ul className="hours__list">
            {DAY_ORDER.map((day) => (
              <li key={day} className="hours__row">
                <span>{t.hours.days[day]}</span>
                <span>{openingHours.schedule[day] || t.hours.closed}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="hours__placeholder">
            <Clock size={28} aria-hidden="true" />
            <p>{t.hours.placeholder}</p>
            <a href={business.phoneHref} className="hours__phone">
              <Phone size={16} aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
