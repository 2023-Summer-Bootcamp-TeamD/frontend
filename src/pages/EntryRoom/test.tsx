import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getClient } from '@/queryClient'; // queryClient.ts에서 getClient 함수를 가져옴
import { QueryClientProvider } from '@tanstack/react-query';
import EntryRoom from '.';

const queryClient = getClient();

beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <Router>
        <EntryRoom />
      </Router>
    </QueryClientProvider>,
  );
});

describe('입장 컴포넌트 테스트', () => {
  test('초기값 렌더링 확인테스트', () => {
    expect(
      screen.getByRole('button', { name: '입장하기' }),
    ).toBeInTheDocument();
  });
});
