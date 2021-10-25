import React from 'react';
import classNames from 'classnames';

function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, { 'button-outline': outline })}>
      {children}
    </button>
  );
}

//деструктуризация
// const obj = {name: 'vasya', old: 15}
// const name = obj.name
// const {name, old} = obj
// name
// 'vasya'
// old
// 15

// const arr = [1, 2, 3]
// const [a, b] = arr
// a
// 1
// b
// 2
// c
// c is not defined

export default Button;
