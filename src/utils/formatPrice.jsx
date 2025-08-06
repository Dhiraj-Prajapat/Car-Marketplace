<<<<<<< HEAD
// utils/formatPrice.js

export function formatPriceToLakh(price) {
  if (!price || isNaN(price)) return "";

  const inLakh = price / 100000;
  const formatted = inLakh % 1 === 0 ? inLakh : inLakh.toFixed(1);
  return `${formatted} Lakh`;
=======
// utils/formatPrice.js

export function formatPriceToLakh(price) {
  if (!price || isNaN(price)) return "";

  const inLakh = price / 100000;
  const formatted = inLakh % 1 === 0 ? inLakh : inLakh.toFixed(1);
  return `${formatted} Lakh`;
>>>>>>> 0b9d9ff80be45c3e85e413b4d56accecb4e19f1d
}