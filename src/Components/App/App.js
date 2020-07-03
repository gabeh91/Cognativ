import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Mainview from '../Mainview/Mainview';

import { getProductList } from '../../Actions/app';

const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => dispatch(getProductList()), [dispatch]); // Get list of products from API endpoint

  return (
    <Mainview />
  );
  
}

export default App;