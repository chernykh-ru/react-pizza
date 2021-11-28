// import { pizzasAPI } from '../../api/api';

// const SET_TOTAL_PRICE = 'REACT_PIZZA/CART/SET_TOTAL_PRICE';
// const SET_TOTAL_COUNT = 'REACT_PIZZA/CART/SET_TOTAL_COUNT';
const ADD_PIZZA_CART = 'REACT_PIZZA/CART/ADD_PIZZA_CART';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_PIZZA_CART:
    //   return {
    //     ...state,
    //     items: {
    //       ...state.items,
    //       [action.payload.id]: !state.items[action.payload.id]
    //         ? [action.payload]
    //         : [...state.items[action.payload.id], action.payload],
    //     },
    //     totalCount: Object.keys(state.items).length,
    //   };
    case ADD_PIZZA_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allPizzas = [].concat(...Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalPrice,
        // totalCount: [].concat(...Object.values(newItems)).length,
        // totalCount: Object.keys(newItems).length,
        // totalCount: [].concat.apply([], Object.values(newItems)).length,
      };
    }
    // case SET_TOTAL_PRICE:
    //   return {
    //     ...state,
    //     totalPrice: action.payload,
    //   };
    // case SET_TOTAL_COUNT:
    //   return {
    //     ...state,
    //     totalCount: action.payload,
    //   };
    default:
      return state;
  }
};

//AC
export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});
// export const setTotalPrice = (payload) => ({
//   type: SET_TOTAL_PRICE,
//   payload,
// });

// export const setTotalCount = (payload) => ({
//   type: SET_TOTAL_COUNT,
//   payload,
// });

//TC
// export const fetchPizzas = (category, sortBy) => async (dispatch) => {
//   dispatch(setLoaded(false));
//   const data = await pizzasAPI.getPizzas(category, sortBy);
//   dispatch(setPizzas(data));
// };
// export const fetchPizzas = (category, sortBy) => async (dispatch) => {
//   // debugger;
//   dispatch(setLoaded(false));
//   const data = await pizzasAPI.getPizzas(category, sortBy);
//   setTimeout(() => {
//     dispatch(setPizzas(data));
//   }, 1200); //simulated server response delay
// };

// export const fetchPizzas = () => async (dispatch) => {
//   const { data } = await axios.get('http://localhost:5000/pizzas');
//   dispatch(setPizzas(data));
// };

// export const fetchPizzas = () => (dispatch) => {
//   axios.get(`http://localhost:5000/pizzas?category=${category}`).then(({ data }) => {
//     dispatch(setPizzas(data));
//   });
// };

export default cart;
