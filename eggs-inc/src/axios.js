import { default as axios } from 'axios';

const ax = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

export default ax;
