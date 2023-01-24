
export interface DataSingle {
    type:    string;
    format:  string;
    version: string;
    data:    ChampionSingle;
}

export interface ChampionSingle {
    id:          string;
    key:         string;
    name:        string;
    title:       string;
    image:       ImageSingle;
    skins:       Skin[];
    lore:        string;
    blurb:       string;
    allytips:    string[];
    enemytips:   string[];
    tags:        string[];
    partype:     string;
    info:        InfoSingle;
    stats:       { [key: string]: number };
    spells:      Spell[];
    passive:     Passive;
    recommended: any[];
}

export interface ImageSingle {
    full:   string;
    sprite: string;
    group:  string;
    x:      number;
    y:      number;
    w:      number;
    h:      number;
}

export interface InfoSingle {
    attack:     number;
    defense:    number;
    magic:      number;
    difficulty: number;
}

export interface Passive {
    name:        string;
    description: string;
    image:       ImageSingle;
}

export interface Skin {
    id:      string;
    num:     number;
    name:    string;
    chromas: boolean;
}

export interface Spell {
    id:           string;
    name:         string;
    description:  string;
    tooltip:      string;
    leveltip:     Leveltip;
    maxrank:      number;
    cooldown:     number[];
    cooldownBurn: string;
    cost:         number[];
    costBurn:     string;
    datavalues:   Datavalues;
    effect:       Array<number[] | null>;
    effectBurn:   Array<null | string>;
    vars:         any[];
    costType:     string;
    maxammo:      string;
    range:        number[];
    rangeBurn:    string;
    image:        ImageSingle;
    resource:     string;
}

export interface Datavalues {
}

export interface Leveltip {
    label:  string[];
    effect: string[];
}
