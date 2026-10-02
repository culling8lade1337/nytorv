// All UI copy. Add a language by adding a key here and to LANGS.
export const LANGS = ['da', 'en'] as const
export type Lang = (typeof LANGS)[number]
export const T = {
  da: {
    'nav.menu': 'Menu', 'nav.about': 'Om os', 'nav.location': 'Find os', 'nav.hours': 'Åbningstider', 'nav.booking': 'Book bord',
    'nav.open': 'Åbn menu', 'nav.close': 'Luk menu',
    'hero.title': 'Dansk mad & hygge', 'hero.sub': 'Dansk restaurant midt i København · siden 1966', 'hero.addr': 'Nytorv 15 · København K',
    'cta.menu': 'Se menuen', 'cta.find': 'Find os', 'cta.app': 'Hent appen', 'cta.maps': 'Åbn i Google Maps',
    'story.title': 'Nytorv anno 1966', 'story.p1': 'Nede på hjørnet i kælderen ligger Nytorv: en traditionel dansk kælderrestaurant med højtbelagt smørrebrød hele dagen og klassiske danske retter om aftenen.', 'story.p2': 'Her står de rødternede duge klar, og Charlotte & Dennis byder hjerteligt velkommen. Brunch og kaffe serveres med Illy espresso.',
    'menu.title': 'Menu', 'search.label': 'Hvad leder du efter?', 'search.ph': 'Søg på ret eller ingrediens, fx laks, æg, bacon',
    'search.none': 'Ingen retter fundet for', 'search.hint': 'Prøv en ingrediens som sild, ost eller rejer.', 'search.count': 'retter',
    'filter.all': 'Alle', 'price.suffix': ',-', 'seasonal': 'Sæson', 'in': 'i',
    'loc.title': 'Midt i hjertet af København', 'loc.sub': 'Nytorv ligger i det gamle centrum.', 'map.title': 'Kort over Nytorv 15',
    'hours.title': 'Åbningstider', 'hours.phone': 'Telefonen besvares', 'hours.restaurant': 'Restauranten', 'hours.kitchen': 'Køkkenet', 'hours.pavilion': 'Pavillonen (udeservering)',
    'hours.from': 'fra', 'hours.until': 'til', 'hours.all': 'Åbent hele ugen, også søndag.', 'hours.dec': 'December: åbent alle dage undtagen 24.12 (lukket). 31.12 åbent til 16.30.',
    'book.title': 'Book bord', 'book.text': 'Udfyld formularen, så åbner vi en e-mail til restauranten. Du kan også ringe.',
    'book.first': 'Fornavn', 'book.last': 'Efternavn', 'book.phone': 'Telefon', 'book.email': 'E-mail', 'book.msg': 'Besked',
    'book.send': 'Send besked', 'book.note': 'Formularen åbner dit e-mailprogram. Din reservation er først bekræftet, når restauranten svarer.',
    'footer.links': 'Genveje', 'footer.find': 'Find os', 'footer.fee': 'Ved betaling med danske eller udenlandske kreditkort pålægges gebyr.',
  },
  en: {
    'nav.menu': 'Menu', 'nav.about': 'About', 'nav.location': 'Location', 'nav.hours': 'Opening hours', 'nav.booking': 'Booking',
    'nav.open': 'Open menu', 'nav.close': 'Close menu',
    'hero.title': 'Danish food & hygge', 'hero.sub': 'Restaurant in the centre of Copenhagen · since 1966', 'hero.addr': 'Nytorv 15 · Copenhagen K',
    'cta.menu': 'View menu', 'cta.find': 'Find us', 'cta.app': 'Get the app', 'cta.maps': 'Open in Google Maps',
    'story.title': 'Nytorv anno 1966', 'story.p1': 'Down in the cellar on the corner you’ll find Nytorv: a traditional Danish cellar restaurant serving generously topped smørrebrød all day and classic Danish dishes in the evening.', 'story.p2': 'The red-checked tablecloths are laid, and Charlotte & Dennis bid you a warm welcome. Brunch and coffee are served with Illy espresso.',
    'menu.title': 'Menu', 'search.label': 'What are you looking for?', 'search.ph': 'Search a dish or ingredient, e.g. salmon, egg, bacon',
    'search.none': 'No dishes found for', 'search.hint': 'Try an ingredient such as herring, cheese or shrimp.', 'search.count': 'dishes',
    'filter.all': 'All', 'price.suffix': ',-', 'seasonal': 'Seasonal', 'in': 'in',
    'loc.title': 'In the heart of Copenhagen', 'loc.sub': 'Nytorv sits in the old city centre.', 'map.title': 'Map of Nytorv 15',
    'hours.title': 'Opening hours', 'hours.phone': 'Phone answered', 'hours.restaurant': 'Restaurant', 'hours.kitchen': 'Kitchen', 'hours.pavilion': 'Pavilion (outdoor serving)',
    'hours.from': 'from', 'hours.until': 'until', 'hours.all': 'Open all week, Sundays included.', 'hours.dec': 'December: open every day except 24 Dec (closed). 31 Dec open until 16:30.',
    'book.title': 'Book a table', 'book.text': 'Fill in the form and we’ll open an email to the restaurant. You can also call.',
    'book.first': 'First name', 'book.last': 'Last name', 'book.phone': 'Phone', 'book.email': 'Email', 'book.msg': 'Message',
    'book.send': 'Send message', 'book.note': 'The form opens your email app. Your booking is only confirmed once the restaurant replies.',
    'footer.links': 'Quick links', 'footer.find': 'Find us', 'footer.fee': 'A fee applies when paying with Danish or foreign credit cards.',
  },
} as const
export type Key = keyof typeof T.da
