// All links and contact details live here.
export const SITE = {
  name: 'Restaurant & Café Nytorv',
  address: ['Nytorv 15', '1450 København K', 'Denmark'],
  phone: '+45 33 11 77 06',
  phoneHref: 'tel:+4533117706',
  email: 'kontakt@nytorv.dk',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nytorv+15%2C+1450+K%C3%B8benhavn+K',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Nytorv+15,+1450+K%C3%B8benhavn+K&output=embed',
  appStoreUrl: 'https://apps.apple.com/app/nytorv/id415925406',
}
// Source: nytorv.dk/phone/open.html
export const HOURS = [
  { key: 'phone', from: '08:00', to: '' },
  { key: 'restaurant', from: '08:00', to: '23:00' },
  { key: 'kitchen', from: '08:00', to: '22:00' },
  { key: 'pavilion', from: '09:00', to: '' },
] as const
