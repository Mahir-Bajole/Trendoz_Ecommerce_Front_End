import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const productnew = useSelector(state => state.products.products);

  const [pr, setPr] = useState(null);

  useEffect(() => {
    const p = productnew.find(product => product.id === parseInt(id));
    if (p) {
      setPr(p);
    } else {
      setPr(null);
    }
  }, [id, productnew]);

  if (!pr) {
    return <div>Product not found or loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center gap-8">
          <div className="w-80 h-80 flex justify-center items-center">
            <img
              src={pr.image}
              alt={pr.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{pr.name}</h2>
          <p className="text-xl font-semibold text-gray-600 mb-4">${pr.price}</p>
         
        </div>
      </div>
      <div className="mt-5 text-center">
        <button
          onClick={() => window.history.back()}
          className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg text-lg hover:bg-gray-400 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
