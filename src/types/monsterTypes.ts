

export type OneMonster = {
    id: number;
    img: string;
    förnamn: string;
    efternamn: string;
    klass: string;
    program: string;
    utseende: Utseende;
    kost: Kost;
    intressen: string[];
    kurser: string[];
    betyg: Betyg[];
    hemstad: string;
};

export type Utseende = {
    antal_ögon: number;
    ögonfärg: string;
    antal_tentakler: number;
    hudfärg: string;
    hud: string;
    päls: boolean;
    längd_på_pälsen?: string,
    antal_horn: number;
    magiska_förmågor: string[];
    speciella_unika_saker: string[];
};

export type Kost = {
    köttätare: boolean,
    växtätare: boolean,
    allätare: boolean,
    allergier: string[];
};

export type Betyg = {
    kurs: string,
    betyg: string,
};

export type GlobalMonsterState = {
    monster: OneMonster[];
};

export const initialMonsterState: GlobalMonsterState = {
    monster: [
      {
        "id": 1,
        "img": "gurax_d.png",
        "förnamn": "Gurkax",
        "efternamn": "Dödskling",
        "klass": "B-Grupp",
        "program": "Monsterologi",
        "utseende": {
          "antal_ögon": 3,
          "ögonfärg": "grön",
          "antal_tentakler": 8,
          "hudfärg": "blå",
          "hud": "skrovlig",
          "päls": false,
          "antal_horn": 2,
          "magiska_förmågor": ["telekinesi", "illusioner"],
          "speciella_unika_saker": ["fluorescerande ögon"]
        },
        "kost": {
          "köttätare": false,
          "växtätare": true,
          "allätare": false,
          "allergier": ["nötter", "blommor"]
        },
        "intressen": ["läsa skräckromaner", "samla skedar"],
        "kurser": ["Trolldom", "Mystik", "Rymdlära"],
        "betyg": [
          {"kurs": "Trolldom", "betyg":"B"},
          {"kurs":"Mystik", "betyg":"C+"},
          {"kurs":"Rymdlära", "betyg":"A"}
        ],
        "hemstad": "Svartskog"
      },
      {
        "id": 2,
        "img": "ragnar_f.png",
        "förnamn": "Ragnarg",
        "efternamn": "Flamskalle",
        "klass": "A-Grupp",
        "program": "Skogsvård",
        "utseende": {
          "antal_ögon": 2,
          "ögonfärg": "röd",
          "antal_tentakler": 0,
          "hudfärg": "grå",
          "hud": "slät",
          "päls": true,
          "längd_på_pälsen": "medium",
          "antal_horn": 1,
          "magiska_förmågor": ["växtkontroll", "talande med djur"],
          "speciella_unika_saker": ["grönblå päls"]
        },
        "kost": {
          "köttätare": true,
          "växtätare": false,
          "allätare": false,
          "allergier": ["bär", "gräs"]
        },
        "intressen": ["klättra i träd", "plocka svamp"],
        "kurser": ["Botanik", "Skogsmagi", "Ekologi"],
        "betyg": [
          {"kurs":"Botanik", "betyg":"A"},
          {"kurs":"Skogsmagi", "betyg":"B+"},
          {"kurs":"Ekologi", "betyg":"A-"}
        ],
        "hemstad": "Grottdal"
      },
      {
        "id": 3,
        "img": "blomster_m.png",
        "förnamn": "Blomster",
        "efternamn": "Mångskägg",
        "klass": "C-Grupp",
        "program": "Krukväxter",
        "utseende": {
          "antal_ögon": 5,
          "ögonfärg": "lila",
          "antal_tentakler": 6,
          "hudfärg": "rosa",
          "hud": "mjuk",
          "päls": false,
          "antal_horn": 0,
          "magiska_förmågor": ["växtkontroll", "healing"],
          "speciella_unika_saker": ["blommor i håret"]
        },
        "kost": {
          "köttätare": false,
          "växtätare": true,
          "allätare": false,
          "allergier": ["pollen", "gräs"]
        },
        "intressen": ["odla växter", "skapa parfymer"],
        "kurser": ["Botanik", "Magisk växtlära", "Kemi"],
        "betyg": [
          {"kurs":"Botanik", "betyg":"B-"},
          {"kurs":"Magisk växtlära", "betyg":"A"},
          {"kurs":"Kemi", "betyg":"C"}
        ],
        "hemstad": "Blomsteräng"
      },
      {
        "id": 4,
        "img": "skuggi_n.png",
        "förnamn": "Skuggi",
        "efternamn": "Nattskräck",
        "klass": "A-Grupp",
        "program": "Mörkerstudier",
        "utseende": {
          "antal_ögon": 4,
          "ögonfärg": "svart",
          "antal_tentakler": 0,
          "hudfärg": "mörkgrå",
          "hud": "skrovlig",
          "päls": false,
          "antal_horn": 0,
          "magiska_förmågor": ["mörkerseende", "skräckmanipulation"],
          "speciella_unika_saker": ["osynlig i mörker"]
        },
        "kost": {
          "köttätare": true,
          "växtätare": false,
          "allätare": false,
          "allergier": ["sol", "ljus"]
        },
        "intressen": ["studera skräckhistorier", "gömma sig"],
        "kurser": ["Mörk magi", "Skräckteori", "Undvikande av ljus"],
        "betyg": [
          {"kurs":"Mörk magi", "betyg":"A"},
          {"kurs":"Skräckteori", "betyg":"A+"},
          {"kurs":"Undvikande av ljus","betyg":"B"}
        ],
        "hemstad": "Skuggdal"
      },
      {
        "id": 5,
        "img": "fluffi_v.jpeg",
        "förnamn": "Fluffi",
        "efternamn": "Vindpäls",
        "klass": "B-Grupp",
        "program": "Flygande konst",
        "utseende": {
          "antal_ögon": 2,
          "ögonfärg": "ljusblå",
          "antal_tentakler": 0,
          "hudfärg": "vit",
          "hud": "mjuk",
          "päls": true,
          "längd_på_pälsen": "lång",
          "antal_horn": 0,
          "magiska_förmågor": ["flygande", "vindmanipulation"],
          "speciella_unika_saker": ["fluffig vit päls"]
        },
        "kost": {
          "köttätare": false,
          "växtätare": false,
          "allätare": true,
          "allergier": ["ingen allergi"]
        },
        "intressen": ["flyga i stormar", "bygga luftslott"],
        "kurser": ["Flygteknik", "Meteorologi", "Konst och estetik"],
        "betyg": [
          {"kurs":"Flygteknik", "betyg":"A"},
          {"kurs":"Meteorologi", "betyg":"B+"},
          {"kurs":"Konst och estetik", "betyg":"A-"}
        ],
        "hemstad": "Vindby"
      },
      {
        "id": 6,
        "img": "skuggi_s.jpeg",
        "förnamn": "Skuggi",
        "efternamn": "Skräckrygg",
        "klass": "C-Grupp",
        "program": "Mörkerstudier",
        "utseende": {
          "antal_ögon": 3,
          "ögonfärg": "mörkbrun",
          "antal_tentakler": 0,
          "hudfärg": "grå",
          "hud": "skrovlig",
          "päls": false,
          "antal_horn": 1,
          "magiska_förmågor": ["mörkerseende", "skuggmanipulation"],
          "speciella_unika_saker": ["känslig för ljus"]
        },
        "kost": {
          "köttätare": true,
          "växtätare": false,
          "allätare": false,
          "allergier": ["sol", "ljus"]
        },
        "intressen": ["studera mörk konst", "utforska skuggiga platser"],
        "kurser": ["Mörk magi", "Skräckteori", "Undvikande av ljus"],
        "betyg": [
          {"kurs": "Mörk magi", "betyg": "A-"},
          {"kurs": "Skräckteori", "betyg": "B+"},
          {"kurs": "Undvikande av ljus", "betyg": "B"}
        ],
        "hemstad": "Skuggdal"
      },
      {
        "id": 7,
        "img": "blomster_b.jpeg",
        "förnamn": "Blomster",
        "efternamn": "Blomblad",
        "klass": "B-Grupp",
        "program": "Botanik",
        "utseende": {
          "antal_ögon": 4,
          "ögonfärg": "grön",
          "antal_tentakler": 2,
          "hudfärg": "ljusgrön",
          "hud": "mjuk",
          "päls": false,
          "antal_horn": 0,
          "magiska_förmågor": ["växtkontroll", "blomstermanipulation"],
          "speciella_unika_saker": ["blommor i håret"]
        },
        "kost": {
          "köttätare": false,
          "växtätare": true,
          "allätare": false,
          "allergier": ["pollen", "gräs"]
        },
        "intressen": ["odla sällsynta blommor", "skapa parfymer"],
        "kurser": ["Botanik", "Magisk växtlära", "Kemi"],
        "betyg": [
          {"kurs": "Botanik", "betyg": "A"},
          {"kurs": "Magisk växtlära", "betyg": "A"},
          {"kurs": "Kemi", "betyg": "B+"}
        ],
        "hemstad": "Blomsteräng"
      },
      {
        "id": 8,
        "img": "frosti_i.jpeg",
        "förnamn": "Frosti",
        "efternamn": "Isrygg",
        "klass": "A-Grupp",
        "program": "Ismagi",
        "utseende": {
          "antal_ögon": 2,
          "ögonfärg": "ljusblå",
          "antal_tentakler": 0,
          "hudfärg": "vit",
          "hud": "isig",
          "päls": false,
          "antal_horn": 1,
          "magiska_förmågor": ["isbildning", "köldkontroll"],
          "speciella_unika_saker": ["isformationer på kroppen"]
        },
        "kost": {
          "köttätare": false,
          "växtätare": false,
          "allätare": true,
          "allergier": ["varmt väder", "eld"]
        },
        "intressen": ["skulptera iskonst", "utforska snölandskap"],
        "kurser": ["Ismagi", "Kyla och frost", "Konstnärlig isdesign"],
        "betyg": [
          {"kurs": "Ismagi", "betyg": "A+"},
          {"kurs": "Kyla och frost", "betyg": "A"},
          {"kurs": "Konstnärlig isdesign", "betyg": "A"}
        ],
        "hemstad": "Frostfjäll"
      },
      {
        "id": 9,
        "img": "flamma_v.jpeg",
        "förnamn": "Flamma",
        "efternamn": "Värmebrand",
        "klass": "B-Grupp",
        "program": "Eldkontroll",
        "utseende": {
          "antal_ögon": 3,
          "ögonfärg": "röd",
          "antal_tentakler": 0,
          "hudfärg": "orange",
          "hud": "glödande",
          "päls": false,
          "antal_horn": 2,
          "magiska_förmågor": ["eldskapande", "värmeabsorption"],
          "speciella_unika_saker": ["flammor som dansar runt kroppen"]
        },
        "kost": {
          "köttätare": false,
          "växtätare": false,
          "allätare": true,
          "allergier": ["vatten", "kyla"]
        },
        "intressen": ["utforska vulkaner", "träna eldskapande konster"],
        "kurser": ["Eldkontroll", "Värme och lava", "Pyroteknik"],
        "betyg": [
          {"kurs": "Eldkontroll", "betyg": "A"},
          {"kurs": "Värme och lava", "betyg": "A"},
          {"kurs": "Pyroteknik", "betyg": "A+"}
        ],
        "hemstad": "Flammaby"
      },
      {
        "id": 10,
        "img": "sten_g.jpeg",
        "förnamn": "Sten",
        "efternamn": "Gråskalle",
        "klass": "C-Grupp",
        "program": "Klippkunskap",
        "utseende": {
          "antal_ögon": 2,
          "ögonfärg": "brun",
          "antal_tentakler": 0,
          "hudfärg": "grå",
          "hud": "grovt",
          "päls": false,
          "antal_horn": 0,
          "magiska_förmågor": ["jordskred", "stensköld"],
          "speciella_unika_saker": ["klippformationer på kroppen"]
        },
        "kost": {
          "köttätare": false,
          "växtätare": false,
          "allätare": true,
          "allergier": ["vätska", "vatten"]
        },
        "intressen": ["klättra i berg", "studi av geologiska formationer"],
        "kurser": ["Klippkunskap", "Jordisk magi", "Geologi"],
        "betyg": [
          {"kurs": "Klippkunskap", "betyg": "A-"},
          {"kurs": "Jordisk magi", "betyg": "B+"},
          {"kurs": "Geologi", "betyg": "A"}
        ],
        "hemstad": "Stenby"
      },
      {
        "id": 11,
        "img": "sjo_v.jpeg",
        "förnamn": "Sjö",
        "efternamn": "Vågrygg",
        "klass": "A-Grupp",
        "program": "Vattenmagi",
        "utseende": {
          "antal_ögon": 2,
          "ögonfärg": "blå",
          "antal_tentakler": 4,
          "hudfärg": "ljusblå",
          "hud": "slät",
          "päls": false,
          "antal_horn": 0,
          "magiska_förmågor": ["vattenkontroll", "sjöjungfrusång"],
          "speciella_unika_saker": ["vågor som bildas runt kroppen"]
        },
        "kost": {
          "köttätare": false,
          "växtätare": false,
          "allätare": true,
          "allergier": ["torrhet", "ökensand"]
        },
        "intressen": ["simma i havet", "studera undervattensliv"],
        "kurser": ["Vattenmagi", "Marinbiologi", "Sång och musik under vatten"],
        "betyg": [
          {"kurs": "Vattenmagi", "betyg": "A"},
          {"kurs": "Marinbiologi", "betyg": "A+"},
          {"kurs": "Sång och musik under vatten", "betyg": "A"}
        ],
        "hemstad": "Sjöbyn"
      }
      
      
      
      
    ]
}  
  