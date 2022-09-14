import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Hero {
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
    aligment: string;
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

interface CardProps {
  hero: Hero;
  team: Boolean;
}

type InitialState = {
  heroes: Hero[];
};

const initialState: InitialState = {
  heroes: [],
};

const HeroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    setAddHero(state, action: PayloadAction<Hero>) {
      state.heroes = [...state.heroes, action.payload];
      console.log('agregar producto');
      /* toast.success(`${action.payload.name} agregado al carrito!`, {
                position: "bottom-left",
              });   */
    },
    setRemoveHero(state, action: PayloadAction<string>) {
      state.heroes = state.heroes.filter(
        (heroe) => heroe.id !== action.payload,
      );
      console.log('heroe eliminado');
      /* toast.success(`${action.payload.name} agregado al carrito!`, {
                position: "bottom-left",
              });   */
    },
  },
});

export const { setAddHero, setRemoveHero } = HeroSlice.actions;
export default HeroSlice.reducer;
