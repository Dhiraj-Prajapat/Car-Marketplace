// utils/formatPrice.js

export function formatPriceToLakh(price) {
  if (!price || isNaN(price)) return "";

  const inLakh = price / 100000;
  const formatted = inLakh % 1 === 0 ? inLakh : inLakh.toFixed(1);
  return `${formatted} Lakh`;
}