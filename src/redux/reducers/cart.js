const ADD_PIZZA_CART = 'REACT_PIZZA/CART/ADD_PIZZA_CART';
const CLEAR_PIZZA_CART = 'REACT_PIZZA/CART/CLEAR_PIZZA_CART';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: totalPrice,
      };
    }
    case CLEAR_PIZZA_CART: {
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }
    default:
      return state;
  }
};

//AC
export const addPizzaToCart = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const clearPizzaOnCart = () => ({
  type: CLEAR_PIZZA_CART,
});

export default cart;
