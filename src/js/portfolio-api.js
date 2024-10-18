import axios from 'axios';

export async function getReviews() {
  const baseURL = 'https://portfolio-js.b.goit.study/api';
  const endPoint = '/reviews';
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data;
}
