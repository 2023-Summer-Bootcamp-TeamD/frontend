import { atom } from 'recoil';

export const playerCountState = atom({
  key: 'playerCount',
  default: 0,
});
