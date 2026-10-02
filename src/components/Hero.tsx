import { useEffect, useRef, useState } from 'react'
import { SITE } from '../data/site'
import { useLang } from '../i18n'
import { Button } from './Button'
import { PourArt } from './scene/PourArt'
import { RestaurantArt } from './scene/RestaurantArt'

/** Pinned scene: the glass fills while the first screen is scrolled, then the next block slides over it. */
export function Hero() {
  const { t } = useLang()
  const [p, setP] = useState(0)
  const stage = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setP(1); return }
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setP(Math.min(1, Math.max(0, window.scrollY / (stage.current?.offsetHeight || window.innerHeight)))))
    }
    update()
    window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])
  return (
    <section className="scene" id="top">
      <div className="scene__stage" ref={stage}>
        <RestaurantArt p={p} />
        <div className="scene__shade" />
        <div className="container scene__text" style={{ opacity: 1 - p * 0.9 }}>
          <p className="hero__addr">{t('hero.addr')}</p>
          <h1>Restaurant & Café Nytorv</h1>
          <p className="hero__tag">{t('hero.title')}</p>
          <p className="hero__sub">{t('hero.sub')}</p>
          <div className="actions">
            <Button href="#menu">{t('cta.menu')}</Button>
            <Button href={SITE.mapsUrl} variant="ghost" external>{t('cta.find')}</Button>
            <Button href={SITE.appStoreUrl} variant="text" external>{t('cta.app')}</Button>
          </div>
        </div>
        <PourArt p={p} />
      </div>
    </section>
  )
}
