import React from 'react';

function Categories({ items }) {
  // console.log(items);
  return (
    <div className='categories'>
      <ul>
        <li className='active'>Все</li>
        {items.map((item, index) => (
          <li key={`${item}_${index}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;