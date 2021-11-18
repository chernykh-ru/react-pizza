import React from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActivItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActivItem(index);
    onClickItem(index);
  };

  return (
    <div className='categories'>
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items?.map((name, index) => (
          <li
            className={activeItem === index ? 'active' : ''}
            onClick={() => onSelectItem(index)}
            key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;

// class Categories extends React.Component {
//   state = {
//     activeItem: null,
//   };
//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//     // this.state.activeItem = index;
//     // this.forceUpdate();
//   };
//   render() {
//     const { items } = this.props;
//     return (
//       <div className='categories'>
//         <ul>
//           <li>Все</li>
//           {items.map((item, index) => (
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={`${item}_${index}`}>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
