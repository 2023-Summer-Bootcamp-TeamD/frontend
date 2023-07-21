import axios, { AxiosInstance } from 'axios';

export const customAxios: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
