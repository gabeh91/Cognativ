import React, { Children } from 'react';

const ItemList = props => {

  return (

    <ul className="grid">
      {
        Children.map(props.children, child => {
          return child;
        })
      }
    </ul>

  );

}

export default ItemList;