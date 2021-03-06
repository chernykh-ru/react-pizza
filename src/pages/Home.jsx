import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from './../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/reducers/filters';
// import { onAddCart } from '../redux/reducers/cart';//test
import { fetchPizzas } from '../redux/reducers/pizzas';
import { addPizzaToCart } from '../redux/reducers/cart';

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const cartItems = useSelector(({ cart }) => cart.items);
  const categoryNames = ['Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    // { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' },
  ];

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch],
  );

  const onSelectSortType = React.useCallback(
    (obj) => {
      dispatch(setSortBy(obj));
    },
    [dispatch],
  );

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                key={obj.id}
                {...obj} //оператор распространения spread (…) прокидываем все свойства объекта в пропсы
              />
            )) //хардкодим массив 10ти заглушек
          : Array(10)
              .fill(0)
              .map((_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
}

export default Home;
