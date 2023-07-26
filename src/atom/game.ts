import { atom } from 'recoil';

export const playerCountState = atom({
  key: 'playerCount',
  default: 0,
});
export const nicknameState = atom({
  key: 'nicknameState',
  default: '',
});

export const uuidState = atom<string>({
  key: 'uuidState',
  default: '',
});

export const playerNumState = atom({
  key: 'playerNumState',
  default: 0,
});

export const categoryIdState = atom({
  key: 'categoryIdState',
  default: '',
});

export const scoreState = atom({
  key: 'scoreState',
  default: 0,
});

export const timeState = atom({
  key: 'timeState',
  default: 0,
});
