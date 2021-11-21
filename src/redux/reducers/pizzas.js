import { pizzasAPI } from '../../api/api';

const SET_PIZZAS = 'REACT_PIZZA/PIZZAS/SET_PIZZAS';
const SET_LOADED = 'REACT_PIZZA/PIZZAS/SET_LOADED';

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
    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
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

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

//TC
// export const fetchPizzas = (category, sortBy) => async (dispatch) => {
//   dispatch(setLoaded(false));
//   const data = await pizzasAPI.getPizzas(category, sortBy);
//   dispatch(setPizzas(data));
// };
export const fetchPizzas = (category, sortBy) => async (dispatch) => {
  // debugger;
  dispatch(setLoaded(false));
  const data = await pizzasAPI.getPizzas(category, sortBy);
  setTimeout(() => {
    dispatch(setPizzas(data));
  }, 1200); //simulated server response delay
};

// export const fetchPizzas = () => async (dispatch) => {
//   const { data } = await axios.get('http://localhost:5000/pizzas');
//   dispatch(setPizzas(data));
// };

// export const fetchPizzas = () => (dispatch) => {
//   axios.get(`http://localhost:5000/pizzas?category=${category}`).then(({ data }) => {
//     dispatch(setPizzas(data));
//   });
// };

export default pizzas;
