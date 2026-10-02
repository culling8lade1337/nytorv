// THE menu. Edit names, descriptions, ingredients, prices, tags, seasonal/available here.
// Source: nytorv.dk PDF menus (Frokost, Morgen, Cafe, Aften, Jul 2025). Prices in DKK.
// Row: [name, price, description, ingredients (Danish), tags, extras?]
// Add an English name/description per dish with extras: { nameEn: '…', descriptionEn: '…' }.
import type { MenuItem, SectionId } from '../types/menu'

type Row = [string, number, string | undefined, string[], string[], Partial<MenuItem>?]
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9æøå]+/g, '-').replace(/^-|-$/g, '')
const group = (section: SectionId, subsection: string, rows: Row[], seasonal = false): MenuItem[] =>
  rows.map(([name, price, description, ingredients, tags, extra]) => ({
    id: `${section}-${slug(subsection)}-${slug(name)}`, name, description, price, section, subsection,
    ingredients, tags, seasonal, available: true, ...extra,
  }))
const lunch = (sub: string, rows: Row[]) => group('lunch', sub, rows)
const eve = (sub: string, rows: Row[]) => group('evening', sub, rows)

export const MENU: MenuItem[] = [
  // ── MORGEN / BREAKFAST ──
  ...group('breakfast', 'Morgenmad', [
    ['Morgen Tallerken', 89, 'Drænet yoghurt med zirup, mild ost & syltetøj, skiver af chorizo, frisk frugt & et glas juice', ['yoghurt', 'ost', 'syltetøj', 'chorizo', 'frugt', 'juice'], ['morgenmad'], { nameEn: 'Morning Plate', descriptionEn: 'Strained yoghurt with syrup, mild cheese & jam, sliced chorizo, fresh fruit & a glass of juice' }],
    ['Brunch', 109, 'Drænet yoghurt med zirup, mild ost & syltetøj, skiver af chorizo, røræg & bacon, en croissant, frisk frugt & et glas juice', ['yoghurt', 'ost', 'syltetøj', 'chorizo', 'røræg', 'bacon', 'croissant', 'frugt', 'juice'], ['brunch'], { descriptionEn: 'Strained yoghurt with syrup, mild cheese & jam, sliced chorizo, scrambled eggs & bacon, a croissant, fresh fruit & a glass of juice' }],
    ['Brunch Luksus', 149, 'Drænet yoghurt med zirup, pandekager med zirup, mild ost & syltetøj, skiver af chorizo, cocktailpølser, røræg & bacon, fersk røget laks, en croissant, frisk frugt & et glas juice', ['yoghurt', 'pandekager', 'ost', 'syltetøj', 'chorizo', 'cocktailpølser', 'røræg', 'bacon', 'laks', 'croissant', 'frugt', 'juice'], ['brunch'], { nameEn: 'Brunch Deluxe' }],
    ['Røræg med bacon', 60, undefined, ['røræg', 'bacon'], ['morgenmad']],
    ['Omelet med ristet brød', 70, undefined, ['æg', 'brød'], ['morgenmad']],
    ['Pandekager med zirup', 50, undefined, ['pandekager'], ['sød']],
    ['Croissant med smør', 30, undefined, ['croissant', 'smør'], ['bagværk']],
    ['Wienerbrød', 30, undefined, [], ['bagværk']],
  ]),
  ...group('breakfast', 'Drikke', [
    ['Juice (æble / appelsin)', 30, undefined, ['æble', 'appelsin', 'juice'], ['drikke']],
    ['Cava Brut', 80, undefined, ['cava'], ['drikke']],
  ]),
  // ── FROKOST / LUNCH ──
  ...lunch('Anretninger', [
    ['Nytorvs Frokost Anretning', 449, '3 slags sild, fersk røget laks, rejer, rødspætte, hønsesalat, roastbeef, lun leverpostej, mørbradbøf, ribbensteg & 3 slags oste. Pris pr. person og kan ikke deles.', ['sild', 'laks', 'rejer', 'rødspætte', 'hønsesalat', 'roastbeef', 'leverpostej', 'mørbrad', 'ribbensteg', 'ost'], ['anretning']],
    ['Københavner Platte', 369, 'Marinerede sild, fersk røget laks, rødspætte med remoulade, hønsesalat med bacon, roastbeef med remoulade, ribbensteg med rødkål & dagens ost', ['sild', 'laks', 'rødspætte', 'remoulade', 'hønsesalat', 'bacon', 'roastbeef', 'ribbensteg', 'rødkål', 'ost'], ['anretning']],
    ['Byrets Dommerens Korte Pause', 209, 'Marinerede sild med løgringe, kapers og karrysalat, rødspætte filet med remoulade og citron & ribbensteg med rødkål og agurkesalat', ['sild', 'løg', 'kapers', 'rødspætte', 'remoulade', 'citron', 'ribbensteg', 'rødkål', 'agurk'], ['anretning']],
  ]),
  ...lunch('Smørrebrød · Kød', [
    ['Nytorvs Pariserbøf', 189, 'Serveret med behørig garniture', [], ['smørrebrød', 'kød']],
    ['Ribbensteg', 139, 'Med rødkål og syltede agurker', ['ribbensteg', 'rødkål', 'agurk'], ['smørrebrød', 'kød']],
    ['Frikadeller', 129, 'Med rødkål og syltede agurker', ['frikadeller', 'rødkål', 'agurk'], ['smørrebrød', 'kød']],
    ['Mørbradbøf', 149, 'Med bløde løg', ['mørbrad', 'løg'], ['smørrebrød', 'kød']],
    ['Lun leverpostej', 109, 'Med bacon og svampe', ['leverpostej', 'bacon', 'svampe'], ['smørrebrød', 'kød']],
    ['Roastbeef', 129, 'Med remoulade, syltede agurker, ristede løg og peberrod', ['roastbeef', 'remoulade', 'agurk', 'løg', 'peberrod'], ['smørrebrød', 'kød']],
    ['Kartoffel i skiver', 99, 'Med sprød bacon, rødløg og mayonnaise', ['kartoffel', 'bacon', 'rødløg', 'mayonnaise'], ['smørrebrød']],
    ['Nytorvs hønsesalat', 129, 'Med sprød bacon og ristet brød', ['hønsesalat', 'kylling', 'bacon', 'brød'], ['smørrebrød', 'kød']],
  ]),
  ...lunch('Smørrebrød · Fisk', [
    ['Nytorvs Stjerneskud', 219, '2 paneret rødspætter, rejer, 2 dressinger & kaviar', ['rødspætte', 'rejer', 'kaviar'], ['smørrebrød', 'fisk']],
    ['Æg med rejer', 139, 'Mayonnaise, citron og kaviar', ['æg', 'rejer', 'mayonnaise', 'citron', 'kaviar'], ['smørrebrød', 'fisk']],
    ['Rejer på franskbrød', 159, 'Med kaviar, citron og mayonnaise', ['rejer', 'brød', 'kaviar', 'citron', 'mayonnaise'], ['smørrebrød', 'fisk']],
    ['Rødspætte filet', 159, 'På brød med remoulade', ['rødspætte', 'brød', 'remoulade'], ['smørrebrød', 'fisk']],
    ['Gravad laks', 159, 'Med sennepsdressing', ['laks', 'sennep'], ['smørrebrød', 'fisk']],
    ['Ferskrøget laks', 159, 'På formbrød med purløg og røræg', ['laks', 'brød', 'purløg', 'røræg'], ['smørrebrød', 'fisk']],
    ['Røget ål', 179, 'Med røræg og purløg', ['ål', 'røræg', 'purløg'], ['smørrebrød', 'fisk']],
  ]),
  ...lunch('Smørrebrød · Sild', [
    ['Nytorvs Silde anretning', 189, '3 slags sild. Serveret med behørig garniture', ['sild'], ['sild']],
    ['Stegt sild', 129, 'Med grov sennep og rødbeder', ['sild', 'sennep', 'rødbede'], ['sild']],
    ['Grand Marnier sild', 89, 'Med appelsin, løgringe og kapers', ['sild', 'appelsin', 'løg', 'kapers'], ['sild']],
    ['Christiansø pigens kryddersild', 99, 'Med cremefraiche og purløg', ['sild', 'cremefraiche', 'purløg'], ['sild']],
    ['Karry sild', 89, 'Med æg, løgringe og kapers', ['sild', 'æg', 'løg', 'kapers'], ['sild']],
    ['Marinerede sild', 89, 'Med løgringe, kapers og karrysalat', ['sild', 'løg', 'kapers', 'karrysalat'], ['sild']],
  ]),
  ...lunch('Sandwich & Salater', [
    ['Nytorvs salat', 139, '2 slags revet ost, baby salat, hjerte salat, revet rødbede, sesamfrø og balsamico', ['ost', 'salat', 'rødbede', 'sesamfrø', 'balsamico'], ['salat', 'vegetar']],
    ['Cæsar salat', 189, 'Med kylling, brødcroutons og parmesan', ['kylling', 'brød', 'parmesan'], ['salat']],
    ['Clubsandwich', 189, 'Serveret med sprød bacon og pommes frites', ['bacon', 'pommes frites'], ['sandwich']],
    ['Klassisk burger', 189, 'Serveret med pommes frites', ['pommes frites'], ['burger']],
  ]),
  ...lunch('Husmandskost', [
    ['Flæskesteg', 219, 'Serveret med rødkål, skysovs og kartofler', ['flæskesteg', 'rødkål', 'kartofler'], ['klassiker']],
    ['Fransk bøf', 269, 'Serveret med grøn salat, hvidløgssmør og pommes frites', ['salat', 'hvidløg', 'smør', 'pommes frites'], ['klassiker']],
    ['Hellefisk', 249, 'Serveret med hvidløgssmør, stegte grøntsager og kartofler', ['hellefisk', 'hvidløg', 'smør', 'grøntsager', 'kartofler'], ['fisk']],
    ['Dagens suppe', 109, undefined, [], ['suppe']],
  ]),
  ...lunch('Oste', [
    ['Friturestegt Camembert', 99, 'Serveret med solbær syltetøj', ['camembert', 'solbær', 'syltetøj'], ['ost']],
    ['3 slags oste', 159, 'Med behørig garniture', ['ost'], ['ost']],
    ['Gammel ost', 109, 'Med rødløg, fedt, sky og mørk rom', ['ost', 'rødløg', 'rom'], ['ost']],
    ['Gorgonzola', 109, 'Med løgringe, rå æggeblomme og ristet brød', ['gorgonzola', 'løg', 'æg', 'brød'], ['ost']],
    ['Port Salut', 99, 'Serveret med frisk frugt og hvidt brød', ['ost', 'frugt', 'brød'], ['ost']],
  ]),
  ...lunch('Desserter', [
    ['Svigermors Kiksekage', 69, undefined, [], ['dessert']],
    ['Bedstes Kransekage', 59, 'Med nougat', ['nougat'], ['dessert']],
    ['Gammeldags æblekage', 89, 'Serveret med flødeskum og ribsgelé', ['æble', 'flødeskum', 'ribs'], ['dessert']],
  ]),
  // ── CAFÉ ──
  ...group('cafe', 'Kaffe, te & drikke', [
    ['Almindelig kaffe', 44, undefined, ['kaffe'], ['drikke']],
    ['Espresso', 38, 'Single / double shot', ['espresso'], ['drikke'], { priceLabel: '38 / 44' }],
    ['Espresso Macchiato', 40, undefined, ['espresso'], ['drikke']],
    ['Espresso Cortado', 44, 'Single / double shot', ['espresso'], ['drikke'], { priceLabel: '44 / 50' }],
    ['Cappuccino', 44, 'Single / double shot', ['espresso'], ['drikke'], { priceLabel: '44 / 50' }],
    ['Caffè Latte', 54, 'Single / double shot', ['espresso', 'mælk'], ['drikke'], { priceLabel: '54 / 60' }],
    ['Vanille Latte', 58, 'Single / double shot', ['espresso', 'mælk', 'vanilje'], ['drikke'], { priceLabel: '58 / 64' }],
    ['Caramel Macchiato', 60, 'Single / double shot', ['espresso', 'mælk'], ['drikke'], { priceLabel: '60 / 66' }],
    ['Chai Latte Spicy', 54, undefined, ['chai'], ['drikke']],
    ['Caffè Mocha', 54, undefined, ['espresso', 'chokolade'], ['drikke']],
    ['Varm chokolade', 54, 'Med flødeskum', ['chokolade', 'flødeskum'], ['drikke']],
    ['Te – Ronnefeldt', 44, 'Classic Earl Grey, Classic English Breakfast, Ayurveda med ingefær, Dragon Green Tea, Rooibos Orange, Refreshing Mint & Chai', ['te', 'ingefær'], ['drikke']],
  ]),
  ...group('cafe', 'Kager', [
    ['Friskbagt Croissant', 30, undefined, ['croissant'], ['kage']],
    ['Gammeldags æblekage', 89, 'Med flødeskum', ['æble', 'flødeskum'], ['kage']],
    ['Svigermors Kiksekage', 69, 'Med flødeskum', ['flødeskum'], ['kage']],
    ['Vanilleis', 69, '2 kugler vanilleis med chokoladesovs', ['vanilje', 'is', 'chokolade'], ['kage']],
    ['Gulerodskage', 59, 'Med flødeskum', ['gulerod', 'flødeskum'], ['kage']],
    ['Chokoladekage', 59, 'Med flødeskum', ['chokolade', 'flødeskum'], ['kage']],
    ['Drømmekage', 59, 'Med flødeskum', ['flødeskum'], ['kage']],
    ['Kransekage', 49, 'Med nougat', ['nougat'], ['kage']],
  ]),
  // ── AFTEN / EVENING ──
  ...eve('Velkomstdrink', [
    ['Aperol à la Charlotte', 98, undefined, ['aperol'], ['drikke']],
    ['Husets Champagne', 98, 'Glas 98,- / flaske 498,-', ['champagne'], ['drikke'], { priceLabel: '98 / 498' }],
  ]),
  ...eve('Forretter', [
    ['Lakseroulade', 139, 'Med dild creme, avokado og rejer', ['laks', 'dild', 'avokado', 'rejer'], ['fisk']],
    ['Carpaccio', 129, 'Med pesto, trøffelolie og revet parmesan', ['pesto', 'trøffelolie', 'parmesan'], []],
    ['Dagens suppe', 109, undefined, [], ['suppe']],
  ]),
  ...eve('Salater & brød', [
    ['Nytorvs salat', 139, '2 slags revet ost, baby salat, hjerte salat, revet rødbede, sesamfrø og balsamico', ['ost', 'salat', 'rødbede', 'sesamfrø', 'balsamico'], ['salat', 'vegetar']],
    ['Nytorvs Cæsar salat', 189, 'Med kylling, brødcroutons og parmesan', ['kylling', 'brød', 'parmesan'], ['salat']],
    ['Bruschetta', 49, 'Med tomat, pesto og ost', ['tomat', 'pesto', 'ost'], ['brød']],
    ['Brødbakke', 39, 'Med lyst og mørkt brød', ['brød'], ['brød']],
  ]),
  ...eve('Vegetar', [
    ['Risotto', 149, 'Serveret med asparges, spinat og champignon', ['ris', 'asparges', 'spinat', 'champignon'], ['vegetar']],
  ]),
  ...eve('Fiskeretter', [
    ['Hellefisk', 249, 'Serveret med hvidløgssmør, grøntsager og kartofler', ['hellefisk', 'hvidløg', 'smør', 'grøntsager', 'kartofler'], ['fisk']],
    ['Grillet laks', 219, 'Serveret med pasta, grøntsager og hollandaise sauce', ['laks', 'pasta', 'grøntsager', 'hollandaise'], ['fisk']],
    ['2 retter fisk', 339, 'Lakseroulade med dild creme, avokado og rejer, efterfulgt af hellefisk med hvidløgssmør, grøntsager og kartofler', ['laks', 'dild', 'avokado', 'rejer', 'hellefisk', 'hvidløg', 'smør', 'grøntsager', 'kartofler'], ['fisk', 'menu']],
  ]),
  ...eve('Kødretter', [
    ['2 retter kød', 359, 'Carpaccio med pesto, trøffelolie og revet parmesan, efterfulgt af grillet ribeye med grøntsager, bearnaisesauce og ovnbagte kartofler', ['pesto', 'trøffelolie', 'parmesan', 'ribeye', 'grøntsager', 'bearnaise', 'kartofler'], ['kød', 'menu']],
    ['Grillet ribeye', 279, 'Serveret med grøntsager, bearnaisesauce og ovnbagte kartofler', ['ribeye', 'grøntsager', 'bearnaise', 'kartofler'], ['kød']],
    ['Fransk bøf', 269, 'Serveret med grøn salat, hvidløgssmør og pommes frites', ['salat', 'hvidløg', 'smør', 'pommes frites'], ['kød']],
    ['Braiseret lammeskank', 229, 'Serveret med sauteret spinat, persillerodspuré, sauce glace og ovnbagte kartofler', ['lammeskank', 'spinat', 'persillerod', 'kartofler'], ['kød']],
    ['Kyllingebryst', 199, 'Serveret med frisk pasta, spinat, tyttebær og gorgonzolasauce', ['kylling', 'pasta', 'spinat', 'tyttebær', 'gorgonzola'], ['kød']],
    ['Brown Ale marineret svinemørbrad', 219, 'Svøbt i bacon, serveret med ovnbagte kartofler og kirsebærsauce', ['svinemørbrad', 'bacon', 'kartofler', 'kirsebær'], ['kød']],
    ['Mørbradgryde', 209, 'Serveret med cocktailpølser, champignon og ris', ['mørbrad', 'cocktailpølser', 'champignon', 'ris'], ['kød']],
    ['Stegt flæsk', 219, 'Serveret med rødbeder, grov sennep, persillesovs og kartofler', ['flæsk', 'rødbede', 'sennep', 'persille', 'kartofler'], ['kød', 'klassiker']],
    ['Flæskesteg', 219, 'Serveret med rødkål, skysovs og kartofler', ['flæskesteg', 'rødkål', 'kartofler'], ['kød', 'klassiker']],
    ['Hakkebøf', 219, 'Serveret med bløde løg, spejlæg, skysovs og kartofler', ['løg', 'æg', 'kartofler'], ['kød', 'klassiker']],
  ]),
  ...eve('Desserter & ost', [
    ['Crème Brûlée', 89, undefined, [], ['dessert']],
    ['Vaniljeis', 89, 'Med chokoladesovs', ['vanilje', 'is', 'chokolade'], ['dessert']],
    ['Pandekager', 89, 'Serveret med vanilleis og frugter', ['pandekager', 'vanilje', 'is', 'frugt'], ['dessert']],
    ['3 slags oste', 159, 'Serveret med behørig garniture', ['ost'], ['ost']],
    ['Friturestegt Camembert', 99, 'Med solbær syltetøj', ['camembert', 'solbær', 'syltetøj'], ['ost']],
  ]),
  // ── JUL / CHRISTMAS (Jul 2025 menu) ──
  ...group('christmas', 'Julemenu', [
    ['Nytorvs Juleplatte', 399, 'Serveres kl. 11.00–16.00. Nytorvs julesild, fersk røget laks med lun røræg og asparges, rødspætte med remoulade og citron, lun leverpostej med rødbede, ribbensteg med rødkål, mørbradbøf med bløde løg & ris à la mande med lun kirsebærsauce', ['sild', 'laks', 'røræg', 'asparges', 'rødspætte', 'remoulade', 'citron', 'leverpostej', 'rødbede', 'ribbensteg', 'rødkål', 'mørbrad', 'løg', 'ris', 'kirsebær'], ['platte']],
    ['Nytorvs Julebord', 499, 'Serveres hele dagen ved forudbestilling, på fade i 3 omgange. Marinerede sild og julesild med kapers, rødløg og karrysalat, gravad laks med sennepsdressing, rødspætte med rejer og citron; hønsesalat med sprød bacon, lun andebryst med æble-svedskekompot, lun ribbensteg med rødkål og agurkesalat, lun mørbradbøf med champignon à la crème, Nytorvs æbleflæsk; ris à la mande med lun kirsebærsauce & fruens mandelgave*. 3 stk ål kan bestilles ved siden af (140,- pr. person). *Kun én mandelgave pr. selskab.', ['sild', 'kapers', 'rødløg', 'laks', 'sennep', 'rødspætte', 'rejer', 'citron', 'hønsesalat', 'bacon', 'andebryst', 'æble', 'ribbensteg', 'rødkål', 'agurk', 'mørbrad', 'champignon', 'flæsk', 'ris', 'kirsebær', 'mandel', 'ål'], ['julebord']],
  ], true),
]
