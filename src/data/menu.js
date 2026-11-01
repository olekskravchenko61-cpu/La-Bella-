// Menu data sourced directly from the restaurant's photographed menu.
// Only the 20 cm pizza prices were visible in the photo — larger sizes exist
// on the menu but their prices were cropped out of the photo and are not shown.
// Do not add ingredients or prices that were not visible in the source photo.

import pizzaMargherita from "../assets/images/pizza-margherita.jpg";
import pizzaSalami from "../assets/images/pizza-salami.jpg";
import pizzaFunghi from "../assets/images/pizza-funghi.jpg";
import pizzaThunfisch from "../assets/images/pizza-thunfisch.jpg";
import pizzaVegetaria from "../assets/images/pizza-vegetaria.jpg";
import pizzaDoener from "../assets/images/pizza-doner.jpg";

export const pizzaMenu = [
  {
    id: "margherita",
    name: "Margherita",
    ingredients: ["Käse", "Tomatensauce"],
    price: 5.5,
    image: pizzaMargherita,
    featured: true,
  },
  {
    id: "salami",
    name: "Salami",
    ingredients: ["Salami"],
    price: 6.0,
    image: pizzaSalami,
    featured: true,
  },
  {
    id: "prosciutta",
    name: "Prosciutta",
    ingredients: ["Schinken"],
    price: 6.0,
  },
  {
    id: "funghi",
    name: "Funghi",
    ingredients: ["Champignons"],
    price: 6.0,
    image: pizzaFunghi,
    featured: true,
  },
  {
    id: "romana",
    name: "Romana",
    ingredients: ["Schinken", "Champignons"],
    price: 6.0,
  },
  {
    id: "napoli",
    name: "Napoli",
    ingredients: ["Schinken", "Salami"],
    price: 6.0,
  },
  {
    id: "thunfisch",
    name: "Thunfisch",
    ingredients: ["Thunfisch", "Zwiebeln"],
    price: 6.0,
    image: pizzaThunfisch,
    featured: true,
  },
  {
    id: "hawaii",
    name: "Hawaii",
    ingredients: ["Schinken", "Ananas"],
    price: 6.0,
  },
  {
    id: "4-jahreszeiten",
    name: "4 Jahreszeiten",
    ingredients: ["Schinken", "Oliven", "Champignons", "Artischocken"],
    price: 6.0,
  },
  {
    id: "rosa",
    name: "Rosa",
    ingredients: ["Salami", "Champignons"],
    price: 6.0,
  },
  {
    id: "spinat",
    name: "Spinat",
    ingredients: ["Spinat", "Weißkäse", "frische Tomaten"],
    price: 6.5,
  },
  {
    id: "mista",
    name: "Mista",
    ingredients: ["Schinken", "Pilze", "Salami", "Thunfisch"],
    price: 6.5,
  },
  {
    id: "spaghetti",
    name: "Spaghetti",
    ingredients: ["Spaghetti", "Bolognese"],
    price: 6.0,
  },
  {
    id: "doener",
    name: "Döner",
    ingredients: ["Döner", "Zwiebeln"],
    price: 7.0,
    image: pizzaDoener,
    featured: true,
  },
  {
    id: "mozzarella",
    name: "Mozzarella",
    ingredients: ["Mozzarella", "frische Tomaten"],
    price: 7.0,
  },
  {
    id: "la-bella",
    name: "La Bella",
    ingredients: [
      "Salami",
      "Schinken",
      "Thunfisch",
      "Paprika",
      "Ei",
      "Peperoni",
      "Broccoli",
      "Zwiebeln",
      "Oliven",
    ],
    price: 7.0,
  },
  {
    id: "barntrup",
    name: "Barntrup",
    ingredients: [
      "Salami",
      "Schinken",
      "Champignons",
      "Paprika",
      "Artischocken",
      "Oliven",
      "Ei",
    ],
    price: 7.0,
  },
  {
    id: "siciliana",
    name: "Siciliana",
    ingredients: ["Paprika", "Zwiebeln", "Peperoni", "Knoblauch"],
    price: 7.0,
  },
  {
    id: "vegetaria",
    name: "Vegetaria",
    ingredients: ["Paprika", "Pilze", "Artischocken", "Zwiebeln", "Oliven"],
    price: 7.0,
    image: pizzaVegetaria,
    featured: true,
  },
  {
    id: "mexikaner",
    name: "Mexikaner",
    ingredients: ["Bolognese", "Salami", "Mais", "scharfe Peperoni"],
    price: 7.0,
  },
  {
    id: "marinara",
    name: "Marinara",
    ingredients: ["Sardellen", "Oliven", "scharfe Peperoni", "Knoblauch"],
    price: 7.0,
  },
  {
    id: "barntrup-spezial",
    name: "Barntrup Spezial",
    ingredients: [
      "Putenbrust",
      "Pilze",
      "Thunfisch",
      "Ananas",
      "Sauce Hollandaise",
      "Rucola",
    ],
    price: 7.0,
  },
  {
    id: "italia",
    name: "Italia",
    ingredients: ["frische Tomaten", "Putenbrust", "Sauce Hollandaise", "Rucola"],
    price: 7.0,
  },
  {
    id: "bombay",
    name: "Bombay",
    ingredients: ["Putenbrust", "Ananas"],
    price: 7.0,
  },
  {
    id: "ufo",
    name: "UFO",
    ingredients: ["3 Beilagen nach Wunsch"],
    price: 7.0,
  },
  {
    id: "pizza-mare",
    name: "Pizza Mare",
    ingredients: ["Thunfisch", "Sardellen", "Meeresfrüchte", "Knoblauch"],
    price: 8.0,
  },
  {
    id: "frutti-di-mare",
    name: "Frutti di Mare",
    ingredients: ["Meeresfrüchte", "Knoblauch"],
    price: 8.0,
    priceUnconfirmed: true,
  },
];

// The menu photo also showed a column of prices for a larger pizza size,
// but the bottom of the photo was cropped off and those prices are not
// readable. Only the 20 cm prices above are confirmed and displayed.
export const pizzaSize = "20 cm";
