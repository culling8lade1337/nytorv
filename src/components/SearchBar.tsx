import { useLang } from '../i18n'
export function SearchBar({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const { t } = useLang()
  return (
    <div className="search" role="search">
      <label htmlFor="menu-search" className="search__label">{t('search.label')}</label>
      <div className="search__field">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
        <input id="menu-search" type="search" value={value} placeholder={t('search.ph')} autoComplete="off" onChange={e => onChange(e.target.value)} />
      </div>
    </div>
  )
}
