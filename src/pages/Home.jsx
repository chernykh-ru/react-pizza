import React from 'react';
import { Categories, SortPopup, PizzaBlock } from './../components';
// import Categories from '../components/Categories';
// import SortPopup from '../components/sortPopup';

function Home({ items }) {
  // деструктурируем пропсы до массива pizzas
  //мэпим массив на элементы
  // console.log(pizzas);
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={['Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
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
