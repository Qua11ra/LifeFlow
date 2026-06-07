# LifeFlow — план работ

## Цель

Перевести `@repo/ui` с CSS Modules на plain CSS + настроить автообновление при dev-режиме.

## Задачи

### Шаг 1: Конвертация CSS Modules → Plain CSS

Переименовать файлы и заменить содержимое.

| Компонент | Файл CSS | Классы |
|-----------|----------|--------|
| AuthForm | `AuthForm.module.css` → `AuthForm.css` | `authForm__card`, `authForm__title`, `authForm__fields`, `authForm__bottom` |
| ErrorFallback | `ErrorFallback.module.css` → `ErrorFallback.css` | `errorFallback__section`, `errorFallback__info`, `errorFallback__buttons` |
| Input | `Input.module.css` → `Input.css` | `input__background`, `input__button`, `input__input` |
| LandingCards | `LandingCards.module.css` → `LandingCards.css` | `landingCard__card`, `landingCard__iconBackground`, `landingCard__bigCard`, `landingCard__background`, `landingCard__info`, `landingCard__label`, `landingCard__progress`, `landingCard__line`, `landingCard__lineFilled` |
| Select | `Select.module.css` → `Select.css` | `select__select`, `select__option` |
| SquareLine | `SquareLine.module.css` → `SquareLine.css` | `squareLine`, `squareLine__left`, `squareLine__center`, `squareLine__right` |

### Шаг 2: Обновить TSX-компоненты

В каждом из 6 компонентов:
- Заменить `import styles from "./X.module.css"` на `import "./X.css"`
- Заменить `className={styles.xxx}` на `className="xxx__yyy"`

### Шаг 3: Удалить `css.d.ts`

Файл `packages/ui/css.d.ts` больше не нужен.

### Шаг 4: Настроить сборку `@repo/ui`

- `tsup.config.ts` — проверить, что CSS экстрактится корректно
- `package.json` — добавить экспорт CSS: `"./style.css": "./dist/index.css"`

### Шаг 5: Настроить `next.config.ts`

- Добавить `transpilePackages: ["@repo/ui"]`
- Добавить `webpack.watchOptions`, чтобы webpack отслеживал изменения в `@repo/ui/dist`

### Шаг 6: Подключить CSS в корневом layout

- `apps/web/src/app/layout.tsx` — добавить `import "@repo/ui/style.css"`

### Шаг 7: Проверить сборку

- `pnpm lint` — линтер
- `pnpm check-types` — типы
- `pnpm build` — билд @repo/ui и web
- `pnpm dev` — dev-режим, проверить что изменения в CSS @repo/ui подхватываются
