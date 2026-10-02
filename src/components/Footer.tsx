import { SITE } from '../data/site'
import { useLang } from '../i18n'
export function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div><strong>{SITE.name}</strong>{SITE.address.slice(0, 2).map(l => <span key={l}>{l}</span>)}</div>
        <div><a href={SITE.phoneHref}>{SITE.phone}</a><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
        <nav aria-label={t('footer.links')}>
          <a href="#menu">{t('nav.menu')}</a><a href="#location">{t('nav.location')}</a><a href="#hours">{t('nav.hours')}</a><a href="#booking">{t('nav.booking')}</a>
        </nav>
        <div><a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">Google Maps</a><a href={SITE.appStoreUrl} target="_blank" rel="noopener noreferrer">App Store</a></div>
      </div>
    </footer>
  )
}
