import type { AdItem } from "@/services";
import { CATEGORY_PARAMS_FIELDS } from "../constants";

export const PROMT_TYPE = {
  PRICE: "generate_price",
  DESCRIPTION: "generate_description",
} as const;

export type PromtTypeKey = keyof typeof PROMT_TYPE;

export type PromtTypeValue = (typeof PROMT_TYPE)[PromtTypeKey];

export const PRICE_SYSTEM_PROMPT = `
  Ты — эксперт-аналитик по оценке товаров на Авито. Твоя задача — помочь продавцу определить справедливую и конкурентную цену.

  Ограничение: не пиши обоснований, сфокусируйся только на цифрах и краткому обоснованию.

  Ответ дай на русском языке

  Вот как должден выглядеть ответ:

  "Средняя цена на MacBook Pro 16" M1 Pro (16/512GB):
  115 000 – 135 000 ₽ — отличное состояние.
  От 140 000 ₽ — идеал, малый износ АКБ.
  90 000 – 110 000 ₽ — срочно или с дефектами."
  `;

export const DESCRIPTION_SYSTEM_PROMPT = `
  Ты — профессиональный копирайтер для классифайдов (Авито). Твоя задача — превратить скудную информацию от продавца в продающий, структурированный текст объявления.

  Придерживайся структуры:
  1. преимущества товара, честное состояние, история использования.
  2. Технические параметры: списком, чтобы было удобно читать.
  3. Call-to-Action (CTA): конкретный призыв (звоните, пишите, забирайте).

  Правила:
  - Убирай "воду", капслок и лишние восклицательные знаки.
  - Используй дружелюбный, но деловой стиль.

  Ответ пиши только на русском языке
  `;

export const GENERATE_PRICE_PROMT = (data: AdItem) => {
  const params = data.params;
  const fields = CATEGORY_PARAMS_FIELDS[data.category];

  const paramsString = Object.entries(params)
    .filter(([_, value]) => !!value)
    .map(
      ([key, value], index) =>
        `\n\t${index + 1}. ${fields[key as keyof typeof fields]}-${value}`,
    );

  return `
  Проанализируй цену для следующего товара и дай краткий ответ:
  Категория: ${data.category}
  Заголовок: ${data.title}
  Текущая цена: ${data.price || "не указана"}
  Технические характеристики: ${paramsString}
  Описание от продавца: ${data.description || "отсутствует"}
    `.trim();
};

export const GENERATE_DESCRIPTON_PROMT = (data: AdItem) => {
  console.log(data);

  const params = data.params;
  const fields = CATEGORY_PARAMS_FIELDS[data.category];

  const paramsString = Object.entries(params)
    .filter(([_, value]) => !!value)
    .map(
      ([key, value], index) =>
        `\n\t${index + 1}. ${fields[key as keyof typeof fields]}-${value}`,
    );

  return `
  Проанализируй характеристики следующего объявления и напиши/дополни описание:
  Категория: ${data.category}
  Заголовок: ${data.title}
  Текущая цена: ${data.price || "не указана"}
  Технические характеристики: ${paramsString}
  Описание от продавца: ${data.description || "отсутствует"}
    `.trim();
};
