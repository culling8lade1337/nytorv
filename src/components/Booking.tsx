import { useState, type FormEvent } from 'react'
import { SITE } from '../data/site'
import { useLang } from '../i18n'

const FIELDS = [['first', 'book.first', 'text', 'given-name'], ['last', 'book.last', 'text', 'family-name'], ['phone', 'book.phone', 'tel', 'tel'], ['email', 'book.email', 'email', 'email']] as const

export function Booking() {
  const { t } = useLang()
  const [v, setV] = useState<Record<string, string>>({})
  // No backend: the form composes an email to the restaurant.
  const submit = (e: FormEvent) => {
    e.preventDefault()
    const body = `${v.first ?? ''} ${v.last ?? ''}\n${v.phone ?? ''}\n${v.email ?? ''}\n\n${v.msg ?? ''}`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Bordbestilling')}&body=${encodeURIComponent(body)}`
  }
  return (
    <section className="section" id="booking">
      <div className="container split">
        <div>
          <h2>{t('book.title')}</h2>
          <p className="lead">{t('book.text')}</p>
          <p className="contact"><a href={SITE.phoneHref}>{SITE.phone}</a><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        </div>
        <form className="form" onSubmit={submit}>
          {FIELDS.map(([id, k, type, ac]) => (
            <div className="field" key={id}>
              <label htmlFor={id}>{t(k)}</label>
              <input id={id} type={type} autoComplete={ac} required={id !== 'phone'} onChange={e => setV({ ...v, [id]: e.target.value })} />
            </div>
          ))}
          <div className="field field--wide">
            <label htmlFor="msg">{t('book.msg')}</label>
            <textarea id="msg" rows={4} onChange={e => setV({ ...v, msg: e.target.value })} />
          </div>
          <button className="btn btn--primary" type="submit">{t('book.send')}</button>
          <p className="fine">{t('book.note')}</p>
        </form>
      </div>
    </section>
  )
}
