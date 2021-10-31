import React from 'react';
import { Categories, SortPopup, PizzaBlock } from './../components';
// import Categories from '../components/Categories';
// import SortPopup from '../components/sortPopup';

function Home({ pizzas }) {
  // деструктурируем пропсы до массива pizzas
  //мэпим массив на элементы
  // console.log(pizzas);
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={['Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {pizzas.map((obj) => (
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
