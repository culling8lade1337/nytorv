import { useLang } from '../i18n'
// Backstory. Edit the copy in i18n/translations.ts (keys story.*).
export function About() {
  const { t } = useLang()
  return (
    <section className="section" id="about">
      <div className="container split">
        <div>
          <h2>{t('story.title')}</h2>
          <p className="lead">{t('story.p1')}</p>
          <p>{t('story.p2')}</p>
        </div>
        <div className="tiles" aria-hidden="true">
          <svg className="tile tile--check" viewBox="0 0 200 200"><defs><pattern id="c2" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#fbf1dc" /><rect width="20" height="20" fill="#b3261e" /><rect x="20" y="20" width="20" height="20" fill="#b3261e" /></pattern></defs><rect width="200" height="200" fill="url(#c2)" /></svg>
          <svg className="tile tile--arch" viewBox="0 0 200 200"><rect width="200" height="200" fill="#3a1230" /><path d="M50 200V100a50 50 0 0 1 100 0V200z" fill="#ffd37a" /><path d="M50 200V100a50 50 0 0 1 100 0V200z" fill="none" stroke="#c98a3c" strokeWidth="8" /><text x="100" y="150" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fill="#7b2d26">1966</text></svg>
        </div>
      </div>
    </section>
  )
}
