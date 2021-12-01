const ADD_PIZZA_CART = 'REACT_PIZZA/CART/ADD_PIZZA_CART';

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
      // case ADD_PIZZA_CART: {
      //   const newItems = {
      //     ...state.items,
      //     [action.payload.id]: !state.items[action.payload.id]
      //       ? [action.payload]
      //       : [...state.items[action.payload.id], action.payload],
      //   };
      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzas);

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

export default cart;
