import { restFetcher } from '@/queryClient';
import axios from 'axios';

export const gameResultAPI = async (uuid: string) => {
  try {
    // const response = await restFetcher({
    //   method: 'GET',
    //   path: `/results/${uuid}`,
    // });

    const response = await axios.get(`/results/${uuid}`);
    return response;
  } catch (e) {
    alert('연동 에러');
  }
};
