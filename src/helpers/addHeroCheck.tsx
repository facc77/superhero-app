import { toast } from 'react-toastify';
import { Hero } from '../types/Hero';

const addHeroCheck = (teamList: Hero[], hero: Hero) => {
  const heroInclination = (inclinacion: string) => {
    return teamList.reduce(
      (acc, cur) => (cur.biography.alignment === inclinacion ? ++acc : acc),
      0,
    );
  };
  if (teamList.length === 6) {
    toast.error('El nro máximo de integrantes es de 6!', {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
    return false;
  } else if (teamList.some((h) => h.id === hero.id)) {
    toast.error('Ya se encuentra en el equipo!', {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
    return false;
  } else if (
    heroInclination('good') === 3 &&
    hero.biography.alignment === 'good'
  ) {
    toast.error('El equipo ya tiene 3 miembros buenos!', {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
    return false;
  } else if (
    heroInclination('bad') === 3 &&
    hero.biography.alignment === 'bad'
  ) {
    toast.error('El equipo ya tiene 3 miembros malos!', {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });
    return;
  } else {
    return true;
  }
};

export default addHeroCheck;
