import React from 'react';
import PropTypes from 'prop-types';

const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  // const [activeItem, setActivItem] = React.useState(0);

  const sortRef = React.useRef(); //привязываем div sort хуком
  // console.log(sortRef.current);
  // console.log('items', items);
  // console.log('activeSortType', activeSortType);

  const activeLabel = items.find((obj) => obj.type === activeSortType).name; //берем из пропсов активный элемент, присваиваем его переменной activeLabel и показываем ее в нужном span
  // const activeLabel = items.find((arr) => arr.type === activeSortType).name; //берем из пропсов активный элемент, присваиваем его переменной activeLabel и показываем ее в нужном span
  // const activeLabel = items[activeItem].name; //берем из пропсов активный элемент, присваиваем его переменной activeLabel и показываем ее в нужном span
  // console.log('activeLabel', activeLabel);

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  //---
  const handleOutsideClick = (e) => {
    // console.log(e.path); //путь к элементу на котором был клик
    // если в пути клика(includes -  поиск по массиву путей) есть отслеживаемый сортреф(див сорт)
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false); //при клике вне области попапа, попап скрывается
      // console.log('outsidePopup');
    }
  };
  //навешиваем отслеживание клика на все окно
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  //---
  //переключатель активного элемента массива
  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    }
    // setActivItem(index);
    setVisiblePopup(false); //при клике на один из элементов списка попапа, попап скрывается
  };
  //---
  return (
    <div
      ref={sortRef}
      // ref={(ref) => {
      //   sortRef.current = ref;
      // }}
      className='sort'>
      <div className='sort__label'>
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width='10'
          height='6'
          viewBox='0 0 10 6'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className='sort__popup'>
          <ul>
            {items?.map((obj, index) => (
              <li
                onClick={() => onSelectItem(obj)}
                // onClick={() => onSelectItem(obj.type)}
                className={activeSortType === obj.type ? 'active' : ''}
                key={`${obj.type}_${index}`}>
                {obj.name}
              </li>
            ))}
            {/* <li className='active'>популярности</li>
          <li>цене</li>
          <li>алфавиту</li> */}
          </ul>
        </div>
      )}
    </div>
  );
});
//rfce

//проверка типов пропсов
SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired,
};

SortPopup.defaultProps = { items: [] };

export default SortPopup;
