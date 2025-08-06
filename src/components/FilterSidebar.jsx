<<<<<<< HEAD
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CarFront,
  Fuel,
  MapPin,
  Calendar,
  Settings,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function FilterSidebar({
  filters,
  setFilters,
  selectedLocation,
  setSelectedLocation,
  carsData,
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
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
    <>
      {/* === Mobile Toggle Button === */}
      <div className="md:hidden fixed top-15 right-4 z-40">
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      {/* === Backdrop Overlay === */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* === Sidebar Container === */}
      <aside
        className={`bg-white w-80 p-4 shadow-lg rounded-lg z-50 max-h-[calc(100vh-100px)] overflow-y-auto scrollbar-thin fixed md:sticky top-24 left-0 transition-transform duration-300 transform ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* === Close Button on Mobile === */}
        <div className="md:hidden flex justify-end mb-2">
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="text-red-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* === Price Range === */}
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

        {/* === Brand Section === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("brand")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <CarFront size={18} /> Brand
            </h2>
            {expandedSections.brand ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.brand && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.brand))).map(
                (brand) =>
                  renderCheckbox("brand", brand, brand.charAt(0).toUpperCase() + brand.slice(1))
              )}
            </div>
          )}
        </div>

        {/* === Location Section === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("location")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <MapPin size={18} /> Location
            </h2>
            {expandedSections.location ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.location && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.location))).map(
                (location) =>
                  renderCheckbox("location", location, location)
              )}
            </div>
          )}
        </div>

        {/* === Body Type === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("body")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <Calendar size={18} /> Body Type
            </h2>
            {expandedSections.body ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.body && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.body))).map((body) =>
                renderCheckbox("body", body, body)
              )}
            </div>
          )}
        </div>

        {/* === Fuel Type === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("fuel")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <Fuel size={18} /> Fuel Type
            </h2>
            {expandedSections.fuel ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.fuel && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.fuelTypes))).map(
                (fuel) => renderCheckbox("fuel", fuel, fuel)
              )}
            </div>
          )}
        </div>

        {/* === Transmission === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("transmission")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <Settings size={18} /> Transmission
            </h2>
            {expandedSections.transmission ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.transmission && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.transmission))).map(
                (transmission) =>
                  renderCheckbox("transmission", transmission, transmission)
              )}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
=======
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CarFront,
  Fuel,
  MapPin,
  Calendar,
  Settings,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function FilterSidebar({
  filters,
  setFilters,
  selectedLocation,
  setSelectedLocation,
  carsData,
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
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
    <>
      {/* === Mobile Toggle Button === */}
      <div className="md:hidden fixed top-15 right-4 z-40">
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="flex items-center gap-1 bg-red-600 text-white px-4 py-2 rounded-md shadow-md"
        >
          <SlidersHorizontal size={16} />
          Filters
        </button>
      </div>

      {/* === Backdrop Overlay === */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* === Sidebar Container === */}
      <aside
        className={`bg-white w-80 p-4 shadow-lg rounded-lg z-50 max-h-[calc(100vh-100px)] overflow-y-auto scrollbar-thin fixed md:sticky top-24 left-0 transition-transform duration-300 transform ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* === Close Button on Mobile === */}
        <div className="md:hidden flex justify-end mb-2">
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="text-red-600"
          >
            <X size={20} />
          </button>
        </div>

        {/* === Price Range === */}
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

        {/* === Brand Section === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("brand")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <CarFront size={18} /> Brand
            </h2>
            {expandedSections.brand ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.brand && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.brand))).map(
                (brand) =>
                  renderCheckbox("brand", brand, brand.charAt(0).toUpperCase() + brand.slice(1))
              )}
            </div>
          )}
        </div>

        {/* === Location Section === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("location")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <MapPin size={18} /> Location
            </h2>
            {expandedSections.location ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.location && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.location))).map(
                (location) =>
                  renderCheckbox("location", location, location)
              )}
            </div>
          )}
        </div>

        {/* === Body Type === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("body")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <Calendar size={18} /> Body Type
            </h2>
            {expandedSections.body ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.body && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.body))).map((body) =>
                renderCheckbox("body", body, body)
              )}
            </div>
          )}
        </div>

        {/* === Fuel Type === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("fuel")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <Fuel size={18} /> Fuel Type
            </h2>
            {expandedSections.fuel ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.fuel && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.fuelTypes))).map(
                (fuel) => renderCheckbox("fuel", fuel, fuel)
              )}
            </div>
          )}
        </div>

        {/* === Transmission === */}
        <div className="mb-6">
          <div
            className="flex items-center justify-between mb-2 cursor-pointer"
            onClick={() => toggleSection("transmission")}
          >
            <h2 className="text-md font-semibold flex items-center gap-2">
              <Settings size={18} /> Transmission
            </h2>
            {expandedSections.transmission ? <ChevronUp /> : <ChevronDown />}
          </div>
          {expandedSections.transmission && (
            <div className="space-y-1">
              {Array.from(new Set(carsData.map((car) => car.transmission))).map(
                (transmission) =>
                  renderCheckbox("transmission", transmission, transmission)
              )}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
>>>>>>> 0b9d9ff80be45c3e85e413b4d56accecb4e19f1d
