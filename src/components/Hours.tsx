import { HOURS } from '../data/site'
import { useLang } from '../i18n'
import type { Key } from '../i18n/translations'
export function Hours() {
  const { t } = useLang()
  return (
    <section className="section section--soft" id="hours">
      <div className="container narrow">
        <h2>{t('hours.title')}</h2>
        <dl className="hours">
          {HOURS.map(h => (
            <div key={h.key}>
              <dt>{t(`hours.${h.key}` as Key)}</dt>
              <dd>{t('hours.from')} {h.from}{h.to && ` – ${h.to}`}</dd>
            </div>
          ))}
        </dl>
        <p className="lead">{t('hours.all')}</p>
        <p>{t('hours.dec')}</p>
      </div>
    </section>
  )
}
