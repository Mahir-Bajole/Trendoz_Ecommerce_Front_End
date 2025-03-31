import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Componants/Card';

function Search() {
  const filterproducts = useSelector(state => state.products.filteredData);

  return (
    <div>
      <h1 className='text-4xl text-center mt-5 bg-red-500 mx-19 rounded-4xl p-2 text-white font-bold'>
        Shops
      </h1>

      <div className='flex mt-10 rounded-4xl mx-30 h-fit flex-wrap gap-5'>
        {filterproducts.length === 0 ? (
          <div className="flex justify-center items-center w-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/ecommerce-83/25/empty_shopping_cart_ecommerce_online_store_online_shop_shopping_cart_trolley-512.png"
              alt="No Products Found"
              className="rounded-2xl"
            />
          </div>
        ) : (
          filterproducts.map((product, index) => (
            <Card key={index} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
