import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from '../Itemlist/Itemlist';
import Item from '../Item/Item';
import Pagination from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';
import Cart from '../Cart/Cart';

const Mainview = () => {

  const { productData, isLoading } = useSelector(store => store.app);

  return (
    <main className="mainview">
      
      {
        productData !== null ?
        (
          <>
            <Cart { ...productData } />

            <ItemList>
              {
                productData.results.map((product, idx) => (
                  <Item { ...product } loading={ isLoading } key={ idx } />
                ))
              }
            </ItemList>

            <Pagination /> 
          </>
        ) : 
        (
          <Spinner isMain={ true } />
        )
      }

    </main>
  );
}

export default Mainview;