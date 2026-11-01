import { useLanguage } from "../context/LanguageContext";
import { pizzaMenu } from "../data/menu";
import { getIngredientLabel } from "../data/translations";
import { business } from "../data/business";
import "./MenuSection.css";

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

export default function MenuSection() {
  const { t, language } = useLanguage();
  const featured = pizzaMenu.filter((p) => p.featured);

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu__intro">
          <p className="section-eyebrow">{t.menu.eyebrow}</p>
          <h2 className="section-title">{t.menu.title}</h2>
          <p className="section-text">{t.menu.intro}</p>
        </div>

        <div className="menu__featured">
          {featured.map((pizza) => (
            <article className="menu-card" key={pizza.id}>
              <div className="menu-card__media">
                <img src={pizza.image} alt={pizza.name} loading="lazy" />
                <span className="menu-card__size">{t.menu.sizeLabel}</span>
              </div>
              <div className="menu-card__body">
                <div className="menu-card__heading">
                  <h3>{pizza.name}</h3>
                  <span className="menu-card__price">{formatPrice(pizza.price)}</span>
                </div>
                <p className="menu-card__ingredients">
                  {pizza.ingredients
                    .map((ing) => getIngredientLabel(ing, language))
                    .join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="menu__full">
          <div className="menu__full-header">
            <h3>{t.menu.categoryPizza}</h3>
            <span className="menu__full-size">{t.menu.sizeLabel}</span>
          </div>

          <ul className="menu-list">
            {pizzaMenu.map((pizza) => (
              <li className="menu-list__item" key={pizza.id}>
                <div className="menu-list__text">
                  <span className="menu-list__name">{pizza.name}</span>
                  <span className="menu-list__ingredients">
                    {pizza.ingredients
                      .map((ing) => getIngredientLabel(ing, language))
                      .join(", ")}
                  </span>
                </div>
                <span className="menu-list__dots" aria-hidden="true" />
                <span className="menu-list__price">
                  {pizza.priceUnconfirmed ? t.menu.priceUnconfirmed : formatPrice(pizza.price)}
                </span>
              </li>
            ))}
          </ul>

          <p className="menu__note">{t.menu.sizeNote}</p>
          <p className="menu__note">{t.menu.otherCategoriesNote}</p>
          <p className="menu__order">
            {t.menu.orderNote}{" "}
            <a href={business.phoneHref}>{business.phoneDisplay}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
