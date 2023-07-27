import { restFetcher } from '@/queryClient';
import axios from 'axios';
export const gameResultAPI = async () => {
  try {
    // const response = await restFetcher({
    //   method:'GET',
    //   path: '/result',
    // });
    const response = await axios.get('/test'); //msw
    return response;
  } catch (e) {
    alert('연동 에러');
  }
};
