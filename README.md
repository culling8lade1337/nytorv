# Restaurant & Café Nytorv
`npm install && npm run dev` · `npm run build`

- Menu: `src/data/menu.ts` (+ English ingredient terms in `glossary.ts`, categories in `sections.ts`)
- Colours / type / spacing / radius: top of `src/styles.css`
- Translations: `src/i18n/translations.ts`
- Maps + App Store links, phone, email, hours: `src/data/site.ts`
- New dish: add a row to a `group(...)` call in `menu.ts`
- New category: add id to `SectionId` (types/menu.ts), add labels in `sections.ts`, add a `group('<id>', ...)` in `menu.ts`
