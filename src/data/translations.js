// Translation dictionary for DE (default) / EN / RU.
// Restaurant name, address and phone number are never translated.

export const languages = ["de", "en", "ru"];
export const defaultLanguage = "de";

export const ingredientTranslations = {
  Käse: { de: "Käse", en: "Cheese", ru: "Сыр" },
  Tomatensauce: { de: "Tomatensauce", en: "Tomato sauce", ru: "Томатный соус" },
  Salami: { de: "Salami", en: "Salami", ru: "Салями" },
  Schinken: { de: "Schinken", en: "Ham", ru: "Ветчина" },
  Champignons: { de: "Champignons", en: "Mushrooms", ru: "Шампиньоны" },
  Pilze: { de: "Pilze", en: "Mushrooms", ru: "Грибы" },
  Thunfisch: { de: "Thunfisch", en: "Tuna", ru: "Тунец" },
  Zwiebeln: { de: "Zwiebeln", en: "Onions", ru: "Лук" },
  Ananas: { de: "Ananas", en: "Pineapple", ru: "Ананас" },
  Oliven: { de: "Oliven", en: "Olives", ru: "Оливки" },
  Artischocken: { de: "Artischocken", en: "Artichokes", ru: "Артишоки" },
  Spinat: { de: "Spinat", en: "Spinach", ru: "Шпинат" },
  Weißkäse: { de: "Weißkäse", en: "White cheese", ru: "Белый сыр" },
  "frische Tomaten": { de: "frische Tomaten", en: "Fresh tomatoes", ru: "Свежие томаты" },
  Bolognese: { de: "Bolognese", en: "Bolognese", ru: "Болоньезе" },
  Spaghetti: { de: "Spaghetti", en: "Spaghetti", ru: "Спагетти" },
  Döner: { de: "Döner", en: "Döner", ru: "Донер" },
  Mozzarella: { de: "Mozzarella", en: "Mozzarella", ru: "Моцарелла" },
  Paprika: { de: "Paprika", en: "Bell pepper", ru: "Паприка" },
  Ei: { de: "Ei", en: "Egg", ru: "Яйцо" },
  Peperoni: { de: "Peperoni", en: "Chili peppers", ru: "Перец чили" },
  Broccoli: { de: "Broccoli", en: "Broccoli", ru: "Брокколи" },
  "scharfe Peperoni": { de: "scharfe Peperoni", en: "Hot chili peppers", ru: "Острый перец чили" },
  Sardellen: { de: "Sardellen", en: "Anchovies", ru: "Анчоусы" },
  Knoblauch: { de: "Knoblauch", en: "Garlic", ru: "Чеснок" },
  Putenbrust: { de: "Putenbrust", en: "Turkey breast", ru: "Грудка индейки" },
  "Sauce Hollandaise": { de: "Sauce Hollandaise", en: "Hollandaise sauce", ru: "Соус голландез" },
  Rucola: { de: "Rucola", en: "Arugula", ru: "Руккола" },
  Mais: { de: "Mais", en: "Sweetcorn", ru: "Кукуруза" },
  Meeresfrüchte: { de: "Meeresfrüchte", en: "Seafood", ru: "Морепродукты" },
  "3 Beilagen nach Wunsch": {
    de: "3 Beilagen nach Wunsch",
    en: "3 toppings of your choice",
    ru: "3 начинки на выбор",
  },
};

export const translations = {
  de: {
    meta: {
      title: "La Bella Barntrup – Pizza, Döner & mehr",
      description:
        "La Bella in Barntrup: frische Pizza, Döner und mehr. Lieferservice per Telefon. Mittelstraße 35, 32683 Barntrup.",
    },
    language: { de: "DE", en: "EN", ru: "RU" },
    nav: {
      home: "Startseite",
      menu: "Speisekarte",
      delivery: "Lieferung",
      about: "Über uns",
      contact: "Kontakt",
      call: "Anrufen",
    },
    hero: {
      title: "Pizza, Döner & mehr. Mitten in Barntrup.",
      subtitle: "Frisch zubereitete Lieblingsgerichte für jeden Tag.",
      ctaMenu: "Speisekarte entdecken",
      ctaContact: "Kontakt",
    },
    menu: {
      eyebrow: "Unsere Speisekarte",
      title: "Pizza – frisch für dich gemacht",
      intro:
        "Von der klassischen Margherita bis zur würzigen Barntrup Spezial: Entdecke unsere Pizzen, jede frisch zubereitet. Die Preise gelten für die 20-cm-Größe.",
      sizeLabel: "20 cm",
      sizeNote:
        "Hinweis: Unsere Speisekarte bietet auch größere Pizzagrößen an. Die Preise dafür folgen in Kürze.",
      priceUnconfirmed: "Preis wird noch bestätigt",
      otherCategoriesNote:
        "Weitere Kategorien unserer Speisekarte folgen, sobald sie verfügbar sind.",
      categoryPizza: "Pizza",
      orderNote: "Bestellungen telefonisch unter",
    },
    delivery: {
      eyebrow: "Lieferservice",
      title: "Dein Lieblingsessen. Direkt zu dir.",
      text:
        "La Bella liefert dir Pizza, Döner und mehr nach Hause. Ruf uns einfach an, und wir bringen dein Essen frisch zubereitet zu dir.",
      callButton: "Jetzt anrufen",
      phoneLabel: "Telefon",
    },
    about: {
      eyebrow: "Über uns",
      title: "La Bella in Barntrup",
      text:
        "La Bella ist eine Pizzeria in Barntrup. Wir bieten Pizza, Döner und weitere Gerichte an – frisch zubereitet und auch bequem nach Hause geliefert.",
    },
    hours: {
      eyebrow: "Öffnungszeiten",
      title: "Öffnungszeiten",
      placeholder: "Öffnungszeiten bitte telefonisch erfragen.",
      days: {
        monday: "Montag",
        tuesday: "Dienstag",
        wednesday: "Mittwoch",
        thursday: "Donnerstag",
        friday: "Freitag",
        saturday: "Samstag",
        sunday: "Sonntag",
      },
      closed: "Geschlossen",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "So erreichst du uns",
      addressLabel: "Adresse",
      phoneLabel: "Telefon",
      directions: "Route planen",
      call: "Anrufen",
    },
    footer: {
      navTitle: "Navigation",
      contactTitle: "Kontakt",
      languageTitle: "Sprache",
      legal: "Rechtliches",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      rights: "Alle Rechte vorbehalten.",
    },
  },

  en: {
    meta: {
      title: "La Bella Barntrup – Pizza, Döner & More",
      description:
        "La Bella in Barntrup: fresh pizza, döner and more. Order delivery by phone. Mittelstraße 35, 32683 Barntrup.",
    },
    language: { de: "DE", en: "EN", ru: "RU" },
    nav: {
      home: "Home",
      menu: "Menu",
      delivery: "Delivery",
      about: "About",
      contact: "Contact",
      call: "Call",
    },
    hero: {
      title: "Pizza, Döner & More. Right in Barntrup.",
      subtitle: "Freshly made favorites, every day.",
      ctaMenu: "Explore the Menu",
      ctaContact: "Contact",
    },
    menu: {
      eyebrow: "Our Menu",
      title: "Pizza – freshly made for you",
      intro:
        "From the classic Margherita to the spicy Barntrup Spezial: discover our pizzas, each one freshly made. Prices shown are for the 20 cm size.",
      sizeLabel: "20 cm",
      sizeNote:
        "Note: our menu also offers larger pizza sizes. Prices for those will be added soon.",
      priceUnconfirmed: "Price to be confirmed",
      otherCategoriesNote:
        "More menu categories will be added as soon as they become available.",
      categoryPizza: "Pizza",
      orderNote: "Order by phone at",
    },
    delivery: {
      eyebrow: "Delivery",
      title: "Your favorite food. Delivered to you.",
      text:
        "La Bella delivers pizza, döner and more straight to your door. Just give us a call, and we'll bring your food freshly made.",
      callButton: "Call Now",
      phoneLabel: "Phone",
    },
    about: {
      eyebrow: "About Us",
      title: "La Bella in Barntrup",
      text:
        "La Bella is a pizzeria in Barntrup. We offer pizza, döner and other dishes, freshly made and also available for convenient home delivery.",
    },
    hours: {
      eyebrow: "Opening Hours",
      title: "Opening Hours",
      placeholder: "Please call us to confirm our opening hours.",
      days: {
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
      },
      closed: "Closed",
    },
    contact: {
      eyebrow: "Contact",
      title: "Get in Touch",
      addressLabel: "Address",
      phoneLabel: "Phone",
      directions: "Get Directions",
      call: "Call",
    },
    footer: {
      navTitle: "Navigation",
      contactTitle: "Contact",
      languageTitle: "Language",
      legal: "Legal",
      impressum: "Imprint",
      datenschutz: "Privacy Policy",
      rights: "All rights reserved.",
    },
  },

  ru: {
    meta: {
      title: "La Bella Barntrup – пицца, донер и не только",
      description:
        "La Bella в Барнтрупе: свежая пицца, донер и другие блюда. Доставка по телефону. Mittelstraße 35, 32683 Barntrup.",
    },
    language: { de: "DE", en: "EN", ru: "RU" },
    nav: {
      home: "Главная",
      menu: "Меню",
      delivery: "Доставка",
      about: "О нас",
      contact: "Контакты",
      call: "Позвонить",
    },
    hero: {
      title: "Пицца, донер и не только. В самом сердце Барнтрупа.",
      subtitle: "Свежеприготовленные любимые блюда каждый день.",
      ctaMenu: "Смотреть меню",
      ctaContact: "Контакты",
    },
    menu: {
      eyebrow: "Наше меню",
      title: "Пицца — готовим свежей специально для вас",
      intro:
        "От классической Маргариты до острой Barntrup Spezial — попробуйте нашу пиццу, каждая готовится свежей. Цены указаны за размер 20 см.",
      sizeLabel: "20 см",
      sizeNote:
        "Обратите внимание: в меню также есть пицца большего размера. Цены на неё появятся позже.",
      priceUnconfirmed: "Цена уточняется",
      otherCategoriesNote: "Другие категории меню появятся по мере готовности.",
      categoryPizza: "Пицца",
      orderNote: "Заказ по телефону",
    },
    delivery: {
      eyebrow: "Доставка",
      title: "Любимая еда. Прямо к вам.",
      text:
        "La Bella доставляет пиццу, донер и другие блюда прямо к вам домой. Просто позвоните нам, и мы привезём свежеприготовленную еду.",
      callButton: "Позвонить сейчас",
      phoneLabel: "Телефон",
    },
    about: {
      eyebrow: "О нас",
      title: "La Bella в Барнтрупе",
      text:
        "La Bella — пиццерия в Барнтрупе. Мы готовим пиццу, донер и другие блюда — свежими, а также доставляем их прямо к вам домой.",
    },
    hours: {
      eyebrow: "Часы работы",
      title: "Часы работы",
      placeholder: "Уточняйте часы работы по телефону.",
      days: {
        monday: "Понедельник",
        tuesday: "Вторник",
        wednesday: "Среда",
        thursday: "Четверг",
        friday: "Пятница",
        saturday: "Суббота",
        sunday: "Воскресенье",
      },
      closed: "Закрыто",
    },
    contact: {
      eyebrow: "Контакты",
      title: "Как нас найти",
      addressLabel: "Адрес",
      phoneLabel: "Телефон",
      directions: "Проложить маршрут",
      call: "Позвонить",
    },
    footer: {
      navTitle: "Навигация",
      contactTitle: "Контакты",
      languageTitle: "Язык",
      legal: "Правовая информация",
      impressum: "Выходные данные",
      datenschutz: "Политика конфиденциальности",
      rights: "Все права защищены.",
    },
  },
};

export function getIngredientLabel(ingredient, lang) {
  const entry = ingredientTranslations[ingredient];
  if (!entry) return ingredient;
  return entry[lang] || entry.de;
}
