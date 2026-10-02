export type SectionId = 'breakfast' | 'lunch' | 'cafe' | 'evening' | 'christmas'
export interface MenuItem {
  id: string
  name: string
  nameEn?: string          // add English name here when available
  description?: string
  descriptionEn?: string
  price: number
  priceLabel?: string      // e.g. "38 / 44" for single / double
  section: SectionId
  subsection: string
  ingredients: string[]    // Danish; English equivalents come from data/glossary.ts
  tags: string[]
  seasonal: boolean
  available: boolean
}
