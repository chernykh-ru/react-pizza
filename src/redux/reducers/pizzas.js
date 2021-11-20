import axios from 'axios';
import { pizzasAPI } from '../../api/api';

const SET_PIZZAS = 'REACT_PIZZA/PIZZAS/SET_PIZZAS';

const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

//AC
export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
});

//TC
export const fetchPizzas = () => async (dispatch) => {
  const data = await pizzasAPI.getPizzas();
  dispatch(setPizzas(data));
};

// export const fetchPizzas = () => async (dispatch) => {
//   const { data } = await axios.get('http://localhost:5000/pizzas');
//   dispatch(setPizzas(data));
// };

// export const fetchPizzas = () => (dispatch) => {
//   axios.get('http://localhost:5000/pizzas').then(({ data }) => {
//     dispatch(setPizzas(data));
//   });
// };

export default pizzas;
