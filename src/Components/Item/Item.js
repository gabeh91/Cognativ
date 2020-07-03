import React from 'react';

import Spinner from '../Spinner/Spinner';

import placeholder from '.././../Static/images/placeholder.png';

const Item = props => {

  if (props.price === null) return null;

  return (
    
    props.loading ? 
    (
      <li className="grid__item grid__item--placeholder">
        <div style={{ backgroundImage: `url(${ placeholder })` }} className="grid__item-image" title={ props.title }>
          <Spinner />
        </div>
        <div className="grid__item-content">
          <p className="grid__item-placeholder"></p>
          <p className="grid__item-placeholder"></p>
        </div>
      </li>
    ) :
    (
      <li className="grid__item">
        <div style={{ backgroundImage: `url(${ props.image })` }} className="grid__item-image" title={ props.title }></div>
        <div className="grid__item-content">
          <p className="grid__item-text grid__item-text--capitalize grid__item-text--title">{ props.title }</p>
          <p className="grid__item-text">{ props.description }</p>
          <div className="grid__item-content-interaction">
            <p className="grid__item-price">{ props.price > 0 ? `$${ props.price.toFixed(2) }` : 'Free' }</p>
            <i className="grid__item-icon fas fa-cart-plus" title="Add to cart"></i>
          </div>
        </div>
      </li>
    )
    
  );

}

export default Item;