import type { SectionId } from '../types/menu'
// New category: add id to SectionId (types/menu.ts), add it below, then add items in menu.ts.
export const SECTIONS: SectionId[] = ['breakfast', 'lunch', 'cafe', 'evening', 'christmas']
export const SECTION_DA: Record<SectionId, string> = { breakfast: 'Morgen', lunch: 'Frokost', cafe: 'Café', evening: 'Aften', christmas: 'Jul' }
export const SECTION_EN: Record<SectionId, string> = { breakfast: 'Breakfast', lunch: 'Lunch', cafe: 'Café', evening: 'Evening', christmas: 'Christmas' }
