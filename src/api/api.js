import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/',
});

export const pizzasAPI = {
  async getPizzas() {
    const response = await instance.get(`pizzas/`);
    return response.data;
  },
};
