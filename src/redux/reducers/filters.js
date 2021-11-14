const initialState = {
  category: 0,
  sortBy: 'popular',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});

export default filters;
