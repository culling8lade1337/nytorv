import { useState } from 'react'
import { useLang } from '../i18n'
import { LANGS } from '../i18n/translations'
import type { Key } from '../i18n/translations'

const LINKS: [string, Key][] = [['menu', 'nav.menu'], ['about', 'nav.about'], ['location', 'nav.location'], ['hours', 'nav.hours'], ['booking', 'nav.booking']]

export function Header() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header__bar">
        <a className="brand" href="#top">Nytorv<span>Restaurant & Café</span></a>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {LINKS.map(([id, k]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{t(k)}</a>)}
        </nav>
        <div className="lang" role="group" aria-label="Language">
          {LANGS.map(l => <button key={l} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>)}
        </div>
        <button className="burger" aria-expanded={open} aria-label={open ? t('nav.close') : t('nav.open')} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  )
}
