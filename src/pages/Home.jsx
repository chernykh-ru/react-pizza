import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from './../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/reducers/filters';
import { fetchPizzas } from '../redux/reducers/pizzas';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  const categoryNames = ['Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
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
  // const onSelectSortType = React.useCallback((obj) => {
  //   dispatch(setSortBy(obj.type));
  // }, []);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          // onClickItem={(index) => dispatch(setCategory(index))}
          items={categoryNames}
        />
        <SortPopup
          // activeSortType={sortBy}
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
        {/* <SortPopup items={sortItems} /> */}
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj} //оператор распространения spread (…) прокидываем все свойства объекта в пропсы
              />
            )) //хардкодим массив 10ти заглушек(так себе решение)
          : Array(10)
              .fill(0)
              .map((_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
}

export default Home;
