import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/',
});

export const pizzasAPI = {
  async getPizzas(category, sortBy) {
    const response = await instance.get(
      `pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    );
    return response.data;
  },
};
