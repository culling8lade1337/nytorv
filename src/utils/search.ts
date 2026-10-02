import { GLOSSARY } from '../data/glossary'
import { SECTION_DA, SECTION_EN } from '../data/sections'
import type { MenuItem, SectionId } from '../types/menu'

/** Lowercase + strip diacritics so "ost", "Øl", "cafe"/"café" all match. */
export const norm = (s: string) =>
  s.toLowerCase().replace(/ø/g, 'o').replace(/æ/g, 'ae').replace(/å/g, 'a').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

function haystack(i: MenuItem): string {
  const base = [i.name, i.nameEn, i.description, i.descriptionEn, i.subsection, ...i.ingredients, ...i.tags,
    SECTION_DA[i.section], SECTION_EN[i.section]].filter(Boolean).join(' ').toLowerCase()
  const words = base.split(/[^a-zæøåé]+/).filter(Boolean)
  const en = Object.entries(GLOSSARY)
    .filter(([da]) => da.includes(' ') ? base.includes(da)
      : words.some(w => (da.length <= 3 ? w === da : w.startsWith(da) || w.endsWith(da))))
    .map(([, e]) => e)
  return norm(`${base} ${en.join(' ')}`)
}
const cache = new Map<string, string>()
const hs = (i: MenuItem) => cache.get(i.id) ?? (cache.set(i.id, haystack(i)), cache.get(i.id)!)

/** Case-insensitive, partial, multi-word (AND) search over name, description, ingredients, tags and section. */
export function searchMenu(items: MenuItem[], query: string, section: SectionId | 'all'): MenuItem[] {
  const tokens = norm(query.trim()).split(/\s+/).filter(Boolean)
  return items.filter(i => i.available && (section === 'all' || i.section === section) && tokens.every(t => hs(i).includes(t)))
}

export function groupMenu(items: MenuItem[]) {
  const out: { section: SectionId; subsections: { title: string; items: MenuItem[] }[] }[] = []
  for (const it of items) {
    let s = out.find(g => g.section === it.section)
    if (!s) out.push((s = { section: it.section, subsections: [] }))
    let sub = s.subsections.find(x => x.title === it.subsection)
    if (!sub) s.subsections.push((sub = { title: it.subsection, items: [] }))
    sub.items.push(it)
  }
  return out
}
