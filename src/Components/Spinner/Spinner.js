import React from 'react';

const Spinner = props => {

  return (
    <div className={ `spinner ${ props.isMain ? 'spinner--main' : '' }` }></div>
  );

}

export default Spinner;