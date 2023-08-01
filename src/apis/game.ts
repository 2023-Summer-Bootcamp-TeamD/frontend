import { restFetcher } from '@/queryClient';

export const copyAndPaste = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('입장코드가 복사되었습니다 !');
  } catch (e) {
    console.error('텍스트 복사 중 오류가 발생했습니다:');
  }
};

export const getRoundInfoAPI = async (UUID?: string) => {
  try {
    return await restFetcher({
      method: 'GET',
      path: `/rooms/${UUID}/game/rounds`,
    });
  } catch (e) {
    console.log(e);
  }
};
