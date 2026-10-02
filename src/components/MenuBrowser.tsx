import { useMemo, useState } from 'react'
import { MENU } from '../data/menu'
import { SECTIONS, SECTION_DA, SECTION_EN } from '../data/sections'
import { useLang } from '../i18n'
import { groupMenu, searchMenu } from '../utils/search'
import type { SectionId } from '../types/menu'
import { MenuCard } from './MenuCard'
import { MenuSection } from './MenuSection'
import { SearchBar } from './SearchBar'

export function MenuBrowser() {
  const { t, lang } = useLang()
  const [q, setQ] = useState('')
  const [filter, setFilter] = useState<SectionId | 'all'>('all')
  const results = useMemo(() => searchMenu(MENU, q, filter), [q, filter])
  const searching = q.trim().length > 0
  const labels = lang === 'en' ? SECTION_EN : SECTION_DA
  return (
    <section className="section section--soft" id="menu">
      <div className="container">
        <h2>{t('menu.title')}</h2>
        <SearchBar value={q} onChange={setQ} />
        <div className="filters" role="group" aria-label="Filter">
          {(['all', ...SECTIONS] as const).map(s => (
            <button key={s} className="chip" aria-pressed={filter === s} onClick={() => setFilter(s)}>
              {s === 'all' ? t('filter.all') : labels[s]}
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{searching ? `${results.length} ${t('search.count')}` : ''}</p>
        {searching ? (
          results.length ? (
            <div className="grid">{results.map((it, i) => <MenuCard key={it.id} item={it} index={i} showWhere />)}</div>
          ) : (
            <div className="empty"><p className="empty__title">{t('search.none')} “{q.trim()}”</p><p>{t('search.hint')}</p></div>
          )
        ) : (
          groupMenu(results).map(g => <MenuSection key={g.section} section={g.section} subsections={g.subsections} />)
        )}
        <p className="fine">{t('footer.fee')}</p>
      </div>
    </section>
  )
}
