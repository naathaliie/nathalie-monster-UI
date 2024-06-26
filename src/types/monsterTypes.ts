import monster_json from "../Data/monsters.json";

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

export const initialMonsterState: GlobalMonsterState = monster_json as GlobalMonsterState;