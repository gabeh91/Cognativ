import React from 'react';

import Helper from '../../Helpers/Helper';

const Cart = props => {

  const priceArr = props.results.map(a => a.price),
        avg = Helper.getAverage(priceArr),
        sum = Helper.getSum(priceArr);

  return (
    <div className="cart">
      <p className="cart__text">Items average: <b>${ avg.toFixed(2) }</b></p>
      <p className="cart__text">Items Sum: <b>${ sum.toFixed(2) }</b></p>
    </div>
  );

}

export default Cart;