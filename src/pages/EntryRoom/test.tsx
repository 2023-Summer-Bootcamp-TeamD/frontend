import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getClient } from '@/queryClient'; // queryClient.ts에서 getClient 함수를 가져옴
import { QueryClientProvider } from '@tanstack/react-query';
import EntryRoom from '.';
import axios from 'axios';

const queryClient = getClient();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));
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
  test('1. 초기값 렌더링 확인테스트', () => {
    expect(
      screen.getByRole('button', { name: '입장하기' }),
    ).toBeInTheDocument();
  });
  test('2. 입장코드 입력으로 방 입장 성공 테스트', async () => {
    mockedAxios.post.mockResolvedValue({ status: 201 });

    const codeInput = screen.getByLabelText('입장코드');
    fireEvent.change(codeInput, { target: { value: '12345' } });

    const nickNameInput = screen.getByLabelText('닉네임');
    fireEvent.change(nickNameInput, { target: { value: 'hihi' } });

    fireEvent.submit(screen.getByRole('button', { name: '입장하기' }), {});

    await waitFor(() =>
      expect(mockNavigate).toHaveBeenCalledWith('/game/', {
        state: { nickname: 'hihi' },
      }),
    );
  });
});
