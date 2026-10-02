import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { T, type Key, type Lang } from './translations'

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: Key) => string }>(null!)
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('da')
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  return <Ctx.Provider value={{ lang, setLang, t: k => T[lang][k] }}>{children}</Ctx.Provider>
}
export const useLang = () => useContext(Ctx)
