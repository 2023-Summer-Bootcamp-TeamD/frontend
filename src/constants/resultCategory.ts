import FoodImg from '@/assets/food.png';
import PersonImg from '@/assets/person.png';
import AnimalImg from '@/assets/animal.png';

export type ResultCategoryType = { img: string; title: string };
export const ResultCategory: ResultCategoryType[] = [
  { img: FoodImg, title: '음식' },
  { img: AnimalImg, title: '동물' },
  { img: PersonImg, title: '인물' },
];
