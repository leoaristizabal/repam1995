import React, { useState } from 'react';


const Products = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="menu" className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray'800 mb-4">Nuestros Productos</h1>
        <p className="text-lg text-gray-400 mb-8">
          Desde los mejores termos para todo tipo de bebidas, hasta toallas para tus días soleados o deportivos
        </p>
      </div>

      {/* Menu tabs */}
      <div className="container mx-auto">
        <ul className="flex justify-center mb-8 space-x-4">
          {['Lo Más Vendido', 'Termos', 'Toallas', 'Otros'].map((category, index) => (
            <li key={index}>
              <button
                className={`py-2 px-4 rounded-lg text-sm font-semibold ${
                  activeTab === category.toLowerCase()
                    ? 'bg-orange1 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-blue1 hover:text-white'
                }`}
                onClick={() => setActiveTab(category.toLowerCase())}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Reemplaza estos bloques con tus productos */}
          <div className="bg-blue1 bg-opacity-40 p-4 rounded shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/image2.jpeg"
              alt="Producto"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h5 className="text-lg font-bold text-white">Termo 16 Oz</h5>
              <p className="text-sm text-gray-400">14,90 $</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-gray-400 text-xs">BestSeller</span>
              </div>
            </div>
          </div>
          <div className="bg-blue1 bg-opacity-40 p-4 rounded shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/image2.jpeg"
              alt="Producto"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h5 className="text-lg font-bold text-white">Termo 16 Oz</h5>
              <p className="text-sm text-gray-400">14,90 $</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-gray-400 text-xs">BestSeller</span>
              </div>
            </div>
          </div>
          <div className="bg-blue1 bg-opacity-40 p-4 rounded shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/image2.jpeg"
              alt="Producto"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h5 className="text-lg font-bold text-white">Termo 16 Oz</h5>
              <p className="text-sm text-gray-400">14,90 $</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-gray-400 text-xs">BestSeller</span>
              </div>
            </div>
          </div>

          {/* Repite el bloque anterior para otros productos */}
          <div className="bg-black p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src="/image1.jpeg"
              alt="Producto"
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="mt-4">
              <h5 className="text-lg font-bold text-white">Toalla 45cm</h5>
                <span className="text-gray-400 text-xs">BestSeller</span>
              <div className="flex items-start flex-col mt-2">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <p className="text-sm text-gray-400">12,90 $</p>
              </div>
            </div>
          </div>

          {/* Otros productos... */}
        </div>
      </div>
    </section>
  );
};

export default Products;
