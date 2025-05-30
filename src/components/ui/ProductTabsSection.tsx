import { useState } from 'react';

interface Product {
  name: string;
  price: string;
  sale: string;
  img: string;
}


const products: Record<string, Product[]> = {
  onSale: [
    { name: 'Cabbage', price: '$14.00', sale: '$10.00', img: '/image/shop-img-04.png.png' },
    { name: 'Tomato', price: '$18.00', sale: '$12.00', img: '/image/shop-img-03.png.png' },
    { name: 'Carrot', price: '$14.00', sale: '$10.00', img: '/image/shop-img-01.png.png' },
  ],
  fruits: [
    { name: 'Kiwi', price: '$16.00', sale: '$12.00', img: '/image/shop-img-05.png.png' },
    { name: 'Purple Cabbage', price: '$16.00', sale: '$12.00', img: '/image/shop-img-06.png.png' },
    { name: 'Brinjal', price: '$16.00', sale: '$12.00', img: '/image/shop-img-07.png.png' },
  ],
  featured: [
    { name: 'Orange', price: '$17.00', sale: '$12.00', img: '/image/shop-img-09.png.png' },
    { name: 'Banana', price: '$17.00', sale: '$12.00', img: '/image/shop-img-10.png.png' },
    { name: 'Watermelon', price: '$16.00', sale: '$12.00', img: '/image/shop-img-11.png.png' },
  ],
};

interface Tab {
  label: string;
  value: string;
}

const tabs: Tab[] = [
  { label: 'On Sale Product', value: 'onSale' },
  { label: 'Fresh Organic Fruits', value: 'fruits' },
  { label: 'Featured Product', value: 'featured' },
];

export default function ProductTabsSection() {
  const [activeTab, setActiveTab] = useState<string>('onSale');

  return (
    <section className="bg-yellow-200 py-10 text-center">
      <div className="mb-4">
        <span className="bg-white px-4 py-1 rounded-full text-sm font-medium">Our Products</span>
      </div>
      <h2 className="text-3xl font-bold mb-6">Products Delivered to Home</h2>

    
      <div className="flex justify-center gap-4 bg-white p-2  rounded-full mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors cursor-pointer ${
              activeTab === tab.value
                ? 'bg-yellow-400 text-white '
                : 'bg-white text-gray-700 hover:bg-yellow-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

  
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
        {products[activeTab].map((product, index) => (
          <div key={index} className="flex flex-col items-center">

            <img src={product.img} alt={product.name} className="w-20 h-20 mb-2 object-contain" />
            <div className="font-semibold">{product.name}</div>
            <div className="text-gray-500 line-through">{product.price}</div>
            <div className="text-green-600 font-bold">{product.sale}</div>
          </div>
        ))}
      </div>
      
    </section>
    
  );
}
