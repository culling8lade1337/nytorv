import { useLang } from '../i18n'
import { SECTION_DA, SECTION_EN } from '../data/sections'
import { MenuCard } from './MenuCard'
import type { MenuItem, SectionId } from '../types/menu'

type Props = { section: SectionId; subsections: { title: string; items: MenuItem[] }[] }
export function MenuSection({ section, subsections }: Props) {
  const { lang } = useLang()
  return (
    <section className="menu-section" aria-labelledby={`sec-${section}`}>
      <h3 id={`sec-${section}`}>{SECTION_DA[section]}{lang === 'en' && <small> / {SECTION_EN[section]}</small>}</h3>
      {subsections.map(s => (
        <div key={s.title} className="subsection">
          <h4 className="subsection__title">{s.title}</h4>
          <div className="grid">{s.items.map((it, i) => <MenuCard key={it.id} item={it} index={i} />)}</div>
        </div>
      ))}
    </section>
  )
}
