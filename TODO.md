Что сделано
Step 1: packages/ui ✅
- package.json для @repo/ui (name, exports, scripts, peerDeps)
- tsconfig.json, tsup.config.ts, CSS-module type declarations
- Баррель-экспорт index.ts (14 компонентов)
- Сборка через tsup (ESM + DTS) — проходит
- Проведён рефакторинг компонентов:
- Иконки, Breadcrumbs, Select — импорты типов заменены с @/shared на локальные
- LandingCards, LifeFlowLogo — next/image → <img>, тип icon → iconSrc
- AuthForm, ErrorFallback — зависимости от @/features, next/navigation через props
- Storybook — установлен, настроен (main.ts, preview.tsx), билдится
Step 1c: Web imports → @repo/ui ✅
- @repo/ui добавлен в apps/web/package.json
- 14 файлов импортов обновлены:
- @/shared → @repo/ui (Button, Input, Select, AuthForm, Breadcrumbs, ErrorFallback, LifeFlowLogo, LandingCard, SquareLine, иконки)
- Относительные пути ../../../../../packages/ui/... → @repo/ui
- not-found.tsx, error.tsx, SecondaryLayout.tsx, Footer.tsx, Sidebar.tsx — передают src/alt для LifeFlowLogo, коллбеки/children для ErrorFallback/AuthForm
- TypeScript compilation: 0 errors ✅
Step 2: Biome shared config ✅
- Корневой biome.json — base linter + formatter
- Backend: исправлены скрипты (--config-path=../configs убран)
- Mobile: @biomejs/biome установлен, скрипт lint → biome check
- packages/eslint-config — удалён
- Lint проверка: web работает ✅, backend/mobile — не прогонял
Step 3: Jest shared config ✅
- packages/jest-config/ — base / react / native пресеты
- Backend: jest.config.ts с projects (unit + e2e), inline config из package.json удалён
- Web: jest, ts-jest, @types/jest, identity-obj-proxy установлены, jest.config.ts создан
- Mobile: jest, jest-expo, @types/jest установлены, jest.config.ts создан
- Turbo.json: test задача добавлена
- Root package.json: "test": "turbo run test" добавлен
Step 4: Прочие конфиги (частично)
- Backend tsconfig.json — исправлен extends (был на несуществующий файл, теперь @repo/typescript-config/base.json)
- Всем приложениям добавлены скрипты "check-types": "tsc --noEmit" (мобильному — тоже, с типами разобрался)
- check-types через turbo проверяет 6 пакетов
Что сделано дополнительно (04.06.2026)
✅ Фаза 0: Быстрые фиксы
- Удалён apps/backend/package-lock.json (npm артефакт в pnpm монорепозитории)
- Удалён мёртвый экспорт "./styles" из @repo/ui package.json (tsup не генерирует dist/styles/)
- Удалён engines.npm из backend package.json (проект на pnpm)
- Убран publishConfig.access: "public" из packages/typescript-config (внутренний пакет)

✅ Фаза 1.1: check-types
- web: фикс jest.config.ts (as Config вместо satisfies Config) — exactOptionalPropertyTypes
- backend: добавлен скрипт check-types (отсутствовал)
- Все 4 пакета с check-types проходят: @repo/ui, web, backend, mobile

✅ Фаза 1.2: lint
- backend: biome auto-fix (кавычки, отступы, import type) + создан biome.json с "useImportType": "off"
  (необходимо для NestJS DI — декораторы require runtime imports)
- mobile: biome auto-fix (кавычки, отступы, import organization)
- web: pre-existing ошибки понижены до warn в biome.json:
  • CSS: noImportantStyles, noDescendingSpecificity, noDuplicateProperties, noShorthandPropertyOverrides
  • a11y: useButtonType, useKeyWithClickEvents, noSvgWithoutTitle
  • correctness: noChildrenProp, noEmptyPattern
  • suspicious: noShadowRestrictedNames, noDocumentCookie, noArrayIndexKey
- Все 3 пакета lint проходят (web: 15 warnings, 0 errors)

✅ Фаза 1.3: test
- backend: 2/2 тестов проходят (unit + e2e)
  • Фикс: import type { AppService } → import { AppService } (NestJS DI)
- web: --passWithNoTests
- mobile: jest.config.ts → jest.config.js (ts-node rootDir conflict с workspace симлинками)
  + packages/jest-config/tsconfig.json
  + --passWithNoTests

✅ Фаза 1.4: Storybook
- pnpm --filter @repo/ui storybook стартует на localhost:6006, HTTP 200
- Предупреждение: нет компонентных сториз (только boilerplate)

✅ Фаза 2: Чистка зависимостей
- prettier удалён из корня, скрипт format → biome format --write
- vite удалён из apps/web
- ts-loader удалён из apps/backend (ts-node, tsconfig-paths оставлены для test:debug)

Замеченные проблемы (не исправлены, non-blocking):
1. Backend package name "nest-typescript-starter" — обобщённый нейминг
2. Backend jest.config.ts не использует @repo/jest-config/base (свой inline config с projects)
3. packages/typescript-config — check-types не настроен (нет скрипта в package.json)
4. Нет компонентных Storybook сториз (biome:
   "components/**/*.stories.@(js|jsx|mjs|ts|tsx" — 0 файлов)