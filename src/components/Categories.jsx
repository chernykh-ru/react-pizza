import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  const [activeItem, setActivItem] = React.useState(null);

  // const onSelectItem = (index) => {
  //   // setActivItem(index);
  //   onClickCategory(index);
  // };

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          {/* <li className={activeCategory === null ? 'active' : ''} onClick={() => onSelectItem(null)}> */}
          Все
        </li>
        {items?.map((name, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            onClick={() => onClickCategory(index)}
            // onClick={() => onSelectItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

//проверка типов пропсов
Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
