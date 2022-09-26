import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hero } from '../../types/Hero';

type InitialState = {
  heroes: Hero[];
  search: string | null;
  heroSelected: Hero | null;
};

const team = JSON.parse(localStorage.getItem('team') || '[]');
const selectedHero = JSON.parse(localStorage.getItem('selectedHero') || '[]');
const savedSearch = window.localStorage.getItem('search');

const initialState: InitialState = {
  heroes: team,
  search: savedSearch,
  heroSelected: selectedHero,
};

const HeroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    setAddHero(state, action: PayloadAction<Hero>) {
      state.heroes = [...state.heroes, action.payload];
    },
    setRemoveHero(state, action: PayloadAction<string>) {
      state.heroes = state.heroes.filter(
        (heroe) => heroe.id !== action.payload,
      );
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSelectedHero(state, action: PayloadAction<Hero>) {
      state.heroSelected = action.payload;
    },
  },
});

export const { setAddHero, setRemoveHero, setSearchValue, setSelectedHero } =
  HeroSlice.actions;
export default HeroSlice.reducer;
