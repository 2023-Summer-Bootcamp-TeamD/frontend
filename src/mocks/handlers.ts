import { rest } from 'msw';

const dummy = {
  석차: [
    {
      nickname: '고양양양이',
      score: 10,
    },
    {
      nickname: 'hello',
      score: 5,
    },
    {
      nickname: 'hihi',
      score: 5,
    },
    {
      nickname: 'nodes',
      score: 10,
    },
    {
      nickname: '고양양양이',
      score: 5,
    },
    {
      nickname: '노든도나',
      score: 2,
    },
    {
      nickname: '고고',
      score: 1,
    },
    {
      nickname: '핑뭐시기',
      score: 1,
    },
  ],
};

export const handlers = [
  // 테스트 mock api
  rest.get('/test', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummy));
  }),
];
