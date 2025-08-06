import React from "react";
import { formatPriceToLakh } from "../utils/formatPrice";

const CarCard = ({ car }) => {
   const { title, price, oldPrice, image } = car;
  return (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col w-auto relative">
    {/* Image and Deal Badge */}
    <div className="px-2">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover rounded-xl"
      />
      <div className="absolute top-4 left-0">
        <span className="bg-red-600 text-white font-semibold px-4 py-1 text-xs rounded-tr-md rounded-br-md shadow">
          Deals: {Math.round(((oldPrice - price) / oldPrice) * 100)}% Off
        </span>
      </div>
    </div>
    {/* Card Content */}
    <div className="p-4 pt-2 flex-1 flex flex-col">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-base font-semibold leading-tight text-gray-800">
          {title}
        </h3>
        <button className="text-red-500 text-lg" aria-label="like">
          ♥
        </button>
      </div>
      <p className="text-xs text-gray-500 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {car.type} | {car.seater} Seater | {car.mileage} Kmpl | {car.fuelTypes} |{" "}
        {car.gear}
      </p>
      <div className="flex items-end justify-between mb-4 space-x-2">
        <span className="text-2xl font-bold text-gray-900">
          ₹ {formatPriceToLakh(price)}
        </span>
        <span className="line-through text-gray-800 text-sm">
          ₹ {formatPriceToLakh(oldPrice)}
        </span>
      </div>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition-all text-base">
        View More
      </button>
    </div>
  </div>
)
};

export default CarCard;
