import { useLang } from '../i18n'
import { tr } from '../data/glossary'
import { SECTION_DA, SECTION_EN } from '../data/sections'
import type { MenuItem } from '../types/menu'

type Props = { item: MenuItem; index: number; showWhere?: boolean }
export function MenuCard({ item, index, showWhere }: Props) {
  const { lang, t } = useLang()
  const en = lang === 'en'
  const name = (en && item.nameEn) || item.name
  const desc = (en && item.descriptionEn) || item.description
  const sec = (en ? SECTION_EN : SECTION_DA)[item.section]
  return (
    <article className="card">
      <span className="card__num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <div className="card__head">
        <h4>{name}</h4>
        <span className="price">{item.priceLabel ?? item.price}{t('price.suffix')}</span>
      </div>
      {showWhere && <p className="card__where">{sec} → {item.subsection}</p>}
      {desc && <p className="card__desc">{desc}</p>}
      {item.ingredients.length > 0 && <p className="card__ing">{item.ingredients.map(i => (en ? tr(i) : i)).join(' · ')}</p>}
      {item.seasonal && <p className="card__tag">{t('seasonal')}</p>}
    </article>
  )
}
