import FoodImg from '@/assets/Food.png';
import PersonImg from '@/assets/Person.png';
import AnimalImg from '@/assets/Animal.png';

export type ResultCategoryType = { img: string; title: string };
export const ResultCategory : ResultCategoryType[] = [
  { img: FoodImg, title: '음식' },
  { img: AnimalImg, title: '동물' },
  { img: PersonImg, title: '인물' },
];