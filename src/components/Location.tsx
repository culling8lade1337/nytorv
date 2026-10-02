import { SITE } from '../data/site'
import { useLang } from '../i18n'
import { Button } from './Button'
export function Location() {
  const { t } = useLang()
  return (
    <section className="section" id="location">
      <div className="container split">
        <div>
          <h2>{t('loc.title')}</h2>
          <p className="lead">{t('loc.sub')}</p>
          <address>{SITE.address.map(l => <span key={l}>{l}</span>)}</address>
          <Button href={SITE.mapsUrl} external>{t('cta.maps')}</Button>
        </div>
        <iframe className="map" title={t('map.title')} src={SITE.mapsEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  )
}
