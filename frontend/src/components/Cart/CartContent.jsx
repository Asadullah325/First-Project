import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 49.99,
      category: "Electronics",
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: "Casual Men's Sneakers",
      price: 59.99,
      category: "Footwear",
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      name: "Smartwatch with Heart Rate Monitor",
      price: 79.99,
      category: "Wearables",
      image: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      name: "Cotton T-Shirt for Women",
      price: 19.99,
      category: "Clothing",
      image: "https://picsum.photos/200?random=4",
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      price: 24.99,
      category: "Accessories",
      image: "https://picsum.photos/200?random=5",
    },
  ];

  return (
    <div className="p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center gap-4 py-4 border-b border-gray-400"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-24 object-cover rounded"
          />
          <div className="flex-grow">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.category}</p>
            
          </div>

          <div className="">
          <p className="text-green-600 text-sm font-bold">${product.price.toFixed(2)}</p>
          <button className="cursor-pointer">
            <RiDeleteBin3Line className="h-5 w-5 text-red-600"/>
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
