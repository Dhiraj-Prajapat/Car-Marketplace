import React from "react";
import {
  ChevronDown,
  ChevronUp,
  CarFront,
  Fuel,
  MapPin,
  Calendar,
  Settings,
} from "lucide-react";

import { useState } from "react";

export default function FilterSidebar({
  filters,
  setFilters,
  selectedLocation,
  setSelectedLocation,
  carsData,
}) {
  // Count helper function
  const getCount = (type, value) => {
    return carsData.filter((car) => {
      if (type === "brand") return car.brand === value;
      if (type === "fuel") return car.fuelTypes === value;
      if (type === "transmission") return car.transmission === value;
      if (type === "body") return car.body === value;
      if (type === "location") return car.location === value;
      return false;
    }).length;
  };

  const [expandedSections, setExpandedSections] = useState({
    brand: true,
    location: true,
    body: true,
    fuel: true,
    transmission: true,
  });

  const toggleSection = (section) =>
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));

  const toggleFilter = (type, value) => {
    const isArray = Array.isArray(filters[type]);
    setFilters({
      ...filters,
      [type]: isArray
        ? filters[type].includes(value)
          ? filters[type].filter((v) => v !== value)
          : [...filters[type], value]
        : value,
    });
  };

  const renderCheckbox = (type, value, label) => (
    <label
      key={value}
      className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-red-50"
    >
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={filters[type].includes(value)}
          onChange={() => toggleFilter(type, value)}
          className="accent-red-500 w-4 h-4"
        />
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-sm text-gray-500">{getCount(type, value)}</span>
    </label>
  );

  return (
    <aside className="w-80 bg-white rounded-lg p-4 shadow-md overflow-y-auto max-h-[calc(100vh-100px)] sticky top-22 left-0 scrollbar-thin">
      {/* --- Price Range --- */}
      <div className="mb-6">
        <h2 className="text-md font-semibold mb-2">Price Range</h2>
        <div className="text-sm flex justify-between mb-1">
          <span>₹ {filters.priceRange[0].toLocaleString()}</span>
          <span>₹ {filters.priceRange[1].toLocaleString()}</span>
        </div>
        <input
          type="range"
          min={0}
          max={5000000}
          step={10000}
          value={filters.priceRange[1]}
          onChange={(e) =>
            setFilters({
              ...filters,
              priceRange: [filters.priceRange[0], Number(e.target.value)],
            })
          }
          className="w-full accent-red-500"
        />
      </div>

      {/* --- Brand + Models --- */}
      <div className="mb-6 border-t pt-4">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("brand")}
        >
          <h2 className="text-md font-semibold">Brand + Models</h2>
          {expandedSections.brand ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>

        {expandedSections.brand && (
          <div className="space-y-1">
            <input
              type="text"
              placeholder="Search for Car Brands, Model.."
              className="w-full text-sm px-2 py-1 border rounded-md focus:outline-none focus:ring focus:ring-red-100 mb-2"
            />
            {[
              "Maruti Suzuki",
              "Hyundai",
              "Honda",
              "Tata",
              "Renault",
              "Kia",
              "Ford",
              "Mahindra",
            ].map((brand) => renderCheckbox("brand", brand, brand))}
          </div>
        )}
      </div>

      {/* --- Model Year --- */}
      <div className="mb-6 border-t pt-4">
        <h2 className="text-md font-semibold mb-2">Model Year</h2>
        <div className="text-sm flex justify-between mb-1">
          <span>{filters.yearRange[0]}</span>
          <span>{filters.yearRange[1]}</span>
        </div>
        <input
          type="range"
          min={2000}
          max={2025}
          step={1}
          value={filters.yearRange[1]}
          onChange={(e) =>
            setFilters({
              ...filters,
              yearRange: [filters.yearRange[0], Number(e.target.value)],
            })
          }
          className="w-full accent-red-500"
        />
      </div>

      {/* --- Location --- */}
      <div className="mb-6 border-t pt-4">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("location")}
        >
          <h2 className="text-md font-semibold">Location</h2>
          {expandedSections.location ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
        {expandedSections.location && (
          <div className="space-y-1">
            {[
              "Maharashtra",
              "Ahmednagar",
              "Akola",
              "Amravati",
              "Aurangabad",
              "Beed",
              "Bhandara",
              "Buldhana",
            ].map((loc) => (
              <label
                key={loc}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedLocation === loc}
                  onChange={() => setSelectedLocation(loc)}
                  className="form-checkbox h-4 w-4"
                />
                <span className="text-sm">{loc}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* --- Body Type --- */}
      <div className="mb-6 border-t pt-4">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("body")}
        >
          <h2 className="text-md font-semibold">Body Type</h2>
          {expandedSections.body ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
        {expandedSections.body && (
          <div className="space-y-1">
            {["SUV", "Hatchback", "Sedan", "MUV"].map((type) => {
              const count = carsData.filter(
                (car) => car.bodyType?.toLowerCase() === type.toLowerCase()
              ).length;

              return (
                <label
                  key={type}
                  className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-red-50"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.body.includes(type)}
                      onChange={() => toggleFilter("body", type)}
                      className="accent-red-500 w-4 h-4"
                    />
                    <CarFront size={16} className="text-red-500" />
                    <span className="text-sm">{type}</span>
                  </div>
                  <span className="text-sm text-gray-500">{count}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* --- Fuel Type --- */}
      <div className="mb-6 border-t pt-4">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("fuel")}
        >
          <h2 className="text-md font-semibold">Fuel Type</h2>
          {expandedSections.fuel ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>

        {expandedSections.fuel && (
          <div className="space-y-1">
            {["Petrol", "Diesel", "CNG", "Electric"].map((fuel) => {
              const count = carsData.filter(
                (car) => car.fuelTypes?.toLowerCase() === fuel.toLowerCase()
              ).length;

              return (
                <label
                  key={fuel}
                  className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-red-50"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.fuel.includes(fuel)}
                      onChange={() => toggleFilter("fuel", fuel)}
                      className="accent-red-500 w-4 h-4"
                    />
                    <span className="text-sm">{fuel}</span>
                  </div>
                  <span className="text-sm text-gray-500">{count}</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* --- Transmission --- */}
      <div className="mb-6 border-t pt-4">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("transmission")}
        >
          <h2 className="text-md font-semibold">Fuel Type</h2>
          {expandedSections.transmission ? (
            <ChevronUp size={16} />
          ) : (
            <ChevronDown size={16} />
          )}
        </div>
        {expandedSections.transmission && (
          <div className="space-y-1">
            {["Manual", "Automatic"].map((trans) =>
              renderCheckbox("transmission", trans, trans)
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
