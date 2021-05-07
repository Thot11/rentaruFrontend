const dataCities = [
  {
    "departement": 75,
    "slug": "paris",
    "name": "Paris",
    "codePostal": "75001-75002-75003-75004-75005-75006-75007-75008-75009-75010-75011-75012-75013-75014-75015-75016-75017-75018-75019-75020-75116",
    "codeInsee": 75056
  },
  {
    "departement": 13,
    "slug": "marseille",
    "name": "Marseille",
    "codePostal": "13001-13002-13003-13004-13005-13006-13007-13008-13009-13010-13011-13012-13013-13014-13015-13016",
    "codeInsee": 13055
  },
  {
    "departement": 69,
    "slug": "lyon",
    "name": "Lyon",
    "codePostal": "69001-69002-69003-69004-69005-69006-69007-69008-69009",
    "codeInsee": 69123
  },
  {
    "departement": 31,
    "slug": "toulouse",
    "name": "Toulouse",
    "codePostal": "31000-31100-31200-31300-31400-31500",
    "codeInsee": 31555
  },
  {
    "departement": 6,
    "slug": "nice",
    "name": "Nice",
    "codePostal": "06000-06100-06200-06300",
    "codeInsee": 6088
  },
  {
    "departement": 44,
    "slug": "nantes",
    "name": "Nantes",
    "codePostal": "44000-44100-44200-44300",
    "codeInsee": 44109
  },
  {
    "departement": 67,
    "slug": "strasbourg",
    "name": "Strasbourg",
    "codePostal": "67000-67100-67200",
    "codeInsee": 67482
  },
  {
    "departement": 34,
    "slug": "montpellier",
    "name": "Montpellier",
    "codePostal": "34000-34070-34080-34090",
    "codeInsee": 34172
  },
  {
    "departement": 33,
    "slug": "bordeaux",
    "name": "Bordeaux",
    "codePostal": "33000-33100-33200-33300-33800",
    "codeInsee": 33063
  },
  {
    "departement": 59,
    "slug": "lille",
    "name": "Lille",
    "codePostal": "59000-59160-59260-59777-59800",
    "codeInsee": 59350
  },
  {
    "departement": 35,
    "slug": "rennes",
    "name": "Rennes",
    "codePostal": "35000-35200-35700",
    "codeInsee": 35238
  },
  {
    "departement": 51,
    "slug": "reims",
    "name": "Reims",
    "codePostal": 51100,
    "codeInsee": 51454
  },
  {
    "departement": 76,
    "slug": "havre",
    "name": "Le Havre",
    "codePostal": "76600-76610-76620",
    "codeInsee": 76351
  },
  {
    "departement": 42,
    "slug": "saint-etienne",
    "name": "Saint-Étienne",
    "codePostal": "42000-42100-42230",
    "codeInsee": 42218
  },
  {
    "departement": 83,
    "slug": "toulon",
    "name": "Toulon",
    "codePostal": "83000-83100-83200",
    "codeInsee": 83137
  },
  {
    "departement": 38,
    "slug": "grenoble",
    "name": "Grenoble",
    "codePostal": "38000-38100",
    "codeInsee": 38185
  },
  {
    "departement": 21,
    "slug": "dijon",
    "name": "Dijon",
    "codePostal": "21000-21100",
    "codeInsee": 21231
  },
  {
    "departement": 49,
    "slug": "angers",
    "name": "Angers",
    "codePostal": "49000-49100",
    "codeInsee": 49007
  },
  {
    "departement": 69,
    "slug": "villeurbanne",
    "name": "Villeurbanne",
    "codePostal": 69100,
    "codeInsee": 69266
  },
  {
    "departement": 974,
    "slug": "saint-denis",
    "name": "Saint-Denis",
    "codePostal": 97490,
    "codeInsee": 97411
  },
  {
    "departement": 72,
    "slug": "le-mans",
    "name": "Le Mans",
    "codePostal": "72000-72100",
    "codeInsee": 72181
  },
  {
    "departement": 30,
    "slug": "nîmes",
    "name": "Nîmes",
    "codePostal": "30000-30900",
    "codeInsee": 30189
  },
  {
    "departement": 13,
    "slug": "aix-en-provence",
    "name": "Aix-en-Provence",
    "codePostal": "13080-13090-13100-13290-13540",
    "codeInsee": 13001
  },
  {
    "departement": 29,
    "slug": "brest",
    "name": "Brest",
    "codePostal": 29200,
    "codeInsee": 29019
  },
  {
    "departement": 63,
    "slug": "clermont-ferrand",
    "name": "Clermont-Ferrand",
    "codePostal": "63000-63100",
    "codeInsee": 63113
  },
  {
    "departement": 87,
    "slug": "limoges",
    "name": "Limoges",
    "codePostal": "87000-87100-87280",
    "codeInsee": 87085
  },
  {
    "departement": 37,
    "slug": "tours",
    "name": "Tours",
    "codePostal": "37000-37100-37200",
    "codeInsee": 37261
  },
  {
    "departement": 80,
    "slug": "amiens",
    "name": "Amiens",
    "codePostal": "80000-80080-80090",
    "codeInsee": 80021
  },
  {
    "departement": 57,
    "slug": "metz",
    "name": "Metz",
    "codePostal": "57000-57050-57070",
    "codeInsee": 57463
  },
  {
    "departement": 66,
    "slug": "perpignan",
    "name": "Perpignan",
    "codePostal": "66000-66100",
    "codeInsee": 66136
  },
  {
    "departement": 25,
    "slug": "besancon",
    "name": "Besançon",
    "codePostal": 25000,
    "codeInsee": 25056
  },
  {
    "departement": 92,
    "slug": "boulogne-billancourt",
    "name": "Boulogne-Billancourt",
    "codePostal": 92100,
    "codeInsee": 92012
  },
  {
    "departement": 45,
    "slug": "orleans",
    "name": "Orléans",
    "codePostal": "45000-45100",
    "codeInsee": 45234
  },
  {
    "departement": 76,
    "slug": "rouen",
    "name": "Rouen",
    "codePostal": "76000-76100",
    "codeInsee": 76540
  },
  {
    "departement": 68,
    "slug": "mulhouse",
    "name": "Mulhouse",
    "codePostal": "68100-68200",
    "codeInsee": 68224
  },
  {
    "departement": 14,
    "slug": "caen",
    "name": "Caen",
    "codePostal": 14000,
    "codeInsee": 14118
  },
  {
    "departement": 93,
    "slug": "saint-denis-93",
    "name": "Saint-Denis",
    "codePostal": "93200-93210",
    "codeInsee": 93066
  },
  {
    "departement": 54,
    "slug": "nancy",
    "name": "Nancy",
    "codePostal": 54100,
    "codeInsee": 54395
  },
  {
    "departement": 974,
    "slug": "saint-paul",
    "name": "Saint-Paul",
    "codePostal": 97460,
    "codeInsee": 97415
  },
  {
    "departement": 95,
    "slug": "argenteuil",
    "name": "Argenteuil",
    "codePostal": 95100,
    "codeInsee": 95018
  },
  {
    "departement": 93,
    "slug": "montreuil-93",
    "name": "Montreuil",
    "codePostal": 93100,
    "codeInsee": 93048
  },
  {
    "departement": 59,
    "slug": "roubaix",
    "name": "Roubaix",
    "codePostal": 59100,
    "codeInsee": 59512
  },
  {
    "departement": 59,
    "slug": "dunkerque",
    "name": "Dunkerque",
    "codePostal": "59140-59240-59430-59640-59279",
    "codeInsee": 59183
  },
  {
    "departement": 59,
    "slug": "tourcoing",
    "name": "Tourcoing",
    "codePostal": 59200,
    "codeInsee": 59599
  },
  {
    "departement": 94,
    "slug": "creteil",
    "name": "Créteil",
    "codePostal": 94000,
    "codeInsee": 94028
  },
  {
    "departement": 84,
    "slug": "avignon",
    "name": "Avignon",
    "codePostal": 84000,
    "codeInsee": 84007
  },
  {
    "departement": 92,
    "slug": "nanterre",
    "name": "Nanterre",
    "codePostal": 92000,
    "codeInsee": 92050
  },
  {
    "departement": 86,
    "slug": "poitiers",
    "name": "Poitiers",
    "codePostal": 86000,
    "codeInsee": 86194
  },
  {
    "departement": 92,
    "slug": "courbevoie",
    "name": "Courbevoie",
    "codePostal": 92400,
    "codeInsee": 92026
  },
  {
    "departement": 972,
    "slug": "fort-de-france",
    "name": "Fort-de-France",
    "codePostal": 97234,
    "codeInsee": 97209
  },
  {
    "departement": 78,
    "slug": "versailles",
    "name": "Versailles",
    "codePostal": 78000,
    "codeInsee": 78646
  },
  {
    "departement": 94,
    "slug": "vitry-sur-seine",
    "name": "Vitry-sur-Seine",
    "codePostal": 94400,
    "codeInsee": 94081
  },
  {
    "departement": 92,
    "slug": "colombes",
    "name": "Colombes",
    "codePostal": 92700,
    "codeInsee": 92025
  },
  {
    "departement": 92,
    "slug": "asnieres-sur-seine",
    "name": "Asnières-sur-Seine",
    "codePostal": 92600,
    "codeInsee": 92004
  },
  {
    "departement": 93,
    "slug": "aulnay-sous-bois",
    "name": "Aulnay-sous-Bois",
    "codePostal": 93600,
    "codeInsee": 93005
  },
  {
    "departement": 64,
    "slug": "pau",
    "name": "Pau",
    "codePostal": 64000,
    "codeInsee": 64445
  },
  {
    "departement": 92,
    "slug": "rueil-malmaison",
    "name": "Rueil-Malmaison",
    "codePostal": 92500,
    "codeInsee": 92063
  },
  {
    "departement": 974,
    "slug": "saint-pierre",
    "name": "Saint-Pierre",
    "codePostal": 97432,
    "codeInsee": 97416
  },
  {
    "departement": 93,
    "slug": "aubervilliers",
    "name": "Aubervilliers",
    "codePostal": 93300,
    "codeInsee": 93001
  },
  {
    "departement": 94,
    "slug": "champigny-sur-marne",
    "name": "Champigny-sur-Marne",
    "codePostal": 94500,
    "codeInsee": 94017
  },
  {
    "departement": 17,
    "slug": "rochelle-17",
    "name": "La Rochelle",
    "codePostal": 17000,
    "codeInsee": 17300
  },
  {
    "departement": 94,
    "slug": "saint-maur-des-fosses",
    "name": "Saint-Maur-des-Fossés",
    "codePostal": "94100-94210",
    "codeInsee": 94068
  },
  {
    "departement": 6,
    "slug": "antibes",
    "name": "Antibes",
    "codePostal": "06600-06160",
    "codeInsee": 6004
  },
  {
    "departement": 62,
    "slug": "calais",
    "name": "Calais",
    "codePostal": 62100,
    "codeInsee": 62193
  },
  {
    "departement": 974,
    "slug": "le-tampon",
    "name": "Tampon",
    "codePostal": 97430,
    "codeInsee": 97422
  },
  {
    "departement": 6,
    "slug": "cannes",
    "name": "Cannes",
    "codePostal": "06400-06150",
    "codeInsee": 6029
  },
  {
    "departement": 34,
    "slug": "beziers",
    "name": "Béziers",
    "codePostal": 34500,
    "codeInsee": 34032
  },
  {
    "departement": 68,
    "slug": "colmar",
    "name": "Colmar",
    "codePostal": 68000,
    "codeInsee": 68066
  },
  {
    "departement": 44,
    "slug": "saint-nazaire-44",
    "name": "Saint-Nazaire",
    "codePostal": 44600,
    "codeInsee": 44184
  },
  {
    "departement": 93,
    "slug": "drancy",
    "name": "Drancy",
    "codePostal": 93700,
    "codeInsee": 93029
  },
  {
    "departement": 18,
    "slug": "bourges",
    "name": "Bourges",
    "codePostal": 18000,
    "codeInsee": 18033
  },
  {
    "departement": 33,
    "slug": "merignac-33",
    "name": "Mérignac",
    "codePostal": 33700,
    "codeInsee": 33281
  },
  {
    "departement": "2A",
    "slug": "ajaccio",
    "name": "Ajaccio",
    "codePostal": "20000-20090",
    "codeInsee": "2A004"
  },
  {
    "departement": 92,
    "slug": "issy-les-moulineaux",
    "name": "Issy-les-Moulineaux",
    "codePostal": 92130,
    "codeInsee": 92040
  },
  {
    "departement": 92,
    "slug": "levallois-perret",
    "name": "Levallois-Perret",
    "codePostal": 92300,
    "codeInsee": 92044
  },
  {
    "departement": 59,
    "slug": "villeneuve-d-ascq",
    "name": "Villeneuve-d'Ascq",
    "codePostal": "59491-59493-59650",
    "codeInsee": 59009
  },
  {
    "departement": 29,
    "slug": "quimper",
    "name": "Quimper",
    "codePostal": 29000,
    "codeInsee": 29232
  },
  {
    "departement": 26,
    "slug": "valence-26",
    "name": "Valence",
    "codePostal": 26000,
    "codeInsee": 26362
  },
  {
    "departement": 93,
    "slug": "noisy-le-grand",
    "name": "Noisy-le-Grand",
    "codePostal": 93160,
    "codeInsee": 93051
  },
  {
    "departement": 83,
    "slug": "seyne-sur-mer",
    "name": "La Seyne-sur-Mer",
    "codePostal": 83500,
    "codeInsee": 83126
  },
  {
    "departement": 92,
    "slug": "antony",
    "name": "Antony",
    "codePostal": 92160,
    "codeInsee": 92002
  },
  {
    "departement": 92,
    "slug": "neuilly-sur-seine",
    "name": "Neuilly-sur-Seine",
    "codePostal": 92200,
    "codeInsee": 92051
  },
  {
    "departement": 10,
    "slug": "troyes",
    "name": "Troyes",
    "codePostal": 10000,
    "codeInsee": 10387
  },
  {
    "departement": 69,
    "slug": "venissieux",
    "name": "Vénissieux",
    "codePostal": 69200,
    "codeInsee": 69259
  },
  {
    "departement": 92,
    "slug": "clichy",
    "name": "Clichy",
    "codePostal": 92110,
    "codeInsee": 92024
  },
  {
    "departement": 95,
    "slug": "sarcelles",
    "name": "Sarcelles",
    "codePostal": 95200,
    "codeInsee": 95585
  },
  {
    "departement": 971,
    "slug": "les-abymes",
    "name": "Abymes",
    "codePostal": 97142,
    "codeInsee": 97101
  },
  {
    "departement": 33,
    "slug": "pessac",
    "name": "Pessac",
    "codePostal": 33600,
    "codeInsee": 33318
  },
  {
    "departement": 94,
    "slug": "ivry-sur-seine",
    "name": "Ivry-sur-Seine",
    "codePostal": 94200,
    "codeInsee": 94041
  },
  {
    "departement": 73,
    "slug": "chambery",
    "name": "Chambéry",
    "codePostal": 73000,
    "codeInsee": 73065
  },
  {
    "departement": 79,
    "slug": "niort",
    "name": "Niort",
    "codePostal": 79000,
    "codeInsee": 79191
  },
  {
    "departement": 976,
    "slug": "mamoudzou",
    "name": "Mamoudzou",
    "codePostal": 97600,
    "codeInsee": 97611
  },
  {
    "departement": 56,
    "slug": "lorient",
    "name": "Lorient",
    "codePostal": 56100,
    "codeInsee": 56121
  },
  {
    "departement": 95,
    "slug": "cergy",
    "name": "Cergy",
    "codePostal": "95000-95800",
    "codeInsee": 95127
  },
  {
    "departement": 82,
    "slug": "montauban",
    "name": "Montauban",
    "codePostal": 82000,
    "codeInsee": 82121
  },
  {
    "departement": 2,
    "slug": "saint-quentin",
    "name": "Saint-Quentin",
    "codePostal": 2100,
    "codeInsee": 2691
  },
  {
    "departement": 973,
    "slug": "cayenne",
    "name": "Cayenne",
    "codePostal": 97300,
    "codeInsee": 97302
  },
  {
    "departement": 94,
    "slug": "villejuif",
    "name": "Villejuif",
    "codePostal": 94800,
    "codeInsee": 94076
  },
  {
    "departement": 60,
    "slug": "beauvais",
    "name": "Beauvais",
    "codePostal": 60155,
    "codeInsee": 60057
  },
  {
    "departement": 83,
    "slug": "hyeres",
    "name": "Hyères",
    "codePostal": 83400,
    "codeInsee": 83069
  },
  {
    "departement": 93,
    "slug": "epinay-sur-seine",
    "name": "Épinay-sur-Seine",
    "codePostal": 93800,
    "codeInsee": 93031
  },
  {
    "departement": 93,
    "slug": "pantin",
    "name": "Pantin",
    "codePostal": 93500,
    "codeInsee": 93055
  },
  {
    "departement": 49,
    "slug": "cholet",
    "name": "Cholet",
    "codePostal": 49280,
    "codeInsee": 49099
  },
  {
    "departement": 974,
    "slug": "saint-andre",
    "name": "Saint-André",
    "codePostal": 97440,
    "codeInsee": 97409
  },
  {
    "departement": 93,
    "slug": "bondy",
    "name": "Bondy",
    "codePostal": 93140,
    "codeInsee": 93010
  },
  {
    "departement": 94,
    "slug": "fontenay-sous-bois",
    "name": "Fontenay-sous-Bois",
    "codePostal": 94120,
    "codeInsee": 94033
  },
  {
    "departement": 94,
    "slug": "maisons-alfort",
    "name": "Maisons-Alfort",
    "codePostal": 94700,
    "codeInsee": 94046
  },
  {
    "departement": 77,
    "slug": "chelles-77",
    "name": "Chelles",
    "codePostal": 77500,
    "codeInsee": 77108
  },
  {
    "departement": 85,
    "slug": "roche-sur-yon",
    "name": "La Roche-sur-Yon",
    "codePostal": 85000,
    "codeInsee": 85191
  },
  {
    "departement": 13,
    "slug": "arles",
    "name": "Arles",
    "codePostal": "13104-13123-13129-13200-13280",
    "codeInsee": 13004
  },
  {
    "departement": 92,
    "slug": "clamart",
    "name": "Clamart",
    "codePostal": 92140,
    "codeInsee": 92023
  },
  {
    "departement": 56,
    "slug": "vannes",
    "name": "Vannes",
    "codePostal": 56000,
    "codeInsee": 56260
  },
  {
    "departement": 91,
    "slug": "evry-91",
    "name": "Évry",
    "codePostal": 91090,
    "codeInsee": 91228
  },
  {
    "departement": 974,
    "slug": "saint-louis",
    "name": "Saint-Louis",
    "codePostal": 97450,
    "codeInsee": 97414
  },
  {
    "departement": 83,
    "slug": "frejus",
    "name": "Fréjus",
    "codePostal": "83600-83370",
    "codeInsee": 83061
  },
  {
    "departement": 93,
    "slug": "blanc-mesnil",
    "name": "Le Blanc-Mesnil",
    "codePostal": 93150,
    "codeInsee": 93007
  },
  {
    "departement": 78,
    "slug": "sartrouville",
    "name": "Sartrouville",
    "codePostal": 78500,
    "codeInsee": 78586
  },
  {
    "departement": 11,
    "slug": "narbonne",
    "name": "Narbonne",
    "codePostal": 11100,
    "codeInsee": 11262
  },
  {
    "departement": 6,
    "slug": "grasse",
    "name": "Grasse",
    "codePostal": "06130-06520",
    "codeInsee": 6069
  },
  {
    "departement": 53,
    "slug": "laval-53",
    "name": "Laval",
    "codePostal": 53000,
    "codeInsee": 53130
  },
  {
    "departement": 77,
    "slug": "meaux",
    "name": "Meaux",
    "codePostal": 77100,
    "codeInsee": 77284
  },
  {
    "departement": 27,
    "slug": "evreux",
    "name": "Évreux",
    "codePostal": 27000,
    "codeInsee": 27229
  },
  {
    "departement": 74,
    "slug": "annecy",
    "name": "Annecy",
    "codePostal": 74000,
    "codeInsee": 74010
  },
  {
    "departement": 90,
    "slug": "belfort",
    "name": "Belfort",
    "codePostal": 90000,
    "codeInsee": 90010
  },
  {
    "departement": 93,
    "slug": "sevran",
    "name": "Sevran",
    "codePostal": 93270,
    "codeInsee": 93071
  },
  {
    "departement": 8,
    "slug": "charleville-mezieres",
    "name": "Charleville-Mézières",
    "codePostal": 8090,
    "codeInsee": 8105
  },
  {
    "departement": 19,
    "slug": "brive-la-gaillarde",
    "name": "Brive-la-Gaillarde",
    "codePostal": 19100,
    "codeInsee": 19031
  },
  {
    "departement": 81,
    "slug": "albi",
    "name": "Albi",
    "codePostal": 81990,
    "codeInsee": 81004
  },
  {
    "departement": 92,
    "slug": "montrouge",
    "name": "Montrouge",
    "codePostal": 92120,
    "codeInsee": 92049
  },
  {
    "departement": 94,
    "slug": "vincennes",
    "name": "Vincennes",
    "codePostal": 94300,
    "codeInsee": 94080
  },
  {
    "departement": 13,
    "slug": "martigues",
    "name": "Martigues",
    "codePostal": "13117-13500",
    "codeInsee": 13056
  },
  {
    "departement": 93,
    "slug": "bobigny",
    "name": "Bobigny",
    "codePostal": 93000,
    "codeInsee": 93008
  },
  {
    "departement": 11,
    "slug": "carcassonne",
    "name": "Carcassonne",
    "codePostal": 11000,
    "codeInsee": 11069
  },
  {
    "departement": 93,
    "slug": "saint-ouen-93",
    "name": "Saint-Ouen",
    "codePostal": 93400,
    "codeInsee": 93070
  },
  {
    "departement": 6,
    "slug": "cagnes-sur-mer",
    "name": "Cagnes-sur-Mer",
    "codePostal": 6800,
    "codeInsee": 6027
  },
  {
    "departement": 92,
    "slug": "suresnes",
    "name": "Suresnes",
    "codePostal": 92150,
    "codeInsee": 92073
  },
  {
    "departement": 41,
    "slug": "blois",
    "name": "Blois",
    "codePostal": 41000,
    "codeInsee": 41018
  },
  {
    "departement": 13,
    "slug": "aubagne",
    "name": "Aubagne",
    "codePostal": 13400,
    "codeInsee": 13005
  },
  {
    "departement": 35,
    "slug": "saint-malo",
    "name": "Saint-Malo",
    "codePostal": 35400,
    "codeInsee": 35288
  },
  {
    "departement": 22,
    "slug": "saint-brieuc",
    "name": "Saint-Brieuc",
    "codePostal": 22000,
    "codeInsee": 22278
  },
  {
    "departement": 36,
    "slug": "chateauroux",
    "name": "Châteauroux",
    "codePostal": 36000,
    "codeInsee": 36044
  },
  {
    "departement": 51,
    "slug": "chalons-en-champagne",
    "name": "Châlons-en-Champagne",
    "codePostal": 51000,
    "codeInsee": 51108
  },
  {
    "departement": 92,
    "slug": "meudon",
    "name": "Meudon",
    "codePostal": "92190-92360",
    "codeInsee": 92048
  },
  {
    "departement": 71,
    "slug": "chalon-sur-saone",
    "name": "Chalon-sur-Saône",
    "codePostal": 71100,
    "codeInsee": 71076
  },
  {
    "departement": 64,
    "slug": "bayonne",
    "name": "Bayonne",
    "codePostal": 64100,
    "codeInsee": 64102
  },
  {
    "departement": 92,
    "slug": "puteaux",
    "name": "Puteaux",
    "codePostal": 92800,
    "codeInsee": 92062
  },
  {
    "departement": 94,
    "slug": "alfortville",
    "name": "Alfortville",
    "codePostal": 94140,
    "codeInsee": 94002
  },
  {
    "departement": 59,
    "slug": "valenciennes",
    "name": "Valenciennes",
    "codePostal": 59300,
    "codeInsee": 59606
  },
  {
    "departement": 44,
    "slug": "saint-herblain",
    "name": "Saint-Herblain",
    "codePostal": 44800,
    "codeInsee": 44162
  },
  {
    "departement": 13,
    "slug": "salon-de-provence",
    "name": "Salon-de-Provence",
    "codePostal": 13300,
    "codeInsee": 13103
  },
  {
    "departement": 91,
    "slug": "corbeil-essonnes",
    "name": "Corbeil-Essonnes",
    "codePostal": 91100,
    "codeInsee": 91174
  },
  {
    "departement": 62,
    "slug": "boulogne-sur-mer",
    "name": "Boulogne-sur-Mer",
    "codePostal": 62200,
    "codeInsee": 62160
  },
  {
    "departement": 65,
    "slug": "tarbes",
    "name": "Tarbes",
    "codePostal": 65000,
    "codeInsee": 65440
  },
  {
    "departement": "2B",
    "slug": "bastia",
    "name": "Bastia",
    "codePostal": "20200-20600",
    "codeInsee": "2B033"
  },
  {
    "departement": 78,
    "slug": "mantes-la-jolie",
    "name": "Mantes-la-Jolie",
    "codePostal": 78200,
    "codeInsee": 78361
  },
  {
    "departement": 34,
    "slug": "sete",
    "name": "Sète",
    "codePostal": 34200,
    "codeInsee": 34301
  },
  {
    "departement": 13,
    "slug": "istres",
    "name": "Istres",
    "codePostal": "13118-13800",
    "codeInsee": 13047
  },
  {
    "departement": 6,
    "slug": "cannet-06",
    "name": "Le Cannet",
    "codePostal": 6110,
    "codeInsee": 6030
  },
  {
    "departement": 81,
    "slug": "castres-81",
    "name": "Castres",
    "codePostal": 81100,
    "codeInsee": 81065
  },
  {
    "departement": 91,
    "slug": "massy-91",
    "name": "Massy",
    "codePostal": 91300,
    "codeInsee": 91377
  },
  {
    "departement": 59,
    "slug": "douai",
    "name": "Douai",
    "codePostal": 59500,
    "codeInsee": 59178
  },
  {
    "departement": 69,
    "slug": "saint-priest-69",
    "name": "Saint-Priest",
    "codePostal": 69800,
    "codeInsee": 69290
  },
  {
    "departement": 93,
    "slug": "livry-gargan",
    "name": "Livry-Gargan",
    "codePostal": 93190,
    "codeInsee": 93046
  },
  {
    "departement": 16,
    "slug": "angouleme",
    "name": "Angoulême",
    "codePostal": 16000,
    "codeInsee": 16015
  },
  {
    "departement": 62,
    "slug": "arras",
    "name": "Arras",
    "codePostal": 62000,
    "codeInsee": 62041
  },
  {
    "departement": 59,
    "slug": "wattrelos",
    "name": "Wattrelos",
    "codePostal": 59150,
    "codeInsee": 59650
  },
  {
    "departement": 69,
    "slug": "vaulx-en-velin",
    "name": "Vaulx-en-Velin",
    "codePostal": 69120,
    "codeInsee": 69256
  },
  {
    "departement": 92,
    "slug": "gennevilliers",
    "name": "Gennevilliers",
    "codePostal": 92230,
    "codeInsee": 92036
  },
  {
    "departement": 69,
    "slug": "caluire-et-cuire",
    "name": "Caluire-et-Cuire",
    "codePostal": 69300,
    "codeInsee": 69034
  },
  {
    "departement": 30,
    "slug": "ales",
    "name": "Alès",
    "codePostal": 30100,
    "codeInsee": 30007
  },
  {
    "departement": 93,
    "slug": "rosny-sous-bois",
    "name": "Rosny-sous-Bois",
    "codePostal": 93110,
    "codeInsee": 93064
  },
  {
    "departement": 57,
    "slug": "thionville",
    "name": "Thionville",
    "codePostal": 57100,
    "codeInsee": 57672
  },
  {
    "departement": 94,
    "slug": "choisy-le-roi",
    "name": "Choisy-le-Roi",
    "codePostal": 94600,
    "codeInsee": 94022
  },
  {
    "departement": 33,
    "slug": "talence",
    "name": "Talence",
    "codePostal": 33400,
    "codeInsee": 33522
  },
  {
    "departement": 60,
    "slug": "compiegne",
    "name": "Compiègne",
    "codePostal": 60200,
    "codeInsee": 60159
  },
  {
    "departement": 78,
    "slug": "saint-germain-en-laye",
    "name": "Saint-Germain-en-Laye",
    "codePostal": 78100,
    "codeInsee": 78551
  },
  {
    "departement": 1,
    "slug": "bourg-en-bresse",
    "name": "Bourg-en-Bresse",
    "codePostal": 1000,
    "codeInsee": 1053
  },
  {
    "departement": 95,
    "slug": "garges-les-gonesse",
    "name": "Garges-lès-Gonesse",
    "codePostal": 95140,
    "codeInsee": 95268
  },
  {
    "departement": 5,
    "slug": "gap",
    "name": "Gap",
    "codePostal": 5000,
    "codeInsee": 5061
  },
  {
    "departement": 93,
    "slug": "noisy-le-sec",
    "name": "Noisy-le-Sec",
    "codePostal": 93130,
    "codeInsee": 93053
  },
  {
    "departement": 77,
    "slug": "melun",
    "name": "Melun",
    "codePostal": 77000,
    "codeInsee": 77288
  },
  {
    "departement": 972,
    "slug": "le-lamentin",
    "name": "Lamentin",
    "codePostal": 97232,
    "codeInsee": 97213
  },
  {
    "departement": 93,
    "slug": "gagny",
    "name": "Gagny",
    "codePostal": 93220,
    "codeInsee": 93032
  },
  {
    "departement": 59,
    "slug": "marcq-en-baroeul",
    "name": "Marcq-en-Barœul",
    "codePostal": 59700,
    "codeInsee": 59378
  },
  {
    "departement": 28,
    "slug": "chartres",
    "name": "Chartres",
    "codePostal": 28000,
    "codeInsee": 28085
  },
  {
    "departement": 69,
    "slug": "bron",
    "name": "Bron",
    "codePostal": 69500,
    "codeInsee": 69029
  },
  {
    "departement": 50,
    "slug": "cherbourg-octeville",
    "name": "Cherbourg-Octeville",
    "codePostal": "50100-50130",
    "codeInsee": 50129
  },
  {
    "departement": 44,
    "slug": "reze",
    "name": "Rezé",
    "codePostal": 44400,
    "codeInsee": 44143
  },
  {
    "departement": 974,
    "slug": "le-port",
    "name": "Port",
    "codePostal": 97420,
    "codeInsee": 97407
  },
  {
    "departement": 3,
    "slug": "montlucon",
    "name": "Montluçon",
    "codePostal": 3100,
    "codeInsee": 3185
  },
  {
    "departement": 973,
    "slug": "saint-laurent-du-maroni",
    "name": "Saint-Laurent-du-Maroni",
    "codePostal": 97320,
    "codeInsee": 97311
  },
  {
    "departement": 92,
    "slug": "bagneux-92",
    "name": "Bagneux",
    "codePostal": 92220,
    "codeInsee": 92007
  },
  {
    "departement": 64,
    "slug": "anglet",
    "name": "Anglet",
    "codePostal": 64600,
    "codeInsee": 64024
  },
  {
    "departement": 93,
    "slug": "courneuve",
    "name": "La Courneuve",
    "codePostal": 93120,
    "codeInsee": 93027
  },
  {
    "departement": 78,
    "slug": "poissy",
    "name": "Poissy",
    "codePostal": 78300,
    "codeInsee": 78498
  },
  {
    "departement": 971,
    "slug": "st-martin",
    "name": "Saint-Martin",
    "codePostal": 97150,
    "codeInsee": 97127
  },
  {
    "departement": 91,
    "slug": "savigny-sur-orge",
    "name": "Savigny-sur-Orge",
    "codePostal": 91600,
    "codeInsee": 91589
  },
  {
    "departement": 42,
    "slug": "roanne",
    "name": "Roanne",
    "codePostal": 42300,
    "codeInsee": 42187
  },
  {
    "departement": 58,
    "slug": "nevers",
    "name": "Nevers",
    "codePostal": 58000,
    "codeInsee": 58194
  },
  {
    "departement": 83,
    "slug": "draguignan",
    "name": "Draguignan",
    "codePostal": 83300,
    "codeInsee": 83050
  },
  {
    "departement": 89,
    "slug": "auxerre",
    "name": "Auxerre",
    "codePostal": "89000-89290",
    "codeInsee": 89024
  },
  {
    "departement": 38,
    "slug": "saint-martin-d-heres",
    "name": "Saint-Martin-d'Hères",
    "codePostal": 38400,
    "codeInsee": 38421
  },
  {
    "departement": 37,
    "slug": "joue-les-tours",
    "name": "Joué-lès-Tours",
    "codePostal": 37300,
    "codeInsee": 37122
  },
  {
    "departement": 974,
    "slug": "saint-joseph",
    "name": "Saint-Joseph",
    "codePostal": 97480,
    "codeInsee": 97412
  },
  {
    "departement": 42,
    "slug": "saint-chamond",
    "name": "Saint-Chamond",
    "codePostal": 42400,
    "codeInsee": 42207
  },
  {
    "departement": 38,
    "slug": "echirolles",
    "name": "Échirolles",
    "codePostal": 38130,
    "codeInsee": 38151
  },
  {
    "departement": 93,
    "slug": "villepinte-93",
    "name": "Villepinte",
    "codePostal": 93420,
    "codeInsee": 93078
  },
  {
    "departement": 77,
    "slug": "pontault-combault",
    "name": "Pontault-Combault",
    "codePostal": 77340,
    "codeInsee": 77373
  },
  {
    "departement": 78,
    "slug": "conflans-sainte-honorine",
    "name": "Conflans-Sainte-Honorine",
    "codePostal": 78700,
    "codeInsee": 78172
  },
  {
    "departement": 69,
    "slug": "villefranche-sur-saone",
    "name": "Villefranche-sur-Saône",
    "codePostal": 69400,
    "codeInsee": 69264
  },
  {
    "departement": 26,
    "slug": "montelimar",
    "name": "Montélimar",
    "codePostal": 26200,
    "codeInsee": 26198
  },
  {
    "departement": 31,
    "slug": "colomiers",
    "name": "Colomiers",
    "codePostal": 31770,
    "codeInsee": 31149
  },
  {
    "departement": 974,
    "slug": "saint-benoit",
    "name": "Saint-Benoît",
    "codePostal": 97470,
    "codeInsee": 97410
  },
  {
    "departement": 62,
    "slug": "lens",
    "name": "Lens",
    "codePostal": 62300,
    "codeInsee": 62498
  },
  {
    "departement": 13,
    "slug": "vitrolles-13",
    "name": "Vitrolles",
    "codePostal": 13127,
    "codeInsee": 13117
  },
  {
    "departement": 83,
    "slug": "six-fours-les-plages",
    "name": "Six-Fours-les-Plages",
    "codePostal": 83140,
    "codeInsee": 83129
  },
  {
    "departement": 93,
    "slug": "tremblay-en-france",
    "name": "Tremblay-en-France",
    "codePostal": 93290,
    "codeInsee": 93073
  },
  {
    "departement": 13,
    "slug": "marignane",
    "name": "Marignane",
    "codePostal": 13700,
    "codeInsee": 13054
  },
  {
    "departement": 67,
    "slug": "haguenau",
    "name": "Haguenau",
    "codePostal": 67500,
    "codeInsee": 67180
  },
  {
    "departement": 91,
    "slug": "sainte-genevieve-des-bois-91",
    "name": "Sainte-Geneviève-des-Bois",
    "codePostal": 91700,
    "codeInsee": 91549
  },
  {
    "departement": 71,
    "slug": "macon",
    "name": "Mâcon",
    "codePostal": 71870,
    "codeInsee": 71270
  },
  {
    "departement": 47,
    "slug": "agen",
    "name": "Agen",
    "codePostal": 47000,
    "codeInsee": 47001
  },
  {
    "departement": 74,
    "slug": "thonon-les-bains",
    "name": "Thonon-les-Bains",
    "codePostal": 74200,
    "codeInsee": 74281
  },
  {
    "departement": 93,
    "slug": "bagnolet",
    "name": "Bagnolet",
    "codePostal": 93170,
    "codeInsee": 93006
  },
  {
    "departement": 13,
    "slug": "ciotat",
    "name": "La Ciotat",
    "codePostal": 13600,
    "codeInsee": 13028
  },
  {
    "departement": 93,
    "slug": "stains",
    "name": "Stains",
    "codePostal": 93240,
    "codeInsee": 93072
  },
  {
    "departement": 83,
    "slug": "saint-raphael-83",
    "name": "Saint-Raphaël",
    "codePostal": "83700-83530",
    "codeInsee": 83118
  },
  {
    "departement": 60,
    "slug": "creil",
    "name": "Creil",
    "codePostal": 60100,
    "codeInsee": 60175
  },
  {
    "departement": 26,
    "slug": "romans-sur-isere",
    "name": "Romans-sur-Isère",
    "codePostal": 26100,
    "codeInsee": 26281
  },
  {
    "departement": 93,
    "slug": "neuilly-sur-marne",
    "name": "Neuilly-sur-Marne",
    "codePostal": 93330,
    "codeInsee": 93050
  },
  {
    "departement": 78,
    "slug": "montigny-le-bretonneux",
    "name": "Montigny-le-Bretonneux",
    "codePostal": 78180,
    "codeInsee": 78423
  },
  {
    "departement": 95,
    "slug": "franconville-95",
    "name": "Franconville",
    "codePostal": 95130,
    "codeInsee": 95252
  },
  {
    "departement": 88,
    "slug": "epinal",
    "name": "Épinal",
    "codePostal": 88000,
    "codeInsee": 88160
  },
  {
    "departement": 92,
    "slug": "chatillon-92",
    "name": "Châtillon",
    "codePostal": 92320,
    "codeInsee": 92020
  },
  {
    "departement": 59,
    "slug": "cambrai",
    "name": "Cambrai",
    "codePostal": 59400,
    "codeInsee": 59122
  },
  {
    "departement": 94,
    "slug": "perreux-sur-marne",
    "name": "Le Perreux-sur-Marne",
    "codePostal": 94170,
    "codeInsee": 94058
  },
  {
    "departement": 86,
    "slug": "chatellerault",
    "name": "Châtellerault",
    "codePostal": 86100,
    "codeInsee": 86066
  },
  {
    "departement": 94,
    "slug": "villeneuve-saint-georges",
    "name": "Villeneuve-Saint-Georges",
    "codePostal": 94190,
    "codeInsee": 94078
  },
  {
    "departement": 74,
    "slug": "annemasse",
    "name": "Annemasse",
    "codePostal": 74100,
    "codeInsee": 74012
  },
  {
    "departement": 92,
    "slug": "chatenay-malabry",
    "name": "Châtenay-Malabry",
    "codePostal": 92290,
    "codeInsee": 92019
  },
  {
    "departement": 91,
    "slug": "viry-chatillon",
    "name": "Viry-Châtillon",
    "codePostal": 91170,
    "codeInsee": 91687
  },
  {
    "departement": 76,
    "slug": "dieppe",
    "name": "Dieppe",
    "codePostal": 76200,
    "codeInsee": 76217
  },
  {
    "departement": 62,
    "slug": "lievin",
    "name": "Liévin",
    "codePostal": 62800,
    "codeInsee": 62510
  },
  {
    "departement": 94,
    "slug": "nogent-sur-marne",
    "name": "Nogent-sur-Marne",
    "codePostal": 94130,
    "codeInsee": 94052
  },
  {
    "departement": 78,
    "slug": "houilles",
    "name": "Houilles",
    "codePostal": 78800,
    "codeInsee": 78311
  },
  {
    "departement": 40,
    "slug": "mont-de-marsan",
    "name": "Mont-de-Marsan",
    "codePostal": 40000,
    "codeInsee": 40192
  },
  {
    "departement": 59,
    "slug": "maubeuge",
    "name": "Maubeuge",
    "codePostal": 59600,
    "codeInsee": 59392
  },
  {
    "departement": 28,
    "slug": "dreux",
    "name": "Dreux",
    "codePostal": 28100,
    "codeInsee": 28134
  },
  {
    "departement": 95,
    "slug": "goussainville-95",
    "name": "Goussainville",
    "codePostal": 95190,
    "codeInsee": 95280
  },
  {
    "departement": 92,
    "slug": "malakoff",
    "name": "Malakoff",
    "codePostal": 92240,
    "codeInsee": 92046
  },
  {
    "departement": 54,
    "slug": "vandoeuvre-les-nancy",
    "name": "Vandœuvre-lès-Nancy",
    "codePostal": 54500,
    "codeInsee": 54547
  },
  {
    "departement": 974,
    "slug": "saint-leu",
    "name": "Saint-Leu",
    "codePostal": 97436,
    "codeInsee": 97413
  },
  {
    "departement": 78,
    "slug": "plaisir",
    "name": "Plaisir",
    "codePostal": 78370,
    "codeInsee": 78490
  },
  {
    "departement": 67,
    "slug": "schiltigheim",
    "name": "Schiltigheim",
    "codePostal": 67300,
    "codeInsee": 67447
  },
  {
    "departement": 78,
    "slug": "mureaux",
    "name": "Mureaux",
    "codePostal": 78130,
    "codeInsee": 78440
  },
  {
    "departement": 91,
    "slug": "athis-mons",
    "name": "Athis-Mons",
    "codePostal": 91200,
    "codeInsee": 91027
  },
  {
    "departement": 974,
    "slug": "la-possession",
    "name": "Possession",
    "codePostal": 97419,
    "codeInsee": 97408
  },
  {
    "departement": 91,
    "slug": "palaiseau",
    "name": "Palaiseau",
    "codePostal": 91120,
    "codeInsee": 91477
  },
  {
    "departement": 69,
    "slug": "meyzieu",
    "name": "Meyzieu",
    "codePostal": 69330,
    "codeInsee": 69282
  },
  {
    "departement": 971,
    "slug": "baie-mahault",
    "name": "Baie-Mahault",
    "codePostal": 97122,
    "codeInsee": 97103
  },
  {
    "departement": 94,
    "slug": "haÿ-les-roses",
    "name": "L'Haÿ-les-Roses",
    "codePostal": 94240,
    "codeInsee": 94038
  },
  {
    "departement": 78,
    "slug": "chatou",
    "name": "Chatou",
    "codePostal": 78400,
    "codeInsee": 78146
  },
  {
    "departement": 6,
    "slug": "saint-laurent-du-var",
    "name": "Saint-Laurent-du-Var",
    "codePostal": 6700,
    "codeInsee": 6123
  },
  {
    "departement": 69,
    "slug": "rillieux-la-pape",
    "name": "Rillieux-la-Pape",
    "codePostal": 69140,
    "codeInsee": 69286
  },
  {
    "departement": 974,
    "slug": "sainte-marie",
    "name": "Sainte-Marie",
    "codePostal": 97438,
    "codeInsee": 97418
  },
  {
    "departement": 92,
    "slug": "saint-cloud",
    "name": "Saint-Cloud",
    "codePostal": 92210,
    "codeInsee": 92064
  },
  {
    "departement": 93,
    "slug": "clichy-sous-bois",
    "name": "Clichy-sous-Bois",
    "codePostal": 93390,
    "codeInsee": 93014
  },
  {
    "departement": 94,
    "slug": "thiais",
    "name": "Thiais",
    "codePostal": 94320,
    "codeInsee": 94073
  },
  {
    "departement": 24,
    "slug": "perigueux",
    "name": "Périgueux",
    "codePostal": 24000,
    "codeInsee": 24322
  },
  {
    "departement": 95,
    "slug": "pontoise",
    "name": "Pontoise",
    "codePostal": 95300,
    "codeInsee": 95500
  },
  {
    "departement": 78,
    "slug": "trappes",
    "name": "Trappes",
    "codePostal": 78190,
    "codeInsee": 78621
  },
  {
    "departement": 94,
    "slug": "charenton-le-pont",
    "name": "Charenton-le-Pont",
    "codePostal": 94220,
    "codeInsee": 94018
  },
  {
    "departement": 38,
    "slug": "vienne",
    "name": "Vienne",
    "codePostal": 38200,
    "codeInsee": 38544
  },
  {
    "departement": 92,
    "slug": "bois-colombes",
    "name": "Bois-Colombes",
    "codePostal": 92270,
    "codeInsee": 92009
  },
  {
    "departement": 84,
    "slug": "carpentras",
    "name": "Carpentras",
    "codePostal": 84200,
    "codeInsee": 84031
  },
  {
    "departement": 84,
    "slug": "orange",
    "name": "Orange",
    "codePostal": 84100,
    "codeInsee": 84087
  },
  {
    "departement": 91,
    "slug": "yerres",
    "name": "Yerres",
    "codePostal": 91330,
    "codeInsee": 91691
  },
  {
    "departement": 78,
    "slug": "chesnay",
    "name": "Le Chesnay",
    "codePostal": 78150,
    "codeInsee": 78158
  },
  {
    "departement": 6,
    "slug": "menton",
    "name": "Menton",
    "codePostal": 6500,
    "codeInsee": 6083
  },
  {
    "departement": 76,
    "slug": "sotteville-les-rouen",
    "name": "Sotteville-lès-Rouen",
    "codePostal": 76300,
    "codeInsee": 76681
  },
  {
    "departement": 2,
    "slug": "soissons",
    "name": "Soissons",
    "codePostal": 2200,
    "codeInsee": 2722
  },
  {
    "departement": 77,
    "slug": "savigny-le-temple",
    "name": "Savigny-le-Temple",
    "codePostal": 77176,
    "codeInsee": 77445
  },
  {
    "departement": 59,
    "slug": "lambersart",
    "name": "Lambersart",
    "codePostal": 59130,
    "codeInsee": 59328
  },
  {
    "departement": 91,
    "slug": "draveil",
    "name": "Draveil",
    "codePostal": 91210,
    "codeInsee": 91201
  },
  {
    "departement": 33,
    "slug": "villenave-d-ornon",
    "name": "Villenave-d'Ornon",
    "codePostal": 33140,
    "codeInsee": 33550
  },
  {
    "departement": 6,
    "slug": "vallauris",
    "name": "Vallauris",
    "codePostal": 6220,
    "codeInsee": 6155
  },
  {
    "departement": 94,
    "slug": "cachan",
    "name": "Cachan",
    "codePostal": 94230,
    "codeInsee": 94016
  },
  {
    "departement": 973,
    "slug": "matoury",
    "name": "Matoury",
    "codePostal": 97351,
    "codeInsee": 97307
  },
  {
    "departement": 76,
    "slug": "saint-etienne-du-rouvray",
    "name": "Saint-Étienne-du-Rouvray",
    "codePostal": 76800,
    "codeInsee": 76575
  },
  {
    "departement": 93,
    "slug": "villemomble",
    "name": "Villemomble",
    "codePostal": 93250,
    "codeInsee": 93077
  },
  {
    "departement": 95,
    "slug": "bezons",
    "name": "Bezons",
    "codePostal": 95870,
    "codeInsee": 95063
  },
  {
    "departement": 78,
    "slug": "guyancourt",
    "name": "Guyancourt",
    "codePostal": 78280,
    "codeInsee": 78297
  },
  {
    "departement": 15,
    "slug": "aurillac",
    "name": "Aurillac",
    "codePostal": 15000,
    "codeInsee": 15014
  },
  {
    "departement": 93,
    "slug": "pierrefitte-sur-seine",
    "name": "Pierrefitte-sur-Seine",
    "codePostal": 93380,
    "codeInsee": 93059
  },
  {
    "departement": 73,
    "slug": "aix-les-bains",
    "name": "Aix-les-Bains",
    "codePostal": 73100,
    "codeInsee": 73008
  },
  {
    "departement": 92,
    "slug": "plessis-robinson",
    "name": "Le Plessis-Robinson",
    "codePostal": 92350,
    "codeInsee": 92060
  },
  {
    "departement": 33,
    "slug": "saint-medard-en-jalles",
    "name": "Saint-Médard-en-Jalles",
    "codePostal": 33160,
    "codeInsee": 33449
  },
  {
    "departement": 24,
    "slug": "bergerac",
    "name": "Bergerac",
    "codePostal": 24100,
    "codeInsee": 24037
  },
  {
    "departement": 92,
    "slug": "garenne-colombes",
    "name": "La Garenne-Colombes",
    "codePostal": 92250,
    "codeInsee": 92035
  },
  {
    "departement": 91,
    "slug": "ris-orangis",
    "name": "Ris-Orangis",
    "codePostal": 91000,
    "codeInsee": 91521
  },
  {
    "departement": 95,
    "slug": "ermont",
    "name": "Ermont",
    "codePostal": 95120,
    "codeInsee": 95219
  },
  {
    "departement": 94,
    "slug": "villiers-sur-marne",
    "name": "Villiers-sur-Marne",
    "codePostal": 94350,
    "codeInsee": 94079
  },
  {
    "departement": 91,
    "slug": "vigneux-sur-seine",
    "name": "Vigneux-sur-Seine",
    "codePostal": 91270,
    "codeInsee": 91657
  },
  {
    "departement": 49,
    "slug": "saumur",
    "name": "Saumur",
    "codePostal": 49400,
    "codeInsee": 49328
  },
  {
    "departement": 92,
    "slug": "vanves",
    "name": "Vanves",
    "codePostal": 92170,
    "codeInsee": 92075
  },
  {
    "departement": 18,
    "slug": "vierzon",
    "name": "Vierzon",
    "codePostal": 18100,
    "codeInsee": 18279
  },
  {
    "departement": 78,
    "slug": "elancourt",
    "name": "Élancourt",
    "codePostal": 78990,
    "codeInsee": 78208
  },
  {
    "departement": 67,
    "slug": "illkirch-graffenstaden",
    "name": "Illkirch-Graffenstaden",
    "codePostal": 67400,
    "codeInsee": 67218
  },
  {
    "departement": 95,
    "slug": "villiers-le-bel",
    "name": "Villiers-le-Bel",
    "codePostal": 95400,
    "codeInsee": 95680
  },
  {
    "departement": 61,
    "slug": "alencon",
    "name": "Alençon",
    "codePostal": 61000,
    "codeInsee": 61001
  },
  {
    "departement": 91,
    "slug": "grigny-91",
    "name": "Grigny",
    "codePostal": 91350,
    "codeInsee": 91286
  },
  {
    "departement": 976,
    "slug": "koungou",
    "name": "Koungou",
    "codePostal": 97600,
    "codeInsee": 97610
  },
  {
    "departement": 95,
    "slug": "gonesse",
    "name": "Gonesse",
    "codePostal": 95500,
    "codeInsee": 95277
  },
  {
    "departement": 971,
    "slug": "le-gosier",
    "name": "Gosier",
    "codePostal": 97190,
    "codeInsee": 97113
  },
  {
    "departement": 62,
    "slug": "henin-beaumont",
    "name": "Hénin-Beaumont",
    "codePostal": 62110,
    "codeInsee": 62427
  },
  {
    "departement": 94,
    "slug": "fresnes-94",
    "name": "Fresnes",
    "codePostal": 94260,
    "codeInsee": 94034
  },
  {
    "departement": 38,
    "slug": "bourgoin-jallieu",
    "name": "Bourgoin-Jallieu",
    "codePostal": 38300,
    "codeInsee": 38053
  },
  {
    "departement": 78,
    "slug": "rambouillet",
    "name": "Rambouillet",
    "codePostal": 78120,
    "codeInsee": 78517
  },
  {
    "departement": 95,
    "slug": "taverny",
    "name": "Taverny",
    "codePostal": 95150,
    "codeInsee": 95607
  },
  {
    "departement": 95,
    "slug": "sannois",
    "name": "Sannois",
    "codePostal": 95110,
    "codeInsee": 95582
  },
  {
    "departement": 94,
    "slug": "kremlin-bicetre",
    "name": "Le Kremlin-Bicêtre",
    "codePostal": 94270,
    "codeInsee": 94043
  },
  {
    "departement": 95,
    "slug": "herblay",
    "name": "Herblay",
    "codePostal": 95220,
    "codeInsee": 95306
  },
  {
    "departement": 17,
    "slug": "saintes",
    "name": "Saintes",
    "codePostal": 17100,
    "codeInsee": 17415
  },
  {
    "departement": 2,
    "slug": "laon",
    "name": "Laon",
    "codePostal": 2000,
    "codeInsee": 2408
  },
  {
    "departement": 83,
    "slug": "garde-83",
    "name": "La Garde",
    "codePostal": 83130,
    "codeInsee": 83062
  },
  {
    "departement": 25,
    "slug": "montbeliard",
    "name": "Montbéliard",
    "codePostal": 25200,
    "codeInsee": 25388
  },
  {
    "departement": 94,
    "slug": "sucy-en-brie",
    "name": "Sucy-en-Brie",
    "codePostal": 94880,
    "codeInsee": 94071
  },
  {
    "departement": 93,
    "slug": "romainville",
    "name": "Romainville",
    "codePostal": 93230,
    "codeInsee": 93063
  },
  {
    "departement": 62,
    "slug": "bethune",
    "name": "Béthune",
    "codePostal": 62400,
    "codeInsee": 62119
  },
  {
    "departement": 69,
    "slug": "decines-charpieu",
    "name": "Décines-Charpieu",
    "codePostal": 69150,
    "codeInsee": 69275
  },
  {
    "departement": 52,
    "slug": "saint-dizier",
    "name": "Saint-Dizier",
    "codePostal": 52100,
    "codeInsee": 52448
  },
  {
    "departement": 91,
    "slug": "brunoy",
    "name": "Brunoy",
    "codePostal": 91800,
    "codeInsee": 91114
  },
  {
    "departement": 59,
    "slug": "armentieres",
    "name": "Armentières",
    "codePostal": 59280,
    "codeInsee": 59017
  },
  {
    "departement": 13,
    "slug": "miramas",
    "name": "Miramas",
    "codePostal": 13140,
    "codeInsee": 13063
  },
  {
    "departement": 31,
    "slug": "tournefeuille",
    "name": "Tournefeuille",
    "codePostal": 31170,
    "codeInsee": 31557
  },
  {
    "departement": 64,
    "slug": "biarritz",
    "name": "Biarritz",
    "codePostal": 64200,
    "codeInsee": 64122
  },
  {
    "departement": 34,
    "slug": "lunel",
    "name": "Lunel",
    "codePostal": 34400,
    "codeInsee": 34145
  },
  {
    "departement": 93,
    "slug": "montfermeil",
    "name": "Montfermeil",
    "codePostal": 93370,
    "codeInsee": 93047
  },
  {
    "departement": 973,
    "slug": "kourou",
    "name": "Kourou",
    "codePostal": 97310,
    "codeInsee": 97304
  },
  {
    "departement": 92,
    "slug": "villeneuve-la-garenne",
    "name": "Villeneuve-la-Garenne",
    "codePostal": 92390,
    "codeInsee": 92078
  },
  {
    "departement": 69,
    "slug": "oullins",
    "name": "Oullins",
    "codePostal": 69600,
    "codeInsee": 69149
  },
  {
    "departement": 27,
    "slug": "vernon-27",
    "name": "Vernon",
    "codePostal": 27200,
    "codeInsee": 27681
  },
  {
    "departement": 17,
    "slug": "rochefort-17",
    "name": "Rochefort",
    "codePostal": 17300,
    "codeInsee": 17299
  },
  {
    "departement": 44,
    "slug": "saint-sebastien-sur-loire",
    "name": "Saint-Sébastien-sur-Loire",
    "codePostal": 44230,
    "codeInsee": 44190
  },
  {
    "departement": 84,
    "slug": "cavaillon",
    "name": "Cavaillon",
    "codePostal": 84300,
    "codeInsee": 84035
  },
  {
    "departement": 76,
    "slug": "grand-quevilly",
    "name": "Le Grand-Quevilly",
    "codePostal": 76120,
    "codeInsee": 76322
  },
  {
    "departement": 33,
    "slug": "begles",
    "name": "Bègles",
    "codePostal": 33130,
    "codeInsee": 33039
  },
  {
    "departement": 89,
    "slug": "sens",
    "name": "Sens",
    "codePostal": 89100,
    "codeInsee": 89387
  },
  {
    "departement": 91,
    "slug": "ulis",
    "name": "Ulis",
    "codePostal": 91940,
    "codeInsee": 91692
  },
  {
    "departement": 3,
    "slug": "vichy",
    "name": "Vichy",
    "codePostal": 3200,
    "codeInsee": 3310
  },
  {
    "departement": 39,
    "slug": "dole",
    "name": "Dole",
    "codePostal": 39100,
    "codeInsee": 39198
  },
  {
    "departement": 33,
    "slug": "teste-de-buch",
    "name": "La Teste-de-Buch",
    "codePostal": 33260,
    "codeInsee": 33529
  },
  {
    "departement": 34,
    "slug": "agde",
    "name": "Agde",
    "codePostal": 34300,
    "codeInsee": 34003
  },
  {
    "departement": 44,
    "slug": "orvault",
    "name": "Orvault",
    "codePostal": 44700,
    "codeInsee": 44114
  },
  {
    "departement": 77,
    "slug": "champs-sur-marne",
    "name": "Champs-sur-Marne",
    "codePostal": 77420,
    "codeInsee": 77083
  },
  {
    "departement": 971,
    "slug": "sainte-anne",
    "name": "Sainte-Anne",
    "codePostal": 97180,
    "codeInsee": 97128
  },
  {
    "departement": 80,
    "slug": "abbeville",
    "name": "Abbeville",
    "codePostal": 80132,
    "codeInsee": 80001
  },
  {
    "departement": 77,
    "slug": "villeparisis",
    "name": "Villeparisis",
    "codePostal": 77270,
    "codeInsee": 77514
  },
  {
    "departement": 95,
    "slug": "eaubonne",
    "name": "Eaubonne",
    "codePostal": 95600,
    "codeInsee": 95203
  },
  {
    "departement": 51,
    "slug": "epernay",
    "name": "Épernay",
    "codePostal": 51200,
    "codeInsee": 51230
  },
  {
    "departement": 972,
    "slug": "le-robert",
    "name": "Robert",
    "codePostal": 97231,
    "codeInsee": 97222
  },
  {
    "departement": 12,
    "slug": "rodez",
    "name": "Rodez",
    "codePostal": 12000,
    "codeInsee": 12202
  },
  {
    "departement": 31,
    "slug": "muret",
    "name": "Muret",
    "codePostal": 31600,
    "codeInsee": 31395
  },
  {
    "departement": 33,
    "slug": "libourne",
    "name": "Libourne",
    "codePostal": 33500,
    "codeInsee": 33243
  },
  {
    "departement": 95,
    "slug": "saint-ouen-l-aumone",
    "name": "Saint-Ouen-l'Aumône",
    "codePostal": 95310,
    "codeInsee": 95572
  },
  {
    "departement": 47,
    "slug": "villeneuve-sur-lot",
    "name": "Villeneuve-sur-Lot",
    "codePostal": 47300,
    "codeInsee": 47323
  },
  {
    "departement": 62,
    "slug": "bruay-la-buissiere",
    "name": "Bruay-la-Buissière",
    "codePostal": 62700,
    "codeInsee": 62178
  },
  {
    "departement": 92,
    "slug": "fontenay-aux-roses",
    "name": "Fontenay-aux-Roses",
    "codePostal": 92260,
    "codeInsee": 92032
  },
  {
    "departement": 77,
    "slug": "bussy-saint-georges",
    "name": "Bussy-Saint-Georges",
    "codePostal": 77600,
    "codeInsee": 77058
  },
  {
    "departement": 91,
    "slug": "bretigny-sur-orge",
    "name": "Brétigny-sur-Orge",
    "codePostal": 91220,
    "codeInsee": 91103
  },
  {
    "departement": 971,
    "slug": "petit-bourg",
    "name": "Petit-Bourg",
    "codePostal": 97170,
    "codeInsee": 97118
  },
  {
    "departement": 91,
    "slug": "etampes",
    "name": "Étampes",
    "codePostal": 91150,
    "codeInsee": 91223
  },
  {
    "departement": 33,
    "slug": "bouscat",
    "name": "Le Bouscat",
    "codePostal": 33110,
    "codeInsee": 33069
  },
  {
    "departement": 33,
    "slug": "gradignan",
    "name": "Gradignan",
    "codePostal": 33170,
    "codeInsee": 33192
  },
  {
    "departement": 95,
    "slug": "cormeilles-en-parisis",
    "name": "Cormeilles-en-Parisis",
    "codePostal": 95240,
    "codeInsee": 95176
  },
  {
    "departement": 52,
    "slug": "chaumont-52",
    "name": "Chaumont",
    "codePostal": 52000,
    "codeInsee": 52121
  },
  {
    "departement": 92,
    "slug": "sevres",
    "name": "Sèvres",
    "codePostal": 92310,
    "codeInsee": 92072
  },
  {
    "departement": 91,
    "slug": "montgeron",
    "name": "Montgeron",
    "codePostal": 91230,
    "codeInsee": 91421
  },
  {
    "departement": 78,
    "slug": "maisons-laffitte",
    "name": "Maisons-Laffitte",
    "codePostal": 78600,
    "codeInsee": 78358
  },
  {
    "departement": 71,
    "slug": "creusot",
    "name": "Le Creusot",
    "codePostal": 71200,
    "codeInsee": 71153
  },
  {
    "departement": 1,
    "slug": "oyonnax",
    "name": "Oyonnax",
    "codePostal": 1100,
    "codeInsee": 1283
  },
  {
    "departement": 57,
    "slug": "montigny-les-metz",
    "name": "Montigny-lès-Metz",
    "codePostal": 57158,
    "codeInsee": 57480
  },
  {
    "departement": 34,
    "slug": "frontignan",
    "name": "Frontignan",
    "codePostal": 34110,
    "codeInsee": 34108
  },
  {
    "departement": 59,
    "slug": "coudekerque-branche",
    "name": "Coudekerque-Branche",
    "codePostal": 59210,
    "codeInsee": 59155
  },
  {
    "departement": 59,
    "slug": "madeleine",
    "name": "La Madeleine",
    "codePostal": 59110,
    "codeInsee": 59368
  },
  {
    "departement": 77,
    "slug": "torcy-77",
    "name": "Torcy",
    "codePostal": 77200,
    "codeInsee": 77468
  },
  {
    "departement": 974,
    "slug": "sainte-suzanne",
    "name": "Sainte-Suzanne",
    "codePostal": 97441,
    "codeInsee": 97420
  },
  {
    "departement": 94,
    "slug": "saint-mande",
    "name": "Saint-Mandé",
    "codePostal": 94160,
    "codeInsee": 94067
  },
  {
    "departement": 21,
    "slug": "beaune",
    "name": "Beaune",
    "codePostal": 21200,
    "codeInsee": 21054
  },
  {
    "departement": 971,
    "slug": "le-moule",
    "name": "Moule",
    "codePostal": 97160,
    "codeInsee": 97117
  },
  {
    "departement": 77,
    "slug": "roissy-en-brie",
    "name": "Roissy-en-Brie",
    "codePostal": 77680,
    "codeInsee": 77390
  },
  {
    "departement": 38,
    "slug": "fontaine-38",
    "name": "Fontaine",
    "codePostal": 38600,
    "codeInsee": 38169
  },
  {
    "departement": 33,
    "slug": "cenon",
    "name": "Cenon",
    "codePostal": 33150,
    "codeInsee": 33119
  },
  {
    "departement": 93,
    "slug": "lilas",
    "name": "Lilas",
    "codePostal": 93260,
    "codeInsee": 93045
  },
  {
    "departement": 56,
    "slug": "lanester",
    "name": "Lanester",
    "codePostal": 56600,
    "codeInsee": 56098
  },
  {
    "departement": 6,
    "slug": "mandelieu-la-napoule",
    "name": "Mandelieu-la-Napoule",
    "codePostal": 6210,
    "codeInsee": 6079
  },
  {
    "departement": 4,
    "slug": "manosque",
    "name": "Manosque",
    "codePostal": 4100,
    "codeInsee": 4112
  },
  {
    "departement": 76,
    "slug": "petit-quevilly",
    "name": "Le Petit-Quevilly",
    "codePostal": 76140,
    "codeInsee": 76498
  },
  {
    "departement": 12,
    "slug": "millau",
    "name": "Millau",
    "codePostal": 12100,
    "codeInsee": 12145
  },
  {
    "departement": 59,
    "slug": "mons-en-baroeul",
    "name": "Mons-en-Barœul",
    "codePostal": 59370,
    "codeInsee": 59410
  },
  {
    "departement": 93,
    "slug": "pavillons-sous-bois",
    "name": "Pavillons-sous-Bois",
    "codePostal": 93320,
    "codeInsee": 93057
  },
  {
    "departement": 69,
    "slug": "sainte-foy-les-lyon",
    "name": "Sainte-Foy-lès-Lyon",
    "codePostal": 69110,
    "codeInsee": 69202
  },
  {
    "departement": 31,
    "slug": "blagnac",
    "name": "Blagnac",
    "codePostal": 31700,
    "codeInsee": 31069
  },
  {
    "departement": 14,
    "slug": "lisieux",
    "name": "Lisieux",
    "codePostal": 14100,
    "codeInsee": 14366
  },
  {
    "departement": 59,
    "slug": "hazebrouck",
    "name": "Hazebrouck",
    "codePostal": 59190,
    "codeInsee": 59295
  },
  {
    "departement": 59,
    "slug": "loos",
    "name": "Loos",
    "codePostal": 59120,
    "codeInsee": 59360
  },
  {
    "departement": 32,
    "slug": "auch",
    "name": "Auch",
    "codePostal": 32810,
    "codeInsee": 32013
  },
  {
    "departement": 77,
    "slug": "combs-la-ville",
    "name": "Combs-la-Ville",
    "codePostal": 77380,
    "codeInsee": 77122
  },
  {
    "departement": 57,
    "slug": "sarreguemines",
    "name": "Sarreguemines",
    "codePostal": 57200,
    "codeInsee": 57631
  },
  {
    "departement": 57,
    "slug": "forbach",
    "name": "Forbach",
    "codePostal": 57600,
    "codeInsee": 57227
  },
  {
    "departement": 95,
    "slug": "deuil-la-barre",
    "name": "Deuil-la-Barre",
    "codePostal": 95170,
    "codeInsee": 95197
  },
  {
    "departement": 88,
    "slug": "saint-die-des-vosges",
    "name": "Saint-Dié-des-Vosges",
    "codePostal": 88100,
    "codeInsee": 88413
  },
  {
    "departement": 44,
    "slug": "vertou",
    "name": "Vertou",
    "codePostal": 44120,
    "codeInsee": 44215
  },
  {
    "departement": 14,
    "slug": "herouville-saint-clair",
    "name": "Hérouville-Saint-Clair",
    "codePostal": 14200,
    "codeInsee": 14327
  },
  {
    "departement": 94,
    "slug": "orly",
    "name": "Orly",
    "codePostal": 94310,
    "codeInsee": 94054
  },
  {
    "departement": 91,
    "slug": "longjumeau",
    "name": "Longjumeau",
    "codePostal": 91160,
    "codeInsee": 91345
  },
  {
    "departement": 76,
    "slug": "bois-guillaume",
    "name": "Bois-Guillaume",
    "codePostal": 76230,
    "codeInsee": 76108
  },
  {
    "departement": 95,
    "slug": "montmorency",
    "name": "Montmorency",
    "codePostal": 95160,
    "codeInsee": 95428
  },
  {
    "departement": 45,
    "slug": "fleury-les-aubrais",
    "name": "Fleury-les-Aubrais",
    "codePostal": 45400,
    "codeInsee": 45147
  },
  {
    "departement": 59,
    "slug": "grande-synthe",
    "name": "Grande-Synthe",
    "codePostal": 59760,
    "codeInsee": 59271
  },
  {
    "departement": 78,
    "slug": "celle-saint-cloud",
    "name": "La Celle-Saint-Cloud",
    "codePostal": 78170,
    "codeInsee": 78126
  },
  {
    "departement": 91,
    "slug": "morsang-sur-orge",
    "name": "Morsang-sur-Orge",
    "codePostal": 91390,
    "codeInsee": 91434
  },
  {
    "departement": 972,
    "slug": "schoelcher",
    "name": "SHOELCHER",
    "codePostal": 97233,
    "codeInsee": 97229
  },
  {
    "departement": 83,
    "slug": "valette-du-var",
    "name": "La Valette-du-Var",
    "codePostal": 83160,
    "codeInsee": 83144
  },
  {
    "departement": 77,
    "slug": "dammarie-les-lys",
    "name": "Dammarie-les-Lys",
    "codePostal": 77190,
    "codeInsee": 77152
  },
  {
    "departement": 59,
    "slug": "croix-59",
    "name": "Croix",
    "codePostal": 59170,
    "codeInsee": 59163
  },
  {
    "departement": 40,
    "slug": "dax",
    "name": "Dax",
    "codePostal": 40100,
    "codeInsee": 40088
  },
  {
    "departement": 91,
    "slug": "gif-sur-yvette",
    "name": "Gif-sur-Yvette",
    "codePostal": 91190,
    "codeInsee": 91272
  },
  {
    "departement": 77,
    "slug": "mee-sur-seine",
    "name": "Le Mée-sur-Seine",
    "codePostal": 77350,
    "codeInsee": 77285
  },
  {
    "departement": 93,
    "slug": "neuilly-plaisance",
    "name": "Neuilly-Plaisance",
    "codePostal": 93360,
    "codeInsee": 93049
  },
  {
    "departement": 13,
    "slug": "gardanne",
    "name": "Gardanne",
    "codePostal": 13120,
    "codeInsee": 13041
  },
  {
    "departement": 69,
    "slug": "saint-genis-laval",
    "name": "Saint-Genis-Laval",
    "codePostal": 69230,
    "codeInsee": 69204
  },
  {
    "departement": 59,
    "slug": "denain",
    "name": "Denain",
    "codePostal": 59220,
    "codeInsee": 59172
  },
  {
    "departement": 77,
    "slug": "ozoir-la-ferriere",
    "name": "Ozoir-la-Ferrière",
    "codePostal": 77330,
    "codeInsee": 77350
  },
  {
    "departement": 77,
    "slug": "lagny-sur-marne",
    "name": "Lagny-sur-Marne",
    "codePostal": 77400,
    "codeInsee": 77243
  },
  {
    "departement": 59,
    "slug": "halluin",
    "name": "Halluin",
    "codePostal": 59250,
    "codeInsee": 59279
  },
  {
    "departement": 46,
    "slug": "cahors",
    "name": "Cahors",
    "codePostal": 46000,
    "codeInsee": 46042
  },
  {
    "departement": 95,
    "slug": "saint-gratien-95",
    "name": "Saint-Gratien",
    "codePostal": 95210,
    "codeInsee": 95555
  },
  {
    "departement": 971,
    "slug": "sainte-rose-971",
    "name": "Sainte-Rose",
    "codePostal": 97115,
    "codeInsee": 97129
  },
  {
    "departement": 68,
    "slug": "saint-louis-68",
    "name": "Saint-Louis",
    "codePostal": 68128,
    "codeInsee": 68297
  },
  {
    "departement": 78,
    "slug": "velizy-villacoublay",
    "name": "Vélizy-Villacoublay",
    "codePostal": 78140,
    "codeInsee": 78640
  },
  {
    "departement": 22,
    "slug": "lannion",
    "name": "Lannion",
    "codePostal": 22300,
    "codeInsee": 22113
  },
  {
    "departement": 59,
    "slug": "wasquehal",
    "name": "Wasquehal",
    "codePostal": 59290,
    "codeInsee": 59646
  },
  {
    "departement": 91,
    "slug": "saint-michel-sur-orge",
    "name": "Saint-Michel-sur-Orge",
    "codePostal": 91240,
    "codeInsee": 91570
  },
  {
    "departement": 92,
    "slug": "bourg-la-reine",
    "name": "Bourg-la-Reine",
    "codePostal": 92340,
    "codeInsee": 92014
  },
  {
    "departement": 74,
    "slug": "annecy-le-vieux",
    "name": "Annecy-le-Vieux",
    "codePostal": 74940,
    "codeInsee": 74011
  },
  {
    "departement": 94,
    "slug": "limeil-brevannes",
    "name": "Limeil-Brévannes",
    "codePostal": 94450,
    "codeInsee": 94044
  },
  {
    "departement": 38,
    "slug": "voiron",
    "name": "Voiron",
    "codePostal": 38500,
    "codeInsee": 38563
  },
  {
    "departement": 33,
    "slug": "lormont",
    "name": "Lormont",
    "codePostal": 33310,
    "codeInsee": 33249
  },
  {
    "departement": 35,
    "slug": "fougeres",
    "name": "Fougères",
    "codePostal": 35300,
    "codeInsee": 35115
  },
  {
    "departement": 94,
    "slug": "arcueil",
    "name": "Arcueil",
    "codePostal": 94110,
    "codeInsee": 94003
  },
  {
    "departement": 54,
    "slug": "luneville",
    "name": "Lunéville",
    "codePostal": 54300,
    "codeInsee": 54329
  },
  {
    "departement": 92,
    "slug": "sceaux-92",
    "name": "Sceaux",
    "codePostal": 92330,
    "codeInsee": 92071
  },
  {
    "departement": 78,
    "slug": "acheres-78",
    "name": "Achères",
    "codePostal": 78260,
    "codeInsee": 78005
  },
  {
    "departement": 3,
    "slug": "moulins-03",
    "name": "Moulins",
    "codePostal": 3000,
    "codeInsee": 3190
  },
  {
    "departement": 45,
    "slug": "olivet-45",
    "name": "Olivet",
    "codePostal": 45160,
    "codeInsee": 45232
  },
  {
    "departement": 33,
    "slug": "eysines",
    "name": "Eysines",
    "codePostal": 33320,
    "codeInsee": 33162
  },
  {
    "departement": 13,
    "slug": "allauch",
    "name": "Allauch",
    "codePostal": 13190,
    "codeInsee": 13002
  },
  {
    "departement": 69,
    "slug": "tassin-la-demi-lune",
    "name": "Tassin-la-Demi-Lune",
    "codePostal": 69160,
    "codeInsee": 69244
  },
  {
    "departement": 13,
    "slug": "pennes-mirabeau",
    "name": "Pennes-Mirabeau",
    "codePostal": 13170,
    "codeInsee": 13071
  },
  {
    "departement": 71,
    "slug": "montceau-les-mines",
    "name": "Montceau-les-Mines",
    "codePostal": 71300,
    "codeInsee": 71306
  },
  {
    "departement": 76,
    "slug": "mont-saint-aignan",
    "name": "Mont-Saint-Aignan",
    "codePostal": 76130,
    "codeInsee": 76451
  },
  {
    "departement": 971,
    "slug": "capesterre-belle-eau",
    "name": "Capesterre-Belle-Eau",
    "codePostal": 97130,
    "codeInsee": 97107
  },
  {
    "departement": 33,
    "slug": "gujan-mestras",
    "name": "Gujan-Mestras",
    "codePostal": 33470,
    "codeInsee": 33199
  },
  {
    "departement": 6,
    "slug": "vence",
    "name": "Vence",
    "codePostal": 6140,
    "codeInsee": 6157
  },
  {
    "departement": 973,
    "slug": "remire-montjoly",
    "name": "Remire-Montjoly",
    "codePostal": 97354,
    "codeInsee": 97309
  },
  {
    "departement": 63,
    "slug": "cournon-d-auvergne",
    "name": "Cournon-d'Auvergne",
    "codePostal": 63800,
    "codeInsee": 63124
  },
  {
    "departement": 78,
    "slug": "mantes-la-ville",
    "name": "Mantes-la-Ville",
    "codePostal": 78200,
    "codeInsee": 78362
  },
  {
    "departement": 972,
    "slug": "le-francois",
    "name": "François",
    "codePostal": 97240,
    "codeInsee": 97210
  },
  {
    "departement": 76,
    "slug": "fecamp",
    "name": "Fécamp",
    "codePostal": 76400,
    "codeInsee": 76259
  },
  {
    "departement": 67,
    "slug": "selestat",
    "name": "Sélestat",
    "codePostal": 67600,
    "codeInsee": 67462
  },
  {
    "departement": 94,
    "slug": "plessis-trevise",
    "name": "Le Plessis-Trévise",
    "codePostal": 94420,
    "codeInsee": 94059
  },
  {
    "departement": 69,
    "slug": "givors",
    "name": "Givors",
    "codePostal": 69700,
    "codeInsee": 69091
  },
  {
    "departement": 45,
    "slug": "saint-jean-de-braye",
    "name": "Saint-Jean-de-Braye",
    "codePostal": 45800,
    "codeInsee": 45284
  },
  {
    "departement": 29,
    "slug": "concarneau",
    "name": "Concarneau",
    "codePostal": 29900,
    "codeInsee": 29039
  },
  {
    "departement": 84,
    "slug": "isle-sur-la-sorgue",
    "name": "L'Isle-sur-la-Sorgue",
    "codePostal": 84800,
    "codeInsee": 84054
  },
  {
    "departement": 95,
    "slug": "montigny-les-cormeilles",
    "name": "Montigny-lès-Cormeilles",
    "codePostal": 95370,
    "codeInsee": 95424
  },
  {
    "departement": 84,
    "slug": "pertuis-84",
    "name": "Pertuis",
    "codePostal": 84120,
    "codeInsee": 84089
  },
  {
    "departement": 6,
    "slug": "mougins",
    "name": "Mougins",
    "codePostal": 6250,
    "codeInsee": 6085
  },
  {
    "departement": 73,
    "slug": "albertville",
    "name": "Albertville",
    "codePostal": 73200,
    "codeInsee": 73011
  },
  {
    "departement": 74,
    "slug": "seynod",
    "name": "Seynod",
    "codePostal": 74600,
    "codeInsee": 74268
  },
  {
    "departement": 60,
    "slug": "nogent-sur-oise",
    "name": "Nogent-sur-Oise",
    "codePostal": 60180,
    "codeInsee": 60463
  },
  {
    "departement": 50,
    "slug": "saint-lo",
    "name": "Saint-Lô",
    "codePostal": 50000,
    "codeInsee": 50502
  },
  {
    "departement": 85,
    "slug": "challans",
    "name": "Challans",
    "codePostal": 85300,
    "codeInsee": 85047
  },
  {
    "departement": 78,
    "slug": "maurepas-78",
    "name": "Maurepas",
    "codePostal": 78310,
    "codeInsee": 78383
  },
  {
    "departement": 92,
    "slug": "chaville",
    "name": "Chaville",
    "codePostal": 92370,
    "codeInsee": 92022
  },
  {
    "departement": 26,
    "slug": "bourg-les-valence",
    "name": "Bourg-lès-Valence",
    "codePostal": 26500,
    "codeInsee": 26058
  },
  {
    "departement": 79,
    "slug": "bressuire",
    "name": "Bressuire",
    "codePostal": 79300,
    "codeInsee": 79049
  },
  {
    "departement": 44,
    "slug": "coueron",
    "name": "Couëron",
    "codePostal": 44220,
    "codeInsee": 44047
  },
  {
    "departement": 8,
    "slug": "sedan",
    "name": "Sedan",
    "codePostal": 8200,
    "codeInsee": 8409
  },
  {
    "departement": 16,
    "slug": "cognac",
    "name": "Cognac",
    "codePostal": 16100,
    "codeInsee": 16102
  },
  {
    "departement": 43,
    "slug": "puy-en-velay",
    "name": "Le Puy-en-Velay",
    "codePostal": 43000,
    "codeInsee": 43157
  },
  {
    "departement": 55,
    "slug": "verdun-55",
    "name": "Verdun",
    "codePostal": 55100,
    "codeInsee": 55545
  },
  {
    "departement": 77,
    "slug": "mitry-mory",
    "name": "Mitry-Mory",
    "codePostal": 77290,
    "codeInsee": 77294
  },
  {
    "departement": 94,
    "slug": "chevilly-larue",
    "name": "Chevilly-Larue",
    "codePostal": 94550,
    "codeInsee": 94021
  },
  {
    "departement": 91,
    "slug": "chilly-mazarin",
    "name": "Chilly-Mazarin",
    "codePostal": 91380,
    "codeInsee": 91161
  },
  {
    "departement": 94,
    "slug": "villeneuve-le-roi",
    "name": "Villeneuve-le-Roi",
    "codePostal": 94290,
    "codeInsee": 94077
  },
  {
    "departement": 25,
    "slug": "pontarlier",
    "name": "Pontarlier",
    "codePostal": 25300,
    "codeInsee": 25462
  },
  {
    "departement": 47,
    "slug": "marmande",
    "name": "Marmande",
    "codePostal": 47200,
    "codeInsee": 47157
  },
  {
    "departement": 972,
    "slug": "sainte-marie-972",
    "name": "Sainte-Marie",
    "codePostal": 97230,
    "codeInsee": 97228
  },
  {
    "departement": 38,
    "slug": "villefontaine",
    "name": "Villefontaine",
    "codePostal": 38090,
    "codeInsee": 38553
  },
  {
    "departement": 30,
    "slug": "bagnols-sur-ceze",
    "name": "Bagnols-sur-Cèze",
    "codePostal": 30200,
    "codeInsee": 30028
  },
  {
    "departement": 44,
    "slug": "bouguenais",
    "name": "Bouguenais",
    "codePostal": 44340,
    "codeInsee": 44020
  },
  {
    "departement": 92,
    "slug": "garches",
    "name": "Garches",
    "codePostal": 92380,
    "codeInsee": 92033
  },
  {
    "departement": 59,
    "slug": "ronchin",
    "name": "Ronchin",
    "codePostal": 59790,
    "codeInsee": 59507
  },
  {
    "departement": 94,
    "slug": "chennevieres-sur-marne",
    "name": "Chennevières-sur-Marne",
    "codePostal": 94430,
    "codeInsee": 94019
  },
  {
    "departement": 84,
    "slug": "sorgues",
    "name": "Sorgues",
    "codePostal": 84700,
    "codeInsee": 84129
  },
  {
    "departement": 93,
    "slug": "pre-saint-gervais",
    "name": "Le Pré-Saint-Gervais",
    "codePostal": 93310,
    "codeInsee": 93061
  },
  {
    "departement": 69,
    "slug": "ecully",
    "name": "Écully",
    "codePostal": 69130,
    "codeInsee": 69081
  },
  {
    "departement": 17,
    "slug": "royan",
    "name": "Royan",
    "codePostal": 17200,
    "codeInsee": 17306
  },
  {
    "departement": 63,
    "slug": "riom",
    "name": "Riom",
    "codePostal": 63200,
    "codeInsee": 63300
  },
  {
    "departement": 44,
    "slug": "carquefou",
    "name": "Carquefou",
    "codePostal": 44470,
    "codeInsee": 44026
  },
  {
    "departement": 56,
    "slug": "ploemeur",
    "name": "Ploemeur",
    "codePostal": 56270,
    "codeInsee": 56162
  },
  {
    "departement": 94,
    "slug": "joinville-le-pont",
    "name": "Joinville-le-Pont",
    "codePostal": 94340,
    "codeInsee": 94042
  },
  {
    "departement": 67,
    "slug": "bischheim",
    "name": "Bischheim",
    "codePostal": 67800,
    "codeInsee": 67043
  },
  {
    "departement": 27,
    "slug": "louviers",
    "name": "Louviers",
    "codePostal": 27400,
    "codeInsee": 27375
  },
  {
    "departement": 39,
    "slug": "lons-le-saunier",
    "name": "Lons-le-Saunier",
    "codePostal": 39570,
    "codeInsee": 39300
  },
  {
    "departement": 78,
    "slug": "clayes-sous-bois",
    "name": "Clayes-sous-Bois",
    "codePostal": 78340,
    "codeInsee": 78165
  },
  {
    "departement": 38,
    "slug": "meylan",
    "name": "Meylan",
    "codePostal": 38240,
    "codeInsee": 38229
  },
  {
    "departement": 95,
    "slug": "soisy-sous-montmorency",
    "name": "Soisy-sous-Montmorency",
    "codePostal": 95230,
    "codeInsee": 95598
  },
  {
    "departement": 74,
    "slug": "cluses-74",
    "name": "Cluses",
    "codePostal": 74300,
    "codeInsee": 74081
  },
  {
    "departement": 59,
    "slug": "faches-thumesnil",
    "name": "Faches-Thumesnil",
    "codePostal": 59155,
    "codeInsee": 59220
  },
  {
    "departement": 78,
    "slug": "saint-cyr-l-ecole",
    "name": "Saint-Cyr-l'École",
    "codePostal": 78210,
    "codeInsee": 78545
  },
  {
    "departement": 59,
    "slug": "hem",
    "name": "Hem",
    "codePostal": 59510,
    "codeInsee": 59299
  },
  {
    "departement": 50,
    "slug": "equeurdreville-hainneville",
    "name": "Équeurdreville-Hainneville",
    "codePostal": 50120,
    "codeInsee": 50173
  },
  {
    "departement": 44,
    "slug": "chapelle-sur-erdre",
    "name": "La Chapelle-sur-Erdre",
    "codePostal": 44240,
    "codeInsee": 44035
  },
  {
    "departement": 77,
    "slug": "moissy-cramayel",
    "name": "Moissy-Cramayel",
    "codePostal": 77550,
    "codeInsee": 77296
  },
  {
    "departement": 62,
    "slug": "avion",
    "name": "Avion",
    "codePostal": 62210,
    "codeInsee": 62065
  },
  {
    "departement": 74,
    "slug": "cran-gevrier",
    "name": "Cran-Gevrier",
    "codePostal": 74960,
    "codeInsee": 74093
  },
  {
    "departement": 13,
    "slug": "port-de-bouc",
    "name": "Port-de-Bouc",
    "codePostal": 13110,
    "codeInsee": 13077
  },
  {
    "departement": 76,
    "slug": "elbeuf",
    "name": "Elbeuf",
    "codePostal": 76500,
    "codeInsee": 76231
  },
  {
    "departement": 62,
    "slug": "carvin",
    "name": "Carvin",
    "codePostal": 62220,
    "codeInsee": 62215
  },
  {
    "departement": 42,
    "slug": "firminy",
    "name": "Firminy",
    "codePostal": 42700,
    "codeInsee": 42095
  },
  {
    "departement": 94,
    "slug": "gentilly",
    "name": "Gentilly",
    "codePostal": 94250,
    "codeInsee": 94037
  },
  {
    "departement": 63,
    "slug": "chamalieres",
    "name": "Chamalières",
    "codePostal": 63400,
    "codeInsee": 63075
  },
  {
    "departement": 41,
    "slug": "romorantin-lanthenay",
    "name": "Romorantin-Lanthenay",
    "codePostal": 41200,
    "codeInsee": 41194
  },
  {
    "departement": 4,
    "slug": "digne-les-bains",
    "name": "Digne-les-Bains",
    "codePostal": 4000,
    "codeInsee": 4070
  },
  {
    "departement": 41,
    "slug": "vendome",
    "name": "Vendôme",
    "codePostal": 41100,
    "codeInsee": 41269
  },
  {
    "departement": 972,
    "slug": "ducos",
    "name": "Ducos",
    "codePostal": 97224,
    "codeInsee": 97207
  },
  {
    "departement": 95,
    "slug": "eragny",
    "name": "Éragny",
    "codePostal": 95610,
    "codeInsee": 95218
  },
  {
    "departement": 35,
    "slug": "vitre-35",
    "name": "Vitré",
    "codePostal": 35500,
    "codeInsee": 35360
  },
  {
    "departement": 83,
    "slug": "crau",
    "name": "La Crau",
    "codePostal": 83260,
    "codeInsee": 83047
  },
  {
    "departement": 84,
    "slug": "pontet-84",
    "name": "Le Pontet",
    "codePostal": 84130,
    "codeInsee": 84092
  },
  {
    "departement": 971,
    "slug": "morne-a-l-eau",
    "name": "Morne-à-l'Eau",
    "codePostal": 97111,
    "codeInsee": 97116
  },
  {
    "departement": 972,
    "slug": "saint-joseph-972",
    "name": "Saint-Joseph",
    "codePostal": 97212,
    "codeInsee": 97224
  },
  {
    "departement": 94,
    "slug": "boissy-saint-leger",
    "name": "Boissy-Saint-Léger",
    "codePostal": 94470,
    "codeInsee": 94004
  },
  {
    "departement": 59,
    "slug": "saint-amand-les-eaux",
    "name": "Saint-Amand-les-Eaux",
    "codePostal": 59230,
    "codeInsee": 59526
  },
  {
    "departement": 77,
    "slug": "montereau-fault-yonne",
    "name": "Montereau-Fault-Yonne",
    "codePostal": 77130,
    "codeInsee": 77305
  },
  {
    "departement": 69,
    "slug": "saint-fons",
    "name": "Saint-Fons",
    "codePostal": 69190,
    "codeInsee": 69199
  },
  {
    "departement": 7,
    "slug": "annonay",
    "name": "Annonay",
    "codePostal": 7100,
    "codeInsee": 7010
  },
  {
    "departement": 45,
    "slug": "saint-jean-de-la-ruelle",
    "name": "Saint-Jean-de-la-Ruelle",
    "codePostal": 45140,
    "codeInsee": 45285
  },
  {
    "departement": 78,
    "slug": "marly-le-roi",
    "name": "Marly-le-Roi",
    "codePostal": 78160,
    "codeInsee": 78372
  },
  {
    "departement": 76,
    "slug": "montivilliers",
    "name": "Montivilliers",
    "codePostal": 76290,
    "codeInsee": 76447
  },
  {
    "departement": 95,
    "slug": "jouy-le-moutier",
    "name": "Jouy-le-Moutier",
    "codePostal": 95280,
    "codeInsee": 95323
  },
  {
    "departement": 94,
    "slug": "bonneuil-sur-marne",
    "name": "Bonneuil-sur-Marne",
    "codePostal": 94380,
    "codeInsee": 94011
  },
  {
    "departement": 78,
    "slug": "pecq",
    "name": "Le Pecq",
    "codePostal": 78230,
    "codeInsee": 78481
  },
  {
    "departement": 35,
    "slug": "bruz",
    "name": "Bruz",
    "codePostal": 35170,
    "codeInsee": 35047
  },
  {
    "departement": 67,
    "slug": "lingolsheim",
    "name": "Lingolsheim",
    "codePostal": 67380,
    "codeInsee": 67267
  },
  {
    "departement": 83,
    "slug": "sanary-sur-mer",
    "name": "Sanary-sur-Mer",
    "codePostal": 83110,
    "codeInsee": 83123
  },
  {
    "departement": 971,
    "slug": "pointe-a-pitre",
    "name": "Pointe-à-Pitre",
    "codePostal": 97110,
    "codeInsee": 97120
  },
  {
    "departement": 83,
    "slug": "brignoles",
    "name": "Brignoles",
    "codePostal": 83170,
    "codeInsee": 83023
  },
  {
    "departement": 33,
    "slug": "cestas",
    "name": "Cestas",
    "codePostal": 33610,
    "codeInsee": 33122
  },
  {
    "departement": 34,
    "slug": "mauguio",
    "name": "Mauguio",
    "codePostal": 34130,
    "codeInsee": 34154
  },
  {
    "departement": 78,
    "slug": "limay",
    "name": "Limay",
    "codePostal": 78520,
    "codeInsee": 78335
  },
  {
    "departement": 57,
    "slug": "saint-avold",
    "name": "Saint-Avold",
    "codePostal": 57500,
    "codeInsee": 57606
  },
  {
    "departement": 59,
    "slug": "sin-le-noble",
    "name": "Sin-le-Noble",
    "codePostal": 59450,
    "codeInsee": 59569
  },
  {
    "departement": 77,
    "slug": "brie-comte-robert",
    "name": "Brie-Comte-Robert",
    "codePostal": 77170,
    "codeInsee": 77053
  },
  {
    "departement": 78,
    "slug": "vesinet",
    "name": "Le Vésinet",
    "codePostal": 78110,
    "codeInsee": 78650
  },
  {
    "departement": 95,
    "slug": "osny",
    "name": "Osny",
    "codePostal": 95520,
    "codeInsee": 95476
  },
  {
    "departement": 33,
    "slug": "floirac-33",
    "name": "Floirac",
    "codePostal": 33270,
    "codeInsee": 33167
  },
  {
    "departement": 95,
    "slug": "vaureal",
    "name": "Vauréal",
    "codePostal": 95490,
    "codeInsee": 95637
  },
  {
    "departement": 57,
    "slug": "yutz",
    "name": "Yutz",
    "codePostal": 57970,
    "codeInsee": 57757
  },
  {
    "departement": 60,
    "slug": "senlis-60",
    "name": "Senlis",
    "codePostal": 60300,
    "codeInsee": 60612
  },
  {
    "departement": 31,
    "slug": "plaisance-du-touch",
    "name": "Plaisance-du-Touch",
    "codePostal": 31830,
    "codeInsee": 31424
  },
  {
    "departement": 37,
    "slug": "saint-cyr-sur-loire",
    "name": "Saint-Cyr-sur-Loire",
    "codePostal": 37540,
    "codeInsee": 37214
  },
  {
    "departement": 44,
    "slug": "baule-escoublac",
    "name": "La Baule-Escoublac",
    "codePostal": 44500,
    "codeInsee": 44055
  },
  {
    "departement": 38,
    "slug": "saint-egreve",
    "name": "Saint-Égrève",
    "codePostal": 38120,
    "codeInsee": 38382
  },
  {
    "departement": 91,
    "slug": "orsay",
    "name": "Orsay",
    "codePostal": 91400,
    "codeInsee": 91471
  },
  {
    "departement": 30,
    "slug": "beaucaire-30",
    "name": "Beaucaire",
    "codePostal": 30300,
    "codeInsee": 30032
  },
  {
    "departement": 34,
    "slug": "lattes",
    "name": "Lattes",
    "codePostal": 34970,
    "codeInsee": 34129
  },
  {
    "departement": 28,
    "slug": "luce-28",
    "name": "Lucé",
    "codePostal": 28110,
    "codeInsee": 28218
  },
  {
    "departement": 971,
    "slug": "lamentin",
    "name": "Lamentin",
    "codePostal": 97129,
    "codeInsee": 97115
  },
  {
    "departement": 50,
    "slug": "tourlaville",
    "name": "Tourlaville",
    "codePostal": 50110,
    "codeInsee": 50602
  },
  {
    "departement": 78,
    "slug": "viroflay",
    "name": "Viroflay",
    "codePostal": 78220,
    "codeInsee": 78686
  },
  {
    "departement": 55,
    "slug": "bar-le-duc",
    "name": "Bar-le-Duc",
    "codePostal": 55000,
    "codeInsee": 55029
  },
  {
    "departement": 31,
    "slug": "cugnaux",
    "name": "Cugnaux",
    "codePostal": 31270,
    "codeInsee": 31157
  },
  {
    "departement": 70,
    "slug": "vesoul",
    "name": "Vesoul",
    "codePostal": 70000,
    "codeInsee": 70550
  },
  {
    "departement": 54,
    "slug": "toul",
    "name": "Toul",
    "codePostal": 54200,
    "codeInsee": 54528
  },
  {
    "departement": 77,
    "slug": "noisiel",
    "name": "Noisiel",
    "codePostal": 77186,
    "codeInsee": 77337
  },
  {
    "departement": 94,
    "slug": "bry-sur-marne",
    "name": "Bry-sur-Marne",
    "codePostal": 94360,
    "codeInsee": 94015
  },
  {
    "departement": 57,
    "slug": "hayange",
    "name": "Hayange",
    "codePostal": 57700,
    "codeInsee": 57306
  },
  {
    "departement": 38,
    "slug": "isle-d-abeau",
    "name": "L'Isle-d'Abeau",
    "codePostal": 38080,
    "codeInsee": 38193
  },
  {
    "departement": 44,
    "slug": "guerande",
    "name": "Guérande",
    "codePostal": 44350,
    "codeInsee": 44069
  },
  {
    "departement": 74,
    "slug": "sallanches",
    "name": "Sallanches",
    "codePostal": 74700,
    "codeInsee": 74256
  },
  {
    "departement": 78,
    "slug": "carrieres-sur-seine",
    "name": "Carrières-sur-Seine",
    "codePostal": 78420,
    "codeInsee": 78124
  },
  {
    "departement": 29,
    "slug": "morlaix",
    "name": "Morlaix",
    "codePostal": 29600,
    "codeInsee": 29151
  },
  {
    "departement": 91,
    "slug": "verrieres-le-buisson",
    "name": "Verrières-le-Buisson",
    "codePostal": 91370,
    "codeInsee": 91645
  },
  {
    "departement": 9,
    "slug": "pamiers",
    "name": "Pamiers",
    "codePostal": 9100,
    "codeInsee": 9225
  },
  {
    "departement": 64,
    "slug": "hendaye",
    "name": "Hendaye",
    "codePostal": 64700,
    "codeInsee": 64260
  },
  {
    "departement": 62,
    "slug": "berck",
    "name": "Berck",
    "codePostal": 62600,
    "codeInsee": 62108
  },
  {
    "departement": 13,
    "slug": "fos-sur-mer",
    "name": "Fos-sur-Mer",
    "codePostal": 13270,
    "codeInsee": 13039
  },
  {
    "departement": 61,
    "slug": "flers-61",
    "name": "Flers",
    "codePostal": 61100,
    "codeInsee": 61169
  },
  {
    "departement": 42,
    "slug": "montbrison",
    "name": "Montbrison",
    "codePostal": 42600,
    "codeInsee": 42147
  },
  {
    "departement": 29,
    "slug": "landerneau",
    "name": "Landerneau",
    "codePostal": 29800,
    "codeInsee": 29103
  },
  {
    "departement": 78,
    "slug": "carrieres-sous-poissy",
    "name": "Carrières-sous-Poissy",
    "codePostal": 78955,
    "codeInsee": 78123
  },
  {
    "departement": 85,
    "slug": "herbiers",
    "name": "Herbiers",
    "codePostal": 85500,
    "codeInsee": 85109
  },
  {
    "departement": 37,
    "slug": "saint-pierre-des-corps",
    "name": "Saint-Pierre-des-Corps",
    "codePostal": 37700,
    "codeInsee": 37233
  },
  {
    "departement": 35,
    "slug": "cesson-sevigne",
    "name": "Cesson-Sévigné",
    "codePostal": 35510,
    "codeInsee": 35051
  },
  {
    "departement": 78,
    "slug": "montesson",
    "name": "Montesson",
    "codePostal": 78360,
    "codeInsee": 78418
  },
  {
    "departement": 56,
    "slug": "hennebont",
    "name": "Hennebont",
    "codePostal": 56700,
    "codeInsee": 56083
  },
  {
    "departement": 78,
    "slug": "verneuil-sur-seine",
    "name": "Verneuil-sur-Seine",
    "codePostal": 78480,
    "codeInsee": 78642
  },
  {
    "departement": 45,
    "slug": "saran",
    "name": "Saran",
    "codePostal": 45770,
    "codeInsee": 45302
  },
  {
    "departement": 77,
    "slug": "fontainebleau",
    "name": "Fontainebleau",
    "codePostal": 77300,
    "codeInsee": 77186
  },
  {
    "departement": 72,
    "slug": "fleche",
    "name": "La Flèche",
    "codePostal": 72200,
    "codeInsee": 72154
  },
  {
    "departement": 6,
    "slug": "villeneuve-loubet",
    "name": "Villeneuve-Loubet",
    "codePostal": 6270,
    "codeInsee": 6161
  },
  {
    "departement": 42,
    "slug": "rive-de-gier",
    "name": "Rive-de-Gier",
    "codePostal": 42800,
    "codeInsee": 42186
  },
  {
    "departement": 34,
    "slug": "castelnau-le-lez",
    "name": "Castelnau-le-Lez",
    "codePostal": 34170,
    "codeInsee": 34057
  },
  {
    "departement": 13,
    "slug": "chateaurenard",
    "name": "Châteaurenard",
    "codePostal": 13160,
    "codeInsee": 13027
  },
  {
    "departement": 19,
    "slug": "tulle",
    "name": "Tulle",
    "codePostal": 19000,
    "codeInsee": 19272
  },
  {
    "departement": 29,
    "slug": "douarnenez",
    "name": "Douarnenez",
    "codePostal": 29100,
    "codeInsee": 29046
  },
  {
    "departement": 33,
    "slug": "bruges",
    "name": "Bruges",
    "codePostal": 33520,
    "codeInsee": 33075
  },
  {
    "departement": 93,
    "slug": "bourget",
    "name": "Le Bourget",
    "codePostal": 93350,
    "codeInsee": 93013
  },
  {
    "departement": 95,
    "slug": "domont",
    "name": "Domont",
    "codePostal": 95330,
    "codeInsee": 95199
  },
  {
    "departement": 25,
    "slug": "audincourt",
    "name": "Audincourt",
    "codePostal": 25400,
    "codeInsee": 25031
  },
  {
    "departement": 76,
    "slug": "canteleu",
    "name": "Canteleu",
    "codePostal": 76380,
    "codeInsee": 76157
  },
  {
    "departement": 54,
    "slug": "laxou",
    "name": "Laxou",
    "codePostal": 54520,
    "codeInsee": 54304
  },
  {
    "departement": 971,
    "slug": "saint-francois",
    "name": "Saint-François",
    "codePostal": 97118,
    "codeInsee": 97125
  },
  {
    "departement": 33,
    "slug": "blanquefort-33",
    "name": "Blanquefort",
    "codePostal": 33290,
    "codeInsee": 33056
  },
  {
    "departement": 95,
    "slug": "saint-leu-la-foret",
    "name": "Saint-Leu-la-Forêt",
    "codePostal": 95320,
    "codeInsee": 95563
  },
  {
    "departement": 65,
    "slug": "lourdes",
    "name": "Lourdes",
    "codePostal": 65100,
    "codeInsee": 65286
  },
  {
    "departement": 45,
    "slug": "gien",
    "name": "Gien",
    "codePostal": 45500,
    "codeInsee": 45155
  },
  {
    "departement": 45,
    "slug": "montargis",
    "name": "Montargis",
    "codePostal": 45200,
    "codeInsee": 45208
  },
  {
    "departement": 91,
    "slug": "juvisy-sur-orge",
    "name": "Juvisy-sur-Orge",
    "codePostal": 91260,
    "codeInsee": 91326
  },
  {
    "departement": 85,
    "slug": "sables-d-olonne",
    "name": "Sables-d'Olonne",
    "codePostal": 85180,
    "codeInsee": 85194
  },
  {
    "departement": 68,
    "slug": "illzach",
    "name": "Illzach",
    "codePostal": 68110,
    "codeInsee": 68154
  },
  {
    "departement": 77,
    "slug": "lognes",
    "name": "Lognes",
    "codePostal": 77185,
    "codeInsee": 77258
  },
  {
    "departement": 77,
    "slug": "coulommiers",
    "name": "Coulommiers",
    "codePostal": 77120,
    "codeInsee": 77131
  },
  {
    "departement": 62,
    "slug": "outreau",
    "name": "Outreau",
    "codePostal": 62230,
    "codeInsee": 62643
  },
  {
    "departement": 94,
    "slug": "saint-maurice-94",
    "name": "Saint-Maurice",
    "codePostal": 94410,
    "codeInsee": 94069
  },
  {
    "departement": 62,
    "slug": "saint-omer-62",
    "name": "Saint-Omer",
    "codePostal": 62500,
    "codeInsee": 62765
  },
  {
    "departement": 54,
    "slug": "pont-a-mousson",
    "name": "Pont-à-Mousson",
    "codePostal": 54700,
    "codeInsee": 54431
  },
  {
    "departement": 83,
    "slug": "saint-maximin-la-sainte-baume",
    "name": "Saint-Maximin-la-Sainte-Baume",
    "codePostal": 83470,
    "codeInsee": 83116
  },
  {
    "departement": 2,
    "slug": "chateau-thierry",
    "name": "Château-Thierry",
    "codePostal": 2400,
    "codeInsee": 2168
  },
  {
    "departement": 59,
    "slug": "bailleul-59",
    "name": "Bailleul",
    "codePostal": 59270,
    "codeInsee": 59043
  },
  {
    "departement": 59,
    "slug": "haubourdin",
    "name": "Haubourdin",
    "codePostal": 59320,
    "codeInsee": 59286
  },
  {
    "departement": 54,
    "slug": "longwy",
    "name": "Longwy",
    "codePostal": 54400,
    "codeInsee": 54323
  },
  {
    "departement": 59,
    "slug": "caudry",
    "name": "Caudry",
    "codePostal": 59540,
    "codeInsee": 59139
  },
  {
    "departement": 61,
    "slug": "argentan",
    "name": "Argentan",
    "codePostal": 61200,
    "codeInsee": 61006
  },
  {
    "departement": 54,
    "slug": "villers-les-nancy",
    "name": "Villers-lès-Nancy",
    "codePostal": 54600,
    "codeInsee": 54578
  },
  {
    "departement": 85,
    "slug": "fontenay-le-comte",
    "name": "Fontenay-le-Comte",
    "codePostal": 85200,
    "codeInsee": 85092
  },
  {
    "departement": 95,
    "slug": "saint-brice-sous-foret",
    "name": "Saint-Brice-sous-Forêt",
    "codePostal": 95350,
    "codeInsee": 95539
  },
  {
    "departement": 976,
    "slug": "dzaoudzi",
    "name": "Dzaoudzi",
    "codePostal": 97610,
    "codeInsee": 97608
  },
  {
    "departement": 71,
    "slug": "autun",
    "name": "Autun",
    "codePostal": 71400,
    "codeInsee": 71014
  },
  {
    "departement": 95,
    "slug": "montmagny",
    "name": "Montmagny",
    "codePostal": 95360,
    "codeInsee": 95427
  },
  {
    "departement": 59,
    "slug": "hautmont",
    "name": "Hautmont",
    "codePostal": 59330,
    "codeInsee": 59291
  },
  {
    "departement": 68,
    "slug": "wittenheim",
    "name": "Wittenheim",
    "codePostal": 68270,
    "codeInsee": 68376
  },
  {
    "departement": 42,
    "slug": "saint-just-saint-rambert",
    "name": "Saint-Just-Saint-Rambert",
    "codePostal": 42170,
    "codeInsee": 42279
  },
  {
    "departement": 2,
    "slug": "tergnier",
    "name": "Tergnier",
    "codePostal": 2700,
    "codeInsee": 2738
  },
  {
    "departement": 44,
    "slug": "pornic",
    "name": "Pornic",
    "codePostal": 44210,
    "codeInsee": 44131
  },
  {
    "departement": 60,
    "slug": "crepy-en-valois",
    "name": "Crépy-en-Valois",
    "codePostal": 60800,
    "codeInsee": 60176
  },
  {
    "departement": 21,
    "slug": "chenove",
    "name": "Chenôve",
    "codePostal": 21300,
    "codeInsee": 21166
  },
  {
    "departement": 63,
    "slug": "issoire",
    "name": "Issoire",
    "codePostal": 63500,
    "codeInsee": 63178
  },
  {
    "departement": 77,
    "slug": "avon-77",
    "name": "Avon",
    "codePostal": 77210,
    "codeInsee": 77014
  },
  {
    "departement": 37,
    "slug": "saint-avertin",
    "name": "Saint-Avertin",
    "codePostal": 37550,
    "codeInsee": 37208
  },
  {
    "departement": 84,
    "slug": "bollene",
    "name": "Bollène",
    "codePostal": 84500,
    "codeInsee": 84019
  },
  {
    "departement": 1,
    "slug": "amberieu-en-bugey",
    "name": "Ambérieu-en-Bugey",
    "codePostal": 1500,
    "codeInsee": 1004
  },
  {
    "departement": 93,
    "slug": "raincy",
    "name": "Le Raincy",
    "codePostal": 93340,
    "codeInsee": 93062
  },
  {
    "departement": 91,
    "slug": "courcouronnes",
    "name": "Courcouronnes",
    "codePostal": 91080,
    "codeInsee": 91182
  },
  {
    "departement": 22,
    "slug": "plerin",
    "name": "Plérin",
    "codePostal": 22190,
    "codeInsee": 22187
  },
  {
    "departement": 56,
    "slug": "pontivy",
    "name": "Pontivy",
    "codePostal": 56300,
    "codeInsee": 56178
  },
  {
    "departement": 972,
    "slug": "la-trinite",
    "name": "Trinité",
    "codePostal": 97220,
    "codeInsee": 97230
  },
  {
    "departement": 78,
    "slug": "bois-d-arcy-78",
    "name": "Bois-d'Arcy",
    "codePostal": 78390,
    "codeInsee": 78073
  },
  {
    "departement": 13,
    "slug": "bouc-bel-air",
    "name": "Bouc-Bel-Air",
    "codePostal": 13320,
    "codeInsee": 13015
  },
  {
    "departement": 28,
    "slug": "chateaudun",
    "name": "Châteaudun",
    "codePostal": 28200,
    "codeInsee": 28088
  },
  {
    "departement": 85,
    "slug": "olonne-sur-mer",
    "name": "Olonne-sur-Mer",
    "codePostal": 85340,
    "codeInsee": 85166
  },
  {
    "departement": 13,
    "slug": "berre-l-etang",
    "name": "Berre-l'Étang",
    "codePostal": 13130,
    "codeInsee": 13014
  },
  {
    "departement": 23,
    "slug": "gueret",
    "name": "Guéret",
    "codePostal": 23000,
    "codeInsee": 23096
  },
  {
    "departement": 59,
    "slug": "mouvaux",
    "name": "Mouvaux",
    "codePostal": 59420,
    "codeInsee": 59421
  },
  {
    "departement": 30,
    "slug": "saint-gilles-30",
    "name": "Saint-Gilles",
    "codePostal": 30800,
    "codeInsee": 30258
  },
  {
    "departement": 95,
    "slug": "arnouville",
    "name": "Arnouville",
    "codePostal": 95400,
    "codeInsee": 95019
  },
  {
    "departement": 10,
    "slug": "romilly-sur-seine",
    "name": "Romilly-sur-Seine",
    "codePostal": 10100,
    "codeInsee": 10323
  },
  {
    "departement": 6,
    "slug": "beausoleil",
    "name": "Beausoleil",
    "codePostal": 6240,
    "codeInsee": 6012
  },
  {
    "departement": 74,
    "slug": "rumilly-74",
    "name": "Rumilly",
    "codePostal": 74150,
    "codeInsee": 74225
  },
  {
    "departement": 57,
    "slug": "creutzwald",
    "name": "Creutzwald",
    "codePostal": 57150,
    "codeInsee": 57160
  },
  {
    "departement": 60,
    "slug": "noyon",
    "name": "Noyon",
    "codePostal": 60400,
    "codeInsee": 60471
  },
  {
    "departement": 31,
    "slug": "balma",
    "name": "Balma",
    "codePostal": 31130,
    "codeInsee": 31044
  },
  {
    "departement": 974,
    "slug": "l etang-sale",
    "name": "Étang-Salé",
    "codePostal": 97427,
    "codeInsee": 97404
  },
  {
    "departement": 59,
    "slug": "anzin",
    "name": "Anzin",
    "codePostal": 59410,
    "codeInsee": 59014
  },
  {
    "departement": 29,
    "slug": "guipavas",
    "name": "Guipavas",
    "codePostal": 29490,
    "codeInsee": 29075
  },
  {
    "departement": 91,
    "slug": "mennecy",
    "name": "Mennecy",
    "codePostal": 91540,
    "codeInsee": 91386
  },
  {
    "departement": 51,
    "slug": "vitry-le-francois",
    "name": "Vitry-le-François",
    "codePostal": 51300,
    "codeInsee": 51649
  },
  {
    "departement": 27,
    "slug": "val-de-reuil",
    "name": "Val-de-Reuil",
    "codePostal": 27100,
    "codeInsee": 27701
  },
  {
    "departement": 3,
    "slug": "cusset",
    "name": "Cusset",
    "codePostal": 3300,
    "codeInsee": 3095
  },
  {
    "departement": 85,
    "slug": "chateau-d-olonne",
    "name": "Château-d'Olonne",
    "codePostal": 85180,
    "codeInsee": 85060
  },
  {
    "departement": 53,
    "slug": "mayenne",
    "name": "Mayenne",
    "codePostal": 53100,
    "codeInsee": 53147
  },
  {
    "departement": 13,
    "slug": "tarascon",
    "name": "Tarascon",
    "codePostal": 13150,
    "codeInsee": 13108
  },
  {
    "departement": 66,
    "slug": "canet-en-roussillon",
    "name": "Canet-en-Roussillon",
    "codePostal": 66140,
    "codeInsee": 66037
  },
  {
    "departement": 81,
    "slug": "gaillac",
    "name": "Gaillac",
    "codePostal": 81600,
    "codeInsee": 81099
  },
  {
    "departement": 33,
    "slug": "ambares-et-lagrave",
    "name": "Ambarès-et-Lagrave",
    "codePostal": 33440,
    "codeInsee": 33003
  },
  {
    "departement": 60,
    "slug": "meru",
    "name": "Méru",
    "codePostal": 60110,
    "codeInsee": 60395
  },
  {
    "departement": 57,
    "slug": "freyming-merlebach",
    "name": "Freyming-Merlebach",
    "codePostal": 57800,
    "codeInsee": 57240
  },
  {
    "departement": 10,
    "slug": "chapelle-saint-luc",
    "name": "La Chapelle-Saint-Luc",
    "codePostal": 10600,
    "codeInsee": 10081
  },
  {
    "departement": 59,
    "slug": "wattignies",
    "name": "Wattignies",
    "codePostal": 59139,
    "codeInsee": 59648
  },
  {
    "departement": 14,
    "slug": "bayeux",
    "name": "Bayeux",
    "codePostal": 14400,
    "codeInsee": 14047
  },
  {
    "departement": 972,
    "slug": "riviere-pilote",
    "name": "Rivière-Pilote",
    "codePostal": 97211,
    "codeInsee": 97220
  },
  {
    "departement": 29,
    "slug": "plougastel-daoulas",
    "name": "Plougastel-Daoulas",
    "codePostal": 29470,
    "codeInsee": 29189
  },
  {
    "departement": 64,
    "slug": "billere",
    "name": "Billère",
    "codePostal": 64140,
    "codeInsee": 64129
  },
  {
    "departement": 36,
    "slug": "issoudun",
    "name": "Issoudun",
    "codePostal": 36100,
    "codeInsee": 36088
  },
  {
    "departement": 3,
    "slug": "yzeure",
    "name": "Yzeure",
    "codePostal": 3400,
    "codeInsee": 3321
  },
  {
    "departement": 45,
    "slug": "chalette-sur-loing",
    "name": "Châlette-sur-Loing",
    "codePostal": 45120,
    "codeInsee": 45068
  },
  {
    "departement": 57,
    "slug": "woippy",
    "name": "Woippy",
    "codePostal": 57140,
    "codeInsee": 57751
  },
  {
    "departement": 26,
    "slug": "pierrelatte",
    "name": "Pierrelatte",
    "codePostal": 26700,
    "codeInsee": 26235
  },
  {
    "departement": 68,
    "slug": "rixheim",
    "name": "Rixheim",
    "codePostal": 68170,
    "codeInsee": 68278
  },
  {
    "departement": 50,
    "slug": "granville",
    "name": "Granville",
    "codePostal": 50400,
    "codeInsee": 50218
  },
  {
    "departement": 64,
    "slug": "saint-jean-de-luz",
    "name": "Saint-Jean-de-Luz",
    "codePostal": 64500,
    "codeInsee": 64483
  },
  {
    "departement": 59,
    "slug": "lys-lez-lannoy",
    "name": "Lys-lez-Lannoy",
    "codePostal": 59390,
    "codeInsee": 59367
  },
  {
    "departement": 83,
    "slug": "sainte-maxime",
    "name": "Sainte-Maxime",
    "codePostal": 83120,
    "codeInsee": 83115
  },
  {
    "departement": 69,
    "slug": "francheville-69",
    "name": "Francheville",
    "codePostal": 69340,
    "codeInsee": 69089
  },
  {
    "departement": 42,
    "slug": "chambon-feugerolles",
    "name": "Le Chambon-Feugerolles",
    "codePostal": 42500,
    "codeInsee": 42044
  },
  {
    "departement": 59,
    "slug": "roncq",
    "name": "Roncq",
    "codePostal": 59223,
    "codeInsee": 59508
  },
  {
    "departement": 37,
    "slug": "amboise",
    "name": "Amboise",
    "codePostal": 37530,
    "codeInsee": 37003
  },
  {
    "departement": 83,
    "slug": "roquebrune-sur-argens",
    "name": "Roquebrune-sur-Argens",
    "codePostal": 83520,
    "codeInsee": 83107
  },
  {
    "departement": 68,
    "slug": "kingersheim",
    "name": "Kingersheim",
    "codePostal": 68260,
    "codeInsee": 68166
  },
  {
    "departement": 83,
    "slug": "ollioules",
    "name": "Ollioules",
    "codePostal": 83190,
    "codeInsee": 83090
  },
  {
    "departement": 82,
    "slug": "castelsarrasin",
    "name": "Castelsarrasin",
    "codePostal": 82100,
    "codeInsee": 82033
  },
  {
    "departement": 972,
    "slug": "riviere-salee",
    "name": "Rivière-Salée",
    "codePostal": 97215,
    "codeInsee": 97221
  },
  {
    "departement": 59,
    "slug": "raismes",
    "name": "Raismes",
    "codePostal": 59590,
    "codeInsee": 59491
  },
  {
    "departement": 77,
    "slug": "nemours",
    "name": "Nemours",
    "codePostal": 77140,
    "codeInsee": 77333
  },
  {
    "departement": 78,
    "slug": "fontenay-le-fleury",
    "name": "Fontenay-le-Fleury",
    "codePostal": 78330,
    "codeInsee": 78242
  },
  {
    "departement": 67,
    "slug": "bischwiller",
    "name": "Bischwiller",
    "codePostal": 67240,
    "codeInsee": 67046
  },
  {
    "departement": 59,
    "slug": "fourmies",
    "name": "Fourmies",
    "codePostal": 59610,
    "codeInsee": 59249
  },
  {
    "departement": 49,
    "slug": "avrille-49",
    "name": "Avrillé",
    "codePostal": 49240,
    "codeInsee": 49015
  },
  {
    "departement": 57,
    "slug": "fameck",
    "name": "Fameck",
    "codePostal": 57290,
    "codeInsee": 57206
  },
  {
    "departement": 93,
    "slug": "villetaneuse",
    "name": "Villetaneuse",
    "codePostal": 93430,
    "codeInsee": 93079
  },
  {
    "departement": 57,
    "slug": "sarrebourg",
    "name": "Sarrebourg",
    "codePostal": 57400,
    "codeInsee": 57630
  },
  {
    "departement": 6,
    "slug": "roquebrune-cap-martin",
    "name": "Roquebrune-Cap-Martin",
    "codePostal": 6190,
    "codeInsee": 6104
  },
  {
    "departement": 59,
    "slug": "somain",
    "name": "Somain",
    "codePostal": 59490,
    "codeInsee": 59574
  },
  {
    "departement": 60,
    "slug": "montataire",
    "name": "Montataire",
    "codePostal": 60160,
    "codeInsee": 60414
  },
  {
    "departement": 72,
    "slug": "sable-sur-sarthe",
    "name": "Sablé-sur-Sarthe",
    "codePostal": 72300,
    "codeInsee": 72264
  },
  {
    "departement": 77,
    "slug": "saint-fargeau-ponthierry",
    "name": "Saint-Fargeau-Ponthierry",
    "codePostal": 77310,
    "codeInsee": 77407
  },
  {
    "departement": 57,
    "slug": "stiring-wendel",
    "name": "Stiring-Wendel",
    "codePostal": 57350,
    "codeInsee": 57660
  },
  {
    "departement": 40,
    "slug": "saint-paul-les-dax",
    "name": "Saint-Paul-lès-Dax",
    "codePostal": 40990,
    "codeInsee": 40279
  },
  {
    "departement": 30,
    "slug": "villeneuve-les-avignon",
    "name": "Villeneuve-lès-Avignon",
    "codePostal": 30400,
    "codeInsee": 30351
  },
  {
    "departement": 49,
    "slug": "trelaze",
    "name": "Trélazé",
    "codePostal": 49800,
    "codeInsee": 49353
  },
  {
    "departement": 62,
    "slug": "harnes",
    "name": "Harnes",
    "codePostal": 62440,
    "codeInsee": 62413
  },
  {
    "departement": 59,
    "slug": "comines",
    "name": "Comines",
    "codePostal": 59560,
    "codeInsee": 59152
  },
  {
    "departement": 62,
    "slug": "bully-les-mines",
    "name": "Bully-les-Mines",
    "codePostal": 62160,
    "codeInsee": 62186
  },
  {
    "departement": 56,
    "slug": "auray",
    "name": "Auray",
    "codePostal": 56400,
    "codeInsee": 56007
  },
  {
    "departement": 68,
    "slug": "riedisheim",
    "name": "Riedisheim",
    "codePostal": 68400,
    "codeInsee": 68271
  },
  {
    "departement": 77,
    "slug": "provins",
    "name": "Provins",
    "codePostal": 77160,
    "codeInsee": 77379
  },
  {
    "departement": 59,
    "slug": "seclin",
    "name": "Seclin",
    "codePostal": 59113,
    "codeInsee": 59560
  },
  {
    "departement": 77,
    "slug": "vaires-sur-marne",
    "name": "Vaires-sur-Marne",
    "codePostal": 77360,
    "codeInsee": 77479
  },
  {
    "departement": 59,
    "slug": "bruay-sur-l-escaut",
    "name": "Bruay-sur-l'Escaut",
    "codePostal": 59860,
    "codeInsee": 59112
  },
  {
    "departement": 6,
    "slug": "valbonne",
    "name": "Valbonne",
    "codePostal": 6560,
    "codeInsee": 6152
  },
  {
    "departement": 44,
    "slug": "saint-brevin-les-pins",
    "name": "Saint-Brevin-les-Pins",
    "codePostal": 44250,
    "codeInsee": 44154
  },
  {
    "departement": 62,
    "slug": "noeux-les-mines",
    "name": "Nœux-les-Mines",
    "codePostal": 62290,
    "codeInsee": 62617
  },
  {
    "departement": 40,
    "slug": "biscarrosse",
    "name": "Biscarrosse",
    "codePostal": 40600,
    "codeInsee": 40046
  },
  {
    "departement": 82,
    "slug": "moissac",
    "name": "Moissac",
    "codePostal": 82200,
    "codeInsee": 82112
  },
  {
    "departement": 78,
    "slug": "andresy",
    "name": "Andrésy",
    "codePostal": 78570,
    "codeInsee": 78015
  },
  {
    "departement": 91,
    "slug": "epinay-sous-senart",
    "name": "Épinay-sous-Sénart",
    "codePostal": 91860,
    "codeInsee": 91215
  },
  {
    "departement": 64,
    "slug": "lons",
    "name": "Lons",
    "codePostal": 64140,
    "codeInsee": 64348
  },
  {
    "departement": 48,
    "slug": "mende",
    "name": "Mende",
    "codePostal": 48000,
    "codeInsee": 48095
  },
  {
    "departement": 91,
    "slug": "morangis-91",
    "name": "Morangis",
    "codePostal": 91420,
    "codeInsee": 91432
  },
  {
    "departement": 69,
    "slug": "genas",
    "name": "Genas",
    "codePostal": 69740,
    "codeInsee": 69277
  },
  {
    "departement": 12,
    "slug": "villefranche-de-rouergue",
    "name": "Villefranche-de-Rouergue",
    "codePostal": 12200,
    "codeInsee": 12300
  },
  {
    "departement": 38,
    "slug": "seyssinet-pariset",
    "name": "Seyssinet-Pariset",
    "codePostal": 38170,
    "codeInsee": 38485
  },
  {
    "departement": 76,
    "slug": "barentin",
    "name": "Barentin",
    "codePostal": 76360,
    "codeInsee": 76057
  },
  {
    "departement": 22,
    "slug": "lamballe",
    "name": "Lamballe",
    "codePostal": 22400,
    "codeInsee": 22093
  },
  {
    "departement": 67,
    "slug": "saverne",
    "name": "Saverne",
    "codePostal": 67700,
    "codeInsee": 67437
  },
  {
    "departement": 94,
    "slug": "valenton",
    "name": "Valenton",
    "codePostal": 94460,
    "codeInsee": 94074
  },
  {
    "departement": 44,
    "slug": "chateaubriant",
    "name": "Châteaubriant",
    "codePostal": 44110,
    "codeInsee": 44036
  },
  {
    "departement": 78,
    "slug": "aubergenville",
    "name": "Aubergenville",
    "codePostal": 78410,
    "codeInsee": 78029
  },
  {
    "departement": 14,
    "slug": "vire-14",
    "name": "Vire",
    "codePostal": 14500,
    "codeInsee": 14762
  },
  {
    "departement": 31,
    "slug": "ramonville-saint-agne",
    "name": "Ramonville-Saint-Agne",
    "codePostal": 31520,
    "codeInsee": 31446
  },
  {
    "departement": 2,
    "slug": "chauny",
    "name": "Chauny",
    "codePostal": 2300,
    "codeInsee": 2173
  },
  {
    "departement": 62,
    "slug": "mericourt-62",
    "name": "Méricourt",
    "codePostal": 62680,
    "codeInsee": 62570
  },
  {
    "departement": 81,
    "slug": "graulhet",
    "name": "Graulhet",
    "codePostal": 81300,
    "codeInsee": 81105
  },
  {
    "departement": 971,
    "slug": "basse-terre",
    "name": "Basse-Terre",
    "codePostal": 97100,
    "codeInsee": 97105
  },
  {
    "departement": 74,
    "slug": "bonneville-74",
    "name": "Bonneville",
    "codePostal": 74130,
    "codeInsee": 74042
  },
  {
    "departement": 44,
    "slug": "sainte-luce-sur-loire",
    "name": "Sainte-Luce-sur-Loire",
    "codePostal": 44980,
    "codeInsee": 44172
  },
  {
    "departement": 40,
    "slug": "tarnos",
    "name": "Tarnos",
    "codePostal": 40220,
    "codeInsee": 40312
  },
  {
    "departement": 59,
    "slug": "marly-59",
    "name": "Marly",
    "codePostal": 59770,
    "codeInsee": 59383
  },
  {
    "departement": 31,
    "slug": "union",
    "name": "L'Union",
    "codePostal": 31240,
    "codeInsee": 31561
  },
  {
    "departement": 74,
    "slug": "saint-julien-en-genevois",
    "name": "Saint-Julien-en-Genevois",
    "codePostal": 74160,
    "codeInsee": 74243
  },
  {
    "departement": 83,
    "slug": "saint-cyr-sur-mer",
    "name": "Saint-Cyr-sur-Mer",
    "codePostal": 83270,
    "codeInsee": 83112
  },
  {
    "departement": 76,
    "slug": "yvetot",
    "name": "Yvetot",
    "codePostal": 76190,
    "codeInsee": 76758
  },
  {
    "departement": 76,
    "slug": "bolbec",
    "name": "Bolbec",
    "codePostal": 76210,
    "codeInsee": 76114
  },
  {
    "departement": 95,
    "slug": "enghien-les-bains",
    "name": "Enghien-les-Bains",
    "codePostal": 95880,
    "codeInsee": 95210
  },
  {
    "departement": 69,
    "slug": "mions",
    "name": "Mions",
    "codePostal": 69780,
    "codeInsee": 69283
  },
  {
    "departement": 1,
    "slug": "bellegarde-sur-valserine",
    "name": "Bellegarde-sur-Valserine",
    "codePostal": 1200,
    "codeInsee": 1033
  },
  {
    "departement": 29,
    "slug": "quimperle",
    "name": "Quimperlé",
    "codePostal": 29300,
    "codeInsee": 29233
  },
  {
    "departement": 60,
    "slug": "pont-sainte-maxence",
    "name": "Pont-Sainte-Maxence",
    "codePostal": 60700,
    "codeInsee": 60509
  },
  {
    "departement": 13,
    "slug": "rognac",
    "name": "Rognac",
    "codePostal": 13340,
    "codeInsee": 13081
  },
  {
    "departement": 13,
    "slug": "auriol",
    "name": "Auriol",
    "codePostal": 13390,
    "codeInsee": 13007
  },
  {
    "departement": 84,
    "slug": "apt",
    "name": "Apt",
    "codePostal": 84400,
    "codeInsee": 84003
  },
  {
    "departement": 11,
    "slug": "castelnaudary",
    "name": "Castelnaudary",
    "codePostal": 11400,
    "codeInsee": 11076
  },
  {
    "departement": 28,
    "slug": "vernouillet-28",
    "name": "Vernouillet",
    "codePostal": 28500,
    "codeInsee": 28404
  },
  {
    "departement": 95,
    "slug": "isle-adam",
    "name": "L'Isle-Adam",
    "codePostal": 95290,
    "codeInsee": 95313
  },
  {
    "departement": 78,
    "slug": "voisins-le-bretonneux",
    "name": "Voisins-le-Bretonneux",
    "codePostal": 78960,
    "codeInsee": 78688
  },
  {
    "departement": 974,
    "slug": "bras-panon",
    "name": "Bras-Panon",
    "codePostal": 97412,
    "codeInsee": 97402
  },
  {
    "departement": 29,
    "slug": "plouzane",
    "name": "Plouzané",
    "codePostal": 29280,
    "codeInsee": 29212
  },
  {
    "departement": 49,
    "slug": "ponts-de-ce",
    "name": "Ponts-de-Cé",
    "codePostal": 49130,
    "codeInsee": 49246
  },
  {
    "departement": 13,
    "slug": "chateauneuf-les-martigues",
    "name": "Châteauneuf-les-Martigues",
    "codePostal": 13220,
    "codeInsee": 13026
  },
  {
    "departement": 5,
    "slug": "briancon",
    "name": "Briançon",
    "codePostal": 5100,
    "codeInsee": 5023
  },
  {
    "departement": 78,
    "slug": "triel-sur-seine",
    "name": "Triel-sur-Seine",
    "codePostal": 78510,
    "codeInsee": 78624
  },
  {
    "departement": 45,
    "slug": "amilly-45",
    "name": "Amilly",
    "codePostal": 45200,
    "codeInsee": 45004
  },
  {
    "departement": 53,
    "slug": "chateau-gontier",
    "name": "Château-Gontier",
    "codePostal": 53200,
    "codeInsee": 53062
  },
  {
    "departement": 974,
    "slug": "petite-ile",
    "name": "Petite-Île",
    "codePostal": 97429,
    "codeInsee": 97405
  },
  {
    "departement": 27,
    "slug": "gisors",
    "name": "Gisors",
    "codePostal": 27140,
    "codeInsee": 27284
  },
  {
    "departement": 59,
    "slug": "gravelines",
    "name": "Gravelines",
    "codePostal": 59820,
    "codeInsee": 59273
  },
  {
    "departement": 76,
    "slug": "oissel",
    "name": "Oissel",
    "codePostal": 76350,
    "codeInsee": 76484
  },
  {
    "departement": 6,
    "slug": "carros",
    "name": "Carros",
    "codePostal": 6510,
    "codeInsee": 6033
  },
  {
    "departement": 83,
    "slug": "pradet",
    "name": "Le Pradet",
    "codePostal": 83220,
    "codeInsee": 83098
  },
  {
    "departement": 74,
    "slug": "passy-74",
    "name": "Passy",
    "codePostal": 74480,
    "codeInsee": 74208
  },
  {
    "departement": 21,
    "slug": "talant",
    "name": "Talant",
    "codePostal": 21240,
    "codeInsee": 21617
  },
  {
    "departement": 68,
    "slug": "guebwiller",
    "name": "Guebwiller",
    "codePostal": 68500,
    "codeInsee": 68112
  },
  {
    "departement": 87,
    "slug": "saint-junien",
    "name": "Saint-Junien",
    "codePostal": 87200,
    "codeInsee": 87154
  },
  {
    "departement": 57,
    "slug": "florange",
    "name": "Florange",
    "codePostal": 57190,
    "codeInsee": 57221
  },
  {
    "departement": 25,
    "slug": "valentigney",
    "name": "Valentigney",
    "codePostal": 25700,
    "codeInsee": 25580
  },
  {
    "departement": 94,
    "slug": "queue-en-brie",
    "name": "La Queue-en-Brie",
    "codePostal": 94510,
    "codeInsee": 94060
  },
  {
    "departement": 76,
    "slug": "maromme",
    "name": "Maromme",
    "codePostal": 76150,
    "codeInsee": 76410
  },
  {
    "departement": 69,
    "slug": "brignais",
    "name": "Brignais",
    "codePostal": 69530,
    "codeInsee": 69027
  },
  {
    "departement": 59,
    "slug": "saint-andre-lez-lille",
    "name": "Saint-André-lez-Lille",
    "codePostal": 59350,
    "codeInsee": 59527
  },
  {
    "departement": 10,
    "slug": "saint-andre-les-vergers",
    "name": "Saint-André-les-Vergers",
    "codePostal": 10120,
    "codeInsee": 10333
  },
  {
    "departement": 7,
    "slug": "aubenas",
    "name": "Aubenas",
    "codePostal": 7200,
    "codeInsee": 7019
  },
  {
    "departement": 67,
    "slug": "ostwald",
    "name": "Ostwald",
    "codePostal": 67540,
    "codeInsee": 67365
  },
  {
    "departement": 62,
    "slug": "etaples",
    "name": "Étaples",
    "codePostal": 62630,
    "codeInsee": 62318
  },
  {
    "departement": 38,
    "slug": "pont-de-claix",
    "name": "Le Pont-de-Claix",
    "codePostal": 38800,
    "codeInsee": 38317
  },
  {
    "departement": 68,
    "slug": "cernay-68",
    "name": "Cernay",
    "codePostal": 68700,
    "codeInsee": 68063
  },
  {
    "departement": 63,
    "slug": "thiers",
    "name": "Thiers",
    "codePostal": 63300,
    "codeInsee": 63430
  },
  {
    "departement": 31,
    "slug": "saint-gaudens",
    "name": "Saint-Gaudens",
    "codePostal": 31800,
    "codeInsee": 31483
  },
  {
    "departement": 62,
    "slug": "saint-martin-boulogne",
    "name": "Saint-Martin-Boulogne",
    "codePostal": 62280,
    "codeInsee": 62758
  },
  {
    "departement": 13,
    "slug": "septemes-les-vallons",
    "name": "Septèmes-les-Vallons",
    "codePostal": 13240,
    "codeInsee": 13106
  },
  {
    "departement": 74,
    "slug": "gaillard",
    "name": "Gaillard",
    "codePostal": 74240,
    "codeInsee": 74133
  },
  {
    "departement": 13,
    "slug": "saint-martin-de-crau",
    "name": "Saint-Martin-de-Crau",
    "codePostal": 13310,
    "codeInsee": 13097
  },
  {
    "departement": 33,
    "slug": "andernos-les-bains",
    "name": "Andernos-les-Bains",
    "codePostal": 33510,
    "codeInsee": 33005
  },
  {
    "departement": 22,
    "slug": "ploufragan",
    "name": "Ploufragan",
    "codePostal": 22440,
    "codeInsee": 22215
  },
  {
    "departement": 31,
    "slug": "fonsorbes",
    "name": "Fonsorbes",
    "codePostal": 31470,
    "codeInsee": 31187
  },
  {
    "departement": 83,
    "slug": "cogolin",
    "name": "Cogolin",
    "codePostal": 83310,
    "codeInsee": 83042
  },
  {
    "departement": 73,
    "slug": "motte-servolex",
    "name": "La Motte-Servolex",
    "codePostal": 73290,
    "codeInsee": 73179
  },
  {
    "departement": 83,
    "slug": "sollies-pont",
    "name": "Solliès-Pont",
    "codePostal": 83210,
    "codeInsee": 83130
  },
  {
    "departement": 12,
    "slug": "onet-le-chateau",
    "name": "Onet-le-Château",
    "codePostal": 12850,
    "codeInsee": 12176
  },
  {
    "departement": 72,
    "slug": "allonnes-72",
    "name": "Allonnes",
    "codePostal": 72700,
    "codeInsee": 72003
  },
  {
    "departement": 7,
    "slug": "guilherand-granges",
    "name": "Guilherand-Granges",
    "codePostal": 7500,
    "codeInsee": 7102
  },
  {
    "departement": "2A",
    "slug": "porto-vecchio",
    "name": "Porto-Vecchio",
    "codePostal": 20137,
    "codeInsee": "2A247"
  },
  {
    "departement": 31,
    "slug": "castanet-tolosan",
    "name": "Castanet-Tolosan",
    "codePostal": 31320,
    "codeInsee": 31113
  },
  {
    "departement": 62,
    "slug": "auchel",
    "name": "Auchel",
    "codePostal": 62260,
    "codeInsee": 62048
  },
  {
    "departement": 14,
    "slug": "ifs-14",
    "name": "Ifs",
    "codePostal": 14123,
    "codeInsee": 14341
  },
  {
    "departement": 39,
    "slug": "saint-claude",
    "name": "Saint-Claude",
    "codePostal": 39200,
    "codeInsee": 39478
  },
  {
    "departement": 77,
    "slug": "claye-souilly",
    "name": "Claye-Souilly",
    "codePostal": 77410,
    "codeInsee": 77118
  },
  {
    "departement": 30,
    "slug": "vauvert",
    "name": "Vauvert",
    "codePostal": 30600,
    "codeInsee": 30341
  },
  {
    "departement": 38,
    "slug": "sassenage",
    "name": "Sassenage",
    "codePostal": 38360,
    "codeInsee": 38474
  },
  {
    "departement": 84,
    "slug": "monteux",
    "name": "Monteux",
    "codePostal": 84170,
    "codeInsee": 84080
  },
  {
    "departement": 59,
    "slug": "saint-saulve",
    "name": "Saint-Saulve",
    "codePostal": 59880,
    "codeInsee": 59544
  },
  {
    "departement": 64,
    "slug": "orthez",
    "name": "Orthez",
    "codePostal": 64300,
    "codeInsee": 64430
  },
  {
    "departement": 33,
    "slug": "arcachon",
    "name": "Arcachon",
    "codePostal": 33120,
    "codeInsee": 33009
  },
  {
    "departement": 63,
    "slug": "beaumont-63",
    "name": "Beaumont",
    "codePostal": 63110,
    "codeInsee": 63032
  },
  {
    "departement": 62,
    "slug": "longuenesse",
    "name": "Longuenesse",
    "codePostal": 62219,
    "codeInsee": 62525
  },
  {
    "departement": 976,
    "slug": "dembeni",
    "name": "Dembeni",
    "codePostal": 97660,
    "codeInsee": 97607
  },
  {
    "departement": 31,
    "slug": "saint-orens-de-gameville",
    "name": "Saint-Orens-de-Gameville",
    "codePostal": 31650,
    "codeInsee": 31506
  },
  {
    "departement": 13,
    "slug": "plan-de-cuques",
    "name": "Plan-de-Cuques",
    "codePostal": 13380,
    "codeInsee": 13075
  },
  {
    "departement": 28,
    "slug": "nogent-le-rotrou",
    "name": "Nogent-le-Rotrou",
    "codePostal": 28400,
    "codeInsee": 28280
  },
  {
    "departement": 60,
    "slug": "chantilly",
    "name": "Chantilly",
    "codePostal": 60500,
    "codeInsee": 60141
  },
  {
    "departement": 77,
    "slug": "vaux-le-penil",
    "name": "Vaux-le-Pénil",
    "codePostal": 77000,
    "codeInsee": 77487
  },
  {
    "departement": 66,
    "slug": "saint-esteve",
    "name": "Saint-Estève",
    "codePostal": 66240,
    "codeInsee": 66172
  },
  {
    "departement": 92,
    "slug": "ville-d-avray",
    "name": "Ville-d'Avray",
    "codePostal": 92410,
    "codeInsee": 92077
  },
  {
    "departement": 22,
    "slug": "dinan",
    "name": "Dinan",
    "codePostal": 22100,
    "codeInsee": 22050
  },
  {
    "departement": 64,
    "slug": "oloron-sainte-marie",
    "name": "Oloron-Sainte-Marie",
    "codePostal": 64400,
    "codeInsee": 64422
  },
  {
    "departement": 67,
    "slug": "erstein",
    "name": "Erstein",
    "codePostal": 67150,
    "codeInsee": 67130
  },
  {
    "departement": 29,
    "slug": "relecq-kerhuon",
    "name": "Le Relecq-Kerhuon",
    "codePostal": 29480,
    "codeInsee": 29235
  },
  {
    "departement": 18,
    "slug": "saint-amand-montrond",
    "name": "Saint-Amand-Montrond",
    "codePostal": 18200,
    "codeInsee": 18197
  },
  {
    "departement": 37,
    "slug": "chambray-les-tours",
    "name": "Chambray-lès-Tours",
    "codePostal": 37170,
    "codeInsee": 37050
  },
  {
    "departement": 67,
    "slug": "obernai",
    "name": "Obernai",
    "codePostal": 67210,
    "codeInsee": 67348
  },
  {
    "departement": 42,
    "slug": "riorges",
    "name": "Riorges",
    "codePostal": 42153,
    "codeInsee": 42184
  },
  {
    "departement": 57,
    "slug": "maizieres-les-metz",
    "name": "Maizières-lès-Metz",
    "codePostal": 57210,
    "codeInsee": 57433
  },
  {
    "departement": 7,
    "slug": "tournon-sur-rhone",
    "name": "Tournon-sur-Rhône",
    "codePostal": 7300,
    "codeInsee": 7324
  },
  {
    "departement": 93,
    "slug": "dugny",
    "name": "Dugny",
    "codePostal": 93440,
    "codeInsee": 93030
  },
  {
    "departement": 58,
    "slug": "cosne-cours-sur-loire",
    "name": "Cosne-Cours-sur-Loire",
    "codePostal": 58200,
    "codeInsee": 58086
  },
  {
    "departement": 13,
    "slug": "saint-remy-de-provence",
    "name": "Saint-Rémy-de-Provence",
    "codePostal": 13210,
    "codeInsee": 13100
  },
  {
    "departement": 63,
    "slug": "pont-du-chateau",
    "name": "Pont-du-Château",
    "codePostal": 63430,
    "codeInsee": 63284
  },
  {
    "departement": 62,
    "slug": "courrieres",
    "name": "Courrières",
    "codePostal": 62710,
    "codeInsee": 62250
  },
  {
    "departement": 972,
    "slug": "gros-morne",
    "name": "Gros-Morne",
    "codePostal": 97213,
    "codeInsee": 97212
  },
  {
    "departement": 84,
    "slug": "vedene",
    "name": "Vedène",
    "codePostal": 84270,
    "codeInsee": 84141
  },
  {
    "departement": 974,
    "slug": "les-avirons",
    "name": "Avirons",
    "codePostal": 97425,
    "codeInsee": 97401
  },
  {
    "departement": 35,
    "slug": "dinard",
    "name": "Dinard",
    "codePostal": 35800,
    "codeInsee": 35093
  },
  {
    "departement": 77,
    "slug": "lieusaint-77",
    "name": "Lieusaint",
    "codePostal": 77127,
    "codeInsee": 77251
  },
  {
    "departement": 91,
    "slug": "arpajon",
    "name": "Arpajon",
    "codePostal": 91290,
    "codeInsee": 91021
  },
  {
    "departement": 60,
    "slug": "clermont-60",
    "name": "Clermont",
    "codePostal": 60600,
    "codeInsee": 60157
  },
  {
    "departement": 11,
    "slug": "lezignan-corbieres",
    "name": "Lézignan-Corbières",
    "codePostal": 11200,
    "codeInsee": 11203
  },
  {
    "departement": 34,
    "slug": "meze",
    "name": "Mèze",
    "codePostal": 34140,
    "codeInsee": 34157
  },
  {
    "departement": 95,
    "slug": "persan",
    "name": "Persan",
    "codePostal": 95340,
    "codeInsee": 95487
  },
  {
    "departement": 35,
    "slug": "saint-jacques-de-la-lande",
    "name": "Saint-Jacques-de-la-Lande",
    "codePostal": 35136,
    "codeInsee": 35281
  },
  {
    "departement": 67,
    "slug": "hoenheim",
    "name": "Hœnheim",
    "codePostal": 67800,
    "codeInsee": 67204
  },
  {
    "departement": 59,
    "slug": "vieux-conde",
    "name": "Vieux-Condé",
    "codePostal": 59690,
    "codeInsee": 59616
  },
  {
    "departement": 85,
    "slug": "saint-hilaire-de-riez",
    "name": "Saint-Hilaire-de-Riez",
    "codePostal": 85270,
    "codeInsee": 85226
  },
  {
    "departement": 37,
    "slug": "montlouis-sur-loire",
    "name": "Montlouis-sur-Loire",
    "codePostal": 37270,
    "codeInsee": 37156
  },
  {
    "departement": 79,
    "slug": "parthenay",
    "name": "Parthenay",
    "codePostal": 79200,
    "codeInsee": 79202
  },
  {
    "departement": 66,
    "slug": "saint-cyprien-66",
    "name": "Saint-Cyprien",
    "codePostal": 66750,
    "codeInsee": 66171
  },
  {
    "departement": 971,
    "slug": "saint-claude-971",
    "name": "Saint-Claude",
    "codePostal": 97120,
    "codeInsee": 97124
  },
  {
    "departement": 976,
    "slug": "tsingoni",
    "name": "Tsingoni",
    "codePostal": 97680,
    "codeInsee": 97617
  },
  {
    "departement": 44,
    "slug": "pornichet",
    "name": "Pornichet",
    "codePostal": 44380,
    "codeInsee": 44132
  },
  {
    "departement": 56,
    "slug": "saint-ave",
    "name": "Saint-Avé",
    "codePostal": 56890,
    "codeInsee": 56206
  },
  {
    "departement": 27,
    "slug": "bernay",
    "name": "Bernay",
    "codePostal": 27300,
    "codeInsee": 27056
  },
  {
    "departement": 74,
    "slug": "roche-sur-foron",
    "name": "La Roche-sur-Foron",
    "codePostal": 74800,
    "codeInsee": 74224
  },
  {
    "departement": 30,
    "slug": "pont-saint-esprit",
    "name": "Pont-Saint-Esprit",
    "codePostal": 30130,
    "codeInsee": 30202
  },
  {
    "departement": 59,
    "slug": "douchy-les-mines",
    "name": "Douchy-les-Mines",
    "codePostal": 59282,
    "codeInsee": 59179
  },
  {
    "departement": 84,
    "slug": "pernes-les-fontaines",
    "name": "Pernes-les-Fontaines",
    "codePostal": 84210,
    "codeInsee": 84088
  },
  {
    "departement": 63,
    "slug": "gerzat",
    "name": "Gerzat",
    "codePostal": 63360,
    "codeInsee": 63164
  },
  {
    "departement": 87,
    "slug": "panazol",
    "name": "Panazol",
    "codePostal": 87350,
    "codeInsee": 87114
  },
  {
    "departement": 37,
    "slug": "fondettes",
    "name": "Fondettes",
    "codePostal": 37230,
    "codeInsee": 37109
  },
  {
    "departement": 1,
    "slug": "gex",
    "name": "Gex",
    "codePostal": 1170,
    "codeInsee": 1173
  },
  {
    "departement": 42,
    "slug": "roche-la-moliere",
    "name": "Roche-la-Molière",
    "codePostal": 42230,
    "codeInsee": 42189
  },
  {
    "departement": 56,
    "slug": "guidel",
    "name": "Guidel",
    "codePostal": 56520,
    "codeInsee": 56078
  },
  {
    "departement": 70,
    "slug": "hericourt-70",
    "name": "Héricourt",
    "codePostal": 70400,
    "codeInsee": 70285
  },
  {
    "departement": 59,
    "slug": "aniche",
    "name": "Aniche",
    "codePostal": 59580,
    "codeInsee": 59008
  },
  {
    "departement": 91,
    "slug": "igny-91",
    "name": "Igny",
    "codePostal": 91430,
    "codeInsee": 91312
  },
  {
    "departement": 69,
    "slug": "tarare",
    "name": "Tarare",
    "codePostal": 69170,
    "codeInsee": 69243
  },
  {
    "departement": 6,
    "slug": "trinite-06",
    "name": "La Trinité",
    "codePostal": 6340,
    "codeInsee": 6149
  },
  {
    "departement": 28,
    "slug": "mainvilliers-28",
    "name": "Mainvilliers",
    "codePostal": 28300,
    "codeInsee": 28229
  },
  {
    "departement": 2,
    "slug": "villers-cotterets",
    "name": "Villers-Cotterêts",
    "codePostal": 2600,
    "codeInsee": 2810
  },
  {
    "departement": 51,
    "slug": "tinqueux",
    "name": "Tinqueux",
    "codePostal": 51430,
    "codeInsee": 51573
  },
  {
    "departement": 13,
    "slug": "trets",
    "name": "Trets",
    "codePostal": 13530,
    "codeInsee": 13110
  },
  {
    "departement": 68,
    "slug": "wittelsheim",
    "name": "Wittelsheim",
    "codePostal": 68310,
    "codeInsee": 68375
  },
  {
    "departement": 31,
    "slug": "saint-jean",
    "name": "Saint-Jean",
    "codePostal": 31240,
    "codeInsee": 31488
  },
  {
    "departement": 89,
    "slug": "joigny",
    "name": "Joigny",
    "codePostal": 89300,
    "codeInsee": 89206
  },
  {
    "departement": 83,
    "slug": "cuers",
    "name": "Cuers",
    "codePostal": 83390,
    "codeInsee": 83049
  },
  {
    "departement": 19,
    "slug": "ussel-19",
    "name": "Ussel",
    "codePostal": 19200,
    "codeInsee": 19275
  },
  {
    "departement": 69,
    "slug": "corbas",
    "name": "Corbas",
    "codePostal": 69960,
    "codeInsee": 69273
  },
  {
    "departement": 6,
    "slug": "mouans-sartoux",
    "name": "Mouans-Sartoux",
    "codePostal": 6370,
    "codeInsee": 6084
  },
  {
    "departement": 10,
    "slug": "sainte-savine",
    "name": "Sainte-Savine",
    "codePostal": 10300,
    "codeInsee": 10362
  },
  {
    "departement": 976,
    "slug": "sada",
    "name": "Sada",
    "codePostal": 97640,
    "codeInsee": 97616
  },
  {
    "departement": 76,
    "slug": "deville-les-rouen",
    "name": "Déville-lès-Rouen",
    "codePostal": 76250,
    "codeInsee": 76216
  },
  {
    "departement": 83,
    "slug": "vidauban",
    "name": "Vidauban",
    "codePostal": 83550,
    "codeInsee": 83148
  },
  {
    "departement": 81,
    "slug": "lavaur-81",
    "name": "Lavaur",
    "codePostal": 81500,
    "codeInsee": 81140
  },
  {
    "departement": 59,
    "slug": "neuville-en-ferrain",
    "name": "Neuville-en-Ferrain",
    "codePostal": 59960,
    "codeInsee": 59426
  },
  {
    "departement": 976,
    "slug": "bandraboua",
    "name": "Bandraboua",
    "codePostal": 97650,
    "codeInsee": 97602
  },
  {
    "departement": 11,
    "slug": "limoux",
    "name": "Limoux",
    "codePostal": 11300,
    "codeInsee": 11206
  },
  {
    "departement": 26,
    "slug": "bourg-de-peage",
    "name": "Bourg-de-Péage",
    "codePostal": 26300,
    "codeInsee": 26057
  },
  {
    "departement": 81,
    "slug": "carmaux",
    "name": "Carmaux",
    "codePostal": 81400,
    "codeInsee": 81060
  },
  {
    "departement": 35,
    "slug": "betton",
    "name": "Betton",
    "codePostal": 35830,
    "codeInsee": 35024
  },
  {
    "departement": 91,
    "slug": "epinay-sur-orge",
    "name": "Épinay-sur-Orge",
    "codePostal": 91360,
    "codeInsee": 91216
  },
  {
    "departement": 57,
    "slug": "amneville",
    "name": "Amnéville",
    "codePostal": 57360,
    "codeInsee": 57019
  },
  {
    "departement": 37,
    "slug": "riche-37",
    "name": "La Riche",
    "codePostal": 37520,
    "codeInsee": 37195
  },
  {
    "departement": 62,
    "slug": "lillers",
    "name": "Lillers",
    "codePostal": 62190,
    "codeInsee": 62516
  },
  {
    "departement": 78,
    "slug": "croissy-sur-seine",
    "name": "Croissy-sur-Seine",
    "codePostal": 78290,
    "codeInsee": 78190
  },
  {
    "departement": 62,
    "slug": "montigny-en-gohelle",
    "name": "Montigny-en-Gohelle",
    "codePostal": 62640,
    "codeInsee": 62587
  },
  {
    "departement": 86,
    "slug": "buxerolles-86",
    "name": "Buxerolles",
    "codePostal": 86180,
    "codeInsee": 86041
  },
  {
    "departement": 54,
    "slug": "dombasle-sur-meurthe",
    "name": "Dombasle-sur-Meurthe",
    "codePostal": 54110,
    "codeInsee": 54159
  },
  {
    "departement": 81,
    "slug": "mazamet",
    "name": "Mazamet",
    "codePostal": 81200,
    "codeInsee": 81163
  },
  {
    "departement": 62,
    "slug": "arques-62",
    "name": "Arques",
    "codePostal": 62510,
    "codeInsee": 62040
  },
  {
    "departement": 91,
    "slug": "dourdan",
    "name": "Dourdan",
    "codePostal": 91410,
    "codeInsee": 91200
  },
  {
    "departement": 69,
    "slug": "pierre-benite",
    "name": "Pierre-Bénite",
    "codePostal": 69310,
    "codeInsee": 69152
  },
  {
    "departement": 64,
    "slug": "lescar",
    "name": "Lescar",
    "codePostal": 64230,
    "codeInsee": 64335
  },
  {
    "departement": 66,
    "slug": "argeles-sur-mer",
    "name": "Argelès-sur-Mer",
    "codePostal": 66700,
    "codeInsee": 66008
  },
  {
    "departement": 21,
    "slug": "chevigny-saint-sauveur",
    "name": "Chevigny-Saint-Sauveur",
    "codePostal": 21800,
    "codeInsee": 21171
  },
  {
    "departement": 35,
    "slug": "pace-35",
    "name": "Pacé",
    "codePostal": 35740,
    "codeInsee": 35210
  },
  {
    "departement": 62,
    "slug": "sallaumines",
    "name": "Sallaumines",
    "codePostal": 62430,
    "codeInsee": 62771
  },
  {
    "departement": 57,
    "slug": "rombas",
    "name": "Rombas",
    "codePostal": 57120,
    "codeInsee": 57591
  },
  {
    "departement": 54,
    "slug": "saint-max",
    "name": "Saint-Max",
    "codePostal": 54130,
    "codeInsee": 54482
  },
  {
    "departement": 59,
    "slug": "bondues",
    "name": "Bondues",
    "codePostal": 59910,
    "codeInsee": 59090
  },
  {
    "departement": 972,
    "slug": "sainte-luce-972",
    "name": "Sainte-Luce",
    "codePostal": 97228,
    "codeInsee": 97227
  },
  {
    "departement": 94,
    "slug": "ormesson-sur-marne",
    "name": "Ormesson-sur-Marne",
    "codePostal": 94490,
    "codeInsee": 94055
  },
  {
    "departement": 976,
    "slug": "pamandzi",
    "name": "Pamandzi",
    "codePostal": 97610,
    "codeInsee": 97615
  },
  {
    "departement": 83,
    "slug": "carqueiranne",
    "name": "Carqueiranne",
    "codePostal": 83320,
    "codeInsee": 83034
  },
  {
    "departement": 9,
    "slug": "foix",
    "name": "Foix",
    "codePostal": 9000,
    "codeInsee": 9122
  },
  {
    "departement": 67,
    "slug": "brumath",
    "name": "Brumath",
    "codePostal": 67170,
    "codeInsee": 67067
  },
  {
    "departement": 62,
    "slug": "oignies",
    "name": "Oignies",
    "codePostal": 62590,
    "codeInsee": 62637
  },
  {
    "departement": 78,
    "slug": "villepreux",
    "name": "Villepreux",
    "codePostal": 78450,
    "codeInsee": 78674
  },
  {
    "departement": 83,
    "slug": "londe-les-maures",
    "name": "La Londe-les-Maures",
    "codePostal": 83250,
    "codeInsee": 83071
  },
  {
    "departement": 62,
    "slug": "aire-sur-la-lys",
    "name": "Aire-sur-la-Lys",
    "codePostal": 62120,
    "codeInsee": 62014
  },
  {
    "departement": 22,
    "slug": "loudeac",
    "name": "Loudéac",
    "codePostal": 22600,
    "codeInsee": 22136
  },
  {
    "departement": 38,
    "slug": "voreppe",
    "name": "Voreppe",
    "codePostal": 38340,
    "codeInsee": 38565
  },
  {
    "departement": 976,
    "slug": "ouangani",
    "name": "Ouangani",
    "codePostal": 97670,
    "codeInsee": 97614
  },
  {
    "departement": 35,
    "slug": "chantepie",
    "name": "Chantepie",
    "codePostal": 35135,
    "codeInsee": 35055
  },
  {
    "departement": 79,
    "slug": "thouars",
    "name": "Thouars",
    "codePostal": 79100,
    "codeInsee": 79329
  },
  {
    "departement": 46,
    "slug": "figeac",
    "name": "Figeac",
    "codePostal": 46100,
    "codeInsee": 46102
  },
  {
    "departement": 84,
    "slug": "valreas",
    "name": "Valréas",
    "codePostal": 84600,
    "codeInsee": 84138
  },
  {
    "departement": 59,
    "slug": "marquette-lez-lille",
    "name": "Marquette-lez-Lille",
    "codePostal": 59520,
    "codeInsee": 59386
  },
  {
    "departement": 76,
    "slug": "caudebec-les-elbeuf",
    "name": "Caudebec-lès-Elbeuf",
    "codePostal": 76320,
    "codeInsee": 76165
  },
  {
    "departement": 80,
    "slug": "albert",
    "name": "Albert",
    "codePostal": 80300,
    "codeInsee": 80016
  },
  {
    "departement": 59,
    "slug": "jeumont",
    "name": "Jeumont",
    "codePostal": 59460,
    "codeInsee": 59324
  },
  {
    "departement": 21,
    "slug": "quetigny",
    "name": "Quetigny",
    "codePostal": 21800,
    "codeInsee": 21515
  },
  {
    "departement": 59,
    "slug": "wambrechies",
    "name": "Wambrechies",
    "codePostal": 59118,
    "codeInsee": 59636
  },
  {
    "departement": 24,
    "slug": "sarlat-la-caneda",
    "name": "Sarlat-la-Canéda",
    "codePostal": 24200,
    "codeInsee": 24520
  },
  {
    "departement": 59,
    "slug": "conde-sur-l-escaut",
    "name": "Condé-sur-l'Escaut",
    "codePostal": 59163,
    "codeInsee": 59153
  },
  {
    "departement": 76,
    "slug": "grand-couronne",
    "name": "Grand-Couronne",
    "codePostal": 76530,
    "codeInsee": 76319
  },
  {
    "departement": 57,
    "slug": "marly-57",
    "name": "Marly",
    "codePostal": 57155,
    "codeInsee": 57447
  },
  {
    "departement": 44,
    "slug": "pontchateau",
    "name": "Pontchâteau",
    "codePostal": 44160,
    "codeInsee": 44129
  },
  {
    "departement": 42,
    "slug": "andrezieux-boutheon",
    "name": "Andrézieux-Bouthéon",
    "codePostal": 42160,
    "codeInsee": 42005
  },
  {
    "departement": 69,
    "slug": "chassieu",
    "name": "Chassieu",
    "codePostal": 69680,
    "codeInsee": 69271
  },
  {
    "departement": 33,
    "slug": "biganos",
    "name": "Biganos",
    "codePostal": 33380,
    "codeInsee": 33051
  },
  {
    "departement": 59,
    "slug": "annoeullin",
    "name": "Annœullin",
    "codePostal": 59112,
    "codeInsee": 59011
  },
  {
    "departement": 45,
    "slug": "chapelle-saint-mesmin",
    "name": "La Chapelle-Saint-Mesmin",
    "codePostal": 45380,
    "codeInsee": 45075
  },
  {
    "departement": 973,
    "slug": "macouria",
    "name": "MACOURIA TONATE",
    "codePostal": 97355,
    "codeInsee": 97305
  },
  {
    "departement": 85,
    "slug": "lucon",
    "name": "Luçon",
    "codePostal": 85400,
    "codeInsee": 85128
  },
  {
    "departement": 78,
    "slug": "chanteloup-les-vignes",
    "name": "Chanteloup-les-Vignes",
    "codePostal": 78570,
    "codeInsee": 78138
  },
  {
    "departement": 91,
    "slug": "villebon-sur-yvette",
    "name": "Villebon-sur-Yvette",
    "codePostal": 91940,
    "codeInsee": 91661
  },
  {
    "departement": 58,
    "slug": "varennes-vauzelles",
    "name": "Varennes-Vauzelles",
    "codePostal": 58640,
    "codeInsee": 58303
  },
  {
    "departement": 63,
    "slug": "aubiere",
    "name": "Aubière",
    "codePostal": 63170,
    "codeInsee": 63014
  },
  {
    "departement": 94,
    "slug": "villecresnes",
    "name": "Villecresnes",
    "codePostal": 94440,
    "codeInsee": 94075
  },
  {
    "departement": 33,
    "slug": "saint-andre-de-cubzac",
    "name": "Saint-André-de-Cubzac",
    "codePostal": 33240,
    "codeInsee": 33366
  },
  {
    "departement": 35,
    "slug": "redon",
    "name": "Redon",
    "codePostal": 35600,
    "codeInsee": 35236
  },
  {
    "departement": 62,
    "slug": "marck",
    "name": "Marck",
    "codePostal": 62730,
    "codeInsee": 62548
  },
  {
    "departement": 38,
    "slug": "eybens",
    "name": "Eybens",
    "codePostal": 38320,
    "codeInsee": 38158
  },
  {
    "departement": 62,
    "slug": "portel",
    "name": "Le Portel",
    "codePostal": 62480,
    "codeInsee": 62667
  },
  {
    "departement": 76,
    "slug": "darnetal",
    "name": "Darnétal",
    "codePostal": 76160,
    "codeInsee": 76212
  },
  {
    "departement": 95,
    "slug": "fosses-95",
    "name": "Fosses",
    "codePostal": 95470,
    "codeInsee": 95250
  },
  {
    "departement": 16,
    "slug": "soyaux",
    "name": "Soyaux",
    "codePostal": 16800,
    "codeInsee": 16374
  },
  {
    "departement": 54,
    "slug": "maxeville",
    "name": "Maxéville",
    "codePostal": 54320,
    "codeInsee": 54357
  },
  {
    "departement": 69,
    "slug": "craponne",
    "name": "Craponne",
    "codePostal": 69290,
    "codeInsee": 69069
  },
  {
    "departement": 91,
    "slug": "bures-sur-yvette",
    "name": "Bures-sur-Yvette",
    "codePostal": 91440,
    "codeInsee": 91122
  },
  {
    "departement": 13,
    "slug": "pelissanne",
    "name": "Pélissanne",
    "codePostal": 13330,
    "codeInsee": 13069
  },
  {
    "departement": 83,
    "slug": "luc-83",
    "name": "Le Luc",
    "codePostal": 83340,
    "codeInsee": 83073
  },
  {
    "departement": 26,
    "slug": "portes-les-valence",
    "name": "Portes-lès-Valence",
    "codePostal": 26800,
    "codeInsee": 26252
  },
  {
    "departement": 14,
    "slug": "mondeville-14",
    "name": "Mondeville",
    "codePostal": 14120,
    "codeInsee": 14437
  },
  {
    "departement": 6,
    "slug": "biot-06",
    "name": "Biot",
    "codePostal": 6410,
    "codeInsee": 6018
  },
  {
    "departement": 60,
    "slug": "chambly",
    "name": "Chambly",
    "codePostal": 60230,
    "codeInsee": 60139
  },
  {
    "departement": 31,
    "slug": "portet-sur-garonne",
    "name": "Portet-sur-Garonne",
    "codePostal": 31120,
    "codeInsee": 31433
  },
  {
    "departement": 44,
    "slug": "blain",
    "name": "Blain",
    "codePostal": 44130,
    "codeInsee": 44015
  },
  {
    "departement": 60,
    "slug": "gouvieux",
    "name": "Gouvieux",
    "codePostal": 60270,
    "codeInsee": 60282
  },
  {
    "departement": 54,
    "slug": "villerupt",
    "name": "Villerupt",
    "codePostal": 54190,
    "codeInsee": 54580
  },
  {
    "departement": 57,
    "slug": "hagondange",
    "name": "Hagondange",
    "codePostal": 57300,
    "codeInsee": 57283
  },
  {
    "departement": 78,
    "slug": "vernouillet-78",
    "name": "Vernouillet",
    "codePostal": 78540,
    "codeInsee": 78643
  },
  {
    "departement": 47,
    "slug": "passage-47",
    "name": "Le Passage",
    "codePostal": 47520,
    "codeInsee": 47201
  },
  {
    "departement": 54,
    "slug": "jarville-la-malgrange",
    "name": "Jarville-la-Malgrange",
    "codePostal": 54140,
    "codeInsee": 54274
  },
  {
    "departement": 2,
    "slug": "hirson",
    "name": "Hirson",
    "codePostal": 2500,
    "codeInsee": 2381
  },
  {
    "departement": 14,
    "slug": "ouistreham",
    "name": "Ouistreham",
    "codePostal": 14150,
    "codeInsee": 14488
  },
  {
    "departement": 31,
    "slug": "revel-31",
    "name": "Revel",
    "codePostal": 31250,
    "codeInsee": 31451
  },
  {
    "departement": 50,
    "slug": "coutances",
    "name": "Coutances",
    "codePostal": 50200,
    "codeInsee": 50147
  },
  {
    "departement": 95,
    "slug": "louvres",
    "name": "Louvres",
    "codePostal": 95380,
    "codeInsee": 95351
  },
  {
    "departement": 91,
    "slug": "saint-germain-les-arpajon",
    "name": "Saint-Germain-lès-Arpajon",
    "codePostal": 91180,
    "codeInsee": 91552
  },
  {
    "departement": 972,
    "slug": "saint-esprit",
    "name": "Saint-Esprit",
    "codePostal": 97270,
    "codeInsee": 97223
  },
  {
    "departement": 33,
    "slug": "leognan",
    "name": "Léognan",
    "codePostal": 33850,
    "codeInsee": 33238
  },
  {
    "departement": 60,
    "slug": "lamorlaye",
    "name": "Lamorlaye",
    "codePostal": 60260,
    "codeInsee": 60346
  },
  {
    "departement": 91,
    "slug": "bondoufle",
    "name": "Bondoufle",
    "codePostal": 91070,
    "codeInsee": 91086
  },
  {
    "departement": 21,
    "slug": "longvic",
    "name": "Longvic",
    "codePostal": 21600,
    "codeInsee": 21355
  },
  {
    "departement": 62,
    "slug": "isbergues",
    "name": "Isbergues",
    "codePostal": 62330,
    "codeInsee": 62473
  },
  {
    "departement": 59,
    "slug": "leers",
    "name": "Leers",
    "codePostal": 59115,
    "codeInsee": 59339
  },
  {
    "departement": 95,
    "slug": "mery-sur-oise",
    "name": "Méry-sur-Oise",
    "codePostal": 95540,
    "codeInsee": 95394
  },
  {
    "departement": 13,
    "slug": "fuveau",
    "name": "Fuveau",
    "codePostal": 13710,
    "codeInsee": 13040
  },
  {
    "departement": 13,
    "slug": "lambesc",
    "name": "Lambesc",
    "codePostal": 13410,
    "codeInsee": 13050
  },
  {
    "departement": 69,
    "slug": "feyzin",
    "name": "Feyzin",
    "codePostal": 69320,
    "codeInsee": 69276
  },
  {
    "departement": 72,
    "slug": "ferte-bernard",
    "name": "La Ferté-Bernard",
    "codePostal": 72400,
    "codeInsee": 72132
  },
  {
    "departement": 972,
    "slug": "le-vauclin",
    "name": "Vauclin",
    "codePostal": 97280,
    "codeInsee": 97232
  },
  {
    "departement": 77,
    "slug": "thorigny-sur-marne",
    "name": "Thorigny-sur-Marne",
    "codePostal": 77400,
    "codeInsee": 77464
  },
  {
    "departement": 67,
    "slug": "molsheim",
    "name": "Molsheim",
    "codePostal": 67120,
    "codeInsee": 67300
  },
  {
    "departement": 76,
    "slug": "petit-couronne",
    "name": "Petit-Couronne",
    "codePostal": 76650,
    "codeInsee": 76497
  },
  {
    "departement": 18,
    "slug": "saint-doulchard",
    "name": "Saint-Doulchard",
    "codePostal": 18230,
    "codeInsee": 18205
  },
  {
    "departement": 29,
    "slug": "landivisiau",
    "name": "Landivisiau",
    "codePostal": 29400,
    "codeInsee": 29105
  },
  {
    "departement": 29,
    "slug": "fouesnant",
    "name": "Fouesnant",
    "codePostal": 29170,
    "codeInsee": 29058
  },
  {
    "departement": 59,
    "slug": "escaudain",
    "name": "Escaudain",
    "codePostal": 59124,
    "codeInsee": 59205
  },
  {
    "departement": 91,
    "slug": "crosne",
    "name": "Crosne",
    "codePostal": 91560,
    "codeInsee": 91191
  },
  {
    "departement": 34,
    "slug": "villeneuve-les-maguelone",
    "name": "Villeneuve-lès-Maguelone",
    "codePostal": 34750,
    "codeInsee": 34337
  },
  {
    "departement": 91,
    "slug": "fleury-merogis",
    "name": "Fleury-Mérogis",
    "codePostal": 91700,
    "codeInsee": 91235
  },
  {
    "departement": 83,
    "slug": "beausset",
    "name": "Le Beausset",
    "codePostal": 83330,
    "codeInsee": 83016
  },
  {
    "departement": 21,
    "slug": "fontaine-les-dijon",
    "name": "Fontaine-lès-Dijon",
    "codePostal": 21121,
    "codeInsee": 21278
  },
  {
    "departement": 31,
    "slug": "auterive-31",
    "name": "Auterive",
    "codePostal": 31190,
    "codeInsee": 31033
  },
  {
    "departement": 71,
    "slug": "paray-le-monial",
    "name": "Paray-le-Monial",
    "codePostal": 71600,
    "codeInsee": 71342
  },
  {
    "departement": 33,
    "slug": "taillan-medoc",
    "name": "Le Taillan-Médoc",
    "codePostal": 33320,
    "codeInsee": 33519
  },
  {
    "departement": 76,
    "slug": "gonfreville-l-orcher",
    "name": "Gonfreville-l'Orcher",
    "codePostal": 76700,
    "codeInsee": 76305
  },
  {
    "departement": 66,
    "slug": "cabestany",
    "name": "Cabestany",
    "codePostal": 66330,
    "codeInsee": 66028
  },
  {
    "departement": 56,
    "slug": "ploermel",
    "name": "Ploërmel",
    "codePostal": 56800,
    "codeInsee": 56165
  },
  {
    "departement": 1,
    "slug": "miribel-01",
    "name": "Miribel",
    "codePostal": 1700,
    "codeInsee": 1249
  },
  {
    "departement": 77,
    "slug": "ferte-sous-jouarre",
    "name": "La Ferté-sous-Jouarre",
    "codePostal": 77260,
    "codeInsee": 77183
  },
  {
    "departement": 83,
    "slug": "muy",
    "name": "Le Muy",
    "codePostal": 83490,
    "codeInsee": 83086
  },
  {
    "departement": 71,
    "slug": "saint-vallier-71",
    "name": "Saint-Vallier",
    "codePostal": 71230,
    "codeInsee": 71486
  },
  {
    "departement": 78,
    "slug": "magny-les-hameaux",
    "name": "Magny-les-Hameaux",
    "codePostal": 78114,
    "codeInsee": 78356
  },
  {
    "departement": 13,
    "slug": "gignac-la-nerthe",
    "name": "Gignac-la-Nerthe",
    "codePostal": 13180,
    "codeInsee": 13043
  },
  {
    "departement": 59,
    "slug": "merville-59",
    "name": "Merville",
    "codePostal": 59660,
    "codeInsee": 59400
  },
  {
    "departement": 3,
    "slug": "domerat",
    "name": "Domérat",
    "codePostal": 3410,
    "codeInsee": 3101
  },
  {
    "departement": 95,
    "slug": "ezanville",
    "name": "Ézanville",
    "codePostal": 95460,
    "codeInsee": 95229
  },
  {
    "departement": 83,
    "slug": "lorgues",
    "name": "Lorgues",
    "codePostal": 83510,
    "codeInsee": 83072
  },
  {
    "departement": 26,
    "slug": "livron-sur-drome",
    "name": "Livron-sur-Drôme",
    "codePostal": 26250,
    "codeInsee": 26165
  },
  {
    "departement": 74,
    "slug": "chamonix-mont-blanc",
    "name": "Chamonix-Mont-Blanc",
    "codePostal": 74400,
    "codeInsee": 74056
  },
  {
    "departement": 47,
    "slug": "tonneins",
    "name": "Tonneins",
    "codePostal": 47400,
    "codeInsee": 47310
  },
  {
    "departement": 68,
    "slug": "pfastatt",
    "name": "Pfastatt",
    "codePostal": 68120,
    "codeInsee": 68256
  },
  {
    "departement": 95,
    "slug": "beaumont-sur-oise",
    "name": "Beaumont-sur-Oise",
    "codePostal": 95260,
    "codeInsee": 95052
  },
  {
    "departement": 973,
    "slug": "mana",
    "name": "Mana",
    "codePostal": 97360,
    "codeInsee": 97306
  },
  {
    "departement": 76,
    "slug": "lillebonne",
    "name": "Lillebonne",
    "codePostal": 76170,
    "codeInsee": 76384
  },
  {
    "departement": 69,
    "slug": "grigny-69",
    "name": "Grigny",
    "codePostal": 69520,
    "codeInsee": 69096
  },
  {
    "departement": 971,
    "slug": "st-barthelemy",
    "name": "Saint-Barthélemy",
    "codePostal": 97133,
    "codeInsee": 97123
  },
  {
    "departement": 33,
    "slug": "haillan",
    "name": "Le Haillan",
    "codePostal": 33185,
    "codeInsee": 33200
  },
  {
    "departement": 40,
    "slug": "saint-pierre-du-mont-40",
    "name": "Saint-Pierre-du-Mont",
    "codePostal": 40280,
    "codeInsee": 40281
  },
  {
    "departement": 1,
    "slug": "saint-genis-pouilly",
    "name": "Saint-Genis-Pouilly",
    "codePostal": 1630,
    "codeInsee": 1354
  },
  {
    "departement": 17,
    "slug": "aytre",
    "name": "Aytré",
    "codePostal": 17440,
    "codeInsee": 17028
  },
  {
    "departement": 78,
    "slug": "meulan-en-yvelines",
    "name": "Meulan-en-Yvelines",
    "codePostal": 78250,
    "codeInsee": 78401
  },
  {
    "departement": 27,
    "slug": "pont-audemer",
    "name": "Pont-Audemer",
    "codePostal": 27500,
    "codeInsee": 27467
  },
  {
    "departement": 34,
    "slug": "saint-gely-du-fesc",
    "name": "Saint-Gély-du-Fesc",
    "codePostal": 34980,
    "codeInsee": 34255
  },
  {
    "departement": 62,
    "slug": "beuvry",
    "name": "Beuvry",
    "codePostal": 62660,
    "codeInsee": 62126
  },
  {
    "departement": 45,
    "slug": "pithiviers",
    "name": "Pithiviers",
    "codePostal": 45300,
    "codeInsee": 45252
  },
  {
    "departement": 56,
    "slug": "queven",
    "name": "Quéven",
    "codePostal": 56530,
    "codeInsee": 56185
  },
  {
    "departement": 62,
    "slug": "rouvroy-62",
    "name": "Rouvroy",
    "codePostal": 62320,
    "codeInsee": 62724
  },
  {
    "departement": 1,
    "slug": "belley",
    "name": "Belley",
    "codePostal": 1300,
    "codeInsee": 1034
  },
  {
    "departement": 88,
    "slug": "gerardmer",
    "name": "Gérardmer",
    "codePostal": 88400,
    "codeInsee": 88196
  },
  {
    "departement": 971,
    "slug": "trois-rivieres",
    "name": "Trois-Rivières",
    "codePostal": 97114,
    "codeInsee": 97132
  },
  {
    "departement": 31,
    "slug": "castelginest",
    "name": "Castelginest",
    "codePostal": 31780,
    "codeInsee": 31116
  },
  {
    "departement": 95,
    "slug": "beauchamp",
    "name": "Beauchamp",
    "codePostal": 95250,
    "codeInsee": 95051
  },
  {
    "departement": 43,
    "slug": "monistrol-sur-loire",
    "name": "Monistrol-sur-Loire",
    "codePostal": 43120,
    "codeInsee": 43137
  },
  {
    "departement": 34,
    "slug": "saint-jean-de-vedas",
    "name": "Saint-Jean-de-Védas",
    "codePostal": 34430,
    "codeInsee": 34270
  },
  {
    "departement": 59,
    "slug": "onnaing",
    "name": "Onnaing",
    "codePostal": 59264,
    "codeInsee": 59447
  },
  {
    "departement": 49,
    "slug": "saint-barthelemy-d-anjou",
    "name": "Saint-Barthélemy-d'Anjou",
    "codePostal": 49124,
    "codeInsee": 49267
  },
  {
    "departement": 26,
    "slug": "saint-paul-trois-chateaux",
    "name": "Saint-Paul-Trois-Châteaux",
    "codePostal": 26130,
    "codeInsee": 26324
  },
  {
    "departement": 972,
    "slug": "le-marin",
    "name": "Marin",
    "codePostal": 97290,
    "codeInsee": 97217
  },
  {
    "departement": 56,
    "slug": "sene",
    "name": "Séné",
    "codePostal": 56860,
    "codeInsee": 56243
  },
  {
    "departement": 77,
    "slug": "montevrain",
    "name": "Montévrain",
    "codePostal": 77144,
    "codeInsee": 77307
  },
  {
    "departement": 66,
    "slug": "saint-laurent-de-la-salanque",
    "name": "Saint-Laurent-de-la-Salanque",
    "codePostal": 66250,
    "codeInsee": 66180
  },
  {
    "departement": 64,
    "slug": "urrugne",
    "name": "Urrugne",
    "codePostal": 64122,
    "codeInsee": 64545
  },
  {
    "departement": 42,
    "slug": "unieux",
    "name": "Unieux",
    "codePostal": 42240,
    "codeInsee": 42316
  },
  {
    "departement": 59,
    "slug": "aulnoye-aymeries",
    "name": "Aulnoye-Aymeries",
    "codePostal": 59620,
    "codeInsee": 59033
  },
  {
    "departement": 13,
    "slug": "port-saint-louis-du-rhone",
    "name": "Port-Saint-Louis-du-Rhône",
    "codePostal": 13230,
    "codeInsee": 13078
  },
  {
    "departement": 31,
    "slug": "villeneuve-tolosane",
    "name": "Villeneuve-Tolosane",
    "codePostal": 31270,
    "codeInsee": 31588
  },
  {
    "departement": 30,
    "slug": "marguerittes",
    "name": "Marguerittes",
    "codePostal": 30320,
    "codeInsee": 30156
  },
  {
    "departement": 92,
    "slug": "vaucresson",
    "name": "Vaucresson",
    "codePostal": 92420,
    "codeInsee": 92076
  },
  {
    "departement": 62,
    "slug": "libercourt",
    "name": "Libercourt",
    "codePostal": 62820,
    "codeInsee": 62907
  },
  {
    "departement": 13,
    "slug": "cabries",
    "name": "Cabriès",
    "codePostal": 13480,
    "codeInsee": 13019
  },
  {
    "departement": 77,
    "slug": "cesson",
    "name": "Cesson",
    "codePostal": 77240,
    "codeInsee": 77067
  },
  {
    "departement": 30,
    "slug": "uzes",
    "name": "Uzès",
    "codePostal": 30700,
    "codeInsee": 30334
  },
  {
    "departement": 13,
    "slug": "roquevaire",
    "name": "Roquevaire",
    "codePostal": 13360,
    "codeInsee": 13086
  },
  {
    "departement": 35,
    "slug": "saint-gregoire-35",
    "name": "Saint-Grégoire",
    "codePostal": 35760,
    "codeInsee": 35278
  },
  {
    "departement": 3,
    "slug": "bellerive-sur-allier",
    "name": "Bellerive-sur-Allier",
    "codePostal": 3700,
    "codeInsee": 3023
  },
  {
    "departement": 31,
    "slug": "saint-lys",
    "name": "Saint-Lys",
    "codePostal": 31470,
    "codeInsee": 31499
  },
  {
    "departement": 54,
    "slug": "jarny",
    "name": "Jarny",
    "codePostal": 54800,
    "codeInsee": 54273
  },
  {
    "departement": 13,
    "slug": "velaux",
    "name": "Velaux",
    "codePostal": 13880,
    "codeInsee": 13112
  },
  {
    "departement": 34,
    "slug": "perols",
    "name": "Pérols",
    "codePostal": 34470,
    "codeInsee": 34198
  },
  {
    "departement": 42,
    "slug": "veauche",
    "name": "Veauche",
    "codePostal": 42340,
    "codeInsee": 42323
  },
  {
    "departement": 31,
    "slug": "leguevin",
    "name": "Léguevin",
    "codePostal": 31490,
    "codeInsee": 31291
  },
  {
    "departement": 973,
    "slug": "maripasoula",
    "name": "Maripasoula",
    "codePostal": 97370,
    "codeInsee": 97353
  },
  {
    "departement": 95,
    "slug": "groslay",
    "name": "Groslay",
    "codePostal": 95410,
    "codeInsee": 95288
  },
  {
    "departement": 69,
    "slug": "dardilly",
    "name": "Dardilly",
    "codePostal": 69570,
    "codeInsee": 69072
  },
  {
    "departement": 38,
    "slug": "crolles",
    "name": "Crolles",
    "codePostal": 38190,
    "codeInsee": 38140
  },
  {
    "departement": 54,
    "slug": "essey-les-nancy",
    "name": "Essey-lès-Nancy",
    "codePostal": 54270,
    "codeInsee": 54184
  },
  {
    "departement": 78,
    "slug": "bougival",
    "name": "Bougival",
    "codePostal": 78380,
    "codeInsee": 78092
  },
  {
    "departement": 76,
    "slug": "saint-pierre-les-elbeuf",
    "name": "Saint-Pierre-lès-Elbeuf",
    "codePostal": 76320,
    "codeInsee": 76640
  },
  {
    "departement": 34,
    "slug": "grande-motte",
    "name": "La Grande-Motte",
    "codePostal": 34280,
    "codeInsee": 34344
  },
  {
    "departement": 76,
    "slug": "bihorel",
    "name": "Bihorel",
    "codePostal": 76420,
    "codeInsee": 76095
  },
  {
    "departement": 44,
    "slug": "vallet",
    "name": "Vallet",
    "codePostal": 44330,
    "codeInsee": 44212
  },
  {
    "departement": 74,
    "slug": "meythet",
    "name": "Meythet",
    "codePostal": 74960,
    "codeInsee": 74182
  },
  {
    "departement": 7,
    "slug": "privas",
    "name": "Privas",
    "codePostal": 7000,
    "codeInsee": 7186
  },
  {
    "departement": 24,
    "slug": "coulounieix-chamiers",
    "name": "Coulounieix-Chamiers",
    "codePostal": 24660,
    "codeInsee": 24138
  },
  {
    "departement": 63,
    "slug": "lempdes",
    "name": "Lempdes",
    "codePostal": 63370,
    "codeInsee": 63193
  },
  {
    "departement": 91,
    "slug": "saint-pierre-du-perray",
    "name": "Saint-Pierre-du-Perray",
    "codePostal": 91280,
    "codeInsee": 91573
  },
  {
    "departement": 30,
    "slug": "aigues-mortes",
    "name": "Aigues-Mortes",
    "codePostal": 30220,
    "codeInsee": 30003
  },
  {
    "departement": 56,
    "slug": "larmor-plage",
    "name": "Larmor-Plage",
    "codePostal": 56260,
    "codeInsee": 56107
  },
  {
    "departement": 13,
    "slug": "lancon-provence",
    "name": "Lançon-Provence",
    "codePostal": 13680,
    "codeInsee": 13051
  },
  {
    "departement": 70,
    "slug": "lure-70",
    "name": "Luré",
    "codePostal": 70200,
    "codeInsee": 70310
  },
  {
    "departement": 29,
    "slug": "pont-l-abbe",
    "name": "Pont-l'Abbé",
    "codePostal": 29120,
    "codeInsee": 29220
  },
  {
    "departement": 69,
    "slug": "irigny",
    "name": "Irigny",
    "codePostal": 69540,
    "codeInsee": 69100
  },
  {
    "departement": 91,
    "slug": "breuillet-91",
    "name": "Breuillet",
    "codePostal": 91650,
    "codeInsee": 91105
  },
  {
    "departement": 83,
    "slug": "farlede",
    "name": "La Farlède",
    "codePostal": 83210,
    "codeInsee": 83054
  },
  {
    "departement": 71,
    "slug": "digoin",
    "name": "Digoin",
    "codePostal": 71160,
    "codeInsee": 71176
  },
  {
    "departement": 12,
    "slug": "saint-affrique",
    "name": "Saint-Affrique",
    "codePostal": 12400,
    "codeInsee": 12208
  },
  {
    "departement": 84,
    "slug": "thor",
    "name": "Le Thor",
    "codePostal": 84250,
    "codeInsee": 84132
  },
  {
    "departement": 14,
    "slug": "falaise-14",
    "name": "Falaise",
    "codePostal": 14700,
    "codeInsee": 14258
  },
  {
    "departement": 59,
    "slug": "chapelle-d-armentieres",
    "name": "La Chapelle-d'Armentières",
    "codePostal": 59930,
    "codeInsee": 59143
  },
  {
    "departement": 87,
    "slug": "couzeix",
    "name": "Couzeix",
    "codePostal": 87270,
    "codeInsee": 87050
  },
  {
    "departement": 59,
    "slug": "linselles",
    "name": "Linselles",
    "codePostal": 59126,
    "codeInsee": 59352
  },
  {
    "departement": 62,
    "slug": "wingles",
    "name": "Wingles",
    "codePostal": 62410,
    "codeInsee": 62895
  },
  {
    "departement": 34,
    "slug": "pezenas",
    "name": "Pézenas",
    "codePostal": 34120,
    "codeInsee": 34199
  },
  {
    "departement": 85,
    "slug": "chantonnay",
    "name": "Chantonnay",
    "codePostal": 85110,
    "codeInsee": 85051
  },
  {
    "departement": 73,
    "slug": "saint-jean-de-maurienne",
    "name": "Saint-Jean-de-Maurienne",
    "codePostal": 73300,
    "codeInsee": 73248
  },
  {
    "departement": 30,
    "slug": "angles-30",
    "name": "Angles",
    "codePostal": 30133,
    "codeInsee": 30011
  },
  {
    "departement": 88,
    "slug": "golbey",
    "name": "Golbey",
    "codePostal": 88190,
    "codeInsee": 88209
  },
  {
    "departement": 45,
    "slug": "checy",
    "name": "Chécy",
    "codePostal": 45430,
    "codeInsee": 45089
  },
  {
    "departement": 27,
    "slug": "andelys",
    "name": "Andelys",
    "codePostal": 27700,
    "codeInsee": 27016
  },
  {
    "departement": 57,
    "slug": "behren-les-forbach",
    "name": "Behren-lès-Forbach",
    "codePostal": 57460,
    "codeInsee": 57058
  },
  {
    "departement": 85,
    "slug": "saint-jean-de-monts",
    "name": "Saint-Jean-de-Monts",
    "codePostal": 85160,
    "codeInsee": 85234
  },
  {
    "departement": 78,
    "slug": "jouy-en-josas",
    "name": "Jouy-en-Josas",
    "codePostal": 78350,
    "codeInsee": 78322
  },
  {
    "departement": 13,
    "slug": "venelles",
    "name": "Venelles",
    "codePostal": 13770,
    "codeInsee": 13113
  },
  {
    "departement": 45,
    "slug": "saint-jean-le-blanc-45",
    "name": "Saint-Jean-le-Blanc",
    "codePostal": 45650,
    "codeInsee": 45286
  },
  {
    "departement": 30,
    "slug": "grau-du-roi",
    "name": "Le Grau-du-Roi",
    "codePostal": 30240,
    "codeInsee": 30133
  },
  {
    "departement": 59,
    "slug": "orchies",
    "name": "Orchies",
    "codePostal": 59310,
    "codeInsee": 59449
  },
  {
    "departement": 59,
    "slug": "cappelle-la-grande",
    "name": "Cappelle-la-Grande",
    "codePostal": 59180,
    "codeInsee": 59131
  },
  {
    "departement": 79,
    "slug": "mauleon",
    "name": "Mauléon",
    "codePostal": 79700,
    "codeInsee": 79079
  },
  {
    "departement": 66,
    "slug": "rivesaltes",
    "name": "Rivesaltes",
    "codePostal": 66600,
    "codeInsee": 66164
  },
  {
    "departement": 62,
    "slug": "billy-montigny",
    "name": "Billy-Montigny",
    "codePostal": 62420,
    "codeInsee": 62133
  },
  {
    "departement": 1,
    "slug": "divonne-les-bains",
    "name": "Divonne-les-Bains",
    "codePostal": 1220,
    "codeInsee": 1143
  },
  {
    "departement": 76,
    "slug": "harfleur",
    "name": "Harfleur",
    "codePostal": 76700,
    "codeInsee": 76341
  },
  {
    "departement": 35,
    "slug": "vern-sur-seiche",
    "name": "Vern-sur-Seiche",
    "codePostal": 35770,
    "codeInsee": 35352
  },
  {
    "departement": 35,
    "slug": "janze",
    "name": "Janzé",
    "codePostal": 35150,
    "codeInsee": 35136
  },
  {
    "departement": 74,
    "slug": "evian-les-bains",
    "name": "Évian-les-Bains",
    "codePostal": 74500,
    "codeInsee": 74119
  },
  {
    "departement": 76,
    "slug": "saint-aubin-les-elbeuf",
    "name": "Saint-Aubin-lès-Elbeuf",
    "codePostal": 76410,
    "codeInsee": 76561
  },
  {
    "departement": 54,
    "slug": "mont-saint-martin-54",
    "name": "Mont-Saint-Martin",
    "codePostal": 54350,
    "codeInsee": 54382
  },
  {
    "departement": 85,
    "slug": "aizenay",
    "name": "Aizenay",
    "codePostal": 85190,
    "codeInsee": 85003
  },
  {
    "departement": 37,
    "slug": "ballan-mire",
    "name": "Ballan-Miré",
    "codePostal": 37510,
    "codeInsee": 37018
  },
  {
    "departement": 59,
    "slug": "perenchies",
    "name": "Pérenchies",
    "codePostal": 59840,
    "codeInsee": 59457
  },
  {
    "departement": 76,
    "slug": "notre-dame-de-gravenchon",
    "name": "Notre-Dame-de-Gravenchon",
    "codePostal": 76330,
    "codeInsee": 76476
  },
  {
    "departement": 54,
    "slug": "malzeville",
    "name": "Malzéville",
    "codePostal": 54220,
    "codeInsee": 54339
  },
  {
    "departement": 14,
    "slug": "honfleur",
    "name": "Honfleur",
    "codePostal": 14600,
    "codeInsee": 14333
  },
  {
    "departement": 31,
    "slug": "pibrac",
    "name": "Pibrac",
    "codePostal": 31820,
    "codeInsee": 31417
  },
  {
    "departement": 44,
    "slug": "basse-goulaine",
    "name": "Basse-Goulaine",
    "codePostal": 44115,
    "codeInsee": 44009
  },
  {
    "departement": 81,
    "slug": "saint-sulpice-81",
    "name": "Saint-Sulpice",
    "codePostal": 81370,
    "codeInsee": 81271
  },
  {
    "departement": 63,
    "slug": "romagnat",
    "name": "Romagnat",
    "codePostal": 63540,
    "codeInsee": 63307
  },
  {
    "departement": 29,
    "slug": "plabennec",
    "name": "Plabennec",
    "codePostal": 29860,
    "codeInsee": 29160
  },
  {
    "departement": 52,
    "slug": "langres",
    "name": "Langres",
    "codePostal": 52200,
    "codeInsee": 52269
  },
  {
    "departement": 39,
    "slug": "champagnole",
    "name": "Champagnole",
    "codePostal": 39300,
    "codeInsee": 39097
  },
  {
    "departement": 31,
    "slug": "grenade",
    "name": "Grenade",
    "codePostal": 31330,
    "codeInsee": 31232
  },
  {
    "departement": 971,
    "slug": "goyave",
    "name": "Goyave",
    "codePostal": 97128,
    "codeInsee": 97114
  },
  {
    "departement": 38,
    "slug": "saint-marcellin",
    "name": "Saint-Marcellin",
    "codePostal": 38160,
    "codeInsee": 38416
  },
  {
    "departement": 44,
    "slug": "saint-philbert-de-grand-lieu",
    "name": "Saint-Philbert-de-Grand-Lieu",
    "codePostal": 44310,
    "codeInsee": 44188
  },
  {
    "departement": 77,
    "slug": "tournan-en-brie",
    "name": "Tournan-en-Brie",
    "codePostal": 77220,
    "codeInsee": 77470
  },
  {
    "departement": 38,
    "slug": "vif",
    "name": "Vif",
    "codePostal": 38450,
    "codeInsee": 38545
  },
  {
    "departement": 77,
    "slug": "dammartin-en-goele",
    "name": "Dammartin-en-Goële",
    "codePostal": 77230,
    "codeInsee": 77153
  },
  {
    "departement": 31,
    "slug": "aucamville-31",
    "name": "Aucamville",
    "codePostal": 31140,
    "codeInsee": 31022
  },
  {
    "departement": 91,
    "slug": "quincy-sous-senart",
    "name": "Quincy-sous-Sénart",
    "codePostal": 91480,
    "codeInsee": 91514
  },
  {
    "departement": 65,
    "slug": "bagneres-de-bigorre",
    "name": "Bagnères-de-Bigorre",
    "codePostal": 65200,
    "codeInsee": 65059
  },
  {
    "departement": 976,
    "slug": "chirongui",
    "name": "Chirongui",
    "codePostal": 97620,
    "codeInsee": 97606
  },
  {
    "departement": 33,
    "slug": "coutras",
    "name": "Coutras",
    "codePostal": 33230,
    "codeInsee": 33138
  },
  {
    "departement": 971,
    "slug": "petit-canal",
    "name": "Petit-Canal",
    "codePostal": 97131,
    "codeInsee": 97119
  },
  {
    "departement": 83,
    "slug": "bandol",
    "name": "Bandol",
    "codePostal": 83150,
    "codeInsee": 83009
  },
  {
    "departement": 1,
    "slug": "ferney-voltaire",
    "name": "Ferney-Voltaire",
    "codePostal": 1210,
    "codeInsee": 1160
  },
  {
    "departement": 88,
    "slug": "remiremont",
    "name": "Remiremont",
    "codePostal": 88200,
    "codeInsee": 88383
  },
  {
    "departement": 60,
    "slug": "margny-les-compiegne",
    "name": "Margny-lès-Compiègne",
    "codePostal": 60280,
    "codeInsee": 60382
  },
  {
    "departement": 50,
    "slug": "avranches",
    "name": "Avranches",
    "codePostal": 50300,
    "codeInsee": 50025
  },
  {
    "departement": 34,
    "slug": "clermont-l-herault",
    "name": "Clermont-l'Hérault",
    "codePostal": 34800,
    "codeInsee": 34079
  },
  {
    "departement": 7,
    "slug": "teil",
    "name": "Le Teil",
    "codePostal": 7400,
    "codeInsee": 7319
  },
  {
    "departement": 34,
    "slug": "cres",
    "name": "Le Crès",
    "codePostal": 34920,
    "codeInsee": 34090
  },
  {
    "departement": 45,
    "slug": "chateauneuf-sur-loire",
    "name": "Châteauneuf-sur-Loire",
    "codePostal": 45110,
    "codeInsee": 45082
  },
  {
    "departement": 33,
    "slug": "saint-loubes",
    "name": "Saint-Loubès",
    "codePostal": 33450,
    "codeInsee": 33433
  },
  {
    "departement": 88,
    "slug": "thaon-les-vosges",
    "name": "Thaon-les-Vosges",
    "codePostal": 88150,
    "codeInsee": 88465
  },
  {
    "departement": 77,
    "slug": "gretz-armainvilliers",
    "name": "Gretz-Armainvilliers",
    "codePostal": 77220,
    "codeInsee": 77215
  },
  {
    "departement": 77,
    "slug": "nangis",
    "name": "Nangis",
    "codePostal": 77370,
    "codeInsee": 77327
  },
  {
    "departement": 33,
    "slug": "parempuyre",
    "name": "Parempuyre",
    "codePostal": 33290,
    "codeInsee": 33312
  },
  {
    "departement": 69,
    "slug": "chaponost",
    "name": "Chaponost",
    "codePostal": 69630,
    "codeInsee": 69043
  },
  {
    "departement": 42,
    "slug": "ricamarie",
    "name": "La Ricamarie",
    "codePostal": 42150,
    "codeInsee": 42183
  },
  {
    "departement": 38,
    "slug": "tour-du-pin",
    "name": "La Tour-du-Pin",
    "codePostal": 38110,
    "codeInsee": 38509
  },
  {
    "departement": 61,
    "slug": "aigle",
    "name": "L'Aigle",
    "codePostal": 61300,
    "codeInsee": 61214
  },
  {
    "departement": 40,
    "slug": "capbreton",
    "name": "Capbreton",
    "codePostal": 40130,
    "codeInsee": 40065
  },
  {
    "departement": 44,
    "slug": "treillieres",
    "name": "Treillières",
    "codePostal": 44119,
    "codeInsee": 44209
  },
  {
    "departement": 38,
    "slug": "roussillon-38",
    "name": "Roussillon",
    "codePostal": 38150,
    "codeInsee": 38344
  },
  {
    "departement": 95,
    "slug": "pierrelaye",
    "name": "Pierrelaye",
    "codePostal": 95480,
    "codeInsee": 95488
  },
  {
    "departement": 971,
    "slug": "gourbeyre",
    "name": "Gourbeyre",
    "codePostal": 97113,
    "codeInsee": 97109
  },
  {
    "departement": 57,
    "slug": "moyeuvre-grande",
    "name": "Moyeuvre-Grande",
    "codePostal": 57250,
    "codeInsee": 57491
  },
  {
    "departement": 68,
    "slug": "thann",
    "name": "Thann",
    "codePostal": 68800,
    "codeInsee": 68334
  },
  {
    "departement": 22,
    "slug": "tregueux",
    "name": "Trégueux",
    "codePostal": 22950,
    "codeInsee": 22360
  },
  {
    "departement": 78,
    "slug": "saint-remy-les-chevreuse",
    "name": "Saint-Rémy-lès-Chevreuse",
    "codePostal": 78470,
    "codeInsee": 78575
  },
  {
    "departement": 42,
    "slug": "feurs",
    "name": "Feurs",
    "codePostal": 42110,
    "codeInsee": 42094
  },
  {
    "departement": 36,
    "slug": "deols",
    "name": "Déols",
    "codePostal": 36130,
    "codeInsee": 36063
  },
  {
    "departement": 69,
    "slug": "belleville-69",
    "name": "Belleville",
    "codePostal": 69220,
    "codeInsee": 69019
  },
  {
    "departement": 26,
    "slug": "crest-26",
    "name": "Crest",
    "codePostal": 26400,
    "codeInsee": 26108
  },
  {
    "departement": 65,
    "slug": "aureilhan-65",
    "name": "Aureilhan",
    "codePostal": 65800,
    "codeInsee": 65047
  },
  {
    "departement": 91,
    "slug": "marcoussis",
    "name": "Marcoussis",
    "codePostal": 91460,
    "codeInsee": 91363
  },
  {
    "departement": 31,
    "slug": "frouzins",
    "name": "Frouzins",
    "codePostal": 31270,
    "codeInsee": 31203
  },
  {
    "departement": 45,
    "slug": "ingre",
    "name": "Ingré",
    "codePostal": 45140,
    "codeInsee": 45169
  },
  {
    "departement": 66,
    "slug": "elne",
    "name": "Elne",
    "codePostal": 66200,
    "codeInsee": 66065
  },
  {
    "departement": 37,
    "slug": "chinon",
    "name": "Chinon",
    "codePostal": 37500,
    "codeInsee": 37072
  },
  {
    "departement": 80,
    "slug": "peronne-80",
    "name": "Péronne",
    "codePostal": 80200,
    "codeInsee": 80620
  },
  {
    "departement": 976,
    "slug": "bandrele",
    "name": "Bandrele",
    "codePostal": 97620,
    "codeInsee": 97603
  },
  {
    "departement": 34,
    "slug": "marseillan-34",
    "name": "Marseillan",
    "codePostal": 34340,
    "codeInsee": 34150
  },
  {
    "departement": 74,
    "slug": "ville-la-grand",
    "name": "Ville-la-Grand",
    "codePostal": 74100,
    "codeInsee": 74305
  },
  {
    "departement": 6,
    "slug": "peymeinade",
    "name": "Peymeinade",
    "codePostal": 6530,
    "codeInsee": 6095
  },
  {
    "departement": 29,
    "slug": "ergue-gaberic",
    "name": "Ergué-Gabéric",
    "codePostal": 29500,
    "codeInsee": 29051
  },
  {
    "departement": 31,
    "slug": "seysses",
    "name": "Seysses",
    "codePostal": 31600,
    "codeInsee": 31547
  },
  {
    "departement": 85,
    "slug": "poire-sur-vie",
    "name": "Le Poiré-sur-Vie",
    "codePostal": 85170,
    "codeInsee": 85178
  },
  {
    "departement": 42,
    "slug": "villars-42",
    "name": "Villars",
    "codePostal": 42390,
    "codeInsee": 42330
  },
  {
    "departement": 78,
    "slug": "noisy-le-roi",
    "name": "Noisy-le-Roi",
    "codePostal": 78590,
    "codeInsee": 78455
  },
  {
    "departement": 29,
    "slug": "crozon",
    "name": "Crozon",
    "codePostal": 29160,
    "codeInsee": 29042
  },
  {
    "departement": 976,
    "slug": "mtsamboro",
    "name": "Mtsamboro",
    "codePostal": 97630,
    "codeInsee": 97612
  },
  {
    "departement": 67,
    "slug": "wissembourg",
    "name": "Wissembourg",
    "codePostal": 67160,
    "codeInsee": 67544
  },
  {
    "departement": 84,
    "slug": "entraigues-sur-la-sorgue",
    "name": "Entraigues-sur-la-Sorgue",
    "codePostal": 84320,
    "codeInsee": 84043
  },
  {
    "departement": 73,
    "slug": "ravoire",
    "name": "La Ravoire",
    "codePostal": 73490,
    "codeInsee": 73213
  },
  {
    "departement": 44,
    "slug": "nort-sur-erdre",
    "name": "Nort-sur-Erdre",
    "codePostal": 44390,
    "codeInsee": 44110
  },
  {
    "departement": 38,
    "slug": "moirans",
    "name": "Moirans",
    "codePostal": 38430,
    "codeInsee": 38239
  },
  {
    "departement": 13,
    "slug": "saint-chamas",
    "name": "Saint-Chamas",
    "codePostal": 13250,
    "codeInsee": 13092
  },
  {
    "departement": 64,
    "slug": "boucau",
    "name": "Boucau",
    "codePostal": 64340,
    "codeInsee": 64140
  },
  {
    "departement": 17,
    "slug": "tonnay-charente",
    "name": "Tonnay-Charente",
    "codePostal": 17430,
    "codeInsee": 17449
  },
  {
    "departement": 21,
    "slug": "auxonne",
    "name": "Auxonne",
    "codePostal": 21130,
    "codeInsee": 21038
  },
  {
    "departement": 95,
    "slug": "plessis-bouchard",
    "name": "Le Plessis-Bouchard",
    "codePostal": 95130,
    "codeInsee": 95491
  },
  {
    "departement": 54,
    "slug": "tomblaine",
    "name": "Tomblaine",
    "codePostal": 54510,
    "codeInsee": 54526
  },
  {
    "departement": 13,
    "slug": "cassis",
    "name": "Cassis",
    "codePostal": 13260,
    "codeInsee": 13022
  },
  {
    "departement": 38,
    "slug": "charvieu-chavagneux",
    "name": "Charvieu-Chavagneux",
    "codePostal": 38230,
    "codeInsee": 38085
  },
  {
    "departement": 42,
    "slug": "sorbiers-42",
    "name": "Sorbiers",
    "codePostal": 42290,
    "codeInsee": 42302
  },
  {
    "departement": 8,
    "slug": "rethel",
    "name": "Rethel",
    "codePostal": 8300,
    "codeInsee": 8362
  },
  {
    "departement": 33,
    "slug": "lege-cap-ferret",
    "name": "Lège-Cap-Ferret",
    "codePostal": 33950,
    "codeInsee": 33236
  },
  {
    "departement": 19,
    "slug": "malemort-sur-correze",
    "name": "Malemort-sur-Corrèze",
    "codePostal": 19360,
    "codeInsee": 19123
  },
  {
    "departement": 62,
    "slug": "achicourt",
    "name": "Achicourt",
    "codePostal": 62217,
    "codeInsee": 62004
  },
  {
    "departement": 73,
    "slug": "bourg-saint-maurice",
    "name": "Bourg-Saint-Maurice",
    "codePostal": 73700,
    "codeInsee": 73054
  },
  {
    "departement": 971,
    "slug": "vieux-habitants",
    "name": "Vieux-Habitants",
    "codePostal": 97119,
    "codeInsee": 97134
  },
  {
    "departement": 54,
    "slug": "saint-nicolas-de-port",
    "name": "Saint-Nicolas-de-Port",
    "codePostal": 54210,
    "codeInsee": 54483
  },
  {
    "departement": 56,
    "slug": "sarzeau",
    "name": "Sarzeau",
    "codePostal": 56370,
    "codeInsee": 56240
  },
  {
    "departement": 78,
    "slug": "beynes-78",
    "name": "Beynes",
    "codePostal": 78650,
    "codeInsee": 78062
  },
  {
    "departement": 6,
    "slug": "colle-sur-loup",
    "name": "La Colle-sur-Loup",
    "codePostal": 6480,
    "codeInsee": 6044
  },
  {
    "departement": 59,
    "slug": "fresnes-sur-escaut",
    "name": "Fresnes-sur-Escaut",
    "codePostal": 59970,
    "codeInsee": 59253
  },
  {
    "departement": 84,
    "slug": "morieres-les-avignon",
    "name": "Morières-lès-Avignon",
    "codePostal": 84310,
    "codeInsee": 84081
  },
  {
    "departement": 44,
    "slug": "thouare-sur-loire",
    "name": "Thouaré-sur-Loire",
    "codePostal": 44470,
    "codeInsee": 44204
  },
  {
    "departement": 17,
    "slug": "saint-jean-d-angely",
    "name": "Saint-Jean-d'Angély",
    "codePostal": 17400,
    "codeInsee": 17347
  },
  {
    "departement": 35,
    "slug": "rheu",
    "name": "Le Rheu",
    "codePostal": 35650,
    "codeInsee": 35240
  },
  {
    "departement": 62,
    "slug": "vendin-le-vieil",
    "name": "Vendin-le-Vieil",
    "codePostal": 62880,
    "codeInsee": 62842
  },
  {
    "departement": 38,
    "slug": "tullins",
    "name": "Tullins",
    "codePostal": 38210,
    "codeInsee": 38517
  },
  {
    "departement": 29,
    "slug": "carhaix-plouguer",
    "name": "Carhaix-Plouguer",
    "codePostal": 29270,
    "codeInsee": 29024
  },
  {
    "departement": 45,
    "slug": "beaugency",
    "name": "Beaugency",
    "codePostal": 45190,
    "codeInsee": 45028
  },
  {
    "departement": "2B",
    "slug": "borgo",
    "name": "Borgo",
    "codePostal": 20290,
    "codeInsee": "2B042"
  },
  {
    "departement": 59,
    "slug": "wavrin",
    "name": "Wavrin",
    "codePostal": 59136,
    "codeInsee": 59653
  },
  {
    "departement": 69,
    "slug": "gleize",
    "name": "Gleizé",
    "codePostal": 69400,
    "codeInsee": 69092
  },
  {
    "departement": 22,
    "slug": "paimpol",
    "name": "Paimpol",
    "codePostal": 22500,
    "codeInsee": 22162
  },
  {
    "departement": 62,
    "slug": "houdain",
    "name": "Houdain",
    "codePostal": 62150,
    "codeInsee": 62457
  },
  {
    "departement": 38,
    "slug": "vizille",
    "name": "Vizille",
    "codePostal": 38220,
    "codeInsee": 38562
  },
  {
    "departement": 66,
    "slug": "ceret",
    "name": "Céret",
    "codePostal": 66400,
    "codeInsee": 66049
  },
  {
    "departement": 972,
    "slug": "les-trois-ilets",
    "name": "Trois-Îlets",
    "codePostal": 97229,
    "codeInsee": 97231
  },
  {
    "departement": 66,
    "slug": "pia",
    "name": "Pia",
    "codePostal": 66380,
    "codeInsee": 66141
  },
  {
    "departement": 59,
    "slug": "waziers",
    "name": "Waziers",
    "codePostal": 59119,
    "codeInsee": 59654
  },
  {
    "departement": 59,
    "slug": "houplines",
    "name": "Houplines",
    "codePostal": 59116,
    "codeInsee": 59317
  },
  {
    "departement": 63,
    "slug": "cebazat",
    "name": "Cébazat",
    "codePostal": 63118,
    "codeInsee": 63063
  },
  {
    "departement": 13,
    "slug": "sausset-les-pins",
    "name": "Sausset-les-Pins",
    "codePostal": 13960,
    "codeInsee": 13104
  },
  {
    "departement": 77,
    "slug": "serris",
    "name": "Serris",
    "codePostal": 77700,
    "codeInsee": 77449
  },
  {
    "departement": 68,
    "slug": "wintzenheim",
    "name": "Wintzenheim",
    "codePostal": 68920,
    "codeInsee": 68374
  },
  {
    "departement": 59,
    "slug": "nieppe",
    "name": "Nieppe",
    "codePostal": 59850,
    "codeInsee": 59431
  },
  {
    "departement": 40,
    "slug": "saint-vincent-de-tyrosse",
    "name": "Saint-Vincent-de-Tyrosse",
    "codePostal": 40230,
    "codeInsee": 40284
  },
  {
    "departement": 44,
    "slug": "savenay",
    "name": "Savenay",
    "codePostal": 44260,
    "codeInsee": 44195
  },
  {
    "departement": 13,
    "slug": "eguilles",
    "name": "Éguilles",
    "codePostal": 13510,
    "codeInsee": 13032
  },
  {
    "departement": 42,
    "slug": "mably",
    "name": "Mably",
    "codePostal": 42300,
    "codeInsee": 42127
  },
  {
    "departement": 44,
    "slug": "ancenis",
    "name": "Ancenis",
    "codePostal": 44150,
    "codeInsee": 44003
  },
  {
    "departement": 62,
    "slug": "barlin",
    "name": "Barlin",
    "codePostal": 62620,
    "codeInsee": 62083
  },
  {
    "departement": 76,
    "slug": "sainte-adresse",
    "name": "Sainte-Adresse",
    "codePostal": 76310,
    "codeInsee": 76552
  },
  {
    "departement": 971,
    "slug": "bouillante",
    "name": "Bouillante",
    "codePostal": 97132,
    "codeInsee": 97106
  },
  {
    "departement": 38,
    "slug": "claix-38",
    "name": "Claix",
    "codePostal": 38640,
    "codeInsee": 38111
  },
  {
    "departement": 59,
    "slug": "auby",
    "name": "Auby",
    "codePostal": 59950,
    "codeInsee": 59028
  },
  {
    "departement": 87,
    "slug": "isle",
    "name": "Isle",
    "codePostal": 87170,
    "codeInsee": 87075
  },
  {
    "departement": 972,
    "slug": "le-lorrain",
    "name": "Lorrain",
    "codePostal": 97214,
    "codeInsee": 97214
  },
  {
    "departement": 49,
    "slug": "doue-la-fontaine",
    "name": "Doué-la-Fontaine",
    "codePostal": 49700,
    "codeInsee": 49125
  },
  {
    "departement": 29,
    "slug": "saint-renan",
    "name": "Saint-Renan",
    "codePostal": 29290,
    "codeInsee": 29260
  },
  {
    "departement": 57,
    "slug": "talange",
    "name": "Talange",
    "codePostal": 57525,
    "codeInsee": 57663
  },
  {
    "departement": 34,
    "slug": "lodeve",
    "name": "Lodève",
    "codePostal": 34700,
    "codeInsee": 34142
  },
  {
    "departement": 71,
    "slug": "gueugnon",
    "name": "Gueugnon",
    "codePostal": 71130,
    "codeInsee": 71230
  },
  {
    "departement": 22,
    "slug": "perros-guirec",
    "name": "Perros-Guirec",
    "codePostal": 22700,
    "codeInsee": 22168
  },
  {
    "departement": 974,
    "slug": "salazie",
    "name": "Salazie",
    "codePostal": 97433,
    "codeInsee": 97421
  },
  {
    "departement": 35,
    "slug": "guichen",
    "name": "Guichen",
    "codePostal": 35580,
    "codeInsee": 35126
  },
  {
    "departement": 62,
    "slug": "mazingarbe",
    "name": "Mazingarbe",
    "codePostal": 62670,
    "codeInsee": 62563
  },
  {
    "departement": 57,
    "slug": "hettange-grande",
    "name": "Hettange-Grande",
    "codePostal": 57330,
    "codeInsee": 57323
  },
  {
    "departement": 79,
    "slug": "saint-maixent-l-ecole",
    "name": "Saint-Maixent-l'École",
    "codePostal": 79400,
    "codeInsee": 79270
  },
  {
    "departement": 34,
    "slug": "juvignac",
    "name": "Juvignac",
    "codePostal": 34990,
    "codeInsee": 34123
  },
  {
    "departement": 4,
    "slug": "sisteron",
    "name": "Sisteron",
    "codePostal": 4200,
    "codeInsee": 4209
  },
  {
    "departement": 72,
    "slug": "coulaines",
    "name": "Coulaines",
    "codePostal": 72190,
    "codeInsee": 72095
  },
  {
    "departement": 44,
    "slug": "sorinieres",
    "name": "Sorinières",
    "codePostal": 44840,
    "codeInsee": 44198
  },
  {
    "departement": 62,
    "slug": "wimereux",
    "name": "Wimereux",
    "codePostal": 62930,
    "codeInsee": 62893
  },
  {
    "departement": 77,
    "slug": "lesigny-77",
    "name": "Lésigny",
    "codePostal": 77150,
    "codeInsee": 77249
  },
  {
    "departement": 57,
    "slug": "hombourg-haut",
    "name": "Hombourg-Haut",
    "codePostal": 57470,
    "codeInsee": 57332
  },
  {
    "departement": 76,
    "slug": "eu",
    "name": "Eu",
    "codePostal": 76260,
    "codeInsee": 76255
  },
  {
    "departement": 67,
    "slug": "souffelweyersheim",
    "name": "Souffelweyersheim",
    "codePostal": 67460,
    "codeInsee": 67471
  },
  {
    "departement": 29,
    "slug": "guilers",
    "name": "Guilers",
    "codePostal": 29820,
    "codeInsee": 29069
  },
  {
    "departement": 83,
    "slug": "bormes-les-mimosas",
    "name": "Bormes-les-Mimosas",
    "codePostal": 83230,
    "codeInsee": 83019
  },
  {
    "departement": 91,
    "slug": "ballancourt-sur-essonne",
    "name": "Ballancourt-sur-Essonne",
    "codePostal": 91610,
    "codeInsee": 91045
  },
  {
    "departement": 33,
    "slug": "langon-33",
    "name": "Langon",
    "codePostal": 33210,
    "codeInsee": 33227
  },
  {
    "departement": 56,
    "slug": "questembert",
    "name": "Questembert",
    "codePostal": 56230,
    "codeInsee": 56184
  },
  {
    "departement": 95,
    "slug": "ecouen",
    "name": "Écouen",
    "codePostal": 95440,
    "codeInsee": 95205
  },
  {
    "departement": 16,
    "slug": "ruelle-sur-touvre",
    "name": "Ruelle-sur-Touvre",
    "codePostal": 16600,
    "codeInsee": 16291
  },
  {
    "departement": 77,
    "slug": "emerainville",
    "name": "Émerainville",
    "codePostal": 77184,
    "codeInsee": 77169
  },
  {
    "departement": 35,
    "slug": "bain-de-bretagne",
    "name": "Bain-de-Bretagne",
    "codePostal": 35470,
    "codeInsee": 35012
  },
  {
    "departement": 32,
    "slug": "isle-jourdain-32",
    "name": "L'Isle-Jourdain",
    "codePostal": 32600,
    "codeInsee": 32160
  },
  {
    "departement": 56,
    "slug": "languidic",
    "name": "Languidic",
    "codePostal": 56440,
    "codeInsee": 56101
  },
  {
    "departement": 74,
    "slug": "scionzier",
    "name": "Scionzier",
    "codePostal": 74950,
    "codeInsee": 74264
  },
  {
    "departement": 95,
    "slug": "saint-prix-95",
    "name": "Saint-Prix",
    "codePostal": 95390,
    "codeInsee": 95574
  },
  {
    "departement": 38,
    "slug": "villard-bonnot",
    "name": "Villard-Bonnot",
    "codePostal": 38190,
    "codeInsee": 38547
  },
  {
    "departement": 7,
    "slug": "saint-peray",
    "name": "Saint-Péray",
    "codePostal": 7130,
    "codeInsee": 7281
  },
  {
    "departement": 40,
    "slug": "soustons",
    "name": "Soustons",
    "codePostal": 40140,
    "codeInsee": 40310
  },
  {
    "departement": 17,
    "slug": "perigny-17",
    "name": "Périgny",
    "codePostal": 17180,
    "codeInsee": 17274
  },
  {
    "departement": 22,
    "slug": "guingamp",
    "name": "Guingamp",
    "codePostal": 22200,
    "codeInsee": 22070
  },
  {
    "departement": 59,
    "slug": "aulnoy-lez-valenciennes",
    "name": "Aulnoy-lez-Valenciennes",
    "codePostal": 59300,
    "codeInsee": 59032
  },
  {
    "departement": 53,
    "slug": "saint-berthevin",
    "name": "Saint-Berthevin",
    "codePostal": 53940,
    "codeInsee": 53201
  },
  {
    "departement": 69,
    "slug": "neuville-sur-saone",
    "name": "Neuville-sur-Saône",
    "codePostal": 69250,
    "codeInsee": 69143
  },
  {
    "departement": 30,
    "slug": "rochefort-du-gard",
    "name": "Rochefort-du-Gard",
    "codePostal": 30650,
    "codeInsee": 30217
  },
  {
    "departement": 27,
    "slug": "gaillon",
    "name": "Gaillon",
    "codePostal": 27600,
    "codeInsee": 27275
  },
  {
    "departement": 1,
    "slug": "meximieux",
    "name": "Meximieux",
    "codePostal": 1800,
    "codeInsee": 1244
  },
  {
    "departement": 66,
    "slug": "thuir",
    "name": "Thuir",
    "codePostal": 66300,
    "codeInsee": 66210
  },
  {
    "departement": 68,
    "slug": "soultz-haut-rhin",
    "name": "Soultz-Haut-Rhin",
    "codePostal": 68360,
    "codeInsee": 68315
  },
  {
    "departement": 7,
    "slug": "bourg-saint-andeol",
    "name": "Bourg-Saint-Andéol",
    "codePostal": 7700,
    "codeInsee": 7042
  },
  {
    "departement": 44,
    "slug": "trignac",
    "name": "Trignac",
    "codePostal": 44570,
    "codeInsee": 44210
  },
  {
    "departement": 35,
    "slug": "chartres-de-bretagne",
    "name": "Chartres-de-Bretagne",
    "codePostal": 35131,
    "codeInsee": 35066
  },
  {
    "departement": 85,
    "slug": "saint-gilles-croix-de-vie",
    "name": "Saint-Gilles-Croix-de-Vie",
    "codePostal": 85800,
    "codeInsee": 85222
  },
  {
    "departement": 70,
    "slug": "luxeuil-les-bains",
    "name": "Luxeuil-les-Bains",
    "codePostal": 70300,
    "codeInsee": 70311
  },
  {
    "departement": 89,
    "slug": "avallon",
    "name": "Avallon",
    "codePostal": 89200,
    "codeInsee": 89025
  },
  {
    "departement": 68,
    "slug": "ensisheim",
    "name": "Ensisheim",
    "codePostal": 68190,
    "codeInsee": 68082
  },
  {
    "departement": 66,
    "slug": "bompas-66",
    "name": "Bompas",
    "codePostal": 66430,
    "codeInsee": 66021
  },
  {
    "departement": 33,
    "slug": "artigues-pres-bordeaux",
    "name": "Artigues-près-Bordeaux",
    "codePostal": 33370,
    "codeInsee": 33013
  },
  {
    "departement": 78,
    "slug": "louveciennes",
    "name": "Louveciennes",
    "codePostal": 78430,
    "codeInsee": 78350
  },
  {
    "departement": 89,
    "slug": "migennes",
    "name": "Migennes",
    "codePostal": 89400,
    "codeInsee": 89257
  },
  {
    "departement": 17,
    "slug": "lagord",
    "name": "Lagord",
    "codePostal": 17140,
    "codeInsee": 17200
  },
  {
    "departement": 29,
    "slug": "rosporden",
    "name": "Rosporden",
    "codePostal": 29140,
    "codeInsee": 29241
  },
  {
    "departement": 33,
    "slug": "martignas-sur-jalle",
    "name": "Martignas-sur-Jalle",
    "codePostal": 33127,
    "codeInsee": 33273
  },
  {
    "departement": 59,
    "slug": "feignies",
    "name": "Feignies",
    "codePostal": 59750,
    "codeInsee": 59225
  },
  {
    "departement": 33,
    "slug": "mios",
    "name": "Mios",
    "codePostal": 33380,
    "codeInsee": 33284
  },
  {
    "departement": 8,
    "slug": "revin",
    "name": "Revin",
    "codePostal": 8500,
    "codeInsee": 8363
  },
  {
    "departement": 50,
    "slug": "valognes",
    "name": "Valognes",
    "codePostal": 50700,
    "codeInsee": 50615
  },
  {
    "departement": 35,
    "slug": "mordelles",
    "name": "Mordelles",
    "codePostal": 35310,
    "codeInsee": 35196
  },
  {
    "departement": 22,
    "slug": "langueux",
    "name": "Langueux",
    "codePostal": 22360,
    "codeInsee": 22106
  },
  {
    "departement": 91,
    "slug": "saint-germain-les-corbeil",
    "name": "Saint-Germain-lès-Corbeil",
    "codePostal": 91250,
    "codeInsee": 91553
  },
  {
    "departement": 91,
    "slug": "lisses",
    "name": "Lisses",
    "codePostal": 91090,
    "codeInsee": 91340
  },
  {
    "departement": 60,
    "slug": "liancourt",
    "name": "Liancourt",
    "codePostal": 60140,
    "codeInsee": 60360
  },
  {
    "departement": 38,
    "slug": "pontcharra",
    "name": "Pontcharra",
    "codePostal": 38530,
    "codeInsee": 38314
  },
  {
    "departement": 45,
    "slug": "saint-denis-en-val",
    "name": "Saint-Denis-en-Val",
    "codePostal": 45560,
    "codeInsee": 45274
  },
  {
    "departement": 54,
    "slug": "neuves-maisons",
    "name": "Neuves-Maisons",
    "codePostal": 54230,
    "codeInsee": 54397
  },
  {
    "departement": 31,
    "slug": "launaguet",
    "name": "Launaguet",
    "codePostal": 31140,
    "codeInsee": 31282
  },
  {
    "departement": 53,
    "slug": "evron",
    "name": "Évron",
    "codePostal": 53600,
    "codeInsee": 53097
  },
  {
    "departement": 35,
    "slug": "thorigne-fouillard",
    "name": "Thorigné-Fouillard",
    "codePostal": 35235,
    "codeInsee": 35334
  },
  {
    "departement": 62,
    "slug": "leforest",
    "name": "Leforest",
    "codePostal": 62790,
    "codeInsee": 62497
  },
  {
    "departement": 91,
    "slug": "ville-du-bois",
    "name": "La Ville-du-Bois",
    "codePostal": 91620,
    "codeInsee": 91665
  },
  {
    "departement": 62,
    "slug": "divion",
    "name": "Divion",
    "codePostal": 62460,
    "codeInsee": 62270
  },
  {
    "departement": 45,
    "slug": "ferte-saint-aubin",
    "name": "La Ferté-Saint-Aubin",
    "codePostal": 45240,
    "codeInsee": 45146
  },
  {
    "departement": 57,
    "slug": "guenange",
    "name": "Guénange",
    "codePostal": 57310,
    "codeInsee": 57269
  },
  {
    "departement": 59,
    "slug": "quesnoy-sur-deûle",
    "name": "Quesnoy-sur-Deûle",
    "codePostal": 59890,
    "codeInsee": 59482
  },
  {
    "departement": 47,
    "slug": "nerac",
    "name": "Nérac",
    "codePostal": 47600,
    "codeInsee": 47195
  },
  {
    "departement": 16,
    "slug": "couronne",
    "name": "La Couronne",
    "codePostal": 16400,
    "codeInsee": 16113
  },
  {
    "departement": 974,
    "slug": "les-trois-bassins",
    "name": "Trois-Bassins",
    "codePostal": 97434,
    "codeInsee": 97423
  },
  {
    "departement": 41,
    "slug": "vineuil-41",
    "name": "Vineuil",
    "codePostal": 41350,
    "codeInsee": 41295
  },
  {
    "departement": 91,
    "slug": "paray-vieille-poste",
    "name": "Paray-Vieille-Poste",
    "codePostal": 91550,
    "codeInsee": 91479
  },
  {
    "departement": 49,
    "slug": "montreuil-juigne",
    "name": "Montreuil-Juigné",
    "codePostal": 49460,
    "codeInsee": 49214
  },
  {
    "departement": 24,
    "slug": "trelissac",
    "name": "Trélissac",
    "codePostal": 24750,
    "codeInsee": 24557
  },
  {
    "departement": 66,
    "slug": "soler",
    "name": "Le Soler",
    "codePostal": 66270,
    "codeInsee": 66195
  },
  {
    "departement": 29,
    "slug": "lesneven",
    "name": "Lesneven",
    "codePostal": 29260,
    "codeInsee": 29124
  },
  {
    "departement": 67,
    "slug": "geispolsheim",
    "name": "Geispolsheim",
    "codePostal": 67400,
    "codeInsee": 67152
  },
  {
    "departement": 59,
    "slug": "teteghem",
    "name": "Téteghem",
    "codePostal": 59229,
    "codeInsee": 59588
  },
  {
    "departement": 40,
    "slug": "mimizan",
    "name": "Mimizan",
    "codePostal": 40200,
    "codeInsee": 40184
  },
  {
    "departement": 64,
    "slug": "mourenx",
    "name": "Mourenx",
    "codePostal": 64150,
    "codeInsee": 64410
  },
  {
    "departement": 73,
    "slug": "ugine",
    "name": "Ugine",
    "codePostal": 73400,
    "codeInsee": 73303
  },
  {
    "departement": "2B",
    "slug": "biguglia",
    "name": "Biguglia",
    "codePostal": 20620,
    "codeInsee": "2B037"
  },
  {
    "departement": 44,
    "slug": "loroux-bottereau",
    "name": "Le Loroux-Bottereau",
    "codePostal": 44430,
    "codeInsee": 44084
  },
  {
    "departement": 91,
    "slug": "soisy-sur-seine",
    "name": "Soisy-sur-Seine",
    "codePostal": 91450,
    "codeInsee": 91600
  },
  {
    "departement": 976,
    "slug": "chiconi",
    "name": "Chiconi",
    "codePostal": 97670,
    "codeInsee": 97605
  },
  {
    "departement": 59,
    "slug": "cateau-cambresis",
    "name": "Le Cateau-Cambrésis",
    "codePostal": 59360,
    "codeInsee": 59136
  },
  {
    "departement": 49,
    "slug": "chemille",
    "name": "Chemillé",
    "codePostal": 49120,
    "codeInsee": 49092
  },
  {
    "departement": 16,
    "slug": "saint-yrieix-sur-charente",
    "name": "Saint-Yrieix-sur-Charente",
    "codePostal": 16710,
    "codeInsee": 16358
  },
  {
    "departement": 93,
    "slug": "île-saint-denis",
    "name": "L'Île-Saint-Denis",
    "codePostal": 93450,
    "codeInsee": 93039
  },
  {
    "departement": 32,
    "slug": "condom",
    "name": "Condom",
    "codePostal": 32100,
    "codeInsee": 32107
  },
  {
    "departement": 6,
    "slug": "contes-06",
    "name": "Contes",
    "codePostal": 6390,
    "codeInsee": 6048
  },
  {
    "departement": 43,
    "slug": "yssingeaux",
    "name": "Yssingeaux",
    "codePostal": 43200,
    "codeInsee": 43268
  },
  {
    "departement": 56,
    "slug": "pluvigner",
    "name": "Pluvigner",
    "codePostal": 56330,
    "codeInsee": 56177
  },
  {
    "departement": 971,
    "slug": "pointe-noire",
    "name": "Pointe-Noire",
    "codePostal": 97116,
    "codeInsee": 97121
  },
  {
    "departement": 1,
    "slug": "montluel",
    "name": "Montluel",
    "codePostal": 1120,
    "codeInsee": 1262
  },
  {
    "departement": 95,
    "slug": "bessancourt",
    "name": "Bessancourt",
    "codePostal": 95550,
    "codeInsee": 95060
  },
  {
    "departement": 85,
    "slug": "talmont-saint-hilaire",
    "name": "Talmont-Saint-Hilaire",
    "codePostal": 85440,
    "codeInsee": 85288
  },
  {
    "departement": 86,
    "slug": "saint-benoît-86",
    "name": "Saint-Benoît",
    "codePostal": 86280,
    "codeInsee": 86214
  },
  {
    "departement": 86,
    "slug": "loudun",
    "name": "Loudun",
    "codePostal": 86200,
    "codeInsee": 86137
  },
  {
    "departement": 76,
    "slug": "notre-dame-de-bondeville",
    "name": "Notre-Dame-de-Bondeville",
    "codePostal": 76960,
    "codeInsee": 76474
  },
  {
    "departement": 76,
    "slug": "mesnil-esnard",
    "name": "Le Mesnil-Esnard",
    "codePostal": 76240,
    "codeInsee": 76429
  },
  {
    "departement": 29,
    "slug": "moelan-sur-mer",
    "name": "Moëlan-sur-Mer",
    "codePostal": 29350,
    "codeInsee": 29150
  },
  {
    "departement": 36,
    "slug": "blanc",
    "name": "Le Blanc",
    "codePostal": 36300,
    "codeInsee": 36018
  },
  {
    "departement": 33,
    "slug": "saint-jean-d-illac",
    "name": "Saint-Jean-d'Illac",
    "codePostal": 33127,
    "codeInsee": 33422
  },
  {
    "departement": 77,
    "slug": "vert-saint-denis",
    "name": "Vert-Saint-Denis",
    "codePostal": 77240,
    "codeInsee": 77495
  },
  {
    "departement": 64,
    "slug": "jurancon",
    "name": "Jurançon",
    "codePostal": 64110,
    "codeInsee": 64284
  },
  {
    "departement": 37,
    "slug": "monts-37",
    "name": "Monts",
    "codePostal": 37260,
    "codeInsee": 37159
  },
  {
    "departement": 74,
    "slug": "reignier-esery",
    "name": "Reignier-Ésery",
    "codePostal": 74930,
    "codeInsee": 74220
  },
  {
    "departement": 26,
    "slug": "nyons",
    "name": "Nyons",
    "codePostal": 26110,
    "codeInsee": 26220
  },
  {
    "departement": 91,
    "slug": "villemoisson-sur-orge",
    "name": "Villemoisson-sur-Orge",
    "codePostal": 91360,
    "codeInsee": 91667
  },
  {
    "departement": 54,
    "slug": "champigneulles",
    "name": "Champigneulles",
    "codePostal": 54250,
    "codeInsee": 54115
  },
  {
    "departement": 63,
    "slug": "ambert",
    "name": "Ambert",
    "codePostal": 63600,
    "codeInsee": 63003
  },
  {
    "departement": 56,
    "slug": "caudan",
    "name": "Caudan",
    "codePostal": 56850,
    "codeInsee": 56036
  },
  {
    "departement": "2B",
    "slug": "corte",
    "name": "Corte",
    "codePostal": 20250,
    "codeInsee": "2B096"
  },
  {
    "departement": 38,
    "slug": "seyssins",
    "name": "Seyssins",
    "codePostal": 38180,
    "codeInsee": 38486
  },
  {
    "departement": 31,
    "slug": "salvetat-saint-gilles",
    "name": "La Salvetat-Saint-Gilles",
    "codePostal": 31880,
    "codeInsee": 31526
  },
  {
    "departement": 59,
    "slug": "bourbourg",
    "name": "Bourbourg",
    "codePostal": 59630,
    "codeInsee": 59094
  },
  {
    "departement": 87,
    "slug": "saint-yrieix-la-perche",
    "name": "Saint-Yrieix-la-Perche",
    "codePostal": 87500,
    "codeInsee": 87187
  },
  {
    "departement": 57,
    "slug": "uckange",
    "name": "Uckange",
    "codePostal": 57270,
    "codeInsee": 57683
  },
  {
    "departement": 42,
    "slug": "coteau",
    "name": "Le Coteau",
    "codePostal": 42120,
    "codeInsee": 42071
  },
  {
    "departement": 29,
    "slug": "saint-pol-de-leon",
    "name": "Saint-Pol-de-Léon",
    "codePostal": 29250,
    "codeInsee": 29259
  },
  {
    "departement": 44,
    "slug": "sautron",
    "name": "Sautron",
    "codePostal": 44880,
    "codeInsee": 44194
  },
  {
    "departement": 33,
    "slug": "bassens-33",
    "name": "Bassens",
    "codePostal": 33530,
    "codeInsee": 33032
  },
  {
    "departement": 62,
    "slug": "noyelles-sous-lens",
    "name": "Noyelles-sous-Lens",
    "codePostal": 62221,
    "codeInsee": 62628
  },
  {
    "departement": 13,
    "slug": "fare-les-oliviers",
    "name": "La Fare-les-Oliviers",
    "codePostal": 13580,
    "codeInsee": 13037
  },
  {
    "departement": 33,
    "slug": "carbon-blanc",
    "name": "Carbon-Blanc",
    "codePostal": 33560,
    "codeInsee": 33096
  },
  {
    "departement": 83,
    "slug": "cavalaire-sur-mer",
    "name": "Cavalaire-sur-Mer",
    "codePostal": 83240,
    "codeInsee": 83036
  },
  {
    "departement": 10,
    "slug": "saint-julien-les-villas",
    "name": "Saint-Julien-les-Villas",
    "codePostal": 10800,
    "codeInsee": 10343
  },
  {
    "departement": 88,
    "slug": "neufchateau",
    "name": "Neufchâteau",
    "codePostal": 88300,
    "codeInsee": 88321
  },
  {
    "departement": 34,
    "slug": "balaruc-les-bains",
    "name": "Balaruc-les-Bains",
    "codePostal": 34540,
    "codeInsee": 34023
  },
  {
    "departement": 13,
    "slug": "carnoux-en-provence",
    "name": "Carnoux-en-Provence",
    "codePostal": 13470,
    "codeInsee": 13119
  },
  {
    "departement": 91,
    "slug": "montlhery",
    "name": "Montlhéry",
    "codePostal": 91310,
    "codeInsee": 91425
  },
  {
    "departement": 29,
    "slug": "tregunc",
    "name": "Trégunc",
    "codePostal": 29910,
    "codeInsee": 29293
  },
  {
    "departement": 28,
    "slug": "luisant",
    "name": "Luisant",
    "codePostal": 28600,
    "codeInsee": 28220
  },
  {
    "departement": 74,
    "slug": "faverges",
    "name": "Faverges",
    "codePostal": 74210,
    "codeInsee": 74123
  },
  {
    "departement": 59,
    "slug": "louvroil",
    "name": "Louvroil",
    "codePostal": 59720,
    "codeInsee": 59365
  },
  {
    "departement": 67,
    "slug": "barr",
    "name": "Barr",
    "codePostal": 67140,
    "codeInsee": 67021
  },
  {
    "departement": 35,
    "slug": "liffre",
    "name": "Liffré",
    "codePostal": 35340,
    "codeInsee": 35152
  },
  {
    "departement": 49,
    "slug": "saint-macaire-en-mauges",
    "name": "Saint-Macaire-en-Mauges",
    "codePostal": 49450,
    "codeInsee": 49301
  },
  {
    "departement": 54,
    "slug": "joeuf",
    "name": "Jœuf",
    "codePostal": 54240,
    "codeInsee": 54280
  },
  {
    "departement": 74,
    "slug": "vetraz-monthoux",
    "name": "Vétraz-Monthoux",
    "codePostal": 74100,
    "codeInsee": 74298
  },
  {
    "departement": 71,
    "slug": "charnay-les-macon",
    "name": "Charnay-lès-Mâcon",
    "codePostal": 71850,
    "codeInsee": 71105
  },
  {
    "departement": 49,
    "slug": "longue-jumelles",
    "name": "Longué-Jumelles",
    "codePostal": 49160,
    "codeInsee": 49180
  },
  {
    "departement": 64,
    "slug": "ciboure",
    "name": "Ciboure",
    "codePostal": 64500,
    "codeInsee": 64189
  },
  {
    "departement": 6,
    "slug": "gaude",
    "name": "La Gaude",
    "codePostal": 6610,
    "codeInsee": 6065
  },
  {
    "departement": 18,
    "slug": "mehun-sur-yevre",
    "name": "Mehun-sur-Yèvre",
    "codePostal": 18500,
    "codeInsee": 18141
  },
  {
    "departement": 44,
    "slug": "saint-julien-de-concelles",
    "name": "Saint-Julien-de-Concelles",
    "codePostal": 44450,
    "codeInsee": 44169
  },
  {
    "departement": 6,
    "slug": "pegomas",
    "name": "Pégomas",
    "codePostal": 6580,
    "codeInsee": 6090
  },
  {
    "departement": 974,
    "slug": "sainte-rose",
    "name": "Sainte-Rose",
    "codePostal": 97439,
    "codeInsee": 97419
  },
  {
    "departement": 49,
    "slug": "segre",
    "name": "Segré",
    "codePostal": 49500,
    "codeInsee": 49331
  },
  {
    "departement": 81,
    "slug": "saint-juery-81",
    "name": "Saint-Juéry",
    "codePostal": 81160,
    "codeInsee": 81257
  },
  {
    "departement": 17,
    "slug": "saujon",
    "name": "Saujon",
    "codePostal": 17600,
    "codeInsee": 17421
  },
  {
    "departement": 44,
    "slug": "montoir-de-bretagne",
    "name": "Montoir-de-Bretagne",
    "codePostal": 44550,
    "codeInsee": 44103
  },
  {
    "departement": 95,
    "slug": "auvers-sur-oise",
    "name": "Auvers-sur-Oise",
    "codePostal": 95760,
    "codeInsee": 95039
  },
  {
    "departement": 49,
    "slug": "beaupreau",
    "name": "Beaupréau",
    "codePostal": 49600,
    "codeInsee": 49023
  },
  {
    "departement": 62,
    "slug": "loos-en-gohelle",
    "name": "Loos-en-Gohelle",
    "codePostal": 62750,
    "codeInsee": 62528
  },
  {
    "departement": 78,
    "slug": "gargenville",
    "name": "Gargenville",
    "codePostal": 78440,
    "codeInsee": 78267
  },
  {
    "departement": 1,
    "slug": "lagnieu",
    "name": "Lagnieu",
    "codePostal": 1150,
    "codeInsee": 1202
  },
  {
    "departement": 86,
    "slug": "chauvigny",
    "name": "Chauvigny",
    "codePostal": 86300,
    "codeInsee": 86070
  },
  {
    "departement": 38,
    "slug": "peage-de-roussillon",
    "name": "Le Péage-de-Roussillon",
    "codePostal": 38550,
    "codeInsee": 38298
  },
  {
    "departement": 44,
    "slug": "donges",
    "name": "Donges",
    "codePostal": 44480,
    "codeInsee": 44052
  },
  {
    "departement": 56,
    "slug": "theix",
    "name": "Theix",
    "codePostal": 56450,
    "codeInsee": 56251
  },
  {
    "departement": 44,
    "slug": "clisson",
    "name": "Clisson",
    "codePostal": 44190,
    "codeInsee": 44043
  },
  {
    "departement": 1,
    "slug": "trevoux-01",
    "name": "Trévoux",
    "codePostal": 1600,
    "codeInsee": 1427
  },
  {
    "departement": 80,
    "slug": "doullens",
    "name": "Doullens",
    "codePostal": 80600,
    "codeInsee": 80253
  },
  {
    "departement": 62,
    "slug": "grenay-62",
    "name": "Grenay",
    "codePostal": 62160,
    "codeInsee": 62386
  },
  {
    "departement": 15,
    "slug": "saint-flour-15",
    "name": "Saint-Flour",
    "codePostal": 15100,
    "codeInsee": 15187
  },
  {
    "departement": 973,
    "slug": "apatou",
    "name": "Apatou",
    "codePostal": 97317,
    "codeInsee": 97360
  },
  {
    "departement": 25,
    "slug": "morteau",
    "name": "Morteau",
    "codePostal": 25500,
    "codeInsee": 25411
  },
  {
    "departement": 54,
    "slug": "frouard",
    "name": "Frouard",
    "codePostal": 54390,
    "codeInsee": 54215
  },
  {
    "departement": 30,
    "slug": "saint-christol-les-ales",
    "name": "Saint-Christol-lès-Alès",
    "codePostal": 30380,
    "codeInsee": 30243
  },
  {
    "departement": 26,
    "slug": "chabeuil",
    "name": "Chabeuil",
    "codePostal": 26120,
    "codeInsee": 26064
  },
  {
    "departement": 17,
    "slug": "saint-pierre-d-oleron",
    "name": "Saint-Pierre-d'Oléron",
    "codePostal": 17310,
    "codeInsee": 17385
  },
  {
    "departement": 74,
    "slug": "poisy",
    "name": "Poisy",
    "codePostal": 74330,
    "codeInsee": 74213
  },
  {
    "departement": 34,
    "slug": "serignan",
    "name": "Sérignan",
    "codePostal": 34410,
    "codeInsee": 34299
  },
  {
    "departement": 43,
    "slug": "brioude",
    "name": "Brioude",
    "codePostal": 43100,
    "codeInsee": 43040
  },
  {
    "departement": 68,
    "slug": "huningue",
    "name": "Huningue",
    "codePostal": 68330,
    "codeInsee": 68149
  },
  {
    "departement": 8,
    "slug": "givet",
    "name": "Givet",
    "codePostal": 8600,
    "codeInsee": 8190
  },
  {
    "departement": 59,
    "slug": "beuvrages",
    "name": "Beuvrages",
    "codePostal": 59192,
    "codeInsee": 59079
  },
  {
    "departement": 3,
    "slug": "commentry",
    "name": "Commentry",
    "codePostal": 3600,
    "codeInsee": 3082
  },
  {
    "departement": 71,
    "slug": "blanzy",
    "name": "Blanzy",
    "codePostal": 71450,
    "codeInsee": 71040
  },
  {
    "departement": 78,
    "slug": "mesnil-saint-denis",
    "name": "Le Mesnil-Saint-Denis",
    "codePostal": 78320,
    "codeInsee": 78397
  },
  {
    "departement": 38,
    "slug": "domene",
    "name": "Domène",
    "codePostal": 38420,
    "codeInsee": 38150
  },
  {
    "departement": 59,
    "slug": "cuincy",
    "name": "Cuincy",
    "codePostal": 59553,
    "codeInsee": 59165
  },
  {
    "departement": 82,
    "slug": "caussade",
    "name": "Caussade",
    "codePostal": 82300,
    "codeInsee": 82037
  },
  {
    "departement": 44,
    "slug": "saint-etienne-de-montluc",
    "name": "Saint-Étienne-de-Montluc",
    "codePostal": 44360,
    "codeInsee": 44158
  },
  {
    "departement": 18,
    "slug": "saint-florent-sur-cher",
    "name": "Saint-Florent-sur-Cher",
    "codePostal": 18400,
    "codeInsee": 18207
  },
  {
    "departement": 24,
    "slug": "boulazac",
    "name": "Boulazac",
    "codePostal": 24750,
    "codeInsee": 24053
  },
  {
    "departement": 78,
    "slug": "perray-en-yvelines",
    "name": "Le Perray-en-Yvelines",
    "codePostal": 78610,
    "codeInsee": 78486
  },
  {
    "departement": 57,
    "slug": "petite-rosselle",
    "name": "Petite-Rosselle",
    "codePostal": 57540,
    "codeInsee": 57537
  },
  {
    "departement": 83,
    "slug": "puget-sur-argens",
    "name": "Puget-sur-Argens",
    "codePostal": 83480,
    "codeInsee": 83099
  },
  {
    "departement": 33,
    "slug": "teich",
    "name": "Le Teich",
    "codePostal": 33470,
    "codeInsee": 33527
  },
  {
    "departement": 91,
    "slug": "itteville",
    "name": "Itteville",
    "codePostal": 91760,
    "codeInsee": 91315
  },
  {
    "departement": 76,
    "slug": "bonsecours",
    "name": "Bonsecours",
    "codePostal": 76240,
    "codeInsee": 76103
  },
  {
    "departement": 13,
    "slug": "saint-victoret",
    "name": "Saint-Victoret",
    "codePostal": 13730,
    "codeInsee": 13102
  },
  {
    "departement": 91,
    "slug": "longpont-sur-orge",
    "name": "Longpont-sur-Orge",
    "codePostal": 91310,
    "codeInsee": 91347
  },
  {
    "departement": 35,
    "slug": "chateaugiron",
    "name": "Châteaugiron",
    "codePostal": 35410,
    "codeInsee": 35069
  },
  {
    "departement": 57,
    "slug": "algrange",
    "name": "Algrange",
    "codePostal": 57440,
    "codeInsee": 57012
  },
  {
    "departement": 13,
    "slug": "senas",
    "name": "Sénas",
    "codePostal": 13560,
    "codeInsee": 13105
  },
  {
    "departement": 62,
    "slug": "fouquieres-les-lens",
    "name": "Fouquières-lès-Lens",
    "codePostal": 62740,
    "codeInsee": 62351
  },
  {
    "departement": 88,
    "slug": "raon-l-etape",
    "name": "Raon-l'Étape",
    "codePostal": 88110,
    "codeInsee": 88372
  },
  {
    "departement": 9,
    "slug": "lavelanet",
    "name": "Lavelanet",
    "codePostal": 9300,
    "codeInsee": 9160
  },
  {
    "departement": 59,
    "slug": "lallaing",
    "name": "Lallaing",
    "codePostal": 59167,
    "codeInsee": 59327
  },
  {
    "departement": 71,
    "slug": "louhans",
    "name": "Louhans",
    "codePostal": 71500,
    "codeInsee": 71263
  },
  {
    "departement": 64,
    "slug": "cambo-les-bains",
    "name": "Cambo-les-Bains",
    "codePostal": 64250,
    "codeInsee": 64160
  },
  {
    "departement": 77,
    "slug": "bailly-romainvilliers",
    "name": "Bailly-Romainvilliers",
    "codePostal": 77700,
    "codeInsee": 77018
  },
  {
    "departement": 83,
    "slug": "arcs",
    "name": "Arcs",
    "codePostal": 83460,
    "codeInsee": 83004
  },
  {
    "departement": 17,
    "slug": "surgeres",
    "name": "Surgères",
    "codePostal": 17700,
    "codeInsee": 17434
  },
  {
    "departement": 37,
    "slug": "loches",
    "name": "Loches",
    "codePostal": 37600,
    "codeInsee": 37132
  },
  {
    "departement": 78,
    "slug": "epone",
    "name": "Épône",
    "codePostal": 78680,
    "codeInsee": 78217
  },
  {
    "departement": 9,
    "slug": "saint-girons",
    "name": "Saint-Girons",
    "codePostal": 9200,
    "codeInsee": 9261
  },
  {
    "departement": 95,
    "slug": "courdimanche",
    "name": "Courdimanche",
    "codePostal": 95800,
    "codeInsee": 95183
  },
  {
    "departement": 49,
    "slug": "chalonnes-sur-loire",
    "name": "Chalonnes-sur-Loire",
    "codePostal": 49290,
    "codeInsee": 49063
  },
  {
    "departement": 56,
    "slug": "brech",
    "name": "Brech",
    "codePostal": 56400,
    "codeInsee": 56023
  },
  {
    "departement": 77,
    "slug": "champagne-sur-seine",
    "name": "Champagne-sur-Seine",
    "codePostal": 77430,
    "codeInsee": 77079
  },
  {
    "departement": 69,
    "slug": "mulatiere",
    "name": "La Mulatière",
    "codePostal": 69350,
    "codeInsee": 69142
  },
  {
    "departement": 91,
    "slug": "linas",
    "name": "Linas",
    "codePostal": 91310,
    "codeInsee": 91339
  },
  {
    "departement": 77,
    "slug": "othis",
    "name": "Othis",
    "codePostal": 77280,
    "codeInsee": 77349
  },
  {
    "departement": 69,
    "slug": "saint-bonnet-de-mure",
    "name": "Saint-Bonnet-de-Mure",
    "codePostal": 69720,
    "codeInsee": 69287
  },
  {
    "departement": 54,
    "slug": "ludres",
    "name": "Ludres",
    "codePostal": 54710,
    "codeInsee": 54328
  },
  {
    "departement": 42,
    "slug": "talaudiere",
    "name": "La Talaudière",
    "codePostal": 42350,
    "codeInsee": 42305
  },
  {
    "departement": 81,
    "slug": "aussillon",
    "name": "Aussillon",
    "codePostal": 81200,
    "codeInsee": 81021
  },
  {
    "departement": 91,
    "slug": "limours",
    "name": "Limours",
    "codePostal": 91470,
    "codeInsee": 91338
  },
  {
    "departement": 35,
    "slug": "montfort-sur-meu",
    "name": "Montfort-sur-Meu",
    "codePostal": 35160,
    "codeInsee": 35188
  },
  {
    "departement": 34,
    "slug": "bedarieux",
    "name": "Bédarieux",
    "codePostal": 34600,
    "codeInsee": 34028
  },
  {
    "departement": 93,
    "slug": "vaujours",
    "name": "Vaujours",
    "codePostal": 93410,
    "codeInsee": 93074
  },
  {
    "departement": 45,
    "slug": "villemandeur",
    "name": "Villemandeur",
    "codePostal": 45700,
    "codeInsee": 45338
  },
  {
    "departement": 62,
    "slug": "sains-en-gohelle",
    "name": "Sains-en-Gohelle",
    "codePostal": 62114,
    "codeInsee": 62737
  },
  {
    "departement": 59,
    "slug": "trith-saint-leger",
    "name": "Trith-Saint-Léger",
    "codePostal": 59125,
    "codeInsee": 59603
  },
  {
    "departement": 51,
    "slug": "betheny",
    "name": "Bétheny",
    "codePostal": 51450,
    "codeInsee": 51055
  },
  {
    "departement": 57,
    "slug": "terville",
    "name": "Terville",
    "codePostal": 57180,
    "codeInsee": 57666
  },
  {
    "departement": 67,
    "slug": "eckbolsheim",
    "name": "Eckbolsheim",
    "codePostal": 67201,
    "codeInsee": 67118
  },
  {
    "departement": 69,
    "slug": "saint-didier-au-mont-d-or",
    "name": "Saint-Didier-au-Mont-d'Or",
    "codePostal": 69370,
    "codeInsee": 69194
  },
  {
    "departement": 78,
    "slug": "mesnil-le-roi",
    "name": "Le Mesnil-le-Roi",
    "codePostal": 78600,
    "codeInsee": 78396
  },
  {
    "departement": 38,
    "slug": "verpilliere",
    "name": "La Verpillière",
    "codePostal": 38290,
    "codeInsee": 38537
  },
  {
    "departement": 93,
    "slug": "gournay-sur-marne",
    "name": "Gournay-sur-Marne",
    "codePostal": 93460,
    "codeInsee": 93033
  },
  {
    "departement": 13,
    "slug": "eyguieres",
    "name": "Eyguières",
    "codePostal": 13430,
    "codeInsee": 13035
  },
  {
    "departement": 976,
    "slug": "boueni",
    "name": "Bouéni",
    "codePostal": 97620,
    "codeInsee": 97604
  },
  {
    "departement": 76,
    "slug": "gournay-en-bray",
    "name": "Gournay-en-Bray",
    "codePostal": 76220,
    "codeInsee": 76312
  },
  {
    "departement": 59,
    "slug": "lesquin",
    "name": "Lesquin",
    "codePostal": 59810,
    "codeInsee": 59343
  },
  {
    "departement": 29,
    "slug": "plouguerneau",
    "name": "Plouguerneau",
    "codePostal": 29880,
    "codeInsee": 29195
  },
  {
    "departement": 34,
    "slug": "grabels",
    "name": "Grabels",
    "codePostal": 34790,
    "codeInsee": 34116
  },
  {
    "departement": 80,
    "slug": "corbie",
    "name": "Corbie",
    "codePostal": 80800,
    "codeInsee": 80212
  },
  {
    "departement": 86,
    "slug": "montmorillon",
    "name": "Montmorillon",
    "codePostal": 86500,
    "codeInsee": 86165
  },
  {
    "departement": 38,
    "slug": "saint-ismier",
    "name": "Saint-Ismier",
    "codePostal": 38330,
    "codeInsee": 38397
  },
  {
    "departement": 49,
    "slug": "beaufort-en-vallee",
    "name": "Beaufort-en-Vallée",
    "codePostal": 49250,
    "codeInsee": 49021
  },
  {
    "departement": 34,
    "slug": "pignan",
    "name": "Pignan",
    "codePostal": 34570,
    "codeInsee": 34202
  },
  {
    "departement": 31,
    "slug": "aussonne",
    "name": "Aussonne",
    "codePostal": 31840,
    "codeInsee": 31032
  },
  {
    "departement": 6,
    "slug": "roquefort-les-pins",
    "name": "Roquefort-les-Pins",
    "codePostal": 6330,
    "codeInsee": 6105
  },
  {
    "departement": 55,
    "slug": "commercy",
    "name": "Commercy",
    "codePostal": 55200,
    "codeInsee": 55122
  },
  {
    "departement": 32,
    "slug": "fleurance",
    "name": "Fleurance",
    "codePostal": 32500,
    "codeInsee": 32132
  },
  {
    "departement": 13,
    "slug": "penne-sur-huveaune",
    "name": "La Penne-sur-Huveaune",
    "codePostal": 13821,
    "codeInsee": 13070
  },
  {
    "departement": 38,
    "slug": "varces-allieres-et-risset",
    "name": "Varces-Allières-et-Risset",
    "codePostal": 38760,
    "codeInsee": 38524
  },
  {
    "departement": 80,
    "slug": "roye-80",
    "name": "Roye",
    "codePostal": 80700,
    "codeInsee": 80685
  },
  {
    "departement": 54,
    "slug": "homecourt",
    "name": "Homécourt",
    "codePostal": 54310,
    "codeInsee": 54263
  },
  {
    "departement": 8,
    "slug": "nouzonville",
    "name": "Nouzonville",
    "codePostal": 8700,
    "codeInsee": 8328
  },
  {
    "departement": 78,
    "slug": "essarts-le-roi",
    "name": "Essarts-le-Roi",
    "codePostal": 78690,
    "codeInsee": 78220
  },
  {
    "departement": 42,
    "slug": "saint-jean-bonnefonds",
    "name": "Saint-Jean-Bonnefonds",
    "codePostal": 42650,
    "codeInsee": 42237
  },
  {
    "departement": 976,
    "slug": "m-tsangamouji",
    "name": "M'Tsangamouji",
    "codePostal": 97650,
    "codeInsee": 97613
  },
  {
    "departement": 69,
    "slug": "fontaines-sur-saone",
    "name": "Fontaines-sur-Saône",
    "codePostal": 69270,
    "codeInsee": 69088
  },
  {
    "departement": 13,
    "slug": "carry-le-rouet",
    "name": "Carry-le-Rouet",
    "codePostal": 13620,
    "codeInsee": 13021
  },
  {
    "departement": 59,
    "slug": "loon-plage",
    "name": "Loon-Plage",
    "codePostal": 59279,
    "codeInsee": 59359
  },
  {
    "departement": 29,
    "slug": "ploudalmezeau",
    "name": "Ploudalmézeau",
    "codePostal": 29830,
    "codeInsee": 29178
  },
  {
    "departement": 77,
    "slug": "saint-thibault-des-vignes",
    "name": "Saint-Thibault-des-Vignes",
    "codePostal": 77400,
    "codeInsee": 77438
  },
  {
    "departement": 91,
    "slug": "etrechy-91",
    "name": "Étréchy",
    "codePostal": 91580,
    "codeInsee": 91226
  },
  {
    "departement": 91,
    "slug": "boussy-saint-antoine",
    "name": "Boussy-Saint-Antoine",
    "codePostal": 91800,
    "codeInsee": 91097
  },
  {
    "departement": 47,
    "slug": "sainte-livrade-sur-lot",
    "name": "Sainte-Livrade-sur-Lot",
    "codePostal": 47110,
    "codeInsee": 47252
  },
  {
    "departement": 30,
    "slug": "bellegarde-30",
    "name": "Bellegarde",
    "codePostal": 30127,
    "codeInsee": 30034
  },
  {
    "departement": 40,
    "slug": "aire-sur-l-adour",
    "name": "Aire-sur-l'Adour",
    "codePostal": 40800,
    "codeInsee": 40001
  },
  {
    "departement": 21,
    "slug": "saint-apollinaire-21",
    "name": "Saint-Apollinaire",
    "codePostal": 21850,
    "codeInsee": 21540
  },
  {
    "departement": 44,
    "slug": "suce-sur-erdre",
    "name": "Sucé-sur-Erdre",
    "codePostal": 44240,
    "codeInsee": 44201
  },
  {
    "departement": 35,
    "slug": "noyal-chatillon-sur-seiche",
    "name": "Noyal-Châtillon-sur-Seiche",
    "codePostal": 35230,
    "codeInsee": 35206
  },
  {
    "departement": 57,
    "slug": "audun-le-tiche",
    "name": "Audun-le-Tiche",
    "codePostal": 57390,
    "codeInsee": 57038
  },
  {
    "departement": 74,
    "slug": "publier",
    "name": "Publier",
    "codePostal": 74500,
    "codeInsee": 74218
  },
  {
    "departement": 34,
    "slug": "fabregues",
    "name": "Fabrègues",
    "codePostal": 34690,
    "codeInsee": 34095
  },
  {
    "departement": 59,
    "slug": "bassee",
    "name": "La Bassée",
    "codePostal": 59480,
    "codeInsee": 59051
  },
  {
    "departement": 38,
    "slug": "tronche",
    "name": "La Tronche",
    "codePostal": 38700,
    "codeInsee": 38516
  },
  {
    "departement": 81,
    "slug": "bruguiere-81",
    "name": "Bruguière",
    "codePostal": 81290,
    "codeInsee": 81120
  },
  {
    "departement": 76,
    "slug": "pavilly",
    "name": "Pavilly",
    "codePostal": 76570,
    "codeInsee": 76495
  },
  {
    "departement": 24,
    "slug": "terrasson-lavilledieu",
    "name": "Terrasson-Lavilledieu",
    "codePostal": 24120,
    "codeInsee": 24547
  },
  {
    "departement": 62,
    "slug": "hersin-coupigny",
    "name": "Hersin-Coupigny",
    "codePostal": 62530,
    "codeInsee": 62443
  },
  {
    "departement": 63,
    "slug": "chatel-guyon",
    "name": "Châtel-Guyon",
    "codePostal": 63140,
    "codeInsee": 63103
  },
  {
    "departement": 34,
    "slug": "baillargues",
    "name": "Baillargues",
    "codePostal": 34670,
    "codeInsee": 34022
  },
  {
    "departement": 64,
    "slug": "bidart",
    "name": "Bidart",
    "codePostal": 64210,
    "codeInsee": 64125
  },
  {
    "departement": 27,
    "slug": "verneuil-sur-avre",
    "name": "Verneuil-sur-Avre",
    "codePostal": 27130,
    "codeInsee": 27679
  },
  {
    "departement": 33,
    "slug": "lanton",
    "name": "Lanton",
    "codePostal": 33138,
    "codeInsee": 33229
  },
  {
    "departement": 56,
    "slug": "guer",
    "name": "Guer",
    "codePostal": 56380,
    "codeInsee": 56075
  },
  {
    "departement": 59,
    "slug": "roost-warendin",
    "name": "Roost-Warendin",
    "codePostal": 59286,
    "codeInsee": 59509
  },
  {
    "departement": 45,
    "slug": "malesherbes",
    "name": "Malesherbes",
    "codePostal": 45330,
    "codeInsee": 45191
  },
  {
    "departement": 33,
    "slug": "saint-aubin-de-medoc",
    "name": "Saint-Aubin-de-Médoc",
    "codePostal": 33160,
    "codeInsee": 33376
  },
  {
    "departement": 64,
    "slug": "ustaritz",
    "name": "Ustaritz",
    "codePostal": 64480,
    "codeInsee": 64547
  },
  {
    "departement": 42,
    "slug": "saint-priest-en-jarez",
    "name": "Saint-Priest-en-Jarez",
    "codePostal": 42270,
    "codeInsee": 42275
  },
  {
    "departement": 49,
    "slug": "bouchemaine",
    "name": "Bouchemaine",
    "codePostal": 49080,
    "codeInsee": 49035
  },
  {
    "departement": 66,
    "slug": "toulouges",
    "name": "Toulouges",
    "codePostal": 66350,
    "codeInsee": 66213
  },
  {
    "departement": 60,
    "slug": "villers-saint-paul",
    "name": "Villers-Saint-Paul",
    "codePostal": 60870,
    "codeInsee": 60684
  },
  {
    "departement": 84,
    "slug": "vaison-la-romaine",
    "name": "Vaison-la-Romaine",
    "codePostal": 84110,
    "codeInsee": 84137
  },
  {
    "departement": 35,
    "slug": "acigne",
    "name": "Acigné",
    "codePostal": 35690,
    "codeInsee": 35001
  },
  {
    "departement": 72,
    "slug": "change-72",
    "name": "Changé",
    "codePostal": 72560,
    "codeInsee": 72058
  },
  {
    "departement": 74,
    "slug": "marignier",
    "name": "Marignier",
    "codePostal": 74970,
    "codeInsee": 74164
  },
  {
    "departement": 33,
    "slug": "salles-33",
    "name": "Salles",
    "codePostal": 33770,
    "codeInsee": 33498
  },
  {
    "departement": 77,
    "slug": "courtry",
    "name": "Courtry",
    "codePostal": 77181,
    "codeInsee": 77139
  },
  {
    "departement": 59,
    "slug": "pecquencourt",
    "name": "Pecquencourt",
    "codePostal": 59146,
    "codeInsee": 59456
  },
  {
    "departement": 78,
    "slug": "saint-arnoult-en-yvelines",
    "name": "Saint-Arnoult-en-Yvelines",
    "codePostal": 78730,
    "codeInsee": 78537
  },
  {
    "departement": 64,
    "slug": "hasparren",
    "name": "Hasparren",
    "codePostal": 64240,
    "codeInsee": 64256
  },
  {
    "departement": 13,
    "slug": "gemenos",
    "name": "Gémenos",
    "codePostal": 13420,
    "codeInsee": 13042
  },
  {
    "departement": 30,
    "slug": "bouillargues",
    "name": "Bouillargues",
    "codePostal": 30230,
    "codeInsee": 30047
  },
  {
    "departement": 974,
    "slug": "entre-deux",
    "name": "Entre-Deux",
    "codePostal": 97414,
    "codeInsee": 97403
  },
  {
    "departement": 29,
    "slug": "gouesnou",
    "name": "Gouesnou",
    "codePostal": 29850,
    "codeInsee": 29061
  },
  {
    "departement": 68,
    "slug": "lutterbach",
    "name": "Lutterbach",
    "codePostal": 68460,
    "codeInsee": 68195
  },
  {
    "departement": 68,
    "slug": "brunstatt",
    "name": "Brunstatt",
    "codePostal": 68350,
    "codeInsee": 68056
  },
  {
    "departement": 62,
    "slug": "courcelles-les-lens",
    "name": "Courcelles-lès-Lens",
    "codePostal": 62970,
    "codeInsee": 62249
  },
  {
    "departement": 80,
    "slug": "montdidier-80",
    "name": "Montdidier",
    "codePostal": 80500,
    "codeInsee": 80561
  },
  {
    "departement": 38,
    "slug": "gieres",
    "name": "Gières",
    "codePostal": 38610,
    "codeInsee": 38179
  },
  {
    "departement": 41,
    "slug": "mer",
    "name": "Mer",
    "codePostal": 41500,
    "codeInsee": 41136
  },
  {
    "departement": 5,
    "slug": "embrun",
    "name": "Embrun",
    "codePostal": 5200,
    "codeInsee": 5046
  },
  {
    "departement": 71,
    "slug": "saint-remy-71",
    "name": "Saint-Rémy",
    "codePostal": 71100,
    "codeInsee": 71475
  },
  {
    "departement": 47,
    "slug": "bon-encontre",
    "name": "Bon-Encontre",
    "codePostal": 47240,
    "codeInsee": 47032
  },
  {
    "departement": 37,
    "slug": "veigne",
    "name": "Veigné",
    "codePostal": 37250,
    "codeInsee": 37266
  },
  {
    "departement": 34,
    "slug": "marsillargues",
    "name": "Marsillargues",
    "codePostal": 34590,
    "codeInsee": 34151
  },
  {
    "departement": 45,
    "slug": "meung-sur-loire",
    "name": "Meung-sur-Loire",
    "codePostal": 45130,
    "codeInsee": 45203
  },
  {
    "departement": 51,
    "slug": "cormontreuil",
    "name": "Cormontreuil",
    "codePostal": 51350,
    "codeInsee": 51172
  },
  {
    "departement": 35,
    "slug": "chateaubourg-35",
    "name": "Châteaubourg",
    "codePostal": 35220,
    "codeInsee": 35068
  },
  {
    "departement": 66,
    "slug": "prades-66",
    "name": "Prades",
    "codePostal": 66500,
    "codeInsee": 66149
  },
  {
    "departement": 975,
    "slug": "st-pierre-et-miquelon",
    "name": "Saint-Pierre-et-Miquelon",
    "codePostal": 97500,
    "codeInsee": 97501
  },
  {
    "departement": 972,
    "slug": "le-diamant",
    "name": "Diamant",
    "codePostal": 97223,
    "codeInsee": 97206
  },
  {
    "departement": 10,
    "slug": "nogent-sur-seine",
    "name": "Nogent-sur-Seine",
    "codePostal": 10400,
    "codeInsee": 10268
  },
  {
    "departement": 50,
    "slug": "carentan",
    "name": "Carentan",
    "codePostal": 50500,
    "codeInsee": 50099
  },
  {
    "departement": 38,
    "slug": "rives-38",
    "name": "Rives",
    "codePostal": 38140,
    "codeInsee": 38337
  },
  {
    "departement": 62,
    "slug": "saint-laurent-blangy",
    "name": "Saint-Laurent-Blangy",
    "codePostal": 62223,
    "codeInsee": 62753
  },
  {
    "departement": 38,
    "slug": "tignieu-jameyzieu",
    "name": "Tignieu-Jameyzieu",
    "codePostal": 38230,
    "codeInsee": 38507
  },
  {
    "departement": 1,
    "slug": "peronnas",
    "name": "Péronnas",
    "codePostal": 1960,
    "codeInsee": 1289
  },
  {
    "departement": 15,
    "slug": "arpajon-sur-cere",
    "name": "Arpajon-sur-Cère",
    "codePostal": 15130,
    "codeInsee": 15012
  },
  {
    "departement": 86,
    "slug": "migne-auxances",
    "name": "Migné-Auxances",
    "codePostal": 86440,
    "codeInsee": 86158
  },
  {
    "departement": 33,
    "slug": "audenge",
    "name": "Audenge",
    "codePostal": 33980,
    "codeInsee": 33019
  },
  {
    "departement": 11,
    "slug": "coursan",
    "name": "Coursan",
    "codePostal": 11110,
    "codeInsee": 11106
  },
  {
    "departement": 13,
    "slug": "mallemort",
    "name": "Mallemort",
    "codePostal": 13370,
    "codeInsee": 13053
  },
  {
    "departement": 22,
    "slug": "pledran",
    "name": "Plédran",
    "codePostal": 22960,
    "codeInsee": 22176
  },
  {
    "departement": 69,
    "slug": "arbresle",
    "name": "L'Arbresle",
    "codePostal": 69210,
    "codeInsee": 69010
  },
  {
    "departement": 17,
    "slug": "chatelaillon-plage",
    "name": "Châtelaillon-Plage",
    "codePostal": 17340,
    "codeInsee": 17094
  },
  {
    "departement": 85,
    "slug": "mortagne-sur-sevre",
    "name": "Mortagne-sur-Sèvre",
    "codePostal": 85290,
    "codeInsee": 85151
  },
  {
    "departement": 70,
    "slug": "gray",
    "name": "Gray",
    "codePostal": 70100,
    "codeInsee": 70279
  },
  {
    "departement": 56,
    "slug": "inzinzac-lochrist",
    "name": "Inzinzac-Lochrist",
    "codePostal": 56650,
    "codeInsee": 56090
  },
  {
    "departement": 12,
    "slug": "decazeville",
    "name": "Decazeville",
    "codePostal": 12300,
    "codeInsee": 12089
  },
  {
    "departement": 54,
    "slug": "laneuveville-devant-nancy",
    "name": "Laneuveville-devant-Nancy",
    "codePostal": 54410,
    "codeInsee": 54300
  },
  {
    "departement": 56,
    "slug": "baud",
    "name": "Baud",
    "codePostal": 56150,
    "codeInsee": 56010
  },
  {
    "departement": 57,
    "slug": "mondelange",
    "name": "Mondelange",
    "codePostal": 57300,
    "codeInsee": 57474
  },
  {
    "departement": 1,
    "slug": "viriat",
    "name": "Viriat",
    "codePostal": 1440,
    "codeInsee": 1451
  },
  {
    "departement": 54,
    "slug": "liverdun",
    "name": "Liverdun",
    "codePostal": 54460,
    "codeInsee": 54318
  },
  {
    "departement": 59,
    "slug": "quievrechain",
    "name": "Quiévrechain",
    "codePostal": 59920,
    "codeInsee": 59484
  },
  {
    "departement": 34,
    "slug": "palavas-les-flots",
    "name": "Palavas-les-Flots",
    "codePostal": 34250,
    "codeInsee": 34192
  },
  {
    "departement": 78,
    "slug": "verriere",
    "name": "La Verrière",
    "codePostal": 78320,
    "codeInsee": 78644
  },
  {
    "departement": 59,
    "slug": "estaires",
    "name": "Estaires",
    "codePostal": 59940,
    "codeInsee": 59212
  },
  {
    "departement": 13,
    "slug": "bouilladisse",
    "name": "La Bouilladisse",
    "codePostal": 13720,
    "codeInsee": 13016
  },
  {
    "departement": 87,
    "slug": "palais-sur-vienne",
    "name": "Le Palais-sur-Vienne",
    "codePostal": 87410,
    "codeInsee": 87113
  },
  {
    "departement": 44,
    "slug": "montagne-44",
    "name": "La Montagne",
    "codePostal": 44620,
    "codeInsee": 44101
  },
  {
    "departement": 79,
    "slug": "chauray",
    "name": "Chauray",
    "codePostal": 79180,
    "codeInsee": 79081
  },
  {
    "departement": 87,
    "slug": "feytiat",
    "name": "Feytiat",
    "codePostal": 87220,
    "codeInsee": 87065
  },
  {
    "departement": 1,
    "slug": "prevessin-moens",
    "name": "Prévessin-Moëns",
    "codePostal": 1280,
    "codeInsee": 1313
  },
  {
    "departement": 1,
    "slug": "jassans-riottier",
    "name": "Jassans-Riottier",
    "codePostal": 1480,
    "codeInsee": 1194
  },
  {
    "departement": 2,
    "slug": "bohain-en-vermandois",
    "name": "Bohain-en-Vermandois",
    "codePostal": 2110,
    "codeInsee": 2095
  },
  {
    "departement": 25,
    "slug": "bethoncourt",
    "name": "Bethoncourt",
    "codePostal": 25200,
    "codeInsee": 25057
  },
  {
    "departement": 56,
    "slug": "kervignac",
    "name": "Kervignac",
    "codePostal": 56700,
    "codeInsee": 56094
  },
  {
    "departement": 35,
    "slug": "pleurtuit",
    "name": "Pleurtuit",
    "codePostal": 35730,
    "codeInsee": 35228
  },
  {
    "departement": 26,
    "slug": "saint-rambert-d-albon",
    "name": "Saint-Rambert-d'Albon",
    "codePostal": 26140,
    "codeInsee": 26325
  },
  {
    "departement": 74,
    "slug": "thones",
    "name": "Thônes",
    "codePostal": 74230,
    "codeInsee": 74280
  },
  {
    "departement": 44,
    "slug": "bouaye",
    "name": "Bouaye",
    "codePostal": 44830,
    "codeInsee": 44018
  },
  {
    "departement": 22,
    "slug": "pordic",
    "name": "Pordic",
    "codePostal": 22590,
    "codeInsee": 22251
  },
  {
    "departement": 59,
    "slug": "gorgue",
    "name": "La Gorgue",
    "codePostal": 59253,
    "codeInsee": 59268
  },
  {
    "departement": 14,
    "slug": "dives-sur-mer",
    "name": "Dives-sur-Mer",
    "codePostal": 14160,
    "codeInsee": 14225
  },
  {
    "departement": 95,
    "slug": "bouffemont",
    "name": "Bouffémont",
    "codePostal": 95570,
    "codeInsee": 95091
  },
  {
    "departement": 34,
    "slug": "cournonterral",
    "name": "Cournonterral",
    "codePostal": 34660,
    "codeInsee": 34088
  },
  {
    "departement": 16,
    "slug": "gond-pontouvre",
    "name": "Gond-Pontouvre",
    "codePostal": 16160,
    "codeInsee": 16154
  },
  {
    "departement": 61,
    "slug": "ferte-mace",
    "name": "La Ferté-Macé",
    "codePostal": 61600,
    "codeInsee": 61168
  },
  {
    "departement": 31,
    "slug": "escalquens",
    "name": "Escalquens",
    "codePostal": 31750,
    "codeInsee": 31169
  },
  {
    "departement": 69,
    "slug": "anse",
    "name": "Anse",
    "codePostal": 69480,
    "codeInsee": 69009
  },
  {
    "departement": 76,
    "slug": "malaunay",
    "name": "Malaunay",
    "codePostal": 76770,
    "codeInsee": 76402
  },
  {
    "departement": 25,
    "slug": "seloncourt",
    "name": "Seloncourt",
    "codePostal": 25230,
    "codeInsee": 25539
  },
  {
    "departement": 38,
    "slug": "saint-quentin-fallavier",
    "name": "Saint-Quentin-Fallavier",
    "codePostal": 38070,
    "codeInsee": 38449
  },
  {
    "departement": 77,
    "slug": "magny-le-hongre",
    "name": "Magny-le-Hongre",
    "codePostal": 77700,
    "codeInsee": 77268
  },
  {
    "departement": 90,
    "slug": "delle",
    "name": "Delle",
    "codePostal": 90100,
    "codeInsee": 90033
  },
  {
    "departement": 44,
    "slug": "machecoul",
    "name": "Machecoul",
    "codePostal": 44270,
    "codeInsee": 44087
  },
  {
    "departement": 43,
    "slug": "sainte-sigolene",
    "name": "Sainte-Sigolène",
    "codePostal": 43600,
    "codeInsee": 43224
  },
  {
    "departement": 73,
    "slug": "cognin",
    "name": "Cognin",
    "codePostal": 73160,
    "codeInsee": 73087
  },
  {
    "departement": 71,
    "slug": "chatenoy-le-royal",
    "name": "Châtenoy-le-Royal",
    "codePostal": 71880,
    "codeInsee": 71118
  },
  {
    "departement": 67,
    "slug": "wantzenau",
    "name": "La Wantzenau",
    "codePostal": 67610,
    "codeInsee": 67519
  },
  {
    "departement": 74,
    "slug": "ambilly",
    "name": "Ambilly",
    "codePostal": 74100,
    "codeInsee": 74008
  },
  {
    "departement": 74,
    "slug": "saint-pierre-en-faucigny",
    "name": "Saint-Pierre-en-Faucigny",
    "codePostal": 74800,
    "codeInsee": 74250
  },
  {
    "departement": 78,
    "slug": "chambourcy",
    "name": "Chambourcy",
    "codePostal": 78240,
    "codeInsee": 78133
  },
  {
    "departement": 78,
    "slug": "orgeval-78",
    "name": "Orgeval",
    "codePostal": 78630,
    "codeInsee": 78466
  },
  {
    "departement": 26,
    "slug": "tain-l-hermitage",
    "name": "Tain-l'Hermitage",
    "codePostal": 26600,
    "codeInsee": 26347
  },
  {
    "departement": 71,
    "slug": "tournus",
    "name": "Tournus",
    "codePostal": 71700,
    "codeInsee": 71543
  },
  {
    "departement": 88,
    "slug": "mirecourt",
    "name": "Mirecourt",
    "codePostal": 88500,
    "codeInsee": 88304
  },
  {
    "departement": 78,
    "slug": "magnanville",
    "name": "Magnanville",
    "codePostal": 78200,
    "codeInsee": 78354
  },
  {
    "departement": 38,
    "slug": "saint-maurice-l-exil",
    "name": "Saint-Maurice-l'Exil",
    "codePostal": 38550,
    "codeInsee": 38425
  },
  {
    "departement": 53,
    "slug": "bonchamp-les-laval",
    "name": "Bonchamp-lès-Laval",
    "codePostal": 53960,
    "codeInsee": 53034
  },
  {
    "departement": 57,
    "slug": "marange-silvange",
    "name": "Marange-Silvange",
    "codePostal": 57159,
    "codeInsee": 57443
  },
  {
    "departement": 86,
    "slug": "naintre",
    "name": "Naintré",
    "codePostal": 86530,
    "codeInsee": 86174
  },
  {
    "departement": 36,
    "slug": "poinconnet",
    "name": "Le Poinçonnet",
    "codePostal": 36330,
    "codeInsee": 36159
  },
  {
    "departement": 29,
    "slug": "ploneour-lanvern",
    "name": "Plonéour-Lanvern",
    "codePostal": 29720,
    "codeInsee": 29174
  },
  {
    "departement": 26,
    "slug": "loriol-sur-drome",
    "name": "Loriol-sur-Drôme",
    "codePostal": 26270,
    "codeInsee": 26166
  },
  {
    "departement": 44,
    "slug": "herbignac",
    "name": "Herbignac",
    "codePostal": 44410,
    "codeInsee": 44072
  },
  {
    "departement": 65,
    "slug": "lannemezan",
    "name": "Lannemezan",
    "codePostal": 65300,
    "codeInsee": 65258
  },
  {
    "departement": 77,
    "slug": "nandy",
    "name": "Nandy",
    "codePostal": 77176,
    "codeInsee": 77326
  },
  {
    "departement": 14,
    "slug": "blainville-sur-orne",
    "name": "Blainville-sur-Orne",
    "codePostal": 14550,
    "codeInsee": 14076
  },
  {
    "departement": 71,
    "slug": "saint-marcel-71",
    "name": "Saint-Marcel",
    "codePostal": 71380,
    "codeInsee": 71445
  },
  {
    "departement": 86,
    "slug": "jaunay-clan",
    "name": "Jaunay-Clan",
    "codePostal": 86130,
    "codeInsee": 86115
  },
  {
    "departement": 84,
    "slug": "sarrians",
    "name": "Sarrians",
    "codePostal": 84260,
    "codeInsee": 84122
  },
  {
    "departement": 974,
    "slug": "cilaos",
    "name": "Cilaos",
    "codePostal": 97413,
    "codeInsee": 97424
  },
  {
    "departement": 3,
    "slug": "gannat",
    "name": "Gannat",
    "codePostal": 3800,
    "codeInsee": 3118
  },
  {
    "departement": 91,
    "slug": "wissous",
    "name": "Wissous",
    "codePostal": 91320,
    "codeInsee": 91689
  },
  {
    "departement": 78,
    "slug": "maule",
    "name": "Maule",
    "codePostal": 78580,
    "codeInsee": 78380
  },
  {
    "departement": 83,
    "slug": "montauroux",
    "name": "Montauroux",
    "codePostal": 83440,
    "codeInsee": 83081
  },
  {
    "departement": 30,
    "slug": "milhaud",
    "name": "Milhaud",
    "codePostal": 30540,
    "codeInsee": 30169
  },
  {
    "departement": 29,
    "slug": "penmarch",
    "name": "Penmarch",
    "codePostal": 29760,
    "codeInsee": 29158
  },
  {
    "departement": 84,
    "slug": "mazan",
    "name": "Mazan",
    "codePostal": 84380,
    "codeInsee": 84072
  },
  {
    "departement": 53,
    "slug": "ernee",
    "name": "Ernée",
    "codePostal": 53500,
    "codeInsee": 53096
  },
  {
    "departement": 76,
    "slug": "octeville-sur-mer",
    "name": "Octeville-sur-Mer",
    "codePostal": 76930,
    "codeInsee": 76481
  },
  {
    "departement": 56,
    "slug": "ploeren",
    "name": "Ploeren",
    "codePostal": 56880,
    "codeInsee": 56164
  },
  {
    "departement": 59,
    "slug": "templeuve",
    "name": "Templeuve",
    "codePostal": 59242,
    "codeInsee": 59586
  },
  {
    "departement": 58,
    "slug": "decize",
    "name": "Decize",
    "codePostal": 58300,
    "codeInsee": 58095
  },
  {
    "departement": 54,
    "slug": "heillecourt",
    "name": "Heillecourt",
    "codePostal": 54180,
    "codeInsee": 54257
  },
  {
    "departement": 18,
    "slug": "aubigny-sur-nere",
    "name": "Aubigny-sur-Nère",
    "codePostal": 18700,
    "codeInsee": 18015
  },
  {
    "departement": 69,
    "slug": "jonage",
    "name": "Jonage",
    "codePostal": 69330,
    "codeInsee": 69279
  },
  {
    "departement": 78,
    "slug": "chevreuse",
    "name": "Chevreuse",
    "codePostal": 78460,
    "codeInsee": 78160
  },
  {
    "departement": 68,
    "slug": "altkirch",
    "name": "Altkirch",
    "codePostal": 68130,
    "codeInsee": 68004
  },
  {
    "departement": 62,
    "slug": "calonne-ricouart",
    "name": "Calonne-Ricouart",
    "codePostal": 62470,
    "codeInsee": 62194
  },
  {
    "departement": 77,
    "slug": "esbly",
    "name": "Esbly",
    "codePostal": 77450,
    "codeInsee": 77171
  },
  {
    "departement": 34,
    "slug": "castries",
    "name": "Castries",
    "codePostal": 34160,
    "codeInsee": 34058
  },
  {
    "departement": 95,
    "slug": "magny-en-vexin",
    "name": "Magny-en-Vexin",
    "codePostal": 95420,
    "codeInsee": 95355
  },
  {
    "departement": 83,
    "slug": "saint-mandrier-sur-mer",
    "name": "Saint-Mandrier-sur-Mer",
    "codePostal": 83430,
    "codeInsee": 83153
  },
  {
    "departement": 62,
    "slug": "marles-les-mines",
    "name": "Marles-les-Mines",
    "codePostal": 62540,
    "codeInsee": 62555
  },
  {
    "departement": 57,
    "slug": "farebersviller",
    "name": "Farébersviller",
    "codePostal": 57450,
    "codeInsee": 57207
  },
  {
    "departement": 76,
    "slug": "franqueville-saint-pierre",
    "name": "Franqueville-Saint-Pierre",
    "codePostal": 76520,
    "codeInsee": 76475
  },
  {
    "departement": 31,
    "slug": "cornebarrieu",
    "name": "Cornebarrieu",
    "codePostal": 31700,
    "codeInsee": 31150
  },
  {
    "departement": 30,
    "slug": "laudun-l-ardoise",
    "name": "Laudun-l'Ardoise",
    "codePostal": 30290,
    "codeInsee": 30141
  },
  {
    "departement": 77,
    "slug": "saint-pathus",
    "name": "Saint-Pathus",
    "codePostal": 77178,
    "codeInsee": 77430
  },
  {
    "departement": 74,
    "slug": "saint-jorioz",
    "name": "Saint-Jorioz",
    "codePostal": 74410,
    "codeInsee": 74242
  },
  {
    "departement": 11,
    "slug": "port-la-nouvelle",
    "name": "Port-la-Nouvelle",
    "codePostal": 11210,
    "codeInsee": 11266
  },
  {
    "departement": 45,
    "slug": "briare",
    "name": "Briare",
    "codePostal": 45250,
    "codeInsee": 45053
  },
  {
    "departement": 73,
    "slug": "saint-alban-leysse",
    "name": "Saint-Alban-Leysse",
    "codePostal": 73230,
    "codeInsee": 73222
  },
  {
    "departement": 12,
    "slug": "luc-la-primaube",
    "name": "Luc-la-Primaube",
    "codePostal": 12450,
    "codeInsee": 12133
  },
  {
    "departement": 64,
    "slug": "saint-pee-sur-nivelle",
    "name": "Saint-Pée-sur-Nivelle",
    "codePostal": 64310,
    "codeInsee": 64495
  },
  {
    "departement": 41,
    "slug": "salbris",
    "name": "Salbris",
    "codePostal": 41300,
    "codeInsee": 41232
  },
  {
    "departement": 74,
    "slug": "saint-gervais-les-bains",
    "name": "Saint-Gervais-les-Bains",
    "codePostal": 74190,
    "codeInsee": 74236
  },
  {
    "departement": 30,
    "slug": "manduel",
    "name": "Manduel",
    "codePostal": 30129,
    "codeInsee": 30155
  },
  {
    "departement": 34,
    "slug": "gigean",
    "name": "Gigean",
    "codePostal": 34770,
    "codeInsee": 34113
  },
  {
    "departement": 62,
    "slug": "coulogne",
    "name": "Coulogne",
    "codePostal": 62137,
    "codeInsee": 62244
  },
  {
    "departement": 80,
    "slug": "longueau",
    "name": "Longueau",
    "codePostal": 80330,
    "codeInsee": 80489
  },
  {
    "departement": 44,
    "slug": "pont-saint-martin",
    "name": "Pont-Saint-Martin",
    "codePostal": 44860,
    "codeInsee": 44130
  },
  {
    "departement": 42,
    "slug": "saint-genest-lerpt",
    "name": "Saint-Genest-Lerpt",
    "codePostal": 42530,
    "codeInsee": 42223
  },
  {
    "departement": 62,
    "slug": "annezin",
    "name": "Annezin",
    "codePostal": 62232,
    "codeInsee": 62035
  },
  {
    "departement": 74,
    "slug": "thyez",
    "name": "Thyez",
    "codePostal": 74300,
    "codeInsee": 74278
  },
  {
    "departement": 28,
    "slug": "leves",
    "name": "Lèves",
    "codePostal": 28300,
    "codeInsee": 28209
  },
  {
    "departement": 67,
    "slug": "mutzig",
    "name": "Mutzig",
    "codePostal": 67190,
    "codeInsee": 67313
  },
  {
    "departement": 67,
    "slug": "benfeld",
    "name": "Benfeld",
    "codePostal": 67230,
    "codeInsee": 67028
  },
  {
    "departement": 94,
    "slug": "rungis",
    "name": "Rungis",
    "codePostal": 94150,
    "codeInsee": 94065
  },
  {
    "departement": 31,
    "slug": "villemur-sur-tarn",
    "name": "Villemur-sur-Tarn",
    "codePostal": 31340,
    "codeInsee": 31584
  },
  {
    "departement": 77,
    "slug": "bois-le-roi-77",
    "name": "Bois-le-Roi",
    "codePostal": 77590,
    "codeInsee": 77037
  },
  {
    "departement": 62,
    "slug": "guînes",
    "name": "Guînes",
    "codePostal": 62340,
    "codeInsee": 62397
  },
  {
    "departement": 17,
    "slug": "nieul-sur-mer",
    "name": "Nieul-sur-Mer",
    "codePostal": 17137,
    "codeInsee": 17264
  },
  {
    "departement": 35,
    "slug": "combourg",
    "name": "Combourg",
    "codePostal": 35270,
    "codeInsee": 35085
  },
  {
    "departement": 31,
    "slug": "saint-alban-31",
    "name": "Saint-Alban",
    "codePostal": 31140,
    "codeInsee": 31467
  },
  {
    "departement": 82,
    "slug": "montech",
    "name": "Montech",
    "codePostal": 82700,
    "codeInsee": 82125
  },
  {
    "departement": 59,
    "slug": "flers-en-escrebieux",
    "name": "Flers-en-Escrebieux",
    "codePostal": 59128,
    "codeInsee": 59234
  },
  {
    "departement": 62,
    "slug": "dourges",
    "name": "Dourges",
    "codePostal": 62119,
    "codeInsee": 62274
  },
  {
    "departement": 59,
    "slug": "santes",
    "name": "Santes",
    "codePostal": 59211,
    "codeInsee": 59553
  },
  {
    "departement": 77,
    "slug": "saint-pierre-les-nemours",
    "name": "Saint-Pierre-lès-Nemours",
    "codePostal": 77140,
    "codeInsee": 77431
  },
  {
    "departement": 43,
    "slug": "aurec-sur-loire",
    "name": "Aurec-sur-Loire",
    "codePostal": 43110,
    "codeInsee": 43012
  },
  {
    "departement": 21,
    "slug": "genlis",
    "name": "Genlis",
    "codePostal": 21110,
    "codeInsee": 21292
  },
  {
    "departement": 83,
    "slug": "gareoult",
    "name": "Garéoult",
    "codePostal": 83136,
    "codeInsee": 83064
  },
  {
    "departement": 17,
    "slug": "marennes-17",
    "name": "Marennes",
    "codePostal": 17320,
    "codeInsee": 17219
  },
  {
    "departement": 76,
    "slug": "cleon",
    "name": "Cléon",
    "codePostal": 76410,
    "codeInsee": 76178
  },
  {
    "departement": 42,
    "slug": "sury-le-comtal",
    "name": "Sury-le-Comtal",
    "codePostal": 42450,
    "codeInsee": 42304
  },
  {
    "departement": 21,
    "slug": "nuits-saint-georges",
    "name": "Nuits-Saint-Georges",
    "codePostal": 21700,
    "codeInsee": 21464
  },
  {
    "departement": 31,
    "slug": "castelnau-d-estretefonds",
    "name": "Castelnau-d'Estrétefonds",
    "codePostal": 31620,
    "codeInsee": 31118
  },
  {
    "departement": 63,
    "slug": "lezoux",
    "name": "Lezoux",
    "codePostal": 63190,
    "codeInsee": 63195
  },
  {
    "departement": 67,
    "slug": "wasselonne",
    "name": "Wasselonne",
    "codePostal": 67310,
    "codeInsee": 67520
  },
  {
    "departement": 88,
    "slug": "rambervillers",
    "name": "Rambervillers",
    "codePostal": 88700,
    "codeInsee": 88367
  },
  {
    "departement": 31,
    "slug": "fronton",
    "name": "Fronton",
    "codePostal": 31620,
    "codeInsee": 31202
  },
  {
    "departement": 42,
    "slug": "saint-galmier",
    "name": "Saint-Galmier",
    "codePostal": 42330,
    "codeInsee": 42222
  },
  {
    "departement": 69,
    "slug": "saint-cyr-au-mont-d-or",
    "name": "Saint-Cyr-au-Mont-d'Or",
    "codePostal": 69450,
    "codeInsee": 69191
  },
  {
    "departement": 14,
    "slug": "colombelles",
    "name": "Colombelles",
    "codePostal": 14460,
    "codeInsee": 14167
  },
  {
    "departement": 33,
    "slug": "lesparre-medoc",
    "name": "Lesparre-Médoc",
    "codePostal": 33340,
    "codeInsee": 33240
  },
  {
    "departement": 34,
    "slug": "vendargues",
    "name": "Vendargues",
    "codePostal": 34740,
    "codeInsee": 34327
  },
  {
    "departement": 54,
    "slug": "briey",
    "name": "Briey",
    "codePostal": 54150,
    "codeInsee": 54099
  },
  {
    "departement": 35,
    "slug": "melesse",
    "name": "Melesse",
    "codePostal": 35520,
    "codeInsee": 35173
  },
  {
    "departement": 54,
    "slug": "longuyon",
    "name": "Longuyon",
    "codePostal": 54260,
    "codeInsee": 54322
  },
  {
    "departement": 59,
    "slug": "wallers",
    "name": "Wallers",
    "codePostal": 59135,
    "codeInsee": 59632
  },
  {
    "departement": 33,
    "slug": "ares",
    "name": "Arès",
    "codePostal": 33740,
    "codeInsee": 33011
  },
  {
    "departement": 71,
    "slug": "chagny-71",
    "name": "Chagny",
    "codePostal": 71150,
    "codeInsee": 71073
  },
  {
    "departement": 33,
    "slug": "pian-medoc",
    "name": "Le Pian-Médoc",
    "codePostal": 33290,
    "codeInsee": 33322
  },
  {
    "departement": 62,
    "slug": "dainville",
    "name": "Dainville",
    "codePostal": 62000,
    "codeInsee": 62263
  },
  {
    "departement": 21,
    "slug": "chatillon-sur-seine",
    "name": "Châtillon-sur-Seine",
    "codePostal": 21400,
    "codeInsee": 21154
  },
  {
    "departement": 77,
    "slug": "souppes-sur-loing",
    "name": "Souppes-sur-Loing",
    "codePostal": 77460,
    "codeInsee": 77458
  },
  {
    "departement": 67,
    "slug": "vendenheim",
    "name": "Vendenheim",
    "codePostal": 67550,
    "codeInsee": 67506
  },
  {
    "departement": 57,
    "slug": "faulquemont",
    "name": "Faulquemont",
    "codePostal": 57380,
    "codeInsee": 57209
  },
  {
    "departement": 83,
    "slug": "pierrefeu-du-var",
    "name": "Pierrefeu-du-Var",
    "codePostal": 83390,
    "codeInsee": 83091
  },
  {
    "departement": 83,
    "slug": "lavandou",
    "name": "Le Lavandou",
    "codePostal": 83980,
    "codeInsee": 83070
  },
  {
    "departement": 87,
    "slug": "ambazac",
    "name": "Ambazac",
    "codePostal": 87240,
    "codeInsee": 87002
  },
  {
    "departement": 59,
    "slug": "sainghin-en-weppes",
    "name": "Sainghin-en-Weppes",
    "codePostal": 59184,
    "codeInsee": 59524
  },
  {
    "departement": 83,
    "slug": "trans-en-provence",
    "name": "Trans-en-Provence",
    "codePostal": 83720,
    "codeInsee": 83141
  },
  {
    "departement": 95,
    "slug": "parmain",
    "name": "Parmain",
    "codePostal": 95620,
    "codeInsee": 95480
  },
  {
    "departement": 44,
    "slug": "haute-goulaine",
    "name": "Haute-Goulaine",
    "codePostal": 44115,
    "codeInsee": 44071
  },
  {
    "departement": 971,
    "slug": "grand-bourg-971",
    "name": "Grand-Bourg",
    "codePostal": 97112,
    "codeInsee": 97112
  },
  {
    "departement": 91,
    "slug": "lardy",
    "name": "Lardy",
    "codePostal": 91510,
    "codeInsee": 91330
  },
  {
    "departement": 13,
    "slug": "saint-cannat",
    "name": "Saint-Cannat",
    "codePostal": 13760,
    "codeInsee": 13091
  },
  {
    "departement": 23,
    "slug": "souterraine",
    "name": "La Souterraine",
    "codePostal": 23300,
    "codeInsee": 23176
  },
  {
    "departement": 78,
    "slug": "rosny-sur-seine",
    "name": "Rosny-sur-Seine",
    "codePostal": 78710,
    "codeInsee": 78531
  },
  {
    "departement": 69,
    "slug": "brindas",
    "name": "Brindas",
    "codePostal": 69126,
    "codeInsee": 69028
  },
  {
    "departement": 67,
    "slug": "reichshoffen",
    "name": "Reichshoffen",
    "codePostal": 67110,
    "codeInsee": 67388
  },
  {
    "departement": 69,
    "slug": "mornant",
    "name": "Mornant",
    "codePostal": 69440,
    "codeInsee": 69141
  },
  {
    "departement": 21,
    "slug": "montbard",
    "name": "Montbard",
    "codePostal": 21500,
    "codeInsee": 21425
  },
  {
    "departement": 53,
    "slug": "change-53",
    "name": "Changé",
    "codePostal": 53810,
    "codeInsee": 53054
  },
  {
    "departement": 50,
    "slug": "glacerie",
    "name": "La Glacerie",
    "codePostal": 50470,
    "codeInsee": 50203
  },
  {
    "departement": 60,
    "slug": "saint-just-en-chaussee",
    "name": "Saint-Just-en-Chaussée",
    "codePostal": 60130,
    "codeInsee": 60581
  },
  {
    "departement": 68,
    "slug": "sainte-marie-aux-mines",
    "name": "Sainte-Marie-aux-Mines",
    "codePostal": 68160,
    "codeInsee": 68298
  },
  {
    "departement": 8,
    "slug": "bogny-sur-meuse",
    "name": "Bogny-sur-Meuse",
    "codePostal": 8120,
    "codeInsee": 8081
  },
  {
    "departement": 71,
    "slug": "montchanin",
    "name": "Montchanin",
    "codePostal": 71210,
    "codeInsee": 71310
  },
  {
    "departement": 72,
    "slug": "mamers",
    "name": "Mamers",
    "codePostal": 72600,
    "codeInsee": 72180
  },
  {
    "departement": 87,
    "slug": "aixe-sur-vienne",
    "name": "Aixe-sur-Vienne",
    "codePostal": 87700,
    "codeInsee": 87001
  },
  {
    "departement": 95,
    "slug": "marly-la-ville",
    "name": "Marly-la-Ville",
    "codePostal": 95670,
    "codeInsee": 95371
  },
  {
    "departement": 68,
    "slug": "sausheim",
    "name": "Sausheim",
    "codePostal": 68390,
    "codeInsee": 68300
  },
  {
    "departement": 24,
    "slug": "saint-astier-24",
    "name": "Saint-Astier",
    "codePostal": 24110,
    "codeInsee": 24372
  },
  {
    "departement": 24,
    "slug": "montpon-menesterol",
    "name": "Montpon-Ménestérol",
    "codePostal": 24700,
    "codeInsee": 24294
  },
  {
    "departement": 59,
    "slug": "ferriere-la-grande",
    "name": "Ferrière-la-Grande",
    "codePostal": 59680,
    "codeInsee": 59230
  },
  {
    "departement": 85,
    "slug": "pouzauges",
    "name": "Pouzauges",
    "codePostal": 85700,
    "codeInsee": 85182
  },
  {
    "departement": 88,
    "slug": "vittel",
    "name": "Vittel",
    "codePostal": 88800,
    "codeInsee": 88516
  },
  {
    "departement": 29,
    "slug": "bannalec",
    "name": "Bannalec",
    "codePostal": 29380,
    "codeInsee": 29004
  },
  {
    "departement": 79,
    "slug": "creche",
    "name": "La Crèche",
    "codePostal": 79260,
    "codeInsee": 79048
  },
  {
    "departement": 34,
    "slug": "gignac-34",
    "name": "Gignac",
    "codePostal": 34150,
    "codeInsee": 34114
  },
  {
    "departement": 38,
    "slug": "saint-martin-d-uriage",
    "name": "Saint-Martin-d'Uriage",
    "codePostal": 38410,
    "codeInsee": 38422
  },
  {
    "departement": 64,
    "slug": "gan",
    "name": "Gan",
    "codePostal": 64290,
    "codeInsee": 64230
  },
  {
    "departement": 79,
    "slug": "nueil-les-aubiers",
    "name": "Nueil-les-Aubiers",
    "codePostal": 79250,
    "codeInsee": 79195
  },
  {
    "departement": 2,
    "slug": "gauchy",
    "name": "Gauchy",
    "codePostal": 2430,
    "codeInsee": 2340
  },
  {
    "departement": 45,
    "slug": "sully-sur-loire",
    "name": "Sully-sur-Loire",
    "codePostal": 45600,
    "codeInsee": 45315
  },
  {
    "departement": 59,
    "slug": "flines-lez-raches",
    "name": "Flines-lez-Raches",
    "codePostal": 59148,
    "codeInsee": 59239
  },
  {
    "departement": 35,
    "slug": "noyal-sur-vilaine",
    "name": "Noyal-sur-Vilaine",
    "codePostal": 35530,
    "codeInsee": 35207
  },
  {
    "departement": 971,
    "slug": "port-louis-971",
    "name": "Port-Louis",
    "codePostal": 97117,
    "codeInsee": 97122
  },
  {
    "departement": 44,
    "slug": "vigneux-de-bretagne",
    "name": "Vigneux-de-Bretagne",
    "codePostal": 44360,
    "codeInsee": 44217
  },
  {
    "departement": 44,
    "slug": "sainte-pazanne",
    "name": "Sainte-Pazanne",
    "codePostal": 44680,
    "codeInsee": 44186
  },
  {
    "departement": 66,
    "slug": "boulou",
    "name": "Le Boulou",
    "codePostal": 66160,
    "codeInsee": 66024
  },
  {
    "departement": 13,
    "slug": "simiane-collongue",
    "name": "Simiane-Collongue",
    "codePostal": 13109,
    "codeInsee": 13107
  },
  {
    "departement": 57,
    "slug": "hopital",
    "name": "L'Hôpital",
    "codePostal": 57490,
    "codeInsee": 57336
  },
  {
    "departement": 59,
    "slug": "grand-fort-philippe",
    "name": "Grand-Fort-Philippe",
    "codePostal": 59153,
    "codeInsee": 59272
  },
  {
    "departement": 77,
    "slug": "nanteuil-les-meaux",
    "name": "Nanteuil-lès-Meaux",
    "codePostal": 77100,
    "codeInsee": 77330
  },
  {
    "departement": 38,
    "slug": "avenieres",
    "name": "Avenières",
    "codePostal": 38630,
    "codeInsee": 38022
  },
  {
    "departement": 13,
    "slug": "saint-mitre-les-remparts",
    "name": "Saint-Mitre-les-Remparts",
    "codePostal": 13920,
    "codeInsee": 13098
  },
  {
    "departement": 62,
    "slug": "oye-plage",
    "name": "Oye-Plage",
    "codePostal": 62215,
    "codeInsee": 62645
  },
  {
    "departement": 30,
    "slug": "roquemaure-30",
    "name": "Roquemaure",
    "codePostal": 30150,
    "codeInsee": 30221
  },
  {
    "departement": 14,
    "slug": "conde-sur-noireau",
    "name": "Condé-sur-Noireau",
    "codePostal": 14110,
    "codeInsee": 14174
  },
  {
    "departement": 47,
    "slug": "boe",
    "name": "Boé",
    "codePostal": 47550,
    "codeInsee": 47031
  },
  {
    "departement": 6,
    "slug": "villefranche-sur-mer",
    "name": "Villefranche-sur-Mer",
    "codePostal": 6230,
    "codeInsee": 6159
  },
  {
    "departement": 1,
    "slug": "saint-denis-les-bourg",
    "name": "Saint-Denis-lès-Bourg",
    "codePostal": 1000,
    "codeInsee": 1344
  },
  {
    "departement": "2B",
    "slug": "calvi",
    "name": "Calvi",
    "codePostal": 20260,
    "codeInsee": "2B050"
  },
  {
    "departement": 4,
    "slug": "oraison",
    "name": "Oraison",
    "codePostal": 4700,
    "codeInsee": 4143
  },
  {
    "departement": 51,
    "slug": "fismes",
    "name": "Fismes",
    "codePostal": 51170,
    "codeInsee": 51250
  },
  {
    "departement": 31,
    "slug": "eaunes",
    "name": "Eaunes",
    "codePostal": 31600,
    "codeInsee": 31165
  },
  {
    "departement": 84,
    "slug": "courthezon",
    "name": "Courthézon",
    "codePostal": 84350,
    "codeInsee": 84039
  },
  {
    "departement": 74,
    "slug": "sciez",
    "name": "Sciez",
    "codePostal": 74140,
    "codeInsee": 74263
  },
  {
    "departement": 83,
    "slug": "cadiere-d-azur",
    "name": "La Cadière-d'Azur",
    "codePostal": 83740,
    "codeInsee": 83027
  },
  {
    "departement": 13,
    "slug": "peypin",
    "name": "Peypin",
    "codePostal": 13124,
    "codeInsee": 13073
  },
  {
    "departement": 56,
    "slug": "arradon",
    "name": "Arradon",
    "codePostal": 56610,
    "codeInsee": 56003
  },
  {
    "departement": 11,
    "slug": "sigean",
    "name": "Sigean",
    "codePostal": 11130,
    "codeInsee": 11379
  },
  {
    "departement": 29,
    "slug": "briec",
    "name": "Briec",
    "codePostal": 29510,
    "codeInsee": 29020
  },
  {
    "departement": 33,
    "slug": "izon",
    "name": "Izon",
    "codePostal": 33450,
    "codeInsee": 33207
  },
  {
    "departement": 28,
    "slug": "epernon",
    "name": "Épernon",
    "codePostal": 28230,
    "codeInsee": 28140
  },
  {
    "departement": 67,
    "slug": "fegersheim",
    "name": "Fegersheim",
    "codePostal": 67640,
    "codeInsee": 67137
  },
  {
    "departement": 17,
    "slug": "puilboreau",
    "name": "Puilboreau",
    "codePostal": 17138,
    "codeInsee": 17291
  },
  {
    "departement": 38,
    "slug": "saint-martin-le-vinoux",
    "name": "Saint-Martin-le-Vinoux",
    "codePostal": 38950,
    "codeInsee": 38423
  },
  {
    "departement": 59,
    "slug": "fenain",
    "name": "Fenain",
    "codePostal": 59179,
    "codeInsee": 59227
  },
  {
    "departement": 69,
    "slug": "lentilly",
    "name": "Lentilly",
    "codePostal": 69210,
    "codeInsee": 69112
  },
  {
    "departement": 34,
    "slug": "vias",
    "name": "Vias",
    "codePostal": 34450,
    "codeInsee": 34332
  },
  {
    "departement": 74,
    "slug": "cranves-sales",
    "name": "Cranves-Sales",
    "codePostal": 74380,
    "codeInsee": 74094
  },
  {
    "departement": 26,
    "slug": "donzere",
    "name": "Donzère",
    "codePostal": 26290,
    "codeInsee": 26116
  },
  {
    "departement": 34,
    "slug": "saint-georges-d-orques",
    "name": "Saint-Georges-d'Orques",
    "codePostal": 34680,
    "codeInsee": 34259
  },
  {
    "departement": 63,
    "slug": "ceyrat",
    "name": "Ceyrat",
    "codePostal": 63122,
    "codeInsee": 63070
  },
  {
    "departement": 44,
    "slug": "saint-andre-des-eaux-44",
    "name": "Saint-André-des-Eaux",
    "codePostal": 44117,
    "codeInsee": 44151
  },
  {
    "departement": 35,
    "slug": "dol-de-bretagne",
    "name": "Dol-de-Bretagne",
    "codePostal": 35120,
    "codeInsee": 35095
  },
  {
    "departement": 69,
    "slug": "ternay-69",
    "name": "Ternay",
    "codePostal": 69360,
    "codeInsee": 69297
  },
  {
    "departement": 17,
    "slug": "dompierre-sur-mer",
    "name": "Dompierre-sur-Mer",
    "codePostal": 17139,
    "codeInsee": 17142
  },
  {
    "departement": 49,
    "slug": "mûrs-erigne",
    "name": "Mûrs-Erigné",
    "codePostal": 49130,
    "codeInsee": 49223
  },
  {
    "departement": 35,
    "slug": "cancale",
    "name": "Cancale",
    "codePostal": 35260,
    "codeInsee": 35049
  },
  {
    "departement": 91,
    "slug": "egly",
    "name": "Égly",
    "codePostal": 91520,
    "codeInsee": 91207
  },
  {
    "departement": 34,
    "slug": "saint-andre-de-sangonis",
    "name": "Saint-André-de-Sangonis",
    "codePostal": 34725,
    "codeInsee": 34239
  },
  {
    "departement": 51,
    "slug": "saint-memmie",
    "name": "Saint-Memmie",
    "codePostal": 51470,
    "codeInsee": 51506
  },
  {
    "departement": 57,
    "slug": "bitche",
    "name": "Bitche",
    "codePostal": 57230,
    "codeInsee": 57089
  },
  {
    "departement": 25,
    "slug": "baume-les-dames",
    "name": "Baume-les-Dames",
    "codePostal": 25110,
    "codeInsee": 25047
  },
  {
    "departement": 78,
    "slug": "buc-78",
    "name": "Buc",
    "codePostal": 78530,
    "codeInsee": 78117
  },
  {
    "departement": 56,
    "slug": "elven",
    "name": "Elven",
    "codePostal": 56250,
    "codeInsee": 56053
  },
  {
    "departement": 11,
    "slug": "trebes",
    "name": "Trèbes",
    "codePostal": 11800,
    "codeInsee": 11397
  },
  {
    "departement": 69,
    "slug": "saint-symphorien-d-ozon",
    "name": "Saint-Symphorien-d'Ozon",
    "codePostal": 69360,
    "codeInsee": 69291
  },
  {
    "departement": 40,
    "slug": "parentis-en-born",
    "name": "Parentis-en-Born",
    "codePostal": 40160,
    "codeInsee": 40217
  },
  {
    "departement": 13,
    "slug": "puy-sainte-reparade",
    "name": "Le Puy-Sainte-Réparade",
    "codePostal": 13610,
    "codeInsee": 13080
  },
  {
    "departement": 62,
    "slug": "loison-sous-lens",
    "name": "Loison-sous-Lens",
    "codePostal": 62218,
    "codeInsee": 62523
  },
  {
    "departement": 13,
    "slug": "meyreuil",
    "name": "Meyreuil",
    "codePostal": 13590,
    "codeInsee": 13060
  },
  {
    "departement": 89,
    "slug": "villeneuve-sur-yonne",
    "name": "Villeneuve-sur-Yonne",
    "codePostal": 89500,
    "codeInsee": 89464
  },
  {
    "departement": 26,
    "slug": "saint-marcel-les-valence",
    "name": "Saint-Marcel-lès-Valence",
    "codePostal": 26320,
    "codeInsee": 26313
  },
  {
    "departement": 29,
    "slug": "lannilis",
    "name": "Lannilis",
    "codePostal": 29870,
    "codeInsee": 29117
  },
  {
    "departement": 29,
    "slug": "scaer",
    "name": "Scaër",
    "codePostal": 29390,
    "codeInsee": 29274
  },
  {
    "departement": 95,
    "slug": "menucourt",
    "name": "Menucourt",
    "codePostal": 95180,
    "codeInsee": 95388
  },
  {
    "departement": 16,
    "slug": "isle-d-espagnac",
    "name": "L'Isle-d'Espagnac",
    "codePostal": 16340,
    "codeInsee": 16166
  },
  {
    "departement": 56,
    "slug": "plouay",
    "name": "Plouay",
    "codePostal": 56240,
    "codeInsee": 56166
  },
  {
    "departement": 60,
    "slug": "mouy",
    "name": "Mouy",
    "codePostal": 60250,
    "codeInsee": 60439
  },
  {
    "departement": 65,
    "slug": "vic-en-bigorre",
    "name": "Vic-en-Bigorre",
    "codePostal": 65500,
    "codeInsee": 65460
  },
  {
    "departement": 44,
    "slug": "heric",
    "name": "Héric",
    "codePostal": 44810,
    "codeInsee": 44073
  },
  {
    "departement": "2B",
    "slug": "furiani",
    "name": "Furiani",
    "codePostal": 20600,
    "codeInsee": "2B120"
  },
  {
    "departement": 76,
    "slug": "trait",
    "name": "Le Trait",
    "codePostal": 76580,
    "codeInsee": 76709
  },
  {
    "departement": 38,
    "slug": "chasse-sur-rhone",
    "name": "Chasse-sur-Rhône",
    "codePostal": 38670,
    "codeInsee": 38087
  },
  {
    "departement": 78,
    "slug": "jouars-pontchartrain",
    "name": "Jouars-Pontchartrain",
    "codePostal": 78760,
    "codeInsee": 78321
  },
  {
    "departement": 4,
    "slug": "chateau-arnoux-saint-auban",
    "name": "Château-Arnoux-Saint-Auban",
    "codePostal": 4160,
    "codeInsee": 4049
  },
  {
    "departement": 66,
    "slug": "ille-sur-tet",
    "name": "Ille-sur-Têt",
    "codePostal": 66130,
    "codeInsee": 66088
  },
  {
    "departement": 59,
    "slug": "bauvin",
    "name": "Bauvin",
    "codePostal": 59221,
    "codeInsee": 59052
  },
  {
    "departement": 51,
    "slug": "sezanne",
    "name": "Sézanne",
    "codePostal": 51120,
    "codeInsee": 51535
  },
  {
    "departement": 71,
    "slug": "bourbon-lancy",
    "name": "Bourbon-Lancy",
    "codePostal": 71140,
    "codeInsee": 71047
  },
  {
    "departement": 10,
    "slug": "bar-sur-aube",
    "name": "Bar-sur-Aube",
    "codePostal": 10200,
    "codeInsee": 10033
  },
  {
    "departement": 76,
    "slug": "treport",
    "name": "Le Tréport",
    "codePostal": 76470,
    "codeInsee": 76711
  },
  {
    "departement": 50,
    "slug": "querqueville",
    "name": "Querqueville",
    "codePostal": 50460,
    "codeInsee": 50416
  },
  {
    "departement": 89,
    "slug": "tonnerre",
    "name": "Tonnerre",
    "codePostal": 89700,
    "codeInsee": 89418
  },
  {
    "departement": 13,
    "slug": "noves",
    "name": "Noves",
    "codePostal": 13550,
    "codeInsee": 13066
  },
  {
    "departement": 59,
    "slug": "wormhout",
    "name": "Wormhout",
    "codePostal": 59470,
    "codeInsee": 59663
  },
  {
    "departement": 79,
    "slug": "aiffres",
    "name": "Aiffres",
    "codePostal": 79230,
    "codeInsee": 79003
  },
  {
    "departement": 13,
    "slug": "ensues-la-redonne",
    "name": "Ensuès-la-Redonne",
    "codePostal": 13820,
    "codeInsee": 13033
  },
  {
    "departement": 59,
    "slug": "ostricourt",
    "name": "Ostricourt",
    "codePostal": 59162,
    "codeInsee": 59452
  },
  {
    "departement": 34,
    "slug": "poussan",
    "name": "Poussan",
    "codePostal": 34560,
    "codeInsee": 34213
  },
  {
    "departement": 971,
    "slug": "baillif",
    "name": "Baillif",
    "codePostal": 97123,
    "codeInsee": 97104
  },
  {
    "departement": 29,
    "slug": "chateaulin",
    "name": "Châteaulin",
    "codePostal": 29150,
    "codeInsee": 29026
  },
  {
    "departement": 37,
    "slug": "blere",
    "name": "Bléré",
    "codePostal": 37150,
    "codeInsee": 37027
  },
  {
    "departement": 974,
    "slug": "la-plaine-des-palmistes",
    "name": "Plaine-des-Palmistes",
    "codePostal": 97431,
    "codeInsee": 97406
  },
  {
    "departement": 1,
    "slug": "thoiry-01",
    "name": "Thoiry",
    "codePostal": 1710,
    "codeInsee": 1419
  },
  {
    "departement": 31,
    "slug": "carbonne",
    "name": "Carbonne",
    "codePostal": 31390,
    "codeInsee": 31107
  },
  {
    "departement": 69,
    "slug": "amplepuis",
    "name": "Amplepuis",
    "codePostal": 69550,
    "codeInsee": 69006
  },
  {
    "departement": 34,
    "slug": "clapiers",
    "name": "Clapiers",
    "codePostal": 34830,
    "codeInsee": 34077
  },
  {
    "departement": 44,
    "slug": "chapelle-basse-mer",
    "name": "La Chapelle-Basse-Mer",
    "codePostal": 44450,
    "codeInsee": 44029
  },
  {
    "departement": 25,
    "slug": "grand-charmont",
    "name": "Grand-Charmont",
    "codePostal": 25200,
    "codeInsee": 25284
  },
  {
    "departement": 45,
    "slug": "saint-pryve-saint-mesmin",
    "name": "Saint-Pryvé-Saint-Mesmin",
    "codePostal": 45750,
    "codeInsee": 45298
  },
  {
    "departement": 13,
    "slug": "roque-d-antheron",
    "name": "La Roque-d'Anthéron",
    "codePostal": 13640,
    "codeInsee": 13084
  },
  {
    "departement": 62,
    "slug": "saint-pol-sur-ternoise",
    "name": "Saint-Pol-sur-Ternoise",
    "codePostal": 62130,
    "codeInsee": 62767
  },
  {
    "departement": 62,
    "slug": "blendecques",
    "name": "Blendecques",
    "codePostal": 62575,
    "codeInsee": 62139
  },
  {
    "departement": 37,
    "slug": "chateau-renault",
    "name": "Château-Renault",
    "codePostal": 37110,
    "codeInsee": 37063
  },
  {
    "departement": 31,
    "slug": "beauzelle",
    "name": "Beauzelle",
    "codePostal": 31700,
    "codeInsee": 31056
  },
  {
    "departement": 62,
    "slug": "desvres",
    "name": "Desvres",
    "codePostal": 62240,
    "codeInsee": 62268
  },
  {
    "departement": 62,
    "slug": "marquise",
    "name": "Marquise",
    "codePostal": 62250,
    "codeInsee": 62560
  },
  {
    "departement": 2,
    "slug": "guise",
    "name": "Guise",
    "codePostal": 2120,
    "codeInsee": 2361
  },
  {
    "departement": 94,
    "slug": "ablon-sur-seine",
    "name": "Ablon-sur-Seine",
    "codePostal": 94480,
    "codeInsee": 94001
  },
  {
    "departement": 33,
    "slug": "saint-denis-de-pile",
    "name": "Saint-Denis-de-Pile",
    "codePostal": 33910,
    "codeInsee": 33393
  },
  {
    "departement": 74,
    "slug": "marnaz",
    "name": "Marnaz",
    "codePostal": 74460,
    "codeInsee": 74169
  },
  {
    "departement": 16,
    "slug": "champniers-16",
    "name": "Champniers",
    "codePostal": 16430,
    "codeInsee": 16078
  },
  {
    "departement": 82,
    "slug": "negrepelisse",
    "name": "Nègrepelisse",
    "codePostal": 82800,
    "codeInsee": 82134
  },
  {
    "departement": 62,
    "slug": "cucq",
    "name": "Cucq",
    "codePostal": 62780,
    "codeInsee": 62261
  },
  {
    "departement": 31,
    "slug": "fenouillet-31",
    "name": "Fenouillet",
    "codePostal": 31150,
    "codeInsee": 31182
  },
  {
    "departement": 90,
    "slug": "valdoie",
    "name": "Valdoie",
    "codePostal": 90300,
    "codeInsee": 90099
  },
  {
    "departement": 30,
    "slug": "grand-combe",
    "name": "La Grand-Combe",
    "codePostal": 30110,
    "codeInsee": 30132
  },
  {
    "departement": 47,
    "slug": "fumel",
    "name": "Fumel",
    "codePostal": 47500,
    "codeInsee": 47106
  },
  {
    "departement": 39,
    "slug": "morez",
    "name": "Morez",
    "codePostal": 39400,
    "codeInsee": 39368
  },
  {
    "departement": 56,
    "slug": "pluneret",
    "name": "Pluneret",
    "codePostal": 56400,
    "codeInsee": 56176
  },
  {
    "departement": 78,
    "slug": "saint-nom-la-breteche",
    "name": "Saint-Nom-la-Bretèche",
    "codePostal": 78860,
    "codeInsee": 78571
  },
  {
    "departement": 84,
    "slug": "bedarrides",
    "name": "Bédarrides",
    "codePostal": 84370,
    "codeInsee": 84016
  },
  {
    "departement": 38,
    "slug": "pont-de-cheruy",
    "name": "Pont-de-Chéruy",
    "codePostal": 38230,
    "codeInsee": 38316
  },
  {
    "departement": 22,
    "slug": "ploumagoar",
    "name": "Ploumagoar",
    "codePostal": 22970,
    "codeInsee": 22225
  },
  {
    "departement": 62,
    "slug": "noyelles-godault",
    "name": "Noyelles-Godault",
    "codePostal": 62950,
    "codeInsee": 62624
  },
  {
    "departement": 82,
    "slug": "valence-82",
    "name": "Valence",
    "codePostal": 82400,
    "codeInsee": 82186
  },
  {
    "departement": 59,
    "slug": "dechy",
    "name": "Dechy",
    "codePostal": 59187,
    "codeInsee": 59170
  },
  {
    "departement": 77,
    "slug": "fontenay-tresigny",
    "name": "Fontenay-Trésigny",
    "codePostal": 77610,
    "codeInsee": 77192
  },
  {
    "departement": 44,
    "slug": "saint-jean-de-boiseau",
    "name": "Saint-Jean-de-Boiseau",
    "codePostal": 44640,
    "codeInsee": 44166
  },
  {
    "departement": 83,
    "slug": "sollies-toucas",
    "name": "Solliès-Toucas",
    "codePostal": 83210,
    "codeInsee": 83131
  },
  {
    "departement": 58,
    "slug": "charite-sur-loire",
    "name": "La Charité-sur-Loire",
    "codePostal": 58400,
    "codeInsee": 58059
  },
  {
    "departement": 36,
    "slug": "argenton-sur-creuse",
    "name": "Argenton-sur-Creuse",
    "codePostal": 36200,
    "codeInsee": 36006
  },
  {
    "departement": 86,
    "slug": "neuville-de-poitou",
    "name": "Neuville-de-Poitou",
    "codePostal": 86170,
    "codeInsee": 86177
  },
  {
    "departement": 72,
    "slug": "arnage",
    "name": "Arnage",
    "codePostal": 72230,
    "codeInsee": 72008
  },
  {
    "departement": 42,
    "slug": "chazelles-sur-lyon",
    "name": "Chazelles-sur-Lyon",
    "codePostal": 42140,
    "codeInsee": 42059
  },
  {
    "departement": 57,
    "slug": "moulins-les-metz",
    "name": "Moulins-lès-Metz",
    "codePostal": 57160,
    "codeInsee": 57487
  },
  {
    "departement": 33,
    "slug": "canejan",
    "name": "Canéjan",
    "codePostal": 33610,
    "codeInsee": 33090
  },
  {
    "departement": 83,
    "slug": "fayence",
    "name": "Fayence",
    "codePostal": 83440,
    "codeInsee": 83055
  },
  {
    "departement": 21,
    "slug": "marsannay-la-cote",
    "name": "Marsannay-la-Côte",
    "codePostal": 21160,
    "codeInsee": 21390
  },
  {
    "departement": 69,
    "slug": "saint-laurent-de-mure",
    "name": "Saint-Laurent-de-Mure",
    "codePostal": 69720,
    "codeInsee": 69288
  },
  {
    "departement": 56,
    "slug": "riantec",
    "name": "Riantec",
    "codePostal": 56670,
    "codeInsee": 56193
  },
  {
    "departement": 86,
    "slug": "vouneuil-sous-biard",
    "name": "Vouneuil-sous-Biard",
    "codePostal": 86580,
    "codeInsee": 86297
  },
  {
    "departement": 91,
    "slug": "saintry-sur-seine",
    "name": "Saintry-sur-Seine",
    "codePostal": 91250,
    "codeInsee": 91577
  },
  {
    "departement": 59,
    "slug": "lambres-lez-douai",
    "name": "Lambres-lez-Douai",
    "codePostal": 59552,
    "codeInsee": 59329
  },
  {
    "departement": 38,
    "slug": "mure",
    "name": "La Mure",
    "codePostal": 38350,
    "codeInsee": 38269
  },
  {
    "departement": 25,
    "slug": "valdahon",
    "name": "Valdahon",
    "codePostal": 25800,
    "codeInsee": 25578
  },
  {
    "departement": 73,
    "slug": "challes-les-eaux",
    "name": "Challes-les-Eaux",
    "codePostal": 73190,
    "codeInsee": 73064
  },
  {
    "departement": 974,
    "slug": "saint-philippe",
    "name": "Saint-Philippe",
    "codePostal": 97442,
    "codeInsee": 97417
  },
  {
    "departement": 78,
    "slug": "villennes-sur-seine",
    "name": "Villennes-sur-Seine",
    "codePostal": 78670,
    "codeInsee": 78672
  },
  {
    "departement": 62,
    "slug": "beaurains",
    "name": "Beaurains",
    "codePostal": 62217,
    "codeInsee": 62099
  },
  {
    "departement": 972,
    "slug": "le-morne-rouge",
    "name": "Morne-Rouge",
    "codePostal": 97260,
    "codeInsee": 97218
  },
  {
    "departement": 31,
    "slug": "saint-jory",
    "name": "Saint-Jory",
    "codePostal": 31790,
    "codeInsee": 31490
  },
  {
    "departement": 37,
    "slug": "luynes",
    "name": "Luynes",
    "codePostal": 37230,
    "codeInsee": 37139
  },
  {
    "departement": 69,
    "slug": "champagne-au-mont-d-or",
    "name": "Champagne-au-Mont-d'Or",
    "codePostal": 69410,
    "codeInsee": 69040
  },
  {
    "departement": 33,
    "slug": "pauillac",
    "name": "Pauillac",
    "codePostal": 33250,
    "codeInsee": 33314
  },
  {
    "departement": 77,
    "slug": "quincy-voisins",
    "name": "Quincy-Voisins",
    "codePostal": 77860,
    "codeInsee": 77382
  },
  {
    "departement": 17,
    "slug": "saint-georges-de-didonne",
    "name": "Saint-Georges-de-Didonne",
    "codePostal": 17110,
    "codeInsee": 17333
  },
  {
    "departement": 42,
    "slug": "grand-croix",
    "name": "La Grand-Croix",
    "codePostal": 42320,
    "codeInsee": 42103
  },
  {
    "departement": 57,
    "slug": "boulay-moselle",
    "name": "Boulay-Moselle",
    "codePostal": 57220,
    "codeInsee": 57097
  },
  {
    "departement": 62,
    "slug": "saint-etienne-au-mont",
    "name": "Saint-Étienne-au-Mont",
    "codePostal": 62360,
    "codeInsee": 62746
  },
  {
    "departement": 973,
    "slug": "grand-santi",
    "name": "Grand-Santi",
    "codePostal": 97340,
    "codeInsee": 97357
  },
  {
    "departement": 7,
    "slug": "voulte-sur-rhone",
    "name": "La Voulte-sur-Rhône",
    "codePostal": 7800,
    "codeInsee": 7349
  },
  {
    "departement": 85,
    "slug": "essarts-85",
    "name": "Essarts",
    "codePostal": 85140,
    "codeInsee": 85084
  },
  {
    "departement": 90,
    "slug": "beaucourt",
    "name": "Beaucourt",
    "codePostal": 90500,
    "codeInsee": 90009
  },
  {
    "departement": 56,
    "slug": "quiberon",
    "name": "Quiberon",
    "codePostal": 56170,
    "codeInsee": 56186
  },
  {
    "departement": 35,
    "slug": "breal-sous-montfort",
    "name": "Bréal-sous-Montfort",
    "codePostal": 35310,
    "codeInsee": 35037
  },
  {
    "departement": 48,
    "slug": "marvejols",
    "name": "Marvejols",
    "codePostal": 48100,
    "codeInsee": 48092
  },
  {
    "departement": 13,
    "slug": "roquefort-la-bedoule",
    "name": "Roquefort-la-Bédoule",
    "codePostal": 13830,
    "codeInsee": 13085
  },
  {
    "departement": 67,
    "slug": "drusenheim",
    "name": "Drusenheim",
    "codePostal": 67410,
    "codeInsee": 67106
  },
  {
    "departement": 81,
    "slug": "rabastens",
    "name": "Rabastens",
    "codePostal": 81800,
    "codeInsee": 81220
  },
  {
    "departement": 85,
    "slug": "montaigu-85",
    "name": "Montaigu",
    "codePostal": 85600,
    "codeInsee": 85146
  },
  {
    "departement": 51,
    "slug": "mourmelon-le-grand",
    "name": "Mourmelon-le-Grand",
    "codePostal": 51400,
    "codeInsee": 51388
  },
  {
    "departement": 91,
    "slug": "saulx-les-chartreux",
    "name": "Saulx-les-Chartreux",
    "codePostal": 91160,
    "codeInsee": 91587
  },
  {
    "departement": 38,
    "slug": "pont-eveque",
    "name": "Pont-Évêque",
    "codePostal": 38780,
    "codeInsee": 38318
  },
  {
    "departement": 44,
    "slug": "guemene-penfao",
    "name": "Guémené-Penfao",
    "codePostal": 44290,
    "codeInsee": 44067
  },
  {
    "departement": 47,
    "slug": "foulayronnes",
    "name": "Foulayronnes",
    "codePostal": 47510,
    "codeInsee": 47100
  },
  {
    "departement": 6,
    "slug": "cap-d-ail",
    "name": "Cap-d'Ail",
    "codePostal": 6320,
    "codeInsee": 6032
  },
  {
    "departement": 64,
    "slug": "salies-de-bearn",
    "name": "Salies-de-Béarn",
    "codePostal": 64270,
    "codeInsee": 64499
  },
  {
    "departement": 69,
    "slug": "grezieu-la-varenne",
    "name": "Grézieu-la-Varenne",
    "codePostal": 69290,
    "codeInsee": 69094
  },
  {
    "departement": 44,
    "slug": "chevroliere",
    "name": "La Chevrolière",
    "codePostal": 44118,
    "codeInsee": 44041
  },
  {
    "departement": 69,
    "slug": "genay-69",
    "name": "Genay",
    "codePostal": 69730,
    "codeInsee": 69278
  },
  {
    "departement": 84,
    "slug": "piolenc",
    "name": "Piolenc",
    "codePostal": 84420,
    "codeInsee": 84091
  },
  {
    "departement": 6,
    "slug": "saint-andre-de-la-roche",
    "name": "Saint-André-de-la-Roche",
    "codePostal": 6730,
    "codeInsee": 6114
  },
  {
    "departement": 56,
    "slug": "plouhinec-56",
    "name": "Plouhinec",
    "codePostal": 56680,
    "codeInsee": 56169
  },
  {
    "departement": 11450,
    "slug": 11450,
    "name": "Calvisson",
    "codePostal": 30420,
    "codeInsee": 30062
  },
  {
    "departement": 59,
    "slug": "quesnoy",
    "name": "Le Quesnoy",
    "codePostal": 59530,
    "codeInsee": 59481
  },
  {
    "departement": 27,
    "slug": "conches-en-ouche",
    "name": "Conches-en-Ouche",
    "codePostal": 27190,
    "codeInsee": 27165
  },
  {
    "departement": 54,
    "slug": "pompey",
    "name": "Pompey",
    "codePostal": 54340,
    "codeInsee": 54430
  },
  {
    "departement": 80,
    "slug": "ham-80",
    "name": "Ham",
    "codePostal": 80400,
    "codeInsee": 80410
  }
]

export default dataCities;