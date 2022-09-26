export interface Hero {
  appearance: {
    'eye-color': string;
    'hair-color': string;
    gender: string;
    height: [string, string];
    weight: [string, string];
    race: string;
  };
  biography: {
    aliases: string[];
    alignment: string;
    'alter-egos': string;
    'first-appearance': string;
    'full-name': string;
    'place-of-birth': string;
    publisher: string;
  };
  connections: {
    'group-affiliation': string;
    relatives: string;
  };
  id: string;
  name: string;
  image?: { url: string } | null;
  powerstats: {
    combat: string;
    durability: string;
    intelligence: string;
    power: string;
    speed: string;
    strength: string;
  };
  work: {
    occupation: string;
    base: string;
  };
}
