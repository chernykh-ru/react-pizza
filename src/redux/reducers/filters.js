const SET_SORT_BY = 'REACT_PIZZA/PIZZAS/SET_SORT_BY';
const SET_CATEGORY = 'REACT_PIZZA/PIZZAS/SET_CATEGORY';

const initialState = {
  category: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export const setSortBy = ({ type, order }) => ({
  type: SET_SORT_BY,
  payload: { type, order },
});
// export const setSortBy = (name) => ({
//   type: SET_SORT_BY,
//   payload: name,
// });

export const setCategory = (catIndex) => ({
  type: SET_CATEGORY,
  payload: catIndex,
});

export default filters;
