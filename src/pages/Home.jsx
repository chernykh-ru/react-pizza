import React from 'react';
import { Categories, SortPopup, PizzaBlock } from './../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/reducers/filters';

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const dispatch = useDispatch();

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const categoryNames = ['Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' },
  ];

  // const { items } = useSelector(({ pizzas }) => {
  //   return {
  //     items: pizzas.items,
  //   };
  // });
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          onClickItem={onSelectCategory}
          // onClickItem={(index) => dispatch(setCategory(index))}
          items={categoryNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {items &&
          items.map((obj) => (
            <PizzaBlock
              key={obj.id}
              {...obj} //оператор распространения spread (…) прокидываем все свойства объекта в пропсы
              // name={items.name}
              // imageUrl={items.imageUrl}
              // sizes={items.sizes}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
