import { rest } from 'msw';

const dummy = '테스트입니다.';
const resultRes = {
  석차: [
    {
      nickname: '고양양양이',
      score: 10,
    },
    {
      nickname: 'hello',
      score: 6,
    },
    {
      nickname: 'hihih',
      score: 4,
    },
    {
      nickname: 'nodes',
      score: 3,
    },
    {
      nickname: 'teamD',
      score: 2,
    },
    {
      nickname: '노드노드다',
      score: 2,
    },
    {
      nickname: '강아지이이',
      score: 2,
    },
    {
      nickname: '안녕하세요',
      score: 1,
    },
  ],
};

export const handlers = [
  // 테스트 mock api
  rest.get('/test', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummy));
  }),

  // 최종 점수 및 석차 조회 api
  rest.get('/results/34516', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(resultRes));
  }),
];
