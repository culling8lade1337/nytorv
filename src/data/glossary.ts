// Danish word -> English search/display term. Extend freely.
export const GLOSSARY: Record<string, string> = {
  sild: 'herring', laks: 'salmon', rejer: 'shrimp', rødspætte: 'plaice', hellefisk: 'halibut', ål: 'eel',
  kaviar: 'caviar', fisk: 'fish', æg: 'egg', røræg: 'scrambled egg', bacon: 'bacon', kylling: 'chicken',
  hønsesalat: 'chicken salad', ost: 'cheese', oste: 'cheese', camembert: 'camembert', gorgonzola: 'gorgonzola',
  parmesan: 'parmesan', ribbensteg: 'roast pork', flæskesteg: 'roast pork', flæsk: 'pork', svinemørbrad: 'pork tenderloin',
  mørbrad: 'pork tenderloin', roastbeef: 'roast beef', leverpostej: 'liver pâté', frikadeller: 'meatballs',
  lammeskank: 'lamb shank', ribeye: 'beef ribeye', rødkål: 'red cabbage', løg: 'onion', rødløg: 'red onion',
  kapers: 'capers', remoulade: 'remoulade', hvidløg: 'garlic', citron: 'lemon', svampe: 'mushrooms',
  champignon: 'mushroom', spinat: 'spinach', asparges: 'asparagus', avokado: 'avocado', tomat: 'tomato',
  pasta: 'pasta', ris: 'rice', kartofler: 'potatoes', kartoffel: 'potato', 'pommes frites': 'fries',
  frugt: 'fruit', yoghurt: 'yoghurt', chorizo: 'chorizo', cocktailpølser: 'sausages', juice: 'juice',
  kaffe: 'coffee', espresso: 'espresso', te: 'tea', chokolade: 'chocolate', vanilje: 'vanilla', vaniljeis: 'ice cream',
  æble: 'apple', appelsin: 'orange', rødbede: 'beetroot', rødbeder: 'beetroot', agurk: 'cucumber pickles',
  flødeskum: 'whipped cream', nougat: 'nougat', mandel: 'almond', kirsebær: 'cherry', pesto: 'pesto',
  trøffelolie: 'truffle oil', brød: 'bread', smør: 'butter', croissant: 'croissant', pandekager: 'pancakes',
  sennep: 'mustard', peberrod: 'horseradish', andebryst: 'duck', is: 'ice cream', cava: 'sparkling wine',
  champagne: 'champagne', aperol: 'aperol', gulerod: 'carrot', mælk: 'milk', hakkebøf: 'beef patty',
}
export const tr = (w: string) => GLOSSARY[w.toLowerCase()] ?? w
